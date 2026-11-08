# -*- coding: utf-8 -*-
"""
Module 17 Completion Tracker, Learning Resources, Final Summary, and Bottom Navigation.
Zero information loss.
"""

def generate_tracker_and_footer():
    return '''
      {/* ============================================================== */}
      {/* SECTION 26: RECOMMENDED LEARNING RESOURCES                     */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 26
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Recommended Official Learning Resources
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Authoritative documentation, whitepapers, and developer guides for protocol engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Uniswap V2 Documentation",
              category: "DEX Protocol",
              desc: "Core pair contracts, constant-product AMM mathematics, LP tokens, and flash swaps.",
              link: "https://docs.uniswap.org/contracts/v2/overview"
            },
            {
              title: "Uniswap V3 Documentation",
              category: "Concentrated Liquidity",
              desc: "Ticks, square root price math (Q64.96), position NFTs, and virtual reserves.",
              link: "https://docs.uniswap.org/contracts/v3/overview"
            },
            {
              title: "Compound Finance Documentation",
              category: "Money Markets",
              desc: "cToken exchange rate accounting, Comptroller risk engine, and collateral factors.",
              link: "https://docs.compound.finance/"
            },
            {
              title: "Aave V3 Protocol Documentation",
              category: "Lending Infrastructure",
              desc: "aToken rebasing, VariableDebtTokens, Isolation Mode, E-Mode, and flash loans.",
              link: "https://aave.com/docs"
            },
            {
              title: "Chainlink Price Feeds Documentation",
              category: "Oracle Infrastructure",
              desc: "AggregatorV3Interface, heartbeat intervals, deviation thresholds, and L2 uptime feeds.",
              link: "https://docs.chain.link/"
            },
            {
              title: "Foundry Development Framework",
              category: "Testing & Verification",
              desc: "Property-based invariant testing, fuzz testing, and differential gas profiling.",
              link: "https://getfoundry.sh/"
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
                View Documentation &rarr;
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
          <span>Module 17 Final Summary & Core Engineering Principle</span>
        </h3>
        <p className="text-xs text-neutral-700 leading-relaxed">
          This module advanced beyond basic token standards into the core architecture of decentralized exchanges and money market lending protocols. You examined the mechanics of constant-product AMMs (Uniswap V2) and concentrated liquidity bands (Uniswap V3), designed multi-hop routing engines, modeled collateralized lending pools, and evaluated liquidation mechanisms.
        </p>
        <div className="p-4 bg-white rounded-xl border border-amber-300 shadow-sm text-xs text-amber-950 font-medium space-y-1">
          <div className="text-[11px] font-mono uppercase font-bold text-amber-800">
            Central Engineering Takeaway
          </div>
          <p className="leading-relaxed">
            "A decentralized exchange must preserve its pricing and liquidity invariants under all conditions, while a lending protocol must maintain airtight collateral, debt, interest, and liquidation accounting. Both systems demand rigorous mathematical modeling, strict integer precision discipline, robust oracle validation, and property-based invariant testing before deployment to mainnet."
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
              Module 17 Curricular Competency Checklist
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
          to="/learning/blockchain/defi-protocols"
          className="w-full sm:w-auto p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col text-left"
        >
          <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
            &larr; Previous Module
          </span>
          <span className="text-sm font-bold text-neutral-900 mt-1">
            Module 16: Decentralized Finance (DeFi) Architecture
          </span>
        </Link>

        <Link
          to="/learning/blockchain/security-vulnerabilities"
          className="w-full sm:w-auto p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-end text-right"
        >
          <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
            Next Module &rarr;
          </span>
          <span className="text-sm font-bold text-neutral-900 mt-1">
            Module 18: Smart Contract Security, Auditing & Formal Verification
          </span>
        </Link>
      </div>
    '''
