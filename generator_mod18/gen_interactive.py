# -*- coding: utf-8 -*-
"""
Module 18 Interactive Simulators:
1. Reentrancy & Checks-Effects-Interactions (CEI) Call Stack Sandbox
2. Flash Loan Price Manipulation & Bad Debt Exploit Simulator
3. Upgradeability & Proxy Storage Collision Visualizer (EIP-1967)
4. Slither Static Analysis & Foundry Invariant Triage Terminal
"""

def generate_interactive_simulators():
    return '''
      {/* ============================================================== */}
      {/* 4 LIVE INTERACTIVE SECURITY SIMULATORS                         */}
      {/* ============================================================== */}
      <section className="mt-14 space-y-12">
        <div className="border-b border-[#e7e3da] pb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Activity className="w-4 h-4" />
            <span>Interactive Security Laboratory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
            Smart Contract Exploit & Defense Sandboxes
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Simulate real EVM attack vectors in an isolated sandbox: step through recursive reentrancy call stacks, model flash loan price distortion, inspect proxy storage collisions, and execute automated static analysis and invariant fuzzing runs.
          </p>
        </div>

        {/* SIMULATOR 1: REENTRANCY CALL STACK SANDBOX */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Simulator 01
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">
                Reentrancy Exploit & Checks-Effects-Interactions (CEI) Sandbox
              </h3>
              <p className="text-xs text-neutral-500">
                Visualize recursive EVM execution frames and compare vulnerable execution against CEI and ReentrancyGuard defenses.
              </p>
            </div>
            <div className="flex items-center bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                onClick={() => { setReentrancyMode("vulnerable"); setReentrancyStep(0); }}
                className={`px-3 py-1.5 rounded-lg transition ${
                  reentrancyMode === "vulnerable"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Vulnerable Pattern
              </button>
              <button
                onClick={() => { setReentrancyMode("secure"); setReentrancyStep(0); }}
                className={`px-3 py-1.5 rounded-lg transition ${
                  reentrancyMode === "secure"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Secure (CEI + Guard)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls & Balances */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                  <span className="text-xs text-neutral-500 font-medium">Vault ETH Balance</span>
                  <div className="mt-1 text-lg font-mono font-bold text-neutral-900">
                    {simVaultBalance.toFixed(1)} ETH
                  </div>
                  <span className="text-[10px] text-neutral-400">Victim Contract</span>
                </div>
                <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                  <span className="text-xs text-neutral-500 font-medium">Attacker Wallet</span>
                  <div className="mt-1 text-lg font-mono font-bold text-rose-700">
                    {simAttackerBalance.toFixed(1)} ETH
                  </div>
                  <span className="text-[10px] text-neutral-400">Exploit Contract</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-neutral-900">Recorded Attacker Balance:</span>
                  <span className="font-mono font-bold text-neutral-800">{simAttackerRecordedBalance.toFixed(1)} ETH</span>
                </div>
                <div className="text-[11px] text-neutral-600">
                  {reentrancyMode === "vulnerable" ? (
                    <span className="text-rose-800">
                      <strong>Flaw:</strong> Vault transfers ETH <em>before</em> setting recorded balance to 0!
                    </span>
                  ) : (
                    <span className="text-emerald-800">
                      <strong>Protected:</strong> Vault sets balance to 0 <em>before</em> external interaction.
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleStepReentrancy}
                  disabled={reentrancyFinished}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-sm ${
                    reentrancyFinished
                      ? "bg-neutral-400 cursor-not-allowed"
                      : reentrancyMode === "vulnerable"
                      ? "bg-rose-600 hover:bg-rose-700"
                      : "bg-emerald-600 hover:bg-emerald-700"
                  }`}
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  {reentrancyFinished ? "Exploit Sequence Complete" : `Step Execution Frame (${reentrancyStep + 1})`}
                </button>
                <button
                  onClick={handleResetReentrancy}
                  className="py-2.5 px-3 rounded-xl border border-[#e7e3da] bg-white hover:bg-[#f6f4ee] text-xs font-bold text-neutral-700"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Right Execution Frames Trace */}
            <div className="lg:col-span-7 bg-[#f6f4ee] p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
                  <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">
                    EVM Recursive Call Stack Trace
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-500">
                    Depth: {reentrancyStack.length}
                  </span>
                </div>

                <div className="mt-4 space-y-2 font-mono text-xs max-h-56 overflow-y-auto">
                  {reentrancyStack.length === 0 ? (
                    <div className="text-neutral-500 text-center py-6 italic font-sans text-xs">
                      Click "Step Execution Frame" to trigger the withdrawal sequence and observe call stack recursion.
                    </div>
                  ) : (
                    reentrancyStack.map((frame, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg border text-[11px] leading-relaxed ${
                          frame.type === "revert"
                            ? "bg-emerald-100/70 border-emerald-300 text-emerald-950 font-bold"
                            : frame.type === "exploit"
                            ? "bg-rose-100/70 border-rose-300 text-rose-950"
                            : "bg-white border-[#e7e3da] text-neutral-800"
                        }`}
                      >
                        <div className="flex justify-between items-center font-bold">
                          <span>Frame #{idx}: {frame.action}</span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/70">
                            {frame.caller} &rarr; {frame.target}
                          </span>
                        </div>
                        <div className="mt-1 text-[10px] text-neutral-600 font-sans">
                          {frame.detail}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-4 p-2.5 bg-white rounded-lg border border-[#e7e3da] text-[11px] text-neutral-600">
                <strong>EVM Principle:</strong> In the vulnerable pattern, external call returns control to attacker fallback function while <code>balances[attacker]</code> is still positive, enabling recursive drain.
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATOR 2: FLASH LOAN PRICE MANIPULATION */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="border-b border-[#e7e3da] pb-4 mb-6">
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Simulator 02
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Flash Loan Oracle Manipulation & Bad Debt Simulation
            </h3>
            <p className="text-xs text-neutral-500">
              Simulate uncollateralized flash loan capital distorting low-liquidity AMM spot prices to exploit lending protocol collateral valuations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-neutral-700">Flash Loan Borrow Amount:</span>
                  <span className="font-mono font-bold text-amber-900">
                    ${(flashLoanAmount / 1e6).toFixed(1)}M USDC
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="1000000"
                  value={flashLoanAmount}
                  onChange={(e) => setFlashLoanAmount(parseFloat(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-neutral-700">Target AMM Pool Depth</label>
                  <select
                    value={ammDepth}
                    onChange={(e) => setAmmDepth(parseFloat(e.target.value))}
                    className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                  >
                    <option value="2000000">Shallow ($2M Reserves)</option>
                    <option value="10000000">Medium ($10M Reserves)</option>
                    <option value="100000000">Deep Institutional ($100M)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-700">Lending Oracle Feed</label>
                  <select
                    value={oracleType}
                    onChange={(e) => setOracleType(e.target.value)}
                    className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                  >
                    <option value="spot">Vulnerable: Spot AMM Price</option>
                    <option value="twap">Secure: 1-Hour Chainlink TWAP</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Flash Loan Protocol Fee (0.05%):</span>
                  <span className="font-mono font-bold text-neutral-800">${(flashLoanAmount * 0.0005).toLocaleString()} USDC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Oracle Price Distortion:</span>
                  <span className={`font-mono font-bold ${calculatedFlashAttack.priceSpikePct > 20 ? "text-rose-700" : "text-emerald-700"}`}>
                    +{calculatedFlashAttack.priceSpikePct.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-6 bg-[#f6f4ee] p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">
                  Economic Exploit Breakdown
                </span>
                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">True Market Asset Price:</span>
                    <span className="text-neutral-900 font-bold">$10.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Reported Oracle Price:</span>
                    <span className={`font-bold ${oracleType === "spot" ? "text-rose-700" : "text-emerald-700"}`}>
                      ${calculatedFlashAttack.reportedPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Unbacked Debt Extracted:</span>
                    <span className="text-neutral-900 font-bold">
                      ${calculatedFlashAttack.debtExtracted.toLocaleString(undefined, {maximumFractionDigits: 0})} USDC
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#e7e3da]">
                    <span className="text-neutral-700 font-bold">Net Attacker Profit:</span>
                    <span className={`text-base font-extrabold ${calculatedFlashAttack.netProfit > 0 ? "text-rose-700" : "text-emerald-700"}`}>
                      ${calculatedFlashAttack.netProfit.toLocaleString(undefined, {maximumFractionDigits: 0})} USDC
                    </span>
                  </div>
                </div>
              </div>

              <div className={`mt-4 p-3 rounded-lg border text-[11px] ${
                calculatedFlashAttack.netProfit > 0
                  ? "bg-rose-50 border-rose-200 text-rose-900 font-medium"
                  : "bg-emerald-50 border-emerald-200 text-emerald-900 font-medium"
              }`}>
                {calculatedFlashAttack.netProfit > 0 ? (
                  <span>CRITICAL EXPLOIT: Flash loan distorted spot price by {calculatedFlashAttack.priceSpikePct.toFixed(0)}%, creating protocol insolvency.</span>
                ) : (
                  <span>PROTECTED: Chainlink TWAP dampened instantaneous price shock; attack resulted in net loss for attacker after fees.</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATOR 3: PROXY STORAGE COLLISION VISUALIZER */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Simulator 03
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">
                Proxy Storage Collision Visualizer (EIP-1967 vs Unstructured)
              </h3>
              <p className="text-xs text-neutral-500">
                Observe how unaligned storage layouts cause delegatecall to overwrite critical administrative proxy state.
              </p>
            </div>
            <div className="flex items-center bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                onClick={() => setProxyStorageMode("unstructured")}
                className={`px-3 py-1.5 rounded-lg transition ${
                  proxyStorageMode === "unstructured" ? "bg-rose-600 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Vulnerable (Slot 0 Overwrite)
              </button>
              <button
                onClick={() => setProxyStorageMode("eip1967")}
                className={`px-3 py-1.5 rounded-lg transition ${
                  proxyStorageMode === "eip1967" ? "bg-emerald-600 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Secure (EIP-1967 Hash Slots)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-700">Set Implementation Variable (Slot 0):</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={simLogicVariable}
                    onChange={(e) => setSimLogicVariable(parseInt(e.target.value) || 0)}
                    className="p-2 rounded-lg border border-[#e7e3da] font-mono text-xs w-full"
                    placeholder="uint256 feePercentage"
                  />
                  <span className="text-xs font-mono self-center text-neutral-500">uint256</span>
                </div>
              </div>

              <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs space-y-2">
                <div className="font-bold text-neutral-900">Storage Collision Mechanics:</div>
                <p className="text-neutral-600 leading-relaxed text-[11px]">
                  When a proxy uses <code>delegatecall</code>, the implementation code writes to the storage of the <strong>Proxy contract</strong>.
                  {proxyStorageMode === "unstructured" ? (
                    <span className="text-rose-700 font-bold block mt-1">
                      Writing to implementation Slot 0 directly mutates Proxy Slot 0 (admin address), hijacking administrative control!
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-bold block mt-1">
                      EIP-1967 stores the implementation address at bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1), preventing any collision with logic variables.
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Storage Layout Grid */}
            <div className="md:col-span-6 bg-[#f6f4ee] p-4 rounded-xl border border-[#e7e3da] space-y-3 font-mono text-xs">
              <div className="font-bold text-neutral-700 uppercase tracking-wide">Proxy Physical Storage Slots</div>

              {proxyStorageMode === "unstructured" ? (
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg border bg-rose-50 border-rose-300 text-rose-900">
                    <div className="flex justify-between font-bold">
                      <span>Slot 0x00 (COLLIDED)</span>
                      <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-rose-200">Corrupted</span>
                    </div>
                    <div className="mt-1 text-[11px]">
                      Proxy Admin / Implementation:{" "}
                      <span className="font-extrabold text-rose-800">
                        {simLogicVariable === 0 ? "0x1111...1111" : `0x0000...00${simLogicVariable.toString(16).padStart(2, "0")}`}
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg border bg-white border-[#e7e3da]">
                    <div className="font-bold text-neutral-800">Slot 0x01</div>
                    <div className="text-[11px] text-neutral-600">userBalances mapping root</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg border bg-white border-[#e7e3da]">
                    <div className="font-bold text-neutral-800">Slot 0x00 (Logic Variable)</div>
                    <div className="text-[11px] text-neutral-600">
                      feePercentage: <span className="font-bold text-emerald-700">{simLogicVariable}</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg border bg-emerald-50 border-emerald-300 text-emerald-900">
                    <div className="flex justify-between font-bold">
                      <span>Slot eip1967.proxy.implementation</span>
                      <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-emerald-200">Isolated</span>
                    </div>
                    <div className="mt-1 text-[11px] text-emerald-800">
                      0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SIMULATOR 4: SLITHER STATIC ANALYSIS & INVARIANT TERMINAL */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="border-b border-[#e7e3da] pb-4 mb-6">
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Simulator 04
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Static Analysis (Slither) & Invariant Fuzzing Terminal
            </h3>
            <p className="text-xs text-neutral-500">
              Select lab smart contracts, run simulated Slither AST analyzers, execute 10,000-run Foundry invariant fuzzing campaigns, and review automated patch diffs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-700">Target Contract</label>
                <select
                  value={auditTargetContract}
                  onChange={(e) => {
                    setAuditTargetContract(e.target.value);
                    setAuditScanExecuted(false);
                    setAuditRemediationApplied(false);
                  }}
                  className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                >
                  <option value="VulnerableVault.sol">VulnerableVault.sol (Access Control)</option>
                  <option value="VulnerableReentrancyVault.sol">VulnerableReentrancyVault.sol (Reentrancy)</option>
                  <option value="VulnerableLending.sol">VulnerableLending.sol (Collateral / Solvency)</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setAuditScanExecuted(true)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  Run Slither & Fuzz Tests
                </button>
                <button
                  onClick={() => setAuditRemediationApplied(!auditRemediationApplied)}
                  disabled={!auditScanExecuted}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition ${
                    !auditScanExecuted
                      ? "opacity-50 cursor-not-allowed bg-neutral-100"
                      : auditRemediationApplied
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-neutral-900 border-[#e7e3da] hover:bg-[#f6f4ee]"
                  }`}
                >
                  {auditRemediationApplied ? "Fix Applied ✓" : "Apply Patch Diff"}
                </button>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="lg:col-span-7 bg-[#1e1e24] text-neutral-200 p-4 rounded-xl font-mono text-xs overflow-x-auto shadow-inner min-h-[220px] flex flex-col justify-between">
              {!auditScanExecuted ? (
                <div className="text-neutral-500 italic py-8 text-center text-xs">
                  $ slither . && forge test --fuzz-runs 10000<br/>
                  (Click "Run Slither & Fuzz Tests" to start security analysis)
                </div>
              ) : auditRemediationApplied ? (
                <div className="space-y-2">
                  <div className="text-emerald-400 font-bold">
                    $ forge test --fuzz-runs 10000
                  </div>
                  <div className="text-emerald-300">
                    [PASS] testFuzzInvariants(uint256) (runs: 10000, μ: 28412, ~: 28412)<br/>
                    [PASS] testReentrancyGuardRevert()<br/>
                    Suite result: ok. 10000 passed; 0 failed; 0 skipped.
                  </div>
                  <div className="text-neutral-400 text-[11px] pt-2 border-t border-neutral-700">
                    $ slither .<br/>
                    <span className="text-emerald-400">0 vulnerabilities found. Clean static analysis!</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-amber-400">
                    $ slither src/{auditTargetContract}
                  </div>
                  <div className="text-rose-400">
                    {auditTargetContract === "VulnerableVault.sol" && (
                      <div>
                        [HIGH] unprotected-upgrade / missing-access-control:<br/>
                        VulnerableVault.changeOwner(address) (src/VulnerableVault.sol#22)<br/>
                        &nbsp;&nbsp;&gt; Variable 'owner' is written without caller verification.
                      </div>
                    )}
                    {auditTargetContract === "VulnerableReentrancyVault.sol" && (
                      <div>
                        [HIGH] reentrancy-eth:<br/>
                        VulnerableReentrancyVault.withdraw() (src/VulnerableReentrancyVault.sol#14)<br/>
                        &nbsp;&nbsp;&gt; External call to msg.sender before balances update.
                      </div>
                    )}
                    {auditTargetContract === "VulnerableLending.sol" && (
                      <div>
                        [HIGH] invariant-violation / bad-debt:<br/>
                        VulnerableLending.withdrawCollateral() (src/VulnerableLending.sol#18)<br/>
                        &nbsp;&nbsp;&gt; Collateral decremented without verifying remaining debt.
                      </div>
                    )}
                  </div>
                  <div className="text-amber-300 pt-2 border-t border-neutral-700 text-[11px]">
                    Foundry Fuzzer: Counterexample found after 42 runs! Invariant broken: totalDebt &gt; totalCollateral.
                  </div>
                </div>
              )}

              <div className="text-[10px] text-neutral-500 pt-2 border-t border-neutral-800 flex justify-between">
                <span>Slither v0.10.2</span>
                <span>Foundry Forge Invariant Engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    '''
