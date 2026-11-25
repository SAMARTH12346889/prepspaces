/**
 * AI Evaluation Service for PrepSpaces AI Interview Platform
 * 
 * Supports:
 * 1. Primary LLM: Groq (llama-3.3-70b-versatile) via https://api.groq.com/openai/v1/chat/completions
 *    - temperature: 0.2
 *    - response_format: { type: "json_object" }
 *    - Input payload: question_text, expected_context, candidate_answer, input_mode ("voice" | "typed")
 * 2. 5-Criteria Evaluation Rubric (1-10 + actionable feedback):
 *    - Relevance: Directly answers the question and covers expected focus areas.
 *    - Technical Correctness: Accuracy of technical facts, concepts, and reasoning.
 *    - Depth: Concrete examples, edge cases, trade-offs vs surface-level statements.
 *    - Clarity: Logical structure and progression.
 *    - Communication: Confidence, vocabulary, flow, filler words ("um", "uh", "like").
 * 3. Empty / Skipped Answers:
 *    - If candidate_answer is blank or < 3 words, skip Groq and record 0/10 across all criteria with "No answer provided."
 * 4. Resilient Fallbacks: Cloudflare Workers AI -> Local Rubric
 */

import { fetchGroqWithFallback, getGroqApiKeys } from "./groqClient.js";

const GROQ_EVAL_MODEL = "llama-3.3-70b-versatile";

/**
 * Deterministic 5-criteria rubric evaluation fallback
 */
export function evaluateWithLocalRubric(question, transcript, inputMode = "voice") {
  const text = (transcript || "").trim();
  const words = text ? text.split(/\s+/).filter(Boolean) : [];
  const expectedPoints = question.expected_points || question.expectedPoints || [];
  const keywords = question.keywords || [];
  const context = question.context || expectedPoints.join("; ");
  const questionText = question.questionText || question.question || "this technical question";

  if (words.length < 3) {
    return {
      rating: 0,
      score: 0,
      overallScore: 0,
      scores: {
        relevance: 0,
        technical_correctness: 0,
        depth: 0,
        clarity: 0,
        communication: 0,
      },
      feedback: "No answer provided.",
      rubricFeedback: {
        relevance: "No answer provided.",
        technical_correctness: "No answer provided.",
        depth: "No answer provided.",
        clarity: "No answer provided.",
        communication: "No answer provided.",
      },
      coveredPoints: [],
      missedPoints: expectedPoints,
      strengths: [],
      improvements: ["Candidate did not provide a response to this question."],
      evaluatedBy: "skipped-filter",
    };
  }

  const lowerText = text.toLowerCase();

  // Check 1b: Clarification / Uncertainty / "Don't know"
  const isConfusion =
    lowerText.includes("don't know") ||
    lowerText.includes("dont know") ||
    lowerText.includes("not sure") ||
    lowerText.includes("no idea") ||
    lowerText.includes("can you clarify") ||
    lowerText.includes("i don't understand");

  if (isConfusion && words.length < 15) {
    return {
      rating: 2,
      score: 2,
      overallScore: 2.0,
      scores: {
        relevance: 2,
        technical_correctness: 2,
        depth: 1,
        clarity: 5,
        communication: 5,
      },
      feedback: "Candidate acknowledged uncertainty regarding the topic.",
      rubricFeedback: {
        relevance: "Candidate communicated uncertainty directly rather than inventing facts.",
        technical_correctness: "Did not provide a technical explanation.",
        depth: "Limited depth as uncertainty was acknowledged.",
        clarity: "Clear communication of status.",
        communication: "Professional acknowledgment of knowledge boundary.",
      },
      coveredPoints: [],
      missedPoints: expectedPoints,
      strengths: ["Honest communication regarding familiarity with the topic."],
      improvements: ["Review the foundational concepts of " + (question?.topic || "this module") + "."],
      evaluatedBy: "clarification-detector",
    };
  }
  const coveredPoints = [];
  const missedPoints = [];

  for (const point of expectedPoints) {
    const pointWords = point
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter((w) => w.length > 3);

    const matchCount = pointWords.filter((w) => lowerText.includes(w)).length;
    const matchRatio = pointWords.length > 0 ? matchCount / pointWords.length : 0;

    if (matchRatio >= 0.35 || pointWords.some((w) => lowerText.includes(w))) {
      coveredPoints.push(point);
    } else {
      missedPoints.push(point);
    }
  }

  // Check keywords
  const keywordMatches = keywords.filter((item) => {
    if (Array.isArray(item)) {
      return item.some((w) => typeof w === "string" && lowerText.includes(w.toLowerCase()));
    }
    if (typeof item === "string") {
      return lowerText.includes(item.toLowerCase());
    }
    return false;
  });

  const technicalWords = ["model", "data", "system", "architecture", "trade-off", "performance", "api", "pipeline", "scale", "latency", "layer", "training", "inference", "prompt", "vector", "embedding"];
  const techWordHits = technicalWords.filter((tw) => lowerText.includes(tw)).length;

  // Gating for Off-topic / Irrelevant Answers (0 covered points and 0 domain keywords)
  const isOffTopic = coveredPoints.length === 0 && techWordHits === 0;
  if (isOffTopic) {
    const relevance = 1;
    const technical_correctness = 1;
    const depth = 1;
    const clarity = Math.min(4, Math.round(words.length > 10 ? 3 : 2));
    const communication = Math.min(4, Math.round(words.length > 10 ? 4 : 2));
    const avgScore = 1.4;
    const roundedOverall = 1;

    return {
      rating: 1,
      score: roundedOverall,
      overallScore: avgScore,
      scores: {
        relevance,
        technical_correctness,
        depth,
        clarity,
        communication,
      },
      feedback: "Off-topic response. The answer did not address the question or discuss any expected technical focus areas.",
      rubricFeedback: {
        relevance: `Off-topic. Did not address expected topics: ${expectedPoints.slice(0, 2).join("; ") || context}.`,
        technical_correctness: "No relevant technical concepts, architectures, or terminology were identified.",
        depth: "Lacks technical depth; does not provide engineering trade-offs or technical mechanics.",
        clarity: "Answer did not address the required subject matter.",
        communication: `Spoken in plain language but did not use domain vocabulary${inputMode === "voice" ? " or technical phrasing" : ""}.`,
      },
      coveredPoints: [],
      missedPoints: expectedPoints,
      strengths: [],
      improvements: [
        `Directly address the question asked: "${questionText}"`,
        `Focus on core topics: ${expectedPoints.slice(0, 2).join("; ") || context}`
      ],
      evaluatedBy: "offtopic-filter",
    };
  }

  const totalExpected = Math.max(1, expectedPoints.length);
  const coverageRatio = coveredPoints.length / totalExpected;
  const keywordBonus = keywords.length > 0 ? (keywordMatches.length / keywords.length) * 0.2 : 0.1;

  // 1. Relevance (1-10)
  const relevance = Math.max(2, Math.min(10, Math.round((coverageRatio + keywordBonus) * 7 + (techWordHits > 0 ? 2 : 1))));

  // 2. Technical Correctness (1-10)
  const technical_correctness = Math.max(2, Math.min(10, Math.round(Math.min(5, (techWordHits / 4) * 5) + (coverageRatio * 4) + 1)));

  // 3. Depth (1-10)
  const depthKeywords = ["trade-off", "versus", "because", "example", "latency", "scale", "bottleneck", "constraint", "overhead", "edge case", "production"];
  const depthHits = depthKeywords.filter((dw) => lowerText.includes(dw)).length;
  const wordCountScore = Math.min(4, Math.floor(words.length / 20));
  const depth = Math.max(1, Math.min(10, Math.round(depthHits * 2 + wordCountScore + (coverageRatio > 0.5 ? 2 : 1))));

  // 4. Clarity (1-10)
  const sentences = text.split(/[.!?]+/).filter(Boolean);
  const avgSentenceLength = words.length / Math.max(1, sentences.length);
  const clarityPenalty = avgSentenceLength > 40 || avgSentenceLength < 4 ? 2 : 0;
  const clarity = Math.max(3, Math.min(10, Math.round(7 - clarityPenalty + (words.length > 20 ? 2 : 0))));

  // 5. Communication (1-10)
  const fillerWords = ["um", "uh", "like", "you know", "sort of", "kind of", "basically"];
  const fillerCount = fillerWords.reduce((count, fw) => {
    const regex = new RegExp(`\\b${fw}\\b`, "gi");
    return count + (text.match(regex) || []).length;
  }, 0);
  const commBase = inputMode === "voice" ? 8 : 9;
  const communication = Math.max(3, Math.min(10, Math.round(commBase - Math.min(4, fillerCount * 0.8) + (words.length > 25 ? 1 : 0))));

  const avgScore = Math.round(((relevance + technical_correctness + depth + clarity + communication) / 5) * 10) / 10;
  const roundedOverall = Math.max(1, Math.min(10, Math.round(avgScore)));

  const rubricFeedback = {
    relevance: relevance >= 7
      ? `Directly addressed core focus areas (${coveredPoints.slice(0, 2).join(", ") || "expected topics"}).`
      : `Partially addressed focus areas. Consider focusing more on: ${missedPoints.slice(0, 2).join(", ") || "core question context"}.`,
    technical_correctness: technical_correctness >= 7
      ? "Technical facts, reasoning, and conceptual definitions are accurate."
      : "Technical explanation was high-level; incorporate precise technical terminology and principles.",
    depth: depth >= 7
      ? "Good technical depth with concrete considerations and engineering trade-offs."
      : "Could be expanded with concrete production examples, edge cases, and hardware/latency boundaries.",
    clarity: clarity >= 7
      ? "Well-structured explanation with clear logical progression."
      : "Explanation could be more concisely organized with distinct introductory and concluding points.",
    communication: communication >= 7
      ? `Confident delivery with professional technical vocabulary${inputMode === "voice" ? " and fluent pacing" : ""}.`
      : `Watch for conversational filler words${inputMode === "voice" ? " (e.g. 'um', 'like')" : ""} to maintain an authoritative technical presence.`,
  };

  const feedback = roundedOverall >= 8
    ? `Strong response. Accurately covered ${coveredPoints.length} core point(s) with clear technical reasoning.`
    : roundedOverall >= 5
    ? `Solid foundational answer covering ${coveredPoints.length} point(s). Strengthen by elaborating on: ${missedPoints[0] || "engineering trade-offs"}.`
    : `Developing response. Make sure to directly address the expected focus areas: ${missedPoints.slice(0, 2).join("; ") || context}.`;

  const strengths = [];
  if (relevance >= 6) strengths.push(rubricFeedback.relevance);
  if (technical_correctness >= 6) strengths.push(rubricFeedback.technical_correctness);
  if (strengths.length === 0 && coveredPoints.length > 0) {
    strengths.push(`Addressed concept: ${coveredPoints[0]}`);
  }

  return {
    rating: roundedOverall,
    score: roundedOverall,
    overallScore: avgScore,
    scores: {
      relevance,
      technical_correctness,
      depth,
      clarity,
      communication,
    },
    feedback,
    rubricFeedback,
    coveredPoints,
    missedPoints,
    strengths: [
      rubricFeedback.relevance,
      rubricFeedback.technical_correctness,
    ],
    improvements: missedPoints.length > 0 ? missedPoints.slice(0, 2) : ["Elaborate on quantitative production constraints."],
    evaluatedBy: "rubric-fallback",
  };
}

/**
 * Evaluates an individual candidate answer using Groq (llama-3.3-70b-versatile)
 * with graceful fallback to Cloudflare Workers AI and deterministic rubric.
 */
export async function evaluateAnswer({
  question,
  transcript,
  inputMode = "voice",
  env,
  sessionId = null,
  slotId = null,
  assignedKeyIndex = null,
  twoPhaseFallback = false,
  allowBackupFallback = false,
  onBeforeFallback = null,
  fetchFn = null,
}) {
  const answerText = (transcript || "").trim();
  const words = answerText ? answerText.split(/\s+/).filter(Boolean) : [];
  const expectedPoints = question.expected_points || question.expectedPoints || [];
  const context = question.context || expectedPoints.join("; ");
  const questionText = question.questionText || question.question || "Interview Question";

  // Requirement: Skip Groq API call if candidate_answer is blank or under 3 words
  if (words.length < 3) {
    return {
      scores: {
        relevance: 0,
        technical_correctness: 0,
        depth: 0,
        clarity: 0,
        communication: 0,
      },
      overallScore: 0,
      score: 0,
      feedback: "No answer provided.",
      rubricFeedback: {
        relevance: "No answer provided.",
        technical_correctness: "No answer provided.",
        depth: "No answer provided.",
        clarity: "No answer provided.",
        communication: "No answer provided.",
      },
      coveredPoints: [],
      missedPoints: expectedPoints,
      strengths: [],
      improvements: ["Candidate did not provide a response to this question."],
      evaluatedBy: "skipped-filter",
    };
  }

  // 1. Primary: Groq API (llama-3.3-70b-versatile) with 5-key fallback rotation
  try {
    const trackDomain = question?.courseTitle || question?.moduleTitle || "Software & AI Engineering";
    const systemPrompt = `You are an expert technical interviewer evaluating a candidate's answer for a ${trackDomain} technical interview.
Grade the response across 5 criteria from 1 to 10 (1 = poor, 10 = exceptional) and provide brief actionable feedback:
1. Relevance: Directly answered the question and covered expected focus areas.
2. Technical Correctness: Accuracy of technical facts, concepts, and reasoning.
3. Depth: Concrete examples, edge cases, trade-offs vs surface-level statements.
4. Clarity: Logical structure and ease of comprehension.
5. Communication: Confidence and professional vocabulary (check pacing, flow, and filler words like 'um', 'uh', 'like' for voice answers).

Return strict JSON only matching this format:
{
  "scores": {
    "relevance": 8,
    "technical_correctness": 8,
    "depth": 7,
    "clarity": 8,
    "communication": 7
  },
  "overallScore": 7.6,
  "feedback": "2-3 sentences summarizing performance",
  "rubricFeedback": {
    "relevance": "Brief actionable feedback on relevance",
    "technical_correctness": "Brief actionable feedback on accuracy",
    "depth": "Brief actionable feedback on depth and trade-offs",
    "clarity": "Brief actionable feedback on structure and clarity",
    "communication": "Brief actionable feedback on delivery and vocabulary"
  },
  "coveredPoints": ["point 1"],
  "missedPoints": ["point 2"],
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["improvement 1", "improvement 2"]
}`;

    const userContent = JSON.stringify({
      question_text: questionText,
      expected_context: context,
      expected_points: expectedPoints,
      candidate_answer: answerText,
      input_mode: inputMode,
    });

    const res = await fetchGroqWithFallback(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: GROQ_EVAL_MODEL,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userContent },
          ],
          response_format: { type: "json_object" },
          temperature: 0.2,
          max_tokens: 600,
        }),
      },
      env,
      "ChatEvaluation",
      {
        sessionId,
        slotId,
        assignedKeyIndex,
        twoPhaseFallback,
        allowBackupFallback,
        onBeforeFallback,
        fetchFn,
        tokens: Math.ceil(userContent.length / 4) + 300,
      }
    );

      // Pre-fallback pause: return 202 notice BEFORE attempting backup Key 5 or secondary fallback
      if (res.status === 202 && res.fallbackPending) {
        const pendingData = await res.json().catch(() => ({}));
        return {
          fallbackPending: true,
          notificationRequired: true,
          notificationMessage: pendingData.notificationMessage || res.candidateNotification,
          fallbackType: pendingData.fallbackType,
        };
      }

      if (res.ok) {
        const data = await res.json();
        const content = data.choices?.[0]?.message?.content;
        const parsed = JSON.parse(content);

        const scores = parsed.scores || {};
        const relevance = Math.max(1, Math.min(10, Math.round(Number(scores.relevance) || 7)));
        const technical_correctness = Math.max(1, Math.min(10, Math.round(Number(scores.technical_correctness) || 7)));
        const depth = Math.max(1, Math.min(10, Math.round(Number(scores.depth) || 6)));
        const clarity = Math.max(1, Math.min(10, Math.round(Number(scores.clarity) || 7)));
        const communication = Math.max(1, Math.min(10, Math.round(Number(scores.communication) || 7)));

        const avgScore = Math.round(((relevance + technical_correctness + depth + clarity + communication) / 5) * 10) / 10;
        const roundedOverall = Math.max(1, Math.min(10, Math.round(parsed.overallScore || avgScore)));

        return {
          scores: {
            relevance,
            technical_correctness,
            depth,
            clarity,
            communication,
          },
          overallScore: parsed.overallScore || avgScore,
          score: roundedOverall,
          feedback: parsed.feedback || "Answer evaluated against expected rubric criteria.",
          rubricFeedback: parsed.rubricFeedback || {
            relevance: "Relevance evaluated against focus areas.",
            technical_correctness: "Technical accuracy verified.",
            depth: "Depth and trade-offs assessed.",
            clarity: "Structural clarity evaluated.",
            communication: "Communication evaluated.",
          },
          coveredPoints: parsed.coveredPoints || [],
          missedPoints: parsed.missedPoints || [],
          strengths: parsed.strengths || [],
          improvements: parsed.improvements || [],
          evaluatedBy: "groq-llama-3.3-70b-versatile",
          notificationMessage: res.candidateNotification || null,
        };
      } else {
        const errText = await res.text().catch(() => "");
        console.warn("[aiEvaluationService] Groq API notice (status " + res.status + "):", errText);
      }
    } catch (err) {
      console.warn("[aiEvaluationService] Groq evaluation fetch error:", err);
    }

  // 2. Secondary: Cloudflare Workers AI Fallback
  if (env?.AI) {
    try {
      const messages = [
        {
          role: "system",
          content: "You are a technical interviewer evaluator. Reply strictly in JSON format with { scores: { relevance, technical_correctness, depth, clarity, communication }, overallScore, feedback, rubricFeedback: { relevance, technical_correctness, depth, clarity, communication }, strengths, improvements }.",
        },
        {
          role: "user",
          content: `Question: "${questionText}"\nExpected Context: "${context}"\nAnswer: "${answerText}"\nInput Mode: "${inputMode}"`,
        },
      ];

      const aiRes = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", { messages });
      if (aiRes?.response) {
        const parsed = JSON.parse(aiRes.response);
        const scores = parsed.scores || {};
        const relevance = Math.max(1, Math.min(10, Math.round(Number(scores.relevance) || 7)));
        const technical_correctness = Math.max(1, Math.min(10, Math.round(Number(scores.technical_correctness) || 7)));
        const depth = Math.max(1, Math.min(10, Math.round(Number(scores.depth) || 6)));
        const clarity = Math.max(1, Math.min(10, Math.round(Number(scores.clarity) || 7)));
        const communication = Math.max(1, Math.min(10, Math.round(Number(scores.communication) || 7)));
        const avgScore = Math.round(((relevance + technical_correctness + depth + clarity + communication) / 5) * 10) / 10;

        return {
          scores: { relevance, technical_correctness, depth, clarity, communication },
          overallScore: avgScore,
          score: Math.max(1, Math.min(10, Math.round(avgScore))),
          feedback: parsed.feedback || "Answer evaluated against technical criteria.",
          rubricFeedback: parsed.rubricFeedback || {},
          coveredPoints: parsed.coveredPoints || [],
          missedPoints: parsed.missedPoints || [],
          strengths: parsed.strengths || [],
          improvements: parsed.improvements || [],
          evaluatedBy: "cloudflare-workers-ai",
        };
      }
    } catch (err) {
      console.warn("[aiEvaluationService] Workers AI evaluation notice:", err);
    }
  }

  // 3. Fallback: Deterministic Rubric Baseline
  return evaluateWithLocalRubric(question, answerText, inputMode);
}

/**
 * Builds the lightweight Q&A Report adhering to:
 * {
 *   overall_rating: 7.5,
 *   questions: [
 *     {
 *       question: "Exact question asked by the AI",
 *       student_answer: "Exact transcribed answer given by the student",
 *       expected_answer: "Clear, concise expected answer",
 *       rating: 8
 *     }
 *   ]
 * }
 */
export function buildFinalReport(answers = [], trackName = "AI Engineering & Generative AI") {
  const formattedQuestions = answers.map((a, idx) => {
    const qText = a.questionText || a.question || `Question ${idx + 1}`;
    const studentAns = (a.candidateTranscript || a.transcript || "").trim() || "No answer provided.";
    const words = studentAns === "No answer provided." ? [] : studentAns.split(/\s+/).filter(Boolean);

    let rating = 0;
    if (words.length < 3 || studentAns === "No answer provided.") {
      rating = 0;
    } else if (a.rating !== undefined && a.rating !== null) {
      rating = Math.max(0, Math.min(10, Math.round(Number(a.rating))));
    } else if (a.score !== undefined && a.score !== null) {
      rating = Math.max(0, Math.min(10, Math.round(Number(a.score))));
    } else if (a.overallScore !== undefined && a.overallScore !== null) {
      rating = Math.max(0, Math.min(10, Math.round(Number(a.overallScore))));
    } else {
      const fallbackEval = evaluateWithLocalRubric(a, studentAns, a.inputMode || "voice");
      rating = fallbackEval.rating ?? fallbackEval.score ?? 0;
    }

    let expectedAnswer = a.expectedAnswer || "";
    if (!expectedAnswer) {
      if (a.context) {
        expectedAnswer = a.context.replace(/^Expected focus areas:\s*/i, "").trim();
      } else if (Array.isArray(a.expectedPoints) && a.expectedPoints.length > 0) {
        expectedAnswer = a.expectedPoints.join("; ");
      } else if (Array.isArray(a.expected_points) && a.expected_points.length > 0) {
        expectedAnswer = a.expected_points.join("; ");
      } else {
        expectedAnswer = "Demonstrate solid technical reasoning, correct terminology, and practical trade-offs.";
      }
    }

    return {
      question: qText,
      student_answer: studentAns,
      expected_answer: expectedAnswer,
      rating,
      score: rating,
      overallScore: rating,
      scores: a.scores || { relevance: rating, technical_correctness: rating, depth: rating, clarity: rating, communication: rating },
    };
  });

  const totalRating = formattedQuestions.reduce((sum, q) => sum + (Number(q.rating) || 0), 0);
  const avgRating = formattedQuestions.length > 0
    ? Number((totalRating / formattedQuestions.length).toFixed(1))
    : 0.0;

  return {
    overall_rating: avgRating,
    module_name: trackName,
    overallScore: Math.round(avgRating * 10), // Backward compatibility for tests
    grade: avgRating >= 8.5 ? "A" : avgRating >= 7.0 ? "B" : avgRating >= 5.0 ? "C" : "F",
    questions: formattedQuestions,
    answers: formattedQuestions,
    questionBreakdown: formattedQuestions,
  };
}

/**
 * End-of-Session Groq Evaluation Generator
 * Sends conversation transcript to Groq (Llama) with response_format: { type: "json_object" }
 */
export async function generateGroqReport({ answers = [], moduleName = "AI Engineering", env = null }) {
  if (answers.length === 0) {
    return buildFinalReport(answers, moduleName);
  }

  try {
    const messages = [
      {
        role: "system",
        content: `You are an expert technical interviewer evaluator.
Return strictly a JSON object adhering to this schema:
{
  "overall_rating": 7.5,
  "questions": [
    {
      "question": "Exact question asked by the AI",
      "student_answer": "Exact transcribed answer given by the student",
      "expected_answer": "Clear, concise expected answer (2-3 sentences max)",
      "rating": 8
    }
  ]
}
Each rating must be an integer from 0 to 10 (0 if empty/skipped). overall_rating is the average rounded to 1 decimal place.`,
      },
      {
        role: "user",
        content: `Module: ${moduleName}\n\nQuestions & Student Answers:\n` +
          answers.map((a, i) => `Q${i + 1}: ${a.questionText || a.question}\nStudent Answer: ${a.candidateTranscript || a.transcript || "No answer provided."}\nExpected Context: ${a.context || ""}`).join("\n\n"),
      },
    ];

    const res = await fetchGroqWithFallback(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: GROQ_EVAL_MODEL,
          messages,
          temperature: 0.2,
          response_format: { type: "json_object" },
        }),
      },
      env,
      "ReportGeneration"
    );

    if (res.ok) {
      const data = await res.json();
      const content = data.choices?.[0]?.message?.content;
      if (content) {
        const parsed = JSON.parse(content);
        if (parsed && Array.isArray(parsed.questions)) {
          const overall = Number(parsed.overall_rating || 7.5);
          return {
            overall_rating: overall,
            module_name: moduleName,
            overallScore: Math.round(overall * 10),
            grade: overall >= 8.5 ? "A" : overall >= 7.0 ? "B" : "C",
            questions: parsed.questions,
            answers: parsed.questions,
            questionBreakdown: parsed.questions,
          };
        }
      }
    }
  } catch (err) {
    console.warn("[aiEvaluationService] Groq report generation notice:", err);
  }

  return buildFinalReport(answers, moduleName);
}
