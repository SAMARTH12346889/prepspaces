import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/* 1. POLYGLOT PERSISTENCE ARCHITECTURE DIAGRAM                               */
/* -------------------------------------------------------------------------- */
export function PolyglotStorageDiagram() {
  const [activeTier, setActiveTier] = useState("rdbms");

  const storageTiers = {
    rdbms: {
      title: "Relational Database (PostgreSQL)",
      role: "Authoritative Transactional System of Record",
      workload: "ACID transactions, relational constraints, course catalog, enrollments, user accounts, and billing records.",
      dataShape: "Normalized tables with primary/foreign keys and CHECK constraints.",
      exampleQuery: "SELECT * FROM enrollments WHERE user_id = 42 AND status = 'active';",
      badge: "ACID Guaranteed",
      color: "border-orange-500 bg-orange-50/60",
      accent: "text-orange-800",
    },
    cache: {
      title: "In-Memory Key-Value Store (Redis)",
      role: "Ultra-Low Latency Read Cache & Rate Limiting",
      workload: "Ephemeral course metadata summaries, user session tokens, rate-limit counters, and active interview queues.",
      dataShape: "Strings, Hashes, Sorted Sets (ZSET), and TTL-expiring keys.",
      exampleQuery: "GET course:101:summary  |  INCRBY ratelimit:ip:198.51.100.2 1",
      badge: "< 1ms Latency",
      color: "border-rose-500 bg-rose-50/60",
      accent: "text-rose-800",
    },
    objectstore: {
      title: "Blob / Object Storage (AWS S3 / GCS)",
      role: "Unstructured Large Asset & Video Delivery",
      workload: "Student code submission ZIPs, recorded audio interview MP3s, course video streams, and downloadable PDFs.",
      dataShape: "Immutable binary objects indexed by content hash / object keys.",
      exampleQuery: "s3://prepspaces-submissions/user-42/assign-7/attempt-1.zip",
      badge: "Infinite Elasticity",
      color: "border-amber-500 bg-amber-50/60",
      accent: "text-amber-800",
    },
    search: {
      title: "Specialized Search / Vector Store",
      role: "Full-Text Inverted Index & Semantic Retrieval",
      workload: "Multi-language full-text search across lesson transcripts, trigram autocomplete, and AI vector embeddings.",
      dataShape: "Inverted text indexes (Postgres GIN / Elasticsearch) & dense embedding vectors (pgvector).",
      exampleQuery: "SELECT * FROM lessons WHERE to_tsvector(content) @@ to_tsquery('indexing & btree');",
      badge: "Fuzzy & Semantic",
      color: "border-stone-500 bg-stone-100",
      accent: "text-stone-800",
    },
  };

  const current = storageTiers[activeTier];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Architectural Topology
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Polyglot Storage in Modern Systems</h4>
        </div>
        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl">
          {Object.keys(storageTiers).map((tierKey) => (
            <button
              key={tierKey}
              onClick={() => setActiveTier(tierKey)}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTier === tierKey
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {tierKey === "rdbms" ? "PostgreSQL" : tierKey === "cache" ? "Redis Cache" : tierKey === "objectstore" ? "S3 Storage" : "Search / Vector"}
            </button>
          ))}
        </div>
      </div>

      {/* Visual System Flow */}
      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 mb-4">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-sm rounded-xl border border-stone-300 bg-white p-2.5 text-center shadow-xs">
            <span className="text-[10px] font-mono font-bold text-stone-400 uppercase block">Client Request Layer</span>
            <span className="text-xs font-bold text-stone-900">Backend API (Node.js / Go)</span>
          </div>

          <div className="my-2 text-stone-400 font-mono text-xs">↓ Workload-Driven Dispatch</div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
            <button
              onClick={() => setActiveTier("rdbms")}
              className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                activeTier === "rdbms" ? "border-orange-500 bg-orange-50 ring-2 ring-orange-400/30" : "border-stone-200 bg-white"
              }`}
            >
              <span className="text-[10px] font-mono uppercase font-bold text-orange-600 block">Transactional</span>
              <span className="text-xs font-bold text-stone-900 block mt-0.5">PostgreSQL</span>
              <span className="text-[9px] text-stone-500 mt-1 block">ACID Schemas</span>
            </button>

            <button
              onClick={() => setActiveTier("cache")}
              className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                activeTier === "cache" ? "border-rose-500 bg-rose-50 ring-2 ring-rose-400/30" : "border-stone-200 bg-white"
              }`}
            >
              <span className="text-[10px] font-mono uppercase font-bold text-rose-600 block">In-Memory</span>
              <span className="text-xs font-bold text-stone-900 block mt-0.5">Redis</span>
              <span className="text-[9px] text-stone-500 mt-1 block">&lt;1ms Caching</span>
            </button>

            <button
              onClick={() => setActiveTier("objectstore")}
              className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                activeTier === "objectstore" ? "border-amber-500 bg-amber-50 ring-2 ring-amber-400/30" : "border-stone-200 bg-white"
              }`}
            >
              <span className="text-[10px] font-mono uppercase font-bold text-amber-600 block">Blobs</span>
              <span className="text-xs font-bold text-stone-900 block mt-0.5">AWS S3</span>
              <span className="text-[9px] text-stone-500 mt-1 block">Videos & ZIPs</span>
            </button>

            <button
              onClick={() => setActiveTier("search")}
              className={`p-3 rounded-xl border text-center transition cursor-pointer ${
                activeTier === "search" ? "border-stone-700 bg-stone-100 ring-2 ring-stone-400/30" : "border-stone-200 bg-white"
              }`}
            >
              <span className="text-[10px] font-mono uppercase font-bold text-stone-600 block">Search</span>
              <span className="text-xs font-bold text-stone-900 block mt-0.5">GIN / Vector</span>
              <span className="text-[9px] text-stone-500 mt-1 block">Full-Text & AI</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Storage Tier Card */}
      <div className={`rounded-xl border p-4 ${current.color}`}>
        <div className="flex justify-between items-center mb-1">
          <h5 className={`font-bold text-sm ${current.accent}`}>{current.title}</h5>
          <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white/80 border border-stone-200 text-stone-700">
            {current.badge}
          </span>
        </div>
        <p className="text-xs text-stone-700 mb-2 leading-relaxed">{current.workload}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div>
            <span className="font-bold text-stone-800 block text-[11px]">Primary Role:</span>
            <span className="text-stone-600">{current.role}</span>
          </div>
          <div>
            <span className="font-bold text-stone-800 block text-[11px]">Data Representation:</span>
            <span className="text-stone-600">{current.dataShape}</span>
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-stone-900 p-2.5 font-mono text-[11px] text-amber-300 overflow-x-auto">
          {current.exampleQuery}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. PREP-SPACES RELATIONAL ENTITY RELATIONSHIP DIAGRAM (ERD)                 */
/* -------------------------------------------------------------------------- */
export function RelationalErdDiagram() {
  const [selectedEntity, setSelectedEntity] = useState("enrollments");

  const entities = {
    users: {
      name: "users",
      pk: "id (BIGINT)",
      columns: [
        { name: "id", type: "BIGINT PRIMARY KEY", note: "Identity" },
        { name: "email", type: "TEXT UNIQUE NOT NULL", note: "Lookup" },
        { name: "display_name", type: "TEXT NOT NULL", note: "Profile" },
        { name: "created_at", type: "TIMESTAMPTZ NOT NULL", note: "Audit" },
      ],
      relations: "Has many enrollments, submissions, lesson_progress",
    },
    courses: {
      name: "courses",
      pk: "id (BIGINT)",
      columns: [
        { name: "id", type: "BIGINT PRIMARY KEY", note: "Identity" },
        { name: "title", type: "TEXT NOT NULL", note: "Catalog" },
        { name: "status", type: "TEXT CHECK(status IN ('draft','published','archived'))", note: "Lifecycle" },
        { name: "updated_at", type: "TIMESTAMPTZ NOT NULL", note: "Ordering" },
      ],
      relations: "Has many lessons, enrollments, assignments",
    },
    lessons: {
      name: "lessons",
      pk: "id (BIGINT)",
      columns: [
        { name: "id", type: "BIGINT PRIMARY KEY", note: "Identity" },
        { name: "course_id", type: "BIGINT FK -> courses(id)", note: "Parent" },
        { name: "title", type: "TEXT NOT NULL", note: "Curriculum" },
        { name: "position", type: "INTEGER NOT NULL CHECK(position > 0)", note: "Order" },
      ],
      relations: "Belongs to course. UNIQUE(course_id, position) prevents collisions.",
    },
    enrollments: {
      name: "enrollments (Junction Table)",
      pk: "id (BIGINT) + UNIQUE(user_id, course_id)",
      columns: [
        { name: "id", type: "BIGINT PRIMARY KEY", note: "Identity" },
        { name: "user_id", type: "BIGINT FK -> users(id)", note: "Student" },
        { name: "course_id", type: "BIGINT FK -> courses(id)", note: "Course" },
        { name: "status", type: "TEXT CHECK(status IN ('active','completed','revoked'))", note: "State" },
        { name: "enrolled_at", type: "TIMESTAMPTZ NOT NULL", note: "Timeline" },
      ],
      relations: "Resolves N:M between users and courses. Stores enrollment-specific lifecycle data.",
    },
    lesson_progress: {
      name: "lesson_progress",
      pk: "PRIMARY KEY (user_id, lesson_id)",
      columns: [
        { name: "user_id", type: "BIGINT FK -> users(id)", note: "Composite PK 1" },
        { name: "lesson_id", type: "BIGINT FK -> lessons(id)", note: "Composite PK 2" },
        { name: "completed_at", type: "TIMESTAMPTZ NULL", note: "Completion mark" },
        { name: "last_position_seconds", type: "INTEGER NOT NULL DEFAULT 0", note: "Resume" },
      ],
      relations: "Composite primary key guarantees exactly 1 progress row per student per lesson.",
    },
    assignments: {
      name: "assignments",
      pk: "id (BIGINT)",
      columns: [
        { name: "id", type: "BIGINT PRIMARY KEY", note: "Identity" },
        { name: "course_id", type: "BIGINT FK -> courses(id)", note: "Parent Course" },
        { name: "title", type: "TEXT NOT NULL", note: "Assignment name" },
        { name: "due_at", type: "TIMESTAMPTZ NULL", note: "Optional deadline" },
      ],
      relations: "Child of courses. Has many submissions.",
    },
    submissions: {
      name: "submissions",
      pk: "id (BIGINT) + UNIQUE(assignment_id, user_id, attempt_number)",
      columns: [
        { name: "id", type: "BIGINT PRIMARY KEY", note: "Identity" },
        { name: "assignment_id", type: "BIGINT FK -> assignments(id)", note: "Assignment" },
        { name: "user_id", type: "BIGINT FK -> users(id)", note: "Author" },
        { name: "attempt_number", type: "INTEGER NOT NULL CHECK(attempt_number > 0)", note: "Attempt" },
        { name: "object_key", type: "TEXT NOT NULL", note: "S3 pointer" },
        { name: "status", type: "TEXT CHECK(status IN ('submitted','processing','graded','failed'))", note: "Pipeline" },
      ],
      relations: "Metadata stored in Postgres; large submission payload stored in S3 object_key.",
    },
  };

  const active = entities[selectedEntity];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Relational Modeling
          </span>
          <h4 className="font-bold text-stone-900 text-sm">PrepSpaces Relational Schema (ERD)</h4>
        </div>
        <span className="text-xs text-stone-500">Click any entity to inspect schema & constraints</span>
      </div>

      {/* Entity Selector Pills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {Object.keys(entities).map((k) => (
          <button
            key={k}
            onClick={() => setSelectedEntity(k)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
              selectedEntity === k
                ? "bg-[#f97316] text-white shadow-xs"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Entity Details Card */}
      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-2 mb-3">
          <div>
            <span className="font-bold text-sm text-stone-900 font-mono">TABLE: {active.name}</span>
            <span className="text-[11px] text-stone-500 block">Primary Key: {active.pk}</span>
          </div>
          <span className="text-[10px] font-mono bg-white px-2.5 py-1 rounded border border-stone-200 text-orange-700 font-bold">
            PostgreSQL 16+ DDL
          </span>
        </div>

        {/* Columns Table */}
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-stone-400 text-[10px] uppercase">
                <th className="py-1.5 px-2">Column</th>
                <th className="py-1.5 px-2">Data Type & Constraints</th>
                <th className="py-1.5 px-2">Domain Purpose</th>
              </tr>
            </thead>
            <tbody>
              {active.columns.map((col, idx) => (
                <tr key={idx} className="border-b border-stone-100 hover:bg-white/60">
                  <td className="py-1.5 px-2 font-bold text-stone-800">{col.name}</td>
                  <td className="py-1.5 px-2 text-orange-700">{col.type}</td>
                  <td className="py-1.5 px-2 text-stone-500 font-sans">{col.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg bg-white border border-stone-200 p-2.5 text-xs text-stone-600">
          <span className="font-bold text-stone-800">Relational Invariants:</span> {active.relations}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. B-TREE INDEX STRUCTURE & PAGE TRAVERSAL DIAGRAM                          */
/* -------------------------------------------------------------------------- */
export function BTreeIndexTraversalDiagram() {
  const [searchKey, setSearchKey] = useState("M");

  const keys = ["C", "H", "M", "P", "T", "Z"];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Storage Engine Internals
          </span>
          <h4 className="font-bold text-stone-900 text-sm">B-Tree Balanced Index Traversal (O(log N))</h4>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-stone-500">Query Target:</span>
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => setSearchKey(k)}
              className={`h-6 w-6 rounded-md text-xs font-mono font-bold transition cursor-pointer ${
                searchKey === k ? "bg-[#f97316] text-white shadow-xs" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-center">
        {/* Root Page */}
        <div className="inline-block p-3 rounded-xl border-2 border-stone-700 bg-white shadow-xs mb-3">
          <span className="text-[9px] font-mono uppercase text-stone-400 block font-bold">Root Page (Memory Buffer)</span>
          <span className="font-mono text-xs font-bold text-stone-900">Keys: [ K , R ]</span>
        </div>

        {/* Branch Connectors */}
        <div className="text-stone-300 font-mono text-xs mb-1">
          &emsp;&emsp;↙ [ &lt; K ]&emsp;&emsp;&emsp;&emsp;↓ [ K to R ]&emsp;&emsp;&emsp;&emsp;↘ [ &gt; R ]
        </div>

        {/* Internal Branch Nodes */}
        <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto mb-3">
          <div
            className={`p-2.5 rounded-lg border text-xs font-mono transition ${
              searchKey < "K" ? "border-orange-500 bg-orange-50 font-bold text-orange-950" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <span>Branch Page 1</span>
            <div className="text-[10px] text-stone-400 mt-0.5">Range: A - J</div>
          </div>

          <div
            className={`p-2.5 rounded-lg border text-xs font-mono transition ${
              searchKey >= "K" && searchKey <= "R"
                ? "border-orange-500 bg-orange-50 font-bold text-orange-950"
                : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <span>Branch Page 2</span>
            <div className="text-[10px] text-stone-400 mt-0.5">Range: K - R</div>
          </div>

          <div
            className={`p-2.5 rounded-lg border text-xs font-mono transition ${
              searchKey > "R" ? "border-orange-500 bg-orange-50 font-bold text-orange-950" : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <span>Branch Page 3</span>
            <div className="text-[10px] text-stone-400 mt-0.5">Range: S - Z</div>
          </div>
        </div>

        <div className="text-stone-300 font-mono text-xs mb-1">↓ Direct Leaf Page Pointer (TID / Row Pointer)</div>

        {/* Leaf Page */}
        <div className="rounded-xl border border-stone-300 bg-white p-3 max-w-md mx-auto text-xs">
          <span className="font-bold text-stone-800 block text-[11px] mb-1">Leaf Page (Points to Table Heap Disk Block)</span>
          <div className="font-mono text-xs text-orange-700 bg-stone-50 p-2 rounded border border-stone-200">
            Target &apos;{searchKey}&apos; located in 3 page reads: Root (Page 0) → Branch → Leaf (Row Tuple ID: 0x4A10)
          </div>
        </div>
      </div>

      <p className="text-xs text-stone-500 mt-3">
        In a table of 100,000,000 rows, a balanced B-tree with a fanout factor of 100 has a depth of only 4 levels.
        The database finds any row in at most 4 page lookups instead of scanning 100 million rows.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. DOCUMENT MODELING: EMBEDDING VS REFERENCING                             */
/* -------------------------------------------------------------------------- */
export function DocumentEmbedVsReferenceDiagram() {
  const [modelType, setModelType] = useState("embed");

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            NoSQL Schema Design
          </span>
          <h4 className="font-bold text-stone-900 text-sm">MongoDB: Embedding vs Referencing</h4>
        </div>
        <div className="flex gap-1.5 bg-stone-100 p-1 rounded-xl">
          <button
            onClick={() => setModelType("embed")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              modelType === "embed" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Embedded Model
          </button>
          <button
            onClick={() => setModelType("reference")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              modelType === "reference" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Referenced Model
          </button>
        </div>
      </div>

      {modelType === "embed" ? (
        <div className="space-y-3">
          <div className="rounded-xl border border-orange-200 bg-orange-50/40 p-4">
            <span className="font-bold text-orange-950 text-xs sm:text-sm block mb-1">
              Embedded Pattern: Course with Nested Lessons Array
            </span>
            <p className="text-xs text-stone-600 mb-2">
              Best when child data is strictly bounded (&lt; 100 lessons) and always read together with the course.
            </p>
            <div className="rounded-lg bg-stone-900 p-3 text-[11px] font-mono text-amber-300 overflow-x-auto">
{`// Single Document in 'courses' collection
{
  "_id": "course_101",
  "title": "System Design Masterclass",
  "status": "published",
  "lessons": [
    { "id": "les_1", "title": "Architectural Thinking", "duration": "2 weeks" },
    { "id": "les_2", "title": "Capacity Planning", "duration": "2 weeks" }
  ]
}`}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
              <strong className="block mb-0.5">✓ Strengths:</strong> 1 single I/O read retrieves complete course page. Atomic document updates.
            </div>
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <strong className="block mb-0.5">⚠️ Risks:</strong> 16MB document size limit; hard to query lessons independently without aggregation pipeline.
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
            <span className="font-bold text-stone-900 text-xs sm:text-sm block mb-1">
              Referenced Pattern: Separate Collections with ObjectIds
            </span>
            <p className="text-xs text-stone-600 mb-2">
              Best when child data grows unbounded, changes frequently, or has an independent lifecycle.
            </p>
            <div className="rounded-lg bg-stone-900 p-3 text-[11px] font-mono text-emerald-400 overflow-x-auto">
{`// In 'courses' collection
{ "_id": "course_101", "title": "System Design Masterclass" }

// In 'lessons' collection (Referencing course_id)
{ "_id": "les_1", "course_id": "course_101", "title": "Architectural Thinking" }
{ "_id": "les_2", "course_id": "course_101", "title": "Capacity Planning" }`}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
              <strong className="block mb-0.5">✓ Strengths:</strong> Unbounded growth; lessons can be indexed, updated, and queried individually.
            </div>
            <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <strong className="block mb-0.5">⚠️ Risks:</strong> Requires multi-document reads or `$lookup` joins; no multi-document atomic guarantee without replica sets.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. DATABASE PARTITIONING VS SHARDING TOPOLOGY                              */
/* -------------------------------------------------------------------------- */
export function PartitioningVsShardingDiagram() {
  const [strategy, setStrategy] = useState("partition");

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block">
            Scale Architecture
          </span>
          <h4 className="font-bold text-stone-900 text-sm">Partitioning vs Horizontal Sharding</h4>
        </div>
        <div className="flex gap-1.5 bg-stone-100 p-1 rounded-xl">
          <button
            onClick={() => setStrategy("partition")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              strategy === "partition" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Table Partitioning (1 Server)
          </button>
          <button
            onClick={() => setStrategy("shard")}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              strategy === "shard" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Horizontal Sharding (N Nodes)
          </button>
        </div>
      </div>

      {strategy === "partition" ? (
        <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-center">
          <span className="text-xs font-bold text-stone-900 block mb-1">
            PostgreSQL Declarative Range Partitioning (Single Instance)
          </span>
          <p className="text-xs text-stone-500 mb-3">
            Activity table divided logically by month on disk. The database planner prunes irrelevant partitions for date queries.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div className="p-3 rounded-lg border border-orange-200 bg-orange-50 text-orange-950 font-bold">
              <span>activity_2026_01</span>
              <span className="text-[9px] text-stone-500 block font-normal">Jan 01 - Jan 31</span>
            </div>
            <div className="p-3 rounded-lg border border-orange-200 bg-orange-50 text-orange-950 font-bold">
              <span>activity_2026_02</span>
              <span className="text-[9px] text-stone-500 block font-normal">Feb 01 - Feb 28</span>
            </div>
            <div className="p-3 rounded-lg border border-orange-200 bg-orange-50 text-orange-950 font-bold">
              <span>activity_2026_03</span>
              <span className="text-[9px] text-stone-500 block font-normal">Mar 01 - Mar 31</span>
            </div>
            <div className="p-3 rounded-lg border border-orange-200 bg-orange-50 text-orange-950 font-bold">
              <span>activity_2026_04</span>
              <span className="text-[9px] text-stone-500 block font-normal">Apr 01 - Apr 30</span>
            </div>
          </div>
          <div className="mt-3 text-[11px] text-stone-500">
            Query: `WHERE created_at &gt;= &apos;2026-03-01&apos;` scans <strong>only</strong> `activity_2026_03` and `activity_2026_04`, skipping 50% of disk pages.
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-4 text-center">
          <span className="text-xs font-bold text-stone-900 block mb-1">
            Horizontal Database Sharding (Cluster of Independent Nodes)
          </span>
          <p className="text-xs text-stone-500 mb-3">
            Data physically divided across separate database servers using a Shard Key (e.g. `hash(user_id) % 3`).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl border-2 border-stone-700 bg-white text-stone-900 font-bold shadow-xs">
              <span>Shard Node 1</span>
              <div className="text-[10px] text-orange-700 mt-1">Users [0 - 33,333]</div>
              <div className="text-[9px] text-stone-400 font-sans mt-0.5">Independent CPU, RAM & Disk</div>
            </div>
            <div className="p-3 rounded-xl border-2 border-stone-700 bg-white text-stone-900 font-bold shadow-xs">
              <span>Shard Node 2</span>
              <div className="text-[10px] text-orange-700 mt-1">Users [33,334 - 66,666]</div>
              <div className="text-[9px] text-stone-400 font-sans mt-0.5">Independent CPU, RAM & Disk</div>
            </div>
            <div className="p-3 rounded-xl border-2 border-stone-700 bg-white text-stone-900 font-bold shadow-xs">
              <span>Shard Node 3</span>
              <div className="text-[10px] text-orange-700 mt-1">Users [66,667 - 100,000]</div>
              <div className="text-[9px] text-stone-400 font-sans mt-0.5">Independent CPU, RAM & Disk</div>
            </div>
          </div>
          <div className="mt-3 text-[11px] text-rose-700 font-medium">
            ⚠️ <strong>Trade-off:</strong> Cross-shard joins or transactions (e.g. global reporting across all users) require scatter-gather queries with high network latency.
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* VISUAL DIAGRAM DISPATCHER FOR MODULE 5                                     */
/* -------------------------------------------------------------------------- */
export function VisualDiagramComponentModule5({ diagramType }) {
  switch (diagramType) {
    case "polyglot-storage":
      return <PolyglotStorageDiagram />;
    case "relational-erd":
      return <RelationalErdDiagram />;
    case "btree-traversal":
      return <BTreeIndexTraversalDiagram />;
    case "document-embed-reference":
      return <DocumentEmbedVsReferenceDiagram />;
    case "partitioning-vs-sharding":
      return <PartitioningVsShardingDiagram />;
    default:
      return <PolyglotStorageDiagram />;
  }
}
