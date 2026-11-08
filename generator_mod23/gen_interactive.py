# -*- coding: utf-8 -*-
"""
Interactive Simulators Generator for Module 23 — Solana Development with Rust
Generates JSX for 4 interactive simulators:
1. Sealevel Parallel Execution & Account Conflict Engine
2. Program Derived Address (PDA) & Canonical Bump Finder
3. Cross-Program Invocation (CPI) & PDA Signer Seeds Simulator
4. PrepToken Mint, Transfer & Burn Life-Cycle Simulator
"""

def generate_interactive_simulators():
    return r'''
      <div className="space-y-12">
        {/* Header / Intro */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4">
            Interactive Runtimes & Simulators
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-3">
            Solana Execution & State Machine Simulators
          </h2>
          <p className="text-neutral-600 leading-relaxed max-w-3xl">
            Explore the four cornerstones of high-performance Solana engineering: Sealevel multi-threaded transaction scheduling, deterministic PDA derivation off the Ed25519 curve, Cross-Program Invocations (CPI) with program signer seeds, and live state operations of the PrepToken token management protocol.
          </p>
        </div>

        {/* SIMULATOR 1: Sealevel Parallel Execution Engine */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Simulator 1 of 4</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Sealevel Parallel Execution & Account Conflict Engine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Visualize how static read/write account declarations enable multi-threaded core scheduling and detect write-lock serialization bottlenecks.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={runSealevelBatch}
                disabled={sealevelRunning}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
              >
                {sealevelRunning ? "Executing Batch..." : "Execute 4 Transactions"}
              </button>
              <button
                onClick={resetSealevel}
                className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Transaction Queue */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {sealevelTxs.map((tx) => {
              const isExecuting = sealevelRunning && activeTxIds.includes(tx.id);
              const isWaiting = sealevelRunning && queuedTxIds.includes(tx.id);
              const isFinished = completedTxIds.includes(tx.id);

              return (
                <div
                  key={tx.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isExecuting
                      ? "border-orange-500 bg-orange-50/60 ring-2 ring-orange-400"
                      : isWaiting
                      ? "border-amber-400 bg-amber-50/50"
                      : isFinished
                      ? "border-emerald-400 bg-emerald-50/40"
                      : "border-neutral-200 bg-neutral-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-neutral-800">{tx.id}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isExecuting
                          ? "bg-orange-200 text-orange-900 animate-pulse"
                          : isWaiting
                          ? "bg-amber-200 text-amber-900"
                          : isFinished
                          ? "bg-emerald-200 text-emerald-900"
                          : "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      {isExecuting ? "Executing" : isWaiting ? "Lock Contention" : isFinished ? "Finalized" : "Pending"}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-neutral-900 mb-2">{tx.label}</div>
                  <div className="space-y-1.5 text-[11px] font-mono">
                    <div className="text-neutral-500">
                      <span className="text-neutral-400">Read: </span>
                      {tx.reads.join(", ") || "None"}
                    </div>
                    <div className="text-neutral-500">
                      <span className="text-neutral-400">Write: </span>
                      <span className="text-orange-700 font-bold">{tx.writes.join(", ")}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cores and Execution Visualization */}
          <div className="bg-neutral-900 text-neutral-100 rounded-xl p-5 mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center justify-between">
              <span>Validator CPU Execution Cores (Sealevel Scheduler)</span>
              <span>Total CUs: {sealevelTotalCus.toLocaleString()} / 1,400,000 CU</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((coreNum) => {
                const activeTx = sealevelCoreAssignments[coreNum];
                return (
                  <div key={coreNum} className="bg-neutral-800/80 rounded-lg p-3 border border-neutral-700">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-orange-400">CPU Core {coreNum}</span>
                      <span className="text-[10px] text-neutral-400">
                        {activeTx ? "Busy (Lock Held)" : "Idle"}
                      </span>
                    </div>
                    <div className="h-10 flex items-center justify-center rounded bg-neutral-900 border border-neutral-700/60 font-mono text-xs">
                      {activeTx ? (
                        <span className="text-emerald-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          Processing {activeTx}
                        </span>
                      ) : (
                        <span className="text-neutral-500">Awaiting Batch</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {sealevelConflictNote && (
              <div className="mt-4 p-3 rounded-lg bg-amber-950/60 border border-amber-800/80 text-amber-200 text-xs flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider text-[10px] bg-amber-800 px-2 py-0.5 rounded">Lock Contention</span>
                <span>{sealevelConflictNote}</span>
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs text-neutral-700 leading-relaxed">
            <span className="font-bold text-neutral-900">Sealevel Insight:</span> Notice that Tx1 (Alice &rarr; Bob), Tx2 (Charlie ATA), and Tx3 (Swap Pool X) run simultaneously across 3 CPU threads without blocking because their writable account sets are mutually disjoint. Tx4 (Arbitrage Pool X) is forced to wait because Pool X is already locked with exclusive write permissions by Core 3.
          </div>
        </div>

        {/* SIMULATOR 2: Program Derived Address (PDA) & Bump Finder */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Simulator 2 of 4</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">PDA & Canonical Bump Search Engine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Explore how seeds and program IDs are hashed iteratively from bump 255 downward until finding a 32-byte point off the Ed25519 curve.
              </p>
            </div>
            <button
              onClick={computePda}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              Derive PDA
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1">
                Seed 1 (String Prefix)
              </label>
              <input
                type="text"
                value={pdaSeed1}
                onChange={(e) => setPdaSeed1(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1">
                Seed 2 (Wallet / Mint Pubkey)
              </label>
              <input
                type="text"
                value={pdaSeed2}
                onChange={(e) => setPdaSeed2(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1">
                Program ID (Base58)
              </label>
              <input
                type="text"
                value={pdaProgramId}
                onChange={(e) => setPdaProgramId(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Derivation Steps Log */}
          <div className="bg-neutral-900 text-neutral-200 rounded-xl p-5 mb-6 font-mono text-xs space-y-3">
            <div className="text-neutral-400 uppercase text-[10px] tracking-wider border-b border-neutral-800 pb-2">
              Ed25519 Curve Iteration Log
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="text-neutral-400">
                1. Testing bump = 255: SHA256(&#91;b"{pdaSeed1}", {pdaSeed2.slice(0, 6)}..., 255, ProgramID&#93;) &rarr; <span className="text-amber-400">Valid point on curve (private key would exist, rejected)</span>
              </div>
              <div className="text-neutral-400">
                2. Testing bump = {pdaBump}: SHA256(&#91;b"{pdaSeed1}", {pdaSeed2.slice(0, 6)}..., {pdaBump}, ProgramID&#93;) &rarr; <span className="text-emerald-400 font-bold">Point OFF curve verified! (Deterministic PDA established)</span>
              </div>
            </div>
            <div className="pt-2 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-neutral-400">Derived Address: </span>
                <span className="text-orange-400 font-bold break-all">{derivedPdaAddress}</span>
              </div>
              <div className="text-emerald-400 font-bold">Canonical Bump: {pdaBump}</div>
            </div>
          </div>

          {/* Anchor Code Snippet Preview */}
          <div className="bg-[#f6f4ee] rounded-xl border border-[#e7e3da] p-4 text-xs">
            <div className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider mb-2">
              Generated Anchor Rust Account Validation Macro
            </div>
            <pre className="font-mono text-neutral-800 text-[11px] overflow-x-auto whitespace-pre">
{`#[account(
    init_if_needed,
    payer = authority,
    space = 8 + TokenConfig::INIT_SPACE,
    seeds = [b"${pdaSeed1}", authority.key().as_ref()],
    bump
)]
pub token_config: Account<'info, TokenConfig>,`}
            </pre>
          </div>
        </div>

        {/* SIMULATOR 3: Cross-Program Invocation (CPI) & PDA Signer Seeds */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Simulator 3 of 4</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Cross-Program Invocation (CPI) Signer Elevation</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Step through how your Anchor program executes `token::mint_to` using `invoke_signed` by proving PDA ownership with seed slices.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={stepCpiFlow}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                {cpiStep === 4 ? "Restart CPI Walkthrough" : `Advance Step (${cpiStep + 1}/5)`}
              </button>
            </div>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-6">
            {[
              "1. User Signs Tx",
              "2. Anchor Checks",
              "3. Seed Preparation",
              "4. Runtime Elevation",
              "5. Token Program State"
            ].map((stepName, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-center transition ${
                  cpiStep === idx
                    ? "border-orange-500 bg-orange-50 font-bold text-orange-900 ring-2 ring-orange-300"
                    : cpiStep > idx
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : "border-neutral-200 bg-neutral-50 text-neutral-500"
                }`}
              >
                <div className="text-[10px] font-mono mb-1">Step {idx + 1}</div>
                <div className="text-xs">{stepName}</div>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-neutral-900 text-neutral-200 rounded-xl p-5 mb-6 font-mono text-xs">
            <div className="text-orange-400 font-bold uppercase text-[10px] tracking-wider mb-2">
              Execution Frame: {cpiStepDescriptions[cpiStep].title}
            </div>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {cpiStepDescriptions[cpiStep].desc}
            </p>
            <div className="p-3 rounded bg-neutral-950 border border-neutral-800 text-[11px] overflow-x-auto text-emerald-400">
              <pre>{cpiStepDescriptions[cpiStep].code}</pre>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Why not `invoke`?</span>
              <p className="text-neutral-600 mt-1">
                Standard `invoke` forwards signatures from the outer transaction. Since the mint authority is a PDA, no private key exists to sign the outer transaction. `invoke_signed` allows the program to vouch for its own PDA.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Runtime Verification:</span>
              <p className="text-neutral-600 mt-1">
                The Solana runtime recomputes `hash(seeds, bump, caller_program_id)`. If the hash equals the signer account address, the runtime flips `is_signer = true` for that callee CPI context only.
              </p>
            </div>
          </div>
        </div>

        {/* SIMULATOR 4: PrepToken Life-Cycle Simulator */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Simulator 4 of 4</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">PrepToken Capstone DApp State Machine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Interact with the full token management lifecycle: initialize config PDA, mint under max supply cap, transfer between ATAs, burn units, and toggle pause.
              </p>
            </div>
            <button
              onClick={resetPrepToken}
              className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
            >
              Reset Protocol State
            </button>
          </div>

          {/* Protocol State Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Max Supply Cap</div>
              <div className="text-lg font-bold text-neutral-900 font-mono mt-1">
                {preptokenMaxSupply.toLocaleString()} PREP
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Hardcoded safety limit</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Total Minted</div>
              <div className="text-lg font-bold text-orange-600 font-mono mt-1">
                {preptokenTotalMinted.toLocaleString()} PREP
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                {Math.round((preptokenTotalMinted / preptokenMaxSupply) * 100)}% of cap
              </div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Alice ATA Balance</div>
              <div className="text-lg font-bold text-emerald-600 font-mono mt-1">
                {preptokenAliceBalance.toLocaleString()} PREP
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Associated Token Account</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Bob ATA Balance</div>
              <div className="text-lg font-bold text-indigo-600 font-mono mt-1">
                {preptokenBobBalance.toLocaleString()} PREP
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Recipient Token Account</div>
            </div>
          </div>

          {/* Protocol Status Banner */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] mb-6">
            <div className="flex items-center gap-3">
              <span
                className={`w-3 h-3 rounded-full ${
                  preptokenPaused ? "bg-rose-500 animate-pulse" : "bg-emerald-500"
                }`}
              ></span>
              <span className="text-xs font-bold text-neutral-800">
                Protocol Status: {preptokenPaused ? "PAUSED (Transfers & Mints Blocked)" : "ACTIVE (All operations permitted)"}
              </span>
            </div>
            <button
              onClick={togglePause}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                preptokenPaused
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-rose-600 hover:bg-rose-700 text-white"
              }`}
            >
              {preptokenPaused ? "Unpause Protocol" : "Pause Protocol (Admin)"}
            </button>
          </div>

          {/* Action Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Mint Form */}
            <div className="p-4 rounded-xl border border-neutral-200 bg-white">
              <div className="text-xs font-bold text-neutral-900 mb-2">Mint Tokens to Alice</div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  value={mintAmount}
                  onChange={(e) => setMintAmount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 border border-neutral-300 rounded-lg text-xs font-mono"
                  placeholder="Amount"
                />
                <button
                  onClick={executeMint}
                  disabled={preptokenPaused}
                  className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-300 text-white rounded-lg text-xs font-bold transition whitespace-nowrap"
                >
                  Mint PREP
                </button>
              </div>
              <div className="text-[10px] text-neutral-500">Requires `authority` signature + Max supply guard</div>
            </div>

            {/* Transfer Form */}
            <div className="p-4 rounded-xl border border-neutral-200 bg-white">
              <div className="text-xs font-bold text-neutral-900 mb-2">Transfer Alice &rarr; Bob</div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 border border-neutral-300 rounded-lg text-xs font-mono"
                  placeholder="Amount"
                />
                <button
                  onClick={executeTransfer}
                  disabled={preptokenPaused}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-neutral-300 text-white rounded-lg text-xs font-bold transition whitespace-nowrap"
                >
                  Transfer
                </button>
              </div>
              <div className="text-[10px] text-neutral-500">Invokes SPL Token `transfer` via CPI</div>
            </div>

            {/* Burn Form */}
            <div className="p-4 rounded-xl border border-neutral-200 bg-white">
              <div className="text-xs font-bold text-neutral-900 mb-2">Burn Alice's Tokens</div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  value={burnAmount}
                  onChange={(e) => setBurnAmount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 border border-neutral-300 rounded-lg text-xs font-mono"
                  placeholder="Amount"
                />
                <button
                  onClick={executeBurn}
                  disabled={preptokenPaused}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 disabled:bg-neutral-300 text-white rounded-lg text-xs font-bold transition whitespace-nowrap"
                >
                  Burn PREP
                </button>
              </div>
              <div className="text-[10px] text-neutral-500">Decrements total minted & destroys supply</div>
            </div>
          </div>

          {/* Event Log Output */}
          <div className="bg-neutral-900 text-neutral-300 rounded-xl p-4 font-mono text-xs">
            <div className="text-neutral-500 uppercase text-[10px] tracking-wider mb-2 flex items-center justify-between">
              <span>Anchor Program Event Logs (`emit!`)</span>
              <button onClick={() => setPreptokenLogs([])} className="text-neutral-500 hover:text-neutral-300 text-[10px]">
                Clear
              </button>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto">
              {preptokenLogs.length === 0 ? (
                <div className="text-neutral-600 italic">No events emitted yet. Execute an operation above.</div>
              ) : (
                preptokenLogs.map((log, idx) => (
                  <div key={idx} className="text-[11px] flex items-start gap-2">
                    <span className="text-neutral-500">{log.time}</span>
                    <span className={log.type === "error" ? "text-rose-400" : log.type === "warn" ? "text-amber-400" : "text-emerald-400"}>
                      {log.msg}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
'''
