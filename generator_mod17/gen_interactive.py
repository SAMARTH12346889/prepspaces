# -*- coding: utf-8 -*-
"""
Module 17 Interactive Simulators:
1. Dual DEX Model Engine (Order Book vs Constant Product AMM)
2. Uniswap V3 Concentrated Liquidity & Tick Visualizer
3. Multi-Hop Routing & Liquidity Aggregator
4. Integrated Lending, Collateral & Liquidation Sandbox
"""

def generate_interactive_simulators():
    return '''
      {/* ============================================================== */}
      {/* 4 LIVE INTERACTIVE PROTOCOL SIMULATORS                         */}
      {/* ============================================================== */}
      <section className="mt-14 space-y-12">
        <div className="border-b border-[#e7e3da] pb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Activity className="w-4 h-4" />
            <span>Interactive Protocol Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
            Live DEX & Lending Protocol Sandboxes
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Test and manipulate real smart contract execution algorithms: constant product AMM curves, Uniswap V3 concentrated liquidity bands, multi-hop swap routing, and lending collateralization/liquidation engines in real time.
          </p>
        </div>

        {/* SIMULATOR 1: DUAL DEX ENGINE (ORDER BOOK VS AMM) */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Simulator 01
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">
                DEX Execution Models: Order Book Ladder vs Constant Product AMM
              </h3>
              <p className="text-xs text-neutral-500">
                Compare discrete bid-ask limit order matching against algorithmic pooled liquidity (x · y = k).
              </p>
            </div>
            <div className="flex items-center bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                onClick={() => setDexModel("amm")}
                className={`px-3 py-1.5 rounded-lg transition ${
                  dexModel === "amm" ? "bg-amber-600 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Constant Product AMM
              </button>
              <button
                onClick={() => setDexModel("orderbook")}
                className={`px-3 py-1.5 rounded-lg transition ${
                  dexModel === "orderbook" ? "bg-amber-600 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Order Book Ladder
              </button>
            </div>
          </div>

          {dexModel === "amm" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Controls */}
              <div className="lg:col-span-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                    <span className="text-xs text-neutral-500 font-medium">Pool Reserve A (ETH)</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-base font-bold text-neutral-900 font-mono">{ammReserveETH.toFixed(2)} ETH</span>
                      <button
                        onClick={() => { setAmmReserveETH(50); setAmmReserveUSDC(100000); }}
                        className="text-[10px] text-amber-700 underline font-semibold"
                      >
                        Reset Pool
                      </button>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                    <span className="text-xs text-neutral-500 font-medium">Pool Reserve B (USDC)</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-base font-bold text-neutral-900 font-mono">${ammReserveUSDC.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                      <span className="text-[10px] text-neutral-500 font-mono">Spot: ${(ammReserveUSDC / ammReserveETH).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neutral-700">Swap Input Amount:</span>
                    <span className="font-mono font-bold text-amber-900">{ammSwapIn} ETH</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="20"
                    step="0.1"
                    value={ammSwapIn}
                    onChange={(e) => setAmmSwapIn(parseFloat(e.target.value))}
                    className="w-full accent-amber-600"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                    <span>0.1 ETH (Micro)</span>
                    <span>5.0 ETH (Standard)</span>
                    <span>20.0 ETH (Whale)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-neutral-700">Fee Tier</label>
                    <select
                      value={ammFeeTier}
                      onChange={(e) => setAmmFeeTier(parseFloat(e.target.value))}
                      className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                    >
                      <option value="0.0005">0.05% (Stable / Bluechip)</option>
                      <option value="0.003">0.30% (Standard Uniswap V2)</option>
                      <option value="0.01">1.00% (Exotic / Volatile)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-neutral-700">Slippage Tolerance</label>
                    <select
                      value={ammSlippage}
                      onChange={(e) => setAmmSlippage(parseFloat(e.target.value))}
                      className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                    >
                      <option value="0.001">0.1% (Strict)</option>
                      <option value="0.005">0.5% (Default)</option>
                      <option value="0.01">1.0% (Volatile)</option>
                      <option value="0.03">3.0% (Dangerous / High MEV)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleExecuteAmmSwap}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                  Execute On-Chain Swap (Update Pool State)
                </button>
              </div>

              {/* Real-time Math Output */}
              <div className="lg:col-span-6 bg-[#f6f4ee] p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
                    <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">Swap Execution Metrics</span>
                    <span className="text-xs font-mono font-semibold text-neutral-500">
                      k = {(ammReserveETH * ammReserveUSDC).toLocaleString(undefined, {maximumFractionDigits: 0})}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Expected Output:</span>
                      <span className="text-base font-bold text-emerald-700">
                        ${calculatedAmmOut.outputUSDC.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} USDC
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Initial Spot Price:</span>
                      <span className="text-neutral-900 font-semibold">${calculatedAmmOut.spotPrice.toFixed(2)} / ETH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Effective Swap Price:</span>
                      <span className="text-neutral-900 font-semibold">${calculatedAmmOut.effectivePrice.toFixed(2)} / ETH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Price Impact:</span>
                      <span className={`font-bold ${calculatedAmmOut.priceImpact > 5 ? "text-rose-600" : calculatedAmmOut.priceImpact > 2 ? "text-amber-600" : "text-emerald-700"}`}>
                        {calculatedAmmOut.priceImpact.toFixed(2)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">Trading Fee (LP cut):</span>
                      <span className="text-neutral-700">${calculatedAmmOut.feePaid.toFixed(2)} USDC</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#e7e3da]">
                      <span className="text-neutral-700 font-semibold">Guaranteed Minimum (Slippage):</span>
                      <span className="font-bold text-amber-900">
                        ${calculatedAmmOut.minReceived.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} USDC
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-white rounded-lg border border-[#e7e3da] text-[11px] text-neutral-600">
                  <span className="font-bold text-neutral-900">Solidity Equation:</span>
                  <div className="font-mono text-amber-800 mt-0.5">
                    Δy = (y · Δx · {((1 - ammFeeTier) * 1000).toFixed(0)}) / (x · 1000 + Δx · {((1 - ammFeeTier) * 1000).toFixed(0)})
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Order Book View */
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 bg-[#f6f4ee] p-4 rounded-xl border border-[#e7e3da]">
                <div className="flex justify-between items-center border-b border-[#e7e3da] pb-2 mb-3">
                  <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">Live ETH/USDC Order Ladder</span>
                  <span className="text-xs font-mono font-bold text-amber-800">
                    Spread: ${obSpread.toFixed(2)} ({((obSpread / 2000) * 100).toFixed(2)}%)
                  </span>
                </div>

                <div className="space-y-1 font-mono text-xs">
                  {/* Asks (Sell orders) - Reverse sorted */}
                  <div className="text-[10px] uppercase font-bold text-rose-700 mb-1">Asks (Sell Orders)</div>
                  {[
                    { price: 2010, size: 8.0, total: 16.0 },
                    { price: 2005, size: 5.0, total: 8.0 },
                    { price: 2002, size: 3.0, total: 3.0 }
                  ].map((ask, idx) => (
                    <div key={idx} className="flex justify-between items-center p-1.5 rounded bg-rose-50/70 border border-rose-100 text-rose-900">
                      <span className="font-bold">${ask.price.toFixed(2)}</span>
                      <span>{ask.size.toFixed(1)} ETH</span>
                      <span className="text-neutral-500">${(ask.price * ask.size).toLocaleString()}</span>
                    </div>
                  ))}

                  {/* Spread indicator */}
                  <div className="py-2 text-center text-xs font-bold text-neutral-500 bg-white border-y border-dashed border-[#e7e3da] my-2">
                    --- Mid Market Spread: $2,000.00 ---
                  </div>

                  {/* Bids (Buy orders) */}
                  <div className="text-[10px] uppercase font-bold text-emerald-700 mb-1">Bids (Buy Orders)</div>
                  {[
                    { price: 1998, size: 5.0, total: 5.0 },
                    { price: 1995, size: 10.0, total: 15.0 },
                    { price: 1990, size: 15.0, total: 30.0 }
                  ].map((bid, idx) => (
                    <div key={idx} className="flex justify-between items-center p-1.5 rounded bg-emerald-50/70 border border-emerald-100 text-emerald-900">
                      <span className="font-bold">${bid.price.toFixed(2)}</span>
                      <span>{bid.size.toFixed(1)} ETH</span>
                      <span className="text-neutral-500">${(bid.price * bid.size).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] space-y-3">
                  <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">Order Book Mechanics</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Unlike AMMs, order books match orders between active buyers and sellers. Best Ask is <strong>$2,002</strong>, Best Bid is <strong>$1,998</strong>.
                  </p>
                  <div className="p-2.5 bg-white rounded-lg border border-[#e7e3da] text-xs font-mono">
                    <span className="text-neutral-500">Spread Formula:</span>
                    <div className="font-bold text-neutral-900 mt-0.5">Spread = Lowest Ask - Highest Bid</div>
                    <div className="text-amber-800 font-bold mt-0.5">$2,002 - $1,998 = $4.00</div>
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    <strong>Challenge:</strong> Submitting, canceling, and matching limit orders on Ethereum L1 consumes 50,000 to 120,000 gas per order, creating immense friction compared to constant-product AMM pooling.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SIMULATOR 2: UNISWAP V3 CONCENTRATED LIQUIDITY */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="border-b border-[#e7e3da] pb-4 mb-6">
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Simulator 02
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Uniswap V3 Concentrated Liquidity & Range Visualizer
            </h3>
            <p className="text-xs text-neutral-500">
              Adjust price boundaries [Pa, Pb] to analyze virtual reserves, tick numbers, and capital efficiency gains over V2 full-range pooling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-neutral-700">Market Spot Price (P):</span>
                  <span className="font-mono font-bold text-amber-900">${v3CurrentPrice.toLocaleString()} / ETH</span>
                </div>
                <input
                  type="range"
                  min="1200"
                  max="2800"
                  step="25"
                  value={v3CurrentPrice}
                  onChange={(e) => setV3CurrentPrice(parseFloat(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neutral-700">Lower Bound (Pa):</span>
                    <span className="font-mono font-bold text-neutral-900">${v3LowerPrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="1950"
                    step="25"
                    value={v3LowerPrice}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (val < v3UpperPrice) setV3LowerPrice(val);
                    }}
                    className="w-full accent-amber-600"
                  />
                  <span className="text-[10px] text-neutral-500 font-mono">
                    Tick: {Math.round(Math.log(v3LowerPrice) / Math.log(1.0001))}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neutral-700">Upper Bound (Pb):</span>
                    <span className="font-mono font-bold text-neutral-900">${v3UpperPrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="2050"
                    max="3500"
                    step="25"
                    value={v3UpperPrice}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (val > v3LowerPrice) setV3UpperPrice(val);
                    }}
                    className="w-full accent-amber-600"
                  />
                  <span className="text-[10px] text-neutral-500 font-mono">
                    Tick: {Math.round(Math.log(v3UpperPrice) / Math.log(1.0001))}
                  </span>
                </div>
              </div>

              {/* Position Region Badge */}
              <div className={`p-3 rounded-xl border flex items-center justify-between text-xs font-bold ${
                v3CurrentPrice < v3LowerPrice
                  ? "bg-rose-50 border-rose-200 text-rose-900"
                  : v3CurrentPrice > v3UpperPrice
                  ? "bg-amber-50 border-amber-200 text-amber-900"
                  : "bg-emerald-50 border-emerald-200 text-emerald-900"
              }`}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-current animate-pulse"></span>
                  <span>
                    {v3CurrentPrice < v3LowerPrice
                      ? "Region A: Price Below Range (P < Pa)"
                      : v3CurrentPrice > v3UpperPrice
                      ? "Region C: Price Above Range (P > Pb)"
                      : "Region B: In-Range (Pa ≤ P ≤ Pb)"}
                  </span>
                </div>
                <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-white/70">
                  {v3CurrentPrice >= v3LowerPrice && v3CurrentPrice <= v3UpperPrice ? "Earning Fees" : "Inactive (0 Fees)"}
                </span>
              </div>
            </div>

            {/* V3 Metrics Breakdown */}
            <div className="lg:col-span-6 bg-[#f6f4ee] p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">Liquidity Composition & Efficiency</span>
                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Capital Efficiency Gain:</span>
                    <span className="text-base font-bold text-amber-700">
                      {calculatedV3.capitalEfficiency.toFixed(1)}x vs V2
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Token 0 (ETH) Share:</span>
                    <span className="text-neutral-900 font-semibold">{calculatedV3.ethRatio.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Token 1 (USDC) Share:</span>
                    <span className="text-neutral-900 font-semibold">{calculatedV3.usdcRatio.toFixed(1)}%</span>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="mt-4">
                  <div className="h-4 w-full bg-neutral-200 rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${calculatedV3.ethRatio}%` }}
                      className="bg-amber-600 h-full transition-all duration-300"
                      title="ETH"
                    ></div>
                    <div
                      style={{ width: `${calculatedV3.usdcRatio}%` }}
                      className="bg-blue-600 h-full transition-all duration-300"
                      title="USDC"
                    ></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                    <span className="text-amber-800 font-bold">ETH: {calculatedV3.ethRatio.toFixed(0)}%</span>
                    <span className="text-blue-800 font-bold">USDC: {calculatedV3.usdcRatio.toFixed(0)}%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded-lg border border-[#e7e3da] text-[11px] text-neutral-600">
                <span className="font-bold text-neutral-900">Tick Formula:</span>
                <span className="font-mono text-amber-800 ml-1">P(i) = 1.0001^tick</span>
                <div className="text-[10px] text-neutral-500 mt-1">
                  At 1.0001 base, 1 tick corresponds to exactly 1 basis point (0.01%) movement in price.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATOR 3: MULTI-HOP ROUTE OPTIMIZER */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="border-b border-[#e7e3da] pb-4 mb-6">
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Simulator 03
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Multi-Hop Swap Routing & Aggregation Engine
            </h3>
            <p className="text-xs text-neutral-500">
              Simulate token swaps from Token A (WBTC) to Token C (DAI) across direct vs multi-hop liquidity paths.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-neutral-700">Swap Input (WBTC):</span>
                  <span className="font-mono font-bold text-amber-900">{routeAmountIn} WBTC</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={routeAmountIn}
                  onChange={(e) => setRouteAmountIn(parseFloat(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] space-y-3">
                <div className="text-xs font-bold text-neutral-800 uppercase">Available DEX Liquidity Pools</div>
                <div className="grid grid-cols-3 gap-2 font-mono text-[11px]">
                  <div className="p-2 bg-white rounded border border-[#e7e3da]">
                    <div className="font-bold text-neutral-900">Pool A/B (WBTC/ETH)</div>
                    <div className="text-neutral-500 text-[10px]">Deep Liquidity</div>
                    <div className="text-emerald-700 font-semibold mt-1">1 WBTC = 30 ETH</div>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#e7e3da]">
                    <div className="font-bold text-neutral-900">Pool B/C (ETH/DAI)</div>
                    <div className="text-neutral-500 text-[10px]">Deep Liquidity</div>
                    <div className="text-emerald-700 font-semibold mt-1">1 ETH = 2,000 DAI</div>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#e7e3da]">
                    <div className="font-bold text-neutral-900">Pool A/C (WBTC/DAI)</div>
                    <div className="text-rose-600 text-[10px]">Thin / High Impact</div>
                    <div className="text-amber-700 font-semibold mt-1">Direct Pool</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Route Comparison Output */}
            <div className="lg:col-span-6 space-y-3">
              {/* Route 1: Direct */}
              <div className={`p-4 rounded-xl border transition ${
                calculatedRoute.bestRoute === "direct"
                  ? "bg-emerald-50/60 border-emerald-300 ring-1 ring-emerald-400"
                  : "bg-white border-[#e7e3da]"
              }`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900">Route 1: Direct Swap (WBTC → DAI)</span>
                    {calculatedRoute.bestRoute === "direct" && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                        OPTIMAL
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-900">1 Hop (100k Gas)</span>
                </div>
                <div className="mt-2 flex justify-between items-baseline font-mono text-xs">
                  <span className="text-neutral-600">Output Received:</span>
                  <span className="text-base font-bold text-neutral-900">
                    ${calculatedRoute.directOut.toLocaleString(undefined, {maximumFractionDigits: 0})} DAI
                  </span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  High price impact ({calculatedRoute.directPriceImpact.toFixed(1)}%) due to thin direct reserves.
                </div>
              </div>

              {/* Route 2: 2-Hop */}
              <div className={`p-4 rounded-xl border transition ${
                calculatedRoute.bestRoute === "multihop"
                  ? "bg-emerald-50/60 border-emerald-300 ring-1 ring-emerald-400"
                  : "bg-white border-[#e7e3da]"
              }`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900">Route 2: Multi-Hop (WBTC → ETH → DAI)</span>
                    {calculatedRoute.bestRoute === "multihop" && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                        OPTIMAL (+${(calculatedRoute.multiHopOut - calculatedRoute.directOut).toLocaleString(undefined, {maximumFractionDigits: 0})} DAI)
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-900">2 Hops (175k Gas)</span>
                </div>
                <div className="mt-2 flex justify-between items-baseline font-mono text-xs">
                  <span className="text-neutral-600">Output Received:</span>
                  <span className="text-base font-bold text-emerald-700">
                    ${calculatedRoute.multiHopOut.toLocaleString(undefined, {maximumFractionDigits: 0})} DAI
                  </span>
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  Lower price impact ({calculatedRoute.multiHopPriceImpact.toFixed(1)}%) by leveraging deep intermediate pools.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATOR 4: LENDING, COLLATERAL & LIQUIDATION ENGINE */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="border-b border-[#e7e3da] pb-4 mb-6">
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Simulator 04
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              DeFi Lending, Collateral Valuation & Liquidation Sandbox
            </h3>
            <p className="text-xs text-neutral-500">
              Simulate market crashes, evaluate borrower Health Factors (HF), compare Compound vs Aave interest accounting, and trigger liquidations with bonuses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700">ETH Collateral Supplied</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={lendingEthCollateral}
                      onChange={(e) => setLendingEthCollateral(Math.max(1, parseFloat(e.target.value) || 0))}
                      className="w-full p-2 rounded-lg border border-[#e7e3da] font-mono text-xs font-bold"
                    />
                    <span className="text-xs font-mono text-neutral-500">ETH</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700">USDC Debt Borrowed</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1000"
                      max="100000"
                      step="500"
                      value={lendingUsdcDebt}
                      onChange={(e) => setLendingUsdcDebt(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full p-2 rounded-lg border border-[#e7e3da] font-mono text-xs font-bold"
                    />
                    <span className="text-xs font-mono text-neutral-500">USDC</span>
                  </div>
                </div>
              </div>

              {/* Market Crash Slider */}
              <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-rose-900 flex items-center gap-1.5">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Simulate ETH Market Price Shock:
                  </span>
                  <span className="font-mono font-bold text-rose-700">
                    ${calculatedLending.crashedEthPrice.toFixed(0)} ({lendingMarketCrash}% drop)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  step="5"
                  value={lendingMarketCrash}
                  onChange={(e) => setLendingMarketCrash(parseInt(e.target.value))}
                  className="w-full accent-rose-600"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>Baseline ($2,000)</span>
                  <span>-30% ($1,400)</span>
                  <span>-60% Flash Crash ($800)</span>
                </div>
              </div>

              {/* Liquidation Action Button */}
              {calculatedLending.healthFactor < 1.0 ? (
                <button
                  onClick={handleExecuteLiquidation}
                  className="w-full py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-sm animate-pulse"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Liquidate 50% Debt (Close Factor) & Claim +5% Bonus
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-xs font-bold text-emerald-800">
                  Loan is Solvent (HF ≥ 1.0). Liquidation rejected by contract.
                </div>
              )}
            </div>

            {/* Real-time Health Factor & Risk Dashboard */}
            <div className="lg:col-span-6 bg-[#f6f4ee] p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
                  <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">Position Solvency Risk</span>
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    calculatedLending.healthFactor < 1.0
                      ? "bg-rose-100 text-rose-800"
                      : calculatedLending.healthFactor < 1.3
                      ? "bg-amber-100 text-amber-800"
                      : "bg-emerald-100 text-emerald-800"
                  }`}>
                    {calculatedLending.healthFactor < 1.0
                      ? "LIQUIDATABLE"
                      : calculatedLending.healthFactor < 1.3
                      ? "AT RISK"
                      : "HEALTHY"}
                  </span>
                </div>

                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Borrower Health Factor:</span>
                    <span className={`text-xl font-extrabold ${
                      calculatedLending.healthFactor < 1.0
                        ? "text-rose-600"
                        : calculatedLending.healthFactor < 1.3
                        ? "text-amber-600"
                        : "text-emerald-700"
                    }`}>
                      {calculatedLending.healthFactor.toFixed(4)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Collateral Market Value:</span>
                    <span className="text-neutral-900 font-semibold">
                      ${calculatedLending.totalCollateralValue.toLocaleString(undefined, {maximumFractionDigits: 0})}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Liquidation Threshold (80%):</span>
                    <span className="text-neutral-700 font-semibold">
                      ${calculatedLending.adjustedCollateralThreshold.toLocaleString(undefined, {maximumFractionDigits: 0})}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Total Borrowed Debt:</span>
                    <span className="text-neutral-900 font-bold font-mono">
                      ${lendingUsdcDebt.toLocaleString()} USDC
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-[#e7e3da]">
                    <span className="text-neutral-700 font-semibold">Liquidation Boundary Price:</span>
                    <span className="font-bold text-amber-900 font-mono">
                      ${calculatedLending.liquidationPriceBoundary.toFixed(2)} / ETH
                    </span>
                  </div>
                </div>
              </div>

              {/* Compound vs Aave Accounting Insight */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-mono bg-white p-3 rounded-lg border border-[#e7e3da]">
                <div>
                  <span className="font-bold text-neutral-900">Compound V2 cTokens:</span>
                  <div className="text-neutral-500 mt-0.5">Static balance, exchange rate increases:</div>
                  <div className="text-amber-800 font-bold">1 cETH = 0.0205 ETH</div>
                </div>
                <div>
                  <span className="font-bold text-neutral-900">Aave V3 aTokens:</span>
                  <div className="text-neutral-500 mt-0.5">Rebasing balance, 1:1 price peg:</div>
                  <div className="text-emerald-700 font-bold">1 aUSDC = $1.00 USDC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    '''
