import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Copy,
  GitBranch,
  Layers3,
  Lightbulb,
  Lock,
  MessageSquare,
  Network,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import { useSafeBack, useSyncedTopic } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";
import Logo from "./Logo";

/*
  OOP learning content is structured from the conceptual organization of:

  Matt Weisfeld — The Object-Oriented Thought Process, Third Edition.

  The book emphasizes the OO thought process first: objects, state/behavior,
  classes, encapsulation, interfaces/implementation, inheritance,
  polymorphism and composition, followed by class design, object design,
  inheritance/composition, abstract classes and interfaces.

  Source:
  :contentReference[oaicite:0]{index=0}
  :contentReference[oaicite:1]{index=1}
  :contentReference[oaicite:2]{index=2}
*/

const OOPS = () => {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(20);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showCode, setShowCode] = useState(true);
  const [showDetails, setShowDetails] = useState(true);
  const [copied, setCopied] = useState(false);

  const oopTopics = useMemo(
    () => [
      {
        id: "oop-foundation",
        title: "OOP Foundation",
        shortTitle: "OOP Foundation",
        category: "Fundamentals",
        icon: Layers3,
        summary:
          "Object-oriented programming organizes software around objects that combine state and behavior.",
        theory: [
          "The central idea of object orientation is not a particular programming language or tool. It is a way of thinking about a problem in terms of objects and the responsibilities those objects have.",
          "An object contains data representing its state and behavior representing what it can do. Keeping state and behavior together creates a boundary around the object.",
          "An OO system can therefore be viewed as a collection of cooperating objects. Instead of allowing unrelated parts of a program to manipulate shared data directly, objects expose operations through which other objects request services.",
          "The important mental shift is from asking 'What sequence of functions should execute?' to asking 'What objects exist, what responsibilities do they have, and how do they collaborate?'",
        ],
        keyPoints: [
          "Object = state + behavior + identity.",
          "State is represented by attributes.",
          "Behavior is represented by methods.",
          "Objects communicate by sending messages / invoking methods.",
          "A well-designed object owns responsibility for its own data and behavior.",
          "OO design is primarily a modeling and responsibility problem before it is a coding problem.",
        ],
        diagram: "object",
        exampleTitle: "Real-world example: Bank Account",
        example:
          "A BankAccount object has state such as accountNumber and balance. It also has behavior such as deposit() and withdraw(). Another object should request those operations rather than directly changing balance.",
        code: `public class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }

        balance += amount;
    }

    public double getBalance() {
        return balance;
    }
}`,
        mistakes: [
          "Treating objects as merely containers for public variables.",
          "Putting all application logic inside one giant class.",
          "Allowing unrelated classes to modify another object's state directly.",
          "Thinking that using a class automatically means the design is object-oriented.",
        ],
        interview: [
          "What is an object?",
          "What is the difference between state and behavior?",
          "Why should an object control its own state?",
          "How do objects communicate?",
        ],
      },

      {
        id: "object-vs-procedural",
        title: "Procedural vs Object-Oriented Thinking",
        shortTitle: "Procedural vs OO",
        category: "Fundamentals",
        icon: Workflow,
        summary:
          "The major design difference is where data and the operations on that data live.",
        theory: [
          "In procedural programming, data and procedures are commonly treated as separate entities. Functions receive data, manipulate it, and return results.",
          "Object-oriented design combines the data and the operations that are responsible for that data into objects.",
          "This does not mean procedural constructs disappear. OO programs still use loops, conditionals, functions and other structured programming constructs. The difference is the overall organization and responsibility model.",
          "Separating shared data from many unrelated procedures can make it difficult to determine who is allowed to change the data. Encapsulation addresses this by placing control around state.",
          "OO design is not a claim that procedural programming is inherently wrong. Existing systems may work well. The important point is to select an appropriate design approach for the problem.",
        ],
        keyPoints: [
          "Procedural: data and operations are often separated.",
          "OO: state and behavior are grouped into objects.",
          "OO still uses procedural control structures.",
          "Encapsulation provides controlled access to state.",
          "The goal is organization around responsibilities, not simply syntax.",
        ],
        diagram: "procedural",
        exampleTitle: "Same problem, different organization",
        example:
          "Suppose an application manages employees. A procedural design may have employee records plus many functions operating on them. An OO design can represent each employee as an object containing employee state and employee-related behavior.",
        code: `// Procedural style
Employee employee = getEmployee();

calculateSalary(employee);
printEmployee(employee);
updateEmployeeAddress(employee);

// Object-oriented style
Employee employee = new Employee();

employee.calculateSalary();
employee.print();
employee.updateAddress(newAddress);`,
        mistakes: [
          "Thinking OO means eliminating all functions.",
          "Moving every function into a class without assigning meaningful responsibility.",
          "Using global/shared data when the data belongs to a particular object.",
        ],
        interview: [
          "Is procedural programming incompatible with OOP?",
          "Why is uncontrolled shared data difficult to maintain?",
          "What does OO add beyond a data structure?",
        ],
      },

      {
        id: "objects",
        title: "Objects: State, Behavior and Identity",
        shortTitle: "Objects",
        category: "Core Concepts",
        icon: Users,
        summary:
          "An object is an individual entity with its own identity, state and behavior.",
        theory: [
          "An object represents a specific instance of something modeled by the system. Two objects can be created from the same class while still having different state.",
          "State is the collection of values currently held by the object. For example, two Employee objects can have different names, dates of birth and identifiers.",
          "Behavior describes operations the object can perform. In Java, behavior is implemented by methods.",
          "Identity distinguishes one object from another. Two objects can have identical attribute values and still represent different instances.",
          "Objects should generally be responsible for operations that belong naturally to their own data. This reduces the need for outside code to understand their internal representation.",
        ],
        keyPoints: [
          "Identity answers: which object is this?",
          "State answers: what values does this object currently contain?",
          "Behavior answers: what can this object do?",
          "Objects can have different states even when created from the same class.",
          "Methods provide controlled ways of requesting behavior.",
        ],
        diagram: "state",
        exampleTitle: "Two Employee objects",
        example:
          "Employee john and Employee mary are both instances of Employee. They share the same class definition but have independent identity and state.",
        code: `Employee john = new Employee("John", 30);
Employee mary = new Employee("Mary", 27);

System.out.println(john.getName());
System.out.println(mary.getName());

john.setAge(31);

// Mary's state is unaffected.
System.out.println(mary.getAge());`,
        mistakes: [
          "Confusing a class with an object.",
          "Assuming two objects created from one class share all instance attributes.",
          "Exposing state so other classes can change it without validation.",
        ],
        interview: [
          "What are the three important characteristics of an object?",
          "Can two objects have the same state?",
          "What makes two instances distinct?",
        ],
      },

      {
        id: "classes",
        title: "Classes and Objects",
        shortTitle: "Classes",
        category: "Core Concepts",
        icon: Code2,
        summary:
          "A class defines the structure and behavior from which objects are instantiated.",
        theory: [
          "A class is a blueprint or template for creating objects. It describes the attributes and methods that instances of the class will have.",
          "Instantiation creates an individual object from the class definition.",
          "The class describes what an object can contain and do; the object is the concrete instance participating in the running system.",
          "A class can define constructors, attributes, public methods and private implementation methods.",
          "The conceptual model should come before implementation details. The class should be designed around its users and responsibilities rather than around arbitrary code organization.",
        ],
        keyPoints: [
          "Class = template/definition.",
          "Object = instance of a class.",
          "Instantiation creates an object.",
          "Instance attributes normally belong to individual objects.",
          "Methods define behavior.",
          "A class should have a coherent responsibility.",
        ],
        diagram: "class",
        exampleTitle: "Class → objects",
        example:
          "The Car class describes the common structure of cars. car1 and car2 are separate objects with their own state.",
        code: `public class Car {
    private String model;
    private int speed;

    public Car(String model) {
        this.model = model;
        this.speed = 0;
    }

    public void accelerate(int amount) {
        speed += amount;
    }

    public int getSpeed() {
        return speed;
    }
}

// Instances
Car car1 = new Car("Sedan");
Car car2 = new Car("SUV");

car1.accelerate(20);

System.out.println(car1.getSpeed()); // 20
System.out.println(car2.getSpeed()); // 0`,
        mistakes: [
          "Saying 'the class is an object' without distinguishing definition from instance.",
          "Putting unrelated responsibilities into one class.",
          "Making every member public simply because other classes need some information.",
        ],
        interview: [
          "What is a class?",
          "What is an instance?",
          "What happens when new is used?",
          "Can one class create many objects?",
        ],
      },

      {
        id: "attributes-methods-messages",
        title: "Attributes, Methods and Messages",
        shortTitle: "Attributes & Methods",
        category: "Core Concepts",
        icon: MessageSquare,
        summary:
          "Attributes describe state, methods implement behavior, and messages request services.",
        theory: [
          "Attributes store information about the object. In Java they are commonly represented by fields.",
          "Methods implement behavior. A method can read or change state, perform a calculation, validate input, or coordinate with another object.",
          "Object communication can be viewed as message passing: one object asks another object to perform an operation.",
          "The requesting object should not need to know how the receiving object implements the operation. It needs to know the contract exposed by the receiving object.",
          "This separation is one of the foundations of maintainable OO systems: the implementation can change while the public contract remains stable.",
        ],
        keyPoints: [
          "Attribute → state.",
          "Method → behavior.",
          "Message → request for behavior.",
          "The caller should depend on the public contract.",
          "Implementation details should remain hidden where possible.",
        ],
        diagram: "message",
        exampleTitle: "Payroll asks Employee for information",
        example:
          "A Payroll object can request an employee's salary through a method instead of directly accessing the employee's internal fields.",
        code: `public class Employee {
    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public double getSalary() {
        return salary;
    }
}

public class Payroll {
    public double calculateTax(Employee employee) {
        double salary = employee.getSalary();
        return salary * 0.20;
    }
}`,
        mistakes: [
          "Directly manipulating another object's private state.",
          "Creating getters/setters for every field without considering actual responsibility.",
          "Making the caller depend on implementation details.",
        ],
        interview: [
          "What is a message in OOP?",
          "Why should methods belong to the object responsible for the operation?",
          "What is the relationship between attributes and methods?",
        ],
      },

      {
        id: "encapsulation",
        title: "Encapsulation and Data Hiding",
        shortTitle: "Encapsulation",
        category: "Core Concepts",
        icon: Lock,
        summary:
          "Encapsulation groups state and behavior while controlling what outside objects can access.",
        theory: [
          "Encapsulation is one of the fundamental OO concepts. The object combines its data and behavior and decides which parts should be exposed.",
          "Data hiding means restricting access to internal attributes or implementation methods. In Java, private members cannot be accessed directly by unrelated classes.",
          "The purpose is not merely to make fields private. The deeper purpose is to preserve object integrity and prevent outside code from depending on internal representation.",
          "A setter can enforce valid state transitions. For example, an Account object can reject a negative deposit instead of allowing arbitrary code to write directly into balance.",
          "Encapsulation also limits the impact of change. If the internal representation changes but the public interface remains stable, users of the class can continue to work.",
        ],
        keyPoints: [
          "Keep implementation details hidden.",
          "Expose only operations required by clients.",
          "Protect invariants inside the responsible object.",
          "Use access control deliberately.",
          "Encapsulation applies to both data and behavior.",
        ],
        diagram: "encapsulation",
        exampleTitle: "Controlled account balance",
        example:
          "External code cannot directly assign balance. It must use deposit() or withdraw(), allowing the Account object to protect its valid state.",
        code: `public class Account {
    private double balance;

    public Account(double initialBalance) {
        if (initialBalance < 0) {
            throw new IllegalArgumentException("Invalid balance");
        }

        balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Invalid amount");
        }

        balance += amount;
    }

    public boolean withdraw(double amount) {
        if (amount <= 0 || amount > balance) {
            return false;
        }

        balance -= amount;
        return true;
    }

    public double getBalance() {
        return balance;
    }
}`,
        mistakes: [
          "Making fields public.",
          "Assuming getters and setters automatically guarantee good encapsulation.",
          "Putting validation outside the object that owns the data.",
          "Exposing internal collections directly.",
        ],
        interview: [
          "What is encapsulation?",
          "What is data hiding?",
          "Why should fields usually be private?",
          "Does using getters and setters automatically make a class well encapsulated?",
        ],
      },

      {
        id: "interface-implementation",
        title: "Interface vs Implementation",
        shortTitle: "Interface / Implementation",
        category: "Design Thinking",
        icon: ShieldCheck,
        summary:
          "The interface describes what users can request; implementation describes how the class provides the service.",
        theory: [
          "The public interface is the part of a class visible to its users. It defines the services the object offers.",
          "The implementation is the internal machinery used to provide those services.",
          "A good OO design minimizes the amount of implementation knowledge a user needs.",
          "The book uses real-world interfaces such as a car or taxi to explain the idea: a passenger needs to communicate the destination, not control every steering operation.",
          "Abstract interfaces tend to be more reusable because the same request can be implemented differently in different environments.",
          "Changing an implementation should ideally not force changes in the classes using the public interface.",
        ],
        keyPoints: [
          "Interface = what the object promises.",
          "Implementation = how the promise is fulfilled.",
          "Hide unnecessary details.",
          "Prefer stable and meaningful public contracts.",
          "Design from the user's perspective.",
          "Start with a minimal interface and evolve it as real requirements appear.",
        ],
        diagram: "interface",
        exampleTitle: "Payment interface",
        example:
          "A checkout service needs to know that a payment can be processed. It should not need to know the internal details of a card processor, bank gateway or wallet provider.",
        code: `public interface PaymentProcessor {
    boolean pay(double amount);
}

public class CardPayment implements PaymentProcessor {
    @Override
    public boolean pay(double amount) {
        // Card-specific implementation.
        return amount > 0;
    }
}

public class Checkout {
    private final PaymentProcessor processor;

    public Checkout(PaymentProcessor processor) {
        this.processor = processor;
    }

    public boolean checkout(double amount) {
        return processor.pay(amount);
    }
}`,
        mistakes: [
          "Exposing internal helper methods as public APIs.",
          "Designing an interface around implementation details.",
          "Forcing callers to know how a service works internally.",
        ],
        interview: [
          "What is the difference between interface and implementation?",
          "Why is a minimal interface useful?",
          "How does hiding implementation support maintainability?",
        ],
      },

      {
        id: "abstraction",
        title: "Abstraction",
        shortTitle: "Abstraction",
        category: "Core Concepts",
        icon: Lightbulb,
        summary:
          "Abstraction focuses attention on essential behavior while hiding unnecessary detail.",
        theory: [
          "Abstraction means representing the important characteristics of something while leaving unnecessary implementation detail behind.",
          "The goal is not to hide everything. The goal is to expose the right level of detail for the user of the object.",
          "A highly concrete interface can become tightly coupled to one implementation. A more abstract interface can support multiple implementations.",
          "The book's taxi example illustrates this distinction: 'take me to the airport' is a higher-level request than specifying every turn the driver must make.",
          "Abstraction works together with encapsulation. Abstraction determines what is important to expose; encapsulation controls access to the implementation.",
        ],
        keyPoints: [
          "Focus on essential concepts.",
          "Hide unnecessary detail.",
          "Higher-level requests are generally more reusable.",
          "Abstraction supports loose coupling.",
          "Abstraction is about the model and the interface, not merely abstract classes.",
        ],
        diagram: "abstraction",
        exampleTitle: "Drive to destination",
        example:
          "A navigation client can ask a Route object for a route to a destination without knowing the graph algorithm, map storage format or path calculation details.",
        code: `public interface RouteService {
    Route calculateRoute(Location from, Location to);
}

public class FastestRouteService implements RouteService {
    @Override
    public Route calculateRoute(Location from, Location to) {
        // Internal routing algorithm.
        return new Route();
    }
}

public class Navigation {
    private final RouteService routeService;

    public Navigation(RouteService routeService) {
        this.routeService = routeService;
    }
}`,
        mistakes: [
          "Confusing abstraction with abstract classes only.",
          "Exposing every internal operation.",
          "Designing APIs around today's implementation rather than the user's needs.",
        ],
        interview: [
          "What is abstraction?",
          "How is abstraction different from encapsulation?",
          "Why can abstract interfaces improve reuse?",
        ],
      },

      {
        id: "constructors",
        title: "Constructors and Object Initialization",
        shortTitle: "Constructors",
        category: "Advanced Concepts",
        icon: Terminal,
        summary:
          "Constructors establish an object's initial valid state when the object is created.",
        theory: [
          "A constructor is a special operation associated with object creation. In Java, it has the same name as the class and no return type.",
          "The new expression allocates an object and invokes an appropriate constructor.",
          "A constructor should leave the object in a stable and usable state. This means required attributes should be initialized and invalid initial conditions should be rejected.",
          "A class can provide multiple constructors when objects can be initialized in different valid ways. This is constructor overloading.",
          "When designing constructors, think about object invariants: what must always be true immediately after construction?",
        ],
        keyPoints: [
          "Constructor name matches the class name.",
          "Constructors have no return type.",
          "Constructors establish initial state.",
          "Constructors can be overloaded.",
          "Validate required constructor arguments.",
          "A stable initial state is more important than merely assigning arbitrary default values.",
        ],
        diagram: "constructor",
        exampleTitle: "Immutable-style initialization",
        example:
          "A Student object requires a non-empty name and a valid age. The constructor prevents creation of an invalid initial object.",
        code: `public class Student {
    private final String name;
    private final int age;

    public Student(String name, int age) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name required");
        }

        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }

        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}`,
        mistakes: [
          "Leaving required fields in an invalid state.",
          "Using arbitrary initialization values without considering their meaning.",
          "Confusing a constructor with an ordinary method.",
          "Creating too many constructors with overlapping semantics.",
        ],
        interview: [
          "What is a constructor?",
          "When is a constructor called?",
          "Can a constructor return a value?",
          "Why are constructors important for object invariants?",
          "What is constructor overloading?",
        ],
      },

      {
        id: "scope-static",
        title: "Scope, Instance State and Static State",
        shortTitle: "Scope & Static",
        category: "Advanced Concepts",
        icon: Network,
        summary:
          "Scope determines where a variable or method can be accessed, while instance and static state have different ownership.",
        theory: [
          "A local variable exists within the scope of a method or block. It is temporary and belongs to that execution context.",
          "An instance attribute belongs to a particular object. Every object normally has its own value.",
          "A static/class attribute belongs to the class rather than to one individual instance. Objects of the same class share it.",
          "The this reference identifies the current object and is useful when local variables and instance attributes have the same name.",
          "Small scope generally makes code easier to reason about because fewer parts of the program can interact with a value.",
        ],
        keyPoints: [
          "Local variable → method/block scope.",
          "Instance field → one object's state.",
          "Static field → shared class-level state.",
          "this → current object reference.",
          "Keep temporary values local when possible.",
          "Shared state should be used deliberately.",
        ],
        diagram: "scope",
        exampleTitle: "Instance vs static",
        example:
          "Each Counter object has its own count, while totalCreated is shared by every Counter object.",
        code: `public class Counter {
    private int count;
    private static int totalCreated = 0;

    public Counter() {
        totalCreated++;
        count = 0;
    }

    public void increment() {
        int step = 1; // local variable
        this.count += step;
    }

    public int getCount() {
        return count;
    }

    public static int getTotalCreated() {
        return totalCreated;
    }
}`,
        mistakes: [
          "Using static state for data that belongs to individual objects.",
          "Creating class-level variables when a local variable would be enough.",
          "Confusing static state with global state.",
        ],
        interview: [
          "What is the difference between local, instance and static variables?",
          "What does this mean in Java?",
          "When should a field be static?",
        ],
      },

      {
        id: "overloading",
        title: "Method Overloading",
        shortTitle: "Overloading",
        category: "Advanced Concepts",
        icon: GitBranch,
        summary:
          "Overloading allows multiple methods to use the same name when their parameter lists differ.",
        theory: [
          "Method overloading provides multiple ways to invoke conceptually related behavior.",
          "The overloaded methods must have distinguishable signatures. In Java, the method name and parameter list determine the signature; changing only the return type does not create a valid overload.",
          "Constructors can also be overloaded.",
          "Overloading is different from overriding. Overloading selects among methods with different parameter lists; overriding replaces inherited behavior in a subclass.",
        ],
        keyPoints: [
          "Same method name.",
          "Different parameter list.",
          "Return type alone is not enough.",
          "Constructors can be overloaded.",
          "Overloading is resolved differently from runtime polymorphic overriding.",
        ],
        diagram: "overload",
        exampleTitle: "Multiple ways to create a report",
        example:
          "A Report class can offer constructors or methods that accept different input forms.",
        code: `public class Printer {

    public void print(String text) {
        System.out.println(text);
    }

    public void print(String text, int copies) {
        for (int i = 0; i < copies; i++) {
            System.out.println(text);
        }
    }

    public void print(int number) {
        System.out.println(number);
    }
}`,
        mistakes: [
          "Trying to overload only by changing return type.",
          "Confusing overloading with overriding.",
          "Creating ambiguous overloads that are difficult for callers to understand.",
        ],
        interview: [
          "What is method overloading?",
          "Can methods be overloaded by return type alone?",
          "What is the difference between overloading and overriding?",
        ],
      },

      {
        id: "inheritance",
        title: "Inheritance",
        shortTitle: "Inheritance",
        category: "Core Relationships",
        icon: GitBranch,
        summary:
          "Inheritance allows a subclass to specialize a superclass and reuse its accessible structure and behavior.",
        theory: [
          "Inheritance expresses a generalization/specialization relationship. A subclass represents a more specific kind of the superclass.",
          "The book describes this as an 'is-a' relationship: a Circle is a Shape, and a Dog is an Animal.",
          "A subclass can inherit behavior and can add specialized state or behavior.",
          "Inheritance can provide reuse, but it should not be used simply because code looks similar. The semantic relationship between the types matters.",
          "Inheritance also creates coupling between the subclass and superclass. Changes in a superclass can affect subclasses, so inheritance should be designed deliberately.",
        ],
        keyPoints: [
          "Superclass = general concept.",
          "Subclass = specialized concept.",
          "Inheritance represents an is-a relationship.",
          "Subclasses can extend or override behavior.",
          "Inheritance provides reuse but also coupling.",
          "Prefer inheritance when the subtype genuinely conforms to the abstraction.",
        ],
        diagram: "inheritance",
        exampleTitle: "Shape hierarchy",
        example:
          "Shape defines a common abstraction. Circle and Rectangle specialize Shape with their own area calculation.",
        code: `public abstract class Shape {
    public abstract double getArea();
}

public class Circle extends Shape {
    private final double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

public class Rectangle extends Shape {
    private final double width;
    private final double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() {
        return width * height;
    }
}`,
        mistakes: [
          "Using inheritance only to reuse a few lines of code.",
          "Creating deep and fragile inheritance hierarchies.",
          "Putting child-specific responsibilities into the superclass.",
          "Ignoring the semantic is-a relationship.",
        ],
        interview: [
          "What is inheritance?",
          "What is an is-a relationship?",
          "What are the benefits and costs of inheritance?",
          "When should composition be preferred?",
        ],
      },

      {
        id: "polymorphism",
        title: "Polymorphism and Method Overriding",
        shortTitle: "Polymorphism",
        category: "Core Relationships",
        icon: Sparkles,
        summary:
          "Different objects can respond differently to the same message through a common abstraction.",
        theory: [
          "Polymorphism means that one common interface can represent multiple concrete forms.",
          "The Shape example is fundamental: a caller can treat Circle, Rectangle and other shapes as Shape objects and request getArea(). Each concrete class provides the behavior appropriate to itself.",
          "The important design property is that the caller does not need a large conditional statement asking which concrete type it received.",
          "Overriding occurs when a subclass provides its own implementation of an inherited operation.",
          "Polymorphism shifts responsibility toward the object that knows how to perform the operation.",
        ],
        keyPoints: [
          "One common contract.",
          "Many concrete implementations.",
          "Same message can produce different behavior.",
          "Overriding enables runtime specialization.",
          "Reduces type-specific conditional logic.",
          "The object is responsible for its own behavior.",
        ],
        diagram: "polymorphism",
        exampleTitle: "One call, different behavior",
        example:
          "A collection of Shape references can contain Circle and Rectangle objects. Calling getArea() on each reference invokes the implementation belonging to the actual object.",
        code: `List<Shape> shapes = List.of(
    new Circle(5),
    new Rectangle(4, 5)
);

for (Shape shape : shapes) {
    System.out.println(shape.getArea());
}

// Same message:
// shape.getArea()
//
// Different runtime behavior:
// Circle -> circle area
// Rectangle -> rectangle area`,
        mistakes: [
          "Using instanceof everywhere instead of letting objects provide behavior.",
          "Confusing overloading with overriding.",
          "Thinking polymorphism requires inheritance in every possible design.",
        ],
        interview: [
          "What is polymorphism?",
          "How does overriding support polymorphism?",
          "Why is polymorphism useful?",
          "How does polymorphism reduce conditional logic?",
        ],
      },

      {
        id: "composition",
        title: "Composition and Has-a Relationships",
        shortTitle: "Composition",
        category: "Core Relationships",
        icon: Layers3,
        summary:
          "Composition builds larger objects from collaborating smaller objects.",
        theory: [
          "Composition means an object contains or collaborates with other objects as part of its implementation or structure.",
          "The book describes this as a 'has-a' relationship. A Car has an Engine; a Computer has a Keyboard or Drive.",
          "Composition allows individual components to be designed and reused independently.",
          "Composition often creates less rigid coupling than inheritance because the containing object can depend on an abstraction and receive different implementations.",
          "A compound object delegates responsibilities to the objects it contains rather than implementing every behavior itself.",
        ],
        keyPoints: [
          "Composition = has-a relationship.",
          "Objects can be assembled from other objects.",
          "Composition promotes separation of responsibility.",
          "Components can often be replaced independently.",
          "Use composition when the relationship represents containment, ownership or collaboration.",
        ],
        diagram: "composition",
        exampleTitle: "Car composed of components",
        example:
          "A Car can contain an Engine and a SteeringSystem. The Car coordinates them without becoming an Engine or SteeringSystem.",
        code: `public class Engine {
    public void start() {
        System.out.println("Engine started");
    }
}

public class Car {
    private final Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void start() {
        engine.start();
        System.out.println("Car is ready");
    }
}`,
        mistakes: [
          "Using inheritance for a has-a relationship.",
          "Creating one giant class instead of collaborating components.",
          "Making component internals visible to the containing object unnecessarily.",
        ],
        interview: [
          "What is composition?",
          "What is a has-a relationship?",
          "Why can composition be preferable to inheritance?",
          "How does composition improve reuse?",
        ],
      },

      {
        id: "inheritance-vs-composition",
        title: "Inheritance vs Composition",
        shortTitle: "Inheritance vs Composition",
        category: "Design Decisions",
        icon: GitBranch,
        summary:
          "Choosing between inheritance and composition is a semantic design decision, not simply a code-reuse decision.",
        theory: [
          "Inheritance models specialization: one type is a kind of another type.",
          "Composition models construction or collaboration: one object has or uses another object.",
          "Inheritance exposes the subclass to decisions made by its superclass and can weaken encapsulation because the subclass depends on inherited structure.",
          "Composition allows behavior to be delegated to component objects and can make responsibilities more replaceable.",
          "The book explicitly discusses the growing emphasis on composition and the need to use inheritance only in appropriate contexts.",
        ],
        keyPoints: [
          "Use inheritance for a genuine is-a relationship.",
          "Use composition for a genuine has-a / uses relationship.",
          "Inheritance can increase coupling.",
          "Composition can isolate responsibilities.",
          "Neither technique is universally correct.",
        ],
        diagram: "inheritanceComposition",
        exampleTitle: "Bad vs better modeling",
        example:
          "A Car should not inherit from Engine because a car is not an engine. A Car should contain or use an Engine.",
        code: `// Wrong conceptual model
// class Car extends Engine {}

// Better model
public class Car {
    private final Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void start() {
        engine.start();
    }
}`,
        mistakes: [
          "Choosing inheritance solely for code reuse.",
          "Ignoring the meaning of the relationship.",
          "Building inheritance hierarchies where behavior could be composed.",
        ],
        interview: [
          "When should you use inheritance?",
          "When should you use composition?",
          "Why can inheritance weaken encapsulation?",
        ],
      },

      {
        id: "abstract-classes",
        title: "Abstract Classes",
        shortTitle: "Abstract Classes",
        category: "Reuse & Contracts",
        icon: BookOpen,
        summary:
          "Abstract classes provide a common abstraction that can contain both required behavior and shared implementation.",
        theory: [
          "An abstract class represents a concept that is useful as a base abstraction but is not necessarily intended to be instantiated directly.",
          "An abstract class can define abstract methods that subclasses must implement.",
          "It can also provide concrete methods and shared state. This gives it a role in implementation inheritance as well as definition.",
          "The Shape example demonstrates this pattern: Shape declares getArea(), while Circle and Rectangle provide the concrete formulas.",
          "Abstract classes are useful when related subclasses share meaningful implementation or state in addition to sharing a contract.",
        ],
        keyPoints: [
          "Abstract class cannot normally be instantiated directly.",
          "Can contain abstract methods.",
          "Can contain concrete methods.",
          "Can contain fields/state.",
          "Subclasses specialize the abstraction.",
          "Useful when common implementation belongs in the hierarchy.",
        ],
        diagram: "abstractClass",
        exampleTitle: "Abstract Shape",
        example:
          "Shape defines the common operation getArea(). Each concrete shape must provide its own implementation.",
        code: `public abstract class Shape {

    protected String color;

    public Shape(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public abstract double getArea();

    public void describe() {
        System.out.println("This is a shape");
    }
}

public class Circle extends Shape {

    private final double radius;

    public Circle(double radius) {
        super("blue");
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}`,
        mistakes: [
          "Using an abstract class when unrelated classes merely need the same contract.",
          "Putting too much unrelated shared behavior into the base class.",
          "Creating abstract methods without a meaningful specialization model.",
        ],
        interview: [
          "What is an abstract class?",
          "Can an abstract class have constructors?",
          "Can an abstract class contain concrete methods?",
          "When would you choose an abstract class over an interface?",
        ],
      },

      {
        id: "interfaces",
        title: "Interfaces and Contracts",
        shortTitle: "Interfaces",
        category: "Reuse & Contracts",
        icon: ShieldCheck,
        summary:
          "An interface defines a contract that implementing classes agree to satisfy.",
        theory: [
          "An interface describes a set of operations that a class promises to provide.",
          "The book treats interfaces as a mechanism for behavioral inheritance and as an important foundation for contracts and reusable frameworks.",
          "A Java interface does not provide ordinary instance implementation in the traditional form described in the book's discussion. Implementing classes provide the concrete behavior required by the contract.",
          "Interfaces make it possible for unrelated classes to conform to the same behavior without sharing a class hierarchy.",
          "A contract gives framework users predictable rules: if an object satisfies the contract, the framework can use it through the contract rather than knowing its concrete implementation.",
        ],
        keyPoints: [
          "Interface = contract.",
          "Implementation classes satisfy the contract.",
          "A class can implement interfaces.",
          "Interfaces promote behavioral compatibility.",
          "Interfaces support plug-in architecture.",
          "Depend on abstractions rather than concrete implementations.",
        ],
        diagram: "interfaceContract",
        exampleTitle: "Notification contract",
        example:
          "EmailNotifier and SmsNotifier can both implement NotificationSender. The application can depend on the contract rather than one specific provider.",
        code: `public interface NotificationSender {
    void send(String recipient, String message);
}

public class EmailNotifier implements NotificationSender {

    @Override
    public void send(String recipient, String message) {
        System.out.println(
            "Email -> " + recipient + ": " + message
        );
    }
}

public class SmsNotifier implements NotificationSender {

    @Override
    public void send(String recipient, String message) {
        System.out.println(
            "SMS -> " + recipient + ": " + message
        );
    }
}

public class AlertService {
    private final NotificationSender sender;

    public AlertService(NotificationSender sender) {
        this.sender = sender;
    }

    public void alert(String user, String message) {
        sender.send(user, message);
    }
}`,
        mistakes: [
          "Creating interfaces for every tiny class without a real abstraction.",
          "Putting implementation-specific concepts into a generic interface.",
          "Depending directly on concrete classes when a stable contract is sufficient.",
        ],
        interview: [
          "What is an interface?",
          "What is a contract?",
          "How is an interface different from an abstract class?",
          "Why are interfaces useful for frameworks?",
        ],
      },

      {
        id: "object-responsibility",
        title: "Object Responsibility",
        shortTitle: "Responsibility",
        category: "Object Design",
        icon: CheckCircle2,
        summary:
          "A well-designed object should be responsible for behavior that naturally belongs to it.",
        theory: [
          "Object design is not only about identifying nouns. It is about assigning responsibilities to the appropriate objects.",
          "If an object has the data necessary to perform an operation, that operation often belongs with the object rather than with an external controller that repeatedly inspects the object's state.",
          "The book's shape-printing example contrasts procedural type checks with polymorphic behavior where each Shape knows how to print itself.",
          "This approach avoids growing switch statements every time a new subtype is introduced.",
          "Responsibility assignment should keep classes cohesive and reduce unnecessary coupling between objects.",
        ],
        keyPoints: [
          "Give behavior to the object that owns the necessary knowledge.",
          "Avoid large type-based switch statements.",
          "Keep classes cohesive.",
          "Reduce dependencies between unrelated classes.",
          "Use polymorphism when behavior varies by concrete type.",
        ],
        diagram: "responsibility",
        exampleTitle: "Shape prints itself",
        example:
          "Instead of a central printer containing separate logic for every shape type, the Shape hierarchy can provide print() and let each concrete shape implement it.",
        code: `public abstract class Shape {
    public abstract void print();
}

public class Circle extends Shape {
    @Override
    public void print() {
        System.out.println("Printing Circle");
    }
}

public class Rectangle extends Shape {
    @Override
    public void print() {
        System.out.println("Printing Rectangle");
    }
}

public class ShapePrinter {
    public void print(Shape shape) {
        shape.print();
    }
}`,
        mistakes: [
          "Centralizing every behavior in one controller.",
          "Repeated instanceof or switch logic.",
          "Giving one class knowledge of many unrelated implementations.",
        ],
        interview: [
          "What does object responsibility mean?",
          "Why are type-switch statements often a design smell?",
          "How can polymorphism improve responsibility assignment?",
        ],
      },

      {
        id: "class-design",
        title: "Class Design Guidelines",
        shortTitle: "Class Design",
        category: "Object Design",
        icon: Lightbulb,
        summary:
          "Good classes are cohesive, encapsulated, maintainable, reusable and designed around a clear public interface.",
        theory: [
          "A class should not be designed in isolation. It exists to collaborate with other objects and provide services to its users.",
          "The public interface should be as small as practical. Additional interfaces can be added when actual requirements demonstrate that they are needed.",
          "Implementation should be hidden. Private fields and methods keep internal details localized.",
          "Classes should be designed with reuse and extensibility in mind where appropriate.",
          "Names should communicate the purpose of classes, methods and attributes.",
          "Nonportable or platform-specific code should be isolated behind a wrapper or dedicated abstraction.",
          "A class should be responsible for itself whenever possible.",
          "Low coupling improves maintainability because changes to one class are less likely to ripple through the rest of the system.",
          "Testing can begin at the interface level using stubs before the complete implementation exists.",
        ],
        keyPoints: [
          "Minimal public interface.",
          "Hide implementation.",
          "Robust constructors.",
          "Designed-in error handling.",
          "Descriptive naming.",
          "Reuse and extensibility.",
          "Small scope.",
          "Low coupling.",
          "High cohesion.",
          "Self-responsibility.",
          "Test interfaces early.",
        ],
        diagram: "classDesign",
        exampleTitle: "Good class boundary",
        example:
          "A DatabaseReader can expose operations such as open(), close(), getRecord() and getNextRecord() while hiding the actual database implementation.",
        code: `public class DatabaseReader {

    private DatabaseConnection connection;

    public void open(String name) {
        connection = connect(name);
    }

    public void close() {
        if (connection != null) {
            connection.close();
            connection = null;
        }
    }

    public String getRecord(int key) {
        ensureOpen();
        return connection.read(key);
    }

    private void ensureOpen() {
        if (connection == null) {
            throw new IllegalStateException("Database is closed");
        }
    }

    private DatabaseConnection connect(String name) {
        // Hidden implementation.
        return new DatabaseConnection(name);
    }
}`,
        mistakes: [
          "Huge classes with unrelated responsibilities.",
          "Public fields.",
          "Large public APIs.",
          "High coupling between classes.",
          "Putting platform-specific code everywhere.",
          "No validation or error strategy.",
        ],
        interview: [
          "What makes a class maintainable?",
          "Why minimize public interfaces?",
          "What is coupling?",
          "Why should implementation details be hidden?",
        ],
      },

      {
        id: "object-design-process",
        title: "Designing with Objects",
        shortTitle: "OO Design Process",
        category: "System Design",
        icon: Workflow,
        summary:
          "Object-oriented design moves from requirements to classes, responsibilities, collaborations and an object model.",
        theory: [
          "The book describes an iterative design process rather than attempting to produce a perfect design in one pass.",
          "A typical process includes analysis, a statement of work, requirements gathering, UI prototyping, identifying classes, assigning responsibilities, determining collaborations and creating a high-level model.",
          "CRC cards can be used to explore Class, Responsibilities and Collaborators before committing to detailed implementation.",
          "The blackjack case study demonstrates discovering classes such as Card, Deck, Hand, Player and Dealer from system requirements.",
          "The resulting design can then be represented with UML class diagrams and refined through iteration.",
        ],
        keyPoints: [
          "Analyze the problem first.",
          "Gather requirements.",
          "Identify candidate classes.",
          "Assign responsibilities.",
          "Identify collaborations.",
          "Use CRC cards when useful.",
          "Model with UML.",
          "Prototype and iterate.",
        ],
        diagram: "designProcess",
        exampleTitle: "Blackjack design thinking",
        example:
          "Instead of beginning with Java classes immediately, identify domain concepts and responsibilities: Card knows its value, Deck shuffles and deals, Hand calculates its value, Player manages a hand and bet, and Dealer manages dealing.",
        code: `public class Card {
    private final String rank;
    private final String suit;

    public int getValue() {
        // Card determines its own value.
        return 0;
    }
}

public class Deck {
    public void shuffle() {
    }

    public Card deal() {
        return null;
    }
}

public class Hand {
    public int getValue() {
        return 0;
    }
}

public class Player {
    private Hand hand;

    public Hand getHand() {
        return hand;
    }
}`,
        mistakes: [
          "Starting with database tables instead of responsibilities.",
          "Starting with implementation before understanding requirements.",
          "Assigning too many responsibilities to one class.",
          "Skipping iterative design.",
        ],
        interview: [
          "What are CRC cards?",
          "How do you identify classes from requirements?",
          "What is collaboration between classes?",
          "Why should OO design be iterative?",
        ],
      },

      {
        id: "coupling-cohesion",
        title: "Coupling, Cohesion and Maintainability",
        shortTitle: "Coupling & Cohesion",
        category: "Design Quality",
        icon: Network,
        summary:
          "Maintainable OO systems try to keep responsibilities focused and dependencies controlled.",
        theory: [
          "Coupling describes how strongly classes depend on each other. High coupling means changes in one class are more likely to require changes elsewhere.",
          "The book emphasizes minimizing coupling because changes to a public interface can ripple through every class that uses it.",
          "Cohesion concerns how closely related the responsibilities within one class are. A class focused on a clear purpose is generally easier to understand and maintain.",
          "Encapsulation and abstraction help reduce unnecessary dependencies because clients interact with stable public contracts instead of internal structures.",
          "Iteration and interface testing help reveal whether the current boundaries are appropriate.",
        ],
        keyPoints: [
          "Low coupling reduces ripple effects.",
          "Focused responsibilities improve cohesion.",
          "Stable public interfaces improve maintainability.",
          "Encapsulation reduces dependency on implementation.",
          "Refactoring boundaries is part of iterative design.",
        ],
        diagram: "coupling",
        exampleTitle: "Reducing direct dependencies",
        example:
          "Checkout should depend on PaymentProcessor rather than directly constructing CardGateway, BankGateway and WalletGateway itself.",
        code: `public class Checkout {
    private final PaymentProcessor paymentProcessor;

    public Checkout(PaymentProcessor paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    public boolean pay(double amount) {
        return paymentProcessor.pay(amount);
    }
}

// The concrete implementation can change
// without changing Checkout.`,
        mistakes: [
          "Constructing every dependency internally.",
          "Passing large internal objects around everywhere.",
          "Changing public APIs unnecessarily.",
          "Combining unrelated responsibilities.",
        ],
        interview: [
          "What is coupling?",
          "What is cohesion?",
          "Why does low coupling help maintainability?",
          "How do interfaces reduce coupling?",
        ],
      },

      {
        id: "error-handling",
        title: "Error Handling in OO Design",
        shortTitle: "Error Handling",
        category: "Advanced Concepts",
        icon: ShieldCheck,
        summary:
          "Classes should deliberately define how invalid situations and failures are detected and handled.",
        theory: [
          "The book discusses several strategies: ignoring problems, detecting problems and aborting, detecting and recovering, and throwing exceptions.",
          "Ignoring a known error condition can leave the system in an unstable or incorrect state.",
          "Recovery is useful when a safe and meaningful recovery action exists. Arbitrarily changing a value just to avoid an exception is not necessarily a valid solution.",
          "Exceptions allow the code detecting a problem to transfer control to code designed to handle that problem.",
          "Error handling should be considered during class design rather than added only after the implementation is complete.",
        ],
        keyPoints: [
          "Do not silently ignore known failures.",
          "Validate inputs and object state.",
          "Recover only when recovery is meaningful.",
          "Use exceptions for exceptional conditions where appropriate.",
          "Design error behavior as part of the class contract.",
        ],
        diagram: "errors",
        exampleTitle: "Safe division",
        example:
          "A Calculator object can reject division by zero rather than allowing an invalid operation to silently continue.",
        code: `public class Calculator {

    public double divide(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException(
                "Cannot divide by zero"
            );
        }

        return a / b;
    }
}

try {
    Calculator calculator = new Calculator();
    System.out.println(calculator.divide(10, 0));
} catch (ArithmeticException e) {
    System.out.println("Handled: " + e.getMessage());
}`,
        mistakes: [
          "Catching every exception and doing nothing.",
          "Using exceptions to hide ordinary control flow.",
          "Leaving objects partially initialized.",
          "Recovering with arbitrary values that violate business rules.",
        ],
        interview: [
          "Why should error handling be designed into a class?",
          "What is an exception?",
          "When is recovery appropriate?",
          "Why is silently ignoring errors dangerous?",
        ],
      },

      {
        id: "deep-shallow-copy",
        title: "Object Copying: Shallow vs Deep",
        shortTitle: "Copying Objects",
        category: "Advanced Concepts",
        icon: Copy,
        summary:
          "Copying objects becomes important when objects contain references to other objects.",
        theory: [
          "A primitive value can usually be copied directly, but an object can contain references to other objects.",
          "A shallow copy duplicates the outer object while retaining references to the same nested objects.",
          "A deep copy creates independent copies of referenced objects as well.",
          "The correct strategy depends on the intended ownership and sharing semantics of the design.",
          "Comparing objects also requires a clear definition of equality. Comparing references is different from comparing logical state.",
        ],
        keyPoints: [
          "Shallow copy may share nested objects.",
          "Deep copy recursively duplicates referenced objects.",
          "References change the meaning of copying.",
          "Object equality should represent the desired notion of sameness.",
          "Copying can have performance and memory implications.",
        ],
        diagram: "copying",
        exampleTitle: "Nested Address object",
        example:
          "If two Person objects share the same Address reference after a shallow copy, changing the address through one object can affect the other.",
        code: `public class Address {
    String city;

    public Address(String city) {
        this.city = city;
    }
}

public class Person {
    String name;
    Address address;

    public Person(String name, Address address) {
        this.name = name;
        this.address = address;
    }
}

// Shallow-copy style:
// newPerson.address == original.address

// Deep-copy idea:
// newPerson.address = new Address(
//     original.address.city
// );`,
        mistakes: [
          "Assuming copying an object reference copies the entire object graph.",
          "Using reference equality when logical equality is required.",
          "Deep-copying everything without considering cost or ownership.",
        ],
        interview: [
          "What is a shallow copy?",
          "What is a deep copy?",
          "Why do references make copying complicated?",
          "What is the difference between identity and equality?",
        ],
      },

      {
        id: "frameworks-contracts",
        title: "Frameworks, Contracts and Reuse",
        shortTitle: "Frameworks",
        category: "Reuse & Contracts",
        icon: Workflow,
        summary:
          "Frameworks establish reusable structure and contracts that allow different components to work together.",
        theory: [
          "A framework provides a reusable structure into which application-specific behavior can be plugged.",
          "The book connects frameworks with standardization and plug-and-play development.",
          "A contract specifies what an implementation must provide. A framework can rely on that contract instead of knowing every implementation.",
          "Interfaces and abstract classes can establish these contracts.",
          "This architecture supports reusable components because new implementations can conform to an existing contract without rewriting the framework.",
        ],
        keyPoints: [
          "Framework = reusable structure.",
          "Contract = required behavior.",
          "Plug-in point = location where another implementation can be substituted.",
          "Interfaces and abstract classes can define contracts.",
          "Reuse is stronger when boundaries are stable.",
        ],
        diagram: "framework",
        exampleTitle: "Payment framework",
        example:
          "Checkout acts as the framework-level consumer. Different PaymentProcessor implementations can plug into it.",
        code: `public interface PaymentProcessor {
    boolean pay(double amount);
}

public class Checkout {
    private final PaymentProcessor processor;

    public Checkout(PaymentProcessor processor) {
        this.processor = processor;
    }

    public boolean purchase(double amount) {
        return processor.pay(amount);
    }
}

// Plug-in implementations:
//
// CardProcessor
// BankProcessor
// WalletProcessor`,
        mistakes: [
          "Making the framework depend on every concrete implementation.",
          "Changing contracts frequently.",
          "Creating abstractions that do not represent stable behavior.",
        ],
        interview: [
          "What is a framework?",
          "What is a contract in OO design?",
          "How do interfaces enable plug-in points?",
        ],
      },

      {
        id: "uml",
        title: "UML Class Diagrams",
        shortTitle: "UML",
        category: "Modeling",
        icon: GitBranch,
        summary:
          "UML class diagrams provide a visual model of classes, attributes, methods and relationships.",
        theory: [
          "The book uses UML as a modeling aid rather than treating UML notation itself as the definition of OO skill.",
          "A basic class diagram contains the class name, attributes and methods.",
          "Visibility can be represented using symbols such as + for public, - for private and # for protected.",
          "Inheritance, interfaces, composition, aggregation, association and cardinality can be represented in class diagrams.",
          "The purpose of the diagram is to communicate the object model and relationships before or alongside implementation.",
        ],
        keyPoints: [
          "Class name.",
          "Attributes.",
          "Methods.",
          "Visibility.",
          "Inheritance.",
          "Interfaces.",
          "Composition.",
          "Aggregation.",
          "Association.",
          "Cardinality.",
        ],
        diagram: "uml",
        exampleTitle: "Employee UML model",
        example:
          "Employee owns private state and exposes public operations. Payroll collaborates with Employee instead of directly accessing Employee's private fields.",
        code: `public class Employee {
    private String name;
    private double salary;

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}

public class Payroll {
    public double calculatePay(Employee employee) {
        return employee.getSalary();
    }
}`,
        mistakes: [
          "Treating UML notation knowledge as a substitute for OO design.",
          "Creating diagrams that do not match the intended responsibilities.",
          "Adding every implementation detail to the diagram.",
        ],
        interview: [
          "What is UML?",
          "What does + mean in a UML class diagram?",
          "What does - mean?",
          "How is inheritance represented?",
          "What is cardinality?",
        ],
      },
    ],
    []
  );

  const currentTopic = oopTopics[selectedTopic];

  const previousTopic = () => {
    setSelectedTopic((previous) =>
      previous === 0 ? oopTopics.length - 1 : previous - 1
    );
  };

  const nextTopic = () => {
    setSelectedTopic((previous) =>
      previous === oopTopics.length - 1 ? 0 : previous + 1
    );
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentTopic.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  return (
    <div className="relative min-h-screen bg-[#f6f4ee] px-4 py-8 text-[#18181b] md:px-8 selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed -top-40 left-1/4 h-96 w-96 rounded-full bg-orange-500/[0.04] blur-[140px]" />
      <div className="pointer-events-none fixed top-1/2 -right-20 h-96 w-96 rounded-full bg-amber-500/[0.04] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <header className="mb-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goBack()}
                className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white/80 px-4 py-2.5 text-xs font-bold text-stone-700 transition-all hover:border-orange-300 hover:text-[#f97316] shadow-xs backdrop-blur-md active:scale-95 cursor-pointer"
                title="Go back to previous page"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/learning")}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-semibold text-stone-500 hover:text-stone-900 transition cursor-pointer"
                title="Jump to Curriculum Overview"
              >
                <span>Curriculum Overview</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              {SHOW_NOVA_AI && (
                <button
                  type="button"
                  onClick={() => setShowAiTutor((value) => !value)}
                  className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Sparkles size={15} />
                  {showAiTutor ? "Close Nova AI" : "Ask Nova AI"}
                </button>
              )}
              <Logo size="xs" suffix="OOPS" />
            </div>
          </div>

          <div className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ea580c]">
            <BookOpen size={14} />
            Prepspaces / Learning / OOP
          </div>

          <h1 className="max-w-5xl text-4xl font-extrabold tracking-tight text-[#18181b] md:text-6xl">
            Object-Oriented Programming
          </h1>

          <p className="mt-4 max-w-4xl text-base leading-8 text-stone-600">
            A deep conceptual OOP course covering objects, classes,
            encapsulation, abstraction, interfaces, inheritance, polymorphism,
            composition, constructors, scope, object design, UML,
            responsibilities, coupling, frameworks and reusable contracts.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Objects",
              "Classes",
              "Encapsulation",
              "Abstraction",
              "Inheritance",
              "Polymorphism",
              "Composition",
              "Interfaces",
              "UML",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#e7e3da] bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        {/* NOVA AI TUTOR - Black feature card for high contrast */}
        {SHOW_NOVA_AI && showAiTutor && (
          <section className="mb-8 rounded-2xl border border-[#27272a] bg-[#18181b] p-5 shadow-2xl backdrop-blur-2xl md:p-8 text-white">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#f97316]" /> Nova AI
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white">
                  Ask Nova AI &mdash; {currentTopic.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowAiTutor(false)}
                className="rounded-xl border border-[#27272a] bg-[#222226] p-2 text-stone-300 transition-all hover:bg-[#2a2a2f] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <LearningRo currentTopic={currentTopic.id} />
          </section>
        )}

        {/* MAIN */}
        <section className="overflow-hidden rounded-3xl border border-[#e7e3da] bg-white/80 shadow-sm backdrop-blur-xl">
          {/* COURSE TITLE */}
          <div className="border-b border-[#e7e3da] bg-[#faf8f4]/60 px-6 py-7 md:px-9">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ea580c]">
                  OOP Concept Library
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight text-[#18181b] md:text-5xl">
                  Learn OOP Properly
                </h2>

                <p className="mt-3 max-w-3xl text-stone-600">
                  Concepts are organized around the object-oriented thought
                  process, design responsibilities and reusable abstractions.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50/80 px-5 py-3 shadow-sm backdrop-blur-md">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-600">
                  Current concept
                </p>
                <p className="mt-1 font-mono text-2xl font-black text-[#ea580c]">
                  {topicNumber}/{String(oopTopics.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[300px_1fr]">
            {/* SIDEBAR */}
            <aside className="border-b border-[#e7e3da] bg-[#faf8f4]/40 p-4 md:border-b-0 md:border-r">
              <div className="mb-4 px-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-700">
                  OOP Concepts
                </h3>
                <p className="mt-1 text-xs leading-5 text-stone-500">
                  Fundamentals → design → advanced concepts
                </p>
              </div>

              <div className="space-y-1.5">
                {oopTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  const active = selectedTopic === index;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(index)}
                      className={`group flex w-full items-start gap-3 rounded-xl px-3.5 py-3 text-left transition-all ${
                        active
                          ? "bg-[#f97316] text-white font-bold shadow-[0_4px_16px_rgba(249,115,22,0.25)]"
                          : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-stone-100 text-stone-600 group-hover:bg-orange-50 group-hover:text-[#ea580c]"
                        }`}
                      >
                        <Icon size={15} />
                      </span>

                      <span className="min-w-0">
                        <span className="flex items-center gap-2">
                          <span className={`font-mono text-[10px] ${active ? "text-white/80" : "text-stone-400"}`}>
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm font-semibold">
                            {topic.shortTitle}
                          </span>
                        </span>

                        <span
                          className={`mt-1 block text-[10px] ${
                            active
                              ? "text-orange-100 font-medium"
                              : "text-stone-400"
                          }`}
                        >
                          {topic.category}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* CONTENT */}
            <main className="min-w-0 p-5 md:p-9">
              {/* TOP META */}
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#e7e3da] bg-white px-3.5 py-1 font-mono text-xs text-stone-700 shadow-sm">
                    Concept {topicNumber} / {oopTopics.length}
                  </span>

                  <span className="rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-orange-700 shadow-sm">
                    JAVA
                  </span>

                  <span className="rounded-full border border-[#e7e3da] bg-white px-3.5 py-1 text-xs font-semibold text-stone-600 shadow-sm">
                    {currentTopic.category}
                  </span>
                </div>

                <div className="font-mono text-xs font-semibold text-stone-400">
                  Deep Theory
                </div>
              </div>

              {/* TITLE */}
              <div className="max-w-5xl">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#18181b] md:text-5xl">
                  {currentTopic.title}
                </h2>

                <p className="mt-4 text-lg leading-8 text-stone-600">
                  {currentTopic.summary}
                </p>
              </div>

              {/* ORIGINAL VISUAL DIAGRAM */}
              <div className="mt-8">
                <ConceptDiagram type={currentTopic.diagram} />
              </div>

              {/* THEORY */}
              <section className="mt-8 rounded-2xl border border-[#e7e3da] bg-white/90 shadow-sm backdrop-blur-md">
                <div className="border-b border-[#e7e3da] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <BookOpen size={17} className="text-[#f97316]" />
                    <h3 className="font-bold text-[#18181b]">In-depth theory</h3>
                  </div>
                </div>

                <div className="space-y-5 px-5 py-6 md:px-7">
                  {currentTopic.theory.map((paragraph, index) => (
                    <div
                      key={index}
                      className="flex gap-4 text-[15px] leading-8 text-stone-700"
                    >
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#f97316] shadow-sm shadow-orange-500/50" />
                      <p>{paragraph}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* KEY POINTS */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white/90 shadow-sm backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setShowDetails((value) => !value)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-[#f97316]" />
                    <h3 className="font-bold text-[#18181b]">Important points</h3>
                  </div>

                  {showDetails ? (
                    <ChevronUp size={18} className="text-stone-500" />
                  ) : (
                    <ChevronDown size={18} className="text-stone-500" />
                  )}
                </button>

                {showDetails && (
                  <div className="grid border-t border-[#e7e3da] md:grid-cols-2">
                    {currentTopic.keyPoints.map((point, index) => (
                      <div
                        key={index}
                        className="flex gap-3 border-b border-[#e7e3da] px-5 py-4 text-sm leading-6 text-stone-700 md:even:border-l md:even:border-[#e7e3da]"
                      >
                        <span className="font-mono text-xs font-bold text-[#ea580c]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* EXAMPLE */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white/90 shadow-sm backdrop-blur-md">
                <div className="border-b border-[#e7e3da] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Lightbulb size={17} className="text-[#f97316]" />
                    <h3 className="font-bold text-[#18181b]">{currentTopic.exampleTitle}</h3>
                  </div>
                </div>

                <div className="px-5 py-6">
                  <p className="max-w-4xl text-[15px] leading-8 text-stone-700">
                    {currentTopic.example}
                  </p>
                </div>
              </section>

              {/* JAVA CODE - Black feature card for high contrast */}
              <section className="mt-6 overflow-hidden rounded-2xl border border-[#27272a] bg-[#18181b] shadow-xl text-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#27272a] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Code2 size={17} className="text-[#f97316]" />
                    <h3 className="font-bold text-white">Java implementation example</h3>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowCode((value) => !value)}
                      className="rounded-lg border border-[#27272a] bg-[#222226] px-3 py-1.5 text-xs font-semibold text-stone-300 transition-all hover:bg-[#2a2a2f] hover:text-white"
                    >
                      {showCode ? "Hide code" : "Show code"}
                    </button>

                    {showCode && (
                      <button
                        type="button"
                        onClick={copyCode}
                        className="flex items-center gap-2 rounded-lg bg-[#f97316] hover:bg-[#ea580c] px-3.5 py-1.5 text-xs font-bold text-white shadow-md transition-all active:scale-95"
                      >
                        <Copy size={14} />
                        {copied ? "Copied" : "Copy"}
                      </button>
                    )}
                  </div>
                </div>

                {showCode && (
                  <pre className="overflow-x-auto p-5 text-[13px] leading-7 text-emerald-400 md:p-7 font-mono">
                    <code>{currentTopic.code}</code>
                  </pre>
                )}
              </section>

              {/* COMMON MISTAKES */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white/90 shadow-sm backdrop-blur-md">
                <div className="border-b border-[#e7e3da] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <RefreshCw size={17} className="text-[#f97316]" />
                    <h3 className="font-bold text-[#18181b]">Common mistakes</h3>
                  </div>
                </div>

                <div className="divide-y divide-[#e7e3da]">
                  {currentTopic.mistakes.map((mistake, index) => (
                    <div
                      key={index}
                      className="flex gap-4 px-5 py-4 text-sm leading-7 text-stone-700"
                    >
                      <span className="font-mono text-xs font-bold text-[#ea580c]">
                        M{index + 1}
                      </span>
                      <span>{mistake}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* INTERVIEW */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white/90 shadow-sm backdrop-blur-md">
                <div className="border-b border-[#e7e3da] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={17} className="text-[#f97316]" />
                    <h3 className="font-bold text-[#18181b]">Interview questions</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2">
                  {currentTopic.interview.map((question, index) => (
                    <div
                      key={index}
                      className="border-b border-[#e7e3da] px-5 py-4 text-sm leading-6 text-stone-700 md:even:border-l md:even:border-[#e7e3da]"
                    >
                      <span className="mr-3 font-mono text-xs font-bold text-[#ea580c]">
                        Q{index + 1}
                      </span>
                      {question}
                    </div>
                  ))}
                </div>
              </section>

              {/* NAVIGATION */}
              <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-[#e7e3da] pt-7">
                <button
                  type="button"
                  onClick={previousTopic}
                  className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-5 py-3 text-sm font-bold text-stone-700 transition-all hover:border-orange-300 hover:text-[#f97316] shadow-sm"
                >
                  <ArrowLeft size={16} />
                  Previous Concept
                </button>

                <button
                  type="button"
                  onClick={nextTopic}
                  className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  Next Concept
                  <ArrowRight size={16} />
                </button>
              </div>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* ORIGINAL STATIC DIAGRAMS                                                    */
/* No animation dependency.                                                    */
/* These diagrams are original UI illustrations rather than copied book art.   */
/* -------------------------------------------------------------------------- */

const ConceptDiagram = ({ type }) => {
  const diagrams = {
    object: (
      <DiagramFrame
        title="Object model"
        subtitle="State + behavior + identity"
      >
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <DiagramBox
            title="BankAccount"
            items={[
              "identity: ACC-102",
              "balance: 2500",
              "deposit()",
              "withdraw()",
            ]}
          />

          <DiagramArrow label="message" />

          <DiagramBox
            title="Client Object"
            items={[
              "request service",
              "does not edit",
              "internal balance",
              "directly",
            ]}
          />
        </div>
      </DiagramFrame>
    ),

    procedural: (
      <DiagramFrame
        title="Procedural vs OO"
        subtitle="Where data and behavior live"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <DiagramLabel>Procedural organization</DiagramLabel>
            <div className="space-y-3">
              <DiagramBox
                title="Shared / separate data"
                items={["Employee data", "Salary", "Address"]}
              />
              <div className="flex justify-center text-[#f97316]">↓</div>
              <DiagramBox
                title="Functions"
                items={["calculateSalary()", "print()", "update()"]}
              />
            </div>
          </div>

          <div>
            <DiagramLabel>Object-oriented organization</DiagramLabel>
            <DiagramBox
              title="Employee Object"
              items={[
                "name",
                "salary",
                "address",
                "calculateSalary()",
                "print()",
                "updateAddress()",
              ]}
              highlighted
            />
          </div>
        </div>
      </DiagramFrame>
    ),

    state: (
      <DiagramFrame
        title="Object state"
        subtitle="Same class, different object state"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <DiagramBox
            title="Employee #1"
            items={["name = John", "age = 30", "department = IT"]}
          />
          <DiagramBox
            title="Employee #2"
            items={["name = Mary", "age = 27", "department = HR"]}
          />
        </div>
      </DiagramFrame>
    ),

    class: (
      <DiagramFrame
        title="Class → objects"
        subtitle="A class defines the structure; instances hold individual state"
      >
        <div className="flex flex-col items-center gap-5">
          <DiagramBox
            title="class Car"
            items={["model", "speed", "accelerate()", "getSpeed()"]}
            highlighted
          />

          <DiagramArrow label="instantiate" />

          <div className="grid w-full gap-4 md:grid-cols-2">
            <DiagramBox title="car1" items={["model = Sedan", "speed = 20"]} />
            <DiagramBox title="car2" items={["model = SUV", "speed = 0"]} />
          </div>
        </div>
      </DiagramFrame>
    ),

    message: (
      <DiagramFrame
        title="Object-to-object communication"
        subtitle="Objects request behavior instead of directly changing internal state"
      >
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center">
          <DiagramBox
            title="Payroll"
            items={["calculateTax()", "needs salary"]}
          />

          <DiagramArrow label="getSalary()" />

          <DiagramBox
            title="Employee"
            items={["private salary", "getSalary()"]}
            highlighted
          />
        </div>
      </DiagramFrame>
    ),

    encapsulation: (
      <DiagramFrame
        title="Encapsulation boundary"
        subtitle="Public operations surround private implementation"
      >
        <div className="mx-auto max-w-2xl rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50/40 p-5">
          <div className="mb-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#ea580c]">
            Account object
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <DiagramBox
              title="Public interface"
              items={["deposit()", "withdraw()", "getBalance()"]}
              highlighted
            />

            <DiagramBox
              title="Private implementation"
              items={["balance", "validation", "internal rules"]}
            />
          </div>
        </div>
      </DiagramFrame>
    ),

    interface: (
      <DiagramFrame
        title="Interface vs implementation"
        subtitle="Clients depend on the service contract"
      >
        <div className="flex flex-col items-center gap-5">
          <DiagramBox
            title="Client"
            items={["checkout()", "does not know gateway details"]}
          />

          <DiagramArrow label="PaymentProcessor.pay()" />

          <div className="grid w-full gap-4 md:grid-cols-3">
            <DiagramBox title="Card" items={["card API", "validation"]} />
            <DiagramBox title="Bank" items={["bank API", "authorization"]} />
            <DiagramBox title="Wallet" items={["wallet API", "token"]} />
          </div>
        </div>
      </DiagramFrame>
    ),

    abstraction: (
      <DiagramFrame
        title="Abstraction"
        subtitle="Expose the meaningful request, hide operational detail"
      >
        <div className="flex flex-col items-center gap-5">
          <DiagramBox
            title='High-level request'
            items={['"Take me to the airport"']}
            highlighted
          />

          <DiagramArrow label="abstract contract" />

          <div className="grid w-full gap-4 md:grid-cols-3">
            <DiagramBox title="City A" items={["route algorithm"]} />
            <DiagramBox title="City B" items={["route algorithm"]} />
            <DiagramBox title="City C" items={["route algorithm"]} />
          </div>
        </div>
      </DiagramFrame>
    ),

    constructor: (
      <DiagramFrame
        title="Object construction"
        subtitle="Creation → constructor → stable initial state"
      >
        <div className="flex flex-col items-center gap-4">
          <DiagramBox title="new Student(...)" items={["allocate object"]} />
          <DiagramArrow label="constructor" />
          <DiagramBox
            title="Student"
            items={["validate input", "initialize fields", "ready state"]}
            highlighted
          />
        </div>
      </DiagramFrame>
    ),

    scope: (
      <DiagramFrame
        title="Scope and ownership"
        subtitle="Local, instance and class-level state"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <DiagramBox
            title="Local"
            items={["method execution", "temporary"]}
          />
          <DiagramBox
            title="Instance"
            items={["one copy", "per object"]}
            highlighted
          />
          <DiagramBox
            title="Static"
            items={["one shared copy", "per class"]}
          />
        </div>
      </DiagramFrame>
    ),

    overload: (
      <DiagramFrame
        title="Method overloading"
        subtitle="Same conceptual operation, different parameter lists"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <DiagramBox title="print(String)" items={["one text value"]} />
          <DiagramBox
            title="print(String, int)"
            items={["text", "number of copies"]}
          />
          <DiagramBox title="print(int)" items={["numeric value"]} />
        </div>
      </DiagramFrame>
    ),

    inheritance: (
      <DiagramFrame
        title="Inheritance hierarchy"
        subtitle="Generalization → specialization"
      >
        <div className="flex flex-col items-center gap-4">
          <DiagramBox
            title="Shape"
            items={["getArea()", "common abstraction"]}
            highlighted
          />

          <DiagramArrow label="extends" />

          <div className="grid w-full gap-4 md:grid-cols-3">
            <DiagramBox title="Circle" items={["radius", "circle area"]} />
            <DiagramBox title="Rectangle" items={["width", "height", "area"]} />
            <DiagramBox title="Triangle" items={["sides", "triangle area"]} />
          </div>
        </div>
      </DiagramFrame>
    ),

    polymorphism: (
      <DiagramFrame
        title="Polymorphism"
        subtitle="Same message → behavior determined by concrete object"
      >
        <div className="flex flex-col items-center gap-5">
          <DiagramBox
            title="Shape reference"
            items={["shape.getArea()"]}
            highlighted
          />

          <div className="grid w-full gap-4 md:grid-cols-3">
            <DiagramBox
              title="Circle"
              items={["getArea()", "π × r²"]}
            />
            <DiagramBox
              title="Rectangle"
              items={["getArea()", "width × height"]}
            />
            <DiagramBox
              title="Triangle"
              items={["getArea()", "triangle formula"]}
            />
          </div>
        </div>
      </DiagramFrame>
    ),

    composition: (
      <DiagramFrame
        title="Composition"
        subtitle="A larger object is assembled from collaborating objects"
      >
        <div className="flex flex-col items-center gap-5">
          <DiagramBox
            title="Car"
            items={["start()", "stop()", "drive()"]}
            highlighted
          />

          <div className="grid w-full gap-4 md:grid-cols-3">
            <DiagramBox title="Engine" items={["start()", "stop()"]} />
            <DiagramBox title="Steering" items={["turnLeft()", "turnRight()"]} />
            <DiagramBox title="Brakes" items={["apply()"]} />
          </div>
        </div>
      </DiagramFrame>
    ),

    inheritanceComposition: (
      <DiagramFrame
        title="Is-a vs Has-a"
        subtitle="Choose the relationship that matches the domain meaning"
      >
        <div className="grid gap-7 md:grid-cols-2">
          <div>
            <DiagramLabel>Inheritance — IS-A</DiagramLabel>
            <div className="flex flex-col items-center gap-3">
              <DiagramBox title="Shape" items={["general concept"]} />
              <DiagramArrow label="is-a" />
              <DiagramBox title="Circle" items={["specific shape"]} />
            </div>
          </div>

          <div>
            <DiagramLabel>Composition — HAS-A</DiagramLabel>
            <div className="flex flex-col items-center gap-3">
              <DiagramBox title="Car" items={["complete object"]} />
              <DiagramArrow label="has-a" />
              <DiagramBox title="Engine" items={["component"]} />
            </div>
          </div>
        </div>
      </DiagramFrame>
    ),

    abstractClass: (
      <DiagramFrame
        title="Abstract class"
        subtitle="Shared abstraction + optional shared implementation"
      >
        <div className="flex flex-col items-center gap-4">
          <DiagramBox
            title="abstract Shape"
            items={["color", "describe()", "abstract getArea()"]}
            highlighted
          />

          <DiagramArrow label="extends" />

          <div className="grid w-full gap-4 md:grid-cols-2">
            <DiagramBox title="Circle" items={["radius", "getArea()"]} />
            <DiagramBox
              title="Rectangle"
              items={["width", "height", "getArea()"]}
            />
          </div>
        </div>
      </DiagramFrame>
    ),

    interfaceContract: (
      <DiagramFrame
        title="Interface as contract"
        subtitle="Multiple implementations conform to one behavior contract"
      >
        <div className="flex flex-col items-center gap-5">
          <DiagramBox
            title="NotificationSender"
            items={["send(recipient, message)"]}
            highlighted
          />

          <DiagramArrow label="implements" />

          <div className="grid w-full gap-4 md:grid-cols-2">
            <DiagramBox title="EmailNotifier" items={["send()"]} />
            <DiagramBox title="SmsNotifier" items={["send()"]} />
          </div>
        </div>
      </DiagramFrame>
    ),

    responsibility: (
      <DiagramFrame
        title="Responsibility-driven design"
        subtitle="Give behavior to the object that has the relevant knowledge"
      >
        <div className="flex flex-col items-center gap-5">
          <DiagramBox
            title="Shape"
            items={["print()", "knows its own representation"]}
            highlighted
          />

          <DiagramArrow label="handles its behavior" />

          <DiagramBox
            title="Application"
            items={["asks shape to print", "does not know shape internals"]}
          />
        </div>
      </DiagramFrame>
    ),

    classDesign: (
      <DiagramFrame
        title="Healthy class boundary"
        subtitle="Public contract outside, implementation inside"
      >
        <div className="mx-auto max-w-3xl rounded-2xl border border-orange-200 bg-orange-50/40 p-5">
          <div className="grid gap-5 md:grid-cols-2">
            <DiagramBox
              title="Public interface"
              items={["open()", "close()", "getRecord()"]}
              highlighted
            />

            <DiagramBox
              title="Hidden implementation"
              items={[
                "database connection",
                "validation",
                "driver details",
                "internal helpers",
              ]}
            />
          </div>
        </div>
      </DiagramFrame>
    ),

    designProcess: (
      <DiagramFrame
        title="OO design process"
        subtitle="An iterative path from requirements to object model"
      >
        <div className="grid gap-3 md:grid-cols-4">
          {[
            "Analyze",
            "Requirements",
            "Identify Classes",
            "Responsibilities",
            "Collaborations",
            "CRC Cards",
            "UML Model",
            "Prototype / Iterate",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-xl border border-[#e7e3da] bg-stone-50/80 p-4 shadow-sm"
            >
              <div className="font-mono text-xs font-bold text-[#ea580c]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 text-sm font-semibold text-stone-800">
                {step}
              </div>
            </div>
          ))}
        </div>
      </DiagramFrame>
    ),

    coupling: (
      <DiagramFrame
        title="Coupling"
        subtitle="Depend on stable abstractions to reduce ripple effects"
      >
        <div className="grid gap-7 md:grid-cols-2">
          <div>
            <DiagramLabel>Higher coupling</DiagramLabel>
            <div className="space-y-3">
              <DiagramBox title="Checkout" items={["CardGateway", "BankGateway", "WalletGateway"]} />
              <DiagramArrow label="many direct dependencies" />
            </div>
          </div>

          <div>
            <DiagramLabel>Lower coupling</DiagramLabel>
            <div className="space-y-3">
              <DiagramBox title="Checkout" items={["PaymentProcessor"]} highlighted />
              <DiagramArrow label="one stable contract" />
              <DiagramBox title="Implementations" items={["Card", "Bank", "Wallet"]} />
            </div>
          </div>
        </div>
      </DiagramFrame>
    ),

    errors: (
      <DiagramFrame
        title="Error-handling flow"
        subtitle="Detect → communicate → handle"
      >
        <div className="flex flex-col items-center gap-4">
          <DiagramBox title="Operation" items={["divide(a, b)"]} />
          <DiagramArrow label="invalid condition" />
          <DiagramBox
            title="Exception"
            items={["ArithmeticException", "meaningful message"]}
            highlighted
          />
          <DiagramArrow label="catch" />
          <DiagramBox title="Handler" items={["recover", "report", "terminate safely"]} />
        </div>
      </DiagramFrame>
    ),

    copying: (
      <DiagramFrame
        title="Object copying"
        subtitle="References determine whether nested objects are shared"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <DiagramLabel>Shallow copy</DiagramLabel>
            <DiagramBox
              title="Person A / Person B"
              items={["two outer objects", "same Address reference"]}
            />
          </div>

          <div>
            <DiagramLabel>Deep copy</DiagramLabel>
            <DiagramBox
              title="Person A / Person B"
              items={["two outer objects", "two Address objects"]}
              highlighted
            />
          </div>
        </div>
      </DiagramFrame>
    ),

    framework: (
      <DiagramFrame
        title="Framework + plug-in contracts"
        subtitle="Stable contract enables interchangeable implementations"
      >
        <div className="flex flex-col items-center gap-5">
          <DiagramBox
            title="Framework / Checkout"
            items={["purchase()", "depends on contract"]}
            highlighted
          />

          <DiagramArrow label="contract" />

          <div className="grid w-full gap-4 md:grid-cols-3">
            <DiagramBox title="Card" items={["implementation"]} />
            <DiagramBox title="Bank" items={["implementation"]} />
            <DiagramBox title="Wallet" items={["implementation"]} />
          </div>
        </div>
      </DiagramFrame>
    ),

    uml: (
      <DiagramFrame
        title="UML class diagram"
        subtitle="Name + attributes + methods + relationships"
      >
        <div className="mx-auto max-w-md overflow-hidden rounded-xl border border-[#27272a] bg-[#18181b] text-white">
          <div className="border-b border-[#27272a] p-4 text-center font-bold text-[#f97316]">
            Employee
          </div>

          <div className="border-b border-[#27272a] p-4 font-mono text-xs text-stone-300">
            - name : String
            <br />
            - salary : double
          </div>

          <div className="p-4 font-mono text-xs text-stone-300">
            + getName() : String
            <br />
            + getSalary() : double
          </div>
        </div>
      </DiagramFrame>
    ),
  };

  return diagrams[type] || diagrams.object;
};

const DiagramFrame = ({ title, subtitle, children }) => (
  <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white/90 shadow-sm backdrop-blur-md">
    <div className="border-b border-[#e7e3da] bg-[#faf8f4]/60 px-5 py-4">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#ea580c]">
        Visual model
      </p>
      <h3 className="mt-1 text-lg font-bold text-[#18181b]">{title}</h3>
      <p className="mt-1 text-xs text-stone-500">{subtitle}</p>
    </div>

    <div className="p-5 md:p-8">{children}</div>
  </div>
);

const DiagramBox = ({ title, items = [], highlighted = false }) => (
  <div
    className={`rounded-xl border p-4 transition-all ${
      highlighted
        ? "border-orange-300 bg-orange-50/80 shadow-md shadow-orange-500/10"
        : "border-[#e7e3da] bg-stone-50/80"
    }`}
  >
    <div
      className={`font-mono text-xs font-bold ${
        highlighted ? "text-[#ea580c]" : "text-stone-800"
      }`}
    >
      {title}
    </div>

    {items.length > 0 && (
      <div className="mt-3 space-y-1.5">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-xs leading-5 text-stone-700"
          >
            <span className="mr-2 text-[#f97316]">•</span>
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
);

const DiagramArrow = ({ label }) => (
  <div className="flex flex-col items-center gap-1 text-[#f97316]">
    <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500">
      {label}
    </span>
    <div className="text-lg">↓</div>
  </div>
);

const DiagramLabel = ({ children }) => (
  <div className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-stone-600">
    {children}
  </div>
);

export default OOPS;