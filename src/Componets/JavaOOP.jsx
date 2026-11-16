import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Coffee,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  FileCode,
  BookOpen,
  Sparkles,
  ExternalLink,
  Lock,
  Unlock,
  CheckSquare,
  Square,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Layers,
  Cpu,
  Server,
  Activity,
  Workflow,
  BarChart3,
  HardDrive,
  GitBranch,
  Filter,
  CheckCircle,
  Play,
  Binary,
  Code2,
  ListOrdered,
  Bug,
  Award,
  Repeat,
  Split,
  Calculator,
  Compass,
  Zap,
  Grid,
  Search,
  Type,
  Maximize2,
  ShieldCheck,
  Box,
  Share2,
  Sliders,
  Target,
  FileText,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import JavaOOPSections from "./JavaOOPSections";

export default function JavaOOP() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/java/arrays-strings");

  // Mode tab state: 'curriculum' | 'workbench'
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("instance-studio");
  const [copiedCode, setCopiedCode] = useState(false);

  // ---------------------------------------------------------------------------
  // WORKBENCH 1: BLUEPRINT VS RUNTIME INSTANCE MEMORY STUDIO
  // ---------------------------------------------------------------------------
  const [accounts, setAccounts] = useState([
    { id: "acc-101", holder: "Alex Chen", balance: 5000, type: "Savings", heapAddr: "0x7F9B12" },
    { id: "acc-102", holder: "Sam Rivera", balance: 12000, type: "Current", heapAddr: "0x8A4C33" },
  ]);
  const [selectedAccId, setSelectedAccId] = useState("acc-101");
  const [opAmount, setOpAmount] = useState(1500);
  const [accActionLog, setAccActionLog] = useState([
    "Initialized BankAccount blueprint in Metaspace.",
    "new BankAccount('Alex Chen', 5000) allocated on Heap at 0x7F9B12.",
    "new BankAccount('Sam Rivera', 12000) allocated on Heap at 0x8A4C33.",
  ]);

  const activeAccount = useMemo(() => {
    return accounts.find((a) => a.id === selectedAccId) || accounts[0];
  }, [accounts, selectedAccId]);

  const handleDeposit = () => {
    const amt = Math.max(1, Number(opAmount) || 0);
    setAccounts((prev) =>
      prev.map((acc) => (acc.id === selectedAccId ? { ...acc, balance: acc.balance + amt } : acc))
    );
    setAccActionLog((prev) => [
      `[${activeAccount.holder}] deposit($${amt}) executed. New balance: $${activeAccount.balance + amt}`,
      ...prev.slice(0, 9),
    ]);
  };

  const handleWithdraw = () => {
    const amt = Math.max(1, Number(opAmount) || 0);
    if (activeAccount.balance < amt && activeAccount.type === "Savings") {
      setAccActionLog((prev) => [
        `[BLOCKED] Insufficient funds for ${activeAccount.holder}! Balance ($${activeAccount.balance}) < withdrawal ($${amt}).`,
        ...prev.slice(0, 9),
      ]);
      return;
    }
    setAccounts((prev) =>
      prev.map((acc) => (acc.id === selectedAccId ? { ...acc, balance: acc.balance - amt } : acc))
    );
    setAccActionLog((prev) => [
      `[${activeAccount.holder}] withdraw($${amt}) executed. New balance: $${activeAccount.balance - amt}`,
      ...prev.slice(0, 9),
    ]);
  };

  const handleCreateNewAccount = () => {
    const newId = `acc-${100 + accounts.length + 1}`;
    const names = ["Jordan Lee", "Taylor Swift", "Chris Paul", "Morgan Freeman"];
    const name = names[accounts.length % names.length];
    const hex = "0x" + Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase();
    const newAcc = { id: newId, holder: name, balance: 3500, type: "Savings", heapAddr: hex };
    setAccounts((prev) => [...prev, newAcc]);
    setSelectedAccId(newId);
    setAccActionLog((prev) => [
      `new BankAccount('${name}', 3500) created. Assigned reference '${newId}' -> Heap [${hex}]`,
      ...prev.slice(0, 9),
    ]);
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 2: ENCAPSULATION & DATA INVARIANT SHIELD
  // ---------------------------------------------------------------------------
  const [encapBalance, setEncapBalance] = useState(5000);
  const [encapHolder, setEncapHolder] = useState("Alex Chen");
  const [testDepositAmt, setTestDepositAmt] = useState(-500);
  const [testHolderInput, setTestHolderInput] = useState("");
  const [shieldLog, setShieldLog] = useState([]);
  const [isEncapsulatedMode, setIsEncapsulatedMode] = useState(true);

  const handleTestFieldAccess = () => {
    if (isEncapsulatedMode) {
      // Validate deposit
      if (testDepositAmt <= 0) {
        setShieldLog((prev) => [
          `🛡️ [GUARD REJECTED] deposit(${testDepositAmt}): amount must be positive! Invariant preserved.`,
          ...prev,
        ]);
        return;
      }
      setEncapBalance((b) => b + testDepositAmt);
      setShieldLog((prev) => [
        `✅ [VALIDATED] deposit(${testDepositAmt}) accepted. New balance: $${encapBalance + testDepositAmt}`,
        ...prev,
      ]);
    } else {
      // Direct raw public field mutation: corrupts invariant
      setEncapBalance((b) => b + testDepositAmt);
      setShieldLog((prev) => [
        `⚠️ [CORRUPTED] Public direct field assignment: balance is now $${encapBalance + testDepositAmt}! Negative funds allowed!`,
        ...prev,
      ]);
    }
  };

  const handleTestNameSetter = () => {
    if (isEncapsulatedMode) {
      if (!testHolderInput || testHolderInput.trim() === "") {
        setShieldLog((prev) => [
          `🛡️ [GUARD REJECTED] setName("${testHolderInput}"): IllegalArgumentException("Name cannot be blank!")`,
          ...prev,
        ]);
        return;
      }
      setEncapHolder(testHolderInput);
      setShieldLog((prev) => [
        `✅ [VALIDATED] setName("${testHolderInput}") accepted.`,
        ...prev,
      ]);
    } else {
      setEncapHolder(testHolderInput);
      setShieldLog((prev) => [
        `⚠️ [CORRUPTED] Direct public assignment: accountHolder = "${testHolderInput}" (Null/Empty String allowed!)`,
        ...prev,
      ]);
    }
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 3: INHERITANCE & DYNAMIC METHOD DISPATCH (POLYMORPHISM)
  // ---------------------------------------------------------------------------
  const [polymorphicType, setPolymorphicType] = useState("SavingsAccount"); // 'SavingsAccount' | 'CurrentAccount'
  const [dispatchBalance, setDispatchBalance] = useState(20000);
  const [withdrawRequest, setWithdrawRequest] = useState(25000);
  const [dispatchLog, setDispatchLog] = useState([
    "Upcasted reference: BankAccount account = new SavingsAccount('S101', 'Alex', 20000);",
  ]);

  const handleDynamicDispatch = () => {
    const amt = Number(withdrawRequest) || 0;
    if (polymorphicType === "SavingsAccount") {
      if (amt <= dispatchBalance) {
        setDispatchBalance((b) => b - amt);
        setDispatchLog((prev) => [
          `⚡ Dynamic Dispatch -> SavingsAccount.withdraw(${amt}): Success. Remaining balance: $${dispatchBalance - amt}`,
          `JVM lookup: invoked virtual method on concrete instance 'SavingsAccount'`,
          ...prev.slice(0, 8),
        ]);
      } else {
        setDispatchLog((prev) => [
          `❌ SavingsAccount.withdraw(${amt}): FAILED. Savings does not permit overdraft! (balance: $${dispatchBalance})`,
          ...prev.slice(0, 8),
        ]);
      }
    } else {
      // CurrentAccount has $10,000 overdraft limit
      const overdraftLimit = 10000;
      if (amt <= dispatchBalance + overdraftLimit) {
        const nextBal = dispatchBalance - amt;
        setDispatchBalance(nextBal);
        setDispatchLog((prev) => [
          `⚡ Dynamic Dispatch -> CurrentAccount.withdraw(${amt}): Overdraft approved! New balance: $${nextBal} (Overdraft used: $${Math.max(0, -nextBal)})`,
          `JVM lookup: resolved CurrentAccount.withdraw() via polymorphic vtable`,
          ...prev.slice(0, 8),
        ]);
      } else {
        setDispatchLog((prev) => [
          `❌ CurrentAccount.withdraw(${amt}): Overdraft limit exceeded! Max allowed is $${dispatchBalance + overdraftLimit}`,
          ...prev.slice(0, 8),
        ]);
      }
    }
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 4: INTERFACE REALIZATION & LOOSE COUPLING (OCP/DIP)
  // ---------------------------------------------------------------------------
  const [paymentStrategy, setPaymentStrategy] = useState("UPIPayment");
  const [payAmount, setPayAmount] = useState(250);
  const [paymentLogs, setPaymentLogs] = useState([]);

  const handleProcessPayment = () => {
    const amt = Number(payAmount) || 0;
    let strategyResult = "";
    if (paymentStrategy === "UPIPayment") {
      strategyResult = `UPI Gateway: Verified VPA @prepspaces. Paid $${amt} with 0% interchange fee.`;
    } else if (paymentStrategy === "CardPayment") {
      strategyResult = `Credit Gateway: 3D-Secure verified. Charged $${amt} (Auth Code: AUTH_9942).`;
    } else {
      strategyResult = `NEFT/RTGS Gateway: Generated UTR ref. $${amt} scheduled for settlement.`;
    }

    setPaymentLogs((prev) => [
      `PaymentProcessor.process(PaymentMethod method, $${amt}) called.`,
      `-> Concrete implementation: ${paymentStrategy}.pay(${amt})`,
      `-> Result: ${strategyResult}`,
      "Notice: PaymentProcessor was NEVER modified! (Open/Closed Principle satisfied)",
      ...prev.slice(0, 8),
    ]);
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 5: STATIC (METASPACE) VS INSTANCE (HEAP) MEMORY MODEL
  // ---------------------------------------------------------------------------
  const [staticUniName, setStaticUniName] = useState("Global University");
  const [studentInstances, setStudentInstances] = useState([
    { id: 101, name: "Alex" },
    { id: 102, name: "Sam" },
    { id: 103, name: "Maria" },
  ]);

  // ---------------------------------------------------------------------------
  // WORKBENCH 6: UML CLASS DIAGRAM EXPLORER
  // ---------------------------------------------------------------------------
  const [selectedUmlNode, setSelectedUmlNode] = useState("Person");

  const umlDetails = {
    Person: {
      name: "Person (abstract)",
      stereotype: "<<abstract>>",
      members: ["- personId: String (final)", "- name: String", "- email: String"],
      methods: ["+ getPersonId(): String", "+ getName(): String", "+ setName(String): void", "+ getRole(): String (abstract)"],
      role: "Root entity encapsulating identity and email invariants.",
      relationship: "Inherited by Student and Instructor via hollow triangular arrow (extends).",
    },
    Student: {
      name: "Student",
      stereotype: "class (concrete)",
      members: ["- courseOfStudy: String"],
      methods: ["+ getCourseOfStudy(): String", "+ getRole(): String [overridden]", "+ display(): void"],
      role: "Concrete subclass representing registered university students.",
      relationship: "Specializes Person (IS-A); participates in Enrollment association.",
    },
    Instructor: {
      name: "Instructor",
      stereotype: "class (concrete)",
      members: ["- specialization: String"],
      methods: ["+ getSpecialization(): String", "+ getRole(): String [overridden]"],
      role: "Specialized educator assigned to lead academic courses.",
      relationship: "Specializes Person (IS-A); aggregated by Course (hollow diamond).",
    },
    Course: {
      name: "Course",
      stereotype: "class (concrete)",
      members: ["- courseId: String (final)", "- courseName: String", "- instructor: Instructor"],
      methods: ["+ getCourseId(): String", "+ getCourseName(): String", "+ assignInstructor(Instructor): void"],
      role: "Represents an academic unit of study.",
      relationship: "Aggregates Instructor; forms association with Student through Enrollment.",
    },
    Enrollment: {
      name: "Enrollment",
      stereotype: "class (association entity)",
      members: ["- student: Student (final)", "- course: Course (final)"],
      methods: ["+ getStudent(): Student", "+ getCourse(): Course", "+ display(): void"],
      role: "Association junction modeling N-to-N enrollment bindings.",
      relationship: "Maintains final references to both Student and Course instances.",
    },
    NotificationService: {
      name: "NotificationService",
      stereotype: "<<interface>>",
      members: ["(Contracts only)"],
      methods: ["+ sendNotification(String, String): void"],
      role: "Contract abstraction for sending communications (DIP compliance).",
      relationship: "Realized by ConsoleNotification via dashed arrow with hollow triangle (implements).",
    },
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 7: SOLID PRINCIPLES INTERACTIVE CLINIC
  // ---------------------------------------------------------------------------
  const [selectedSolid, setSelectedSolid] = useState("SRP");

  const solidData = {
    SRP: {
      title: "Single Responsibility Principle (SRP)",
      description: "A class should have one, and only one, reason to change.",
      antiPattern: `// ❌ Violates SRP: god-class handling registration, fees, emails, and reporting
class StudentManager {
    void registerStudent() { /*...*/ }
    void calculateFees() { /*...*/ }
    void sendEmail() { /*...*/ }
    void generateReport() { /*...*/ }
}`,
      cleanCode: `// ✅ SRP: 4 cohesive classes each with a single distinct responsibility
class StudentRegistration { void register() {} }
class FeeCalculator { void calculate() {} }
class EmailService { void sendEmail() {} }
class StudentReport { void generate() {} }`,
      benefit: "Changes in tax regulations only modify FeeCalculator, leaving StudentRegistration unaffected.",
    },
    OCP: {
      title: "Open/Closed Principle (OCP)",
      description: "Software entities should be open for extension, but closed for modification.",
      antiPattern: `// ❌ Violates OCP: adding CryptoPayment requires editing this existing method
class PaymentProcessor {
    void process(String type, double amt) {
        if (type.equals("UPI")) { ... }
        else if (type.equals("CARD")) { ... }
    }
}`,
      cleanCode: `// ✅ OCP: depends on PaymentMethod interface; new providers added via new classes
interface PaymentMethod { void pay(double amt); }
class UPIPayment implements PaymentMethod { public void pay(double amt) { ... } }
class CryptoPayment implements PaymentMethod { public void pay(double amt) { ... } }

class PaymentProcessor {
    void process(PaymentMethod method, double amt) { method.pay(amt); }
}`,
      benefit: "New payment methods can be added at any time without touching tested production classes.",
    },
    LSP: {
      title: "Liskov Substitution Principle (LSP)",
      description: "Subtypes must be substitutable for their base types without altering system correctness.",
      antiPattern: `// ❌ Violates LSP: Penguin cannot fly, breaks expectations of Bird callers
class Bird { void fly() { ... } }
class Penguin extends Bird {
    @Override
    void fly() { throw new UnsupportedOperationException(); }
}`,
      cleanCode: `// ✅ LSP: segregation of flight capability via interface
abstract class Bird { abstract void eat(); }
interface Flyable { void fly(); }

class Eagle extends Bird implements Flyable {
    public void eat() {}
    public void fly() {}
}
class Penguin extends Bird {
    public void eat() {} // No fly method forced!
}`,
      benefit: "Callers iterating over Bird[] never face runtime UnsupportedOperationException.",
    },
    ISP: {
      title: "Interface Segregation Principle (ISP)",
      description: "Clients should not be forced to depend on methods they do not use.",
      antiPattern: `// ❌ Violates ISP: simple printer forced to implement scan() and fax()
interface Machine {
    void print();
    void scan();
    void fax();
}`,
      cleanCode: `// ✅ ISP: fine-grained, decoupled capability interfaces
interface Printable { void print(); }
interface Scannable { void scan(); }
interface Faxable { void fax(); }

class SimplePrinter implements Printable {
    public void print() { ... }
}`,
      benefit: "Classes only implement the specific contracts relevant to their hardware or business logic.",
    },
    DIP: {
      title: "Dependency Inversion Principle (DIP)",
      description: "High-level modules should depend on abstractions, not on concrete details.",
      antiPattern: `// ❌ Violates DIP: tightly coupled to concrete EmailSender
class Notification {
    private EmailSender sender = new EmailSender();
    void notifyUser(String msg) { sender.sendEmail(msg); }
}`,
      cleanCode: `// ✅ DIP: Notification depends on MessageSender abstraction
interface MessageSender { void send(String msg); }

class Notification {
    private final MessageSender sender;
    Notification(MessageSender sender) { this.sender = sender; } // Dependency Injection
    void notifyUser(String msg) { sender.send(msg); }
}`,
      benefit: "Swap email for SMS or WhatsApp simply by injecting a different implementation into the constructor.",
    },
  };

  // ---------------------------------------------------------------------------
  // WORKBENCH 8: 20-QUESTION MCQ QUIZ
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. What is the primary purpose of a class in Java?",
      options: [
        "Store only numbers",
        "Serve as a blueprint for objects",
        "Replace all methods",
        "Execute operating-system instructions",
      ],
      correct: 1,
      explanation: "A class is a user-defined reference type that defines fields and methods to act as a blueprint for instances.",
    },
    {
      id: "q2",
      question: "2. What is an object?",
      options: [
        "A runtime instance of a class",
        "A Java keyword",
        "A compiler flag",
        "A package",
      ],
      correct: 0,
      explanation: "An object is a concrete runtime instance created using 'new', possessing state, behavior, and identity.",
    },
    {
      id: "q3",
      question: "3. Which OOP principle protects internal object state?",
      options: ["Inheritance", "Encapsulation", "Polymorphism", "Recursion"],
      correct: 1,
      explanation: "Encapsulation hides data via private fields and restricts access through controlled validation methods.",
    },
    {
      id: "q4",
      question: "4. Which keyword is used for class inheritance?",
      options: ["implements", "extends", "inherits", "super"],
      correct: 1,
      explanation: "'extends' establishes inheritance from a superclass (e.g. class Student extends Person).",
    },
    {
      id: "q5",
      question: "5. Which keyword refers to the current object?",
      options: ["super", "this", "static", "final"],
      correct: 1,
      explanation: "'this' refers to the current invoking instance within constructors and instance methods.",
    },
    {
      id: "q6",
      question: "6. Which keyword is used to invoke a superclass constructor?",
      options: ["this", "super", "parent", "base"],
      correct: 1,
      explanation: "'super()' invokes an accessible constructor in the immediate superclass.",
    },
    {
      id: "q7",
      question: "7. Which statement about constructors is correct?",
      options: [
        "Constructors must return int",
        "Constructors have the same name as their class",
        "Constructors can be overridden",
        "Constructors are inherited by subclasses",
      ],
      correct: 1,
      explanation: "Constructors must match the class name exactly, declare no return type, and cannot be inherited or overridden.",
    },
    {
      id: "q8",
      question: "8. Which feature allows multiple constructors with different parameter lists?",
      options: ["Method overriding", "Constructor overloading", "Encapsulation", "Abstraction"],
      correct: 1,
      explanation: "Constructor overloading allows defining multiple constructors with distinct parameter lists.",
    },
    {
      id: "q9",
      question: "9. Which annotation identifies an intended method override?",
      options: ["@Static", "@Final", "@Override", "@Method"],
      correct: 2,
      explanation: "@Override instructs the compiler to verify that the method actually overrides an inherited method.",
    },
    {
      id: "q10",
      question: "10. Runtime polymorphism is commonly achieved through:",
      options: ["Method overriding", "Variable declaration", "Constructor overloading", "Package imports"],
      correct: 0,
      explanation: "Dynamic method dispatch executes the overridden instance method corresponding to the actual runtime object.",
    },
    {
      id: "q11",
      question: "11. Which class cannot be instantiated directly?",
      options: ["Public class", "Abstract class", "Final object", "Static class"],
      correct: 1,
      explanation: "Abstract classes cannot be instantiated using 'new'; they must be extended by concrete subclasses.",
    },
    {
      id: "q12",
      question: "12. Which keyword declares that a class implements an interface?",
      options: ["extends", "implements", "interface", "super"],
      correct: 1,
      explanation: "The 'implements' keyword binds a class to provide concrete implementations for interface contracts.",
    },
    {
      id: "q13",
      question: "13. Can one Java class extend two classes?",
      options: ["Yes", "No", "Only with final", "Only inside a package"],
      correct: 1,
      explanation: "Java prohibits multiple class inheritance to avoid ambiguity (the diamond problem).",
    },
    {
      id: "q14",
      question: "14. Can one Java class implement multiple interfaces?",
      options: ["Yes", "No", "Only one", "Only if abstract"],
      correct: 0,
      explanation: "Java allows a class to implement any number of interfaces simultaneously.",
    },
    {
      id: "q15",
      question: "15. What is a static variable?",
      options: [
        "A variable shared at class level",
        "An automatically constant variable",
        "A variable belonging to every object separately",
        "A method parameter",
      ],
      correct: 0,
      explanation: "Static variables belong to the class itself and are shared by all instances.",
    },
    {
      id: "q16",
      question: "16. Which keyword prevents a class from being extended?",
      options: ["static", "protected", "final", "abstract"],
      correct: 2,
      explanation: "A 'final' class cannot be subclassed (e.g. java.lang.String is final).",
    },
    {
      id: "q17",
      question: "17. Which access modifier provides the most restrictive direct member access?",
      options: ["public", "protected", "package-private", "private"],
      correct: 3,
      explanation: "'private' limits access solely to within the declaring top-level class body.",
    },
    {
      id: "q18",
      question: "18. What does composition represent?",
      options: ["IS-A", "HAS-A", "Overrides", "Overloads"],
      correct: 1,
      explanation: "Composition represents a HAS-A relationship where an object contains or owns other objects.",
    },
    {
      id: "q19",
      question: "19. Which UML symbol is used for composition?",
      options: ["Hollow diamond", "Filled diamond", "Hollow triangle", "Dashed arrow"],
      correct: 1,
      explanation: "A filled diamond on the owner's side indicates strong composition in UML class diagrams.",
    },
    {
      id: "q20",
      question: "20. What does the Open/Closed Principle encourage?",
      options: [
        "Every class must be final",
        "Software should be open for extension and closed for modification",
        "Classes should never use interfaces",
        "Every method should be private",
      ],
      correct: 1,
      explanation: "OCP states components should allow new features to be added via extension without rewriting tested code.",
    },
  ];

  const handleSelectQuiz = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [quizAnswers]);

  // ---------------------------------------------------------------------------
  // WORKBENCH 9: LABS & INDEPENDENT ASSIGNMENTS TRACKER
  // ---------------------------------------------------------------------------
  const [completedLabs, setCompletedLabs] = useState({});

  const labsList = [
    { id: "lab-1", type: "Lab", title: "Lab 1 — Employee Class", goal: "Fields, methods, salary calculation & 3 instance creations." },
    { id: "lab-2", type: "Lab", title: "Lab 2 — Constructor Overloading", goal: "Product class with no-arg, partial, full constructor chaining via this()." },
    { id: "lab-3", type: "Lab", title: "Lab 3 — Encapsulated Bank Account", goal: "Private balance, validation guards, getter/setter & boundary checking." },
    { id: "lab-4", type: "Lab", title: "Lab 4 — Inheritance Hierarchy", goal: "Person -> Student, Teacher, Administrator with specialized fields." },
    { id: "lab-5", type: "Lab", title: "Lab 5 — Method Overriding & Dynamic Dispatch", goal: "Shape -> Circle, Rectangle, Triangle with double calculateArea()." },
    { id: "lab-6", type: "Lab", title: "Lab 6 — Abstract Class & Interfaces", goal: "Abstract Employee, Payable interface, FullTime and Contract implementations." },
    { id: "lab-7", type: "Lab", title: "Lab 7 — Multiple Interface Implementation", goal: "OfficeMachine implementing Printable, Scannable, Copyable." },
    { id: "lab-8", type: "Lab", title: "Lab 8 — Composition & Injection", goal: "Car with Engine, MusicSystem, NavigationSystem injected via constructor." },
    { id: "lab-9", type: "Lab", title: "Lab 9 — Package Architecture", goal: "Organize com.university.* packages, compile with -d out, run with -cp." },
    { id: "lab-10", type: "Lab", title: "Lab 10 — UML Class Modeling", goal: "Draw UML diagram for Library Management System with association & composition." },
    { id: "assign-1", type: "Assignment", title: "Assignment 1 — Student Management System", goal: "Encapsulation, constructors, averages, results & array of students." },
    { id: "assign-2", type: "Assignment", title: "Assignment 2 — Vehicle Hierarchy", goal: "Vehicle -> Car, Bike, Truck with specialized polymorphic behavior." },
    { id: "assign-3", type: "Assignment", title: "Assignment 3 — Shape Calculation Engine", goal: "Abstract Shape array, dynamic dispatch, dimension validation." },
    { id: "assign-4", type: "Assignment", title: "Assignment 4 — Payment Processing Engine", goal: "PaymentMethod interface, Card/UPI/Bank implementations, OCP adherence." },
    { id: "assign-5", type: "Assignment", title: "Assignment 5 — Library Management System", goal: "Book, Member, Librarian, Loan classes with borrowing rules." },
    { id: "assign-6", type: "Assignment", title: "Assignment 6 — University Course Registration", goal: "Complete capstone with Person, Student, Course, Enrollment, UML." },
    { id: "assign-7", type: "Assignment", title: "Assignment 7 — SOLID Refactoring Challenge", goal: "Break god-class into SRP, OCP, LSP, ISP, DIP compliant architecture." },
    { id: "assign-8", type: "Assignment", title: "Assignment 8 — Full System Architecture", goal: "Pick Hospital / Banking / E-commerce, document UML, and implement in Java." },
  ];

  const toggleLab = (labId) => {
    setCompletedLabs((prev) => ({ ...prev, [labId]: !prev[labId] }));
  };

  const copyCodeToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 pb-24 font-sans selection:bg-orange-500/20 px-4 py-6 sm:px-8 sm:py-10 md:px-12">
      {/* HEADER & COURSE TRACK BREADCRUMB */}
      <header className="sticky top-0 z-40 bg-[#fcfbf9]/90 backdrop-blur-md border-b border-[#e7e3da]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={goBack}
              className="p-2 -ml-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 transition-colors"
              title="Return to Module 3"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold font-mono text-sm border border-orange-500/20">
                04
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 font-mono block">
                  Java Programming Track · Module 4 (Phase 1 Capstone)
                </span>
                <h1 className="text-base sm:text-lg font-bold text-stone-900 truncate">
                  Object-Oriented Programming (OOP) with Java
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-2xs font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Curriculum Spec</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === "workbench"
                    ? "bg-orange-600 text-white shadow-xs font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Workbenches</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SUB-HEADER / METADATA HERO */}
      <section className="bg-stone-900 text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 font-mono">
                  Module 4 of 4
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Phase 1 Capstone Milestone
                </span>
                <span className="text-xs text-stone-400">12–14 Hours Intensive</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Object-Oriented Programming (OOP) with Java
              </h2>
              <p className="text-sm sm:text-base text-stone-300 max-w-3xl leading-relaxed">
                Master the architectural paradigm powering mission-critical software: classes, runtime objects, encapsulation, constructor chaining, inheritance hierarchies, runtime dynamic method dispatch, interfaces, static metaspace members, UML class modeling, and SOLID principles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  setActiveTab("workbench");
                  setActiveWorkbenchTab("instance-studio");
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-600 text-white font-semibold text-xs sm:text-sm hover:bg-orange-500 transition-colors shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch OOP Studio</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab("workbench");
                  setActiveWorkbenchTab("quiz");
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-xs sm:text-sm hover:bg-stone-700 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Take 20 MCQs Quiz</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ModuleNav
          track="java"
          courseId="java-programming"
          currentModuleId="oop"
          prevRoute="/learning/java/arrays-strings"
          nextRoute="/learning/java/advanced"
        />

        {activeTab === "curriculum" ? (
          <div className="mt-8">
            <JavaOOPSections />
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {/* WORKBENCH SUB-TABS */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#e7e3da] text-xs font-semibold [scrollbar-width:none]">
              {[
                { id: "instance-studio", label: "1. Instance State Studio", icon: Box },
                { id: "encapsulation-shield", label: "2. Encapsulation Shield", icon: ShieldCheck },
                { id: "dispatch-lab", label: "3. Dynamic Dispatch Studio", icon: GitBranch },
                { id: "interface-sim", label: "4. Interface & DIP Simulator", icon: Workflow },
                { id: "static-inspector", label: "5. Static vs Heap Memory", icon: Cpu },
                { id: "uml-explorer", label: "6. UML Class Explorer", icon: Share2 },
                { id: "solid-clinic", label: "7. SOLID Principles Clinic", icon: Sliders },
                { id: "quiz", label: "8. 20-Question Knowledge Check", icon: HelpCircle },
                { id: "labs", label: "9. Labs & Assignments Tracker", icon: Award },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeWorkbenchTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWorkbenchTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-orange-600 text-white font-bold shadow-xs"
                        : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 1. INSTANCE STATE STUDIO */}
            {activeWorkbenchTab === "instance-studio" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <span className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                        Interactive Blueprint vs Instance Visualizer
                      </span>
                      <h3 className="text-xl font-bold text-stone-900">
                        Class Blueprint & Heap Object Allocations
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Witness how independent objects maintain distinct instance state while sharing one class definition.
                      </p>
                    </div>
                    <button
                      onClick={handleCreateNewAccount}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 transition-colors shadow-2xs self-start md:self-auto"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Instantiate New Object (new)</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* INSTANCE SELECTOR & HEAP CARDS */}
                    <div className="space-y-3 lg:col-span-1">
                      <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block font-mono">
                        Active Heap Objects ({accounts.length})
                      </span>
                      {accounts.map((acc) => {
                        const isSelected = acc.id === selectedAccId;
                        return (
                          <div
                            key={acc.id}
                            onClick={() => setSelectedAccId(acc.id)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? "bg-orange-50/50 border-orange-400 ring-2 ring-orange-500/20"
                                : "bg-white border-stone-200 hover:border-stone-300"
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs mb-1 font-mono">
                              <span className="font-bold text-stone-900">{acc.id}</span>
                              <span className="text-stone-400">Heap @ {acc.heapAddr}</span>
                            </div>
                            <h4 className="text-sm font-bold text-stone-800">{acc.holder}</h4>
                            <div className="flex items-center justify-between text-xs text-stone-600 mt-2 pt-2 border-t border-stone-100">
                              <span className="text-stone-500">Balance:</span>
                              <span className="font-mono font-bold text-stone-900 text-sm">
                                ${acc.balance.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* METHOD CONTROLS */}
                    <div className="space-y-4 lg:col-span-1 p-5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block font-mono">
                        Method Invocations on [{selectedAccId}]
                      </span>

                      <div className="space-y-2">
                        <label className="text-xs font-medium text-stone-600">
                          Operation Amount ($)
                        </label>
                        <input
                          type="number"
                          value={opAmount}
                          onChange={(e) => setOpAmount(Number(e.target.value))}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white font-mono focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <button
                          onClick={handleDeposit}
                          className="px-3 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors shadow-2xs"
                        >
                          deposit(amount)
                        </button>
                        <button
                          onClick={handleWithdraw}
                          className="px-3 py-2 rounded-lg bg-stone-800 text-white text-xs font-semibold hover:bg-stone-700 transition-colors shadow-2xs"
                        >
                          withdraw(amount)
                        </button>
                      </div>

                      <div className="p-3.5 rounded-lg bg-white border border-stone-200 space-y-1.5 text-xs text-stone-600">
                        <div className="flex justify-between font-mono">
                          <span>Target Object:</span>
                          <span className="font-bold text-stone-900">{activeAccount.holder}</span>
                        </div>
                        <div className="flex justify-between font-mono">
                          <span>State (balance):</span>
                          <span className="font-bold text-orange-600">${activeAccount.balance}</span>
                        </div>
                        <div className="flex justify-between font-mono">
                          <span>Reference Type:</span>
                          <span className="text-stone-500">BankAccount</span>
                        </div>
                      </div>
                    </div>

                    {/* JVM EXECUTION LOG */}
                    <div className="lg:col-span-1 p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-hidden flex flex-col justify-between border border-neutral-800">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3">
                          <span className="text-orange-400 font-bold uppercase">JVM HEAP LOG</span>
                          <span className="text-stone-500">Live Memory Trace</span>
                        </div>
                        <div className="space-y-1.5 max-h-56 overflow-y-auto [scrollbar-width:thin]">
                          {accActionLog.map((log, idx) => (
                            <p key={idx} className="text-stone-300 text-[11px] leading-relaxed">
                              {log}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-neutral-800 text-[10px] text-stone-500">
                        Independent state verified: modifying one object never impacts another.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. ENCAPSULATION SHIELD */}
            {activeWorkbenchTab === "encapsulation-shield" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <span className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                        Data Hiding & Validation Guards
                      </span>
                      <h3 className="text-xl font-bold text-stone-900">
                        Encapsulation & Invariant Shield Lab
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Test how private modifiers and getter/setter validation protect objects from corrupted states.
                      </p>
                    </div>

                    {/* TOGGLE MODE */}
                    <div className="flex rounded-xl bg-stone-100 p-1 border border-stone-200 text-xs">
                      <button
                        onClick={() => setIsEncapsulatedMode(true)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                          isEncapsulatedMode
                            ? "bg-emerald-600 text-white font-bold shadow-xs"
                            : "text-stone-600 hover:text-stone-900"
                        }`}
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Encapsulated (private)</span>
                      </button>
                      <button
                        onClick={() => setIsEncapsulatedMode(false)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                          !isEncapsulatedMode
                            ? "bg-red-600 text-white font-bold shadow-xs"
                            : "text-stone-600 hover:text-stone-900"
                        }`}
                      >
                        <Unlock className="w-3.5 h-3.5" />
                        <span>Unshielded (public raw)</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* TEST CONTROLS */}
                    <div className="space-y-4 p-5 rounded-xl bg-stone-50 border border-stone-200">
                      <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                        Attempt Malicious / Boundary Injections
                      </h4>

                      <div className="space-y-2">
                        <label className="text-xs font-medium text-stone-600">
                          1. Deposit Invariant Test (Try negative values like -500)
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            value={testDepositAmt}
                            onChange={(e) => setTestDepositAmt(Number(e.target.value))}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white font-mono"
                          />
                          <button
                            onClick={handleTestFieldAccess}
                            className="px-4 py-2 rounded-lg bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 whitespace-nowrap shadow-2xs"
                          >
                            Apply Test
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-stone-200">
                        <label className="text-xs font-medium text-stone-600">
                          2. Account Holder Name Invariant (Try empty string "")
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder='e.g. "" (blank)'
                            value={testHolderInput}
                            onChange={(e) => setTestHolderInput(e.target.value)}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white font-mono"
                          />
                          <button
                            onClick={handleTestNameSetter}
                            className="px-4 py-2 rounded-lg bg-stone-800 text-white text-xs font-semibold hover:bg-stone-700 whitespace-nowrap shadow-2xs"
                          >
                            setName()
                          </button>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs space-y-2">
                        <div className="flex justify-between font-mono">
                          <span className="text-stone-500">Current Balance:</span>
                          <span className={`font-bold ${encapBalance < 0 ? "text-red-600" : "text-emerald-700"}`}>
                            ${encapBalance}
                          </span>
                        </div>
                        <div className="flex justify-between font-mono">
                          <span className="text-stone-500">Current Holder Name:</span>
                          <span className={`font-bold ${encapHolder === "" ? "text-red-500 italic" : "text-stone-900"}`}>
                            {encapHolder === "" ? "<EMPTY_STRING_INVALID>" : encapHolder}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* SHIELD LOGS */}
                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs flex flex-col justify-between border border-neutral-800">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3">
                          <span className="text-orange-400 font-bold uppercase">ENCAPSULATION AUDIT</span>
                          <span className="text-stone-500">Invariant Monitor</span>
                        </div>
                        <div className="space-y-2 max-h-56 overflow-y-auto [scrollbar-width:thin]">
                          {shieldLog.length === 0 ? (
                            <p className="text-stone-500 italic text-[11px]">
                              Run an injection test above to watch validation guards intercept invalid state mutations.
                            </p>
                          ) : (
                            shieldLog.map((log, i) => (
                              <p key={i} className="text-[11px] leading-relaxed">
                                {log}
                              </p>
                            ))
                          )}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-neutral-800 text-[10px] text-stone-400">
                        {isEncapsulatedMode
                          ? "Shield active: Mutators guard fields with preconditions."
                          : "Shield disabled: Direct access corrupts critical invariants."}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. DYNAMIC METHOD DISPATCH STUDIO */}
            {activeWorkbenchTab === "dispatch-lab" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <span className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                      Runtime Polymorphism & Virtual Method Table
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">
                      Inheritance & Dynamic Method Dispatch Studio
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Explore how superclass references invoke the specialized overridden method of the actual runtime object.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* HIERARCHY SELECTOR */}
                    <div className="space-y-3 p-5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block font-mono">
                        Select Concrete Instance Type
                      </span>
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setPolymorphicType("SavingsAccount");
                            setDispatchBalance(20000);
                            setDispatchLog([
                              "Upcasted reference: BankAccount account = new SavingsAccount('S101', 'Alex', 20000);",
                            ]);
                          }}
                          className={`w-full p-3 rounded-xl border text-left transition-all ${
                            polymorphicType === "SavingsAccount"
                              ? "bg-orange-50/60 border-orange-400 ring-2 ring-orange-500/20"
                              : "bg-white border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <div className="text-xs font-bold text-stone-900">SavingsAccount</div>
                          <div className="text-[11px] text-stone-500 mt-0.5">
                            Strict balance check. Overdraft not permitted.
                          </div>
                        </button>

                        <button
                          onClick={() => {
                            setPolymorphicType("CurrentAccount");
                            setDispatchBalance(30000);
                            setDispatchLog([
                              "Upcasted reference: BankAccount account = new CurrentAccount('C101', 'Sam', 30000);",
                            ]);
                          }}
                          className={`w-full p-3 rounded-xl border text-left transition-all ${
                            polymorphicType === "CurrentAccount"
                              ? "bg-orange-50/60 border-orange-400 ring-2 ring-orange-500/20"
                              : "bg-white border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <div className="text-xs font-bold text-stone-900">CurrentAccount</div>
                          <div className="text-[11px] text-stone-500 mt-0.5">
                            Specialized overdraft limit up to $10,000.
                          </div>
                        </button>
                      </div>

                      <div className="pt-3 border-t border-stone-200 text-xs space-y-1 text-stone-600">
                        <p className="font-mono text-[11px]">
                          <strong>Reference:</strong> BankAccount (Superclass)
                        </p>
                        <p className="font-mono text-[11px]">
                          <strong>Runtime Object:</strong> {polymorphicType}
                        </p>
                      </div>
                    </div>

                    {/* DISPATCH INVOKER */}
                    <div className="space-y-4 p-5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block font-mono">
                        Call Polymorphic withdraw()
                      </span>

                      <div className="space-y-2">
                        <label className="text-xs font-medium text-stone-600">
                          Withdrawal Amount ($)
                        </label>
                        <input
                          type="number"
                          value={withdrawRequest}
                          onChange={(e) => setWithdrawRequest(Number(e.target.value))}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white font-mono"
                        />
                      </div>

                      <button
                        onClick={handleDynamicDispatch}
                        className="w-full py-2.5 rounded-lg bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 transition-colors shadow-2xs"
                      >
                        Invoke account.withdraw({withdrawRequest})
                      </button>

                      <div className="p-3.5 rounded-lg bg-white border border-stone-200 space-y-1 text-xs">
                        <div className="flex justify-between font-mono">
                          <span className="text-stone-500">Account Balance:</span>
                          <span className={`font-bold ${dispatchBalance < 0 ? "text-orange-600" : "text-stone-900"}`}>
                            ${dispatchBalance.toLocaleString()}
                          </span>
                        </div>
                        {dispatchBalance < 0 && (
                          <div className="text-[10px] text-orange-600 font-mono">
                            Overdraft active (-${Math.abs(dispatchBalance).toLocaleString()})
                          </div>
                        )}
                      </div>
                    </div>

                    {/* VTABLE LOGS */}
                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs flex flex-col justify-between border border-neutral-800">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3">
                          <span className="text-orange-400 font-bold uppercase">DYNAMIC DISPATCH TRACE</span>
                          <span className="text-stone-500">vtable lookup</span>
                        </div>
                        <div className="space-y-2 max-h-56 overflow-y-auto [scrollbar-width:thin]">
                          {dispatchLog.map((log, i) => (
                            <p key={i} className="text-[11px] leading-relaxed">
                              {log}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-neutral-800 text-[10px] text-stone-400">
                        Method execution is determined at runtime based on the actual object, not reference type.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. INTERFACE CONTRACTS & LOOSE COUPLING */}
            {activeWorkbenchTab === "interface-sim" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <span className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                      Contract-Driven Architecture & Dependency Inversion
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">
                      Interface Realization & Loose Coupling Simulator
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Experience how the Open/Closed Principle (OCP) and Dependency Inversion Principle (DIP) decouple services from concrete implementations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* STRATEGY PICKER */}
                    <div className="space-y-3 p-5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block font-mono">
                        Select PaymentMethod Provider
                      </span>
                      <div className="space-y-2">
                        {[
                          { id: "UPIPayment", name: "UPIPayment", desc: "Instant mobile settlement" },
                          { id: "CardPayment", name: "CardPayment", desc: "Credit / Debit card gateway" },
                          { id: "BankTransferPayment", name: "BankTransferPayment", desc: "NEFT / Wire transfer" },
                        ].map((m) => (
                          <div
                            key={m.id}
                            onClick={() => setPaymentStrategy(m.id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              paymentStrategy === m.id
                                ? "bg-orange-50/60 border-orange-400 ring-2 ring-orange-500/20"
                                : "bg-white border-stone-200 hover:border-stone-300"
                            }`}
                          >
                            <div className="text-xs font-bold text-stone-900">{m.name}</div>
                            <div className="text-[11px] text-stone-500">{m.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* PROCESSOR INVOKER */}
                    <div className="space-y-4 p-5 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block font-mono">
                        PaymentProcessor Execution
                      </span>

                      <div className="space-y-2">
                        <label className="text-xs font-medium text-stone-600">Charge Amount ($)</label>
                        <input
                          type="number"
                          value={payAmount}
                          onChange={(e) => setPayAmount(Number(e.target.value))}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white font-mono"
                        />
                      </div>

                      <button
                        onClick={handleProcessPayment}
                        className="w-full py-2.5 rounded-lg bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 transition-colors shadow-2xs"
                      >
                        processor.process(strategy, ${payAmount})
                      </button>

                      <div className="p-3 rounded-lg bg-white border border-stone-200 text-xs text-stone-600 space-y-1">
                        <p className="font-mono text-[11px]">
                          <strong>Contract:</strong> interface PaymentMethod
                        </p>
                        <p className="font-mono text-[11px]">
                          <strong>High-level class:</strong> PaymentProcessor
                        </p>
                      </div>
                    </div>

                    {/* EXECUTION LOGS */}
                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs flex flex-col justify-between border border-neutral-800">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3">
                          <span className="text-orange-400 font-bold uppercase">DECOUPLING ENGINE</span>
                          <span className="text-stone-500">DIP Audit</span>
                        </div>
                        <div className="space-y-2 max-h-56 overflow-y-auto [scrollbar-width:thin]">
                          {paymentLogs.length === 0 ? (
                            <p className="text-stone-500 italic text-[11px]">
                              Process a payment to see how the client interacts with the interface contract alone.
                            </p>
                          ) : (
                            paymentLogs.map((log, i) => (
                              <p key={i} className="text-[11px] leading-relaxed">
                                {log}
                              </p>
                            ))
                          )}
                        </div>
                      </div>
                      <div className="pt-3 border-t border-neutral-800 text-[10px] text-stone-400">
                        Zero modification required in caller code when introducing future payment implementations.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. STATIC VS HEAP MEMORY MODEL */}
            {activeWorkbenchTab === "static-inspector" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <span className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                      Metaspace (Class Level) vs Heap (Instance Level)
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">
                      Static Members vs Instance Variables Inspector
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Inspect how static fields belong to the loaded class type itself (one shared slot in Metaspace) while each instance maintains isolated memory.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* METASPACE CLASS BOX */}
                    <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-200/80 text-amber-900 uppercase">
                          Metaspace / Class Area
                        </span>
                        <span className="text-xs font-mono text-amber-700">Class Student</span>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-stone-700">
                          Edit Shared Class Variable: <code className="text-orange-700">static String university</code>
                        </label>
                        <input
                          type="text"
                          value={staticUniName}
                          onChange={(e) => setStaticUniName(e.target.value)}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-amber-300 bg-white font-mono font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                        />
                      </div>

                      <p className="text-xs text-amber-900 leading-relaxed">
                        Notice: There is <strong>exactly 1 copy</strong> of this field in JVM memory. Access via class identifier: <code className="font-mono text-amber-800">Student.university</code>.
                      </p>
                    </div>

                    {/* HEAP INSTANCES */}
                    <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-stone-200 text-stone-800 uppercase inline-block">
                        JVM Heap Memory (Individual Instances)
                      </span>

                      <div className="grid grid-cols-3 gap-2">
                        {studentInstances.map((s) => (
                          <div key={s.id} className="p-3 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1 text-center">
                            <div className="text-[10px] font-mono text-stone-400">ID #{s.id}</div>
                            <div className="text-xs font-bold text-stone-900">{s.name}</div>
                            <div className="pt-2 border-t border-stone-100 text-[10px] font-mono text-orange-600 truncate">
                              {staticUniName}
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-stone-600 leading-relaxed">
                        Every student instance displays the shared university name instantaneously without copying it across individual heap objects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. UML CLASS DIAGRAM EXPLORER */}
            {activeWorkbenchTab === "uml-explorer" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <span className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                      Visual System Architecture & Relationships
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">
                      UML Class Diagram & Relationship Explorer
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Interactive visual blueprint of the University Course Registration capstone system. Click classes to inspect their compartments and relationships.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* DIAGRAM INTERACTIVE CANVAS */}
                    <div className="lg:col-span-2 p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-stone-500 border-b border-stone-200 pb-2">
                        <span>SYSTEM BLUEPRINT CANVAS</span>
                        <span>Click node to inspect metadata</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {Object.keys(umlDetails).map((key) => {
                          const item = umlDetails[key];
                          const isSelected = selectedUmlNode === key;
                          return (
                            <div
                              key={key}
                              onClick={() => setSelectedUmlNode(key)}
                              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                                isSelected
                                  ? "bg-orange-50/70 border-orange-500 shadow-xs ring-2 ring-orange-500/20"
                                  : "bg-white border-stone-200 hover:border-stone-300"
                              }`}
                            >
                              <div className="text-[10px] font-mono text-orange-600 font-bold">{item.stereotype}</div>
                              <h4 className="text-sm font-bold text-stone-900 mt-0.5">{item.name}</h4>
                              <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">{item.role}</p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 flex flex-wrap items-center gap-4">
                        <span className="font-bold text-stone-800">UML Notation Key:</span>
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <strong>+</strong> Public
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <strong>-</strong> Private
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <strong>#</strong> Protected
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <strong>△</strong> Inheritance (extends)
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <strong>- - - - △</strong> Realization (implements)
                        </span>
                      </div>
                    </div>

                    {/* NODE INSPECTOR */}
                    <div className="lg:col-span-1 p-5 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-4 border border-stone-800">
                      <div>
                        <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider block">
                          COMPARTMENT INSPECTOR
                        </span>
                        <h4 className="text-base font-bold text-white mt-1">
                          {umlDetails[selectedUmlNode].name}
                        </h4>
                        <p className="text-[11px] text-stone-400 mt-0.5">
                          {umlDetails[selectedUmlNode].role}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-3 border-t border-stone-800">
                        <span className="text-[10px] text-stone-400 font-bold uppercase">Attributes / Fields:</span>
                        <div className="space-y-1">
                          {umlDetails[selectedUmlNode].members.map((m, idx) => (
                            <div key={idx} className="text-[11px] text-amber-300">
                              {m}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-3 border-t border-stone-800">
                        <span className="text-[10px] text-stone-400 font-bold uppercase">Operations / Methods:</span>
                        <div className="space-y-1">
                          {umlDetails[selectedUmlNode].methods.map((meth, idx) => (
                            <div key={idx} className="text-[11px] text-emerald-400">
                              {meth}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-stone-800 text-[11px] text-stone-300 leading-relaxed">
                        <strong>Relationships:</strong> {umlDetails[selectedUmlNode].relationship}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 7. SOLID PRINCIPLES CLINIC */}
            {activeWorkbenchTab === "solid-clinic" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <span className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                      Architectural Code Refactoring
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">
                      SOLID Principles Interactive Diagnostic Clinic
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Examine the 5 bedrock design principles: compare tight-coupling anti-patterns against clean, loosely coupled production refactorings.
                    </p>
                  </div>

                  {/* SOLID PICKER */}
                  <div className="grid grid-cols-5 gap-2 mb-6">
                    {["SRP", "OCP", "LSP", "ISP", "DIP"].map((code) => {
                      const isSel = selectedSolid === code;
                      return (
                        <button
                          key={code}
                          onClick={() => setSelectedSolid(code)}
                          className={`py-3 rounded-xl border text-center font-bold text-sm transition-all ${
                            isSel
                              ? "bg-orange-600 text-white border-orange-600 shadow-2xs"
                              : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          {code}
                        </button>
                      );
                    })}
                  </div>

                  {/* ACTIVE PRINCIPLE CARD */}
                  <div className="space-y-5">
                    <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                      <h4 className="text-base font-bold text-stone-900">
                        {solidData[selectedSolid].title}
                      </h4>
                      <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                        {solidData[selectedSolid].description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* ANTI PATTERN */}
                      <div className="p-4 rounded-xl bg-red-50/40 border border-red-200 space-y-2">
                        <span className="text-xs font-mono font-bold text-red-700 uppercase flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Violating Anti-Pattern (Tightly Coupled)</span>
                        </span>
                        <pre className="p-3 rounded-lg bg-neutral-900 text-red-300 font-mono text-[11px] overflow-x-auto leading-relaxed border border-neutral-800">
                          <code>{solidData[selectedSolid].antiPattern}</code>
                        </pre>
                      </div>

                      {/* CLEAN DESIGN */}
                      <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 space-y-2">
                        <span className="text-xs font-mono font-bold text-emerald-700 uppercase flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Refactored Clean Design</span>
                        </span>
                        <pre className="p-3 rounded-lg bg-neutral-900 text-emerald-300 font-mono text-[11px] overflow-x-auto leading-relaxed border border-neutral-800">
                          <code>{solidData[selectedSolid].cleanCode}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                      <strong>Architectural Rationale:</strong> {solidData[selectedSolid].benefit}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. 20-QUESTION MCQ QUIZ */}
            {activeWorkbenchTab === "quiz" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
                    <div>
                      <span className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                        Official Curriculum Knowledge Check
                      </span>
                      <h3 className="text-xl font-bold text-stone-900">
                        Module 4 Assessment: 20 Multiple-Choice Questions
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">
                        Test your comprehension of OOP principles, constructors, inheritance, interfaces, static members, and SOLID guidelines.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right font-mono text-xs">
                        <span className="text-stone-500">Answered:</span>{" "}
                        <strong className="text-stone-900">
                          {Object.keys(quizAnswers).length} / {quizQuestions.length}
                        </strong>
                      </div>
                      <button
                        onClick={() => setShowResults(!showResults)}
                        className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 transition-colors shadow-2xs"
                      >
                        {showResults ? "Hide Evaluation" : "Evaluate Score"}
                      </button>
                    </div>
                  </div>

                  {showResults && (
                    <div className="mb-6 p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-xs text-orange-400 font-bold uppercase font-mono tracking-wider">
                          Final Exam Grade
                        </span>
                        <div className="text-2xl font-extrabold font-mono">
                          {quizScore} / {quizQuestions.length} (
                          {Math.round((quizScore / quizQuestions.length) * 100)}%)
                        </div>
                      </div>
                      <div className="text-xs text-stone-300 max-w-sm text-right">
                        {quizScore >= 16
                          ? "🎉 Excellent mastery! You are ready to design full OOP applications and advance to Data Structures & Algorithms."
                          : "Review the detailed explanations below to cement your understanding of Java OOP design rules."}
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {quizQuestions.map((q, idx) => {
                      const isAnswered = quizAnswers[q.id] !== undefined;
                      const selectedOpt = quizAnswers[q.id];
                      const isCorrect = selectedOpt === q.correct;

                      return (
                        <div
                          key={q.id}
                          className="p-5 rounded-xl border border-stone-200 bg-white space-y-3"
                        >
                          <h4 className="text-sm font-bold text-stone-900">{q.question}</h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = selectedOpt === optIdx;
                              let btnClass = "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100";

                              if (showResults) {
                                if (optIdx === q.correct) {
                                  btnClass = "border-emerald-400 bg-emerald-50 text-emerald-900 font-bold";
                                } else if (isThisSelected && !isCorrect) {
                                  btnClass = "border-red-300 bg-red-50 text-red-800 line-through";
                                }
                              } else if (isThisSelected) {
                                btnClass = "border-orange-500 bg-orange-50 text-orange-950 font-bold";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectQuiz(q.id, optIdx)}
                                  className={`p-3 rounded-lg border text-left text-xs transition-all ${btnClass}`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>

                          {showResults && (
                            <div className="p-3 rounded-lg bg-stone-100 text-stone-700 text-xs leading-relaxed">
                              <strong>Explanation:</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 9. LABS & ASSIGNMENTS TRACKER */}
            {activeWorkbenchTab === "labs" && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
                  <div className="border-b border-stone-100 pb-4 mb-6">
                    <span className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                      Hands-on Laboratory Portfolio
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">
                      10 Practical Laboratory Exercises & 8 Programming Assignments
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Mark completed tasks as you build and compile them in your local Java development environment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {labsList.map((lab) => {
                      const isDone = completedLabs[lab.id] || false;
                      return (
                        <div
                          key={lab.id}
                          onClick={() => toggleLab(lab.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isDone
                              ? "bg-emerald-50/50 border-emerald-300"
                              : "bg-white border-stone-200 hover:border-stone-300"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <button
                              type="button"
                              className="mt-0.5 text-stone-400 hover:text-stone-600 focus:outline-none"
                            >
                              {isDone ? (
                                <CheckSquare className="w-4 h-4 text-emerald-600" />
                              ) : (
                                <Square className="w-4 h-4 text-stone-400" />
                              )}
                            </button>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono uppercase ${
                                    lab.type === "Lab"
                                      ? "bg-orange-100 text-orange-800"
                                      : "bg-stone-100 text-stone-700"
                                  }`}
                                >
                                  {lab.type}
                                </span>
                                <h4
                                  className={`text-xs font-bold ${
                                    isDone ? "text-stone-500 line-through" : "text-stone-900"
                                  }`}
                                >
                                  {lab.title}
                                </h4>
                              </div>
                              <p className="text-xs text-stone-600 leading-relaxed">{lab.goal}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
