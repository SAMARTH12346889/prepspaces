# projectx/generator_mod16/gen_tracker.py
"""
Tracker & Summary generator for Module 16: Decentralized Finance (DeFi) Architecture
Includes 26-objective interactive checklist, Module 16 summary, central engineering principle, and 6 official learning resources.
"""

def generate_tracker():
    return r'''
      {/* ------------------------------------------------------------- */}
      {/* TAB 5: MASTERY TRACKER & LEARNING RESOURCES                   */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "tracker" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Competency Matrix
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                26 Verified Objectives • LocalStorage Persistence
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Module 16 Competency Tracker & Curated Resources
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Track your mastery across all 26 core architectural competencies of Module 16.
              Your progress is saved locally in your browser. Complete every objective to graduate to
              advanced smart contract security auditing and capstone protocol development.
            </p>

            {/* Progress Bar & Actions */}
            <div className="mt-6 p-4 sm:p-6 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Overall Completion Progress
                </span>
                <span className="text-xs font-mono font-bold text-amber-700">
                  {completedCount} / {CHECKLIST_ITEMS.length} Objectives Completed ({progressPercentage}%)
                </span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-amber-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
                <button
                  onClick={handleMarkAllChecklist}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition"
                >
                  Mark All Complete
                </button>
                <button
                  onClick={handleResetChecklist}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-white text-neutral-700 transition"
                >
                  Reset Progress
                </button>
              </div>
            </div>
          </div>

          {/* 26-OBJECTIVE CHECKLIST GRID */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 border-b border-[#e7e3da] pb-3">
              Core Competencies Checklist (26 Items)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {CHECKLIST_ITEMS.map((item, idx) => {
                const isChecked = !!checklistProgress[idx];
                return (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition cursor-pointer text-xs leading-relaxed ${
                      isChecked
                        ? "border-green-300 bg-green-50/30 text-green-950 font-medium"
                        : "border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 text-neutral-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleChecklist(idx)}
                      className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 border-neutral-300"
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* MODULE SUMMARY & CENTRAL ENGINEERING PRINCIPLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Module Recap</span>
              <h3 className="text-xl font-bold text-neutral-900">Module 16 Architectural Summary</h3>
              <div className="text-xs sm:text-sm text-neutral-700 space-y-3 leading-relaxed">
                <p>
                  Module 16 establishes the complete technical and economic foundation of decentralized finance.
                  You have explored how smart contracts implement non-custodial financial services across automated market makers,
                  pooled lending markets, and yield strategies.
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-neutral-600">
                  <li><strong>Automated Market Makers:</strong> Constant product math (<code className="font-mono">x * y = k</code>) replaces order books with pooled liquidity.</li>
                  <li><strong>Lending & Collateral:</strong> Overcollateralization and Health Factor triggers protect protocols from bad debt.</li>
                  <li><strong>Capital Efficiency:</strong> Flash loans provide single-transaction uncollateralized capital for arbitrage and self-liquidation.</li>
                  <li><strong>Impermanent Loss:</strong> Divergence curves quantify the opportunity cost of LPing against market price shifts.</li>
                  <li><strong>Composability:</strong> Open protocols assemble like Money Legos to create complex synthetic products.</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50/50 rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Core Axiom</span>
              <h3 className="text-xl font-bold text-amber-950">Central Engineering Principle</h3>
              <blockquote className="p-4 bg-white/80 rounded-xl border-l-4 border-amber-600 text-xs sm:text-sm italic text-amber-900 leading-relaxed">
                "DeFi developers must understand both smart contract programming and the financial mathematics governing the protocol.
                Correct code alone is not enough to create a secure financial system."
              </blockquote>
              <p className="text-xs text-amber-800 leading-relaxed">
                A protocol can have 100% test coverage and zero Solidity runtime errors, yet be completely drained within seconds
                if its economic invariants, oracle pricing feeds, or liquidation parameters fail under extreme market conditions.
              </p>
            </div>
          </div>

          {/* OFFICIAL LEARNING RESOURCES */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Curated Technical Links</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Recommended Learning Resources</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Ethereum Developer Documentation", url: "https://ethereum.org/en/developers/docs/", desc: "Smart contracts, EVM execution environment, and blockchain state machine fundamentals." },
                { title: "Uniswap Protocol Technical Docs", url: "https://docs.uniswap.org/", desc: "Constant product math, v2/v3 AMM mechanics, router contracts, and concentrated liquidity." },
                { title: "Aave Protocol Documentation", url: "https://aave.com/docs", desc: "Decentralized money markets, aTokens, variable/stable debt, and liquidation mechanics." },
                { title: "OpenZeppelin Contracts Library", url: "https://docs.openzeppelin.com/contracts/", desc: "Audited ERC-20, SafeERC20, ReentrancyGuard, and Governor governance contracts." },
                { title: "Foundry Book & Testing Suite", url: "https://getfoundry.sh/", desc: "High-performance Solidity unit testing, property fuzzing, and invariant verification." },
                { title: "OWASP Smart Contract Security", url: "https://scs.owasp.org/", desc: "Top 10 DeFi smart contract vulnerabilities, attack vectors, and defensive patterns." }
              ].map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-neutral-200 hover:border-amber-500 hover:bg-amber-50/30 transition group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-neutral-900 group-hover:text-amber-800 transition">
                      {res.title} ↗
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-snug">{res.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 mt-3 block truncate">
                    {res.url.replace("https://", "")}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
'''
