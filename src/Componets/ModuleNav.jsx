import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles, ChevronRight, ChevronLeft } from "lucide-react";
import { useSafeBack } from "../utils/navigation";
import { SHOW_NOVA_AI } from "../config/features";
import Logo from "./Logo";

export const CLOUD_MODULES = [
  { id: "cloud", name: "Foundations", route: "/learning/cloud" },
  { id: "networking", name: "Networking", route: "/learning/cloud/networking" },
  { id: "compute", name: "Compute", route: "/learning/cloud/compute" },
  { id: "storage", name: "Storage", route: "/learning/cloud/storage" },
  { id: "databases", name: "Databases", route: "/learning/cloud/databases" },
  { id: "architecture", name: "Architecture", route: "/learning/cloud/architecture" },
  { id: "aws", name: "AWS", route: "/learning/cloud/aws" },
  { id: "azure", name: "Azure", route: "/learning/cloud/azure" },
  { id: "gcp", name: "Google Cloud", route: "/learning/cloud/gcp" },
  { id: "multicloud", name: "Multi-Cloud", route: "/learning/cloud/multicloud" },
  { id: "security", name: "Security", route: "/learning/cloud/security" },
  { id: "economics", name: "Economics", route: "/learning/cloud/economics" },
  { id: "advanced", name: "Advanced Systems", route: "/learning/cloud/advanced" },
];

export const DEVOPS_MODULES = [
  { id: "linux", name: "Linux Administration", route: "/learning/devops/linux" },
  { id: "git", name: "Git & Workflows", route: "/learning/devops/git" },
  { id: "docker", name: "Docker & Containers", route: "/learning/devops/docker" },
  { id: "k8s", name: "Kubernetes", route: "/learning/devops/k8s" },
  { id: "iac", name: "Terraform IaC", route: "/learning/devops/iac" },
  { id: "cicd", name: "CI/CD & GitOps", route: "/learning/devops/cicd" },
  { id: "deployment", name: "Deployment Strategies", route: "/learning/devops/deployment" },
  { id: "sre", name: "Site Reliability (SRE)", route: "/learning/devops/sre" },
  { id: "reliability", name: "Production Reliability", route: "/learning/devops/reliability" },
  { id: "secops", name: "DevSecOps", route: "/learning/devops/secops" },
  { id: "platform", name: "Platform Engineering", route: "/learning/devops/platform" },
  { id: "capstone", name: "Capstone Project", route: "/learning/devops/capstone" },
];

export const SYSTEM_DESIGN_MODULES = [
  { id: "intro", name: "1. Architectural Thinking", route: "/learning/system-design" },
  { id: "requirements", name: "2. Requirements & Capacity", route: "/learning/system-design/requirements" },
  { id: "networking", name: "3. APIs & Networking", route: "/learning/system-design/networking" },
  { id: "architecture", name: "4. Monoliths & Services", route: "/learning/system-design/architecture" },
  { id: "databases", name: "5. Databases & Indexing", route: "/learning/system-design/databases" },
  { id: "caching", name: "6. Caching & Invalidation", route: "/learning/system-design/caching" },
  { id: "replication", name: "7. Replication & Sharding", route: "/learning/system-design/replication" },
  { id: "storage", name: "8. Object Storage & Data Pipelines", route: "/learning/system-design/storage" },
  { id: "distributed-systems", name: "9. Distributed Systems & Time", route: "/learning/system-design/distributed-systems" },
  { id: "consistency", name: "10. Consistency & Quorums", route: "/learning/system-design/consistency" },
  { id: "consensus", name: "11. Consensus & Coordination", route: "/learning/system-design/consensus" },
  { id: "messaging", name: "12. Message Queues & Streaming", route: "/learning/system-design/messaging" },
  { id: "transactions", name: "13. Distributed Transactions & Sagas", route: "/learning/system-design/transactions" },
  { id: "traffic", name: "14. Load Balancing & Traffic Control", route: "/learning/system-design/traffic" },
  { id: "scalability", name: "15. Scalability & Performance Modeling", route: "/learning/system-design/scalability" },
  { id: "multi-region", name: "16. Multi-Region & Disaster Recovery", route: "/learning/system-design/multi-region" },
  { id: "reliability", name: "17. Reliability & Observability", route: "/learning/system-design/reliability" },
  { id: "security", name: "18. Security & Multi-Tenancy", route: "/learning/system-design/security" },
  { id: "realtime", name: "19. Real-Time Systems & WebSockets", route: "/learning/system-design/realtime" },
  { id: "search", name: "20. Search, Feeds & Recommendations", route: "/learning/system-design/search" },
  { id: "ai-systems", name: "21. AI Systems & Inference Serving", route: "/learning/system-design/ai-systems" },
  { id: "case-studies", name: "22. System Design Case Studies", route: "/learning/system-design/case-studies" },
  { id: "advanced-case-studies", name: "23. Advanced Case Studies", route: "/learning/system-design/advanced-case-studies" },
  { id: "capstone", name: "24. Final Capstone Project", route: "/learning/system-design/capstone" },
];

export const OS_MODULES = [
  { id: "intro", name: "1. Intro & Systems Thinking", route: "/learning/os" },
  { id: "architecture", name: "2. Computer Architecture", route: "/learning/os/architecture" },
  { id: "systems-programming", name: "3. C & Systems Programming", route: "/learning/os/systems-programming" },
  { id: "syscalls", name: "4. Syscalls & Program Execution", route: "/learning/os/syscalls" },
  { id: "processes", name: "5. Processes & Lifecycle", route: "/learning/os/processes" },
  { id: "scheduling", name: "6. CPU Scheduling", route: "/learning/os/scheduling" },
  { id: "threads", name: "7. Threads & Multithreading", route: "/learning/os/threads" },
  { id: "concurrency", name: "8. Synchronization & Deadlocks", route: "/learning/os/concurrency" },
  { id: "memory", name: "9. Memory Hierarchy & Allocation", route: "/learning/os/memory" },
  { id: "virtual-memory", name: "10. Virtual Memory & Paging", route: "/learning/os/virtual-memory" },
  { id: "demand-paging", name: "11. Demand Paging & Replacement", route: "/learning/os/demand-paging" },
  { id: "virtualization", name: "12. Advanced Memory, VMs & Containers", route: "/learning/os/virtualization" },
  { id: "filesystems", name: "13. Filesystems & Storage Architecture", route: "/learning/os/filesystems" },
  { id: "storage", name: "14. Storage Architecture & I/O", route: "/learning/os/storage" },
  { id: "ipc", name: "15. IPC, Pipes & Shared Memory", route: "/learning/os/ipc" },
  { id: "crash-consistency", name: "16. Crash Consistency & Durability", route: "/learning/os/crash-consistency" },
  { id: "kernel-architecture", name: "17. Kernel Architecture & xv6", route: "/learning/os/kernel-architecture" },
  { id: "diagnostics", name: "18. Linux Internals & Diagnostics", route: "/learning/os/diagnostics" },
  { id: "networking", name: "19. OS Networking & Network I/O", route: "/learning/os/networking" },
  { id: "security", name: "20. OS Security, Isolation & Reliability", route: "/learning/os/security" },
  { id: "advanced-sync", name: "21. Advanced Synchronization & Multiprocessor", route: "/learning/os/advanced-sync" },
  { id: "testing", name: "22. OS Design, Testing & Failure Analysis", route: "/learning/os/testing" },
  { id: "capstone", name: "23. Capstone: Build an OS Component (xv6)", route: "/learning/os/capstone" },
  { id: "final-capstone", name: "24. Final Capstone: OS Engineering Lab", route: "/learning/os/final-capstone" },
];

export const NETWORKS_MODULES = [
  { id: "intro", name: "1. Intro & Fundamentals", route: "/learning/networks" },
  { id: "models", name: "2. Network Models (OSI & TCP/IP)", route: "/learning/networks/models" },
  { id: "physical", name: "3. Physical Layer & Transmission", route: "/learning/networks/physical" },
  { id: "datalink", name: "4. Data Link Layer & Ethernet", route: "/learning/networks/datalink" },
  { id: "ipv4", name: "5. IPv4 Addressing & Subnetting", route: "/learning/networks/ipv4" },
  { id: "ipv6", name: "6. IPv6 & Modern Addressing", route: "/learning/networks/ipv6" },
  { id: "routing", name: "7. Routing & Router Architecture", route: "/learning/networks/routing" },
  { id: "config", name: "8. ICMP, ARP, DHCP & Host Config", route: "/learning/networks/config" },
  { id: "tcp", name: "9. TCP — Reliable Transport", route: "/learning/networks/tcp" },
  { id: "udp", name: "10. UDP, QUIC & Modern Transport", route: "/learning/networks/udp" },
  { id: "dns", name: "11. DNS & Internet Naming", route: "/learning/networks/dns" },
  { id: "applayer", name: "12. Application Protocols & Web", route: "/learning/networks/application-layer" },
  { id: "wireless", name: "13. Wireless, Wi-Fi & Mobile", route: "/learning/networks/wireless" },
  { id: "switching", name: "14. Switching, VLANs & LAN Design", route: "/learning/networks/switching" },
  { id: "firewalls", name: "15. Firewalls & Access Control", route: "/learning/networks/firewalls" },
  { id: "enterprise-cloud", name: "16. Enterprise, Data Center & Cloud", route: "/learning/networks/enterprise-cloud" },
  { id: "threat-modeling", name: "17. Security & Threat Modeling", route: "/learning/networks/threat-modeling" },
  { id: "packet-analysis", name: "18. Packet Analysis & Recon", route: "/learning/networks/packet-analysis" },
  { id: "attacks", name: "19. Attacks & Countermeasures", route: "/learning/networks/attacks-defenses" },
  { id: "ids-ips-soc", name: "20. IDS/IPS & SOC Monitoring", route: "/learning/networks/ids-ips-soc" },
  { id: "network-automation", name: "21. Network Programming & Automation", route: "/learning/networks/network-automation" },
  { id: "advanced-routing", name: "22. Advanced Routing & Troubleshooting", route: "/learning/networks/advanced-routing" },
  { id: "security-architecture", name: "23. Modern Network Security Architecture", route: "/learning/networks/security-architecture" },
  { id: "final-capstone", name: "24. Final Capstone: Network Engineering Lab", route: "/learning/networks/final-capstone" },
];

export const CYBERSECURITY_MODULES = [
  { id: "intro", name: "1. Intro & Ethical Hacking", route: "/learning/cybersecurity" },
  { id: "networking", name: "2. Networking for Cyber", route: "/learning/cybersecurity/networking" },
  { id: "systems", name: "3. OS Internals & Hardening", route: "/learning/cybersecurity/systems" },
  { id: "threat-modeling", name: "4. Threat Modeling & Risk", route: "/learning/cybersecurity/threat-modeling" },
  { id: "methodology", name: "5. Methodology, Scope & RoE", route: "/learning/cybersecurity/methodology" },
  { id: "osint", name: "6. OSINT & Passive Recon", route: "/learning/cybersecurity/osint" },
  { id: "recon", name: "7. Active Recon & Enumeration", route: "/learning/cybersecurity/recon" },
  { id: "vulnerability-assessment", name: "8. Vulnerability Assessment & CVSS", route: "/learning/cybersecurity/vulnerability-assessment" },
  { id: "network-security", name: "9. Network Security & Firewalls", route: "/learning/cybersecurity/network-security" },
  { id: "os-security", name: "10. OS Security & Hardening", route: "/learning/cybersecurity/os-security" },
  { id: "iam", name: "11. Identity & Access Management", route: "/learning/cybersecurity/iam" },
  { id: "cryptography", name: "12. Cryptography, PKI & TLS", route: "/learning/cybersecurity/cryptography" },
  { id: "web-security", name: "13. Web Architecture, Sessions & Browser Security", route: "/learning/cybersecurity/web-security" },
  { id: "owasp-top-10", name: "14. OWASP Top 10 & Injection Prevention", route: "/learning/cybersecurity/owasp-top-10" },
  { id: "auth-api-security", name: "15. Auth Flaws, Access Control & API Security", route: "/learning/cybersecurity/auth-api-security" },
  { id: "secure-code-review", name: "16. Secure Code Review & Testing", route: "/learning/cybersecurity/secure-code-review" },
  { id: "wireless-security", name: "17. Wireless Security & Wi-Fi Defense", route: "/learning/cybersecurity/wireless-security" },
  { id: "cloud-security", name: "18. Cloud Security, Containers & IAM", route: "/learning/cybersecurity/cloud-security" },
  { id: "malware-analysis", name: "19. Malware Analysis & Ransomware Defense", route: "/learning/cybersecurity/malware-analysis" },
  { id: "burp-suite", name: "20. Web PenTesting (Burp Suite)", route: "/learning/cybersecurity/burp-suite" },
  { id: "exploitation", name: "21. Exploitation & Metasploit", route: "/learning/cybersecurity/exploitation" },
  { id: "privilege-escalation", name: "22. Privilege Escalation", route: "/learning/cybersecurity/privilege-escalation" },
  { id: "active-directory", name: "23. Active Directory Security", route: "/learning/cybersecurity/active-directory" },
  { id: "soc-siem", name: "24. Defensive Ops & SOC/SIEM", route: "/learning/cybersecurity/soc-siem" },
  { id: "threat-hunting", name: "25. Endpoint Detection & Hunting", route: "/learning/cybersecurity/threat-hunting" },
  { id: "dfir", name: "26. Digital Forensics & Incident Response", route: "/learning/cybersecurity/dfir" },
  { id: "threat-intel", name: "27. Threat Intel & MITRE ATT&CK", route: "/learning/cybersecurity/threat-intel" },
  { id: "red-blue-team", name: "28. Red Teaming vs Blue Teaming", route: "/learning/cybersecurity/red-blue-team" },
  { id: "incident-response", name: "29. Incident Response & Crisis Ops", route: "/learning/cybersecurity/incident-response" },
  { id: "capstone", name: "30. Final Capstone: Security Assessment", route: "/learning/cybersecurity/capstone" },
];

export default function ModuleNav({
  track = "cloud",
  currentModuleId = "cloud",
  showAiTutor,
  onAiTutorToggle,
  aiTutorLabel,
}) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const modules =
    track === "devops"
      ? DEVOPS_MODULES
      : track === "system-design"
      ? SYSTEM_DESIGN_MODULES
      : track === "os"
      ? OS_MODULES
      : track === "networks"
      ? NETWORKS_MODULES
      : track === "cybersecurity"
      ? CYBERSECURITY_MODULES
      : CLOUD_MODULES;

  const defaultFallback =
    currentModuleId === (track === "devops" ? "linux" : track === "system-design" ? "intro" : track === "os" ? "intro" : track === "networks" ? "intro" : track === "cybersecurity" ? "intro" : "cloud")
      ? "/learning"
      : track === "devops"
      ? "/learning/devops/linux"
      : track === "system-design"
      ? "/learning/system-design"
      : track === "os"
      ? "/learning/os"
      : track === "networks"
      ? "/learning/networks"
      : track === "cybersecurity"
      ? "/learning/cybersecurity"
      : "/learning/cloud";

  const { goBack } = useSafeBack(defaultFallback);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-8 flex flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
        {/* Back and Breadcrumb Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goBack()}
            className="flex items-center gap-1.5 rounded-xl border border-[#e7e3da] bg-white/90 px-3.5 py-2 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs backdrop-blur-md active:scale-95 cursor-pointer"
            title="Go back to previous page"
            aria-label="Go back"
          >
            <ArrowLeft size={15} />
            <span>Back</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/learning")}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-xs font-semibold text-stone-500 hover:text-stone-900 transition cursor-pointer"
            title="Jump to Curriculum Overview"
          >
            <span>Curriculum Overview</span>
          </button>
        </div>

        {/* Right Header Status / Brand or AI Tutor */}
        <div className="flex items-center gap-2">
          {SHOW_NOVA_AI && onAiTutorToggle ? (
            <button
              type="button"
              onClick={onAiTutorToggle}
              className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold transition shadow-xs backdrop-blur-md active:scale-95 ${
                showAiTutor
                  ? "border-[#f97316] bg-[#f97316] text-white shadow-orange-500/20"
                  : "border-[#e7e3da] bg-white/90 text-stone-700 hover:border-orange-300 hover:text-[#f97316]"
              }`}
            >
              <Sparkles size={14} className={showAiTutor ? "animate-pulse" : "text-[#f97316]"} />
              <span>{showAiTutor ? "Close Nova AI" : aiTutorLabel || "Ask Nova AI Tutor"}</span>
            </button>
          ) : (
            <Logo
              size="xs"
              suffix={
                track === "devops"
                  ? "DevOps"
                  : track === "system-design"
                  ? "System Design"
                  : track === "os"
                  ? "Operating Systems"
                  : track === "networks"
                  ? "Computer Networks"
                  : track === "cybersecurity"
                  ? "Cybersecurity"
                  : "Cloud"
              }
            />
          )}
        </div>
      </div>

      {/* Module Tabs Bar (Displaying Module Names Only) */}
      <div className="relative flex items-center">
        {/* Left Scroll Arrow for Mobile/Tablet */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll modules left"
          className="hidden md:flex shrink-0 h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white/80 text-stone-500 hover:text-stone-900 transition mr-1.5 shadow-2xs"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Scrollable Container with Only Module Names */}
        <div
          ref={scrollRef}
          className="flex-1 flex items-center gap-1.5 overflow-x-auto rounded-2xl border border-[#e7e3da] bg-white/80 p-1.5 shadow-2xs backdrop-blur-md scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {modules.map((mod) => {
            const isActive = mod.id === currentModuleId;
            return (
              <button
                key={mod.id}
                onClick={() => navigate(mod.route)}
                className={`shrink-0 whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#f97316] text-white shadow-sm shadow-orange-500/25"
                    : "text-stone-600 hover:bg-stone-100/80 hover:text-stone-900"
                }`}
              >
                {mod.name}
              </button>
            );
          })}
        </div>

        {/* Right Scroll Arrow for Mobile/Tablet */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll modules right"
          className="hidden md:flex shrink-0 h-8 w-8 items-center justify-center rounded-lg border border-[#e7e3da] bg-white/80 text-stone-500 hover:text-stone-900 transition ml-1.5 shadow-2xs"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
