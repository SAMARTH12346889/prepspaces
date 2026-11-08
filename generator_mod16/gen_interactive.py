# projectx/generator_mod16/gen_interactive.py
"""
Interactive Simulators for Module 16: Decentralized Finance (DeFi) Architecture
- Simulator 1: Constant Product AMM (x * y = k) & Swap Calculator
- Simulator 2: DeFi Lending, Collateralization & Liquidation Engine
- Simulator 3: Impermanent Loss & Yield Farming ROI Calculator
- Simulator 4: Flash Loan Arbitrage & Atomic Reversion Simulator
"""

def generate_interactive():
    return r'''
      {/* ------------------------------------------------------------- */}
      {/* TAB 2: INTERACTIVE SIMULATORS                                 */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "interactive" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Interactive Financial Engineering Lab
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                AMMs • Lending Markets • Impermanent Loss • Flash Loans
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              DeFi Protocol Architecture Simulators
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-3xl">
              Experience the mathematical mechanics of decentralized finance first-hand. Simulate Uniswap constant
              product AMM trades, calculate price impact and slippage, evaluate lending health factors and collateral liquidation,
              quantify impermanent loss against farming yields, and trace atomic flash loan arbitrage execution.
            </p>
          </div>

          {/* SIMULATOR 1: Constant Product AMM & Swap Calculator */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Constant Product AMM (x * y = k) & Swap Calculator</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Uniswap v2 Invariant
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Explore how token reserves rebalance dynamically according to the constant product invariant
              <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono ml-1">x * y = k</code>.
              Adjust pool depth, test swap amounts, and observe the immediate mathematical impact on spot price, effective price, and slippage.
            </p>

            {/* Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">ETH Reserve (x)</label>
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={ammReserveETH}
                  onChange={(e) => setAmmReserveETH(Math.max(0.1, Number(e.target.value)))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">USDC Reserve (y)</label>
                <input
                  type="number"
                  min="100"
                  step="1000"
                  value={ammReserveUSDC}
                  onChange={(e) => setAmmReserveUSDC(Math.max(100, Number(e.target.value)))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Swap Direction</label>
                <select
                  value={ammDirection}
                  onChange={(e) => setAmmDirection(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none bg-white"
                >
                  <option value="ETH_TO_USDC">Swap ETH → USDC</option>
                  <option value="USDC_TO_ETH">Swap USDC → ETH</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">
                  Swap Amount In ({ammDirection === "ETH_TO_USDC" ? "ETH" : "USDC"})
                </label>
                <input
                  type="number"
                  min="0.01"
                  step={ammDirection === "ETH_TO_USDC" ? "0.5" : "500"}
                  value={ammAmountIn}
                  onChange={(e) => setAmmAmountIn(Math.max(0.001, Number(e.target.value)))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none"
                />
              </div>
            </div>

            {/* Fee and Slippage Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-neutral-100">
              <div className="flex items-center gap-3 text-xs">
                <span className="font-semibold text-neutral-700">Fee Rate:</span>
                {[
                  { label: "0.05% (Stable)", val: 0.0005 },
                  { label: "0.30% (Uniswap v2)", val: 0.003 },
                  { label: "1.00% (Exotic)", val: 0.01 }
                ].map((f) => (
                  <button
                    key={f.val}
                    onClick={() => setAmmFeeRate(f.val)}
                    className={`px-2.5 py-1 rounded-lg border transition ${
                      ammFeeRate === f.val
                        ? "bg-amber-600 text-white border-amber-600 font-bold"
                        : "border-neutral-300 hover:bg-neutral-50 text-neutral-700"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="font-semibold text-neutral-700">Slippage Tolerance:</span>
                {[0.1, 0.5, 1.0, 3.0].map((s) => (
                  <button
                    key={s}
                    onClick={() => setAmmSlippage(s)}
                    className={`px-2.5 py-1 rounded-lg border transition ${
                      ammSlippage === s
                        ? "bg-neutral-900 text-white border-neutral-900 font-bold"
                        : "border-neutral-300 hover:bg-neutral-50 text-neutral-700"
                    }`}
                  >
                    {s}%
                  </button>
                ))}
              </div>
            </div>

            {/* Live Swap Calculation Metrics */}
            <div className="bg-neutral-900 text-white rounded-xl p-5 space-y-4 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider">
                  Live Constant Product Execution Breakdown
                </span>
                <span className="text-neutral-400">
                  k = {(ammReserveETH * ammReserveUSDC).toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700">
                  <div className="text-neutral-400 uppercase font-semibold">Pre-Trade Spot Price</div>
                  <div className="text-amber-300 font-bold text-sm mt-1">
                    ${ammSwapResult.spotPrice.toFixed(2)}
                  </div>
                  <div className="text-neutral-400 mt-0.5">USDC per ETH</div>
                </div>
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700">
                  <div className="text-neutral-400 uppercase font-semibold">Output Received</div>
                  <div className="text-green-400 font-bold text-sm mt-1">
                    {ammSwapResult.amountOut.toFixed(4)} {ammDirection === "ETH_TO_USDC" ? "USDC" : "ETH"}
                  </div>
                  <div className="text-neutral-400 mt-0.5">After {(ammFeeRate * 100).toFixed(2)}% fee</div>
                </div>
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700">
                  <div className="text-neutral-400 uppercase font-semibold">Effective Price</div>
                  <div className="text-blue-300 font-bold text-sm mt-1">
                    ${ammSwapResult.effectivePrice.toFixed(2)}
                  </div>
                  <div className="text-neutral-400 mt-0.5">Actual execution rate</div>
                </div>
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700">
                  <div className="text-neutral-400 uppercase font-semibold">Price Impact</div>
                  <div className={`font-bold text-sm mt-1 ${ammSwapResult.priceImpact > 5 ? "text-red-400" : "text-amber-300"}`}>
                    {ammSwapResult.priceImpact.toFixed(2)}%
                  </div>
                  <div className="text-neutral-400 mt-0.5">Curve displacement</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-[11px] text-neutral-300 border-t border-neutral-800">
                <div>
                  Enforced Minimum Output (minAmountOut):{" "}
                  <strong className="text-emerald-400">{ammSwapResult.amountOutMin.toFixed(4)}</strong>{" "}
                  ({ammSlippage}% slippage limit)
                </div>
                <div>
                  Post-Swap New Reserves:{" "}
                  <strong className="text-neutral-100 font-mono">
                    {ammSwapResult.newReserveETH.toFixed(2)} ETH / {ammSwapResult.newReserveUSDC.toFixed(2)} USDC
                  </strong>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleExecuteAmmSwap}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition shadow-sm"
              >
                Execute Swap & Rebalance Pool
              </button>
              <button
                onClick={handleResetAmmPool}
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-50 text-neutral-700 transition"
              >
                Reset to Standard Reserves (10 ETH / 20,000 USDC)
              </button>
            </div>
          </div>

          {/* SIMULATOR 2: DeFi Lending, Collateralization & Liquidation Engine */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
                <h3 className="text-xl font-bold text-neutral-900">DeFi Lending, Collateralization & Liquidation Engine</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Aave v3 / Compound Model
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Analyze multi-asset debt positions. Adjust collateral and borrowed amounts, slide the market price down to simulate
              a market flash crash, observe the exact moment the <strong>Health Factor drops below 1.0</strong>, and execute a liquidation to claim the incentive bonus.
            </p>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Deposited Collateral</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0.1"
                    step="0.5"
                    value={lendingCollateralAmount}
                    onChange={(e) => setLendingCollateralAmount(Math.max(0.1, Number(e.target.value)))}
                    className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none"
                  />
                  <select
                    value={lendingCollateralAsset}
                    onChange={(e) => setLendingCollateralAsset(e.target.value)}
                    className="text-xs p-2 rounded-lg border border-neutral-300 bg-white"
                  >
                    <option value="ETH">ETH</option>
                    <option value="WBTC">WBTC</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Collateral Market Price ($)</label>
                <input
                  type="number"
                  min="100"
                  step="50"
                  value={lendingCollateralPrice}
                  onChange={(e) => setLendingCollateralPrice(Math.max(10, Number(e.target.value)))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Borrowed Debt (USDC)</label>
                <input
                  type="number"
                  min="0"
                  step="500"
                  value={lendingDebtAmount}
                  onChange={(e) => setLendingDebtAmount(Math.max(0, Number(e.target.value)))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Liquidation Threshold</label>
                <select
                  value={lendingLiquidationThreshold}
                  onChange={(e) => setLendingLiquidationThreshold(Number(e.target.value))}
                  className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none bg-white"
                >
                  <option value={0.75}>75% (Volatile Assets)</option>
                  <option value={0.80}>80% (Standard Aave ETH)</option>
                  <option value={0.85}>85% (Conservative WBTC)</option>
                </select>
              </div>
            </div>

            {/* Price Crash Stress Test Slider */}
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-800">Simulate Collateral Flash Crash Slider:</span>
                <span className="font-mono font-bold text-amber-700">${lendingCollateralPrice} USD</span>
              </div>
              <input
                type="range"
                min="500"
                max="4000"
                step="25"
                value={lendingCollateralPrice}
                onChange={(e) => setLendingCollateralPrice(Number(e.target.value))}
                className="w-full accent-amber-600"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                <span>$500 (Extreme Crash)</span>
                <span>$2,000 (Baseline)</span>
                <span>$4,000 (Bull Run)</span>
              </div>
            </div>

            {/* Lending Health Metrics Card */}
            <div className="p-5 rounded-xl border font-mono text-xs space-y-4 transition ${
              lendingHealthMetrics.isLiquidatable
                ? 'bg-red-50/70 border-red-300 text-red-950'
                : lendingHealthMetrics.healthFactor < 1.3
                ? 'bg-amber-50/70 border-amber-300 text-amber-950'
                : 'bg-green-50/50 border-green-300 text-green-950'
            }">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-current/20 pb-3">
                <span className="font-bold uppercase tracking-wide text-sm">
                  Position Risk & Health Status: {lendingHealthMetrics.isLiquidatable ? "LIQUIDATABLE ⚠️" : "SOLVENT ✓"}
                </span>
                <span className="text-sm font-bold">
                  Health Factor: {lendingHealthMetrics.healthFactor.toFixed(3)}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
                <div className="p-3 bg-white/80 rounded-lg border border-current/20">
                  <div className="text-neutral-500 uppercase font-semibold">Collateral Value</div>
                  <div className="font-bold text-sm mt-1 text-neutral-900">
                    ${lendingHealthMetrics.collateralValueUSD.toLocaleString()}
                  </div>
                  <div className="text-neutral-500">{lendingCollateralAmount} {lendingCollateralAsset}</div>
                </div>
                <div className="p-3 bg-white/80 rounded-lg border border-current/20">
                  <div className="text-neutral-500 uppercase font-semibold">Collateralization Ratio</div>
                  <div className="font-bold text-sm mt-1 text-neutral-900">
                    {lendingHealthMetrics.collateralizationRatio.toFixed(1)}%
                  </div>
                  <div className="text-neutral-500">Min safe: 125%</div>
                </div>
                <div className="p-3 bg-white/80 rounded-lg border border-current/20">
                  <div className="text-neutral-500 uppercase font-semibold">Current LTV</div>
                  <div className="font-bold text-sm mt-1 text-neutral-900">
                    {lendingHealthMetrics.currentLTV.toFixed(1)}%
                  </div>
                  <div className="text-neutral-500">Max borrow: 70%</div>
                </div>
                <div className="p-3 bg-white/80 rounded-lg border border-current/20">
                  <div className="text-neutral-500 uppercase font-semibold">Liquidation Price</div>
                  <div className="font-bold text-sm mt-1 text-red-700">
                    ${lendingHealthMetrics.liquidationPrice.toFixed(2)}
                  </div>
                  <div className="text-neutral-500">Threshold boundary</div>
                </div>
              </div>

              {lendingHealthMetrics.isLiquidatable && (
                <div className="pt-2 border-t border-red-300 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-red-900">
                    <strong>Undercollateralized Alert:</strong> Health Factor &lt; 1.0! A liquidator can repay $
                    {(lendingDebtAmount * 0.5).toFixed(2)} debt and seize ${(lendingDebtAmount * 0.5 * 1.05).toFixed(2)} worth of collateral (5% bonus).
                  </div>
                  <button
                    onClick={handleSimulateLiquidation}
                    className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded font-bold text-xs transition shadow-xs"
                  >
                    Execute 50% Liquidation
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SIMULATOR 3: Impermanent Loss & Yield Farming ROI */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
                <h3 className="text-xl font-bold text-neutral-900">Impermanent Loss & Yield Farming ROI Calculator</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Divergence vs HODL
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Impermanent Loss is the opportunity cost of providing liquidity compared to holding assets in a wallet.
              Use this simulator to calculate the exact percentage divergence across price multiples and determine whether trading fees and farming rewards offset the loss.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Initial Total Deposit ($ USD)</label>
                <input
                  type="number"
                  min="100"
                  step="1000"
                  value={ilInitialDeposit}
                  onChange={(e) => setIlInitialDeposit(Math.max(10, Number(e.target.value)))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Trading Fee APY (%)</label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={ilFeeApy}
                  onChange={(e) => setIlFeeApy(Math.max(0, Number(e.target.value)))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Holding Duration (Months)</label>
                <input
                  type="number"
                  min="1"
                  max="36"
                  value={ilDurationMonths}
                  onChange={(e) => setIlDurationMonths(Math.max(1, Number(e.target.value)))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none"
                />
              </div>
            </div>

            {/* Price Divergence Ratio Slider */}
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-neutral-800">Asset Price Divergence Ratio (r = P_new / P_initial):</span>
                <span className="font-mono font-bold text-amber-700">{ilPriceRatio.toFixed(2)}x Price Multiple</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="5.0"
                step="0.05"
                value={ilPriceRatio}
                onChange={(e) => setIlPriceRatio(Number(e.target.value))}
                className="w-full accent-amber-600"
              />
              <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                <span>0.10x (-90% crash)</span>
                <span>1.00x (No price change)</span>
                <span>2.00x (Doubling)</span>
                <span>5.00x (5x Rally)</span>
              </div>
            </div>

            {/* Impermanent Loss Metrics Result */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 bg-white rounded-xl border border-neutral-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-neutral-400">Value if HODL</span>
                <div className="text-base font-bold text-neutral-900">${ilMetrics.vHold.toFixed(2)}</div>
                <span className="text-[10px] text-neutral-500">Outside pool</span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-neutral-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-neutral-400">Value in Pool</span>
                <div className="text-base font-bold text-neutral-900">${ilMetrics.vPool.toFixed(2)}</div>
                <span className="text-[10px] text-neutral-500">Without fee yield</span>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-800">Impermanent Loss</span>
                <div className="text-base font-bold text-amber-700">{ilMetrics.ilPercent.toFixed(2)}%</div>
                <span className="text-[10px] text-amber-600">-${ilMetrics.ilDollar.toFixed(2)}</span>
              </div>

              <div className={`p-4 rounded-xl border space-y-1 ${
                ilMetrics.netProfitLoss >= 0 ? "bg-green-50 border-green-200 text-green-950" : "bg-red-50 border-red-200 text-red-950"
              }`}>
                <span className="text-[10px] uppercase font-bold">Net Return vs HODL</span>
                <div className="text-base font-bold">
                  {ilMetrics.netProfitLoss >= 0 ? "+" : ""}${ilMetrics.netProfitLoss.toFixed(2)}
                </div>
                <span className="text-[10px]">
                  Includes ${ilMetrics.feeEarnings.toFixed(2)} fee yield
                </span>
              </div>
            </div>
          </div>

          {/* SIMULATOR 4: Flash Loan Arbitrage & Atomic Reversion Simulator */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">Flash Loan Arbitrage & Atomic Reversion Simulator</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Aave FlashLoan + Multi-DEX
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Flash loans grant zero-collateral capital for the duration of a single transaction.
              Trace the execution steps of a cross-DEX arbitrage trade: if the net profit cannot cover the 0.05% protocol fee
              and gas cost, the EVM rolls back the entire execution trace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Borrowed Capital (USDC)</label>
                <input
                  type="number"
                  min="1000"
                  step="10000"
                  value={flashBorrowAmount}
                  onChange={(e) => setFlashBorrowAmount(Math.max(100, Number(e.target.value)))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">DEX A Buy Price ($/ETH)</label>
                <input
                  type="number"
                  min="500"
                  step="10"
                  value={flashDexAPrice}
                  onChange={(e) => setFlashDexAPrice(Number(e.target.value))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700">DEX B Sell Price ($/ETH)</label>
                <input
                  type="number"
                  min="500"
                  step="10"
                  value={flashDexBPrice}
                  onChange={(e) => setFlashDexBPrice(Number(e.target.value))}
                  className="w-full text-xs font-mono p-2.5 rounded-lg border border-neutral-300 outline-none"
                />
              </div>
            </div>

            {/* Quick Price Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-neutral-500 font-semibold">Test Market Scenarios:</span>
              <button
                onClick={() => { setFlashDexAPrice(2000); setFlashDexBPrice(2040); }}
                className="px-2.5 py-1 text-xs rounded border border-neutral-300 hover:bg-neutral-50 text-neutral-700"
              >
                +2% Spread (Profitable Arbitrage)
              </button>
              <button
                onClick={() => { setFlashDexAPrice(2000); setFlashDexBPrice(2000.5); }}
                className="px-2.5 py-1 text-xs rounded border border-neutral-300 hover:bg-neutral-50 text-neutral-700"
              >
                +0.02% Spread (Fee Reversion)
              </button>
              <button
                onClick={() => { setFlashDexAPrice(2020); setFlashDexBPrice(2000); }}
                className="px-2.5 py-1 text-xs rounded border border-neutral-300 hover:bg-neutral-50 text-neutral-700"
              >
                Negative Spread (Revert)
              </button>
            </div>

            {/* Execution Trace Terminal */}
            <div className="p-5 bg-neutral-900 rounded-xl font-mono text-xs text-neutral-200 space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="text-amber-400 font-bold uppercase text-[11px]">
                  EVM Atomic Call Trace & State Transitions
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  flashArbitrageResult.isProfitable ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"
                }`}>
                  {flashArbitrageResult.isProfitable ? "TX SUCCESSFUL (PROFIT)" : "TX REVERTED (ROLLBACK)"}
                </span>
              </div>

              <div className="space-y-1.5 text-[11px] leading-relaxed">
                <div>1. Call: <span className="text-neutral-400">lendingPool.flashLoan(receiver, USDC, {flashBorrowAmount.toLocaleString()})</span></div>
                <div>2. Transfer: <span className="text-neutral-400">Lending Pool sends {flashBorrowAmount.toLocaleString()} USDC to contract</span></div>
                <div>3. Swap 1: <span className="text-neutral-400">Buy ETH on DEX A @ ${flashDexAPrice} → Received {flashArbitrageResult.ethBought.toFixed(4)} ETH</span></div>
                <div>4. Swap 2: <span className="text-neutral-400">Sell {flashArbitrageResult.ethBought.toFixed(4)} ETH on DEX B @ ${flashDexBPrice} → Received {flashArbitrageResult.usdcProceeds.toFixed(2)} USDC</span></div>
                <div>5. Repay Check: <span className="text-neutral-400">Need principal ({flashBorrowAmount.toLocaleString()}) + 0.05% fee (${flashArbitrageResult.protocolFee.toFixed(2)}) = ${(flashBorrowAmount + flashArbitrageResult.protocolFee).toFixed(2)} USDC</span></div>
                <div className="pt-1 border-t border-neutral-800">
                  6. Result:{" "}
                  {flashArbitrageResult.isProfitable ? (
                    <span className="text-green-400 font-bold">
                      SUCCESS! Net Arbitrage Profit: +${flashArbitrageResult.netProfit.toFixed(2)} USDC (State Committed)
                    </span>
                  ) : (
                    <span className="text-red-400 font-bold">
                      REVERT! Shortfall of ${Math.abs(flashArbitrageResult.netProfit).toFixed(2)}. EVM atomic rollback executed.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
'''
