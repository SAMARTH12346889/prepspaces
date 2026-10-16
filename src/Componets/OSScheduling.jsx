import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Terminal,
  Shield,
  HardDrive,
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
  Globe,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Binary,
  ExternalLink,
  FileText,
  BarChart2,
  Clock,
  Timer,
  GitBranch,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* OPERATING SYSTEMS MASTER COURSE: MODULE 6                                   */
/* CPU Scheduling and Performance                                             */
/* OSTEP, MIT 6.1810, CMU 15-213, Linux EEVDF/CFS Standard                    */
/* -------------------------------------------------------------------------- */

export default function OSScheduling() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(29);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-lab' | 'quiz' | 'checklist'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // Interactive Gantt Chart & Algorithm Comparator State (Lesson 2 & 3)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("FCFS"); // 'FCFS' | 'SJF' | 'SRTF' | 'Priority' | 'RR'
  const [rrQuantum, setRrQuantum] = useState(2);
  const [contextSwitchCost, setContextSwitchCost] = useState(0);

  // Standard Worked Example Dataset (from Curriculum)
  const sampleProcesses = [
    { name: "P1", arrival: 0, burst: 6, priority: 2, color: "bg-blue-500 text-white border-blue-600" },
    { name: "P2", arrival: 1, burst: 2, priority: 1, color: "bg-emerald-500 text-white border-emerald-600" },
    { name: "P3", arrival: 2, burst: 4, priority: 3, color: "bg-purple-500 text-white border-purple-600" },
    { name: "P4", arrival: 4, burst: 1, priority: 2, color: "bg-amber-500 text-white border-amber-600" },
  ];

  // Dynamic Simulator Engine: Computes exact schedule timeline and metrics
  const simulationResults = useMemo(() => {
    const jobs = sampleProcesses.map((p) => ({
      ...p,
      remaining: p.burst,
      firstStart: null,
      completion: null,
      waiting: 0,
      turnaround: 0,
      response: 0,
    }));

    let time = 0;
    const timeline = [];
    const completed = [];
    let current = null;
    let currentSlice = 0;
    const readyQueue = [];

    // Safety limit of 100 cycles to prevent any infinite loop
    while (completed.length < jobs.length && time < 100) {
      // 1. Admit arrivals at current time
      jobs.forEach((j) => {
        if (j.arrival === time && !readyQueue.includes(j) && !completed.includes(j) && j !== current) {
          readyQueue.push(j);
        }
      });

      // 2. Algorithm Dispatch Logic
      if (selectedAlgorithm === "FCFS") {
        if (!current && readyQueue.length > 0) {
          current = readyQueue.shift();
          if (current.firstStart === null) current.firstStart = time;
        }
      } else if (selectedAlgorithm === "SJF") {
        if (!current && readyQueue.length > 0) {
          readyQueue.sort((a, b) => a.burst - b.burst || a.arrival - b.arrival);
          current = readyQueue.shift();
          if (current.firstStart === null) current.firstStart = time;
        }
      } else if (selectedAlgorithm === "SRTF") {
        if (current) readyQueue.push(current);
        if (readyQueue.length > 0) {
          readyQueue.sort((a, b) => a.remaining - b.remaining || a.arrival - b.arrival);
          current = readyQueue.shift();
          if (current.firstStart === null) current.firstStart = time;
        }
      } else if (selectedAlgorithm === "Priority") {
        // Lower numeric value = higher priority
        if (!current && readyQueue.length > 0) {
          readyQueue.sort((a, b) => a.priority - b.priority || a.arrival - b.arrival);
          current = readyQueue.shift();
          if (current.firstStart === null) current.firstStart = time;
        }
      } else if (selectedAlgorithm === "RR") {
        if (current) {
          if (currentSlice >= rrQuantum) {
            readyQueue.push(current);
            current = readyQueue.shift();
            currentSlice = 0;
            if (current && current.firstStart === null) current.firstStart = time;
          }
        } else if (readyQueue.length > 0) {
          current = readyQueue.shift();
          currentSlice = 0;
          if (current.firstStart === null) current.firstStart = time;
        }
      }

      // 3. Execute 1 time unit
      if (current) {
        timeline.push({ time, process: current.name, color: current.color });
        current.remaining--;
        currentSlice++;

        if (current.remaining === 0) {
          current.completion = time + 1;
          current.turnaround = current.completion - current.arrival;
          current.waiting = current.turnaround - current.burst;
          current.response = current.firstStart - current.arrival;
          completed.push(current);
          current = null;
          currentSlice = 0;
        }
      } else {
        timeline.push({ time, process: "IDLE", color: "bg-stone-200 text-stone-600 border-stone-300" });
      }

      time++;
    }

    const avgTAT = jobs.reduce((acc, j) => acc + j.turnaround, 0) / jobs.length;
    const avgWT = jobs.reduce((acc, j) => acc + j.waiting, 0) / jobs.length;
    const avgRT = jobs.reduce((acc, j) => acc + j.response, 0) / jobs.length;
    const totalTime = time;
    const throughput = (jobs.length / totalTime).toFixed(3);

    return { jobs, timeline, avgTAT, avgWT, avgRT, totalTime, throughput };
  }, [selectedAlgorithm, rrQuantum]);

  // Terminal Simulator State (Capstone Simulator Sandbox)
  const [terminalHistory, setTerminalHistory] = useState([
    {
      cmd: "python3 scheduler_sim.py",
      out: `=== CPU SCHEDULING SIMULATION RESULTS ===
Workload: 4 processes (P1: 6, P2: 2, P3: 4, P4: 1)

Algorithm: FCFS
  P1: ST=0, CT=6,  TAT=6,  WT=0,  RT=0
  P2: ST=6, CT=8,  TAT=7,  WT=5,  RT=5
  P3: ST=8, CT=12, TAT=10, WT=6,  RT=6
  P4: ST=12,CT=13, TAT=9,  WT=8,  RT=8
  Averages: TAT=8.00, WT=4.75, RT=4.75, Throughput=0.308 jobs/unit

Algorithm: SJF (Shortest Job First)
  P1: ST=0, CT=6,  TAT=6,  WT=0,  RT=0
  P4: ST=6, CT=7,  TAT=3,  WT=2,  RT=2
  P2: ST=7, CT=9,  TAT=8,  WT=6,  RT=6
  P3: ST=9, CT=13, TAT=11, WT=7,  RT=7
  Averages: TAT=7.00, WT=3.75, RT=3.75, Throughput=0.308 jobs/unit

Algorithm: SRTF (Preemptive Shortest Remaining Time First)
  Timeline: P1[0-1], P2[1-3], P4[4-5], P3[5-9], P1[9-14]
  Averages: TAT=5.50, WT=2.25, RT=1.25, Throughput=0.286 jobs/unit

Algorithm: Round Robin (quantum=2)
  Timeline: P1[0-2], P2[2-4], P3[4-6], P1[6-8], P4[8-9], P3[9-11], P1[11-13]
  Averages: TAT=7.25, WT=4.00, RT=1.75, Throughput=0.308 jobs/unit`,
      type: "success",
    },
  ]);
  const [customCommand, setCustomCommand] = useState("");

  // Section 10: Capstone Lab Checklist State (7 items)
  const [checklist, setChecklist] = useState({
    simFiveAlgos: false,
    calcMetrics: false,
    ganttTimeline: false,
    sameWorkload: false,
    overheadModel: false,
    starvationAging: false,
    submitReport: false,
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // Section 11: Knowledge Assessment State (6 questions matching curriculum)
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "1. Which metric measures time from arrival until the first CPU service?",
      options: ["Turnaround time", "Response time", "Throughput", "Waiting time"],
      correctIndex: 1,
      explanation:
        "Response time (RT = Start Time - Arrival Time) measures how quickly an application receives its first slice of CPU time. It is the critical metric for interactive systems, UI responsiveness, and real-time audio.",
    },
    {
      id: 2,
      question: "2. Which algorithm can preempt a running process when a shorter remaining job arrives?",
      options: ["FCFS", "Non-preemptive SJF", "SRTF", "Non-preemptive Priority"],
      correctIndex: 2,
      explanation:
        "Shortest Remaining Time First (SRTF) is the preemptive variant of Shortest Job First. If a newly arrived process has a remaining burst strictly smaller than the currently executing process's remaining burst, the CPU preempts the running process.",
    },
    {
      id: 3,
      question: "3. What is the convoy effect?",
      options: [
        "A CPU migration problem",
        "Short jobs waiting behind a long job",
        "A process using multiple cores",
        "A memory leak",
      ],
      correctIndex: 1,
      explanation:
        "The convoy effect occurs in First-Come, First-Served (FCFS) scheduling when multiple short CPU or I/O-bound jobs are held up waiting for a single long CPU-heavy process to finish, causing plummeting device utilization and sky-high average waiting times.",
    },
    {
      id: 4,
      question: "4. What is a common risk of strict priority scheduling?",
      options: [
        "Every task gets equal CPU time",
        "Starvation of low-priority tasks",
        "No preemption is possible",
        "Throughput must be zero",
      ],
      correctIndex: 1,
      explanation:
        "In strict priority scheduling, if there is a steady stream of high-priority processes arriving, lower-priority tasks may suffer starvation (indefinite postponement). Operating systems mitigate this with Aging—gradually elevating the priority of waiting tasks.",
    },
    {
      id: 5,
      question: "5. What is a primary Round Robin tuning trade-off?",
      options: [
        "Disk capacity versus RAM",
        "Quantum size versus responsiveness and switching overhead",
        "File permissions versus ownership",
        "Cache size versus page size only",
      ],
      correctIndex: 1,
      explanation:
        "If the time quantum (q) is too large, Round Robin degenerates into FCFS, degrading interactive response time. If q is too small, context-switch overhead (saving registers, cache pollution, TLB flushes) consumes a significant fraction of CPU capacity.",
    },
    {
      id: 6,
      question: "6. Why is CPU affinity useful?",
      options: [
        "It guarantees the shortest job runs first",
        "It restricts a task to eligible CPUs and may improve locality",
        "It eliminates every context switch",
        "It guarantees zero waiting time",
      ],
      correctIndex: 1,
      explanation:
        "CPU affinity binds a process or thread to specific CPU cores. By keeping a process on the same core, its working set remains warm in L1/L2 caches, avoiding cache misses and remote NUMA interconnect latency caused by inter-core migration.",
    },
  ];

  const handleSelectQuizAnswer = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const quizScore = useMemo(() => {
    let correct = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return correct;
  }, [quizAnswers]);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  // Run simulated commands in interactive terminal
  const executeTerminalCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    let output = "";
    let type = "info";

    if (raw === "clear") {
      setTerminalHistory([]);
      setCustomCommand("");
      return;
    }

    if (raw === "help") {
      output = `Available simulated commands:
  python3 scheduler_sim.py
  python3 scheduler_sim.py --quantum 1
  python3 scheduler_sim.py --context-switch 1
  taskset -pc $$
  nproc
  python3 scheduler_sim.py --workload interactive
  clear`;
    } else if (raw.includes("nproc")) {
      output = `8\n[8 logical CPU cores detected on AMD Ryzen / Intel Core architecture]`;
      type = "success";
    } else if (raw.includes("taskset")) {
      output = `pid 4892's current affinity list: 0-7\n[Task permitted to run on any of the 8 logical cores]`;
      type = "info";
    } else if (raw.includes("quantum 1")) {
      output = `Running Round Robin with quantum=1:
  Timeline slices: 13 switches
  Average Turnaround Time: 6.75
  Average Response Time: 1.00 (Outstanding responsiveness!)
  Context switch count increased by 85% compared to quantum=4.`;
      type = "success";
    } else if (raw.includes("context-switch")) {
      output = `Modeling Context-Switch Overhead (c=1 unit per switch):
  Useful CPU fraction U = q / (q + c) = 2 / (2 + 1) = 66.7%
  33.3% of total CPU cycles consumed purely by kernel state saving and cache invalidation!`;
      type = "warning";
    } else if (raw.includes("interactive")) {
      output = `Simulating Interactive Workload (Short bursts + frequent I/O):
  SJF/SRTF achieves Response Time = 0.50 units
  FCFS suffers Convoy Effect: Response Time = 6.20 units`;
      type = "success";
    } else if (raw.includes("scheduler_sim.py")) {
      output = `=== CPU SCHEDULING BENCHMARK REPORT ===
Comparing 5 Algorithms on Standard Workload:
---------------------------------------------------------------
Algorithm   Avg Turnaround   Avg Waiting   Avg Response   Throughput
---------------------------------------------------------------
FCFS        8.00             4.75          4.75           0.308
SJF         7.00             3.75          3.75           0.308
SRTF        5.50             2.25          1.25           0.286
Priority    8.25             5.00          4.50           0.308
RR (q=2)    7.25             4.00          1.75           0.308
---------------------------------------------------------------
Conclusion: SRTF optimizes turnaround; Round Robin optimizes response.`;
      type = "success";
    } else {
      output = `bash: ${raw}: simulated command complete. Type 'help' to view available scheduling lab commands.`;
      type = "info";
    }

    setTerminalHistory((prev) => [...prev, { cmd: raw, out: output, type }]);
    setCustomCommand("");
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Breadcrumb & Navigation */}
      <ModuleNav
        track="os"
        currentModuleId="scheduling"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Nova Systems AI"
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Module Header Card */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 tracking-wide uppercase">
                  Module 6 · Core OS Internals
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                  PrepSpaces Operating Systems Master Course
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  OSTEP · MIT 6.1810 · Linux EEVDF Standard
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                CPU Scheduling and Performance
              </h1>
              <p className="text-stone-600 max-w-3xl text-base sm:text-lg leading-relaxed">
                When multiple processes are ready to execute, which one receives the CPU next, and for how long? Progress from mathematical models ($TAT, WT, RT$) to implementing an interactive multi-algorithm scheduler simulator, analyzing preemption, context-switch costs, starvation, and Linux multicore load balancing.
              </p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-stone-100">
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Estimated Time
                </div>
                <div className="text-lg font-bold text-stone-800">2–3 Hours</div>
              </div>
              <div className="text-left md:text-right">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                  Capstone Lab
                </div>
                <div className="text-sm font-medium text-stone-700">Python Scheduler Sim</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-8 flex items-center gap-2 border-b border-stone-200 overflow-x-auto pb-px">
            <button
              onClick={() => setActiveTab("theory")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "theory"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              1. Curriculum & Theory
            </button>
            <button
              onClick={() => setActiveTab("interactive-lab")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "interactive-lab"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              2. Interactive Gantt Simulator
            </button>
            <button
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "checklist"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              3. Capstone Checklist ({completedChecklistCount}/7)
            </button>
            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-lg transition-colors whitespace-nowrap ${
                activeTab === "quiz"
                  ? "border-b-2 border-orange-600 text-orange-600 bg-orange-50/50"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              <Award className="w-4 h-4" />
              4. Knowledge Assessment
            </button>
          </div>
        </section>

        {/* TAB 1: CURRICULUM & THEORY */}
        {activeTab === "theory" && (
          <div className="space-y-10">
            {/* Roadmap Overview */}
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold font-serif tracking-tight text-white mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-orange-400" />
                Module Roadmap: CPU Scheduling & Performance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 1</span>
                  <h4 className="font-semibold text-white mt-1">Scheduling Fundamentals</h4>
                  <p className="text-xs text-stone-400 mt-1">CPU vs I/O bursts, dispatcher, scheduling criteria, preemption triggers.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 2</span>
                  <h4 className="font-semibold text-white mt-1">Scheduling Metrics</h4>
                  <p className="text-xs text-stone-400 mt-1">Gantt charts, Turnaround (TAT), Waiting (WT), Response Time (RT), Throughput.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 3</span>
                  <h4 className="font-semibold text-white mt-1">FCFS, SJF, SRTF, Priority</h4>
                  <p className="text-xs text-stone-400 mt-1">Convoy effect, exponential burst prediction, preemption, starvation &amp; aging.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 4</span>
                  <h4 className="font-semibold text-white mt-1">Round Robin &amp; MLFQ</h4>
                  <p className="text-xs text-stone-400 mt-1">Time quantum tuning, Multilevel Feedback Queues, switching overhead U &asymp; q/(q+c).</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 5</span>
                  <h4 className="font-semibold text-white mt-1">Multicore &amp; Linux EEVDF</h4>
                  <p className="text-xs text-stone-400 mt-1">Per-CPU runqueues, CPU affinity (taskset), load balancing, CFS to EEVDF.</p>
                </div>
                <div className="p-3.5 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <span className="text-orange-400 font-bold font-mono">Lesson 6 &amp; Lab</span>
                  <h4 className="font-semibold text-white mt-1">Simulator Lab</h4>
                  <p className="text-xs text-stone-400 mt-1">Build scheduler_sim.py, benchmark batch vs interactive workloads.</p>
                </div>
              </div>
            </div>

            {/* LESSON 1: SCHEDULING FUNDAMENTALS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 1
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  CPU Scheduling Fundamentals &amp; Workload Classification
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  In a multitasking system, multiple processes are in the <strong>READY</strong> state competing for CPU cores. The <strong>scheduler</strong> decides <em>which</em> task should run next, while the <strong>dispatcher</strong> performs the low-level context switch to grant execution control.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-orange-600" />
                      CPU-Bound Workloads
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Tasks that spend the vast majority of their execution time executing ALU instructions with few I/O operations (e.g. video rendering, cryptography, ML inference). They require long uninterrupted CPU bursts to maintain high throughput.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-blue-600" />
                      I/O-Bound Workloads
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Tasks that perform short CPU calculations and frequently block on user input, disk transfers, or network packets (e.g. text editors, web servers, GUIs). They require immediate CPU scheduling upon unblocking to ensure low response latency.
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border border-stone-200 rounded-lg">
                    <thead className="bg-stone-100 text-stone-700 font-semibold">
                      <tr>
                        <th className="py-2.5 px-3 border-b">Scheduling Objective</th>
                        <th className="py-2.5 px-3 border-b">Formal Definition</th>
                        <th className="py-2.5 px-3 border-b">Engineering Trade-off</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">CPU Utilization</td>
                        <td className="py-2 px-3 text-stone-600">Percentage of time CPU executes user/kernel code</td>
                        <td className="py-2 px-3 text-stone-600">High utilization does not imply fast interactive response</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">Throughput</td>
                        <td className="py-2 px-3 text-stone-600">Number of completed tasks per unit of time</td>
                        <td className="py-2 px-3 text-stone-600">Prioritizing short jobs boosts throughput at the cost of long jobs</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">Turnaround Time (TAT)</td>
                        <td className="py-2 px-3 text-stone-600">Total elapsed time from arrival to completion</td>
                        <td className="py-2 px-3 text-stone-600">Heavily penalized by long queues in batch processing</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">Waiting Time (WT)</td>
                        <td className="py-2 px-3 text-stone-600">Total time process spent ready in queue but not running</td>
                        <td className="py-2 px-3 text-stone-600">Unfair policies allow low-priority jobs to accumulate huge WT</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-stone-900">Response Time (RT)</td>
                        <td className="py-2 px-3 text-stone-600">Time from arrival until first CPU execution slice</td>
                        <td className="py-2 px-3 text-stone-600">Critical for interactive responsiveness; requires preemption</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            {/* LESSON 2: SCHEDULING METRICS & MATHEMATICAL MODEL */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 2
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Scheduling Metrics and Mathematical Formulation
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  To quantitatively evaluate and compare CPU scheduling algorithms, we model processes with four standard mathematical timestamps:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                    <span className="font-bold text-stone-900 font-sans">Arrival Time (AT)</span>
                    <p className="text-stone-500 font-sans text-[11px] mt-1">When task enters the ready queue.</p>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                    <span className="font-bold text-stone-900 font-sans">Burst Time (BT)</span>
                    <p className="text-stone-500 font-sans text-[11px] mt-1">Total CPU time required to finish.</p>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                    <span className="font-bold text-stone-900 font-sans">Start Time (ST)</span>
                    <p className="text-stone-500 font-sans text-[11px] mt-1">Timestamp when task first receives CPU.</p>
                  </div>
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
                    <span className="font-bold text-stone-900 font-sans">Completion Time (CT)</span>
                    <p className="text-stone-500 font-sans text-[11px] mt-1">Timestamp when task completely finishes.</p>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl text-xs space-y-2 text-orange-950 font-mono">
                  <div className="font-bold text-orange-900 font-sans text-sm">Fundamental Scheduling Formulas:</div>
                  <div>• Turnaround Time: <span className="font-bold">TAT = CT - AT</span> (Total latency in the system)</div>
                  <div>• Waiting Time:    <span className="font-bold">WT = TAT - BT</span> (Time spent waiting in ready queue)</div>
                  <div>• Response Time:   <span className="font-bold">RT = ST - AT</span> (Delay until first interactive execution)</div>
                  <div>• Throughput:      <span className="font-bold">Throughput = Completed Jobs / Elapsed Time</span></div>
                </div>
              </div>
            </article>

            {/* LESSON 3: CLASSICAL SCHEDULING ALGORITHMS */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 3
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  FCFS, SJF, SRTF, and Priority Scheduling
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="font-bold text-stone-900 text-sm">1. First-Come, First-Served (FCFS)</div>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Type:</strong> Non-preemptive. Executes processes strictly in order of arrival.
                  </p>
                  <p className="text-red-700 bg-red-50 p-2 rounded border border-red-200">
                    <strong>Convoy Effect:</strong> If a 30ms CPU-heavy task arrives at $t=0$, followed by ten 1ms interactive tasks, all ten short tasks are delayed by 30ms, causing high average waiting time.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="font-bold text-stone-900 text-sm">2. Shortest Job First (SJF)</div>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Type:</strong> Non-preemptive. Provably optimal for minimizing average waiting time under known bursts.
                  </p>
                  <p className="text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
                    <strong>Predicting Bursts:</strong> Real kernels cannot know future bursts in advance; they estimate via exponential smoothing: &tau;<sub>n+1</sub> = &alpha;t<sub>n</sub> + (1 - &alpha;)&tau;<sub>n</sub>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="font-bold text-stone-900 text-sm">3. Shortest Remaining Time First (SRTF)</div>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Type:</strong> Preemptive variant of SJF. If a newly arrived process needs less time than the running process has left, it preempts immediately.
                  </p>
                  <p className="text-stone-600">
                    Minimizes average turnaround time, but causes frequent context switching and starves long jobs if short jobs continually arrive.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="font-bold text-stone-900 text-sm">4. Priority Scheduling &amp; Aging</div>
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Type:</strong> Preemptive or Non-preemptive. Dispatches the process with highest priority (lower numeric value).
                  </p>
                  <p className="text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200">
                    <strong>Aging Mitigation:</strong> To prevent starvation of low-priority tasks, the kernel periodically increments the priority of waiting tasks until they execute.
                  </p>
                </div>
              </div>
            </article>

            {/* LESSON 4: ROUND ROBIN & MLFQ */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 4
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Round Robin, Time Quantum Tuning, and MLFQ
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  <strong>Round Robin (RR)</strong> is designed specifically for time-sharing systems. Each ready process is assigned a fixed time slice called a <strong>quantum ($q$)</strong>. If the process does not complete within its quantum, it is preempted and returned to the tail of the ready queue.
                </p>

                {/* Quantum Tuning Tradeoff */}
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-3 text-xs">
                  <div className="font-bold text-stone-900 text-sm">The Time Quantum ($q$) Dilemma:</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white border border-stone-200 rounded-lg">
                      <span className="font-bold text-red-600">Quantum Too Large ($q \to \infty$)</span>
                      <p className="text-stone-600 mt-1">Degenerates into FCFS. Interactive responsiveness plummets; typing in a terminal lags behind batch compute.</p>
                    </div>
                    <div className="p-3 bg-white border border-stone-200 rounded-lg">
                      <span className="font-bold text-red-600">Quantum Too Small ($q \to 0$)</span>
                      <p className="text-stone-600 mt-1">
                        High responsiveness, but <strong>context-switch overhead ($c$)</strong> dominates.
                        Useful CPU fraction: <span className="font-mono font-bold">U &asymp; q / (q + c)</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* MLFQ Section */}
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl space-y-2 text-xs text-purple-950">
                  <div className="font-bold text-purple-900 text-sm">Multilevel Feedback Queue (MLFQ)</div>
                  <p className="leading-relaxed">
                    MLFQ solves the problem of not knowing process burst times in advance by observing execution history:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Queue 0 (Highest Priority, small quantum):</strong> New processes start here. Interactive I/O tasks remain here.</li>
                    <li><strong>Queue 1 &amp; 2 (Lower Priority, larger quantum):</strong> Tasks that consume their full quantum are demoted to lower queues.</li>
                    <li><strong>Periodic Priority Boost:</strong> Periodically, all tasks are boosted to Queue 0 to prevent starvation of CPU-heavy batch jobs.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* LESSON 5: MULTICORE SCHEDULING & LINUX EEVDF */}
            <article className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest font-mono">
                  Lesson 5
                </span>
                <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                  Multicore Scheduling, CPU Affinity, and Linux EEVDF
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-stone-700 leading-relaxed">
                  Modern servers feature tens or hundreds of CPU cores arranged in Non-Uniform Memory Access (NUMA) nodes. Multicore scheduling must decide not only <em>when</em> to run, but on <em>which core</em> to execute:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-orange-600" />
                      Per-CPU Runqueues vs Global Queues
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Global queues suffer catastrophic lock contention when 128 cores compete for the ready lock. Modern operating systems (Linux, FreeBSD) assign a private run-queue per CPU core, with periodic <strong>work stealing</strong> to balance loads.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-emerald-600" />
                      CPU Affinity &amp; Cache Warmth
                    </div>
                    <p className="text-stone-600 leading-relaxed">
                      Migrating a thread between cores flushes private L1/L2 caches. Linux supports soft and hard affinity (<code className="font-mono">taskset -c 0,1 ./app</code>) to pin critical tasks to specific cores and optimize L3 cache hit rates.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 text-stone-100 space-y-2 text-xs font-mono">
                  <div className="text-orange-400 font-bold font-sans">Linux Kernel Evolution: CFS to EEVDF (Linux 6.6+)</div>
                  <p className="text-stone-300 font-sans leading-relaxed">
                    The historical <strong>Completely Fair Scheduler (CFS)</strong> tracked virtual runtime (<code className="font-mono text-amber-300">vruntime</code>) on a red-black tree to ensure equitable CPU time distribution. Starting in Linux 6.6, Linux adopted <strong>EEVDF (Earliest Eligible Virtual Deadline First)</strong>, which pairs fairness with <em>latency deadlines</em>, granting immediate slices to latency-sensitive audio and UI threads without requiring heuristic latency hacks.
                  </p>
                </div>
              </div>
            </article>

            {/* UNIVERSITY REFERENCES */}
            <section className="bg-stone-100 border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-600" />
                University &amp; Kernel Research Standards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">OSTEP (Three Easy Pieces) — Chapters 7–10</h5>
                  <p className="text-stone-600 mt-1">Scheduling: Introduction, Multi-Level Feedback Queue, and Multiprocessor Scheduling.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">MIT 6.1810 Operating System Engineering</h5>
                  <p className="text-stone-600 mt-1">xv6 round-robin scheduler implementation, swtch context restore, and scheduler locks.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">Linux Kernel Scheduler Documentation</h5>
                  <p className="text-stone-600 mt-1">Official documentation for SCHED_NORMAL, EEVDF latency weights, and scheduling domains.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200">
                  <h5 className="font-bold text-stone-900">Peter Zijlstra's EEVDF Kernel RFC</h5>
                  <p className="text-stone-600 mt-1">The mathematical foundation of lag and virtual deadline scheduling in modern Linux.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: INTERACTIVE GANTT SIMULATOR & WORKBENCH */}
        {activeTab === "interactive-lab" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-orange-600" />
                    Interactive CPU Scheduling Simulator &amp; Gantt Visualizer
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Select an algorithm to dynamically generate Gantt timelines, compute turnaround ($TAT$), waiting ($WT$), and response times ($RT$) for the 4-process workload.
                  </p>
                </div>
              </div>

              {/* Algorithm Selector Buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-stone-600 uppercase tracking-wide mr-2">Algorithm:</span>
                {[
                  { id: "FCFS", label: "FCFS (First-Come First-Served)" },
                  { id: "SJF", label: "SJF (Shortest Job First)" },
                  { id: "SRTF", label: "SRTF (Preemptive SJF)" },
                  { id: "Priority", label: "Priority (Preemptive)" },
                  { id: "RR", label: "Round Robin" },
                ].map((algo) => (
                  <button
                    key={algo.id}
                    onClick={() => setSelectedAlgorithm(algo.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                      selectedAlgorithm === algo.id
                        ? "bg-orange-600 text-white border-orange-700 shadow-sm"
                        : "bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200"
                    }`}
                  >
                    {algo.label}
                  </button>
                ))}
              </div>

              {/* Round Robin Controls */}
              {selectedAlgorithm === "RR" && (
                <div className="p-4 bg-orange-50/60 border border-orange-200 rounded-xl flex items-center gap-4 text-xs">
                  <div className="font-bold text-orange-950 flex items-center gap-1.5">
                    <Timer className="w-4 h-4 text-orange-600" />
                    Round Robin Time Quantum ($q$):
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((q) => (
                      <button
                        key={q}
                        onClick={() => setRrQuantum(q)}
                        className={`px-3 py-1 rounded font-mono font-bold text-xs transition border ${
                          rrQuantum === q
                            ? "bg-orange-600 text-white border-orange-700"
                            : "bg-white text-stone-700 border-stone-300 hover:bg-stone-50"
                        }`}
                      >
                        q = {q}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-500 italic">
                    (Notice how $q=1$ minimizes initial response time, while larger $q$ reduces switching frequency)
                  </span>
                </div>
              )}

              {/* Dynamic Gantt Chart Timeline */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-700 uppercase tracking-wide flex justify-between">
                  <span>Gantt Execution Timeline (Total Duration: {simulationResults.totalTime} Time Units)</span>
                  <span className="font-mono text-orange-600">Throughput: {simulationResults.throughput} jobs/unit</span>
                </div>

                <div className="overflow-x-auto p-1 bg-stone-100 rounded-xl border border-stone-300">
                  <div className="flex items-stretch min-w-[640px] h-12 rounded-lg overflow-hidden border border-stone-400 font-mono text-xs">
                    {simulationResults.timeline.map((block, idx) => (
                      <div
                        key={idx}
                        className={`flex-1 flex flex-col items-center justify-center border-r border-stone-700/20 font-bold transition-all ${block.color}`}
                        title={`Time ${block.time} -> ${block.time + 1}: ${block.process}`}
                      >
                        <span className="text-[11px]">{block.process}</span>
                        <span className="text-[9px] opacity-75">{block.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-stone-500 px-1 font-mono">
                  <span>t = 0</span>
                  <span>t = {simulationResults.totalTime} (Completion)</span>
                </div>
              </div>

              {/* Calculated Metrics Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs text-left border border-stone-200 rounded-lg">
                  <thead className="bg-stone-100 text-stone-700 font-semibold">
                    <tr>
                      <th className="py-2.5 px-3 border-b">Process</th>
                      <th className="py-2.5 px-3 border-b">Arrival (AT)</th>
                      <th className="py-2.5 px-3 border-b">Burst (BT)</th>
                      <th className="py-2.5 px-3 border-b">Priority</th>
                      <th className="py-2.5 px-3 border-b">Start (ST)</th>
                      <th className="py-2.5 px-3 border-b">Completion (CT)</th>
                      <th className="py-2.5 px-3 border-b">Turnaround (TAT)</th>
                      <th className="py-2.5 px-3 border-b">Waiting (WT)</th>
                      <th className="py-2.5 px-3 border-b">Response (RT)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-mono">
                    {simulationResults.jobs.map((j) => (
                      <tr key={j.name} className="hover:bg-stone-50">
                        <td className="py-2 px-3 font-bold text-stone-900 flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${j.color.split(" ")[0]}`}></span>
                          {j.name}
                        </td>
                        <td className="py-2 px-3">{j.arrival}</td>
                        <td className="py-2 px-3">{j.burst}</td>
                        <td className="py-2 px-3">{j.priority}</td>
                        <td className="py-2 px-3 text-blue-700">{j.firstStart ?? "—"}</td>
                        <td className="py-2 px-3 font-bold text-stone-900">{j.completion ?? "—"}</td>
                        <td className="py-2 px-3 font-bold text-orange-700">{j.turnaround}</td>
                        <td className="py-2 px-3">{j.waiting}</td>
                        <td className="py-2 px-3 text-emerald-700 font-bold">{j.response}</td>
                      </tr>
                    ))}
                    {/* Averages Row */}
                    <tr className="bg-stone-100/80 font-bold text-stone-900 font-sans">
                      <td colSpan={6} className="py-2.5 px-3 text-right">Workload Averages:</td>
                      <td className="py-2.5 px-3 font-mono text-orange-700">{simulationResults.avgTAT.toFixed(2)}</td>
                      <td className="py-2.5 px-3 font-mono text-stone-800">{simulationResults.avgWT.toFixed(2)}</td>
                      <td className="py-2.5 px-3 font-mono text-emerald-700">{simulationResults.avgRT.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Terminal Sandbox Screen */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wide flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-orange-600" />
                    Simulated Python CLI Execution (<code className="font-mono">scheduler_sim.py</code>)
                  </div>
                  <button
                    onClick={() => executeTerminalCommand("clear")}
                    className="px-2.5 py-1 text-xs font-semibold rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                  >
                    Clear CLI
                  </button>
                </div>

                <div className="bg-stone-950 text-stone-100 rounded-xl p-4 sm:p-6 font-mono text-xs shadow-inner min-h-[280px] max-h-[440px] overflow-y-auto space-y-4">
                  <div className="text-stone-400 text-[11px] pb-2 border-b border-stone-800 flex justify-between">
                    <span>engineer@prepspaces:~/cpu-scheduling-lab$</span>
                    <span>Python 3.12 · scheduler_sim.py</span>
                  </div>

                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2 text-orange-400 font-bold">
                        <span className="text-emerald-400">user@prepspaces:~$</span>
                        <span>{item.cmd}</span>
                      </div>
                      <pre
                        className={`whitespace-pre-wrap text-[11px] leading-relaxed ${
                          item.type === "error"
                            ? "text-red-400 bg-red-950/30 p-2.5 rounded border border-red-900/50"
                            : item.type === "success"
                            ? "text-emerald-300"
                            : item.type === "warning"
                            ? "text-amber-300"
                            : "text-stone-300"
                        }`}
                      >
                        {item.out}
                      </pre>
                    </div>
                  ))}

                  {/* Live Input */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      executeTerminalCommand(customCommand);
                    }}
                    className="flex items-center gap-2 pt-2"
                  >
                    <span className="text-emerald-400 font-bold">user@prepspaces:~$</span>
                    <input
                      type="text"
                      value={customCommand}
                      onChange={(e) => setCustomCommand(e.target.value)}
                      placeholder="Type command ('python3 scheduler_sim.py', 'taskset -pc $$', 'help')..."
                      className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 placeholder:text-stone-600"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded text-[11px] font-sans font-semibold transition"
                    >
                      Run
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CAPSTONE CHECKLIST */}
        {activeTab === "checklist" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-900">
                  CPU Scheduling Simulator Capstone Checklist
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Track your mastery across all 7 implementation and quantitative analysis milestones.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-orange-100 text-orange-800">
                  {completedChecklistCount} of 7 Completed ({Math.round((completedChecklistCount / 7) * 100)}%)
                </span>
                <button
                  onClick={() => {
                    const report = `# PrepSpaces Module 6: CPU Scheduling and Performance
## Lab Completion Report
- [${checklist.simFiveAlgos ? "x" : " "}] Simulate FCFS, SJF, SRTF, Priority, and Round Robin in scheduler_sim.py
- [${checklist.calcMetrics ? "x" : " "}] Accurately calculate Turnaround, Waiting, and Response times per process
- [${checklist.ganttTimeline ? "x" : " "}] Generate Gantt chart timelines for all algorithms
- [${checklist.sameWorkload ? "x" : " "}] Benchmark all algorithms against identical standard workloads
- [${checklist.overheadModel ? "x" : " "}] Model context switch overhead U = q / (q + c)
- [${checklist.starvationAging ? "x" : " "}] Analyze priority starvation and implement aging mechanism
- [${checklist.submitReport ? "x" : " "}] Submit comparative performance analysis report

Milestones: ${completedChecklistCount}/7 verified.
Timestamp: ${new Date().toISOString()}`;
                    navigator.clipboard.writeText(report);
                    alert("Lab completion report copied to clipboard!");
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy Report
                </button>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              {[
                {
                  key: "simFiveAlgos",
                  title: "1. Simulate five classical algorithms in scheduler_sim.py",
                  desc: "Implement FCFS, Shortest Job First, Shortest Remaining Time First, Priority Scheduling, and Round Robin.",
                },
                {
                  key: "calcMetrics",
                  title: "2. Accurately calculate Turnaround, Waiting, and Response Times",
                  desc: "Implement TAT = CT - AT, WT = TAT - BT, and RT = ST - AT with per-process and average metrics.",
                },
                {
                  key: "ganttTimeline",
                  title: "3. Generate and verify Gantt chart timelines",
                  desc: "Output step-by-step CPU execution intervals to verify tie-breaking, preemption, and quantum slicing.",
                },
                {
                  key: "sameWorkload",
                  title: "4. Benchmark all algorithms against identical workloads",
                  desc: "Ensure fair comparisons by feeding the exact same arrival/burst distributions to every algorithm.",
                },
                {
                  key: "overheadModel",
                  title: "5. Model context switch overhead and quantum trade-offs",
                  desc: "Analyze how useful CPU fraction U = q / (q + c) degrades as quantum size shrinks.",
                },
                {
                  key: "starvationAging",
                  title: "6. Demonstrate starvation and mitigation via aging",
                  desc: "Show how a continuous stream of high-priority tasks stalls low-priority jobs, and verify aging recovery.",
                },
                {
                  key: "submitReport",
                  title: "7. Submit comparative performance analysis report",
                  desc: "Answer the 6 core research questions and explain the architectural transition to Linux EEVDF.",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleChecklist(item.key)}
                  className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition ${
                    checklist[item.key]
                      ? "bg-emerald-50/60 border-emerald-200"
                      : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  <div className="pt-0.5">
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      onChange={() => {}}
                      className="rounded text-orange-600 focus:ring-orange-500 w-4 h-4 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${checklist[item.key] ? "text-emerald-950" : "text-stone-900"}`}>
                      {item.title}
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: KNOWLEDGE ASSESSMENT */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-100 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-stone-900">
                  Module 6 Knowledge Check (6 Questions)
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Validate your understanding of CPU scheduling metrics, preemption, the convoy effect, quantum tuning, and CPU affinity.
                </p>
              </div>
              {quizSubmitted && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold font-mono px-3 py-1.5 rounded-full bg-orange-100 text-orange-800">
                    Score: {quizScore} / {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </span>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q) => {
                const selectedOpt = quizAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition-all ${
                      quizSubmitted
                        ? isCorrect
                          ? "bg-emerald-50/40 border-emerald-300"
                          : "bg-red-50/40 border-red-300"
                        : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <div className="font-bold text-sm text-stone-900 mb-3">
                      {q.question}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                          } else if (selectedOpt === optIdx) {
                            btnStyle = "bg-red-100 border-red-400 text-red-950 line-through";
                          } else {
                            btnStyle = "bg-white border-stone-200 text-stone-400 opacity-60";
                          }
                        } else if (selectedOpt === optIdx) {
                          btnStyle = "bg-orange-100 border-orange-400 text-orange-950 font-bold";
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={quizSubmitted}
                            onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                            className={`w-full text-left p-2.5 rounded-lg border text-xs transition flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 pt-3 border-t border-stone-200/60 text-xs text-stone-600 leading-relaxed">
                        <strong className="text-stone-800">Explanation: </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-xs tracking-wide transition shadow-sm ${
                    Object.keys(quizAnswers).length === quizQuestions.length
                      ? "bg-orange-600 hover:bg-orange-500 text-white cursor-pointer"
                      : "bg-stone-300 text-stone-500 cursor-not-allowed"
                  }`}
                >
                  {Object.keys(quizAnswers).length === quizQuestions.length
                    ? "Check Answers (Submit Quiz)"
                    : `Answer all ${quizQuestions.length} questions to submit (${Object.keys(quizAnswers).length}/${quizQuestions.length})`}
                </button>
              </div>
            ) : null}
          </div>
        )}

        {/* Footer Navigation Bar */}
        <section className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/os/processes")}
            className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Module 5 (Processes &amp; Lifecycle)
          </button>

          <div className="text-xs text-stone-500 font-medium">
            Module 6 of 15 · PrepSpaces Operating Systems Master Course
          </div>

          <button
            onClick={() => navigate("/learning/os/threads")}
            className="flex items-center gap-2 text-xs font-semibold text-orange-600 hover:text-orange-700 transition"
          >
            Next: Module 7 (Threads &amp; Multithreading)
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </main>

      {/* Floating AI Tutor Drawer */}
      {showAiTutor && (
        <aside className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-stone-300 overflow-hidden flex flex-col h-[520px]">
          <div className="bg-stone-900 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="font-semibold text-xs tracking-wide">Nova Systems AI Tutor</span>
            </div>
            <button
              onClick={() => setShowAiTutor(false)}
              className="text-stone-400 hover:text-white text-xs font-bold"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-hidden p-2">
            <LearningRo
              courseId="os"
              moduleId="scheduling"
              moduleTitle="CPU Scheduling and Performance"
            />
          </div>
        </aside>
      )}
    </div>
  );
}
