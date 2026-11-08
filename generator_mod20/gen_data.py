# -*- coding: utf-8 -*-
"""
Module 20 Data: Oracles & Chainlink
- CHECKLIST_ITEMS: 28 items
- QUIZ_QUESTIONS: 20 questions (including all 10 canonical module questions)
- INTERVIEW_QUESTIONS: 25 questions
- NUMERICAL_PROBLEMS: 5 problems
"""

CHECKLIST_ITEMS = [
  {"id": "c1", "label": "Understand the Blockchain Oracle Problem & non-deterministic external data boundaries", "category": "theory"},
  {"id": "c2", "label": "Calculate collateral valuation & borrowing limits (e.g. 1 ETH @ $3,000 * 70% = $2,100 USDC)", "category": "theory"},
  {"id": "c3", "label": "Differentiate Centralized vs Decentralized Oracles (single point of failure vs DON)", "category": "theory"},
  {"id": "c4", "label": "Analyze Oracle Architecture: Data Sources, Oracle Nodes, DON, Aggregator, Proxy & Consumer", "category": "theory"},
  {"id": "c5", "label": "Master Chainlink Suite: Data Feeds, VRF, Data Streams, CRE, and CCIP", "category": "theory"},
  {"id": "c6", "label": "Inspect AggregatorV3Interface methods: decimals(), latestRoundData(), and description()", "category": "theory"},
  {"id": "c7", "label": "Master latestRoundData() parameters: roundId, answer, startedAt, updatedAt, answeredInRound", "category": "theory"},
  {"id": "c8", "label": "Convert raw integer price feeds (e.g. 350000000000 / 10^8 = $3,500) with dynamic decimals", "category": "theory"},
  {"id": "c9", "label": "Understand Feed Update Triggers: Deviation threshold vs Heartbeat threshold", "category": "theory"},
  {"id": "c10", "label": "Implement PriceFeedConsumer.sol with input sanitization and positive price checks", "category": "theory"},
  {"id": "c11", "label": "Enforce Data Freshness validation: require(block.timestamp - updatedAt <= maxPriceAge)", "category": "theory"},
  {"id": "c12", "label": "Perform ETH (wei 10^18) to USD conversion math retaining price feed decimal precision", "category": "theory"},
  {"id": "c13", "label": "Examine Offchain Reporting (OCR) and decentralized multi-node consensus workflows", "category": "theory"},
  {"id": "c14", "label": "Understand Chainlink Automation migration to Chainlink Runtime Environment (CRE)", "category": "theory"},
  {"id": "c15", "label": "Analyze Insecurity of on-chain pseudo-randomness (keccak256, block.timestamp, prevrandao)", "category": "theory"},
  {"id": "c16", "label": "Master Chainlink VRF v2.5: Verifiable Random Function, proofs, and subscription vs direct funding", "category": "theory"},
  {"id": "c17", "label": "Map VRF random words to weighted probability distributions (NFT mystery box categories)", "category": "theory"},
  {"id": "c18", "label": "Study Off-Chain Computation, CRE TypeScript/Go workflows, and Functions sunsetting", "category": "theory"},
  {"id": "c19", "label": "Compare Median Aggregation vs Mean Aggregation for outlier and flash loan resilience", "category": "theory"},
  {"id": "c20", "label": "Implement L2 Sequencer Uptime Feeds to prevent liquidation exploits during L2 downtime", "category": "theory"},
  {"id": "c21", "label": "Audit Oracle Security vectors: flash loans, stale data, single-source reliance, and front-running", "category": "theory"},
  {"id": "c22", "label": "Evaluate 9 Oracle Failure Scenarios, consequences, and fallback circuit breaker designs", "category": "theory"},
  {"id": "c23", "label": "Analyze Real-World Assets (RWAs), tokenized gold, and Chainlink Proof of Reserve (PoR)", "category": "theory"},
  {"id": "c24", "label": "Build External API workflows using CRE triggers, HTTP capabilities, and signed reports", "category": "theory"},
  {"id": "c25", "label": "Execute Practical Lab: Deploy PriceFeedConsumer.sol to Ethereum Sepolia with live ETH/USD feed", "category": "lab"},
  {"id": "c26", "label": "Test stale-data rejection by deploying with maxPriceAge = 1 second on Sepolia", "category": "lab"},
  {"id": "c27", "label": "Complete all 4 Advanced Practical Assignments (BTC/USD consumer, Collateral val, Circuit breaker, CRE)", "category": "lab"},
  {"id": "c28", "label": "Achieve 100% on the 20 Knowledge Assessment questions and 5 Numerical Derivation problems", "category": "assessment"}
]

QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "question": "What is the primary purpose of a blockchain oracle?",
    "options": [
      "To generate new blockchain blocks",
      "To connect smart contracts with external information",
      "To replace consensus protocols",
      "To mine cryptocurrency"
    ],
    "correctAnswer": 1,
    "explanation": "Smart contracts execute in deterministic, sandboxed blockchain environments without direct access to external APIs or off-chain data. An oracle securely retrieves, verifies, and delivers real-world external data onto the blockchain."
  },
  {
    "id": "q2",
    "question": "What is the oracle problem in blockchain development?",
    "options": [
      "The inability to create cryptocurrency wallets",
      "The challenge of securely delivering reliable external data to blockchains",
      "The inability to compile and deploy Solidity smart contracts",
      "The financial cost of storing data on blockchain ledgers"
    ],
    "correctAnswer": 1,
    "explanation": "Blockchains are deterministic systems where every node must arrive at the exact same state. External real-world data is non-deterministic, varying across APIs and exchanges. The oracle problem is the security challenge of bringing external data on-chain without introducing centralized points of failure or manipulation."
  },
  {
    "id": "q3",
    "question": "Which Chainlink service provides aggregated on-chain market prices for DeFi?",
    "options": [
      "Chainlink VRF",
      "Chainlink CCIP",
      "Chainlink Data Feeds",
      "MetaMask JSON-RPC"
    ],
    "correctAnswer": 2,
    "explanation": "Chainlink Data Feeds provide decentralized, on-chain price and financial data aggregated from multiple independent market providers and oracle node operators."
  },
  {
    "id": "q4",
    "question": "Which function of the AggregatorV3Interface retrieves the latest price answer and timestamp?",
    "options": [
      "getBalance()",
      "latestRoundData()",
      "transfer()",
      "approve()"
    ],
    "correctAnswer": 1,
    "explanation": "The latestRoundData() function returns: (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)."
  },
  {
    "id": "q5",
    "question": "In the latestRoundData() response, what does the updatedAt field represent?",
    "options": [
      "The contract creation time",
      "The Unix timestamp when the price answer was last updated on-chain",
      "The user's wallet creation time",
      "The target block gas limit"
    ],
    "correctAnswer": 1,
    "explanation": "updatedAt is the block timestamp (seconds since Unix epoch) recorded by the aggregator when the current round's answer was validated and written to the blockchain."
  },
  {
    "id": "q6",
    "question": "What does Chainlink VRF (Verifiable Random Function) provide?",
    "options": [
      "Cryptographically verifiable randomness and proof verified on-chain",
      "Automatic token minting for staking rewards",
      "Proof of Work blockchain mining acceleration",
      "Biometric wallet authentication"
    ],
    "correctAnswer": 0,
    "explanation": "Chainlink VRF generates random values along with a cryptographic proof (public key elliptic curve evaluation). Smart contracts can verify this proof on-chain to guarantee the randomness was not manipulated by miners, sequencers, or oracle operators."
  },
  {
    "id": "q7",
    "question": "Which Chainlink VRF version should developers use for modern implementations as of late 2026?",
    "options": [
      "VRF v1",
      "VRF v2",
      "VRF v2.5",
      "Any unsupported legacy version"
    ],
    "correctAnswer": 2,
    "explanation": "Chainlink VRF v2.5 is the current production standard supporting both subscription and direct funding modes. Legacy VRF v1 is scheduled for shutdown on Nov 18, 2026, and VRF v2 on Nov 30, 2026."
  },
  {
    "id": "q8",
    "question": "What is a 'heartbeat threshold' in Chainlink Data Feeds?",
    "options": [
      "A wallet inactivity timeout",
      "A time-based trigger that forces a feed update even if the price has not moved beyond the deviation threshold",
      "A private key cryptographic entropy measure",
      "A Proof of Stake validator liveness penalty"
    ],
    "correctAnswer": 1,
    "explanation": "Chainlink feeds update whenever the price moves beyond a defined deviation threshold (e.g. 0.5%) OR after a maximum time duration elapses (the heartbeat threshold, e.g. 3600 seconds), ensuring data freshness even during stable market periods."
  },
  {
    "id": "q9",
    "question": "What is the primary architectural purpose of oracle aggregation?",
    "options": [
      "To combine independent observations into a single reliable result that resists outliers and compromised nodes",
      "To artificially increase Ethereum gas prices",
      "To delete historical transactions from the ledger",
      "To generate private keys for multi-sig contracts"
    ],
    "correctAnswer": 0,
    "explanation": "Aggregation (such as taking the median of independent observations reported by multiple Decentralized Oracle Network nodes) prevents any single compromised or malicious node from manipulating the final on-chain answer."
  },
  {
    "id": "q10",
    "question": "What is Chainlink's modern standard for workflow orchestration and decentralized off-chain computation?",
    "options": [
      "Legacy Chainlink Functions only",
      "Chainlink Runtime Environment (CRE)",
      "MetaMask Browser Extensions",
      "ERC-20 Token Transfers"
    ],
    "correctAnswer": 1,
    "explanation": "Chainlink Runtime Environment (CRE) is the modern orchestration standard for connecting external APIs, data sources, and off-chain computation via TypeScript/Go workflows with BFT consensus, replacing sunsetted legacy Functions and Automation services."
  },
  {
    "id": "q11",
    "question": "If an ETH/USD Chainlink price feed has 8 decimal places and returns a raw answer of 350000000000, what is the actual price in USD?",
    "options": [
      "$35,000",
      "$3,500",
      "$350",
      "$35.00"
    ],
    "correctAnswer": 1,
    "explanation": "Price = RawAnswer / 10^Decimals = 350000000000 / 10^8 = $3,500.00."
  },
  {
    "id": "q12",
    "question": "Why is generating random numbers with 'keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender))' unsafe for high-stakes games?",
    "options": [
      "Because Solidity does not allow keccak256 hashing.",
      "Because block miners/validators and sequencers can bias, predict, or selectively withhold blocks containing unfavorable random outcomes.",
      "Because the EVM gas cost exceeds 30 million gas.",
      "Because timestamps can never be read inside smart contracts."
    ],
    "correctAnswer": 1,
    "explanation": "On-chain variables like block.timestamp and prevrandao are visible to block builders/validators before a block is published. A validator or MEV bot can simulate the transaction outcome and choose not to publish the block if they lose, making it highly exploitable."
  },
  {
    "id": "q13",
    "question": "Why is Median Aggregation preferred over Mean (Average) Aggregation in decentralized oracle networks?",
    "options": [
      "Because median requires more complex quadratic equations.",
      "Because median is robust against extreme outliers and malicious minority nodes reporting manipulated prices.",
      "Because mean cannot be computed with integer arithmetic.",
      "Because median eliminates the need for price feeds."
    ],
    "correctAnswer": 1,
    "explanation": "In an oracle network of 5 nodes where 4 report ~$3,000 and 1 rogue node reports $300,000, the Mean becomes $62,400 (drastically distorted), whereas the Median remains $3,000 (completely unaffected by extreme outliers)."
  },
  {
    "id": "q14",
    "question": "What vulnerability occurs when a DeFi lending contract checks 'answer > 0' but neglects to check 'block.timestamp - updatedAt <= maxPriceAge'?",
    "options": [
      "Integer Underflow Vulnerability",
      "Stale Data Attack (the contract continues executing transactions using an outdated price after the feed stops updating)",
      "Reentrancy Attack via ERC-777",
      "Gas Limit Denial of Service"
    ],
    "correctAnswer": 1,
    "explanation": "If a feed stops updating due to upstream API outages, network congestion, or deprecation, the latestRoundData() will still return the last positive answer with an old timestamp. Without freshness validation, attackers can exploit the frozen price after the true market price moves."
  },
  {
    "id": "q15",
    "question": "What is the purpose of Chainlink L2 Sequencer Uptime Feeds on networks like Arbitrum and Optimism?",
    "options": [
      "To track the sequencer's electricity consumption.",
      "To detect when an L2 sequencer goes offline and enforce a grace period after restart before allowing liquidations.",
      "To mine proof-of-work hashes for L2 blocks.",
      "To replace Layer 1 consensus entirely."
    ],
    "correctAnswer": 1,
    "explanation": "When an L2 sequencer goes down, users cannot submit transactions to repay loans. If prices move on L1 during downtime, restarting the sequencer could trigger mass unfair liquidations before users can post collateral. Uptime Feeds enforce a mandatory post-restart grace period."
  },
  {
    "id": "q16",
    "question": "How does an attacker execute a Flash Loan Oracle Manipulation Attack against an AMM spot price?",
    "options": [
      "By mining empty blocks for 24 hours.",
      "By borrowing millions in uncollateralized capital within a single tx, swapping into a low-liquidity pool to skew the spot price, and borrowing against inflated collateral in a vulnerable protocol.",
      "By guessing the private key of the Chainlink multi-sig.",
      "By submitting invalid signatures to the EVM."
    ],
    "correctAnswer": 1,
    "explanation": "An attacker borrows capital via a flash loan, executes a huge swap in a single low-liquidity Uniswap pool to artificially inflate the spot price, calls a vulnerable lending protocol that reads that spot price directly, borrows real assets against the synthetic valuation, and returns the flash loan with profit."
  },
  {
    "id": "q17",
    "question": "In Chainlink Data Feeds architecture, what is the role of the Proxy Contract?",
    "options": [
      "To hide the identity of the developer from users.",
      "To provide a persistent, unchanging contract address for consumer dapps while allowing the underlying Aggregator implementation to be upgraded seamlessly.",
      "To convert ERC-20 tokens into native ETH.",
      "To verify ECDSA signatures on Layer 2."
    ],
    "correctAnswer": 1,
    "explanation": "The Proxy contract holds a constant address that consumer smart contracts call. If Chainlink deploys a new aggregator with improved OCR algorithms or node sets, the proxy pointer is updated without requiring hundreds of client dapps to redeploy."
  },
  {
    "id": "q18",
    "question": "How does Offchain Reporting (OCR) save gas compared to original Chainlink v1 on-chain aggregation?",
    "options": [
      "By deleting transaction calldata completely.",
      "By having oracle nodes communicate peer-to-peer off-chain, aggregate observations, and submit a single combined cryptographic report signed by a quorum to L1 in one transaction.",
      "By replacing Ethereum nodes with cloud servers.",
      "By converting all numbers to 8-bit integers."
    ],
    "correctAnswer": 1,
    "explanation": "In v1, every oracle node submitted an independent on-chain transaction costing N transactions per round. OCR enables nodes to exchange observations off-chain, compute the median, sign the aggregate report, and submit it on-chain in a single transaction, slashing gas consumption by over 90%."
  },
  {
    "id": "q19",
    "question": "What is the formula to convert an ETH amount in wei (18 decimals) into USD using a raw price with D decimals?",
    "options": [
      "USD = (ethAmountWei * rawPrice) / 1e18",
      "USD = ethAmountWei + rawPrice",
      "USD = (ethAmountWei / rawPrice) * 1e8",
      "USD = rawPrice * 1e18"
    ],
    "correctAnswer": 0,
    "explanation": "Because 1 ETH = 10^18 wei, dividing by 1e18 normalizes the wei amount to whole ETH, while the product with rawPrice retains the feed's D decimal precision: USD_raw = (ethAmountWei * rawPrice) / 1e18."
  },
  {
    "id": "q20",
    "question": "What is Chainlink Data Streams, and how does its architectural model differ from standard Data Feeds?",
    "options": [
      "It is an audio streaming service for crypto podcasts.",
      "It is a low-latency, pull-based oracle architecture delivering sub-second market reports off-chain that are cryptographically verified on-chain only when a user executes a trade.",
      "It is a proof-of-work algorithm for mining LINK tokens.",
      "It is a database for storing blockchain block headers."
    ],
    "correctAnswer": 1,
    "explanation": "Standard Data Feeds use a push model where updates are written on-chain periodically. Data Streams uses a pull model where high-frequency sub-second reports are published off-chain; trading dapps pull the signed report and verify it on-chain during trade execution, enabling ultra-low latency DeFi derivatives."
  }
]

INTERVIEW_QUESTIONS = [
  {
    "id": "iq1",
    "question": "Explain the Blockchain Oracle Problem in detail. Why can't the Ethereum Virtual Machine directly make an HTTP GET request to an external API like Coinbase or CoinMarketCap?",
    "context": "Foundational Architecture & Determinism",
    "answer": "Blockchains rely on deterministic state transition functions: given state S and transaction T, every validating node worldwide must compute the exact same state S'. If an EVM opcode `HTTP_GET` existed, every node executing a block at different times and network locations would receive slightly different responses (e.g. price fluctuations, API rate limits, DNS outages, or geographic content filtering). Because nodes would disagree on the state transition, consensus would instantly shatter and the chain would fork. Oracles solve this by obtaining data off-chain and posting it in an authenticated on-chain transaction that all nodes can deterministically evaluate.",
    "takeaway": "Determinism is the foundational law of blockchain consensus; external data must be brought on-chain via signed, verifiable transactions."
  },
  {
    "id": "iq2",
    "question": "Walk through the end-to-end architecture of a Chainlink Price Feed from off-chain data sources to a consumer lending contract.",
    "context": "Chainlink Architecture & Protocol Flow",
    "answer": "1) Data Sources: Premium market data aggregators (Coin Metrics, Brave New Coin) aggregate trading volume across all centralized and decentralized exchanges. 2) Oracle Node Operators: Independent, security-reviewed node operators run Chainlink nodes that query multiple premium data providers. 3) DON & Offchain Reporting (OCR): Nodes exchange signed observations peer-to-peer off-chain, compute the median answer, and collect a threshold quorum of signatures. 4) Transmission: A designated transmitter node submits the aggregated report to the on-chain Aggregator contract in a single transaction. 5) Aggregator Proxy: Updates its internal pointer to the latest round data. 6) Consumer Contract: Calls `AggregatorV3Interface(proxyAddress).latestRoundData()` to read price and validate freshness.",
    "takeaway": "Chainlink decouples data sourcing, off-chain aggregation, on-chain proxy routing, and client consumption for maximum resilience."
  },
  {
    "id": "iq3",
    "question": "How do you audit and harden a smart contract's integration with Chainlink Data Feeds against stale or invalid price observations?",
    "context": "Smart Contract Auditing & Security",
    "answer": "A secure integration must execute 5 mandatory checks on `latestRoundData()`: 1) Verify `answer > 0` to reject zero or negative price reports; 2) Check `updatedAt != 0` and `updatedAt <= block.timestamp` to prevent uninitialized feeds or future-dated anomalies; 3) Enforce `block.timestamp - updatedAt <= maxPriceAge` (where maxPriceAge is tuned to the feed's heartbeat + tolerance); 4) Verify `answeredInRound >= roundId` to confirm the answer was produced in the requested round and not carried forward; 5) Implement min/max sanity bounds (circuit breakers) to protect against flash crashes or multi-sig compromises.",
    "takeaway": "Never blindly trust `latestRoundData()`; validate answer positivity, timestamp freshness, round completeness, and sane price bounds."
  },
  {
    "id": "iq4",
    "question": "Describe the mechanics of a Flash Loan Oracle Manipulation Attack against a Uniswap V2 AMM spot price. How does Chainlink mitigate this vulnerability?",
    "context": "DeFi Attack Vectors & Flash Loans",
    "answer": "In an AMM spot price oracle, price is determined by the ratio of pool reserves: $P = y / x$. An attacker takes a $50M flash loan, dumps token X into the pool, skewing reserves so $P$ surges $10\times$ within that single block. If a lending protocol reads this spot price directly, it values the attacker's collateral at $10\times$, allowing them to borrow and drain protocol reserves before the flash loan is repaid. Chainlink eliminates this because: 1) It aggregates volume-weighted data across hundreds of global exchanges, not a single on-chain pool; 2) It uses off-chain reporting with median aggregation; 3) An on-chain flash loan cannot alter off-chain spot market medians within a single transaction.",
    "takeaway": "Never use single-pool AMM spot reserves as a price oracle; use volume-weighted decentralized oracles like Chainlink or multi-block TWAPs."
  },
  {
    "id": "iq5",
    "question": "What is the difference between Push Oracles (Chainlink Data Feeds) and Pull Oracles (Chainlink Data Streams / Pyth)? Which is superior for high-frequency perpetuals DEXs?",
    "context": "Oracle Models & Latency Engineering",
    "answer": "Push Oracles (Data Feeds) periodically push price updates on-chain based on deviation (e.g. 0.5%) or heartbeat (e.g. 1 hour). They incur continuous gas costs to keep on-chain state warm and have multi-second to minute latencies. Pull Oracles (Data Streams) publish continuous sub-second signed price updates to an off-chain peer-to-peer network. When a user executes a perpetual trade or liquidation, their transaction pulls the latest signed price payload and submits it to the contract, which verifies the cryptographic signature on-chain before executing the trade. For high-frequency perpetual DEXs, Pull Oracles are superior because they eliminate latency arbitrage and reduce on-chain gas overhead.",
    "takeaway": "Push oracles suit passive collateral valuation; Pull oracles enable sub-second, front-running-resistant derivatives trading."
  },
  {
    "id": "iq6",
    "question": "Explain how Chainlink VRF v2.5 generates verifiable randomness. Why is the cryptographic proof verification step critical?",
    "context": "Verifiable Randomness & Cryptography",
    "answer": "Chainlink VRF uses public key cryptography (specifically the secp256k1 elliptic curve) based on Goldwasser, Micali, and Rivest's VRF construction. When a contract requests randomness, the VRF Coordinator emits an event with a seed. The off-chain oracle generates a random output using its private key and the seed, alongside a non-interactive zero-knowledge proof $\\pi$. The proof is submitted back to `VRFCoordinatorV2_5.fulfillRandomWords()`, which evaluates the elliptic curve pairing to verify that the random word was authentically derived from the oracle's registered public key and the seed. Without proof verification, an oracle could inspect user bets and forge favorable random numbers.",
    "takeaway": "VRF guarantees that randomness cannot be predicted, biased, or retroactively altered by either users, validators, or oracle operators."
  },
  {
    "id": "iq7",
    "question": "What is the Chainlink Runtime Environment (CRE), and why has Chainlink migrated away from legacy Chainlink Functions and Automation?",
    "context": "Modern Web3 Infrastructure & CRE",
    "answer": "Legacy Chainlink Functions provided isolated JavaScript execution sandboxes, while Chainlink Automation v1/v2 ran basic cron-like upkeeps. As enterprise Web3 workflows expanded to require multi-chain coordination, off-chain API ingestion, and complex business logic, Chainlink unified these capabilities into the Chainlink Runtime Environment (CRE). CRE is a decentralized execution platform where developers author workflows in TypeScript or Go. Workflows can listen to custom triggers (cron, HTTP, on-chain events), query arbitrary REST APIs, read multi-chain states, reach Byzantine Fault Tolerant (BFT) consensus across DON nodes, and write verified cryptographic reports to any EVM chain.",
    "takeaway": "CRE serves as a universal decentralized computing platform, superseding legacy Functions and Automation with unified BFT workflows."
  },
  {
    "id": "iq8",
    "question": "What happens if an L2 Sequencer goes offline while an application uses Chainlink Price Feeds? How does the L2 Sequencer Uptime Feed protect borrowers?",
    "context": "Layer 2 Reliability & Grace Periods",
    "answer": "If an L2 sequencer crashes, user transactions (such as adding collateral or repaying debt) are blocked. However, L1 market prices continue moving. When the sequencer comes back online, a flood of queued liquidation transactions could execute immediately against borrowers who had no physical opportunity to top up their margin. Chainlink's L2 Sequencer Uptime Feed provides an on-chain status flag: `0` for active, `1` for down. When the sequencer recovers, the feed records the restart timestamp and enforces a configurable grace period (e.g. 1 hour). Lending protocols check this feed and reject liquidations during the grace period.",
    "takeaway": "Always integrate L2 Sequencer Uptime Feeds with post-restart grace periods on Arbitrum, Optimism, Base, and Metis."
  },
  {
    "id": "iq9",
    "question": "How do you handle decimal precision discrepancies across different Chainlink price feeds in Solidity?",
    "context": "Solidity Mathematics & Tokenomics",
    "answer": "Developers must NEVER assume a price feed has 8 decimals. While most USD pairs (ETH/USD, BTC/USD) use 8 decimals, crypto-to-crypto pairs (e.g. ETH/BTC) typically use 18 decimals, and certain synthetic or commodity pairs differ. A resilient contract must query `priceFeed.decimals()` dynamically during initialization or execution and normalize values to a standard precision (e.g. 18 decimals): if `feedDecimals < 18`, multiply price by `10**(18 - feedDecimals)`; if `feedDecimals > 18`, divide by `10**(feedDecimals - 18)`. All multiplications must precede divisions to prevent precision loss.",
    "takeaway": "Always query decimals() dynamically; standardize all internal accounting to a uniform 18-decimal base."
  },
  {
    "id": "iq10",
    "question": "Why is Offchain Reporting (OCR) considered a revolutionary upgrade for decentralized oracle networks?",
    "context": "Consensus Protocols & Gas Optimization",
    "answer": "In Chainlink v1, each oracle node independently broadcasted an on-chain Ethereum transaction with its price observation. If a feed had 31 nodes, every round consumed 31 full L1 transactions, causing extreme gas consumption, block congestion, and susceptibility to miner frontrunning. OCR introduced an off-chain Byzantine Fault Tolerant consensus round: nodes communicate via a peer-to-peer libp2p network, exchange encrypted observations, sort values, compute the median, and generate threshold Schnorr/ECDSA signatures. A single aggregated report is submitted on-chain by one node, reducing on-chain gas costs by over 90% while improving scalability.",
    "takeaway": "OCR shifted oracle consensus off-chain, compressing N on-chain transactions into a single cryptographically aggregated batch."
  },
  {
    "id": "iq11",
    "question": "What is Chainlink Proof of Reserve (PoR), and how does it protect stablecoin holders and tokenized Real-World Assets (RWAs)?",
    "context": "Real-World Assets & Proof of Reserve",
    "answer": "Proof of Reserve provides automated on-chain verification of collateral backing off-chain assets (e.g. fiat-backed stablecoins like TUSD, tokenized gold like PAXG, or cross-chain wrapped tokens like WBTC). Independent oracle nodes connect directly to custodian bank APIs, vault audit registries, or external blockchain balance queries. The feed updates the total collateral reserve on-chain. Smart contracts can query the PoR feed before minting new wrapped tokens: if `circulatingSupply + newMint > confirmedReserves`, the contract automatically reverts the transaction, preventing unbacked fractional-reserve minting.",
    "takeaway": "Proof of Reserve guarantees programmatic solvency by enforcing that on-chain token supply cannot exceed verified off-chain reserves."
  },
  {
    "id": "iq12",
    "question": "How do you defend an NFT mystery box game against 'Selective Rejection' attacks when using Chainlink VRF?",
    "context": "VRF Vulnerabilities & Game Design",
    "answer": "In a selective rejection attack, a malicious user initiates a mystery box roll. If the VRF callback reveals a common NFT, the user causes the transaction to revert (e.g. by setting a gas limit that fails inside the callback, or rejecting the transfer in an ERC-721 `onERC721Received` hook). Defenses: 1) Decouple the request from fulfillment: in `fulfillRandomWords()`, store the random word and assign the item internally to the user's account state without transferring tokens or making external calls; 2) Do not permit users to cancel pending VRF requests; 3) Charge non-refundable mint fees upfront during the initial request phase.",
    "takeaway": "Never make external calls or transfers inside VRF callbacks; record random words in state and let users claim rewards in separate transactions."
  },
  {
    "id": "iq13",
    "question": "Explain the concept of 'Deviation Threshold' versus 'Heartbeat' in Chainlink Data Feeds. How do they interact during high vs low volatility?",
    "context": "Feed Mechanics & Economics",
    "answer": "Deviation Threshold is the percentage price movement required to trigger an immediate off-schedule feed update (e.g. 0.5% on ETH/USD). During high market volatility, prices move rapidly, causing frequent updates as the deviation threshold is repeatedly crossed. Heartbeat is the maximum time interval (e.g. 3600 seconds / 1 hour) permitted between updates regardless of price stability. During flat, low-volatility periods where price moves <0.5%, the heartbeat timer ensures an on-chain update is forced every hour so consumer contracts can confirm the feed is alive and fresh.",
    "takeaway": "Deviation threshold bounds maximum price slippage during volatility; heartbeat bounds maximum age during quiet markets."
  },
  {
    "id": "iq14",
    "question": "What is an Oracle Circuit Breaker, and how should it be structured in a DeFi lending protocol?",
    "context": "Risk Management & Circuit Breakers",
    "answer": "An Oracle Circuit Breaker is an automated safety mechanism that halts sensitive operations (borrowing, liquidations) when oracle data exhibits anomalous behavior. A robust circuit breaker checks: 1) Absolute Bounds: rejects prices outside reasonable historical ranges (e.g. ETH < $500 or ETH > $20,000); 2) Velocity / Rate of Change: rejects price moves greater than X% within Y blocks (e.g. >30% drop in a single block); 3) Secondary Reference Discrepancy: compares Chainlink against an on-chain TWAP (Uniswap V3); if deviation exceeds 5%, the circuit breaker trips, pausing liquidations and alerting protocol admins.",
    "takeaway": "Circuit breakers protect protocols from catastrophic insolvencies when external feeds experience extreme Black Swan anomalies."
  },
  {
    "id": "iq15",
    "question": "Describe the mathematical difference between Time-Weighted Average Price (TWAP) and Volume-Weighted Average Price (VWAP). Which is more resilient against oracle manipulation?",
    "context": "Mathematical Modeling & TWAPs",
    "answer": "TWAP weights prices purely by duration: $\\text{TWAP} = \\frac{\\sum (P_i \\times \\Delta t_i)}{\\sum \\Delta t_i}$. VWAP weights prices by traded volume: $\\text{VWAP} = \\frac{\\sum (P_i \\times V_i)}{\\sum V_i}$. In a decentralized setting, a short-window VWAP can be manipulated in a single block by trading massive volume via a flash loan. A multi-block TWAP (e.g. 30-minute Uniswap V3 geometric TWAP) requires an attacker to sustain an artificially inflated price across multiple consecutive blocks, exposing them to immense arbitrage losses from other market participants.",
    "takeaway": "TWAPs force attackers to incur capital risk over multiple blocks, making single-block flash loan manipulation mathematically impossible."
  },
  {
    "id": "iq16",
    "question": "Why did the Venus Protocol on BNB Chain suffer an $11M bad debt exploit involving the Chainlink XVS price feed in May 2021?",
    "context": "Historical Post-Mortems & Risk Analysis",
    "answer": "The XVS token had thin trading liquidity on centralized exchanges. Speculators pumped the spot price of XVS from $70 to $140 on exchanges. Chainlink's nodes accurately reported the off-chain market price of $140 because that was indeed the trading price. Attackers deposited XVS into Venus at the $140 valuation and borrowed massive amounts of real assets (BTC and ETH). When the synthetic XVS market crashed back to $40, the deposited collateral was worth far less than the borrowed assets, leaving Venus with $11M in bad debt. The root cause was not an oracle failure, but a risk parameters failure: accepting a low-liquidity token with high collateral factors.",
    "takeaway": "An oracle can accurately report an inflated market price; protocols must enforce borrow caps and low collateral factors on illiquid assets."
  },
  {
    "id": "iq17",
    "question": "How does Chainlink CCIP (Cross-Chain Interoperability Protocol) utilize decentralized oracle networks for cross-chain message passing?",
    "context": "Cross-Chain Architecture & CCIP",
    "answer": "CCIP uses two independent decentralized oracle networks: 1) The Committing and Executing DON, which monitors source chain events, bundles messages, generates Merkle roots, commits them to the destination chain, and executes the transfers; and 2) The Risk Management Network (an independent secondary network written in Rust with independent node operators) that verifies committed Merkle roots against source chain state. If the Risk Management Network detects an anomaly or signature mismatch, it halts cross-chain execution automatically, preventing bridge drain exploits.",
    "takeaway": "CCIP separates execution from validation through an independent Risk Management Network, setting a new gold standard for bridge security."
  },
  {
    "id": "iq18",
    "question": "Explain Modulo Bias when mapping a 256-bit VRF random word to a specific range (e.g. 0 to 99). How do you eliminate it?",
    "context": "Cryptographic Randomness & Modulo Bias",
    "answer": "A random word is a uniform integer in $[0, 2^{256} - 1]$. When using `randomWord % N`, modulo bias occurs if $2^{256}$ is not evenly divisible by $N$. Numbers in $[0, (2^{256} \\bmod N) - 1]$ have a slightly higher probability ($1$ part in $2^{256}$) of being selected than numbers above that remainder. For $N = 100$, because $2^{256}$ is unimaginably large ($\\sim 1.15 \\times 10^{77}$), the bias is $\\sim 10^{-75}\\%$, which is mathematically negligible for games. However, in strict cryptographic applications, rejection sampling is used: discard any random word $\\ge 2^{256} - (2^{256} \\bmod N)$ and request a new word to guarantee 100% uniformity.",
    "takeaway": "For standard consumer games, $2^{256} \\bmod N$ bias is astronomically negligible; use rejection sampling when strict mathematical uniformity is legally required."
  },
  {
    "id": "iq19",
    "question": "What is the difference between Direct Funding and Subscription Method in Chainlink VRF v2.5?",
    "context": "VRF Infrastructure & Cost Management",
    "answer": "In the Subscription Method, a developer creates a central subscription account on-chain, pre-funds it with LINK or native gas tokens, and whitelists consumer contracts. Each VRF request draws gas automatically from the subscription balance, allowing multiple contracts to share a pooled balance without holding tokens themselves. In Direct Funding, the consumer contract itself must hold tokens and pay the exact gas fee in the same transaction as the randomness request. Subscriptions are preferred for production dapps with ongoing user interactions, while direct funding is suitable for one-off or user-funded mints.",
    "takeaway": "Subscriptions pool gas payments across multiple dapps; direct funding requires individual contracts to manage their own token balances."
  },
  {
    "id": "iq20",
    "question": "How do you design a decentralized oracle for an external weather insurance smart contract paying out upon hurricane events?",
    "context": "Parametric Insurance & Real-World APIs",
    "answer": "1) Data Sources: Query three independent authoritative meteorological agencies (NOAA, European Weather Agency, Japan Meteorological Agency); 2) Orchestration via CRE: A Chainlink Runtime Environment workflow executes every hour via a cron trigger, making authenticated HTTP requests to all 3 weather APIs; 3) Consensus: The DON compares reported sustained wind speeds at the insured coordinates. If $\\ge 2$ agencies report wind speeds $> 130\\text{ mph}$ (Category 4), BFT consensus is reached; 4) On-Chain Execution: A signed report is dispatched to the insurance contract, which automatically releases escrowed payouts to affected policyholders without claims adjusters.",
    "takeaway": "Parametric insurance replaces subjective claims processing with deterministic, multi-source oracle triggers."
  },
  {
    "id": "iq21",
    "question": "Why is an on-chain fallback oracle (like Uniswap V3 TWAP) dangerous if implemented incorrectly as an automatic failover?",
    "context": "Fallback Systems & Security Pitfalls",
    "answer": "If a contract automatically switches to a secondary oracle when Chainlink reports stale data or an error, attackers can exploit this behavior. If the fallback oracle has lower liquidity or is easier to manipulate (e.g. an illiquid AMM pool), an attacker can deliberately trigger a temporary condition that invalidates the primary oracle (or wait for network congestion) and manipulate the fallback pool to execute an exploit. A secure fallback should pause high-risk actions (like borrowing and unbacked liquidations) and only allow defensive actions (like adding collateral) until governance or primary feeds recover.",
    "takeaway": "Never fail over to a weaker, easily manipulated oracle; pause sensitive operations rather than accepting low-integrity backup data."
  },
  {
    "id": "iq22",
    "question": "What is 'AnsweredInRound' in AggregatorV3Interface, and how can an attacker exploit a contract that ignores it?",
    "context": "Chainlink Validation & Round Consistency",
    "answer": "When `latestRoundData()` is called, it returns `roundId` (the current aggregator round) and `answeredInRound` (the round in which the answer was actually computed). In rare network anomalies or aggregator migrations, a new round may be opened without completing, carrying over a stale answer from an older round. By asserting `require(answeredInRound >= roundId, \"Stale round\")`, the contract ensures that the reported price was genuinely resolved in the current round and not inherited from an obsolete historical cycle.",
    "takeaway": "Checking answeredInRound >= roundId ensures the price belongs to the active round and prevents round desynchronization."
  },
  {
    "id": "iq23",
    "question": "How does Chainlink's Decentralized Data Model protect against an upstream API changing its JSON schema or returning HTTP 500 errors?",
    "context": "API Resilience & Data Processing",
    "answer": "In Chainlink DONs, node operators execute specialized core adapters that parse JSON paths (e.g. `path: \"RAW,ETH,USD,PRICE\"`). If an upstream API returns an error or changes its schema, that individual node's observation fails locally or is flagged as an invalid submission. Because the DON uses median aggregation across a multi-node quorum requiring a supermajority (e.g. 14 out of 21 nodes), the failing node is treated as an offline outlier, and the remaining nodes continue to produce valid aggregated reports without halting the on-chain feed.",
    "takeaway": "Supermajority consensus and multi-node sourcing ensure individual API schema failures do not disrupt on-chain feeds."
  },
  {
    "id": "iq24",
    "question": "Explain the concept of 'Front-Running an Oracle Update' in lending protocols and how protocols mitigate it.",
    "context": "MEV & Oracle Latency Front-Running",
    "answer": "When a major crypto exchange experiences a flash crash, Chainlink nodes detect the move and broadcast an on-chain price update transaction. Because this transaction sits in the public mempool, an MEV searcher can spot the pending price reduction, frontrun the oracle update by borrowing USDC against collateral at the old higher price, or backrun the update to liquidate underwater positions the instant the price drops. Mitigations include: 1) Using private RPCs / Flashbots Protect for oracle transmissions; 2) Pull-based oracle models (Data Streams); 3) Introducing small execution delays or protocol-level slippage buffers.",
    "takeaway": "Public mempool oracle updates create latency arbitrage windows; pull oracles and private builder channels mitigate front-running."
  },
  {
    "id": "iq25",
    "question": "What are the core trade-offs of deploying custom in-house oracle infrastructure versus integrating established Chainlink Data Feeds?",
    "context": "Engineering Economics & Infrastructure Strategy",
    "answer": "In-house oracles offer full customization, bespoke data types, and potential gas savings for internal enterprise consortia, but they suffer from enormous operational risks: ongoing server infrastructure costs, 24/7 DevOps monitoring, vulnerability to targeted DDoS attacks, and complete centralization around the deploying team. Chainlink provides battle-tested economic security (securing tens of billions in TVL), independent decentralized node operators, established multi-source aggregation, and compliance credibility. For any protocol holding public capital, the audit liability and security cost of custom oracles vastly outweigh Chainlink integration costs.",
    "takeaway": "Unless building an isolated private consortium, never reinvent decentralized oracle infrastructure for public financial protocols."
  }
]

NUMERICAL_PROBLEMS = [
  {
    "id": "np1",
    "title": "Problem 1: DeFi Collateral Valuation & Maximum Borrowing Capacity",
    "question": "A DeFi borrower deposits 4.5 ETH into a lending pool. The Chainlink ETH/USD price feed returns a raw answer of 320000000000 with 8 decimals. The lending protocol enforces a maximum Collateral Factor (LTV) of 75% and a Liquidation Threshold of 82.5%. Calculate: 1) The total USD valuation of the deposited collateral, 2) The maximum amount of USDC the user can borrow, and 3) The ETH price drop percentage that will trigger immediate liquidation.",
    "variables": [
      "Deposited ETH = 4.5 ETH",
      "Raw Feed Answer = 320000000000",
      "Feed Decimals = 8",
      "Collateral Factor (LTV) = 75% = 0.75",
      "Liquidation Threshold = 82.5% = 0.825"
    ],
    "steps": [
      "Step 1: Calculate current ETH price in USD: 320000000000 / 10^8 = $3,200.00/ETH.",
      "Step 2: Calculate total collateral valuation: 4.5 ETH * $3,200.00 = $14,400.00 USD.",
      "Step 3: Calculate maximum borrowable USDC at 75% LTV: $14,400.00 * 0.75 = $10,800.00 USDC.",
      "Step 4: Determine the collateral valuation that triggers liquidation: Borrowed Amount / Liquidation Threshold = $10,800.00 / 0.825 = $13,090.91 USD.",
      "Step 5: Calculate the liquidation ETH price: $13,090.91 / 4.5 ETH = $2,909.09/ETH.",
      "Step 6: Calculate percentage price drop: ($3,200 - $2,909.09) / $3,200 = 290.91 / 3,200 = 9.09% price drop."
    ],
    "finalAnswer": "Collateral Value: $14,400.00 | Max Borrow: $10,800.00 USDC | Liquidation Trigger Price: $2,909.09 (9.09% drop)"
  },
  {
    "id": "np2",
    "title": "Problem 2: Oracle Aggregation — Median vs Mean Outlier Resilience",
    "question": "A Decentralized Oracle Network consists of 5 independent nodes reporting BTC/USD prices. Four honest nodes report: $64,200, $64,250, $64,180, and $64,220. A fifth compromised node suffers a flash loan attack and reports $98,000. Calculate: 1) The Mean (average) aggregate price, 2) The Median aggregate price, and 3) The percentage error introduced by the compromised node under both aggregation methods relative to the honest baseline of $64,212.50.",
    "variables": [
      "Honest Observations: $64,200, $64,250, $64,180, $64,220",
      "Compromised Observation: $98,000",
      "Honest Baseline (Mean of 4 honest nodes) = $64,212.50"
    ],
    "steps": [
      "Step 1: Compute the Mean: (64,200 + 64,250 + 64,180 + 64,220 + 98,000) / 5 = 354,850 / 5 = $70,970.00.",
      "Step 2: Compute the Median: Sort the 5 observations: [$64,180, $64,200, $64,220, $64,250, $98,000]. The middle element (3rd position) is $64,220.00.",
      "Step 3: Calculate Mean error relative to honest baseline: ($70,970.00 - $64,212.50) / $64,212.50 = 6,757.50 / 64,212.50 = +10.52% error.",
      "Step 4: Calculate Median error relative to honest baseline: ($64,220.00 - $64,212.50) / $64,212.50 = 7.50 / 64,212.50 = +0.012% error."
    ],
    "finalAnswer": "Mean: $70,970.00 (+10.52% error) | Median: $64,220.00 (+0.012% error). Median aggregation suppresses the malicious outlier by ~876x."
  },
  {
    "id": "np3",
    "title": "Problem 3: Solidity Full-Precision Fixed-Point USD Conversion Math",
    "question": "A smart contract receives a deposit of 2.75 ETH expressed in wei (2,750,000,000,000,000,000 wei). The Chainlink price feed has 8 decimals and reports a raw answer of 312550000000 ($3,125.50). Using the formula USD_raw = (ethAmountWei * rawPrice) / 1e18, compute: 1) The raw integer USD value returned by the contract, and 2) The exact floating-point dollar value.",
    "variables": [
      "ethAmountWei = 2,750,000,000,000,000,000 (2.75 * 10^18)",
      "rawPrice = 312550000000 (3,125.50 * 10^8)",
      "feedDecimals = 8",
      "Denominator = 1e18 = 1,000,000,000,000,000,000"
    ],
    "steps": [
      "Step 1: Calculate numerator: 2,750,000,000,000,000,000 * 312,550,000,000 = 859,512,500,000,000,000,000,000,000,000.",
      "Step 2: Divide by 1e18: 859,512,500,000,000,000,000,000,000,000 / 1,000,000,000,000,000,000 = 859,512,500,000.",
      "Step 3: Convert raw integer result to real USD using 8 decimals: 859,512,500,000 / 10^8 = $8,595.125 ($8,595.125 or $8,595.13)."
    ],
    "finalAnswer": "Raw Output: 859512500000 (with 8 decimals) | Dollar Value: $8,595.125 USD"
  },
  {
    "id": "np4",
    "title": "Problem 4: Oracle Freshness & Heartbeat Update Cost Analysis",
    "question": "An Ethereum mainnet Chainlink Price Feed has a 0.5% deviation threshold and a 3,600-second (1 hour) heartbeat. Over a quiet 24-hour period, the market price fluctuates within a narrow 0.2% band (never crossing the deviation threshold). If each on-chain OCR batch update consumes 180,000 gas and the average L1 base fee is 25 Gwei with ETH at $3,000, calculate: 1) The total number of updates executed in 24 hours, and 2) The total 24-hour cost to maintain the feed in ETH and USD.",
    "variables": [
      "Duration = 24 hours = 86,400 seconds",
      "Heartbeat = 3,600 seconds (1 update/hour minimum)",
      "Price deviation < 0.5% (no deviation triggers)",
      "Gas per update = 180,000 gas",
      "Base fee = 25 Gwei = 0.000000025 ETH",
      "ETH Price = $3,000"
    ],
    "steps": [
      "Step 1: Calculate total updates triggered by heartbeat: 24 hours / 1 hour = 24 updates.",
      "Step 2: Calculate gas consumed per update: 180,000 gas * 25 Gwei = 4,500,000 Gwei = 0.0045 ETH per update.",
      "Step 3: Calculate total 24-hour ETH cost: 24 updates * 0.0045 ETH = 0.108 ETH.",
      "Step 4: Convert to USD: 0.108 ETH * $3,000 = $324.00 USD/day ($9,720/month)."
    ],
    "finalAnswer": "24 updates/day | 0.108 ETH/day ($324.00/day or ~$9,720/month to maintain feed liveness during flat markets)"
  },
  {
    "id": "np5",
    "title": "Problem 5: VRF Mystery Box Probability Mapping & Modulo Validation",
    "question": "An NFT game assigns mystery box rewards based on a Chainlink VRF random word using `roll = randomWord % 100`: Common (0-59, 60%), Rare (60-84, 25%), Epic (85-94, 10%), Legendary (95-99, 5%). A user submits 3 VRF requests and receives the following random words: Word 1: 8249018247012984712093847192038471928471928471928374918237491823, Word 2: 9182374918273918273918273918273918273918273918273918273918273995, Word 3: 1111111111111111111111111111111111111111111111111111111111111188. Determine the resulting roll values and reward tiers for all 3 rolls.",
    "variables": [
      "Reward Boundaries: Common: [0, 59], Rare: [60, 84], Epic: [85, 94], Legendary: [95, 99]",
      "Word 1 ends in ...1823",
      "Word 2 ends in ...3995",
      "Word 3 ends in ...1188"
    ],
    "steps": [
      "Step 1: Calculate Roll 1: Last 2 digits of Word 1 are 23. 824...1823 % 100 = 23. 23 < 60 -> Common Tier.",
      "Step 2: Calculate Roll 2: Last 2 digits of Word 2 are 95. 918...3995 % 100 = 95. 95 >= 95 -> Legendary Tier!",
      "Step 3: Calculate Roll 3: Last 2 digits of Word 3 are 88. 111...1188 % 100 = 88. 85 <= 88 < 95 -> Epic Tier."
    ],
    "finalAnswer": "Roll 1: 23 (Common - 60% probability) | Roll 2: 95 (Legendary - 5% probability) | Roll 3: 88 (Epic - 10% probability)"
  }
]
