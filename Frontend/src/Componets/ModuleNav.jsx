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
      : CLOUD_MODULES;

  const defaultFallback =
    currentModuleId === (track === "devops" ? "linux" : track === "system-design" ? "intro" : "cloud")
      ? "/learning"
      : track === "devops"
      ? "/learning/devops/linux"
      : track === "system-design"
      ? "/learning/system-design"
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
            <Logo size="xs" suffix={track === "devops" ? "DevOps" : track === "system-design" ? "System Design" : "Cloud"} />
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
