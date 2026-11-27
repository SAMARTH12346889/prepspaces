import React from "react";
import { ArrowRight } from "lucide-react";

export default function BackendHttpApiDesignSections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; Beginner &rarr; Intermediate
          </span>
          <span className="text-xs font-mono text-stone-500">Module 02</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 02 &mdash; HTTP Protocol and API Design
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Module objective:</strong> Understand how applications communicate through HTTP, how APIs expose application functionality, and how to design consistent, secure, scalable, and well-documented APIs.
          </div>
          <p>
            In Module 01, you learned how backend applications are structured and how a request travels through a backend. In this module, you will go deeper into the communication layer: designing APIs that frontend developers, mobile apps, other backend services, and external integrations can consume without needing to understand your internal implementation.
          </p>
        </div>
      </section>

      {/* SECTION 1: WHAT IS AN API? */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Section 1</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">1. What Is an API?</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>API (Application Programming Interface)</strong> is a defined interface through which one software application communicates with another. Like a restaurant menu, it specifies available operations, required inputs, and expected outputs without exposing internal kitchen/database details. A shared API lets React web, Android, iOS, instructor, and admin clients use the same business rules and security policies.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.4 Different types of APIs</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">API type</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Web API</td><td className="p-3">Communication over web protocols</td><td className="p-3">Course API</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">REST API</td><td className="p-3">Resource-oriented API using HTTP semantics</td><td className="p-3">Student management API</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">GraphQL API</td><td className="p-3">Client-defined data queries through a typed schema</td><td className="p-3">Learning dashboard API</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">gRPC API</td><td className="p-3">Remote procedure calls between applications</td><td className="p-3">Internal service communication</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Library / OS / DB API</td><td className="p-3">Code, OS, or database interfaces</td><td className="p-3">Java collection API, File system API, JDBC</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.5 &ndash; 1.7 Qualities, Terminology &amp; Consumers</h3>
          <p>
            A professional API prioritizes <strong>consistency, predictability, security, validation, documentation, maintainability, performance, and reliability</strong>. Distinguish between the <strong>API</strong> (complete interface), an <strong>Endpoint</strong> (specific address + operation like <code className="font-mono bg-stone-100 px-1 rounded">GET /api/v1/courses</code>), and an <strong>API request</strong> (an individual call like <code className="font-mono bg-stone-100 px-1 rounded">GET /api/v1/courses?category=backend</code>). APIs may be <strong>Public</strong> (external developers with credentials &amp; rate limits), <strong>Private</strong> (internal apps), or <strong>Partner</strong> (approved external organizations).
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">1.8 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What is an API?</li>
              <li>Why should multiple frontend applications use a shared backend API?</li>
              <li>What is the difference between an API and an endpoint?</li>
              <li>Does an API require HTTP?</li>
              <li>What is the difference between public, private, and partner APIs?</li>
              <li>Why is consistency important when designing APIs?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 2: HTTP REQUEST AND RESPONSE LIFECYCLE */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Section 2</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">2. HTTP Request and Response Lifecycle</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>HTTP (Hypertext Transfer Protocol)</strong>&mdash;with core semantics specified in <strong>RFC 9110</strong>&mdash;defines request/response communication. An HTTP request includes a <strong>Method</strong>, <strong>Request target</strong>, <strong>HTTP version/framing</strong>, <strong>Headers</strong>, and optional <strong>Body</strong>. A response includes a <strong>Status code</strong>, <strong>Response headers</strong>, and optional <strong>Response body</strong>.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`POST /api/v1/courses HTTP/1.1
Host: api.prepspaces.com
Content-Type: application/json
Authorization: Bearer <access_token>
Accept: application/json

{
  "title": "Backend Engineering",
  "description": "Learn backend development"
}`}
            </pre>
            <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/v1/courses/course-101

{
  "success": true,
  "data": {
    "id": "course-101",
    "title": "Backend Engineering"
  }
}`}
            </pre>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">2.6 &ndash; 2.9 HTTP Versions, Statelessness &amp; Idempotency Keys</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Version</th>
                  <th className="p-3">Important characteristics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-mono font-bold text-stone-900">HTTP/1.0</td><td className="p-3">Early HTTP; commonly opened separate connections for individual requests</td></tr>
                <tr><td className="p-3 font-mono font-bold text-stone-900">HTTP/1.1</td><td className="p-3">Persistent connections, standardized host handling</td></tr>
                <tr><td className="p-3 font-mono font-bold text-stone-900">HTTP/2</td><td className="p-3">Binary framing, multiplexed streams over one connection, HPACK header compression</td></tr>
                <tr><td className="p-3 font-mono font-bold text-stone-900">HTTP/3</td><td className="p-3">HTTP semantics over QUIC (UDP-based), reducing TCP head-of-line blocking</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            HTTP is <strong>stateless</strong>: every request must carry its own auth credentials (session cookie or bearer token). A <strong>safe method</strong> has read-only semantics (e.g., <code className="font-mono bg-stone-100 px-1 rounded">GET</code>). An <strong>idempotent method</strong> yields the same intended server state when repeated (e.g., <code className="font-mono bg-stone-100 px-1 rounded">GET</code>, <code className="font-mono bg-stone-100 px-1 rounded">PUT</code>, <code className="font-mono bg-stone-100 px-1 rounded">DELETE</code>). For sensitive non-idempotent <code className="font-mono bg-stone-100 px-1 rounded">POST</code> calls (payments, enrollments), use an <code className="font-mono bg-stone-100 px-1 rounded">Idempotency-Key</code> header to prevent duplicate effects on retries.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">2.10 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What are the main components of an HTTP request?</li>
              <li>What does the Content-Type header communicate?</li>
              <li>What is the difference between an HTTP request and response?</li>
              <li>What is the difference between HTTP/1.1, HTTP/2, and HTTP/3?</li>
              <li>Does stateless HTTP mean that a backend cannot maintain user sessions?</li>
              <li>Explain safe and idempotent methods. Why might an API require an idempotency key?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 3: HTTP METHODS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Section 3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">3. HTTP Methods: GET, POST, PUT, PATCH and DELETE</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Method</th>
                  <th className="p-3">Primary purpose</th>
                  <th className="p-3">Safe</th>
                  <th className="p-3">Idempotent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-mono font-bold">GET</td><td className="p-3">Retrieve resource</td><td className="p-3">Yes</td><td className="p-3">Yes</td></tr>
                <tr><td className="p-3 font-mono font-bold">POST</td><td className="p-3">Resource-specific processing / creation</td><td className="p-3">No</td><td className="p-3">Not generally</td></tr>
                <tr><td className="p-3 font-mono font-bold">PUT</td><td className="p-3">Replace resource</td><td className="p-3">No</td><td className="p-3">Yes</td></tr>
                <tr><td className="p-3 font-mono font-bold">PATCH</td><td className="p-3">Partial modification (e.g., JSON Merge Patch)</td><td className="p-3">No</td><td className="p-3">Depends on operation</td></tr>
                <tr><td className="p-3 font-mono font-bold">DELETE</td><td className="p-3">Remove or soft-delete/archive resource</td><td className="p-3">No</td><td className="p-3">Yes</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Common mistakes to avoid:</strong> Never use <code className="font-mono bg-stone-100 px-1 rounded">GET</code> to modify/delete data; never use <code className="font-mono bg-stone-100 px-1 rounded">POST</code> for every RPC-style action (<code className="font-mono bg-stone-100 px-1 rounded">/getCourses</code>); never treat <code className="font-mono bg-stone-100 px-1 rounded">PATCH</code> like full replacement (deleting omitted fields); and never confuse <code className="font-mono bg-stone-100 px-1 rounded">PUT</code> (idempotent replacement) with <code className="font-mono bg-stone-100 px-1 rounded">POST</code>.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">3.11 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>Why is GET considered safe?</li>
              <li>What is the difference between PUT and PATCH?</li>
              <li>Is POST always non-idempotent?</li>
              <li>Why is DELETE idempotent even if repeated requests return different status codes?</li>
              <li>Which HTTP method should be used for retrieving course progress?</li>
              <li>Why should GET not be used for deleting a course?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 4: HTTP STATUS CODES AND HEADERS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Section 4</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">4. HTTP Status Codes and Headers</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
            {[
              ["100–199", "Informational"],
              ["200–299", "Successful"],
              ["300–399", "Redirection"],
              ["400–499", "Client error"],
              ["500–599", "Server error"],
            ].map(([range, label]) => (
              <div key={range} className="p-3 rounded-xl border border-stone-200 bg-stone-50 text-center">
                <div className="font-mono font-bold text-orange-700">{range}</div>
                <div className="text-stone-700 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          <p>
            Key success codes: <strong>200 OK</strong>, <strong>201 Created</strong> (with <code className="font-mono bg-stone-100 px-1 rounded">Location</code>), <strong>202 Accepted</strong> (queued async work), <strong>204 No Content</strong>, and <strong>206 Partial Content</strong>. Redirection/cache: <strong>301</strong>, <strong>302</strong>, <strong>304 Not Modified</strong>. Client errors: <strong>400</strong>, <strong>401</strong>, <strong>403</strong>, <strong>404</strong>, <strong>405</strong>, <strong>406</strong>, <strong>408</strong>, <strong>409 Conflict</strong>, <strong>412 Precondition Failed</strong>, <strong>413</strong>, <strong>415 Unsupported Media Type</strong>, <strong>422 Unprocessable Content</strong>, <strong>429 Too Many Requests</strong>. Server errors: <strong>500</strong>, <strong>501</strong>, <strong>502</strong>, <strong>503</strong>, <strong>504</strong>.
          </p>
          <p>
            <strong>Headers:</strong> <code className="font-mono bg-stone-100 px-1 rounded">Content-Type</code> describes the body being sent; <code className="font-mono bg-stone-100 px-1 rounded">Accept</code> specifies what response format the client wants. <code className="font-mono bg-stone-100 px-1 rounded">Cache-Control</code> and <code className="font-mono bg-stone-100 px-1 rounded">ETag</code> / <code className="font-mono bg-stone-100 px-1 rounded">If-None-Match</code> enable cache validation (304), while <code className="font-mono bg-stone-100 px-1 rounded">If-Match</code> prevents lost updates (412 Precondition Failed). Never publicly cache personalized student data.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">4.16 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What are the five HTTP status code categories?</li>
              <li>When should an API return 201 rather than 200?</li>
              <li>Explain the difference between 400, 409, and 422.</li>
              <li>What is the difference between Content-Type and Accept?</li>
              <li>How does ETag help prevent lost updates?</li>
              <li>Why should personalized student data not be publicly cached?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 5: PARAMETERS & REQUEST BODIES */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Section 5</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">5. Request Parameters, Query Parameters and Request Bodies</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">Path parameter</th>
                  <th className="p-3">Query parameter</th>
                  <th className="p-3">Request body</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Location</td><td className="p-3">URL path</td><td className="p-3">URL query string (<code className="font-mono">?a=b</code>)</td><td className="p-3">HTTP message body</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Main purpose</td><td className="p-3">Identify resource</td><td className="p-3">Filter, sort, search, paginate</td><td className="p-3">Submit structured data</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Common example</td><td className="p-3 font-mono text-xs">/courses/course-101</td><td className="p-3 font-mono text-xs">?category=backend&amp;page=2</td><td className="p-3 font-mono text-xs">{`{"title":"Backend"}`}</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm">
            Always URL-encode special characters (e.g., <code className="font-mono bg-stone-100 px-1 rounded">%20</code> for space) and strictly validate all incoming parameters (<code className="font-mono bg-stone-100 px-1 rounded">page</code> positive integer, bounded <code className="font-mono bg-stone-100 px-1 rounded">pageSize</code>, allowlisted <code className="font-mono bg-stone-100 px-1 rounded">sort</code> fields). Never interpolate query params into SQL.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">5.10 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What is the difference between path and query parameters?</li>
              <li>Why is course-101 a path parameter? Where should course creation data be placed?</li>
              <li>Why must incoming parameters be validated? What is URL encoding?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 6: REST API ARCHITECTURE */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Section 6</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">6. REST API Architecture and Principles</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>REST (Representational State Transfer)</strong> is an architectural style centered on resources and their representations (which do not have to mirror internal DB tables). Its six constraints are: <strong>1. Client-server separation</strong>, <strong>2. Statelessness</strong>, <strong>3. Cacheability</strong>, <strong>4. Uniform interface</strong> (including <strong>HATEOAS</strong> hypermedia links), <strong>5. Layered system</strong> (CDN &rarr; API Gateway &rarr; Load Balancer &rarr; Backend &rarr; DB), and <strong>6. Code on demand (optional)</strong>. REST does not require JSON, though JSON is standard for web APIs.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">6.10 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What is REST? Does REST require JSON?</li>
              <li>What is the difference between a resource and its representation?</li>
              <li>Explain the six REST constraints and HATEOAS.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 7: REST VS GRAPHQL VS GRPC */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Section 7</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">7. REST vs GraphQL vs gRPC</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Factor</th>
                  <th className="p-3">REST</th>
                  <th className="p-3">GraphQL</th>
                  <th className="p-3">gRPC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Communication style</td><td className="p-3">Resource-oriented</td><td className="p-3">Client-defined queries</td><td className="p-3">Remote procedure calls</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Typical transport</td><td className="p-3">HTTP</td><td className="p-3">Commonly HTTP</td><td className="p-3">HTTP/2</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Typical format</td><td className="p-3">JSON</td><td className="p-3">JSON</td><td className="p-3">Protocol Buffers</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Data selection</td><td className="p-3">Determined by endpoint</td><td className="p-3">Selected by client</td><td className="p-3">Defined by message schema</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Streaming</td><td className="p-3">Additional mechanisms needed</td><td className="p-3">Subscriptions</td><td className="p-3">Native (Unary, Server, Client, Bidirectional)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Common use</td><td className="p-3">Web &amp; mobile APIs</td><td className="p-3">Data-intensive client dashboards</td><td className="p-3">Internal service communication</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>GraphQL</strong> solves over-fetching and under-fetching using Queries, Mutations, and Subscriptions, though resolvers must guard against N+1 queries and excessive query complexity. <strong>gRPC</strong> uses <code className="font-mono bg-stone-100 px-1 rounded">.proto</code> contracts and HTTP/2 for high-efficiency service-to-service communication.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">7.8 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>Explain the architectural difference between REST and GraphQL.</li>
              <li>What are over-fetching, under-fetching, and GraphQL resolvers?</li>
              <li>What is Protocol Buffers? Explain unary and bidirectional streaming in gRPC.</li>
              <li>Can a backend combine REST, GraphQL, and gRPC?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 8 & 9: ENDPOINT DESIGN, PAGINATION, FILTERING, SORTING */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 8 &amp; 9</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">8. Resource Design &amp; 9. Pagination, Filtering, Sorting and Searching</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Design endpoints around <strong>plural nouns</strong> in lowercase kebab-case (<code className="font-mono bg-stone-100 px-1 rounded">/api/v1/courses</code>, <code className="font-mono bg-stone-100 px-1 rounded">/api/v1/me/enrollments</code>), avoid deep nesting, and represent complex state transitions explicitly (e.g., <code className="font-mono bg-stone-100 px-1 rounded">POST /api/v1/courses/course-101/publications</code>).
          </p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Factor</th>
                  <th className="p-3">Offset pagination</th>
                  <th className="p-3">Cursor pagination</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Request</td><td className="p-3 font-mono text-xs">page=2&amp;pageSize=10 / offset=20</td><td className="p-3 font-mono text-xs">limit=10&amp;cursor=...</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Large datasets</td><td className="p-3">Can become inefficient</td><td className="p-3">Often better suited</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Concurrent inserts</td><td className="p-3">Can shift page positions</td><td className="p-3">More stable with stable cursor</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Common use</td><td className="p-3">Admin tables &amp; medium lists</td><td className="p-3">Feeds &amp; large collections</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm">
            Combine retrieval controls safely: <code className="font-mono bg-stone-100 px-1 rounded">GET /api/v1/courses?category=backend&amp;status=published&amp;search=java&amp;sort=-createdAt&amp;page=1&amp;pageSize=20</code>, enforcing default/max page limits and allowlisted sort fields.
          </p>
        </div>
      </section>

      {/* SECTION 10, 11 & 12: VERSIONING, OPENAPI & CONTRACT-FIRST */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Sections 10&ndash;12</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">10. Versioning, 11. OpenAPI &amp; 12. Contract-First Design</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Use <strong>URI path versioning</strong> (<code className="font-mono bg-stone-100 px-1 rounded">/api/v1</code>, <code className="font-mono bg-stone-100 px-1 rounded">/api/v2</code>), header versioning, or media-type versioning. Adding optional response fields or new endpoints is usually backward-compatible; removing/renaming fields or changing types is breaking and requires a controlled deprecation and migration window.
          </p>
          <p>
            <strong>OpenAPI (OAS 3.2.1)</strong> is the YAML/JSON specification format for describing HTTP APIs (<code className="font-mono bg-stone-100 px-1 rounded">paths</code>, <code className="font-mono bg-stone-100 px-1 rounded">components.schemas</code>, <code className="font-mono bg-stone-100 px-1 rounded">$ref</code>, <code className="font-mono bg-stone-100 px-1 rounded">securitySchemes</code>). <strong>Swagger</strong> (Swagger Editor, Swagger UI, Codegen) is the tooling ecosystem that works with OpenAPI documents.
          </p>
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70">
            <div className="text-xs font-bold text-stone-800 mb-2">12.3 Contract-First Development Workflow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {[
                "Requirements",
                "Consumers",
                "Resources",
                "Endpoints & Methods",
                "Schemas & Errors",
                "OpenAPI Contract",
                "Team Review & Mock",
                "Implement & Contract Test",
              ].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-stone-300 text-stone-900 font-semibold">{step}</span>
                  {i < arr.length - 1 && <ArrowRight size={14} className="text-orange-600 shrink-0" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL LAB & ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">Practical Lab &amp; Assignment</span>
          <span className="text-xs text-stone-500 font-mono">Lab: 3&ndash;5h &bull; Assignment: 6&ndash;8h (100 marks)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Course Management API Lab &amp; Complete API Contract Assignment
        </h2>
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Design and document a complete REST API (<code className="font-mono bg-stone-100 px-1 rounded">https://api.example.com/api/v1</code>) supporting <strong>Administrator</strong>, <strong>Instructor</strong>, and <strong>Student</strong> roles across at least <strong>22 endpoints</strong> (<code className="font-mono bg-stone-100 px-1 rounded">/auth/login</code>, <code className="font-mono bg-stone-100 px-1 rounded">/me</code>, <code className="font-mono bg-stone-100 px-1 rounded">/courses</code>, <code className="font-mono bg-stone-100 px-1 rounded">/courses/{`{courseId}`}/publications</code>, <code className="font-mono bg-stone-100 px-1 rounded">/me/enrollments</code>, <code className="font-mono bg-stone-100 px-1 rounded">/me/lessons/{`{lessonId}`}/completion</code>, <code className="font-mono bg-stone-100 px-1 rounded">/assignments/{`{assignmentId}`}/submissions</code>, <code className="font-mono bg-stone-100 px-1 rounded">/courses/{`{courseId}`}/reports/progress</code>).
          </p>
          <p className="text-xs sm:text-sm">
            Deliverables include reusable schemas (User, Student, Instructor, Course, Module, Lesson, Enrollment, Assignment, Submission, Progress, Error), permission matrix, consistent error responses (401, 403, 404, 409, 422, 429), validated <code className="font-mono bg-stone-100 px-1 rounded">openapi.yaml</code>, Swagger UI preview, and contract test cases.
          </p>
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs sm:text-sm text-stone-900">
            <strong>Central Engineering Principle:</strong> An API is not just a collection of URLs. It is a carefully designed contract that defines how independent software systems communicate, exchange information, handle failures, and evolve without unexpectedly breaking one another.
          </div>
        </div>
      </section>
    </div>
  );
}
