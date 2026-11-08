# projectx/generator_mod15/gen_tracker.py
"""
Tracker & Summary generator for Module 15: IPFS & Decentralized Storage
Includes 26-objective interactive checklist, Module 15 summary, Module 16 intro, and 10 official learning resources.
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
              Module 15 Competency Tracker & Curated Resources
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Track your mastery across all 26 core architectural competencies of Module 15.
              Your progress is saved locally in your browser. Complete every objective to graduate to
              Module 16 (Decentralized Finance & DeFi Protocol Architecture).
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

          {/* MODULE SUMMARY & LOOKING AHEAD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Module Recap</span>
              <h3 className="text-xl font-bold text-neutral-900">Module 15 Architectural Summary</h3>
              <div className="text-xs sm:text-sm text-neutral-700 space-y-3 leading-relaxed">
                <p>
                  Decentralized storage frees blockchain protocols from the prohibitive gas expense of storing bulk
                  binary payloads on-chain. By decoupling transactional execution from content persistence,
                  Web3 architectures achieve both trustless security and infinite media scalability.
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-neutral-600">
                  <li><strong>Content Addressing:</strong> Files are referenced by immutable CIDv1 cryptographic digests rather than mutable server domain paths.</li>
                  <li><strong>Merkle DAGs & IPLD:</strong> Files are chunked into uniform blocks and structured into tamper-evident directed acyclic graphs.</li>
                  <li><strong>Routing & Exchange:</strong> Kademlia DHT maps CIDs to multiaddresses, while Bitswap orchestrates P2P chunk swarms.</li>
                  <li><strong>Persistence:</strong> Pinning services (Pinata, Web3.Storage), Arweave Blockweaves, and Filecoin storage deals ensure permanent retention.</li>
                  <li><strong>Confidentiality:</strong> Public storage mandates client-side AES-GCM 256-bit encryption before uploading.</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50/40 rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Looking Ahead</span>
              <h3 className="text-xl font-bold text-amber-950">Next: Module 16 — Decentralized Finance (DeFi)</h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                Now that you have mastered smart contract development, full-stack dApp engineering, and decentralized
                storage architecture, you are ready to enter the most economically intensive domain of Web3:
                <strong>Decentralized Finance (DeFi)</strong>.
              </p>
              <div className="space-y-2 text-xs text-amber-800">
                <div className="font-semibold text-amber-900">Module 16 Curriculum Covers:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Automated Market Makers (AMMs) & Constant Product Formula (<code className="font-mono">x * y = k</code>)</li>
                  <li>Liquidity pools, impermanent loss calculation, and LP token dynamics</li>
                  <li>Decentralized lending protocols (overcollateralization, liquidation mechanics)</li>
                  <li>Flash loans: uncollateralized single-transaction borrowing and arbitrage</li>
                  <li>Decentralized Oracle Networks (Chainlink price feeds and TWAP oracles)</li>
                  <li>DeFi attack vectors: reentrancy, oracle manipulation, and sandwich front-running</li>
                </ul>
              </div>
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
                { title: "IPFS Official Documentation", url: "https://docs.ipfs.tech/", desc: "Comprehensive guides to Kubo, Helia, and P2P protocols." },
                { title: "IPFS Content Addressing", url: "https://docs.ipfs.tech/concepts/content-addressing/", desc: "Deep technical breakdown of Multihash, Multicodec, and CIDv1." },
                { title: "IPFS Persistence & Pinning", url: "https://docs.ipfs.tech/concepts/persistence/", desc: "Garbage collection mechanics and cluster pinning strategies." },
                { title: "IPFS Distributed Hash Tables", url: "https://docs.ipfs.tech/concepts/dht/", desc: "Kademlia S/Kademlia DHT routing and provider record life cycles." },
                { title: "Pinata Developer Documentation", url: "https://docs.pinata.cloud/", desc: "Pinning REST APIs, dedicated gateways, and token scoping." },
                { title: "Web3.Storage Technical Reference", url: "https://docs.web3.storage/", desc: "UCAN-based decentralized storage deals backed by Filecoin." },
                { title: "Filecoin Official Specs", url: "https://docs.filecoin.io/", desc: "Storage marketplace deals, PoRep, and PoSt zero-knowledge proofs." },
                { title: "Arweave Permaweb Guide", url: "https://docs.arweave.org/", desc: "Blockweave architecture and the Kryder storage endowment model." },
                { title: "Solidity 0.8.x Documentation", url: "https://docs.soliditylang.org/", desc: "Official language reference for smart contract development." },
                { title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/", desc: "Standard audited ERC-721 and storage registry implementations." }
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
