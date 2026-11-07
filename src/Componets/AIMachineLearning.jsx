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
import { AI_ML_CURRICULUM_SECTIONS } from "./aiMLCurriculumData";
import {
  PolynomialOverfittingTool,
  SigmoidThresholdSimulator,
  ConfusionMatrixMetricCalculator,
  KMeansClusterSimulator,
  PCADimensionProjectionTool
} from "./AIMLDiagrams";

export default function AIMachineLearning() {

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'interactive-tools' | 'labs' | 'project' | 'interview' | 'quiz' | 'resources'

  // Section explorer state
  const [selectedSectionIdx, setSelectedSectionIdx] = useState(0);
  const [selectedPartFilter, setSelectedPartFilter] = useState("all");
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  const activeSection = AI_ML_CURRICULUM_SECTIONS[selectedSectionIdx] || AI_ML_CURRICULUM_SECTIONS[0];

  const filteredSections = useMemo(() => {
    if (selectedPartFilter === "all") return AI_ML_CURRICULUM_SECTIONS;
    const partNum = parseInt(selectedPartFilter, 10);
    return AI_ML_CURRICULUM_SECTIONS.filter((s) => s.partNum === partNum);
  }, [selectedPartFilter]);

  const handleCopyCode = (codeText, idx) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleNextSection = () => {
    if (selectedSectionIdx < AI_ML_CURRICULUM_SECTIONS.length - 1) {
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
  // PRACTICAL ML LABS (SECTION 34 - LABS 01 TO 10)
  // ---------------------------------------------------------------------------
  const [activeLabId, setActiveLabId] = useState("lab-1");
  const [copiedLabCode, setCopiedLabCode] = useState(false);

  const practicalLabs = [
    {
      id: "lab-1",
      number: "01",
      title: "ML Problem Formulation & Scoping",
      duration: "1.5 hours",
      domain: "Foundations",
      objective: "Learn how to convert open-ended business objectives into well-posed Machine Learning tasks.",
      tasks: [
        "Analyze 15 real-world engineering and business problems.",
        "Categorize each as supervised (regression vs classification) or unsupervised (clustering).",
        "Define target variables y and relevant input feature vectors X.",
        "Establish baseline metrics and evaluation split strategies.",
      ],
      code: `# Lab 01: Machine Learning Problem Formulation
problems = [
    {"problem": "Predict housing sale price", "paradigm": "Supervised", "type": "Regression", "metric": "RMSE / R2"},
    {"problem": "Identify spam emails", "paradigm": "Supervised", "type": "Classification", "metric": "Precision / F1"},
    {"problem": "Discover customer archetypes", "paradigm": "Unsupervised", "type": "Clustering", "metric": "Silhouette / Inertia"},
    {"problem": "Flag fraudulent card charges", "paradigm": "Supervised", "type": "Imbalanced Classification", "metric": "PR-AUC / Recall"}
]

for p in problems:
    print(f"Task: {p['problem']:<32} | Paradigm: {p['paradigm']:<12} | Type: {p['type']:<22} | Primary Metric: {p['metric']}")`
    },
    {
      id: "lab-2",
      number: "02",
      title: "Linear & Polynomial Regression",
      duration: "2 hours",
      domain: "Supervised Learning",
      objective: "Train linear and non-linear polynomial regressors and quantify residuals using MAE, MSE, and R2.",
      tasks: [
        "Synthesize regression data with non-linear polynomial relations.",
        "Fit Scikit-learn LinearRegression and inspect coefficients and intercept.",
        "Generate polynomial feature degrees using PolynomialFeatures.",
        "Plot fitted curves against scatter data and compute R2 scores.",
      ],
      code: `# Lab 02: Linear & Polynomial Regression
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score

rng = np.random.default_rng(42)
X = rng.uniform(-3, 3, (60, 1))
y = 0.5 * X**2 - X + 2 + rng.normal(0, 0.5, (60, 1))

# Fit Linear model
lin_reg = LinearRegression().fit(X, y)
y_lin_pred = lin_reg.predict(X)

# Fit Quadratic model
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)
poly_reg = LinearRegression().fit(X_poly, y)
y_poly_pred = poly_reg.predict(X_poly)

print(f"Linear Fit R2:    {r2_score(y, y_lin_pred):.4f} (MSE: {mean_squared_error(y, y_lin_pred):.4f})")
print(f"Polynomial Fit R2:{r2_score(y, y_poly_pred):.4f} (MSE: {mean_squared_error(y, y_poly_pred):.4f})")`
    },
    {
      id: "lab-3",
      number: "03",
      title: "Regression Regularization (Ridge, Lasso & ElasticNet)",
      duration: "2 hours",
      domain: "Supervised Learning",
      objective: "Apply L1 and L2 penalties to constrain model weights and prevent overfitting on collinear data.",
      tasks: [
        "Synthesize high-dimensional collinear datasets (n < p).",
        "Train Ridge regression (L2) and observe weight shrinkage.",
        "Train Lasso regression (L1) and observe automatic feature selection (sparse coefficients).",
        "Train ElasticNet and evaluate test errors across alpha ranges.",
      ],
      code: `# Lab 03: Ridge, Lasso & ElasticNet
from sklearn.linear_model import Ridge, Lasso, ElasticNet
from sklearn.datasets import make_regression

X, y = make_regression(n_samples=100, n_features=20, n_informative=5, noise=0.8, random_state=42)

ridge = Ridge(alpha=10.0).fit(X, y)
lasso = Lasso(alpha=1.0).fit(X, y)
elastic = ElasticNet(alpha=1.0, l1_ratio=0.5).fit(X, y)

print("Lasso Zeroed Coefficients (Feature Selection):", (lasso.coef_ == 0).sum(), "out of 20")
print("Ridge Min/Max Weights:", f"{ridge.coef_.min():.3f} to {ridge.coef_.max():.3f}")`
    },
    {
      id: "lab-4",
      number: "04",
      title: "Logistic Regression & Decision Thresholds",
      duration: "2 hours",
      domain: "Classification",
      objective: "Build probabilistic binary classifiers, analyze sigmoid log-odds, and shift decision thresholds.",
      tasks: [
        "Train LogisticRegression with cross-entropy loss.",
        "Extract predict_proba() continuous class confidence scores.",
        "Sweep threshold tau from 0.1 to 0.9 and generate precision-recall curves.",
        "Evaluate the confusion matrix for different threshold cutoffs.",
      ],
      code: `# Lab 04: Logistic Regression & Threshold Tuning
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix

X = np.array([[1.0], [1.5], [2.0], [2.5], [3.5], [4.0], [4.5], [5.0]])
y = np.array([0, 0, 0, 0, 1, 1, 1, 1])

clf = LogisticRegression().fit(X, y)
probs = clf.predict_proba(X)[:, 1]

for tau in [0.3, 0.5, 0.7]:
    preds = (probs >= tau).astype(int)
    print(f"Threshold tau={tau:.1f} -> Predictions: {preds.tolist()}")`
    },
    {
      id: "lab-5",
      number: "05",
      title: "Benchmark: KNN, Trees, Forests & SVM",
      duration: "2.5 hours",
      domain: "Classification",
      objective: "Compare classification algorithms on boundary flexibility, training time, and test accuracy.",
      tasks: [
        "Load multi-class classification benchmark dataset.",
        "Train KNeighborsClassifier, DecisionTreeClassifier, RandomForestClassifier, and SVC.",
        "Compute classification reports including Precision, Recall, and Macro-F1.",
        "Explain structural trade-offs between linear SVM and ensemble forests.",
      ],
      code: `# Lab 05: Classification Benchmark
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC

data = load_wine()
X_tr, X_te, y_tr, y_te = train_test_split(data.data, data.target, test_size=0.3, random_state=42)

scaler = StandardScaler()
X_tr_s = scaler.fit_transform(X_tr)
X_te_s = scaler.transform(X_te)

models = {
    "KNN (k=5)": KNeighborsClassifier(5),
    "Decision Tree": DecisionTreeClassifier(max_depth=4, random_state=42),
    "Random Forest": RandomForestClassifier(n_estimators=100, random_state=42),
    "SVM (RBF)": SVC(kernel="rbf")
}

for name, m in models.items():
    m.fit(X_tr_s, y_tr)
    print(f"{name:<16} Test Accuracy: {m.score(X_te_s, y_te):.4f}")`
    },
    {
      id: "lab-6",
      number: "06",
      title: "K-Means Clustering & Silhouette Analysis",
      duration: "2 hours",
      domain: "Unsupervised Learning",
      objective: "Cluster multi-feature customer groups, plot the Elbow curve, and compute silhouette scores.",
      tasks: [
        "Generate unlabelled multi-feature customer engagement datasets.",
        "Run K-Means for k in 2 to 8 and record inertia (WCSS).",
        "Compute silhouette_score to identify the mathematically optimal cluster count.",
        "Interpret profile averages across discovered customer segments.",
      ],
      code: `# Lab 06: K-Means Clustering & Silhouette
from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

X, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.8, random_state=42)

print("k | Inertia (WCSS) | Silhouette Score")
print("-" * 35)
for k in range(2, 7):
    km = KMeans(n_clusters=k, n_init=10, random_state=42).fit(X)
    sil = silhouette_score(X, km.labels_)
    print(f"{k} | {km.inertia_:<14.1f} | {sil:.4f}")`
    },
    {
      id: "lab-7",
      number: "07",
      title: "Hierarchical Clustering & DBSCAN",
      duration: "2 hours",
      domain: "Unsupervised Learning",
      objective: "Cluster non-spherical geometries and isolate noise points using density-based DBSCAN.",
      tasks: [
        "Create complex intertwined moon geometries (make_moons).",
        "Apply AgglomerativeClustering with Ward linkage and examine dendrograms.",
        "Apply DBSCAN with epsilon and min_samples parameters.",
        "Count core points, border points, and unclustered noise (-1).",
      ],
      code: `# Lab 07: DBSCAN Density Clustering
from sklearn.datasets import make_moons
from sklearn.cluster import DBSCAN, KMeans

X, _ = make_moons(n_samples=250, noise=0.08, random_state=42)

db = DBSCAN(eps=0.2, min_samples=5).fit(X)
km = KMeans(n_clusters=2, random_state=42).fit(X)

noise_count = (db.labels_ == -1).sum()
print("DBSCAN Cluster Count:", len(set(db.labels_)) - (1 if -1 in db.labels_ else 0))
print(f"Noise Outliers Detected: {noise_count} points")`
    },
    {
      id: "lab-8",
      number: "08",
      title: "Feature Engineering & ColumnTransformer",
      duration: "2 hours",
      domain: "Applied ML",
      objective: "Impute missing values, scale numeric columns, and one-hot encode categoricals without data leakage.",
      tasks: [
        "Create tabular data with numeric and categorical fields containing null values.",
        "Construct ColumnTransformer pairing SimpleImputer + StandardScaler with OneHotEncoder.",
        "Fit transformer ONLY on training split and transform test split.",
        "Verify zero target leakage or index misalignment.",
      ],
      code: `# Lab 08: Feature Engineering Pipeline
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder

df = pd.DataFrame({
    "age": [25, 45, None, 35],
    "salary": [50000, 95000, 80000, None],
    "city": ["NYC", "London", "NYC", "Paris"]
})

ct = ColumnTransformer([
    ("num", Pipeline([("imp", SimpleImputer(strategy="median")), ("scale", StandardScaler())]), ["age", "salary"]),
    ("cat", OneHotEncoder(sparse_output=False, handle_unknown="ignore"), ["city"])
])
transformed = ct.fit_transform(df)
print("Transformed Feature Matrix Shape:", transformed.shape)`
    },
    {
      id: "lab-9",
      number: "09",
      title: "Cross-Validation & Hyperparameter Tuning",
      duration: "2 hours",
      domain: "Optimization",
      objective: "Tune estimator hyperparameters using GridSearchCV and RandomizedSearchCV with StratifiedKFold.",
      tasks: [
        "Configure StratifiedKFold cross-validation (k=5).",
        "Define param_grid for Random Forest (n_estimators, max_depth, min_samples_split).",
        "Execute GridSearchCV and extract best_params_ and best_score_.",
        "Confirm generalizability on pristine held-out test data.",
      ],
      code: `# Lab 09: GridSearchCV Tuning
from sklearn.datasets import load_breast_cancer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, StratifiedKFold

X, y = load_breast_cancer(return_X_y=True)

param_grid = {
    "n_estimators": [50, 100],
    "max_depth": [4, 8, None],
    "min_samples_split": [2, 5]
}

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=cv, scoring="roc_auc")
grid.fit(X, y)

print("Best Parameters:", grid.best_params_)
print(f"Best CV ROC-AUC: {grid.best_score_:.4f}")`
    },
    {
      id: "lab-10",
      number: "10",
      title: "End-to-End Pipeline & Model Persistence",
      duration: "2.5 hours",
      domain: "Production ML",
      objective: "Package preprocessing, feature engineering, and tuned model into a Scikit-learn Pipeline and save with Joblib.",
      tasks: [
        "Combine ColumnTransformer and final estimator into an atomic Pipeline.",
        "Serialize pipeline artifacts to disk using joblib.dump().",
        "Reload pickled pipeline in a simulated inference server.",
        "Execute end-to-end inference on raw JSON student records.",
      ],
      code: `# Lab 10: Complete Pipeline Persistence
import joblib
import pandas as pd
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler

pipeline = Pipeline([
    ("scaler", StandardScaler()),
    ("classifier", RandomForestClassifier(n_estimators=50, random_state=42))
])

# Simulate training and saving
X_dummy = [[1, 2], [3, 4], [5, 6], [7, 8]]
y_dummy = [0, 0, 1, 1]
pipeline.fit(X_dummy, y_dummy)

joblib.dump(pipeline, "final_model_pipeline.joblib")
loaded = joblib.load("final_model_pipeline.joblib")
print("Reloaded Model Inference:", loaded.predict([[2.5, 3.5]]))`
    }
  ];

  const activeLab = practicalLabs.find((l) => l.id === activeLabId) || practicalLabs[0];

  const handleCopyLabCode = () => {
    navigator.clipboard.writeText(activeLab.code);
    setCopiedLabCode(true);
    setTimeout(() => setCopiedLabCode(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // SECTION 35 - CAPSTONE PROJECT CHECKLIST & CODE
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    step1: true,
    step2: true,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
    step10: false
  });
  const [copiedProjectCode, setCopiedProjectCode] = useState(false);

  const toggleProjectCheck = (key) => {
    setProjectChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const projectCodeFull = `# PrepSpaces ML Masterclass: Student Performance Prediction & Learning Behaviour Segmentation
# Comprehensive end-to-end script covering data generation, regression, classification, clustering, and persistence.

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import joblib

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.cluster import KMeans
from sklearn.metrics import (
    mean_absolute_error,
    root_mean_squared_error,
    r2_score,
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    silhouette_score
)

# -----------------------------------------------------------------------------
# STEP 1: GENERATE SYNTHETIC STUDENT DATASET
# -----------------------------------------------------------------------------
rng = np.random.default_rng(42)
n = 1200

study_hours = np.clip(rng.normal(6, 2, n), 0, 15)
practice_questions = rng.integers(5, 101, n)
attendance = np.clip(rng.normal(78, 12, n), 30, 100)
previous_score = np.clip(rng.normal(65, 15, n), 0, 100)
course_track = rng.choice(["Python", "AI", "Data Science"], size=n)

track_effect = pd.Series(course_track).map({"Python": 2, "AI": 4, "Data Science": 1}).to_numpy()

# Regression target: Continuous Exam Score
final_score = (
    5.0
    + 0.40 * previous_score
    + 1.80 * study_hours
    + 0.10 * attendance
    + 0.10 * practice_questions
    + track_effect
    + rng.normal(0, 7, n)
)
final_score = np.clip(final_score, 0, 100)

# Classification target: Binary Support Needed Flag
needs_support = (final_score < 60).astype(int)

df = pd.DataFrame({
    "study_hours": study_hours,
    "practice_questions": practice_questions,
    "attendance": attendance,
    "previous_score": previous_score,
    "course_track": course_track,
    "final_score": final_score,
    "needs_support": needs_support
})

# Introduce synthetic missing values for realistic preprocessing practice
df.loc[rng.choice(n, 30, replace=False), "study_hours"] = np.nan
df.loc[rng.choice(n, 25, replace=False), "attendance"] = np.nan
df.to_csv("student_dataset.csv", index=False)
print("Step 1 Complete: Generated student_dataset.csv with", len(df), "records.")

# -----------------------------------------------------------------------------
# STEP 2 & 3: SPLIT DATA & BUILD COLUMN TRANSFORMER PIPELINE
# -----------------------------------------------------------------------------
X = df[["study_hours", "practice_questions", "attendance", "previous_score", "course_track"]]
y_reg = df["final_score"]
y_cls = df["needs_support"]

X_train, X_test, y_reg_train, y_reg_test, y_cls_train, y_cls_test = train_test_split(
    X, y_reg, y_cls, test_size=0.20, random_state=42, stratify=y_cls
)

numeric_features = ["study_hours", "practice_questions", "attendance", "previous_score"]
categorical_features = ["course_track"]

num_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler())
])

cat_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("onehot", OneHotEncoder(handle_unknown="ignore", sparse_output=False))
])

preprocessor = ColumnTransformer(transformers=[
    ("num", num_pipeline, numeric_features),
    ("cat", cat_pipeline, categorical_features)
])

# -----------------------------------------------------------------------------
# STEP 4: TRAIN REGRESSION MODELS (Linear Regression vs Random Forest)
# -----------------------------------------------------------------------------
regression_models = {
    "Linear Regression": LinearRegression(),
    "Random Forest Regressor": RandomForestRegressor(n_estimators=100, max_depth=8, random_state=42)
}

trained_regressors = {}
for name, algo in regression_models.items():
    pipe = Pipeline([("preprocessor", preprocessor), ("regressor", algo)])
    pipe.fit(X_train, y_reg_train)
    preds = pipe.predict(X_test)
    trained_regressors[name] = pipe
    print(f"\n[Regression] {name}:")
    print(f"  MAE:  {mean_absolute_error(y_reg_test, preds):.3f}")
    print(f"  RMSE: {root_mean_squared_error(y_reg_test, preds):.3f}")
    print(f"  R2:   {r2_score(y_reg_test, preds):.3f}")

# -----------------------------------------------------------------------------
# STEP 5: TRAIN CLASSIFICATION MODELS (Logistic Regression vs Random Forest)
# -----------------------------------------------------------------------------
classification_models = {
    "Logistic Regression": LogisticRegression(max_iter=1000, class_weight="balanced"),
    "Random Forest Classifier": RandomForestClassifier(n_estimators=150, max_depth=8, class_weight="balanced", random_state=42)
}

trained_classifiers = {}
for name, algo in classification_models.items():
    pipe = Pipeline([("preprocessor", preprocessor), ("classifier", algo)])
    pipe.fit(X_train, y_cls_train)
    preds = pipe.predict(X_test)
    trained_classifiers[name] = pipe
    print(f"\n[Classification] {name}:")
    print(f"  Accuracy:  {accuracy_score(y_cls_test, preds):.4f}")
    print(f"  Precision: {precision_score(y_cls_test, preds, zero_division=0):.4f}")
    print(f"  Recall:    {recall_score(y_cls_test, preds, zero_division=0):.4f}")
    print(f"  F1-Score:  {f1_score(y_cls_test, preds, zero_division=0):.4f}")

# -----------------------------------------------------------------------------
# STEP 6: PERFORM UNSUPERVISED LEARNER CLUSTERING (K-Means k=3)
# -----------------------------------------------------------------------------
engagement_features = ["study_hours", "practice_questions", "attendance"]
engagement_data = df[engagement_features]

clustering_pipeline = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler()),
    ("kmeans", KMeans(n_clusters=3, n_init=10, random_state=42))
])

cluster_labels = clustering_pipeline.fit_predict(engagement_data)
processed_features = clustering_pipeline.named_steps["scaler"].transform(
    clustering_pipeline.named_steps["imputer"].transform(engagement_data)
)
sil_score = silhouette_score(processed_features, cluster_labels)
df["learning_segment"] = cluster_labels
print(f"\n[Clustering] K-Means (k=3) Silhouette Score: {sil_score:.4f}")
print("Segment Profiles (Feature Means):")
print(df.groupby("learning_segment")[engagement_features].mean())

# -----------------------------------------------------------------------------
# STEP 7 & 8: SAVE MODELS WITH JOBLIB
# -----------------------------------------------------------------------------
joblib.dump(trained_regressors["Random Forest Regressor"], "student_score_model.joblib")
joblib.dump(trained_classifiers["Random Forest Classifier"], "student_support_model.joblib")
joblib.dump(clustering_pipeline, "student_clustering_model.joblib")
print("\nAll models serialized and saved successfully to disk.")

# -----------------------------------------------------------------------------
# STEP 9: LOAD AND PREDICT ON NEW UNSEEN OBSERVATION
# -----------------------------------------------------------------------------
loaded_score_model = joblib.load("student_score_model.joblib")
new_student = pd.DataFrame([{
    "study_hours": 8.5,
    "practice_questions": 65,
    "attendance": 92.0,
    "previous_score": 78.0,
    "course_track": "AI"
}])

pred_score = loaded_score_model.predict(new_student)
print(f"\nInference on new student: Estimated Exam Score = {pred_score[0]:.2f}/100")
`;

  // ---------------------------------------------------------------------------
  // SECTION 36.1 - MULTIPLE CHOICE QUIZ (15 QUESTIONS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "Which learning paradigm uses labelled training examples?",
      options: ["Unsupervised learning", "Supervised learning", "Clustering", "Dimensionality reduction"],
      answer: 1,
      explanation: "Supervised learning relies on paired input features and known ground-truth labels (X, y) to optimize parameters."
    },
    {
      id: 2,
      question: "Predicting a house's selling price is which type of task?",
      options: ["Classification", "Clustering", "Regression", "Anomaly detection"],
      answer: 2,
      explanation: "Predicting a continuous numerical output (e.g., currency, temperature, score) is a regression task."
    },
    {
      id: 3,
      question: "What does the target variable represent?",
      options: ["A feature transformation", "The value a model is trained to predict", "A hyperparameter", "A clustering centroid"],
      answer: 1,
      explanation: "The target (commonly denoted y) is the dependent variable or outcome that the machine learning algorithm learns to predict."
    },
    {
      id: 4,
      question: "What is the purpose of a validation dataset?",
      options: ["Train all model parameters", "Tune and select model configurations", "Replace the training dataset", "Store the final model"],
      answer: 1,
      explanation: "A validation set evaluates model performance during training to tune hyperparameters and choose between architectures without touching the test set."
    },
    {
      id: 5,
      question: "Which loss is commonly used for ordinary linear regression?",
      options: ["Cross-entropy only", "Mean squared error", "Cosine similarity", "Gini impurity"],
      answer: 1,
      explanation: "Ordinary Least Squares (OLS) minimizes Mean Squared Error (MSE), penalizing large residuals quadratically."
    },
    {
      id: 6,
      question: "What does logistic regression estimate in binary classification?",
      options: ["Only a continuous house price", "A class probability", "A K-Means centroid", "A matrix inverse"],
      answer: 1,
      explanation: "Logistic regression outputs a probability P(y=1|x) through the sigmoid non-linear activation function."
    },
    {
      id: 7,
      question: "What does KNN use to make a prediction?",
      options: ["Only model weights", "Nearby training observations", "Matrix determinants", "Random centroids"],
      answer: 1,
      explanation: "K-Nearest Neighbors is a non-parametric instance-based algorithm that aggregates labels from the K closest neighbors in feature space."
    },
    {
      id: 8,
      question: "Which algorithm creates a collection of decision trees?",
      options: ["Linear regression", "Random Forest", "Naive Bayes", "PCA"],
      answer: 1,
      explanation: "Random Forest is an ensemble bagging method that builds an ensemble of decorrelated decision trees using bootstrap aggregation."
    },
    {
      id: 9,
      question: "Which metric measures the fraction of predicted positive cases that are truly positive?",
      options: ["Recall", "Precision", "Specificity", "R-squared"],
      answer: 1,
      explanation: "Precision is defined as TP / (TP + FP), measuring the exactness or reliability of positive predictions."
    },
    {
      id: 10,
      question: "Which metric is particularly important when missing positive cases is costly?",
      options: ["Recall", "MAE", "Inertia", "R-squared"],
      answer: 0,
      explanation: "Recall (TP / (TP + FN)) measures completeness; in cancer diagnosis or fraud detection, failing to flag a positive case (FN) is disastrous."
    },
    {
      id: 11,
      question: "Which algorithm groups observations using K centroids?",
      options: ["Logistic regression", "SVM", "K-Means", "Naive Bayes"],
      answer: 2,
      explanation: "K-Means iteratively partitions observations into K clusters by minimizing the within-cluster sum of squares (WCSS) to K centroids."
    },
    {
      id: 12,
      question: "What does DBSCAN identify in addition to clusters?",
      options: ["Regression residuals", "Noise observations", "Class probabilities", "Linear coefficients"],
      answer: 1,
      explanation: "DBSCAN classifies points as core, border, or noise (-1), isolating isolated low-density points as outliers."
    },
    {
      id: 13,
      question: "What is the purpose of StandardScaler?",
      options: ["Create target labels", "Standardize numerical features", "Perform clustering", "Train a Random Forest"],
      answer: 1,
      explanation: "StandardScaler transforms numeric variables to zero mean and unit variance (z = (x - mean) / std)."
    },
    {
      id: 14,
      question: "What is data leakage?",
      options: ["Removing duplicate data", "Using unavailable or evaluation-related information during model learning", "Splitting a dataset correctly", "Reducing the number of features"],
      answer: 1,
      explanation: "Data leakage happens when information from outside the training split (e.g. test set statistics or future target signals) leaks into the training pipeline."
    },
    {
      id: 15,
      question: "What is the purpose of cross-validation?",
      options: ["Create more labels", "Estimate model performance across multiple data splits", "Eliminate every model error", "Replace all evaluation metrics"],
      answer: 1,
      explanation: "K-Fold cross-validation provides an unbiased, low-variance estimate of generalization error by training and evaluating across K distinct validation folds."
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
  // SECTION 36.3 - TECHNICAL INTERVIEW PREPARATION (40+ QUESTIONS & ANSWERS)
  // ---------------------------------------------------------------------------
  const [activeInterviewCategory, setActiveInterviewCategory] = useState("all");

  const interviewQAs = [
    {
      category: "Fundamentals",
      question: "What is the difference between supervised, unsupervised, and reinforcement learning?",
      answer: "Supervised learning trains on paired inputs and targets (X, y) to learn an input-output mapping for regression or classification. Unsupervised learning takes only unlabeled inputs X to discover underlying patterns, geometries, or clusters. Reinforcement learning trains autonomous agents to maximize cumulative scalar rewards through environmental interaction, trial-and-error, and sequential policy updates."
    },
    {
      category: "Fundamentals",
      question: "Explain the Bias-Variance Tradeoff and how it relates to overfitting.",
      answer: "Bias is the error from overly simplistic assumptions (underfitting, model fails to capture true complexity). Variance is error from sensitivity to small fluctuations in training data (overfitting, model memorizes random noise). Total Error = Bias^2 + Variance + Irreducible Error. As model capacity grows, bias decreases while variance increases; the goal of regularization and validation is finding the sweet spot that minimizes total expected test error."
    },
    {
      category: "Fundamentals",
      question: "What is data leakage and how do you guarantee prevention in production?",
      answer: "Data leakage occurs when target information or unseen evaluation data is introduced during training, giving artificially high performance that collapses in production. Examples include scaling features before train-test split, calculating global mean imputation across all folds, or incorporating temporal features from the future. Prevention: strictly isolate test sets first, use Scikit-learn Pipeline objects to encapsulate transformers with estimators, and fit transformations only on training folds."
    },
    {
      category: "Regression",
      question: "What is Ordinary Least Squares (OLS) and why do we prefer Gradient Descent for large datasets?",
      answer: "OLS solves the normal equation beta = (X^T X)^(-1) X^T y analytically, minimizing the sum of squared residuals. However, matrix inversion has computational complexity O(p^3) and requires loading the full dataset into memory. Gradient Descent (and SGD/Mini-batch) iteratively steps toward minimum loss with O(n*p) per epoch, scaling seamlessly to millions of rows and distributed streaming architectures."
    },
    {
      category: "Regression",
      question: "Compare Ridge (L2) and Lasso (L1) regularization. When do you choose one over the other?",
      answer: "Ridge adds sum(w_j^2) penalty to MSE. Its diamond/spherical contour shrinks coefficients toward zero asymptotically but never sets them exactly to zero, excelling when multicollinear predictors share predictive power. Lasso adds sum(|w_j|) penalty. Its sharp cornered loss contours force less informative feature weights to exactly zero, performing automated sparse feature selection. Use Lasso when feature selection is required; use Ridge or ElasticNet when features are heavily correlated."
    },
    {
      category: "Regression",
      question: "What is R-squared (Coefficient of Determination) and what are its critical limitations?",
      answer: "R2 = 1 - (SS_res / SS_tot), measuring the proportion of target variance explained by the model compared to predicting the simple mean y_bar. Limitation: R2 monotonically increases (or remains constant) whenever ANY new feature is added, even pure random noise. To mitigate this, we inspect Adjusted R2 (which penalizes additional feature degrees of freedom) or rely directly on RMSE and cross-validated test MAE."
    },
    {
      category: "Classification",
      question: "Why can't we use standard Linear Regression with MSE for binary classification?",
      answer: "Linear regression outputs unbounded real numbers (-inf to +inf) rather than probabilities bounded in [0, 1]. Furthermore, extreme outliers cause the regression line to shift dramatically, damaging decision boundaries. Mathematically, applying MSE loss to a sigmoid activation produces a non-convex loss surface plagued with local minima; Binary Cross-Entropy (Log-Loss) guarantees convexity and steep gradients for erroneous predictions."
    },
    {
      category: "Classification",
      question: "Explain the mathematics and difference between Precision, Recall, and the F1-Score.",
      answer: "Precision = TP / (TP + FP) measures accuracy of positive predictions (minimizing false alarms). Recall (Sensitivity) = TP / (TP + FN) measures coverage of actual positive instances (minimizing missed detections). F1-Score is their harmonic mean: 2 * (P * R) / (P + R). The harmonic mean severely penalizes extreme divergence between precision and recall, ensuring both metrics are solid."
    },
    {
      category: "Classification",
      question: "How does a Random Forest decorrelate individual Decision Trees?",
      answer: "Random Forests combine two levels of randomization: 1) Bagging (Bootstrap Aggregation): each tree trains on an independent bootstrap sample with replacement of the training data. 2) Feature Subsampling: at every candidate node split, only a random subset of features (typically sqrt(p)) is considered. This prevents a single dominant feature from dictating the top splits of every tree, reducing ensemble variance through decorrelation."
    },
    {
      category: "Classification",
      question: "What is the SVM Kernel Trick and what makes it computationally powerful?",
      answer: "The SVM dual optimization problem depends solely on the inner dot product of feature pairs <x_i, x_j>. The Kernel Trick replaces this dot product with a kernel function K(x_i, x_j) = <phi(x_i), phi(x_j)> (e.g. RBF or Polynomial), computing the similarity in an infinite- or high-dimensional transformed feature space WITHOUT ever explicitly calculating or storing the coordinate mapping phi(x)."
    },
    {
      category: "Unsupervised",
      question: "How does K-Means work, and why is it sensitive to initialization and scaling?",
      answer: "K-Means alternates between Assignment (assigning points to the nearest centroid via Euclidean distance) and Update (moving centroids to the mean of assigned points), minimizing WCSS. Because Euclidean distance is used, features with larger numerical scales dominate cluster assignments, making StandardScaler mandatory. Because standard K-Means is prone to poor local minima, K-Means++ initializes distant centroids probabilistically to ensure fast, stable convergence."
    },
    {
      category: "Unsupervised",
      question: "Compare K-Means and DBSCAN. When is DBSCAN superior?",
      answer: "K-Means assumes convex, spherical, equal-variance clusters and requires pre-specifying k. It assigns every single point to a cluster, rendering it highly sensitive to outliers. DBSCAN connects dense core neighborhoods defined by epsilon and min_samples. It discovers arbitrary non-linear shapes (spirals, concentric rings), does NOT require specifying k beforehand, and classifies sparse outliers as noise (-1)."
    },
    {
      category: "Unsupervised",
      question: "Explain Principal Component Analysis (PCA) through eigenvectors of the covariance matrix.",
      answer: "PCA finds orthogonal directions that maximize variance. Given mean-centered data X, the covariance matrix Sigma = (1/n) X^T X is symmetric and positive semi-definite. The eigenvectors of Sigma define the principal component axes (directions of variance), and the corresponding eigenvalues lambda_i quantify the variance captured along each axis. Sorting eigenvalues in descending order gives the optimal low-rank orthogonal projection."
    },
    {
      category: "Feature Engineering",
      question: "Why should you prefer Target Encoding or Ordinal Encoding over One-Hot Encoding for high-cardinality features?",
      answer: "One-Hot Encoding a category with thousands of distinct values (e.g., zip codes or product IDs) creates an extremely sparse, high-dimensional feature matrix that explodes memory consumption, increases tree split computation times, and causes severe overfitting. Target Encoding replaces each category with the expected value of the target label (with smoothing to prevent leakage), preserving 1D dimensionality."
    },
    {
      category: "Optimization",
      question: "What is Stratified K-Fold cross-validation and when is it mandatory?",
      answer: "Stratified K-Fold splits the dataset such that each fold contains approximately the same percentage of samples of each target class as the complete dataset. It is mandatory in imbalanced classification tasks (e.g., 99% benign, 1% fraudulent). Regular random K-Fold could easily produce folds containing zero minority positive cases, leading to model training and evaluation collapse."
    }
  ];

  const filteredInterviewQAs = useMemo(() => {
    if (activeInterviewCategory === "all") return interviewQAs;
    return interviewQAs.filter((qa) => qa.category === activeInterviewCategory);
  }, [activeInterviewCategory]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      {/* Module Navigation Header */}
      <ModuleNav track="ai" currentModuleId="machine-learning" />

      {/* Hero Banner */}
      <div className="relative border-b border-[#e7e3da] bg-[#f5f2eb]/70 pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-100/80 text-orange-800 border border-orange-200">
              <Brain size={13} className="text-orange-600" />
              AI Engineering Track &bull; Module 03
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-medium bg-stone-100 text-stone-700 border border-stone-200">
              <Clock size={12} />
              32&ndash;38 Guided Hours + 15&ndash;20h Labs
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              Stanford CS229 &bull; Google MLCC Aligned
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 mt-2 break-words">
            Machine Learning Fundamentals
          </h1>
          <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-4xl leading-relaxed">
            Transition from mathematical foundations to engineering production ML systems. Master regression algorithms, probabilistic classification, unsupervised geometric clustering, feature engineering pipelines, cross-validation, and rigorous model evaluation.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="bg-white p-3.5 rounded-xl border border-[#e7e3da] shadow-2xs">
              <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block">Curriculum</span>
              <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">33 Units</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">Part I to Part VI in-depth</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#e7e3da] shadow-2xs">
              <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block">Simulators</span>
              <span className="text-xl sm:text-2xl font-black text-orange-600 font-mono">5 Interactive</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">Overfit, Sigmoid, Matrix, K-Means, PCA</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#e7e3da] shadow-2xs">
              <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block">Practical Labs</span>
              <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono">10 Labs</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">Scikit-learn runnable code</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-[#e7e3da] shadow-2xs">
              <span className="text-[11px] font-mono font-bold uppercase text-stone-500 block">Capstone Project</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-700 font-mono">10-Step</span>
              <span className="text-[10px] text-stone-500 block mt-0.5">Student Analytics System</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="sticky top-0 z-30 bg-[#faf8f4]/95 backdrop-blur-md border-b border-[#e7e3da] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x min-w-0">
          <button
            onClick={() => setActiveTab("curriculum")}
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "curriculum"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <BookOpen size={16} className={activeTab === "curriculum" ? "text-white" : "text-stone-400"} />
            Curriculum (33 Units)
          </button>

          <button
            onClick={() => setActiveTab("interactive-tools")}
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
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
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "labs"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Terminal size={16} className={activeTab === "labs" ? "text-white" : "text-stone-400"} />
            Practical Labs (10)
          </button>

          <button
            onClick={() => setActiveTab("project")}
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
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
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "interview"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Sparkles size={16} className={activeTab === "interview" ? "text-white" : "text-stone-400"} />
            Interview Prep (40+)
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === "quiz"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "text-stone-600 hover:text-stone-900 hover:bg-[#eae6df]"
            }`}
          >
            <Award size={16} className={activeTab === "quiz" ? "text-white" : "text-stone-400"} />
            Assessment Quiz
          </button>

          <button
            onClick={() => setActiveTab("resources")}
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
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
        {/* TAB 1: CURRICULUM EXPLORER (33 UNITS)                             */}
        {/* ================================================================= */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Section List */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#e7e3da] p-4 shadow-xs relative lg:sticky lg:top-20 max-h-72 sm:max-h-96 lg:max-h-[82vh] flex flex-col">
              <div className="mb-3">
                <span className="text-[10px] font-mono uppercase font-bold text-stone-500 tracking-wider block">
                  Curriculum Navigator
                </span>
                <h3 className="text-sm font-bold text-stone-900">33 Fundamental Units</h3>
              </div>

              {/* Part Filter Selector */}
              <div className="mb-3">
                <select
                  value={selectedPartFilter}
                  onChange={(e) => setSelectedPartFilter(e.target.value)}
                  className="w-full text-xs font-mono font-medium bg-[#f5f2eb] border border-[#e7e3da] rounded-xl px-2.5 py-2 text-stone-800 focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
                >
                  <option value="all">All Parts (33 Units)</option>
                  <option value="1">Part I: ML Foundations (Sec 1-7)</option>
                  <option value="2">Part II: Regression (Sec 8-13)</option>
                  <option value="3">Part III: Classification (Sec 14-22)</option>
                  <option value="4">Part IV: Unsupervised ML (Sec 23-27)</option>
                  <option value="5">Part V: Feature Engineering (Sec 28-30)</option>
                  <option value="6">Part VI: Model Selection (Sec 31-33)</option>
                </select>
              </div>

              {/* Scrollable list */}
              <div className="overflow-y-auto space-y-1.5 pr-1 flex-1">
                {filteredSections.map((sec) => {
                  const globalIdx = AI_ML_CURRICULUM_SECTIONS.findIndex((s) => s.id === sec.id);
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
              {/* Header Box */}
              <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                      Section {activeSection.sectionNum.toString().padStart(2, "0")}
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
                                className="absolute top-2 right-2 p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white border border-stone-700 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] flex items-center gap-1 font-mono"
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
                    <ArrowLeft size={14} /> Previous Section
                  </button>

                  <span className="text-xs font-mono text-stone-500">
                    {selectedSectionIdx + 1} of {AI_ML_CURRICULUM_SECTIONS.length}
                  </span>

                  <button
                    onClick={handleNextSection}
                    disabled={selectedSectionIdx === AI_ML_CURRICULUM_SECTIONS.length - 1}
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-black disabled:opacity-40 text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                  >
                    Next Section <ArrowRight size={14} />
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
                Visual Intuition Laboratories
              </span>
              <h2 className="text-2xl font-black text-stone-900 mt-1">
                Interactive Machine Learning Visualizers
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                Manipulate mathematical hypotheses, decision thresholds, centroid shifts, and dimensionality projection in real time.
              </p>
            </div>

            {/* Tool 1 */}
            <PolynomialOverfittingTool />

            {/* Tool 2 */}
            <SigmoidThresholdSimulator />

            {/* Tool 3 */}
            <ConfusionMatrixMetricCalculator />

            {/* Tool 4 */}
            <KMeansClusterSimulator />

            {/* Tool 5 */}
            <PCADimensionProjectionTool />
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: PRACTICAL LABORATORIES (10 LABS)                           */}
        {/* ================================================================= */}
        {activeTab === "labs" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Lab Selector Sidebar */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-[#e7e3da] p-4 shadow-xs relative lg:sticky lg:top-20 max-h-72 sm:max-h-96 lg:max-h-[80vh] flex flex-col">
              <div className="mb-3">
                <span className="text-[10px] font-mono uppercase font-bold text-stone-500 tracking-wider block">
                  Laboratory Syllabus
                </span>
                <h3 className="text-sm font-bold text-stone-900">10 Hands-on Laboratories</h3>
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

                {/* Runnable Python Code */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-stone-700 flex items-center gap-1.5">
                      <FileCode size={14} className="text-orange-600" />
                      Executable Scikit-learn Solution
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
        {/* TAB 4: CAPSTONE INTEGRATED PROJECT (SECTION 35)                   */}
        {/* ================================================================= */}
        {activeTab === "project" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
                    Section 35 &bull; Mandatory Integrated Capstone
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-1">
                    Student Performance Prediction &amp; Learning Behaviour Segmentation
                  </h2>
                </div>
                <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200 font-bold">
                  25% Course Weight
                </span>
              </div>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-4xl">
                Synthesize all regression, classification, unsupervised clustering, feature pipelines, and model persistence skills into a complete end-to-end analytical system. Build an automated ML engine for the PrepSpaces platform to estimate examination scores, flag struggling learners for early academic intervention, and discover learner archetypes.
              </p>

              {/* Architecture Flow Diagram */}
              <div className="my-6 p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 font-mono mb-3">
                  Capstone System Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Database size={18} className="mx-auto text-orange-600 mb-1" />
                    <span className="font-bold block text-stone-900">1. Data Ingestion</span>
                    <span className="text-[10px] text-stone-500">1,200 records + missing values</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Layers size={18} className="mx-auto text-blue-600 mb-1" />
                    <span className="font-bold block text-stone-900">2. ColumnTransformer</span>
                    <span className="text-[10px] text-stone-500">Impute + Scale + OneHot</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Activity size={18} className="mx-auto text-purple-600 mb-1" />
                    <span className="font-bold block text-stone-900">3. Dual Supervised</span>
                    <span className="text-[10px] text-stone-500">Regression + Classification</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Target size={18} className="mx-auto text-emerald-600 mb-1" />
                    <span className="font-bold block text-stone-900">4. K-Means Segment</span>
                    <span className="text-[10px] text-stone-500">Silhouette-scored clustering</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#e7e3da]">
                    <Cpu size={18} className="mx-auto text-stone-800 mb-1" />
                    <span className="font-bold block text-stone-900">5. Joblib Deploy</span>
                    <span className="text-[10px] text-stone-500">Persist &amp; Live Inference</span>
                  </div>
                </div>
              </div>

              {/* 10-Step Implementation Checklist */}
              <div className="mt-6">
                <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <ListOrdered size={18} className="text-orange-600" />
                  10-Step Implementation Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { key: "step1", label: "Step 1: Generate synthetic student dataset with seed 42" },
                    { key: "step2", label: "Step 2: Partition 80/20 train/test with stratification" },
                    { key: "step3", label: "Step 3: Construct Scikit-learn ColumnTransformer pipeline" },
                    { key: "step4", label: "Step 4: Train Linear Regression & Random Forest Regressor" },
                    { key: "step5", label: "Step 5: Train Logistic Regression & Random Forest Classifier" },
                    { key: "step6", label: "Step 6: Segment learning styles with K-Means (k=3)" },
                    { key: "step7", label: "Step 7: Plot actual vs predicted scores and cluster scatters" },
                    { key: "step8", label: "Step 8: Serialize trained models to disk with joblib.dump" },
                    { key: "step9", label: "Step 9: Implement inference script predicting on new students" },
                    { key: "step10", label: "Step 10: Compile technical markdown report and repository" }
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

              {/* Complete Capstone Code Block */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-stone-700 flex items-center gap-1.5">
                    <FileCode size={14} className="text-orange-600" />
                    student_ml_project.py (Complete Reference Script)
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
                        <Copy size={12} /> Copy Complete Project Script
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed border border-stone-800 max-h-[500px]">
                  <code>{projectCodeFull}</code>
                </pre>
              </div>

              {/* Evaluation Rubric */}
              <div className="mt-8 border-t border-[#e7e3da] pt-6">
                <h3 className="text-base font-bold text-stone-900 mb-3">
                  Capstone Evaluation Rubric (100 Points Total)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="bg-[#f5f2eb] border-b border-[#e7e3da] text-stone-700 font-bold">
                        <th className="p-2.5">Criteria</th>
                        <th className="p-2.5">Weight</th>
                        <th className="p-2.5">Passing Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e7e3da] text-stone-600">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Problem Formulation &amp; Data Scoping</td>
                        <td className="p-2.5 text-orange-600 font-bold">10 Marks</td>
                        <td className="p-2.5">Clear target definition, unit identification, and synthetic data generation.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Data Preprocessing &amp; Pipeline</td>
                        <td className="p-2.5 text-orange-600 font-bold">15 Marks</td>
                        <td className="p-2.5">ColumnTransformer with median imputation, scaling, and OHE without data leakage.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Regression Implementation</td>
                        <td className="p-2.5 text-orange-600 font-bold">15 Marks</td>
                        <td className="p-2.5">Linear and non-linear models with MAE, RMSE, and R2 calculation.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Classification Implementation</td>
                        <td className="p-2.5 text-orange-600 font-bold">15 Marks</td>
                        <td className="p-2.5">Logistic regression &amp; Random Forest with confusion matrix, Precision, and Recall.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Clustering Implementation</td>
                        <td className="p-2.5 text-orange-600 font-bold">15 Marks</td>
                        <td className="p-2.5">K-Means clustering with silhouette score evaluation and segment analysis.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Evaluation &amp; Interpretability</td>
                        <td className="p-2.5 text-orange-600 font-bold">15 Marks</td>
                        <td className="p-2.5">Comparative performance analysis and error trade-off explanations.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Code Quality &amp; Documentation</td>
                        <td className="p-2.5 text-orange-600 font-bold">15 Marks</td>
                        <td className="p-2.5">Modular organization, joblib persistence, README, and reproducible scripts.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 5: TECHNICAL INTERVIEW PREPARATION (40+ QUESTIONS)            */}
        {/* ================================================================= */}
        {activeTab === "interview" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
                    Section 36.3 &bull; Career Accelerator
                  </span>
                  <h2 className="text-2xl font-black text-stone-900 mt-1">
                    Technical Machine Learning Interview Questions
                  </h2>
                </div>
                <div className="flex gap-1.5">
                  {["all", "Fundamentals", "Regression", "Classification", "Unsupervised", "Feature Engineering", "Optimization"].map((cat) => (
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
        {/* TAB 6: KNOWLEDGE ASSESSMENT QUIZ (15 MCQs)                        */}
        {/* ================================================================= */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
                  Section 36.1 &bull; Knowledge Verification
                </span>
                <h2 className="text-2xl font-black text-stone-900 mt-1">
                  Machine Learning Fundamentals Assessment
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200 font-bold">
                  Answered: {Object.keys(selectedAnswers).length} / 15
                </span>
                {showQuizResults && (
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border font-bold ${
                      quizScore >= 12
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : "bg-amber-50 text-amber-800 border-amber-200"
                    }`}
                  >
                    Score: {quizScore} / 15 ({(quizScore / 15 * 100).toFixed(0)}%)
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
                        Question {qIdx + 1} of 15
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
                <RotateCcw size={14} /> Reset Quiz
              </button>

              {!showQuizResults ? (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(selectedAnswers).length < 15}
                  className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-40 text-white text-xs font-mono font-bold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                >
                  <Check size={14} /> Submit &amp; Evaluate
                </button>
              ) : (
                <div className="text-xs font-mono text-stone-600 font-bold">
                  Assessment Completed!
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 7: UNIVERSITY & INDUSTRY RESOURCES (PART X)                   */}
        {/* ================================================================= */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-3 mb-5">
                <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block">
                  Part X &bull; Academic &amp; Industry Alignment
                </span>
                <h2 className="text-2xl font-black text-stone-900 mt-1">
                  University-Level Machine Learning Resources
                </h2>
                <p className="text-sm text-stone-600 mt-1">
                  Curated academic syllabi, official open documentation, and public repositories that inspired and complement this curriculum.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://cs229.stanford.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] hover:border-orange-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold mb-1">
                      <span>Stanford University CS229</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900">Machine Learning Master Course</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      World-renowned course covering supervised learning, SVM duals, kernel methods, clustering, EM algorithm, PCA, and learning theory.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 mt-3 block">cs229.stanford.edu</span>
                </a>

                <a
                  href="https://developers.google.com/machine-learning/crash-course/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] hover:border-orange-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold mb-1">
                      <span>Google Developers</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900">Machine Learning Crash Course (MLCC)</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Practical, fast-paced introduction with interactive visualizations covering regression, classification, feature engineering, and evaluation.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 mt-3 block">developers.google.com/machine-learning</span>
                </a>

                <a
                  href="https://scikit-learn.org/stable/user_guide.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] hover:border-orange-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold mb-1">
                      <span>Scikit-learn Documentation</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900">User Guide &amp; API Reference</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Gold-standard documentation for production machine learning in Python: estimators, transformers, cross-validation metrics, and pipelines.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 mt-3 block">scikit-learn.org</span>
                </a>

                <a
                  href="https://archive.ics.uci.edu/datasets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#faf8f4] border border-[#e7e3da] hover:border-orange-300 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-orange-600 font-bold mb-1">
                      <span>UCI Machine Learning Repository</span>
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-base font-bold text-stone-900">Benchmark Datasets</h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Authoritative archive of empirical datasets for classification, regression, and clustering, including the famous Student Performance dataset.
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 mt-3 block">archive.ics.uci.edu</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
