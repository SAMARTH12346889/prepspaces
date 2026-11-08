// projectx/src/Componets/BlockchainDEXLending.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import ModuleNav from "./ModuleNav";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRightLeft,
  TrendingDown,
  AlertTriangle,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Cpu
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = [
  {
    "id": "m17-obj-1",
    "label": "Design a decentralized exchange architecture (Factory, Pair, Router, Frontend)."
  },
  {
    "id": "m17-obj-2",
    "label": "Compare order book and AMM-based exchanges across 8 operational dimensions."
  },
  {
    "id": "m17-obj-3",
    "label": "Derive and implement the constant product formula (x * y = k) with integer arithmetic."
  },
  {
    "id": "m17-obj-4",
    "label": "Analyze Uniswap V2 pair contracts, token ordering, and TWAP reserve accumulation."
  },
  {
    "id": "m17-obj-5",
    "label": "Calculate initial LP minting (geometric mean) and subsequent proportional LP accounting."
  },
  {
    "id": "m17-obj-6",
    "label": "Understand Uniswap V3 concentrated liquidity, tick spacing, and virtual reserves."
  },
  {
    "id": "m17-obj-7",
    "label": "Derive token amounts across Uniswap V3 Regions A (below), B (in-range), and C (above)."
  },
  {
    "id": "m17-obj-8",
    "label": "Implement token swap execution lifecycle with strict slippage and deadline protection."
  },
  {
    "id": "m17-obj-9",
    "label": "Distinguish price impact from transaction slippage and analyze MEV sandwich vectors."
  },
  {
    "id": "m17-obj-10",
    "label": "Design multi-hop swap routing algorithms (BFS/Dijkstra) and atomic call execution."
  },
  {
    "id": "m17-obj-11",
    "label": "Design lending pool architecture with reserve configurations, supply/borrow caps, and LTV."
  },
  {
    "id": "m17-obj-12",
    "label": "Understand Compound V2 cToken exchange-rate accounting and Comptroller validation."
  },
  {
    "id": "m17-obj-13",
    "label": "Understand Aave V3 aToken rebasing, variable/stable debt tokens, and isolation modes."
  },
  {
    "id": "m17-obj-14",
    "label": "Calculate asset-weighted collateral factors, borrowing power, and LTV boundaries."
  },
  {
    "id": "m17-obj-15",
    "label": "Formulate and evaluate borrower Health Factors (HF) with 18-decimal fixed-point precision."
  },
  {
    "id": "m17-obj-16",
    "label": "Model liquidation thresholds, close factors, liquidation bonuses, and bad debt risks."
  },
  {
    "id": "m17-obj-17",
    "label": "Integrate Chainlink price feeds with heartbeat, timestamp freshness, and decimal scaling."
  },
  {
    "id": "m17-obj-18",
    "label": "Implement lending pool interest accrual using global cumulative borrow/supply indices."
  },
  {
    "id": "m17-obj-19",
    "label": "Analyze flash loan execution lifecycle, callback interfaces, and zero-collateral arbitrage."
  },
  {
    "id": "m17-obj-20",
    "label": "Execute multi-dimensional DeFi protocol risk analysis across 8 vulnerability classes."
  },
  {
    "id": "m17-obj-21",
    "label": "Perform collateral crash stress testing (e.g. 40% ETH drawdown HF collapse)."
  },
  {
    "id": "m17-obj-22",
    "label": "Enforce Checks-Effects-Interactions (CEI), SafeERC20, and actual balance reconciliation."
  },
  {
    "id": "m17-obj-23",
    "label": "Develop ExchangePool.sol with constant-product AMM, getAmountOut, and swapAForB."
  },
  {
    "id": "m17-obj-24",
    "label": "Develop LendingPool.sol with deposit, borrow, repay, and available liquidity accounting."
  },
  {
    "id": "m17-obj-25",
    "label": "Implement CollateralManager.sol with position authorization and Health Factor validation."
  },
  {
    "id": "m17-obj-26",
    "label": "Execute comprehensive automated unit test suites for exchange and lending pools."
  },
  {
    "id": "m17-obj-27",
    "label": "Verify exchange and lending invariant tests against mathematical properties."
  },
  {
    "id": "m17-obj-28",
    "label": "Deliver Advanced Capstone: Integrated Decentralized Exchange & Collateralized Lending DApp."
  }
];
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "question": "In Uniswap V2, why does the pair contract mandate strict token address ordering (token0 < token1)?",
    "options": [
      "To reduce gas costs by sorting calldata alphabetically",
      "To prevent the creation of duplicate pools for the same pair and guarantee deterministic CREATE2 addresses",
      "To ensure higher-priced tokens are always indexed as token0",
      "To enforce that only ERC-20 tokens with 18 decimals can be deployed"
    ],
    "answer": 1,
    "explanation": "Token ordering guarantees that for any token pair (e.g., WETH and USDC), exactly one unique pair contract exists in the Factory registry regardless of which token is passed first into createPair. It also enables deterministic CREATE2 deployment."
  },
  {
    "id": 2,
    "question": "When swapping 1 ETH in an AMM containing 10 ETH and 20,000 USDC with zero fee, what is the exact output of USDC received?",
    "options": [
      "2,000.00 USDC",
      "1,818.18 USDC",
      "1,909.09 USDC",
      "1,997.00 USDC"
    ],
    "answer": 1,
    "explanation": "Initial invariant k = 10 * 20,000 = 200,000. New x' = 10 + 1 = 11 ETH. New y' = 200,000 / 11 = 18,181.81818 USDC. Output \u0394y = 20,000 - 18,181.81818 = 1,818.18182 USDC."
  },
  {
    "id": 3,
    "question": "In the fee-adjusted constant product formula with a 0.3% trading fee (f = 0.003), how is integer precision maintained in Solidity?",
    "options": [
      "By casting amounts to float64 before dividing",
      "By computing amountInWithFee = amountIn * 997 and denominator = reserveIn * 1000 + amountIn * 997",
      "By dividing amountIn by 1003 before multiplying by reserveOut",
      "By storing fees in a separate off-chain database"
    ],
    "answer": 1,
    "explanation": "Because EVM lacks native floating-point math, 1 - 0.003 = 0.997 is represented as 997/1000. Multiplying the numerator by 997 and the denominator base by 1000 preserves precision without rounding loss."
  },
  {
    "id": 4,
    "question": "Why does Uniswap V2 permanently burn MINIMUM_LIQUIDITY (1,000 wei) of LP tokens to address(0) during initial pool creation?",
    "options": [
      "To pay protocol initialization taxes to the factory deployer",
      "To prevent the first liquidity provider from exploiting the pool via an LP share inflation attack",
      "To ensure the pool can never run out of gas during rebalancing",
      "To calibrate the initial spot price to exactly 1.0001"
    ],
    "answer": 1,
    "explanation": "Burning 1,000 wei of LP tokens ensures the total LP token supply is never zero and prevents an attacker from donating tokens to inflate the LP share price to astronomical levels, which would cause rounding down to zero for subsequent depositors."
  },
  {
    "id": 5,
    "question": "In Uniswap V3 concentrated liquidity, what happens to an LP position if the market price rises above the upper price bound (P > Pb)?",
    "options": [
      "The position automatically liquidates and sends ETH to the owner",
      "The position earns double fees due to higher volatility",
      "The position becomes entirely composed of Token 1 (the depreciated asset) and stops earning trading fees",
      "The position switches into an automated limit order on the lower bound"
    ],
    "answer": 2,
    "explanation": "As price rises past Pb, traders continuously swap Token 1 into the pool in exchange for Token 0 until all Token 0 in the position is exhausted. The position becomes 100% Token 1, goes out of range, and earns zero fees until price drops back into range."
  },
  {
    "id": 6,
    "question": "What is the primary architectural difference between price impact and slippage?",
    "options": [
      "Price impact is caused by transaction latency; slippage is caused by fee tiers",
      "Price impact is the deterministic price movement caused by trade size relative to pool depth; slippage is the unexpected difference between quote and execution due to concurrent block activity",
      "Price impact applies only to order books; slippage applies only to AMMs",
      "Price impact is refundable via the Router; slippage is permanently lost"
    ],
    "answer": 1,
    "explanation": "Price impact is the mathematical consequence of walking the AMM bonding curve with a given order size. Slippage encompasses execution variance caused by trades confirmed ahead of the user in the same or previous blocks."
  },
  {
    "id": 7,
    "question": "In Compound V2, how do liquidity suppliers earn interest on their deposited assets?",
    "options": [
      "Their cToken wallet balance increases every block",
      "The protocol air-drops governance COMP tokens daily",
      "The cToken exchange rate increases over time, making each cToken redeemable for more underlying assets",
      "Borrowers transfer interest directly to depositors' wallets"
    ],
    "answer": 2,
    "explanation": "In Compound V2, a supplier's cToken balance remains static. As borrowers pay interest into the pool, total underlying assets increase while total cTokens remain constant, monotonically driving up the Exchange Rate = (Cash + Borrows - Reserves) / cTokenSupply."
  },
  {
    "id": 8,
    "question": "How does Aave V3 represent a supplier's accruing interest compared to Compound V2?",
    "options": [
      "Aave uses rebasing aTokens where the wallet balance grows continuously with the liquidity index",
      "Aave pays interest only in ETH regardless of the supplied token",
      "Aave requires users to manually execute a claimYield() transaction every hour",
      "Aave locks interest in a multi-signature treasury for 1 year"
    ],
    "answer": 0,
    "explanation": "Aave's aTokens are rebasing tokens: balanceOf(user) dynamically multiplies the user's stored scaled balance by the pool's current global liquidity index, so 1 aUSDC remains pegged 1:1 with 1 USDC while the token count in the wallet grows."
  },
  {
    "id": 9,
    "question": "A borrower deposits $10,000 worth of ETH into a lending protocol with a Liquidation Threshold of 80% and borrows $6,000 USDC. What is their Health Factor?",
    "options": [
      "0.75",
      "1.20",
      "1.3333",
      "1.6667"
    ],
    "answer": 2,
    "explanation": "Health Factor = (Collateral * LiquidationThreshold) / TotalDebt = ($10,000 * 0.80) / $6,000 = $8,000 / $6,000 = 1.3333. Because HF > 1.0, the loan is solvent."
  },
  {
    "id": 10,
    "question": "If the borrower's ETH collateral drops from $10,000 to $7,000 while debt remains $6,000 (LT = 80%), what is the new Health Factor and status?",
    "options": [
      "HF = 1.05; Safe",
      "HF = 0.9333; Eligible for liquidation",
      "HF = 0.80; Insolvent with zero collateral remaining",
      "HF = 1.1667; Warning level"
    ],
    "answer": 1,
    "explanation": "New HF = ($7,000 * 0.80) / $6,000 = $5,600 / $6,000 = 0.9333. Since HF < 1.0, the position has breached its liquidation threshold and is immediately eligible for liquidation."
  },
  {
    "id": 11,
    "question": "What is the purpose of the 'Close Factor' in lending protocols like Compound and Aave?",
    "options": [
      "To specify the interest rate charged when a pool closes at midnight",
      "To cap the maximum percentage of outstanding debt a liquidator can repay in a single transaction (e.g. 50%)",
      "To prevent flash loans from accessing the reserve",
      "To set the fee paid to Chainlink node operators"
    ],
    "answer": 1,
    "explanation": "The Close Factor (typically 50%) limits how much debt a liquidator can repay in one go. This prevents a borrower from having their entire collateral liquidated during a temporary price spike and reduces liquidation cascade shock."
  },
  {
    "id": 12,
    "question": "If a liquidator repays $2,000 of debt for a liquidated borrower where the protocol offers a 5% liquidation bonus, what value of collateral does the liquidator seize?",
    "options": [
      "$2,000",
      "$2,050",
      "$2,100",
      "$2,200"
    ],
    "answer": 2,
    "explanation": "Collateral Seized = Debt Repaid * (1 + Liquidation Bonus) = $2,000 * 1.05 = $2,100. The extra $100 serves as the liquidator's economic incentive to execute the liquidation and protect protocol solvency."
  },
  {
    "id": 13,
    "question": "When reading a Chainlink price feed with 8 decimals returning 200000000000 for ETH/USD, how must a contract normalize it for 18-decimal debt accounting?",
    "options": [
      "Divide by 10^10",
      "Multiply by 10^10",
      "Multiply by 10^8",
      "No conversion is necessary because uint256 ignores decimals"
    ],
    "answer": 1,
    "explanation": "To scale from 8 decimals to 18 decimals, the price must be multiplied by 10^(18 - 8) = 10^10. 200,000,000,000 * 10^10 = 2,000 * 10^18."
  },
  {
    "id": 14,
    "question": "Why is relying on a DEX pool's instantaneous spot price as an oracle for a lending protocol dangerous?",
    "options": [
      "DEX spot prices are updated only once per day",
      "An attacker can manipulate the spot price within a single atomic transaction using a flash loan and drain the lending pool",
      "DEX contracts cannot be called by external lending contracts",
      "Spot prices require off-chain signatures to be read"
    ],
    "answer": 1,
    "explanation": "Because AMM spot prices reflect the immediate ratio of reserves, an attacker can borrow millions in a flash loan, execute a massive swap to drastically distort the AMM price, borrow against the artificially inflated collateral in the lending pool, and repay the flash loan in the same transaction."
  },
  {
    "id": 15,
    "question": "What core EVM mechanism enables flash loans to guarantee zero default risk for the lending pool?",
    "options": [
      "EVM state changes atomically revert if the callback transaction fails to return borrowed tokens plus fees",
      "Borrowers must deposit a legal escrow contract before calling flashLoan",
      "Flash loans are underwritten by the Ethereum Foundation validator pool",
      "The lender signs a multisig insurance policy prior to block inclusion"
    ],
    "answer": 0,
    "explanation": "If the flash loan receiver does not approve or return the borrowed funds plus the protocol fee before execution ends, the contract triggers a revert. In the EVM, a revert rolls back all state changes within the transaction as if it never occurred."
  },
  {
    "id": 16,
    "question": "In a sandwich attack on a decentralized exchange, what does the attacker's front-run transaction do?",
    "options": [
      "Cancels the victim's transaction in the mempool",
      "Buys the target asset before the victim, driving the price up to the victim's maximum slippage boundary",
      "Drains the LP tokens from the Factory contract",
      "Votes to shut down the DEX router"
    ],
    "answer": 1,
    "explanation": "The sandwich attacker front-runs the victim with a buy order, pushing the price up to the edge of the victim's slippage limit. The victim's order executes at the worse price, pushing it higher still, and the attacker immediately back-runs by selling at the peak for a guaranteed profit."
  },
  {
    "id": 17,
    "question": "How does global borrow index tracking eliminate the need for O(n) loops over all borrowers when interest accrues?",
    "options": [
      "It forces all borrowers to pay their interest at midnight UTC",
      "It computes UserDebt = Principal * (CurrentIndex / UserIndex) on-demand whenever a user interacts with the pool",
      "It offloads debt tracking to an external Chainlink keeper bot",
      "It resets all loan balances to zero when utilization exceeds 90%"
    ],
    "answer": 1,
    "explanation": "By maintaining a single cumulative borrow index updated over elapsed time, each user's debt is lazily evaluated only when they deposit, borrow, or repay: UserDebt = Principal * (CurrentBorrowIndex / UserSnapshotIndex)."
  },
  {
    "id": 18,
    "question": "Why should a production AMM pair contract check actual token balances with token.balanceOf(address(this)) rather than solely tracking internal reserve variables?",
    "options": [
      "To detect direct token transfers, balance skimming, fee-on-transfer tokens, and enforce invariant k against true holdings",
      "Because ERC-20 tokens delete internal reserves every 256 blocks",
      "Because Solidity private variables cannot be accessed by external callers",
      "To bypass EVM reentrancy locks"
    ],
    "answer": 0,
    "explanation": "Direct token donations, fee-on-transfer tokens, or rebasing tokens can alter actual contract balances without triggering swap functions. Verifying balance0 * balance1 >= reserve0 * reserve1 prevents balance-sync desynchronization vulnerabilities."
  },
  {
    "id": 19,
    "question": "In multi-hop routing (e.g. Token A -> Token B -> Token C), how must the input amount for the second hop be determined?",
    "options": [
      "Using a pre-calculated fixed estimate from the user's frontend",
      "Using the exact output amount returned by the first hop (amountOut1)",
      "By taking the average price across all DEX pools",
      "By dividing the initial amountIn by the number of hops"
    ],
    "answer": 1,
    "explanation": "Multi-hop routing chains outputs sequentially. The exact output of Token B from Pool A/B becomes the exact input into Pool B/C. If any pool produces less than expected, the router verifies minimum output constraints across the entire route."
  },
  {
    "id": 20,
    "question": "What is the primary role of the Comptroller contract in Compound V2?",
    "options": [
      "It mints ERC-20 governance tokens for miners",
      "It serves as the risk engine that verifies collateral factors, account liquidity, and liquidation eligibility before operations execute",
      "It manages the frontend CSS styles and DNS records",
      "It executes off-chain order book matching for limit orders"
    ],
    "answer": 1,
    "explanation": "The Comptroller is Compound's central risk orchestrator. Whenever a user attempts to borrow, redeem, or transfer cTokens, the market calls the Comptroller to verify whether the account has sufficient collateral value and meets protocol risk rules."
  }
];
const INTERVIEW_QUESTIONS = [
  {
    "id": 1,
    "question": "Explain the architecture of a decentralized exchange. What are the key components and their respective responsibilities?",
    "answer": "A production DEX separates user coordination from core financial custody and invariants across four key layers:\n1. Factory Contract: Acts as the central registry and deployer of trading pools. It maintains a mapping of (token0, token1) -> pairAddress, enforces token ordering (token0 < token1), prevents duplicate pools, and uses deterministic CREATE2 for gas-efficient pair lookups without state reads.\n2. Pair Contract: Holds the physical token reserves, enforces the constant product invariant (x * y >= k), computes swaps, mints/burns LP receipt tokens, records cumulative prices for TWAP oracles, and strictly implements reentrancy protection.\n3. Router Contract: The stateless user-facing facade. It handles multi-hop routing, token approvals/transfers, slippage bounds (amountOutMin), transaction deadlines, and ETH/WETH wrapping/unwrapping. It never holds permanent liquidity.\n4. Frontend DApp & Oracles: Provides quotes, estimates price impact, tracks wallet balances, and signs transactions via injected providers (MetaMask).",
    "takeaway": "Separation of concerns: The router coordinates transactions and enforces user safety parameters, while the pair contract enforces mathematical invariants and token custody."
  },
  {
    "id": 2,
    "question": "What is the fundamental difference between an Order Book exchange and an Automated Market Maker (AMM)?",
    "answer": "An Order Book exchange matches discrete buy orders (bids) and sell orders (asks) submitted by traders at specific limit prices. It requires active market makers to continuously post liquidity and a matching engine that sorts and pairs orders. While order books provide precise price control and minimal price impact for small orders, running matching engines and order cancellations on-chain is prohibitively expensive in gas.\n\nIn contrast, an AMM replaces individual counterparties with a shared pooled liquidity reserve. Pricing is governed deterministically by a mathematical curve (such as x * y = k). Traders execute swaps directly against the pool, and prices adjust automatically based on reserve ratios. AMMs enable completely passive, permissionless liquidity provision and low on-chain computation, though they introduce slippage and impermanent loss for liquidity providers.",
    "takeaway": "Order books require active market makers and high throughput; AMMs trade against passive algorithmic pools with deterministic mathematical pricing."
  },
  {
    "id": 3,
    "question": "Derive the constant product formula for token swaps and explain how trading fees are incorporated.",
    "answer": "In a constant product AMM, reserves x and y must satisfy x * y = k. When a trader deposits \u0394x of Token A to receive \u0394y of Token B:\n1. Without fees: The new reserves are (x + \u0394x)(y - \u0394y) = k = x * y.\nExpanding: x*y - x*\u0394y + \u0394x*y - \u0394x*\u0394y = x*y.\nRearranging: y*\u0394x = \u0394y*(x + \u0394x)  ==>  \u0394y = (y * \u0394x) / (x + \u0394x).\n\n2. With a fee rate f (e.g. 0.3% so f = 0.003, or 997/1000 effective input):\nOnly \u0394x_effective = \u0394x * (1 - f) enters the pool for pricing:\n(x + \u0394x * (1 - f))(y - \u0394y) = x * y.\nSolving for \u0394y:\n\u0394y = (y * \u0394x * (1 - f)) / (x + \u0394x * (1 - f)).\nIn Solidity integer arithmetic, to prevent precision loss without floating points:\namountInWithFee = amountIn * 997;\nnumerator = amountInWithFee * reserveOut;\ndenominator = (reserveIn * 1000) + amountInWithFee;\nreturn numerator / denominator;",
    "takeaway": "Fee-free: \u0394y = (y * \u0394x) / (x + \u0394x). Fee-adjusted: Multiply \u0394x by (1000 - feeBps) in both numerator and denominator base."
  },
  {
    "id": 4,
    "question": "How does Uniswap V2 calculate swap output, and how does it prevent balance manipulation?",
    "answer": "Uniswap V2 pair contracts execute swaps in swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) through a rigorous invariant verification:\n1. The caller specifies the desired output amounts (amount0Out, amount1Out).\n2. The pair transfers the requested tokens to the recipient 'to'.\n3. If data.length > 0, the pair triggers a flash swap callback to the recipient.\n4. The pair reads its actual token balances via IERC20.balanceOf(address(this)).\n5. It calculates the deposited amounts: amount0In = balance0 > reserve0 - amount0Out ? balance0 - (reserve0 - amount0Out) : 0.\n6. It verifies the post-fee constant product invariant:\n(balance0 * 1000 - amount0In * 3) * (balance1 * 1000 - amount1In * 3) >= reserve0 * reserve1 * (1000^2).\n7. It updates stored reserves to the new balances: _update(balance0, balance1, reserve0, reserve1).",
    "takeaway": "The pair transfers tokens first, lets the caller execute logic, and verifies that the post-swap balance invariant holds using true ERC-20 balances."
  },
  {
    "id": 5,
    "question": "Explain the role and security responsibilities of the DEX Factory contract.",
    "answer": "The Factory contract is the authoritative registry of all exchange pools:\n1. Pool Deployment: Deploys new Pair contracts via CREATE2, passing token0 and token1 bytecode salt to ensure deterministic, computable addresses.\n2. Canonical Mapping: Maps getPair[tokenA][tokenB] to pairAddress. Enforces token ordering (tokenA < tokenB) so the mapping is symmetric and prevents duplicate pools for the same pair.\n3. Protocol Fee Configuration: Holds feeTo (the address collecting protocol fees) and feeToSetter (governance address authorized to alter fee settings).\n4. Immutability: Once a pair is deployed and registered, its address is immutable, preventing front-running malicious pool substitution.",
    "takeaway": "The factory prevents duplicate pools, guarantees deterministic addresses via CREATE2, and administers protocol fee parameters."
  },
  {
    "id": 6,
    "question": "What is the responsibility of a DEX Router contract, and why should it never hold permanent token reserves?",
    "answer": "The Router is a stateless helper that facilitates multi-step user transactions:\n1. Coordination: Pulls user tokens via safeTransferFrom (requiring allowance), wraps ETH to WETH, routes tokens to the respective pair contracts, and directs outputs to the recipient.\n2. Slippage Protection: Accepts amountOutMin or amountInMax arguments and reverts if pool prices deviate beyond the user's tolerance.\n3. Expiration Bounds: Accepts a deadline parameter (require(block.timestamp <= deadline)) to protect users from delayed execution by miners.\n4. Stateless Security: Because the router holds zero liquidity and zero permanent state, any vulnerability in its routing logic cannot directly compromise or drain the underlying pool reserves.",
    "takeaway": "The router coordinates user interactions and slippage checks statelessly; liquidity reserves reside exclusively in isolated pair contracts."
  },
  {
    "id": 7,
    "question": "How are LP tokens calculated for initial and subsequent liquidity providers?",
    "answer": "1. Initial Minting: When a pool is first initialized, the liquidity minted is the geometric mean of the deposited assets:\nLiquidity = sqrt(amount0 * amount1) - MINIMUM_LIQUIDITY (1,000 wei).\nBurning 1,000 wei of LP tokens permanently to address(0) locks the minimum liquidity, neutralizing the share inflation attack where an attacker deposits 1 wei and donates huge reserves to dilute future LPs.\n\n2. Subsequent Minting: For existing pools, liquidity is minted proportionally to existing reserves to preserve the pool's value per share:\nLiquidityMinted = min((amount0 * totalSupply) / reserve0, (amount1 * totalSupply) / reserve1).\nThe minimum function penalizes deposits that don't match the current reserve ratio, incentivizing balanced liquidity provision.",
    "takeaway": "Initial: sqrt(x * y) - 1000 wei burned. Subsequent: min((\u0394x / x), (\u0394y / y)) * totalSupply."
  },
  {
    "id": 8,
    "question": "Explain the concept of Uniswap V3 concentrated liquidity. How does it improve capital efficiency?",
    "answer": "In Uniswap V2, liquidity is uniformly stretched across the entire price spectrum from zero to infinity (0, \u221e). Because most trading pairs fluctuate within a bounded range (e.g., ETH/USDC trading between $1,500 and $3,000), over 90% of V2 pool capital sits idle.\n\nUniswap V3 allows LPs to concentrate their liquidity within custom price intervals [Pa, Pb]. The pool uses virtual reserves that simulate the constant product curve within that specific band:\n- When spot price P is within [Pa, Pb], the position earns full trading fees with up to 4000x greater capital efficiency (depth per dollar deposited).\n- If P rises above Pb, the position is converted 100% into Token 1 and ceases earning fees.\n- If P drops below Pa, the position is converted 100% into Token 0 and ceases earning fees.\n- Each LP position is unique and represented as an ERC-721 NFT rather than a fungible ERC-20 token.",
    "takeaway": "Concentrated liquidity bounds capital to active trading ranges [Pa, Pb], massively multiplying capital efficiency at the cost of active range risk."
  },
  {
    "id": 9,
    "question": "What is the mathematical relationship between ticks and prices in Uniswap V3?",
    "answer": "Uniswap V3 discretizes continuous price space into discrete geometric intervals called 'ticks':\nPrice P is defined as P(i) = 1.0001^i, where i is the signed integer tick index.\nEach tick represents a 1 basis point (0.01% or 0.0001) price movement because 1.0001^1 = 1.0001.\nIn smart contracts, the price is tracked as the square root of price scaled by 2^96: sqrtPriceX96 = sqrt(P) * 2^96.\nTick spacing varies by pool fee tier:\n- 0.01% fee tier (stablecoins): tick spacing = 1 (finest granularity).\n- 0.05% fee tier: tick spacing = 10.\n- 0.30% fee tier (standard pairs): tick spacing = 60.\n- 1.00% fee tier (exotic pairs): tick spacing = 200.",
    "takeaway": "Ticks index prices logarithmically: P = 1.0001^tick. Prices are stored in Q64.96 fixed-point format as sqrtPriceX96."
  },
  {
    "id": 10,
    "question": "Differentiate between price impact and transaction slippage with clear examples.",
    "answer": "1. Price Impact: The deterministic shift in the pool's spot price caused by the size of a trade relative to pool reserves. If a pool has 100 ETH and 200,000 USDC (spot price $2,000), swapping 10 ETH constitutes 10% of the pool's liquidity, shifting the curve and resulting in an effective execution price of $1,818/ETH (~9.1% price impact). Price impact exists even in an empty mempool with zero competing transactions.\n\n2. Slippage: The difference between the expected execution price quoted at the time of transaction creation and the actual execution price when the transaction is mined into a block. Slippage is caused by latency, other traders' transactions confirmed ahead of yours, or malicious MEV sandwich bots manipulating the pool reserves in the intervening time.",
    "takeaway": "Price impact is caused by order size relative to pool depth; slippage is caused by market movement and pending transactions between quote and block inclusion."
  },
  {
    "id": 11,
    "question": "How does multi-hop swap routing work in a DEX aggregator or router?",
    "answer": "When swapping between two tokens that lack a direct, liquid trading pool (e.g. Token A -> Token C), the router traverses intermediate pools (Token A -> Token B -> Token C):\n1. Graph Construction: Tokens are modeled as vertices, and liquidity pools are modeled as weighted edges where edge weight reflects fee and expected output.\n2. Path Finding: Graph algorithms such as BFS, Dijkstra, or modified Bellman-Ford find the optimal sequence of pools maximizing the final output token amount.\n3. Chained Execution: The router executes the swaps atomically. Output tokens from hop 1 (A -> B) become the exact input into hop 2 (B -> C).\n4. Atomic Validation: The router verifies the final received amount against amountOutMin. If any hop fails or if the total output breaches the user's slippage limit, the entire transaction reverts atomically.",
    "takeaway": "Multi-hop routing chains outputs sequentially through intermediate pools using graph optimization, guaranteed by atomic transaction revert."
  },
  {
    "id": 12,
    "question": "Explain Compound V2's cToken accounting and how the cToken exchange rate increases over time.",
    "answer": "In Compound V2, when a user deposits an underlying asset (e.g. USDC), they receive cTokens (cUSDC). The user's cToken balance remains static in their wallet.\nInterest accrual is captured entirely by the increasing Exchange Rate between cTokens and the underlying asset:\nExchangeRate = (totalCash + totalBorrows - totalReserves) / totalSupplyOfcTokens.\n- totalCash: The unborrowed underlying tokens held in the cToken contract.\n- totalBorrows: The total outstanding debt owed by all borrowers, plus accrued interest.\n- totalReserves: Protocol reserve cut accumulated from interest spreads.\nAs borrowers accrue and repay interest, totalBorrows increases. Consequently, the numerator increases while totalSupplyOfcTokens stays constant, driving the Exchange Rate upward monotonically. When redeeming, UnderlyingReceived = cTokenAmount * ExchangeRate.",
    "takeaway": "cToken balances stay constant while the exchange rate increases monotonically: Underlying = cTokens * ExchangeRate."
  },
  {
    "id": 13,
    "question": "Explain Aave V3's aToken and debt-token architecture. How does it contrast with Compound?",
    "answer": "Aave V3 uses rebasing tokens and decoupled debt tokens rather than an exchange-rate model:\n1. aTokens (Suppliers): 1 aUSDC is pegged 1:1 with 1 USDC. Accruing interest causes the token balance in the user's wallet to rebase upward continuously. Internally, Aave stores a scaled balance: actualBalance = scaledBalance * liquidityIndex(t). When the global liquidity index updates, every user's balanceOf() query reflects the accrued yield.\n2. Debt Tokens (Borrowers): Debt is tracked via non-transferable VariableDebtTokens (scaledDebt * borrowIndex(t)) or StableDebtTokens. Borrowers can see their exact outstanding debt directly as a token balance.\n3. Contrast: Compound uses static cToken balances with a variable exchange rate; Aave uses rebasing 1:1 aTokens with internal scaled balances.",
    "takeaway": "Aave uses 1:1 rebasing aTokens and separate debt tokens; Compound uses non-rebasing cTokens with a floating exchange rate."
  },
  {
    "id": 14,
    "question": "What is a Collateral Factor (Max LTV) and how does it determine borrowing power across multiple assets?",
    "answer": "The Collateral Factor (or Maximum Loan-to-Value, LTV) represents the maximum proportion of an asset's market value that can be borrowed against it. It is calibrated based on market volatility, liquidity, and liquidation risk.\nBorrowing Power = Collateral Value * Collateral Factor.\nFor a multi-collateral portfolio, the total borrowing power is the sum of the individual risk-weighted values:\nTotal Borrowing Power = Sum(CollateralValue_i * LTV_i).\nExample: If a user deposits $5,000 ETH (LTV 75%), $3,000 WBTC (LTV 70%), and $2,000 USDC (LTV 85%):\nBorrowing Power = ($5,000 * 0.75) + ($3,000 * 0.70) + ($2,000 * 0.85) = $3,750 + $2,100 + $1,700 = $7,550.\nThe user can borrow up to $7,550 in any supported borrowed asset.",
    "takeaway": "Total borrowing power is the asset-by-asset sum of collateral values multiplied by their respective LTV parameters."
  },
  {
    "id": 15,
    "question": "Explain the Health Factor (HF) formula and its critical risk boundaries.",
    "answer": "The Health Factor assesses loan solvency by weighting collateral against liquidation thresholds:\nHF = Sum(CollateralValue_i * LiquidationThreshold_i) / TotalDebtValue.\n- HF > 1.0: The position is solvent and healthy. Collateral value exceeds the liquidation requirements.\n- HF = 1.0: The liquidation boundary. Any further price decline of collateral or interest accumulation makes the loan unbacked.\n- HF < 1.0: The position is undercollateralized according to protocol risk rules and is immediately eligible for liquidation.\n- If debt = 0: Health Factor is infinity (represented as type(uint256).max in Solidity).\nIn smart contracts, HF is tracked using 18-decimal fixed-point math: 1.0 is represented as 1e18.",
    "takeaway": "HF = (Adjusted Collateral) / Debt. When HF < 1.0 (1e18 in code), third-party liquidators can repay debt to seize collateral."
  },
  {
    "id": 16,
    "question": "What is the difference between Collateral Factor (LTV) and Liquidation Threshold?",
    "answer": "1. Collateral Factor (Max LTV): Governs the initial borrowing limit. For example, an 75% LTV means you can borrow up to $750 against $1,000 of collateral.\n2. Liquidation Threshold: Governs when a loan becomes eligible for liquidation. For example, an 80% Liquidation Threshold means the loan is liquidated only when debt reaches 80% of collateral value.\n3. The Safety Buffer: The difference between LTV (75%) and Liquidation Threshold (80%) creates a 5% safety buffer. If LTV and Liquidation Threshold were identical, borrowing to the maximum limit would cause the loan to become immediately liquidatable upon the slightest price fluctuation or 1 block of interest accrual.",
    "takeaway": "LTV determines maximum borrow limits; Liquidation Threshold determines liquidation triggers. The gap creates a volatility safety buffer."
  },
  {
    "id": 17,
    "question": "How do price oracles operate in lending protocols, and what validations are required in production?",
    "answer": "Price oracles provide external market valuations to deterministic smart contracts. Protocols like Compound and Aave rely on Chainlink decentralized oracle networks:\nProduction validations must include:\n1. Round Data Validation: Require price > 0 and answeredInRound >= roundId to prevent using unfinalized or negative values.\n2. Freshness Check: Verify block.timestamp - updatedAt <= HEARTBEAT to ensure prices are not stale during network congestion.\n3. Decimal Normalization: Chainlink USD pairs return 8 decimals, whereas tokens use 6 or 18 decimals. The contract must normalize all values to a common baseline (typically 18 decimals) before calculating borrowing power.\n4. L2 Sequencer Uptime: On Arbitrum or Optimism, verify that the L2 Sequencer Uptime Feed is active and the grace period has elapsed after sequencer restart.",
    "takeaway": "Production oracles require validating round completion, freshness timestamps, decimal normalization, and L2 sequencer uptime."
  },
  {
    "id": 18,
    "question": "How does interest accrual work using global cumulative borrow and supply indices?",
    "answer": "Updating every individual borrower's balance every block would consume unscalable O(n) gas. Instead, lending protocols use global interest indices:\n1. Global Index Update: When an interaction occurs after time \u0394t, the pool calculates the interest rate R based on current utilization U. The borrow index is updated:\nBorrowIndex(t) = BorrowIndex(t - 1) * (1 + R * \u0394t).\n2. User Position Snapshots: When User A borrows amount P, the pool records: userPrincipal = P, userBorrowIndex = BorrowIndex(t).\n3. Lazy Evaluation: When User A returns to repay, their total debt is computed on demand:\nCurrentDebt = userPrincipal * (BorrowIndex(current) / userBorrowIndex).\nThis achieves O(1) gas complexity for interest accrual across unlimited users.",
    "takeaway": "Global cumulative indices enable lazy O(1) interest accounting without iterating over individual user accounts."
  },
  {
    "id": 19,
    "question": "Explain the flash loan execution lifecycle and why it eliminates counterparty credit risk.",
    "answer": "A flash loan allows borrowing any available pool capital without collateral, under the strict constraint that the loan plus fee is repaid in the same EVM transaction:\n1. Execution Steps:\n- User calls pool.flashLoan(receiver, token, amount, params).\n- Pool verifies liquidity and transfers the requested tokens to receiver.\n- Pool calls receiver.executeOperation(token, amount, fee, initiator, params).\n- Receiver contract executes custom logic (arbitrage, debt refinancing, collateral swap).\n- Receiver approves pool to pull (amount + fee).\n- Pool pulls repayment and verifies that final balance >= initial balance + fee.\n- If balance check fails, transaction reverts entirely.\n2. Zero Credit Risk: Counterparty default is impossible because EVM atomicity rolls back the entire call stack if repayment fails. The pool never suffers bad debt.",
    "takeaway": "Flash loans leverage EVM transaction atomicity: failure to repay in the same transaction triggers a total state rollback."
  },
  {
    "id": 20,
    "question": "How are flash loans used in arbitrage and collateral refinancing?",
    "answer": "1. Spatial Arbitrage: When a token trades at $2,000 on DEX A and $2,020 on DEX B:\n- Flash borrow 1,000,000 USDC from Aave.\n- Buy 500 ETH on DEX A for $1,000,000.\n- Sell 500 ETH on DEX B for $1,010,000.\n- Repay Aave 1,000,000 USDC + 500 USDC fee (0.05%).\n- Keep $9,500 net profit, without needing $1,000,000 in upfront capital.\n\n2. Collateral Refinancing: If a user has $10,000 ETH collateral in Compound with $5,000 debt and wants to switch to Aave for lower rates:\n- Flash borrow $5,000 USDC.\n- Repay Compound debt and withdraw $10,000 ETH collateral.\n- Deposit $10,000 ETH into Aave and borrow $5,000 USDC.\n- Repay the flash loan. All completed in a single block without closing the position.",
    "takeaway": "Flash loans democratize arbitrage and enable atomic collateral switching across protocols with zero personal capital."
  },
  {
    "id": 21,
    "question": "What are the primary differences between Compound V2 and Aave V3?",
    "answer": "1. Receipt Tokens: Compound uses non-rebasing cTokens with a floating exchange rate. Aave uses rebasing aTokens that remain 1:1 with underlying assets while balances tick up.\n2. Debt Architecture: Compound tracks debt internally per cToken contract. Aave mints dedicated debt tokens (VariableDebtToken / StableDebtToken).\n3. Risk Architecture: Compound uses a single monolithic Comptroller. Aave uses modular Pool, PoolConfigurator, and ReserveConfiguration contracts.\n4. Risk Mitigations: Aave V3 introduces advanced features like Isolation Mode (isolated debt ceilings for risky new assets), E-Mode (up to 97% LTV for correlated assets like stETH/ETH), and Supply/Borrow caps.\n5. Flash Loans: Native first-class feature in Aave with standardized receiver callbacks.",
    "takeaway": "Compound relies on cToken exchange rates and a centralized Comptroller; Aave V3 features 1:1 rebasing tokens, dedicated debt tokens, and advanced risk modes (E-Mode, Isolation)."
  },
  {
    "id": 22,
    "question": "What are the major security vulnerabilities in DEX protocols and how are they mitigated?",
    "answer": "1. MEV Sandwich Attacks: Mitigated by enforcing strict user-defined amountOutMin slippage limits and private transaction submission (Flashbots Protect).\n2. Fee-on-Transfer / Rebasing Tokens: Pair contracts that assume transferred amount == amount received can be drained. Mitigated by measuring actual balance change: amountReceived = token.balanceOf(address(this)) - balanceBefore.\n3. First Deposit Share Inflation: Solved by burning MINIMUM_LIQUIDITY (1,000 wei) of LP shares to address(0).\n4. Reentrancy in Swaps / Flash Swaps: Mitigated by applying nonReentrant modifiers and adhering strictly to the Checks-Effects-Interactions (CEI) pattern.\n5. Token Approval Griefing: Use SafeERC20 with safeIncreaseAllowance or safeApprove patterns to handle tokens like USDT that revert on non-zero re-approvals.",
    "takeaway": "Enforce slippage bounds, measure actual balance deltas, burn initial LP shares, and use SafeERC20 and reentrancy guards."
  },
  {
    "id": 23,
    "question": "How can oracle manipulation lead to catastrophic insolvency in a lending protocol?",
    "answer": "If a lending protocol relies on an illiquid AMM spot price to value collateral:\n1. An attacker borrows $50,000,000 in a flash loan.\n2. The attacker executes a massive swap in the illiquid AMM pool, driving the price of an obscure token up 1,000x.\n3. The attacker deposits a modest amount of this token into the lending protocol. The protocol evaluates the deposit at the manipulated $50,000,000 valuation.\n4. The attacker borrows the maximum possible liquid assets (ETH, USDC) from the lending pool against the inflated collateral.\n5. The attacker reverses the AMM swap, repays the flash loan, and walks away with the borrowed liquid assets, leaving the lending pool holding worthless tokens and bad debt.\nMitigation: Use decentralized Chainlink oracles with volume-weighted off-chain aggregation, or multi-hour TWAP oracles with deviation bands.",
    "takeaway": "AMM spot prices are manipulable in atomic flash loans; lending protocols must use robust, off-chain aggregated oracles like Chainlink."
  },
  {
    "id": 24,
    "question": "How would you architect a secure liquidation engine for a lending protocol?",
    "answer": "A secure liquidation engine requires seven critical controls:\n1. Health Factor Authorization: Strictly verify require(calculateHealthFactor(borrower) < 1e18, 'Position solvent').\n2. Close Factor Limit: Enforce that liquidators cannot repay more than maxCloseFactor (e.g. 50%) of total outstanding debt in a single liquidation, preventing excessive collateral seizures.\n3. Exact Collateral Seizure Math: SeizedCollateral = (DebtRepaid * PriceDebt / PriceCollateral) * (1 + LiquidationBonus). Ensure SeizedCollateral <= borrowerCollateral.\n4. Dynamic Liquidation Bonus: Scale liquidation incentives with market volatility and asset liquidity (e.g. 5% for blue-chips, 10% for volatile tokens).\n5. Reentrancy Protection: Enforce nonReentrant on liquidate() and update all debt/collateral states before transferring collateral tokens to the liquidator.\n6. Oracle Freshness: Disallow liquidation if oracle price feeds have not updated within the specified heartbeat.",
    "takeaway": "Validate HF < 1.0, enforce close factor limits, compute exact debt-to-collateral conversion with bonus, and follow CEI."
  },
  {
    "id": 25,
    "question": "Explain invariant testing for DeFi protocols and provide two specific invariant examples.",
    "answer": "Invariant testing (property-based testing) tests conditions that must remain true across any arbitrary sequence of transactions, randomized caller accounts, and varying market conditions:\n1. AMM Invariant: In a fee-free pool, reserve0 * reserve1 == k. In a fee-charging pool, the invariant states that after any swap, the product of reserves minus fees must never decrease:\n(balance0 * 1000 - amount0In * 3) * (balance1 * 1000 - amount1In * 3) >= reserve0 * reserve1 * (1000^2).\n2. Lending Protocol Solvency Invariant: The protocol's total cash plus total borrowed debt must always equal total deposits plus accumulated reserves:\ntotalCash + totalBorrows == totalSupplied + totalReserves.\nFurthermore, a borrower's Health Factor must never drop below 1.0 as a result of their own actions (borrowing or withdrawing).",
    "takeaway": "Invariants define non-negotiable protocol truths (e.g. k never decreases; cash + borrows == deposits + reserves) across randomized transaction sequences."
  }
];
const NUMERICAL_PROBLEMS = [
  {
    "id": 1,
    "title": "Problem 1 \u2014 AMM Swap Execution (Uniswap V2 with 0.3% Fee)",
    "scenario": "A constant-product AMM pool contains:\n- Reserve A (ETH) = 50 ETH\n- Reserve B (USDC) = 100,000 USDC\n- Fee Rate = 0.3% (f = 0.003)\nCalculate the exact output of USDC received by a trader who swaps 5 ETH.",
    "solution_steps": [
      "Step 1: Calculate the fee-adjusted input amount:\n\u0394x_effective = \u0394x * (1 - 0.003) = 5 * 0.997 = 4.985 ETH.",
      "Step 2: Apply the constant product swap formula:\n\u0394y = (ReserveOut * \u0394x_effective) / (ReserveIn + \u0394x_effective)\n\u0394y = (100,000 * 4.985) / (50 + 4.985)",
      "Step 3: Compute numerator and denominator:\nNumerator = 498,500\nDenominator = 54.985",
      "Step 4: Divide:\n\u0394y = 498,500 / 54.985 \u2248 9,066.1089 USDC."
    ],
    "expected_answer": "Approximately 9,066.11 USDC",
    "note": "Notice the initial spot price was $2,000/ETH (100,000 / 50). The effective price received for 5 ETH is 9,066.11 / 5 = $1,813.22/ETH, reflecting price impact on the 10% reserve shift."
  },
  {
    "id": 2,
    "title": "Problem 2 \u2014 Subsequent LP Token Minting",
    "scenario": "An existing liquidity pool has:\n- Reserve A = 200 tokens\n- Reserve B = 400 tokens\n- Total LP Token Supply = 10,000 LP tokens\nA new liquidity provider deposits:\n- Amount A = 20 tokens\n- Amount B = 40 tokens\nCalculate the exact number of LP tokens minted to the provider.",
    "solution_steps": [
      "Step 1: Recall the subsequent LP minting formula:\nLiquidityMinted = min((AmountA * TotalSupply) / ReserveA, (AmountB * TotalSupply) / ReserveB)",
      "Step 2: Calculate LP tokens based on Token A contribution:\nL_A = (20 * 10,000) / 200 = 200,000 / 200 = 1,000 LP tokens",
      "Step 3: Calculate LP tokens based on Token B contribution:\nL_B = (40 * 10,000) / 400 = 400,000 / 400 = 1,000 LP tokens",
      "Step 4: Take the minimum of both values:\nLiquidityMinted = min(1,000, 1,000) = 1,000 LP tokens."
    ],
    "expected_answer": "1,000 LP tokens",
    "note": "The new provider contributes exactly 10% of existing reserves (20/200 = 10%, 40/400 = 10%) and receives 1,000 LP tokens, representing 1,000 / (10,000 + 1,000) = 9.09% of the new 11,000 total supply."
  },
  {
    "id": 3,
    "title": "Problem 3 \u2014 Compound Collateral & Remaining Borrowing Power",
    "scenario": "A user supplies collateral to Compound:\n- ETH Collateral Value = $20,000\n- Collateral Factor = 70% (0.70)\n- Existing Outstanding Debt = $8,000\nCalculate the user's remaining borrowing power.",
    "solution_steps": [
      "Step 1: Calculate total borrowing power supported by the collateral:\nTotal Borrowing Power = Collateral Value * Collateral Factor\nTotal Borrowing Power = $20,000 * 0.70 = $14,000",
      "Step 2: Calculate remaining borrowing power by subtracting existing debt:\nRemaining Borrowing Power = Total Borrowing Power - Existing Debt\nRemaining Borrowing Power = $14,000 - $8,000 = $6,000."
    ],
    "expected_answer": "$6,000 remaining borrowing power",
    "note": "The borrower can safely draw up to $6,000 in additional loans before reaching the maximum collateralization limit."
  },
  {
    "id": 4,
    "title": "Problem 4 \u2014 Aave Health Factor Evaluation",
    "scenario": "A borrower in Aave has:\n- Collateral Value = $15,000\n- Liquidation Threshold = 80% (0.80)\n- Outstanding Debt Value = $10,000\nCalculate the borrower's Health Factor and evaluate position safety.",
    "solution_steps": [
      "Step 1: Calculate risk-adjusted collateral value:\nAdjusted Collateral = Collateral Value * Liquidation Threshold\nAdjusted Collateral = $15,000 * 0.80 = $12,000",
      "Step 2: Apply the Health Factor formula:\nHealth Factor = Adjusted Collateral / Total Debt\nHealth Factor = $12,000 / $10,000 = 1.20."
    ],
    "expected_answer": "Health Factor = 1.2",
    "note": "Because HF = 1.2 > 1.0, the loan is solvent. The liquidation threshold would be reached if collateral value drops below $10,000 / 0.80 = $12,500 (a 16.67% decline)."
  },
  {
    "id": 5,
    "title": "Problem 5 \u2014 Liquidation Seizure and Bonus Calculation",
    "scenario": "A borrower's position drops below HF 1.0 and is liquidated:\n- Debt Repaid by Liquidator = $5,000\n- Protocol Liquidation Bonus = 7% (0.07)\nCalculate the total collateral value seized by the liquidator before gas and network costs.",
    "solution_steps": [
      "Step 1: Apply the liquidation bonus formula:\nCollateral Value Seized = Debt Repaid * (1 + Liquidation Bonus)",
      "Step 2: Multiply by bonus factor:\nCollateral Value Seized = $5,000 * (1 + 0.07) = $5,000 * 1.07",
      "Step 3: Compute final value:\nCollateral Value Seized = $5,350."
    ],
    "expected_answer": "$5,350 collateral value",
    "note": "The liquidator repays $5,000 of debt and receives $5,350 of collateral, earning a gross profit of $350 as compensation for executing the liquidation."
  }
];

export default function BlockchainDEXLending() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: DEX Models (AMM vs Order Book)
  const [dexModel, setDexModel] = useState("amm");
  const [ammReserveETH, setAmmReserveETH] = useState(50);
  const [ammReserveUSDC, setAmmReserveUSDC] = useState(100000);
  const [ammSwapIn, setAmmSwapIn] = useState(5.0);
  const [ammFeeTier, setAmmFeeTier] = useState(0.003);
  const [ammSlippage, setAmmSlippage] = useState(0.005);
  const obSpread = 4.0; // 2002 - 1998

  const calculatedAmmOut = useMemo(() => {
    const feeFactor = 1 - ammFeeTier;
    const amountInWithFee = ammSwapIn * feeFactor;
    const outputUSDC = (ammReserveUSDC * amountInWithFee) / (ammReserveETH + amountInWithFee);
    const spotPrice = ammReserveUSDC / ammReserveETH;
    const effectivePrice = outputUSDC / ammSwapIn;
    const priceImpact = Math.max(0, ((spotPrice - effectivePrice) / spotPrice) * 100);
    const feePaid = ammSwapIn * ammFeeTier * spotPrice;
    const minReceived = outputUSDC * (1 - ammSlippage);
    return {
      outputUSDC,
      spotPrice,
      effectivePrice,
      priceImpact,
      feePaid,
      minReceived
    };
  }, [ammReserveETH, ammReserveUSDC, ammSwapIn, ammFeeTier, ammSlippage]);

  const handleExecuteAmmSwap = useCallback(() => {
    const out = calculatedAmmOut.outputUSDC;
    setAmmReserveETH((prev) => prev + ammSwapIn);
    setAmmReserveUSDC((prev) => Math.max(1, prev - out));
  }, [ammSwapIn, calculatedAmmOut.outputUSDC]);

  // Simulator 2 State: Uniswap V3 Concentrated Liquidity
  const [v3CurrentPrice, setV3CurrentPrice] = useState(2000);
  const [v3LowerPrice, setV3LowerPrice] = useState(1800);
  const [v3UpperPrice, setV3UpperPrice] = useState(2400);

  const calculatedV3 = useMemo(() => {
    // Capital efficiency approx vs full range [0, infinity]
    // CE = 1 / (1 - sqrt(Pa / Pb))
    const ratio = Math.sqrt(v3LowerPrice / v3UpperPrice);
    const capitalEfficiency = 1 / (1 - ratio);
    
    let ethRatio = 50;
    let usdcRatio = 50;

    if (v3CurrentPrice < v3LowerPrice) {
      ethRatio = 100;
      usdcRatio = 0;
    } else if (v3CurrentPrice > v3UpperPrice) {
      ethRatio = 0;
      usdcRatio = 100;
    } else {
      // Linear interpolation of composition within range
      const progress = (v3CurrentPrice - v3LowerPrice) / (v3UpperPrice - v3LowerPrice);
      ethRatio = Math.max(0, Math.min(100, (1 - progress) * 100));
      usdcRatio = 100 - ethRatio;
    }

    return {
      capitalEfficiency: Math.min(50, Math.max(2, capitalEfficiency)),
      ethRatio,
      usdcRatio
    };
  }, [v3CurrentPrice, v3LowerPrice, v3UpperPrice]);

  // Simulator 3 State: Multi-Hop Routing
  const [routeAmountIn, setRouteAmountIn] = useState(1.0); // WBTC

  const calculatedRoute = useMemo(() => {
    // Route 1: Direct WBTC -> DAI (Thin liquidity: 10 WBTC, 600,000 DAI)
    const directResWBTC = 10;
    const directResDAI = 600000;
    const directInFee = routeAmountIn * 0.997;
    const directOut = (directResDAI * directInFee) / (directResWBTC + directInFee);
    const directSpot = directResDAI / directResWBTC;
    const directEffective = directOut / routeAmountIn;
    const directPriceImpact = Math.max(0, ((directSpot - directEffective) / directSpot) * 100);

    // Route 2: 2-Hop WBTC -> ETH -> DAI (Deep pools)
    // Hop 1: WBTC/ETH (Pool has 200 WBTC, 6,000 ETH)
    const h1ResWBTC = 200;
    const h1ResETH = 6000;
    const h1InFee = routeAmountIn * 0.997;
    const h1OutETH = (h1ResETH * h1InFee) / (h1ResWBTC + h1InFee);

    // Hop 2: ETH/DAI (Pool has 10,000 ETH, 20,000,000 DAI)
    const h2ResETH = 10000;
    const h2ResDAI = 20000000;
    const h2InFee = h1OutETH * 0.997;
    const multiHopOut = (h2ResDAI * h2InFee) / (h2ResETH + h2InFee);
    const multiHopEffective = multiHopOut / routeAmountIn;
    const multiHopPriceImpact = Math.max(0, ((directSpot - multiHopEffective) / directSpot) * 100);

    return {
      directOut,
      directPriceImpact,
      multiHopOut,
      multiHopPriceImpact,
      bestRoute: multiHopOut >= directOut ? "multihop" : "direct"
    };
  }, [routeAmountIn]);

  // Simulator 4 State: Lending & Liquidation Engine
  const [lendingEthCollateral, setLendingEthCollateral] = useState(10); // ETH
  const [lendingUsdcDebt, setLendingUsdcDebt] = useState(10000); // USDC
  const [lendingMarketCrash, setLendingMarketCrash] = useState(0); // % drop

  const calculatedLending = useMemo(() => {
    const baseEthPrice = 2000;
    const crashedEthPrice = baseEthPrice * (1 - lendingMarketCrash / 100);
    const totalCollateralValue = lendingEthCollateral * crashedEthPrice;
    const liquidationThresholdBps = 8000; // 80%
    const adjustedCollateralThreshold = (totalCollateralValue * liquidationThresholdBps) / 10000;

    let healthFactor = 999;
    if (lendingUsdcDebt > 0) {
      healthFactor = adjustedCollateralThreshold / lendingUsdcDebt;
    }

    // Liquidation price boundary: debt = (collateral * price * 0.8) => price = debt / (collateral * 0.8)
    const liquidationPriceBoundary = lendingUsdcDebt / (lendingEthCollateral * 0.8);

    return {
      crashedEthPrice,
      totalCollateralValue,
      adjustedCollateralThreshold,
      healthFactor,
      liquidationPriceBoundary
    };
  }, [lendingEthCollateral, lendingUsdcDebt, lendingMarketCrash]);

  const handleExecuteLiquidation = useCallback(() => {
    // 50% close factor
    const debtToRepay = lendingUsdcDebt * 0.5;
    // Seize collateral worth debtToRepay * 1.05
    const collateralValueSeized = debtToRepay * 1.05;
    const ethSeized = collateralValueSeized / calculatedLending.crashedEthPrice;

    setLendingUsdcDebt((prev) => Math.max(0, prev - debtToRepay));
    setLendingEthCollateral((prev) => Math.max(0.1, prev - ethSeized));
  }, [lendingUsdcDebt, calculatedLending.crashedEthPrice]);

  // Quiz State
  const quizQuestions = QUIZ_QUESTIONS;
  const [userQuizAnswers, setUserQuizAnswers] = useState({});
  const quizScore = useMemo(() => {
    return Object.entries(userQuizAnswers).reduce((acc, [qId, optIdx]) => {
      const q = quizQuestions.find((item) => item.id === parseInt(qId));
      return q && q.answer === optIdx ? acc + 1 : acc;
    }, 0);
  }, [userQuizAnswers, quizQuestions]);

  const handleQuizOptionSelect = useCallback((questionId, optionIndex) => {
    setUserQuizAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
  }, []);

  const handleResetQuiz = useCallback(() => {
    setUserQuizAnswers({});
  }, []);

  // Interview Questions Accordion State
  const interviewQuestions = INTERVIEW_QUESTIONS;
  const [expandedInterview, setExpandedInterview] = useState({});
  const toggleInterviewExpand = useCallback((id) => {
    setExpandedInterview((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  // Numerical Problems State
  const numericalProblems = NUMERICAL_PROBLEMS;
  const [revealedProblems, setRevealedProblems] = useState({});
  const toggleProblemReveal = useCallback((id) => {
    setRevealedProblems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  // Checklist State
  const checklistItems = CHECKLIST_ITEMS;
  const [completedObjectives, setCompletedObjectives] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m17_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m17_progress",
        JSON.stringify(completedObjectives)
      );
    } catch {
      // Ignore localStorage write failures
    }
  }, [completedObjectives]);

  const handleToggleObjective = useCallback((id) => {
    setCompletedObjectives((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  const handleResetChecklist = useCallback(() => {
    setCompletedObjectives({});
  }, []);

  const checkedCount = useMemo(() => {
    return Object.values(completedObjectives).filter(Boolean).length;
  }, [completedObjectives]);

  const completionPercentage = useMemo(() => {
    return Math.round((checkedCount / checklistItems.length) * 100);
  }, [checkedCount, checklistItems.length]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-amber-200">
      <ModuleNav track="blockchain" currentModuleId="dex-lending" />
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e7e3da] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/learning/blockchain"
            className="text-xs font-bold text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition"
          >
            &larr; <span className="hidden sm:inline">Blockchain Engineering</span>
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            Module 17
          </span>
          <span className="text-xs font-semibold text-neutral-600 truncate max-w-[200px] sm:max-w-xs">
            Decentralized Exchanges & Lending Protocols
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "theory"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Curriculum & Labs
          </button>
          <button
            onClick={() => setActiveTab("simulators")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "simulators"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Simulators
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 space-y-12">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Cpu className="w-3.5 h-3.5" />
            <span>BLOCKCHAIN & WEB3 ENGINEERING • ADVANCED PROTOCOL TRACK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 17 — Decentralized Exchanges & Lending Protocols
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-level study of decentralized financial infrastructure: constant product AMM mechanics, Uniswap V2 and V3 concentrated liquidity, multi-hop routing, Compound cToken and Aave aToken accounting, collateral factors, Health Factors, liquidation engines, Chainlink oracles, and flash loan execution.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            
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
    
          </div>
        ) : (
          <div className="space-y-16">
            
      {/* ============================================================== */}
      {/* SECTION 1: DEX ARCHITECTURE                                     */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            DEX Architecture
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Foundational design patterns, contract segregation, and transaction coordination in decentralized exchanges.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">1.1 What Is a Decentralized Exchange?</h3>
          <p>
            A <strong>Decentralized Exchange (DEX)</strong> is a blockchain-based protocol enabling peer-to-contract and peer-to-peer cryptocurrency swaps through autonomous smart contracts. Unlike centralized exchanges (CEXs) such as Coinbase or Binance, a DEX does not rely on a custodial entity to hold private keys, manage matching ledgers, or settle account balances.
          </p>
          <p>A production DEX architecture comprises seven interdependent layers:</p>
          <ul className="list-disc pl-6 space-y-1 text-xs">
            <li><strong>Frontend Application:</strong> React/Next.js interface displaying quotes, charts, and slippage tolerances.</li>
            <li><strong>Wallet Integration:</strong> Injected EIP-1193 providers (MetaMask, Coinbase Wallet) for cryptographic signing.</li>
            <li><strong>Smart Contract Infrastructure:</strong> Modular contracts implementing factory, router, and pair mechanics.</li>
            <li><strong>Token Contracts:</strong> ERC-20 compliant digital assets being traded.</li>
            <li><strong>Liquidity Pools / Order Books:</strong> On-chain capital reserves or matched order registries.</li>
            <li><strong>Pricing and Routing Algorithms:</strong> Math engines determining output quotes and path traversal.</li>
            <li><strong>Transaction Execution Logic:</strong> Reentrancy-guarded execution routines transferring tokens and enforcing invariants.</li>
          </ul>

          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
            <h4 className="text-xs font-bold text-neutral-900 uppercase">Worked Example: 100 USDC for ETH Swap Lifecycle</h4>
            <p className="text-xs text-neutral-700">When a user executes a swap of 100 USDC for ETH, the DEX executes a 10-step sequence:</p>
            <ol className="list-decimal pl-5 space-y-1 text-xs font-mono text-neutral-800">
              <li>Identify the registered USDC/ETH liquidity pair contract address via Factory registry.</li>
              <li>Read current reserves: reserveUSDC and reserveETH.</li>
              <li>Calculate raw ETH output using the constant product formula: Δy = (y · Δx) / (x + Δx).</li>
              <li>Deduct applicable protocol and LP fees (e.g., 0.30%).</li>
              <li>Calculate price impact based on trade size relative to pool depth.</li>
              <li>Apply user slippage tolerance to compute amountOutMin.</li>
              <li>Verify and request ERC-20 allowance (approve) for the router contract.</li>
              <li>Execute router.swapExactTokensForTokens() with deadline verification.</li>
              <li>Pair contract validates balance invariant, transfers ETH to user, and pulls USDC.</li>
              <li>Emit Swap event and synchronize internal reserve state.</li>
            </ol>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">1.2 DEX Architectural Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">A. Factory Contract</span>
              <p className="text-xs text-neutral-600">
                The authoritative registry of all deployed trading pairs. Uses deterministic deployment via CREATE2 to allow clients to compute pair addresses off-chain without state queries.
              </p>
              <pre className="p-2.5 bg-[#f6f4ee] rounded-lg text-[11px] font-mono text-neutral-800 overflow-x-auto border border-[#e7e3da]">
{`function createPair(
  address tokenA, 
  address tokenB
) external returns (address pair);`}
              </pre>
              <p className="text-[11px] text-neutral-500">
                Enforces strict token ordering (tokenA &lt; tokenB) to prevent duplicate inverse pairs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">B. Pair Contract</span>
              <p className="text-xs text-neutral-600">
                Custodies actual ERC-20 reserves for a specific two-token pool. Enforces mathematical invariants, executes flash swaps, collects LP fees, and mints/burns LP receipt tokens.
              </p>
              <div className="p-2.5 bg-[#f6f4ee] rounded-lg text-[11px] font-mono text-neutral-800 border border-[#e7e3da]">
                ETH / USDC Pair Contract<br/>
                ├── ETH Reserve (uint112)<br/>
                ├── USDC Reserve (uint112)<br/>
                ├── LP Token Supply (ERC-20)<br/>
                └── swap() / mint() / burn() Logic
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">C. Router Contract</span>
              <p className="text-xs text-neutral-600">
                Stateless coordinator for user interactions. Pulls tokens via transferFrom, wraps native ETH to WETH, performs multi-hop path execution, and enforces slippage (amountOutMin) and deadline checks.
              </p>
              <div className="text-[11px] text-amber-900 bg-amber-50 p-2 rounded border border-amber-200">
                <strong>Crucial Design Rule:</strong> The router never holds permanent pool liquidity; it acts exclusively as a transient execution coordinator.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2">
              <span className="text-xs font-bold text-amber-800 uppercase">D. Frontend DApp</span>
              <p className="text-xs text-neutral-600">
                Client interface built with React, Ethers.js, or Viem. Computes local quotes, tracks user token approvals, listens to WebSocket block updates, and estimates network gas fees.
              </p>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">1.3 Complete DEX Execution Architecture</h3>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
            <pre className="text-[11px] sm:text-xs font-mono text-neutral-800 overflow-x-auto leading-relaxed">
{`+-------------------------------------------------------+
|                    React Frontend                     |
+---------------------------+---------------------------+
                            | User inputs swap & signs tx
                            v
+-------------------------------------------------------+
|                   Wallet (MetaMask)                   |
+---------------------------+---------------------------+
                            | Calls swapExactTokensForTokens()
                            v
+-------------------------------------------------------+
|                      DEX Router                       |
|   - Verifies block.timestamp <= deadline              |
|   - Pulls tokenA from user via SafeERC20              |
+---------------------------+---------------------------+
                            | Look up pair address
                            v
+-------------------------------------------------------+
|                      DEX Factory                      |
|   - Mapping: getPair[tokenA][tokenB]                  |
+---------------------------+---------------------------+
                            | Transfer tokenA & trigger swap
                            v
+-------------------------------------------------------+
|                     Pair Contract                     |
|   - Reads actual token balances                       |
|   - Verifies constant product: balance0 * balance1 >= k|
|   - Calculates fee & transfers tokenB to user recipient|
+---------------------------+---------------------------+
               +------------+------------+
               |                         |
               v                         v
        Token A Reserve           Token B Reserve`}
            </pre>
            <div className="mt-3 p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-950">
              <strong>Key Engineering Insight:</strong> The router handles transaction coordination and safety parameters, while the pair contract is solely responsible for maintaining core financial custody and invariant preservation.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: ORDER BOOK VS AMM MODELS                            */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Order Book vs AMM Models
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Analyzing discrete bid-ask matching versus autonomous algorithmic liquidity curves.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">2.1 Order Book Model</h3>
          <p>
            An <strong>Order Book</strong> maintains sorted queues of buy orders (bids) and sell orders (asks). Bids are sorted in descending order of price, while asks are sorted in ascending order. When a market order arrives, it matches against the opposite queue at the best available price.
          </p>

          {/* Spread Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Bid Quantity</th>
                  <th className="p-3">Bid Price (Bids)</th>
                  <th className="p-3">Ask Price (Asks)</th>
                  <th className="p-3">Ask Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da] font-mono">
                <tr className="bg-white">
                  <td className="p-3 text-emerald-700">5 ETH</td>
                  <td className="p-3 text-emerald-800 font-bold">$1,998</td>
                  <td className="p-3 text-rose-800 font-bold">$2,002</td>
                  <td className="p-3 text-rose-700">3 ETH</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 text-emerald-700">10 ETH</td>
                  <td className="p-3 text-emerald-800 font-bold">$1,995</td>
                  <td className="p-3 text-rose-800 font-bold">$2,005</td>
                  <td className="p-3 text-rose-700">5 ETH</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 text-emerald-700">15 ETH</td>
                  <td className="p-3 text-emerald-800 font-bold">$1,990</td>
                  <td className="p-3 text-rose-800 font-bold">$2,010</td>
                  <td className="p-3 text-rose-700">8 ETH</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono">
            <span className="font-bold text-neutral-900">Bid-Ask Spread Calculation:</span>
            <div className="mt-1 text-amber-800 font-bold">
              Spread = Lowest Ask - Highest Bid = $2,002 - $1,998 = $4.00
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <span className="font-bold text-emerald-900 uppercase">Order Book Advantages</span>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-emerald-800">
                <li>Zero price impact for orders filled within top-of-book depth.</li>
                <li>Familiar trading UX with Limit, Stop-Loss, and OCO orders.</li>
                <li>Superior capital efficiency in highly liquid institutional markets.</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
              <span className="font-bold text-rose-900 uppercase">On-Chain Order Book Challenges</span>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-rose-800">
                <li>High gas cost: Inserting/canceling orders modifies contract storage queues.</li>
                <li>Latency and front-running in unconfirmed transaction mempools.</li>
                <li>Requires active, professional market makers to avoid empty books.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">2.2 AMM Model</h3>
          <p>
            An <strong>Automated Market Maker (AMM)</strong> does not match individual orders. Instead, users trade against a smart contract holding a pool of token reserves. The asset price adjusts deterministically according to an algorithmic invariant function:
          </p>
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs font-mono text-amber-950 font-bold">
            x · y = k (Constant Product AMM)
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">2.3 Comprehensive Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">Order Book DEX</th>
                  <th className="p-3">AMM DEX</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Pricing Engine</td>
                  <td className="p-3 text-neutral-600">Discrete bid/ask limit quotes</td>
                  <td className="p-3 text-neutral-600">Deterministic mathematical invariant (e.g. x · y = k)</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Liquidity Source</td>
                  <td className="p-3 text-neutral-600">Active trader limit orders</td>
                  <td className="p-3 text-neutral-600">Passive liquidity provider pooled deposits</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Order Matching</td>
                  <td className="p-3 text-neutral-600">Matching engine (off-chain or on-chain)</td>
                  <td className="p-3 text-neutral-600">Autonomous smart contract calculations</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Price Control</td>
                  <td className="p-3 text-neutral-600">Exact limit orders</td>
                  <td className="p-3 text-neutral-600">Slippage constraints (amountOutMin)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Market Makers</td>
                  <td className="p-3 text-neutral-600">Professional algorithmic market makers</td>
                  <td className="p-3 text-neutral-600">Any token holder (permissionless LPs)</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Gas Complexity</td>
                  <td className="p-3 text-neutral-600">High (O(log n) tree inserts & cancellations)</td>
                  <td className="p-3 text-neutral-600">Low and constant O(1) storage updates</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Price Discovery</td>
                  <td className="p-3 text-neutral-600">Continuous order book matching</td>
                  <td className="p-3 text-neutral-600">Reserve ratio adjusted by arbitrageurs</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Primary Use Case</td>
                  <td className="p-3 text-neutral-600">Institutional, high-frequency pairs</td>
                  <td className="p-3 text-neutral-600">Long-tail token trading & permissionless swaps</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">2.4 Hybrid DEX Architecture</h3>
          <p>
            Modern platforms frequently deploy hybrid systems combining off-chain order books with on-chain settlement (e.g., 0x, dYdX v3, CowSwap). Limit orders are signed cryptographically off-chain via EIP-712 and matched by an off-chain coordinator, with the final transaction submitted atomically to an on-chain settlement contract.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: CONSTANT PRODUCT FORMULA                            */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Constant Product Formula
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Mathematical derivation, fee incorporation, and integer arithmetic in Solidity.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">3.1 Mathematical Foundation</h3>
          <p>
            The constant product formula states that the product of token reserves within a pool must remain invariant across swaps (excluding fees):
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-center font-bold text-neutral-900">
            x · y = k
          </div>
          <p className="text-xs">
            Where <code>x</code> is Reserve A, <code>y</code> is Reserve B, and <code>k</code> is the invariant constant. Plotted on a Cartesian coordinate plane, this forms a rectangular hyperbola asymptotic to both axes, ensuring the pool never runs out of either asset.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">3.2 Step-by-Step Derivation of the Swap Formula</h3>
          <div className="p-4 rounded-xl bg-white border border-[#e7e3da] space-y-2 text-xs font-mono">
            <p className="font-bold text-neutral-900 font-sans">Scenario: Pool contains 10 ETH and 20,000 USDC. A trader deposits 1 ETH.</p>
            <div className="space-y-1 text-neutral-700">
              <div>Initial Reserves: x = 10 ETH, y = 20,000 USDC</div>
              <div>Initial Invariant: k = x · y = 10 · 20,000 = 200,000</div>
              <div>Trader deposits: Δx = 1 ETH</div>
              <div>New Token A Reserve: x' = x + Δx = 10 + 1 = 11 ETH</div>
              <div>Preserving invariant: x' · y' = k  ==&gt;  11 · y' = 200,000</div>
              <div>New Token B Reserve: y' = 200,000 / 11 = 18,181.81818 USDC</div>
              <div>Output received: Δy = y - y' = 20,000 - 18,181.81818 = 1,818.18182 USDC</div>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">3.3 General Swap Formula</h3>
          <p>General fee-free output formula:</p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            Δy = (y · Δx) / (x + Δx)
          </div>
          <p className="mt-2">Incorporating a trading fee <code>f = 0.003</code> (0.3%):</p>
          <div className="p-2.5 bg-amber-50 rounded-lg font-mono text-xs border border-amber-200 text-amber-950 font-bold">
            Δy = [y · Δx · (1 - f)] / [x + Δx · (1 - f)] = (y · Δx · 0.997) / (x + Δx · 0.997)
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">3.4 Solidity Implementation with Integer Arithmetic</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`function getAmountOut(
    uint256 amountIn,
    uint256 reserveIn,
    uint256 reserveOut
) public pure returns (uint256 amountOut) {
    require(amountIn > 0, "Invalid input");
    require(reserveIn > 0 && reserveOut > 0, "Insufficient liquidity");
    
    // 0.3% fee: 1 - 0.003 = 0.997 represented as 997 / 1000
    uint256 amountInWithFee = amountIn * 997;
    uint256 numerator = amountInWithFee * reserveOut;
    uint256 denominator = (reserveIn * 1000) + amountInWithFee;
    
    amountOut = numerator / denominator;
}`}
          </pre>
          <p className="text-xs text-neutral-600">
            <strong>Why 997 and 1000?</strong> The EVM has no native floating-point math. Representing <code>0.997</code> as <code>997 / 1000</code> allows exact integer arithmetic without truncating sub-unit decimals.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">3.5 Important Invariant Verification</h3>
          <p className="text-xs text-neutral-600">
            In Uniswap V2, trading fees are retained inside the pool reserves. Therefore, after every swap, <code>k</code> actually increases slightly rather than remaining strictly constant. Production contracts must verify the actual post-swap balances:
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono">
            (balance0 · 1000 - amount0In · 3) · (balance1 · 1000 - amount1In · 3) &gt;= reserve0 · reserve1 · 1000²
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: UNISWAP V2 FUNDAMENTALS                             */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Uniswap V2 Fundamentals
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Pair contracts, token sorting, LP token accounting, and router execution patterns.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">4.1 Introduction to Uniswap V2</h3>
          <p>
            Launched in May 2020, Uniswap V2 standardized constant product AMMs on Ethereum. Its modular architecture cleanly separates registry management (Factory), financial state and token reserves (Pair), and user experience helpers (Router).
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.2 Pair Contract Storage & Variables</h3>
          <pre className="p-3.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`uint112 private reserve0;           // Packed into single 32-byte storage slot
uint112 private reserve1;           // Leaves 32 bits for timestamp
uint32  private blockTimestampLast; // Used for cumulative TWAP oracle pricing`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.3 Token Ordering</h3>
          <p className="text-xs text-neutral-600">
            Uniswap V2 pairs strictly sort token addresses numerically (<code>token0 &lt; token1</code>). For example, if token A is <code>0x111...</code> and token B is <code>0x222...</code>, token A is permanently registered as <code>token0</code>. This guarantees deterministic behavior and prevents duplicate pair contracts.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.4 LP Token Accounting</h3>
          <p>
            Liquidity Provider (LP) tokens are ERC-20 tokens representing fractional ownership of the pool. If a pool has 1,000 total LP tokens and Alice holds 100 LP tokens, her pool ownership is:
          </p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            Ownership = (100 / 1000) · 100% = 10%
          </div>
          <p className="text-xs mt-1">
            If the pool holds 100 ETH and 200,000 USDC, Alice's proportional claim is exactly 10 ETH and 20,000 USDC.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.5 Initial LP Token Minting</h3>
          <p>
            When a pool is first initialized, the liquidity minted is the geometric mean of the deposited assets:
          </p>
          <div className="p-2.5 bg-amber-50 rounded-lg font-mono text-xs border border-amber-200 text-amber-950 font-bold">
            Liquidity = √(amount0 · amount1) - MINIMUM_LIQUIDITY (1,000 wei)
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Why burn 1,000 wei to address(0)?</strong> This prevents the first depositor from inflating the LP share price (via donating assets) to make future deposits round down to zero, neutralising the initial share inflation attack.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.6 Subsequent LP Minting</h3>
          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono">
            LiquidityMinted = min( (amount0 · totalSupply) / reserve0, (amount1 · totalSupply) / reserve1 )
          </div>
          <p className="text-xs mt-2">
            <strong>Worked Example:</strong> Pool has Reserve A = 100, Reserve B = 200, Total Supply = 1,000. Depositor adds 10 Token A and 20 Token B:<br/>
            Token A check: (10 · 1,000) / 100 = 100 LP tokens.<br/>
            Token B check: (20 · 1,000) / 200 = 100 LP tokens.<br/>
            User receives exactly <code>min(100, 100) = 100 LP tokens</code>.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">4.7 Uniswap V2 Router Functions</h3>
          <ul className="list-disc pl-6 space-y-1 text-xs">
            <li><code>swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline)</code></li>
            <li><code>swapTokensForExactTokens(amountOut, amountInMax, path, to, deadline)</code></li>
            <li><code>addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline)</code></li>
            <li><code>removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline)</code></li>
          </ul>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: UNISWAP V3 CONCENTRATED LIQUIDITY                   */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Uniswap V3 Concentrated Liquidity
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Tick mathematics, capital efficiency, virtual reserves, and price range dynamics.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">5.1 Why Uniswap V3 Was Introduced</h3>
          <p>
            In Uniswap V2, liquidity is spread uniformly across the entire theoretical price range from <code>0</code> to <code>∞</code>. In reality, stablecoins (USDC/USDT) or bluechips (ETH/USDC) trade in bounded intervals. Consequently, over 95% of deposited capital in V2 sat idle. Uniswap V3 allows LPs to concentrate liquidity inside specific price boundaries <code>[Pa, Pb]</code>.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.2 Concept of Concentrated Liquidity</h3>
          <p>
            An LP provides liquidity only between a minimum price <code>Pa</code> (e.g., $1,800) and maximum price <code>Pb</code> (e.g., $2,400). As long as the market trades within this interval, the LP earns trading fees with massive capital efficiency. If price exits the interval, the position becomes 100% composed of the depreciating asset and ceases earning fees until the price re-enters.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.3 Price Ticks</h3>
          <p>
            Uniswap V3 discretizes continuous price space into discrete boundaries called <strong>ticks</strong>:
          </p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            P(i) = 1.0001^tick
          </div>
          <p className="text-xs text-neutral-600">
            Each tick index <code>i</code> represents a 1 basis point (0.01%) price shift. Ticks are grouped according to pool fee tiers (e.g. 0.05% tier has tick spacing 10; 0.30% has tick spacing 60).
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.4 Liquidity Mathematics & Virtual Reserves</h3>
          <p>When spot price <code>P</code> is in range (<code>Pa ≤ P ≤ Pb</code>):</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>Token 0 (ETH) Quantity:</strong>
              <div className="mt-1 text-amber-800">Amount0 = L · (1/√P - 1/√Pb)</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>Token 1 (USDC) Quantity:</strong>
              <div className="mt-1 text-blue-800">Amount1 = L · (√P - √Pa)</div>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.5 Three Price Regions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
              <span className="font-bold text-rose-900">Region A: Below Range (P &lt; Pa)</span>
              <p className="mt-1 text-rose-800">100% Token 0 (ETH). Position is inactive and earns 0 fees.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <span className="font-bold text-emerald-900">Region B: In-Range (Pa ≤ P ≤ Pb)</span>
              <p className="mt-1 text-emerald-800">Mix of Token 0 and Token 1. Actively facilitates trades and earns fees.</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <span className="font-bold text-blue-900">Region C: Above Range (P &gt; Pb)</span>
              <p className="mt-1 text-blue-800">100% Token 1 (USDC). Position is inactive and earns 0 fees.</p>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.6 Capital Efficiency & Trade-offs</h3>
          <p className="text-xs text-neutral-600">
            A $10,000 position concentrated between $1,900 and $2,100 can provide the same market depth as $200,000 in Uniswap V2 (a 20x capital efficiency gain). However, concentrated positions experience accelerated impermanent loss if the price trends out of range.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">5.7 Uniswap V2 vs V3 Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Dimension</th>
                  <th className="p-3">Uniswap V2</th>
                  <th className="p-3">Uniswap V3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Liquidity Range</td><td className="p-2.5">Full range (0, ∞)</td><td className="p-2.5">Custom intervals [Pa, Pb]</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">LP Strategy</td><td className="p-2.5">Passive (set and forget)</td><td className="p-2.5">Active range management</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Capital Efficiency</td><td className="p-2.5">1x baseline</td><td className="p-2.5">Up to 4,000x inside narrow bands</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">LP Token Format</td><td className="p-2.5">Fungible ERC-20 token</td><td className="p-2.5">Non-fungible ERC-721 NFT</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Fee Tiers</td><td className="p-2.5">Fixed 0.30%</td><td className="p-2.5">0.01%, 0.05%, 0.30%, 1.00%</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Price Math</td><td className="p-2.5">Reserve ratio y / x</td><td className="p-2.5">Square root price Q64.96 (sqrtPriceX96)</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Fee Growth</td><td className="p-2.5">Compounded in pool reserves</td><td className="p-2.5">Collected uninvested per position</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTIONS 6 - 10: SWAP EXECUTION, LP TOKENS, IMPACT & ROUTING    */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Sections 06 – 10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Swap Execution, Slippage, Impact & Multi-Hop Routing
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">6. Swap Execution Lifecycle & Safety Constraints</h3>
          <p>A secure token swap executes in six sequential phases:</p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono space-y-1">
            <div>Stage 1: User Selects Pair & Amount (e.g. 1,000 USDC -&gt; ETH)</div>
            <div>Stage 2: Frontend Queries Router Quote via getAmountsOut()</div>
            <div>Stage 3: Token Allowance Verification (approve router if allowance &lt; amountIn)</div>
            <div>Stage 4: User Signs Transaction with slippage and deadline parameters</div>
            <div>Stage 5: Router Executes Swap on Pair Contract & Enforces Invariant</div>
            <div>Stage 6: Transaction Confirmation, State Sync, and Event Emission</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da] space-y-1">
              <span className="text-xs font-bold text-neutral-900 uppercase">Slippage Guard</span>
              <pre className="p-2 bg-[#f6f4ee] rounded text-[11px] font-mono text-neutral-800">
{`require(
  amountOut >= amountOutMin, 
  "Slippage exceeded"
);`}
              </pre>
              <p className="text-[11px] text-neutral-500">Reverts transaction if price shifts adversely during pending block confirmation.</p>
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da] space-y-1">
              <span className="text-xs font-bold text-neutral-900 uppercase">Deadline Guard</span>
              <pre className="p-2 bg-[#f6f4ee] rounded text-[11px] font-mono text-neutral-800">
{`require(
  block.timestamp <= deadline, 
  "Transaction expired"
);`}
              </pre>
              <p className="text-[11px] text-neutral-500">Prevents validators from holding transactions in mempool to execute at stale prices.</p>
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">7. Liquidity Withdrawal Formula</h3>
          <p>When an LP burns <code>LPAmount</code> tokens, they receive proportional reserves:</p>
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-2.5 bg-[#f6f4ee] rounded border border-[#e7e3da]">
              AmountA = (LPAmount · ReserveA) / TotalLPSupply
            </div>
            <div className="p-2.5 bg-[#f6f4ee] rounded border border-[#e7e3da]">
              AmountB = (LPAmount · ReserveB) / TotalLPSupply
            </div>
          </div>
          <p className="text-xs text-neutral-600 mt-1">
            <strong>Example:</strong> Pool has Reserve A = 500, Reserve B = 1,000, Total LP = 1,000. An LP burning 100 LP tokens receives <code>(100 · 500)/1000 = 50 Token A</code> and <code>(100 · 1,000)/1000 = 100 Token B</code>.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">8. Price Impact vs Slippage</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Concept</th>
                  <th className="p-3">Definition</th>
                  <th className="p-3">Underlying Cause</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Price Impact</td>
                  <td className="p-3 text-neutral-600">Deterministic shift in spot price along AMM curve caused by order size relative to pool depth.</td>
                  <td className="p-3 text-neutral-600">Trade volume relative to pool reserves (occurs even in an empty mempool).</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Slippage</td>
                  <td className="p-3 text-neutral-600">Difference between the estimated quote and final execution price upon transaction mining.</td>
                  <td className="p-3 text-neutral-600">Concurrent trades, latency, and MEV sandwich front-running.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">10. Multi-Hop Routing Architecture</h3>
          <p className="text-xs text-neutral-600">
            When no direct pool exists or when a direct pool has shallow liquidity, routers chain trades through intermediate pools (e.g. <code>WBTC -&gt; WETH -&gt; DAI</code>). Routers construct graph representations of token vertices and pool edges, evaluating output paths using BFS or modified Dijkstra algorithms to maximize net output after gas.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTIONS 11 - 16: LENDING, COMPOUND, AAVE, HEALTH FACTORS      */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Sections 11 – 16
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Lending Protocol Architecture, Compound & Aave
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Pool accounting, cToken vs aToken interest accrual, Collateral Factors, Health Factors, and Liquidation.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">11. Lending Protocol Architecture</h3>
          <p>A decentralized lending protocol operates as a multi-asset money market governed by nine core modules:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>1. Lending Pool:</strong> Holds supplied assets and handles user deposits, borrows, repayments, and withdrawals.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>2. Collateral Manager:</strong> Tracks user collateral balances and calculates aggregate borrowing power.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>3. Risk Engine:</strong> Evaluates position Health Factors and enforces Max LTV parameters.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>4. Interest Rate Model:</strong> Dynamically calculates borrow and supply interest based on pool utilization.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>5. Oracle Integration:</strong> Chains external price feeds (Chainlink) to value collateral and debt in USD.
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#e7e3da]">
              <strong>6. Liquidation Engine:</strong> Facilitates permissionless debt repayment and collateral seizure for unsafe loans.
            </div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">12. Compound V2 Fundamentals (cToken Accounting)</h3>
          <p>
            In Compound V2, liquidity suppliers deposit underlying assets (e.g. USDC) and receive <strong>cTokens</strong> (cUSDC). The user's cToken wallet balance remains static over time. Interest accrual is captured entirely by an increasing <strong>Exchange Rate</strong>:
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono font-bold text-neutral-900">
            ExchangeRate = (Cash + Borrows - Reserves) / cTokenSupply
          </div>
          <div className="p-3 bg-white rounded-lg border border-[#e7e3da] text-xs space-y-1">
            <strong>Worked Example:</strong> If total cash = 1,000,000 USDC and cToken supply = 50,000,000 cUSDC:
            <div className="font-mono text-amber-800">ExchangeRate = 1,000,000 / 50,000,000 = 0.02 USDC per cUSDC.</div>
            A user holding 50,000 cUSDC can redeem <code>50,000 · 0.02 = 1,000 USDC</code>. As borrowers pay interest, Cash + Borrows rises, driving the exchange rate higher.
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">13. Aave V3 Fundamentals (aTokens & Debt Tokens)</h3>
          <p>
            Aave takes a contrasting approach: suppliers receive <strong>aTokens</strong> pegged 1:1 to the underlying asset. Interest accrual is reflected by continuous <strong>balance rebasing</strong> in the user's wallet:
          </p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            userBalance(t) = scaledBalance · liquidityIndex(t)
          </div>
          <p className="text-xs text-neutral-600">
            Borrowers mint non-transferable <strong>Variable Debt Tokens</strong> or <strong>Stable Debt Tokens</strong> that track outstanding debt principal multiplied by a cumulative borrow index.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">Compound V2 vs Aave V3 Architecture</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">Compound V2</th>
                  <th className="p-3">Aave V3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Supplier Receipt</td><td className="p-2.5">cTokens (floating exchange rate)</td><td className="p-2.5">aTokens (1:1 rebasing balance)</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Debt Representation</td><td className="p-2.5">Internal account mapping</td><td className="p-2.5">Dedicated Variable/Stable Debt Tokens</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Risk Coordinator</td><td className="p-2.5">Monolithic Comptroller contract</td><td className="p-2.5">Modular Pool & PoolConfigurator contracts</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Risk Segregation</td><td className="p-2.5">Cross-collateral market pool</td><td className="p-2.5">Isolation Mode, E-Mode, Siloed Borrowing</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Flash Loans</td><td className="p-2.5">Third-party wrapper</td><td className="p-2.5">Native core feature</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">14. Collateral Factors & Multi-Asset Portfolio</h3>
          <p>
            The <strong>Collateral Factor (Max LTV)</strong> dictates maximum borrowing power:
          </p>
          <div className="p-2.5 bg-[#f6f4ee] rounded-lg font-mono text-xs border border-[#e7e3da]">
            BorrowingPower = CollateralValue · CollateralFactor
          </div>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700">
                <tr><th className="p-2.5">Asset</th><th className="p-2.5">Supplied Value</th><th className="p-2.5">Collateral Factor</th><th className="p-2.5">Borrowing Power</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da] font-mono">
                <tr className="bg-white"><td className="p-2.5">ETH</td><td className="p-2.5">$5,000</td><td className="p-2.5">75%</td><td className="p-2.5 font-bold text-neutral-900">$3,750</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5">WBTC</td><td className="p-2.5">$3,000</td><td className="p-2.5">70%</td><td className="p-2.5 font-bold text-neutral-900">$2,100</td></tr>
                <tr className="bg-white"><td className="p-2.5">USDC</td><td className="p-2.5">$2,000</td><td className="p-2.5">85%</td><td className="p-2.5 font-bold text-neutral-900">$1,700</td></tr>
                <tr className="bg-amber-50 font-bold"><td className="p-2.5 text-amber-950">Total</td><td className="p-2.5 text-amber-950">$10,000</td><td className="p-2.5 text-amber-950">Weighted</td><td className="p-2.5 text-amber-900 font-extrabold">$7,550</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">15. Health Factor (HF) Formulation</h3>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs font-mono font-bold text-amber-950">
            HealthFactor = [ Σ (CollateralValue_i · LiquidationThreshold_i) ] / TotalDebtValue
          </div>
          <ul className="list-disc pl-6 space-y-1 text-xs mt-2">
            <li><strong>HF &gt; 1.0:</strong> Position is solvent and protected from liquidation.</li>
            <li><strong>HF = 1.0:</strong> Liquidation boundary.</li>
            <li><strong>HF &lt; 1.0:</strong> Undercollateralized position; eligible for immediate third-party liquidation.</li>
          </ul>

          <h3 className="text-base font-bold text-neutral-900 mt-6">16. Liquidation Thresholds & Seizure Math</h3>
          <p>
            When a position breaches <code>HF &lt; 1.0</code>, liquidators can repay a portion of the debt (governed by the Close Factor, e.g. 50%) and seize an equivalent value of collateral plus a <strong>Liquidation Bonus</strong> (typically 5%–10%):
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono">
            SeizedCollateralValue = DebtRepaid · (1 + LiquidationBonus)
          </div>
          <p className="text-xs text-neutral-600 mt-1">
            <strong>Worked Example:</strong> Liquidator repays $2,000 USDC debt on an unsafe loan with a 5% bonus. The liquidator seizes <code>$2,000 · 1.05 = $2,100</code> of ETH collateral, pocketing a $100 profit.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTIONS 17 - 21: ORACLES, ACCOUNTING, FLASH LOANS, RISKS      */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Sections 17 – 21
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Oracles, Lending Accounting, Flash Loans & Protocol Risk
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">17. Chainlink Price Feeds & Decimal Normalization</h3>
          <p className="text-xs text-neutral-600">
            Deterministic EVM smart contracts cannot make HTTP network calls. Protocols integrate Chainlink <code>AggregatorV3Interface</code> to ingest external market prices verified by decentralized validator consensus.
          </p>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumer {
    AggregatorV3Interface public immutable priceFeed;
    
    constructor(address feedAddress) {
        priceFeed = AggregatorV3Interface(feedAddress);
    }
    
    function getLatestPrice() external view returns (int256) {
        (
            uint80 roundId,
            int256 price,
            ,
            uint256 updatedAt,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        
        require(price > 0, "Invalid price");
        require(answeredInRound >= roundId, "Stale round");
        require(block.timestamp - updatedAt <= 3600, "Stale timestamp");
        return price;
    }
}`}
          </pre>
          <div className="p-3 bg-white rounded-lg border border-[#e7e3da] text-xs text-neutral-600">
            <strong>Decimal Normalization:</strong> Chainlink USD feeds return 8 decimals (e.g. $2,000 is <code>200,000,000,000</code>). When interacting with 18-decimal WETH or 6-decimal USDC, values must be explicitly scaled to 1e18 using <code>price * 10^(18 - decimals)</code> to prevent catastrophic valuation errors.
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">18. Lending Pool Accounting & Global Interest Indices</h3>
          <p className="text-xs text-neutral-600">
            Iterating over thousands of borrowers to update accrued interest in every block would exhaust block gas limits (O(n)). Lending protocols utilize global cumulative indices updated in O(1) time:
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono">
            BorrowIndex_new = BorrowIndex_old · (1 + Rate · Δt)<br/>
            UserDebt = PrincipalDebt · (CurrentBorrowIndex / UserSnapshotIndex)
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">19. Flash Loan Execution & Arbitrage Mechanics</h3>
          <p>
            Flash loans permit uncollateralized borrowing of entire pool reserves, conditioned on full repayment plus a fee (e.g. 0.05% in Aave) within the same atomic EVM transaction:
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono space-y-1">
            <div>1. User invokes pool.flashLoan(receiver, token, amount, params)</div>
            <div>2. Pool transfers tokens to receiver contract</div>
            <div>3. Pool invokes receiver.executeOperation(token, amount, fee, data)</div>
            <div>4. Receiver performs arbitrage / refinancing and approves pool repayment</div>
            <div>5. Pool pulls (amount + fee); if balance insufficient, transaction reverts entirely</div>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">20. Multi-Dimensional Protocol Risk Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] text-neutral-700 font-bold border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Risk Category</th>
                  <th className="p-3">Vulnerability / Attack Vector</th>
                  <th className="p-3">Engineering Mitigation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Smart Contract</td><td className="p-2.5">Reentrancy during balance transfers</td><td className="p-2.5">ReentrancyGuard, CEI pattern, balance deltas</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Oracle Manipulation</td><td className="p-2.5">Flash loan distorting AMM spot price</td><td className="p-2.5">Chainlink off-chain aggregation, multi-hour TWAP</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Liquidity Run</td><td className="p-2.5">100% pool utilization prevents withdrawals</td><td className="p-2.5">Kinked interest models driving rates to 50%+</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Market Shock</td><td className="p-2.5">40%+ flash crash creating bad debt</td><td className="p-2.5">Close factors, liquidation bonuses, insurance funds</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Composability</td><td className="p-2.5">Underlying ERC-20 token hack</td><td className="p-2.5">Isolation mode, asset debt ceilings</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">21. Modular Smart Contract Architecture</h3>
          <p className="text-xs text-neutral-600">
            A production DeFi protocol segregates responsibilities cleanly: Exchange Router, Liquidity Pool, Lending Pool, Collateral Manager, Oracle Adapter, and Liquidation Engine. Each module communicates strictly via validated interfaces while enforcing the Checks-Effects-Interactions (CEI) pattern and OpenZeppelin's SafeERC20.
          </p>
        </div>
      </section>
    
            
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
    
            
      {/* ============================================================== */}
      {/* SECTION 25.1: 25 SENIOR PROTOCOL ARCHITECT INTERVIEWS          */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 25.1
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Senior Protocol Architect Technical Interview Questions
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            25 comprehensive architectural interview scenarios covering DEX execution, concentrated liquidity, lending accounting, oracle security, and liquidation engines.
          </p>
        </div>

        <div className="space-y-3">
          {interviewQuestions.map((iq) => {
            const isExpanded = expandedInterview[iq.id];
            return (
              <div
                key={iq.id}
                className="bg-white rounded-xl border border-[#e7e3da] overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => toggleInterviewExpand(iq.id)}
                  className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-[#f6f4ee]/50 transition"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mt-0.5">
                      Q{iq.id < 10 ? `0${iq.id}` : iq.id}
                    </span>
                    <span className="text-sm font-bold text-neutral-900 leading-snug">
                      {iq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 shrink-0 mt-1 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-[#e7e3da] bg-[#f6f4ee]/30 space-y-3">
                    <div className="text-xs text-neutral-700 leading-relaxed whitespace-pre-line font-sans mt-3">
                      {iq.answer}
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-950 font-medium">
                      <strong>Architectural Takeaway:</strong> {iq.takeaway}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION: 20 MULTIPLE-CHOICE QUIZ ASSESSMENT                    */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
              Self-Assessment Quiz
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
              Module 17 Mastery Examination
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              20 scenario-based questions evaluating DEX mechanics, concentrated liquidity, and lending protocol architecture.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              Score: {quizScore} / {quizQuestions.length}
            </span>
            <button
              onClick={handleResetQuiz}
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 underline"
            >
              Reset Quiz
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {quizQuestions.map((q, idx) => {
            const selectedOpt = userQuizAnswers[q.id];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = isAnswered && selectedOpt === q.answer;

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl border p-5 transition shadow-sm ${
                  isAnswered
                    ? isCorrect
                      ? "border-emerald-300 bg-emerald-50/20"
                      : "border-rose-300 bg-rose-50/20"
                    : "border-[#e7e3da]"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 mt-0.5">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                    {q.question}
                  </h3>
                </div>

                <div className="mt-4 space-y-2">
                  {q.options.map((opt, oIdx) => {
                    let optStyle = "border-[#e7e3da] bg-white text-neutral-700 hover:bg-[#f6f4ee]";
                    if (isAnswered) {
                      if (oIdx === q.answer) {
                        optStyle = "border-emerald-400 bg-emerald-100/70 text-emerald-950 font-bold";
                      } else if (selectedOpt === oIdx) {
                        optStyle = "border-rose-400 bg-rose-100/70 text-rose-950 font-bold";
                      } else {
                        optStyle = "border-[#e7e3da] bg-white/50 text-neutral-400";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isAnswered}
                        onClick={() => handleQuizOptionSelect(q.id, oIdx)}
                        className={`w-full p-3 rounded-lg border text-xs text-left transition flex items-start gap-2.5 ${optStyle}`}
                      >
                        <span className="font-mono font-bold uppercase shrink-0">
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className={`mt-3 p-3 rounded-lg text-xs leading-relaxed ${
                    isCorrect ? "bg-emerald-100/50 text-emerald-950" : "bg-rose-100/50 text-rose-950"
                  }`}>
                    <span className="font-bold">
                      {isCorrect ? "Correct!" : "Incorrect."}
                    </span>{" "}
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    
            
      {/* ============================================================== */}
      {/* SECTION 26: RECOMMENDED LEARNING RESOURCES                     */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Section 26
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Recommended Official Learning Resources
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Authoritative documentation, whitepapers, and developer guides for protocol engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Uniswap V2 Documentation",
              category: "DEX Protocol",
              desc: "Core pair contracts, constant-product AMM mathematics, LP tokens, and flash swaps.",
              link: "https://docs.uniswap.org/contracts/v2/overview"
            },
            {
              title: "Uniswap V3 Documentation",
              category: "Concentrated Liquidity",
              desc: "Ticks, square root price math (Q64.96), position NFTs, and virtual reserves.",
              link: "https://docs.uniswap.org/contracts/v3/overview"
            },
            {
              title: "Compound Finance Documentation",
              category: "Money Markets",
              desc: "cToken exchange rate accounting, Comptroller risk engine, and collateral factors.",
              link: "https://docs.compound.finance/"
            },
            {
              title: "Aave V3 Protocol Documentation",
              category: "Lending Infrastructure",
              desc: "aToken rebasing, VariableDebtTokens, Isolation Mode, E-Mode, and flash loans.",
              link: "https://aave.com/docs"
            },
            {
              title: "Chainlink Price Feeds Documentation",
              category: "Oracle Infrastructure",
              desc: "AggregatorV3Interface, heartbeat intervals, deviation thresholds, and L2 uptime feeds.",
              link: "https://docs.chain.link/"
            },
            {
              title: "Foundry Development Framework",
              category: "Testing & Verification",
              desc: "Property-based invariant testing, fuzz testing, and differential gas profiling.",
              link: "https://getfoundry.sh/"
            }
          ].map((res, idx) => (
            <a
              key={idx}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-xl border border-[#e7e3da] hover:border-amber-500 hover:shadow-sm transition flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {res.category}
                </span>
                <h4 className="text-sm font-bold text-neutral-900 mt-2 group-hover:text-amber-800 transition flex items-center justify-between">
                  <span>{res.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-600 transition" />
                </h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {res.desc}
                </p>
              </div>
              <span className="text-[11px] font-mono text-neutral-400 mt-3 block group-hover:text-amber-700">
                View Documentation &rarr;
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* FINAL SUMMARY & CENTRAL ENGINEERING TAKEAWAY                   */}
      {/* ============================================================== */}
      <section className="p-6 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-4">
        <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-amber-700" />
          <span>Module 17 Final Summary & Core Engineering Principle</span>
        </h3>
        <p className="text-xs text-neutral-700 leading-relaxed">
          This module advanced beyond basic token standards into the core architecture of decentralized exchanges and money market lending protocols. You examined the mechanics of constant-product AMMs (Uniswap V2) and concentrated liquidity bands (Uniswap V3), designed multi-hop routing engines, modeled collateralized lending pools, and evaluated liquidation mechanisms.
        </p>
        <div className="p-4 bg-white rounded-xl border border-amber-300 shadow-sm text-xs text-amber-950 font-medium space-y-1">
          <div className="text-[11px] font-mono uppercase font-bold text-amber-800">
            Central Engineering Takeaway
          </div>
          <p className="leading-relaxed">
            "A decentralized exchange must preserve its pricing and liquidity invariants under all conditions, while a lending protocol must maintain airtight collateral, debt, interest, and liquidation accounting. Both systems demand rigorous mathematical modeling, strict integer precision discipline, robust oracle validation, and property-based invariant testing before deployment to mainnet."
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* INTERACTIVE 28-OBJECTIVE COMPLETION CHECKLIST                  */}
      {/* ============================================================== */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e7e3da] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Progress Tracker
              </span>
              <span className="text-xs font-mono text-neutral-500 font-bold">
                {checkedCount} / {checklistItems.length} Complete ({completionPercentage}%)
              </span>
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Module 17 Curricular Competency Checklist
            </h3>
          </div>
          <button
            onClick={handleResetChecklist}
            className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 underline self-start sm:self-auto"
          >
            Reset Progress
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-neutral-200 rounded-full overflow-hidden">
          <div
            style={{ width: `${completionPercentage}%` }}
            className="h-full bg-amber-600 transition-all duration-300"
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2">
          {checklistItems.map((item) => {
            const isChecked = !!completedObjectives[item.id];
            return (
              <button
                key={item.id}
                onClick={() => handleToggleObjective(item.id)}
                className={`p-3 rounded-xl border text-left text-xs transition flex items-start gap-3 ${
                  isChecked
                    ? "bg-amber-50/60 border-amber-300 text-amber-950 font-medium"
                    : "bg-white border-[#e7e3da] text-neutral-700 hover:bg-[#f6f4ee]"
                }`}
              >
                <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                  isChecked ? "bg-amber-600 border-amber-600 text-white" : "border-neutral-300 bg-white"
                }`}>
                  {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
                <span className="leading-relaxed">{item.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* BOTTOM NAVIGATION: PREVIOUS & NEXT MODULE LINKS                 */}
      {/* ============================================================== */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e7e3da]">
        <Link
          to="/learning/blockchain/defi-protocols"
          className="w-full sm:w-auto p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col text-left"
        >
          <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
            &larr; Previous Module
          </span>
          <span className="text-sm font-bold text-neutral-900 mt-1">
            Module 16: Decentralized Finance (DeFi) Architecture
          </span>
        </Link>

        <Link
          to="/learning/blockchain/security-vulnerabilities"
          className="w-full sm:w-auto p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-end text-right"
        >
          <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
            Next Module &rarr;
          </span>
          <span className="text-sm font-bold text-neutral-900 mt-1">
            Module 18: Smart Contract Security, Auditing & Formal Verification
          </span>
        </Link>
      </div>
    
          </div>
        )}
      </main>
    </div>
  );
}
