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
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 10                          */
/* Operating System Security, Hardening, Permissions & Privilege Management   */
/* Informed by NIST SP 800-123, CIS Benchmarks, Microsoft Security & Red Hat  */
/* -------------------------------------------------------------------------- */

export default function CybersecurityOSHardening() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'chmod-sim' | 'ntfs-sim' | 'mac-dac' | 'audit-lab' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 1: LINUX CHMOD & PERMISSION CALCULATOR WITH SUID/SGID/STICKY     */
  /* -------------------------------------------------------------------------- */
  const [specialBits, setSpecialBits] = useState({ suid: false, sgid: false, sticky: false });
  const [ownerPerms, setOwnerPerms] = useState({ r: true, w: true, x: false });
  const [groupPerms, setGroupPerms] = useState({ r: true, w: false, x: false });
  const [otherPerms, setOtherPerms] = useState({ r: false, w: false, x: false });
  const [fileType, setFileType] = useState("file"); // 'file' | 'dir'
  const [fileName, setFileName] = useState("app_secret.conf");
  const [fileOwner, setFileOwner] = useState("appuser");
  const [fileGroup, setFileGroup] = useState("appgroup");

  const permissionCalc = useMemo(() => {
    // Special digit
    let specialDigit = 0;
    if (specialBits.suid) specialDigit += 4;
    if (specialBits.sgid) specialDigit += 2;
    if (specialBits.sticky) specialDigit += 1;

    // Owner digit
    let ownerDigit = 0;
    if (ownerPerms.r) ownerDigit += 4;
    if (ownerPerms.w) ownerDigit += 2;
    if (ownerPerms.x) ownerDigit += 1;

    // Group digit
    let groupDigit = 0;
    if (groupPerms.r) groupDigit += 4;
    if (groupPerms.w) groupDigit += 2;
    if (groupPerms.x) groupDigit += 1;

    // Others digit
    let otherDigit = 0;
    if (otherPerms.r) otherDigit += 4;
    if (otherPerms.w) otherDigit += 2;
    if (otherPerms.x) otherDigit += 1;

    const octal3 = `${ownerDigit}${groupDigit}${otherDigit}`;
    const octal4 = `${specialDigit}${ownerDigit}${groupDigit}${otherDigit}`;

    // Symbolic string representation
    const typeChar = fileType === "dir" ? "d" : "-";

    // Owner string
    let oR = ownerPerms.r ? "r" : "-";
    let oW = ownerPerms.w ? "w" : "-";
    let oX = "-";
    if (specialBits.suid) {
      oX = ownerPerms.x ? "s" : "S";
    } else {
      oX = ownerPerms.x ? "x" : "-";
    }

    // Group string
    let gR = groupPerms.r ? "r" : "-";
    let gW = groupPerms.w ? "w" : "-";
    let gX = "-";
    if (specialBits.sgid) {
      gX = groupPerms.x ? "s" : "S";
    } else {
      gX = groupPerms.x ? "x" : "-";
    }

    // Other string
    let tR = otherPerms.r ? "r" : "-";
    let tW = otherPerms.w ? "w" : "-";
    let tX = "-";
    if (specialBits.sticky) {
      tX = otherPerms.x ? "t" : "T";
    } else {
      tX = otherPerms.x ? "x" : "-";
    }

    const symbolic = `${typeChar}${oR}${oW}${oX}${gR}${gW}${gX}${tR}${tW}${tX}`;

    // Security Analysis & Threat Heuristics
    const risks = [];
    if (otherPerms.w) {
      risks.push({
        level: "CRITICAL",
        text: "World-writable (others have write permission): Any unprivileged user or process can tamper with or replace this file.",
      });
    }
    if (specialBits.suid && fileType === "file") {
      if (otherPerms.w || groupPerms.w) {
        risks.push({
          level: "CRITICAL",
          text: "SUID bit active with group or world write access: Instant root privilege escalation vector!",
        });
      } else {
        risks.push({
          level: "HIGH",
          text: "SUID bit active: Process runs under file owner's privileges. Inspect binary for shell breakouts (GTFOBins) or buffer overflows.",
        });
      }
    }
    if (fileType === "dir" && otherPerms.w && !specialBits.sticky) {
      risks.push({
        level: "HIGH",
        text: "Shared directory is world-writable without Sticky Bit: Unprivileged users can delete or rename each other's files.",
      });
    }
    if (fileName.includes("key") || fileName.includes("secret") || fileName.includes(".env")) {
      if (otherPerms.r || groupPerms.r) {
        risks.push({
          level: "MEDIUM",
          text: "Sensitive file (key/secret/.env) is readable by group or others. Recommended chmod: 600 or 640.",
        });
      }
    }
    if (fileType === "dir" && !ownerPerms.x) {
      risks.push({
        level: "WARNING",
        text: "Directory owner lacks Execute (x) permission: Cannot traverse or cd into this directory.",
      });
    }

    return {
      octal3,
      octal4,
      symbolic,
      specialDigit,
      ownerDigit,
      groupDigit,
      otherDigit,
      risks,
    };
  }, [specialBits, ownerPerms, groupPerms, otherPerms, fileType, fileName]);

  const loadChmodPreset = (presetKey) => {
    switch (presetKey) {
      case "ssh_key":
        setFileType("file");
        setFileName("id_ed25519");
        setSpecialBits({ suid: false, sgid: false, sticky: false });
        setOwnerPerms({ r: true, w: true, x: false });
        setGroupPerms({ r: false, w: false, x: false });
        setOtherPerms({ r: false, w: false, x: false });
        break;
      case "web_config":
        setFileType("file");
        setFileName("nginx.conf");
        setSpecialBits({ suid: false, sgid: false, sticky: false });
        setOwnerPerms({ r: true, w: true, x: false });
        setGroupPerms({ r: true, w: false, x: false });
        setOtherPerms({ r: false, w: false, x: false });
        break;
      case "script_exec":
        setFileType("file");
        setFileName("backup_rotate.sh");
        setSpecialBits({ suid: false, sgid: false, sticky: false });
        setOwnerPerms({ r: true, w: true, x: true });
        setGroupPerms({ r: true, w: false, x: true });
        setOtherPerms({ r: false, w: false, x: false });
        break;
      case "shared_tmp":
        setFileType("dir");
        setFileName("/tmp");
        setSpecialBits({ suid: false, sgid: false, sticky: true });
        setOwnerPerms({ r: true, w: true, x: true });
        setGroupPerms({ r: true, w: true, x: true });
        setOtherPerms({ r: true, w: true, x: true });
        break;
      case "suid_vuln":
        setFileType("file");
        setFileName("custom_ping");
        setSpecialBits({ suid: true, sgid: false, sticky: false });
        setOwnerPerms({ r: true, w: true, x: true });
        setGroupPerms({ r: true, w: true, x: true });
        setOtherPerms({ r: true, w: false, x: true });
        break;
      default:
        break;
    }
  };

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 2: WINDOWS NTFS ACL & TOKEN PRIVILEGE EVALUATOR                   */
  /* -------------------------------------------------------------------------- */
  const [currentUser, setCurrentUser] = useState("Alice (Standard User)");
  const [isElevated, setIsElevated] = useState(false);
  const [targetResource, setTargetResource] = useState("C:\\Program Files\\App\\config.ini");
  const [aclEntries, setAclEntries] = useState([
    { id: 1, trustee: "Administrators", type: "ALLOW", permission: "Full Control", inherited: false },
    { id: 2, trustee: "SYSTEM", type: "ALLOW", permission: "Full Control", inherited: true },
    { id: 3, trustee: "Users (Standard)", type: "ALLOW", permission: "Read & Execute", inherited: true },
    { id: 4, trustee: "Users (Standard)", type: "DENY", permission: "Write", inherited: false },
    { id: 5, trustee: "Alice", type: "ALLOW", permission: "Modify", inherited: false },
  ]);

  const ntfsEvaluation = useMemo(() => {
    // Windows NTFS ACE Evaluation rules:
    // 1. Explicit Deny
    // 2. Explicit Allow
    // 3. Inherited Deny
    // 4. Inherited Allow
    // 5. Implicit Deny if no match
    let isAdmin = currentUser.includes("Admin") || (currentUser.includes("Alice") && isElevated);
    let isSystem = currentUser.includes("SYSTEM");

    let trusteeMatches = [];
    if (isSystem) trusteeMatches.push("SYSTEM");
    if (isAdmin) {
      trusteeMatches.push("Administrators");
      trusteeMatches.push("Users (Standard)");
    } else {
      trusteeMatches.push("Users (Standard)");
      if (currentUser.includes("Alice")) trusteeMatches.push("Alice");
    }

    const relevantAces = aclEntries.filter((ace) => trusteeMatches.includes(ace.trustee));

    // Check explicit deny
    const explicitDeny = relevantAces.find((ace) => !ace.inherited && ace.type === "DENY");
    if (explicitDeny) {
      return {
        granted: false,
        reason: `Explicit DENY ACE matched for trustee '${explicitDeny.trustee}' (${explicitDeny.permission}). Explicit Deny overrides all Allow permissions in NTFS DACL.`,
        matchedAce: explicitDeny,
        effectiveRights: ["Read (Partial)"],
      };
    }

    // Check explicit allow
    const explicitAllow = relevantAces.find((ace) => !ace.inherited && ace.type === "ALLOW");
    if (explicitAllow) {
      return {
        granted: true,
        reason: `Explicit ALLOW ACE matched for '${explicitAllow.trustee}' with '${explicitAllow.permission}'. User has valid token SID and access is granted.`,
        matchedAce: explicitAllow,
        effectiveRights: explicitAllow.permission === "Full Control" ? ["Read", "Write", "Execute", "Delete", "ChangePermissions"] : ["Read", "Write", "Execute"],
      };
    }

    // Check inherited deny
    const inheritedDeny = relevantAces.find((ace) => ace.inherited && ace.type === "DENY");
    if (inheritedDeny) {
      return {
        granted: false,
        reason: `Inherited DENY ACE matched for trustee '${inheritedDeny.trustee}'.`,
        matchedAce: inheritedDeny,
        effectiveRights: [],
      };
    }

    // Check inherited allow
    const inheritedAllow = relevantAces.find((ace) => ace.inherited && ace.type === "ALLOW");
    if (inheritedAllow) {
      return {
        granted: true,
        reason: `Inherited ALLOW ACE matched for '${inheritedAllow.trustee}' with '${inheritedAllow.permission}'.`,
        matchedAce: inheritedAllow,
        effectiveRights: inheritedAllow.permission === "Full Control" ? ["Read", "Write", "Execute", "Delete"] : ["Read", "Execute"],
      };
    }

    return {
      granted: false,
      reason: "Implicit Deny: No matching Access Control Entry (ACE) granted permission to the caller's Security Identifier (SID).",
      matchedAce: null,
      effectiveRights: [],
    };
  }, [currentUser, isElevated, aclEntries]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 3: MANDATORY ACCESS CONTROL (SELinux/AppArmor) VS DAC            */
  /* -------------------------------------------------------------------------- */
  const [macFramework, setMacFramework] = useState("selinux"); // 'selinux' | 'apparmor'
  const [macMode, setMacMode] = useState("enforcing"); // 'enforcing' | 'permissive' | 'disabled'
  const [selectedAttackAction, setSelectedAttackAction] = useState("read_shadow");

  const attackActions = [
    {
      id: "read_web",
      name: "1. Read /var/www/html/index.php",
      dacPerms: "-rw-r--r-- root:root",
      dacResult: "ALLOW",
      selinuxContext: "system_u:object_r:httpd_sys_content_t:s0",
      apparmorProfile: "/var/www/** r",
      macAllowed: true,
      desc: "Legitimate web server behavior to serve static content or script files.",
    },
    {
      id: "write_webroot",
      name: "2. Write web shell to /var/www/html/backdoor.php",
      dacPerms: "drwxr-xr-x www-data:www-data",
      dacResult: "ALLOW",
      selinuxContext: "system_u:object_r:httpd_sys_content_t:s0 (read-only in targeted policy)",
      apparmorProfile: "No write flag in standard apache2 profile",
      macAllowed: false,
      desc: "Attacker attempts to drop a web shell into web root via arbitrary file upload exploit.",
    },
    {
      id: "read_shadow",
      name: "3. Read /etc/shadow (Password hashes)",
      dacPerms: "-rw-r----- root:shadow",
      dacResult: "DENY",
      selinuxContext: "system_u:object_r:shadow_t:s0",
      apparmorProfile: "Denied by default system profile",
      macAllowed: false,
      desc: "Attacker attempts local credential dumping. DAC denies if process runs as www-data.",
    },
    {
      id: "bind_shell",
      name: "4. Spawn /bin/bash & Bind socket on port 4444",
      dacPerms: "-rwxr-xr-x root:root (/bin/bash executable by all)",
      dacResult: "ALLOW",
      selinuxContext: "httpd_t transition to shell_exec_t is blocked by TE rule",
      apparmorProfile: "deny /bin/bash exec in apache2 profile",
      macAllowed: false,
      desc: "Attacker triggers remote command execution to get an interactive reverse shell.",
    },
  ];

  const currentActionData = attackActions.find((a) => a.id === selectedAttackAction);

  const macOutcome = useMemo(() => {
    const isDacAllowed = currentActionData.dacResult === "ALLOW";
    const isMacAllowed = currentActionData.macAllowed;

    let finalResult = "BLOCKED";
    let explanation = "";

    if (!isDacAllowed) {
      finalResult = "BLOCKED BY DAC";
      explanation = `Discretionary Access Control (POSIX file mode bits) denied the request before MAC was even evaluated.`;
    } else {
      // DAC allows
      if (macMode === "disabled") {
        finalResult = "EXPLOIT SUCCEEDED (Vulnerable)";
        explanation = `DAC allowed the operation and MAC is DISABLED. Attacker successfully executes unauthorized action!`;
      } else if (macMode === "permissive") {
        if (!isMacAllowed) {
          finalResult = "EXPLOIT SUCCEEDED (With Audit Log)";
          explanation = `DAC allowed the action. MAC policy would reject it, but ${macFramework === "selinux" ? "SELinux" : "AppArmor"} is in PERMISSIVE/COMPLAIN mode. An AVC audit event was generated, but the attack proceeded!`;
        } else {
          finalResult = "ALLOWED (Legitimate)";
          explanation = `Both DAC and MAC permitted this legitimate action.`;
        }
      } else {
        // Enforcing
        if (!isMacAllowed) {
          finalResult = "BLOCKED BY MAC (Confined)";
          explanation = `DAC mode bits allowed the operation, but ${macFramework === "selinux" ? "SELinux Type Enforcement" : "AppArmor profile constraint"} intercepted and terminated the system call! Attacker payload halted.`;
        } else {
          finalResult = "ALLOWED (Legitimate)";
          explanation = `Action conforms with least-privilege security policy.`;
        }
      }
    }

    return { finalResult, explanation };
  }, [macMode, macFramework, currentActionData]);

  /* -------------------------------------------------------------------------- */
  /* SIMULATOR 4: HOST HARDENING AUDIT & REMEDIATION WORKBENCH                  */
  /* -------------------------------------------------------------------------- */
  const [auditOs, setAuditOs] = useState("linux"); // 'linux' | 'windows'
  const [auditItems, setAuditItems] = useState([
    {
      id: "l1",
      os: "linux",
      category: "Privilege",
      item: "Root SSH remote password login enabled",
      status: "VULNERABLE",
      command: "grep '^PermitRootLogin' /etc/ssh/sshd_config",
      output: "PermitRootLogin yes",
      remediation: "sed -i 's/^PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config && systemctl reload sshd",
      risk: "Brute force and credential spraying directly against UID 0 superuser account.",
      rollback: "sed -i 's/^PermitRootLogin no/PermitRootLogin yes/' /etc/ssh/sshd_config && systemctl reload sshd",
    },
    {
      id: "l2",
      os: "linux",
      category: "Permissions",
      item: "Sensitive /etc/shadow permissions are too open",
      status: "VULNERABLE",
      command: "stat -c '%a %U:%G' /etc/shadow",
      output: "644 root:root (World-readable!)",
      remediation: "chmod 640 /etc/shadow && chown root:shadow /etc/shadow",
      risk: "Local unprivileged users can read salted password hashes and crack them offline.",
      rollback: "chmod 644 /etc/shadow",
    },
    {
      id: "l3",
      os: "linux",
      category: "Services",
      item: "Legacy unencrypted Telnet service active",
      status: "VULNERABLE",
      command: "systemctl is-active inetd telnetd",
      output: "active (running) listening on 0.0.0.0:23",
      remediation: "systemctl stop telnetd && systemctl disable telnetd && apt purge -y telnetd",
      risk: "Cleartext credentials and commands transmitted across the network, vulnerable to sniffing.",
      rollback: "apt install -y telnetd && systemctl enable --now telnetd",
    },
    {
      id: "l4",
      os: "linux",
      category: "Kernel",
      item: "Core dumps enabled for setuid processes",
      status: "VULNERABLE",
      command: "sysctl fs.suid_dumpable",
      output: "fs.suid_dumpable = 2",
      remediation: "echo 'fs.suid_dumpable = 0' >> /etc/sysctl.d/99-hardening.conf && sysctl -p",
      risk: "Crashed privileged executables dump memory contents containing sensitive tokens or keys to disk.",
      rollback: "echo 'fs.suid_dumpable = 2' > /etc/sysctl.d/99-hardening.conf && sysctl -p",
    },
    {
      id: "w1",
      os: "windows",
      category: "Identity",
      item: "Built-in Administrator account enabled with default name",
      status: "VULNERABLE",
      command: "Get-LocalUser -Name 'Administrator' | Select-Object Name, Enabled",
      output: "Administrator : Enabled",
      remediation: "Disable-LocalUser -Name 'Administrator' # or rename via secpol.msc",
      risk: "Predictable target name for automated Pass-the-Hash and RDP credential attacks.",
      rollback: "Enable-LocalUser -Name 'Administrator'",
    },
    {
      id: "w2",
      os: "windows",
      category: "Firewall",
      item: "Windows Defender Firewall disabled on Public profile",
      status: "VULNERABLE",
      command: "Get-NetFirewallProfile -Profile Public | Select-Object Enabled, DefaultInboundAction",
      output: "Enabled: False, DefaultInboundAction: Allow",
      remediation: "Set-NetFirewallProfile -Profile Public -Enabled True -DefaultInboundAction Block",
      risk: "Direct network interface exposure when connected to untrusted public networks or guest Wi-Fi.",
      rollback: "Set-NetFirewallProfile -Profile Public -Enabled False",
    },
    {
      id: "w3",
      os: "windows",
      category: "Auditing",
      item: "PowerShell Script Block Logging (EID 4104) disabled",
      status: "VULNERABLE",
      command: "Get-ItemProperty 'HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging'",
      output: "Property Not Found / Disabled",
      remediation: "Set-ItemProperty 'HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging' -Name EnableScriptBlockLogging -Value 1",
      risk: "Blindness to in-memory PowerShell attacks, obfuscated payloads, and living-off-the-land techniques.",
      rollback: "Remove-ItemProperty 'HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging' -Name EnableScriptBlockLogging",
    },
    {
      id: "w4",
      os: "windows",
      category: "Storage",
      item: "BitLocker full-disk volume encryption not activated",
      status: "VULNERABLE",
      command: "Get-BitLockerVolume -MountPoint 'C:' | Select-Object VolumeStatus, ProtectionStatus",
      output: "VolumeStatus: FullyDecrypted, ProtectionStatus: Off",
      remediation: "Enable-BitLocker -MountPoint 'C:' -EncryptionMethod XtsAes256 -UsedSpaceOnly -TpmProtector",
      risk: "Physical theft or offline drive mounting exposes all files and SAM registry credentials directly.",
      rollback: "Disable-BitLocker -MountPoint 'C:'",
    },
  ]);

  const toggleRemediate = (id) => {
    setAuditItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "VULNERABLE" ? "REMEDIATED" : "VULNERABLE" }
          : item
      )
    );
  };

  const filteredAuditItems = auditItems.filter((item) => item.os === auditOs);
  const remediatedCount = filteredAuditItems.filter((item) => item.status === "REMEDIATED").length;

  /* -------------------------------------------------------------------------- */
  /* QUIZ DATA: 8 COMPREHENSIVE QUESTIONS FROM SECTION 10.14                   */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "Which principle limits a user to only the permissions needed for their role?",
      options: [
        "Defense through obscurity",
        "Least privilege",
        "Maximum availability",
        "Implicit trust",
      ],
      correctIndex: 1,
      explanation:
        "The Principle of Least Privilege (PoLP) states that subjects (users, accounts, processes) should operate with the bare minimum set of privileges necessary to perform their legitimate job functions.",
    },
    {
      id: 2,
      question: "What does chmod 640 report.txt grant to the owning group?",
      options: [
        "Read and write",
        "Read only",
        "Execute only",
        "No permissions for the owner",
      ],
      correctIndex: 1,
      explanation:
        "In octal notation, chmod 640 translates to: Owner = 6 (4+2 = rw-), Group = 4 (4 = r--), Others = 0 (---). Therefore, the owning group has Read-only permission.",
    },
    {
      id: 3,
      question: "Why should a Linux service usually avoid running as root when it does not need elevated privileges?",
      options: [
        "It improves screen resolution",
        "It reduces the impact of service compromise",
        "It prevents all software bugs",
        "It disables audit logs",
      ],
      correctIndex: 1,
      explanation:
        "If a service running as root is compromised (e.g. through remote code execution), the attacker inherits full UID 0 root control over the entire system. Running as a dedicated low-privilege service account restricts the blast radius.",
    },
    {
      id: 4,
      question: "What is the main purpose of a security baseline?",
      options: [
        "Guarantee a system can never be compromised",
        "Define approved secure configuration settings",
        "Replace patch management",
        "Allow all applications by default",
      ],
      correctIndex: 1,
      explanation:
        "A security baseline (such as CIS Benchmarks or Microsoft Security Baselines) defines an approved, hardened set of configuration settings tailored for a specific operating system, role, or environment.",
    },
    {
      id: 5,
      question: "What should an administrator do before making a potentially disruptive hardening change?",
      options: [
        "Apply it to every system immediately",
        "Disable logging",
        "Record the current state and prepare rollback and validation steps",
        "Delete the old configuration",
      ],
      correctIndex: 2,
      explanation:
        "Before modifying core system settings, administrators must take backups or snapshots, document the existing state, verify dependencies, and prepare a tested rollback procedure to prevent production outages.",
    },
    {
      id: 6,
      question: "What is the role of Windows NTFS ACLs?",
      options: [
        "Control access to files and directories",
        "Encrypt all network traffic",
        "Replace endpoint protection",
        "Automatically patch applications",
      ],
      correctIndex: 0,
      explanation:
        "NTFS Access Control Lists (ACLs) contain Access Control Entries (ACEs) that specify which security identifiers (users or groups) have permissions (such as Read, Write, Modify, Full Control) on files and folders.",
    },
    {
      id: 7,
      question: "What does a successful patch installation prove?",
      options: [
        "The whole system is secure",
        "No vulnerabilities remain",
        "The update installed, but further verification is still required",
        "All services should be disabled",
      ],
      correctIndex: 2,
      explanation:
        "A patch package installation merely records that the files were copied; full verification requires confirming services restarted cleanly, dependencies remain compatible, regression testing passes, and no reboot is pending.",
    },
    {
      id: 8,
      question: "What is the purpose of SELinux or AppArmor?",
      options: [
        "Provide policy-based restrictions on process access",
        "Replace all file permissions",
        "Guarantee that malware cannot execute",
        "Automatically encrypt every file",
      ],
      correctIndex: 0,
      explanation:
        "SELinux and AppArmor provide Mandatory Access Control (MAC), enforcing kernel-level security policies and confinement profiles that limit process access even if traditional discretionary (DAC) permissions would allow it.",
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
  /* CHECKLIST: 16-POINT PROFESSIONAL HOST HARDENING CHECKLIST (10.15)          */
  /* -------------------------------------------------------------------------- */
  const [checklist, setChecklist] = useState([
    { id: "c1", category: "Identity and Privileges", text: "Individual user accounts are used where practical (no shared admin logins)", checked: false },
    { id: "c2", category: "Identity and Privileges", text: "Administrative access is restricted and reviewed (sudo -l scoped, no broad ALL)", checked: false },
    { id: "c3", category: "Identity and Privileges", text: "Service accounts have only required privileges (no daemons running as root needlessly)", checked: false },
    { id: "c4", category: "Identity and Privileges", text: "Dormant accounts and unnecessary group memberships are reviewed and locked", checked: false },
    { id: "c5", category: "Configuration and Exposure", text: "Operating system is supported and actively receiving security patches", checked: false },
    { id: "c6", category: "Configuration and Exposure", text: "Unnecessary services and legacy software (telnet, rsh, old daemons) are removed", checked: false },
    { id: "c7", category: "Configuration and Exposure", text: "Host firewall rules match the system's role with default-deny inbound posture", checked: false },
    { id: "c8", category: "Configuration and Exposure", text: "Sensitive files have appropriate permissions and ownership (chmod 600/640, NTFS DACL)", checked: false },
    { id: "c9", category: "Protection and Monitoring", text: "Endpoint and built-in security controls (Defender, SELinux/AppArmor) are configured", checked: false },
    { id: "c10", category: "Protection and Monitoring", text: "Disk encryption (BitLocker / LUKS) and recovery procedures are verified", checked: false },
    { id: "c11", category: "Protection and Monitoring", text: "Authentication and privileged actions are logged (auth.log, Windows Security EID 4624/4672)", checked: false },
    { id: "c12", category: "Protection and Monitoring", text: "Critical configuration and binary changes are monitored via File Integrity Monitoring (FIM)", checked: false },
    { id: "c13", category: "Operations and Recovery", text: "Backups and recovery procedures are tested and stored securely off-host", checked: false },
    { id: "c14", category: "Operations and Recovery", text: "Hardening changes have documented rollback plans before deployment", checked: false },
    { id: "c15", category: "Operations and Recovery", text: "Configuration exceptions have documented owners, business justification, and review dates", checked: false },
    { id: "c16", category: "Operations and Recovery", text: "Findings and remediation controls are independently verified after deployment", checked: false },
  ]);

  const toggleChecklist = (id) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const checkedCount = checklist.filter((i) => i.checked).length;

  const copyChecklistSummary = () => {
    const text = checklist
      .map((item) => `[${item.checked ? "X" : " "}] ${item.category}: ${item.text}`)
      .join("\n");
    navigator.clipboard.writeText(`PREPSPACES HOST HARDENING AUDIT REPORT (${checkedCount}/16 Completed):\n\n${text}`);
    alert("Audit checklist copied to clipboard!");
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
                    Module 10 • Advanced Foundational
                  </span>
                  <span className="text-xs text-stone-500 font-mono">CIS &amp; NIST SP 800-123</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
                  <ShieldCheck className="text-orange-600" size={22} />
                  Operating System Security, Hardening, Permissions &amp; Privilege Management
                </h1>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAiTutor(!showAiTutor)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-sm hover:from-orange-700 hover:to-amber-700 transition-all"
              >
                <Sparkles size={14} />
                <span>Nova AI Tutor</span>
              </button>
              <button
                onClick={() => navigate("/learning/cybersecurity/network-security")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors"
                title="Previous: Module 9"
              >
                <ArrowLeft size={14} />
                <span>Mod 9</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* TRACK SUB-NAVIGATION */}
      <ModuleNav currentModuleId="os-hardening" track="cybersecurity" />

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
              onClick={() => setActiveTab("chmod-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "chmod-sim"
                  ? "bg-orange-600 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Binary size={16} />
              <span>Linux chmod &amp; SUID Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab("ntfs-sim")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "ntfs-sim"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <FolderLock size={16} />
              <span>Windows NTFS &amp; UAC Token Lab</span>
            </button>

            <button
              onClick={() => setActiveTab("mac-dac")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "mac-dac"
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <LockKeyhole size={16} />
              <span>SELinux / AppArmor vs DAC Sandbox</span>
            </button>

            <button
              onClick={() => setActiveTab("audit-lab")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "audit-lab"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              }`}
            >
              <Wrench size={16} />
              <span>Host Hardening Audit Lab</span>
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
              <span>Module 10 Quiz (8 Qs)</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ========================================================================= */}
        {/* TAB 1: FULL CURRICULUM (10.1 - 10.15)                                    */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-10">
            {/* 10.1 MODULE OVERVIEW */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <ShieldCheck size={16} />
                <span>10.1 Module Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-4">
                Operating System Security, Hardening, Permissions, and Privilege Management
              </h2>
              <p className="text-base text-stone-700 leading-relaxed mb-6">
                Operating systems are the foundational layer on which applications, databases, network services, and security tools run. If an operating system is misconfigured, unpatched, or granted excessive privileges, an attacker who gains a foothold may access sensitive information, execute arbitrary commands, establish persistence, and pivot across the internal network.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/80">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    Target Learning Objectives
                  </h3>
                  <ul className="text-xs sm:text-sm text-stone-600 space-y-2">
                    <li>• Explain OS security architecture, hardware rings, and host-level attack vectors.</li>
                    <li>• Apply secure configuration and hardening benchmarks to Linux and Windows hosts.</li>
                    <li>• Master users, groups, POSIX numeric file permissions, SUID/SGID/sticky bits, and ACLs.</li>
                    <li>• Implement strict Least Privilege, separating everyday tasks from administrative roles.</li>
                    <li>• Identify overprivileged services, unquoted paths, writable scripts, and unnecessary software.</li>
                    <li>• Master patch management lifecycles, endpoint controls, logging, and audit verification.</li>
                    <li>• Conduct structured host-hardening assessments with documented rollback procedures.</li>
                  </ul>
                </div>

                <div className="bg-orange-50/60 rounded-2xl p-5 border border-orange-200/80 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-orange-900 mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-orange-600" />
                      Authoritative Engineering Guidance
                    </h3>
                    <p className="text-xs text-orange-950 leading-relaxed">
                      This curriculum synthesizes formal standards from <strong>NIST SP 800-123</strong> (Guide to General Server Security), <strong>Center for Internet Security (CIS) Benchmarks</strong>, <strong>Microsoft Security Baselines</strong>, and <strong>Red Hat Enterprise Linux Security Hardening</strong> documentation.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-orange-200/60 flex items-center justify-between text-xs text-orange-800">
                    <span className="font-semibold">Lab Environment:</span>
                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-orange-200">Isolated Virtual Machine</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 10.2 OPERATING-SYSTEM SECURITY FUNDAMENTALS */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Layers size={16} />
                <span>10.2 Operating-System Security Fundamentals</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Core Security Objectives &amp; System Boundaries
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                An operating system mediates all interaction between user applications and physical hardware (CPU, memory, storage, network interfaces). Host security controls must defend these critical assets across six overlapping objectives:
              </p>

              {/* TABLE: 10.2.1 Core Security Objectives */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-8">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3.5">Security Objective</th>
                      <th className="p-3.5">Operational Meaning</th>
                      <th className="p-3.5">Example Host Control</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Confidentiality</td>
                      <td className="p-3.5">Prevent unauthorized disclosure of data</td>
                      <td className="p-3.5 font-mono text-xs">chmod 600 private.key, BitLocker / LUKS encryption</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Integrity</td>
                      <td className="p-3.5">Prevent unauthorized modification of binaries or data</td>
                      <td className="p-3.5 font-mono text-xs">NTFS ACLs, File Integrity Monitoring (FIM / AIDE)</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Availability</td>
                      <td className="p-3.5">Keep systems and services usable and responsive</td>
                      <td className="p-3.5 font-mono text-xs">Patching, automated backups, systemd cgroup resource limits</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Authentication</td>
                      <td className="p-3.5">Establish who or what identity is accessing the host</td>
                      <td className="p-3.5 font-mono text-xs">PAM, SSH public-key auth, Windows Hello, MFA</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Authorization</td>
                      <td className="p-3.5">Determine precisely what an authenticated identity can execute</td>
                      <td className="p-3.5 font-mono text-xs">sudoers scoping, Windows Token Privileges, SELinux policies</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Accountability</td>
                      <td className="p-3.5">Trace all executed privileged actions back to a verifiable identity</td>
                      <td className="p-3.5 font-mono text-xs">auditd, Linux journalctl, Windows Security Event Log (EID 4688)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 10.2.2 ATTACK SURFACES & 10.2.3 SECURITY BOUNDARIES */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Target size={16} className="text-red-600" />
                    10.2.2 The Operating-System Attack Surface
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                    <div>
                      <span className="font-bold text-stone-800">1. User Accounts &amp; Auth:</span> Weak passwords, dormant accounts, shared admin logins, missing multi-factor authentication (MFA).
                    </div>
                    <div>
                      <span className="font-bold text-stone-800">2. Services &amp; Listening Ports:</span> Outdated daemons, unnecessary remote services (Telnet/RSH), exposed admin interfaces.
                    </div>
                    <div>
                      <span className="font-bold text-stone-800">3. Software &amp; Configuration:</span> Unpatched libraries, insecure default permissions, obsolete protocols (SMBv1, TLS 1.0).
                    </div>
                    <div>
                      <span className="font-bold text-stone-800">4. Files, Processes &amp; Kernel:</span> SUID binaries, unsafe Linux capabilities, vulnerable third-party drivers, unconfined memory.
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Shield size={16} className="text-blue-600" />
                    10.2.3 System Privilege Boundaries
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                    <div>
                      <span className="font-bold text-stone-800">User vs. Administrator:</span> Unprivileged accounts must not possess arbitrary system reconfiguration authority.
                    </div>
                    <div>
                      <span className="font-bold text-stone-800">User Space (Ring 3) vs. Kernel Space (Ring 0):</span> Applications execute in unprivileged CPU mode and trap to the kernel via syscalls.
                    </div>
                    <div>
                      <span className="font-bold text-stone-800">Process vs. Process:</span> Virtual memory management (MMU/page tables) isolates memory spaces so one process cannot inspect another without permission.
                    </div>
                    <div>
                      <span className="font-bold text-stone-800">Host vs. Network:</span> Stateful host firewalls (iptables/nftables, Windows Firewall) filter untrusted remote traffic.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 10.3 OPERATING-SYSTEM HARDENING METHODOLOGY */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Workflow size={16} />
                <span>10.3 Operating-System Hardening Methodology</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                The Hardening Lifecycle &amp; Security Baselines
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Hardening is the systematic discipline of stripping away unnecessary functionality and enforcing strict security controls while maintaining the host&apos;s required business utility.
              </p>

              {/* 6-STEP LIFECYCLE CARDS */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-1">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">1</span>
                    Inventory
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Asset &amp; Surface Discovery</h4>
                  <p className="text-xs text-stone-600">
                    Identify exact OS kernel, installed packages, user accounts, active network services, and running daemons.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-1">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">2</span>
                    Establish Baseline
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Standard Alignment</h4>
                  <p className="text-xs text-stone-600">
                    Compare current state against CIS Benchmarks or vendor security baselines tailored to the host&apos;s role.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-1">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">3</span>
                    Prioritize
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Risk-Based Triage</h4>
                  <p className="text-xs text-stone-600">
                    Rank misconfigurations by exploitability, exposure (public vs internal), asset criticality, and compensating controls.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-1">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">4</span>
                    Apply Controls
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Remediate &amp; Restrict</h4>
                  <p className="text-xs text-stone-600">
                    Patch software, remove unnecessary packages, disable risky services, enforce least privilege, and tighten permissions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-1">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">5</span>
                    Validate
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Functionality &amp; Controls</h4>
                  <p className="text-xs text-stone-600">
                    Verify that business applications run normally while security barriers effectively block unauthorized actions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-1">
                    <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[10px]">6</span>
                    Monitor &amp; Maintain
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Detect Configuration Drift</h4>
                  <p className="text-xs text-stone-600">
                    Continuously review audit logs, run recurring OpenSCAP scans, apply security patches, and prevent unauthorized changes.
                  </p>
                </div>
              </div>

              {/* 10.3.3 MINIMUM FUNCTIONALITY CALLOUT */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-stone-800">
                <h4 className="text-sm font-bold text-amber-950 mb-2 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-amber-700" />
                  The Principle of Minimum Functionality
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
                  A hardened production host contains <em>only</em> what is strictly required to fulfill its operational function. Avoid installing development compilers (<code>gcc</code>, <code>clang</code>), packet analyzers, or debugging suites on production workloads unless mandatory. If an attacker gains an unprivileged shell, the presence of a local compiler enables them to compile kernel exploits (e.g. Dirty COW) directly on the host!
                </p>
                <div className="text-xs font-mono text-stone-600 bg-white/80 p-2.5 rounded-lg border border-amber-200">
                  # Recommended: Identify and remove compilers from production Linux hosts<br />
                  which gcc g++ make clang 2&gt;/dev/null || echo &quot;Compilers absent (Secured)&quot;
                </div>
              </div>
            </section>

            {/* 10.4 LINUX USERS, GROUPS, OWNERSHIP, AND PERMISSIONS */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Terminal size={16} />
                <span>10.4 Linux Users, Groups, Ownership, and Permissions</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                POSIX File Security, Octal Permissions, SUID/SGID &amp; ACLs
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Linux utilizes a user-and-group model. Every process runs with real and effective user IDs (UID) and group IDs (GID). The kernel mediates access to files and directories by evaluating the owner (<strong>u</strong>), group (<strong>g</strong>), and others (<strong>o</strong>) against read (<strong>r=4</strong>), write (<strong>w=2</strong>), and execute (<strong>x=1</strong>) permissions.
              </p>

              {/* PERMISSION TABLE & DIRECTORY VS FILE DIFFERENCE */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <FileText size={16} className="text-orange-600" />
                    Regular File vs. Directory Semantics
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-900 block mb-1">Read (r = 4):</span>
                      <span className="text-stone-600">
                        <strong>File:</strong> Read contents into memory.<br />
                        <strong>Directory:</strong> List filenames inside (e.g. <code>ls</code>).
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-900 block mb-1">Write (w = 2):</span>
                      <span className="text-stone-600">
                        <strong>File:</strong> Modify, overwrite, or truncate file contents.<br />
                        <strong>Directory:</strong> Create, delete, or rename files within the directory (even if you lack write access to the individual file!).
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-900 block mb-1">Execute (x = 1):</span>
                      <span className="text-stone-600">
                        <strong>File:</strong> Execute program or script via kernel <code>execve</code>.<br />
                        <strong>Directory:</strong> Search / traverse into directory (<code>cd</code>) or access file inodes inside.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                      <Binary size={16} className="text-blue-600" />
                      Special Permission Bits (SUID, SGID, Sticky)
                    </h3>
                    <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <span className="font-bold text-red-600 block mb-1">Set-User-ID (SUID = 4xxx / -rwsr-xr-x):</span>
                        <span className="text-stone-600">
                          When executed, the binary runs with the <strong>effective UID of the file owner</strong> (typically root), regardless of who launched it.
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <span className="font-bold text-amber-600 block mb-1">Set-Group-ID (SGID = 2xxx / -rwxr-sr-x):</span>
                        <span className="text-stone-600">
                          Executable runs with the effective GID. On directories, new files created inherit the directory&apos;s group instead of the user&apos;s primary group.
                        </span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <span className="font-bold text-emerald-600 block mb-1">Sticky Bit (1xxx / drwxrwxrwt):</span>
                        <span className="text-stone-600">
                          Enforced on world-writable shared directories (e.g. <code>/tmp</code>). Users can only remove or rename files they own.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs">
                    # Audit for all SUID binaries on host<br />
                    find / -perm -4000 -type f 2&gt;/dev/null
                  </div>
                </div>
              </div>

              {/* POSIX ACLS: GETFACL & SETFACL */}
              <div className="p-5 rounded-2xl bg-stone-100/80 border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <KeyRound size={16} className="text-stone-700" />
                  POSIX Access Control Lists (ACLs)
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                  When standard <code>u/g/o</code> mode bits are too coarse, POSIX ACLs permit granular permissions per individual user or group.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <span className="text-stone-400 block mb-1"># View granular ACLs on file</span>
                    <span className="text-stone-900 font-bold">getfacl /var/log/audit.log</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-stone-200">
                    <span className="text-stone-400 block mb-1"># Grant read-only access to user &apos;analyst&apos;</span>
                    <span className="text-stone-900 font-bold">setfacl -m u:analyst:r-- /var/log/audit.log</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 10.5 LINUX PRIVILEGE MANAGEMENT & PRIVILEGE ESCALATION */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Lock size={16} />
                <span>10.5 Linux Privilege Management &amp; Escalation Prevention</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Sudo Scoping, Kernel Capabilities &amp; Mandatory Access Control (MAC)
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Privilege escalation occurs when a user or process obtains rights beyond what security policies intended. A system may have correct permissions on individual files, but still fall if sudo access is overly broad or an unconfined daemon is exploited.
              </p>

              {/* COMMON ESCALATION RISKS TABLE */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200 mb-8">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3.5">Risk Category</th>
                      <th className="p-3.5">Exploitable Example</th>
                      <th className="p-3.5">Defensive Hardening Measure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Overly Broad Sudo</td>
                      <td className="p-3.5"><code>alice ALL=(ALL) ALL</code> or sudo rights to <code>vim</code>, <code>find</code>, <code>less</code> (GTFOBins shell spawn)</td>
                      <td className="p-3.5">Scope commands strictly: <code>alice ALL=(ALL) /usr/bin/systemctl restart nginx</code>. Use <code>sudo visudo</code>.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Unsafe SUID Executable</td>
                      <td className="p-3.5">Custom compiled backup utility with SUID root containing <code>system(&quot;tar ...&quot;)</code> vulnerable to PATH hijacking</td>
                      <td className="p-3.5">Eliminate unnecessary SUID bits. Mount <code>/tmp</code> and <code>/var</code> with <code>nosuid,noexec</code>.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Writable Privileged Cron</td>
                      <td className="p-3.5">Root cron job executing <code>/usr/local/bin/backup.sh</code> which is world-writable (<code>chmod 777</code>)</td>
                      <td className="p-3.5">Enforce strict root ownership and <code>chmod 700</code> on all automation scripts executed by privileged daemons.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Excessive Capabilities</td>
                      <td className="p-3.5">Binary assigned <code>cap_setuid+ep</code> allowing arbitrary UID manipulation</td>
                      <td className="p-3.5">Inspect with <code>getcap -r /usr/bin</code>. Strip unneeded capabilities with <code>setcap -r</code>.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3.5 font-semibold text-stone-900">Kernel Exploitation</td>
                      <td className="p-3.5">Unpatched local privilege escalation vulnerability (Dirty COW, PwnKit, Baron Samedit)</td>
                      <td className="p-3.5">Automated kernel patching, live-patching (kpatch), reboot verification, and seccomp syscall filtering.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* LINUX CAPABILITIES & MAC */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Cpu size={16} className="text-orange-600" />
                    Linux Capabilities (Splitting Root Power)
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                    Traditionally, UNIX uses an all-or-nothing model: UID 0 can do everything, while other UIDs have standard limits. Linux capabilities divide root powers into discrete units:
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1.5 font-mono">
                    <li>• <strong>CAP_NET_BIND_SERVICE:</strong> Bind sockets to privileged ports (&lt; 1024) without full root.</li>
                    <li>• <strong>CAP_SYS_ADMIN:</strong> Broad admin functions (dangerous, treat as root).</li>
                    <li>• <strong>CAP_DAC_OVERRIDE:</strong> Bypass file read, write, and execute checks.</li>
                  </ul>
                  <div className="mt-3 p-2.5 bg-stone-900 text-stone-100 rounded-lg text-xs font-mono">
                    setcap &apos;cap_net_bind_service=+ep&apos; /usr/sbin/nginx
                  </div>
                </div>

                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    Mandatory Access Control: SELinux &amp; AppArmor
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                    Discretionary Access Control (DAC) lets file owners decide access. MAC enforces centralized kernel policies that restrict even root processes:
                  </p>
                  <ul className="text-xs text-stone-700 space-y-2">
                    <li>
                      <strong>SELinux (RHEL/Fedora):</strong> Type Enforcement using labels (e.g. <code>httpd_t</code> domain cannot read <code>shadow_t</code> or write to <code>bin_t</code>).
                    </li>
                    <li>
                      <strong>AppArmor (Ubuntu/Debian):</strong> Path-based profiles confining executables to explicit directories and system calls.
                    </li>
                  </ul>
                  <div className="mt-3 p-2.5 bg-stone-900 text-stone-100 rounded-lg text-xs font-mono flex items-center justify-between">
                    <span>getenforce # Enforcing</span>
                    <span>aa-status # Loaded profiles</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 10.6 & 10.7 WINDOWS SECURITY ARCHITECTURE & HARDENING */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Monitor size={16} />
                <span>10.6 &amp; 10.7 Windows Security Architecture &amp; Hardening</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                NTFS Permissions, Access Tokens, UAC, BitLocker &amp; Defender
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Windows regulates system access using <strong>Security Identifiers (SIDs)</strong>, <strong>Access Tokens</strong>, <strong>Discretionary Access Control Lists (DACLs)</strong>, and <strong>User Account Control (UAC)</strong> integrity levels.
              </p>

              {/* WINDOWS SECURITY BUILDING BLOCKS */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase mb-1">
                    <FolderLock size={16} />
                    NTFS DACLs &amp; ACEs
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Access Control Entries</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Every file/folder has a Security Descriptor containing a DACL with ordered ACEs. An explicit <strong>DENY</strong> takes precedence over all ALLOW entries.
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-stone-800 bg-white p-1.5 rounded border border-stone-200">
                    Get-Acl &quot;C:\ProgramData&quot;
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-1">
                    <UserCog size={16} />
                    User Account Control (UAC)
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Integrity Levels</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Separates standard tasks from administrative operations. Admin users run with a filtered Medium Integrity token until explicit elevation requests High Integrity.
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-stone-800 bg-white p-1.5 rounded border border-stone-200">
                    whoami /priv /groups
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase mb-1">
                    <HardDrive size={16} />
                    BitLocker &amp; Secure Boot
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">Hardware-Backed Root of Trust</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    TPM 2.0 seals encryption keys against tampered bootloaders. Full-disk encryption protects SAM and secrets from offline live-USB mounting.
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-stone-800 bg-white p-1.5 rounded border border-stone-200">
                    Get-BitLockerVolume
                  </div>
                </div>
              </div>

              {/* WINDOWS HARDENING CHECKLIST HIGHLIGHTS */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Wrench size={16} className="text-stone-700" />
                  Key Windows Hardening Controls (Microsoft Baseline Standard)
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
                  <div>
                    <span className="font-bold text-stone-900 block mb-0.5">• Windows Defender Firewall Profiles:</span>
                    Enforce default inbound block across Domain, Private, and Public profiles (<code>Get-NetFirewallProfile</code>).
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-0.5">• Remote Desktop Hardening:</span>
                    Enforce Network Level Authentication (NLA), restrict via VPN, and disable legacy Remote Assistance.
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-0.5">• Attack Surface Reduction (ASR) Rules:</span>
                    Block Office apps from creating child processes and block credential stealing from LSASS.
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-0.5">• PowerShell Security:</span>
                    Enable Script Block Logging (Event ID 4104), Transcription, and Constrained Language Mode (CLM).
                  </div>
                </div>
              </div>
            </section>

            {/* 10.8 PATCH MANAGEMENT & VULNERABILITY REMEDIATION */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <RefreshCw size={16} />
                <span>10.8 Patch Management &amp; Vulnerability Remediation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                The Patch Lifecycle &amp; End-of-Life (EOL) Risks
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Security patches eliminate known vulnerabilities before threat actors exploit them. A successful patch program balances timely deployment with verification to ensure business continuity.
              </p>

              {/* PATCH MANAGEMENT LIFECYCLE STEPS */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-orange-600 text-xs mb-1">1. Inventory &amp; Scan</div>
                  <p className="text-xs text-stone-600">Track all packages, kernel versions, and third-party libraries across hosts.</p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-orange-600 text-xs mb-1">2. Prioritize</div>
                  <p className="text-xs text-stone-600">Cross-reference CVSS severity, CISA KEV (Known Exploited Vulnerabilities), and EPSS threat scores.</p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-orange-600 text-xs mb-1">3. Staging &amp; Test</div>
                  <p className="text-xs text-stone-600">Deploy updates to a representative staging lab to verify dependency compatibility and rollback safety.</p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-bold text-orange-600 text-xs mb-1">4. Deploy &amp; Verify</div>
                  <p className="text-xs text-stone-600">Execute rolling production updates, confirm service health, check pending reboots, and retain audit logs.</p>
                </div>
              </div>

              {/* LINUX VS WINDOWS PATCH COMMANDS */}
              <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl">
                  <div className="text-stone-400 mb-2 font-sans font-bold"># Linux Update Practice (Debian/Ubuntu &amp; RHEL)</div>
                  <span className="text-amber-400">sudo apt update</span> &amp;&amp; <span className="text-amber-400">apt list --upgradable</span><br />
                  <span className="text-stone-500"># On RHEL/CentOS:</span><br />
                  <span className="text-amber-400">sudo dnf check-update --security</span>
                </div>
                <div className="p-4 bg-stone-900 text-stone-100 rounded-2xl">
                  <div className="text-stone-400 mb-2 font-sans font-bold"># Windows PowerShell Update Inspection</div>
                  <span className="text-blue-400">Get-HotFix | Sort-Object InstalledOn -Descending | Select -First 10</span><br />
                  <span className="text-stone-500"># Check reboot requirement status:</span><br />
                  <span className="text-blue-400">Test-Path &quot;HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Auto Update\RebootRequired&quot;</span>
                </div>
              </div>
            </section>

            {/* 10.9 & 10.10 SERVICES, SECRETS & FILE INTEGRITY MONITORING */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Key size={16} />
                <span>10.9 &amp; 10.10 Services, Secrets &amp; File Integrity Monitoring</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Service Sandboxing, Secrets Protection &amp; FIM Baselines
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Server size={16} className="text-orange-600" />
                    Service Hardening &amp; Sandboxing
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Configure services to run under dedicated non-interactive service accounts with systemd sandboxing directives:
                  </p>
                  <ul className="text-xs text-stone-700 font-mono space-y-1">
                    <li>• ProtectSystem=strict</li>
                    <li>• ProtectHome=yes</li>
                    <li>• NoNewPrivileges=yes</li>
                    <li>• PrivateTmp=yes</li>
                  </ul>
                </div>

                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <FileKey size={16} className="text-blue-600" />
                    Secrets Protection Standard
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    Never store plaintext secrets in git repositories, shell history, or process command lines:
                  </p>
                  <ul className="text-xs text-stone-700 space-y-1.5">
                    <li>• <strong>SSH Private Keys:</strong> <code>chmod 600 ~/.ssh/id_*</code></li>
                    <li>• <strong>App Configs:</strong> <code>chmod 640 .env</code> (owner app, group app)</li>
                    <li>• <strong>Vaults:</strong> Use HashiCorp Vault or AWS Secrets Manager</li>
                  </ul>
                </div>

                <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Eye size={16} className="text-emerald-600" />
                    File Integrity Monitoring (FIM)
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    FIM tools (AIDE, Tripwire, Wazuh) compute cryptographic hashes (SHA-256) of core binaries and alert on unauthorized tampering:
                  </p>
                  <div className="p-2 bg-stone-900 text-stone-100 rounded-lg text-[11px] font-mono">
                    aide --init &amp;&amp; mv /var/lib/aide/aide.db.new /var/lib/aide/aide.db
                  </div>
                </div>
              </div>
            </section>

            {/* 10.11 LOGGING, AUDITING & EVIDENCE PROTECTION */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <FileSpreadsheet size={16} />
                <span>10.11 Operating-System Logging, Auditing &amp; Incident Evidence</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Linux auditd, Windows Event IDs &amp; Chain of Custody
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Host-level telemetry provides visibility when defensive controls are challenged or bypassed. Critical audit events must be forwarded off-host to a centralized SIEM to prevent attackers from purging local log files.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <TerminalSquare size={16} className="text-orange-600" />
                    Linux Logging Telemetry
                  </h3>
                  <ul className="text-xs sm:text-sm text-stone-600 space-y-2 mb-4">
                    <li>• <strong>journalctl:</strong> Unified systemd log engine (<code>journalctl -p warning -u ssh</code>).</li>
                    <li>• <strong>/var/log/auth.log or secure:</strong> Sudo usage, SSH logins, and PAM authentication events.</li>
                    <li>• <strong>auditd:</strong> Kernel-level audit framework tracking file access and privileged syscalls.</li>
                  </ul>
                  <div className="p-2.5 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono">
                    auditctl -w /etc/shadow -p wa -k shadow_tamper<br />
                    ausearch -k shadow_tamper --format text
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Monitor size={16} className="text-blue-600" />
                    Essential Windows Security Event IDs
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
                    <div className="p-2 bg-white rounded-lg border border-stone-200">
                      <span className="font-bold text-blue-600 block">4624</span> Successful Logon
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-stone-200">
                      <span className="font-bold text-red-600 block">4625</span> Failed Logon (Brute force)
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-stone-200">
                      <span className="font-bold text-amber-600 block">4672</span> Special Privileges Assigned
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-stone-200">
                      <span className="font-bold text-purple-600 block">4688</span> Process Creation (CLI args)
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-stone-200">
                      <span className="font-bold text-emerald-600 block">7045</span> New Service Installed
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-stone-200">
                      <span className="font-bold text-orange-600 block">4720</span> User Account Created
                    </div>
                  </div>
                  <div className="p-2.5 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono">
                    Get-WinEvent -FilterHashtable @&#123;LogName=&apos;Security&apos;; Id=4625&#125; -MaxEvents 5
                  </div>
                </div>
              </div>
            </section>

            {/* 10.12 PRACTICAL LABS A & B */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <Terminal size={16} />
                <span>10.12 Practical Lab: Linux &amp; Windows Assessment</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Hands-on Host Hardening Worksheets &amp; Remediation Records
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6">
                Execute these inspection commands in your authorized virtual lab. Never apply destructive changes blindly without recording the initial baseline and testing a rollback path.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Terminal size={16} className="text-orange-600" />
                    Lab A — Linux Host Inspection Suite
                  </h3>
                  <div className="space-y-2 text-xs font-mono text-stone-800 bg-white p-3.5 rounded-xl border border-stone-200">
                    <div># 1. Identity &amp; Privileges</div>
                    <div className="text-orange-700">whoami &amp;&amp; id &amp;&amp; sudo -l</div>
                    <div># 2. Kernel &amp; OS Version</div>
                    <div className="text-orange-700">uname -r &amp;&amp; cat /etc/os-release</div>
                    <div># 3. Running Services &amp; Sockets</div>
                    <div className="text-orange-700">systemctl --type=service --state=running</div>
                    <div className="text-orange-700">ss -lntup</div>
                    <div># 4. Critical File Permissions</div>
                    <div className="text-orange-700">stat -c &apos;%a %n&apos; /etc/passwd /etc/shadow /etc/ssh</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <Monitor size={16} className="text-blue-600" />
                    Lab B — Windows Host Inspection Suite
                  </h3>
                  <div className="space-y-2 text-xs font-mono text-stone-800 bg-white p-3.5 rounded-xl border border-stone-200">
                    <div># 1. OS &amp; Patch Status</div>
                    <div className="text-blue-700">Get-ComputerInfo | Select-Object WindowsProductName, OsBuildNumber</div>
                    <div># 2. Local Accounts &amp; Groups</div>
                    <div className="text-blue-700">Get-LocalUser &amp;&amp; Get-LocalGroupMember -Group &quot;Administrators&quot;</div>
                    <div># 3. Firewall Profile Status</div>
                    <div className="text-blue-700">Get-NetFirewallProfile | Select-Object Name, Enabled</div>
                    <div># 4. Critical Services &amp; ACLs</div>
                    <div className="text-blue-700">Get-Service | Where-Object Status -eq &quot;Running&quot;</div>
                    <div className="text-blue-700">Get-Acl &quot;C:\ProgramData&quot;</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 10.13 TOOLS & REFERENCES */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                <ExternalLink size={16} />
                <span>10.13 Host-Hardening Tools and References</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4">
                Authoritative Frameworks &amp; Automated Audit Utilities
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a
                  href="https://www.cisecurity.org/cis-benchmarks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-orange-300 hover:bg-orange-50/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase text-orange-600 tracking-wider">CIS Benchmarks</span>
                    <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Center for Internet Security</h4>
                    <p className="text-xs text-stone-600">
                      Consensus-based configuration standards for Linux, Windows, macOS, cloud hosts, and hypervisors.
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-orange-600 font-semibold flex items-center gap-1">
                    <span>cisecurity.org</span>
                    <ExternalLink size={12} />
                  </div>
                </a>

                <a
                  href="https://learn.microsoft.com/windows/security/operating-system-security/device-management/windows-security-configuration-framework/windows-security-baselines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Microsoft Security Baselines</span>
                    <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Official Windows Guidance</h4>
                    <p className="text-xs text-stone-600">
                      GPO backups and Policy Analyzer tools for Windows 10/11 and Windows Server enterprise environments.
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-blue-600 font-semibold flex items-center gap-1">
                    <span>learn.microsoft.com</span>
                    <ExternalLink size={12} />
                  </div>
                </a>

                <a
                  href="https://www.open-scap.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-600 tracking-wider">OpenSCAP Ecosystem</span>
                    <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Automated Compliance Scans</h4>
                    <p className="text-xs text-stone-600">
                      NIST SCAP-validated scanning engine for continuous Linux host hardening and automated remediation scripts.
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <span>open-scap.org</span>
                    <ExternalLink size={12} />
                  </div>
                </a>
              </div>
            </section>

            {/* 10.15 CHECKLIST */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                    <ClipboardList size={16} />
                    <span>10.15 Professional Host-Hardening Checklist</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                    System Audit &amp; Verification Protocol ({checkedCount}/16 Reviewed)
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyChecklistSummary}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    <Copy size={14} />
                    <span>Copy Checklist</span>
                  </button>
                </div>
              </div>

              {/* CHECKLIST ITEMS */}
              <div className="space-y-3">
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      item.checked
                        ? "bg-emerald-50/60 border-emerald-300 text-emerald-950"
                        : "bg-stone-50/80 border-stone-200 text-stone-800 hover:border-stone-300"
                    }`}
                  >
                    <div className="mt-0.5">
                      {item.checked ? (
                        <CheckSquare className="text-emerald-600" size={18} />
                      ) : (
                        <Square className="text-stone-400" size={18} />
                      )}
                    </div>
                    <div className="flex-1 text-xs sm:text-sm">
                      <span className="font-bold text-stone-500 uppercase text-[10px] tracking-wider block mb-0.5">
                        {item.category}
                      </span>
                      <span className={item.checked ? "line-through text-stone-500" : "font-medium"}>
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: SIMULATOR 1 - LINUX CHMOD & SUID CALCULATOR                       */}
        {/* ========================================================================= */}
        {activeTab === "chmod-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-orange-100 text-orange-800 border border-orange-200">
                    Interactive Simulator 1
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    Linux chmod, Symbolic &amp; Special Bits (SUID / SGID / Sticky) Inspector
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Toggle POSIX permission bits, calculate 3-digit and 4-digit octal codes, inspect symbolic strings, and analyze privilege escalation risk heuristics.
                  </p>
                </div>

                {/* PRESET SELECTOR */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-stone-500 uppercase">Presets:</span>
                  <button
                    onClick={() => loadChmodPreset("ssh_key")}
                    className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-stone-200 hover:bg-stone-100"
                  >
                    SSH Key (600)
                  </button>
                  <button
                    onClick={() => loadChmodPreset("web_config")}
                    className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-stone-200 hover:bg-stone-100"
                  >
                    Web Config (640)
                  </button>
                  <button
                    onClick={() => loadChmodPreset("script_exec")}
                    className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-stone-200 hover:bg-stone-100"
                  >
                    Script (750)
                  </button>
                  <button
                    onClick={() => loadChmodPreset("shared_tmp")}
                    className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-stone-200 hover:bg-stone-100"
                  >
                    /tmp Sticky (1777)
                  </button>
                  <button
                    onClick={() => loadChmodPreset("suid_vuln")}
                    className="px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-red-200 text-red-700 bg-red-50 hover:bg-red-100"
                  >
                    SUID Risk (4775)
                  </button>
                </div>
              </div>

              {/* VISUAL CALCULATOR MATRIX */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {/* SPECIAL BITS */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase text-stone-600 tracking-wider">Special Bits</span>
                    <span className="text-sm font-mono font-bold text-orange-600">{permissionCalc.specialDigit}</span>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={specialBits.suid}
                        onChange={(e) => setSpecialBits({ ...specialBits, suid: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>SUID (SetUID = 4)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={specialBits.sgid}
                        onChange={(e) => setSpecialBits({ ...specialBits, sgid: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>SGID (SetGID = 2)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={specialBits.sticky}
                        onChange={(e) => setSpecialBits({ ...specialBits, sticky: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Sticky Bit (= 1)</span>
                    </label>
                  </div>
                </div>

                {/* OWNER PERMS */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase text-stone-600 tracking-wider">Owner (u)</span>
                    <span className="text-sm font-mono font-bold text-orange-600">{permissionCalc.ownerDigit}</span>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={ownerPerms.r}
                        onChange={(e) => setOwnerPerms({ ...ownerPerms, r: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Read (r = 4)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={ownerPerms.w}
                        onChange={(e) => setOwnerPerms({ ...ownerPerms, w: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Write (w = 2)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={ownerPerms.x}
                        onChange={(e) => setOwnerPerms({ ...ownerPerms, x: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Execute (x = 1)</span>
                    </label>
                  </div>
                </div>

                {/* GROUP PERMS */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase text-stone-600 tracking-wider">Group (g)</span>
                    <span className="text-sm font-mono font-bold text-orange-600">{permissionCalc.groupDigit}</span>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={groupPerms.r}
                        onChange={(e) => setGroupPerms({ ...groupPerms, r: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Read (r = 4)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={groupPerms.w}
                        onChange={(e) => setGroupPerms({ ...groupPerms, w: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Write (w = 2)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={groupPerms.x}
                        onChange={(e) => setGroupPerms({ ...groupPerms, x: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Execute (x = 1)</span>
                    </label>
                  </div>
                </div>

                {/* OTHERS PERMS */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase text-stone-600 tracking-wider">Others (o)</span>
                    <span className="text-sm font-mono font-bold text-orange-600">{permissionCalc.otherDigit}</span>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={otherPerms.r}
                        onChange={(e) => setOtherPerms({ ...otherPerms, r: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Read (r = 4)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={otherPerms.w}
                        onChange={(e) => setOtherPerms({ ...otherPerms, w: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Write (w = 2)</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs font-medium text-stone-800 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={otherPerms.x}
                        onChange={(e) => setOtherPerms({ ...otherPerms, x: e.target.checked })}
                        className="rounded text-orange-600"
                      />
                      <span>Execute (x = 1)</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* OUTPUT DISPLAY: OCTAL & STAT */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs sm:text-sm space-y-3 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <span className="text-stone-400"># Calculated chmod command:</span>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold text-base">
                      chmod {permissionCalc.specialDigit > 0 ? permissionCalc.octal4 : permissionCalc.octal3} {fileName}
                    </span>
                    <button
                      onClick={() =>
                        copyCode(
                          `chmod ${permissionCalc.specialDigit > 0 ? permissionCalc.octal4 : permissionCalc.octal3} ${fileName}`,
                          "chmod-cmd"
                        )
                      }
                      className="p-1 rounded bg-stone-800 text-stone-300 hover:text-white"
                      title="Copy command"
                    >
                      {copiedCodeId === "chmod-cmd" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div>
                    <span className="text-stone-400"># Symbolic Mode String: </span>
                    <span className="text-amber-300 font-bold tracking-widest">{permissionCalc.symbolic}</span>
                  </div>
                  <div>
                    <span className="text-stone-400"># Simulated ls -l: </span>
                    <span>
                      {permissionCalc.symbolic} 1 {fileOwner} {fileGroup} 4096 Oct 15 20:30 {fileName}
                    </span>
                  </div>
                </div>
              </div>

              {/* SECURITY RISKS & ADVICE */}
              <div>
                <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <ShieldAlert size={16} className="text-orange-600" />
                  Real-time Permission Risk Heuristics
                </h3>
                {permissionCalc.risks.length === 0 ? (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Permissions satisfy least-privilege standards with no obvious world-writable or SUID escalation risks.</span>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {permissionCalc.risks.map((risk, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                          risk.level === "CRITICAL"
                            ? "bg-red-50 border-red-200 text-red-950 font-medium"
                            : risk.level === "HIGH"
                            ? "bg-amber-50 border-amber-200 text-amber-950"
                            : "bg-stone-50 border-stone-200 text-stone-800"
                        }`}
                      >
                        <AlertTriangle
                          size={16}
                          className={`shrink-0 mt-0.5 ${
                            risk.level === "CRITICAL"
                              ? "text-red-600"
                              : risk.level === "HIGH"
                              ? "text-amber-600"
                              : "text-stone-500"
                          }`}
                        />
                        <div>
                          <span className="font-bold uppercase text-[10px] tracking-wider mr-2 px-1.5 py-0.5 rounded bg-white/80 border">
                            {risk.level}
                          </span>
                          {risk.text}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SIMULATOR 2 - WINDOWS NTFS & UAC TOKEN LAB                        */}
        {/* ========================================================================= */}
        {activeTab === "ntfs-sim" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-blue-100 text-blue-800 border border-blue-200">
                    Interactive Simulator 2
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    Windows NTFS Access Control Entry (ACE) &amp; Token Evaluation Lab
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Simulate how the Windows Security Subsystem (LSASS / Security Reference Monitor) evaluates Access Tokens, UAC Integrity Levels, and NTFS DACLs.
                  </p>
                </div>
              </div>

              {/* CALLER IDENTITY & UAC ELEVATION CONTROLS */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Acting User / Token</label>
                  <select
                    value={currentUser}
                    onChange={(e) => setCurrentUser(e.target.value)}
                    className="w-full text-xs sm:text-sm font-semibold rounded-xl border-stone-300 bg-white p-2.5"
                  >
                    <option value="Alice (Standard User)">Alice (Standard User SID: S-1-5-21...-1002)</option>
                    <option value="Bob (Local Administrator)">Bob (Local Admin SID: S-1-5-32-544)</option>
                    <option value="SYSTEM (NT AUTHORITY\SYSTEM)">SYSTEM (OS Kernel SID: S-1-5-18)</option>
                  </select>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">UAC Elevation State</label>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => setIsElevated(false)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        !isElevated ? "bg-stone-900 text-white" : "bg-white border text-stone-600"
                      }`}
                    >
                      Filtered Token (Medium IL)
                    </button>
                    <button
                      onClick={() => setIsElevated(true)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        isElevated ? "bg-blue-600 text-white shadow-xs" : "bg-white border text-stone-600"
                      }`}
                    >
                      Elevated Token (High IL)
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Target Object</label>
                  <div className="text-xs font-mono font-semibold text-stone-800 bg-white p-2.5 rounded-xl border border-stone-200 truncate">
                    {targetResource}
                  </div>
                </div>
              </div>

              {/* CURRENT NTFS DACL TABLE */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <FolderLock size={16} className="text-blue-600" />
                    Target Object Discretionary Access Control List (DACL)
                  </h3>
                  <span className="text-xs text-stone-500 font-mono">DACL Evaluated In Order (Explicit Deny First)</span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-3">Order</th>
                        <th className="p-3">Trustee (Identity / Group)</th>
                        <th className="p-3">Type</th>
                        <th className="p-3">Permission Granted / Denied</th>
                        <th className="p-3">Inheritance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-700">
                      {aclEntries.map((ace, idx) => (
                        <tr key={ace.id} className="hover:bg-stone-50">
                          <td className="p-3 font-mono text-stone-400">#{idx + 1}</td>
                          <td className="p-3 font-semibold text-stone-900">{ace.trustee}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                                ace.type === "DENY" ? "bg-red-100 text-red-800" : "bg-emerald-100 text-emerald-800"
                              }`}
                            >
                              {ace.type}
                            </span>
                          </td>
                          <td className="p-3 font-mono text-xs">{ace.permission}</td>
                          <td className="p-3 text-stone-500 text-xs">{ace.inherited ? "Inherited from C:\\" : "Explicit (This Object)"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* EVALUATION VERDICT */}
              <div
                className={`p-5 rounded-2xl border ${
                  ntfsEvaluation.granted
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-red-50 border-red-300 text-red-950"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {ntfsEvaluation.granted ? (
                    <CheckCircle2 size={20} className="text-emerald-600" />
                  ) : (
                    <ShieldX size={20} className="text-red-600" />
                  )}
                  <h4 className="text-base font-bold">
                    Access Verdict: {ntfsEvaluation.granted ? "ACCESS GRANTED" : "ACCESS DENIED"}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-3">{ntfsEvaluation.reason}</p>
                {ntfsEvaluation.effectiveRights.length > 0 && (
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="font-bold">Effective Rights:</span>
                    {ntfsEvaluation.effectiveRights.map((r, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white border font-semibold">
                        {r}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SIMULATOR 3 - SELINUX / APPARMOR VS DAC SANDBOX                    */}
        {/* ========================================================================= */}
        {activeTab === "mac-dac" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Interactive Simulator 3
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    Mandatory Access Control (SELinux / AppArmor) vs. Discretionary (DAC) Sandbox
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Simulate how a compromised web service process (e.g. <code>www-data</code> running an RCE exploit) is confined by Type Enforcement and application profiles.
                  </p>
                </div>
              </div>

              {/* FRAMEWORK & ENFORCEMENT MODE CONTROLS */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">MAC Framework</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setMacFramework("selinux")}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        macFramework === "selinux" ? "bg-stone-900 text-white" : "bg-white border text-stone-700"
                      }`}
                    >
                      SELinux (Type Enforcement)
                    </button>
                    <button
                      onClick={() => setMacFramework("apparmor")}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        macFramework === "apparmor" ? "bg-stone-900 text-white" : "bg-white border text-stone-700"
                      }`}
                    >
                      AppArmor (Path Profiles)
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <label className="text-xs font-bold uppercase text-stone-600 block mb-2">Enforcement State</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setMacMode("enforcing")}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        macMode === "enforcing" ? "bg-emerald-600 text-white shadow-xs" : "bg-white border text-stone-700"
                      }`}
                    >
                      Enforcing (Active)
                    </button>
                    <button
                      onClick={() => setMacMode("permissive")}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        macMode === "permissive" ? "bg-amber-600 text-white shadow-xs" : "bg-white border text-stone-700"
                      }`}
                    >
                      Permissive / Complain
                    </button>
                    <button
                      onClick={() => setMacMode("disabled")}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        macMode === "disabled" ? "bg-red-600 text-white shadow-xs" : "bg-white border text-stone-700"
                      }`}
                    >
                      Disabled (None)
                    </button>
                  </div>
                </div>
              </div>

              {/* ACTION SCENARIOS */}
              <div className="mb-6">
                <label className="text-xs font-bold uppercase text-stone-600 block mb-2">
                  Select Attacker Action Attempted from Web Server Process (UID 33: www-data):
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {attackActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => setSelectedAttackAction(action.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        selectedAttackAction === action.id
                          ? "border-orange-500 bg-orange-50/50 shadow-xs"
                          : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm text-stone-900 mb-1">{action.name}</div>
                      <div className="text-xs text-stone-600 leading-snug">{action.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* SIDE-BY-SIDE EVALUATION */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <FileText size={16} className="text-stone-600" />
                    Layer 1: Discretionary Access Control (DAC)
                  </h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div>
                      <span className="text-stone-500">File Mode Bits: </span>
                      <span className="font-bold text-stone-900">{currentActionData.dacPerms}</span>
                    </div>
                    <div>
                      <span className="text-stone-500">DAC Verdict: </span>
                      <span
                        className={`font-bold ${
                          currentActionData.dacResult === "ALLOW" ? "text-emerald-600" : "text-red-600"
                        }`}
                      >
                        {currentActionData.dacResult}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-600" />
                    Layer 2: Mandatory Access Control (MAC)
                  </h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div>
                      <span className="text-stone-500">
                        {macFramework === "selinux" ? "SELinux Policy: " : "AppArmor Rule: "}
                      </span>
                      <span className="font-bold text-stone-900">
                        {macFramework === "selinux" ? currentActionData.selinuxContext : currentActionData.apparmorProfile}
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-500">Mode State: </span>
                      <span className="font-bold text-orange-600 uppercase">{macMode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FINAL CONFINEMENT VERDICT */}
              <div
                className={`p-5 rounded-2xl border ${
                  macOutcome.finalResult.includes("BLOCKED")
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-red-50 border-red-300 text-red-950"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {macOutcome.finalResult.includes("BLOCKED") ? (
                    <ShieldCheck size={20} className="text-emerald-600" />
                  ) : (
                    <AlertTriangle size={20} className="text-red-600" />
                  )}
                  <h4 className="text-base font-bold">Execution Result: {macOutcome.finalResult}</h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed mb-3">{macOutcome.explanation}</p>
                <div className="p-2.5 bg-stone-900 text-stone-100 rounded-xl text-xs font-mono">
                  # Sample Audit Log Telemetry (auditd):<br />
                  type=AVC msg=audit(1697389200.124:94): avc: {macOutcome.finalResult.includes("BLOCKED") ? "denied" : "granted"} &#123; execute &#125; for pid=1402 comm=&quot;httpd&quot; name=&quot;bash&quot; dev=&quot;sda1&quot; ino=262145 scontext=system_u:system_r:httpd_t:s0 tcontext=system_u:object_r:shell_exec_t:s0 tclass=file permissive={macMode === "permissive" ? "1" : "0"}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: SIMULATOR 4 - HOST HARDENING AUDIT & REMEDIATION WORKBENCH        */}
        {/* ========================================================================= */}
        {activeTab === "audit-lab" && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-amber-100 text-amber-800 border border-amber-200">
                    Interactive Simulator 4
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900 mt-2">
                    Host Hardening Audit &amp; Controlled Remediation Lab
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Select an operating system, review real-world misconfigurations, run inspection commands, apply remediations, and generate formal engineering change tickets.
                  </p>
                </div>

                {/* OS TOGGLE */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAuditOs("linux")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      auditOs === "linux" ? "bg-orange-600 text-white shadow-xs" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Ubuntu 24.04 Linux
                  </button>
                  <button
                    onClick={() => setAuditOs("windows")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      auditOs === "windows" ? "bg-blue-600 text-white shadow-xs" : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    Windows Server 2022
                  </button>
                </div>
              </div>

              {/* PROGRESS COUNTER */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-stone-600">
                  <Wrench size={16} />
                  <span>
                    Remediation Progress: {remediatedCount} of {filteredAuditItems.length} Vulnerabilities Resolved
                  </span>
                </div>
                <div className="w-32 bg-stone-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full transition-all duration-300"
                    style={{ width: `${(remediatedCount / filteredAuditItems.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* AUDIT ITEMS LIST */}
              <div className="space-y-4">
                {filteredAuditItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      item.status === "REMEDIATED"
                        ? "bg-emerald-50/40 border-emerald-300"
                        : "bg-white border-stone-200 shadow-xs"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                            {item.category}
                          </span>
                          <span
                            className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                              item.status === "REMEDIATED"
                                ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                                : "bg-red-100 text-red-800 border-red-200"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-stone-900">{item.item}</h4>
                      </div>

                      <button
                        onClick={() => toggleRemediate(item.id)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          item.status === "REMEDIATED"
                            ? "bg-stone-200 text-stone-700 hover:bg-stone-300"
                            : "bg-orange-600 text-white hover:bg-orange-700 shadow-xs"
                        }`}
                      >
                        {item.status === "REMEDIATED" ? "Rollback State" : "Apply Hardening"}
                      </button>
                    </div>

                    <p className="text-xs text-stone-600 mb-3">
                      <strong>Security Risk:</strong> {item.risk}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 bg-stone-900 text-stone-100 rounded-xl">
                        <span className="text-stone-400 block mb-1"># Inspection Command:</span>
                        <div className="text-amber-400">{item.command}</div>
                        <div className="text-stone-400 mt-1">Output: {item.output}</div>
                      </div>

                      <div className="p-3 bg-stone-900 text-stone-100 rounded-xl">
                        <span className="text-stone-400 block mb-1">
                          {item.status === "REMEDIATED" ? "# Rollback Command:" : "# Remediation Command:"}
                        </span>
                        <div className={item.status === "REMEDIATED" ? "text-blue-400" : "text-emerald-400"}>
                          {item.status === "REMEDIATED" ? item.rollback : item.remediation}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: MODULE 10 KNOWLEDGE ASSESSMENT QUIZ (8 QUESTIONS FROM 10.14)      */}
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
                    Module 10 Comprehensive Quiz ({Object.keys(selectedAnswers).length} of 8 Answered)
                  </h2>
                  <p className="text-sm text-stone-600 mt-1">
                    Evaluate your mastery of Linux and Windows hardening, permissions, access tokens, SUID bits, and audit principles.
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
                      You scored {quizScore} out of 8 correct ({Math.round((quizScore / 8) * 100)}%).
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
        topic="Module 10: Operating System Security, Hardening, Permissions, and Privilege Management"
        topicContext={`
          This is Module 10 of the Prepspaces Cybersecurity Master Course.
          Key themes:
          - Operating System Security Objectives: Confidentiality, Integrity, Availability, Authentication, Authorization, Accountability.
          - System Boundaries: User vs Administrator, User space (Ring 3) vs Kernel space (Ring 0), Process vs Process (page tables, ASLR, DEP), Host vs Network.
          - Hardening Methodology & Lifecycle: Inventory, Establish Baseline (CIS Benchmarks, Microsoft Baselines, NIST SP 800-123), Prioritize, Apply Controls, Validate, Monitor & Maintain. Minimum Functionality (no compilers on prod).
          - Linux Permissions: User (u), Group (g), Others (o), Read (4), Write (2), Execute (1). Directory vs File semantics. Special bits: SUID (4xxx), SGID (2xxx), Sticky bit (1xxx). POSIX ACLs (getfacl/setfacl).
          - Privilege Escalation: Sudo scoping (visudo), GTFOBins, unsafe SUID, writable cron scripts, Linux capabilities (CAP_NET_BIND_SERVICE).
          - Mandatory Access Control (MAC): SELinux (Type Enforcement, contexts) vs AppArmor (path profiles) vs DAC.
          - Windows Architecture: SIDs, Access Tokens, NTFS DACL & ACEs (Explicit Deny > Explicit Allow > Inherited), UAC Integrity Levels.
          - Windows Hardening: Windows Firewall profiles, Remote Desktop & NLA, BitLocker & TPM 2.0, PowerShell Script Block Logging (EID 4104), ASR rules.
          - Patch Management Lifecycle: CVSS, CISA KEV, EPSS, apt/dnf, Windows Update, unsupported EOL risks.
          - Services & FIM: systemd sandboxing (ProtectSystem=strict), secrets management, AIDE / Wazuh.
          - Incident Evidence & Logging: journalctl, auditd, Windows Security EID 4624/4625/4672/4688, Chain of Custody.
        `}
      />
    </div>
  );
}
