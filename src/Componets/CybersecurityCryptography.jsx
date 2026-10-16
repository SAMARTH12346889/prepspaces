import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Lock,
  Unlock,
  Server,
  Terminal,
  FileText,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Filter,
  Eye,
  Zap,
  Layers,
  Cpu,
  Database,
  Network,
  Activity,
  Search,
  BookOpen,
  Sliders,
  Play,
  Check,
  X,
  Info,
  Target,
  GitBranch,
  ArrowUpRight,
  Copy,
  Globe,
  Radio,
  Clock,
  AlertOctagon,
  Laptop,
  Key,
  HardDrive,
  Award,
  FileCheck,
  Sparkles,
  Fingerprint,
  FileCode,
  SlidersHorizontal,
  RotateCcw
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function CybersecurityCryptography() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(12);

  // Active workspace tab: 'theory' | 'labs' | 'case-study' | 'quiz' | 'capstone'
  const [activeTab, setActiveTab] = useState("theory");

  // Lab navigation state
  const [activeLabTab, setActiveLabTab] = useState("lab1-hash");

  // Lab 1: Hashing state
  const [hashInput, setHashInput] = useState("PrepSpaces cryptography lab release v1.0.0");
  const [hashOutput, setHashOutput] = useState("");
  const [compareHashInput, setCompareHashInput] = useState("PrepSpaces cryptography lab release v1.0.1");
  const [compareHashOutput, setCompareHashOutput] = useState("");
  const [hashCopied, setHashCopied] = useState(false);

  // Lab 2: AEAD Encryption state
  const [aeadPlaintext, setAeadPlaintext] = useState("Confidential Learner Medical Record: Patient ID 4082, Condition: Asthmatic");
  const [aeadKey] = useState("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
  const [aeadNonce, setAeadNonce] = useState("1a2b3c4d5e6f7a8b9c0d1e2f");
  const [aeadAAD, setAeadAAD] = useState("tenant_id=us-west-org42;schema_ver=2.1");
  const [aeadCiphertext, setAeadCiphertext] = useState("8f73b19c40ea9014b22c7104f793e2bb8450d032824905cf73a5a7dc26e0e6415f33e8a4a58914b19e91");
  const [aeadTag, setAeadTag] = useState("d4a193fe78b945c2a104bc89f412e873");
  const [aeadTamperMode, setAeadTamperMode] = useState("none"); // 'none' | 'ciphertext' | 'aad' | 'nonce_reuse'
  const [aeadDecryptionResult, setAeadDecryptionResult] = useState(null);

  // Lab 3: Digital Signatures state
  const [sigDoc, setSigDoc] = useState("Authorization Grant: Deploy Container v2.4 to Production Cluster. Approved by: SecOps Lead.");
  const [sigTampered, setSigTampered] = useState(false);
  const [sigStatus, setSigStatus] = useState("valid");

  // Lab 4: Certificate Explorer state
  const [certScenario, setCertScenario] = useState("valid"); // 'valid' | 'expired' | 'mismatch' | 'untrusted_ca' | 'revoked'

  // Lab 5: TLS Handshake state
  const [tlsStep, setTlsStep] = useState(1);
  const [tlsConfigCheck, setTlsConfigCheck] = useState("modern"); // 'modern' | 'legacy_tls10' | 'self_signed'

  // Lab 6: Key Management Incident state
  const [incidentStep, setIncidentStep] = useState(1);
  const [selectedKeyAsset, setSelectedKeyAsset] = useState("KEY-01");

  // Checklist state
  const [checklist, setChecklist] = useState({
    objThreatModel: false,
    hashIntegrity: false,
    aeadTested: false,
    sigVerified: false,
    certInspected: false,
    tlsEvaluated: false,
    keyLifecycle: false,
    noKeysSubmitted: false,
  });

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Simple pure JS SHA-256 for live responsive hashing in browser
  const computeSHA256 = async (str) => {
    try {
      if (window.crypto && window.crypto.subtle) {
        const msgUint8 = new TextEncoder().encode(str);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
      }
    } catch {
      // Fallback pseudo-hash if crypto.subtle is restricted
    }
    // Deterministic fallback hash generator
    let hash = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 0x01000193);
    }
    const hex = (hash >>> 0).toString(16).padStart(8, "0");
    return (hex + hex + hex + hex + hex + hex + hex + hex).slice(0, 64);
  };

  useEffect(() => {
    computeSHA256(hashInput).then((res) => setHashOutput(res));
  }, [hashInput]);

  useEffect(() => {
    computeSHA256(compareHashInput).then((res) => setCompareHashOutput(res));
  }, [compareHashInput]);

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  const handleDecryptionTest = () => {
    if (aeadTamperMode === "none") {
      setAeadDecryptionResult({
        success: true,
        message: "AEAD Verification Successful! Authentication tag matched. Plaintext decrypted perfectly.",
        plaintext: aeadPlaintext,
      });
    } else if (aeadTamperMode === "ciphertext") {
      setAeadDecryptionResult({
        success: false,
        message: "CRYPTOGRAPHIC FAILURE: Tag verification failed! A single bit in the ciphertext was flipped. Decryption halted immediately to prevent chosen-ciphertext forgery.",
        plaintext: null,
      });
    } else if (aeadTamperMode === "aad") {
      setAeadDecryptionResult({
        success: false,
        message: "INTEGRITY FAILURE: Associated Data mismatch! Expected tenant_id=us-west-org42, received modified metadata. The data was rejected.",
        plaintext: null,
      });
    } else if (aeadTamperMode === "nonce_reuse") {
      setAeadDecryptionResult({
        success: false,
        message: "CATASTROPHIC PROTOCOL VIOLATION: Nonce 1a2b3c4d5e6f7a8b9c0d1e2f was already used with this AES key. In AES-GCM, nonce reuse leaks the authentication hash key (GHASH) and destroys confidentiality!",
        plaintext: null,
      });
    }
  };

  const handleQuizSelect = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const quizQuestions = [
    {
      id: "q1",
      question: "What is the primary purpose of symmetric encryption?",
      options: [
        "Assign identities to public keys",
        "Protect data using a shared secret key",
        "Create a digital certificate automatically",
        "Verify passwords without stored credential information"
      ],
      correctAnswer: 1,
      explanation: "Symmetric encryption uses a single shared secret key (such as in AES-256) known to both communicating parties to encrypt and decrypt bulk data efficiently."
    },
    {
      id: "q2",
      question: "Why is SHA-256 alone unsuitable as a password-storage mechanism?",
      options: [
        "Because SHA-256 is an encryption algorithm",
        "Because SHA-256 cannot produce a fixed-length digest",
        "Because it is fast and not designed to make password guessing expensive",
        "Because all hash algorithms require private certificates"
      ],
      correctAnswer: 2,
      explanation: "General-purpose cryptographic hash functions like SHA-256 are engineered for speed (gigabytes per second), enabling attackers to compute billions of guesses per second on GPUs. Passwords require slow, memory-hard adaptive hashing algorithms (Argon2id, bcrypt, PBKDF2) with unique salts."
    },
    {
      id: "q3",
      question: "What does a digital signature primarily help verify?",
      options: [
        "The signed data's integrity and validity under the corresponding verification key",
        "That the signed data is always truthful",
        "That the signed data is confidential",
        "That the private signing key can safely be published"
      ],
      correctAnswer: 0,
      explanation: "A digital signature uses asymmetric cryptography (private signing key, public verification key) to verify that data has not been altered since signing and was generated by someone possessing the corresponding private key."
    },
    {
      id: "q4",
      question: "What is the role of a certificate authority in a typical public PKI?",
      options: [
        "Store every user's passwords for every website",
        "Issue certificates according to defined validation and issuance procedures",
        "Encrypt all web content directly",
        "Guarantee that every website's business is legitimate"
      ],
      correctAnswer: 1,
      explanation: "A Certificate Authority (CA) validates domain ownership or entity identity under strict public policy (CAB Forum) and signs digital certificates binding a public key to a Subject Alternative Name (SAN)."
    },
    {
      id: "q5",
      question: "What does TLS primarily help protect?",
      options: [
        "The truthfulness of every web page",
        "All data on a server even after the server is compromised",
        "Communication confidentiality, integrity, and supported peer authentication",
        "The prevention of every application vulnerability"
      ],
      correctAnswer: 2,
      explanation: "Transport Layer Security (TLS 1.3 / RFC 9846) protects data in transit by providing channel confidentiality (symmetric AEAD), data integrity, and server authentication via certificate chains."
    },
    {
      id: "q6",
      question: "Why is key management essential?",
      options: [
        "Because cryptographic security depends on protecting and managing keys throughout their lifecycle",
        "Because keys never need rotation or revocation",
        "Because public certificates must always remain secret",
        "Because strong algorithms eliminate the need to secure private keys"
      ],
      correctAnswer: 0,
      explanation: "Kerckhoffs's principle dictates that a system's security rests entirely on the secrecy and governance of its cryptographic keys. If keys are exposed, leaked, or unrotated, the strongest algorithm provides zero protection."
    }
  ];

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] relative overflow-hidden selection:bg-[#ea580c] selection:text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* Module Global Navigation Bar */}
        <ModuleNav track="cybersecurity" currentModuleId="cryptography" />

        {/* Hero Banner Card */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
              <Shield size={12} className="text-[#ea580c]" />
              PrepSpaces Cybersecurity Masterclass
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              Module 12 of 24
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              Academic Lineage · NIST FIPS 197 / 180-4 / 186-5 & IETF RFC 5280 / 9846
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono font-bold text-emerald-700">
              Intermediate · 12–16 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Cryptography, Encryption, Hashing, PKI, TLS & Digital Certificates
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-600 max-w-4xl leading-relaxed">
            Master the mathematical and engineering foundations of digital trust. Understand symmetric and asymmetric encryption, cryptographic hashing, authenticated encryption (AEAD), digital signatures, public key infrastructure (PKI), TLS 1.3 protocol mechanics, secure key management, and post-quantum cryptography migration.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200/80">
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Duration</span>
              <span className="text-sm font-bold text-stone-900">12–16 Hours</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Track</span>
              <span className="text-sm font-bold text-stone-900">Cryptographic Defense</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Standards</span>
              <span className="text-sm font-bold text-stone-900">NIST, IETF & OWASP</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Practical Labs</span>
              <span className="text-sm font-bold text-stone-900">6 Interactive Sandboxes</span>
            </div>
          </div>
        </header>

        {/* Workspace Mode Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {[
            { id: "theory", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "labs", label: "Practical Labs Suite (1–6)", icon: Terminal },
            { id: "case-study", label: "Applied Case Study (LearnSphere)", icon: FileText },
            { id: "quiz", label: "Knowledge Assessment", icon: Award },
            { id: "capstone", label: "Capstone & Rubric", icon: FileCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-stone-900/10"
                    : "bg-white text-stone-700 hover:bg-stone-100/80 border border-stone-200/70"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#f97316]" : "text-stone-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: CURRICULUM & LESSONS (Unabridged Theory)                           */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick jump pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider font-bold">
                Jump To:
              </span>
              {[
                { id: "lesson-1", label: "1. Foundations & Objectives" },
                { id: "lesson-2", label: "2. Symmetric, Asymmetric & Hybrid" },
                { id: "lesson-3", label: "3. Hashing, MACs & Passwords" },
                { id: "lesson-4", label: "4. Digital Signatures & Key Mgmt" },
                { id: "lesson-5", label: "5. PKI & Digital Certificates" },
                { id: "lesson-6", label: "6. TLS, HTTPS & Secure Comm" },
                { id: "lesson-7", label: "7. Engineering & Post-Quantum" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-xl border border-stone-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-stone-700 hover:border-orange-300 hover:text-[#f97316] whitespace-nowrap transition cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* LESSON 1 */}
            <section id="lesson-1" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 1
                </span>
                <span className="text-xs font-mono text-stone-400">Core Foundations</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Cryptographic Foundations and Security Objectives
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Cryptography is the science and engineering of protecting information and communications using mathematical techniques. It forms the foundational bedrock of modern digital security—enabling secure web browsing, online banking, identity assertion, encrypted storage, and authenticated communications across the globe.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/80">
                    <h3 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <Lock className="w-4 h-4 text-orange-600" />
                      1. Confidentiality
                    </h3>
                    <p className="text-xs text-stone-600">
                      Protection of information from unauthorized disclosure. Even if an adversary intercepts or captures the raw bytes of a file or backup drive, they cannot interpret the plaintext without the cryptographic key.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80">
                    <h3 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      2. Integrity
                    </h3>
                    <p className="text-xs text-stone-600">
                      Detection or prevention of unauthorized modification. Ensures that data cannot be altered, substituted, or corrupted in transit or storage without mathematically failing verification checks.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                    <h3 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <Fingerprint className="w-4 h-4 text-emerald-600" />
                      3. Authenticity
                    </h3>
                    <p className="text-xs text-stone-600">
                      Verifiable assurance that a message, key, or connection originated from the claimed source or identity under a defined trust anchor (such as a verified TLS certificate or signed commit).
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80">
                    <h3 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-purple-600" />
                      4. Accountability & Non-Repudiation
                    </h3>
                    <p className="text-xs text-stone-600">
                      Cryptographic evidence linking specific actions to a key holder. When combined with strict private key protection and audit logs, a sender cannot plausibly deny having authorized a signed transaction.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs my-6">
                  <div className="text-orange-400 font-bold mb-2">KERCKHOFFS’S PRINCIPLE (1883) & SHANNON'S MAXIM:</div>
                  <p className="text-stone-300 leading-relaxed">
                    "A cryptosystem should be secure even if everything about the system, except the key, is public knowledge."
                  </p>
                  <p className="mt-2 text-stone-400">
                    The security of an organization must NEVER rely on "security through obscurity" (inventing a secret custom cipher). Attackers will reverse-engineer binaries and inspect code. True cryptographic resilience relies on open, peer-reviewed mathematics and stringent key governance.
                  </p>
                </div>
              </div>
            </section>

            {/* LESSON 2 */}
            <section id="lesson-2" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 2
                </span>
                <span className="text-xs font-mono text-stone-400">Ciphers & Algorithms</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Symmetric Encryption, Asymmetric Cryptography, and Hybrid Encryption
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Modern systems rely on two distinct cryptographic paradigms that complement each other: symmetric block ciphers for high-speed bulk data encryption, and asymmetric public-key systems for key exchange and identity authentication.
                </p>

                <div className="overflow-x-auto my-4">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-500 font-mono">
                        <th className="p-2">Property</th>
                        <th className="p-2">Symmetric Encryption (e.g., AES-256-GCM)</th>
                        <th className="p-2">Asymmetric Cryptography (e.g., RSA, ECDSA, Ed25519)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr>
                        <td className="p-2 font-bold text-stone-900">Key Model</td>
                        <td className="p-2">Single shared secret key for encryption & decryption</td>
                        <td className="p-2">Mathematically linked key pair (Public key + Private key)</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-stone-900">Performance</td>
                        <td className="p-2">Extremely fast (Hardware accelerated via AES-NI, Gbps speeds)</td>
                        <td className="p-2">Computationally intensive (100x to 1000x slower than symmetric)</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-stone-900">Primary Role</td>
                        <td className="p-2">Bulk data encryption (databases, disk, TLS application payloads)</td>
                        <td className="p-2">Digital signatures, certificate chains, and key exchange (ECDHE)</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-stone-900">Key Distribution</td>
                        <td className="p-2">Hard challenge: How to securely share the secret initially?</td>
                        <td className="p-2">Public keys freely distributed; Private key strictly held</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-orange-600" />
                    Why Authenticated Encryption (AEAD) is Mandatory:
                  </h4>
                  <p className="text-xs text-stone-600 mb-2">
                    Traditional unauthenticated modes like CBC (Cipher Block Chaining) or obsolete ECB (Electronic Codebook) are vulnerable to bit-flipping attacks and padding oracle attacks (e.g., POODLE).
                  </p>
                  <p className="text-xs text-stone-600">
                    Modern cryptographic standards mandate <strong>AEAD (Authenticated Encryption with Associated Data)</strong>, such as <strong>AES-GCM</strong> or <strong>ChaCha20-Poly1305</strong>. AEAD simultaneously computes ciphertext and a 128-bit authentication tag over both the ciphertext and unencrypted metadata (Associated Data). If even 1 bit is modified, decryption immediately halts.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    The Golden Rule of AEAD: NEVER REUSE A NONCE
                  </div>
                  <p>
                    In AES-GCM, reusing the same 96-bit Nonce (Initialization Vector) with the same secret key allows an eavesdropper to XOR ciphertexts together, eliminating the keystream and completely leaking the GHASH authentication key!
                  </p>
                </div>
              </div>
            </section>

            {/* LESSON 3 */}
            <section id="lesson-3" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 3
                </span>
                <span className="text-xs font-mono text-stone-400">Integrity & Passwords</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Hashing, Message Authentication Codes (MACs), and Password Storage
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  A cryptographic hash function takes an arbitrary-length byte stream and produces a fixed-size digest (e.g., SHA-256 produces exactly 256 bits / 32 bytes). Hashing is mathematically strictly one-way—it cannot be reversed or decrypted.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 my-4">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs font-bold text-orange-600 mb-1">Preimage Resistance</div>
                    <div className="text-xs text-stone-600">Given hash digest <code className="bg-stone-200 px-1 py-0.5 rounded">h</code>, it is computationally impossible to find any input <code className="bg-stone-200 px-1 py-0.5 rounded">m</code> such that <code className="bg-stone-200 px-1 py-0.5 rounded">H(m) = h</code>.</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs font-bold text-orange-600 mb-1">Second Preimage Resistance</div>
                    <div className="text-xs text-stone-600">Given a specific input <code className="bg-stone-200 px-1 py-0.5 rounded">m1</code>, it is impossible to find a different input <code className="bg-stone-200 px-1 py-0.5 rounded">m2</code> such that <code className="bg-stone-200 px-1 py-0.5 rounded">H(m1) = H(m2)</code>.</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs font-bold text-orange-600 mb-1">Collision Resistance</div>
                    <div className="text-xs text-stone-600">It is computationally infeasible to find ANY two arbitrary distinct inputs <code className="bg-stone-200 px-1 py-0.5 rounded">m1 ≠ m2</code> that produce the same digest.</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-red-200 bg-red-50/70 p-4 text-xs text-red-950">
                  <div className="font-bold flex items-center gap-1.5 mb-1">
                    <AlertOctagon className="w-4 h-4 text-red-600" />
                    CRITICAL WARNING: NEVER STORE PASSWORDS WITH SHA-256
                  </div>
                  <p>
                    SHA-256 was designed for speed (hashing gigabytes per second). A modern GPU cluster can test 100+ billion SHA-256 hashes per second, cracking plain or salted SHA-256 in seconds.
                  </p>
                  <p className="mt-1 font-semibold">
                    Always use slow, memory-hard adaptive password hashing algorithms:
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-0.5">
                    <li><strong>Argon2id (Winner of Password Hashing Competition)</strong>: Resistant to GPU and ASIC attacks via configurable memory, iterations, and parallelism.</li>
                    <li><strong>bcrypt / scrypt</strong>: Industry-standard adaptive key-stretching functions with unique per-user salts.</li>
                    <li><strong>PBKDF2</strong>: Approved by NIST SP 800-132 for legacy FIPS compliance environments with 600,000+ iterations.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* LESSON 4 */}
            <section id="lesson-4" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 4
                </span>
                <span className="text-xs font-mono text-stone-400">Signatures & Keys</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Digital Signatures and Cryptographic Key Management
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  A digital signature provides origin authentication and integrity protection. It is generated by hashing the input message and encrypting that digest with the sender's private signing key ($SK$). Anyone in possession of the sender's public verification key ($PK$) can decrypt and verify that the digest matches.
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                  <div className="font-bold text-stone-900 mb-2">NIST SP 800-57 Key Lifecycle Phases:</div>
                  <div className="grid sm:grid-cols-3 gap-2">
                    <div className="p-2 bg-white rounded-xl border border-stone-200">
                      <strong>1. Generation:</strong> Using OS CSPRNG (<code className="text-orange-600">/dev/urandom</code> or <code className="text-orange-600">BCryptGenRandom</code>).
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-stone-200">
                      <strong>2. Storage & Use:</strong> In Hardware Security Modules (HSM) or cloud KMS with strict RBAC.
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-stone-200">
                      <strong>3. Rotation:</strong> Scheduled cryptographic replacement based on cryptoperiod policies.
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-stone-200">
                      <strong>4. Revocation:</strong> Immediate invalidation if compromise is suspected via CRL or OCSP.
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-stone-200">
                      <strong>5. Destruction:</strong> Cryptographic zeroization (DOD 5220.22-M) ensuring no remnant keys remain.
                    </div>
                    <div className="p-2 bg-white rounded-xl border border-stone-200">
                      <strong>6. Cryptographic Agility:</strong> Ability to switch algorithms without code refactoring.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* LESSON 5 */}
            <section id="lesson-5" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 5
                </span>
                <span className="text-xs font-mono text-stone-400">Trust Anchors</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Public Key Infrastructure (PKI) and Digital Certificates
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  How do you know that a public key belonging to <code className="bg-stone-100 px-1 py-0.5 rounded text-orange-600">api.prepspaces.com</code> actually belongs to PrepSpaces and not an active Man-in-the-Middle adversary? Public Key Infrastructure (PKI) solves this through a hierarchical chain of trust governed by X.509 certificates (RFC 5280).
                </p>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                  <div className="text-emerald-400 font-bold mb-2">THE 3-TIER PKI TRUST CHAIN:</div>
                  <pre className="overflow-x-auto leading-relaxed">
{`[ ROOT CA ] (Trust Anchor)
  │  • Self-signed, air-gapped offline master key
  │  • Pre-installed into OS & browser trust stores (Windows, macOS, Mozilla NSS)
  ▼
[ INTERMEDIATE CA ] (Issuing Authority)
  │  • Signed by Root CA
  │  • Protects Root CA from operational exposure; handles day-to-day issuance
  ▼
[ LEAF / SERVER CERTIFICATE ] (api.prepspaces.com)
     • Signed by Intermediate CA
     • Binds public key to Subject Alternative Names (SAN)
     • Short validity (e.g. 90 days via ACME / Let's Encrypt)`}
                  </pre>
                </div>
              </div>
            </section>

            {/* LESSON 6 */}
            <section id="lesson-6" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 6
                </span>
                <span className="text-xs font-mono text-stone-400">Transport Security</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                TLS 1.3, HTTPS, and Secure Network Communication
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Transport Layer Security (TLS) encrypts web traffic over the Internet. The latest standard, <strong>TLS 1.3 (RFC 9846)</strong>, radically redesigned the protocol to eliminate obsolete, insecure cipher suites (RC4, DES, 3DES, CBC mode) and static RSA key exchange (which lacked Perfect Forward Secrecy).
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <h4 className="font-bold text-stone-900 text-sm">Key Features of Modern TLS 1.3:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-stone-700">
                    <li><strong>1-RTT Handshake:</strong> Establishes encryption in a single round-trip, halving latency compared to TLS 1.2.</li>
                    <li><strong>Mandatory Perfect Forward Secrecy (PFS):</strong> Uses Ephemeral Diffie-Hellman (ECDHE / X25519). If the server private key is leaked in the future, past recorded sessions CANNOT be decrypted.</li>
                    <li><strong>AEAD Only:</strong> Restricts all traffic encryption to authenticated ciphers (<code className="text-orange-600">TLS_AES_256_GCM_SHA384</code> and <code className="text-orange-600">TLS_CHACHA20_POLY1305_SHA256</code>).</li>
                    <li><strong>Encrypted Handshake:</strong> Server certificates and extensions are encrypted on the wire, preventing passive eavesdroppers from seeing which SNI (Server Name Indication) is being accessed.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* LESSON 7 */}
            <section id="lesson-7" className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Lesson 7
                </span>
                <span className="text-xs font-mono text-stone-400">Future Resilience</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Cryptographic Failures and Post-Quantum Readiness (PQC)
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed">
                <p>
                  Sufficiently advanced quantum computers executing Shor's Algorithm will be capable of breaking public-key cryptosystems based on integer factorization (RSA) and discrete logarithms (ECDSA, Diffie-Hellman). In August 2024, NIST officially standardized post-quantum cryptography to prepare global defense infrastructure.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 my-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs font-bold text-purple-600 mb-1">FIPS 203: ML-KEM</div>
                    <div className="text-xs font-semibold text-stone-900">Module-Lattice Key Encapsulation</div>
                    <p className="text-xs text-stone-600 mt-1">
                      Derived from CRYSTALS-Kyber. Replaces classical ECDH key exchange for deriving shared symmetric secrets across TLS and VPNs.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs font-bold text-purple-600 mb-1">FIPS 204: ML-DSA</div>
                    <div className="text-xs font-semibold text-stone-900">Module-Lattice Digital Signatures</div>
                    <p className="text-xs text-stone-600 mt-1">
                      Derived from CRYSTALS-Dilithium. Primary post-quantum digital signature standard for certificates, software signing, and authentication.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <div className="font-mono text-xs font-bold text-purple-600 mb-1">FIPS 205: SLH-DSA</div>
                    <div className="text-xs font-semibold text-stone-900">Stateless Hash-Based Signatures</div>
                    <p className="text-xs text-stone-600 mt-1">
                      Derived from SPHINCS+. Built entirely on cryptographic hash functions as a resilient mathematical backup if lattice cryptography encounters theoretical attacks.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-100/70 p-4 text-xs text-stone-700 leading-relaxed">
                  <strong>The "Harvest Now, Decrypt Later" (HNDL) Threat:</strong> Adversaries are currently capturing encrypted corporate and governmental communications over the Internet and storing them. Once cryptographically relevant quantum computers become operational, they will decrypt this stored historical data. Organizations must adopt hybrid post-quantum key exchange (e.g., X25519 + ML-KEM-768) today for long-lived sensitive data.
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: PRACTICAL LABS SUITE (Interactive Sandboxes 1–6)                   */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            {/* Lab Sub-tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
              {[
                { id: "lab1-hash", label: "Lab 1: Hashing & Avalanche", icon: Fingerprint },
                { id: "lab2-aead", label: "Lab 2: AEAD Encryption", icon: Lock },
                { id: "lab3-sig", label: "Lab 3: Digital Signatures", icon: FileCheck },
                { id: "lab4-cert", label: "Lab 4: PKI & Certificates", icon: Award },
                { id: "lab5-tls", label: "Lab 5: TLS 1.3 Handshake", icon: Globe },
                { id: "lab6-keys", label: "Lab 6: Key Incident Playbook", icon: Key },
              ].map((lab) => {
                const Icon = lab.icon;
                const isActive = activeLabTab === lab.id;
                return (
                  <button
                    key={lab.id}
                    onClick={() => setActiveLabTab(lab.id)}
                    className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                      isActive
                        ? "bg-[#ea580c] text-white shadow-xs"
                        : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{lab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* LAB 1: HASHING & AVALANCHE EFFECT */}
            {activeLabTab === "lab1-hash" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Fingerprint className="w-4 h-4" />
                    Interactive Lab 1 · SHA-256 Digest & The Avalanche Effect
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Cryptographic Integrity Verification Simulator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Observe how altering a single character causes a radical, unpredictable transformation of the entire digest.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Message A */}
                  <div className="space-y-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <label className="text-xs font-bold text-stone-800 flex items-center justify-between">
                      <span>Original Input Message:</span>
                      <span className="font-mono text-[10px] text-stone-500">{hashInput.length} chars</span>
                    </label>
                    <textarea
                      rows={3}
                      value={hashInput}
                      onChange={(e) => setHashInput(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 bg-white p-3 font-mono text-xs text-stone-900 focus:border-orange-500 focus:outline-none"
                    />
                    <div>
                      <div className="text-[11px] font-mono text-stone-500 font-bold mb-1">SHA-256 Digest:</div>
                      <div className="p-2.5 rounded-xl bg-stone-900 font-mono text-xs text-emerald-400 break-all select-all flex items-center justify-between gap-2">
                        <span>{hashOutput || "Computing..."}</span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(hashOutput);
                            setHashCopied(true);
                            setTimeout(() => setHashCopied(false), 2000);
                          }}
                          className="shrink-0 p-1 text-stone-400 hover:text-white"
                        >
                          {hashCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Message B */}
                  <div className="space-y-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <label className="text-xs font-bold text-stone-800 flex items-center justify-between">
                      <span>Modified Input Message (Notice 1-character difference):</span>
                      <button
                        onClick={() => setCompareHashInput(hashInput + "!")}
                        className="text-[11px] font-bold text-orange-600 hover:underline"
                      >
                        Append '!'
                      </button>
                    </label>
                    <textarea
                      rows={3}
                      value={compareHashInput}
                      onChange={(e) => setCompareHashInput(e.target.value)}
                      className="w-full rounded-xl border border-stone-300 bg-white p-3 font-mono text-xs text-stone-900 focus:border-orange-500 focus:outline-none"
                    />
                    <div>
                      <div className="text-[11px] font-mono text-stone-500 font-bold mb-1">SHA-256 Digest:</div>
                      <div className="p-2.5 rounded-xl bg-stone-900 font-mono text-xs text-amber-400 break-all select-all">
                        {compareHashOutput || "Computing..."}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200 text-xs text-stone-800 space-y-1">
                  <div className="font-bold text-orange-800 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    Security Takeaway: Provenance vs Integrity
                  </div>
                  <p>
                    Matching a calculated SHA-256 digest against a digest published on an HTTP website does NOT prove the file is authentic if an attacker compromised both the download mirror and the hash text file! Strong authenticity requires a <strong>Cryptographic Digital Signature</strong> verified against a trusted publisher public key.
                  </p>
                </div>
              </div>
            )}

            {/* LAB 2: AEAD ENCRYPTION */}
            {activeLabTab === "lab2-aead" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Lock className="w-4 h-4" />
                    Interactive Lab 2 · Authenticated Encryption (AES-256-GCM)
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    AEAD Integrity Tag & Nonce Tamper Simulator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    See how modern AEAD ciphers detect unauthorized bit modification and prevent forgery attacks.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-800">Plaintext Payload:</label>
                      <input
                        type="text"
                        value={aeadPlaintext}
                        onChange={(e) => setAeadPlaintext(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-stone-300 text-xs font-mono bg-stone-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-800">Associated Data (AAD - Unencrypted Metadata):</label>
                      <input
                        type="text"
                        value={aeadAAD}
                        onChange={(e) => setAeadAAD(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-stone-300 text-xs font-mono bg-stone-50"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="flex justify-between items-center text-stone-400 border-b border-stone-800 pb-2">
                      <span>AES-256 Secret Key (256-bit):</span>
                      <span className="text-emerald-400">{aeadKey}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-400 border-b border-stone-800 pb-2">
                      <span>96-bit Nonce / IV:</span>
                      <span className="text-blue-400">{aeadNonce} (Used: 1 time)</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-400 border-b border-stone-800 pb-2">
                      <span>Ciphertext Output (Confidential):</span>
                      <span className="text-amber-400 break-all">{aeadCiphertext}</span>
                    </div>
                    <div className="flex justify-between items-center text-stone-400">
                      <span>128-bit Authentication Tag (MAC):</span>
                      <span className="text-purple-400">{aeadTag}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-800">Simulate Adversary Tampering:</label>
                    <div className="grid sm:grid-cols-4 gap-2">
                      {[
                        { id: "none", label: "No Tampering (Normal)" },
                        { id: "ciphertext", label: "Flip 1 Byte in Ciphertext" },
                        { id: "aad", label: "Modify AAD Header" },
                        { id: "nonce_reuse", label: "Simulate Nonce Reuse" },
                      ].map((mode) => (
                        <button
                          key={mode.id}
                          onClick={() => {
                            setAeadTamperMode(mode.id);
                            setAeadDecryptionResult(null);
                          }}
                          className={`p-2.5 rounded-xl text-xs font-bold border text-left transition cursor-pointer ${
                            aeadTamperMode === mode.id
                              ? "bg-stone-900 text-white border-stone-900"
                              : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                          }`}
                        >
                          {mode.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={handleDecryptionTest}
                      className="px-5 py-2.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-600 transition flex items-center gap-2 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Execute AEAD Decryption & Tag Verification</span>
                    </button>
                  </div>

                  {aeadDecryptionResult && (
                    <div
                      className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                        aeadDecryptionResult.success
                          ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                          : "bg-red-50 border-red-200 text-red-950"
                      }`}
                    >
                      <div className="font-bold flex items-center gap-2 mb-1">
                        {aeadDecryptionResult.success ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <AlertOctagon className="w-4 h-4 text-red-600" />
                        )}
                        <span>{aeadDecryptionResult.success ? "VERIFICATION SUCCESS" : "VERIFICATION REJECTED"}</span>
                      </div>
                      <p>{aeadDecryptionResult.message}</p>
                      {aeadDecryptionResult.plaintext && (
                        <div className="mt-2 font-mono p-2 bg-white/80 rounded-lg border border-emerald-300">
                          Decrypted: {aeadDecryptionResult.plaintext}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* LAB 3: DIGITAL SIGNATURES */}
            {activeLabTab === "lab3-sig" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <FileCheck className="w-4 h-4" />
                    Interactive Lab 3 · Asymmetric Digital Signatures (Ed25519)
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Signing and Verification Workflow
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Understand how a private key creates a signature and how any verifier uses the matching public key to detect message tampering.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Signing Side */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="font-bold text-xs text-stone-800 flex items-center gap-1.5">
                      <Key className="w-4 h-4 text-orange-600" />
                      Signer: Alice (Holds Private Key)
                    </div>
                    <div className="text-[11px] font-mono text-stone-500">
                      Private Key: <span className="text-red-600 font-bold">prv_ed25519_88a91f4b... (SECRET)</span>
                    </div>
                    <label className="text-xs font-bold text-stone-700 block">Message to Sign:</label>
                    <textarea
                      rows={3}
                      value={sigDoc}
                      onChange={(e) => {
                        setSigDoc(e.target.value);
                        setSigStatus(sigTampered ? "invalid" : "valid");
                      }}
                      className="w-full rounded-xl border border-stone-300 p-2 text-xs font-mono bg-white"
                    />
                    <div className="p-2.5 rounded-xl bg-stone-900 text-stone-200 font-mono text-[11px]">
                      <div className="text-stone-400">Calculated Signature (σ):</div>
                      <div className="text-emerald-400 break-all">
                        {sigTampered
                          ? "7b82f019a4e928c0391fa8b193e82b419c8f94..."
                          : "4a91b82c7f04e819b22a104c93fe8192a83c74..."}
                      </div>
                    </div>
                  </div>

                  {/* Verification Side */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="font-bold text-xs text-stone-800 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      Verifier: Bob / System (Holds Public Key)
                    </div>
                    <div className="text-[11px] font-mono text-stone-500">
                      Public Key: <span className="text-emerald-700 font-bold">pub_ed25519_23f019a8... (PUBLIC)</span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-stone-700 block">Tamper Simulation:</label>
                      <button
                        onClick={() => {
                          const nextState = !sigTampered;
                          setSigTampered(nextState);
                          setSigStatus(nextState ? "invalid" : "valid");
                        }}
                        className={`w-full p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                          sigTampered
                            ? "bg-red-600 text-white border-red-700"
                            : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        {sigTampered ? "Message Altered by Attacker!" : "Tamper with Message in Transit"}
                      </button>
                    </div>

                    <div
                      className={`p-3 rounded-xl border text-xs font-semibold ${
                        sigStatus === "valid"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                          : "bg-red-50 border-red-200 text-red-900"
                      }`}
                    >
                      {sigStatus === "valid" ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>SIGNATURE VALID: Provenance and integrity confirmed.</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <AlertOctagon className="w-4 h-4 text-red-600 shrink-0" />
                          <span>SIGNATURE INVALID: Data altered after signing or wrong public key!</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: PKI & CERTIFICATE INSPECTION */}
            {activeLabTab === "lab4-cert" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Award className="w-4 h-4" />
                    Interactive Lab 4 · X.509 Certificate Chain & Trust Validation
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    X.509 Certificate Decoder & Path Validator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Inspect digital certificate fields, traverse the hierarchical chain of trust, and simulate common PKI validation failures.
                  </p>
                </div>

                {/* Scenario buttons */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-800">Select Test Certificate Scenario:</label>
                  <div className="grid sm:grid-cols-4 gap-2">
                    {[
                      { id: "valid", label: "Valid Chain (api.prepspaces.com)" },
                      { id: "expired", label: "Expired Certificate" },
                      { id: "mismatch", label: "Hostname SAN Mismatch" },
                      { id: "revoked", label: "Revoked (Compromised Key)" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setCertScenario(item.id)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                          certScenario === item.id
                            ? "bg-stone-900 text-white border-stone-900"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs space-y-3">
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-stone-500 font-bold">Certificate Subject:</span>
                    <span className="font-bold text-stone-900">
                      {certScenario === "mismatch" ? "CN=old-internal-service.local" : "CN=api.prepspaces.com"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-stone-500 font-bold">Subject Alternative Names (SAN):</span>
                    <span className="text-orange-600 font-bold">
                      {certScenario === "mismatch"
                        ? "DNS:old-internal-service.local"
                        : "DNS:api.prepspaces.com, DNS:auth.prepspaces.com"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-stone-500 font-bold">Issuer (Intermediate CA):</span>
                    <span className="text-stone-800">CN=PrepSpaces Intermediate CA G2, O=PrepSpaces Global Trust</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-stone-500 font-bold">Root Trust Anchor:</span>
                    <span className="text-stone-800">CN=GlobalTrust Root CA X1 (In Browser Trust Store)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="text-stone-500 font-bold">Validity Period:</span>
                    <span className={certScenario === "expired" ? "text-red-600 font-bold" : "text-emerald-700"}>
                      {certScenario === "expired"
                        ? "EXPIRED: 2025-01-01 to 2025-04-01 (Expired 560 days ago)"
                        : "VALID: 2026-08-01 to 2026-11-01 (68 days remaining)"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500 font-bold">Revocation Status (OCSP / CRL):</span>
                    <span className={certScenario === "revoked" ? "text-red-600 font-bold" : "text-emerald-700 font-bold"}>
                      {certScenario === "revoked"
                        ? "REVOKED (CRL Reason: keyCompromise, Date: 2026-09-12)"
                        : "GOOD (OCSP Stapled Response Valid)"}
                    </span>
                  </div>
                </div>

                {/* Validation Banner */}
                <div
                  className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                    certScenario === "valid"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-950"
                      : "bg-red-50 border-red-200 text-red-950"
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5 mb-1">
                    {certScenario === "valid" ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <AlertOctagon className="w-4 h-4 text-red-600" />
                    )}
                    <span>
                      {certScenario === "valid"
                        ? "TRUST VALIDATION PASS: Connection Established via HTTPS"
                        : "TRUST VALIDATION FAILED: Browser Warning Triggered"}
                    </span>
                  </div>
                  <p>
                    {certScenario === "valid" && "All 7 path validation criteria met: validity period active, SAN matches requested URL, signatures valid up to trusted root anchor, OCSP check clear."}
                    {certScenario === "expired" && "NET::ERR_CERT_DATE_INVALID: The certificate has lapsed. Automated ACME renewal process failed."}
                    {certScenario === "mismatch" && "NET::ERR_CERT_COMMON_NAME_INVALID: Hostname mismatch! You requested api.prepspaces.com, but the certificate is only issued for old-internal-service.local."}
                    {certScenario === "revoked" && "NET::ERR_CERT_REVOKED: The issuing CA marked this certificate as revoked due to private key compromise."}
                  </p>
                </div>
              </div>
            )}

            {/* LAB 5: TLS 1.3 HANDSHAKE */}
            {activeLabTab === "lab5-tls" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Globe className="w-4 h-4" />
                    Interactive Lab 5 · TLS 1.3 (RFC 9846) Handshake Visualizer
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Ephemeral Key Exchange & Handshake Steps
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Walk through the modern 1-RTT handshake protocol that secures HTTPS web traffic.
                  </p>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <button
                      key={step}
                      onClick={() => setTlsStep(step)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                        tlsStep === step
                          ? "bg-[#18181b] text-white"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      Step {step}: {
                        step === 1 ? "ClientHello" :
                        step === 2 ? "ServerHello & Keys" :
                        step === 3 ? "Certificate & Verify" :
                        step === 4 ? "Key Derivation (PFS)" : "Encrypted Traffic"
                      }
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-3">
                  {tlsStep === 1 && (
                    <div>
                      <div className="text-orange-400 font-bold mb-1">STEP 1: ClientHello (Client → Server)</div>
                      <p className="text-stone-300">
                        The client sends supported TLS version (TLS 1.3), cipher suites (<code className="text-emerald-400">TLS_AES_256_GCM_SHA384</code>), and immediately sends its ephemeral Diffie-Hellman key share (<code className="text-blue-400">KeyShare: X25519</code>) to achieve 1-RTT connection speed.
                      </p>
                    </div>
                  )}
                  {tlsStep === 2 && (
                    <div>
                      <div className="text-blue-400 font-bold mb-1">STEP 2: ServerHello & Server Key Share (Server → Client)</div>
                      <p className="text-stone-300">
                        The server selects the cipher suite, responds with its own ephemeral public key share (<code className="text-blue-400">ServerKeyShare: X25519</code>), and begins encrypting all subsequent handshake packets!
                      </p>
                    </div>
                  )}
                  {tlsStep === 3 && (
                    <div>
                      <div className="text-purple-400 font-bold mb-1">STEP 3: Encrypted Certificate & CertificateVerify (Server → Client)</div>
                      <p className="text-stone-300">
                        The server transmits its X.509 certificate chain and a signature (<code className="text-emerald-400">CertificateVerify</code>) computed with its private key over the entire handshake transcript to prove it owns the certificate.
                      </p>
                    </div>
                  )}
                  {tlsStep === 4 && (
                    <div>
                      <div className="text-amber-400 font-bold mb-1">STEP 4: Symmetric Traffic Key Derivation (Both Endpoints)</div>
                      <p className="text-stone-300">
                        Both client and server combine their ephemeral X25519 key shares through HKDF (HMAC-based Extract-and-Expand Key Derivation) to derive identical symmetric session keys (<code className="text-emerald-400">client_traffic_key</code> and <code className="text-emerald-400">server_traffic_key</code>). Perfect Forward Secrecy is guaranteed.
                      </p>
                    </div>
                  )}
                  {tlsStep === 5 && (
                    <div>
                      <div className="text-emerald-400 font-bold mb-1">STEP 5: Protected Application Data (Bidirectional HTTPS)</div>
                      <p className="text-stone-300">
                        Full HTTP/2 or HTTP/3 traffic begins, authenticated and encrypted using AES-256-GCM. An eavesdropper on the wire sees only randomized ciphertext.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* LAB 6: KEY MANAGEMENT PLAYBOOK */}
            {activeLabTab === "lab6-keys" && (
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase mb-1">
                    <Key className="w-4 h-4" />
                    Interactive Lab 6 · Key Governance & Leaked Secret Playbook
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Cryptographic Key Register & Incident Response
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Maintain an authoritative key inventory and execute an emergency rotation when a private key leaks.
                  </p>
                </div>

                {/* Key Register Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-500">
                        <th className="p-2">Key ID</th>
                        <th className="p-2">Name & Purpose</th>
                        <th className="p-2">Algorithm</th>
                        <th className="p-2">Storage</th>
                        <th className="p-2">Cryptoperiod</th>
                        <th className="p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-800">
                      <tr className="hover:bg-stone-50">
                        <td className="p-2 font-bold text-orange-600">KEY-01</td>
                        <td className="p-2">Production Web Server TLS</td>
                        <td className="p-2">ECDSA P-256</td>
                        <td className="p-2">AWS KMS (FIPS 140-3 Level 3)</td>
                        <td className="p-2">90 Days</td>
                        <td className="p-2"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">ACTIVE</span></td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="p-2 font-bold text-orange-600">KEY-02</td>
                        <td className="p-2">Database Column Encryption (PII)</td>
                        <td className="p-2">AES-256-GCM</td>
                        <td className="p-2">HashiCorp Vault Transit Engine</td>
                        <td className="p-2">365 Days</td>
                        <td className="p-2"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">ACTIVE</span></td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="p-2 font-bold text-orange-600">KEY-03</td>
                        <td className="p-2">JWT API Access Token Signing</td>
                        <td className="p-2">Ed25519</td>
                        <td className="p-2">Azure Key Vault Managed HSM</td>
                        <td className="p-2">30 Days</td>
                        <td className="p-2"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">ACTIVE</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Incident Response Playbook */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                  <div className="font-bold text-xs text-red-700 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    EMERGENCY INCIDENT: TLS Private Key Leaked to Public Git Repo!
                  </div>
                  <div className="grid sm:grid-cols-4 gap-2">
                    {[
                      { step: 1, title: "1. Quarantine & Invalidate", desc: "Revoke API credentials & disable compromised key access." },
                      { step: 2, title: "2. CA Revocation", desc: "Submit CRL/OCSP revocation to CA with keyCompromise reason." },
                      { step: 3, title: "3. Issue New Key Pair", desc: "Generate fresh key inside HSM; request new certificate." },
                      { step: 4, title: "4. Scrub Git & Audit", desc: "Use git-filter-repo and inspect access logs for abuse." },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition ${
                          incidentStep === item.step
                            ? "bg-stone-900 text-white border-stone-900"
                            : "bg-white text-stone-700 border-stone-200"
                        }`}
                        onClick={() => setIncidentStep(item.step)}
                      >
                        <div className="font-bold mb-1">{item.title}</div>
                        <p className="text-[11px] opacity-80">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* LAB SUBMISSION CHECKLIST */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-stone-900">
                    Lab Practical Submission Checklist
                  </h4>
                  <p className="text-xs text-stone-500">
                    Confirm all cryptographic deliverables and experiments are verified prior to final evaluation.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-stone-600">
                    {completedChecklistCount} / 8 Completed
                  </span>
                  <div className="w-24 h-2 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-300"
                      style={{ width: `${(completedChecklistCount / 8) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                {[
                  { key: "objThreatModel", label: "Cryptographic objectives and threat model documented" },
                  { key: "hashIntegrity", label: "Hash and file-integrity behavior tested (Lab 1)" },
                  { key: "aeadTested", label: "AEAD encryption & integrity verification demonstrated (Lab 2)" },
                  { key: "sigVerified", label: "Digital signature verification & tamper checks tested (Lab 3)" },
                  { key: "certInspected", label: "Certificate fields & trust chain reviewed (Lab 4)" },
                  { key: "tlsEvaluated", label: "TLS version & certificate validation assessed (Lab 5)" },
                  { key: "keyLifecycle", label: "Key lifecycle & compromise response playbook documented (Lab 6)" },
                  { key: "noKeysSubmitted", label: "Sensitive private keys & credentials strictly excluded from evidence" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition cursor-pointer ${
                      checklist[item.key]
                        ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium"
                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        checklist[item.key]
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-stone-300 bg-white"
                      }`}
                    >
                      {checklist[item.key] && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: APPLIED CASE STUDY (LearnSphere Platform)                          */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                Applied Case Study
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                LearnSphere Architecture: Cryptographic Architecture Design
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                LearnSphere is a fictional online learning platform storing user data, generating interview evaluation reports, distributing downloadable course material, and exposing web APIs.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-3">
              <div className="text-orange-400 font-bold">LEARNSPHERE CRYPTOGRAPHIC CONTROL MATRIX:</div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-stone-800 text-stone-400">
                      <th className="p-2">Asset / Channel</th>
                      <th className="p-2">Mechanism</th>
                      <th className="p-2">Algorithm & Parameters</th>
                      <th className="p-2">Key Management</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800 text-stone-300">
                    <tr>
                      <td className="p-2 font-bold text-white">Learner Passwords</td>
                      <td className="p-2">Adaptive Password Hash</td>
                      <td className="p-2">Argon2id (m=64MB, t=3, p=4) + 128-bit salt + pepper</td>
                      <td className="p-2">Pepper stored in AWS Secrets Manager</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white">PII & Financial Data at Rest</td>
                      <td className="p-2">Envelope AEAD Encryption</td>
                      <td className="p-2">AES-256-GCM (Unique 96-bit Nonce per record)</td>
                      <td className="p-2">Master Key in AWS KMS; 365-day rotation</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white">Software Downloads & Releases</td>
                      <td className="p-2">Digital Signatures</td>
                      <td className="p-2">Ed25519 Signatures + SHA-256 Checksums</td>
                      <td className="p-2">Hardware YubiKey / HSM air-gapped signing</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-white">Web & Mobile API Channels</td>
                      <td className="p-2">Transport Layer Security</td>
                      <td className="p-2">TLS 1.3 only; ECDHE X25519 + AES-256-GCM</td>
                      <td className="p-2">Let's Encrypt automated 60-day renewal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT QUIZ                                          */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                  Assessment
                </span>
                <h3 className="text-xl font-bold text-stone-900 mt-1">
                  Module 12 Knowledge Assessment
                </h3>
                <p className="text-xs text-stone-500">
                  6 questions testing core cryptographic concepts, hashing, signatures, PKI, and TLS.
                </p>
              </div>
              {quizSubmitted && (
                <div className="p-3 rounded-2xl bg-stone-100 border border-stone-200 text-center font-mono">
                  <span className="text-xs text-stone-500 block">Score</span>
                  <span className="text-lg font-black text-orange-600">
                    {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selected = quizAnswers[q.id];
                const isCorrect = selected === q.correctAnswer;
                return (
                  <div key={q.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="text-xs font-mono font-bold text-stone-400 uppercase">
                      Question {idx + 1} of {quizQuestions.length}
                    </div>
                    <h4 className="text-sm font-bold text-stone-900 leading-snug">
                      {q.question}
                    </h4>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "bg-white text-stone-700 border-stone-200 hover:bg-stone-100/70";
                        if (quizSubmitted) {
                          if (optIdx === q.correctAnswer) {
                            btnStyle = "bg-emerald-100/80 border-emerald-400 text-emerald-900 font-bold";
                          } else if (selected === optIdx) {
                            btnStyle = "bg-red-100/80 border-red-300 text-red-900";
                          } else {
                            btnStyle = "opacity-50 border-stone-200";
                          }
                        } else if (selected === optIdx) {
                          btnStyle = "bg-stone-900 text-white border-stone-900 font-medium";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleQuizSelect(q.id, optIdx)}
                            className={`w-full p-3 rounded-xl border text-xs text-left transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctAnswer && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className={`p-3 rounded-xl text-xs leading-relaxed ${isCorrect ? "bg-emerald-50 text-emerald-950" : "bg-red-50 text-red-950"}`}>
                        <strong>Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-stone-200">
              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-6 py-2.5 rounded-2xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-600 transition disabled:opacity-50 cursor-pointer"
                >
                  Submit Assessment
                </button>
              ) : (
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CAPSTONE & RUBRIC                                                  */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <span className="rounded-full bg-orange-100 text-orange-800 px-3 py-0.5 text-xs font-mono font-bold">
                Portfolio Capstone
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                Capstone Project: Design a Secure Cryptographic Communication System
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Design a comprehensive, end-to-end cryptographic architecture for the LearnSphere platform, covering data at rest, data in transit, software signing, PKI certificate governance, abuse scenarios, and post-quantum readiness.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 text-sm">Required Capstone Deliverables (Parts A through H):</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part A: Threat Model & Objectives</div>
                  <p className="text-stone-600">Asset classification, adversary profiles, confidentiality, integrity, authenticity, and provenance boundaries.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part B: Cryptographic Design</div>
                  <p className="text-stone-600">Selection of AEAD symmetric ciphers, Argon2id password hashing, Ed25519 signatures, and SHA-256 digests.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part C: PKI & Certificate Plan</div>
                  <p className="text-stone-600">Hierarchy design, Root/Intermediate trust anchors, ACME automated renewals, and OCSP revocation procedures.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part D: TLS 1.3 Configuration</div>
                  <p className="text-stone-600">Enforcement of RFC 9846, deprecation of legacy TLS 1.0/1.1, SAN validation, and cipher suite restriction.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part E: Key Management Register</div>
                  <p className="text-stone-600">Full lifecycle inventory (Generation, Storage in HSM/KMS, Access control, Cryptoperiod, Destruction).</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part F: Cryptographic Abuse Cases</div>
                  <p className="text-stone-600">Detection, containment, and recovery plans for 5 failure cases: key leakage, nonce reuse, expired certs, and padding attacks.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part G: Post-Quantum Readiness (PQC)</div>
                  <p className="text-stone-600">FIPS 203/204/205 migration assessment, cryptographic agility architecture, and hybrid X25519+ML-KEM roadmap.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">Part H: Final Report & Evidence</div>
                  <p className="text-stone-600">Executive summary, control matrix, network diagrams, and lab test results.</p>
                </div>
              </div>
            </div>

            {/* Rubric Table */}
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-sm">Capstone Evaluation Rubric (100% Total):</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-500 font-mono">
                      <th className="p-2">Assessment Area</th>
                      <th className="p-2">Weight</th>
                      <th className="p-2">Passing Criteria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Threat Model & Objectives</td>
                      <td className="p-2 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-2">Comprehensive asset inventory with defensible CIA mappings.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Cryptographic Mechanism Selection</td>
                      <td className="p-2 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-2">Accurate distinction between encryption, hashing, signing, and MACs; vetted modern ciphers only.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Hashing, Signatures & Encryption Validation</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">Empirical lab evidence demonstrating AEAD integrity and signature verification under tampering.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">PKI & Certificate Validation</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">Defensible 3-tier CA hierarchy, SAN compliance, and automated ACME renewal workflow.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">TLS Configuration & Assessment</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">Strict TLS 1.3 policy with PFS and elimination of legacy insecure cipher suites.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Key Lifecycle & Compromise Response</td>
                      <td className="p-2 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-2">NIST SP 800-57 aligned key register and actionable leaked key incident playbook.</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold text-stone-900">Reporting & Migration Planning</td>
                      <td className="p-2 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-2">Professional formatting, executive clarity, and realistic Post-Quantum (PQC) transition plan.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3 rounded-xl bg-stone-100 text-stone-700 text-xs">
                <strong>Passing Threshold:</strong> 70% or higher, with correct cryptographic mechanism distinctions, validated certificate trust, and evidence-supported conclusions.
              </div>
            </div>

            {/* Official References */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <h3 className="font-bold text-stone-900 text-sm">Official Standards & References:</h3>
              <div className="grid sm:grid-cols-2 gap-2 text-xs">
                {[
                  { title: "NIST FIPS 197 — Advanced Encryption Standard (AES)", link: "https://csrc.nist.gov/pubs/fips/197/final" },
                  { title: "NIST FIPS 180-4 — Secure Hash Standard (SHS)", link: "https://csrc.nist.gov/pubs/fips/180-4/upd1/final" },
                  { title: "NIST FIPS 186-5 — Digital Signature Standard (DSS)", link: "https://csrc.nist.gov/pubs/fips/186-5/final" },
                  { title: "NIST SP 800-57 — Recommendation for Key Management", link: "https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final" },
                  { title: "IETF RFC 5280 — Internet X.509 PKI Profile", link: "https://www.rfc-editor.org/rfc/rfc5280.html" },
                  { title: "IETF RFC 9846 — The TLS 1.3 Protocol (2026)", link: "https://www.rfc-editor.org/rfc/rfc9846.html" },
                  { title: "OWASP — Cryptographic & Password Storage Cheat Sheets", link: "https://cheatsheetseries.owasp.org/" },
                  { title: "NIST — Post-Quantum Standards (FIPS 203, 204, 205)", link: "https://csrc.nist.gov/Projects/post-quantum-cryptography" },
                ].map((ref, idx) => (
                  <a
                    key={idx}
                    href={ref.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white hover:border-orange-300 transition text-stone-800"
                  >
                    <span className="truncate">{ref.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* FOOTER NAVIGATION (PREVIOUS & NEXT MODULE)                                */}
        {/* ========================================================================= */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity/iam")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 11 (Identity & Access Management)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/web-security")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 13 (Web Security & OWASP)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
