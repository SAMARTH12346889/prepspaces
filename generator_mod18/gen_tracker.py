# -*- coding: utf-8 -*-
"""
Module 18 Completion Tracker, Learning Resources, Final Summary, and Bottom Navigation.
Zero information loss.
"""

def generate_tracker_and_footer():
    return '''
      {/* ============================================================== */}
      {/* PART 28: RECOMMENDED LEARNING RESOURCES                       */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 28
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Recommended Official Learning Resources
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Industry standards, static analysis engines, vulnerability registries, and security CTFs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "OpenZeppelin Contracts Documentation",
              category: "Security Standards",
              desc: "Battle-tested libraries for AccessControl, ReentrancyGuard, SafeERC20, and Initializable proxies.",
              link: "https://docs.openzeppelin.com/contracts/"
            },
            {
              title: "Slither Static Analyzer",
              category: "Static Analysis",
              desc: "Trail of Bits static analysis framework with 80+ Solidity AST detectors and printer plugins.",
              link: "https://github.com/crytic/slither"
            },
            {
              title: "The Foundry Book",
              category: "Testing & Fuzzing",
              desc: "Official documentation for property-based fuzzing, invariant testing, and differential EVM testing.",
              link: "https://book.getfoundry.sh/"
            },
            {
              title: "SWC Registry (Smart Contract Weakness)",
              category: "Vulnerability Taxonomy",
              desc: "Standardized taxonomy and code samples of smart contract weaknesses (SWC-101 to SWC-136).",
              link: "https://swcregistry.io/"
            },
            {
              title: "OpenZeppelin Ethernaut",
              category: "Interactive CTF",
              desc: "Hands-on Web3 wargame covering reentrancy, delegatecall, storage collisions, and access control hacks.",
              link: "https://ethernaut.openzeppelin.com/"
            },
            {
              title: "Damn Vulnerable DeFi",
              category: "Advanced DeFi CTF",
              desc: "Complex security challenges focusing on flash loans, oracle manipulation, governance, and ERC-4626.",
              link: "https://www.damnvulnerabledefi.xyz/"
            }
          ].map((res, idx) => (
            <a
              key={idx}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-xl border border-[#e7e3da] hover:border-amber-500 hover:shadow-sm transition flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {res.category}
                </span>
                <h4 className="text-sm font-bold text-neutral-900 mt-2 group-hover:text-amber-800 transition flex items-center justify-between">
                  <span>{res.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-600 transition" />
                </h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {res.desc}
                </p>
              </div>
              <span className="text-[11px] font-mono text-neutral-400 mt-3 block group-hover:text-amber-700">
                Explore Resource &rarr;
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* FINAL SUMMARY & CENTRAL ENGINEERING TAKEAWAY                   */}
      {/* ============================================================== */}
      <section className="p-6 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-4">
        <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-amber-700" />
          <span>Module 18 Final Summary & Core Security Principle</span>
        </h3>
        <p className="text-xs text-neutral-700 leading-relaxed">
          In this module, you explored smart contract systems from an adversarial perspective. You conducted systematic threat modeling, dissected classic and novel vulnerabilities (reentrancy, flash loan oracle manipulation, delegatecall storage collisions, and arithmetic precision errors), executed static analysis with Slither, and practiced invariant fuzzing with Foundry.
        </p>
        <div className="p-4 bg-white rounded-xl border border-amber-300 shadow-sm text-xs text-amber-950 font-medium space-y-1">
          <div className="text-[11px] font-mono uppercase font-bold text-amber-800">
            Central Security Engineering Principle
          </div>
          <p className="leading-relaxed">
            "In Web3, smart contracts manage bearer financial assets on an immutable, public execution layer where transactions are irreversible and automated adversaries operate 24/7. True security cannot be patched after deployment; it requires continuous threat modeling, strict adherence to the Checks-Effects-Interactions pattern, defense-in-depth access controls, invariant fuzz testing, and adversarial audits before a single dollar of user funds is accepted."
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* INTERACTIVE 28-OBJECTIVE COMPLETION CHECKLIST                  */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Progress Tracker
              </span>
              <span className="text-xs font-mono text-neutral-500 font-bold">
                {checkedCount} / {checklistItems.length} Complete ({completionPercentage}%)
              </span>
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Module 18 Security & Auditing Competency Checklist
            </h3>
          </div>
          <button
            onClick={handleResetChecklist}
            className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 underline self-start sm:self-auto"
          >
            Reset Progress
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-neutral-200 rounded-full overflow-hidden">
          <div
            style={{ width: `${completionPercentage}%` }}
            className="h-full bg-amber-600 transition-all duration-300"
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
          {checklistItems.map((item) => {
            const isChecked = !!completedObjectives[item.id];
            return (
              <button
                key={item.id}
                onClick={() => handleToggleObjective(item.id)}
                className={`p-3 rounded-xl border text-left text-xs transition flex items-start gap-3 ${
                  isChecked
                    ? "bg-amber-50/60 border-amber-300 text-amber-950 font-medium"
                    : "bg-white border-[#e7e3da] text-neutral-700 hover:bg-[#f6f4ee]"
                }`}
              >
                <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                  isChecked ? "bg-amber-600 border-amber-600 text-white" : "border-neutral-300 bg-white"
                }`}>
                  {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <span className="leading-relaxed">{item.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* BOTTOM NAVIGATION: PREVIOUS & NEXT MODULE LINKS                 */}
      {/* ============================================================== */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e7e3da]">
        <Link
          to="/learning/blockchain/dex-lending"
          className="w-full sm:w-auto p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col text-left"
        >
          <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
            &larr; Previous Module
          </span>
          <span className="text-sm font-bold text-neutral-900 mt-1">
            Module 17: Decentralized Exchanges & Lending Protocols
          </span>
        </Link>

        <Link
          to="/learning/blockchain/layer-2-scaling"
          className="w-full sm:w-auto p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-end text-right"
        >
          <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
            Next Module &rarr;
          </span>
          <span className="text-sm font-bold text-neutral-900 mt-1">
            Module 19: Layer 2 Scaling & Rollup Architecture
          </span>
        </Link>
      </div>
    '''
