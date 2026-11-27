import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Copy,
  Check,
  Play,
  RefreshCw,
  Activity,
  Layers,
  ShieldCheck,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendSpringBootSections from "./BackendSpringBootSections";

const SPRING_LAYERS = [
  {
    id: 0,
    title: "1. DispatcherServlet",
    layer: "Spring MVC Front Controller",
    detail: "Embedded Tomcat receives POST /api/v1/students and routes it through DispatcherServlet and HandlerMapping.",
    code: "POST /api/v1/students -> StudentController.createStudent()",
  },
  {
    id: 1,
    title: "2. Controller & @Valid DTO",
    layer: "Presentation Layer",
    detail: "@RequestBody deserializes JSON into CreateStudentRequest record; Jakarta Bean Validation checks @NotBlank and @Email.",
    code: "@PostMapping public ResponseEntity<StudentResponse> createStudent(@Valid @RequestBody CreateStudentRequest req)",
  },
  {
    id: 2,
    title: "3. @Service & @Transactional",
    layer: "Application / Business Layer",
    detail: "StudentService normalizes email, checks existsByEmailIgnoreCase(email), and throws DuplicateEmailException (409) if taken.",
    code: "@Transactional public StudentResponse createStudent(CreateStudentRequest req)",
  },
  {
    id: 3,
    title: "4. JpaRepository & Entity",
    layer: "Persistence Layer (Hibernate)",
    detail: "StudentRepository.save(student) persists the @Entity with DB-level unique constraint uk_students_email.",
    code: "INSERT INTO students (full_name, email, department) VALUES (?, ?, ?)",
  },
  {
    id: 4,
    title: "5. ResponseEntity 201 Created",
    layer: "DTO Response & Location Header",
    detail: "Service maps Student entity to StudentResponse DTO (hiding internal fields); controller returns 201 Created + Location URI.",
    code: 'HTTP/1.1 201 Created | Location: /api/v1/students/1\n{ "id": 1, "fullName": "Rahul Sharma", "email": "rahul@example.com" }',
  },
];

const ARCH_PATTERNS = [
  {
    id: "layered",
    name: "Layered Architecture",
    summary: "Controller -> Service -> Repository -> Database",
    pros: "Fast to build, clear separation for conventional CRUD APIs.",
    snippet: `@Service
public class StudentService {
  private final StudentRepository repository;
  public StudentService(StudentRepository repository) {
    this.repository = repository;
  }
}`,
  },
  {
    id: "hexagonal",
    name: "Hexagonal (Ports & Adapters)",
    summary: "Core Domain + Inbound/Outbound Ports + Tech Adapters",
    pros: "Business core has zero direct dependency on JPA, PostgreSQL, or Spring MVC.",
    snippet: `// Outbound Port in Domain Core
public interface StudentRepositoryPort {
  Student save(Student student);
}
// JPA Adapter in Infrastructure
@Repository
public class JpaStudentRepositoryAdapter implements StudentRepositoryPort { ... }`,
  },
  {
    id: "clean",
    name: "Clean Architecture",
    summary: "Domain Entities -> Use Cases -> Interface Adapters -> Frameworks",
    pros: "Strict inward dependency rule protects complex domain policies.",
    snippet: `public class Enrollment {
  private boolean active = true;
  public void cancel() { this.active = false; }
}`,
  },
];

export default function BackendSpringBoot() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("tracer");
  const [layerStep, setLayerStep] = useState(0);
  const [selectedArch, setSelectedArch] = useState(ARCH_PATTERNS[0]);
  const [copiedLab, setCopiedLab] = useState(false);

  const springBootLabSnippet = `// Spring Boot 4.2.0 StudentController.java
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
  private final StudentService studentService;

  public StudentController(StudentService studentService) {
    this.studentService = studentService;
  }

  @PostMapping
  public ResponseEntity<StudentResponse> createStudent(
      @Valid @RequestBody CreateStudentRequest request) {
    StudentResponse created = studentService.createStudent(request);
    URI location = URI.create("/api/v1/students/" + created.id());
    return ResponseEntity.created(location).body(created);
  }

  @GetMapping("/{id}")
  public ResponseEntity<StudentResponse> getStudent(@PathVariable Long id) {
    return ResponseEntity.ok(studentService.getStudentById(id));
  }
}`;

  const handleCopyLab = () => {
    navigator.clipboard.writeText(springBootLabSnippet);
    setCopiedLab(true);
    setTimeout(() => setCopiedLab(false), 2000);
  };

  const quizQuestions = [
    {
      id: 1,
      question: "1. In Spring Boot 4.x, which starter dependency is used for traditional Spring MVC REST APIs?",
      options: [
        "spring-boot-starter-http",
        "spring-boot-starter-webmvc",
        "spring-boot-starter-servlet-old",
        "spring-boot-starter-tomcat-only",
      ],
      correct: 1,
      explanation: "spring-boot-starter-webmvc is the standard Spring Boot 4.x starter for Spring MVC REST APIs (replacing deprecated spring-boot-starter-web).",
    },
    {
      id: 2,
      question: "2. What three capabilities does @SpringBootApplication combine?",
      options: [
        "@Entity, @Table, and @Repository",
        "@SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan",
        "@RestController, @Service, and @Transactional",
        "@GetMapping, @PostMapping, and @Valid",
      ],
      correct: 1,
      explanation: "@SpringBootApplication combines @SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan.",
    },
    {
      id: 3,
      question: "3. Why is constructor injection preferred over field injection for required dependencies?",
      options: [
        "Dependencies are explicit, fields can be final, and unit tests can pass mocks without starting Spring",
        "Field injection is removed in Java 21",
        "Constructor injection auto-creates database tables",
        "Field injection blocks HTTP requests",
      ],
      correct: 0,
      explanation: "Constructor injection makes dependencies explicit, supports immutability, and simplifies plain JUnit/Mockito testing.",
    },
    {
      id: 4,
      question: "4. Why should JPA @Entity classes generally NOT be returned directly from REST controllers?",
      options: [
        "Spring MVC cannot serialize Java classes",
        "It can expose sensitive fields, couple the API to DB tables, and trigger lazy-loading serialization errors",
        "Entities cannot have getters",
        "DTOs are required by Maven",
      ],
      correct: 1,
      explanation: "Separating DTOs from entities protects sensitive fields, prevents over-posting, and decouples API contracts from persistence.",
    },
    {
      id: 5,
      question: "5. What is the role of DispatcherServlet in Spring MVC?",
      options: [
        "Compiles Java bytecode",
        "Central request dispatcher coordinating HandlerMapping, controllers, and message converters",
        "Manages PostgreSQL connection pooling",
        "Replaces Maven",
      ],
      correct: 1,
      explanation: "DispatcherServlet routes incoming HTTP requests through HandlerMapping to controller methods and HTTP message converters.",
    },
    {
      id: 6,
      question: "6. What is the difference between @Component and @Bean?",
      options: [
        "@Component marks a class for component scanning; @Bean on a @Configuration method registers a returned object",
        "@Bean is only for controllers",
        "They are identical",
        "@Component only works for third-party JARs",
      ],
      correct: 0,
      explanation: "@Component is placed on your own classes; @Bean registers objects returned from @Configuration methods (useful for third-party classes).",
    },
    {
      id: 7,
      question: "7. In application.yml, what does spring.jpa.hibernate.ddl-auto: validate do?",
      options: [
        "Drops and recreates all tables on restart",
        "Automatically alters production tables",
        "Verifies the database schema matches JPA entity mappings without modifying tables",
        "Disables SQL queries",
      ],
      correct: 2,
      explanation: "ddl-auto: validate checks schema compatibility without mutating tables; use Flyway or Liquibase for production migrations.",
    },
    {
      id: 8,
      question: "8. In Hexagonal Architecture, what are Ports and Adapters?",
      options: [
        "TCP sockets and USB cables",
        "Ports are interfaces at the core boundary; Adapters connect specific technologies (JPA, REST) to those ports",
        "SQL tables and DTOs",
        "Maven plugins",
      ],
      correct: 1,
      explanation: "Ports define technology-agnostic interfaces; adapters implement or invoke them for specific infrastructure.",
    },
    {
      id: 9,
      question: "9. What is the purpose of @RestControllerAdvice?",
      options: [
        "Starts embedded Tomcat",
        "Centralizes exception handling across controllers to return consistent API error responses",
        "Generates SQL migrations",
        "Injects static dependencies",
      ],
      correct: 1,
      explanation: "@RestControllerAdvice centralizes @ExceptionHandler methods for consistent error payloads across all endpoints.",
    },
    {
      id: 10,
      question: "10. Why should @Transactional NOT be held open during slow external email/API calls?",
      options: [
        "Spring Boot forbids @Transactional on services",
        "It ties up DB connections and locks during slow network I/O; use an event/outbox pattern instead",
        "Email APIs cannot run in Java 21",
        "Transactions expire in 1 ms",
      ],
      correct: 1,
      explanation: "Keep DB transactions scoped to coherent database operations to avoid exhausting connection pools.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const score = useMemo(() => {
    let s = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) s++;
    });
    return s;
  }, [selectedAnswers]);

  const currentLayer = SPRING_LAYERS[layerStep];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      <ModuleNav track="backend-engineering" currentModuleId="spring-boot" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 03
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              JAVA 21 &middot; SPRING BOOT 4.2.0 &middot; 12 LESSONS
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 03 &mdash; Java Backend Development with Spring Boot
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Implement production-structured backends using Java 21 and Spring Boot 4.2.0: controllers, services, Spring Data JPA repositories, constructor dependency injection, DTO/entity separation, validation, and centralized error handling.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-stone-200 pt-6">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum Specification</span>
            </button>

            <button
              onClick={() => setActiveTab("workbench")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === "workbench"
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Activity size={16} />
              <span>Interactive Workbenches &amp; Assessment</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === "curriculum" ? (
          <BackendSpringBootSections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("tracer")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "tracer"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Spring MVC Layer Tracer
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("arch")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "arch"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Layered vs Clean vs Hexagonal
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("lab")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "lab"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Spring Boot 4.2.0 Controller
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("quiz")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "quiz"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                4. Knowledge Assessment (10 Qs)
              </button>
            </div>

            {activeWorkbenchTab === "tracer" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Spring Boot Request Flow
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Trace POST /api/v1/students Through Spring Layers
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLayerStep((prev) => (prev + 1) % SPRING_LAYERS.length)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f97316] text-white hover:bg-orange-600 text-xs font-semibold cursor-pointer"
                    >
                      <Play size={14} />
                      <span>Next Layer</span>
                    </button>
                    <button
                      onClick={() => setLayerStep(0)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-xs font-semibold cursor-pointer"
                    >
                      <RefreshCw size={14} />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {SPRING_LAYERS.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setLayerStep(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        layerStep === idx
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : idx < layerStep
                          ? "border-emerald-200 bg-emerald-50/50 text-emerald-900"
                          : "border-stone-200 bg-stone-50 text-stone-600"
                      }`}
                    >
                      <div className="text-xs">{s.title}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="text-sm font-bold text-stone-900">
                    {currentLayer.title} &mdash; {currentLayer.layer}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700">{currentLayer.detail}</p>
                  <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">
                    {currentLayer.code}
                  </pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "arch" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                    Architecture Comparison
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    Layered vs Clean vs Hexagonal Architecture
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ARCH_PATTERNS.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedArch(a)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedArch.id === a.id
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <div className="text-sm font-bold">{a.name}</div>
                      <div className="text-xs text-stone-600 font-normal mt-1">{a.summary}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Layers size={16} className="text-orange-600" />
                    <span>{selectedArch.name}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700">{selectedArch.pros}</p>
                  <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">
                    {selectedArch.snippet}
                  </pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "lab" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Student Management REST API
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Spring Boot 4.2.0 Controller Starter
                    </h2>
                  </div>

                  <button
                    onClick={handleCopyLab}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedLab ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedLab ? "Copied!" : "Copy StudentController.java"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {springBootLabSnippet}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 03 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Java &amp; Spring Boot Examination
                    </h2>
                  </div>

                  <div className="flex items-center gap-3">
                    {showResults && (
                      <div className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold font-mono">
                        Score: {score} / {quizQuestions.length} ({Math.round((score / quizQuestions.length) * 100)}%)
                      </div>
                    )}
                    <button
                      onClick={() => setShowResults(!showResults)}
                      className="px-4 py-2 rounded-xl bg-[#f97316] text-white hover:bg-orange-600 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                    >
                      {showResults ? "Hide Explanations" : "Check Answers"}
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q) => {
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.correct;

                    return (
                      <div key={q.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/40 space-y-3">
                        <div className="font-bold text-stone-900 text-sm">{q.question}</div>
                        <div className="space-y-2">
                          {q.options.map((opt, oIdx) => {
                            const isChosen = selected === oIdx;
                            let btnStyle = "border-stone-200 bg-white text-stone-700 hover:bg-stone-50";

                            if (showResults) {
                              if (oIdx === q.correct) {
                                btnStyle = "border-emerald-300 bg-emerald-50 text-emerald-900 font-semibold";
                              } else if (isChosen && !isCorrect) {
                                btnStyle = "border-rose-300 bg-rose-50 text-rose-900";
                              }
                            } else if (isChosen) {
                              btnStyle = "border-[#f97316] bg-orange-50 text-orange-950 font-semibold";
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => setSelectedAnswers((prev) => ({ ...prev, [q.id]: oIdx }))}
                                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer ${btnStyle}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>

                        {showResults && (
                          <div className={`p-3 rounded-xl text-xs ${isCorrect ? "bg-emerald-50 text-emerald-900 border border-emerald-200" : "bg-stone-100 text-stone-800 border border-stone-200"}`}>
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Nav */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/backend-engineering/http-api-design")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 2 &mdash; HTTP Protocol and API Design</span>
          </button>

          <button
            onClick={() => navigate("/learning/backend-engineering/database-persistence")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <span>Next: Module 4 &mdash; Database Engineering and Backend Persistence</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
