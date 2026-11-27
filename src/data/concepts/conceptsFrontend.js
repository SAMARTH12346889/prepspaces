/**
 * Concepts Batch: Frontend Engineering (10)
 * Complete original technical lessons with code examples, common mistakes,
 * interview Q&As, and two-way links to PrepSpaces courses and modules.
 */

export const CONCEPTS_FRONTEND = [
  {
    slug: "critical-rendering-path",
    category: "frontend",
    subcategory: "Browser Internals",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Critical Rendering Path: DOM, CSSOM, Render Tree, Layout & Paint",
    metaTitle: "Critical Rendering Path (DOM, CSSOM, Layout, Paint) | PrepSpaces Concepts",
    description:
      "Understand how browsers convert HTML, CSS, and JavaScript into pixels: DOM and CSSOM construction, Render Tree, Reflow vs Repaint, and script deferral.",
    keywords: "Critical Rendering Path, DOM, CSSOM, Render Tree, Reflow vs Repaint, browser rendering pipeline, defer scripts",
    directAnswer:
      "The Critical Rendering Path is the sequence of steps a browser executes to convert HTML, CSS, and JavaScript into rendered pixels: parsing HTML into the DOM, parsing CSS into the CSSOM, combining visible nodes into the Render Tree, calculating geometry (Layout/Reflow), drawing pixels (Paint), and merging layers (Compositing).",
    sections: [
      {
        heading: "1. DOM and CSSOM Construction",
        paragraphs: [
          "As HTML bytes arrive over the network, the browser tokenizes tags and builds the Document Object Model (DOM) incrementally. Simultaneously, CSS stylesheets are parsed into the CSS Object Model (CSSOM), which resolves cascade, specificity, and inheritance.",
          "Because CSS rules can override earlier rules, CSS is render-blocking by default—the browser waits for the CSSOM before painting so users do not see an unstyled flash of content.",
        ],
        bullets: [
          "DOM represents document structure (Document, Element, Text nodes).",
          "CSSOM represents computed style rules attached to selectors.",
          "Synchronous `<script>` tags without `defer` or `type=\"module\"` pause HTML parsing until downloaded and executed.",
        ],
      },
      {
        heading: "2. Render Tree, Layout (Reflow), Paint & Compositing",
        paragraphs: [
          "The browser merges visible DOM nodes with CSSOM rules into the Render Tree. Elements with `display: none` remain in the DOM but are excluded from the Render Tree, whereas `visibility: hidden` elements still occupy layout space.",
          "Layout (reflow) computes exact box coordinates and dimensions. Paint fills in backgrounds, text, borders, and shadows onto layers, and the Compositor combines those layers on the GPU.",
        ],
      },
      {
        heading: "3. Avoiding Layout Thrashing & Optimizing Delivery",
        paragraphs: [
          "Interleaving DOM geometry reads (`offsetWidth`, `getBoundingClientRect()`) with style writes inside loops forces the browser to recalculate layout synchronously on every iteration—known as layout thrashing.",
          "Batch reads before writes, animate GPU-friendly properties (`transform`, `opacity`), defer non-critical scripts, and prioritize above-the-fold hero assets.",
        ],
      },
    ],
    codeExample: {
      title: "Deferring Non-Critical Scripts & Batching DOM Reads/Writes",
      language: "html",
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preload" as="image" href="/hero.webp" fetchpriority="high" />
    <link rel="stylesheet" href="/styles/critical.css" />
    <script src="/app.js" defer></script>
  </head>
  <body>
    <main id="app"><h1>PrepSpaces</h1></main>
  </body>
</html>`,
      explanation:
        "`defer` downloads `/app.js` in parallel without blocking HTML parsing and executes it in order before `DOMContentLoaded`, while `fetchpriority=\"high\"` accelerates the hero LCP image.",
    },
    commonMistakes: [
      {
        mistake: "Putting large synchronous `<script>` tags in `<head>` without `defer`.",
        correction:
          "Use `defer` or ES modules (`type=\"module\"`) so HTML parsing and DOM construction continue uninterrupted.",
      },
      {
        mistake: "Animating `top`, `left`, or `width` instead of `transform`.",
        correction:
          "Changing geometry triggers Layout + Paint on every frame; `transform` and `opacity` can often be handled directly by the compositor.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the difference between `display: none` and `visibility: hidden` in the Render Tree?",
        answer:
          "`display: none` omits the node from the Render Tree completely so it takes no layout space. `visibility: hidden` keeps the node in the Render Tree and preserves its layout box while skipping visual paint.",
      },
      {
        question: "Why is CSS considered render-blocking?",
        answer:
          "Without a complete CSSOM, the browser cannot safely compute final styles for the Render Tree and would risk painting unstyled or shifting elements.",
      },
      {
        question: "What causes layout thrashing?",
        answer:
          "Repeatedly reading computed layout properties immediately after mutating styles in JavaScript forces synchronous reflows inside the frame.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/core-web-vitals",
      "/concepts/frontend/javascript-closures",
      "/concepts/networks/http-https-tls",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Master browser internals, HTML5, CSS layout systems, React, Next.js, and production optimization.",
    },
    relatedModules: [
      { title: "Frontend Module 1: Web Architecture & Browser Rendering", route: "/learning/frontend-engineering/web-architecture-foundations" },
      { title: "Frontend Module 13: Performance, Security & Technical SEO", route: "/learning/frontend-engineering/frontend-performance-security-seo" },
    ],
    practiceAction: { label: "Practice Frontend Performance Interview", to: "/ai-interview" },
  },
  {
    slug: "semantic-html-accessibility",
    category: "frontend",
    subcategory: "HTML5 & Accessibility",
    difficulty: "Beginner",
    readTime: "7 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Semantic HTML5, ARIA & WCAG 2.2 Accessibility Engineering",
    metaTitle: "Semantic HTML5 & WCAG 2.2 Accessibility Guide | PrepSpaces Concepts",
    description:
      "Learn how semantic landmarks, native form labels, keyboard navigation, and WCAG 2.2 POUR principles build accessible, SEO-friendly interfaces.",
    keywords: "Semantic HTML5, WCAG 2.2, ARIA, web accessibility, a11y, keyboard navigation, screen readers",
    directAnswer:
      "Semantic HTML uses elements that convey structural meaning (`<header>`, `<nav>`, `<main>`, `<article>`, `<button>`) rather than generic `<div>` tags, enabling assistive technologies and search engines to interpret pages reliably under WCAG 2.2 POUR (Perceivable, Operable, Understandable, Robust) principles.",
    sections: [
      {
        heading: "1. Document Landmarks & Heading Hierarchy",
        paragraphs: [
          "Screen reader users navigate pages by jumping directly between landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`) and heading levels (`<h1>` through `<h6>`).",
          "Maintain one clear `<h1>` per page followed by nested `<h2>`/`<h3>` headings without skipping levels for visual sizing—use CSS classes for font size instead.",
        ],
      },
      {
        heading: "2. Native Controls vs ARIA",
        paragraphs: [
          "The first rule of ARIA is to prefer native HTML elements whenever available. A native `<button>` includes keyboard `Enter`/`Space` activation, focusability, and button semantics automatically, whereas `<div onClick>` breaks keyboard users unless manually wired.",
          "Use ARIA attributes (`aria-label`, `aria-expanded`, `aria-invalid`, `role=\"alert\"`) only to supplement semantics when native HTML cannot express dynamic state.",
        ],
      },
    ],
    codeExample: {
      title: "Accessible Form Field with Explicit Label & Error Announcement",
      language: "tsx",
      code: `<div className="space-y-1">
  <label htmlFor="student-email" className="font-semibold text-sm">
    Email Address
  </label>
  <input
    id="student-email"
    type="email"
    aria-invalid={Boolean(error)}
    aria-describedby={error ? "email-error" : undefined}
  />
  {error && (
    <p id="email-error" role="alert" className="text-rose-600 text-xs">
      {error}
    </p>
  )}
</div>`,
      explanation:
        "`htmlFor` binds the label to the input for click focus and screen readers, while `aria-invalid` and `aria-describedby` link validation errors directly to the control.",
    },
    commonMistakes: [
      {
        mistake: "Using `<div onClick={...}>` instead of `<button>` for interactive actions.",
        correction:
          "Use native `<button type=\"button\">` for actions and `<a href=\"...\">` for navigation.",
      },
      {
        mistake: "Using placeholder text as a replacement for `<label>`.",
        correction:
          "Placeholders disappear on typing and are not reliable accessible names; always associate a visible or `sr-only` `<label>`.",
      },
    ],
    interviewQuestions: [
      {
        question: "What do the four WCAG POUR principles stand for?",
        answer: "Perceivable, Operable, Understandable, and Robust.",
      },
      {
        question: "When should an image use an empty `alt=\"\"` attribute?",
        answer:
          "When the image is purely decorative and adds no informational value, so screen readers skip announcing it.",
      },
      {
        question: "Why is `aria-live=\"polite\"` or `role=\"alert\"` useful in React forms?",
        answer:
          "It instructs assistive technologies to announce dynamically injected validation errors or status updates without moving keyboard focus.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/css-flexbox-grid",
      "/concepts/frontend/critical-rendering-path",
      "/concepts/frontend/core-web-vitals",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Build accessible, semantic, standards-compliant web documents and UI systems.",
    },
    relatedModules: [
      { title: "Frontend Module 2: Semantic HTML & Document Engineering", route: "/learning/frontend-engineering/semantic-html" },
      { title: "Frontend Module 4: Responsive Design, Accessibility & UI", route: "/learning/frontend-engineering/responsive-accessibility-ui" },
    ],
    practiceAction: { label: "Practice Frontend UI Interview", to: "/ai-interview" },
  },
  {
    slug: "css-flexbox-grid",
    category: "frontend",
    subcategory: "Layout & Styling",
    difficulty: "Beginner",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "CSS Cascade, Specificity, Flexbox & CSS Grid Layout Systems",
    metaTitle: "CSS Cascade, Flexbox & CSS Grid Guide | PrepSpaces Concepts",
    description:
      "Master CSS cascade, specificity rules, one-dimensional Flexbox alignment, two-dimensional CSS Grid tracks, and modern container queries.",
    keywords: "CSS Flexbox, CSS Grid, CSS Specificity, Cascade, Responsive Layout, Container Queries",
    directAnswer:
      "Flexbox is a one-dimensional layout algorithm optimized for distributing items along a single row or column axis, while CSS Grid is a two-dimensional layout system for coordinating rows and columns simultaneously—both governed by CSS cascade, specificity, and box-model rules.",
    sections: [
      {
        heading: "1. Cascade, Specificity & Box Sizing",
        paragraphs: [
          "When multiple CSS rules target the same element, the browser resolves conflicts by origin/importance, specificity (`(inline, ID, class/attribute/pseudo-class, element)`), and source order.",
          "Using `box-sizing: border-box` ensures `width` and `height` include padding and borders, preventing unexpected horizontal overflow.",
        ],
      },
      {
        heading: "2. Flexbox vs CSS Grid",
        paragraphs: [
          "Use Flexbox (`display: flex`) for navbars, button groups, and content-driven single-axis alignment using `justify-content`, `align-items`, and `gap`.",
          "Use CSS Grid (`display: grid`) for page shells, card grids (`repeat(auto-fit, minmax(260px, 1fr))`), and overlapping 2D tracks.",
        ],
      },
    ],
    codeExample: {
      title: "Responsive Auto-Fit Card Grid with Zero Media Queries",
      language: "css",
      code: `.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}`,
      explanation:
        "`repeat(auto-fit, minmax(280px, 1fr))` adapts column counts automatically to available container width while Flexbox aligns internal header items cleanly.",
    },
    commonMistakes: [
      {
        mistake: "Overusing `!important` to override high-specificity selectors.",
        correction:
          "Keep selector specificity low and flat (e.g., single class names or `@layer`) so overrides remain predictable.",
      },
      {
        mistake: "Using Flexbox with manual percentage widths for complex 2D dashboards.",
        correction:
          "Use CSS Grid for two-dimensional row+column alignment and reserve Flexbox for 1D flow.",
      },
    ],
    interviewQuestions: [
      {
        question: "How is CSS specificity calculated?",
        answer: "By comparing `(IDs, classes/attributes/pseudo-classes, elements/pseudo-elements)` from left to right, with inline styles taking precedence over external rules.",
      },
      {
        question: "What is the difference between `auto-fit` and `auto-fill` in CSS Grid?",
        answer: "`auto-fit` collapses empty tracks so existing items stretch to fill the row, whereas `auto-fill` preserves empty track spaces.",
      },
      {
        question: "Why do Container Queries (`@container`) improve component reusability?",
        answer: "They let components adapt their layout based on their parent container's width rather than the global browser viewport.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/semantic-html-accessibility",
      "/concepts/frontend/critical-rendering-path",
      "/concepts/frontend/core-web-vitals",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Engineer responsive, maintainable CSS architectures and design systems.",
    },
    relatedModules: [
      { title: "Frontend Module 3: CSS Engineering & Modern Layout", route: "/learning/frontend-engineering/css-engineering-layout" },
      { title: "Frontend Module 4: Responsive Design & UI Engineering", route: "/learning/frontend-engineering/responsive-accessibility-ui" },
    ],
    practiceAction: { label: "Practice Frontend CSS Interview", to: "/ai-interview" },
  },
  {
    slug: "javascript-closures",
    category: "frontend",
    subcategory: "JavaScript Internals",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "JavaScript Closures, Lexical Scope & Event Loop Execution",
    metaTitle: "JavaScript Closures & Event Loop Explained | PrepSpaces Concepts",
    description:
      "Master JavaScript lexical scope, closures, memory retention, call stack, Web APIs, microtask queue (Promises), and macrotask scheduling.",
    keywords: "JavaScript closures, lexical scope, event loop, microtask queue, Promises, call stack, stale closure",
    directAnswer:
      "A closure is created when a JavaScript function retains access to variables from its outer lexical scope even after the outer function has finished executing—working alongside the single-threaded Call Stack and Event Loop (which drains microtasks like Promise callbacks before the next macrotask).",
    sections: [
      {
        heading: "1. Lexical Scope & How Closures Work",
        paragraphs: [
          "JavaScript uses lexical (static) scoping: variable visibility is determined by where functions are written in source code, not where they are called.",
          "When an inner function references a variable from an outer function, the engine preserves that outer lexical environment so the inner function can read and update it later—powering private state, factories, debouncing, and React Hooks.",
        ],
      },
      {
        heading: "2. Call Stack, Microtasks & Macrotasks",
        paragraphs: [
          "Synchronous code runs on the single Call Stack. Asynchronous callbacks (`setTimeout`, DOM events) enter the Macrotask queue, whereas resolved Promise `.then()`/`await` continuations enter the higher-priority Microtask queue.",
          "After each synchronous task finishes, the Event Loop drains the entire Microtask queue before rendering or pulling the next macrotask.",
        ],
      },
    ],
    codeExample: {
      title: "Closure-Based Rate Limiter & Microtask Ordering",
      language: "javascript",
      code: `function createCounter(initial = 0) {
  let count = initial; // Enclosed in lexical scope
  return {
    increment: () => ++count,
    value: () => count,
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11

setTimeout(() => console.log("macrotask"), 0);
Promise.resolve().then(() => console.log("microtask"));
// Output order: 11 -> "microtask" -> "macrotask"`,
      explanation:
        "`createCounter` keeps `count` private via closure, while the Event Loop runs the Promise microtask before the `setTimeout` macrotask.",
    },
    commonMistakes: [
      {
        mistake: "Capturing stale state inside `useEffect` or `useCallback` with an empty `[]` dependency array.",
        correction:
          "Include reactive dependencies or use functional state updaters (`setCount(prev => prev + 1)`) so closures do not read outdated values.",
      },
      {
        mistake: "Using `var` in asynchronous `for` loops.",
        correction:
          "`var` is function-scoped and shared across iterations; use block-scoped `let` so each iteration gets a fresh binding.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why do Promise callbacks run before `setTimeout(fn, 0)`?",
        answer:
          "Promise continuations are queued as microtasks, and the Event Loop drains all microtasks immediately after the current call stack clears before picking the next macrotask.",
      },
      {
        question: "Can closures cause memory leaks?",
        answer:
          "Yes, if a long-lived closure (like an uncleaned event listener or timer) retains references to large objects or detached DOM nodes.",
      },
      {
        question: "What is a stale closure in React?",
        answer:
          "A callback created during an earlier render that still references old props/state because its dependency array omitted updated values.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/react-reconciliation-hooks",
      "/concepts/frontend/typescript-type-system",
      "/concepts/frontend/critical-rendering-path",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Master modern ECMAScript, asynchronous JavaScript, Browser APIs, and React.",
    },
    relatedModules: [
      { title: "Frontend Module 5: Modern JavaScript for Web Apps", route: "/learning/frontend-engineering/modern-javascript" },
      { title: "Frontend Module 6: Browser APIs & Async Programming", route: "/learning/frontend-engineering/browser-apis-async" },
    ],
    practiceAction: { label: "Practice JavaScript Interview", to: "/ai-interview" },
  },
  {
    slug: "typescript-type-system",
    category: "frontend",
    subcategory: "Type Safety & Validation",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "TypeScript Type System: Generics, Discriminated Unions & Zod",
    metaTitle: "TypeScript Generics, Discriminated Unions & Zod | PrepSpaces Concepts",
    description:
      "Learn how TypeScript static types, generics, exhaustive discriminated unions, and Zod runtime schema validation prevent production bugs.",
    keywords: "TypeScript, Generics, Discriminated Unions, Type Narrowing, Zod validation, safeParse",
    directAnswer:
      "TypeScript adds compile-time static type checking with generics and discriminated unions to catch contract bugs before code runs; because TypeScript types are erased at runtime, pairing them with Zod schemas validates untrusted external API and form payloads at execution time.",
    sections: [
      {
        heading: "1. Discriminated Unions & Exhaustiveness Checking",
        paragraphs: [
          "Model mutually exclusive UI states (such as `loading`, `success`, `error`) using a shared literal discriminant (`status`) so TypeScript narrows available fields inside `switch` or `if` blocks.",
          "Adding an exhaustive `never` check in the `default` branch guarantees compile-time errors if a new state variant is added without handling it.",
        ],
      },
      {
        heading: "2. Static Types vs Runtime Validation with Zod",
        paragraphs: [
          "Network responses, `localStorage`, and URL parameters are untrusted `unknown` inputs at runtime—TypeScript interfaces alone cannot stop a malformed JSON payload from crashing a component.",
          "Define a Zod schema once and derive the static type with `z.infer<typeof Schema>` so runtime validation and compile-time types never drift apart.",
        ],
      },
    ],
    codeExample: {
      title: "Zod Runtime Validation + Discriminated Union State",
      language: "typescript",
      code: `import * as z from "zod";

const CourseSchema = z.object({
  id: z.number(),
  title: z.string().min(3),
  level: z.enum(["beginner", "intermediate", "advanced"]),
});

type Course = z.infer<typeof CourseSchema>;

type ApiState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

export function parseCourse(raw: unknown): ApiState<Course> {
  const result = CourseSchema.safeParse(raw);
  if (!result.success) {
    return { status: "error", message: "Invalid course payload" };
  }
  return { status: "success", data: result.data };
}`,
      explanation:
        "`CourseSchema.safeParse(raw)` safely validates external JSON at runtime and returns a discriminated union without throwing unhandled exceptions.",
    },
    commonMistakes: [
      {
        mistake: "Using `as Course` type assertions on `await response.json()`.",
        correction:
          "Type assertions silence the compiler without checking runtime values; parse `unknown` data with a schema like Zod.",
      },
      {
        mistake: "Using `any` instead of `unknown` for external inputs.",
        correction:
          "`unknown` forces explicit type narrowing or schema validation before property access.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why is `unknown` safer than `any` in TypeScript?",
        answer:
          "`any` disables type checking on the value, whereas `unknown` requires narrowing or runtime validation before you can read properties or call methods on it.",
      },
      {
        question: "What is a discriminated union?",
        answer:
          "A union of object types sharing a common literal tag property (e.g. `status` or `type`) that lets TypeScript narrow fields automatically.",
      },
      {
        question: "Do TypeScript interfaces exist at runtime?",
        answer:
          "No, TypeScript type annotations are erased during compilation to JavaScript; runtime checks require JS logic or schema libraries like Zod.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/tanstack-query",
      "/concepts/frontend/javascript-closures",
      "/concepts/backend/rest-api-design",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Build strictly typed, runtime-validated React and Next.js applications.",
    },
    relatedModules: [
      { title: "Frontend Module 7: TypeScript for Scalable Frontend", route: "/learning/frontend-engineering/typescript-scalable-frontend" },
      { title: "Frontend Module 10: Frontend Data Engineering & Zod", route: "/learning/frontend-engineering/frontend-data-engineering" },
    ],
    practiceAction: { label: "Practice TypeScript Interview", to: "/ai-interview" },
  },
  {
    slug: "react-reconciliation-hooks",
    category: "frontend",
    subcategory: "React Core",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "React Reconciliation, Component Identity & Hooks Lifecycle",
    metaTitle: "React Reconciliation, Keys & Hooks Lifecycle | PrepSpaces Concepts",
    description:
      "Understand React's Trigger -> Render -> Commit cycle, reconciliation with stable keys, Rules of Hooks, immutable state, useReducer, and useEffect cleanup.",
    keywords: "React reconciliation, React keys, useState snapshot, useEffect cleanup, useReducer, Rules of Hooks",
    directAnswer:
      "React updates interfaces in three stages—Trigger, Render, and Commit—using reconciliation (matching element types, tree positions, and `key` props) to preserve or reset component identity and apply minimal DOM updates, while Hooks rely on consistent top-level call order across renders.",
    sections: [
      {
        heading: "1. Trigger, Render & Commit + Stable Keys",
        paragraphs: [
          "Calling a state setter schedules a render. During rendering, React calls component functions purely to compute the next UI description, then commits only the changed DOM operations.",
          "Stable `key` props (unique database IDs rather than array indexes) tell React which list items moved, stayed, or were removed so component state stays attached to the right item.",
        ],
      },
      {
        heading: "2. State Immutability, useReducer & Effect Cleanup",
        paragraphs: [
          "State acts like a snapshot per render; always create new arrays/objects (`map`, `filter`, spread) rather than mutating state directly, and use `useReducer` when multiple related actions govern complex state.",
          "Return cleanup functions from `useEffect` (e.g., `controller.abort()`, `clearTimeout`, `removeEventListener`) to prevent memory leaks and race conditions.",
        ],
      },
    ],
    codeExample: {
      title: "Pure Reducer Pattern & AbortController Effect Cleanup",
      language: "tsx",
      code: `useEffect(() => {
  const controller = new AbortController();

  async function loadCourse() {
    const res = await fetch(\`/api/courses/\${courseId}\`, {
      signal: controller.signal,
    });
    if (res.ok) setCourse(await res.json());
  }

  loadCourse().catch((err) => {
    if (err.name !== "AbortError") setError(err.message);
  });

  return () => controller.abort();
}, [courseId]);`,
      explanation:
        "Returning `controller.abort()` cancels obsolete requests when `courseId` changes or the component unmounts, preventing stale responses from overwriting newer state.",
    },
    commonMistakes: [
      {
        mistake: "Using array indexes (`key={index}`) for dynamic lists that reorder or delete items.",
        correction:
          "Use stable unique IDs (`key={item.id}`) so React preserves the correct component identity.",
      },
      {
        mistake: "Calling Hooks conditionally inside `if` statements or loops.",
        correction:
          "Always call Hooks unconditionally at the top level of components or custom Hooks.",
      },
    ],
    interviewQuestions: [
      {
        question: "What are the three stages of a React screen update?",
        answer: "Trigger (initial mount or state/prop/context update), Render (calling components to compute UI), and Commit (applying minimal DOM mutations).",
      },
      {
        question: "What is the difference between `useState` and `useRef`?",
        answer: "`useState` triggers a re-render when updated; `useRef` persists a mutable `.current` value across renders without triggering re-renders.",
      },
      {
        question: "Does a custom Hook share state across two components that call it?",
        answer: "No. Custom Hooks share stateful logic; each component receives its own isolated state unless paired with Context or lifted state.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/react-router",
      "/concepts/frontend/tanstack-query",
      "/concepts/frontend/javascript-closures",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Master React component engineering, reconciliation, Context, reducers, and performance.",
    },
    relatedModules: [
      { title: "Frontend Module 8: React Fundamentals & Component Engineering", route: "/learning/frontend-engineering/react-fundamentals" },
      { title: "Frontend Module 9: Advanced React & State Management", route: "/learning/frontend-engineering/advanced-react" },
    ],
    practiceAction: { label: "Practice React Architecture Interview", to: "/ai-interview" },
  },
  {
    slug: "react-router",
    category: "frontend",
    subcategory: "Client Routing",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "React Router: Nested Layouts, Dynamic Params & Protected Routes",
    metaTitle: "React Router Nested & Protected Routes Guide | PrepSpaces Concepts",
    description:
      "Learn client-side SPA routing with React Router: BrowserRouter, Outlet nested layouts, useParams dynamic routes, lazy splitting, and auth-aware route guards.",
    keywords: "React Router, Outlet, useParams, ProtectedRoute, Nested Routes, SPA routing, code splitting",
    directAnswer:
      "React Router maps browser URLs to React components without full page reloads using `BrowserRouter`, nested layout routes with `<Outlet />`, dynamic `:param` segments read via `useParams()`, and auth-aware wrapper routes—while relying on backend authorization for actual data security.",
    sections: [
      {
        heading: "1. Nested Layouts with Outlet & Dynamic Routes",
        paragraphs: [
          "Parent layout routes render shared navigation (`Navbar`, `Sidebar`) around an `<Outlet />` placeholder where the currently matched child route mounts, preserving layout state across navigations.",
          "Dynamic segments like `/courses/:courseId` match variable identifiers; `useParams()` always returns string values that should be validated before numeric use.",
        ],
      },
      {
        heading: "2. Protected Routes & Security Boundary",
        paragraphs: [
          "A pathless `<ProtectedRoute />` wrapper checks authentication state (`loading`, `!user`) and redirects unauthenticated visitors with `<Navigate to=\"/login\" replace />`.",
          "Crucially, client-side route guards only control UI visibility—users can inspect JS or call APIs directly, so backend endpoints must independently verify authorization.",
        ],
      },
    ],
    codeExample: {
      title: "Nested Protected Dashboard Routes with Lazy Loading",
      language: "tsx",
      code: `<Suspense fallback={<p>Loading page...</p>}>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<StudentLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
</Suspense>`,
      explanation:
        "`ProtectedRoute` wraps `StudentLayout` without adding a URL segment, while `StudentLayout` renders child routes inside `<Outlet />`.",
    },
    commonMistakes: [
      {
        mistake: "Assuming a React `ProtectedRoute` secures backend data.",
        correction:
          "Frontend guards only improve UX; every protected API endpoint must enforce authentication and role authorization on the server.",
      },
      {
        mistake: "Forgetting SPA fallback rewrites on static hosts.",
        correction:
          "Configure Cloudflare Pages/Vercel/Nginx to serve `index.html` for unknown paths so direct refreshes on `/dashboard/courses/101` do not 404.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the role of `<Outlet />` in React Router?",
        answer: "It acts as a placeholder inside a parent route component where the matched child route element is rendered.",
      },
      {
        question: "What type does `useParams()` return for `:courseId`?",
        answer: "A string (or `undefined`), even when the URL contains digits—you must validate/convert it before numeric comparisons.",
      },
      {
        question: "Why combine `React.lazy()` with `Routes`?",
        answer: "Route-level code splitting downloads page chunks on demand instead of shipping admin or heavy dashboard code in the initial bundle.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/react-reconciliation-hooks",
      "/concepts/frontend/nextjs-app-router",
      "/concepts/cybersecurity/jwt-oauth2-security",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Design scalable multi-page React applications with routing, layouts, and auth.",
    },
    relatedModules: [
      { title: "Frontend Module 9: Advanced React & Routing Architecture", route: "/learning/frontend-engineering/advanced-react" },
      { title: "Frontend Module 14: Production Deployment & SPA Routing", route: "/learning/frontend-engineering/frontend-production-capstone" },
    ],
    practiceAction: { label: "Practice React Routing Interview", to: "/ai-interview" },
  },
  {
    slug: "tanstack-query",
    category: "frontend",
    subcategory: "Server State & Caching",
    difficulty: "Intermediate",
    readTime: "9 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "TanStack Query: Server State, Caching, Invalidation & Optimistic UI",
    metaTitle: "TanStack Query Caching & Optimistic Updates | PrepSpaces Concepts",
    description:
      "Master server state vs client state, structured query keys, staleTime vs gcTime, keepPreviousData pagination, query invalidation, and optimistic rollbacks.",
    keywords: "TanStack Query, React Query, staleTime vs gcTime, invalidateQueries, optimistic updates, server state",
    directAnswer:
      "TanStack Query manages asynchronous server state in React applications—providing structured query-key caching, request deduplication, background refetching (`staleTime` vs `gcTime`), mutation invalidation (`invalidateQueries`), and optimistic updates with rollback.",
    sections: [
      {
        heading: "1. Server State vs Client State",
        paragraphs: [
          "Server state originates from external APIs and can change outside the browser (courses, user profiles, progress), whereas client state is owned locally by the UI (modal open, active tab, search draft).",
          "Avoid duplicating TanStack Query server data into React Context—components subscribing to the same `queryKey` automatically share the cached data.",
        ],
      },
      {
        heading: "2. staleTime, gcTime & Optimistic Updates",
        paragraphs: [
          "`staleTime` controls how long cached data is considered fresh before background refetching triggers; `gcTime` controls how long inactive cached data stays in memory before garbage collection.",
          "For instant UI feedback on mutations, `onMutate` snapshots previous cache data and applies an optimistic update, `onError` rolls back on failure, and `onSettled` invalidates the query to resync.",
        ],
      },
    ],
    codeExample: {
      title: "Structured Query Keys & Optimistic Mutation with Rollback",
      language: "tsx",
      code: `const mutation = useMutation({
  mutationFn: completeLesson,
  onMutate: async ({ courseId, progress }) => {
    await queryClient.cancelQueries({ queryKey: ["course", courseId] });
    const previous = queryClient.getQueryData<Course>(["course", courseId]);
    queryClient.setQueryData<Course>(["course", courseId], (old) =>
      old ? { ...old, progress } : old
    );
    return { previous };
  },
  onError: (_err, vars, ctx) => {
    if (ctx?.previous) {
      queryClient.setQueryData(["course", vars.courseId], ctx.previous);
    }
  },
  onSettled: (_data, _err, vars) => {
    queryClient.invalidateQueries({ queryKey: ["course", vars.courseId] });
  },
});`,
      explanation:
        "Cancelling in-flight queries prevents stale fetches from overwriting the optimistic update, while `onError` restores the snapshot if the server rejects the mutation.",
    },
    commonMistakes: [
      {
        mistake: "Omitting filter/page parameters from `queryKey`.",
        correction:
          "Include every variable used by `queryFn` in `queryKey` (e.g. `[\"courses\", { page, search, level }]`) so distinct pages cache separately.",
      },
      {
        mistake: "Copying `useQuery` data into a separate `useState` or Context.",
        correction:
          "Read directly from `useQuery` so stale/refetched data never drifts out of sync.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the difference between `staleTime` and `gcTime` in TanStack Query?",
        answer: "`staleTime` defines how long data is considered fresh; `gcTime` defines how long unused/inactive cache entries remain in memory.",
      },
      {
        question: "Why use `keepPreviousData` during server-side pagination?",
        answer: "It keeps the previous page's rows visible while the next page loads, preventing jarring layout flashes.",
      },
      {
        question: "When should optimistic updates be avoided?",
        answer: "For financial transactions, complex permission changes, or destructive actions with uncertain server validation rules.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/typescript-type-system",
      "/concepts/backend/rest-api-design",
      "/concepts/backend/redis-caching-patterns",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Master REST API service layers, TanStack Query, Zod, React Hook Form, and WebSockets.",
    },
    relatedModules: [
      { title: "Frontend Module 10: Frontend Data Engineering & API Integration", route: "/learning/frontend-engineering/frontend-data-engineering" },
      { title: "Frontend Module 9: Advanced React Architecture", route: "/learning/frontend-engineering/advanced-react" },
    ],
    practiceAction: { label: "Practice Frontend Data Interview", to: "/ai-interview" },
  },
  {
    slug: "nextjs-app-router",
    category: "frontend",
    subcategory: "Full-Stack React Framework",
    difficulty: "Advanced",
    readTime: "10 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Next.js App Router: Server Components, SSR, SSG, ISR & Hydration",
    metaTitle: "Next.js App Router, RSC, SSR, SSG & ISR Guide | PrepSpaces Concepts",
    description:
      "Master Next.js App Router architecture: Server vs Client Components, RSC Payload, hydration, SSR vs SSG vs ISR, streaming Suspense, and generateMetadata.",
    keywords: "Next.js App Router, Server Components, Client Components, SSR, SSG, ISR, Hydration, generateMetadata",
    directAnswer:
      "The Next.js App Router defaults to React Server Components that fetch data on the server without shipping component code to the browser, combining static generation (SSG), Incremental Static Regeneration (ISR), request-time SSR, streaming `<Suspense>`, and interactive `\"use client\"` hydration boundaries.",
    sections: [
      {
        heading: "1. Server Components vs Client Components",
        paragraphs: [
          "In the App Router, `page.tsx` and `layout.tsx` are Server Components by default—they can `await` database queries, read server secrets, and await asynchronous `params` and `searchParams`.",
          "Mark only interactive leaf components (`useState`, `useEffect`, event handlers) with `\"use client\"` to minimize browser JavaScript.",
        ],
      },
      {
        heading: "2. Rendering Strategies: SSG, ISR & SSR + Hydration",
        paragraphs: [
          "Use SSG (`generateStaticParams`) for stable public pages, ISR (`revalidate` / `revalidatePath` / Cache Components `\"use cache\"`) for periodically updated catalogues, and request-time SSR (`cookies()`) for personalized authenticated dashboards.",
          "During hydration, React attaches client event handlers to server-rendered HTML; avoid reading browser-only APIs (`window`, `localStorage`, live `Date`) during initial render to prevent hydration mismatches.",
        ],
      },
    ],
    codeExample: {
      title: "Async Dynamic Route with generateMetadata & notFound()",
      language: "tsx",
      code: `import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EnrolButton from "@/components/EnrolButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) return { title: "Course Not Found" };
  return { title: \`\${course.title} | PrepSpaces\`, description: course.description };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) notFound();

  return (
    <main>
      <h1>{course.title}</h1>
      <EnrolButton courseId={course.id} />
    </main>
  );
}`,
      explanation:
        "Modern Next.js App Router awaits `params`, runs `generateMetadata` on the server, and composes a Client Component (`EnrolButton`) inside a Server Component page.",
    },
    commonMistakes: [
      {
        mistake: "Adding `\"use client\"` at the top of root layouts or entire pages.",
        correction:
          "Keep pages and layouts as Server Components and push `\"use client\"` down to interactive leaf components.",
      },
      {
        mistake: "Choosing static export when your app requires SSR, ISR, or Server Actions.",
        correction:
          "Static export only emits build-time static files; deploy a Node.js server or framework runtime for SSR/ISR.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the RSC Payload in Next.js?",
        answer: "A serialized representation of the rendered Server Component tree, Client Component placeholders, and props used for initial HTML generation and fast client-side navigations.",
      },
      {
        question: "How does `layout.tsx` differ from `template.tsx`?",
        answer: "`layout.tsx` preserves component state across child navigations, whereas `template.tsx` creates a fresh instance on navigation.",
      },
      {
        question: "Why must `error.tsx` be a Client Component?",
        answer: "Next.js route error boundaries wrap segments in React Error Boundaries that catch client rendering errors and expose interactive `reset()` recovery.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/react-reconciliation-hooks",
      "/concepts/frontend/core-web-vitals",
      "/concepts/frontend/react-router",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Build production Next.js App Router platforms with SSR, SSG, ISR, streaming, and SEO.",
    },
    relatedModules: [
      { title: "Frontend Module 11: Next.js & Modern Web Architecture", route: "/learning/frontend-engineering/nextjs-architecture" },
      { title: "Frontend Module 13: Performance, Security & Technical SEO", route: "/learning/frontend-engineering/frontend-performance-security-seo" },
    ],
    practiceAction: { label: "Practice Next.js Interview", to: "/ai-interview" },
  },
  {
    slug: "core-web-vitals",
    category: "frontend",
    subcategory: "Performance & Technical SEO",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    title: "Core Web Vitals: LCP, INP, CLS & Real User Monitoring",
    metaTitle: "Core Web Vitals (LCP, INP, CLS) Optimization Guide | PrepSpaces Concepts",
    description:
      "Measure and optimize Google Core Web Vitals—Largest Contentful Paint (LCP <= 2.5s), Interaction to Next Paint (INP <= 200ms), and Cumulative Layout Shift (CLS <= 0.1).",
    keywords: "Core Web Vitals, LCP, INP, CLS, Lighthouse, PageSpeed Insights, web-vitals RUM",
    directAnswer:
      "Core Web Vitals measure real-world user experience at the 75th percentile across three dimensions: Largest Contentful Paint (LCP <= 2.5 s for loading), Interaction to Next Paint (INP <= 200 ms for responsiveness), and Cumulative Layout Shift (CLS <= 0.1 for visual stability).",
    sections: [
      {
        heading: "1. LCP, INP & CLS Thresholds and Fixes",
        paragraphs: [
          "LCP tracks when the largest above-the-fold image or heading renders—improve it with SSR/SSG, `fetchpriority=\"high\"` on the hero image (never `loading=\"lazy\"`), and removing render-blocking scripts.",
          "INP tracks main-thread responsiveness during user interactions—improve it by breaking up long JavaScript tasks, code splitting, and reducing unnecessary React re-renders. CLS tracks unexpected layout jumps—reserve explicit `width`/`height` on media and skeletons.",
        ],
      },
      {
        heading: "2. Lab Data vs Field RUM Data",
        paragraphs: [
          "Lighthouse provides controlled lab audits for debugging, while Chrome UX Report (CrUX) and the `web-vitals` library collect Real User Monitoring (RUM) telemetry from actual visitor devices and networks.",
        ],
      },
    ],
    codeExample: {
      title: "Collecting Core Web Vitals Telemetry with web-vitals",
      language: "typescript",
      code: `import { onLCP, onINP, onCLS } from "web-vitals";

function sendMetric(metric: { name: string; value: number; id: string }) {
  const body = JSON.stringify(metric);
  navigator.sendBeacon(
    "/api/performance",
    new Blob([body], { type: "application/json" })
  );
}

onLCP(sendMetric);
onINP(sendMetric);
onCLS(sendMetric);`,
      explanation:
        "`navigator.sendBeacon` reliably delivers RUM performance metrics without blocking page unload.",
    },
    commonMistakes: [
      {
        mistake: "Adding `loading=\"lazy\"` to the main above-the-fold hero image.",
        correction:
          "Eager-load and prioritize the LCP hero image; reserve `loading=\"lazy\"` for below-the-fold media.",
      },
      {
        mistake: "Assuming a fast local Lighthouse score guarantees good production field metrics.",
        correction:
          "Always verify real-user CrUX/RUM data across mobile devices and slower networks.",
      },
    ],
    interviewQuestions: [
      {
        question: "What are the 'Good' targets for LCP, INP, and CLS?",
        answer: "LCP <= 2.5 seconds, INP <= 200 milliseconds, and CLS <= 0.1 at the 75th percentile.",
      },
      {
        question: "Why did INP replace FID (First Input Delay)?",
        answer: "FID only measured the first interaction's input delay; INP evaluates all interactions throughout the entire page lifecycle including presentation delay.",
      },
      {
        question: "How do `width` and `height` attributes on `<img>` reduce CLS?",
        answer: "They let the browser compute the aspect ratio and reserve exact layout space before the image finishes downloading.",
      },
    ],
    relatedConcepts: [
      "/concepts/frontend/critical-rendering-path",
      "/concepts/frontend/nextjs-app-router",
      "/concepts/frontend/css-flexbox-grid",
    ],
    relatedCourse: {
      title: "Frontend Engineering Master Course",
      route: "/learning/frontend-engineering",
      description: "Measure and optimize bundle size, caching, Core Web Vitals, security, and technical SEO.",
    },
    relatedModules: [
      { title: "Frontend Module 13: Performance, Security & Technical SEO", route: "/learning/frontend-engineering/frontend-performance-security-seo" },
      { title: "Frontend Module 14: Production Engineering & Capstone", route: "/learning/frontend-engineering/frontend-production-capstone" },
    ],
    practiceAction: { label: "Practice Web Performance Interview", to: "/ai-interview" },
  },
];
