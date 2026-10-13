import React, { useState } from "react";
import {
  Link,
  MessageSquare,
  Bell,
  Share2,
  Database,
  Server,
  Zap,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  Send,
  Layers,
  SlidersHorizontal,
  Clock,
  ExternalLink,
  Activity,
  Shield,
  FileText,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: URL SHORTENER & BASE62 ENCODER / COLLISION SIMULATOR
 * Encodes numeric ID to Base62, computes collision probability via Birthday Paradox,
 * and demonstrates 301 Permanent vs 302 Temporary Redirect caching differences.
 * ---------------------------------------------------------------------------
 */
export function UrlShortenerDiagram() {
  const [numericId, setNumericId] = useState(12589254);
  const [codeLength, setCodeLength] = useState(7);
  const [generatedCodesCount, setGeneratedCodesCount] = useState(10000000); // 10M
  const [redirectType, setRedirectType] = useState("302"); // 301 vs 302

  const BASE62_CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Base62 conversion
  const encodeBase62 = (num) => {
    if (num === 0) return "0";
    let digits = [];
    let n = num;
    while (n > 0) {
      digits.push(BASE62_CHARS[n % 62]);
      n = Math.floor(n / 62);
    }
    return digits.reverse().join("").padStart(codeLength, "0");
  };

  const shortCode = encodeBase62(numericId);
  const totalCombinations = Math.pow(62, codeLength);

  // Birthday bound collision approx: P(collision) ≈ 1 - exp(-k^2 / (2N))
  const exponent = -Math.pow(generatedCodesCount, 2) / (2 * totalCombinations);
  const collisionProbability = (1 - Math.exp(exponent)) * 100;

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-1">
            <Link className="w-3.5 h-3.5 text-orange-600" />
            Case Study 1: URL Shortener
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Base62 Encoding, Birthday Collisions & HTTP Redirect Semantics
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setNumericId(Math.floor(Math.random() * 100000000) + 1000000)}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-900 text-white shadow-xs"
          >
            Generate Random ID
          </button>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Database Auto-Inc ID:</span>
            <span className="font-mono text-orange-600 font-bold">{numericId.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="100000"
            max="100000000"
            step="500000"
            value={numericId}
            onChange={(e) => setNumericId(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
          <div className="text-[11px] text-stone-700 mt-1">
            Encoded: <code className="text-orange-700 font-bold text-sm">psp.example/{shortCode}</code>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs font-semibold text-stone-800">
            <span>Code Character Length:</span>
            <span className="font-mono text-orange-600 font-bold">{codeLength} chars</span>
          </div>
          <input
            type="range"
            min="5"
            max="8"
            step="1"
            value={codeLength}
            onChange={(e) => setCodeLength(parseInt(e.target.value))}
            className="w-full accent-orange-600 mt-2"
          />
          <div className="text-[11px] text-stone-700 mt-1">
            Capacity: 62^{codeLength} = ~{(totalCombinations / 1e12).toFixed(2)} Trillion
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <label className="text-xs font-semibold text-stone-800 block mb-1">HTTP Redirect Type</label>
          <div className="grid grid-cols-2 gap-1.5 mt-1">
            <button
              onClick={() => setRedirectType("301")}
              className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                redirectType === "301"
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              301 Permanent
            </button>
            <button
              onClick={() => setRedirectType("302")}
              className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
                redirectType === "302"
                  ? "bg-orange-600 text-white"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              302 Temporary
            </button>
          </div>
          <div className="text-[10px] text-stone-700 mt-1">
            {redirectType === "301"
              ? "Browser caches redirect forever; analytics lost on subsequent visits."
              : "Browser checks server on every click; analytics accurately counted!"}
          </div>
        </div>
      </div>

      {/* Collision Probability & Architecture Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-400 text-[11px]">
              <span>Random Code Space & Birthday Collision Math</span>
              <span className="text-orange-400">k={generatedCodesCount.toLocaleString()}</span>
            </div>
            <div className="space-y-1 text-[11px] text-stone-300">
              <div>• Total Code Space (N): 62^{codeLength} = {totalCombinations.toLocaleString()}</div>
              <div>• Generated Links (k): 10,000,000 links</div>
              <div>
                • Birthday Collision Risk:{" "}
                <span className={collisionProbability < 0.01 ? "text-emerald-400" : "text-amber-400"}>
                  {collisionProbability < 0.0001 ? "< 0.0001%" : collisionProbability.toFixed(5) + "%"}
                </span>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-stone-400 mt-3 pt-2 border-t border-stone-800">
            For 7 characters (3.52 Trillion combinations), generating 10 million links has a
            negligible collision probability.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              High-Throughput Redirect Flow (57,870 peak req/s)
            </div>
            <div className="space-y-2 text-xs text-stone-700">
              <div className="p-2 rounded bg-stone-50 border border-stone-200">
                1. <strong>Edge Cache Lookup:</strong> Redis/Cloudflare checks key <code>url:{shortCode}</code> (99% hit rate).
              </div>
              <div className="p-2 rounded bg-stone-50 border border-stone-200">
                2. <strong>Immediate 302 Redirect:</strong> Returns <code>Location: https://example.com/java</code>.
              </div>
              <div className="p-2 rounded bg-stone-50 border border-stone-200">
                3. <strong>Asynchronous Kafka Event:</strong> Publishes click payload to Kafka topic <code>url.clicks</code> (zero latency impact on redirect).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: CHAT SERVICE MESSAGE LIFECYCLE & SEQUENCING
 * Demonstrates store-first-then-deliver, per-conversation monotonic sequence
 * assignment, cross-gateway routing, and offline sync cursor recovery.
 * ---------------------------------------------------------------------------
 */
export function ChatMessageLifecycleDiagram() {
  const [messages, setMessages] = useState([
    { id: "m1", seq: 101, text: "Hey Alice, welcome to the PrepSpaces technical mock interview!", sender: "Interviewer" },
    { id: "m2", seq: 102, text: "Thanks! Ready to begin the concurrency problem.", sender: "Alice (Candidate)" },
  ]);
  const [candidateOnline, setCandidateOnline] = useState(true);
  const [newMessageText, setNewMessageText] = useState("Let's review the synchronized vs ReentrantLock implementation.");

  const sendMessage = () => {
    if (!newMessageText.trim()) return;
    const nextSeq = messages[messages.length - 1].seq + 1;
    const msg = {
      id: "m" + (messages.length + 1),
      seq: nextSeq,
      text: newMessageText,
      sender: "Interviewer (Server Node A)",
      deliveredDirectly: candidateOnline,
    };
    setMessages([...messages, msg]);
    setNewMessageText("");
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-1">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            Case Study 2: Distributed Chat Service
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Store-First Persistence, Monotonic Ordering & Gateway Routing
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCandidateOnline(!candidateOnline)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              candidateOnline
                ? "bg-emerald-600 text-white"
                : "bg-rose-600 text-white"
            }`}
          >
            Recipient Status: {candidateOnline ? "ONLINE (Node B)" : "OFFLINE (Sync Cursor)"}
          </button>
        </div>
      </div>

      {/* Message Feed & Gateway Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
            Interview Room #5001 Message Stream
          </div>
          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {messages.map((m) => (
              <div key={m.id} className="p-2.5 rounded-lg border border-stone-200 bg-stone-50 text-xs">
                <div className="flex items-center justify-between font-semibold text-stone-900 mb-0.5">
                  <span>{m.sender}</span>
                  <span className="font-mono text-orange-600">Seq #{m.seq}</span>
                </div>
                <p className="text-stone-700">{m.text}</p>
                {m.deliveredDirectly === false && (
                  <div className="text-[10px] text-amber-700 font-medium mt-1">
                    Stored in offline DB queue ➔ Awaiting recipient reconnect
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Send Box */}
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={newMessageText}
              onChange={(e) => setNewMessageText(e.target.value)}
              placeholder="Type message to room..."
              className="flex-1 text-xs p-2 border border-stone-300 rounded-lg bg-stone-50"
            />
            <button
              onClick={sendMessage}
              className="px-3 py-2 rounded-lg bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition"
            >
              Send
            </button>
          </div>
        </div>

        {/* Distributed Gateway Flow */}
        <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-400 text-[11px]">
              <span>Distributed Delivery Pipeline (Slack / WhatsApp Architecture)</span>
              <span className="text-emerald-400">Store First ➔ Then Deliver</span>
            </div>
            <div className="space-y-2 text-[11px] text-stone-300">
              <div>
                <strong>1. Ingress:</strong> Sender connected via WSS to Gateway Pod #1.
              </div>
              <div>
                <strong>2. Monotonic Sequence:</strong> PostgreSQL / Cassandra assigns incremental <code>seq_number</code> per room.
              </div>
              <div>
                <strong>3. Durable Acknowledgment:</strong> Server sends <code>HTTP/WS ACK</code> to sender <em>only after</em> DB disk write succeeds.
              </div>
              <div>
                <strong>4. Registry Lookup:</strong> Redis Connection Registry queries: <em>Where is Alice?</em>
              </div>
              <div className="p-2 rounded bg-stone-800/80 text-orange-300">
                {candidateOnline
                  ? "➔ Alice found on Gateway Pod #2! Dispatched cross-node via Redis PubSub."
                  : "➔ Alice is offline! Message retained in DB. Client will fetch from cursor upon reconnect."}
              </div>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-stone-800 text-[10px] text-stone-400">
            Per-conversation sequence numbers eliminate global coordination bottlenecks while guaranteeing strict in-room order.
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: NOTIFICATION PLATFORM LIFECYCLE & TRANSACTIONAL OUTBOX
 * Visualizes the Transactional Outbox pattern, channel routing (Push, Email, SMS),
 * exponential backoff retries, and Dead-Letter Queue (DLQ).
 * ---------------------------------------------------------------------------
 */
export function NotificationLifecycleDiagram() {
  const [deliveryStatus, setDeliveryStatus] = useState("queued"); // "queued" | "sending" | "retrying" | "delivered" | "dlq"

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-1">
            <Bell className="w-3.5 h-3.5 text-blue-600" />
            Case Study 3: Notification Platform
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Transactional Outbox, Multi-Channel Delivery & Dead-Letter Queue (DLQ)
          </h4>
        </div>
        <div className="flex items-center gap-2">
          {["queued", "sending", "delivered", "retrying", "dlq"].map((st) => (
            <button
              key={st}
              onClick={() => setDeliveryStatus(st)}
              className={`px-2.5 py-1 rounded text-xs font-mono uppercase transition-all ${
                deliveryStatus === st
                  ? "bg-stone-900 text-white font-bold"
                  : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* State Machine Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">1. Transactional Outbox</div>
          <div className="text-sm font-bold text-stone-900 mt-1">Atomic DB Write</div>
          <div className="text-[11px] text-stone-700 mt-1">
            Interview report + outbox event committed in 1 SQL transaction. Zero dual-write loss!
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">2. Orchestration & Preferences</div>
          <div className="text-sm font-bold text-stone-900 mt-1">Channel Router</div>
          <div className="text-[11px] text-stone-700 mt-1">
            Evaluates user preferences: In-App (WebSocket), Email (SendGrid), Push (APNs).
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">3. Worker Execution</div>
          <div className="text-sm font-bold text-orange-600 mt-1">Bounded Retries</div>
          <div className="text-[11px] text-stone-700 mt-1">
            Exponential backoff with jitter on 429 provider throttling (max 3 retries).
          </div>
        </div>

        <div
          className={`p-3 rounded-xl border ${
            deliveryStatus === "delivered"
              ? "bg-emerald-50 border-emerald-300"
              : deliveryStatus === "dlq"
              ? "bg-rose-50 border-rose-300"
              : "bg-white border-stone-200"
          }`}
        >
          <div className="text-xs text-stone-700 font-medium">4. Outcome State</div>
          <div
            className={`text-sm font-bold mt-1 uppercase ${
              deliveryStatus === "delivered"
                ? "text-emerald-800"
                : deliveryStatus === "dlq"
                ? "text-rose-800"
                : "text-stone-900"
            }`}
          >
            {deliveryStatus === "dlq" ? "Moved to DLQ" : deliveryStatus}
          </div>
          <div className="text-[11px] text-stone-700 mt-1">
            {deliveryStatus === "dlq"
              ? "Permanent failure isolated to DLQ for manual triage without blocking queues."
              : "Delivery receipt recorded with idempotent event key."}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 4: SOCIAL FEED FAN-OUT STRATEGY SIMULATOR (PUSH vs PULL vs HYBRID)
 * Demonstrates write amplification, read latency, and celebrity threshold tradeoffs.
 * ---------------------------------------------------------------------------
 */
export function SocialFeedFanoutDiagram() {
  const [followerCount, setFollowerCount] = useState(25000);
  const [strategy, setStrategy] = useState("hybrid"); // "push" | "pull" | "hybrid"
  const [celebrityThreshold] = useState(25000);

  const isCelebrity = followerCount >= celebrityThreshold;

  // Compute metrics
  let writeOps = 1;
  let readTimelinesMerged = 1;
  let postLatencyMs = 20;
  let readLatencyMs = 15;
  let explanation = "";

  if (strategy === "push") {
    writeOps = followerCount;
    postLatencyMs = Math.round(20 + followerCount * 0.05);
    readLatencyMs = 15; // single Redis ZREVRANGEBYSCORE
    explanation = `Pure Fan-out-on-Write: Authoring a post triggers ${followerCount.toLocaleString()} Redis timeline pushes. For active creators with large follower counts, this creates enormous write amplification and worker backlog.`;
  } else if (strategy === "pull") {
    writeOps = 1; // single DB insert
    postLatencyMs = 15;
    readTimelinesMerged = Math.min(500, Math.max(10, Math.round(followerCount / 100)));
    readLatencyMs = Math.round(30 + readTimelinesMerged * 0.8);
    explanation = `Pure Fan-out-on-Read: Post write is instantaneous (1 DB insert). However, when a follower requests their feed, the system must fetch and merge recent posts from hundreds of followed users at query time.`;
  } else {
    // Hybrid
    if (isCelebrity) {
      writeOps = 1; // write only to author's own timeline
      postLatencyMs = 18;
      readTimelinesMerged = 2; // follower inbox + celebrity post fan-in
      readLatencyMs = 25;
      explanation = `Hybrid Mode (Celebrity Author): Since followers (${followerCount.toLocaleString()}) >= threshold (${celebrityThreshold.toLocaleString()}), post is NOT pushed to follower inboxes. Instead, it is fetched and merged at read time when followers open their feeds.`;
    } else {
      writeOps = followerCount;
      postLatencyMs = Math.round(18 + followerCount * 0.04);
      readTimelinesMerged = 1;
      readLatencyMs = 16;
      explanation = `Hybrid Mode (Standard Author): Since followers (${followerCount.toLocaleString()}) < threshold (${celebrityThreshold.toLocaleString()}), post is asynchronously pushed directly into each follower's Redis timeline.`;
    }
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-1">
            <Share2 className="w-3.5 h-3.5 text-blue-600" />
            Social Feed Architecture Simulator
          </div>
          <h4 className="text-base font-bold text-stone-900">
            Fan-out on Write vs Fan-out on Read vs Hybrid Strategy
          </h4>
        </div>
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200 text-xs">
          <button
            onClick={() => setStrategy("push")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              strategy === "push" ? "bg-orange-600 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Fan-out on Write (Push)
          </button>
          <button
            onClick={() => setStrategy("pull")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              strategy === "pull" ? "bg-orange-600 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Fan-out on Read (Pull)
          </button>
          <button
            onClick={() => setStrategy("hybrid")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              strategy === "hybrid" ? "bg-orange-600 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Hybrid (Celebrity Threshold)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="flex items-center justify-between text-xs text-stone-700 font-medium mb-1.5">
            <span>Author Follower Count:</span>
            <span className="font-mono font-bold text-orange-600">{followerCount.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="100"
            max="1000000"
            step="5000"
            value={followerCount}
            onChange={(e) => setFollowerCount(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-700 font-mono mt-1">
            <span>100 followers</span>
            <span>25,000 threshold</span>
            <span>1,000,000 followers</span>
          </div>
          <div className="mt-3 p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700">
            {strategy === "hybrid" && (
              <span
                className={`font-semibold ${
                  isCelebrity ? "text-purple-600" : "text-blue-600"
                }`}
              >
                {isCelebrity
                  ? "Status: CELEBRITY ACCOUNT (>25k followers) -> Bypass write fan-out"
                  : "Status: STANDARD ACCOUNT (<=25k followers) -> Push to Redis inboxes"}
              </span>
            )}
            {strategy !== "hybrid" && (
              <span>Strategy active: {strategy === "push" ? "Push to all followers" : "Pull on feed read"}</span>
            )}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="text-xs font-semibold text-stone-900 mb-2">Architectural Tradeoff Metrics</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Write Amplification</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">
                {writeOps.toLocaleString()} ops / post
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Post Creation Latency</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">
                ~{postLatencyMs} ms
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Feed Read Latency</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">
                ~{readLatencyMs} ms
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Timelines Merged</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">
                {readTimelinesMerged} timeline(s)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
        <Activity className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
        <p className="leading-relaxed">{explanation}</p>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * MASTER DISPATCHER COMPONENT FOR MODULE 22
 * ---------------------------------------------------------------------------
 */
export default function VisualDiagramComponentModule22({ diagramId }) {
  if (diagramId === "url_shortener") return <UrlShortenerDiagram />;
  if (diagramId === "chat_service") return <ChatMessageLifecycleDiagram />;
  if (diagramId === "notification_lifecycle") return <NotificationLifecycleDiagram />;
  if (diagramId === "social_feed") return <SocialFeedFanoutDiagram />;

  // Default view
  return (
    <div className="space-y-6">
      <UrlShortenerDiagram />
      <ChatMessageLifecycleDiagram />
      <NotificationLifecycleDiagram />
      <SocialFeedFanoutDiagram />
    </div>
  );
}
