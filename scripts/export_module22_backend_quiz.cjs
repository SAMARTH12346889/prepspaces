const fs = require('fs');
const path = require('path');

const quizQuestions = [
  {
    id: "quiz-01",
    question: "What is the primary difference between training a model from scratch and fine-tuning an existing model?",
    options: [
      "Training from scratch initializes weights randomly and learns from raw data; fine-tuning starts from pre-trained weights",
      "Training from scratch does not require a loss function",
      "Fine-tuning always trains 100% of model parameters",
      "Training from scratch only works on computer vision models"
    ],
    correctIndex: 0,
    explanation: "Training from scratch starts from randomly initialized parameters and learns all linguistic features from raw text; fine-tuning adapts pre-trained weights."
  },
  {
    id: "quiz-02",
    question: "What is the primary operational objective of an autoregressive GPT model?",
    options: [
      "Classifying input text into static categories",
      "Predicting the probability distribution of the next token conditioned on preceding tokens",
      "Translating audio waveforms into images",
      "Compressing database indices"
    ],
    correctIndex: 1,
    explanation: "Autoregressive GPT models predict the next token in a sequence given the previous context tokens: P(x_t | x_{<t})."
  },
  {
    id: "quiz-03",
    question: "Why do transformers require positional encodings?",
    options: [
      "To increase the vocabulary size",
      "Because self-attention is permutation invariant and has no inherent sense of token order",
      "To normalize gradient updates in the optimizer",
      "To convert integers into float32"
    ],
    correctIndex: 1,
    explanation: "Without positional encodings, self-attention treats sequences as unordered bags of words because pairwise dot products are order-independent."
  },
  {
    id: "quiz-04",
    question: "What does the causal attention mask prevent during transformer training?",
    options: [
      "Preventing attention weights from becoming negative",
      "Preventing current token representations from attending to future token positions",
      "Preventing the model from calculating cross-entropy loss",
      "Preventing GPU memory leaks"
    ],
    correctIndex: 1,
    explanation: "The causal mask sets future position scores to -infinity, ensuring token i cannot attend to any token j > i during next-token prediction."
  },
  {
    id: "quiz-05",
    question: "Why is the query-key dot product QK^T divided by sqrt(d_k)?",
    options: [
      "To convert values into integers",
      "To prevent dot products from growing excessively large and saturating the softmax into near-zero gradients",
      "To ensure the matrix is symmetric",
      "To bypass backpropagation"
    ],
    correctIndex: 1,
    explanation: "Scaling by 1/sqrt(d_k) normalizes the variance of the dot products to 1.0, preventing softmax saturation and vanishing gradients."
  },
  {
    id: "quiz-06",
    question: "What is the purpose of weight tying between token embeddings and the output language head?",
    options: [
      "It ties the learning rate to the batch size",
      "It shares weight tensors between input token embedding and output projection, reducing parameter count and regularizing weights",
      "It fuses the feed-forward network with the attention mechanism",
      "It prevents tokenizer out-of-vocabulary errors"
    ],
    correctIndex: 1,
    explanation: "Weight tying shares parameters between token_embedding and lm_head, saving V x C parameters and regularizing representations."
  },
  {
    id: "quiz-07",
    question: "What does Perplexity (PPL) measure in an autoregressive language model?",
    options: [
      "The total GPU memory allocated in gigabytes",
      "The number of floating-point operations executed per second",
      "The exponential of cross-entropy loss, reflecting the model's average prediction uncertainty",
      "The exact number of unique characters in the vocabulary"
    ],
    correctIndex: 2,
    explanation: "Perplexity PPL = exp(loss) measures the effective branching factor / uncertainty when predicting the next token."
  },
  {
    id: "quiz-08",
    question: "How does setting a lower temperature (e.g. T = 0.2) affect text generation?",
    options: [
      "It increases generation speed tenfold",
      "It sharpens the probability distribution, making high-probability tokens more dominant and text more deterministic",
      "It flattens the distribution and makes text completely random",
      "It disables the causal attention mask"
    ],
    correctIndex: 1,
    explanation: "Lower temperatures amplify logit differences, concentrating probabilities onto the most likely tokens and producing conservative outputs."
  },
  {
    id: "quiz-09",
    question: "How does Top-P (Nucleus) sampling select candidate tokens?",
    options: [
      "By strictly choosing the single most likely token",
      "By dynamically selecting the smallest set of top tokens whose cumulative probability reaches threshold p",
      "By selecting a static number of P tokens uniformly",
      "By filtering tokens that contain punctuation"
    ],
    correctIndex: 1,
    explanation: "Nucleus sampling sorts tokens by probability and keeps the top subset whose cumulative sum meets threshold p (e.g. 0.90)."
  },
  {
    id: "quiz-10",
    question: "What is the primary benefit of Pre-LayerNorm over Post-LayerNorm in transformer blocks?",
    options: [
      "It eliminates the need for token embeddings",
      "It keeps the residual identity stream clean and unnormalized, enabling stable gradient flow without strict warmups",
      "It reduces parameter counts by 50%",
      "It replaces multi-head attention with convolution"
    ],
    correctIndex: 1,
    explanation: "Pre-LN normalizes inputs inside sublayer branches, keeping the residual highway direct and stabilizing deep model training."
  },
  {
    id: "quiz-11",
    question: "Why is gradient clipping with max_norm=1.0 essential during transformer training?",
    options: [
      "It prevents gradients from growing too small",
      "It prevents exploding gradient updates from destroying learned model parameters during high-loss batches",
      "It converts 32-bit floats into 8-bit integers",
      "It automatically tunes the AdamW learning rate"
    ],
    correctIndex: 1,
    explanation: "Gradient clipping rescales gradient norms to max_norm when they exceed the limit, preventing explosive updates and NaN losses."
  },
  {
    id: "quiz-12",
    question: "What is the computational complexity of standard self-attention relative to sequence length T?",
    options: [
      "O(1) constant time",
      "O(T) linear time",
      "O(T^2) quadratic time",
      "O(2^T) exponential time"
    ],
    correctIndex: 2,
    explanation: "Pairwise query-key dot products require computing a T x T score matrix, resulting in O(T^2) computational and memory complexity."
  }
];

const moduleData = {
  id: "scratch-slm",
  courseId: "ai-engineering",
  index: 22,
  name: "22. Building Small Language Models from Scratch",
  route: "/learning/ai/scratch-slm",
  componentName: "AIScratchLlm",
  quiz: quizQuestions
};

const targetPath = path.join(__dirname, '..', 'backend', 'content', 'ai-engineering', 'modules', 'scratch-slm.json');
fs.writeFileSync(targetPath, JSON.stringify(moduleData, null, 2), 'utf-8');
console.log('Successfully wrote backend quiz file to:', targetPath);
