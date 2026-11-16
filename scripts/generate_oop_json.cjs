const fs = require('fs');
const path = require('path');

const outPath = path.resolve(__dirname, '../backend/content/java-programming/modules/oop.json');

const oopModule = {
  id: "oop",
  courseId: "java-programming",
  index: 4,
  name: "4. Object-Oriented Programming (OOP) with Java",
  title: "Object-Oriented Programming with Java",
  description: "Master classes, runtime objects, encapsulation, constructor chaining, inheritance hierarchies, runtime polymorphism, dynamic method dispatch, abstract classes, interfaces, static members, UML diagrams, SOLID principles, and modular system architecture.",
  duration: "12-14 hours",
  level: "Intermediate",
  route: "/learning/java/oop",
  componentName: "JavaOOP",
  topics: [
    "Procedural Programming vs Object-Oriented Programming Paradigms",
    "The 4 Core OOP Pillars: Encapsulation, Inheritance, Polymorphism, Abstraction",
    "Classes vs Objects: Blueprint Declaration & Heap Memory Allocations",
    "Constructors: Implicit Default, Parameterized, Overloading & Constructor Chaining",
    "The 'this' Keyword: Disambiguation, Chaining, Self-Invocation & Fluent APIs",
    "The 'super' Keyword: Superclass Constructors, Execution Order & Field Shadowing",
    "Encapsulation: Private Invariants, Getters/Setters & Immutability Patterns",
    "Inheritance: IS-A Relationships, Single, Multilevel & Hierarchical Topologies",
    "Method Overriding: Rules, Signatures, Covariant Returns & the @Override Guard",
    "Polymorphism: Compile-Time Overloading vs Runtime Dynamic Method Dispatch",
    "Type Casting: Upcasting, Downcasting & Pattern Matching for instanceof",
    "Abstraction & Abstract Classes: Partial Implementations & Abstract Contracts",
    "Interfaces: Contracts, Multiple Realization, Default, Static & Private Methods",
    "Static Members: Class-Level Variables, Metaspace Allocation & Static Init Blocks",
    "The 'final' Keyword: Constants, Immutability, Blank Finals & Sealed Hierarchies",
    "Access Modifiers: Public, Protected, Package-Private & Private Scoping Rules",
    "Java Packages: Namespace Organization, Directory Mappings & Compiling with -cp",
    "Composition vs Inheritance: HAS-A Decoupling & Constructor Dependency Injection",
    "Object Relationships: Association, Aggregation, Strong Composition & Dependencies",
    "UML Class Diagrams: Class Compartments, Visibility Notation & Multiplicities",
    "SOLID Software Principles: SRP, OCP, LSP, ISP & DIP Architectural Guidelines",
    "Complete Capstone: University Course Registration & Banking Systems"
  ],
  quiz: [
    {
      id: "m4-q1",
      question: "What is the primary purpose of a class in Java?",
      options: [
        "Store only numbers and primitive data",
        "Serve as a blueprint or reference type for creating objects",
        "Replace all procedural methods in a JVM process",
        "Execute operating-system native instructions"
      ],
      correctIndex: 1,
      explanation: "A class is a user-defined reference type that defines the common attributes (fields) and behaviors (methods) of its runtime instances (objects)."
    },
    {
      id: "m4-q2",
      question: "What is an object in Java?",
      options: [
        "A runtime instance of a class occupying heap memory with state and identity",
        "A Java reserved keyword used to define procedures",
        "A javac compiler flag used to optimize bytecode",
        "A package declaration used to group related classes"
      ],
      correctIndex: 0,
      explanation: "An object is a concrete runtime instance created using the 'new' operator. It possesses identity, internal state (fields), and behavior (methods)."
    },
    {
      id: "m4-q3",
      question: "Which OOP principle focuses on protecting and restricting direct access to internal object state?",
      options: [
        "Inheritance",
        "Encapsulation",
        "Polymorphism",
        "Recursion"
      ],
      correctIndex: 1,
      explanation: "Encapsulation bundles data and methods that operate on that data while restricting direct field access via private modifiers and public validation methods."
    },
    {
      id: "m4-q4",
      question: "Which keyword is used in Java to establish class inheritance?",
      options: [
        "implements",
        "extends",
        "inherits",
        "super"
      ],
      correctIndex: 1,
      explanation: "In Java, the 'extends' keyword is used to derive a subclass from a single superclass (e.g. 'class Dog extends Animal')."
    },
    {
      id: "m4-q5",
      question: "Which keyword provides an explicit reference to the current object instance?",
      options: [
        "super",
        "this",
        "static",
        "final"
      ],
      correctIndex: 1,
      explanation: "The 'this' keyword represents the current object instance and is used to resolve shadowing, invoke sibling constructors, or pass the instance to other methods."
    },
    {
      id: "m4-q6",
      question: "Which keyword is used to invoke a superclass constructor from a subclass constructor?",
      options: [
        "this()",
        "super()",
        "parent()",
        "base()"
      ],
      correctIndex: 1,
      explanation: "'super()' invokes an accessible constructor in the immediate superclass, initializing inherited fields before child constructor statements run."
    },
    {
      id: "m4-q7",
      question: "Which statement about Java constructors is true?",
      options: [
        "Constructors must declare an explicit return type such as void or int",
        "Constructors have the exact same name as their declaring class",
        "Constructors are inherited by subclasses like normal instance methods",
        "Constructors can be declared abstract or final"
      ],
      correctIndex: 1,
      explanation: "Constructors must match the class name exactly, declare no return type, and are invoked only during object instantiation (they are never inherited)."
    },
    {
      id: "m4-q8",
      question: "What language capability allows a class to declare multiple constructors with different parameter lists?",
      options: [
        "Method overriding",
        "Constructor overloading",
        "Encapsulation",
        "Dynamic method dispatch"
      ],
      correctIndex: 1,
      explanation: "Constructor overloading allows multiple constructors within the same class as long as their parameter lists differ in type, count, or order."
    },
    {
      id: "m4-q9",
      question: "Which compiler annotation verifies that a method properly overrides an inherited method?",
      options: [
        "@Static",
        "@Final",
        "@Override",
        "@Method"
      ],
      correctIndex: 2,
      explanation: "The @Override annotation asks the compiler to verify that the annotated method satisfies all overriding rules against an inherited method."
    },
    {
      id: "m4-q10",
      question: "How is runtime polymorphism achieved in Java?",
      options: [
        "Overridden instance methods resolved via dynamic method dispatch",
        "Variable declarations and static type shadowing",
        "Constructor overloading resolved at compile time",
        "Package import statements and classpaths"
      ],
      correctIndex: 0,
      explanation: "Runtime polymorphism occurs when an instance method call on a superclass/interface reference executes the actual subclass implementation determined at runtime."
    },
    {
      id: "m4-q11",
      question: "Which type of class cannot be directly instantiated using the 'new' operator?",
      options: [
        "Public class",
        "Abstract class",
        "Final class",
        "Generic class"
      ],
      correctIndex: 1,
      explanation: "Abstract classes cannot be instantiated directly; they are intended to serve as incomplete base blueprints for concrete subclasses to extend."
    },
    {
      id: "m4-q12",
      question: "Which keyword is used by a Java class to implement an interface?",
      options: [
        "extends",
        "implements",
        "interface",
        "realizes"
      ],
      correctIndex: 1,
      explanation: "A class declares that it implements one or more interfaces using the 'implements' keyword (e.g. 'class Machine implements Printable, Scannable')."
    },
    {
      id: "m4-q13",
      question: "Can a single Java class extend more than one parent class directly?",
      options: [
        "Yes, by separating parent classes with commas",
        "No, Java does not support multiple class inheritance",
        "Only if the classes are declared final",
        "Only if both classes reside in the same package"
      ],
      correctIndex: 1,
      explanation: "Java prohibits multiple class inheritance to avoid the diamond problem of state and implementation ambiguity; however, multiple interfaces can be implemented."
    },
    {
      id: "m4-q14",
      question: "Can a Java class implement multiple interfaces?",
      options: [
        "Yes, a class can implement any number of interfaces",
        "No, a class may implement at most one interface",
        "Only if the class is abstract",
        "Only if all interfaces have empty method bodies"
      ],
      correctIndex: 0,
      explanation: "Java fully supports multiple interface implementation, allowing a class to satisfy multiple behavioural contracts."
    },
    {
      id: "m4-q15",
      question: "What is a static variable in Java?",
      options: [
        "A class-level variable shared by all instances of the class",
        "An immutable constant that can never be modified",
        "A variable stored separately in each individual object",
        "A local variable declared inside a method"
      ],
      correctIndex: 0,
      explanation: "Static variables belong to the class itself rather than individual instances. There is exactly one copy shared across all instances of that class."
    },
    {
      id: "m4-q16",
      question: "Which keyword prevents a class from being subclassed / extended?",
      options: [
        "static",
        "protected",
        "final",
        "abstract"
      ],
      correctIndex: 2,
      explanation: "Marking a class as 'final' prevents other classes from extending it (e.g. 'java.lang.String' is a final class)."
    },
    {
      id: "m4-q17",
      question: "Which access modifier provides the most restrictive visibility in Java?",
      options: [
        "public",
        "protected",
        "package-private (default)",
        "private"
      ],
      correctIndex: 3,
      explanation: "'private' is the most restrictive access modifier; private members can only be accessed within their declaring top-level class body."
    },
    {
      id: "m4-q18",
      question: "What fundamental relationship does composition represent?",
      options: [
        "IS-A relationship",
        "HAS-A relationship",
        "OVERRIDES relationship",
        "EXTENDS relationship"
      ],
      correctIndex: 1,
      explanation: "Composition represents a HAS-A relationship where an object contains or uses other objects to accomplish its responsibilities."
    },
    {
      id: "m4-q19",
      question: "In UML class diagrams, which symbol depicts strong composition ownership?",
      options: [
        "A hollow diamond",
        "A filled (solid black) diamond",
        "A hollow triangular arrowhead",
        "A dashed open arrow"
      ],
      correctIndex: 1,
      explanation: "A filled diamond on the container's side represents strong composition (lifecycle ownership), whereas a hollow diamond represents aggregation."
    },
    {
      id: "m4-q20",
      question: "What is the core recommendation of the Open/Closed Principle (OCP)?",
      options: [
        "Every class must be declared final to prevent bugs",
        "Software entities should be open for extension, but closed for modification",
        "Classes must never depend on interfaces or abstract types",
        "All methods must be public to allow external access"
      ],
      correctIndex: 1,
      explanation: "The Open/Closed Principle states that software components should be designed to allow new behavior to be added via extension (polymorphism, new implementations) without altering tested, existing source code."
    }
  ]
};

fs.writeFileSync(outPath, JSON.stringify(oopModule, null, 2), 'utf8');
console.log(`Successfully generated ${outPath}`);
