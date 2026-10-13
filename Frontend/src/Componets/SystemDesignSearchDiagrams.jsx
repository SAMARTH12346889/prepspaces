import React, { useState } from "react";
import {
  Search,
  Sliders,
  Layers,
  Database,
  Globe,
  Radio,
  Share2,
  Cpu,
  Shield,
  Clock,
  Sparkles,
  Zap,
  Filter,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  FileText,
  Key,
  Lock,
  Unlock,
  RefreshCw,
  HardDrive,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: INVERTED INDEX & RELEVANCE SCORING VISUALIZER
 * Demonstrates tokenization, inverted index postings list lookup,
 * and weighted field relevance scoring (Title, Skills, Freshness).
 * ---------------------------------------------------------------------------
 */
export function InvertedIndexDiagram() {
  const [searchQuery, setSearchQuery] = useState("Java Spring");
  const [titleWeight, setTitleWeight] = useState(0.5);
  const [skillWeight, setSkillWeight] = useState(0.3);
  const [freshnessWeight, setFreshnessWeight] = useState(0.2);

  const sampleCorpus = [
    {
      id: "job_101",
      title: "Senior Java Backend Engineer",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
      location: "Pune",
      daysAgo: 2,
      tenantId: "acme_corp",
    },
    {
      id: "job_102",
      title: "Full Stack Developer (Java & React)",
      skills: ["Java", "React", "TypeScript", "Spring"],
      location: "Bengaluru",
      daysAgo: 10,
      tenantId: "meta_inc",
    },
    {
      id: "job_103",
      title: "Frontend UI Specialist",
      skills: ["React", "CSS", "Next.js"],
      location: "Remote",
      daysAgo: 1,
      tenantId: "acme_corp",
    },
    {
      id: "job_104",
      title: "Spring Microservices Architect",
      skills: ["Spring Cloud", "Docker", "Kubernetes", "Java"],
      location: "Pune",
      daysAgo: 5,
      tenantId: "cloud_systems",
    },
  ];

  // Tokenize user query
  const queryTerms = searchQuery
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 1);

  // Compute scoring for each document
  const scoredDocs = sampleCorpus
    .map((doc) => {
      let tScore = 0;
      let sScore = 0;

      queryTerms.forEach((term) => {
        if (doc.title.toLowerCase().includes(term)) tScore += 1;
        if (doc.skills.some((s) => s.toLowerCase().includes(term))) sScore += 1;
      });

      const normTitle = queryTerms.length > 0 ? tScore / queryTerms.length : 0;
      const normSkill = queryTerms.length > 0 ? sScore / queryTerms.length : 0;
      const normFreshness = Math.max(0, (14 - doc.daysAgo) / 14); // 14-day freshness window

      const finalScore = (
        normTitle * titleWeight +
        normSkill * skillWeight +
        normFreshness * freshnessWeight
      ).toFixed(3);

      return {
        ...doc,
        normTitle: normTitle.toFixed(2),
        normSkill: normSkill.toFixed(2),
        normFreshness: normFreshness.toFixed(2),
        finalScore: parseFloat(finalScore),
        matches: tScore + sScore > 0,
      };
    })
    .filter((doc) => doc.matches)
    .sort((a, b) => b.finalScore - a.finalScore);

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-1">
            <Search className="w-3.5 h-3.5 text-orange-600" />
            Inverted Index & Scoring
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Query Tokenizer, Postings List & Weighted Scoring Evaluator
          </h4>
        </div>
        <div className="flex items-center gap-2">
          {["Java Spring", "Spring Microservices", "React UI", "Java PostgreSQL"].map((q) => (
            <button
              key={q}
              onClick={() => setSearchQuery(q)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                searchQuery === q
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Query Bar & Weights Tuner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <label className="text-xs font-semibold text-stone-700 block mb-1">Search Query</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs font-mono p-2 border border-stone-300 rounded-lg bg-stone-50 text-stone-900"
            placeholder="Type search terms..."
          />
          <div className="text-[10px] text-stone-700 mt-1">
            Parsed Tokens: <code className="text-orange-700">{JSON.stringify(queryTerms)}</code>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-medium text-stone-700">
            <span>Title Weight (w_t):</span>
            <span className="font-mono font-bold text-orange-600">{titleWeight}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={titleWeight}
            onChange={(e) => setTitleWeight(parseFloat(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-medium text-stone-700">
            <span>Skill Match (w_s):</span>
            <span className="font-mono font-bold text-orange-600">{skillWeight}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={skillWeight}
            onChange={(e) => setSkillWeight(parseFloat(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-medium text-stone-700">
            <span>Freshness Decay (w_f):</span>
            <span className="font-mono font-bold text-orange-600">{freshnessWeight}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={freshnessWeight}
            onChange={(e) => setFreshnessWeight(parseFloat(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
        </div>
      </div>

      {/* Inverted Index Representation vs Ranked Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Postings List View */}
        <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-400 text-[11px]">
            <span>Inverted Index Postings Dictionary</span>
            <span>Index Status: Ready</span>
          </div>
          <div className="space-y-2 text-[11px]">
            <div>
              <span className="text-orange-400">"java"</span> ➔{" "}
              <span className="text-emerald-400">[job_101 (pos:1), job_102 (pos:4), job_104 (pos:3)]</span>
            </div>
            <div>
              <span className="text-orange-400">"spring"</span> ➔{" "}
              <span className="text-emerald-400">[job_101 (skill), job_102 (skill), job_104 (title:0)]</span>
            </div>
            <div>
              <span className="text-orange-400">"react"</span> ➔{" "}
              <span className="text-emerald-400">[job_102 (pos:6), job_103 (pos:0)]</span>
            </div>
            <div>
              <span className="text-orange-400">"postgresql"</span> ➔{" "}
              <span className="text-emerald-400">[job_101 (skill)]</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-stone-800 text-[10px] text-stone-400">
            <strong>Retrieval vs Ranking:</strong> Inverted index performs instant \(O(1)\) term
            intersection. Scoring formula \(Score = w_t T + w_s S + w_f F\) ranks matched documents.
          </div>
        </div>

        {/* Ranked Results Output */}
        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            Ranked Candidate Results ({scoredDocs.length} matches)
          </div>
          <div className="space-y-2">
            {scoredDocs.length > 0 ? (
              scoredDocs.map((doc, idx) => (
                <div
                  key={doc.id}
                  className="p-2.5 rounded-lg border border-stone-200 bg-stone-50 flex items-center justify-between"
                >
                  <div>
                    <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center text-[10px]">
                        {idx + 1}
                      </span>
                      {doc.title}
                    </div>
                    <div className="text-[11px] text-stone-700 mt-0.5">
                      {doc.skills.join(", ")} • {doc.location} • {doc.daysAgo}d ago
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-orange-100 text-orange-800">
                      Score: {doc.finalScore}
                    </span>
                    <div className="text-[10px] text-stone-700 mt-0.5">
                      T:{doc.normTitle} S:{doc.normSkill} F:{doc.normFreshness}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-stone-700 italic">
                No matching documents found in inverted index for query.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: FEED FAN-OUT-ON-WRITE VS FAN-OUT-ON-READ SIMULATOR
 * Computes write amplification, storage cost, and query latency across
 * publisher audience tiers (Celebrity/Enterprise vs Standard User).
 * ---------------------------------------------------------------------------
 */
export function FeedFanoutDiagram() {
  const [followersCount, setFollowersCount] = useState(50000);
  const [postsPerHour, setPostsPerHour] = useState(10);
  const [activeReaders, setActiveReaders] = useState(25000);
  const [readPerUserDay, setReadPerUserDay] = useState(5);

  // Computations
  const fanoutOnWriteWritesPerSec = ((followersCount * postsPerHour) / 3600).toFixed(1);
  const totalWriteEntriesHour = followersCount * postsPerHour;
  const storagePerDayMb = ((totalWriteEntriesHour * 24 * 64) / (1024 * 1024)).toFixed(1); // 64 bytes per feed pointer
  const readQueriesPerSec = ((activeReaders * readPerUserDay) / 86400).toFixed(1);

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-1">
            <Share2 className="w-3.5 h-3.5 text-emerald-600" />
            Feed Architecture Tradeoff Matrix
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Fan-Out-on-Write vs. Fan-Out-on-Read Capacity & Amplification
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setFollowersCount(200000);
              setPostsPerHour(20);
            }}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-900 text-white shadow-xs"
          >
            PrepSpaces Course Blast (200k Followers)
          </button>
          <button
            onClick={() => {
              setFollowersCount(1500);
              setPostsPerHour(2);
            }}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
          >
            Standard Instructor (1.5k Followers)
          </button>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Publisher Followers:</span>
            <span className="font-mono text-orange-600 font-bold">{followersCount.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="1000"
            max="500000"
            step="5000"
            value={followersCount}
            onChange={(e) => setFollowersCount(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Announcements / Hour:</span>
            <span className="font-mono text-orange-600 font-bold">{postsPerHour} posts</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={postsPerHour}
            onChange={(e) => setPostsPerHour(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Active Readers:</span>
            <span className="font-mono text-orange-600 font-bold">{activeReaders.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="5000"
            max="100000"
            step="5000"
            value={activeReaders}
            onChange={(e) => setActiveReaders(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Daily Feeds Read / User:</span>
            <span className="font-mono text-orange-600 font-bold">{readPerUserDay} reads</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={readPerUserDay}
            onChange={(e) => setReadPerUserDay(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
        </div>
      </div>

      {/* Comparison Grid: Write vs Read vs Hybrid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pattern A: Fan-Out-on-Write */}
        <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center justify-between">
              <span>Pattern A: Fan-Out-on-Write</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">Push</span>
            </div>
            <div className="mt-3 space-y-1.5 text-xs text-stone-700">
              <div>
                <strong>Write Amplification:</strong>{" "}
                <span className="font-mono text-rose-600 font-bold">
                  {totalWriteEntriesHour.toLocaleString()} writes/hr ({fanoutOnWriteWritesPerSec} wps)
                </span>
              </div>
              <div>
                <strong>Feed Read Latency:</strong>{" "}
                <span className="font-mono text-emerald-600 font-bold">&lt; 10ms (Precomputed Redis List)</span>
              </div>
              <div>
                <strong>Storage Overhead:</strong> ~{storagePerDayMb} MB/day feed pointers
              </div>
            </div>
          </div>
          <p className="text-[11px] text-stone-700 mt-3 pt-2 border-t border-stone-100">
            Optimal for standard publishers with &lt; 5k followers. Suffers severe write lag for
            celebrity/enterprise accounts.
          </p>
        </div>

        {/* Pattern B: Fan-Out-on-Read */}
        <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center justify-between">
              <span>Pattern B: Fan-Out-on-Read</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">Pull</span>
            </div>
            <div className="mt-3 space-y-1.5 text-xs text-stone-700">
              <div>
                <strong>Write Amplification:</strong>{" "}
                <span className="font-mono text-emerald-600 font-bold">Zero (1 DB write per post)</span>
              </div>
              <div>
                <strong>Feed Read Latency:</strong>{" "}
                <span className="font-mono text-amber-600 font-bold">50–150ms (Multi-table fan-in JOIN)</span>
              </div>
              <div>
                <strong>Read Query Load:</strong> ~{readQueriesPerSec} queries/sec across followers
              </div>
            </div>
          </div>
          <p className="text-[11px] text-stone-700 mt-3 pt-2 border-t border-stone-100">
            Optimal for inactive users or massive publishers (200k+ followers) where writing to all
            inboxes would cause worker backlogs.
          </p>
        </div>

        {/* Pattern C: Hybrid Architecture */}
        <div className="p-4 rounded-xl bg-stone-900 text-stone-100 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center justify-between">
              <span>Pattern C: Hybrid Fan-Out</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-950 text-orange-300 border border-orange-800 font-bold">
                Industry Best Practice
              </span>
            </div>
            <div className="mt-3 space-y-1.5 text-xs text-stone-300">
              <div>
                • <strong>Standard Creators:</strong> Push into follower inboxes on write.
              </div>
              <div>
                • <strong>Enterprise/Blast Accounts:</strong> Keep in dedicated outbox; merge at read time.
              </div>
              <div>
                • <strong>Inactive Users:</strong> Bypass precomputation entirely until login.
              </div>
            </div>
          </div>
          <p className="text-[11px] text-stone-400 mt-3 pt-2 border-t border-stone-800">
            PrepSpaces uses Hybrid Fan-Out: course announcements merge dynamically, while peer
            study activity precomputes into candidate timelines.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: CDN CACHING & SIGNED URL SECURITY SIMULATOR
 * Visualizes Edge Cache hits vs. Misses, Cache-Control headers, and Time-Limited
 * Signed URLs for private candidate resumes and interview evaluations.
 * ---------------------------------------------------------------------------
 */
export function CdnSecurityDiagram() {
  const [assetType, setAssetType] = useState("public_bundle");
  const [tokenExpired, setTokenExpired] = useState(false);
  const [urlTtl, setUrlTtl] = useState(60);

  const assetConfigs = {
    public_bundle: {
      name: "Versioned JS Bundle (app.8a4f91.js)",
      category: "Public Static",
      edgeCacheable: true,
      cacheControl: "public, max-age=31536000, immutable",
      authRequired: false,
      signedUrl: false,
      risk: "None (Content addressable with hash in filename)",
    },
    course_thumbnail: {
      name: "Course Thumbnail (system-design-intro.webp)",
      category: "Public Media",
      edgeCacheable: true,
      cacheControl: "public, max-age=86400, stale-while-revalidate=3600",
      authRequired: false,
      signedUrl: false,
      risk: "Low (Edge revalidates asynchronously when changed)",
    },
    candidate_resume: {
      name: "Candidate Resume (resume_alice_2026.pdf)",
      category: "Private Document",
      edgeCacheable: false,
      cacheControl: "private, no-cache, no-store, must-revalidate",
      authRequired: true,
      signedUrl: true,
      risk: "Critical (Never cache on shared CDN edges without signed HMAC)",
    },
    interview_report: {
      name: "AI Evaluation Scorecard (report_5001.pdf)",
      category: "Confidential Tenant Record",
      edgeCacheable: false,
      cacheControl: "private, no-store",
      authRequired: true,
      signedUrl: true,
      risk: "Critical (Requires tenant authorization check before signed token issuance)",
    },
  };

  const curr = assetConfigs[assetType];

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-1">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            Content Delivery & Edge Security
          </span>
          <h4 className="text-base font-bold text-stone-900">
            CDN Cache Invalidation, Headers & Time-Limited Signed URLs
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(assetConfigs).map(([key, a]) => (
            <button
              key={key}
              onClick={() => {
                setAssetType(key);
                setTokenExpired(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                assetType === key
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"
              }`}
            >
              {a.name.split(" (")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Asset Properties Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Asset Classification</div>
          <div className="text-sm font-bold text-stone-900 mt-0.5">{curr.category}</div>
          <div className="text-xs text-stone-700 mt-1">{curr.name}</div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">CDN Edge Cache Status</div>
          <div className="text-sm font-bold mt-0.5 flex items-center gap-1.5">
            {curr.edgeCacheable ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Cacheable on Shared Edge</span>
              </>
            ) : (
              <>
                <Shield className="w-4 h-4 text-rose-600" />
                <span className="text-rose-700">Edge Cache Bypassed (Private)</span>
              </>
            )}
          </div>
          <div className="text-[11px] text-stone-700 mt-1 font-mono">
            Signed URL Required: {curr.signedUrl ? "YES" : "NO"}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Data Leakage Risk</div>
          <div className="text-xs text-stone-800 font-medium mt-0.5">{curr.risk}</div>
        </div>
      </div>

      {/* Signed URL Simulation Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              HTTP Response Headers (Origin & CDN)
            </div>
            <div className="p-2.5 rounded bg-stone-50 border border-stone-200 font-mono text-xs text-stone-800 space-y-1">
              <div>HTTP/2 200 OK</div>
              <div>
                <span className="text-stone-700 font-bold">Cache-Control:</span>{" "}
                <span className="text-orange-700 font-semibold">{curr.cacheControl}</span>
              </div>
              <div>
                <span className="text-stone-700 font-bold">CF-Cache-Status:</span>{" "}
                <span className={curr.edgeCacheable ? "text-emerald-700 font-bold" : "text-stone-700"}>
                  {curr.edgeCacheable ? "HIT (3ms Edge Latency)" : "BYPASS (Routed to Origin S3)"}
                </span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-stone-700 mt-3 pt-2 border-t border-stone-100">
            <strong>Key Rule:</strong> A CDN cache key must include all variance dimensions. Never
            allow shared proxies to cache responses carrying personalized or tenant-scoped data.
          </p>
        </div>

        {/* Signed URL Playground */}
        <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-400 text-[11px]">
              <span>Signed URL Token Generator</span>
              <span className="text-orange-400">HMAC-SHA256</span>
            </div>
            {curr.signedUrl ? (
              <div className="space-y-2">
                <div className="text-[11px] text-stone-300 break-all leading-tight bg-stone-800/80 p-2 rounded">
                  https://cdn.prepspaces.com/private/reports/5001.pdf?
                  <span className="text-orange-400">Expires={Math.floor(Date.now() / 1000) + urlTtl}</span>&
                  <span className="text-emerald-400">Signature=d3b07384d113edec49eaa6238ad5ff00</span>&
                  <span className="text-blue-400">Key-Pair-Id=K3F9A1B2C</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => setTokenExpired(!tokenExpired)}
                    className={`px-2.5 py-1 rounded text-xs font-sans font-medium transition-all ${
                      tokenExpired
                        ? "bg-rose-600 text-white"
                        : "bg-stone-800 hover:bg-stone-700 text-stone-200"
                    }`}
                  >
                    {tokenExpired ? "Status: Token Expired (403)" : "Simulate TTL Expiration"}
                  </button>
                  <span className="text-[11px] text-stone-400">
                    TTL Window: {urlTtl}s
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-stone-400 text-xs italic py-4">
                Public asset. Served directly from CDN edge cache without HMAC signing or bearer token.
              </div>
            )}
          </div>
          <div className="mt-3 pt-2 border-t border-stone-800 text-[10px] text-stone-400">
            Signed URLs are bearer tokens: generate them on demand after server-side tenant authorization.
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * MASTER DISPATCHER COMPONENT FOR MODULE 20
 * ---------------------------------------------------------------------------
 */
export default function VisualDiagramComponentModule20({ diagramId }) {
  if (diagramId === "inverted_index") return <InvertedIndexDiagram />;
  if (diagramId === "feed_fanout") return <FeedFanoutDiagram />;
  if (diagramId === "cdn_security") return <CdnSecurityDiagram />;

  // Default view
  return (
    <div className="space-y-6">
      <InvertedIndexDiagram />
      <FeedFanoutDiagram />
      <CdnSecurityDiagram />
    </div>
  );
}
