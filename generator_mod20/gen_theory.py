# -*- coding: utf-8 -*-
"""
Module 20 Theory Sections: Parts 1 to 20
Full fidelity, zero information loss.
"""

def generate_theory_sections():
    return '''
        {/* Theory Section Container */}
        <section id="theory" className="space-y-16">
          {/* Part 1: Introduction to Blockchain Oracles */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 1</span>
              <span>•</span>
              <span>EXTERNAL DATA BRIDGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              1. Introduction to Blockchain Oracles
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">1.1 What is a Blockchain Oracle?</h3>
              <p>
                A <strong>blockchain oracle</strong> is a service that connects smart contracts with information and systems outside the blockchain.
              </p>
              <p>
                Smart contracts operate inside sandboxed, isolated blockchain virtual machines. They can read internal blockchain state, execute transactions, verify cryptographic signatures, and interact with other smart contracts. However, they cannot independently access external real-world information such as:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-white p-4 rounded-xl border border-neutral-200">
                <li className="flex items-center gap-2">&bull; Cryptocurrency prices from external exchange order books</li>
                <li className="flex items-center gap-2">&bull; Traditional stock and equity market prices</li>
                <li className="flex items-center gap-2">&bull; Real-time weather and meteorological conditions</li>
                <li className="flex items-center gap-2">&bull; Foreign currency exchange rates (FX)</li>
                <li className="flex items-center gap-2">&bull; Sports match and tournament outcomes</li>
                <li className="flex items-center gap-2">&bull; Bank reserve backing & custodian audits</li>
                <li className="flex items-center gap-2">&bull; External REST APIs and web services</li>
                <li className="flex items-center gap-2">&bull; Real-world asset (RWA) property valuations</li>
              </ul>
              <p>
                An oracle provides the secure bridge through which this external information reaches a smart contract.
              </p>

              {/* Example: Crypto Lending */}
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                  Example: Cryptocurrency Lending Collateral Calculation
                </div>
                <p className="text-neutral-300">
                  Imagine a user deposits 1 ETH into a DeFi lending platform and wants to borrow USDC. The lending contract must know the current ETH price in USD to determine the borrowing capacity:
                </p>
                <div className="p-3 rounded-lg bg-neutral-800 space-y-1 text-neutral-200">
                  <div>User deposits = 1 ETH</div>
                  <div>ETH Market Price = $3,000 USD</div>
                  <div>Collateral Value = 1 &times; $3,000 = $3,000 USD</div>
                  <div>Maximum Borrowing Ratio (LTV) = 70%</div>
                  <div className="text-amber-400 font-bold pt-1">
                    Maximum Borrowing Amount = $3,000 &times; 0.70 = $2,100 USDC
                  </div>
                </div>
                <p className="text-neutral-400 text-[11px]">
                  The smart contract cannot independently query Binance, Coinbase, or Kraken. It requires an oracle to report that 1 ETH = $3,000 on-chain so it can enforce solvency rules.
                </p>
              </div>

              {/* 1.2 Why Oracles Are Necessary */}
              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.2 Why Are Oracles Necessary?</h3>
              <p>
                Without oracles, blockchain applications would be strictly confined to information already present inside their own ledger (e.g. token balances and block timestamps). Oracles massively expand the utility of Web3 across industries:
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Application Category</th>
                      <th className="p-3">External Information Required</th>
                      <th className="p-3">Protocol Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">DeFi Lending & Perps</td>
                      <td className="p-3">ETH, BTC, SOL and token market prices</td>
                      <td className="p-3">Collateral valuation, margin checks, liquidations</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Stablecoins</td>
                      <td className="p-3">Asset prices and off-chain bank reserve attestations</td>
                      <td className="p-3">Maintaining $1 pegs, solvency audits (Proof of Reserve)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Parametric Insurance</td>
                      <td className="p-3">Flight status, weather sensors, earthquake reports</td>
                      <td className="p-3">Automated claim payouts without human adjusters</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Prediction Markets</td>
                      <td className="p-3">Election tallies, sports scores, regulatory rulings</td>
                      <td className="p-3">Settling betting contracts and disbursing pools</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">NFT Gaming & Loot</td>
                      <td className="p-3">Verifiable random numbers (VRF)</td>
                      <td className="p-3">Unbiasable item drops, fair matchmaking, turn order</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Real-World Assets (RWA)</td>
                      <td className="p-3">Real estate appraisals, Treasury bond yields</td>
                      <td className="p-3">Tokenized debt coupons, asset custody verification</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Supply Chain</td>
                      <td className="p-3">GPS location, IoT temperature logs, bill of lading</td>
                      <td className="p-3">Releasing escrow payments upon warehouse arrival</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 2: The Blockchain Oracle Problem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 2</span>
              <span>•</span>
              <span>DETERMINISM & VULNERABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              2. The Blockchain Oracle Problem & Flash Loan Attacks
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">2.1 Understanding the Oracle Problem</h3>
              <p>
                The <strong>oracle problem</strong> refers to the challenge of securely transferring reliable external information into a blockchain without compromising decentralization or deterministic execution.
              </p>
              <p>
                Blockchains achieve security through <em>deterministic consensus</em>: every validating node must execute the exact same bytecode and produce the exact same cryptographic state root. External information, however, is non-deterministic and constantly fluctuates:
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Exchange Source</th>
                      <th className="p-3">Reported ETH/USD Price</th>
                      <th className="p-3">Discrepancy Cause</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Exchange A (Binance)</td>
                      <td className="p-3">$3,001.00</td>
                      <td className="p-3">High liquidity order book</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Exchange B (Coinbase)</td>
                      <td className="p-3">$3,005.00</td>
                      <td className="p-3">US institutional order flow</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Exchange C (Kraken)</td>
                      <td className="p-3">$2,999.00</td>
                      <td className="p-3">Slight European retail spread</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Exchange D (Uniswap DEX)</td>
                      <td className="p-3">$3,003.00</td>
                      <td className="p-3">AMM pool ratio variation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-bold text-neutral-900">
                Which price should the smart contract trust? Five fundamental challenges arise:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">1. Data Accuracy:</strong> External data providers may publish erroneous, manipulated, or fat-fingered numbers.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">2. Data Availability:</strong> An external API or server can crash, undergo maintenance, or suffer DDoS attacks.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">3. Centralized Control:</strong> A single oracle operator can turn rogue, steal funds, or be coerced by authorities.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">4. Data Manipulation:</strong> Attackers can manipulate low-liquidity spot markets to deceive the oracle.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 sm:col-span-2 md:col-span-1">
                  <strong className="text-neutral-900">5. Data Freshness:</strong> Stale prices submitted hours ago may no longer represent current risk.
                </div>
              </div>

              {/* 2.2 Example of an Oracle Attack */}
              <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-3">
                <h3 className="text-base font-bold text-red-950 font-mono">2.2 Example of an Oracle Flash Loan Attack</h3>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  Imagine a lending platform accepts token XYZ as collateral. The token's legitimate fair-market price is <strong>$100</strong>. However, the lending contract relies on a single low-liquidity decentralized exchange (AMM) spot price as its oracle:
                </p>
                <div className="p-3.5 rounded-xl bg-white border border-red-200 text-xs font-mono text-red-900 space-y-1">
                  <div>1. Attacker takes a $50,000,000 flash loan of USDC.</div>
                  <div>2. Attacker dumps USDC into the XYZ/USDC pool, driving spot price from $100 &rarr; $500.</div>
                  <div>3. The lending contract reads the manipulated spot price: $500.</div>
                  <div>4. Attacker deposits XYZ collateral valued at $500/token and borrows millions in real ETH/USDC.</div>
                  <div>5. Attacker swaps back on the AMM, repays the flash loan, and keeps the borrowed funds.</div>
                  <div>6. The lending platform is left with worthless collateral and massive bad debt.</div>
                </div>
                <p className="text-xs text-neutral-600 italic">
                  <strong>Important Distinction:</strong> Not all oracle systems are equally vulnerable. A decentralized oracle network aggregating across multiple independent off-chain exchanges and security-reviewed nodes provides mathematical immunity against single-pool flash loan manipulation.
                </p>
              </div>
            </div>
          </div>

          {/* Part 3: Centralized vs Decentralized Oracles */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 3</span>
              <span>•</span>
              <span>ORACLE PARADIGMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              3. Centralized vs. Decentralized Oracles
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Centralized */}
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                  <h3 className="text-base font-bold text-neutral-900 font-mono">3.1 Centralized Oracles</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    A centralized oracle receives information from a single server, organization, or proprietary API key.
                  </p>
                  <div className="p-3 rounded-lg bg-neutral-900 text-neutral-200 font-mono text-[11px] leading-relaxed">
                    External API &rarr; Centralized Server &rarr; Smart Contract &rarr; Dapp
                  </div>
                  <div className="text-xs font-mono space-y-1">
                    <div className="text-emerald-700 font-bold">Advantages:</div>
                    <div>&bull; Simple to implement and low computational complexity.</div>
                    <div>&bull; Direct control over data formatting and update frequency.</div>
                    <div className="text-red-700 font-bold pt-1">Disadvantages:</div>
                    <div>&bull; Single point of failure: server downtime freezes the dapp.</div>
                    <div>&bull; Operator can manipulate or forge prices for profit.</div>
                    <div>&bull; Subject to censorship, subpoenas, and API key revocations.</div>
                  </div>
                </div>

                {/* Decentralized */}
                <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                  <h3 className="text-base font-bold text-neutral-900 font-mono">3.2 Decentralized Oracles (DON)</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    A Decentralized Oracle Network coordinates multiple independent node operators and data aggregators.
                  </p>
                  <div className="p-3 rounded-lg bg-neutral-900 text-neutral-200 font-mono text-[11px] leading-relaxed">
                    Multiple APIs &rarr; Independent Nodes &rarr; Offchain Aggregation &rarr; On-chain Aggregator &rarr; Consumer
                  </div>
                  <div className="text-xs font-mono space-y-1">
                    <div className="text-emerald-700 font-bold">Advantages:</div>
                    <div>&bull; High fault tolerance: rogue nodes are rejected via median filters.</div>
                    <div>&bull; Sybil-resistant cryptographic reporting with multi-node quorums.</div>
                    <div>&bull; Zero single points of failure.</div>
                    <div className="text-amber-700 font-bold pt-1">Trade-offs:</div>
                    <div>&bull; Higher architectural complexity and network coordination costs.</div>
                  </div>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Characteristic</th>
                      <th className="p-3">Centralized Oracle</th>
                      <th className="p-3">Decentralized Oracle (Chainlink)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Data Providers</td>
                      <td className="p-3">Usually one provider or API</td>
                      <td className="p-3 font-bold text-emerald-700">Multiple premium data aggregators</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Trust Assumption</td>
                      <td className="p-3">Full trust in single operator</td>
                      <td className="p-3 font-bold text-emerald-700">Honest supermajority (&gt;2/3) across independent nodes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Failure Risk</td>
                      <td className="p-3 text-red-700 font-bold">Single point of failure</td>
                      <td className="p-3 font-bold text-emerald-700">Distributed Byzantine fault tolerance</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Manipulation Resistance</td>
                      <td className="p-3">Zero (operator can alter values)</td>
                      <td className="p-3 font-bold text-emerald-700">Extremely high with off-chain median filters</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Complexity & Overhead</td>
                      <td className="p-3">Low implementation complexity</td>
                      <td className="p-3">Requires DON coordination & aggregation rounds</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Typical Application</td>
                      <td className="p-3">Low-stakes internal prototypes</td>
                      <td className="p-3 font-bold text-neutral-900">DeFi protocols, money markets, and tokenized RWAs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 4: Oracle Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 4</span>
              <span>•</span>
              <span>END-TO-END PIPELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              4. Complete Oracle Architecture: Sourcing to On-Chain Consumption
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                An enterprise-grade oracle network consists of five discrete functional tiers operating collaboratively:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">4.1 Data Sources</div>
                  <div className="text-neutral-600">Primary originators of external information: crypto exchanges, NASDAQ/NYSE feeds, weather sensors, and banking APIs.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">4.2 Oracle Nodes</div>
                  <div className="text-neutral-600">Independent servers operated by leading DevOps entities (e.g. Deutsche Telekom, Swisscom) that query data sources.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">4.3 Decentralized Oracle Network</div>
                  <div className="text-neutral-600">Coordinates nodes, aggregates individual observations, runs consensus protocols, and signs cryptographic reports.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">4.4 Aggregator Contract</div>
                  <div className="text-neutral-600">On-chain smart contract that receives authenticated reports from the DON, validates signatures, and records prices.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">4.5 Proxy Contract</div>
                  <div className="text-neutral-600">Provides a persistent address for consumer dapps while enabling seamless underlying aggregator logic upgrades.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">4.6 Consumer Contract</div>
                  <div className="text-neutral-600">The end application (Aave lending, Synthetix derivatives, MakerDAO) that calls the proxy to read verified data.</div>
                </div>
              </div>

              {/* Complete Architecture Flow */}
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                  The Complete 7-Step Oracle Execution Process
                </div>
                <div className="space-y-1 text-neutral-300">
                  <div>1. External data sources provide raw market trade ticks and order book depth.</div>
                  <div>2. Oracle nodes independently retrieve and normalize observations via authenticated HTTPS.</div>
                  <div>3. The DON processes, sorts, and aggregates observations off-chain using Byzantine fault tolerant consensus.</div>
                  <div>4. The aggregate report is cryptographically signed by a quorum and transmitted to the on-chain Aggregator.</div>
                  <div>5. The Aggregator verifies signatures and stores the latest price round and timestamp.</div>
                  <div>6. The Consumer application reads the validated data through the Feed Proxy address.</div>
                  <div>7. The Smart Contract executes its business logic (e.g. minting stablecoins or executing liquidations).</div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 5: Understanding Chainlink */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 5</span>
              <span>•</span>
              <span>CHAINLINK ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              5. Understanding Chainlink: The Industry-Standard Web3 Services Platform
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                <strong>Chainlink</strong> is the decentralized oracle infrastructure platform that secures the overwhelming majority of DeFi, connecting smart contracts with external data, off-chain verifiable computation, and cross-chain messaging.
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Chainlink Service</th>
                      <th className="p-3">Primary Purpose & Architecture</th>
                      <th className="p-3">Lifecycle / Version Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chainlink Data Feeds</td>
                      <td className="p-3">Delivers aggregated market prices and financial metrics on-chain via push model</td>
                      <td className="p-3 font-bold text-emerald-700">Active Production Standard</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chainlink VRF (Verifiable Random Function)</td>
                      <td className="p-3">Generates cryptographic, tamper-proof randomness with on-chain proof verification</td>
                      <td className="p-3 font-bold text-emerald-700">VRF v2.5 Active (v1 & v2 sunsetting Nov 2026)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chainlink Data Streams</td>
                      <td className="p-3">Delivers low-latency, pull-based market reports with sub-second execution for derivatives</td>
                      <td className="p-3 font-bold text-emerald-700">Active High-Frequency Standard</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chainlink Runtime Environment (CRE)</td>
                      <td className="p-3">Orchestrates decentralized workflows, external APIs, and computation via TypeScript/Go</td>
                      <td className="p-3 font-bold text-emerald-700">Modern Successor to Functions & Automation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chainlink CCIP</td>
                      <td className="p-3">Enables trust-minimized cross-chain token transfers and arbitrary message passing</td>
                      <td className="p-3 font-bold text-emerald-700">Active Interoperability Standard</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chainlink Automation (Legacy)</td>
                      <td className="p-3">Decentralized smart contract execution based on triggers</td>
                      <td className="p-3 font-bold text-amber-700">Sunsetted (v1.x June 2026, v2.1 July 2026 &rarr; Migrate to CRE)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 6: Chainlink Data Feeds */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 6</span>
              <span>•</span>
              <span>DATA FEEDS & INTERFACES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              6. Chainlink Data Feeds: Interfaces, Precision & Update Parameters
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                Chainlink Data Feeds provide aggregated prices directly through Solidity smart contracts. Rather than communicating with multiple off-chain APIs, your contract simply reads from an on-chain feed address.
              </p>

              {/* AggregatorV3Interface */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-neutral-900 font-mono">6.3 The AggregatorV3Interface</h3>
                <p>
                  Solidity developers interact with Chainlink price feeds using the standard <code>AggregatorV3Interface</code>:
                </p>
                <div className="overflow-x-auto rounded-xl border border-neutral-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                      <tr>
                        <th className="p-3">Function Signature</th>
                        <th className="p-3">Return Types</th>
                        <th className="p-3">Operational Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900"><code>decimals()</code></td>
                        <td className="p-3"><code>uint8</code></td>
                        <td className="p-3">Returns feed decimal precision (typically 8 for USD pairs, 18 for crypto pairs)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900"><code>description()</code></td>
                        <td className="p-3"><code>string memory</code></td>
                        <td className="p-3">Human-readable description (e.g. "ETH / USD")</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900"><code>version()</code></td>
                        <td className="p-3"><code>uint256</code></td>
                        <td className="p-3">Version identifier of the aggregator interface</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-900"><code>latestRoundData()</code></td>
                        <td className="p-3"><code>(uint80, int256, uint256, uint256, uint80)</code></td>
                        <td className="p-3 font-bold text-emerald-700">Retrieves the latest price observation, round ID, and timestamps</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Understanding latestRoundData() parameters */}
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                  Dissecting the 5 Values of latestRoundData()
                </div>
                <div className="space-y-1.5 text-neutral-300">
                  <div><code>uint80 roundId</code>: Unique monotonically incrementing identifier of the reporting round.</div>
                  <div><code>int256 answer</code>: The latest aggregated price. An integer, NOT a float.</div>
                  <div><code>uint256 startedAt</code>: Timestamp when the reporting round was initiated.</div>
                  <div><code>uint256 updatedAt</code>: Unix timestamp when the answer was computed and verified on-chain.</div>
                  <div><code>uint80 answeredInRound</code>: The round ID in which the answer was finalized.</div>
                </div>
                <div className="pt-2 border-t border-neutral-800 text-neutral-400">
                  <strong className="text-amber-400">Decimal Conversion Math:</strong>
                  <div className="mt-1">
                    Raw Answer: <code>350000000000</code> | Decimals: <code>8</code>
                  </div>
                  <div>
                    Actual Real-World Price: <code>350000000000 / 10^8 = $3,500.00 USD</code>
                  </div>
                </div>
              </div>

              {/* 6.4 Deviation vs Heartbeat */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1 font-mono text-xs">
                  <div className="font-bold text-neutral-900">Deviation Threshold</div>
                  <p className="text-neutral-600">
                    A price-movement trigger: an update is dispatched whenever the off-chain market price deviates by more than a specified percentage (e.g. 0.5%) from the last recorded on-chain value.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1 font-mono text-xs">
                  <div className="font-bold text-neutral-900">Heartbeat Threshold</div>
                  <p className="text-neutral-600">
                    A time-elapsed trigger: an update is forced if a predefined duration (e.g. 3,600 seconds / 1 hour) passes without an update, proving the feed is healthy even in sideways markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 7: Price Feed Integration */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 7</span>
              <span>•</span>
              <span>SMART CONTRACT INTEGRATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              7. Price Feed Integration: Production-Grade Solidity Implementation
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                To connect a smart contract to Chainlink, you need the official feed address on your target network, the <code>AggregatorV3Interface</code>, and defensive validation logic.
              </p>
              <div className="p-3 rounded-lg bg-neutral-100 border border-neutral-200 text-xs font-mono flex items-center justify-between">
                <span>Ethereum Sepolia Testnet ETH / USD Feed Address:</span>
                <code className="text-amber-800 font-bold">0x694AA1769357215DE4FAC081bf1f309aDC325306</code>
              </div>

              {/* PriceFeedConsumer.sol Code */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-neutral-900 font-mono">7.2 Complete Code: PriceFeedConsumer.sol</h3>
                  <span className="text-xs font-mono text-neutral-500">Solidity ^0.8.20</span>
                </div>
                <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                  <pre className="leading-relaxed">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title AggregatorV3Interface
 * @notice Minimal interface for Chainlink Price Feeds
 */
interface AggregatorV3Interface {
    function decimals() external view returns (uint8);
    function latestRoundData() external view returns (
        uint80 roundId,
        int256 answer,
        uint256 startedAt,
        uint256 updatedAt,
        uint80 answeredInRound
    );
}

/**
 * @title PriceFeedConsumer
 * @notice Production-grade Chainlink Data Feed consumer with freshness and sanity validation
 */
contract PriceFeedConsumer {
    AggregatorV3Interface public immutable priceFeed;
    uint256 public immutable maxPriceAge; // Maximum acceptable age in seconds

    event PriceQueried(int256 price, uint8 decimals, uint256 timestamp);

    error InvalidFeedAddress();
    error InvalidMaxAge();
    error InvalidPrice(int256 price);
    error NoPriceAvailable();
    error FutureTimestamp(uint256 timestamp, uint256 blockTimestamp);
    error StalePrice(uint256 age, uint256 maxAllowedAge);
    error RoundIncomplete(uint80 roundId, uint80 answeredInRound);

    constructor(address feedAddress, uint256 maxAge) {
        if (feedAddress == address(0)) revert InvalidFeedAddress();
        if (maxAge == 0) revert InvalidMaxAge();
        priceFeed = AggregatorV3Interface(feedAddress);
        maxPriceAge = maxAge;
    }

    /**
     * @notice Read and rigorously validate the latest Chainlink price
     * @return price The validated price answer
     * @return priceDecimals The decimal precision of the feed
     * @return updatedAt The timestamp when the feed was updated
     */
    function getLatestPrice() public view returns (
        int256 price,
        uint8 priceDecimals,
        uint256 updatedAt
    ) {
        (
            uint80 roundId,
            int256 answer,
            ,
            uint256 timestamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();

        // 1. Positive price validation
        if (answer <= 0) revert InvalidPrice(answer);

        // 2. Initialized timestamp validation
        if (timestamp == 0) revert NoPriceAvailable();

        // 3. Reject future-dated timestamps
        if (timestamp > block.timestamp) revert FutureTimestamp(timestamp, block.timestamp);

        // 4. Data freshness check
        if (block.timestamp - timestamp > maxPriceAge) {
            revert StalePrice(block.timestamp - timestamp, maxPriceAge);
        }

        // 5. Verify round completeness
        if (answeredInRound < roundId) {
            revert RoundIncomplete(roundId, answeredInRound);
        }

        return (answer, priceFeed.decimals(), timestamp);
    }

    /**
     * @notice Convert an ETH amount in wei into USD retaining feed decimals
     * @param ethAmountWei Amount of ETH expressed in wei (10^18)
     * @return usdValue The calculated USD value
     * @return usdDecimals The decimal precision of the returned USD value
     */
    function getEthValueInUsd(uint256 ethAmountWei) external view returns (
        uint256 usdValue,
        uint8 usdDecimals
    ) {
        (int256 rawPrice, uint8 decimalsValue, ) = getLatestPrice();
        // USD_raw = (ETH_wei * Price_raw) / 1e18
        usdValue = (ethAmountWei * uint256(rawPrice)) / 1e18;
        usdDecimals = decimalsValue;
    }
}`}
                  </pre>
                </div>
              </div>

              {/* 7.3 Detailed Step-by-Step Breakdown */}
              <div className="space-y-3 pt-2">
                <h4 className="text-base font-bold text-neutral-900 font-mono">7.3 Seven Critical Security Steps Breakdown</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                    <strong className="text-neutral-900">Step 1: Interface Definition</strong>
                    <div className="text-neutral-600">Eliminates external npm package dependencies, making the contract self-contained and portable.</div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                    <strong className="text-neutral-900">Step 2: Immutable Proxy Binding</strong>
                    <div className="text-neutral-600">Binds to the verified proxy address in the constructor, preventing unauthorized address hijacking.</div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                    <strong className="text-neutral-900">Step 3: Answer Positivity Check</strong>
                    <div className="text-neutral-600">Rejects non-positive prices: <code>answer &le; 0</code> prevents catastrophic arithmetic overflows or underflows.</div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                    <strong className="text-neutral-900">Step 4: Freshness Enforcement</strong>
                    <div className="text-neutral-600">Asserts <code>block.timestamp - timestamp &le; maxPriceAge</code> to block stale data attacks during network freeze.</div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                    <strong className="text-neutral-900">Step 5: Round Integrity Assertion</strong>
                    <div className="text-neutral-600">Checks <code>answeredInRound &ge; roundId</code>, verifying the price was computed during the active round.</div>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                    <strong className="text-neutral-900">Step 6: Dynamic Decimal Query</strong>
                    <div className="text-neutral-600">Queries <code>decimals()</code> directly rather than hardcoding 8, supporting any currency pair safely.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 8: Decentralized Oracle Networks & OCR */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 8</span>
              <span>•</span>
              <span>OFFCHAIN REPORTING (OCR)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              8. Decentralized Oracle Networks & Offchain Reporting (OCR)
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                In early Chainlink v1 architecture, each oracle node independently broadcasted an on-chain Ethereum transaction with its price observation. In a feed with 31 nodes, every round consumed 31 full L1 transactions, creating severe gas costs and network congestion.
              </p>
              <p>
                <strong>Offchain Reporting (OCR)</strong> shifted consensus off-chain. Nodes communicate peer-to-peer, sort observations, compute the median, and generate threshold signatures off-chain, submitting a single authenticated transaction on-chain:
              </p>
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                  The 6-Step OCR Consensus Workflow
                </div>
                <div className="space-y-1.5 text-neutral-300">
                  <div>1. Nodes independently fetch external data via encrypted HTTPS connections.</div>
                  <div>2. Nodes broadcast signed observations to a designated round leader via libp2p.</div>
                  <div>3. The round leader compiles observations and calculates the median value.</div>
                  <div>4. Leader returns the aggregate report to all nodes for independent cryptographic verification.</div>
                  <div>5. Nodes verify the median and sign the report using threshold cryptography.</div>
                  <div>6. A designated transmitter node submits the single aggregated report to L1, slashing gas by &gt;90%.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 9: Chainlink Automation Migration */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 9</span>
              <span>•</span>
              <span>AUTOMATION ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              9. Decentralized Automation & The CRE Migration Roadmap
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                Smart contracts are fundamentally passive: they cannot self-execute on a schedule or automatically trigger when a condition is met. A transaction must be submitted to the network.
              </p>
              <p>
                Historically, protocols relied on <strong>Chainlink Automation</strong> (formerly Keepers) using the <code>checkUpkeep()</code> and <code>performUpkeep()</code> two-phase pattern:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                <pre className="leading-relaxed">
{`function checkUpkeep(bytes calldata) external view returns (bool upkeepNeeded, bytes memory performData) {
    upkeepNeeded = block.timestamp >= lastExecution + 1 hours;
    performData = "";
}

function performUpkeep(bytes calldata) external {
    require(block.timestamp >= lastExecution + 1 hours, "Not ready");
    lastExecution = block.timestamp;
    // Execute automated state transition (e.g. compound yield, harvest, liquidate)
}`}
                </pre>
              </div>

              {/* Migration Alert */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 space-y-2">
                <div className="font-bold font-mono text-sm uppercase flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-600"></span>
                  <span>Mandatory Version Migration Notice: Sunset of Automation v1.x & v2.1</span>
                </div>
                <p className="text-xs font-mono leading-relaxed">
                  As of late 2026, Chainlink's official documentation marks Automation v1.x (sunset June 30, 2026) and Automation v2.1 (sunset July 31, 2026) as deprecated. Developers must build modern automated workflows using <strong>Chainlink Runtime Environment (CRE)</strong> triggers rather than initiating legacy Automation interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Part 10 & 11: Chainlink VRF v2.5 */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PARTS 10 & 11</span>
              <span>•</span>
              <span>VERIFIABLE RANDOMNESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              10 & 11. Chainlink VRF v2.5: Cryptographic Randomness & Mystery Boxes
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">10.1 Insecurity of On-Chain Pseudo-Randomness</h3>
              <p>
                Developers often attempt to generate random numbers inside Solidity using on-chain block parameters:
              </p>
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-900 font-mono text-xs">
                <code>uint256 random = uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender)));</code>
              </div>
              <p className="text-xs text-neutral-600">
                <strong>Why this is fatal:</strong> Block builders, proof-of-stake validators, and MEV searchers can pre-calculate the resulting hash before publishing a block. If a validator loses a high-stakes roll, they can simply discard the block, giving them unfair control over random outcomes.
              </p>

              {/* VRF v2.5 Architecture */}
              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-2">10.4 Chainlink VRF v2.5 Architecture</h3>
              <p>
                Chainlink VRF (Verifiable Random Function) generates a random value off-chain along with an elliptic curve cryptographic proof. The consuming contract receives the random word only after <code>VRFCoordinatorV2_5</code> mathematically verifies the proof on-chain:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Subscription Method</div>
                  <div className="text-neutral-600">Create a centralized subscription account, fund it with LINK or native gas tokens, and authorize multiple consumer dapps to draw gas automatically.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Direct Funding Method</div>
                  <div className="text-neutral-600">The consumer contract itself holds tokens and pays the exact verification fee directly in the randomness request transaction.</div>
                </div>
              </div>

              {/* NFT Mystery Box Example */}
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                  11.2 NFT Mystery Box Weighted Probability Mapping
                </div>
                <pre className="text-neutral-300 overflow-x-auto leading-relaxed">
{`// Map a 256-bit random word to 4 weighted item categories:
uint256 rewardRoll = randomWord % 100;

if (rewardRoll < 60) {
    // 00 to 59: Common (60% probability)
    mintItem(msg.sender, ItemRarity.COMMON);
} else if (rewardRoll < 85) {
    // 60 to 84: Rare (25% probability)
    mintItem(msg.sender, ItemRarity.RARE);
} else if (rewardRoll < 95) {
    // 85 to 94: Epic (10% probability)
    mintItem(msg.sender, ItemRarity.EPIC);
} else {
    // 95 to 99: Legendary (5% probability)
    mintItem(msg.sender, ItemRarity.LEGENDARY);
}`}
                </pre>
                <div className="text-neutral-400 text-[11px]">
                  <strong>Security Rule:</strong> Never allow users to cancel and recreate requests until they get a favorable outcome. Record random outcomes in internal contract state and execute token minting in a separate user claim call.
                </div>
              </div>
            </div>
          </div>

          {/* Part 12: Chainlink Runtime Environment (CRE) */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 12</span>
              <span>•</span>
              <span>OFF-CHAIN COMPUTATION & CRE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              12. Chainlink Runtime Environment (CRE): Modern Decentralized Workflows
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                <strong>Chainlink Runtime Environment (CRE)</strong> is the modern execution standard for decentralized off-chain computation, superseding legacy Chainlink Functions (sunsetted mid-2026).
              </p>
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">CRE Workflow Architecture</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                    <strong className="text-neutral-900">1. Trigger:</strong> Cron schedule, HTTP webhook, or on-chain smart contract event.
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                    <strong className="text-neutral-900">2. HTTP Capability:</strong> Fetches external REST APIs, pricing books, or weather logs.
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                    <strong className="text-neutral-900">3. BFT Consensus:</strong> Independent nodes execute TypeScript/Go code and validate consensus.
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                    <strong className="text-neutral-900">4. Signed Report:</strong> Emits an authenticated cryptographic report written to L1/L2 consumer contracts.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 13 & 14: Oracle Aggregation & Data Freshness */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PARTS 13 & 14</span>
              <span>•</span>
              <span>AGGREGATION & FRESHNESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              13 & 14. Oracle Aggregation Mathematics & Freshness Validation
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">13.2 Median vs. Mean Aggregation Formulas</h3>
              <p>
                Consider 5 oracle nodes reporting ETH/USD prices where one node reports an extreme manipulated outlier:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs space-y-2">
                <div>Reported Observations: <code>[$3,000, $3,002, $3,005, $3,500, $4,000]</code></div>
                <div className="pt-1 text-purple-300 font-bold">
                  Median Aggregation: Middle element of sorted set = $3,005.00
                </div>
                <div className="text-red-400 font-bold">
                  Mean Aggregation: (3000 + 3002 + 3005 + 3500 + 4000) / 5 = $3,301.40 (+9.86% distortion!)
                </div>
              </div>
              <p className="text-xs text-neutral-600">
                <strong>Why Median Wins:</strong> Extreme outliers have zero mathematical pull on the median. Even if an attacker compromises 1 or 2 nodes in a 7-node network, the reported price remains strictly inside the honest majority band.
              </p>

              {/* Data Freshness */}
              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">14.2 Enforcing Data Freshness in Solidity</h3>
              <p>
                A contract must assert that the price observation was updated within its application-specific tolerance window:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs">
                <code>require(block.timestamp - updatedAt &le; maxPriceAge, "Price data is stale");</code>
              </div>
              <div className="overflow-x-auto rounded-xl border border-neutral-200 pt-2">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Application Category</th>
                      <th className="p-3">Freshness Tolerance (maxPriceAge)</th>
                      <th className="p-3">Rationale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Perpetuals & Derivatives</td>
                      <td className="p-3 font-bold text-red-700">Sub-second to 15 seconds</td>
                      <td className="p-3">Requires Data Streams to prevent high-frequency frontrunning</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">DeFi Money Markets (Lending)</td>
                      <td className="p-3 font-bold text-amber-700">30 minutes to 1 hour</td>
                      <td className="p-3">Matches feed heartbeat with buffer for network congestion</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Stablecoin Reserve Checks</td>
                      <td className="p-3 font-bold text-emerald-700">24 hours</td>
                      <td className="p-3">Custodian bank attestations update once per business day</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Real Estate / RWA Valuation</td>
                      <td className="p-3 font-bold text-neutral-800">7 to 30 days</td>
                      <td className="p-3">Physical real-world property valuations change monthly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 15, 16 & 17: Oracle Security, Attacks & Failure Scenarios */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-mono font-bold tracking-wide">
              <span>PARTS 15, 16 & 17</span>
              <span>•</span>
              <span>SECURITY & AUDITING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              15, 16 & 17. Oracle Security, Manipulation Vectors & Failure Scenarios
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              {/* 10-Point Security Checklist */}
              <h3 className="text-lg font-bold text-neutral-900 font-mono">15.6 Recommended 10-Point Oracle Security Checklist</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Security Control</th>
                      <th className="p-3">Vulnerability Mitigated</th>
                      <th className="p-3">Solidity Enforcement Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1. Positive Price Validation</td>
                      <td className="p-3">Zero or negative price feed crashes</td>
                      <td className="p-3"><code>require(answer &gt; 0, "Invalid price")</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">2. Timestamp Freshness Check</td>
                      <td className="p-3">Stale data attacks during feed downtime</td>
                      <td className="p-3"><code>require(block.timestamp - updatedAt &le; maxAge)</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">3. Future Timestamp Rejection</td>
                      <td className="p-3">Clock drift or miner timestamp manipulation</td>
                      <td className="p-3"><code>require(updatedAt &le; block.timestamp)</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">4. Round Incomplete Verification</td>
                      <td className="p-3">Carried-over stale round observations</td>
                      <td className="p-3"><code>require(answeredInRound &ge; roundId)</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">5. Dynamic Decimals Query</td>
                      <td className="p-3">Miscalculating 8 vs 18 decimal currency pairs</td>
                      <td className="p-3"><code>uint8 decimals = priceFeed.decimals()</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">6. Min/Max Price Bounds</td>
                      <td className="p-3">Flash loan surges or flash crashes to $0</td>
                      <td className="p-3"><code>require(price &ge; MIN_PRICE &amp;&amp; price &le; MAX_PRICE)</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">7. L2 Sequencer Uptime Feed</td>
                      <td className="p-3">Mass liquidations during L2 downtime</td>
                      <td className="p-3">Verify sequencer status and enforce post-restart grace period</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">8. Emergency Circuit Breaker</td>
                      <td className="p-3">Unknown zero-day oracle vulnerabilities</td>
                      <td className="p-3">Automated protocol pause when bounds or delta breached</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">9. Multi-Source Reference Check</td>
                      <td className="p-3">Isolated upstream provider corruptions</td>
                      <td className="p-3">Compare Chainlink against on-chain Uniswap V3 TWAP</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">10. Proxy Address Validation</td>
                      <td className="p-3">Accidental testnet/mainnet misconfiguration</td>
                      <td className="p-3">Verify feed address against official Chainlink registry</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 9 Failure Scenarios Table */}
              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">17. Nine Critical Oracle Failure Scenarios & Mitigations</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Failure Scenario</th>
                      <th className="p-3">System Consequence</th>
                      <th className="p-3">Recommended Engineering Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1. API Outage</td>
                      <td className="p-3">Missing external observations</td>
                      <td className="p-3">DON quorum falls back to remaining healthy providers</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">2. Oracle Node Crash</td>
                      <td className="p-3">Individual node stops reporting</td>
                      <td className="p-3">DON tolerates up to F malicious/offline nodes via BFT</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">3. Insufficient Quorum</td>
                      <td className="p-3">No new on-chain update published</td>
                      <td className="p-3">Consumer contract rejects stale values and pauses operations</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">4. Compromised Source</td>
                      <td className="p-3">Single exchange posts forged price</td>
                      <td className="p-3">Median filter rejects single-source outlier</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">5. L1 Gas Spike</td>
                      <td className="p-3">On-chain batch inclusion delayed</td>
                      <td className="p-3">Grace period on consumer freshness checks</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">6. Feed Deprecation</td>
                      <td className="p-3">Contract data permanently frozen</td>
                      <td className="p-3">Monitor Chainlink status alerts and update proxy target</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">7. Wrong Address</td>
                      <td className="p-3">Contract queries zero address or wrong asset</td>
                      <td className="p-3">Validate <code>description()</code> and <code>decimals()</code> during deploy</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">8. Schema Change</td>
                      <td className="p-3">JSON parsing adapter fails</td>
                      <td className="p-3">Robust error handling in CRE workflow pipelines</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">9. L2 Sequencer Down</td>
                      <td className="p-3">Transactions halted while prices move</td>
                      <td className="p-3">Check L2 Sequencer Uptime Feed + post-restart grace period</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 18, 19 & 20: RWAs, External APIs & Oracle Dapps */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PARTS 18, 19 & 20</span>
              <span>•</span>
              <span>RWA, CRE & DEFI PATTERNS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              18, 19 & 20. Real-World Assets (RWA), External APIs & Oracle-Powered Applications
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Real-World Assets (RWA)</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Tokenized gold (PAXG), real estate, and US Treasury bills require continuous verification of off-chain collateral reserves held in vaults. Chainlink <strong>Proof of Reserve (PoR)</strong> feeds query bank audits, preventing unbacked fractional-reserve token minting.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">External REST APIs</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Parametric flight insurance (e.g. paying out upon flight cancellation) queries aviation APIs. CRE workflows execute HTTP calls across multiple nodes, achieve BFT consensus on the flight delay status, and write signed settlement reports to the insurance contract.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Prediction Markets</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Prediction markets like Polymarket resolve binary contract outcomes based on verified real-world events. Oracles eliminate subjective dispute resolution, deterministically unlocking payouts to winning participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
'''
