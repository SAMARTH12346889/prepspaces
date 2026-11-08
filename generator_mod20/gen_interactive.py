# -*- coding: utf-8 -*-
"""
Interactive Simulators for Module 20:
1. Chainlink Data Feed & Collateral Valuation Sandbox
2. Oracle Aggregation & Outlier Rejection Engine
3. VRF v2.5 Verifiable Randomness & NFT Mystery Box Simulator
4. Oracle Attack & Defense Sandbox (Flash Loan vs. Stale vs. Circuit Breaker)
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
              Interactive Oracle & Chainlink Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Experiment with dynamic collateral valuation, median vs mean aggregation outlier resilience, VRF verifiable randomness, and flash loan oracle defenses.
            </p>
          </div>

          {/* Simulator 1: Chainlink Data Feed & Collateral Valuation Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">DeFi Collateral Valuation & Borrowing Sandbox</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Calculate real-time collateral value, maximum borrowing capacity, and liquidation health factors.</p>
              </div>
              <div className="flex items-center gap-2">
                {["ETH", "BTC", "LINK"].map((asset) => (
                  <button
                    key={asset}
                    type="button"
                    onClick={() => handleSelectAsset(asset)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      selectedAsset === asset
                        ? "bg-amber-600 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {asset}/USD
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sliders */}
              <div className="space-y-4 md:col-span-1 border-r border-neutral-200/60 pr-0 md:pr-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>{selectedAsset} Market Price</span>
                    <span className="text-amber-600">${assetPrice.toLocaleString()} USD</span>
                  </div>
                  <input
                    type="range"
                    min={Math.floor(baseAssetPrice * 0.4)}
                    max={Math.floor(baseAssetPrice * 1.8)}
                    step={selectedAsset === "LINK" ? 0.25 : 25}
                    value={assetPrice}
                    onChange={(e) => setAssetPrice(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>-60% crash</span>
                    <span>+80% rally</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Deposited {selectedAsset} Amount</span>
                    <span className="text-amber-600">{depositAmount} {selectedAsset}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>0.5</span>
                    <span>10.0</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Max Borrow Ratio (LTV)</span>
                    <span className="text-amber-600">{borrowLtv}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="85"
                    step="5"
                    value={borrowLtv}
                    onChange={(e) => setBorrowLtv(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>50%</span>
                    <span>85%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Simulated Borrowed Debt</span>
                    <span className="text-blue-600">${borrowedDebt.toLocaleString()} USDC</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={Math.floor(depositAmount * assetPrice * 0.95)}
                    step="100"
                    value={borrowedDebt}
                    onChange={(e) => setBorrowedDebt(Number(e.target.value))}
                    className="w-full accent-blue-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Real-Time Mathematical Metrics */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Collateral Value</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    ${collateralValUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {depositAmount} &times; ${assetPrice}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Max Borrow Cap</div>
                  <div className="text-lg font-mono font-bold text-emerald-700 mt-1">
                    ${maxBorrowUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Collateral &times; {borrowLtv}% LTV
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${
                  healthFactor < 1.0
                    ? "bg-red-50 border-red-300 text-red-900"
                    : healthFactor < 1.25
                    ? "bg-amber-50 border-amber-300 text-amber-900"
                    : "bg-emerald-50 border-emerald-200 text-emerald-900"
                }`}>
                  <div className="text-[11px] font-mono uppercase font-semibold">Health Factor (HF)</div>
                  <div className="text-xl font-mono font-black mt-1">
                    {borrowedDebt === 0 ? "∞ (Safe)" : healthFactor.toFixed(2)}
                  </div>
                  <div className="text-[10px] mt-0.5">
                    {borrowedDebt === 0
                      ? "Zero debt taken"
                      : healthFactor < 1.0
                      ? "LIQUIDATION ACTIVE!"
                      : healthFactor < 1.25
                      ? "Caution: Near threshold"
                      : "Healthy position"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Liquidation Threshold</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    85.0%
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Debt &gt; 85% collateral triggers liquidation
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Liquidation Price</div>
                  <div className="text-lg font-mono font-bold text-red-700 mt-1">
                    {borrowedDebt === 0 ? "$0.00" : `$${liquidationPrice.toFixed(2)}`}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Price that triggers HF &lt; 1.0
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Raw Chainlink Answer</div>
                  <div className="text-sm font-mono font-bold text-neutral-800 mt-1 truncate">
                    {Math.round(assetPrice * 1e8)}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Integer representation (8 decimals)
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Formula Applied:</span> <code>CollateralValue = (depositWei * rawPrice) / 1e18</code>. Maximum Borrow Limit = <code>CollateralValue * LTV</code>. When market price drops such that <code>BorrowedDebt / CollateralValue &gt; LiquidationThreshold</code>, Health Factor drops below 1.0, enabling liquidators to repay debt and seize collateral with a liquidation bonus.
            </div>
          </div>

          {/* Simulator 2: Oracle Aggregation & Outlier Rejection Engine */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
                <h3 className="text-xl font-bold text-neutral-900">Oracle Aggregation: Median vs. Mean Resilience</h3>
                <p className="text-xs sm:text-sm text-neutral-600">See how Median Aggregation completely neutralizes malicious outliers while Mean Aggregation gets catastrophically distorted.</p>
              </div>
              <button
                type="button"
                onClick={resetNodes}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Honest Nodes
              </button>
            </div>

            {/* 5 Node Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {nodeObservations.map((price, idx) => {
                const isMalicious = idx === 4 && (price > 4500 || price < 1500);
                return (
                  <div key={idx} className={`p-3.5 rounded-xl border ${isMalicious ? "bg-red-50 border-red-300" : "bg-neutral-50 border-neutral-200"} space-y-2`}>
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-neutral-800">Node {idx + 1}</span>
                      {idx === 4 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-800">
                          {isMalicious ? "COMPROMISED" : "Node 5"}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-mono font-bold text-neutral-900">
                      ${price.toLocaleString()}
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="9000"
                      step="25"
                      value={price}
                      onChange={(e) => handleNodeChange(idx, Number(e.target.value))}
                      className={`w-full h-1.5 rounded-lg cursor-pointer ${idx === 4 ? "accent-red-600" : "accent-amber-600"}`}
                    />
                    <div className="text-[10px] font-mono text-neutral-400">
                      {idx === 4 ? "Slide to test attack!" : "Honest node observation"}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sorted Array & Aggregation Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-purple-900">Median Aggregation (Chainlink Model)</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">ROBUST</span>
                </div>
                <div className="text-2xl font-mono font-bold text-purple-950">
                  ${calculatedMedian.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs font-mono text-purple-800">
                  Sorted Set: [{sortedObservations.map(n => `$${n.toLocaleString()}`).join(", ")}]
                </div>
                <div className="text-[11px] text-purple-700">
                  The median selects the 3rd element. Outliers at position 1 or 5 have <strong>0% influence</strong> on the final reported on-chain price!
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-50/60 border border-red-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-red-900">Mean / Average Aggregation (Vulnerable)</span>
                  <span className="px-2 py-0.5 rounded bg-red-200 text-red-900 font-bold">VULNERABLE</span>
                </div>
                <div className="text-2xl font-mono font-bold text-red-950">
                  ${calculatedMean.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs font-mono text-red-800">
                  Sum: ${nodeObservations.reduce((a, b) => a + b, 0).toLocaleString()} &divide; 5 nodes
                </div>
                <div className="text-[11px] text-red-700">
                  Distortion Error: <strong>{meanDistortion.toFixed(2)}%</strong> deviation from honest baseline! A single rogue node skews the entire market price.
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 3: VRF v2.5 Verifiable Randomness & NFT Mystery Box Simulator */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
                <h3 className="text-xl font-bold text-neutral-900">Chainlink VRF v2.5: Verifiable Randomness & Mystery Box</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Simulate cryptographic seed request, proof verification, and modulo probability tier mapping.</p>
              </div>
              <button
                type="button"
                onClick={handleRollVrf}
                disabled={vrfRolling}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm flex items-center gap-2"
              >
                {vrfRolling ? "Verifying VRF Proof..." : "Request Random Words & Open Box"}
              </button>
            </div>

            {/* Probability Distribution Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-neutral-500 text-[10px]">COMMON TIER (60%)</div>
                <div className="text-base font-bold text-neutral-900 mt-0.5">Roll: 00 - 59</div>
                <div className="text-[10px] text-neutral-500 mt-1">Observed: {vrfStats.common} ({totalVrfRolls ? Math.round((vrfStats.common / totalVrfRolls) * 100) : 0}%)</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-950">
                <div className="text-blue-700 text-[10px] font-bold">RARE TIER (25%)</div>
                <div className="text-base font-bold mt-0.5">Roll: 60 - 84</div>
                <div className="text-[10px] text-blue-700 mt-1">Observed: {vrfStats.rare} ({totalVrfRolls ? Math.round((vrfStats.rare / totalVrfRolls) * 100) : 0}%)</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-950">
                <div className="text-purple-700 text-[10px] font-bold">EPIC TIER (10%)</div>
                <div className="text-base font-bold mt-0.5">Roll: 85 - 94</div>
                <div className="text-[10px] text-purple-700 mt-1">Observed: {vrfStats.epic} ({totalVrfRolls ? Math.round((vrfStats.epic / totalVrfRolls) * 100) : 0}%)</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-950">
                <div className="text-amber-800 text-[10px] font-bold">LEGENDARY (5%)</div>
                <div className="text-base font-bold mt-0.5">Roll: 95 - 99</div>
                <div className="text-[10px] text-amber-800 mt-1">Observed: {vrfStats.legendary} ({totalVrfRolls ? Math.round((vrfStats.legendary / totalVrfRolls) * 100) : 0}%)</div>
              </div>
            </div>

            {/* Latest Result Display */}
            {lastVrfResult && (
              <div className="p-5 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <span className="text-amber-400 font-bold uppercase">VRF Callback Result Verified</span>
                  <span className={`px-2 py-0.5 rounded font-bold text-xs ${
                    lastVrfResult.tier === "Legendary" ? "bg-amber-400 text-neutral-900" :
                    lastVrfResult.tier === "Epic" ? "bg-purple-400 text-neutral-900" :
                    lastVrfResult.tier === "Rare" ? "bg-blue-400 text-neutral-900" : "bg-neutral-300 text-neutral-900"
                  }`}>
                    {lastVrfResult.tier.toUpperCase()} ITEM AWARDED
                  </span>
                </div>
                <div className="space-y-1">
                  <div>Raw 256-bit Random Word: <code className="text-neutral-400 text-[11px] break-all">{lastVrfResult.word}</code></div>
                  <div>Modulo 100 Calculation: <code className="text-emerald-400 font-bold">{lastVrfResult.word.slice(-4)} % 100 = {lastVrfResult.roll}</code></div>
                  <div>Cryptographic Proof &pi;: <code className="text-blue-300 text-[11px]">Valid Secp256k1 Elliptic Curve Pairing Verified by VRFCoordinatorV2_5</code></div>
                </div>
              </div>
            )}
          </div>

          {/* Simulator 4: Oracle Attack & Defense Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">Oracle Attack & Defense Sandbox</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Simulate flash loan spot price manipulation, stale feed latency, and circuit breaker boundaries.</p>
              </div>
              <div className="flex items-center gap-2">
                {["flashloan", "stale", "circuit"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setAttackMode(mode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      attackMode === mode
                        ? "bg-neutral-900 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {mode === "flashloan" ? "Flash Loan AMM" : mode === "stale" ? "Stale Data Attack" : "Circuit Breaker"}
                  </button>
                ))}
              </div>
            </div>

            {attackMode === "flashloan" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950 leading-relaxed">
                  <strong>Attack Scenario:</strong> Token ABC trades at $10.00. Attacker borrows $50M via a flash loan and dumps capital into a low-liquidity Uniswap spot pool, artificially surging the spot price to $100.00 within a single transaction.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-red-950 flex items-center justify-between">
                      <span>Vulnerable: Single DEX Spot Price</span>
                      <span className="px-2 py-0.5 rounded bg-red-200 text-red-900">EXPLOITED</span>
                    </div>
                    <div className="text-neutral-700">Contract queries <code>IUniswapV2Pair.getReserves()</code>.</div>
                    <div className="text-red-700 font-bold">Reported Price: $100.00 USD</div>
                    <div className="text-[11px] text-red-800">Attacker deposits 1,000 ABC (true value $10,000) and borrows $75,000 USDC. Protocol is left with $65,000 bad debt!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-emerald-950 flex items-center justify-between">
                      <span>Secure: Chainlink Multi-Source Feed</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">PROTECTED</span>
                    </div>
                    <div className="text-neutral-700">Contract queries <code>AggregatorV3Interface.latestRoundData()</code>.</div>
                    <div className="text-emerald-700 font-bold">Reported Price: $10.00 USD</div>
                    <div className="text-[11px] text-emerald-800">Chainlink's off-chain DON aggregates prices from dozens of global exchanges. The isolated on-chain AMM pump has zero effect. Attack fails!</div>
                  </div>
                </div>
              </div>
            )}

            {attackMode === "stale" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-950 leading-relaxed">
                  <strong>Stale Data Scenario:</strong> An upstream network congestion event prevents the price feed from updating for 4 hours. Market price of ETH crashes from $3,000 to $2,000 during this window.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-red-950 flex items-center justify-between">
                      <span>Vulnerable: No Freshness Check</span>
                      <span className="px-2 py-0.5 rounded bg-red-200 text-red-900">EXPLOITED</span>
                    </div>
                    <div className="text-neutral-700">Contract only checks <code>require(answer &gt; 0)</code>.</div>
                    <div className="text-red-700 font-bold">Accepted Price: $3,000.00 (4 hours old)</div>
                    <div className="text-[11px] text-red-800">Borrower borrows against outdated $3,000 valuation while real asset is only worth $2,000. Protocol incurs severe insolvency!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-emerald-950 flex items-center justify-between">
                      <span>Secure: require(block.timestamp - updatedAt &le; maxAge)</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">PROTECTED</span>
                    </div>
                    <div className="text-neutral-700">Contract enforces <code>maxPriceAge = 3600</code> (1 hour).</div>
                    <div className="text-emerald-700 font-bold">Result: REVERT ("Stale price")</div>
                    <div className="text-[11px] text-emerald-800">Contract safely halts borrowing operations until fresh price data is broadcasted on-chain. Zero bad debt incurred!</div>
                  </div>
                </div>
              </div>
            )}

            {attackMode === "circuit" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs font-mono text-purple-950 leading-relaxed">
                  <strong>Circuit Breaker Bounds:</strong> Protocol configures <code>MIN_PRICE = $500</code> and <code>MAX_PRICE = $10,000</code>. If an extreme black-swan event or multi-sig key compromise broadcasts an impossible price, the circuit breaker automatically halts operations.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                    <div className="font-bold text-neutral-900">Simulate Black-Swan Flash Crash ($120)</div>
                    <button
                      type="button"
                      onClick={() => setCircuitStatus("tripped_low")}
                      className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold"
                    >
                      Trigger $120 Crash
                    </button>
                    {circuitStatus === "tripped_low" && (
                      <div className="p-2.5 rounded bg-red-100 text-red-950 text-[11px] font-bold">
                        CIRCUIT BREAKER TRIPPED! Price $120 &lt; Min $500. Protocol paused.
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                    <div className="font-bold text-neutral-900">Simulate Fat-Finger Oracle Surge ($50,000)</div>
                    <button
                      type="button"
                      onClick={() => setCircuitStatus("tripped_high")}
                      className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold"
                    >
                      Trigger $50,000 Surge
                    </button>
                    {circuitStatus === "tripped_high" && (
                      <div className="p-2.5 rounded bg-red-100 text-red-950 text-[11px] font-bold">
                        CIRCUIT BREAKER TRIPPED! Price $50k &gt; Max $10k. Protocol paused.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
'''
