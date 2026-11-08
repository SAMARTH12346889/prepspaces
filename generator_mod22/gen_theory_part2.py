# -*- coding: utf-8 -*-
"""
Module 22 Theory Section: Parts 11 through 20
Comprehensive, university-grade, zero information loss.
"""

def get_theory_part2():
    return '''
          {/* Part 11: Chaincode Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 11</span>
              <span>•</span>
              <span>CHAINCODE ARCHITECTURE &amp; SMART CONTRACTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              11. Chaincode Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">11.1 What is Chaincode?</h3>
              <p>
                <strong>Chaincode</strong> is the software package hosted on peer nodes that contains the smart contract business logic defining how assets are created, queried, modified, and transferred on the distributed ledger.
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Function</th>
                      <th className="p-3">Transaction Purpose</th>
                      <th className="p-3">State Modification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">CreateProduct</td>
                      <td className="p-3 text-neutral-600">Registers a new batch; restricted to Org1MSP (Manufacturer)</td>
                      <td className="p-3 text-emerald-700 font-bold">PutState(PRODUCT_ID, JSON)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">ReadProduct</td>
                      <td className="p-3 text-neutral-600">Retrieves latest asset state; open to channel members</td>
                      <td className="p-3 text-neutral-800">GetState(PRODUCT_ID) [Read-Only]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">UpdateStatus</td>
                      <td className="p-3 text-neutral-600">Updates location &amp; state (CREATED &rarr; PACKED &rarr; SHIPPED &rarr; DELIVERED)</td>
                      <td className="p-3 text-amber-800">PutState(PRODUCT_ID, JSON)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">TransferCustody</td>
                      <td className="p-3 text-neutral-600">Owner nominates PendingOwnerMSP (Two-Step Custody Handshake)</td>
                      <td className="p-3 text-amber-800">PutState(PRODUCT_ID, JSON)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">AcceptCustodyTransfer</td>
                      <td className="p-3 text-neutral-600">Receiving org confirms physical receipt and assumes ownership</td>
                      <td className="p-3 text-emerald-700 font-bold">PutState(PRODUCT_ID, JSON)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">GetProductsByStatus</td>
                      <td className="p-3 text-neutral-600">Executes declarative CouchDB Mango query across assets</td>
                      <td className="p-3 text-neutral-800">GetQueryResult(queryString)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">GetHistory</td>
                      <td className="p-3 text-neutral-600">Reconstructs sequential audit trail of key modifications</td>
                      <td className="p-3 text-neutral-800">GetHistoryForKey(PRODUCT_ID)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 12: Chaincode Development */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 12</span>
              <span>•</span>
              <span>CHAINCODE DEVELOPMENT IN GO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              12. Chaincode Development in Go
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">12.1 The Cardinal Rule of Deterministic Execution</h3>
              <p>
                Because multiple independent peer nodes execute transaction proposals in parallel, the business logic <strong>must be strictly deterministic</strong>. Any non-determinism causes endorsing peers to compute conflicting read/write sets, failing the endorsement policy and rejecting the transaction.
              </p>
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-950 space-y-2">
                <div className="font-bold uppercase tracking-wider">Forbidden Non-Deterministic Patterns:</div>
                <p>
                  &bull; <strong>NEVER call <code>time.Now()</code>:</strong> Host system clocks differ by milliseconds across containers. Use <code>ctx.GetStub().GetTxTimestamp()</code>.<br />
                  &bull; <strong>NEVER call external HTTP APIs:</strong> External web services can time out or return changing payloads.<br />
                  &bull; <strong>NEVER use random number generators:</strong> <code>rand.Int()</code> yields different seeds per peer.<br />
                  &bull; <strong>NEVER iterate raw Go maps directly:</strong> Go randomizes map iteration order. Sort keys before marshaling.
                </p>
              </div>
            </div>
          </div>

          {/* Part 13: Endorsement Policies */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 13</span>
              <span>•</span>
              <span>ENDORSEMENT POLICIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              13. Endorsement Policies
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">13.1 Boolean Policy Syntax</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Policy Expression</th>
                      <th className="p-3">Logical Requirement</th>
                      <th className="p-3">Typical Enterprise Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">AND(&apos;Org1MSP.peer&apos;, &apos;Org2MSP.peer&apos;)</td>
                      <td className="p-3">Both Org1 AND Org2 peer signatures required</td>
                      <td className="p-3 text-neutral-600">Bilateral custody handoffs and settlement confirmation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">OR(&apos;Org1MSP.peer&apos;, &apos;Org2MSP.peer&apos;)</td>
                      <td className="p-3">Either Org1 OR Org2 peer signature required</td>
                      <td className="p-3 text-neutral-600">Standard status queries and unilateral telemetry updates</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">OutOf(2, &apos;Org1.peer&apos;, &apos;Org2.peer&apos;, &apos;Org3.peer&apos;)</td>
                      <td className="p-3">Any 2 of the 3 consortium peers required</td>
                      <td className="p-3 text-neutral-600">Consortium majority approvals and multi-party governance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 14: Transaction Execution Flow */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 14</span>
              <span>•</span>
              <span>TRANSACTION LIFECYCLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              14. Transaction Execution Flow &amp; MVCC Validation
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">14.1 The Complete 11-Stage Pipeline</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  1. Client Application &rarr; Creates signed proposal via Fabric Gateway<br />
                  2. Gateway Node &rarr; Inspects endorsement policy and routes proposal to target endorsing peers<br />
                  3. Endorsing Peers &rarr; Simulate chaincode proposal, read current world state, produce ReadSet &amp; WriteSet<br />
                  4. Proposal Signatures &rarr; Endorsers cryptographically sign simulation results &rarr; Return to Gateway<br />
                  5. Gateway Aggregation &rarr; Verifies policy satisfied and read/write sets are consistent<br />
                  6. Ordering Service &rarr; Receives assembled transaction &rarr; Orders deterministically into block<br />
                  7. Block Packaging &rarr; Cuts block when MaxMessageCount, AbsoluteMaxBytes, or BatchTimeout triggers<br />
                  8. Block Distribution &rarr; Orderer distributes block to all committing peers on channel via Gossip<br />
                  9. Peer Validation &rarr; Committing peers verify endorsement signatures &amp; execute MVCC Conflict Checks<br />
                  10. Ledger Commitment &rarr; Block appended to local blockchain; valid write sets committed to World State<br />
                  11. Event Delivery &rarr; Commit status notification emitted to client application!
                </code>
              </div>
            </div>
          </div>

          {/* Part 15: Ledger and World State */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 15</span>
              <span>•</span>
              <span>LEDGER STORAGE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              15. Ledger and World State
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">15.1 Blockchain vs. World State</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Ledger Component</th>
                      <th className="p-3">Data Structure</th>
                      <th className="p-3">Storage Engine</th>
                      <th className="p-3">Primary Query Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Blockchain (History)</td>
                      <td className="p-3 text-neutral-700">Cryptographically linked sequential blocks</td>
                      <td className="p-3 text-neutral-600">Append-only flat files on peer filesystem</td>
                      <td className="p-3 text-neutral-600">Complete immutable audit trail of every past modification</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">World State (Current)</td>
                      <td className="p-3 text-neutral-700">Latest key-value pairs representing current reality</td>
                      <td className="p-3 text-neutral-600">LevelDB (embedded) or CouchDB (external)</td>
                      <td className="p-3 text-neutral-600">Fast O(1) key lookups and rich JSON field-level queries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 16: CouchDB Integration */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 16</span>
              <span>•</span>
              <span>COUCHDB INTEGRATION &amp; MANGO INDEXES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              16. CouchDB Integration &amp; Declarative Indexes
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">16.1 LevelDB vs. CouchDB</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Database Feature</th>
                      <th className="p-3">Embedded LevelDB (Default)</th>
                      <th className="p-3">Apache CouchDB (Enterprise)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Data Model</td>
                      <td className="p-3 text-neutral-600">Byte arrays (Key-Value only)</td>
                      <td className="p-3 text-amber-900 font-bold">Structured JSON Documents</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Query Capabilities</td>
                      <td className="p-3 text-neutral-600">Key, Key Range, and Composite Keys only</td>
                      <td className="p-3 text-emerald-700 font-bold">Rich JSON queries (Mango selector syntax)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Secondary Indexes</td>
                      <td className="p-3 text-neutral-600">No secondary indexing</td>
                      <td className="p-3 text-emerald-700 font-bold">Declarative JSON B-tree indexes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Deployment Footprint</td>
                      <td className="p-3 text-neutral-600">Embedded in peer process</td>
                      <td className="p-3 text-neutral-600">Dedicated Docker container per peer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 17: Network Deployment */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 17</span>
              <span>•</span>
              <span>NETWORK TOPOLOGY &amp; DEPLOYMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              17. Fabric Network Deployment
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.1 Development vs. Production Infrastructure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Test Network (Educational)</div>
                  <p className="text-neutral-600">Local Docker network on single workstation, single-node Raft orderer, cryptogen or basic CA credentials, ephemeral test ledger volumes.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Production Enterprise Consortium</div>
                  <p className="text-neutral-600">Kubernetes multi-cloud deployment, 5-node distributed Raft or BFT ordering cluster, HSM-backed CA roots, TLS mutual authentication, persistent SAN volumes, centralized Prometheus/Grafana telemetry.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 18: Docker Infrastructure */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 18</span>
              <span>•</span>
              <span>DOCKER-BASED INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              18. Docker-Based Blockchain Infrastructure
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">18.1 Containerized Node Topology</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Docker Host Network: fabric_test]<br />
                  &nbsp;&nbsp;&bull; orderer.example.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:7050 (Raft Ordering Node)<br />
                  &nbsp;&nbsp;&bull; peer0.org1.example.com&nbsp;&nbsp;&nbsp;:7051 (Org1 Peer, CouchDB:5984)<br />
                  &nbsp;&nbsp;&bull; peer0.org2.example.com&nbsp;&nbsp;&nbsp;:9051 (Org2 Peer, CouchDB:7984)<br />
                  &nbsp;&nbsp;&bull; ca_org1 / ca_org2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:7054 / :8054 (Fabric CAs)<br />
                  &nbsp;&nbsp;&bull; chaincode container&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Isolated Docker bridge (CCAAS or Docker-in-Docker)
                </code>
              </div>
            </div>
          </div>

          {/* Part 19: Enterprise Supply Chain */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19</span>
              <span>•</span>
              <span>SUPPLY CHAIN TRACEABILITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19. Enterprise Supply Chain Applications
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">19.1 The Physical-to-Digital Trust Problem</h3>
              <p>
                A blockchain proves that a transaction was cryptographically authorized and endorsed by specific participants. <strong>It cannot inherently guarantee that physical reality matches the digital record.</strong>
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950">
                To close the Physical-to-Digital Trust Gap in production supply chains, enterprise blockchain must be coupled with: 1) Hardware-rooted cryptographic IoT sensor telemetry; 2) Tamper-evident serialization (cryptographic 2D DataMatrix / NFC); 3) Multi-party endorsements (e.g., both Manufacturer AND Independent QA Auditor must sign release); 4) Physical regulatory spot-audits.
              </div>
            </div>
          </div>

          {/* Part 20: Enterprise Security */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 20</span>
              <span>•</span>
              <span>ENTERPRISE BLOCKCHAIN SECURITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              20. Enterprise Blockchain Security
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">20.1 Twelve Core Enterprise Security Controls</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Security Control</th>
                      <th className="p-3">Target Threat Vector</th>
                      <th className="p-3">Defensive Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr><td className="p-3 font-bold">1. MSP Validation</td><td className="p-3">Impersonation of unauthorized entities</td><td className="p-3">Strict X.509 cryptographic certificate verification</td></tr>
                    <tr><td className="p-3 font-bold">2. Certificate Revocation</td><td className="p-3">Compromised employee or peer private keys</td><td className="p-3">Active CRL distribution and channel MSP revocation lists</td></tr>
                    <tr><td className="p-3 font-bold">3. Mutual TLS (mTLS)</td><td className="p-3">Man-in-the-Middle (MitM) &amp; eavesdropping</td><td className="p-3">Enforced TLS on all inter-peer and orderer gRPC links</td></tr>
                    <tr><td className="p-3 font-bold">4. Endorsement Policies</td><td className="p-3">Rogue peer committing fabricated state</td><td className="p-3">Multi-organization counter-signature requirement</td></tr>
                    <tr><td className="p-3 font-bold">5. ABAC Authorization</td><td className="p-3">Internal privilege escalation</td><td className="p-3">Fine-grained certificate attribute verification in chaincode</td></tr>
                    <tr><td className="p-3 font-bold">6. Private Data Collections</td><td className="p-3">Commercial espionage across consortium</td><td className="p-3">SideDB storage with on-chain SHA-256 hash proofs</td></tr>
                    <tr><td className="p-3 font-bold">7. Docker Hardening</td><td className="p-3">Container breakout &amp; host access</td><td className="p-3">Non-root container execution, read-only rootfilesystems</td></tr>
                    <tr><td className="p-3 font-bold">8. HSM Key Custody</td><td className="p-3">Private key exfiltration</td><td className="p-3">Hardware Security Modules (PKCS#11) for peer signing keys</td></tr>
                    <tr><td className="p-3 font-bold">9. Deterministic Logic</td><td className="p-3">Consensus stalling and endorsement failure</td><td className="p-3">TxTimestamp utilization; zero external API dependencies</td></tr>
                    <tr><td className="p-3 font-bold">10. CouchDB Sanitization</td><td className="p-3">CouchDB injection &amp; phantom reads</td><td className="p-3">Strict input validation and read-only query segregation</td></tr>
                    <tr><td className="p-3 font-bold">11. Channel Lifecycle</td><td className="p-3">Unauthorized chaincode policy downgrades</td><td className="p-3">Majority consortium approval required to modify definitions</td></tr>
                    <tr><td className="p-3 font-bold">12. Operational Telemetry</td><td className="p-3">Undetected network disruption or latency</td><td className="p-3">Prometheus metrics monitoring peer block commit latency</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
'''
