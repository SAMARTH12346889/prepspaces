function evaluateAnswerWithRubric(question, transcript, inputMode = "voice") {
  const rawText = (transcript || "").trim();
  const words = rawText ? rawText.split(/\s+/).filter(Boolean) : [];
  const expectedPoints = question?.expectedPoints || question?.expected_points || [];
  const keywords = question?.keywords || [];

  // Check 1: Empty or skipped answers (< 3 words)
  if (words.length < 3) {
    return {
      rating: 0,
      score: 0,
      overallScore: 0,
      feedback: "No answer provided.",
      coveredPoints: [],
      missedPoints: expectedPoints,
      evaluatedBy: "skipped-filter",
    };
  }

  const text = rawText.toLowerCase();

  // Check 2: Off-topic or confusing input detection
  const isOffTopicQuery =
    text.includes("weather") ||
    text.includes("who are you") ||
    text.includes("tell me a joke") ||
    text.includes("ignore previous instructions") ||
    text.includes("write a poem") ||
    text.includes("how are you");

  // Check 3: Clarification / Confusion request
  const isConfusion =
    text.includes("don't know") ||
    text.includes("dont know") ||
    text.includes("not sure") ||
    text.includes("no idea") ||
    text.includes("can you clarify") ||
    text.includes("i don't understand");

  if (isConfusion && words.length < 15) {
    return {
      rating: 2,
      score: 2,
      overallScore: 2.0,
      feedback: "Candidate acknowledged uncertainty and did not provide a technical explanation.",
      coveredPoints: [],
      missedPoints: expectedPoints,
      evaluatedBy: "clarification-detector",
    };
  }

  let coveredCount = 0;
  const coveredPoints = [];
  const missedPoints = [];

  for (const pt of expectedPoints) {
    const ptTokens = pt.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/).filter(w => w.length > 3);
    const matched = ptTokens.filter(tok => text.includes(tok));
    if (matched.length >= 2 || (ptTokens.length <= 3 && matched.length >= 1)) {
      coveredCount++;
      coveredPoints.push(pt);
    } else {
      missedPoints.push(pt);
    }
  }

  const keywordHits = keywords.filter(kw => {
    if (typeof kw === "string") return text.includes(kw.toLowerCase());
    if (Array.isArray(kw)) return kw.some(sub => text.includes(sub.toLowerCase()));
    return false;
  }).length;

  const totalExpected = Math.max(1, expectedPoints.length);
  const totalKeywords = Math.max(1, keywords.length);
  const coverageRatio = coveredCount / totalExpected;
  const keywordRatio = Math.min(1, keywordHits / totalKeywords);

  // Off-topic penalty
  if (isOffTopicQuery || (keywordHits === 0 && coverageRatio === 0 && words.length >= 6)) {
    return {
      rating: 1,
      score: 1,
      overallScore: 1.0,
      feedback: "The answer was off-topic and did not address the technical question asked.",
      coveredPoints: [],
      missedPoints: expectedPoints,
      evaluatedBy: "off-topic-gating",
    };
  }

  // Calculate Rating based on Answer:
  // Coverage: 0 to 5 pts
  const coverageScore = coverageRatio * 5.0;
  // Keywords: 0 to 3 pts
  const keywordScore = Math.min(3.0, keywordRatio * 3.0 + (keywordHits > 0 ? 0.5 : 0));
  // Depth: 0.5 to 2 pts
  let depthScore = 0.5;
  if (words.length >= 25) {
    depthScore = 2.0;
  } else if (words.length >= 15) {
    depthScore = 1.4;
  } else if (words.length >= 8) {
    depthScore = 1.0;
  }

  const baseScore = coverageScore + keywordScore + depthScore;
  const rating = Math.max(1, Math.min(10, Math.round(baseScore)));

  return {
    rating,
    score: rating,
    overallScore: rating,
    feedback: `Covered ${coveredCount}/${totalExpected} core concepts with ${keywordHits} technical terms.`,
    coveredPoints,
    missedPoints,
    evaluatedBy: "dynamic-rubric",
  };
}

const q = {
  id: "test_q1",
  questionText: "Why is vectorized computation in NumPy dramatically faster than pure Python loops, and how does memory layout affect CPU cache performance?",
  expectedPoints: [
    "Explain contiguous memory layout in C vs Python object pointers",
    "Describe SIMD single instruction multiple data execution",
    "Detail CPU cache line hits and temporal spatial locality",
    "Explain eliminating Python interpreter dynamic dispatch"
  ],
  keywords: ["contiguous", "simd", "cache", "locality", "strides", "pointer"]
};

console.log("Empty:", evaluateAnswerWithRubric(q, "").rating); // 0
console.log("Off-topic:", evaluateAnswerWithRubric(q, "I love pizza and summer holidays").rating); // 1
console.log("I don't know:", evaluateAnswerWithRubric(q, "I don't know").rating); // 2
console.log("Brief partial:", evaluateAnswerWithRubric(q, "NumPy uses contiguous arrays in C.").rating); // 3-4
console.log("Solid answer:", evaluateAnswerWithRubric(q, "NumPy stores elements in contiguous memory blocks in C, which enables CPU cache hits and leverages SIMD vector processor instructions. This avoids the Python loop interpreter overhead and dynamic type checking.").rating); // 7-8
console.log("Comprehensive answer:", evaluateAnswerWithRubric(q, "Vectorized computation in NumPy is significantly faster because ndarrays are stored in contiguous memory layouts in C rather than arrays of pointers to Python objects. This contiguous layout maximizes CPU spatial and temporal cache locality, allowing hardware SIMD instructions to execute operations on multiple data points per CPU cycle while completely bypassing Python bytecode interpreter dispatch and GIL overhead.").rating); // 9-10
