# -*- coding: utf-8 -*-
"""
Tracker & Footer Generator for Module 24 — Final Blockchain Capstone Project
Contains:
- Section 30: Advanced Research Directions After the Capstone
- Section 31: Recommended Official Learning Resources
- Section 32: Final Learning Outcomes & Curriculum Graduation Celebration
- 32-Item Interactive Syllabus Completion Tracker (Persisted to localStorage)
- Bottom Navigation Bar (Previous: Module 23 / Next: Curriculum Master Overview)
"""

def generate_tracker_and_footer():
    return r'''
      {/* SECTION 30: Advanced Research Directions */}
      <section id="section-30" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 30
          </span>
          <span className="text-xs font-mono text-neutral-500">Post-Capstone Horizons</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          30. Advanced Research Directions & Industry Horizons
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Having constructed a production-style DApp, consider these advanced technical frontiers for post-capstone research or startup incubation:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">1. Zero-Knowledge Proofs (ZKPs)</span>
              <p className="text-neutral-600 text-[11px]">Private on-chain voting via Semaphore / MACI and confidential asset transfers.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">2. Account Abstraction (ERC-4337)</span>
              <p className="text-neutral-600 text-[11px]">Smart contract wallets, social recovery, session keys, and sponsored gas paymasters.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">3. Cross-Chain Interoperability</span>
              <p className="text-neutral-600 text-[11px]">Chainlink CCIP and LayerZero for cross-chain token transfers and state bridging.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">4. Decentralized Identity (DID)</span>
              <p className="text-neutral-600 text-[11px]">Verifiable Credentials, Worldcoin iris proofs, and Gitcoin Passport Sybil resistance.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">5. MEV Protection & Fair Sequencing</span>
              <p className="text-neutral-600 text-[11px]">Private mempools (Flashbots Protect, SUAVE) and commit-reveal batch auctions.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">6. AI on Blockchain</span>
              <p className="text-neutral-600 text-[11px]">Autonomous on-chain agent wallets, zkML verification, and decentralized inference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 31: Recommended Learning Resources */}
      <section id="section-31" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 31
          </span>
          <span className="text-xs font-mono text-neutral-500">Official Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          31. Recommended Official Learning Resources
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            These are the official authoritative documentation portals to use for enterprise Web3 development:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <a
              href="https://ethereum.org/developers/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Ethereum Developer Docs</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">EVM architecture, transactions, and consensus.</p>
            </a>

            <a
              href="https://docs.soliditylang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Solidity Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Language grammar, assembly, and compiler optimization.</p>
            </a>

            <a
              href="https://docs.openzeppelin.com/contracts/5.x/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>OpenZeppelin 5.x Docs</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Audited AccessControl, ERC standards, and ReentrancyGuard.</p>
            </a>

            <a
              href="https://book.getfoundry.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Foundry Book</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Forge testing, Cast CLI, and invariant fuzzing.</p>
            </a>

            <a
              href="https://hardhat.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Hardhat 3 Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">TypeScript test runner and Hardhat Ignition modules.</p>
            </a>

            <a
              href="https://wagmi.sh/react/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Wagmi React Docs</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Multi-wallet connector, Viem client, and TanStack query.</p>
            </a>

            <a
              href="https://docs.ipfs.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>IPFS Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Content addressing, CIDs, and pinning architectures.</p>
            </a>

            <a
              href="https://scs.owasp.org/SCSVS/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>OWASP SCSVS Standard</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Smart Contract Security Verification Standard audit checklist.</p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 32: Final Learning Outcomes & Course Graduation Celebration */}
      <section id="section-32" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Curriculum Completion
          </span>
          <span className="text-xs font-mono text-neutral-500">Module 24 of 24</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          32. Final Learning Outcomes & Official Blockchain Course Achievement
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Congratulations! By completing Module 24 and defending your final production capstone, you have demonstrated full software engineering competency across sixteen core blockchain disciplines:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs my-4">
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">1. Requirements Engineering</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">2. System Architecture</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">3. Chain Selection</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">4. Modular Solidity</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">5. Database Indexing</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">6. React 18 & Viem</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">7. SIWE Authentication</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">8. IPFS Pinning</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">9. Invariant Fuzzing</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">10. Security Auditing</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">11. Gas Optimization</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">12. CI/CD Pipelines</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">13. Testnet Release</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">14. Production Ops</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">15. Technical Docs</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">16. Oral Defense</div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 space-y-2">
            <div className="text-orange-400 font-bold uppercase tracking-wider text-xs font-mono">
              Final Blockchain Course Achievement
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              You Have Successfully Mastered the Entire 24-Module Blockchain Engineering Curriculum!
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              You have transitioned from understanding foundational cryptographic hashes and Bitcoin transaction scripts to engineering decentralized finance protocols, zero-knowledge verifiable rollups, cross-program Rust invocations on Solana, and a complete, audited, production-grade Web3 application.
            </p>
          </div>
        </div>
      </section>

      {/* SYLLABUS CHECKLIST & PROGRESS TRACKER */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
              Syllabus Completion Tracker
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              Module 24: Complete 32-Section Checklist
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Track your progress across all 32 syllabus sections. Persisted automatically to your browser local storage.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-extrabold text-orange-600 font-mono">
                {checklistProgress}%
              </div>
              <div className="text-[10px] text-neutral-500 font-mono">
                {completedChecklistCount} of {CHECKLIST_ITEMS.length} Completed
              </div>
            </div>
            <button
              onClick={resetChecklist}
              className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-bold transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-orange-600 h-full transition-all duration-300"
            style={{ width: `${checklistProgress}%` }}
          ></div>
        </div>

        {/* Checklist Category Filter */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setSelectedChecklistCategory("all")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition ${
              selectedChecklistCategory === "all"
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            All Categories
          </button>
          {checklistCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedChecklistCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                selectedChecklistCategory === cat
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Checklist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {filteredChecklistItems.map((item) => {
            const isChecked = !!checklist[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleChecklistItem(item.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                  isChecked
                    ? "border-emerald-300 bg-emerald-50/40"
                    : "border-[#e7e3da] bg-[#fbfaf7] hover:bg-[#f6f4ee]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-1 w-4 h-4 text-orange-600 rounded border-neutral-300 focus:ring-orange-500 cursor-pointer"
                />
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900">{item.title}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-200 text-neutral-700">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-snug">{item.summary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM NAVIGATION FOOTER */}
      <footer className="mt-12 pt-8 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <Link
          to="/learning/blockchain/solana-rust"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition"
        >
          <ArrowLeft className="w-4 h-4 text-orange-600" />
          <span>Previous: Module 23 — Solana Development with Rust</span>
        </Link>
        <Link
          to="/learning/blockchain"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition font-bold"
        >
          <span className="text-orange-600 font-bold">Curriculum Complete: Master Overview</span>
          <ArrowRight className="w-4 h-4 text-orange-600" />
        </Link>
      </footer>
'''
