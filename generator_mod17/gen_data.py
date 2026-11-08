# -*- coding: utf-8 -*-
"""
Module 17 Data Definitions: Checklist Items, Quiz Questions, Interview Questions, and Numerical Problems.
Zero information loss - complete university-level curriculum.
"""

CHECKLIST_ITEMS = [
    {"id": "m17-obj-1", "label": "Design a decentralized exchange architecture (Factory, Pair, Router, Frontend)."},
    {"id": "m17-obj-2", "label": "Compare order book and AMM-based exchanges across 8 operational dimensions."},
    {"id": "m17-obj-3", "label": "Derive and implement the constant product formula (x * y = k) with integer arithmetic."},
    {"id": "m17-obj-4", "label": "Analyze Uniswap V2 pair contracts, token ordering, and TWAP reserve accumulation."},
    {"id": "m17-obj-5", "label": "Calculate initial LP minting (geometric mean) and subsequent proportional LP accounting."},
    {"id": "m17-obj-6", "label": "Understand Uniswap V3 concentrated liquidity, tick spacing, and virtual reserves."},
    {"id": "m17-obj-7", "label": "Derive token amounts across Uniswap V3 Regions A (below), B (in-range), and C (above)."},
    {"id": "m17-obj-8", "label": "Implement token swap execution lifecycle with strict slippage and deadline protection."},
    {"id": "m17-obj-9", "label": "Distinguish price impact from transaction slippage and analyze MEV sandwich vectors."},
    {"id": "m17-obj-10", "label": "Design multi-hop swap routing algorithms (BFS/Dijkstra) and atomic call execution."},
    {"id": "m17-obj-11", "label": "Design lending pool architecture with reserve configurations, supply/borrow caps, and LTV."},
    {"id": "m17-obj-12", "label": "Understand Compound V2 cToken exchange-rate accounting and Comptroller validation."},
    {"id": "m17-obj-13", "label": "Understand Aave V3 aToken rebasing, variable/stable debt tokens, and isolation modes."},
    {"id": "m17-obj-14", "label": "Calculate asset-weighted collateral factors, borrowing power, and LTV boundaries."},
    {"id": "m17-obj-15", "label": "Formulate and evaluate borrower Health Factors (HF) with 18-decimal fixed-point precision."},
    {"id": "m17-obj-16", "label": "Model liquidation thresholds, close factors, liquidation bonuses, and bad debt risks."},
    {"id": "m17-obj-17", "label": "Integrate Chainlink price feeds with heartbeat, timestamp freshness, and decimal scaling."},
    {"id": "m17-obj-18", "label": "Implement lending pool interest accrual using global cumulative borrow/supply indices."},
    {"id": "m17-obj-19", "label": "Analyze flash loan execution lifecycle, callback interfaces, and zero-collateral arbitrage."},
    {"id": "m17-obj-20", "label": "Execute multi-dimensional DeFi protocol risk analysis across 8 vulnerability classes."},
    {"id": "m17-obj-21", "label": "Perform collateral crash stress testing (e.g. 40% ETH drawdown HF collapse)."},
    {"id": "m17-obj-22", "label": "Enforce Checks-Effects-Interactions (CEI), SafeERC20, and actual balance reconciliation."},
    {"id": "m17-obj-23", "label": "Develop ExchangePool.sol with constant-product AMM, getAmountOut, and swapAForB."},
    {"id": "m17-obj-24", "label": "Develop LendingPool.sol with deposit, borrow, repay, and available liquidity accounting."},
    {"id": "m17-obj-25", "label": "Implement CollateralManager.sol with position authorization and Health Factor validation."},
    {"id": "m17-obj-26", "label": "Execute comprehensive automated unit test suites for exchange and lending pools."},
    {"id": "m17-obj-27", "label": "Verify exchange and lending invariant tests against mathematical properties."},
    {"id": "m17-obj-28", "label": "Deliver Advanced Capstone: Integrated Decentralized Exchange & Collateralized Lending DApp."}
]

QUIZ_QUESTIONS = [
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
        "explanation": "Initial invariant k = 10 * 20,000 = 200,000. New x' = 10 + 1 = 11 ETH. New y' = 200,000 / 11 = 18,181.81818 USDC. Output Δy = 20,000 - 18,181.81818 = 1,818.18182 USDC."
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
]

INTERVIEW_QUESTIONS = [
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
        "answer": "In a constant product AMM, reserves x and y must satisfy x * y = k. When a trader deposits Δx of Token A to receive Δy of Token B:\n1. Without fees: The new reserves are (x + Δx)(y - Δy) = k = x * y.\nExpanding: x*y - x*Δy + Δx*y - Δx*Δy = x*y.\nRearranging: y*Δx = Δy*(x + Δx)  ==>  Δy = (y * Δx) / (x + Δx).\n\n2. With a fee rate f (e.g. 0.3% so f = 0.003, or 997/1000 effective input):\nOnly Δx_effective = Δx * (1 - f) enters the pool for pricing:\n(x + Δx * (1 - f))(y - Δy) = x * y.\nSolving for Δy:\nΔy = (y * Δx * (1 - f)) / (x + Δx * (1 - f)).\nIn Solidity integer arithmetic, to prevent precision loss without floating points:\namountInWithFee = amountIn * 997;\nnumerator = amountInWithFee * reserveOut;\ndenominator = (reserveIn * 1000) + amountInWithFee;\nreturn numerator / denominator;",
        "takeaway": "Fee-free: Δy = (y * Δx) / (x + Δx). Fee-adjusted: Multiply Δx by (1000 - feeBps) in both numerator and denominator base."
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
        "takeaway": "Initial: sqrt(x * y) - 1000 wei burned. Subsequent: min((Δx / x), (Δy / y)) * totalSupply."
    },
    {
        "id": 8,
        "question": "Explain the concept of Uniswap V3 concentrated liquidity. How does it improve capital efficiency?",
        "answer": "In Uniswap V2, liquidity is uniformly stretched across the entire price spectrum from zero to infinity (0, ∞). Because most trading pairs fluctuate within a bounded range (e.g., ETH/USDC trading between $1,500 and $3,000), over 90% of V2 pool capital sits idle.\n\nUniswap V3 allows LPs to concentrate their liquidity within custom price intervals [Pa, Pb]. The pool uses virtual reserves that simulate the constant product curve within that specific band:\n- When spot price P is within [Pa, Pb], the position earns full trading fees with up to 4000x greater capital efficiency (depth per dollar deposited).\n- If P rises above Pb, the position is converted 100% into Token 1 and ceases earning fees.\n- If P drops below Pa, the position is converted 100% into Token 0 and ceases earning fees.\n- Each LP position is unique and represented as an ERC-721 NFT rather than a fungible ERC-20 token.",
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
        "answer": "Updating every individual borrower's balance every block would consume unscalable O(n) gas. Instead, lending protocols use global interest indices:\n1. Global Index Update: When an interaction occurs after time Δt, the pool calculates the interest rate R based on current utilization U. The borrow index is updated:\nBorrowIndex(t) = BorrowIndex(t - 1) * (1 + R * Δt).\n2. User Position Snapshots: When User A borrows amount P, the pool records: userPrincipal = P, userBorrowIndex = BorrowIndex(t).\n3. Lazy Evaluation: When User A returns to repay, their total debt is computed on demand:\nCurrentDebt = userPrincipal * (BorrowIndex(current) / userBorrowIndex).\nThis achieves O(1) gas complexity for interest accrual across unlimited users.",
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
]

NUMERICAL_PROBLEMS = [
    {
        "id": 1,
        "title": "Problem 1 — AMM Swap Execution (Uniswap V2 with 0.3% Fee)",
        "scenario": "A constant-product AMM pool contains:\n- Reserve A (ETH) = 50 ETH\n- Reserve B (USDC) = 100,000 USDC\n- Fee Rate = 0.3% (f = 0.003)\nCalculate the exact output of USDC received by a trader who swaps 5 ETH.",
        "solution_steps": [
            "Step 1: Calculate the fee-adjusted input amount:\nΔx_effective = Δx * (1 - 0.003) = 5 * 0.997 = 4.985 ETH.",
            "Step 2: Apply the constant product swap formula:\nΔy = (ReserveOut * Δx_effective) / (ReserveIn + Δx_effective)\nΔy = (100,000 * 4.985) / (50 + 4.985)",
            "Step 3: Compute numerator and denominator:\nNumerator = 498,500\nDenominator = 54.985",
            "Step 4: Divide:\nΔy = 498,500 / 54.985 ≈ 9,066.1089 USDC."
        ],
        "expected_answer": "Approximately 9,066.11 USDC",
        "note": "Notice the initial spot price was $2,000/ETH (100,000 / 50). The effective price received for 5 ETH is 9,066.11 / 5 = $1,813.22/ETH, reflecting price impact on the 10% reserve shift."
    },
    {
        "id": 2,
        "title": "Problem 2 — Subsequent LP Token Minting",
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
        "title": "Problem 3 — Compound Collateral & Remaining Borrowing Power",
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
        "title": "Problem 4 — Aave Health Factor Evaluation",
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
        "title": "Problem 5 — Liquidation Seizure and Bonus Calculation",
        "scenario": "A borrower's position drops below HF 1.0 and is liquidated:\n- Debt Repaid by Liquidator = $5,000\n- Protocol Liquidation Bonus = 7% (0.07)\nCalculate the total collateral value seized by the liquidator before gas and network costs.",
        "solution_steps": [
            "Step 1: Apply the liquidation bonus formula:\nCollateral Value Seized = Debt Repaid * (1 + Liquidation Bonus)",
            "Step 2: Multiply by bonus factor:\nCollateral Value Seized = $5,000 * (1 + 0.07) = $5,000 * 1.07",
            "Step 3: Compute final value:\nCollateral Value Seized = $5,350."
        ],
        "expected_answer": "$5,350 collateral value",
        "note": "The liquidator repays $5,000 of debt and receives $5,350 of collateral, earning a gross profit of $350 as compensation for executing the liquidation."
    }
]
