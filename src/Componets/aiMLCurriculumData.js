/**
 * Full Curriculum Content Data for Module 03: Machine Learning Fundamentals
 * Extracted with complete university-level fidelity across all 33 core theoretical sections.
 */

export const AI_ML_CURRICULUM_SECTIONS = [
  {
    "id": "sec-01",
    "sectionNum": 1,
    "title": "Introduction to Machine Learning",
    "duration": "1 hour",
    "partNum": 1,
    "partName": "Part I — Introduction to Machine Learning",
    "tag": "ML Foundations",
    "subsections": [
      {
        "title": "1.1 What is Machine Learning?",
        "paragraphs": [
          "Machine Learning (ML) is a branch of Artificial Intelligence that develops algorithms capable of learning patterns from data and using those patterns to make predictions or decisions.",
          "In traditional programming, a developer writes explicit instructions to solve a problem.",
          "In Machine Learning, the developer provides examples and a learning algorithm estimates a model from those examples.",
          "Consider an application that predicts whether an email is spam.",
          "Traditional programming might use manually specified rules:",
          "This program depends on explicitly written rules. It cannot automatically discover new patterns.",
          "A Machine Learning approach instead learns statistical relationships from previously labelled emails.",
          "Historical emails + Spam / Not Spam labels ↓ Machine Learning algorithm ↓ Trained model ↓ New email ↓ Spam probability ↓ Classification result"
        ],
        "codeBlocks": [
          "def detect_spam(email): if \"win money\" in email.lower(): return \"Spam\" elif \"claim prize\" in email.lower(): return \"Spam\" else: return \"Not Spam\" print(detect_spam(\"Win money now\"))"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.2 How does a Machine Learning model learn?",
        "paragraphs": [
          "A basic learning process contains five stages.",
          "Stage 1 — Collect data",
          "Gather examples that represent the problem.",
          "Stage 2 — Prepare the data",
          "Clean records, handle missing values and represent the required features numerically.",
          "Stage 3 — Select an algorithm",
          "Choose a suitable learning method.",
          "Stage 4 — Train the model",
          "The algorithm estimates model parameters from the training data.",
          "Stage 5 — Make predictions",
          "The trained model processes new inputs that were not used during training."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.3 A simple learning example",
        "paragraphs": [
          "Suppose we have this dataset:",
          "Study hours",
          "Examination score",
          "1",
          "35",
          "2",
          "42",
          "3",
          "50",
          "4",
          "58",
          "5",
          "65",
          "6",
          "72",
          "We want to learn the relationship between study hours and examination scores.",
          "A simple regression model might learn:",
          "For a student studying 7 hours:",
          "The output is an estimated score, not a guaranteed result."
        ],
        "codeBlocks": [
          "\\[ \\hat y=7.4x+27.5 \\]",
          "\\[ \\hat y=7.4(7)+27.5 \\]",
          "\\[ \\hat y=79.3 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.4 Machine Learning terminology",
        "paragraphs": [
          "Term",
          "Meaning",
          "Dataset",
          "Collection of observations",
          "Sample",
          "One observation",
          "Feature",
          "Input variable",
          "Target",
          "Value the model predicts",
          "Label",
          "Known target category or value",
          "Model",
          "Learned mathematical representation",
          "Algorithm",
          "Method used to learn a model",
          "Training",
          "Learning parameters from data",
          "Prediction",
          "Model output for an input",
          "Inference",
          "Applying a trained model",
          "Loss",
          "Numerical measure of prediction error",
          "Hyperparameter",
          "Configuration chosen outside ordinary model fitting",
          "Generalization",
          "Performance on unseen data"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.5 AI vs traditional programming vs Machine Learning",
        "paragraphs": [
          "Approach",
          "How it works",
          "Example",
          "Traditional programming",
          "Developer writes rules",
          "Tax calculator",
          "Machine Learning",
          "Model learns from examples",
          "Spam detector",
          "Deep Learning",
          "Multilayer neural networks learn representations",
          "Image recognition",
          "Generative AI",
          "Model generates new content",
          "Language generation"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.6 When should we use Machine Learning?",
        "paragraphs": [
          "Machine Learning can be appropriate when:",
          "A problem has patterns in historical data.",
          "Explicitly writing every useful rule is difficult.",
          "There is sufficient data to learn and evaluate a model.",
          "Predictions provide measurable value.",
          "The model can be monitored and maintained.",
          "Machine Learning may be unnecessary when a deterministic rule, simple database query or ordinary algorithm solves the problem more reliably."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3527
  },
  {
    "id": "sec-02",
    "sectionNum": 2,
    "title": "Types and Paradigms of Machine Learning",
    "duration": "1.5 hours",
    "partNum": 1,
    "partName": "Part I — Introduction to Machine Learning",
    "tag": "ML Foundations",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Foundations of Reinforcement Learning](https://images.openai.com/static-rsc-4/12MmYNs6jI1gvhgzP3a-5nJQJdKM0PdcRIJHpkH5xHTJ6ztTumvQFbsGrY03mT7K2cmDdrZxPfCadjWH-dCrjbo02fGTtPFJrPxLxcdMLnKDho5RhDL83pDZwY3iwpeu1W6zJEHDVJW8IaV9QpG-0kpRqLJrkp_pQspRMmuUoCI?purpose=inline)",
          "[dailydoseofds.com](https://www.dailydoseofds.com/rl-course-part-1/?utm_source=chatgpt.com)",
          "Machine Learning has multiple learning paradigms. Students must understand what information each paradigm receives and what it attempts to learn."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.1 Supervised Learning",
        "paragraphs": [
          "Supervised Learning uses labelled examples.",
          "Each training example contains:",
          "Where:",
          "The algorithm learns a relationship:",
          "It then uses that learned relationship to predict targets for new inputs.",
          "Examples:",
          "Predicting house prices.",
          "Spam detection.",
          "Customer churn prediction.",
          "Student performance prediction.",
          "Medical image classification.",
          "Two major supervised learning tasks are:",
          "Regression: Predict a numerical value.",
          "Examples: Temperature, salary, price and examination scores.",
          "Classification: Predict a class or category.",
          "Examples: Spam/not spam, fraud/not fraud and approved/rejected."
        ],
        "codeBlocks": [
          "\\[ (x_i,y_i) \\]",
          "\\(x_i\\) represents the input features.",
          "\\(y_i\\) represents the known target.",
          "\\[ f:X\\rightarrow Y \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.2 Unsupervised Learning",
        "paragraphs": [
          "Unsupervised Learning works with data that does not have target labels.",
          "The algorithm attempts to identify useful structure or patterns in the input data.",
          "Example:",
          "An e-commerce business has customer information but does not know which customers belong to similar purchasing groups.",
          "An unsupervised algorithm may group customers according to similarities in their behaviour.",
          "Applications:",
          "Customer segmentation.",
          "Anomaly exploration.",
          "Grouping documents.",
          "Dimensionality reduction.",
          "Discovering patterns in datasets."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.3 Reinforcement Learning",
        "paragraphs": [
          "Reinforcement Learning studies how an agent learns to make decisions by interacting with an environment and receiving rewards.",
          "Fundamental components:",
          "Component",
          "Meaning",
          "Agent",
          "Decision-making system",
          "Environment",
          "World the agent interacts with",
          "State",
          "Current situation",
          "Action",
          "Decision taken by the agent",
          "Reward",
          "Feedback received",
          "Policy",
          "Strategy for choosing actions",
          "Example:",
          "A game-playing agent:",
          "Observes the board.",
          "Selects a move.",
          "Receives feedback.",
          "Learns which actions tend to lead to better outcomes.",
          "Reinforcement Learning will receive deeper mathematical and algorithmic treatment in a later module."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.4 Semi-supervised Learning",
        "paragraphs": [
          "Semi-supervised Learning uses a smaller labelled dataset together with a larger unlabelled dataset.",
          "Example:",
          "A platform has 10,000 product images, but only 1,000 have been manually categorized.",
          "Some learning algorithms can use both groups to improve learning under suitable assumptions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.5 Self-supervised Learning",
        "paragraphs": [
          "Self-supervised Learning creates learning signals from the data itself rather than requiring a human to provide a separate label for every example.",
          "For example, a language model can learn to predict a missing or subsequent token using surrounding text.",
          "This concept becomes important later when studying Transformers and LLM training."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.6 Comparative understanding",
        "paragraphs": [
          "Learning method",
          "Labels required?",
          "Main objective",
          "Supervised",
          "Yes",
          "Predict targets",
          "Unsupervised",
          "No target labels",
          "Discover structure",
          "Reinforcement",
          "Reward feedback",
          "Learn actions and policies",
          "Semi-supervised",
          "Some labels",
          "Learn from labelled and unlabelled data",
          "Self-supervised",
          "Automatically derived targets",
          "Learn representations or predict withheld information"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.7 Python demonstration",
        "paragraphs": [
          "Here, X contains features and y contains the corresponding labelled outcomes.",
          "For an unsupervised experiment, we could use X without y."
        ],
        "codeBlocks": [
          "import numpy as np # Features: study hours and practice questions. X = np.array([ [1, 10], [2, 20], [5, 50], [6, 60] ]) # Known targets. y = np.array([ 35, 42, 65, 72 ]) print(\"Features:\") print(X) print(\"Targets:\") print(y)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3999
  },
  {
    "id": "sec-03",
    "sectionNum": 3,
    "title": "Machine Learning Problem Formulation",
    "duration": "1 hour",
    "partNum": 1,
    "partName": "Part I — Introduction to Machine Learning",
    "tag": "ML Foundations",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "Before implementing an algorithm, an engineer must define the problem precisely."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "3.1 Convert a real-world problem into an ML problem",
        "paragraphs": [
          "Suppose PrepSpaces wants to identify learners who might stop using the platform.",
          "A vague problem:",
          "\"Predict inactive students.\"",
          "A properly formulated problem:",
          "\"Given student engagement information from the previous 30 days, predict whether the student will become inactive during the following 30 days.\"",
          "This definition clarifies the prediction target and the information available when making a prediction."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "3.2 Define the objective",
        "paragraphs": [
          "A good problem definition includes:",
          "Business or user problem.",
          "Prediction objective.",
          "Input information.",
          "Target variable.",
          "Prediction time horizon.",
          "Success criteria.",
          "Acceptable error.",
          "Operational constraints."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "3.3 Identify the ML task",
        "paragraphs": [
          "Business question",
          "ML formulation",
          "What score will a student obtain?",
          "Regression",
          "Will a student complete a course?",
          "Classification",
          "Which students behave similarly?",
          "Clustering",
          "Which course should be recommended?",
          "Recommendation",
          "Is this transaction unusual?",
          "Anomaly detection"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      },
      {
        "title": "3.4 Define the target correctly",
        "paragraphs": [
          "Consider the student engagement problem.",
          "Potential features:",
          "Lessons completed in the past 30 days.",
          "Weekly login frequency.",
          "Time spent learning.",
          "Practice questions attempted.",
          "Number of active learning days.",
          "Potential target:",
          "1: Student becomes inactive in the next 30 days.",
          "0: Student remains active.",
          "A major issue is target leakage.",
          "For example, including a student's login activity from the future prediction period would provide the model with information it could not have known at prediction time.",
          "That would make the evaluation unrealistic."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "3.5 Success criteria",
        "paragraphs": [
          "The best evaluation metric depends on the problem.",
          "For predicting inactivity:",
          "Recall may matter when missing students who are about to become inactive is costly.",
          "Precision may matter when intervention resources are limited.",
          "F1 may help when a balance is needed.",
          "There is no universal best metric.",
          "Assignment: Write a complete ML problem specification for a customer churn prediction system and an educational recommendation system."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2119
  },
  {
    "id": "sec-04",
    "sectionNum": 4,
    "title": "Datasets, Features, Labels and Targets",
    "duration": "1.5 hours",
    "partNum": 1,
    "partName": "Part I — Introduction to Machine Learning",
    "tag": "ML Foundations",
    "subsections": [
      {
        "title": "4.1 Understanding a dataset",
        "paragraphs": [
          "A dataset usually contains rows representing observations and columns representing variables.",
          "Example:",
          "Hours",
          "Questions",
          "Previous score",
          "Final score",
          "2",
          "10",
          "55",
          "58",
          "4",
          "25",
          "65",
          "69",
          "6",
          "40",
          "78",
          "84",
          "8",
          "60",
          "88",
          "93",
          "The first three columns are features. The final score is the target."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.2 Feature matrix",
        "paragraphs": [
          "The input feature matrix is represented by:",
          "Its shape is:",
          "Four observations and three features."
        ],
        "codeBlocks": [
          "\\[ X= \\begin{bmatrix} 2&10&55\\\\ 4&25&65\\\\ 6&40&78\\\\ 8&60&88 \\end{bmatrix} \\]",
          "\\[ X\\in\\mathbb R^{4\\times3} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.3 Target vector",
        "paragraphs": [
          "It contains the four known output values."
        ],
        "codeBlocks": [
          "\\[ y= \\begin{bmatrix} 58\\\\69\\\\84\\\\93 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.4 Feature types",
        "paragraphs": [
          "Numerical features",
          "Age.",
          "Temperature.",
          "Salary.",
          "Study hours.",
          "Transaction amount.",
          "Categorical features",
          "City.",
          "Department.",
          "Subscription plan.",
          "Product category.",
          "Ordinal features",
          "These have a meaningful order.",
          "Example:",
          "Beginner.",
          "Intermediate.",
          "Advanced.",
          "Binary features",
          "These contain two possible categories.",
          "Example:",
          "Yes/No.",
          "Active/Inactive.",
          "True/False."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.5 Understanding labels",
        "paragraphs": [
          "For classification:",
          "X = [ [2, 10], [4, 30], [6, 50] ] y = [ \"Beginner\", \"Intermediate\", \"Advanced\" ]",
          "For regression:",
          "X = [ [1], [2], [3] ] y = [ 35, 45, 55 ]"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      },
      {
        "title": "4.6 Python dataset inspection",
        "paragraphs": [
          "Assignment: Create a dataset containing at least 10 observations, four input features and one target. Identify the data type of every feature."
        ],
        "codeBlocks": [
          "import pandas as pd data = { \"study_hours\": [2, 4, 6, 8], \"questions\": [10, 25, 40, 60], \"previous_score\": [55, 65, 78, 88], \"final_score\": [58, 69, 84, 93] } df = pd.DataFrame(data) X = df[ [\"study_hours\", \"questions\", \"previous_score\"] ] y = df[\"final_score\"] print(\"Feature matrix:\") print(X) print(\"Target:\") print(y) print(\"Feature shape:\", X.shape) print(\"Target shape:\", y.shape)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1756
  },
  {
    "id": "sec-05",
    "sectionNum": 5,
    "title": "End-to-End Machine Learning Workflow",
    "duration": "1-1.5 hours",
    "partNum": 1,
    "partName": "Part I — Introduction to Machine Learning",
    "tag": "ML Foundations",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[7 Step Machine Learning Pipeline Template - SlideBazaar](https://images.openai.com/static-rsc-4/-6_2k2Ibr3TX3PKirPIW_sNl6jsbaiscQRB6SkQjTP_Lv8SDvxnN_nYWHrqxTN56jl0lg24RgTC8CdHxSyNJ1z1oKDwsO54BPZS9rn3YWKmGhN475YSkSBg4R3VLpUXecWX59MfrSc3p1gf2VoIR9WXfnB9eiWjYuYZbli0i6y8?purpose=inline)",
          "[slidebazaar.com](https://slidebazaar.com/templates/seven-stage-machine-learning-pipeline-powerpoint-google-slides/7-step-machine-learning-pipeline-template/?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.1 The complete workflow",
        "paragraphs": [
          "A typical supervised ML workflow follows these stages:",
          "Problem definition.",
          "Data collection.",
          "Data inspection.",
          "Data preprocessing.",
          "Exploratory data analysis.",
          "Feature engineering.",
          "Train-test splitting.",
          "Model selection.",
          "Model training.",
          "Model evaluation.",
          "Hyperparameter tuning.",
          "Final testing.",
          "Deployment.",
          "Monitoring and maintenance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.2 Problem definition",
        "paragraphs": [
          "Identify what must be predicted and why the prediction is useful."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.3 Data collection",
        "paragraphs": [
          "Gather the relevant historical records.",
          "Sources could include:",
          "Databases.",
          "CSV files.",
          "APIs.",
          "Application activity records.",
          "Public datasets."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.4 Data inspection",
        "paragraphs": [
          "Understand:",
          "Dataset dimensions.",
          "Data types.",
          "Missing values.",
          "Duplicates.",
          "Incorrect observations.",
          "Target distribution."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.5 Data preprocessing",
        "paragraphs": [
          "Typical operations include:",
          "Missing-value imputation.",
          "Categorical encoding.",
          "Numerical scaling.",
          "Outlier investigation.",
          "Data type correction."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.6 Model training",
        "paragraphs": [
          "The algorithm learns parameters using the training dataset."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.7 Evaluation",
        "paragraphs": [
          "Evaluate the model using data that was not used to fit its parameters."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.8 Deployment",
        "paragraphs": [
          "Integrate the model into an application or provide a model-serving API."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.9 Monitoring",
        "paragraphs": [
          "Evaluate whether the model continues to work correctly after deployment.",
          "Case study: Design an ML pipeline for predicting student course completion. Students must draw each stage and describe the data and decisions involved."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1859
  },
  {
    "id": "sec-06",
    "sectionNum": 6,
    "title": "Training, Validation and Testing",
    "duration": "1.5 hours",
    "partNum": 1,
    "partName": "Part I — Introduction to Machine Learning",
    "tag": "ML Foundations",
    "subsections": [
      {
        "title": "6.1 Why split datasets?",
        "paragraphs": [
          "When building an ML model, we need to evaluate whether it can make predictions on data it has never seen.",
          "If we train and evaluate using exactly the same examples, we may obtain an overly optimistic assessment.",
          "The dataset is therefore commonly divided into three parts.",
          "Dataset",
          "Purpose",
          "Training",
          "Fit model parameters",
          "Validation",
          "Choose algorithms, hyperparameters and configurations",
          "Testing",
          "Evaluate the final selected model"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.2 Training dataset",
        "paragraphs": [
          "The training dataset provides examples from which the algorithm learns.",
          "For a regression model:",
          "The algorithm estimates weights and bias using these observations."
        ],
        "codeBlocks": [
          "\\[ X_{\\text{train}},y_{\\text{train}} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.3 Validation dataset",
        "paragraphs": [
          "The validation dataset helps make engineering decisions.",
          "For example, we may compare:",
          "Linear regression.",
          "Polynomial regression.",
          "Ridge regression.",
          "We can use validation performance to choose a suitable model and regularization strength."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.4 Testing dataset",
        "paragraphs": [
          "The test dataset is reserved for final evaluation.",
          "It should not influence model selection, hyperparameter tuning or preprocessing decisions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.5 Typical dataset splitting",
        "paragraphs": [
          "For an illustrative dataset:",
          "70% training.",
          "15% validation.",
          "15% testing.",
          "Other common approaches include:",
          "80% training and 20% testing.",
          "80% development data and 20% testing, with cross-validation inside the development data.",
          "There is no universally correct ratio. The choice depends on dataset size, sampling structure and the task."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.6 Implementing train-test splitting",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.datasets import make_regression from sklearn.model_selection import train_test_split X, y = make_regression( n_samples=1000, n_features=4, noise=15, random_state=42 ) X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.20, random_state=42 ) print(\"Training samples:\", len(X_train)) print(\"Testing samples:\", len(X_test))"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.7 Creating train-validation-test sets",
        "paragraphs": [
          "X_train, X_temp, y_train, y_temp = train_test_split( X, y, test_size=0.30, random_state=42 ) X_val, X_test, y_val, y_test = train_test_split( X_temp, y_temp, test_size=0.50, random_state=42 ) print(\"Train:\", len(X_train)) print(\"Validation:\", len(X_val)) print(\"Test:\", len(X_test))"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.8 Stratified splitting",
        "paragraphs": [
          "In classification, the target classes may be unevenly distributed.",
          "Example:",
          "Class",
          "Number of observations",
          "Not Fraud",
          "9,500",
          "Fraud",
          "500",
          "A random split may produce different class proportions in each partition.",
          "Stratification attempts to preserve class proportions across partitions."
        ],
        "codeBlocks": [
          "from sklearn.datasets import make_classification from sklearn.model_selection import train_test_split X, y = make_classification( n_samples=1000, n_features=8, weights=[0.90, 0.10], random_state=42 ) X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.20, random_state=42, stratify=y ) print(\"Training distribution:\") print(y_train.mean()) print(\"Testing distribution:\") print(y_test.mean())"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.9 Time-series splitting",
        "paragraphs": [
          "Ordinary random splitting is inappropriate for many time-dependent prediction problems.",
          "For example, to predict future sales:",
          "Training: Older observations.",
          "Validation: More recent observations.",
          "Testing: The latest observations.",
          "The model must not use future information to predict the past.",
          "Students will study specialized time-series forecasting later in the course.",
          "Exercise: Split one regression dataset and one imbalanced classification dataset. Compare random and stratified splits."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3422
  },
  {
    "id": "sec-07",
    "sectionNum": 7,
    "title": "Generalization, Overfitting and Underfitting",
    "duration": "1.5 hours",
    "partNum": 1,
    "partName": "Part I — Introduction to Machine Learning",
    "tag": "ML Foundations",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[A Comprehensive Guide to Stratified K-Fold Cross-validation for Unbalanced Data](https://images.openai.com/static-rsc-4/PCRkepvb7PzoS4CH5KescVo15F073FiiecJZfsI3iffFhG670z9ju_bQdJAwvlk5fA6A6Yh1X9rZtrc12JAN6uNxCBC21Rznd7QSQDK9BPfEWlMh1ZJG35cRQlJR9iVvbH9bKk3JsFbzsOprZCQUBNYgeWcFSqqJ4DwVrLU-76c?purpose=inline)",
          "[linkedin.com](https://www.linkedin.com/pulse/comprehensive-guide-stratified-k-fold-unbalanced-data-juan-carlos-n6aee?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.1 What is generalization?",
        "paragraphs": [
          "Generalization is a model's ability to make accurate predictions on new observations drawn from the relevant target distribution.",
          "A model should not simply memorize its training dataset.",
          "It should learn useful patterns that remain predictive on unseen data."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.2 Overfitting",
        "paragraphs": [
          "Overfitting occurs when a model performs very well on training data but poorly on unseen data.",
          "Example:",
          "Metric",
          "Result",
          "Training accuracy",
          "99%",
          "Validation accuracy",
          "72%",
          "Possible reasons:",
          "Model is unnecessarily complex.",
          "Training data is too limited.",
          "Training data contains noise.",
          "Features include leakage.",
          "Train and validation distributions differ."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.3 Underfitting",
        "paragraphs": [
          "Underfitting occurs when a model fails to capture important patterns even in the training data.",
          "Example:",
          "Metric",
          "Result",
          "Training accuracy",
          "60%",
          "Validation accuracy",
          "58%",
          "Possible reasons:",
          "Model is too simple.",
          "Important features are missing.",
          "Training is insufficient.",
          "The chosen model cannot represent the underlying relationship."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.4 Good generalization",
        "paragraphs": [
          "A useful model performs reasonably well across training and validation data.",
          "The goal is not necessarily to maximize training performance. It is to build a model that generalizes well."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.5 Bias-variance tradeoff",
        "paragraphs": [
          "Bias: Error arising from restrictive assumptions or insufficient model flexibility.",
          "Variance: Error resulting from sensitivity to the particular training dataset.",
          "A simple model may have high bias and low variance.",
          "A very complex model may have low training error but high variance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.6 Demonstration using polynomial regression",
        "paragraphs": [
          "Students should compare the models:",
          "Degree 1 may underfit the quadratic relationship.",
          "Degree 2 can represent the underlying pattern.",
          "Degree 15 may fit random fluctuations depending on the data and sample."
        ],
        "codeBlocks": [
          "import numpy as np import matplotlib.pyplot as plt from sklearn.pipeline import make_pipeline from sklearn.preprocessing import PolynomialFeatures from sklearn.linear_model import LinearRegression rng = np.random.default_rng(42) X = np.linspace(-3, 3, 40).reshape(-1, 1) y = 2 * X.ravel()**2 + X.ravel() + rng.normal( 0, 2, len(X) ) degrees = [1, 2, 15] plt.scatter(X, y) for degree in degrees: model = make_pipeline( PolynomialFeatures(degree), LinearRegression() ) model.fit(X, y) x_plot = np.linspace(-3, 3, 200).reshape(-1, 1) y_plot = model.predict(x_plot) plt.plot( x_plot, y_plot, label=f\"Degree {degree}\" ) plt.legend() plt.title(\"Underfitting and Model Complexity\") plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.7 Methods to reduce overfitting",
        "paragraphs": [
          "Collect more representative training data.",
          "Reduce model complexity.",
          "Use regularization.",
          "Perform feature selection.",
          "Use cross-validation.",
          "Apply suitable data augmentation where appropriate.",
          "Stop overly long iterative training when validation performance begins to deteriorate.",
          "Prevent data leakage.",
          "Google's ML course explains that a model should be assessed on unseen data rather than relying on training performance alone.",
          "Google for Developers+1",
          "Exercise: Train models with different complexity levels and explain the differences between their training and validation performance.",
          "PART II — SUPERVISED MACHINE LEARNING",
          "[Learn Types of Machine Learning | Machine Learning Concepts](https://images.openai.com/static-rsc-4/UhYFVwMko1kb-kvUIePswAiwGmO2NTyyxD5249cZUO3OUARKVbZZP0GEqtjQlB5t4f0lwfr0haR-Eh8WUuYPkuvwdcFjA-qmTwXnYhncLIckQE-Kl3VfbH0bGYZpTZjjkDBBx_iaR7Ae1cIh9LmTWw5i5W4TDu7CDWszIZ9UzM8?purpose=inline)",
          "[codefinity.com](https://codefinity.com/courses/v2/a65bbc96-309e-4df9-a790-a1eb8c815a1c/d7c3c2cd-8cd0-4572-90df-64edaeefe42e/98249160-c222-423b-b5d3-f0f7257f92cb?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 4049
  },
  {
    "id": "sec-08",
    "sectionNum": 8,
    "title": "Introduction to Supervised Learning",
    "duration": "1 hour",
    "partNum": 2,
    "partName": "Part II — Supervised Machine Learning (Regression)",
    "tag": "Regression",
    "subsections": [
      {
        "title": "8.1 How supervised learning works",
        "paragraphs": [
          "Supervised learning uses examples with known target values.",
          "A dataset contains:",
          "The objective is to learn a model \\(f\\) that maps input features to target values."
        ],
        "codeBlocks": [
          "\\[ D=\\{(x_1,y_1),(x_2,y_2),\\ldots,(x_n,y_n)\\} \\]",
          "\\[ \\hat y=f(x) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.2 Regression vs classification",
        "paragraphs": [
          "[Linear Regression — Mathematical intuition and Python implementation | by Rohan Paris | Medium](https://images.openai.com/static-rsc-4/uv6jnf5OwXI_imbMEDsjJz45D5z2sJaRRTPyFkHLAxaQQg5r3wXEEHvFivja1_aClpGr0VDLCXqT__zIPshc5OGHXEEtu1ypR3q8D1aBOjrJ5o-3WNKyu217cVJTCTVZBbxVVVl8W8TzPawkdjcsKPT5HOVVmpFfOiPH-G3-LLI?purpose=inline)",
          "Regression",
          "Predict a continuous numerical value.",
          "[Linear Two-Class Classification | EE499](https://images.openai.com/static-rsc-4/1d9T2Py7Su6P_RJ55iUDOHr6rf75-6TaRaRRkG0wLTUJtrYhPCylmCc_3koK8peymVeYcLx-3fPMftqJ9oSg21ZiZFSl7Uavb5yaHUncUUgfIgZpZ1O7sQ_BMuVP8gTRBSpoQnrVmjOy4kG1yI3in8jgVMSrBmORtxJujeDWKAg?purpose=inline)",
          "Classification",
          "Predict a discrete category."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.3 Examples",
        "paragraphs": [
          "Regression:",
          "House price estimation.",
          "Sales prediction.",
          "Temperature prediction.",
          "Delivery time estimation.",
          "Classification:",
          "Spam detection.",
          "Fraud detection.",
          "Churn prediction.",
          "Image category prediction."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.4 Baseline models",
        "paragraphs": [
          "Before building a sophisticated model, establish a baseline.",
          "A baseline helps determine whether a new algorithm provides meaningful improvement over a simple reference.",
          "For example, a regression baseline could always predict the training target mean.",
          "A classification baseline could always predict the most frequent class.",
          "Python:",
          "Practical: Build a baseline regression model and a baseline classification model. Record their evaluation metrics for comparison with later algorithms."
        ],
        "codeBlocks": [
          "from sklearn.dummy import DummyClassifier, DummyRegressor regression_baseline = DummyRegressor( strategy=\"mean\" ) classification_baseline = DummyClassifier( strategy=\"most_frequent\" )"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1903
  },
  {
    "id": "sec-09",
    "sectionNum": 9,
    "title": "Linear Regression",
    "duration": "2 hours",
    "partNum": 2,
    "partName": "Part II — Supervised Machine Learning (Regression)",
    "tag": "Regression",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Machine Learning Part 1: Linear Regression in Python | by Soham Phanse | Medium](https://images.openai.com/static-rsc-4/w8Hr-c_gE0qc3ZgC-X6maR2lpijhgqQmrCySz8ISA_rTy8dMlQJ5nhirSRFk-sMZTq1QcojK1zVOrjjYdkplYNZgnHb4f-qhL6MWI6vHuOxczbdMN37pA044lUv41pYW5XDV1P2wtuMGzyNFujrsRUudxq1tKy-_-S4vG8cJYgE?purpose=inline)",
          "[medium.com](https://medium.com/%40soham.phanse/machine-learning-part-1-linear-regression-in-python-646d6a252d25?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.1 What is linear regression?",
        "paragraphs": [
          "Linear regression is a supervised learning algorithm used to predict continuous numerical targets.",
          "It estimates a linear relationship between input features and the target variable.",
          "For one feature:",
          "Where:"
        ],
        "codeBlocks": [
          "\\[ \\boxed{\\hat y=wx+b} \\]",
          "\\(x\\): Input feature.",
          "\\(w\\): Weight or coefficient.",
          "\\(b\\): Intercept.",
          "\\(\\hat y\\): Predicted output."
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.2 Understanding the slope",
        "paragraphs": [
          "Suppose:",
          "The slope is 5.",
          "For every one-unit increase in \\(x\\), the model prediction increases by 5 units, assuming the same model and units."
        ],
        "codeBlocks": [
          "\\[ \\hat y=5x+20 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.3 Understanding the intercept",
        "paragraphs": [
          "The intercept is the predicted value when:",
          "In the example:",
          "The intercept may be meaningful or merely a mathematical extrapolation, depending on the dataset."
        ],
        "codeBlocks": [
          "\\[ x=0 \\]",
          "\\[ \\hat y=5(0)+20=20 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.4 Residuals",
        "paragraphs": [
          "A residual is the difference between the actual target and the model prediction.",
          "Example:",
          "Actual:",
          "Predicted:",
          "Residual:",
          "A positive residual means the actual observation is above the prediction."
        ],
        "codeBlocks": [
          "\\[ e_i=y_i-\\hat y_i \\]",
          "\\[ y=70 \\]",
          "\\[ \\hat y=65 \\]",
          "\\[ e=5 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.5 Ordinary Least Squares",
        "paragraphs": [
          "Ordinary Least Squares estimates the coefficients by minimizing the sum of squared residuals.",
          "This is closely related to the MSE loss studied in Module 02.",
          "Scikit-learn's LinearRegression uses the ordinary least-squares approach to fit coefficients by minimizing residual sum of squares.",
          "scikit-learn 1.9.1 documentation+1"
        ],
        "codeBlocks": [
          "\\[ \\boxed{ J(w,b)= \\frac{1}{n} \\sum_{i=1}^{n} (y_i-(wx_i+b))^2 } \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.6 Worked example",
        "paragraphs": [
          "Suppose:",
          "Study hours",
          "Actual score",
          "1",
          "35",
          "2",
          "42",
          "3",
          "49",
          "4",
          "56",
          "5",
          "63",
          "The relationship is:",
          "For a student studying 6 hours:"
        ],
        "codeBlocks": [
          "\\[ y=7x+28 \\]",
          "\\[ \\hat y=7(6)+28 \\]",
          "\\[ \\hat y=70 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.7 Linear regression from scratch",
        "paragraphs": [
          "This code demonstrates the mathematical learning process using gradient descent, including the calculation of both parameter gradients."
        ],
        "codeBlocks": [
          "import numpy as np X = np.array([1, 2, 3, 4, 5], dtype=float) y = np.array([35, 42, 49, 56, 63], dtype=float) w = 0.0 b = 0.0 learning_rate = 0.01 epochs = 3000 n = len(X) for epoch in range(epochs): predictions = w * X + b errors = predictions - y dw = (2 / n) * np.sum(errors * X) db = (2 / n) * np.sum(errors) w -= learning_rate * dw b -= learning_rate * db print(\"Weight:\", w) print(\"Bias:\", b) new_prediction = w * 6 + b print(\"Prediction:\", new_prediction)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.8 Linear regression using Scikit-learn",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as np from sklearn.linear_model import LinearRegression X = np.array([ [1], [2], [3], [4], [5] ]) y = np.array([35, 42, 49, 56, 63]) model = LinearRegression() model.fit(X, y) print(\"Coefficient:\", model.coef_) print(\"Intercept:\", model.intercept_) prediction = model.predict([[6]]) print(\"Predicted score:\", prediction)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.9 Understanding model attributes",
        "paragraphs": [
          "fit() learns model parameters.",
          "predict() generates predictions.",
          "coef_ provides fitted coefficients.",
          "intercept_ provides the fitted intercept."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.10 Important assumptions and limitations",
        "paragraphs": [
          "Students should understand the commonly used linear regression assumptions:",
          "The mean response is appropriately represented by a linear model in the selected features.",
          "Observations and errors satisfy the independence assumptions relevant to the design.",
          "Error variance is constant under the classical homoscedastic model.",
          "Residual distribution assumptions matter for certain forms of statistical inference.",
          "Multicollinearity can make coefficient estimates unstable.",
          "These assumptions are context-dependent; prediction can sometimes remain useful even when classical inference assumptions are not fully satisfied.",
          "Lab: Implement linear regression from scratch and with Scikit-learn. Compare the coefficients, predictions and residuals."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 4072
  },
  {
    "id": "sec-10",
    "sectionNum": 10,
    "title": "Multiple Linear Regression",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Supervised Machine Learning (Regression)",
    "tag": "Regression",
    "subsections": [
      {
        "title": "10.1 What is multiple linear regression?",
        "paragraphs": [
          "Simple linear regression uses one input feature.",
          "Multiple linear regression uses multiple input features to predict one continuous target.",
          "Example: Predict house prices using:",
          "House area.",
          "Number of bedrooms.",
          "Building age.",
          "Distance from the city."
        ],
        "codeBlocks": [
          "\\[ \\boxed{ \\hat y=w_1x_1+w_2x_2+\\cdots+w_px_p+b } \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.2 Matrix representation",
        "paragraphs": [
          "Where:"
        ],
        "codeBlocks": [
          "\\[ \\hat Y=XW+b \\]",
          "\\(X\\): Feature matrix.",
          "\\(W\\): Weight vector.",
          "\\(b\\): Intercept.",
          "\\(\\hat Y\\): Predicted values."
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.3 Understanding coefficients",
        "paragraphs": [
          "Suppose:",
          "Holding the other inputs constant:",
          "A one-unit increase in \\(x_1\\) changes the prediction by 3.",
          "A one-unit increase in \\(x_2\\) changes the prediction by 5.",
          "A one-unit increase in \\(x_3\\) changes the prediction by 2.",
          "Coefficient interpretation depends on feature units and the model assumptions."
        ],
        "codeBlocks": [
          "\\[ \\hat y=3x_1+5x_2+2x_3+10 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.4 Python implementation",
        "paragraphs": [
          "The tiny dataset is a teaching example; it is not enough to establish a reliable real-estate pricing system."
        ],
        "codeBlocks": [
          "import numpy as np from sklearn.linear_model import LinearRegression X = np.array([ [800, 2, 10], [1000, 2, 8], [1200, 3, 6], [1500, 3, 5], [1800, 4, 3] ]) y = np.array([35, 42, 55, 68, 85]) model = LinearRegression() model.fit(X, y) print(\"Weights:\", model.coef_) print(\"Bias:\", model.intercept_) prediction = model.predict([ [1400, 3, 5] ]) print(\"Predicted price:\", prediction)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.5 Multicollinearity",
        "paragraphs": [
          "Multicollinearity occurs when input features are strongly linearly related.",
          "Example:",
          "House area in square feet.",
          "House area in square metres.",
          "These contain nearly identical information.",
          "High multicollinearity can make individual regression coefficients unstable and difficult to interpret."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.6 Feature correlation",
        "paragraphs": [],
        "codeBlocks": [
          "import pandas as pd df = pd.DataFrame( X, columns=[\"area\", \"bedrooms\", \"building_age\"] ) print(df.corr())"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.7 Practical applications",
        "paragraphs": [
          "House price prediction.",
          "Revenue forecasting.",
          "Energy consumption prediction.",
          "Demand prediction.",
          "Student score estimation.",
          "Assignment: Build a multiple regression model with at least three features, inspect coefficients and explain their interpretations and limitations."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 2133
  },
  {
    "id": "sec-11",
    "sectionNum": 11,
    "title": "Polynomial Regression",
    "duration": "1 hour",
    "partNum": 2,
    "partName": "Part II — Supervised Machine Learning (Regression)",
    "tag": "Regression",
    "subsections": [
      {
        "title": "11.1 What is polynomial regression?",
        "paragraphs": [
          "Polynomial regression extends a linear model by constructing polynomial features.",
          "For example:",
          "The relationship between the original input and target can now be curved."
        ],
        "codeBlocks": [
          "\\[ \\hat y=b+w_1x+w_2x^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.2 Second-degree polynomial",
        "paragraphs": [],
        "codeBlocks": [
          "\\[ \\hat y=b+w_1x+w_2x^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.3 Third-degree polynomial",
        "paragraphs": [
          "Increasing polynomial degree increases model flexibility but can also increase overfitting."
        ],
        "codeBlocks": [
          "\\[ \\hat y=b+w_1x+w_2x^2+w_3x^3 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.4 Feature transformation",
        "paragraphs": [
          "For an input:",
          "Second-degree transformation:",
          "This creates an expanded feature representation."
        ],
        "codeBlocks": [
          "\\[ x=2 \\]",
          "\\[ [1,x,x^2]=[1,2,4] \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.5 Scikit-learn implementation",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as np import matplotlib.pyplot as plt from sklearn.pipeline import make_pipeline from sklearn.preprocessing import PolynomialFeatures from sklearn.linear_model import LinearRegression X = np.array([ [1], [2], [3], [4], [5], [6] ]) y = np.array([3, 7, 13, 21, 31, 43]) model = make_pipeline( PolynomialFeatures(degree=2), LinearRegression() ) model.fit(X, y) predictions = model.predict(X) print(predictions) plt.scatter(X, y, label=\"Actual\") plt.plot(X, predictions, label=\"Predicted\") plt.legend() plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.6 Important considerations",
        "paragraphs": [
          "Polynomial regression is still linear in the fitted coefficients.",
          "It is not the same as a neural network.",
          "Students should compare:",
          "Linear models.",
          "Polynomial feature models.",
          "Training error.",
          "Validation error.",
          "Exercise: Fit polynomial models of degrees 1, 2, 3 and 10 to the same dataset. Explain the changes in fit and generalization."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1540
  },
  {
    "id": "sec-12",
    "sectionNum": 12,
    "title": "Regression Regularization: Ridge, Lasso and Elastic Net",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Supervised Machine Learning (Regression)",
    "tag": "Regression",
    "subsections": [
      {
        "title": "12.1 Why regularization?",
        "paragraphs": [
          "Ordinary linear regression can become sensitive to noisy data, correlated features and high model complexity.",
          "Regularization introduces a penalty on model coefficients."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.2 Ridge regression",
        "paragraphs": [
          "Ridge adds an L2 penalty.",
          "Effects:",
          "Penalizes large coefficients.",
          "Encourages smaller weights.",
          "Can reduce coefficient instability.",
          "Generally keeps all features unless coefficients become very small."
        ],
        "codeBlocks": [
          "\\[ J(w)= \\sum_{i=1}^{n}(y_i-\\hat y_i)^2 + \\lambda\\sum_{j=1}^{p}w_j^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.3 Lasso regression",
        "paragraphs": [
          "Lasso uses an L1 penalty.",
          "Effects:",
          "Encourages sparse coefficients.",
          "Can set some coefficients exactly to zero.",
          "Can perform a form of feature selection."
        ],
        "codeBlocks": [
          "\\[ J(w)= \\sum_{i=1}^{n}(y_i-\\hat y_i)^2 + \\lambda\\sum_{j=1}^{p}|w_j| \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.4 Elastic Net",
        "paragraphs": [
          "Elastic Net combines L1 and L2 regularization.",
          "It combines sparsity and coefficient shrinkage."
        ],
        "codeBlocks": [
          "\\[ J(w)= MSE+ \\lambda_1\\sum_j|w_j| + \\lambda_2\\sum_jw_j^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.5 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.datasets import make_regression from sklearn.model_selection import train_test_split from sklearn.preprocessing import StandardScaler from sklearn.pipeline import make_pipeline from sklearn.linear_model import ( LinearRegression, Ridge, Lasso, ElasticNet ) X, y = make_regression( n_samples=500, n_features=10, noise=25, random_state=42 ) X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, random_state=42 ) models = { \"Linear\": LinearRegression(), \"Ridge\": Ridge(alpha=1.0), \"Lasso\": Lasso(alpha=1.0), \"ElasticNet\": ElasticNet(alpha=1.0) } for name, estimator in models.items(): model = make_pipeline( StandardScaler(), estimator ) model.fit(X_train, y_train) print(name, model.score(X_test, y_test))"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.6 Understanding alpha",
        "paragraphs": [
          "In Scikit-learn, alpha controls regularization strength for Ridge, Lasso and Elastic Net.",
          "A larger penalty usually shrinks the coefficients more strongly.",
          "Students should experiment with multiple alpha values rather than choosing one arbitrarily.",
          "Scikit-learn's linear-model documentation explains the objectives and practical trade-offs of ordinary least squares, Ridge, Lasso and related estimators.",
          "scikit-learn 1.9.1 documentation+1",
          "Lab: Compare Linear Regression, Ridge, Lasso and Elastic Net on the same dataset. Examine prediction performance and learned coefficients."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2294
  },
  {
    "id": "sec-13",
    "sectionNum": 13,
    "title": "Regression Model Evaluation",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Supervised Machine Learning (Regression)",
    "tag": "Regression",
    "subsections": [
      {
        "title": "13.1 Why evaluate a regression model?",
        "paragraphs": [
          "A model may generate predictions, but we need to quantify how close those predictions are to actual values."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "13.2 Mean Absolute Error",
        "paragraphs": [
          "Interpretation: Average absolute prediction error in the target's units."
        ],
        "codeBlocks": [
          "\\[ MAE=\\frac1n\\sum_{i=1}^{n}|y_i-\\hat y_i| \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "13.3 Mean Squared Error",
        "paragraphs": [
          "Larger errors are penalized more heavily because the residuals are squared."
        ],
        "codeBlocks": [
          "\\[ MSE=\\frac1n\\sum_{i=1}^{n}(y_i-\\hat y_i)^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "13.4 Root Mean Squared Error",
        "paragraphs": [
          "RMSE is expressed in the target's original units."
        ],
        "codeBlocks": [
          "\\[ RMSE=\\sqrt{MSE} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "13.5 R-squared",
        "paragraphs": [
          "It compares model residual error with the error from predicting the target mean.",
          "An \\(R^2\\) of 1 represents perfect predictions on the evaluated data.",
          "An \\(R^2\\) of 0 means the model performs equal to the target-mean baseline under this definition.",
          "It can be negative on evaluation data when the model performs worse than the mean baseline."
        ],
        "codeBlocks": [
          "\\[ R^2= 1- \\frac{\\sum_i(y_i-\\hat y_i)^2} {\\sum_i(y_i-\\bar y)^2} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "13.6 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.metrics import ( mean_absolute_error, mean_squared_error, r2_score ) actual = [50, 60, 70, 80, 90] predicted = [52, 58, 72, 78, 95] mae = mean_absolute_error(actual, predicted) mse = mean_squared_error(actual, predicted) rmse = mse ** 0.5 r2 = r2_score(actual, predicted) print(\"MAE:\", mae) print(\"MSE:\", mse) print(\"RMSE:\", rmse) print(\"R2:\", r2)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "13.7 Selecting the correct metric",
        "paragraphs": [
          "Metric",
          "What it measures",
          "When useful",
          "MAE",
          "Average absolute error",
          "Interpretable average error",
          "MSE",
          "Average squared error",
          "Penalizing large deviations",
          "RMSE",
          "Square-root squared error",
          "Original target units, stronger large-error sensitivity",
          "Relative fit to mean baseline",
          "Comparing explained variation against a baseline",
          "Practical: Evaluate a house-price regression model using all four metrics. Explain why the metrics may give different impressions of model quality.",
          "PART III — CLASSIFICATION ALGORITHMS",
          "[ML06: Intro to Multi-class Classification | by Vaibhav Malhotra | Analytics Vidhya | Medium](https://images.openai.com/static-rsc-4/Pcgb2vw04FXSB6b8eF-9JKFi7FHp4nAChhC3ycFN2EXX1KAuFQs_7B8hMebNgxkEU5ydmgJjpHCuH5v3lMgriEXHJ4Mzf98_3AMKnppMq0x5FvGjqUcgCAwgkoXDrH2h8uBsPOyRfyi07y5gFUwJk3aFBbbgjHBReq-Q5PtoS8g?purpose=inline)",
          "[medium.com](https://medium.com/analytics-vidhya/ml06-intro-to-multi-class-classification-e61eb7492ffd?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [
          "\\(R^2\\)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2361
  },
  {
    "id": "sec-14",
    "sectionNum": 14,
    "title": "Introduction to Classification",
    "duration": "1 hour",
    "partNum": 3,
    "partName": "Part III — Classification Algorithms",
    "tag": "Classification",
    "subsections": [
      {
        "title": "14.1 What is classification?",
        "paragraphs": [
          "Classification is a supervised Machine Learning task in which the target is a category rather than a continuous numerical value.",
          "Examples:",
          "Spam vs not spam.",
          "Fraud vs legitimate transaction.",
          "Active vs inactive customer.",
          "Pass vs fail.",
          "Cat, dog or bird."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "14.2 Types of classification",
        "paragraphs": [
          "A. Binary classification",
          "Exactly two target classes.",
          "Example:",
          "B. Multiclass classification",
          "More than two mutually exclusive classes.",
          "Example:",
          "C. Multilabel classification",
          "One observation may belong to multiple labels simultaneously.",
          "Example:",
          "A photograph may contain:",
          "Person.",
          "Vehicle.",
          "Building.",
          "Animal.",
          "The model can assign multiple labels to the same image."
        ],
        "codeBlocks": [
          "\\[ y\\in\\{0,1\\} \\]",
          "\\[ y\\in\\{\\text{Low, Medium, High}\\} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "14.3 Classification pipeline",
        "paragraphs": [
          "Input Features ↓ Preprocessing ↓ Classification Algorithm ↓ Prediction Scores / Probabilities ↓ Decision Threshold ↓ Predicted Category"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "14.4 Classification example",
        "paragraphs": [
          "Suppose a model predicts the probability that an email is spam:",
          "If the classification threshold is 0.5:",
          "The predicted category is Spam.",
          "The threshold is a model decision setting, not necessarily a universal 0.5 requirement.",
          "Exercise: Identify whether 15 real-world problems are regression, binary classification, multiclass classification or multilabel classification."
        ],
        "codeBlocks": [
          "\\[ P(\\text{spam}|x)=0.87 \\]",
          "\\[ 0.87\\geq0.5 \\]"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1355
  },
  {
    "id": "sec-15",
    "sectionNum": 15,
    "title": "Logistic Regression",
    "duration": "2 hours",
    "partNum": 3,
    "partName": "Part III — Classification Algorithms",
    "tag": "Classification",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Logistic Regression: Complete Guide with Mathematical Foundations & Python Implementation - Interactive | Michael Brenndoerfer | Michael Brenndoerfer](https://images.openai.com/static-rsc-4/8D9v-pfI9pWqWsgn_p0cacAgq4pqQnmfsFGiVCOFN2lpTF0gb75qMMoJD99JotQmSZO17c108MuyZevDKmf-5RFKJ0zNjlmIejngBPhkr9ss6R4LG5VLR9MGaruR1L-SSVDtctGloE-xnhiFO7gRi0doWPCU1xTwo4UIfKI-ILI?purpose=inline)",
          "[mbrenndoerfer.com](https://mbrenndoerfer.com/writing/logistic-regression-complete-guide-mathematical-foundations-python-implementation?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.1 What is logistic regression?",
        "paragraphs": [
          "Despite its name, Logistic Regression is primarily a classification algorithm.",
          "It models the probability of a categorical outcome using a logistic function.",
          "For binary classification, the model begins with a linear combination:",
          "It transforms this value into a probability using the sigmoid function."
        ],
        "codeBlocks": [
          "\\[ z=w_1x_1+w_2x_2+\\cdots+w_nx_n+b \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.2 Sigmoid function",
        "paragraphs": [
          "The sigmoid maps real-valued inputs into the interval:",
          "Examples:",
          "Approximate probability",
          "-3",
          "0.047",
          "-2",
          "0.119",
          "-1",
          "0.269",
          "0",
          "0.500",
          "1",
          "0.731",
          "2",
          "0.881",
          "3",
          "0.953"
        ],
        "codeBlocks": [
          "\\[ \\boxed{ \\sigma(z)=\\frac{1}{1+e^{-z}} } \\]",
          "\\[ 0<\\sigma(z)<1 \\]",
          "\\(z\\)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.3 Understanding the prediction",
        "paragraphs": [
          "Suppose:",
          "Then:",
          "The model estimates an 88.1% probability for the positive class."
        ],
        "codeBlocks": [
          "\\[ z=2 \\]",
          "\\[ P(y=1|x)=\\frac1{1+e^{-2}} \\]",
          "\\[ P(y=1|x)\\approx0.881 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.4 Probability to class",
        "paragraphs": [
          "At a threshold of 0.5:",
          "Changing the threshold changes the balance between false positives and false negatives."
        ],
        "codeBlocks": [
          "\\[ \\hat y= \\begin{cases} 1 & p\\geq0.5\\\\ 0 & p<0.5 \\end{cases} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.5 Log-odds and logistic regression",
        "paragraphs": [
          "Logistic regression models the log-odds as a linear combination of features.",
          "This is called the logit function."
        ],
        "codeBlocks": [
          "\\[ \\log\\left(\\frac{p}{1-p}\\right) =w^Tx+b \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.6 Binary cross-entropy",
        "paragraphs": [
          "Logistic regression commonly minimizes binary log loss:",
          "This objective penalizes predictions that assign low probabilities to the true class."
        ],
        "codeBlocks": [
          "\\[ J(w,b)= -\\frac1n \\sum_{i=1}^{n} \\left[ y_i\\log(p_i) +(1-y_i)\\log(1-p_i) \\right] \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.7 Implementation from scratch",
        "paragraphs": [
          "This is a basic educational implementation using unregularized gradient descent. Real projects should use suitable validation, stable numerical methods and regularization."
        ],
        "codeBlocks": [
          "import numpy as np def sigmoid(z): z = np.clip(z, -500, 500) return 1 / (1 + np.exp(-z)) X = np.array([ [1, 2], [2, 3], [3, 3], [5, 5], [6, 7], [7, 8] ], dtype=float) y = np.array([0, 0, 0, 1, 1, 1], dtype=float) weights = np.zeros(X.shape[1]) bias = 0.0 learning_rate = 0.1 epochs = 2000 n = len(y) for epoch in range(epochs): z = X @ weights + bias probabilities = sigmoid(z) errors = probabilities - y dw = (X.T @ errors) / n db = np.mean(errors) weights -= learning_rate * dw bias -= learning_rate * db new_sample = np.array([[4, 5]]) probability = sigmoid( new_sample @ weights + bias ) prediction = (probability >= 0.5).astype(int) print(\"Probability:\", probability) print(\"Class:\", prediction)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.8 Scikit-learn implementation",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.datasets import make_classification from sklearn.model_selection import train_test_split from sklearn.linear_model import LogisticRegression from sklearn.preprocessing import StandardScaler from sklearn.pipeline import make_pipeline X, y = make_classification( n_samples=1000, n_features=6, random_state=42 ) X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, random_state=42, stratify=y ) model = make_pipeline( StandardScaler(), LogisticRegression(max_iter=1000) ) model.fit(X_train, y_train) predictions = model.predict(X_test) probabilities = model.predict_proba(X_test) print(\"Predictions:\", predictions[:10]) print(\"Probabilities:\", probabilities[:10])"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.9 Understanding the results",
        "paragraphs": [
          "predict() returns predicted classes.",
          "predict_proba() returns class probabilities.",
          "coef_ inside the final logistic regression estimator contains learned coefficients.",
          "intercept_ contains the fitted bias."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.10 Applications",
        "paragraphs": [
          "Email spam filtering.",
          "Customer churn prediction.",
          "Loan default classification.",
          "Fraud detection.",
          "Course completion prediction.",
          "Lab: Build a logistic regression model and experiment with different classification thresholds.",
          "Scikit-learn documents Logistic Regression as a regularized classification model that can estimate binary and multiclass probabilities.",
          "scikit-learn 1.9.1 documentation+1"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 4288
  },
  {
    "id": "sec-16",
    "sectionNum": 16,
    "title": "Binary and Multiclass Classification",
    "duration": "1-1.5 hours",
    "partNum": 3,
    "partName": "Part III — Classification Algorithms",
    "tag": "Classification",
    "subsections": [
      {
        "title": "16.1 Understanding binary classification",
        "paragraphs": [
          "Binary classification has two possible outcomes.",
          "Example:",
          "For predicting course completion:",
          "0 = Did not complete.",
          "1 = Completed."
        ],
        "codeBlocks": [
          "\\[ y\\in\\{0,1\\} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "16.2 Multiclass classification",
        "paragraphs": [
          "Suppose students are classified into:",
          "Beginner.",
          "Intermediate.",
          "Advanced.",
          "The model can estimate a probability for each class.",
          "Example:",
          "Class",
          "Predicted probability",
          "Beginner",
          "0.10",
          "Intermediate",
          "0.25",
          "Advanced",
          "0.65",
          "The predicted class is Advanced because it has the highest estimated probability."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "16.3 Softmax function",
        "paragraphs": [
          "For multiclass classification, a common probability transformation is softmax.",
          "Where:",
          "The resulting probabilities sum to 1."
        ],
        "codeBlocks": [
          "\\[ P(y=k|x)= \\frac{e^{z_k}} {\\sum_{j=1}^{K}e^{z_j}} \\]",
          "\\(z_k\\) is the score for class \\(k\\).",
          "\\(K\\) is the number of classes."
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "16.4 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as np def softmax(values): shifted = values - np.max(values) exp_values = np.exp(shifted) return exp_values / np.sum(exp_values) scores = np.array([2.0, 1.0, 0.5]) probabilities = softmax(scores) print(probabilities) print(\"Total:\", probabilities.sum())"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "16.5 Handling multiple classes",
        "paragraphs": [
          "Scikit-learn supports multiple multiclass strategies, including multinomial logistic regression and one-vs-rest approaches.",
          "Students should understand:",
          "One-vs-rest classification.",
          "Multinomial classification.",
          "Class probabilities.",
          "Class imbalance.",
          "Per-class metrics.",
          "Exercise: Build a three-class classifier and inspect the probability assigned to each class."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1462
  },
  {
    "id": "sec-17",
    "sectionNum": 17,
    "title": "K-Nearest Neighbors (KNN)",
    "duration": "1 hour",
    "partNum": 3,
    "partName": "Part III — Classification Algorithms",
    "tag": "Classification",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[K-Nearest Neighbors (KNN): A Simple Yet Powerful Machine Learning Algorithm | by SamriddhiRuhela | Medium](https://images.openai.com/static-rsc-4/-UxuLGqx3F4IE4CFtz2MBhNlq5tNtY98hggMQbLO19QRdY5RfG5ZJ55iRNjG9VPDm1L1vVsQ8h4BdbhUw0HJITBhjbjxl4KdrH_AzCLyTy_sVlbze_M1nYkPoaIiQwiIDfr7GZCjPPeST4Ubd1kgYHzfuWYp-unUPbJKlIq-WUQ?purpose=inline)",
          "[medium.com](https://medium.com/%40ruhelasamridhi/k-nearest-neighbors-knn-a-simple-yet-powerful-machine-learning-algorithm-c3a3bd83057a?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.1 What is KNN?",
        "paragraphs": [
          "K-Nearest Neighbors is a supervised learning algorithm that predicts an output using the labels or values of nearby training observations.",
          "It is called an instance-based or non-parametric learning approach."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.2 How KNN works",
        "paragraphs": [
          "Suppose a new observation is submitted.",
          "Calculate its distance from training examples.",
          "Identify the nearest \\(k\\) observations.",
          "Examine their target labels.",
          "Predict the majority class."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.3 Understanding k",
        "paragraphs": [
          "If:",
          "The algorithm examines three nearest observations.",
          "If:",
          "It examines five nearest observations.",
          "The value of \\(k\\) affects the smoothness and sensitivity of the classification boundary."
        ],
        "codeBlocks": [
          "\\[ k=3 \\]",
          "\\[ k=5 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.4 Distance calculation",
        "paragraphs": [
          "Euclidean distance:",
          "Example:"
        ],
        "codeBlocks": [
          "\\[ d(x,y)= \\sqrt{ \\sum_{i=1}^{n}(x_i-y_i)^2 } \\]",
          "\\[ x=[2,3] \\]",
          "\\[ y=[5,7] \\]",
          "\\[ d=\\sqrt{(5-2)^2+(7-3)^2} \\]",
          "\\[ d=5 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.5 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as np from sklearn.datasets import load_iris from sklearn.model_selection import train_test_split from sklearn.preprocessing import StandardScaler from sklearn.neighbors import KNeighborsClassifier from sklearn.pipeline import make_pipeline from sklearn.metrics import accuracy_score iris = load_iris() X = iris.data y = iris.target X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, random_state=42, stratify=y ) model = make_pipeline( StandardScaler(), KNeighborsClassifier(n_neighbors=5) ) model.fit(X_train, y_train) predictions = model.predict(X_test) print( \"Accuracy:\", accuracy_score(y_test, predictions) )"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.6 Feature scaling in KNN",
        "paragraphs": [
          "Suppose one feature represents age from 18–60 and another represents salary from 10,000–1,000,000.",
          "The salary feature may dominate raw distance calculations simply because of its scale.",
          "Standardization can help make features more comparable."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.7 Advantages and limitations",
        "paragraphs": [
          "Advantages:",
          "Simple to understand.",
          "Minimal training-time computation.",
          "Can model nonlinear decision boundaries.",
          "Limitations:",
          "Prediction can be slow on large datasets.",
          "Sensitive to feature scaling.",
          "Sensitive to irrelevant features.",
          "Performance depends on the choice of \\(k\\) and distance metric.",
          "Lab: Test KNN with \\(k=1,3,5,7,9\\). Compare their validation results."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2691
  },
  {
    "id": "sec-18",
    "sectionNum": 18,
    "title": "Decision Trees",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — Classification Algorithms",
    "tag": "Classification",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Decision Trees for Dummies. Decision trees are one of the most… | by Tanvi Penumudy | Analytics Vidhya | Medium](https://images.openai.com/static-rsc-4/meI6ZJzdjd0g9Grj1kZSonDxqPIWUlN9cf8KvtcqaraM1U6If1Cyn-NDBJj6Cjg1pQ2zy6yIWaraVj12QSKPnwPvKtjwafFmC9dYTDfZAONn6-c28h9plHINlItMalVNFMxWdeBVBkr-ayPhM5d2LPfvnjSq88ZZNJdRrxAyKqQ?purpose=inline)",
          "[medium.com](https://medium.com/analytics-vidhya/decision-trees-for-dummies-a8e3c00c5e2e?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.1 What is a decision tree?",
        "paragraphs": [
          "A Decision Tree is a supervised algorithm that divides data into groups using a sequence of feature-based decision rules.",
          "It can be used for both regression and classification.",
          "Example:",
          "A platform wants to predict whether a student needs additional academic support.",
          "Score < 40? / \\ Yes No / \\ Needs Support Attendance < 60? / \\ Yes No / \\ Review No Review",
          "This is an illustrative decision tree."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.2 Tree terminology",
        "paragraphs": [
          "Root node: First decision.",
          "Internal node: A feature-based decision.",
          "Branch: Outcome of a decision.",
          "Leaf: Final predicted output.",
          "Depth: Longest path through the tree."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.3 Gini impurity",
        "paragraphs": [
          "Gini impurity measures class impurity within a node.",
          "Where \\(p_k\\) is the proportion of observations belonging to class \\(k\\).",
          "For a pure node containing only one class:"
        ],
        "codeBlocks": [
          "\\[ Gini=1-\\sum_{k=1}^{K}p_k^2 \\]",
          "\\[ Gini=0 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.4 Entropy",
        "paragraphs": [
          "Entropy measures the uncertainty of class membership.",
          "A node with a single class has zero entropy."
        ],
        "codeBlocks": [
          "\\[ H(S)= -\\sum_{k=1}^{K}p_k\\log_2(p_k) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.5 Information gain",
        "paragraphs": [
          "Information gain measures the reduction in entropy resulting from a split.",
          "The algorithm can use a criterion to select useful splits."
        ],
        "codeBlocks": [
          "\\[ IG=H(\\text{parent})- \\sum_j\\frac{N_j}{N}H(\\text{child}_j) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.6 Decision Tree implementation",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.datasets import load_iris from sklearn.model_selection import train_test_split from sklearn.tree import DecisionTreeClassifier from sklearn.metrics import classification_report iris = load_iris() X = iris.data y = iris.target X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, stratify=y, random_state=42 ) model = DecisionTreeClassifier( max_depth=3, random_state=42 ) model.fit(X_train, y_train) predictions = model.predict(X_test) print( classification_report( y_test, predictions, target_names=iris.target_names ) )"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.7 Understanding tree depth",
        "paragraphs": [
          "A very deep tree can memorize training observations.",
          "Important hyperparameters:",
          "max_depth",
          "min_samples_split",
          "min_samples_leaf",
          "criterion",
          "max_features",
          "Students should experimentally investigate how tree complexity affects performance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.8 Visualizing a decision tree",
        "paragraphs": [],
        "codeBlocks": [
          "import matplotlib.pyplot as plt from sklearn.tree import plot_tree plt.figure(figsize=(16, 9)) plot_tree( model, feature_names=iris.feature_names, class_names=iris.target_names, filled=True ) plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.9 Decision Tree regression",
        "paragraphs": [
          "A Decision Tree Regressor splits the feature space into regions and predicts a numerical value, commonly using the average target within the corresponding leaf.",
          "Lab: Build both a Decision Tree Classifier and Regressor. Compare shallow and deep tree configurations."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3086
  },
  {
    "id": "sec-19",
    "sectionNum": 19,
    "title": "Random Forests and Ensemble Learning",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — Classification Algorithms",
    "tag": "Classification",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Exploring the Power of Random Forest: From Decision Trees to Ensemble Methods](https://images.openai.com/static-rsc-4/gxlQhjGIIGBXaF2mzrFlYPKnASFrehhCDDfmbJoMfKJer1ci1QW3awJ1-MiHe9dsyCbW3gtgdDeESwKw2MMps9Jw2VR1Znu6yEdpeYfiNQJQNO0_aVMsqmj2ED0gAbGdvw00zZhjoMeXgP0ReM1xIgojbJmIWybIQCL0_kzLG08?purpose=inline)",
          "[linkedin.com](https://www.linkedin.com/pulse/exploring-power-random-forest-from-decision-trees-ensemble-pandey?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.1 What is ensemble learning?",
        "paragraphs": [
          "Ensemble learning combines multiple models to produce a final prediction.",
          "The motivation is that combining different learned models can improve predictive performance or stability compared with relying on a single model."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.2 What is Random Forest?",
        "paragraphs": [
          "Random Forest is an ensemble algorithm that combines multiple Decision Trees.",
          "It uses:",
          "Bootstrap sampling of training observations.",
          "Randomized feature selection at tree splits.",
          "Multiple decision trees.",
          "Aggregation of individual tree predictions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.3 Bagging",
        "paragraphs": [
          "Bagging stands for Bootstrap Aggregating.",
          "The algorithm creates multiple training samples through sampling with replacement.",
          "Each model is trained on a bootstrap sample.",
          "Their outputs are then aggregated.",
          "For classification, the trees commonly vote or their class probabilities are averaged.",
          "For regression, predictions are commonly averaged."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.4 Why random feature selection?",
        "paragraphs": [
          "Randomly considering a subset of features at each split reduces correlation between individual trees and helps diversify the ensemble."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.5 Random Forest implementation",
        "paragraphs": [
          "This is an educational experiment on a public diagnostic dataset, not a medical diagnostic system."
        ],
        "codeBlocks": [
          "from sklearn.datasets import load_breast_cancer from sklearn.model_selection import train_test_split from sklearn.ensemble import RandomForestClassifier from sklearn.metrics import classification_report data = load_breast_cancer() X = data.data y = data.target X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, random_state=42, stratify=y ) model = RandomForestClassifier( n_estimators=200, max_depth=6, random_state=42 ) model.fit(X_train, y_train) predictions = model.predict(X_test) print( classification_report( y_test, predictions, target_names=data.target_names ) )"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.6 Feature importance",
        "paragraphs": [
          "Random Forest can provide impurity-based feature importance scores.",
          "Students must understand that impurity-based importance can be biased toward some feature types and does not establish causal influence. Permutation importance is another useful technique."
        ],
        "codeBlocks": [
          "import pandas as pd importance = pd.Series( model.feature_importances_, index=data.feature_names ) print( importance.sort_values( ascending=False ).head(10) )"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.7 Advantages and limitations",
        "paragraphs": [
          "Advantages:",
          "Captures nonlinear patterns.",
          "Can handle interactions.",
          "Reduces variance compared with an individual unstable tree in many settings.",
          "Requires less feature scaling than distance-based algorithms.",
          "Limitations:",
          "Larger memory requirements.",
          "Less directly interpretable than a small decision tree.",
          "Feature importance needs careful interpretation.",
          "Prediction can be more expensive than with a single tree."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.8 Other ensemble methods",
        "paragraphs": [
          "Introduce:",
          "Bagging.",
          "Boosting.",
          "Gradient Boosting.",
          "AdaBoost.",
          "XGBoost and LightGBM as later advanced tools.",
          "Assignment: Compare an individual Decision Tree with a Random Forest using the same dataset and test split."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3372
  },
  {
    "id": "sec-20",
    "sectionNum": 20,
    "title": "Support Vector Machines",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — Classification Algorithms",
    "tag": "Classification",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Support vector machines | Predictive Analytics in Business Class Notes](https://images.openai.com/static-rsc-4/4MFY7P8YsNBGW33KxC9z3D61g8UwMy659vgbmYsQ54lV3ejYPIKY5tvYtnDiSs24euKRPNs0XXsI6jCjeSx6zqpa5VVN-Y4pL7KRmTUCKNWeNILpqyphP2l83lbWnvNA8ptXYyoXLyWBOwes3P-RQNb4Hl_yOsAeJlCxzcePGUk?purpose=inline)",
          "[fiveable.me](https://fiveable.me/predictive-analytics-in-business/unit-4/support-vector-machines/study-guide/1afMd7jSxizFGdnu?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.1 What is an SVM?",
        "paragraphs": [
          "A Support Vector Machine is a supervised learning algorithm that identifies a decision boundary separating classes.",
          "For a linear SVM, the decision boundary is a hyperplane."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.2 Hyperplane",
        "paragraphs": [
          "For two features:",
          "This equation describes a line in two-dimensional space.",
          "In higher-dimensional space, it describes a hyperplane."
        ],
        "codeBlocks": [
          "\\[ w_1x_1+w_2x_2+b=0 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.3 Maximum margin",
        "paragraphs": [
          "SVM seeks a decision boundary with a large margin between the classes.",
          "The observations that lie closest to the boundary are called support vectors.",
          "The margin is important because it influences how the classifier generalizes."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.4 Hard-margin SVM",
        "paragraphs": [
          "For perfectly linearly separable data, the hard-margin formulation is:",
          "Subject to:",
          "This requires correctly separating every training observation and is sensitive to non-separable or noisy data."
        ],
        "codeBlocks": [
          "\\[ \\min_{w,b}\\frac12||w||^2 \\]",
          "\\[ y_i(w^Tx_i+b)\\geq1 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.5 Soft-margin SVM",
        "paragraphs": [
          "Soft-margin SVM allows some violations through slack variables.",
          "A regularized objective is:",
          "Subject to:",
          "The parameter \\(C\\) controls the trade-off between margin size and training violations."
        ],
        "codeBlocks": [
          "\\[ \\min_{w,b,\\xi} \\frac12||w||^2+C\\sum_i\\xi_i \\]",
          "\\[ y_i(w^Tx_i+b)\\geq1-\\xi_i \\]",
          "\\[ \\xi_i\\geq0 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.6 Kernel trick",
        "paragraphs": [
          "When data cannot be separated well by a linear boundary, SVM can use kernel functions to model nonlinear decision boundaries.",
          "Common kernels:",
          "Linear.",
          "Polynomial.",
          "Radial Basis Function (RBF)."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.7 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.datasets import load_iris from sklearn.model_selection import train_test_split from sklearn.preprocessing import StandardScaler from sklearn.svm import SVC from sklearn.pipeline import make_pipeline from sklearn.metrics import accuracy_score iris = load_iris() X = iris.data y = iris.target X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, random_state=42, stratify=y ) model = make_pipeline( StandardScaler(), SVC(kernel=\"rbf\", C=1.0) ) model.fit(X_train, y_train) predictions = model.predict(X_test) print( accuracy_score( y_test, predictions ) )"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.8 Important hyperparameters",
        "paragraphs": [
          "Parameter",
          "Purpose",
          "C",
          "Controls regularization strength",
          "kernel",
          "Defines the similarity function",
          "gamma",
          "Influences RBF kernel behaviour",
          "degree",
          "Controls polynomial kernel degree"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.9 Why scaling matters",
        "paragraphs": [
          "SVM uses distances or inner products according to its formulation.",
          "Features with very different scales can disproportionately influence the learned boundary.",
          "Therefore, scaling is generally important for SVM.",
          "Lab: Compare linear SVM and RBF SVM. Investigate different C and gamma values."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3007
  },
  {
    "id": "sec-21",
    "sectionNum": 21,
    "title": "Naive Bayes Classification",
    "duration": "1 hour",
    "partNum": 3,
    "partName": "Part III — Classification Algorithms",
    "tag": "Classification",
    "subsections": [
      {
        "title": "21.1 What is Naive Bayes?",
        "paragraphs": [
          "Naive Bayes is a family of probabilistic classification algorithms based on Bayes' theorem.",
          "It uses the simplifying assumption that features are conditionally independent given the class.",
          "Although this assumption is often unrealistic, Naive Bayes can work well in many practical applications."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "21.2 Mathematical formulation",
        "paragraphs": [
          "For a class \\(C\\) and observed features \\(x_1,\\ldots,x_n\\):",
          "The predicted class is generally the class with the highest posterior probability."
        ],
        "codeBlocks": [
          "\\[ P(C|x_1,\\ldots,x_n) \\propto P(C)\\prod_{i=1}^{n}P(x_i|C) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "21.3 Types of Naive Bayes",
        "paragraphs": [
          "Gaussian Naive Bayes",
          "Commonly used for continuous features modelled using class-conditional Gaussian distributions.",
          "Multinomial Naive Bayes",
          "Often used with non-negative count-like features, including some text classification tasks.",
          "Bernoulli Naive Bayes",
          "Used for binary or Boolean features."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "21.4 Example: Spam classification",
        "paragraphs": [
          "Input features might include:",
          "Presence of the word \"prize\".",
          "Presence of the word \"free\".",
          "Presence of the word \"winner\".",
          "The classifier estimates how likely these feature patterns are under spam and non-spam classes."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "21.5 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.datasets import load_iris from sklearn.model_selection import train_test_split from sklearn.naive_bayes import GaussianNB from sklearn.metrics import accuracy_score data = load_iris() X = data.data y = data.target X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, random_state=42, stratify=y ) model = GaussianNB() model.fit(X_train, y_train) predictions = model.predict(X_test) print( \"Accuracy:\", accuracy_score(y_test, predictions) )"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "21.6 Advantages and limitations",
        "paragraphs": [
          "Advantages:",
          "Simple and fast.",
          "Can work well with high-dimensional text data.",
          "Produces probabilistic predictions.",
          "Limitations:",
          "Conditional independence assumption can be unrealistic.",
          "Probabilities can be poorly calibrated.",
          "Feature distributions must suit the chosen variant."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2071
  },
  {
    "id": "sec-22",
    "sectionNum": 22,
    "title": "Classification Model Evaluation",
    "duration": "2 hours",
    "partNum": 3,
    "partName": "Part III — Classification Algorithms",
    "tag": "Classification",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[📊 Confusion Matrix Explained (With Python Code & Metrics) | by Soumodeep Santra | Dec, 2025 | Medium](https://images.openai.com/static-rsc-4/xpkaNIzcwRUhd-zBzRfMTywCaCThC8r2-5WDfdG2nC35_h58QSYoD6Wh4IP8cTMcJzOqyrGT8dCN8R1iYpCESXePAGNxajJX-VSyI3Jv4lGhrYNRUTY6_je7QSqKZP0cd1nZvBR-j-1Uu02DNQOtTdvDNhce4xC5gP7QyHcCoYg?purpose=inline)",
          "[medium.com](https://medium.com/%40soumodeepsantra5/confusion-matrix-explained-with-python-code-metrics-f4d78337d3f5?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.1 Why accuracy alone is insufficient",
        "paragraphs": [
          "Consider a fraud detection dataset:",
          "Transaction type",
          "Count",
          "Legitimate",
          "9,900",
          "Fraudulent",
          "100",
          "Total",
          "10,000",
          "Imagine a model that predicts every transaction as legitimate.",
          "Its accuracy is:",
          "But it detects zero fraudulent transactions.",
          "This demonstrates why accuracy cannot be used alone for severely imbalanced classification."
        ],
        "codeBlocks": [
          "\\[ Accuracy=\\frac{9900}{10000}=99\\% \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.2 Confusion matrix",
        "paragraphs": [
          "A confusion matrix compares actual and predicted class labels.",
          "Predicted Positive",
          "Predicted Negative",
          "Actual Positive",
          "TP",
          "FN",
          "Actual Negative",
          "FP",
          "TN",
          "Definitions:",
          "TP: Correctly predicted positive.",
          "TN: Correctly predicted negative.",
          "FP: Negative example incorrectly classified as positive.",
          "FN: Positive example incorrectly classified as negative."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.3 Accuracy",
        "paragraphs": [
          "The fraction of all predictions that are correct."
        ],
        "codeBlocks": [
          "\\[ Accuracy=\\frac{TP+TN}{TP+TN+FP+FN} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.4 Precision",
        "paragraphs": [
          "Of the examples classified as positive, how many were actually positive?"
        ],
        "codeBlocks": [
          "\\[ Precision=\\frac{TP}{TP+FP} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.5 Recall",
        "paragraphs": [
          "Of all actual positive examples, how many did the model detect?"
        ],
        "codeBlocks": [
          "\\[ Recall=\\frac{TP}{TP+FN} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.6 Specificity",
        "paragraphs": [
          "Of all actual negative examples, how many were correctly identified?"
        ],
        "codeBlocks": [
          "\\[ Specificity=\\frac{TN}{TN+FP} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.7 F1-score",
        "paragraphs": [
          "F1 is the harmonic mean of precision and recall."
        ],
        "codeBlocks": [
          "\\[ F1= 2\\frac{Precision\\times Recall} {Precision+Recall} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.8 Worked example",
        "paragraphs": [
          "Suppose:",
          "Accuracy:",
          "Precision:",
          "Recall:",
          "Specificity:",
          "F1:"
        ],
        "codeBlocks": [
          "\\[ TP=80,\\quad TN=90 \\]",
          "\\[ FP=10,\\quad FN=20 \\]",
          "\\[ \\frac{80+90}{200}=0.85 \\]",
          "\\[ \\frac{80}{80+10}=0.889 \\]",
          "\\[ \\frac{80}{80+20}=0.80 \\]",
          "\\[ \\frac{90}{90+10}=0.90 \\]",
          "\\[ 2\\frac{0.889(0.80)}{0.889+0.80} \\approx0.842 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.9 ROC and AUC",
        "paragraphs": [
          "The Receiver Operating Characteristic (ROC) curve plots:",
          "True Positive Rate (Recall).",
          "False Positive Rate.",
          "AUC is the area under the ROC curve.",
          "It summarizes ranking performance across thresholds.",
          "An AUC of:"
        ],
        "codeBlocks": [
          "\\[ FPR=\\frac{FP}{FP+TN} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "0.5 represents chance-level ranking under the usual binary setup.",
        "paragraphs": [
          "AUC is not the same as classification accuracy."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.10 Precision-recall curve",
        "paragraphs": [
          "A Precision-Recall curve examines precision and recall across thresholds.",
          "It is particularly informative when positive examples are relatively rare.",
          "The relevant metric depends on the operational cost of false positives and false negatives.",
          "Google for Developers+2"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.11 Python evaluation",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.metrics import ( confusion_matrix, accuracy_score, precision_score, recall_score, f1_score, classification_report, roc_auc_score, roc_curve ) actual = [1, 1, 1, 0, 0, 0, 1, 0] predicted = [1, 0, 1, 0, 0, 1, 1, 0] print(\"Confusion matrix:\") print(confusion_matrix(actual, predicted)) print(\"Accuracy:\", accuracy_score(actual, predicted)) print(\"Precision:\", precision_score(actual, predicted)) print(\"Recall:\", recall_score(actual, predicted)) print(\"F1:\", f1_score(actual, predicted)) print( classification_report( actual, predicted ) )"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.12 Probability-based evaluation",
        "paragraphs": [
          "ROC AUC requires prediction scores or probabilities, not just hard class labels.",
          "Lab: Evaluate three classifiers using accuracy, precision, recall, F1, confusion matrices and ROC AUC. Explain which model is appropriate for each application.",
          "PART IV — UNSUPERVISED MACHINE LEARNING",
          "[Introduction to Image Segmentation with K-Means clustering - KDnuggets](https://images.openai.com/static-rsc-4/1I9MVFr-dVZR7g-SCTTyKFt0rDz7jE8qaVa_youE6XyGvzMnjI11YHyF7zbQO07DDKpa65Olit9Vj-hMHB9MkEG0OCfYu4BhAKvavjFoXdFrKAKQ3fah2RxU0HuTl3rS0f6zb1Oy7T7dAAhyFN15iyH5ItWscSFBfYz74G3oXvA?purpose=inline)",
          "[kdnuggets.com](https://www.kdnuggets.com/2019/08/introduction-image-segmentation-k-means-clustering.html?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [
          "from sklearn.metrics import roc_auc_score actual = [0, 0, 1, 1, 0, 1] probabilities = [0.1, 0.3, 0.8, 0.9, 0.2, 0.7] print( \"ROC AUC:\", roc_auc_score(actual, probabilities) )"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 4308
  },
  {
    "id": "sec-23",
    "sectionNum": 23,
    "title": "Introduction to Unsupervised Learning",
    "duration": "1 hour",
    "partNum": 4,
    "partName": "Part IV — Unsupervised Machine Learning",
    "tag": "Unsupervised Learning",
    "subsections": [
      {
        "title": "23.1 What is unsupervised learning?",
        "paragraphs": [
          "Unsupervised learning is a Machine Learning approach in which the algorithm receives input observations without corresponding target labels and attempts to discover useful structure in the data.",
          "Unlike supervised learning, the algorithm does not receive the correct answer for every example."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "23.2 Example: Customer segmentation",
        "paragraphs": [
          "An e-commerce platform contains the following information:",
          "Customer",
          "Annual spending",
          "Visits per month",
          "A",
          "5,000",
          "2",
          "B",
          "6,000",
          "3",
          "C",
          "50,000",
          "15",
          "D",
          "55,000",
          "16",
          "E",
          "8,000",
          "4",
          "F",
          "60,000",
          "18",
          "The business wants to identify groups of customers with similar behaviour.",
          "There are no existing customer-category labels.",
          "A clustering algorithm can attempt to identify groups from the features."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "23.3 Main unsupervised learning tasks",
        "paragraphs": [
          "Clustering: Groups similar observations.",
          "Dimensionality reduction: Represents high-dimensional data using fewer dimensions.",
          "Density estimation: Estimates how data is distributed.",
          "Anomaly detection: Identifies observations that are unusual relative to a learned structure or model."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      },
      {
        "title": "23.4 Applications",
        "paragraphs": [
          "Customer segmentation.",
          "Grouping documents.",
          "Identifying unusual transactions.",
          "Grouping product categories.",
          "Discovering patterns in user behaviour.",
          "Exploring high-dimensional datasets."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "23.5 Supervised vs unsupervised learning",
        "paragraphs": [
          "Dimension",
          "Supervised",
          "Unsupervised",
          "Target labels",
          "Available",
          "Not supplied",
          "Main objective",
          "Predict target",
          "Discover structure",
          "Common methods",
          "Regression and classification",
          "Clustering and dimensionality reduction",
          "Evaluation",
          "Compare predictions to known targets",
          "Use internal, external or task-based criteria",
          "Example",
          "Spam detection",
          "Customer segmentation"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1796
  },
  {
    "id": "sec-24",
    "sectionNum": 24,
    "title": "K-Means Clustering",
    "duration": "2 hours",
    "partNum": 4,
    "partName": "Part IV — Unsupervised Machine Learning",
    "tag": "Unsupervised Learning",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[K-Means Clustering : What I Learned In Unsupervised Learning | by Aniket | Feb, 2026 | Medium](https://images.openai.com/static-rsc-4/3v1W6Q5JchPbzaluk6RuEm1ht_MJhFf2QohPRQCwbhuGGhMY28dTZkN9fwkAgjhqBs2DiVLz0yF9OAjbhRePcy982cQdxZwKNHEOTzRmdQvwh_1yjxiMz4oOtDpIxW1loQ8tKjVHp7Hn57rSy1yauK7QBLDOtOMhnBkHbob-Dpg?purpose=inline)",
          "[medium.com](https://medium.com/%40aniani2521/k-means-clustering-what-i-learned-in-unsupervised-learning-e83bfc3ce4bf?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.1 What is K-Means?",
        "paragraphs": [
          "K-Means is an unsupervised clustering algorithm that partitions observations into \\(K\\) groups.",
          "Each group is represented by a centroid, which is the mean position of its assigned observations."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.2 Understanding centroids",
        "paragraphs": [
          "A centroid represents the numerical center of a cluster.",
          "Suppose the following observations belong to one cluster:",
          "The centroid is calculated by averaging each coordinate."
        ],
        "codeBlocks": [
          "\\[ (2,4),\\ (4,6),\\ (6,8) \\]",
          "\\[ \\mu= \\left( \\frac{2+4+6}{3}, \\frac{4+6+8}{3} \\right) \\]",
          "\\[ \\mu=(4,6) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.3 How K-Means works",
        "paragraphs": [
          "Step 1 — Select K",
          "Choose the desired number of clusters.",
          "Step 2 — Initialize centroids",
          "Select initial centroid positions, commonly using K-Means++ initialization.",
          "Step 3 — Assign observations",
          "Assign each observation to its nearest centroid.",
          "Step 4 — Update centroids",
          "Calculate new centroids using the mean of observations in each cluster.",
          "Step 5 — Repeat",
          "Repeat assignment and updating until convergence or another stopping condition."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.4 K-Means objective function",
        "paragraphs": [
          "K-Means aims to minimize the within-cluster sum of squared distances.",
          "Where:"
        ],
        "codeBlocks": [
          "\\[ \\boxed{ J= \\sum_{j=1}^{K} \\sum_{x_i\\in C_j} \\|x_i-\\mu_j\\|^2 } \\]",
          "\\(K\\): Number of clusters.",
          "\\(C_j\\): Observations assigned to cluster \\(j\\).",
          "\\(\\mu_j\\): Centroid of cluster \\(j\\)."
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.5 Numerical example",
        "paragraphs": [
          "Suppose:",
          "The centroid is:",
          "Within-cluster squared error:",
          "The algorithm attempts to reduce this quantity."
        ],
        "codeBlocks": [
          "\\[ C_1=\\{2,4,6\\} \\]",
          "\\[ \\mu_1=4 \\]",
          "\\[ J=(2-4)^2+(4-4)^2+(6-4)^2 \\]",
          "\\[ J=4+0+4=8 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.6 Implementation using Scikit-learn",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as np import matplotlib.pyplot as plt from sklearn.cluster import KMeans from sklearn.datasets import make_blobs X, _ = make_blobs( n_samples=300, centers=4, cluster_std=0.8, random_state=42 ) model = KMeans( n_clusters=4, init=\"k-means++\", n_init=10, random_state=42 ) labels = model.fit_predict(X) centers = model.cluster_centers_ print(\"Centroids:\") print(centers) print(\"Inertia:\", model.inertia_) plt.scatter( X[:, 0], X[:, 1], c=labels ) plt.scatter( centers[:, 0], centers[:, 1], marker=\"X\", s=200 ) plt.title(\"K-Means Clustering\") plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.7 Understanding K-Means parameters",
        "paragraphs": [
          "Parameter",
          "Purpose",
          "n_clusters",
          "Number of clusters",
          "init",
          "Centroid initialization method",
          "n_init",
          "Number of independent initializations",
          "max_iter",
          "Maximum iterations",
          "random_state",
          "Reproducibility"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.8 Choosing the number of clusters",
        "paragraphs": [
          "K-Means requires the number of clusters to be specified.",
          "Two commonly taught techniques are:",
          "A. Elbow method",
          "Calculate within-cluster sum of squares for multiple values of \\(K\\).",
          "Plot the value against \\(K\\).",
          "Look for a point where additional clusters give diminishing improvements.",
          "B. Silhouette score",
          "The silhouette score compares how close an observation is to its own cluster versus other clusters.",
          "Where:",
          "Values close to 1 indicate strong separation, while values around zero indicate overlapping clusters. Negative values may indicate questionable assignments."
        ],
        "codeBlocks": [
          "inertias = [] for k in range(1, 11): model = KMeans( n_clusters=k, n_init=10, random_state=42 ) model.fit(X) inertias.append(model.inertia_) plt.plot( range(1, 11), inertias, marker=\"o\" ) plt.xlabel(\"Number of clusters\") plt.ylabel(\"Inertia\") plt.title(\"Elbow Method\") plt.show()",
          "\\[ s(i)=\\frac{b(i)-a(i)} {\\max(a(i),b(i))} \\]",
          "\\(a(i)\\): Average distance from observation \\(i\\) to other observations in its cluster.",
          "\\(b(i)\\): Smallest average distance from observation \\(i\\) to another cluster."
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.9 Limitations of K-Means",
        "paragraphs": [
          "Requires choosing \\(K\\).",
          "Sensitive to initialization.",
          "Sensitive to feature scaling.",
          "Can be affected by outliers.",
          "Works best for clusters reasonably represented by compact, approximately spherical groups.",
          "Does not naturally handle every possible cluster shape.",
          "Lab: Apply K-Means to customer spending data. Compare different values of K, inertia and silhouette scores.",
          "The official Scikit-learn clustering documentation explains K-Means, centroid initialization, inertia and alternative clustering algorithms.",
          "scikit-learn 1.9.1 documentation"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 4459
  },
  {
    "id": "sec-25",
    "sectionNum": 25,
    "title": "Hierarchical Clustering",
    "duration": "1 hour",
    "partNum": 4,
    "partName": "Part IV — Unsupervised Machine Learning",
    "tag": "Unsupervised Learning",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Hierarchical clustering explained](https://images.openai.com/static-rsc-4/XrVX5Wvf_U6zjKegr17k-tC5kejNWt8xJ71Rs04ssgHKZrxnojiEr2xWo4AE35tV97_D5FqhaZbltG6q3YVDJIMxs_KH2I-ZLvUli8INHHsLiVehPPzO_3tzGOC6jrGpwLSk5dnx6V_N12U3OT3j1rHanGRxDNIpBZ-BYDcIRq8?purpose=inline)",
          "[ramseyelbasheer.blogspot.com](https://ramseyelbasheer.blogspot.com/2021/05/hierarchical-clustering-explained.html?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.1 What is hierarchical clustering?",
        "paragraphs": [
          "Hierarchical clustering builds a hierarchy of related clusters.",
          "Unlike K-Means, it can represent relationships between observations at multiple grouping levels."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.2 Two approaches",
        "paragraphs": [
          "Agglomerative clustering",
          "A bottom-up approach.",
          "Start with every observation as its own cluster.",
          "Find the closest pair of clusters.",
          "Merge them.",
          "Repeat until the desired hierarchy is created.",
          "Divisive clustering",
          "A top-down approach.",
          "Start with all observations in one cluster.",
          "Divide the group into smaller clusters.",
          "Repeat until the desired structure is achieved."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.3 Dendrogram",
        "paragraphs": [
          "A dendrogram visually represents the sequence of cluster merges or divisions.",
          "The vertical position of a merge represents the dissimilarity at which clusters are joined in the selected linkage procedure."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.4 Linkage methods",
        "paragraphs": [
          "Method",
          "Explanation",
          "Single linkage",
          "Minimum distance between cluster observations",
          "Complete linkage",
          "Maximum distance between cluster observations",
          "Average linkage",
          "Average pairwise distance",
          "Ward linkage",
          "Merge chosen to minimize increase in within-cluster variance"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.5 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.datasets import make_blobs from sklearn.cluster import AgglomerativeClustering import matplotlib.pyplot as plt X, _ = make_blobs( n_samples=100, centers=3, random_state=42 ) model = AgglomerativeClustering( n_clusters=3, linkage=\"ward\" ) labels = model.fit_predict(X) plt.scatter( X[:, 0], X[:, 1], c=labels ) plt.title(\"Agglomerative Clustering\") plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.6 Dendrogram with SciPy",
        "paragraphs": [],
        "codeBlocks": [
          "from scipy.cluster.hierarchy import ( dendrogram, linkage ) import matplotlib.pyplot as plt Z = linkage(X, method=\"ward\") plt.figure(figsize=(12, 6)) dendrogram(Z) plt.title(\"Hierarchical Clustering Dendrogram\") plt.xlabel(\"Observations\") plt.ylabel(\"Merge distance\") plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.7 Applications",
        "paragraphs": [
          "Biological taxonomy.",
          "Document grouping.",
          "Customer segmentation.",
          "Similarity-based analysis.",
          "Exploring nested group structures.",
          "Assignment: Perform hierarchical clustering using single, complete and Ward linkage. Compare their cluster structures."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2473
  },
  {
    "id": "sec-26",
    "sectionNum": 26,
    "title": "DBSCAN and Density-Based Clustering",
    "duration": "1 hour",
    "partNum": 4,
    "partName": "Part IV — Unsupervised Machine Learning",
    "tag": "Unsupervised Learning",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Clustering Isn’t Just Grouping — It’s Decision Making](https://images.openai.com/static-rsc-4/XP23snn_CAZTuJuN1Bk739Gm_1fVc1KxYOV2codNVvir2gARQF-77250lsIEgcumZUwxjdOsigWvleDqhzdjRftZEBfH13yLYA8EH-wEExCupWbbQFVeUag-ROPWhEKB9El2LlntSVEjoEnt2qYt51EpXfgaA2oCGc7uNCSHsCg?purpose=inline)",
          "[codeandclarity.substack.com](https://codeandclarity.substack.com/p/clustering-isnt-just-grouping-its?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.1 What is DBSCAN?",
        "paragraphs": [
          "DBSCAN stands for Density-Based Spatial Clustering of Applications with Noise.",
          "It groups observations in dense regions and can identify isolated observations as noise.",
          "Unlike K-Means, DBSCAN does not require the number of clusters to be specified in advance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.2 Important concepts",
        "paragraphs": [
          "Epsilon (eps): Neighborhood radius.",
          "Min samples (min_samples): Minimum number of observations required in the neighbourhood for a point to be considered a core point.",
          "Core point: A point in a sufficiently dense neighbourhood.",
          "Border point: A point near a core point but without enough neighbours of its own to qualify as a core point.",
          "Noise point: A point that does not belong to an identified cluster."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.3 How DBSCAN works",
        "paragraphs": [
          "Select an observation.",
          "Find its neighbours within eps.",
          "Determine whether it meets the core-point density requirement.",
          "Expand a cluster from core points.",
          "Mark points that do not belong to any cluster as noise.",
          "Continue until all observations are processed."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.4 Python implementation",
        "paragraphs": [
          "Label -1 indicates observations identified as noise."
        ],
        "codeBlocks": [
          "import numpy as np import matplotlib.pyplot as plt from sklearn.datasets import make_moons from sklearn.cluster import DBSCAN from sklearn.preprocessing import StandardScaler X, _ = make_moons( n_samples=500, noise=0.08, random_state=42 ) X = StandardScaler().fit_transform(X) model = DBSCAN( eps=0.25, min_samples=5 ) labels = model.fit_predict(X) plt.scatter( X[:, 0], X[:, 1], c=labels ) plt.title(\"DBSCAN Clustering\") plt.show() print(\"Cluster labels:\", np.unique(labels))"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.5 K-Means vs DBSCAN",
        "paragraphs": [
          "Feature",
          "K-Means",
          "DBSCAN",
          "Number of clusters",
          "Specified in advance",
          "Discovered",
          "Cluster shape",
          "Best for compact clusters",
          "Can find irregular shapes",
          "Noise detection",
          "Not a native objective",
          "Explicitly identifies noise",
          "Parameters",
          "K and initialization",
          "eps, min_samples",
          "Scaling",
          "Important",
          "Important",
          "Lab: Generate circular and moon-shaped datasets. Compare K-Means and DBSCAN and explain which better represents the data."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2402
  },
  {
    "id": "sec-27",
    "sectionNum": 27,
    "title": "Dimensionality Reduction and PCA",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Unsupervised Machine Learning",
    "tag": "Unsupervised Learning",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Principal Component Analysis Graphical Explanation at Maria Kring blog](https://images.openai.com/static-rsc-4/IQSPXbTJZznVf5fQj5rmM14qAhqu7HsUfhvAf13dsWQO90S_UKm-NO9R8cPwMH1QVNsfkN7jaZlAgA1XHt9c1_-OSGz4z_ossadUkB8XuP3jCsY6ciDm4KhDw-PytDitxgyNxsRazlviGw3ncFbKvgxxK_lZYd50u3epBgbSxJo?purpose=inline)",
          "[storage.googleapis.com](https://storage.googleapis.com/dppuypgjuonnte/principal-component-analysis-graphical-explanation.html?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.1 What is dimensionality reduction?",
        "paragraphs": [
          "Dimensionality reduction converts data from a high-dimensional representation to a representation with fewer dimensions.",
          "Example:",
          "A dataset contains 100 numerical features.",
          "We may attempt to represent most of its important variation using 10 transformed dimensions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.2 Why reduce dimensions?",
        "paragraphs": [
          "Reduce computational requirements.",
          "Visualize high-dimensional data.",
          "Reduce redundant information.",
          "Remove some sources of noise.",
          "Support certain clustering and modelling tasks.",
          "Dimensionality reduction does not always improve predictive performance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.3 Principal Component Analysis",
        "paragraphs": [
          "PCA is a linear dimensionality reduction technique that constructs orthogonal directions called principal components.",
          "The first principal component captures the greatest possible variance under the PCA formulation.",
          "The second captures the greatest remaining variance subject to orthogonality to the first.",
          "Further components are selected in descending order of explained variance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.4 PCA mathematical intuition",
        "paragraphs": [
          "The process generally involves:",
          "Centering the numerical features.",
          "Optionally scaling features when measurement scales differ substantially.",
          "Computing the covariance structure or performing SVD.",
          "Identifying principal directions.",
          "Projecting observations onto selected components.",
          "If the centered data matrix is \\(X\\), its covariance matrix is:",
          "Eigenvectors of the covariance matrix determine principal directions."
        ],
        "codeBlocks": [
          "\\[ C=\\frac{1}{n-1}X^TX \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.5 Explained variance",
        "paragraphs": [
          "The proportion of variance captured by principal component \\(i\\) is:",
          "Where \\(\\lambda_i\\) is the associated eigenvalue."
        ],
        "codeBlocks": [
          "\\[ EVR_i= \\frac{\\lambda_i}{\\sum_j\\lambda_j} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.6 Python implementation",
        "paragraphs": [
          "The labels are used only for coloring the visualization, not for fitting PCA."
        ],
        "codeBlocks": [
          "from sklearn.datasets import load_iris from sklearn.preprocessing import StandardScaler from sklearn.decomposition import PCA import matplotlib.pyplot as plt iris = load_iris() X = iris.data y = iris.target scaler = StandardScaler() X_scaled = scaler.fit_transform(X) pca = PCA( n_components=2 ) X_reduced = pca.fit_transform(X_scaled) print( \"Explained variance:\", pca.explained_variance_ratio_ ) print( \"Total explained variance:\", pca.explained_variance_ratio_.sum() ) plt.scatter( X_reduced[:, 0], X_reduced[:, 1], c=y ) plt.title(\"Iris Dataset After PCA\") plt.xlabel(\"Principal Component 1\") plt.ylabel(\"Principal Component 2\") plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.7 Limitations",
        "paragraphs": [
          "PCA captures linear directions of variation.",
          "Components may be difficult to interpret.",
          "Scaling can substantially affect the result.",
          "Information is lost when dimensions are discarded.",
          "Maximum variance does not necessarily mean maximum predictive usefulness.",
          "Assignment: Apply PCA to a dataset with at least 10 numerical features. Compare its original and reduced dimensions and explain the explained-variance ratio.",
          "PART V — FEATURE ENGINEERING AND DATA PREPROCESSING",
          "[Mastering Data Preprocessing: A Practical Guide to Clean and Transform Data for Machine Learning | by Shrutika kapade | Medium](https://images.openai.com/static-rsc-4/-B7A6z6r-bnjR97nev42_KLfJzUJ-o1vRjcMZrSqJyxXN0a5RO7aGsoDNRFHbdLhZxcEcWU-yhX8tjGo7Mjmqtf-Ampc8C1HoZfHC4zrM3IE6rXwGKrhAVEcU6ZI7DqgqNn9I5W6juqAz0Ha2Jy_hO_hs6yGrn7NikpuT1mwa2c?purpose=inline)",
          "[medium.com](https://medium.com/%40shrutikakkapade21/mastering-data-preprocessing-a-practical-guide-to-clean-and-transform-data-for-machine-learning-74d151dd523e?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3908
  },
  {
    "id": "sec-28",
    "sectionNum": 28,
    "title": "Feature Engineering Fundamentals",
    "duration": "1.5 hours",
    "partNum": 5,
    "partName": "Part V — Feature Engineering and Data Preprocessing",
    "tag": "Feature Engineering",
    "subsections": [
      {
        "title": "28.1 What is feature engineering?",
        "paragraphs": [
          "Feature engineering is the process of creating, transforming or selecting input variables to improve a model's ability to learn useful patterns.",
          "The quality of the input representation can strongly influence the model's performance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "28.2 Raw features vs engineered features",
        "paragraphs": [
          "Suppose a platform stores:",
          "Registration date.",
          "Last active date.",
          "Total lessons completed.",
          "Rather than supplying only the two dates, an engineer can construct:",
          "Days since registration.",
          "Days since last active.",
          "Lessons completed per active week.",
          "These features may represent more useful information for a prediction problem."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "28.3 Numerical feature creation",
        "paragraphs": [],
        "codeBlocks": [
          "import pandas as pd df = pd.DataFrame({ \"lessons_completed\": [10, 20, 30], \"active_days\": [5, 10, 15] }) df[\"lessons_per_active_day\"] = ( df[\"lessons_completed\"] / df[\"active_days\"].replace(0, float(\"nan\")) ) print(df)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "28.4 Interaction features",
        "paragraphs": [
          "Some relationships depend on combinations of features.",
          "For two variables:",
          "An interaction feature can help a model capture the joint effect of two inputs.",
          "Example:",
          "Study hours.",
          "Practice completion rate.",
          "Study hours × completion rate."
        ],
        "codeBlocks": [
          "\\[ x_1x_2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "28.5 Polynomial features",
        "paragraphs": [
          "Polynomial transformations allow linear algorithms to capture certain nonlinear relationships."
        ],
        "codeBlocks": [
          "from sklearn.preprocessing import PolynomialFeatures import numpy as np X = np.array([ [2, 3], [4, 5] ]) poly = PolynomialFeatures( degree=2, include_bias=False ) X_transformed = poly.fit_transform(X) print(X_transformed)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "28.6 Date and time features",
        "paragraphs": [
          "From a date field, useful features may include:",
          "Year.",
          "Month.",
          "Weekday.",
          "Hour.",
          "Days since an event.",
          "Time between actions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "28.7 Domain knowledge",
        "paragraphs": [
          "Feature engineering should not become blind feature generation.",
          "Engineers must ask:",
          "Is this feature available when a prediction is made?",
          "Does it have a valid relationship to the target?",
          "Does it introduce data leakage?",
          "Is it reliable?",
          "Does it reveal sensitive or prohibited information?",
          "Assignment: Take raw student activity data and create five meaningful engineered features. Explain the reason for each."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2094
  },
  {
    "id": "sec-29",
    "sectionNum": 29,
    "title": "Numerical and Categorical Feature Processing",
    "duration": "2 hours",
    "partNum": 5,
    "partName": "Part V — Feature Engineering and Data Preprocessing",
    "tag": "Feature Engineering",
    "subsections": [
      {
        "title": "29.1 Numerical features",
        "paragraphs": [
          "Numerical variables can be:",
          "Continuous.",
          "Discrete.",
          "Examples:",
          "Continuous:",
          "Temperature.",
          "Height.",
          "Salary.",
          "Discrete:",
          "Number of courses.",
          "Completed assignments.",
          "Failed attempts."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.2 Standardization",
        "paragraphs": [
          "Standardization transforms numerical features into z-scores.",
          "Python:",
          "The scaler learns means and standard deviations from its training input and reuses them when transforming new observations."
        ],
        "codeBlocks": [
          "\\[ z=\\frac{x-\\mu}{\\sigma} \\]",
          "from sklearn.preprocessing import StandardScaler import numpy as np X = np.array([ [10, 1000], [20, 2000], [30, 3000] ]) scaler = StandardScaler() X_scaled = scaler.fit_transform(X) print(X_scaled)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.3 Min-max normalization",
        "paragraphs": [
          "Python:"
        ],
        "codeBlocks": [
          "\\[ x'=\\frac{x-x_{\\min}}{x_{\\max}-x_{\\min}} \\]",
          "from sklearn.preprocessing import MinMaxScaler scaler = MinMaxScaler() X_normalized = scaler.fit_transform(X) print(X_normalized)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.4 When scaling is important",
        "paragraphs": [
          "Scaling is particularly useful for:",
          "KNN.",
          "SVM.",
          "Logistic regression with regularization.",
          "Linear models with regularization.",
          "Distance-based clustering.",
          "Gradient-based numerical optimization.",
          "Tree-based methods generally do not require numerical scaling for their split decisions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.5 Categorical features",
        "paragraphs": [
          "Categorical information must often be transformed into numerical representations for an algorithm.",
          "Example:",
          "Department: CSE IT ECE"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.6 Label encoding",
        "paragraphs": [
          "A simple mapping may be:",
          "CSE → 0 IT → 1 ECE → 2",
          "This representation is useful for certain target labels but can accidentally suggest an artificial numeric ordering when used for nominal input features."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      },
      {
        "title": "29.7 One-hot encoding",
        "paragraphs": [
          "One-hot encoding creates separate indicator columns.",
          "Original:",
          "Department",
          "CSE",
          "IT",
          "ECE",
          "After encoding:",
          "CSE",
          "IT",
          "ECE",
          "1",
          "0",
          "0",
          "0",
          "1",
          "0",
          "0",
          "0",
          "1",
          "Python:"
        ],
        "codeBlocks": [
          "import pandas as pd df = pd.DataFrame({ \"department\": [\"CSE\", \"IT\", \"ECE\", \"CSE\"] }) encoded = pd.get_dummies( df, columns=[\"department\"], dtype=int ) print(encoded)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.8 Handling missing values",
        "paragraphs": [
          "Numerical missing values can be imputed with strategies such as:",
          "Mean.",
          "Median.",
          "Constant values.",
          "Categorical missing values can use:",
          "Most frequent category.",
          "A separate missing category.",
          "The imputation method should be selected according to the data and task."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.9 Complete preprocessing example",
        "paragraphs": [
          "This creates a reusable preprocessing object for mixed numerical and categorical data.",
          "Scikit-learn's preprocessing documentation explains standardization and categorical encoding, including one-hot encoding.",
          "scikit-learn 1.9.1 documentation+1",
          "Lab: Prepare a mixed numerical and categorical dataset. Apply missing-value imputation, standardization and one-hot encoding."
        ],
        "codeBlocks": [
          "import pandas as pd from sklearn.compose import ColumnTransformer from sklearn.preprocessing import ( StandardScaler, OneHotEncoder ) from sklearn.impute import SimpleImputer from sklearn.pipeline import Pipeline numeric_features = [ \"study_hours\", \"practice_questions\" ] categorical_features = [ \"department\" ] numeric_pipeline = Pipeline([ (\"imputer\", SimpleImputer(strategy=\"median\")), (\"scaler\", StandardScaler()) ]) categorical_pipeline = Pipeline([ (\"imputer\", SimpleImputer(strategy=\"most_frequent\")), (\"encoder\", OneHotEncoder(handle_unknown=\"ignore\")) ]) preprocessor = ColumnTransformer([ (\"numeric\", numeric_pipeline, numeric_features), (\"categorical\", categorical_pipeline, categorical_features) ])"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3286
  },
  {
    "id": "sec-30",
    "sectionNum": 30,
    "title": "Feature Selection and Data Leakage",
    "duration": "1.5 hours",
    "partNum": 5,
    "partName": "Part V — Feature Engineering and Data Preprocessing",
    "tag": "Feature Engineering",
    "subsections": [
      {
        "title": "30.1 What is feature selection?",
        "paragraphs": [
          "Feature selection identifies input variables that are useful for a model.",
          "It can help:",
          "Reduce dimensionality.",
          "Reduce noise.",
          "Improve interpretability.",
          "Reduce training cost.",
          "Improve generalization."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.2 Filter methods",
        "paragraphs": [
          "Filter methods evaluate features independently of a particular predictive model.",
          "Examples:",
          "Correlation.",
          "Mutual information.",
          "Chi-squared tests.",
          "Variance threshold."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.3 Wrapper methods",
        "paragraphs": [
          "Wrapper methods evaluate feature subsets by repeatedly fitting a predictive model.",
          "Example:",
          "Recursive Feature Elimination (RFE)."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.4 Embedded methods",
        "paragraphs": [
          "Embedded methods perform feature selection as part of model fitting.",
          "Examples:",
          "L1-regularized regression.",
          "L1-regularized logistic regression.",
          "Tree-based importance methods."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.5 Demonstration: Mutual information",
        "paragraphs": [
          "Mutual information measures statistical dependence; it does not by itself establish that a feature is causal or operationally useful."
        ],
        "codeBlocks": [
          "from sklearn.datasets import make_classification from sklearn.feature_selection import mutual_info_classif X, y = make_classification( n_samples=500, n_features=10, n_informative=4, n_redundant=2, random_state=42 ) scores = mutual_info_classif( X, y, random_state=42 ) for index, score in enumerate(scores): print( f\"Feature {index}: {score:.4f}\" )"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.6 What is data leakage?",
        "paragraphs": [
          "Data leakage occurs when information that would not genuinely be available during training or prediction influences the learning or evaluation process.",
          "It can produce misleadingly high model performance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.7 Common data leakage examples",
        "paragraphs": [
          "A. Scaling before splitting",
          "Incorrect:",
          "The scaler has already learned statistics from the complete dataset, including the test observations.",
          "Correct:",
          "Split first, then fit preprocessing only on training data. Reuse the learned transformations for validation and testing.",
          "B. Target leakage",
          "Including an input feature that directly or indirectly reveals the target.",
          "Example:",
          "Predicting whether a course will be completed using a feature recorded only after course completion.",
          "C. Duplicate observations",
          "Near-identical or duplicated records can accidentally appear in both training and testing data.",
          "D. Future information",
          "Using future values when the prediction is supposed to be made in the past."
        ],
        "codeBlocks": [
          "# Incorrect workflow X_scaled = scaler.fit_transform(X) X_train, X_test, y_train, y_test = train_test_split( X_scaled, y, test_size=0.2 )"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.8 Use pipelines to prevent leakage",
        "paragraphs": [
          "The pipeline fits the scaler on training inputs during fit and applies the same transformation to test inputs during predict.",
          "Scikit-learn explicitly documents pipelines as a way to avoid leakage during cross-validation and model selection.",
          "scikit-learn 1.9.1 documentation+1",
          "Assignment: Find five potential leakage problems in an imaginary student prediction dataset and propose a correction for each.",
          "PART VI — MODEL SELECTION AND OPTIMIZATION"
        ],
        "codeBlocks": [
          "from sklearn.pipeline import Pipeline from sklearn.preprocessing import StandardScaler from sklearn.linear_model import LogisticRegression from sklearn.model_selection import train_test_split from sklearn.datasets import make_classification X, y = make_classification( n_samples=1000, n_features=10, random_state=42 ) X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, stratify=y, random_state=42 ) model = Pipeline([ (\"scaler\", StandardScaler()), (\"classifier\", LogisticRegression(max_iter=1000)) ]) model.fit(X_train, y_train) print(model.score(X_test, y_test))"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3471
  },
  {
    "id": "sec-31",
    "sectionNum": 31,
    "title": "Cross-Validation and Model Selection",
    "duration": "1.5 hours",
    "partNum": 6,
    "partName": "Part VI — Model Selection and Optimization",
    "tag": "Model Optimization",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "[Cross-Validation: Simple Steps for Model Selection](https://images.openai.com/static-rsc-4/qnPbRECwT1FJcXErl8QUS9SgY0AD5S269QszXusxeJAHAllJVBt2UF2-1Sp6DqTMXLfOXJUBb4lAMNu7WluSxBKu6Ru6EE0JXNHEmqlCikz9aJxn3PHQQWvXbjXwIc-Ihyhk-yvbNdjHeqj5wc0XlywKmXhs98ayoAqIyuEMdIU?purpose=inline)",
          "[upgrad.com](https://www.upgrad.com/blog/cross-validation-in-machine-learning/?utm_source=chatgpt.com)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.1 What is cross-validation?",
        "paragraphs": [
          "Cross-validation is a method for estimating model performance across multiple train-validation partitions.",
          "Instead of depending on a single validation split, the dataset is divided into several folds."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.2 K-Fold cross-validation",
        "paragraphs": [
          "For five-fold cross-validation:",
          "Divide the training dataset into five approximately equal parts.",
          "Train using four folds.",
          "Validate using the remaining fold.",
          "Repeat until each fold has been used for validation.",
          "Calculate the average score.",
          "Five-fold cross-validation",
          "Fold 1",
          "Val",
          "Train",
          "Train",
          "Train",
          "Train",
          "Fold 2",
          "Train",
          "Val",
          "Train",
          "Train",
          "Train",
          "Fold 3",
          "Train",
          "Train",
          "Val",
          "Train",
          "Train",
          "Fold 4",
          "Train",
          "Train",
          "Train",
          "Val",
          "Train",
          "Fold 5",
          "Train",
          "Train",
          "Train",
          "Train",
          "Val",
          "Training",
          "Validation",
          "Each fold becomes the validation fold once."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.3 Cross-validation score",
        "paragraphs": [
          "Suppose five validation scores are:",
          "The average is:",
          "The average score is 83.6%.",
          "It is also important to examine how much the scores vary between folds."
        ],
        "codeBlocks": [
          "\\[ [0.82,0.85,0.80,0.87,0.84] \\]",
          "\\[ CV=\\frac{0.82+0.85+0.80+0.87+0.84}{5} \\]",
          "\\[ CV=0.836 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.4 Stratified K-Fold",
        "paragraphs": [
          "For classification, Stratified K-Fold attempts to preserve class proportions in each fold.",
          "This is useful when classes are imbalanced."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.5 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "from sklearn.datasets import load_breast_cancer from sklearn.linear_model import LogisticRegression from sklearn.model_selection import cross_val_score from sklearn.pipeline import make_pipeline from sklearn.preprocessing import StandardScaler data = load_breast_cancer() X = data.data y = data.target model = make_pipeline( StandardScaler(), LogisticRegression(max_iter=2000) ) scores = cross_val_score( model, X, y, cv=5, scoring=\"accuracy\" ) print(\"Fold scores:\", scores) print(\"Average:\", scores.mean()) print(\"Standard deviation:\", scores.std())"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.6 Important distinction",
        "paragraphs": [
          "Cross-validation is generally performed on development data.",
          "A separate final test dataset should be retained for an unbiased final evaluation after model selection.",
          "Other specialized cross-validation methods are required for grouped, time-series or repeated-measures observations."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2490
  },
  {
    "id": "sec-32",
    "sectionNum": 32,
    "title": "Hyperparameter Tuning",
    "duration": "1.5 hours",
    "partNum": 6,
    "partName": "Part VI — Model Selection and Optimization",
    "tag": "Model Optimization",
    "subsections": [
      {
        "title": "32.1 Parameter vs hyperparameter",
        "paragraphs": [
          "Model parameter: Learned from training data.",
          "Examples:",
          "Regression coefficients.",
          "Logistic regression weights.",
          "Decision tree split values.",
          "Hyperparameter: Selected outside ordinary model parameter fitting.",
          "Examples:",
          "Number of KNN neighbours.",
          "Decision tree maximum depth.",
          "Random Forest tree count.",
          "Regularization strength.",
          "K-Means cluster count."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.2 Grid Search",
        "paragraphs": [
          "Grid Search evaluates combinations of specified hyperparameter values.",
          "Example:"
        ],
        "codeBlocks": [
          "from sklearn.datasets import load_iris from sklearn.model_selection import ( train_test_split, GridSearchCV ) from sklearn.neighbors import KNeighborsClassifier from sklearn.preprocessing import StandardScaler from sklearn.pipeline import Pipeline data = load_iris() X = data.data y = data.target X_train, X_test, y_train, y_test = train_test_split( X, y, test_size=0.2, stratify=y, random_state=42 ) pipeline = Pipeline([ (\"scaler\", StandardScaler()), (\"knn\", KNeighborsClassifier()) ]) param_grid = { \"knn__n_neighbors\": [3, 5, 7, 9], \"knn__weights\": [\"uniform\", \"distance\"] } grid = GridSearchCV( pipeline, param_grid, cv=5, scoring=\"accuracy\", n_jobs=-1 ) grid.fit(X_train, y_train) print(\"Best parameters:\", grid.best_params_) print(\"Best CV score:\", grid.best_score_) print(\"Test score:\", grid.score(X_test, y_test))"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.3 Randomized Search",
        "paragraphs": [
          "Randomized Search samples parameter combinations from specified distributions or candidate values.",
          "It can be more efficient than an exhaustive grid when the parameter space is large.",
          "Students should understand:",
          "Number of sampled configurations.",
          "Search distributions.",
          "Cross-validation.",
          "Evaluation metric.",
          "Computational budget."
        ],
        "codeBlocks": [
          "from sklearn.model_selection import RandomizedSearchCV"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.4 Bias and variance during tuning",
        "paragraphs": [
          "A model's best training score is not necessarily its best validation score.",
          "Select model configurations based on appropriate validation evidence rather than maximizing training performance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.5 Best practices",
        "paragraphs": [
          "Define an appropriate baseline.",
          "Choose meaningful search ranges.",
          "Use cross-validation.",
          "Optimize the metric relevant to the business problem.",
          "Avoid using the final test dataset during tuning.",
          "Record model configurations.",
          "Consider computational cost.",
          "Scikit-learn supports exhaustive Grid Search and randomized hyperparameter optimization with cross-validation.",
          "scikit-learn 1.9.1 documentation+1",
          "Assignment: Tune a KNN, Decision Tree and Random Forest model. Compare the best cross-validation scores and final test metrics."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2495
  },
  {
    "id": "sec-33",
    "sectionNum": 33,
    "title": "ML Pipelines, Interpretability and Responsible Machine Learning",
    "duration": "1.5 hours",
    "partNum": 6,
    "partName": "Part VI — Model Selection and Optimization",
    "tag": "Model Optimization",
    "subsections": [
      {
        "title": "33.1 What is an ML pipeline?",
        "paragraphs": [
          "A Machine Learning pipeline combines preprocessing and modelling stages into one reusable object.",
          "A typical pipeline:",
          "Input Dataset ↓ Missing Value Handling ↓ Categorical Encoding ↓ Numerical Scaling ↓ Feature Processing ↓ ML Algorithm ↓ Prediction"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.2 Why pipelines are important",
        "paragraphs": [
          "Pipelines provide:",
          "Reproducible preprocessing.",
          "Consistent training and inference.",
          "Easier cross-validation.",
          "Easier hyperparameter tuning.",
          "Reduced risk of data leakage."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.3 Mixed-data preprocessing pipeline",
        "paragraphs": [
          "The pipeline can subsequently be fitted on training data and used for predictions."
        ],
        "codeBlocks": [
          "import pandas as pd from sklearn.compose import ColumnTransformer from sklearn.impute import SimpleImputer from sklearn.preprocessing import ( StandardScaler, OneHotEncoder ) from sklearn.pipeline import Pipeline from sklearn.ensemble import RandomForestClassifier numeric_features = [ \"study_hours\", \"practice_questions\" ] categorical_features = [ \"department\" ] numeric_pipeline = Pipeline([ ( \"imputer\", SimpleImputer(strategy=\"median\") ), ( \"scaler\", StandardScaler() ) ]) categorical_pipeline = Pipeline([ ( \"imputer\", SimpleImputer(strategy=\"most_frequent\") ), ( \"encoder\", OneHotEncoder(handle_unknown=\"ignore\") ) ]) preprocessor = ColumnTransformer([ ( \"numeric\", numeric_pipeline, numeric_features ), ( \"categorical\", categorical_pipeline, categorical_features ) ]) model = Pipeline([ (\"preprocessing\", preprocessor), ( \"classifier\", RandomForestClassifier( n_estimators=100, random_state=42 ) ) ])"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.4 Model interpretability",
        "paragraphs": [
          "Interpretability helps engineers understand why a model produces particular outputs.",
          "Methods to introduce:",
          "Linear model coefficients.",
          "Decision tree visualization.",
          "Permutation feature importance.",
          "Partial dependence plots.",
          "SHAP values as an advanced introduction."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.5 Explain feature importance carefully",
        "paragraphs": [
          "A feature may be useful for prediction without being a cause of the outcome.",
          "For example, study hours may correlate with exam scores, but this alone does not prove that increasing study hours by a specific amount causes an equivalent score increase."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.6 Responsible Machine Learning",
        "paragraphs": [
          "Real-world models can produce biased or harmful outcomes when training data is incomplete, unrepresentative or historically biased.",
          "Students should understand:",
          "Fairness: Evaluate whether model behaviour creates unacceptable differences across relevant groups.",
          "Privacy: Protect personal information and use data appropriately.",
          "Transparency: Document data sources, assumptions, limitations and intended use.",
          "Reliability: Test performance under realistic operating conditions.",
          "Security: Protect models, data and prediction interfaces.",
          "Human oversight: Avoid treating predictions as unquestionable decisions in consequential settings."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.7 Model documentation",
        "paragraphs": [
          "Students should prepare a basic model card including:",
          "Model name and version.",
          "Intended purpose.",
          "Dataset description.",
          "Training procedure.",
          "Evaluation metrics.",
          "Known limitations.",
          "Appropriate and inappropriate uses.",
          "Responsible deployment considerations.",
          "Assignment: Prepare a model card for one model built in this module.",
          "PART VII — PRACTICAL MACHINE LEARNING LABORATORIES"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3176
  }
];

export default AI_ML_CURRICULUM_SECTIONS;
