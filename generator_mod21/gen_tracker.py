# -*- coding: utf-8 -*-
"""
Module 21 Tracker & Footer:
- Additional Reading and Official Resources (8 links)
- Module 21 Final Learning Outcomes (17 bullet points + final capstone project prompt)
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
              <span>OFFICIAL GOVERNANCE RESOURCES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Recommended Official Learning Resources
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Essential documentation and specifications for continuing your mastery of decentralized autonomous organizations, timelock mechanics, and smart contract governance:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "OpenZeppelin Governance Contracts",
                  desc: "Complete documentation and implementation guides for Governor, TimelockController, and ERC20Votes.",
                  link: "https://docs.openzeppelin.com/contracts/5.x/governance"
                },
                {
                  title: "Snapshot Off-Chain Voting Docs",
                  desc: "Guides for configuring Snapshot spaces, voting strategies, IPFS pinning, and SafeSnap execution.",
                  link: "https://docs.snapshot.org"
                },
                {
                  title: "Safe Developer Documentation",
                  desc: "Architecture reference for multi-signature smart contracts, transaction guards, and Safe modules.",
                  link: "https://docs.safe.global"
                },
                {
                  title: "Uniswap Governance Portal",
                  desc: "Production governance architecture, autonomous proposal workflows, and governance delegation.",
                  link: "https://gov.uniswap.org"
                },
                {
                  title: "MakerDAO / Sky Governance Forum",
                  desc: "Case studies in stability fee voting, collateral parameterization, and executive spells.",
                  link: "https://forum.makerdao.com"
                },
                {
                  title: "ENS DAO Governance Docs",
                  desc: "Documentation for ENS Constitution, 4-of-8 security council charters, and endowment management.",
                  link: "https://docs.ens.domains"
                },
                {
                  title: "Aave Governance v3 Specs",
                  desc: "Decentralized cross-chain governance system spanning Ethereum, Polygon, Arbitrum, and Avalanche.",
                  link: "https://governance.aave.com"
                },
                {
                  title: "Compound Governance Documentation",
                  desc: "The foundational GovernorAlpha and GovernorBravo smart contract specifications that inspired Web3.",
                  link: "https://docs.compound.finance"
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

          {/* Module 21 Final Learning Outcomes */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-neutral-100 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold tracking-wide">
              <span>EXECUTIVE SUMMARY</span>
              <span>•</span>
              <span>MODULE 21 LEARNING OUTCOMES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Module 21 Mastery Outcomes &amp; Architectural Takeaway
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              By completing this module, you have mastered the complete architectural lifecycle of Web3 decentralized autonomous organizations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-neutral-300">
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Define what a DAO is and why decentralized organizational structures emerged.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Map the 8 core components of production DAO architecture.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Differentiate between on-chain execution and off-chain signaling governance.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain why standard ERC-20 tokens are vulnerable to double voting and flash loan attacks.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Implement OpenZeppelin ERC20Votes with historical binary-search checkpoints.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Formulate on-chain proposals with encoded calldata, targets, values, and description hashes.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Contrast 5 voting mechanisms: token-weighted, 1-member-1-vote, quadratic, conviction, and delegated.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Master OpenZeppelin Governor castVote methods and GovernorCountingSimple quorum evaluation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Configure gasless off-chain voting on Snapshot with IPFS and EIP-712 signatures.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Implement delegated liquid democracy and gasless delegation via delegateBySig.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Calculate quorum requirements and explain why Against votes do not count toward quorum in GovernorCountingSimple.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Deploy and secure OpenZeppelin TimelockController with correct role segregation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Protect DAO treasuries using SafeERC20, timelocks, and multi-tier spending limits.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Configure Safe (Gnosis Safe) multisignature wallets with M-of-N threshold security.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Analyze and defend against 7 major governance exploits: flash-loans, takeovers, and trojan calldata.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Deploy Security Councils with 4-of-8 emergency cancel-only veto powers.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Evaluate legal wrappers (DAO LLC, Foundations, UNAs) and tax compliance across US and Indian jurisdictions.</span>
              </div>
            </div>

            {/* Final Project Prompt */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 mt-4">
              <span className="text-amber-400 font-bold font-mono text-xs uppercase tracking-wider block">
                Final Capstone Project &bull; PrepSpaces DAO Platform
              </span>
              <p className="text-sm text-neutral-200 leading-relaxed font-sans">
                Build a production-grade Web3 application combining <code>GovernanceToken.sol</code>, <code>MyGovernor.sol</code>, <code>TimelockController.sol</code>, and <code>DAOTreasury.sol</code> with a React front-end. Demonstrate creating a proposal requesting 100 PSG from the treasury, voting &quot;For&quot; using checkpointed tokens, queueing the proposal into a 60-second timelock, executing the payout, and verifying the autonomous transfer on Sepolia Etherscan!
              </p>
            </div>
          </div>

          {/* Module 21 Progress Checklist */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
                  <span>PROGRESS TRACKER</span>
                  <span>•</span>
                  <span>MODULE 21 MASTERY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
                  DAO Architecture &amp; Governance Checklist
                </h3>
                <p className="text-sm text-neutral-600">
                  Track your mastery across all 28 foundational competencies. Automatically saved in local browser storage.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs font-mono text-neutral-500 block">Completion</span>
                  <span className="text-lg font-mono font-bold text-neutral-900">
                    {checklistProgress}% ({completedChecklistCount}/{CHECKLIST_ITEMS.length})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={resetChecklist}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${checklistProgress}%` }}
              />
            </div>

            {/* Checklist Items Grouped by Category */}
            <div className="space-y-6">
              {checklistCategories.map((category) => {
                const categoryItems = CHECKLIST_ITEMS.filter((item) => item.category === category);
                return (
                  <div key={category} className="space-y-3">
                    <h4 className="text-sm font-bold font-mono text-neutral-800 uppercase tracking-wider">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {categoryItems.map((item) => {
                        const isChecked = !!checklist[item.id];
                        return (
                          <label
                            key={item.id}
                            className={`p-4 rounded-xl border flex items-start gap-3.5 cursor-pointer transition-all ${
                              isChecked
                                ? "bg-amber-50/60 border-amber-300 text-neutral-900"
                                : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleChecklistItem(item.id)}
                              className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-amber-600 focus:ring-amber-500 shrink-0 cursor-pointer"
                            />
                            <span className="text-xs font-mono leading-relaxed select-none">
                              {item.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Module Bottom Navigation Footer */}
          <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/learning/blockchain/oracles-chainlink"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-500 group-hover:-translate-x-1 transition-transform" />
              <span>Previous: Module 20 (Oracles &amp; Chainlink)</span>
            </Link>
            <Link
              to="/learning/blockchain/modular-blockchains"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Next: Module 22 (Modular Blockchains)</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
    '''