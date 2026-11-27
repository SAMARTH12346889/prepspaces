import React from "react";
import {
  Server,
  Layers,
  ShieldCheck,
  Database,
  Globe,
  Cpu,
  GitBranch,
  Terminal,
  ClipboardCheck,
  BookOpen,
  ArrowRight,
  ArrowDown,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export default function BackendFoundationsSections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; Beginner &rarr; Intermediate
          </span>
          <span className="text-xs font-mono text-stone-500">Module 01</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 01 &mdash; Backend Engineering Foundations
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Module objective:</strong> Understand how backend systems work, how applications communicate with servers, how requests are processed, and how to translate application requirements into a backend architecture.
          </div>
          <p>
            Backend engineering is not simply about writing APIs or connecting a database. It is about designing and building the systems that receive requests, execute business rules, manage data, enforce security, communicate with other services, and return reliable responses.
          </p>
          <p>
            By the end of this module, you should be able to look at an application such as a learning platform, an e-commerce website, or a banking application and explain what happens behind the interface.
          </p>
        </div>
      </section>

      {/* SECTION 1: WHAT IS BACKEND ENGINEERING? */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            1. What Is Backend Engineering?
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">1.1 Understanding the backend</h3>
          <p>
            Consider a student using an online learning platform. The student opens a course, watches a lesson, marks it as completed, and checks their learning progress. The student sees buttons, text, videos, progress bars, and menus. These are primarily part of the frontend. But several important operations happen behind the interface:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The application checks whether the student is logged in.</li>
            <li>It identifies which student is making the request.</li>
            <li>It retrieves the course and lesson information.</li>
            <li>It checks whether the lesson belongs to that course.</li>
            <li>It records that the student completed the lesson.</li>
            <li>It calculates the updated course progress.</li>
            <li>It sends the updated information back to the frontend.</li>
          </ul>
          <p>
            <strong>Backend engineering</strong> is the discipline of designing, developing, testing, deploying, and maintaining the server-side components of an application. The backend is responsible for the application&apos;s rules, data processing, access control, and communication with other systems.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.2 The three major parts of an application</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-orange-700">Frontend &mdash; User Interface</div>
              <p className="text-xs text-stone-600">What the user sees and interacts with: Pages, Forms, Buttons, Dashboards. Sends HTTP/HTTPS requests and receives responses.</p>
              <p className="text-xs text-stone-700">Handles user interactions and presentation. It may perform basic validation for UX, but cannot be trusted to enforce important security rules.</p>
            </div>
            <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/50 space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-orange-800">Backend &mdash; Application Logic</div>
              <p className="text-xs text-stone-600">Processes requests and enforces business rules: APIs, Authentication, Validation, Services. Executes database queries.</p>
              <p className="text-xs text-stone-700">Receives requests, verifies permissions, runs business logic, coordinates operations, and decides what information to return.</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-orange-700">Database &mdash; Persistent Storage</div>
              <p className="text-xs text-stone-600">Stores and retrieves application data: Students, Courses, Progress, Transactions.</p>
              <p className="text-xs text-stone-700">Stores information so that it remains available after a user closes the application or a server restarts.</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-600">
            A production system may have additional components, such as a cache, message queue, object storage, search engine, and external services.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.3 What responsibilities does a backend perform?</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Responsibility</th>
                  <th className="p-3">What it means</th>
                  <th className="p-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Request handling</td><td className="p-3">Receives client requests</td><td className="p-3">Student opens a course</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Authentication</td><td className="p-3">Establishes who the user is</td><td className="p-3">Verify a login session</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Authorization</td><td className="p-3">Determines what the user may do</td><td className="p-3">Only an instructor edits a course</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Business logic</td><td className="p-3">Implements application rules</td><td className="p-3">Calculate course completion</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Data management</td><td className="p-3">Reads and writes information</td><td className="p-3">Save lesson progress</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Validation</td><td className="p-3">Checks submitted data</td><td className="p-3">Reject an invalid email</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Integration</td><td className="p-3">Communicates with other systems</td><td className="p-3">Send an email through a provider</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Security</td><td className="p-3">Protects application resources</td><td className="p-3">Prevent unauthorized access</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Reliability</td><td className="p-3">Handles errors and failures</td><td className="p-3">Retry a temporary service failure</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Observability</td><td className="p-3">Makes system behavior visible</td><td className="p-3">Record errors and request latency</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.4 Backend engineering is more than CRUD</h3>
          <p>
            CRUD stands for <strong>Create</strong> (add), <strong>Read</strong> (retrieve), <strong>Update</strong> (modify), and <strong>Delete</strong> (remove). However, real backend engineering requires system thinking, not simply endpoint creation. Suppose a student submits an assignment. The backend may need to:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Confirm the student is authenticated.</li>
            <li>Verify that the student is enrolled in the course.</li>
            <li>Check whether the assignment exists.</li>
            <li>Validate the uploaded file.</li>
            <li>Verify that the submission deadline has not passed.</li>
            <li>Store the submission securely.</li>
            <li>Record the submission in the database.</li>
            <li>Notify the instructor.</li>
            <li>Return a confirmation to the student.</li>
          </ol>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.5 A practical example: Mark a lesson as completed</h3>
          <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`POST /api/v1/lessons/lesson-101/complete
Authorization: Bearer <access_token>
Content-Type: application/json`}
          </pre>
          <p className="text-xs sm:text-sm">
            Operations: (1) Receive request &rarr; (2) Validate access token &rarr; (3) Identify student &rarr; (4) Find <code className="font-mono bg-stone-100 px-1 rounded">lesson-101</code> &rarr; (5) Verify enrollment &rarr; (6) Check completion eligibility &rarr; (7) Save completion &rarr; (8) Recalculate progress &rarr; (9) Return result.
          </p>
          <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`{
  "success": true,
  "message": "Lesson completed successfully",
  "data": {
    "lessonId": "lesson-101",
    "completed": true,
    "courseProgress": 25
  }
}`}
          </pre>
          <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-800">
            <strong>Design Principle:</strong> The frontend does not decide that the student has completed 25% of the course. The backend calculates this using the actual records and the application&apos;s rules.
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.6 Where does backend code run?</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Runtime or platform</th>
                  <th className="p-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Node.js</td><td className="p-3">Runs JavaScript outside the browser</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Java Virtual Machine (JVM)</td><td className="p-3">Executes Java applications</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">.NET runtime</td><td className="p-3">Executes supported .NET applications</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Python runtime</td><td className="p-3">Executes Python applications</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Go runtime environment</td><td className="p-3">Runs compiled Go applications</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Cloudflare Workers runtime</td><td className="p-3">Runs applications at Cloudflare&apos;s edge</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">1.7 Important terminology</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/50"><strong>API:</strong> A defined interface that allows one software system to communicate with another.</div>
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/50"><strong>Endpoint:</strong> A particular API address and method combination, such as <code className="font-mono">GET /api/v1/courses</code>.</div>
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/50"><strong>Request:</strong> Information sent to a server by a client.</div>
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/50"><strong>Response:</strong> Information returned by the server.</div>
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/50"><strong>Business logic:</strong> Rules that describe how an application is supposed to behave.</div>
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/50"><strong>Persistence:</strong> The ability to retain data beyond the lifetime of a single operation or process.</div>
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/50"><strong>Scalability:</strong> The ability of a system to handle increasing workloads by using available resources effectively.</div>
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/50"><strong>Availability:</strong> The extent to which a system is accessible and functioning when users need it.</div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">1.8 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What is the primary responsibility of a backend?</li>
              <li>Why should the frontend not be trusted to calculate important business rules?</li>
              <li>What is the difference between authentication and authorization?</li>
              <li>Why is backend engineering more than CRUD?</li>
              <li>Where can backend applications run?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 2: FRONTEND VS BACKEND VS FULL-STACK ARCHITECTURE */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            2. Frontend vs Backend vs Full-Stack Architecture
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">2.1 Understanding the distinction</h3>
          <p>
            <strong>Frontend development</strong> focuses on the user experience and interface. <strong>Backend development</strong> focuses on server-side behavior, data, application rules, and integrations. <strong>Full-stack development</strong> involves working across both layers, understanding how the two communicate and fit together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-stone-900">2.2 Frontend architecture</h3>
              <p className="text-xs sm:text-sm">Runs inside a browser: displays pages/components, collects input, manages UI state, sends API requests, and handles loading/error states. Browser code is accessible to the user and must never hold secret API keys, DB credentials, or authoritative permission rules.</p>
              <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`Frontend Application
├── Pages (LoginPage, DashboardPage, CoursePage)
├── Components (Navbar, CourseCard, ProgressBar)
├── Services (authService, courseService)
├── State Management
└── Routing`}
              </pre>
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-stone-900">2.3 Backend architecture</h3>
              <p className="text-xs sm:text-sm">Runs in a server-side environment: receives HTTP requests, authenticates users, enforces permissions, validates data, executes business logic, talks to databases/external services, and returns HTTP responses.</p>
              <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`Backend Application
├── Routes (authRoutes, studentRoutes, courseRoutes)
├── Controllers (authController, studentController, courseController)
├── Services (authService, studentService, courseService)
├── Repositories (studentRepository, courseRepository)
├── Middleware (authentication, authorization, errorHandler)
├── Database
└── Configuration`}
              </pre>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">2.4 Full-stack architecture (Student Dashboard)</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">User action</th>
                  <th className="p-3">Frontend responsibility</th>
                  <th className="p-3">Backend responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Log in</td><td className="p-3">Collect credentials and submit them</td><td className="p-3">Verify credentials and establish a session</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">View courses</td><td className="p-3">Request and display courses</td><td className="p-3">Verify access and retrieve courses</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Open a lesson</td><td className="p-3">Display lesson content</td><td className="p-3">Return permitted lesson content</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Complete a lesson</td><td className="p-3">Send completion request</td><td className="p-3">Validate and save completion</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">View progress</td><td className="p-3">Display progress data</td><td className="p-3">Calculate and return authoritative progress</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Update profile</td><td className="p-3">Collect edits and display result</td><td className="p-3">Validate and persist permitted changes</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">2.5 Complete architecture example: Clicking &ldquo;My Courses&rdquo;</h3>
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {[
                "1. Student",
                "2. Frontend (React)",
                "3. GET /api/v1/courses",
                "4. Auth Middleware",
                "5. Course Service",
                "6. Course Repository",
                "7. Database",
                "8. 200 OK + JSON",
                "9. Render Course Cards",
              ].map((step, i, arr) => (
                <React.Fragment key={step}>
                  <span className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-900 font-semibold shadow-2xs">
                    {step}
                  </span>
                  {i < arr.length - 1 && <ArrowRight size={14} className="text-orange-600 shrink-0" />}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-3 text-xs text-stone-600">
              The frontend does not directly query the private database. The backend provides a controlled interface to the data.
            </p>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">2.6 Comparison: Frontend vs Backend vs Full-Stack</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Area</th>
                  <th className="p-3">Frontend</th>
                  <th className="p-3">Backend</th>
                  <th className="p-3">Full-stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Primary focus</td><td className="p-3">User interface</td><td className="p-3">Server-side systems</td><td className="p-3">Complete application</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Main environment</td><td className="p-3">Browser</td><td className="p-3">Server or managed runtime</td><td className="p-3">Both</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Typical technologies</td><td className="p-3">React, Vue, Angular</td><td className="p-3">Java, Node.js, Python, Go</td><td className="p-3">Combination</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Main interfaces</td><td className="p-3">UI components</td><td className="p-3">APIs and services</td><td className="p-3">UI and APIs</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Data responsibility</td><td className="p-3">Display and temporary state</td><td className="p-3">Trusted data processing</td><td className="p-3">End-to-end data flow</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Security responsibility</td><td className="p-3">Safe handling of user interactions</td><td className="p-3">Authentication, authorization, validation</td><td className="p-3">Understanding security across both</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Testing</td><td className="p-3">UI and component tests</td><td className="p-3">API, integration, and service tests</td><td className="p-3">End-to-end and component tests</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">2.7 Frontend validation vs backend validation</h3>
          <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200 text-xs sm:text-sm text-stone-800">
            <strong>Frontend validation improves the experience. Backend validation protects the system.</strong> Users can modify browser code or send direct HTTP requests without using the UI, so prices, permissions, enrollment status, discounts, and file uploads must always be validated on the backend.
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">2.8 When is each specialization useful?</h3>
          <p className="text-xs sm:text-sm">
            Choose <strong>frontend</strong> for interface engineering, visual systems, accessibility, and UX. Choose <strong>backend</strong> for APIs, data architecture, algorithms, security, distributed systems, and reliability. Choose <strong>full-stack</strong> to build complete features across both layers.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">2.9 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>Why should a frontend application not connect directly to a private production database?</li>
              <li>What is the purpose of the service layer in a backend?</li>
              <li>Why should an important input be validated by both the frontend and backend?</li>
              <li>What makes a developer full-stack?</li>
              <li>Which component is responsible for enforcing access to a student&apos;s private course data?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 3: CLIENT-SERVER ARCHITECTURE */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            3. Client-Server Architecture
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">3.1 &ndash; 3.3 Client-server model</h3>
          <p>
            In client-server architecture, the <strong>client</strong> initiates communication by requesting a service or resource, and the <strong>server</strong> listens for requests, processes them, and returns a response. Clients (web browsers, mobile apps, desktop apps, <code className="font-mono bg-stone-100 px-1 rounded">curl</code>, or another backend service) only need to follow the API contract&mdash;not the server&apos;s internal language or implementation.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">3.4 How client and server communicate (HTTP)</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-bold text-stone-700 mb-1">Example HTTP Request</div>
              <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`POST /api/v1/students HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <access_token>

{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "department": "Computer Science"
}`}
              </pre>
            </div>
            <div>
              <div className="text-xs font-bold text-stone-700 mb-1">Example HTTP Response</div>
              <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`HTTP/1.1 201 Created
Content-Type: application/json

{
  "success": true,
  "message": "Student created successfully",
  "data": {
    "id": "stu-1001",
    "name": "Rahul Sharma",
    "email": "rahul@example.com"
  }
}`}
              </pre>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">3.5 HTTP methods &amp; idempotency</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Method</th>
                  <th className="p-3">Typical purpose</th>
                  <th className="p-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-mono font-bold text-stone-900">GET</td><td className="p-3">Retrieve a resource</td><td className="p-3 font-mono text-xs">GET /api/v1/students</td></tr>
                <tr><td className="p-3 font-mono font-bold text-stone-900">POST</td><td className="p-3">Create a resource or perform an operation</td><td className="p-3 font-mono text-xs">POST /api/v1/students</td></tr>
                <tr><td className="p-3 font-mono font-bold text-stone-900">PUT</td><td className="p-3">Replace a resource representation</td><td className="p-3 font-mono text-xs">PUT /api/v1/students/stu-1001</td></tr>
                <tr><td className="p-3 font-mono font-bold text-stone-900">PATCH</td><td className="p-3">Partially update a resource</td><td className="p-3 font-mono text-xs">PATCH /api/v1/students/stu-1001</td></tr>
                <tr><td className="p-3 font-mono font-bold text-stone-900">DELETE</td><td className="p-3">Delete a resource</td><td className="p-3 font-mono text-xs">DELETE /api/v1/students/stu-1001</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm">
            <strong>Idempotency:</strong> An operation is idempotent when repeating the same request has the same intended effect as performing it once (e.g., <code className="font-mono bg-stone-100 px-1 rounded">PUT</code> replacing a record). A <code className="font-mono bg-stone-100 px-1 rounded">POST</code> that creates a student is generally not idempotent unless duplicate protection or an idempotency mechanism is implemented.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">3.6 Understanding HTTP status codes</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Code</th>
                  <th className="p-3">Meaning</th>
                  <th className="p-3">Common scenario</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-mono font-bold text-emerald-700">200</td><td className="p-3">OK</td><td className="p-3">Data retrieved successfully</td></tr>
                <tr><td className="p-3 font-mono font-bold text-emerald-700">201</td><td className="p-3">Created</td><td className="p-3">Student created</td></tr>
                <tr><td className="p-3 font-mono font-bold text-emerald-700">204</td><td className="p-3">No Content</td><td className="p-3">Successful operation with no response body</td></tr>
                <tr><td className="p-3 font-mono font-bold text-amber-700">400</td><td className="p-3">Bad Request</td><td className="p-3">Invalid request data</td></tr>
                <tr><td className="p-3 font-mono font-bold text-rose-700">401</td><td className="p-3">Unauthorized</td><td className="p-3">Missing or invalid authentication</td></tr>
                <tr><td className="p-3 font-mono font-bold text-rose-700">403</td><td className="p-3">Forbidden</td><td className="p-3">Authenticated but insufficient permission</td></tr>
                <tr><td className="p-3 font-mono font-bold text-amber-700">404</td><td className="p-3">Not Found</td><td className="p-3">Requested student does not exist</td></tr>
                <tr><td className="p-3 font-mono font-bold text-amber-700">409</td><td className="p-3">Conflict</td><td className="p-3">Duplicate or conflicting operation</td></tr>
                <tr><td className="p-3 font-mono font-bold text-amber-700">422</td><td className="p-3">Unprocessable Content</td><td className="p-3">Request content fails business validation</td></tr>
                <tr><td className="p-3 font-mono font-bold text-amber-700">429</td><td className="p-3">Too Many Requests</td><td className="p-3">Rate limit exceeded</td></tr>
                <tr><td className="p-3 font-mono font-bold text-rose-700">500</td><td className="p-3">Internal Server Error</td><td className="p-3">Unexpected server-side failure</td></tr>
                <tr><td className="p-3 font-mono font-bold text-rose-700">502</td><td className="p-3">Bad Gateway</td><td className="p-3">Invalid response from an upstream server</td></tr>
                <tr><td className="p-3 font-mono font-bold text-rose-700">503</td><td className="p-3">Service Unavailable</td><td className="p-3">Service temporarily unable to handle requests</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">3.7 &ndash; 3.9 Statelessness, Sync vs Async &amp; Unavailability</h3>
          <p>
            <strong>Stateless communication:</strong> HTTP itself does not remember previous requests. Applications maintain identity using session cookies or access tokens validated on each request. Any suitable backend instance can process a request if it has access to shared state/auth context.
          </p>
          <p>
            <strong>Synchronous vs Asynchronous:</strong> Synchronous calls wait for the full response (e.g., retrieving a student profile). Asynchronous processing accepts work into a message queue for a background worker (e.g., generating a large course completion report) and returns a <code className="font-mono bg-stone-100 px-1 rounded">jobId</code> immediately. When the server is unavailable (crashed process, network/DNS failure, DB down, overload), clients should handle errors deliberately rather than showing a blank screen.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">3.10 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>Explain the client-server model with a web application example.</li>
              <li>What is the difference between a client and a server?</li>
              <li>How do PUT and PATCH differ?</li>
              <li>What is the difference between 401 and 403?</li>
              <li>What does stateless communication mean?</li>
              <li>Why might a backend use a message queue instead of performing every task immediately?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW A BACKEND REQUEST IS PROCESSED */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            4. How a Backend Request Is Processed
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-base sm:text-lg font-bold text-stone-900">4.1 The complete 12-step request lifecycle</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {[
              "1. User action & frontend request (fetch /api/v1/me/courses)",
              "2. DNS resolution (api.example.com -> 203.0.113.10)",
              "3. Network connection (TCP/QUIC + TLS encryption)",
              "4. Edge / Reverse Proxy / Load Balancer / WAF",
              "5. Middleware (logging, rate limit, CORS, tracing)",
              "6. Authentication (Who is making this request?)",
              "7. Authorization (What is this identity permitted to do?)",
              "8. Route matching & Controller execution",
              "9. Business logic execution in Service layer",
              "10. Parameterized SQL / Repository database access",
              "11. Response construction (sanitized JSON + status)",
              "12. Frontend receives response & updates UI",
            ].map((item) => (
              <div key={item} className="p-3 rounded-xl border border-stone-200 bg-stone-50/70 font-medium text-stone-800">
                {item}
              </div>
            ))}
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">4.2 &ndash; 4.8 Networking, Middleware, AuthN &amp; AuthZ</h3>
          <p>
            In production, requests pass through DNS lookup, TLS handshake, and often a <strong>Reverse Proxy</strong>, <strong>Load Balancer</strong>, <strong>WAF</strong>, or <strong>CDN</strong> before reaching the application server. <strong>Middleware</strong> handles cross-cutting concerns (logging without leaking secrets, rate limiting, CORS, error handling).
          </p>
          <p>
            <strong>Authentication</strong> verifies identity (e.g., validating a signed Bearer token). <strong>Authorization</strong> enforces permissions: checking only that a user is logged in is not enough (preventing broken object-level authorization such as changing <code className="font-mono bg-stone-100 px-1 rounded">stu-1001</code> to <code className="font-mono bg-stone-100 px-1 rounded">stu-1002</code>). Using <code className="font-mono bg-stone-100 px-1 rounded">GET /api/v1/me/progress</code> derives the student ID from the authenticated context.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">4.9 &ndash; 4.12 Controller, Service &amp; Parameterized SQL</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`// Controller
async function getMyCourses(req, res, next) {
  try {
    const studentId = req.user.id;
    const courses = await courseService.getEnrolledCourses(studentId);
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    next(error);
  }
}`}
            </pre>
            <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`-- Parameterized SQL Query
SELECT courses.id, courses.title, enrollments.created_at
FROM enrollments
JOIN courses ON enrollments.course_id = courses.id
WHERE enrollments.student_id = ?
  AND enrollments.status = 'active'
  AND courses.status = 'published';`}
            </pre>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">4.14 &ndash; 4.15 Failures &amp; Latency</h3>
          <p>
            Do not expose internal stack traces, database credentials, or raw SQL errors to ordinary API clients. Total request latency is modeled as:
          </p>
          <div className="p-3 rounded-xl bg-stone-100 font-mono text-xs text-stone-900">
            T_total = T_network + T_middleware + T_application + T_database + T_external_services
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">4.16 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>Explain the complete lifecycle of an HTTP request.</li>
              <li>What does DNS do?</li>
              <li>Why is a reverse proxy sometimes placed in front of an application server?</li>
              <li>What is the difference between middleware, controllers, and services?</li>
              <li>Why should the backend derive a user&apos;s identity from validated authentication information?</li>
              <li>What information would you measure when investigating a slow API?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 5: APPLICATION SERVERS AND RUNTIME ENVIRONMENTS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            5. Application Servers and Runtime Environments
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            An <strong>application server</strong> executes backend logic and handles operations (e.g., Spring Boot on JVM, Express on Node.js, Gunicorn/Uvicorn for Python). Understanding the distinction between <strong>language</strong> (JavaScript, Java), <strong>runtime</strong> (Node.js, JVM, Python interpreter, .NET, Go), and <strong>framework</strong> (Express, Spring Boot) avoids architectural confusion.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">5.4 &ndash; 5.7 Lifecycle, Ports, Concurrency &amp; Parallelism</h3>
          <p>
            A backend process goes through: <strong>1. Startup</strong> &rarr; <strong>2. Initialization</strong> &rarr; <strong>3. Listening</strong> on a port (e.g., <code className="font-mono bg-stone-100 px-1 rounded">localhost:3000</code>) &rarr; <strong>4. Request processing</strong> &rarr; <strong>5. Graceful shutdown</strong>.
          </p>
          <p>
            <strong>Concurrency</strong> means organizing multiple tasks to make progress during overlapping periods (e.g., waiting on DB/network I/O). <strong>Parallelism</strong> means executing multiple tasks simultaneously on multiple CPU cores.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">5.8 &ndash; 5.10 Configuration, Secrets &amp; Deployment Models</h3>
          <p>
            Never commit secrets (<code className="font-mono bg-stone-100 px-1 rounded">DATABASE_URL</code>, <code className="font-mono bg-stone-100 px-1 rounded">JWT_SECRET</code>) to Git or frontend code; use environment variables and managed secrets systems. Backend deployment models include <strong>VMs/Traditional servers</strong>, <strong>Containers (Docker)</strong>, <strong>Serverless computing</strong>, and <strong>Edge computing</strong>.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">5.11 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What is the difference between a language, runtime, and framework?</li>
              <li>What happens during application startup?</li>
              <li>What is the purpose of a port?</li>
              <li>Explain concurrency and parallelism.</li>
              <li>Why should production secrets not be stored in source code?</li>
              <li>What is the difference between container deployment and serverless deployment?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 6: MONOLITHIC AND DISTRIBUTED BACKEND APPLICATIONS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            6. Monolithic and Distributed Backend Applications
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            A <strong>monolithic application</strong> develops and deploys major capabilities as a single unit (a well-structured modular monolith still maintains clean internal boundaries). A <strong>distributed application</strong> (such as <strong>microservices</strong>) consists of independently running components communicating over a network.
          </p>

          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Factor</th>
                  <th className="p-3">Monolithic</th>
                  <th className="p-3">Distributed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Deployment</td><td className="p-3">One application unit</td><td className="p-3">Multiple independently deployed components</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Internal communication</td><td className="p-3">Often in-process</td><td className="p-3">Commonly network-based</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Initial complexity</td><td className="p-3">Usually lower</td><td className="p-3">Usually higher</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Scaling</td><td className="p-3">Often scales the whole application</td><td className="p-3">Individual services can scale independently</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Failure handling</td><td className="p-3">Shared process failure domain</td><td className="p-3">Isolated, but failures can propagate</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Data management</td><td className="p-3">Often a shared database</td><td className="p-3">May involve multiple data stores</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Distributed systems introduce network failure, timeouts, partial failure, data consistency challenges, and <strong>eventual consistency</strong> (e.g., Enrollment Service publishes <code className="font-mono bg-stone-100 px-1 rounded">CourseEnrolled</code> to a message broker; Notification and Analytics consumers process it asynchronously).
          </p>
          <div className="p-3 rounded-lg bg-orange-50/70 border border-orange-200 text-xs sm:text-sm text-stone-800">
            <strong>Architectural Principle:</strong> Start with the simplest architecture that satisfies the real requirements (often a modular monolith), then introduce distribution when there is a measurable reason to do so.
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">6.14 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What makes a monolithic backend monolithic?</li>
              <li>Can a monolithic application have well-separated modules?</li>
              <li>What is a microservice?</li>
              <li>Why does distributed architecture introduce network failure concerns?</li>
              <li>Explain eventual consistency using the enrollment example.</li>
              <li>Why is starting with microservices not always the best choice?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 7: BACKEND ARCHITECTURE PATTERNS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            7. Introduction to Backend Architecture Patterns
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Pattern</th>
                  <th className="p-3">Main goal</th>
                  <th className="p-3">Suitable situation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Layered</td><td className="p-3">Separate responsibilities into layers (Presentation, Application, Domain, Data Access)</td><td className="p-3">Most conventional backend applications</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">MVC</td><td className="p-3">Separate Model, View, and Controller concerns</td><td className="p-3">Web applications</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Clean Architecture</td><td className="p-3">Isolate business logic from frameworks and infrastructure</td><td className="p-3">Complex domains with long-term maintenance needs</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Repository</td><td className="p-3">Separate data access from business operations</td><td className="p-3">Systems with meaningful persistence abstraction</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Service-oriented (SOA)</td><td className="p-3">Organize functionality around service capabilities</td><td className="p-3">Systems with clear service boundaries</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Event-driven</td><td className="p-3">React to events asynchronously (e.g. StudentRegistered)</td><td className="p-3">Notifications, workflows, analytics, integrations</td></tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">7.10 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What problem does layered architecture solve?</li>
              <li>What are the three conceptual components of MVC?</li>
              <li>What is the main dependency principle behind Clean Architecture?</li>
              <li>Why use a repository instead of writing database queries directly in every controller?</li>
              <li>What is an event-driven system?</li>
              <li>Can an application combine layered architecture with event-driven communication?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW TO DESIGN A BACKEND APPLICATION FROM REQUIREMENTS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            8. How to Design a Backend Application from Requirements
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Designing a <strong>Student Management System</strong> starts with understanding <strong>functional requirements</strong> (capabilities) and <strong>non-functional requirements</strong> (security, performance, concurrency, backups, recovery), identifying roles (<strong>Administrator</strong>, <strong>Instructor</strong>, <strong>Student</strong>), and modeling core entities: <code className="font-mono bg-stone-100 px-1 rounded">users</code>, <code className="font-mono bg-stone-100 px-1 rounded">students</code>, <code className="font-mono bg-stone-100 px-1 rounded">instructors</code>, <code className="font-mono bg-stone-100 px-1 rounded">courses</code>, <code className="font-mono bg-stone-100 px-1 rounded">enrollments</code>, <code className="font-mono bg-stone-100 px-1 rounded">attendance</code>, <code className="font-mono bg-stone-100 px-1 rounded">assignments</code>, and <code className="font-mono bg-stone-100 px-1 rounded">submissions</code>.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">8.6 Initial API contract</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Method</th>
                  <th className="p-3">Endpoint</th>
                  <th className="p-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-mono font-bold">POST</td><td className="p-3 font-mono text-xs">/api/v1/auth/login</td><td className="p-3">Authenticate a user</td></tr>
                <tr><td className="p-3 font-mono font-bold">GET / POST</td><td className="p-3 font-mono text-xs">/api/v1/students</td><td className="p-3">List or register students</td></tr>
                <tr><td className="p-3 font-mono font-bold">GET / PATCH / DELETE</td><td className="p-3 font-mono text-xs">/api/v1/students/:id</td><td className="p-3">Retrieve, update, or deactivate a student</td></tr>
                <tr><td className="p-3 font-mono font-bold">GET / POST</td><td className="p-3 font-mono text-xs">/api/v1/courses</td><td className="p-3">List or create courses</td></tr>
                <tr><td className="p-3 font-mono font-bold">POST</td><td className="p-3 font-mono text-xs">/api/v1/courses/:id/enrollments</td><td className="p-3">Enroll a student</td></tr>
                <tr><td className="p-3 font-mono font-bold">GET</td><td className="p-3 font-mono text-xs">/api/v1/me/courses</td><td className="p-3">Retrieve the authenticated student&apos;s courses</td></tr>
                <tr><td className="p-3 font-mono font-bold">POST</td><td className="p-3 font-mono text-xs">/api/v1/attendance</td><td className="p-3">Record attendance</td></tr>
                <tr><td className="p-3 font-mono font-bold">POST</td><td className="p-3 font-mono text-xs">/api/v1/assignments/:id/submissions</td><td className="p-3">Submit an assignment</td></tr>
                <tr><td className="p-3 font-mono font-bold">GET</td><td className="p-3 font-mono text-xs">/api/v1/reports/enrollments</td><td className="p-3">Retrieve an enrollment report</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">8.8 Modular monolith project structure</h3>
          <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`student-management-backend/
├── src/
│   ├── modules/ (auth, students, courses, enrollments, attendance, assignments, reports)
│   ├── middleware/
│   ├── database/
│   ├── config/
│   ├── common/
│   └── app.js
├── tests/
├── migrations/
├── .env.example
└── package.json`}
          </pre>
          <p className="text-xs sm:text-sm">
            Plan <strong>security</strong> (password hashing, HTTPS, input validation, parameterized queries, rate limiting, audit logs, file validation) and <strong>testing &amp; reliability</strong> (unit, integration, API, authorization, performance, security, E2E tests, backups, health checks) from day one.
          </p>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">8.13 Knowledge check</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm text-stone-800">
              <li>What is the difference between functional and non-functional requirements?</li>
              <li>Why should users, roles, and permissions be identified before API implementation?</li>
              <li>Why is an enrollment table useful for the relationship between students and courses?</li>
              <li>What should be documented in an API contract?</li>
              <li>Why is a modular monolith appropriate for many early-stage applications?</li>
              <li>At which stages should security and reliability be considered?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* PRACTICAL LAB */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">
            Practical Lab
          </span>
          <span className="text-xs text-stone-500 font-mono">Estimated effort: 2&ndash;3 hours</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Practical Lab &mdash; Trace a Complete Backend Request
        </h2>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Inspect a real HTTP request, identify its components, trace the backend processing steps, and explain how the response returns to the frontend using a minimal Express.js server (<code className="font-mono bg-stone-100 px-1 rounded">npm init -y &amp;&amp; npm install express</code>, set <code className="font-mono bg-stone-100 px-1 rounded">&quot;type&quot;: &quot;module&quot;</code>, run <code className="font-mono bg-stone-100 px-1 rounded">node server.js</code>).
          </p>
          <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`import express from "express";

const app = express();
app.use(express.json());

app.get("/api/v1/students/:id", (req, res) => {
  const studentId = req.params.id;
  const students = {
    "stu-101": { id: "stu-101", name: "Rahul Sharma", department: "Computer Science" }
  };
  const student = students[studentId];

  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }
  return res.status(200).json({ success: true, data: student });
});

app.listen(3000, () => console.log("Backend running on port 3000"));`}
          </pre>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/70">
              <strong>Part C &amp; F (Browser &amp; curl):</strong> Test <code className="font-mono">curl -i http://localhost:3000/api/v1/students/stu-101</code> (200 OK) and <code className="font-mono">stu-999</code> (404 Not Found).
            </div>
            <div className="p-3 rounded-xl border border-stone-200 bg-stone-50/70">
              <strong>Part D &amp; E (DevTools &amp; Trace):</strong> Inspect Network headers, URL, path param, status code, and JSON body.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs sm:text-sm">
            <h4 className="font-bold text-stone-900">Part H &mdash; Lab challenges</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Challenge 1:</strong> Add student <code className="font-mono">stu-102</code> and verify the response.</li>
              <li><strong>Challenge 2:</strong> Add a <code className="font-mono">year</code> field to student data.</li>
              <li><strong>Challenge 3:</strong> Add a collection endpoint <code className="font-mono">GET /api/v1/students</code>.</li>
              <li><strong>Challenge 4:</strong> Return consistent JSON error structures without exposing internal details.</li>
              <li><strong>Challenge 5:</strong> Introduce a service layer by moving student lookup logic out of the route handler.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-900 text-white text-xs font-mono font-bold">
            Assignment
          </span>
          <span className="text-xs text-stone-500 font-mono">Estimated effort: 4&ndash;6 hours &bull; 100 marks</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Assignment &mdash; Design a Student Management Backend
        </h2>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Act as the backend architect for a private IT training institute transitioning from spreadsheets to a centralized backend supporting <strong>Administrators</strong>, <strong>Instructors</strong>, and <strong>Students</strong>. Cover business requirements (student, instructor, course, enrollment, attendance, assignment, reporting), architecture decisions, 8-table database design &amp; ER diagram, API contracts, permission matrix, folder structure, complete enrollment request lifecycle, and at least 5 measurable non-functional requirements.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">Permission Matrix</h3>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Operation</th>
                  <th className="p-3">Administrator</th>
                  <th className="p-3">Instructor</th>
                  <th className="p-3">Student</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Register student</td><td className="p-3">Yes</td><td className="p-3">No</td><td className="p-3">No</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">View all students</td><td className="p-3">Yes</td><td className="p-3">No</td><td className="p-3">No</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">View own profile</td><td className="p-3">Yes</td><td className="p-3">Yes</td><td className="p-3">Yes</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Create course</td><td className="p-3">Yes</td><td className="p-3">As permitted</td><td className="p-3">No</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Manage assigned course</td><td className="p-3">Yes</td><td className="p-3">Yes</td><td className="p-3">No</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Enroll student</td><td className="p-3">Yes</td><td className="p-3">No, unless granted</td><td className="p-3">No</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Record attendance</td><td className="p-3">Yes</td><td className="p-3">For assigned course</td><td className="p-3">No</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Submit assignment</td><td className="p-3">No, unless acting as student</td><td className="p-3">No</td><td className="p-3">Yes</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">View institutional reports</td><td className="p-3">Yes</td><td className="p-3">No</td><td className="p-3">No</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">View assigned course reports</td><td className="p-3">Yes</td><td className="p-3">Yes</td><td className="p-3">No</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">Evaluation Rubric (100 Marks)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {[
              ["Understanding requirements", "10"],
              ["Architecture selection & justification", "15"],
              ["Database & relationship design", "15"],
              ["API design & documentation", "15"],
              ["Authentication & authorization", "15"],
              ["Request lifecycle explanation", "10"],
              ["Security & NFRs", "10"],
              ["Diagram quality & clarity", "5"],
              ["Overall organization", "5"],
            ].map(([area, marks]) => (
              <div key={area} className="p-2.5 rounded-lg border border-stone-200 bg-stone-50 flex items-center justify-between gap-2">
                <span className="text-stone-700">{area}</span>
                <span className="font-mono font-bold text-orange-700">{marks}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSOLIDATED LEARNING REVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
            Review
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            Module 01 &mdash; Consolidated Learning Review
          </h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs sm:text-sm text-stone-900">
            <strong>Central Engineering Principle:</strong> Build your backend architecture around the application&apos;s requirements and business rules&mdash;not around a programming language, framework, or collection of API endpoints.
          </div>

          <h3 className="text-base sm:text-lg font-bold text-stone-900 pt-2">Final Assessment (Parts A&ndash;D)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
              <div className="font-bold text-stone-900">Part A &mdash; Fundamentals</div>
              <p>1. Backend engineering &amp; responsibilities. 2. Frontend vs backend vs full-stack. 3. Client-server model. 4. HTTP request/response structure. 5. GET, POST, PUT, PATCH, DELETE.</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
              <div className="font-bold text-stone-900">Part B &mdash; Request processing</div>
              <p>6. Complete HTTP lifecycle. 7. DNS, TLS, reverse proxies, load balancers. 8. Middleware, routing, controllers, services, repositories. 9. AuthN vs AuthZ. 10. Investigating a 2-second API.</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
              <div className="font-bold text-stone-900">Part C &mdash; Backend architecture</div>
              <p>11. Monolithic vs distributed. 12. Microservices &amp; trade-offs. 13. Layered architecture &amp; MVC. 14. Clean Architecture principles. 15. Event-driven architecture.</p>
            </div>
            <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-1">
              <div className="font-bold text-stone-900">Part D &mdash; Architecture design</div>
              <p>16. Student Management System design. 17. Entities &amp; relationships. 18. Enrollment API contract. 19. Security requirements. 20. Justifying monolith vs microservices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
