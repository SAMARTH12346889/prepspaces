# -*- coding: utf-8 -*-
"""
Module 22 Theory Section: Parts 1 through 10
Enterprise Distributed Ledger Technology & Hyperledger Fabric Architecture
Comprehensive, university-grade, zero information loss.
"""

def get_theory_part1():
    return '''
          {/* Part 1: Enterprise Blockchain Fundamentals */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 1</span>
              <span>•</span>
              <span>ENTERPRISE DISTRIBUTED LEDGER TECHNOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              1. Enterprise Blockchain Fundamentals
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">1.1 What is Enterprise Blockchain?</h3>
              <p>
                <strong>Enterprise blockchain</strong> is a distributed ledger technology architected specifically to support collaboration, business workflows, and automated transactions between authenticated organizations.
              </p>
              <p>
                Unlike public permissionless blockchains (such as Bitcoin or Ethereum), where anonymous participants can execute transactions without prior vetting, enterprise blockchain networks enforce strict organizational identities and predefined access permissions.
              </p>

              {/* Real-World Concrete Supply Chain Scenario Box */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold font-mono text-xs uppercase tracking-wider">
                  <span>Concrete Enterprise Scenario: Pharmaceutical Supply Chain</span>
                </div>
                <p className="text-sm text-neutral-800 leading-relaxed">
                  Consider a pharmaceutical supply chain comprising four independent enterprise entities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <strong className="text-neutral-900 block mb-1">1. Manufacturer</strong>
                    <p className="text-neutral-600">Records batch synthesis, serialization, and lab testing data.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <strong className="text-neutral-900 block mb-1">2. Distributor</strong>
                    <p className="text-neutral-600">Confirms wholesale receipt and cold-chain integrity verification.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <strong className="text-neutral-900 block mb-1">3. Logistics Provider</strong>
                    <p className="text-neutral-600">Transmits real-time IoT GPS and temperature telemetry.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <strong className="text-neutral-900 block mb-1">4. Hospital / Clinic</strong>
                    <p className="text-neutral-600">Scans barcode on receipt and dispenses verified medicine.</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed pt-1">
                  Each organization maintains its own private ERP and database systems. Without a shared distributed ledger, verifying custody transfers requires slow, manual reconciliation across disparate databases. An enterprise blockchain provides a single, immutable, cryptographic source of truth where all four organizations maintain matching ledger replicas according to their permissions.
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.2 Why Do Enterprises Need Blockchain?</h3>
              <p>
                Traditional enterprise systems rely on centralized, fragmented internal databases:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Traditional Fragmented Silos]:<br />
                  Manufacturer DB &rarr; (Manual EDI/Email/API) &rarr; Distributor DB &rarr; (Manual Phone/Spreadsheet) &rarr; Logistics DB &rarr; Hospital DB<br /><br />
                  [Permissioned Enterprise Blockchain Shared Ledger]:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[FABRIC NETWORK]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-------------------+-------------------+<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;[Org 1: Mfr]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Org 2: Dist]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Org 3: Hosp]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;[Peer 0]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Peer 0]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Peer 0]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;====== [SHARED IMMUTABLE CHANNEL LEDGER] ======
                </code>
              </div>
              <p>
                Potential failure points in traditional centralized architectures that blockchain resolves:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-white p-4 rounded-xl border border-neutral-200">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Conflicting Versions:</strong> Different companies hold conflicting records for the same batch.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Manual Reconciliation:</strong> Costly audit teams spend weeks balancing paper manifests and spreadsheets.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Delayed Settlement:</strong> Trade financing is stalled due to lack of verified delivery proofs.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Single-Party Vulnerability:</strong> A centralized database operator can alter or backdate transaction records.</li>
              </ul>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-mono">
                <strong>Architectural Principle:</strong> Blockchain is not a replacement for internal transactional databases. It is required when multiple sovereign organizations need a shared, verifiable, and tamper-resistant transaction history without ceding total control to an external central monopoly.
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.3 Seven Characteristics of Enterprise Blockchain</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">1. Permissioned Membership</div>
                  <p className="text-neutral-600">Every peer, client, and admin possesses an authenticated X.509 cryptographic identity.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">2. Distributed Ledger</div>
                  <p className="text-neutral-600">Independent peer nodes in each organization hold synchronized copies of the ledger.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">3. Granular Access Control</div>
                  <p className="text-neutral-600">Organizational policies determine exactly who can invoke, query, or endorse transactions.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">4. Channel &amp; PDC Privacy</div>
                  <p className="text-neutral-600">Bilateral confidential data is segmented using isolated channels and private data collections.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">5. Strict Auditability</div>
                  <p className="text-neutral-600">All historical asset mutations are preserved permanently in an append-only cryptographic chain.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">6. Smart Contracts (Chaincode)</div>
                  <p className="text-neutral-600">Business logic written in Go, Java, or TypeScript executes deterministically across nodes.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1 sm:col-span-3">
                  <div className="font-bold text-amber-900">7. Formal Consortium Governance</div>
                  <p className="text-neutral-600">Network rules, channel memberships, and endorsement criteria are updated through cryptographic multi-sig approval policies.</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.4 Enterprise Blockchain Use Cases Matrix</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Industry Vertical</th>
                      <th className="p-3">Production Application</th>
                      <th className="p-3">Primary Architectural Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Banking &amp; Finance</td>
                      <td className="p-3 text-neutral-700">Interbank clearing &amp; bilateral trade finance reconciliation</td>
                      <td className="p-3 text-neutral-600">Eliminates nostro/vostro account delays and manual SWIFT confirmation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Healthcare</td>
                      <td className="p-3 text-neutral-700">Cross-hospital electronic medical record (EMR) exchange</td>
                      <td className="p-3 text-neutral-600">Patient consent verification while preserving HIPAA privacy via PDCs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Pharmaceuticals</td>
                      <td className="p-3 text-neutral-700">Anti-counterfeit drug serialization &amp; DSCSA compliance</td>
                      <td className="p-3 text-neutral-600">End-to-end chain of custody from chemical synthesis to retail pharmacy</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Global Logistics</td>
                      <td className="p-3 text-neutral-700">Multi-modal container shipment tracking &amp; customs e-bills</td>
                      <td className="p-3 text-neutral-600">Automated port release upon multi-party customs endorsement</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Manufacturing</td>
                      <td className="p-3 text-neutral-700">Aerospace &amp; automotive component provenance tracking</td>
                      <td className="p-3 text-neutral-600">Immediate root-cause recall isolation for defective aircraft parts</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Agriculture &amp; Food</td>
                      <td className="p-3 text-neutral-700">Farm-to-fork organic origin and cold-chain monitoring</td>
                      <td className="p-3 text-neutral-600">Instant tracking of contaminated batches during food-borne outbreaks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 2: Public vs Private Blockchain */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 2</span>
              <span>•</span>
              <span>NETWORK TAXONOMY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              2. Public vs. Private vs. Permissioned Blockchain
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">2.1 Detailed Architectural Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Architectural Feature</th>
                      <th className="p-3">Public Blockchain (e.g., Ethereum)</th>
                      <th className="p-3">Permissioned Blockchain (Hyperledger Fabric)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Network Membership</td>
                      <td className="p-3 text-neutral-600">Open to anyone; pseudonymous</td>
                      <td className="p-3 text-amber-900 font-bold">Controlled; authenticated X.509 PKI identities</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Transaction Privacy</td>
                      <td className="p-3 text-neutral-600">Transparent to all nodes by default</td>
                      <td className="p-3 text-emerald-700 font-bold">Granular; partitioned via Channels &amp; Private Collections</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Consensus Architecture</td>
                      <td className="p-3 text-neutral-600">Order-Execute (PoS, PoW); all nodes execute all txs</td>
                      <td className="p-3 text-emerald-700 font-bold">Execute-Order-Validate; decoupled ordering service</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Economic Gas Model</td>
                      <td className="p-3 text-neutral-600">Mandatory cryptocurrency fees per op</td>
                      <td className="p-3 text-emerald-700 font-bold">Zero gas token; enterprise operational SLA model</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Smart Contract Languages</td>
                      <td className="p-3 text-neutral-600">Domain-specific: Solidity, Vyper</td>
                      <td className="p-3 text-neutral-900 font-bold">Standard general-purpose: Go, Java, TypeScript</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Throughput Capacity</td>
                      <td className="p-3 text-neutral-600">15–100 TPS (L1)</td>
                      <td className="p-3 text-emerald-700 font-bold">2,000–20,000+ TPS depending on endorsement policy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">2.2 Private vs. Permissioned: The Critical Distinction</h3>
              <p>
                &quot;Private&quot; and &quot;Permissioned&quot; are often confused, but signify different architectural traits:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 text-sm">Private Blockchain</span>
                  <p className="text-neutral-600">Restricts read/write access and network participation to a single enterprise or bounded legal boundary. Usually single-operator.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 text-sm">Permissioned Consortium Blockchain</span>
                  <p className="text-neutral-600">Multiple independent, competing organizations participate in a shared infrastructure where every node and actor has authenticated cryptographic roles governed by shared policies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3: Permissioned Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 3</span>
              <span>•</span>
              <span>CONSORTIUM TRUST ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              3. Permissioned Blockchain Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">3.1 The Ten Core Architectural Components</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-xs font-mono">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">1. Organizations (MSPs)</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">2. Peer Nodes</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">3. Ordering Nodes</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">4. Certificate Authorities</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">5. Channels</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">6. Chaincode Packages</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">7. Blockchain Blocks</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">8. World State DB</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">9. Fabric Gateway</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">10. Client Applications</div>
              </div>
            </div>
          </div>

          {/* Part 4: Hyperledger Ecosystem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 4</span>
              <span>•</span>
              <span>THE LINUX FOUNDATION HYPERLEDGER ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              4. Hyperledger Ecosystem
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                <strong>Hyperledger</strong> is an open-source collaborative effort hosted by the Linux Foundation to advance cross-industry enterprise blockchain technologies:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Hyperledger Fabric</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">DLT Framework</span>
                  </div>
                  <p className="text-neutral-600">The flagship permissioned modular ledger engine featuring decoupled execution, channels, and private data collections.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Hyperledger Besu</span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900">EVM Client</span>
                  </div>
                  <p className="text-neutral-600">Enterprise Ethereum client written in Java supporting public Ethereum mainnet and private permissioned networks (QBFT, IBFT 2.0).</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Hyperledger Indy &amp; Aries</span>
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900">Digital Identity</span>
                  </div>
                  <p className="text-neutral-600">Self-Sovereign Identity (SSI), verifiable credentials (VCs), and decentralized identifier (DID) communication protocols.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Hyperledger Cacti</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">Interoperability</span>
                  </div>
                  <p className="text-neutral-600">Interoperability framework enabling atomic cross-ledger asset exchanges between Fabric, Besu, Corda, and Ethereum.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 5: Hyperledger Fabric Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 5</span>
              <span>•</span>
              <span>MODULAR FABRIC ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              5. Hyperledger Fabric Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">5.1 Decoupled Modular Design</h3>
              <p>
                Fabric separates transaction execution into three independent phases:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [PHASE 1: EXECUTION] &rarr; Endorsing peers simulate proposal in sandboxes &rarr; Produce Read/Write Sets<br />
                  [PHASE 2: ORDERING]&nbsp;&nbsp;&rarr; Ordering service sequences transactions into blocks &rarr; Does NOT execute chaincode<br />
                  [PHASE 3: VALIDATION]&rarr; Committing peers verify endorsements and MVCC versions &rarr; Commit to local ledger!
                </code>
              </div>
            </div>
          </div>

          {/* Part 6: Peers and Ordering Nodes */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 6</span>
              <span>•</span>
              <span>PEERS &amp; ORDERING SERVICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              6. Fabric Peers and Ordering Nodes
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">6.1 Peer Node Functional Roles</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Peer Role</th>
                      <th className="p-3">Core Operational Responsibilities</th>
                      <th className="p-3">Hardware Resource Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Endorsing Peer</td>
                      <td className="p-3 text-neutral-700">Simulates chaincode proposals, validates business rules, signs read/write sets.</td>
                      <td className="p-3 text-neutral-600">High CPU &amp; Memory (runs Go/Node execution runtimes).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Committing Peer</td>
                      <td className="p-3 text-neutral-700">Validates block signatures, verifies MVCC read versions, writes to world state.</td>
                      <td className="p-3 text-neutral-600">Standard compute, high disk I/O throughput.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Anchor Peer</td>
                      <td className="p-3 text-neutral-700">Enables cross-organization peer discovery and Gossip data dissemination.</td>
                      <td className="p-3 text-neutral-600">Must be addressable across organizational firewalls.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Gateway Peer</td>
                      <td className="p-3 text-neutral-700">Receives client transactions, discovers endorsers, aggregates signatures (v2.4+).</td>
                      <td className="p-3 text-neutral-600">High network bandwidth and connection pooling.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.2 Ordering Consensus: Raft CFT vs. SmartBFT</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Raft Consensus (Crash Fault Tolerant)</div>
                  <p className="text-neutral-600">Leader-follower protocol. Requires strict majority quorum Q = floor(N/2) + 1. Tolerates f = floor((N-1)/2) crashed nodes. Assumes honest nodes.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">BFT Consensus (Fabric v3.0 Native SmartBFT)</div>
                  <p className="text-neutral-600">Byzantine Fault Tolerant. Requires N &gt;= 3f + 1 nodes. Tolerates up to f malicious, colluding, or compromised ordering nodes. Designed for adversarial cross-border consortia.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 7: Membership Service Provider (MSP) */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 7</span>
              <span>•</span>
              <span>MEMBERSHIP SERVICE PROVIDER (MSP)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              7. Membership Service Provider (MSP)
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">7.1 What is an MSP?</h3>
              <p>
                An <strong>MSP</strong> is the core identity management component in Hyperledger Fabric. It translates abstract digital identities into verified organizational memberships.
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Client X.509 Certificate] &rarr; [Organization MSP: Org1MSP]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Validates Root CA signature chain<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Checks Certificate Revocation List (CRL)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Extracts Organizational Unit (OU): client vs peer vs admin<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr;<br />
                  [Decision: Authenticated Org1MSP Member] &rarr; Evaluated against Channel Policy!
                </code>
              </div>
            </div>
          </div>

          {/* Part 8: Certificate Authorities */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 8</span>
              <span>•</span>
              <span>CERTIFICATE AUTHORITIES &amp; PKI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              8. Certificate Authorities (Fabric CA)
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">8.1 Registration vs. Enrollment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Registration</div>
                  <p className="text-neutral-600">Administrative process where an admin registers a new user with Fabric CA, assigning username, one-time enrollment secret, and role attributes.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Enrollment</div>
                  <p className="text-neutral-600">Client-side process where the user provides their secret to the CA. The client generates a private key locally and receives an X.509 certificate signed by the CA.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 9: Identity Management */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 9</span>
              <span>•</span>
              <span>IDENTITY &amp; ATTRIBUTE ACCESS CONTROL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              9. Identity Management &amp; Attribute-Based Access Control (ABAC)
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">9.1 Enforcing ABAC in Go Chaincode</h3>
              <p>
                Chaincode can inspect X.509 certificate attributes dynamically using the Fabric Client Identity library:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  role, found, err := ctx.GetClientIdentity().GetAttributeValue(&quot;role&quot;)<br />
                  if err != nil || !found || role != &quot;manufacturer&quot; &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return fmt.Errorf(&quot;unauthorized: client lacks manufacturer clearance&quot;)<br />
                  &#125;
                </code>
              </div>
            </div>
          </div>

          {/* Part 10: Channels and Private Data Collections */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 10</span>
              <span>•</span>
              <span>CHANNELS &amp; PRIVATE DATA COLLECTIONS (PDC)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              10. Channels and Private Data Collections
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">10.1 Channel vs. Private Data Collection Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Privacy Dimension</th>
                      <th className="p-3">Channel Isolation</th>
                      <th className="p-3">Private Data Collection (PDC)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Ledger Architecture</td>
                      <td className="p-3 text-neutral-700">Completely separate blockchain ledger</td>
                      <td className="p-3 text-neutral-700">Shared channel ledger holds hash; private state holds plaintext</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Membership Scope</td>
                      <td className="p-3 text-neutral-700">Dedicated channel member orgs</td>
                      <td className="p-3 text-neutral-700">Subset of organizations on an existing shared channel</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Transaction Existence</td>
                      <td className="p-3 text-neutral-700">Completely invisible to non-channel orgs</td>
                      <td className="p-3 text-neutral-700">All channel peers see the transaction occurred and verify its hash</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Ideal Enterprise Use</td>
                      <td className="p-3 text-neutral-700">Distinct multi-party business relationships</td>
                      <td className="p-3 text-neutral-700">Bilateral pricing and proprietary terms within a consortium workflow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
'''
