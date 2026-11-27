import React from "react";

export default function BackendTestingQualitySections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; Advanced Backend Engineering
          </span>
          <span className="text-xs font-mono text-stone-500">Module 08</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 08 &mdash; Backend Testing and API Quality Engineering
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            A <code className="font-mono bg-stone-100 px-1 rounded">200 OK</code> response does not prove that the right data was persisted, that another user cannot read private records, that transactions roll back properly, or that the API handles 1,000 concurrent requests. Using a <strong>Java + Spring Boot + PostgreSQL</strong> course management API, this module covers unit, integration, API, mocking, Testcontainers, contract, security, error-scenario, load/performance, and coverage/mutation testing.
          </p>
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Central Engineering Principle:</strong> A backend API should not be considered production-ready merely because it works during manual testing. It should have repeatable automated evidence that its business logic, database operations, security rules, API contracts, and failure handling behave as expected.
          </div>
        </div>
      </section>

      {/* SECTIONS 1-3: WHY TESTING MATTERS, UNIT TESTING & INTEGRATION TESTING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 1&ndash;3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">1. Why Testing Matters, 2. Unit Testing &amp; 3. Integration Testing</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>Testing</strong> discovers defects and prevents regressions; <strong>debugging</strong> investigates and fixes them. Structure JUnit 5 unit tests using <strong>Arrange &rarr; Act &rarr; Assert</strong>, test boundary/edge cases and exceptions (<code className="font-mono bg-stone-100 px-1 rounded">assertThrows</code>), and use <code className="font-mono bg-stone-100 px-1 rounded">@ParameterizedTest</code> (<code className="font-mono bg-stone-100 px-1 rounded">@ValueSource</code>) for multiple inputs.
          </p>
          <p>
            Use Spring Boot test slices intentionally: <code className="font-mono bg-stone-100 px-1 rounded">@SpringBootTest</code> (broader integration), <code className="font-mono bg-stone-100 px-1 rounded">@WebMvcTest</code> (Spring MVC controllers), <code className="font-mono bg-stone-100 px-1 rounded">@DataJpaTest</code> (JPA repositories), and <code className="font-mono bg-stone-100 px-1 rounded">@JsonTest</code> (JSON serialization). Verify both successful commits and transaction rollbacks outside the test transaction boundary.
          </p>
        </div>
      </section>

      {/* SECTIONS 4-6: API TESTING, CONTROLLERS/SERVICES & MOCKING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 4&ndash;6</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">4. API Testing, 5. Controllers vs Services &amp; 6. Mocking (Mockito)</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Test controllers via <code className="font-mono bg-stone-100 px-1 rounded">MockMvc</code> (<code className="font-mono bg-stone-100 px-1 rounded">@WebMvcTest</code> + <code className="font-mono bg-stone-100 px-1 rounded">@MockitoBean</code>), Postman, or REST Assured to verify status codes, JSON fields, headers, and validation. Test services independently with JUnit + Mockito (<code className="font-mono bg-stone-100 px-1 rounded">@Mock</code>, <code className="font-mono bg-stone-100 px-1 rounded">@InjectMocks</code>, <code className="font-mono bg-stone-100 px-1 rounded">@Spy</code>, <code className="font-mono bg-stone-100 px-1 rounded">@Captor</code>). Understand test doubles: <strong>Dummy</strong>, <strong>Stub</strong>, <strong>Mock</strong>, <strong>Fake</strong>, and <strong>Spy</strong>&mdash;and avoid mocking everything so real integration bugs are not hidden.
          </p>
        </div>
      </section>

      {/* SECTIONS 7-10: TESTCONTAINERS, CONTRACT TESTING, SECURITY & ERROR SCENARIOS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 7&ndash;10</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">7. Testcontainers, 8. Contract Testing, 9. Security &amp; 10. Error Scenarios</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            H2 in-memory tests can mask PostgreSQL dialect, constraint, and locking bugs; use <strong>Testcontainers</strong> (<code className="font-mono bg-stone-100 px-1 rounded">PostgreSQLContainer&lt;?&gt;</code> with <code className="font-mono bg-stone-100 px-1 rounded">@DynamicPropertySource</code>) to test against real PostgreSQL, including concurrent seat-reservation races.
          </p>
          <p>
            Use consumer-driven <strong>Contract Testing (Pact)</strong> and OpenAPI schema checks to prevent breaking frontend/mobile consumers. Test security thoroughly: <code className="font-mono bg-stone-100 px-1 rounded">401</code> vs <code className="font-mono bg-stone-100 px-1 rounded">403</code> with <code className="font-mono bg-stone-100 px-1 rounded">@WithMockUser</code>, real JWT validation (expired/tampered/wrong role), resource ownership (preventing IDOR/BOLA), and error scenarios (DB outages, external timeouts, sanitized error payloads).
          </p>
        </div>
      </section>

      {/* SECTIONS 11-12: PERFORMANCE/LOAD TESTING, COVERAGE & TESTING PYRAMID */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 11&ndash;12</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">11. Performance &amp; Load Testing (k6) &bull; 12. Coverage, Mutation &amp; Pyramid</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Measure <strong>Load</strong>, <strong>Stress</strong>, <strong>Spike</strong>, and <strong>Soak</strong> workloads using <strong>k6</strong>, <strong>JMeter</strong>, or <strong>Gatling</strong>, tracking throughput, error rate, CPU/memory, DB pool usage, and tail latency percentiles (<strong>p50, p90, p95, p99</strong>).
          </p>
          <p>
            Generate line and branch coverage reports with <strong>JaCoCo</strong> (<code className="font-mono bg-stone-100 px-1 rounded">mvn clean verify</code> &rarr; <code className="font-mono bg-stone-100 px-1 rounded">target/site/jacoco/index.html</code>) and verify test effectiveness with <strong>PIT mutation testing</strong>. Follow the <strong>Testing Pyramid</strong>: many fast unit tests, solid integration/API tests, and targeted end-to-end workflow tests.
          </p>
        </div>
      </section>

      {/* PRACTICAL LAB & ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">Practical Lab &amp; Assignment</span>
          <span className="text-xs text-stone-500 font-mono">JUnit 5 + Mockito + Testcontainers + k6 + JaCoCo</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Automated Test Suite Lab &amp; Backend API Quality Engineering Assignment
        </h2>
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Build a complete automated test suite for the Course Management API covering unit tests (<code className="font-mono bg-stone-100 px-1 rounded">CourseServiceTest</code>, <code className="font-mono bg-stone-100 px-1 rounded">EnrollmentServiceTest</code>), MockMvc controller tests, Testcontainers PostgreSQL repository tests, Spring Security &amp; JWT tests, error-scenario rollback checks, Pact contract verification, k6 load/stress/spike tests, and JaCoCo coverage automated in CI.
          </p>
        </div>
      </section>
    </div>
  );
}
