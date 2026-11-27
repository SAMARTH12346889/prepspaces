import React from "react";

export default function BackendProductionObservabilitySections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; Production Engineering &bull; Advanced Backend Development
          </span>
          <span className="text-xs font-mono text-stone-500">Module 10</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 10 &mdash; Production Backend, Deployment and Observability
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            Transform a locally working backend into a deployable, observable, and recoverable production system using <strong>Java, Spring Boot, PostgreSQL, Flyway, Docker, Docker Compose, Kubernetes probes, Spring Boot Actuator, Micrometer, Prometheus, Grafana, OpenTelemetry, and structured JSON logging</strong>.
          </p>
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Central Engineering Principle:</strong> A backend application is not production-ready simply because its code compiles, its APIs work locally, or its Docker container starts. A production-ready backend must be deployable, configurable, observable, recoverable, and maintainable.
          </div>
        </div>
      </section>

      {/* SECTIONS 1-4: ENVIRONMENTS, CONFIG, PACKAGING & DOCKER */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 1&ndash;4</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">1. Dev/Staging/Prod, 2. Config, 3. Packaging &amp; 4. Docker</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Keep <strong>Development</strong>, <strong>Staging</strong> (synthetic/sanitized data, production-like config), and <strong>Production</strong> completely isolated with separate databases and secrets via Spring profiles (<code className="font-mono bg-stone-100 px-1 rounded">SPRING_PROFILES_ACTIVE=prod</code>). Configure production safely: <code className="font-mono bg-stone-100 px-1 rounded">server.shutdown: graceful</code>, <code className="font-mono bg-stone-100 px-1 rounded">spring.jpa.open-in-view: false</code>, <code className="font-mono bg-stone-100 px-1 rounded">ddl-auto: validate</code>, and externalized secrets.
          </p>
          <p>
            Build reproducible artifacts (<code className="font-mono bg-stone-100 px-1 rounded">./mvnw clean verify</code>) and promote the exact same verified image digest from staging to production. Use <strong>multi-stage Dockerfiles</strong> (<code className="font-mono bg-stone-100 px-1 rounded">maven:3.9-eclipse-temurin-21</code> build &rarr; <code className="font-mono bg-stone-100 px-1 rounded">eclipse-temurin:21-jre</code> runtime) running as a non-root <code className="font-mono bg-stone-100 px-1 rounded">USER appuser</code>, with Docker Compose volumes for local database persistence.
          </p>
        </div>
      </section>

      {/* SECTIONS 5-7: DEPLOYMENT ARCHITECTURE, FLYWAY & HEALTH PROBES */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 5&ndash;7</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">5. Deployment, 6. Flyway Migrations &amp; 7. Health Probes &amp; Shutdown</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Route traffic through DNS &rarr; HTTPS/TLS Reverse Proxy &amp; Load Balancer &rarr; stateless horizontal Spring Boot instances. Choose release strategies intentionally: <strong>Recreate</strong>, <strong>Rolling</strong>, <strong>Blue-Green</strong>, or <strong>Canary</strong>.
          </p>
          <p>
            Manage schema evolution with immutable <strong>Flyway</strong> migrations (<code className="font-mono bg-stone-100 px-1 rounded">V1__...sql</code>) and zero-downtime <strong>Expand-and-Contract</strong> transitions. Size HikariCP pools across all instances (<code className="font-mono bg-stone-100 px-1 rounded">instances &times; poolSize</code>) within PostgreSQL&apos;s connection budget, and define <strong>RPO</strong> &amp; <strong>RTO</strong> with tested backups. Expose Spring Boot Actuator probes: <strong>Startup</strong>, <strong>Liveness</strong> (process progress), and <strong>Readiness</strong> (dependency readiness) coordinated with graceful shutdown (<code className="font-mono bg-stone-100 px-1 rounded">timeout-per-shutdown-phase: 20s</code>).
          </p>
        </div>
      </section>

      {/* SECTIONS 8-12: LOGGING, METRICS/TRACING, MONITORING, RESOURCES & INCIDENTS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 8&ndash;12</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">8. Structured Logging, 9. Metrics &amp; Traces, 10. Alerting, 11. Resources &amp; 12. Incidents</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Combine the three observability signals: <strong>Structured JSON Logs</strong> (with <code className="font-mono bg-stone-100 px-1 rounded">requestId</code>/<code className="font-mono bg-stone-100 px-1 rounded">traceId</code>, zero secrets), <strong>Metrics</strong> (Micrometer + Prometheus <code className="font-mono bg-stone-100 px-1 rounded">/actuator/prometheus</code> + Grafana dashboards for RPS, error rate, p50/p95/p99 latency, JVM heap, HikariCP pool), and <strong>Distributed Tracing</strong> (OpenTelemetry spans &amp; W3C <code className="font-mono bg-stone-100 px-1 rounded">traceparent</code> propagation).
          </p>
          <p>
            Define symptom-based Prometheus alerts (avoiding alert fatigue) tied to <strong>SLIs, SLOs, SLAs, and Error Budgets</strong> (e.g., 99.9% monthly target = 43.2 min error budget). Troubleshoot CPU, JVM heap (<code className="font-mono bg-stone-100 px-1 rounded">-Xms/-Xmx</code>), thread starvation, and DB pool exhaustion systematically, and manage production incidents (SEV 1&ndash;4) through Detection &rarr; Triage &rarr; Investigation &rarr; Mitigation &rarr; Recovery &rarr; Five-Whys RCA &rarr; Blameless Post-Incident Review.
          </p>
        </div>
      </section>

      {/* PRACTICAL LAB, ASSIGNMENT & MODULES 08-10 SYNTHESIS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">Practical Lab &amp; Production Assignment</span>
          <span className="text-xs text-stone-500 font-mono">Docker + Compose + Actuator + Prometheus + 35-Item Checklist</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Containerize &amp; Deploy Lab &bull; Production Readiness Assignment
        </h2>
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Package the Course Management API in a multi-stage non-root Docker image, run it with PostgreSQL via <code className="font-mono bg-stone-100 px-1 rounded">compose.yaml</code>, configure <code className="font-mono bg-stone-100 px-1 rounded">application-prod.yml</code> with structured JSON logging and Actuator probes, test DB stop/recovery and graceful shutdown, simulate a failed config release, and complete the <strong>35-Item Production-Readiness Checklist</strong>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Module</th>
                  <th className="p-3">Responsibility</th>
                  <th className="p-3">Main Question</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">08 &mdash; Backend Testing</td><td className="p-3">Verification</td><td className="p-3">Does the application work correctly?</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">09 &mdash; API Security</td><td className="p-3">Protection</td><td className="p-3">Can the application withstand unauthorized and malicious requests?</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">10 &mdash; Production &amp; Observability</td><td className="p-3">Operations &amp; Reliability</td><td className="p-3">Can the application run reliably in production?</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
