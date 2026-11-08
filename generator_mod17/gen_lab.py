# -*- coding: utf-8 -*-
"""
Module 17 Practical Lab, Invariant Testing, Capstone, and Numerical Problems.
Zero information loss - complete code contracts, testing matrices, and rubrics.
"""

def generate_lab_and_problems():
    return '''
      {/* ============================================================== */}
      {/* SECTION 22: PRACTICAL LAB - TOKEN EXCHANGE & LENDING MODULE    */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 22
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Practical Lab — Develop a Simplified Token Exchange with Lending and Collateral Module
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Hands-on implementation of a unified DeFi protocol combining constant-product AMM swaps with collateralized debt markets.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">22.1 Project Overview & Technology Stack</h3>
          <p>
            Students construct an end-to-end decentralized financial platform integrating a liquidity exchange with an overcollateralized lending facility.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">Technology</th><th className="p-2.5">Role in Protocol</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da] font-mono text-xs">
                <tr className="bg-white"><td className="p-2.5 font-bold text-amber-800">Solidity ^0.8.24</td><td className="p-2.5 font-sans">Smart contract development with overflow checks</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold text-amber-800">Hardhat</td><td className="p-2.5 font-sans">EVM compilation, local network testing, and deployment scripts</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold text-amber-800">OpenZeppelin Contracts</td><td className="p-2.5 font-sans">SafeERC20 and ReentrancyGuard security primitives</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold text-amber-800">Chainlink Oracles</td><td className="p-2.5 font-sans">Decentralized AggregatorV3Interface price feeds</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold text-amber-800">React + Vite</td><td className="p-2.5 font-sans">Client frontend application</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold text-amber-800">Ethers.js / Viem</td><td className="p-2.5 font-sans">Client-side contract binding and transaction dispatching</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">22.2 Architectural Flow Diagram</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`React Frontend  -->  MetaMask  -->  Ethers.js
        |
        +-----------------------------+-----------------------------+
        |                                                           |
        v                                                           v
Exchange Router                                                Lending Pool
        |                                                           |
        v                                                           v
Liquidity Pool (AMM)                                           Collateral Manager
        |                                                           |
        v                                                           v
  ERC-20 Tokens                                                Price Oracle (Chainlink)
        |                                                           |
        +-----------------------------+-----------------------------+
                                      |
                                      v
                             Sepolia Testnet`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">22.3 Directory Structure</h3>
          <pre className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`defi-protocol/
├── contracts/
│   ├── TokenA.sol
│   ├── TokenB.sol
│   ├── ExchangePool.sol
│   ├── ExchangeRouter.sol
│   ├── LendingPool.sol
│   ├── CollateralManager.sol
│   ├── LiquidationEngine.sol
│   └── PriceOracle.sol
├── scripts/
│   └── deploy.js
├── test/
│   ├── ExchangePool.test.js
│   ├── LendingPool.test.js
│   ├── CollateralManager.test.js
│   └── Liquidation.test.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── contracts/
    │   └── utils/
    └── package.json`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">22.4 Step 1 — Initialize Hardhat Project</h3>
          <pre className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`mkdir defi-protocol && cd defi-protocol
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts @chainlink/contracts
npx hardhat init`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">22.5 Step 2 — Develop the Exchange Pool (ExchangePool.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract ExchangePool is ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public immutable tokenA;
    IERC20 public immutable tokenB;

    uint256 public reserveA;
    uint256 public reserveB;

    uint256 public constant FEE = 30; // 0.30% fee
    uint256 public constant BPS = 10000;

    event Swap(address indexed user, uint256 amountIn, uint256 amountOut);
    event LiquidityAdded(address indexed user, uint256 amountA, uint256 amountB);

    constructor(address tokenAAddress, address tokenBAddress) {
        require(tokenAAddress != tokenBAddress, "Same token");
        tokenA = IERC20(tokenAAddress);
        tokenB = IERC20(tokenBAddress);
    }

    function addLiquidity(uint256 amountA, uint256 amountB) external nonReentrant {
        require(amountA > 0 && amountB > 0, "Invalid amounts");
        tokenA.safeTransferFrom(msg.sender, address(this), amountA);
        tokenB.safeTransferFrom(msg.sender, address(this), amountB);
        reserveA += amountA;
        reserveB += amountB;
        emit LiquidityAdded(msg.sender, amountA, amountB);
    }

    function getAmountOut(
        uint256 amountIn,
        uint256 reserveIn,
        uint256 reserveOut
    ) public pure returns (uint256) {
        require(amountIn > 0, "Invalid input");
        require(reserveIn > 0 && reserveOut > 0, "Insufficient liquidity");
        uint256 amountInWithFee = amountIn * (BPS - FEE);
        uint256 numerator = amountInWithFee * reserveOut;
        uint256 denominator = (reserveIn * BPS) + amountInWithFee;
        return numerator / denominator;
    }

    function swapAForB(uint256 amountIn, uint256 minAmountOut) external nonReentrant {
        uint256 amountOut = getAmountOut(amountIn, reserveA, reserveB);
        require(amountOut >= minAmountOut, "Slippage exceeded");
        tokenA.safeTransferFrom(msg.sender, address(this), amountIn);
        tokenB.safeTransfer(msg.sender, amountOut);
        reserveA += amountIn;
        reserveB -= amountOut;
        emit Swap(msg.sender, amountIn, amountOut);
    }
}`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">22.6 Step 3 — Develop the Lending Pool (LendingPool.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract LendingPool is ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public immutable lendingToken;

    mapping(address => uint256) public supplied;
    mapping(address => uint256) public borrowed;

    uint256 public totalSupplied;
    uint256 public totalBorrowed;

    constructor(address tokenAddress) {
        lendingToken = IERC20(tokenAddress);
    }

    function deposit(uint256 amount) external nonReentrant {
        require(amount > 0, "Invalid amount");
        lendingToken.safeTransferFrom(msg.sender, address(this), amount);
        supplied[msg.sender] += amount;
        totalSupplied += amount;
    }

    function borrow(uint256 amount) external nonReentrant {
        require(amount > 0, "Invalid amount");
        require(amount <= totalSupplied - totalBorrowed, "Insufficient liquidity");
        borrowed[msg.sender] += amount;
        totalBorrowed += amount;
        lendingToken.safeTransfer(msg.sender, amount);
    }

    function repay(uint256 amount) external nonReentrant {
        require(amount > 0, "Invalid amount");
        require(borrowed[msg.sender] >= amount, "Exceeds debt");
        lendingToken.safeTransferFrom(msg.sender, address(this), amount);
        borrowed[msg.sender] -= amount;
        totalBorrowed -= amount;
    }

    function availableLiquidity() external view returns (uint256) {
        return totalSupplied - totalBorrowed;
    }
}`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">22.7 Step 4 — Implement the Collateral Manager (CollateralManager.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CollateralManager {
    uint256 public constant BPS = 10000;

    mapping(address => uint256) public collateralValue;
    mapping(address => uint256) public debtValue;
    mapping(address => uint256) public liquidationThresholdBps;

    function setPosition(
        address user,
        uint256 collateral,
        uint256 debt,
        uint256 threshold
    ) external {
        require(threshold <= BPS, "Invalid threshold");
        collateralValue[user] = collateral;
        debtValue[user] = debt;
        liquidationThresholdBps[user] = threshold;
    }

    function healthFactor(address user) public view returns (uint256) {
        uint256 debt = debtValue[user];
        if (debt == 0) {
            return type(uint256).max;
        }
        uint256 adjustedCollateral = (collateralValue[user] * liquidationThresholdBps[user]) / BPS;
        return (adjustedCollateral * 1e18) / debt;
    }

    function isLiquidatable(address user) external view returns (bool) {
        return healthFactor(user) < 1e18;
    }
}`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">22.8 Step 5 — Connecting Exchange and Lending Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da] space-y-1">
              <span className="font-bold text-amber-900 uppercase">Authorized Borrowing Flow</span>
              <div>User deposits Collateral -&gt; CollateralManager</div>
              <div>Oracle valuated via Chainlink aggregator</div>
              <div>Verify HealthFactor &gt;= 1.0 (after borrow)</div>
              <div>LendingPool dispatches tokens to borrower</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da] space-y-1">
              <span className="font-bold text-rose-900 uppercase">Authorized Liquidation Flow</span>
              <div>HealthFactor &lt; 1.0 detected by liquidator bot</div>
              <div>Liquidator calls LiquidationEngine.liquidate()</div>
              <div>Repays debt in LendingPool (up to 50% close factor)</div>
              <div>Seizes collateral with 5% bonus from CollateralManager</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 23: AUTOMATED TESTING & SECURITY VALIDATION            */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 23
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Automated Testing & Security Validation Matrices
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">23.1 Exchange Testing Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">Test Case</th><th className="p-2.5">Expected Result</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Add valid liquidity</td><td className="p-2.5 text-emerald-700 font-semibold">Reserves increase and LiquidityAdded emitted</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Add zero liquidity</td><td className="p-2.5 text-rose-700 font-semibold">Revert ("Invalid amounts")</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Swap valid amount</td><td className="p-2.5 text-emerald-700 font-semibold">Correct output tokens transferred and Swap emitted</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Swap without pool liquidity</td><td className="p-2.5 text-rose-700 font-semibold">Revert ("Insufficient liquidity")</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Insufficient ERC-20 allowance</td><td className="p-2.5 text-rose-700 font-semibold">Revert via SafeERC20</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Minimum output too high (slippage)</td><td className="p-2.5 text-rose-700 font-semibold">Revert ("Slippage exceeded")</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Invalid token pair (identical tokens)</td><td className="p-2.5 text-rose-700 font-semibold">Revert ("Same token")</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Reserve invariant violation</td><td className="p-2.5 text-rose-700 font-semibold">Revert transaction</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Withdraw liquidity</td><td className="p-2.5 text-emerald-700 font-semibold">Correct proportional reserve return</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">23.2 Lending Testing Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">Test Case</th><th className="p-2.5">Expected Result</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Supply assets</td><td className="p-2.5 text-emerald-700 font-semibold">Supplied balance and totalSupplied incremented</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Borrow without collateral</td><td className="p-2.5 text-rose-700 font-semibold">Revert ("Insufficient collateral")</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Borrow within LTV</td><td className="p-2.5 text-emerald-700 font-semibold">Successful borrowing and debt recorded</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Borrow above LTV</td><td className="p-2.5 text-rose-700 font-semibold">Revert ("Exceeds borrow power")</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Repay valid debt</td><td className="p-2.5 text-emerald-700 font-semibold">Debt reduced and pool available liquidity replenished</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Repay more than debt</td><td className="p-2.5 text-rose-700 font-semibold">Revert ("Exceeds debt") or cap to debt</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Insufficient pool cash</td><td className="p-2.5 text-rose-700 font-semibold">Revert ("Insufficient liquidity")</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Health Factor &gt; 1.0</td><td className="p-2.5 text-neutral-700 font-semibold">isLiquidatable returns false</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Health Factor &lt; 1.0</td><td className="p-2.5 text-rose-700 font-semibold">isLiquidatable returns true</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 24: ADVANCED CAPSTONE & RUBRIC                         */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 24
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Advanced Capstone — DeFi Exchange and Lending Platform
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <p>
            The capstone project challenges students to integrate all DEX and lending concepts into a unified production-grade smart contract platform.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">Component</th><th className="p-2.5">Weight</th><th className="p-2.5">Evaluation Criteria</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">DEX Architecture & Router</td><td className="p-2.5 font-bold text-amber-800">20%</td><td className="p-2.5">Pair/Factory segregation, CREATE2 deployment, slippage guard, deadline bounds.</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">AMM & Liquidity Accounting</td><td className="p-2.5 font-bold text-amber-800">15%</td><td className="p-2.5">Integer-scaled constant product formula, initial 1000 wei LP burn, min-ratio minting.</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Lending & Collateral Module</td><td className="p-2.5 font-bold text-amber-800">20%</td><td className="p-2.5">Global interest index accrual, reserve configuration, asset-weighted borrowing power.</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Liquidation & Oracle Integration</td><td className="p-2.5 font-bold text-amber-800">15%</td><td className="p-2.5">Chainlink AggregatorV3Interface integration, freshness checks, close factor, bonus seizure.</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Security & Automated Testing</td><td className="p-2.5 font-bold text-amber-800">20%</td><td className="p-2.5">ReentrancyGuard, SafeERC20, CEI pattern, invariant fuzzing test suites.</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Frontend & Documentation</td><td className="p-2.5 font-bold text-amber-800">10%</td><td className="p-2.5">React wallet integration, risk dashboard, clear architecture documentation.</td></tr>
                <tr className="bg-amber-50 font-bold"><td className="p-2.5 text-amber-950">Total Capstone Grade</td><td className="p-2.5 text-amber-900 font-extrabold">100%</td><td className="p-2.5 text-amber-950">Comprehensive evaluation across full protocol development lifecycle.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 25.2: 5 NUMERICAL PROBLEMS & STEP-BY-STEP DERIVATIONS */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 25.2
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Numerical Problems & Step-by-Step Derivations
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Formal mathematical calculations for AMM swap outputs, LP token minting, Compound borrowing, Aave Health Factors, and liquidation bonuses.
          </p>
        </div>

        <div className="space-y-4">
          {numericalProblems.map((prob) => {
            const isRevealed = revealedProblems[prob.id];
            return (
              <div key={prob.id} className="bg-white rounded-xl border border-[#e7e3da] p-5 shadow-sm space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
                  <h3 className="text-sm font-bold text-neutral-900">{prob.title}</h3>
                  <button
                    onClick={() => toggleProblemReveal(prob.id)}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 self-start sm:self-auto"
                  >
                    <span>{isRevealed ? "Hide Detailed Derivation" : "Reveal Step-by-Step Solution"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isRevealed ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div className="text-xs text-neutral-700 whitespace-pre-line leading-relaxed font-mono bg-[#f6f4ee] p-3 rounded-lg border border-[#e7e3da]">
                  {prob.scenario}
                </div>

                {isRevealed && (
                  <div className="mt-3 p-4 bg-amber-50/50 rounded-xl border border-amber-200/80 space-y-3 text-xs">
                    <span className="font-bold text-amber-950 uppercase text-[11px] tracking-wide">
                      Step-by-Step Mathematical Solution:
                    </span>
                    <div className="space-y-1.5 font-mono text-neutral-800">
                      {prob.solution_steps.map((step, sIdx) => (
                        <div key={sIdx} className="bg-white/80 p-2 rounded border border-amber-200/50">
                          {step}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-amber-200">
                      <span className="font-bold text-neutral-900">Final Expected Answer:</span>
                      <span className="font-bold text-amber-900 font-mono text-sm">{prob.expected_answer}</span>
                    </div>
                    <div className="text-[11px] text-neutral-600 italic">
                      {prob.note}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Expected Answers Summary Table */}
          <div className="mt-6 bg-[#f6f4ee] p-4 rounded-xl border border-[#e7e3da]">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-3">
              Official Numerical Reference Answers Table
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-[#e7e3da] rounded-lg overflow-hidden bg-white">
                <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                  <tr><th className="p-2.5">Problem</th><th className="p-2.5">Topic</th><th className="p-2.5">Official Answer</th></tr>
                </thead>
                <tbody className="divide-y divide-[#e7e3da] font-mono">
                  <tr><td className="p-2.5 font-bold">Problem 1</td><td className="p-2.5 font-sans">Uniswap V2 AMM Swap Output (0.3% Fee)</td><td className="p-2.5 text-emerald-800 font-bold">Approximately 9,066.11 USDC</td></tr>
                  <tr><td className="p-2.5 font-bold">Problem 2</td><td className="p-2.5 font-sans">Subsequent LP Token Minting</td><td className="p-2.5 text-emerald-800 font-bold">1,000 LP tokens</td></tr>
                  <tr><td className="p-2.5 font-bold">Problem 3</td><td className="p-2.5 font-sans">Compound Collateral & Borrowing Power</td><td className="p-2.5 text-emerald-800 font-bold">$6,000 remaining borrowing power</td></tr>
                  <tr><td className="p-2.5 font-bold">Problem 4</td><td className="p-2.5 font-sans">Aave Health Factor Evaluation</td><td className="p-2.5 text-emerald-800 font-bold">Health Factor = 1.2</td></tr>
                  <tr><td className="p-2.5 font-bold">Problem 5</td><td className="p-2.5 font-sans">Liquidation Seizure with 7% Bonus</td><td className="p-2.5 text-emerald-800 font-bold">$5,350 collateral value</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    '''
