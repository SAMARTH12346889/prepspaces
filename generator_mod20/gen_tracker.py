# -*- coding: utf-8 -*-
"""
Module 20 Tracker & Footer:
- Additional Reading and Official Resources (9 links)
- Module 20 Final Learning Outcomes (13 bullet points + final capstone project prompt)
- 28-Objective Checklist persisted to localStorage
- Bottom Navigation Footer
"""

def generate_tracker_and_footer():
    return '''
        {/* Tracker & Reference Resources Section */}
        <section id="tracker" className="space-y-16">
          {/* Official Resources Table */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PRIMARY LITERATURE</span>
              <span>•</span>
              <span>OFFICIAL RESOURCES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Additional Reading & Official Chainlink Engineering Documentation
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Essential documentation and technical specifications for continuing your mastery of decentralized oracles, verifiable randomness, and CRE workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Using Chainlink Data Feeds",
                  desc: "Official guide to integrating price feeds, reading decimals, and error handling in Solidity.",
                  link: "https://docs.chain.link/data-feeds/using-data-feeds"
                },
                {
                  title: "Decentralized Data Model Architecture",
                  desc: "Comprehensive breakdown of Aggregators, Proxies, and off-chain data flows.",
                  link: "https://docs.chain.link/architecture-overview/architecture-decentralized-model"
                },
                {
                  title: "Selecting Quality Data Feeds",
                  desc: "Best practices for data security, node reputation, and multi-source market coverage.",
                  link: "https://docs.chain.link/data-feeds/selecting-data-feeds"
                },
                {
                  title: "Contract Feed Addresses Registry",
                  desc: "Official contract addresses across Ethereum, Arbitrum, Optimism, Polygon, and Base.",
                  link: "https://docs.chain.link/data-feeds/price-feeds/addresses"
                },
                {
                  title: "Chainlink VRF v2.5 Developer Guide",
                  desc: "Generating verifiable randomness with subscription and direct funding modes.",
                  link: "https://docs.chain.link/vrf"
                },
                {
                  title: "Automation to CRE Migration Guide",
                  desc: "Step-by-step instructions to migrate from sunsetted Automation v1/v2 to modern CRE workflows.",
                  link: "https://docs.chain.link/cre/reference/cla-migration"
                },
                {
                  title: "Functions to CRE Migration Guide",
                  desc: "Transitioning legacy Chainlink Functions HTTP requests to full BFT consensus CRE workflows.",
                  link: "https://docs.chain.link/cre/reference/clf-migration-ts"
                },
                {
                  title: "Chainlink Runtime Environment (CRE)",
                  desc: "The universal decentralized execution platform for multi-chain workflows and off-chain computation.",
                  link: "https://docs.chain.link/cre/overview"
                },
                {
                  title: "Chainlink Data Streams (Low-Latency)",
                  desc: "Pull-based, sub-second verifiable market reports designed for high-frequency perpetuals DeFi.",
                  link: "https://docs.chain.link/data-streams/overview"
                }
              ].map((res, i) => (
                <a
                  key={i}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group space-y-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-neutral-400 group-hover:text-amber-600 transition-colors">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider">Resource {i + 1}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans">{res.desc}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 group-hover:underline inline-flex items-center gap-1">
                    Read Documentation &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Module 20 Final Learning Outcomes */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-neutral-100 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold tracking-wide">
              <span>EXECUTIVE SUMMARY</span>
              <span>•</span>
              <span>MODULE 20 LEARNING OUTCOMES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Module 20 Mastery Outcomes & Central Takeaway
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              By completing this module, you have mastered the complete architectural lifecycle of blockchain oracles:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-neutral-300">
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain the blockchain oracle problem and why external information is needed.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Differentiate centralized and decentralized oracle architectures.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain the multi-tier architecture of Chainlink Data Feeds.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Integrate AggregatorV3Interface into production Solidity contracts.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Retrieve, sanitize, and interpret all 5 latestRoundData() parameters.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Perform full-precision decimal conversion and wei-to-USD math.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Apply data freshness validation: require(block.timestamp - updatedAt &le; maxAge).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain Decentralized Oracle Networks (DONs) and Offchain Reporting (OCR).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Implement Chainlink VRF v2.5 with cryptographic on-chain verification.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Defend against oracle security vectors: flash loans, stale data, and front-running.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Connect external REST APIs using Chainlink Runtime Environment (CRE).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Incorporate L2 Sequencer Uptime Feeds and post-restart grace periods.</span>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2">
                <span className="text-amber-400">&bull;</span>
                <span>Design defense-in-depth applications using multi-reference oracles and circuit breakers.</span>
              </div>
            </div>

            {/* Capstone Project Prompt */}
            <div className="p-5 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 text-xs font-mono space-y-2">
              <div className="text-amber-400 font-bold uppercase text-[11px]">Final Module 20 Capstone Project:</div>
              <p className="text-neutral-200 leading-relaxed">
                Build an oracle-powered DeFi collateral valuation application that retrieves ETH/USD from Chainlink, validates the returned price, calculates collateral value, applies borrowing limits, and prevents sensitive operations when the oracle data is invalid or outdated.
              </p>
              <p className="text-neutral-400 italic text-[11px] pt-1">
                "Integrating an oracle is not just about retrieving a price—it is about ensuring that the information is appropriate, available, correctly interpreted and safe to use in financial smart contract logic."
              </p>
            </div>
          </div>

          {/* Interactive Checklist Persistent Progress Tracker */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Progress Tracker</span>
                <h3 className="text-xl font-bold text-neutral-900">Module 20 Mastery Checklist</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Track your progress across all 28 core objectives. Persisted locally.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-base font-mono font-bold text-neutral-900">
                    {completedChecklistCount} / {CHECKLIST_ITEMS.length}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">
                    {Math.round((completedChecklistCount / CHECKLIST_ITEMS.length) * 100)}% Complete
                  </div>
                </div>
                <button
                  type="button"
                  onClick={resetChecklist}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset Checklist
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
              <div
                className="h-full bg-amber-600 transition-all duration-300"
                style={{ width: `${(completedChecklistCount / CHECKLIST_ITEMS.length) * 100}%` }}
              />
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {CHECKLIST_ITEMS.map((item) => {
                const isChecked = !!completedChecklist[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      isChecked
                        ? "bg-amber-50/60 border-amber-300 text-amber-950 font-medium"
                        : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
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
          </div>

          {/* Module Navigation Footer */}
          <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 pb-12">
            <Link
              to="/learning/blockchain/layer-2-scaling"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 font-mono text-xs font-bold transition-all text-center"
            >
              &larr; Previous: Module 19 (Layer 2 & Scaling)
            </Link>
            <Link
              to="/learning/blockchain/modular-blockchains"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-600 text-white hover:bg-amber-700 font-mono text-xs font-bold transition-all text-center shadow-sm"
            >
              Next: Module 21 (Modular Blockchains) &rarr;
            </Link>
          </div>
        </section>
'''
