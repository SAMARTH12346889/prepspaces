# -*- coding: utf-8 -*-
"""
Module 22 Tracker & Footer:
- Recommended Official Learning Resources (12 links table)
- Module 22 Final Learning Outcomes (17 bullet points + Final Capstone Project Prompt)
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
              <span>OFFICIAL HYPERLEDGER DOCUMENTATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Recommended Official Learning Resources
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Essential documentation and specifications for continuing your mastery of Hyperledger Fabric, enterprise smart contracts, and consortium infrastructure:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "What is Hyperledger Fabric?",
                  desc: "Core concepts, architecture, and enterprise features overview.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/whatis.html"
                },
                {
                  title: "Network Architecture",
                  desc: "Comprehensive breakdown of peers, orderers, and consortium channels.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/network/network.html"
                },
                {
                  title: "Peers & Roles",
                  desc: "Detailed responsibilities of endorsing, committing, and anchor peers.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/peers/peers.html"
                },
                {
                  title: "Membership Service Provider",
                  desc: "Configuring MSPs, cryptographic trust roots, and organizational units.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/msp.html"
                },
                {
                  title: "Channels Architecture",
                  desc: "Creating, joining, and configuring isolated multi-org communication channels.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/channels.html"
                },
                {
                  title: "Private Data Collections",
                  desc: "Configuring collection policies, blockToLive, and bilateral sideDBs.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/private-data/private-data.html"
                },
                {
                  title: "Writing Chaincode in Go",
                  desc: "Official guide to fabric-contract-api-go, stub methods, and deterministic logic.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/chaincode4ade.html"
                },
                {
                  title: "Endorsement Policies",
                  desc: "Boolean syntax (AND, OR, OutOf) and channel lifecycle governance rules.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/endorsement-policies.html"
                },
                {
                  title: "Transaction Flow Architecture",
                  desc: "The complete 11-stage Execute-Order-Validate lifecycle.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html"
                },
                {
                  title: "CouchDB Integration",
                  desc: "Configuring CouchDB, rich JSON queries, and declarative B-tree indexes.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/couchdb_as_state_database.html"
                },
                {
                  title: "Fabric Gateway Client",
                  desc: "Application connectivity via the embedded gateway service in peers.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/gateway.html"
                },
                {
                  title: "Deploying Chaincode",
                  desc: "Step-by-step v2.x/v3.x decentralized chaincode lifecycle.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/deploy_chaincode.html"
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

          {/* Module 22 Final Learning Outcomes */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-neutral-100 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold tracking-wide">
              <span>EXECUTIVE SUMMARY</span>
              <span>•</span>
              <span>MODULE 22 LEARNING OUTCOMES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Module 22 Mastery Outcomes &amp; Architectural Takeaways
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              By completing this module, you have mastered the complete architectural lifecycle of enterprise distributed ledger technology:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-neutral-300">
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain enterprise blockchain fundamentals and organizational trust models.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Compare public, private, and consortium permissioned blockchain networks.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Design multi-party permissioned blockchain architectures with defined governance.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Navigate the Linux Foundation Hyperledger ecosystem (Fabric, Besu, Indy, Aries, Cacti).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain Hyperledger Fabric modular architecture and component decoupling.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Differentiate endorsing, committing, anchor, and gateway peer responsibilities.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Configure MSPs and X.509 certificate-based cryptographic identity domains.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Execute Fabric CA registration and enrollment workflows for users and nodes.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Design isolated channels and granular Private Data Collections (PDC).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Develop Go-based chaincode using the modern Fabric Contract API.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Configure multi-organization endorsement policies using boolean logic.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Trace Fabric&apos;s Execute-Order-Validate transaction lifecycle and MVCC validation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Differentiate append-only blockchain transaction history from World State database.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Integrate CouchDB for declarative JSON secondary indexing and rich queries.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Deploy Fabric blockchain networks using Docker and Docker Compose.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Build end-to-end enterprise supply chain traceability applications.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Apply enterprise blockchain security controls across identity, containers, and data.</span>
              </div>
            </div>

            {/* Final Project Prompt */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 mt-4">
              <span className="text-amber-400 font-bold font-mono text-xs uppercase tracking-wider block">
                Final Capstone Project &bull; PrepSpaces Enterprise Supply Chain Network
              </span>
              <p className="text-sm text-neutral-200 leading-relaxed font-sans">
                Build a production-grade multi-organization supply chain tracking platform combining Go chaincode (<code>supplychain.go</code>), CouchDB state databases, Fabric Gateway, and a React dashboard. Demonstrate a manufacturer registering a batch of laptops, updating status to PACKED and SHIPPED, initiating custody transfer, having the distributor confirm receipt on-chain, and querying the complete immutable transaction history via CouchDB rich queries!
              </p>
            </div>
          </div>

          {/* Module 22 Progress Checklist */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
                  <span>PROGRESS TRACKER</span>
                  <span>•</span>
                  <span>MODULE 22 MASTERY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
                  Hyperledger Fabric Competency Checklist
                </h3>
                <p className="text-sm text-neutral-600">
                  Track your mastery across all 28 foundational enterprise competencies. Automatically saved in local browser storage.
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
              to="/learning/blockchain/daos-governance"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-500 group-hover:-translate-x-1 transition-transform" />
              <span>Previous: Module 21 (DAOs &amp; Governance)</span>
            </Link>
            <Link
              to="/learning/blockchain/modular-blockchains"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Next: Module 23 (Modular Blockchains)</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
    '''
