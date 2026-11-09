// projectx/src/Componets/DataEngineeringSecurity.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  ShieldAlert,
  Lock,
  Key,
  EyeOff,
  UserCheck,
  Scale,
  FileText,
  Search,
  Filter,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  BookOpen,
  Cpu,
  Layers,
  Database,
  Sliders,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Server,
  Cloud,
  FileSpreadsheet,
  AlertOctagon,
  Eye,
  CheckCircle,
  XCircle,
  Activity,
  Boxes,
  SlidersHorizontal,
  Code2,
  HardDrive
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";
import { SecuritySection, securitySectionsMeta } from "./DataEngineeringSecuritySections";

export default function DataEngineeringSecurity() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning");

  // Mode switcher tab: 'curriculum' (Specification & Blueprints) | 'workbench' (Interactive Workbenches)
  const [activeTab, setActiveTab] = useState("curriculum");
  const [activeWorkbench, setActiveWorkbench] = useState("classification_scanner");
  // 'classification_scanner' | 'crypto_privacy_lab' | 'envelope_encryption_sim' | 'access_policy_engine' | 'regulatory_dsr_orchestrator' | 'stride_threat_quiz'

  // Curriculum section state
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filtered sections for curriculum
  const categories = useMemo(() => {
    const set = new Set(securitySectionsMeta.map((s) => s.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filteredSections = useMemo(() => {
    return securitySectionsMeta.filter((s) => {
      const matchCat =
        selectedCategory === "all" || s.category === selectedCategory;
      const matchQuery =
        !searchQuery ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  // --------------------------------------------------------------------------
  // WORKBENCH 1: Data Classification & PII Discovery Scanner
  // --------------------------------------------------------------------------
  const [scanDataset, setScanDataset] = useState("customers"); // 'customers' | 'orders' | 'logs'
  const [isScanning, setIsScanning] = useState(false);
  const [scanCompleted, setScanCompleted] = useState(false);

  const rawSampleRecords = {
    customers: [
      { id: "C001", name: "Rahul Sharma", email: "rahul@gmail.com", phone: "+91 9876543210", gov_id: "XXXX-XXXX-4912", zip: "411057", diagnosis: "Type 2 Diabetes", salary: "₹85,000" },
      { id: "C002", name: "Amit Patel", email: "amit.p@outlook.com", phone: "+91 9123456789", gov_id: "XXXX-XXXX-8319", zip: "400001", diagnosis: "None", salary: "₹1,20,000" },
      { id: "C003", name: "Priya Nair", email: "priya.nair@corp.in", phone: "+91 9445566778", gov_id: "XXXX-XXXX-1102", zip: "560001", diagnosis: "Hypertension", salary: "₹95,000" }
    ],
    orders: [
      { id: "ORD-901", customer_id: "C001", amount: "₹4,500", status: "completed", payment_method: "Credit Card (Visa *4021)", order_date: "2026-11-08" },
      { id: "ORD-902", customer_id: "C002", amount: "₹12,800", status: "completed", payment_method: "UPI (amit@okaxis)", order_date: "2026-11-09" }
    ],
    logs: [
      { log_id: "L101", ip_address: "192.168.1.45", session_id: "SES-8812", user_agent: "Mozilla/5.0 Mac", timestamp: "14:22:01", status_code: "200" },
      { log_id: "L102", ip_address: "103.21.58.12", session_id: "SES-9941", user_agent: "Chrome Windows", timestamp: "14:23:40", status_code: "403" }
    ]
  };

  const handleRunScan = () => {
    setIsScanning(true);
    setScanCompleted(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanCompleted(true);
    }, 700);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 2: Cryptographic Privacy Laboratory (HMAC, Masking & K-Anonymity)
  // --------------------------------------------------------------------------
  const [cryptoTool, setCryptoTool] = useState("hmac"); // 'hmac' | 'masking' | 'kanonymity'
  const [hmacInputId, setHmacInputId] = useState("C001");
  const [hmacSecretKey, setHmacSecretKey] = useState("KmsEnterpriseSecretKey_2026");

  // Masking states
  const [maskType, setMaskType] = useState("phone"); // 'phone' | 'email' | 'card'

  // K-Anonymity States
  const [ageGeneralization, setAgeGeneralization] = useState("exact"); // 'exact' | 'bands'
  const [zipSuppression, setZipSuppression] = useState("full"); // 'full' | 'prefix'

  const pseudoHmacDigest = useMemo(() => {
    let hash = 0;
    const combined = hmacSecretKey + "::" + hmacInputId;
    for (let i = 0; i < combined.length; i++) {
      hash = (hash << 5) - hash + combined.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, "0");
    return `TOK_SHA256_` + hex + "8f3a9e2d" + hex.slice(0, 4);
  }, [hmacInputId, hmacSecretKey]);

  const kAnonymityData = useMemo(() => {
    const raw = [
      { id: "U1", age: 23, zip: "411057", disease: "Flu" },
      { id: "U2", age: 24, zip: "411058", disease: "Asthma" },
      { id: "U3", age: 28, zip: "411059", disease: "Diabetes" },
      { id: "U4", age: 41, zip: "400001", disease: "Hypertension" },
      { id: "U5", age: 43, zip: "400002", disease: "Cardiac" },
      { id: "U6", age: 45, zip: "400003", disease: "Flu" }
    ];

    return raw.map((r) => {
      let displayAge = r.age.toString();
      if (ageGeneralization === "bands") {
        displayAge = r.age < 30 ? "20-29" : "40-49";
      }

      let displayZip = r.zip;
      if (zipSuppression === "prefix") {
        displayZip = r.zip.slice(0, 3) + "***";
      }

      return {
        ...r,
        displayAge,
        displayZip
      };
    });
  }, [ageGeneralization, zipSuppression]);

  const calculatedKValue = useMemo(() => {
    if (ageGeneralization === "bands" && zipSuppression === "prefix") return 3;
    if (ageGeneralization === "bands" || zipSuppression === "prefix") return 1;
    return 1;
  }, [ageGeneralization, zipSuppression]);

  // --------------------------------------------------------------------------
  // WORKBENCH 3: Cloud Security & Envelope Encryption Simulator (AWS KMS)
  // --------------------------------------------------------------------------
  const [envelopeStage, setEnvelopeStage] = useState(1); // 1: GenerateDataKey, 2: Encrypt Data, 3: Zero Plaintext DEK, 4: S3 Stored
  const [s3BlockPublicAccess, setS3BlockPublicAccess] = useState(true);
  const [kmsKeyRotationEnabled, setKmsKeyRotationEnabled] = useState(true);
  const [currentKekVersion, setCurrentKekVersion] = useState("v2 (Rotated 2026)");
  const [isEncryptingEnvelope, setIsEncryptingEnvelope] = useState(false);

  const runEnvelopeSimulation = () => {
    setIsEncryptingEnvelope(true);
    setEnvelopeStage(1);
    setTimeout(() => {
      setEnvelopeStage(2);
      setTimeout(() => {
        setEnvelopeStage(3);
        setTimeout(() => {
          setEnvelopeStage(4);
          setIsEncryptingEnvelope(false);
        }, 600);
      }, 600);
    }, 600);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 4: RBAC vs ABAC Unified Policy Engine
  // --------------------------------------------------------------------------
  const [subjectRole, setSubjectRole] = useState("analyst"); // 'analyst' | 'engineer' | 'admin' | 'auditor'
  const [subjectDept, setSubjectDept] = useState("marketing"); // 'marketing' | 'finance' | 'security'
  const [subjectNetwork, setSubjectNetwork] = useState("corp_vpn"); // 'corp_vpn' | 'public_internet'
  const [subjectMfa, setSubjectMfa] = useState(true);
  const [subjectTime, setSubjectTime] = useState("work_hours"); // 'work_hours' | 'after_hours'
  const [targetResource, setTargetResource] = useState("curated_sales"); // 'public_catalog' | 'curated_sales' | 'raw_customer_pii' | 'payroll'

  const policyEvaluation = useMemo(() => {
    // ABAC rule set:
    // 1. public_catalog: Allowed for anyone authenticated
    if (targetResource === "public_catalog") {
      return {
        decision: "ALLOW",
        reason: "Public data resource policy: Read access is globally permitted for all authenticated users.",
        layer: "Resource Classification Policy (Level 1 - Public)"
      };
    }

    // 2. Network & MFA check (Zero Trust constraint)
    if (!subjectMfa) {
      return {
        decision: "DENY",
        reason: "Zero Trust Constraint: Multi-Factor Authentication (MFA) is strictly required for non-public data.",
        layer: "Identity Security Layer (MFA Check Failed)"
      };
    }

    if (subjectNetwork === "public_internet") {
      return {
        decision: "DENY",
        reason: "Environmental ABAC Constraint: Access to internal/confidential datasets is blocked from public untrusted IP networks. Corporate VPN required.",
        layer: "Environmental Network Boundary Policy"
      };
    }

    // 3. raw_customer_pii: Restricted to security admins or engineers with specific business justification
    if (targetResource === "raw_customer_pii") {
      if (subjectRole === "admin" && subjectDept === "security") {
        return {
          decision: "ALLOW",
          reason: "ABAC Exception: Security Administrator on corporate network with MFA is authorized for raw PII audits.",
          layer: "Restricted Resource Policy (Level 4)"
        };
      }
      return {
        decision: "DENY",
        reason: "Access Denied: Raw PII is restricted (Level 4). Role 'analyst' or non-security departments must access Masked/Pseudonymized views only.",
        layer: "Data Privacy & Minimization Policy"
      };
    }

    // 4. payroll: Restricted to finance department
    if (targetResource === "payroll") {
      if (subjectDept === "finance") {
        return {
          decision: "ALLOW",
          reason: "ABAC Department Match: Subject department 'finance' authorized to read confidential payroll dataset.",
          layer: "Attribute-Based Department Matching Rule"
        };
      }
      return {
        decision: "DENY",
        reason: "Access Denied: Subject department does not match resource owner department ('finance').",
        layer: "ABAC Resource Ownership Enforcement"
      };
    }

    // 5. curated_sales: Available to analysts and engineers during work hours
    if (targetResource === "curated_sales") {
      if (subjectRole === "analyst" || subjectRole === "engineer" || subjectRole === "admin") {
        if (subjectTime === "after_hours" && subjectRole !== "admin") {
          return {
            decision: "DENY",
            reason: "Time-of-day ABAC Restriction: Standard analysts are restricted from exporting curated sales data after business hours.",
            layer: "Temporal Access Control Policy"
          };
        }
        return {
          decision: "ALLOW",
          reason: "RBAC + ABAC Verified: User role has 'read_curated' and meets network, MFA, and business hours conditions.",
          layer: "Unified RBAC + ABAC Authorization Layer"
        };
      }
      return {
        decision: "DENY",
        reason: "Role does not possess permissions to access curated analytics datasets.",
        layer: "RBAC Permission Matrix Check"
      };
    }

    return { decision: "DENY", reason: "Default Deny: No matching permissive policy rule found.", layer: "Default Deny Baseline" };
  }, [subjectRole, subjectDept, subjectNetwork, subjectMfa, subjectTime, targetResource]);

  // --------------------------------------------------------------------------
  // WORKBENCH 5: Multi-Jurisdiction Regulatory Matrix & DSR Erasure Orchestrator
  // --------------------------------------------------------------------------
  const [activeRegTab, setActiveRegTab] = useState("matrix"); // 'matrix' | 'dsr_orchestrator'
  const [dsrCustomerId, setDsrCustomerId] = useState("C-9402");
  const [dsrStatus, setDsrStatus] = useState("idle"); // 'idle' | 'scanning' | 'legal_hold_check' | 'erasing' | 'completed'
  const [dsrLogs, setDsrLogs] = useState([]);

  const executeDsrErasure = () => {
    setDsrStatus("scanning");
    setDsrLogs([
      `[DSR Coordinator] Received verified Right-to-Erasure request for Data Principal: ${dsrCustomerId}`,
      "[Identity Verification] Cryptographic challenge verified via registered Aadhaar/OTP consent manager."
    ]);

    setTimeout(() => {
      setDsrStatus("legal_hold_check");
      setDsrLogs((prev) => [
        ...prev,
        "[Catalog Lineage Trace] Scanning datastores: PostgreSQL (OLTP), S3 Raw (Lake), S3 Curated (Lake), Amazon Redshift (DWH)...",
        "⚠️ Legal Hold Detected: Customer has 2 tax invoices from FY 2024-25. Statutory tax laws mandate 7-year retention.",
        "[Policy Action] Applying Cryptographic Isolation: Invoices segregated into cold immutable archive with operational query locks."
      ]);

      setTimeout(() => {
        setDsrStatus("erasing");
        setDsrLogs((prev) => [
          ...prev,
          "[PostgreSQL] Deleted row from 'customers' and 'customer_profiles' table.",
          "[S3 Raw] Rewrote Parquet chunks under 's3://lake-raw/customers/' omitting customer records.",
          "[S3 Curated] Spark compaction completed without customer records.",
          "[Lake Formation] Revoked individual data cell permissions."
        ]);

        setTimeout(() => {
          setDsrStatus("completed");
          setDsrLogs((prev) => [
            ...prev,
            "✅ DSR Erasure Completed: Non-essential personal data permanently expunged across all 4 pipeline layers.",
            `[Verification Receipt] Cryptographic Proof Hash: SHA256:d8a9f3e4b1c270e5... Issued to Data Principal.`
          ]);
        }, 800);
      }, 900);
    }, 800);
  };

  // --------------------------------------------------------------------------
  // WORKBENCH 6: STRIDE Threat Modeling Studio & 15-Question Curriculum Quiz
  // --------------------------------------------------------------------------
  const [selectedStrideThreat, setSelectedStrideThreat] = useState("S"); // 'S' | 'T' | 'R' | 'I' | 'D' | 'E'

  const strideDetails = {
    S: {
      name: "Spoofing (Identity Impersonation)",
      threat: "An external attacker or rogue service uses stolen credentials or fake instance metadata to impersonate an authorized Glue ETL job.",
      impact: "Unauthorized access to confidential data lake zones and unauthorized batch extractions.",
      countermeasures: "AWS IAM Roles for Service Accounts (IRSA), short-lived STS temporary credentials via OIDC, mutual TLS (mTLS), and disabling static long-lived access keys."
    },
    T: {
      name: "Tampering (Data Modification)",
      threat: "An unauthorized insider or compromised database user updates historical sales figures or alters data lake Parquet files in transit or at rest.",
      impact: "Data corruption, financial misreporting, compromised machine learning models, and loss of business integrity.",
      countermeasures: "SHA-256 cryptographic hashes, HMAC integrity checks, S3 Object Lock (WORM compliance), TLS in transit, and immutable ledger logging."
    },
    R: {
      name: "Repudiation (Denying Actions)",
      threat: "A privileged DBA drops a critical customer table or exports PII, then deletes database audit logs to deny performing the operation.",
      impact: "Inability to conduct forensic investigations, regulatory penalties, and breach notification failure.",
      countermeasures: "Immutable multi-region AWS CloudTrail audit logs delivered to an isolated S3 bucket protected with S3 Object Lock and KMS encryption, with CloudWatch alerts on LogStream modifications."
    },
    I: {
      name: "Information Disclosure (Data Leakage)",
      threat: "An engineer mistakenly sets an S3 data lake bucket ACL to 'Public' or an ETL error writes unmasked phone numbers into an unencrypted analytics bucket.",
      impact: "Massive public data breach, brand reputation collapse, GDPR/DPDP regulatory penalties (up to ₹250 Crore / €20M).",
      countermeasures: "S3 Block Public Access enabled organization-wide, KMS envelope encryption at rest, Amazon Macie automated sensitive data discovery, and dynamic data masking views."
    },
    D: {
      name: "Denial of Service (DoS)",
      threat: "Malicious actors or runaway recursive Spark jobs flood the ingestion API or Athena query queue with millions of concurrent queries, exhausting compute quotas.",
      impact: "Production pipeline failures, missing SLAs for business reporting, and extreme cloud infrastructure cost spikes.",
      countermeasures: "API Gateway rate limiting, AWS WAF, token bucket throttling, Athena workgroup query concurrency limits, and budget alarm auto-stoppers."
    },
    E: {
      name: "Elevation of Privilege",
      threat: "A junior business analyst with read-only access abuses an overly permissive IAM policy (`iam:PassRole` or wildcard `s3:*`) to assume the Administrator role.",
      impact: "Complete infrastructure takeover, unauthorized data deletion, and credential compromise.",
      countermeasures: "Principle of Least Privilege, default deny baseline, IAM Permission Boundaries, AWS Service Control Policies (SCPs), and quarterly automated IAM Access Analyzer reviews."
    }
  };

  // 15-Question Curriculum Quiz State
  const quizQuestions = [
    {
      q: "What is the primary operational difference between a standard cryptographic hash (e.g., SHA-256) and a Hash-based Message Authentication Code (HMAC-SHA256)?",
      options: [
        "HMAC incorporates a secret cryptographic key, making it resistant to rainbow table attacks and suitable for secure, keyed pseudonymization, whereas a bare hash produces identical digests for any observer",
        "SHA-256 is reversible back to plaintext, whereas HMAC cannot be reversed under any circumstance",
        "SHA-256 can only hash numeric data, while HMAC is required for strings and JSON documents",
        "HMAC operates exclusively on quantum computers"
      ],
      answer: 0,
      exp: "A bare cryptographic hash (like SHA-256) is deterministic and public; an attacker with a dictionary or rainbow table can easily compute hashes of known values (e.g., phone numbers or common customer IDs) to re-identify records. HMAC introduces a secret key (K) into the hashing algorithm (HMAC(K, m)), ensuring that only entities in possession of the secret key can generate or verify the pseudonymized tokens."
    },
    {
      q: "According to NIST SP 800-207 Zero Trust Architecture, what is the core assumption regarding network perimeter security?",
      options: [
        "Internal corporate networks are implicitly trusted once an employee connects via corporate VPN",
        "Perimeters are completely sufficient if firewalls inspect incoming TCP port 443 packets",
        "No implicit trust is granted to assets or user accounts based solely on their physical or network location; every transaction must be explicitly authenticated and authorized",
        "All data systems must be completely disconnected from the public internet without cloud access"
      ],
      answer: 2,
      exp: "Zero Trust operates on the principle of 'never trust, always verify'. Traditional perimeter defenses assume that internal network traffic is benign. Zero Trust mandates that every access request—even originating within the same VPC or private subnet—must verify identity, evaluate context and permissions, and enforce encryption."
    },
    {
      q: "Why are combinations of non-sensitive attributes such as Postal Code, Gender, and Date of Birth classified as 'Quasi-Identifiers'?",
      options: [
        "They cause memory buffer overflows in distributed SQL query engines",
        "While individually non-identifying, their combination can uniquely re-identify a high percentage of individuals when linked with external public voter or demographic records",
        "They are legally exempt from all global privacy regulations including GDPR and DPDP",
        "They can only be stored in NoSQL document databases"
      ],
      answer: 1,
      exp: "Quasi-identifiers (indirect identifiers) are attributes that do not identify a person on their own, but when combined (such as 5-digit ZIP + Gender + Date of Birth), they can uniquely identify up to 87% of the US population when correlated against external auxiliary registries, creating severe re-identification risks."
    },
    {
      q: "In cloud access management, what distinguishes Attribute-Based Access Control (ABAC) from Role-Based Access Control (RBAC)?",
      options: [
        "RBAC assigns permissions statically to user roles; ABAC dynamically evaluates subject attributes, resource classification, action requested, and environmental context (e.g., network, time, device)",
        "RBAC is only used on Windows servers, while ABAC is used on Linux",
        "ABAC completely disables IAM policies in favor of database triggers",
        "RBAC requires multi-factor authentication, whereas ABAC does not"
      ],
      answer: 0,
      exp: "RBAC groups permissions under designated roles (e.g., 'Data Analyst'). While simple to configure, RBAC suffers from 'role explosion' in complex enterprises. ABAC resolves this by evaluating policies based on attributes of the user (department, clearance), resource (confidentiality tier, department owner), and environment (corporate VPN, business hours, MFA status)."
    },
    {
      q: "Which of the following IAM policy statements strictly enforces the Principle of Least Privilege for an automated Glue ETL extraction job?",
      options: [
        "{ \"Effect\": \"Allow\", \"Action\": \"*\", \"Resource\": \"*\" }",
        "{ \"Effect\": \"Allow\", \"Action\": [\"s3:GetObject\"], \"Resource\": [\"arn:aws:s3:::ecommerce-raw/orders/*\"] }",
        "{ \"Effect\": \"Allow\", \"Action\": [\"s3:*\"], \"Resource\": [\"arn:aws:s3:::*\"] }",
        "{ \"Effect\": \"Allow\", \"Action\": [\"iam:CreateUser\", \"s3:DeleteBucket\"], \"Resource\": [\"*\"] }"
      ],
      answer: 1,
      exp: "Least privilege mandates granting only the minimum permissions necessary to perform the specific assigned task on the exact target resources. An extraction job reading raw orders only needs 's3:GetObject' scoped strictly to the 'ecommerce-raw/orders/*' prefix."
    },
    {
      q: "How does Envelope Encryption in AWS KMS optimize performance and security when encrypting terabyte-scale data lake Parquet files?",
      options: [
        "All petabytes of data lake storage are sent over the network into KMS HSMs for encryption",
        "KMS generates a plaintext Data Encryption Key (DEK) and an encrypted DEK; the client encrypts data locally using the plaintext DEK, immediately wipes the plaintext DEK from memory, and stores the encrypted DEK alongside the ciphertext",
        "Envelope encryption replaces symmetric AES-256 with unencrypted plaintext compression",
        "It stores the master KMS CMK key in a public S3 bucket for low-latency client retrieval"
      ],
      answer: 1,
      exp: "Because sending massive analytical files to KMS HSMs over the network would cause severe throughput bottlenecks and latency, KMS envelope encryption generates a local Data Encryption Key (DEK). The data is encrypted locally with fast AES-256-GCM. The plaintext DEK is immediately destroyed from RAM, and only the ciphertext DEK (wrapped by the KMS master key) is stored alongside the file metadata."
    },
    {
      q: "What is the primary difference between Static Data Masking (SDM) and Dynamic Data Masking (DDM)?",
      options: [
        "Static masking permanently alters the physical underlying storage (e.g. for dev/staging environments); dynamic masking transforms data on the fly during SQL query execution based on user permissions without altering storage",
        "Dynamic masking permanently deletes the original database tables",
        "Static masking is only applicable to numerical salary columns, while dynamic masking is for text",
        "Static masking requires an internet connection, while dynamic masking runs in BIOS"
      ],
      answer: 0,
      exp: "Static Data Masking (SDM) produces a permanent, scrubbed duplicate of the production database for non-production environments like development, testing, or analytics training. Dynamic Data Masking (DDM) intercepts runtime SQL queries in the data warehouse/engine, obfuscating sensitive fields (e.g., masking phone numbers as 'XXXXXX3210') according to the querying user's authorization tier."
    },
    {
      q: "Under modern privacy regulations like GDPR and India's DPDP Act 2023, why is pseudonymized data still treated as 'personal data' while truly anonymized data is not?",
      options: [
        "Pseudonymized data can be re-linked to an individual using separate auxiliary information (e.g. token vault or salt key); truly anonymized data has irreversibly eliminated all linkability",
        "Pseudonymized data is encrypted with RSA-4096, which regulators do not trust",
        "Anonymized data is stored only in RAM, making it exempt from legal enforcement",
        "Regulators consider pseudonymization to be a cyberattack technique"
      ],
      answer: 0,
      exp: "Pseudonymization replaces identifiers with artificial pseudonyms/tokens, but the link between the individual and data can be restored if someone accesses the mapping vault or key. Therefore, pseudonymized data remains legally classified as personal data. True anonymization irreversibly eliminates identifiability and linkability, placing it outside personal data protection scope."
    },
    {
      q: "What is the primary technological capability of a Secure Data Clean Room in modern analytics and ad-tech partnerships?",
      options: [
        "It provides a physical hermetically sealed server room with biometric locks",
        "It allows two or more organizations to securely join and compute collaborative analytics over their private datasets without either party exposing raw PII or row-level records to the other",
        "It automatically formats unformatted CSV files into valid JSON schemas",
        "It deletes all logs after every 60 seconds to prevent auditing"
      ],
      answer: 1,
      exp: "A Secure Data Clean Room uses homomorphic encryption, secure multiparty computation (SMPC), and differential privacy boundaries to let multiple enterprises (e.g., a retailer and a streaming platform) intersect customer segments for aggregate queries without exposing their proprietary underlying PII to each other."
    },
    {
      q: "In cloud auditing architecture, what distinguishes AWS CloudTrail 'Management Events' from 'Data Events'?",
      options: [
        "Management events track control-plane operations (e.g. CreateBucket, AttachPolicy); Data events track resource-level operations on data (e.g. s3:GetObject, s3:PutObject) and generate high log volume",
        "Management events are billable, but data events are always free of charge",
        "Data events can only be captured using bash shell scripts",
        "Management events record database rows, while data events record AWS account passwords"
      ],
      answer: 0,
      exp: "Management events capture administrative control-plane actions such as creating an S3 bucket, creating IAM roles, or configuring VPC routes. Data events capture high-frequency object-level operations inside resources, such as S3 GetObject/PutObject or DynamoDB GetItem, which must be explicitly enabled due to high throughput."
    },
    {
      q: "When executing a 'Right to Erasure' (Data Subject Request) across an enterprise cloud data platform, why must data engineers account for 'Legal Hold' exceptions?",
      options: [
        "Data engineers can choose to ignore deletion requests if the data lake is larger than 10 Terabytes",
        "Statutory compliance obligations (e.g., tax records, financial anti-money laundering, active litigation) override individual deletion requests and mandate retaining specific transaction records until legal holds expire",
        "Legal holds allow developers to copy personal data to their personal laptops",
        "All data subject requests must be rejected if the customer has an active subscription"
      ],
      answer: 1,
      exp: "Privacy rights like the Right to Erasure are not absolute. When data is subject to mandatory regulatory retention (e.g., 7-year tax audit requirements, banking fraud investigation records, or active litigation holds), legal compliance takes precedence over deletion requests, requiring systems to isolate the data and prevent operational use while preserving it for legal discovery."
    },
    {
      q: "Under India's Digital Personal Data Protection Act, 2023 (DPDP Act), what is the term used for the individual whose personal data is being processed?",
      options: [
        "Data Principal",
        "Data Fiduciary",
        "Data Custodian",
        "Data Consumer"
      ],
      answer: 0,
      exp: "Under the DPDP Act 2023, the individual to whom the personal data relates is termed the 'Data Principal' (equivalent to 'Data Subject' under GDPR). The entity determining the purpose and means of processing is the 'Data Fiduciary' (equivalent to GDPR's 'Data Controller')."
    },
    {
      q: "Which core pillar was introduced as the foundational 6th function in the NIST Cybersecurity Framework (CSF) 2.0 update?",
      options: [
        "GOVERN",
        "EXPLOIT",
        "PENETRATE",
        "MONETIZE"
      ],
      answer: 0,
      exp: "NIST CSF 2.0 expanded the classic 5 functions (IDENTIFY, PROTECT, DETECT, RESPOND, RECOVER) by placing 'GOVERN' at the center. GOVERN establishes organizational context, risk management strategy, roles, policies, and continuous oversight across the entire enterprise security lifecycle."
    },
    {
      q: "In the Data Governance RACI model, who holds the ultimate 'Accountable' (A) designation for approving dataset definitions, classification levels, and access rights?",
      options: [
        "The Data Owner (business domain leader)",
        "The junior ETL pipeline developer",
        "The third-party cloud hosting vendor",
        "The external customer who purchased a product"
      ],
      answer: 0,
      exp: "The Data Owner (typically a senior business or domain executive) is ultimately Accountable (A) for the data assets in their domain, deciding its classification, acceptable use, and access authorization. The Data Steward is Responsible (R) for metadata and quality rules, while the Data Engineer implements the technical pipelines and access controls."
    },
    {
      q: "What is the STRIDE threat category that describes an attacker deleting database transaction logs to prevent forensics and deny that a security incident occurred?",
      options: [
        "Repudiation",
        "Spoofing",
        "Tampering",
        "Elevation of Privilege"
      ],
      answer: 0,
      exp: "Repudiation occurs when an actor performs an unauthorized action and the system lacks sufficient non-repudiation proof (e.g., cryptographic signatures, append-only immutable audit logs) to prove who performed it. Deleting or modifying audit trails is a classic Repudiation attack, mitigated by immutable CloudTrail logs locked with S3 Object Lock and KMS."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectQuizAnswer = (qIdx, optIdx) => {
    if (showQuizResults) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const quizScore = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answer) correct++;
    });
    return correct;
  }, [quizAnswers, quizQuestions]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 flex flex-col font-sans">
      {/* Universal Module Navigation */}
      <ModuleNav currentModuleId="data-security-governance" />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Course Breadcrumbs & Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <button
              onClick={goBack}
              className="hover:text-stone-900 transition-colors flex items-center gap-1"
            >
              <ArrowLeft size={12} />
              <span>Courses</span>
            </button>
            <span>/</span>
            <span className="hover:text-stone-900">Data Engineering Master Course</span>
            <span>/</span>
            <span className="text-orange-600 font-semibold">Module 20: Data Security, Governance & Privacy</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-orange-100 text-orange-700 border border-orange-200">
                  MODULE 20 · ADVANCED SECURITY ENGINEERING
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-300">
                  IAM · KMS · PII · RBAC · ABAC · DPDP · GDPR · NIST
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Data Security, Governance and Privacy
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
                Master enterprise data security architecture, automated PII discovery, Zero Trust identity access controls, AWS KMS envelope encryption, static & dynamic masking, privacy engineering (k-anonymity, differential privacy), audit trails with CloudTrail, global regulations (DPDP Act 2023, GDPR, CCPA, HIPAA), and RACI accountability.
              </p>
            </div>

            {/* Mode Switcher Pill Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-xl border border-stone-300 shadow-inner self-start md:self-auto">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "curriculum"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <BookOpen size={14} className={activeTab === "curriculum" ? "text-orange-600" : ""} />
                <span>Specification & Blueprints (31)</span>
              </button>
              <button
                onClick={() => setActiveTab("workbench")}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "workbench"
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200 font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                <Cpu size={14} className={activeTab === "workbench" ? "text-orange-600" : ""} />
                <span>Interactive Workbenches (6)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* TAB 1: SPECIFICATION & BLUEPRINTS (FULL VERBATIM CURRICULUM)      */}
        {/* ================================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Sidebar: Syllabus Navigator */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 p-4 shadow-sm space-y-4 sticky top-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-orange-600" />
                  <span className="font-bold text-sm text-stone-800">Module 20 Syllabus</span>
                </div>
                <span className="text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                  {filteredSections.length} / {securitySectionsMeta.length}
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search sections or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-stone-800 placeholder-stone-400"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[10px] font-mono px-2 py-1 rounded-md transition-colors ${
                      selectedCategory === cat
                        ? "bg-orange-600 text-white font-semibold"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {cat === "all" ? "All Categories" : cat.replace("Part ", "P")}
                  </button>
                ))}
              </div>

              {/* Scrollable Section List */}
              <div className="space-y-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1 [scrollbar-width:thin]">
                {filteredSections.map((sec) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveSectionId(sec.id)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                        isActive
                          ? "bg-orange-50/80 border border-orange-200 text-stone-900 shadow-sm"
                          : "hover:bg-stone-50 text-stone-600 border border-transparent"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded mt-0.5 shrink-0 ${
                          isActive
                            ? "bg-orange-600 text-white font-bold"
                            : "bg-stone-100 text-stone-500"
                        }`}
                      >
                        {sec.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-xs leading-snug line-clamp-2 ${
                            isActive ? "font-bold text-stone-900" : "font-medium"
                          }`}
                        >
                          {sec.title}
                        </div>
                        <div className="text-[10px] text-stone-400 truncate mt-0.5">
                          {sec.category}
                        </div>
                      </div>
                      {isActive && (
                        <ChevronRight size={14} className="text-orange-600 shrink-0 mt-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Main Panel: Render Selected Verbatim Section */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              <SecuritySection sectionId={activeSectionId} />
            </div>
          </div>
        )}

        {/* ================================================================== */}
        {/* TAB 2: INTERACTIVE WORKBENCHES (6 SPECIALIZED LABS)                */}
        {/* ================================================================== */}
        {activeTab === "workbench" && (
          <div className="space-y-6">
            {/* Workbench Navigation Pill Header */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4">
              <button
                onClick={() => setActiveWorkbench("classification_scanner")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "classification_scanner"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Search size={14} />
                <span>1. PII Discovery Scanner</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("crypto_privacy_lab")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "crypto_privacy_lab"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Key size={14} />
                <span>2. Cryptographic Privacy Lab</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("envelope_encryption_sim")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "envelope_encryption_sim"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Lock size={14} />
                <span>3. Envelope Encryption & KMS</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("access_policy_engine")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "access_policy_engine"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <UserCheck size={14} />
                <span>4. RBAC vs ABAC Engine</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("regulatory_dsr_orchestrator")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "regulatory_dsr_orchestrator"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <Scale size={14} />
                <span>5. Regulatory Matrix & DSR Erasure</span>
              </button>

              <button
                onClick={() => setActiveWorkbench("stride_threat_quiz")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeWorkbench === "stride_threat_quiz"
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-white border border-stone-200 text-stone-700 hover:bg-stone-50"
                }`}
              >
                <ShieldAlert size={14} />
                <span>6. STRIDE Threat & 15Q Quiz</span>
              </button>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 1: Data Classification & PII Discovery Scanner         */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "classification_scanner" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <Search size={18} className="text-orange-600" />
                        <span>Automated Data Classification & PII Discovery Scanner</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Simulate AWS Macie & Microsoft Purview discovery engines inspecting raw datasets, identifying direct identifiers, calculating quasi-identifier linkability, and tagging sensitivity tiers.
                      </p>
                    </div>
                    <button
                      onClick={handleRunScan}
                      disabled={isScanning}
                      className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors disabled:opacity-50"
                    >
                      <RefreshCw size={13} className={isScanning ? "animate-spin" : ""} />
                      <span>{isScanning ? "Scanning Columns..." : "Run Macie Discovery Scan"}</span>
                    </button>
                  </div>
                </div>

                {/* Dataset Selector Tabs */}
                <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                  <span className="text-xs font-semibold text-stone-700 mr-2">Target Data Lake Zone:</span>
                  {[
                    { id: "customers", label: "s3://lake-raw/customers.csv (PII)" },
                    { id: "orders", label: "s3://lake-raw/orders.csv (Financial)" },
                    { id: "logs", label: "s3://lake-raw/ingress_logs.json (Network)" }
                  ].map((ds) => (
                    <button
                      key={ds.id}
                      onClick={() => {
                        setScanDataset(ds.id);
                        setScanCompleted(false);
                      }}
                      className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all ${
                        scanDataset === ds.id
                          ? "bg-stone-900 text-white border-stone-900 font-bold"
                          : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      {ds.label}
                    </button>
                  ))}
                </div>

                {/* Raw Dataset Preview Table */}
                <div className="overflow-x-auto rounded-xl border border-stone-200 bg-stone-50 [scrollbar-width:thin]">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-stone-200/70 text-stone-700 font-semibold border-b border-stone-200">
                        {Object.keys(rawSampleRecords[scanDataset][0]).map((key) => (
                          <th key={key} className="py-2.5 px-3 font-mono text-[11px] text-stone-800">
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200/50 text-stone-700 font-mono">
                      {rawSampleRecords[scanDataset].map((row, idx) => (
                        <tr key={idx} className="hover:bg-orange-50/30 transition-colors">
                          {Object.values(row).map((val, cIdx) => (
                            <td key={cIdx} className="py-2 px-3 text-[11px] truncate max-w-[180px]">
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Scan Results Panel */}
                {scanCompleted ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase text-red-700 font-bold">
                          Assigned Classification
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white font-mono">
                          {scanDataset === "customers" ? "LEVEL 4: RESTRICTED" : scanDataset === "orders" ? "LEVEL 3: CONFIDENTIAL" : "LEVEL 2: INTERNAL"}
                        </span>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        {scanDataset === "customers"
                          ? "Contains Direct PII (Name, Email, Phone), National Identifier (Aadhaar), and Protected Health Information (Diagnosis)."
                          : scanDataset === "orders"
                          ? "Contains payment instrument references, customer linkage keys, and commercial transactions."
                          : "Contains IP addresses and system metadata suitable for internal operational telemetry."}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono uppercase text-amber-800 font-bold">
                          Quasi-Identifier Risk
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white font-mono">
                          {scanDataset === "customers" ? "RE-IDENTIFICATION: 94.2%" : "LOW LINKAGE"}
                        </span>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        {scanDataset === "customers"
                          ? "ZIP Code (411057) + Salary + Diagnosis allows triangulation against public electoral rolls without needing name."
                          : "Non-PII transaction aggregates prevent individual customer re-identification."}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-900 text-stone-200 space-y-2 font-mono text-xs">
                      <div className="text-[11px] text-orange-400 font-bold uppercase flex items-center gap-1.5">
                        <ShieldCheck size={13} />
                        <span>Recommended Remediation</span>
                      </div>
                      <ul className="space-y-1 text-[11px] text-stone-300 list-disc pl-4">
                        {scanDataset === "customers" ? (
                          <>
                            <li>Apply HMAC-SHA256 Tokenization to customer ID</li>
                            <li>Redact Government ID and Health diagnosis</li>
                            <li>Dynamic SQL masking on Phone & Email</li>
                            <li>Block S3 Public Access & enforce KMS CMK</li>
                          </>
                        ) : (
                          <>
                            <li>Enforce Column-level Lake Formation permissions</li>
                            <li>Mask credit card last-4 digits for general analysts</li>
                            <li>Retain for 7 years under statutory tax hold</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center text-stone-500 font-mono text-xs border border-dashed border-stone-300 rounded-xl">
                    Click "Run Macie Discovery Scan" to execute automated pattern matching and entity recognition across columns.
                  </div>
                )}
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 2: Cryptographic Privacy Laboratory                    */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "crypto_privacy_lab" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Key size={18} className="text-orange-600" />
                    <span>Cryptographic Privacy Laboratory: HMAC, Masking & K-Anonymity</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Compare keyed deterministic pseudonymization for analytical joins, dynamic runtime SQL redaction, and microdata k-anonymity generalization.
                  </p>
                </div>

                {/* Sub-tool Selector */}
                <div className="flex items-center gap-2 border-b border-stone-200 pb-3">
                  <button
                    onClick={() => setCryptoTool("hmac")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      cryptoTool === "hmac" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    1. Keyed HMAC-SHA256 Tokenizer
                  </button>
                  <button
                    onClick={() => setCryptoTool("masking")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      cryptoTool === "masking" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    2. Dynamic SQL Obfuscator
                  </button>
                  <button
                    onClick={() => setCryptoTool("kanonymity")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      cryptoTool === "kanonymity" ? "bg-orange-600 text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    3. K-Anonymity Generalization
                  </button>
                </div>

                {/* Sub-Tool 1: HMAC */}
                {cryptoTool === "hmac" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Plaintext Identifier (Customer ID / PAN / SSN):
                        </label>
                        <input
                          type="text"
                          value={hmacInputId}
                          onChange={(e) => setHmacInputId(e.target.value)}
                          className="w-full px-3 py-2 text-xs font-mono rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          KMS Pseudonymization Secret Salt Key:
                        </label>
                        <input
                          type="text"
                          value={hmacSecretKey}
                          onChange={(e) => setHmacSecretKey(e.target.value)}
                          className="w-full px-3 py-2 text-xs font-mono rounded-xl border border-stone-200 bg-stone-50 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-2 border border-neutral-800">
                      <div className="text-[11px] text-orange-400 font-bold flex items-center gap-1.5">
                        <Terminal size={13} />
                        <span>Deterministic HMAC-SHA256 Token Output</span>
                      </div>
                      <div className="p-2.5 rounded bg-neutral-950 border border-neutral-800 text-emerald-400 break-all select-all">
                        {pseudoHmacDigest}
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        Deterministic Property: Given the same customer ID and secret salt, this exact token will be generated across orders, marketing, and web clickstreams, allowing analyst teams to perform multi-table JOINs without ever exposing the real customer identity.
                      </p>
                    </div>
                  </div>
                )}

                {/* Sub-Tool 2: SQL Masking */}
                {cryptoTool === "masking" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-stone-700">Select Attribute to Mask:</span>
                      {["phone", "email", "card"].map((t) => (
                        <button
                          key={t}
                          onClick={() => setMaskType(t)}
                          className={`text-xs px-3 py-1 rounded-lg border font-mono capitalize ${
                            maskType === t ? "bg-orange-600 text-white font-bold" : "bg-stone-50 text-stone-700"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                        <span className="text-xs font-bold text-stone-800">Raw Storage (DBA Tier):</span>
                        <div className="font-mono text-xs text-stone-900 bg-white p-2.5 rounded border border-stone-200">
                          {maskType === "phone" ? "+91 9876543210" : maskType === "email" ? "rahul.sharma@gmail.com" : "4532-8901-2345-1234"}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                        <span className="text-xs font-bold text-emerald-900">Dynamic SQL Masked View (Analyst Tier):</span>
                        <div className="font-mono text-xs text-emerald-800 bg-white p-2.5 rounded border border-emerald-300 font-bold">
                          {maskType === "phone" ? "XXXXXX3210" : maskType === "email" ? "r****a@gmail.com" : "************1234"}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs">
                      <span className="text-orange-400 font-bold">// PostgreSQL / Athena Dynamic Masking View DDL:</span>
                      <pre className="mt-2 text-stone-300 overflow-x-auto">
{maskType === "phone"
  ? `CREATE VIEW analyst_customers AS\nSELECT customer_id, CONCAT('XXXXXX', RIGHT(phone, 4)) AS masked_phone FROM raw_customers;`
  : maskType === "email"
  ? `CREATE VIEW analyst_customers AS\nSELECT customer_id, REGEXP_REPLACE(email, '(^.).*(@.*)', '\\\\1****\\\\2') AS masked_email FROM raw_customers;`
  : `CREATE VIEW analyst_customers AS\nSELECT customer_id, CONCAT('************', RIGHT(card_number, 4)) AS masked_card FROM raw_customers;`}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Sub-Tool 3: K-Anonymity */}
                {cryptoTool === "kanonymity" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
                            Age Generalization:
                          </label>
                          <select
                            value={ageGeneralization}
                            onChange={(e) => setAgeGeneralization(e.target.value)}
                            className="text-xs font-mono p-1.5 rounded-lg border border-stone-300 bg-white"
                          >
                            <option value="exact">Exact (23, 24, 28...)</option>
                            <option value="bands">10-Year Bands (20-29, 40-49)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
                            ZIP Code Suppression:
                          </label>
                          <select
                            value={zipSuppression}
                            onChange={(e) => setZipSuppression(e.target.value)}
                            className="text-xs font-mono p-1.5 rounded-lg border border-stone-300 bg-white"
                          >
                            <option value="full">Full ZIP (411057)</option>
                            <option value="prefix">3-Digit Prefix (411***)</option>
                          </select>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[11px] font-mono text-stone-500 block">CURRENT GUARANTEE:</span>
                        <span
                          className={`text-lg font-mono font-extrabold px-3 py-1 rounded-lg inline-block ${
                            calculatedKValue >= 3 ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-red-100 text-red-800 border border-red-300"
                          }`}
                        >
                          k = {calculatedKValue} {calculatedKValue >= 3 ? "(PROTECTED)" : "(VULNERABLE)"}
                        </span>
                      </div>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-stone-200">
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                            <th className="py-2 px-3">Subject ID</th>
                            <th className="py-2 px-3">Generalized Age</th>
                            <th className="py-2 px-3">Suppressed ZIP</th>
                            <th className="py-2 px-3">Sensitive Attribute (Disease)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          {kAnonymityData.map((row) => (
                            <tr key={row.id} className="hover:bg-orange-50/20">
                              <td className="py-2 px-3 font-semibold text-stone-500">{row.id}</td>
                              <td className="py-2 px-3 text-stone-900">{row.displayAge}</td>
                              <td className="py-2 px-3 text-stone-900">{row.displayZip}</td>
                              <td className="py-2 px-3 text-orange-600 font-semibold">{row.disease}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-stone-600">
                      A release satisfies <strong>k-anonymity</strong> if every combination of quasi-identifiers (Age, ZIP) occurs at least <em>k</em> times. When <em>k=3</em>, an attacker linking demographic records cannot narrow an individual down to fewer than 3 potential candidates.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 3: Envelope Encryption & KMS Simulator                 */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "envelope_encryption_sim" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Lock size={18} className="text-orange-600" />
                      <span>AWS KMS Envelope Encryption & S3 Security Simulator</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Simulate 2-tier envelope encryption: KMS master key (KEK) wraps local 256-bit data keys (DEK) to protect terabyte Parquet files without network saturation.
                    </p>
                  </div>
                  <button
                    onClick={runEnvelopeSimulation}
                    disabled={isEncryptingEnvelope}
                    className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors disabled:opacity-50"
                  >
                    <RefreshCw size={13} className={isEncryptingEnvelope ? "animate-spin" : ""} />
                    <span>{isEncryptingEnvelope ? "Executing KMS Protocol..." : "Encrypt S3 Parquet File"}</span>
                  </button>
                </div>

                {/* S3 & KMS Security Toggles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-stone-800 block">S3 Block Public Access</span>
                      <span className="text-stone-500 text-[11px]">Enforce account-level block</span>
                    </div>
                    <button
                      onClick={() => setS3BlockPublicAccess(!s3BlockPublicAccess)}
                      className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold ${
                        s3BlockPublicAccess ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
                      }`}
                    >
                      {s3BlockPublicAccess ? "ENABLED" : "DISABLED (RISK)"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-stone-800 block">KMS Automatic Rotation</span>
                      <span className="text-stone-500 text-[11px]">365-day KEK rotation</span>
                    </div>
                    <button
                      onClick={() => setKmsKeyRotationEnabled(!kmsKeyRotationEnabled)}
                      className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold ${
                        kmsKeyRotationEnabled ? "bg-emerald-600 text-white" : "bg-stone-300 text-stone-700"
                      }`}
                    >
                      {kmsKeyRotationEnabled ? "ACTIVE" : "OFF"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-stone-800 block">Current KMS CMK Key:</span>
                      <span className="text-stone-500 text-[11px]">arn:aws:kms:ap-south-1...</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-mono text-[11px]">
                      {currentKekVersion}
                    </span>
                  </div>
                </div>

                {/* 4-Stage Envelope Flow Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    {
                      num: 1,
                      title: "1. kms:GenerateDataKey",
                      desc: "KMS returns Plaintext DEK + Encrypted DEK (wrapped by HSM CMK).",
                      active: envelopeStage >= 1
                    },
                    {
                      num: 2,
                      title: "2. AES-256 Local Encrypt",
                      desc: "Local Spark process encrypts Parquet chunks with Plaintext DEK.",
                      active: envelopeStage >= 2
                    },
                    {
                      num: 3,
                      title: "3. Memory Wipe",
                      desc: "Plaintext DEK is explicitly destroyed and zeroed out from RAM.",
                      active: envelopeStage >= 3
                    },
                    {
                      num: 4,
                      title: "4. S3 Storage",
                      desc: "Encrypted Data + Encrypted DEK metadata stored safely in S3.",
                      active: envelopeStage >= 4
                    }
                  ].map((st) => (
                    <div
                      key={st.num}
                      className={`p-4 rounded-xl border transition-all ${
                        st.active
                          ? "bg-white border-orange-500 shadow-md ring-2 ring-orange-500/10"
                          : "bg-stone-50 border-stone-200 opacity-60"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                            st.active ? "bg-orange-600 text-white" : "bg-stone-200 text-stone-600"
                          }`}
                        >
                          {st.num}
                        </span>
                        <span className="text-xs font-bold text-stone-900">{st.title}</span>
                      </div>
                      <p className="text-[11px] text-stone-600 leading-relaxed">{st.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Envelope Ciphertext Metadata Inspection */}
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-2 border border-neutral-800">
                  <div className="text-[11px] text-orange-400 font-bold uppercase flex items-center gap-1.5">
                    <Terminal size={13} />
                    <span>S3 Object Encryption Metadata (x-amz-server-side-encryption-aws-kms-key-id)</span>
                  </div>
                  <pre className="text-stone-300 text-[11px] overflow-x-auto leading-relaxed">
{`{
  "Bucket": "secure-ecommerce-lake-curated",
  "Key": "customers/year=2026/month=11/part-001.parquet",
  "ServerSideEncryption": "aws:kms",
  "SSEKMSKeyId": "arn:aws:kms:ap-south-1:123456789012:key/7f8a9b2c-...",
  "EncryptionContext": {
    "Department": "analytics",
    "Classification": "CONFIDENTIAL"
  },
  "EncryptedDEK": "AQIDAHh1...7xZ9aQ==" // Wrapped by KEK, stored in S3 metadata
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 4: RBAC vs ABAC Unified Policy Engine                  */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "access_policy_engine" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <UserCheck size={18} className="text-orange-600" />
                    <span>RBAC vs ABAC Dynamic Authorization Engine</span>
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Configure subject attributes (Role, Department, MFA, Network, Time) and evaluate real-time access decisions against target data resources.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left: Attributes Form */}
                  <div className="lg:col-span-6 space-y-4 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <span className="font-bold text-stone-800 uppercase tracking-wider text-[11px] block border-b border-stone-200 pb-2">
                      1. Subject & Environmental Attributes
                    </span>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">Caller Role (RBAC):</label>
                        <select
                          value={subjectRole}
                          onChange={(e) => setSubjectRole(e.target.value)}
                          className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                        >
                          <option value="analyst">Data Analyst</option>
                          <option value="engineer">Data Engineer</option>
                          <option value="admin">Security Admin</option>
                          <option value="auditor">Compliance Auditor</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">Department (ABAC):</label>
                        <select
                          value={subjectDept}
                          onChange={(e) => setSubjectDept(e.target.value)}
                          className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                        >
                          <option value="marketing">Marketing</option>
                          <option value="finance">Finance</option>
                          <option value="security">Security Ops</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">Network Origin:</label>
                        <select
                          value={subjectNetwork}
                          onChange={(e) => setSubjectNetwork(e.target.value)}
                          className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                        >
                          <option value="corp_vpn">Corporate VPN (10.0.x.x)</option>
                          <option value="public_internet">Public Internet / Home WiFi</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-stone-700 mb-1">Time of Access:</label>
                        <select
                          value={subjectTime}
                          onChange={(e) => setSubjectTime(e.target.value)}
                          className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                        >
                          <option value="work_hours">Business Hours (09:00 - 18:00)</option>
                          <option value="after_hours">After Hours / Weekend</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="font-semibold text-stone-700">MFA Token Status:</span>
                      <button
                        onClick={() => setSubjectMfa(!subjectMfa)}
                        className={`px-3 py-1 rounded font-mono text-xs font-bold ${
                          subjectMfa ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
                        }`}
                      >
                        {subjectMfa ? "MFA VERIFIED" : "MFA MISSING"}
                      </button>
                    </div>

                    <div className="pt-2 border-t border-stone-200">
                      <label className="block text-[11px] font-bold text-stone-700 uppercase mb-1">
                        2. Target Resource:
                      </label>
                      <select
                        value={targetResource}
                        onChange={(e) => setTargetResource(e.target.value)}
                        className="w-full text-xs font-mono p-2 rounded-lg border border-stone-300 bg-white"
                      >
                        <option value="public_catalog">s3://lake/products/catalog.csv (Public)</option>
                        <option value="curated_sales">s3://lake/curated/sales_summary.parquet (Confidential)</option>
                        <option value="payroll">s3://lake/restricted/employee_salaries.csv (Confidential - Finance)</option>
                        <option value="raw_customer_pii">s3://lake/raw/customers_pii.csv (Restricted PII)</option>
                      </select>
                    </div>
                  </div>

                  {/* Right: Policy Decision Result */}
                  <div className="lg:col-span-6 space-y-4">
                    <div
                      className={`p-6 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                        policyEvaluation.decision === "ALLOW"
                          ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                          : "bg-red-50 border-red-300 text-red-950"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {policyEvaluation.decision === "ALLOW" ? (
                          <CheckCircle2 size={24} className="text-emerald-600" />
                        ) : (
                          <XCircle size={24} className="text-red-600" />
                        )}
                        <span className="text-2xl font-mono font-extrabold tracking-tight">
                          ACCESS {policyEvaluation.decision}
                        </span>
                      </div>
                      <p className="text-xs text-stone-700 max-w-md font-medium leading-relaxed">
                        {policyEvaluation.reason}
                      </p>
                      <span className="mt-3 text-[10px] font-mono px-2.5 py-1 rounded bg-white/80 border border-stone-200 text-stone-600">
                        Triggered Policy Rule: {policyEvaluation.layer}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                      <span className="text-orange-400 font-bold">// Dynamic ABAC Evaluator Function:</span>
                      <pre className="text-[11px] text-stone-300 overflow-x-auto leading-relaxed">
{`def evaluate_abac_request(subject, resource, env):
    # Rule 1: Zero Trust MFA enforcement
    if not subject.mfa_verified:
        return PolicyResult(DENY, "MFA Required")
    # Rule 2: Corporate network boundary
    if env.network != "corp_vpn" and resource.tier > PUBLIC:
        return PolicyResult(DENY, "VPN Required for non-public data")
    # Rule 3: Department match for Payroll
    if resource.name == "payroll" and subject.dept != "finance":
        return PolicyResult(DENY, "Department mismatch")
    return PolicyResult(ALLOW, "All ABAC conditions satisfied")`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 5: Multi-Jurisdiction Regulatory Matrix & DSR Lab      */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "regulatory_dsr_orchestrator" && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <Scale size={18} className="text-orange-600" />
                      <span>Multi-Jurisdiction Regulatory Matrix & DSR Erasure Orchestrator</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Compare global data privacy legislation and simulate automated Data Subject Request (DSR) "Right to Erasure" across multi-zone cloud pipelines with legal hold safeguards.
                    </p>
                  </div>
                  <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200">
                    <button
                      onClick={() => setActiveRegTab("matrix")}
                      className={`text-xs px-3 py-1 rounded font-semibold ${
                        activeRegTab === "matrix" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
                      }`}
                    >
                      Regulatory Matrix
                    </button>
                    <button
                      onClick={() => setActiveRegTab("dsr_orchestrator")}
                      className={`text-xs px-3 py-1 rounded font-semibold ${
                        activeRegTab === "dsr_orchestrator" ? "bg-white text-stone-900 shadow-sm" : "text-stone-600"
                      }`}
                    >
                      DSR Erasure Lab
                    </button>
                  </div>
                </div>

                {activeRegTab === "matrix" && (
                  <div className="overflow-x-auto rounded-xl border border-stone-200 [scrollbar-width:thin]">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-stone-100 text-stone-800 font-semibold border-b border-stone-200">
                          <th className="py-2.5 px-3 font-mono">Regulation / Standard</th>
                          <th className="py-2.5 px-3 font-mono">Jurisdiction</th>
                          <th className="py-2.5 px-3 font-mono">Individual Term</th>
                          <th className="py-2.5 px-3 font-mono">Entity Term</th>
                          <th className="py-2.5 px-3 font-mono">Breach Reporting Window</th>
                          <th className="py-2.5 px-3 font-mono">Max Statutory Penalty</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        <tr className="hover:bg-orange-50/20">
                          <td className="py-2.5 px-3 font-bold text-stone-900">DPDP Act, 2023</td>
                          <td className="py-2.5 px-3">India</td>
                          <td className="py-2.5 px-3 font-mono text-orange-600 font-semibold">Data Principal</td>
                          <td className="py-2.5 px-3 font-mono">Data Fiduciary</td>
                          <td className="py-2.5 px-3">Without delay (Rules 2025)</td>
                          <td className="py-2.5 px-3 font-semibold text-red-600">Up to ₹250 Crore per violation</td>
                        </tr>
                        <tr className="hover:bg-orange-50/20">
                          <td className="py-2.5 px-3 font-bold text-stone-900">GDPR</td>
                          <td className="py-2.5 px-3">European Union (EEA)</td>
                          <td className="py-2.5 px-3 font-mono text-orange-600 font-semibold">Data Subject</td>
                          <td className="py-2.5 px-3 font-mono">Data Controller</td>
                          <td className="py-2.5 px-3">Within 72 hours</td>
                          <td className="py-2.5 px-3 font-semibold text-red-600">€20M or 4% of global turnover</td>
                        </tr>
                        <tr className="hover:bg-orange-50/20">
                          <td className="py-2.5 px-3 font-bold text-stone-900">CCPA / CPRA</td>
                          <td className="py-2.5 px-3">California, USA</td>
                          <td className="py-2.5 px-3 font-mono text-orange-600 font-semibold">Consumer</td>
                          <td className="py-2.5 px-3 font-mono">Business</td>
                          <td className="py-2.5 px-3">Expeditious / Most expedient</td>
                          <td className="py-2.5 px-3 font-semibold text-red-600">$7,500 per intentional violation</td>
                        </tr>
                        <tr className="hover:bg-orange-50/20">
                          <td className="py-2.5 px-3 font-bold text-stone-900">HIPAA Security Rule</td>
                          <td className="py-2.5 px-3">USA (Healthcare ePHI)</td>
                          <td className="py-2.5 px-3 font-mono text-orange-600 font-semibold">Patient / Individual</td>
                          <td className="py-2.5 px-3 font-mono">Covered Entity</td>
                          <td className="py-2.5 px-3">60 days (&gt;500 individuals)</td>
                          <td className="py-2.5 px-3 font-semibold text-red-600">$1.9M+ annual tiered cap</td>
                        </tr>
                        <tr className="hover:bg-orange-50/20">
                          <td className="py-2.5 px-3 font-bold text-stone-900">PCI DSS v4.0</td>
                          <td className="py-2.5 px-3">Global (Cardholder Data)</td>
                          <td className="py-2.5 px-3 font-mono text-orange-600 font-semibold">Cardholder</td>
                          <td className="py-2.5 px-3 font-mono">Merchant / Processor</td>
                          <td className="py-2.5 px-3">Immediate bank notification</td>
                          <td className="py-2.5 px-3 font-semibold text-red-600">Card brand fines & processing ban</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeRegTab === "dsr_orchestrator" && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center gap-3">
                        <label className="text-xs font-semibold text-stone-700">Target Data Principal ID:</label>
                        <input
                          type="text"
                          value={dsrCustomerId}
                          onChange={(e) => setDsrCustomerId(e.target.value)}
                          className="px-3 py-1.5 text-xs font-mono rounded-lg border border-stone-300 bg-white"
                        />
                      </div>
                      <button
                        onClick={executeDsrErasure}
                        disabled={dsrStatus === "scanning" || dsrStatus === "legal_hold_check" || dsrStatus === "erasing"}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm transition-colors disabled:opacity-50"
                      >
                        <RefreshCw size={13} className={dsrStatus !== "idle" && dsrStatus !== "completed" ? "animate-spin" : ""} />
                        <span>Orchestrate Pipeline Right-to-Erasure</span>
                      </button>
                    </div>

                    {/* DSR Execution Logs Console */}
                    <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-1.5 border border-neutral-800 min-h-[160px]">
                      <div className="text-[11px] text-orange-400 font-bold uppercase flex items-center gap-1.5 mb-2">
                        <Terminal size={13} />
                        <span>DSR Orchestrator Live Execution Telemetry</span>
                      </div>
                      {dsrLogs.length === 0 ? (
                        <span className="text-neutral-500">Awaiting erasure orchestration trigger...</span>
                      ) : (
                        dsrLogs.map((log, idx) => (
                          <div key={idx} className="leading-relaxed">
                            {log}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ---------------------------------------------------------------- */}
            {/* WORKBENCH 6: STRIDE Threat Modeling Studio & 15-Question Quiz    */}
            {/* ---------------------------------------------------------------- */}
            {activeWorkbench === "stride_threat_quiz" && (
              <div className="space-y-6">
                {/* STRIDE Studio */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                      <ShieldAlert size={18} className="text-orange-600" />
                      <span>STRIDE Threat Modeling Studio for Cloud Data Platforms</span>
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Translate security threats into enterprise engineering countermeasures across Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.
                    </p>
                  </div>

                  {/* STRIDE Selector Pills */}
                  <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
                    {[
                      { id: "S", label: "S - Spoofing" },
                      { id: "T", label: "T - Tampering" },
                      { id: "R", label: "R - Repudiation" },
                      { id: "I", label: "I - Information Disclosure" },
                      { id: "D", label: "D - Denial of Service" },
                      { id: "E", label: "E - Elevation of Privilege" }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setSelectedStrideThreat(btn.id)}
                        className={`text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                          selectedStrideThreat === btn.id
                            ? "bg-orange-600 text-white border-orange-600 shadow-sm"
                            : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Selected STRIDE Threat Detail Card */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-red-50/60 border border-red-200 space-y-3">
                      <span className="text-xs font-bold uppercase font-mono text-red-800">
                        Threat Scenario & Business Impact:
                      </span>
                      <h4 className="text-sm font-bold text-stone-900">
                        {strideDetails[selectedStrideThreat].name}
                      </h4>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        {strideDetails[selectedStrideThreat].threat}
                      </p>
                      <div className="text-xs text-red-900 font-semibold bg-red-100/70 p-2.5 rounded-lg border border-red-200">
                        Impact: {strideDetails[selectedStrideThreat].impact}
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-stone-900 text-stone-200 space-y-3 border border-stone-800">
                      <span className="text-xs font-bold uppercase font-mono text-orange-400 flex items-center gap-1.5">
                        <ShieldCheck size={14} />
                        <span>Recommended Engineering Countermeasures:</span>
                      </span>
                      <p className="text-xs text-stone-300 leading-relaxed font-mono">
                        {strideDetails[selectedStrideThreat].countermeasures}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 15-Question Quiz Card */}
                <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                        <Sparkles size={18} className="text-orange-600" />
                        <span>Module 20 Mastery Assessment: 15 Core Certification Questions</span>
                      </h3>
                      <p className="text-xs text-stone-600 mt-1">
                        Test your knowledge across cryptography, Zero Trust, IAM least privilege, envelope encryption, masking views, global regulations, and governance RACI models.
                      </p>
                    </div>
                    {showQuizResults ? (
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold bg-orange-100 text-orange-800 px-3 py-1.5 rounded-lg border border-orange-200">
                          Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                        </span>
                        <button
                          onClick={() => {
                            setShowQuizResults(false);
                            setQuizAnswers({});
                          }}
                          className="px-3 py-1.5 bg-stone-800 text-white rounded-lg text-xs font-semibold hover:bg-stone-900"
                        >
                          Retry Assessment
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowQuizResults(true)}
                        disabled={Object.keys(quizAnswers).length === 0}
                        className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors disabled:opacity-50"
                      >
                        Submit Answers
                      </button>
                    )}
                  </div>

                  {/* Questions List */}
                  <div className="space-y-6">
                    {quizQuestions.map((q, qIdx) => {
                      const selectedOpt = quizAnswers[qIdx];
                      const isSubmitted = showQuizResults;
                      return (
                        <div
                          key={qIdx}
                          className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3"
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-700 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {qIdx + 1}
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                              {q.q}
                            </h4>
                          </div>

                          <div className="grid grid-cols-1 gap-2 pl-7">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedOpt === optIdx;
                              let btnClass = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                              if (isSubmitted) {
                                if (optIdx === q.answer) {
                                  btnClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                                } else if (isSelected && optIdx !== q.answer) {
                                  btnClass = "bg-red-50 border-red-500 text-red-900";
                                }
                              } else if (isSelected) {
                                btnClass = "bg-orange-50 border-orange-500 text-orange-900 font-semibold ring-1 ring-orange-500";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                                  className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-start gap-2 ${btnClass}`}
                                >
                                  <span className="font-mono text-[11px] text-stone-400 shrink-0 mt-0.5">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span className="leading-relaxed flex-1">{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {isSubmitted && (
                            <div className="pl-7 pt-2">
                              <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-[11px] text-stone-700 leading-relaxed font-mono">
                                <span className="font-bold text-stone-900 block mb-1">Technical Explanation:</span>
                                {q.exp}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
