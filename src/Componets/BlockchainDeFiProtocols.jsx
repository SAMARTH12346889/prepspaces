// projectx/src/Componets/BlockchainDeFiProtocols.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import ModuleNav from "./ModuleNav";
import { Link } from "react-router-dom";

// Data Constants
const CHECKLIST_ITEMS = [
  "16.1 Understand decentralized finance fundamentals and compare traditional vs DeFi execution pipelines",
  "16.2 Master core DeFi characteristics: permissionless access, transparency, programmability, non-custodial design, and composability",
  "16.3 Categorize major DeFi protocol types: DEXs, lending, borrowing, stablecoins, liquid staking, yield aggregators, derivatives, and insurance",
  "16.4 Dissect the 5-layer DeFi architecture: Settlement, Protocol Smart Contracts, Oracles, Client/Wallets, and Financial Applications",
  "16.5 Analyze smart contract state management, deposit/withdrawal mechanics, and atomic execution guarantees",
  "16.6 Understand liquidity pools and compare algorithmic AMMs against centralized limit order books (CLOB)",
  "16.7 Master the Constant Product Market Maker (CPMM) formula: x * y = k",
  "16.8 Calculate AMM spot prices, token swap outputs, effective execution prices, and price impact",
  "16.9 Apply fee-adjusted swap formulas (\u0394y = (y * \u0394x * (1 - f)) / (x + \u0394x * (1 - f))) and enforce slippage limits",
  "16.10 Evaluate AMM variants: Constant Product (Uniswap v2), Stable-Swap (Curve), and Concentrated Liquidity (Uniswap v3)",
  "16.11 Architect decentralized exchange infrastructure: Factory, Pair, Router, and Multi-Hop routing path algorithms",
  "16.12 Manage ERC-20 token allowances, approval risks, infinite approvals, and safe transfer patterns (SafeERC20)",
  "16.13 Analyze decentralized lending and overcollateralization: Loan-to-Value (LTV) and Collateralization Ratio (CR)",
  "16.14 Formulate liquidation mechanics, liquidation thresholds, Health Factor (HF < 1), and liquidator bonus incentives",
  "16.15 Implement utilization-based linear interest rate models and kinked two-slope interest rate curves",
  "16.16 Evaluate yield farming mechanics, LP token receipt accounting, and differentiate APR from compounded APY",
  "16.17 Calculate impermanent loss using the closed-form formula (IL = (2*sqrt(r)/(1+r)) - 1) across price divergence ratios",
  "16.18 Understand flash loans, single-transaction uncollateralized borrowing, 0.05% fee mechanics, and atomic reversions",
  "16.19 Implement flash loan arbitrage, collateral swaps, debt refinancing, and self-liquidations",
  "16.20 Analyze DeFi composability ('Money Legos'), multi-protocol yield pipelines, and interconnected systemic failure cascades",
  "16.21 Formulate a comprehensive DeFi risk management framework: smart contract, oracle, liquidity, market, bridge, and governance risks",
  "16.22 Design DAO governance architectures: proposal lifecycles, voting quorums, timelocks, and multi-sig emergency pauses",
  "16.23 Audit DeFi smart contracts against common vulnerabilities: reentrancy (CEI pattern), oracle manipulation, decimal precision, and MEV front-running",
  "16.24 Build and test a JavaScript/React AMM liquidity pool simulator with live reserve rebalancing and price impact calculations",
  "16.25 Develop, test, and deploy a testnet token swap DApp with TokenA, TokenB, and LiquidityPool.sol using Hardhat and OpenZeppelin",
  "16.26 Complete the Mini Capstone DeFi Protocol Simulator integrating DEX, lending, liquidation, and analytics modules"
];
const QUIZ_QUESTIONS = [
  {
    "id": "q-1",
    "question": "What is the primary difference between how a token swap is settled on a centralized exchange (CEX) versus a decentralized exchange (DEX)?",
    "options": [
      "A CEX uses off-chain internal database ledger updates; a DEX executes swaps through public blockchain smart contracts and updates on-chain reserves",
      "A CEX requires MetaMask; a DEX requires passport and KYC documents",
      "A CEX has zero trading fees; a DEX charges 50% gas tax",
      "A CEX uses the constant product formula x * y = k; a DEX matches orders with high-frequency trading matching engines"
    ],
    "ans": 0,
    "explanation": "On a centralized exchange, trades are internal database credit/debit operations controlled by a single company. On a DEX, swaps are executed trustlessly by smart contracts that read and update on-chain liquidity pool reserves."
  },
  {
    "id": "q-2",
    "question": "In a Constant Product AMM (x * y = k) with 10 ETH (x) and 20,000 USDC (y), what is the initial spot price of ETH?",
    "options": [
      "$200 / ETH",
      "$2,000 / ETH",
      "$20,000 / ETH",
      "$200,000 / ETH"
    ],
    "ans": 1,
    "explanation": "Spot price is defined as the ratio of quote reserve to base reserve: P = y / x = 20,000 / 10 = $2,000 USDC per ETH."
  },
  {
    "id": "q-3",
    "question": "In the same 10 ETH / 20,000 USDC pool (k = 200,000), if a trader deposits 1 ETH without fees, how much USDC do they receive?",
    "options": [
      "2,000.00 USDC",
      "1,818.18 USDC",
      "1,000.00 USDC",
      "18,181.82 USDC"
    ],
    "ans": 1,
    "explanation": "New ETH reserve x' = 10 + 1 = 11. Since x' * y' = k = 200,000, y' = 200,000 / 11 \u2248 18,181.82. The USDC received is y - y' = 20,000 - 18,181.82 = 1,818.18 USDC."
  },
  {
    "id": "q-4",
    "question": "What does a price impact of 9.09% mean in the previous swap (spot price $2,000, received 1,818.18 USDC)?",
    "options": [
      "The pool charged a 9.09% protocol gas fee",
      "The trader paid 9.09% in slippage to arbitrage miners",
      "The effective execution price ($1,818.18) deteriorated by 9.09% compared to the initial spot price ($2,000) due to pool reserve shifts",
      "The transaction will automatically revert because it exceeds Ethereum limits"
    ],
    "ans": 2,
    "explanation": "Price impact reflects the shifting reserve ratio caused by the size of the trade relative to total pool depth: (2000 - 1818.18) / 2000 = 9.09%."
  },
  {
    "id": "q-5",
    "question": "Why do smart contract DEX routers require users to supply a 'minAmountOut' parameter during a swap?",
    "options": [
      "To prevent the contract from running out of gas",
      "To protect the trader from excessive slippage and front-running sandwich attacks by MEV bots",
      "To calculate the maximum tax deduction for blockchain regulators",
      "To verify that the user's wallet address has sufficient ETH balance"
    ],
    "ans": 1,
    "explanation": "Enforcing `require(amountOut >= minAmountOut)` ensures that if other transactions move the pool price or an MEV bot sandwiches the trade beyond the user's slippage tolerance, the transaction reverts safely."
  },
  {
    "id": "q-6",
    "question": "Which AMM curve is specifically optimized to minimize slippage for pegged assets trading at parity (e.g. USDC/USDT/DAI)?",
    "options": [
      "Constant Product AMM (Uniswap v2)",
      "Stable-Swap Hybrid Invariant (Curve Finance)",
      "Concentrated Liquidity Range Orders (Uniswap v3)",
      "Dutch Auction AMM"
    ],
    "ans": 1,
    "explanation": "Curve's Stable-Swap invariant combines constant sum and constant product formulas to provide ultra-flat, low-slippage pricing around a 1:1 exchange rate."
  },
  {
    "id": "q-7",
    "question": "What is the primary role of a DEX Factory contract in the Uniswap v2 architecture?",
    "options": [
      "To hold the user's private keys",
      "To deploy and index unique Pair contracts for token tuples and maintain the protocol fee recipient",
      "To execute multi-hop swap math",
      "To provide decentralized price feeds from Chainlink"
    ],
    "ans": 1,
    "explanation": "The Factory contract is the core registry that creates deterministic Pair contracts (using CREATE2) for any two ERC-20 tokens and tracks all deployed pairs."
  },
  {
    "id": "q-8",
    "question": "A borrower deposits $5,000 worth of ETH collateral into a lending protocol with a maximum Loan-to-Value (LTV) of 65%. What is the maximum USDC they can borrow?",
    "options": [
      "$2,500",
      "$3,250",
      "$3,750",
      "$5,000"
    ],
    "ans": 1,
    "explanation": "Maximum Borrow = Collateral Value * LTV = $5,000 * 0.65 = $3,250 USDC."
  },
  {
    "id": "q-9",
    "question": "If a borrower has $2,000 in collateral and $1,000 in debt, what are their Collateralization Ratio (CR) and current Loan-to-Value (LTV)?",
    "options": [
      "CR = 50%, LTV = 200%",
      "CR = 200%, LTV = 50%",
      "CR = 100%, LTV = 100%",
      "CR = 150%, LTV = 75%"
    ],
    "ans": 1,
    "explanation": "CR = (Collateral / Debt) * 100 = ($2,000 / $1,000) * 100 = 200%. LTV = (Debt / Collateral) * 100 = ($1,000 / $2,000) * 100 = 50%."
  },
  {
    "id": "q-10",
    "question": "How is a borrower's Health Factor (HF) calculated, and when does a position become eligible for liquidation?",
    "options": [
      "HF = Debt / Collateral; liquidatable when HF > 1",
      "HF = (Collateral Value * Liquidation Threshold) / Debt Value; liquidatable when HF < 1.0",
      "HF = Borrow Rate * Utilization; liquidatable when HF reaches 100%",
      "HF = Gas Price / Slippage; liquidatable when gas exceeds 50 gwei"
    ],
    "ans": 1,
    "explanation": "Health Factor represents position safety. When HF < 1.0, the discounted collateral value no longer safely covers the debt threshold, allowing external liquidators to step in."
  },
  {
    "id": "q-11",
    "question": "Why do lending protocols provide a 'Liquidation Bonus' (e.g. 5% to 10%) to third-party liquidators?",
    "options": [
      "To refund the borrower's interest payments",
      "To incentivize independent liquidators to monitor the mempool, repay risky debt, and prevent protocol insolvency",
      "To pay protocol taxes to miners",
      "To reward governance token stakers"
    ],
    "ans": 1,
    "explanation": "Liquidators spend their own capital and pay high gas fees to clear bad debt. The liquidation bonus allows them to buy borrower collateral at a discount, ensuring active insolvency protection."
  },
  {
    "id": "q-12",
    "question": "In a kinked interest rate model, why does the interest rate slope increase dramatically once pool utilization exceeds the optimal threshold (e.g. 80%)?",
    "options": [
      "To bankrupt borrowers and seize their tokens",
      "To discourage new borrowing, incentivize existing borrowers to repay debt, and attract new liquidity providers to prevent bank runs",
      "Because Ethereum gas fees increase above 80%",
      "To automatically trigger DAO governance voting"
    ],
    "ans": 1,
    "explanation": "If pool utilization reaches 100%, depositors cannot withdraw their funds. The sharp kink punishes borrowing above the optimal point and attracts new lenders, protecting pool liquidity."
  },
  {
    "id": "q-13",
    "question": "What is the key mathematical difference between Annual Percentage Rate (APR) and Annual Percentage Yield (APY)?",
    "options": [
      "APR includes gas fees; APY excludes gas fees",
      "APR represents simple non-compounded interest; APY accounts for the exponential effects of periodic compounding",
      "APR applies only to stablecoins; APY applies only to volatile tokens",
      "APR is calculated on-chain; APY is calculated off-chain"
    ],
    "ans": 1,
    "explanation": "APR is linear annualized interest (Annual Rewards / Deposit). APY = (1 + r/n)^n - 1, which incorporates interest earned on reinvested rewards over time."
  },
  {
    "id": "q-14",
    "question": "An LP deposits equal values of ETH and USDC into a constant product pool. The price of ETH doubles (2x price ratio r = 2). What is the resulting Impermanent Loss?",
    "options": [
      "0.00% (No loss occurs)",
      "-5.72%",
      "-13.40%",
      "-50.00%"
    ],
    "ans": 1,
    "explanation": "IL = (2 * sqrt(2)) / (1 + 2) - 1 = (2 * 1.4142) / 3 - 1 = 2.8284 / 3 - 1 \u2248 -0.0572 = -5.72%."
  },
  {
    "id": "q-15",
    "question": "Under what condition does an LP experience net profitability despite suffering impermanent loss?",
    "options": [
      "If the price of ETH falls to zero",
      "If cumulative swap fees and farming rewards earned exceed the dollar value of the impermanent loss",
      "If the LP immediately removes liquidity during a price crash",
      "If the protocol changes from AMM to order book"
    ],
    "ans": 1,
    "explanation": "Impermanent loss is an opportunity cost relative to holding. If trading fee yields and liquidity mining incentives exceed the IL divergence, the LP generates a positive net return."
  },
  {
    "id": "q-16",
    "question": "What defines a DeFi 'Flash Loan', and why does it not require upfront collateral?",
    "options": [
      "It is a microloan under $10 designed for testing",
      "It is an uncollateralized loan that must be borrowed and fully repaid with fees within the exact same atomic transaction; otherwise the entire transaction reverts",
      "It is an uncollateralized loan issued based on off-chain credit scores",
      "It is a loan sponsored by Ethereum validators using MEV"
    ],
    "ans": 1,
    "explanation": "Due to EVM state atomicity, if the borrower does not return the borrowed principal plus the protocol fee before the end of the transaction, the execution reverts completely as if it never occurred."
  },
  {
    "id": "q-17",
    "question": "Which of the following is a legitimate and common use case for a flash loan?",
    "options": [
      "Holding borrowed funds in cold storage for 6 months",
      "Cross-DEX price arbitrage, self-liquidation, collateral swaps, and debt refinancing without upfront capital",
      "Purchasing real-world estate assets",
      "Permanently locking tokens in a staking contract"
    ],
    "ans": 1,
    "explanation": "Flash loans allow capital-intensive atomic operations\u2014such as buying an undervalued token on Uniswap and selling on Sushiswap, or swapping debt collateral in a single block."
  },
  {
    "id": "q-18",
    "question": "What does 'Composability' (Money Legos) refer to in the context of DeFi architecture?",
    "options": [
      "The ability to translate Solidity contracts into JavaScript",
      "The permissionless interoperability of smart contracts, allowing one protocol to build upon, wrap, or call contracts from another protocol seamlessly",
      "The physical hardware components powering Ethereum validator nodes",
      "The legal structure of decentralized autonomous organizations"
    ],
    "ans": 1,
    "explanation": "Composability enables protocols to interact trustlessly (e.g., depositing Lido stETH into Aave to borrow DAI, and supplying DAI to Curve to earn trading fees)."
  },
  {
    "id": "q-19",
    "question": "How does an attacker exploit an AMM spot price oracle to drain a vulnerable lending protocol?",
    "options": [
      "By cracking the private key of the router contract",
      "By executing a massive swap or flash loan to artificially inflate the AMM spot price, borrowing against overvalued collateral in the lending market, and walking away",
      "By shutting down the Ethereum network via DDoS",
      "By deploying a malicious ERC-20 token that returns false balances"
    ],
    "ans": 1,
    "explanation": "If a lending protocol reads instantaneous spot reserves (`reserveB / reserveA`), an attacker can skew reserves inside a flash loan, borrow excessive funds against manipulated pricing, and repay the loan."
  },
  {
    "id": "q-20",
    "question": "Why is the Checks-Effects-Interactions (CEI) pattern essential in DeFi smart contract design?",
    "options": [
      "It reduces the size of compiled bytecode",
      "It updates internal state balances before making external contract or ETH transfer calls, preventing recursive reentrancy attacks",
      "It ensures tokens use 18 decimals instead of 6",
      "It automatically generates OpenZeppelin unit tests"
    ],
    "ans": 1,
    "explanation": "Updating state variables (`balances[msg.sender] -= amount`) before performing external calls (`call{value: amount}`) guarantees that any malicious fallback reentry sees an updated, zeroed balance and fails."
  }
];
const INTERVIEW_QUESTIONS = [
  {
    "id": "int-1",
    "q": "How would you explain the Constant Product Market Maker (CPMM) formula and derive the output equation for a token swap?",
    "scenario": "A DeFi protocol architect is interviewing you for a DEX core engineering role.",
    "answer": "In a constant product AMM, the pool maintains two token reserves, x and y, governed by the invariant:\n\nx * y = k\n\nWhen a trader swaps an input amount \u0394x of Token A for Token B, the invariant must hold before and after the swap (assuming no fees):\n\n(x + \u0394x) * (y - \u0394y) = k\n\nSubstituting k = x * y:\n(x + \u0394x) * (y - \u0394y) = x * y\ny - \u0394y = (x * y) / (x + \u0394x)\n\u0394y = y - (x * y) / (x + \u0394x)\n\u0394y = (y * (x + \u0394x) - x * y) / (x + \u0394x)\n\u0394y = (y * \u0394x) / (x + \u0394x)\n\nWhen factoring in a protocol fee rate f (e.g. 0.3% where f = 0.003 or fee multiplier \u03b3 = 1 - f = 997/1000):\n\u0394x_effective = \u0394x * (1 - f)\n\u0394y = (y * \u0394x * (1 - f)) / (x + \u0394x * (1 - f))\n\nIn Solidity integer arithmetic with basis points (BPS = 10,000 and FEE_BPS = 30):\nuint256 amountInWithFee = amountIn * 9970;\nuint256 numerator = reserveOut * amountInWithFee;\nuint256 denominator = (reserveIn * 10000) + amountInWithFee;\nuint256 amountOut = numerator / denominator;",
    "keyTakeaways": [
      "The invariant (x + \u0394x)(y - \u0394y) = k preserves the geometric product",
      "Output \u0394y = (y * \u0394x_eff) / (x + \u0394x_eff) scales non-linearly with trade size",
      "Integer arithmetic in Solidity avoids precision loss by multiplying numerators before dividing"
    ]
  },
  {
    "id": "int-2",
    "q": "What is the mathematical difference between Price Impact and Slippage, and how does a production router enforce user protection?",
    "scenario": "A quantitative trading firm asks you to explain trade execution degradation on Uniswap.",
    "answer": "Price Impact and Slippage are related but fundamentally distinct execution metrics:\n\n1. Price Impact:\n   - The deterministic price shift caused strictly by the size of the trader's order relative to the depth of the liquidity pool reserves.\n   - Initial Spot Price P_spot = reserveOut / reserveIn.\n   - Effective Execution Price P_eff = amountOut / amountIn.\n   - Price Impact = (P_spot - P_eff) / P_spot.\n   - Price impact is completely independent of other market participants; even in an empty block with no competition, a large trade moves the curve.\n\n2. Slippage:\n   - The unexpected price movement occurring between the moment a user signs their transaction in their wallet and the moment the block is mined by a validator.\n   - Slippage is caused by other pending trades, arbitrageurs, or MEV front-runners shifting pool reserves in the mempool before the user's transaction lands.\n\nProduction Router Protection:\n- Users specify `amountOutMin = quoteAmount * (1 - slippageTolerance)`.\n- Users specify a block `deadline` timestamp (e.g., block.timestamp + 20 minutes) to prevent miners from holding transactions indefinitely in the mempool until market conditions worsen.\n- The router executes `require(amountOut >= amountOutMin, 'Router: INSUFFICIENT_OUTPUT_AMOUNT')` and `require(block.timestamp <= deadline, 'Router: EXPIRED')`.",
    "keyTakeaways": [
      "Price impact is deterministic and driven by order size relative to pool depth",
      "Slippage is dynamic and caused by concurrent mempool transactions and latency",
      "Routers enforce amountOutMin and block.timestamp deadlines to guarantee execution boundaries"
    ]
  },
  {
    "id": "int-3",
    "q": "Derive the closed-form equation for Impermanent Loss in a 50/50 Constant Product Pool and explain why it occurs.",
    "scenario": "An institutional asset manager asks you to quantify LP risk for an ETH/USDC liquidity strategy.",
    "answer": "Impermanent Loss measures the underperformance of an LP position compared to simply holding the underlying tokens outside the pool.\n\nDerivation:\nLet initial reserves be x_0, y_0 with spot price P_0 = y_0 / x_0 and product k = x_0 * y_0.\nTotal initial value V_0 = x_0 * P_0 + y_0 = 2 * y_0 = 2 * sqrt(k * P_0).\n\nIf the market price changes to P_1 = r * P_0 (where r is the price ratio P_1 / P_0):\n1. Value of HODL position:\n   V_hold = x_0 * P_1 + y_0 = x_0 * (r * P_0) + y_0 = y_0 * (r + 1).\n\n2. Value of LP pool position:\n   At equilibrium, y_1 / x_1 = P_1 and x_1 * y_1 = k.\n   x_1 = sqrt(k / P_1) and y_1 = sqrt(k * P_1).\n   V_pool = x_1 * P_1 + y_1 = 2 * sqrt(k * P_1) = 2 * sqrt(k * r * P_0) = 2 * y_0 * sqrt(r).\n\n3. Impermanent Loss ratio:\n   IL = (V_pool - V_hold) / V_hold\n   IL = (2 * y_0 * sqrt(r) - y_0 * (r + 1)) / (y_0 * (r + 1))\n   IL = (2 * sqrt(r)) / (r + 1) - 1.\n\nNumerical Verification:\n- For r = 1.25 (25% increase): IL = -0.6%\n- For r = 1.50 (50% increase): IL = -2.0%\n- For r = 2.00 (100% increase): IL = -5.72%\n- For r = 3.00 (200% increase): IL = -13.40%\n- For r = 5.00 (400% increase): IL = -25.46%\n\nWhy it happens: The AMM continuously sells the appreciating asset for the depreciating asset to rebalance the 50/50 value ratio.",
    "keyTakeaways": [
      "Formula: IL = (2 * sqrt(r)) / (r + 1) - 1",
      "IL is always non-positive for any price movement away from parity (r \u2260 1)",
      "Trading fee APY must outpace the calculated IL percentage to ensure net profit"
    ]
  },
  {
    "id": "int-4",
    "q": "How does Uniswap v3 Concentrated Liquidity achieve 4000x capital efficiency compared to Uniswap v2?",
    "scenario": "A protocol researcher asks you to compare v2 and v3 liquidity distribution mechanisms.",
    "answer": "In Uniswap v2, liquidity is spread uniformly across the entire theoretical price spectrum from 0 to infinity (0, \u221e).\nAs a result, more than 99% of deposited capital sits idle and never participates in swaps, leading to high slippage and poor capital efficiency.\n\nUniswap v3 Concentrated Liquidity Architecture:\n1. Custom Price Ranges [p_a, p_b]:\n   - Liquidity Providers allocate capital only within specific price boundaries defined by discrete 'ticks' (where price = 1.0001^tick).\n   - Capital only backs trades when the spot price is within [p_a, p_b].\n\n2. Virtual Reserves:\n   - Within the active tick range, the curve behaves like constant product with magnified virtual reserves:\n     (x + L / sqrt(p_b)) * (y + L * sqrt(p_a)) = L^2\n   - Where L is the liquidity concentration factor.\n\n3. Capital Efficiency Multiplier:\n   - For a stable pair trading within a narrow 0.10% band (e.g. USDC/USDT between 0.999 and 1.001), Uniswap v3 requires up to 4000x less capital to achieve identical depth and slippage as v2.\n\n4. Trade-Off:\n   - If the price crosses outside [p_a, p_b], the LP's position is converted 100% into the depreciated asset, stops earning trading fees, and suffers maximized impermanent loss unless rebalanced.",
    "keyTakeaways": [
      "v2 distributes capital across (0, \u221e); v3 concentrates liquidity within [p_a, p_b]",
      "Virtual reserves magnify effective depth, providing up to 4000x capital efficiency",
      "Out-of-range positions cease earning fees and face concentrated impermanent loss"
    ]
  },
  {
    "id": "int-5",
    "q": "Explain the architecture of an Overcollateralized Lending Protocol (e.g. Aave v3) and how the Health Factor is computed.",
    "scenario": "A senior smart contract engineer is evaluating your architecture for a decentralized money market.",
    "answer": "A decentralized lending protocol operates as a pooled multi-asset liquidity market:\n\nKey Protocol Components:\n1. Supply / Collateral Vaults:\n   - Suppliers deposit assets (e.g., ETH, USDC) and receive interest-bearing ERC-20 receipt tokens (e.g., aTokens) that scale with an index reflecting accrued interest.\n2. Debt Accounting:\n   - Borrowers lock collateral and mint variable or stable debt tokens representing their outstanding liabilities.\n3. Risk Parameters:\n   - Loan-to-Value (LTV): Maximum initial borrowing power (e.g., 75%).\n   - Liquidation Threshold (LT): The critical collateral ratio at which a position is deemed insolvent (e.g., 80%).\n   - Liquidation Bonus: Incentive paid to liquidators (e.g., 5%).\n\nHealth Factor Mathematical Formula:\nHF = (Sum of (Collateral_i in USD * LiquidationThreshold_i)) / (Total Debt in USD)\n\nState Transitions:\n- HF > 1.0: Position is healthy and solvent.\n- HF < 1.0: Position is undercollateralized. The protocol permits any external caller to liquidate up to the close factor (e.g. 50%) of the outstanding debt.\n- The liquidator repays the borrowed debt in exchange for equivalent collateral plus the liquidation bonus.",
    "keyTakeaways": [
      "Receipt tokens (aTokens) rebond interest continuously via an underlying exchange index",
      "LTV dictates initial borrow capacity; Liquidation Threshold dictates safety margin",
      "HF < 1.0 enables permissionless liquidation via the close factor and liquidation bonus"
    ]
  },
  {
    "id": "int-6",
    "q": "How does a Kinked Interest Rate Model balance pool liquidity and prevent bank runs?",
    "scenario": "A DeFi tokenomics designer asks you to construct the borrowing interest rate curve.",
    "answer": "A kinked interest rate model dynamically prices capital based on utilization U = TotalBorrowed / TotalSupplied:\n\nMathematical Structure:\nLet U_optimal be the target utilization kink (typically 80% or 90%).\n\n1. Below Kink (U <= U_optimal):\n   R_borrow = R_base + (U / U_optimal) * Slope_1\n   - Interest rates remain low and increase moderately to encourage borrowing and stimulate capital productivity.\n\n2. Above Kink (U > U_optimal):\n   R_borrow = R_base + Slope_1 + ((U - U_optimal) / (1 - U_optimal)) * Slope_2\n   - Slope_2 is calibrated to be steep (e.g., 60% to 100%+ APY).\n\nPreventing Bank Runs:\n- If utilization reaches 98%, depositors cannot withdraw their funds because 98% of the capital is lent out.\n- The steep Slope_2 punishes borrowers with crushing interest rates, making it economically irrational to maintain open debt. Borrowers rush to repay loans to stop interest bleed.\n- Simultaneously, suppliers earn high yields (R_supply = R_borrow * U * (1 - ReserveFactor)), attracting fresh external liquidity into the pool.\n- Utilization drops back down toward U_optimal, restoring pool solvency and withdrawal liquidity.",
    "keyTakeaways": [
      "Utilization U = TotalBorrowed / TotalSupplied determines pool capital scarcity",
      "Low Slope_1 encourages borrowing; steep Slope_2 prevents withdrawal illiquidity",
      "High rates force borrower repayments and attract new deposits back below the kink"
    ]
  },
  {
    "id": "int-7",
    "q": "What is an Oracle Manipulation Attack, and why must DeFi protocols never use instantaneous AMM reserves as price feeds?",
    "scenario": "A security auditor asks you to analyze a $30M DeFi lending exploit.",
    "answer": "An Oracle Manipulation Attack exploits protocols that read instantaneous spot prices from on-chain liquidity pools.\n\nAttack Anatomy:\n1. The vulnerable lending protocol computes collateral value as:\n   price = reserveUSDC / reserveETH from a Uniswap v2 pair.\n2. The attacker takes a $100,000,000 flash loan of USDC from Aave.\n3. The attacker swaps the $100,000,000 USDC into the Uniswap ETH/USDC pool.\n   - This drains the ETH reserve and floods the USDC reserve, artificially spiking the spot price of ETH to $20,000.\n4. The attacker deposits a modest amount of ETH (e.g. 100 ETH) into the vulnerable lending protocol.\n   - The protocol's oracle evaluates 100 ETH as worth $2,000,000 instead of its true market value of $200,000.\n5. The attacker borrows $1,500,000 in other stablecoins against the inflated collateral.\n6. The attacker swaps back through the Uniswap pool to restore reserves, repays the flash loan, and walks away with $1.3M in stolen protocol assets.\n\nDefense Mechanisms:\n- Use decentralized off-chain oracle networks like Chainlink Price Feeds with multi-node aggregation.\n- If using AMM pricing, use Time-Weighted Average Price (TWAP) across at least 30 to 60 minutes to make single-block manipulation economically impossible.\n- Implement strict deviation threshold checks and heartbeat monitoring.",
    "keyTakeaways": [
      "Instantaneous AMM reserves can be warped within a single block using flash loans",
      "Never use spot reserves (reserveB / reserveA) for collateral or liquidation valuations",
      "Implement decentralized oracles (Chainlink) or multi-block geometric TWAPs"
    ]
  },
  {
    "id": "int-8",
    "q": "How do Flash Loans work under the EVM execution model, and how can protocols protect themselves against flash-loan-assisted exploits?",
    "scenario": "An EVM security engineer is reviewing contract interactions with Aave's flashLoan function.",
    "answer": "Flash loans rely on the atomic state execution model of the Ethereum Virtual Machine:\n\nEVM Execution Lifecycle:\n1. Borrower calls `lendingPool.flashLoan(receiver, asset, amount, params)`.\n2. The lending contract transfers `amount` of the asset to `receiver`.\n3. The lending contract invokes the borrower's callback: `IFlashLoanReceiver(receiver).executeOperation(...)`.\n4. The borrower executes arbitrary financial logic (swaps, arbitrage, liquidations).\n5. Upon returning from the callback, the lending contract checks its balance:\n   `require(currentBalance >= balanceBefore + fee, 'FlashLoan: INSUFFICIENT_REPAYMENT')`.\n6. If the balance condition is satisfied, the transaction commits state changes. If not, the EVM reverts the entire transaction tree, returning all assets as if nothing happened.\n\nSecurity Mitigations Against Flash Loan Exploits:\n- Flash loans provide access to infinite capital without risk; therefore, protocols must assume any attacker has access to $1B+ liquidity.\n- Enforce strict Checks-Effects-Interactions (CEI) and nonReentrant guards.\n- Never rely on single-source, in-mempool price data.\n- Introduce TWAPs, deposit/withdrawal cooldowns across blocks, and borrow caps per block.",
    "keyTakeaways": [
      "EVM atomicity ensures either full repayment occurs or the entire call tree reverts",
      "Flash loans are not attacks; they are capital amplifiers exposing underlying economic flaws",
      "Design protocols under the assumption that adversaries possess unlimited single-block capital"
    ]
  },
  {
    "id": "int-9",
    "q": "What is Maximal Extractable Value (MEV), and how does a Sandwich Attack exploit AMM transactions in the public mempool?",
    "scenario": "A DEX developer is explaining transaction ordering and slippage to institutional clients.",
    "answer": "Maximal Extractable Value (MEV) is the maximum profit a validator, searcher, or bot can extract by arbitrarily including, excluding, or reordering transactions within a block.\n\nThe Sandwich Attack:\n1. Victim broadcasts a transaction swapping 50 ETH for USDC with a loose 5% slippage tolerance into the public mempool.\n2. An MEV searcher detects this pending transaction and executes two coordinated trades around it:\n   - Front-Run: The searcher submits a buy order for ETH with a higher priority gas fee (or via Flashbots private RPC). This shifts pool reserves and pushes the ETH price up to the victim's maximum acceptable slippage boundary.\n   - Victim Execution: The victim's transaction executes at the worst possible execution price, pushing the price even higher.\n   - Back-Run: The searcher immediately sells their ETH back into the pool in the same block, capturing the price difference as pure profit.\n\nMitigations:\n- Tight Slippage: Set slippage to 0.1% - 0.5% instead of default 5%.\n- Private RPCs: Route transactions through private mempools like Flashbots Protect or MEV-Blocker to hide transactions from public searchers.\n- CoW AMMs & Batch Auctions: Use batch auctions (CoW Swap) where trades in the same batch execute at uniform clearing prices.",
    "keyTakeaways": [
      "MEV searchers exploit loose slippage tolerances by front-running and back-running victim trades",
      "Sandwich attacks extract value directly from retail traders via execution degradation",
      "Mitigate using tight slippage limits, private mempool RPCs, and batch auction clearing"
    ]
  },
  {
    "id": "int-10",
    "q": "Explain the difference between rebasing tokens, fee-on-transfer tokens, and standard ERC-20s, and why they break naive DEX and lending pool contracts.",
    "scenario": "A smart contract auditor is reviewing a DEX Pair contract for non-standard token support.",
    "answer": "Many DeFi contracts assume ERC-20 tokens strictly obey OpenZeppelin's standard implementation, but exotic token standards break these assumptions:\n\n1. Fee-on-Transfer Tokens:\n   - The token contract deducts a burn or treasury tax during every `transfer()` or `transferFrom()`.\n   - Naive Pair Contract:\n     `tokenA.transferFrom(msg.sender, address(this), 100);`\n     `reserveA += 100; // BUG!`\n   - If the token took a 5% fee, the contract only received 95 tokens, but internal accounting records 100. Over time, withdrawals revert due to insolvency.\n   - Fix: Calculate actual received balance:\n     `uint256 balanceBefore = tokenA.balanceOf(address(this));`\n     `tokenA.safeTransferFrom(msg.sender, address(this), amount);`\n     `uint256 actualReceived = tokenA.balanceOf(address(this)) - balanceBefore;`\n\n2. Rebasing Tokens (e.g. stETH, Ampleforth):\n   - The token balance of every holder changes dynamically without transfers based on an oracle or rebase epoch.\n   - If a vault records `balances[user] = amount`, it ignores positive or negative rebases, trapping yield or causing accounting shortfalls.\n   - Fix: Wrap rebasing tokens into non-rebasing value-accruing shares (e.g. wrap stETH into wstETH).",
    "keyTakeaways": [
      "Fee-on-transfer tokens deduct taxes; always measure balanceBefore vs balanceAfter",
      "Rebasing tokens mutate balances; wrap them into static share-based tokens (e.g. wstETH)",
      "Never assume actual deposited tokens equal the transfer amount parameter"
    ]
  },
  {
    "id": "int-11",
    "q": "How does multi-hop routing work in a DEX aggregator (like 1inch or Uniswap Universal Router)?",
    "scenario": "A full-stack Web3 developer is designing a smart routing engine for token swaps.",
    "answer": "When a trader wants to swap Token X for Token Z, a direct pair pool X/Z may have zero liquidity or high price impact. Multi-hop routing decomposes the swap across intermediate liquidity hubs:\n\nRouting Architecture:\n1. Graph Representation:\n   - The DEX ecosystem is modeled as a directed weighted graph where vertices are ERC-20 tokens and edges are liquidity pools.\n   - Edge weights represent the negative log of expected exchange rates minus trading fees and gas costs.\n\n2. Shortest Path & Split Routing:\n   - Aggregators use modified Dijkstra's or Bellman-Ford algorithms to find the optimal path (e.g. Token X -> WETH -> DAI -> Token Z).\n   - Partial Fill Splitting: If moving $1M through a single pool causes 6% slippage, the router splits the order:\n     - 40% routed through X/WETH -> WETH/Z\n     - 35% routed through X/USDC -> USDC/Z\n     - 25% routed through direct X/Z pool.\n\n3. Execution Batching:\n   - The Router contract executes all legs in a single atomic transaction. Intermediate tokens are passed directly from pair to pair without returning to the user's wallet, minimizing gas transfers.",
    "keyTakeaways": [
      "DeFi liquidity is modeled as a weighted graph with tokens as nodes and pairs as edges",
      "Smart routing splits trade volume across multiple intermediate paths to minimize aggregate slippage",
      "Atomic execution ensures all multi-hop legs succeed together or revert cleanly"
    ]
  },
  {
    "id": "int-12",
    "q": "Why is token approval (ERC-20 approve) a major security liability in Web3 DApps, and how do modern protocols solve it?",
    "scenario": "A security engineer is conducting a threat model for a DeFi frontend.",
    "answer": "In ERC-20, smart contracts cannot pull tokens from a user's wallet without an explicit allowance:\n\nThe Problem with Naive Approvals:\n1. Infinite Approvals (type(uint256).max):\n   - Many DApps prompt users for infinite approval to avoid paying gas on future swaps.\n   - If that router or vault contract has a vulnerability, an attacker can drain all approved tokens from every user wallet at any time, even years later.\n2. Phishing Signatures:\n   - Malicious websites trick users into signing `approve(attackerAddress, max)` transactions.\n\nModern Solutions:\n1. EIP-2612 Permit (Gasless Off-Chain Signatures):\n   - Users sign a typed cryptographic EIP-712 signature off-chain.\n   - The contract verifies the signature and updates allowance inside the swap transaction in a single step, eliminating separate approval transactions.\n2. Permit2 (Uniswap):\n   - A standardized canonical approval proxy contract that supports time-based allowances, expiration deadlines, and signature transfers across all integrated protocols.\n3. Allowance Revocation & Exact Allowances:\n   - Frontends should encourage exact amount approvals and provide one-click allowance revocation tools.",
    "keyTakeaways": [
      "Infinite approvals expose user wallets to permanent drainage if the approved contract is exploited",
      "EIP-2612 permits allow single-transaction gasless approvals via cryptographic signatures",
      "Permit2 introduces time-bound expiration deadlines to obsolete permanent allowances"
    ]
  },
  {
    "id": "int-13",
    "q": "How would you design an automated liquidation bot for a lending protocol, and what edge cases must you handle in production?",
    "scenario": "A quantitative DeFi fund is hiring you to build an MEV liquidation infrastructure.",
    "answer": "An automated liquidation bot monitors the health of borrower positions and repays underwater loans to claim collateral at a discount:\n\nBot Architecture:\n1. Mempool & State Ingestion:\n   - Listen to new blocks and pending transactions via dedicated WebSocket RPC nodes.\n   - Track all open borrow positions by indexing `Borrow`, `Repay`, and `Deposit` events.\n2. Off-Chain Health Factor Evaluator:\n   - Continuously simulate price feed oracle updates.\n   - If an oracle price drop causes a borrower's Health Factor to fall below 1.0, construct a liquidation transaction.\n3. Flash Loan Integration:\n   - The bot borrows debt assets via flash loan (e.g. from Balancer or Aave with 0% or 0.05% fee), executes the liquidation, sells the seized collateral on Uniswap/Curve, and repays the flash loan.\n\nProduction Edge Cases & Failures:\n- Gas Bidding Wars & Front-Running: Other bots will see your liquidation tx in the public mempool. Use Flashbots Builder RPCs (MEV-Share) to avoid public mempool theft.\n- Slippage on Collateral Dumps: If liquidating a large $10M position, dumping the seized collateral on a DEX may cause slippage that exceeds the 5% liquidation bonus, resulting in a net loss.\n- Chain Reorgs: A block reorganization may revert the oracle price drop, causing the liquidation call to revert and burn gas.",
    "keyTakeaways": [
      "Index borrower positions locally and simulate Health Factors against pending oracle ticks",
      "Fund liquidations using flash loans to eliminate the need for vast idle capital",
      "Submit transactions via private MEV relayers (Flashbots) to prevent mempool front-running"
    ]
  },
  {
    "id": "int-14",
    "q": "What are the common vulnerabilities in DAO governance contracts, and how do Timelocks and Quorums mitigate them?",
    "scenario": "A governance architect is designing an upgrade mechanism for a $500M protocol.",
    "answer": "Decentralized governance contracts (e.g. Compound GovernorBravo, OpenZeppelin Governor) manage protocol parameters, treasury funds, and proxy contract upgrades:\n\nCommon Governance Vulnerabilities:\n1. Flash Loan Governance Attacks (e.g. Beanstalk Farms):\n   - An attacker borrows hundreds of millions of governance tokens via flash loan, introduces a malicious proposal, votes it through instantaneously, and executes it in the same transaction.\n2. Low Quorum Hijacking:\n   - If voter participation is 2%, a hostile entity buys a small token stake and quietly passes a proposal to drain the treasury.\n\nMitigations:\n1. Historical Snapshot Voting (ERC20Votes / Checkpoints):\n   - Voting power is based on the token balance at a historical block timestamp (`block.number - 1` or proposal creation block), completely neutralizing same-block flash loans.\n2. Mandatory Timelocks:\n   - All approved proposals must enter a Timelock contract (e.g. 48-hour to 7-day delay) before execution. This gives users time to withdraw assets if a malicious proposal passes.\n3. Quorum & Proposal Thresholds:\n   - Require a minimum percentage of total supply (e.g. 4% quorum) to vote 'Yes' and a significant threshold to submit proposals.\n4. Emergency Pause (Guardian Multisig):\n   - A multi-sig council can veto or pause malicious proposals during the timelock window.",
    "keyTakeaways": [
      "Historical block checkpoints prevent flash-loan-funded voting manipulation",
      "Mandatory timelocks (48h - 7d) allow users to exit before malicious upgrades execute",
      "Quorums and guardian multisigs provide essential structural checks against governance takeovers"
    ]
  },
  {
    "id": "int-15",
    "q": "What is the difference between Reentrancy, Read-Only Reentrancy, and Cross-Contract Reentrancy?",
    "scenario": "A smart contract security auditor is reviewing a complex lending and staking codebase.",
    "answer": "Reentrancy occurs when an execution path escapes control flow before completing state reconciliation:\n\n1. Classic Single-Function Reentrancy:\n   - A contract makes an external call (e.g. `call{value: amount}`) before updating internal state (`balances[msg.sender] -= amount`). The recipient reenters the same function repeatedly.\n   - Mitigation: Checks-Effects-Interactions (CEI) pattern and `nonReentrant` modifier.\n\n2. Cross-Function / Cross-Contract Reentrancy:\n   - Contract A has two functions: `withdraw()` and `transfer()`. The attacker reenters `transfer()` during `withdraw()`, manipulating shared storage balances that were not yet updated.\n   - Mitigation: Share a common reentrancy lock across all state-mutating functions.\n\n3. Read-Only Reentrancy (e.g. Curve LP pool exploit):\n   - A pool updates its reserves during a token removal step, but does not revert if a view function is queried mid-execution.\n   - An external lending protocol calls the pool's `get_virtual_price()` view function to calculate collateral value.\n   - An attacker triggers a withdrawal callback, during which `get_virtual_price()` returns an artificially inflated/deflated price. The attacker borrows against this skewed price in the external protocol.\n   - Mitigation: Guard view functions or reentrancy locks that external protocols can verify.",
    "keyTakeaways": [
      "Classic reentrancy exploits external calls before state balance updates",
      "Cross-contract reentrancy affects separate functions accessing shared storage variables",
      "Read-only reentrancy manipulates view functions queried by third-party protocols during callbacks"
    ]
  },
  {
    "id": "int-16",
    "q": "How would you handle decimal precision discrepancies in a cross-asset DeFi protocol (e.g. ETH with 18 decimals and USDC with 6 decimals)?",
    "scenario": "A core developer is writing a math library for a multi-token collateralized stablecoin engine.",
    "answer": "In Solidity, all arithmetic is integer-based. Failing to normalize decimals is one of the most common causes of multi-million dollar calculation exploits:\n\nPrecision Discrepancies:\n- ETH, DAI, WETH use 18 decimals (`1e18`).\n- USDC, USDT use 6 decimals (`1e6`).\n- WBTC uses 8 decimals (`1e8`).\n\nThe Decimal Normalization Pattern:\n1. Always normalize all internal accounting values to a standardized high-precision baseline, typically 18 decimals (or 27 decimals / WAD and RAY math from MakerDAO):\n   ```solidity\n   uint256 internal constant WAD = 1e18;\n\n   function normalizeTo18(uint256 amount, uint8 tokenDecimals) internal pure returns (uint256) {\n       if (tokenDecimals < 18) {\n           return amount * (10 ** (18 - tokenDecimals));\n       } else if (tokenDecimals > 18) {\n           return amount / (10 ** (tokenDecimals - 18));\n       }\n       return amount;\n   }\n   ```\n2. Convert back to token decimals only when transferring:\n   ```solidity\n   function denormalizeFrom18(uint256 amount18, uint8 tokenDecimals) internal pure returns (uint256) {\n       if (tokenDecimals < 18) {\n           return amount18 / (10 ** (18 - tokenDecimals));\n       }\n       return amount18;\n   }\n   ```\n3. Order of Operations: Always perform multiplication before division to minimize integer truncation errors:\n   `result = (a * b) / c;` instead of `result = (a / c) * b;`",
    "keyTakeaways": [
      "Different ERC-20 tokens use different decimals (USDC: 6, WBTC: 8, ETH: 18)",
      "Normalize all internal financial calculations to a standard 18-decimal (WAD) baseline",
      "Always multiply before dividing in Solidity to prevent truncation to zero"
    ]
  }
];
const NUMERICAL_PROBLEMS = [
  {
    "id": "prob-1",
    "title": "Problem 1 \u2014 Constant Product AMM Swap & Price Impact",
    "description": "A liquidity pool contains 15 ETH (x) and 30,000 USDC (y). A trader wants to swap 2 ETH into the pool. Assuming a fee-free idealized Constant Product model (x * y = k), calculate the initial spot price, the constant product k, the USDC output received, the effective execution price, and the percentage price impact.",
    "givens": {
      "reserveETH": 15,
      "reserveUSDC": 30000,
      "amountInETH": 2
    },
    "solution": [
      "1. Initial Spot Price: P_initial = y / x = 30,000 / 15 = $2,000 USDC / ETH",
      "2. Constant Product Invariant: k = x * y = 15 * 30,000 = 450,000",
      "3. New ETH Reserve: x' = 15 + 2 = 17 ETH",
      "4. New USDC Reserve: y' = k / x' = 450,000 / 17 \u2248 26,470.5882 USDC",
      "5. USDC Output: \u0394y = y - y' = 30,000 - 26,470.5882 \u2248 3,529.41 USDC",
      "6. Effective Execution Price: P_eff = \u0394y / \u0394x = 3,529.4118 / 2 \u2248 $1,764.71 USDC / ETH",
      "7. Price Impact: ((P_initial - P_eff) / P_initial) * 100 = ((2,000 - 1,764.7059) / 2,000) * 100 \u2248 11.76%"
    ],
    "expectedAnswers": {
      "spotPrice": "$2,000 / ETH",
      "k": "450,000",
      "outputUSDC": "3,529.41 USDC",
      "effectivePrice": "$1,764.71 / ETH",
      "priceImpact": "11.76%"
    }
  },
  {
    "id": "prob-2",
    "title": "Problem 2 \u2014 Lending, Collateralization & Health Factor",
    "description": "A borrower deposits ETH worth $5,000 into a decentralized money market. The protocol defines a maximum Loan-to-Value (LTV) of 65% and a Liquidation Threshold of 80%. Calculate the maximum borrowing capacity, the Collateralization Ratio (CR) if the borrower borrows $2,000, and the resulting Health Factor (HF).",
    "givens": {
      "collateralUSD": 5000,
      "maxLTV": 0.65,
      "liquidationThreshold": 0.8,
      "borrowUSD": 2000
    },
    "solution": [
      "1. Maximum Borrowing Capacity: MaxDebt = CollateralValue * MaxLTV = $5,000 * 0.65 = $3,250 USDC",
      "2. Collateralization Ratio (CR): CR = (CollateralValue / DebtValue) * 100 = ($5,000 / $2,000) * 100 = 250%",
      "3. Current LTV: LTV = (DebtValue / CollateralValue) * 100 = ($2,000 / $5,000) * 100 = 40%",
      "4. Health Factor (HF): HF = (CollateralValue * LiquidationThreshold) / DebtValue = ($5,000 * 0.80) / $2,000 = $4,000 / $2,000 = 2.00",
      "5. Interpretation: Since HF = 2.00 > 1.0, the position is well-collateralized and safe from liquidation. ETH collateral would need to drop by 50% (below $2,500) before HF < 1.0."
    ],
    "expectedAnswers": {
      "maxBorrow": "$3,250",
      "collateralizationRatio": "250%",
      "healthFactor": "2.00"
    }
  },
  {
    "id": "prob-3",
    "title": "Problem 3 \u2014 Impermanent Loss with 3x Price Divergence",
    "description": "A liquidity provider deposits equal values of ETH and USDC into a 50/50 Uniswap v2 constant product pool. Subsequently, the market price of ETH triples (3x price increase, relative price ratio r = 3). Calculate the new relative price ratio r, the percentage impermanent loss, and the dollar difference compared to holding assuming an initial $10,000 deposit ($5,000 ETH + $5,000 USDC).",
    "givens": {
      "priceRatio": 3.0,
      "initialDepositUSD": 10000
    },
    "solution": [
      "1. Relative Price Ratio: r = P_new / P_initial = 3.0",
      "2. Impermanent Loss Formula: IL = (2 * sqrt(r)) / (1 + r) - 1",
      "3. Calculate Terms: sqrt(3) \u2248 1.73205; 2 * sqrt(3) \u2248 3.4641; 1 + r = 4.0",
      "4. IL Ratio: IL = 3.4641 / 4.0 - 1 = 0.866025 - 1 = -0.133975 \u2248 -13.40%",
      "5. HODL Value: Initial ETH portion ($5,000) triples to $15,000; USDC portion remains $5,000. Total V_hold = $15,000 + $5,000 = $20,000.",
      "6. Pool Position Value: V_pool = V_hold * (1 + IL) = $20,000 * (1 - 0.133975) = $20,000 * 0.866025 = $17,320.50.",
      "7. Dollar Difference (Impermanent Loss): $20,000 - $17,320.50 = $2,679.50 underperformance vs HODL."
    ],
    "expectedAnswers": {
      "priceRatio": "3.0x",
      "impermanentLoss": "-13.40%",
      "valueDifference": "$2,679.50"
    }
  },
  {
    "id": "prob-4",
    "title": "Problem 4 \u2014 Utilization-Based Interest Rate Model",
    "description": "A decentralized lending pool has $2,000,000 in total supplied capital and $1,500,000 in total borrowed capital. The protocol uses a linear utilization model with a base interest rate R_0 = 3% and a rate slope S = 12%. Calculate the pool utilization U and the resulting borrowing interest rate R_b.",
    "givens": {
      "totalSupplied": 2000000,
      "totalBorrowed": 1500000,
      "baseRate": 0.03,
      "slope": 0.12
    },
    "solution": [
      "1. Pool Utilization: U = TotalBorrowed / TotalSupplied = 1,500,000 / 2,000,000 = 0.75 = 75%",
      "2. Linear Borrowing Rate Model: R_b = R_0 + U * S",
      "3. Calculate Borrowing Rate: R_b = 0.03 + (0.75 * 0.12) = 0.03 + 0.09 = 0.12 = 12.00%",
      "4. Supplier Rate Calculation (Assuming 10% Reserve Factor): R_s = R_b * U * (1 - ReserveFactor) = 0.12 * 0.75 * (1 - 0.10) = 0.09 * 0.90 = 8.10%"
    ],
    "expectedAnswers": {
      "utilization": "75%",
      "borrowingRate": "12.00%",
      "supplierRate": "8.10%"
    }
  }
];

export default function BlockchainDeFiProtocols() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Constant Product AMM
  const [ammReserveETH, setAmmReserveETH] = useState(10);
  const [ammReserveUSDC, setAmmReserveUSDC] = useState(20000);
  const [ammDirection, setAmmDirection] = useState("ETH_TO_USDC");
  const [ammAmountIn, setAmmAmountIn] = useState(1);
  const [ammFeeRate, setAmmFeeRate] = useState(0.003);
  const [ammSlippage, setAmmSlippage] = useState(0.5);

  const ammSwapResult = useMemo(() => {
    const rIn = ammDirection === "ETH_TO_USDC" ? ammReserveETH : ammReserveUSDC;
    const rOut = ammDirection === "ETH_TO_USDC" ? ammReserveUSDC : ammReserveETH;
    const amountInWithFee = ammAmountIn * (1 - ammFeeRate);
    const amountOut = (rOut * amountInWithFee) / (rIn + amountInWithFee);

    let spotPrice, effectivePrice, priceImpact;
    if (ammDirection === "ETH_TO_USDC") {
      spotPrice = ammReserveUSDC / ammReserveETH;
      effectivePrice = amountOut / ammAmountIn;
      priceImpact = Math.max(0, ((spotPrice - effectivePrice) / spotPrice) * 100);
    } else {
      spotPrice = ammReserveUSDC / ammReserveETH;
      effectivePrice = ammAmountIn / amountOut;
      priceImpact = Math.max(0, ((effectivePrice - spotPrice) / effectivePrice) * 100);
    }

    const amountOutMin = amountOut * (1 - ammSlippage / 100);
    const newReserveETH =
      ammDirection === "ETH_TO_USDC"
        ? ammReserveETH + ammAmountIn
        : ammReserveETH - amountOut;
    const newReserveUSDC =
      ammDirection === "ETH_TO_USDC"
        ? ammReserveUSDC - amountOut
        : ammReserveUSDC + ammAmountIn;

    return {
      amountOut,
      spotPrice,
      effectivePrice,
      priceImpact,
      amountOutMin,
      newReserveETH: Math.max(0.01, newReserveETH),
      newReserveUSDC: Math.max(1, newReserveUSDC),
    };
  }, [ammReserveETH, ammReserveUSDC, ammDirection, ammAmountIn, ammFeeRate, ammSlippage]);

  const handleExecuteAmmSwap = useCallback(() => {
    setAmmReserveETH(ammSwapResult.newReserveETH);
    setAmmReserveUSDC(ammSwapResult.newReserveUSDC);
  }, [ammSwapResult]);

  const handleResetAmmPool = useCallback(() => {
    setAmmReserveETH(10);
    setAmmReserveUSDC(20000);
    setAmmAmountIn(1);
  }, []);

  // Simulator 2 State: Lending & Liquidation Engine
  const [lendingCollateralAmount, setLendingCollateralAmount] = useState(2.5);
  const [lendingCollateralAsset, setLendingCollateralAsset] = useState("ETH");
  const [lendingCollateralPrice, setLendingCollateralPrice] = useState(2000);
  const [lendingDebtAmount, setLendingDebtAmount] = useState(3000);
  const [lendingLiquidationThreshold, setLendingLiquidationThreshold] = useState(0.80);

  const lendingHealthMetrics = useMemo(() => {
    const collateralValueUSD = lendingCollateralAmount * lendingCollateralPrice;
    const maxBorrowUSD = collateralValueUSD * 0.70;
    const collateralizationRatio =
      lendingDebtAmount > 0 ? (collateralValueUSD / lendingDebtAmount) * 100 : 999;
    const currentLTV =
      collateralValueUSD > 0 ? (lendingDebtAmount / collateralValueUSD) * 100 : 0;
    const healthFactor =
      lendingDebtAmount > 0
        ? (collateralValueUSD * lendingLiquidationThreshold) / lendingDebtAmount
        : 999;
    const liquidationPrice =
      lendingCollateralAmount > 0 && lendingLiquidationThreshold > 0
        ? lendingDebtAmount / (lendingCollateralAmount * lendingLiquidationThreshold)
        : 0;

    return {
      collateralValueUSD,
      maxBorrowUSD,
      collateralizationRatio,
      currentLTV,
      healthFactor,
      liquidationPrice,
      isLiquidatable: healthFactor < 1.0,
    };
  }, [
    lendingCollateralAmount,
    lendingCollateralPrice,
    lendingDebtAmount,
    lendingLiquidationThreshold,
  ]);

  const handleSimulateLiquidation = useCallback(() => {
    if (!lendingHealthMetrics.isLiquidatable) return;
    const debtToRepay = lendingDebtAmount * 0.5;
    const collateralSeizedUSD = debtToRepay * 1.05; // 5% bonus
    const collateralSeizedUnits = collateralSeizedUSD / lendingCollateralPrice;

    setLendingDebtAmount((prev) => Math.max(0, prev - debtToRepay));
    setLendingCollateralAmount((prev) => Math.max(0.01, prev - collateralSeizedUnits));
  }, [lendingHealthMetrics.isLiquidatable, lendingDebtAmount, lendingCollateralPrice]);

  // Simulator 3 State: Impermanent Loss & Yield
  const [ilInitialDeposit, setIlInitialDeposit] = useState(10000);
  const [ilPriceRatio, setIlPriceRatio] = useState(2.0);
  const [ilFeeApy, setIlFeeApy] = useState(15.0);
  const [ilDurationMonths, setIlDurationMonths] = useState(6);

  const ilMetrics = useMemo(() => {
    const vHold =
      ilInitialDeposit * 0.5 * ilPriceRatio + ilInitialDeposit * 0.5;
    const ilRatio =
      ilPriceRatio > 0
        ? (2 * Math.sqrt(ilPriceRatio)) / (1 + ilPriceRatio) - 1
        : 0;
    const vPool = vHold * (1 + ilRatio);
    const ilPercent = Math.abs(ilRatio) * 100;
    const ilDollar = Math.max(0, vHold - vPool);
    const feeEarnings =
      ilInitialDeposit * (ilFeeApy / 100) * (ilDurationMonths / 12);
    const netProfitLoss = vPool + feeEarnings - vHold;

    return {
      vHold,
      vPool,
      ilPercent,
      ilDollar,
      feeEarnings,
      netProfitLoss,
    };
  }, [ilInitialDeposit, ilPriceRatio, ilFeeApy, ilDurationMonths]);

  // Simulator 4 State: Flash Loan Arbitrage
  const [flashBorrowAmount, setFlashBorrowAmount] = useState(100000);
  const [flashDexAPrice, setFlashDexAPrice] = useState(2000);
  const [flashDexBPrice, setFlashDexBPrice] = useState(2030);

  const flashArbitrageResult = useMemo(() => {
    const protocolFee = flashBorrowAmount * 0.0005; // 0.05% Aave fee
    const ethBought = flashDexAPrice > 0 ? flashBorrowAmount / flashDexAPrice : 0;
    const usdcProceeds = ethBought * flashDexBPrice;
    const gasCostUSD = 30; // standard gas cost
    const netProfit = usdcProceeds - flashBorrowAmount - protocolFee - gasCostUSD;

    return {
      protocolFee,
      ethBought,
      usdcProceeds,
      gasCostUSD,
      netProfit,
      isProfitable: netProfit > 0,
    };
  }, [flashBorrowAmount, flashDexAPrice, flashDexBPrice]);

  // Numerical Problems State
  const [openProblemId, setOpenProblemId] = useState(null);

  // Assessment Quiz State
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [openInterviewId, setOpenInterviewId] = useState(null);

  const handleSelectQuizAnswer = useCallback((qId, optIdx) => {
    setSelectedQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  }, []);

  const handleResetQuiz = useCallback(() => {
    setSelectedQuizAnswers({});
  }, []);

  const quizScore = useMemo(() => {
    return Object.entries(selectedQuizAnswers).reduce((acc, [qId, ansIdx]) => {
      const question = QUIZ_QUESTIONS.find((q) => q.id === qId);
      return question && question.ans === ansIdx ? acc + 1 : acc;
    }, 0);
  }, [selectedQuizAnswers]);

  // Mastery Checklist State (persisted in localStorage)
  const [checklistProgress, setChecklistProgress] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m16_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m16_progress",
        JSON.stringify(checklistProgress)
      );
    } catch {
      // ignore
    }
  }, [checklistProgress]);

  const handleToggleChecklist = useCallback((idx) => {
    setChecklistProgress((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  }, []);

  const handleMarkAllChecklist = useCallback(() => {
    const all = {};
    CHECKLIST_ITEMS.forEach((_, idx) => {
      all[idx] = true;
    });
    setChecklistProgress(all);
  }, []);

  const handleResetChecklist = useCallback(() => {
    setChecklistProgress({});
  }, []);

  const completedCount = useMemo(() => {
    return Object.values(checklistProgress).filter(Boolean).length;
  }, [checklistProgress]);

  const progressPercentage = useMemo(() => {
    return Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);
  }, [completedCount]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] pb-28 sm:pb-36 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <ModuleNav track="blockchain" currentModuleId="defi-protocols" />
      {/* Main Tab Navigation Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wider uppercase">
            <span>PrepSpaces Web3 Curriculum</span>
            <span>•</span>
            <span>Financial Engineering Track</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            Decentralized Finance (DeFi) Architecture
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Master the mathematical invariants, smart contract protocols, and economic security of DeFi.
            Explore automated market makers (x * y = k), pooled lending markets, liquidation engines,
            impermanent loss dynamics, flash loans, and composable money legos.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#e7e3da] pb-3 text-xs sm:text-sm">
          {[
            { id: "theory", label: "1. Theory & Architecture" },
            { id: "interactive", label: "2. Live Simulators" },
            { id: "lab", label: "3. Practical Labs & Math" },
            { id: "assessment", label: "4. Knowledge Check & Interviews" },
            { id: "tracker", label: "5. Mastery Tracker & Resources" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl font-semibold transition ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:text-neutral-900 border border-[#e7e3da]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">

      {/* ------------------------------------------------------------- */}
      {/* TAB 1: THEORY & SYSTEM ARCHITECTURE                           */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "theory" && (
        <section className="space-y-12">
          {/* Module Banner */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Core Curriculum • Module 16
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Decentralized Finance • AMMs • Money Legos • Security
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Module 16 — Decentralized Finance (DeFi) Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Decentralized Finance (DeFi) represents the programmable reorganization of global financial services.
              By replacing opaque centralized intermediaries with deterministic, auditable smart contracts,
              DeFi enables peer-to-peer exchange, pooled lending markets, synthetic derivatives, and autonomous yield strategies.
              In this module, you will master the economic equations, protocol architectures, and security engineering
              governing modern Web3 financial infrastructure.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Exchange Invariant</span>
                <span className="text-neutral-800 font-bold">x * y = k (CPMM)</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Lending Engine</span>
                <span className="text-neutral-800 font-bold">Overcollateralized / HF &lt; 1</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Capital Primitives</span>
                <span className="text-neutral-800 font-bold">Flash Loans, LP Tokens, Yield</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Security Invariants</span>
                <span className="text-neutral-800 font-bold">CEI, TWAP, MEV Shielding</span>
              </div>
            </div>
          </div>

          {/* SECTION 1: Introduction to DeFi */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 1</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Introduction to Decentralized Finance
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">1.1 What Is Decentralized Finance?</h4>
              <p>
                <strong>Decentralized Finance (DeFi)</strong> is an open financial ecosystem built using public blockchain networks,
                Turing-complete smart contracts, and decentralized client applications. It enables users to trade, borrow, lend,
                stake, and manage risk without relying on centralized custodian banks, brokerages, or clearing houses.
              </p>

              {/* Traditional vs DEX Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wide">
                    Traditional Exchange (CEX) Workflow
                  </h5>
                  <ol className="text-xs text-neutral-600 space-y-1 list-decimal list-inside font-mono">
                    <li>User submits identity verification (KYC/AML).</li>
                    <li>Exchange deposits assets into private corporate custody.</li>
                    <li>User submits limit order to centralized matching engine.</li>
                    <li>Exchange executes order against proprietary order book.</li>
                    <li>Internal database SQL balances are credited/debited.</li>
                    <li>User requests withdrawal subject to approval and banking limits.</li>
                  </ol>
                </div>

                <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 space-y-2">
                  <h5 className="font-bold text-amber-900 text-xs uppercase tracking-wide">
                    Decentralized Exchange (DEX) Workflow
                  </h5>
                  <ol className="text-xs text-neutral-800 space-y-1 list-decimal list-inside font-mono">
                    <li>User connects non-custodial Web3 wallet (MetaMask).</li>
                    <li>User selects token pair (e.g. ETH → USDC).</li>
                    <li>DApp reads liquidity pool reserves from the blockchain.</li>
                    <li>Smart contract algorithmically calculates output and slippage.</li>
                    <li>User signs transaction authorizing token transfer.</li>
                    <li>EVM atomically swaps tokens and updates on-chain reserves.</li>
                  </ol>
                </div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">1.2 Core Characteristics of DeFi</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">A. Permissionless Access</span>
                  <p className="text-neutral-600">Anyone with an internet connection, a blockchain address, and sufficient native gas tokens can interact with protocols without gatekeepers.</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">B. Absolute Transparency</span>
                  <p className="text-neutral-600">Smart contract bytecode, historical transactions, reserve balances, and governance votes are permanently verifiable on public ledgers.</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">C. Programmability</span>
                  <p className="text-neutral-600">Financial agreements are codified in immutable smart contract logic, executing automated calculations, margin checks, and liquidations.</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">D. Non-Custodial Architecture</span>
                  <p className="text-neutral-600">Users retain sole custody of their private keys. Smart contracts manage assets strictly according to algorithmic rules rather than corporate discretion.</p>
                </div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">1.3 Major Categories of DeFi Protocols</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Category</th>
                      <th className="p-3 border-b border-neutral-200">Primary Financial Function</th>
                      <th className="p-3 border-b border-neutral-200">Canonical Protocol Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Decentralized Exchanges (DEX)</td>
                      <td className="p-3">Peer-to-peer token swapping via liquidity pools & AMMs</td>
                      <td className="p-3 font-mono text-amber-700 font-semibold">Uniswap, Curve, Balancer</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Pooled Lending</td>
                      <td className="p-3">Supply capital to earn variable algorithmic interest</td>
                      <td className="p-3 font-mono text-neutral-800">Aave, Compound</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Overcollateralized Borrowing</td>
                      <td className="p-3">Borrow debt assets against locked cryptocurrency collateral</td>
                      <td className="p-3 font-mono text-neutral-800">MakerDAO (Sky), Morpho</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Decentralized Stablecoins</td>
                      <td className="p-3">Maintain soft currency pegs via algorithmic collateral ratios</td>
                      <td className="p-3 font-mono text-neutral-800">DAI / USDS, LUSD</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Liquid Staking (LSD)</td>
                      <td className="p-3">Stake native assets and receive liquid yield-bearing claims</td>
                      <td className="p-3 font-mono text-neutral-800">Lido (stETH), Rocket Pool (rETH)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Yield Aggregators</td>
                      <td className="p-3">Automate yield compounding across multiple lending vaults</td>
                      <td className="p-3 font-mono text-neutral-800">Yearn Finance, Beefy</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Perpetuals & Derivatives</td>
                      <td className="p-3">Trade leveraged synthetic positions without expiry dates</td>
                      <td className="p-3 font-mono text-neutral-800">GMX, dYdX, Synthetix</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Decentralized Insurance</td>
                      <td className="p-3">Underwrite smart contract and depeg risk via mutual capital pools</td>
                      <td className="p-3 font-mono text-neutral-800">Nexus Mutual</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900 space-y-1">
                <span className="font-bold uppercase tracking-wide">Key Engineering Takeaway:</span>
                <p>
                  DeFi restructures financial plumbing using programmable blockchain systems, but it does <strong>not</strong> eliminate financial,
                  mathematical, or operational risk. Developers must treat economic models with the same rigorous scrutiny as low-level EVM bytecode.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2: Traditional Finance vs DeFi */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 2</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Traditional Finance vs DeFi Architecture
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                In traditional finance, trust is concentrated in legal corporate entities that administer proprietary ledgers.
                In DeFi, trust is minimized into cryptographic execution proofs verified by decentralized consensus nodes:
              </p>

              {/* 10-Dimension Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Architectural Dimension</th>
                      <th className="p-3 border-b border-neutral-200">Traditional Finance (CeFi / TradFi)</th>
                      <th className="p-3 border-b border-neutral-200">Decentralized Finance (DeFi)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1. Administrative Control</td>
                      <td className="p-3">Centralized corporate entities & executives</td>
                      <td className="p-3 font-semibold text-amber-700">Autonomous smart contracts & DAO token voting</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">2. Account Onboarding</td>
                      <td className="p-3">Identity verification (KYC/AML), geographic approval</td>
                      <td className="p-3 font-semibold text-green-700">Permissionless wallet connection (secp256k1 keypairs)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">3. Settlement Layer</td>
                      <td className="p-3">SWIFT, Fedwire, ACH (T+1 to T+3 business days)</td>
                      <td className="p-3">Blockchain block confirmation (12s Ethereum / sub-second L2s)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">4. Ledger Records</td>
                      <td className="p-3">Private relational databases (Oracle, PostgreSQL)</td>
                      <td className="p-3">Public immutable blockchain state trie</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">5. Operating Hours</td>
                      <td className="p-3">Mon-Fri 9:00 AM – 4:30 PM (Closed holidays)</td>
                      <td className="p-3 font-semibold text-green-700">Continuous 24/7/365 uninterrupted availability</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">6. Data Transparency</td>
                      <td className="p-3">Opaque balance sheets; quarterly retrospective reports</td>
                      <td className="p-3">Real-time provable on-chain reserves and flow of funds</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">7. Transaction Reversal</td>
                      <td className="p-3">Chargebacks and administrative clawbacks possible</td>
                      <td className="p-3 font-semibold text-red-700">Strictly final and irreversible upon consensus</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">8. Interoperability</td>
                      <td className="p-3">Siloed closed APIs requiring commercial contracts</td>
                      <td className="p-3 font-semibold text-amber-700">Permissionless composability ("Money Legos")</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">9. Custody Model</td>
                      <td className="p-3">Custodial (bank holds deposits as unsecured debt)</td>
                      <td className="p-3 font-semibold text-green-700">Self-custodial (user holds private keys)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">10. Primary Risks</td>
                      <td className="p-3">Institutional insolvency, bank runs, censorship</td>
                      <td className="p-3 font-semibold text-red-700">Smart contract exploits, oracle attacks, private key loss</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 3: 5-Layer Ecosystem Architecture */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 3</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DeFi 5-Layer Ecosystem Architecture
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                A decentralized financial ecosystem is structured into five interdependent operational layers:
              </p>

              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────────────┐
│ Layer 5: Aggregation & Financial User Applications                      │
│ (DEX Aggregators [1inch], Yield Optimizers [Yearn], Portfolio Dashboards)│
├─────────────────────────────────────────────────────────────────────────┤
│ Layer 4: Wallet & Client Interface Layer                                │
│ (MetaMask, Rainbow, EIP-1193 Providers, Viem / Ethers.js Frontends)     │
├─────────────────────────────────────────────────────────────────────────┤
│ Layer 3: Oracle & External Data Infrastructure                          │
│ (Chainlink Decentralized Price Feeds, TWAPs, Pyth High-Frequency Oracles)│
├─────────────────────────────────────────────────────────────────────────┤
│ Layer 2: Smart Contract Protocol Layer                                  │
│ (Uniswap Pools, Aave Lending Vaults, MakerDAO CDPs, Governance Timelocks)│
├─────────────────────────────────────────────────────────────────────────┤
│ Layer 1: Blockchain Execution & Settlement Layer                        │
│ (Ethereum Mainnet, Arbitrum, Optimism, Base, EVM State Machines)       │
└─────────────────────────────────────────────────────────────────────────┘`}
              </pre>

              <h4 className="text-base font-bold text-neutral-900 pt-3">Key Subsystems & Responsibilities</h4>
              <ul className="text-xs text-neutral-700 space-y-2 list-disc list-inside">
                <li><strong>Settlement Layer (L1/L2):</strong> Responsible for transaction sequencing, gas charging, cryptographic ECDSA validation, and persistent EVM state storage.</li>
                <li><strong>Protocol Layer (L2):</strong> Codifies core mathematical financial rules—reserve accounting, swap invariant enforcement, and interest rate models.</li>
                <li><strong>Oracle Layer (L3):</strong> Bridges off-chain real-world price data into smart contracts. Oracles are required because blockchains cannot initiate outbound HTTP calls.</li>
                <li><strong>Client Layer (L4):</strong> Translates user interactions into ABI-encoded calldata and prompts wallet signatures via EIP-1193.</li>
                <li><strong>Application Layer (L5):</strong> Combines underlying protocols into unified user-facing financial products (e.g., auto-routing swaps across 5 different DEXs).</li>
              </ul>
            </div>
          </div>

          {/* SECTION 4: Smart Contract Financial Logic */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 4</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Smart Contract Financial Primitives & Atomicity
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">4.1 Financial State Representation</h4>
              <p>
                In a DeFi smart contract, financial balances are represented as unsigned integers within storage mappings:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleVault {
    // Internal ledger mapping account addresses to deposited wei
    mapping(address => uint256) public balances;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    function deposit() external payable {
        require(msg.value > 0, "Deposit must be positive");
        balances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");

        // CHECKS-EFFECTS-INTERACTIONS PATTERN (CEI)
        // 1. Update internal state BEFORE making external calls to block reentrancy
        balances[msg.sender] -= amount;

        // 2. Perform external value transfer
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "ETH transfer failed");

        emit Withdrawn(msg.sender, amount);
    }
}`}
              </pre>

              <h4 className="text-base font-bold text-neutral-900 pt-3">4.2 Transactional Atomicity</h4>
              <p>
                In the EVM, transactions are <strong>atomic</strong>: either all state modifications succeed and commit to the blockchain,
                or if any sub-call reverts (via <code className="font-mono text-xs px-1.5 py-0.5 bg-neutral-100 rounded">require()</code> or <code className="font-mono text-xs px-1.5 py-0.5 bg-neutral-100 rounded">revert()</code>),
                the entire transaction execution tree is rolled back as though it never occurred.
                This guarantee is the bedrock of multi-hop swaps and flash loan borrowing.
              </p>
            </div>
          </div>

          {/* SECTION 5: Protocols & Principles */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 5</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DeFi Protocol Architecture & Core Design Principles
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                A DeFi protocol is a coordinated system of modular smart contracts implementing financial rules.
                A production-grade protocol must satisfy six fundamental engineering criteria:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">1. Mathematical Correctness</span>
                  <span className="text-neutral-600">Invariants must hold across all execution bounds without precision loss or integer overflow.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">2. Invariant Solvency</span>
                  <span className="text-neutral-600">Total protocol assets under management must always exceed or equal outstanding liabilities.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">3. Reentrancy Immunity</span>
                  <span className="text-neutral-600">All external calls must be guarded using CEI and non-reentrant mutex locks.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">4. Trust Minimization</span>
                  <span className="text-neutral-600">Admin privileges must be constrained by multi-signature governance and multi-day timelocks.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">5. Gas Efficiency</span>
                  <span className="text-neutral-600">Minimize storage writes (SSTORE) and pack struct variables into contiguous 32-byte slots.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">6. Bounded Risk Parameters</span>
                  <span className="text-neutral-600">Enforce supply caps, borrow caps, debt ceilings, and conservative liquidation buffers.</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6: Liquidity Pools */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 6</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Liquidity Pools vs Order Books
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">6.1 What Is a Liquidity Pool?</h4>
              <p>
                A <strong>liquidity pool</strong> is a smart contract holding locked reserves of two or more ERC-20 tokens.
                Instead of requiring a counterparty to place an offsetting limit order at an exact matching price,
                traders execute swaps directly against the pool's deposited reserves.
              </p>

              {/* Pool vs Order Book Comparison */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Feature</th>
                      <th className="p-3 border-b border-neutral-200">Centralized Limit Order Book (CLOB)</th>
                      <th className="p-3 border-b border-neutral-200">Automated Liquidity Pool (AMM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Pricing Engine</td>
                      <td className="p-3">Discrete bid/ask orders placed by market participants</td>
                      <td className="p-3 font-semibold text-amber-700">Deterministic algorithmic mathematical formula</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Capital Requirement</td>
                      <td className="p-3">Continuous order cancellations & placements (high gas)</td>
                      <td className="p-3 font-semibold text-green-700">Passive pooled liquidity (LPs deposit once and earn fees)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Trade Matching</td>
                      <td className="p-3">High-frequency off-chain matching engine</td>
                      <td className="p-3 font-semibold text-green-700">Instant on-chain execution directly against pool reserves</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Liquidity Source</td>
                      <td className="p-3">Professional market makers (Citadel, Jane Street)</td>
                      <td className="p-3 font-semibold text-amber-700">Decentralized community of global liquidity providers (LPs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 7: Automated Market Makers (AMMs) */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 7</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Automated Market Makers (AMMs) & Constant Product Math
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">7.1 The Constant Product Formula: x * y = k</h4>
              <p>
                In a Constant Product Market Maker (CPMM) such as Uniswap v2, the pool maintains reserves of Token A (<code className="font-mono">x</code>)
                and Token B (<code className="font-mono">y</code>). The product must remain constant throughout any swap:
              </p>
              <div className="p-4 bg-neutral-900 text-white rounded-xl font-mono text-center text-base sm:text-lg">
                x * y = k
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">7.2 Step-by-Step Swap Calculation</h4>
              <p>Suppose an ETH/USDC liquidity pool contains:</p>
              <ul className="text-xs font-mono space-y-1 list-disc list-inside">
                <li>x = 10 ETH</li>
                <li>y = 20,000 USDC</li>
                <li>k = 10 * 20,000 = 200,000</li>
                <li>Initial Spot Price: P = y / x = 20,000 / 10 = $2,000 USDC per ETH</li>
              </ul>

              <p className="pt-1">A trader deposits 1 ETH into the pool:</p>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 font-mono text-xs space-y-2 text-neutral-800">
                <div>1. New ETH reserve: x' = x + Δx = 10 + 1 = 11 ETH</div>
                <div>2. Enforce invariant: 11 * y' = 200,000</div>
                <div>3. Solve for new USDC reserve: y' = 200,000 / 11 ≈ 18,181.8182 USDC</div>
                <div>4. Compute output: Δy = y - y' = 20,000 - 18,181.8182 = 1,818.1818 USDC</div>
                <div>5. Effective Price: P_eff = 1,818.1818 / 1 = $1,818.18 USDC / ETH</div>
                <div>6. Price Impact: ((2,000 - 1,818.18) / 2,000) * 100 = 9.09%</div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">7.3 Fee-Adjusted Swap Formula</h4>
              <p>
                Real-world pools charge a liquidity provider fee (typically <code className="font-mono text-xs">0.3%</code> or <code className="font-mono text-xs">f = 0.003</code>).
                The output formula taking fees into account is:
              </p>
              <div className="p-3 bg-neutral-100 rounded-lg font-mono text-xs text-neutral-800 text-center">
                Δy = (y * Δx * (1 - f)) / (x + Δx * (1 - f))
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">7.4 AMM Variations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Constant Product (Uniswap v2)</span>
                  <span className="text-neutral-600">x * y = k. General purpose for volatile token pairs. Uniform liquidity across (0, ∞).</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Stable-Swap (Curve)</span>
                  <span className="text-neutral-600">Hybrid sum/product curve. Extreme depth and minimal slippage near 1.0 parity (USDC/USDT).</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Concentrated Liquidity (Uniswap v3)</span>
                  <span className="text-neutral-600">LPs allocate capital to custom price ranges [p_a, p_b], yielding up to 4000x capital efficiency.</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 8: Decentralized Exchanges */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 8</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Decentralized Exchange (DEX) Architecture & Routing
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">8.1 Modular DEX Architecture</h4>
              <p>A production DEX is architected across four core smart contracts:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Factory Contract</span>
                  <span className="text-neutral-600">Registry deployed once that creates and catalogs deterministic Pair contracts using CREATE2.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Pair Contract</span>
                  <span className="text-neutral-600">Holds token balances, enforces x * y = k, mints/burns LP tokens, and executes atomic swaps.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Router Contract</span>
                  <span className="text-neutral-600">Performs safety checks (deadline, slippage), handles multi-hop paths, and interfaces with wallets.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">ERC-20 Token Contracts</span>
                  <span className="text-neutral-600">Underlying fungible token standards with allowance mechanisms (approve / transferFrom).</span>
                </div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">8.2 Multi-Hop Routing</h4>
              <p>
                When a direct pair pool has shallow liquidity, the Router routes the swap across intermediate liquidity hubs:
              </p>
              <div className="p-3 bg-neutral-900 text-neutral-200 rounded-lg font-mono text-xs">
                ETH ──▶ [WETH / DAI Pool] ──▶ DAI ──▶ [DAI / USDC Pool] ──▶ USDC
              </div>
            </div>
          </div>

          {/* SECTION 9: Lending & Borrowing */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 9</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Lending, Borrowing & Overcollateralization
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">9.1 Overcollateralized Debt Markets</h4>
              <p>
                Because blockchains operate anonymously without legal debtor enforcement, loans must be <strong>overcollateralized</strong>:
                borrowers must lock collateral worth significantly more than the borrowed debt assets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Loan-to-Value (LTV)</span>
                  <span className="text-neutral-600 block mt-1">Maximum borrowing limit:</span>
                  <code className="text-amber-700 font-bold font-mono">MaxDebt = Collateral * LTV</code>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Collateralization Ratio (CR)</span>
                  <span className="text-neutral-600 block mt-1">Safety buffer metric:</span>
                  <code className="text-amber-700 font-bold font-mono">CR = (Collateral / Debt) * 100</code>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Receipt Tokens (aTokens)</span>
                  <span className="text-neutral-600 block mt-1">Yield-accruing tokens representing deposited principal + interest index.</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 10: Collateralization & Liquidation */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 10</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Collateralization & Liquidation Mechanics
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">10.1 The Health Factor (HF) Formula</h4>
              <p>
                The health factor indicates the solvency of a debt position. When market volatility causes collateral value to fall,
                the Health Factor drops toward 1.0:
              </p>
              <div className="p-4 bg-neutral-900 text-white rounded-xl font-mono text-center text-sm sm:text-base">
                HF = (Total Collateral in USD * Liquidation Threshold) / Total Debt in USD
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200 text-xs">
                  <strong className="text-green-900 block">HF &gt; 1.0: Solvent & Safe</strong>
                  <span className="text-green-800">The position possesses sufficient collateral to guarantee protocol solvency. No liquidation permitted.</span>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-xs">
                  <strong className="text-red-900 block">HF &lt; 1.0: Eligible for Liquidation</strong>
                  <span className="text-red-800">External liquidators can repay up to 50% of the borrower's debt and seize collateral at a 5–10% bonus.</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 11: Interest Rate Models */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 11</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Utilization-Based & Kinked Interest Rate Models
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">11.1 Pool Utilization</h4>
              <p>Interest rates are governed by capital scarcity: <code className="font-mono text-xs font-bold">U = TotalBorrowed / TotalSupplied</code>.</p>

              <h4 className="text-base font-bold text-neutral-900 pt-2">11.2 The Two-Slope Kinked Curve</h4>
              <p>
                To prevent bank runs (where 100% of supplied funds are borrowed, leaving depositors unable to withdraw),
                protocols employ a <strong>kinked interest rate curve</strong>:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`Borrow APY
    ▲
100%│                                              / (Slope 2: Extreme Rate Spike)
    │                                             /
    │                                            /
 10%│                              • (Kink Point @ 80% Utilization)
    │                             /
  2%│____________________________/ (Slope 1: Moderate Growth)
    └────────────────────────────┴─────────────────▶
    0%                          80%               100% Utilization (U)`}
              </pre>
            </div>
          </div>

          {/* SECTION 12: Yield Farming */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 12</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Yield Farming, Liquidity Mining & APY vs APR
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">12.1 Yield Aggregation Lifecycle</h4>
              <p>
                Yield farming incentivizes early liquidity by distributing governance tokens to liquidity providers who stake their LP tokens:
              </p>
              <div className="p-3 bg-neutral-100 rounded-lg font-mono text-xs text-neutral-800">
                Deposit Token A + Token B ──▶ Receive LP Token ──▶ Stake in MasterChef Farm ──▶ Harvest Governance Tokens
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">12.2 APR vs Compounded APY</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">APR (Annual Percentage Rate)</span>
                  <span className="text-neutral-600">Simple linear non-compounded annual yield:</span>
                  <code className="text-amber-700 font-mono block mt-1">APR = (Annual Rewards / Deposit) * 100</code>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">APY (Annual Percentage Yield)</span>
                  <span className="text-neutral-600">Compounded return accounting for reinvested harvests:</span>
                  <code className="text-green-700 font-mono block mt-1">APY = (1 + r/n)^n - 1</code>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 13: Liquidity Provision */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 13</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Liquidity Provision & LP Share Accounting
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                When an LP deposits assets into a constant product pool, they receive newly minted LP tokens
                representing their fractional ownership of the pool's total reserves:
              </p>
              <div className="p-3 bg-neutral-900 text-neutral-200 rounded-lg font-mono text-xs">
                Initial LP Mint: lpTokens = sqrt(amountA * amountB)<br />
                Subsequent Mints: lpTokens = min((amountA * totalLP) / reserveA, (amountB * totalLP) / reserveB)
              </div>
            </div>
          </div>

          {/* SECTION 14: Impermanent Loss */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 14</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Impermanent Loss Mathematical Derivation
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">14.1 Closed-Form Impermanent Loss Formula</h4>
              <p>
                For a 50/50 Constant Product Pool, let <code className="font-mono text-xs font-bold">r = P_new / P_initial</code> be the price divergence ratio:
              </p>
              <div className="p-4 bg-neutral-900 text-white rounded-xl font-mono text-center text-sm sm:text-base">
                IL = (2 * sqrt(r)) / (1 + r) - 1
              </div>

              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Price Change Multiple (r)</th>
                      <th className="p-3 border-b border-neutral-200">Impermanent Loss Percentage</th>
                      <th className="p-3 border-b border-neutral-200">Required Fee Yield to Break Even</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600 font-mono">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1.25x (+25%)</td>
                      <td className="p-3 text-amber-700">-0.60%</td>
                      <td className="p-3">+0.60%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1.50x (+50%)</td>
                      <td className="p-3 text-amber-700">-2.02%</td>
                      <td className="p-3">+2.06%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">2.00x (+100%)</td>
                      <td className="p-3 text-red-700 font-bold">-5.72%</td>
                      <td className="p-3">+6.07%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">3.00x (+200%)</td>
                      <td className="p-3 text-red-700 font-bold">-13.40%</td>
                      <td className="p-3">+15.47%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">5.00x (+400%)</td>
                      <td className="p-3 text-red-700 font-bold">-25.46%</td>
                      <td className="p-3">+34.16%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 15: Flash Loans */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 15</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Flash Loans & Atomic Execution
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">15.1 Zero-Collateral Borrowing</h4>
              <p>
                A <strong>flash loan</strong> is an uncollateralized loan that must be borrowed and fully repaid with fees
                (e.g., 0.05% on Aave or 0% on Balancer) within the exact same atomic blockchain transaction:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`Borrow 100,000 USDC ──▶ Execute Swaps / Liquidations ──▶ Repay 100,050 USDC
        │                                                          │
        └────── IF REPAYMENT FAILS ──▶ TRANSACTION REVERTS ────────┘`}
              </pre>
            </div>
          </div>

          {/* SECTION 16: Composability */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 16</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Composability & "Money Legos"
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                <strong>Composability</strong> allows developers to combine existing open-source protocols as building blocks.
                However, composability creates <em>systemic risk cascades</em>: if Protocol C has a bug or oracle failure,
                it can trigger liquidation cascades in Protocol B and solvency failure in Protocol A.
              </p>
            </div>
          </div>

          {/* SECTION 17: Risk Management */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 17</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DeFi Risk Management Framework
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Risk Vector</th>
                      <th className="p-3 border-b border-neutral-200">Failure Mechanism</th>
                      <th className="p-3 border-b border-neutral-200">Engineering Mitigation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Smart Contract Risk</td>
                      <td className="p-3">Logical bugs, reentrancy, integer errors</td>
                      <td className="p-3">Multiple audits, formal verification, fuzz testing</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Oracle Risk</td>
                      <td className="p-3">Spot price manipulation via flash loans</td>
                      <td className="p-3">Decentralized oracles (Chainlink) + geometric TWAPs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Liquidity Risk</td>
                      <td className="p-3">100% utilization prevents user withdrawals</td>
                      <td className="p-3">Kinked interest rate curves with steep slopes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Governance Risk</td>
                      <td className="p-3">Hostile takeover of treasury or parameters</td>
                      <td className="p-3">Timelocks, voting quorums, guardian veto multisig</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Bridge Risk</td>
                      <td className="p-3">Cross-chain relayer compromise</td>
                      <td className="p-3">Avoid wrapping assets across centralized multisig bridges</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 18: DAO Governance */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 18</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DAO Governance Architectures & Timelocks
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                Decentralized Autonomous Organizations (DAOs) control protocol parameters, risk thresholds, and smart contract upgrades:
              </p>
              <div className="p-3 bg-neutral-900 text-neutral-200 rounded-lg font-mono text-xs">
                Proposal Created ──▶ Historical Block Snapshot ──▶ Voting Period (7 Days) ──▶ Timelock Delay (48 Hours) ──▶ On-Chain Execution
              </div>
              <p className="text-xs text-neutral-600">
                <strong>Why Historical Snapshots Matter:</strong> Using token balance checkpoints from the proposal creation block
                prevents attackers from borrowing voting tokens via flash loans to pass malicious proposals.
              </p>
            </div>
          </div>

          {/* SECTION 19: Security Considerations */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 19</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DeFi Security Considerations & Audit Standards
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Reentrancy Protection</span>
                  <p className="text-neutral-600">Always apply the Checks-Effects-Interactions (CEI) pattern and inherit OpenZeppelin's <code className="font-mono">ReentrancyGuard</code> (<code className="font-mono">nonReentrant</code>).</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Integer Normalization</span>
                  <p className="text-neutral-600">Solidity has no floats. Handle decimal discrepancies explicitly (e.g. USDC with 6 decimals vs ETH with 18 decimals) and multiply before dividing.</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">MEV Sandwich Mitigation</span>
                  <p className="text-neutral-600">Enforce tight slippage limits (<code className="font-mono">minAmountOut</code>) and block deadlines, and recommend private mempool relays (Flashbots Protect).</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Static & Fuzz Testing</span>
                  <p className="text-neutral-600">Utilize static analysis tools (Slither, Mythril) and invariant fuzz testing engines (Foundry, Echidna) to verify property conservation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


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


      {/* ------------------------------------------------------------- */}
      {/* TAB 4: KNOWLEDGE CHECK & INTERVIEW PREPARATION                */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "assessment" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Knowledge & Career Readiness
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                20 Multiple Choice Questions • 16 Senior Architect Interviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              DeFi Protocol Mastery Assessment & Interview Prep
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Validate your deep understanding of automated market makers, constant product equations,
              overcollateralization mathematics, Health Factor liquidations, impermanent loss, flash loans, and DeFi security.
              Test yourself against 20 rigorous conceptual MCQs and prepare for technical interviews with 16 senior Web3 DeFi architect scenarios.
            </p>
          </div>

          {/* SECTION 1: 20 MULTIPLE CHOICE QUESTIONS */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 1</span>
                <h3 className="text-xl font-bold text-neutral-900">DeFi Conceptual Mastery Quiz</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-full font-bold">
                  Score: {quizScore} / {QUIZ_QUESTIONS.length} ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                </span>
                <button
                  onClick={handleResetQuiz}
                  className="px-3 py-1 text-xs border border-neutral-300 hover:bg-neutral-50 rounded-lg text-neutral-700 transition"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userAns = selectedQuizAnswers[q.id];
                const isAnswered = userAns !== undefined;
                const isCorrect = userAns === q.ans;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition ${
                      isAnswered
                        ? isCorrect
                          ? "border-green-300 bg-green-50/20"
                          : "border-red-300 bg-red-50/20"
                        : "border-neutral-200 bg-neutral-50/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                        <span className="text-amber-600 mr-1.5">{idx + 1}.</span> {q.question}
                      </h4>
                      {isAnswered && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded font-mono ${
                          isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {isCorrect ? "Correct ✓" : "Incorrect ✗"}
                        </span>
                      )}
                    </div>

                    <div className="mt-3 space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700";

                        if (isAnswered) {
                          if (optIdx === q.ans) {
                            btnStyle = "border-green-500 bg-green-50 text-green-900 font-semibold";
                          } else if (optIdx === userAns) {
                            btnStyle = "border-red-500 bg-red-50 text-red-900";
                          } else {
                            btnStyle = "border-neutral-200 bg-white opacity-60 text-neutral-500";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                            className={`w-full text-left p-3 text-xs rounded-lg border transition flex items-center gap-3 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono text-[10px] shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-neutral-200 text-xs text-neutral-600 leading-relaxed">
                        <strong className="text-neutral-900 block mb-0.5 font-mono text-[11px] uppercase tracking-wide">
                          Architect Explanation:
                        </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: 16 SENIOR ARCHITECT INTERVIEW SCENARIOS */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 2</span>
                <h3 className="text-xl font-bold text-neutral-900">
                  Senior Web3 DeFi Architect Interview Scenarios (16 Questions)
                </h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Staff / Lead Protocol Roles
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Study these in-depth interview questions curated from technical screens at leading decentralized exchanges,
              lending protocols, and security auditing firms. Toggle each accordion to analyze the model answer and key takeaways.
            </p>

            <div className="space-y-4">
              {INTERVIEW_QUESTIONS.map((item, idx) => {
                const isOpen = openInterviewId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border border-neutral-200 rounded-xl overflow-hidden transition bg-white"
                  >
                    <button
                      onClick={() => setOpenInterviewId(isOpen ? null : item.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-neutral-50/60 transition"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                          Question {idx + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900">{item.q}</h4>
                        <div className="text-xs text-neutral-500 font-mono">
                          Scenario: {item.scenario}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 shrink-0 font-bold px-2 py-1 rounded bg-neutral-100">
                        {isOpen ? "Hide ▲" : "Answer ▼"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="p-4 sm:p-6 border-t border-neutral-200 bg-neutral-50/50 space-y-4">
                        <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-line font-sans">
                          {item.answer}
                        </div>

                        {item.keyTakeaways && (
                          <div className="pt-3 border-t border-neutral-200">
                            <span className="text-[10px] uppercase font-bold text-neutral-500 font-mono tracking-wider block mb-2">
                              Key Architectural Takeaways:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.keyTakeaways.map((takeaway, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-xs px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 font-medium"
                                >
                                  ✓ {takeaway}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}


      {/* ------------------------------------------------------------- */}
      {/* TAB 5: MASTERY TRACKER & LEARNING RESOURCES                   */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "tracker" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Competency Matrix
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                26 Verified Objectives • LocalStorage Persistence
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Module 16 Competency Tracker & Curated Resources
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Track your mastery across all 26 core architectural competencies of Module 16.
              Your progress is saved locally in your browser. Complete every objective to graduate to
              advanced smart contract security auditing and capstone protocol development.
            </p>

            {/* Progress Bar & Actions */}
            <div className="mt-6 p-4 sm:p-6 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Overall Completion Progress
                </span>
                <span className="text-xs font-mono font-bold text-amber-700">
                  {completedCount} / {CHECKLIST_ITEMS.length} Objectives Completed ({progressPercentage}%)
                </span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-amber-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
                <button
                  onClick={handleMarkAllChecklist}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition"
                >
                  Mark All Complete
                </button>
                <button
                  onClick={handleResetChecklist}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-white text-neutral-700 transition"
                >
                  Reset Progress
                </button>
              </div>
            </div>
          </div>

          {/* 26-OBJECTIVE CHECKLIST GRID */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 border-b border-[#e7e3da] pb-3">
              Core Competencies Checklist (26 Items)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {CHECKLIST_ITEMS.map((item, idx) => {
                const isChecked = !!checklistProgress[idx];
                return (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition cursor-pointer text-xs leading-relaxed ${
                      isChecked
                        ? "border-green-300 bg-green-50/30 text-green-950 font-medium"
                        : "border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 text-neutral-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleChecklist(idx)}
                      className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 border-neutral-300"
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* MODULE SUMMARY & CENTRAL ENGINEERING PRINCIPLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Module Recap</span>
              <h3 className="text-xl font-bold text-neutral-900">Module 16 Architectural Summary</h3>
              <div className="text-xs sm:text-sm text-neutral-700 space-y-3 leading-relaxed">
                <p>
                  Module 16 establishes the complete technical and economic foundation of decentralized finance.
                  You have explored how smart contracts implement non-custodial financial services across automated market makers,
                  pooled lending markets, and yield strategies.
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-neutral-600">
                  <li><strong>Automated Market Makers:</strong> Constant product math (<code className="font-mono">x * y = k</code>) replaces order books with pooled liquidity.</li>
                  <li><strong>Lending & Collateral:</strong> Overcollateralization and Health Factor triggers protect protocols from bad debt.</li>
                  <li><strong>Capital Efficiency:</strong> Flash loans provide single-transaction uncollateralized capital for arbitrage and self-liquidation.</li>
                  <li><strong>Impermanent Loss:</strong> Divergence curves quantify the opportunity cost of LPing against market price shifts.</li>
                  <li><strong>Composability:</strong> Open protocols assemble like Money Legos to create complex synthetic products.</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50/50 rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Core Axiom</span>
              <h3 className="text-xl font-bold text-amber-950">Central Engineering Principle</h3>
              <blockquote className="p-4 bg-white/80 rounded-xl border-l-4 border-amber-600 text-xs sm:text-sm italic text-amber-900 leading-relaxed">
                "DeFi developers must understand both smart contract programming and the financial mathematics governing the protocol.
                Correct code alone is not enough to create a secure financial system."
              </blockquote>
              <p className="text-xs text-amber-800 leading-relaxed">
                A protocol can have 100% test coverage and zero Solidity runtime errors, yet be completely drained within seconds
                if its economic invariants, oracle pricing feeds, or liquidation parameters fail under extreme market conditions.
              </p>
            </div>
          </div>

          {/* OFFICIAL LEARNING RESOURCES */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Curated Technical Links</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Recommended Learning Resources</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Ethereum Developer Documentation", url: "https://ethereum.org/en/developers/docs/", desc: "Smart contracts, EVM execution environment, and blockchain state machine fundamentals." },
                { title: "Uniswap Protocol Technical Docs", url: "https://docs.uniswap.org/", desc: "Constant product math, v2/v3 AMM mechanics, router contracts, and concentrated liquidity." },
                { title: "Aave Protocol Documentation", url: "https://aave.com/docs", desc: "Decentralized money markets, aTokens, variable/stable debt, and liquidation mechanics." },
                { title: "OpenZeppelin Contracts Library", url: "https://docs.openzeppelin.com/contracts/", desc: "Audited ERC-20, SafeERC20, ReentrancyGuard, and Governor governance contracts." },
                { title: "Foundry Book & Testing Suite", url: "https://getfoundry.sh/", desc: "High-performance Solidity unit testing, property fuzzing, and invariant verification." },
                { title: "OWASP Smart Contract Security", url: "https://scs.owasp.org/", desc: "Top 10 DeFi smart contract vulnerabilities, attack vectors, and defensive patterns." }
              ].map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-neutral-200 hover:border-amber-500 hover:bg-amber-50/30 transition group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-neutral-900 group-hover:text-amber-800 transition">
                      {res.title} ↗
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-snug">{res.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 mt-3 block truncate">
                    {res.url.replace("https://", "")}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}


        {/* Bottom Pagination & Module Navigation */}
        <div className="pt-8 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/learning/blockchain/ipfs-storage"
            className="p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-start"
          >
            <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
              ← Previous Module
            </span>
            <span className="text-sm font-bold text-neutral-900 mt-1">
              Module 15: IPFS & Decentralized Storage
            </span>
          </Link>

          <Link
            to="/learning/blockchain/dex-lending"
            className="p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-end text-right"
          >
            <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
              Next Module →
            </span>
            <span className="text-sm font-bold text-neutral-900 mt-1">
              Module 17: Decentralized Exchanges & Lending Protocols
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
