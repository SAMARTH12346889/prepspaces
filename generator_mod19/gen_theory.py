# -*- coding: utf-8 -*-
"""
Module 19 Theory Sections: Parts 1 to 16
Full fidelity, zero information loss.
"""

def generate_theory_sections():
    return '''
        {/* Theory Section Container */}
        <section id="theory" className="space-y-16">
          {/* Part 1: The Blockchain Scalability Problem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 1</span>
              <span>•</span>
              <span>FOUNDATIONAL BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              1. The Blockchain Scalability Problem
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Decentralized public blockchains are designed with redundant, distributed verification at their core: every full node in the network must independently execute, validate, and store every state transition. While this guarantees unprecedented Byzantine fault tolerance, censorship resistance, and trust-minimized security, it creates a fundamental physical throughput bottleneck.
            </p>

            {/* 1.1 Mathematical Derivation */}
            <div className="p-6 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs sm:text-sm space-y-4">
              <div className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                1.1 Mathematical Proof: The 115.74 TPS Adoption Threshold
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Consider a modest global adoption scenario where 1,000,000 active users execute an average of 10 transactions per day:
              </p>
              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/80 space-y-2 text-xs">
                <div>Total Daily Volume = 1,000,000 users &times; 10 tx/day = 10,000,000 tx/day</div>
                <div>Seconds in a Day = 24 &times; 60 &times; 60 = 86,400 seconds</div>
                <div className="text-amber-400 font-bold">
                  Required Minimum Throughput = 10,000,000 / 86,400 &asymp; 115.74 TPS
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Ethereum Layer 1 processes an average of <strong>12 to 15 TPS</strong> (peaking at ~30 TPS for simple ETH transfers). Consequently, Ethereum L1 cannot service even 1 million mainstream users on-chain without prohibitive congestion and runaway gas auctions.
              </p>
            </div>

            {/* 1.2 Gas Limits & Block Space */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">1.2 Gas Limits, Block Space, and the 16.67 TPS Ceiling</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Ethereum blocks are constrained by a target gas limit of <strong>15 million gas</strong> and a hard cap of <strong>30 million gas</strong> (EIP-1559 elasticity), targeted every 12-second block slot. Because every smart contract operation consumes gas reflecting CPU, memory, and disk I/O, complex DeFi transactions rapidly consume the available block space.
              </p>

              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Transaction Type</th>
                      <th className="p-3">Average Gas Consumed</th>
                      <th className="p-3">Max Txs per 30M Block</th>
                      <th className="p-3">Effective Max Throughput (12s slot)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Native ETH Transfer</td>
                      <td className="p-3">21,000 gas</td>
                      <td className="p-3">1,428 txs</td>
                      <td className="p-3 font-bold text-emerald-700">~119.0 TPS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">ERC-20 Token Transfer</td>
                      <td className="p-3">~65,000 gas</td>
                      <td className="p-3">461 txs</td>
                      <td className="p-3 font-bold text-neutral-800">~38.4 TPS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Uniswap V3 Swap</td>
                      <td className="p-3">~150,000 gas</td>
                      <td className="p-3">200 txs</td>
                      <td className="p-3 font-bold text-amber-700">~16.67 TPS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Complex DeFi Yield Deposit / Vault</td>
                      <td className="p-3">~300,000+ gas</td>
                      <td className="p-3">100 txs</td>
                      <td className="p-3 font-bold text-red-700">~8.33 TPS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.3 Scalability Trilemma */}
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-3">
              <h3 className="text-lg font-bold text-neutral-900">1.3 The Scalability Trilemma (Vitalik Buterin)</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                The Scalability Trilemma states that a decentralized ledger can achieve at most two of three vital properties: <strong>Decentralization</strong>, <strong>Security</strong>, and <strong>Scalability</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-amber-200 space-y-1">
                  <div className="font-bold text-amber-900">1. Decentralization</div>
                  <div className="text-neutral-600">Consumer hardware can run full nodes worldwide without relying on corporate cloud data centers.</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200 space-y-1">
                  <div className="font-bold text-amber-900">2. Security</div>
                  <div className="text-neutral-600">The economic and cryptographic cost to forge state transitions or reorganize the ledger approaches infinity.</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200 space-y-1">
                  <div className="font-bold text-amber-900">3. Scalability</div>
                  <div className="text-neutral-600">The network handles thousands of concurrent transactions without latency spikes or exorbitant fees.</div>
                </div>
              </div>
              <p className="text-xs text-neutral-600 italic">
                Naive scaling (raising block gas limits to 300M or reducing block intervals to 500ms) leads to rapid state bloat and prohibitive bandwidth requirements, pricing out everyday node operators and centralizing the chain into a vulnerable oligopoly.
              </p>
            </div>
          </div>

          {/* Part 2: Layer 1 vs Layer 2 */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 2</span>
              <span>•</span>
              <span>ARCHITECTURE DIVISION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              2. Layer 1 vs Layer 2: Division of Responsibilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Layer 2 scaling decouples <em>execution</em> from <em>consensus, settlement, and data availability</em>. Layer 1 acts as an immutable supreme court and data availability bulletin board, while Layer 2 acts as a high-speed execution engine.
            </p>

            {/* 9-Dimension Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Architectural Dimension</th>
                    <th className="p-3">Layer 1 (Ethereum Mainnet)</th>
                    <th className="p-3">Layer 2 (Rollup: Arbitrum, Optimism, zkSync)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. Primary Responsibility</td>
                    <td className="p-3">Consensus, Final Settlement, Data Availability, Dispute Adjudication</td>
                    <td className="p-3">High-speed Transaction Execution, State Compression, Ordering</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. Throughput (TPS)</td>
                    <td className="p-3">12 - 30 TPS</td>
                    <td className="p-3 font-bold text-emerald-700">1,500 - 4,000+ TPS (scalable horizontally)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. Finality Time</td>
                    <td className="p-3">~12.8 minutes (2 Ethereum epochs for Casper FFG finality)</td>
                    <td className="p-3">Soft: ~250ms; Hard: Upon L1 block inclusion & dispute expiry</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. Gas Fee per Swap</td>
                    <td className="p-3">$5.00 - $50.00+ (variable with L1 congestion)</td>
                    <td className="p-3 font-bold text-emerald-700">$0.005 - $0.05 (post-EIP-4844 blobs)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. Consensus Mechanism</td>
                    <td className="p-3">Proof of Stake (1M+ decentralized validators)</td>
                    <td className="p-3">Sequencer (Centralized, Shared, or Proof of Stake)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. Security Source</td>
                    <td className="p-3">Direct economic stake (~32M+ ETH staked)</td>
                    <td className="p-3 font-bold text-neutral-900">Inherited directly from Ethereum L1</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">7. State Storage Location</td>
                    <td className="p-3">Global State Trie stored by all Ethereum full nodes</td>
                    <td className="p-3">L2 Nodes store full state; L1 stores only compressed batches & roots</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">8. Worst-Case Failure Mode</td>
                    <td className="p-3">Network split or 51% PoS finality attack</td>
                    <td className="p-3">Sequencer offline; users exit unilaterally via L1 bridge contracts</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">9. Trust Model</td>
                    <td className="p-3">Trustless (honest supermajority &gt; 2/3 of validators)</td>
                    <td className="p-3 font-bold text-neutral-900">Trustless (1-of-N honest watcher assumption or Math/ZK)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-300 text-xs font-mono text-neutral-800">
              <strong className="text-amber-800">Crucial Distinction: Rollups vs. Sidechains:</strong> A true Layer 2 derives its validity and security directly from Layer 1. If every rollup operator shuts down, users can reconstruct the state from L1 calldata/blobs and force-withdraw funds. In contrast, a sidechain (e.g. Polygon PoS) has its own independent validator set; if sidechain validators collude, they can forge state and drain bridge vaults without L1 intervention.
            </div>
          </div>

          {/* Part 3: On-Chain vs Off-Chain Scaling */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 3</span>
              <span>•</span>
              <span>SCALING PARADIGMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              3. On-Chain vs. Off-Chain Scaling Paradigms
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Blockchain scaling approaches bifurcate into two distinct philosophies: modifying the base consensus protocol directly (On-Chain) versus shifting transaction execution to secondary layers while anchoring security to L1 (Off-Chain).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">3.1 On-Chain Scaling Techniques</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Execution Sharding:</strong> Partitioning the base chain into independent shards that execute smart contracts in parallel (largely abandoned by Ethereum due to cross-shard composability fragmentation).</li>
                  <li><strong>Danksharding:</strong> Upgrading L1 to serve purely as a high-capacity Data Availability layer rather than an execution engine.</li>
                  <li><strong>Block Gas Limit Adjustments:</strong> Incrementally raising gas limits as consumer hardware and network bandwidth improve.</li>
                  <li><strong>State Expiry & History Pruning (EIP-4444):</strong> Allowing nodes to prune transaction history older than 1 year, bounding disk bloat.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">3.2 Off-Chain Scaling Techniques</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>State Channels:</strong> Peer-to-peer off-chain balance exchanges with on-chain opening and closing settlement.</li>
                  <li><strong>Sidechains:</strong> Sovereign blockchains connected via two-way bridges with independent consensus rules.</li>
                  <li><strong>Optimistic Rollups:</strong> Off-chain execution with on-chain data availability and interactive fraud dispute games.</li>
                  <li><strong>Zero-Knowledge Rollups:</strong> Off-chain execution with cryptographic validity proofs verified on L1.</li>
                  <li><strong>Validiums:</strong> Off-chain execution with ZK validity proofs and off-chain data availability committees.</li>
                </ul>
              </div>
            </div>

            {/* 6-Dimension Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Comparison Metric</th>
                    <th className="p-3">On-Chain Scaling (L1 Hard Forks)</th>
                    <th className="p-3">Off-Chain Scaling (Rollups & Channels)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">L1 Protocol Modification</td>
                    <td className="p-3">Requires contentious, complex hard forks of client implementations</td>
                    <td className="p-3 font-bold text-emerald-700">Runs permissionlessly on top of L1 smart contracts</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Impact on Node Requirements</td>
                    <td className="p-3">Increases node CPU, RAM, and bandwidth requirements, threatening decentralization</td>
                    <td className="p-3 font-bold text-emerald-700">Keeps L1 node hardware requirements low and accessible</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Implementation Complexity</td>
                    <td className="p-3">Multi-year coordination across consensus and client development teams</td>
                    <td className="p-3">Rapid iteration, modular upgrades, and competitive market experimentation</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Security Inheritance</td>
                    <td className="p-3">Direct base protocol consensus</td>
                    <td className="p-3">Fully inherited (Rollups) or cryptoeconomically bounded (Channels)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Throughput Potential</td>
                    <td className="p-3">Modest gains (2x - 5x) before node centralization</td>
                    <td className="p-3 font-bold text-emerald-700">Orders of magnitude (100x - 1,000x+) via horizontal rollups</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Composability</td>
                    <td className="p-3">Atomic synchronous composability within L1</td>
                    <td className="p-3">Asynchronous cross-L2 messaging; atomic within single rollup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Part 4: State Channels */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 4</span>
              <span>•</span>
              <span>PEER-TO-PEER CHANNELS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              4. State Channels: Architecture, Mechanics & Limitations
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              State Channels represent an early off-chain scaling primitive where participants lock collateral on Layer 1 and exchange signed state transitions off-chain at zero cost, returning to L1 only to open, close, or dispute the state.
            </p>

            {/* 5-Step Lifecycle */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 1</span>
                <div className="font-bold text-neutral-900">Escrow Deposit</div>
                <div className="text-neutral-600 text-[11px]">Alice & Bob fund an on-chain 2-of-2 multisig contract with collateral.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 2</span>
                <div className="font-bold text-neutral-900">Off-Chain Signing</div>
                <div className="text-neutral-600 text-[11px]">Parties exchange signed state updates with incrementing nonces peer-to-peer.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 3</span>
                <div className="font-bold text-neutral-900">Closure Request</div>
                <div className="text-neutral-600 text-[11px]">Either party submits the latest signed state to the on-chain settlement contract.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 4</span>
                <div className="font-bold text-neutral-900">Dispute Window</div>
                <div className="text-neutral-600 text-[11px]">A dispute window allows the counterparty to present a higher-nonce signed state.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 5</span>
                <div className="font-bold text-neutral-900">Final Settlement</div>
                <div className="text-neutral-600 text-[11px]">Contract disburses exact finalized balances to Alice and Bob on L1.</div>
              </div>
            </div>

            {/* Worked Example */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                4.2 Worked Example: Alice & Bob Settlement
              </div>
              <p className="text-neutral-300">
                Alice and Bob deposit 5 ETH each (total 10 ETH locked in contract). They execute 3 off-chain transactions:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 space-y-1 text-neutral-200">
                <div>State 0 (Initial): Alice = 5 ETH, Bob = 5 ETH | Nonce = 0</div>
                <div>State 1: Alice pays Bob 1 ETH &rarr; Alice = 4 ETH, Bob = 6 ETH | Nonce = 1</div>
                <div>State 2: Bob pays Alice 2 ETH &rarr; Alice = 6 ETH, Bob = 4 ETH | Nonce = 2</div>
                <div>State 3: Alice pays Bob 3 ETH &rarr; Alice = 3 ETH, Bob = 7 ETH | Nonce = 3</div>
              </div>
              <p className="text-neutral-300">
                If Alice dishonestly attempts to submit <strong>State 2</strong> (where she had 6 ETH instead of 3 ETH), Bob submits <strong>State 3</strong> with Nonce = 3 during the dispute period. Because <code>Nonce 3 &gt; Nonce 2</code>, the contract enforces State 3 and can confiscate Alice's deposit as penalty.
              </p>
            </div>

            {/* State Channels vs Rollups */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Feature</th>
                    <th className="p-3">State Channels</th>
                    <th className="p-3">Rollups (Optimistic & ZK)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Participant Set</td>
                    <td className="p-3">Fixed, static 1-to-1 or N-party channels</td>
                    <td className="p-3 font-bold text-emerald-700">Open, global, multi-user shared state</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Capital Efficiency</td>
                    <td className="p-3">Poor (100% collateral locked per channel)</td>
                    <td className="p-3 font-bold text-emerald-700">High (shared liquidity pools, unified state)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Liveness Requirement</td>
                    <td className="p-3">High (users or watchtowers must stay online)</td>
                    <td className="p-3 font-bold text-neutral-900">Zero (offline users are fully protected by L1)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Smart Contract Capability</td>
                    <td className="p-3">Extremely limited (cannot run global AMMs like Uniswap)</td>
                    <td className="p-3 font-bold text-emerald-700">Full EVM Turing-complete smart contracts</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Ideal Use Case</td>
                    <td className="p-3">High-frequency micropayments, 2-player gaming</td>
                    <td className="p-3 font-bold text-emerald-700">General-purpose DeFi, NFTs, and Web3 infrastructure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Part 5: Sidechains */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 5</span>
              <span>•</span>
              <span>INDEPENDENT LEDGERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              5. Sidechains: Architecture, Checkpointing & Security Vulnerabilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              A sidechain is an independent blockchain running parallel to Ethereum, running its own consensus mechanism (typically Proof of Stake) and connected to Ethereum via a two-way custody bridge. The most famous example is <strong>Polygon PoS</strong>.
            </p>

            <div className="p-6 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-4">
              <div className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                5.2 Sidechain Architecture & Checkpoint Flow
              </div>
              <pre className="text-neutral-300 overflow-x-auto leading-relaxed">
{`+------------------------+          +-------------------------+
| Ethereum Layer 1       |          | Sidechain (e.g. Polygon)|
| - Mainnet Bridge Vault |<========>| - Bor Execution Layer   |
| - RootChainManager.sol |  2-Way   | - Heimdall PoS Consensus|
| - StateSender Contract |  Bridge  | - Independent 100 Nodes |
+------------------------+          +-------------------------+
            ^                                    |
            |========= Periodic Checkpoints =====|
                       (Signed Merkle Roots)      `}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">5.3 Advantages of Sidechains</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Instant Throughput:</strong> Produces blocks every 2 seconds with high gas limits (~7,000 TPS theoretical).</li>
                  <li><strong>Negligible Gas Costs:</strong> Fees are fractions of a cent paid in native tokens (e.g. POL/MATIC).</li>
                  <li><strong>Full EVM Compatibility:</strong> Standard Solidity contracts and Web3 tooling (MetaMask, Ethers, Viem) work unmodified.</li>
                  <li><strong>Mature Ecosystem:</strong> High liquidity, established developer tooling, and major dapp deployments.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-red-900 font-mono">5.4 Critical Security Risks</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Sovereign Security Budget:</strong> Security is bounded by the market cap of the sidechain token, NOT Ethereum's $400B economic security.</li>
                  <li><strong>51% Validator Collusion:</strong> If &gt;2/3 of Heimdall validators collude, they can forge checkpoints, sign fake withdrawal proofs, and drain the L1 bridge custody contract.</li>
                  <li><strong>Bridge Vulnerabilities:</strong> Complex cross-chain custody contracts present massive attack surfaces (over $2.5B stolen across bridge hacks).</li>
                  <li><strong>No L1 Recourse:</strong> Ethereum cannot detect or revert fraudulent transactions executed inside the sidechain.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Part 6: Rollup Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 6</span>
              <span>•</span>
              <span>ROLLUP CORE DESIGN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              6. Rollup Architecture: Execution, Compression & State Transitions
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Rollups execute transactions off-chain in a high-speed execution environment, compress the transaction inputs or state diffs, and publish the compressed batch along with state root commitments directly to Layer 1.
            </p>

            {/* 10 Components Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Rollup Component</th>
                    <th className="p-3">Location</th>
                    <th className="p-3">Role & Functionality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. L2 Sequencer</td>
                    <td className="p-3">Off-Chain</td>
                    <td className="p-3">Ingests user transactions, orders them, emits sub-second soft receipts, and batches data.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. L2 Mempool</td>
                    <td className="p-3">Off-Chain</td>
                    <td className="p-3">Private or shared pending transaction queue awaiting sequencer ordering.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. L2 Execution Environment</td>
                    <td className="p-3">Off-Chain</td>
                    <td className="p-3">High-performance VM (e.g. Nitro Geth, REVM) executing EVM opcodes and computing state diffs.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. Prover / Disputer Node</td>
                    <td className="p-3">Off-Chain</td>
                    <td className="p-3">Generates ZK validity proofs (ZK rollups) or monitors state roots to launch bisection games (Optimistic).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. L1 Inbox / Calldata Contract</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Receives sequencer transaction batches and enforces sequential ordering.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. L1 Delayed Inbox</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Allows users to force transaction inclusion if the sequencer attempts censorship.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">7. L1 Bridge Custody Vault</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Locks native ETH and ERC-20 tokens deposited by users for minting on L2.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">8. L1 State Commitment Chain (SCC)</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Records a cryptographic log of proposed L2 state roots over time.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">9. L1 Outbox Contract</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Validates Merkle proofs of L2 withdrawals after the challenge window expires.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">10. One-Step Prover / Verifier</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Executes single disputed EVM opcodes (Optimistic) or verifies Groth16/Plonk proofs (ZK).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* State Transition Formula */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                6.3 The Rollup State Transition Function
              </div>
              <p className="text-neutral-300">
                A rollup mathematically models state transitions as a deterministic state machine:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 text-amber-300 font-bold text-sm">
                S_{"{n+1}"} = F(S_n, T_n)
              </div>
              <p className="text-neutral-400 text-xs">
                Where <code>S_n</code> is the current Merkle state root, <code>T_n</code> is the batch of transactions, <code>F</code> is the state transition function (the EVM execution engine), and <code>S_{"{n+1}"}</code> is the resulting post-state root committed to Layer 1.
              </p>
            </div>

            {/* Batch Compression */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-neutral-900">6.4 Batch Compression Techniques</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Standard Ethereum transactions require ~110 bytes of raw data. Rollup batchers compress transactions down to <strong>12 to 15 bytes</strong> using four primary optimizations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">1. Address Indexing (20B &rarr; 4B)</div>
                  <div className="text-neutral-600">Replaces 20-byte account addresses with 4-byte indexes referencing an on-chain account registry.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">2. Signature Aggregation (65B &rarr; 0B amortized)</div>
                  <div className="text-neutral-600">Replaces individual 65-byte ECDSA signatures with a single BLS aggregate signature or ZK proof for the entire batch.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">3. Nonce Elimination (32B &rarr; 0B)</div>
                  <div className="text-neutral-600">Omits nonces from published data because transaction ordering in the batch implicitly defines sequential nonces.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">4. Variable-Length Encoding (LEB128)</div>
                  <div className="text-neutral-600">Encodes value amounts and gas limits into dynamic 1-4 byte payloads instead of static 32-byte words.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 7: Optimistic Rollups */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 7</span>
              <span>•</span>
              <span>OPTIMISTIC ROLLUPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              7. Optimistic Rollups: Execution, Fraud Proofs & The 7-Day Window
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Optimistic Rollups (Arbitrum, Optimism OP Mainnet, Base) operate on an optimistic paradigm: state roots published by sequencers are assumed valid by default. If a proposer submits an invalid state root, any honest validator can challenge it during a 7-day challenge window.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Components */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">7.2 Core Components of an Optimistic Rollup</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Sequencer:</strong> Accepts, executes, and batches user transactions with instant soft receipts.</li>
                  <li><strong>Proposer:</strong> Stakes an economic bond (e.g. 10-50 ETH) and publishes proposed state roots to L1.</li>
                  <li><strong>Challenger / Watcher:</strong> Re-executes transactions from L1 data; stakes a bond to dispute fraudulent proposals.</li>
                  <li><strong>Rollup Core Contract:</strong> Tracks the timeline of proposed roots and freezes withdrawals during active disputes.</li>
                  <li><strong>One-Step Prover:</strong> An on-chain EVM interpreter contract capable of re-executing a single disputed opcode instruction.</li>
                </ul>
              </div>

              {/* Dispute Mechanics */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">7.3 Interactive Bisection Algorithm</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Rather than re-executing an entire transaction on L1 (which could exceed the 30M gas block limit), Arbitrum Nitro uses an interactive bisection binary search:
                </p>
                <div className="p-3 rounded-lg bg-neutral-100 font-mono text-[11px] text-neutral-800 space-y-1">
                  <div>1. Proposer claims state after N steps is S_N.</div>
                  <div>2. Challenger agrees on Step 0, but disputes Step N.</div>
                  <div>3. Parties bisect: Proposer posts state at Step N/2.</div>
                  <div>4. Binary search repeats until range is narrowed to 1 opcode instruction.</div>
                  <div>5. L1 One-Step Prover executes that 1 opcode to slash the loser.</div>
                </div>
              </div>
            </div>

            {/* 7-Day Challenge Window */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <h3 className="text-base font-bold text-neutral-900 font-mono">7.4 Why the 7-Day Challenge Period is Mandatory</h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                The 7-day challenge period is an intentional cryptoeconomic security barrier against <strong>Censorship and L1 Congestion Attacks</strong>. If a malicious proposer submits an invalid state root stealing user funds, the attacker could attempt to censor honest challengers by spamming Ethereum L1 with maximum-gas transactions, stuffing blocks, or bribing miners/validators to ignore challenger fraud proofs. A 7-day window ensures that honest validators have ample time to break through congestion and publish their dispute transaction before the withdrawal is finalized.
              </p>
              <div className="text-xs font-mono text-amber-900 bg-white p-3 rounded-xl border border-amber-200">
                <strong>Fast Bridges (Hop, Across):</strong> Users who cannot wait 7 days use third-party liquidity providers who pay out instantly on L1 in exchange for a small fee (~0.1%), taking on the 7-day rollup withdrawal wait themselves.
              </div>
            </div>
          </div>

          {/* Part 8: Zero-Knowledge Rollups */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 8</span>
              <span>•</span>
              <span>ZK ROLLUPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              8. Zero-Knowledge Rollups: Validity Proofs & Cryptographic Finality
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Zero-Knowledge Rollups (zkSync Era, Starknet, Scroll, Linea) replace optimistic cryptoeconomic dispute games with pure mathematical cryptography. Every batch posted to Layer 1 is accompanied by a cryptographic <strong>Validity Proof</strong> (SNARK or STARK).
            </p>

            {/* Validity Proof Math */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                8.2 Cryptographic Validity Verification Math
              </div>
              <p className="text-neutral-300">
                The off-chain Prover runs an arithmetic circuit over the transactions to produce a proof:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 text-purple-300 font-bold text-sm">
                &pi; = Prove(Circuit, S_n, S_{"{n+1}"}, T_n)
              </div>
              <p className="text-neutral-300">
                The Ethereum Layer 1 verifier contract evaluates the pairing check:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 text-emerald-400 font-bold text-sm">
                Verify(VerifyingKey, &pi;, PublicInputs(S_n, S_{"{n+1}"}, Hash(T_n))) == true
              </div>
              <p className="text-neutral-400 text-xs">
                If the proof is mathematically valid, the state root is updated immediately. An invalid state transition cannot generate a valid proof under the hardness assumptions of discrete logarithms and elliptic curve pairings.
              </p>
            </div>

            {/* ZK Rollup Components Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">ZK Component</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Operational Mechanics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Sequencer</td>
                    <td className="p-3">Mempool & Ordering</td>
                    <td className="p-3">Orders transactions and produces immediate soft execution receipts.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Prover Cluster</td>
                    <td className="p-3">Proof Generation</td>
                    <td className="p-3">GPU/FPGA server clusters compiling execution traces into arithmetic polynomial circuits.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Circuit Compiler</td>
                    <td className="p-3">VM Transpilation</td>
                    <td className="p-3">Converts Solidity opcodes into R1CS (Rank-1 Constraint Systems) or AIR (Algebraic Intermediate Representation).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">L1 Verifier Contract</td>
                    <td className="p-3">On-Chain Settlement</td>
                    <td className="p-3">Solidity smart contract verifying elliptic curve pairings in ~250k-400k gas.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">L1 Rollup Manager</td>
                    <td className="p-3">State Storage</td>
                    <td className="p-3">Updates the finalized state root once the Verifier returns <code>true</code>.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">L1 Bridge Contract</td>
                    <td className="p-3">Asset Custody</td>
                    <td className="p-3">Releases withdrawn funds immediately upon proof verification with zero delay.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Part 9: Fraud Proofs vs Validity Proofs */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono font-bold tracking-wide">
              <span>PART 9</span>
              <span>•</span>
              <span>PROOF SYSTEMS COMPARED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              9. Fraud Proofs vs. Validity Proofs: Detailed Architectural Trade-Offs
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Choosing between Optimistic Rollups and ZK Rollups represents one of the most critical engineering trade-offs in blockchain systems architecture.
            </p>

            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Dimension</th>
                    <th className="p-3">Fraud Proofs (Optimistic Rollups)</th>
                    <th className="p-3">Validity Proofs (ZK Rollups)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. Security Guarantee</td>
                    <td className="p-3">Cryptoeconomic (relies on at least 1 honest validator being online and un-censored)</td>
                    <td className="p-3 font-bold text-purple-700">Mathematical (cryptographically impossible to forge invalid state)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. Withdrawal Finality Delay</td>
                    <td className="p-3">7 Days (mandatory dispute challenge window)</td>
                    <td className="p-3 font-bold text-emerald-700">~15 to 60 Minutes (as soon as prover generates proof and L1 verifies)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. Off-Chain Compute Cost</td>
                    <td className="p-3 font-bold text-emerald-700">Extremely Low (standard commodity CPU node runs Geth/Nitro)</td>
                    <td className="p-3">Very High (massive GPU/FPGA clusters running intensive polynomial arithmetic)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. L1 Verification Gas Cost</td>
                    <td className="p-3 font-bold text-emerald-700">0 gas in normal operation (only incurs gas during active dispute)</td>
                    <td className="p-3">Fixed ~250k - 450k gas per batch proof verification transaction</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. On-Chain Data Requirement</td>
                    <td className="p-3">Must publish full transaction inputs or state diffs to enable dispute replay</td>
                    <td className="p-3 font-bold text-purple-700">Only needs to publish minimal state diffs (signatures can be omitted)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. EVM Equivalence Maturity</td>
                    <td className="p-3 font-bold text-emerald-700">High (100% bytecode EVM equivalence via Nitro / OP Bedrock)</td>
                    <td className="p-3">Moderate-to-High (zkEVM Type 1-4 tradeoffs; circuit complexities)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Part 10: Data Availability & EIP-4844 */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 10</span>
              <span>•</span>
              <span>DATA AVAILABILITY & BLOBS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              10. Data Availability, Calldata Economics & EIP-4844 Blobs
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Data Availability (DA) guarantees that the transaction data necessary to reconstruct the current blockchain state is publicly available to all network participants.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">10.1 The Data Withholding Attack</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  If an operator posts a new state root to L1 but refuses to publish the transaction data (withholding it), honest nodes cannot verify the state transitions, calculate new user balances, or create withdrawal proofs. Even in ZK rollups, data withholding prevents users from determining their account balances to withdraw.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">10.3 Calldata Bottleneck (Pre-Dencun)</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Before Ethereum's Dencun hard fork, rollups posted data to L1 as <code>calldata</code>. Every non-zero byte cost <strong>16 gas</strong>, competing directly with L1 DeFi transactions. Calldata costs accounted for over <strong>85% to 95%</strong> of the total fees paid by rollup users.
                </p>
              </div>
            </div>

            {/* EIP-4844 Blob Table */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">10.4 EIP-4844 (Proto-Danksharding) Blob Architecture</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                EIP-4844 introduced <strong>Blob-Carrying Transactions</strong>. Each block can carry up to 6 blobs (128 KB each = 768 KB per block). Blobs are ephemeral: they are stored by Ethereum consensus nodes for approximately <strong>18 days</strong> (enough time for challengers to inspect and download data) and then automatically pruned from disk.
              </p>

              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">Legacy L1 Calldata</th>
                      <th className="p-3">EIP-4844 Blob Data</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">EVM Accessibility</td>
                      <td className="p-3">Accessible to smart contracts (<code>CALLDATACOPY</code>)</td>
                      <td className="p-3 font-bold text-amber-700">Inaccessible to EVM execution (only KZG commitment hash accessible via <code>BLOBHASH</code>)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Gas Market</td>
                      <td className="p-3">Shared L1 execution gas market (EIP-1559 base fee)</td>
                      <td className="p-3 font-bold text-emerald-700">Independent Blob Gas market (decoupled from DeFi congestion)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Data Retention Period</td>
                      <td className="p-3">Permanent (stored forever in Ethereum historical state)</td>
                      <td className="p-3 font-bold text-emerald-700">Ephemeral (~18 days / 4096 epochs), preventing node disk bloat</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Cost per Byte</td>
                      <td className="p-3">16 gas / non-zero byte (~$0.05 - $0.20 per tx)</td>
                      <td className="p-3 font-bold text-emerald-700">~1 blob gas / byte (&lt;$0.001 per tx)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DAS */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                10.5 Data Availability Sampling (DAS) & 2D Erasure Coding
              </div>
              <p className="text-neutral-300 leading-relaxed">
                In Full Danksharding (PeerDAS), consumer nodes verify data availability without downloading entire 16-32 MB blocks. The block is extended into a 2D matrix using <strong>Reed-Solomon Erasure Coding</strong>: any 50% of the data can mathematically reconstruct 100% of the block. Light clients query ~30 random chunks. If an attacker withholds even 1% of the original data, they must withhold over 50% of the extended matrix, giving light clients a &gt;99.999999% probability of detecting the fraud instantly.
              </p>
            </div>
          </div>

          {/* Part 11: Sequencers */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono font-bold tracking-wide">
              <span>PART 11</span>
              <span>•</span>
              <span>SEQUENCER ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              11. Sequencer Roles, Centralization Vectors & Forced Inclusion
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              The Sequencer is the operational engine of a rollup. It acts as the gateway for user transactions, providing instant responsiveness while batching data for L1 submission.
            </p>

            {/* 7 Responsibilities */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900">11.1 The 7 Core Responsibilities of a Sequencer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">1. Mempool Ingestion:</strong> Collects transactions from user wallets via JSON-RPC.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">2. Deterministic Ordering:</strong> Orders transactions (e.g. FCFS or priority auction).
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">3. Soft Execution:</strong> Executes transactions in memory and returns sub-second soft receipts.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">4. Batch Compression:</strong> Compresses transaction calldata using Brotli/zlib.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">5. L1 Posting:</strong> Submits blob/calldata batches to the L1 Inbox contract.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">6. State Root Commitment:</strong> Proposes updated state roots to the L1 SCC contract.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 sm:col-span-2 md:col-span-1">
                  <strong className="text-neutral-900">7. Bridge Relay:</strong> Coordinates cross-chain message execution between L1 and L2.
                </div>
              </div>
            </div>

            {/* Centralization Risks & Forced Inclusion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-red-900 font-mono">11.3 Centralization Risks of Single Sequencers</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Single Point of Failure:</strong> If the sequencer server crashes or experiences DDoS, L2 transaction execution halts temporarily.</li>
                  <li><strong>MEV Exploitation:</strong> The sequencer can frontrun, sandwich, or censor arbitrage trades with zero competition.</li>
                  <li><strong>Targeted Censorship:</strong> A centralized sequencer can refuse to include transactions from specific user addresses.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-emerald-900 font-mono">11.5 Censorship Defense: L1 Forced Inclusion</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  To preserve censorship resistance, production rollups implement an L1 <strong>Delayed Inbox</strong> or <code>forceInclusion</code> mechanism.
                </p>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-mono text-[11px] space-y-1">
                  <div>1. User calls <code>DelayedInbox.sendL1ToL2Message()</code> directly on Ethereum L1.</div>
                  <div>2. Sequencer is legally mandated to include it within a grace period (e.g. 24 hours).</div>
                  <div>3. If sequencer refuses, user calls <code>forceInclusion()</code> on L1, which automatically appends the transaction to the canonical rollup chain, bypassing the sequencer completely!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 12: Rollup Transaction Lifecycle */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 12</span>
              <span>•</span>
              <span>END-TO-END FLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              12. Complete 9-Step Rollup Transaction Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Trace the complete journey of a transaction from the moment a user signs it in their wallet until it achieves immutable Layer 1 cryptographic settlement.
            </p>

            <div className="space-y-3">
              {[
                { step: "1", title: "User Signature & RPC Dispatch", desc: "User signs transaction with private key; wallet dispatches it to the L2 Sequencer JSON-RPC endpoint." },
                { step: "2", title: "Sequencer Ingestion & Validation", desc: "Sequencer verifies ECDSA signature, checks account balance and nonce, and assigns a strict execution sequence number." },
                { step: "3", title: "Soft Execution & Immediate Receipt", desc: "Sequencer executes the transaction in memory, updates local state trie, and emits a sub-second soft receipt (~250ms)." },
                { step: "4", title: "Batch Compression & Aggregation", desc: "Sequencer aggregates hundreds or thousands of transactions, compresses data using Brotli/address indexing, and prepares an L1 blob." },
                { step: "5", title: "Posting to Layer 1 (Data Availability)", desc: "Sequencer publishes the compressed batch to Ethereum L1 via an EIP-4844 blob-carrying transaction to the L1 Inbox contract." },
                { step: "6", title: "State Root Commitment", desc: "Proposer computes the resulting post-state root S_{n+1} and submits it with a staked bond to the L1 State Commitment Chain (SCC)." },
                { step: "7", title: "Dispute / Verification Phase", desc: "Optimistic: 7-day challenge window begins; watchers re-execute to detect fraud. ZK: Prover compiles validity proof & submits to L1 Verifier." },
                { step: "8", title: "Hard Consensus Finality", desc: "Ethereum L1 finalizes the block containing the batch via Casper FFG (2 epochs / ~12.8 mins). Rollup state becomes immutable." },
                { step: "9", title: "L1 Withdrawal Execution (Outbox)", desc: "If the transaction was an L1 withdrawal, user submits a Merkle inclusion proof to the L1 Outbox contract to release locked funds." }
              ].map((item) => (
                <div key={item.step} className="p-3.5 rounded-xl bg-white border border-neutral-200 flex items-start gap-4 text-xs font-mono">
                  <div className="w-7 h-7 rounded-lg bg-amber-600 text-white font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <strong className="text-neutral-900 text-sm">{item.title}</strong>
                    <p className="text-neutral-600 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part 13: Ethereum L2 Ecosystem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 13</span>
              <span>•</span>
              <span>ECOSYSTEM LANDSCAPE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              13. The Ethereum Layer 2 Ecosystem: Arbitrum, Optimism, Polygon & zkSync
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Explore the four dominant Layer 2 protocol frameworks shaping Ethereum scaling today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Arbitrum */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">13.1 Arbitrum (Offchain Labs)</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Built on the <strong>Nitro</strong> tech stack (compiling Geth inside WebAssembly). Nitro executes EVM natively and compiles to WASM for interactive bisection fraud proofs.
                </p>
                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono space-y-1">
                  <div><strong>Arbitrum One:</strong> Full Rollup posting all data to L1 blobs (maximum security for DeFi).</div>
                  <div><strong>Arbitrum Nova:</strong> AnyTrust chain posting data to an off-chain Data Availability Committee (DAC) for ultra-low fees (gaming, social).</div>
                  <div><strong>Arbitrum Stylus:</strong> Allows writing smart contracts in Rust, C, and C++ alongside Solidity in the same VM.</div>
                </div>
              </div>

              {/* Optimism */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">13.2 Optimism & The Superchain</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Built on the modular <strong>OP Stack</strong> (Bedrock architecture) separating Consensus (op-node) from Execution (op-geth).
                </p>
                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono space-y-1">
                  <div><strong>Superchain:</strong> A standardized, horizontally scalable network of OP Stack chains (OP Mainnet, Base, Zora, Mode, Frax) sharing unified security, bridges, and cross-chain message formats.</div>
                  <div><strong>Cannon:</strong> Fault dispute engine running MIPS inside an on-chain EVM interpreter.</div>
                </div>
              </div>

              {/* Polygon */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">13.3 Polygon 2.0 & Polygon CDK</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Transitioning from sovereign sidechain architecture into an interconnected ZK-powered rollup ecosystem.
                </p>
                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono space-y-1">
                  <div><strong>Polygon PoS:</strong> Flagship sidechain with 100+ validators and Heimdall checkpoints.</div>
                  <div><strong>Polygon CDK (Chain Development Kit):</strong> Framework to deploy modular ZK-rollups.</div>
                  <div><strong>AggLayer (Aggregation Layer):</strong> Unifies cross-chain liquidity across CDK chains via aggregated ZK proofs.</div>
                </div>
              </div>

              {/* zkSync */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">13.4 zkSync Era & The ZK Stack</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  A Type-4 zkEVM built natively with Account Abstraction and hyper-scalable recursive ZK proofs.
                </p>
                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono space-y-1">
                  <div><strong>Native Account Abstraction:</strong> Every account is a smart contract with built-in paymasters, session keys, and multi-call batching.</div>
                  <div><strong>ZK Stack:</strong> Framework for deploying interconnected sovereign "Hyperchains" settled via recursive proofs.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 14: Cross-Chain Interoperability */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 14</span>
              <span>•</span>
              <span>INTEROPERABILITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              14. Cross-Chain Interoperability & Asynchronous Message Passing
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Because distinct Layer 2 chains maintain separate state databases and virtual machines, communication between L1 and L2 is inherently <strong>asynchronous</strong>. Synchronous atomic execution across chains is impossible without shared sequencers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">L1-to-L2 Message Passing (Deposits)</div>
                <p className="text-neutral-600 leading-relaxed">
                  User invokes L1 contract &rarr; L1 Bridge records deposit and emits event &rarr; Sequencer reads L1 event &rarr; Sequencer creates a corresponding transaction on L2 (e.g. Arbitrum Retryable Ticket) &rarr; Assets minted on L2.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">L2-to-L1 Message Passing (Withdrawals)</div>
                <p className="text-neutral-600 leading-relaxed">
                  User calls L2 Bridge `burn()` &rarr; L2 appends message to Merkle tree &rarr; Batch committed to L1 &rarr; Dispute period passes (Optimistic) or proof verified (ZK) &rarr; User submits Merkle proof to L1 Outbox to unlock assets.
                </p>
              </div>
            </div>
          </div>

          {/* Part 15: Bridge Architecture & Security */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 15</span>
              <span>•</span>
              <span>BRIDGE SECURITY & INVARIANTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              15. Bridge Architecture, Security Invariants & Audit Vectors
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Cross-chain bridges are the single highest-value targets for exploits in Web3 history. Over <strong>$2.8 billion</strong> has been drained from bridges due to signature forgery, verification bypasses, and state invariant violations.
            </p>

            {/* Invariant Equation */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                15.4 The Fundamental Bridge Security Invariant
              </div>
              <p className="text-neutral-300">
                A bridge is solvent if and only if the synthetic bridged token supply never exceeds the underlying locked collateral:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 text-amber-300 font-bold text-sm">
                &sum; L2_Bridged_Token_Supply &le; &sum; L1_Locked_Custody_Assets
              </div>
              <p className="text-neutral-400 text-xs">
                Any mint event that violates this invariant causes immediate protocol bankruptcy when users attempt to bridge back to Layer 1.
              </p>
            </div>

            {/* 9 Bridge Vulnerabilities Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Vulnerability Vector</th>
                    <th className="p-3">Historical Example</th>
                    <th className="p-3">Root Cause & Architectural Mitigation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. Validator Key Compromise</td>
                    <td className="p-3">Ronin Bridge ($624M)</td>
                    <td className="p-3">5/9 multi-sig keys phished. Mitigation: Use canonical rollup proofs, not off-chain multi-sig.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. Signature Verification Bypass</td>
                    <td className="p-3">Wormhole Bridge ($326M)</td>
                    <td className="p-3">Deprecated `load_instruction_at` allowed forged signatures. Mitigation: Strict verification precompiles.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. Cross-Chain Replay Attack</td>
                    <td className="p-3">Nomad Bridge ($190M)</td>
                    <td className="p-3">Default root set to 0x00, validating all messages. Mitigation: Strict nonce tracking and domain separators.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. Invariant Breach (Fake Mint)</td>
                    <td className="p-3">BNB Chain Bridge ($586M)</td>
                    <td className="p-3">IAVL Merkle leaf forgery allowed unbacked mints. Mitigation: Enforce real-time supply invariants.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. Arbitrary Call Execution</td>
                    <td className="p-3">Poly Network ($611M)</td>
                    <td className="p-3">Relayer contract executed unverified arbitrary calldata. Mitigation: Whitelist trusted calls only.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. Unchecked Fee-on-Transfer</td>
                    <td className="p-3">Defi Bridge Drain</td>
                    <td className="p-3">Bridge recorded gross deposit instead of net received balance. Mitigation: Balance-delta checks.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">7. Delayed Challenge Tampering</td>
                    <td className="p-3">Optimistic Bridge Edge Case</td>
                    <td className="p-3">Relayers executed withdrawals before dispute window passed. Mitigation: Enforce timestamp validation.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">8. Custody Contract Upgrade Exploit</td>
                    <td className="p-3">Various Multi-Sig Hacks</td>
                    <td className="p-3">Malicious logic proxy implementation deployed. Mitigation: 7-day timelocks on proxy upgrades.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">9. Re-entrancy on Token Release</td>
                    <td className="p-3">ERC-777 Token Hook Drain</td>
                    <td className="p-3">Tokens with fallback hooks re-entered bridge withdrawal. Mitigation: OpenZeppelin `ReentrancyGuard`.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Replay Protection Struct */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                Secure Cross-Chain Message Header Struct
              </div>
              <pre className="text-neutral-300 overflow-x-auto leading-relaxed">
{`struct BridgeMessage {
    uint256 sourceChainId;      // Domain separation: prevents replay across other L2s
    uint256 targetChainId;      // Enforces intended destination execution
    address bridgeContract;     // Target custody contract address
    uint256 nonce;              // Strictly incrementing counter per user
    address sender;             // Original caller on source chain
    address recipient;          // Intended beneficiary on destination chain
    uint256 amount;             // Asset quantity transferred
    bytes32 dataHash;           // Keccak256 hash of arbitrary execution payload
}`}
              </pre>
            </div>
          </div>

          {/* Part 16: L2 Deployment & Testing */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 16</span>
              <span>•</span>
              <span>L2 EVM DIFFERENCES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              16. Smart Contract Engineering for Layer 2: EVM Incompatibilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              While production rollups offer near-total EVM equivalence, subtle opcode behavior differences can cause catastrophic smart contract bugs if not properly accounted for.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">block.number vs ArbSys.arbBlockNumber()</div>
                <p className="text-neutral-600 leading-relaxed">
                  On Arbitrum, <code>block.number</code> returns the underlying Ethereum L1 block number (updating every ~12s). However, Arbitrum generates L2 blocks every 250ms! A contract measuring duration by block counts will run 48x slower than expected. To read actual L2 blocks, query <code>ArbSys(100).arbBlockNumber()</code>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">Dual-Tier Gas Metering Model</div>
                <p className="text-neutral-600 leading-relaxed">
                  L2 transactions charge two separate gas fees: 1) L2 Execution Gas (CPU and memory consumption on the sequencer), and 2) L1 Calldata/Blob Gas (the cost to publish the transaction data to Ethereum). Contracts must never assume gas prices are static.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">block.coinbase & Mining Opcodes</div>
                <p className="text-neutral-600 leading-relaxed">
                  <code>block.coinbase</code> returns the fee collector address configured by the sequencer, NOT an Ethereum proof-of-work/stake validator. <code>DIFFICULTY</code> (or <code>PREVRANDAO</code>) returns a constant or L1-derived value, not an unbiasable source of randomness.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">PUSH0 Opcode Support</div>
                <p className="text-neutral-600 leading-relaxed">
                  Solidity 0.8.20 introduced the <code>PUSH0</code> opcode (Shanghai hard fork). While Arbitrum and Optimism support <code>PUSH0</code>, older L2 chains and certain sidechains reverted on this opcode until upgraded. Always verify target chain compiler compatibility in <code>foundry.toml</code>.
                </p>
              </div>
            </div>
          </div>
        </section>
'''
