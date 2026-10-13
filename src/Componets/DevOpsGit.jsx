import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Terminal,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Tag,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Play,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lock,
  Layers,
  Activity,
  History,
  Boxes,
  BookOpen,
  Check,
  Eye,
  Flame,
  Search,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsGit() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'dag-lab' | 'conflict-lab' | 'pr-review' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: INTERACTIVE GIT DAG & HISTORY VISUALIZER
  // =========================================================================
  const initialCommits = [
    { id: "c1", hash: "a1b2c3d", message: "docs: add project README", branch: "main", parent: null },
    { id: "c2", hash: "4e5f6a7", message: "chore: ignore local and generated files", branch: "main", parent: "c1" },
    { id: "c3", hash: "8b9c0d1", message: "feat: add memory telemetry check", branch: "main", parent: "c2" },
  ];

  const [dagCommits, setDagCommits] = useState(initialCommits);
  const [activeBranch, setActiveBranch] = useState("main");
  const [branches, setBranches] = useState(["main", "feature/disk-check"]);
  const [tags, setTags] = useState([{ name: "v1.0.0", commitId: "c3" }]);
  const [dagLog, setDagLog] = useState([
    "Initialized git repository on main",
    "Committed c1: docs: add project README",
    "Committed c2: chore: ignore local and generated files",
    "Committed c3: feat: add memory telemetry check",
    "Tagged c3 as v1.0.0 (Release v1.0.0)",
  ]);

  const handleDagCommit = (customMsg) => {
    const newId = `c${dagCommits.length + 1}`;
    const randomHex = Math.random().toString(16).substring(2, 9);
    const parentCommit = dagCommits.filter((c) => c.branch === activeBranch).slice(-1)[0] || dagCommits.slice(-1)[0];
    const msg = customMsg || (activeBranch === "main" ? `feat: update system diagnostics [${newId}]` : `feat(disk): add configurable threshold [${newId}]`);

    const newCommit = {
      id: newId,
      hash: randomHex,
      message: msg,
      branch: activeBranch,
      parent: parentCommit ? parentCommit.id : null,
    };

    setDagCommits([...dagCommits, newCommit]);
    setDagLog((prev) => [`[${activeBranch}] commit ${randomHex} - "${msg}"`, ...prev.slice(0, 9)]);
  };

  const handleCreateBranch = (branchName) => {
    if (!branches.includes(branchName)) {
      setBranches([...branches, branchName]);
      setActiveBranch(branchName);
      setDagLog((prev) => [`Switched to new branch '${branchName}' (HEAD -> ${branchName})`, ...prev.slice(0, 9)]);
    }
  };

  const handleSwitchBranch = (branchName) => {
    setActiveBranch(branchName);
    setDagLog((prev) => [`Switched to branch '${branchName}'`, ...prev.slice(0, 9)]);
  };

  const handleMergeFeature = () => {
    if (activeBranch !== "main") {
      setDagLog((prev) => ["Error: Must be on main branch to merge a feature branch.", ...prev.slice(0, 9)]);
      return;
    }
    const featureCommits = dagCommits.filter((c) => c.branch !== "main");
    if (featureCommits.length === 0) {
      setDagLog((prev) => ["No unmerged feature commits found.", ...prev.slice(0, 9)]);
      return;
    }

    const newId = `c${dagCommits.length + 1}`;
    const randomHex = Math.random().toString(16).substring(2, 9);
    const mergeCommit = {
      id: newId,
      hash: randomHex,
      message: `Merge branch 'feature/disk-check' into main`,
      branch: "main",
      parent: "c3", // multi-parent in DAG representation
      isMerge: true,
    };

    setDagCommits([...dagCommits, mergeCommit]);
    setDagLog((prev) => [
      `Integrated feature branch via 3-way merge commit ${randomHex}. main is now at ${randomHex}`,
      ...prev.slice(0, 9),
    ]);
  };

  const handleRebase = () => {
    if (activeBranch === "main") {
      setDagLog((prev) => ["Error: Cannot rebase main onto feature branch. Switch to feature branch first.", ...prev.slice(0, 9)]);
      return;
    }
    setDagLog((prev) => [
      `Replaying commits of '${activeBranch}' onto tip of 'main'... (Commit SHAs recalculated)`,
      `Linear history preserved. No merge commit created.`,
      ...prev.slice(0, 9),
    ]);
  };

  const handleAddTag = (tagName) => {
    const currentTip = dagCommits.filter((c) => c.branch === activeBranch).slice(-1)[0] || dagCommits.slice(-1)[0];
    if (currentTip) {
      setTags([...tags.filter((t) => t.name !== tagName), { name: tagName, commitId: currentTip.id }]);
      setDagLog((prev) => [`Created annotated tag '${tagName}' pointing to ${currentTip.hash}`, ...prev.slice(0, 9)]);
    }
  };

  const handleResetDag = () => {
    setDagCommits(initialCommits);
    setActiveBranch("main");
    setBranches(["main", "feature/disk-check"]);
    setTags([{ name: "v1.0.0", commitId: "c3" }]);
    setDagLog(["Reset DAG visualizer to initial state"]);
  };

  // =========================================================================
  // SIMULATOR 2: INTERACTIVE MERGE CONFLICT RESOLUTION SANDBOX
  // =========================================================================
  const rawConflictCode = `#!/usr/bin/env bash
# linux-admin.sh - System Health Check

check_disk() {
<<<<<<< HEAD
    # Production main branch: Hardcoded 80% warning threshold
    local THRESHOLD=80
    echo "Evaluating disk root filesystem against default threshold of 80%..."
=======
    # feature/configurable-threshold branch: Environment override
    local THRESHOLD="\${DISK_ALERT_THRESHOLD:-85}"
    echo "Evaluating disk root filesystem against dynamic threshold of \${THRESHOLD}%..."
>>>>>>> feature/configurable-threshold
    local USAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
    if [ "$USAGE" -ge "$THRESHOLD" ]; then
        echo "[CRITICAL] Disk usage is at \${USAGE}% (Exceeds \${THRESHOLD}%)"
        return 1
    fi
    echo "[OK] Disk usage is at \${USAGE}%"
    return 0
}`;

  const [conflictEditorContent, setConflictEditorContent] = useState(rawConflictCode);
  const [conflictStatus, setConflictStatus] = useState("unresolved"); // 'unresolved' | 'resolved' | 'aborted'
  const [conflictFeedback, setConflictFeedback] = useState(null);

  const handleAcceptHead = () => {
    const resolved = `#!/usr/bin/env bash
# linux-admin.sh - System Health Check

check_disk() {
    # Production main branch: Hardcoded 80% warning threshold
    local THRESHOLD=80
    echo "Evaluating disk root filesystem against default threshold of 80%..."
    local USAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
    if [ "$USAGE" -ge "$THRESHOLD" ]; then
        echo "[CRITICAL] Disk usage is at \${USAGE}% (Exceeds \${THRESHOLD}%)"
        return 1
    fi
    echo "[OK] Disk usage is at \${USAGE}%"
    return 0
}`;
    setConflictEditorContent(resolved);
  };

  const handleAcceptIncoming = () => {
    const resolved = `#!/usr/bin/env bash
# linux-admin.sh - System Health Check

check_disk() {
    # feature/configurable-threshold branch: Environment override
    local THRESHOLD="\${DISK_ALERT_THRESHOLD:-85}"
    echo "Evaluating disk root filesystem against dynamic threshold of \${THRESHOLD}%..."
    local USAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
    if [ "$USAGE" -ge "$THRESHOLD" ]; then
        echo "[CRITICAL] Disk usage is at \${USAGE}% (Exceeds \${THRESHOLD}%)"
        return 1
    fi
    echo "[OK] Disk usage is at \${USAGE}%"
    return 0
}`;
    setConflictEditorContent(resolved);
  };

  const handleAcceptCombined = () => {
    const resolved = `#!/usr/bin/env bash
# linux-admin.sh - System Health Check

check_disk() {
    # SRE Best Practice: Configurable threshold with safe 80% default fallback
    local THRESHOLD="\${DISK_ALERT_THRESHOLD:-80}"
    echo "Evaluating disk root filesystem against threshold of \${THRESHOLD}%..."
    local USAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
    if [ "$USAGE" -ge "$THRESHOLD" ]; then
        echo "[CRITICAL] Disk usage is at \${USAGE}% (Exceeds \${THRESHOLD}%)"
        return 1
    fi
    echo "[OK] Disk usage is at \${USAGE}%"
    return 0
}`;
    setConflictEditorContent(resolved);
  };

  const handleVerifyConflictResolution = () => {
    if (
      conflictEditorContent.includes("<<<<<<<") ||
      conflictEditorContent.includes("=======") ||
      conflictEditorContent.includes(">>>>>>>")
    ) {
      setConflictFeedback({
        type: "error",
        msg: "Git syntax check failed! Unresolved conflict markers (<<<<<<<, =======, >>>>>>>) still exist in the file. Delete all conflict markers before staging.",
      });
      return;
    }

    setConflictStatus("resolved");
    setConflictFeedback({
      type: "success",
      msg: "Conflict cleanly resolved! All markers stripped. Ready to execute: git add linux-admin.sh && git commit (or git merge --continue). Tests pass cleanly.",
    });
  };

  const handleAbortMerge = () => {
    setConflictEditorContent(rawConflictCode);
    setConflictStatus("aborted");
    setConflictFeedback({
      type: "warning",
      msg: "Merge cleanly aborted via 'git merge --abort'. Working tree restored to pre-merge commit state.",
    });
  };

  // =========================================================================
  // SIMULATOR 3: CODE REVIEW & PRODUCTION RISK TRIAGE GAMEDAY
  // =========================================================================
  const prScenarios = [
    {
      id: "pr-1",
      prTitle: "PR #14: Add automated remediation loop for dead services",
      author: "alex-dev (Junior DevOps Engineer)",
      targetBranch: "main",
      sourceBranch: "feature/auto-heal-services",
      diffSnippet: `+ # Auto-restart loop
+ while true; do
+   if ! systemctl is-active --quiet nginx; then
+     echo "[ALERT] Nginx is down! Restarting immediately..."
+     systemctl restart nginx
+   fi
+   sleep 1
+ done`,
      riskSummary: "Bash infinite loop restarting a failing service every 1 second without backoff or limits.",
      question: "As an SRE Senior Reviewer following Google Engineering practices, what is your review decision?",
      options: [
        {
          id: "opt-a",
          label: "Approve and Merge: It keeps Nginx running at all times automatically.",
          correct: false,
          explanation: "Dangerous in production! If Nginx is crashing due to a bad config or port conflict, restarting it every second creates a CPU storm, masks the crash loop, and prevents maintenance downtime."
        },
        {
          id: "opt-b",
          label: "Request Changes: Keep script read-only by default, rely on systemd Restart=always with RestartSec=5s, or add rate-limiting/circuit breakers.",
          correct: true,
          explanation: "Correct! SRE review doctrine requires read-only defaults. Process supervision belongs in systemd unit files with exponential backoff, not ad-hoc unconstrained while-loops in bash scripts."
        },
        {
          id: "opt-c",
          label: "Approve with Nit: Ask to change sleep 1 to sleep 2.",
          correct: false,
          explanation: "Insufficient. A 2-second sleep does not fix the architectural flaw of bypassing systemd supervision."
        }
      ]
    },
    {
      id: "pr-2",
      prTitle: "PR #15: Add cloud backup upload script",
      author: "sam-cloud (Cloud Engineer)",
      targetBranch: "main",
      sourceBranch: "feature/s3-backup",
      diffSnippet: `Commit 1: "feat: add s3 backup script"
+ export AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
+ export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
+ aws s3 sync /var/backups s3://corp-ops-backups/

Commit 2: "chore: remove secrets and add to .gitignore"
- export AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
- export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
+ # Read from environment variables
+ aws s3 sync /var/backups s3://corp-ops-backups/`,
      riskSummary: "AWS credentials were committed to repository history in Commit 1, then deleted in Commit 2.",
      question: "The author claims .gitignore now excludes .env and the secret is deleted. How should you respond?",
      options: [
        {
          id: "opt-a",
          label: "Approve: The secret is deleted from the latest commit so it is no longer visible in the working tree.",
          correct: false,
          explanation: "Catastrophic misconception! Git preserves full immutable snapshot history. Anyone cloning the repo or inspecting 'git log -p' or commit 1 can read the cleartext AWS Secret Key."
        },
        {
          id: "opt-b",
          label: "Block PR & Trigger Security Incident: Immediately revoke/rotate the AWS IAM key, inspect AWS CloudTrail for unauthorized usage, and scrub git history via git-filter-repo.",
          correct: true,
          explanation: "Authoritative security doctrine: A secret once committed to git must be assumed compromised. Deleting it in a later commit is completely ineffective. Immediate revocation & rotation is mandatory."
        },
        {
          id: "opt-c",
          label: "Ask author to rebase and squash both commits into one.",
          correct: false,
          explanation: "While squashing cleans local history, if this branch was pushed to GitHub remote, the commit may already be cached, indexed, or cloned. Key revocation is always step #1."
        }
      ]
    },
    {
      id: "pr-3",
      prTitle: "PR #16: Modernize CLI flags for Linux administration toolkit",
      author: "jordan-dev (Tools Engineer)",
      targetBranch: "main",
      sourceBranch: "refactor/cli-flags",
      diffSnippet: `- ./linux-admin.sh --check-disk --threshold 80
+ ./linux-admin.sh -d -t 80
- # Note: Long flags --check-disk and --threshold have been deleted.`,
      riskSummary: "Existing CLI flags were deleted and replaced with short options without backward compatibility.",
      question: "According to Semantic Versioning 2.0.0, what release tag must this change require if merged?",
      options: [
        {
          id: "opt-a",
          label: "Increment PATCH (e.g., v1.0.1) because it is a simple syntax cleanup.",
          correct: false,
          explanation: "PATCH is strictly reserved for backward-compatible bug fixes that do not modify the public API."
        },
        {
          id: "opt-b",
          label: "Increment MINOR (e.g., v1.1.0) because new flags were added.",
          correct: false,
          explanation: "MINOR requires backward compatibility. If existing automated cron jobs calling '--check-disk' break, it is not backward compatible."
        },
        {
          id: "opt-c",
          label: "Increment MAJOR (e.g., v2.0.0) because removing documented flags breaks existing automation and consumers of the public CLI API.",
          correct: true,
          explanation: "Exact SemVer requirement: Removing or renaming documented public interfaces/flags is a breaking change requiring a MAJOR version increment (or maintaining deprecated alias flags)."
        }
      ]
    },
    {
      id: "pr-4",
      prTitle: "PR #17: Force-pushed rebase on shared staging branch",
      author: "pat-ops (Infra Engineer)",
      targetBranch: "staging",
      sourceBranch: "staging",
      diffSnippet: `[remote rejected] staging -> staging (non-fast-forward)
$ git push --force origin staging
-> Forced update successful. Replaced 14 commits with rebased SHAs.`,
      riskSummary: "Force-pushing a rebased branch to a shared environment where 5 other engineers are actively collaborating.",
      question: "Why does the SRE engineering doctrine strictly prohibit git push --force on shared branches?",
      options: [
        {
          id: "opt-a",
          label: "It breaks Git servers permanently and requires reinstalling git on GitHub.",
          correct: false,
          explanation: "GitHub handles force-pushes natively, but downstream developers' local repositories will suffer divergent history conflicts."
        },
        {
          id: "opt-b",
          label: "Rebasing recalculates commit hashes; force-pushing overwrites the remote graph, causing colleagues' local branches to diverge and risking silent code loss.",
          correct: true,
          explanation: "Correct! Rewriting published history forces collaborators to reconcile divergent DAG histories. Work based on overwritten commits can be silently lost during careless merges."
        },
        {
          id: "opt-c",
          label: "Force-pushing converts all text files to binary blobs.",
          correct: false,
          explanation: "Force-push only moves remote reference pointers; it does not change file serialization."
        }
      ]
    }
  ];

  const [selectedPrIndex, setSelectedPrIndex] = useState(0);
  const [prDecisions, setPrDecisions] = useState({});

  const handlePrDecision = (prId, optionId) => {
    setPrDecisions((prev) => ({ ...prev, [prId]: optionId }));
  };

  // =========================================================================
  // TOPIC CURRICULUM DATA (10 COMPREHENSIVE TOPICS)
  // =========================================================================
  const topics = useMemo(
    () => [
      {
        id: "concept-graph",
        number: "01",
        title: "Understand Git Before Memorizing Commands",
        badge: "Mental Model & DAG",
        summary:
          "Why ad-hoc scripts like 'script-final-v2.sh' fail. Git is a Directed Acyclic Graph (DAG) of immutable snapshots, not differential patch files. The 4 primary areas: Working Tree, Index (Staging), Local Repository, and Remote Repository.",
        details: [
          {
            heading: "The Anti-Pattern of Manual Versioning",
            body: "Without version control, engineers fall into the trap of 'script-final.sh', 'script-final-new.sh', 'script-final-working.sh'. In production, this makes it impossible to answer: Which version worked last Tuesday? Who modified the disk health check? Why was an authorization check removed? Can we instantly roll back a broken deploy? Git answers these by recording immutable, cryptographically hashed snapshots linked in a causal graph.",
          },
          {
            heading: "Git History is a Directed Acyclic Graph (DAG)",
            body: "Unlike older VCS tools (CVS/SVN) that stored file diffs (deltas), Git stores a sequence of snapshots. Each commit contains metadata (author, timestamp, commit message) and a cryptographic tree pointer representing the exact directory state. Crucially, each commit points backward to its parent commit(s). Branches in Git are not heavy copies of your project; a branch is merely a lightweight, 41-byte movable pointer referencing a commit SHA.",
          },
          {
            heading: "The Four Areas of Everyday Git",
            body: "Every command navigates across 4 distinct zones:\n1. Working Directory: The actual sandbox files on your filesystem currently being edited.\n2. Staging Area (Index): The binary cache (`.git/index`) representing the exact snapshot prepared for the next commit.\n3. Local Repository: The permanent local history of committed snapshots stored in `.git/objects`.\n4. Remote Repository: The shared remote repository hosted on GitHub/GitLab used for team synchronization.",
          },
          {
            heading: "Git vs. GitHub: Foundational Separation",
            body: "Git is a local-first distributed version control system developed by Linus Torvalds in 2005. It functions entirely offline on your workstation. GitHub is a hosted cloud platform that wraps Git repositories with collaborative engineering tools: Pull Requests, code review discussions, issue trackers, CI/CD Actions, and enterprise access permissions.",
          },
        ],
        codeSnippet: `# Visualizing the 4 zones of Git
# 1. Inspect working tree vs index (staging)
git status

# 2. Add specific files to index (prepare snapshot)
git add linux-admin.sh

# 3. Commit staged snapshot to local repository
git commit -m "feat(diagnostics): add inode exhaustion check"

# 4. Push local commits to remote GitHub repository
git push origin main`,
      },
      {
        id: "config-identity",
        number: "02",
        title: "Install, Configure & Secure Identity",
        badge: "Configuration & Hygiene",
        summary:
          "Global vs repository configuration. Author identity vs committer identity. Inspecting configuration origins. Eliminating hardcoded secrets from git configuration files.",
        details: [
          {
            heading: "Package Installation Across Linux Distributions",
            body: "On modern Debian/Ubuntu servers:\n`sudo apt update && sudo apt install git -y`\nOn RHEL/CentOS/Rocky Linux:\n`sudo dnf install git -y`\nVerify installation using `git --version` (Git 2.34+ recommended for modern `switch`/`restore` primitives).",
          },
          {
            heading: "Configuring Commit Identity",
            body: "Git commits embed author and committer names and email addresses. Configure these globally for your user environment:\n`git config --global user.name \"Jane Doe\"`\n`git config --global user.email \"jane.doe@company.internal\"`\nGitHub also provides a privacy no-reply email (e.g., `ID+username@users.noreply.github.com`) to prevent public scraping of corporate emails.",
          },
          {
            heading: "Configuration Hierarchy & Inspection",
            body: "Git evaluates configuration in three cascading tiers:\n1. System level (`/etc/gitconfig`): Applies to all OS users.\n2. Global level (`~/.gitconfig`): Applies to your current OS user account.\n3. Local level (`.git/config`): Repository-specific overrides.\nInspect all active keys and their file origins with:\n`git config --list --show-origin`",
          },
          {
            heading: "Security Rule: No Credentials in Configuration",
            body: "Never store plaintext passwords, personal access tokens (PATs), or private keys in Git configuration files. Use SSH keys registered with `ssh-agent`, or modern Git Credential Managers that store authentication tokens in secure OS keyrings (libsecret on Linux, Keychain on macOS, Credential Manager on Windows).",
          },
        ],
        codeSnippet: `# Verify Git version
git --version

# Set global identity
git config --global user.name "SRE Engineer"
git config --global user.email "sre@infrastructure.io"

# Set default primary branch to 'main'
git config --global init.defaultBranch main

# Inspect all configurations and origins
git config --list --show-origin`,
      },
      {
        id: "init-commits",
        number: "03",
        title: "Repository Initialization, Commits & .gitignore",
        badge: "Commits & Conventional Specs",
        summary:
          "Initializing projects with 'git init -b main'. Atomic commits and Conventional Commits format. The critical purpose of .gitignore and why it cannot remediate committed secrets.",
        details: [
          {
            heading: "Project Initialization",
            body: "Initialize your DevOps infrastructure repository with modern default branch naming:\n`mkdir linux-admin-toolkit && cd linux-admin-toolkit`\n`git init -b main`\nThis creates the hidden `.git` directory containing object databases, refs, and the index.",
          },
          {
            heading: "Atomic, Coherent Commits",
            body: "A commit should be atomic: a single, logically coherent unit of work that leaves the system in a compiling, testable state. Avoid the anti-pattern of 'giant Friday commit' containing 50 unrelated edits across documentation, backend logic, and config files. When changes are atomic, bugs can be easily isolated with `git bisect` and cleanly rolled back with `git revert`.",
          },
          {
            heading: "The Conventional Commits Standard",
            body: "Adopt semantic commit prefixes to enable automated changelogs and clear history:\n- `feat:` Introduces new functionality.\n- `fix:` Patches a bug or operational defect.\n- `docs:` Modifies documentation or runbooks.\n- `test:` Adds or modifies unit/integration test suites.\n- `refactor:` Code restructuring without functional behavior changes.\n- `chore:` Maintenance tasks, dependency updates, tooling.",
          },
          {
            heading: "Staging Inspection Workflow",
            body: "Never blind commit (`git commit -a`). Always execute the two-phase diff inspection:\n1. `git diff`: Shows changes in the working tree not yet staged.\n2. `git diff --staged`: Shows the exact diff that will be committed to the repository.\nThis inspection catches debugging print statements, temporary files, and accidental secrets before they reach the repository.",
          },
          {
            heading: ".gitignore Hygiene & The Secret Committal Danger",
            body: "A `.gitignore` file specifies intentionally untracked patterns (e.g., `.env`, `*.log`, `__pycache__/`, `.venv/`).\nCRITICAL WARNING: `.gitignore` only prevents untracked files from being added. If a developer accidentally commits a secret (like an AWS secret or database password) and then adds `.env` to `.gitignore` in a subsequent commit, the secret REMAINS PERMANENTLY ACCESSIBLE in repository history!",
          },
        ],
        codeSnippet: `# Initialize repo with main branch
git init -b main

# Inspect staging area
git status
git diff          # unstaged changes
git diff --staged # staged changes ready to commit

# Commit with Conventional Commit message
git commit -m "feat(storage): implement inode exhaustion threshold warning"

# View oneline decorated graph history
git log --oneline --graph --decorate --all`,
      },
      {
        id: "branches-flow",
        number: "04",
        title: "Branches & Collaborative Development",
        badge: "Pointers & GitHub Flow",
        summary:
          "Branches as lightweight 41-byte pointers. Modern 'git switch -c' vs legacy checkout. Branch naming conventions. Implementing GitHub Flow in SRE teams.",
        details: [
          {
            heading: "How Git Branches Actually Work",
            body: "In Git, a branch is not a directory copy or heavy container. It is literally a 41-byte text file inside `.git/refs/heads/<branch-name>` containing the 40-character SHA hash of the commit it points to. Because creating a branch merely writes a 41-byte text file, branching is instantaneous and virtually free in storage overhead.",
          },
          {
            heading: "Modern Branch Switching: git switch",
            body: "Historically, `git checkout` was overloaded with two unrelated duties: switching branches and discarding working file modifications. Git 2.23+ introduced dedicated commands:\n- `git switch -c feature/resource-report`: Creates and switches to a new branch.\n- `git switch main`: Returns to the main branch.\n- `git restore <file>`: Discards unstaged file edits safely.",
          },
          {
            heading: "SRE Branch Naming Conventions",
            body: "Establish consistent, hierarchical branch names across the team:\n- `feature/disk-health-json`: New telemetry capabilities.\n- `fix/nginx-socket-leak`: Defect remediation.\n- `ops/rotate-tls-certs`: Infrastructure maintenance.\n- `docs/troubleshooting-runbook`: SRE incident documentation.",
          },
          {
            heading: "GitHub Flow Collaboration Model",
            body: "GitHub Flow is a lightweight, battle-tested branching model:\n1. Anything in the `main` branch is production-ready and deployable.\n2. To work on something new, create a descriptive branch off `main`.\n3. Commit small, logical changes locally and regularly push to the remote.\n4. Open a Pull Request targeting `main` to solicit review and run automated tests.\n5. Once approved and CI checks pass, merge into `main` and deploy immediately.",
          },
        ],
        codeSnippet: `# Create and switch to a feature branch
git switch -c feature/systemd-service-check

# Make edits and commit to the branch
git add linux-admin.sh
git commit -m "feat(services): verify systemd unit active states"

# View local and remote tracking branches
git branch -avv

# Switch back to primary branch
git switch main`,
      },
      {
        id: "merge-vs-rebase",
        number: "05",
        title: "Merge vs. Rebase: Architectural Trade-offs",
        badge: "History Topology & Safety",
        summary:
          "3-way merges vs linear rebasing. When to use each. The Golden Rule of Rebasing: Never rebase or force-push a public/shared branch.",
        details: [
          {
            heading: "The Merge Strategy: Context-Preserving Integration",
            body: "When you run `git merge feature/diagnostics` on `main`, Git performs a 3-way merge using the two branch tips and their common ancestor. If histories have diverged, Git generates a merge commit with two parent commits. Advantage: completely preserves historical context and exact timestamps without rewriting history. Disadvantage: can create tangled 'railroad track' graph histories in high-frequency teams.",
          },
          {
            heading: "The Rebase Strategy: Linear Replaying",
            body: "Rebase replays your branch commits on top of the target branch (`origin/main`). Git sequentially extracts the diff of each commit on your branch and applies it as a brand-new commit (with a brand-new commit SHA) on the tip of the upstream branch. Advantage: produces a clean, perfectly linear commit history. Disadvantage: rewrites commit timestamps and hashes.",
          },
          {
            heading: "The SRE Golden Rule of Rebasing",
            body: "CRITICAL SAFETY DOCTRINE: Never rebase commits that have been pushed to a public or shared remote repository! Rebasing rewrites commit IDs ($C_1 \\rightarrow C_1'$). If other team members branched off your original commit, their histories diverge catastrophically, forcing painful manual reconciliations.",
          },
          {
            heading: "The Danger of git push --force",
            body: "Routine use of `git push --force` (`-f`) is an operational hazard that can overwrite colleagues' work. If a private feature branch history rewrite must be published, always use `git push --force-with-lease`. This flags and rejects the push if someone else pushed commits to the remote branch since your last fetch.",
          },
        ],
        codeSnippet: `# Method 1: Merging (Preserves history & merge commit)
git switch main
git merge feature/resource-report

# Method 2: Rebasing (Creates linear history on private branch)
git switch feature/resource-report
git fetch origin
git rebase origin/main

# Safe force-push for private rebased feature branches
git push --force-with-lease origin feature/resource-report`,
      },
      {
        id: "merge-conflicts",
        number: "06",
        title: "Merge Conflicts: Mechanics & Resolution",
        badge: "Conflict Markers & Triage",
        summary:
          "Why conflicts happen. Deconstructing conflict markers (HEAD vs incoming). Systematic resolution workflow and safe rollback via 'git merge --abort'.",
        details: [
          {
            heading: "Anatomy of a Merge Conflict",
            body: "A conflict occurs when Git cannot deterministically reconcile changes because two branches modified the exact same lines of a file since their common ancestor, or one branch deleted a file that the other modified. Git pauses execution, enters a merging state, and inserts visual conflict markers directly into the affected files.",
          },
          {
            heading: "Deconstructing Conflict Markers",
            body: "A conflict block consists of three sections:\n`<<<<<<< HEAD`: Marks the start of changes on your current branch (e.g., `main`).\n`=======`: The middle delimiter separating competing modifications.\n`>>>>>>> branch-name`: The incoming changes from the branch being integrated.\nThese markers are not valid code syntax and must be completely removed during resolution.",
          },
          {
            heading: "Systematic 4-Step Resolution Workflow",
            body: "1. Identify: Run `git status` to locate files listed under 'Unmerged paths'.\n2. Reconcile: Open each file, analyze the intent of both changes, edit the code into the intended unified state, and delete all `<<<<<<<`, `=======`, and `>>>>>>>` markers.\n3. Validate: Run unit tests, linters, or syntax validators to ensure the merged file functions properly.\n4. Finalize: Run `git add <file>` to mark resolved, then execute `git merge --continue` (or `git commit`) to finalize the merge.",
          },
          {
            heading: "The Escape Hatch: git merge --abort",
            body: "If a conflict is too complex or was started by mistake, never attempt manual guesswork. Run `git merge --abort`. This cleanly rolls back your working tree and index to the exact state before the merge was initiated.",
          },
        ],
        codeSnippet: `# 1. Check which files are in conflict
git status

# 2. After editing and removing conflict markers:
git add linux-admin.sh

# 3. Complete the merge
git merge --continue

# Emergency Escape Hatch: Cancel merge and restore previous state
git merge --abort`,
      },
      {
        id: "remotes-prs",
        number: "07",
        title: "GitHub Remotes & The Pull Request Lifecycle",
        badge: "Upstreams & PR Architecture",
        summary:
          "Connecting remotes with 'git remote add origin'. Upstream tracking flags (-u). The 8-stage PR lifecycle and enterprise branch protection rules.",
        details: [
          {
            heading: "Connecting Local Repositories to Remotes",
            body: "A remote is a reference to a hosted repository on GitHub. Connect an existing local repository:\n`git remote add origin https://github.com/organization/linux-admin-toolkit.git`\nVerify configured remote URLs:\n`git remote -v`\nThe `-u` (or `--set-upstream`) flag during `git push -u origin main` binds your local `main` branch to the remote `origin/main` tracking branch, allowing subsequent simple `git push` and `git pull` commands.",
          },
          {
            heading: "The 8-Stage Pull Request Lifecycle",
            body: "A Pull Request (PR) is a formal mechanism to propose, discuss, review, and test changes before merging:\n1. Create focused feature branch from latest `main`.\n2. Commit atomic, well-tested changes.\n3. Push branch to remote.\n4. Open Pull Request on GitHub with a comprehensive description.\n5. Automated CI pipelines execute (linters, unit tests, security scans).\n6. Team peer review and discussions.\n7. Address review feedback with iterative commits.\n8. Merge approved PR into `main` and delete the feature branch.",
          },
          {
            heading: "Structuring an Elite PR Description",
            body: "A professional PR description answers 4 questions for the reviewer:\n- Context/Problem: Why is this change necessary? (Link Jira/GitHub issue).\n- Proposed Solution: How does this change solve the issue?\n- Validation & Testing: What tests, commands, or edge cases were verified?\n- Operational Impact: Does this require downtime, migration, or permission changes?",
          },
          {
            heading: "Enterprise Branch Protection Rules",
            body: "To maintain production stability, GitHub repositories should enforce branch protection on `main`:\n- Require pull request reviews before merging (e.g., minimum 1 senior SRE approval).\n- Require status checks to pass before merging (CI test matrix, ShellCheck, security scanner).\n- Require conversation resolution before merging.\n- Prohibit force pushes and branch deletions on `main`.",
          },
        ],
        codeSnippet: `# Add GitHub remote
git remote add origin https://github.com/corp/linux-admin-toolkit.git
git remote -v

# Push branch and set upstream tracking
git push -u origin feature/service-diagnostics

# Fetch remote updates without auto-merging
git fetch origin

# Fast-forward pull with rebase
git pull --rebase origin main`,
      },
      {
        id: "code-review",
        number: "08",
        title: "Google-Grade Code Review Doctrine for SREs",
        badge: "Google Eng Practices",
        summary:
          "Code review as a quality and knowledge-sharing engine. Google's 8 review dimensions. Operational reviews for bash & infrastructure automation. High-empathy actionable comments.",
        details: [
          {
            heading: "The Purpose of Code Review",
            body: "Following Google Engineering Practices (`eng-practices`), code review is not an adversarial gatekeeping exercise or a race to find minor formatting flaws. Its purpose is to maintain and improve code health, ensure architectural alignment, prevent operational defects, and mentor team members.",
          },
          {
            heading: "The SRE Review Dimension Matrix",
            body: "A production infrastructure reviewer evaluates changes across 8 critical dimensions:\n1. Correctness: Does the code actually perform what it claims without edge-case regressions?\n2. Design: Does it fit into the broader system architecture cleanly?\n3. Complexity: Is the code unnecessarily complicated? Can it be simplified?\n4. Readability: Will an on-call engineer at 3:00 AM understand this script during an outage?\n5. Security: Does it expose credentials, rely on untrusted input, or require excessive `sudo` privileges?\n6. Operations: Does it log meaningful error messages with timestamps, or fail silently?\n7. Testing: Are failure scenarios and non-zero exit codes tested?\n8. Backward Compatibility: Will this break existing cron jobs, APIs, or downstream scripts?",
          },
          {
            heading: "Constructive vs Destructive Review Comments",
            body: "Weak/Unhelpful: 'This is bad. Rewrite it.'\nConstructive/Actionable: 'This while-loop restarts Nginx every second without a backoff timer. If Nginx crashes due to a corrupt configuration, this will flood the journal logs and max CPU. Could we use systemd's built-in Restart=always directive with a RestartSec=5s delay instead?'",
          },
          {
            heading: "Distinguishing Blockers from Nits",
            body: "Reviewers must explicitly categorize comments:\n- Blocker: Correctness, security vulnerability, or production failure risk (must be resolved before merge).\n- `nit:` (Optional suggestion): Stylistic or minor preference that does not block merging.",
          },
        ],
        codeSnippet: `# Example SRE review comment template:
# [Category]: Blocker | Security | Operations | Nit
# [Observation]: What specific line or pattern introduces risk
# [Impact]: How this manifests under production failure conditions
# [Recommendation]: Specific code replacement or architectural alternative`,
      },
      {
        id: "tags-semver",
        number: "09",
        title: "Tags, Releases & Semantic Versioning (SemVer)",
        badge: "SemVer 2.0.0 & Immutability",
        summary:
          "Annotated tags vs lightweight tags. GitHub Releases vs Git Tags. Semantic Versioning rules: MAJOR.MINOR.PATCH. The immutability of released versions.",
        details: [
          {
            heading: "Lightweight vs. Annotated Tags",
            body: "A lightweight tag is just a pointer to a commit (like a branch that doesn't move).\nAn annotated tag is stored as a full object in the Git database. It contains tagger name, email, date, GPG signature, and a release message. Releases should ALWAYS use annotated tags:\n`git tag -a v1.0.0 -m \"Release v1.0.0: Initial production release\"`\nPush specific tags using `git push origin v1.0.0`.",
          },
          {
            heading: "Semantic Versioning (SemVer 2.0.0) Specification",
            body: "Software versions follow the format: `MAJOR.MINOR.PATCH` (e.g., `2.4.1`):\n1. MAJOR (X.0.0): Incremented when incompatible API or CLI breaking changes are introduced.\n2. MINOR (1.X.0): Incremented when functionality is added in a backward-compatible manner.\n3. PATCH (1.0.X): Incremented when backward-compatible bug fixes or security patches are made.",
          },
          {
            heading: "Applied SemVer in Infrastructure Automation",
            body: "For our `linux-admin.sh` toolkit:\n- Bug fix: Fixing an awk column parsing bug without altering command syntax $\\rightarrow$ `1.0.1` (PATCH).\n- New Feature: Adding `--json` output flag while keeping text output default $\\rightarrow$ `1.1.0` (MINOR).\n- Breaking Change: Renaming `--check-disk` to `-d` and removing the long flag $\\rightarrow$ `2.0.0` (MAJOR).",
          },
          {
            heading: "The Release Immutability Rule",
            body: "Once a version tag (e.g., `v1.2.0`) is published and packaged into a release, it must be treated as immutable. Never delete and retag a published version to slip in a bug fix. If an error is discovered in `v1.2.0`, cut and publish `v1.2.1`.",
          },
        ],
        codeSnippet: `# Create annotated release tag
git tag -a v1.0.0 -m "Release v1.0.0: Linux admin toolkit initial release"

# Inspect tag metadata and referenced commit
git show v1.0.0

# Push tag to GitHub remote
git push origin v1.0.0

# Push all local tags
git push origin --tags`,
      },
      {
        id: "disaster-recovery",
        number: "10",
        title: "Disaster Recovery: SRE Playbook & Incident Protocol",
        badge: "Recovery & Reflog",
        summary:
          "Undoing mistakes with 'git restore', 'git revert', and 'git reflog'. SRE Emergency Protocol: What to do when a secret is committed to Git.",
        details: [
          {
            heading: "Recovering from Working Tree & Staging Mistakes",
            body: "- Unstage a file without losing edits: `git restore --staged <file>`\n- Discard unstaged working tree changes: `git restore <file>` (CAUTION: Destructive!)\n- Amend the most recent commit: `git commit --amend` (Only for private, unpushed commits!).",
          },
          {
            heading: "Undoing Shared Commits: git revert",
            body: "If a bad commit was already pushed to `main` and shared across the team, NEVER use `git reset --hard`! That rewrites history and breaks downstream clones. Instead, run `git revert <commit-hash>`. This creates a brand new commit that performs the exact mathematical opposite diff of the faulty commit, cleanly reversing the change while preserving auditability.",
          },
          {
            heading: "The SRE Time Machine: git reflog",
            body: "Git records every change of HEAD in the reference log (`git reflog`). If an engineer runs `git reset --hard` and panics thinking their work was destroyed, `git reflog` shows the commit hashes before the reset. You can instantly recover the lost state with `git switch -c recovery-branch <commit-hash>`.",
          },
          {
            heading: "Emergency Incident Protocol: Secret Committed to Git",
            body: "Scenario: An engineer committed an active AWS API key or production database password.\nProtocol:\n1. IMMEDIATE REVOCATION: Log in to AWS IAM or database console and rotate/revoke the credential immediately. Never assume the secret is safe.\n2. AUDIT: Review AWS CloudTrail / audit logs for unauthorized access.\n3. HISTORY SCRUB: Use `git-filter-repo` or BFG Repo-Cleaner to rewrite history and purge the secret from all commit trees.\n4. FORCE PUSH SANITIZED REPO: Push sanitized branches and notify all team members to re-clone the repository.",
          },
        ],
        codeSnippet: `# 1. Undo staged file
git restore --staged linux-admin.sh

# 2. Safely reverse a shared commit in production
git revert 8b9c0d1 -m "revert: rollback buggy disk check"

# 3. View reference log to recover 'lost' commits
git reflog
# Recover lost state from reflog:
git switch -c rescue-branch HEAD@{2}`,
      },
    ],
    []
  );

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (12 IN-DEPTH QUESTIONS)
  // =========================================================================
  const masteryQuestions = [
    {
      q: "What is the difference between Git, GitHub, a commit, a branch, a tag and a release?",
      options: [
        "Git is a local version control system; GitHub is a hosting platform; a commit is an immutable snapshot; a branch is a movable reference to a commit; a tag is a static named reference; a release is a published software version with notes/artifacts.",
        "Git is a cloud platform; GitHub is a terminal command; a commit is a branch; a tag is a working tree.",
        "They are all interchangeable synonyms in modern CI/CD.",
        "Git and GitHub are identical open-source software tools run on Linux servers."
      ],
      correctIndex: 0,
      a: "Git is the distributed version control command-line engine operating locally. GitHub is a cloud platform hosting Git repositories with collaboration features. A commit is an immutable snapshot of the project in a Directed Acyclic Graph. A branch is a lightweight 41-byte pointer referencing a commit. A tag is a static, named reference marking a specific commit (often annotated). A release is a packaged software milestone containing release notes, documentation, and downloadable artifacts built from a tag.",
    },
    {
      q: "What do the working directory, staging area (index) and local repository represent?",
      options: [
        "Working directory: uncommitted local files; Staging area: binary cache of files selected for the next commit snapshot; Local repository: committed permanent history stored in .git.",
        "Working directory: cloud storage; Staging area: RAM cache; Local repository: GitHub server.",
        "They are all identical directories inside the user's home folder.",
        "Staging area is only used when internet connection fails."
      ],
      correctIndex: 0,
      a: "The Working Directory contains the active project files currently on disk. The Staging Area (or Index) is an intermediate binary cache (`.git/index`) where changes are specifically pre-assembled into the exact snapshot that will form the next commit. The Local Repository is the permanent, content-addressed database inside `.git/objects` storing all committed tree, blob, commit, and tag objects.",
    },
    {
      q: "Why should commits represent small, logically coherent changes rather than giant unrelated updates?",
      options: [
        "Because Git has a hard file size limit of 10KB per commit.",
        "Coherent commits make code review manageable, allow precise regression tracking via git bisect, and enable clean rollbacks via git revert without unintended side effects.",
        "To artificially inflate developer contribution metrics on GitHub profiles.",
        "Because merge conflicts cannot occur if commits are small."
      ],
      correctIndex: 1,
      a: "Atomic commits ensure each commit represents one logical change. This allows reviewers to comprehend the intent without cognitive overload, enables automated regression isolation using `git bisect`, and permits rolling back a defective feature via `git revert` without accidentally rolling back unrelated bug fixes or documentation.",
    },
    {
      q: "What is the difference between merging and rebasing, and why should shared history be treated carefully?",
      options: [
        "Merging creates a 3-way merge commit preserving exact history topology; rebasing replays commits onto a new base creating linear history by rewriting commit hashes. Rewriting shared history breaks collaborators' local branch ancestry.",
        "Merging deletes files while rebasing compresses them.",
        "Rebase can only be used on GitHub's website; merge is only run in the terminal.",
        "Rebasing preserves commit hashes; merging generates new hashes."
      ],
      correctIndex: 0,
      a: "Merging integrates two histories using a 3-way merge algorithm and (unless fast-forwarded) creates a merge commit with two parents, leaving original commit SHAs intact. Rebasing replays commits onto the tip of another branch, recalculating new commit hashes. The Golden Rule of Rebasing dictates never rebasing public/shared branches because modifying published commit hashes causes collaborators' branches to diverge catastrophically.",
    },
    {
      q: "What causes a merge conflict, and how can an SRE verify its resolution before completing the merge?",
      options: [
        "A conflict occurs when two branches edit the exact same lines of a file or modify/delete the same file. Verification requires removing all conflict markers, running test suites/linters, and inspecting git diff --staged.",
        "Conflicts are caused by server network timeouts during git push.",
        "Conflicts only happen if .gitignore is missing.",
        "A conflict is automatically resolved by Git deleting the older file."
      ],
      correctIndex: 0,
      a: "Conflicts occur when Git cannot automatically reconcile concurrent changes to identical lines or file paths. To verify: inspect `git status`, edit conflicting files to achieve the intended combined state, delete all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), execute test suites and syntax checks, stage via `git add`, and inspect `git diff --staged` before running `git merge --continue`.",
    },
    {
      q: "What does a Pull Request (PR) add beyond a raw 'git push'?",
      options: [
        "It provides a structured collaboration framework: visual diff inspection, peer code reviews, CI/CD automated test gates, discussion threads, and policy enforcement via branch protection rules.",
        "It speeds up internet bandwidth for large git pushes.",
        "It converts bash scripts into compiled C binaries automatically.",
        "It is merely a notification email with no extra tools."
      ],
      correctIndex: 0,
      a: "A raw `git push` simply transmits commits to a remote branch. A Pull Request encapsulates an engineering workflow: it facilitates visual diff inspection, peer discussions, mandatory reviews from designated code owners, automated CI/CD validation tests, security scanners, and prevents unverified code from reaching production.",
    },
    {
      q: "What should a professional code reviewer examine beyond simple syntax errors?",
      options: [
        "Correctness, system design/architecture, unnecessary complexity, readability/maintainability, security risks (permissions/secrets), operational safety (logging/error handling), and backward compatibility.",
        "Only code indentation, semicolons, and variable naming aesthetics.",
        "Whether the author used spaces or tabs exclusively.",
        "Reviewers should only verify whether the CI build passed."
      ],
      correctIndex: 0,
      a: "Following Google Engineering Practices (`eng-practices`), reviewers evaluate correctness, architectural suitability, algorithmic complexity, operational resilience (how does this behave when a network call times out?), security vulnerabilities, readability under incident stress, comprehensive testing, and whether public interfaces maintain backward compatibility.",
    },
    {
      q: "How can you undo a shared commit in production without rewriting its history?",
      options: [
        "Use 'git revert <commit-hash>', which creates a new forward commit that applies the inverse diff of the faulty change.",
        "Run 'git reset --hard HEAD~1' and 'git push --force'.",
        "Delete the repository on GitHub and re-push from a backup USB drive.",
        "Edit the file manually and leave commit history unchanged."
      ],
      correctIndex: 0,
      a: "`git revert <commit-hash>` is the safe, non-destructive recovery command for shared branches. It calculates the inverse delta of the specified commit and records a new commit on `main`. This reverses the defect while preserving a transparent, auditable history and avoiding broken downstream clones.",
    },
    {
      q: "Why is adding an accidentally committed secret to .gitignore insufficient?",
      options: [
        ".gitignore only prevents untracked files from being staged in the future; it does NOT remove files already stored in the Git commit object database.",
        "Because .gitignore is ignored by GitHub.",
        "Because .gitignore files can be read by anyone on the internet.",
        "Because secrets in .gitignore cause the Git compiler to crash."
      ],
      correctIndex: 0,
      a: "Git's object database is an immutable history graph. If a secret is committed in commit $C_1$, adding `.env` to `.gitignore` in commit $C_2$ does nothing to alter $C_1$. Anyone with access to the repo can run `git log -p` or inspect commit $C_1$ to view the secret. The secret must be immediately rotated/revoked, and the repository history purged with tools like `git-filter-repo`.",
    },
    {
      q: "Under Semantic Versioning 2.0.0, when should a project increment MAJOR, MINOR, or PATCH?",
      options: [
        "MAJOR: Incompatible/breaking API or CLI changes; MINOR: Backward-compatible new functionality; PATCH: Backward-compatible bug fixes.",
        "MAJOR: Yearly; MINOR: Monthly; PATCH: Daily.",
        "MAJOR: When UI changes color; MINOR: When a developer is promoted; PATCH: On weekends.",
        "MAJOR: When database size exceeds 1TB; MINOR: 100GB; PATCH: 10GB."
      ],
      correctIndex: 0,
      a: "SemVer 2.0.0 rules: Increment MAJOR when making incompatible API or breaking CLI changes (e.g., removing a command flag); increment MINOR when adding functionality in a backward-compatible manner (e.g., adding an optional `--json` flag); increment PATCH when making backward-compatible bug fixes or security patches.",
    },
    {
      q: "How can you determine which exact Git commit a published version tag refers to?",
      options: [
        "Run 'git show <tag-name>' or 'git rev-parse <tag-name>^{commit}'.",
        "Tags do not reference commits; they reference GitHub issues.",
        "Check the file modification timestamp in Windows Explorer.",
        "Download the zip file from GitHub and check the README date."
      ],
      correctIndex: 0,
      a: "Executing `git show v1.0.0` displays the tag metadata, tagger message, and the exact commit SHA it references along with the commit diff. `git rev-parse v1.0.0^{commit}` returns the direct 40-character commit hash of the tagged snapshot.",
    },
    {
      q: "What evidence should an SRE require before merging a PR that alters Linux service-management behavior?",
      options: [
        "Proof of read-only default behavior, unit/integration test results across active/inactive/failed states, verification of systemd supervision directives, audit of required sudo permissions, and rollback test plan.",
        "A thumbs-up emoji on Slack from the author.",
        "Verification that the bash script is under 50 lines.",
        "Confirmation that the code was generated by an AI model."
      ],
      correctIndex: 0,
      a: "Production SRE criteria require: 1. Safe read-only defaults (no uncontrolled restart loops); 2. Test logs proving correct behavior across all service states (active, stopped, non-existent, crashing); 3. Appropriate systemd directives (`RestartSec`, `LimitNOFILE`); 4. Least-privilege permissions without blanket root access; 5. Verified rollback and incident remediation runbook.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="git"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova SRE Mentor"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <GitPullRequest size={14} />
              <span>University-Informed Engineering Workflow & Version Control</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Module 2 — Git & Engineering Workflow
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Every important change should be <strong className="text-stone-900 font-semibold">traceable</strong>,{" "}
              <strong className="text-stone-900 font-semibold">reviewable</strong>,{" "}
              <strong className="text-stone-900 font-semibold">testable</strong>, and{" "}
              <strong className="text-stone-900 font-semibold">recoverable</strong>. Grounded in university coursework
              from <span className="font-semibold text-stone-900">MIT (6.005)</span>,{" "}
              <span className="font-semibold text-stone-900">Stanford (CS107/CS194)</span>,{" "}
              <span className="font-semibold text-stone-900">Cambridge</span>, Google Engineering Practices, and SemVer 2.0.0.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (10 Topics)", icon: BookOpen },
              { id: "dag-lab", label: "Lab 1: Interactive Git DAG Visualizer", icon: GitCommit },
              { id: "conflict-lab", label: "Lab 2: Merge Conflict Sandbox", icon: GitMerge },
              { id: "pr-review", label: "Lab 3: SRE Code Review GameDay", icon: Eye },
              { id: "mastery", label: "Mastery Assessment (12 Questions)", icon: ShieldCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm ${
                    isActive
                      ? "bg-orange-500 text-white shadow-orange-500/20 shadow-md"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI TUTOR EMBED */}
        {showAiTutor && (
          <div className="mb-10 rounded-2xl border border-orange-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-orange-600" />
                <h3 className="text-base font-bold text-stone-900">Nova AI: Git & Engineering Workflow Mentor</h3>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-semibold text-stone-500 hover:text-stone-800"
              >
                Close
              </button>
            </div>
            <div className="pt-4">
              <LearningRo
                currentTopic="devops-git-workflow"
                moduleName="Module 2 — Git & Engineering Workflow"
              />
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 1: THEORY & CURRICULUM TOPICS (10 TOPICS)                       */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* LEFT TOPIC SELECTOR */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 px-2 block">
                Syllabus Topics
              </span>
              {topics.map((t, idx) => {
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all border ${
                      isSelected
                        ? "bg-[#18181b] text-white border-[#27272a] shadow-lg shadow-stone-900/10"
                        : "bg-white/80 text-stone-800 border-stone-200/80 hover:bg-white hover:border-orange-200"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? "text-orange-400" : "text-stone-600"
                        }`}
                      >
                        Topic {t.number}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white/10 text-stone-300"
                            : "bg-stone-100 text-stone-600 border border-stone-200"
                        }`}
                      >
                        {t.badge}
                      </span>
                    </div>
                    <div className="font-bold text-sm leading-snug">{t.title}</div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT DETAIL VIEW */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-100">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-orange-600 tracking-wider">
                      Topic {topics[selectedTopic].number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                      {topics[selectedTopic].title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">
                    {topics[selectedTopic].badge}
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-stone-700 leading-relaxed font-sans bg-stone-50 p-4 rounded-xl border border-stone-200">
                  {topics[selectedTopic].summary}
                </p>

                {/* Subsections */}
                <div className="mt-8 space-y-6">
                  {topics[selectedTopic].details.map((detail, dIdx) => (
                    <div key={dIdx} className="border-l-2 border-orange-500 pl-4 py-1">
                      <h3 className="text-base font-bold text-stone-900">{detail.heading}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed whitespace-pre-line font-sans">
                        {detail.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CODE DEMONSTRATION SNIPPET */}
                <div className="mt-8">
                  <div className="flex items-center justify-between bg-[#18181b] text-stone-300 px-4 py-2 rounded-t-xl text-xs font-mono">
                    <span className="flex items-center gap-2">
                      <Terminal size={14} className="text-orange-400" />
                      Production Git CLI Reference
                    </span>
                    <span className="text-[10px] text-stone-400">bash / zsh</span>
                  </div>
                  <pre className="p-4 bg-[#18181b] text-stone-100 text-xs font-mono rounded-b-xl overflow-x-auto border-t border-stone-800 leading-relaxed">
                    <code>{topics[selectedTopic].codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* NEXT / PREV BUTTONS */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={selectedTopic === 0}
                  onClick={() => setSelectedTopic(selectedTopic - 1)}
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition"
                >
                  <ArrowLeft size={14} /> Previous Topic
                </button>
                <button
                  disabled={selectedTopic === topics.length - 1}
                  onClick={() => setSelectedTopic(selectedTopic + 1)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-white hover:bg-orange-600 disabled:opacity-40 transition"
                >
                  Next Topic <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: LAB 1 - INTERACTIVE GIT DAG & HISTORY VISUALIZER             */}
        {/* =================================================================== */}
        {activeTab === "dag-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <GitCommit size={14} />
                <span>Lab 1: Directed Acyclic Graph (DAG) Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Interactive Git DAG & History Visualizer
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                As taught in <strong className="text-stone-900 font-semibold">MIT 6.005</strong>, Git history is not a
                collection of loose files, but a Directed Acyclic Graph of immutable commit snapshots. Experience how
                branches (pointers), commits, merges, and tags evolve in real time.
              </p>
            </div>

            {/* CONTROLS TOOLBAR */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-stone-500">Active Branch (HEAD):</span>
                  <div className="flex gap-2">
                    {branches.map((b) => (
                      <button
                        key={b}
                        onClick={() => handleSwitchBranch(b)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${
                          activeBranch === b
                            ? "bg-orange-600 text-white shadow-sm"
                            : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        {activeBranch === b ? `* ${b}` : b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetDag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-100 transition"
                  >
                    <RotateCcw size={12} />
                    <span>Reset DAG</span>
                  </button>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-200">
                <button
                  onClick={() => handleDagCommit()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 text-white text-xs font-mono font-bold hover:bg-stone-800 transition shadow-sm"
                >
                  <GitCommit size={14} className="text-orange-400" />
                  <span>git commit -m "..."</span>
                </button>
                <button
                  onClick={() => handleCreateBranch("feature/disk-check")}
                  disabled={branches.includes("feature/disk-check")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-mono font-bold hover:bg-stone-100 disabled:opacity-40 transition shadow-sm"
                >
                  <GitBranch size={14} className="text-orange-600" />
                  <span>git switch -c feature/disk-check</span>
                </button>
                <button
                  onClick={handleMergeFeature}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-500 text-white text-xs font-mono font-bold hover:bg-orange-600 transition shadow-sm"
                >
                  <GitMerge size={14} />
                  <span>git merge feature/disk-check</span>
                </button>
                <button
                  onClick={handleRebase}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-mono font-bold hover:bg-stone-100 transition shadow-sm"
                >
                  <Sliders size={14} className="text-amber-600" />
                  <span>git rebase origin/main</span>
                </button>
                <button
                  onClick={() => handleAddTag(`v1.1.${dagCommits.length}`)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-mono font-bold hover:bg-stone-100 transition shadow-sm"
                >
                  <Tag size={14} className="text-emerald-600" />
                  <span>git tag -a v1.1.{dagCommits.length}</span>
                </button>
              </div>
            </div>

            {/* VISUAL DAG DISPLAY */}
            <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-6 text-white space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 border-b border-stone-800 pb-3">
                <span className="flex items-center gap-2">
                  <Activity size={14} className="text-orange-400" />
                  Commit Graph Topological View
                </span>
                <span>{dagCommits.length} Snapshots in Graph</span>
              </div>

              {/* Commit Nodes Visualizer */}
              <div className="overflow-x-auto py-4">
                <div className="flex items-center gap-4 min-w-[600px]">
                  {dagCommits.map((c, i) => {
                    const isHead = (c.branch === activeBranch && i === dagCommits.length - 1) || (activeBranch === "main" && c.branch === "main" && i === dagCommits.filter(x => x.branch === "main").slice(-1)[0]?.id);
                    const tagObj = tags.find((t) => t.commitId === c.id);
                    const isMerge = c.isMerge;

                    return (
                      <div key={c.id} className="flex items-center gap-3">
                        <div
                          className={`relative rounded-xl p-3 border text-xs font-mono min-w-[170px] shadow-lg transition-all ${
                            c.branch === "main"
                              ? "bg-stone-900 border-stone-700 text-stone-200"
                              : "bg-orange-950/60 border-orange-700/80 text-orange-200"
                          }`}
                        >
                          {/* HEAD pointer badge */}
                          {c.branch === activeBranch && (
                            <span className="absolute -top-3 left-2 bg-orange-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                              HEAD -&gt; {activeBranch}
                            </span>
                          )}

                          {/* Tag badge */}
                          {tagObj && (
                            <span className="absolute -bottom-2.5 right-2 bg-emerald-600 text-white font-bold text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                              <Tag size={10} /> {tagObj.name}
                            </span>
                          )}

                          <div className="flex items-center justify-between gap-1 text-[11px] font-bold text-stone-400">
                            <span className="text-orange-400">[{c.hash}]</span>
                            <span className="text-[10px] text-stone-500">{c.branch}</span>
                          </div>
                          <div className="mt-1 text-xs font-semibold truncate text-white">
                            {c.message}
                          </div>
                          {isMerge && (
                            <span className="inline-block mt-1 text-[10px] text-amber-400 font-bold">
                              ★ 3-Way Merge
                            </span>
                          )}
                        </div>

                        {i < dagCommits.length - 1 && (
                          <div className="text-stone-600 font-bold text-lg select-none">
                            →
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* TERMINAL ACTION LOG */}
              <div className="rounded-xl bg-black/60 p-4 font-mono text-xs text-stone-300 space-y-1 border border-stone-800">
                <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1">
                  Git Engine Command Execution Log:
                </span>
                {dagLog.map((logLine, lIdx) => (
                  <div key={lIdx} className="text-stone-400 flex items-start gap-2">
                    <span className="text-orange-500 select-none">$</span>
                    <span className={lIdx === 0 ? "text-emerald-400 font-bold" : ""}>{logLine}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - INTERACTIVE MERGE CONFLICT RESOLUTION SANDBOX        */}
        {/* =================================================================== */}
        {activeTab === "conflict-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <GitMerge size={14} />
                <span>Lab 2: Conflict Mechanics & Remediation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Merge Conflict Resolution Sandbox
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                When two branches modify the same line concurrently, Git halts and inserts conflict markers:{" "}
                <code className="bg-stone-100 px-1 py-0.5 rounded text-orange-700 font-mono">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>,{" "}
                <code className="bg-stone-100 px-1 py-0.5 rounded text-stone-700 font-mono">=======</code>, and{" "}
                <code className="bg-stone-100 px-1 py-0.5 rounded text-blue-700 font-mono">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature</code>.
                Learn to systematically resolve conflicts, eliminate markers, and verify syntax.
              </p>
            </div>

            {/* PRESET RESOLUTION ACTIONS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={handleAcceptHead}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-left transition"
              >
                <div className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                  <Check size={14} className="text-orange-600" />
                  <span>Accept Current (HEAD)</span>
                </div>
                <p className="text-[11px] text-stone-600 mt-1">
                  Keeps production main's hardcoded 80% threshold check.
                </p>
              </button>

              <button
                onClick={handleAcceptIncoming}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-left transition"
              >
                <div className="font-bold text-xs text-stone-900 flex items-center gap-1.5">
                  <Check size={14} className="text-blue-600" />
                  <span>Accept Incoming (Feature)</span>
                </div>
                <p className="text-[11px] text-stone-600 mt-1">
                  Adopts dynamic environment variable override with 85% fallback.
                </p>
              </button>

              <button
                onClick={handleAcceptCombined}
                className="p-4 rounded-xl border border-orange-300 bg-orange-50/60 hover:bg-orange-100/60 text-left transition"
              >
                <div className="font-bold text-xs text-orange-900 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-orange-600" />
                  <span>Accept SRE Best Practice</span>
                </div>
                <p className="text-[11px] text-orange-800 mt-1">
                  Combines both: dynamic env override with safe 80% production default.
                </p>
              </button>
            </div>

            {/* CODE EDITOR CONTAINER */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-600">
                <span className="font-bold text-stone-800 flex items-center gap-2">
                  <FileCode size={14} className="text-orange-500" />
                  File: linux-admin-toolkit/linux-admin.sh (In Conflict)
                </span>
                <span className="text-[11px] text-stone-600">You can edit the code directly below</span>
              </div>

              <textarea
                value={conflictEditorContent}
                onChange={(e) => setConflictEditorContent(e.target.value)}
                rows={18}
                className="w-full rounded-2xl border border-stone-700 bg-[#18181b] p-5 font-mono text-xs text-stone-100 focus:outline-none focus:ring-2 focus:ring-orange-500 leading-relaxed"
                spellCheck="false"
              />

              {/* VALIDATION & VERIFY BUTTONS */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleVerifyConflictResolution}
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white hover:bg-orange-600 transition shadow-sm"
                  >
                    <CheckCircle2 size={16} />
                    <span>Verify Resolution & Complete Merge (git merge --continue)</span>
                  </button>
                  <button
                    onClick={handleAbortMerge}
                    className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-100 transition shadow-sm"
                  >
                    <RotateCcw size={14} />
                    <span>Abort Merge (git merge --abort)</span>
                  </button>
                </div>
              </div>

              {/* FEEDBACK STATUS */}
              {conflictFeedback && (
                <div
                  className={`mt-4 p-4 rounded-xl border text-xs sm:text-sm font-sans flex items-start gap-3 ${
                    conflictFeedback.type === "success"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : conflictFeedback.type === "error"
                      ? "bg-rose-50 border-rose-200 text-rose-800"
                      : "bg-amber-50 border-amber-200 text-amber-800"
                  }`}
                >
                  {conflictFeedback.type === "success" ? (
                    <CheckCircle2 size={18} className="shrink-0 text-emerald-600 mt-0.5" />
                  ) : (
                    <AlertTriangle size={18} className="shrink-0 text-rose-600 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold block mb-0.5">
                      {conflictFeedback.type === "success" ? "Verification Succeeded" : "Conflict Notice"}
                    </span>
                    {conflictFeedback.msg}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - SRE CODE REVIEW & PRODUCTION RISK TRIAGE GAMEDAY     */}
        {/* =================================================================== */}
        {activeTab === "pr-review" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Eye size={14} />
                <span>Lab 3: Google-Grade Peer Code Review</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                SRE Code Review & Production Risk Triage GameDay
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                As detailed in <strong className="text-stone-900 font-semibold">Google's Engineering Practices</strong>,
                code review is the primary defense against production outages, secret leaks, and breaking changes.
                Evaluate 4 real-world Pull Requests and make the professional engineering decision.
              </p>
            </div>

            {/* SCENARIO SELECTOR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {prScenarios.map((sc, sIdx) => {
                const isSelected = selectedPrIndex === sIdx;
                const isDecided = prDecisions[sc.id] !== undefined;
                return (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedPrIndex(sIdx)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-[#18181b] text-white border-stone-800 shadow-md"
                        : "bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className={isSelected ? "text-orange-400 font-bold" : "text-stone-500 font-bold"}>
                        Case #{sIdx + 1}
                      </span>
                      {isDecided && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold">
                          Reviewed
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-xs truncate">{sc.prTitle}</div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE PR REVIEW CARD */}
            {(() => {
              const currentPr = prScenarios[selectedPrIndex];
              const decision = prDecisions[currentPr.id];

              return (
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-8 space-y-6">
                  {/* PR Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <GitPullRequest size={16} className="text-orange-600" />
                        <h3 className="text-lg font-bold text-stone-900">{currentPr.prTitle}</h3>
                      </div>
                      <span className="text-xs text-stone-500 font-mono mt-1 block">
                        Author: {currentPr.author} • Target: <span className="font-bold text-stone-800">{currentPr.targetBranch}</span> ← Source:{" "}
                        <span className="font-bold text-stone-800">{currentPr.sourceBranch}</span>
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full">
                      Risk: {currentPr.riskSummary}
                    </span>
                  </div>

                  {/* PR Diff Preview */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-stone-500 block mb-2">
                      Pull Request Changes (Unified Diff):
                    </span>
                    <pre className="p-4 rounded-xl bg-[#18181b] text-xs font-mono overflow-x-auto text-stone-200 border border-stone-800 leading-relaxed">
                      <code>{currentPr.diffSnippet}</code>
                    </pre>
                  </div>

                  {/* Question & Options */}
                  <div className="space-y-4 pt-2">
                    <span className="text-sm font-bold text-stone-900 block">
                      {currentPr.question}
                    </span>

                    <div className="space-y-2.5">
                      {currentPr.options.map((opt) => {
                        const isChosen = decision === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => handlePrDecision(currentPr.id, opt.id)}
                            className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all ${
                              isChosen
                                ? opt.correct
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm"
                                  : "bg-rose-50 border-rose-300 text-rose-900 shadow-sm"
                                : "bg-white border-stone-200 text-stone-800 hover:bg-stone-100"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono ${
                                  isChosen
                                    ? opt.correct
                                      ? "bg-emerald-600 text-white border-emerald-600"
                                      : "bg-rose-600 text-white border-rose-600"
                                    : "border-stone-300 text-stone-500 bg-stone-50"
                                }`}
                              >
                                {opt.id.slice(-1).toUpperCase()}
                              </span>
                              <div className="space-y-1">
                                <span className="font-semibold block">{opt.label}</span>
                                {isChosen && (
                                  <p
                                    className={`text-xs mt-2 pt-2 border-t leading-relaxed ${
                                      opt.correct
                                        ? "border-emerald-200 text-emerald-800 font-sans"
                                        : "border-rose-200 text-rose-800 font-sans"
                                    }`}
                                  >
                                    <strong className="font-bold">
                                      {opt.correct ? "✓ SRE Approval Justification: " : "✗ Production Risk: "}
                                    </strong>
                                    {opt.explanation}
                                  </p>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: MASTERY ASSESSMENT (12 ARCHITECTURAL QUESTIONS)              */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <ShieldCheck size={14} />
                <span>Final Mastery Assessment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                12-Question Engineering Workflow Assessment
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Before advancing to automated testing and CI/CD pipelines, demonstrate complete mastery over Git
                internals, DAG history topology, merge conflicts, pull request lifecycles, and SemVer 2.0.0.
              </p>
            </div>

            <div className="space-y-4">
              {masteryQuestions.map((mq, idx) => {
                const isOpen = openMasteryIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stone-200 bg-stone-50/40 overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-orange-600 font-bold">Q{idx + 1}.</span>
                        <span>{mq.q}</span>
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white space-y-3">
                        <div className="space-y-1.5 pt-2">
                          <span className="font-mono text-[10px] font-bold uppercase text-stone-400 block">
                            Key Options & Evaluation:
                          </span>
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-lg text-xs font-mono flex items-start gap-2 ${
                                oIdx === mq.correctIndex
                                  ? "bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold"
                                  : "text-stone-500"
                              }`}
                            >
                              <span>{oIdx === mq.correctIndex ? "✓" : "•"}</span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-stone-100">
                          <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                            Authoritative Engineering & SRE Answer:
                          </span>
                          <p className="text-stone-700 font-sans">{mq.a}</p>
                        </div>
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
              DevOps & SRE Track • Module 2 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Git & Engineering Workflow Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand Git history as a Directed Acyclic Graph, atomic commit hygiene, 3-way merges vs rebase
              safety, systematic conflict resolution, Google-grade code reviews, and SemVer 2.0.0 release packaging.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/linux")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 1: Linux
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/docker")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition flex items-center gap-1.5"
            >
              <span>Next: Module 3 — Docker</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
