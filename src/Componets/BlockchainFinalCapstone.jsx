// projectx/src/Componets/BlockchainFinalCapstone.jsx
import React, { useState, useMemo, useCallback } from "react";
import ModuleNav from "./ModuleNav";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ExternalLink,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = [
  {
    "id": "s1",
    "title": "1. Introduction to the Final Capstone",
    "category": "Project Foundations",
    "summary": "Full-stack synthesis of course concepts, production-style DApp engineering, and decoupled Web3 architecture."
  },
  {
    "id": "s2",
    "title": "2. Capstone Project Selection",
    "category": "Project Foundations",
    "summary": "Evaluation of 4 blueprints (Voting, NFT Marketplace, Supply Chain, DeFi Lending) and criteria matrix."
  },
  {
    "id": "s3",
    "title": "3. Project Requirements & Specification",
    "category": "Requirements",
    "summary": "VoteChain problem statement, 7 stakeholders, FR-01 to FR-10, non-functional quality attributes, and MVP scope."
  },
  {
    "id": "s4",
    "title": "4. System Architecture Design",
    "category": "Architecture",
    "summary": "3-layer DApp model: React/Viem presentation, Node/PostgreSQL event indexer, EVM Solidity layer, and IPFS."
  },
  {
    "id": "s5",
    "title": "5. Blockchain Selection",
    "category": "Architecture",
    "summary": "Network selection criteria, EVM vs Solana trade-offs, and testnet selection rationale."
  },
  {
    "id": "s6",
    "title": "6. Smart Contract Architecture",
    "category": "Smart Contracts",
    "summary": "Modular decomposition: ElectionManager, CandidateManager, VotingEngine, ResultManager, and state machine."
  },
  {
    "id": "s7",
    "title": "7. Database & Off-Chain Storage Design",
    "category": "Off-Chain Systems",
    "summary": "PostgreSQL relational schemas (Users, Elections, Candidates, Transactions), event listener, and reorg handling."
  },
  {
    "id": "s8",
    "title": "8. Solidity Implementation",
    "category": "Smart Contracts",
    "summary": "Solidity design patterns, vote validation mappings, public ballot limitations, and Hardhat 3 / Foundry workflows."
  },
  {
    "id": "s9",
    "title": "9. Frontend Implementation with React",
    "category": "Frontend & UX",
    "summary": "React + TypeScript directory layout, 5 main user screens, and Wagmi/Viem smart contract hooks."
  },
  {
    "id": "s10",
    "title": "10. Wallet Integration",
    "category": "Frontend & UX",
    "summary": "Wallet provider connection, Sign-In with Ethereum (SIWE) nonce authentication, and signing security rules."
  },
  {
    "id": "s11",
    "title": "11. Contract Deployment",
    "category": "Deployment",
    "summary": "Compilation lifecycle, Hardhat Ignition deployment modules, and block explorer bytecode verification."
  },
  {
    "id": "s12",
    "title": "12. Automated Testing",
    "category": "Testing & QA",
    "summary": "Unit, integration, negative, fuzz, and invariant testing equations (sum of candidate votes == total votes)."
  },
  {
    "id": "s13",
    "title": "13. Security Audit",
    "category": "Security",
    "summary": "Top smart contract vulnerabilities, Checks-Effects-Interactions (CEI), OWASP SCSVS, and audit report structure."
  },
  {
    "id": "s14",
    "title": "14. Gas Optimization",
    "category": "Optimization",
    "summary": "Storage packing, calldata vs memory, event offloading, loop elimination, and gas benchmarking reports."
  },
  {
    "id": "s15",
    "title": "15. IPFS Integration",
    "category": "Off-Chain Systems",
    "summary": "Content addressing (CIDs), candidate/NFT metadata JSON, pinning providers, and privacy protection rules."
  },
  {
    "id": "s16",
    "title": "16. CI/CD Pipeline",
    "category": "DevOps",
    "summary": "GitHub Actions automated build, test, and security analysis workflow with secret hygiene."
  },
  {
    "id": "s17",
    "title": "17. Testnet Deployment",
    "category": "Deployment",
    "summary": "4-stage testnet release process (Local -> Public Testnet -> Integration -> UAT) and deployment checklist."
  },
  {
    "id": "s18",
    "title": "18. Application Monitoring",
    "category": "Operations",
    "summary": "Tri-layer monitoring (blockchain events, backend indexing, frontend errors) and incident response playbook."
  },
  {
    "id": "s19",
    "title": "19. Technical Documentation",
    "category": "Documentation",
    "summary": "19-section README.md, architecture specifications, API schemas, and deployment guides."
  },
  {
    "id": "s20",
    "title": "20. Technical Presentation",
    "category": "Presentation",
    "summary": "12-slide executive presentation roadmap and live application demonstration script."
  },
  {
    "id": "s21",
    "title": "21. Blueprint B \u2014 NFT Marketplace",
    "category": "Blueprints",
    "summary": "ERC-721/1155/2981 royalty standards, IPFS artwork pinning, listing escrow, and English auction extension."
  },
  {
    "id": "s22",
    "title": "22. Blueprint C \u2014 Blockchain Supply Chain",
    "category": "Blueprints",
    "summary": "6-stage product lifecycle state machine, role-based transitions, IPFS certificates, and QR verification."
  },
  {
    "id": "s23",
    "title": "23. Blueprint D \u2014 DeFi Lending Platform",
    "category": "Blueprints",
    "summary": "Collateralization, LTV ratio, Health Factor formula, Chainlink price oracles, and liquidation risk engine."
  },
  {
    "id": "s24",
    "title": "24. Integrating the Entire Course",
    "category": "Course Synthesis",
    "summary": "Comprehensive matrix connecting Modules 1 to 23 into the final production engineering submission."
  },
  {
    "id": "s25",
    "title": "25. Recommended Final Repository",
    "category": "Engineering Standards",
    "summary": "Standard enterprise directory tree separating contracts, frontend, backend, test, docs, and security."
  },
  {
    "id": "s26",
    "title": "26. Capstone Development Roadmap",
    "category": "Project Management",
    "summary": "12-week software development lifecycle (SDLC) Gantt milestones from requirements to final defense."
  },
  {
    "id": "s27",
    "title": "27. Required Capstone Deliverables",
    "category": "Evaluation",
    "summary": "Eight mandatory deliverables: GitHub repo, smart contracts, diagrams, test suite, audit, docs, DApp, slides."
  },
  {
    "id": "s28",
    "title": "28. Final Project Evaluation Rubric",
    "category": "Evaluation",
    "summary": "100-point rigorous academic grading rubric across 9 dimensions and 5 performance achievement tiers."
  },
  {
    "id": "s29",
    "title": "29. Final Viva & Technical Interview",
    "category": "Evaluation",
    "summary": "25 oral defense questions covering architecture, contracts, security, full-stack, and operations."
  },
  {
    "id": "s30",
    "title": "30. Advanced Research Directions",
    "category": "Research & Industry",
    "summary": "Post-capstone frontiers: ZK proofs, Account Abstraction (ERC-4337), L2 rollups, and AI on-chain analytics."
  },
  {
    "id": "s31",
    "title": "31. Recommended Official Resources",
    "category": "Resources",
    "summary": "Authoritative portals: Ethereum Docs, Solidity Lang, OpenZeppelin 5.x, Foundry, Hardhat 3, Wagmi, OWASP."
  },
  {
    "id": "s32",
    "title": "32. Final Learning Outcomes",
    "category": "Graduation",
    "summary": "16 core engineering competencies and official graduation from the 24-Module Blockchain Engineering Curriculum."
  }
];
const QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "question": "What is the primary role of a smart contract in a production-style Web3 decentralized application?",
    "options": [
      "To replace traditional web servers and render HTML templates",
      "To authoritatively enforce business rules, state transitions, and asset ownership",
      "To store full-text search indexes and user interface preferences",
      "To run continuous background database cron jobs"
    ],
    "answer": 1,
    "explanation": "In production Web3 architectures, smart contracts act as the definitive, immutable source of truth for critical state transitions and access control. Off-chain databases serve only for caching, indexing, and search."
  },
  {
    "id": "q2",
    "question": "Why should an application indexer like The Graph or a custom Node/PostgreSQL service be used instead of querying RPC nodes directly for search queries?",
    "options": [
      "Smart contracts cannot store any data at all",
      "Direct RPC queries for complex historical filtering are slow, expensive, and rate-limited",
      "Blockchain nodes do not support cryptography",
      "PostgreSQL is more decentralized than Ethereum"
    ],
    "answer": 1,
    "explanation": "Querying historical blockchain logs or complex aggregations directly across Ethereum RPC nodes is computationally slow and costly. Indexing contract events into a relational database (PostgreSQL) allows instant filtering and search."
  },
  {
    "id": "q3",
    "question": "What critical security limitation must be acknowledged when building a transparent on-chain voting system like VoteChain?",
    "options": [
      "Votes cannot be counted until the next year",
      "Public blockchain storage allows anyone to observe which address cast which ballot, lacking secret voting",
      "EVM smart contracts cannot store boolean mappings",
      "Voters must pay with physical currency"
    ],
    "answer": 1,
    "explanation": "All on-chain state and event logs are completely transparent. Unless advanced cryptography (such as zero-knowledge proofs or commit-reveal encryption) is used, any observer can link a voter's address to their vote."
  },
  {
    "id": "q4",
    "question": "Which software architectural pattern protects Solidity contracts against catastrophic reentrancy exploits during withdrawals?",
    "options": [
      "Interactions-Checks-Effects pattern",
      "Checks-Effects-Interactions (CEI) pattern",
      "Model-View-Controller pattern",
      "Singleton Factory pattern"
    ],
    "answer": 1,
    "explanation": "The Checks-Effects-Interactions (CEI) pattern requires validating prerequisites first (Checks), updating internal balances and state next (Effects), and only then performing external value transfers (Interactions)."
  },
  {
    "id": "q5",
    "question": "In the DeFi Lending Blueprint (Project D), what does a Health Factor (HF) below 1.0 indicate?",
    "options": [
      "The user has zero borrowed balance",
      "The position has breached the modeled collateral safety threshold and is eligible for liquidation",
      "The smart contract has run out of gas",
      "The Chainlink price oracle has paused updates"
    ],
    "answer": 1,
    "explanation": "Health Factor is calculated as (Collateral Value * Liquidation Threshold) / Borrowed Value. When HF drops below 1.0, the loan is under-collateralized relative to the safety threshold and liquidators can seize collateral to repay debt."
  },
  {
    "id": "q6",
    "question": "Why is IPFS pinning mandatory for media assets in an NFT marketplace or supply chain DApp?",
    "options": [
      "Without pinning, unpinned IPFS nodes may garbage-collect files, leading to dead content links",
      "Pinning encrypts the user's private key",
      "Pinning automatically pays gas fees on the Ethereum mainnet",
      "IPFS nodes cannot read JSON without pinning"
    ],
    "answer": 0,
    "explanation": "IPFS operates on cache and demand. If content is not pinned by dedicated nodes (or pinning services like Pinata), nodes will garbage-collect cached data when storage thresholds are reached, making the CID unresolvable."
  },
  {
    "id": "q7",
    "question": "What is the core purpose of Sign-In with Ethereum (SIWE / EIP-4361)?",
    "options": [
      "To send ETH directly to the website owner upon every login",
      "To securely authenticate user sessions off-chain using cryptographic wallet signatures and nonces",
      "To generate private keys inside Google Chrome",
      "To bypass all smart contract access control"
    ],
    "answer": 1,
    "explanation": "SIWE standardizes off-chain authentication by prompting the user's wallet to sign a structured message containing domain, nonce, timestamp, and address, allowing the backend to verify wallet ownership without gas fees."
  },
  {
    "id": "q8",
    "question": "What invariant mathematical condition must hold true in a secure voting smart contract at all times?",
    "options": [
      "Total Recorded Votes == Sum of all Candidate Votes",
      "Candidate Votes > Total Eligible Voters",
      "Gas Used == Number of Voters",
      "Total Votes == Current Block Number"
    ],
    "answer": 0,
    "explanation": "Conservation of ballots dictates that the global total votes counter must exactly equal the sum of votes recorded across each candidate (Total Votes = \u2211 Candidate Votes_i)."
  },
  {
    "id": "q9",
    "question": "In gas optimization for Solidity, why should external function arguments that are only read be typed as 'calldata' instead of 'memory'?",
    "options": [
      "Calldata is stored permanently in blockchain state",
      "Calldata avoids copying the array or string from transaction input data into memory, saving gas",
      "Memory can only store integers up to 255",
      "The Solidity compiler rejects memory in external functions"
    ],
    "answer": 1,
    "explanation": "Calldata is an immutable, read-only allocation where transaction data is held. Using calldata prevents the EVM from allocating memory and copying array elements, dramatically reducing execution gas."
  },
  {
    "id": "q10",
    "question": "What does contract bytecode verification on a block explorer (e.g. Etherscan / Sepolia Explorer) accomplish?",
    "options": [
      "It grants the developer administrative control over the network",
      "It proves the published Solidity source code and compiler metadata match the exact on-chain bytecode",
      "It ensures that the contract can never be attacked by hackers",
      "It automatically mints testnet ETH"
    ],
    "answer": 1,
    "explanation": "Verification compiles the submitted source code with the identical compiler settings and checks for an exact cryptographic bytecode match, enabling public transparency and independent code inspection."
  },
  {
    "id": "q11",
    "question": "Which ERC standard defines the standardized royalty query interface for NFT marketplaces?",
    "options": [
      "ERC-20",
      "ERC-2981",
      "ERC-4337",
      "ERC-165"
    ],
    "answer": 1,
    "explanation": "ERC-2981 specifies the `royaltyInfo(tokenId, salePrice)` interface, allowing marketplace contracts to query the recipient address and royalty fee amount for secondary NFT sales."
  },
  {
    "id": "q12",
    "question": "What is the primary danger of relying on a centralized off-chain database as the authoritative source of truth in a DApp?",
    "options": [
      "PostgreSQL is too fast for blockchain users",
      "A malicious database administrator or SQL injection could tamper with balances, votes, or ownership records",
      "Off-chain databases cannot store timestamps",
      "Relational databases do not support strings"
    ],
    "answer": 1,
    "explanation": "A central database can be altered, corrupted, or compromised without consensus. Treating it as authoritative defeats decentralization; the on-chain smart contract state must always remain the supreme source of truth."
  },
  {
    "id": "q13",
    "question": "In a continuous integration (CI/CD) pipeline for smart contracts, what should NEVER be committed to GitHub source code?",
    "options": [
      "Solidity contracts (.sol)",
      "Private keys, seed phrases, and production RPC credentials",
      "Hardhat configuration files",
      "Unit test scripts (.ts)"
    ],
    "answer": 1,
    "explanation": "Private keys, mnemonic seed phrases, and sensitive production secrets committed to public or private git repositories are immediately harvested by automated bot scrapers, leading to total protocol loss."
  },
  {
    "id": "q14",
    "question": "In the Supply Chain Blueprint (Project C), what prevents a distributor from marking a product as 'Delivered' prematurely?",
    "options": [
      "The blockchain physically locks the delivery truck",
      "The smart contract enforces a strict role-based state machine validating allowed transitions and caller role",
      "The retailer must transfer 100 ETH",
      "IPFS deletes the product metadata"
    ],
    "answer": 1,
    "explanation": "A state machine contract verifies that the product is currently in state `InTransit` and that `msg.sender` has the authorized `Retailer` or `Courier` role before permitting transition to `Delivered`."
  },
  {
    "id": "q15",
    "question": "What is the primary role of Chainlink Data Feeds in a DeFi lending protocol?",
    "options": [
      "To send email alerts to users when loans are due",
      "To supply tamper-resistant, decentralized market asset prices for collateral valuation and liquidation checks",
      "To store user identity documents",
      "To execute transactions without gas fees"
    ],
    "answer": 1,
    "explanation": "Lending protocols require accurate real-time asset pricing to calculate collateral ratios and health factors. Chainlink decentralized oracle networks aggregate price data from multiple liquid exchanges to prevent manipulation."
  },
  {
    "id": "q16",
    "question": "How does invariant testing differ from standard unit testing?",
    "options": [
      "Invariant testing only tests frontend CSS styles",
      "Unit testing checks specific known scenarios; invariant testing verifies properties that must hold true across randomized fuzz calls",
      "Invariant testing does not require Solidity",
      "Unit testing cannot test smart contracts"
    ],
    "answer": 1,
    "explanation": "Unit tests assert expected outcomes on single functions with deterministic inputs. Invariant tests assert that global system rules (e.g. Total Solvency, No Double-Voting) never break across thousands of randomized sequences."
  },
  {
    "id": "q17",
    "question": "What is the OWASP Smart Contract Security Verification Standard (SCSVS)?",
    "options": [
      "A hardware mining rig specification",
      "An open framework of structured security requirements used to assess smart contracts and DApps",
      "A programming language that replaces Solidity",
      "A browser wallet extension"
    ],
    "answer": 1,
    "explanation": "The OWASP SCSVS provides a standardized checklist covering architecture, access control, arithmetic, external calls, event logging, and incident response for professional smart contract audits."
  },
  {
    "id": "q18",
    "question": "Why does storing large document files directly in Solidity contract storage violate production engineering best practices?",
    "options": [
      "EVM storage operations (SSTORE) are exponentially expensive in gas, whereas IPFS content addressing is cost-efficient",
      "Ethereum nodes automatically delete strings larger than 100 characters",
      "Solidity only supports numbers",
      "Smart contracts cannot read bytes"
    ],
    "answer": 0,
    "explanation": "Writing 1MB to Ethereum storage costs millions of gas units (thousands of dollars). Decentralized applications store files off-chain on IPFS/Arweave and record only the 32-byte cryptographic hash or CID on-chain."
  },
  {
    "id": "q19",
    "question": "In a production incident response plan, what limitation must developers remember regarding smart contract emergency pauses?",
    "options": [
      "Pausing will automatically delete the hacker's wallet",
      "An emergency pause only blocks new function calls; it cannot retroactively reverse previously finalized transactions",
      "Pausing changes the consensus mechanism of Ethereum",
      "Smart contracts cannot be paused"
    ],
    "answer": 1,
    "explanation": "Blockchain state transitions are immutable once finalized. An emergency circuit breaker (pause) stops future state mutations, but funds already extracted in previous blocks cannot be unilaterally rolled back."
  },
  {
    "id": "q20",
    "question": "What distinguishes a production-style capstone project from a simple tutorial or classroom demonstration?",
    "options": [
      "A tutorial only uses HTML; production uses Python",
      "Production encompasses full-stack architecture, automated CI/CD testing, security threat modeling, error resilience, and verified deployment",
      "Production projects never require smart contracts",
      "A capstone project must be deployed on mainnet with real money"
    ],
    "answer": 1,
    "explanation": "Production engineering spans requirements, decoupled 3-tier architecture, comprehensive test coverage (unit, negative, invariant), formal security audits, gas optimization, CI/CD pipelines, and verified deployments."
  }
];
const INTERVIEW_QUESTIONS = [
  {
    "id": "viva1",
    "question": "Why did you select your specific blockchain network for this capstone, and what architectural trade-offs did that entail?",
    "category": "Blockchain Architecture",
    "answer": "We selected an EVM-compatible network (Sepolia testnet / Arbitrum Sepolia) because our application requires rich smart contract expressiveness, standardized OpenZeppelin access-control components, mature testing tooling (Hardhat 3 and Foundry), and seamless wallet integration via Wagmi and Viem.\n\nThe trade-offs include: sequential execution constraints and variable gas fees during network congestion compared to high-throughput multi-threaded architectures like Solana. However, for a governance/voting platform, EVM's battle-tested security, developer tooling, and tooling interoperability outweighed raw transaction throughput."
  },
  {
    "id": "viva2",
    "question": "Why is blockchain necessary for this application instead of a traditional centralized cloud database?",
    "category": "Blockchain Architecture",
    "answer": "In our voting application (VoteChain), a centralized database creates a single point of failure and systemic trust concerns: database administrators or cloud operators could silently modify voting tallies, delete ballots, or alter timestamps without detection.\n\nA public blockchain provides trust minimization: election state transitions, candidate registrations, and ballot submissions are sealed by cryptographic signatures and consensus. Once a transaction is finalized, neither the election organizer nor the platform developer can alter historical voting records."
  },
  {
    "id": "viva3",
    "question": "Explain how you partitioned application state between on-chain storage and off-chain storage.",
    "category": "Blockchain Architecture",
    "answer": "We strictly enforced the principle of authoritative on-chain state vs. auxiliary off-chain data:\n- **On-Chain:** Authoritative election lifecycle status (DRAFT, ACTIVE, CLOSED, FINALIZED), voter eligibility mapping, hasVoted boolean flags, candidate identifiers, and aggregate vote counts.\n- **Off-Chain (IPFS):** Candidate biographical statements, campaign manifesto PDFs, and candidate profile images (stored as immutable CIDs).\n- **Off-Chain (PostgreSQL):** Search indexes, historical transaction feed, cached dashboards, and user interface preferences, fully rebuildable from contract events."
  },
  {
    "id": "viva4",
    "question": "How does consensus finality affect transaction confirmation and user experience in your DApp?",
    "category": "Blockchain Architecture",
    "answer": "In Ethereum (Proof of Stake with Casper FFG), a transaction enters a block within 12 seconds, achieving optimistic inclusion. However, economic finality requires two complete epochs (~12.8 minutes).\n\nIn our frontend, we manage user expectations across distinct states: Transaction Prepared -> Wallet Signature Requested -> Transaction Submitted (showing block explorer link) -> Confirmed (1 block confirmation) -> Finalized. We prevent duplicate submissions by disabling buttons and displaying real-time receipt polling."
  },
  {
    "id": "viva5",
    "question": "What are the structural throughput and latency limitations of your selected network, and how does your design accommodate them?",
    "category": "Blockchain Architecture",
    "answer": "Ethereum L1 processes ~15-30 TPS with 12-second block intervals. If thousands of voters submit ballots simultaneously, network gas fees spike and latency increases.\n\nOur design mitigates this by: keeping the `vote()` transaction footprint lean (consuming only ~48,000 gas with zero loops), emitting lightweight events, and designing the architecture so it can be deployed on high-throughput Layer 2 rollups (e.g. Arbitrum or Optimism) without code modifications."
  },
  {
    "id": "viva6",
    "question": "Walk through the architectural separation of concerns between your smart contracts.",
    "category": "Smart Contracts",
    "answer": "Our system follows modular separation:\n- **ElectionManager:** Controls election creation, schedule parameters, and state transitions (Draft -> Active -> Closed -> Finalized).\n- **CandidateManager:** Handles candidate registration and validates registration freezes before voting commences.\n- **VotingEngine:** Enforces voter eligibility, verifies `!hasVoted`, increments candidate totals, and emits `VoteCast`.\n- **ResultManager:** Provides tamper-proof view functions for verified candidate tallies and election winners."
  },
  {
    "id": "viva7",
    "question": "How does your contract access control operate, and why did you choose Role-Based Access Control (RBAC)?",
    "category": "Smart Contracts",
    "answer": "We implemented OpenZeppelin's `AccessControl` rather than a simplistic `Ownable` pattern. A single owner creates dangerous privilege concentration.\n\nWith RBAC, we defined distinct roles:\n- `DEFAULT_ADMIN_ROLE`: High-level multisig administration and role assignment.\n- `ELECTION_ORGANIZER_ROLE`: Configures elections and candidate schedules.\n- `VOTER_REGISTRAR_ROLE`: Verifies credentials and allowlists eligible voter addresses.\nThis adheres to the principle of least privilege."
  },
  {
    "id": "viva8",
    "question": "How do you guarantee that an election cannot accept votes before opening or after its deadline?",
    "category": "Smart Contracts",
    "answer": "We enforce dual protection: an explicit state machine enum check and timestamp guards.\nIn `VotingEngine.sol`:\n`require(election.status == ElectionStatus.Active, 'Election not active');`\n`require(block.timestamp >= election.startTime, 'Voting not started');`\n`require(block.timestamp <= election.endTime, 'Voting ended');`\nOnce `endTime` lapses, anyone or an automated keeper can call `closeElection()`, transitioning the state to `Closed`."
  },
  {
    "id": "viva9",
    "question": "How are smart contract events used by external systems, and what happens if an event is dropped?",
    "category": "Smart Contracts",
    "answer": "Events like `VoteCast(electionId, voter, candidateId)` provide cheap off-chain logging (~375 gas vs 20,000 gas for storage). Our Node.js indexer listens to these events via WebSockets to populate PostgreSQL.\n\nTo handle dropped connections or RPC downtime, our indexer maintains a persistent `last_processed_block` pointer in the database. On startup or reconnect, it queries `getLogs` from the last recorded block forward, preventing event loss and reconciling missed state transitions."
  },
  {
    "id": "viva10",
    "question": "How does your contract handle failed transactions and ensure atomic rollbacks?",
    "category": "Smart Contracts",
    "answer": "The EVM guarantees transaction atomicity. If any condition fails (e.g. `hasVoted` is true or candidate ID does not exist), the contract triggers a `revert CustomError()`. The EVM completely reverts all state changes made during that transaction execution frame and refunds remaining unused gas, ensuring partial or corrupt state writes are impossible."
  },
  {
    "id": "viva11",
    "question": "What is reentrancy, how could it manifest in a DApp, and how did your codebase prevent it?",
    "category": "Security",
    "answer": "Reentrancy occurs when a contract makes an external call to an untrusted address before updating its internal state. The recipient contract's fallback function re-enters the original contract, repeatedly executing logic with stale accounting.\n\nIn our code, we enforce the Checks-Effects-Interactions (CEI) pattern across all state-mutating functions and inherit OpenZeppelin's `ReentrancyGuard` (`nonReentrant` modifier) for any function executing external token or ETH transfers."
  },
  {
    "id": "viva12",
    "question": "How did you prevent unauthorized administrative takeover if an admin private key is compromised?",
    "category": "Security",
    "answer": "We implemented three defensive layers:\n1. **Multisig Governance:** Admin roles are assigned to a Safe (Gnosis Safe) contract requiring multiple signatures (e.g. 2-of-3) for critical operations.\n2. **Timelock Controller:** Significant administrative actions (such as parameter changes) require a 48-hour timelock delay before execution, allowing community review.\n3. **Immutable Core Invariants:** Once an election is `Active`, administrators cannot delete candidates, change registered votes, or alter voting rules."
  },
  {
    "id": "viva13",
    "question": "What is front-running / MEV in transaction execution, and does it threaten your project?",
    "category": "Security",
    "answer": "Front-running occurs when searchers or validators monitor the public mempool and insert transactions with higher gas fees ahead of user transactions.\n\nIn an open voting system, front-running is less damaging than in DeFi arbitrage, but an attacker could front-run an election closure or observe a rival's vote before casting theirs. To address this in advanced iterations, we blueprint Commit-Reveal voting, where voters submit a salted hash `keccak256(candidateId, secretSalt)` during the voting phase and reveal the salt only after voting closes."
  },
  {
    "id": "viva14",
    "question": "How did you perform static analysis and automated vulnerability testing on your smart contracts?",
    "category": "Security",
    "answer": "We integrated Slither and Aderyn into our automated CI pipeline. Slither parsed the Solidity AST to check for reentrancy, unchecked low-level calls, uninitialized state variables, and shadowing.\n\nAdditionally, we wrote property-based fuzz tests in Foundry, running 10,000 randomized transaction runs to assert that candidate votes never exceed total registered voters."
  },
  {
    "id": "viva15",
    "question": "What is the secret ballot limitation of public blockchains, and how do you transparently communicate it?",
    "category": "Security",
    "answer": "Because all blockchain storage and events are public, recording an address and its chosen candidate exposes that address's voting preference. Furthermore, 1-address-1-vote does not guarantee 1-human-1-vote without Sybil resistance.\n\nWe document this explicitly in our architecture and UI disclaimers: VoteChain is an open, auditable governance system for credentialed addresses, not a covert national election system. We present Zero-Knowledge Proofs (Semaphore / MACI) as the future research trajectory."
  },
  {
    "id": "viva16",
    "question": "Explain how React and Viem/Wagmi interact with the Ethereum blockchain.",
    "category": "Frontend & Backend",
    "answer": "React manages client-side UI components and user interactions. Wagmi provides React hooks (`useReadContract`, `useWriteContract`, `useWaitForTransactionReceipt`) backed by Viem.\n\nViem formats the contract ABI, encodes function selectors and arguments into hexadecimal calldata, and dispatches JSON-RPC requests (`eth_call` for reads, `eth_sendRawTransaction` for writes) to RPC endpoints (Infura / Alchemy) or the browser's injected wallet provider."
  },
  {
    "id": "viva17",
    "question": "What is the difference between connecting a wallet and authenticating a user session via SIWE?",
    "category": "Frontend & Backend",
    "answer": "Connecting a wallet merely exposes the user's public address to the frontend via `window.ethereum`. Any client can mock a public address in memory.\n\nSign-In with Ethereum (SIWE / EIP-4361) creates cryptographically verified backend authentication: the server issues a unique one-time nonce. The user signs an EIP-4361 message with their private key. The backend recovers the public key using `ecrecover`; if it matches, a secure JWT/HTTP-only session cookie is issued."
  },
  {
    "id": "viva18",
    "question": "How does your backend indexer handle chain reorganizations (reorgs)?",
    "category": "Frontend & Backend",
    "answer": "During short network reorgs, recently mined blocks can be orphaned. If an indexer immediately treats 1-confirmation events as permanent, the database can store phantom state.\n\nOur indexer enforces a confirmation depth threshold (waiting 12 block confirmations on L1 before marking an event 'finalized' in PostgreSQL). If a blockhash mismatch is detected, the indexer rolls back database mutations back to the common ancestor block and re-indexes the valid canonical fork."
  },
  {
    "id": "viva19",
    "question": "Why did you implement IPFS pinning, and what happens if the pinning service goes offline?",
    "category": "Frontend & Backend",
    "answer": "IPFS content is addressed by hash (CID). However, storage nodes garbage-collect files that are not pinned. We integrated Pinata and an IPFS cluster node to persist all candidate metadata and images.\n\nBecause CIDs are content-derived and location-agnostic, if Pinata experiences downtime, any other node holding the CID or local backup node can serve the file without changing the smart contract's stored address."
  },
  {
    "id": "viva20",
    "question": "How does your frontend handle user-rejected wallet signatures and network switching?",
    "category": "Frontend & Backend",
    "answer": "When a user rejects a signature in MetaMask, the provider throws RPC error code `4001 (User Rejected Request)`. We intercept this in Wagmi's `onError` callback to display a clean warning toast rather than crashing the application.\n\nFor wrong-network states, we inspect the chain ID via `useAccount`. If the user is on an unsupported network, our `NetworkSwitchGuard` modal automatically prompts `wallet_switchEthereumChain` to switch to Sepolia."
  },
  {
    "id": "viva21",
    "question": "What is the fundamental difference between deploying to a local node, a public testnet, and mainnet?",
    "category": "Deployment & Testing",
    "answer": "- **Local Node (Anvil / Hardhat Network):** Instant mining, zero real cost, full snapshot/revert control, used for rapid unit test iteration.\n- **Public Testnet (Sepolia):** Real decentralized P2P network with actual latency, multi-user concurrency, and external RPCs, but testnet ETH has no real-world economic value.\n- **Mainnet:** Real economic capital at risk, immutable state, permanent financial liability, requiring formal audits and timelocks."
  },
  {
    "id": "viva22",
    "question": "How did you measure and benchmark smart contract gas consumption?",
    "category": "Deployment & Testing",
    "answer": "We used `hardhat-gas-reporter` and Foundry's `forge test --gas-report`. We established baseline gas benchmarks for every instruction (`createElection`, `registerCandidate`, `vote`, `closeElection`).\n\nBy packing storage structs (combining uint64 timestamps with address and status), replacing storage reads with memory variables, and switching external inputs to `calldata`, we reduced the gas cost of `vote()` from 68,400 down to 48,150 gas (~29.6% savings)."
  },
  {
    "id": "viva23",
    "question": "Explain the concept of an Invariant Test and cite the primary invariant enforced in your project.",
    "category": "Deployment & Testing",
    "answer": "An invariant is a mathematical property that must hold true regardless of what random sequence of valid or invalid transactions are executed.\n\nIn VoteChain, our invariant is Ballot Conservation:\n`assert(votingEngine.totalVotesRecorded(electionId) == sum(candidateVotes[i]))`\nIn our Foundry invariant test suite, a handler executes thousands of randomized votes across randomized voters; after every action, the invariant condition is verified to never fail."
  },
  {
    "id": "viva24",
    "question": "How did you configure your CI/CD pipeline to ensure deployment safety?",
    "category": "Deployment & Testing",
    "answer": "Our GitHub Actions workflow enforces a strict sequential pipeline:\n1. Dependency installation and Solidity compilation (`hardhat compile`).\n2. Automated unit and integration test suite (`hardhat test`).\n3. Static analysis security scan (`slither .`).\n4. React build verification (`npm run build`).\n5. Only when all tests and security scans pass on `main` does the workflow permit deploying to Sepolia using protected GitHub Secrets."
  },
  {
    "id": "viva25",
    "question": "What are the remaining technical limitations of your project, and how would you address them in future work?",
    "category": "Deployment & Testing",
    "answer": "The core limitations are:\n1. **Voter Anonymity:** Transparent addresses allow tracking vote decisions. Future work will integrate Semaphore zero-knowledge proofs.\n2. **Sybil Resistance:** Addresses are allowlisted by an admin; future iterations will integrate decentralized identity credentials (Worldcoin / Gitcoin Passport).\n3. **Gas Subsidization:** Voters currently pay their own testnet gas. In production, we would integrate EIP-4337 Account Abstraction paymasters to sponsor gas fees for voters."
  }
];
const NUMERICAL_PROBLEMS = [
  {
    "id": "num1",
    "title": "Problem 1: DeFi Lending Health Factor & Liquidation Margin",
    "scenario": "A borrower in a DeFi lending protocol (Blueprint D) deposits 4.5 ETH as collateral when ETH is priced at $3,200. The protocol specifies a Liquidation Threshold of 80% (0.80) and a Loan-to-Value (LTV) limit of 75% (0.75). The borrower takes out a loan of 9,600 USDC (pegged at $1.00).",
    "question": "Calculate the initial Collateral Value, the position's initial Health Factor (HF), and determine the exact ETH price drop at which the position triggers liquidation (HF < 1.0).",
    "given": [
      "Collateral Amount: 4.5 ETH",
      "Initial ETH Price: $3,200",
      "Borrowed Debt: 9,600 USDC ($9,600)",
      "Liquidation Threshold (LT): 80% (0.80)",
      "LTV Max: 75% (0.75)"
    ],
    "steps": [
      "Step 1: Calculate Initial Collateral Value: 4.5 ETH * $3,200/ETH = $14,400",
      "Step 2: Calculate Initial Health Factor: HF = (Collateral Value * LT) / Debt = ($14,400 * 0.80) / $9,600 = $11,520 / $9,600 = 1.20",
      "Step 3: Determine Collateral Value at Liquidation Threshold (HF = 1.0):",
      "1.0 = (Collateral_Value_crit * 0.80) / $9,600  =>  Collateral_Value_crit = $9,600 / 0.80 = $12,000",
      "Step 4: Calculate Critical ETH Price: P_crit = $12,000 / 4.5 ETH = $2,666.67",
      "Step 5: Percentage Price Drop = ($3,200 - $2,666.67) / $3,200 = 16.67%"
    ],
    "answer": "Initial Health Factor: 1.20 (Safe); Critical Liquidation Price: $2,666.67/ETH (Liquidation triggers if ETH drops by 16.67%)."
  },
  {
    "id": "num2",
    "title": "Problem 2: Gas Optimization Across 10,000 Voting Transactions",
    "scenario": "In the VoteChain project (Blueprint A), an unoptimized version of the `vote()` function consumes 68,400 gas units per transaction. By packing storage variables (combining uint32 electionId, address voter, and uint8 candidateId into tightly packed slots) and replacing storage reads with memory variables, the gas consumption drops to 48,150 gas units.",
    "question": "Assuming an election with 10,000 participants and an average network gas price of 28 Gwei on Ethereum with ETH at $3,000, calculate total gas saved, ETH cost savings, and equivalent USD savings.",
    "given": [
      "Total voters: 10,000",
      "Unoptimized Gas: 68,400 gas / tx",
      "Optimized Gas: 48,150 gas / tx",
      "Gas Price: 28 Gwei (28 * 10^-9 ETH)",
      "ETH Price: $3,000"
    ],
    "steps": [
      "Step 1: Gas saved per transaction: 68,400 - 48,150 = 20,250 gas units (29.6% reduction)",
      "Step 2: Total gas saved for 10,000 transactions: 10,000 * 20,250 = 202,500,000 gas units",
      "Step 3: Total ETH saved: 202,500,000 gas * (28 * 10^-9 ETH) = 5.67 ETH",
      "Step 4: Total USD saved: 5.67 ETH * $3,000/ETH = $17,010.00"
    ],
    "answer": "Total Gas Saved: 202.5M gas units; Total ETH Saved: 5.67 ETH; Total Cost Savings: $17,010.00 across 10,000 voters."
  },
  {
    "id": "num3",
    "title": "Problem 3: NFT Marketplace Escrow & ERC-2981 Royalty Distribution",
    "scenario": "An artist lists a digital art NFT on the capstone NFT Marketplace (Blueprint B) for a purchase price of 6.4 ETH. The NFT contract implements ERC-2981 specifying a creator royalty fee of 7.5% (750 basis points). The marketplace protocol charges a 2.5% platform fee on all sales.",
    "question": "Calculate the exact split in ETH and USD (with ETH at $3,200) received by the Creator (royalty), the Marketplace Treasury (platform fee), and the Seller (net payout).",
    "given": [
      "Sale Price: 6.40 ETH",
      "Creator Royalty: 7.5% (750 bps)",
      "Marketplace Fee: 2.5% (250 bps)",
      "ETH Price: $3,200"
    ],
    "steps": [
      "Step 1: Calculate Marketplace Platform Fee: 6.40 ETH * 0.025 = 0.16 ETH ($512.00)",
      "Step 2: Calculate Creator Royalty (ERC-2981): 6.40 ETH * 0.075 = 0.48 ETH ($1,536.00)",
      "Step 3: Calculate Total Deductions: 0.16 ETH + 0.48 ETH = 0.64 ETH (10.0%)",
      "Step 4: Calculate Net Seller Payout: 6.40 ETH - 0.64 ETH = 5.76 ETH ($18,432.00)",
      "Step 5: Verify Conservation: 5.76 + 0.48 + 0.16 = 6.40 ETH"
    ],
    "answer": "Seller Net: 5.76 ETH ($18,432.00); Creator Royalty: 0.48 ETH ($1,536.00); Marketplace Fee: 0.16 ETH ($512.00)."
  },
  {
    "id": "num4",
    "title": "Problem 4: On-Chain vs IPFS Decentralized Storage Cost Analysis",
    "scenario": "A blockchain supply chain DApp (Blueprint C) attaches an official product inspection certificate PDF (size 450 KB) and 3 high-resolution quality photos (total 2.8 MB), for a combined asset payload of 3.25 MB per shipment batch.",
    "question": "Compute the estimated cost to store 3.25 MB directly in Ethereum smart contract storage (SSTORE cost: 20,000 gas per 32-byte word, at 30 Gwei and $3,000/ETH), versus storing the files on IPFS and writing only a 32-byte CID hash on-chain.",
    "given": [
      "Total Data Size: 3.25 MB = 3,407,872 bytes",
      "Word Size: 32 bytes per word",
      "SSTORE Gas Cost: 20,000 gas / 32-byte word",
      "Gas Price: 30 Gwei",
      "ETH Price: $3,000"
    ],
    "steps": [
      "Step 1: Calculate number of 32-byte words for 3.25 MB: 3,407,872 / 32 = 106,496 storage words",
      "Step 2: Total on-chain gas required: 106,496 words * 20,000 gas/word = 2,129,920,000 gas (~2.13 Billion gas)",
      "Step 3: Total ETH cost for on-chain storage: 2,129,920,000 gas * (30 * 10^-9 ETH) = 63.8976 ETH",
      "Step 4: Total USD cost on-chain: 63.8976 ETH * $3,000 = $191,692.80",
      "Step 5: IPFS Approach: Storing 3.25 MB on IPFS pinning service costs ~$0.0005/month. Writing 1 CID (32 bytes = 1 word) on-chain consumes 20,000 gas = 0.0006 ETH = $1.80"
    ],
    "answer": "On-chain cost: $191,692.80 (Economically infeasible); IPFS + on-chain CID cost: $1.80 (99.999% cost reduction)."
  },
  {
    "id": "num5",
    "title": "Problem 5: Invariant Ballot Conservation & Fuzzing Bounds",
    "scenario": "In a university student council election with 4 candidates (A, B, C, D) and 1,250 registered eligible voters, a smart contract invariant test suite runs 50,000 randomized state actions. The test records candidate votes: Candidate A receives 412 votes, Candidate B receives 385 votes, Candidate C receives 278 votes, and Candidate D receives 115 votes.",
    "question": "Evaluate the Ballot Conservation Invariant equation, compute the turnout percentage, and verify if the non-voting turnout satisfies the registered voter bound.",
    "given": [
      "Registered Voters (N): 1,250",
      "Votes A: 412",
      "Votes B: 385",
      "Votes C: 278",
      "Votes D: 115"
    ],
    "steps": [
      "Step 1: Calculate Sum of Candidate Votes: 412 + 385 + 278 + 115 = 1,190 votes",
      "Step 2: Evaluate Invariant Equation: Total Votes Recorded = \u2211 Candidate Votes_i = 1,190",
      "Step 3: Calculate Voter Turnout: (1,190 / 1,250) * 100 = 95.20%",
      "Step 4: Calculate Non-Voting Accounts: 1,250 - 1,190 = 60 accounts (4.80%)",
      "Step 5: Invariant Check: 1,190 <= 1,250 (Satisfied); Total Votes == 1,190 (Conservation Verified)"
    ],
    "answer": "Ballot Conservation Invariant Verified: Total Votes = 1,190; Turnout: 95.20%; Uncast Ballots: 60 (All invariant conditions hold)."
  }
];

export default function BlockchainFinalCapstone() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Workbench 1 State: VoteChain Lifecycle
  const [voteElectionState, setVoteElectionState] = useState("DRAFT");
  const [voteCandidates, setVoteCandidates] = useState([
    { id: 1, name: "Sarah Connor (Candidate A)", cid: "bafybeig...sarah", votes: 0 },
    { id: 2, name: "John Doe (Candidate B)", cid: "bafybeic...john", votes: 0 },
    { id: 3, name: "Elena Rostova (Candidate C)", cid: "bafybeih...elena", votes: 0 }
  ]);
  const [voteRegisteredVoters] = useState([
    "0x71C...aB41",
    "0x98E...cD22",
    "0x3F2...eF99",
    "0x1A4...bC88",
    "0x5D6...aA12"
  ]);
  const [activeVoterAddress, setActiveVoterAddress] = useState("0x71C...aB41");
  const [votedAddresses, setVotedAddresses] = useState({});
  const [voteLogs, setVoteLogs] = useState([
    { time: "10:00:01", type: "info", msg: "ElectionCreated: VoteChain Student Council 2026 (State: DRAFT)" }
  ]);

  const addVoteLog = useCallback((msg, type = "info") => {
    const timeStr = new Date().toTimeString().split(" ")[0];
    setVoteLogs((prev) => [{ time: timeStr, msg, type }, ...prev].slice(0, 8));
  }, []);

  const hasActiveVoted = useMemo(() => !!votedAddresses[activeVoterAddress], [votedAddresses, activeVoterAddress]);

  const voteTotalBallots = useMemo(() => {
    return voteCandidates.reduce((acc, c) => acc + c.votes, 0);
  }, [voteCandidates]);

  const voteInvariantVerified = useMemo(() => {
    const sumCandidateVotes = voteCandidates.reduce((acc, c) => acc + c.votes, 0);
    return sumCandidateVotes === voteTotalBallots;
  }, [voteCandidates, voteTotalBallots]);

  const startElection = useCallback(() => {
    setVoteElectionState("ACTIVE");
    addVoteLog("StateTransition: Election opened (DRAFT -> ACTIVE). Candidate registration frozen.", "success");
  }, [addVoteLog]);

  const closeElection = useCallback(() => {
    setVoteElectionState("CLOSED");
    addVoteLog("StateTransition: Election deadline reached (ACTIVE -> CLOSED). Ballot submission stopped.", "warn");
  }, [addVoteLog]);

  const finalizeElection = useCallback(() => {
    setVoteElectionState("FINALIZED");
    addVoteLog("StateTransition: Results officially audited and verified on-chain (FINALIZED).", "info");
  }, [addVoteLog]);

  const castBallot = useCallback((candidateId) => {
    if (voteElectionState !== "ACTIVE") {
      addVoteLog("Transaction reverted: ElectionNotActive()", "error");
      return;
    }
    if (votedAddresses[activeVoterAddress]) {
      addVoteLog(`Transaction reverted: AlreadyVoted(${activeVoterAddress})`, "error");
      return;
    }

    setVotedAddresses((prev) => ({ ...prev, [activeVoterAddress]: true }));
    setVoteCandidates((prev) =>
      prev.map((c) => (c.id === candidateId ? { ...c, votes: c.votes + 1 } : c))
    );
    addVoteLog(`VoteCast: Voter ${activeVoterAddress} cast ballot for Candidate #${candidateId}`, "success");
  }, [voteElectionState, votedAddresses, activeVoterAddress, addVoteLog]);

  const resetVoteChainSim = useCallback(() => {
    setVoteElectionState("DRAFT");
    setVoteCandidates([
      { id: 1, name: "Sarah Connor (Candidate A)", cid: "bafybeig...sarah", votes: 0 },
      { id: 2, name: "John Doe (Candidate B)", cid: "bafybeic...john", votes: 0 },
      { id: 3, name: "Elena Rostova (Candidate C)", cid: "bafybeih...elena", votes: 0 }
    ]);
    setVotedAddresses({});
    setActiveVoterAddress("0x71C...aB41");
    setVoteLogs([
      { time: "10:00:01", type: "info", msg: "Election state reset to initial DRAFT parameters" }
    ]);
  }, []);

  // Workbench 2 State: DeFi Lending
  const [defiEthPrice, setDefiEthPrice] = useState(3200);
  const [defiCollateralEth, setDefiCollateralEth] = useState(5.0);
  const [defiBorrowedUsdc, setDefiBorrowedUsdc] = useState(10000);

  const defiHealthFactor = useMemo(() => {
    const collateralUsd = defiCollateralEth * defiEthPrice;
    if (defiBorrowedUsdc <= 0) return 999.0;
    return (collateralUsd * 0.80) / defiBorrowedUsdc;
  }, [defiEthPrice, defiCollateralEth, defiBorrowedUsdc]);

  // Workbench 3 State: NFT Escrow
  const [nftPriceEth, setNftPriceEth] = useState(4.0);
  const [nftRoyaltyBps, setNftRoyaltyBps] = useState(750);
  const [nftMarketFeeBps, setNftMarketFeeBps] = useState(250);
  const [nftSold, setNftSold] = useState(false);

  // Workbench 4 State: Supply Chain
  const [supplyStage, setSupplyStage] = useState(0);

  const supplySteps = useMemo(() => [
    { state: "Created", role: "Origin Farm (Farmer)", cid: "bafybeig...soil-cert", desc: "Harvest logged with GPS coordinates and organic soil purity testing report." },
    { state: "Manufactured", role: "Processing Plant (Manufacturer)", cid: "bafybeic...batch-qc", desc: "Batch processed into sealed containers with ISO-9001 compliance verification." },
    { state: "InTransit", role: "Logistics Carrier (Distributor)", cid: "bafybeie...telemetry", desc: "Cold-chain GPS temperature sensors continuously log readings below 4°C." },
    { state: "Stored", role: "Distribution Hub (Warehouse)", cid: "bafybeih...inventory", desc: "Warehouse inventory reception verified via automated RFID gate barcode scanner." },
    { state: "Delivered", role: "Supermarket (Retailer)", cid: "bafybeik...shelf-log", desc: "Product displayed on retail shelf and registered for consumer point-of-sale checkout." },
    { state: "Verified", role: "End Consumer (Customer)", cid: "bafybeip...qr-scan", desc: "Customer scans QR code on packaging; verifies complete immutable cryptographic history." }
  ], []);

  // Interview Scenarios State
  const [interviewSearch, setInterviewSearch] = useState("");
  const [expandedInterviews, setExpandedInterviews] = useState({});

  const toggleInterview = useCallback((id) => {
    setExpandedInterviews((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const filteredInterviews = useMemo(() => {
    if (!interviewSearch.trim()) return INTERVIEW_QUESTIONS;
    const q = interviewSearch.toLowerCase();
    return INTERVIEW_QUESTIONS.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [interviewSearch]);

  // Quiz State
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectOption = useCallback((qId, optIdx) => {
    if (quizSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  }, [quizSubmitted]);

  const handleSubmitQuiz = useCallback(() => {
    setQuizSubmitted(true);
  }, []);

  const resetQuiz = useCallback(() => {
    setUserAnswers({});
    setQuizSubmitted(false);
  }, []);

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.answer) score++;
    });
    return score;
  }, [userAnswers]);

  // Checklist State with LocalStorage Persistence
  const [checklist, setChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m24_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [selectedChecklistCategory, setSelectedChecklistCategory] = useState("all");

  const toggleChecklistItem = useCallback((id) => {
    setChecklist((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m24_progress", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m24_progress");
    } catch {
      // ignore
    }
  }, []);

  const completedChecklistCount = useMemo(() => {
    return Object.values(checklist).filter(Boolean).length;
  }, [checklist]);

  const checklistProgress = useMemo(() => {
    if (CHECKLIST_ITEMS.length === 0) return 0;
    return Math.round((completedChecklistCount / CHECKLIST_ITEMS.length) * 100);
  }, [completedChecklistCount]);

  const checklistCategories = useMemo(() => {
    return Array.from(new Set(CHECKLIST_ITEMS.map((item) => item.category)));
  }, []);

  const filteredChecklistItems = useMemo(() => {
    if (selectedChecklistCategory === "all") return CHECKLIST_ITEMS;
    return CHECKLIST_ITEMS.filter((item) => item.category === selectedChecklistCategory);
  }, [selectedChecklistCategory]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-orange-500 selection:text-white">
      <ModuleNav track="blockchain" currentModuleId="final-capstone" />
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#e7e3da] px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/learning/blockchain"
            className="text-xs font-bold text-neutral-500 hover:text-neutral-900 transition flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Curriculum</span>
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-bold text-orange-600 font-mono">Module 24 · Capstone</span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
          <button
            onClick={() => setActiveTab("theory")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "theory"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Specification & Blueprints
          </button>
          <button
            onClick={() => setActiveTab("simulators")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "simulators"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Interactive Workbenches (4)
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 space-y-12">
        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider font-mono">
            Final Year Project · Production-Style DApp Development · Capstone
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Module 24 — Final Blockchain Capstone Project
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Synthesize all 23 previous modules into a production-grade decentralized application. Master requirements engineering, 3-tier Web3 architecture, smart contract state machines, off-chain PostgreSQL indexing, IPFS pinning, automated invariant testing, security auditing, gas optimization, CI/CD pipelines, and oral viva defense.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            
      <div className="space-y-12">
        {/* Header / Intro */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4">
            Interactive Capstone Engineering Workbenches
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-3">
            Production DApp Execution & State Machines
          </h2>
          <p className="text-neutral-600 leading-relaxed max-w-3xl">
            Test and simulate the complete decentralized state machines of all four capstone blueprints: VoteChain ballot conservation and election lifecycle, DeFi collateralization and Chainlink health factor risk modeling, NFT marketplace royalty settlement escrow, and multi-party supply chain provenance tracking.
          </p>
        </div>

        {/* WORKBENCH 1: VoteChain Full-Lifecycle Simulator */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Workbench 1 of 4 · Blueprint A</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">VoteChain Ballot Conservation & Lifecycle Simulator</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Step through election initialization, candidate registration, eligible ballot casting, duplicate vote prevention, and mathematical invariant verification.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={resetVoteChainSim}
                className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
              >
                Reset Election
              </button>
            </div>
          </div>

          {/* Election Status Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Election State</div>
              <div className="text-base font-bold text-orange-600 font-mono mt-1 uppercase">
                {voteElectionState}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Enforced by state machine</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Total Ballots Cast</div>
              <div className="text-base font-bold text-neutral-900 font-mono mt-1">
                {voteTotalBallots} / {voteRegisteredVoters.length}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">1-address-1-vote mapping</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Ballot Conservation Invariant</div>
              <div className="text-base font-bold text-emerald-600 font-mono mt-1">
                {voteInvariantVerified ? "VERIFIED (∑ Votes = Total)" : "UNVERIFIED"}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Mathematical proof check</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Active Voter Wallet</div>
              <div className="text-xs font-bold text-neutral-800 font-mono mt-1 truncate">
                {activeVoterAddress}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                {hasActiveVoted ? "Status: Already Voted" : "Status: Eligible to Vote"}
              </div>
            </div>
          </div>

          {/* Election Controls & Voting Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Candidate List */}
            <div className="md:col-span-2 space-y-3">
              <div className="text-xs font-bold text-neutral-900 uppercase font-mono tracking-wider">
                Official Candidates & Live Tallies
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {voteCandidates.map((cand) => (
                  <div
                    key={cand.id}
                    className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-orange-300 transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-neutral-900">{cand.name}</div>
                      <div className="text-[11px] text-neutral-500 font-mono">CID: {cand.cid}</div>
                      <div className="text-lg font-extrabold text-orange-600 font-mono mt-1">
                        {cand.votes} votes
                      </div>
                    </div>
                    <button
                      onClick={() => castBallot(cand.id)}
                      disabled={voteElectionState !== "ACTIVE" || hasActiveVoted}
                      className="px-3 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-200 disabled:text-neutral-400 text-white rounded-lg text-xs font-bold transition whitespace-nowrap shadow-sm"
                    >
                      Cast Ballot
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin Controls */}
            <div className="p-4 rounded-xl border border-neutral-200 bg-[#f6f4ee] space-y-3">
              <div className="text-xs font-bold text-neutral-900 uppercase font-mono tracking-wider">
                Election Administration
              </div>
              <div className="space-y-2 text-xs">
                {voteElectionState === "DRAFT" && (
                  <button
                    onClick={startElection}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition"
                  >
                    Open Election (DRAFT &rarr; ACTIVE)
                  </button>
                )}
                {voteElectionState === "ACTIVE" && (
                  <button
                    onClick={closeElection}
                    className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition"
                  >
                    Close Election (ACTIVE &rarr; CLOSED)
                  </button>
                )}
                {voteElectionState === "CLOSED" && (
                  <button
                    onClick={finalizeElection}
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition"
                  >
                    Publish Verified Results (FINALIZED)
                  </button>
                )}

                <div className="pt-2 border-t border-neutral-300">
                  <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                    Switch Active Test Voter Address:
                  </label>
                  <select
                    value={activeVoterAddress}
                    onChange={(e) => setActiveVoterAddress(e.target.value)}
                    className="w-full px-2 py-1.5 border border-neutral-300 rounded text-xs font-mono bg-white"
                  >
                    {voteRegisteredVoters.map((addr, i) => (
                      <option key={addr} value={addr}>
                        Voter #{i + 1} ({addr.slice(0, 8)}...{addr.slice(-4)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Event Log Output */}
          <div className="bg-neutral-900 text-neutral-300 rounded-xl p-4 font-mono text-xs">
            <div className="text-neutral-500 uppercase text-[10px] tracking-wider mb-2 flex items-center justify-between">
              <span>VoteChain Smart Contract Event Logs (`emit VoteCast`, `emit StateChanged`)</span>
              <button onClick={() => setVoteLogs([])} className="text-neutral-500 hover:text-neutral-300 text-[10px]">
                Clear
              </button>
            </div>
            <div className="space-y-1.5 max-h-32 overflow-y-auto">
              {voteLogs.length === 0 ? (
                <div className="text-neutral-600 italic">No events emitted yet. Execute an operation above.</div>
              ) : (
                voteLogs.map((log, idx) => (
                  <div key={idx} className="text-[11px] flex items-start gap-2">
                    <span className="text-neutral-500">{log.time}</span>
                    <span className={log.type === "error" ? "text-rose-400" : log.type === "warn" ? "text-amber-400" : "text-emerald-400"}>
                      {log.msg}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* WORKBENCH 2: DeFi Lending Risk & Health Factor Calculator */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Workbench 2 of 4 · Blueprint D</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">DeFi Lending Risk & Chainlink Health Factor Engine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Simulate real-time collateralization ratios, Chainlink oracle price fluctuations, and health factor liquidation triggers.
              </p>
            </div>
            <button
              onClick={() => {
                setDefiEthPrice(3200);
                setDefiCollateralEth(5.0);
                setDefiBorrowedUsdc(10000);
              }}
              className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
            >
              Reset Baseline
            </button>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Chainlink ETH Feed</div>
              <div className="text-lg font-bold text-neutral-900 font-mono mt-1">
                ${defiEthPrice.toLocaleString()} USD
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Aggregated price feed</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Collateral Value</div>
              <div className="text-lg font-bold text-neutral-900 font-mono mt-1">
                ${(defiCollateralEth * defiEthPrice).toLocaleString()}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">{defiCollateralEth.toFixed(2)} ETH deposited</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Borrowed Debt</div>
              <div className="text-lg font-bold text-neutral-900 font-mono mt-1">
                ${defiBorrowedUsdc.toLocaleString()} USDC
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">LTV Limit: 75% max</div>
            </div>
            <div className={`p-4 rounded-xl border transition ${
              defiHealthFactor >= 1.2
                ? "border-emerald-300 bg-emerald-50/50"
                : defiHealthFactor >= 1.0
                ? "border-amber-300 bg-amber-50/50"
                : "border-rose-400 bg-rose-50 ring-2 ring-rose-400"
            }`}>
              <div className="text-[10px] font-mono uppercase text-neutral-500">Health Factor (HF)</div>
              <div className={`text-xl font-extrabold font-mono mt-1 ${
                defiHealthFactor >= 1.2 ? "text-emerald-700" : defiHealthFactor >= 1.0 ? "text-amber-700" : "text-rose-700"
              }`}>
                {defiHealthFactor.toFixed(2)}
              </div>
              <div className="text-[11px] font-bold mt-1">
                {defiHealthFactor >= 1.2
                  ? "POSITION HEALTHY"
                  : defiHealthFactor >= 1.0
                  ? "AT-RISK / NEAR LIQUIDATION"
                  : "ELIGIBLE FOR LIQUIDATION!"}
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] mb-6">
            <div>
              <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1">
                <span>Chainlink ETH Price Ticker</span>
                <span className="font-mono text-orange-600">${defiEthPrice}</span>
              </div>
              <input
                type="range"
                min="1200"
                max="5000"
                step="50"
                value={defiEthPrice}
                onChange={(e) => setDefiEthPrice(parseFloat(e.target.value))}
                className="w-full accent-orange-600"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>$1,200 (Crash)</span>
                <span>$3,200</span>
                <span>$5,000 (Bull)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1">
                <span>Collateral Deposited</span>
                <span className="font-mono text-orange-600">{defiCollateralEth.toFixed(1)} ETH</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="15.0"
                step="0.5"
                value={defiCollateralEth}
                onChange={(e) => setDefiCollateralEth(parseFloat(e.target.value))}
                className="w-full accent-orange-600"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>1.0 ETH</span>
                <span>7.5 ETH</span>
                <span>15.0 ETH</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1">
                <span>Borrowed USDC Debt</span>
                <span className="font-mono text-orange-600">${defiBorrowedUsdc.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={defiBorrowedUsdc}
                onChange={(e) => setDefiBorrowedUsdc(parseFloat(e.target.value))}
                className="w-full accent-orange-600"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>$1,000</span>
                <span>$15,000</span>
                <span>$30,000</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#e7e3da] text-xs font-mono text-neutral-700 leading-relaxed">
            <span className="font-bold text-neutral-900">Health Factor Formula: </span>
            <code>HF = (Collateral Value &times; Liquidation Threshold) / Borrowed Value</code>
            <br />
            <code>HF = (${(defiCollateralEth * defiEthPrice).toLocaleString()} &times; 0.80) / ${defiBorrowedUsdc.toLocaleString()} = {defiHealthFactor.toFixed(3)}</code>
          </div>
        </div>

        {/* WORKBENCH 3: NFT Marketplace Escrow & Royalty Settlement */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Workbench 3 of 4 · Blueprint B</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">NFT Marketplace Escrow & ERC-2981 Royalty Engine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Simulate listing, purchasing, and automatic 3-way payment distribution: creator royalties, platform fees, and net seller payout.
              </p>
            </div>
            <button
              onClick={() => {
                setNftPriceEth(4.0);
                setNftRoyaltyBps(750);
                setNftMarketFeeBps(250);
                setNftSold(false);
              }}
              className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
            >
              Reset Listing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* NFT Card Preview */}
            <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-orange-600 font-bold mb-1">ERC-721 #0421</div>
                <div className="text-base font-bold text-neutral-900">CyberNebula Genesis #42</div>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">IPFS: bafybeig...artwork</div>
                <div className="mt-4 p-3 rounded-lg bg-neutral-900 text-neutral-200 text-xs font-mono">
                  <div>List Price: <span className="text-orange-400 font-bold">{nftPriceEth.toFixed(2)} ETH</span></div>
                  <div>Royalty: <span className="text-emerald-400">{(nftRoyaltyBps / 100).toFixed(1)}% (ERC-2981)</span></div>
                  <div>Market Fee: <span className="text-indigo-400">{(nftMarketFeeBps / 100).toFixed(1)}%</span></div>
                </div>
              </div>

              <button
                onClick={() => setNftSold(true)}
                disabled={nftSold}
                className="mt-4 w-full py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-300 text-white font-bold rounded-xl text-xs transition shadow-sm"
              >
                {nftSold ? "NFT Sold (Escrow Released)" : `Execute Buy (${nftPriceEth.toFixed(2)} ETH)`}
              </button>
            </div>

            {/* Settlement Breakdown */}
            <div className="md:col-span-2 p-5 rounded-xl border border-neutral-200 bg-white space-y-4">
              <div className="text-xs font-bold text-neutral-900 uppercase font-mono tracking-wider">
                Automated Settlement Distribution (Atomic Smart Contract Split)
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-emerald-900">1. Original Creator Royalty (ERC-2981)</span>
                    <div className="text-[11px] text-emerald-700">Sent directly to artist wallet ({nftRoyaltyBps / 100}%)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-900">{((nftPriceEth * nftRoyaltyBps) / 10000).toFixed(3)} ETH</span>
                    <div className="text-[10px] text-emerald-600">${(((nftPriceEth * nftRoyaltyBps) / 10000) * 3200).toFixed(2)}</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-indigo-900">2. Marketplace Protocol Treasury Fee</span>
                    <div className="text-[11px] text-indigo-700">Retained by marketplace smart contract ({nftMarketFeeBps / 100}%)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-indigo-900">{((nftPriceEth * nftMarketFeeBps) / 10000).toFixed(3)} ETH</span>
                    <div className="text-[10px] text-indigo-600">${(((nftPriceEth * nftMarketFeeBps) / 10000) * 3200).toFixed(2)}</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-100 border border-neutral-300 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-neutral-900">3. Net Seller Proceeds</span>
                    <div className="text-[11px] text-neutral-600">Credited to seller wallet ({100 - (nftRoyaltyBps + nftMarketFeeBps) / 100}%)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-neutral-900">{(nftPriceEth - (nftPriceEth * (nftRoyaltyBps + nftMarketFeeBps)) / 10000).toFixed(3)} ETH</span>
                    <div className="text-[10px] text-neutral-600">${((nftPriceEth - (nftPriceEth * (nftRoyaltyBps + nftMarketFeeBps)) / 10000) * 3200).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WORKBENCH 4: Supply Chain Provenance State Machine */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Workbench 4 of 4 · Blueprint C</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Supply Chain State Machine & Custody Tracker</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Follow an organic product batch through 6 custody stages with role-based cryptographic transition verification.
              </p>
            </div>
            <button
              onClick={() => setSupplyStage(0)}
              className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
            >
              Reset Batch
            </button>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-6">
            {[
              "1. Created",
              "2. Manufactured",
              "3. In-Transit",
              "4. Stored",
              "5. Delivered",
              "6. Verified"
            ].map((stepName, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-center transition ${
                  supplyStage === idx
                    ? "border-orange-500 bg-orange-50 font-bold text-orange-900 ring-2 ring-orange-300"
                    : supplyStage > idx
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : "border-neutral-200 bg-neutral-50 text-neutral-400"
                }`}
              >
                <div className="text-[10px] font-mono mb-1">State {idx}</div>
                <div className="text-xs">{stepName}</div>
              </div>
            ))}
          </div>

          {/* Active Custody Frame */}
          <div className="bg-neutral-900 text-neutral-200 rounded-xl p-5 mb-6 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3">
              <div>
                <span className="text-orange-400 font-bold uppercase text-[10px] tracking-wider">
                  Active Custodian Role:
                </span>
                <span className="text-white font-bold ml-2">{supplySteps[supplyStage].role}</span>
              </div>
              <div className="text-neutral-400 text-[11px]">
                IPFS Hash: <span className="text-emerald-400">{supplySteps[supplyStage].cid}</span>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {supplySteps[supplyStage].desc}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setSupplyStage((prev) => Math.min(5, prev + 1))}
                disabled={supplyStage === 5}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
              >
                {supplyStage === 5 ? "Lifecycle Complete (Customer Verified)" : `Transition to ${supplySteps[Math.min(5, supplyStage + 1)].state}`}
              </button>
            </div>
          </div>
        </div>
      </div>

          </div>
        ) : (
          <div className="space-y-12">
            
      {/* SECTION 1: Introduction to the Final Blockchain Capstone */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-neutral-500">Capstone Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          1. Introduction to the Final Blockchain Capstone
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">1.1 What is a Blockchain Capstone Project?</h3>
          <p>
            A blockchain capstone project is a complete, production-grade software engineering endeavor that unifies the technologies, cryptography, programming paradigms, security principles, and development methodologies mastered across all previous 23 modules of this curriculum.
          </p>
          <p>
            Having mastered blockchain foundations, digital signatures, Bitcoin UTXO economics, the Ethereum Virtual Machine, Solidity smart contracts, DeFi liquidity protocols, Chainlink oracles, NFT token standards, IPFS distributed storage, Web3 wallets, security auditing, and Solana development with Rust, you must now synthesize these disparate concepts into an integrated, production-style decentralized application (DApp).
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono">
            <strong>Core Engineering Mandate:</strong> The capstone is not merely a deployed smart contract or an attractive frontend mockup. You must demonstrate that you can: identify a real-world problem, engineer a decoupled blockchain architecture, choose an appropriate network, write secure smart contracts, design resilient database and IPFS storage tiers, build a responsive React frontend, connect Web3 wallets, test across 5 tiers (unit, integration, negative, fuzz, invariant), execute gas benchmarking, deploy to a public testnet, and defend your engineering decisions in an oral technical review.
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">1.2 From Individual Concepts to a Complete System</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Previous Course Concept</th>
                  <th className="p-3">Concrete Capstone Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Blockchain Fundamentals & Consensus</td>
                  <td className="p-3 text-neutral-600">Network selection, block finality models, and trust assumptions</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Cryptography & Public Key Infrastructure</td>
                  <td className="p-3 text-neutral-600">Digital signatures, transaction authorization, and EIP-4361 authentication</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Ethereum Virtual Machine & Solidity</td>
                  <td className="p-3 text-neutral-600">Core business logic, state machines, and access-controlled contract execution</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Smart Contract Testing & Security</td>
                  <td className="p-3 text-neutral-600">Automated unit, fuzz, invariant testing, and static analysis (Slither/Aderyn)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">DeFi & Oracles</td>
                  <td className="p-3 text-neutral-600">Collateral valuation, dynamic risk engines, and Chainlink Data Feeds</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">NFTs & IPFS Storage</td>
                  <td className="p-3 text-neutral-600">ERC-721/1155/2981 ownership standards and content-addressed metadata pinning</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Solana & Rust Alternative</td>
                  <td className="p-3 text-neutral-600">High-throughput comparative implementation and decoupled account modeling</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Production Operations & CI/CD</td>
                  <td className="p-3 text-neutral-600">GitHub Actions pipelines, testnet deployment, verification, and monitoring</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">1.3 What Does Production-Style Development Mean?</h3>
          <p>
            A classroom demonstration merely connects a browser wallet to a standalone smart contract. In contrast, a <strong>production-style Web3 application</strong> integrates a decoupled multi-tier architecture:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed">
            <pre>{`USER (Web Browser / Mobile Wallet)
  |
  v
REACT FRONTEND (Wagmi + Viem + Tailwind CSS)
  |-------------------------------------+
  |                                     |
  v (JSON-RPC)                          v (HTTP / REST / GraphQL)
BLOCKCHAIN RPC (Infura / Alchemy)     BACKEND API (Node.js / Express)
  |                                     |
  v                                     v
SMART CONTRACTS (EVM / Solidity)      POSTGRESQL DATABASE (Fast Search / Indexing)
  |                                     ^
  +---> IPFS PINNING (Metadata / Media) |
  |                                     |
  +---> BLOCKCHAIN EVENT LOGS ---------> EVENT INDEXER (WebSocket Log Listener)`}</pre>
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Key Architectural Rule:</strong> The blockchain handles authoritative state transitions, asset transfers, and access control. The backend database provides fast search, caching, aggregations, and analytics. The backend must never be treated as an authoritative bypass for on-chain permissions.
          </p>
        </div>
      </section>

      {/* SECTION 2: Capstone Project Selection */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-neutral-500">Project Selection</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          2. Capstone Project Selection: Four Major Blueprints
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            You have four distinct project options. Each blueprint solves a real-world problem and highlights different blockchain engineering domains:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600">Blueprint A (Recommended Reference)</span>
              <h4 className="font-bold text-neutral-900 text-base">Decentralized Voting System (VoteChain)</h4>
              <p className="text-xs text-neutral-600">
                A transparent election system where administrators initialize elections, register eligible voters, and participants submit ballots with duplicate-vote prevention and verifiable on-chain tallies.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">Focus: Governance, AccessControl, State Machines, Invariant Verification.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600">Blueprint B</span>
              <h4 className="font-bold text-neutral-900 text-base">NFT Marketplace (NebulaMarket)</h4>
              <p className="text-xs text-neutral-600">
                A decentralized marketplace enabling creators to mint ERC-721/1155 assets, upload metadata to IPFS, list items for sale, enforce ERC-2981 royalties, and execute escrow settlements.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">Focus: Token Standards, Escrow Contracts, Royalty Distribution, IPFS Pinning.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600">Blueprint C</span>
              <h4 className="font-bold text-neutral-900 text-base">Blockchain Supply Chain DApp (TraceChain)</h4>
              <p className="text-xs text-neutral-600">
                An enterprise provenance tracker following batches through Farm &rarr; Manufacturer &rarr; Distributor &rarr; Warehouse &rarr; Retailer &rarr; Consumer with role-based transitions and QR verification.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">Focus: Multi-party RBAC, Custody Transfers, Audit Logs, IPFS Certificates.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600">Blueprint D</span>
              <h4 className="font-bold text-neutral-900 text-base">DeFi Lending Protocol (LendSpace)</h4>
              <p className="text-xs text-neutral-600">
                An advanced financial platform where users supply collateral, borrow synthetic stablecoins, monitor real-time Health Factors via Chainlink oracles, and execute liquidations.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">Focus: Financial Engineering, Price Oracles, Reentrancy, Liquidation Risk.</div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">2.1 Comprehensive Blueprint Comparison Matrix</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-mono">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Evaluation Factor</th>
                  <th className="p-3">Project A: Voting</th>
                  <th className="p-3">Project B: NFT Market</th>
                  <th className="p-3">Project C: Supply Chain</th>
                  <th className="p-3">Project D: DeFi Lending</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Contract Complexity</td>
                  <td className="p-3 text-neutral-700">Medium</td>
                  <td className="p-3 text-neutral-700">Medium–High</td>
                  <td className="p-3 text-neutral-700">Medium</td>
                  <td className="p-3 text-rose-700 font-bold">Very High</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Solidity Expressiveness</td>
                  <td className="p-3 text-neutral-700">High</td>
                  <td className="p-3 text-neutral-700">High</td>
                  <td className="p-3 text-neutral-700">High</td>
                  <td className="p-3 text-rose-700 font-bold">Very High</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">IPFS Integration</td>
                  <td className="p-3 text-neutral-500">Optional</td>
                  <td className="p-3 text-emerald-700 font-bold">Mandatory</td>
                  <td className="p-3 text-emerald-700 font-bold">Mandatory</td>
                  <td className="p-3 text-neutral-500">Optional</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Oracle Integration</td>
                  <td className="p-3 text-neutral-500">Not required</td>
                  <td className="p-3 text-neutral-500">Optional</td>
                  <td className="p-3 text-neutral-500">Optional</td>
                  <td className="p-3 text-emerald-700 font-bold">Mandatory (Chainlink)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Financial Risk</td>
                  <td className="p-3 text-emerald-700 font-bold">Low</td>
                  <td className="p-3 text-amber-700">Medium</td>
                  <td className="p-3 text-emerald-700 font-bold">Low</td>
                  <td className="p-3 text-rose-700 font-bold">Extreme</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Testing Complexity</td>
                  <td className="p-3 text-neutral-700">Medium</td>
                  <td className="p-3 text-neutral-700">High</td>
                  <td className="p-3 text-neutral-700">Medium–High</td>
                  <td className="p-3 text-rose-700 font-bold">Extreme</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: Project Requirements and Specification */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-neutral-500">Requirements Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          3. Project Requirements & Specification (VoteChain Blueprint)
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">3.2 Problem Statement & Proposed Solution</h3>
          <p>
            <strong>Problem:</strong> Centralized digital voting platforms rely entirely on internal database tables and single-party server administrators. This creates vulnerability to undetectable database alterations, opaque ballot deletion, and lack of independent mathematical auditability.
          </p>
          <p>
            <strong>Proposed Solution:</strong> Develop <strong>VoteChain</strong>, an open decentralized election platform where elections are initialized on-chain, voter eligibility is enforced via cryptographic address allowlists, ballots produce immutable blockchain transactions, duplicate votes are rejected by the EVM runtime, and vote tallies are verified through transparent smart contract queries.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">3.3 Stakeholder Analysis</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Administrator</span>
              <p className="text-neutral-600 mt-1">Deploys contracts, assigns roles, and manages multisig timelocks.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Election Organizer</span>
              <p className="text-neutral-600 mt-1">Configures candidates, sets start/end times, and freezes registration.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Voter</span>
              <p className="text-neutral-600 mt-1">Connects wallet, verifies eligibility, and casts an immutable ballot.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Auditor & Observer</span>
              <p className="text-neutral-600 mt-1">Independently inspects smart contract events and validates totals.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">3.4 Ten Core Functional Requirements (FR-01 to FR-10)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-01 (Wallet Connection):</strong> Connect Web3 wallets (MetaMask, Rainbow) via Wagmi.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-02 (Election Creation):</strong> Authorized organizers initialize elections with metadata and timestamps.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-03 (Candidate Management):</strong> Register candidates before the election starts; enforce freeze.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-04 (Voter Allowlisting):</strong> Authorized registrar allowlists eligible voter addresses.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-05 (Vote Submission):</strong> Eligible voters submit signed transaction casting their ballot.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-06 (Double-Vote Prevention):</strong> Assert `!hasVoted[electionId][msg.sender]` on every ballot.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-07 (Election Closure):</strong> Reject any vote transactions submitted after `endTime`.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-08 (Result Calculation):</strong> Authoritative candidate totals calculated from on-chain state.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-09 (Explorer Verification):</strong> Direct links to verified transactions on Sepolia Explorer.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-10 (Audit History):</strong> Queryable log of all contract events (`VoteCast`, `ElectionClosed`).
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">3.6 Project Scope: Clearly Bounded MVP</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
              <span className="font-bold text-emerald-900 uppercase">Included in MVP</span>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Multi-wallet connection & SIWE authentication</li>
                <li>Election creation, candidate freeze, & allowlisting</li>
                <li>1-vote-per-registered-address enforcement</li>
                <li>Live results dashboard & verified transaction ledger</li>
                <li>Contract deployment & verification on Sepolia testnet</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-300 text-neutral-700">
              <span className="font-bold text-neutral-900 uppercase">Out of MVP (Future Research)</span>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>National biometric identity verification</li>
                <li>Legally certified governmental voting infrastructure</li>
                <li>Fully anonymous zero-knowledge proof ballots</li>
                <li>Complex multi-chain bridge vote aggregation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: System Architecture Design */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-neutral-500">System Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          4. System Architecture Design: Three-Tier Reference Model
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Our architecture follows a clean 3-layer separation of concerns:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">Layer 1: Presentation</span>
              <p className="text-neutral-600 mt-1">React, TypeScript, Tailwind CSS, Wagmi React Hooks, and Viem for JSON-RPC encoding.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">Layer 2: Off-Chain Indexing</span>
              <p className="text-neutral-600 mt-1">Node.js service, PostgreSQL database, WebSocket blockchain event listeners, and IPFS gateways.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">Layer 3: Blockchain</span>
              <p className="text-neutral-600 mt-1">EVM, Solidity smart contracts, OpenZeppelin AccessControl, and immutable on-chain state.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Blockchain Selection */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-neutral-500">Infrastructure Decision</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          5. Blockchain Selection Framework: EVM vs Solana
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Requirement</th>
                  <th className="p-3">EVM Network (Ethereum / Arbitrum)</th>
                  <th className="p-3">Solana</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Language</td>
                  <td className="p-3 text-neutral-700">Solidity / Yul</td>
                  <td className="p-3 text-neutral-700">Rust / C</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Execution Engine</td>
                  <td className="p-3 text-neutral-700">EVM (Single-threaded state machine)</td>
                  <td className="p-3 text-neutral-700">Sealevel (Multi-threaded parallel runtime)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Testing Framework</td>
                  <td className="p-3 text-neutral-700">Hardhat 3 / Foundry</td>
                  <td className="p-3 text-neutral-700">Anchor / LiteSVM</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Token Standards</td>
                  <td className="p-3 text-neutral-700">ERC-20, ERC-721, ERC-1155</td>
                  <td className="p-3 text-neutral-700">SPL Token, Token-2022</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Governance Ecosystem</td>
                  <td className="p-3 text-emerald-700 font-bold">Standardized OpenZeppelin Governor / Safe</td>
                  <td className="p-3 text-neutral-700">SPL Governance / Realms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Decision Rationale:</strong> We select Ethereum Sepolia Testnet for VoteChain due to the rich availability of OpenZeppelin security contracts, extensive testing suites in Hardhat and Foundry, and native integration with standard Web3 wallets.
          </p>
        </div>
      </section>

      {/* SECTION 6: Smart Contract Architecture */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-neutral-500">Contract Design</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          6. Smart Contract Architecture & State Machine
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">6.3 Election State Machine Transitions</h3>
          <p>
            To prevent administrative abuse and ensure deterministic execution, VoteChain enforces a strict 4-stage state machine:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-neutral-100 border border-neutral-300">
              <span className="font-bold text-neutral-800">1. DRAFT</span>
              <p className="text-neutral-600 mt-1">Election initialized, candidates added, registration open. No votes accepted.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300">
              <span className="font-bold text-emerald-900">2. ACTIVE</span>
              <p className="text-emerald-700 mt-1">Candidate registration frozen. Eligible allowlisted voters submit ballots.</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-300">
              <span className="font-bold text-amber-900">3. CLOSED</span>
              <p className="text-amber-700 mt-1">Deadline passed. No further votes accepted. State sealed awaiting finalization.</p>
            </div>
            <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-300">
              <span className="font-bold text-indigo-900">4. FINALIZED</span>
              <p className="text-indigo-700 mt-1">Winner declared, results published, permanent on-chain state sealed.</p>
            </div>
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Security Invariant:</strong> Invalid transitions are rejected by the contract. For example, a `Finalized` election can never re-enter `Active`, and candidates can never be appended once an election becomes `Active`.
          </p>
        </div>
      </section>

      {/* SECTION 7: Database and Off-Chain Storage Design */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-neutral-500">Off-Chain Data Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          7. Database & Off-Chain Storage Design (PostgreSQL Schemas)
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            The off-chain PostgreSQL database indexes historical contract events to serve rapid frontend queries without overloading blockchain RPC endpoints:
          </p>

          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-3">
            <div>
              <span className="text-orange-400 font-bold">TABLE users</span> (id UUID PRIMARY KEY, wallet_address VARCHAR(42) UNIQUE NOT NULL, created_at TIMESTAMP DEFAULT NOW());
            </div>
            <div>
              <span className="text-orange-400 font-bold">TABLE elections</span> (id UUID PRIMARY KEY, chain_id BIGINT NOT NULL, contract_address VARCHAR(42) NOT NULL, election_id BIGINT NOT NULL, status VARCHAR(20) NOT NULL, start_time TIMESTAMP NOT NULL, end_time TIMESTAMP NOT NULL, UNIQUE(chain_id, contract_address, election_id));
            </div>
            <div>
              <span className="text-orange-400 font-bold">TABLE candidates</span> (id UUID PRIMARY KEY, election_id UUID REFERENCES elections(id), candidate_id BIGINT NOT NULL, name VARCHAR(100) NOT NULL, metadata_cid VARCHAR(100));
            </div>
            <div>
              <span className="text-orange-400 font-bold">TABLE transactions</span> (id UUID PRIMARY KEY, transaction_hash VARCHAR(66) NOT NULL, log_index BIGINT NOT NULL, wallet_address VARCHAR(42) NOT NULL, event_type VARCHAR(50) NOT NULL, block_number BIGINT NOT NULL, UNIQUE(transaction_hash, log_index));
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Solidity Implementation */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-neutral-500">Smart Contract Implementation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          8. Solidity Implementation & Framework Tooling
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">8.4 Core Vote Validation Logic</h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`// In VoteChain.sol:
function vote(uint256 electionId, uint256 candidateId) external nonReentrant {
    Election storage election = elections[electionId];
    
    // Checks
    if (election.status != ElectionStatus.Active) revert ElectionNotActive();
    if (block.timestamp < election.startTime || block.timestamp > election.endTime) revert OutsideVotingPeriod();
    if (!isEligibleVoter[electionId][msg.sender]) revert IneligibleVoter();
    if (hasVoted[electionId][msg.sender]) revert AlreadyVoted();
    if (candidateId == 0 || candidateId > election.candidateCount) revert InvalidCandidate();

    // Effects
    hasVoted[electionId][msg.sender] = true;
    candidateVotes[electionId][candidateId] += 1;
    election.totalVotes += 1;

    // Events (Historical offloading)
    emit VoteCast(electionId, msg.sender, candidateId, block.timestamp);
}`}</pre>
          </div>
        </div>
      </section>



      {/* SECTION 9: Frontend Implementation with React */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-neutral-500">Frontend Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          9. Frontend Implementation with React, Wagmi & Viem
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            React powers the client interface, while Wagmi and Viem provide typed, reactive hooks for wallet connection and contract interactions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">1. Home Screen</span>
              <p className="text-neutral-600 mt-1">Platform overview, wallet connection, and election summary cards.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">2. Dashboard</span>
              <p className="text-neutral-600 mt-1">Active, upcoming, and completed elections with live countdowns.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">3. Voting Page</span>
              <p className="text-neutral-600 mt-1">Candidate manifesto review, eligibility check, and ballot confirmation.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">4. Results View</span>
              <p className="text-neutral-600 mt-1">Real-time candidate vote tallies, turnout percentages, and winner declaration.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">5. Admin Portal</span>
              <p className="text-neutral-600 mt-1">Election creation, candidate registration freeze, and allowlist controls.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";

export function CastBallotButton({ electionId, candidateId }) {
  const { writeContract, data: hash, isPending: isSigning } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const handleVote = () => {
    writeContract({
      address: "0xVoteChainContractAddress",
      abi: voteChainAbi,
      functionName: "vote",
      args: [BigInt(electionId), BigInt(candidateId)]
    });
  };

  return (
    <button onClick={handleVote} disabled={isSigning || isConfirming} className="btn-primary">
      {isSigning ? "Signing in Wallet..." : isConfirming ? "Confirming on Chain..." : isSuccess ? "Ballot Confirmed!" : "Cast Ballot"}
    </button>
  );
}`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 10: Wallet Integration */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-neutral-500">Authentication</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          10. Wallet Integration & Sign-In with Ethereum (SIWE)
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Connecting a wallet only reveals a public address. True authentication requires Sign-In with Ethereum (EIP-4361):
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono space-y-1">
            <div>1. Client connects wallet and requests login challenge from server.</div>
            <div>2. Server generates unique session nonce and issues an EIP-4361 standard message.</div>
            <div>3. User signs message with their wallet private key (gasless).</div>
            <div>4. Server recovers signer address via `ecrecover` and validates against the issued nonce.</div>
            <div>5. Server issues an HTTP-only JWT session cookie.</div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Contract Deployment */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-neutral-500">Deployment & DevOps</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          11. Contract Deployment & Bytecode Verification
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Deployments are managed through Hardhat Ignition modules, guaranteeing deterministic deployment parameters and automated verification on Sepolia Explorer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-1.5">
            <div><span className="text-neutral-500"># Compile contracts and generate bytecode</span></div>
            <div>npx hardhat compile</div>
            <div className="pt-2"><span className="text-neutral-500"># Deploy module to Sepolia testnet</span></div>
            <div>npx hardhat ignition deploy ignition/modules/VoteChain.ts --network sepolia --verify</div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Automated Testing */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-neutral-500">Verification & QA</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          12. Automated Testing: Five Testing Tiers & Invariants
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Unit & Integration Tests</span>
              <p className="text-neutral-600 mt-1">Tests happy paths: election creation, candidate registration, allowlisting, and voting.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Negative Security Tests</span>
              <p className="text-neutral-600 mt-1">Asserts expected reverts on duplicate votes, unauthorized calls, and expired deadlines.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Fuzz & Invariant Tests</span>
              <p className="text-neutral-600 mt-1">Randomized calls validating mathematical ballot conservation across 10,000 runs.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <div className="text-orange-400 font-bold uppercase text-[10px] tracking-wider mb-1">
              Core Ballot Conservation Invariant:
            </div>
            <pre>{`// Invariant: Total Recorded Votes must exactly equal the sum of votes across all candidates
assert(election.totalVotes == sum(candidateVotes[1..n]));

// Invariant: No voter address may cast more than 1 vote per election
assert(voterBallotsCast(voterAddress, electionId) <= 1);`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 13: Security Audit */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-neutral-500">Security & Auditing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          13. Smart Contract Security Audit & OWASP SCSVS
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Our security review aligns with the OWASP Smart Contract Security Verification Standard (SCSVS), evaluating ten vulnerability vectors:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <span className="font-bold">1. Reentrancy Vulnerability</span>
              <p className="text-[11px] mt-0.5">Defeated via Checks-Effects-Interactions (CEI) and OpenZeppelin ReentrancyGuard.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <span className="font-bold">2. Privilege Escalation / Access Flaws</span>
              <p className="text-[11px] mt-0.5">Defeated via granular OpenZeppelin AccessControl RBAC roles.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <span className="font-bold">3. Integer Overflow / Underflow</span>
              <p className="text-[11px] mt-0.5">Defeated via Solidity 0.8+ built-in checked arithmetic.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <span className="font-bold">4. Timestamp Manipulation</span>
              <p className="text-[11px] mt-0.5">15-second block drift window mitigated by coarse multi-day election schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: Gas Optimization */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-neutral-500">Performance Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          14. Gas Optimization Techniques & Benchmarking
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Seven production gas optimization techniques were implemented across the codebase:
          </p>
          <ol className="list-decimal pl-6 space-y-1.5 text-xs font-mono text-neutral-700">
            <li><strong>Storage Slot Packing:</strong> Tightly packed `uint64 startTime`, `uint64 endTime`, `uint32 candidateCount`, and `uint8 status` into a single 32-byte slot.</li>
            <li><strong>Memory Caching:</strong> Cached storage variables in local memory variables during execution to eliminate redundant SLOAD operations (saving 2,100 gas per read).</li>
            <li><strong>Calldata vs Memory:</strong> Replaced `memory` with `calldata` on external read-only array and string arguments.</li>
            <li><strong>Custom Errors:</strong> Replaced verbose `require(cond, "string")` with `revert CustomError()`, eliminating runtime string storage.</li>
            <li><strong>Event Offloading:</strong> Emitted historical logs instead of storing full voter history in contract arrays.</li>
            <li><strong>Loop Elimination:</strong> Replaced linear loops with O(1) mapping lookups.</li>
            <li><strong>Optimizer Tuning:</strong> Configured compiler `viaIR: true` with 10,000 optimization runs.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 15: IPFS Integration */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-neutral-500">Decentralized Storage</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          15. IPFS Decentralized Storage & Pinning Architecture
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Storing rich media on-chain is cost-prohibitive ($190,000+ for 3.25 MB). Files are uploaded to IPFS and pinned via Pinata, with only the content-addressed CID stored on-chain:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`{
  "name": "Sarah Connor - Presidential Candidate",
  "description": "Platform manifesto for the 2026 Governance Election",
  "image": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
  "manifesto_pdf": "ipfs://bafybeicx3mkn52q6zpt7h37y75g3e4r4p67yl2abf3oclgty55fbzdi",
  "attributes": [
    { "trait_type": "Department", "value": "Computer Science" },
    { "trait_type": "Graduation", "value": "2026" }
  ]
}`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 16: CI/CD Pipeline */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-neutral-500">DevOps & Automation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          16. CI/CD Pipeline via GitHub Actions
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Continuous Integration enforces strict automated testing before any pull request can be merged:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-1">
            <div className="text-orange-400 font-bold">.github/workflows/ci.yml:</div>
            <div>name: Blockchain CI</div>
            <div>on: [push, pull_request]</div>
            <div>jobs:</div>
            <div>&nbsp;&nbsp;build-and-test:</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;steps:</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/checkout@v4</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/setup-node@v4 with: &#123; node-version: 22 &#125;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: npm ci</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: npx hardhat compile</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: npx hardhat test</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: npm run build --prefix frontend</div>
          </div>
        </div>
      </section>



      {/* SECTION 17: Testnet Deployment */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-neutral-500">Release Management</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          17. Testnet Deployment Procedure & Verification Checklist
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Release management follows a disciplined four-stage pipeline:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Stage 1: Local EVM</span>
              <p className="text-neutral-600 mt-1">Anvil / Hardhat local node for fast iteration and initial unit test execution.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Stage 2: Public Testnet</span>
              <p className="text-neutral-600 mt-1">Deploy to Ethereum Sepolia with real development wallets and live P2P latency.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Stage 3: Integration</span>
              <p className="text-neutral-600 mt-1">Connect React frontend, backend event indexer, PostgreSQL, and IPFS gateway.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Stage 4: UAT</span>
              <p className="text-neutral-600 mt-1">Independent user testing evaluating wallet UX, network switching, and edge cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: Application Monitoring */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-neutral-500">Production Operations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          18. Application Monitoring & Incident Response Playbook
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Operating a production DApp requires continuous telemetry across three decoupled layers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">1. On-Chain Monitoring</span>
              <p className="text-neutral-600 mt-1">Tracks transaction failure rates, gas spikes, abnormal ballot volumes, and administrative events.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">2. Backend Telemetry</span>
              <p className="text-neutral-600 mt-1">Monitors API latency, event indexer sync lag, PostgreSQL connection pools, and RPC rate limits.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">3. Frontend Sentry Logs</span>
              <p className="text-neutral-600 mt-1">Captures unhandled JavaScript exceptions, wallet rejection rates, and RPC provider timeouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 19: Technical Documentation */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-neutral-500">Engineering Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          19. Technical Documentation & README Standards
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Every enterprise-grade blockchain submission must include a 19-section `README.md` covering prerequisites, local setup, test execution, contract architecture, security findings, gas reports, and deployed testnet addresses with verified Etherscan links.
          </p>
        </div>
      </section>

      {/* SECTION 20: Technical Presentation */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-neutral-500">Oral Defense</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          20. Technical Presentation & 12-Slide Defense Roadmap
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Prepare a structured 12-slide executive deck accompanied by a live on-chain demonstration:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs my-4">
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">1. Title & Team</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">2. Problem Statement</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">3. Proposed Solution</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">4. Requirements (FR/NFR)</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">5. Blockchain Selection</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">6. System Architecture</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">7. Contract Architecture</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">8. Full-Stack DApp</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">9. Security & Testing</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">10. Live Demo & Explorer</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">11. Limitations & Future</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">12. Q&A Defense</div>
          </div>
        </div>
      </section>

      {/* SECTION 21: Blueprint B — NFT Marketplace */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-neutral-500">Alternative Blueprint B</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          21. Blueprint B — NFT Marketplace Architecture & ERC-2981 Royalties
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Blueprint B implements an open marketplace for ERC-721 and ERC-1155 tokens with on-chain escrow and automated ERC-2981 royalty enforcement:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-2">
            <div><span className="text-orange-400 font-bold">ERC-2981 Royalty Interface:</span></div>
            <div>function royaltyInfo(uint256 tokenId, uint256 salePrice) external view returns (address receiver, uint256 royaltyAmount);</div>
            <div className="pt-2 text-neutral-400">
              When a buyer calls `buyItem(nftAddress, tokenId)`, the marketplace queries `royaltyInfo()`, deducts the calculated fee, and transfers it directly to the creator before releasing net proceeds to the seller and transferring the NFT from escrow to the buyer.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 22: Blueprint C — Blockchain Supply Chain */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-neutral-500">Alternative Blueprint C</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          22. Blueprint C — Blockchain Supply Chain State Machine & QR Custody
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Blueprint C tracks physical product batches across six distinct lifecycle stages:
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono">
            <code>enum ProductStatus &#123; Created, Manufactured, InTransit, Stored, Delivered, Recalled &#125;</code>
          </div>
          <p className="text-xs text-neutral-600">
            Each state transition is strictly restricted by role (e.g. only addresses possessing `DISTRIBUTOR_ROLE` can transition from `Manufactured` to `InTransit`). Inspection certificates and quality reports are pinned to IPFS, and physical packages carry QR codes encoding the product batch ID.
          </p>
        </div>
      </section>

      {/* SECTION 23: Blueprint D — DeFi Lending Platform */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-neutral-500">Alternative Blueprint D</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          23. Blueprint D — DeFi Lending Protocol, Health Factor Math & Oracles
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Blueprint D is the most mathematically demanding capstone, implementing collateralized borrowing, dynamic interest rates, and liquidation mechanics:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200">
              <span className="text-orange-400 font-bold">Loan-to-Value (LTV) Formula:</span>
              <div className="mt-2 text-sm text-white">LTV = (Borrowed Debt / Collateral Value) &times; 100</div>
              <p className="text-[11px] text-neutral-400 mt-2">Maximum initial borrowing capacity (typically 75%).</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200">
              <span className="text-emerald-400 font-bold">Health Factor (HF) Formula:</span>
              <div className="mt-2 text-sm text-white">HF = (Collateral Value &times; Liquidation Threshold) / Borrowed Debt</div>
              <p className="text-[11px] text-neutral-400 mt-2">Position is eligible for liquidation when HF &lt; 1.0.</p>
            </div>
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Chainlink Oracle Integration:</strong> The risk engine evaluates collateral valuation in real time using Chainlink AggregatorV3Interface feeds with heartbeat and round completeness checks.
          </p>
        </div>
      </section>

            
      {/* SECTION 24: Integrating the Entire Course */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-neutral-500">Curriculum Synthesis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          24. Integrating the Entire Blockchain Course: Synthesis Matrix
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            The capstone proves your ability to connect the theoretical foundations and hands-on skills acquired across all 24 modules:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Course Phase</th>
                  <th className="p-3">Modules Covered</th>
                  <th className="p-3">Concrete Integration into Final Capstone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">1. Foundations & Cryptography</td>
                  <td className="p-3">Modules 1–4</td>
                  <td className="p-3 text-neutral-600">Digital signatures, SHA-256 hashing, UTXO vs Account models, and network consensus.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">2. Ethereum & Smart Contracts</td>
                  <td className="p-3">Modules 5–8</td>
                  <td className="p-3 text-neutral-600">Solidity business logic, EVM memory/storage layout, event logging, and Hardhat/Foundry testing.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">3. Tokens, NFTs & Storage</td>
                  <td className="p-3">Modules 9–11</td>
                  <td className="p-3 text-neutral-600">ERC-20 governance tokens, ERC-721/1155 assets, ERC-2981 royalties, and IPFS content pinning.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">4. Web3, Wallets & Full-Stack</td>
                  <td className="p-3">Modules 12–15</td>
                  <td className="p-3 text-neutral-600">Wagmi + Viem React integration, EIP-4361 SIWE authentication, and PostgreSQL event indexers.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">5. DeFi, DEXs & Oracles</td>
                  <td className="p-3">Modules 16–20</td>
                  <td className="p-3 text-neutral-600">Chainlink price oracles, collateralization risk modeling, AMM math, and reentrancy defenses.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">6. Governance & Enterprise</td>
                  <td className="p-3">Modules 21–22</td>
                  <td className="p-3 text-neutral-600">DAO timelocks, multisig admin controls, and enterprise consortium custody workflows.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">7. Solana Development</td>
                  <td className="p-3">Module 23</td>
                  <td className="p-3 text-neutral-600">Comparative high-performance Rust/Anchor analysis and parallel account modeling.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 25: Recommended Final Repository Structure */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-neutral-500">Monorepo Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          25. Recommended Final Monorepo Architecture
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto max-h-[380px] overflow-y-auto">
            <pre>{`votechain/
├── contracts/                     # Solidity Smart Contracts
│   ├── ElectionManager.sol        # Lifecycle & schedule management
│   ├── VotingEngine.sol           # Ballot casting & ballot conservation
│   └── interfaces/                # Clean interface definitions
├── frontend/                      # React 18 + Vite + Tailwind CSS
│   ├── src/components/            # UI components (Wallet, ElectionCard, Results)
│   ├── src/pages/                 # Application views (Home, Dashboard, Admin)
│   └── src/hooks/                 # Wagmi custom hooks (useElection, useVoting)
├── backend/                       # Node.js Event Indexer & Database
│   ├── src/indexer/               # WebSocket log listener & reorg recovery
│   └── src/database/              # PostgreSQL schema migrations
├── test/                          # Comprehensive 5-Tier Test Suite
│   ├── unit/                      # Hardhat unit tests
│   ├── integration/               # End-to-end multi-contract flows
│   ├── security/                  # Negative security exploit tests
│   └── invariant/                 # Foundry property-based invariant fuzzing
├── scripts/                       # Deployment & Verification
│   ├── deploy.ts                  # Hardhat Ignition deployment script
│   └── verify.ts                  # Block explorer verification script
├── docs/                          # Engineering Documentation
│   ├── requirements.md            # FR-01 to FR-10 and NFR specifications
│   ├── architecture.md            # 3-layer system design diagrams
│   └── security-audit.md          # Vulnerability findings & mitigations
├── .github/workflows/ci.yml       # GitHub Actions automated test & build
└── README.md                      # Comprehensive 19-section project portfolio guide`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 26: Capstone Development Roadmap */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-neutral-500">Project Management</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          26. Twelve-Week Production Development Roadmap
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-2 sm:p-3">Week</th>
                  <th className="p-2 sm:p-3">Development Phase</th>
                  <th className="p-2 sm:p-3">Milestone Deliverables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr><td className="p-2">W1</td><td>Requirements & Scope</td><td>Problem statement, user stories, FR-01–FR-10, and MVP boundary</td></tr>
                <tr><td className="p-2">W2</td><td>System Architecture</td><td>3-tier diagrams, network selection report, and PostgreSQL schema</td></tr>
                <tr><td className="p-2">W3</td><td>Smart Contract Core</td><td>Contract interfaces, state machine enums, and storage structs</td></tr>
                <tr><td className="p-2">W4</td><td>Access Control & Logic</td><td>OpenZeppelin RBAC roles, vote validation, and event emission</td></tr>
                <tr><td className="p-2">W5</td><td>Automated Testing</td><td>Unit tests, integration scenarios, and mock environments</td></tr>
                <tr><td className="p-2">W6</td><td>Security & Invariants</td><td>Static analysis (Slither), Foundry invariant fuzzing, and CEI pattern</td></tr>
                <tr><td className="p-2">W7</td><td>React Frontend Skeleton</td><td>Component hierarchy, Tailwind UI, and election listings</td></tr>
                <tr><td className="p-2">W8</td><td>Wallet Integration</td><td>Wagmi connectors, SIWE nonce authentication, and transaction modals</td></tr>
                <tr><td className="p-2">W9</td><td>Backend & IPFS</td><td>Event indexer, PostgreSQL syncing, reorg handling, and Pinata pinning</td></tr>
                <tr><td className="p-2">W10</td><td>Testnet Deployment</td><td>Sepolia deployment via Hardhat Ignition and Etherscan source verification</td></tr>
                <tr><td className="p-2">W11</td><td>Integration & Monitoring</td><td>Full-stack UAT, Sentry telemetry, and gas benchmarking reports</td></tr>
                <tr><td className="p-2">W12</td><td>Final Defense</td><td>12-slide executive presentation, live demo script, and final repo submission</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 27: Required Capstone Deliverables */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-neutral-500">Submission Requirements</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          27. Eight Mandatory Capstone Deliverables
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">1. GitHub Monorepo</span>
              <p className="text-neutral-600 mt-1">Complete source code, CI/CD pipeline, and 19-section README.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">2. Smart Contracts</span>
              <p className="text-neutral-600 mt-1">Modular Solidity contracts, interfaces, and verified addresses.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">3. System Diagrams</span>
              <p className="text-neutral-600 mt-1">Architecture, state machine, ER diagrams, and sequence flows.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">4. Test Suite Report</span>
              <p className="text-neutral-600 mt-1">Unit, negative, fuzz, and invariant coverage reports.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">5. Security Audit</span>
              <p className="text-neutral-600 mt-1">Threat model, OWASP SCSVS review, findings, and mitigations.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">6. Deployment Docs</span>
              <p className="text-neutral-600 mt-1">Chain IDs, contract addresses, tx hashes, and verified explorer links.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">7. Live Working DApp</span>
              <p className="text-neutral-600 mt-1">Accessible frontend URL connected to public testnet.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">8. Technical Defense</span>
              <p className="text-neutral-600 mt-1">12-slide presentation and live on-chain demonstration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 28: Final Project Evaluation Rubric */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 28
          </span>
          <span className="text-xs font-mono text-neutral-500">Academic Grading</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          28. Capstone Evaluation: 100-Point Marking Rubric
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-mono">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Evaluation Dimension</th>
                  <th className="p-3">Weight</th>
                  <th className="p-3">Assessment Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr><td className="p-3 font-bold text-neutral-900">Problem Definition & Requirements</td><td className="p-3">10 pts</td><td className="p-3 text-neutral-600">Clear problem statement, stakeholder analysis, FR-01–FR-10, and bounded scope.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Blockchain & System Architecture</td><td className="p-3">10 pts</td><td className="p-3 text-neutral-600">Decoupled 3-layer architecture, network selection rationale, and on/off-chain partitioning.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Smart Contract Implementation</td><td className="p-3 font-bold text-orange-600">20 pts</td><td className="p-3 text-neutral-600">Modular design, RBAC access control, state machine guards, and gas optimization.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Frontend & Wallet Integration</td><td className="p-3">10 pts</td><td className="p-3 text-neutral-600">React + Wagmi/Viem UI, responsive dashboards, and SIWE cryptographic login.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Backend, Database & IPFS</td><td className="p-3">10 pts</td><td className="p-3 text-neutral-600">PostgreSQL indexing, WebSocket log listener, reorg handling, and IPFS pinning.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Automated Testing Suite</td><td className="p-3 font-bold text-orange-600">15 pts</td><td className="p-3 text-neutral-600">Unit, integration, negative, and property-based invariant tests with high coverage.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Security Assessment & Audit</td><td className="p-3 font-bold text-orange-600">15 pts</td><td className="p-3 text-neutral-600">Threat modeling, OWASP SCSVS review, static analysis (Slither), and CEI patterns.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Deployment & Documentation</td><td className="p-3">5 pts</td><td className="p-3 text-neutral-600">Public testnet deployment, verified explorer links, and 19-section README.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Technical Defense & Live Demo</td><td className="p-3">5 pts</td><td className="p-3 text-neutral-600">12-slide technical presentation and functioning live on-chain demonstration.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 24b: Five Numerical Calculations */}
      <section id="section-24b" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Quantitative Engineering
          </span>
          <span className="text-xs font-mono text-neutral-500">Economic & Computational Modeling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          Five Quantitative Engineering & Economic Problems
        </h2>

        <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
          {NUMERICAL_PROBLEMS.map((prob) => (
            <div key={prob.id} className="p-5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-neutral-900 text-sm sm:text-base">{prob.title}</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold uppercase">
                  Quantitative Problem
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700">{prob.scenario}</p>
              <div className="p-3 rounded-lg bg-white border border-[#e7e3da] text-xs font-mono">
                <span className="font-bold text-neutral-800">Prompt: </span>
                <span className="text-neutral-700">{prob.question}</span>
              </div>
              <div className="space-y-1 text-xs font-mono text-neutral-600">
                <div className="font-bold text-neutral-700">Given Parameters:</div>
                <ul className="list-disc pl-5 space-y-0.5">
                  {prob.given.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-neutral-900 text-neutral-200 text-xs font-mono space-y-1.5 overflow-x-auto">
                <div className="text-orange-400 font-bold uppercase text-[10px] tracking-wider mb-1">
                  Step-by-Step Mathematical Derivation:
                </div>
                {prob.steps.map((st, i) => (
                  <div key={i} className="text-neutral-300">{st}</div>
                ))}
                <div className="pt-2 border-t border-neutral-800 text-emerald-400 font-bold">
                  Final Result: {prob.answer}
                </div>
              </div>
            </div>
          ))}

          <h3 className="text-lg font-bold text-neutral-900 mt-6">Numerical Derivations Summary Table</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Problem Focus</th>
                  <th className="p-3">Governing Equation / Formula</th>
                  <th className="p-3">Computed Quantitative Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">DeFi Health Factor & Risk</td>
                  <td className="p-3">HF = (Collateral &times; LT) / Borrowed_Debt</td>
                  <td className="p-3 text-emerald-700 font-bold">Initial HF: 1.20; Liquidation at $2,666.67/ETH (16.67% drop)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Gas Optimization Savings</td>
                  <td className="p-3">Savings = Voters &times; &Delta;Gas &times; GasPrice &times; ETH_USD</td>
                  <td className="p-3 text-emerald-700 font-bold">202.5M Gas Saved = 5.67 ETH = $17,010.00 Saved</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">NFT Escrow & ERC-2981</td>
                  <td className="p-3">Split: Royalty(7.5%) + Platform(2.5%) + Seller(90%)</td>
                  <td className="p-3 text-emerald-700 font-bold">Seller: 5.76 ETH; Creator: 0.48 ETH; Platform: 0.16 ETH</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">On-Chain vs IPFS Storage</td>
                  <td className="p-3">Cost = (Bytes / 32) &times; 20,000 gas &times; Price</td>
                  <td className="p-3 text-emerald-700 font-bold">On-Chain: $191,692.80 vs IPFS: $1.80 (99.999% savings)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Ballot Conservation Invariant</td>
                  <td className="p-3">Total Votes = &sum; Candidate_Votes_i</td>
                  <td className="p-3 text-emerald-700 font-bold">Total: 1,190 votes (95.2% turnout); 60 uncast (Verified)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            
      {/* SECTION 29: Final Viva & Technical Interview */}
      <section id="section-29" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-8">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 29
          </span>
          <span className="text-xs font-mono text-neutral-500">Oral Defense & Evaluation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          29. Final Viva & Technical Interview Defense (25 Questions)
        </h2>

        {/* 25 Viva Scenarios */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-200">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Oral Defense Questions Across 5 Engineering Domains
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Every candidate must be prepared to defend architecture, security, smart contract design, and full-stack integration.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search defense questions..."
                value={interviewSearch}
                onChange={(e) => setInterviewSearch(e.target.value)}
                className="px-3 py-1.5 border border-neutral-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-64"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredInterviews.length === 0 ? (
              <div className="p-6 text-center text-neutral-500 text-xs italic">
                No viva defense questions match your search query.
              </div>
            ) : (
              filteredInterviews.map((item, idx) => {
                const isOpen = expandedInterviews[item.id];
                return (
                  <div
                    key={item.id}
                    className="border border-[#e7e3da] rounded-xl overflow-hidden transition"
                  >
                    <button
                      onClick={() => toggleInterview(item.id)}
                      className="w-full text-left p-4 bg-[#fbfaf7] hover:bg-[#f6f4ee] flex items-center justify-between gap-4 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-orange-600">
                          #{idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-neutral-800">
                          {item.question}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-200 text-neutral-700">
                          {item.category}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-400 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white border-t border-[#e7e3da] text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-line font-sans">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* 20 Multiple-Choice Examination */}
        <div className="space-y-6 pt-6 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Module 24 Capstone Examination (20 Assessment Questions)
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Comprehensive evaluation covering the entire production-style blockchain software engineering lifecycle.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-neutral-600">
                {Object.keys(userAnswers).length} / {QUIZ_QUESTIONS.length} Answered
              </span>
              {quizSubmitted && (
                <button
                  onClick={resetQuiz}
                  className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-bold transition"
                >
                  Reset Exam
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {QUIZ_QUESTIONS.map((q, qIdx) => {
              const selectedOpt = userAnswers[q.id];
              const isSubmitted = quizSubmitted;
              const isCorrect = selectedOpt === q.answer;

              return (
                <div
                  key={q.id}
                  className={`p-4 sm:p-5 rounded-xl border transition ${
                    isSubmitted
                      ? isCorrect
                        ? "border-emerald-300 bg-emerald-50/30"
                        : "border-rose-300 bg-rose-50/30"
                      : "border-[#e7e3da] bg-[#fbfaf7]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs sm:text-sm font-bold text-neutral-900">
                      {qIdx + 1}. {q.question}
                    </span>
                    {isSubmitted && (
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold shrink-0 ${
                          isCorrect
                            ? "bg-emerald-200 text-emerald-900"
                            : "bg-rose-200 text-rose-900"
                        }`}
                      >
                        {isCorrect ? "CORRECT" : "INCORRECT"}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, oIdx) => {
                      const isChosen = selectedOpt === oIdx;
                      let optClass = "border-neutral-200 bg-white hover:border-neutral-300";

                      if (isSubmitted) {
                        if (oIdx === q.answer) {
                          optClass = "border-emerald-500 bg-emerald-100/60 font-bold text-emerald-900";
                        } else if (isChosen) {
                          optClass = "border-rose-400 bg-rose-100/60 text-rose-900";
                        } else {
                          optClass = "border-neutral-200 bg-neutral-50 text-neutral-400";
                        }
                      } else if (isChosen) {
                        optClass = "border-orange-500 bg-orange-50 font-bold text-orange-900 ring-1 ring-orange-400";
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(q.id, oIdx)}
                          className={`p-3 rounded-lg border text-left text-xs transition flex items-center gap-2 ${optClass}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {isSubmitted && (
                    <div className="mt-3 p-3 rounded-lg bg-white border border-[#e7e3da] text-xs text-neutral-700">
                      <span className="font-bold text-neutral-900">Explanation: </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!quizSubmitted ? (
            <div className="pt-4 flex justify-end">
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(userAnswers).length === 0}
                className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-300 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                Submit Assessment ({Object.keys(userAnswers).length}/{QUIZ_QUESTIONS.length})
              </button>
            </div>
          ) : (
            <div className="p-5 rounded-xl bg-neutral-900 text-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase text-orange-400 tracking-wider">
                  Capstone Assessment Results
                </div>
                <div className="text-xl sm:text-2xl font-bold mt-1">
                  Score: {quizScore} / {QUIZ_QUESTIONS.length} ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  {quizScore >= 16
                    ? "Distinction! You have demonstrated comprehensive mastery across the entire 24-module blockchain curriculum."
                    : "Review the capstone architecture sections and retry the exam to achieve graduation mastery."}
                </div>
              </div>
              <button
                onClick={resetQuiz}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition whitespace-nowrap"
              >
                Retake Examination
              </button>
            </div>
          )}
        </div>
      </section>

            
      {/* SECTION 30: Advanced Research Directions */}
      <section id="section-30" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 30
          </span>
          <span className="text-xs font-mono text-neutral-500">Post-Capstone Horizons</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          30. Advanced Research Directions & Industry Horizons
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Having constructed a production-style DApp, consider these advanced technical frontiers for post-capstone research or startup incubation:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">1. Zero-Knowledge Proofs (ZKPs)</span>
              <p className="text-neutral-600 text-[11px]">Private on-chain voting via Semaphore / MACI and confidential asset transfers.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">2. Account Abstraction (ERC-4337)</span>
              <p className="text-neutral-600 text-[11px]">Smart contract wallets, social recovery, session keys, and sponsored gas paymasters.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">3. Cross-Chain Interoperability</span>
              <p className="text-neutral-600 text-[11px]">Chainlink CCIP and LayerZero for cross-chain token transfers and state bridging.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">4. Decentralized Identity (DID)</span>
              <p className="text-neutral-600 text-[11px]">Verifiable Credentials, Worldcoin iris proofs, and Gitcoin Passport Sybil resistance.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">5. MEV Protection & Fair Sequencing</span>
              <p className="text-neutral-600 text-[11px]">Private mempools (Flashbots Protect, SUAVE) and commit-reveal batch auctions.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900">6. AI on Blockchain</span>
              <p className="text-neutral-600 text-[11px]">Autonomous on-chain agent wallets, zkML verification, and decentralized inference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 31: Recommended Learning Resources */}
      <section id="section-31" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 31
          </span>
          <span className="text-xs font-mono text-neutral-500">Official Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          31. Recommended Official Learning Resources
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            These are the official authoritative documentation portals to use for enterprise Web3 development:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <a
              href="https://ethereum.org/developers/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Ethereum Developer Docs</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">EVM architecture, transactions, and consensus.</p>
            </a>

            <a
              href="https://docs.soliditylang.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Solidity Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Language grammar, assembly, and compiler optimization.</p>
            </a>

            <a
              href="https://docs.openzeppelin.com/contracts/5.x/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>OpenZeppelin 5.x Docs</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Audited AccessControl, ERC standards, and ReentrancyGuard.</p>
            </a>

            <a
              href="https://book.getfoundry.sh/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Foundry Book</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Forge testing, Cast CLI, and invariant fuzzing.</p>
            </a>

            <a
              href="https://hardhat.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Hardhat 3 Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">TypeScript test runner and Hardhat Ignition modules.</p>
            </a>

            <a
              href="https://wagmi.sh/react/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Wagmi React Docs</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Multi-wallet connector, Viem client, and TanStack query.</p>
            </a>

            <a
              href="https://docs.ipfs.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>IPFS Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Content addressing, CIDs, and pinning architectures.</p>
            </a>

            <a
              href="https://scs.owasp.org/SCSVS/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>OWASP SCSVS Standard</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Smart Contract Security Verification Standard audit checklist.</p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 32: Final Learning Outcomes & Course Graduation Celebration */}
      <section id="section-32" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Curriculum Completion
          </span>
          <span className="text-xs font-mono text-neutral-500">Module 24 of 24</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          32. Final Learning Outcomes & Official Blockchain Course Achievement
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Congratulations! By completing Module 24 and defending your final production capstone, you have demonstrated full software engineering competency across sixteen core blockchain disciplines:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs my-4">
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">1. Requirements Engineering</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">2. System Architecture</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">3. Chain Selection</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">4. Modular Solidity</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">5. Database Indexing</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">6. React 18 & Viem</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">7. SIWE Authentication</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">8. IPFS Pinning</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">9. Invariant Fuzzing</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">10. Security Auditing</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">11. Gas Optimization</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">12. CI/CD Pipelines</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">13. Testnet Release</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">14. Production Ops</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">15. Technical Docs</div>
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">16. Oral Defense</div>
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 space-y-2">
            <div className="text-orange-400 font-bold uppercase tracking-wider text-xs font-mono">
              Final Blockchain Course Achievement
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              You Have Successfully Mastered the Entire 24-Module Blockchain Engineering Curriculum!
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              You have transitioned from understanding foundational cryptographic hashes and Bitcoin transaction scripts to engineering decentralized finance protocols, zero-knowledge verifiable rollups, cross-program Rust invocations on Solana, and a complete, audited, production-grade Web3 application.
            </p>
          </div>
        </div>
      </section>

      {/* SYLLABUS CHECKLIST & PROGRESS TRACKER */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
              Syllabus Completion Tracker
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              Module 24: Complete 32-Section Checklist
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Track your progress across all 32 syllabus sections. Persisted automatically to your browser local storage.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-extrabold text-orange-600 font-mono">
                {checklistProgress}%
              </div>
              <div className="text-[10px] text-neutral-500 font-mono">
                {completedChecklistCount} of {CHECKLIST_ITEMS.length} Completed
              </div>
            </div>
            <button
              onClick={resetChecklist}
              className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-bold transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-orange-600 h-full transition-all duration-300"
            style={{ width: `${checklistProgress}%` }}
          ></div>
        </div>

        {/* Checklist Category Filter */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setSelectedChecklistCategory("all")}
            className={`px-3 py-1 rounded-full text-xs font-bold transition ${
              selectedChecklistCategory === "all"
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            All Categories
          </button>
          {checklistCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedChecklistCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                selectedChecklistCategory === cat
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Checklist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {filteredChecklistItems.map((item) => {
            const isChecked = !!checklist[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleChecklistItem(item.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                  isChecked
                    ? "border-emerald-300 bg-emerald-50/40"
                    : "border-[#e7e3da] bg-[#fbfaf7] hover:bg-[#f6f4ee]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="mt-1 w-4 h-4 text-orange-600 rounded border-neutral-300 focus:ring-orange-500 cursor-pointer"
                />
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-900">{item.title}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-neutral-200 text-neutral-700">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-snug">{item.summary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM NAVIGATION FOOTER */}
      <footer className="mt-12 pt-8 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <Link
          to="/learning/blockchain/solana-rust"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition"
        >
          <ArrowLeft className="w-4 h-4 text-orange-600" />
          <span>Previous: Module 23 — Solana Development with Rust</span>
        </Link>
        <Link
          to="/learning/blockchain"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition font-bold"
        >
          <span className="text-orange-600 font-bold">Curriculum Complete: Master Overview</span>
          <ArrowRight className="w-4 h-4 text-orange-600" />
        </Link>
      </footer>

          </div>
        )}
      </main>
    </div>
  );
}
