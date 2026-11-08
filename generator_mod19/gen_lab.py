# -*- coding: utf-8 -*-
"""
Module 19 Lab & Numerical Problems:
- Part 17: Practical Lab (Deploy a Smart Contract on Arbitrum Sepolia)
- Part 18: Advanced L2 Engineering Capstone (Mini Rollup Simulation)
- Part 19.B: 5 Numerical Problems with derivations & Official Answer Key
"""

def generate_lab_and_challenges():
    return '''
        {/* Hands-On Engineering Labs & Capstone */}
        <section id="lab" className="space-y-16">
          {/* Part 17: Practical Lab */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 17</span>
              <span>•</span>
              <span>PRACTICAL LAB</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              17. Practical Lab: Deploying Smart Contracts on Arbitrum Sepolia
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Step through a complete, production-grade deployment of an L2-optimized smart contract on the Arbitrum Sepolia testnet using Foundry. Learn how to configure network parameters, inspect L1-versus-L2 gas fees, and query native Arbitrum precompiles.
            </p>

            {/* Network Configuration Table */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.2 Arbitrum Sepolia Network Parameters</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Parameter</th>
                      <th className="p-3">Value</th>
                      <th className="p-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Network Name</td>
                      <td className="p-3 text-neutral-800">Arbitrum Sepolia Testnet</td>
                      <td className="p-3">Primary testnet for Arbitrum One</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chain ID</td>
                      <td className="p-3 text-amber-700 font-bold">421614</td>
                      <td className="p-3">Required for EIP-155 replay protection</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">RPC URL</td>
                      <td className="p-3 text-neutral-800"><code>https://sepolia-rollup.arbitrum.io/rpc</code></td>
                      <td className="p-3">Public JSON-RPC endpoint hosted by Offchain Labs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Block Explorer</td>
                      <td className="p-3 text-neutral-800"><code>https://sepolia.arbiscan.io/</code></td>
                      <td className="p-3">Etherscan-powered explorer with L1 gas analytics</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Currency Symbol</td>
                      <td className="p-3 text-neutral-800">ETH</td>
                      <td className="p-3">Native gas token (18 decimals)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Smart Contract Code: L2Message.sol */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-neutral-900 font-mono">17.4 Contract Implementation: src/L2Message.sol</h3>
                <span className="text-xs font-mono text-neutral-500">Solidity ^0.8.20</span>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                <pre className="leading-relaxed">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ArbSys Interface
 * @notice Precompile at address(100) on Arbitrum providing native L2 chain state
 */
interface ArbSys {
    function arbBlockNumber() external view returns (uint256);
}

/**
 * @title L2Message
 * @dev Demonstrates L2 state persistence, dual block number queries, and gas profiling
 */
contract L2Message {
    address public immutable owner;
    string public currentMessage;
    uint256 public totalUpdates;
    
    // Arbitrum native precompile address
    ArbSys constant ARB_SYS = ArbSys(address(100));

    event MessageUpdated(
        address indexed sender,
        string oldMessage,
        string newMessage,
        uint256 l1BlockNumber,
        uint256 l2BlockNumber,
        uint256 timestamp
    );

    error Unauthorized(address caller);
    error EmptyMessage();

    constructor(string memory initialMessage) {
        owner = msg.sender;
        currentMessage = initialMessage;
    }

    /**
     * @notice Updates the stored message and records both L1 and L2 block numbers
     * @param newMessage The new message string
     */
    function setMessage(string calldata newMessage) external {
        if (bytes(newMessage).length == 0) revert EmptyMessage();
        
        string memory oldMsg = currentMessage;
        currentMessage = newMessage;
        totalUpdates++;

        // Query both L1 block (block.number) and Arbitrum native L2 block (ArbSys)
        uint256 l1Block = block.number;
        uint256 l2Block = getL2BlockNumber();

        emit MessageUpdated(msg.sender, oldMsg, newMessage, l1Block, l2Block, block.timestamp);
    }

    /**
     * @notice Returns actual Arbitrum L2 block number via ArbSys precompile
     * Falls back to block.number if running in a standard local EVM test environment
     */
    function getL2BlockNumber() public view returns (uint256) {
        try ARB_SYS.arbBlockNumber() returns (uint256 l2Block) {
            return l2Block;
        } catch {
            return block.number;
        }
    }
}`}
                </pre>
              </div>
            </div>

            {/* Configuration Files */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-neutral-900 font-mono">17.6.A foundry.toml</h4>
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                  <pre className="leading-relaxed">
{`[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc_version = "0.8.20"
optimizer = true
optimizer_runs = 200

[rpc_endpoints]
arbitrum_sepolia = "\\${ARBITRUM_SEPOLIA_RPC}"`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-neutral-900 font-mono">17.6.B .env Configuration</h4>
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                  <pre className="leading-relaxed">
{`ARBITRUM_SEPOLIA_RPC="https://sepolia-rollup.arbitrum.io/rpc"
PRIVATE_KEY="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
ARBISCAN_API_KEY="YOUR_ARBISCAN_API_KEY"`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Deployment Script */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.7 Deployment Script: script/DeployL2Message.s.sol</h3>
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                <pre className="leading-relaxed">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/L2Message.sol";

contract DeployL2Message is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        L2Message l2Msg = new L2Message("Hello Arbitrum Nitro Layer 2!");
        console.log("L2Message deployed to:", address(l2Msg));
        console.log("Current L2 Block:", l2Msg.getL2BlockNumber());

        vm.stopBroadcast();
    }
}`}
                </pre>
              </div>
            </div>

            {/* CLI Commands */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.8 Foundry Deployment & Interaction Commands</h3>
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-4">
                <div>
                  <div className="text-neutral-400 mb-1"># 1. Compile Smart Contracts</div>
                  <code className="text-amber-400">forge build</code>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1"># 2. Deploy to Arbitrum Sepolia</div>
                  <code className="text-amber-400">
                    forge script script/DeployL2Message.s.sol:DeployL2Message --rpc-url arbitrum_sepolia --broadcast --verify
                  </code>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1"># 3. Read Stored Message using Cast</div>
                  <code className="text-emerald-400">
                    cast call 0xContractAddress "currentMessage()(string)" --rpc-url arbitrum_sepolia
                  </code>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1"># 4. Update Message using Cast</div>
                  <code className="text-emerald-400">
                    cast send 0xContractAddress "setMessage(string)" "Scaling Ethereum with Layer 2!" --rpc-url arbitrum_sepolia --private-key $PRIVATE_KEY
                  </code>
                </div>
              </div>
            </div>

            {/* Arbiscan Observations */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <h3 className="text-base font-bold text-neutral-900 font-mono">17.9 Six Critical Observations on Arbiscan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>1. L2 Gas Fee:</strong> Execution gas consumed on Arbitrum is priced at ~0.1 Gwei.
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>2. L1 Calldata Fee:</strong> Arbiscan displays the exact L1 calldata fee paid for posting bytes.
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>3. Block Numbers:</strong> Note the difference between "L2 Block Number" and "L1 Block Number".
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>4. Sub-Second Confirmation:</strong> Transaction status shows "Confirmed" in ~250ms.
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>5. Batch Inclusion:</strong> After ~2-5 minutes, Arbiscan links to the exact L1 Batch ID.
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>6. Verified Source:</strong> Contract source code displays decoded events and ArbSys queries.
                </div>
              </div>
            </div>
          </div>

          {/* Part 18: Advanced L2 Engineering Capstone */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 18</span>
              <span>•</span>
              <span>CAPSTONE PROJECT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              18. Advanced Capstone: Building a Mini Rollup Simulation
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Design and implement a complete modular rollup prototype. Build an off-chain sequencer, a batch compression aggregator, a state trie transition engine, and an on-chain Solidity settlement contract with an interactive dispute game.
            </p>

            {/* Architecture Directory Structure */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">18.1 Capstone Architecture & Directory Layout</h3>
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                <pre className="leading-relaxed">
{`mini-rollup-simulation/
├── contracts/
│   ├── RollupSettlement.sol       # L1 Inbox, State Commitment Chain & Vault
│   ├── DisputeGame.sol            # Interactive bisection one-step prover
│   └── interfaces/
│       └── IRollupSettlement.sol
├── sequencer/
│   ├── mempool.js                 # Transaction queuing & nonce validation
│   ├── executor.js                # State transition execution engine
│   └── batcher.js                 # Compression & L1 calldata/blob dispatcher
├── merkle/
│   ├── stateTrie.js               # Sparse Merkle Tree account balance engine
│   └── proofGenerator.js          # Merkle inclusion proof generator for exits
├── test/
│   ├── RollupSettlement.t.sol     # Foundry contract tests & dispute verification
│   └── endToEndRollup.test.js     # Full L2-to-L1 withdrawal cycle simulation
└── package.json`}
                </pre>
              </div>
            </div>

            {/* 6 Phases of Implementation */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">18.2 Six Implementation Phases</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 1: State Trie Engine</div>
                  <div className="text-neutral-600">Implement a 256-bit Sparse Merkle Tree storing account balances and compute the root hash deterministic state: <code>root = Hash(L || R)</code>.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 2: Mempool & Sequencer</div>
                  <div className="text-neutral-600">Build an off-chain Node.js sequencer accepting signed transactions, validating nonces, and returning instant soft confirmations.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 3: Batch Aggregator</div>
                  <div className="text-neutral-600">Compress batches of 50-100 transactions using address indexing and encode payloads for L1 calldata submission.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 4: L1 Settlement Contract</div>
                  <div className="text-neutral-600">Write <code>RollupSettlement.sol</code> in Solidity to accept batch commits, log state roots, and enforce bonded proposers.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 5: Interactive Dispute Engine</div>
                  <div className="text-neutral-600">Implement binary search bisection between proposer and challenger, executing the final step inside the L1 contract.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 6: Merkle Withdrawal Outbox</div>
                  <div className="text-neutral-600">Enable users to unilaterally exit funds from L1 by submitting Merkle inclusion proofs against finalized state roots.</div>
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
              19.B Five Numerical Scaling & Protocol Economics Problems
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Step-by-step mathematical problem solving for Layer 2 protocol architects. Expand each accordion to inspect full algebraic proofs, variables, and step-by-step derivations.
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
                      <td className="p-3">Rollup Batch Cost per Tx</td>
                      <td className="p-3 font-bold text-emerald-700">0.00000704 ETH (~$0.021/tx)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 2</td>
                      <td className="p-3">Rollup Max Throughput</td>
                      <td className="p-3 font-bold text-emerald-700">2,184.53 TPS (145x L1 expansion)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 3</td>
                      <td className="p-3">State Channel Net Balances</td>
                      <td className="p-3 font-bold text-emerald-700">Alice: 6 ETH, Bob: 14 ETH (&gt;94% gas saved)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 4</td>
                      <td className="p-3">Blob vs Calldata Savings</td>
                      <td className="p-3 font-bold text-emerald-700">99.79% fee reduction ($768/hr down to $1.60/hr)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 5</td>
                      <td className="p-3">Bridge Invariant Assertion</td>
                      <td className="p-3 font-bold text-red-700">Transaction Reverts (Max excess release: 80 ETH)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
'''
