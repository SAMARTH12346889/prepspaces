# -*- coding: utf-8 -*-
"""
Interactive Simulators for Module 19:
1. Rollup Fee & Throughput Economics Calculator
2. Optimistic Fault Dispute Game (Interactive Bisection)
3. ZK Validity Proof vs Optimistic Rollup Finality Comparison
4. Cross-Chain Bridge Lock-and-Mint Invariant Engine
"""

def generate_interactive_simulators():
    return '''
        {/* Interactive Simulators Section */}
        <section id="simulators" className="space-y-12">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>HANDS-ON PROTOCOL LABS & SIMULATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive Layer 2 Protocol Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Experiment with dynamic fee economics, interactive bisection dispute games, ZK proof finality timelines, and cross-chain bridge collateral invariants.
            </p>
          </div>

          {/* Simulator 1: Rollup Fee & Throughput Economics Calculator */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Rollup Fee & Throughput Economics Calculator</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Model the impact of EIP-4844 Blob data vs legacy L1 Calldata on per-tx cost and throughput.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPostingMode(postingMode === "blobs" ? "calldata" : "blobs")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    postingMode === "blobs"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-neutral-800 text-neutral-100"
                  }`}
                >
                  Mode: {postingMode === "blobs" ? "EIP-4844 Blobs (Post-Dencun)" : "Legacy Calldata (Pre-Dencun)"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sliders */}
              <div className="space-y-4 md:col-span-1 border-r border-neutral-200/60 pr-0 md:pr-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>L1 Base Fee</span>
                    <span className="text-amber-600">{l1BaseFee} Gwei</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="120"
                    step="5"
                    value={l1BaseFee}
                    onChange={(e) => setL1BaseFee(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>5 Gwei</span>
                    <span>120 Gwei</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Transactions Per Batch</span>
                    <span className="text-amber-600">{batchTxCount.toLocaleString()} txs</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="4000"
                    step="100"
                    value={batchTxCount}
                    onChange={(e) => setBatchTxCount(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>100</span>
                    <span>4,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Compressed Size per Tx</span>
                    <span className="text-amber-600">{txCompressedBytes} bytes</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="150"
                    step="2"
                    value={txCompressedBytes}
                    onChange={(e) => setTxCompressedBytes(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>12B (ZK diff)</span>
                    <span>150B (Standard)</span>
                  </div>
                </div>
              </div>

              {/* Economic Metrics */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Total Batch Size</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    {((batchTxCount * txCompressedBytes) / 1024).toFixed(1)} KB
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {(batchTxCount * txCompressedBytes).toLocaleString()} raw payload bytes
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Total L1 Gas Cost</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    {totalBatchGas.toLocaleString()} gas
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {postingMode === "blobs" ? "1 blob gas/byte + overhead" : "16 gas/byte + overhead"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Total Batch Cost (L1)</div>
                  <div className="text-lg font-mono font-bold text-amber-700 mt-1">
                    {totalBatchCostEth.toFixed(5)} ETH
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    ${(totalBatchCostEth * ethPrice).toFixed(2)} USD (@ ${ethPrice})
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-[11px] font-mono text-emerald-800 uppercase font-semibold">Cost Per Transaction</div>
                  <div className="text-xl font-mono font-black text-emerald-900 mt-1">
                    ${costPerTxUsd.toFixed(4)}
                  </div>
                  <div className="text-[10px] text-emerald-700 mt-0.5">
                    {costPerTxEth.toFixed(8)} ETH / tx
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="text-[11px] font-mono text-blue-800 uppercase font-semibold">Throughput Capacity</div>
                  <div className="text-xl font-mono font-black text-blue-900 mt-1">
                    ~{Math.round(theoreticalTps)} TPS
                  </div>
                  <div className="text-[10px] text-blue-700 mt-0.5">
                    vs ~15 TPS on base Ethereum L1
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="text-[11px] font-mono text-amber-800 uppercase font-semibold">Blob Cost Savings</div>
                  <div className="text-xl font-mono font-black text-amber-900 mt-1">
                    {blobSavingsPercent.toFixed(1)}%
                  </div>
                  <div className="text-[10px] text-amber-700 mt-0.5">
                    Fee reduction over legacy calldata
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Key Engineering Insight:</span> Under EIP-4844, blobs are decoupled from L1 EVM execution gas. Posting as blobs eliminates the 16 gas/byte calldata tax, allowing rollups to scale throughput to thousands of transactions per second while pushing per-transaction data fees under <strong>$0.01</strong>.
            </div>
          </div>

          {/* Simulator 2: Optimistic Fault Dispute Game (Interactive Bisection) */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
                <h3 className="text-xl font-bold text-neutral-900">Optimistic Fault Dispute Game: Interactive Bisection</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Step through a binary search dispute between a dishonest sequencer and an honest challenger.</p>
              </div>
              <button
                type="button"
                onClick={resetDisputeGame}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Game
              </button>
            </div>

            {/* Bisection Progress Visualizer */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between text-xs font-mono font-semibold text-neutral-700 pb-2 border-b border-neutral-100">
                <span>Dispute Range: [Step {bisectionRange[0]} &rarr; Step {bisectionRange[1]}]</span>
                <span>Current Midpoint: Step {Math.floor((bisectionRange[0] + bisectionRange[1]) / 2)}</span>
                <span className="text-amber-700 font-bold">Round {bisectionRound} of 6</span>
              </div>

              {/* Graphical Step Bar */}
              <div className="relative w-full h-8 bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200">
                <div
                  className="absolute top-0 bottom-0 bg-amber-200 border-x-2 border-amber-500 transition-all duration-300"
                  style={{
                    left: `${(bisectionRange[0] / 64) * 100}%`,
                    width: `${((bisectionRange[1] - bisectionRange[0]) / 64) * 100}%`
                  }}
                />
                <div
                  className="absolute top-0 bottom-0 w-1 bg-red-600 z-10"
                  style={{ left: `${(42 / 64) * 100}%` }}
                  title="Actual Fault Location: Step 42"
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                <span>Step 0 (Valid Start)</span>
                <span className="text-red-600 font-bold">Target Bug: Step 42 (ADD vs SUB)</span>
                <span>Step 64 (Contested State Root)</span>
              </div>

              {/* Actors State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border ${disputeFinished ? "bg-red-50/50 border-red-200" : "bg-neutral-50 border-neutral-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-800">Proposer (Alice - Malicious)</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold">Bond: 10 ETH</span>
                  </div>
                  <div className="mt-2 text-xs text-neutral-600 space-y-1 font-mono">
                    <div>Claimed Step 64 Root: <span className="text-red-700">0xBAD1...77F</span></div>
                    <div>Stance: "All 64 execution steps are completely valid."</div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${disputeFinished ? "bg-emerald-50/50 border-emerald-200" : "bg-neutral-50 border-neutral-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-800">Challenger (Bob - Honest)</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Bond: 10 ETH</span>
                  </div>
                  <div className="mt-2 text-xs text-neutral-600 space-y-1 font-mono">
                    <div>Claimed Step 64 Root: <span className="text-emerald-700">0xGOOD...42A</span></div>
                    <div>Stance: "Execution diverged at Step 42 during opcode arithmetic."</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                {!disputeFinished ? (
                  <div className="flex flex-wrap gap-3">
                    {bisectionRange[1] - bisectionRange[0] > 1 ? (
                      <button
                        type="button"
                        onClick={stepBisection}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm"
                      >
                        Perform Bisection Round ({bisectionRange[1] - bisectionRange[0]} steps &rarr; {Math.ceil((bisectionRange[1] - bisectionRange[0]) / 2)} steps)
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={executeOneStepProof}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm animate-pulse"
                      >
                        Execute One-Step Proof on L1 EVM (Single Opcode at Step 42)
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-100/70 border border-emerald-300 text-emerald-950 space-y-2">
                    <div className="font-bold font-mono text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>One-Step Proof Execution Result: Proposer Slashed!</span>
                    </div>
                    <div className="text-xs font-mono leading-relaxed">
                      L1 Contract evaluated opcode at Step 42: Expected ADD (0x10 + 0x05 = 0x15), Proposer claimed SUB (0x0B).
                      <br />
                      <strong>Result:</strong> Alice's 10 ETH bond slashed. Bob receives 5 ETH bounty, 5 ETH burned. State reverted to honest root.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Simulator 3: ZK Validity Proof vs Optimistic Rollup Finality Timeline */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
              <h3 className="text-xl font-bold text-neutral-900">ZK Validity Proof vs Optimistic Rollup Finality Lifecycle</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Compare end-to-end transaction latency, gas verification, and withdrawal finality guarantees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Optimistic Rollup Card */}
              <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-neutral-900 text-sm font-mono flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    Optimistic Rollup (e.g., Arbitrum, Optimism)
                  </h4>
                  <span className="text-xs font-mono font-bold text-amber-800">Fraud Proof Model</span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <div className="text-neutral-500 text-[10px]">1. Soft Finality (Sequencer)</div>
                    <div className="text-neutral-900 font-bold">~250 milliseconds</div>
                    <div className="text-[10px] text-neutral-500">Sequencer issues signed receipt in mempool</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <div className="text-neutral-500 text-[10px]">2. L1 Batch Commit (Blob / Calldata)</div>
                    <div className="text-neutral-900 font-bold">~1 to 3 minutes</div>
                    <div className="text-[10px] text-neutral-500">Batch posted to Ethereum L1 blocks</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-100/60 border border-amber-300">
                    <div className="text-amber-900 font-bold text-[10px]">3. Dispute Challenge Window</div>
                    <div className="text-amber-950 font-black text-sm">7 Days (168 Hours)</div>
                    <div className="text-[10px] text-amber-800">Must wait 7 days for canonical L1 bridge withdrawal</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <div className="text-neutral-500 text-[10px]">4. L1 Verification Cost</div>
                    <div className="text-neutral-900 font-bold">0 gas (dispute-free happy path)</div>
                    <div className="text-[10px] text-neutral-500">Only incurs gas if an honest node challenges</div>
                  </div>
                </div>
              </div>

              {/* ZK Rollup Card */}
              <div className="p-5 rounded-xl bg-purple-50/40 border border-purple-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-neutral-900 text-sm font-mono flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                    Zero-Knowledge Rollup (e.g., zkSync, Starknet)
                  </h4>
                  <span className="text-xs font-mono font-bold text-purple-800">Validity Proof Model</span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white border border-purple-200">
                    <div className="text-neutral-500 text-[10px]">1. Soft Finality (Sequencer)</div>
                    <div className="text-neutral-900 font-bold">~250 milliseconds</div>
                    <div className="text-[10px] text-neutral-500">Instant sub-second user responsiveness</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-purple-200">
                    <div className="text-neutral-500 text-[10px]">2. Proof Generation (GPU/FPGA Cluster)</div>
                    <div className="text-neutral-900 font-bold">~10 to 45 minutes</div>
                    <div className="text-[10px] text-neutral-500">Prover compiles polynomial arithmetic circuit</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-100/60 border border-purple-300">
                    <div className="text-purple-900 font-bold text-[10px]">3. Canonical L1 Hard Finality</div>
                    <div className="text-purple-950 font-black text-sm">Instant Upon L1 Verification (~1 Hour)</div>
                    <div className="text-[10px] text-purple-800">Zero waiting period; verified mathematically</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-purple-200">
                    <div className="text-neutral-500 text-[10px]">4. L1 Verification Cost</div>
                    <div className="text-neutral-900 font-bold">~250,000 - 450,000 gas</div>
                    <div className="text-[10px] text-neutral-500">Fixed pairing check gas cost per batch proof</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 4: Cross-Chain Bridge Lock-and-Mint Invariant Engine */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">Cross-Chain Bridge Lock-and-Mint Invariant Engine</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Test bridge collateral solvency and simulate real-time exploit detection.</p>
              </div>
              <button
                type="button"
                onClick={resetBridge}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Bridge State
              </button>
            </div>

            {/* Invariant Health Banner */}
            <div className={`p-4 rounded-xl border font-mono text-xs flex items-center justify-between ${
              bridgeExploitTriggered
                ? "bg-red-100 border-red-300 text-red-950"
                : "bg-emerald-50 border-emerald-200 text-emerald-950"
            }`}>
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${bridgeExploitTriggered ? "bg-red-600 animate-ping" : "bg-emerald-600"}`}></span>
                <span className="font-bold">
                  {bridgeExploitTriggered ? "CRITICAL ALERT: INVARIANT VIOLATION DETECTED! BRIDGE PAUSED." : "BRIDGE STATUS: 100% FULLY COLLATERALIZED"}
                </span>
              </div>
              <div className="font-bold">
                Invariant: [L2 Supply {bridgeL2Minted} WETH] &le; [L1 Locked {bridgeL1Vault} ETH]
              </div>
            </div>

            {/* Vault Balance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-xs font-mono text-neutral-500 uppercase">Layer 1 Custody Vault Contract</div>
                <div className="text-2xl font-mono font-bold text-neutral-900">{bridgeL1Vault} ETH</div>
                <div className="text-[11px] text-neutral-500">Real ETH deposited on Ethereum Mainnet escrow</div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-xs font-mono text-neutral-500 uppercase">Layer 2 Wrapped Token Supply</div>
                <div className="text-2xl font-mono font-bold text-neutral-900">{bridgeL2Minted} WETH</div>
                <div className="text-[11px] text-neutral-500">Synthetic bridged tokens circulating on L2</div>
              </div>
            </div>

            {/* Interaction Controls */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-neutral-700 uppercase">Bridge Operations:</div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={bridgeExploitTriggered}
                  onClick={() => handleBridgeDeposit(20)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all"
                >
                  Deposit & Lock 20 ETH (L1 &rarr; L2)
                </button>

                <button
                  type="button"
                  disabled={bridgeExploitTriggered || bridgeL2Minted < 15}
                  onClick={() => handleBridgeWithdraw(15)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all"
                >
                  Burn & Unlock 15 WETH (L2 &rarr; L1)
                </button>

                <button
                  type="button"
                  disabled={bridgeExploitTriggered}
                  onClick={handleBridgeAttack}
                  className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all"
                >
                  Simulate Exploit: Unbacked Mint of 50 WETH
                </button>
              </div>
            </div>

            {/* Exploit Log if triggered */}
            {bridgeExploitTriggered && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-red-950">
                  <span>Exploit Stopped by Circuit Breaker:</span>
                </div>
                <div>
                  Attacker attempted to call L2 <code>mint(attacker, 50 ether)</code> without corresponding L1 deposit event.
                </div>
                <div>
                  <strong>Invariant Check:</strong> Projected L2 Supply ({bridgeL2Minted + 50} WETH) exceeds L1 Vault ({bridgeL1Vault} ETH).
                  Transaction reverted on-chain with <code>error BridgeInsolvent()</code>.
                </div>
              </div>
            )}
          </div>
        </section>
'''
