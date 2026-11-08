# -*- coding: utf-8 -*-
"""
Data Module for Module 24 — Final Blockchain Capstone Project
Contains:
- 32 Checklist Items
- 20 Multiple-Choice Examination Questions
- 25 Senior Viva & Technical Interview Defense Questions
- 5 Numerical Calculations & Economic Engineering Problems
"""

CHECKLIST_ITEMS = [
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
        "title": "21. Blueprint B — NFT Marketplace",
        "category": "Blueprints",
        "summary": "ERC-721/1155/2981 royalty standards, IPFS artwork pinning, listing escrow, and English auction extension."
    },
    {
        "id": "s22",
        "title": "22. Blueprint C — Blockchain Supply Chain",
        "category": "Blueprints",
        "summary": "6-stage product lifecycle state machine, role-based transitions, IPFS certificates, and QR verification."
    },
    {
        "id": "s23",
        "title": "23. Blueprint D — DeFi Lending Platform",
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
]

QUIZ_QUESTIONS = [
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
        "explanation": "Conservation of ballots dictates that the global total votes counter must exactly equal the sum of votes recorded across each candidate (Total Votes = ∑ Candidate Votes_i)."
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
]

INTERVIEW_QUESTIONS = [
    # Domain 1: Blockchain Architecture
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

    # Domain 2: Smart Contracts
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

    # Domain 3: Security
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

    # Domain 4: Frontend and Backend
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

    # Domain 5: Deployment and Testing
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
]

NUMERICAL_PROBLEMS = [
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
            "Step 2: Evaluate Invariant Equation: Total Votes Recorded = ∑ Candidate Votes_i = 1,190",
            "Step 3: Calculate Voter Turnout: (1,190 / 1,250) * 100 = 95.20%",
            "Step 4: Calculate Non-Voting Accounts: 1,250 - 1,190 = 60 accounts (4.80%)",
            "Step 5: Invariant Check: 1,190 <= 1,250 (Satisfied); Total Votes == 1,190 (Conservation Verified)"
        ],
        "answer": "Ballot Conservation Invariant Verified: Total Votes = 1,190; Turnout: 95.20%; Uncast Ballots: 60 (All invariant conditions hold)."
    }
]
