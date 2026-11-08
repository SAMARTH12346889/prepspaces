# projectx/generator_mod16/gen_data.py
"""
Data definitions for Module 16: Decentralized Finance (DeFi) Architecture
- 26 Checklist Mastery Items
- 20 Multiple Choice Questions with Architect Explanations
- 16 Senior Web3 DeFi Architect Interview Scenarios
- 4 Numerical Problems with Step-by-Step Mathematical Derivations
"""

CHECKLIST_ITEMS = [
    "16.1 Understand decentralized finance fundamentals and compare traditional vs DeFi execution pipelines",
    "16.2 Master core DeFi characteristics: permissionless access, transparency, programmability, non-custodial design, and composability",
    "16.3 Categorize major DeFi protocol types: DEXs, lending, borrowing, stablecoins, liquid staking, yield aggregators, derivatives, and insurance",
    "16.4 Dissect the 5-layer DeFi architecture: Settlement, Protocol Smart Contracts, Oracles, Client/Wallets, and Financial Applications",
    "16.5 Analyze smart contract state management, deposit/withdrawal mechanics, and atomic execution guarantees",
    "16.6 Understand liquidity pools and compare algorithmic AMMs against centralized limit order books (CLOB)",
    "16.7 Master the Constant Product Market Maker (CPMM) formula: x * y = k",
    "16.8 Calculate AMM spot prices, token swap outputs, effective execution prices, and price impact",
    "16.9 Apply fee-adjusted swap formulas (Δy = (y * Δx * (1 - f)) / (x + Δx * (1 - f))) and enforce slippage limits",
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
]

QUIZ_QUESTIONS = [
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
        "explanation": "New ETH reserve x' = 10 + 1 = 11. Since x' * y' = k = 200,000, y' = 200,000 / 11 ≈ 18,181.82. The USDC received is y - y' = 20,000 - 18,181.82 = 1,818.18 USDC."
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
        "explanation": "IL = (2 * sqrt(2)) / (1 + 2) - 1 = (2 * 1.4142) / 3 - 1 = 2.8284 / 3 - 1 ≈ -0.0572 = -5.72%."
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
        "explanation": "Flash loans allow capital-intensive atomic operations—such as buying an undervalued token on Uniswap and selling on Sushiswap, or swapping debt collateral in a single block."
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
]

INTERVIEW_QUESTIONS = [
    {
        "id": "int-1",
        "q": "How would you explain the Constant Product Market Maker (CPMM) formula and derive the output equation for a token swap?",
        "scenario": "A DeFi protocol architect is interviewing you for a DEX core engineering role.",
        "answer": """In a constant product AMM, the pool maintains two token reserves, x and y, governed by the invariant:

x * y = k

When a trader swaps an input amount Δx of Token A for Token B, the invariant must hold before and after the swap (assuming no fees):

(x + Δx) * (y - Δy) = k

Substituting k = x * y:
(x + Δx) * (y - Δy) = x * y
y - Δy = (x * y) / (x + Δx)
Δy = y - (x * y) / (x + Δx)
Δy = (y * (x + Δx) - x * y) / (x + Δx)
Δy = (y * Δx) / (x + Δx)

When factoring in a protocol fee rate f (e.g. 0.3% where f = 0.003 or fee multiplier γ = 1 - f = 997/1000):
Δx_effective = Δx * (1 - f)
Δy = (y * Δx * (1 - f)) / (x + Δx * (1 - f))

In Solidity integer arithmetic with basis points (BPS = 10,000 and FEE_BPS = 30):
uint256 amountInWithFee = amountIn * 9970;
uint256 numerator = reserveOut * amountInWithFee;
uint256 denominator = (reserveIn * 10000) + amountInWithFee;
uint256 amountOut = numerator / denominator;""",
        "keyTakeaways": [
            "The invariant (x + Δx)(y - Δy) = k preserves the geometric product",
            "Output Δy = (y * Δx_eff) / (x + Δx_eff) scales non-linearly with trade size",
            "Integer arithmetic in Solidity avoids precision loss by multiplying numerators before dividing"
        ]
    },
    {
        "id": "int-2",
        "q": "What is the mathematical difference between Price Impact and Slippage, and how does a production router enforce user protection?",
        "scenario": "A quantitative trading firm asks you to explain trade execution degradation on Uniswap.",
        "answer": """Price Impact and Slippage are related but fundamentally distinct execution metrics:

1. Price Impact:
   - The deterministic price shift caused strictly by the size of the trader's order relative to the depth of the liquidity pool reserves.
   - Initial Spot Price P_spot = reserveOut / reserveIn.
   - Effective Execution Price P_eff = amountOut / amountIn.
   - Price Impact = (P_spot - P_eff) / P_spot.
   - Price impact is completely independent of other market participants; even in an empty block with no competition, a large trade moves the curve.

2. Slippage:
   - The unexpected price movement occurring between the moment a user signs their transaction in their wallet and the moment the block is mined by a validator.
   - Slippage is caused by other pending trades, arbitrageurs, or MEV front-runners shifting pool reserves in the mempool before the user's transaction lands.

Production Router Protection:
- Users specify `amountOutMin = quoteAmount * (1 - slippageTolerance)`.
- Users specify a block `deadline` timestamp (e.g., block.timestamp + 20 minutes) to prevent miners from holding transactions indefinitely in the mempool until market conditions worsen.
- The router executes `require(amountOut >= amountOutMin, 'Router: INSUFFICIENT_OUTPUT_AMOUNT')` and `require(block.timestamp <= deadline, 'Router: EXPIRED')`.""",
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
        "answer": """Impermanent Loss measures the underperformance of an LP position compared to simply holding the underlying tokens outside the pool.

Derivation:
Let initial reserves be x_0, y_0 with spot price P_0 = y_0 / x_0 and product k = x_0 * y_0.
Total initial value V_0 = x_0 * P_0 + y_0 = 2 * y_0 = 2 * sqrt(k * P_0).

If the market price changes to P_1 = r * P_0 (where r is the price ratio P_1 / P_0):
1. Value of HODL position:
   V_hold = x_0 * P_1 + y_0 = x_0 * (r * P_0) + y_0 = y_0 * (r + 1).

2. Value of LP pool position:
   At equilibrium, y_1 / x_1 = P_1 and x_1 * y_1 = k.
   x_1 = sqrt(k / P_1) and y_1 = sqrt(k * P_1).
   V_pool = x_1 * P_1 + y_1 = 2 * sqrt(k * P_1) = 2 * sqrt(k * r * P_0) = 2 * y_0 * sqrt(r).

3. Impermanent Loss ratio:
   IL = (V_pool - V_hold) / V_hold
   IL = (2 * y_0 * sqrt(r) - y_0 * (r + 1)) / (y_0 * (r + 1))
   IL = (2 * sqrt(r)) / (r + 1) - 1.

Numerical Verification:
- For r = 1.25 (25% increase): IL = -0.6%
- For r = 1.50 (50% increase): IL = -2.0%
- For r = 2.00 (100% increase): IL = -5.72%
- For r = 3.00 (200% increase): IL = -13.40%
- For r = 5.00 (400% increase): IL = -25.46%

Why it happens: The AMM continuously sells the appreciating asset for the depreciating asset to rebalance the 50/50 value ratio.""",
        "keyTakeaways": [
            "Formula: IL = (2 * sqrt(r)) / (r + 1) - 1",
            "IL is always non-positive for any price movement away from parity (r ≠ 1)",
            "Trading fee APY must outpace the calculated IL percentage to ensure net profit"
        ]
    },
    {
        "id": "int-4",
        "q": "How does Uniswap v3 Concentrated Liquidity achieve 4000x capital efficiency compared to Uniswap v2?",
        "scenario": "A protocol researcher asks you to compare v2 and v3 liquidity distribution mechanisms.",
        "answer": """In Uniswap v2, liquidity is spread uniformly across the entire theoretical price spectrum from 0 to infinity (0, ∞).
As a result, more than 99% of deposited capital sits idle and never participates in swaps, leading to high slippage and poor capital efficiency.

Uniswap v3 Concentrated Liquidity Architecture:
1. Custom Price Ranges [p_a, p_b]:
   - Liquidity Providers allocate capital only within specific price boundaries defined by discrete 'ticks' (where price = 1.0001^tick).
   - Capital only backs trades when the spot price is within [p_a, p_b].

2. Virtual Reserves:
   - Within the active tick range, the curve behaves like constant product with magnified virtual reserves:
     (x + L / sqrt(p_b)) * (y + L * sqrt(p_a)) = L^2
   - Where L is the liquidity concentration factor.

3. Capital Efficiency Multiplier:
   - For a stable pair trading within a narrow 0.10% band (e.g. USDC/USDT between 0.999 and 1.001), Uniswap v3 requires up to 4000x less capital to achieve identical depth and slippage as v2.

4. Trade-Off:
   - If the price crosses outside [p_a, p_b], the LP's position is converted 100% into the depreciated asset, stops earning trading fees, and suffers maximized impermanent loss unless rebalanced.""",
        "keyTakeaways": [
            "v2 distributes capital across (0, ∞); v3 concentrates liquidity within [p_a, p_b]",
            "Virtual reserves magnify effective depth, providing up to 4000x capital efficiency",
            "Out-of-range positions cease earning fees and face concentrated impermanent loss"
        ]
    },
    {
        "id": "int-5",
        "q": "Explain the architecture of an Overcollateralized Lending Protocol (e.g. Aave v3) and how the Health Factor is computed.",
        "scenario": "A senior smart contract engineer is evaluating your architecture for a decentralized money market.",
        "answer": """A decentralized lending protocol operates as a pooled multi-asset liquidity market:

Key Protocol Components:
1. Supply / Collateral Vaults:
   - Suppliers deposit assets (e.g., ETH, USDC) and receive interest-bearing ERC-20 receipt tokens (e.g., aTokens) that scale with an index reflecting accrued interest.
2. Debt Accounting:
   - Borrowers lock collateral and mint variable or stable debt tokens representing their outstanding liabilities.
3. Risk Parameters:
   - Loan-to-Value (LTV): Maximum initial borrowing power (e.g., 75%).
   - Liquidation Threshold (LT): The critical collateral ratio at which a position is deemed insolvent (e.g., 80%).
   - Liquidation Bonus: Incentive paid to liquidators (e.g., 5%).

Health Factor Mathematical Formula:
HF = (Sum of (Collateral_i in USD * LiquidationThreshold_i)) / (Total Debt in USD)

State Transitions:
- HF > 1.0: Position is healthy and solvent.
- HF < 1.0: Position is undercollateralized. The protocol permits any external caller to liquidate up to the close factor (e.g. 50%) of the outstanding debt.
- The liquidator repays the borrowed debt in exchange for equivalent collateral plus the liquidation bonus.""",
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
        "answer": """A kinked interest rate model dynamically prices capital based on utilization U = TotalBorrowed / TotalSupplied:

Mathematical Structure:
Let U_optimal be the target utilization kink (typically 80% or 90%).

1. Below Kink (U <= U_optimal):
   R_borrow = R_base + (U / U_optimal) * Slope_1
   - Interest rates remain low and increase moderately to encourage borrowing and stimulate capital productivity.

2. Above Kink (U > U_optimal):
   R_borrow = R_base + Slope_1 + ((U - U_optimal) / (1 - U_optimal)) * Slope_2
   - Slope_2 is calibrated to be steep (e.g., 60% to 100%+ APY).

Preventing Bank Runs:
- If utilization reaches 98%, depositors cannot withdraw their funds because 98% of the capital is lent out.
- The steep Slope_2 punishes borrowers with crushing interest rates, making it economically irrational to maintain open debt. Borrowers rush to repay loans to stop interest bleed.
- Simultaneously, suppliers earn high yields (R_supply = R_borrow * U * (1 - ReserveFactor)), attracting fresh external liquidity into the pool.
- Utilization drops back down toward U_optimal, restoring pool solvency and withdrawal liquidity.""",
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
        "answer": """An Oracle Manipulation Attack exploits protocols that read instantaneous spot prices from on-chain liquidity pools.

Attack Anatomy:
1. The vulnerable lending protocol computes collateral value as:
   price = reserveUSDC / reserveETH from a Uniswap v2 pair.
2. The attacker takes a $100,000,000 flash loan of USDC from Aave.
3. The attacker swaps the $100,000,000 USDC into the Uniswap ETH/USDC pool.
   - This drains the ETH reserve and floods the USDC reserve, artificially spiking the spot price of ETH to $20,000.
4. The attacker deposits a modest amount of ETH (e.g. 100 ETH) into the vulnerable lending protocol.
   - The protocol's oracle evaluates 100 ETH as worth $2,000,000 instead of its true market value of $200,000.
5. The attacker borrows $1,500,000 in other stablecoins against the inflated collateral.
6. The attacker swaps back through the Uniswap pool to restore reserves, repays the flash loan, and walks away with $1.3M in stolen protocol assets.

Defense Mechanisms:
- Use decentralized off-chain oracle networks like Chainlink Price Feeds with multi-node aggregation.
- If using AMM pricing, use Time-Weighted Average Price (TWAP) across at least 30 to 60 minutes to make single-block manipulation economically impossible.
- Implement strict deviation threshold checks and heartbeat monitoring.""",
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
        "answer": """Flash loans rely on the atomic state execution model of the Ethereum Virtual Machine:

EVM Execution Lifecycle:
1. Borrower calls `lendingPool.flashLoan(receiver, asset, amount, params)`.
2. The lending contract transfers `amount` of the asset to `receiver`.
3. The lending contract invokes the borrower's callback: `IFlashLoanReceiver(receiver).executeOperation(...)`.
4. The borrower executes arbitrary financial logic (swaps, arbitrage, liquidations).
5. Upon returning from the callback, the lending contract checks its balance:
   `require(currentBalance >= balanceBefore + fee, 'FlashLoan: INSUFFICIENT_REPAYMENT')`.
6. If the balance condition is satisfied, the transaction commits state changes. If not, the EVM reverts the entire transaction tree, returning all assets as if nothing happened.

Security Mitigations Against Flash Loan Exploits:
- Flash loans provide access to infinite capital without risk; therefore, protocols must assume any attacker has access to $1B+ liquidity.
- Enforce strict Checks-Effects-Interactions (CEI) and nonReentrant guards.
- Never rely on single-source, in-mempool price data.
- Introduce TWAPs, deposit/withdrawal cooldowns across blocks, and borrow caps per block.""",
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
        "answer": """Maximal Extractable Value (MEV) is the maximum profit a validator, searcher, or bot can extract by arbitrarily including, excluding, or reordering transactions within a block.

The Sandwich Attack:
1. Victim broadcasts a transaction swapping 50 ETH for USDC with a loose 5% slippage tolerance into the public mempool.
2. An MEV searcher detects this pending transaction and executes two coordinated trades around it:
   - Front-Run: The searcher submits a buy order for ETH with a higher priority gas fee (or via Flashbots private RPC). This shifts pool reserves and pushes the ETH price up to the victim's maximum acceptable slippage boundary.
   - Victim Execution: The victim's transaction executes at the worst possible execution price, pushing the price even higher.
   - Back-Run: The searcher immediately sells their ETH back into the pool in the same block, capturing the price difference as pure profit.

Mitigations:
- Tight Slippage: Set slippage to 0.1% - 0.5% instead of default 5%.
- Private RPCs: Route transactions through private mempools like Flashbots Protect or MEV-Blocker to hide transactions from public searchers.
- CoW AMMs & Batch Auctions: Use batch auctions (CoW Swap) where trades in the same batch execute at uniform clearing prices.""",
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
        "answer": """Many DeFi contracts assume ERC-20 tokens strictly obey OpenZeppelin's standard implementation, but exotic token standards break these assumptions:

1. Fee-on-Transfer Tokens:
   - The token contract deducts a burn or treasury tax during every `transfer()` or `transferFrom()`.
   - Naive Pair Contract:
     `tokenA.transferFrom(msg.sender, address(this), 100);`
     `reserveA += 100; // BUG!`
   - If the token took a 5% fee, the contract only received 95 tokens, but internal accounting records 100. Over time, withdrawals revert due to insolvency.
   - Fix: Calculate actual received balance:
     `uint256 balanceBefore = tokenA.balanceOf(address(this));`
     `tokenA.safeTransferFrom(msg.sender, address(this), amount);`
     `uint256 actualReceived = tokenA.balanceOf(address(this)) - balanceBefore;`

2. Rebasing Tokens (e.g. stETH, Ampleforth):
   - The token balance of every holder changes dynamically without transfers based on an oracle or rebase epoch.
   - If a vault records `balances[user] = amount`, it ignores positive or negative rebases, trapping yield or causing accounting shortfalls.
   - Fix: Wrap rebasing tokens into non-rebasing value-accruing shares (e.g. wrap stETH into wstETH).""",
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
        "answer": """When a trader wants to swap Token X for Token Z, a direct pair pool X/Z may have zero liquidity or high price impact. Multi-hop routing decomposes the swap across intermediate liquidity hubs:

Routing Architecture:
1. Graph Representation:
   - The DEX ecosystem is modeled as a directed weighted graph where vertices are ERC-20 tokens and edges are liquidity pools.
   - Edge weights represent the negative log of expected exchange rates minus trading fees and gas costs.

2. Shortest Path & Split Routing:
   - Aggregators use modified Dijkstra's or Bellman-Ford algorithms to find the optimal path (e.g. Token X -> WETH -> DAI -> Token Z).
   - Partial Fill Splitting: If moving $1M through a single pool causes 6% slippage, the router splits the order:
     - 40% routed through X/WETH -> WETH/Z
     - 35% routed through X/USDC -> USDC/Z
     - 25% routed through direct X/Z pool.

3. Execution Batching:
   - The Router contract executes all legs in a single atomic transaction. Intermediate tokens are passed directly from pair to pair without returning to the user's wallet, minimizing gas transfers.""",
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
        "answer": """In ERC-20, smart contracts cannot pull tokens from a user's wallet without an explicit allowance:

The Problem with Naive Approvals:
1. Infinite Approvals (type(uint256).max):
   - Many DApps prompt users for infinite approval to avoid paying gas on future swaps.
   - If that router or vault contract has a vulnerability, an attacker can drain all approved tokens from every user wallet at any time, even years later.
2. Phishing Signatures:
   - Malicious websites trick users into signing `approve(attackerAddress, max)` transactions.

Modern Solutions:
1. EIP-2612 Permit (Gasless Off-Chain Signatures):
   - Users sign a typed cryptographic EIP-712 signature off-chain.
   - The contract verifies the signature and updates allowance inside the swap transaction in a single step, eliminating separate approval transactions.
2. Permit2 (Uniswap):
   - A standardized canonical approval proxy contract that supports time-based allowances, expiration deadlines, and signature transfers across all integrated protocols.
3. Allowance Revocation & Exact Allowances:
   - Frontends should encourage exact amount approvals and provide one-click allowance revocation tools.""",
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
        "answer": """An automated liquidation bot monitors the health of borrower positions and repays underwater loans to claim collateral at a discount:

Bot Architecture:
1. Mempool & State Ingestion:
   - Listen to new blocks and pending transactions via dedicated WebSocket RPC nodes.
   - Track all open borrow positions by indexing `Borrow`, `Repay`, and `Deposit` events.
2. Off-Chain Health Factor Evaluator:
   - Continuously simulate price feed oracle updates.
   - If an oracle price drop causes a borrower's Health Factor to fall below 1.0, construct a liquidation transaction.
3. Flash Loan Integration:
   - The bot borrows debt assets via flash loan (e.g. from Balancer or Aave with 0% or 0.05% fee), executes the liquidation, sells the seized collateral on Uniswap/Curve, and repays the flash loan.

Production Edge Cases & Failures:
- Gas Bidding Wars & Front-Running: Other bots will see your liquidation tx in the public mempool. Use Flashbots Builder RPCs (MEV-Share) to avoid public mempool theft.
- Slippage on Collateral Dumps: If liquidating a large $10M position, dumping the seized collateral on a DEX may cause slippage that exceeds the 5% liquidation bonus, resulting in a net loss.
- Chain Reorgs: A block reorganization may revert the oracle price drop, causing the liquidation call to revert and burn gas.""",
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
        "answer": """Decentralized governance contracts (e.g. Compound GovernorBravo, OpenZeppelin Governor) manage protocol parameters, treasury funds, and proxy contract upgrades:

Common Governance Vulnerabilities:
1. Flash Loan Governance Attacks (e.g. Beanstalk Farms):
   - An attacker borrows hundreds of millions of governance tokens via flash loan, introduces a malicious proposal, votes it through instantaneously, and executes it in the same transaction.
2. Low Quorum Hijacking:
   - If voter participation is 2%, a hostile entity buys a small token stake and quietly passes a proposal to drain the treasury.

Mitigations:
1. Historical Snapshot Voting (ERC20Votes / Checkpoints):
   - Voting power is based on the token balance at a historical block timestamp (`block.number - 1` or proposal creation block), completely neutralizing same-block flash loans.
2. Mandatory Timelocks:
   - All approved proposals must enter a Timelock contract (e.g. 48-hour to 7-day delay) before execution. This gives users time to withdraw assets if a malicious proposal passes.
3. Quorum & Proposal Thresholds:
   - Require a minimum percentage of total supply (e.g. 4% quorum) to vote 'Yes' and a significant threshold to submit proposals.
4. Emergency Pause (Guardian Multisig):
   - A multi-sig council can veto or pause malicious proposals during the timelock window.""",
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
        "answer": """Reentrancy occurs when an execution path escapes control flow before completing state reconciliation:

1. Classic Single-Function Reentrancy:
   - A contract makes an external call (e.g. `call{value: amount}`) before updating internal state (`balances[msg.sender] -= amount`). The recipient reenters the same function repeatedly.
   - Mitigation: Checks-Effects-Interactions (CEI) pattern and `nonReentrant` modifier.

2. Cross-Function / Cross-Contract Reentrancy:
   - Contract A has two functions: `withdraw()` and `transfer()`. The attacker reenters `transfer()` during `withdraw()`, manipulating shared storage balances that were not yet updated.
   - Mitigation: Share a common reentrancy lock across all state-mutating functions.

3. Read-Only Reentrancy (e.g. Curve LP pool exploit):
   - A pool updates its reserves during a token removal step, but does not revert if a view function is queried mid-execution.
   - An external lending protocol calls the pool's `get_virtual_price()` view function to calculate collateral value.
   - An attacker triggers a withdrawal callback, during which `get_virtual_price()` returns an artificially inflated/deflated price. The attacker borrows against this skewed price in the external protocol.
   - Mitigation: Guard view functions or reentrancy locks that external protocols can verify.""",
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
        "answer": """In Solidity, all arithmetic is integer-based. Failing to normalize decimals is one of the most common causes of multi-million dollar calculation exploits:

Precision Discrepancies:
- ETH, DAI, WETH use 18 decimals (`1e18`).
- USDC, USDT use 6 decimals (`1e6`).
- WBTC uses 8 decimals (`1e8`).

The Decimal Normalization Pattern:
1. Always normalize all internal accounting values to a standardized high-precision baseline, typically 18 decimals (or 27 decimals / WAD and RAY math from MakerDAO):
   ```solidity
   uint256 internal constant WAD = 1e18;

   function normalizeTo18(uint256 amount, uint8 tokenDecimals) internal pure returns (uint256) {
       if (tokenDecimals < 18) {
           return amount * (10 ** (18 - tokenDecimals));
       } else if (tokenDecimals > 18) {
           return amount / (10 ** (tokenDecimals - 18));
       }
       return amount;
   }
   ```
2. Convert back to token decimals only when transferring:
   ```solidity
   function denormalizeFrom18(uint256 amount18, uint8 tokenDecimals) internal pure returns (uint256) {
       if (tokenDecimals < 18) {
           return amount18 / (10 ** (18 - tokenDecimals));
       }
       return amount18;
   }
   ```
3. Order of Operations: Always perform multiplication before division to minimize integer truncation errors:
   `result = (a * b) / c;` instead of `result = (a / c) * b;`""",
        "keyTakeaways": [
            "Different ERC-20 tokens use different decimals (USDC: 6, WBTC: 8, ETH: 18)",
            "Normalize all internal financial calculations to a standard 18-decimal (WAD) baseline",
            "Always multiply before dividing in Solidity to prevent truncation to zero"
        ]
    }
]

NUMERICAL_PROBLEMS = [
    {
        "id": "prob-1",
        "title": "Problem 1 — Constant Product AMM Swap & Price Impact",
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
            "4. New USDC Reserve: y' = k / x' = 450,000 / 17 ≈ 26,470.5882 USDC",
            "5. USDC Output: Δy = y - y' = 30,000 - 26,470.5882 ≈ 3,529.41 USDC",
            "6. Effective Execution Price: P_eff = Δy / Δx = 3,529.4118 / 2 ≈ $1,764.71 USDC / ETH",
            "7. Price Impact: ((P_initial - P_eff) / P_initial) * 100 = ((2,000 - 1,764.7059) / 2,000) * 100 ≈ 11.76%"
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
        "title": "Problem 2 — Lending, Collateralization & Health Factor",
        "description": "A borrower deposits ETH worth $5,000 into a decentralized money market. The protocol defines a maximum Loan-to-Value (LTV) of 65% and a Liquidation Threshold of 80%. Calculate the maximum borrowing capacity, the Collateralization Ratio (CR) if the borrower borrows $2,000, and the resulting Health Factor (HF).",
        "givens": {
            "collateralUSD": 5000,
            "maxLTV": 0.65,
            "liquidationThreshold": 0.80,
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
        "title": "Problem 3 — Impermanent Loss with 3x Price Divergence",
        "description": "A liquidity provider deposits equal values of ETH and USDC into a 50/50 Uniswap v2 constant product pool. Subsequently, the market price of ETH triples (3x price increase, relative price ratio r = 3). Calculate the new relative price ratio r, the percentage impermanent loss, and the dollar difference compared to holding assuming an initial $10,000 deposit ($5,000 ETH + $5,000 USDC).",
        "givens": {
            "priceRatio": 3.0,
            "initialDepositUSD": 10000
        },
        "solution": [
            "1. Relative Price Ratio: r = P_new / P_initial = 3.0",
            "2. Impermanent Loss Formula: IL = (2 * sqrt(r)) / (1 + r) - 1",
            "3. Calculate Terms: sqrt(3) ≈ 1.73205; 2 * sqrt(3) ≈ 3.4641; 1 + r = 4.0",
            "4. IL Ratio: IL = 3.4641 / 4.0 - 1 = 0.866025 - 1 = -0.133975 ≈ -13.40%",
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
        "title": "Problem 4 — Utilization-Based Interest Rate Model",
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
]
