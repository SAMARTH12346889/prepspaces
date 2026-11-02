import useModuleContent from "../hooks/useModuleContent";
import ModuleLoadingSkeleton from "./ModuleLoadingSkeleton";
import ModuleErrorState from "./ModuleErrorState";
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
  const { data: moduleData, loading, error, reload } = useModuleContent("devops", "git");
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
  const topics = moduleData?.topics || [];
  const currentTopic = topics[selectedTopic] || topics[0] || {};

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (12 IN-DEPTH QUESTIONS)
  // =========================================================================
  const masteryQuestions = moduleData?.quiz || [];

    if (loading) {
    return <ModuleLoadingSkeleton track="devops" currentModuleId="git" />;
  }

  if (error || !moduleData) {
    return <ModuleErrorState track="devops" currentModuleId="git" error={error} onRetry={reload} />;
  }
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
                      Topic {currentTopic?.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                      {currentTopic?.title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">
                    {currentTopic?.badge}
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-stone-700 leading-relaxed font-sans bg-stone-50 p-4 rounded-xl border border-stone-200">
                  {currentTopic?.summary}
                </p>

                {/* Subsections */}
                <div className="mt-8 space-y-6">
                  {currentTopic?.details?.map((detail, dIdx) => (
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
                    <code>{currentTopic?.codeSnippet}</code>
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
