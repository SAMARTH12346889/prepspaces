import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Componets/Logo";
import {
  Home,
  BookOpen,
  Mic,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Terminal,
  Cloud,
  Compass,
  Network,
  Cpu,
  Globe,
} from "lucide-react";

export default function Landingpage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Real available learning tracks
  const availableTracks = [
    {
      id: "system-design",
      title: "System Design Masterclass",
      subtitle: "Scalability, Distributed Systems & Trade-offs",
      route: "/learning/system-design",
      icon: Network,
      color: "from-zinc-900 via-stone-800 to-orange-600",
      tag: "Architecture",
    },
    {
      id: "operating-systems",
      title: "Operating Systems Master Course",
      subtitle: "Kernel Internals, Memory & Low-Level Systems",
      route: "/learning/os",
      icon: Cpu,
      color: "from-stone-900 via-orange-950 to-orange-600",
      tag: "Core Systems",
    },
    {
      id: "networks",
      title: "Computer Networks & Internet",
      subtitle: "Protocols, Architecture, Sockets & Performance",
      route: "/learning/networks",
      icon: Globe,
      color: "from-stone-900 via-zinc-800 to-orange-600",
      tag: "Networking",
    },
    {
      id: "devops",
      title: "DevOps & SRE Track",
      subtitle: "Linux, Docker, Kubernetes & CI/CD",
      route: "/learning/devops/linux",
      icon: Terminal,
      color: "from-stone-900 to-orange-600",
      tag: "Infrastructure",
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      subtitle: "AWS, Azure, GCP & Multi-Cloud Architecture",
      route: "/learning/cloud",
      icon: Cloud,
      color: "from-orange-600 to-amber-600",
      tag: "Cloud Systems",
    },
  ];

  // Real available entry topics
  const featuredTopics = [
    {
      title: "Introduction to Architectural Thinking",
      track: "System Design",
      route: "/learning/system-design",
      tag: "Architecture",
    },
    {
      title: "OS Foundations & Hardware Mediation",
      track: "Operating Systems",
      route: "/learning/os",
      tag: "Core Systems",
    },
    {
      title: "Packet Switching & Internet Architecture",
      track: "Computer Networks",
      route: "/learning/networks",
      tag: "Networking",
    },
    {
      title: "Linux Administration & Permissions",
      track: "DevOps & SRE",
      route: "/learning/devops/linux",
      tag: "Foundations",
    },
    {
      title: "Cloud Foundations & Datacenters",
      track: "Cloud Computing",
      route: "/learning/cloud",
      tag: "Architecture",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#1c1917] flex antialiased font-sans selection:bg-[#f97316] selection:text-white">
      {/* Soft Ambient Warm Glow Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-orange-400/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-amber-400/[0.03] rounded-full blur-[150px]" />
        <div className="absolute -bottom-20 left-1/3 w-[600px] h-80 bg-orange-500/[0.03] rounded-full blur-[160px]" />
      </div>

      {/* Mobile Drawer Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* ================= LEFT SIDEBAR ================= */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 flex flex-col border-r border-[#e7e3da] bg-white/80 backdrop-blur-2xl p-5 transition-transform duration-300 md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Brand Logo */}
          <div className="flex items-center justify-between mb-8 px-3">
            <div
              className="flex items-center cursor-pointer py-1"
              onClick={() => navigate("/")}
              title="PrepSpaces Dashboard"
            >
              <Logo size="md" />
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-1 text-stone-400 hover:text-stone-900 md:hidden cursor-pointer"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Label */}
          <div className="mb-3 px-3 text-[11px] font-bold tracking-[0.16em] text-stone-400 uppercase">
            Workspace
          </div>

          {/* Nav Items - Functional and Focused */}
          <nav className="space-y-1.5">
            {/* Active Overview item: Solid Orange Pill */}
            <button
              onClick={() => {
                setSidebarOpen(false);
                navigate("/");
              }}
              className="flex w-full items-center gap-3 rounded-2xl bg-[#f97316] px-4 py-3 text-sm font-bold text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)] transition-all hover:bg-[#ea580c] cursor-pointer"
            >
              <Home size={18} className="text-white" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => {
                setSidebarOpen(false);
                navigate("/learning");
              }}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-semibold text-stone-600 hover:bg-stone-200/50 hover:text-stone-900 transition-all cursor-pointer"
            >
              <BookOpen size={18} className="text-stone-400" />
              <span>Study</span>
            </button>

            {/* Interviews with Coming Soon badge */}
            <button
              onClick={() => {
                setSidebarOpen(false);
                navigate("/interview");
              }}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold text-stone-600 hover:bg-stone-200/50 hover:text-stone-900 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <Mic size={18} className="text-stone-400 group-hover:text-stone-600 transition-colors" />
                <span>Interviews</span>
              </div>
              <span className="rounded-full bg-orange-100/80 border border-orange-200/80 px-2 py-0.5 text-[10px] font-bold text-[#ea580c]">
                Coming Soon
              </span>
            </button>
          </nav>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="flex-1 flex flex-col min-w-0 z-10">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#e7e3da] bg-[#f6f4ee]/80 px-6 py-4 backdrop-blur-xl md:px-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-[#e7e3da] bg-white/80 p-2 text-stone-600 hover:bg-stone-200/50 md:hidden shadow-2xs cursor-pointer"
              aria-label="Open sidebar"
            >
              <Menu size={20} />
            </button>
            <div className="md:hidden">
              <Logo size="xs" onClick={() => navigate("/")} />
            </div>
            <div>
              <p className="hidden md:block text-xs font-semibold text-stone-500">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <h1 className="text-lg font-black tracking-tight text-[#18181b] sm:text-2xl md:text-3xl">
                Welcome to PrepSpaces
              </h1>
              <p className="hidden sm:block text-xs text-stone-500 mt-0.5">
                Technical interview preparation, structured engineering tracks, and architecture mastery.
              </p>
            </div>
          </div>

          {/* Header Right Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/learning")}
              className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white/90 px-4 py-2.5 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer active:scale-95"
            >
              <BookOpen size={15} className="text-[#f97316]" />
              <span>Browse Tracks</span>
            </button>
          </div>
        </header>

        {/* Dashboard Main Content */}
        <main className="flex-1 p-6 space-y-6 md:p-10 max-w-7xl mx-auto w-full">
          {/* ================= HERO CARD: BLACK FEATURE CARD ================= */}
          <section className="relative overflow-hidden rounded-3xl bg-[#18181b] border border-stone-800 p-7 md:p-9 text-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            {/* Ambient geometric subtle glow rings on right */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 rounded-full border border-orange-500/10 bg-orange-500/[0.04] blur-2xl" />
            <div className="pointer-events-none absolute right-12 top-6 h-60 w-60 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute right-24 top-16 h-44 w-44 rounded-full border border-orange-400/20" />

            <div className="relative z-10 max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                <BookOpen size={13} className="text-[#f97316]" />
                <span>YOUR LEARNING SPACE</span>
              </div>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white md:text-4xl leading-tight">
                Build skills. Learn by doing.
              </h2>

              <p className="mt-3 text-xs md:text-sm text-stone-300 leading-relaxed max-w-xl">
                Explore structured technical learning tracks, understand core concepts, and develop practical skills through focused lessons.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate("/learning")}
                  className="flex items-center gap-2.5 rounded-xl bg-[#f97316] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-[#ea580c] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <BookOpen size={16} />
                  <span>Explore Learning Tracks</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* ================= 2-COLUMN GRID (WHITE GLASS SURFACES) ================= */}
          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            {/* 1. LEARNING PATHS CARD */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-7 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-400">
                    LEARNING PATHS
                  </span>
                  <span className="rounded-full bg-orange-100 text-orange-700 px-3 py-0.5 text-xs font-bold">
                    5 Tracks Available
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#18181b]">Your Technical Journey</h3>
                <p className="mt-1 text-xs md:text-sm text-stone-500 leading-relaxed">
                  Explore system design, DevOps, cloud computing, and programming fundamentals through structured learning modules.
                </p>

                {/* Real Available Tracks */}
                <div className="my-5 space-y-3">
                  {availableTracks.map((track) => {
                    const Icon = track.icon;
                    return (
                      <div
                        key={track.id}
                        onClick={() => navigate(track.route)}
                        className="group flex items-center justify-between rounded-2xl border border-stone-200/60 bg-stone-50/70 p-3.5 cursor-pointer transition-all hover:border-orange-300 hover:bg-white hover:shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${track.color} text-white shadow-xs`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-[#18181b] group-hover:text-[#ea580c] transition">
                              {track.title}
                            </h4>
                            <p className="text-[11px] text-stone-500 line-clamp-1">
                              {track.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline-block rounded-md border border-stone-200 bg-white px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-stone-600">
                            {track.tag}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-stone-400 group-hover:translate-x-0.5 group-hover:text-[#ea580c] transition"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-[#e7e3da]/70">
                <button
                  onClick={() => navigate("/learning")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] hover:text-[#c2410c] transition cursor-pointer"
                >
                  <span>Browse all learning tracks</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </section>

            {/* 2. EXPLORE TOPICS CARD */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-7 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-400">
                    EXPLORE
                  </span>
                  <span className="rounded-full bg-stone-100 text-stone-700 px-3 py-0.5 text-xs font-bold">
                    Self-Paced
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#18181b]">Discover Your Next Topic</h3>
                <p className="mt-1 text-xs md:text-sm text-stone-500 leading-relaxed">
                  Choose a learning track and continue exploring technical concepts at your own pace.
                </p>

                {/* Real Available Starter Topics */}
                <div className="my-5 space-y-3">
                  {featuredTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      onClick={() => navigate(topic.route)}
                      className="group flex items-center justify-between rounded-2xl border border-stone-200/60 bg-stone-50/70 p-3.5 cursor-pointer transition-all hover:border-orange-300 hover:bg-white hover:shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#ea580c]">
                          <Compass size={18} />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#18181b] group-hover:text-[#ea580c] transition">
                            {topic.title}
                          </h4>
                          <p className="text-[11px] text-stone-500">
                            {topic.track}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline-block rounded-md border border-stone-200 bg-white px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-stone-600">
                          {topic.tag}
                        </span>
                        <ChevronRight
                          size={16}
                          className="text-stone-400 group-hover:translate-x-0.5 group-hover:text-[#ea580c] transition"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#e7e3da]/70">
                <button
                  onClick={() => navigate("/learning")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ea580c] hover:text-[#c2410c] transition cursor-pointer"
                >
                  <span>Explore Study section</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </section>
          </div>

          {/* ================= CURRICULUM HIGHLIGHTS STRIP ================= */}
          <section className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-8 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-400">
                  CURRICULUM OVERVIEW
                </span>
                <h3 className="text-xl font-extrabold text-[#18181b] mt-1">
                  Ready to start learning?
                </h3>
                <p className="mt-1 text-xs md:text-sm text-stone-500 max-w-xl">
                  Dive into Linux administration, container orchestration, multi-cloud architectures, and scalable system design.
                </p>
              </div>

              <button
                onClick={() => navigate("/learning")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#f97316] to-[#ea580c] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_4px_16px_rgba(249,115,22,0.3)] transition-all hover:scale-105 active:scale-95 cursor-pointer self-start md:self-auto"
              >
                <BookOpen size={16} />
                <span>Go to Study Curriculum</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </section>

          {/* ================= SEO INTERNAL LINKING FOOTER ================= */}
          <footer className="mt-12 pt-8 border-t border-[#e7e3da] text-stone-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-wider mb-3 text-[11px]">
                  Core Curriculum
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/learning" className="hover:text-[#ea580c] transition">
                      Full Engineering Syllabus
                    </Link>
                  </li>
                  <li>
                    <Link to="/learn/system-design" className="hover:text-[#ea580c] transition">
                      System Design Course for Beginners
                    </Link>
                  </li>
                  <li>
                    <Link to="/learn/cloud-computing" className="hover:text-[#ea580c] transition">
                      Cloud Computing Course
                    </Link>
                  </li>
                  <li>
                    <Link to="/learn/devops" className="hover:text-[#ea580c] transition">
                      DevOps Course & SRE
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-wider mb-3 text-[11px]">
                  System Design Tracks
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/learning/system-design/architecture" className="hover:text-[#ea580c] transition">
                      Microservices vs Monoliths
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning/system-design/databases" className="hover:text-[#ea580c] transition">
                      SQL, NoSQL & B-Trees
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning/system-design/caching" className="hover:text-[#ea580c] transition">
                      Distributed Caching & Redis
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning/system-design/consensus" className="hover:text-[#ea580c] transition">
                      Consensus & Raft Protocol
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-wider mb-3 text-[11px]">
                  Cloud Infrastructure
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/learning/cloud" className="hover:text-[#ea580c] transition">
                      Cloud Foundations & DC
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning/cloud/networking" className="hover:text-[#ea580c] transition">
                      VPCs, Subnets & Gateways
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning/cloud/aws" className="hover:text-[#ea580c] transition">
                      AWS Architecture Mastery
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning/cloud/security" className="hover:text-[#ea580c] transition">
                      IAM & Cloud Governance
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 uppercase tracking-wider mb-3 text-[11px]">
                  DevOps & SRE
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/learning/devops/linux" className="hover:text-[#ea580c] transition">
                      Linux Administration
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning/devops/docker" className="hover:text-[#ea580c] transition">
                      Docker Containerization
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning/devops/k8s" className="hover:text-[#ea580c] transition">
                      Kubernetes Orchestration
                    </Link>
                  </li>
                  <li>
                    <Link to="/learning/devops/cicd" className="hover:text-[#ea580c] transition">
                      CI/CD Pipelines & GitOps
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500">
              <div className="flex items-center gap-2">
                <Logo size="xs" />
                <span>— Technical Interview Preparation & Architecture Mastery</span>
              </div>
              <div className="mt-2 sm:mt-0 font-mono">
                © {new Date().getFullYear()} PrepSpaces. All rights reserved.
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
