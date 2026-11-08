# projectx/generator_mod15/assemble.py
"""
Assembly script to construct projectx/src/Componets/BlockchainStorageIPFS.jsx
Imports modules:
- gen_data.py
- gen_interactive.py
- gen_theory.py
- gen_lab.py
- gen_assessment.py
- gen_tracker.py
"""

import os
import json
from gen_data import CHECKLIST_ITEMS, QUIZ_QUESTIONS, INTERVIEW_QUESTIONS
from gen_interactive import generate_interactive
from gen_theory import generate_theory
from gen_lab import generate_lab
from gen_assessment import generate_assessment
from gen_tracker import generate_tracker

TEMPLATE = r'''// projectx/src/Componets/BlockchainStorageIPFS.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

// Data Constants
const CHECKLIST_ITEMS = __DATA_CHECKLIST__;
const QUIZ_QUESTIONS = __DATA_QUIZ__;
const INTERVIEW_QUESTIONS = __DATA_INTERVIEWS__;

// Pure deterministic pseudo-hash generator for educational simulation
function pseudoHash(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

function generateSimulatedHex(input, length = 64) {
  let result = "";
  for (let i = 0; i < length / 8; i++) {
    const hashVal = pseudoHash(input, i * 37 + 13);
    result += (hashVal.toString(16) + "00000000").slice(0, 8);
  }
  return result.slice(0, length);
}

function hexToBase32(hexStr) {
  const b32Chars = "abcdefghijklmnopqrstuvwxyz234567";
  let out = "";
  for (let i = 0; i < hexStr.length - 2; i += 2) {
    const val = parseInt(hexStr.slice(i, i + 2), 16) || 0;
    out += b32Chars[val % 32];
  }
  return out;
}

export default function BlockchainStorageIPFS() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: CIDv1 Multiformats & Avalanche
  const [cidInputText, setCidInputText] = useState(
    "Bitcoin: A Peer-to-Peer Electronic Cash System by Satoshi Nakamoto"
  );
  const [cidCodec, setCidCodec] = useState("dag-pb");
  const [cidBase, setCidBase] = useState("base32");

  const calculatedCID = useMemo(() => {
    const rawHash = generateSimulatedHex(cidInputText, 64);
    const mutatedHash = generateSimulatedHex(cidInputText + ".", 64);

    let basePrefix = "b";
    let baseName = "Base32 Lowercase";
    if (cidBase === "base58btc") {
      basePrefix = "z";
      baseName = "Base58BTC";
    } else if (cidBase === "base16") {
      basePrefix = "f";
      baseName = "Hexadecimal Base16";
    }

    let codecHex = "0x70";
    if (cidCodec === "raw") codecHex = "0x55";
    if (cidCodec === "dag-cbor") codecHex = "0x71";

    const b32Part = hexToBase32(rawHash);
    const fullCid = `${basePrefix}afybei${b32Part.slice(0, 48)}`;
    const mutatedCid = `${basePrefix}afybei${hexToBase32(mutatedHash).slice(0, 48)}`;
    const legacyCidV0 = `Qm${hexToBase32(rawHash).slice(0, 44)}`;

    // Calculate simulated bit difference
    let diffBits = 0;
    for (let i = 0; i < Math.min(rawHash.length, mutatedHash.length); i++) {
      const b1 = parseInt(rawHash[i], 16) || 0;
      const b2 = parseInt(mutatedHash[i], 16) || 0;
      const xor = b1 ^ b2;
      diffBits += ((xor & 1) + ((xor >> 1) & 1) + ((xor >> 2) & 1) + ((xor >> 3) & 1));
    }
    const avalanchePercent = Math.min(65, Math.max(48, Math.round((diffBits / 256) * 100)));

    return {
      rawHash,
      basePrefix,
      baseName,
      codecHex,
      fullCid,
      mutatedCid,
      legacyCidV0,
      avalancheDiffBits: Math.round(256 * (avalanchePercent / 100)),
      avalanchePercent
    };
  }, [cidInputText, cidCodec, cidBase]);

  // Simulator 2 State: IPFS Node & Bitswap
  const [mockBlockstore, setMockBlockstore] = useState([
    {
      id: "blk-1",
      name: "whitepaper.pdf",
      cid: "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
      sizeKb: 256,
      type: "UnixFS File",
      pinned: true,
      pinType: "Recursive"
    },
    {
      id: "blk-2",
      name: "banner.png (Leaf Block 0)",
      cid: "bafybeid2xampleblock00000000000000000000000000000000000000",
      sizeKb: 180,
      type: "Raw Block",
      pinned: false,
      pinType: "Unpinned"
    },
    {
      id: "blk-3",
      name: "temp_audio_buffer.wav",
      cid: "bafybeiaudiobuffertemp9823471098234709812374091823740918",
      sizeKb: 512,
      type: "UnixFS Chunk",
      pinned: false,
      pinType: "Unpinned"
    }
  ]);
  const [selectedBlockId, setSelectedBlockId] = useState("blk-1");
  const [activeDhtLookup, setActiveDhtLookup] = useState({
    cid: "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
    peers: [
      "/ip4/198.51.100.12/tcp/4001/p2p/QmPeerAlphaX98",
      "/ip4/203.0.113.84/udp/4001/quic/p2p/QmPeerBetaK44",
      "/ip4/142.250.190.46/tcp/4001/p2p/QmPeerPinataDedicated"
    ]
  });
  const [bitswapLogs, setBitswapLogs] = useState([
    { time: "12:00:05", action: "BOOTSTRAP", msg: "Connected to 8 IPFS bootstrap peers." },
    { time: "12:01:22", action: "DHT QUERY", msg: "Resolved provider records for CID bafybeig..." },
    { time: "12:02:40", action: "BITSWAP", msg: "Downloaded block 1/4 from peer QmPeerAlphaX98." }
  ]);

  const handleAddMockBlock = useCallback(() => {
    const newId = `blk-${Date.now().toString().slice(-4)}`;
    const randHex = generateSimulatedHex(newId, 32);
    const newBlock = {
      id: newId,
      name: `ingested_document_${newId}.bin`,
      cid: `bafybei${hexToBase32(randHex).slice(0, 48)}`,
      sizeKb: 128,
      type: "UnixFS Block",
      pinned: false,
      pinType: "Unpinned"
    };
    setMockBlockstore((prev) => [newBlock, ...prev]);
    setSelectedBlockId(newId);
    setBitswapLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        action: "INGEST",
        msg: `Added block ${newBlock.cid.slice(0, 16)}... to local disk blockstore.`
      },
      ...prev
    ]);
  }, []);

  const handleTogglePinMockBlock = useCallback(() => {
    setMockBlockstore((prev) =>
      prev.map((b) => {
        if (b.id === selectedBlockId) {
          const nextPinned = !b.pinned;
          return {
            ...b,
            pinned: nextPinned,
            pinType: nextPinned ? "Recursive" : "Unpinned"
          };
        }
        return b;
      })
    );
    setBitswapLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        action: "PIN_MUTATION",
        msg: `Toggled pin state for target block ${selectedBlockId}.`
      },
      ...prev
    ]);
  }, [selectedBlockId]);

  const handleRunGarbageCollector = useCallback(() => {
    const purged = mockBlockstore.filter((b) => !b.pinned);
    setMockBlockstore((prev) => prev.filter((b) => b.pinned));
    setBitswapLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        action: "GC PURGE",
        msg: `ipfs repo gc: Deleted ${purged.length} unpinned block(s). Pinned blocks preserved.`
      },
      ...prev
    ]);
  }, [mockBlockstore]);

  const handleSimulateDHTLookup = useCallback(() => {
    const currentBlock = mockBlockstore.find((b) => b.id === selectedBlockId);
    const targetCid = currentBlock ? currentBlock.cid : "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi";
    setActiveDhtLookup({
      cid: targetCid,
      peers: [
        `/ip4/192.0.2.${Math.floor(Math.random() * 200 + 10)}/tcp/4001/p2p/QmPeerNode${Math.floor(Math.random() * 900 + 100)}`,
        `/ip4/198.51.100.12/tcp/4001/p2p/QmPeerPinataGlobal`,
        `/dns4/ipfs-gateway.provider.org/tcp/443/wss/p2p/QmPeerCloudflareEdge`
      ]
    });
    setBitswapLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        action: "DHT QUERY",
        msg: `Queried Amino Kademlia DHT for provider records of ${targetCid.slice(0, 16)}...`
      },
      ...prev
    ]);
  }, [mockBlockstore, selectedBlockId]);

  // Simulator 3 State: ERC-721 Metadata Generator
  const [nftForm, setNftForm] = useState({
    name: "PrepSpaces Blockchain Certificate #1",
    description: "Accredited completion certificate for Advanced Blockchain Engineering.",
    imageCid: "bafybeiexampleimagecid2026",
    trait1: "Course",
    value1: "Blockchain Development",
    trait2: "Level",
    value2: "Advanced"
  });

  // Simulator 4 State: AES-GCM 256-bit Encryption
  const [aesPlaintext, setAesPlaintext] = useState(
    "Confidential Financial Ledger: Transaction #98234 - Amount: $500,000 USD - Beneficiary: Alice"
  );
  const [aesKeyHex, setAesKeyHex] = useState(
    "4f8a3d129b0e27c54178dae9213456789abcdef0123456789abcdef012345678"
  );
  const [aesIvHex, setAesIvHex] = useState("a1b2c3d4e5f60718293a4b5c");
  const [aesCiphertextBase64, setAesCiphertextBase64] = useState(
    "yU7+vQ93NmK1aZb8mKpL902vXwqB1N7xLPo0923847YTRmK28s=="
  );
  const [decryptionKeyInput, setDecryptionKeyInput] = useState("");
  const [decryptionStatus, setDecryptionStatus] = useState(null);

  const handleGenerateNewKeyAndIv = useCallback(() => {
    const newKey = generateSimulatedHex("KEY_" + Date.now().toString(), 64);
    const newIv = generateSimulatedHex("IV_" + Date.now().toString(), 24);
    setAesKeyHex(newKey);
    setAesIvHex(newIv);
  }, []);

  const handleEncryptAes = useCallback(() => {
    const cipherHex = generateSimulatedHex(aesPlaintext + aesKeyHex + aesIvHex, 64);
    setAesCiphertextBase64(btoa(cipherHex).slice(0, 48) + "==");
    setDecryptionStatus(null);
  }, [aesPlaintext, aesKeyHex, aesIvHex]);

  const handleDecryptAes = useCallback(() => {
    if (!decryptionKeyInput.trim()) {
      setDecryptionStatus({ success: false, msg: "Please enter a 256-bit decryption key." });
      return;
    }
    if (decryptionKeyInput.trim().toLowerCase() === aesKeyHex.toLowerCase()) {
      setDecryptionStatus({
        success: true,
        msg: `Decryption authenticated! Plaintext recovered: "${aesPlaintext}"`
      });
    } else {
      setDecryptionStatus({
        success: false,
        msg: "Decryption failed! AES-GCM authentication tag mismatch (wrong key or corrupted ciphertext)."
      });
    }
  }, [decryptionKeyInput, aesKeyHex, aesPlaintext]);

  // Assessment Quiz State
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [openInterviewId, setOpenInterviewId] = useState(null);

  const handleSelectQuizAnswer = useCallback((qId, optIdx) => {
    setSelectedQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  }, []);

  const handleResetQuiz = useCallback(() => {
    setSelectedQuizAnswers({});
  }, []);

  const quizScore = useMemo(() => {
    return Object.entries(selectedQuizAnswers).reduce((acc, [qId, ansIdx]) => {
      const question = QUIZ_QUESTIONS.find((q) => q.id === qId);
      return question && question.ans === ansIdx ? acc + 1 : acc;
    }, 0);
  }, [selectedQuizAnswers]);

  // Mastery Checklist State (persisted in localStorage)
  const [checklistProgress, setChecklistProgress] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m15_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m15_progress",
        JSON.stringify(checklistProgress)
      );
    } catch {
      // ignore
    }
  }, [checklistProgress]);

  const handleToggleChecklist = useCallback((idx) => {
    setChecklistProgress((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  }, []);

  const handleMarkAllChecklist = useCallback(() => {
    const all = {};
    CHECKLIST_ITEMS.forEach((_, idx) => {
      all[idx] = true;
    });
    setChecklistProgress(all);
  }, []);

  const handleResetChecklist = useCallback(() => {
    setChecklistProgress({});
  }, []);

  const completedCount = useMemo(() => {
    return Object.values(checklistProgress).filter(Boolean).length;
  }, [checklistProgress]);

  const progressPercentage = useMemo(() => {
    return Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);
  }, [completedCount]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] pb-28 sm:pb-36 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Banner Navigation */}
      <div className="bg-[#18181b] text-white border-b border-neutral-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/learning/blockchain/dapp-development"
              className="text-xs text-neutral-400 hover:text-white transition flex items-center gap-1"
            >
              ← Module 14
            </Link>
            <span className="text-neutral-600">|</span>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Module 15: IPFS & Decentralized Storage
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400">Mastery:</span>
            <div className="w-20 bg-neutral-800 rounded-full h-2">
              <div
                className="bg-amber-500 h-2 rounded-full transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs font-mono text-amber-400">{progressPercentage}%</span>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wider uppercase">
            <span>PrepSpaces Web3 Curriculum</span>
            <span>•</span>
            <span>Distributed Systems Track</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            IPFS & Decentralized Storage Architecture
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Master content addressing, CIDv1 multiformats, Kademlia DHT routing, Bitswap block exchange,
            garbage collection vs pinning, Arweave Permaweb, Filecoin deals, and Solidity smart contract CID registries.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#e7e3da] pb-3 text-xs sm:text-sm">
          {[
            { id: "theory", label: "1. Theory & Architecture" },
            { id: "interactive", label: "2. Live Simulators" },
            { id: "lab", label: "3. Practical Lab & Code" },
            { id: "assessment", label: "4. Knowledge Check & Interviews" },
            { id: "tracker", label: "5. Mastery Tracker & Resources" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl font-semibold transition ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:text-neutral-900 border border-[#e7e3da]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
__THEORY__
__INTERACTIVE__
__LAB__
__ASSESSMENT__
__TRACKER__

        {/* Bottom Pagination & Module Navigation */}
        <div className="pt-8 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/learning/blockchain/dapp-development"
            className="p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-start"
          >
            <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
              ← Previous Module
            </span>
            <span className="text-sm font-bold text-neutral-900 mt-1">
              Module 14: Full-Stack DApp Development
            </span>
          </Link>

          <Link
            to="/learning/blockchain/defi-protocols"
            className="p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-end text-right"
          >
            <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
              Next Module →
            </span>
            <span className="text-sm font-bold text-neutral-900 mt-1">
              Module 16: Decentralized Finance (DeFi) Protocols
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
'''

def assemble():
    output_path = os.path.join(
        os.path.dirname(os.path.dirname(__file__)),
        "src",
        "Componets",
        "BlockchainStorageIPFS.jsx"
    )

    data_json_checklist = json.dumps(CHECKLIST_ITEMS, indent=2)
    data_json_quiz = json.dumps(QUIZ_QUESTIONS, indent=2)
    data_json_interviews = json.dumps(INTERVIEW_QUESTIONS, indent=2)

    theory_code = generate_theory()
    interactive_code = generate_interactive()
    lab_code = generate_lab()
    assessment_code = generate_assessment()
    tracker_code = generate_tracker()

    content = TEMPLATE
    content = content.replace("__DATA_CHECKLIST__", data_json_checklist)
    content = content.replace("__DATA_QUIZ__", data_json_quiz)
    content = content.replace("__DATA_INTERVIEWS__", data_json_interviews)
    content = content.replace("__THEORY__", theory_code)
    content = content.replace("__INTERACTIVE__", interactive_code)
    content = content.replace("__LAB__", lab_code)
    content = content.replace("__ASSESSMENT__", assessment_code)
    content = content.replace("__TRACKER__", tracker_code)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Successfully assembled: {output_path} ({len(content)} chars)")

if __name__ == "__main__":
    assemble()
