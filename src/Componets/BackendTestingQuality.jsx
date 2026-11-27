import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  ArrowLeft,
  BookOpen,
  Copy,
  Check,
  Activity,
  ShieldCheck,
  Layers,
  Gauge,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import BackendTestingQualitySections from "./BackendTestingQualitySections";

const TEST_SLICES = [
  {
    id: "unit",
    name: "Unit Tests (JUnit 5 + Mockito)",
    speed: "Milliseconds",
    scope: "Isolated service/domain methods; mocks repositories & external clients.",
    annotation: "@ExtendWith(MockitoExtension.class)",
  },
  {
    id: "mvc",
    name: "Controller / API Tests (MockMvc)",
    speed: "Fast (~1s)",
    scope: "HTTP routing, JSON serialization, @Valid, status codes, @RestControllerAdvice, security.",
    annotation: "@WebMvcTest(CourseController.class)",
  },
  {
    id: "jpa",
    name: "PostgreSQL Integration (Testcontainers)",
    speed: "Seconds",
    scope: "Real PostgreSQL SQL, entity mappings, foreign keys, unique constraints, transactions.",
    annotation: "@Testcontainers + @DataJpaTest",
  },
  {
    id: "load",
    name: "Load & Performance (k6)",
    speed: "Minutes",
    scope: "p50/p95/p99 latency, throughput, error rate, DB pool & CPU saturation.",
    annotation: "k6 run course-load-test.js",
  },
];

export default function BackendTestingQuality() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbenchTab, setActiveWorkbenchTab] = useState("pyramid");
  const [selectedSlice, setSelectedSlice] = useState(TEST_SLICES[0]);
  const [doubleType, setDoubleType] = useState("stub");
  const [copiedTest, setCopiedTest] = useState(false);

  const testcontainersCode = `@Testcontainers
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class CourseRepositoryTest {

  @Container
  static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:16-alpine")
      .withDatabaseName("course_test")
      .withUsername("test")
      .withPassword("test");

  @DynamicPropertySource
  static void configureProperties(DynamicPropertyRegistry registry) {
    registry.add("spring.datasource.url", postgres::getJdbcUrl);
    registry.add("spring.datasource.username", postgres::getUsername);
    registry.add("spring.datasource.password", postgres::getPassword);
  }

  @Autowired
  private CourseRepository courseRepository;

  @Test
  void shouldSaveAndRetrieveCourse() {
    Course course = new Course();
    course.setTitle("Backend Engineering");
    Course saved = courseRepository.save(course);
    assertNotNull(saved.getId());
  }
}`;

  const handleCopyTest = () => {
    navigator.clipboard.writeText(testcontainersCode);
    setCopiedTest(true);
    setTimeout(() => setCopiedTest(false), 2000);
  };

  const quizQuestions = [
    {
      id: 1,
      question: "1. What do the three stages of Arrange-Act-Assert (AAA) represent?",
      options: [
        "Authenticate, Authorize, Audit",
        "Arrange (setup), Act (execute method), Assert (verify outcome)",
        "Add, Alter, Archive",
        "API, Application, Architecture",
      ],
      correct: 1,
      explanation: "AAA cleanly separates test setup, execution, and assertions.",
    },
    {
      id: 2,
      question: "2. Which Spring Boot annotation tests Spring MVC controllers with MockMvc without loading the full context?",
      options: ["@DataJpaTest", "@WebMvcTest", "@JsonTest", "@Testcontainers"],
      correct: 1,
      explanation: "@WebMvcTest slices to the Spring MVC web layer.",
    },
    {
      id: 3,
      question: "3. Why is Testcontainers PostgreSQL preferred over relying exclusively on H2?",
      options: [
        "H2 cannot run in Java 21",
        "H2 differs from PostgreSQL in SQL dialects, constraints, and locking, which can hide production bugs",
        "Testcontainers needs no Docker",
        "PostgreSQL is slower to write SQL for",
      ],
      correct: 1,
      explanation: "Testing against real PostgreSQL catches dialect, constraint, and transaction issues.",
    },
    {
      id: 4,
      question: "4. What is the difference between a Stub and a Mock?",
      options: [
        "A Stub returns predefined values; a Mock also verifies method interactions (verify(...))",
        "A Stub connects to PostgreSQL",
        "They are identical",
        "Mocks cannot throw exceptions",
      ],
      correct: 0,
      explanation: "Stubs return canned data; Mocks also assert interactions.",
    },
    {
      id: 5,
      question: "5. What does consumer-driven contract testing (e.g., Pact) verify?",
      options: [
        "CPU stays under 50%",
        "The backend provider satisfies the exact request/response interactions expected by consumers",
        "Passwords use BCrypt",
        "100% line coverage",
      ],
      correct: 1,
      explanation: "Contract testing catches breaking API changes before deployment.",
    },
    {
      id: 6,
      question: "6. Why is @WithMockUser alone insufficient to prove JWT authentication works?",
      options: [
        "It only works with H2",
        "It simulates an already-authenticated SecurityContext and skips real JWT parsing, signature, and expiry checks",
        "It disables MockMvc",
        "Spring Security ignores it",
      ],
      correct: 1,
      explanation: "Dedicated JWT tests must verify real token signing, parsing, and expiration.",
    },
    {
      id: 7,
      question: "7. Why monitor p95 and p99 percentiles instead of only average response time?",
      options: [
        "Averages cannot be computed in Java",
        "Averages hide tail latency experienced by slower outlier requests",
        "p99 measures CPU temperature",
        "p50 is always higher than p99",
      ],
      correct: 1,
      explanation: "Percentiles expose tail latency issues that averages mask.",
    },
    {
      id: 8,
      question: "8. What is the difference between Spike Testing and Soak Testing?",
      options: [
        "Spike tests sudden traffic bursts; Soak runs sustained load for hours to find memory/connection leaks",
        "Spike tests SQL; Soak tests CSS",
        "They are identical",
        "Soak runs for 1 second",
      ],
      correct: 0,
      explanation: "Spike tests sudden surges; Soak uncovers gradual resource leaks.",
    },
    {
      id: 9,
      question: "9. Why does 100% JaCoCo line coverage NOT guarantee bug-free software?",
      options: [
        "JaCoCo only scans HTML",
        "Coverage measures execution, not whether assertions verify business rules and boundaries",
        "Line coverage ignores controllers",
        "JaCoCo requires k6",
      ],
      correct: 1,
      explanation: "High coverage without strong assertions (or mutation testing) can still miss bugs.",
    },
    {
      id: 10,
      question: "10. What does the Testing Pyramid recommend?",
      options: [
        "Only write E2E browser tests",
        "Many fast unit tests, substantial integration/API tests, and fewer E2E workflow tests",
        "No unit tests if you have k6",
        "Mock every repository in integration tests",
      ],
      correct: 1,
      explanation: "The testing pyramid balances fast unit feedback with realistic integration and targeted E2E tests.",
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

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col antialiased selection:bg-[#f97316] selection:text-white pb-24">
      <ModuleNav track="backend-engineering" currentModuleId="testing-quality" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 w-full space-y-8">
        {/* Module Header */}
        <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-mono text-orange-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Server size={12} className="text-orange-600" />
              Backend Engineering Track &bull; Module 08
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono text-emerald-700 font-bold">
              JUNIT 5 &middot; MOCKITO &middot; TESTCONTAINERS &middot; PACT &middot; K6 &middot; JACOCO
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#18181b] tracking-tight">
            Module 08 &mdash; Backend Testing and API Quality Engineering
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-stone-600 max-w-4xl">
            Prove backend correctness, security, and scalability with automated JUnit 5 unit tests, Mockito test doubles, MockMvc API tests, Testcontainers PostgreSQL integration tests, Pact contract testing, k6 load testing, and JaCoCo coverage.
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

        {activeTab === "curriculum" ? (
          <BackendTestingQualitySections />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbenchTab("pyramid")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "pyramid"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                1. Testing Pyramid &amp; Slices
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("doubles")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "doubles"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                2. Test Doubles &amp; Percentiles
              </button>
              <button
                onClick={() => setActiveWorkbenchTab("testcontainers")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkbenchTab === "testcontainers"
                    ? "bg-[#f97316] text-white shadow-xs"
                    : "bg-white text-stone-700 border border-stone-200 hover:bg-stone-50"
                }`}
              >
                3. Testcontainers PostgreSQL
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

            {activeWorkbenchTab === "pyramid" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {TEST_SLICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSlice(s)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedSlice.id === s.id
                          ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      <div className="text-[11px] font-mono text-orange-700">{s.speed}</div>
                      <div className="text-sm font-bold mt-1">{s.name}</div>
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Layers size={16} className="text-orange-600" />
                    <span>{selectedSlice.name}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700">{selectedSlice.scope}</p>
                  <div className="p-3 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs">
                    {selectedSlice.annotation}
                  </div>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "doubles" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    ["stub", "Stub (Predefined Return)"],
                    ["mock", "Mock (Interaction Verify)"],
                    ["percentiles", "p50 / p95 / p99 Latency"],
                  ].map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() => setDoubleType(id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold cursor-pointer border ${
                        doubleType === id
                          ? "border-[#f97316] bg-orange-50 text-orange-950"
                          : "border-stone-200 bg-stone-50 text-stone-700"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <Gauge size={16} className="text-orange-600" />
                    <span>
                      {doubleType === "stub"
                        ? "Stub supplies canned test data"
                        : doubleType === "mock"
                        ? "Mock verifies expected calls (or never called)"
                        : "Tail Percentiles Expose Slow Outliers"}
                    </span>
                  </div>
                  <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto">
                    {doubleType === "stub"
                      ? `when(courseRepository.findById(10L)).thenReturn(Optional.of(course));`
                      : doubleType === "mock"
                      ? `assertThrows(DuplicateEnrollmentException.class, () -> service.enroll(7L, 10L));\nverify(enrollmentRepository, never()).save(any());`
                      : `p50 = 100 ms | p90 = 250 ms | p95 = 400 ms | p99 = 1,200 ms\n// k6 threshold: http_req_duration: ['p(95)<500']`}
                  </pre>
                </div>
              </div>
            )}

            {activeWorkbenchTab === "testcontainers" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Real Database Integration
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Testcontainers + @DataJpaTest (PostgreSQL 16)
                    </h2>
                  </div>

                  <button
                    onClick={handleCopyTest}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold cursor-pointer shadow-xs transition-all"
                  >
                    {copiedTest ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedTest ? "Copied!" : "Copy Test Class"}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed border border-stone-800">
                  {testcontainersCode}
                </pre>
              </div>
            )}

            {activeWorkbenchTab === "quiz" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                      Module 08 Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                      Backend Testing &amp; Quality Engineering Examination
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
            onClick={() => navigate("/learning/backend-engineering/caching-async-messaging")}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 font-bold text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 7 &mdash; Caching, Asynchronous Processing and Messaging</span>
          </button>

          <button
            onClick={() => navigate("/learning")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-xs"
          >
            <ShieldCheck size={16} />
            <span>Curriculum Hub</span>
          </button>
        </div>
      </main>
    </div>
  );
}
