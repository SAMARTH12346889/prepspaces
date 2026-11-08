// projectx/src/Componets/BlockchainOraclesChainlink.jsx
import React, { useState, useMemo, useCallback } from "react";
import ModuleNav from "./ModuleNav";
import { Link } from "react-router-dom";
import {
  Activity,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Cpu
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = [
  {
    "id": "c1",
    "label": "Understand the Blockchain Oracle Problem & non-deterministic external data boundaries",
    "category": "theory"
  },
  {
    "id": "c2",
    "label": "Calculate collateral valuation & borrowing limits (e.g. 1 ETH @ $3,000 * 70% = $2,100 USDC)",
    "category": "theory"
  },
  {
    "id": "c3",
    "label": "Differentiate Centralized vs Decentralized Oracles (single point of failure vs DON)",
    "category": "theory"
  },
  {
    "id": "c4",
    "label": "Analyze Oracle Architecture: Data Sources, Oracle Nodes, DON, Aggregator, Proxy & Consumer",
    "category": "theory"
  },
  {
    "id": "c5",
    "label": "Master Chainlink Suite: Data Feeds, VRF, Data Streams, CRE, and CCIP",
    "category": "theory"
  },
  {
    "id": "c6",
    "label": "Inspect AggregatorV3Interface methods: decimals(), latestRoundData(), and description()",
    "category": "theory"
  },
  {
    "id": "c7",
    "label": "Master latestRoundData() parameters: roundId, answer, startedAt, updatedAt, answeredInRound",
    "category": "theory"
  },
  {
    "id": "c8",
    "label": "Convert raw integer price feeds (e.g. 350000000000 / 10^8 = $3,500) with dynamic decimals",
    "category": "theory"
  },
  {
    "id": "c9",
    "label": "Understand Feed Update Triggers: Deviation threshold vs Heartbeat threshold",
    "category": "theory"
  },
  {
    "id": "c10",
    "label": "Implement PriceFeedConsumer.sol with input sanitization and positive price checks",
    "category": "theory"
  },
  {
    "id": "c11",
    "label": "Enforce Data Freshness validation: require(block.timestamp - updatedAt <= maxPriceAge)",
    "category": "theory"
  },
  {
    "id": "c12",
    "label": "Perform ETH (wei 10^18) to USD conversion math retaining price feed decimal precision",
    "category": "theory"
  },
  {
    "id": "c13",
    "label": "Examine Offchain Reporting (OCR) and decentralized multi-node consensus workflows",
    "category": "theory"
  },
  {
    "id": "c14",
    "label": "Understand Chainlink Automation migration to Chainlink Runtime Environment (CRE)",
    "category": "theory"
  },
  {
    "id": "c15",
    "label": "Analyze Insecurity of on-chain pseudo-randomness (keccak256, block.timestamp, prevrandao)",
    "category": "theory"
  },
  {
    "id": "c16",
    "label": "Master Chainlink VRF v2.5: Verifiable Random Function, proofs, and subscription vs direct funding",
    "category": "theory"
  },
  {
    "id": "c17",
    "label": "Map VRF random words to weighted probability distributions (NFT mystery box categories)",
    "category": "theory"
  },
  {
    "id": "c18",
    "label": "Study Off-Chain Computation, CRE TypeScript/Go workflows, and Functions sunsetting",
    "category": "theory"
  },
  {
    "id": "c19",
    "label": "Compare Median Aggregation vs Mean Aggregation for outlier and flash loan resilience",
    "category": "theory"
  },
  {
    "id": "c20",
    "label": "Implement L2 Sequencer Uptime Feeds to prevent liquidation exploits during L2 downtime",
    "category": "theory"
  },
  {
    "id": "c21",
    "label": "Audit Oracle Security vectors: flash loans, stale data, single-source reliance, and front-running",
    "category": "theory"
  },
  {
    "id": "c22",
    "label": "Evaluate 9 Oracle Failure Scenarios, consequences, and fallback circuit breaker designs",
    "category": "theory"
  },
  {
    "id": "c23",
    "label": "Analyze Real-World Assets (RWAs), tokenized gold, and Chainlink Proof of Reserve (PoR)",
    "category": "theory"
  },
  {
    "id": "c24",
    "label": "Build External API workflows using CRE triggers, HTTP capabilities, and signed reports",
    "category": "theory"
  },
  {
    "id": "c25",
    "label": "Execute Practical Lab: Deploy PriceFeedConsumer.sol to Ethereum Sepolia with live ETH/USD feed",
    "category": "lab"
  },
  {
    "id": "c26",
    "label": "Test stale-data rejection by deploying with maxPriceAge = 1 second on Sepolia",
    "category": "lab"
  },
  {
    "id": "c27",
    "label": "Complete all 4 Advanced Practical Assignments (BTC/USD consumer, Collateral val, Circuit breaker, CRE)",
    "category": "lab"
  },
  {
    "id": "c28",
    "label": "Achieve 100% on the 20 Knowledge Assessment questions and 5 Numerical Derivation problems",
    "category": "assessment"
  }
];
const QUIZ_QUESTIONS = [
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
];
const INTERVIEW_QUESTIONS = [
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
];
const NUMERICAL_PROBLEMS = [
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
    "title": "Problem 2: Oracle Aggregation \u2014 Median vs Mean Outlier Resilience",
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
];

export default function BlockchainOraclesChainlink() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Collateral Valuation Sandbox
  const [selectedAsset, setSelectedAsset] = useState("ETH");
  const [assetPrice, setAssetPrice] = useState(3000);
  const [baseAssetPrice, setBaseAssetPrice] = useState(3000);
  const [depositAmount, setDepositAmount] = useState(2.0);
  const [borrowLtv, setBorrowLtv] = useState(70);
  const [borrowedDebt, setBorrowedDebt] = useState(2500);

  const handleSelectAsset = useCallback((asset) => {
    setSelectedAsset(asset);
    if (asset === "ETH") {
      setAssetPrice(3000);
      setBaseAssetPrice(3000);
      setDepositAmount(2.0);
      setBorrowedDebt(2500);
    } else if (asset === "BTC") {
      setAssetPrice(64000);
      setBaseAssetPrice(64000);
      setDepositAmount(0.5);
      setBorrowedDebt(15000);
    } else if (asset === "LINK") {
      setAssetPrice(18.5);
      setBaseAssetPrice(18.5);
      setDepositAmount(200);
      setBorrowedDebt(1800);
    }
  }, []);

  const collateralValUsd = depositAmount * assetPrice;
  const maxBorrowUsd = collateralValUsd * (borrowLtv / 100);
  const liquidationThreshold = 0.85;
  const healthFactor = borrowedDebt > 0
    ? (collateralValUsd * liquidationThreshold) / borrowedDebt
    : 999;
  const liquidationPrice = depositAmount > 0
    ? borrowedDebt / (depositAmount * liquidationThreshold)
    : 0;

  // Simulator 2 State: Median vs Mean Outlier Resilience
  const [nodeObservations, setNodeObservations] = useState([3000, 3002, 3005, 2998, 3001]);

  const handleNodeChange = useCallback((idx, val) => {
    setNodeObservations((prev) => {
      const next = [...prev];
      next[idx] = val;
      return next;
    });
  }, []);

  const resetNodes = useCallback(() => {
    setNodeObservations([3000, 3002, 3005, 2998, 3001]);
  }, []);

  const sortedObservations = useMemo(() => {
    return [...nodeObservations].sort((a, b) => a - b);
  }, [nodeObservations]);

  const calculatedMedian = sortedObservations[2];
  const calculatedMean = nodeObservations.reduce((a, b) => a + b, 0) / 5;
  const honestBaseline = 3001.25;
  const meanDistortion = Math.abs(((calculatedMean - honestBaseline) / honestBaseline) * 100);

  // Simulator 3 State: VRF v2.5 Verifiable Randomness & Mystery Box
  const [vrfRolling, setVrfRolling] = useState(false);
  const [lastVrfResult, setLastVrfResult] = useState(null);
  const [vrfStats, setVrfStats] = useState({ common: 0, rare: 0, epic: 0, legendary: 0 });
  const [totalVrfRolls, setTotalVrfRolls] = useState(0);

  const handleRollVrf = useCallback(() => {
    setVrfRolling(true);
    setTimeout(() => {
      // Simulate random word generation
      const randomHex = "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
      const roll = Math.floor(Math.random() * 100);
      let tier = "Common";
      if (roll < 60) tier = "Common";
      else if (roll < 85) tier = "Rare";
      else if (roll < 95) tier = "Epic";
      else tier = "Legendary";

      setLastVrfResult({ word: randomHex, roll, tier });
      setVrfStats((prev) => ({
        ...prev,
        [tier.toLowerCase()]: prev[tier.toLowerCase()] + 1
      }));
      setTotalVrfRolls((prev) => prev + 1);
      setVrfRolling(false);
    }, 600);
  }, []);

  // Simulator 4 State: Attack & Defense Sandbox
  const [attackMode, setAttackMode] = useState("flashloan");
  const [circuitStatus, setCircuitStatus] = useState(null);

  // Lab Steps Checklist (9 items)
  const [labStepsCompleted, setLabStepsCompleted] = useState({});

  const toggleLabStep = useCallback((id) => {
    setLabStepsCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  // Numerical Problems Accordion
  const [openProblemIndex, setOpenProblemIndex] = useState(0);

  // Senior Interview Questions State
  const [interviewFilter, setInterviewFilter] = useState("all");
  const [expandedInterviewId, setExpandedInterviewId] = useState(null);

  const filteredInterviews = useMemo(() => {
    if (interviewFilter === "all") return INTERVIEW_QUESTIONS;
    return INTERVIEW_QUESTIONS.filter((q) => q.context === interviewFilter);
  }, [interviewFilter]);

  // Quiz State
  const [userQuizAnswers, setUserQuizAnswers] = useState({});

  const handleQuizOptionSelect = useCallback((qIndex, optIndex) => {
    setUserQuizAnswers((prev) => {
      if (prev[qIndex] !== undefined) return prev;
      return { ...prev, [qIndex]: optIndex };
    });
  }, []);

  const resetQuiz = useCallback(() => {
    setUserQuizAnswers({});
  }, []);

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (userQuizAnswers[idx] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  }, [userQuizAnswers]);

  // Checklist State (Persisted in localStorage)
  const [completedChecklist, setCompletedChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m20_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = useCallback((id) => {
    setCompletedChecklist((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m20_progress", JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setCompletedChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m20_progress");
    } catch {
      // ignore storage errors
    }
  }, []);

  const completedChecklistCount = useMemo(() => {
    return Object.values(completedChecklist).filter(Boolean).length;
  }, [completedChecklist]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-amber-200 overflow-x-hidden">
      <ModuleNav track="blockchain" currentModuleId="oracles-chainlink" />
      {/* Module Mode & Tabs Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 mt-1 sm:mt-2">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 border border-[#e7e3da] rounded-2xl p-2.5 sm:p-3 shadow-2xs backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 pl-1 hidden sm:inline">View Mode:</span>
            <div className="flex items-center gap-1 bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab("theory")}
                className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === "theory"
                    ? "bg-white text-neutral-900 shadow-xs border border-neutral-200/70"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Curriculum & Labs
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("simulators")}
                className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === "simulators"
                    ? "bg-white text-neutral-900 shadow-xs border border-neutral-200/70"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Simulators
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-500 pr-1">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Module 20 · Oracles & Chainlink</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 space-y-8 sm:space-y-10">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Cpu className="w-3.5 h-3.5" />
            <span>BLOCKCHAIN DEVELOPMENT • ADVANCED LEVEL • SMART CONTRACTS & WEB3 INFRASTRUCTURE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 20 — Oracles & Chainlink
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-grade study of blockchain oracles, deterministic consensus boundaries, Chainlink Data Feeds, Verifiable Random Functions (VRF v2.5), Offchain Reporting (OCR), Chainlink Runtime Environment (CRE), and flash loan price manipulation defense. Deploy and audit live price consumer contracts on Ethereum Sepolia.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            
        {/* Interactive Simulators Section */}
        <section id="simulators" className="space-y-12">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>HANDS-ON PROTOCOL LABS & SIMULATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive Oracle & Chainlink Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Experiment with dynamic collateral valuation, median vs mean aggregation outlier resilience, VRF verifiable randomness, and flash loan oracle defenses.
            </p>
          </div>

          {/* Simulator 1: Chainlink Data Feed & Collateral Valuation Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">DeFi Collateral Valuation & Borrowing Sandbox</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Calculate real-time collateral value, maximum borrowing capacity, and liquidation health factors.</p>
              </div>
              <div className="flex items-center gap-2">
                {["ETH", "BTC", "LINK"].map((asset) => (
                  <button
                    key={asset}
                    type="button"
                    onClick={() => handleSelectAsset(asset)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      selectedAsset === asset
                        ? "bg-amber-600 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {asset}/USD
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sliders */}
              <div className="space-y-4 md:col-span-1 border-r border-neutral-200/60 pr-0 md:pr-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>{selectedAsset} Market Price</span>
                    <span className="text-amber-600">${assetPrice.toLocaleString()} USD</span>
                  </div>
                  <input
                    type="range"
                    min={Math.floor(baseAssetPrice * 0.4)}
                    max={Math.floor(baseAssetPrice * 1.8)}
                    step={selectedAsset === "LINK" ? 0.25 : 25}
                    value={assetPrice}
                    onChange={(e) => setAssetPrice(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>-60% crash</span>
                    <span>+80% rally</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Deposited {selectedAsset} Amount</span>
                    <span className="text-amber-600">{depositAmount} {selectedAsset}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>0.5</span>
                    <span>10.0</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Max Borrow Ratio (LTV)</span>
                    <span className="text-amber-600">{borrowLtv}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="85"
                    step="5"
                    value={borrowLtv}
                    onChange={(e) => setBorrowLtv(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>50%</span>
                    <span>85%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Simulated Borrowed Debt</span>
                    <span className="text-blue-600">${borrowedDebt.toLocaleString()} USDC</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={Math.floor(depositAmount * assetPrice * 0.95)}
                    step="100"
                    value={borrowedDebt}
                    onChange={(e) => setBorrowedDebt(Number(e.target.value))}
                    className="w-full accent-blue-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Real-Time Mathematical Metrics */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Collateral Value</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    ${collateralValUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {depositAmount} &times; ${assetPrice}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Max Borrow Cap</div>
                  <div className="text-lg font-mono font-bold text-emerald-700 mt-1">
                    ${maxBorrowUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Collateral &times; {borrowLtv}% LTV
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${
                  healthFactor < 1.0
                    ? "bg-red-50 border-red-300 text-red-900"
                    : healthFactor < 1.25
                    ? "bg-amber-50 border-amber-300 text-amber-900"
                    : "bg-emerald-50 border-emerald-200 text-emerald-900"
                }`}>
                  <div className="text-[11px] font-mono uppercase font-semibold">Health Factor (HF)</div>
                  <div className="text-xl font-mono font-black mt-1">
                    {borrowedDebt === 0 ? "∞ (Safe)" : healthFactor.toFixed(2)}
                  </div>
                  <div className="text-[10px] mt-0.5">
                    {borrowedDebt === 0
                      ? "Zero debt taken"
                      : healthFactor < 1.0
                      ? "LIQUIDATION ACTIVE!"
                      : healthFactor < 1.25
                      ? "Caution: Near threshold"
                      : "Healthy position"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Liquidation Threshold</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    85.0%
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Debt &gt; 85% collateral triggers liquidation
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Liquidation Price</div>
                  <div className="text-lg font-mono font-bold text-red-700 mt-1">
                    {borrowedDebt === 0 ? "$0.00" : `$${liquidationPrice.toFixed(2)}`}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Price that triggers HF &lt; 1.0
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Raw Chainlink Answer</div>
                  <div className="text-sm font-mono font-bold text-neutral-800 mt-1 truncate">
                    {Math.round(assetPrice * 1e8)}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Integer representation (8 decimals)
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Formula Applied:</span> <code>CollateralValue = (depositWei * rawPrice) / 1e18</code>. Maximum Borrow Limit = <code>CollateralValue * LTV</code>. When market price drops such that <code>BorrowedDebt / CollateralValue &gt; LiquidationThreshold</code>, Health Factor drops below 1.0, enabling liquidators to repay debt and seize collateral with a liquidation bonus.
            </div>
          </div>

          {/* Simulator 2: Oracle Aggregation & Outlier Rejection Engine */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
                <h3 className="text-xl font-bold text-neutral-900">Oracle Aggregation: Median vs. Mean Resilience</h3>
                <p className="text-xs sm:text-sm text-neutral-600">See how Median Aggregation completely neutralizes malicious outliers while Mean Aggregation gets catastrophically distorted.</p>
              </div>
              <button
                type="button"
                onClick={resetNodes}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Honest Nodes
              </button>
            </div>

            {/* 5 Node Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {nodeObservations.map((price, idx) => {
                const isMalicious = idx === 4 && (price > 4500 || price < 1500);
                return (
                  <div key={idx} className={`p-3.5 rounded-xl border ${isMalicious ? "bg-red-50 border-red-300" : "bg-neutral-50 border-neutral-200"} space-y-2`}>
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-neutral-800">Node {idx + 1}</span>
                      {idx === 4 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-800">
                          {isMalicious ? "COMPROMISED" : "Node 5"}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-mono font-bold text-neutral-900">
                      ${price.toLocaleString()}
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="9000"
                      step="25"
                      value={price}
                      onChange={(e) => handleNodeChange(idx, Number(e.target.value))}
                      className={`w-full h-1.5 rounded-lg cursor-pointer ${idx === 4 ? "accent-red-600" : "accent-amber-600"}`}
                    />
                    <div className="text-[10px] font-mono text-neutral-400">
                      {idx === 4 ? "Slide to test attack!" : "Honest node observation"}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sorted Array & Aggregation Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-purple-900">Median Aggregation (Chainlink Model)</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">ROBUST</span>
                </div>
                <div className="text-2xl font-mono font-bold text-purple-950">
                  ${calculatedMedian.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs font-mono text-purple-800">
                  Sorted Set: [{sortedObservations.map(n => `$${n.toLocaleString()}`).join(", ")}]
                </div>
                <div className="text-[11px] text-purple-700">
                  The median selects the 3rd element. Outliers at position 1 or 5 have <strong>0% influence</strong> on the final reported on-chain price!
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-50/60 border border-red-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-red-900">Mean / Average Aggregation (Vulnerable)</span>
                  <span className="px-2 py-0.5 rounded bg-red-200 text-red-900 font-bold">VULNERABLE</span>
                </div>
                <div className="text-2xl font-mono font-bold text-red-950">
                  ${calculatedMean.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs font-mono text-red-800">
                  Sum: ${nodeObservations.reduce((a, b) => a + b, 0).toLocaleString()} &divide; 5 nodes
                </div>
                <div className="text-[11px] text-red-700">
                  Distortion Error: <strong>{meanDistortion.toFixed(2)}%</strong> deviation from honest baseline! A single rogue node skews the entire market price.
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 3: VRF v2.5 Verifiable Randomness & NFT Mystery Box Simulator */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
                <h3 className="text-xl font-bold text-neutral-900">Chainlink VRF v2.5: Verifiable Randomness & Mystery Box</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Simulate cryptographic seed request, proof verification, and modulo probability tier mapping.</p>
              </div>
              <button
                type="button"
                onClick={handleRollVrf}
                disabled={vrfRolling}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm flex items-center gap-2"
              >
                {vrfRolling ? "Verifying VRF Proof..." : "Request Random Words & Open Box"}
              </button>
            </div>

            {/* Probability Distribution Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-neutral-500 text-[10px]">COMMON TIER (60%)</div>
                <div className="text-base font-bold text-neutral-900 mt-0.5">Roll: 00 - 59</div>
                <div className="text-[10px] text-neutral-500 mt-1">Observed: {vrfStats.common} ({totalVrfRolls ? Math.round((vrfStats.common / totalVrfRolls) * 100) : 0}%)</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-950">
                <div className="text-blue-700 text-[10px] font-bold">RARE TIER (25%)</div>
                <div className="text-base font-bold mt-0.5">Roll: 60 - 84</div>
                <div className="text-[10px] text-blue-700 mt-1">Observed: {vrfStats.rare} ({totalVrfRolls ? Math.round((vrfStats.rare / totalVrfRolls) * 100) : 0}%)</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-950">
                <div className="text-purple-700 text-[10px] font-bold">EPIC TIER (10%)</div>
                <div className="text-base font-bold mt-0.5">Roll: 85 - 94</div>
                <div className="text-[10px] text-purple-700 mt-1">Observed: {vrfStats.epic} ({totalVrfRolls ? Math.round((vrfStats.epic / totalVrfRolls) * 100) : 0}%)</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-950">
                <div className="text-amber-800 text-[10px] font-bold">LEGENDARY (5%)</div>
                <div className="text-base font-bold mt-0.5">Roll: 95 - 99</div>
                <div className="text-[10px] text-amber-800 mt-1">Observed: {vrfStats.legendary} ({totalVrfRolls ? Math.round((vrfStats.legendary / totalVrfRolls) * 100) : 0}%)</div>
              </div>
            </div>

            {/* Latest Result Display */}
            {lastVrfResult && (
              <div className="p-5 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <span className="text-amber-400 font-bold uppercase">VRF Callback Result Verified</span>
                  <span className={`px-2 py-0.5 rounded font-bold text-xs ${
                    lastVrfResult.tier === "Legendary" ? "bg-amber-400 text-neutral-900" :
                    lastVrfResult.tier === "Epic" ? "bg-purple-400 text-neutral-900" :
                    lastVrfResult.tier === "Rare" ? "bg-blue-400 text-neutral-900" : "bg-neutral-300 text-neutral-900"
                  }`}>
                    {lastVrfResult.tier.toUpperCase()} ITEM AWARDED
                  </span>
                </div>
                <div className="space-y-1">
                  <div>Raw 256-bit Random Word: <code className="text-neutral-400 text-[11px] break-all">{lastVrfResult.word}</code></div>
                  <div>Modulo 100 Calculation: <code className="text-emerald-400 font-bold">{lastVrfResult.word.slice(-4)} % 100 = {lastVrfResult.roll}</code></div>
                  <div>Cryptographic Proof &pi;: <code className="text-blue-300 text-[11px]">Valid Secp256k1 Elliptic Curve Pairing Verified by VRFCoordinatorV2_5</code></div>
                </div>
              </div>
            )}
          </div>

          {/* Simulator 4: Oracle Attack & Defense Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">Oracle Attack & Defense Sandbox</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Simulate flash loan spot price manipulation, stale feed latency, and circuit breaker boundaries.</p>
              </div>
              <div className="flex items-center gap-2">
                {["flashloan", "stale", "circuit"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setAttackMode(mode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      attackMode === mode
                        ? "bg-neutral-900 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {mode === "flashloan" ? "Flash Loan AMM" : mode === "stale" ? "Stale Data Attack" : "Circuit Breaker"}
                  </button>
                ))}
              </div>
            </div>

            {attackMode === "flashloan" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950 leading-relaxed">
                  <strong>Attack Scenario:</strong> Token ABC trades at $10.00. Attacker borrows $50M via a flash loan and dumps capital into a low-liquidity Uniswap spot pool, artificially surging the spot price to $100.00 within a single transaction.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-red-950 flex items-center justify-between">
                      <span>Vulnerable: Single DEX Spot Price</span>
                      <span className="px-2 py-0.5 rounded bg-red-200 text-red-900">EXPLOITED</span>
                    </div>
                    <div className="text-neutral-700">Contract queries <code>IUniswapV2Pair.getReserves()</code>.</div>
                    <div className="text-red-700 font-bold">Reported Price: $100.00 USD</div>
                    <div className="text-[11px] text-red-800">Attacker deposits 1,000 ABC (true value $10,000) and borrows $75,000 USDC. Protocol is left with $65,000 bad debt!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-emerald-950 flex items-center justify-between">
                      <span>Secure: Chainlink Multi-Source Feed</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">PROTECTED</span>
                    </div>
                    <div className="text-neutral-700">Contract queries <code>AggregatorV3Interface.latestRoundData()</code>.</div>
                    <div className="text-emerald-700 font-bold">Reported Price: $10.00 USD</div>
                    <div className="text-[11px] text-emerald-800">Chainlink's off-chain DON aggregates prices from dozens of global exchanges. The isolated on-chain AMM pump has zero effect. Attack fails!</div>
                  </div>
                </div>
              </div>
            )}

            {attackMode === "stale" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-950 leading-relaxed">
                  <strong>Stale Data Scenario:</strong> An upstream network congestion event prevents the price feed from updating for 4 hours. Market price of ETH crashes from $3,000 to $2,000 during this window.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-red-950 flex items-center justify-between">
                      <span>Vulnerable: No Freshness Check</span>
                      <span className="px-2 py-0.5 rounded bg-red-200 text-red-900">EXPLOITED</span>
                    </div>
                    <div className="text-neutral-700">Contract only checks <code>require(answer &gt; 0)</code>.</div>
                    <div className="text-red-700 font-bold">Accepted Price: $3,000.00 (4 hours old)</div>
                    <div className="text-[11px] text-red-800">Borrower borrows against outdated $3,000 valuation while real asset is only worth $2,000. Protocol incurs severe insolvency!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-emerald-950 flex items-center justify-between">
                      <span>Secure: require(block.timestamp - updatedAt &le; maxAge)</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">PROTECTED</span>
                    </div>
                    <div className="text-neutral-700">Contract enforces <code>maxPriceAge = 3600</code> (1 hour).</div>
                    <div className="text-emerald-700 font-bold">Result: REVERT ("Stale price")</div>
                    <div className="text-[11px] text-emerald-800">Contract safely halts borrowing operations until fresh price data is broadcasted on-chain. Zero bad debt incurred!</div>
                  </div>
                </div>
              </div>
            )}

            {attackMode === "circuit" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs font-mono text-purple-950 leading-relaxed">
                  <strong>Circuit Breaker Bounds:</strong> Protocol configures <code>MIN_PRICE = $500</code> and <code>MAX_PRICE = $10,000</code>. If an extreme black-swan event or multi-sig key compromise broadcasts an impossible price, the circuit breaker automatically halts operations.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                    <div className="font-bold text-neutral-900">Simulate Black-Swan Flash Crash ($120)</div>
                    <button
                      type="button"
                      onClick={() => setCircuitStatus("tripped_low")}
                      className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold"
                    >
                      Trigger $120 Crash
                    </button>
                    {circuitStatus === "tripped_low" && (
                      <div className="p-2.5 rounded bg-red-100 text-red-950 text-[11px] font-bold">
                        CIRCUIT BREAKER TRIPPED! Price $120 &lt; Min $500. Protocol paused.
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                    <div className="font-bold text-neutral-900">Simulate Fat-Finger Oracle Surge ($50,000)</div>
                    <button
                      type="button"
                      onClick={() => setCircuitStatus("tripped_high")}
                      className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold"
                    >
                      Trigger $50,000 Surge
                    </button>
                    {circuitStatus === "tripped_high" && (
                      <div className="p-2.5 rounded bg-red-100 text-red-950 text-[11px] font-bold">
                        CIRCUIT BREAKER TRIPPED! Price $50k &gt; Max $10k. Protocol paused.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

          </div>
        ) : (
          <div className="space-y-16">
            
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
                  <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">
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
                <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">
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

            
        {/* Interactive Simulators Section */}
        <section id="simulators" className="space-y-12">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>HANDS-ON PROTOCOL LABS & SIMULATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive Oracle & Chainlink Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Experiment with dynamic collateral valuation, median vs mean aggregation outlier resilience, VRF verifiable randomness, and flash loan oracle defenses.
            </p>
          </div>

          {/* Simulator 1: Chainlink Data Feed & Collateral Valuation Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">DeFi Collateral Valuation & Borrowing Sandbox</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Calculate real-time collateral value, maximum borrowing capacity, and liquidation health factors.</p>
              </div>
              <div className="flex items-center gap-2">
                {["ETH", "BTC", "LINK"].map((asset) => (
                  <button
                    key={asset}
                    type="button"
                    onClick={() => handleSelectAsset(asset)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      selectedAsset === asset
                        ? "bg-amber-600 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {asset}/USD
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sliders */}
              <div className="space-y-4 md:col-span-1 border-r border-neutral-200/60 pr-0 md:pr-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>{selectedAsset} Market Price</span>
                    <span className="text-amber-600">${assetPrice.toLocaleString()} USD</span>
                  </div>
                  <input
                    type="range"
                    min={Math.floor(baseAssetPrice * 0.4)}
                    max={Math.floor(baseAssetPrice * 1.8)}
                    step={selectedAsset === "LINK" ? 0.25 : 25}
                    value={assetPrice}
                    onChange={(e) => setAssetPrice(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>-60% crash</span>
                    <span>+80% rally</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Deposited {selectedAsset} Amount</span>
                    <span className="text-amber-600">{depositAmount} {selectedAsset}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>0.5</span>
                    <span>10.0</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Max Borrow Ratio (LTV)</span>
                    <span className="text-amber-600">{borrowLtv}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="85"
                    step="5"
                    value={borrowLtv}
                    onChange={(e) => setBorrowLtv(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>50%</span>
                    <span>85%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Simulated Borrowed Debt</span>
                    <span className="text-blue-600">${borrowedDebt.toLocaleString()} USDC</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={Math.floor(depositAmount * assetPrice * 0.95)}
                    step="100"
                    value={borrowedDebt}
                    onChange={(e) => setBorrowedDebt(Number(e.target.value))}
                    className="w-full accent-blue-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Real-Time Mathematical Metrics */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Collateral Value</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    ${collateralValUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {depositAmount} &times; ${assetPrice}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Max Borrow Cap</div>
                  <div className="text-lg font-mono font-bold text-emerald-700 mt-1">
                    ${maxBorrowUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Collateral &times; {borrowLtv}% LTV
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${
                  healthFactor < 1.0
                    ? "bg-red-50 border-red-300 text-red-900"
                    : healthFactor < 1.25
                    ? "bg-amber-50 border-amber-300 text-amber-900"
                    : "bg-emerald-50 border-emerald-200 text-emerald-900"
                }`}>
                  <div className="text-[11px] font-mono uppercase font-semibold">Health Factor (HF)</div>
                  <div className="text-xl font-mono font-black mt-1">
                    {borrowedDebt === 0 ? "∞ (Safe)" : healthFactor.toFixed(2)}
                  </div>
                  <div className="text-[10px] mt-0.5">
                    {borrowedDebt === 0
                      ? "Zero debt taken"
                      : healthFactor < 1.0
                      ? "LIQUIDATION ACTIVE!"
                      : healthFactor < 1.25
                      ? "Caution: Near threshold"
                      : "Healthy position"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Liquidation Threshold</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    85.0%
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Debt &gt; 85% collateral triggers liquidation
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Liquidation Price</div>
                  <div className="text-lg font-mono font-bold text-red-700 mt-1">
                    {borrowedDebt === 0 ? "$0.00" : `$${liquidationPrice.toFixed(2)}`}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Price that triggers HF &lt; 1.0
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Raw Chainlink Answer</div>
                  <div className="text-sm font-mono font-bold text-neutral-800 mt-1 truncate">
                    {Math.round(assetPrice * 1e8)}
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    Integer representation (8 decimals)
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Formula Applied:</span> <code>CollateralValue = (depositWei * rawPrice) / 1e18</code>. Maximum Borrow Limit = <code>CollateralValue * LTV</code>. When market price drops such that <code>BorrowedDebt / CollateralValue &gt; LiquidationThreshold</code>, Health Factor drops below 1.0, enabling liquidators to repay debt and seize collateral with a liquidation bonus.
            </div>
          </div>

          {/* Simulator 2: Oracle Aggregation & Outlier Rejection Engine */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
                <h3 className="text-xl font-bold text-neutral-900">Oracle Aggregation: Median vs. Mean Resilience</h3>
                <p className="text-xs sm:text-sm text-neutral-600">See how Median Aggregation completely neutralizes malicious outliers while Mean Aggregation gets catastrophically distorted.</p>
              </div>
              <button
                type="button"
                onClick={resetNodes}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Honest Nodes
              </button>
            </div>

            {/* 5 Node Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {nodeObservations.map((price, idx) => {
                const isMalicious = idx === 4 && (price > 4500 || price < 1500);
                return (
                  <div key={idx} className={`p-3.5 rounded-xl border ${isMalicious ? "bg-red-50 border-red-300" : "bg-neutral-50 border-neutral-200"} space-y-2`}>
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-neutral-800">Node {idx + 1}</span>
                      {idx === 4 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-100 text-red-800">
                          {isMalicious ? "COMPROMISED" : "Node 5"}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-mono font-bold text-neutral-900">
                      ${price.toLocaleString()}
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="9000"
                      step="25"
                      value={price}
                      onChange={(e) => handleNodeChange(idx, Number(e.target.value))}
                      className={`w-full h-1.5 rounded-lg cursor-pointer ${idx === 4 ? "accent-red-600" : "accent-amber-600"}`}
                    />
                    <div className="text-[10px] font-mono text-neutral-400">
                      {idx === 4 ? "Slide to test attack!" : "Honest node observation"}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sorted Array & Aggregation Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-purple-900">Median Aggregation (Chainlink Model)</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">ROBUST</span>
                </div>
                <div className="text-2xl font-mono font-bold text-purple-950">
                  ${calculatedMedian.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs font-mono text-purple-800">
                  Sorted Set: [{sortedObservations.map(n => `$${n.toLocaleString()}`).join(", ")}]
                </div>
                <div className="text-[11px] text-purple-700">
                  The median selects the 3rd element. Outliers at position 1 or 5 have <strong>0% influence</strong> on the final reported on-chain price!
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-50/60 border border-red-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-red-900">Mean / Average Aggregation (Vulnerable)</span>
                  <span className="px-2 py-0.5 rounded bg-red-200 text-red-900 font-bold">VULNERABLE</span>
                </div>
                <div className="text-2xl font-mono font-bold text-red-950">
                  ${calculatedMean.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-xs font-mono text-red-800">
                  Sum: ${nodeObservations.reduce((a, b) => a + b, 0).toLocaleString()} &divide; 5 nodes
                </div>
                <div className="text-[11px] text-red-700">
                  Distortion Error: <strong>{meanDistortion.toFixed(2)}%</strong> deviation from honest baseline! A single rogue node skews the entire market price.
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 3: VRF v2.5 Verifiable Randomness & NFT Mystery Box Simulator */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
                <h3 className="text-xl font-bold text-neutral-900">Chainlink VRF v2.5: Verifiable Randomness & Mystery Box</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Simulate cryptographic seed request, proof verification, and modulo probability tier mapping.</p>
              </div>
              <button
                type="button"
                onClick={handleRollVrf}
                disabled={vrfRolling}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm flex items-center gap-2"
              >
                {vrfRolling ? "Verifying VRF Proof..." : "Request Random Words & Open Box"}
              </button>
            </div>

            {/* Probability Distribution Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="text-neutral-500 text-[10px]">COMMON TIER (60%)</div>
                <div className="text-base font-bold text-neutral-900 mt-0.5">Roll: 00 - 59</div>
                <div className="text-[10px] text-neutral-500 mt-1">Observed: {vrfStats.common} ({totalVrfRolls ? Math.round((vrfStats.common / totalVrfRolls) * 100) : 0}%)</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-950">
                <div className="text-blue-700 text-[10px] font-bold">RARE TIER (25%)</div>
                <div className="text-base font-bold mt-0.5">Roll: 60 - 84</div>
                <div className="text-[10px] text-blue-700 mt-1">Observed: {vrfStats.rare} ({totalVrfRolls ? Math.round((vrfStats.rare / totalVrfRolls) * 100) : 0}%)</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-purple-950">
                <div className="text-purple-700 text-[10px] font-bold">EPIC TIER (10%)</div>
                <div className="text-base font-bold mt-0.5">Roll: 85 - 94</div>
                <div className="text-[10px] text-purple-700 mt-1">Observed: {vrfStats.epic} ({totalVrfRolls ? Math.round((vrfStats.epic / totalVrfRolls) * 100) : 0}%)</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-950">
                <div className="text-amber-800 text-[10px] font-bold">LEGENDARY (5%)</div>
                <div className="text-base font-bold mt-0.5">Roll: 95 - 99</div>
                <div className="text-[10px] text-amber-800 mt-1">Observed: {vrfStats.legendary} ({totalVrfRolls ? Math.round((vrfStats.legendary / totalVrfRolls) * 100) : 0}%)</div>
              </div>
            </div>

            {/* Latest Result Display */}
            {lastVrfResult && (
              <div className="p-5 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                  <span className="text-amber-400 font-bold uppercase">VRF Callback Result Verified</span>
                  <span className={`px-2 py-0.5 rounded font-bold text-xs ${
                    lastVrfResult.tier === "Legendary" ? "bg-amber-400 text-neutral-900" :
                    lastVrfResult.tier === "Epic" ? "bg-purple-400 text-neutral-900" :
                    lastVrfResult.tier === "Rare" ? "bg-blue-400 text-neutral-900" : "bg-neutral-300 text-neutral-900"
                  }`}>
                    {lastVrfResult.tier.toUpperCase()} ITEM AWARDED
                  </span>
                </div>
                <div className="space-y-1">
                  <div>Raw 256-bit Random Word: <code className="text-neutral-400 text-[11px] break-all">{lastVrfResult.word}</code></div>
                  <div>Modulo 100 Calculation: <code className="text-emerald-400 font-bold">{lastVrfResult.word.slice(-4)} % 100 = {lastVrfResult.roll}</code></div>
                  <div>Cryptographic Proof &pi;: <code className="text-blue-300 text-[11px]">Valid Secp256k1 Elliptic Curve Pairing Verified by VRFCoordinatorV2_5</code></div>
                </div>
              </div>
            )}
          </div>

          {/* Simulator 4: Oracle Attack & Defense Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">Oracle Attack & Defense Sandbox</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Simulate flash loan spot price manipulation, stale feed latency, and circuit breaker boundaries.</p>
              </div>
              <div className="flex items-center gap-2">
                {["flashloan", "stale", "circuit"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setAttackMode(mode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      attackMode === mode
                        ? "bg-neutral-900 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {mode === "flashloan" ? "Flash Loan AMM" : mode === "stale" ? "Stale Data Attack" : "Circuit Breaker"}
                  </button>
                ))}
              </div>
            </div>

            {attackMode === "flashloan" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950 leading-relaxed">
                  <strong>Attack Scenario:</strong> Token ABC trades at $10.00. Attacker borrows $50M via a flash loan and dumps capital into a low-liquidity Uniswap spot pool, artificially surging the spot price to $100.00 within a single transaction.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-red-950 flex items-center justify-between">
                      <span>Vulnerable: Single DEX Spot Price</span>
                      <span className="px-2 py-0.5 rounded bg-red-200 text-red-900">EXPLOITED</span>
                    </div>
                    <div className="text-neutral-700">Contract queries <code>IUniswapV2Pair.getReserves()</code>.</div>
                    <div className="text-red-700 font-bold">Reported Price: $100.00 USD</div>
                    <div className="text-[11px] text-red-800">Attacker deposits 1,000 ABC (true value $10,000) and borrows $75,000 USDC. Protocol is left with $65,000 bad debt!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-emerald-950 flex items-center justify-between">
                      <span>Secure: Chainlink Multi-Source Feed</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">PROTECTED</span>
                    </div>
                    <div className="text-neutral-700">Contract queries <code>AggregatorV3Interface.latestRoundData()</code>.</div>
                    <div className="text-emerald-700 font-bold">Reported Price: $10.00 USD</div>
                    <div className="text-[11px] text-emerald-800">Chainlink's off-chain DON aggregates prices from dozens of global exchanges. The isolated on-chain AMM pump has zero effect. Attack fails!</div>
                  </div>
                </div>
              </div>
            )}

            {attackMode === "stale" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-950 leading-relaxed">
                  <strong>Stale Data Scenario:</strong> An upstream network congestion event prevents the price feed from updating for 4 hours. Market price of ETH crashes from $3,000 to $2,000 during this window.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-red-950 flex items-center justify-between">
                      <span>Vulnerable: No Freshness Check</span>
                      <span className="px-2 py-0.5 rounded bg-red-200 text-red-900">EXPLOITED</span>
                    </div>
                    <div className="text-neutral-700">Contract only checks <code>require(answer &gt; 0)</code>.</div>
                    <div className="text-red-700 font-bold">Accepted Price: $3,000.00 (4 hours old)</div>
                    <div className="text-[11px] text-red-800">Borrower borrows against outdated $3,000 valuation while real asset is only worth $2,000. Protocol incurs severe insolvency!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-emerald-950 flex items-center justify-between">
                      <span>Secure: require(block.timestamp - updatedAt &le; maxAge)</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900">PROTECTED</span>
                    </div>
                    <div className="text-neutral-700">Contract enforces <code>maxPriceAge = 3600</code> (1 hour).</div>
                    <div className="text-emerald-700 font-bold">Result: REVERT ("Stale price")</div>
                    <div className="text-[11px] text-emerald-800">Contract safely halts borrowing operations until fresh price data is broadcasted on-chain. Zero bad debt incurred!</div>
                  </div>
                </div>
              </div>
            )}

            {attackMode === "circuit" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs font-mono text-purple-950 leading-relaxed">
                  <strong>Circuit Breaker Bounds:</strong> Protocol configures <code>MIN_PRICE = $500</code> and <code>MAX_PRICE = $10,000</code>. If an extreme black-swan event or multi-sig key compromise broadcasts an impossible price, the circuit breaker automatically halts operations.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                    <div className="font-bold text-neutral-900">Simulate Black-Swan Flash Crash ($120)</div>
                    <button
                      type="button"
                      onClick={() => setCircuitStatus("tripped_low")}
                      className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold"
                    >
                      Trigger $120 Crash
                    </button>
                    {circuitStatus === "tripped_low" && (
                      <div className="p-2.5 rounded bg-red-100 text-red-950 text-[11px] font-bold">
                        CIRCUIT BREAKER TRIPPED! Price $120 &lt; Min $500. Protocol paused.
                      </div>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                    <div className="font-bold text-neutral-900">Simulate Fat-Finger Oracle Surge ($50,000)</div>
                    <button
                      type="button"
                      onClick={() => setCircuitStatus("tripped_high")}
                      className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold"
                    >
                      Trigger $50,000 Surge
                    </button>
                    {circuitStatus === "tripped_high" && (
                      <div className="p-2.5 rounded bg-red-100 text-red-950 text-[11px] font-bold">
                        CIRCUIT BREAKER TRIPPED! Price $50k &gt; Max $10k. Protocol paused.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

            
        {/* Hands-On Engineering Labs & Capstone */}
        <section id="lab" className="space-y-16">
          {/* Practical Lab */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>HANDS-ON SOLIDITY LAB</span>
              <span>•</span>
              <span>DEPLOYMENT & TESTING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Practical Lab: Build & Deploy a Price-Feed Smart Contract Using Chainlink
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Build, compile, and deploy a production-grade Solidity smart contract that connects to the official Chainlink ETH/USD price feed on Ethereum Sepolia. Learn how to query price data, convert wei to USD, validate data freshness, and trigger defensive reverts on stale feeds.
            </p>

            {/* Tools Table */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-neutral-900 font-mono">A. Required Tools & Infrastructure</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Tool</th>
                      <th className="p-3">Purpose</th>
                      <th className="p-3">Resource Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">MetaMask</td>
                      <td className="p-3">Web3 wallet connection & tx signing</td>
                      <td className="p-3 text-amber-700">Browser Extension</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Remix IDE</td>
                      <td className="p-3">Cloud Solidity compilation & deployment</td>
                      <td className="p-3 text-amber-700"><a href="https://remix.ethereum.org" target="_blank" rel="noopener noreferrer" className="underline">remix.ethereum.org</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Ethereum Sepolia</td>
                      <td className="p-3">Primary test blockchain network</td>
                      <td className="p-3 text-amber-700">Chain ID 11155111</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chainlink Data Feeds</td>
                      <td className="p-3">Aggregated on-chain price feeds</td>
                      <td className="p-3 text-amber-700"><a href="https://docs.chain.link/data-feeds/price-feeds/addresses" target="_blank" rel="noopener noreferrer" className="underline">docs.chain.link</a></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Sepolia ETH Faucet</td>
                      <td className="p-3">Testnet gas for contract deployments</td>
                      <td className="p-3 text-amber-700"><a href="https://faucets.chain.link" target="_blank" rel="noopener noreferrer" className="underline">faucets.chain.link</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lab Walkthrough Steps B - H */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">Step-by-Step Lab Execution</h3>
              
              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">B. Configure MetaMask & Test Gas</div>
                <p className="text-neutral-600 leading-relaxed">
                  Open MetaMask, toggle network to <strong>Ethereum Sepolia</strong>, and acquire test ETH from the Chainlink faucet (<code>https://faucets.chain.link</code>). Connect MetaMask to Remix by selecting <em>Injected Provider - MetaMask</em> in the Deploy & Run Transactions panel.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">C. Create & Compile PriceFeedConsumer.sol</div>
                <p className="text-neutral-600 leading-relaxed">
                  In Remix, create a new file named <code>PriceFeedConsumer.sol</code>. Paste the complete contract implementation from Section 7. Select compiler version <code>0.8.20</code> or higher, enable optimization (200 runs), and click <strong>Compile PriceFeedConsumer.sol</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">D. Deploy the Contract on Sepolia</div>
                <p className="text-neutral-600 leading-relaxed">
                  In the Deploy section, provide the two constructor arguments:
                </p>
                <div className="p-3 rounded-lg bg-neutral-100 space-y-1">
                  <div><code>feedAddress</code>: <strong>0x694AA1769357215DE4FAC081bf1f309aDC325306</strong> (Official Sepolia ETH/USD proxy)</div>
                  <div><code>maxAge</code>: <strong>86400</strong> (24 hours tolerance for demo deployment)</div>
                </div>
                <p className="text-neutral-600">Click <strong>transact</strong> and confirm the deployment transaction in MetaMask.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">E. Test getLatestPrice() & Verify Raw Decimals</div>
                <p className="text-neutral-600 leading-relaxed">
                  Under Deployed Contracts, expand <code>PriceFeedConsumer</code> and click <code>getLatestPrice()</code>.
                </p>
                <div className="p-3 rounded-lg bg-neutral-900 text-neutral-200 space-y-1">
                  <div>Returned: <code>price: 324512000000</code>, <code>priceDecimals: 8</code>, <code>updatedAt: [Unix Timestamp]</code></div>
                  <div className="text-emerald-400 font-bold">Calculation: 324512000000 / 10^8 = $3,245.12 USD</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">F. Convert ETH (wei) into USD</div>
                <p className="text-neutral-600 leading-relaxed">
                  Call <code>getEthValueInUsd(1000000000000000000)</code> passing 1 ETH in wei ($10^{18}$). The function multiplies wei by raw price and divides by $10^{18}$, returning the exact dollar valuation with 8 decimal precision.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">G. Test Stale-Data Rejection Defense</div>
                <p className="text-neutral-600 leading-relaxed">
                  Deploy a second instance of <code>PriceFeedConsumer</code> using <code>maxAge = 1</code> (1 second). When you call <code>getLatestPrice()</code>, the contract compares <code>block.timestamp - timestamp &gt; 1</code> and immediately reverts with:
                </p>
                <div className="p-2.5 rounded bg-red-100 text-red-950 font-bold">
                  revert: StalePrice(age, 1)
                </div>
                <p className="text-neutral-600">This proves your smart contract refuses to trade on outdated market data!</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">H. Verify Deployment on Sepolia Etherscan</div>
                <p className="text-neutral-600 leading-relaxed">
                  Navigate to <code>https://sepolia.etherscan.io</code>, search for your deployed contract address, and verify that the creation transaction succeeded, the contract bytecode is recorded, and read functions execute successfully.
                </p>
              </div>
            </div>

            {/* 9-Point Lab Completion Checklist */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-amber-400 font-mono">Lab Completion Checklist (9 Core Objectives)</h3>
                <span className="text-xs font-mono text-neutral-400">
                  {Object.values(labStepsCompleted).filter(Boolean).length} / 9 Completed
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                {[
                  { id: "l1", label: "Configured MetaMask for Sepolia" },
                  { id: "l2", label: "Obtained Sepolia test ETH" },
                  { id: "l3", label: "Located official Chainlink feed address" },
                  { id: "l4", label: "Created & compiled PriceFeedConsumer.sol" },
                  { id: "l5", label: "Deployed consumer contract on Sepolia" },
                  { id: "l6", label: "Retrieved latest price and decimals" },
                  { id: "l7", label: "Converted 1 ETH (wei) into USD" },
                  { id: "l8", label: "Tested stale-price validation revert" },
                  { id: "l9", label: "Verified deployment on Sepolia Etherscan" }
                ].map((st) => {
                  const isChecked = !!labStepsCompleted[st.id];
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => toggleLabStep(st.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 ${
                        isChecked
                          ? "bg-neutral-800 border-amber-500 text-amber-300 font-bold"
                          : "bg-neutral-850 border-neutral-800 text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                        isChecked ? "bg-amber-500 border-amber-500 text-neutral-900" : "border-neutral-600"
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className="leading-tight">{st.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4 Advanced Practical Assignments */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">Four Advanced Practical Engineering Assignments</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 1: BTC/USD Price Consumer</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Modify the consumer contract to connect to the Sepolia BTC/USD feed (<code>0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43</code>). Query decimals, validate freshness, and display the formatted price.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 2: ETH Collateral Valuation Engine</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Build a collateral valuation contract accepting an ETH deposit in wei. Read the Chainlink ETH/USD price, calculate USD collateral value, apply a configurable 75% LTV, and return maximum borrowable USDC.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 3: Oracle Circuit Breaker</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Extend <code>PriceFeedConsumer.sol</code> with configurable <code>minPrice</code> and <code>maxPrice</code> bounds. Reject prices outside limits, add an emergency pause mechanism, and emit warning events upon anomalies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 4: CRE External API Workflow</div>
                  <p className="text-neutral-600 leading-relaxed">
                    Design a Chainlink Runtime Environment (CRE) workflow in TypeScript. Query a public weather or flight REST API via the HTTP capability, execute BFT consensus, generate a signed report, and write results on-chain.
                  </p>
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
              19.B Five Numerical Oracle Economics & Collateral Problems
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Step-by-step mathematical problem solving for Web3 infrastructure architects. Expand each accordion to inspect variables, formulas, and derivations.
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
                      <td className="p-3">Collateral Valuation & Borrow Cap</td>
                      <td className="p-3 font-bold text-emerald-700">Value: $14,400.00 | Borrow: $10,800.00 USDC | Liquidation: $2,909.09 (9.09% drop)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 2</td>
                      <td className="p-3">Median vs Mean Outlier Resilience</td>
                      <td className="p-3 font-bold text-emerald-700">Mean: $70,970.00 (+10.52%) | Median: $64,220.00 (+0.012%) | 876x outlier suppression</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 3</td>
                      <td className="p-3">Fixed-Point USD Conversion</td>
                      <td className="p-3 font-bold text-emerald-700">Raw: 859512500000 | Converted: $8,595.125 USD</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 4</td>
                      <td className="p-3">Heartbeat Gas Maintenance Cost</td>
                      <td className="p-3 font-bold text-emerald-700">24 updates/day | 0.108 ETH/day ($324.00/day or ~$9,720/month)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 5</td>
                      <td className="p-3">VRF Mystery Box Modulo Mapping</td>
                      <td className="p-3 font-bold text-emerald-700">Roll 1: 23 (Common, 60%) | Roll 2: 95 (Legendary, 5%) | Roll 3: 88 (Epic, 10%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

            
        {/* Assessment Section */}
        <section id="assessment" className="space-y-16">
          {/* Part 19.A: Senior Oracle Architect Interview Questions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.A</span>
              <span>•</span>
              <span>SENIOR ARCHITECT INTERVIEWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.A 25 Senior Oracle & Web3 Infrastructure Architect Interview Scenarios
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Exhaustive technical scenarios and architectural questions asked in senior protocol engineering interviews at Chainlink Labs, Aave, Uniswap Foundation, MakerDAO, and top Web3 security auditing firms.
            </p>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                type="button"
                onClick={() => setInterviewFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  interviewFilter === "all"
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                All 25 Questions
              </button>
              {Array.from(new Set(INTERVIEW_QUESTIONS.map(q => q.context))).map((ctx) => (
                <button
                  key={ctx}
                  type="button"
                  onClick={() => setInterviewFilter(ctx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    interviewFilter === ctx
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {ctx}
                </button>
              ))}
            </div>

            {/* Interview Question Cards */}
            <div className="space-y-4">
              {filteredInterviews.map((item) => {
                const isExpanded = expandedInterviewId === item.id;
                return (
                  <div key={item.id} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => setExpandedInterviewId(isExpanded ? null : item.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-neutral-50 transition-all"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
                            {item.id.toUpperCase()}
                          </span>
                          <span className="text-neutral-300">•</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                            {item.context}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900">{item.question}</h4>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 mt-1 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {isExpanded && (
                      <div className="p-5 border-t border-neutral-100 bg-neutral-50/50 space-y-4 text-xs font-mono">
                        <div>
                          <strong className="text-neutral-900 block mb-1">Architectural Model Answer:</strong>
                          <p className="text-neutral-700 leading-relaxed bg-white p-4 rounded-xl border border-neutral-200">
                            {item.answer}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-bold">
                          Key Architectural Takeaway: {item.takeaway}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Part 19.C: 20 Multiple-Choice Examination Questions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.C</span>
              <span>•</span>
              <span>KNOWLEDGE ASSESSMENT</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  Module 20 Examination: Oracles & Chainlink Architecture
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  20 questions assessing your mastery of oracle determinism, AggregatorV3Interface validation, VRF v2.5, OCR aggregation, and flash loan defense.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-neutral-700">
                  Score: {quizScore} / {QUIZ_QUESTIONS.length}
                </span>
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset Exam
                </button>
              </div>
            </div>

            {/* Quiz Questions List */}
            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, qIndex) => {
                const selectedOption = userQuizAnswers[qIndex];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === q.correctAnswer;

                return (
                  <div key={q.id} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
                          Question {qIndex + 1} of {QUIZ_QUESTIONS.length}
                        </span>
                        <h4 className="text-base font-bold text-neutral-900">{q.question}</h4>
                      </div>
                      {isAnswered && (
                        <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full shrink-0 ${
                          isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                        }`}>
                          {isCorrect ? "CORRECT" : "INCORRECT"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIndex) => {
                        let btnStyle = "bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-800";
                        if (isAnswered) {
                          if (optIndex === q.correctAnswer) {
                            btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
                          } else if (optIndex === selectedOption) {
                            btnStyle = "bg-red-50 border-red-500 text-red-950 line-through";
                          } else {
                            btnStyle = "bg-neutral-50 border-neutral-200 text-neutral-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={optIndex}
                            type="button"
                            disabled={isAnswered}
                            onClick={() => handleQuizOptionSelect(qIndex, optIndex)}
                            className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-mono transition-all flex items-start gap-3 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold">
                              {String.fromCharCode(65 + optIndex)}
                            </span>
                            <span className="leading-relaxed">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-700 space-y-1">
                        <strong className="text-neutral-900 block font-sans">Explanation:</strong>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

            
        {/* Tracker & Reference Resources Section */}
        <section id="tracker" className="space-y-16">
          {/* Official Resources Table */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PRIMARY LITERATURE</span>
              <span>•</span>
              <span>OFFICIAL RESOURCES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Additional Reading & Official Chainlink Engineering Documentation
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Essential documentation and technical specifications for continuing your mastery of decentralized oracles, verifiable randomness, and CRE workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Using Chainlink Data Feeds",
                  desc: "Official guide to integrating price feeds, reading decimals, and error handling in Solidity.",
                  link: "https://docs.chain.link/data-feeds/using-data-feeds"
                },
                {
                  title: "Decentralized Data Model Architecture",
                  desc: "Comprehensive breakdown of Aggregators, Proxies, and off-chain data flows.",
                  link: "https://docs.chain.link/architecture-overview/architecture-decentralized-model"
                },
                {
                  title: "Selecting Quality Data Feeds",
                  desc: "Best practices for data security, node reputation, and multi-source market coverage.",
                  link: "https://docs.chain.link/data-feeds/selecting-data-feeds"
                },
                {
                  title: "Contract Feed Addresses Registry",
                  desc: "Official contract addresses across Ethereum, Arbitrum, Optimism, Polygon, and Base.",
                  link: "https://docs.chain.link/data-feeds/price-feeds/addresses"
                },
                {
                  title: "Chainlink VRF v2.5 Developer Guide",
                  desc: "Generating verifiable randomness with subscription and direct funding modes.",
                  link: "https://docs.chain.link/vrf"
                },
                {
                  title: "Automation to CRE Migration Guide",
                  desc: "Step-by-step instructions to migrate from sunsetted Automation v1/v2 to modern CRE workflows.",
                  link: "https://docs.chain.link/cre/reference/cla-migration"
                },
                {
                  title: "Functions to CRE Migration Guide",
                  desc: "Transitioning legacy Chainlink Functions HTTP requests to full BFT consensus CRE workflows.",
                  link: "https://docs.chain.link/cre/reference/clf-migration-ts"
                },
                {
                  title: "Chainlink Runtime Environment (CRE)",
                  desc: "The universal decentralized execution platform for multi-chain workflows and off-chain computation.",
                  link: "https://docs.chain.link/cre/overview"
                },
                {
                  title: "Chainlink Data Streams (Low-Latency)",
                  desc: "Pull-based, sub-second verifiable market reports designed for high-frequency perpetuals DeFi.",
                  link: "https://docs.chain.link/data-streams/overview"
                }
              ].map((res, i) => (
                <a
                  key={i}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group space-y-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-neutral-400 group-hover:text-amber-600 transition-colors">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider">Resource {i + 1}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans">{res.desc}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 group-hover:underline inline-flex items-center gap-1">
                    Read Documentation &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Module 20 Final Learning Outcomes */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-neutral-100 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold tracking-wide">
              <span>EXECUTIVE SUMMARY</span>
              <span>•</span>
              <span>MODULE 20 LEARNING OUTCOMES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Module 20 Mastery Outcomes & Central Takeaway
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              By completing this module, you have mastered the complete architectural lifecycle of blockchain oracles:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-neutral-300">
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain the blockchain oracle problem and why external information is needed.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Differentiate centralized and decentralized oracle architectures.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain the multi-tier architecture of Chainlink Data Feeds.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Integrate AggregatorV3Interface into production Solidity contracts.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Retrieve, sanitize, and interpret all 5 latestRoundData() parameters.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Perform full-precision decimal conversion and wei-to-USD math.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Apply data freshness validation: require(block.timestamp - updatedAt &le; maxAge).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain Decentralized Oracle Networks (DONs) and Offchain Reporting (OCR).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Implement Chainlink VRF v2.5 with cryptographic on-chain verification.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Defend against oracle security vectors: flash loans, stale data, and front-running.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Connect external REST APIs using Chainlink Runtime Environment (CRE).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Incorporate L2 Sequencer Uptime Feeds and post-restart grace periods.</span>
              </div>
              <div className="flex items-start gap-2 sm:col-span-2">
                <span className="text-amber-400">&bull;</span>
                <span>Design defense-in-depth applications using multi-reference oracles and circuit breakers.</span>
              </div>
            </div>

            {/* Capstone Project Prompt */}
            <div className="p-5 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 text-xs font-mono space-y-2">
              <div className="text-amber-400 font-bold uppercase text-[11px]">Final Module 20 Capstone Project:</div>
              <p className="text-neutral-200 leading-relaxed">
                Build an oracle-powered DeFi collateral valuation application that retrieves ETH/USD from Chainlink, validates the returned price, calculates collateral value, applies borrowing limits, and prevents sensitive operations when the oracle data is invalid or outdated.
              </p>
              <p className="text-neutral-400 italic text-[11px] pt-1">
                "Integrating an oracle is not just about retrieving a price—it is about ensuring that the information is appropriate, available, correctly interpreted and safe to use in financial smart contract logic."
              </p>
            </div>
          </div>

          {/* Interactive Checklist Persistent Progress Tracker */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Progress Tracker</span>
                <h3 className="text-xl font-bold text-neutral-900">Module 20 Mastery Checklist</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Track your progress across all 28 core objectives. Persisted locally.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-base font-mono font-bold text-neutral-900">
                    {completedChecklistCount} / {CHECKLIST_ITEMS.length}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">
                    {Math.round((completedChecklistCount / CHECKLIST_ITEMS.length) * 100)}% Complete
                  </div>
                </div>
                <button
                  type="button"
                  onClick={resetChecklist}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset Checklist
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
              <div
                className="h-full bg-amber-600 transition-all duration-300"
                style={{ width: `${(completedChecklistCount / CHECKLIST_ITEMS.length) * 100}%` }}
              />
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {CHECKLIST_ITEMS.map((item) => {
                const isChecked = !!completedChecklist[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      isChecked
                        ? "bg-amber-50/60 border-amber-300 text-amber-950 font-medium"
                        : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
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
          </div>

          {/* Module Navigation Footer */}
          <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 pb-12">
            <Link
              to="/learning/blockchain/layer-2-scaling"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 font-mono text-xs font-bold transition-all text-center"
            >
              &larr; Previous: Module 19 (Layer 2 & Scaling)
            </Link>
            <Link
              to="/learning/blockchain/daos-governance"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-600 text-white hover:bg-amber-700 font-mono text-xs font-bold transition-all text-center shadow-sm"
            >
              Next: Module 21 (DAOs & Blockchain Governance) &rarr;
            </Link>
          </div>
        </section>

          </div>
        )}
      </main>
    </div>
  );
}
