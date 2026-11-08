# -*- coding: utf-8 -*-
"""
Module 20 Lab & Practical Assignments:
- Practical Lab: Build a Price-Feed-Based Smart Contract Using Chainlink (Steps A-H)
- 9-Item Lab Completion Checklist
- 4 Advanced Practical Assignments (BTC/USD, Collateral Val, Circuit Breaker, CRE API)
- 5 Numerical Problems with Mathematical Derivations & Official Answer Key
"""

def generate_lab_and_challenges():
    return '''
        {/* Hands-On Engineering Labs & Capstone */}
        <section id="lab" className="space-y-16">
          {/* Practical Lab */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>HANDS-ON SOLIDITY LAB</span>
              <span>•</span>
              <span>DEPLOYMENT & TESTING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Practical Lab: Build & Deploy a Price-Feed Smart Contract Using Chainlink
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Build, compile, and deploy a production-grade Solidity smart contract that connects to the official Chainlink ETH/USD price feed on Ethereum Sepolia. Learn how to query price data, convert wei to USD, validate data freshness, and trigger defensive reverts on stale feeds.
            </p>

            {/* Tools Table */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-neutral-900 font-mono">A. Required Tools & Infrastructure</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Tool</th>
                      <th className="p-3">Purpose</th>
                      <th className="p-3">Resource Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">MetaMask</td>
                      <td className="p-3">Web3 wallet connection & tx signing</td>
                      <td className="p-3 text-amber-700">Browser Extension</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Remix IDE</td>
                      <td className="p-3">Cloud Solidity compilation & deployment</td>
                      <td className="p-3 text-amber-700"><a href="https://remix.ethereum.org" target="_blank" rel="noopener noreferrer" className="underline">remix.ethereum.org</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Ethereum Sepolia</td>
                      <td className="p-3">Primary test blockchain network</td>
                      <td className="p-3 text-amber-700">Chain ID 11155111</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chainlink Data Feeds</td>
                      <td className="p-3">Aggregated on-chain price feeds</td>
                      <td className="p-3 text-amber-700"><a href="https://docs.chain.link/data-feeds/price-feeds/addresses" target="_blank" rel="noopener noreferrer" className="underline">docs.chain.link</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Sepolia ETH Faucet</td>
                      <td className="p-3">Testnet gas for contract deployments</td>
                      <td className="p-3 text-amber-700"><a href="https://faucets.chain.link" target="_blank" rel="noopener noreferrer" className="underline">faucets.chain.link</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lab Walkthrough Steps B - H */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">Step-by-Step Lab Execution</h3>
              
              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">B. Configure MetaMask & Test Gas</div>
                <p className="text-neutral-600 leading-relaxed">
                  Open MetaMask, toggle network to <strong>Ethereum Sepolia</strong>, and acquire test ETH from the Chainlink faucet (<code>https://faucets.chain.link</code>). Connect MetaMask to Remix by selecting <em>Injected Provider - MetaMask</em> in the Deploy & Run Transactions panel.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">C. Create & Compile PriceFeedConsumer.sol</div>
                <p className="text-neutral-600 leading-relaxed">
                  In Remix, create a new file named <code>PriceFeedConsumer.sol</code>. Paste the complete contract implementation from Section 7. Select compiler version <code>0.8.20</code> or higher, enable optimization (200 runs), and click <strong>Compile PriceFeedConsumer.sol</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">D. Deploy the Contract on Sepolia</div>
                <p className="text-neutral-600 leading-relaxed">
                  In the Deploy section, provide the two constructor arguments:
                </p>
                <div className="p-3 rounded-lg bg-neutral-100 space-y-1">
                  <div><code>feedAddress</code>: <strong>0x694AA1769357215DE4FAC081bf1f309aDC325306</strong> (Official Sepolia ETH/USD proxy)</div>
                  <div><code>maxAge</code>: <strong>86400</strong> (24 hours tolerance for demo deployment)</div>
                </div>
                <p className="text-neutral-600">Click <strong>transact</strong> and confirm the deployment transaction in MetaMask.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">E. Test getLatestPrice() & Verify Raw Decimals</div>
                <p className="text-neutral-600 leading-relaxed">
                  Under Deployed Contracts, expand <code>PriceFeedConsumer</code> and click <code>getLatestPrice()</code>.
                </p>
                <div className="p-3 rounded-lg bg-neutral-900 text-neutral-200 space-y-1">
                  <div>Returned: <code>price: 324512000000</code>, <code>priceDecimals: 8</code>, <code>updatedAt: [Unix Timestamp]</code></div>
                  <div className="text-emerald-400 font-bold">Calculation: 324512000000 / 10^8 = $3,245.12 USD</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">F. Convert ETH (wei) into USD</div>
                <p className="text-neutral-600 leading-relaxed">
                  Call <code>getEthValueInUsd(1000000000000000000)</code> passing 1 ETH in wei ($10^{18}$). The function multiplies wei by raw price and divides by $10^{18}$, returning the exact dollar valuation with 8 decimal precision.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">G. Test Stale-Data Rejection Defense</div>
                <p className="text-neutral-600 leading-relaxed">
                  Deploy a second instance of <code>PriceFeedConsumer</code> using <code>maxAge = 1</code> (1 second). When you call <code>getLatestPrice()</code>, the contract compares <code>block.timestamp - timestamp &gt; 1</code> and immediately reverts with:
                </p>
                <div className="p-2.5 rounded bg-red-100 text-red-950 font-bold">
                  revert: StalePrice(age, 1)
                </div>
                <p className="text-neutral-600">This proves your smart contract refuses to trade on outdated market data!</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">H. Verify Deployment on Sepolia Etherscan</div>
                <p className="text-neutral-600 leading-relaxed">
                  Navigate to <code>https://sepolia.etherscan.io</code>, search for your deployed contract address, and verify that the creation transaction succeeded, the contract bytecode is recorded, and read functions execute successfully.
                </p>
              </div>
            </div>

            {/* 9-Point Lab Completion Checklist */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-amber-400 font-mono">Lab Completion Checklist (9 Core Objectives)</h3>
                <span className="text-xs font-mono text-neutral-400">
                  {Object.values(labStepsCompleted).filter(Boolean).length} / 9 Completed
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                {[
                  { id: "l1", label: "Configured MetaMask for Sepolia" },
                  { id: "l2", label: "Obtained Sepolia test ETH" },
                  { id: "l3", label: "Located official Chainlink feed address" },
                  { id: "l4", label: "Created & compiled PriceFeedConsumer.sol" },
                  { id: "l5", label: "Deployed consumer contract on Sepolia" },
                  { id: "l6", label: "Retrieved latest price and decimals" },
                  { id: "l7", label: "Converted 1 ETH (wei) into USD" },
                  { id: "l8", label: "Tested stale-price validation revert" },
                  { id: "l9", label: "Verified deployment on Sepolia Etherscan" }
                ].map((st) => {
                  const isChecked = !!labStepsCompleted[st.id];
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => toggleLabStep(st.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? "bg-neutral-800 border-amber-500 text-amber-300 font-bold"
                          : "bg-neutral-850 border-neutral-800 text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked ? "bg-amber-500 border-amber-500 text-neutral-900" : "border-neutral-600"
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className="leading-tight">{st.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4 Advanced Practical Assignments */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">Four Advanced Practical Engineering Assignments</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 1: BTC/USD Price Consumer</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Modify the consumer contract to connect to the Sepolia BTC/USD feed (<code>0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43</code>). Query decimals, validate freshness, and display the formatted price.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 2: ETH Collateral Valuation Engine</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Build a collateral valuation contract accepting an ETH deposit in wei. Read the Chainlink ETH/USD price, calculate USD collateral value, apply a configurable 75% LTV, and return maximum borrowable USDC.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 3: Oracle Circuit Breaker</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Extend <code>PriceFeedConsumer.sol</code> with configurable <code>minPrice</code> and <code>maxPrice</code> bounds. Reject prices outside limits, add an emergency pause mechanism, and emit warning events upon anomalies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 4: CRE External API Workflow</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Design a Chainlink Runtime Environment (CRE) workflow in TypeScript. Query a public weather or flight REST API via the HTTP capability, execute BFT consensus, generate a signed report, and write results on-chain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 19.B: 5 Numerical Problems */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.B</span>
              <span>•</span>
              <span>MATHEMATICAL DERIVATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.B Five Numerical Oracle Economics & Collateral Problems
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Step-by-step mathematical problem solving for Web3 infrastructure architects. Expand each accordion to inspect variables, formulas, and derivations.
            </p>

            <div className="space-y-4">
              {NUMERICAL_PROBLEMS.map((problem, idx) => {
                const isOpen = openProblemIndex === idx;
                return (
                  <div key={problem.id} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenProblemIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-all"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                          Problem {idx + 1}
                        </span>
                        <h4 className="text-base font-bold text-neutral-900 mt-0.5">{problem.title}</h4>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="p-5 border-t border-neutral-100 bg-neutral-50/50 space-y-4 text-xs font-mono">
                        <div className="p-4 rounded-xl bg-white border border-neutral-200">
                          <strong className="text-neutral-900 block mb-1">Problem Statement:</strong>
                          <p className="text-neutral-700 leading-relaxed">{problem.question}</p>
                        </div>

                        <div className="space-y-1">
                          <strong className="text-neutral-900 block">Given Variables:</strong>
                          <ul className="list-disc list-inside space-y-0.5 text-neutral-600">
                            {problem.variables.map((v, i) => (
                              <li key={i}>{v}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <strong className="text-neutral-900 block">Step-by-Step Derivation:</strong>
                          <div className="space-y-1.5 p-3.5 rounded-xl bg-neutral-900 text-neutral-200">
                            {problem.steps.map((st, i) => (
                              <div key={i}>{st}</div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">
                          Final Result: {problem.finalAnswer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Official Answer Key Summary Table */}
            <div className="space-y-3 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">Official Numerical Answer Key</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Problem</th>
                      <th className="p-3">Target Metric</th>
                      <th className="p-3">Exact Derived Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 1</td>
                      <td className="p-3">Collateral Valuation & Borrow Cap</td>
                      <td className="p-3 font-bold text-emerald-700">Value: $14,400.00 | Borrow: $10,800.00 USDC | Liquidation: $2,909.09 (9.09% drop)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 2</td>
                      <td className="p-3">Median vs Mean Outlier Resilience</td>
                      <td className="p-3 font-bold text-emerald-700">Mean: $70,970.00 (+10.52%) | Median: $64,220.00 (+0.012%) | 876x outlier suppression</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 3</td>
                      <td className="p-3">Fixed-Point USD Conversion</td>
                      <td className="p-3 font-bold text-emerald-700">Raw: 859512500000 | Converted: $8,595.125 USD</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 4</td>
                      <td className="p-3">Heartbeat Gas Maintenance Cost</td>
                      <td className="p-3 font-bold text-emerald-700">24 updates/day | 0.108 ETH/day ($324.00/day or ~$9,720/month)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 5</td>
                      <td className="p-3">VRF Mystery Box Modulo Mapping</td>
                      <td className="p-3 font-bold text-emerald-700">Roll 1: 23 (Common, 60%) | Roll 2: 95 (Legendary, 5%) | Roll 3: 88 (Epic, 10%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
'''
