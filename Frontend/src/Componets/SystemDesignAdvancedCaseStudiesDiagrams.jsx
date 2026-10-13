import React, { useState } from "react";
import {
  Video,
  Navigation,
  CreditCard,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  Server,
  Database,
  Layers,
  SlidersHorizontal,
  Clock,
  ExternalLink,
  Activity,
  Shield,
  FileText,
  Zap,
  Globe,
  Radio,
  Repeat,
  DollarSign,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: VIDEO TRANSCODING & ADAPTIVE BITRATE (ABR) STREAMING PIPELINE
 * Simulates chunked upload, multi-bitrate renditions (360p-1080p), HLS packaging,
 * and CDN edge delivery with dynamic bandwidth & storage calculation.
 * ---------------------------------------------------------------------------
 */
export function VideoTranscodingPipelineDiagram() {
  const [videoDurationMins, setVideoDurationMins] = useState(15);
  const [selectedResolution, setSelectedResolution] = useState("1080p");
  const [networkSpeedMbps, setNetworkSpeedMbps] = useState(5.0);

  // Rendition specifications
  const renditions = {
    "360p": { bitrateMbps: 0.8, vramCost: "0.2 GPU hrs", segmentSizeKb: 1000 },
    "480p": { bitrateMbps: 1.4, vramCost: "0.4 GPU hrs", segmentSizeKb: 1750 },
    "720p": { bitrateMbps: 2.8, vramCost: "0.8 GPU hrs", segmentSizeKb: 3500 },
    "1080p": { bitrateMbps: 5.0, vramCost: "1.5 GPU hrs", segmentSizeKb: 6250 },
  };

  const currentRendition = renditions[selectedResolution];
  const totalSeconds = videoDurationMins * 60;
  const numSegments = Math.ceil(totalSeconds / 6); // 6-second HLS chunks
  const deliveredMb = Math.round((currentRendition.bitrateMbps * totalSeconds) / 8);

  // Adaptive switching recommendation
  let abrQuality = "1080p";
  if (networkSpeedMbps < 1.0) abrQuality = "360p";
  else if (networkSpeedMbps < 2.0) abrQuality = "480p";
  else if (networkSpeedMbps < 4.0) abrQuality = "720p";
  else abrQuality = "1080p";

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 mb-1">
            <Video className="w-3.5 h-3.5 text-red-600" />
            Video Pipeline Simulator
          </div>
          <h4 className="text-base font-bold text-stone-900">
            Ingestion, Transcoding Ladder &amp; HLS CDN Delivery
          </h4>
        </div>
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200 text-xs">
          {Object.keys(renditions).map((res) => (
            <button
              key={res}
              onClick={() => setSelectedResolution(res)}
              className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                selectedResolution === res
                  ? "bg-red-600 text-white shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {res}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs text-stone-700 font-medium mb-1.5">
            <span>Video Duration:</span>
            <span className="font-mono font-bold text-red-600">{videoDurationMins} minutes</span>
          </div>
          <input
            type="range"
            min="2"
            max="60"
            step="1"
            value={videoDurationMins}
            onChange={(e) => setVideoDurationMins(Number(e.target.value))}
            className="w-full accent-red-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-700 font-mono mt-1">
            <span>2 min</span>
            <span>30 min</span>
            <span>60 min</span>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100">
            <div className="flex justify-between text-xs text-stone-700 font-medium mb-1.5">
              <span>Client Network Speed:</span>
              <span className="font-mono font-bold text-blue-600">{networkSpeedMbps.toFixed(1)} Mbps</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="15.0"
              step="0.5"
              value={networkSpeedMbps}
              onChange={(e) => setNetworkSpeedMbps(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="mt-2 text-[11px] font-semibold text-stone-700">
              ABR Auto-Selected Quality:{" "}
              <span className="text-blue-600 font-bold">{abrQuality}</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-stone-200 md:col-span-2">
          <div className="text-xs font-semibold text-stone-900 mb-2">Transcoding &amp; Packaging Output</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Target Bitrate</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">{currentRendition.bitrateMbps} Mbps</div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">HLS 6s Segments</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">{numSegments} .ts files</div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Delivered Size</div>
              <div className="text-sm font-bold text-red-600 mt-0.5">~{deliveredMb} MB</div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Transcode Compute</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">{currentRendition.vramCost}</div>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700">
            <strong>Adaptive Bitrate (ABR) Logic:</strong> The video player downloads the root manifest{" "}
            <code className="text-stone-900 font-mono text-[11px]">master.m3u8</code> containing playlist references for 360p, 480p, 720p, and 1080p.
            At current network speed of <strong>{networkSpeedMbps} Mbps</strong>, the player smoothly switches to <strong>{abrQuality}</strong> segments
            to prevent playback buffer underruns.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-stone-700 font-medium">1. Direct Upload</div>
          <div className="font-bold text-stone-900 mt-0.5">S3 Pre-signed URL</div>
          <div className="text-[11px] text-stone-700 mt-1">Chunked multipart direct to object storage, bypassing API servers.</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-stone-700 font-medium">2. Async Pipeline</div>
          <div className="font-bold text-stone-900 mt-0.5">FFmpeg Worker Pool</div>
          <div className="text-[11px] text-stone-700 mt-1">Decoupled queue generates H.264/AV1 renditions and thumbnail sprites.</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-stone-700 font-medium">3. Packaging</div>
          <div className="font-bold text-stone-900 mt-0.5">HLS / MPEG-DASH</div>
          <div className="text-[11px] text-stone-700 mt-1">Generates .m3u8 index playlists and 6-second chunked .ts/.m4s segments.</div>
        </div>
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <div className="text-stone-700 font-medium">4. Edge Delivery</div>
          <div className="font-bold text-stone-900 mt-0.5">CloudFront / CDN</div>
          <div className="text-[11px] text-stone-700 mt-1">Signed cookies for protected courses; 98%+ edge cache hit ratio.</div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: RIDE-HAILING GEOSPATIAL SEARCH & CONCURRENT DISPATCH SIMULATOR
 * Visualizes H3 hexagonal cell candidate discovery, driver scoring (ETA, distance),
 * and atomic conditional reservation preventing double-assignment races.
 * ---------------------------------------------------------------------------
 */
export function RideHailingDispatchDiagram() {
  const [searchRadiusKm, setSearchRadiusKm] = useState(3);
  const [concurrencyRace, setConcurrencyRace] = useState(false);
  const [reservationState, setReservationState] = useState("IDLE"); // IDLE, RESERVING, RESERVED, CONFLICT

  const sampleDrivers = [
    { id: "D-101", distKm: 0.8, etaMins: 3, rating: 4.9, status: "AVAILABLE" },
    { id: "D-102", distKm: 1.4, etaMins: 5, rating: 4.8, status: "AVAILABLE" },
    { id: "D-103", distKm: 2.2, etaMins: 7, rating: 4.9, status: "AVAILABLE" },
    { id: "D-104", distKm: 3.5, etaMins: 11, rating: 4.7, status: "AVAILABLE" },
  ];

  const filteredDrivers = sampleDrivers.filter((d) => d.distKm <= searchRadiusKm);

  const simulateDispatch = (withRace) => {
    setConcurrencyRace(withRace);
    setReservationState("RESERVING");

    setTimeout(() => {
      if (withRace) {
        setReservationState("CONFLICT");
      } else {
        setReservationState("RESERVED");
      }
    }, 900);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-1">
            <Navigation className="w-3.5 h-3.5 text-emerald-600" />
            Ride-Hailing Dispatch Simulator
          </div>
          <h4 className="text-base font-bold text-stone-900">
            H3 Geospatial Indexing &amp; Atomic Conditional Reservation
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => simulateDispatch(false)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm"
          >
            Normal Dispatch
          </button>
          <button
            onClick={() => simulateDispatch(true)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 text-white hover:bg-amber-700 shadow-sm"
          >
            Simulate 2-Worker Race
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs text-stone-700 font-medium mb-1.5">
            <span>H3 Search Ring Radius:</span>
            <span className="font-mono font-bold text-emerald-600">{searchRadiusKm} km</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={searchRadiusKm}
            onChange={(e) => setSearchRadiusKm(Number(e.target.value))}
            className="w-full accent-emerald-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-700 font-mono mt-1">
            <span>1 km (Cell 8)</span>
            <span>3 km (Ring 1)</span>
            <span>5 km (Ring 2)</span>
          </div>

          <div className="mt-3 space-y-2">
            <div className="text-xs font-bold text-stone-900">Candidate Drivers in Spatial Bucket:</div>
            {filteredDrivers.length === 0 ? (
              <div className="text-xs text-stone-700 italic">No available drivers found in radius. Expanding ring...</div>
            ) : (
              filteredDrivers.map((d) => (
                <div key={d.id} className="p-2 rounded-lg bg-stone-50 border border-stone-200 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-bold text-stone-900">{d.id}</span>
                    <span className="text-stone-700 ml-2">({d.distKm} km, ~{d.etaMins}m ETA)</span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px]">
                    ★ {d.rating}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="text-xs font-semibold text-stone-900 mb-2">Atomic Reservation Lifecycle</div>
          <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs mb-3">
            -- PostgreSQL Atomic Conditional Update<br />
            UPDATE drivers<br />
            SET status = &apos;RESERVED&apos;, trip_id = $trip_id, reserved_at = NOW()<br />
            WHERE driver_id = &apos;D-101&apos; AND status = &apos;AVAILABLE&apos;;
          </div>

          <div
            className={`p-3.5 rounded-xl border text-xs ${
              reservationState === "RESERVED"
                ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                : reservationState === "CONFLICT"
                ? "bg-rose-50 border-rose-300 text-rose-900"
                : reservationState === "RESERVING"
                ? "bg-amber-50 border-amber-300 text-amber-900"
                : "bg-stone-50 border-stone-200 text-stone-700"
            }`}
          >
            {reservationState === "IDLE" && "Ready to trigger driver dispatch."}
            {reservationState === "RESERVING" && "Executing conditional CAS reservation lock..."}
            {reservationState === "RESERVED" && (
              <div>
                <strong>SUCCESS (1 Row Updated):</strong> Driver D-101 reserved exclusively for Trip #T-942. Notification pushed via WebSocket.
              </div>
            )}
            {reservationState === "CONFLICT" && (
              <div>
                <strong>CONCURRENCY CONFLICT (0 Rows Updated):</strong> Worker B attempted to claim D-101, but Worker A won the CAS update. Worker B automatically retries with candidate D-102. Zero double-assignment risk!
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
 * DIAGRAM 3: PAYMENT PLATFORM IDEMPOTENCY & DOUBLE-ENTRY LEDGER SIMULATOR
 * Demonstrates idempotency key deduplication, timeout recovery, and balanced
 * debit/credit double-entry accounting invariants.
 * ---------------------------------------------------------------------------
 */
export function PaymentStateLedgerDiagram() {
  const [idempotencyKey, setIdempotencyKey] = useState("order_1001_attempt_1");
  const [paymentAmountInr, setPaymentAmountInr] = useState(2500);
  const [networkTimeoutSimulated, setNetworkTimeoutSimulated] = useState(false);
  const [paymentLog, setPaymentLog] = useState([]);

  const handleCharge = (isRetry) => {
    const existing = paymentLog.find((entry) => entry.key === idempotencyKey);
    if (existing) {
      alert(`IDEMPOTENT HIT: Request with key '${idempotencyKey}' was already processed. Returning cached result without re-charging customer.`);
      return;
    }

    if (networkTimeoutSimulated && !isRetry) {
      setPaymentLog((prev) => [
        ...prev,
        {
          key: idempotencyKey,
          status: "PENDING_WEBHOOK",
          amount: paymentAmountInr,
          note: "Network timeout on response. Provider accepted charge; awaiting signed webhook.",
          ledgerDebits: paymentAmountInr,
          ledgerCredits: paymentAmountInr,
        },
      ]);
    } else {
      setPaymentLog((prev) => [
        ...prev,
        {
          key: idempotencyKey,
          status: "SUCCEEDED",
          amount: paymentAmountInr,
          note: "Charge captured successfully and balanced in financial ledger.",
          ledgerDebits: paymentAmountInr,
          ledgerCredits: paymentAmountInr,
        },
      ]);
    }
  };

  const handleClear = () => {
    setPaymentLog([]);
    setIdempotencyKey(`order_${Math.floor(Math.random() * 9000 + 1000)}_attempt_1`);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-1">
            <CreditCard className="w-3.5 h-3.5 text-blue-600" />
            Payment &amp; Ledger Simulator
          </div>
          <h4 className="text-base font-bold text-stone-900">
            Idempotency Key Deduplication &amp; Double-Entry Accounting
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleCharge(false)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 shadow-sm"
          >
            Process Payment
          </button>
          <button
            onClick={handleClear}
            className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 border border-stone-200 bg-white"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="text-xs font-bold text-stone-900 mb-2">Request Parameters</div>
          <div className="space-y-3 text-xs">
            <div>
              <label className="text-stone-700 block mb-1">Idempotency-Key Header:</label>
              <input
                type="text"
                value={idempotencyKey}
                onChange={(e) => setIdempotencyKey(e.target.value)}
                className="w-full p-2 rounded-lg border border-stone-300 font-mono text-xs bg-stone-50"
              />
            </div>
            <div>
              <label className="text-stone-700 block mb-1">Amount (INR):</label>
              <input
                type="number"
                value={paymentAmountInr}
                onChange={(e) => setPaymentAmountInr(Number(e.target.value))}
                className="w-full p-2 rounded-lg border border-stone-300 font-mono text-xs bg-stone-50"
              />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="simTimeout"
                checked={networkTimeoutSimulated}
                onChange={(e) => setNetworkTimeoutSimulated(e.target.checked)}
                className="accent-blue-600 rounded"
              />
              <label htmlFor="simTimeout" className="text-stone-700 text-xs cursor-pointer">
                Simulate dropped client response (ambiguous network timeout)
              </label>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="text-xs font-bold text-stone-900 mb-2">Double-Entry Ledger Balancing Invariant</div>
          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left border border-stone-200 rounded-lg overflow-hidden">
              <thead className="bg-stone-100 text-stone-700 text-[11px] uppercase font-bold">
                <tr>
                  <th className="p-2 border-b">Account</th>
                  <th className="p-2 border-b">Debit (Dr)</th>
                  <th className="p-2 border-b">Credit (Cr)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 font-mono text-[11px]">
                <tr>
                  <td className="p-2">Provider Clearing Asset</td>
                  <td className="p-2 text-emerald-600 font-bold">₹{paymentAmountInr.toLocaleString()}</td>
                  <td className="p-2 text-stone-700">—</td>
                </tr>
                <tr>
                  <td className="p-2">Merchant Payable Liability</td>
                  <td className="p-2 text-stone-700">—</td>
                  <td className="p-2 text-blue-600 font-bold">₹{paymentAmountInr.toLocaleString()}</td>
                </tr>
                <tr className="bg-stone-50 font-bold">
                  <td className="p-2">Total (Dr == Cr)</td>
                  <td className="p-2 text-emerald-700">₹{paymentAmountInr.toLocaleString()}</td>
                  <td className="p-2 text-blue-700">₹{paymentAmountInr.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 text-[11px] text-stone-700">
            Invariant: Sum(Debits) - Sum(Credits) === 0. Money cannot be created or destroyed.
          </div>
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs">
        <div className="font-bold text-stone-900 mb-1">Transaction History &amp; Idempotency Audit:</div>
        {paymentLog.length === 0 ? (
          <div className="text-stone-700 italic">No transactions processed yet. Click &quot;Process Payment&quot; above.</div>
        ) : (
          <div className="space-y-1.5 font-mono text-[11px]">
            {paymentLog.map((log, idx) => (
              <div key={idx} className="p-2 rounded bg-stone-50 border border-stone-200 flex justify-between items-center">
                <div>
                  <span className="font-bold text-stone-900">{log.key}</span>
                  <span className="text-stone-700 ml-2">₹{log.amount}</span>
                  <span className="text-stone-700 ml-2">({log.note})</span>
                </div>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    log.status === "SUCCEEDED"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {log.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 4: LARGE-SCALE AI SERVICE SCHEDULER & CONTINUOUS BATCHING
 * Visualizes continuous batching token throughput, GPU memory allocation (weights + KV cache),
 * and dynamic request routing based on task latency & cost SLA.
 * ---------------------------------------------------------------------------
 */
export function AIServiceSchedulerDiagram() {
  const [arrivalRps, setArrivalRps] = useState(50);
  const [avgInputTokens, setAvgInputTokens] = useState(1200);
  const [avgOutputTokens, setAvgOutputTokens] = useState(300);
  const [batchingMode, setBatchingMode] = useState("continuous"); // "continuous" vs "static"

  const inputThroughput = arrivalRps * avgInputTokens;
  const outputThroughput = arrivalRps * avgOutputTokens;
  const concurrency = arrivalRps * 4; // 4s avg latency
  const kvCacheGb = Math.round((concurrency * (avgInputTokens + avgOutputTokens) * 2 * 32 * 4) / (1024 * 1024 * 1024)); // rough formula

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 mb-1">
            <Cpu className="w-3.5 h-3.5 text-purple-600" />
            AI Serving Scheduler Simulator
          </div>
          <h4 className="text-base font-bold text-stone-900">
            Continuous Batching, KV-Cache &amp; Token Scheduling
          </h4>
        </div>
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200 text-xs">
          <button
            onClick={() => setBatchingMode("continuous")}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              batchingMode === "continuous"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Continuous Batching (vLLM)
          </button>
          <button
            onClick={() => setBatchingMode("static")}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              batchingMode === "static"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Static Batching
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="p-4 rounded-xl bg-white border border-stone-200">
          <div className="flex justify-between text-xs text-stone-700 font-medium mb-1.5">
            <span>Peak Arrival RPS:</span>
            <span className="font-mono font-bold text-purple-600">{arrivalRps} req/s</span>
          </div>
          <input
            type="range"
            min="10"
            max="150"
            step="10"
            value={arrivalRps}
            onChange={(e) => setArrivalRps(Number(e.target.value))}
            className="w-full accent-purple-600 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-stone-700 font-mono mt-1">
            <span>10 req/s</span>
            <span>75 req/s</span>
            <span>150 req/s</span>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100">
            <div className="flex justify-between text-xs text-stone-700 font-medium mb-1.5">
              <span>Avg Input / Output Tokens:</span>
              <span className="font-mono font-bold text-stone-900">{avgInputTokens} in / {avgOutputTokens} out</span>
            </div>
            <div className="text-[11px] text-stone-700">
              Inference time is dominated by output token generation (autoregressive sequential decoding).
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-stone-200 md:col-span-2">
          <div className="text-xs font-semibold text-stone-900 mb-2">Accelerator Demand Metrics</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Input Throughput</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">{inputThroughput.toLocaleString()} t/s</div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Output Generation</div>
              <div className="text-sm font-bold text-purple-600 mt-0.5">{outputThroughput.toLocaleString()} t/s</div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">Concurrent In-Flight</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">~{concurrency} reqs</div>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-stone-700 text-[11px]">KV Cache Overhead</div>
              <div className="text-sm font-bold text-stone-900 mt-0.5">~{kvCacheGb} GB VRAM</div>
            </div>
          </div>

          <div className="mt-3 p-3 rounded-lg bg-purple-50 border border-purple-200 text-xs text-purple-900">
            {batchingMode === "continuous" ? (
              <span>
                <strong>Continuous Batching Active (Iteration-Level Scheduling):</strong> The GPU does not wait for slow sequences to finish. As soon as Request A finishes a token, Request B can be admitted on the very next decoding step. Eliminates GPU idle bubbles!
              </span>
            ) : (
              <span>
                <strong>Static Batching Warning:</strong> All requests in batch must wait until the longest sequence completes. Shorter requests experience artificial latency and GPU compute is wasted on padding tokens.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * MASTER DISPATCHER COMPONENT FOR MODULE 23
 * ---------------------------------------------------------------------------
 */
export default function VisualDiagramComponentModule23({ diagramId }) {
  if (diagramId === "video_platform") return <VideoTranscodingPipelineDiagram />;
  if (diagramId === "ride_hailing") return <RideHailingDispatchDiagram />;
  if (diagramId === "payment_platform") return <PaymentStateLedgerDiagram />;
  if (diagramId === "ai_service") return <AIServiceSchedulerDiagram />;

  return (
    <div className="space-y-6">
      <VideoTranscodingPipelineDiagram />
      <RideHailingDispatchDiagram />
      <PaymentStateLedgerDiagram />
      <AIServiceSchedulerDiagram />
    </div>
  );
}
