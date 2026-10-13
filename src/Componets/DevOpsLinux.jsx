import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Terminal,
  Server,
  Cpu,
  Layers,
  Check,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lock,
  Network,
  Activity,
  HardDrive,
  FolderTree,
  ShieldCheck,
  Zap,
  Globe,
  Radio,
  BookOpen,
  Boxes,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsLinux() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'terminal-lab' | 'permissions-lab' | 'gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: INTERACTIVE BASH TERMINAL COMMAND SIMULATOR
  // =========================================================================
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    {
      cmd: "uname -a",
      output:
        "Linux ubuntu-devops-node-01 5.15.0-1049-aws #54-Ubuntu SMP x86_64 x86_64 x86_64 GNU/Linux",
    },
    {
      cmd: "whoami && id",
      output:
        "devops\nuid=1000(devops) gid=1000(devops) groups=1000(devops),4(adm),27(sudo),110(lxd)",
    },
  ]);

  const commandDatabase = {
    "whoami": "devops",
    "id": "uid=1000(devops) gid=1000(devops) groups=1000(devops),4(adm),27(sudo),110(lxd)",
    "hostname": "ubuntu-devops-node-01",
    "uname -a": "Linux ubuntu-devops-node-01 5.15.0-1049-aws #54-Ubuntu SMP x86_64 x86_64 GNU/Linux",
    "uptime": " 21:30:15 up 42 days,  4:12,  2 users,  load average: 0.18, 0.24, 0.31",
    "pwd": "/home/devops",
    "date": new Date().toUTCString(),
    "df -h":
      "Filesystem      Size  Used Avail Use% Mounted on\n/dev/root        50G   18G   32G  36% /\n/dev/nvme0n1p15 105M  6.1M   99M   6% /boot/efi\ntmpfs           3.9G     0  3.9G   0% /dev/shm\ntmpfs           1.6G  1.2M  1.6G   1% /run",
    "df -i":
      "Filesystem       Inodes  IUsed   IFree IUse% Mounted on\n/dev/root       6553600 241080 6312520    4% /\n/dev/nvme0n1p15       0      0       0     - /boot/efi\ntmpfs           1014120      1 1014119    1% /dev/shm",
    "free -h":
      "               total        used        free      shared  buff/cache   available\nMem:           7.7Gi       1.8Gi       3.1Gi        12Mi       2.8Gi       5.6Gi\nSwap:          2.0Gi          0B       2.0Gi",
    "lsblk":
      "NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nloop0          7:0    0  63.9M  1 loop /snap/core20/2105\nloop1          7:1    0  40.4M  1 loop /snap/snapd/20671\nnvme0n1      259:0    0    50G  0 disk \n├─nvme0n1p1  259:1    0  49.9G  0 part /\n└─nvme0n1p15 259:2    0   105M  0 part /boot/efi",
    "ss -lntp":
      "State    Recv-Q   Send-Q     Local Address:Port      Peer Address:Port  Process\nLISTEN   0        128              0.0.0.0:22             0.0.0.0:*      users:((\"sshd\",pid=842,fd=3))\nLISTEN   0        511            127.0.0.1:8080           0.0.0.0:*      users:((\"node\",pid=1980,fd=19))\nLISTEN   0        128                 [::]:22                [::]:*      users:((\"sshd\",pid=842,fd=4))",
    "systemctl status nginx":
      "● nginx.service - A high performance web server and a reverse proxy server\n     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)\n     Active: active (running) since Thu 2026-10-08 14:02:10 UTC; 7h ago\n   Main PID: 1204 (nginx)\n      Tasks: 3 (limit: 9474)\n     Memory: 6.8M\n        CPU: 184ms\n     CGroup: /system.slice/nginx.service\n             ├─1204 \"nginx: master process /usr/sbin/nginx -g daemon on; master_process on;\"\n             ├─1205 \"nginx: worker process\"\n             └─1206 \"nginx: worker process\"",
    "journalctl -u nginx -n 3":
      "-- Journal begins at Wed 2026-09-01 00:00:00 UTC, ends at Thu 2026-10-08 21:30:00 UTC. --\nOct 08 14:02:10 ubuntu systemd[1]: Starting A high performance web server...\nOct 08 14:02:10 ubuntu systemd[1]: Started A high performance web server.\nOct 08 14:02:11 ubuntu nginx[1204]: 2026/10/08 14:02:11 [notice] 1204#1204: start worker processes",
    "ps aux | head -n 5":
      "USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot           1  0.0  0.1 169348 13244 ?        Ss   Sep18   0:14 /sbin/init\nroot           2  0.0  0.0      0     0 ?        S    Sep18   0:00 [kthreadd]\nsystemd+     712  0.0  0.1  25892 12140 ?        Ss   Sep18   0:02 /lib/systemd/systemd-resolved\nroot         842  0.0  0.1  15888  9184 ?        Ss   Sep18   0:01 sshd: /usr/sbin/sshd [listener]",
    "cat /etc/os-release":
      "NAME=\"Ubuntu\"\nVERSION=\"24.04 LTS (Noble Numbat)\"\nID=ubuntu\nID_LIKE=debian\nPRETTY_NAME=\"Ubuntu 24.04 LTS\"\nVERSION_ID=\"24.04\"\nHOME_URL=\"https://www.ubuntu.com/\"",
    "ip route":
      "default via 172.31.16.1 dev eth0 proto dhcp src 172.31.24.180 metric 100 \n172.31.16.0/20 dev eth0 proto kernel scope link src 172.31.24.180 metric 100",
  };

  const handleExecuteCommand = (cmdText = terminalInput) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    let output = commandDatabase[trimmed];
    if (!output) {
      if (trimmed.startsWith("cat ")) {
        output = `cat: ${trimmed.split(" ")[1]}: No such file or directory`;
      } else if (trimmed.startsWith("curl ")) {
        output = "* Connected to target port...\n< HTTP/1.1 200 OK\n< Content-Type: application/json\n< Content-Length: 26\n\n{\"status\":\"healthy\",\"v\":\"1.0\"}";
      } else if (trimmed === "clear") {
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      } else {
        output = `bash: ${trimmed.split(" ")[0]}: command not found (try: df -h, free -h, ss -lntp, systemctl status nginx, ps aux | head -n 5)`;
      }
    }

    setTerminalHistory((prev) => [...prev, { cmd: trimmed, output }]);
    setTerminalInput("");
  };

  // =========================================================================
  // SIMULATOR 2: PERMISSIONS & OCTAL MODE SANDBOX
  // =========================================================================
  const [permOwner, setPermOwner] = useState({ r: true, w: true, x: true }); // 7
  const [permGroup, setPermGroup] = useState({ r: true, w: false, x: true }); // 5
  const [permOther, setPermOther] = useState({ r: false, w: false, x: false }); // 0
  const [specialBits, setSpecialBits] = useState({ suid: false, sgid: false, sticky: false });

  const octalOwner = (permOwner.r ? 4 : 0) + (permOwner.w ? 2 : 0) + (permOwner.x ? 1 : 0);
  const octalGroup = (permGroup.r ? 4 : 0) + (permGroup.w ? 2 : 0) + (permGroup.x ? 1 : 0);
  const octalOther = (permOther.r ? 4 : 0) + (permOther.w ? 2 : 0) + (permOther.x ? 1 : 0);
  const octalSpecial = (specialBits.suid ? 4 : 0) + (specialBits.sgid ? 2 : 0) + (specialBits.sticky ? 1 : 0);

  const numericCode = `${octalSpecial > 0 ? octalSpecial : ""}${octalOwner}${octalGroup}${octalOther}`;
  const symbolicString = `-${permOwner.r ? "r" : "-"}${permOwner.w ? "w" : "-"}${
    specialBits.suid ? (permOwner.x ? "s" : "S") : permOwner.x ? "x" : "-"
  }${permGroup.r ? "r" : "-"}${permGroup.w ? "w" : "-"}${
    specialBits.sgid ? (permGroup.x ? "s" : "S") : permGroup.x ? "x" : "-"
  }${permOther.r ? "r" : "-"}${permOther.w ? "w" : "-"}${
    specialBits.sticky ? (permOther.x ? "t" : "T") : permOther.x ? "x" : "-"
  }`;

  const permissionDevOpsUsage = useMemo(() => {
    const code = `${octalOwner}${octalGroup}${octalOther}`;
    switch (code) {
      case "600":
        return "Strict Private Key Mode: Used for SSH private keys (~/.ssh/id_ed25519) and secret credentials. Group/other have zero access.";
      case "640":
        return "Protected App Config: Owner (service user) has read/write, service group has read-only, others have zero access.";
      case "644":
        return "Standard Public Config / Asset: Owner has read/write, everyone else has read-only (e.g., /etc/hosts, static assets).";
      case "700":
        return "Private Directory: Used for ~/.ssh or root-only directories. Only the owner can enter and inspect files.";
      case "750":
        return "Deployment / App Home Directory: Deployer/owner has full access, application group can traverse & read, world has no access.";
      case "755":
        return "Standard Executable Script / Binary: Owner can modify, all users can execute & read (e.g., /usr/local/bin scripts).";
      case "777":
        return "CRITICAL ANTI-PATTERN: Full public read/write/execute. Allows any process or local attacker to overwrite or tamper with files!";
      default:
        return `Custom Unix mode: Owner can ${octalOwner >= 4 ? "read" : ""}${octalOwner % 4 >= 2 ? "+write" : ""}${
          octalOwner % 2 === 1 ? "+exec" : ""
        }. Group has value ${octalGroup}, Others have value ${octalOther}.`;
    }
  }, [octalOwner, octalGroup, octalOther]);

  // =========================================================================
  // SIMULATOR 3: PRODUCTION LINUX INCIDENT TROUBLESHOOTING GAMEDAY
  // =========================================================================
  const [gameScenarioIndex, setGameScenarioIndex] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [selectedGameChoice, setSelectedGameChoice] = useState(null);
  const [gameFeedback, setGameFeedback] = useState(null);

  const gameScenarios = [
    {
      id: "inc-1",
      title: "Incident 1: API Returns 502 Bad Gateway — Inode Exhaustion (ENOSPC)",
      symptom:
        "The web service crashes with 'No space left on device'. You run `df -h /` and see 35 GB available (only 30% disk capacity used). Developers are baffled.",
      question: "What is the true underlying Linux storage bottleneck and how do you confirm it?",
      options: [
        {
          id: "A",
          text: "The hard disk has physical bad sectors; immediately reboot into single-user mode and run fsck.",
          isCorrect: false,
          rationale: "Incorrect. Modern cloud EBS/NVMe drives rarely present raw bad sector errors of this form without kernel I/O panic.",
        },
        {
          id: "B",
          text: "Run `df -i /` to inspect inode capacity. The filesystem has exhausted available inodes due to millions of zero-byte session/cache files.",
          isCorrect: true,
          rationale:
            "Correct! Free storage capacity (df -h) and free inodes (df -i) are distinct resources. A directory with millions of tiny session or spool files exhausts inode metadata pointers even when gigabytes of disk space remain.",
        },
        {
          id: "C",
          text: "Execute `chmod -R 777 /var` to give the process more room to write buffers.",
          isCorrect: false,
          rationale: "Dangerous Anti-Pattern! Changing permissions has zero effect on disk capacity or inode quotas, and destroys server security.",
        },
      ],
    },
    {
      id: "inc-2",
      title: "Incident 2: Service Fails to Start — Port 5432 Already Occupied",
      symptom:
        "`systemctl start postgresql` fails with status=1/FAILURE. The service was functioning before an administrator attempted a manual restart.",
      question: "Which disciplined diagnostic sequence reveals why the service refused to bind?",
      options: [
        {
          id: "A",
          text: "Inspect `journalctl -u postgresql -b` to see error logs, then run `sudo ss -lntp 'sport = :5432'` to find the zombie or orphan process holding the port.",
          isCorrect: true,
          rationale:
            "Correct! Restarting without diagnosing masks the root cause. `journalctl` identifies the bind failure error, and `ss -lntp` pinpoints the conflicting PID holding TCP port 5432.",
        },
        {
          id: "B",
          text: "Immediately run `killall -9 postgres` and delete the PostgreSQL database directory.",
          isCorrect: false,
          rationale: "Disastrous! Deleting database directories destroys all committed application state.",
        },
        {
          id: "C",
          text: "Modify `/etc/hosts` and map localhost to a public AWS IP address.",
          isCorrect: false,
          rationale: "Incorrect. The issue is a local socket port collision, not DNS resolution.",
        },
      ],
    },
    {
      id: "inc-3",
      title: "Incident 3: Nginx Returns 403 Forbidden — Missing Directory Traversal (+x)",
      symptom:
        "Nginx returns 403 Forbidden when serving `/var/www/my-app/index.html`. You check `ls -l /var/www/my-app/index.html` and verify permissions are `-rw-r--r--` (644).",
      question: "Why can't the `www-data` user read `index.html` despite 644 file permissions?",
      options: [
        {
          id: "A",
          text: "Nginx requires index.html to have the executable bit (+x) enabled on the file itself.",
          isCorrect: false,
          rationale: "Incorrect. HTML files must never be marked executable; execution is for binaries and scripts.",
        },
        {
          id: "B",
          text: "A parent directory in the path (e.g. `/var/www/my-app` or `/var/www`) lacks execute permissions (+x) for others, preventing directory traversal.",
          isCorrect: true,
          rationale:
            "Correct! For ordinary files, `x` means execute. But for directories, `x` grants traversal/search permission! Without `+x` on every ancestor directory, a process cannot descend into the path to read an internal file.",
        },
        {
          id: "C",
          text: "Nginx can only read files located in `/tmp` for security reasons.",
          isCorrect: false,
          rationale: "Incorrect. Nginx standard web roots reside under `/var/www` or `/usr/share/nginx/html`.",
        },
      ],
    },
    {
      id: "inc-4",
      title: "Incident 4: SSH Connection Rejected — Unprotected Private Key Warning",
      symptom:
        "Running `ssh -i ~/.ssh/prod_key deploy@10.0.1.50` fails with: 'Permissions 0644 for prod_key are too open. It is required that your private key files are NOT accessible by others.'",
      question: "What is the correct, minimal permission fix required by the OpenSSH client?",
      options: [
        {
          id: "A",
          text: "Run `chmod 600 ~/.ssh/prod_key` so only the owner has read/write access.",
          isCorrect: true,
          rationale:
            "Correct! The OpenSSH client strictly rejects private keys readable by group or others. Mode 600 (-rw-------) guarantees private key confidentiality.",
        },
        {
          id: "B",
          text: "Run `chmod 777 ~/.ssh/prod_key` so all users can execute the key.",
          isCorrect: false,
          rationale: "Incorrect. OpenSSH will reject the key even harder with permissions 777.",
        },
        {
          id: "C",
          text: "Delete the private key and connect using plain text telnet.",
          isCorrect: false,
          rationale: "Catastrophic! Telnet transmits all credentials in unencrypted plain text.",
        },
      ],
    },
    {
      id: "inc-5",
      title: "Incident 5: API Unreachable Remotely Despite 200 OK on Localhost",
      symptom:
        "Inside the server, `curl http://127.0.0.1:8080/health` returns 200 OK. However, traffic from the cloud load balancer fails with connection timed out. Security groups and firewalls allow port 8080.",
      question: "What does `ss -lntp` reveal as the root architectural misconfiguration?",
      options: [
        {
          id: "A",
          text: "The application is bound to the loopback interface (`127.0.0.1:8080`) instead of all interfaces (`0.0.0.0:8080`), ignoring external network packets.",
          isCorrect: true,
          rationale:
            "Correct! `127.0.0.1` binds exclusively to the local loopback device. To accept requests routed across physical/virtual network interfaces (eth0), server applications must bind to `0.0.0.0` (wildcard).",
        },
        {
          id: "B",
          text: "The server CPU has entered an uninterruptible sleep state (D-state).",
          isCorrect: false,
          rationale: "Incorrect. The local curl succeeded, proving the process is actively executing.",
        },
        {
          id: "C",
          text: "The Linux kernel ran out of PIDs.",
          isCorrect: false,
          rationale: "Incorrect. PID exhaustion prevents creating new processes, not routing to an existing socket.",
        },
      ],
    },
  ];

  const handleSelectGameOption = (option) => {
    setSelectedGameChoice(option.id);
    setGameFeedback(option);
    if (option.isCorrect) {
      setGameScore((prev) => prev + 100);
    }
  };

  const handleNextGameScenario = () => {
    setSelectedGameChoice(null);
    setGameFeedback(null);
    setGameScenarioIndex((prev) => (prev + 1) % gameScenarios.length);
  };

  // =========================================================================
  // 10 SYLLABUS TOPICS
  // =========================================================================
  const topics = useMemo(
    () => [
      {
        id: 1,
        title: "The Linux Filesystem, FHS Architecture & Storage Inodes",
        week: "Filesystems & Storage",
        focus: "Filesystem Hierarchy Standard (FHS), Path Resolution, Inodes vs Block Storage",
        badge: "Filesystems",
        theory:
          "Linux unifies all physical storage devices, virtual filesystems, and kernel interfaces under a single hierarchical tree rooted at '/'. Unlike Windows drive letters (C:, D:), devices are mounted into directory mount points. Three paths are critical in 24/7 DevOps operations: (1) /etc holds configuration files; (2) /var/lib holds persistent service state (e.g. database data files); (3) /var/log holds traditional system and application logs. Modifying /etc alters configuration, whereas deleting /var/lib destroys live application state. A storage device can fail in two distinct ways: Block Capacity Exhaustion (no bytes remaining, checked via `df -h`) and Inode Exhaustion (no metadata pointers remaining, checked via `df -i`). An inode stores file metadata (permissions, ownership, file size, timestamps, data block pointers), excluding file name and file content. A million 1-byte files will completely exhaust inodes while leaving 99% of raw disk space free.",
        diagram: `THE LINUX FILESYSTEM HIERARCHY STANDARD (FHS) & INODE ANATOMY:
=============================================================================
/ (Root Directory)
├── etc/         System & application configuration (nginx.conf, hosts, fstab)
├── var/         Variable runtime data
│   ├── log/     System logs (syslog, auth.log, nginx/)
│   └── lib/     Persistent application state (mysql/, docker/, postgresql/)
├── usr/         User utilities & shared libraries (/usr/bin, /usr/lib)
├── proc/        Virtual pseudo-filesystem: live kernel & process memory structures
├── sys/         Virtual pseudo-filesystem: kernel device & hardware subsystem trees
└── dev/         Device nodes (sda, nvme0n1, null, urandom)
-----------------------------------------------------------------------------
INODE STRUCTURE (Metadata Pointer vs Data Blocks):
[ DIRECTORY ENTRY ]  maps  "app.log"  ----->  [ INODE #410291 ]
                                              ├── File Type: Regular File
                                              ├── Permissions: -rw-r----- (640)
                                              ├── Owner: devops (UID 1000)
                                              ├── File Size: 14.2 MB
                                              └── Data Block Pointers -> [Block 102] [Block 103] ...
=============================================================================`,
        keyTakeaways: [
          "Never confuse /etc (stateless config), /var/lib (persistent state), and /var/log (disposable logs).",
          "A disk can be full even if `df -h` shows 50GB free: always verify inode capacity with `df -i`.",
          "Directory traversal requires the execute (+x) bit; file read requires the read (+r) bit.",
          "`findmnt` and `lsblk` reveal block device hierarchy and mount options across physical & virtual volumes.",
        ],
        codeExample: `# Production Shell Commands: Storage Diagnosis & Inode Inspection
# 1. Check disk block capacity
df -h

# 2. Check inode capacity (Detects million-file exhaustion traps)
df -i

# 3. Find top 10 space-consuming directories on root mount
sudo du -xhd1 /var 2>/dev/null | sort -h | tail -n 10

# 4. Count files in directories to pinpoint inode hoarders
sudo find /tmp -xdev -type f | cut -d "/" -f 2,3 | sort | uniq -c | sort -nr | head -n 5`,
      },
      {
        id: 2,
        title: "Processes, Signals, CPU Scheduling & Memory Analysis",
        week: "Process Management",
        focus: "Process Anatomy (PID/PPID), States (R, S, D, Z), Signals & Load Average",
        badge: "Process Management",
        theory:
          "A program is static code stored on disk; a process is an active executing instance with virtual memory, open file descriptors, security credentials, and scheduling state. Linux processes exist in distinct kernel states: R (Running/Runnable on CPU queue), S (Interruptible Sleep: waiting for event/network), D (Uninterruptible Sleep: waiting for synchronous disk I/O, immune to signals), T (Stopped/Traced), and Z (Zombie: terminated process whose exit code has not yet been collected by its parent via waitpid()). Load Average measures the average number of runnable tasks (R) plus uninterruptible tasks (D) over 1, 5, and 15 minutes; high load with low CPU indicates an I/O disk bottleneck. Graceful process termination sends SIGTERM (Signal 15), giving the application time to flush buffers, finish transactions, and close database connections. SIGKILL (Signal 9) cannot be caught or handled and causes abrupt termination without cleanup.",
        diagram: `LINUX PROCESS LIFECYCLE & KERNEL SCHEDULING STATES:
=============================================================================
         [ fork() / execve() ]
                  |
                  v
          +---------------+    Dispatched by CPU Scheduler    +---------------+
          |   READY (R)   | --------------------------------> |  RUNNING (R)  |
          +---------------+ <-------------------------------- +---------------+
                  ^             Preempted / Time slice expired         |
                  |                                                    |
          I/O completes                                   Waiting on Network / Event
                  |                                                    v
          +-------------------------------+                   +---------------+
          |  UNINTERRUPTIBLE SLEEP (D)    |                   |   SLEEP (S)   |
          |  (Waiting on Disk I/O, Immune)|                   +---------------+
          +-------------------------------+                            |
                  |                                                    |
                  +-----------------------+----------------------------+
                                          |
                                    Process exits
                                          v
                              +-----------------------+
                              |      ZOMBIE (Z)       |  (Defunct: waiting for parent)
                              +-----------------------+
                                          | Parent calls waitpid()
                                          v
                                    [ REAPED / DEAD ]
=============================================================================`,
        keyTakeaways: [
          "Load average reflects CPU-runnable processes PLUS disk-waiting processes in D-state.",
          "Zombie processes consume zero CPU and RAM, but consume valuable PID table entries.",
          "Always send SIGTERM (15) first; only resort to SIGKILL (9) when a process is genuinely unrecoverable.",
          "`free -h` breakdown: 'available' memory includes buff/cache that the kernel can instantly evict for apps.",
        ],
        codeExample: `# Process Inspection & Resource Diagnostics in DevOps
# 1. Snapshot top 5 CPU-consuming processes
ps -eo pid,ppid,user,stat,%cpu,%mem,cmd --sort=-%cpu | head -n 6

# 2. Inspect a specific process with full memory and thread details
ps -p 1204 -o pid,ppid,user,stat,%cpu,%mem,etime,cmd

# 3. Check live virtual memory statistics (1-second intervals)
vmstat 1 5

# 4. Graceful termination followed by verified kill
kill -TERM 1204
sleep 3
# If process is still in ps table, escalate:
kill -KILL 1204`,
      },
      {
        id: 3,
        title: "Users, Groups, Permissions & Secure Access Control",
        week: "Security & Identity",
        focus: "Identity (UID/GID), Symbolic & Numeric Modes, Directory Traversal, SUID & sudo",
        badge: "Access Control",
        theory:
          "Linux enforces discretionary access control (DAC) based on User (Owner), Group, and Other (World). Permissions are represented as a 10-character string (e.g. `-rw-r-----`) or a 3-digit octal number (`640`). For ordinary files, Read (`r` = 4) permits viewing contents, Write (`w` = 2) permits editing, and Execute (`x` = 1) permits running as code. For directories, Execute (`x`) represents directory traversal/search: without `+x`, a user cannot `cd` into the directory or access any files inside it, even if the internal file permissions are 777! The dangerous anti-pattern `chmod -R 777` grants universal modification privileges to local attackers and must never be used. Advanced permissions include SUID (`4xxx`: executes with owner privileges), SGID (`2xxx`: executes with group privileges or inherits group on new files), and the Sticky Bit (`1xxx`: prevents users from deleting files they do not own, used on `/tmp`).",
        diagram: `PERMISSION STRING DISSECTION & DIRECTORY TRAVERSAL MECHANICS:
=============================================================================
Type   Owner (u)      Group (g)      Others (o)
 -     r  w  -        r  -  -        -  -  -
 |     |  |  |        |  |  |        |  |  |
 File  4 + 2 + 0      4 + 0 + 0      0 + 0 + 0  ===>  Octal Mode: 640
-----------------------------------------------------------------------------
THE DIRECTORY TRAVERSAL RULE (Why directory 'x' matters):
  Directory: /srv/app/ (Owner: appuser, Permissions: drwxr-x--- [750])
  File:      /srv/app/config.yaml (Permissions: -rw-r--r-- [644])

  User: 'guest'
  Can guest read config.yaml?
  1. Inspect /srv/app/ permissions for Others -> Mode is '---' (0). No 'x' traversal bit!
  2. Kernel immediately blocks access with: 'Permission denied'.
  3. The 644 permission on config.yaml is NEVER evaluated!
=============================================================================`,
        keyTakeaways: [
          "Directory 'x' bit means search/traversal; without it, internal files are completely unreachable.",
          "SSH private keys require mode 600 (-rw-------); OpenSSH strictly refuses keys readable by others.",
          "`usermod -aG <group> <user>` appends groups; omitting `-a` accidentally wipes all existing supplementary groups!",
          "Apply the principle of least privilege: production microservices must run as unprivileged service accounts.",
        ],
        codeExample: `# User Administration & Safe Permissions Hardening
# 1. Create a dedicated unprivileged service account with disabled login
sudo useradd -r -s /usr/sbin/nologin -d /srv/api apiuser

# 2. Assign ownership to application directory
sudo chown -R apiuser:apiuser /srv/api

# 3. Apply secure production directory and file permissions
# Directories: 750 (traversal for group, isolated from world)
sudo find /srv/api -type d -exec chmod 750 {} +

# Files: 640 (read/write for owner, read for group, isolated from world)
sudo find /srv/api -type f -exec chmod 640 {} +

# Sensitive credentials (API tokens, private keys): 600
chmod 600 /srv/api/.env`,
      },
      {
        id: 4,
        title: "Linux Networking, Ports, Sockets & The 6-Layer Debugging Sequence",
        week: "Networking",
        focus: "Routing, Interfaces, Sockets (ss), Loopback vs Wildcard & Connectivity",
        badge: "Networking",
        theory:
          "Troubleshooting network reachability requires separating address resolution, routing, socket binding, firewall rules, transport handshakes, and application protocol responses. The Linux kernel uses `ip address` to manage interface IPs and `ip route` to manage routing tables. The socket utility `ss -lntp` reports listening TCP sockets. A common architectural trap is binding to the Loopback interface (`127.0.0.1:8080`): this socket only accepts packets originating from inside the local OS kernel; external packets arriving on `eth0` are immediately dropped. To accept external traffic, the process must bind to the Wildcard address (`0.0.0.0:8080`). Connectivity must be verified layer by layer: `ping` tests ICMP reachability, but firewalls often drop ICMP while allowing TCP; therefore, `curl -v` or `nc -zv` must be used to test actual application transport connectivity.",
        diagram: `THE 6-LAYER SYSTEMATIC LINUX NETWORK DEBUGGING SEQUENCE:
=============================================================================
[ 1. Name Resolution ]       -> getent hosts api.internal
                                (Verifies /etc/hosts & DNS resolver in /etc/resolv.conf)
        |
        v
[ 2. Route & Interface ]     -> ip route get 10.0.1.50
                                (Verifies default gateway and outbound eth0 interface)
        |
        v
[ 3. Listening Socket ]      -> sudo ss -lntp 'sport = :8080'
                                (Distinguishes 127.0.0.1 [Local Only] from 0.0.0.0 [All IPs])
        |
        v
[ 4. Local Firewall / ACL ]  -> sudo iptables -S  OR  sudo ufw status
                                (Verifies kernel packet filter rules)
        |
        v
[ 5. Transport TCP Handshake]-> nc -zv 10.0.1.50 8080
                                (SYN -> SYN-ACK -> ACK completes successfully)
        |
        v
[ 6. Application Protocol ]  -> curl -v https://10.0.1.50:8080/health
                                (HTTP Status 200 OK + payload returned)
=============================================================================`,
        keyTakeaways: [
          "`127.0.0.1:8080` listens ONLY to localhost; `0.0.0.0:8080` listens to all IPv4 network interfaces.",
          "Ping failure does NOT prove service failure: ICMP is frequently blocked while HTTP/HTTPS is healthy.",
          "`ss -lntp` is the modern replacement for netstat; it extracts socket state directly from kernel memory.",
          "Follow the 6-layer sequence systematically before modifying production firewall or cloud security groups.",
        ],
        codeExample: `# Network Diagnostics & Socket Inspection Script
# 1. Inspect listening ports and the processes holding them
sudo ss -lntp

# 2. Test specific port listener
sudo ss -lntp 'sport = :8080'

# 3. Test DNS name lookup resolution path
getent hosts google.com

# 4. Test end-to-end HTTP connection with timing and headers
curl -Iv https://httpbin.org/status/200

# 5. Check route path to remote server
ip route get 1.1.1.1`,
      },
      {
        id: 5,
        title: "systemd, Service Architecture & Daemon Lifecycle",
        week: "Service Management",
        focus: "Unit File Architecture, systemctl Commands, Restart Policies & daemon-reload",
        badge: "Service Architecture",
        theory:
          "systemd is the standard init system and service manager on modern enterprise Linux distributions (Ubuntu, Debian, RHEL, Fedora). It initializes the user space, starts services in parallel, tracks processes using Linux cgroups, and restarts crashed applications. A service is declared in a `.service` unit file containing three sections: `[Unit]` (metadata and startup dependencies like `After=network.target`), `[Service]` (execution binary, unprivileged User/Group, working directory, environment variables, and `Restart=on-failure`), and `[Install]` (`WantedBy=multi-user.target` for boot enablement). Modifying a unit file requires executing `sudo systemctl daemon-reload` so systemd re-parses configuration from disk into memory; `daemon-reload` does NOT restart the application. Common startup failures stem from: missing executables, syntax errors in config, port collisions, and insufficient file permissions.",
        diagram: `SYSTEMD SERVICE UNIT FILE ARCHITECTURE & LIFECYCLE:
=============================================================================
/etc/systemd/system/myapp.service
+---------------------------------------------------------------------------+
| [Unit]                                                                    |
| Description=Production Go Checkout API                                   |
| After=network.target postgresql.service                                   |
|                                                                           |
| [Service]                                                                 |
| Type=simple                                                               |
| User=appuser                                                              |
| Group=appgroup                                                            |
| WorkingDirectory=/srv/myapp                                               |
| ExecStart=/srv/myapp/bin/server --config=/srv/myapp/config.yaml           |
| Restart=on-failure                                                        |
| RestartSec=5s                                                             |
| LimitNOFILE=65536                                                         |
|                                                                           |
| [Install]                                                                 |
| WantedBy=multi-user.target                                                |
+---------------------------------------------------------------------------+
                                   |
                +------------------+------------------+
                v                                     v
   sudo systemctl daemon-reload           sudo systemctl restart myapp
   (Rereads unit file into systemd memory) (Restarts actual worker process)
=============================================================================`,
        keyTakeaways: [
          "`systemctl restart` is an operational action, NOT a root-cause diagnosis.",
          "Always run `sudo systemctl daemon-reload` after modifying any unit file under `/etc/systemd/system/`.",
          "`Restart=on-failure` with `RestartSec=5s` prevents runaway CPU crash loops.",
          "`systemctl --failed` immediately lists all units that failed during system boot.",
        ],
        codeExample: `# Managing & Troubleshooting systemd Services
# 1. Check detailed status, PID, memory, and recent journal output
systemctl status nginx.service

# 2. Enable for auto-start on boot AND start immediately
sudo systemctl enable --now nginx.service

# 3. Reload configuration without dropping live TCP connections
sudo systemctl reload nginx.service

# 4. Check all units in failed state
systemctl --failed

# 5. After editing /etc/systemd/system/myapp.service:
sudo systemctl daemon-reload
sudo systemctl restart myapp.service`,
      },
      {
        id: 6,
        title: "Logs, Journalctl & Incident Root Cause Timelines",
        week: "Observability & Logs",
        focus: "journalctl Filters, Kernel dmesg, /var/log & Incident Timeline Reconstruction",
        badge: "Incident Investigation",
        theory:
          "Systematic debugging requires reconstructing what the server and application reported over time, rather than guessing. Modern Linux stores binary structured logs in the systemd journal, queried via `journalctl`. Key filtering options include: `-b` (current boot only), `-u <unit>` (filter by specific service), `-p err` (filter by priority level: emerg, alert, crit, err), `--since '1 hour ago'`, and `-k` (kernel ring buffer messages, equivalent to `dmesg`). When analyzing an outage, always construct an Incident Timeline: the initial root cause (e.g. disk capacity filling up at 14:02) occurs minutes before the visible symptom (application crash at 14:05) and subsequent restart loops (14:06).",
        diagram: `INCIDENT TIMELINE RECONSTRUCTION (Distinguishing Root Cause from Symptoms):
=============================================================================
TIME     SUBSYSTEM     EVENT / LOG OUTPUT                            CLASSIFICATION
-----------------------------------------------------------------------------
14:00    Kernel        [Disk Controller] nvme0n1: write buffer busy   Early Warning
14:02    Storage       [cron:db_backup] Disk space reaches 100% full  ROOT CAUSE!
14:04    PostgreSQL    [FATAL] could not write to WAL: No space left   First Failure
14:05    Nginx         [error] 502 Bad Gateway: Connection refused     Visible Symptom
14:06    systemd       [service:myapp] Restarting service (attempt 1) Downstream Effect
14:06    systemd       [service:myapp] CrashLoop: main process exited  Cascading Loop
=============================================================================
LESSON: The administrator sees the 14:05 Nginx 502 error, but the fix is
resolving the 14:02 disk exhaustion event!`,
        keyTakeaways: [
          "`journalctl -u <service> -b --no-pager` isolates service logs from the current operating system boot.",
          "`journalctl -p err` immediately highlights critical failures and kernel panics.",
          "Distinguish root cause (storage/memory failure) from downstream symptoms (502 Bad Gateway).",
          "Combine `journalctl -k` with `dmesg -T` to detect Out-Of-Memory (OOM) killer terminations.",
        ],
        codeExample: `# Production Log Filtering & Timeline Construction
# 1. View logs for a specific service in the last 30 minutes
journalctl -u myapp --since "30 minutes ago" --no-pager

# 2. Follow live log stream in real time (tail -f equivalent)
journalctl -u myapp -f

# 3. Filter for errors and critical warnings only
journalctl -u myapp -p err -b

# 4. Check kernel dmesg for OOM killer executions (Killed process)
sudo dmesg -T | grep -i -E "oom|out of memory|killed process"`,
      },
      {
        id: 7,
        title: "SSH, Cryptographic Keys & Secure Remote Server Administration",
        week: "Remote Administration",
        focus: "Asymmetric Cryptography, Ed25519 Keys, rsync, scp & SSH Hardening",
        badge: "Remote Access",
        theory:
          "Secure Shell (SSH) provides cryptographically encrypted remote shell sessions, command execution, and file transfer. Modern DevOps standardizes on Ed25519 elliptic-curve keypairs (`ssh-keygen -t ed25519 -C 'devops-key'`), offering higher security and performance than legacy RSA 2048. Asymmetric cryptography guarantees that the server verifies client identity using the public key (`~/.ssh/authorized_keys`) without the private key ever leaving the client machine. Strict filesystem permissions are mandatory: `chmod 700 ~/.ssh` and `chmod 600 ~/.ssh/authorized_keys` on the server, and `chmod 600` on the local private key. `rsync -av` provides efficient delta synchronization over SSH, transferring only changed bytes compared to naive `scp` which copies entire files repeatedly.",
        diagram: `SSH ASYMMETRIC KEYPAIR AUTHENTICATION PROTOCOL:
=============================================================================
LOCAL WORKSTATION                                       REMOTE CLOUD SERVER
~/.ssh/id_ed25519 (Private Key: 600)                    ~/.ssh/authorized_keys (600)
    |                                                         |
    |---- (1) Client initiates SSH connection (TCP 22) ------>|
    |<--- (2) Server sends random cryptographic challenge ----|
    |                                                         |
[ Signs challenge with local Private Key ]                    |
    |                                                         |
    |---- (3) Sends cryptographic signature ----------------->|
    |                                            [ Verifies signature with Public Key ]
    |<--- (4) Authentication Approved! Shell session opened --|
=============================================================================`,
        keyTakeaways: [
          "Ed25519 is the modern cryptographic standard for SSH keys; deprecate weak RSA 1024/2048 keys.",
          "Never share private keys; install only the public key into `~/.ssh/authorized_keys`.",
          "Use `ssh -v` for verbose connection debugging to pinpoint permission, key, or cipher rejections.",
          "`rsync -avz` synchronizes directory trees over SSH using delta algorithms, minimizing network bandwidth.",
        ],
        codeExample: `# Secure SSH Operations & Remote Automation
# 1. Generate modern Ed25519 SSH keypair
ssh-keygen -t ed25519 -C "devops-production" -f ~/.ssh/devops_ed25519

# 2. Copy public key to remote server securely
ssh-copy-id -i ~/.ssh/devops_ed25519.pub deploy@10.0.1.50

# 3. Connect using explicit private key and verbose debugging
ssh -v -i ~/.ssh/devops_ed25519 deploy@10.0.1.50

# 4. Synchronize project directory with remote server using rsync
rsync -avz --delete -e "ssh -i ~/.ssh/devops_ed25519" ./dist/ deploy@10.0.1.50:/srv/myapp/`,
      },
      {
        id: 8,
        title: "Bash Scripting, Streams, Redirection & Idempotency",
        week: "Automation",
        focus: "Streams (0, 1, 2), Pipes, set -u -o pipefail, Defensive Scripting & Idempotency",
        badge: "Shell Scripting",
        theory:
          "Bash connects Unix utilities through three standard streams: stdin (fd 0), stdout (fd 1), and stderr (fd 2). Output redirection overwrites with `>`, appends with `>>`, and redirects errors with `2>`. Pipes (`|`) pass stdout of one process into stdin of the next. Production DevOps scripts require defensive initialization: `set -u` (fails on unset variables) and `set -o pipefail` (fails if any command in a pipeline errors). Always quote variable expansions (`\"$var\"`) to prevent word splitting and globbing attacks. The defining property of reliable automation is Idempotency: running a script multiple times must yield the exact same target state without side effects (e.g. using `mkdir -p` or verifying file existence before appending lines).",
        diagram: `STANDARD STREAMS, REDIRECTION & IDEMPOTENT EXECUTION:
=============================================================================
                   [ Standard Input (stdin: fd 0) ]
                                |
                                v
                       [ UNIX / BASH PROCESS ]
                        /                   \\
                       v                     v
[ Standard Output (stdout: fd 1) ]   [ Standard Error (stderr: fd 2) ]
        |                                     |
        v                                     v
   output.log (> / >>)                  error.log (2> / 2>>)
-----------------------------------------------------------------------------
NON-IDEMPOTENT (BUGGY)               IDEMPOTENT (PRODUCTION SAFE)
echo "export NODE_ENV=prod" >> /etc/env   grep -q "NODE_ENV=prod" /etc/env || \\
(Adds duplicate line every run!)           echo "export NODE_ENV=prod" >> /etc/env
                                         (Only appends if not already present!)
=============================================================================`,
        keyTakeaways: [
          "`set -u -o pipefail` catches unset variables and hidden pipeline failures early.",
          "Always double-quote variables (`\"$filename\"`) to prevent destructive word-splitting bugs.",
          "Idempotency invariant: automation must ensure required state, not blindly repeat mutations.",
          "Check exit codes (`$?`): zero denotes success; non-zero denotes error.",
        ],
        codeExample: `#!/usr/bin/env bash
# Production Defensive Bash Script Template
set -u
set -o pipefail

LOG_FILE="/var/log/backup.log"
TARGET_DIR="/srv/myapp"

log_message() {
    local msg="$1"
    printf '%s [%s]: %s\n' "$(date -Is)" "$(hostname)" "$msg" | tee -a "$LOG_FILE"
}

# Idempotent directory creation
if [[ ! -d "$TARGET_DIR" ]]; then
    mkdir -p "$TARGET_DIR"
    log_message "Created target directory $TARGET_DIR"
else
    log_message "Directory $TARGET_DIR already exists; skipping"
fi`,
      },
      {
        id: 9,
        title: "Package Management, Change Control & Rollbacks (APT & DNF)",
        week: "Package Management",
        focus: "APT vs DNF, apt update vs upgrade, Package Pinning & Controlled Upgrades",
        badge: "Package Control",
        theory:
          "Linux distributions package software with dependency trees, checksums, and update channels. In Debian/Ubuntu, `apt update` refreshes repository index metadata, while `apt upgrade` installs newer package versions. For automation scripts, Ubuntu recommends using `apt-get` rather than interactive `apt`. In production, package installations must be deterministic: use version pinning to prevent unexpected dependency upgrades from breaking APIs. Before removing packages, distinguish `apt remove` (deletes binaries, preserves configuration) from `apt purge` (deletes binaries AND `/etc` configuration files). Red Hat/Fedora systems utilize `dnf`, which provides automated transaction history rollback (`dnf history undo`).",
        diagram: `APT PACKAGE MANAGEMENT PIPELINE & REPOSITORY SYNCHRONIZATION:
=============================================================================
[ REMOTE REPOSITORY (archive.ubuntu.com) ]
                  |
                  |  sudo apt update
                  v
[ LOCAL PACKAGE CACHE (/var/lib/apt/lists/) ]  <- Index of available versions
                  |
                  |  sudo apt install nginx=1.24.0-2ubuntu1
                  v
[ DPNG DATABASE (/var/lib/dpkg/status) ]      <- Tracks installed packages
                  |
                  +---> Extracts binaries to /usr/sbin/nginx
                  +---> Generates default config in /etc/nginx/
                  +---> Registers systemd service in /lib/systemd/system/
=============================================================================`,
        keyTakeaways: [
          "`apt update` only downloads metadata indexes; `apt upgrade` executes actual package updates.",
          "In automation pipelines, use `DEBIAN_FRONTEND=noninteractive apt-get -y install` to prevent blocking on prompts.",
          "`apt remove` retains configuration files; `apt purge` permanently deletes config files in `/etc`.",
          "Test package upgrades in staging environments before applying kernel or library upgrades to production nodes.",
        ],
        codeExample: `# Non-Interactive, Deterministic Package Installation in CI/CD
# 1. Update package index non-interactively
sudo apt-get update -qq

# 2. Install specific pinned version without interactive prompts
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
  nginx=1.24.*

# 3. Verify installed package details and origin
dpkg -l nginx
apt-cache policy nginx

# 4. Safe removal preserving configuration
sudo apt-get remove -y nginx`,
      },
      {
        id: 10,
        title: "The 10 Universities Academic Backbone & Integrated Troubleshooting",
        week: "Academic Synthesis",
        focus: "MIT, Stanford, Cambridge Foundations & 5-Step Diagnostic Protocol",
        badge: "Academic Foundations",
        theory:
          "The curriculum synthesizes the operating-systems principles taught across the top 10 global universities: MIT (kernels, virtual memory, IPC), Imperial College (resource scheduling & I/O), Stanford CS111 (system calls & crash recovery), Oxford (digital architecture), Harvard CS1610 (process hierarchy & disk caching), Cambridge (protection & storage), Caltech CS124 (concurrency & virtual memory), ETH Zurich (hardware foundations), UCL (shell automation), and NUS CS2106 (UNIX protection). The unified troubleshooting doctrine is: (1) Define symptom, (2) Inspect service state (`systemctl`, `ps`), (3) Check resource telemetry (`df`, `free`, `uptime`), (4) Check permissions & sockets (`id`, `ss -lntp`), (5) Apply controlled fix and verify. Never execute destructive commands or blind restarts without evidence.",
        diagram: `THE 5-STEP INTEGRATED LINUX TROUBLESHOOTING DOCTRINE:
=============================================================================
STEP 1: DEFINE SYMPTOM   -> What fails? When did it start? What changed?
              |
              v
STEP 2: SERVICE & PROCESS -> systemctl status myapp  |  ps aux | grep myapp
              |              (Is PID alive? Did systemd record exit code?)
              v
STEP 3: LOGS & RESOURCES  -> journalctl -u myapp -n 20  |  df -h  |  free -h
              |              (Examine error logs, verify disk space & memory)
              v
STEP 4: ACCESS & NETWORK  -> namei -l /path/to/file  |  ss -lntp
              |              (Verify directory traversal & listening interfaces)
              v
STEP 5: CONTROLLED FIX    -> Apply atomic change  ->  Verify recovery  ->  Document
=============================================================================`,
        keyTakeaways: [
          "Always gather evidence before acting: a restart without diagnosis destroys volatile evidence.",
          "The top 10 university operating systems courses share common primitives: virtual memory, system calls, and scheduling.",
          "Check logs, storage capacity, and port listeners systematically to eliminate guesswork.",
          "Document root-cause post-mortems to prevent repeated system failures.",
        ],
        codeExample: `# Rapid Production Linux Health Check Diagnostic Script
#!/usr/bin/env bash
set -u

echo "=== 1. SYSTEM UPTIME & LOAD ==="
uptime

echo -e "\n=== 2. MEMORY UTILIZATION ==="
free -h

echo -e "\n=== 3. DISK SPACE & INODES ==="
df -h /
df -i /

echo -e "\n=== 4. FAILED SYSTEMD SERVICES ==="
systemctl --failed --no-legend

echo -e "\n=== 5. LISTENING TCP PORTS ==="
sudo ss -lntp | grep -E "LISTEN"`,
      },
    ],
    []
  );

  const currentTopic = topics[selectedTopic] || topics[0];

  // =========================================================================
  // 12 MASTERY TEST QUESTIONS
  // =========================================================================
  const masteryQuestions = [
    {
      q: "What is the precise difference between free storage capacity (df -h) and free inodes (df -i)?",
      a: "`df -h` measures raw disk block capacity (gigabytes of storage). `df -i` measures the number of available inode metadata records. An inode is allocated for every unique file and directory in a filesystem. If an application generates millions of zero-byte session or spool files, the filesystem will run out of inodes (100% inode utilization), causing all subsequent write operations to fail with 'No space left on device', even if `df -h` shows 100 GB of free block storage.",
    },
    {
      q: "Why does a directory require the execute (+x) permission bit for users to read files inside it?",
      a: "In Unix filesystems, directory permissions have distinct semantics from file permissions: Read (`r`) permits listing entries inside the directory (e.g. running `ls`); Write (`w`) permits adding, renaming, or deleting directory entries; Execute (`x`) grants traversal/search permission. Without `+x` on a directory, the kernel refuses to resolve any path that passes through that directory. Even if a file inside has mode 777, an unprivileged user cannot open it if any ancestor directory lacks `+x`.",
    },
    {
      q: "What is an uninterruptible sleep state (D-state) in Linux, and why can't `kill -9` terminate it?",
      a: "A process enters the 'D' state (Uninterruptible Sleep) when it executes a synchronous kernel system call waiting on hardware I/O—most commonly reading or writing to a disk block, NFS share, or hardware driver. The Linux kernel guarantees that the process cannot be interrupted by any signal (including SIGKILL 9) while inside critical device driver code, ensuring kernel data structures remain uncorrupted. If an NFS share hangs or a disk experiences hardware block freezes, the process remains in D-state until hardware responds or the server reboots.",
    },
    {
      q: "What is a zombie process (Z-state), and does it consume memory or CPU resources?",
      a: "A zombie process has already terminated its execution and released its code, memory address space, and open file descriptors. However, its task structure remains in the kernel's process table because its parent process has not yet collected its exit status via the `wait()` or `waitpid()` system calls. A zombie consumes 0% CPU and 0 bytes of RAM, but occupies one PID entry. If a buggy parent spawns thousands of zombies, the system can exhaust its maximum PID limit (`/proc/sys/kernel/pid_max`), preventing any new processes from spawning.",
    },
    {
      q: "Explain the difference between binding to 127.0.0.1:8080 and 0.0.0.0:8080.",
      a: "`127.0.0.1` is the IPv4 loopback address. A socket bound to `127.0.0.1:8080` only accepts TCP packets routed through the local virtual loopback device (`lo`). It is completely invisible and unreachable to external packets arriving across physical or virtual interfaces (`eth0`, `ens5`). Binding to `0.0.0.0:8080` binds to the wildcard address, directing the kernel to accept incoming connections destined for port 8080 on all local IPv4 network interfaces.",
    },
    {
      q: "Why is running `chmod -R 777` considered a catastrophic administrative anti-pattern?",
      a: "`chmod -R 777` grants universal read, write, and execute permissions to all users and local processes on the system. This breaks multiple security boundaries: (1) Any compromised low-privileged daemon can overwrite production application binaries, inject backdoors, or tamper with database records; (2) OpenSSH immediately disables key authentication if `.ssh` or `authorized_keys` has permissions looser than 700/600; (3) SUID binaries and configuration files lose integrity guarantees.",
    },
    {
      q: "What does `sudo systemctl daemon-reload` do, and why doesn't it restart the service?",
      a: "`systemctl daemon-reload` instructs systemd's PID 1 manager to re-read and parse all unit configuration files on disk (`/etc/systemd/system/`, `/lib/systemd/system/`) into its in-memory dependency tree. It updates internal service definitions. However, it intentionally does NOT restart the running process, because automatically terminating live production applications during unit file maintenance would cause unexpected service downtime. The operator must issue `systemctl restart <unit>` to apply changes to the running process.",
    },
    {
      q: "What is the difference between `apt remove` and `apt purge` on Debian/Ubuntu systems?",
      a: "`apt remove <package>` removes the application's executable binaries, libraries, and documentation, but deliberately preserves its configuration files in `/etc`. If the package is reinstalled later, original configuration settings are maintained. `apt purge <package>` removes both the package binaries AND all associated configuration files in `/etc`, wiping all customized daemon parameters.",
    },
    {
      q: "Why is `set -u -o pipefail` critical in production Bash automation scripts?",
      a: "By default, Bash treats unset variables as empty strings, which can turn commands like `rm -rf \"$BACKUP_DIR/\"` into `rm -rf /` if `BACKUP_DIR` is not set. `set -u` causes Bash to immediately abort with an error if an unset variable is referenced. In standard pipelines (`cmdA | cmdB | cmdC`), Bash only checks the exit status of the final command `cmdC`; if `cmdA` crashes, the script continues silently. `set -o pipefail` ensures the entire pipeline returns an error code if ANY command in the sequence fails.",
    },
    {
      q: "What does Load Average actually measure, and why can high load occur with low CPU utilization?",
      a: "Linux Load Average measures the average number of tasks in the Runnable state (R) plus tasks in the Uninterruptible Sleep state (D), averaged over 1, 5, and 15 minutes. It is NOT a percentage of CPU usage. A system with an 8-core CPU can experience a load average of 25.0 with only 5% CPU utilization if multiple processes are stuck in D-state waiting on slow or frozen disk I/O, unresponsive SANs, or locked NFS mounts.",
    },
    {
      q: "Why does OpenSSH require private keys to have mode 600 (-rw-------)?",
      a: "Asymmetric cryptography depends completely on private keys remaining strictly confidential to their owner. If a private key file has group or world read permissions (e.g. 644 or 777), any other local user, service account, or compromised process running on the workstation could read the key and impersonate the user across all remote cloud servers. OpenSSH enforces a defensive check: if permissions are too open, it immediately halts and refuses connection.",
    },
    {
      q: "Why is a restart an operational action rather than a root-cause diagnosis?",
      a: "Restarting a failed process merely re-initializes memory and restarts code execution. If the failure was caused by a full disk, missing environment variables, network routing loss, port conflicts, or database deadlock, the restarted service will either crash immediately (CrashLoop) or fail again within minutes. Furthermore, restarting clears volatile memory, in-flight socket buffers, and process state needed to diagnose the true root cause.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[130px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-amber-400/10 blur-[150px]" />
        <div className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="linux"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Linux AI"
        />

        {/* HERO BANNER */}
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl">
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-400 mb-4">
              <Terminal size={13} />
              <span>Linux System Administration</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white">
              Linux for DevOps
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-stone-300">
              Grounded in the academic operating systems foundations of{" "}
              <span className="text-orange-400 font-semibold">
                MIT 6.033/6.828, Stanford CS111, Harvard CS1610, Cambridge OS, and Imperial College
              </span>
              . Master server administration from first principles: Filesystem Hierarchy Standard, Inode vs Block
              capacity, Kernel Process Scheduling, Octal Permissions, Sockets & the 6-Layer Network Debugging Sequence,
              systemd Service Architecture, journalctl Root-Cause Timelines, and Defensive Bash Automation.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> FHS & Inode Exhaustion
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> Process States (R, S, D, Z)
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> 6-Layer Network Sequence
              </span>
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Check size={14} /> systemd & Defensive Bash
              </span>
            </div>
          </div>
        </div>

        {/* EMBEDDED AI TUTOR */}
        {showAiTutor && (
          <div className="mb-10 overflow-hidden rounded-3xl border border-orange-300 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-600">
                  Nova AI • Principal Linux & DevOps SRE Mentor
                </span>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-mono text-stone-400 hover:text-stone-700"
              >
                ✕ Close
              </button>
            </div>
            <div className="mt-4">
              <LearningRo currentTopic="devops-linux-foundations" />
            </div>
          </div>
        )}

        {/* WORKSPACE NAVIGATION TABS */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <BookOpen size={15} />
            <span>10 Core Curriculum Topics</span>
          </button>
          <button
            onClick={() => setActiveTab("terminal-lab")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "terminal-lab"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Terminal size={15} />
            <span>Lab 1: Interactive Command Terminal</span>
          </button>
          <button
            onClick={() => setActiveTab("permissions-lab")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "permissions-lab"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <Lock size={15} />
            <span>Lab 2: Octal Permissions Sandbox</span>
          </button>
          <button
            onClick={() => setActiveTab("gameday")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "gameday"
                ? "bg-[#f97316] text-white shadow-orange-500/20"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <AlertTriangle size={15} />
            <span>Lab 3: Incident Troubleshooting GameDay</span>
          </button>
          <button
            onClick={() => setActiveTab("mastery")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition shadow-xs ${
              activeTab === "mastery"
                ? "bg-[#18181b] text-white"
                : "bg-white text-stone-700 hover:bg-stone-100"
            }`}
          >
            <CheckCircle2 size={15} />
            <span>Linux Mastery Test (12 Questions)</span>
          </button>
        </div>

        {/* =================================================================== */}
        {/* VIEW 1: THEORY & 10 SYLLABUS TOPICS */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid gap-8 lg:grid-cols-12 mb-16">
            {/* TOPIC SELECTOR (COL-4) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-5 shadow-xs">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-4 px-2">
                  DevOps Module 1 Syllabus • 10 Topics
                </h3>
                <div className="space-y-1.5">
                  {topics.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopic(idx)}
                      className={`w-full text-left rounded-2xl px-4 py-3 text-xs transition flex flex-col gap-1 ${
                        selectedTopic === idx
                          ? "bg-[#18181b] text-white font-bold shadow-md shadow-black/10"
                          : "text-stone-700 hover:bg-[#f2efe9] font-medium"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider ${
                            selectedTopic === idx ? "text-orange-400" : "text-stone-400"
                          }`}
                        >
                          Topic {t.id} • {t.week}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                            selectedTopic === idx
                              ? "bg-stone-800 text-orange-300"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {t.badge}
                        </span>
                      </div>
                      <span className="font-bold leading-snug">{t.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* QS TOP 10 ACADEMIC FOUNDATIONS CARD */}
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 shadow-xs">
                <span className="inline-block rounded-full bg-orange-100 text-orange-700 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                  Top 10 QS Universities 2027
                </span>
                <h4 className="text-sm font-bold text-[#18181b]">Academic OS Foundations</h4>
                <p className="text-xs text-stone-500 mt-1 mb-4 leading-relaxed">
                  Synthesizing OS Engineering curricula from MIT, Stanford CS111, Harvard CS1610, Cambridge, Oxford,
                  Caltech, Imperial, ETH Zurich, UCL, and NUS.
                </p>
                <div className="space-y-1.5 text-[11px] font-mono text-stone-600">
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>MIT 6.828</span>
                    <span className="font-bold text-stone-800">Kernels & Virtual Memory</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>Stanford CS111</span>
                    <span className="font-bold text-stone-800">Crash Recovery & Sockets</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>Cambridge 2026</span>
                    <span className="font-bold text-stone-800">Scheduling & Protection</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1">
                    <span>Harvard CS1610</span>
                    <span className="font-bold text-stone-800">Process Trees & Inodes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN TOPIC CONTENT (COL-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs">
                {/* TOPIC HEADER */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e7e3da]">
                  <div>
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      {currentTopic.badge}
                    </span>
                    <h2 className="text-2xl font-black text-[#18181b] mt-1">{currentTopic.title}</h2>
                    <p className="text-xs font-medium text-stone-500 mt-1">{currentTopic.focus}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={selectedTopic === 0}
                      onClick={() => setSelectedTopic((prev) => Math.max(0, prev - 1))}
                      className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <span className="font-mono text-xs font-bold text-stone-400">
                      {selectedTopic + 1} / {topics.length}
                    </span>
                    <button
                      disabled={selectedTopic === topics.length - 1}
                      onClick={() => setSelectedTopic((prev) => Math.min(topics.length - 1, prev + 1))}
                      className="p-2 rounded-xl border border-[#e7e3da] text-stone-600 hover:bg-[#f6f4ee] disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* THEORY DESCRIPTION */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Operating Systems Principles & Administration Rationale
                  </h4>
                  <p className="text-sm leading-relaxed text-stone-700">{currentTopic.theory}</p>
                </div>

                {/* DIAGRAM CONTAINER */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2">
                    Linux Architecture & Kernel Flow Diagram
                  </h4>
                  <pre className="rounded-2xl bg-[#18181b] p-4 text-[11px] font-mono leading-relaxed text-stone-200 overflow-x-auto shadow-inner border border-stone-800">
                    {currentTopic.diagram}
                  </pre>
                </div>

                {/* KEY TAKEAWAYS */}
                <div className="mt-6 rounded-2xl bg-orange-50/60 border border-orange-200/80 p-5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-orange-600" />
                    Essential DevOps Administration Takeaways
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {currentTopic.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold shrink-0">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CODE / IMPLEMENTATION EXAMPLE */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-2">
                    <FileCode size={14} />
                    Verified Terminal Commands & Production Snippets
                  </h4>
                  <pre className="rounded-2xl bg-stone-900 p-4 text-[11px] font-mono leading-relaxed text-emerald-400 overflow-x-auto shadow-inner border border-stone-800">
                    {currentTopic.codeExample}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 2: LAB 1 - INTERACTIVE BASH TERMINAL COMMAND SIMULATOR */}
        {/* =================================================================== */}
        {activeTab === "terminal-lab" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Interactive Engineering Lab 1 • Linux CLI Simulation
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Interactive Ubuntu Server Terminal
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                Execute live diagnostic commands in an interactive Ubuntu 24.04 LTS shell environment. Test disk space,
                inode quotas, process states, listening sockets, memory utilization, and systemd units.
              </p>
            </div>

            {/* QUICK COMMAND PRESETS */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-stone-500 mr-2">Quick Commands:</span>
              {[
                "df -h",
                "df -i",
                "free -h",
                "ss -lntp",
                "systemctl status nginx",
                "uptime",
                "ps aux | head -n 5",
                "ip route",
                "cat /etc/os-release",
              ].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleExecuteCommand(cmd)}
                  className="rounded-xl border border-stone-200 bg-stone-50 px-3 py-1.5 font-mono text-[11px] font-bold text-stone-700 hover:border-orange-400 hover:bg-orange-50/50 transition shadow-2xs"
                >
                  {cmd}
                </button>
              ))}
              <button
                onClick={() => handleExecuteCommand("clear")}
                className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 font-mono text-[11px] font-bold text-rose-700 hover:bg-rose-100 transition ml-auto"
              >
                clear
              </button>
            </div>

            {/* TERMINAL SURFACE */}
            <div className="rounded-3xl border border-stone-800 bg-[#141416] p-5 md:p-7 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4 text-stone-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-bold text-stone-300">devops@ubuntu-devops-node-01: ~</span>
                </div>
                <span>Ubuntu 24.04 LTS (Bash 5.2.21)</span>
              </div>

              {/* TERMINAL OUTPUT STREAM */}
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <span className="text-orange-400">devops@ubuntu-server:~$</span>
                      <span>{item.cmd}</span>
                    </div>
                    <pre className="text-stone-300 whitespace-pre-wrap leading-relaxed pl-4 border-l-2 border-stone-800 font-mono text-[11px]">
                      {item.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* TERMINAL INPUT BAR */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleExecuteCommand();
                }}
                className="mt-5 flex items-center gap-2 border-t border-stone-800 pt-3"
              >
                <span className="text-orange-400 font-bold">devops@ubuntu-server:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type command (e.g. df -h, free -h, ss -lntp, clear)..."
                  className="flex-1 bg-transparent text-emerald-400 focus:outline-hidden font-mono text-xs placeholder:text-stone-600"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#f97316] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#ea580c] transition"
                >
                  Run
                </button>
              </form>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 3: LAB 2 - PERMISSIONS & OCTAL MODE SANDBOX */}
        {/* =================================================================== */}
        {activeTab === "permissions-lab" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Interactive Engineering Lab 2 • Unix DAC & Permissions
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Linux Octal Permissions & Mode Sandbox
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                Toggle Read (4), Write (2), and Execute (1) bits across Owner, Group, and Others. Observe real-time
                symbolic string calculation, numeric octal modes, SUID/SGID/Sticky bits, and real-world DevOps usage.
              </p>
            </div>

            {/* INTERACTIVE BIT TOGGLE MATRIX */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* OWNER */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold uppercase text-stone-700">Owner (User / u)</span>
                  <span className="font-mono text-base font-black text-orange-600">Value: {octalOwner}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { key: "r", label: "Read (r = 4)", val: permOwner.r },
                    { key: "w", label: "Write (w = 2)", val: permOwner.w },
                    { key: "x", label: "Execute / Traverse (x = 1)", val: permOwner.x },
                  ].map((bit) => (
                    <label key={bit.key} className="flex items-center justify-between text-xs cursor-pointer">
                      <span className="font-medium text-stone-700">{bit.label}</span>
                      <input
                        type="checkbox"
                        checked={bit.val}
                        onChange={(e) => setPermOwner((prev) => ({ ...prev, [bit.key]: e.target.checked }))}
                        className="h-4 w-4 rounded accent-orange-500 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* GROUP */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold uppercase text-stone-700">Group (g)</span>
                  <span className="font-mono text-base font-black text-orange-600">Value: {octalGroup}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { key: "r", label: "Read (r = 4)", val: permGroup.r },
                    { key: "w", label: "Write (w = 2)", val: permGroup.w },
                    { key: "x", label: "Execute / Traverse (x = 1)", val: permGroup.x },
                  ].map((bit) => (
                    <label key={bit.key} className="flex items-center justify-between text-xs cursor-pointer">
                      <span className="font-medium text-stone-700">{bit.label}</span>
                      <input
                        type="checkbox"
                        checked={bit.val}
                        onChange={(e) => setPermGroup((prev) => ({ ...prev, [bit.key]: e.target.checked }))}
                        className="h-4 w-4 rounded accent-orange-500 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* OTHERS */}
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <span className="font-mono text-xs font-bold uppercase text-stone-700">Others / World (o)</span>
                  <span className="font-mono text-base font-black text-orange-600">Value: {octalOther}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { key: "r", label: "Read (r = 4)", val: permOther.r },
                    { key: "w", label: "Write (w = 2)", val: permOther.w },
                    { key: "x", label: "Execute / Traverse (x = 1)", val: permOther.x },
                  ].map((bit) => (
                    <label key={bit.key} className="flex items-center justify-between text-xs cursor-pointer">
                      <span className="font-medium text-stone-700">{bit.label}</span>
                      <input
                        type="checkbox"
                        checked={bit.val}
                        onChange={(e) => setPermOther((prev) => ({ ...prev, [bit.key]: e.target.checked }))}
                        className="h-4 w-4 rounded accent-orange-500 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* SPECIAL PERMISSIONS TOGGLES */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-4 mb-8">
              <span className="font-mono text-xs font-bold uppercase text-stone-600 block mb-3">
                Special Permission Bits (Advanced):
              </span>
              <div className="flex flex-wrap items-center gap-6 text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={specialBits.suid}
                    onChange={(e) => setSpecialBits((prev) => ({ ...prev, suid: e.target.checked }))}
                    className="h-4 w-4 rounded accent-orange-500"
                  />
                  <span className="font-medium">SUID (4xxx: Exec as Owner, e.g. /usr/bin/passwd)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={specialBits.sgid}
                    onChange={(e) => setSpecialBits((prev) => ({ ...prev, sgid: e.target.checked }))}
                    className="h-4 w-4 rounded accent-orange-500"
                  />
                  <span className="font-medium">SGID (2xxx: Inherit group in directories)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={specialBits.sticky}
                    onChange={(e) => setSpecialBits((prev) => ({ ...prev, sticky: e.target.checked }))}
                    className="h-4 w-4 rounded accent-orange-500"
                  />
                  <span className="font-medium">Sticky Bit (1xxx: Only owner can delete, e.g. /tmp)</span>
                </label>
              </div>
            </div>

            {/* REAL-TIME CALCULATION & CONTEXT CARD */}
            <div className="rounded-3xl border border-orange-200 bg-orange-50/40 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-orange-200/60">
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-stone-500">Numeric Mode (chmod)</span>
                  <div className="text-3xl md:text-4xl font-black font-mono text-[#18181b] mt-1">
                    chmod {numericCode} target_file
                  </div>
                </div>
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-stone-500">Symbolic String (ls -l)</span>
                  <div className="text-3xl md:text-4xl font-black font-mono text-orange-600 mt-1">
                    {symbolicString}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <span className="font-mono text-xs font-bold uppercase text-orange-800 block mb-1">
                  Production DevOps Analysis & Guidance:
                </span>
                <p className="text-xs md:text-sm text-stone-800 leading-relaxed font-medium">
                  {permissionDevOpsUsage}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 4: LAB 3 - INCIDENT TROUBLESHOOTING GAMEDAY */}
        {/* =================================================================== */}
        {activeTab === "gameday" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                  Interactive Engineering Lab 3 • Production Troubleshooting
                </span>
                <h2 className="text-2xl font-black text-[#18181b] mt-1">
                  Linux SRE Incident Troubleshooting GameDay
                </h2>
                <p className="text-xs md:text-sm text-stone-600 mt-1">
                  Diagnose real-world server failures before executing administrative changes.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2 font-mono text-xs font-bold text-orange-700">
                Score: {gameScore} XP • Incident {gameScenarioIndex + 1} / {gameScenarios.length}
              </div>
            </div>

            {/* INCIDENT CARD */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-8 mb-8">
              <span className="inline-block rounded-full bg-rose-100 text-rose-800 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
                {gameScenarios[gameScenarioIndex].title}
              </span>
              <h3 className="text-base font-bold text-stone-900 mb-2">
                Production Incident Description & Telemetry:
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                {gameScenarios[gameScenarioIndex].symptom}
              </p>
              <h4 className="text-sm font-bold text-orange-950 font-mono uppercase tracking-wide">
                Question: {gameScenarios[gameScenarioIndex].question}
              </h4>
            </div>

            {/* MULTI-CHOICE OPTIONS */}
            <div className="space-y-3 mb-8">
              {gameScenarios[gameScenarioIndex].options.map((option) => (
                <button
                  key={option.id}
                  disabled={selectedGameChoice !== null}
                  onClick={() => handleSelectGameOption(option)}
                  className={`w-full text-left rounded-2xl border p-4 text-xs md:text-sm transition flex items-start gap-3 ${
                    selectedGameChoice === null
                      ? "border-stone-200 bg-white hover:border-orange-400 hover:bg-orange-50/30"
                      : option.isCorrect
                      ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold"
                      : selectedGameChoice === option.id
                      ? "border-rose-500 bg-rose-50 text-rose-950"
                      : "border-stone-200 bg-stone-50 opacity-50"
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border font-mono font-bold text-xs bg-white">
                    {option.id}
                  </span>
                  <span className="mt-0.5">{option.text}</span>
                </button>
              ))}
            </div>

            {/* FEEDBACK & NEXT BUTTON */}
            {gameFeedback && (
              <div
                className={`rounded-2xl border p-5 mb-8 ${
                  gameFeedback.isCorrect
                    ? "border-emerald-300 bg-emerald-50/60 text-emerald-900"
                    : "border-rose-300 bg-rose-50/60 text-rose-900"
                }`}
              >
                <div className="flex items-center gap-2 font-bold mb-1 font-mono text-sm">
                  {gameFeedback.isCorrect ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-600" />
                      <span>Architectural Verdict: Correct Diagnostic Investigation (+100 XP)</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle size={18} className="text-rose-600" />
                      <span>Architectural Verdict: Incorrect Diagnostic Hypothesis</span>
                    </>
                  )}
                </div>
                <p className="text-xs md:text-sm leading-relaxed mt-2">{gameFeedback.rationale}</p>
                <button
                  onClick={handleNextGameScenario}
                  className="mt-4 rounded-xl bg-[#18181b] px-4 py-2 text-xs font-bold text-white hover:bg-stone-800 transition"
                >
                  Proceed to Next Incident Case →
                </button>
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* VIEW 5: MASTERY TEST ACCORDION (12 QUESTIONS) */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 md:p-10 shadow-xs mb-16">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-600">
                Final Assessment • SRE Interview Prep
              </span>
              <h2 className="text-2xl font-black text-[#18181b] mt-1">
                Linux for DevOps Mastery Test
              </h2>
              <p className="text-xs md:text-sm text-stone-600 mt-2 leading-relaxed">
                12 foundational questions derived from MIT, Stanford CS111, Cambridge OS, and production Linux manual
                pages. Click any question to reveal the rigorous architectural explanation.
              </p>
            </div>

            <div className="space-y-3">
              {masteryQuestions.map((mq, idx) => {
                const isOpen = openMasteryIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stone-200 bg-[#faf8f5] overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-orange-600">Q{idx + 1}.</span>
                        <span>{mq.q}</span>
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white">
                        <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                          Authoritative Operating Systems Answer:
                        </span>
                        {mq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              DevOps & SRE Track • Module 1 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Linux System Administration Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              From the Filesystem Hierarchy Standard, Inode vs Block Storage, and Kernel Process Scheduling to Octal
              Permissions, 6-Layer Network Diagnostics, systemd Units, journalctl Timelines, and Defensive Bash
              Automation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/git")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition flex items-center gap-1.5"
            >
              <span>Next: Module 2 — Git & Workflow</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
