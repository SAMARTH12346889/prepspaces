# projectx/generator_mod16/gen_lab.py
"""
Lab & Assignments generator for Module 16: Decentralized Finance (DeFi) Architecture
Includes Practical Lab 1 (AMM Engine), Practical Lab 2 (Hardhat Swap DApp), 4 Numerical Problems with Step-by-Step Derivations, and the Mini Capstone Evaluation Rubric.
"""

def generate_lab():
    return r'''
      {/* ------------------------------------------------------------- */}
      {/* TAB 3: PRACTICAL LABS & CAPSTONE PROJECTS                     */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "lab" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Engineering Projects
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Hands-on Project 1 (JS Simulator) • Project 2 (Solidity DApp) • Numerical Problems
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              DeFi Engineering Labs & Mathematical Problem Sets
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Build two comprehensive decentralized finance projects: a full-featured JavaScript/React AMM liquidity pool simulator,
              and a production-structured Hardhat token swap decentralized application utilizing OpenZeppelin contracts and EVM testnets.
              Then solve the 4 official quantitative numerical problems with step-by-step mathematical derivations.
            </p>
          </div>

          {/* PROJECT 1: Basic Liquidity Pool Simulator */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Hands-on Project 1</span>
                <h3 className="text-xl font-bold text-neutral-900 mt-1">
                  Build a Basic Liquidity Pool Simulator (JavaScript / React)
                </h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Section 20
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              In this lab, you implement the core mathematical engine of a constant-product automated market maker in pure JavaScript,
              construct an interactive React user interface, and verify that a 1 ETH swap against a 10 ETH / 20,000 USDC pool
              produces exactly 1,813.2218 USDC after accounting for a 0.3% protocol fee.
            </p>

            {/* Tech Stack Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                  <tr>
                    <th className="p-3 border-b border-neutral-200">Technology</th>
                    <th className="p-3 border-b border-neutral-200">Engineering Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">JavaScript (ES6+)</td>
                    <td className="p-3 font-mono">AMM invariant calculation logic (amm.js)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">React</td>
                    <td className="p-3">Reactive state management and pool reserve display</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Vite</td>
                    <td className="p-3">Development server and bundler</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">CSS3</td>
                    <td className="p-3">Responsive dashboard styling</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Step 1 & 2 */}
            <div className="space-y-4 pt-2">
              <h4 className="text-base font-bold text-neutral-900">Step 1 & 2 — AMM Engine Implementation (src/amm.js)</h4>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/amm.js
export function calculateSwap({
  reserveIn,
  reserveOut,
  amountIn,
  feeRate = 0.003,
}) {
  if (reserveIn <= 0 || reserveOut <= 0 || amountIn <= 0) {
    throw new Error("Invalid swap parameters");
  }

  // 1. Deduct liquidity provider fee (0.3%)
  const amountInWithFee = amountIn * (1 - feeRate);

  // 2. Solve for amountOut using constant product: (x + dx) * (y - dy) = k
  const amountOut = (reserveOut * amountInWithFee) / (reserveIn + amountInWithFee);

  // 3. Compute price metrics
  const spotPrice = reserveOut / reserveIn;
  const effectivePrice = amountOut / amountIn;
  const priceImpact = ((spotPrice - effectivePrice) / spotPrice) * 100;

  return {
    amountOut,
    spotPrice,
    effectivePrice,
    priceImpact,
  };
}

export function calculatePoolValue({ reserveA, reserveB, priceA, priceB }) {
  return reserveA * priceA + reserveB * priceB;
}

export function calculateImpermanentLoss(priceRatio) {
  if (priceRatio <= 0) {
    throw new Error("Price ratio must be positive");
  }
  return ((2 * Math.sqrt(priceRatio)) / (1 + priceRatio) - 1) * 100;
}`}
              </pre>
            </div>

            {/* Step 3: UI Implementation */}
            <div className="space-y-4 pt-2">
              <h4 className="text-base font-bold text-neutral-900">Step 3 — Simulator UI (src/App.jsx)</h4>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/App.jsx
import { useState } from "react";
import { calculateSwap } from "./amm";
import "./App.css";

export default function App() {
  const [reserveETH, setReserveETH] = useState(10);
  const [reserveUSDC, setReserveUSDC] = useState(20000);
  const [amountIn, setAmountIn] = useState(1);
  const [result, setResult] = useState(null);

  function handleSwap() {
    try {
      const swap = calculateSwap({
        reserveIn: reserveETH,
        reserveOut: reserveUSDC,
        amountIn: Number(amountIn),
        feeRate: 0.003,
      });
      setResult(swap);
      setReserveETH(reserveETH + Number(amountIn));
      setReserveUSDC(reserveUSDC - swap.amountOut);
    } catch (error) {
      alert(error.message);
    }
  }

  function resetPool() {
    setReserveETH(10);
    setReserveUSDC(20000);
    setAmountIn(1);
    setResult(null);
  }

  return (
    <div className="app">
      <h1>DeFi Liquidity Pool Simulator</h1>
      <div className="pool">
        <h2>ETH / USDC Pool</h2>
        <p>ETH Reserve: {reserveETH.toFixed(6)}</p>
        <p>USDC Reserve: {reserveUSDC.toFixed(6)}</p>
        <p>Spot Price: $ {(reserveUSDC / reserveETH).toFixed(2)}</p>
      </div>

      <div className="swap">
        <h2>Swap ETH for USDC</h2>
        <input
          type="number"
          min="0"
          value={amountIn}
          onChange={(e) => setAmountIn(e.target.value)}
        />
        <button onClick={handleSwap}>Swap</button>
        <button onClick={resetPool}>Reset Pool</button>
      </div>

      {result && (
        <div className="result">
          <h2>Swap Result</h2>
          <p>USDC Received: {result.amountOut.toFixed(6)}</p>
          <p>Effective Price: $ {result.effectivePrice.toFixed(2)}</p>
          <p>Price Impact: {result.priceImpact.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}`}
              </pre>
            </div>

            {/* Step 4 & 5: CSS & Verification */}
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs font-mono space-y-2 text-neutral-800">
              <span className="font-bold text-neutral-900 block font-sans">Lab Step 5 — Numerical Verification:</span>
              <div>Initial pool: ETH = 10, USDC = 20,000, Spot Price = $2,000, Fee = 0.3%</div>
              <div>Input: 1 ETH</div>
              <div className="text-amber-700 font-bold">
                Output Formula: AmountOut = (20,000 * 1 * 0.997) / (10 + 1 * 0.997) = 19,940 / 10.997 ≈ 1,813.2218 USDC
              </div>
              <div className="text-green-700 font-bold">Verification: Exact match to AMM model!</div>
            </div>
          </div>

          {/* PROJECT 2: Testnet Token Swap DApp */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Hands-on Project 2</span>
                <h3 className="text-xl font-bold text-neutral-900 mt-1">
                  Build a Testnet Token Swap DApp (Hardhat + Solidity)
                </h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Section 21
              </span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Develop, test, and deploy an automated token exchange protocol on the Sepolia testnet.
              Students deploy two ERC-20 tokens (<code className="font-mono text-xs">TokenA.sol</code> and <code className="font-mono text-xs">TokenB.sol</code>),
              implement a constant product liquidity pool smart contract (<code className="font-mono text-xs">LiquidityPool.sol</code>),
              and integrate with MetaMask using Ethers.js / Viem.
            </p>

            {/* Architecture Flow */}
            <div className="p-4 bg-neutral-900 rounded-xl text-neutral-200 font-mono text-xs space-y-2">
              <div className="text-amber-400 font-bold uppercase text-[11px]">System Architecture Flow</div>
              <pre className="overflow-x-auto text-[11px] leading-relaxed text-neutral-300">
{`React Frontend ──▶ MetaMask Wallet ──▶ Ethers.js / Viem
                                                │
                                                ▼
                                    Sepolia Testnet Blockchain
                                    ├── TokenA Contract (ERC-20)
                                    ├── TokenB Contract (ERC-20)
                                    └── LiquidityPool Contract
                                         ├── addLiquidity()
                                         └── swapAForB(amountIn, minOut)`}
              </pre>
            </div>

            {/* Solidity Smart Contract: LiquidityPool.sol */}
            <div className="space-y-4 pt-2">
              <h4 className="text-base font-bold text-neutral-900">
                Core Smart Contract (contracts/LiquidityPool.sol)
              </h4>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract LiquidityPool is ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public immutable tokenA;
    IERC20 public immutable tokenB;

    uint256 public reserveA;
    uint256 public reserveB;

    uint256 public constant FEE_BPS = 30; // 0.30% fee
    uint256 public constant BPS = 10000;

    event LiquidityAdded(address indexed provider, uint256 amountA, uint256 amountB);
    event Swapped(address indexed trader, uint256 amountIn, uint256 amountOut);

    constructor(address _tokenA, address _tokenB) {
        require(_tokenA != _tokenB, "Identical token addresses");
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
    }

    function addLiquidity(uint256 amountA, uint256 amountB) external nonReentrant {
        require(amountA > 0 && amountB > 0, "Invalid liquidity amounts");

        tokenA.safeTransferFrom(msg.sender, address(this), amountA);
        tokenB.safeTransferFrom(msg.sender, address(this), amountB);

        reserveA += amountA;
        reserveB += amountB;

        emit LiquidityAdded(msg.sender, amountA, amountB);
    }

    function swapAForB(uint256 amountAIn, uint256 minAmountBOut)
        external
        nonReentrant
        returns (uint256 amountBOut)
    {
        require(amountAIn > 0, "Zero input amount");
        require(reserveA > 0 && reserveB > 0, "Insufficient pool liquidity");

        // Calculate amount in with 0.3% fee deducted
        uint256 amountAWithFee = amountAIn * (BPS - FEE_BPS);
        uint256 numerator = reserveB * amountAWithFee;
        uint256 denominator = (reserveA * BPS) + amountAWithFee;
        amountBOut = numerator / denominator;

        // Enforce slippage protection
        require(amountBOut >= minAmountBOut, "Slippage tolerance exceeded");

        // Transfer tokens safely
        tokenA.safeTransferFrom(msg.sender, address(this), amountAIn);
        tokenB.safeTransfer(msg.sender, amountBOut);

        // Update on-chain reserves
        reserveA += amountAIn;
        reserveB -= amountBOut;

        emit Swapped(msg.sender, amountAIn, amountBOut);
    }
}`}
              </pre>
            </div>

            {/* Testing Requirements 10-Case Matrix */}
            <div className="space-y-4 pt-2">
              <h4 className="text-base font-bold text-neutral-900">
                Automated Testing Requirements (10-Case Matrix)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">#</th>
                      <th className="p-3 border-b border-neutral-200">Test Case Scenario</th>
                      <th className="p-3 border-b border-neutral-200">Expected Execution Result</th>
                      <th className="p-3 border-b border-neutral-200">Validation Check</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600 font-mono">
                    <tr>
                      <td className="p-3 font-bold">1</td>
                      <td className="p-3 text-neutral-900 font-sans">Add initial valid liquidity</td>
                      <td className="p-3 text-green-700 font-bold">Transaction succeeds</td>
                      <td className="p-3">Reserves equal deposited balances</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">2</td>
                      <td className="p-3 text-neutral-900 font-sans">Add zero liquidity (0, 0)</td>
                      <td className="p-3 text-red-700 font-bold">Revert: "Invalid liquidity amounts"</td>
                      <td className="p-3">State remains unchanged</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">3</td>
                      <td className="p-3 text-neutral-900 font-sans">Swap valid amount A for B</td>
                      <td className="p-3 text-green-700 font-bold">Transaction succeeds</td>
                      <td className="p-3">Trader receives B, reserveA increases, reserveB decreases</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">4</td>
                      <td className="p-3 text-neutral-900 font-sans">Swap zero input amount</td>
                      <td className="p-3 text-red-700 font-bold">Revert: "Zero input amount"</td>
                      <td className="p-3">Gas refunded on revert</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">5</td>
                      <td className="p-3 text-neutral-900 font-sans">Swap against empty pool</td>
                      <td className="p-3 text-red-700 font-bold">Revert: "Insufficient pool liquidity"</td>
                      <td className="p-3">Division by zero prevented</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">6</td>
                      <td className="p-3 text-neutral-900 font-sans">Swap without token approval</td>
                      <td className="p-3 text-red-700 font-bold">Revert: "ERC20: insufficient allowance"</td>
                      <td className="p-3">SafeTransferFrom protection</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">7</td>
                      <td className="p-3 text-neutral-900 font-sans">Swap with excessive minAmountOut</td>
                      <td className="p-3 text-red-700 font-bold">Revert: "Slippage tolerance exceeded"</td>
                      <td className="p-3">Slippage assertion active</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">8</td>
                      <td className="p-3 text-neutral-900 font-sans">Swap with valid minAmountOut</td>
                      <td className="p-3 text-green-700 font-bold">Transaction succeeds</td>
                      <td className="p-3">Output amount &gt;= minAmountOut</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">9</td>
                      <td className="p-3 text-neutral-900 font-sans">Sequential swaps back-to-back</td>
                      <td className="p-3 text-green-700 font-bold">New output calculated dynamically</td>
                      <td className="p-3">Reserves rebalance proportionally</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">10</td>
                      <td className="p-3 text-neutral-900 font-sans">Wallet disconnected</td>
                      <td className="p-3 text-amber-700 font-bold">UI prompts wallet connection</td>
                      <td className="p-3">EIP-1193 eth_requestAccounts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Final Project Deliverables */}
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-2">
              <span className="font-bold text-neutral-900 uppercase">10 Required Final Deliverables:</span>
              <ol className="list-decimal list-inside space-y-1 text-neutral-700">
                <li><code className="font-mono">TokenA.sol</code> and <code className="font-mono">TokenB.sol</code> ERC-20 source code.</li>
                <li><code className="font-mono">LiquidityPool.sol</code> smart contract source code.</li>
                <li>Hardhat deployment script (<code className="font-mono">deploy.js</code>).</li>
                <li>Verified contract addresses on Sepolia testnet.</li>
                <li>Automated test report covering all 10 test scenarios.</li>
                <li>React + Tailwind CSS frontend application source code.</li>
                <li>End-to-end architecture diagram showing frontend, wallet, and contracts.</li>
                <li>Security analysis report documenting reentrancy, integer, and slippage mitigations.</li>
                <li>README.md with setup, testing, and reproduction instructions.</li>
                <li>Live demo video or published testnet URL.</li>
              </ol>
            </div>
          </div>

          {/* SECTION 22: Numerical Problems & Step-by-Step Mathematical Derivations */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 22</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Quantitative Numerical Problems (Step-by-Step Derivations)
              </h3>
            </div>
            <p className="text-sm text-neutral-600">
              Work through these four official academic problem sets. Click each card to reveal the full mathematical solution.
            </p>

            <div className="space-y-6">
              {NUMERICAL_PROBLEMS.map((prob) => {
                const isExpanded = openProblemId === prob.id;
                return (
                  <div key={prob.id} className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => setOpenProblemId(isExpanded ? null : prob.id)}
                      className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-neutral-50/50 transition"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                          Academic Problem Set
                        </span>
                        <h4 className="text-base font-bold text-neutral-900">{prob.title}</h4>
                        <p className="text-xs text-neutral-600 font-sans leading-relaxed">{prob.description}</p>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 shrink-0 font-bold px-2 py-1 rounded bg-neutral-100">
                        {isExpanded ? "Hide Solution ▲" : "Reveal Solution ▼"}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="p-5 border-t border-neutral-200 bg-neutral-50/60 space-y-4 font-mono text-xs">
                        <div className="space-y-1.5 text-neutral-800">
                          <strong className="text-neutral-900 font-sans block text-sm mb-1">
                            Step-by-Step Mathematical Derivation:
                          </strong>
                          {prob.solution.map((step, sIdx) => (
                            <div key={sIdx} className="p-2 bg-white rounded border border-neutral-200">
                              {step}
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-neutral-200">
                          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-2 font-sans">
                            Verified Final Answers:
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {Object.entries(prob.expectedAnswers).map(([k, v]) => (
                              <div key={k} className="p-2 bg-amber-50 border border-amber-200 rounded text-amber-900">
                                <span className="text-[10px] uppercase block text-amber-700">{k}</span>
                                <strong className="text-xs">{v}</strong>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Official Expected Answers Summary Table */}
            <div className="pt-4 border-t border-neutral-100">
              <h4 className="text-sm font-bold text-neutral-900 mb-2 font-sans">
                Official Numerical Answers Summary Table
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Problem</th>
                      <th className="p-3 border-b border-neutral-200">Key Metric</th>
                      <th className="p-3 border-b border-neutral-200">Expected Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600 font-mono">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 1 (AMM)</td>
                      <td className="p-3">Spot price / k / Fee-free output</td>
                      <td className="p-3 text-amber-700">$2,000 / k = 450,000 / 3,529.41 USDC</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 2 (Lending)</td>
                      <td className="p-3">Max Borrow / CR / Health Factor</td>
                      <td className="p-3 text-amber-700">$3,250 / 250% / HF = 2.00</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 3 (Impermanent Loss)</td>
                      <td className="p-3">Relative price ratio / IL percentage</td>
                      <td className="p-3 text-red-700 font-bold">r = 3.0x / IL = -13.40%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 4 (Interest Rate)</td>
                      <td className="p-3">Utilization / Borrowing rate / Supplier rate</td>
                      <td className="p-3 text-amber-700">U = 75% / R_b = 12.00% / R_s = 8.10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 23: Mini Capstone & Evaluation Rubric */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 23</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Mini Capstone Project & 100% Evaluation Rubric
              </h3>
            </div>
            <p className="text-sm text-neutral-600">
              Students combine all four modules (DEX, Lending, Liquidation, and Analytics) into a comprehensive
              <strong>Decentralized Financial Protocol Simulator</strong>.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                  <tr>
                    <th className="p-3 border-b border-neutral-200">Evaluation Component</th>
                    <th className="p-3 border-b border-neutral-200">Technical Scope & Deliverable</th>
                    <th className="p-3 border-b border-neutral-200 text-right">Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. AMM Implementation</td>
                    <td className="p-3">Constant product swap calculations, multi-tier fee handling, and slippage enforcement.</td>
                    <td className="p-3 text-right font-bold font-mono">20%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. Lending & Collateralization</td>
                    <td className="p-3">Overcollateralized debt accounting, utilization-based interest rate model, and health factor calculations.</td>
                    <td className="p-3 text-right font-bold font-mono">20%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. Smart Contract Implementation</td>
                    <td className="p-3">Production Solidity code with SafeERC20, ReentrancyGuard, and event emission.</td>
                    <td className="p-3 text-right font-bold font-mono">20%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. Security & Invariant Testing</td>
                    <td className="p-3">10-case automated test suite, oracle manipulation defenses, and reentrancy immunity.</td>
                    <td className="p-3 text-right font-bold font-mono">20%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. Frontend & Analytics UI</td>
                    <td className="p-3">Interactive React dashboard with pool reserves, APR/APY displays, and impermanent loss charts.</td>
                    <td className="p-3 text-right font-bold font-mono">10%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. Technical Documentation</td>
                    <td className="p-3">Architecture specification, deployment scripts, test reports, and reproduction guide.</td>
                    <td className="p-3 text-right font-bold font-mono">10%</td>
                  </tr>
                  <tr className="bg-neutral-50 font-bold text-neutral-900">
                    <td className="p-3 text-sm" colSpan={2}>Total Capstone Weight</td>
                    <td className="p-3 text-right text-sm font-mono text-amber-700">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
'''
