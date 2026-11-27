/**
 * Concepts Batch: Machine Learning (5) + Blockchain (5)
 * Complete original technical lessons with code examples, common mistakes,
 * interview Q&As, and two-way links to PrepSpaces courses and modules.
 */

export const CONCEPTS_ML_BLOCKCHAIN = [
  // ================= MACHINE LEARNING (5) =================
  {
    slug: "linear-regression",
    category: "machine-learning",
    subcategory: "Supervised Regression",
    difficulty: "Beginner",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Linear Regression (OLS), Gradient Descent & Residual Analysis",
    metaTitle: "Linear Regression, OLS & Gradient Descent | PrepSpaces Concepts",
    description:
      "Master Ordinary Least Squares (OLS) linear regression, Mean Squared Error, Gradient Descent optimization, R-squared, and regression assumptions.",
    keywords: "Linear Regression, Ordinary Least Squares, Gradient Descent, MSE, R-squared, scikit-learn",
    directAnswer:
      "Linear Regression models a continuous target y as a weighted linear combination of input features (y = Xw + b), fitting weights by minimizing Mean Squared Error either analytically via Ordinary Least Squares (OLS) or iteratively via Gradient Descent.",
    sections: [
      {
        heading: "1. OLS Closed-Form vs Gradient Descent",
        paragraphs: [
          "Ordinary Least Squares solves `w = (X^T X)^-1 X^T y` directly in closed form, which works well for small/medium feature counts but scales poorly (`O(d^3)`) when features number in the tens of thousands.",
          "Gradient Descent updates weights iteratively (`w := w - lr * grad`) using partial derivatives of MSE, scaling cleanly to large datasets when features are standardized first.",
        ],
      },
      {
        heading: "2. Evaluating Fit: RMSE, MAE & R-Squared",
        paragraphs: [
          "RMSE penalizes large errors quadratically and stays in target units, while MAE measures average absolute deviation and is more robust to outliers. Adjusted R-squared penalizes adding unhelpful features that inflate plain R-squared.",
        ],
      },
    ],
    codeExample: {
      title: "Fitting & Evaluating Linear Regression with Scikit-learn",
      language: "python",
      code: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import root_mean_squared_error, r2_score

model = LinearRegression()
model.fit(X_train, y_train)
preds = model.predict(X_test)

print("RMSE:", root_mean_squared_error(y_test, preds))
print("R2:", r2_score(y_test, preds))`,
      explanation:
        "`LinearRegression` fits OLS weights on `X_train`, then evaluates generalization error on unseen `X_test` using RMSE and R-squared.",
    },
    commonMistakes: [
      {
        mistake: "Evaluating R-squared only on the training set.",
        correction:
          "Always measure metrics on held-out validation/test sets or cross-validation folds to detect overfitting.",
      },
      {
        mistake: "Ignoring multicollinearity among correlated features.",
        correction:
          "Highly correlated predictors inflate OLS coefficient variance; inspect VIF or apply Ridge/Lasso regularization.",
      },
    ],
    interviewQuestions: [
      {
        question: "What are the key assumptions of Linear Regression?",
        answer: "Linearity between features and target, independence of errors, homoscedasticity (constant residual variance), no severe multicollinearity, and roughly normal residuals for inference.",
      },
      {
        question: "Why does Gradient Descent converge much faster when features are standardized?",
        answer: "Unscaled features create elongated elliptical loss contours that cause zig-zagging; standardization makes contours spherical so larger learning rates converge smoothly.",
      },
      {
        question: "When is MAE preferred over RMSE?",
        answer: "When outliers should not dominate the loss metric, since RMSE squares large residuals.",
      },
    ],
    relatedConcepts: [
      "/concepts/machine-learning/regularization-ridge-lasso",
      "/concepts/machine-learning/scikit-learn-pipelines",
      "/concepts/machine-learning/classification-metrics",
    ],
    relatedCourse: {
      title: "Machine Learning Master Course",
      route: "/learning/machine-learning",
      description: "Master regression, regularization, classification, boosting, and ML pipelines.",
    },
    relatedModules: [
      { title: "ML Module 5: Regression Analysis & Linear Models", route: "/learning/machine-learning/regression" },
      { title: "ML Module 12: Model Evaluation & Cross-Validation", route: "/learning/machine-learning/model-evaluation" },
    ],
    practiceAction: { label: "Practice Machine Learning Interview", to: "/ai-interview" },
  },
  {
    slug: "regularization-ridge-lasso",
    category: "machine-learning",
    subcategory: "Regularization & Generalization",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Regularization: Ridge (L2), Lasso (L1), Elastic Net & Bias-Variance",
    metaTitle: "Ridge (L2), Lasso (L1) & Elastic Net Regularization | PrepSpaces Concepts",
    description:
      "Understand the Bias-Variance tradeoff and how L2 Ridge, L1 Lasso, and Elastic Net penalties prevent overfitting and perform feature selection.",
    keywords: "Ridge regression, Lasso regression, L1 vs L2 regularization, Elastic Net, Bias-Variance tradeoff",
    directAnswer:
      "Regularization prevents overfitting by adding a complexity penalty to the loss function: Ridge (L2) shrinks correlated weights smoothly toward zero, Lasso (L1) drives unimportant weights to exact zero for feature selection, and Elastic Net combines both.",
    sections: [
      {
        heading: "1. Bias-Variance Tradeoff",
        paragraphs: [
          "Underfitting models have high bias (too simple to capture signal). Overfitting models have high variance (memorizing training noise and failing on test data).",
          "Increasing regularization strength (`alpha`) slightly increases bias while substantially reducing variance, improving generalization.",
        ],
      },
      {
        heading: "2. L2 (Ridge) vs L1 (Lasso) Geometry",
        paragraphs: [
          "L2 penalty (`alpha * sum(w_i^2)`) creates a smooth circular constraint that distributes weights across correlated features. L1 penalty (`alpha * sum(|w_i|)`) creates diamond corners along axes, producing sparse models with exact-zero coefficients.",
        ],
      },
    ],
    codeExample: {
      title: "Standardized Ridge & Lasso Cross-Validation",
      language: "python",
      code: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import RidgeCV, LassoCV

ridge = make_pipeline(StandardScaler(), RidgeCV(alphas=[0.1, 1.0, 10.0]))
lasso = make_pipeline(StandardScaler(), LassoCV(cv=5, random_state=42))

ridge.fit(X_train, y_train)
lasso.fit(X_train, y_train)`,
      explanation:
        "Standardizing features inside a pipeline before Ridge/Lasso ensures penalty terms treat all feature scales fairly.",
    },
    commonMistakes: [
      {
        mistake: "Applying Ridge or Lasso without scaling input features.",
        correction:
          "Features on tiny numeric scales need huge weights, getting unfairly penalized compared to features in large units—always use `StandardScaler`.",
      },
      {
        mistake: "Tuning `alpha` directly on the test set.",
        correction:
          "Use `RidgeCV`/`LassoCV` or nested cross-validation on training data only.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why does Lasso produce sparse weights while Ridge does not?",
        answer: "The L1 constraint region has sharp corners on the coordinate axes where the loss contours frequently intersect, setting coefficients to exact zero.",
      },
      {
        question: "When is Elastic Net preferred over pure Lasso?",
        answer: "When many features are strongly correlated—Lasso tends to pick one arbitrarily, whereas Elastic Net's L2 term keeps correlated groups together.",
      },
      {
        question: "What happens as `alpha` approaches infinity?",
        answer: "Weights shrink toward zero, pushing the model toward a constant baseline (high bias, near-zero variance).",
      },
    ],
    relatedConcepts: [
      "/concepts/machine-learning/linear-regression",
      "/concepts/machine-learning/scikit-learn-pipelines",
      "/concepts/machine-learning/gradient-boosted-trees",
    ],
    relatedCourse: {
      title: "Machine Learning Master Course",
      route: "/learning/machine-learning",
      description: "Control overfitting and tune regularized models using Scikit-learn.",
    },
    relatedModules: [
      { title: "ML Module 6: Advanced Regression & Regularization", route: "/learning/machine-learning/advanced-regression" },
      { title: "ML Module 12: Model Evaluation & Cross-Validation", route: "/learning/machine-learning/model-evaluation" },
    ],
    practiceAction: { label: "Practice Regularization Interview", to: "/ai-interview" },
  },
  {
    slug: "classification-metrics",
    category: "machine-learning",
    subcategory: "Classification & Evaluation",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Classification Metrics: Precision, Recall, F1, ROC-AUC & PR-AUC",
    metaTitle: "Precision, Recall, F1 & ROC-AUC Explained | PrepSpaces Concepts",
    description:
      "Master binary classification evaluation beyond accuracy: confusion matrix, Precision vs Recall tradeoffs, F1 score, ROC-AUC, and imbalanced PR-AUC.",
    keywords: "Precision vs Recall, F1 Score, ROC-AUC, PR-AUC, Confusion Matrix, imbalanced classification",
    directAnswer:
      "Accuracy misleads on imbalanced datasets; Precision (TP / (TP + FP)) measures how many predicted positives are correct, Recall (TP / (TP + FN)) measures how many actual positives were caught, F1 is their harmonic mean, and ROC-AUC / PR-AUC evaluate ranking across thresholds.",
    sections: [
      {
        heading: "1. Choosing Precision vs Recall by Domain Cost",
        paragraphs: [
          "Prioritize **Recall** when missing a positive case is costly (cancer screening, fraud/intrusion detection). Prioritize **Precision** when false alarms hurt users (spam filters blocking real emails, automated account bans).",
          "Adjusting the probability decision threshold (e.g. from `0.5` to `0.3` or `0.8`) shifts the Precision-Recall balance without retraining the model.",
        ],
      },
      {
        heading: "2. ROC-AUC vs PR-AUC on Imbalanced Data",
        paragraphs: [
          "On a 99:1 imbalanced dataset, ROC-AUC can look optimistically high because True Negatives dominate the False Positive Rate denominator.",
          "Precision-Recall AUC (PR-AUC) focuses strictly on the minority positive class and gives a far more honest signal for rare-event detection.",
        ],
      },
    ],
    codeExample: {
      title: "Evaluating Imbalanced Classification with Scikit-learn",
      language: "python",
      code: `from sklearn.metrics import (
    classification_report,
    roc_auc_score,
    average_precision_score,
)

probs = clf.predict_proba(X_test)[:, 1]
preds = (probs >= 0.35).astype(int)  # Tuned threshold for higher recall

print(classification_report(y_test, preds))
print("ROC-AUC:", roc_auc_score(y_test, probs))
print("PR-AUC:", average_precision_score(y_test, probs))`,
      explanation:
        "Using `predict_proba` lets you evaluate threshold-independent AUC metrics and tune the operating threshold for business costs.",
    },
    commonMistakes: [
      {
        mistake: "Reporting 99% accuracy on a 1%-positive fraud dataset as strong performance.",
        correction:
          "A dummy model predicting all zeros gets 99% accuracy with 0% recall; use Recall, F1, and PR-AUC.",
      },
      {
        mistake: "Computing ROC-AUC using binary `predict()` labels instead of probabilities.",
        correction:
          "Pass continuous scores from `predict_proba()[:, 1]` or `decision_function()` to `roc_auc_score`.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why does F1 use the harmonic mean instead of the arithmetic mean of Precision and Recall?",
        answer: "The harmonic mean heavily penalizes extreme imbalance—a model with 1.0 Recall and 0.01 Precision gets ~0.02 F1 instead of 0.505.",
      },
      {
        question: "When should you prefer PR-AUC over ROC-AUC?",
        answer: "When the positive class is rare (heavily imbalanced datasets) and false positives matter.",
      },
      {
        question: "What does a ROC-AUC of 0.5 indicate?",
        answer: "Random guessing with no class separation capability.",
      },
    ],
    relatedConcepts: [
      "/concepts/machine-learning/gradient-boosted-trees",
      "/concepts/machine-learning/scikit-learn-pipelines",
      "/concepts/machine-learning/linear-regression",
    ],
    relatedCourse: {
      title: "Machine Learning Master Course",
      route: "/learning/machine-learning",
      description: "Master Logistic Regression, SVMs, ensembles, and rigorous model evaluation.",
    },
    relatedModules: [
      { title: "ML Module 7: Classification & Logistic Regression", route: "/learning/machine-learning/classification" },
      { title: "ML Module 12: Model Evaluation & Cross-Validation", route: "/learning/machine-learning/model-evaluation" },
    ],
    practiceAction: { label: "Practice Classification Interview", to: "/ai-interview" },
  },
  {
    slug: "gradient-boosted-trees",
    category: "machine-learning",
    subcategory: "Ensemble Learning",
    difficulty: "Advanced",
    readTime: "9 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Gradient Boosted Trees: XGBoost, LightGBM & Bagging vs Boosting",
    metaTitle: "Gradient Boosted Trees (XGBoost & LightGBM) | PrepSpaces Concepts",
    description:
      "Understand Bagging (Random Forest) vs Sequential Gradient Boosting (XGBoost, LightGBM), learning rate shrinkage, and early stopping.",
    keywords: "Gradient Boosting, XGBoost, LightGBM, Random Forest, Bagging vs Boosting, tabular ML",
    directAnswer:
      "Gradient Boosted Decision Trees (XGBoost, LightGBM) train shallow trees sequentially where each new tree fits the negative gradient (pseudo-residuals) of prior errors—delivering state-of-the-art accuracy on tabular data when regularized with learning rate shrinkage and early stopping.",
    sections: [
      {
        heading: "1. Bagging (Random Forest) vs Boosting (XGBoost / LightGBM)",
        paragraphs: [
          "Random Forests train many deep trees independently in parallel on bootstrap samples and average them to reduce **variance**.",
          "Gradient Boosting trains shallow trees (`max_depth` 3–8) sequentially so each tree corrects the remaining errors of the ensemble, primarily reducing **bias**.",
        ],
      },
      {
        heading: "2. Regularizing Boosting Models",
        paragraphs: [
          "Use small `learning_rate` (0.01–0.1) paired with `early_stopping_rounds` on a validation set, `subsample` / `colsample_bytree` (< 1.0), and L1/L2 leaf regularization to prevent overfitting.",
        ],
      },
    ],
    codeExample: {
      title: "Training XGBoost with Early Stopping on Validation Loss",
      language: "python",
      code: `from xgboost import XGBClassifier

model = XGBClassifier(
    n_estimators=1000,
    learning_rate=0.05,
    max_depth=5,
    subsample=0.8,
    colsample_bytree=0.8,
    early_stopping_rounds=30,
    eval_metric="logloss",
    random_state=42,
)

model.fit(
    X_train, y_train,
    eval_set=[(X_val, y_val)],
    verbose=False,
)`,
      explanation:
        "`early_stopping_rounds=30` halts training automatically once validation logloss stops improving, avoiding overfit trees.",
    },
    commonMistakes: [
      {
        mistake: "Passing the test set into `eval_set` for early stopping.",
        correction:
          "Early stopping tunes `n_estimators`—always use a separate validation split so test metrics remain unbiased.",
      },
      {
        mistake: "Setting `max_depth` too deep (e.g. 15+) in gradient boosting.",
        correction:
          "Boosting works best with shallow weak learners (`max_depth` 3–8); deep trees overfit rapidly.",
      },
    ],
    interviewQuestions: [
      {
        question: "How does LightGBM speed up training compared to classic exact-split trees?",
        answer: "LightGBM uses histogram-based binning, leaf-wise tree growth, GOSS, and EFB for fast memory-efficient splits on large tabular datasets.",
      },
      {
        question: "Why don't tree-based ensembles require feature scaling?",
        answer: "Decision trees split on monotonic feature thresholds (`x_j > t`), which are invariant to scaling.",
      },
      {
        question: "What is the tradeoff of lowering `learning_rate`?",
        answer: "Lower learning rates improve generalization but require more trees (`n_estimators`) and longer training time.",
      },
    ],
    relatedConcepts: [
      "/concepts/machine-learning/regularization-ridge-lasso",
      "/concepts/machine-learning/classification-metrics",
      "/concepts/machine-learning/scikit-learn-pipelines",
    ],
    relatedCourse: {
      title: "Machine Learning Master Course",
      route: "/learning/machine-learning",
      description: "Master decision trees, Random Forests, XGBoost, LightGBM, and hyperparameter tuning.",
    },
    relatedModules: [
      { title: "ML Module 8: Decision Trees & Rule-Based Learning", route: "/learning/machine-learning/decision-trees" },
      { title: "ML Module 9: Ensemble Learning & Boosting", route: "/learning/machine-learning/ensemble-learning" },
    ],
    practiceAction: { label: "Practice Ensemble ML Interview", to: "/ai-interview" },
  },
  {
    slug: "scikit-learn-pipelines",
    category: "machine-learning",
    subcategory: "ML Engineering",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Scikit-learn Pipelines, ColumnTransformer & Data Leakage Prevention",
    metaTitle: "Scikit-learn Pipelines & Data Leakage Prevention | PrepSpaces Concepts",
    description:
      "Prevent data leakage in ML workflows using Scikit-learn Pipeline, ColumnTransformer, cross-validation, and reproducible model serialization.",
    keywords: "Scikit-learn Pipeline, ColumnTransformer, Data Leakage, Cross-Validation, ML preprocessing",
    directAnswer:
      "Scikit-learn `Pipeline` and `ColumnTransformer` chain numeric/categorical preprocessing and estimators into a single object so `fit` statistics (means, imputations, encodings) are learned strictly from training folds—completely preventing data leakage.",
    sections: [
      {
        heading: "1. How Data Leakage Happens",
        paragraphs: [
          "Fitting `StandardScaler` or `SimpleImputer` on the entire dataset *before* `train_test_split` leaks validation/test distribution statistics into training, inflating cross-validation scores artificially.",
          "Wrapping preprocessing inside a `Pipeline` ensures every CV fold fits scalers/encoders only on that fold's training split.",
        ],
      },
      {
        heading: "2. ColumnTransformer for Mixed Tabular Data",
        paragraphs: [
          "`ColumnTransformer` applies distinct pipelines to numeric columns (imputation + scaling) and categorical columns (imputation + `OneHotEncoder(handle_unknown=\"ignore\")`) cleanly in one reproducible artifact.",
        ],
      },
    ],
    codeExample: {
      title: "Leak-Free ColumnTransformer + Pipeline with Cross-Validation",
      language: "python",
      code: `from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import cross_val_score

pre = ColumnTransformer([
    ("num", Pipeline([("imp", SimpleImputer()), ("sc", StandardScaler())]), ["age", "hours"]),
    ("cat", OneHotEncoder(handle_unknown="ignore"), ["level"]),
])

pipe = Pipeline([("pre", pre), ("clf", LogisticRegression())])
scores = cross_val_score(pipe, X_train, y_train, cv=5, scoring="roc_auc")`,
      explanation:
        "`cross_val_score` fits `pre` inside each training fold independently, guaranteeing zero leakage from validation folds.",
    },
    commonMistakes: [
      {
        mistake: "Calling `scaler.fit_transform(X)` before `train_test_split`.",
        correction:
          "Split data first, or put all transformers inside a `Pipeline` so `.fit()` only sees training data.",
      },
      {
        mistake: "Forgetting `handle_unknown=\"ignore\"` on `OneHotEncoder`.",
        correction:
          "Unseen categories in production or validation folds will raise a `ValueError` without `handle_unknown=\"ignore\"`.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is data leakage in machine learning?",
        answer: "When information from outside the training split (future targets or test-set statistics) leaks into model training, causing overly optimistic offline metrics that fail in production.",
      },
      {
        question: "Why serialize the entire `Pipeline` rather than just the model weights?",
        answer: "Production inference receives raw features and needs the exact fitted imputers, scalers, and encoders applied during training.",
      },
      {
        question: "What is the difference between `fit_transform` and `transform`?",
        answer: "`fit_transform` learns parameters from training data and transforms it; `transform` applies already-learned parameters to validation/test data.",
      },
    ],
    relatedConcepts: [
      "/concepts/machine-learning/linear-regression",
      "/concepts/machine-learning/regularization-ridge-lasso",
      "/concepts/machine-learning/gradient-boosted-trees",
    ],
    relatedCourse: {
      title: "Machine Learning Master Course",
      route: "/learning/machine-learning",
      description: "Build reproducible, leak-free ML workflows with Scikit-learn Pipelines.",
    },
    relatedModules: [
      { title: "ML Module 13: Feature Engineering & Preprocessing", route: "/learning/machine-learning/feature-engineering" },
      { title: "ML Module 14: ML Pipelines & Workflow Automation", route: "/learning/machine-learning/ml-pipelines" },
    ],
    practiceAction: { label: "Practice ML Engineering Interview", to: "/ai-interview" },
  },

  // ================= BLOCKCHAIN (5) =================
  {
    slug: "blockchain-consensus",
    category: "blockchain",
    subcategory: "Distributed Consensus",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Blockchain Consensus: Proof of Work, Proof of Stake & Merkle Trees",
    metaTitle: "Blockchain Consensus (PoW, PoS & Merkle Trees) | PrepSpaces Concepts",
    description:
      "Understand how decentralized blockchains achieve Byzantine fault tolerance without central coordinators using cryptographic hashes, Merkle trees, PoW, and PoS.",
    keywords: "Blockchain consensus, Proof of Work, Proof of Stake, Merkle Tree, Byzantine Fault Tolerance",
    directAnswer:
      "Blockchain consensus protocols coordinate untrusted nodes to agree on one canonical append-only ledger—using cryptographic hashes and Merkle trees for tamper detection alongside Sybil-resistance mechanisms like Proof of Work (hash computation) or Proof of Stake (economic stake + slashing).",
    sections: [
      {
        heading: "1. Hash Chains & Merkle Trees",
        paragraphs: [
          "Each block stores the cryptographic hash of the previous block header, forming an immutable chain where altering one historical transaction invalidates every subsequent block hash.",
          "Transactions inside a block are hashed pairwise into a Merkle Tree; light clients can verify transaction inclusion in `O(log N)` using a compact Merkle Proof without downloading the full block.",
        ],
      },
      {
        heading: "2. Proof of Work (PoW) vs Proof of Stake (PoS)",
        paragraphs: [
          "PoW (Bitcoin) secures consensus through energy-intensive SHA-256 puzzle mining and longest-chain/heaviest-work rules.",
          "PoS (Ethereum) replaces mining with staked validator collateral, providing economic finality and slashing penalties for equivocation at >99% lower energy cost.",
        ],
      },
    ],
    codeExample: {
      title: "Computing a Merkle Root Pairwise in JavaScript",
      language: "javascript",
      code: `import { createHash } from "node:crypto";

const sha256 = (data) => createHash("sha256").update(data).digest("hex");

function merkleRoot(leaves) {
  if (leaves.length === 0) return null;
  let level = leaves.map((tx) => sha256(tx));
  while (level.length > 1) {
    const next = [];
    for (let i = 0; i < level.length; i += 2) {
      const right = level[i + 1] ?? level[i];
      next.push(sha256(level[i] + right));
    }
    level = next;
  }
  return level[0];
}`,
      explanation:
        "Hashing pairs bottom-up yields a single 256-bit Merkle root stored in the block header; changing any leaf changes the root.",
    },
    commonMistakes: [
      {
        mistake: "Confusing encryption with cryptographic hashing.",
        correction:
          "Hashing (SHA-256, Keccak-256) is one-way and deterministic for integrity verification; encryption is reversible with a key.",
      },
      {
        mistake: "Assuming 1 block confirmation guarantees irreversibility in PoW.",
        correction:
          "Probabilistic PoW finality strengthens with depth (commonly 6 confirmations in Bitcoin) to guard against chain reorganizations.",
      },
    ],
    interviewQuestions: [
      {
        question: "What problem do PoW and PoS solve in permissionless networks?",
        answer: "Sybil resistance—making it prohibitively expensive for an attacker to spin up millions of fake identities to control consensus.",
      },
      {
        question: "Why do blockchains store a Merkle Root instead of a flat hash of all transactions?",
        answer: "Merkle trees allow O(log N) inclusion proofs (SPV/light clients) without downloading every transaction in the block.",
      },
      {
        question: "What is slashing in Proof of Stake?",
        answer: "Destroying part of a validator's staked collateral if they sign conflicting blocks or violate protocol safety rules.",
      },
    ],
    relatedConcepts: [
      "/concepts/blockchain/ethereum-evm-gas",
      "/concepts/blockchain/layer-2-rollups",
      "/concepts/system-design/raft-consensus",
    ],
    relatedCourse: {
      title: "Blockchain Technology & Decentralized Systems",
      route: "/learning/blockchain",
      description: "Master cryptography, consensus, EVM, Solidity, Layer 2 scaling, and DeFi.",
    },
    relatedModules: [
      { title: "Blockchain Module 2: Cryptography Fundamentals", route: "/learning/blockchain/cryptography" },
      { title: "Blockchain Module 3: Distributed Systems & Consensus", route: "/learning/blockchain/consensus" },
    ],
    practiceAction: { label: "Practice Blockchain Consensus Interview", to: "/ai-interview" },
  },
  {
    slug: "ethereum-evm-gas",
    category: "blockchain",
    subcategory: "Execution Engine",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Ethereum Virtual Machine (EVM), State Trie & Gas Mechanics",
    metaTitle: "Ethereum EVM Architecture & Gas Mechanics | PrepSpaces Concepts",
    description:
      "Learn how the Ethereum Virtual Machine (EVM) executes deterministic bytecode, meters computation with EIP-1559 gas, and manages world state.",
    keywords: "Ethereum Virtual Machine, EVM, EIP-1559 gas, Smart Contract State, Keccak-256, JSON-RPC",
    directAnswer:
      "The Ethereum Virtual Machine (EVM) is a deterministic, stack-based sandboxed runtime across all nodes that executes compiled smart contract bytecode, metering every opcode and storage write with EIP-1559 gas to prevent infinite loops and state bloat.",
    sections: [
      {
        heading: "1. EVM Memory Regions: Stack, Memory, Calldata & Storage",
        paragraphs: [
          "The EVM separates cheap transient regions—256-bit Stack, byte-array Memory, and immutable read-only `calldata`—from persistent contract `storage` (`SSTORE`/`SLOAD`), which is persisted in the global Merkle Patricia Trie and costs orders of magnitude more gas.",
        ],
      },
      {
        heading: "2. EIP-1559 Gas & Deterministic Execution",
        paragraphs: [
          "Under EIP-1559, transaction fees split into a protocol-burned `baseFee` (adjusted dynamically by block fullness) plus an optional `priorityFee` tip to validators, capped by `maxFeePerGas`.",
          "If execution exceeds `gasLimit`, all state changes revert atomically while spent gas is still consumed.",
        ],
      },
    ],
    codeExample: {
      title: "Estimating Gas & Sending an EIP-1559 Transaction via Viem",
      language: "typescript",
      code: `const hash = await walletClient.writeContract({
  address: courseRegistryAddress,
  abi: registryAbi,
  functionName: "enroll",
  args: [101n],
  maxFeePerGas: 30_000_000_000n,
  maxPriorityFeePerGas: 1_500_000_000n,
});`,
      explanation:
        "EIP-1559 fields cap total gas price while giving validators a predictable priority tip.",
    },
    commonMistakes: [
      {
        mistake: "Updating storage variables inside unbounded `for` loops.",
        correction:
          "Unbounded loops can exceed the block gas limit and permanently lock a contract (Gas DoS); use pull-based payouts or bounded batches.",
      },
      {
        mistake: "Expecting `tx.origin` to be a safe caller identity.",
        correction:
          "Use `msg.sender` for authorization; `tx.origin` enables phishing relay attacks through malicious intermediary contracts.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why does Ethereum require gas for computation?",
        answer: "Gas prevents halting-problem infinite loops and denial-of-service attacks by charging proportional fees for CPU, memory, and persistent storage.",
      },
      {
        question: "Why is `calldata` cheaper than `memory` for external function array/string parameters?",
        answer: "`calldata` is read-only and avoids copying input bytes into EVM memory.",
      },
      {
        question: "What happens to the EIP-1559 `baseFee`?",
        answer: "The `baseFee` is burned by the protocol rather than paid to validators.",
      },
    ],
    relatedConcepts: [
      "/concepts/blockchain/smart-contracts-solidity",
      "/concepts/blockchain/blockchain-consensus",
      "/concepts/blockchain/layer-2-rollups",
    ],
    relatedCourse: {
      title: "Blockchain Technology & Decentralized Systems",
      route: "/learning/blockchain",
      description: "Master EVM internals, Solidity, gas optimization, and Web3 libraries.",
    },
    relatedModules: [
      { title: "Blockchain Module 5: Ethereum Architecture", route: "/learning/blockchain/ethereum-evm" },
      { title: "Blockchain Module 6: Ethereum Virtual Machine (EVM)", route: "/learning/blockchain/evm-internals" },
    ],
    practiceAction: { label: "Practice Ethereum EVM Interview", to: "/ai-interview" },
  },
  {
    slug: "smart-contracts-solidity",
    category: "blockchain",
    subcategory: "Smart Contracts & Security",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Solidity Smart Contracts: Checks-Effects-Interactions & Reentrancy Defense",
    metaTitle: "Solidity Smart Contracts & Reentrancy Defense | PrepSpaces Concepts",
    description:
      "Write secure Solidity smart contracts using the Checks-Effects-Interactions pattern, ReentrancyGuard, ERC-20/ERC-721 standards, and Foundry testing.",
    keywords: "Solidity smart contracts, Reentrancy attack, Checks-Effects-Interactions, ERC-20, ERC-721",
    directAnswer:
      "Solidity smart contracts manage immutable on-chain state and value transfers; preventing critical exploits like reentrancy requires following the Checks-Effects-Interactions (CEI) pattern—validating conditions and updating state *before* making external calls—paired with `ReentrancyGuard`.",
    sections: [
      {
        heading: "1. Reentrancy & Checks-Effects-Interactions (CEI)",
        paragraphs: [
          "When a contract sends ETH via `call{value: amount}(\"\")`, the recipient's `receive()`/`fallback()` executes synchronously and can re-enter `withdraw()` before the balance is zeroed if state was updated after the external call.",
          "Always perform Checks (`require`), then Effects (`balances[msg.sender] = 0`), then Interactions (external `.call`), reinforced with OpenZeppelin `nonReentrant`.",
        ],
      },
      {
        heading: "2. ERC-20 & ERC-721 Token Standards",
        paragraphs: [
          "ERC-20 standardizes fungible tokens (`transfer`, `approve`, `transferFrom`), while ERC-721 standardizes unique non-fungible tokens (`ownerOf`, `safeTransferFrom`) across wallets and DeFi protocols.",
        ],
      },
    ],
    codeExample: {
      title: "Reentrancy-Safe Withdrawal Following Checks-Effects-Interactions",
      language: "solidity",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SafeVault {
    mapping(address => uint256) public balances;

    function withdraw() external {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "Insufficient balance"); // 1. Check

        balances[msg.sender] = 0;                  // 2. Effect (before external call)

        (bool ok, ) = msg.sender.call{value: amount}(""); // 3. Interaction
        require(ok, "ETH transfer failed");
    }
}`,
      explanation:
        "Zeroing `balances[msg.sender]` before `.call{value: amount}` ensures any recursive re-entry fails the `amount > 0` check.",
    },
    commonMistakes: [
      {
        mistake: "Updating `balances[msg.sender]` after `msg.sender.call{value: amount}(\"\")`.",
        correction:
          "Follow Checks-Effects-Interactions strictly and add `nonReentrant`.",
      },
      {
        mistake: "Ignoring return values of low-level `.call()` or non-standard ERC-20 `transfer()`.",
        correction:
          "Check `require(ok)` on `.call` and use OpenZeppelin `SafeERC20` for token transfers.",
      },
    ],
    interviewQuestions: [
      {
        question: "Explain the Checks-Effects-Interactions pattern.",
        answer: "Validate inputs/permissions first (Checks), update contract storage second (Effects), and invoke external addresses last (Interactions) to prevent reentrancy.",
      },
      {
        question: "Why did Solidity 0.8+ remove the need for `SafeMath` in most arithmetic?",
        answer: "Solidity 0.8+ includes built-in checked arithmetic that automatically reverts on integer overflow or underflow.",
      },
      {
        question: "What is the difference between `approve` + `transferFrom` and `transfer` in ERC-20?",
        answer: "`transfer` sends tokens directly from the caller; `approve` grants a spender contract allowance to pull tokens via `transferFrom`.",
      },
    ],
    relatedConcepts: [
      "/concepts/blockchain/ethereum-evm-gas",
      "/concepts/blockchain/defi-amm-oracles",
      "/concepts/blockchain/layer-2-rollups",
    ],
    relatedCourse: {
      title: "Blockchain Technology & Decentralized Systems",
      route: "/learning/blockchain",
      description: "Build, test, and audit Solidity smart contracts with Foundry and Hardhat.",
    },
    relatedModules: [
      { title: "Blockchain Module 7: Solidity Smart Contract Development", route: "/learning/blockchain/solidity" },
      { title: "Blockchain Module 10: Smart Contract Testing (Foundry/Hardhat)", route: "/learning/blockchain/testing" },
    ],
    practiceAction: { label: "Practice Solidity Security Interview", to: "/ai-interview" },
  },
  {
    slug: "layer-2-rollups",
    category: "blockchain",
    subcategory: "Scalability",
    difficulty: "Advanced",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Layer 2 Scaling: Optimistic Rollups vs ZK-Rollups & Data Availability",
    metaTitle: "Layer 2 Scaling: Optimistic vs ZK-Rollups | PrepSpaces Concepts",
    description:
      "Understand how Ethereum Layer 2 rollups scale throughput by executing off-chain and posting compressed calldata/blobs to L1 with fraud or validity proofs.",
    keywords: "Layer 2 Rollups, Optimistic Rollups, ZK-Rollups, Fraud Proofs, Validity Proofs, EIP-4844 Blobs",
    directAnswer:
      "Layer 2 rollups scale blockchain throughput by executing transactions off-chain, compressing batches onto Layer 1 (using EIP-4844 blobs) for data availability, and proving correctness via either challenge-window fraud proofs (Optimistic Rollups) or cryptographic validity proofs (ZK-Rollups).",
    sections: [
      {
        heading: "1. Optimistic Rollups vs ZK-Rollups",
        paragraphs: [
          "Optimistic Rollups (Arbitrum, Optimism) assume posted batches are valid unless challenged during a ~7-day dispute window via interactive fraud proofs, offering straightforward EVM equivalence.",
          "ZK-Rollups attach succinct cryptographic validity proofs (SNARKs/STARKs) verified immediately on L1, enabling fast withdrawals without a 7-day challenge wait.",
        ],
      },
      {
        heading: "2. Data Availability & EIP-4844 Blobs",
        paragraphs: [
          "Even if execution happens off-chain, transaction data must be published to L1 (or a DA layer) so anyone can reconstruct state and exit funds—EIP-4844 introduced ephemeral blob space that cut L2 fees dramatically.",
        ],
      },
    ],
    codeExample: {
      title: "Conceptual Rollup Settlement Lifecycle",
      language: "text",
      code: `Users -> L2 Sequencer (Fast Off-Chain Execution)
            │
            ▼
  Compressed Batch + EIP-4844 Blob posted to Ethereum L1
            │
     ┌──────┴──────────────────────┐
     ▼                             ▼
Optimistic Rollup              ZK-Rollup
(7-day Fraud Proof Window)     (Instant Validity Proof Verified on L1)`,
      explanation:
        "Both rollup families inherit Ethereum L1 data availability and settlement security while executing transactions off-chain.",
    },
    commonMistakes: [
      {
        mistake: "Confusing sidechains with true Layer 2 rollups.",
        correction:
          "Sidechains rely on their own independent validator set for security; rollups post data and settlement proofs to L1.",
      },
      {
        mistake: "Ignoring sequencer centralization risks.",
        correction:
          "Evaluate whether an L2 supports forced L1 transaction inclusion so users can exit even if the sequencer censors or goes offline.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why do Optimistic Rollups typically have a 7-day native bridge withdrawal delay?",
        answer: "L1 must wait for the fraud-proof challenge window to close so invalid state transitions can be disputed before finalizing withdrawals.",
      },
      {
        question: "How do ZK-Rollups achieve faster L1 finality?",
        answer: "Every state batch is accompanied by a mathematical validity proof verified directly by an L1 smart contract.",
      },
      {
        question: "What is Data Availability (DA)?",
        answer: "Ensuring all transaction data needed to reconstruct rollup state is publicly accessible so users can independently verify or force-exit.",
      },
    ],
    relatedConcepts: [
      "/concepts/blockchain/ethereum-evm-gas",
      "/concepts/blockchain/blockchain-consensus",
      "/concepts/blockchain/defi-amm-oracles",
    ],
    relatedCourse: {
      title: "Blockchain Technology & Decentralized Systems",
      route: "/learning/blockchain",
      description: "Explore Layer 2 rollups, IPFS, DeFi protocols, and scalable Web3 systems.",
    },
    relatedModules: [
      { title: "Blockchain Module 5: Ethereum Architecture", route: "/learning/blockchain/ethereum-evm" },
      { title: "Blockchain Module 14: Full-Stack DApp Development", route: "/learning/blockchain/dapp-development" },
    ],
    practiceAction: { label: "Practice Layer 2 Scaling Interview", to: "/ai-interview" },
  },
  {
    slug: "defi-amm-oracles",
    category: "blockchain",
    subcategory: "DeFi & Oracles",
    difficulty: "Advanced",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "DeFi Automated Market Makers (AMM x*y=k) & Decentralized Oracles",
    metaTitle: "DeFi AMMs (x*y=k) & Chainlink Oracles | PrepSpaces Concepts",
    description:
      "Understand constant-product Automated Market Makers (x*y=k), slippage, impermanent loss, flash loans, and tamper-resistant Chainlink price oracles.",
    keywords: "DeFi AMM, Constant Product x*y=k, Impermanent Loss, Flash Loans, Chainlink Oracles, Oracle Manipulation",
    directAnswer:
      "Automated Market Makers (AMMs) replace order books with on-chain liquidity pools governed by pricing curves like `x * y = k`, while decentralized oracles (such as Chainlink) aggregate off-chain market prices securely on-chain to prevent single-block spot-price manipulation.",
    sections: [
      {
        heading: "1. Constant Product AMM (x * y = k) & Impermanent Loss",
        paragraphs: [
          "In a constant-product pool (`x * y = k`), buying token X reduces `x` and increases `y`, shifting the marginal price along a hyperbola—creating price slippage on large trades relative to pool depth.",
          "Liquidity Providers (LPs) earn swap fees but experience impermanent loss when relative token prices diverge compared to simply holding both assets.",
        ],
      },
      {
        heading: "2. Flash Loans & Oracle Manipulation Defense",
        paragraphs: [
          "Flash loans allow borrowing millions in uncollateralized liquidity as long as principal + fee are repaid within the same atomic transaction—enabling arbitrage and collateral swaps, but also spot-price manipulation attacks against protocols that read raw AMM pool balances instead of decentralized oracles or TWAPs.",
        ],
      },
    ],
    codeExample: {
      title: "Constant-Product Swap Output Formula (With 0.3% Fee)",
      language: "solidity",
      code: `function getAmountOut(
    uint256 amountIn,
    uint256 reserveIn,
    uint256 reserveOut
) public pure returns (uint256 amountOut) {
    uint256 amountInWithFee = amountIn * 997;
    uint256 numerator = amountInWithFee * reserveOut;
    uint256 denominator = (reserveIn * 1000) + amountInWithFee;
    amountOut = numerator / denominator;
}`,
      explanation:
        "Applying the 0.3% fee (`997/1000`) and solving `(reserveIn + amountInWithFee) * (reserveOut - amountOut) = reserveIn * reserveOut` preserves the invariant.",
    },
    commonMistakes: [
      {
        mistake: "Using an AMM pool's instantaneous spot `reserve0 / reserve1` as a lending collateral oracle.",
        correction:
          "Flash loans can manipulate single-block AMM reserves; use decentralized oracle networks (Chainlink) or multi-block TWAPs.",
      },
      {
        mistake: "Executing on-chain swaps with `amountOutMin = 0`.",
        correction:
          "Zero slippage protection exposes users to MEV sandwich attacks; compute a strict `amountOutMin` and `deadline`.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why are flash loans safe for the lending pool?",
        answer: "Because EVM transactions are atomic—if the borrower fails to repay principal plus fee by the end of the transaction, the entire loan reverts as if it never happened.",
      },
      {
        question: "What causes impermanent loss for AMM Liquidity Providers?",
        answer: "Arbitrageurs rebalance the pool when external prices move, leaving the LP with more of the depreciating token and less of the appreciating token compared to holding.",
      },
      {
        question: "How do MEV sandwich attacks exploit swaps?",
        answer: "A searcher front-runs a pending swap to push the price up, lets the victim buy at worst slippage, and back-runs to sell at a profit.",
      },
    ],
    relatedConcepts: [
      "/concepts/blockchain/smart-contracts-solidity",
      "/concepts/blockchain/ethereum-evm-gas",
      "/concepts/blockchain/layer-2-rollups",
    ],
    relatedCourse: {
      title: "Blockchain Technology & Decentralized Systems",
      route: "/learning/blockchain",
      description: "Build DeFi protocols, token standards, and oracle-integrated smart contracts.",
    },
    relatedModules: [
      { title: "Blockchain Module 12: ERC Token Standards", route: "/learning/blockchain/tokens" },
      { title: "Blockchain Module 14: Full-Stack DApp Development", route: "/learning/blockchain/dapp-development" },
    ],
    practiceAction: { label: "Practice DeFi & Smart Contract Interview", to: "/ai-interview" },
  },
];
