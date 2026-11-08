# -*- coding: utf-8 -*-
"""
Module 22 Interactive Simulators:
1. Fabric Execute-Order-Validate Transaction Lifecycle Visualizer
2. Endorsement Policy & Multi-Org Validator Sandbox
3. Channel & Private Data Collection (PDC) Privacy Sandbox
4. Supply Chain Custody Transfer & CouchDB Rich Query Engine
"""

def generate_interactive_simulators():
    return '''
        {/* Interactive Simulators Section */}
        <section id="simulators" className="space-y-12">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>HANDS-ON ENTERPRISE LABS & PROTOCOL SIMULATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive Hyperledger Fabric Architecture Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Explore transaction simulation, multi-organization endorsement policies, Private Data Collections (PDC), MVCC concurrency conflicts, and CouchDB Mango queries.
            </p>
          </div>

          {/* Simulator 1: Execute-Order-Validate Lifecycle Visualizer */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Execute–Order–Validate Lifecycle Visualizer</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Step through Fabric&apos;s decoupled transaction pipeline and inspect simulated read/write sets and MVCC validation.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={resetLifecycleSim}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset Pipeline
                </button>
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              {[
                { stage: 0, label: "1. Client Proposal" },
                { stage: 1, label: "2. Peer Simulation" },
                { stage: 2, label: "3. Ordering Service" },
                { stage: 3, label: "4. MVCC & Commit" }
              ].map((st) => (
                <button
                  key={st.stage}
                  type="button"
                  onClick={() => setLifecycleStage(st.stage)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    lifecycleStage === st.stage
                      ? "bg-amber-600 text-white border-amber-600 font-bold shadow-sm"
                      : lifecycleStage > st.stage
                      ? "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold"
                      : "bg-neutral-50 text-neutral-400 border-neutral-200"
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            {/* Stage Details Panel */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider">
                  Stage {lifecycleStage + 1}: {
                    lifecycleStage === 0 ? "Client Application Proposal Construction" :
                    lifecycleStage === 1 ? "Endorsing Peers Chaincode Simulation & Signing" :
                    lifecycleStage === 2 ? "Ordering Service Batching & Block Packaging" :
                    "Committing Peers Validation & MVCC Commit"
                  }
                </span>
                <span className="text-neutral-400 text-[11px]">Channel: supplychannel</span>
              </div>

              {lifecycleStage === 0 && (
                <div className="space-y-3 leading-relaxed">
                  <p className="text-neutral-300">
                    Client application (Org1 Manufacturer) uses Fabric Gateway to construct an invocation proposal for <code>TransferCustody(&quot;P-1001&quot;, &quot;Org2MSP&quot;)</code>. The proposal is cryptographically signed using the client&apos;s X.509 private key.
                  </p>
                  <div className="p-3 bg-neutral-800 rounded-xl space-y-1 text-emerald-400">
                    <div>ProposalCreator: User1@org1.example.com (MSP: Org1MSP)</div>
                    <div>Target Chaincode: supplychain:1.0</div>
                    <div>Function: TransferCustody | Args: [&quot;P-1001&quot;, &quot;Org2MSP&quot;]</div>
                    <div>Proposal Hash: 0x9e4b7c2a1f0d8e6c...</div>
                  </div>
                </div>
              )}

              {lifecycleStage === 1 && (
                <div className="space-y-3 leading-relaxed">
                  <p className="text-neutral-300">
                    Endorsing peers (<code>peer0.org1</code> and <code>peer0.org2</code>) execute the chaincode in a temporary sandboxed runtime. They read world state without locking keys, produce a Read Set (version v1_0) and Write Set (PendingOwnerMSP = Org2MSP), and sign the proposal response.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-200">
                    <div className="p-3 bg-neutral-800 rounded-xl border border-neutral-700">
                      <div className="text-amber-400 font-bold">peer0.org1.example.com Endorsement</div>
                      <div>ReadSet: PRODUCT_P1001 (Ver: Block 12, Tx 0)</div>
                      <div>WriteSet: PRODUCT_P1001 (Status: SHIPPED, Pending: Org2MSP)</div>
                      <div className="text-emerald-400">Signature: VALID (Org1MSP)</div>
                    </div>
                    <div className="p-3 bg-neutral-800 rounded-xl border border-neutral-700">
                      <div className="text-amber-400 font-bold">peer0.org2.example.com Endorsement</div>
                      <div>ReadSet: PRODUCT_P1001 (Ver: Block 12, Tx 0)</div>
                      <div>WriteSet: PRODUCT_P1001 (Status: SHIPPED, Pending: Org2MSP)</div>
                      <div className="text-emerald-400">Signature: VALID (Org2MSP)</div>
                    </div>
                  </div>
                </div>
              )}

              {lifecycleStage === 2 && (
                <div className="space-y-3 leading-relaxed">
                  <p className="text-neutral-300">
                    Client aggregates endorsements and delivers the transaction envelope to the Raft Ordering Service. The orderer sequences transactions deterministically, batches them into Block #13 (MaxMessageCount: 200, Timeout: 1.5s), and distributes the block to all committing peers on <code>supplychannel</code>.
                  </p>
                  <div className="p-3 bg-neutral-800 rounded-xl space-y-1 text-amber-300">
                    <div>Ordering Leader: orderer.example.com (Raft Consensus Active)</div>
                    <div>Block Number: 13 | Channel: supplychannel</div>
                    <div>Previous Block Hash: 0x3d82a1f... | Block Data Hash: 0xfa61bc9...</div>
                    <div>Transactions in Block: 42 transactions</div>
                  </div>
                </div>
              )}

              {lifecycleStage === 3 && (
                <div className="space-y-3 leading-relaxed">
                  <p className="text-neutral-300">
                    Committing peers inspect Block #13. Each peer validates: 1) Endorsement policy satisfaction; 2) Signature validity; 3) <strong>MVCC Conflict Check</strong> (compares ReadSet version with current World State version).
                  </p>
                  <div className={`p-4 rounded-xl border ${
                    simulateMvccConflict
                      ? "bg-red-950/80 border-red-500 text-red-200"
                      : "bg-emerald-950/80 border-emerald-500 text-emerald-200"
                  }`}>
                    {simulateMvccConflict ? (
                      <div className="space-y-1">
                        <div className="font-bold text-red-400">TRANSACTION INVALIDATED: MVCC_READ_CONFLICT</div>
                        <div>Expected Key Version: Block 12, Tx 0 | Actual World State: Block 12, Tx 4 (Key was updated by concurrent transaction!)</div>
                        <div>Result: Block is committed, but transaction status flag set to INVALID. World state NOT updated!</div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="font-bold text-emerald-400">TRANSACTION COMMITTED VALID: STATUS 200 OK</div>
                        <div>MVCC Check: ReadSet (Block 12, Tx 0) matches current World State version.</div>
                        <div>World State Updated: Key PRODUCT_P1001 set to PendingOwnerMSP = &quot;Org2MSP&quot;.</div>
                        <div>Event Emitted: CustodyTransferRequested</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Simulation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={lifecycleStage === 0}
                  onClick={() => setLifecycleStage((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-neutral-300 text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 text-xs font-mono font-bold transition-all"
                >
                  &larr; Previous Stage
                </button>
                <button
                  type="button"
                  disabled={lifecycleStage === 3}
                  onClick={() => setLifecycleStage((prev) => Math.min(3, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-40 text-xs font-mono font-bold transition-all shadow-sm"
                >
                  Next Stage &rarr;
                </button>
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-neutral-700 select-none">
                <input
                  type="checkbox"
                  checked={simulateMvccConflict}
                  onChange={(e) => setSimulateMvccConflict(e.target.checked)}
                  className="w-4 h-4 rounded border-neutral-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="font-bold text-red-700">Simulate Concurrent MVCC Read Conflict</span>
              </label>
            </div>
          </div>

          {/* Simulator 2: Endorsement Policy & Multi-Org Validator */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
              <h3 className="text-xl font-bold text-neutral-900">Endorsement Policy &amp; Multi-Org Validator</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Configure boolean endorsement expressions and test peer endorsement scenarios against channel validation rules.</p>
            </div>

            {/* Policy Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-neutral-700 block">Select Active Chaincode Endorsement Policy:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs font-mono">
                {[
                  { id: "and12", label: "AND('Org1MSP.peer', 'Org2MSP.peer')", desc: "Manufacturer + Distributor both required" },
                  { id: "or12", label: "OR('Org1MSP.peer', 'Org2MSP.peer')", desc: "Either Manufacturer or Distributor" },
                  { id: "outof23", label: "OutOf(2, 'Org1.peer', 'Org2.peer', 'Org3.peer')", desc: "Any 2 of 3 Consortium Organizations" }
                ].map((pol) => (
                  <button
                    key={pol.id}
                    type="button"
                    onClick={() => setSelectedPolicy(pol.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPolicy === pol.id
                        ? "bg-amber-600 text-white border-amber-600 font-bold shadow-sm"
                        : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                    }`}
                  >
                    <div className="font-bold">{pol.label}</div>
                    <div className={`text-[10px] mt-1 ${selectedPolicy === pol.id ? "text-amber-100" : "text-neutral-500"}`}>{pol.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Peer Endorsement Toggles */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-neutral-700 block">Simulate Peer Simulation &amp; Endorsement Signatures:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                {[
                  { id: "org1", name: "peer0.org1.example.com", org: "Org1 (Manufacturer)" },
                  { id: "org2", name: "peer0.org2.example.com", org: "Org2 (Distributor)" },
                  { id: "org3", name: "peer0.org3.example.com", org: "Org3 (Logistics Provider)" }
                ].map((p) => {
                  const isEndorsed = peerEndorsements[p.id];
                  return (
                    <div
                      key={p.id}
                      onClick={() => togglePeerEndorsement(p.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all space-y-2 ${
                        isEndorsed
                          ? "bg-emerald-50 border-emerald-400 text-emerald-950"
                          : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-neutral-900">{p.org}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isEndorsed ? "bg-emerald-600 text-white" : "bg-neutral-300 text-neutral-700"
                        }`}>
                          {isEndorsed ? "SIGNED" : "NO SIGNATURE"}
                        </span>
                      </div>
                      <div className="text-[11px] text-neutral-500 font-mono truncate">{p.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Validation Outcome Banner */}
            <div className={`p-5 rounded-2xl border font-mono text-xs space-y-2 ${
              isPolicySatisfied
                ? "bg-emerald-50 border-emerald-400 text-emerald-950"
                : "bg-red-50 border-red-400 text-red-950"
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm uppercase">
                  Endorsement Verification: {isPolicySatisfied ? "POLICY SATISFIED (VALID)" : "POLICY FAILED (REJECTED)"}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white/80 font-bold">
                  {isPolicySatisfied ? "COMMIT TO LEDGER" : "DISCARD WRITES"}
                </span>
              </div>
              <p className="leading-relaxed text-[11px]">
                {selectedPolicy === "and12" && (
                  isPolicySatisfied
                    ? "Both Org1 (Manufacturer) and Org2 (Distributor) endorsements are present. Committing peers accept the read/write set."
                    : "Policy requires BOTH Org1 and Org2 endorsements. Transaction cannot be committed."
                )}
                {selectedPolicy === "or12" && (
                  isPolicySatisfied
                    ? "At least one required endorsement (Org1 or Org2) is present. Transaction accepted."
                    : "Neither Org1 nor Org2 endorsed the proposal. Transaction rejected."
                )}
                {selectedPolicy === "outof23" && (
                  isPolicySatisfied
                    ? "At least 2 out of 3 consortium organizations signed the proposal. Quorum threshold met."
                    : `Currently only ${activeEndorsementCount} of 3 peers signed. Minimum of 2 required.`
                )}
              </p>
            </div>
          </div>

          {/* Simulator 3: Channel vs. Private Data Collection (PDC) Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
              <h3 className="text-xl font-bold text-neutral-900">Channel vs. Private Data Collection (PDC) Sandbox</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Inspect how confidential pricing data is restricted to authorized collection peers while an immutable hash is recorded on the public ledger.</p>
            </div>

            {/* Data Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <span className="font-bold text-neutral-900 block uppercase tracking-wider text-[11px]">
                  Shared Channel Payload (Public to All Channel Orgs)
                </span>
                <div className="space-y-1 text-neutral-700 bg-white p-3 rounded-lg border border-neutral-200">
                  <div>productId: &quot;MED-1001&quot;</div>
                  <div>productName: &quot;Insulin Glargine 100U/ml&quot;</div>
                  <div>batchNumber: &quot;BATCH-2026-X9&quot;</div>
                  <div>status: &quot;SHIPPED&quot; | origin: &quot;Pune, India&quot;</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
                <span className="font-bold text-amber-900 block uppercase tracking-wider text-[11px]">
                  Private Commercial Terms (collectionManufacturerDistributor)
                </span>
                <div className="space-y-1 text-amber-950 bg-white p-3 rounded-lg border border-amber-200">
                  <div>wholesaleUnitPrice: $1,450.00 USD</div>
                  <div>volumeDiscount: 14.5%</div>
                  <div>contractReference: &quot;CONTR-PHARMA-2026-B2B&quot;</div>
                  <div>settlementTerms: &quot;Net 30 Days via RTGS&quot;</div>
                </div>
              </div>
            </div>

            {/* Multi-Org Visibility Matrix */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-neutral-700 block">
                Peer Ledger Visibility Across Organizations:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                {/* Org1 */}
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
                    <span className="font-bold text-neutral-900">Org1 (Manufacturer)</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">MEMBER</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-neutral-500">Public Channel State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT</div>
                    <div className="text-neutral-500 pt-1">Private Collection State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT (SideDB)</div>
                    <div className="text-[10px] text-neutral-400 pt-1">Can read/write wholesale price $1,450 &amp; terms.</div>
                  </div>
                </div>

                {/* Org2 */}
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
                    <span className="font-bold text-neutral-900">Org2 (Distributor)</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">MEMBER</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-neutral-500">Public Channel State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT</div>
                    <div className="text-neutral-500 pt-1">Private Collection State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT (SideDB)</div>
                    <div className="text-[10px] text-neutral-400 pt-1">Authorized recipient; receives private data via Gossip.</div>
                  </div>
                </div>

                {/* Org3 */}
                <div className="p-4 rounded-xl bg-white border border-red-200 space-y-2 bg-red-50/30">
                  <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
                    <span className="font-bold text-neutral-900">Org3 (Hospital / Retailer)</span>
                    <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">NON-MEMBER</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-neutral-500">Public Channel State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT</div>
                    <div className="text-neutral-500 pt-1">Private Collection State:</div>
                    <div className="text-red-700 font-bold">SHA-256 HASH ONLY</div>
                    <div className="text-[10px] text-neutral-600 font-mono pt-1 truncate">
                      Hash: 0x98f6bcd4621d373cade4e832627b4f6...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 4: Supply Chain Custody Transfer & CouchDB Rich Query */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
              <h3 className="text-xl font-bold text-neutral-900">2-Step Custody Transfer &amp; CouchDB Rich Query Sandbox</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Execute bilateral custody transitions and test declarative CouchDB Mango selector queries.</p>
            </div>

            {/* 2-Step Custody State Machine */}
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-neutral-800 pb-2">
                <span className="font-bold text-amber-400">Asset: PRODUCT_P1001 (Laptop Batch #2026-01)</span>
                <span className="text-neutral-400 text-[11px]">Lifecycle State: {custodyState.status}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div>Owner MSP: <strong className="text-emerald-400">{custodyState.ownerMSP}</strong></div>
                <div>Pending Owner: <strong className="text-amber-400">{custodyState.pendingOwnerMSP || "None"}</strong></div>
                <div>Location: <strong className="text-neutral-200">{custodyState.location}</strong></div>
                <div>Status: <strong className="text-emerald-400">{custodyState.status}</strong></div>
              </div>
            </div>

            {/* Custody Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                disabled={custodyState.status !== "CREATED"}
                onClick={() => handleUpdateStatus("PACKED", "Pune Warehouse")}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-mono font-bold hover:bg-neutral-100 disabled:opacity-40 transition-all"
              >
                1. Pack Product (Org1)
              </button>
              <button
                type="button"
                disabled={custodyState.status !== "PACKED"}
                onClick={() => handleUpdateStatus("SHIPPED", "Mumbai Distribution Hub")}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-mono font-bold hover:bg-neutral-100 disabled:opacity-40 transition-all"
              >
                2. Ship Product (Org1)
              </button>
              <button
                type="button"
                disabled={custodyState.status !== "SHIPPED" || custodyState.pendingOwnerMSP !== ""}
                onClick={handleInitiateTransfer}
                className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-mono font-bold disabled:opacity-40 transition-all"
              >
                3. Propose Custody to Org2MSP
              </button>
              <button
                type="button"
                disabled={custodyState.pendingOwnerMSP !== "Org2MSP"}
                onClick={handleAcceptTransfer}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold disabled:opacity-40 transition-all animate-pulse"
              >
                4. Accept Custody as Org2MSP
              </button>
              <button
                type="button"
                disabled={custodyState.ownerMSP !== "Org2MSP" || custodyState.status === "DELIVERED"}
                onClick={() => handleUpdateStatus("DELIVERED", "Mumbai Retail Store")}
                className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-bold disabled:opacity-40 transition-all"
              >
                5. Confirm Delivery (Org2)
              </button>
              <button
                type="button"
                onClick={resetCustodyState}
                className="px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 text-xs font-mono transition-all ml-auto"
              >
                Reset Asset
              </button>
            </div>

            {/* CouchDB Rich Query Selector */}
            <div className="space-y-3 pt-2 border-t border-neutral-200">
              <span className="text-xs font-mono font-bold text-neutral-700 block">
                Test CouchDB Rich JSON Query Execution:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {[
                  { id: "shipped", label: "status == 'SHIPPED'", query: '{"selector":{"docType":"product","status":"SHIPPED"}}' },
                  { id: "delivered", label: "status == 'DELIVERED'", query: '{"selector":{"docType":"product","status":"DELIVERED"}}' },
                  { id: "org1", label: "ownerMSP == 'Org1MSP'", query: '{"selector":{"docType":"product","ownerMSP":"Org1MSP"}}' }
                ].map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setActiveQuery(q.id)}
                    className={`px-3 py-1.5 rounded-lg border transition-all ${
                      activeQuery === q.id
                        ? "bg-neutral-900 text-white border-neutral-900 font-bold"
                        : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-2">
                <div className="text-amber-400 font-bold">Query: GetQueryResult(queryString)</div>
                <div className="text-neutral-400 text-[11px]">
                  Index Utilized: <code>productStatusIndex</code> (B-Tree traversal on fields: <code>[&quot;docType&quot;, &quot;status&quot;]</code>)
                </div>
                <div className="p-3 bg-neutral-800 rounded-lg text-emerald-400 text-[11px] overflow-x-auto">
                  {activeQuery === "shipped" && `[ { "productId": "P-1001", "name": "Laptop", "status": "${custodyState.status === "SHIPPED" ? "SHIPPED" : "None Found in State"}" } ]`}
                  {activeQuery === "delivered" && `[ { "productId": "P-1001", "name": "Laptop", "status": "${custodyState.status === "DELIVERED" ? "DELIVERED" : "None Found in State"}" } ]`}
                  {activeQuery === "org1" && `[ { "productId": "P-1001", "name": "Laptop", "owner": "${custodyState.ownerMSP}" } ]`}
                </div>
              </div>
            </div>
          </div>
        </section>
    '''
