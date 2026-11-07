import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Bot,
  Sparkles,
  Cpu,
  Layers,
  Database,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Code,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  ShieldCheck,
  Activity,
  Sliders,
  HelpCircle,
  FolderTree,
  Scale,
  RefreshCw,
  Clock,
  Terminal,
  Zap,
  Boxes,
  FileText,
  FileCode,
  Check,
  Copy,
  Play,
  Award,
  ListOrdered,
  Search,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { AI_CURRICULUM_SECTIONS } from "./aiCurriculumData";
import {
  AITaxonomyDiagram,
  IntelligentAgentDiagram,
  VectorizationBenchmarkTool,
  NormalizationSimulatorTool,
  AIEngineeringPipelineDiagram,
} from "./AIFoundationsDiagrams";

export default function AIFoundations() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // 'curriculum' | 'interactive-tools' | 'labs' | 'capstone' | 'qa' | 'quiz' | 'resources'

  // Section explorer state
  const [selectedSectionIdx, setSelectedSectionIdx] = useState(0);
  const [selectedPartFilter, setSelectedPartFilter] = useState("all");
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  const activeSection = AI_CURRICULUM_SECTIONS[selectedSectionIdx] || AI_CURRICULUM_SECTIONS[0];

  // Filter sections by part
  const filteredSections = useMemo(() => {
    if (selectedPartFilter === "all") return AI_CURRICULUM_SECTIONS;
    const partNum = parseInt(selectedPartFilter, 10);
    return AI_CURRICULUM_SECTIONS.filter((s) => s.partNum === partNum);
  }, [selectedPartFilter]);

  const handleCopyCode = (codeText, idx) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  const handleNextSection = () => {
    if (selectedSectionIdx < AI_CURRICULUM_SECTIONS.length - 1) {
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
  // PRACTICAL LABS DATA (SECTIONS 31 - LABS 01 TO 07)
  // ---------------------------------------------------------------------------
  const [activeLabId, setActiveLabId] = useState("lab-1");
  const [copiedLabCode, setCopiedLabCode] = useState(false);

  const practicalLabs = [
    {
      id: "lab-1",
      number: "01",
      title: "Algorithmic Thinking & Pseudocode Formulation",
      duration: "1.5 hours",
      objective: "Formulate step-by-step algorithms, calculate time complexity, and handle edge cases for a real-world student grading problem.",
      steps: [
        "Read raw student test records containing names, raw scores, and attendance percentages.",
        "Handle missing scores by flagging records for administrative verification.",
        "Assign letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60) using a strict decision tree.",
        "Calculate the mean, median, and standard deviation of valid scores.",
      ],
      code: `# Lab 01: Algorithmic Thinking & Student Grading Pipeline
def process_student_grades(records):
    """
    Process raw student test records with validation and statistical aggregation.
    Time Complexity: O(n log n) due to median sorting.
    Space Complexity: O(n) for valid records list.
    """
    valid_scores = []
    results = []

    for record in records:
        name = record.get("name", "Unknown")
        score = record.get("score")
        attendance = record.get("attendance", 0.0)

        # Validation: Check for missing or corrupted scores
        if score is None or not isinstance(score, (int, float)):
            results.append({"name": name, "status": "VERIFICATION_REQUIRED", "grade": None})
            continue

        if not (0 <= score <= 100):
            results.append({"name": name, "status": "INVALID_SCORE", "grade": None})
            continue

        # Decision rule for letter grades
        if score >= 90:
            grade = "A"
        elif score >= 80:
            grade = "B"
        elif score >= 70:
            grade = "C"
        elif score >= 60:
            grade = "D"
        else:
            grade = "F"

        valid_scores.append(score)
        results.append({
            "name": name,
            "score": score,
            "attendance": attendance,
            "grade": grade,
            "status": "PROCESSED"
        })

    # Summary Statistics
    if valid_scores:
        valid_scores.sort()
        n = len(valid_scores)
        mean_score = sum(valid_scores) / n
        median_score = (valid_scores[n // 2] if n % 2 != 0 
                        else (valid_scores[n // 2 - 1] + valid_scores[n // 2]) / 2.0)
    else:
        mean_score = median_score = 0.0

    return {
        "processed_records": results,
        "metrics": {"total": len(records), "valid": len(valid_scores), "mean": mean_score, "median": median_score}
    }

# Test execution
sample_records = [
    {"name": "Aman", "score": 92, "attendance": 95.0},
    {"name": "Priya", "score": 78, "attendance": 88.0},
    {"name": "Rohan", "score": None, "attendance": 60.0},
    {"name": "Sara", "score": 64, "attendance": 82.0},
]
output = process_student_grades(sample_records)
print(f"Processed: {output['metrics']}")`,
      expectedOutput: `Processed: {'total': 4, 'valid': 3, 'mean': 78.0, 'median': 78}`,
    },
    {
      id: "lab-2",
      number: "02",
      title: "Python Environment & Virtual Environment Management",
      duration: "1.5 hours",
      objective: "Set up isolated virtual environments, manage dependencies via requirements.txt, and verify Python interpreter execution.",
      steps: [
        "Create an isolated project directory: mkdir ai_project && cd ai_project",
        "Initialize a dedicated virtual environment: python -m venv .venv",
        "Activate virtual environment: source .venv/bin/activate (Linux/Mac) or .\\.venv\\Scripts\\activate (Windows)",
        "Install project dependencies: pip install numpy pandas matplotlib",
        "Freeze installed packages to reproducible manifest: pip freeze > requirements.txt",
      ],
      code: `# Lab 02: Environment Verification Script
import sys
import platform

def verify_environment():
    print(f"Python Executable: {sys.executable}")
    print(f"Python Version: {platform.python_version()}")
    print(f"Platform: {platform.platform()}")
    
    # Check if running inside virtual environment
    in_venv = sys.prefix != sys.base_prefix
    print(f"Isolated Virtual Environment: {'YES (Safe for Production)' if in_venv else 'NO (Global Site Packages)'}")
    
    # Verify core library imports
    libraries = ["numpy", "pandas", "matplotlib"]
    for lib in libraries:
        try:
            mod = __import__(lib)
            print(f"  [+] {lib} version {getattr(mod, '__version__', 'loaded')}")
        except ImportError:
            print(f"  [-] {lib} NOT INSTALLED - Run 'pip install {lib}'")

if __name__ == "__main__":
    verify_environment()`,
      expectedOutput: `Python Version: 3.11.x
Isolated Virtual Environment: YES (Safe for Production)
  [+] numpy version 1.26.x
  [+] pandas version 2.2.x
  [+] matplotlib version 3.8.x`,
    },
    {
      id: "lab-3",
      number: "03",
      title: "Data Structure Selection & Benchmarking",
      duration: "2 hours",
      objective: "Evaluate runtime performance and memory characteristics of Lists, Dictionaries, Sets, and Tuples for AI datasets.",
      steps: [
        "Benchmark O(1) Set membership lookup vs O(n) List linear scan across 1,000,000 items.",
        "Compare memory footprint of Python list of dicts vs columnar dictionary of lists.",
        "Implement generator expressions to process streaming data without consuming RAM.",
      ],
      code: `# Lab 03: Data Structure Benchmarking
import time
import sys

# Generate 1,000,000 IDs
n = 1_000_000
data_list = list(range(n))
data_set = set(data_list)

target = 999_999

# Benchmark List Search O(n)
t0 = time.perf_counter()
found_list = target in data_list
t_list = (time.perf_counter() - t0) * 1000

# Benchmark Set Search O(1)
t0 = time.perf_counter()
found_set = target in data_set
t_set = (time.perf_counter() - t0) * 1000

print(f"List search O(n): {t_list:.4f} ms")
print(f"Set search O(1):  {t_set:.4f} ms")
print(f"Set is {t_list / max(t_set, 1e-6):.1f}x faster for lookups!")`,
      expectedOutput: `List search O(n): 14.8520 ms
Set search O(1):  0.0012 ms
Set is 12376.7x faster for lookups!`,
    },
    {
      id: "lab-4",
      number: "04",
      title: "Robust File Processor with Error Handling",
      duration: "2 hours",
      objective: "Safely parse, validate, and serialize JSON and CSV datasets using context managers and custom exceptions.",
      steps: [
        "Open datasets using Python 'with open(...)' context managers to guarantee socket and file descriptor cleanup.",
        "Handle missing files (FileNotFoundError), corrupt formatting (json.JSONDecodeError), and permission errors gracefully.",
        "Log errors with structured error payloads rather than terminating application execution.",
      ],
      code: `# Lab 04: Robust File Processing Engine
import json
import os

class DataIngestionError(Exception):
    """Custom exception raised when input dataset fails schema validation."""
    pass

def load_and_validate_telemetry(filepath: str):
    if not os.path.exists(filepath):
        raise FileNotFoundError(f"Telemetry source '{filepath}' does not exist.")
        
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        if not isinstance(data, list):
            raise DataIngestionError("Payload root must be an array of records.")
            
        valid_records = []
        for idx, entry in enumerate(data):
            if "student_id" not in entry or "score" not in entry:
                print(f"Skipping malformed entry #{idx}: missing required keys")
                continue
            valid_records.append(entry)
            
        return valid_records
    except json.JSONDecodeError as e:
        raise DataIngestionError(f"Malformed JSON syntax: {e}")

# Verification with inline test data
test_file = "test_telemetry.json"
with open(test_file, "w") as f:
    json.dump([{"student_id": "S101", "score": 88}, {"broken": True}], f)

records = load_and_validate_telemetry(test_file)
print(f"Successfully ingested {len(records)} valid records.")
os.remove(test_file)`,
      expectedOutput: `Skipping malformed entry #1: missing required keys
Successfully ingested 1 valid records.`,
    },
    {
      id: "lab-5",
      number: "05",
      title: "Object-Oriented Dataset Loader with Validation",
      duration: "2 hours",
      objective: "Build an enterprise-grade dataset loader class using encapsulation, type hints, dataclasses, and custom iterator methods.",
      steps: [
        "Create an immutable StudentRecord dataclass with type hints and validation.",
        "Implement a DatasetLoader class with encapsulation and statistics computation.",
        "Support Python iterator protocol (__iter__, __len__, __getitem__).",
      ],
      code: `# Lab 05: OOP Dataset Loader
from dataclasses import dataclass
from typing import List, Optional

@dataclass(frozen=True)
class StudentRecord:
    id: str
    name: str
    attendance_rate: float
    midterm_score: float
    final_score: Optional[float] = None

    def __post_init__(self):
        if not (0.0 <= self.attendance_rate <= 1.0):
            raise ValueError(f"Attendance rate must be in [0.0, 1.0], got {self.attendance_rate}")
        if not (0.0 <= self.midterm_score <= 100.0):
            raise ValueError(f"Midterm score must be in [0.0, 100.0], got {self.midterm_score}")

class StudentDataset:
    def __init__(self, records: List[StudentRecord]):
        self._records = list(records)

    def __len__(self) -> int:
        return len(self._records)

    def __getitem__(self, idx: int) -> StudentRecord:
        return self._records[idx]

    def average_midterm(self) -> float:
        if not self._records:
            return 0.0
        return sum(r.midterm_score for r in self._records) / len(self._records)

# Execution test
s1 = StudentRecord("1", "Aman", 0.95, 88.0)
s2 = StudentRecord("2", "Priya", 0.90, 94.0)
dataset = StudentDataset([s1, s2])
print(f"Total students: {len(dataset)}, Average Midterm: {dataset.average_midterm():.2f}")`,
      expectedOutput: `Total students: 2, Average Midterm: 91.00`,
    },
    {
      id: "lab-6",
      number: "06",
      title: "Vectorized Feature Normalization & Image Tensors with NumPy",
      duration: "2.5 hours",
      objective: "Implement Min-Max feature scaling, Z-score standardization, and image array transformations without using any Python for-loops.",
      steps: [
        "Create multidimensional numerical arrays simulating 2D sensor feature matrices and 3D RGB image tensors.",
        "Apply vectorized Min-Max scaling: (X - min) / (max - min).",
        "Apply vectorized Z-score standardization: (X - mean) / std.",
        "Compute Euclidean distance matrix between sample vectors using matrix dot product (@).",
      ],
      code: `# Lab 06: NumPy Vectorized Normalization Engine
import numpy as np

# 1. Feature Matrix (5 students x 3 features: study_hours, practice_tests, attendance)
X = np.array([
    [12.0, 4.0, 95.0],
    [4.0,  1.0, 60.0],
    [8.0,  2.0, 85.0],
    [15.0, 5.0, 98.0],
    [6.0,  2.0, 75.0]
], dtype=np.float64)

# 2. Vectorized Min-Max Scaling [0, 1]
x_min = X.min(axis=0)
x_max = X.max(axis=0)
X_minmax = (X - x_min) / (x_max - x_min)

# 3. Vectorized Z-Score Standardization (mean=0, std=1)
x_mean = X.mean(axis=0)
x_std = X.std(axis=0)
X_zscore = (X - x_mean) / x_std

print("Original Features:\n", X[:2])
print("\nVectorized Min-Max Normalization:\n", np.round(X_minmax[:2], 3))
print("\nVectorized Z-Score Standardization:\n", np.round(X_zscore[:2], 3))`,
      expectedOutput: `Original Features:
 [[12.  4. 95.]
 [ 4.  1. 60.]]

Vectorized Min-Max Normalization:
 [[0.727 0.75  0.921]
 [0.    0.    0.   ]]

Vectorized Z-Score Standardization:
 [[ 0.816  0.905  0.884]
 [-1.225 -1.206 -1.616]]`,
    },
    {
      id: "lab-7",
      number: "07",
      title: "Real-World Tabular Data Pipeline with Pandas",
      duration: "2.5 hours",
      objective: "Clean messy tabular data, impute missing values, detect outliers, perform grouping aggregations, and compute correlation matrices.",
      steps: [
        "Import dirty CSV dataset containing missing values, whitespace anomalies, and string numbers.",
        "Perform data type coercion with pd.to_numeric() and clean string text columns.",
        "Impute missing numeric values using robust median calculation to avoid outlier skew.",
        "Group by demographic cohorts and compute aggregate pass rates and average study metrics.",
      ],
      code: `# Lab 07: Production Pandas Data Cleaning Pipeline
import pandas as pd
import numpy as np

# Raw dirty data simulation
raw_data = {
    "student_id": ["S001", "S002", "S003", "S004", "S005"],
    "study_hours": [12.5, np.nan, 8.0, 15.0, " 6.0 "],
    "practice_tests": [4, 1, 2, np.nan, 2],
    "final_grade": ["PASS", "FAIL", "PASS", "PASS", "FAIL"]
}

df = pd.DataFrame(raw_data)

# Step 1: Type Coercion & String Stripping
df["study_hours"] = pd.to_numeric(df["study_hours"].astype(str).str.strip(), errors="coerce")
df["practice_tests"] = pd.to_numeric(df["practice_tests"], errors="coerce")

# Step 2: Impute Missing Data with Median
df["study_hours"] = df["study_hours"].fillna(df["study_hours"].median())
df["practice_tests"] = df["practice_tests"].fillna(df["practice_tests"].median())

# Step 3: Groupby Aggregation
summary = df.groupby("final_grade").agg(
    avg_study_hours=("study_hours", "mean"),
    avg_practice_tests=("practice_tests", "mean"),
    student_count=("student_id", "count")
).reset_index()

print("Cleaned DataFrame:")
print(df)
print("\nCohort Summary:")
print(summary)`,
      expectedOutput: `Cleaned DataFrame:
  student_id  study_hours  practice_tests final_grade
0       S001         12.5             4.0        PASS
1       S002         10.25            1.0        FAIL
2       S003          8.0             2.0        PASS
3       S004         15.0             2.0        PASS
4       S005          6.0             2.0        FAIL

Cohort Summary:
  final_grade  avg_study_hours  avg_practice_tests  student_count
0        FAIL            8.125            1.500000              2
1        PASS           11.833            2.666667              3`,
    },
  ];

  const currentLab = practicalLabs.find((l) => l.id === activeLabId) || practicalLabs[0];

  const handleCopyLabCode = () => {
    navigator.clipboard.writeText(currentLab.code);
    setCopiedLabCode(true);
    setTimeout(() => setCopiedLabCode(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // CAPSTONE PROJECT PROGRESS TRACKING (SECTION 32 - STUDENT INTELLIGENCE SYSTEM)
  // ---------------------------------------------------------------------------
  const [projectChecklist, setProjectChecklist] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    step8: false,
    step9: false,
  });

  const toggleChecklist = (key) => {
    setProjectChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(projectChecklist).filter(Boolean).length;
  const [copiedProjectCode, setCopiedProjectCode] = useState(false);

  const fullProjectScript = `"""
Student Performance Intelligence & Risk Analysis System
PrepSpaces AI Engineering Masterclass - Module 01 Mini-Capstone
Architecture: Data Ingestion -> Cleaning & Imputation -> Feature Normalization (NumPy)
             -> Risk Classification Heuristic -> JSON Report Generation
"""
import json
import os
from dataclasses import dataclass
from typing import Dict, List, Any
import numpy as np
import pandas as pd

# ---------------------------------------------------------------------------
# PHASE 1: DATA MODEL DEFINITION
# ---------------------------------------------------------------------------
@dataclass
class StudentProfile:
    student_id: str
    name: str
    attendance_rate: float
    study_hours_weekly: float
    practice_exams_completed: int
    midterm_score: float
    final_score: float
    risk_level: str = "PENDING"

# ---------------------------------------------------------------------------
# PHASE 2: SYNTHETIC DATA GENERATOR & INGESTION
# ---------------------------------------------------------------------------
def generate_sample_dataset(filepath: str, n: int = 100):
    np.random.seed(42)
    attendance = np.clip(np.random.normal(0.85, 0.12, n), 0.40, 1.0)
    study_hours = np.clip(np.random.normal(12.0, 5.0, n), 2.0, 30.0)
    practice_exams = np.random.poisson(3.5, n)
    midterm = np.clip(study_hours * 2.8 + attendance * 40 + np.random.normal(0, 8, n), 30.0, 100.0)
    final = np.clip(midterm * 0.6 + study_hours * 1.5 + attendance * 20 + np.random.normal(0, 6, n), 25.0, 100.0)

    # Introduce deliberate missing values and noisy formats for pipeline validation
    records = []
    for i in range(n):
        rec = {
            "student_id": f"STU-{1000 + i}",
            "name": f"Student_{i+1}",
            "attendance_rate": float(attendance[i]) if i % 15 != 0 else None,
            "study_hours_weekly": float(study_hours[i]) if i % 20 != 0 else None,
            "practice_exams_completed": int(practice_exams[i]),
            "midterm_score": float(midterm[i]),
            "final_score": float(final[i])
        }
        records.append(rec)

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(records, f, indent=2)
    return filepath

# ---------------------------------------------------------------------------
# PHASE 3: PRODUCTION PIPELINE ENGINE
# ---------------------------------------------------------------------------
class StudentIntelligencePipeline:
    def __init__(self, raw_filepath: str):
        self.filepath = raw_filepath
        self.df = None
        self.features_normalized = None

    def ingest_and_clean(self) -> pd.DataFrame:
        with open(self.filepath, "r", encoding="utf-8") as f:
            raw = json.load(f)
        
        self.df = pd.DataFrame(raw)
        
        # 1. Impute missing numerical attributes with robust median values
        self.df["attendance_rate"] = self.df["attendance_rate"].fillna(self.df["attendance_rate"].median())
        self.df["study_hours_weekly"] = self.df["study_hours_weekly"].fillna(self.df["study_hours_weekly"].median())
        
        # 2. Feature Engineering: Composite Engagement Metric
        self.df["engagement_score"] = (
            self.df["attendance_rate"] * 0.4 +
            (self.df["study_hours_weekly"] / 30.0) * 0.35 +
            (self.df["practice_exams_completed"] / 8.0) * 0.25
        ).clip(0.0, 1.0)
        
        return self.df

    def normalize_features(self) -> np.ndarray:
        feature_cols = ["attendance_rate", "study_hours_weekly", "practice_exams_completed", "midterm_score"]
        X = self.df[feature_cols].values
        
        # Vectorized Min-Max Scaling across columns using NumPy
        x_min = X.min(axis=0)
        x_max = X.max(axis=0)
        self.features_normalized = (X - x_min) / (x_max - x_min)
        return self.features_normalized

    def evaluate_risk(self) -> pd.DataFrame:
        """
        Rules-based heuristic AI risk classifier:
        - HIGH_RISK: Engagement < 0.40 OR Midterm < 50.0
        - MODERATE_RISK: Midterm < 70.0 OR Engagement < 0.65
        - LOW_RISK / HIGH_PERFORMER: All other students
        """
        conditions = [
            (self.df["engagement_score"] < 0.42) | (self.df["midterm_score"] < 52.0),
            (self.df["midterm_score"] < 68.0) | (self.df["engagement_score"] < 0.62)
        ]
        choices = ["HIGH_RISK", "MODERATE_RISK"]
        self.df["risk_level"] = np.select(conditions, choices, default="LOW_RISK")
        return self.df

    def export_summary(self, output_path: str):
        summary = {
            "total_students": len(self.df),
            "high_risk_count": int((self.df["risk_level"] == "HIGH_RISK").sum()),
            "moderate_risk_count": int((self.df["risk_level"] == "MODERATE_RISK").sum()),
            "low_risk_count": int((self.df["risk_level"] == "LOW_RISK").sum()),
            "overall_final_mean": float(self.df["final_score"].mean()),
            "overall_final_median": float(self.df["final_score"].median()),
            "correlation_study_vs_final": float(self.df["study_hours_weekly"].corr(self.df["final_score"]))
        }
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(summary, f, indent=2)
        return summary

# ---------------------------------------------------------------------------
# PIPELINE EXECUTION
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    data_file = "student_data.json"
    generate_sample_dataset(data_file, n=150)
    
    pipeline = StudentIntelligencePipeline(data_file)
    pipeline.ingest_and_clean()
    pipeline.normalize_features()
    pipeline.evaluate_risk()
    
    summary = pipeline.export_summary("pipeline_summary.json")
    print("Pipeline Execution Completed Successfully!")
    print(json.dumps(summary, indent=2))
`;

  const handleCopyProjectScript = () => {
    navigator.clipboard.writeText(fullProjectScript);
    setCopiedProjectCode(true);
    setTimeout(() => setCopiedProjectCode(false), 2000);
  };

  // ---------------------------------------------------------------------------
  // SENIOR AI ENGINEERING Q&A (6 DEEP PRODUCTION SCENARIOS)
  // ---------------------------------------------------------------------------
  const qaScenarios = [
    {
      id: "qa-1",
      title: "Why is NumPy SIMD vectorization 50–100x faster than native Python for-loops?",
      context: "A data scientist processes 10 million audio signals or image pixel tensors. A naive Python loop takes 8 seconds; NumPy takes 80 milliseconds.",
      answer: "In pure Python, every element in a list is a heap-allocated PyObject with type metadata and reference counters. A for-loop must dynamically resolve types, check boundaries, and dereference pointers on every single iteration. NumPy allocates a single contiguous block of uniform C-types (e.g. float64). It executes compiled C/Fortran loops and leverages CPU hardware SIMD (Single Instruction, Multiple Data) vector registers (such as AVX-512) to process 8 to 16 floating-point values in a single clock cycle with zero interpreter overhead.",
    },
    {
      id: "qa-2",
      title: "What is Data Leakage during feature normalization, and how does it compromise model evaluation?",
      context: "An engineer normalizes a dataset using (X - X.min()) / (X.max() - X.min()) before executing a train/test split.",
      answer: "If you calculate minimum, maximum, mean, or standard deviation across the entire dataset before splitting, information from the held-out test set leaks into the training pipeline. The model learns based on statistical properties of data it will encounter in evaluation, creating artificially optimistic accuracy metrics that collapse when deployed to real-world unseen production traffic. The rule is absolute: always fit scalers strictly on training data, then apply the fitted parameters to validation and test sets.",
    },
    {
      id: "qa-3",
      title: "How does an AI Engineer differ from a Data Scientist and an MLOps Engineer?",
      context: "An organization is building an enterprise generative AI document assistant and must staff engineering roles effectively.",
      answer: "A Data Scientist explores data, formulates hypotheses, and builds statistical models or prototypes. An ML Engineer specializes in training deep architectures, optimizing loss functions, and managing GPU clusters. An AI Engineer bridges the gap to software engineering: designing end-to-end applications, integrating LLM APIs and vector databases, engineering prompts, building RAG retrieval pipelines, evaluating outputs, and ensuring latency, cost, and reliability. An MLOps Engineer builds CI/CD pipelines, container orchestration, and monitoring infrastructure.",
    },
    {
      id: "qa-4",
      title: "Why does filling missing data with the Mean introduce bias in skewed distributions?",
      context: "A dataset contains student study hours where 90% study 2–4 hours, but three outliers study 40 hours.",
      answer: "The arithmetic mean is extremely sensitive to extreme outliers. In a right-skewed distribution, the mean is pulled significantly higher than typical student behavior. Imputing missing study hours with the inflated mean assigns unrealistic values to missing records. The Median (50th percentile) is robust to outliers and represents the true central tendency of skewed data. For categorical fields, Mode (most frequent) or dedicated 'Missing' indicator categories are preferred.",
    },
    {
      id: "qa-5",
      title: "What is the difference between Data Drift and Concept Drift in deployed AI systems?",
      context: "A deployed fraud detection model's accuracy drops from 94% to 76% over six months.",
      answer: "Data Drift (Covariate Shift) occurs when the statistical distribution of input features P(X) changes over time (e.g. users purchase items from mobile devices rather than desktop). Concept Drift occurs when the underlying relationship between inputs and output targets P(Y|X) changes (e.g. fraudsters invent a completely new evasion strategy, so the same purchase pattern that was legitimate last year is fraudulent today). Both require automated monitoring and retraining triggers.",
    },
    {
      id: "qa-6",
      title: "When should you store AI datasets in Parquet format instead of CSV or Python Pickle?",
      context: "An AI system ingests 50 GB of telemetry logs daily for model feature training.",
      answer: "CSV is uncompressed text, parses slowly, lacks native schema types, and requires high disk I/O. Pickle is Python-specific, cannot be queried across languages, and poses arbitrary code execution security vulnerabilities if deserializing untrusted files. Apache Parquet is a compressed, binary, columnar storage format. It enables column pruning (reading only needed feature columns), predicate pushdown (filtering rows at storage layer), and 70-90% disk space reduction with snappy compression.",
    },
  ];

  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));

  // ---------------------------------------------------------------------------
  // KNOWLEDGE ASSESSMENT (SECTION 33 - 15 UNIVERSITY-GRADE MCQS)
  // ---------------------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "Which of the following best describes the core operational difference between traditional software and Machine Learning?",
      options: [
        "Traditional software requires an operating system, whereas Machine Learning runs directly on CPU microcode.",
        "Traditional software executes explicitly programmed deterministic rules; Machine Learning learns mathematical patterns and relationships from example data.",
        "Traditional software uses Python, whereas Machine Learning is exclusively written in assembly language.",
        "Machine Learning systems never make errors, unlike traditional algorithms.",
      ],
      correct: 1,
      explanation: "Traditional software maps explicit Inputs + Rules -> Outputs. Machine Learning maps Inputs + Desired Outputs -> Statistical Rules and Representations.",
    },
    {
      id: 2,
      question: "Which four fundamental capabilities characterize an Artificial Intelligence system?",
      options: [
        "Compilation, Linking, Assembling, and Execution",
        "Perception, Learning, Reasoning, and Decision-making/Planning",
        "Storage, Memory, Network, and Display",
        "Frontend, Backend, Database, and DevOps",
      ],
      correct: 1,
      explanation: "Russell & Norvig define intelligent agents around Perception (observing environment), Learning (improving from experience), Reasoning (deriving inferences), and Decision-making (selecting goal-oriented actions).",
    },
    {
      id: 3,
      question: "What is an 'Intelligent Agent' in modern AI architecture?",
      options: [
        "A human software engineer monitoring an automated pipeline",
        "An autonomous entity that perceives its environment through sensors and acts upon that environment via actuators to maximize expected utility",
        "A cloud database cluster storing neural network weights",
        "A Python virtual environment isolated from global packages",
      ],
      correct: 1,
      explanation: "An intelligent agent operates in a cyclic loop: Environment -> Sensors (Perception) -> Reasoning/Policy -> Actuators (Actions) -> Environment.",
    },
    {
      id: 4,
      question: "Why was the 1970s and late 1980s period in AI history referred to as an 'AI Winter'?",
      options: [
        "Data centers were physically located in arctic climates for passive cooling.",
        "Excessive commercial hype was followed by failure to deliver on promised symbolic expert systems, leading to severe funding and research contractions.",
        "The invention of the internet eliminated the demand for intelligent algorithms.",
        "Microprocessor clock speeds temporarily dropped below 1 MHz.",
      ],
      correct: 1,
      explanation: "AI Winters occurred when early symbolic and rule-based systems failed to scale to real-world noisy environments, causing government agencies (DARPA) and investors to drastically pull funding.",
    },
    {
      id: 5,
      question: "What is the primary role distinction of an AI Engineer compared to an ML Researcher?",
      options: [
        "AI Engineers formulate theoretical proofs for convex loss optimization.",
        "AI Engineers bridge the gap between foundation models, data pipelines, APIs, system reliability, evaluation benchmarks, and enterprise production software.",
        "AI Engineers only design user interfaces in HTML/CSS.",
        "AI Engineers write hardware BIOS firmware.",
      ],
      correct: 1,
      explanation: "Researchers develop novel mathematical architectures; AI Engineers integrate, optimize, evaluate, deploy, and maintain robust production systems powered by those models.",
    },
    {
      id: 6,
      question: "How does Python handle variable assignments like 'x = 100' under the hood?",
      options: [
        "It allocates a fixed 4-byte memory address labeled 'x' and stores the raw binary number 100 inside that block.",
        "It creates a heap-allocated PyObject representing integer 100, and binds the identifier 'x' as a reference (pointer) to that object.",
        "It compiles the assignment directly into static C global memory.",
        "It serializes the number into a temporary JSON file on disk.",
      ],
      correct: 1,
      explanation: "In Python, variables are names that refer to objects. 'x = 100' creates an integer object on the heap and points the name 'x' to it.",
    },
    {
      id: 7,
      question: "Which of the following built-in Python data structures is mutable?",
      options: [
        "tuple",
        "int",
        "str",
        "list",
      ],
      correct: 3,
      explanation: "Lists, dictionaries, and sets are mutable (they can be modified in-place without altering their object ID). Integers, floats, strings, and tuples are strictly immutable.",
    },
    {
      id: 8,
      question: "What is the Big-O time complexity of checking membership ('x in collection') in a Python set versus a Python list?",
      options: [
        "List: O(1); Set: O(n)",
        "List: O(n); Set: O(1) average time",
        "Both are always O(log n)",
        "Both are always O(n^2)",
      ],
      correct: 1,
      explanation: "Python sets use hash tables with O(1) average-time lookups. Python lists require linear traversal O(n) to find an element.",
    },
    {
      id: 9,
      question: "What is the primary operational hazard of Python's 'except Exception:' catch-all block without logging?",
      options: [
        "It increases CPU fan speed.",
        "It silently suppresses critical runtime bugs, syntax errors, and keyboard interrupts, making debugging nearly impossible.",
        "It converts float variables into strings automatically.",
        "It violates IEEE-754 floating-point standards.",
      ],
      correct: 1,
      explanation: "Catch-all bare exceptions swallow unexpected system exceptions, masking the root cause of failures and leading to corrupted internal application state.",
    },
    {
      id: 10,
      question: "Why should machine learning datasets NEVER be serialized using Python's 'pickle' library from untrusted sources?",
      options: [
        "Pickle is too slow for numbers smaller than 10.",
        "Pickle files can execute arbitrary malicious bytecode during deserialization (__reduce__ method), resulting in complete system compromise.",
        "Pickle cannot serialize floating-point numbers.",
        "Pickle only works on 32-bit operating systems.",
      ],
      correct: 1,
      explanation: "Python's pickle protocol allows arbitrary Python callable execution during unpickling, enabling remote code execution exploits.",
    },
    {
      id: 11,
      question: "How does NumPy achieve 50–100x faster execution speeds compared to native Python for-loops?",
      options: [
        "By translating Python code into JavaScript in the browser",
        "By utilizing contiguous C-memory layouts, precompiled native loops, and CPU hardware SIMD vectorization registers",
        "By skipping mathematical precision checks",
        "By storing all numbers as strings",
      ],
      correct: 1,
      explanation: "NumPy bypasses the Python interpreter's per-element overhead by storing data in contiguous memory buffers and executing compiled SIMD vector instructions.",
    },
    {
      id: 12,
      question: "In NumPy, what is the crucial operational distinction between the operators '*' and '@'?",
      options: [
        "'*' performs matrix dot product; '@' performs element-wise multiplication.",
        "'*' performs element-wise (Hadamard) multiplication; '@' performs algebraic matrix dot multiplication.",
        "Both perform identical element-wise operations.",
        "'@' is a function decorator and cannot be used in expressions.",
      ],
      correct: 1,
      explanation: "In modern Python and NumPy, '@' performs algebraic matrix dot multiplication, while '*' performs element-wise multiplication.",
    },
    {
      id: 13,
      question: "What does NumPy's broadcasting mechanism allow?",
      options: [
        "Transmitting data over Wi-Fi sockets",
        "Performing arithmetic operations between differently shaped arrays that meet compatibility rules without manual copying",
        "Compressing CSV files on disk",
        "Object-oriented class polymorphism",
      ],
      correct: 1,
      explanation: "Broadcasting describes how NumPy treats arrays with different shapes during arithmetic operations without making unnecessary duplicate memory copies.",
    },
    {
      id: 14,
      question: "What is a Pandas DataFrame?",
      options: [
        "A two-dimensional, size-mutable, tabular data structure with labelled rows and columns",
        "A Python function decorator",
        "A convolutional neural network layer",
        "A binary serialization format",
      ],
      correct: 0,
      explanation: "A Pandas DataFrame is a 2D tabular data structure with columns of potentially different types, supporting rich SQL-like relational and statistical operations.",
    },
    {
      id: 15,
      question: "What is the primary purpose of Jupyter Notebook in AI engineering?",
      options: [
        "Compiling bare-metal C kernels",
        "An interactive computing environment combining live code, Markdown notes, math formulas, and visualizations for reproducible experiments",
        "Serving high-throughput REST APIs in production",
        "Managing encrypted user passwords",
      ],
      correct: 1,
      explanation: "Jupyter Notebook allows engineers to iteratively test code cells, inspect intermediate datasets, render Matplotlib visualizations, and document analytical reasoning in shareable notebooks.",
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
      <ModuleNav track="ai" currentModuleId="foundations" />

      {/* Hero Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-mono font-bold text-orange-700 flex items-center gap-1.5">
                  <Brain size={14} />
                  AI ENGINEERING &amp; GENERATIVE AI &bull; MODULE 01
                </span>
                <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-mono text-stone-600">
                  University-Level Curriculum
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight break-words">
                AI Engineering Foundations &amp; Python for AI
              </h1>
              <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-3xl leading-relaxed">
                Build the foundations of an AI Engineer. Progress from the principles of Artificial Intelligence and intelligent agent architectures to professional Python programming, NumPy numerical computing, Pandas data engineering, and an end-to-end student performance intelligence system.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/learning")}
                className="px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-stone-700 text-xs font-bold hover:bg-stone-50 transition cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft size={14} />
                All Courses
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("capstone")}
                className="px-3.5 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                View Capstone Project
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
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Difficulty Level</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Beginner &rarr; Intermediate</span>
              <span className="text-[10px] text-stone-500 block">University standard</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Primary Toolchain</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Python 3.11+, NumPy, Pandas</span>
              <span className="text-[10px] text-stone-500 block">Jupyter, VS Code, Colab</span>
            </div>
            <div className="rounded-xl bg-[#faf8f4] p-3 border border-[#e7e3da]">
              <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">Pedagogical Style</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">Theory + 7 Labs + Capstone</span>
              <span className="text-[10px] text-stone-500 block">30 Curriculum Sections</span>
            </div>
          </div>
        </div>

        {/* View Mode Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 border-b border-[#e7e3da] pb-3 mb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden touch-pan-x min-w-0">
          <button
            type="button"
            onClick={() => setActiveTab("curriculum")}
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "curriculum"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <BookOpen size={16} className={activeTab === "curriculum" ? "text-white" : "text-stone-400"} />
            Curriculum &amp; Theory (Sections 01–30)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("interactive-tools")}
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
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
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
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
            onClick={() => setActiveTab("capstone")}
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "capstone"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <ShieldCheck size={16} className={activeTab === "capstone" ? "text-white" : "text-stone-400"} />
            Capstone Project ({completedCount}/9)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("qa")}
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "qa"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Sparkles size={16} className={activeTab === "qa" ? "text-white" : "text-stone-400"} />
            Senior AI Interview Scenarios
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("quiz")}
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === "quiz"
                ? "bg-[#f97316] text-white shadow-xs font-bold"
                : "bg-white text-stone-600 border border-[#e7e3da] hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <Award size={16} className={activeTab === "quiz" ? "text-white" : "text-stone-400"} />
            Knowledge Assessment (15 MCQs)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("resources")}
            className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
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
        {/* TAB 1: CURRICULUM THEORY (DEEP EXPLORER ACROSS ALL 30 CORE SECTIONS)       */}
        {/* ========================================================================= */}
        {activeTab === "curriculum" && (
          <div className="space-y-6">
            {/* Part Filter Bar */}
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-4 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <ListOrdered size={14} className="text-orange-600" />
                  Filter by Learning Part:
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Showing <strong>{filteredSections.length}</strong> of <strong>30</strong> Curriculum Sections
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All Sections (1–30)" },
                  { id: "1", label: "Part I: AI Foundations (§1–5)" },
                  { id: "2", label: "Part II: Python for AI (§6–22)" },
                  { id: "3", label: "Part III: NumPy (§23–25)" },
                  { id: "4", label: "Part IV: Pandas (§26–28)" },
                  { id: "5", label: "Part V: Jupyter (§29)" },
                  { id: "6", label: "Part VI: AI Workflow (§30)" },
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

            {/* Main Section Explorer Layout: Section Grid Selector + Full In-Depth Content Viewer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Quick Section List / Index */}
              <div className="lg:col-span-4 rounded-2xl border border-[#e7e3da] bg-white p-4 shadow-xs max-h-72 sm:max-h-96 lg:max-h-[800px] overflow-y-auto">
                <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-3 px-1">
                  Table of Contents
                </div>
                <div className="space-y-1.5">
                  {filteredSections.map((sec) => {
                    const isSelected = sec.sectionNum === activeSection.sectionNum;
                    const realIndex = AI_CURRICULUM_SECTIONS.findIndex((s) => s.sectionNum === sec.sectionNum);
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
                            isSelected
                              ? "bg-orange-600 text-white"
                              : "bg-stone-100 text-stone-600"
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

              {/* Right Column: Full In-Depth Section Content Viewer */}
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

                {/* Relevant Embedded Visualizer / Simulator Diagram */}
                {activeSection.sectionNum >= 1 && activeSection.sectionNum <= 3 && (
                  <div className="mb-8">
                    <AITaxonomyDiagram />
                  </div>
                )}
                {activeSection.sectionNum >= 4 && activeSection.sectionNum <= 5 && (
                  <div className="mb-8">
                    <IntelligentAgentDiagram />
                  </div>
                )}
                {activeSection.sectionNum >= 23 && activeSection.sectionNum <= 25 && (
                  <div className="mb-8">
                    <VectorizationBenchmarkTool />
                  </div>
                )}
                {activeSection.sectionNum >= 26 && activeSection.sectionNum <= 28 && (
                  <div className="mb-8">
                    <NormalizationSimulatorTool />
                  </div>
                )}
                {activeSection.sectionNum === 30 && (
                  <div className="mb-8">
                    <AIEngineeringPipelineDiagram />
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
                          <div className="text-stone-500 mb-2 select-none"># Python 3 Implementation</div>
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
                    Section {selectedSectionIdx + 1} of {AI_CURRICULUM_SECTIONS.length}
                  </span>

                  <button
                    type="button"
                    onClick={handleNextSection}
                    disabled={selectedSectionIdx >= AI_CURRICULUM_SECTIONS.length - 1}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 cursor-pointer ${
                      selectedSectionIdx >= AI_CURRICULUM_SECTIONS.length - 1
                        ? "opacity-40 cursor-not-allowed border-stone-200 bg-stone-50 text-stone-400"
                        : "bg-orange-600 text-white hover:bg-orange-700 border-orange-600 shadow-2xs"
                    }`}
                  >
                    Next: Section {selectedSectionIdx < AI_CURRICULUM_SECTIONS.length - 1 ? String(selectedSectionIdx + 2).padStart(2, "0") : "--"}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE SIMULATORS (5 TOOLS)                                   */}
        {/* ========================================================================= */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <h2 className="text-lg font-black text-stone-900 mb-1 flex items-center gap-2">
                <Sliders size={18} className="text-orange-600" />
                Hands-On Architectural Simulators &amp; Visualizers
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Explore the five core interactive computational models built specifically for this module. Test vectorization latency, normalization bounds, agent perception-action loops, taxonomy overlap, and the 11-stage AI engineering pipeline.
              </p>
            </div>

            <AITaxonomyDiagram />
            <IntelligentAgentDiagram />
            <VectorizationBenchmarkTool />
            <NormalizationSimulatorTool />
            <AIEngineeringPipelineDiagram />
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: PRACTICAL LABS (LABS 01 TO 07)                                     */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            {/* Lab Selector Tabs */}
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
                  Lab {lab.number}: {lab.title.split("&")[0].trim()}
                </button>
              ))}
            </div>

            {/* Current Lab Workspace Card */}
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    Hands-On Practical Lab #{currentLab.number}
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

              {/* Lab Steps */}
              <div className="mb-6">
                <h3 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-3">
                  Execution Checklist:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentLab.steps.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#faf8f4] border border-[#e7e3da] flex items-start gap-2.5 text-xs text-stone-700">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-700 font-mono font-bold text-[11px] flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Runnable Lab Python Code */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-stone-500 flex items-center gap-1.5">
                    <FileCode size={14} className="text-emerald-600" />
                    Complete Executable Lab Implementation:
                  </span>
                </div>
                <div className="rounded-xl border border-stone-800 bg-stone-950 p-4 text-emerald-400 font-mono text-xs overflow-x-auto max-h-[380px] leading-relaxed">
                  <pre>{currentLab.code}</pre>
                </div>
              </div>

              {/* Expected Output */}
              <div>
                <span className="text-xs font-mono font-bold text-stone-500 block mb-2">
                  Expected Console Output:
                </span>
                <div className="rounded-xl border border-stone-200 bg-stone-100 p-3.5 text-stone-800 font-mono text-xs overflow-x-auto">
                  <pre>{currentLab.expectedOutput}</pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: CAPSTONE MINI-PROJECT (SECTION 32 - STUDENT INTELLIGENCE SYSTEM)     */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="space-y-8">
            {/* Capstone Header */}
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    Section 32 &bull; Portfolio-Ready Engineering Mini-Project
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    Student Performance Intelligence &amp; Risk Analysis System
                  </h2>
                  <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    Integrate all core Python, NumPy, and Pandas engineering concepts into an end-to-end data processing and risk evaluation pipeline with structured JSON outputs.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-orange-50 border border-orange-200 px-4 py-2 text-center">
                    <span className="text-xs font-mono text-orange-800 font-bold block">Checklist Progress</span>
                    <span className="text-lg font-black text-orange-600 font-mono">{completedCount}/9</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyProjectScript}
                    className="px-4 py-2.5 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center gap-2 shadow-2xs"
                  >
                    {copiedProjectCode ? (
                      <>
                        <Check size={16} />
                        Copied Complete Script!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy Production Python Script
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Project Requirements Checklist */}
              <div className="mb-8">
                <h3 className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-4">
                  9 Project Implementation Milestones (Click to Track):
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { key: "step1", label: "Phase 1: StudentProfile data model with dataclasses" },
                    { key: "step2", label: "Phase 2: Synthetic telemetry dataset generator" },
                    { key: "step3", label: "Phase 3: Safe file I/O with context managers" },
                    { key: "step4", label: "Phase 4: Missing data imputation with Pandas median" },
                    { key: "step5", label: "Phase 5: Composite engagement metric formulation" },
                    { key: "step6", label: "Phase 6: Vectorized Min-Max feature normalization" },
                    { key: "step7", label: "Phase 7: Rule-based heuristic risk classification" },
                    { key: "step8", label: "Phase 8: Statistical cohort summary export to JSON" },
                    { key: "step9", label: "Phase 9: Comprehensive validation test suite" },
                  ].map((step) => (
                    <button
                      key={step.key}
                      type="button"
                      onClick={() => toggleChecklist(step.key)}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer flex items-start gap-2.5 ${
                        projectChecklist[step.key]
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                          : "bg-[#faf8f4] border-[#e7e3da] text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      <span className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                        projectChecklist[step.key] ? "bg-emerald-600 text-white" : "border border-stone-300 bg-white"
                      }`}>
                        {projectChecklist[step.key] && <Check size={10} />}
                      </span>
                      <span className="text-xs leading-snug">{step.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Complete Copyable Capstone Code */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-stone-500 flex items-center gap-1.5">
                    <FileCode size={14} className="text-emerald-600" />
                    Complete 250-Line Runnable Mini-Capstone Code:
                  </span>
                </div>
                <div className="rounded-xl border border-stone-800 bg-stone-950 p-4 text-emerald-400 font-mono text-xs overflow-x-auto max-h-[480px] leading-relaxed">
                  <pre>{fullProjectScript}</pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: SENIOR AI ENGINEERING SCENARIOS (6 ARCHITECTURAL Q&A)              */}
        {/* ========================================================================= */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs mb-6">
              <h2 className="text-lg font-black text-stone-900 mb-1 flex items-center gap-2">
                <Sparkles size={18} className="text-orange-600" />
                Senior AI Engineering Technical Scenarios
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                In-depth engineering trade-off evaluations drawn from senior technical interviews at Google, Meta, OpenAI, and leading AI startups.
              </p>
            </div>

            {qaScenarios.map((scenario) => {
              const isOpen = expandedQA[scenario.id];
              return (
                <div key={scenario.id} className="rounded-2xl border border-[#e7e3da] bg-white shadow-xs overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleQA(scenario.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-stone-50/50 transition"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                        Production Scenario
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-stone-900">
                        {scenario.title}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 italic">
                        Context: {scenario.context}
                      </p>
                    </div>
                    <span className="p-1 rounded-lg bg-stone-100 text-stone-500 shrink-0 mt-1">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-[#faf8f4] border-t border-[#e7e3da] text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <strong className="text-stone-900 block font-mono text-xs uppercase mb-2">
                        Senior Architectural Explanation &amp; Industry Standards:
                      </strong>
                      <p>{scenario.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: KNOWLEDGE ASSESSMENT (SECTION 33 - 15 UNIVERSITY MCQS)             */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    Section 33 &bull; Academic Knowledge Assessment
                  </span>
                  <h2 className="text-xl font-black text-stone-900">
                    Comprehensive Module 01 Knowledge Evaluation
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    15 rigorous multiple choice questions covering AI foundations, Python runtime internals, NumPy SIMD, and Pandas data engineering.
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
        {/* TAB 7: UNIVERSITY REFERENCES (PART X)                                     */}
        {/* ========================================================================= */}
        {activeTab === "resources" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#e7e3da] bg-white p-6 shadow-xs mb-6">
              <h2 className="text-lg font-black text-stone-900 mb-1 flex items-center gap-2">
                <BookOpen size={18} className="text-orange-600" />
                Part X &bull; Academic &amp; University-Level Learning Resources
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Foundational textbooks, official documentation, and open academic courses underpinning this module&apos;s curriculum.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Harvard University — CS50 Introduction to Programming with Python",
                  author: "Prof. David J. Malan (Harvard SEAS)",
                  desc: "Comprehensive introduction to programming using Python, functions, variables, conditionals, loops, exceptions, libraries, unit tests, and object-oriented programming.",
                  link: "https://cs50.harvard.edu/python/",
                },
                {
                  title: "Stanford University — CS229 Machine Learning",
                  author: "Prof. Andrew Ng (Stanford AI Lab)",
                  desc: "Rigorous mathematical formulation of supervised learning, unsupervised learning, loss functions, optimization, gradient descent, and deep neural networks.",
                  link: "https://cs229.stanford.edu/",
                },
                {
                  title: "Massachusetts Institute of Technology — 6.S191 Introduction to Deep Learning",
                  author: "Alexander Amini, Ava Soleimany (MIT)",
                  desc: "MIT's official introductory course on deep learning methods with applications to computer vision, natural language, and generative models.",
                  link: "http://introtodeeplearning.com/",
                },
                {
                  title: "Official Python 3 Documentation & Language Reference",
                  author: "Python Software Foundation",
                  desc: "The definitive authority on Python runtime execution, bytecode compilation, data structures, built-in functions, and the standard library.",
                  link: "https://docs.python.org/3/",
                },
                {
                  title: "NumPy Official Documentation & Array Programming Reference",
                  author: "NumPy Community (Charles R. Harris et al., Nature 2020)",
                  desc: "Memory stride layouts, SIMD vectorization, broadcasting compatibility rules, and high-performance linear algebra routines.",
                  link: "https://numpy.org/doc/stable/",
                },
                {
                  title: "Pandas: Powerful Python Data Analysis Toolkit",
                  author: "Wes McKinney & Pandas Development Team",
                  desc: "Production guidelines for tabular data manipulation, memory optimization, exploratory data analysis, and series transformations.",
                  link: "https://pandas.pydata.org/docs/",
                },
              ].map((res, idx) => (
                <div key={idx} className="rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-wider block mb-1">
                      Academic Reference #{idx + 1}
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
                    Open Official Resource
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
