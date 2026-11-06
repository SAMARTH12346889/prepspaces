/**
 * Full Curriculum Content Data for Module 04: Deep Learning & Neural Network Engineering
 * Extracted with complete university-level fidelity across all foundational deep learning units.
 */

export const AI_DEEP_LEARNING_CURRICULUM_SECTIONS = [
  {
    "id": "sec-01",
    "sectionNum": 1,
    "title": "Foundations of Artificial Neural Networks",
    "duration": "1.5 hours",
    "partNum": 1,
    "partName": "Part I — Foundations & Perceptrons",
    "tag": "Neuron Foundations",
    "subsections": [
      {
        "title": "1.1 What is Deep Learning?",
        "paragraphs": [
          "Deep learning is a specialized subfield of machine learning that utilizes neural networks composed of multiple computational layers to automatically learn hierarchical representations from raw data.",
          "In traditional machine learning, practitioners spend significant time manually engineering and selecting features (such as edge histograms, texture filters, or color distributions for image tasks). In deep learning, raw inputs are transformed layer by layer into increasingly abstract feature representations without manual feature design.",
          "Early layers typically detect low-level primitives like edges and local contrast gradients. Intermediate layers combine these primitives into textures, motifs, and object contours. Deep layers synthesize complex category-level representations, and the output layer maps these representations to final class predictions or continuous regression targets."
        ],
        "codeBlocks": [
          "# Mathematical Mapping of a Neural Network:\\n# f_theta(X) -> Y_hat\\n# where X is the input matrix, theta = {W, b} are learnable weights and biases"
        ],
        "bullets": [
          "Eliminates manual feature engineering for high-dimensional unstructured data (vision, audio, NLP).",
          "Learns composition of functions: f(x) = f^(L)(f^(L-1)(...f^(1)(x)...)).",
          "Drives modern generative AI, computer vision backbones, and large language foundation models."
        ],
        "isExercise": false
      },
      {
        "title": "1.2 Biological Inspiration and the Mathematical Neuron",
        "paragraphs": [
          "While biologically inspired by biological neurons transmitting signals across dendrites, synapses, and axons, modern artificial neurons are strictly mathematical processing units.",
          "An artificial neuron computes the dot product of an input vector with learnable synaptic weights, adds a scalar bias to shift the activation threshold, and passes the scalar result through an activation function.",
          "The weighted sum is formalized as z = sum_{i=1}^n (w_i * x_i) + b. The scalar output activation is a = f(z)."
        ],
        "codeBlocks": [
          "\\[ z = \\sum_{i=1}^{n} w_i x_i + b = \\mathbf{w}^T \\mathbf{x} + b \\]",
          "\\[ a = f(z) = f\\left( \\sum_{i=1}^{n} w_i x_i + b \\right) \\]"
        ],
        "bullets": [
          "Inputs (x): Quantitative features representing the observation.",
          "Weights (w): Learnable parameters modulating input importance and feature correlation.",
          "Bias (b): Learnable intercept allowing the activation threshold to shift independently of inputs.",
          "Activation Function (f): Non-linear transformation determining whether and to what degree the neuron fires."
        ],
        "isExercise": false
      },
      {
        "title": "1.3 Complete Forward Calculation (Worked Example)",
        "paragraphs": [
          "Consider a neuron receiving three input signals: x_1 = 2, x_2 = 3, and x_3 = 1.",
          "The associated weights are w_1 = 0.5, w_2 = 0.2, and w_3 = 0.8, with bias b = 0.1.",
          "First, calculate the weighted sum: z = (2 * 0.5) + (3 * 0.2) + (1 * 0.8) + 0.1 = 1.0 + 0.6 + 0.8 + 0.1 = 2.5.",
          "Applying the Rectified Linear Unit activation function f(z) = max(0, z) yields a = max(0, 2.5) = 2.5."
        ],
        "codeBlocks": [
          "import numpy as np\\n\\nx = np.array([2.0, 3.0, 1.0])\\nw = np.array([0.5, 0.2, 0.8])\\nb = 0.1\\n\\n# Weighted sum\\nz = np.dot(w, x) + b\\nprint('Weighted sum z:', z) # 2.5\\n\\n# ReLU activation\\na = max(0.0, z)\\nprint('Neuron activation a:', a) # 2.5"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "Section Exercises: Single Neuron Forward Pass",
        "paragraphs": [
          "Exercise 1: Given inputs x = [4, 2, 5], weights w = [0.3, 0.6, 0.1], and bias b = 0.2, calculate the linear combination z and the activated output using (a) ReLU, (b) Sigmoid, and (c) Tanh.",
          "Exercise 2: If a neuron's weights are all positive and its bias is negative, what is the geometric meaning of the bias term relative to the origin?"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      }
    ]
  },
  {
    "id": "sec-02",
    "sectionNum": 2,
    "title": "Perceptrons and Their Limitations",
    "duration": "1.5 hours",
    "partNum": 1,
    "partName": "Part I — Foundations & Perceptrons",
    "tag": "Perceptrons & XOR",
    "subsections": [
      {
        "title": "2.1 The Rosenblatt Perceptron",
        "paragraphs": [
          "Invented in 1958 by Frank Rosenblatt, the perceptron is the earliest mathematical model of supervised binary classification.",
          "It computes a linear combination of its inputs and applies a Heaviside step threshold function. If z >= 0, it outputs 1 (positive class); if z < 0, it outputs 0 (negative class)."
        ],
        "codeBlocks": [
          "\\[ z = \\mathbf{w}^T \\mathbf{x} + b \\]",
          "\\[ f(z) = \\begin{cases} 1 & z \\geq 0 \\\\ 0 & z < 0 \\end{cases} \\]"
        ],
        "bullets": [
          "Linear decision boundary: w_1 * x_1 + w_2 * x_2 + b = 0 separates space into two half-planes.",
          "Capable of learning fundamental boolean gates: AND, OR, NAND, and NOT."
        ],
        "isExercise": false
      },
      {
        "title": "2.2 The Perceptron Learning Rule",
        "paragraphs": [
          "The perceptron learning algorithm updates weights sequentially when a misclassification occurs. If an observation is predicted correctly, error (y - y_hat) is zero and no parameters change.",
          "When misclassified, weights update by: w_i^(new) = w_i^(old) + eta * (y - y_hat) * x_i, where eta is the learning rate."
        ],
        "codeBlocks": [
          "\\[ w_i \\leftarrow w_i + \\eta (y - \\hat{y}) x_i \\]",
          "\\[ b \\leftarrow b + \\eta (y - \\hat{y}) \\]"
        ],
        "bullets": [
          "Perceptron Convergence Theorem: If the training data is linearly separable, the algorithm is guaranteed to converge in a finite number of steps.",
          "If the data is NOT linearly separable, the algorithm oscillates indefinitely without converging."
        ],
        "isExercise": false
      },
      {
        "title": "2.3 The XOR Problem and Non-Linear Separability",
        "paragraphs": [
          "In 1969, Marvin Minsky and Seymour Papert mathematically proved that a single-layer perceptron cannot compute the XOR (exclusive OR) function.",
          "For XOR: (0,0)->0, (0,1)->1, (1,0)->1, (1,1)->0. Plotting these four points reveals that no single straight line can separate class 1 from class 0.",
          "Crucial Insight: Simply stacking multiple linear perceptrons without non-linear activations DOES NOT solve XOR, because any cascade of linear transformations W_2 * (W_1 * X) is mathematically equivalent to a single linear transformation W_combined * X. Non-linear activation functions are mandatory."
        ],
        "codeBlocks": [
          "# XOR Truth Table:\\n# (0, 0) -> 0\\n# (0, 1) -> 1\\n# (1, 0) -> 1\\n# (1, 1) -> 0\\n# Cannot be partitioned by w1*x1 + w2*x2 + b = 0"
        ],
        "bullets": [],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-03",
    "sectionNum": 3,
    "title": "Multilayer Perceptrons (MLP) & Tensor Architecture",
    "duration": "2 hours",
    "partNum": 2,
    "partName": "Part II — Multilayer Architectures & Activations",
    "tag": "MLP Architecture",
    "subsections": [
      {
        "title": "3.1 Multilayer Perceptron Anatomy",
        "paragraphs": [
          "A Multilayer Perceptron (MLP) is a fully connected feedforward artificial neural network consisting of at least three layers: an input layer, one or more hidden layers, and an output layer.",
          "The input layer receives raw features (e.g., house size, bedrooms, age). The hidden layers project the inputs into new geometric spaces where classes become linearly separable. The output layer generates predictions (logits or probabilities)."
        ],
        "codeBlocks": [
          "# Layer Hierarchy:\\n# Input X in R^(B x d_in)\\n# Hidden 1 Z_1 = X W_1 + b_1  -> A_1 = f(Z_1)\\n# Hidden 2 Z_2 = A_1 W_2 + b_2 -> A_2 = f(Z_2)\\n# Output   Z_out = A_2 W_out + b_out"
        ],
        "bullets": [
          "Fully Connected (Dense): Every neuron in layer l connects to every neuron in layer l+1.",
          "Universal Approximation Theorem (Cybenko 1989): An MLP with a single hidden layer and non-linear activation can approximate any continuous function on compact subsets of R^n to arbitrary precision."
        ],
        "isExercise": false
      },
      {
        "title": "3.2 Matrix Vectorization & Batch Broadcasting",
        "paragraphs": [
          "Modern deep learning hardware (GPUs, TPUs) processes multiple examples in parallel using matrix multiplication instead of looping over individual rows.",
          "Given a batch of B examples with d_in features: X in R^(B x d_in). For a hidden layer with h_1 neurons: weight matrix W_1 in R^(d_in x h_1), bias b_1 in R^(1 x h_1).",
          "The linear transformation Z_1 = X W_1 + b_1 produces Z_1 in R^(B x h_1). The bias vector b_1 is automatically broadcast across all B rows."
        ],
        "codeBlocks": [
          "import torch\\n\\n# Batch size B=32, Input features d_in=8, Hidden neurons h=64\\nB, d_in, h = 32, 8, 64\\nX = torch.randn(B, d_in)\\nW = torch.randn(d_in, h)\\nb = torch.zeros(1, h)\\n\\nZ = torch.matmul(X, W) + b\\nprint('Z output shape:', Z.shape) # torch.Size([32, 64])"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "3.3 Parameter Count Calculation",
        "paragraphs": [
          "For any dense layer connecting n_in neurons to n_out neurons: Number of parameters = (n_in * n_out) + n_out (weights plus biases).",
          "For an architecture 8 -> 64 -> 32 -> 3: Layer 1 has (8 * 64) + 64 = 576 params; Layer 2 has (64 * 32) + 32 = 2,080 params; Layer 3 has (32 * 3) + 3 = 99 params. Total learnable parameters = 2,755."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-04",
    "sectionNum": 4,
    "title": "Activation Functions: Theory, Math & PyTorch",
    "duration": "2 hours",
    "partNum": 2,
    "partName": "Part II — Multilayer Architectures & Activations",
    "tag": "Activation Functions",
    "subsections": [
      {
        "title": "4.1 The Role of Non-Linearity",
        "paragraphs": [
          "Activation functions introduce non-linear curvature into the network hypothesis. Without non-linear activations, stacking any number of dense layers collapses algebraically into a single linear matrix multiplication: W_3(W_2(W_1 X + b_1) + b_2) + b_3 = W_eff X + b_eff.",
          "Non-linearities allow the network to fold, bend, and warp the feature space to isolate non-linear manifolds."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.2 Sigmoid and Tanh",
        "paragraphs": [
          "Sigmoid: sigma(z) = 1 / (1 + e^(-z)). Maps (-inf, +inf) to (0, 1). Useful for binary probability outputs. Drawback: Saturated gradients for large |z| lead to severe vanishing gradient problems in deep architectures.",
          "Tanh: tanh(z) = (e^z - e^(-z)) / (e^z + e^(-z)). Maps (-inf, +inf) to (-1, 1). Zero-centered, which improves gradient alignment during backpropagation compared to sigmoid, but still suffers from saturation."
        ],
        "codeBlocks": [
          "\\[ \\sigma(z) = \\frac{1}{1 + e^{-z}}, \\quad \\sigma'(z) = \\sigma(z)(1 - \\sigma(z)) \\]",
          "\\[ \\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}, \\quad \\tanh'(z) = 1 - \\tanh^2(z) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.3 ReLU, Leaky ReLU & GELU",
        "paragraphs": [
          "ReLU (Rectified Linear Unit): f(z) = max(0, z). The industry standard for hidden layers. Constant gradient of 1 for z > 0 eliminates saturation in the positive regime and evaluates rapidly via hardware thresholding.",
          "Dying ReLU Problem: If a neuron's weights shift such that z < 0 for all training examples, its gradient is permanently 0 and the neuron ceases to learn.",
          "Leaky ReLU: f(z) = max(alpha * z, z) where alpha = 0.01, allowing a gentle non-zero gradient for negative inputs to prevent dead neurons.",
          "GELU (Gaussian Error Linear Unit): f(z) = z * Phi(z). Weights inputs by their probabilistic quantile. Smooth and non-monotonic, GELU is the standard activation in Modern Transformers (BERT, GPT-4, LLaMA)."
        ],
        "codeBlocks": [
          "\\[ \\text{ReLU}(z) = \\max(0, z) \\]",
          "\\[ \\text{LeakyReLU}(z) = \\begin{cases} z & z > 0 \\\\ 0.01z & z \\leq 0 \\end{cases} \\]",
          "\\[ \\text{GELU}(z) = z \\cdot \\Phi(z) = z \\cdot P(X \\leq z), \\quad X \\sim \\mathcal{N}(0, 1) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.4 Softmax for Multiclass Classification",
        "paragraphs": [
          "Softmax converts a vector of C unnormalized real-valued logits z = [z_1, ..., z_C] into a valid probability distribution where each p_i in (0, 1) and sum(p_i) = 1.",
          "Exponentiation ensures strictly positive outputs; dividing by the partition sum normalizes the vector into categorical probabilities."
        ],
        "codeBlocks": [
          "\\[ \\text{Softmax}(z_i) = \\frac{e^{z_i}}{\\sum_{j=1}^{C} e^{z_j}} \\]"
        ],
        "bullets": [],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-05",
    "sectionNum": 5,
    "title": "Forward Propagation: Full Numerical Tracing",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Multilayer Architectures & Activations",
    "tag": "Forward Propagation",
    "subsections": [
      {
        "title": "5.1 Complete 2-2-1 Numerical Walkthrough",
        "paragraphs": [
          "Consider a network with 2 inputs, 1 hidden layer with 2 neurons (ReLU), and 1 output neuron (Linear).",
          "Input: X = [1.0, 2.0]. Hidden weights W_1 = [[0.5, 0.3], [0.2, 0.4]], bias b_1 = [0.1, 0.2].",
          "Hidden linear: z_11 = (1.0 * 0.5) + (2.0 * 0.2) + 0.1 = 0.5 + 0.4 + 0.1 = 1.0. z_12 = (1.0 * 0.3) + (2.0 * 0.4) + 0.2 = 0.3 + 0.8 + 0.2 = 1.3.",
          "Hidden activations: A_1 = [ReLU(1.0), ReLU(1.3)] = [1.0, 1.3].",
          "Output weights: W_2 = [[0.4], [0.6]], bias b_2 = 0.1.",
          "Output linear: Z_2 = (1.0 * 0.4) + (1.3 * 0.6) + 0.1 = 0.4 + 0.78 + 0.1 = 1.28.",
          "Predicted output: y_hat = 1.28."
        ],
        "codeBlocks": [
          "import torch\\nimport torch.nn as nn\\n\\nclass ToyNet(nn.Module):\\n    def __init__(self):\\n        super().__init__()\\n        self.fc1 = nn.Linear(2, 2)\\n        self.relu = nn.ReLU()\\n        self.fc2 = nn.Linear(2, 1)\\n    def forward(self, x):\\n        return self.fc2(self.relu(self.fc1(x)))\\n\\nmodel = ToyNet()\\nprint(model(torch.tensor([[1.0, 2.0]])))"
        ],
        "bullets": [],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-06",
    "sectionNum": 6,
    "title": "Loss Functions and Model Error",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — Loss Functions & Optimization",
    "tag": "Loss Functions",
    "subsections": [
      {
        "title": "6.1 Regression vs Classification Loss Objectives",
        "paragraphs": [
          "A loss function L(theta) quantifies the discrepancy between model predictions and ground-truth targets.",
          "Mean Squared Error (MSE): L_MSE = (1/n) * sum((y_i - y_hat_i)^2). Heavily penalizes large outliers.",
          "Binary Cross-Entropy (BCE): L_BCE = - (1/n) * sum(y_i * log(p_i) + (1 - y_i) * log(1 - p_i)). Measures divergence between bernoulli distributions.",
          "Categorical Cross-Entropy (CE): L_CE = - sum_{c=1}^C y_c * log(p_c). Standard for multiclass classification."
        ],
        "codeBlocks": [
          "\\[ \\mathcal{L}_{\\text{BCE}} = -\\frac{1}{N} \\sum_{i=1}^{N} \\left[ y_i \\ln p_i + (1 - y_i) \\ln(1 - p_i) \\right] \\]",
          "\\[ \\mathcal{L}_{\\text{CE}} = -\\sum_{c=1}^{C} y_c \\ln \\left( \\frac{e^{z_c}}{\\sum_j e^{z_j}} \\right) \\]"
        ],
        "bullets": [
          "PyTorch Best Practice: Use nn.BCEWithLogitsLoss() instead of Sigmoid() + nn.BCELoss() to prevent numerical underflow/overflow via log-sum-exp trick.",
          "nn.CrossEntropyLoss() in PyTorch expects raw unnormalized logits directly; do NOT pass softmax outputs."
        ],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-07",
    "sectionNum": 7,
    "title": "Gradient Descent and Optimization Algorithms",
    "duration": "2 hours",
    "partNum": 3,
    "partName": "Part III — Loss Functions & Optimization",
    "tag": "Optimizers",
    "subsections": [
      {
        "title": "7.1 Gradient Descent Variants (Batch, SGD, Mini-Batch)",
        "paragraphs": [
          "Batch Gradient Descent computes gradients across the full dataset before each update (stable but memory prohibitive for big datasets).",
          "Stochastic Gradient Descent (SGD) updates parameters using a single example per step (fast, escapes shallow local minima, but noisy).",
          "Mini-Batch Gradient Descent updates parameters using small batches (e.g., 32, 64, 128), combining SIMD GPU parallelism with regular gradient updates."
        ],
        "codeBlocks": [
          "\\[ \\theta_{t+1} = \\theta_t - \\eta \\nabla_\\theta \\mathcal{L}(\\theta_t) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.2 Momentum, RMSprop, Adam & AdamW",
        "paragraphs": [
          "Momentum: Adds an exponentially decaying velocity vector v_t = beta * v_(t-1) + grad. Dampens oscillations in steep ravines and accelerates in flat directions.",
          "RMSprop: Scales step sizes inversely by the square root of a running average of squared gradients, preventing runaway updates along high-curvature dimensions.",
          "Adam (Adaptive Moment Estimation): Combines first moments (momentum) and second moments (RMSprop) with bias correction terms.",
          "AdamW: Decouples weight decay regularization from gradient updates, ensuring consistent L2 regularization regardless of gradient scaling. Default choice for modern deep learning."
        ],
        "codeBlocks": [
          "# Adam Update Equations:\\n# m_t = beta1 * m_(t-1) + (1 - beta1) * g_t (First Moment)\\n# v_t = beta2 * v_(t-1) + (1 - beta2) * g_t^2 (Second Moment)\\n# m_hat = m_t / (1 - beta1^t), v_hat = v_t / (1 - beta2^t)\\n# theta = theta - lr * m_hat / (sqrt(v_hat) + eps)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-08",
    "sectionNum": 8,
    "title": "Backpropagation: The Chain Rule & Gradient Flow",
    "duration": "2.5 hours",
    "partNum": 3,
    "partName": "Part III — Loss Functions & Optimization",
    "tag": "Backpropagation",
    "subsections": [
      {
        "title": "8.1 Backpropagation & The Chain Rule",
        "paragraphs": [
          "Backpropagation is the reverse accumulation of partial derivatives through a directed acyclic computational graph.",
          "Using the multivariate calculus chain rule, the gradient of the scalar loss L with respect to any intermediate weight w is computed by multiplying local Jacobians backward from the loss."
        ],
        "codeBlocks": [
          "\\[ \\frac{\\partial \\mathcal{L}}{\\partial w} = \\frac{\\partial \\mathcal{L}}{\\partial a} \\cdot \\frac{\\partial a}{\\partial z} \\cdot \\frac{\\partial z}{\\partial w} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.2 Step-by-Step Single Neuron Derivation",
        "paragraphs": [
          "Setup: Input x = 2.0, weight w = 0.5, bias b = 0.0, true label y = 1.0, learning rate eta = 0.1.",
          "Forward Pass: z = (0.5 * 2.0) + 0 = 1.0. p = sigma(1.0) = 1 / (1 + e^-1) = 0.7311.",
          "Loss: L = - [1 * ln(0.7311) + 0] = 0.3133.",
          "Backward Pass: For BCE with Sigmoid, dL/dz = p - y = 0.7311 - 1.0 = -0.2689.",
          "dz/dw = x = 2.0. Therefore dL/dw = (dL/dz) * (dz/dw) = -0.2689 * 2.0 = -0.5378. dL/db = -0.2689.",
          "Weight Update: w_new = 0.5 - 0.1 * (-0.5378) = 0.5538. b_new = 0 - 0.1 * (-0.2689) = 0.0269."
        ],
        "codeBlocks": [
          "# Exact Step-by-Step Gradient Computation\\nx, w, b, y = 2.0, 0.5, 0.0, 1.0\\nz = w * x + b # 1.0\\np = 1.0 / (1.0 + np.exp(-z)) # 0.7311\\ndL_dz = p - y # -0.2689\\ndL_dw = dL_dz * x # -0.5378\\nw_new = w - 0.1 * dL_dw # 0.5538"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.3 Multilayer Matrix Backpropagation Equations",
        "paragraphs": [
          "For an L-layer MLP with softmax output and cross-entropy loss over batch size m:",
          "Output error: dZ_2 = (P - Y) / m.",
          "Output weights gradient: dW_2 = A_1^T @ dZ_2; db_2 = sum(dZ_2, axis=0).",
          "Backpropagate to hidden layer: dA_1 = dZ_2 @ W_2^T.",
          "Through ReLU activation: dZ_1 = dA_1 * (Z_1 > 0).",
          "Hidden weights gradient: dW_1 = X^T @ dZ_1; db_1 = sum(dZ_1, axis=0)."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-09",
    "sectionNum": 9,
    "title": "Weight Initialization & Gradient Stability",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Stability, PyTorch & Production",
    "tag": "Stability & Init",
    "subsections": [
      {
        "title": "9.1 Symmetry Breaking & Initialization Schemes",
        "paragraphs": [
          "Initializing all weights to 0 causes every neuron in a layer to compute identical forward activations and identical backward gradients. They update identically and cannot learn distinct features (the symmetry problem).",
          "Xavier (Glorot) Initialization: Keeps activation variance constant across layers for Tanh/Sigmoid. W ~ N(0, 2 / (fan_in + fan_out)).",
          "He (Kaiming) Initialization: Designed specifically for ReLU activations (which zero out half the distribution). W ~ N(0, 2 / fan_in)."
        ],
        "codeBlocks": [
          "import torch.nn as nn\\n\\nlinear = nn.Linear(64, 32)\\n# Apply He (Kaiming) Normal initialization for ReLU\\nnn.init.kaiming_normal_(linear.weight, nonlinearity='relu')\\nnn.init.zeros_(linear.bias)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.2 Vanishing Gradients, Exploding Gradients & Clipping",
        "paragraphs": [
          "Vanishing Gradients: When gradients diminish exponentially as they backpropagate through deep layers, early layers fail to update. Caused by saturating activations (sigmoid/tanh) and small weights.",
          "Exploding Gradients: Gradients grow exponentially, resulting in numerical overflow (NaNs) and divergent weights.",
          "Gradient Clipping: Rescales gradient vector norm to a max threshold: g = g * min(1, max_norm / ||g||_2)."
        ],
        "codeBlocks": [
          "# PyTorch Gradient Clipping\\ntorch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-10",
    "sectionNum": 10,
    "title": "Regularization: Dropout, Weight Decay & BatchNorm",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Stability, PyTorch & Production",
    "tag": "Regularization",
    "subsections": [
      {
        "title": "10.1 Overfitting vs Underfitting",
        "paragraphs": [
          "Underfitting: Model has high training loss and high validation loss due to low capacity or insufficient training.",
          "Overfitting: Model memorizes training noise (e.g., 99% train accuracy, 72% validation accuracy). Requires regularization."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.2 Dropout & Batch Normalization",
        "paragraphs": [
          "Dropout (Srivastava et al. 2014): During training, randomly zeros out activations with probability p (e.g., p=0.2 to 0.5) and scales remaining activations by 1/(1-p). Prevents co-adaptation of neurons.",
          "Batch Normalization (Ioffe & Szegedy 2015): Normalizes layer inputs across the mini-batch to zero mean and unit variance, followed by learnable affine parameters gamma and beta. Accelerates training and stabilizes deep networks."
        ],
        "codeBlocks": [
          "import torch.nn as nn\\n\\nmodel = nn.Sequential(\\n    nn.Linear(64, 128),\\n    nn.BatchNorm1d(128),\\n    nn.ReLU(),\\n    nn.Dropout(p=0.3),\\n    nn.Linear(128, 10)\\n)"
        ],
        "bullets": [
          "model.train(): Enables Dropout and computes batch statistics for BatchNorm.",
          "model.eval(): Disables Dropout and uses running population statistics for BatchNorm."
        ],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-11",
    "sectionNum": 11,
    "title": "Introduction to PyTorch: Tensors, Modules & Autograd",
    "duration": "2 hours",
    "partNum": 4,
    "partName": "Part IV — Stability, PyTorch & Production",
    "tag": "PyTorch Basics",
    "subsections": [
      {
        "title": "11.1 Tensors, Shapes and Device Placement",
        "paragraphs": [
          "PyTorch Tensors are multi-dimensional arrays optimized for GPU acceleration and automatic differentiation.",
          "Use .to(device) to seamlessly move tensors and models between CPU and CUDA GPUs."
        ],
        "codeBlocks": [
          "import torch\\n\\ndevice = torch.device('cuda' if torch.cuda.is_available() else 'cpu')\\nx = torch.tensor([[1.0, 2.0], [3.0, 4.0]], device=device)\\nprint('Device:', x.device, 'Shape:', x.shape)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.2 Automatic Differentiation with Autograd",
        "paragraphs": [
          "Setting requires_grad=True tracks every mathematical operation in a computational graph.",
          "Calling .backward() computes gradients via reverse-mode automatic differentiation and stores them in .grad."
        ],
        "codeBlocks": [
          "x = torch.tensor(3.0, requires_grad=True)\\ny = x**2 + 2*x + 1\\ny.backward()\\nprint('dy/dx at x=3 is:', x.grad.item()) # 2*3 + 2 = 8.0"
        ],
        "bullets": [],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-12",
    "sectionNum": 12,
    "title": "Building & Training Neural Networks in PyTorch",
    "duration": "2 hours",
    "partNum": 4,
    "partName": "Part IV — Stability, PyTorch & Production",
    "tag": "PyTorch Training Loop",
    "subsections": [
      {
        "title": "12.1 The Standard 7-Step Training Loop",
        "paragraphs": [
          "Every deep learning model in PyTorch follows an immutable 7-step optimization cadence:",
          "Step 1: model.train() — Activate training modes for Dropout/BatchNorm.",
          "Step 2: optimizer.zero_grad() — Clear accumulated gradients from prior iterations.",
          "Step 3: Forward Pass — logits = model(inputs).",
          "Step 4: Loss Calculation — loss = criterion(logits, labels).",
          "Step 5: Backward Pass — loss.backward() to compute parameter gradients.",
          "Step 6: Optimizer Step — optimizer.step() to update weights.",
          "Step 7: Validation Evaluation — with torch.no_grad(): model.eval() on held-out data."
        ],
        "codeBlocks": [
          "for epoch in range(epochs):\\n    model.train()\\n    for X_batch, y_batch in train_loader:\\n        optimizer.zero_grad()\\n        outputs = model(X_batch)\\n        loss = criterion(outputs, y_batch)\\n        loss.backward()\\n        optimizer.step()"
        ],
        "bullets": [],
        "isExercise": false
      }
    ]
  },
  {
    "id": "sec-13",
    "sectionNum": 13,
    "title": "Neural Network Evaluation, Metrics & Debugging",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Stability, PyTorch & Production",
    "tag": "Evaluation & Debugging",
    "subsections": [
      {
        "title": "13.1 Classification Metrics & Confusion Matrix",
        "paragraphs": [
          "Evaluating neural networks requires looking beyond raw accuracy, particularly under class imbalance.",
          "Accuracy = (TP + TN) / Total.",
          "Precision = TP / (TP + FP) (exactness).",
          "Recall = TP / (TP + FN) (completeness).",
          "F1-Score = 2 * (Precision * Recall) / (Precision + Recall)."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "13.2 PyTorch Engineering Debugging Checklist",
        "paragraphs": [
          "When training fails or stalls, execute this diagnostic audit:",
          "1. Overfit a tiny batch: Feed 5-10 examples to the network. If it cannot achieve 100% accuracy and near-zero loss, there is a fundamental bug in the model or loss setup.",
          "2. Audit tensor dimensions: Inspect inputs, logits, and target shapes to ensure no implicit broadcasting bugs.",
          "3. Check for zeroed gradients: Ensure optimizer.zero_grad() is called and loss.backward() is executing.",
          "4. Detect NaN losses: Check learning rates, remove division by zero, and replace BCE with BCEWithLogitsLoss."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ]
  }
];

export default AI_DEEP_LEARNING_CURRICULUM_SECTIONS;
