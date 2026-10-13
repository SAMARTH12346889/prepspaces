import React, { useState, useEffect } from "react";
import {
  Activity,
  Zap,
  Radio,
  Wifi,
  WifiOff,
  Server,
  Layers,
  Database,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Monitor,
  Smartphone,
  Send,
  Cpu,
  Clock,
  Info,
  Shield,
  MessageSquare,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: REAL-TIME TRANSPORT DECISION MATRIX & PROTOCOL SIMULATOR
 * Compares Short Polling, Long Polling, SSE, and WebSockets across duplexity,
 * overhead, latency, firewall tolerance, and optimal use cases.
 * ---------------------------------------------------------------------------
 */
export function TransportComparisonDiagram() {
  const [selectedTransport, setSelectedTransport] = useState("websockets");
  const [testScenario, setTestScenario] = useState("live_editor");

  const transports = {
    short_polling: {
      name: "Short Polling",
      protocol: "HTTP/1.1 or HTTP/2 GET",
      duplex: "Half-Duplex (Client Pull Only)",
      headerOverhead: "High (~800–1,500 bytes per request headers)",
      latency: "High (Bounded by poll interval, e.g. 2s–10s)",
      connectionModel: "Repeated ephemeral TCP handshakes / keep-alive GETs",
      firewallTraversability: "100% (Standard HTTP/HTTPS ports 80/443)",
      serverPush: "No (Emulated by rapid repeated polling)",
      bestFor: "Low-frequency background checks, legacy clients, batch status",
      drawbacks: "Wastes massive server CPU & bandwidth delivering 304/empty responses",
      codeSnippet: `// Client: Recurring timer makes HTTP request every 5s
setInterval(async () => {
  const res = await fetch("/api/v1/interviews/101/status");
  const data = await res.json();
  updateUI(data);
}, 5000);`,
    },
    long_polling: {
      name: "Long Polling (Comet / BOSH)",
      protocol: "HTTP/1.1 or HTTP/2 Hang-and-Respond",
      duplex: "Half-Duplex (Emulated Server Push)",
      headerOverhead: "High (Each event delivery requires fresh HTTP request + headers)",
      latency: "Medium-Low (Instant when data arrives, but delay on reconnect)",
      connectionModel: "Server holds request open until event arrives or timeout (~30s)",
      firewallTraversability: "High (Standard HTTP, but proxies may kill idle connections)",
      serverPush: "Emulated (Server responds when event is ready, client immediately re-polls)",
      bestFor: "Notification fallback when WebSockets/SSE are blocked by corporate proxies",
      drawbacks: "High connection churn, reconnect races, message buffering needed on server",
      codeSnippet: `// Client: Infinite loop re-issuing request upon server response
async function pollLoop() {
  try {
    const res = await fetch("/api/v1/poll?since=" + lastCursor);
    const event = await res.json();
    processEvent(event);
  } catch (err) {
    await sleep(2000); // Backoff on network error
  }
  pollLoop(); // Immediate re-issue
}`,
    },
    sse: {
      name: "Server-Sent Events (SSE)",
      protocol: "HTTP/1.1 or HTTP/2 text/event-stream",
      duplex: "Unidirectional (Server -> Client Push Only)",
      headerOverhead: "Low (~5-10 bytes per event frame over single HTTP stream)",
      latency: "Sub-millisecond server push over established TCP stream",
      connectionModel: "Single persistent HTTP connection; native browser auto-reconnect",
      firewallTraversability: "Excellent (Standard HTTP streaming, works through all reverse proxies)",
      serverPush: "Native (Text-based event stream with id, event, and data fields)",
      bestFor: "AI LLM token streaming, live scoreboards, price tickers, dashboard feeds",
      drawbacks: "Client cannot send upstream messages over same channel (must use POST)",
      codeSnippet: `// Client: Native browser EventSource
const es = new EventSource("/api/v1/interview/101/ai-stream");
es.onmessage = (e) => {
  const token = JSON.parse(e.data);
  appendMarkdown(token);
};
es.onerror = () => { /* Native auto-reconnect handles recovery */ };`,
    },
    websockets: {
      name: "WebSockets (RFC 6455)",
      protocol: "ws:// or wss:// over TCP (Upgrade from HTTP/1.1)",
      duplex: "Full-Duplex (Simultaneous bidirectional binary/text frames)",
      headerOverhead: "Minimal (2 to 10 bytes framing header per packet)",
      latency: "Ultra-Low (< 5ms over persistent TCP socket)",
      connectionModel: "Single persistent bidirectional TCP connection post-handshake",
      firewallTraversability: "Moderate-High (WSS port 443; strict corporate DPI proxies may drop)",
      serverPush: "Native bidirectional messaging with zero request/response overhead",
      bestFor: "Collaborative code editors, audio/video signaling, multiplayer, live chat",
      drawbacks: "Requires custom heartbeats, reconnect handling, load balancer sticky sessions",
      codeSnippet: `// Client: Native WebSocket
const ws = new WebSocket("wss://api.prepspaces.com/ws?token=" + jwt);
ws.onopen = () => {
  ws.send(JSON.stringify({ type: "code:edit", patch: { line: 12, text: "const x = 1;" } }));
};
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  applyRemoteOp(msg);
};`,
    },
  };

  const scenarios = {
    live_editor: {
      title: "Real-Time Collaborative Code Editor (PrepSpaces Live Interview)",
      recommendation: "websockets",
      why: "Requires full-duplex, low-latency (<50ms) bidirectional operational transforms or CRDT state sync between candidate and interviewer. Headers of 800 bytes on every keystroke would overwhelm bandwidth.",
    },
    ai_streaming: {
      title: "AI Feedback Token Streaming (LLM Evaluation Report)",
      recommendation: "sse",
      why: "Unidirectional data transfer from server to client. SSE runs effortlessly over HTTP/2, supports native browser automatic reconnection with 'Last-Event-ID', and bypasses firewall websocket restrictions.",
    },
    recruiter_notifications: {
      title: "Candidate Submission Bell Notifications (Recruiter Portal)",
      recommendation: "sse",
      why: "Sporadic server-to-client notifications. SSE is simpler to scale horizontally than stateful WebSockets, consumes minimal idle resources, and does not require upstream socket handling.",
    },
    background_sync: {
      title: "Offline Candidate Profile Sync / Analytics Flush",
      recommendation: "short_polling",
      why: "Infrequent data check (e.g. once every 5 minutes). Persistent connections waste server file descriptors when events occur sparsely.",
    },
  };

  const curr = transports[selectedTransport];

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 mb-1">
            <Radio className="w-3.5 h-3.5 text-orange-600" />
            Interactive Protocol Architect
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Real-Time Transport Decision Matrix & Protocol Evaluator
          </h4>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {Object.entries(transports).map(([key, t]) => (
            <button
              key={key}
              onClick={() => setSelectedTransport(key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTransport === key
                  ? "bg-stone-900 text-white shadow-sm"
                  : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"
              }`}
            >
              {t.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Scenario Matcher Bar */}
      <div className="p-3 mb-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-700" />
            Interview Scenario Matcher:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(scenarios).map(([key, sc]) => (
              <button
                key={key}
                onClick={() => {
                  setTestScenario(key);
                  setSelectedTransport(sc.recommendation);
                }}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                  testScenario === key
                    ? "bg-amber-600 text-white font-semibold"
                    : "bg-white border border-amber-300 text-amber-900 hover:bg-amber-100"
                }`}
              >
                {sc.title.split(" (")[0]}
              </button>
            ))}
          </div>
        </div>
        <div className="text-xs text-amber-950 flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">{scenarios[testScenario].title}:</span>{" "}
            Recommended:{" "}
            <span className="font-bold underline text-amber-900">
              {transports[scenarios[testScenario].recommendation].name}
            </span>
            . {scenarios[testScenario].why}
          </div>
        </div>
      </div>

      {/* Selected Protocol Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Communication Model</div>
          <div className="text-sm font-bold text-stone-900 mt-0.5">{curr.duplex}</div>
          <div className="text-xs text-stone-700 mt-1 font-mono">{curr.protocol}</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Framing Overhead</div>
          <div className="text-sm font-bold text-stone-900 mt-0.5">{curr.headerOverhead}</div>
          <div className="text-xs text-stone-700 mt-1">{curr.connectionModel}</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Latency & Server Push</div>
          <div className="text-sm font-bold text-stone-900 mt-0.5">{curr.latency}</div>
          <div className="text-xs text-emerald-800 font-medium mt-1">Push: {curr.serverPush}</div>
        </div>
      </div>

      {/* Deep-Dive Tradeoffs & Code Snippet */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Architecture Analysis & Tradeoffs
            </h5>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-stone-700">
                  <strong className="text-stone-900">Optimal Use Cases:</strong> {curr.bestFor}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="text-stone-700">
                  <strong className="text-stone-900">Engineering Pitfalls:</strong> {curr.drawbacks}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span className="text-stone-700">
                  <strong className="text-stone-900">Firewall / Proxy Behavior:</strong>{" "}
                  {curr.firewallTraversability}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-stone-700">
            Rule of Thumb: If unidirectional server push, pick <strong>SSE</strong>. If bidirectional
            sub-second interactions, pick <strong>WebSockets</strong>. Never default to short polling
            for high-frequency events.
          </div>
        </div>

        <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-400 text-[11px]">
            <span>Implementation Pattern: {curr.name}</span>
            <span>Client Runtime</span>
          </div>
          <pre className="text-stone-200 leading-relaxed font-mono whitespace-pre-wrap">
            {curr.codeSnippet}
          </pre>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: DISTRIBUTED PRESENCE & LEASE EXPIRATION RUNNER
 * Simulates real-time presence heartbeats, multi-tab/device connection aggregation,
 * and Redis TTL lease countdown with graceful vs. ungraceful disconnects.
 * ---------------------------------------------------------------------------
 */
export function PresenceLeaseDiagram() {
  const [tabs, setTabs] = useState([
    { id: "tab-1", device: "Desktop Chrome", active: true },
    { id: "tab-2", device: "Desktop Safari", active: true },
  ]);
  const [leaseTtl, setLeaseTtl] = useState(60);
  const [heartbeatInterval] = useState(20);
  const [timeUntilNextHeartbeat, setTimeUntilNextHeartbeat] = useState(20);
  const [networkDown, setNetworkDown] = useState(false);
  const [logs, setLogs] = useState([
    "Initial presence key set: SET presence:user:1001 'online' EX 60",
    "Socket connection tab-1 registered in SADD user:1001:sockets tab-1",
    "Socket connection tab-2 registered in SADD user:1001:sockets tab-2",
  ]);

  // Clock tick simulator
  useEffect(() => {
    const timer = setInterval(() => {
      // Lease countdown
      setLeaseTtl((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });

      // Heartbeat countdown if any tab is active and network is alive
      const hasActiveTabs = tabs.some((t) => t.active);
      if (hasActiveTabs && !networkDown) {
        setTimeUntilNextHeartbeat((prev) => {
          if (prev <= 1) {
            // Heartbeat fires!
            setLeaseTtl(60); // Renew TTL to 60s
            addLog("⚡ Heartbeat pulse received: EXPIRE presence:user:1001 60 (Lease renewed)");
            return heartbeatInterval;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [tabs, networkDown, heartbeatInterval]);

  const addLog = (msg) => {
    setLogs((prev) => [msg, ...prev.slice(0, 5)]);
  };

  const handleManualHeartbeat = () => {
    if (networkDown) {
      addLog("❌ Heartbeat dropped: Client network offline!");
      return;
    }
    setLeaseTtl(60);
    setTimeUntilNextHeartbeat(heartbeatInterval);
    addLog("⚡ Manual Heartbeat: PEXPIRE presence:user:1001 60000");
  };

  const toggleTab = (id) => {
    setTabs((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextState = !t.active;
          if (!nextState) {
            addLog(`🔌 Tab disconnected: SREM user:1001:sockets ${id}`);
          } else {
            addLog(`🔌 Tab connected: SADD user:1001:sockets ${id}`);
          }
          return { ...t, active: nextState };
        }
        return t;
      })
    );
  };

  const addNewTab = () => {
    const newId = `tab-${tabs.length + 1}`;
    setTabs((prev) => [...prev, { id: newId, device: `Device Mobile #${prev.length + 1}`, active: true }]);
    addLog(`📱 New device joined: SADD user:1001:sockets ${newId}`);
  };

  const activeTabCount = tabs.filter((t) => t.active).length;
  const isOnline = leaseTtl > 0 && activeTabCount > 0 && !networkDown;
  const isStale = leaseTtl <= 10 && leaseTtl > 0;
  const isOffline = leaseTtl === 0 || activeTabCount === 0;

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-1">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            Distributed Presence Runner
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Heartbeat Leasing, Expiration TTL & Multi-Tab Aggregation
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleManualHeartbeat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white shadow-sm transition-all"
          >
            <Zap className="w-3.5 h-3.5" />
            Send Heartbeat Now
          </button>
          <button
            onClick={() => {
              setNetworkDown(!networkDown);
              addLog(
                !networkDown
                  ? "⚠️ Ungraceful network crash simulated! Heartbeats halted."
                  : "✅ Network connection restored!"
              );
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              networkDown
                ? "bg-rose-600 text-white"
                : "bg-white border border-stone-300 text-stone-700 hover:bg-stone-100"
            }`}
          >
            {networkDown ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
            {networkDown ? "Network Offline" : "Kill Network (Ungraceful)"}
          </button>
        </div>
      </div>

      {/* Visual State & Status Indicator */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
          <div>
            <div className="text-xs text-stone-700 font-medium">Aggregated State</div>
            <div className="text-base font-bold flex items-center gap-1.5 mt-0.5">
              {isOnline ? (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-700">ONLINE</span>
                </>
              ) : isStale ? (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
                  <span className="text-amber-700">EXPIRING</span>
                </>
              ) : (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                  <span className="text-stone-700">OFFLINE</span>
                </>
              )}
            </div>
          </div>
          <Monitor className="w-6 h-6 text-stone-400" />
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Redis Lease TTL</div>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span
              className={`text-xl font-bold font-mono ${
                leaseTtl < 15 ? "text-rose-600" : "text-stone-900"
              }`}
            >
              {leaseTtl}s
            </span>
            <span className="text-xs text-stone-700">/ 60s max</span>
          </div>
          <div className="w-full bg-stone-100 rounded-full h-1.5 mt-1.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                leaseTtl < 15 ? "bg-rose-500" : "bg-emerald-500"
              }`}
              style={{ width: `${(leaseTtl / 60) * 100}%` }}
            />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Next Auto-Heartbeat</div>
          <div className="text-xl font-bold font-mono text-stone-900 mt-0.5">
            {networkDown ? "PAUSED" : `${timeUntilNextHeartbeat}s`}
          </div>
          <div className="text-xs text-stone-700 mt-0.5">Client interval: 20s</div>
        </div>

        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-xs text-stone-700 font-medium">Active Sockets (Tabs)</div>
          <div className="text-xl font-bold font-mono text-stone-900 mt-0.5">
            {activeTabCount} of {tabs.length}
          </div>
          <div className="text-xs text-stone-700 mt-0.5">Redis SCARD count</div>
        </div>
      </div>

      {/* Interactive Tabs / Multi-device Manager */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Multi-Device / Multi-Tab Connection Set
            </div>
            <button
              onClick={addNewTab}
              className="text-xs font-semibold px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              + Add Tab/Device
            </button>
          </div>
          <div className="space-y-2">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="flex items-center justify-between p-2.5 rounded-lg border border-stone-200 bg-stone-50/50"
              >
                <div className="flex items-center gap-2">
                  {tab.device.includes("Mobile") ? (
                    <Smartphone className="w-4 h-4 text-stone-500" />
                  ) : (
                    <Monitor className="w-4 h-4 text-stone-500" />
                  )}
                  <div>
                    <div className="text-xs font-semibold text-stone-900">{tab.device}</div>
                    <div className="text-[11px] text-stone-700 font-mono">
                      Socket ID: {tab.id} {tab.active ? "(Connected)" : "(Closed)"}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => toggleTab(tab.id)}
                  className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
                    tab.active
                      ? "bg-rose-100 text-rose-700 hover:bg-rose-200"
                      : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                  }`}
                >
                  {tab.active ? "Close Tab" : "Reopen Tab"}
                </button>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-stone-700 mt-3">
            <strong>Architecture Rule:</strong> A user is only declared <em>Offline</em> when the
            Redis Set cardinality drops to 0 (all tabs closed) OR when the lease TTL expires without
            heartbeat renewal.
          </p>
        </div>

        {/* Live Redis Command Log */}
        <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-400 text-[11px]">
              <span>Redis Cluster Presence Audit Log</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Feed
              </span>
            </div>
            <div className="space-y-1.5">
              {logs.map((log, idx) => (
                <div key={idx} className="text-[11px] text-stone-300 leading-tight">
                  <span className="text-stone-500 mr-2">&gt;</span>
                  {log}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-stone-800 text-[10px] text-stone-400">
            Key: <code className="text-orange-300">presence:user:1001</code> | TTL:{" "}
            <code className="text-orange-300">{leaseTtl}s</code> | Set:{" "}
            <code className="text-orange-300">user:1001:sockets</code>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: SCALABLE MULTI-NODE WEBSOCKET FAN-OUT VIA REDIS PUB/SUB
 * Demonstrates cross-server real-time message routing when Candidate is on
 * Server A and Recruiter is on Server B behind a Load Balancer.
 * ---------------------------------------------------------------------------
 */
export function MultiNodeWebSocketDiagram() {
  const [activeMessage, setActiveMessage] = useState(null);
  const [serverBReceived, setServerBReceived] = useState(false);
  const [redisPacket, setRedisPacket] = useState(null);

  const simulateCandidateAction = (type) => {
    const payload =
      type === "code_edit"
        ? { line: 42, content: "function solveTwoSum(nums, target) {", lang: "typescript" }
        : { status: "submitted", score: 94, durationMinutes: 45 };

    const event = {
      eventId: "evt_" + Math.random().toString(36).substring(2, 9),
      type: type === "code_edit" ? "interview.code.updated" : "interview.completed",
      version: "1.0",
      channel: "interview:room:5001",
      sender: "candidate_alice (Node A)",
      timestamp: new Date().toISOString(),
      payload,
    };

    setActiveMessage(event);
    setServerBReceived(false);

    // Step 1: Candidate -> Server A
    setTimeout(() => {
      // Step 2: Server A publishes to Redis Pub/Sub
      setRedisPacket({
        channel: event.channel,
        publishedBy: "ws-server-instance-01",
        payloadBytes: JSON.stringify(event).length,
      });

      // Step 3: Redis broadcasts to Server B -> Recruiter
      setTimeout(() => {
        setServerBReceived(true);
      }, 300);
    }, 250);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-1">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            Multi-Node Fan-Out Visualizer
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Horizontal WebSocket Scaling with Redis Pub/Sub Backplane
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => simulateCandidateAction("code_edit")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white shadow-sm transition-all"
          >
            <Send className="w-3.5 h-3.5 text-orange-400" />
            Candidate Types Code (Node A)
          </button>
          <button
            onClick={() => simulateCandidateAction("submit_interview")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-600 hover:bg-orange-700 text-white shadow-sm transition-all"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Submit Interview Final
          </button>
        </div>
      </div>

      {/* Visual Topology Diagram */}
      <div className="relative p-6 rounded-xl bg-white border border-stone-200 mb-4 overflow-hidden">
        {/* Load Balancer Header */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-2 rounded-xl bg-stone-800 text-white text-xs font-mono flex items-center gap-2 shadow-sm">
            <Radio className="w-4 h-4 text-orange-400" />
            <span>Layer 7 Load Balancer (NGINX / AWS ALB) - wss://api.prepspaces.com</span>
          </div>
        </div>

        {/* 3 Columns: Client A -> Node A | Redis PubSub | Node B -> Client B */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Column 1: Candidate on Server A */}
          <div className="p-4 rounded-xl border-2 border-stone-200 bg-stone-50 text-center relative">
            <div className="inline-flex p-2 rounded-full bg-emerald-100 text-emerald-700 mb-2">
              <Monitor className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-stone-900">Candidate: Alice</div>
            <div className="text-[11px] text-stone-700 font-mono">Connected to Server A</div>
            <div className="mt-3 p-2 rounded bg-white border border-stone-200 text-xs font-mono text-left">
              <div className="text-stone-700 font-semibold mb-1">WS Node A (Pod #1)</div>
              <div className="text-[11px] text-emerald-800 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Socket ID: <code className="text-stone-700">ws_c_892</code>
              </div>
            </div>
            {activeMessage && (
              <div className="mt-2 text-[10px] text-orange-600 font-bold bg-orange-50 p-1 rounded animate-pulse">
                Outgoing frame sent ➔
              </div>
            )}
          </div>

          {/* Column 2: Central Redis Pub/Sub Backplane */}
          <div className="p-4 rounded-xl border-2 border-dashed border-red-300 bg-red-50/50 text-center flex flex-col items-center justify-center">
            <div className="inline-flex p-2.5 rounded-full bg-red-100 text-red-600 mb-2 shadow-inner">
              <Database className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-red-950">Redis Pub/Sub Adapter</div>
            <div className="text-[11px] text-red-900 font-mono mt-0.5">Channel: interview:room:5001</div>
            <div className="mt-3 text-[11px] text-stone-700 bg-white p-2 rounded-lg border border-red-200 w-full text-left">
              <div className="font-semibold text-stone-900">Message Distribution:</div>
              <div className="text-stone-700 mt-0.5">
                {redisPacket ? (
                  <span className="text-red-900 font-mono font-medium">
                    BROADCAST: {redisPacket.payloadBytes} bytes to all subscribed nodes
                  </span>
                ) : (
                  <span className="text-stone-700 italic">Listening for cluster events...</span>
                )}
              </div>
            </div>
          </div>

          {/* Column 3: Recruiter on Server B */}
          <div
            className={`p-4 rounded-xl border-2 transition-all text-center relative ${
              serverBReceived
                ? "border-emerald-500 bg-emerald-50/50 shadow-md"
                : "border-stone-200 bg-stone-50"
            }`}
          >
            <div className="inline-flex p-2 rounded-full bg-blue-100 text-blue-700 mb-2">
              <Monitor className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-stone-900">Recruiter: Sarah</div>
            <div className="text-[11px] text-stone-700 font-mono">Connected to Server B</div>
            <div className="mt-3 p-2 rounded bg-white border border-stone-200 text-xs font-mono text-left">
              <div className="text-stone-700 font-semibold mb-1">WS Node B (Pod #2)</div>
              <div className="text-[11px] text-blue-800 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Socket ID: <code className="text-stone-700">ws_r_104</code>
              </div>
            </div>
            {serverBReceived && (
              <div className="mt-2 text-[10px] text-emerald-800 font-bold bg-emerald-100 p-1 rounded flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Message received & rendered!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wire Event Inspector */}
      {activeMessage ? (
        <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-stone-400 text-[11px]">
            <span>Wire Envelope Protocol: RFC 6455 Frame</span>
            <span className="text-orange-400 font-semibold">Event ID: {activeMessage.eventId}</span>
          </div>
          <pre className="text-stone-200 leading-relaxed font-mono whitespace-pre-wrap">
            {JSON.stringify(activeMessage, null, 2)}
          </pre>
        </div>
      ) : (
        <div className="p-3 rounded-xl bg-stone-100 border border-stone-200 text-center text-xs text-stone-700">
          Click either button above to trigger an end-to-end WebSocket fan-out event across nodes.
        </div>
      )}
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * MASTER DISPATCHER COMPONENT FOR MODULE 19
 * ---------------------------------------------------------------------------
 */
export default function VisualDiagramComponentModule19({ diagramId }) {
  if (diagramId === "transport_comparison") return <TransportComparisonDiagram />;
  if (diagramId === "presence_leases") return <PresenceLeaseDiagram />;
  if (diagramId === "multinode_fanout") return <MultiNodeWebSocketDiagram />;

  // Default tabbed view showing all diagrams
  return (
    <div className="space-y-6">
      <TransportComparisonDiagram />
      <PresenceLeaseDiagram />
      <MultiNodeWebSocketDiagram />
    </div>
  );
}
