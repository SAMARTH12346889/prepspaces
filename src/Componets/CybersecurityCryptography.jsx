import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
  Layers,
  Terminal,
  Shield,
  Activity,
  Play,
  RotateCcw,
  Sliders,
  Copy,
  Check,
  Server,
  Network,
  HelpCircle,
  Award,
  AlertTriangle,
  Sparkles,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Monitor,
  HardDrive,
  Clock,
  Gauge,
  SlidersHorizontal,
  ExternalLink,
  Eye,
  FileText,
  Key,
  Database,
  Search,
  AlertCircle,
  FileSpreadsheet,
  TerminalSquare,
  Binary,
  FolderGit2,
  Filter,
  ShieldAlert,
  Target,
  Crosshair,
  UserCheck,
  UserX,
  FileWarning,
  Flame,
  CheckSquare,
  Square,
  PlusCircle,
  Trash2,
  Download,
  Fingerprint,
  Radio,
  FileCheck2,
  ListFilter,
  CheckCheck,
  TrendingUp,
  Wifi,
  Split,
  Router,
  Ban,
  RadioTower,
  KeyRound,
  FileKey,
  LockKeyhole,
  Users,
  UserCog,
  FileLock2,
  FolderLock,
  Wrench,
  FilePlus,
  ShieldX,
  History,
  FileCheck,
  EyeOff,
  ClipboardList,
  Smartphone,
  QrCode,
  KeySquare,
  Share2,
  UserMinus,
  UserPlus,
  ShieldQuestion,
  FingerprintIcon,
  Unlock,
  KeyRoundIcon,
  BadgeCheck,
  Unplug,
  ZapOff,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 12                          */
/* Cryptography, Encryption, Hashing, PKI, TLS, and Digital Certificates      */
/* Informed by NIST FIPS 197, NIST FIPS 186-5, RFC 9846 (TLS 1.3) & RFC 5280  */
/* -------------------------------------------------------------------------- */

export default function CybersecurityCryptography() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'gcm-sim' | 'pki-sim' | 'tls-sim' | 'sig-sim' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: AES-GCM AUTHENTICATED ENCRYPTION & NONCE REUSE HAZARD         */
  /* -------------------------------------------------------------------------- */
  const [gcmPlaintext, setGcmPlaintext] = useState("Confidential Candidate Interview Report: Grade A+ (Hire)");
  const [gcmKey, setGcmKey] = useState("c4a89f21d3e87b640192a5bc4e7f8190");
  const [gcmNonce, setGcmNonce] = useState("1029384756ab");
  const [gcmAad, setGcmAad] = useState("prepspaces-tenant-v1");
  const [reuseNonceScenario, setReuseNonceScenario] = useState(false);
  const [tamperCiphertext, setTamperCiphertext] = useState(false);

  const gcmSimulation = useMemo(() => {
    // Simulated AES-256-GCM ciphertext output (hex)
    const baseCipherHex = "9f82d1c0b3a4e588127394c8b1a203f4e567d890a1b2c3d4e5f60718293a4b5c";
    const actualCipherHex = tamperCiphertext
      ? "ff82d1c0b3a4e588127394c8b1a203f4e567d890a1b2c3d4e5f60718293a4b5c"
      : baseCipherHex;

    const baseTagHex = "7b2e8194a0f3c2d1";

    let integrityValid = !tamperCiphertext;
    let decryptedText = gcmPlaintext;
    let alertMessage = null;

    if (tamperCiphertext) {
      integrityValid = false;
      decryptedText = "[DECRYPTION ABORTED: GHASH Authentication Tag Mismatch]";
      alertMessage =
        "INTEGRITY VIOLATION: The ciphertext or Associated Data (AAD) was tampered with in transit. The AEAD authentication tag failed verification, preventing ciphertext modification attacks.";
    } else if (reuseNonceScenario) {
      alertMessage =
        "CATASTROPHIC CRYPTOGRAPHIC FAILURE: Nonce reused with the same key! In AES-GCM, reusing a nonce (IV) leaks the GHASH authentication key H, enabling an attacker to forge arbitrary authentication tags and decrypt traffic.";
    }

    return {
      ciphertext: actualCipherHex,
      authTag: baseTagHex,
      integrityValid,
      decryptedText,
      alertMessage,
    };
  }, [gcmPlaintext, gcmKey, gcmNonce, gcmAad, reuseNonceScenario, tamperCiphertext]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: X.509 PKI CERTIFICATE CHAIN OF TRUST & SAN VALIDATOR          */
  /* -------------------------------------------------------------------------- */
  const [targetHostname, setTargetHostname] = useState("prepspaces.com");
  const [pkiScenario, setPkiScenario] = useState("valid"); // 'valid' | 'expired' | 'untrusted_root' | 'san_mismatch' | 'revoked'

  const certChainData = useMemo(() => {
    const rootCa = {
      name: "DigiCert Global Root G2",
      type: "Root Certificate Authority",
      trustedInStore: pkiScenario !== "untrusted_root",
      validity: "2013-08-01 to 2038-01-15",
      key: "RSA 4096 bits (SHA-256)",
    };

    const intermediateCa = {
      name: "DigiCert Global TLS RSA SHA256 2020 CA1",
      type: "Intermediate Certificate Authority",
      issuer: "DigiCert Global Root G2",
      validity: "2020-09-23 to 2030-09-22",
      key: "RSA 2048 bits (SHA-256)",
    };

    const serverCert = {
      subject: "CN = prepspaces.com",
      san: ["prepspaces.com", "*.prepspaces.com"],
      issuer: "DigiCert Global TLS RSA SHA256 2020 CA1",
      validity: pkiScenario === "expired" ? "2023-01-01 to 2024-01-01 (EXPIRED)" : "2026-01-01 to 2027-01-01 (ACTIVE)",
      revocationStatus: pkiScenario === "revoked" ? "REVOKED via OCSP" : "GOOD (OCSP Stapled)",
      keyUsage: "Digital Signature, Key Encipherment",
      eku: "TLS Web Server Authentication (1.3.6.1.5.5.7.3.1)",
    };

    // Validation engine
    let status = "SECURE";
    let message = `Certificate chain verified successfully. Hostname '${targetHostname}' matches Subject Alternative Name (SAN).`;

    if (pkiScenario === "untrusted_root") {
      status = "UNTRUSTED_ROOT";
      message = "Validation Failed: The issuer's root CA certificate is not in the client operating system trust store (Self-signed or unknown private CA).";
    } else if (pkiScenario === "expired") {
      status = "CERT_EXPIRED";
      message = "Validation Failed: The certificate has passed its NotAfter expiration date (CERT_HAS_EXPIRED).";
    } else if (pkiScenario === "revoked") {
      status = "CERT_REVOKED";
      message = "Validation Failed: The certificate was explicitly revoked by the issuing CA via OCSP / CRL.";
    } else {
      // Check SAN match
      const isSanMatch =
        targetHostname === "prepspaces.com" ||
        targetHostname === "api.prepspaces.com" ||
        targetHostname === "auth.prepspaces.com";

      if (!isSanMatch) {
        status = "SAN_MISMATCH";
        message = `Validation Failed (Name Mismatch): The requested hostname '${targetHostname}' does not match any entry in Subject Alternative Name (SAN: prepspaces.com, *.prepspaces.com).`;
      }
    }

    return { rootCa, intermediateCa, serverCert, status, message };
  }, [targetHostname, pkiScenario]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: TLS 1.3 VS TLS 1.2 HANDSHAKE & CIPHER SUITE DISSECTOR         */
  /* -------------------------------------------------------------------------- */
  const [tlsVersion, setTlsVersion] = useState("tls13"); // 'tls12' | 'tls13'
  const [handshakeStep, setHandshakeStep] = useState(1);
  const [tamperHandshake, setTamperHandshake] = useState(false);

  const tlsHandshakeSteps = useMemo(() => {
    if (tlsVersion === "tls13") {
      return [
        {
          step: 1,
          sender: "Client -> Server",
          title: "ClientHello + Key Share (1-RTT)",
          detail:
            "Client sends supported cipher suites (e.g. TLS_AES_256_GCM_SHA384), SNI (prepspaces.com), and generates ephemeral ECDH public key share (X25519) immediately!",
        },
        {
          step: 2,
          sender: "Server -> Client",
          title: "ServerHello + Key Share + EncryptedExtensions",
          detail:
            "Server selects cipher suite, sends its own ephemeral ECDH public key share, and derives shared session secret. All subsequent handshake messages are already ENCRYPTED!",
        },
        {
          step: 3,
          sender: "Server -> Client",
          title: "Certificate + CertificateVerify + Finished",
          detail:
            "Server presents X.509 certificate and signs the entire handshake transcript with its private key (CertificateVerify). Server sends Finished HMAC tag.",
        },
        {
          step: 4,
          sender: "Client <-> Server",
          title: "Finished & Application Data Traffic",
          detail:
            "Client verifies server signature and Finished tag, sends its own Finished tag, and immediately transmits HTTP/2 or HTTP/3 application requests over AEAD traffic keys.",
        },
      ];
    } else {
      // TLS 1.2 (2-RTT)
      return [
        {
          step: 1,
          sender: "Client -> Server",
          title: "ClientHello",
          detail: "Client sends supported cipher suites and random nonce. No key exchange parameters sent yet.",
        },
        {
          step: 2,
          sender: "Server -> Client",
          title: "ServerHello + Certificate + ServerKeyExchange",
          detail:
            "Server sends chosen cipher suite, X.509 certificate in cleartext, ECDH ephemeral parameters, and ServerHelloDone.",
        },
        {
          step: 3,
          sender: "Client -> Server",
          title: "ClientKeyExchange + ChangeCipherSpec + Finished",
          detail:
            "Client sends client key exchange parameters, changes cipher spec, and sends encrypted Finished verification message.",
        },
        {
          step: 4,
          sender: "Server -> Client",
          title: "ChangeCipherSpec + Finished & App Data",
          detail:
            "Server acknowledges ChangeCipherSpec, sends Finished message, and begins transmitting encrypted application data.",
        },
      ];
    }
  }, [tlsVersion]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: DIGITAL SIGNATURE (SIGNING VS VERIFICATION) & TAMPER LAB      */
  /* -------------------------------------------------------------------------- */
  const [sigAlgorithm, setSigAlgorithm] = useState("Ed25519"); // 'Ed25519' | 'RSA-PSS'
  const [sigMessage, setSigMessage] = useState("Approved prepspaces release binary hash: sha256:4a89bc213");
  const [tamperMessage, setTamperMessage] = useState(false);
  const [tamperSignature, setTamperSignature] = useState(false);

  const sigOutcome = useMemo(() => {
    const verified = !tamperMessage && !tamperSignature;
    let statusText = "SIGNATURE VERIFIED (Valid Authenticity & Integrity)";
    let explanation =
      "The mathematical verification algorithm computed the hash of the message and validated the signature against the public key. The message was provably signed by the private key holder.";

    if (tamperMessage) {
      statusText = "VERIFICATION FAILED: Message Content Tampered";
      explanation =
        "The message text was altered after signing. The hash computed by the verifier does not match the signature. Data rejected.";
    } else if (tamperSignature) {
      statusText = "VERIFICATION FAILED: Signature Bytes Corrupted";
      explanation =
        "The signature was modified or forged. The mathematical public-key equation failed to resolve. Data rejected.";
    }

    return { verified, statusText, explanation };
  }, [tamperMessage, tamperSignature]);

  /* -------------------------------------------------------------------------- */
  /* QUIZ DATA: 10 SCENARIO QUESTIONS FROM SECTION 12.14                        */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What is the main purpose of encryption?",
      options: [
        "Make data shorter",
        "Protect confidentiality using cryptographic keys",
        "Guarantee the sender's identity in every case",
        "Replace access control",
      ],
      correctIndex: 1,
      explanation:
        "The primary purpose of encryption is to protect data confidentiality by mathematically transforming plaintext into ciphertext using a cryptographic key.",
    },
    {
      id: 2,
      question: "Why is Base64 not encryption?",
      options: [
        "It requires an RSA private key",
        "It cannot represent binary data",
        "It is a reversible encoding that needs no secret key",
        "It always changes when a file is opened",
      ],
      correctIndex: 2,
      explanation:
        "Base64 is an encoding scheme that translates binary data into ASCII characters for transport. Anyone can decode it without a secret key; it provides zero confidentiality.",
    },
    {
      id: 3,
      question: "Which construction is generally appropriate for password storage?",
      options: [
        "Plain SHA-256",
        "AES encryption of every password using one hard-coded key",
        "A dedicated scheme such as Argon2id, bcrypt, or PBKDF2",
        "Base64",
      ],
      correctIndex: 2,
      explanation:
        "Passwords require dedicated adaptive, memory-hard, salted password-hashing schemes (Argon2id, bcrypt, PBKDF2) to slow down offline GPU cracking attacks.",
    },
    {
      id: 4,
      question: "What is a key risk when reusing an AES-GCM nonce with the same key?",
      options: [
        "It automatically renews the certificate",
        "It can compromise confidentiality and authentication",
        "It improves forward secrecy",
        "It converts ciphertext into a hash",
      ],
      correctIndex: 1,
      explanation:
        "In AES-GCM, reusing a nonce with the same secret key allows an attacker to recover the GHASH authentication key, forge ciphertext, and decrypt traffic.",
    },
    {
      id: 5,
      question: "What does a digital signature primarily provide?",
      options: [
        "Confidentiality by itself",
        "Integrity and authentication of the signing key under appropriate trust assumptions",
        "Automatic anonymity",
        "A replacement for encryption keys",
      ],
      correctIndex: 1,
      explanation:
        "A digital signature provides message integrity and proof of origin by demonstrating possession of the private signing key, verifiable by anyone with the corresponding public key.",
    },
    {
      id: 6,
      question: "What is the role of a Certificate Authority (CA)?",
      options: [
        "Issue and sign certificates under defined policies",
        "Decrypt every HTTPS connection",
        "Generate every user's password",
        "Replace a web server's authorization checks",
      ],
      correctIndex: 0,
      explanation:
        "A Certificate Authority is a trusted entity in PKI that validates the identity of certificate applicants and digitally signs their X.509 certificates.",
    },
    {
      id: 7,
      question: "What must a TLS client validate besides certificate-chain trust?",
      options: [
        "Only the certificate's display name",
        "The requested server identity and relevant validity and usage constraints",
        "Only the server's IP address in every situation",
        "Whether the site has a privacy policy",
      ],
      correctIndex: 1,
      explanation:
        "Beyond verifying the cryptographic signature chain to a trusted root, the client must verify that the requested hostname matches the Subject Alternative Name (SAN), the certificate is within its validity dates, and key usage permits server authentication.",
    },
    {
      id: 8,
      question: "Why should cryptographic keys be separated by purpose?",
      options: [
        "It makes all algorithms interchangeable",
        "It limits cross-purpose exposure and simplifies access and lifecycle control",
        "It removes the need for backups",
        "It means keys never need rotation",
      ],
      correctIndex: 1,
      explanation:
        "Key separation ensures that the compromise or misuse of a key for one function (e.g. log signing) does not compromise other assets (e.g. database encryption).",
    },
    {
      id: 9,
      question: "What does TLS protect?",
      options: [
        "Every file stored on the server automatically",
        "Data in transit between communicating endpoints, when correctly implemented",
        "All browser activity regardless of connection",
        "An application even after its endpoint is compromised",
      ],
      correctIndex: 1,
      explanation:
        "TLS provides confidentiality, integrity, and server authentication for data in transit across untrusted network links. It does not protect data at rest on server storage.",
    },
    {
      id: 10,
      question: "What should you do if a signature verification fails?",
      options: [
        "Ignore the failure if the file opens",
        "Disable signature checks",
        "Reject the data for the intended trusted operation and investigate",
        "Assume the certificate is valid",
      ],
      correctIndex: 2,
      explanation:
        "Signature verification failure proves that either the data was altered in transit or the signature was not created by the trusted private key holder. The data must be rejected immediately.",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  }, [selectedAnswers]);

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowQuizResults(false);
  };

  /* -------------------------------------------------------------------------- */
  /* LAB REPORT STATE (12.13 LAB F)                                            */
  /* -------------------------------------------------------------------------- */
  const [labReportExercise, setLabReportExercise] = useState("Certificate inspection");
  const [labReportOutcome, setLabReportOutcome] = useState("Passed");
  const [labReportEvidence, setLabReportEvidence] = useState(
    "openssl s_client -connect prepspaces.com:443 negotiated TLSv1.3 with TLS_AES_256_GCM_SHA384. Certificate chain validated to DigiCert Global Root G2 with valid SAN DNS:prepspaces.com."
  );
  const [labReportRemediation, setLabReportRemediation] = useState(
    "Automate Let's Encrypt / Certbot renewal 30 days prior to expiration. Enforce HSTS with max-age=31536000."
  );

  const copyLabReport = () => {
    const text = `PREPSPACES CRYPTOGRAPHY & PKI LAB REPORT
Exercise: ${labReportExercise}
Outcome: ${labReportOutcome}
Evidence & Observations:
${labReportEvidence}
Remediation / Next Action:
${labReportRemediation}`;
    navigator.clipboard.writeText(text);
    alert("Cryptography lab report copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* HEADER & MODULE TITLE */}
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/learning/cybersecurity")}
                className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                title="Back to Cybersecurity Track"
              >
                <ArrowLeft size={18} />
              </button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase bg-orange-100 text-orange-800 border border-orange-200">
                    Module 12 • In-Depth Curriculum
                  </span>
                  <span className="text-xs text-stone-500 font-mono">NIST FIPS 197 • RFC 9846 (TLS 1.3) • RFC 5280</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
                  <Lock className="text-orange-600" size={22} />
                  Cryptography, Encryption, Hashing, PKI, TLS &amp; Digital Certificates
                </h1>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/learning/cybersecurity/iam")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
                title="Previous: Module 11"
              >
                <ArrowLeft size={14} />
                <span>Mod 11</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* TRACK SUB-NAVIGATION */}
      <ModuleNav currentModuleId="cryptography" track="cybersecurity" />

      {/* TAB SELECTOR: THEORY VS 4 SIMULATORS VS QUIZ */}
      <div className="border-b border-stone-200 bg-white shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 scrollbar-thin">
            <button
              onClick={() => setActiveTab("theory")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "theory"
                  ? "bg-stone-900 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <BookOpen size={16} />
              <span>Full Curriculum &amp; Labs</span>
            </button>

            <button
              onClick={() => setActiveTab("gcm-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "gcm-sim"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Binary size={16} />
              <span>AES-GCM &amp; Nonce Reuse Hazard</span>
            </button>

            <button
              onClick={() => setActiveTab("pki-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "pki-sim"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <BadgeCheck size={16} />
              <span>PKI Chain &amp; SAN Validator</span>
            </button>

            <button
              onClick={() => setActiveTab("tls-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "tls-sim"
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Zap size={16} />
              <span>TLS 1.3 vs 1.2 Handshake</span>
            </button>

            <button
              onClick={() => setActiveTab("sig-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "sig-sim"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <FileCheck2 size={16} />
              <span>Digital Signature &amp; Tamper Lab</span>
            </button>

            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "quiz"
                  ? "bg-purple-700 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Award size={16} />
              <span>Module 12 Quiz (10 Qs)</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ========================================================================= */}
        {/* TAB 1: FULL CURRICULUM (12.1 - 12.16)                                    */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-10">
            {/* 12.1 MODULE OVERVIEW */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <ShieldCheck size={16} />
                <span>12.1 Module Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
                Cryptography, Encryption, Hashing, PKI, TLS, and Digital Certificates
              </h2>
              <p className="text-base text-stone-700 leading-relaxed mb-6">
                Cryptography is the mathematical foundation of digital security. It provides confidentiality, integrity, origin authentication, and non-repudiation across networks, storage systems, and distributed platforms. Security depends strictly on key secrecy, not algorithmic obscurity (Kerckhoffs&apos;s principle).
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    Target Learning Objectives
                  </h3>
                  <ul className="text-xs sm:text-sm text-stone-600 space-y-2">
                    <li>• Distinguish Encoding (Base64), Encryption (AES), Hashing (SHA-256), and Digital Signatures.</li>
                    <li>• Compare Symmetric (AES-128/256) and Asymmetric (RSA, ECC, Ed25519) cryptosystems.</li>
                    <li>• Understand Authenticated Encryption with Associated Data (AEAD) and nonce reuse hazards.</li>
                    <li>• Master Public Key Infrastructure (PKI), Certificate Authorities, X.509 certificates, and SANs.</li>
                    <li>• Dissect the TLS 1.3 1-RTT handshake (RFC 9846) vs. TLS 1.2 and understand Perfect Forward Secrecy (PFS).</li>
                    <li>• Detect cryptographic failures: hard-coded keys, ECB mode, reused nonces, and disabled certificate checks.</li>
                  </ul>
                </div>

                <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-200/80 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-orange-900 mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-orange-600" />
                      Authoritative Standards &amp; RFCs
                    </h3>
                    <p className="text-xs text-orange-950 leading-relaxed">
                      Informed by <strong>NIST FIPS 197</strong> (AES), <strong>NIST FIPS 186-5</strong> (Digital Signature Standard), <strong>IETF RFC 9846</strong> (TLS 1.3 standard, published July 2026), <strong>RFC 5280</strong> (X.509 PKI), and <strong>OWASP Cryptographic Storage Cheat Sheet</strong>.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-orange-200/60 flex items-center justify-between text-xs text-orange-800">
                    <span className="font-semibold">Core Principle:</span>
                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-orange-200">Never Roll Your Own Crypto</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 12.2 & 12.3 CRYPTOGRAPHY FUNDAMENTALS & DISTINCTIONS */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Layers size={16} />
                <span>12.2 &amp; 12.3 Cryptography Fundamentals &amp; The Four Concepts</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Encoding vs. Encryption vs. Hashing vs. Digital Signing
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                These four mechanisms are often conflated in software development, yet each solves an entirely distinct problem:
              </p>

              {/* 4 CONCEPTS TABLE */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-8">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3.5">Technique</th>
                      <th className="p-3.5">Security Purpose</th>
                      <th className="p-3.5">Reversibility / Key Model</th>
                      <th className="p-3.5">Typical Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Encoding</td>
                      <td className="p-3.5">Data representation &amp; compatibility</td>
                      <td className="p-3.5">Reversible with <strong>no secret key</strong></td>
                      <td className="p-3.5 font-mono text-xs">Base64, URL encoding, Hex</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Encryption</td>
                      <td className="p-3.5">Confidentiality</td>
                      <td className="p-3.5">Reversible only with secret/private key</td>
                      <td className="p-3.5 font-mono text-xs">AES-256-GCM, ChaCha20-Poly1305</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Hashing</td>
                      <td className="p-3.5">Integrity &amp; change detection</td>
                      <td className="p-3.5"><strong>One-way</strong> (mathematically irreversible)</td>
                      <td className="p-3.5 font-mono text-xs">SHA-256, SHA-384, BLAKE3</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Digital Signing</td>
                      <td className="p-3.5">Origin authentication &amp; integrity</td>
                      <td className="p-3.5">Sign with Private Key; Verify with Public Key</td>
                      <td className="p-3.5 font-mono text-xs">Ed25519, RSA-PSS, ECDSA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CRITICAL DISTINCTION CALLOUT */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-stone-800 text-xs sm:text-sm">
                <h4 className="font-bold text-amber-950 mb-1 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-amber-700" />
                  Why a Hash Alone Does Not Prove Authenticity
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  A checksum or hash verifies that a file has not changed relative to an expected digest. However, if an attacker compromises a web server and replaces a software installer <em>and</em> updates the hash published on the website, the user&apos;s hash check will pass cleanly! Only a <strong>Digital Signature</strong> created with an offline private signing key can establish authentic origin.
                </p>
              </div>
            </section>

            {/* 12.4 SYMMETRIC ENCRYPTION & AEAD */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Lock size={16} />
                <span>12.4 Symmetric Encryption &amp; Authenticated Encryption (AEAD)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                AES-128/256, Block Cipher Modes &amp; Nonce Reuse Catastrophes
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Symmetric cryptography uses the same secret key for encryption and decryption. In modern application engineering, unauthenticated modes like <strong>ECB</strong> (Electronic Codebook) and <strong>CBC without HMAC</strong> are hazardous. Modern systems mandate <strong>Authenticated Encryption with Associated Data (AEAD)</strong>.
              </p>

              {/* MODES COMPARISON */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Ban size={16} className="text-red-600" />
                    Hazardous Modes: ECB &amp; Unauthenticated CBC
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-red-700 block mb-1">Electronic Codebook (ECB):</strong>
                      Encrypts each 16-byte block independently. Identical plaintext blocks produce identical ciphertext blocks, visually revealing patterns in images or databases (the infamous &quot;ECB Penguin&quot;).
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-amber-700 block mb-1">Cipher Block Chaining (CBC without MAC):</strong>
                      Vulnerable to <em>padding oracle attacks</em> (e.g. POODLE) and bit-flipping attacks because it provides confidentiality but no cryptographic integrity.
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                      <ShieldCheck size={16} className="text-emerald-600" />
                      Gold Standard: AES-GCM &amp; ChaCha20-Poly1305
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                      AEAD combines counter-mode encryption with an authentication tag (GHASH or Poly1305). It allows authenticating unencrypted metadata (Associated Data) such as headers or tenant IDs.
                    </p>
                    <div className="p-3 bg-red-50 text-red-950 rounded-xl border border-red-200 text-xs">
                      <strong>CRITICAL NONCE RULE:</strong> Never reuse a Nonce/IV with the same key in AES-GCM. A single nonce reuse allows an adversary to deduce the authentication subkey ($H$) and forge authentication tags!
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs">
                    # Modern OpenSSL AES-256-GCM CLI Encryption:<br />
                    openssl enc -aes-256-gcm -in report.pdf -out report.enc -K &lt;hex_key&gt; -iv &lt;hex_nonce&gt;
                  </div>
                </div>
              </div>
            </section>

            {/* 12.5 ASYMMETRIC CRYPTOGRAPHY & HYBRID ENCRYPTION */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <KeyRound size={16} />
                <span>12.5 Asymmetric Cryptography &amp; Hybrid Encryption</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Public/Private Keypairs, RSA vs. ECC &amp; Forward Secrecy
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Asymmetric cryptosystems utilize a public key for encryption or signature verification, and a private key for decryption or signing. Because public-key operations are computationally expensive, real-world systems use <strong>hybrid encryption</strong>.
              </p>

              {/* ALGORITHMS COMPARISON TABLE */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-bold uppercase text-orange-600 mb-1">Traditional Public Key</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">RSA (2048 - 4096 bits)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Based on the integer factorization problem. Widely compatible across legacy infrastructure, but requires large key sizes (minimum 2048 bits; 3072+ recommended).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-bold uppercase text-blue-600 mb-1">Elliptic Curve</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">ECDSA &amp; Ed25519</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Based on elliptic-curve discrete logarithms. Ed25519 (Edwards-curve) provides equivalent 128-bit security with only 256-bit keys, offering superior performance and side-channel resistance.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-xs font-bold uppercase text-emerald-600 mb-1">Key Agreement</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">ECDH / X25519</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Allows two parties to compute an identical shared secret over an untrusted channel. Used in TLS 1.3 to achieve <strong>Perfect Forward Secrecy (PFS)</strong>.
                  </p>
                </div>
              </div>

              {/* FORWARD SECRECY EXPLANATION */}
              <div className="p-5 rounded-2xl bg-stone-100/80 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-stone-700" />
                  What Perfect Forward Secrecy (PFS) Does and Does Not Do
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                  PFS generates unique ephemeral Diffie-Hellman keys for each session. If an adversary captures encrypted network traffic today and steals the server&apos;s long-term RSA/ECC private certificate five years later, they <em>cannot</em> retroactively decrypt past sessions because the ephemeral keys were discarded from memory. However, PFS does not protect endpoints if active session keys or plaintext memory were already extracted.
                </p>
              </div>
            </section>

            {/* 12.6, 12.7 & 12.8 HASHING, KDFS & SIGNATURES */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Binary size={16} />
                <span>12.6, 12.7 &amp; 12.8 Hashing, Key Derivation (KDFs) &amp; Digital Signatures</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Hash Properties, HMAC Message Authentication &amp; Digital Signatures
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <FileText size={16} className="text-orange-600" />
                    Three Invariants of Cryptographic Hashes
                  </h3>
                  <ul className="text-xs sm:text-sm text-stone-700 space-y-2">
                    <li>
                      <strong>1. Preimage Resistance (One-Way):</strong> Given digest $h$, computationally infeasible to find $m$ such that $H(m) = h$.
                    </li>
                    <li>
                      <strong>2. Second-Preimage Resistance:</strong> Given message $m_1$, infeasible to find another message $m_2$ such that $H(m_1) = H(m_2)$.
                    </li>
                    <li>
                      <strong>3. Collision Resistance:</strong> Infeasible to find <em>any</em> two arbitrary messages $x \neq y$ where $H(x) = H(y)$.
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Key size={16} className="text-blue-600" />
                    HMAC vs. Digital Signatures
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                    <div>
                      <strong>HMAC (Shared Key):</strong> Fast symmetric authentication. Both sender and receiver share the secret key; anyone holding the key can forge MACs (no non-repudiation).
                    </div>
                    <div>
                      <strong>Digital Signatures (Asymmetric):</strong> Only the private key holder can create the signature. Anyone with the public key can verify authenticity without ability to forge signatures.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 12.9 & 12.10 KEY MANAGEMENT & PUBLIC KEY INFRASTRUCTURE */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <BadgeCheck size={16} />
                <span>12.9 &amp; 12.10 Key Management &amp; Public Key Infrastructure (PKI)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                The PKI Chain of Trust, X.509 RFC 5280 &amp; SAN Hostname Verification
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                A public key on its own has no identity binding. <strong>Public Key Infrastructure (PKI)</strong> establishes trust by having trusted <strong>Certificate Authorities (CAs)</strong> digitally sign <strong>X.509 certificates</strong> that bind public keys to domain names.
              </p>

              {/* 3-TIER HIERARCHY */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-bold uppercase text-orange-600">Tier 1</span>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Root CA (Trust Anchor)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Self-signed certificate installed directly in operating system / browser trust stores. Kept strictly offline in air-gapped hardware security modules (HSMs).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-bold uppercase text-blue-600">Tier 2</span>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Intermediate CA</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Signed by Root CA. Performs routine online issuance of end-entity certificates. Isolates the root key from daily operational risks.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-bold uppercase text-emerald-600">Tier 3</span>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">End-Entity (Server Cert)</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Binds public key to specific DNS domain names listed in <strong>Subject Alternative Name (SAN)</strong>. Short-lived validity (typically 90 to 398 days).
                  </p>
                </div>
              </div>

              {/* RFC 5280 SAN MANDATE */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-stone-800 text-xs sm:text-sm">
                <h4 className="font-bold text-blue-950 mb-1 flex items-center gap-2">
                  <Globe size={16} className="text-blue-700" />
                  RFC 5280: Common Name (CN) is Deprecated — SAN is Mandatory
                </h4>
                <p className="text-stone-700 leading-relaxed">
                  Modern web browsers and TLS clients validate hostnames strictly against the <strong>Subject Alternative Name (SAN)</strong> extension (e.g. <code>DNS:prepspaces.com</code>, <code>DNS:*.prepspaces.com</code>). The legacy <code>Common Name (CN)</code> field in the Subject DN is ignored for domain matching.
                </p>
              </div>
            </section>

            {/* 12.11 TRANSPORT LAYER SECURITY (TLS 1.3 VS 1.2) */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Zap size={16} />
                <span>12.11 Transport Layer Security (TLS 1.3 &amp; RFC 9846)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                TLS 1.3 1-RTT Handshake, AEAD Cipher Suites &amp; HSTS
              </h2>

              <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-6">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3.5">Protocol Feature</th>
                      <th className="p-3.5">TLS 1.2 (RFC 5246)</th>
                      <th className="p-3.5">TLS 1.3 (RFC 9846, July 2026)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Handshake Latency</td>
                      <td className="p-3.5 text-stone-600">2-RTT before application data</td>
                      <td className="p-3.5 font-bold text-emerald-700">1-RTT (0-RTT with Early Data)</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Cipher Suites</td>
                      <td className="p-3.5 text-stone-600">37+ legacy suites (CBC, RC4, 3DES)</td>
                      <td className="p-3.5 font-bold text-emerald-700">Only 5 AEAD suites (GCM, ChaCha20, CCM)</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Handshake Encryption</td>
                      <td className="p-3.5 text-stone-600">Certificates sent in cleartext</td>
                      <td className="p-3.5 font-bold text-emerald-700">Certificates and extensions are ENCRYPTED</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Forward Secrecy</td>
                      <td className="p-3.5 text-stone-600">Optional (RSA key exchange allowed)</td>
                      <td className="p-3.5 font-bold text-emerald-700">MANDATORY (Ephemeral ECDH / DHE only)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 12.12 CRYPTOGRAPHIC VULNERABILITIES */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <ShieldAlert size={16} />
                <span>12.12 Common Cryptographic Vulnerabilities</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Implementation Pitfalls &amp; Defensive Measures
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-red-600 font-bold text-xs uppercase mb-1">Vulnerability 1</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Hard-Coded Secret Keys</h4>
                  <p className="text-xs text-stone-600">
                    Embedding encryption keys in source code or mobile binaries. Solution: use HashiCorp Vault or cloud KMS.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-red-600 font-bold text-xs uppercase mb-1">Vulnerability 2</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Reused AES-GCM Nonces</h4>
                  <p className="text-xs text-stone-600">
                    Reusing IVs leaks the authentication hash key. Solution: enforce cryptographically random 96-bit nonces or deterministic counter state.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="text-red-600 font-bold text-xs uppercase mb-1">Vulnerability 3</div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Disabled TLS Cert Checks</h4>
                  <p className="text-xs text-stone-600">
                    Setting <code>rejectUnauthorized: false</code> to silence dev errors opens apps to trivial AiTM eavesdropping.
                  </p>
                </div>
              </div>
            </section>

            {/* 12.13 PRACTICAL LAB */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Terminal size={16} />
                <span>12.13 Practical Lab: Cryptographic Verification &amp; Inspection</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Hands-on OpenSSL Exercises &amp; Lab Reporting (Labs A to F)
              </h2>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <ClipboardList size={16} className="text-orange-600" />
                    Lab Report Recorder (Lab 12.13 F)
                  </h3>
                  <button
                    onClick={copyLabReport}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    <Copy size={13} />
                    <span>Copy Lab Report</span>
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Exercise Name:</label>
                    <input
                      type="text"
                      value={labReportExercise}
                      onChange={(e) => setLabReportExercise(e.target.value)}
                      className="w-full p-2 rounded-lg border border-stone-300 bg-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Outcome Status:</label>
                    <div className="flex items-center gap-2">
                      {["Passed", "Failed", "Requires Investigation"].map((st) => (
                        <button
                          key={st}
                          onClick={() => setLabReportOutcome(st)}
                          className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                            labReportOutcome === st
                              ? st === "Passed"
                                ? "bg-emerald-600 text-white"
                                : "bg-red-600 text-white"
                              : "bg-white border text-stone-600"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Evidence &amp; Observations:</label>
                    <textarea
                      rows={2}
                      value={labReportEvidence}
                      onChange={(e) => setLabReportEvidence(e.target.value)}
                      className="w-full p-2 rounded-lg border border-stone-300 bg-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-stone-700 block mb-1">Remediation / Next Action:</label>
                    <textarea
                      rows={2}
                      value={labReportRemediation}
                      onChange={(e) => setLabReportRemediation(e.target.value)}
                      className="w-full p-2 rounded-lg border border-stone-300 bg-white font-mono"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: SIMULATOR 1 - AES-GCM & NONCE REUSE HAZARD                        */}
        {/* ========================================================================= */}
        {activeTab === "gcm-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-orange-100 text-orange-800 border border-orange-200">
                    Interactive Simulator 1
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    AES-GCM Authenticated Encryption &amp; Nonce Reuse Hazard Sandbox
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Inspect how AES-GCM combines ciphertext encryption with GHASH authentication tags, and observe what happens when nonces are dangerously reused.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setReuseNonceScenario(!reuseNonceScenario)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      reuseNonceScenario ? "bg-red-600 text-white shadow-xs" : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    {reuseNonceScenario ? "Hazard: Nonce Reused!" : "Safe: Unique Nonce"}
                  </button>
                  <button
                    onClick={() => setTamperCiphertext(!tamperCiphertext)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      tamperCiphertext ? "bg-red-600 text-white shadow-xs" : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    {tamperCiphertext ? "Tampered Ciphertext" : "Original Ciphertext"}
                  </button>
                </div>
              </div>

              {/* INPUT FIELDS */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-1">Plaintext Input</label>
                  <input
                    type="text"
                    value={gcmPlaintext}
                    onChange={(e) => setGcmPlaintext(e.target.value)}
                    className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-1">
                    96-Bit Nonce / IV {reuseNonceScenario ? "(STATIC REUSE DANGER)" : "(UNIQUE)"}
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={reuseNonceScenario ? "1029384756ab (STATIC)" : gcmNonce}
                    className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-1">Associated Data (AAD)</label>
                  <input
                    type="text"
                    value={gcmAad}
                    onChange={(e) => setGcmAad(e.target.value)}
                    className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                  />
                </div>
              </div>

              {/* CRYPTOGRAPHIC OUTPUTS */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3 mb-6">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400"># AES-256-GCM Ciphertext Output:</span>
                  <span className="text-emerald-400 break-all">{gcmSimulation.ciphertext}</span>
                </div>
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400"># 128-Bit GHASH Authentication Tag:</span>
                  <span className="text-amber-300 font-bold">{gcmSimulation.authTag}</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1"># Decryption &amp; Integrity Verification:</span>
                  <div className={gcmSimulation.integrityValid ? "text-emerald-400 font-sans text-sm" : "text-red-400 font-sans text-sm font-bold"}>
                    {gcmSimulation.decryptedText}
                  </div>
                </div>
              </div>

              {/* ADVISORY BANNER */}
              {gcmSimulation.alertMessage && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-300 text-red-950 text-xs sm:text-sm flex items-start gap-3">
                  <AlertTriangle size={18} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase text-[10px] tracking-wider block mb-1">Security Alert</span>
                    {gcmSimulation.alertMessage}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SIMULATOR 2 - PKI CHAIN & SAN VALIDATOR                           */}
        {/* ========================================================================= */}
        {activeTab === "pki-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-blue-100 text-blue-800 border border-blue-200">
                    Interactive Simulator 2
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    X.509 PKI Certificate Chain of Trust &amp; Hostname (SAN) Validator
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Trace the 3-tier certificate path from Root CA down to the server certificate, test hostnames against SAN extensions, and observe validation errors.
                  </p>
                </div>
              </div>

              {/* TEST PROBE CONTROLS */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Requested Hostname (SNI)</label>
                  <input
                    type="text"
                    value={targetHostname}
                    onChange={(e) => setTargetHostname(e.target.value)}
                    className="w-full text-xs font-mono font-bold p-2.5 rounded-xl border border-stone-300 bg-white"
                  />
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => setTargetHostname("prepspaces.com")}
                      className="px-2 py-1 rounded bg-white border text-[11px] hover:bg-stone-100"
                    >
                      prepspaces.com
                    </button>
                    <button
                      onClick={() => setTargetHostname("api.prepspaces.com")}
                      className="px-2 py-1 rounded bg-white border text-[11px] hover:bg-stone-100"
                    >
                      api.prepspaces.com
                    </button>
                    <button
                      onClick={() => setTargetHostname("untrusted-phish.com")}
                      className="px-2 py-1 rounded bg-red-50 text-red-700 border border-red-200 text-[11px]"
                    >
                      untrusted-phish.com
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Simulated Certificate State</label>
                  <select
                    value={pkiScenario}
                    onChange={(e) => setPkiScenario(e.target.value)}
                    className="w-full text-xs font-bold p-2.5 rounded-xl border border-stone-300 bg-white"
                  >
                    <option value="valid">Valid &amp; Trusted Certificate Chain</option>
                    <option value="untrusted_root">Untrusted / Missing Root CA (Self-Signed)</option>
                    <option value="expired">Expired Certificate (Date Expired)</option>
                    <option value="revoked">Revoked Certificate (OCSP Revoked)</option>
                  </select>
                </div>
              </div>

              {/* 3-TIER CERTIFICATE CHAIN VISUALIZER */}
              <div className="space-y-3 mb-6">
                {/* ROOT CA */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900">{certChainData.rootCa.name}</div>
                      <div className="text-xs text-stone-500">
                        {certChainData.rootCa.type} • {certChainData.rootCa.key}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      certChainData.rootCa.trustedInStore
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {certChainData.rootCa.trustedInStore ? "Trusted Anchor" : "Untrusted Root"}
                  </span>
                </div>

                {/* INTERMEDIATE CA */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between ml-4 sm:ml-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900">{certChainData.intermediateCa.name}</div>
                      <div className="text-xs text-stone-500">
                        Signed by {certChainData.intermediateCa.issuer}
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                    Intermediate CA
                  </span>
                </div>

                {/* SERVER CERT */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between ml-8 sm:ml-16">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      3
                    </div>
                    <div>
                      <div className="font-bold text-sm text-stone-900">{certChainData.serverCert.subject}</div>
                      <div className="text-xs text-stone-500 font-mono">
                        SAN: {certChainData.serverCert.san.join(", ")} • Validity: {certChainData.serverCert.validity}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      certChainData.serverCert.revocationStatus.includes("REVOKED")
                        ? "bg-red-100 text-red-800"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {certChainData.serverCert.revocationStatus}
                  </span>
                </div>
              </div>

              {/* VALIDATION VERDICT */}
              <div
                className={`p-5 rounded-2xl border ${
                  certChainData.status === "SECURE"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-red-50 border-red-300 text-red-950 font-medium"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {certChainData.status === "SECURE" ? (
                    <BadgeCheck size={20} className="text-emerald-600 shrink-0" />
                  ) : (
                    <ShieldAlert size={20} className="text-red-600 shrink-0" />
                  )}
                  <h4 className="text-base font-bold">
                    Validation Outcome: {certChainData.status === "SECURE" ? "TLS CONNECTION SECURED" : "TLS HANDSHAKE ABORTED"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">{certChainData.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SIMULATOR 3 - TLS 1.3 VS 1.2 HANDSHAKE                            */}
        {/* ========================================================================= */}
        {activeTab === "tls-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Interactive Simulator 3
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    TLS 1.3 1-RTT Handshake vs. TLS 1.2 2-RTT Handshake Dissector
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Trace packet exchanges in real time to see how TLS 1.3 cuts connection latency in half and encrypts the entire handshake transcript.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setTlsVersion("tls13");
                      setHandshakeStep(1);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      tlsVersion === "tls13" ? "bg-emerald-600 text-white shadow-xs" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    TLS 1.3 (RFC 9846, 1-RTT)
                  </button>
                  <button
                    onClick={() => {
                      setTlsVersion("tls12");
                      setHandshakeStep(1);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      tlsVersion === "tls12" ? "bg-blue-600 text-white shadow-xs" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    TLS 1.2 (Legacy, 2-RTT)
                  </button>
                </div>
              </div>

              {/* TIMELINE STEPS */}
              <div className="space-y-4 mb-6">
                {tlsHandshakeSteps.map((item) => (
                  <div
                    key={item.step}
                    className={`p-4 rounded-2xl border transition-all ${
                      item.step <= handshakeStep
                        ? "bg-stone-50 border-stone-300 shadow-xs"
                        : "bg-white/40 border-stone-200 opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                        Step {item.step} • {item.sender}
                      </span>
                      <span className="text-xs font-mono font-bold text-stone-500">
                        {tlsVersion === "tls13" && item.step >= 2 ? "ENCRYPTED" : "PLAINTEXT"}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-stone-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* CONTROL BUTTONS */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <button
                  onClick={() => setHandshakeStep(1)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold border hover:bg-stone-100"
                >
                  Reset Handshake
                </button>
                <button
                  onClick={() => setHandshakeStep((prev) => Math.min(prev + 1, 4))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-900 text-white hover:bg-stone-800 shadow-xs"
                >
                  Advance Handshake ({handshakeStep}/4)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: SIMULATOR 4 - DIGITAL SIGNATURE & TAMPER LAB                      */}
        {/* ========================================================================= */}
        {activeTab === "sig-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-800 border border-amber-200">
                    Interactive Simulator 4
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    Digital Signature Signing, Verification &amp; Tamper Detection
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Sign a message with a private key, verify it with a public key, and test how even a single-byte alteration instantly breaks verification.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTamperMessage(!tamperMessage)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      tamperMessage ? "bg-red-600 text-white shadow-xs" : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    {tamperMessage ? "Tampered Message" : "Original Message"}
                  </button>
                  <button
                    onClick={() => setTamperSignature(!tamperSignature)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      tamperSignature ? "bg-red-600 text-white shadow-xs" : "bg-stone-200 text-stone-700"
                    }`}
                  >
                    {tamperSignature ? "Corrupted Signature" : "Valid Signature"}
                  </button>
                </div>
              </div>

              {/* MESSAGE EDITOR */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Message to Sign</label>
                <input
                  type="text"
                  value={tamperMessage ? sigMessage + " [MODIFIED BY ATTACKER]" : sigMessage}
                  onChange={(e) => setSigMessage(e.target.value)}
                  className="w-full text-xs font-mono font-bold p-2.5 rounded-xl border border-stone-300 bg-white"
                />
              </div>

              {/* CRYPTOGRAPHIC SIGNATURE OUTPUT */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs space-y-3 mb-6">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="text-stone-400"># Signing Algorithm:</span>
                  <span className="text-amber-400">{sigAlgorithm} (Edwards-curve Digital Signature)</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1"># Digital Signature (Base64):</span>
                  <div className="text-emerald-400 break-all">
                    {tamperSignature
                      ? "ZDI5c2JHOW5JSE55ZFdOMGRYSmxMbk4wYjJGNFpHbHVadz09WlhwbWJHbHZibVU9"
                      : "ZXhwbG9pdF9wcm90ZWN0aW9uX3NpZ192ZXJpZmllZF9iYXR0bGV0ZXN0X3N1Y2Nlc3M="}
                  </div>
                </div>
              </div>

              {/* VERIFICATION RESULT */}
              <div
                className={`p-5 rounded-2xl border ${
                  sigOutcome.verified
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-red-50 border-red-300 text-red-950 font-medium"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {sigOutcome.verified ? (
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                  ) : (
                    <AlertTriangle size={20} className="text-red-600 shrink-0" />
                  )}
                  <h4 className="text-base font-bold">{sigOutcome.statusText}</h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">{sigOutcome.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: MODULE 12 QUIZ (10 QUESTIONS FROM 12.14)                          */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-purple-100 text-purple-800 border border-purple-200">
                    Knowledge Assessment
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    Module 12 Comprehensive Quiz ({Object.keys(selectedAnswers).length} of 10 Answered)
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Evaluate your mastery of symmetric encryption (AES-GCM), asymmetric keypairs, PKI certificate chains, and TLS 1.3 handshakes.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border border-stone-200 text-stone-600 hover:bg-stone-50"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                  <button
                    onClick={() => setShowQuizResults(true)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-700 shadow-xs"
                  >
                    <CheckCircle2 size={14} />
                    <span>Check Answers</span>
                  </button>
                </div>
              </div>

              {/* QUESTIONS */}
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isCorrect = selectedAnswers[q.id] === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        showQuizResults
                          ? isCorrect
                            ? "bg-emerald-50/50 border-emerald-300"
                            : "bg-red-50/50 border-red-300"
                          : "bg-stone-50/80 border-stone-200"
                      }`}
                    >
                      <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-3">
                        {idx + 1}. {q.question}
                      </h4>

                      <div className="space-y-2 mb-3">
                        {q.options.map((option, optIdx) => {
                          const isSelected = selectedAnswers[q.id] === optIdx;
                          let optStyle = "bg-white border-stone-200 text-stone-800 hover:border-stone-300";

                          if (showQuizResults) {
                            if (optIdx === q.correctIndex) {
                              optStyle = "bg-emerald-100/80 border-emerald-400 font-bold text-emerald-950";
                            } else if (isSelected) {
                              optStyle = "bg-red-100/80 border-red-400 font-bold text-red-950";
                            }
                          } else if (isSelected) {
                            optStyle = "bg-purple-100 border-purple-400 font-bold text-purple-950 shadow-xs";
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={showQuizResults}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optStyle}`}
                            >
                              <span>{option}</span>
                              {isSelected && !showQuizResults && <Check size={14} className="text-purple-600" />}
                              {showQuizResults && optIdx === q.correctIndex && (
                                <Check size={14} className="text-emerald-700" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className="mt-3 p-3 rounded-xl bg-white/80 border border-stone-200 text-xs sm:text-sm text-stone-700">
                          <span className="font-bold text-stone-900 block mb-1">Explanation:</span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* SCORE BANNER */}
              {showQuizResults && (
                <div className="mt-8 p-6 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Quiz Results</h3>
                    <p className="text-xs sm:text-sm text-stone-300">
                      You scored {quizScore} out of 10 correct ({Math.round((quizScore / 10) * 100)}%).
                    </p>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-stone-900 hover:bg-stone-100"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* NOVA AI TUTOR DRAWER */}
      <LearningRo
        isOpen={showAiTutor}
        onClose={() => setShowAiTutor(false)}
        topic="Module 12: Cryptography, Encryption, Hashing, PKI, TLS, and Digital Certificates"
        topicContext={`
          This is Module 12 of the Prepspaces Cybersecurity Master Course.
          Key themes:
          - Encoding (Base64) vs Encryption (AES) vs Hashing (SHA-256) vs Digital Signing (Ed25519).
          - Symmetric Ciphers: AES-128/192/256. Block cipher modes (ECB vulnerabilities, CBC padding oracles, CTR keystream).
          - Authenticated Encryption with Associated Data (AEAD): AES-GCM and ChaCha20-Poly1305. Nonce uniqueness rule and why GCM nonce reuse destroys authenticity.
          - Asymmetric Cryptography: RSA-PSS, ECC (ECDSA, Ed25519), ECDH/X25519 key agreement, Perfect Forward Secrecy (PFS).
          - Cryptographic Hashing: Preimage, Second-preimage, Collision resistance. SHA-256 vs SHA-3. HMAC message authentication codes.
          - Key Management Lifecycle: Generation, storage (HSM, KMS), DEK vs KEK wrapping, rotation, compromise response (NIST SP 800-57).
          - PKI: Certificate Authority (Root CA -> Intermediate CA -> Server Cert), X.509 RFC 5280, SAN hostname verification, CRL, OCSP.
          - TLS 1.3 (RFC 9846, July 2026): 1-RTT handshake, encrypted handshake transcript, mandatory PFS, only 5 AEAD cipher suites, HSTS, mixed content.
          - Common Vulnerabilities: Hardcoded keys, GCM nonce reuse, ECB mode, disabled certificate checks.
        `}
      />
    </div>
  );
}
