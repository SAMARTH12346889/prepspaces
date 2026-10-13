import React, { useState } from "react";

/* -------------------------------------------------------------------------- */
/* 1. 4-LAYER INTERNET PROTOCOL STACK & ENCAPSULATION DIAGRAM                 */
/* -------------------------------------------------------------------------- */
export function InternetStackDiagram() {
  const [activeLayer, setActiveLayer] = useState("transport");

  const layers = [
    {
      id: "application",
      name: "Application Layer",
      protocols: "HTTP/1.1, HTTP/2, HTTP/3, DNS, gRPC, WebSockets, TLS",
      pdu: "Message / Payload",
      focus:
        "Defines message semantics, request headers, status codes, and serialization (JSON, Protobuf). Does not manage network packets directly.",
      dataUnit: "{ 'courseId': 101, 'action': 'start_lesson' }",
      color: "bg-orange-500 text-white",
      borderColor: "border-orange-500",
      textColor: "text-orange-700",
      bgLight: "bg-orange-50",
    },
    {
      id: "transport",
      name: "Transport Layer",
      protocols: "TCP (Reliable, Ordered stream), UDP (Datagrams), QUIC",
      pdu: "Segment (TCP) / Datagram (UDP)",
      focus:
        "Process-to-process delivery via Ports (e.g. 443 HTTPS, 53 DNS). TCP provides 3-way handshake, retransmission, and congestion control. QUIC runs over UDP with integrated TLS 1.3.",
      dataUnit: "[SrcPort: 54128 | DstPort: 443 | SeqNum: 1042] + [App Payload]",
      color: "bg-amber-600 text-white",
      borderColor: "border-amber-500",
      textColor: "text-amber-800",
      bgLight: "bg-amber-50",
    },
    {
      id: "internet",
      name: "Internet Layer",
      protocols: "IPv4, IPv6, ICMP, BGP, OSPF",
      pdu: "Packet",
      focus:
        "Host-to-host addressing and routing across network hops. Routers inspect destination IP (e.g. 203.0.113.10) to forward packets. Best-effort delivery without arrival guarantees.",
      dataUnit: "[SrcIP: 198.51.100.2 | DstIP: 203.0.113.10 | TTL: 64] + [Transport Segment]",
      color: "bg-stone-800 text-white",
      borderColor: "border-stone-700",
      textColor: "text-stone-800",
      bgLight: "bg-stone-100",
    },
    {
      id: "link",
      name: "Link & Physical Layer",
      protocols: "Ethernet (802.3), Wi-Fi (802.11), Fiber Optic, Cellular 5G",
      pdu: "Frame & Bits",
      focus:
        "Moves raw bits across physical media between adjacent network nodes using MAC hardware addresses. Includes preamble, checksum (CRC), and hardware signaling.",
      dataUnit: "[SrcMAC: 00:1A:2B:3C:4D:5E | DstMAC: 00:0C:29:4F:8E:12] + [IP Packet] + [CRC]",
      color: "bg-stone-600 text-white",
      borderColor: "border-stone-500",
      textColor: "text-stone-700",
      bgLight: "bg-stone-50",
    },
  ];

  const current = layers.find((l) => l.id === activeLayer) || layers[0];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
            MIT 6.829 Architecture Foundation
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            4-Layer Internet Protocol Stack & Packet Encapsulation
          </h4>
        </div>
        <span className="text-[11px] font-mono text-stone-500">Interactive Layer Inspector</span>
      </div>

      {/* Layer Stack */}
      <div className="space-y-2 mb-5">
        {layers.map((layer) => {
          const isSelected = layer.id === activeLayer;
          return (
            <div
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isSelected
                  ? `${layer.bgLight} ${layer.borderColor} shadow-xs scale-[1.01]`
                  : "bg-white border-[#e7e3da] hover:border-stone-400"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isSelected ? layer.color : "bg-stone-200 text-stone-700"
                  }`}
                >
                  {layer.pdu}
                </span>
                <div>
                  <h5 className="text-xs font-bold text-stone-900">{layer.name}</h5>
                  <p className="text-[11px] text-stone-500 font-mono mt-0.5">{layer.protocols}</p>
                </div>
              </div>
              <span
                className={`text-[11px] font-bold ${
                  isSelected ? layer.textColor : "text-stone-400"
                }`}
              >
                {isSelected ? "Active Layer ◀" : "Click to Inspect"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Layer Detail Deep Dive */}
      <div className="rounded-xl border border-stone-200 bg-white p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-stone-900">{current.name} Details</span>
          <span className="text-[10px] font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
            PDU: {current.pdu}
          </span>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed mb-3">{current.focus}</p>

        <div className="rounded-lg bg-stone-900 p-3 text-white font-mono text-[11px] overflow-x-auto">
          <span className="text-stone-400 block text-[10px] uppercase tracking-wider mb-1 font-sans">
            Encapsulated Wire Format Representation:
          </span>
          <span className="text-emerald-400">{current.dataUnit}</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. RECURSIVE DNS RESOLUTION SEQUENCE FLOW                                  */
/* -------------------------------------------------------------------------- */
export function DnsResolutionDiagram() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      num: 1,
      title: "1. Client Browser Check",
      actor: "Browser / OS Stub Resolver",
      action: "Check Local DNS Cache",
      detail:
        "The browser checks its in-memory DNS cache and OS hosts file. On cache miss, it dispatches a recursive query for 'api.prepspaces.example' to the configured Recursive Resolver (e.g., 1.1.1.1 or ISP resolver) via UDP port 53.",
      status: "Cache Miss → Forward to Recursive Resolver",
    },
    {
      num: 2,
      title: "2. Root Nameserver Query",
      actor: "Recursive Resolver ──→ Root DNS Server (.)",
      action: "Query Root Zone for '.example'",
      detail:
        "The recursive resolver does not know 'api.prepspaces.example', so it asks one of the 13 global root server clusters. The root server returns a referral (NS records) pointing to the TLD nameservers responsible for '.example'.",
      status: "Referral: Delegation to TLD Server",
    },
    {
      num: 3,
      title: "3. TLD Nameserver Query",
      actor: "Recursive Resolver ──→ TLD DNS Server (.example)",
      action: "Query TLD Zone for 'prepspaces.example'",
      detail:
        "The recursive resolver contacts the '.example' TLD server. The TLD server returns a referral containing the Authoritative Nameservers for the domain 'prepspaces.example' (e.g., ns1.awsdns.com).",
      status: "Referral: Delegation to Authoritative NS",
    },
    {
      num: 4,
      title: "4. Authoritative Nameserver Query",
      actor: "Recursive Resolver ──→ Authoritative DNS Server",
      action: "Query Authoritative Zone for 'api.prepspaces.example'",
      detail:
        "The authoritative server holds the actual DNS zone file. It looks up the A record and returns IPv4 address '203.0.113.10' with a TTL (Time-To-Live) of 300 seconds.",
      status: "Answer: A Record 203.0.113.10 (TTL: 300s)",
    },
    {
      num: 5,
      title: "5. Resolution Delivery & Caching",
      actor: "Recursive Resolver ──→ Client Browser",
      action: "Return IP & Cache for TTL Duration",
      detail:
        "The resolver caches the record for 300 seconds and returns 203.0.113.10 to the browser. The browser can now initiate the TCP 3-way handshake to 203.0.113.10:443.",
      status: "Connection Ready: Browser knows Target IP",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
            RFC 1034 & RFC 1035 Standard
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Recursive DNS Resolution Flow for <span className="font-mono text-orange-600">api.prepspaces.example</span>
          </h4>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setStep((prev) => Math.max(0, prev - 1))}
            disabled={step === 0}
            className="px-2.5 py-1 rounded-lg text-xs font-bold border border-[#e7e3da] bg-white text-stone-700 disabled:opacity-40"
          >
            Prev
          </button>
          <button
            onClick={() => setStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={step === steps.length - 1}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#f97316] text-white disabled:opacity-40"
          >
            Next Step
          </button>
        </div>
      </div>

      {/* Steps Progress Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 mb-5">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setStep(idx)}
            className={`p-2 rounded-xl text-left border transition text-xs ${
              idx === step
                ? "bg-orange-50 border-orange-400 font-bold text-orange-800 shadow-2xs"
                : idx < step
                ? "bg-white border-stone-200 text-stone-600 font-semibold"
                : "bg-stone-100 border-transparent text-stone-400"
            }`}
          >
            <span className="block text-[10px] font-mono">Step {s.num}</span>
            <span className="line-clamp-1">{s.title.split(". ")[1]}</span>
          </button>
        ))}
      </div>

      {/* Active Step Visual Box */}
      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3 mb-3">
          <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
            {steps[step].actor}
          </span>
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            {steps[step].status}
          </span>
        </div>
        <h5 className="text-sm font-bold text-stone-900 mb-1">{steps[step].action}</h5>
        <p className="text-xs text-stone-600 leading-relaxed">{steps[step].detail}</p>
      </div>

      {/* Common DNS Records Cheat Sheet */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
        <div className="p-2 rounded-lg bg-white border border-[#e7e3da]">
          <span className="font-bold text-orange-600 block">A Record</span>
          <span className="text-stone-500">Maps domain → IPv4</span>
        </div>
        <div className="p-2 rounded-lg bg-white border border-[#e7e3da]">
          <span className="font-bold text-orange-600 block">AAAA Record</span>
          <span className="text-stone-500">Maps domain → IPv6</span>
        </div>
        <div className="p-2 rounded-lg bg-white border border-[#e7e3da]">
          <span className="font-bold text-orange-600 block">CNAME</span>
          <span className="text-stone-500">Canonical Alias</span>
        </div>
        <div className="p-2 rounded-lg bg-white border border-[#e7e3da]">
          <span className="font-bold text-orange-600 block">TTL (Time-To-Live)</span>
          <span className="text-stone-500">Cache duration in sec</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. TCP 3-WAY HANDSHAKE VS TLS 1.3 VS QUIC 0-RTT COMPARISON                 */
/* -------------------------------------------------------------------------- */
export function HandshakeComparisonDiagram() {
  const [protocol, setProtocol] = useState("tls13"); // 'tcp' | 'tls13' | 'quic'

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
            Transport & Cryptographic Handshakes
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Connection Setup RTTs: TCP vs TLS 1.3 vs QUIC (HTTP/3)
          </h4>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setProtocol("tcp")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
              protocol === "tcp"
                ? "bg-[#f97316] text-white"
                : "bg-white border border-[#e7e3da] text-stone-700 hover:border-orange-300"
            }`}
          >
            TCP Handshake
          </button>
          <button
            onClick={() => setProtocol("tls13")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
              protocol === "tls13"
                ? "bg-[#f97316] text-white"
                : "bg-white border border-[#e7e3da] text-stone-700 hover:border-orange-300"
            }`}
          >
            TCP + TLS 1.3
          </button>
          <button
            onClick={() => setProtocol("quic")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
              protocol === "quic"
                ? "bg-[#f97316] text-white"
                : "bg-white border border-[#e7e3da] text-stone-700 hover:border-orange-300"
            }`}
          >
            QUIC (HTTP/3)
          </button>
        </div>
      </div>

      {protocol === "tcp" && (
        <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-stone-800">
            <span>Client (Browser)</span>
            <span className="text-orange-600 font-mono">1 RTT Total Setup</span>
            <span>Server (Backend)</span>
          </div>
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-between">
              <span>Client sends SYN (Seq=x)</span>
              <span className="text-orange-700 font-bold">────────▶</span>
              <span className="text-stone-500">Allocates buffer</span>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between">
              <span className="text-stone-500">SYN received</span>
              <span className="text-stone-700 font-bold">◀────────</span>
              <span>Server sends SYN-ACK (Seq=y, Ack=x+1)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <span>Client sends ACK (Ack=y+1)</span>
              <span className="text-emerald-700 font-bold">────────▶</span>
              <span className="text-emerald-700 font-bold">Connection ESTABLISHED (1 RTT)</span>
            </div>
          </div>
          <p className="text-[11px] text-stone-500 mt-2">
            Note: TCP provides transport reliability and retransmission. It does not by itself prove application success (e.g. database transaction commit).
          </p>
        </div>
      )}

      {protocol === "tls13" && (
        <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-stone-800">
            <span>Client (Browser)</span>
            <span className="text-orange-600 font-mono">2 RTTs Combined Setup (1 RTT TCP + 1 RTT TLS 1.3)</span>
            <span>Server (Edge/ALB)</span>
          </div>
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2 rounded-lg bg-stone-100 text-stone-600 flex justify-between">
              <span>1. TCP 3-Way Handshake (SYN → SYN-ACK → ACK)</span>
              <span className="font-bold text-stone-800">1st RTT</span>
            </div>
            <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-between">
              <span>ClientHello + Supported Ciphers + KeyShare (ECDH)</span>
              <span className="text-orange-700 font-bold">────────▶</span>
              <span className="text-stone-500">Validates TLS version</span>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-between">
              <span className="text-stone-500">Derives session keys</span>
              <span className="text-amber-700 font-bold">◀────────</span>
              <span>ServerHello + EncryptedCert + Finished</span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <span>Encrypted HTTP GET /courses/101</span>
              <span className="text-emerald-700 font-bold">────────▶</span>
              <span className="text-emerald-700 font-bold">TLS 1.3 Active (2 RTTs total)</span>
            </div>
          </div>
          <p className="text-[11px] text-stone-500 mt-2">
            TLS 1.3 reduced handshake latency from 2 TLS RTTs (in TLS 1.2) to just 1 TLS RTT by exchanging Diffie-Hellman key shares inside ClientHello.
          </p>
        </div>
      )}

      {protocol === "quic" && (
        <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-stone-800">
            <span>Client (QUIC / HTTP/3)</span>
            <span className="text-emerald-600 font-mono">1 RTT Initial Setup · 0-RTT Resumption</span>
            <span>Server (QUIC Gateway)</span>
          </div>
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 flex items-center justify-between">
              <span>UDP Datagram: QUIC Initial + TLS 1.3 ClientHello</span>
              <span className="text-emerald-700 font-bold">────────▶</span>
              <span className="text-stone-600">Simultaneous Transport + Crypto</span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 flex items-center justify-between">
              <span className="text-stone-600">Transport Accepted + Encrypted Keys</span>
              <span className="text-emerald-700 font-bold">◀────────</span>
              <span>Server Initial + TLS ServerHello + Handshake Finished</span>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-900 text-white flex items-center justify-between">
              <span className="text-emerald-400 font-bold">1 RTT Total! Multiplexed independent streams without Head-of-Line blocking</span>
              <span className="text-orange-400">HTTP/3 Active</span>
            </div>
          </div>
          <p className="text-[11px] text-stone-500 mt-2">
            Because QUIC integrates transport setup and TLS 1.3 into a single UDP exchange, new connections take only 1 RTT. Subsequent resumed connections can transmit data in 0-RTT!
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. COMMUNICATION STYLES COMPARISON MATRIX                                  */
/* -------------------------------------------------------------------------- */
export function CommunicationStylesDiagram() {
  const [selectedStyle, setSelectedStyle] = useState("rest");

  const styles = [
    {
      id: "rest",
      title: "REST (HTTP/1.1 & HTTP/2)",
      useCase: "Resource-oriented web APIs, public interfaces, CRUD",
      transport: "HTTP over TCP",
      dataPayload: "JSON / XML",
      streaming: "Limited (Chunked transfer)",
      clientTooling: "Universal (fetch, curl, Postman)",
      bestFor: "Course catalog, user profiles, submissions, public developer APIs",
      drawback: "Multiple round-trips for nested relations, over-fetching or under-fetching",
    },
    {
      id: "grpc",
      title: "gRPC (RPC with Protobuf)",
      useCase: "Low-latency service-to-service internal communication",
      transport: "HTTP/2 binary framing over TCP",
      dataPayload: "Protocol Buffers (compact binary)",
      streaming: "Unary, Client, Server, Bidirectional streaming",
      clientTooling: "Code-generated typed stubs (protoc)",
      bestFor: "Microservice mesh, video transcoding pipelines, telemetry ingestion",
      drawback: "Requires gRPC-Web for browsers; binary messages harder to inspect with curl",
    },
    {
      id: "graphql",
      title: "GraphQL",
      useCase: "Flexible client-driven queries across interconnected domains",
      transport: "HTTP (usually POST)",
      dataPayload: "JSON with schema-typed queries",
      streaming: "Subscriptions (WebSockets/SSE)",
      clientTooling: "GraphQL clients (Apollo, Relay)",
      bestFor: "Complex dashboard aggregating student progress, courses, grades in 1 query",
      drawback: "Server complexity, risk of N+1 database queries, difficult HTTP-level caching",
    },
    {
      id: "websockets",
      title: "WebSockets",
      useCase: "Continuous full-duplex bi-directional communication",
      transport: "TCP socket upgraded from HTTP",
      dataPayload: "Text (JSON) or Binary frames",
      streaming: "Continuous real-time stream in both directions",
      clientTooling: "Native browser WebSocket API",
      bestFor: "Live collaborative code editing, interactive interview whiteboard, chat",
      drawback: "Stateful connections complicate horizontal load balancing; requires heartbeat pings",
    },
    {
      id: "sse",
      title: "Server-Sent Events (SSE)",
      useCase: "Server-to-client continuous unidirectional event streaming",
      transport: "Standard persistent HTTP connection",
      dataPayload: "text/event-stream UTF-8 lines",
      streaming: "Server pushes events; client receives",
      clientTooling: "Native browser EventSource API",
      bestFor: "Video encoding progress bar, background test execution status, live notifications",
      drawback: "Unidirectional only (client cannot push messages up same stream)",
    },
    {
      id: "webhooks",
      title: "Webhooks",
      useCase: "Asynchronous server-to-server event notifications",
      transport: "Outbound HTTP POST callbacks",
      dataPayload: "JSON with HMAC signature header",
      streaming: "Discrete event delivery",
      clientTooling: "Standard HTTP receiver endpoint",
      bestFor: "Stripe payment success callback, GitHub repository commit notification",
      drawback: "Receiver must handle retries, idempotency, and verify sender cryptographic signatures",
    },
  ];

  const current = styles.find((s) => s.id === selectedStyle) || styles[0];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
            Architectural Trade-Off Analysis
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Comparing Modern API & Communication Protocols
          </h4>
        </div>
        <span className="text-[11px] font-mono text-stone-500">6 Core Paradigms</span>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-1.5 mb-5">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            className={`p-2.5 rounded-xl text-center text-xs font-bold transition border ${
              style.id === selectedStyle
                ? "bg-[#f97316] text-white border-[#f97316] shadow-xs"
                : "bg-white text-stone-700 border-[#e7e3da] hover:border-orange-300"
            }`}
          >
            {style.id.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Active Profile Card */}
      <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-2xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
          <h5 className="text-sm font-bold text-stone-900">{current.title}</h5>
          <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200">
            {current.transport}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-stone-50 border border-[#e7e3da]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
              Primary System Design Use Case
            </span>
            <p className="text-stone-700 font-semibold">{current.useCase}</p>
          </div>
          <div className="p-3 rounded-lg bg-stone-50 border border-[#e7e3da]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
              Payload & Serialization
            </span>
            <p className="text-stone-700 font-semibold">{current.dataPayload}</p>
          </div>
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Where It Excels (Best For)
            </span>
            <p className="text-emerald-900 font-semibold">{current.bestFor}</p>
          </div>
          <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block mb-1">
              Architectural Trade-Off & Risk
            </span>
            <p className="text-rose-900 font-semibold">{current.drawback}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. COMPLETE BROWSER-TO-BACKEND REQUEST LIFECYCLE WATERFALL                 */
/* -------------------------------------------------------------------------- */
export function RequestLifecycleWaterfallDiagram() {
  const [activeHop, setActiveHop] = useState(null);

  const hops = [
    {
      id: "dns",
      title: "1. DNS Resolution",
      actor: "Browser ──→ Recursive DNS",
      duration: "18 ms",
      pct: "12%",
      color: "bg-blue-500",
      description:
        "Resolves domain 'api.prepspaces.example' to IPv4 203.0.113.10. May be 0ms if cached in browser or OS DNS resolver.",
    },
    {
      id: "tcp_tls",
      title: "2. TCP + TLS 1.3 Handshake",
      actor: "Browser ──→ Cloud Edge / CDN",
      duration: "35 ms",
      pct: "23%",
      color: "bg-amber-500",
      description:
        "SYN → SYN-ACK → ACK (1 RTT TCP) followed by TLS 1.3 ClientHello / ServerHello key exchange (1 RTT). Reused on subsequent requests via HTTP keep-alive.",
    },
    {
      id: "cdn_alb",
      title: "3. Edge Routing & ALB Ingress",
      actor: "Edge CDN ──→ Application Load Balancer",
      duration: "8 ms",
      pct: "5%",
      color: "bg-stone-500",
      description:
        "TLS terminated at edge; ALB checks target group health, applies WAF rate-limiting rules, and proxies request to backend container.",
    },
    {
      id: "auth",
      title: "4. Token Authentication & Authorization",
      actor: "Express Middleware",
      duration: "12 ms",
      pct: "8%",
      color: "bg-purple-500",
      description:
        "Validates 'Authorization: Bearer <jwt>' signature using public key. Verifies user has active enrollment for course 101.",
    },
    {
      id: "db",
      title: "5. Database Query Execution",
      actor: "Backend Service ──→ PostgreSQL Primary",
      duration: "68 ms",
      pct: "45%",
      color: "bg-rose-500",
      isBottleneck: true,
      description:
        "Executes indexed SQL join on courses, modules, and lesson completion status. Identified as the critical path latency driver.",
    },
    {
      id: "serialize",
      title: "6. JSON Serialization & Response Transit",
      actor: "Backend ──→ Browser",
      duration: "14 ms",
      pct: "9%",
      color: "bg-emerald-500",
      description:
        "Formats 15KB JSON payload, applies gzip/brotli compression, returns HTTP 200 OK with 'Cache-Control: private, max-age=60'.",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
            End-to-End Latency Anatomy
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Request Waterfall Trace: <span className="font-mono text-orange-600">GET /api/v1/courses/101</span> (155ms Total)
          </h4>
        </div>
        <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded border border-rose-200">
          Critical Path: Database Access (45%)
        </span>
      </div>

      {/* Waterfall Bar Visualizer */}
      <div className="space-y-3 mb-5">
        {hops.map((hop) => (
          <div
            key={hop.id}
            onClick={() => setActiveHop(activeHop === hop.id ? null : hop.id)}
            className="cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-bold text-stone-800 flex items-center gap-2">
                {hop.title}
                {hop.isBottleneck && (
                  <span className="text-[9px] font-mono font-bold bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded">
                    Bottleneck
                  </span>
                )}
              </span>
              <span className="font-mono text-stone-500">{hop.duration}</span>
            </div>
            <div className="h-4 w-full bg-stone-200 rounded-full overflow-hidden relative">
              <div
                className={`h-full ${hop.color} transition-all duration-300 rounded-full group-hover:brightness-110`}
                style={{ width: hop.pct }}
              />
            </div>
            {activeHop === hop.id && (
              <div className="mt-2 p-3 rounded-lg bg-white border border-stone-200 text-xs text-stone-600 animate-fadeIn">
                <span className="font-bold text-stone-900 block mb-0.5">{hop.actor}</span>
                {hop.description}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-3.5 rounded-xl border border-stone-200 bg-white flex flex-wrap items-center justify-between text-xs gap-3">
        <span className="text-stone-600">
          Formula: <span className="font-mono text-stone-900 font-bold">T_total = T_dns + T_conn + T_gateway + T_app + T_db + T_transit</span>
        </span>
        <span className="font-bold text-stone-900">
          18ms + 35ms + 8ms + 12ms + 68ms + 14ms = <span className="text-orange-600">155 ms</span>
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. CORS PREFLIGHT OPTIONS & SECURITY BOUNDARY DIAGRAM                      */
/* -------------------------------------------------------------------------- */
export function CorsPreflightDiagram() {
  const [viewStep, setViewStep] = useState("preflight");

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
            Browser Security Mechanisms (MDN Web Docs)
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Cross-Origin Resource Sharing (CORS) Preflight Protocol
          </h4>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setViewStep("preflight")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
              viewStep === "preflight"
                ? "bg-[#f97316] text-white"
                : "bg-white border border-[#e7e3da] text-stone-700"
            }`}
          >
            1. OPTIONS Preflight
          </button>
          <button
            onClick={() => setViewStep("actual")}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
              viewStep === "actual"
                ? "bg-[#f97316] text-white"
                : "bg-white border border-[#e7e3da] text-stone-700"
            }`}
          >
            2. Actual PATCH Request
          </button>
        </div>
      </div>

      {viewStep === "preflight" && (
        <div className="space-y-3">
          <div className="rounded-xl border border-stone-200 bg-white p-4 font-mono text-xs space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block font-sans">
              Step 1: Browser intercepts cross-origin modification and sends OPTIONS:
            </span>
            <div className="p-2.5 rounded-lg bg-stone-900 text-emerald-400 overflow-x-auto">
              OPTIONS /api/v1/courses/101 HTTP/1.1<br />
              Host: api.prepspaces.example<br />
              Origin: https://prepspaces.example<br />
              Access-Control-Request-Method: PATCH<br />
              Access-Control-Request-Headers: authorization, content-type
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block font-sans pt-2">
              Step 2: API Gateway / Backend inspects origin allowlist and responds:
            </span>
            <div className="p-2.5 rounded-lg bg-stone-900 text-amber-300 overflow-x-auto">
              HTTP/1.1 204 No Content<br />
              Access-Control-Allow-Origin: https://prepspaces.example<br />
              Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS<br />
              Access-Control-Allow-Headers: Authorization, Content-Type<br />
              Access-Control-Max-Age: 86400<br />
              Vary: Origin
            </div>
          </div>
          <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 text-xs text-orange-950">
            <strong>Architectural Insight:</strong> CORS is enforced strictly by browser runtimes to protect users from malicious scripts reading private data. Direct HTTP clients (curl, Python, mobile apps) bypass CORS completely, which is why <em>CORS is not authentication</em>.
          </div>
        </div>
      )}

      {viewStep === "actual" && (
        <div className="space-y-3">
          <div className="rounded-xl border border-stone-200 bg-white p-4 font-mono text-xs space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block font-sans">
              Step 3: Preflight approved! Browser dispatches actual mutation:
            </span>
            <div className="p-2.5 rounded-lg bg-stone-900 text-emerald-400 overflow-x-auto">
              PATCH /api/v1/courses/101 HTTP/1.1<br />
              Host: api.prepspaces.example<br />
              Origin: https://prepspaces.example<br />
              Authorization: Bearer eyJhbGciOi...<br />
              Content-Type: application/json<br />
              <br />
              &#123; "completedLessonIds": [1, 2, 3] &#125;
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block font-sans pt-2">
              Step 4: Backend commits update and returns resource representation:
            </span>
            <div className="p-2.5 rounded-lg bg-stone-900 text-white overflow-x-auto">
              HTTP/1.1 200 OK<br />
              Content-Type: application/json<br />
              Access-Control-Allow-Origin: https://prepspaces.example<br />
              <br />
              &#123; "id": 101, "completedLessonIds": [1, 2, 3], "progressPct": 100 &#125;
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. IDEMPOTENCY KEY WORKFLOW & TIMEOUT RESOLUTION                           */
/* -------------------------------------------------------------------------- */
export function IdempotencyTimeoutDiagram() {
  const [stage, setStage] = useState(0);

  const stages = [
    {
      title: "1. Initial Request with Idempotency Key",
      detail:
        "Student clicks 'Submit Assignment'. The client generates UUID '7d2de92c' and sends POST /submissions with header 'Idempotency-Key: 7d2de92c'.",
      action: "Client ──[POST + Key: 7d2de92c]──▶ Backend",
    },
    {
      title: "2. Database Commit Succeeded",
      detail:
        "Backend creates database transaction, inserts submission, writes record to idempotency_keys table, and commits transaction.",
      action: "Backend ──[INSERT INTO submissions COMMIT]──▶ Database (Persisted!)",
    },
    {
      title: "3. Response Lost in Network Outage",
      detail:
        "A network switch blip or client TCP teardown drops the HTTP 201 Created response. The client waits 5000ms and encounters an HTTP Timeout error.",
      action: "Response Dropped 💥 Client Timeout (Uncertain Outcome!)",
    },
    {
      title: "4. Client Retries with Identical Idempotency Key",
      detail:
        "Using exponential backoff with full jitter, the client retries the identical payload with the original 'Idempotency-Key: 7d2de92c'.",
      action: "Client ──[RETRY POST + Key: 7d2de92c]──▶ Backend",
    },
    {
      title: "5. Deduplication & Cached Response Return",
      detail:
        "Backend checks idempotency_keys table, finds existing commit, skips re-executing business logic, and safely returns original 201 Created result.",
      action: "Backend ──[201 Created (Recovered, No Duplication!)]──▶ Client",
    },
  ];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
            Fault-Tolerant Distributed APIs
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Idempotency Keys & The Unconfirmed Timeout Dilemma
          </h4>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => setStage((p) => Math.max(0, p - 1))}
            disabled={stage === 0}
            className="px-2.5 py-1 rounded-lg text-xs font-bold border border-[#e7e3da] bg-white text-stone-700 disabled:opacity-40"
          >
            Prev
          </button>
          <button
            onClick={() => setStage((p) => Math.min(stages.length - 1, p + 1))}
            disabled={stage === stages.length - 1}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#f97316] text-white disabled:opacity-40"
          >
            Next Stage
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 mb-4">
        {stages.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setStage(idx)}
            className={`p-2 rounded-xl text-left border text-xs transition ${
              idx === stage
                ? "bg-orange-50 border-orange-400 font-bold text-orange-800"
                : "bg-white border-[#e7e3da] text-stone-600"
            }`}
          >
            <span className="block text-[10px] font-mono">Stage {idx + 1}</span>
            <span className="line-clamp-1">{s.title.split(". ")[1]}</span>
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-2xs space-y-2">
        <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
          {stages[stage].action}
        </span>
        <h5 className="text-sm font-bold text-stone-900 mt-2">{stages[stage].title}</h5>
        <p className="text-xs text-stone-600 leading-relaxed">{stages[stage].detail}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 8. DISTRIBUTED TRACING SPAN WATERFALL                                      */
/* -------------------------------------------------------------------------- */
export function DistributedTracingDiagram() {
  const spans = [
    { name: "gateway: ingress_request", start: 0, duration: 155, color: "bg-stone-800" },
    { name: "middleware: jwt_verify", start: 8, duration: 14, color: "bg-purple-600" },
    { name: "service: get_course_details", start: 24, duration: 125, color: "bg-blue-600" },
    { name: "cache: redis_lookup (miss)", start: 28, duration: 4, color: "bg-amber-600" },
    { name: "postgres: select_course_and_lessons", start: 34, duration: 42, color: "bg-emerald-600" },
    { name: "rpc: recommendation_service", start: 78, duration: 68, color: "bg-rose-600", alert: "High Latency Bottleneck" },
  ];

  return (
    <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
            OpenTelemetry Observability Standard
          </span>
          <h4 className="text-sm font-bold text-stone-900">
            Distributed Tracing Waterfall & Parent-Child Span Hierarchy
          </h4>
        </div>
        <span className="text-xs font-mono text-stone-500">Trace ID: 4bf92f3577b34da6</span>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-3 font-mono text-xs">
        {spans.map((span, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-stone-800 font-bold flex items-center gap-1.5">
                {span.name}
                {span.alert && (
                  <span className="bg-rose-100 text-rose-700 text-[9px] px-1.5 py-0.2 rounded font-sans font-bold">
                    {span.alert}
                  </span>
                )}
              </span>
              <span className="text-stone-500">{span.duration} ms</span>
            </div>
            <div className="h-3 w-full bg-stone-100 rounded-full relative overflow-hidden">
              <div
                className={`h-full ${span.color} rounded-full absolute`}
                style={{
                  left: `${(span.start / 155) * 100}%`,
                  width: `${(span.duration / 155) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-stone-500 mt-3">
        In this trace, the recommendation RPC span accounts for 68ms (44% of total time). Gracefully degrading this optional call when latency exceeds 30ms reduces p95 response time significantly.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* VISUAL DIAGRAM DISPATCHER FOR MODULE 3                                     */
/* -------------------------------------------------------------------------- */
export function VisualDiagramComponentModule3({ diagramType }) {
  switch (diagramType) {
    case "internet-stack":
      return <InternetStackDiagram />;
    case "dns-resolution":
      return <DnsResolutionDiagram />;
    case "handshake-comparison":
      return <HandshakeComparisonDiagram />;
    case "communication-styles":
      return <CommunicationStylesDiagram />;
    case "request-lifecycle":
      return <RequestLifecycleWaterfallDiagram />;
    case "cors-preflight":
      return <CorsPreflightDiagram />;
    case "idempotency-timeout":
      return <IdempotencyTimeoutDiagram />;
    case "distributed-tracing":
      return <DistributedTracingDiagram />;
    default:
      return <RequestLifecycleWaterfallDiagram />;
  }
}
