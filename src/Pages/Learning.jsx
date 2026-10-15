import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Cloud,
  Terminal,
  Network,
  CheckCircle2,
  Compass,
  Cpu,
  Globe,
} from "lucide-react";
import { useSafeBack } from "../utils/navigation";
import Logo from "../Componets/Logo";

const learningTracks = [
  {
    id: "system-design",
    title: "System Design Masterclass",
    tagline: "Architecture, Scalability & Resilience at Production Scale",
    description:
      "Master large-scale distributed systems, architectural thinking, capacity planning, monoliths vs microservices, high availability, fault tolerance, and trade-off analysis from foundational principles to production-grade engineering.",
    icon: Network,
    route: "/learning/system-design",
    tag: "Architecture & Scale",
    modulesCount: "24 In-Depth Modules",
    color: "from-zinc-900 via-stone-800 to-orange-600",
    badgeColor: "text-orange-700 bg-orange-50 border-orange-200",
    highlights: [
      "Distributed Consensus & Raft",
      "Multi-Region Replication & DR",
      "Kafka Streaming & Sagas",
      "AI Serving & Vector Retrieval",
      "Final Engineering Capstone",
    ],
  },
  {
    id: "devops",
    title: "DevOps & SRE Track",
    tagline: "Infrastructure, Cloud Automation & Production Reliability",
    description:
      "Learn production-grade DevOps and Site Reliability Engineering through Linux, Git, Docker, Kubernetes, Terraform, CI/CD, GitOps, cloud-native infrastructure, observability, incident response, SLOs, and real-world production deployment projects.",
    icon: Terminal,
    route: "/learning/devops/linux",
    tag: "Infrastructure & Automation",
    modulesCount: "12 Hands-on Modules",
    color: "from-stone-900 via-zinc-800 to-orange-600",
    badgeColor: "text-orange-700 bg-orange-50 border-orange-200",
    highlights: [
      "Linux Admin & System Internals",
      "Docker Containers & Kubernetes",
      "Terraform Infrastructure as Code",
      "CI/CD Pipelines & GitOps",
      "SLOs, Error Budgets & SRE",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Computing & Systems",
    tagline: "Enterprise Architecture across AWS, Azure & Google Cloud",
    description:
      "Master cloud architecture and infrastructure across AWS, Microsoft Azure, and Google Cloud. Explore networking, compute, storage, databases, security, cloud economics, multi-cloud systems, and distributed architectures through practical scenarios.",
    icon: Cloud,
    route: "/learning/cloud",
    tag: "Systems & Multi-Cloud",
    modulesCount: "13 Architecture Modules",
    color: "from-orange-600 via-amber-600 to-orange-500",
    badgeColor: "text-orange-700 bg-orange-50 border-orange-200",
    highlights: [
      "VPC Networking & Routing",
      "Compute & Serverless Functions",
      "Cloud Storage & Managed DBs",
      "Multi-Cloud Architecture",
      "Cloud Economics & FinOps",
    ],
  },
  {
    id: "operating-systems",
    title: "Operating Systems Master Course",
    tagline: "Kernel Internals, Hardware Mediation & University-Level Computing",
    description:
      "Master operating systems internals, kernel architectures, hardware privilege levels, process scheduling, virtual memory, concurrency, file systems, and low-level Linux systems programming based on MIT, Stanford, and CMU curricula.",
    icon: Cpu,
    route: "/learning/os",
    tag: "Core Systems",
    modulesCount: "24 Comprehensive Modules",
    color: "from-stone-900 via-orange-950 to-orange-600",
    badgeColor: "text-orange-700 bg-orange-50 border-orange-200",
    highlights: [
      "Hardware Abstraction & Kernel Rings",
      "Process Lifecycle & CPU Scheduling",
      "Virtual Memory & TLB Translation",
      "Kernel Architectures: Linux vs Windows vs seL4",
      "Interactive Linux Terminal Inspection Labs",
    ],
  },
  {
    id: "computer-networks",
    title: "Computer Networks & Internet",
    tagline: "University-Level Architecture, Protocols & Systems Engineering",
    description:
      "Master computer networks and Internet engineering from physical transmission and Ethernet switching to IPv4/IPv6, BGP routing, TCP/UDP sockets, DNS, HTTP/3, Wireshark packet analysis, and network cybersecurity based on MIT, Stanford, UC Berkeley, CMU, and Princeton curricula.",
    icon: Globe,
    route: "/learning/networks",
    tag: "Networking & Protocols",
    modulesCount: "University Course",
    color: "from-stone-900 via-zinc-800 to-orange-600",
    badgeColor: "text-orange-700 bg-orange-50 border-orange-200",
    highlights: [
      "Packet Switching & End-to-End Delays",
      "OSI & TCP/IP Header Encapsulation",
      "Network Topologies & Leaf-Spine Architecture",
      "Interactive Wireshark Packet Inspection",
      "Real-World CLI Diagnostics & Network Security",
    ],
  },
];

export default function Learning() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/");

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] px-6 py-8 md:px-12 antialiased selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Top Header / Back Button - Unified design language */}
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goBack("/")}
            className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white/80 px-4 py-2 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs backdrop-blur-md active:scale-95 cursor-pointer"
            aria-label="Back to Overview"
          >
            <ArrowLeft size={16} />
            <span>Back to Overview</span>
          </button>

          <Logo size="sm" suffix="Study" />
        </div>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/90 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#ea580c] backdrop-blur-sm mb-3">
            <BookOpen size={13} className="text-[#f97316]" />
            <span>Curriculum & Skill Tracks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18181b]">
            Structured Technical Learning Tracks
          </h1>

          <p className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed text-stone-600">
            Comprehensive, production-grade technical curriculums designed for real-world mastery. Explore in-depth architectural thinking, distributed systems, site reliability engineering, multi-cloud architecture, and object-oriented paradigms.
          </p>
        </div>

        {/* Metric Badges Banner */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3 p-2 rounded-2xl bg-white/70 border border-[#e7e3da] backdrop-blur-md shadow-2xs">
          <div className="p-3 text-center">
            <div className="text-xl sm:text-2xl font-black text-stone-900 font-mono">5</div>
            <div className="text-[11px] text-stone-500 font-medium mt-0.5">Comprehensive Tracks</div>
          </div>
          <div className="p-3 text-center border-l border-stone-200/70">
            <div className="text-xl sm:text-2xl font-black text-orange-600 font-mono">75+</div>
            <div className="text-[11px] text-stone-500 font-medium mt-0.5">In-Depth Modules</div>
          </div>
          <div className="p-3 text-center border-l border-stone-200/70">
            <div className="text-xl sm:text-2xl font-black text-stone-900 font-mono">100+</div>
            <div className="text-[11px] text-stone-500 font-medium mt-0.5">Interactive Simulators</div>
          </div>
          <div className="p-3 text-center border-l border-stone-200/70">
            <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">100%</div>
            <div className="text-[11px] text-stone-500 font-medium mt-0.5">Production-Grade</div>
          </div>
        </div>

        {/* LEARNING TRACKS GRID - Spacious, Balanced 2-Column Layout */}
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {learningTracks.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onClick={() => navigate(card.route)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#e7e3da] bg-white/90 p-7 sm:p-8 backdrop-blur-xl shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-[0_20px_45px_rgba(249,115,22,0.12)] cursor-pointer"
              >
                <div className="flex flex-col flex-1">
                  {/* Card Header with Icon, Tag and Duration */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>

                    <div className="flex flex-wrap items-center justify-end gap-2">
                      <span className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 font-mono text-[11px] font-bold text-stone-600">
                        {card.modulesCount}
                      </span>
                      <span className={`rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${card.badgeColor}`}>
                        {card.tag}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-2xl font-bold tracking-tight text-[#18181b] group-hover:text-[#f97316] transition-colors duration-200">
                    {card.title}
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-orange-700/90 font-sans">
                    {card.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-stone-600 flex-1">
                    {card.description}
                  </p>

                  {/* Highlights Pills */}
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-stone-400 mb-2">
                      Core Areas Covered:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {card.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-lg bg-stone-100/80 px-2.5 py-1 text-[11px] font-medium text-stone-700 group-hover:bg-orange-50 group-hover:text-orange-800 transition-colors"
                        >
                          <CheckCircle2 size={11} className="text-orange-500 shrink-0" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-7 flex items-center justify-end pt-4 border-t border-[#e7e3da]/80">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#ea580c] group-hover:text-[#c2410c] transition-colors">
                      Explore Track
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-[#ea580c] group-hover:bg-[#f97316] group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shadow-2xs">
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}