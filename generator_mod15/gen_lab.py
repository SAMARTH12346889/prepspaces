# projectx/generator_mod15/gen_lab.py
"""
Lab & Assignments generator for Module 15: IPFS & Decentralized Storage
Includes Practical Lab Steps 1 to 9, testing matrix, deliverables, 4 advanced assignments, and 100-mark evaluation rubric.
"""

def generate_lab():
    return r'''
      {/* ------------------------------------------------------------- */}
      {/* TAB 3: PRACTICAL LAB & ADVANCED ASSIGNMENTS                   */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "lab" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Capstone Engineering Lab
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                React • TypeScript • Node.js • IPFS Pinata • Viem • Solidity
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Practical Lab — Build a Decentralized File-Sharing Application Using IPFS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              In this hands-on engineering lab, you will build and deploy a production-ready decentralized file-sharing platform.
              Users can upload arbitrary documents, stream them to an IPFS pinning provider via a secure backend proxy,
              inspect the generated CIDv1 hashes, verify file integrity, and permanently anchor document ownership onto the
              Ethereum Sepolia testnet using an on-chain Solidity registry contract and Viem.
            </p>

            {/* Tech Stack Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                  <tr>
                    <th className="p-3 border-b border-neutral-200">Architecture Layer</th>
                    <th className="p-3 border-b border-neutral-200">Selected Technology</th>
                    <th className="p-3 border-b border-neutral-200">Role & Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Frontend Client</td>
                    <td className="p-3 font-mono text-neutral-800">React + TypeScript (Vite)</td>
                    <td className="p-3">Component-based UI with drag-and-drop file ingestion</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Styling System</td>
                    <td className="p-3 font-mono text-neutral-800">Tailwind CSS</td>
                    <td className="p-3">Responsive, accessible utility-first component styling</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Backend API Gateway</td>
                    <td className="p-3 font-mono text-neutral-800">Node.js + Express + Multer</td>
                    <td className="p-3">Memory buffering, rate limiting, and private credential isolation</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Decentralized Storage</td>
                    <td className="p-3 font-mono text-amber-700">IPFS Pinning Provider (Pinata)</td>
                    <td className="p-3">High-availability global swarm seeding and persistent block retention</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Blockchain Network</td>
                    <td className="p-3 font-mono text-neutral-800">Ethereum Sepolia Testnet</td>
                    <td className="p-3">Decentralized consensus layer for immutable document anchoring</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Blockchain Client</td>
                    <td className="p-3 font-mono text-neutral-800">Viem 2.x</td>
                    <td className="p-3">Type-safe Ethereum JSON-RPC client and wallet contract writes</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Smart Contract</td>
                    <td className="p-3 font-mono text-neutral-800">Solidity 0.8.24 (Hardhat)</td>
                    <td className="p-3"><code className="font-mono text-xs">IPFSRegistry.sol</code> registering CIDs with timestamps</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Architecture ASCII Flow */}
            <div className="mt-6 p-4 bg-neutral-900 rounded-xl text-neutral-200 font-mono text-xs space-y-2">
              <div className="text-amber-400 font-bold uppercase tracking-wider">End-to-End Lab Architecture Flow</div>
              <pre className="overflow-x-auto text-[11px] leading-relaxed text-neutral-300">
{`React Frontend                Node.js Backend                Pinata IPFS                Ethereum Sepolia
     │                               │                            │                            │
     │── 1. Select File (Upload) ───▶│                            │                            │
     │                               │── 2. Stream to IPFS ──────▶│                            │
     │                               │◀─ 3. Return Root CIDv1 ────│                            │
     │◀─ 4. Deliver CID + Metadata ──│                            │                            │
     │                                                                                         │
     │── 5. User signs MetaMask tx: registerDocument(CID) ────────────────────────────────────▶│
     │◀─ 6. Transaction Confirmed (Block mined with CID indexed on-chain) ─────────────────────│`}
              </pre>
            </div>
          </div>

          {/* STEP 1: Project Setup */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 1</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Create Vite Project & Directory Layout</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">Vite + React TS</span>
            </div>
            <p className="text-sm text-neutral-600">
              Scaffold the React TypeScript frontend and install dependencies including Viem:
            </p>
            <div className="bg-neutral-900 text-neutral-200 p-4 rounded-xl font-mono text-xs space-y-2">
              <div className="text-neutral-400"># Scaffold the frontend</div>
              <div className="text-green-400">npm create vite@latest ipfs-file-sharing -- --template react-ts</div>
              <div className="text-neutral-400"># Navigate and install dependencies</div>
              <div className="text-green-400">cd ipfs-file-sharing</div>
              <div className="text-green-400">npm install viem lucide-react</div>
              <div className="text-green-400">npm run dev</div>
            </div>
            <p className="text-xs text-neutral-500 font-semibold pt-1">Recommended Directory Structure:</p>
            <pre className="text-xs font-mono bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-neutral-800 leading-relaxed overflow-x-auto">
{`ipfs-file-sharing/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FileUploader.tsx
│   │   │   ├── FileList.tsx
│   │   │   └── FileDetails.tsx
│   │   ├── services/
│   │   │   ├── ipfsService.ts
│   │   │   └── blockchainService.ts
│   │   ├── contracts/
│   │   │   └── IPFSRegistryABI.ts
│   │   ├── App.tsx
│   │   └── main.tsx
├── backend/
│   ├── server.js
│   ├── routes/upload.js
│   ├── .env
│   └── package.json
└── contracts/
    └── IPFSRegistry.sol`}
            </pre>
          </div>

          {/* STEP 2: Configure Backend */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 2</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Configure Node.js Backend & Environment Isolation</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">Express + Multer</span>
            </div>
            <p className="text-sm text-neutral-600">
              Initialize the backend folder and install the required middleware:
            </p>
            <div className="bg-neutral-900 text-neutral-200 p-4 rounded-xl font-mono text-xs space-y-1">
              <div className="text-green-400">mkdir backend && cd backend</div>
              <div className="text-green-400">npm init -y</div>
              <div className="text-green-400">npm install express cors dotenv multer</div>
            </div>
            <p className="text-sm text-neutral-600 pt-2">
              Create the backend <code className="font-mono text-xs px-1.5 py-0.5 bg-neutral-100 rounded">.env</code> configuration:
            </p>
            <div className="bg-neutral-900 text-neutral-200 p-4 rounded-xl font-mono text-xs space-y-1">
              <div className="text-neutral-400"># backend/.env</div>
              <div>PORT=5000</div>
              <div>PINATA_JWT=your_pinata_jwt_token_here</div>
              <div>PINATA_GATEWAY=https://gateway.pinata.cloud</div>
            </div>
            <div className="p-3 bg-red-50/70 border border-red-200 rounded-lg text-xs text-red-900">
              <strong>Security Rule:</strong> Add <code className="font-mono">.env</code> and <code className="font-mono">node_modules/</code>
              to your <code className="font-mono">.gitignore</code> immediately. Never commit API keys to version control.
            </div>
          </div>

          {/* STEP 3: Backend Upload API */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 3</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Implement File Upload Proxy (backend/server.js)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">Pinata REST API</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// In-memory buffer upload with a strict 10 Megabyte ceiling
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }
});

app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Prepare multipart form data for Pinata API
    const formData = new FormData();
    const fileBlob = new Blob([req.file.buffer], { type: req.file.mimetype });
    formData.append("file", fileBlob, req.file.originalname);

    // Forward binary payload to Pinata's pinning gateway
    const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: \`Bearer \${process.env.PINATA_JWT}\`
      },
      body: formData
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Pinata error:", errBody);
      throw new Error("IPFS provider upload failed");
    }

    const result = await response.json();

    // Return standardized metadata to the React client
    res.json({
      cid: result.IpfsHash,
      name: req.file.originalname,
      size: req.file.size,
      mimeType: req.file.mimetype,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error("Upload proxy error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`IPFS Backend Proxy running on port \${PORT}\`);
});`}
            </pre>
            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-neutral-700 space-y-1">
              <span className="font-bold text-neutral-900">Backend Hardening Checklist:</span>
              <ul className="list-disc list-inside space-y-0.5 text-neutral-600">
                <li>Enforce upload quotas and rate limiting (e.g. <code className="font-mono">express-rate-limit</code>).</li>
                <li>Validate MIME types against a strict whitelist (PDF, PNG, JPEG, SVG, JSON).</li>
                <li>Verify CORS origins for production frontend domains.</li>
              </ul>
            </div>
          </div>

          {/* STEP 4: IPFS Upload Service */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 4</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Frontend IPFS Service (src/services/ipfsService.ts)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">TypeScript Service</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/services/ipfsService.ts
export interface UploadedFile {
  cid: string;
  name: string;
  size: number;
  mimeType: string;
  timestamp?: number;
  txHash?: string;
  isRegistered?: boolean;
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
const GATEWAY_URL = import.meta.env.VITE_IPFS_GATEWAY || "https://gateway.pinata.cloud/ipfs";

export async function uploadFile(file: File): Promise<UploadedFile> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(\`\${BACKEND_URL}/api/upload\`, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    throw new Error("Upload request failed with status " + response.status);
  }

  return response.json();
}

export function getIPFSUrl(cid: string): string {
  return \`\${GATEWAY_URL}/\${cid}\`;
}`}
            </pre>
          </div>

          {/* STEP 5: File Uploader Component */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 5</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">File Uploader Component (src/components/FileUploader.tsx)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">React Component</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/components/FileUploader.tsx
import { useState } from "react";
import { uploadFile, type UploadedFile } from "../services/ipfsService";

interface FileUploaderProps {
  onUploaded: (file: UploadedFile) => void;
}

export default function FileUploader({ onUploaded }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleUpload() {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    try {
      setLoading(true);
      setMessage("Chunking, hashing, and pinning to IPFS...");
      const result = await uploadFile(file);
      onUploaded(result);
      setMessage("Upload successful! Content pinned to IPFS network.");
      setFile(null);
    } catch (error) {
      setMessage("Upload failed. Verify backend and API credentials.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="p-6 bg-white rounded-xl border border-neutral-200 space-y-4">
      <h2 className="text-lg font-bold text-neutral-900">Upload Document to IPFS</h2>
      <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center hover:border-amber-500 transition">
        <input
          type="file"
          id="file-input"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <label htmlFor="file-input" className="cursor-pointer space-y-2 block">
          <div className="text-xs text-neutral-600">
            {file ? <strong className="text-amber-700">{file.name}</strong> : "Click to select a document from disk"}
          </div>
          {file && <div className="text-[11px] text-neutral-400">{(file.size / 1024).toFixed(1)} KB</div>}
        </label>
      </div>

      <button
        disabled={loading || !file}
        onClick={handleUpload}
        className="w-full py-2.5 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 disabled:opacity-40 text-white transition shadow-sm"
      >
        {loading ? "Streaming to IPFS Swarm..." : "Pin Document to IPFS"}
      </button>

      {message && <p className="text-xs text-center font-mono text-neutral-700">{message}</p>}
    </section>
  );
}`}
            </pre>
          </div>

          {/* STEP 6: File List Component */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 6</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">File List Component (src/components/FileList.tsx)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">React Component</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/components/FileList.tsx
import type { UploadedFile } from "../services/ipfsService";
import { getIPFSUrl } from "../services/ipfsService";

interface FileListProps {
  files: UploadedFile[];
  onRegisterOnChain: (file: UploadedFile) => void;
}

export default function FileList({ files, onRegisterOnChain }: FileListProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-bold text-neutral-900">Decentralized File Directory</h2>
      {files.length === 0 ? (
        <p className="text-xs text-neutral-500 italic">No files uploaded in current session.</p>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {files.map((file) => (
            <article key={file.cid} className="p-4 bg-white rounded-xl border border-neutral-200 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-sm text-neutral-900">{file.name}</h3>
                <span className="text-[11px] font-mono text-neutral-500">{(file.size / 1024).toFixed(1)} KB</span>
              </div>
              <div className="text-xs font-mono text-neutral-600 break-all bg-neutral-50 p-2 rounded">
                CID: {file.cid}
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href={getIPFSUrl(file.cid)}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition"
                >
                  Open via Gateway ↗
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(\`ipfs://\${file.cid}\`)}
                  className="px-3 py-1.5 text-xs font-semibold rounded border border-neutral-300 hover:bg-neutral-50 text-neutral-700 transition"
                >
                  Copy ipfs:// URI
                </button>
                <button
                  onClick={() => onRegisterOnChain(file)}
                  className="px-3 py-1.5 text-xs font-semibold rounded bg-amber-600 hover:bg-amber-700 text-white transition"
                >
                  {file.isRegistered ? "Registered On-Chain ✓" : "Anchor to Sepolia"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}`}
            </pre>
          </div>

          {/* STEP 7: Main App Assembly */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 7</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Main Application State (src/App.tsx)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">React TypeScript</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/App.tsx
import { useState } from "react";
import FileUploader from "./components/FileUploader";
import FileList from "./components/FileList";
import type { UploadedFile } from "./services/ipfsService";
import { registerCIDOnSepolia } from "./services/blockchainService";

export default function App() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [statusMsg, setStatusMsg] = useState("");

  function handleUploaded(file: UploadedFile) {
    setFiles((prev) => [file, ...prev.filter((f) => f.cid !== file.cid)]);
  }

  async function handleRegisterOnChain(file: UploadedFile) {
    try {
      setStatusMsg(\`Registering \${file.cid.slice(0, 12)}... on Sepolia testnet...\`);
      const txHash = await registerCIDOnSepolia(file.cid);
      setFiles((prev) =>
        prev.map((f) => (f.cid === file.cid ? { ...f, isRegistered: true, txHash } : f))
      );
      setStatusMsg(\`Registration confirmed! Tx: \${txHash}\`);
    } catch (err: any) {
      console.error(err);
      setStatusMsg("Blockchain registration failed: " + err.message);
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-6 sm:p-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">Decentralized File Sharing</h1>
        <p className="text-sm text-neutral-600">
          Peer-to-peer storage powered by IPFS and Ethereum Sepolia smart contract anchoring.
        </p>
      </header>

      {statusMsg && (
        <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono rounded-lg">
          {statusMsg}
        </div>
      )}

      <FileUploader onUploaded={handleUploaded} />
      <FileList files={files} onRegisterOnChain={handleRegisterOnChain} />
    </main>
  );
}`}
            </pre>
          </div>

          {/* STEP 8: Solidity Smart Contract Integration */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 8</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Viem Blockchain Service (src/services/blockchainService.ts)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">Viem + MetaMask</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/services/blockchainService.ts
import { createWalletClient, createPublicClient, custom, http, type Address } from "viem";
import { sepolia } from "viem/chains";

const REGISTRY_ADDRESS: Address = "0x71C8009d73d6b1d4400c920f54B812d45b59714E"; // Sepolia address

const REGISTRY_ABI = [
  {
    type: "function",
    name: "registerDocument",
    inputs: [{ name: "cid", type: "string" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "nonpayable"
  }
] as const;

export async function registerCIDOnSepolia(cid: string): Promise<string> {
  if (!window.ethereum) {
    throw new Error("MetaMask or Web3 wallet not detected");
  }

  const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom(window.ethereum)
  });

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http()
  });

  const [account] = await walletClient.requestAddresses();

  // Submit write transaction to the smart contract
  const hash = await walletClient.writeContract({
    address: REGISTRY_ADDRESS,
    abi: REGISTRY_ABI,
    functionName: "registerDocument",
    args: [cid],
    account
  });

  // Await on-chain inclusion receipt
  await publicClient.waitForTransactionReceipt({ hash });

  return hash;
}`}
            </pre>
          </div>

          {/* STEP 9: Testing & Validation Matrix */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 9</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Comprehensive Testing & Validation Matrix</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">11 Test Scenarios</span>
            </div>
            <p className="text-sm text-neutral-600">
              Students must systematically execute all 11 test cases and verify actual vs expected results:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                  <tr>
                    <th className="p-3 border-b border-neutral-200">#</th>
                    <th className="p-3 border-b border-neutral-200">Test Scenario</th>
                    <th className="p-3 border-b border-neutral-200">Expected Result</th>
                    <th className="p-3 border-b border-neutral-200">Verification Mechanism</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="p-3 font-bold">1</td>
                    <td className="p-3 font-semibold text-neutral-900">Upload standard PDF document</td>
                    <td className="p-3">Deterministic CID returned, file pinned to provider</td>
                    <td className="p-3 font-mono text-[11px]">Pinata dashboard + React status</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">2</td>
                    <td className="p-3 font-semibold text-neutral-900">Upload high-res PNG image</td>
                    <td className="p-3">Valid CID returned and image renders in browser preview</td>
                    <td className="p-3 font-mono text-[11px]">IPFS gateway HTTP 200 OK</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">3</td>
                    <td className="p-3 font-semibold text-neutral-900">Upload file exceeding limit (&gt;10MB)</td>
                    <td className="p-3">Multer rejects with HTTP 413 Payload Too Large</td>
                    <td className="p-3 font-mono text-[11px]">Express error handling response</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">4</td>
                    <td className="p-3 font-semibold text-neutral-900">Retrieve file via gateway</td>
                    <td className="p-3">File contents stream cleanly within 500ms</td>
                    <td className="p-3 font-mono text-[11px]">Dedicated gateway URL query</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">5</td>
                    <td className="p-3 font-semibold text-neutral-900">Copy ipfs:// URI link</td>
                    <td className="p-3">Standard URI copied to clipboard (<code className="font-mono">ipfs://bafy...</code>)</td>
                    <td className="p-3 font-mono text-[11px]">Clipboard API inspection</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">6</td>
                    <td className="p-3 font-semibold text-neutral-900">Modify 1 byte of file content</td>
                    <td className="p-3">Radically different CID generated (Avalanche effect)</td>
                    <td className="p-3 font-mono text-[11px]">Compare CID_A vs CID_B</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">7</td>
                    <td className="p-3 font-semibold text-neutral-900">Anchor CID to Sepolia testnet</td>
                    <td className="p-3">MetaMask prompts signature, tx submitted to network</td>
                    <td className="p-3 font-mono text-[11px]">Etherscan transaction link</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">8</td>
                    <td className="p-3 font-semibold text-neutral-900">Await transaction receipt</td>
                    <td className="p-3">State toggles to "Registered On-Chain ✓"</td>
                    <td className="p-3 font-mono text-[11px]">Viem waitForTransactionReceipt</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">9</td>
                    <td className="p-3 font-semibold text-neutral-900">Attempt to register empty CID ("")</td>
                    <td className="p-3">Contract transaction reverts: "CID cannot be empty"</td>
                    <td className="p-3 font-mono text-[11px]">EVM require() assertion failure</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">10</td>
                    <td className="p-3 font-semibold text-neutral-900">Browser refresh state test</td>
                    <td className="p-3">Uploaded file list clears unless persisted to DB/localStorage</td>
                    <td className="p-3 font-mono text-[11px]">React component unmount/remount</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">11</td>
                    <td className="p-3 font-semibold text-neutral-900">Gateway timeout simulation</td>
                    <td className="p-3">Frontend gracefully surfaces error and offers fallback gateway</td>
                    <td className="p-3 font-mono text-[11px]">Simulated HTTP 504 Gateway Timeout</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Deliverables Checklist */}
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-2">
              <span className="font-bold text-neutral-900 uppercase">Lab Deliverables (10 Required Submissions):</span>
              <ol className="list-decimal list-inside space-y-1 text-neutral-700">
                <li><code className="font-mono">IPFSRegistry.sol</code> Solidity smart contract source code.</li>
                <li>Vite + React + TypeScript frontend codebase.</li>
                <li>Node.js + Express + Multer backend proxy codebase.</li>
                <li>Verified deployed contract address on Sepolia testnet.</li>
                <li>Transaction hash link for a successful on-chain CID registration.</li>
                <li>Screenshot showing file uploaded, CID returned, and opened on IPFS gateway.</li>
                <li>Full 11-point testing report documenting passes and edge cases.</li>
                <li>System architecture diagram illustrating the off-chain/on-chain division.</li>
                <li>README.md with local setup, environment variables, and reproduction commands.</li>
                <li>Live deployed web URL on Cloudflare Pages or Vercel.</li>
              </ol>
            </div>
          </div>

          {/* ADVANCED ASSIGNMENTS */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Advanced Tracks</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Advanced Capstone Assignments (Tracks 1 to 4)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Assignment 1 */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-[11px] font-bold rounded">
                  Assignment 1
                </span>
                <h4 className="text-base font-bold text-neutral-900">Decentralized NFT Metadata Storage Engine</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Engineer an automated pipeline that ingests NFT artwork, computes the image CID, constructs standardized
                  ERC-721 JSON metadata, pins the metadata to IPFS, and mints an NFT passing the resulting metadata URI into
                  an OpenZeppelin ERC-721 contract.
                </p>
                <div className="text-[11px] text-neutral-500 font-mono">
                  Stack: Solidity ERC721URIStorage, Pinata SDK, React, Viem
                </div>
              </div>

              {/* Assignment 2 */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-[11px] font-bold rounded">
                  Assignment 2
                </span>
                <h4 className="text-base font-bold text-neutral-900">Client-Side AES-GCM Encrypted File Sharing</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Implement zero-knowledge encrypted sharing: files are encrypted client-side using AES-GCM 256-bit with fresh
                  12-byte IVs. The encrypted ciphertext is pinned to IPFS, while the symmetric key is encrypted using the recipient's
                  Ethereum public key (ECDH / secp256k1) and shared securely.
                </p>
                <div className="text-[11px] text-neutral-500 font-mono">
                  Stack: Web Crypto API, Metamask eth_getEncryptionPublicKey
                </div>
              </div>

              {/* Assignment 3 */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded">
                  Assignment 3
                </span>
                <h4 className="text-base font-bold text-neutral-900">Multi-Provider Storage Redundancy & Health Monitor</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Build a high-availability orchestrator that simultaneously pins CIDs across Pinata, Web3.Storage, and a local Kubo node.
                  Implement a background health probe that tests HTTP gateway availability every 5 minutes and triggers automated
                  cross-provider re-pinning if provider redundancy drops below 2 copies.
                </p>
                <div className="text-[11px] text-neutral-500 font-mono">
                  Stack: IPFS Pinning Service API, Cron, Node.js Worker Threads
                </div>
              </div>

              {/* Assignment 4 */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded">
                  Assignment 4
                </span>
                <h4 className="text-base font-bold text-neutral-900">Decentralized Document Registry with QR Verification</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Create a public university diploma verification portal: academic institutions sign certificate CIDs with their
                  institutional keys. The dApp generates a cryptographic QR code embedding the contract address and token ID.
                  Scanning the QR code routes to a verification page that checks cryptographic validity and reveals the original PDF.
                </p>
                <div className="text-[11px] text-neutral-500 font-mono">
                  Stack: EIP-712 Typed Data Signatures, qrcode.react, IPFS Gateways
                </div>
              </div>
            </div>
          </div>

          {/* MODULE ASSESSMENT & 100-MARK RUBRIC */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Grading Rubric</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Module Assessment & 100-Mark Academic Evaluation Rubric
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                  <tr>
                    <th className="p-3 border-b border-neutral-200">Evaluation Category</th>
                    <th className="p-3 border-b border-neutral-200">Grading Criteria & Demonstration</th>
                    <th className="p-3 border-b border-neutral-200 text-right">Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. IPFS Architecture Understanding</td>
                    <td className="p-3">Accurate technical differentiation of location vs content addressing, DAGs, DHT routing, and Bitswap.</td>
                    <td className="p-3 text-right font-bold font-mono">15</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. File Upload & Retrieval Engine</td>
                    <td className="p-3">Robust streaming of files to IPFS via Node.js backend proxy with credential isolation and gateway resolution.</td>
                    <td className="p-3 text-right font-bold font-mono">20</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. CID & Integrity Implementation</td>
                    <td className="p-3">CIDv1 multiformats compliance, cryptographic hash verification, and correct handling of avalanche effect.</td>
                    <td className="p-3 text-right font-bold font-mono">15</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. Solidity Registry Smart Contract</td>
                    <td className="p-3">Gas-optimized, secure Solidity contract anchoring CIDs, storing timestamps, and emitting indexing events.</td>
                    <td className="p-3 text-right font-bold font-mono">15</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. React + TypeScript Frontend</td>
                    <td className="p-3">Type-safe components, Viem wallet integration, real-time transaction tracking, and clean state handling.</td>
                    <td className="p-3 text-right font-bold font-mono">15</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. Security & Privacy Hardening</td>
                    <td className="p-3">Backend API key protection, Multer upload payload limits, and client-side AES-GCM encryption for private data.</td>
                    <td className="p-3 text-right font-bold font-mono">10</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">7. UI/UX & Responsive Usability</td>
                    <td className="p-3">Polished Tailwind CSS design, responsive layout, clear error notifications, and one-click clipboard copying.</td>
                    <td className="p-3 text-right font-bold font-mono">5</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">8. Documentation & Deployment</td>
                    <td className="p-3">Comprehensive README, verified test matrix, architectural diagrams, and live production deployment link.</td>
                    <td className="p-3 text-right font-bold font-mono">5</td>
                  </tr>
                  <tr className="bg-neutral-50 font-bold text-neutral-900">
                    <td className="p-3 text-sm" colSpan={2}>Total Academic Marks</td>
                    <td className="p-3 text-right text-sm font-mono text-amber-700">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
'''
