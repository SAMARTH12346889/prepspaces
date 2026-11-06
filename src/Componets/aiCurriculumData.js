/**
 * Full Curriculum Content Data for Module 01: AI Engineering Foundations & Python for AI
 * Extracted with complete university-level fidelity across all 30 core curriculum sections.
 */

export const AI_CURRICULUM_SECTIONS = [
  {
    "id": "sec-01",
    "sectionNum": 1,
    "title": "Introduction to Artificial Intelligence",
    "duration": "1.5 hours",
    "partNum": 1,
    "partName": "Part I — Artificial Intelligence Foundations",
    "tag": "Foundations & Landscape",
    "subsections": [
      {
        "title": "1.1 What is Artificial Intelligence?",
        "paragraphs": [
          "Artificial Intelligence is a branch of computer science concerned with creating computational systems that can perform tasks associated with intelligent behaviour.",
          "These tasks include:",
          "Learning from information.",
          "Recognizing patterns.",
          "Understanding language.",
          "Solving problems.",
          "Making decisions.",
          "Planning actions.",
          "Interpreting images and sounds.",
          "Generating new information.",
          "Traditional software generally follows explicitly programmed instructions. AI systems may also learn patterns or construct decisions from examples and data.",
          "Consider a traditional calculator.",
          "You provide:",
          "10 + 20",
          "The calculator executes predefined arithmetic rules and returns:",
          "30",
          "Now consider an email spam detection system.",
          "You provide an email containing text, links, sender information and other features. The system analyzes these characteristics and estimates whether the email is spam.",
          "The difference is that a learned spam classifier uses patterns acquired from training examples, rather than requiring a programmer to manually write every possible spam rule."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "A. Perception",
        "paragraphs": [
          "Perception allows a system to interpret information from its environment.",
          "Examples:",
          "Identifying objects in photographs.",
          "Detecting faces in video.",
          "Recognizing spoken words.",
          "Interpreting medical scans."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "B. Learning",
        "paragraphs": [
          "Learning allows systems to improve their behaviour using data or experience.",
          "Example:",
          "A recommendation system studies user interactions and learns which products a customer may prefer."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "C. Reasoning",
        "paragraphs": [
          "Reasoning involves using available information to derive conclusions or select actions.",
          "Example:",
          "A diagnostic decision-support system may consider symptoms, previous observations and medical test results to suggest possible explanations."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "D. Decision-making and planning",
        "paragraphs": [
          "A system evaluates possible actions and selects an action according to its objective.",
          "Example:",
          "A navigation system evaluates different routes using distance, estimated travel time and road conditions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "1.3 Types of AI systems",
        "paragraphs": [
          "Students should understand that these classifications describe different dimensions of AI, not necessarily mutually exclusive categories.",
          "Category",
          "Explanation",
          "Example",
          "Rule-based AI",
          "Uses predefined logic",
          "Expert system",
          "Machine Learning AI",
          "Learns patterns from data",
          "Spam classifier",
          "Deep Learning AI",
          "Uses neural networks",
          "Image recognition",
          "Generative AI",
          "Produces new content",
          "Text generation",
          "Agentic AI",
          "Uses tools and actions to pursue objectives",
          "AI research agent",
          "Another important classification concerns the scope of intelligence:",
          "Narrow AI (ANI): AI designed for particular tasks. Modern image recognition systems, chatbots and recommendation engines fall into this category.",
          "Artificial General Intelligence (AGI): A hypothetical system with broad intellectual capabilities across different domains comparable to human-level general competence.",
          "Artificial Superintelligence (ASI): A hypothetical form of intelligence that substantially exceeds human capabilities across a broad range of domains.",
          "Students must understand that AGI and ASI are concepts for research and discussion, not established descriptions of ordinary deployed AI systems."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "1.4 What is an intelligent agent?",
        "paragraphs": [
          "An intelligent agent is a system that observes its environment and takes actions to achieve an objective.",
          "A basic agent architecture:",
          "Environment",
          "World in which the agent operates",
          "AI Agent",
          "Perception → Reasoning → Action selection",
          "Actions and observations",
          "Agent interacts with the environment",
          "For example, a self-driving vehicle:",
          "Receives information from cameras and sensors.",
          "Interprets road conditions.",
          "Identifies other vehicles and pedestrians.",
          "Estimates possible future movements.",
          "Selects acceleration, braking or steering actions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "1.5 Real-world applications of AI",
        "paragraphs": [
          "Healthcare",
          "Medical imaging analysis, clinical support and drug discovery.",
          "Finance",
          "Fraud detection, risk assessment and transaction monitoring.",
          "Education",
          "AI tutors, content generation and personalized learning.",
          "Manufacturing",
          "Predictive maintenance, quality inspection and robotics."
        ],
        "codeBlocks": [
          "[胸部レントゲンAI読影システムを導入して。 現場で見えてきた「早期発見のリアル」と「これからの課題」｜つく](https://images.openai.com/static-rsc-4/q2FagSqELcgoRjt_nPZOzZPOiyWzdPxKOK8Tbb53vOSRiImv4g5ZR1zXaNGZj1YTobLVjxCUvPNmGuhXLmWrM5YCiigiEr0FzYfyZziOHYUCWDGEPf1E3IW61A-PzVKVJTuztRD3X3qV_R3Rht4Us7h4FwbGutMU6m5O8PldufE?purpose=inline)",
          "[The Industrialization of AI Fraud in 2026: What Banks Must Do Now Beyond Traditional AML Monitoring - Financial Crime Detection | Anti-money laundering | Data driven investigations](https://images.openai.com/static-rsc-4/cu2vs4LzsiV0v8lI23OewUWAxlNZEC8tv5mlUI3lD5-9z2dm5C2l2QNfhLfVxaui7xSYSkt5iiyR5wfS7orTiz5P32uX5r5l0q0R_lRp0Z5Eo_vlhYO2Y6ExUL6Q7s3uqdL_KZpsD6DnydTmTZzxyEwaFHBvUe7ms9pEELqigvs?purpose=inline)",
          "[AI Trends in Education You Can’t Ignore in 2026](https://images.openai.com/static-rsc-4/nPod7KYXCStTYq4wB8krARSnedyaMvZw9rTv4qveNUnzSTOYoZ12LCohbvpitdWEv7113mDkwbJyxJP_kMqKbxFV7MiRRgYHkI0wf_JBpuEG9AXzpVVM9VlxNl2_ZplcBZk_gxLAdu7fmbSrzVPS0J0jUMGDhC9i_LqAAkSxs8g?purpose=inline)",
          "[How Context-Rich AI Uncovers Hidden Wins in Manufacturing](https://images.openai.com/static-rsc-4/5idVjKjEL9Gycp6BFIQRbpwRIN-rL5km8zeiAdlb8pMcLM2J45LqpfWwMGSb43Wmb1ougypYPoiextwzhkU0NH1czEw0CuiiSFAr2nUcBwZ66Xe5yssV7vo7_7qFWtHwziSulO4HQiF2yO5ci_msxyb8rxfERePTcm3GVPCLJ9A?purpose=inline)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "Section exercise",
        "paragraphs": [
          "For every application below, identify the input, processing and output.",
          "Face recognition application.",
          "Medical image classification.",
          "AI coding assistant.",
          "Credit card fraud detection.",
          "Product recommendation system.",
          "Expected outcome: Students can explain what makes an application an AI system and identify its basic input-output behaviour."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 5764
  },
  {
    "id": "sec-02",
    "sectionNum": 2,
    "title": "Evolution and History of Artificial Intelligence",
    "duration": "1 hour",
    "partNum": 1,
    "partName": "Part I — Artificial Intelligence Foundations",
    "tag": "Foundations & Landscape",
    "subsections": [
      {
        "title": "2.1 Origins of AI",
        "paragraphs": [
          "Artificial Intelligence developed through contributions from mathematics, logic, computer science, cognitive science and neuroscience.",
          "Some important milestones:",
          "Year / period",
          "Development",
          "Importance",
          "1950",
          "Alan Turing's work on machine intelligence",
          "Early framework for discussing machine intelligence",
          "1956",
          "Dartmouth Summer Research Project",
          "Helped establish AI as a research field",
          "1960s–1970s",
          "Symbolic AI",
          "Logic and rule-based approaches",
          "1980s",
          "Expert systems",
          "Knowledge-based industrial applications",
          "1990s–2000s",
          "Statistical Machine Learning",
          "Data-driven approaches became increasingly important",
          "2010s",
          "Deep Learning advances",
          "Major improvements in image, speech and language tasks",
          "2017",
          "Transformer architecture",
          "New architecture for sequence modelling",
          "2020s",
          "Foundation models and Generative AI",
          "Broad capabilities across text, images, audio and other modalities"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "2.2 Symbolic AI",
        "paragraphs": [
          "Symbolic AI represents knowledge using explicitly defined symbols, rules and logical relationships.",
          "Example:",
          "This system follows an explicitly written rule. It does not learn the threshold from experience.",
          "Symbolic approaches are useful when:",
          "Rules are clearly defined.",
          "Decisions must be explainable.",
          "The problem has structured logical relationships.",
          "However, manually writing rules for every possible situation becomes difficult for complex and uncertain problems."
        ],
        "codeBlocks": [
          "temperature = 39if temperature > 38: print(\"High temperature detected\")else: print(\"Temperature within this threshold\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "2.3 Expert systems",
        "paragraphs": [
          "Expert systems encode domain-specific knowledge and rules to provide recommendations or conclusions.",
          "A simplified example:",
          "This demonstrates a rule-based knowledge system, not a learning model."
        ],
        "codeBlocks": [
          "def troubleshooting_system(problem): rules = { \"battery_low\": \"Check the battery\", \"internet_down\": \"Check the router\", \"disk_full\": \"Free up storage\" } return rules.get(problem, \"Further diagnosis required\")print(troubleshooting_system(\"battery_low\"))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "2.4 Statistical Machine Learning",
        "paragraphs": [
          "Machine Learning made it possible to learn patterns from datasets rather than manually programming every decision rule.",
          "Examples include:",
          "Predicting house prices.",
          "Detecting spam.",
          "Predicting customer churn.",
          "Grouping similar customers."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "2.5 Deep Learning and Generative AI",
        "paragraphs": [
          "Deep Learning made major advances possible in areas involving images, speech and language.",
          "The Transformer architecture, introduced in the 2017 research paper Attention Is All You Need, became an important foundation for many modern language and multimodal models.",
          "Study assignment: Explain how a rule-based chatbot differs from a modern LLM-based chatbot."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 2691
  },
  {
    "id": "sec-03",
    "sectionNum": 3,
    "title": "AI vs Machine Learning vs Deep Learning vs Generative AI",
    "duration": "2 hours",
    "partNum": 1,
    "partName": "Part I — Artificial Intelligence Foundations",
    "tag": "Foundations & Landscape",
    "subsections": [
      {
        "title": "Overview & Objectives",
        "paragraphs": [],
        "codeBlocks": [
          "[Where to get started with GenAI](https://images.openai.com/static-rsc-4/W3CVNYX3RMhy7PDLOnPbHDG6uHM4U0IXcWhFLEnasYec-ZrJjXExBjQ3Rcb3pDtCVUIg-vtSod_4IwDgduujEMs7NfZkfdy3aMN8IOu7ts44binLakaH0o1323SoELWEAHCY8ZDGO88Zg5b31wCPN-FwcN17NntseSUfKI_ysHU?purpose=inline)",
          "[blog.bytebytego.com](https://blog.bytebytego.com/p/where-to-get-started-with-genai?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "3.1 Artificial Intelligence",
        "paragraphs": [
          "AI is the broad discipline concerned with intelligent computational behaviour.",
          "It includes:",
          "Search algorithms.",
          "Planning systems.",
          "Knowledge representation.",
          "Rule-based reasoning.",
          "Machine Learning.",
          "Deep Learning."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "3.2 Machine Learning",
        "paragraphs": [
          "Machine Learning is a subfield of AI concerned with developing algorithms that learn patterns from data.",
          "A typical supervised learning dataset contains:",
          "Features: Input variables.",
          "Labels: Desired target values.",
          "Examples: Individual training observations.",
          "Suppose we want to predict house prices.",
          "Area (sq. ft.)",
          "Bedrooms",
          "Price (₹ lakh)",
          "800",
          "2",
          "35",
          "1,000",
          "2",
          "42",
          "1,200",
          "3",
          "55",
          "1,500",
          "3",
          "68",
          "1,800",
          "4",
          "85",
          "Here, area and bedrooms are features, while price is the target.",
          "Main types of Machine Learning"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "A. Supervised Learning",
        "paragraphs": [
          "The model learns using labelled examples.",
          "Examples:",
          "Predicting house prices.",
          "Detecting spam emails.",
          "Predicting loan defaults.",
          "Two fundamental task types:",
          "Regression: Predicting a continuous value.",
          "Classification: Predicting a category."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "B. Unsupervised Learning",
        "paragraphs": [
          "The algorithm identifies patterns or structures in data without provided target labels.",
          "Examples:",
          "Customer segmentation.",
          "Document clustering.",
          "Anomaly exploration."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "C. Reinforcement Learning",
        "paragraphs": [
          "An agent learns through interaction with an environment, receiving rewards or penalties based on its actions.",
          "Examples:",
          "Game-playing agents.",
          "Robotic control.",
          "Resource allocation."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "3.3 Deep Learning",
        "paragraphs": [
          "Deep Learning is a subfield of Machine Learning that uses neural networks with multiple layers.",
          "A simple artificial neuron can be described mathematically as:",
          "Where:",
          "\\(x\\): Input values.",
          "\\(w\\): Weights.",
          "\\(b\\): Bias.",
          "\\(f\\): Activation function.",
          "\\(a\\): Neuron output.",
          "Students do not need to implement backpropagation in this module. They should understand what inputs, weights, layers and outputs mean."
        ],
        "codeBlocks": [
          "\\[ z = w_1x_1+w_2x_2+\\cdots+w_nx_n+b \\]",
          "\\[ a = f(z) \\]"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "3.4 Generative AI",
        "paragraphs": [
          "Generative AI focuses on models that produce new outputs based on learned representations and patterns.",
          "Examples:",
          "Text generation.",
          "Image generation.",
          "Code generation.",
          "Speech synthesis.",
          "Video generation.",
          "Important concepts:",
          "Tokens: Units into which text is divided for model processing.",
          "Tokenization: The process of converting text into token representations.",
          "Embeddings: Numerical representations that encode useful semantic or contextual information.",
          "Large Language Models: Models trained to process and generate language. Many autoregressive language models learn to predict the next token based on previous tokens.",
          "Transformers: Neural network architectures that use attention mechanisms to model relationships among input elements."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "3.5 The relationship",
        "paragraphs": [
          "Technology",
          "Main idea",
          "Example",
          "AI",
          "Build intelligent systems",
          "Chess-playing program",
          "ML",
          "Learn patterns from data",
          "Spam classifier",
          "Deep Learning",
          "Learn complex representations using neural networks",
          "Image recognition",
          "Generative AI",
          "Generate new content",
          "LLM assistant",
          "Important: Generative AI is not a strict additional nested layer after Deep Learning. It is a capability or modelling approach, commonly implemented with deep learning."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "3.6 Case study",
        "paragraphs": [
          "Consider an online learning platform.",
          "Rule-based system: Award a certificate when the learner meets fixed completion criteria.",
          "Machine Learning: Predict which students may stop learning.",
          "Deep Learning: Analyze recorded lecture speech.",
          "Generative AI: Create explanations and practice questions.",
          "Assignment: Analyze 20 real-world applications and classify the technology, explaining why."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 3942
  },
  {
    "id": "sec-04",
    "sectionNum": 4,
    "title": "AI Applications and Industry Landscape",
    "duration": "1 hour",
    "partNum": 1,
    "partName": "Part I — Artificial Intelligence Foundations",
    "tag": "Foundations & Landscape",
    "subsections": [
      {
        "title": "Overview & Objectives",
        "paragraphs": [
          "Students study the real problems that AI systems solve.",
          "Industry",
          "Problem",
          "AI solution",
          "Healthcare",
          "Medical scan interpretation",
          "Computer Vision",
          "Banking",
          "Suspicious transactions",
          "Classification and anomaly detection",
          "Education",
          "Personalized learning",
          "Recommendation and Generative AI",
          "Manufacturing",
          "Equipment failures",
          "Predictive analytics",
          "Cybersecurity",
          "Unusual network activity",
          "Anomaly detection",
          "E-commerce",
          "Product discovery",
          "Recommendation systems",
          "Software",
          "Repetitive development tasks",
          "AI coding assistants",
          "Deep-dive case study: AI in education",
          "Suppose an educational platform wants to build an AI learning assistant.",
          "The engineer must identify:",
          "The user problem.",
          "The input information.",
          "The expected assistant behaviour.",
          "The model or AI approach.",
          "The evaluation criteria.",
          "The data privacy requirements.",
          "The cost and performance constraints.",
          "Students should not assume that every problem needs a large language model. Sometimes a traditional database query, deterministic algorithm or simple statistical model is more appropriate."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1102
  },
  {
    "id": "sec-05",
    "sectionNum": 5,
    "title": "Introduction to AI Engineering",
    "duration": "1.5 hours",
    "partNum": 1,
    "partName": "Part I — Artificial Intelligence Foundations",
    "tag": "Foundations & Landscape",
    "subsections": [
      {
        "title": "5.1 What is AI Engineering?",
        "paragraphs": [
          "AI Engineering is the practice of designing, building, evaluating, integrating, deploying and maintaining systems that use AI capabilities.",
          "An AI engineer must understand both AI technology and traditional software engineering."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "5.2 Different engineering roles",
        "paragraphs": [
          "Role",
          "Responsibility",
          "AI Engineer",
          "Builds AI-powered software applications",
          "ML Engineer",
          "Develops and deploys ML systems",
          "Data Scientist",
          "Performs analysis and statistical modelling",
          "AI Researcher",
          "Develops new AI techniques",
          "Data Engineer",
          "Develops data infrastructure and pipelines",
          "MLOps Engineer",
          "Builds infrastructure for ML deployment and operations"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "5.3 AI application architecture",
        "paragraphs": [
          "A simple AI-powered application generally contains:",
          "Frontend / User Interface",
          "Collects user input and displays results",
          "Backend / Application Logic",
          "Authentication, validation and business rules",
          "AI Service / Model",
          "Prediction, reasoning or content generation",
          "Data and Storage",
          "Datasets, model artifacts and application records",
          "A production architecture may also need monitoring, security, caching, queues, evaluation infrastructure and external APIs."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "5.4 Training vs inference",
        "paragraphs": [
          "Training: The process of adjusting model parameters using training data.",
          "Inference: Using an already trained model to generate a prediction or output.",
          "For example:",
          "Training: A model learns patterns from historical house prices.",
          "Inference: A user provides a house's details and the system estimates its price."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "5.5 Model deployment",
        "paragraphs": [
          "Important concepts:",
          "Model serving.",
          "API integration.",
          "Request validation.",
          "Response formatting.",
          "Latency.",
          "Throughput.",
          "Resource utilization.",
          "Scalability."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "5.6 Model monitoring",
        "paragraphs": [
          "An AI system may perform differently after deployment because its input data, operating environment or users change.",
          "Introduce:",
          "Data drift.",
          "Model performance degradation.",
          "Monitoring prediction quality.",
          "System errors.",
          "Latency and cost.",
          "Responsible AI."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "5.7 Responsible AI",
        "paragraphs": [
          "Students must understand:",
          "Data privacy.",
          "Fairness and bias.",
          "Security.",
          "Explainability.",
          "Reliability.",
          "Human supervision.",
          "Transparency.",
          "Practical case study: Design a technical architecture for an AI-based educational assistant. Provide a component diagram, describe each component and justify the technology choices.",
          "PART II — PYTHON PROGRAMMING FOR AI",
          "Python is the main programming foundation of this module. Students should learn not only how to write syntax but also how to reason about program execution, structure reusable code and handle data reliably.",
          "The sequence takes inspiration from Harvard CS50P, covering functions, conditionals, loops, exceptions, testing, libraries, classes and file operations.",
          "edX+1"
        ],
        "codeBlocks": [
          "[เรียนเขียนโปรแกรม ออนไลน์ สอนเขียนโค๊ดโดยมืออาชีพ | Fastwork](https://images.openai.com/static-rsc-4/H-tczzXeluUh8jNERG5FHD4jsiDh_HEE5z3JRK3e6VEW172K59oxumecjjh1qZKFiAYRZYeSGBGknS2dze2sMfQ8gsOgTIvf-hJamLCpepo1pOojUpFY2TNB6s7u6dxn1cLlzHMgGJkko9xklzwsjZjHqT4x66oV0p80jpadLdY?purpose=inline)",
          "[fastwork.co](https://fastwork.co/coding-course?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 3098
  },
  {
    "id": "sec-06",
    "sectionNum": 6,
    "title": "Computational Thinking and Programming Logic",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "6.1 What is computational thinking?",
        "paragraphs": [
          "Computational thinking is the process of representing a problem in a form that a computer can solve.",
          "It involves four major ideas:",
          "Decomposition — breaking a problem into smaller parts.",
          "Pattern recognition — identifying repeated structures.",
          "Abstraction — ignoring irrelevant details.",
          "Algorithm design — creating a sequence of steps."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "6.2 Understanding inputs, processing and outputs",
        "paragraphs": [
          "Every basic program can be understood through three stages.",
          "Example: Calculate a student's average marks.",
          "Input: Marks in three subjects.",
          "Processing: Add the marks and divide by three.",
          "Output: Average marks."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "6.3 Algorithm design",
        "paragraphs": [
          "An algorithm is a finite and unambiguous sequence of instructions for solving a problem.",
          "Pseudocode:",
          "Python implementation:"
        ],
        "codeBlocks": [
          "START READ marks1 READ marks2 READ marks3 total = marks1 + marks2 + marks3 average = total / 3 DISPLAY average END",
          "marks1 = 80marks2 = 75marks3 = 90total = marks1 + marks2 + marks3average = total / 3print(\"Average:\", average)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "6.4 Introduction to algorithm complexity",
        "paragraphs": [
          "Students should learn why program efficiency matters as datasets become larger.",
          "Consider finding an item in a list.",
          "Linear search:",
          "If there are \\(n\\) elements, linear search may examine all \\(n\\) elements.",
          "Its worst-case time complexity is:",
          "\\[ O(n) \\]",
          "Students should also understand:",
          "Constant time: \\(O(1)\\).",
          "Linear time: \\(O(n)\\).",
          "Logarithmic time: \\(O(\\log n)\\).",
          "Quadratic time: \\(O(n^2)\\).",
          "Binary search can achieve \\(O(\\log n)\\) time on sorted data.",
          "Exercise: Implement both linear search and binary search, compare how many elements they inspect and explain why binary search requires sorted input."
        ],
        "codeBlocks": [
          "def linear_search(values, target): for index, value in enumerate(values): if value == target: return index return -1numbers = [10, 20, 30, 40, 50]print(linear_search(numbers, 30))"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1880
  },
  {
    "id": "sec-07",
    "sectionNum": 7,
    "title": "Python Environment and Development Tools",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "7.1 Introduction to Python",
        "paragraphs": [
          "Python is a high-level, general-purpose programming language widely used in automation, software engineering, scientific computing and AI.",
          "Its practical strengths include readable syntax and a large ecosystem of libraries."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "7.2 Python interpreter",
        "paragraphs": [
          "A Python interpreter executes Python code.",
          "Example:",
          "Save this as:",
          "hello.py",
          "Run it from the terminal:",
          "python hello.py",
          "On some systems, the command may be:",
          "python3 hello.py"
        ],
        "codeBlocks": [
          "print(\"Welcome to AI Engineering\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "7.3 Development environment",
        "paragraphs": [
          "Students will work with:",
          "Visual Studio Code.",
          "Python interpreter.",
          "Integrated terminal.",
          "Google Colab.",
          "Jupyter Notebook.",
          "Package manager.",
          "Virtual environments."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "7.4 Installing the required libraries",
        "paragraphs": [
          "Create a project folder:",
          "mkdir ai-engineering-module-1 cd ai-engineering-module-1",
          "Create a virtual environment:",
          "python -m venv .venv",
          "Activate it on Windows PowerShell:",
          ".venv\\Scripts\\Activate.ps1",
          "Activate it on macOS or Linux:",
          "source .venv/bin/activate",
          "Install the libraries:",
          "python -m pip install numpy pandas matplotlib jupyter",
          "Verify the installations:"
        ],
        "codeBlocks": [
          "import numpyimport pandasimport matplotlibprint(\"NumPy:\", numpy.__version__)print(\"Pandas:\", pandas.__version__)print(\"Matplotlib:\", matplotlib.__version__)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "7.5 Why virtual environments matter",
        "paragraphs": [
          "A virtual environment keeps the dependencies of one project separate from other projects.",
          "For example:",
          "Project A may require one version of Pandas.",
          "Project B may require a different version.",
          "Installing everything globally can create dependency conflicts.",
          "The VS Code Python guidance also recommends using project-specific virtual environments.",
          "Visual Studio Code"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1767
  },
  {
    "id": "sec-08",
    "sectionNum": 8,
    "title": "Python Syntax, Variables and Data Types",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "8.1 Python syntax",
        "paragraphs": [
          "Python uses indentation to define code blocks.",
          "The indented statements belong to the if block.",
          "Unlike many programming languages, indentation is part of Python's syntax, not merely visual formatting."
        ],
        "codeBlocks": [
          "age = 22if age >= 18: print(\"Adult\") print(\"Eligible for the next verification step\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "8.2 Variables",
        "paragraphs": [
          "A variable is a name that refers to an object.",
          "Good variable names describe their meaning.",
          "Prefer:",
          "Rather than:"
        ],
        "codeBlocks": [
          "student_name = \"Aman\"student_age = 22course_name = \"AI Engineering\"",
          "total_marks = 450",
          "x = 450",
          "Use clear naming conventions and avoid Python reserved words such as class, def and if."
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "8.3 Python data types",
        "paragraphs": [
          "Data type",
          "Example",
          "Description",
          "int",
          "25",
          "Integer",
          "float",
          "25.5",
          "Floating-point number",
          "str",
          "\"AI\"",
          "Text",
          "bool",
          "True",
          "Boolean value",
          "complex",
          "3 + 4j",
          "Complex number",
          "NoneType",
          "None",
          "Absence of a value",
          "Code:"
        ],
        "codeBlocks": [
          "age = 22price = 999.99name = \"Python\"is_active = Truevalue = Noneprint(type(age))print(type(price))print(type(name))print(type(is_active))print(type(value))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "8.4 Dynamic typing",
        "paragraphs": [
          "Python is dynamically typed.",
          "You do not declare a variable's type in advance.",
          "The name value is reassigned to an object of a different type."
        ],
        "codeBlocks": [
          "value = 100print(type(value))value = \"Artificial Intelligence\"print(type(value))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "8.5 Type conversion",
        "paragraphs": [
          "Conversion changes a value from one compatible type to another.",
          "Common conversion functions:",
          "int()",
          "float()",
          "str()",
          "bool()",
          "list()",
          "tuple()",
          "set()",
          "A conversion may fail when the input is invalid."
        ],
        "codeBlocks": [
          "age_text = \"22\"age = int(age_text)print(age + 1)",
          "number = \"hello\"# int(number) would raise ValueError"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "8.6 Mutable and immutable objects",
        "paragraphs": [
          "Mutable objects can be modified after creation.",
          "Examples:",
          "Lists.",
          "Dictionaries.",
          "Sets.",
          "Immutable objects cannot be modified in place.",
          "Examples:",
          "Integers.",
          "Floats.",
          "Strings.",
          "Tuples.",
          "Example:",
          "A list is mutable.",
          "A new string is created and the variable is assigned to it; the original string is not modified."
        ],
        "codeBlocks": [
          "numbers = [10, 20, 30]numbers.append(40)print(numbers)",
          "name = \"Python\"name = name + \" Programming\"print(name)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "8.7 Object identity and equality",
        "paragraphs": [
          "Two useful concepts:",
          "is checks whether two references point to the same object.",
          "A common Python convention is:"
        ],
        "codeBlocks": [
          "== checks equality of values.",
          "a = [1, 2, 3]b = [1, 2, 3]print(a == b) # Trueprint(a is b) # False",
          "result = Noneif result is None: print(\"No result available\")"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 2445
  },
  {
    "id": "sec-09",
    "sectionNum": 9,
    "title": "Python Operators and Expressions",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "9.1 Arithmetic operators",
        "paragraphs": [
          "Operator",
          "Meaning",
          "Example",
          "+",
          "Addition",
          "10 + 5",
          "Subtraction",
          "10 - 5",
          "Multiplication",
          "10 * 5",
          "/",
          "Division",
          "10 / 5",
          "//",
          "Floor division",
          "11 // 2",
          "%",
          "Modulus",
          "11 % 2",
          "Exponentiation",
          "2 ** 3"
        ],
        "codeBlocks": [],
        "bullets": [
          "",
          "",
          "*"
        ],
        "exercise": null
      },
      {
        "title": "9.2 Comparison operators",
        "paragraphs": [
          "Comparison expressions return Boolean values."
        ],
        "codeBlocks": [
          "a = 10b = 20print(a == b)print(a != b)print(a > b)print(a < b)print(a >= b)print(a <= b)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "9.3 Logical operators",
        "paragraphs": [
          "Logical operators:",
          "and",
          "or",
          "not"
        ],
        "codeBlocks": [
          "age = 22has_id = Trueeligible = age >= 18 and has_idprint(eligible)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "9.4 Membership operators",
        "paragraphs": [],
        "codeBlocks": [
          "skills = [\"Python\", \"NumPy\", \"Pandas\"]print(\"Python\" in skills)print(\"Java\" not in skills)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "9.5 Assignment operators",
        "paragraphs": [],
        "codeBlocks": [
          "score = 50score += 10score -= 5score *= 2print(score)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "9.6 Operator precedence",
        "paragraphs": [
          "Python evaluates expressions according to operator precedence.",
          "For clarity, use parentheses when expressions are complex.",
          "AI application: Calculate a weighted student performance score using mathematical and logical operators."
        ],
        "codeBlocks": [
          "result = (10 + 5) * 2print(result)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1005
  },
  {
    "id": "sec-10",
    "sectionNum": 10,
    "title": "Strings and Text Processing",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "Overview & Objectives",
        "paragraphs": [
          "Text processing is especially important for AI because language models, document-processing systems and NLP applications operate on textual information."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "10.1 Creating strings",
        "paragraphs": [],
        "codeBlocks": [
          "name = \"Artificial Intelligence\"message = 'Welcome to Python'description = \"\"\"Python is used for AI development.\"\"\"print(name)print(message)print(description)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "10.2 String indexing",
        "paragraphs": [
          "Characters are positioned using indexes starting at zero."
        ],
        "codeBlocks": [
          "word = \"PYTHON\"print(word[0]) # Pprint(word[1]) # Yprint(word[-1]) # N"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "10.3 String slicing",
        "paragraphs": [
          "The ending index is excluded."
        ],
        "codeBlocks": [
          "word = \"ARTIFICIAL\"print(word[0:4])print(word[4:])print(word[:5])print(word[::-1])"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "10.4 Common string methods",
        "paragraphs": [
          "Other methods:",
          "split()",
          "join()",
          "find()",
          "count()",
          "startswith()",
          "endswith()",
          "isdigit()",
          "isalpha()"
        ],
        "codeBlocks": [
          "text = \" artificial intelligence \"print(text.strip())print(text.lower())print(text.upper())print(text.replace(\"artificial\", \"modern\"))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "10.5 String formatting",
        "paragraphs": [
          "Use f-strings to insert variables into strings."
        ],
        "codeBlocks": [
          "name = \"Sam\"score = 95message = f\"Student {name} scored {score}%\"print(message)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "10.6 Basic text preprocessing",
        "paragraphs": [
          "This introduces simple text normalization.",
          "It is not equivalent to complete NLP preprocessing, which may additionally involve tokenization, Unicode handling, language-specific normalization and other transformations."
        ],
        "codeBlocks": [
          "sentence = \"AI Engineering IS Interesting!\"processed = sentence.lower()processed = processed.strip()processed = processed.replace(\"!\", \"\")words = processed.split()print(words)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1575
  },
  {
    "id": "sec-11",
    "sectionNum": 11,
    "title": "Input, Output and Type Conversion",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "11.1 Reading user input",
        "paragraphs": [
          "Python's input() function reads a line of text.",
          "Important: input() returns a string, even when the user enters digits."
        ],
        "codeBlocks": [
          "name = input(\"Enter your name: \")print(\"Welcome\", name)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "11.2 Converting input",
        "paragraphs": [],
        "codeBlocks": [
          "marks = float(input(\"Enter your marks: \"))print(\"Marks:\", marks)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "11.3 Validating input",
        "paragraphs": [
          "This combines input handling, conversion, conditions and exception handling."
        ],
        "codeBlocks": [
          "try: marks = float(input(\"Enter marks: \")) if 0 <= marks <= 100: print(\"Valid marks:\", marks) else: print(\"Marks must be between 0 and 100\")except ValueError: print(\"Please enter a valid number\")"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 775
  },
  {
    "id": "sec-12",
    "sectionNum": 12,
    "title": "Conditional Statements and Decision Making",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "12.1 The if statement",
        "paragraphs": [
          "Conditional statements allow a program to execute different instructions depending on whether a condition is true."
        ],
        "codeBlocks": [
          "temperature = 35if temperature > 30: print(\"High temperature\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "12.2 The if-else statement",
        "paragraphs": [],
        "codeBlocks": [
          "score = 75if score >= 40: print(\"Pass\")else: print(\"Fail\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "12.3 The if-elif-else structure",
        "paragraphs": [
          "Use multiple conditions when a problem has more than two possible outcomes."
        ],
        "codeBlocks": [
          "score = 85if score >= 90: grade = \"A\"elif score >= 75: grade = \"B\"elif score >= 60: grade = \"C\"elif score >= 40: grade = \"D\"else: grade = \"F\"print(\"Grade:\", grade)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "12.4 Nested conditions",
        "paragraphs": [],
        "codeBlocks": [
          "age = 22has_completed_course = Trueif age >= 18: if has_completed_course: print(\"Eligible for certification assessment\") else: print(\"Complete the course first\")else: print(\"Age requirement not met\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "12.5 Truthy and falsy values",
        "paragraphs": [
          "Python treats some values as false in a Boolean context.",
          "Examples:",
          "False",
          "None",
          "0",
          "0.0",
          "\"\"",
          "[]",
          "{}",
          "Example:"
        ],
        "codeBlocks": [
          "student_name = \"\"if student_name: print(\"Name provided\")else: print(\"Name is missing\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "12.6 Match statements",
        "paragraphs": [
          "Python also provides match for structural pattern matching.",
          "Practical: Build a course recommendation program that suggests a learning path based on a student's interests and previous knowledge."
        ],
        "codeBlocks": [
          "choice = \"numpy\"match choice: case \"python\": print(\"Python selected\") case \"numpy\": print(\"NumPy selected\") case \"pandas\": print(\"Pandas selected\") case _: print(\"Unknown selection\")"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1453
  },
  {
    "id": "sec-13",
    "sectionNum": 13,
    "title": "Loops and Iteration",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "13.1 Why loops are important",
        "paragraphs": [
          "Loops allow programs to repeat operations without writing the same statements again and again.",
          "In AI engineering, loops are used for:",
          "Processing records.",
          "Reading data.",
          "Running experiments.",
          "Iterating through training configurations.",
          "Evaluating multiple predictions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "13.2 The for loop",
        "paragraphs": [
          "The loop processes one item at a time."
        ],
        "codeBlocks": [
          "scores = [75, 80, 90, 65, 85]for score in scores: print(score)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "13.3 The range() function",
        "paragraphs": [
          "range(1, 6) generates integers from 1 through 5.",
          "It can also use a step:"
        ],
        "codeBlocks": [
          "for number in range(1, 6): print(number)",
          "for number in range(0, 11, 2): print(number)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "13.4 The while loop",
        "paragraphs": [
          "A while loop executes as long as its condition remains true."
        ],
        "codeBlocks": [
          "counter = 1while counter <= 5: print(counter) counter += 1"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "13.5 Break and continue",
        "paragraphs": [
          "break terminates a loop.",
          "continue skips the current iteration."
        ],
        "codeBlocks": [
          "for number in range(10): if number == 5: break print(number)",
          "for number in range(10): if number % 2 == 0: continue print(number)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "13.6 Nested loops",
        "paragraphs": [
          "Nested loops are useful for processing matrices and multidimensional data, although large Python-level nested loops can be inefficient for numerical operations."
        ],
        "codeBlocks": [
          "for row in range(1, 4): for column in range(1, 4): print(row, column)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "13.7 Enumerate and zip",
        "paragraphs": [
          "enumerate() provides both an index and a value.",
          "zip() combines multiple iterables."
        ],
        "codeBlocks": [
          "students = [\"Aman\", \"Riya\", \"Karan\"]for index, student in enumerate(students, start=1): print(index, student)",
          "students = [\"Aman\", \"Riya\", \"Karan\"]scores = [80, 90, 75]for student, score in zip(students, scores): print(student, score)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "13.8 Looping over dictionaries",
        "paragraphs": [
          "Programming exercises:",
          "Print all even numbers between 1 and 100.",
          "Calculate factorial using a loop.",
          "Find the largest number in a list.",
          "Count the number of occurrences of a word.",
          "Calculate the average of student marks.",
          "Build a multiplication table generator."
        ],
        "codeBlocks": [
          "student = { \"name\": \"Aman\", \"age\": 22, \"score\": 90}for key, value in student.items(): print(key, value)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1968
  },
  {
    "id": "sec-14",
    "sectionNum": 14,
    "title": "Python Functions and Modular Programming",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "Overview & Objectives",
        "paragraphs": [
          "Core programming skill"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.1 What is a function?",
        "paragraphs": [
          "A function is a reusable block of code designed to perform a particular operation.",
          "Functions help developers:",
          "Avoid repeated code.",
          "Separate responsibilities.",
          "Simplify debugging.",
          "Improve readability.",
          "Test individual operations.",
          "Maintain larger applications."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.2 Defining a function",
        "paragraphs": [],
        "codeBlocks": [
          "def greet(): print(\"Welcome to AI Engineering\")greet()",
          "The def keyword defines a function. The function executes when called."
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.3 Function parameters and arguments",
        "paragraphs": [
          "Parameters are names defined in a function declaration. Arguments are the values passed when calling the function."
        ],
        "codeBlocks": [
          "def greet_student(name): print(f\"Welcome, {name}\")greet_student(\"Aman\")greet_student(\"Riya\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.4 Return values",
        "paragraphs": [
          "A function can return a result to the calling code.",
          "A function without an explicit return value returns None."
        ],
        "codeBlocks": [
          "def calculate_average(marks): return sum(marks) / len(marks)scores = [80, 90, 85]average = calculate_average(scores)print(\"Average:\", average)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.5 Multiple parameters",
        "paragraphs": [],
        "codeBlocks": [
          "def calculate_total(price, quantity): return price * quantitytotal = calculate_total(500, 3)print(total)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.6 Default arguments",
        "paragraphs": [],
        "codeBlocks": [
          "def create_student(name, course=\"AI Engineering\"): return { \"name\": name, \"course\": course }print(create_student(\"Aman\"))print(create_student(\"Riya\", \"Python\"))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.7 Keyword arguments",
        "paragraphs": [],
        "codeBlocks": [
          "def student_profile(name, age, city): print(name, age, city)student_profile( name=\"Aman\", age=22, city=\"Pune\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.8 Arbitrary positional and keyword arguments",
        "paragraphs": [],
        "codeBlocks": [
          "def calculate_total(*numbers): return sum(numbers)print(calculate_total(10, 20, 30, 40))",
          "def display_profile(**details): for key, value in details.items(): print(key, value)display_profile( name=\"Aman\", course=\"AI\", level=\"Beginner\")"
        ],
        "bullets": [
          "args collects additional positional arguments.",
          "*kwargs collects additional keyword arguments."
        ],
        "exercise": null
      },
      {
        "title": "14.9 Variable scope",
        "paragraphs": [
          "Local variables are defined inside functions. Global variables are defined at module level.",
          "The variable lesson is local to the function.",
          "Prefer passing required information through function arguments instead of modifying global variables unnecessarily."
        ],
        "codeBlocks": [
          "course = \"AI Engineering\"def show_course(): lesson = \"Python Fundamentals\" print(course) print(lesson)show_course()"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.10 Lambda functions",
        "paragraphs": [
          "Lambda functions are small anonymous functions.",
          "They are useful for simple expressions, but normal named functions are preferable for complex logic."
        ],
        "codeBlocks": [
          "square = lambda number: number ** 2print(square(5))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.11 Function documentation and type hints",
        "paragraphs": [
          "Type hints describe expected data types. Python does not automatically enforce them at runtime."
        ],
        "codeBlocks": [
          "def calculate_accuracy( correct: int, total: int) -> float: \"\"\" Calculate classification accuracy as a percentage. \"\"\" if total <= 0: raise ValueError(\"Total must be positive\") return (correct / total) * 100print(calculate_accuracy(90, 100))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "14.12 Pure functions",
        "paragraphs": [
          "A pure function:",
          "Produces the same output for the same inputs.",
          "Does not modify external state.",
          "Does not produce unintended side effects.",
          "Example:",
          "Pure functions are easier to test and are particularly useful when building data-processing pipelines."
        ],
        "codeBlocks": [
          "def normalize_score(score): return score / 100print(normalize_score(75))"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 3343
  },
  {
    "id": "sec-15",
    "sectionNum": 15,
    "title": "Python Data Structures",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "Overview & Objectives",
        "paragraphs": [
          "Data structures provide ways to organize and access information.",
          "This section is especially important because AI systems continuously manipulate collections of numerical values, text, configuration data and records."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "15.1 Lists",
        "paragraphs": [
          "A list is an ordered, mutable collection.",
          "Important list operations:",
          "Operation",
          "Meaning",
          "append()",
          "Add an item",
          "extend()",
          "Add multiple items",
          "insert()",
          "Insert at an index",
          "remove()",
          "Remove an item by value",
          "pop()",
          "Remove and return an item",
          "sort()",
          "Sort the list",
          "reverse()",
          "Reverse the list",
          "count()",
          "Count occurrences",
          "index()",
          "Find an item's position",
          "List slicing:"
        ],
        "codeBlocks": [
          "scores = [70, 80, 90, 85]print(scores[0])scores.append(95)scores.remove(70)print(scores)",
          "numbers = [10, 20, 30, 40, 50]print(numbers[1:4])print(numbers[:3])print(numbers[-2:])print(numbers[::-1])"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "15.2 Tuples",
        "paragraphs": [
          "A tuple is an ordered, immutable collection.",
          "Tuples are useful for fixed collections of values.",
          "Tuple unpacking:"
        ],
        "codeBlocks": [
          "model_config = (\"classification\", 100, 0.01)print(model_config[0])print(model_config[1])",
          "width, height = (1920, 1080)print(width)print(height)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "15.3 Sets",
        "paragraphs": [
          "A set is an unordered collection of unique elements.",
          "Sets remove duplicate values.",
          "Operations:"
        ],
        "codeBlocks": [
          "skills = { \"Python\", \"NumPy\", \"Pandas\", \"Python\"}print(skills)",
          "python_skills = {\"Python\", \"NumPy\", \"Pandas\"}ai_skills = {\"Python\", \"TensorFlow\", \"PyTorch\"}print(python_skills.union(ai_skills))print(python_skills.intersection(ai_skills))print(python_skills.difference(ai_skills))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "15.4 Dictionaries",
        "paragraphs": [
          "A dictionary stores key-value pairs.",
          "Add or modify information:",
          "Safely retrieve a value:"
        ],
        "codeBlocks": [
          "student = { \"name\": \"Aman\", \"age\": 22, \"course\": \"AI Engineering\", \"score\": 92}print(student[\"name\"])print(student[\"score\"])",
          "student[\"city\"] = \"Pune\"student[\"score\"] = 95print(student)",
          "email = student.get(\"email\", \"Not provided\")print(email)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "15.5 Nested data structures",
        "paragraphs": [
          "Real-world data often contains nested structures."
        ],
        "codeBlocks": [
          "students = [ { \"name\": \"Aman\", \"scores\": [80, 90, 85] }, { \"name\": \"Riya\", \"scores\": [95, 92, 98] }]for student in students: average = sum(student[\"scores\"]) / len(student[\"scores\"]) print(student[\"name\"], average)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "15.6 Choosing the correct data structure",
        "paragraphs": [
          "Requirement",
          "Suitable structure",
          "Ordered collection that changes",
          "List",
          "Fixed ordered values",
          "Tuple",
          "Unique items",
          "Set",
          "Key-value mapping",
          "Dictionary",
          "Tabular numerical data",
          "Pandas DataFrame",
          "High-performance numerical arrays",
          "NumPy ndarray",
          "Exercise: Store 100 student records in Python data structures and implement searching, updating, filtering and summarizing."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 2495
  },
  {
    "id": "sec-16",
    "sectionNum": 16,
    "title": "Comprehensions and Functional Programming Basics",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "16.1 List comprehensions",
        "paragraphs": [
          "A list comprehension creates a list using a compact expression.",
          "Traditional implementation:",
          "Comprehension:"
        ],
        "codeBlocks": [
          "squares = []for number in range(1, 6): squares.append(number ** 2)",
          "squares = [number ** 2 for number in range(1, 6)]print(squares)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "16.2 Conditional comprehensions",
        "paragraphs": [],
        "codeBlocks": [
          "numbers = [1, 2, 3, 4, 5, 6]even_numbers = [ number for number in numbers if number % 2 == 0]print(even_numbers)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "16.3 Dictionary comprehensions",
        "paragraphs": [],
        "codeBlocks": [
          "numbers = [1, 2, 3, 4]squares = { number: number ** 2 for number in numbers}print(squares)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "16.4 map(), filter() and zip()",
        "paragraphs": [],
        "codeBlocks": [
          "numbers = [1, 2, 3, 4, 5]squares = list(map(lambda x: x ** 2, numbers))even_numbers = list( filter(lambda x: x % 2 == 0, numbers))print(squares)print(even_numbers)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "16.5 Iterators and generators",
        "paragraphs": [
          "An iterator produces values one at a time.",
          "A generator is a convenient way to create an iterator using yield.",
          "Generators can be useful when processing large datasets because they avoid storing every generated result in memory at once.",
          "Practical: Create a data-processing pipeline that filters invalid records, transforms values and calculates statistics."
        ],
        "codeBlocks": [
          "def generate_numbers(limit): for number in range(limit): yield numberfor value in generate_numbers(5): print(value)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1287
  },
  {
    "id": "sec-17",
    "sectionNum": 17,
    "title": "Python Modules, Packages and Libraries",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "17.1 What is a module?",
        "paragraphs": [
          "A module is a Python file that can be imported into another Python program.",
          "Create a file called calculator.py:",
          "Create main.py:"
        ],
        "codeBlocks": [
          "def add(a, b): return a + bdef subtract(a, b): return a - b",
          "import calculatorprint(calculator.add(10, 20))print(calculator.subtract(20, 5))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "17.2 Different import methods",
        "paragraphs": [
          "Or:",
          "Aliases:"
        ],
        "codeBlocks": [
          "import mathprint(math.sqrt(25))",
          "from math import sqrtprint(sqrt(25))",
          "import math as mprint(m.pi)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "17.3 Standard library",
        "paragraphs": [
          "Python includes a standard library containing useful modules.",
          "Library",
          "Purpose",
          "math",
          "Mathematical functions",
          "random",
          "Random number generation",
          "statistics",
          "Statistical calculations",
          "datetime",
          "Dates and times",
          "os",
          "Operating-system interaction",
          "pathlib",
          "File and directory paths",
          "json",
          "JSON processing",
          "csv",
          "CSV processing",
          "collections",
          "Specialized data structures",
          "re",
          "Regular expressions",
          "Example:"
        ],
        "codeBlocks": [
          "import statisticsscores = [80, 90, 85, 75, 95]print(statistics.mean(scores))print(statistics.median(scores))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "17.4 Packages and third-party libraries",
        "paragraphs": [
          "A package organizes reusable Python modules.",
          "AI-related examples:",
          "NumPy — numerical computing.",
          "Pandas — data analysis.",
          "Matplotlib — visualization.",
          "Scikit-learn — traditional Machine Learning.",
          "PyTorch — deep learning.",
          "TensorFlow — machine learning and deep learning.",
          "Students should understand that packages provide reusable functionality rather than requiring programmers to implement every algorithm from scratch.",
          "Practical: Create a small reusable Python package with a data-cleaning module and a statistics module."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1547
  },
  {
    "id": "sec-18",
    "sectionNum": 18,
    "title": "Exception Handling and Debugging",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "18.1 Understanding errors",
        "paragraphs": [
          "Three important error categories:",
          "Syntax errors: The program does not follow Python grammar.",
          "Runtime errors: Occur while the program is executing.",
          "This raises ZeroDivisionError.",
          "Logical errors: The code runs but produces incorrect results.",
          "The program executes but calculates the wrong area."
        ],
        "codeBlocks": [
          "# Incorrect syntax:# if score > 50# print(\"Pass\")",
          "print(10 / 0)",
          "length = 10width = 5area = length + width # Incorrect formulaprint(area)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "18.2 Exception handling",
        "paragraphs": [],
        "codeBlocks": [
          "try: number = int(input(\"Enter a number: \")) result = 100 / number print(result)except ValueError: print(\"Please enter an integer\")except ZeroDivisionError: print(\"Cannot divide by zero\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "18.3 Else and finally",
        "paragraphs": [],
        "codeBlocks": [
          "try: number = int(input(\"Enter a number: \"))except ValueError: print(\"Invalid input\")else: print(\"Valid number:\", number)finally: print(\"Execution finished\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "18.4 Raising exceptions",
        "paragraphs": [
          "Developers can deliberately raise exceptions when input violates requirements."
        ],
        "codeBlocks": [
          "def validate_age(age): if age < 0: raise ValueError(\"Age cannot be negative\") return ageprint(validate_age(22))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "18.5 Debugging",
        "paragraphs": [
          "Students must learn to:",
          "Read complete error messages.",
          "Identify the relevant file and line.",
          "Inspect variable values.",
          "Reproduce a bug.",
          "Isolate the problem.",
          "Apply a correction.",
          "Test the corrected program."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1443
  },
  {
    "id": "sec-19",
    "sectionNum": 19,
    "title": "File Handling and Data Serialization",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "Overview & Objectives",
        "paragraphs": [
          "AI engineers work with datasets, configuration files, model metadata and application records. File handling is therefore essential."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "19.1 Reading a text file",
        "paragraphs": [],
        "codeBlocks": [
          "with open(\"notes.txt\", \"r\", encoding=\"utf-8\") as file: content = file.read()print(content)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "19.2 Writing a file",
        "paragraphs": [
          "Common file modes:",
          "Mode",
          "Purpose",
          "r",
          "Read",
          "w",
          "Write and replace",
          "a",
          "Append",
          "x",
          "Create a new file",
          "b",
          "Binary mode",
          "t",
          "Text mode"
        ],
        "codeBlocks": [
          "with open(\"report.txt\", \"w\", encoding=\"utf-8\") as file: file.write(\"AI Engineering Module 1\") file.write(\"\\nPython fundamentals completed\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "19.3 Working with CSV",
        "paragraphs": [
          "Reading:"
        ],
        "codeBlocks": [
          "import csvrecords = [ [\"Name\", \"Score\"], [\"Aman\", 90], [\"Riya\", 95]]with open( \"students.csv\", \"w\", newline=\"\", encoding=\"utf-8\") as file: writer = csv.writer(file) writer.writerows(records)",
          "import csvwith open( \"students.csv\", \"r\", encoding=\"utf-8\") as file: reader = csv.DictReader(file) for row in reader: print(row)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "19.4 Working with JSON",
        "paragraphs": [
          "JSON is commonly used to represent structured data and exchange information between applications.",
          "Read JSON:"
        ],
        "codeBlocks": [
          "import jsonstudent = { \"name\": \"Aman\", \"age\": 22, \"skills\": [\"Python\", \"NumPy\", \"Pandas\"]}with open(\"student.json\", \"w\", encoding=\"utf-8\") as file: json.dump(student, file, indent=4)",
          "import jsonwith open(\"student.json\", \"r\", encoding=\"utf-8\") as file: data = json.load(file)print(data[\"name\"])print(data[\"skills\"])"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "19.5 Working with paths",
        "paragraphs": [
          "Practical: Create a student data-management program that saves records to CSV and JSON and loads them later."
        ],
        "codeBlocks": [
          "from pathlib import Pathdata_folder = Path(\"datasets\")data_folder.mkdir(exist_ok=True)file_path = data_folder / \"students.csv\"print(file_path)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1645
  },
  {
    "id": "sec-20",
    "sectionNum": 20,
    "title": "Object-Oriented Programming in Python",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "20.1 What is OOP?",
        "paragraphs": [
          "Object-Oriented Programming organizes code around objects that contain data and related behaviour.",
          "Important concepts:",
          "Classes.",
          "Objects.",
          "Attributes.",
          "Methods.",
          "Constructors.",
          "Encapsulation.",
          "Inheritance.",
          "Polymorphism.",
          "Composition."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "20.2 Classes and objects",
        "paragraphs": [
          "A class defines a structure. An object is an instance of that class.",
          "__init__() initializes a new object.",
          "self refers to the current object."
        ],
        "codeBlocks": [
          "class Student: def __init__(self, name, score): self.name = name self.score = score def display(self): print(self.name, self.score)student1 = Student(\"Aman\", 90)student2 = Student(\"Riya\", 95)student1.display()student2.display()"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "20.3 Instance attributes and methods",
        "paragraphs": [
          "This is a simplified software model, not an actual trained ML model."
        ],
        "codeBlocks": [
          "class AIModel: def __init__(self, model_name, version): self.model_name = model_name self.version = version def predict(self, input_data): return f\"{self.model_name} processed: {input_data}\"model = AIModel(\"DemoClassifier\", \"1.0\")print(model.predict(\"sample input\"))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "20.4 Encapsulation",
        "paragraphs": [
          "Encapsulation organizes data and operations inside a class and establishes a controlled interface for interacting with that data.",
          "Python uses conventions such as a leading underscore to indicate non-public attributes."
        ],
        "codeBlocks": [
          "class Account: def __init__(self, balance): self._balance = balance def get_balance(self): return self._balanceaccount = Account(5000)print(account.get_balance())"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "20.5 Inheritance",
        "paragraphs": [
          "Inheritance allows a class to reuse or extend another class's behaviour."
        ],
        "codeBlocks": [
          "class Model: def predict(self, data): raise NotImplementedErrorclass TextModel(Model): def predict(self, data): return f\"Analyzed text: {data}\"model = TextModel()print(model.predict(\"AI Engineering\"))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "20.6 Polymorphism",
        "paragraphs": [
          "Different classes can provide the same interface with different implementations."
        ],
        "codeBlocks": [
          "class ImageModel: def process(self): return \"Processing image\"class TextModel: def process(self): return \"Processing text\"models = [ImageModel(), TextModel()]for model in models: print(model.process())"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "20.7 Composition",
        "paragraphs": [
          "Composition means building a class using other objects."
        ],
        "codeBlocks": [
          "class DataProcessor: def clean(self, data): return [value for value in data if value is not None]class AIApplication: def __init__(self): self.processor = DataProcessor() def run(self, data): return self.processor.clean(data)app = AIApplication()print(app.run([10, None, 20, 30]))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "20.8 Dataclasses",
        "paragraphs": [
          "Dataclasses reduce boilerplate for classes mainly used to hold data.",
          "Practical: Develop a small AI model registry using Python classes, objects, methods and configuration objects."
        ],
        "codeBlocks": [
          "from dataclasses import dataclass@dataclassclass ModelConfig: name: str version: str learning_rate: floatconfig = ModelConfig( \"DemoModel\", \"1.0\", 0.01)print(config)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 2771
  },
  {
    "id": "sec-21",
    "sectionNum": 21,
    "title": "Testing, Code Quality and Best Practices",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "Overview & Objectives",
        "paragraphs": [
          "A Python program is not complete merely because it runs once. Developers need to verify that it behaves correctly under normal and unusual inputs."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "21.1 Why software testing matters",
        "paragraphs": [
          "Testing helps identify:",
          "Incorrect calculations.",
          "Invalid input handling.",
          "Unexpected edge cases.",
          "Broken functions.",
          "Regressions after code changes."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "21.2 Assertions",
        "paragraphs": [
          "Assertions are useful for internal checks but should not be the only mechanism for validating external input."
        ],
        "codeBlocks": [
          "def add(a, b): return a + bassert add(5, 5) == 10assert add(-5, 5) == 0print(\"Tests passed\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "21.3 Unit testing",
        "paragraphs": [
          "A unit test checks an individual piece of software.",
          "Run:",
          "python test_average.py"
        ],
        "codeBlocks": [
          "import unittestdef calculate_average(values): if not values: raise ValueError(\"Values cannot be empty\") return sum(values) / len(values)class TestAverage(unittest.TestCase): def test_average(self): self.assertEqual( calculate_average([10, 20, 30]), 20 ) def test_empty_input(self): with self.assertRaises(ValueError): calculate_average([])if __name__ == \"__main__\": unittest.main()"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "21.4 Code quality",
        "paragraphs": [
          "Teach students:",
          "Descriptive naming.",
          "Consistent indentation.",
          "Small functions.",
          "Meaningful comments.",
          "Avoiding repeated code.",
          "Input validation.",
          "Exception handling.",
          "Type hints.",
          "Documentation strings.",
          "Separation of concerns.",
          "Introduce PEP 8 as the Python style guide."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "21.5 Reproducibility",
        "paragraphs": [
          "In AI work, results should be reproducible where practical.",
          "Students should learn to record:",
          "Input datasets.",
          "Python and library versions.",
          "Configuration values.",
          "Random seeds.",
          "Code version.",
          "Experiment outputs.",
          "Assignment: Write unit tests for the student analysis functions and document at least five edge cases."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1690
  },
  {
    "id": "sec-22",
    "sectionNum": 22,
    "title": "Virtual Environments and Package Management",
    "duration": "4–5 hours",
    "partNum": 2,
    "partName": "Part II — Python Programming for AI",
    "tag": "Core Engineering Language",
    "subsections": [
      {
        "title": "22.1 What is package management?",
        "paragraphs": [
          "Package management involves installing, updating and maintaining software libraries that an application depends on."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "22.2 Installing packages",
        "paragraphs": [
          "python -m pip install numpy python -m pip install pandas python -m pip install matplotlib"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "22.3 Checking installed packages",
        "paragraphs": [
          "python -m pip list"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "22.4 Creating a dependency file",
        "paragraphs": [
          "python -m pip freeze > requirements.txt",
          "Install the dependencies later:",
          "python -m pip install -r requirements.txt"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "22.5 Project structure",
        "paragraphs": [
          "A professional beginner project can use this structure:",
          "ai-engineering-module-1/ │ ├── .venv/ │ ├── data/ │ ├── raw/ │ └── processed/ │ ├── notebooks/ │ └── student_analysis.ipynb │ ├── src/ │ ├── data_cleaning.py │ └── analysis.py │ ├── tests/ │ └── test_analysis.py │ ├── requirements.txt └── README.md",
          "Teach students to avoid committing virtual-environment directories and sensitive information into version control.",
          "PART III — NUMPY FOR AI ENGINEERING"
        ],
        "codeBlocks": [
          "[Introduction to NumPy - Zero to Mastery Data Science and Machine Learning Bootcamp](https://images.openai.com/static-rsc-4/1-jyEnaSqCFofm0X9-YSwENM4weq4Me-Kdd35ZFFxW8tr31CBXQSYRshw4H0eet-A0pJaQ1VW2ktfklExVKWPUylfPP8OQ40pq_woSmjYMTOHGdn_MXe7zcsp4KjZJqoyJDSrvRJbZUkfPOSLiMUM00N8J62fs_gLU6npCxzCxk?purpose=inline)",
          "[dev.mrdbourke.com](https://dev.mrdbourke.com/zero-to-mastery-ml/introduction-to-numpy/?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1456
  },
  {
    "id": "sec-23",
    "sectionNum": 23,
    "title": "Introduction to NumPy",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — NumPy for AI Engineering",
    "tag": "High-Performance Numerical Arrays",
    "subsections": [
      {
        "title": "23.1 What is NumPy?",
        "paragraphs": [
          "NumPy is a Python library for efficient numerical computing.",
          "Its central data structure is the multidimensional array called ndarray.",
          "It is useful in AI because numerical data can be represented and processed as arrays and matrices."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "23.2 Python lists vs NumPy arrays",
        "paragraphs": [
          "Python list:",
          "NumPy array:",
          "A Python list can contain different kinds of objects. NumPy arrays are generally designed around homogeneous data types, although object arrays are also possible.",
          "This design allows NumPy to perform many numerical operations efficiently."
        ],
        "codeBlocks": [
          "numbers = [10, 20, 30, 40]",
          "import numpy as npnumbers = np.array([10, 20, 30, 40])print(numbers)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "23.3 Creating arrays",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as npa = np.array([10, 20, 30])zeros = np.zeros(5)ones = np.ones(5)sequence = np.arange(0, 10, 2)values = np.linspace(0, 1, 5)print(a)print(zeros)print(ones)print(sequence)print(values)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "23.4 Array dimensions",
        "paragraphs": [
          "One-dimensional:",
          "Two-dimensional:",
          "Three-dimensional:",
          "Understand these properties:",
          "ndim: Number of dimensions.",
          "shape: Size along each dimension.",
          "size: Total number of elements.",
          "dtype: Data type."
        ],
        "codeBlocks": [
          "array_1d = np.array([10, 20, 30])print(array_1d.ndim)print(array_1d.shape)",
          "array_2d = np.array([ [1, 2, 3], [4, 5, 6]])print(array_2d.ndim)print(array_2d.shape)",
          "array_3d = np.array([ [[1, 2], [3, 4]], [[5, 6], [7, 8]]])print(array_3d.ndim)print(array_3d.shape)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "23.5 Data types",
        "paragraphs": [
          "Students should learn:",
          "Integer types.",
          "Floating-point types.",
          "Boolean arrays.",
          "Type conversion.",
          "Precision and memory considerations."
        ],
        "codeBlocks": [
          "values = np.array([1, 2, 3], dtype=np.float32)print(values)print(values.dtype)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1603
  },
  {
    "id": "sec-24",
    "sectionNum": 24,
    "title": "NumPy Arrays, Indexing and Manipulation",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — NumPy for AI Engineering",
    "tag": "High-Performance Numerical Arrays",
    "subsections": [
      {
        "title": "24.1 Indexing",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as npscores = np.array([70, 80, 90, 85])print(scores[0])print(scores[-1])"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "24.2 Slicing",
        "paragraphs": [],
        "codeBlocks": [
          "scores = np.array([70, 80, 90, 85, 95])print(scores[1:4])print(scores[:3])print(scores[::-1])"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "24.3 Two-dimensional indexing",
        "paragraphs": [
          "Understand:",
          "Row indexing.",
          "Column indexing.",
          "Selecting specific elements.",
          "Selecting complete rows and columns."
        ],
        "codeBlocks": [
          "matrix = np.array([ [10, 20, 30], [40, 50, 60]])print(matrix[0, 1])print(matrix[1, 2])print(matrix[:, 0])"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "24.4 Reshaping",
        "paragraphs": [
          "The total number of elements must remain compatible with the target shape."
        ],
        "codeBlocks": [
          "numbers = np.arange(12)matrix = numbers.reshape(3, 4)print(matrix)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "24.5 Transpose",
        "paragraphs": [],
        "codeBlocks": [
          "matrix = np.array([ [1, 2, 3], [4, 5, 6]])transposed = matrix.Tprint(transposed)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "24.6 Concatenation and stacking",
        "paragraphs": [],
        "codeBlocks": [
          "a = np.array([1, 2, 3])b = np.array([4, 5, 6])combined = np.concatenate((a, b))print(combined)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "24.7 Boolean indexing",
        "paragraphs": [
          "Boolean indexing is useful for selecting values that meet particular conditions."
        ],
        "codeBlocks": [
          "scores = np.array([45, 60, 75, 90, 35])passed = scores[scores >= 40]print(passed)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "24.8 Sorting and searching",
        "paragraphs": [],
        "codeBlocks": [
          "values = np.array([50, 20, 80, 10])print(np.sort(values))print(np.argmax(values))print(np.argmin(values))"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1325
  },
  {
    "id": "sec-25",
    "sectionNum": 25,
    "title": "NumPy Mathematical Computing",
    "duration": "4–5 hours",
    "partNum": 3,
    "partName": "Part III — NumPy for AI Engineering",
    "tag": "High-Performance Numerical Arrays",
    "subsections": [
      {
        "title": "Overview & Objectives",
        "paragraphs": [
          "This section connects Python programming to the mathematical operations used in Machine Learning."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "25.1 Element-wise arithmetic",
        "paragraphs": [
          "These operations apply element by element."
        ],
        "codeBlocks": [
          "import numpy as npa = np.array([10, 20, 30])b = np.array([1, 2, 3])print(a + b)print(a - b)print(a * b)print(a / b)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "25.2 Matrix multiplication",
        "paragraphs": [
          "An important distinction:",
          "@ performs matrix multiplication for compatible arrays.",
          "The official NumPy quickstart explains array operations, matrix multiplication and universal mathematical functions.",
          "NumPy v2.5 Manual"
        ],
        "codeBlocks": [
          "A = np.array([ [1, 2], [3, 4]])B = np.array([ [5, 6], [7, 8]])print(A * B)print(A @ B)"
        ],
        "bullets": [
          "performs element-wise multiplication."
        ],
        "exercise": null
      },
      {
        "title": "25.3 Statistical operations",
        "paragraphs": [
          "Students should understand:",
          "Mean: Arithmetic average.",
          "Variance: Average squared deviation from the mean.",
          "Standard deviation: Square root of variance, expressed in the same units as the observations."
        ],
        "codeBlocks": [
          "scores = np.array([70, 80, 90, 85, 95])print(\"Mean:\", np.mean(scores))print(\"Median:\", np.median(scores))print(\"Variance:\", np.var(scores))print(\"Standard deviation:\", np.std(scores))print(\"Minimum:\", np.min(scores))print(\"Maximum:\", np.max(scores))",
          "\\[ \\bar{x}=\\frac{1}{n}\\sum_{i=1}^{n}x_i \\]"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "25.4 Broadcasting",
        "paragraphs": [
          "Broadcasting lets NumPy perform operations between compatible array shapes without requiring programmers to manually repeat smaller arrays.",
          "This is useful in AI because the same transformation may need to be applied to many records.",
          "Broadcasting follows shape compatibility rules; not all differently shaped arrays can be combined.",
          "NumPy v2.5 Manual"
        ],
        "codeBlocks": [
          "scores = np.array([ [70, 80, 90], [60, 75, 85]])bonus = np.array([5, 5, 5])result = scores + bonusprint(result)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "25.5 Vectorization",
        "paragraphs": [
          "Compare a normal Python loop:",
          "With NumPy:",
          "Vectorization makes numerical operations more concise and generally more efficient by using optimized array operations."
        ],
        "codeBlocks": [
          "numbers = [1, 2, 3, 4, 5]squares = []for number in numbers: squares.append(number ** 2)print(squares)",
          "import numpy as npnumbers = np.array([1, 2, 3, 4, 5])squares = numbers ** 2print(squares)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "25.6 Normalization",
        "paragraphs": [
          "Normalization can place numeric features on comparable scales.",
          "A common technique is min-max normalization:",
          "Python:",
          "Another technique is standardization:",
          "Students must understand that normalization parameters should be calculated using training data when preparing ML datasets. Using information from test data can introduce data leakage."
        ],
        "codeBlocks": [
          "\\[ x'=\\frac{x-x_{\\min}}{x_{\\max}-x_{\\min}} \\]",
          "scores = np.array([50, 60, 70, 80, 90], dtype=float)minimum = scores.min()maximum = scores.max()normalized = (scores - minimum) / (maximum - minimum)print(normalized)",
          "\\[ z=\\frac{x-\\mu}{\\sigma} \\]",
          "mean = scores.mean()std = scores.std()standardized = (scores - mean) / stdprint(standardized)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "25.7 Random number generation",
        "paragraphs": [
          "Random number generation is used in simulations, experiments and the initialization of some algorithms."
        ],
        "codeBlocks": [
          "rng = np.random.default_rng(seed=42)samples = rng.random(5)print(samples)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "Lab: Build a numerical analysis program that calculates descriptive statistics, performs matrix operations and normalizes input data.",
        "paragraphs": [
          "PART IV — PANDAS FOR DATA ENGINEERING"
        ],
        "codeBlocks": [
          "[Pipeline for Exploratory Data Analysis and Data Cleaning. | by Oluwabukunmi Ige | Medium](https://images.openai.com/static-rsc-4/G5QnxB_tihiuAHt-6885kPyvBOUOR9yZYOrqAByZiCA5_4i67QMf5GeCwAa2YXEJLAaFwRo4wwjAXS6c4YJlRpk5Z7pwf8w6-o9F1lDEAsLoezAfvdxEpcpWC57nTQ7OpLZExHBA2tIXOxzIOXVTzPA1Ni5dquXgQ_SFd83xTj8?purpose=inline)",
          "[medium.com](https://medium.com/%40oluwabukunmige/pipeline-for-exploratory-data-analysis-and-data-cleaning-6adce7ac0594?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 3642
  },
  {
    "id": "sec-26",
    "sectionNum": 26,
    "title": "Introduction to Pandas",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Pandas for Data Engineering",
    "tag": "Tabular Wrangling & Cleaning",
    "subsections": [
      {
        "title": "26.1 What is Pandas?",
        "paragraphs": [
          "Pandas is a Python library for working with structured and tabular data.",
          "It is particularly useful when working with:",
          "CSV files.",
          "Excel files.",
          "Database records.",
          "JSON data.",
          "Statistical datasets.",
          "Data extracted from software applications."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "26.2 Understanding Series",
        "paragraphs": [
          "A Series is a one-dimensional labelled data structure."
        ],
        "codeBlocks": [
          "import pandas as pdscores = pd.Series([80, 90, 85])print(scores)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "26.3 Understanding DataFrames",
        "paragraphs": [
          "A DataFrame is a two-dimensional labelled data structure containing rows and columns."
        ],
        "codeBlocks": [
          "import pandas as pddata = { \"name\": [\"Aman\", \"Riya\", \"Karan\"], \"score\": [85, 95, 75], \"study_hours\": [4, 6, 3]}df = pd.DataFrame(data)print(df)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "26.4 Series vs DataFrame",
        "paragraphs": [
          "Feature",
          "Series",
          "DataFrame",
          "Dimensions",
          "One-dimensional",
          "Two-dimensional",
          "Structure",
          "Single labelled sequence",
          "Rows and columns",
          "Example",
          "One score column",
          "Complete student dataset",
          "Main usage",
          "Individual variable",
          "Tabular analysis"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "26.5 Importing datasets",
        "paragraphs": [
          "CSV:",
          "Excel:",
          "JSON:"
        ],
        "codeBlocks": [
          "df = pd.read_csv(\"students.csv\")",
          "df = pd.read_excel(\"students.xlsx\")",
          "df = pd.read_json(\"students.json\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "26.6 Exporting datasets",
        "paragraphs": [
          "Pandas offers read_* functions for loading and to_* methods for exporting data across supported formats.",
          "pandas 3.1.1 documentation+1"
        ],
        "codeBlocks": [
          "df.to_csv(\"output.csv\", index=False)df.to_json(\"output.json\", orient=\"records\", indent=4)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1335
  },
  {
    "id": "sec-27",
    "sectionNum": 27,
    "title": "Data Exploration and Data Cleaning",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Pandas for Data Engineering",
    "tag": "Tabular Wrangling & Cleaning",
    "subsections": [
      {
        "title": "27.1 Understanding a dataset",
        "paragraphs": [
          "When an AI engineer receives a new dataset, the first task is to understand its structure and quality."
        ],
        "codeBlocks": [
          "import pandas as pddata = { \"name\": [\"Aman\", \"Riya\", \"Karan\", \"Neha\"], \"age\": [22, 21, 23, 22], \"score\": [85, 95, 75, 90]}df = pd.DataFrame(data)print(df.head())print(df.tail())print(df.shape)print(df.columns)print(df.dtypes)print(df.info())print(df.describe())"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "27.2 Understanding missing values",
        "paragraphs": [
          "Missing values occur when information is unavailable or not recorded."
        ],
        "codeBlocks": [
          "data = { \"name\": [\"Aman\", \"Riya\", \"Karan\"], \"score\": [85, None, 75]}df = pd.DataFrame(data)print(df.isnull())print(df.isnull().sum())"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "27.3 Handling missing values",
        "paragraphs": [
          "Option 1: Remove rows when justified.",
          "Option 2: Fill missing numerical values with the mean.",
          "Option 3: Fill missing values with the median.",
          "The choice should depend on the meaning of the data and the missingness mechanism. Blindly filling missing values can introduce misleading patterns."
        ],
        "codeBlocks": [
          "df_clean = df.dropna()",
          "df[\"score\"] = df[\"score\"].fillna(df[\"score\"].mean())",
          "df[\"score\"] = df[\"score\"].fillna(df[\"score\"].median())"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "27.4 Removing duplicates",
        "paragraphs": [
          "To check duplicates:"
        ],
        "codeBlocks": [
          "df = df.drop_duplicates()",
          "print(df.duplicated().sum())"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "27.5 Correcting data types",
        "paragraphs": [],
        "codeBlocks": [
          "df[\"score\"] = pd.to_numeric( df[\"score\"], errors=\"coerce\")"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "27.6 Cleaning text columns",
        "paragraphs": [
          "This removes leading/trailing whitespace and applies title case."
        ],
        "codeBlocks": [
          "df[\"name\"] = df[\"name\"].str.strip().str.title()"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "27.7 Detecting unusual values",
        "paragraphs": [
          "Students should distinguish true outliers from data entry errors."
        ],
        "codeBlocks": [
          "print(df[\"score\"].describe())unusual = df[ (df[\"score\"] < 0) | (df[\"score\"] > 100)]print(unusual)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 1733
  },
  {
    "id": "sec-28",
    "sectionNum": 28,
    "title": "Data Selection, Transformation and Analysis",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Pandas for Data Engineering",
    "tag": "Tabular Wrangling & Cleaning",
    "subsections": [
      {
        "title": "28.1 Selecting columns",
        "paragraphs": [
          "df[\"score\"]",
          "Multiple columns:",
          "df[[\"name\", \"score\"]]"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "28.2 Selecting rows using loc",
        "paragraphs": [
          "loc selects rows and columns using labels."
        ],
        "codeBlocks": [
          "print(df.loc[0])print(df.loc[0:2, [\"name\", \"score\"]])"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "28.3 Selecting using iloc",
        "paragraphs": [
          "iloc selects according to integer positions."
        ],
        "codeBlocks": [
          "print(df.iloc[0])print(df.iloc[0:3, 0:2])"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "28.4 Conditional filtering",
        "paragraphs": [
          "Multiple conditions:",
          "Use parentheses around individual conditions."
        ],
        "codeBlocks": [
          "high_scores = df[df[\"score\"] >= 80]print(high_scores)",
          "selected = df[ (df[\"score\"] >= 80) & (df[\"age\"] >= 22)]print(selected)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "28.5 Creating new columns",
        "paragraphs": [],
        "codeBlocks": [
          "df[\"passed\"] = df[\"score\"] >= 40print(df)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "28.6 Sorting",
        "paragraphs": [],
        "codeBlocks": [
          "df = df.sort_values( by=\"score\", ascending=False)print(df)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "28.7 Grouping and aggregation",
        "paragraphs": [],
        "codeBlocks": [
          "data = { \"department\": [\"CSE\", \"CSE\", \"IT\", \"IT\"], \"score\": [85, 90, 75, 95]}df = pd.DataFrame(data)summary = df.groupby(\"department\")[\"score\"].mean()print(summary)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "28.8 Merging datasets",
        "paragraphs": [],
        "codeBlocks": [
          "students = pd.DataFrame({ \"student_id\": [1, 2, 3], \"name\": [\"Aman\", \"Riya\", \"Karan\"]})scores = pd.DataFrame({ \"student_id\": [1, 2, 3], \"score\": [85, 95, 75]})result = pd.merge( students, scores, on=\"student_id\", how=\"inner\")print(result)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "28.9 Data visualization",
        "paragraphs": [
          "Pandas works with Matplotlib for plotting.",
          "Students should learn how to interpret:",
          "Histograms.",
          "Bar charts.",
          "Scatter plots.",
          "Box plots.",
          "Line charts."
        ],
        "codeBlocks": [
          "import matplotlib.pyplot as pltdf[\"score\"].plot(kind=\"hist\", bins=10)plt.title(\"Student Score Distribution\")plt.xlabel(\"Score\")plt.ylabel(\"Frequency\")plt.show()"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "28.10 Data analysis questions",
        "paragraphs": [
          "Given a student dataset, answer:",
          "What is the average score?",
          "Which student achieved the highest score?",
          "How many students passed?",
          "Which department performed best?",
          "Is there an observable relationship between study hours and scores?",
          "Are there missing values or unusual observations?",
          "The official Pandas tutorials cover these operations, including filtering, summary statistics, grouping and combining datasets.",
          "pandas 3.1.1 documentation+2",
          "PART V — JUPYTER NOTEBOOK AND EXPERIMENTATION"
        ],
        "codeBlocks": [
          "[Jupyter Lab: create an interactive Python notebook - Data Science Workbook](https://images.openai.com/static-rsc-4/cO0S9U0UA7HoMX55r0wQGF6OEYAbW_26592n5Fjt0wDtAFHbMcGrjJzCuhpzXHTEXbKsT7UIuzdvh3CNRzzY0l0ehbvoNGlNPLSQQ5qY3ihcCZznZLWP7-rP8baoTX-0d5X4_RqR1KyvrWvqAosiYVHDh_kGOoeNbWK5-p6PhPM?purpose=inline)",
          "[datascience.101workbook.org](https://datascience.101workbook.org/04-devel-environment/02f-python-jupyter-notebook/?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 2472
  },
  {
    "id": "sec-29",
    "sectionNum": 29,
    "title": "Jupyter Notebook",
    "duration": "1–1.5 hours",
    "partNum": 5,
    "partName": "Part V — Jupyter Notebook & Experimentation",
    "tag": "Interactive Data Science",
    "subsections": [
      {
        "title": "29.1 What is Jupyter Notebook?",
        "paragraphs": [
          "Jupyter Notebook is an interactive computing environment in which developers can combine executable code, explanatory text, data and visual outputs.",
          "It is useful for experimentation and data analysis because students can run code in individual cells and inspect intermediate results.",
          "A notebook can contain:",
          "Python code.",
          "Markdown explanations.",
          "Mathematical expressions.",
          "Charts and graphs.",
          "Tables.",
          "Experiment results.",
          "The Jupyter project describes notebooks as shareable documents that combine code, prose, data and rich visualizations.",
          "Jupyter Documentation 4.1.1 alpha documentation"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "29.2 Installing Jupyter",
        "paragraphs": [
          "python -m pip install jupyter",
          "Start a notebook:",
          "jupyter notebook",
          "Alternatively, use JupyterLab:",
          "jupyter lab"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "29.3 Notebook cells",
        "paragraphs": [
          "Code cells: Execute Python instructions.",
          "Markdown cells: Document concepts and experiments.",
          "Example Markdown:",
          "# Student Performance Analysis This experiment explores student scores using Python."
        ],
        "codeBlocks": [
          "a = 10b = 20print(a + b)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "29.4 Understanding kernels",
        "paragraphs": [
          "A kernel is the computational process that executes notebook code.",
          "Students must understand that a kernel maintains variables and execution state.",
          "Example:",
          "Cell 1:",
          "Cell 2:",
          "The second cell works because the first cell has already executed in the current kernel.",
          "This also creates a common notebook problem: cells may be executed out of order, creating confusing or non-reproducible results."
        ],
        "codeBlocks": [
          "score = 90",
          "print(score)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "29.5 Notebook best practices",
        "paragraphs": [
          "Use descriptive notebook titles.",
          "Explain the purpose of each experiment.",
          "Keep code cells logically organized.",
          "Restart and run all cells before submission.",
          "Document dataset sources.",
          "Record important package versions.",
          "Save charts and outputs where appropriate.",
          "Avoid storing credentials or confidential data in notebooks."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "29.6 Experimentation workflow",
        "paragraphs": [
          "Students must practice the following:",
          "Create Notebook ↓ Import Libraries ↓ Load Dataset ↓ Inspect Data ↓ Perform Analysis ↓ Generate Visualizations ↓ Document Findings ↓ Save Notebook"
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "Lab: Create a notebook with Python programming, NumPy calculations, Pandas data processing, charts and Markdown explanations.",
        "paragraphs": [
          "PART VI — COMPLETE AI ENGINEERING WORKFLOW"
        ],
        "codeBlocks": [
          "[Machine Learning in Recommendation Systems: Transforming Industries in 2025 | by Emily Smith | Medium](https://images.openai.com/static-rsc-4/I2uD7VH6NvEXHav5KSAhb9ZXpMlcyW0n3ENROknLEyWMRoqOiEGi50lD9x3h2h7OfrKjNV6PIhQip-sSTBJC_lKSPGR-0kG2gOy2DAubYj6RP9Z0QtpLs2-RhuS5qTPKkWmcr1DQE-wXFFSHkCpzXzyJI4uHIDvAC3q3h1PLaYw?purpose=inline)",
          "[medium.com](https://medium.com/%40smith.emily2584/machine-learning-recommendation-systems-explained-a-complete-guide-9f775eccbde4?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 2712
  },
  {
    "id": "sec-30",
    "sectionNum": 30,
    "title": "End-to-End AI Engineering Workflow",
    "duration": "2 hours",
    "partNum": 6,
    "partName": "Part VI — Complete AI Engineering Workflow",
    "tag": "Production AI Lifecycle",
    "subsections": [
      {
        "title": "Overview & Objectives",
        "paragraphs": [
          "This section teaches students how the previously learned Python, NumPy and Pandas skills fit into a real engineering project."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.1 Step 1 — Problem identification",
        "paragraphs": [
          "An AI engineering project starts with a problem, not with selecting an AI model.",
          "Example problem:",
          "An educational platform wants to identify students who may struggle with a course.",
          "Before coding, define:",
          "Who is experiencing the problem?",
          "What decision should the system support?",
          "What information is available?",
          "What output is required?",
          "What would count as a successful solution?",
          "A poorly defined problem leads to an inappropriate technical solution."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.2 Step 2 — Data collection",
        "paragraphs": [
          "Data is the information used by an AI system.",
          "Students should understand the following types:",
          "Type",
          "Example",
          "Numerical",
          "Age, marks, salary",
          "Categorical",
          "Department, city, category",
          "Text",
          "Reviews, messages, documents",
          "Image",
          "Photographs, medical scans",
          "Audio",
          "Speech recordings",
          "Video",
          "Recorded lectures",
          "Time-series",
          "Temperature readings over time",
          "Data may come from:",
          "Existing databases.",
          "CSV and Excel files.",
          "Public datasets.",
          "APIs.",
          "Sensors.",
          "Application logs.",
          "User-generated information."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.3 Step 3 — Data preprocessing",
        "paragraphs": [
          "Raw data is frequently inconsistent or incomplete.",
          "Common preprocessing operations:",
          "Remove duplicate observations.",
          "Handle missing information.",
          "Correct data types.",
          "Normalize numerical values where appropriate.",
          "Encode categorical features when required.",
          "Detect invalid observations.",
          "Prepare the dataset for analysis.",
          "Python example:"
        ],
        "codeBlocks": [
          "import pandas as pddata = { \"study_hours\": [2, 4, None, 6, 8], \"practice_questions\": [10, 20, 25, None, 60], \"score\": [50, 65, 70, 80, 95]}df = pd.DataFrame(data)print(\"Before cleaning:\")print(df)df[\"study_hours\"] = df[\"study_hours\"].fillna( df[\"study_hours\"].median())df[\"practice_questions\"] = df[\"practice_questions\"].fillna(0)print(\"After cleaning:\")print(df)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.4 Step 4 — Exploratory Data Analysis",
        "paragraphs": [
          "Exploratory Data Analysis (EDA) is the process of examining a dataset to understand its characteristics.",
          "Students investigate:",
          "Distribution of values.",
          "Average and median.",
          "Minimum and maximum.",
          "Missing values.",
          "Correlation between variables.",
          "Outliers.",
          "Data imbalance.",
          "Example:",
          "A correlation measures the strength and direction of a linear relationship. It does not establish that one variable causes another."
        ],
        "codeBlocks": [
          "print(df.describe())print(df.corr(numeric_only=True))"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.5 Step 5 — Feature engineering",
        "paragraphs": [
          "Features are the input variables used by a model.",
          "Suppose the dataset contains:",
          "Study hours.",
          "Practice questions.",
          "Previous marks.",
          "An engineer may create a new feature representing practice intensity.",
          "Feature engineering should be guided by the problem and domain knowledge. Derived features should not accidentally include information unavailable at prediction time."
        ],
        "codeBlocks": [
          "df[\"practice_per_hour\"] = ( df[\"practice_questions\"] / df[\"study_hours\"].replace(0, float(\"nan\")))print(df)"
        ],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.6 Step 6 — Dataset splitting",
        "paragraphs": [
          "In supervised Machine Learning, datasets are commonly divided into:",
          "Training dataset: Used to learn model parameters.",
          "Validation dataset: Used to compare configurations and tune model choices.",
          "Testing dataset: Used for final evaluation on held-out examples.",
          "Conceptual example:",
          "70% training.",
          "15% validation.",
          "15% testing.",
          "These proportions are illustrative, not mandatory. The correct split depends on dataset size, structure and whether there are time dependencies or groups that must remain separated."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.7 Step 7 — Model selection",
        "paragraphs": [
          "Different problems require different approaches.",
          "Problem",
          "Approach",
          "Predict house price",
          "Regression",
          "Detect fraudulent transactions",
          "Classification",
          "Group customers",
          "Clustering",
          "Generate text",
          "Generative model",
          "Recognize images",
          "Deep Learning / Computer Vision",
          "Recommend products",
          "Recommendation algorithms",
          "Students should recognize that selecting an algorithm is a design decision that depends on available data, the target and operational requirements."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.8 Step 8 — Model training",
        "paragraphs": [
          "Training is the process of learning model parameters from training data.",
          "Introduce:",
          "Features and labels.",
          "Parameters.",
          "Hyperparameters.",
          "Training iterations.",
          "Loss functions.",
          "Optimization.",
          "Overfitting.",
          "Underfitting.",
          "At this stage, focus on concepts rather than implementing neural-network training."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.9 Step 9 — Model evaluation",
        "paragraphs": [
          "Evaluation measures how well the model performs on relevant data.",
          "For classification:",
          "Accuracy.",
          "Precision.",
          "Recall.",
          "F1-score.",
          "Confusion matrix.",
          "For regression:",
          "Mean Absolute Error.",
          "Mean Squared Error.",
          "Root Mean Squared Error.",
          "\\(R^2\\).",
          "Students should understand why a model that achieves high accuracy may still be unsuitable when the consequences of false positives and false negatives differ significantly."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.10 Step 10 — Deployment",
        "paragraphs": [
          "Deployment makes an AI capability accessible to an application or its users.",
          "Introduce:",
          "Model serialization.",
          "Model serving.",
          "REST APIs.",
          "Backend integration.",
          "Input validation.",
          "Output formatting.",
          "Cloud and local deployment."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.11 Step 11 — Monitoring and maintenance",
        "paragraphs": [
          "An AI system needs maintenance after deployment.",
          "Key concepts:",
          "Data drift.",
          "Model drift and performance degradation.",
          "Latency.",
          "Error rates.",
          "Resource usage.",
          "Inference costs.",
          "Security.",
          "Feedback collection."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      },
      {
        "title": "30.12 Traditional ML workflow vs Generative AI workflow",
        "paragraphs": [
          "Students should understand that not all AI systems use the same architecture.",
          "Traditional ML workflow:",
          "Problem Definition ↓ Data Collection ↓ Data Cleaning ↓ Feature Engineering ↓ Model Training ↓ Model Evaluation ↓ Deployment ↓ Monitoring",
          "Generative AI application workflow:",
          "User Requirement ↓ Prompt and Context Design ↓ Model Selection ↓ Optional Retrieval / External Tools ↓ Model Inference ↓ Output Validation ↓ Safety and Quality Evaluation ↓ Application Integration ↓ Monitoring and Improvement",
          "Later modules will study embeddings, RAG, tool calling, prompting and model fine-tuning in depth.",
          "PART VII — PRACTICAL LABORATORY PROGRAM",
          "Students should not complete this module by watching videos alone. The following laboratories are mandatory practice activities."
        ],
        "codeBlocks": [],
        "bullets": [],
        "exercise": null
      }
    ],
    "rawTextLength": 6018
  }
];

export default AI_CURRICULUM_SECTIONS;
