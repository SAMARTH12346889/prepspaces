import React from "react";

export default function BackendApiSecuritySections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; Security Engineering &bull; Advanced Backend Development
          </span>
          <span className="text-xs font-mono text-stone-500">Module 09</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 09 &mdash; API Security Engineering
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            A backend API is a critical security boundary. Using a <strong>Java + Spring Boot + PostgreSQL</strong> course management API, this module teaches how to identify, prevent, fix, and verify API security vulnerabilities&mdash;from threat modeling and OWASP API Top 10 to BOLA, BFLA, SQL injection, mass assignment, CORS, file security, secrets management, logging, and API hardening.
          </p>
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Central Engineering Principle:</strong> An API is not secure simply because it requires a login, uses HTTPS, or hides administrative functionality in the frontend. Every request must be validated, every resource must have appropriate access controls, and every security assumption must be tested.
          </div>
        </div>
      </section>

      {/* SECTIONS 1-3: FUNDAMENTALS, THREAT MODELING & OWASP API TOP 10 */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 1&ndash;3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">1. API Security, 2. Threat Modeling (STRIDE) &amp; 3. OWASP API Top 10</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Apply the <strong>CIA Triad</strong> (Confidentiality, Integrity, Availability) and core security principles: <strong>Least Privilege</strong>, <strong>Deny by Default</strong>, <strong>Defense in Depth</strong>, <strong>Validate All Untrusted Input</strong>, <strong>Secure Communication (HTTPS)</strong>, and <strong>Minimize Information Exposure</strong>.
          </p>
          <p>
            Model trust boundaries and classify threats with <strong>STRIDE</strong> (<strong>S</strong>poofing, <strong>T</strong>ampering, <strong>R</strong>epudiation, <strong>I</strong>nformation Disclosure, <strong>D</strong>enial of Service, <strong>E</strong>levation of Privilege) and prioritize risks (<code className="font-mono bg-stone-100 px-1 rounded">Risk = Likelihood &times; Impact</code>) across the <strong>OWASP API Security Top 10 (2023)</strong>: API1 BOLA, API2 Broken Authentication, API3 BOPLA (Mass Assignment / Data Exposure), API4 Unrestricted Resource Consumption, API5 BFLA, API6 Sensitive Business Flows, API7 SSRF, API8 Security Misconfiguration, API9 Improper Inventory, and API10 Unsafe API Consumption.
          </p>
        </div>
      </section>

      {/* SECTIONS 4-7: BOLA, BFLA, SQL INJECTION & MASS ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 4&ndash;7</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">4. BOLA, 5. BFLA, 6. SQL Injection &amp; 7. Mass Assignment</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>BOLA (API1):</strong> Always verify object ownership against <code className="font-mono bg-stone-100 px-1 rounded">@AuthenticationPrincipal</code> across GET/PUT/PATCH/DELETE (e.g., <code className="font-mono bg-stone-100 px-1 rounded">findByIdAndStudentId(progressId, currentStudentId)</code>). Random UUIDs alone do not prevent BOLA.
          </p>
          <p>
            <strong>BFLA (API5):</strong> Enforce function-level roles centrally with <code className="font-mono bg-stone-100 px-1 rounded">@EnableMethodSecurity</code> and <code className="font-mono bg-stone-100 px-1 rounded">@PreAuthorize(&quot;hasRole(&apos;ADMIN&apos;)&quot;)</code>.
          </p>
          <p>
            <strong>SQL Injection:</strong> Use parameterized queries (<code className="font-mono bg-stone-100 px-1 rounded">PreparedStatement</code>, Spring Data JPA derived methods, or <code className="font-mono bg-stone-100 px-1 rounded">@Param</code>) for values and strict allowlists (<code className="font-mono bg-stone-100 px-1 rounded">ALLOWED_SORT_FIELDS</code>) for dynamic <code className="font-mono bg-stone-100 px-1 rounded">ORDER BY</code> columns.
          </p>
          <p>
            <strong>Mass Assignment (API3):</strong> Never bind <code className="font-mono bg-stone-100 px-1 rounded">@RequestBody</code> directly to JPA <code className="font-mono bg-stone-100 px-1 rounded">@Entity</code> classes; use explicit request DTOs (<code className="font-mono bg-stone-100 px-1 rounded">UpdateProfileRequest</code>) and response DTOs (<code className="font-mono bg-stone-100 px-1 rounded">UserResponse</code>) so protected fields like <code className="font-mono bg-stone-100 px-1 rounded">role</code> or <code className="font-mono bg-stone-100 px-1 rounded">passwordHash</code> cannot be modified or leaked.
          </p>
        </div>
      </section>

      {/* SECTIONS 8-12: CORS, FILE SECURITY, SECRETS, LOGGING & HARDENING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 8&ndash;12</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">8. CORS, 9. File Security, 10. Secrets, 11. Logging &amp; 12. Hardening</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>CORS:</strong> Configure explicit origin allowlists in <code className="font-mono bg-stone-100 px-1 rounded">CorsConfigurationSource</code> before Spring Security auth checks; never reflect arbitrary <code className="font-mono bg-stone-100 px-1 rounded">Origin</code> headers or treat CORS as authentication.
          </p>
          <p>
            <strong>File Upload &amp; Download:</strong> Never trust client filenames or <code className="font-mono bg-stone-100 px-1 rounded">Content-Type</code>. Enforce size limits, inspect file signatures, fail-closed malware scanning, generate server-side UUID storage keys outside the web root, authorize downloads separately, and send <code className="font-mono bg-stone-100 px-1 rounded">X-Content-Type-Options: nosniff</code>.
          </p>
          <p>
            <strong>Secrets &amp; Logging:</strong> Manage credentials via HashiCorp Vault, AWS Secrets Manager, or GCP Secret Manager with least-privilege DB users and rotation; revoke compromised Git-committed secrets immediately. Never log passwords, tokens, or full <code className="font-mono bg-stone-100 px-1 rounded">Authorization</code> headers, and sanitize untrusted text to prevent log injection. Combine <strong>SAST</strong> (Semgrep), <strong>DAST</strong> (OWASP ZAP), and API hardening (HTTPS, rate limits, HSTS, <code className="font-mono bg-stone-100 px-1 rounded">Cache-Control: no-store</code>).
          </p>
        </div>
      </section>

      {/* PRACTICAL LAB & ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">Practical Lab &amp; Assignment</span>
          <span className="text-xs text-stone-500 font-mono">OWASP ZAP + Semgrep + Spring Security Remediation</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Fix an Intentionally Insecure API (Lab) &amp; Security Assessment (Assignment)
        </h2>
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Perform reconnaissance, STRIDE threat modeling (10+ threats), and hands-on remediation across an intentionally vulnerable Course Management API&mdash;fixing BOLA, BFLA, SQL injection, mass assignment, permissive CORS, insecure file uploads, hardcoded secrets, and sensitive logging, then verifying fixes with automated Spring Security tests, Postman, and OWASP ZAP.
          </p>
        </div>
      </section>
    </div>
  );
}
