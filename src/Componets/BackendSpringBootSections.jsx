import React from "react";
import { ArrowRight } from "lucide-react";

export default function BackendSpringBootSections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW & TECHNOLOGY FOUNDATION */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; Beginner &rarr; Intermediate &bull; Java + Spring Boot
          </span>
          <span className="text-xs font-mono text-stone-500">Module 03</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 03 &mdash; Java Backend Development with Spring Boot
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Module objective:</strong> Move from understanding backend architecture and designing APIs to implementing real backend applications using Java 21 and Spring Boot 4.2.0. The central project throughout this module is a <strong>Student Management REST API</strong>.
          </div>
          <p>
            <strong>Technology foundation:</strong> Spring Boot 4.2.0 (baseline November 27, 2026) requires Java 17 or later (Java 21 target) and Maven 3.6.3+, paired with Spring Data JPA (Hibernate), PostgreSQL / H2, Jakarta Bean Validation, and JUnit + Mockito.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
            {[
              ["Java 21", "Language & JVM"],
              ["Spring Boot 4.2", "Backend framework"],
              ["Maven", "Build & dependencies"],
              ["PostgreSQL / SQL", "Relational storage"],
              ["Spring Data JPA", "Persistence abstraction"],
              ["JUnit + Mockito", "Automated testing"],
            ].map(([tech, desc]) => (
              <div key={tech} className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                <div className="font-bold text-stone-900">{tech}</div>
                <div className="text-stone-600 mt-0.5">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 & 2: INTRO & FIRST APP */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 1 &amp; 2</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">1. Introduction to Spring Boot &amp; 2. Creating Your First App</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>Spring Framework</strong> provides core infrastructure (IoC, Dependency Injection, Beans, Spring MVC, Data Access, Transactions). <strong>Spring Boot</strong> simplifies setup via conditional <strong>auto-configuration</strong>, <strong>starter dependencies</strong>, an <strong>embedded web server</strong> (e.g., Tomcat), externalized configuration, and production-ready Actuator endpoints.
          </p>
          <div className="p-3 rounded-lg bg-orange-50/70 border border-orange-200 text-xs sm:text-sm text-stone-800">
            <strong>Spring Boot 4.x Note:</strong> Use <code className="font-mono bg-white px-1 rounded">spring-boot-starter-webmvc</code> for traditional Spring MVC REST APIs (<code className="font-mono bg-white px-1 rounded">spring-boot-starter-web</code> is deprecated in favor of it).
          </div>
          <p>
            <code className="font-mono bg-stone-100 px-1 rounded">@SpringBootApplication</code> combines <code className="font-mono bg-stone-100 px-1 rounded">@SpringBootConfiguration</code>, <code className="font-mono bg-stone-100 px-1 rounded">@EnableAutoConfiguration</code>, and <code className="font-mono bg-stone-100 px-1 rounded">@ComponentScan</code>. Place the main class in the root package (<code className="font-mono bg-stone-100 px-1 rounded">com.example.studentmanagement</code>) so component scanning discovers all subpackages.
          </p>

          <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`@RestController
@RequestMapping("/api/v1")
public class HelloController {
  @GetMapping("/hello")
  public MessageResponse hello() {
    return new MessageResponse("Welcome to Spring Boot backend development");
  }
  public record MessageResponse(String message) {}
}`}
          </pre>
          <p className="text-xs sm:text-sm">
            Run in development with <code className="font-mono bg-stone-100 px-1 rounded">mvn spring-boot:run</code>, or package and execute with <code className="font-mono bg-stone-100 px-1 rounded">mvn clean package</code> and <code className="font-mono bg-stone-100 px-1 rounded">java -jar target/student-management-0.0.1-SNAPSHOT.jar</code>. Requests flow through Embedded Tomcat &rarr; <code className="font-mono bg-stone-100 px-1 rounded">DispatcherServlet</code> &rarr; <code className="font-mono bg-stone-100 px-1 rounded">HandlerMapping</code> &rarr; Controller &rarr; HTTP Message Converter (JSON).
          </p>
        </div>
      </section>

      {/* SECTION 3 & 4: PROJECT STRUCTURE & 3-LAYER ARCHITECTURE */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 3 &amp; 4</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">3. Project Structure &amp; 4. Controllers, Services and Repositories</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Factor</th>
                  <th className="p-3">Package by layer</th>
                  <th className="p-3">Package by feature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Organization</td><td className="p-3">Technical role (controller/, service/, repository/)</td><td className="p-3">Business capability (student/, course/, enrollment/)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Best fit</td><td className="p-3">Small apps &amp; initial CRUD labs</td><td className="p-3">Growing modular monoliths (10&ndash;15+ modules)</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Separate responsibilities cleanly across <strong>Controller</strong> (HTTP parsing, <code className="font-mono bg-stone-100 px-1 rounded">@Valid</code>, <code className="font-mono bg-stone-100 px-1 rounded">ResponseEntity</code>), <strong>Service</strong> (<code className="font-mono bg-stone-100 px-1 rounded">@Service</code>, business rules, <code className="font-mono bg-stone-100 px-1 rounded">@Transactional</code>), and <strong>Repository</strong> (<code className="font-mono bg-stone-100 px-1 rounded">JpaRepository&lt;Student, Long&gt;</code>, derived queries like <code className="font-mono bg-stone-100 px-1 rounded">existsByEmailIgnoreCase</code>). Avoid fat controllers, circular dependencies, or returning JPA entities directly.
          </p>
        </div>
      </section>

      {/* SECTION 5 & 6: DI/IOC & REQUEST MAPPING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 5 &amp; 6</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">5. Dependency Injection &amp; IoC &bull; 6. Request Mapping</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>Inversion of Control (IoC)</strong> delegates bean creation and lifecycle to Spring&apos;s <code className="font-mono bg-stone-100 px-1 rounded">ApplicationContext</code>. <strong>Constructor injection</strong> is preferred over setter or field injection because required dependencies are explicit, fields can be <code className="font-mono bg-stone-100 px-1 rounded">final</code>, and unit testing with Mockito requires no Spring container. Use <code className="font-mono bg-stone-100 px-1 rounded">@Component</code> on classes for component scanning and <code className="font-mono bg-stone-100 px-1 rounded">@Bean</code> on <code className="font-mono bg-stone-100 px-1 rounded">@Configuration</code> methods for third-party objects. Default bean scope is <strong>singleton</strong>&mdash;never store request-specific state in mutable service fields.
          </p>
          <p>
            In Spring MVC, use <code className="font-mono bg-stone-100 px-1 rounded">@RestController</code> with <code className="font-mono bg-stone-100 px-1 rounded">@GetMapping</code>, <code className="font-mono bg-stone-100 px-1 rounded">@PostMapping</code>, <code className="font-mono bg-stone-100 px-1 rounded">@PutMapping</code>, <code className="font-mono bg-stone-100 px-1 rounded">@PatchMapping</code>, <code className="font-mono bg-stone-100 px-1 rounded">@DeleteMapping</code>, along with <code className="font-mono bg-stone-100 px-1 rounded">@PathVariable</code>, <code className="font-mono bg-stone-100 px-1 rounded">@RequestParam</code>, <code className="font-mono bg-stone-100 px-1 rounded">@Valid @RequestBody</code>, and <code className="font-mono bg-stone-100 px-1 rounded">ResponseEntity</code>.
          </p>
        </div>
      </section>

      {/* SECTION 7 & 8: DTOS VS ENTITIES & CONFIGURATION */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 7 &amp; 8</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">7. DTOs &amp; Entity Separation &bull; 8. Configuration &amp; Profiles</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Never expose JPA <code className="font-mono bg-stone-100 px-1 rounded">@Entity</code> classes directly from controllers&mdash;separate <code className="font-mono bg-stone-100 px-1 rounded">CreateStudentRequest</code>, <code className="font-mono bg-stone-100 px-1 rounded">UpdateStudentRequest</code>, and <code className="font-mono bg-stone-100 px-1 rounded">StudentResponse</code> Java records to prevent exposing <code className="font-mono bg-stone-100 px-1 rounded">passwordHash</code>, avoid over-posting, and prevent lazy-loading serialization issues.
          </p>
          <p>
            Externalize settings in <code className="font-mono bg-stone-100 px-1 rounded">application.yml</code> using environment variables (<code className="font-mono bg-stone-100 px-1 rounded">${`{DB_PASSWORD}`}</code>, <code className="font-mono bg-stone-100 px-1 rounded">${`{PORT:8080}`}</code>), Spring profiles (<code className="font-mono bg-stone-100 px-1 rounded">dev</code>, <code className="font-mono bg-stone-100 px-1 rounded">test</code>, <code className="font-mono bg-stone-100 px-1 rounded">prod</code>), and type-safe <code className="font-mono bg-stone-100 px-1 rounded">@ConfigurationProperties</code> records. In production, use <code className="font-mono bg-stone-100 px-1 rounded">ddl-auto: validate</code> with versioned migrations (Flyway or Liquibase) rather than <code className="font-mono bg-stone-100 px-1 rounded">ddl-auto: update</code>.
          </p>
        </div>
      </section>

      {/* SECTION 9, 10, 11 & 12: SERVICES, LAYERED, CLEAN/HEXAGONAL & MAINTAINABILITY */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 9&ndash;12</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">9. Reusable Services, 10. Layered, 11. Clean/Hexagonal &amp; 12. Maintainability</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Factor</th>
                  <th className="p-3">Layered</th>
                  <th className="p-3">Clean Architecture</th>
                  <th className="p-3">Hexagonal (Ports &amp; Adapters)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Main idea</td><td className="p-3">Separate technical layers</td><td className="p-3">Protect domain rules via dependency boundaries</td><td className="p-3">Connect core through inbound/outbound ports &amp; adapters</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Framework coupling</td><td className="p-3">Moderate/high</td><td className="p-3">Minimized in core</td><td className="p-3">Minimized via port interfaces</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Suitable for</td><td className="p-3">Conventional CRUD APIs</td><td className="p-3">Complex business domains</td><td className="p-3">Systems with many external integrations</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Keep controllers thin, services cohesive, and errors centralized via <code className="font-mono bg-stone-100 px-1 rounded">@RestControllerAdvice</code>. Use <code className="font-mono bg-stone-100 px-1 rounded">@Transactional</code> around coherent DB boundaries (never around slow external HTTP/email calls), expose secured health checks via Spring Boot Actuator (<code className="font-mono bg-stone-100 px-1 rounded">/actuator/health</code>), log with correlation/request IDs without leaking secrets, and build a complete JUnit + Mockito + MockMvc test suite.
          </p>
        </div>
      </section>

      {/* PRACTICAL LAB & MAJOR ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">Practical Lab &amp; Assignment</span>
          <span className="text-xs text-stone-500 font-mono">Lab: 5&ndash;7h &bull; Assignment: 2&ndash;3 days (100 marks)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Student Management REST API Lab (Spring Boot 4.2.0) &amp; Modular Backend Assignment
        </h2>
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Build the full CRUD <strong>Student Management API</strong> (<code className="font-mono bg-stone-100 px-1 rounded">POST/GET/PUT/DELETE /api/v1/students</code>) with Java 21, Spring Boot 4.2.0, <code className="font-mono bg-stone-100 px-1 rounded">spring-boot-starter-webmvc</code>, <code className="font-mono bg-stone-100 px-1 rounded">spring-boot-starter-data-jpa</code>, <code className="font-mono bg-stone-100 px-1 rounded">spring-boot-starter-validation</code>, H2 (for local lab) &rarr; PostgreSQL (for assignment), and <code className="font-mono bg-stone-100 px-1 rounded">spring-boot-starter-webmvc-test</code> (<code className="font-mono bg-stone-100 px-1 rounded">org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc</code>).
          </p>
          <p className="text-xs sm:text-sm">
            The major assignment extends this into four modules: <strong>Student</strong>, <strong>Course</strong>, <strong>Enrollment</strong>, and <strong>Assignment</strong> management backed by a 7-table PostgreSQL schema (<code className="font-mono bg-stone-100 px-1 rounded">users</code>, <code className="font-mono bg-stone-100 px-1 rounded">students</code>, <code className="font-mono bg-stone-100 px-1 rounded">instructors</code>, <code className="font-mono bg-stone-100 px-1 rounded">courses</code>, <code className="font-mono bg-stone-100 px-1 rounded">enrollments</code>, <code className="font-mono bg-stone-100 px-1 rounded">assignments</code>, <code className="font-mono bg-stone-100 px-1 rounded">submissions</code>) with OpenAPI documentation and JUnit/Mockito tests.
          </p>
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs sm:text-sm text-stone-900">
            <strong>Central Engineering Principle:</strong> Spring Boot provides the infrastructure, but you are responsible for the architecture. Professional backend engineering requires clear responsibilities, reliable persistence, validated inputs, controlled dependencies, and maintainable business logic.
          </div>
        </div>
      </section>
    </div>
  );
}
