/**
 * Full Curriculum Content Data for Module 02: Mathematics for AI & Machine Learning
 * Extracted with complete university-level fidelity across all 33 core mathematical sections.
 */

export const AI_MATH_CURRICULUM_SECTIONS = [
  {
    "id": "sec-01",
    "sectionNum": 1,
    "title": "Mathematical Foundations and Notation",
    "duration": "1 hour",
    "partNum": 1,
    "partName": "Part I — Mathematical Foundations",
    "tag": "Foundations & Notation",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [],
        "codeBlocks": [
          "[Maths competition | Tackling maths proficiency deficit in SA schools - eNCA](https://images.openai.com/static-rsc-4/DPowY-zlvxeaCVOBxJAxShCAgzqmW6UQ10rvf2YVSAoLiTXnMOzVNoTLcV8TMywBVG0RJ_NivB19nnpNcHg7ynKXKxt-07BU1GOXfSwjMxdNMUpW1dZFHw8l8N04QtgktVefEjLKGW-OaF4z-V7xNeuEASfXH53Vlw--7SwqS8U?purpose=inline)",
          "[enca.com](https://www.enca.com/videos/maths-competition-tackling-maths-proficiency-deficit-sa-schools?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.1 Why mathematics is important in AI",
        "paragraphs": [
          "Artificial Intelligence relies heavily on numerical computation.",
          "Consider a system that predicts student performance.",
          "It receives:",
          "Hours spent studying.",
          "Number of practice questions completed.",
          "Previous assessment scores.",
          "Attendance percentage.",
          "These values can be represented mathematically as:",
          "The system processes this numerical information and produces a prediction.",
          "Understanding the mathematics helps us understand how that prediction is produced."
        ],
        "codeBlocks": [
          "\\[ X = \\begin{bmatrix} 4\\\\ 30\\\\ 80\\\\ 90 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.2 Mathematical notation",
        "paragraphs": [
          "Students should become comfortable with common mathematical symbols.",
          "Symbol",
          "Meaning",
          "\\(+\\)",
          "Addition",
          "\\(-\\)",
          "Subtraction",
          "\\(\\times\\)",
          "Multiplication",
          "\\(\\div\\)",
          "Division",
          "Equality",
          "\\(\\neq\\)",
          "Not equal",
          "\\(\\sum\\)",
          "Summation",
          "\\(\\prod\\)",
          "Product of values",
          "\\(\\sqrt{x}\\)",
          "Square root",
          "\\(x^2\\)",
          "Square",
          "\\(\\in\\)",
          "Belongs to a set",
          "\\(\\forall\\)",
          "For all",
          "\\(\\exists\\)",
          "There exists",
          "\\(\\approx\\)",
          "Approximately equal",
          "\\(\\nabla\\)",
          "Gradient operator",
          "\\(\\partial\\)",
          "Partial derivative",
          "\\(\\mathbb{R}\\)",
          "Set of real numbers"
        ],
        "codeBlocks": [
          "\\(=\\)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.3 Sets and number systems",
        "paragraphs": [
          "A set is a collection of distinct objects.",
          "Important number systems:",
          "Natural numbers: \\(1,2,3,\\ldots\\)",
          "Integers: \\(\\ldots,-2,-1,0,1,2,\\ldots\\)",
          "Rational numbers: Values expressible as a ratio of integers.",
          "Real numbers: Rational and irrational numbers.",
          "Complex numbers: Numbers of the form \\(a+bi\\).",
          "AI mathematical computations mostly work with real-valued numbers, although complex numbers are useful in advanced signal processing and certain mathematical methods."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.4 Summation notation",
        "paragraphs": [
          "Summation is extremely important in Machine Learning.",
          "This means adding all values from \\(x_1\\) through \\(x_n\\).",
          "Example:",
          "Python:",
          "Output:",
          "100"
        ],
        "codeBlocks": [
          "\\[ \\sum_{i=1}^{n}x_i \\]",
          "\\[ x=[10,20,30,40] \\]",
          "\\[ \\sum_{i=1}^{4}x_i=10+20+30+40=100 \\]",
          "numbers = [10, 20, 30, 40]total = sum(numbers)print(total)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "1.5 Average using summation",
        "paragraphs": [
          "The arithmetic mean is:",
          "For marks:",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ \\bar{x}=\\frac{1}{n}\\sum_{i=1}^{n}x_i \\]",
          "\\[ x=[70,80,90,60] \\]",
          "\\[ \\bar{x}=\\frac{70+80+90+60}{4}=75 \\]",
          "import numpy as npmarks = np.array([70, 80, 90, 60])average = np.sum(marks) / len(marks)print(average)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "Section exercises",
        "paragraphs": [
          "Calculate the sum of the first 100 positive integers.",
          "Calculate the average of five examination scores.",
          "Calculate the sum of squared values in an array.",
          "Express the mean mathematically using summation notation.",
          "Explain the difference between an integer and a real number.",
          "Expected outcome: Students can read mathematical expressions and translate simple formulas into Python."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 3039
  },
  {
    "id": "sec-02",
    "sectionNum": 2,
    "title": "Algebra, Equations and Functions",
    "duration": "1.5 hours",
    "partNum": 1,
    "partName": "Part I — Mathematical Foundations",
    "tag": "Foundations & Notation",
    "subsections": [
      {
        "title": "2.1 Understanding algebra",
        "paragraphs": [
          "Algebra uses symbols to represent unknown or changing values.",
          "For example:",
          "Here:",
          "\\(x\\) is an input variable.",
          "\\(2\\) is the coefficient.",
          "\\(5\\) is a constant.",
          "\\(y\\) is the output."
        ],
        "codeBlocks": [
          "\\[ y=2x+5 \\]",
          "When \\(x=3\\):",
          "\\[ y=2(3)+5=11 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.2 Solving linear equations",
        "paragraphs": [
          "Consider:",
          "Subtract 4:",
          "Divide by 2:",
          "Python implementation:"
        ],
        "codeBlocks": [
          "\\[ 2x+4=14 \\]",
          "\\[ 2x=10 \\]",
          "\\[ x=5 \\]",
          "# Solve 2x + 4 = 14x = (14 - 4) / 2print(x)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.3 Linear functions",
        "paragraphs": [
          "A linear function in one variable has the form:",
          "Where:",
          "\\(m\\) is the slope.",
          "\\(c\\) is the intercept.",
          "Example:"
        ],
        "codeBlocks": [
          "\\[ f(x)=mx+c \\]",
          "\\[ f(x)=3x+2 \\]",
          "When \\(x=4\\):",
          "\\[ f(4)=3(4)+2=14 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.4 Quadratic functions",
        "paragraphs": [
          "A quadratic function has the form:",
          "Example:",
          "Quadratic functions are important in optimization because many mathematical objectives involve squared errors."
        ],
        "codeBlocks": [
          "\\[ f(x)=ax^2+bx+c \\]",
          "\\[ f(x)=x^2-4x+3 \\]",
          "When \\(x=2\\):",
          "\\[ f(2)=4-8+3=-1 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.5 Exponential functions",
        "paragraphs": [
          "An exponential function can be expressed as:",
          "Example:",
          "Exponential functions appear in probability distributions, neural network activation functions and probability calculations."
        ],
        "codeBlocks": [
          "\\[ f(x)=a^x \\]",
          "\\[ f(x)=2^x \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.6 Logarithmic functions",
        "paragraphs": [
          "A logarithm answers the question:",
          "To what power must a base be raised to obtain a particular number?",
          "Because:",
          "Natural logarithms use base \\(e\\):",
          "Logarithms are particularly important in AI because they appear in:",
          "Cross-entropy loss.",
          "Maximum likelihood estimation.",
          "Probability calculations.",
          "Information theory."
        ],
        "codeBlocks": [
          "\\[ \\log_2(8)=3 \\]",
          "\\[ 2^3=8 \\]",
          "\\[ \\ln(e)=1 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "2.7 Mathematical implementation",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as npx = np.array([1, 2, 3, 4, 5])linear = 2 * x + 5quadratic = x**2 - 4*x + 3exponential = 2**xlogarithmic = np.log(x)print(\"Linear:\", linear)print(\"Quadratic:\", quadratic)print(\"Exponential:\", exponential)print(\"Natural logarithm:\", logarithmic)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "Practical exercise",
        "paragraphs": [
          "Implement and visualize:",
          "Students should explain how changing the input changes the output.",
          "PART II — LINEAR ALGEBRA FOR AI",
          "Linear algebra is one of the most important mathematical foundations of Machine Learning and Deep Learning.",
          "MIT's 18.06 curriculum covers matrix theory, vector spaces, determinants, eigenvalues, least squares and singular value decomposition. These are particularly useful foundations for AI engineering.",
          "Massachusetts Institute of Technology+1"
        ],
        "codeBlocks": [
          "\\(y=2x+3\\)",
          "\\(y=x^2\\)",
          "\\(y=2^x\\)",
          "\\(y=\\ln(x)\\), for positive \\(x\\).",
          "[Linear Algebra : From Vectors to Transformations and Matrices | by Aashish Vinay Vasala | Medium](https://images.openai.com/static-rsc-4/Uw9comKnUAw-XPXP6C1IZsraIs-U-dFNvwdPWldl0Dzj-v1zrRI4wqOTbpxYtlaGRfRJYbft_a9am51BYmZ0Q6VGTd9be63sDCrUaNOOU5noUVQboJshFqBSxZqAK3Dn6wjfgGb-etZthem55V8M3xjMKWawrLXJ8kaNIF1loII?purpose=inline)",
          "[medium.com](https://medium.com/%40aashishvinayvasala/linear-algebra-from-vectors-to-transformations-and-matrices-cd1bbdbe5ac3?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 2909
  },
  {
    "id": "sec-03",
    "sectionNum": 3,
    "title": "Introduction to Linear Algebra",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "3.1 What is linear algebra?",
        "paragraphs": [
          "Linear algebra is the branch of mathematics concerned with vectors, matrices, linear transformations and systems of linear equations.",
          "It provides the mathematical foundation for representing and transforming numerical information.",
          "Examples in AI:",
          "Representing a student's features as a vector.",
          "Representing multiple training examples as a matrix.",
          "Calculating neural network layer outputs.",
          "Computing similarities between vectors.",
          "Reducing the dimensions of datasets."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "3.2 Scalar, vector and matrix",
        "paragraphs": [
          "Scalar: A single number.",
          "Vector: An ordered collection of numbers.",
          "Matrix: A rectangular arrangement of numbers.",
          "Tensor: A generalized multidimensional numerical structure.",
          "A scalar can be considered a zero-dimensional tensor, a vector a one-dimensional tensor and a matrix a two-dimensional tensor."
        ],
        "codeBlocks": [
          "\\[ a=5 \\]",
          "\\[ v= \\begin{bmatrix} 2\\\\ 4\\\\ 6 \\end{bmatrix} \\]",
          "\\[ A= \\begin{bmatrix} 1&2\\\\ 3&4 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "3.3 Why AI uses linear algebra",
        "paragraphs": [
          "Consider a model that predicts student performance using three features:",
          "Assume the model has corresponding weights:",
          "The model can calculate a weighted combination using a dot product.",
          "This is a simple mathematical model of a weighted prediction, not a complete trained model."
        ],
        "codeBlocks": [
          "\\[ X= \\begin{bmatrix} 4\\\\ 20\\\\ 80 \\end{bmatrix} \\]",
          "\\[ W= \\begin{bmatrix} 2\\\\ 0.5\\\\ 0.3 \\end{bmatrix} \\]",
          "\\[ y=W^TX+b \\]",
          "If \\(b=5\\):",
          "\\[ y=(2)(4)+(0.5)(20)+(0.3)(80)+5 \\]",
          "\\[ y=8+10+24+5=47 \\]"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1472
  },
  {
    "id": "sec-04",
    "sectionNum": 4,
    "title": "Scalars, Vectors and Vector Spaces",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "4.1 What is a vector?",
        "paragraphs": [
          "A vector is an ordered collection of components.",
          "For example:",
          "This can represent a point or displacement in a two-dimensional coordinate system.",
          "A three-dimensional vector:",
          "can represent a position, numerical feature set or direction."
        ],
        "codeBlocks": [
          "\\[ v= \\begin{bmatrix} 3\\\\ 4 \\end{bmatrix} \\]",
          "\\[ v= \\begin{bmatrix} 2\\\\ 5\\\\ 7 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.2 Vector dimensions",
        "paragraphs": [
          "A vector with \\(n\\) components belongs to:",
          "\\[ \\mathbb{R}^{n} \\]",
          "Examples:",
          "Two-dimensional vector: \\(\\mathbb{R}^2\\).",
          "Three-dimensional vector: \\(\\mathbb{R}^3\\).",
          "100-feature observation: \\(\\mathbb{R}^{100}\\).",
          "In Machine Learning, one observation with 100 numerical features can be represented as a 100-dimensional vector."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.3 Vector addition",
        "paragraphs": [
          "Suppose:",
          "Then:",
          "Each corresponding component is added.",
          "Python:",
          "Output:",
          "[6 8]"
        ],
        "codeBlocks": [
          "\\[ a= \\begin{bmatrix} 2\\\\ 3 \\end{bmatrix} ,\\quad b= \\begin{bmatrix} 4\\\\ 5 \\end{bmatrix} \\]",
          "\\[ a+b= \\begin{bmatrix} 6\\\\ 8 \\end{bmatrix} \\]",
          "import numpy as npa = np.array([2, 3])b = np.array([4, 5])print(a + b)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.4 Vector subtraction",
        "paragraphs": [
          "Python:"
        ],
        "codeBlocks": [
          "\\[ a-b= \\begin{bmatrix} 2-4\\\\ 3-5 \\end{bmatrix} = \\begin{bmatrix} -2\\\\ -2 \\end{bmatrix} \\]",
          "print(a - b)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.5 Scalar multiplication",
        "paragraphs": [
          "Multiplying a vector by a scalar changes its magnitude.",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ 3 \\begin{bmatrix} 2\\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 6\\\\ 12 \\end{bmatrix} \\]",
          "vector = np.array([2, 4])result = 3 * vectorprint(result)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.6 Linear combinations",
        "paragraphs": [
          "A linear combination combines vectors using scalar coefficients.",
          "If:",
          "Then:"
        ],
        "codeBlocks": [
          "\\[ v=2a+3b \\]",
          "\\[ a= \\begin{bmatrix} 1\\\\ 2 \\end{bmatrix} ,\\quad b= \\begin{bmatrix} 3\\\\ 4 \\end{bmatrix} \\]",
          "\\[ v= 2 \\begin{bmatrix} 1\\\\ 2 \\end{bmatrix} + 3 \\begin{bmatrix} 3\\\\ 4 \\end{bmatrix} \\]",
          "\\[ v= \\begin{bmatrix} 11\\\\ 16 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.7 Vector spaces",
        "paragraphs": [
          "A vector space is a collection of vectors with defined addition and scalar multiplication that satisfy particular mathematical properties.",
          "Important concepts:",
          "Closure.",
          "Associativity.",
          "Commutativity of addition.",
          "Zero vector.",
          "Additive inverse.",
          "Distributivity."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "4.8 Span, basis and dimension",
        "paragraphs": [
          "Span: The set of all linear combinations of a collection of vectors.",
          "Linear independence: Vectors are linearly independent when none of them can be expressed as a linear combination of the others.",
          "Basis: A linearly independent set of vectors that spans a vector space.",
          "Dimension: The number of vectors in a basis.",
          "These concepts explain how numerical information can be represented within a space and why some features may be redundant."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "Practical exercise",
        "paragraphs": [
          "Given:",
          "Calculate:",
          "\\(a+b\\).",
          "\\(a-b\\).",
          "\\(2a\\).",
          "\\(3a+2b\\).",
          "Then implement all four calculations in NumPy."
        ],
        "codeBlocks": [
          "\\[ a= \\begin{bmatrix} 1\\\\ 2 \\end{bmatrix},\\quad b= \\begin{bmatrix} 3\\\\ 1 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 2702
  },
  {
    "id": "sec-05",
    "sectionNum": 5,
    "title": "Vector Operations and Geometry",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "5.1 Magnitude of a vector",
        "paragraphs": [
          "The magnitude, or Euclidean length, of a vector is calculated using:",
          "For:",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ \\|v\\|_2=\\sqrt{v_1^2+v_2^2+\\cdots+v_n^2} \\]",
          "\\[ v= \\begin{bmatrix} 3\\\\ 4 \\end{bmatrix} \\]",
          "\\[ \\|v\\|_2=\\sqrt{3^2+4^2} =\\sqrt{25}=5 \\]",
          "import numpy as npv = np.array([3, 4])magnitude = np.linalg.norm(v)print(magnitude)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.2 Distance between vectors",
        "paragraphs": [
          "The Euclidean distance between two vectors is:",
          "Example:",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ d(a,b)=\\sqrt{\\sum_{i=1}^{n}(a_i-b_i)^2} \\]",
          "\\[ a= \\begin{bmatrix} 1\\\\ 2 \\end{bmatrix} ,\\quad b= \\begin{bmatrix} 4\\\\ 6 \\end{bmatrix} \\]",
          "\\[ d(a,b)=\\sqrt{(4-1)^2+(6-2)^2} \\]",
          "\\[ d(a,b)=\\sqrt{9+16}=5 \\]",
          "a = np.array([1, 2])b = np.array([4, 6])distance = np.linalg.norm(a - b)print(distance)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.3 Manhattan distance",
        "paragraphs": [
          "Manhattan distance calculates the sum of absolute differences.",
          "For the same vectors:",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ d_1(a,b)=\\sum_i|a_i-b_i| \\]",
          "\\[ d_1(a,b)=3+4=7 \\]",
          "distance = np.sum(np.abs(a - b))print(distance)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "5.4 Geometric interpretation",
        "paragraphs": [
          "Vectors can be represented geometrically as arrows.",
          "Their:",
          "Direction indicates orientation.",
          "Magnitude indicates length.",
          "Starting point establishes their location in a chosen coordinate system.",
          "Vectors are useful for describing directions, positions, numerical features and changes.",
          "Practical assignment: Calculate distances between student feature vectors and identify which observations are closest to one another."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1410
  },
  {
    "id": "sec-06",
    "sectionNum": 6,
    "title": "Dot Product, Norms and Cosine Similarity",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "6.1 Dot product",
        "paragraphs": [
          "The dot product is one of the most important vector operations in AI.",
          "For two vectors:",
          "The dot product is:",
          "Example:",
          "Python:",
          "Output:",
          "23"
        ],
        "codeBlocks": [
          "\\[ a= \\begin{bmatrix} a_1\\\\a_2 \\end{bmatrix}, \\quad b= \\begin{bmatrix} b_1\\\\b_2 \\end{bmatrix} \\]",
          "\\[ a\\cdot b=a_1b_1+a_2b_2 \\]",
          "\\[ a= \\begin{bmatrix} 2\\\\ 3 \\end{bmatrix} ,\\quad b= \\begin{bmatrix} 4\\\\ 5 \\end{bmatrix} \\]",
          "\\[ a\\cdot b=(2)(4)+(3)(5)=23 \\]",
          "import numpy as npa = np.array([2, 3])b = np.array([4, 5])result = np.dot(a, b)print(result)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.2 Geometric interpretation",
        "paragraphs": [
          "The dot product is also:",
          "Where:",
          "\\(\\|a\\|\\) is the magnitude of the first vector.",
          "\\(\\|b\\|\\) is the magnitude of the second.",
          "\\(\\theta\\) is the angle between them.",
          "Therefore:",
          "Positive dot product generally indicates an angle below 90°.",
          "Zero dot product indicates perpendicular nonzero vectors.",
          "Negative dot product indicates an angle above 90°."
        ],
        "codeBlocks": [
          "\\[ a\\cdot b=\\|a\\|\\|b\\|\\cos\\theta \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.3 Cosine similarity",
        "paragraphs": [
          "Cosine similarity measures the angular similarity of two nonzero vectors.",
          "Its value lies between -1 and 1.",
          "Example:",
          "Output:",
          "1.0",
          "The vectors point in the same direction."
        ],
        "codeBlocks": [
          "\\[ \\operatorname{cosine}(a,b)= \\frac{a\\cdot b}{\\|a\\|\\|b\\|} \\]",
          "import numpy as npa = np.array([1, 2, 3])b = np.array([2, 4, 6])similarity = np.dot(a, b) / ( np.linalg.norm(a) * np.linalg.norm(b))print(similarity)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.4 Why cosine similarity matters in AI",
        "paragraphs": [
          "Consider two sentences converted into numerical embeddings.",
          "Their vectors represent information about the text.",
          "A similarity system can compare these vectors to identify semantically related content.",
          "Applications:",
          "Semantic search.",
          "Document retrieval.",
          "Recommendation systems.",
          "Duplicate detection.",
          "Retrieval-Augmented Generation (RAG).",
          "Cosine similarity does not automatically understand meaning; its usefulness depends on how the embeddings were produced."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.5 Norms",
        "paragraphs": [
          "Norms measure vector magnitude.",
          "L1 norm:",
          "L2 norm:",
          "Infinity norm:",
          "NumPy:"
        ],
        "codeBlocks": [
          "\\[ \\|x\\|_1=\\sum_i|x_i| \\]",
          "\\[ \\|x\\|_2=\\sqrt{\\sum_i x_i^2} \\]",
          "\\[ \\|x\\|_\\infty=\\max_i|x_i| \\]",
          "x = np.array([3, -4, 5])print(\"L1:\", np.linalg.norm(x, ord=1))print(\"L2:\", np.linalg.norm(x, ord=2))print(\"Infinity:\", np.linalg.norm(x, ord=np.inf))"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "6.6 Vector projection",
        "paragraphs": [
          "Projection describes the component of one vector in the direction of another.",
          "The projection of \\(a\\) onto a nonzero vector \\(b\\) is:",
          "This mathematical concept is important for:",
          "Least-squares approximation.",
          "Orthogonal decomposition.",
          "PCA.",
          "Numerical approximation."
        ],
        "codeBlocks": [
          "\\[ \\operatorname{proj}_b(a)= \\frac{a\\cdot b}{b\\cdot b}b \\]"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2628
  },
  {
    "id": "sec-07",
    "sectionNum": 7,
    "title": "Matrices and Matrix Operations",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [],
        "codeBlocks": [
          "[en.wikipedia.org](https://en.wikipedia.org/wiki/Matrix_%28mathematics%29?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.1 What is a matrix?",
        "paragraphs": [
          "A matrix is a rectangular collection of numbers arranged into rows and columns.",
          "This matrix has two rows and three columns.",
          "Therefore:",
          "\\[ A\\in\\mathbb{R}^{2\\times3} \\]"
        ],
        "codeBlocks": [
          "\\[ A= \\begin{bmatrix} 1&2&3\\\\ 4&5&6 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.2 Matrix dimensions",
        "paragraphs": [
          "A matrix has the shape:",
          "\\[ m\\times n \\]",
          "Where:",
          "\\(m\\) is the number of rows.",
          "\\(n\\) is the number of columns.",
          "Example:",
          "Output:",
          "(2, 3) 2 6"
        ],
        "codeBlocks": [
          "import numpy as npA = np.array([ [1, 2, 3], [4, 5, 6]])print(A.shape)print(A.ndim)print(A.size)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.3 Types of matrices",
        "paragraphs": [
          "Students should understand:",
          "Row matrix: One row.",
          "Column matrix: One column.",
          "Square matrix: Equal number of rows and columns.",
          "Zero matrix: All elements are zero.",
          "Identity matrix: Diagonal elements are one and other entries are zero.",
          "Diagonal matrix: Nonzero values may exist only on the main diagonal.",
          "Symmetric matrix: A square matrix satisfying:"
        ],
        "codeBlocks": [
          "\\[ A=[1,2,3] \\]",
          "\\[ A= \\begin{bmatrix} 1\\\\2\\\\3 \\end{bmatrix} \\]",
          "\\[ I= \\begin{bmatrix} 1&0\\\\ 0&1 \\end{bmatrix} \\]",
          "\\[ A=A^T \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.4 Matrix addition",
        "paragraphs": [
          "Matrices must have compatible, identical dimensions for element-wise addition.",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ A= \\begin{bmatrix} 1&2\\\\ 3&4 \\end{bmatrix} \\]",
          "\\[ B= \\begin{bmatrix} 5&6\\\\ 7&8 \\end{bmatrix} \\]",
          "\\[ A+B= \\begin{bmatrix} 6&8\\\\ 10&12 \\end{bmatrix} \\]",
          "A = np.array([[1, 2], [3, 4]])B = np.array([[5, 6], [7, 8]])print(A + B)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.5 Matrix subtraction",
        "paragraphs": [],
        "codeBlocks": [
          "print(A - B)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.6 Scalar multiplication",
        "paragraphs": [],
        "codeBlocks": [
          "print(3 * A)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.7 Identity matrix",
        "paragraphs": [
          "Identity matrices satisfy:",
          "for compatible square matrices."
        ],
        "codeBlocks": [
          "I = np.eye(3)print(I)",
          "\\[ AI=IA=A \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.8 Zero matrix",
        "paragraphs": [],
        "codeBlocks": [
          "Z = np.zeros((3, 3))print(Z)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "7.9 Matrix transpose",
        "paragraphs": [
          "The transpose interchanges rows and columns.",
          "Python:",
          "Practice: Create different matrix types using NumPy and explain their dimensions and mathematical properties."
        ],
        "codeBlocks": [
          "\\[ A= \\begin{bmatrix} 1&2&3\\\\ 4&5&6 \\end{bmatrix} \\]",
          "\\[ A^T= \\begin{bmatrix} 1&4\\\\ 2&5\\\\ 3&6 \\end{bmatrix} \\]",
          "print(A.T)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2001
  },
  {
    "id": "sec-08",
    "sectionNum": 8,
    "title": "Matrix Multiplication and Transpose",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "8.1 Matrix multiplication",
        "paragraphs": [
          "Matrix multiplication is not the same as ordinary element-wise multiplication.",
          "Suppose:",
          "Then:"
        ],
        "codeBlocks": [
          "\\[ A= \\begin{bmatrix} 1&2\\\\ 3&4 \\end{bmatrix} \\]",
          "\\[ B= \\begin{bmatrix} 5&6\\\\ 7&8 \\end{bmatrix} \\]",
          "\\[ AB= \\begin{bmatrix} (1)(5)+(2)(7)&(1)(6)+(2)(8)\\\\ (3)(5)+(4)(7)&(3)(6)+(4)(8) \\end{bmatrix} \\]",
          "\\[ AB= \\begin{bmatrix} 19&22\\\\ 43&50 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.2 Dimension compatibility",
        "paragraphs": [
          "For:",
          "\\[ A\\in\\mathbb{R}^{m\\times n} \\]",
          "and",
          "\\[ B\\in\\mathbb{R}^{n\\times p} \\]",
          "The product exists and has shape:",
          "\\[ AB\\in\\mathbb{R}^{m\\times p} \\]",
          "The inner dimensions must match.",
          "For example:",
          "This is a critical requirement when implementing neural network layers."
        ],
        "codeBlocks": [
          "\\[ (2\\times3)(3\\times4)=(2\\times4) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.3 NumPy implementation",
        "paragraphs": [
          "Output:",
          "[[19 22] [43 50]]"
        ],
        "codeBlocks": [
          "import numpy as npA = np.array([ [1, 2], [3, 4]])B = np.array([ [5, 6], [7, 8]])result = A @ Bprint(result)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.4 Element-wise multiplication vs matrix multiplication",
        "paragraphs": [
          "The first calculates corresponding element products.",
          "The second calculates the matrix product."
        ],
        "codeBlocks": [
          "print(A * B)print(A @ B)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.5 Matrix-vector multiplication",
        "paragraphs": [
          "Suppose:",
          "And:",
          "Then:",
          "This operation is a foundational component of neural network computation."
        ],
        "codeBlocks": [
          "\\[ W= \\begin{bmatrix} 2&3\\\\ 4&5 \\end{bmatrix} \\]",
          "\\[ x= \\begin{bmatrix} 1\\\\ 2 \\end{bmatrix} \\]",
          "\\[ Wx= \\begin{bmatrix} 2(1)+3(2)\\\\ 4(1)+5(2) \\end{bmatrix} = \\begin{bmatrix} 8\\\\ 14 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.6 Batch processing",
        "paragraphs": [
          "Suppose a neural network receives 100 examples, each containing 3 features.",
          "The input matrix is:",
          "\\[ X\\in\\mathbb{R}^{100\\times3} \\]",
          "Suppose the layer has 4 output units.",
          "Its weight matrix can be:",
          "\\[ W\\in\\mathbb{R}^{3\\times4} \\]",
          "Then:",
          "\\[ XW\\in\\mathbb{R}^{100\\times4} \\]",
          "One matrix multiplication processes all 100 observations.",
          "This is one reason vectorized numerical computing is so important in AI."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "8.7 Complete practical example",
        "paragraphs": [
          "Expected output:",
          "[[2.8 7.2] [3.0 9.0] [3.2 10.8]]"
        ],
        "codeBlocks": [
          "import numpy as np# 3 observations and 2 features.X = np.array([ [2, 4], [3, 5], [4, 6]])# 2 input features, 2 output units.W = np.array([ [0.5, 1.0], [0.2, 0.8]])# Bias for each output unit.b = np.array([1.0, 2.0])output = X @ W + bprint(output)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2217
  },
  {
    "id": "sec-09",
    "sectionNum": 9,
    "title": "Systems of Linear Equations",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "9.1 What is a system of linear equations?",
        "paragraphs": [
          "A system contains two or more equations involving common unknown variables.",
          "Example:",
          "Subtract the second equation from the first:",
          "Substitute:",
          "Therefore:"
        ],
        "codeBlocks": [
          "\\[ 2x+y=8 \\]",
          "\\[ x+y=5 \\]",
          "\\[ x=3 \\]",
          "\\[ 3+y=5 \\]",
          "\\[ y=2 \\]",
          "\\[ x=3,\\quad y=2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.2 Matrix representation",
        "paragraphs": [
          "A system can be represented as:",
          "Where:"
        ],
        "codeBlocks": [
          "\\[ Ax=b \\]",
          "\\[ A= \\begin{bmatrix} 2&1\\\\ 1&1 \\end{bmatrix} \\]",
          "\\[ x= \\begin{bmatrix} x\\\\y \\end{bmatrix} \\]",
          "\\[ b= \\begin{bmatrix} 8\\\\5 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.3 Gaussian elimination",
        "paragraphs": [
          "Gaussian elimination solves systems of linear equations by transforming the augmented matrix through elementary row operations.",
          "Important operations:",
          "Interchange two rows.",
          "Multiply a row by a nonzero constant.",
          "Add a multiple of one row to another.",
          "Students should learn how these operations simplify a system without changing its solution set."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.4 NumPy implementation",
        "paragraphs": [
          "Output:",
          "[3. 2.]"
        ],
        "codeBlocks": [
          "import numpy as npA = np.array([ [2, 1], [1, 1]], dtype=float)b = np.array([8, 5], dtype=float)solution = np.linalg.solve(A, b)print(solution)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "9.5 Why this matters in AI",
        "paragraphs": [
          "Linear systems appear in:",
          "Linear regression.",
          "Least-squares approximation.",
          "Numerical optimization.",
          "Signal processing.",
          "Scientific computing.",
          "For general least-squares problems, an inverse should not be used as the default computational method. Numerical solvers and QR or SVD-based methods are usually more appropriate."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1518
  },
  {
    "id": "sec-10",
    "sectionNum": 10,
    "title": "Matrix Rank, Determinants and Inverses",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "10.1 Determinants",
        "paragraphs": [
          "The determinant is a scalar associated with a square matrix.",
          "For:",
          "The determinant is:",
          "Example:",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ A= \\begin{bmatrix} a&b\\\\ c&d \\end{bmatrix} \\]",
          "\\[ \\det(A)=ad-bc \\]",
          "\\[ A= \\begin{bmatrix} 2&3\\\\ 1&4 \\end{bmatrix} \\]",
          "\\[ \\det(A)=(2)(4)-(3)(1)=5 \\]",
          "import numpy as npA = np.array([ [2, 3], [1, 4]])print(np.linalg.det(A))"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.2 Understanding determinants",
        "paragraphs": [
          "The determinant can describe the signed volume-scaling factor of a linear transformation.",
          "For a square matrix:",
          "Nonzero determinant indicates the matrix is invertible.",
          "Zero determinant indicates the matrix is singular."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.3 Matrix inverse",
        "paragraphs": [
          "For an invertible matrix:",
          "For a 2 × 2 matrix:",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ AA^{-1}=A^{-1}A=I \\]",
          "\\[ A^{-1} = \\frac{1}{ad-bc} \\begin{bmatrix} d&-b\\\\ -c&a \\end{bmatrix} \\]",
          "inverse = np.linalg.inv(A)print(inverse)print(A @ inverse)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.4 Matrix rank",
        "paragraphs": [
          "Rank is the number of linearly independent rows or columns of a matrix.",
          "Output:",
          "1",
          "The second row is twice the first, so there is only one independent row."
        ],
        "codeBlocks": [
          "A = np.array([ [1, 2], [2, 4]])print(np.linalg.matrix_rank(A))"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.5 Why rank matters in AI",
        "paragraphs": [
          "Rank helps understand:",
          "Redundant features.",
          "Linear dependence.",
          "Solvability of systems.",
          "Data dimensionality.",
          "Matrix factorization."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "10.6 Pseudoinverse",
        "paragraphs": [
          "Some matrices do not have ordinary inverses.",
          "The Moore–Penrose pseudoinverse generalizes the concept of an inverse and is useful for least-squares problems."
        ],
        "codeBlocks": [
          "A = np.array([ [1, 2], [2, 4], [3, 6]], dtype=float)pinv = np.linalg.pinv(A)print(pinv)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1633
  },
  {
    "id": "sec-11",
    "sectionNum": 11,
    "title": "Linear Transformations and Eigenvalues",
    "duration": "1.5 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "11.1 What is a linear transformation?",
        "paragraphs": [
          "A linear transformation maps one vector to another while preserving vector addition and scalar multiplication.",
          "A transformation \\(T\\) is linear if:",
          "And:",
          "Matrix multiplication is a common way to represent linear transformations."
        ],
        "codeBlocks": [
          "\\[ T(u+v)=T(u)+T(v) \\]",
          "\\[ T(cv)=cT(v) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.2 Geometric transformations",
        "paragraphs": [
          "Examples include:",
          "Scaling.",
          "Rotation.",
          "Reflection.",
          "Projection.",
          "Shearing.",
          "Consider:",
          "Multiplying a vector by this matrix doubles its first coordinate and triples its second coordinate."
        ],
        "codeBlocks": [
          "\\[ A= \\begin{bmatrix} 2&0\\\\ 0&3 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.3 Eigenvalues and eigenvectors",
        "paragraphs": [
          "For a square matrix \\(A\\), a nonzero vector \\(v\\) is an eigenvector if:",
          "Where:",
          "\\(v\\) is an eigenvector.",
          "\\(\\lambda\\) is its eigenvalue.",
          "The matrix transformation changes the magnitude of this eigenvector, but its direction remains on the same line."
        ],
        "codeBlocks": [
          "\\[ Av=\\lambda v \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.4 Worked example",
        "paragraphs": [
          "Consider:",
          "Take:",
          "Then:",
          "Thus the eigenvalue is 2."
        ],
        "codeBlocks": [
          "\\[ A= \\begin{bmatrix} 2&0\\\\ 0&3 \\end{bmatrix} \\]",
          "\\[ v= \\begin{bmatrix} 1\\\\ 0 \\end{bmatrix} \\]",
          "\\[ Av= \\begin{bmatrix} 2\\\\ 0 \\end{bmatrix} =2v \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.5 NumPy implementation",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as npA = np.array([ [2, 0], [0, 3]])eigenvalues, eigenvectors = np.linalg.eig(A)print(\"Eigenvalues:\")print(eigenvalues)print(\"Eigenvectors:\")print(eigenvectors)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "11.6 Why eigenvalues matter in AI",
        "paragraphs": [
          "They are important in:",
          "Principal Component Analysis.",
          "Dimensionality reduction.",
          "Stability analysis.",
          "Spectral methods.",
          "Graph analysis.",
          "Students should understand the conceptual relationship before studying PCA in depth in a later Machine Learning module."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1619
  },
  {
    "id": "sec-12",
    "sectionNum": 12,
    "title": "Matrix Decompositions and SVD",
    "duration": "5–6 hours",
    "partNum": 2,
    "partName": "Part II — Linear Algebra for AI",
    "tag": "Vectors & Matrices",
    "subsections": [
      {
        "title": "12.1 What is matrix decomposition?",
        "paragraphs": [
          "Matrix decomposition represents a matrix as a product of simpler matrices.",
          "This makes complex calculations easier and reveals useful structural properties."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.2 LU decomposition",
        "paragraphs": [
          "An invertible or suitably factorable matrix can be represented as:",
          "Where:",
          "\\(L\\) is a lower triangular matrix.",
          "\\(U\\) is an upper triangular matrix.",
          "LU decomposition is useful for solving systems of linear equations."
        ],
        "codeBlocks": [
          "\\[ A=LU \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.3 QR decomposition",
        "paragraphs": [
          "A matrix can be decomposed as:",
          "Where:",
          "\\(Q\\) has orthonormal columns.",
          "\\(R\\) is upper triangular.",
          "QR decomposition is widely used in numerical least-squares solutions."
        ],
        "codeBlocks": [
          "\\[ A=QR \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.4 Singular Value Decomposition",
        "paragraphs": [
          "SVD represents a matrix as:",
          "Where:",
          "\\(U\\) contains left singular vectors.",
          "\\(\\Sigma\\) contains singular values.",
          "\\(V^T\\) contains transposed right singular vectors."
        ],
        "codeBlocks": [
          "\\[ A=U\\Sigma V^T \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.5 NumPy implementation",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as npA = np.array([ [1, 2], [3, 4], [5, 6]], dtype=float)U, S, VT = np.linalg.svd( A, full_matrices=False)print(\"U:\")print(U)print(\"Singular values:\")print(S)print(\"VT:\")print(VT)reconstructed = U @ np.diag(S) @ VTprint(\"Reconstructed matrix:\")print(reconstructed)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.6 AI applications of SVD",
        "paragraphs": [
          "Dimensionality reduction.",
          "Data compression.",
          "Noise reduction.",
          "Latent semantic analysis.",
          "Low-rank approximation."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "12.7 Low-rank approximation",
        "paragraphs": [
          "A high-dimensional matrix can sometimes be approximated using a smaller set of important singular values.",
          "This can reduce storage and computational requirements while preserving much of the important structure."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "Lab: Decompose matrices using NumPy and reconstruct them. Compare the original matrix to a lower-rank approximation.",
        "paragraphs": [
          "PART III — CALCULUS FOR MACHINE LEARNING",
          "Calculus explains how model outputs and objective functions change when their inputs or parameters change.",
          "Stanford CS229 explicitly expects multivariable calculus and linear algebra as part of the mathematical preparation for Machine Learning.",
          "CS229 Machine Learning+1"
        ],
        "codeBlocks": [
          "[Machine learning paradigms and mathematical foundations · DDeras](https://images.openai.com/static-rsc-4/O9DMkPdVUXwNUAmVaCO4DOzyMVzm1jWfjwli0zd-FtTRsui7lTYqDjiknD8gKIw2vG_q1Z2zXHN3Vn6OpUxk5QuVSwVYBOE250paJsysmZQtM4YDp5QuJTz3UPnNwt3LOrIXGiA7DM2fCv-MQVh1xpXBQ0MDkxHKKIDn4sz7nEk?purpose=inline)",
          "[deras.dev](https://deras.dev/blog/machine-learning-paradigms-and-mathematical-foundations?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 2445
  },
  {
    "id": "sec-13",
    "sectionNum": 13,
    "title": "Introduction to Calculus",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — Calculus for Machine Learning",
    "tag": "Derivatives & Gradients",
    "subsections": [
      {
        "title": "13.1 What is calculus?",
        "paragraphs": [
          "Calculus is a branch of mathematics concerned with change and accumulation.",
          "It has two major areas:",
          "Differential calculus: Studies rates of change using derivatives.",
          "Integral calculus: Studies accumulation and areas using integrals.",
          "This module emphasizes differential calculus because derivatives are fundamental to gradient-based model training."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "13.2 Why calculus is important in AI",
        "paragraphs": [
          "Imagine a model that predicts a house price.",
          "Its prediction depends on weights:",
          "Changing \\(w\\) changes the prediction.",
          "But how much does the prediction change when \\(w\\) increases slightly?",
          "Calculus provides a way to calculate that sensitivity."
        ],
        "codeBlocks": [
          "\\[ \\hat{y}=wx+b \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "13.3 Functions",
        "paragraphs": [
          "A function maps inputs to outputs.",
          "If:",
          "Then:",
          "A function may be linear, quadratic, exponential, logarithmic or much more complex."
        ],
        "codeBlocks": [
          "\\[ f(x)=x^2 \\]",
          "\\[ x=3 \\]",
          "\\[ f(3)=9 \\]"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 891
  },
  {
    "id": "sec-14",
    "sectionNum": 14,
    "title": "Functions, Limits and Continuity",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — Calculus for Machine Learning",
    "tag": "Derivatives & Gradients",
    "subsections": [
      {
        "title": "14.1 Understanding limits",
        "paragraphs": [
          "A limit describes the value a function approaches as its input approaches a particular value.",
          "This means the function approaches \\(L\\) as \\(x\\) approaches \\(a\\).",
          "Example:"
        ],
        "codeBlocks": [
          "\\[ \\lim_{x\\to a}f(x)=L \\]",
          "\\[ f(x)=x^2 \\]",
          "\\[ \\lim_{x\\to3}x^2=9 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "14.2 Continuity",
        "paragraphs": [
          "\\(f(a)\\) is defined.",
          "The limit as \\(x\\) approaches \\(a\\) exists.",
          "The limit equals \\(f(a)\\).",
          "Continuity matters in mathematical analysis and optimization."
        ],
        "codeBlocks": [
          "A function is continuous at \\(x=a\\) when:"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "14.3 Visualizing a function",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as npimport matplotlib.pyplot as pltx = np.linspace(-5, 5, 200)y = x**2plt.plot(x, y)plt.title(\"Quadratic Function\")plt.xlabel(\"x\")plt.ylabel(\"f(x)\")plt.grid(True)plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "14.4 Exercises",
        "paragraphs": [
          "Calculate the limit of \\(x^2+2x\\) as \\(x\\) approaches 3.",
          "Identify points where a given piecewise function is discontinuous."
        ],
        "codeBlocks": [
          "Plot \\(f(x)=x^2\\).",
          "Plot \\(f(x)=2x+3\\)."
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 912
  },
  {
    "id": "sec-15",
    "sectionNum": 15,
    "title": "Derivatives and Differentiation Rules",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — Calculus for Machine Learning",
    "tag": "Derivatives & Gradients",
    "subsections": [
      {
        "title": "15.1 What is a derivative?",
        "paragraphs": [
          "A derivative measures the instantaneous rate of change of a function.",
          "For:",
          "\\[ f(x) \\]",
          "Its derivative is written:",
          "\\[ f'(x) \\]",
          "or:",
          "\\[ \\frac{df}{dx} \\]",
          "The derivative describes how quickly the function changes when the input changes."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.2 Geometric interpretation",
        "paragraphs": [
          "The derivative at a point represents the slope of the tangent line to the function at that point, when the derivative exists."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.3 Derivative using first principles",
        "paragraphs": [
          "The derivative is defined by:",
          "For:",
          "Substitute:",
          "Expand:",
          "Simplify:",
          "Therefore:"
        ],
        "codeBlocks": [
          "\\[ f'(x)= \\lim_{h\\to0} \\frac{f(x+h)-f(x)}{h} \\]",
          "\\[ f(x)=x^2 \\]",
          "\\[ f'(x)= \\lim_{h\\to0} \\frac{(x+h)^2-x^2}{h} \\]",
          "\\[ =\\lim_{h\\to0} \\frac{x^2+2xh+h^2-x^2}{h} \\]",
          "\\[ =\\lim_{h\\to0}(2x+h) \\]",
          "\\[ \\boxed{f'(x)=2x} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.4 Power rule",
        "paragraphs": [
          "For:",
          "The derivative is:",
          "Example:"
        ],
        "codeBlocks": [
          "\\[ f(x)=x^n \\]",
          "\\[ f'(x)=nx^{n-1} \\]",
          "\\[ f(x)=x^3 \\]",
          "\\[ f'(x)=3x^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.5 Constant rule",
        "paragraphs": [
          "Example:"
        ],
        "codeBlocks": [
          "\\[ f(x)=c \\]",
          "\\[ f'(x)=0 \\]",
          "\\[ f(x)=10 \\]",
          "\\[ f'(x)=0 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.6 Constant multiple rule",
        "paragraphs": [
          "Then:"
        ],
        "codeBlocks": [
          "\\[ f(x)=cf(x) \\]",
          "\\[ \\frac{d}{dx}[cf(x)]=cf'(x) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.7 Sum and difference rules",
        "paragraphs": [
          "Example:"
        ],
        "codeBlocks": [
          "\\[ \\frac{d}{dx}[f(x)+g(x)] =f'(x)+g'(x) \\]",
          "\\[ \\frac{d}{dx}[f(x)-g(x)] =f'(x)-g'(x) \\]",
          "\\[ f(x)=3x^2+5x+7 \\]",
          "\\[ f'(x)=6x+5 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.8 Product rule",
        "paragraphs": [
          "For two differentiable functions:"
        ],
        "codeBlocks": [
          "\\[ \\frac{d}{dx}[f(x)g(x)] =f'(x)g(x)+f(x)g'(x) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.9 Quotient rule",
        "paragraphs": [
          "Where \\(g(x)\\neq0\\)."
        ],
        "codeBlocks": [
          "\\[ \\frac{d}{dx} \\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x)-f(x)g'(x)} {[g(x)]^2} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.10 Derivatives of exponential and logarithmic functions",
        "paragraphs": [
          "For sigmoid-related calculations, these relationships become important."
        ],
        "codeBlocks": [
          "\\[ \\frac{d}{dx}e^x=e^x \\]",
          "\\[ \\frac{d}{dx}\\ln(x)=\\frac{1}{x} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "15.11 Numerical derivative in Python",
        "paragraphs": [
          "The result is approximately:",
          "6.0001",
          "Numerical differentiation approximates derivatives and is useful for checking analytical results, but its accuracy depends on the chosen step size and numerical precision."
        ],
        "codeBlocks": [
          "def f(x): return x**2x = 3h = 0.0001derivative = ( f(x + h) - f(x)) / hprint(derivative)",
          "The exact derivative at \\(x=3\\) is 6."
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2124
  },
  {
    "id": "sec-16",
    "sectionNum": 16,
    "title": "Partial Derivatives",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — Calculus for Machine Learning",
    "tag": "Derivatives & Gradients",
    "subsections": [
      {
        "title": "16.1 Why partial derivatives?",
        "paragraphs": [
          "In AI, models commonly depend on many parameters.",
          "Consider:",
          "This function depends on both \\(x\\) and \\(y\\).",
          "A partial derivative measures how the function changes with respect to one variable while the other variables are treated as constants."
        ],
        "codeBlocks": [
          "\\[ f(x,y)=x^2+3y^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "16.2 Partial derivative with respect to x",
        "paragraphs": [],
        "codeBlocks": [
          "\\[ \\frac{\\partial f}{\\partial x}=2x \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "16.3 Partial derivative with respect to y",
        "paragraphs": [],
        "codeBlocks": [
          "\\[ \\frac{\\partial f}{\\partial y}=6y \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "16.4 Worked example",
        "paragraphs": [
          "Let:",
          "At:",
          "Then:",
          "And:",
          "Therefore:"
        ],
        "codeBlocks": [
          "\\[ f(x,y)=x^2+3y^2 \\]",
          "\\[ x=2,\\quad y=3 \\]",
          "\\[ \\frac{\\partial f}{\\partial x}=2(2)=4 \\]",
          "\\[ \\frac{\\partial f}{\\partial y}=6(3)=18 \\]",
          "\\[ \\nabla f= \\begin{bmatrix} 4\\\\ 18 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "16.5 Python example",
        "paragraphs": [],
        "codeBlocks": [
          "def df_dx(x, y): return 2 * xdef df_dy(x, y): return 6 * yx = 2y = 3print(df_dx(x, y))print(df_dy(x, y))"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "16.6 AI application",
        "paragraphs": [
          "Imagine a model with two parameters:",
          "Its performance depends on both weights.",
          "Partial derivatives calculate how the loss changes with each individual parameter."
        ],
        "codeBlocks": [
          "\\[ \\hat{y}=w_1x_1+w_2x_2+b \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "Exercise: Calculate all first-order partial derivatives for:",
        "paragraphs": [],
        "codeBlocks": [
          "\\(f(x,y)=x^2+y^2\\)",
          "\\(f(x,y)=3x^2+2xy+y^2\\)",
          "\\(f(x,y,z)=x^2+yz+z^2\\)"
        ],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 1186
  },
  {
    "id": "sec-17",
    "sectionNum": 17,
    "title": "Gradients and Directional Derivatives",
    "duration": "1.5 hours",
    "partNum": 3,
    "partName": "Part III — Calculus for Machine Learning",
    "tag": "Derivatives & Gradients",
    "subsections": [
      {
        "title": "17.1 What is a gradient?",
        "paragraphs": [
          "The gradient is a vector of partial derivatives.",
          "For a function:",
          "\\[ f(x_1,x_2,\\ldots,x_n) \\]",
          "The gradient is:",
          "It tells us the direction of the steepest local increase of a differentiable scalar function."
        ],
        "codeBlocks": [
          "\\[ \\nabla f= \\begin{bmatrix} \\frac{\\partial f}{\\partial x_1}\\\\ \\frac{\\partial f}{\\partial x_2}\\\\ \\vdots\\\\ \\frac{\\partial f}{\\partial x_n} \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.2 Worked example",
        "paragraphs": [
          "Consider:",
          "Then:",
          "At:",
          "\\[ (3,4) \\]"
        ],
        "codeBlocks": [
          "\\[ f(x,y)=x^2+y^2 \\]",
          "\\[ \\nabla f= \\begin{bmatrix} 2x\\\\ 2y \\end{bmatrix} \\]",
          "\\[ \\nabla f= \\begin{bmatrix} 6\\\\ 8 \\end{bmatrix} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.3 Directional derivative",
        "paragraphs": [
          "The directional derivative measures the rate of change in a particular direction.",
          "For a unit direction vector \\(u\\):",
          "Example:",
          "Take:",
          "Then:"
        ],
        "codeBlocks": [
          "\\[ D_uf(x)=\\nabla f(x)^Tu \\]",
          "\\[ \\nabla f= \\begin{bmatrix} 6\\\\8 \\end{bmatrix} \\]",
          "\\[ u= \\begin{bmatrix} 1/\\sqrt2\\\\ 1/\\sqrt2 \\end{bmatrix} \\]",
          "\\[ D_uf=\\frac{6+8}{\\sqrt2} =\\frac{14}{\\sqrt2} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "17.4 Gradient visualization",
        "paragraphs": [
          "Students should interpret the arrows as directions in which the function increases most rapidly."
        ],
        "codeBlocks": [
          "import numpy as npimport matplotlib.pyplot as pltx = np.linspace(-5, 5, 100)y = np.linspace(-5, 5, 100)X, Y = np.meshgrid(x, y)Z = X**2 + Y**2GX = 2 * XGY = 2 * Yplt.contour(X, Y, Z, levels=20)plt.quiver( X[::8, ::8], Y[::8, ::8], GX[::8, ::8], GY[::8, ::8])plt.title(\"Gradient of f(x, y) = x² + y²\")plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1403
  },
  {
    "id": "sec-18",
    "sectionNum": 18,
    "title": "Chain Rule and Computational Graphs",
    "duration": "4–5 hours",
    "partNum": 3,
    "partName": "Part III — Calculus for Machine Learning",
    "tag": "Derivatives & Gradients",
    "subsections": [
      {
        "title": "18.1 What is the chain rule?",
        "paragraphs": [
          "The chain rule calculates the derivative of a composite function.",
          "If:",
          "Then:"
        ],
        "codeBlocks": [
          "\\[ y=f(g(x)) \\]",
          "\\[ \\frac{dy}{dx} = \\frac{dy}{dg} \\cdot \\frac{dg}{dx} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.2 Worked example",
        "paragraphs": [
          "Suppose:",
          "Let:",
          "Then:",
          "Differentiate:",
          "And:",
          "Using the chain rule:",
          "Therefore:"
        ],
        "codeBlocks": [
          "\\[ y=(3x+2)^2 \\]",
          "\\[ u=3x+2 \\]",
          "\\[ y=u^2 \\]",
          "\\[ \\frac{dy}{du}=2u \\]",
          "\\[ \\frac{du}{dx}=3 \\]",
          "\\[ \\frac{dy}{dx}=2u(3) \\]",
          "\\[ \\boxed{\\frac{dy}{dx}=6(3x+2)} \\]",
          "At \\(x=2\\):",
          "\\[ \\frac{dy}{dx}=6(8)=48 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.3 Why the chain rule matters in Deep Learning",
        "paragraphs": [
          "Neural networks are compositions of functions.",
          "A simplified neural network might have:",
          "The final output depends on several intermediate transformations.",
          "The chain rule calculates how a change in an early parameter affects the final loss.",
          "This is the mathematical foundation of backpropagation."
        ],
        "codeBlocks": [
          "\\[ h=f(W_1x+b_1) \\]",
          "\\[ \\hat{y}=g(W_2h+b_2) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.4 Computational graph",
        "paragraphs": [
          "Input x",
          "First transformation",
          "Second transformation",
          "Output y",
          "Backpropagation computes derivatives by moving backward through the graph using the chain rule."
        ],
        "codeBlocks": [
          "u = 3x + 2",
          "y = u²"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "18.5 Practical derivative verification",
        "paragraphs": [
          "Expected outcome: Students understand why gradients can be calculated through many nested layers, preparing them for neural network training in later modules.",
          "PART IV — PROBABILITY FOR AI",
          "Probability provides a mathematical language for reasoning about uncertainty.",
          "It is important for Machine Learning, statistical modelling, classification, generative modelling and evaluation."
        ],
        "codeBlocks": [
          "def f(x): return (3*x + 2)**2def analytical_derivative(x): return 6 * (3*x + 2)x = 2h = 0.0001numerical = (f(x + h) - f(x)) / hanalytical = analytical_derivative(x)print(\"Numerical:\", numerical)print(\"Analytical:\", analytical)",
          "[The Dice Game That Built Modern Statistics](https://images.openai.com/static-rsc-4/JudXdlKBE0xo1HzRyZowcw1DWyuOd9Bhub1atOgYhoOEUWxfZ3ZA7LpCjXKiRyscfwTUwic-I6ERqCpGdv-RHQidX7mPhC0_OfppwLp1n6uXsyzfpRLUpkRtrhU2mBnepjv1CEPRo2jyD7K8yI2AnXm1XGsZZGDVS7-id45WiEg?purpose=inline)",
          "[linkedin.com](https://www.linkedin.com/pulse/dice-game-built-modern-statistics-jim-2sbqc?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2157
  },
  {
    "id": "sec-19",
    "sectionNum": 19,
    "title": "Introduction to Probability",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Probability for AI",
    "tag": "Uncertainty & Distributions",
    "subsections": [
      {
        "title": "19.1 What is probability?",
        "paragraphs": [
          "Probability measures the likelihood that an event will occur.",
          "It ranges from 0 to 1.",
          "\\[ 0\\leq P(A)\\leq1 \\]",
          "Where:",
          "0 means impossible.",
          "1 means certain.",
          "Values between 0 and 1 represent different likelihoods."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.2 Sample space",
        "paragraphs": [
          "The sample space is the set of all possible outcomes of an experiment.",
          "For a six-sided die:"
        ],
        "codeBlocks": [
          "\\[ S=\\{1,2,3,4,5,6\\} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.3 Events",
        "paragraphs": [
          "An event is a subset of a sample space.",
          "Example:",
          "Rolling an even number:"
        ],
        "codeBlocks": [
          "\\[ A=\\{2,4,6\\} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.4 Basic probability formula",
        "paragraphs": [
          "For equally likely outcomes:",
          "For a fair die:"
        ],
        "codeBlocks": [
          "\\[ P(A)=\\frac{\\text{Favourable outcomes}} {\\text{Total outcomes}} \\]",
          "\\[ P(\\text{even})=\\frac{3}{6}=0.5 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.5 Complement rule",
        "paragraphs": [
          "If the probability of passing an exam is 0.8:"
        ],
        "codeBlocks": [
          "\\[ P(A^c)=1-P(A) \\]",
          "\\[ P(\\text{not passing})=1-0.8=0.2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "19.6 Addition rule",
        "paragraphs": [
          "For two events:",
          "For mutually exclusive events:",
          "Python simulation",
          "The result should be reasonably close to 0.5, though it will not necessarily equal it exactly."
        ],
        "codeBlocks": [
          "\\[ P(A\\cup B)=P(A)+P(B)-P(A\\cap B) \\]",
          "\\[ P(A\\cup B)=P(A)+P(B) \\]",
          "import numpy as nprng = np.random.default_rng(42)rolls = rng.integers( 1, 7, size=10000)even_count = np.sum(rolls % 2 == 0)probability = even_count / len(rolls)print(probability)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "Practical exercise",
        "paragraphs": [
          "Simulate:",
          "Rolling a six-sided die.",
          "Tossing a coin.",
          "Tossing two coins.",
          "Drawing a random number.",
          "Calculating approximate event probabilities from simulated outcomes."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 1423
  },
  {
    "id": "sec-20",
    "sectionNum": 20,
    "title": "Conditional Probability and Independence",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Probability for AI",
    "tag": "Uncertainty & Distributions",
    "subsections": [
      {
        "title": "20.1 Conditional probability",
        "paragraphs": [
          "Conditional probability describes the probability of an event occurring given that another event has already occurred.",
          "It is written:",
          "\\[ P(A|B) \\]",
          "The formula is:",
          "Where \\(P(B)>0\\)."
        ],
        "codeBlocks": [
          "\\[ P(A|B)=\\frac{P(A\\cap B)}{P(B)} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.2 Example",
        "paragraphs": [
          "Suppose a group contains 100 students.",
          "60 study Python.",
          "40 study Mathematics.",
          "30 study both.",
          "Let:",
          "\\(A\\): Student studies Python.",
          "\\(B\\): Student studies Mathematics.",
          "Then:",
          "Therefore, 75% of students who study Mathematics also study Python."
        ],
        "codeBlocks": [
          "\\[ P(A|B)=\\frac{30}{40}=0.75 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.3 Independent events",
        "paragraphs": [
          "Two events are independent when:",
          "Equivalent condition:",
          "When \\(P(B)>0\\).",
          "Independence means observing one event does not change the probability of the other."
        ],
        "codeBlocks": [
          "\\[ P(A\\cap B)=P(A)P(B) \\]",
          "\\[ P(A|B)=P(A) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.4 Example of independence",
        "paragraphs": [
          "For two independent coin tosses:",
          "The probability of both being heads is:"
        ],
        "codeBlocks": [
          "\\[ P(\\text{first heads})=\\frac12 \\]",
          "\\[ P(\\text{second heads})=\\frac12 \\]",
          "\\[ P(A\\cap B)=\\frac12\\times\\frac12 =\\frac14 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "20.5 Important distinction",
        "paragraphs": [
          "Mutually exclusive events are not the same as independent events.",
          "If two events are mutually exclusive and both have positive probability, they cannot be independent.",
          "Students should understand this distinction because incorrect assumptions about independence can lead to incorrect Machine Learning probability calculations."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1463
  },
  {
    "id": "sec-21",
    "sectionNum": 21,
    "title": "Bayes' Theorem",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Probability for AI",
    "tag": "Uncertainty & Distributions",
    "subsections": [
      {
        "title": "21.1 What is Bayes' theorem?",
        "paragraphs": [
          "Bayes' theorem describes how to update the probability of a hypothesis when new evidence becomes available.",
          "Where:",
          "\\(P(A)\\): Prior probability.",
          "\\(P(B|A)\\): Likelihood.",
          "\\(P(B)\\): Evidence probability.",
          "\\(P(A|B)\\): Posterior probability."
        ],
        "codeBlocks": [
          "\\[ P(A|B)= \\frac{P(B|A)P(A)}{P(B)} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "21.2 Worked example: Medical screening",
        "paragraphs": [
          "Assume the following hypothetical screening test:",
          "Disease prevalence: 1%.",
          "Sensitivity: 90%.",
          "Specificity: 95%.",
          "We want to calculate the probability that someone actually has the disease after receiving a positive result.",
          "Let:",
          "\\(D\\): Person has the disease.",
          "\\(+\\): Test result is positive.",
          "Given:",
          "Using total probability:",
          "Apply Bayes' theorem:",
          "\\[ \\boxed{P(D|+)\\approx0.1538} \\]",
          "The posterior probability is approximately 15.38%, not 90%.",
          "This shows why the prevalence of a condition matters when interpreting test results.",
          "This example is educational and not a clinical diagnostic tool."
        ],
        "codeBlocks": [
          "\\[ P(D)=0.01 \\]",
          "\\[ P(+|D)=0.90 \\]",
          "\\[ P(+|D^c)=0.05 \\]",
          "\\[ P(+)=P(+|D)P(D)+P(+|D^c)P(D^c) \\]",
          "\\[ P(+)=0.90(0.01)+0.05(0.99) \\]",
          "\\[ P(+)=0.009+0.0495=0.0585 \\]",
          "\\[ P(D|+)=\\frac{0.90(0.01)}{0.0585} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "21.3 Python implementation",
        "paragraphs": [
          "Output:",
          "0.15384615384615385"
        ],
        "codeBlocks": [
          "prevalence = 0.01sensitivity = 0.90specificity = 0.95false_positive_rate = 1 - specificitypositive_probability = ( sensitivity * prevalence + false_positive_rate * (1 - prevalence))posterior = ( sensitivity * prevalence / positive_probability)print(posterior)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "21.4 Applications of Bayes' theorem",
        "paragraphs": [
          "Spam filtering.",
          "Medical screening.",
          "Fraud detection.",
          "Fault diagnosis.",
          "Bayesian Machine Learning.",
          "Probabilistic inference."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1727
  },
  {
    "id": "sec-22",
    "sectionNum": 22,
    "title": "Random Variables and Probability Distributions",
    "duration": "1.5 hours",
    "partNum": 4,
    "partName": "Part IV — Probability for AI",
    "tag": "Uncertainty & Distributions",
    "subsections": [
      {
        "title": "22.1 Random variable",
        "paragraphs": [
          "A random variable is a numerical quantity whose value depends on the outcome of a random experiment.",
          "For a coin toss:"
        ],
        "codeBlocks": [
          "\\[ X= \\begin{cases} 1 & \\text{Heads}\\\\ 0 & \\text{Tails} \\end{cases} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.2 Discrete random variables",
        "paragraphs": [
          "A discrete random variable takes distinct countable values.",
          "Examples:",
          "Number of students passing.",
          "Number of emails received.",
          "Number of defects in a product."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.3 Continuous random variables",
        "paragraphs": [
          "A continuous random variable can take values over a continuous interval.",
          "Examples:",
          "Height.",
          "Temperature.",
          "Time.",
          "Measured weight."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.4 Bernoulli distribution",
        "paragraphs": [
          "A Bernoulli random variable represents one trial with two possible outcomes.",
          "For example, whether a student passes a test."
        ],
        "codeBlocks": [
          "\\[ P(X=1)=p \\]",
          "\\[ P(X=0)=1-p \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.5 Binomial distribution",
        "paragraphs": [
          "The binomial distribution models the number of successes across a fixed number of independent Bernoulli trials with constant success probability.",
          "Where:",
          "\\(n\\) is the number of trials.",
          "\\(k\\) is the number of successes.",
          "\\(p\\) is the probability of success.",
          "Example:",
          "The number of students passing out of 10, assuming independent outcomes and a fixed 0.8 probability of passing for each student."
        ],
        "codeBlocks": [
          "\\[ P(X=k)= \\binom{n}{k}p^k(1-p)^{n-k} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.6 Normal distribution",
        "paragraphs": [
          "The normal distribution is a continuous probability distribution with a bell-shaped density curve.",
          "It is commonly represented as:",
          "\\[ X\\sim\\mathcal{N}(\\mu,\\sigma^2) \\]",
          "Where:",
          "\\(\\mu\\) is the mean.",
          "\\(\\sigma^2\\) is the variance.",
          "\\(\\sigma\\) is the standard deviation."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.7 Standard normal distribution",
        "paragraphs": [
          "A standard normal distribution has:",
          "A standard score is calculated as:"
        ],
        "codeBlocks": [
          "\\[ \\mu=0,\\quad\\sigma=1 \\]",
          "\\[ z=\\frac{x-\\mu}{\\sigma} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "22.8 Why distributions matter in AI",
        "paragraphs": [
          "Probability distributions are used to describe:",
          "Random model initialization.",
          "Measurement uncertainty.",
          "Prediction uncertainty.",
          "Sampling.",
          "Likelihoods.",
          "Latent variables in generative models.",
          "Python implementation",
          "Practical assignment",
          "Simulate and compare:",
          "Bernoulli random variables.",
          "Binomial random variables.",
          "Normal random variables.",
          "Uniform random variables.",
          "Explain how changing their parameters changes the resulting distribution."
        ],
        "codeBlocks": [
          "import numpy as npimport matplotlib.pyplot as pltrng = np.random.default_rng(42)values = rng.normal( loc=50, scale=10, size=10000)plt.hist( values, bins=40, density=True)plt.title(\"Normal Distribution Simulation\")plt.xlabel(\"Value\")plt.ylabel(\"Density\")plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2442
  },
  {
    "id": "sec-23",
    "sectionNum": 23,
    "title": "Expected Value, Variance and Covariance",
    "duration": "4–5 hours",
    "partNum": 4,
    "partName": "Part IV — Probability for AI",
    "tag": "Uncertainty & Distributions",
    "subsections": [
      {
        "title": "23.1 Expected value",
        "paragraphs": [
          "Expected value is the probability-weighted average of the possible values of a random variable.",
          "For a discrete random variable:",
          "Example:",
          "A fair die has possible outcomes:",
          "\\[ 1,2,3,4,5,6 \\]",
          "Its expected value is:",
          "The expected value does not have to be an outcome that can actually occur."
        ],
        "codeBlocks": [
          "\\[ E[X]=\\sum_x xP(X=x) \\]",
          "\\[ E[X]=\\frac{1+2+3+4+5+6}{6} \\]",
          "\\[ E[X]=3.5 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "23.2 Variance",
        "paragraphs": [
          "Variance measures how spread out a random variable is around its expected value.",
          "An equivalent expression is:"
        ],
        "codeBlocks": [
          "\\[ Var(X)=E[(X-\\mu)^2] \\]",
          "\\[ Var(X)=E[X^2]-(E[X])^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "23.3 Standard deviation",
        "paragraphs": [
          "Standard deviation expresses the spread in the same units as the original variable."
        ],
        "codeBlocks": [
          "\\[ \\sigma=\\sqrt{Var(X)} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "23.4 Covariance",
        "paragraphs": [
          "Covariance measures how two variables vary together.",
          "Interpretation:",
          "Positive covariance: Variables tend to move in the same direction.",
          "Negative covariance: Variables tend to move in opposite directions.",
          "Near-zero covariance: No strong linear co-movement is indicated.",
          "Covariance depends on the scale of the variables."
        ],
        "codeBlocks": [
          "\\[ Cov(X,Y)=E[(X-\\mu_X)(Y-\\mu_Y)] \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "23.5 Correlation",
        "paragraphs": [
          "Pearson correlation standardizes covariance.",
          "It ranges from -1 to 1."
        ],
        "codeBlocks": [
          "\\[ r=\\frac{Cov(X,Y)}{\\sigma_X\\sigma_Y} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "23.6 Python practical",
        "paragraphs": [
          "Assignment",
          "Study the relationship between:",
          "Study hours and examination scores.",
          "Practice questions and examination scores.",
          "Attendance and examination scores.",
          "Explain why correlation does not prove causation.",
          "PART V — STATISTICS FOR MACHINE LEARNING",
          "Statistics helps engineers understand datasets, identify patterns, estimate unknown quantities and evaluate whether conclusions are supported by evidence.",
          "Stanford's ML preparation materials include probability, random variables, expectation, variance, statistical estimation and central limit theorem concepts.",
          "CS229 - Machine Learning+1"
        ],
        "codeBlocks": [
          "import numpy as npstudy_hours = np.array([1, 2, 3, 4, 5])scores = np.array([40, 50, 65, 75, 85])print(\"Mean:\", np.mean(scores))print(\"Variance:\", np.var(scores))print(\"Standard deviation:\", np.std(scores))print(\"Covariance:\")print(np.cov(study_hours, scores))print(\"Correlation:\")print(np.corrcoef(study_hours, scores))",
          "[- YouTube](https://images.openai.com/static-rsc-4/BfShuXIR1tDuegpT2XYiIsW8HSDUwfMnz5H-dJgItEtNFwRtH97qkFLR1ulsjS3vfBcgLs9NTMBYvbDUxcNc11BL3NvPDiJlg2G7xPYF4lFlQYHKVbJ0CJAnYqwYXdMkR8kjLGTK-cyCRWDMNnKBQ6MiLzIjNEvikPUkh9ESM-4?purpose=inline)",
          "[youtube.com](https://www.youtube.com/watch?v=1MXcyrNkprk&utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2527
  },
  {
    "id": "sec-24",
    "sectionNum": 24,
    "title": "Introduction to Statistics",
    "duration": "1.5 hours",
    "partNum": 5,
    "partName": "Part V — Statistics for Machine Learning",
    "tag": "Inference & Estimation",
    "subsections": [
      {
        "title": "24.1 What is statistics?",
        "paragraphs": [
          "Statistics is the discipline concerned with collecting, analyzing, interpreting and communicating data.",
          "Its two major areas are:",
          "Descriptive statistics: Summarizes observed data.",
          "Inferential statistics: Uses sample data to draw conclusions about a larger population while accounting for uncertainty."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.2 Population and sample",
        "paragraphs": [
          "A population is the complete group of interest.",
          "A sample is a subset of that population.",
          "Example:",
          "Population: Every student enrolled in a university.",
          "Sample: 500 selected students.",
          "Sampling is often necessary because collecting information from an entire population may be expensive or impractical."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "24.3 Parameter and statistic",
        "paragraphs": [
          "A parameter describes a population.",
          "A statistic is calculated from a sample.",
          "Examples:",
          "Population mean: \\(\\mu\\)",
          "Sample mean: \\(\\bar{x}\\)",
          "Population variance: \\(\\sigma^2\\)",
          "Sample variance: \\(s^2\\)"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 915
  },
  {
    "id": "sec-25",
    "sectionNum": 25,
    "title": "Descriptive Statistics and Data Distributions",
    "duration": "1.5 hours",
    "partNum": 5,
    "partName": "Part V — Statistics for Machine Learning",
    "tag": "Inference & Estimation",
    "subsections": [
      {
        "title": "25.1 Mean",
        "paragraphs": [
          "Example:",
          "\\[ [10,20,30,40,50] \\]",
          "Mean:"
        ],
        "codeBlocks": [
          "\\[ \\bar{x}=\\frac{\\sum x_i}{n} \\]",
          "\\[ \\bar{x}=30 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.2 Median",
        "paragraphs": [
          "The median is the middle value after sorting the data.",
          "For:",
          "\\[ [10,20,30,40,50] \\]",
          "Median:",
          "\\[ 30 \\]",
          "For an even number of observations, average the two middle values."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.3 Mode",
        "paragraphs": [
          "The mode is the most frequently occurring value.",
          "For:",
          "\\[ [10,20,20,30,40] \\]",
          "Mode:",
          "\\[ 20 \\]"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.4 Range",
        "paragraphs": [],
        "codeBlocks": [
          "\\[ Range=x_{\\max}-x_{\\min} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.5 Quartiles",
        "paragraphs": [
          "Quartiles divide ordered observations into four parts.",
          "\\(Q_1\\): First quartile.",
          "\\(Q_2\\): Median.",
          "\\(Q_3\\): Third quartile.",
          "The interquartile range is:"
        ],
        "codeBlocks": [
          "\\[ IQR=Q_3-Q_1 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.6 Detecting outliers",
        "paragraphs": [
          "A common exploratory rule defines potential outliers as values outside:",
          "\\[ [Q_1-1.5(IQR),\\ Q_3+1.5(IQR)] \\]",
          "This is a screening method. It does not automatically mean an unusual value is incorrect."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.7 Skewness",
        "paragraphs": [
          "Skewness describes asymmetry in a distribution.",
          "Positive skew: A longer tail toward larger values.",
          "Negative skew: A longer tail toward smaller values."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "25.8 Practical code",
        "paragraphs": [
          "Students should compare mean and median to understand the effect of extreme values."
        ],
        "codeBlocks": [
          "import numpy as npimport pandas as pdscores = np.array([ 45, 55, 60, 65, 70, 70, 75, 80, 85, 95])print(\"Mean:\", np.mean(scores))print(\"Median:\", np.median(scores))print(\"Range:\", np.ptp(scores))print(\"Standard deviation:\", np.std(scores))print(\"Q1:\", np.quantile(scores, 0.25))print(\"Q3:\", np.quantile(scores, 0.75))"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1469
  },
  {
    "id": "sec-26",
    "sectionNum": 26,
    "title": "Sampling, Central Limit Theorem and Statistical Estimation",
    "duration": "1.5 hours",
    "partNum": 5,
    "partName": "Part V — Statistics for Machine Learning",
    "tag": "Inference & Estimation",
    "subsections": [
      {
        "title": "26.1 Why sampling matters",
        "paragraphs": [
          "An engineer may need to understand the behaviour of millions of users.",
          "Analyzing every record may not always be practical.",
          "Sampling selects a subset of observations that can be analyzed efficiently."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.2 Sampling methods",
        "paragraphs": [
          "Simple random sampling: Each eligible population member has a specified equal chance of being selected.",
          "Stratified sampling: The population is divided into groups, followed by sampling within those groups.",
          "Systematic sampling: Select observations using a predefined interval after a suitable starting point.",
          "Cluster sampling: Divide the population into clusters and sample clusters according to the design."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.3 Sampling bias",
        "paragraphs": [
          "Sampling bias occurs when the selection process systematically makes some members of the target population more likely to be included than others.",
          "Example:",
          "Surveying only students who use a premium learning application may not represent all students."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.4 Central Limit Theorem",
        "paragraphs": [
          "The Central Limit Theorem states, under suitable conditions, that the distribution of sample means tends toward a normal distribution as sample size increases.",
          "For independent, identically distributed observations with finite variance:",
          "\\[ \\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\]",
          "approaches a standard normal distribution as \\(n\\) becomes large."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.5 Why CLT matters in AI",
        "paragraphs": [
          "It helps explain:",
          "Sampling behaviour.",
          "Statistical estimation.",
          "Confidence intervals.",
          "Experimentation.",
          "Statistical testing."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.6 Simulation",
        "paragraphs": [
          "The original population is skewed, but the distribution of sample means is more nearly bell-shaped in this simulation."
        ],
        "codeBlocks": [
          "import numpy as npimport matplotlib.pyplot as pltrng = np.random.default_rng(42)population = rng.exponential( scale=10, size=100000)sample_means = []for _ in range(1000): sample = rng.choice( population, size=50, replace=True ) sample_means.append(np.mean(sample))plt.hist(sample_means, bins=30)plt.title(\"Sampling Distribution of the Mean\")plt.xlabel(\"Sample Mean\")plt.ylabel(\"Frequency\")plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "26.7 Standard error",
        "paragraphs": [
          "For independent observations from a population with standard deviation \\(\\sigma\\):",
          "When the population standard deviation is unknown, the sample standard deviation is often used as an estimate."
        ],
        "codeBlocks": [
          "\\[ SE(\\bar{X})=\\frac{\\sigma}{\\sqrt{n}} \\]"
        ],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2412
  },
  {
    "id": "sec-27",
    "sectionNum": 27,
    "title": "Confidence Intervals and Hypothesis Testing",
    "duration": "1.5 hours",
    "partNum": 5,
    "partName": "Part V — Statistics for Machine Learning",
    "tag": "Inference & Estimation",
    "subsections": [
      {
        "title": "27.1 Parameter estimation",
        "paragraphs": [
          "Statistical estimation uses sample information to estimate unknown population quantities.",
          "For example, the average score of all students can be estimated using a sample mean."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.2 Confidence intervals",
        "paragraphs": [
          "A confidence interval gives a range produced by a statistical procedure that has a specified long-run coverage probability under its assumptions.",
          "For a sufficiently large sample under appropriate conditions, an approximate confidence interval for the population mean is:",
          "\\[ \\bar{x}\\pm z_{\\alpha/2}\\frac{s}{\\sqrt{n}} \\]",
          "For a 95% normal-based interval:",
          "\\[ z_{\\alpha/2}\\approx1.96 \\]",
          "When estimating a mean with unknown population standard deviation and a suitable normality assumption, a t-based interval is often more appropriate."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.3 Hypothesis testing",
        "paragraphs": [
          "Hypothesis testing evaluates evidence about a population claim.",
          "Two hypotheses:",
          "Null hypothesis \\(H_0\\).",
          "Alternative hypothesis \\(H_1\\).",
          "Example:",
          "A university claims that students study an average of 4 hours daily.",
          "\\[ H_1:\\mu\\neq4 \\]"
        ],
        "codeBlocks": [
          "\\[ H_0:\\mu=4 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.4 P-values",
        "paragraphs": [
          "A p-value is the probability, assuming the null hypothesis and the test assumptions, of obtaining a test statistic at least as extreme as the observed one.",
          "It is not:",
          "The probability that the null hypothesis is true.",
          "The probability that the result occurred by chance.",
          "A measure of practical importance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.5 Type I and Type II errors",
        "paragraphs": [
          "Type I error: Rejecting a true null hypothesis.",
          "Type II error: Failing to reject a false null hypothesis."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "27.6 Practical example",
        "paragraphs": [
          "Suppose a student learning platform introduces a new teaching method.",
          "The research question is:",
          "Does the new method produce a different average test score?",
          "Students should define:",
          "The null hypothesis.",
          "The alternative hypothesis.",
          "The measurement procedure.",
          "The sample.",
          "The test assumptions.",
          "The significance threshold.",
          "The interpretation of the results."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2048
  },
  {
    "id": "sec-28",
    "sectionNum": 28,
    "title": "Correlation and Statistical Relationships",
    "duration": "4–5 hours",
    "partNum": 5,
    "partName": "Part V — Statistics for Machine Learning",
    "tag": "Inference & Estimation",
    "subsections": [
      {
        "title": "28.1 What is correlation?",
        "paragraphs": [
          "Correlation measures the strength and direction of an association between variables.",
          "Pearson correlation:"
        ],
        "codeBlocks": [
          "\\[ r= \\frac{\\operatorname{Cov}(X,Y)} {\\sigma_X\\sigma_Y} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "28.2 Interpretation",
        "paragraphs": [
          "Correlation",
          "Interpretation",
          "+1",
          "Perfect positive linear relationship",
          "+0.7",
          "Strong positive linear relationship",
          "0",
          "No linear relationship",
          "Strong negative linear relationship",
          "Perfect negative linear relationship",
          "These are illustrative descriptions; what counts as strong depends on the application and data."
        ],
        "codeBlocks": [],
        "bullets": [
          "0.7",
          "1"
        ],
        "isExercise": false
      },
      {
        "title": "28.3 Correlation does not establish causation",
        "paragraphs": [
          "Suppose students who study more also tend to obtain higher scores.",
          "It does not automatically follow that studying more is the only reason their scores are higher.",
          "Other variables might affect both study time and performance:",
          "Prior knowledge.",
          "Course difficulty.",
          "Learning environment.",
          "Access to resources.",
          "Attendance."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "28.4 Python correlation analysis",
        "paragraphs": [],
        "codeBlocks": [
          "import pandas as pddata = { \"study_hours\": [1, 2, 3, 4, 5, 6], \"scores\": [40, 48, 60, 65, 78, 88]}df = pd.DataFrame(data)correlation = df[\"study_hours\"].corr( df[\"scores\"])print(correlation)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "28.5 Scatter plots",
        "paragraphs": [],
        "codeBlocks": [
          "import matplotlib.pyplot as pltplt.scatter( df[\"study_hours\"], df[\"scores\"])plt.title(\"Study Hours vs Student Scores\")plt.xlabel(\"Study Hours\")plt.ylabel(\"Scores\")plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "Practical exercise: Analyze at least three feature relationships within a real dataset and discuss possible confounding variables.",
        "paragraphs": [
          "PART VI — OPTIMIZATION FOR MACHINE LEARNING",
          "Optimization explains how Machine Learning models find parameter values that improve their performance."
        ],
        "codeBlocks": [
          "[Mathematics Visualizations for Machine Learning | Apatero](https://images.openai.com/static-rsc-4/0AWPuqYscnQA0DMmm25yrU7eIvcUin8o0hlj73pRLfz9itUNUnd73JGsp5u5FzROjKfRSvAWu0wF13sSCOD6c_4jbZLYUBZZ4hpPX5WsaJpqlB7oCwEmdw8YA_Ibftq3DK3SHSFrH9loudZYcpETG6zPjtMlSjDhsMny391s1XU?purpose=inline)",
          "[apatero.com](https://apatero.com/blog/mathematics-visualizations-machine-learning-guide-2025?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 2068
  },
  {
    "id": "sec-29",
    "sectionNum": 29,
    "title": "Introduction to Mathematical Optimization",
    "duration": "1.5 hours",
    "partNum": 6,
    "partName": "Part VI — Optimization for Machine Learning",
    "tag": "Losses & Gradient Descent",
    "subsections": [
      {
        "title": "29.1 What is optimization?",
        "paragraphs": [
          "Optimization is the process of finding the best solution according to a mathematical objective and its constraints.",
          "In Machine Learning, we often want to find parameters that minimize a loss function.",
          "Where:",
          "\\(\\theta\\) represents model parameters.",
          "\\(J(\\theta)\\) represents the objective function.",
          "\\(\\theta^*\\) represents an optimal parameter choice."
        ],
        "codeBlocks": [
          "\\[ \\theta^*=\\arg\\min_\\theta J(\\theta) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.2 Maximum vs minimum",
        "paragraphs": [
          "Consider:",
          "The minimum occurs at:",
          "Because:",
          "Consider:",
          "The maximum occurs at:",
          "Because:"
        ],
        "codeBlocks": [
          "\\[ f(x)=x^2 \\]",
          "\\[ x=0 \\]",
          "\\[ f(0)=0 \\]",
          "\\[ g(x)=-x^2 \\]",
          "\\[ x=0 \\]",
          "\\[ g(0)=0 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.3 Local and global minima",
        "paragraphs": [
          "A global minimum is the lowest value over the entire domain.",
          "A local minimum is a point with no lower nearby values, but a lower value may exist elsewhere."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.4 Convex functions",
        "paragraphs": [
          "A function is convex when its graph lies below or on the line segments connecting points on the graph, in the mathematical sense of convexity.",
          "For differentiable functions, convexity has useful mathematical tests involving gradients and, for twice-differentiable functions, Hessian matrices.",
          "Convex functions have important optimization properties, including the fact that every local minimum is also a global minimum."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "29.5 Why optimization matters in AI",
        "paragraphs": [
          "Every trainable model requires some method for adjusting its parameters to improve its objective.",
          "Examples:",
          "Linear regression.",
          "Logistic regression.",
          "Neural networks.",
          "Matrix factorization.",
          "Probabilistic models."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 1528
  },
  {
    "id": "sec-30",
    "sectionNum": 30,
    "title": "Gradient Descent and Optimization Algorithms",
    "duration": "1.5 hours",
    "partNum": 6,
    "partName": "Part VI — Optimization for Machine Learning",
    "tag": "Losses & Gradient Descent",
    "subsections": [
      {
        "title": "30.1 What is gradient descent?",
        "paragraphs": [
          "Gradient descent is an iterative optimization algorithm that updates parameters in the direction of the negative gradient.",
          "The update rule is:",
          "Where:",
          "\\(\\theta_t\\): Current parameters.",
          "\\(\\eta\\): Learning rate.",
          "\\(\\nabla J(\\theta_t)\\): Current gradient.",
          "\\(\\theta_{t+1}\\): Updated parameters."
        ],
        "codeBlocks": [
          "\\[ \\boxed{ \\theta_{t+1} = \\theta_t-\\eta\\nabla J(\\theta_t) } \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.2 Understanding the learning rate",
        "paragraphs": [
          "The learning rate controls the size of each parameter update.",
          "Too small: Learning may be very slow.",
          "Too large: Updates may overshoot an optimum or diverge.",
          "Appropriate: Updates can move efficiently toward a minimum, although the best learning rate depends on the objective and optimization method."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.3 Worked example",
        "paragraphs": [
          "Consider:",
          "Differentiate:",
          "Suppose:",
          "Learning rate:",
          "First update:",
          "Second update:",
          "The parameter gradually approaches 3."
        ],
        "codeBlocks": [
          "\\[ J(w)=(w-3)^2 \\]",
          "\\[ \\frac{dJ}{dw}=2(w-3) \\]",
          "\\[ w_0=0 \\]",
          "\\[ \\eta=0.1 \\]",
          "\\[ w_1=0-0.1[2(0-3)] \\]",
          "\\[ w_1=0.6 \\]",
          "\\[ w_2=0.6-0.1[2(0.6-3)] \\]",
          "\\[ w_2=1.08 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.4 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "def loss(w): return (w - 3) ** 2def gradient(w): return 2 * (w - 3)w = 0.0learning_rate = 0.1for step in range(20): grad = gradient(w) w = w - learning_rate * grad print( f\"Step {step + 1}: \" f\"w={w:.4f}, \" f\"loss={loss(w):.6f}\" )print(\"Final parameter:\", w)",
          "The result approaches the optimum \\(w=3\\)."
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.5 Visualizing gradient descent",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as npimport matplotlib.pyplot as pltdef loss(w): return (w - 3)**2w = 0.0learning_rate = 0.1history = [w]for _ in range(20): gradient = 2 * (w - 3) w -= learning_rate * gradient history.append(w)x = np.linspace(-1, 7, 200)plt.plot(x, loss(x))for point in history: plt.scatter(point, loss(point))plt.title(\"Gradient Descent Optimization\")plt.xlabel(\"Parameter\")plt.ylabel(\"Loss\")plt.show()"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.6 Batch gradient descent",
        "paragraphs": [
          "Batch gradient descent uses the full training dataset to calculate a gradient update.",
          "It can provide stable updates but may be expensive for large datasets."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.7 Stochastic gradient descent",
        "paragraphs": [
          "Stochastic Gradient Descent updates parameters using one training observation at a time.",
          "It is computationally efficient for individual updates but creates noisier optimization steps."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.8 Mini-batch gradient descent",
        "paragraphs": [
          "Mini-batch gradient descent uses a small subset of observations for each parameter update.",
          "It is commonly used in modern Deep Learning."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.9 Momentum",
        "paragraphs": [
          "Momentum uses information from previous updates to influence the current optimization direction.",
          "One simplified formulation is:",
          "Momentum can improve optimization in certain settings by smoothing update directions."
        ],
        "codeBlocks": [
          "\\[ v_t=\\beta v_{t-1}+\\nabla J(\\theta_t) \\]",
          "\\[ \\theta_{t+1}=\\theta_t-\\eta v_t \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "30.10 Other optimization algorithms",
        "paragraphs": [
          "Introduce:",
          "SGD with momentum.",
          "AdaGrad.",
          "RMSProp.",
          "Adam.",
          "These will be studied more deeply in the neural network and Deep Learning modules."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 2991
  },
  {
    "id": "sec-31",
    "sectionNum": 31,
    "title": "Loss Functions in Machine Learning",
    "duration": "1.5 hours",
    "partNum": 6,
    "partName": "Part VI — Optimization for Machine Learning",
    "tag": "Losses & Gradient Descent",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [],
        "codeBlocks": [
          "[Mastering Loss Functions: From Fundamentals to Designing Your Own | by Mohannad TAZI | Medium](https://images.openai.com/static-rsc-4/Fm3meJXtD6vzGMG7renQJWCsKV-P50MSDKUeiN3a5FqA7o8R2SW5S4JFcS2fOLC2HG5WjKMzWlGfMc0LWgfmlbqlTozG7PBir_fB2Dr5tPtQErzRTFisgTdHYuZm1_DKzrDjdiAjHnvayi5rgLQUraPIYCodLdnt6VacUuKLi-4?purpose=inline)",
          "[mohannadtazi.medium.com](https://mohannadtazi.medium.com/mastering-loss-functions-from-fundamentals-to-designing-your-own-1f716d46abcb?utm_source=chatgpt.com)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.1 What is a loss function?",
        "paragraphs": [
          "A loss function measures how far a model's prediction is from the desired target for an observation or a group of observations.",
          "The optimizer tries to adjust the model parameters to minimize the chosen objective.",
          "Different tasks require different losses."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.2 Mean Squared Error",
        "paragraphs": [
          "Mean Squared Error (MSE) is commonly used for regression tasks.",
          "Where:",
          "\\(y_i\\): Actual value.",
          "\\(\\hat{y}_i\\): Predicted value.",
          "\\(n\\): Number of observations.",
          "Example:",
          "Actual:",
          "Predictions:",
          "Errors:",
          "\\[ [-2,2,-5] \\]",
          "Squared errors:",
          "\\[ [4,4,25] \\]",
          "Therefore:",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ MSE=\\frac{1}{n}\\sum_{i=1}^{n}(y_i-\\hat{y}_i)^2 \\]",
          "\\[ y=[10,20,30] \\]",
          "\\[ \\hat{y}=[12,18,35] \\]",
          "\\[ MSE=\\frac{4+4+25}{3}=11 \\]",
          "import numpy as npactual = np.array([10, 20, 30])predicted = np.array([12, 18, 35])mse = np.mean((actual - predicted)**2)print(mse)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.3 Mean Absolute Error",
        "paragraphs": [
          "MAE measures the average absolute prediction error.",
          "Using the same example:",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ MAE=\\frac{1}{n}\\sum_{i=1}^{n}|y_i-\\hat{y}_i| \\]",
          "\\[ MAE=\\frac{2+2+5}{3}=3 \\]",
          "mae = np.mean(np.abs(actual - predicted))print(mae)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.4 MSE vs MAE",
        "paragraphs": [
          "Property",
          "MSE",
          "MAE",
          "Error handling",
          "Squared errors",
          "Absolute errors",
          "Large errors",
          "Penalized more strongly",
          "Penalized proportionally",
          "Differentiability",
          "Differentiable",
          "Not differentiable at zero error",
          "Common use",
          "Regression",
          "Regression"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.5 Binary cross-entropy",
        "paragraphs": [
          "Binary cross-entropy is used for probabilistic binary classification.",
          "Where:",
          "\\(y_i\\) is the true binary label.",
          "\\(p_i\\) is the predicted probability of the positive class.",
          "Python:"
        ],
        "codeBlocks": [
          "\\[ L= -\\frac1n \\sum_{i=1}^{n} \\left[ y_i\\log(p_i) +(1-y_i)\\log(1-p_i) \\right] \\]",
          "import numpy as npactual = np.array([1, 0, 1, 1])predicted_probability = np.array([ 0.9, 0.2, 0.8, 0.7])epsilon = 1e-12p = np.clip( predicted_probability, epsilon, 1 - epsilon)loss = -np.mean( actual * np.log(p) + (1 - actual) * np.log(1 - p))print(loss)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.6 Multiclass cross-entropy",
        "paragraphs": [
          "For multiclass classification:",
          "Here:",
          "\\(K\\) represents the number of classes.",
          "\\(y_k\\) is the target indicator for class \\(k\\).",
          "\\(p_k\\) is the predicted probability for class \\(k\\).",
          "For one-hot encoded targets, only the probability assigned to the correct class contributes to the loss.",
          "This loss is fundamental to training many classification systems and language models."
        ],
        "codeBlocks": [
          "\\[ L=-\\sum_{k=1}^{K}y_k\\log(p_k) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.7 Hinge loss",
        "paragraphs": [
          "Hinge loss is associated with margin-based classifiers such as Support Vector Machines.",
          "For a binary label \\(y\\in\\{-1,+1\\}\\) and decision score \\(f(x)\\):",
          "It penalizes incorrect predictions and predictions that fail to achieve the desired margin."
        ],
        "codeBlocks": [
          "\\[ L=\\max(0,1-yf(x)) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "31.8 Comparing the losses",
        "paragraphs": [
          "Students should understand:",
          "MSE is commonly used for regression.",
          "MAE is another regression objective.",
          "Binary cross-entropy is commonly used for binary classification.",
          "Categorical cross-entropy is commonly used for multiclass classification.",
          "Hinge loss is used in margin-based classification.",
          "Practical assignment: Implement all five loss functions from scratch using NumPy and test them on sample predictions."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3539
  },
  {
    "id": "sec-32",
    "sectionNum": 32,
    "title": "Regularization and Model Optimization",
    "duration": "1.5 hours",
    "partNum": 6,
    "partName": "Part VI — Optimization for Machine Learning",
    "tag": "Losses & Gradient Descent",
    "subsections": [
      {
        "title": "32.1 What is overfitting?",
        "paragraphs": [
          "Overfitting occurs when a model learns patterns specific to its training dataset that do not generalize well to new observations.",
          "For example:",
          "A model may achieve 99% training accuracy but only 65% test accuracy.",
          "This indicates a potential generalization problem."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.2 What is underfitting?",
        "paragraphs": [
          "Underfitting occurs when a model is too simple or insufficiently trained to capture important patterns.",
          "Example:",
          "Training accuracy: 60%.",
          "Testing accuracy: 58%.",
          "Both may be poor because the model has not captured the underlying relationship adequately."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.3 Regularization",
        "paragraphs": [
          "Regularization adds a penalty to the original optimization objective to discourage undesirable model complexity."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.4 L1 regularization",
        "paragraphs": [
          "L1 regularization encourages sparsity and may drive some weights to zero."
        ],
        "codeBlocks": [
          "\\[ J_{\\text{L1}}= J(\\theta)+\\lambda\\sum_i|\\theta_i| \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.5 L2 regularization",
        "paragraphs": [
          "L2 regularization penalizes large weights."
        ],
        "codeBlocks": [
          "\\[ J_{\\text{L2}}= J(\\theta)+\\lambda\\sum_i\\theta_i^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.6 Understanding the regularization parameter",
        "paragraphs": [
          "\\(\\lambda\\) controls the strength of the penalty.",
          "Too little regularization may not control complexity sufficiently.",
          "Too much can prevent the model from learning important patterns."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.7 Python implementation",
        "paragraphs": [],
        "codeBlocks": [
          "import numpy as npweights = np.array([2.0, -3.0, 4.0])lambda_value = 0.1l1_penalty = ( lambda_value * np.sum(np.abs(weights)))l2_penalty = ( lambda_value * np.sum(weights ** 2))print(\"L1:\", l1_penalty)print(\"L2:\", l2_penalty)"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "32.8 Bias-variance tradeoff",
        "paragraphs": [
          "Model generalization involves balancing two sources of error:",
          "Bias: Error associated with restrictive model assumptions.",
          "Variance: Sensitivity to the particular training data.",
          "A model with excessive bias may underfit, whereas a model with excessive variance may overfit.",
          "Students should understand that regularization, model complexity, training data quality and validation all influence generalization."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "Assignment: Compare model behaviour with different regularization strengths using a simple synthetic regression dataset.",
        "paragraphs": [
          "PART VII — CONNECTING MATHEMATICS TO MACHINE LEARNING"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": true
      }
    ],
    "rawTextLength": 2115
  },
  {
    "id": "sec-33",
    "sectionNum": 33,
    "title": "Mathematical Foundations of Machine Learning",
    "duration": "2 hours",
    "partNum": 7,
    "partName": "Part VII — Connecting Math to Machine Learning",
    "tag": "From Math to Model",
    "subsections": [
      {
        "title": "Overview & Principles",
        "paragraphs": [
          "This section brings together the mathematics learned so far."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.1 Understanding a linear regression model",
        "paragraphs": [
          "Linear regression models a relationship between input variables and a continuous target.",
          "For one input variable:",
          "Where:",
          "\\(x\\): Input.",
          "\\(w\\): Model weight.",
          "\\(b\\): Bias.",
          "\\(\\hat{y}\\): Predicted output."
        ],
        "codeBlocks": [
          "\\[ \\hat{y}=wx+b \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.2 Multiple linear regression",
        "paragraphs": [
          "For multiple input features:",
          "Matrix representation:",
          "This connects vectors and matrices to an actual ML model."
        ],
        "codeBlocks": [
          "\\[ \\hat{y}=w_1x_1+w_2x_2+\\cdots+w_nx_n+b \\]",
          "\\[ \\hat{y}=Xw+b \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.3 Constructing a dataset",
        "paragraphs": [
          "Suppose we have study hours and corresponding student scores.",
          "Study hours",
          "Student score",
          "1",
          "35",
          "2",
          "42",
          "3",
          "48",
          "4",
          "55",
          "5",
          "62",
          "6",
          "69",
          "We would like to estimate a relationship between study hours and scores."
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.4 Model prediction",
        "paragraphs": [
          "Assume:",
          "For a student who studies 4 hours:"
        ],
        "codeBlocks": [
          "\\[ w=7,\\quad b=28 \\]",
          "\\[ \\hat{y}=7(4)+28 \\]",
          "\\[ \\hat{y}=56 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.5 Calculate prediction error",
        "paragraphs": [
          "Suppose the actual score is 55."
        ],
        "codeBlocks": [
          "\\[ Error=y-\\hat{y} \\]",
          "\\[ Error=55-56=-1 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.6 Calculate loss",
        "paragraphs": [
          "Loss quantifies prediction error across the dataset."
        ],
        "codeBlocks": [
          "\\[ MSE=\\frac1n\\sum_i(y_i-\\hat{y}_i)^2 \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.7 Calculate gradients",
        "paragraphs": [
          "For a simple model:",
          "The MSE objective is:",
          "Differentiate with respect to the weight:",
          "Differentiate with respect to the bias:",
          "These are the gradients used to update the parameters."
        ],
        "codeBlocks": [
          "\\[ \\hat{y}_i=wx_i+b \\]",
          "\\[ J(w,b)= \\frac1n \\sum_{i=1}^{n} (wx_i+b-y_i)^2 \\]",
          "\\[ \\frac{\\partial J}{\\partial w} = \\frac2n \\sum_i x_i(wx_i+b-y_i) \\]",
          "\\[ \\frac{\\partial J}{\\partial b} = \\frac2n \\sum_i (wx_i+b-y_i) \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.8 Update model parameters",
        "paragraphs": [
          "Repeat the process until a suitable stopping condition is reached."
        ],
        "codeBlocks": [
          "\\[ w_{\\text{new}} = w-\\eta\\frac{\\partial J}{\\partial w} \\]",
          "\\[ b_{\\text{new}} = b-\\eta\\frac{\\partial J}{\\partial b} \\]"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.9 Complete linear regression implementation",
        "paragraphs": [
          "Students should explain each part:",
          "What are the model parameters?",
          "Why are the weights initialized?",
          "What does the loss represent?",
          "How is the derivative calculated?",
          "Why is the learning rate necessary?",
          "How do the model parameters change during training?"
        ],
        "codeBlocks": [
          "import numpy as npimport matplotlib.pyplot as plt# Training datax = np.array([1, 2, 3, 4, 5, 6], dtype=float)y = np.array([35, 42, 48, 55, 62, 69], dtype=float)# Initialize parametersw = 0.0b = 0.0learning_rate = 0.01epochs = 3000n = len(x)loss_history = []# Gradient descentfor epoch in range(epochs): predictions = w * x + b errors = predictions - y loss = np.mean(errors ** 2) dw = (2 / n) * np.sum(errors * x) db = (2 / n) * np.sum(errors) w -= learning_rate * dw b -= learning_rate * db"
        ],
        "bullets": [],
        "isExercise": false
      },
      {
        "title": "33.10 Understand the complete mathematical chain",
        "paragraphs": [
          "Input data",
          "Vectors and numerical features",
          "Linear algebra",
          "Matrix multiplication and weighted combinations",
          "Model predictions",
          "Predicted outputs",
          "Loss functions",
          "Measure prediction errors",
          "Calculus",
          "Calculate gradients",
          "Optimization",
          "Update model parameters",
          "Repeat until the optimization objective is sufficiently minimized.",
          "This is the mathematical foundation behind many learning algorithms.",
          "PART VIII — PRACTICAL LABORATORIES"
        ],
        "codeBlocks": [],
        "bullets": [],
        "isExercise": false
      }
    ],
    "rawTextLength": 3065
  }
];

export default AI_MATH_CURRICULUM_SECTIONS;
