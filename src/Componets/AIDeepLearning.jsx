import React, { useState, useMemo } from "react";
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
  Target,
  Activity,
  Layers,
  Database,
  Cpu
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { AI_DEEP_LEARNING_CURRICULUM_SECTIONS } from "./aiDeepLearningCurriculumData";
import {
  NeuronActivationPlayground,
  XORDecisionBoundaryTool,
  BackpropagationGradientSimulator,
  TensorDimensionArchitectureTool,
  OptimizerConvergenceSimulator
} from "./AIDeepLearningDiagrams";

export default function AIDeepLearning() {
  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'interactive-tools' | 'labs' | 'project' | 'interview' | 'quiz' | 'resources'

  // Section explorer state
  const [selectedSectionIdx, setSelectedSectionIdx] = useState(0);
  const [selectedPartFilter, setSelectedPartFilter] = useState("all");
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  const activeSection = AI_DEEP_LEARNING_CURRICULUM_SECTIONS[selectedSectionIdx] || AI_DEEP_LEARNING_CURRICULUM_SECTIONS[0];

  const filteredSections = useMemo(() => {
    if (selectedPartFilter === "all") return AI_DEEP_LEARNING_CURRICULUM_SECTIONS;
    const partNum = parseInt(selectedPartFilter, 10);
    return AI_DEEP_LEARNING_CURRICULUM_SECTIONS.filter((s) => s.partNum === partNum);
  }, [selectedPartFilter]);

  const handleCopyCode = (codeText, idx) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleNextSection = () => {
    if (selectedSectionIdx < AI_DEEP_LEARNING_CURRICULUM_SECTIONS.length - 1) {
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
  // PRACTICAL LABS (SECTION 15 - LABS 01 TO 06)
  // ---------------------------------------------------------------------------
  const [activeLabId, setActiveLabId] = useState("lab-1");
  const [copiedLabCode, setCopiedLabCode] = useState(false);

  const practicalLabs = [
    {
      id: "lab-1",
      number: "01",
      title: "Artificial Neuron Implementation in Pure NumPy",
      duration: "1.5 hours",
      domain: "Foundations",
      objective: "Build a single neuron from scratch without high-level frameworks to understand dot products and activation scaling.",
      tasks: [
        "Create arbitrary input vectors and corresponding weight vectors.",
        "Implement affine transformation: z = np.dot(w, x) + b.",
        "Code vector-compatible Sigmoid, Tanh, and ReLU functions.",
        "Compare outputs across varying bias thresholds."
      ],
      code: `# Lab 01: Artificial Neuron in Pure NumPy
import numpy as np

def sigmoid(z):
    return 1.0 / (1.0 + np.exp(-z))

def relu(z):
    return np.maximum(0, z)

def forward_neuron(x, w, b, activation='relu'):
    z = np.dot(w, x) + b
    if activation == 'relu':
        return z, relu(z)
    elif activation == 'sigmoid':
        return z, sigmoid(z)
    return z, z

x = np.array([2.0, 3.0, 1.0])
w = np.array([0.5, 0.2, 0.8])
b = 0.1

z, a = forward_neuron(x, w, b, activation='relu')
print(f"Weighted sum z: {z:.2f} | Activated output a: {a:.2f}")`
    },
    {
      id: "lab-2",
      number: "02",
      title: "Perceptron Learning Rule & Logical Gates",
      duration: "2 hours",
      domain: "Foundations",
      objective: "Implement Rosenblatt's perceptron update rule and prove linear separability on AND/OR vs XOR.",
      tasks: [
        "Generate boolean truth tables for AND, OR, and XOR.",
        "Train perceptron with weight update: w = w + lr * (y - y_hat) * x.",
        "Verify convergence on AND and OR in under 15 epochs.",
        "Observe infinite oscillation on XOR due to non-linear separability."
      ],
      code: `# Lab 02: Perceptron Logic Gates
import numpy as np

X = np.array([[0,0], [0,1], [1,0], [1,1]])
y_and = np.array([0, 0, 0, 1])

w = np.zeros(2)
b = 0.0
lr = 0.1

for epoch in range(20):
    errors = 0
    for xi, target in zip(X, y_and):
        z = np.dot(w, xi) + b
        y_hat = 1 if z >= 0 else 0
        update = lr * (target - y_hat)
        w += update * xi
        b += update
        errors += int(update != 0.0)
    if errors == 0:
        print(f"Converged at epoch {epoch}! Learned weights: {w}, bias: {b}")
        break`
    },
    {
      id: "lab-3",
      number: "03",
      title: "Solving XOR with a 2-Layer MLP in PyTorch",
      duration: "2 hours",
      domain: "Architecture",
      objective: "Construct a 2-input, 2-hidden, 1-output neural network in PyTorch and successfully classify the XOR manifold.",
      tasks: [
        "Construct custom nn.Module with nn.Linear(2, 2) and nn.Linear(2, 1).",
        "Introduce nn.ReLU() between dense layers.",
        "Train using BCEWithLogitsLoss and Adam optimizer.",
        "Inspect 100% accuracy on all 4 boolean combinations."
      ],
      code: `# Lab 03: XOR Solution in PyTorch
import torch
import torch.nn as nn

X = torch.tensor([[0.0, 0.0], [0.0, 1.0], [1.0, 0.0], [1.0, 1.0]])
y = torch.tensor([[0.0], [1.0], [1.0], [0.0]])

model = nn.Sequential(
    nn.Linear(2, 4),
    nn.ReLU(),
    nn.Linear(4, 1)
)

criterion = nn.BCEWithLogitsLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.05)

for epoch in range(300):
    optimizer.zero_grad()
    loss = criterion(model(X), y)
    loss.backward()
    optimizer.step()

with torch.no_grad():
    preds = (torch.sigmoid(model(X)) >= 0.5).int()
    print("XOR Predictions:\n", preds.squeeze().tolist())`
    },
    {
      id: "lab-4",
      number: "04",
      title: "Activation Function Benchmarking & Gradient Saturation",
      duration: "2 hours",
      domain: "Activations",
      objective: "Empirically evaluate Sigmoid, Tanh, ReLU, LeakyReLU, and GELU on gradient magnitudes during backpropagation.",
      tasks: [
        "Create deep 10-layer MLP stacks without residual shortcuts.",
        "Backpropagate loss across all 5 activations.",
        "Record gradient norm at layer 1 (input layer).",
        "Demonstrate gradient vanishing with Sigmoid vs stable propagation with ReLU/GELU."
      ],
      code: `# Lab 04: Activation Benchmark
import torch
import torch.nn as nn

activations = {
    "Sigmoid": nn.Sigmoid(),
    "Tanh": nn.Tanh(),
    "ReLU": nn.ReLU(),
    "GELU": nn.GELU()
}

x = torch.randn(32, 20)
for name, act in activations.items():
    layers = []
    for _ in range(8):
        layers.extend([nn.Linear(20, 20), act])
    model = nn.Sequential(*layers)
    
    out = model(x).sum()
    out.backward()
    grad_norm = model[0].weight.grad.norm().item()
    print(f"{name:<10} First Layer Grad Norm: {grad_norm:.6f}")`
    },
    {
      id: "lab-5",
      number: "05",
      title: "Optimizer Convergence Dynamics (SGD, Momentum, AdamW)",
      duration: "2 hours",
      domain: "Optimization",
      objective: "Train identical MLPs using SGD, Momentum, RMSprop, and AdamW to compare training speed and test generalization.",
      tasks: [
        "Synthesize high-dimensional classification problem with make_classification.",
        "Train models with identical weight seeds under 4 optimizers.",
        "Plot loss trajectory per epoch.",
        "Observe how AdamW achieves fastest loss reduction while Momentum escapes flat saddles."
      ],
      code: `# Lab 05: Optimizer Dynamics
import torch
import torch.nn as nn
from sklearn.datasets import make_classification

X_raw, y_raw = make_classification(n_samples=500, n_features=20, n_classes=2, random_state=42)
X = torch.tensor(X_raw, dtype=torch.float32)
y = torch.tensor(y_raw, dtype=torch.float32).unsqueeze(1)

optimizers = {
    "SGD": lambda p: torch.optim.SGD(p, lr=0.01),
    "Momentum": lambda p: torch.optim.SGD(p, lr=0.01, momentum=0.9),
    "AdamW": lambda p: torch.optim.AdamW(p, lr=0.01)
}

for name, opt_fn in optimizers.items():
    torch.manual_seed(42)
    m = nn.Sequential(nn.Linear(20, 16), nn.ReLU(), nn.Linear(16, 1))
    opt = opt_fn(m.parameters())
    crit = nn.BCEWithLogitsLoss()
    for _ in range(50):
        opt.zero_grad()
        crit(m(X), y).backward()
        opt.step()
    final_loss = crit(m(X), y).item()
    print(f"Optimizer: {name:<10} Final Loss: {final_loss:.4f}")`
    },
    {
      id: "lab-6",
      number: "06",
      title: "Full PyTorch Multiclass Pipeline with DataLoaders",
      duration: "2.5 hours",
      domain: "Production PyTorch",
      objective: "Implement a complete deep learning workflow: TensorDataset, DataLoader, train/val loops, early stopping, and checkpoint saving.",
      tasks: [
        "Partition data into 70% train, 15% validation, and 15% test splits.",
        "Standardize features with StandardScaler (fit on train only).",
        "Define 3-layer MLP with BatchNorm and Dropout.",
        "Implement early stopping when validation loss ceases to decrease.",
        "Save best weights using torch.save(model.state_dict(), 'best_model.pth')."
      ],
      code: `# Lab 06: Full PyTorch Production Pipeline
import torch
import torch.nn as nn
from torch.utils.data import TensorDataset, DataLoader
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Data Prep
data = load_wine()
X_tr, X_val, y_tr, y_val = train_test_split(data.data, data.target, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_tr = torch.tensor(scaler.fit_transform(X_tr), dtype=torch.float32)
y_tr = torch.tensor(y_tr, dtype=torch.long)
X_val = torch.tensor(scaler.transform(X_val), dtype=torch.float32)
y_val = torch.tensor(y_val, dtype=torch.long)

loader = DataLoader(TensorDataset(X_tr, y_tr), batch_size=16, shuffle=True)

# Architecture
model = nn.Sequential(
    nn.Linear(13, 32),
    nn.BatchNorm1d(32),
    nn.ReLU(),
    nn.Dropout(0.2),
    nn.Linear(32, 3)
)

criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.AdamW(model.parameters(), lr=0.01, weight_decay=1e-4)

# 7-Step Training Loop
for epoch in range(30):
    model.train()
    for xb, yb in loader:
        optimizer.zero_grad()
        loss = criterion(model(xb), yb)
        loss.backward()
        optimizer.step()

model.eval()
with torch.no_grad():
    val_acc = (model(X_val).argmax(1) == y_val).float().mean()
    print(f"Training Complete! Validation Accuracy: {val_acc.item()*100:.1f}%")`
    }
  ];

  const activeLab = practicalLabs.find((l) => l.id === activeLabId) || practicalLabs[0];

  const handleCopyLabCode = () => {
    navigator.clipboard.writeText(activeLab.code);
    setCopiedLabCode(true);
    setTimeout(() => setCopiedLabCode(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // SECTION 16 - CAPSTONE PROJECT (WINE CLASSIFIER IN PYTORCH)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    p1: true,
    p2: true,
    p3: false,
    p4: false,
    p5: false,
    p6: false
  });
  const [copiedProjectCode, setCopiedProjectCode] = useState(false);

  const toggleProjectCheck = (key) => {
    setProjectChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const projectCodeFull = `# PrepSpaces Deep Learning Masterclass: Multiclass Wine Classifier in PyTorch
# Complete production script covering dataset split, scaling, MLP module, validation loop, early stopping, and state_dict checkpointing.

import random
import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import TensorDataset, DataLoader
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, confusion_matrix

# 1. Reproducibility & Device Configuration
def set_seed(seed=42):
    random.seed(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    if torch.cuda.is_available():
        torch.cuda.manual_seed_all(seed)

set_seed(42)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(f"Using compute device: {device}")

# 2. Data Preparation & Leak-Free Scaling
dataset = load_wine()
X_raw, y_raw = dataset.data, dataset.target

# 70% Train, 15% Validation, 15% Test
X_train_val, X_test, y_train_val, y_test = train_test_split(
    X_raw, y_raw, test_size=0.15, random_state=42, stratify=y_raw
)
X_train, X_val, y_train, y_val = train_test_split(
    X_train_val, y_train_val, test_size=0.176, random_state=42, stratify=y_train_val
)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_val_scaled = scaler.transform(X_val)
X_test_scaled = scaler.transform(X_test)

train_dataset = TensorDataset(torch.tensor(X_train_scaled, dtype=torch.float32), torch.tensor(y_train, dtype=torch.long))
val_dataset = TensorDataset(torch.tensor(X_val_scaled, dtype=torch.float32), torch.tensor(y_val, dtype=torch.long))
test_dataset = TensorDataset(torch.tensor(X_test_scaled, dtype=torch.float32), torch.tensor(y_test, dtype=torch.long))

train_loader = DataLoader(train_dataset, batch_size=16, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=16, shuffle=False)
test_loader = DataLoader(test_dataset, batch_size=16, shuffle=False)

# 3. Multilayer Perceptron Architecture
class WineClassifierMLP(nn.Module):
    def __init__(self, in_features=13, hidden1=64, hidden2=32, num_classes=3):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_features, hidden1),
            nn.BatchNorm1d(hidden1),
            nn.ReLU(),
            nn.Dropout(p=0.2),
            nn.Linear(hidden1, hidden2),
            nn.BatchNorm1d(hidden2),
            nn.ReLU(),
            nn.Dropout(p=0.1),
            nn.Linear(hidden2, num_classes)
        )
        
    def forward(self, x):
        return self.net(x)

model = WineClassifierMLP().to(device)
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.AdamW(model.parameters(), lr=0.005, weight_decay=1e-3)

# 4. Training with Early Stopping
best_val_loss = float('inf')
best_epoch = 0
patience = 10
patience_counter = 0

epochs = 100
for epoch in range(1, epochs + 1):
    model.train()
    running_loss = 0.0
    for X_batch, y_batch in train_loader:
        X_batch, y_batch = X_batch.to(device), y_batch.to(device)
        
        optimizer.zero_grad()
        logits = model(X_batch)
        loss = criterion(logits, y_batch)
        loss.backward()
        optimizer.step()
        
        running_loss += loss.item() * X_batch.size(0)
    
    train_loss = running_loss / len(train_dataset)
    
    # Validation Phase
    model.eval()
    val_loss = 0.0
    correct = 0
    with torch.no_grad():
        for X_batch, y_batch in val_loader:
            X_batch, y_batch = X_batch.to(device), y_batch.to(device)
            logits = model(X_batch)
            loss = criterion(logits, y_batch)
            val_loss += loss.item() * X_batch.size(0)
            preds = logits.argmax(dim=1)
            correct += (preds == y_batch).sum().item()
            
    val_loss = val_loss / len(val_dataset)
    val_acc = correct / len(val_dataset)
    
    if val_loss < best_val_loss:
        best_val_loss = val_loss
        best_epoch = epoch
        patience_counter = 0
        torch.save(model.state_dict(), "wine_classifier_best.pth")
    else:
        patience_counter += 1
        if patience_counter >= patience:
            print(f"Early stopping triggered at epoch {epoch}. Best epoch was {best_epoch}.")
            break

# 5. Final Evaluation on Untouched Test Set
model.load_state_dict(torch.load("wine_classifier_best.pth"))
model.eval()

test_preds = []
test_targets = []
with torch.no_grad():
    for X_batch, y_batch in test_loader:
        X_batch = X_batch.to(device)
        logits = model(X_batch)
        test_preds.extend(logits.argmax(dim=1).cpu().numpy())
        test_targets.extend(y_batch.numpy())

print("\nTest Classification Report:")
print(classification_report(test_targets, test_preds, target_names=dataset.target_names))
print("Test Confusion Matrix:")
print(confusion_matrix(test_targets, test_preds))

# 6. Live Inference on New Unseen Chemical Profile
new_wine_sample = np.array([[13.5, 2.1, 2.4, 18.0, 105.0, 2.8, 2.9, 0.3, 1.8, 5.5, 1.05, 3.2, 1050.0]])
new_wine_tensor = torch.tensor(scaler.transform(new_wine_sample), dtype=torch.float32).to(device)

with torch.no_grad():
    raw_logits = model(new_wine_tensor)
    probs = torch.softmax(raw_logits, dim=1).cpu().numpy()[0]
    predicted_class = dataset.target_names[np.argmax(probs)]

print(f"\nInference on New Wine Sample:")
print(f"Predicted Cultivar: {predicted_class} (Confidence: {np.max(probs)*100:.2f}%)")
`;

  // ---------------------------------------------------------------------------
  // SECTION 18 - MODULE EXAMINATION QUIZ (8 MCQs)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of an activation function in an MLP?",
      options: ["To store model weights", "To introduce nonlinearity", "To split the dataset", "To calculate accuracy"],
      answer: 1,
      explanation: "Without non-linear activations, stacking multiple linear layers collapses algebraically into a single linear matrix transformation."
    },
    {
      id: 2,
      question: "Which algorithm calculates gradients through a neural network?",
      options: ["Normalization", "Backpropagation", "Data augmentation", "Clustering"],
      answer: 1,
      explanation: "Backpropagation applies the multivariate calculus chain rule to propagate error derivatives backward through the computational graph."
    },
    {
      id: 3,
      question: "Which PyTorch function calculates gradients from a loss?",
      options: ["optimizer.step()", "model.eval()", "loss.backward()", "torch.save()"],
      answer: 2,
      explanation: "Calling loss.backward() triggers PyTorch Autograd to traverse the backward graph and accumulate partial derivatives into each parameter's .grad attribute."
    },
    {
      id: 4,
      question: "Which loss is a standard starting point for multiclass classification?",
      options: ["MSELoss", "CrossEntropyLoss", "L1Loss", "Hinge-free accuracy"],
      answer: 1,
      explanation: "CrossEntropyLoss measures negative log-likelihood over categorical distributions and expects raw unnormalized logits."
    },
    {
      id: 5,
      question: "What is overfitting in deep neural networks?",
      options: [
        "The model cannot learn the training data",
        "The model memorizes training patterns and generalizes poorly",
        "The optimizer is missing",
        "All gradients are zero"
      ],
      answer: 1,
      explanation: "Overfitting occurs when high model capacity leads to memorizing sample noise, manifested by near-zero training loss but high validation error."
    },
    {
      id: 6,
      question: "What does optimizer.step() do?",
      options: ["Loads training data", "Calculates predictions", "Updates parameters using gradients", "Splits the dataset"],
      answer: 2,
      explanation: "optimizer.step() updates weights and biases using the gradients computed during loss.backward() according to the optimization algorithm (e.g., AdamW)."
    },
    {
      id: 7,
      question: "Why do we call optimizer.zero_grad()?",
      options: ["To clear accumulated gradients", "To delete weights", "To reset training data", "To improve test accuracy automatically"],
      answer: 0,
      explanation: "PyTorch accumulates gradients by default; calling optimizer.zero_grad() prevents gradients from prior batches from distorting the current update."
    },
    {
      id: 8,
      question: "What does high training accuracy and much lower validation accuracy suggest?",
      options: ["Likely overfitting", "Guaranteed underfitting", "Perfect generalization", "No activation functions"],
      answer: 0,
      explanation: "A large generalization gap (high train accuracy, low validation accuracy) is the textbook indicator of model overfitting."
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (showQuizResults) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) score += 1;
    });
    return score;
  }, [selectedAnswers]);

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowQuizResults(false);
  };

  // ---------------------------------------------------------------------------
  // INTERVIEW PREPARATION (CORE DEEP LEARNING CONCEPTS)
  // ---------------------------------------------------------------------------
  const [activeInterviewCategory, setActiveInterviewCategory] = useState("all");

  const interviewQAs = [
    {
      category: "Fundamentals",
      question: "Why can't a single-layer perceptron solve the XOR problem?",
      answer: "A single-layer perceptron defines a single linear hyperplane w1*x1 + w2*x2 + b = 0. In the XOR truth table, (0,1) and (1,0) have target 1, while (0,0) and (1,1) have target 0. These four points sit diagonally opposite each other in 2D space. No single straight line can partition class 1 from class 0 without misclassifying at least 25% of the points. An MLP solves this by using hidden non-linear neurons that warp the coordinate space."
    },
    {
      category: "Fundamentals",
      question: "What is the Universal Approximation Theorem and what are its practical limitations?",
      answer: "The Cybenko (1989) and Hornik (1991) theorems state that a feedforward network with a single hidden layer and non-linear activation can approximate any continuous function on a compact subset of R^n to arbitrary precision, given sufficient neurons. However, it is an existence theorem only: it does not guarantee that the optimal weights can be found using gradient descent, and an exponentially wide single layer often severely overfits compared to deep hierarchical networks."
    },
    {
      category: "Activations",
      question: "Explain the Dying ReLU problem and how Leaky ReLU and GELU solve it.",
      answer: "The ReLU activation f(z) = max(0, z) has a derivative of exactly 0 for z < 0. If a large gradient updates weights such that a neuron outputs negative values for all training examples, its gradient remains 0 forever, rendering the neuron permanently dead. Leaky ReLU solves this by adding a small positive slope alpha (e.g. 0.01) for z < 0. GELU weights inputs smoothly by their Gaussian cumulative distribution, allowing small probabilistic gradients to propagate even for moderately negative inputs."
    },
    {
      category: "Optimization",
      question: "Why is AdamW preferred over standard Adam with L2 regularization?",
      answer: "In classical SGD, adding an L2 penalty (0.5 * lambda * ||w||^2) to the loss is mathematically identical to weight decay (subtracting lambda * w during parameter updates). However, in Adam, gradients are normalized by root mean squared past gradients (sqrt(v_t)). Applying an L2 loss penalty causes parameters with large historical gradients to experience less regularization than parameters with small gradients. AdamW explicitly decouples weight decay from the gradient moments, applying weight decay directly to the parameter update."
    },
    {
      category: "Optimization",
      question: "What is the difference between Xavier and He weight initialization?",
      answer: "Xavier (Glorot) initialization sets weight variance to Var(W) = 2 / (fan_in + fan_out), assuming linear or zero-centered symmetric activations like Tanh to preserve activation and gradient variance across layers. He (Kaiming) initialization accounts for ReLU zeroing out half of the distribution by setting Var(W) = 2 / fan_in, preventing activation magnitudes from vanishing or exploding exponentially in deep networks."
    },
    {
      category: "Regularization",
      question: "How does Dropout work during training versus inference?",
      answer: "During training (model.train()), Dropout randomly sets a fraction p of neuron activations to zero and scales the remaining surviving activations by 1 / (1 - p) (inverted dropout). This prevents neurons from co-adapting to each other's outputs. During evaluation (model.eval()), Dropout is completely disabled and all neurons remain active without scaling, ensuring deterministic predictions."
    },
    {
      category: "PyTorch",
      question: "Why is PyTorch's Autograd called 'Reverse-Mode Automatic Differentiation'?",
      answer: "Forward-mode automatic differentiation computes directional derivatives along the forward evaluation path, scaling efficiently with the number of outputs. Deep learning models have millions of inputs/weights but only a single scalar loss output L. Reverse-mode automatic differentiation tracks the computational graph forward, then executes a single backward sweep from the scalar loss to compute partial derivatives w.r.t all millions of parameters simultaneously in O(1) backward passes."
    },
    {
      category: "Debugging",
      question: "What is the 'Overfit a Single Batch' sanity check and why is it essential?",
      answer: "Before training a neural network on a large dataset for hours, an engineer should feed a single mini-batch (e.g. 8-16 examples) repeatedly for 100 epochs. Because neural networks have high capacity, any correctly implemented architecture, loss function, and optimizer must achieve 100% accuracy and near-zero loss on a single batch. If it fails, there is a fundamental bug in tensor shapes, gradient zeroing, target encoding, or data types."
    }
  ];

  const filteredInterviewQAs = useMemo(() => {
    if (activeInterviewCategory === "all") return interviewQAs;
    return interviewQAs.filter((qa) => qa.category === activeInterviewCategory);
  }, [activeInterviewCategory]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Module Navigation Header */}
      <ModuleNav track="ai" currentModuleId="deep-learning" />

      {/* Hero Banner */}
      <div className="relative border-b border-[#e7e3da] bg-[#f5f2eb]/70 pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-100/80 text-orange-800 border border-orange-200">
              <Brain size={13} className="text-orange-600" />
              AI Engineering Track &bull; Module 04
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium bg-stone-100 text-stone-700 border border-stone-200">
              <Clock size={12} />
              12&ndash;16 Hours &bull; Intermediate to Advanced
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              PyTorch &bull; Stanford CS231n &bull; MIT 6.S191 Aligned
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mt-2">
            Deep Learning &amp; Neural Network Engineering
          </h1>
          <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-4xl leading-relaxed">
            Master the mathematical mechanics of deep neural networks from first principles. Understand artificial neurons, multilayer perceptrons, backpropagation via the chain rule, activation dynamics, loss functions, modern optimizers (AdamW), and production model engineering using PyTorch.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="bg-white p-3.5 rounded-xl border border-[#e7e3da] shadow-2xs">
              <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block">Curriculum</span>
              <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">13 Units</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">Foundations to Production</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#e7e3da] shadow-2xs">
              <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block">Simulators</span>
              <span className="text-xl sm:text-2xl font-black text-orange-600 font-mono">5 Interactive</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">Neuron, XOR, Backprop, Tensors, Adam</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#e7e3da] shadow-2xs">
              <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block">Practical Labs</span>
              <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">6 Hands-on</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">Pure NumPy &amp; PyTorch</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#e7e3da] shadow-2xs">
              <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block">Capstone Project</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-700 font-mono">Wine Classifier</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">Multiclass PyTorch System</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="sticky top-0 z-30 bg-[#faf8f4]/95 backdrop-blur-md border-b border-[#e7e3da] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar">
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "curriculum"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <BookOpen size={16} className={activeTab === "curriculum" ? "text-white" : "text-stone-400"} />
            Curriculum (13 Units)
          </button>

          <button
            onClick={() => setActiveTab("interactive-tools")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "interactive-tools"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Sliders size={16} className={activeTab === "interactive-tools" ? "text-white" : "text-stone-400"} />
            Interactive Simulators (5)
          </button>

          <button
            onClick={() => setActiveTab("labs")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "labs"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Terminal size={16} className={activeTab === "labs" ? "text-white" : "text-stone-400"} />
            Practical Labs (6)
          </button>

          <button
            onClick={() => setActiveTab("project")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "project"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <ShieldCheck size={16} className={activeTab === "project" ? "text-white" : "text-stone-400"} />
            Capstone Project
          </button>

          <button
            onClick={() => setActiveTab("interview")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "interview"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Sparkles size={16} className={activeTab === "interview" ? "text-white" : "text-stone-400"} />
            Interview Prep
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "quiz"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Award size={16} className={activeTab === "quiz" ? "text-white" : "text-stone-400"} />
            Examination Quiz
          </button>

          <button
            onClick={() => setActiveTab("resources")}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "resources"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <ExternalLink size={16} className={activeTab === "resources" ? "text-white" : "text-stone-400"} />
            University Resources
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ================================================================= */}
        {/* TAB 1: CURRICULUM EXPLORER (13 UNITS)                             */}
        {/* ================================================================= */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Section List */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#e7e3da] p-4 shadow-xs sticky top-20 max-h-[82vh] flex flex-col">
              <div className="mb-3">
                <span className="text-[10px] font-mono uppercase font-bold text-stone-500 tracking-wider block">
                  Curriculum Navigator
                </span>
                <h3 className="text-sm font-bold text-stone-900">13 Deep Learning Units</h3>
              </div>

              {/* Part Filter Selector */}
              <div className="mb-3">
                <select
                  value={selectedPartFilter}
                  onChange={(e) => setSelectedPartFilter(e.target.value)}
                  className="w-full text-xs font-mono font-medium bg-[#f5f2eb] border border-[#e7e3da] rounded-xl px-2.5 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
                >
                  <option value="all">All Parts (13 Units)</option>
                  <option value="1">Part I: Foundations &amp; Perceptrons (Sec 1-2)</option>
                  <option value="2">Part II: MLPs &amp; Activations (Sec 3-5)</option>
                  <option value="3">Part III: Loss &amp; Optimization (Sec 6-8)</option>
                  <option value="4">Part IV: Stability, PyTorch &amp; Production (Sec 9-13)</option>
                </select>
              </div>

              {/* Scrollable list */}
              <div className="overflow-y-auto space-y-1.5 pr-1 flex-1">
                {filteredSections.map((sec) => {
                  const globalIdx = AI_DEEP_LEARNING_CURRICULUM_SECTIONS.findIndex((s) => s.id === sec.id);
                  const isSelected = globalIdx === selectedSectionIdx;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => {
                        setSelectedSectionIdx(globalIdx);
                        window.scrollTo({ top: 350, behavior: "smooth" });
                      }}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                        isSelected
                          ? "bg-orange-50 border border-orange-200 text-orange-950 font-bold shadow-2xs"
                          : "hover:bg-[#f5f2eb] text-stone-700 border border-transparent font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md shrink-0 mt-0.5 ${
                          isSelected
                            ? "bg-orange-600 text-white font-bold"
                            : "bg-[#eae6df] text-stone-600"
                        }`}
                      >
                        {sec.sectionNum.toString().padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs leading-snug line-clamp-1">{sec.title}</div>
                        <div className="text-[10px] text-stone-500 font-mono mt-0.5 flex items-center justify-between">
                          <span>{sec.tag}</span>
                          <span>{sec.duration}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section Detailed View */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                      Unit {activeSection.sectionNum.toString().padStart(2, "0")}
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      {activeSection.partName}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {activeSection.duration}
                    </span>
                    <span>&bull;</span>
                    <span>{activeSection.subsections.length} Subsections</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                  {activeSection.title}
                </h2>

                {/* Subsections Content */}
                <div className="mt-6 space-y-6">
                  {activeSection.subsections.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className={`rounded-xl p-5 border transition-all ${
                        sub.isExercise
                          ? "bg-orange-50/40 border-orange-200/80"
                          : "bg-[#faf8f4] border-[#e7e3da]"
                      }`}
                    >
                      <h4
                        className={`text-base font-bold mb-3 flex items-center gap-2 ${
                          sub.isExercise ? "text-orange-950" : "text-stone-900"
                        }`}
                      >
                        {sub.isExercise && <Sparkles size={16} className="text-orange-600 shrink-0" />}
                        {sub.title}
                      </h4>

                      {/* Paragraphs */}
                      {sub.paragraphs.length > 0 && (
                        <div className="space-y-2 text-stone-700 text-sm leading-relaxed mb-3">
                          {sub.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      )}

                      {/* Code and Math Blocks */}
                      {sub.codeBlocks.length > 0 && (
                        <div className="my-3 space-y-2">
                          {sub.codeBlocks.map((c, cIdx) => (
                            <div key={cIdx} className="relative group">
                              <pre className="p-3.5 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-stone-800">
                                <code>{c}</code>
                              </pre>
                              <button
                                onClick={() => handleCopyCode(c, `${sIdx}-${cIdx}`)}
                                className="absolute top-2 right-2 p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white border border-stone-700 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] flex items-center gap-1 font-mono cursor-pointer"
                              >
                                {copiedCodeIdx === `${sIdx}-${cIdx}` ? (
                                  <>
                                    <Check size={12} className="text-emerald-400" /> Copied
                                  </>
                                ) : (
                                  <>
                                    <Copy size={12} /> Copy
                                  </>
                                )}
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Bullet points */}
                      {sub.bullets.length > 0 && (
                        <ul className="mt-2 space-y-1.5 text-xs text-stone-600 list-disc list-inside">
                          {sub.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="leading-relaxed">
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* Next / Previous Navigator */}
                <div className="flex items-center justify-between pt-6 mt-8 border-t border-[#e7e3da]">
                  <button
                    onClick={handlePrevSection}
                    disabled={selectedSectionIdx === 0}
                    className="px-4 py-2 rounded-xl border border-[#e7e3da] bg-[#f5f2eb] hover:bg-white disabled:opacity-40 text-xs font-mono font-bold text-stone-700 flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <ArrowLeft size={14} /> Previous Unit
                  </button>

                  <span className="text-xs font-mono text-stone-500">
                    {selectedSectionIdx + 1} of {AI_DEEP_LEARNING_CURRICULUM_SECTIONS.length}
                  </span>

                  <button
                    onClick={handleNextSection}
                    disabled={selectedSectionIdx === AI_DEEP_LEARNING_CURRICULUM_SECTIONS.length - 1}
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-black disabled:opacity-40 text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                  >
                    Next Unit <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: INTERACTIVE SIMULATORS (5 TOOLS)                          */}
        {/* ================================================================= */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-8">
            <div className="border-b border-[#e7e3da] pb-4">
              <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
                Deep Learning Visual Laboratories
              </span>
              <h2 className="text-2xl font-black text-stone-900 mt-1">
                Interactive Neural Network Simulators
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                Explore neuron activations, XOR manifold transformations, step-by-step backpropagation gradients, layer tensor dimensions, and optimizer convergence.
              </p>
            </div>

            {/* Tool 1 */}
            <NeuronActivationPlayground />

            {/* Tool 2 */}
            <XORDecisionBoundaryTool />

            {/* Tool 3 */}
            <BackpropagationGradientSimulator />

            {/* Tool 4 */}
            <TensorDimensionArchitectureTool />

            {/* Tool 5 */}
            <OptimizerConvergenceSimulator />
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: PRACTICAL LABORATORIES (6 LABS)                           */}
        {/* ================================================================= */}
        {activeTab === "labs" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Lab Selector Sidebar */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#e7e3da] p-4 shadow-xs sticky top-20 max-h-[80vh] flex flex-col">
              <div className="mb-3">
                <span className="text-[10px] font-mono uppercase font-bold text-stone-500 tracking-wider block">
                  Laboratory Syllabus
                </span>
                <h3 className="text-sm font-bold text-stone-900">6 Hands-on Laboratories</h3>
              </div>

              <div className="overflow-y-auto space-y-1.5 pr-1 flex-1">
                {practicalLabs.map((lab) => {
                  const isSelected = lab.id === activeLabId;
                  return (
                    <button
                      key={lab.id}
                      onClick={() => setActiveLabId(lab.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                        isSelected
                          ? "bg-orange-50 border border-orange-200 text-orange-950 font-bold shadow-2xs"
                          : "hover:bg-[#f5f2eb] text-stone-700 border border-transparent font-medium"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md shrink-0 mt-0.5 ${
                          isSelected
                            ? "bg-orange-600 text-white font-bold"
                            : "bg-[#eae6df] text-stone-600"
                        }`}
                      >
                        LAB {lab.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs leading-snug line-clamp-1">{lab.title}</div>
                        <div className="text-[10px] text-stone-500 font-mono mt-0.5 flex items-center justify-between">
                          <span>{lab.domain}</span>
                          <span>{lab.duration}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Lab Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                      LAB {activeLab.number}
                    </span>
                    <span className="text-xs font-mono text-stone-500">{activeLab.domain}</span>
                  </div>
                  <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                    <Clock size={13} /> {activeLab.duration}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-stone-900 tracking-tight">
                  {activeLab.title}
                </h2>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {activeLab.objective}
                </p>

                {/* Tasks List */}
                <div className="mt-5 bg-[#faf8f4] p-4 rounded-xl border border-[#e7e3da]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 font-mono mb-2">
                    Key Laboratory Tasks:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {activeLab.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <Check size={13} className="text-emerald-600 mt-0.5 shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Runnable Python/PyTorch Code */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-stone-700 flex items-center gap-1.5">
                      <FileCode size={14} className="text-orange-600" />
                      Executable Solution
                    </span>
                    <button
                      onClick={handleCopyLabCode}
                      className="px-3 py-1 rounded-lg bg-[#f5f2eb] hover:bg-stone-200 text-stone-800 text-xs font-mono font-bold flex items-center gap-1.5 border border-[#e7e3da] transition-all cursor-pointer"
                    >
                      {copiedLabCode ? (
                        <>
                          <Check size={12} className="text-emerald-600" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={12} /> Copy Code
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-stone-800">
                    <code>{activeLab.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 4: CAPSTONE INTEGRATED PROJECT (SECTION 16)                   */}
        {/* ================================================================= */}
        {activeTab === "project" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
                    Section 16 &bull; Mandatory Practical Project
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-1">
                    Intelligent Multiclass Classification System Using Deep Learning
                  </h2>
                </div>
                <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200 font-bold">
                  100 Points Total
                </span>
              </div>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-4xl">
                Build a production-grade multiclass deep learning classification system on Scikit-learn's Wine recognition dataset using PyTorch. Implement 3-way dataset splitting, feature standardization without leakage, custom neural architecture with Batch Normalization and Dropout, early stopping, state_dict checkpointing, and live inference.
              </p>

              {/* Architecture Diagram */}
              <div className="my-6 p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 font-mono mb-3">
                  Capstone System Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Database size={18} className="mx-auto text-orange-600 mb-1" />
                    <span className="font-bold block text-stone-900">1. Data Ingestion</span>
                    <span className="text-[10px] text-stone-500">13 features, 3 cultivars</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Layers size={18} className="mx-auto text-blue-600 mb-1" />
                    <span className="font-bold block text-stone-900">2. Scaler &amp; Loader</span>
                    <span className="text-[10px] text-stone-500">Train-fit StandardScaler</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Activity size={18} className="mx-auto text-purple-600 mb-1" />
                    <span className="font-bold block text-stone-900">3. MLP 13&rarr;64&rarr;32&rarr;3</span>
                    <span className="text-[10px] text-stone-500">BatchNorm + Dropout(0.2)</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Target size={18} className="mx-auto text-emerald-600 mb-1" />
                    <span className="font-bold block text-stone-900">4. Early Stopping</span>
                    <span className="text-[10px] text-stone-500">Patience=10 on val loss</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Cpu size={18} className="mx-auto text-stone-800 mb-1" />
                    <span className="font-bold block text-stone-900">5. Checkpointing</span>
                    <span className="text-[10px] text-stone-500">state_dict serialization</span>
                  </div>
                </div>
              </div>

              {/* 6-Phase Implementation Checklist */}
              <div className="mt-6">
                <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <ListOrdered size={18} className="text-orange-600" />
                  6-Phase Capstone Implementation Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { key: "p1", label: "Phase 1: Explore wine dataset features, distributions, and class balance" },
                    { key: "p2", label: "Phase 2: Partition 70/15/15 splits and standardize without data leakage" },
                    { key: "p3", label: "Phase 3: Design PyTorch nn.Module with BatchNorm and Dropout" },
                    { key: "p4", label: "Phase 4: Implement 7-step training loop with AdamW optimizer" },
                    { key: "p5", label: "Phase 5: Evaluate test set precision, recall, and confusion matrix" },
                    { key: "p6", label: "Phase 6: Save best weights state_dict and demonstrate live inference" }
                  ].map((item) => (
                    <label
                      key={item.key}
                      onClick={() => toggleProjectCheck(item.key)}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                        projectChecklist[item.key]
                          ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                          : "bg-[#faf8f4] border-[#e7e3da] text-stone-700 hover:bg-[#f5f2eb]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={projectChecklist[item.key]}
                        onChange={() => {}}
                        className="rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                      <span className="flex-1 font-medium">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Capstone Code */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-stone-700 flex items-center gap-1.5">
                    <FileCode size={14} className="text-orange-600" />
                    wine_classifier.py (Complete Production Script)
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(projectCodeFull);
                      setCopiedProjectCode(true);
                      setTimeout(() => setCopiedProjectCode(false), 2000);
                    }}
                    className="px-3 py-1 rounded-lg bg-[#f5f2eb] hover:bg-stone-200 text-stone-800 text-xs font-mono font-bold flex items-center gap-1.5 border border-[#e7e3da] transition-all cursor-pointer"
                  >
                    {copiedProjectCode ? (
                      <>
                        <Check size={12} className="text-emerald-600" /> Copied Script!
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Copy Script
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-stone-800 max-h-[500px]">
                  <code>{projectCodeFull}</code>
                </pre>
              </div>

              {/* Rubric */}
              <div className="mt-8 border-t border-[#e7e3da] pt-6">
                <h3 className="text-base font-bold text-stone-900 mb-3">
                  Capstone Evaluation Rubric (100 Marks Total)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="bg-[#f5f2eb] border-b border-[#e7e3da] text-stone-700 font-bold">
                        <th className="p-2.5">Evaluation Component</th>
                        <th className="p-2.5">Marks</th>
                        <th className="p-2.5">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Dataset Investigation &amp; Preprocessing</td>
                        <td className="p-2.5 text-orange-600 font-bold">15</td>
                        <td className="p-2.5">Strict 70/15/15 split, fit scaler on train only, PyTorch tensor loading.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Neural Network Architecture</td>
                        <td className="p-2.5 text-orange-600 font-bold">15</td>
                        <td className="p-2.5">13&rarr;64&rarr;32&rarr;3 with BatchNorm1d, ReLU, and Dropout layers.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Forward Propagation &amp; Training</td>
                        <td className="p-2.5 text-orange-600 font-bold">20</td>
                        <td className="p-2.5">7-step training loop with model.train() and optimizer.zero_grad().</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Optimization Experiments</td>
                        <td className="p-2.5 text-orange-600 font-bold">15</td>
                        <td className="p-2.5">AdamW optimizer, CrossEntropyLoss, and early stopping patience mechanism.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Model Evaluation</td>
                        <td className="p-2.5 text-orange-600 font-bold">15</td>
                        <td className="p-2.5">Confusion matrix, class precision/recall, and validation loss tracking.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Testing &amp; Debugging</td>
                        <td className="p-2.5 text-orange-600 font-bold">10</td>
                        <td className="p-2.5">Single-batch overfit verification and state_dict reloading.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Technical Documentation</td>
                        <td className="p-2.5 text-orange-600 font-bold">10</td>
                        <td className="p-2.5">Reproducibility seed configuration and architectural explanations.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 5: TECHNICAL INTERVIEW PREPARATION                            */}
        {/* ================================================================= */}
        {activeTab === "interview" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
                    Section 17 &bull; Interview Preparation
                  </span>
                  <h2 className="text-2xl font-black text-stone-900 mt-1">
                    Deep Learning Technical Interview Questions
                  </h2>
                </div>
                <div className="flex gap-1.5">
                  {["all", "Fundamentals", "Activations", "Optimization", "Regularization", "PyTorch", "Debugging"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveInterviewCategory(cat)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border transition-all ${
                        activeInterviewCategory === cat
                          ? "bg-stone-900 text-white border-stone-900"
                          : "bg-[#f5f2eb] text-stone-700 border-[#e7e3da] hover:bg-white"
                      }`}
                    >
                      {cat === "all" ? "All Topics" : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {filteredInterviewQAs.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] space-y-2 hover:border-orange-300 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-orange-600 uppercase">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">
                        Q{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-stone-900">
                      {item.question}
                    </h4>
                    <p className="text-xs text-stone-700 leading-relaxed pt-1 border-t border-[#e7e3da]/60">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 6: MODULE EXAMINATION QUIZ (8 MCQs)                           */}
        {/* ================================================================= */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
                  Section 18 &bull; Knowledge Checkpoint
                </span>
                <h2 className="text-2xl font-black text-stone-900 mt-1">
                  Deep Learning &amp; PyTorch Module Examination
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200 font-bold">
                  Answered: {Object.keys(selectedAnswers).length} / 8
                </span>
                {showQuizResults && (
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border font-bold ${
                      quizScore >= 6
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : "bg-amber-50 text-amber-800 border-amber-200"
                    }`}
                  >
                    Score: {quizScore} / 8 ({(quizScore / 8 * 100).toFixed(0)}%)
                  </span>
                )}
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {quizQuestions.map((q, qIdx) => {
                const userChoice = selectedAnswers[q.id];
                const isCorrect = userChoice === q.answer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 sm:p-5 rounded-xl border transition-all ${
                      showQuizResults
                        ? isCorrect
                          ? "bg-emerald-50/50 border-emerald-200"
                          : "bg-rose-50/50 border-rose-200"
                        : "bg-[#faf8f4] border-[#e7e3da]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-stone-500">
                        Question {qIdx + 1} of 8
                      </span>
                      {showQuizResults && (
                        <span
                          className={`text-xs font-mono font-bold ${
                            isCorrect ? "text-emerald-700" : "text-rose-700"
                          }`}
                        >
                          {isCorrect ? "✓ Correct" : "✗ Incorrect"}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-stone-900 mb-3">{q.question}</h4>

                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = userChoice === oIdx;
                        let optionStyle = "bg-white border-[#e7e3da] text-stone-700 hover:bg-[#f5f2eb]";

                        if (showQuizResults) {
                          if (oIdx === q.answer) {
                            optionStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                          } else if (isSelected && !isCorrect) {
                            optionStyle = "bg-rose-100 border-rose-400 text-rose-950 line-through";
                          } else {
                            optionStyle = "bg-white/60 border-stone-200 text-stone-400";
                          }
                        } else if (isSelected) {
                          optionStyle = "bg-orange-50 border-orange-400 text-orange-950 font-bold";
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectAnswer(q.id, oIdx)}
                            disabled={showQuizResults}
                            className={`w-full text-left p-3 rounded-lg border text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${optionStyle}`}
                          >
                            <span>{opt}</span>
                            <span
                              className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] shrink-0 ml-2 ${
                                isSelected ? "border-orange-600 bg-orange-600 text-white" : "border-stone-300"
                              }`}
                            >
                              {isSelected ? "●" : ""}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {showQuizResults && (
                      <div className="mt-3 text-xs text-stone-600 bg-white p-3 rounded-lg border border-[#e7e3da]/80 leading-relaxed">
                        <strong className="text-stone-900">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quiz Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#e7e3da]">
              <button
                onClick={handleResetQuiz}
                className="px-4 py-2 rounded-xl border border-[#e7e3da] bg-[#f5f2eb] hover:bg-white text-xs font-mono font-bold text-stone-700 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RotateCcw size={14} /> Reset Examination
              </button>

              {!showQuizResults ? (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(selectedAnswers).length < 8}
                  className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-40 text-white text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                >
                  <Check size={14} /> Submit Examination
                </button>
              ) : (
                <div className="text-xs font-mono text-stone-600 font-bold">
                  Examination Complete!
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 7: UNIVERSITY & INDUSTRY RESOURCES (SECTION 19)               */}
        {/* ================================================================= */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-5">
                <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
                  Section 19 &bull; Academic &amp; Industry Alignment
                </span>
                <h2 className="text-2xl font-black text-stone-900 mt-1">
                  University-Level Deep Learning Resources
                </h2>
                <p className="text-sm text-stone-600 mt-1">
                  Curated academic syllabi, interactive textbooks, and official PyTorch references that inspired this curriculum.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://cs231n.stanford.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] hover:border-orange-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold mb-1">
                      <span>Stanford University CS231n</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900">Deep Learning for Computer Vision</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      World-standard course covering backpropagation, matrix gradients, optimization landscapes, Batch Normalization, and CNN architectures.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 mt-3 block">cs231n.stanford.edu</span>
                </a>

                <a
                  href="https://introtodeeplearning.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] hover:border-orange-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold mb-1">
                      <span>MIT 6.S191</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900">Introduction to Deep Learning</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      MIT's official open courseware covering foundational neural networks, activation functions, loss surfaces, and generative models.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 mt-3 block">introtodeeplearning.com</span>
                </a>

                <a
                  href="https://d2l.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] hover:border-orange-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold mb-1">
                      <span>Dive into Deep Learning (D2L)</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900">Interactive Open Textbook</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Multi-framework interactive textbook by Aston Zhang, Zachary Lipton, Mu Li, and Alex Smola covering math, PyTorch code, and stability.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 mt-3 block">d2l.ai</span>
                </a>

                <a
                  href="https://docs.pytorch.org/tutorials/beginner/basics/intro.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] hover:border-orange-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold mb-1">
                      <span>PyTorch Documentation</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900">Official PyTorch Learning Tutorials</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Primary documentation for tensors, Autograd, torch.nn modules, custom datasets, and production training loops.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 mt-3 block">docs.pytorch.org</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
