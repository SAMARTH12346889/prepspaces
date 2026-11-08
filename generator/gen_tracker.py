# projectx/generator/gen_tracker.py

def get_tracker_code():
    return r'''
          {/* TAB 5: COMPLETION TRACKER & SUMMARY (PART 19) */}
          {activeTab === "tracker" && (
            <div className="space-y-10">
              {/* Checklist Section */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                      Academic Competency Tracker
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                      Module 12 Mastery Checklist (26 Learning Outcomes)
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Your progress automatically persists in localStorage across browser sessions.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-stone-700">
                      {completedCount} of {checklistItems.length} Complete ({completionPercentage}%)
                    </span>
                    <div className="w-24 h-2 bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#ea580c] rounded-full transition-all duration-300"
                        style={{ width: `${completionPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {checklistItems.map((item, idx) => {
                    const isDone = completedChecklist[idx];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleChecklistItem(idx)}
                        className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start gap-3 ${
                          isDone
                            ? "border-emerald-300 bg-emerald-50/40 text-emerald-950"
                            : "border-stone-200 bg-white hover:border-stone-300 text-stone-700"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition ${
                            isDone ? "bg-emerald-600 border-emerald-600 text-white" : "border-stone-300 bg-stone-50"
                          }`}
                        >
                          {isDone && <Check size={13} strokeWidth={3} />}
                        </div>
                        <span className="text-xs leading-relaxed font-sans">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* PART 19: Module Summary */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 19 • Module Summary
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Key Concepts to Remember
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">ERC-20 (Fungible)</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Uniform tokens where each unit is interchangeable. Uses balance and allowance mappings.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">ERC-721 (Non-Fungible)</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Unique digital assets identified by discrete uint256 tokenIds with metadata URIs.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">ERC-1155 (Multi-Token)</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Hybrid standard bundling fungible and non-fungible items into one contract with batching.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">Minting &amp; Burning</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Supply expansion (from 0x0) and contraction (to 0x0) maintaining conservation laws.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">Allowances &amp; Approvals</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Two-step authorization pattern enabling smart contracts to execute transfers on behalf of EOAs.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">Token Vesting &amp; Governance</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Cliff thresholds, linear unlock formulas, and checkpointed voting power defending against flash loans.
                    </p>
                  </div>
                </div>

                {/* Recommended Resources */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b] mb-3">
                    Recommended Official Documentation &amp; Standards
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
                    {[
                      { name: "Ethereum — Token Standards", url: "https://ethereum.org/developers/docs/standards/tokens/" },
                      { name: "ERC-20 Specification (EIP-20)", url: "https://eips.ethereum.org/EIPS/eip-20" },
                      { name: "ERC-721 Specification (EIP-721)", url: "https://eips.ethereum.org/EIPS/eip-721" },
                      { name: "ERC-1155 Specification (EIP-1155)", url: "https://eips.ethereum.org/EIPS/eip-1155" },
                      { name: "ERC-2981 Royalty Standard", url: "https://eips.ethereum.org/EIPS/eip-2981" },
                      { name: "ERC-2612 Permit Extension", url: "https://eips.ethereum.org/EIPS/eip-2612" },
                      { name: "OpenZeppelin Contracts Docs", url: "https://docs.openzeppelin.com/contracts" },
                      { name: "OpenZeppelin Contracts Wizard", url: "https://wizard.openzeppelin.com/" },
                      { name: "Official Solidity Docs", url: "https://docs.soliditylang.org/" }
                    ].map((res, i) => (
                      <a
                        key={i}
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/30 transition flex items-center justify-between text-stone-700"
                      >
                        <span className="font-semibold truncate">{res.name}</span>
                        <ExternalLink size={12} className="text-stone-400 shrink-0 ml-1.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}
'''
