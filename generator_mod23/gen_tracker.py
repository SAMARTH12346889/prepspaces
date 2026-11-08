# -*- coding: utf-8 -*-
"""
Tracker & Footer Generator for Module 23 — Solana Development with Rust
Contains:
- Section 26: Practical Assignment Brief
- Section 27: Curated Official Learning Resources
- Section 28: What You Should Know (11 Knowledge Area Mastery Matrix)
- 28-Item Interactive Checklist with Progress Bar & Category Filtering
- Bottom Navigation Bar (Previous: Module 22 / Next: Module 24)
"""

def generate_tracker_and_footer():
    return r'''
      {/* SECTION 26: Practical Assignment */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-neutral-500">Autonomous Deliverables</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          26. Practical Capstone Assignment Brief
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Build the complete <strong>PrepToken</strong> protocol application independently, without copying prebuilt templates. Your final portfolio submission must contain:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><strong>Rust and Anchor Smart Contract:</strong> Complete <code>lib.rs</code> containing all 6 instruction endpoints with zero-cost checked arithmetic.</li>
            <li><strong>PDA-Based Token Configuration:</strong> Validated seeds, canonical bump caching, and automatic rent-exemption allocation.</li>
            <li><strong>SPL Token Integration:</strong> Decoupled Mint and Associated Token Accounts with CPI invocations via <code>invoke_signed</code>.</li>
            <li><strong>Security Controls:</strong> Strict Signer and Account ownership constraints protecting against type confusion and impersonation.</li>
            <li><strong>React Frontend:</strong> Responsive web interface connecting Phantom / Solflare wallets with live on-chain balance feeds.</li>
            <li><strong>Solana Devnet Deployment:</strong> Deployed program ID with on-chain transactions verifiable via Solana Explorer or SolanaFM.</li>
            <li><strong>Automated Test Suite:</strong> Comprehensive unit and integration test suite passing all 12 canonical test scenarios.</li>
          </ul>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 font-mono">
            <strong>Bonus Final Challenge:</strong> Extend the application to support Token-2022 Transfer Fees. Configure a 50 bps fee with a maximum cap and write an integration test validating that the withheld fee is harvested to the protocol treasury PDA.
          </div>
        </div>
      </section>

      {/* SECTION 27: Recommended Learning Resources */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-neutral-500">Official Documentation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          27. Recommended Learning Resources
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            These are the official authoritative documentation portals to use alongside this course module:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4 font-mono text-xs">
            <a
              href="https://solana.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Solana Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Core runtime architecture, account models, transactions, and PDAs.</p>
            </a>

            <a
              href="https://doc.rust-lang.org/book/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>The Rust Programming Language</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Ownership, borrowing, lifetimes, traits, error handling, and Cargo.</p>
            </a>

            <a
              href="https://www.anchor-lang.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Anchor Framework Docs</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Account macros, security constraints, CPI contexts, and client IDLs.</p>
            </a>

            <a
              href="https://solana.com/docs/tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>SPL Token Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Token mints, ATAs, transfer mechanics, and Token-2022 extensions.</p>
            </a>

            <a
              href="https://solana.com/docs/tools/litesvm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>LiteSVM Testing Guide</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">In-process Rust virtual machine testing with sub-millisecond execution.</p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 28: What You Should Know (Mastery Matrix) */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 28
          </span>
          <span className="text-xs font-mono text-neutral-500">Learning Outcomes</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          28. What You Should Know After Completing Module 23
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            By the end of this module, you should have achieved comprehensive engineering fluency across eleven core competencies:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Knowledge Area</th>
                  <th className="p-3">Expected Senior Engineering Ability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Solana Architecture</td>
                  <td className="p-3 text-neutral-600">Explain the decoupled execution and account models, PoH, and Sealevel concurrency.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Rust Systems Programming</td>
                  <td className="p-3 text-neutral-600">Write structured, memory-safe programs utilizing Rust's strict compile-time invariants.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Ownership & Borrowing</td>
                  <td className="p-3 text-neutral-600">Manage references, mutable borrows, and <code>'info</code> lifetimes without data races.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Anchor Framework</td>
                  <td className="p-3 text-neutral-600">Build, compile, and validate Solana smart contracts using declarative account macros.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Accounts Model</td>
                  <td className="p-3 text-neutral-600">Design rent-exempt on-chain state layouts with explicit byte allocations and discriminators.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Program Derived Addresses</td>
                  <td className="p-3 text-neutral-600">Derive, validate, and verify deterministic off-curve addresses using canonical bumps.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Cross-Program Invocation</td>
                  <td className="p-3 text-neutral-600">Invoke external Solana programs using <code>invoke</code> and <code>invoke_signed</code> with PDA seeds.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">SPL Token Engineering</td>
                  <td className="p-3 text-neutral-600">Create and manage Mints, ATAs, transfers, burns, and evaluate Token-2022 extensions.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Smart Contract Security</td>
                  <td className="p-3 text-neutral-600">Validate caller authority, account ownership, and eliminate integer overflow vectors.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Testing & Verification</td>
                  <td className="p-3 text-neutral-600">Write unit tests via LiteSVM and integration/negative security tests via Anchor Bankrun.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Devnet Deployment</td>
                  <td className="p-3 text-neutral-600">Publish programs on Solana Devnet, manage buffer accounts, and audit on-chain state.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs text-neutral-800 leading-relaxed">
            <strong>Ultimate Course Benchmark:</strong> You should now be capable of designing and writing a production-grade Anchor smart contract in Rust, managing state via PDAs, executing Cross-Program Invocations to the SPL Token Program, deploying to Solana Devnet, and connecting a full-stack React DApp with Phantom wallet integration.
          </div>
        </div>
      </section>

      {/* CHECKLIST & PROGRESS TRACKER */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
              Syllabus Completion Tracker
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              Module 23: Complete 28-Section Checklist
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Track your progress across all 28 syllabus sections. Persisted automatically to your browser local storage.
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
          to="/learning/blockchain/hyperledger-fabric"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition"
        >
          <ArrowLeft className="w-4 h-4 text-orange-600" />
          <span>Previous: Module 22 — Hyperledger Fabric</span>
        </Link>
        <Link
          to="/learning/blockchain/modular-blockchains"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition"
        >
          <span>Next: Module 24 — Modular Blockchains & Rollups</span>
          <ArrowRight className="w-4 h-4 text-orange-600" />
        </Link>
      </footer>
'''
