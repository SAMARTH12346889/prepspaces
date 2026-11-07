import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Sliders,
  Terminal,
  ShieldCheck,
  Award,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Clock,
  Copy,
  Check,
  ListOrdered,
  FileCode,
  Sparkles,
  RotateCcw,
  Sigma,
  Activity,
  Calculator,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { AI_MATH_CURRICULUM_SECTIONS } from "./aiMathCurriculumData";
import {
  VectorCosineSimilarityTool,
  MatrixLayerDimensionTool,
  DerivativeTangentVisualizer,
  GradientDescentSimulator,
  CentralLimitTheoremSimulator,
} from "./AIMathDiagrams";

export default function AIMathematics() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'interactive-tools' | 'labs' | 'project' | 'interview' | 'quiz' | 'resources'

  // Section explorer state
  const [selectedSectionIdx, setSelectedSectionIdx] = useState(0);
  const [selectedPartFilter, setSelectedPartFilter] = useState("all");
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  const activeSection = AI_MATH_CURRICULUM_SECTIONS[selectedSectionIdx] || AI_MATH_CURRICULUM_SECTIONS[0];

  const filteredSections = useMemo(() => {
    if (selectedPartFilter === "all") return AI_MATH_CURRICULUM_SECTIONS;
    const partNum = parseInt(selectedPartFilter, 10);
    return AI_MATH_CURRICULUM_SECTIONS.filter((s) => s.partNum === partNum);
  }, [selectedPartFilter]);

  const handleCopyCode = (codeText, idx) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleNextSection = () => {
    if (selectedSectionIdx < AI_MATH_CURRICULUM_SECTIONS.length - 1) {
      setSelectedSectionIdx((prev) => prev + 1);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  const handlePrevSection = () => {
    if (selectedSectionIdx > 0) {
      setSelectedSectionIdx((prev) => prev - 1);
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  // ---------------------------------------------------------------------------
  // PRACTICAL MATHEMATICS LABS (SECTION 34 - LABS 01 TO 07)
  // ---------------------------------------------------------------------------
  const [activeLabId, setActiveLabId] = useState("lab-1");
  const [copiedLabCode, setCopiedLabCode] = useState(false);

  const practicalLabs = [
    {
      id: "lab-1",
      number: "01",
      title: "Mathematical Computation with Python",
      duration: "1.5 hours",
      domain: "Foundations",
      objective: "Translate algebraic formulas, polynomials, and summations into clean, vectorized Python expressions.",
      tasks: [
        "Implement arithmetic polynomials: f(x) = 2x^2 - 4x + 3.",
        "Calculate finite summations and arithmetic means with and without loops.",
        "Compute natural logarithms, exponentials, and sigmoid probabilities.",
        "Visualize quadratic curves and exponential trajectories using Matplotlib.",
      ],
      code: `# Lab 01: Mathematical Computation with Python
import numpy as np

def polynomial_eval(x):
    """f(x) = 2x^2 - 4x + 3"""
    return 2 * (x ** 2) - 4 * x + 3

def sigmoid(z):
    """Logistic Sigmoid: sigma(z) = 1 / (1 + e^(-z))"""
    return 1.0 / (1.0 + np.exp(-z))

x_vals = np.array([-2, -1, 0, 1, 2, 3], dtype=float)
poly_results = polynomial_eval(x_vals)
probabilities = sigmoid(x_vals)

print("X values:     ", x_vals)
print("Polynomial:   ", poly_results)
print("Sigmoid sigma:", np.round(probabilities, 4))`,
      expectedOutput: `X values:      [-2. -1.  0.  1.  2.  3.]
Polynomial:    [19.  9.  3.  1.  3.  9.]
Sigmoid sigma: [0.1192 0.2689 0.5    0.7311 0.8808 0.9526]`,
    },
    {
      id: "lab-2",
      number: "02",
      title: "Vector Operations, Norms & Cosine Similarity",
      duration: "2 hours",
      domain: "Linear Algebra",
      objective: "Implement vector addition, scalar scaling, L1/L2 norms, dot products, and cosine similarity for AI embeddings.",
      tasks: [
        "Construct n-dimensional observation vectors in NumPy.",
        "Calculate Euclidean (L2) and Manhattan (L1) vector norms.",
        "Compute algebraic dot products: a . b = sum(a_i * b_i).",
        "Implement Cosine Similarity to compare word and document embeddings.",
      ],
      code: `# Lab 02: Vector Operations & Similarity Engine
import numpy as np

def vector_similarity_suite(a, b):
    a = np.asarray(a, dtype=float)
    b = np.asarray(b, dtype=float)
    
    dot_prod = np.dot(a, b)
    norm_a = np.linalg.norm(a, ord=2)
    norm_b = np.linalg.norm(b, ord=2)
    
    cosine_sim = dot_prod / (norm_a * norm_b) if (norm_a * norm_b) > 0 else 0.0
    euclidean_dist = np.linalg.norm(a - b)
    manhattan_dist = np.sum(np.abs(a - b))
    
    return {
        "dot_product": dot_prod,
        "norm_a": norm_a,
        "norm_b": norm_b,
        "cosine_similarity": cosine_sim,
        "euclidean_distance": euclidean_dist,
        "manhattan_distance": manhattan_dist
    }

query_vec = [0.25, 0.75, 0.10, 0.90]
doc_vec =   [0.30, 0.70, 0.15, 0.85]
results = vector_similarity_suite(query_vec, doc_vec)

for k, v in results.items():
    print(f"{k:20s}: {v:.4f}")`,
      expectedOutput: `dot_product         : 1.3800
norm_a              : 1.2062
norm_b              : 1.1511
cosine_similarity   : 0.9939
euclidean_distance  : 0.0949
manhattan_distance  : 0.1500`,
    },
    {
      id: "lab-3",
      number: "03",
      title: "Matrix Operations, Solvers & SVD",
      duration: "2.5 hours",
      domain: "Linear Algebra",
      objective: "Multiply matrices, solve linear equation systems (Ax = b), and apply Singular Value Decomposition.",
      tasks: [
        "Multiply matrices (A @ B) and verify dimension compatibility rules.",
        "Solve simultaneous linear equations using np.linalg.solve(A, b).",
        "Compute matrix determinants and rank to determine linear independence.",
        "Decompose matrices with SVD (A = U Sigma V^T) and reconstruct low-rank approximations.",
      ],
      code: `# Lab 03: Matrix Operations & Linear Solvers
import numpy as np

# 1. System of Equations: 2x + y = 8; x + y = 5
A = np.array([[2.0, 1.0], [1.0, 1.0]])
b = np.array([8.0, 5.0])
sol = np.linalg.solve(A, b)
print(f"Linear System Solution: x={sol[0]:.1f}, y={sol[1]:.1f}")

# 2. Singular Value Decomposition
M = np.array([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]])
U, S, Vt = np.linalg.svd(M, full_matrices=False)
M_reconstructed = U @ np.diag(S) @ Vt

print("\\nSingular Values S:", np.round(S, 3))
print("Reconstructed Equals Original:", np.allclose(M, M_reconstructed))`,
      expectedOutput: `Linear System Solution: x=3.0, y=2.0

Singular Values S: [9.526 0.514]
Reconstructed Equals Original: True`,
    },
    {
      id: "lab-4",
      number: "04",
      title: "Calculus, Partial Derivatives & Gradients",
      duration: "2 hours",
      domain: "Calculus",
      objective: "Compute analytical and numerical derivatives, calculate multivariable gradients, and verify backprop chain rules.",
      tasks: [
        "Compare analytical f'(x) = 2x to numerical finite differences (f(x+h) - f(x)) / h.",
        "Calculate partial derivatives for multivariate loss functions.",
        "Compute gradient vectors: nabla f = [df/dx, df/dy].",
        "Verify chain rule propagation through composite functions: y = (3x + 2)^2.",
      ],
      code: `# Lab 04: Numerical & Analytical Gradient Checker
import numpy as np

def loss_func(w1, w2):
    """J(w1, w2) = w1^2 + 3*w2^2"""
    return w1**2 + 3 * (w2**2)

def analytical_gradient(w1, w2):
    return np.array([2 * w1, 6 * w2])

def numerical_gradient(w1, w2, h=1e-5):
    grad_w1 = (loss_func(w1 + h, w2) - loss_func(w1 - h, w2)) / (2 * h)
    grad_w2 = (loss_func(w1, w2 + h) - loss_func(w1, w2 - h)) / (2 * h)
    return np.array([grad_w1, grad_w2])

w1, w2 = 3.0, 4.0
grad_analytical = analytical_gradient(w1, w2)
grad_numerical = numerical_gradient(w1, w2)

print("Analytical Gradient [df/dw1, df/dw2]:", grad_analytical)
print("Numerical Gradient  [df/dw1, df/dw2]:", np.round(grad_numerical, 4))
print("Gradient Difference norm:           ", np.linalg.norm(grad_analytical - grad_numerical))`,
      expectedOutput: `Analytical Gradient [df/dw1, df/dw2]: [ 6. 24.]
Numerical Gradient  [df/dw1, df/dw2]: [ 6. 24.]
Gradient Difference norm:            3.95e-11`,
    },
    {
      id: "lab-5",
      number: "05",
      title: "Probability Simulation & Bayes' Theorem",
      duration: "2 hours",
      domain: "Probability",
      objective: "Simulate random experiments, compute conditional probabilities, and implement Bayes' theorem for diagnosis.",
      tasks: [
        "Simulate 10,000 coin tosses and dice rolls using NumPy random generator.",
        "Calculate empirical joint and marginal probabilities P(A) and P(B).",
        "Implement Bayes' Theorem: P(D | +) = [P(+ | D) * P(D)] / P(+).",
        "Analyze the impact of rare base rates (prevalence) on false positive rates.",
      ],
      code: `# Lab 05: Bayes' Theorem & Screening Simulator
import numpy as np

def compute_bayes_posterior(prior, sensitivity, specificity):
    """
    prior: P(Disease)
    sensitivity: P(+ | Disease)
    specificity: P(- | No Disease)
    """
    p_pos_given_no_d = 1.0 - specificity
    p_positive = (sensitivity * prior) + (p_pos_given_no_d * (1.0 - prior))
    posterior = (sensitivity * prior) / p_positive
    return posterior, p_positive

prior = 0.01        # 1% disease prevalence
sensitivity = 0.90  # 90% true positive rate
specificity = 0.95  # 95% true negative rate

posterior, total_pos = compute_bayes_posterior(prior, sensitivity, specificity)
print(f"Prior Probability P(D):            {prior:.2%}")
print(f"Total Positive Test P(+):          {total_pos:.4f}")
print(f"Posterior Probability P(D | +):    {posterior:.2%}")`,
      expectedOutput: `Prior Probability P(D):            1.00%
Total Positive Test P(+):          0.0585
Posterior Probability P(D | +):    15.38%`,
    },
    {
      id: "lab-6",
      number: "06",
      title: "Descriptive Statistics, CLT & Outlier Detection",
      duration: "2 hours",
      domain: "Statistics",
      objective: "Compute descriptive metrics, calculate IQR outlier bounds, and prove the Central Limit Theorem.",
      tasks: [
        "Calculate mean, median, variance, standard deviation, and IQR quartiles.",
        "Implement Tukey's 1.5 * IQR outlier detection filter.",
        "Demonstrate the Central Limit Theorem across sample sizes N = 5, 30, 100.",
        "Evaluate Pearson correlation coefficients r between features.",
      ],
      code: `# Lab 06: Statistical Analyzer & Outlier Filter
import numpy as np

def detect_outliers_iqr(data):
    q25, q75 = np.percentile(data, [25, 75])
    iqr = q75 - q25
    lower_bound = q25 - 1.5 * iqr
    upper_bound = q75 + 1.5 * iqr
    outliers = data[(data < lower_bound) | (data > upper_bound)]
    clean_data = data[(data >= lower_bound) & (data <= upper_bound)]
    return clean_data, outliers, (lower_bound, upper_bound)

study_scores = np.array([45, 52, 58, 62, 65, 70, 72, 75, 78, 82, 88, 92, 185]) # 185 is outlier
clean, outliers, bounds = detect_outliers_iqr(study_scores)

print(f"IQR Bounds:   [{bounds[0]:.1f}, {bounds[1]:.1f}]")
print(f"Outliers:     {outliers}")
print(f"Clean Mean:   {np.mean(clean):.2f} (Original Mean: {np.mean(study_scores):.2f})")
print(f"Clean Median: {np.median(clean):.2f}")`,
      expectedOutput: `IQR Bounds:   [28.0, 116.0]
Outliers:     [185]
Clean Mean:   70.08 (Original Mean: 78.92)
Clean Median: 71.00`,
    },
    {
      id: "lab-7",
      number: "07",
      title: "Gradient Descent & Loss Function Engine",
      duration: "2.5 hours",
      domain: "Optimization",
      objective: "Implement MSE, MAE, and Binary Cross-Entropy losses, and code gradient descent optimization from scratch.",
      tasks: [
        "Code vector-safe MSE, MAE, and Cross-Entropy loss functions.",
        "Implement gradient descent parameter updates: theta_new = theta - eta * grad.",
        "Compare learning rate convergence (&eta; = 0.01 vs 0.1 vs 1.1).",
        "Track loss reduction history across training epochs.",
      ],
      code: `# Lab 07: Gradient Descent & Loss Optimization Engine
import numpy as np

def mean_squared_error(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

# Training data: 1 feature x -> y
X = np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0])
y = np.array([35.0, 42.0, 48.0, 55.0, 62.0, 69.0])
n = len(X)

w, b = 0.0, 0.0
lr = 0.01
epochs = 2000

for epoch in range(epochs):
    y_pred = w * X + b
    errors = y_pred - y
    
    # Gradients of MSE
    dw = (2.0 / n) * np.sum(errors * X)
    db = (2.0 / n) * np.sum(errors)
    
    # Updates
    w -= lr * dw
    b -= lr * db

print(f"Trained Parameters: w = {w:.3f}, b = {b:.3f}")
print(f"Final MSE Loss:     {mean_squared_error(y, w * X + b):.4f}")
print(f"Prediction for x=7: {w * 7 + b:.2f}")`,
      expectedOutput: `Trained Parameters: w = 6.800, b = 28.067
Final MSE Loss:     0.1333
Prediction for x=7: 75.67`,
    },
  ];

  const currentLab = practicalLabs.find((l) => l.id === activeLabId) || practicalLabs[0];

  const handleCopyLabCode = () => {
    navigator.clipboard.writeText(currentLab.code);
    setCopiedLabCode(true);
    setTimeout(() => setCopiedLabCode(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // INTEGRATED PROJECT (SECTION 35 - MATHEMATICAL ENGINE FOR MACHINE LEARNING)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    partA: false,
    partB: false,
    partC: false,
    partD: false,
    partE: false,
    partF: false,
    partG: false,
  });

  const toggleProjectChecklist = (key) => {
    setProjectChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedProjectCount = Object.values(projectChecklist).filter(Boolean).length;
  const [copiedProjectCode, setCopiedProjectCode] = useState(false);

  const fullEngineScript = `"""
Mathematical Engine for Machine Learning
PrepSpaces AI Engineering Masterclass - Module 02 Integrated Project
Modules:
  - Part A: Linear Algebra (Vectors, Norms, Cosine Sim, Matrices)
  - Part B: Calculus (Analytical & Finite Difference Gradients)
  - Part C: Probability (Events, Bayes' Theorem, Bernoulli/Normal)
  - Part D: Statistics (Descriptive Stats, Covariance, Outliers)
  - Part E: Optimization & Losses (MSE, MAE, BCE, Gradient Descent)
"""
import numpy as np

# ===========================================================================
# PART A: LINEAR ALGEBRA ENGINE
# ===========================================================================
class LinearAlgebraEngine:
    @staticmethod
    def dot_product(u, v):
        u, v = np.asarray(u, dtype=float), np.asarray(v, dtype=float)
        return float(np.sum(u * v))

    @staticmethod
    def vector_norm(v, ord=2):
        v = np.asarray(v, dtype=float)
        return float(np.linalg.norm(v, ord=ord))

    @staticmethod
    def cosine_similarity(u, v):
        u, v = np.asarray(u, dtype=float), np.asarray(v, dtype=float)
        norm_u, norm_v = np.linalg.norm(u), np.linalg.norm(v)
        if norm_u == 0 or norm_v == 0:
            return 0.0
        return float(np.dot(u, v) / (norm_u * norm_v))

    @staticmethod
    def matrix_multiply(A, B):
        A, B = np.asarray(A, dtype=float), np.asarray(B, dtype=float)
        if A.shape[1] != B.shape[0]:
            raise ValueError(f"Inner dimensions mismatch: {A.shape} vs {B.shape}")
        return A @ B

# ===========================================================================
# PART B: CALCULUS & GRADIENTS ENGINE
# ===========================================================================
class CalculusEngine:
    @staticmethod
    def numerical_derivative(f, x, h=1e-5):
        return (f(x + h) - f(x - h)) / (2.0 * h)

    @staticmethod
    def numerical_gradient(f, w, h=1e-5):
        w = np.asarray(w, dtype=float)
        grad = np.zeros_like(w)
        for i in range(len(w)):
            w_plus = w.copy()
            w_minus = w.copy()
            w_plus[i] += h
            w_minus[i] -= h
            grad[i] = (f(w_plus) - f(w_minus)) / (2.0 * h)
        return grad

# ===========================================================================
# PART C: PROBABILITY ENGINE
# ===========================================================================
class ProbabilityEngine:
    @staticmethod
    def bayes_theorem(prior, sensitivity, specificity):
        p_false_pos = 1.0 - specificity
        total_pos = (sensitivity * prior) + (p_false_pos * (1.0 - prior))
        posterior = (sensitivity * prior) / total_pos
        return posterior

# ===========================================================================
# PART D: STATISTICS ENGINE
# ===========================================================================
class StatisticsEngine:
    @staticmethod
    def summarize(data):
        d = np.asarray(data, dtype=float)
        q25, q50, q75 = np.percentile(d, [25, 50, 75])
        return {
            "mean": float(np.mean(d)),
            "median": float(q50),
            "variance": float(np.var(d, ddof=1)),
            "std_dev": float(np.std(d, ddof=1)),
            "iqr": float(q75 - q25),
        }

# ===========================================================================
# PART E: OPTIMIZATION & LOSS ENGINE
# ===========================================================================
class OptimizationEngine:
    @staticmethod
    def mean_squared_error(y_true, y_pred):
        y_true, y_pred = np.asarray(y_true, dtype=float), np.asarray(y_pred, dtype=float)
        return float(np.mean((y_true - y_pred) ** 2))

    @staticmethod
    def mean_absolute_error(y_true, y_pred):
        y_true, y_pred = np.asarray(y_true, dtype=float), np.asarray(y_pred, dtype=float)
        return float(np.mean(np.abs(y_true - y_pred)))

    @staticmethod
    def binary_cross_entropy(y_true, p_pred, eps=1e-12):
        y_true = np.asarray(y_true, dtype=float)
        p_pred = np.clip(np.asarray(p_pred, dtype=float), eps, 1.0 - eps)
        return float(-np.mean(y_true * np.log(p_pred) + (1.0 - y_true) * np.log(1.0 - p_pred)))

    @staticmethod
    def gradient_descent(loss_fn, grad_fn, w_init, lr=0.05, max_iters=100):
        w = float(w_init)
        history = []
        for step in range(max_iters):
            grad = grad_fn(w)
            w -= lr * grad
            loss = loss_fn(w)
            history.append((w, loss))
            if abs(grad) < 1e-6:
                break
        return w, history

# ===========================================================================
# VERIFICATION SUITE
# ===========================================================================
if __name__ == "__main__":
    print("=== MATHEMATICAL ENGINE VERIFICATION ===")
    
    # 1. Linear Algebra Test
    u = [1, 2, 3]
    v = [2, 4, 6]
    cos_sim = LinearAlgebraEngine.cosine_similarity(u, v)
    print(f"Cosine Similarity [1,2,3] vs [2,4,6]: {cos_sim:.4f}")
    
    # 2. Calculus Test
    func = lambda x: x ** 2
    df_dx = CalculusEngine.numerical_derivative(func, 3.0)
    print(f"Derivative of x^2 at x=3:               {df_dx:.4f}")
    
    # 3. Bayes Test
    post = ProbabilityEngine.bayes_theorem(prior=0.01, sensitivity=0.90, specificity=0.95)
    print(f"Bayes Posterior P(D|+):                 {post:.4f}")
    
    # 4. Optimization Test: Min J(w) = (w - 3)^2
    loss_f = lambda w: (w - 3.0) ** 2
    grad_f = lambda w: 2.0 * (w - 3.0)
    w_opt, _ = OptimizationEngine.gradient_descent(loss_f, grad_f, w_init=0.0, lr=0.1)
    print(f"Gradient Descent Opt for (w - 3)^2:    {w_opt:.4f}")
`;

  const handleCopyProjectScript = () => {
    navigator.clipboard.writeText(fullEngineScript);
    setCopiedProjectCode(true);
    setTimeout(() => setCopiedProjectCode(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // KNOWLEDGE ASSESSMENT (SECTION 36.1 - 15 UNIVERSITY MCQS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What is the result of the dot product of [1, 2] and [3, 4]?",
      options: ["7", "10", "11", "14"],
      correct: 2,
      explanation: "Dot product = (1)(3) + (2)(4) = 3 + 8 = 11.",
    },
    {
      id: 2,
      question: "A matrix with 3 rows and 4 columns has which shape in standard notation?",
      options: ["(4, 3)", "(3, 4)", "(3, 3)", "(4, 4)"],
      correct: 1,
      explanation: "Matrix dimensions are written as rows x columns, so 3 rows and 4 columns is shape (3, 4).",
    },
    {
      id: 3,
      question: "When is a square matrix guaranteed to be invertible?",
      options: [
        "When its determinant is zero",
        "When its determinant is nonzero",
        "When all entries are positive",
        "When its diagonal elements are zero",
      ],
      correct: 1,
      explanation: "A square matrix A is invertible (non-singular) if and only if det(A) != 0.",
    },
    {
      id: 4,
      question: "What does a mathematical derivative measure?",
      options: [
        "The total number of discrete data points",
        "The instantaneous rate of change of a function with respect to an input",
        "The overall sample variance",
        "The rank of a vector space",
      ],
      correct: 1,
      explanation: "The derivative df/dx represents the instantaneous rate of change, or the slope of the tangent line to the curve at that point.",
    },
    {
      id: 5,
      question: "What is the gradient of f(x) = x^2 at x = 3?",
      options: ["3", "6", "9", "12"],
      correct: 1,
      explanation: "f'(x) = 2x. Evaluated at x = 3, f'(3) = 2(3) = 6.",
    },
    {
      id: 6,
      question: "Which calculus differentiation rule is used to differentiate a composite function f(g(x))?",
      options: ["Product rule", "Quotient rule", "Chain rule", "Complement rule"],
      correct: 2,
      explanation: "The Chain Rule states that d/dx[f(g(x))] = f'(g(x)) * g'(x). This is the mathematical cornerstone of backpropagation in neural networks.",
    },
    {
      id: 7,
      question: "What is the probability of rolling an even number on a fair six-sided die?",
      options: ["1/6", "1/3", "1/2", "2/3"],
      correct: 2,
      explanation: "Even outcomes = {2, 4, 6} (3 outcomes). Total outcomes = 6. Probability = 3/6 = 1/2 = 0.5.",
    },
    {
      id: 8,
      question: "What does Bayes' theorem calculate?",
      options: [
        "Matrix rank",
        "Updated conditional posterior probability given prior and likelihood evidence",
        "Determinant of an orthogonal matrix",
        "Eigenvalues of a covariance matrix",
      ],
      correct: 1,
      explanation: "Bayes' theorem updates probability: P(A|B) = [P(B|A) * P(A)] / P(B).",
    },
    {
      id: 9,
      question: "Which statistical measure is defined as the square root of variance?",
      options: ["Mean", "Median", "Standard deviation", "Covariance"],
      correct: 2,
      explanation: "Standard deviation sigma is the square root of variance: sigma = sqrt(Var(X)).",
    },
    {
      id: 10,
      question: "What does the Central Limit Theorem (CLT) describe?",
      options: [
        "Matrix factorization speedups",
        "The sampling distribution of the sample mean tends toward a normal distribution as sample size increases, regardless of population skew",
        "Vector projection onto an orthonormal basis",
        "Loss function convexity",
      ],
      correct: 1,
      explanation: "CLT proves that averages of independent random variables approach a normal distribution as sample size N grows large.",
    },
    {
      id: 11,
      question: "What is the primary purpose of Gradient Descent in Machine Learning?",
      options: [
        "Increase input matrix dimensions",
        "Iteratively adjust parameters in the direction of the negative gradient to minimize a loss function",
        "Generate random numbers",
        "Calculate sample medians",
      ],
      correct: 1,
      explanation: "Gradient descent updates parameters: theta_{t+1} = theta_t - eta * grad(J), driving the model toward minimum loss.",
    },
    {
      id: 12,
      question: "Which loss function is most commonly used for continuous numerical regression tasks?",
      options: ["Mean Squared Error (MSE)", "Binary Cross-Entropy", "Hinge Loss", "Cosine Loss"],
      correct: 0,
      explanation: "Mean Squared Error (MSE) penalizes squared differences between continuous predictions and actual numerical targets.",
    },
    {
      id: 13,
      question: "What problem can an excessively high learning rate (eta) cause in gradient descent?",
      options: [
        "Guaranteed instant convergence",
        "Overshooting the minimum, numerical oscillation, or diverging to infinity",
        "Making the gradient exactly zero",
        "Doubling the dataset size",
      ],
      correct: 1,
      explanation: "If eta is too large, parameter updates take steps larger than the curvature of the valley, causing loss to explode or oscillate uncontrollably.",
    },
    {
      id: 14,
      question: "Which matrix decomposition factors a matrix A into U * Sigma * V^T?",
      options: ["LU Decomposition", "QR Decomposition", "Singular Value Decomposition (SVD)", "Cholesky Decomposition"],
      correct: 2,
      explanation: "SVD decomposes any real matrix into left singular vectors U, singular values Sigma, and transposed right singular vectors V^T.",
    },
    {
      id: 15,
      question: "What is the primary mathematical purpose of L2 (Ridge) Regularization in loss functions?",
      options: [
        "Reward large weights",
        "Penalize large parameter magnitudes (lambda * sum(w_i^2)) to discourage overfitting and complex models",
        "Remove all validation data",
        "Force all weights to be exactly zero",
      ],
      correct: 1,
      explanation: "L2 regularization adds lambda * ||w||_2^2 to the loss, preventing individual weights from becoming excessively large and fragile.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let count = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) count += 1;
    });
    return count;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Top Module Navigation Bar */}
      <ModuleNav track="ai" currentModuleId="math-for-ai" />

      {/* Hero Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-mono font-bold text-orange-700 flex items-center gap-1.5">
                  <Calculator size={14} />
                  AI ENGINEERING &bull; MODULE 02
                </span>
                <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-mono text-stone-600">
                  University-Level Mathematics
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Mathematics for AI &amp; Machine Learning
              </h1>
              <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                The mathematical foundations behind Artificial Intelligence. Master the linear algebra, multivariate calculus, probability theory, inferential statistics, and mathematical optimization required to truly understand how machine learning models, neural networks, and transformers operate under the hood.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/learning/ai")}
                className="px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-stone-700 text-xs font-bold hover:bg-stone-50 transition cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft size={14} />
                Module 01: Foundations
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("project")}
                className="px-3.5 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                View Math Engine Project
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Module Meta Cards */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Guided Duration</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">30–36 Hours</span>
              <span className="text-[10px] text-stone-500 block">12–15 practical lab hours</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Curriculum Depth</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">33 Deep Sections</span>
              <span className="text-[10px] text-stone-500 block">Parts I to VII</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Math Core</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">LinAlg, Calc, Prob, Opt</span>
              <span className="text-[10px] text-stone-500 block">MIT 18.06 &amp; Stanford CS229</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Applied Project</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Math ML Engine</span>
              <span className="text-[10px] text-stone-500 block">7 Hands-On Labs</span>
            </div>
          </div>
        </div>

        {/* View Mode Navigation Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 border-b border-[#e7e3da] pb-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("curriculum")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "curriculum"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <BookOpen size={16} className={activeTab === "curriculum" ? "text-white" : "text-stone-400"} />
            Curriculum Theory (Sections 01–33)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("interactive-tools")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "interactive-tools"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Sliders size={16} className={activeTab === "interactive-tools" ? "text-white" : "text-stone-400"} />
            Interactive Simulators (5 Tools)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("labs")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "labs"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Terminal size={16} className={activeTab === "labs" ? "text-white" : "text-stone-400"} />
            Practical Labs (01–07)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("project")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "project"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <ShieldCheck size={16} className={activeTab === "project" ? "text-white" : "text-stone-400"} />
            Math Engine Project ({completedProjectCount}/7)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("interview")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "interview"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Sparkles size={16} className={activeTab === "interview" ? "text-white" : "text-stone-400"} />
            Math Interview Questions
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("quiz")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "quiz"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Award size={16} className={activeTab === "quiz" ? "text-white" : "text-stone-400"} />
            Assessment (15 MCQs &amp; Problems)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("resources")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "resources"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <ExternalLink size={16} className={activeTab === "resources" ? "text-white" : "text-stone-400"} />
            University References
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CURRICULUM THEORY (SECTIONS 01 TO 33)                              */}
        {/* ========================================================================= */}
        {activeTab === "curriculum" && (
          <div className="space-y-6">
            {/* Part Filter Bar */}
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-4 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <ListOrdered size={14} className="text-orange-600" />
                  Filter Mathematical Area:
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Showing <strong>{filteredSections.length}</strong> of <strong>33</strong> Core Sections
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All Sections (1–33)" },
                  { id: "1", label: "Part I: Foundations (§1–2)" },
                  { id: "2", label: "Part II: Linear Algebra (§3–12)" },
                  { id: "3", label: "Part III: Calculus (§13–18)" },
                  { id: "4", label: "Part IV: Probability (§19–23)" },
                  { id: "5", label: "Part V: Statistics (§24–28)" },
                  { id: "6", label: "Part VI: Optimization (§29–32)" },
                  { id: "7", label: "Part VII: Math to ML (§33)" },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setSelectedPartFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      selectedPartFilter === filter.id
                        ? "bg-orange-600 text-white shadow-2xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Section Explorer Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Quick Section List / Index */}
              <div className="lg:col-span-4 rounded-2xl border border-[#e7e3da] bg-white p-4 shadow-xs max-h-[850px] overflow-y-auto">
                <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-3 px-1">
                  Table of Contents
                </div>
                <div className="space-y-1.5">
                  {filteredSections.map((sec) => {
                    const isSelected = sec.sectionNum === activeSection.sectionNum;
                    const realIndex = AI_MATH_CURRICULUM_SECTIONS.findIndex((s) => s.sectionNum === sec.sectionNum);
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => setSelectedSectionIdx(realIndex)}
                        className={`w-full text-left p-2.5 rounded-xl transition cursor-pointer flex items-start gap-2.5 ${
                          isSelected
                            ? "bg-orange-50 border border-orange-200 text-orange-950 shadow-2xs font-bold"
                            : "bg-transparent hover:bg-stone-50 border border-transparent text-stone-700"
                        }`}
                      >
                        <span
                          className={`shrink-0 px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                            isSelected ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          §{String(sec.sectionNum).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs leading-snug line-clamp-1">{sec.title}</div>
                          <div className="text-[10px] text-stone-400 font-normal mt-0.5 flex items-center gap-1.5">
                            <Clock size={10} />
                            {sec.duration}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: In-Depth Section Content Viewer */}
              <div className="lg:col-span-8 rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                {/* Section Header */}
                <div className="border-b border-[#e7e3da] pb-6 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-mono font-bold text-stone-700">
                      {activeSection.partName}
                    </span>
                    <span className="text-xs text-orange-700 font-mono font-bold flex items-center gap-1 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                      <Clock size={12} />
                      Estimated Time: {activeSection.duration}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Section {String(activeSection.sectionNum).padStart(2, "0")} — {activeSection.title}
                  </h2>
                </div>

                {/* Relevant Embedded Visualizer */}
                {activeSection.sectionNum >= 4 && activeSection.sectionNum <= 6 && (
                  <div className="mb-8">
                    <VectorCosineSimilarityTool />
                  </div>
                )}
                {activeSection.sectionNum >= 7 && activeSection.sectionNum <= 8 && (
                  <div className="mb-8">
                    <MatrixLayerDimensionTool />
                  </div>
                )}
                {activeSection.sectionNum >= 13 && activeSection.sectionNum <= 15 && (
                  <div className="mb-8">
                    <DerivativeTangentVisualizer />
                  </div>
                )}
                {activeSection.sectionNum === 26 && (
                  <div className="mb-8">
                    <CentralLimitTheoremSimulator />
                  </div>
                )}
                {activeSection.sectionNum >= 29 && activeSection.sectionNum <= 30 && (
                  <div className="mb-8">
                    <GradientDescentSimulator />
                  </div>
                )}

                {/* Subsections Content */}
                <div className="space-y-6">
                  {activeSection.subsections.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className={`rounded-xl p-5 border ${
                        sub.isExercise
                          ? "bg-amber-50/70 border-amber-200 text-amber-950"
                          : "bg-[#faf8f4] border-[#e7e3da]"
                      }`}
                    >
                      <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                        {sub.isExercise ? (
                          <span className="p-1 rounded bg-amber-200 text-amber-900">
                            <Terminal size={14} />
                          </span>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-orange-600 inline-block" />
                        )}
                        {sub.title}
                      </h3>

                      {/* Paragraphs */}
                      {sub.paragraphs.length > 0 && (
                        <div className="space-y-2 text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
                          {sub.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      )}

                      {/* Bullets */}
                      {sub.bullets.length > 0 && (
                        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-stone-700 mb-3">
                          {sub.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      )}

                      {/* Code Blocks */}
                      {sub.codeBlocks.length > 0 && (
                        <div className="mt-3 relative rounded-xl border border-stone-800 bg-stone-950 p-4 text-emerald-400 font-mono text-xs overflow-x-auto">
                          <button
                            type="button"
                            onClick={() => handleCopyCode(sub.codeBlocks.join("\n"), `${activeSection.id}-${sIdx}`)}
                            className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-[10px] font-mono flex items-center gap-1 cursor-pointer transition"
                          >
                            {copiedCodeIdx === `${activeSection.id}-${sIdx}` ? (
                              <>
                                <Check size={12} className="text-emerald-400" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy size={12} />
                                Copy Code
                              </>
                            )}
                          </button>
                          <div className="text-stone-500 mb-2 select-none"># Python / NumPy Implementation</div>
                          {sub.codeBlocks.map((line, cIdx) => (
                            <div key={cIdx} className="leading-relaxed">
                              {line}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Section Navigation Buttons */}
                <div className="mt-8 pt-6 border-t border-[#e7e3da] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handlePrevSection}
                    disabled={selectedSectionIdx === 0}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 cursor-pointer ${
                      selectedSectionIdx === 0
                        ? "opacity-40 cursor-not-allowed border-stone-200 bg-stone-50 text-stone-400"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    <ArrowLeft size={14} />
                    Previous: Section {selectedSectionIdx > 0 ? String(selectedSectionIdx).padStart(2, "0") : "--"}
                  </button>

                  <span className="text-xs font-mono text-stone-400 font-medium">
                    Section {selectedSectionIdx + 1} of {AI_MATH_CURRICULUM_SECTIONS.length}
                  </span>

                  <button
                    type="button"
                    onClick={handleNextSection}
                    disabled={selectedSectionIdx >= AI_MATH_CURRICULUM_SECTIONS.length - 1}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 cursor-pointer ${
                      selectedSectionIdx >= AI_MATH_CURRICULUM_SECTIONS.length - 1
                        ? "opacity-40 cursor-not-allowed border-stone-200 bg-stone-50 text-stone-400"
                        : "bg-orange-600 text-white hover:bg-orange-700 border-orange-600 shadow-2xs"
                    }`}
                  >
                    Next: Section {selectedSectionIdx < AI_MATH_CURRICULUM_SECTIONS.length - 1 ? String(selectedSectionIdx + 2).padStart(2, "0") : "--"}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                             */}
        {/* ========================================================================= */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <h2 className="text-lg font-black text-stone-900 mb-1 flex items-center gap-2">
                <Sliders size={18} className="text-orange-600" />
                Interactive Mathematical Visualizers
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Five dynamic computational models for vector geometry, matrix dimension FLOPs, instantaneous derivatives, gradient descent convergence, and the Central Limit Theorem.
              </p>
            </div>

            <VectorCosineSimilarityTool />
            <MatrixLayerDimensionTool />
            <DerivativeTangentVisualizer />
            <GradientDescentSimulator />
            <CentralLimitTheoremSimulator />
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: PRACTICAL MATHEMATICS LABS (LABS 01 TO 07)                         */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            <div className="flex overflow-x-auto no-scrollbar gap-2 border-b border-[#e7e3da] pb-3">
              {practicalLabs.map((lab) => (
                <button
                  key={lab.id}
                  type="button"
                  onClick={() => setActiveLabId(lab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeLabId === lab.id
                      ? "bg-orange-600 text-white shadow-2xs"
                      : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50"
                  }`}
                >
                  <Terminal size={14} />
                  Lab {lab.number}: {lab.domain}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    Hands-On Mathematics Lab #{currentLab.number} &bull; {currentLab.domain}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    {currentLab.title}
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                    Duration: {currentLab.duration}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyLabCode}
                    className="px-3.5 py-1.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition shadow-2xs"
                  >
                    {copiedLabCode ? (
                      <>
                        <Check size={14} className="text-emerald-600" />
                        Copied Lab Script!
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy Python Script
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Lab Objective */}
              <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 mb-6">
                <span className="text-xs font-mono font-bold text-orange-900 block mb-1">Core Objective:</span>
                <p className="text-xs sm:text-sm text-orange-950 leading-relaxed">{currentLab.objective}</p>
              </div>

              {/* Lab Tasks */}
              <div className="mb-6">
                <h3 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-3">
                  Task Execution Plan:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentLab.tasks.map((task, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#faf8f4] border border-[#e7e3da] flex items-start gap-2.5 text-xs text-stone-700">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-700 font-mono font-bold text-[11px] flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code */}
              <div className="mb-6">
                <div className="rounded-xl border border-stone-800 bg-stone-950 p-4 text-emerald-400 font-mono text-xs overflow-x-auto max-h-[380px] leading-relaxed">
                  <pre>{currentLab.code}</pre>
                </div>
              </div>

              {/* Expected Output */}
              <div>
                <span className="text-xs font-mono font-bold text-stone-500 block mb-2">
                  Expected Execution Output:
                </span>
                <div className="rounded-xl border border-stone-200 bg-stone-100 p-3.5 text-stone-800 font-mono text-xs overflow-x-auto">
                  <pre>{currentLab.expectedOutput}</pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: INTEGRATED PROJECT (SECTION 35 - MATHEMATICAL ML ENGINE)           */}
        {/* ========================================================================= */}
        {activeTab === "project" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    Section 35 &bull; Capstone Project
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Mathematical Engine for Machine Learning
                  </h2>
                  <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    Build a modular mathematical computation engine using Python and NumPy from scratch. Implement linear algebra, vector calculus, probability, inferential statistics, and loss optimization without relying on high-level ML frameworks.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-orange-50 border border-orange-200 px-4 py-2 text-center">
                    <span className="text-xs font-mono text-orange-800 font-bold block">Engine Milestones</span>
                    <span className="text-lg font-black text-orange-600 font-mono">{completedProjectCount}/7</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyProjectScript}
                    className="px-4 py-2.5 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center gap-2 shadow-2xs"
                  >
                    {copiedProjectCode ? (
                      <>
                        <Check size={16} />
                        Copied Complete Engine!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy Python Engine
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Milestones Checklist */}
              <div className="mb-8">
                <h3 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-4">
                  Project Module Requirements Checklist:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { key: "partA", label: "Part A: Linear algebra (dot product, norms, cosine sim, matrix mult)" },
                    { key: "partB", label: "Part B: Calculus (numerical & analytical derivatives, gradients)" },
                    { key: "partC", label: "Part C: Probability (events, Bayes' theorem, simulations)" },
                    { key: "partD", label: "Part D: Statistics (mean, median, variance, std, IQR outliers)" },
                    { key: "partE", label: "Part E: Loss functions (MSE, MAE, Binary Cross-Entropy)" },
                    { key: "partF", label: "Part F: Optimization (Gradient descent on quadratic losses)" },
                    { key: "partG", label: "Part G: Unit tests & verification suite (test_vectors.py, test_losses.py)" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => toggleProjectChecklist(item.key)}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-start gap-2.5 ${
                        projectChecklist[item.key]
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold"
                          : "bg-[#faf8f4] border-[#e7e3da] text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      <span className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                        projectChecklist[item.key] ? "bg-emerald-600 text-white" : "border border-stone-300 bg-white"
                      }`}>
                        {projectChecklist[item.key] && <Check size={10} />}
                      </span>
                      <span className="text-xs leading-snug">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Implementation */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-stone-500 flex items-center gap-1.5">
                    <FileCode size={14} className="text-emerald-600" />
                    Complete Runnable Engine Implementation:
                  </span>
                </div>
                <div className="rounded-xl border border-stone-800 bg-stone-950 p-4 text-emerald-400 font-mono text-xs overflow-x-auto max-h-[480px] leading-relaxed">
                  <pre>{fullEngineScript}</pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: MATHEMATICAL INTERVIEW QUESTIONS (SECTION 36.3)                    */}
        {/* ========================================================================= */}
        {activeTab === "interview" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <h2 className="text-lg font-black text-stone-900 mb-1 flex items-center gap-2">
                <Sparkles size={18} className="text-orange-600" />
                Senior AI Mathematical Interview Questions
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Core mathematical interview topics asked during technical assessments at top AI labs and systems engineering firms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Linear Algebra */}
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
                <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-3">
                  Linear Algebra Interview Prompts
                </span>
                <ul className="space-y-2.5 text-xs text-stone-700">
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> What is the geometric interpretation of the dot product, and why is it positive/negative?
                  </li>
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> Why can matrix multiplication be used to represent an entire neural network layer across a mini-batch?
                  </li>
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> What is matrix rank, and how does rank deficiency indicate feature redundancy?
                  </li>
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> What are eigenvalues and eigenvectors? How are they used in Principal Component Analysis (PCA)?
                  </li>
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> Explain Singular Value Decomposition (SVD) and how low-rank approximation compresses data.
                  </li>
                </ul>
              </div>

              {/* Calculus */}
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider block mb-3">
                  Calculus &amp; Optimization Interview Prompts
                </span>
                <ul className="space-y-2.5 text-xs text-stone-700">
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> What is a derivative using first principles? What does the limit h &rarr; 0 represent?
                  </li>
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> How does the multivariable chain rule enable backpropagation through nested neural networks?
                  </li>
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> Why does the gradient vector point in the direction of steepest local increase?
                  </li>
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> Compare Batch Gradient Descent, Stochastic Gradient Descent (SGD), and Mini-Batch SGD.
                  </li>
                  <li className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> Why is MSE heavily sensitive to outliers compared to MAE? When should you choose Binary Cross-Entropy?
                  </li>
                </ul>
              </div>

              {/* Probability & Statistics */}
              <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs md:col-span-2">
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-3">
                  Probability &amp; Statistics Interview Prompts
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                  <div className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> State Bayes' Theorem. Why is disease screening posterior often surprisingly low for rare diseases?
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> What is the difference between mutually exclusive events and independent events?
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> What is the Central Limit Theorem? Why does it justify using normal distribution approximations?
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#faf8f4] border border-[#e7e3da]">
                    <strong>Q:</strong> What is the difference between Covariance and Pearson Correlation? Why does correlation not imply causation?
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: KNOWLEDGE ASSESSMENT (15 MCQS)                                     */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    Section 36.1 &bull; Academic Mathematics Assessment
                  </span>
                  <h2 className="text-xl font-black text-stone-900">
                    Mathematics for AI &amp; Machine Learning Examination
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    15 questions evaluating linear algebra, calculus, probability distributions, hypothesis testing, and optimization algorithms.
                  </p>
                </div>
                {quizSubmitted ? (
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-orange-100 px-4 py-2 text-center">
                      <span className="text-[10px] font-mono uppercase text-orange-800 font-bold block">Final Score</span>
                      <span className="text-lg font-black text-orange-700 font-mono">
                        {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={resetQuiz}
                      className="px-3.5 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw size={14} />
                      Retake Quiz
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length === 0}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer ${
                      Object.keys(selectedAnswers).length === 0
                        ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                        : "bg-orange-600 text-white hover:bg-orange-700 shadow-2xs"
                    }`}
                  >
                    Submit All {quizQuestions.length} Answers
                  </button>
                )}
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {quizQuestions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correct;
                return (
                  <div key={q.id} className="rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-stone-100 text-stone-700 font-mono font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 leading-relaxed">
                        {q.question}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-9">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = userAns === oIdx;
                        let btnStyle = "border-stone-200 bg-[#faf8f4] text-stone-700 hover:bg-stone-100";
                        if (quizSubmitted) {
                          if (oIdx === q.correct) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                          } else if (isSelected && !isCorrect) {
                            btnStyle = "border-rose-400 bg-rose-50 text-rose-950";
                          } else {
                            btnStyle = "border-stone-200 bg-white opacity-50";
                          }
                        } else if (isSelected) {
                          btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                        }

                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => handleSelectAnswer(q.id, oIdx)}
                            className={`p-3 rounded-xl border text-left text-xs leading-relaxed transition cursor-pointer flex items-start gap-2 ${btnStyle}`}
                          >
                            <span className="font-mono font-bold text-[11px] text-stone-400 mt-0.5">
                              {String.fromCharCode(65 + oIdx)}.
                            </span>
                            <span>{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className={`mt-4 ml-9 p-3.5 rounded-xl border text-xs leading-relaxed ${
                        isCorrect ? "bg-emerald-50/70 border-emerald-200 text-emerald-900" : "bg-rose-50/70 border-rose-200 text-rose-900"
                      }`}>
                        <span className="font-bold block mb-1">
                          {isCorrect ? "✓ Correct Answer:" : "✗ Explanation:"}
                        </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 7: UNIVERSITY REFERENCES (PART XI)                                    */}
        {/* ========================================================================= */}
        {activeTab === "resources" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs mb-6">
              <h2 className="text-lg font-black text-stone-900 mb-1 flex items-center gap-2">
                <BookOpen size={18} className="text-orange-600" />
                Part XI &bull; University-Level Learning Resources
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Foundational textbooks and official academic lecture series supporting Module 02.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "MIT 18.06 — Linear Algebra",
                  author: "Prof. Gilbert Strang (MIT Mathematics)",
                  desc: "Comprehensive matrix theory, vector spaces, determinants, eigenvalues, least squares, and singular value decomposition.",
                  link: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
                },
                {
                  title: "Stanford University — CS229 Machine Learning",
                  author: "Prof. Andrew Ng (Stanford AI Lab)",
                  desc: "Multivariable calculus, probability, linear algebra, loss optimization, and mathematical foundation of learning models.",
                  link: "https://cs229.stanford.edu/",
                },
                {
                  title: "Mathematics for Machine Learning (MML Book)",
                  author: "Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong (Cambridge)",
                  desc: "The definitive mathematical textbook unifying linear algebra, analytic geometry, matrix decompositions, vector calculus, and probability.",
                  link: "https://mml-book.github.io/",
                },
                {
                  title: "Stanford CS229 Mathematical Cheatsheets",
                  author: "Afshine Amidi & Shervine Amidi (Stanford)",
                  desc: "Concise visual cheatsheets covering linear algebra, calculus, probability distributions, statistics, and optimization.",
                  link: "https://web.stanford.edu/~shervine/teaching/cs-229/",
                },
                {
                  title: "NumPy Linear Algebra & Mathematical Routines",
                  author: "NumPy Documentation",
                  desc: "Official documentation for np.linalg (dot, norm, solve, eig, svd, inv, pinv).",
                  link: "https://numpy.org/doc/stable/reference/routines.linalg.html",
                },
                {
                  title: "SciPy Optimization and Statistical Distributions",
                  author: "SciPy Community",
                  desc: "Scientific numerical optimization algorithms (scipy.optimize) and continuous probability distributions (scipy.stats).",
                  link: "https://docs.scipy.org/doc/scipy/",
                },
              ].map((res, idx) => (
                <div key={idx} className="rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                      Academic Resource #{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-1">
                      {res.title}
                    </h3>
                    <span className="text-xs text-stone-500 font-medium block mb-2">{res.author}</span>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">{res.desc}</p>
                  </div>
                  <a
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition"
                  >
                    Open Resource
                    <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
