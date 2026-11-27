import React from "react";

export default function BackendAuthSecuritySections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; 12 Lessons &bull; Practical Lab + Assignment
          </span>
          <span className="text-xs font-mono text-stone-500">Module 05</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 05 &mdash; Authentication and Authorization Engineering
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            Every modern backend needs a reliable way to identify users (<strong>Authentication: Who are you?</strong>) and control what they are allowed to access (<strong>Authorization: What are you allowed to do?</strong>). Using <strong>Java, Spring Boot, Spring Security, PostgreSQL, and JWT</strong>, this module covers registration, login, Argon2id/BCrypt password hashing, sessions, JWTs, refresh-token rotation, OAuth 2.0 &amp; OpenID Connect, RBAC, permission-based &amp; resource-level authorization, and token revocation.
          </p>
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Final Objective:</strong> Design and implement a secure, scalable authentication and authorization architecture for a real-world Spring Boot application, enforcing all access rules on the backend rather than hiding UI controls on the frontend.
          </div>
        </div>
      </section>

      {/* LESSONS 1-3: AUTHN/AUTHZ, REGISTRATION/LOGIN & PASSWORD HASHING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 1&ndash;3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">1. AuthN vs AuthZ, 2. Registration &amp; Login &amp; 3. Password Hashing</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>401 Unauthorized</strong> means missing or invalid authentication; <strong>403 Forbidden</strong> means the user is authenticated but lacks permission. During <code className="font-mono bg-stone-100 px-1 rounded">POST /api/auth/register</code>, never trust a client-supplied role (always assign <code className="font-mono bg-stone-100 px-1 rounded">STUDENT</code> server-side), use generic login errors, rate-limit attempts, and hash passwords one-way with <strong>Argon2id</strong> or <strong>BCrypt</strong> (never plain text, MD5, SHA-1, or reversible encryption).
          </p>
          <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`@Bean
public PasswordEncoder passwordEncoder() {
  return new BCryptPasswordEncoder(12);
}
// Verify without decrypting:
boolean valid = passwordEncoder.matches(request.password(), user.getPasswordHash());`}
          </pre>
        </div>
      </section>

      {/* LESSONS 4-6: SESSIONS, TOKENS & JWT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 4&ndash;6</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">4. Sessions, 5. Token Auth &amp; 6. JSON Web Tokens (JWT)</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>Session-based auth</strong> stores session state server-side (e.g., Redis for multi-instance apps) and sends a cookie (<code className="font-mono bg-stone-100 px-1 rounded">HttpOnly; Secure; SameSite=Lax</code>) requiring CSRF protection. <strong>Token-based auth</strong> sends <code className="font-mono bg-stone-100 px-1 rounded">Authorization: Bearer &lt;token&gt;</code>.
          </p>
          <p>
            A signed <strong>JWT</strong> (<code className="font-mono bg-stone-100 px-1 rounded">HEADER.PAYLOAD.SIGNATURE</code>) carries claims (<code className="font-mono bg-stone-100 px-1 rounded">sub</code>, <code className="font-mono bg-stone-100 px-1 rounded">iss</code>, <code className="font-mono bg-stone-100 px-1 rounded">aud</code>, <code className="font-mono bg-stone-100 px-1 rounded">exp</code>, <code className="font-mono bg-stone-100 px-1 rounded">jti</code>) signed via <strong>HS256</strong> (symmetric), <strong>RS256</strong>, or <strong>ES256</strong> (asymmetric). <strong>Important:</strong> A signed JWT is Base64URL-encoded, not encrypted&mdash;never put passwords or secrets inside its payload. Always validate signature, algorithm, <code className="font-mono bg-stone-100 px-1 rounded">exp</code>, <code className="font-mono bg-stone-100 px-1 rounded">iss</code>, and <code className="font-mono bg-stone-100 px-1 rounded">aud</code> using <code className="font-mono bg-stone-100 px-1 rounded">spring-boot-starter-oauth2-resource-server</code>.
          </p>
        </div>
      </section>

      {/* LESSONS 7-8: REFRESH TOKENS, OAUTH 2.0 & OIDC */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 7&ndash;8</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">7. Access &amp; Refresh Tokens &bull; 8. OAuth 2.0 &amp; OpenID Connect</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Pair short-lived <strong>access tokens</strong> with rotated <strong>refresh tokens</strong> stored server-side as hashes. When <code className="font-mono bg-stone-100 px-1 rounded">R1</code> is used at <code className="font-mono bg-stone-100 px-1 rounded">POST /api/auth/refresh</code>, invalidate <code className="font-mono bg-stone-100 px-1 rounded">R1</code> and issue <code className="font-mono bg-stone-100 px-1 rounded">R2</code>. If <code className="font-mono bg-stone-100 px-1 rounded">R1</code> is replayed later, detect reuse and revoke the entire token family.
          </p>
          <p>
            <strong>OAuth 2.0</strong> is a delegated authorization framework (access tokens); <strong>OpenID Connect (OIDC)</strong> is the authentication/identity layer on top of OAuth 2.0 (introducing the <strong>ID token</strong>). Use <strong>Authorization Code Flow with PKCE</strong> for SPAs and mobile clients (<code className="font-mono bg-stone-100 px-1 rounded">spring-boot-starter-oauth2-client</code>).
          </p>
        </div>
      </section>

      {/* LESSONS 9-12: RBAC, PERMISSIONS, FILTER CHAIN & REVOCATION */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 9&ndash;12</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">9. RBAC, 10. Permissions, 11. Filter Chain &amp; 12. Logout &amp; Revocation</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Combine <strong>RBAC</strong> (<code className="font-mono bg-stone-100 px-1 rounded">STUDENT</code>, <code className="font-mono bg-stone-100 px-1 rounded">INSTRUCTOR</code>, <code className="font-mono bg-stone-100 px-1 rounded">ADMIN</code> via <code className="font-mono bg-stone-100 px-1 rounded">@PreAuthorize(&quot;hasRole(&apos;ADMIN&apos;)&quot;)</code>) with fine-grained <strong>permissions</strong> (<code className="font-mono bg-stone-100 px-1 rounded">course:create</code> via <code className="font-mono bg-stone-100 px-1 rounded">hasAuthority(&apos;course:create&apos;)</code>) and <strong>resource-level ownership checks</strong> (preventing IDOR/BOLA where an instructor edits another instructor&apos;s course or a student views <code className="font-mono bg-stone-100 px-1 rounded">/api/users/25/enrollments</code>).
          </p>
          <p>
            Because deleting a JWT from browser storage does not revoke a stolen copy, combine short-lived access tokens with refresh-token family revocation on logout, a <code className="font-mono bg-stone-100 px-1 rounded">jti</code> denylist, token-version checks, or signing-key rotation.
          </p>
        </div>
      </section>

      {/* PRACTICAL LAB & ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">Practical Lab &amp; Assignment</span>
          <span className="text-xs text-stone-500 font-mono">Spring Security + PostgreSQL + JWT + RBAC</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Secure Authentication System Lab &amp; Complete Auth Assignment
        </h2>
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Build a complete authentication &amp; authorization system backed by PostgreSQL (<code className="font-mono bg-stone-100 px-1 rounded">Users</code>, <code className="font-mono bg-stone-100 px-1 rounded">Roles</code>, <code className="font-mono bg-stone-100 px-1 rounded">User_Roles</code>, <code className="font-mono bg-stone-100 px-1 rounded">Permissions</code>, <code className="font-mono bg-stone-100 px-1 rounded">Role_Permissions</code>, <code className="font-mono bg-stone-100 px-1 rounded">Refresh_Tokens</code>) exposing <code className="font-mono bg-stone-100 px-1 rounded">/api/auth/register</code>, <code className="font-mono bg-stone-100 px-1 rounded">/login</code>, <code className="font-mono bg-stone-100 px-1 rounded">/refresh</code>, <code className="font-mono bg-stone-100 px-1 rounded">/logout</code>, and role/permission-protected student, instructor, and admin endpoints, with automated tests for 401, 403, tampered JWTs, and refresh-token reuse detection.
          </p>
        </div>
      </section>
    </div>
  );
}
