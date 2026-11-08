# -*- coding: utf-8 -*-
"""
Module 19 Tracker & Footer:
- Part 20: 6 Recommended Official Resources
- Module 19 Final Summary & Central Engineering Takeaway
- 28-Objective Checklist persisted to localStorage
- Bottom Navigation Footer
"""

def generate_tracker_and_footer():
    return '''
        {/* Tracker & Reference Resources Section */}
        <section id="tracker" className="space-y-16">
          {/* Part 20: Recommended Official Resources */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 20</span>
              <span>•</span>
              <span>PRIMARY LITERATURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              20. Recommended Official Literature & Engineering Documentation
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Continue your mastery of Ethereum scaling and Layer 2 systems architecture by studying the primary engineering specifications and research papers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Ethereum.org Layer 2 Scaling Architecture",
                  desc: "The canonical overview of optimistic rollups, ZK-rollups, state channels, and sidechains.",
                  link: "https://ethereum.org/en/developers/docs/scaling/"
                },
                {
                  title: "Arbitrum Nitro Technical Whitepaper",
                  desc: "Comprehensive specification of Nitro Geth, WASM execution, and interactive bisection fraud proofs.",
                  link: "https://github.com/OffchainLabs/nitro"
                },
                {
                  title: "Optimism OP Stack Specs & Bedrock Architecture",
                  desc: "The modular blueprint for building interconnected Superchain Layer 2 rollups.",
                  link: "https://specs.optimism.io/"
                },
                {
                  title: "zkSync Era Documentation & Type-4 zkEVM",
                  desc: "Deep-dive into native Account Abstraction, boojum prover architecture, and hyperchains.",
                  link: "https://docs.zksync.io/"
                },
                {
                  title: "Polygon Knowledge Hub & AggLayer Architecture",
                  desc: "Specifications for Polygon CDK, zero-knowledge proofs, and cross-chain unified liquidity.",
                  link: "https://docs.polygon.technology/"
                },
                {
                  title: "Ethereum Bridges & Cross-Chain Security Guide",
                  desc: "Vitalik Buterin's security analysis on cross-chain bridges and multi-chain limitations.",
                  link: "https://ethereum.org/en/developers/docs/bridges/"
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

          {/* Module 19 Summary & Central Engineering Takeaway */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-neutral-100 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold tracking-wide">
              <span>EXECUTIVE SUMMARY</span>
              <span>•</span>
              <span>MODULE 19 COMPLETE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              The Central Engineering Takeaway of Layer 2
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Layer 2 scaling is not an incremental optimization—it is a fundamental architectural paradigm shift that solves the Blockchain Scalability Trilemma. By decoupling high-speed transaction execution from consensus and data availability, rollups scale Ethereum horizontally while inheriting 100% of its cryptographic security and censorship resistance.
            </p>
            <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 text-xs font-mono text-neutral-200 space-y-2">
              <div className="text-amber-400 font-bold uppercase text-[11px]">Key Architectural Maxims:</div>
              <div>&bull; <strong>Rollups &ne; Sidechains:</strong> Rollups inherit L1 security; sidechains depend strictly on their own independent validator set.</div>
              <div>&bull; <strong>Blobs Decouple Costs:</strong> EIP-4844 frees rollups from competing against L1 DeFi for calldata block space.</div>
              <div>&bull; <strong>Interactive Bisection Minimizes L1 Gas:</strong> Narrows disputes to 1 single opcode instruction evaluated on L1.</div>
              <div>&bull; <strong>Bridge Invariants are Sacred:</strong> Bridged supply on L2 must never exceed locked collateral on L1.</div>
            </div>
          </div>

          {/* Interactive Checklist Persistent Progress Tracker */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Progress Tracker</span>
                <h3 className="text-xl font-bold text-neutral-900">Module 19 Mastery Checklist</h3>
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
              to="/learning/blockchain/security-vulnerabilities"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 font-mono text-xs font-bold transition-all text-center"
            >
              &larr; Previous: Module 18 (Security & Auditing)
            </Link>
            <Link
              to="/learning/blockchain/modular-blockchains"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-600 text-white hover:bg-amber-700 font-mono text-xs font-bold transition-all text-center shadow-sm"
            >
              Next: Module 20 (Modular Blockchains & Celestia) &rarr;
            </Link>
          </div>
        </section>
'''
