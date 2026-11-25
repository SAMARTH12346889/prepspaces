import { evaluateAnswerWithRubric } from '../src/services/questionBankService.js';
import { evaluateWithLocalRubric, buildFinalReport } from '../backend/src/services/aiEvaluationService.js';

const q1 = {
  id: "M01-001",
  questionText: "How do AI, machine learning, deep learning, and generative AI relate to one another?",
  context: "Expected focus areas: Position AI as broad field; Describe ML as data-driven learning; Explain DL layered representations; Describe GenAI as producing new content.",
  expectedPoints: [
    "Position AI as the broad field of intelligent systems",
    "Describe machine learning as data driven model learning",
    "Explain deep learning through layered neural representations",
    "Describe generative AI as producing new content"
  ],
  keywords: ["broad", "machine", "learning", "deep", "layers", "generative", "content"]
};

const q2 = {
  id: "M02-001",
  questionText: "Why is vectorized computation in NumPy dramatically faster than pure Python loops, and how does memory layout affect CPU cache performance?",
  context: "Expected focus areas: Contiguous memory blocks; SIMD processor instructions; CPU cache locality; Eliminating interpreter overhead.",
  expectedPoints: [
    "Explain contiguous memory layout in C vs Python object pointers",
    "Describe SIMD single instruction multiple data execution",
    "Detail CPU cache line hits and temporal spatial locality",
    "Explain eliminating Python interpreter dynamic dispatch"
  ],
  keywords: ["contiguous", "simd", "cache", "locality", "strides", "pointer"]
};

console.log("=== TESTING DYNAMIC ANSWER RATINGS (FRONTEND) ===");

const feEmpty = evaluateAnswerWithRubric(q1, "");
console.log("Empty:", feEmpty.rating, "=> Expected: 0");
if (feEmpty.rating !== 0) throw new Error("Frontend empty rating failed");

const feShort = evaluateAnswerWithRubric(q1, "Just hello");
console.log("Short (<3 words):", feShort.rating, "=> Expected: 0");
if (feShort.rating !== 0) throw new Error("Frontend short rating failed");

const feOffTopic = evaluateAnswerWithRubric(q1, "I really like to eat pizza and watch movies");
console.log("Off-topic:", feOffTopic.rating, "=> Expected: 1");
if (feOffTopic.rating !== 1) throw new Error("Frontend off-topic rating failed");

const feConfusion = evaluateAnswerWithRubric(q1, "I don't know the answer to this question");
console.log("Confusion / Don't know:", feConfusion.rating, "=> Expected: 2");
if (feConfusion.rating !== 2) throw new Error("Frontend confusion rating failed");

const feBrief = evaluateAnswerWithRubric(q2, "NumPy uses contiguous arrays in C.");
console.log("Brief (1 phrase):", feBrief.rating, "=> Expected: 2-4");
if (feBrief.rating < 2 || feBrief.rating > 4) throw new Error("Frontend brief rating failed: " + feBrief.rating);

const feSolid = evaluateAnswerWithRubric(q2, "NumPy stores elements in contiguous memory blocks in C, which enables CPU cache hits and leverages SIMD vector processor instructions. This avoids the Python loop interpreter overhead and dynamic type checking.");
console.log("Solid answer:", feSolid.rating, "=> Expected: 7-9");
if (feSolid.rating < 7 || feSolid.rating > 9) throw new Error("Frontend solid rating failed: " + feSolid.rating);

const feComprehensive = evaluateAnswerWithRubric(q1, "Artificial intelligence is the broad overarching domain of machines exhibiting intelligent behavior. Machine learning is a specific subset of AI where algorithms learn patterns directly from data rather than being explicitly programmed. Deep learning is a specialized branch of machine learning utilizing multi-layered artificial neural networks to automatically extract hierarchical feature representations. Finally, Generative AI is a subset of deep learning focused on synthesizing novel content, such as text, images, and audio, using models like transformers and diffusion models.");
console.log("Comprehensive answer:", feComprehensive.rating, "=> Expected: 9-10");
if (feComprehensive.rating < 9 || feComprehensive.rating > 10) throw new Error("Frontend comprehensive rating failed: " + feComprehensive.rating);

console.log("\n=== TESTING BACKEND LOCAL RUBRIC RATINGS ===");

const beEmpty = evaluateWithLocalRubric(q1, "");
console.log("Backend Empty:", beEmpty.rating, "=> Expected: 0");
if (beEmpty.rating !== 0) throw new Error("Backend empty rating failed");

const beOffTopic = evaluateWithLocalRubric(q1, "I like pizza and sunshine");
console.log("Backend Off-topic:", beOffTopic.rating, "=> Expected: 1");
if (beOffTopic.rating !== 1) throw new Error("Backend off-topic rating failed");

const beConfusion = evaluateWithLocalRubric(q1, "I don't know");
console.log("Backend Don't know:", beConfusion.rating, "=> Expected: 2");
if (beConfusion.rating !== 2) throw new Error("Backend confusion rating failed");

const beSolid = evaluateWithLocalRubric(q1, "Artificial intelligence is the broad field of intelligent systems. Machine learning allows algorithms to learn from data patterns. Deep learning uses layered neural network representations, and Generative AI produces novel content like images and text.");
console.log("Backend Solid:", beSolid.rating, "=> Expected: 7-10");
if (beSolid.rating < 7 || beSolid.rating > 10) throw new Error("Backend solid rating failed: " + beSolid.rating);

console.log("\n=== TESTING FINAL REPORT OVERALL RATING CALCULATION ===");

const report1 = buildFinalReport([
  { questionText: q1.questionText, candidateTranscript: "Artificial intelligence is the broad field of intelligent systems. Machine learning allows algorithms to learn from data patterns. Deep learning uses layered neural network representations, and Generative AI produces novel content like images and text.", rating: 9 },
  { questionText: q2.questionText, candidateTranscript: "NumPy is faster.", rating: 3 }
]);
console.log("Report (9, 3) overall_rating:", report1.overall_rating, "=> Expected: 6.0");
if (report1.overall_rating !== 6.0) throw new Error("Report average failed: " + report1.overall_rating);

const report2 = buildFinalReport([
  { questionText: q1.questionText, candidateTranscript: "", rating: 0 },
  { questionText: q2.questionText, candidateTranscript: "", rating: 0 }
]);
console.log("Report (0, 0) overall_rating:", report2.overall_rating, "=> Expected: 0.0");
if (report2.overall_rating !== 0.0) throw new Error("Report 0 average failed: " + report2.overall_rating);

const report3 = buildFinalReport([]);
console.log("Report empty overall_rating:", report3.overall_rating, "=> Expected: 0.0");
if (report3.overall_rating !== 0.0) throw new Error("Report empty average failed: " + report3.overall_rating);

console.log("\n>>> ALL TESTS PASSED SUCCESSFULLY! <<<");
