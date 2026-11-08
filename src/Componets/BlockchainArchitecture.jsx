import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Cpu,
  BookOpen,
  AlertTriangle,
  RefreshCw,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  Network,
  Share2,
  ListChecks,
  Boxes,
  FileCheck
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// Checklist items for Module 9 (26 core curriculum requirements)
const CHECKLIST_ITEMS = [
  "9.1 Master the 7-phase Smart Contract Development Lifecycle (Requirements -> Mainnet)",
  "9.2 Formulate functional requirements (FR-01 to FR-07) & build a Requirements Traceability Matrix",
  "9.3 Differentiate On-Chain state commitments from Off-Chain compute, IPFS, and indexing layers",
  "9.4 Analyze core Smart Contract Design Patterns (Factory, Registry, Escrow, Pull, CEI, State Machine)",
  "9.5 Implement the Factory Pattern (SimpleEscrow & EscrowFactory.sol) for autonomous contract creation",
  "9.6 Architect the Registry Pattern with bytes32 lookup keys and dynamic address routing",
  "9.7 Implement the 3-party Escrow Pattern (Buyer, Seller, Arbitrator) with escrow hold semantics",
  "9.8 Replace vulnerable push payments with the Pull Payment (Withdrawal) pattern to prevent DoS",
  "9.9 Implement Checks-Effects-Interactions (CEI) to eliminate reentrancy vulnerabilities without gas overhead",
  "9.10 Formulate state machine transitions with strict guard modifiers (enum EscrowState: 6 states)",
  "9.11 Architect contract composability with ERC-20 tokens, lending hooks, and secure external calls",
  "9.12 Decompose monolithic applications into a 6-contract modular system (Marketplace, Escrow, Disputes)",
  "9.13 Establish secure contract dependency management (exact compiler pinning 0.8.28 & package lockfiles)",
  "9.14 Integrate OpenZeppelin contracts (Ownable, AccessControl, ReentrancyGuard, Pausable, SafeERC20)",
  "9.15 Master Upgradeable Contract Architecture (ERC-1967 Proxies, UUPS, initializers, storage layouts)",
  "9.16 Implement a multi-stage deployment pipeline across local Anvil/Hardhat, Sepolia testnet, and mainnet",
  "9.17 Build event-driven architectures with indexed event logs and The Graph Subgraph ingestion",
  "9.18 Execute source code verification on Etherscan, Blockscout, and Sourcify via exact metadata matching",
  "9.19 Author formal Architecture Decision Records (ADR-001) with context, decisions, and consequences",
  "9.20 Perform systematic smart contract code reviews across correctness, security, architecture, and gas",
  "9.21 Practical Lab: Implement IEscrow.sol interface with custom errors and exhaustive event definitions",
  "9.21 Practical Lab: Implement Escrow.sol with CEI, pull withdrawals, and dispute escalation logic",
  "9.21 Practical Lab: Implement EscrowFactory.sol with instance registry and fee management",
  "9.21 Practical Lab: Write comprehensive Hardhat / Foundry test suite covering all 10 required test scenarios",
  "9.22 Complete Assignments 1, 2, and 3 (DApp Architecture, Escrow State Machine, Vulnerability Audit)",
  "9.23 Complete Assessment Quiz & master 15 Senior Web3 Architect interview scenarios"
];

// 10 Assessment Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Why is the Pull Payment pattern strictly preferred over direct address.transfer(amount) in Solidity?",
    options: [
      "Direct transfers consume 0 gas, which violates the EVM yellow paper execution model",
      "Direct push transfers allow malicious recipients to revert execution in their receive/fallback hook, causing a permanent Denial of Service (DoS)",
      "Solidity 0.8.x completely deprecated the address type for direct ETH balance queries",
      "Pull payments automatically execute off-chain via Chainlink automation at zero cost"
    ],
    correct: 1,
    explanation: "If a contract pushes funds to an arbitrary address via transfer or call{value}, a malicious recipient contract can deliberately revert in its receive() or fallback() function, blocking the entire calling transaction and freezing funds for all other participants. Pull payments isolate payouts into individual balances where users must withdraw their own funds independently."
  },
  {
    id: 2,
    question: "In the Checks-Effects-Interactions (CEI) pattern, why must internal state updates precede external contract calls?",
    options: [
      "To save gas by allowing the EVM to pack storage slots before memory expansion",
      "Because external calls immediately erase the caller contract's memory buffer",
      "To prevent reentrancy attacks, ensuring that if an external call re-enters the contract, the state already reflects the completed operation",
      "Because Solidity enforces a compile-time error if state variables are modified after an emit statement"
    ],
    correct: 2,
    explanation: "By updating state variables (e.g. setting balances[msg.sender] = 0 or state = EscrowState.Released) before invoking an external address.call{value: ...}(''), any malicious reentrant call back into the contract will see the updated state and will fail guards, preventing double-spend drains."
  },
  {
    id: 3,
    question: "What is the primary role of the Factory Pattern in smart contract engineering?",
    options: [
      "To compile Solidity source code directly into EVM bytecode on the blockchain at runtime",
      "To programmatically deploy standardized, isolated contract instances (e.g., individual Escrow agreements or Uniswap pools) and register their deployed addresses",
      "To bypass transaction gas limits by running contract construction inside an off-chain enclave",
      "To automatically upgrade older contract instances without requiring user transaction signatures"
    ],
    correct: 1,
    explanation: "The Factory Pattern allows a master contract to instantiate child contracts with standardized bytecode, isolated storage, and verified parameters using the `new` keyword or `create2`, while indexing created instances in an internal registry array or mapping."
  },
  {
    id: 4,
    question: "How does the Registry Pattern improve multi-contract architecture in decentralized systems?",
    options: [
      "It combines all contract code into a single 24KB monolithic bytecode binary",
      "It provides a centralized or governance-controlled directory mapping service identifiers (e.g. keccak256('ESCROW_MANAGER')) to current contract addresses, allowing modular component upgrades",
      "It eliminates the need for ABI definitions when calling external functions",
      "It encrypts on-chain storage keys so other smart contracts cannot inspect contract state"
    ],
    correct: 1,
    explanation: "A Registry contract acts as an on-chain DNS or service locator. Instead of hardcoding contract addresses into dependent contracts, systems query the registry using a constant bytes32 identifier. Upgrading a subsystem only requires updating the registry entry."
  },
  {
    id: 5,
    question: "In a 3-party Escrow agreement (Buyer, Seller, Arbitrator), when can the Arbitrator intervene?",
    options: [
      "Arbitrators can unilaterally withdraw funds to their own wallet at any point in time",
      "Arbitrators can only take action when the contract has entered the Disputed state, and can only route funds to either the Buyer (refund) or Seller (payout)",
      "Arbitrators must sign every transaction from contract creation to final delivery",
      "Arbitrators are restricted to off-chain IPFS document storage only"
    ],
    correct: 1,
    explanation: "To minimize trust and eliminate custodial risk, the escrow state machine enforces that the arbitrator address can only trigger resolution functions (`resolveToSeller()` or `resolveToBuyer()`) while the contract is strictly in `EscrowState.Disputed`. The arbitrator cannot siphon funds to themselves."
  },
  {
    id: 6,
    question: "Why should large media assets (images, PDFs, video proofs) NEVER be stored in contract storage variables?",
    options: [
      "The EVM does not support strings longer than 32 bytes in memory",
      "Storage operations in the EVM cost 20,000 gas per 32-byte slot (SSTORE), making large file storage economically prohibitive (costing thousands of dollars per MB)",
      "Ethereum nodes automatically delete strings larger than 1MB after 256 blocks",
      "Smart contracts can only store integer types; string arrays are illegal in Solidity 0.8"
    ],
    correct: 1,
    explanation: "On-chain Ethereum storage requires perpetual replication across thousands of validating nodes globally. Storing 1MB of raw data on-chain costs over 600 million gas (thousands of dollars). Best practice stores raw files on IPFS, Arweave, or S3, and stores only the 32-byte cryptographic content hash (CID) on-chain."
  },
  {
    id: 7,
    question: "In Upgradeable Proxy Architecture (ERC-1967), why must implementation contracts use 'initialize()' functions instead of standard Solidity 'constructor()'?",
    options: [
      "Constructors run in the context of the implementation contract's deployment transaction and modify its own storage, not the Proxy's storage where state actually lives",
      "The EVM disables constructor opcodes whenever delegatecall is invoked",
      "OpenZeppelin deprecates constructors in all smart contracts for gas optimization",
      "Initializers are required by EIP-20 tokens to register symbol and decimals"
    ],
    correct: 0,
    explanation: "Constructors execute once during implementation contract deployment and write to the implementation's storage. Because users interact with the Proxy via delegatecall, the Proxy needs its own storage variables initialized. The `initialize()` function (guarded by `initializer` modifier) executes in the Proxy's storage context."
  },
  {
    id: 8,
    question: "What is the primary function of indexed event parameters in Solidity (e.g. event EscrowCreated(address indexed buyer, address indexed seller, uint256 amount))?",
    options: [
      "Indexed parameters can be read directly by other smart contracts via internal function calls",
      "Up to 3 indexed parameters are stored as bloom filter topics in the transaction receipt, allowing off-chain indexers (like The Graph) to filter and query specific logs efficiently",
      "Indexed parameters reduce the transaction fee of emitting events to 0 gas",
      "Indexed parameters encrypt the logged data for privacy compliance"
    ],
    correct: 1,
    explanation: "Indexed event parameters become `topics` in the EVM log entry (up to 3 indexed topics per event). EVM logs cannot be accessed by other smart contracts on-chain, but off-chain RPC nodes and indexers can instantly filter logs matching specific buyers, sellers, or contract IDs using topic filters."
  },
  {
    id: 9,
    question: "What is an Architecture Decision Record (ADR) and why is it critical in smart contract development?",
    options: [
      "An automated GitHub Action that compiles Solidity code into bytecode",
      "A structured document that captures an architectural decision, its business context, considered alternatives, and engineering consequences for auditability and team alignment",
      "A legal contract signed with the Ethereum Foundation before deploying to mainnet",
      "A private key backup scheme used by multi-signature wallets"
    ],
    correct: 1,
    explanation: "An Architecture Decision Record (ADR) documents significant architectural decisions (e.g. Choosing UUPS vs Transparent Proxy, or Pull vs Push payments). Because smart contract bugs can lead to irreversible financial loss, ADRs establish rationale, tradeoffs, and assumptions for security auditors and future developers."
  },
  {
    id: 10,
    question: "During contract verification on block explorers (Etherscan/Sourcify), what ensures that source code matches the on-chain deployed bytecode?",
    options: [
      "The contract deployer submits their private key to Etherscan for digital signature matching",
      "The explorer compiles the submitted source code with the exact same compiler version, optimizer settings, and libraries, then matches the resulting bytecode against the runtime bytecode on the blockchain",
      "Etherscan automatically decompiles all on-chain bytecodes into Solidity using AI",
      "Contract verification only checks that the ABI format is valid JSON"
    ],
    correct: 1,
    explanation: "Verification recompiles the provided Solidity code using the exact compiler version, EVM target, and optimizer runs specified by the developer. If the resulting runtime bytecode is an exact bit-for-bit match with the bytecode residing at the contract address, the explorer marks the contract as verified."
  }
];

// 15 Senior Web3 Architect Interview Scenarios with Comprehensive Answers
const INTERVIEW_QUESTIONS = [
  {
    id: 1,
    question: "How would you architect a decentralized multi-tier escrow system supporting partial deliveries and multi-party disputes?",
    answer: "A production multi-tier escrow system decomposes into: (1) `EscrowFactory`: Spawns lightweight escrow instances using `create2` with deterministic addresses. (2) `EscrowStorage`: Holds state machine status, milestone structs (`uint256 amount`, `uint256 deliveryDeadline`, `bool approved`, `string evidenceCID`), and role addresses (Buyer, Seller, Platform Arbitrator, Expert Witness). (3) Milestone State Machine: Allows incremental funding and payouts per milestone rather than all-or-nothing hold. (4) Multi-Party Dispute Module: When dispute is raised on milestone K, an arbitration board (3 appointed adjudicators or a Schelling-point consensus protocol like Kleros) reviews IPFS evidence. (5) Payout Engine: Utilizes OpenZeppelin's `PullPayment` pattern where approved milestone balances or dispute refunds accumulate in `pendingWithdrawals[recipient]`, preventing gas griefing or malicious recipient reverts."
  },
  {
    id: 2,
    question: "Walk through the architectural tradeoffs between Minimal Proxies (EIP-1167) and Factory-deployed standalone contracts.",
    answer: "Minimal Proxies (EIP-1167 / Clones) deploy a 45-byte runtime contract that simply delegates all calls to a pre-deployed master implementation contract. Tradeoffs: (1) Deployment Gas: EIP-1167 costs ~45,000 gas to clone vs 1,500,000+ gas to deploy a standalone contract, achieving a 97% deployment cost reduction. (2) Execution Gas: EIP-1167 adds a minor runtime overhead (~2,600 gas cold / 100 gas warm) per transaction due to the `DELEGATECALL` opcode. (3) State Isolation: Each clone has completely independent storage at its own address, initialized via `initialize()`. (4) Verification: Standalone contracts require separate source verification or standard bytecode matching; EIP-1167 clones are automatically recognized and verified by Etherscan through the master implementation."
  },
  {
    id: 3,
    question: "How do you protect a multi-contract protocol against Denial of Service (DoS) caused by unbounded loops and external call reverts?",
    answer: "To eliminate DoS vulnerabilities: (1) Eliminate unbounded dynamic arrays: Never loop through open-ended user arrays (e.g. `for(uint i=0; i<investors.length; i++)`). If array size grows to hundreds of entries, transaction execution will exceed the block gas limit (30M gas), permanently bricking the contract. (2) Enforce pagination: Require off-chain callers to supply `offset` and `limit` for batch processing. (3) Replace Push Payments with Pull Payments: Never iterate over an array transferring ETH/tokens. Transferring to a malicious contract that reverts in `receive()` halts the entire loop. Instead, increment a `pendingWithdrawals[user] += share` mapping and let users withdraw individually. (4) Gas Limits on External Calls: When invoking untrusted external hooks, wrap with a fixed gas budget (`(bool s, ) = target.call{gas: 10000}('')`) or handle failures gracefully without reverting the parent state."
  },
  {
    id: 4,
    question: "Explain the difference between UUPS (Universal Upgradeable Proxy Standard - ERC-1822) and Transparent Proxy (EIP-1967). Which one would you choose and why?",
    answer: "In Transparent Proxies, the upgrade logic (`upgradeTo()`) resides inside the Proxy contract itself. The proxy intercepts all calls: if `msg.sender == admin`, calls route to proxy admin functions; if `msg.sender != admin`, calls route via `delegatecall` to implementation. This causes an extra SLOAD on every user call to check admin status. In UUPS (ERC-1822), the upgrade logic resides inside the *implementation* contract itself, guarded by `onlyOwner` or `onlyRole`. Advantages of UUPS: (1) Cheaper user transactions: No proxy admin SLOAD check on ordinary calls. (2) Cheaper proxy deployment: The proxy is a minimal delegator (~60,000 gas vs ~500,000 gas for Transparent). (3) Upgrade logic can be permanently removed: An implementation can omit `upgradeTo()`, immutably locking the contract forever. We recommend UUPS for modern protocols, with strict unit tests verifying that all implementation versions inherit `UUPSUpgradeable` so upgrade capability is never accidentally severed."
  },
  {
    id: 5,
    question: "How would you architect an Event-Driven Subgraph indexing pipeline for a high-frequency decentralized marketplace?",
    answer: "An optimized Subgraph indexing pipeline comprises: (1) Compact On-Chain Events: Emit only essential indexing keys as `indexed` topics (e.g. `event OrderPlaced(bytes32 indexed orderId, address indexed maker, address indexed tokenIn, uint256 amountIn, uint256 minAmountOut)`). Store secondary metadata (item descriptions, images) on IPFS and emit only the 32-byte CID. (2) Schema Design: Define entities in GraphQL (`Order`, `Account`, `Trade`, `TokenVolume`) with `@entity` and relationship directives (`@derivedFrom`). (3) Mapping Handlers: Write deterministic AssemblyScript handlers that process `OrderPlaced`, `OrderFilled`, and `OrderCancelled` events. Update account balances, cumulative volume metrics, and high-water trade prices. (4) Reorganization Resilience: The Graph automatically handles chain reorgs up to finality by rewinding entity state based on block hash history. (5) Frontend Integration: React Apollo Client queries the Subgraph endpoint with WebSocket subscriptions for real-time live UI orderbook updates."
  },
  {
    id: 6,
    question: "What storage collision risks occur in upgradeable contracts, and how does ERC-7201 (Namespaced Storage Layout) solve them?",
    answer: "In proxy contracts, implementation contracts share the proxy's storage space starting at slot 0. If Implementation V2 introduces a new state variable before existing variables, or changes the inheritance order of base contracts, storage slots shift, corrupting existing user balances and ownership pointers. Historically, developers used 'storage gaps' (`uint256[50] __gap;`). ERC-7201 (Namespaced Storage Layout, adopted in Solidity 0.8.20+) solves this systematically by mapping contract state into isolated struct pointers at pseudorandom hash locations: `bytes32 private constant STORAGE_LOCATION = keccak256(abi.encode(uint256(keccak256('myprotocol.storage.v1')) - 1)) & ~bytes32(uint256(0xff));`. Using assembly `sstore` to this deterministic namespace ensures variables never collide, regardless of inheritance hierarchy changes."
  },
  {
    id: 7,
    question: "How do you handle cross-contract reentrancy in a multi-contract ecosystem where Contract A calls Contract B which calls Contract C?",
    answer: "Standard OpenZeppelin `ReentrancyGuard` uses a contract-local storage slot (`_status = _ENTERED`). However, this only protects functions inside the same contract. Cross-contract reentrancy occurs when Contract A calls Contract B, and B re-enters Contract C, which shares state or trust assumptions with A. Defenses: (1) Shared Global Reentrancy Guard: Have interacting contracts share a common transient storage or registry lock (e.g., using EIP-1153 transient storage `TSTORE`/`TLOAD` for cheap protocol-wide mutex). (2) Enforce strict Checks-Effects-Interactions protocol-wide: Every contract must write its own internal state updates and debit balances BEFORE making external calls to sibling contracts. (3) Read-Only Reentrancy Protection: For view functions (e.g. price query `getVirtualPrice()`), check if the underlying vault is currently in an unlocked reentrancy state and revert if called during a state transition."
  },
  {
    id: 8,
    question: "How do you architect an on-chain dispute resolution mechanism that prevents bribing and malicious arbitrator collusion?",
    answer: "Techniques include: (1) Stake-Weighted Arbitrator Bonding: Arbitrators must lock collateral in a staking pool. If an audit reveals malicious rulings, governance slashes the stake. (2) Commit-Reveal Voting: Arbitrators submit `keccak256(salt, vote)` during the voting phase, preventing voters from copying or being front-run by bribes until all votes are committed. (3) Schelling-Point Incentive Alignment: Model arbitration where judges are rewarded if their vote aligns with the majority decision (the Schelling consensus, as implemented in Kleros). (4) Multi-Round Appeals: Disputed decisions can be appealed to a larger, randomly sampled jury pool by posting an escalating appeal bond. (5) Time-Locked Execution: Arbitrator decisions enter a 48-hour timelock (`TimelockController`), allowing aggrieved users to seek injunction or governance intervention if collusion is detected."
  },
  {
    id: 9,
    question: "When designing smart contracts for Layer 2 rollups (Arbitrum, Optimism, Base), how does gas optimization differ from Ethereum Layer 1?",
    answer: "On Layer 1, EVM computation and storage execution (`SSTORE`, `SLOAD`, `KECCAK256`) dominate transaction costs. On Layer 2 rollups, computation is extremely cheap (fractions of a cent), but posting transaction *calldata* or blob data (EIP-4844) back to Ethereum Layer 1 for data availability represents 85-95% of total user cost. Architectural adaptations: (1) Calldata compression: Pack function arguments tightly, use short integers (`uint32` timestamps), and avoid passing large zero-padded arrays. (2) Replace extensive event logs: Large event topics add to L1 data availability footprint. (3) Use stateless signatures and Merkle proofs: Verify proofs in cheap L2 compute rather than storing large dynamic arrays in state."
  },
  {
    id: 10,
    question: "How do you enforce deterministic contract addresses using CREATE2, and what are the security hazards?",
    answer: "`CREATE2` computes contract addresses via `keccak256(0xff ++ deployerAddress ++ salt ++ keccak256(initCode))[12:]`. Benefits: Allows deploying child contracts at predictable addresses known in advance, enabling users to fund escrows or deposit funds before the contract is even deployed on-chain (counterfactual deployment). Security hazards: (1) InitCode mutability: If the init code references external contracts or dynamic compiler versions, the address changes. (2) Reinitialization attack: If a contract deployed with `CREATE2` is destructible (`selfdestruct`), an attacker could destroy it and redeploy different code with identical address if the deployer can reuse the salt. Best practice: Do not use `selfdestruct` (deprecated in Cancun via EIP-6780) and include the deployer/owner address in the salt calculation."
  },
  {
    id: 11,
    question: "Why should developers use Custom Errors over require(condition, 'Long Error String') in Solidity 0.8.4+?",
    answer: "Strings in `require(condition, 'Error message')` must be stored as string literals in the deployed bytecode and serialized in memory as an ABI-encoded `Error(string)` revert payload. Each 32 bytes of string adds 200+ gas to deployment and execution. Custom errors (`error Unauthorized(address caller, address expected)`) compile to a 4-byte selector (`keccak256('Unauthorized(address,address)')[0:4]`) followed by tightly packed arguments. Custom errors save ~100-300 gas per revert check, reduce contract bytecode size by several kilobytes across large projects, and provide strongly-typed parameters that client libraries (Ethers.js / Viem) can parse into structured diagnostic exceptions."
  },
  {
    id: 12,
    question: "Explain the Role-Based Access Control (RBAC) architecture using OpenZeppelin AccessControl.sol vs Ownable.sol.",
    answer: "`Ownable.sol` provides a binary access control model: an address is either the single `owner` or not. This is insufficient for enterprise protocols where different duties require separate privilege boundaries. `AccessControl.sol` provides granular, multi-role governance: (1) Define unique role identifiers: `bytes32 public constant ARBITRATOR_ROLE = keccak256('ARBITRATOR_ROLE');` and `bytes32 public constant PAUSER_ROLE = keccak256('PAUSER_ROLE');`. (2) Assign admin roles: Each role has an admin role that controls who can grant or revoke it (`DEFAULT_ADMIN_ROLE`). (3) Principle of Least Privilege: The account permitted to pause the contract during an exploit cannot withdraw treasury funds or alter fee rates. (4) Role Timelocks: Critical role assignments should be governed by a multisig (Safe) or `TimelockController`."
  },
  {
    id: 13,
    question: "What is the difference between transient storage (EIP-1153 TSTORE/TLOAD) and standard storage (SSTORE/SLOAD)? How does it revolutionize contract architecture?",
    answer: "Introduced in the Ethereum Dencun upgrade (March 2024), EIP-1153 introduces transient storage opcodes `TSTORE` and `TLOAD`. Transient storage behaves like regular storage but is completely discarded at the end of the transaction. Key benefits: (1) Gas savings: `TSTORE` costs only 100 gas compared to 20,000 gas for cold `SSTORE` and 2,900 gas for warm `SSTORE`. (2) Gas refunds eliminated: No need to rely on unpredictable EVM storage refund mechanisms to clean up lock variables. (3) Ultra-cheap Reentrancy Guards: Mutex locks cost 100 gas to set and reset, making reentrancy protection negligible in cost. (4) Flash Accounting (Uniswap v4): Multi-hop swaps can track intermediate token debts in transient storage and settle only net token balances at the end of the transaction."
  },
  {
    id: 14,
    question: "How do you formulate a smart contract threat model and requirements traceability matrix during architectural design?",
    answer: "Threat modeling begins before writing code using frameworks like STRIDE: (1) Spoofing: Can an attacker impersonate an arbitrator or buyer? Mitigated by strict `msg.sender` validation and EIP-712 typed signatures. (2) Tampering: Can order parameters or delivery states be modified while in escrow? Mitigated by immutable state machines. (3) Repudiation: Can a party claim they never authorized release? Mitigated by cryptographic events and signature records. (4) Information Disclosure: Is sensitive buyer PII exposed on-chain? Mitigated by storing off-chain encrypted hashes. (5) Denial of Service: Can a party block execution with gas griefing? Mitigated by pull payments. (6) Elevation of Privilege: Can standard users invoke admin functions? Mitigated by AccessControl. The Requirements Traceability Matrix maps each Functional Requirement (FR-01 to FR-07) to specific Solidity functions, unit test suites, and threat mitigations, ensuring 100% specification coverage."
  },
  {
    id: 15,
    question: "What is the difference between Off-Chain Indexing (The Graph) and Direct JSON-RPC node polling? When is RPC sufficient?",
    answer: "Direct JSON-RPC calls (`eth_call`, `eth_getLogs`) query a single Ethereum execution node. While sufficient for reading a single user's current token balance or looking up a contract's public state variable, JSON-RPC fails for complex DApp queries: (1) Aggregations: Answering 'List all escrows created by user X with amount > 5 ETH sorted by timestamp' requires downloading thousands of blocks and processing them in the browser, causing high latency and crashing mobile clients. (2) Historical Graph Traversal: Direct RPC cannot query relational joins between buyers, sellers, and disputes. (3) Rate Limits: Public RPC providers (Infura, Alchemy) throttle high-volume log requests. Off-chain indexers (The Graph / Envio / Ponder) continuously consume blockchain logs, build a relational PostgreSQL or SQLite database, and expose an optimized GraphQL endpoint returning sub-50ms query responses."
  }
];

export default function BlockchainArchitecture() {
  const navigate = useNavigate();
  useSafeBack("/learning/blockchain");

  // Navigation tab state: 'theory' | 'interactive' | 'labs' | 'quiz' | 'checklist'
  const [activeTab, setActiveTab] = useState("theory");

  // LocalStorage Persistence for 26-objective Completion Checklist
  const STORAGE_KEY = "prepspaces_blockchain_m9_progress";
  const [completedItems, setCompletedItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (_err) {
      return {};
    }
  });

  const toggleChecklistItem = (idx) => {
    setCompletedItems((prev) => {
      const next = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (_err) {
        console.error("Failed to save progress", _err);
      }
      return next;
    });
  };

  const completedCount = useMemo(() => {
    return Object.values(completedItems).filter(Boolean).length;
  }, [completedItems]);

  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

  // Copy code helper
  const [copiedKey, setCopiedKey] = useState(null);
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Accordion state for 15 interview questions
  const [expandedInterviews, setExpandedInterviews] = useState({});
  const toggleInterview = (id) => {
    setExpandedInterviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedAnswers]);

  // Simulator 1: Escrow State Machine
  // States: Created(0) -> Funded(1) -> Delivered(2) -> Released(3) / Disputed(4) -> Refunded(5)
  const [escrowState, setEscrowState] = useState(0); // 0=Created, 1=Funded, 2=Delivered, 3=Released, 4=Disputed, 5=Refunded
  const [escrowDepositAmount, setEscrowDepositAmount] = useState(2.5); // ETH
  const [escrowBuyerBalance, setEscrowBuyerBalance] = useState(10.0);
  const [escrowSellerBalance, setEscrowSellerBalance] = useState(2.0);
  const [escrowContractBalance, setEscrowContractBalance] = useState(0.0);
  const [escrowLogs, setEscrowLogs] = useState([
    { id: 1, text: "Contract instantiated at 0x71C...aB3. State: Created. Awaiting buyer deposit.", type: "info" }
  ]);

  const addEscrowLog = (text, type = "info") => {
    setEscrowLogs((prev) => [
      { id: Date.now(), text: `[Block #${19842000 + prev.length}] ` + text, type },
      ...prev.slice(0, 7)
    ]);
  };

  const handleEscrowDeposit = () => {
    if (escrowState !== 0) return;
    if (escrowBuyerBalance < escrowDepositAmount) return;
    setEscrowBuyerBalance((prev) => Number((prev - escrowDepositAmount).toFixed(3)));
    setEscrowContractBalance((prev) => Number((prev + escrowDepositAmount).toFixed(3)));
    setEscrowState(1); // Funded
    addEscrowLog(`Buyer deposited ${escrowDepositAmount} ETH. State transitioned to Funded.`, "success");
  };

  const handleEscrowConfirmDelivery = () => {
    if (escrowState !== 1) return;
    setEscrowState(2); // Delivered
    addEscrowLog("Seller confirmed goods delivery. State transitioned to Delivered. Awaiting buyer inspection.", "success");
  };

  const handleEscrowRelease = () => {
    if (escrowState !== 1 && escrowState !== 2 && escrowState !== 4) return;
    setEscrowSellerBalance((prev) => Number((prev + escrowContractBalance).toFixed(3)));
    const amt = escrowContractBalance;
    setEscrowContractBalance(0);
    setEscrowState(3); // Released
    addEscrowLog(`Buyer/Arbitrator released ${amt} ETH to Seller. State transitioned to Released (Terminal).`, "success");
  };

  const handleEscrowRaiseDispute = () => {
    if (escrowState !== 1 && escrowState !== 2) return;
    setEscrowState(4); // Disputed
    addEscrowLog("Dispute raised! All withdrawals frozen. Arbitrator assigned to review evidence.", "warning");
  };

  const handleEscrowRefund = () => {
    if (escrowState !== 4) return;
    setEscrowBuyerBalance((prev) => Number((prev + escrowContractBalance).toFixed(3)));
    const amt = escrowContractBalance;
    setEscrowContractBalance(0);
    setEscrowState(5); // Refunded
    addEscrowLog(`Arbitrator resolved dispute in favor of Buyer. ${amt} ETH refunded. State transitioned to Refunded (Terminal).`, "danger");
  };

  const resetEscrowSimulator = () => {
    setEscrowState(0);
    setEscrowDepositAmount(2.5);
    setEscrowBuyerBalance(10.0);
    setEscrowSellerBalance(2.0);
    setEscrowContractBalance(0.0);
    setEscrowLogs([{ id: Date.now(), text: "Escrow reset. State: Created.", type: "info" }]);
  };

  // Simulator 2: Factory & Instance Registry
  const [deployedAgreements, setDeployedAgreements] = useState([
    {
      id: "AGR-001",
      address: "0x892a40...3a9f",
      buyer: "0xAlice...1111",
      seller: "0xBob...2222",
      arbitrator: "0xJudge...9999",
      amount: "1.50 ETH",
      status: "Funded",
      salt: "0x0001"
    },
    {
      id: "AGR-002",
      address: "0x4b7e12...89dc",
      buyer: "0xCharlie...3333",
      seller: "0xDavid...4444",
      arbitrator: "0xJudge...9999",
      amount: "4.20 ETH",
      status: "Released",
      salt: "0x0002"
    }
  ]);
  const [newAgreementBuyer, setNewAgreementBuyer] = useState("0xEva...5555");
  const [newAgreementSeller, setNewAgreementSeller] = useState("0xFrank...6666");
  const [newAgreementAmount, setNewAgreementAmount] = useState("3.00");

  const handleDeployAgreement = () => {
    const nextIdx = deployedAgreements.length + 1;
    const randomHex = Math.random().toString(16).substring(2, 8);
    const newEntry = {
      id: `AGR-00${nextIdx}`,
      address: `0x${randomHex}...${Math.random().toString(16).substring(2, 6)}`,
      buyer: newAgreementBuyer,
      seller: newAgreementSeller,
      arbitrator: "0xJudge...9999",
      amount: `${Number(newAgreementAmount).toFixed(2)} ETH`,
      status: "Created",
      salt: `0x${nextIdx.toString(16).padStart(4, "0")}`
    };
    setDeployedAgreements([newEntry, ...deployedAgreements]);
  };

  // Simulator 3: Push vs Pull Payment Gas & DoS Demo
  const [pushStatus, setPushStatus] = useState("idle"); // 'idle' | 'executing' | 'failed'
  const [_pullStatus, setPullStatus] = useState("idle"); // 'idle' | 'pending' | 'withdrawn'
  const [pullBalance, setPullBalance] = useState(0);

  const simulatePush = () => {
    setPushStatus("executing");
    setTimeout(() => {
      // Simulates calling untrusted contract with fallback that reverts
      setPushStatus("failed");
    }, 900);
  };

  const simulatePullDeposit = () => {
    setPullStatus("pending");
    setPullBalance(1.75);
  };

  const simulatePullWithdraw = () => {
    if (pullBalance <= 0) return;
    setPullStatus("withdrawn");
    setPullBalance(0);
  };

  // Simulator 4: Event-Driven Off-Chain Indexer (The Graph)
  const [indexerEvents, setIndexerEvents] = useState([
    { id: 1, event: "EscrowCreated", data: "id=0x01, buyer=0xAlice, seller=0xBob", block: 19842100 },
    { id: 2, event: "FundsDeposited", data: "id=0x01, value=2.5 ETH", block: 19842105 }
  ]);
  const [graphEntities, setGraphEntities] = useState([
    { id: "0x01", buyer: "0xAlice", seller: "0xBob", status: "FUNDED", totalVolume: "2.5 ETH", lastUpdatedBlock: 19842105 }
  ]);
  const [simulatedEmitType, setSimulatedEmitType] = useState("DeliveryConfirmed");

  const handleEmitContractEvent = () => {
    const newBlock = 19842110 + indexerEvents.length * 3;
    let dataStr = "";
    let updatedStatus = "FUNDED";
    if (simulatedEmitType === "DeliveryConfirmed") {
      dataStr = "id=0x01, confirmedBy=0xBob";
      updatedStatus = "DELIVERED";
    } else if (simulatedEmitType === "DisputeRaised") {
      dataStr = "id=0x01, claimant=0xAlice, reason='Item damaged'";
      updatedStatus = "DISPUTED";
    } else if (simulatedEmitType === "FundsReleased") {
      dataStr = "id=0x01, recipient=0xBob, amount=2.5 ETH";
      updatedStatus = "RELEASED";
    }

    const newEvt = {
      id: Date.now(),
      event: simulatedEmitType,
      data: dataStr,
      block: newBlock
    };

    setIndexerEvents([newEvt, ...indexerEvents]);
    setGraphEntities([
      {
        id: "0x01",
        buyer: "0xAlice",
        seller: "0xBob",
        status: updatedStatus,
        totalVolume: "2.5 ETH",
        lastUpdatedBlock: newBlock
      }
    ]);
  };


  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-28 sm:pb-36 overflow-x-hidden">
      {/* Top Track Navigation */}
      <ModuleNav track="blockchain" currentModuleId="contract-architecture" />

      {/* Hero Header Card */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-2">
              <Network size={14} />
              <span>Blockchain Engineering Track &bull; Module 9</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#18181b] tracking-tight">
              Smart Contract Development &amp; Architecture
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              DApp Engineering Lifecycle, Multi-Contract Systems, Design Patterns, Pull Payments, State Machines &amp; Decentralized Escrow.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Progress</span>
              <span className="text-sm font-bold text-orange-600 font-mono">{progressPercent}%</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Sections</span>
              <span className="text-sm font-bold text-stone-900 font-mono">24 / 24</span>
            </div>
          </div>
        </div>

        {/* 5-Tab Navigation Controls */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs">
          {[
            { id: "theory", label: "1. Architecture Theory (9.1–9.20)", icon: BookOpen },
            { id: "interactive", label: "2. Interactive Simulators (4 Tools)", icon: Cpu },
            { id: "labs", label: "3. Escrow Engineering Lab (9.21)", icon: Boxes },
            { id: "quiz", label: "4. Assignments & Quiz (9.22–9.23)", icon: FileCheck },
            { id: "checklist", label: "5. Objective Tracker (26 Goals)", icon: ListChecks },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

        {/* TAB 1: CURRICULUM THEORY (SECTIONS 9.1 - 9.20) */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            {/* Hero Overview Card */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-4">
                <Shield size={14} />
                <span>Advanced Core Module &bull; Software Architecture Track</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18181b] tracking-tight">
                Module 9: Smart Contract Development &amp; Architecture
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed max-w-4xl">
                This module focuses on the complete engineering lifecycle of decentralized applications (DApps), from requirements analysis and architectural design to smart contract implementation, deployment, verification, and code review.
                Learners explore how professional blockchain systems are structured using multiple contracts, reusable design patterns, event-driven architecture, off-chain services, and secure contract interactions.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#e7e3da]">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Level</span>
                  <span className="text-xs font-bold text-stone-900 mt-0.5 block">Advanced Core</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Focus</span>
                  <span className="text-xs font-bold text-stone-900 mt-0.5 block">DApp Systems &amp; Patterns</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Est. Time</span>
                  <span className="text-xs font-bold text-orange-600 mt-0.5 block font-mono">12–15 Hours</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Prerequisites</span>
                  <span className="text-xs font-bold text-stone-900 mt-0.5 block">Solidity (Mod 7 &amp; 8)</span>
                </div>
              </div>
            </div>

            {/* SECTION 9.1: SMART CONTRACT DEVELOPMENT LIFECYCLE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Section 9.1</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">Smart Contract Development Lifecycle</h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Smart contract development follows a structured lifecycle similar to traditional software engineering, but blockchain introduces additional constraints.
                Unlike conventional applications, deployed smart contracts are <strong>immutable</strong>, <strong>public</strong>, <strong>financially sensitive</strong>, and extremely difficult or costly to repair after deployment.
              </p>

              {/* Lifecycle Flowchart Box */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-200 font-mono text-xs overflow-x-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold block mb-3">
                  Production Engineering Pipeline
                </span>
                <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">{`[ 1. Requirements Analysis ] -> [ 2. Threat Modeling ] -> [ 3. Architecture Design ]
                                                                       |
+----------------------------------------------------------------------+
|
v
[ 4. Smart Contract Implementation ] -> [ 5. Automated Unit & Fuzz Testing ]
                                                                       |
+----------------------------------------------------------------------+
|
v
[ 6. Security Audit & Gas Review ] -> [ 7. Testnet Deployment & Verification ]
                                                                       |
+----------------------------------------------------------------------+
|
v
[ 8. Mainnet Deployment ] -> [ 9. Event-Driven Monitoring & Emergency Pause ]`}</pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900 mb-2">Stage 1: Requirements Analysis</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-stone-600 leading-relaxed">
                    <li>Identify business objectives and multi-party workflows.</li>
                    <li>Define explicit user roles (e.g. Buyer, Seller, Arbitrator).</li>
                    <li>Establish permission boundaries and financial settlement logic.</li>
                    <li>Formulate non-functional security and gas limits.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900 mb-2">Stage 2: Threat Modeling</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-stone-600 leading-relaxed">
                    <li>Identify unauthorized fund withdrawal and reentrancy vectors.</li>
                    <li>Analyze collusion vectors (e.g. malicious arbitrator rulings).</li>
                    <li>Mitigate Denial of Service (DoS) caused by reverting external calls.</li>
                    <li>Evaluate upgrade administrator privilege escalation risks.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900 mb-2">Stage 3: Architecture Design</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-stone-600 leading-relaxed">
                    <li>Partition logic between On-Chain contracts and Off-Chain indexers.</li>
                    <li>Decompose monolithic logic into Factory, Registry, and Escrow modules.</li>
                    <li>Establish state machine models and invariant constraints.</li>
                    <li>Author Architecture Decision Records (ADR-001).</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900 mb-2">Stage 4: Testing &amp; Verification</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-stone-600 leading-relaxed">
                    <li>Achieve 100% branch and statement test coverage with Hardhat/Foundry.</li>
                    <li>Execute invariant and fuzz testing with Echidna / Foundry.</li>
                    <li>Deploy to public testnets (Sepolia) with simulated latency.</li>
                    <li>Verify bytecode on Etherscan and Sourcify.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-3">
                <AlertTriangle size={18} className="text-amber-600 shrink-0" />
                <span>
                  <strong>Critical Principle:</strong> A successful compilation is <em>never</em> evidence that a smart contract is secure. Rigorous threat modeling, formal verification, and external audits are mandatory before mainnet capital is at risk.
                </span>
              </div>
            </section>

            {/* SECTION 9.2: REQUIREMENTS ANALYSIS FOR DApps */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Section 9.2</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">Requirements Analysis for Decentralized Applications</h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Requirements engineering establishes precise, verifiable specifications for contract behaviors. The table below illustrates the formal functional requirements (FR-01 to FR-07) and non-functional guarantees required for an enterprise escrow protocol.
              </p>

              {/* Functional Requirements Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3">Req ID</th>
                      <th className="p-3">Functional Requirement</th>
                      <th className="p-3">Actor</th>
                      <th className="p-3">Success Criteria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-mono text-[11px]">
                    <tr>
                      <td className="p-3 font-bold text-orange-600">FR-01</td>
                      <td className="p-3 text-stone-900 font-sans">Escrow Creation: Buyer instantiates agreement with valid deposit, seller, and arbitrator.</td>
                      <td className="p-3">Buyer</td>
                      <td className="p-3 text-stone-600">Contract deployed, State = Created, EscrowCreated event emitted.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-orange-600">FR-02</td>
                      <td className="p-3 text-stone-900 font-sans">Deposit Validation: Validate that deposited value strictly equals agreement amount.</td>
                      <td className="p-3">Buyer</td>
                      <td className="p-3 text-stone-600">Contract balance updated, State = Funded, FundsDeposited emitted.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-orange-600">FR-03</td>
                      <td className="p-3 text-stone-900 font-sans">Delivery Dispatch: Seller marks that physical/digital goods have been transferred.</td>
                      <td className="p-3">Seller</td>
                      <td className="p-3 text-stone-600">State = Delivered, DeliveryMarked emitted.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-orange-600">FR-04</td>
                      <td className="p-3 text-stone-900 font-sans">Receipt Confirmation: Buyer confirms inspection, authorizing fund release to seller.</td>
                      <td className="p-3">Buyer</td>
                      <td className="p-3 text-stone-600">State = Released, pendingWithdrawals[seller] credited.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-orange-600">FR-05</td>
                      <td className="p-3 text-stone-900 font-sans">Dispute Initiation: Either buyer or seller can dispute while contract is active.</td>
                      <td className="p-3">Buyer / Seller</td>
                      <td className="p-3 text-stone-600">State = Disputed, all standard release actions frozen.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-orange-600">FR-06</td>
                      <td className="p-3 text-stone-900 font-sans">Arbitration Resolution: Arbitrator evaluates evidence and routes funds to seller or buyer.</td>
                      <td className="p-3">Arbitrator</td>
                      <td className="p-3 text-stone-600">State = Released or Refunded, recipient balance credited.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-orange-600">FR-07</td>
                      <td className="p-3 text-stone-900 font-sans">Pull Withdrawal: Authorized party withdraws their credit independently via CEI.</td>
                      <td className="p-3">Recipient</td>
                      <td className="p-3 text-stone-600">Balance transferred via call, internal accounting zeroed before transfer.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Requirements Traceability Matrix */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block mb-2">
                  Requirements Traceability Matrix (RTM)
                </span>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Every business requirement must map to a specific Solidity function, permission guard, and automated test case:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="text-stone-700 border-b border-stone-200">
                      <tr>
                        <th className="p-2">Requirement</th>
                        <th className="p-2">Solidity Implementation</th>
                        <th className="p-2">Access Guard</th>
                        <th className="p-2">Automated Test Case</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200/60 text-[11px] text-stone-600">
                      <tr>
                        <td className="p-2 font-bold text-stone-900">FR-01</td>
                        <td className="p-2 text-orange-600">EscrowFactory.createEscrow()</td>
                        <td className="p-2">Public</td>
                        <td className="p-2">test_FactoryDeployInstance()</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-stone-900">FR-02</td>
                        <td className="p-2 text-orange-600">Escrow.deposit()</td>
                        <td className="p-2">onlyBuyer inState(Created)</td>
                        <td className="p-2">test_BuyerDepositValidFunds()</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-stone-900">FR-03</td>
                        <td className="p-2 text-orange-600">Escrow.markDelivered()</td>
                        <td className="p-2">onlySeller inState(Funded)</td>
                        <td className="p-2">test_SellerMarksDelivery()</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-stone-900">FR-04</td>
                        <td className="p-2 text-orange-600">Escrow.confirmReceipt()</td>
                        <td className="p-2">onlyBuyer</td>
                        <td className="p-2">test_BuyerConfirmsRelease()</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-stone-900">FR-06</td>
                        <td className="p-2 text-orange-600">Escrow.resolveDispute()</td>
                        <td className="p-2">onlyArbitrator inState(Disputed)</td>
                        <td className="p-2">test_ArbitratorResolution()</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 9.3: ON-CHAIN VS OFF-CHAIN ARCHITECTURE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Section 9.3</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">On-Chain vs. Off-Chain Architecture</h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                A critical architectural decision in DApp engineering is partitioning system responsibilities across the <strong>On-Chain</strong> trust layer and the <strong>Off-Chain</strong> auxiliary layers. Smart contract storage is extraordinarily expensive (20,000 gas per 32-byte slot), making large file storage economically impossible on-chain.
              </p>

              {/* Data Boundary Comparison Table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-200">
                  <h4 className="text-xs font-bold text-orange-950 uppercase tracking-wider mb-2">
                    On-Chain Responsibilities (Consensus Layer)
                  </h4>
                  <ul className="space-y-1.5 text-xs text-orange-900 leading-relaxed list-disc list-inside">
                    <li>Financial balances and ERC-20 / ETH custody.</li>
                    <li>Cryptographic state transitions (finite state machine).</li>
                    <li>Access control and role privilege boundaries.</li>
                    <li>Cryptographic commitments (Merkle roots, IPFS CIDs).</li>
                    <li>Event log emissions for historical auditing.</li>
                    <li>Deterministic dispute settlement rules.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                    Off-Chain Responsibilities (Auxiliary Layer)
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-700 leading-relaxed list-disc list-inside">
                    <li>Heavy user media, PDF receipts, and dispute evidence (IPFS / Arweave).</li>
                    <li>Fast relational search and aggregations (The Graph / Envio Subgraphs).</li>
                    <li>User notification dispatch (Push, XMTP, Email webhooks).</li>
                    <li>Gas price estimations and mempool transaction monitoring.</li>
                    <li>Complex non-critical analytics and reporting dashboards.</li>
                  </ul>
                </div>
              </div>

              {/* Architecture Topology Box */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-200 font-mono text-xs overflow-x-auto">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold block mb-2">
                  Full Stack DApp Component Topology
                </span>
                <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">{`+-------------------------------------------------------------+
|                 Frontend Web Application                    |
|             (React / Vite + Ethers.js / Viem)               |
+---------------+-----------------------------+---------------+
                | Read / Write Transactions   | GraphQL Queries
                v                             v
+-------------------------------+  +--------------------------+
|  Ethereum Execution Nodes     |  | The Graph Subgraph Nodes |
|  (JSON-RPC / Infura / Alchemy)|  | (Relational PostgreSQL)  |
+---------------+---------------+  +------------+-------------+
                |                               ^
                | State Logs & Events           | Ingests Blocks
                v                               |
+-----------------------------------------------+-------------+
|                  On-Chain Smart Contracts                   |
|   (EscrowFactory.sol, Escrow.sol, IPFS CID commitments)     |
+-------------------------------------------------------------+`}</pre>
              </div>
            </section>

            {/* SECTION 9.4 - 9.10: SMART CONTRACT DESIGN PATTERNS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-8">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Sections 9.4 – 9.10</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">Core Smart Contract Design Patterns</h3>
              </div>

              {/* 9.5 Factory Pattern */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">9.5</span>
                  <h4 className="text-base font-bold text-stone-900">The Factory Pattern</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  The Factory Pattern allows a master contract to instantiate child contracts dynamically, maintaining an indexed registry of deployed addresses. In an escrow protocol, the <code>EscrowFactory</code> generates isolated agreement contracts for each trade, ensuring that storage and funds are isolated.
                </p>
                <div className="p-4 rounded-2xl bg-neutral-950 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto">
                  <pre className="overflow-x-auto [scrollbar-width:thin]">{`// Factory instantiates child agreement and records address
function createEscrow(address seller, address arbitrator, uint256 amount) external payable returns (address) {
    Escrow newEscrow = (new Escrow){value: msg.value}(msg.sender, seller, arbitrator, amount);
    deployedEscrows.push(address(newEscrow));
    emit EscrowCreated(address(newEscrow), msg.sender, seller, arbitrator, amount);
    return address(newEscrow);
}`}</pre>
                </div>
              </div>

              {/* 9.6 Registry Pattern */}
              <div className="space-y-3 pt-6 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">9.6</span>
                  <h4 className="text-base font-bold text-stone-900">The Registry Pattern</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  A Registry maintains a mapping between service identifiers (e.g. <code>bytes32</code> hashes like <code>keccak256("ESCROW_CORE")</code>) and deployed contract addresses. Dependent contracts query the registry dynamically, allowing subsystems to be upgraded without modifying dependent contract code.
                </p>
                <div className="p-4 rounded-2xl bg-neutral-950 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto">
                  <pre className="overflow-x-auto [scrollbar-width:thin]">{`contract ContractRegistry is Ownable {
    mapping(bytes32 => address) private _contracts;
    event ContractRegistered(bytes32 indexed nameHash, address indexed contractAddr);

    function setContract(string calldata name, address contractAddr) external onlyOwner {
        bytes32 key = keccak256(abi.encodePacked(name));
        _contracts[key] = contractAddr;
        emit ContractRegistered(key, contractAddr);
    }

    function getContract(string calldata name) external view returns (address) {
        return _contracts[keccak256(abi.encodePacked(name))];
    }
}`}</pre>
                </div>
              </div>

              {/* 9.7 Escrow Pattern */}
              <div className="space-y-3 pt-6 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">9.7</span>
                  <h4 className="text-base font-bold text-stone-900">The Escrow Pattern</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  An escrow contract holds funds in conditional custody until contract conditions are satisfied. The 3-party architecture introduces an independent <strong>Arbitrator</strong> who possesses the authority to resolve disputes, but who is restricted from transferring funds to any address other than the Buyer or Seller.
                </p>
              </div>

              {/* 9.8 Pull Payment Pattern */}
              <div className="space-y-3 pt-6 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">9.8</span>
                  <h4 className="text-base font-bold text-stone-900">The Pull Payment (Withdrawal) Pattern</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  In the vulnerable <em>Push Payment</em> model, the contract actively sends funds via <code>address.transfer()</code> or <code>address.call()</code> during business operations. If a recipient is a malicious contract whose fallback function reverts, the entire parent transaction fails (Denial of Service). The <em>Pull Payment</em> pattern isolates payouts into an internal balance mapping, requiring recipients to withdraw funds independently.
                </p>
              </div>

              {/* 9.9 Checks-Effects-Interactions (CEI) */}
              <div className="space-y-3 pt-6 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">9.9</span>
                  <h4 className="text-base font-bold text-stone-900">Checks-Effects-Interactions (CEI) Methodology</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  The Checks-Effects-Interactions pattern is the primary defensive programming technique in Solidity:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[10px] font-mono font-bold uppercase text-orange-700 block">1. Checks</span>
                    <p className="text-xs text-stone-600 mt-1">Validate caller permissions, state machine constraints, and non-zero balances using custom errors.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[10px] font-mono font-bold uppercase text-orange-700 block">2. Effects</span>
                    <p className="text-xs text-stone-600 mt-1">Update all internal state variables (zero out balances, advance state) BEFORE any external call.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[10px] font-mono font-bold uppercase text-orange-700 block">3. Interactions</span>
                    <p className="text-xs text-stone-600 mt-1">Perform low-level external calls (<code>msg.sender.call&#123;'value: amount'&#125;("")</code>) last, preventing reentrancy.</p>
                  </div>
                </div>
              </div>

              {/* 9.10 State Machine Design */}
              <div className="space-y-3 pt-6 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">9.10</span>
                  <h4 className="text-base font-bold text-stone-900">State Machine Design with Enums and Modifiers</h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Define explicit lifecycle stages via <code>enum EscrowState &#123; Created, Funded, Delivered, Disputed, Released, Refunded &#125;</code>. Restrict functions using custom modifiers (<code>modifier inState(EscrowState required)</code>) to ensure illegal transitions revert immediately.
                </p>
              </div>
            </section>

            {/* SECTIONS 9.11 – 9.15: ADVANCED ARCHITECTURE & UPGRADES */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-8">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Sections 9.11 – 9.15</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">Multi-Contract Systems, OpenZeppelin &amp; Upgradeability</h3>
              </div>

              {/* 9.12 Multi-Contract Architecture */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-stone-900">9.12 Multi-Contract Decomposition (Enterprise Marketplace)</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-3">Contract Module</th>
                        <th className="p-3">Primary Responsibility</th>
                        <th className="p-3">Interacting Contracts</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 font-mono text-[11px]">
                      <tr>
                        <td className="p-3 font-bold text-orange-600">MarketplaceFactory</td>
                        <td className="p-3 text-stone-700 font-sans">Spawns listing and escrow instances, enforces protocol fee shares</td>
                        <td className="p-3 text-stone-500">EscrowManager, ListingManager</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600">ListingManager</td>
                        <td className="p-3 text-stone-700 font-sans">Stores item metadata, IPFS CIDs, and active seller offerings</td>
                        <td className="p-3 text-stone-500">MarketplaceFactory</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600">EscrowManager</td>
                        <td className="p-3 text-stone-700 font-sans">Locks buyer funds, tracks milestone deliveries, and releases payouts</td>
                        <td className="p-3 text-stone-500">DisputeManager, FeeManager</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600">DisputeManager</td>
                        <td className="p-3 text-stone-700 font-sans">Houses arbitrator registries, evidence records, and Schelling voting</td>
                        <td className="p-3 text-stone-500">EscrowManager</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600">FeeManager</td>
                        <td className="p-3 text-stone-700 font-sans">Calculates platform take-rates, burns tokens, distributes staking yields</td>
                        <td className="p-3 text-stone-500">EscrowManager</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 9.14 OpenZeppelin Standard Libraries */}
              <div className="space-y-3 pt-6 border-t border-stone-100">
                <h4 className="text-base font-bold text-stone-900">9.14 OpenZeppelin Contract Integration</h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Always use battle-tested OpenZeppelin primitives rather than rolling bespoke access control or math routines:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center font-bold text-stone-800">
                    AccessControl.sol
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center font-bold text-stone-800">
                    ReentrancyGuard.sol
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center font-bold text-stone-800">
                    Pausable.sol
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-center font-bold text-stone-800">
                    SafeERC20.sol
                  </div>
                </div>
              </div>

              {/* 9.15 Upgradeable Proxies */}
              <div className="space-y-3 pt-6 border-t border-stone-100">
                <h4 className="text-base font-bold text-stone-900">9.15 Upgradeable Contract Architecture (ERC-1967 &amp; UUPS)</h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  In a proxy pattern, the <strong>Proxy Contract</strong> maintains persistent state and ETH balance, delegating all execution calls via <code>DELEGATECALL</code> to the <strong>Implementation Contract</strong>. Upgrading replaces the implementation address while preserving proxy storage.
                </p>
                <div className="p-4 rounded-2xl bg-neutral-950 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto">
                  <pre className="overflow-x-auto [scrollbar-width:thin]">{`// Upgradeable contracts use initialize() instead of constructors
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract UpgradeableVault is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    uint256 public totalDeposits;

    function initialize(address initialOwner) public initializer {
        __Ownable_init(initialOwner);
        __UUPSUpgradeable_init();
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}`}</pre>
                </div>
              </div>
            </section>

            {/* SECTIONS 9.16 – 9.20: DEPLOYMENT, EVENTS, ADRs & REVIEWS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-8">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Sections 9.16 – 9.20</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mt-1">Deployment Pipeline, Event Indexing &amp; Architecture Documentation</h3>
              </div>

              {/* 9.17 Event-Driven Design & The Graph */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-stone-900">9.17 Event-Driven Application Design (The Graph)</h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Smart contracts cannot read historical logs or run aggregation queries across users. Indexed event topics (<code>indexed buyer</code>) allow off-chain indexers like The Graph to extract transaction receipts, populate relational GraphQL databases, and power responsive sub-50ms frontend queries.
                </p>
              </div>

              {/* 9.19 Architecture Decision Records (ADR) */}
              <div className="space-y-3 pt-6 border-t border-stone-100">
                <h4 className="text-base font-bold text-stone-900">9.19 Architecture Decision Record (ADR-001 Template)</h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Enterprise Web3 projects formalize critical architectural decisions using ADRs:
                </p>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs text-stone-800 space-y-2">
                  <div className="font-bold text-orange-700">ADR-001: Adoption of Pull Payment Pattern for Escrow Settlement</div>
                  <div><strong>Status:</strong> Accepted</div>
                  <div><strong>Context:</strong> Direct push transfers using <code>call&#123;value&#125;</code> expose the protocol to Denial of Service (DoS) if a recipient reverts during multi-party refunds.</div>
                  <div><strong>Decision:</strong> Replace all push transfers with an internal <code>pendingWithdrawals[account]</code> ledger and a dedicated <code>withdraw()</code> function guarded by CEI.</div>
                  <div><strong>Consequences:</strong> Recipients must send an extra transaction to withdraw funds, but the protocol becomes mathematically immune to malicious receiver reverts and reentrancy.</div>
                </div>
              </div>

              {/* 9.20 Code Review Checklist */}
              <div className="space-y-3 pt-6 border-t border-stone-100">
                <h4 className="text-base font-bold text-stone-900">9.20 Production Pre-Deployment Code Review Checklist</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                    <strong className="text-stone-900 block mb-1">1. Correctness &amp; Access Controls</strong>
                    <span className="text-stone-600">All state-modifying functions enforce <code>msg.sender</code> checks; zero-address validation exists on all constructor inputs.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                    <strong className="text-stone-900 block mb-1">2. Reentrancy Immunity</strong>
                    <span className="text-stone-600">Strict CEI order enforced on all transfers; internal state cleared before external low-level calls.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                    <strong className="text-stone-900 block mb-1">3. Gas Optimization</strong>
                    <span className="text-stone-600">Storage slots packed; custom errors used instead of string requires; dynamic array iteration bounded.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60">
                    <strong className="text-stone-900 block mb-1">4. Upgrade &amp; Storage Safety</strong>
                    <span className="text-stone-600">Initializers guarded against re-initialization; implementation contracts disable constructor; storage layouts gap-protected.</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: INTERACTIVE SIMULATORS */}
        {activeTab === "interactive" && (
          <div className="space-y-10">
            {/* Header */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-3">
                <Cpu size={14} />
                <span>Architecture Sandboxes &bull; Real-Time System Simulators</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                Interactive DApp Architecture &amp; Escrow Engineering Suite
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
                Test and inspect production smart contract design patterns in live interactive sandboxes. Explore the complete Escrow state machine lifecycle, deploy autonomous contract instances via the Factory pattern, observe how Pull Payments defeat Denial of Service (DoS) attacks, and trace event-driven indexing with The Graph.
              </p>
            </div>

            {/* SIMULATOR 1: ESCROW STATE MACHINE */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                    Simulator 1 &bull; Formal State Transitions
                  </span>
                  <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                    Decentralized Escrow State Machine Engine
                  </h3>
                </div>
                <button
                  onClick={resetEscrowSimulator}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-bold transition cursor-pointer"
                >
                  <RefreshCw size={12} />
                  <span>Reset Simulator</span>
                </button>
              </div>

              {/* State Machine Visualizer Bar */}
              <div className="mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block mb-3">
                  Current Lifecycle State (enum EscrowState)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {[
                    { state: 0, label: "0. Created", desc: "Agreement initialized" },
                    { state: 1, label: "1. Funded", desc: "Buyer deposit locked" },
                    { state: 2, label: "2. Delivered", desc: "Seller dispatched" },
                    { state: 3, label: "3. Released", desc: "Seller paid (Terminal)" },
                    { state: 4, label: "4. Disputed", desc: "Arbitrator invoked" },
                    { state: 5, label: "5. Refunded", desc: "Buyer refunded (Terminal)" },
                  ].map((s) => {
                    const isCurrent = escrowState === s.state;
                    const isTerminal = s.state === 3 || s.state === 5;
                    return (
                      <div
                        key={s.state}
                        className={`p-3 rounded-xl border transition-all text-center ${
                          isCurrent
                            ? isTerminal
                              ? "bg-emerald-50 border-emerald-500 shadow-xs ring-2 ring-emerald-500/20"
                              : s.state === 4
                              ? "bg-rose-50 border-rose-500 shadow-xs ring-2 ring-rose-500/20"
                              : "bg-orange-50 border-orange-500 shadow-xs ring-2 ring-orange-500/20"
                            : "bg-white border-stone-200 text-stone-400 opacity-60"
                        }`}
                      >
                        <div className={`text-xs font-bold ${isCurrent ? (isTerminal ? "text-emerald-700" : s.state === 4 ? "text-rose-700" : "text-orange-700") : "text-stone-500"}`}>
                          {s.label}
                        </div>
                        <div className="text-[10px] text-stone-500 mt-0.5">{s.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Balances & Roles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-1">
                    <span>Buyer (Alice)</span>
                    <span className="font-mono text-orange-600">0xAlice...1111</span>
                  </div>
                  <div className="text-xl font-black text-stone-900 font-mono">
                    {escrowBuyerBalance.toFixed(2)} ETH
                  </div>
                  <span className="text-[10px] text-stone-500">Wallet balance</span>
                </div>

                <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/50">
                  <div className="flex items-center justify-between text-xs font-bold text-orange-900 mb-1">
                    <span>Escrow Contract</span>
                    <span className="font-mono text-orange-700">0xEscrow...aB3</span>
                  </div>
                  <div className="text-xl font-black text-orange-700 font-mono">
                    {escrowContractBalance.toFixed(2)} ETH
                  </div>
                  <span className="text-[10px] text-orange-600/80">Locked under agreement</span>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-1">
                    <span>Seller (Bob)</span>
                    <span className="font-mono text-orange-600">0xBob...2222</span>
                  </div>
                  <div className="text-xl font-black text-stone-900 font-mono">
                    {escrowSellerBalance.toFixed(2)} ETH
                  </div>
                  <span className="text-[10px] text-stone-500">Wallet balance</span>
                </div>
              </div>

              {/* Action Controls */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 mb-6">
                <span className="text-xs font-bold text-stone-800 block mb-3">
                  Permitted Role Actions (Guarded by State Machine Modifiers):
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={handleEscrowDeposit}
                    disabled={escrowState !== 0}
                    className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer shadow-xs"
                  >
                    Buyer: Deposit 2.5 ETH
                  </button>

                  <button
                    onClick={handleEscrowConfirmDelivery}
                    disabled={escrowState !== 1}
                    className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer shadow-xs"
                  >
                    Seller: Confirm Delivery
                  </button>

                  <button
                    onClick={handleEscrowRelease}
                    disabled={escrowState !== 1 && escrowState !== 2 && escrowState !== 4}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer shadow-xs"
                  >
                    Buyer: Release Funds to Seller
                  </button>

                  <button
                    onClick={handleEscrowRaiseDispute}
                    disabled={escrowState !== 1 && escrowState !== 2}
                    className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer shadow-xs"
                  >
                    Buyer: Raise Formal Dispute
                  </button>

                  <button
                    onClick={handleEscrowRefund}
                    disabled={escrowState !== 4}
                    className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer shadow-xs"
                  >
                    Arbitrator: Resolve Refund to Buyer
                  </button>
                </div>
              </div>

              {/* Event & State Transition Audit Trail */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Live Contract Event &amp; State Transition Audit Log
                </span>
                <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs space-y-1.5 max-h-48 overflow-y-auto border border-neutral-800">
                  {escrowLogs.map((log) => (
                    <div
                      key={log.id}
                      className={
                        log.type === "success"
                          ? "text-emerald-400"
                          : log.type === "warning"
                          ? "text-amber-400"
                          : log.type === "danger"
                          ? "text-rose-400"
                          : "text-neutral-400"
                      }
                    >
                      {log.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: FACTORY PATTERN & REGISTRY */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-4 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Simulator 2 &bull; Factory &amp; Instance Registry
                </span>
                <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                  Autonomous Contract Deployment &amp; Address Indexing
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  The Factory Pattern allows a master contract to instantiate child agreements programmatically, recording deterministic addresses, salts, and participants in an indexed registry array.
                </p>
              </div>

              {/* Factory Deploy Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                <div>
                  <label className="text-[11px] font-bold text-stone-700 block mb-1">Buyer Address</label>
                  <input
                    type="text"
                    value={newAgreementBuyer}
                    onChange={(e) => setNewAgreementBuyer(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white font-mono text-xs text-stone-800 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-stone-700 block mb-1">Seller Address</label>
                  <input
                    type="text"
                    value={newAgreementSeller}
                    onChange={(e) => setNewAgreementSeller(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white font-mono text-xs text-stone-800 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-stone-700 block mb-1">Agreement Amount (ETH)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      step="0.25"
                      value={newAgreementAmount}
                      onChange={(e) => setNewAgreementAmount(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-stone-200 bg-white font-mono text-xs text-stone-800 focus:outline-none focus:border-orange-500"
                    />
                    <button
                      onClick={handleDeployAgreement}
                      className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shrink-0 transition cursor-pointer shadow-xs active:scale-95"
                    >
                      Deploy Child
                    </button>
                  </div>
                </div>
              </div>

              {/* Deployed Registry Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100/80 text-stone-700 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3">ID / Salt</th>
                      <th className="p-3">Contract Address</th>
                      <th className="p-3">Buyer</th>
                      <th className="p-3">Seller</th>
                      <th className="p-3">Arbitrator</th>
                      <th className="p-3">Deposit</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-mono text-[11px]">
                    {deployedAgreements.map((agr) => (
                      <tr key={agr.id} className="hover:bg-orange-50/30 transition">
                        <td className="p-3 font-bold text-stone-900">{agr.id} ({agr.salt})</td>
                        <td className="p-3 text-orange-600 font-bold">{agr.address}</td>
                        <td className="p-3 text-stone-600">{agr.buyer}</td>
                        <td className="p-3 text-stone-600">{agr.seller}</td>
                        <td className="p-3 text-stone-500">{agr.arbitrator}</td>
                        <td className="p-3 text-stone-900 font-bold">{agr.amount}</td>
                        <td className="p-3">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              agr.status === "Released"
                                ? "bg-emerald-100 text-emerald-800"
                                : agr.status === "Funded"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-stone-100 text-stone-700"
                            }`}
                          >
                            {agr.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SIMULATOR 3: PUSH VS PULL PAYMENT & REENTRANCY RESISTANCE */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-4 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Simulator 3 &bull; Security &amp; DoS Defense
                </span>
                <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                  Push vs. Pull Payment Architecture Under Adversarial Conditions
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Observe why direct push payments (calling <code>transfer()</code> in loops) fail completely when an untrusted recipient deliberately reverts, and how the Pull Payment pattern isolates risk.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vulnerable Push Side */}
                <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-rose-900">Anti-Pattern: Push Payment</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                        Vulnerable to DoS
                      </span>
                    </div>
                    <p className="text-xs text-rose-900/80 leading-relaxed mb-4">
                      The contract attempts to push ETH directly to an untrusted malicious recipient via <code>address.call&#123;'value: amount'&#125;("")</code>. The recipient's fallback function deliberately triggers <code>revert("Exploiter Revert")</code>.
                    </p>

                    <div className="p-3 bg-neutral-900 rounded-xl font-mono text-[11px] text-neutral-300 mb-4 overflow-x-auto border border-neutral-800">
                      <code>
                        // PUSH: Halts entire contract on revert<br />
                        for (uint i = 0; i &lt; recipients.length; i++) &#123;<br />
                        &nbsp;&nbsp;(bool s, ) = recipients[i].call&#123;'value: shares[i]'&#125;("");<br />
                        &nbsp;&nbsp;require(s, "Push failed"); // &lt;-- PERMANENT DOS<br />
                        &#125;
                      </code>
                    </div>
                  </div>

                  <div>
                    {pushStatus === "failed" && (
                      <div className="p-3 rounded-xl bg-rose-100/80 border border-rose-300 text-rose-900 text-xs mb-3 flex items-center gap-2">
                        <AlertTriangle size={16} className="text-rose-600 shrink-0" />
                        <span>Execution Reverted: EVM error. The entire batch transaction failed. Funds permanently locked.</span>
                      </div>
                    )}
                    <button
                      onClick={simulatePush}
                      disabled={pushStatus === "executing"}
                      className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition cursor-pointer shadow-xs active:scale-95 disabled:opacity-40"
                    >
                      {pushStatus === "executing" ? "Executing Push..." : "Simulate Vulnerable Push Transfer"}
                    </button>
                  </div>
                </div>

                {/* Secure Pull Side */}
                <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-emerald-900">Best Practice: Pull Payment</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        DoS &amp; Reentrancy Immune
                      </span>
                    </div>
                    <p className="text-xs text-emerald-900/80 leading-relaxed mb-4">
                      Instead of pushing ETH, the contract credits the user's isolated balance in a mapping. The user executes a separate transaction to withdraw their own funds using CEI.
                    </p>

                    <div className="p-3 bg-neutral-900 rounded-xl font-mono text-[11px] text-neutral-300 mb-4 overflow-x-auto border border-neutral-800">
                      <code>
                        // PULL: Isolated withdrawal<br />
                        uint256 amt = pendingWithdrawals[msg.sender];<br />
                        pendingWithdrawals[msg.sender] = 0; // CEI effect<br />
                        (bool s, ) = msg.sender.call&#123;'value: amt'&#125;("");<br />
                        require(s, "Transfer failed");
                      </code>
                    </div>
                  </div>

                  <div>
                    <div className="p-3 rounded-xl bg-emerald-100/60 border border-emerald-300 text-emerald-950 text-xs mb-3 flex items-center justify-between">
                      <span>Available Pull Balance:</span>
                      <span className="font-mono font-bold text-sm">{pullBalance.toFixed(2)} ETH</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={simulatePullDeposit}
                        className="py-2.5 rounded-xl border border-emerald-600 bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition cursor-pointer shadow-xs"
                      >
                        Credit 1.75 ETH
                      </button>
                      <button
                        onClick={simulatePullWithdraw}
                        disabled={pullBalance <= 0}
                        className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition cursor-pointer shadow-xs disabled:opacity-40"
                      >
                        Execute Pull Withdraw()
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIMULATOR 4: EVENT-DRIVEN OFF-CHAIN INDEXING (THE GRAPH) */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-4 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Simulator 4 &bull; Event-Driven Architecture
                </span>
                <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                  Smart Contract Event Emission &amp; The Graph Subgraph Pipeline
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Querying relational blockchain state via JSON-RPC is slow and unscalable. Trace how contract events are ingested by The Graph's AssemblyScript mapping handlers and updated in a relational GraphQL store.
                </p>
              </div>

              {/* Event Trigger Bar */}
              <div className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                <span className="text-xs font-bold text-stone-700">Emit Smart Contract Event:</span>
                <select
                  value={simulatedEmitType}
                  onChange={(e) => setSimulatedEmitType(e.target.value)}
                  className="px-3 py-2 rounded-xl border border-stone-200 bg-white font-mono text-xs text-stone-800 focus:outline-none focus:border-orange-500 cursor-pointer"
                >
                  <option value="DeliveryConfirmed">DeliveryConfirmed(bytes32 id, address seller)</option>
                  <option value="DisputeRaised">DisputeRaised(bytes32 id, address claimant, string reason)</option>
                  <option value="FundsReleased">FundsReleased(bytes32 id, address recipient, uint256 amount)</option>
                </select>
                <button
                  onClick={handleEmitContractEvent}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition cursor-pointer shadow-xs active:scale-95"
                >
                  Broadcast On-Chain Event
                </button>
              </div>

              {/* Two Column Pipeline View */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* EVM Event Logs */}
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    EVM Block Log Stream (Transaction Receipts)
                  </span>
                  <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs space-y-2 max-h-56 overflow-y-auto border border-neutral-800">
                    {indexerEvents.map((evt) => (
                      <div key={evt.id} className="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
                        <div className="flex items-center justify-between text-neutral-400 text-[10px] mb-1">
                          <span className="text-orange-400 font-bold">event {evt.event}</span>
                          <span>Block #{evt.block}</span>
                        </div>
                        <div className="text-neutral-300 text-[11px]">{evt.data}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subgraph GraphQL Entity View */}
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 block mb-2">
                    The Graph: Relational GraphQL Entity Store
                  </span>
                  <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs max-h-56 overflow-y-auto border border-neutral-800 text-emerald-400">
                    <pre className="text-[11px] leading-relaxed overflow-x-auto [scrollbar-width:thin]">
                      {JSON.stringify(graphEntities, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRACTICAL LAB - DECENTRALIZED ESCROW & DISPUTE RESOLUTION */}
        {activeTab === "labs" && (
          <div className="space-y-10">
            {/* Header Card */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-3">
                <Boxes size={14} />
                <span>9.21 Hands-On Engineering Project &bull; Production Implementation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                Practical Lab: Decentralized Escrow &amp; Dispute Resolution System
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
                Design, test, and deploy a secure 3-party escrow protocol in which a Buyer, Seller, and Arbitrator interact trustlessly through Solidity smart contracts. The protocol supports dynamic instance generation via <code>EscrowFactory.sol</code>, strict state machine transitions, Pull Payment withdrawals, custom error diagnostics, and reentrancy immunity.
              </p>
            </div>

            {/* Architecture & Roles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Architecture Diagram */}
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Protocol Topology
                </span>
                <h3 className="text-base font-bold text-stone-900 mb-3">System Architecture</h3>
                <div className="p-4 bg-neutral-950 rounded-2xl font-mono text-[11px] text-neutral-300 border border-neutral-800 leading-relaxed overflow-x-auto">
                  <pre className="overflow-x-auto [scrollbar-width:thin]">{`               +--------------------+
               |   EscrowFactory    | (Deploys instances, registers IDs)
               +---------+----------+
                         | createEscrow()
                         v
               +--------------------+
               |   EscrowContract   | (Holds locked ETH / ERC-20)
               +---------+----------+
                         |
      +------------------+------------------+
      |                  |                  |
      v                  v                  v
+-----------+      +-----------+      +------------+
|   Buyer   |      |  Seller   |      | Arbitrator |
+-----+-----+      +-----+-----+      +-----+------+
      |                  |                  |
      | deposit()        | markDelivered()  | resolveDispute()
      | confirmReceipt() | raiseDispute()   | (Refund / Payout)
      | raiseDispute()   |                  |
      +------------------+------------------+
                         |
                         v
              [ Settlement & Pull Payout ]`}</pre>
                </div>
              </div>

              {/* Roles & Permissions Table */}
              <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Access Control Boundaries
                </span>
                <h3 className="text-base font-bold text-stone-900 mb-3">Roles &amp; Permissions Matrix</h3>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                      <tr>
                        <th className="p-2.5">Participant</th>
                        <th className="p-2.5">Authorized Actions</th>
                        <th className="p-2.5">Strict Restrictions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-[11px]">
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Buyer</td>
                        <td className="p-2.5 text-stone-700">Deploy escrow, deposit funds, confirm receipt &amp; release, raise dispute</td>
                        <td className="p-2.5 text-stone-500">Cannot unilaterally withdraw without seller consent or dispute ruling</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Seller</td>
                        <td className="p-2.5 text-stone-700">Mark delivery dispatched, raise dispute, withdraw released funds</td>
                        <td className="p-2.5 text-stone-500">Cannot claim funds before buyer release or favorable arbitration</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-stone-900">Arbitrator</td>
                        <td className="p-2.5 text-stone-700">Award full/partial funds to seller OR refund buyer</td>
                        <td className="p-2.5 text-stone-500">Only active in Disputed state; cannot siphoning funds to own wallet</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-orange-700">Contract</td>
                        <td className="p-2.5 text-stone-700">Custody funds, enforce state machine transitions, emit indexable events</td>
                        <td className="p-2.5 text-stone-500">Zero admin backdoors; immutable transition rules</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Project File Tree */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Project Structure
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-4">Production Hardhat / Foundry Repository Layout</h3>
              <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-300 border border-neutral-800">
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`escrow-protocol/
├── contracts/
│   ├── interfaces/
│   │   └── IEscrow.sol          # Formal interface defining functions, events & errors
│   ├── Escrow.sol               # Core escrow state machine contract
│   └── EscrowFactory.sol        # Factory & registry deploying child agreements
├── scripts/
│   └── deploy.js                # Deployment script targeting Hardhat / Sepolia
├── test/
│   └── Escrow.test.js           # Comprehensive Mocha/Chai unit test suite (10 test cases)
├── hardhat.config.js            # Hardhat configuration (Solidity 0.8.28 + optimizer)
├── package.json
└── README.md`}</pre>
              </div>
            </div>

            {/* Contract Source Code Tabs */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Contract 1 of 3
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#18181b]">
                    contracts/interfaces/IEscrow.sol
                  </h3>
                  <button
                    onClick={() => handleCopy(`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface IEscrow {
    enum EscrowState { Created, Funded, Delivered, Disputed, Released, Refunded }

    error InvalidAddress();
    error InvalidAmount();
    error InvalidState(EscrowState current, EscrowState required);
    error UnauthorizedCaller(address caller);
    error NoFundsAvailable();
    error TransferFailed();

    event FundsDeposited(address indexed buyer, uint256 amount);
    event DeliveryMarked(address indexed seller);
    event FundsReleased(address indexed seller, uint256 amount);
    event DisputeInitiated(address indexed initiator);
    event DisputeResolved(address indexed recipient, uint256 amount, address indexed arbitrator);
    event WithdrawalExecuted(address indexed recipient, uint256 amount);

    function deposit() external payable;
    function markDelivered() external;
    function confirmReceipt() external;
    function initiateDispute() external;
    function resolveDispute(bool awardSeller) external;
    function withdraw() external;
}`, "iescrow")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-bold transition cursor-pointer"
                  >
                    {copiedKey === "iescrow" ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                    <span>{copiedKey === "iescrow" ? "Copied" : "Copy Interface"}</span>
                  </button>
                </div>
              </div>

              <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-200 border border-neutral-800 overflow-x-auto leading-relaxed">
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface IEscrow {
    enum EscrowState { Created, Funded, Delivered, Disputed, Released, Refunded }

    error InvalidAddress();
    error InvalidAmount();
    error InvalidState(EscrowState current, EscrowState required);
    error UnauthorizedCaller(address caller);
    error NoFundsAvailable();
    error TransferFailed();

    event FundsDeposited(address indexed buyer, uint256 amount);
    event DeliveryMarked(address indexed seller);
    event FundsReleased(address indexed seller, uint256 amount);
    event DisputeInitiated(address indexed initiator);
    event DisputeResolved(address indexed recipient, uint256 amount, address indexed arbitrator);
    event WithdrawalExecuted(address indexed recipient, uint256 amount);

    function deposit() external payable;
    function markDelivered() external;
    function confirmReceipt() external;
    function initiateDispute() external;
    function resolveDispute(bool awardSeller) external;
    function withdraw() external;
}`}</pre>
              </div>
            </div>

            {/* Core Escrow Contract */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Contract 2 of 3
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#18181b]">
                    contracts/Escrow.sol (Full Production Implementation)
                  </h3>
                  <button
                    onClick={() => handleCopy(`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./interfaces/IEscrow.sol";

/**
 * @title Production Decentralized Escrow Contract
 * @notice Trust-minimized 3-party escrow enforcing state machine, CEI, and pull payments.
 */
contract Escrow is IEscrow {
    address public immutable buyer;
    address public immutable seller;
    address public immutable arbitrator;
    uint256 public immutable targetAmount;

    EscrowState public state;
    mapping(address => uint256) public pendingWithdrawals;

    modifier onlyBuyer() {
        if (msg.sender != buyer) revert UnauthorizedCaller(msg.sender);
        _;
    }

    modifier onlySeller() {
        if (msg.sender != seller) revert UnauthorizedCaller(msg.sender);
        _;
    }

    modifier onlyArbitrator() {
        if (msg.sender != arbitrator) revert UnauthorizedCaller(msg.sender);
        _;
    }

    modifier inState(EscrowState expected) {
        if (state != expected) revert InvalidState(state, expected);
        _;
    }

    constructor(
        address _buyer,
        address _seller,
        address _arbitrator,
        uint256 _amount
    ) payable {
        if (_buyer == address(0) || _seller == address(0) || _arbitrator == address(0)) {
            revert InvalidAddress();
        }
        if (_amount == 0) revert InvalidAmount();

        buyer = _buyer;
        seller = _seller;
        arbitrator = _arbitrator;
        targetAmount = _amount;
        state = EscrowState.Created;

        if (msg.value > 0) {
            if (msg.value != _amount || msg.sender != _buyer) revert InvalidAmount();
            state = EscrowState.Funded;
            emit FundsDeposited(_buyer, msg.value);
        }
    }

    function deposit() external payable onlyBuyer inState(EscrowState.Created) {
        if (msg.value != targetAmount) revert InvalidAmount();
        state = EscrowState.Funded;
        emit FundsDeposited(buyer, msg.value);
    }

    function markDelivered() external onlySeller inState(EscrowState.Funded) {
        state = EscrowState.Delivered;
        emit DeliveryMarked(seller);
    }

    function confirmReceipt() external onlyBuyer {
        if (state != EscrowState.Funded && state != EscrowState.Delivered) {
            revert InvalidState(state, EscrowState.Delivered);
        }
        state = EscrowState.Released;
        pendingWithdrawals[seller] += address(this).balance;
        emit FundsReleased(seller, pendingWithdrawals[seller]);
    }

    function initiateDispute() external {
        if (msg.sender != buyer && msg.sender != seller) revert UnauthorizedCaller(msg.sender);
        if (state != EscrowState.Funded && state != EscrowState.Delivered) {
            revert InvalidState(state, EscrowState.Funded);
        }
        state = EscrowState.Disputed;
        emit DisputeInitiated(msg.sender);
    }

    function resolveDispute(bool awardSeller) external onlyArbitrator inState(EscrowState.Disputed) {
        uint256 bal = address(this).balance;
        if (awardSeller) {
            state = EscrowState.Released;
            pendingWithdrawals[seller] += bal;
            emit DisputeResolved(seller, bal, arbitrator);
        } else {
            state = EscrowState.Refunded;
            pendingWithdrawals[buyer] += bal;
            emit DisputeResolved(buyer, bal, arbitrator);
        }
    }

    function withdraw() external {
        uint256 amount = pendingWithdrawals[msg.sender];
        if (amount == 0) revert NoFundsAvailable();

        // CHECKS-EFFECTS-INTERACTIONS: Zero balance before external call
        pendingWithdrawals[msg.sender] = 0;

        (bool success, ) = msg.sender.call{value: amount}("");
        if (!success) revert TransferFailed();

        emit WithdrawalExecuted(msg.sender, amount);
    }
}`, "escrowsol")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-bold transition cursor-pointer"
                  >
                    {copiedKey === "escrowsol" ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                    <span>{copiedKey === "escrowsol" ? "Copied" : "Copy Escrow.sol"}</span>
                  </button>
                </div>
              </div>

              <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-200 border border-neutral-800 overflow-x-auto leading-relaxed max-h-[500px]">
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./interfaces/IEscrow.sol";

/**
 * @title Production Decentralized Escrow Contract
 * @notice Trust-minimized 3-party escrow enforcing state machine, CEI, and pull payments.
 */
contract Escrow is IEscrow {
    address public immutable buyer;
    address public immutable seller;
    address public immutable arbitrator;
    uint256 public immutable targetAmount;

    EscrowState public state;
    mapping(address => uint256) public pendingWithdrawals;

    modifier onlyBuyer() {
        if (msg.sender != buyer) revert UnauthorizedCaller(msg.sender);
        _;
    }

    modifier onlySeller() {
        if (msg.sender != seller) revert UnauthorizedCaller(msg.sender);
        _;
    }

    modifier onlyArbitrator() {
        if (msg.sender != arbitrator) revert UnauthorizedCaller(msg.sender);
        _;
    }

    modifier inState(EscrowState expected) {
        if (state != expected) revert InvalidState(state, expected);
        _;
    }

    constructor(
        address _buyer,
        address _seller,
        address _arbitrator,
        uint256 _amount
    ) payable {
        if (_buyer == address(0) || _seller == address(0) || _arbitrator == address(0)) {
            revert InvalidAddress();
        }
        if (_amount == 0) revert InvalidAmount();

        buyer = _buyer;
        seller = _seller;
        arbitrator = _arbitrator;
        targetAmount = _amount;
        state = EscrowState.Created;

        if (msg.value > 0) {
            if (msg.value != _amount || msg.sender != _buyer) revert InvalidAmount();
            state = EscrowState.Funded;
            emit FundsDeposited(_buyer, msg.value);
        }
    }

    function deposit() external payable onlyBuyer inState(EscrowState.Created) {
        if (msg.value != targetAmount) revert InvalidAmount();
        state = EscrowState.Funded;
        emit FundsDeposited(buyer, msg.value);
    }

    function markDelivered() external onlySeller inState(EscrowState.Funded) {
        state = EscrowState.Delivered;
        emit DeliveryMarked(seller);
    }

    function confirmReceipt() external onlyBuyer {
        if (state != EscrowState.Funded && state != EscrowState.Delivered) {
            revert InvalidState(state, EscrowState.Delivered);
        }
        state = EscrowState.Released;
        pendingWithdrawals[seller] += address(this).balance;
        emit FundsReleased(seller, pendingWithdrawals[seller]);
    }

    function initiateDispute() external {
        if (msg.sender != buyer && msg.sender != seller) revert UnauthorizedCaller(msg.sender);
        if (state != EscrowState.Funded && state != EscrowState.Delivered) {
            revert InvalidState(state, EscrowState.Funded);
        }
        state = EscrowState.Disputed;
        emit DisputeInitiated(msg.sender);
    }

    function resolveDispute(bool awardSeller) external onlyArbitrator inState(EscrowState.Disputed) {
        uint256 bal = address(this).balance;
        if (awardSeller) {
            state = EscrowState.Released;
            pendingWithdrawals[seller] += bal;
            emit DisputeResolved(seller, bal, arbitrator);
        } else {
            state = EscrowState.Refunded;
            pendingWithdrawals[buyer] += bal;
            emit DisputeResolved(buyer, bal, arbitrator);
        }
    }

    function withdraw() external {
        uint256 amount = pendingWithdrawals[msg.sender];
        if (amount == 0) revert NoFundsAvailable();

        // CHECKS-EFFECTS-INTERACTIONS: Zero balance before external call
        pendingWithdrawals[msg.sender] = 0;

        (bool success, ) = msg.sender.call{value: amount}("");
        if (!success) revert TransferFailed();

        emit WithdrawalExecuted(msg.sender, amount);
    }
}`}</pre>
              </div>
            </div>

            {/* Escrow Factory Contract */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Contract 3 of 3
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#18181b]">
                    contracts/EscrowFactory.sol (Instance Generator &amp; Registry)
                  </h3>
                  <button
                    onClick={() => handleCopy(`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./Escrow.sol";

contract EscrowFactory {
    address[] public deployedEscrows;
    mapping(address => address[]) public userEscrows;

    event EscrowCreated(
        address indexed escrowAddress,
        address indexed buyer,
        address indexed seller,
        address arbitrator,
        uint256 amount
    );

    function createEscrow(
        address seller,
        address arbitrator,
        uint256 amount
    ) external payable returns (address) {
        Escrow newEscrow = (new Escrow){value: msg.value}(
            msg.sender,
            seller,
            arbitrator,
            amount
        );

        address escrowAddr = address(newEscrow);
        deployedEscrows.push(escrowAddr);
        userEscrows[msg.sender].push(escrowAddr);
        userEscrows[seller].push(escrowAddr);

        emit EscrowCreated(escrowAddr, msg.sender, seller, arbitrator, amount);
        return escrowAddr;
    }

    function getDeployedEscrowsCount() external view returns (uint256) {
        return deployedEscrows.length;
    }

    function getUserEscrows(address user) external view returns (address[] memory) {
        return userEscrows[user];
    }
}`, "factorysol")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-bold transition cursor-pointer"
                  >
                    {copiedKey === "factorysol" ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                    <span>{copiedKey === "factorysol" ? "Copied" : "Copy EscrowFactory.sol"}</span>
                  </button>
                </div>
              </div>

              <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-200 border border-neutral-800 overflow-x-auto leading-relaxed">
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./Escrow.sol";

contract EscrowFactory {
    address[] public deployedEscrows;
    mapping(address => address[]) public userEscrows;

    event EscrowCreated(
        address indexed escrowAddress,
        address indexed buyer,
        address indexed seller,
        address arbitrator,
        uint256 amount
    );

    function createEscrow(
        address seller,
        address arbitrator,
        uint256 amount
    ) external payable returns (address) {
        Escrow newEscrow = (new Escrow){value: msg.value}(
            msg.sender,
            seller,
            arbitrator,
            amount
        );

        address escrowAddr = address(newEscrow);
        deployedEscrows.push(escrowAddr);
        userEscrows[msg.sender].push(escrowAddr);
        userEscrows[seller].push(escrowAddr);

        emit EscrowCreated(escrowAddr, msg.sender, seller, arbitrator, amount);
        return escrowAddr;
    }

    function getDeployedEscrowsCount() external view returns (uint256) {
        return deployedEscrows.length;
    }

    function getUserEscrows(address user) external view returns (address[] memory) {
        return userEscrows[user];
    }
}`}</pre>
              </div>
            </div>

            {/* Test Suite & Test Cases Table */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Verification Suite
                </span>
                <h3 className="text-lg font-bold text-[#18181b]">
                  Exhaustive Automated Test Scenarios (10 Required Cases)
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  The test suite executes against local Anvil/Hardhat network nodes with full state assertion, event signature verification, and negative revert checks.
                </p>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3">#</th>
                      <th className="p-3">Test Scenario</th>
                      <th className="p-3">Trigger Action</th>
                      <th className="p-3">Expected Outcome</th>
                      <th className="p-3">Security Guard Enforced</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 font-mono text-[11px]">
                    <tr>
                      <td className="p-3 font-bold">1</td>
                      <td className="p-3 text-stone-900">Valid Buyer Deposit</td>
                      <td className="p-3">Buyer calls deposit&#123;value: targetAmount&#125;()</td>
                      <td className="p-3 text-emerald-600 font-bold">State = Funded, event emitted</td>
                      <td className="p-3 text-stone-500">onlyBuyer &amp; inState(Created)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">2</td>
                      <td className="p-3 text-stone-900">Seller Marks Delivery</td>
                      <td className="p-3">Seller calls markDelivered()</td>
                      <td className="p-3 text-emerald-600 font-bold">State = Delivered</td>
                      <td className="p-3 text-stone-500">onlySeller &amp; inState(Funded)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">3</td>
                      <td className="p-3 text-stone-900">Buyer Confirms Receipt</td>
                      <td className="p-3">Buyer calls confirmReceipt()</td>
                      <td className="p-3 text-emerald-600 font-bold">State = Released, pendingWithdrawals updated</td>
                      <td className="p-3 text-stone-500">onlyBuyer &amp; Pull Payment</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">4</td>
                      <td className="p-3 text-stone-900">Unauthorized Release Attempt</td>
                      <td className="p-3">Attacker calls confirmReceipt()</td>
                      <td className="p-3 text-rose-600 font-bold">Revert UnauthorizedCaller</td>
                      <td className="p-3 text-stone-500">msg.sender == buyer validation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">5</td>
                      <td className="p-3 text-stone-900">Buyer/Seller Initiates Dispute</td>
                      <td className="p-3">Buyer or Seller calls initiateDispute()</td>
                      <td className="p-3 text-amber-600 font-bold">State = Disputed, all releases locked</td>
                      <td className="p-3 text-stone-500">inState(Funded / Delivered)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">6</td>
                      <td className="p-3 text-stone-900">Arbitrator Awards Seller</td>
                      <td className="p-3">Arbitrator calls resolveDispute(true)</td>
                      <td className="p-3 text-emerald-600 font-bold">State = Released, Seller withdrawable</td>
                      <td className="p-3 text-stone-500">onlyArbitrator &amp; inState(Disputed)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">7</td>
                      <td className="p-3 text-stone-900">Arbitrator Awards Buyer</td>
                      <td className="p-3">Arbitrator calls resolveDispute(false)</td>
                      <td className="p-3 text-purple-600 font-bold">State = Refunded, Buyer withdrawable</td>
                      <td className="p-3 text-stone-500">onlyArbitrator &amp; inState(Disputed)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">8</td>
                      <td className="p-3 text-stone-900">Repeated Settlement Attempt</td>
                      <td className="p-3">Buyer calls confirmReceipt() after Released</td>
                      <td className="p-3 text-rose-600 font-bold">Revert InvalidState</td>
                      <td className="p-3 text-stone-500">Terminal state lock</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">9</td>
                      <td className="p-3 text-stone-900">Reentrant Withdrawal Drain</td>
                      <td className="p-3">Attacker contract re-calls withdraw() in receive()</td>
                      <td className="p-3 text-emerald-600 font-bold">Attack Prevented (0 balance on reentry)</td>
                      <td className="p-3 text-stone-500">Checks-Effects-Interactions (CEI)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">10</td>
                      <td className="p-3 text-stone-900">Invalid State Transition</td>
                      <td className="p-3">Seller calls markDelivered() before deposit</td>
                      <td className="p-3 text-rose-600 font-bold">Revert InvalidState(Created, Funded)</td>
                      <td className="p-3 text-stone-500">Strict finite state machine guards</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Hardhat Test Suite Code Snippet */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-stone-900 font-mono">test/Escrow.test.js</h4>
                  <button
                    onClick={() => handleCopy(`const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Decentralized Escrow Protocol", function () {
  let Escrow, escrow, EscrowFactory, factory;
  let buyer, seller, arbitrator, attacker;
  const depositAmount = ethers.parseEther("2.0");

  beforeEach(async function () {
    [buyer, seller, arbitrator, attacker] = await ethers.getSigners();
    Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(buyer.address, seller.address, arbitrator.address, depositAmount);
  });

  it("Test 1: should accept valid deposit from buyer", async function () {
    await expect(escrow.connect(buyer).deposit({ value: depositAmount }))
      .to.emit(escrow, "FundsDeposited")
      .withArgs(buyer.address, depositAmount);
    expect(await escrow.state()).to.equal(1); // Funded
  });

  it("Test 4: should revert unauthorized confirmReceipt attempts", async function () {
    await escrow.connect(buyer).deposit({ value: depositAmount });
    await expect(escrow.connect(attacker).confirmReceipt())
      .to.be.revertedWithCustomError(escrow, "UnauthorizedCaller");
  });

  it("Test 9: should enforce CEI and prevent reentrancy during withdrawal", async function () {
    await escrow.connect(buyer).deposit({ value: depositAmount });
    await escrow.connect(buyer).confirmReceipt();
    await escrow.connect(seller).withdraw();
    expect(await escrow.pendingWithdrawals(seller.address)).to.equal(0);
    await expect(escrow.connect(seller).withdraw())
      .to.be.revertedWithCustomError(escrow, "NoFundsAvailable");
  });
});`, "testjs")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-[11px] font-bold cursor-pointer"
                  >
                    {copiedKey === "testjs" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    <span>{copiedKey === "testjs" ? "Copied" : "Copy test.js"}</span>
                  </button>
                </div>
                <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-[11px] text-neutral-300 border border-neutral-800 overflow-x-auto">
                  <pre className="overflow-x-auto [scrollbar-width:thin]">{`const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Decentralized Escrow Protocol", function () {
  let Escrow, escrow, EscrowFactory, factory;
  let buyer, seller, arbitrator, attacker;
  const depositAmount = ethers.parseEther("2.0");

  beforeEach(async function () {
    [buyer, seller, arbitrator, attacker] = await ethers.getSigners();
    Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(buyer.address, seller.address, arbitrator.address, depositAmount);
  });

  it("Test 1: should accept valid deposit from buyer", async function () {
    await expect(escrow.connect(buyer).deposit({ value: depositAmount }))
      .to.emit(escrow, "FundsDeposited")
      .withArgs(buyer.address, depositAmount);
    expect(await escrow.state()).to.equal(1); // Funded
  });

  it("Test 4: should revert unauthorized confirmReceipt attempts", async function () {
    await escrow.connect(buyer).deposit({ value: depositAmount });
    await expect(escrow.connect(attacker).confirmReceipt())
      .to.be.revertedWithCustomError(escrow, "UnauthorizedCaller");
  });

  it("Test 9: should enforce CEI and prevent reentrancy during withdrawal", async function () {
    await escrow.connect(buyer).deposit({ value: depositAmount });
    await escrow.connect(buyer).confirmReceipt();
    await escrow.connect(seller).withdraw();
    expect(await escrow.pendingWithdrawals(seller.address)).to.equal(0);
    await expect(escrow.connect(seller).withdraw())
      .to.be.revertedWithCustomError(escrow, "NoFundsAvailable");
  });
});`}</pre>
                </div>
              </div>
            </div>

            {/* Terminal Commands Guide */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Execution Workflow
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-4">CLI Terminal Step-by-Step Commands</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-neutral-950 font-mono text-xs text-neutral-300 border border-neutral-800">
                  <span className="text-orange-400 font-bold block mb-2"># 1. Initialize &amp; Compile</span>
                  <code>
                    npm init -y<br />
                    npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox<br />
                    npx hardhat compile
                  </code>
                </div>
                <div className="p-4 rounded-2xl bg-neutral-950 font-mono text-xs text-neutral-300 border border-neutral-800">
                  <span className="text-emerald-400 font-bold block mb-2"># 2. Run Comprehensive Tests</span>
                  <code>
                    npx hardhat test<br />
                    REPORT_GAS=true npx hardhat test<br />
                    npx hardhat coverage
                  </code>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ASSIGNMENTS & ASSESSMENT */}
        {activeTab === "quiz" && (
          <div className="space-y-10">
            {/* Header Card */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-3">
                <FileCheck size={14} />
                <span>9.22 &amp; 9.23 Comprehensive Evaluation &bull; Industry &amp; University Rigor</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                Assignments, Formal Assessment &amp; Senior Architect Interview Prep
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
                Demonstrate mastery of smart contract engineering through three architecture assignments, an interactive 10-question evaluation quiz, and 15 senior-level system architecture interview scenarios with model solutions.
              </p>
            </div>

            {/* Assessment Structure Table */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Curriculum Grading Weights
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-4">
                9.23 Assessment Weighting Breakdown
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3">Evaluation Component</th>
                      <th className="p-3">Weight</th>
                      <th className="p-3">Core Learning Outcome Evaluated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-[11px]">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Architecture Theory &amp; Pattern Quiz</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3 text-stone-600">Mastery of CEI, pull payments, proxy upgrades, and data boundaries</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">System Design &amp; State Machine Exercises</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3 text-stone-600">Traceability matrices, STRIDE threat models, and finite state diagrams</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Practical Escrow &amp; Factory Engineering Lab</td>
                      <td className="p-3 font-mono font-bold text-orange-600">30%</td>
                      <td className="p-3 text-stone-600">Implementation of Escrow.sol, EscrowFactory.sol, and 10 Hardhat test cases</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Vulnerability Code Review &amp; Gas Audit</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3 text-stone-600">Identification of reentrancy, DoS loops, and storage layout collisions</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Final DApp Architecture Design Assignment</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3 text-stone-600">Full specification of multi-contract marketplace with ADR-001 format</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Assignments 1, 2, and 3 */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                9.22 Practical Assignments
              </span>
              <h3 className="text-lg font-bold text-[#18181b]">Core Engineering Assignments</h3>

              {/* Assignment 1 */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-stone-900">
                    Assignment 1: Decentralized Marketplace Architecture Design Document
                  </h4>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold">
                    System Design
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Design a multi-contract architecture for an on-chain digital goods marketplace. Your specification must include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 leading-relaxed font-mono">
                  <li>Requirements Specification: 5 functional requirements (FR-01 to FR-05) and 3 non-functional security requirements.</li>
                  <li>On-Chain vs Off-Chain Boundary: Explicit categorization of order state, user profiles, image thumbnails, and reviews.</li>
                  <li>Multi-Contract Topology: <code>MarketplaceFactory</code>, <code>ListingRegistry</code>, and <code>EscrowManager</code> interaction diagram.</li>
                  <li>Security Threat Model: STRIDE analysis addressing front-running, fake order griefing, and reentrancy.</li>
                </ul>
              </div>

              {/* Assignment 2 */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-stone-900">
                    Assignment 2: Milestone-Based Escrow State Machine Extension
                  </h4>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    Smart Contract Code
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Extend the practical lab <code>Escrow.sol</code> contract to support multi-stage deliverables:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 leading-relaxed font-mono">
                  <li>Add <code>struct Milestone &#123; uint256 amount; bool delivered; bool approved; &#125;</code> and a milestone array.</li>
                  <li>Implement <code>claimMilestone(uint256 index)</code> releasing funds incrementally via Pull Payment.</li>
                  <li>Implement an automated 14-day inactivity timeout allowing the buyer to claim a refund if the seller never marks delivery.</li>
                </ul>
              </div>

              {/* Assignment 3 */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-stone-900">
                    Assignment 3: Vulnerability Code Review &amp; Gas Remediation
                  </h4>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold">
                    Security Audit
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Audit a provided 60-line vulnerable escrow contract containing 5 intentional high-severity flaws:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-stone-700 leading-relaxed font-mono">
                  <li>Vulnerability 1: Direct <code>address.transfer()</code> causing permanent denial of service when called on smart contract wallets.</li>
                  <li>Vulnerability 2: State variable update occurring after an external call (Reentrancy vulnerability).</li>
                  <li>Vulnerability 3: Missing access control on <code>resolveDispute()</code> allowing arbitrary accounts to award themselves funds.</li>
                  <li>Vulnerability 4: Unbounded dynamic array looping in <code>refundAll()</code> causing block gas limit exhaustion.</li>
                  <li>Vulnerability 5: Storage collision in an upgradeable contract variant caused by altering variable declaration order.</li>
                </ul>
              </div>
            </div>

            {/* Interactive 10 MCQs Quiz */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                    Graded Assessment &bull; 10 Questions
                  </span>
                  <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                    Architecture &amp; Design Patterns Assessment
                  </h3>
                </div>
                {quizSubmitted && (
                  <div className="px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 text-xs font-bold text-orange-800 font-mono">
                    Score: {quizScore} / {QUIZ_QUESTIONS.length} ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const selected = selectedAnswers[q.id];
                  // isAnswered check
                  const isCorrect = selected === q.correct;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? isCorrect
                            ? "bg-emerald-50/50 border-emerald-200"
                            : "bg-rose-50/50 border-rose-200"
                          : "bg-stone-50/40 border-stone-200/80"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-800 font-mono text-xs font-bold">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                          {q.question}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-2 ml-9">
                        {q.options.map((opt, optIdx) => {
                          let optStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";
                          if (quizSubmitted) {
                            if (optIdx === q.correct) {
                              optStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold";
                            } else if (selected === optIdx) {
                              optStyle = "bg-rose-100 border-rose-500 text-rose-950 font-bold";
                            } else {
                              optStyle = "bg-white/50 border-stone-200 text-stone-400 opacity-60";
                            }
                          } else if (selected === optIdx) {
                            optStyle = "bg-orange-50 border-orange-500 text-orange-950 font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              disabled={quizSubmitted}
                              className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex items-center gap-3 ${optStyle}`}
                            >
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current font-mono text-[10px]">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="leading-relaxed">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 ml-9 p-3 rounded-xl bg-white border border-stone-200 text-xs leading-relaxed text-stone-700">
                          <strong className={isCorrect ? "text-emerald-700 font-bold" : "text-rose-700 font-bold"}>
                            {isCorrect ? "Correct: " : "Incorrect: "}
                          </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-200">
                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length < QUIZ_QUESTIONS.length}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Submit &amp; Grade Assessment ({Object.keys(selectedAnswers).length}/{QUIZ_QUESTIONS.length} Answered)
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setSelectedAnswers({});
                    }}
                    className="px-6 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs transition cursor-pointer shadow-xs"
                  >
                    Retake Quiz
                  </button>
                )}
              </div>
            </div>

            {/* 15 Senior Developer Interview Questions */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Senior Web3 Architect Career Track
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-2">
                15 Senior Smart Contract Architect Interview Scenarios
              </h3>
              <p className="text-xs text-stone-600 mb-6">
                Examine technical interview questions asked by leading Web3 protocols (Uniswap Labs, OpenZeppelin, Consensys, Chainlink) covering architecture trade-offs, storage layouts, upgrade safety, and event-driven indexing.
              </p>

              <div className="space-y-3">
                {INTERVIEW_QUESTIONS.map((item) => {
                  const isOpen = !!expandedInterviews[item.id];
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-stone-200 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleInterview(item.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 bg-stone-50/70 hover:bg-stone-100/80 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-800 font-mono text-xs font-bold">
                            #{item.id}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                            {item.question}
                          </span>
                        </div>
                        {isOpen ? <ChevronUp size={16} className="text-stone-500 shrink-0" /> : <ChevronDown size={16} className="text-stone-500 shrink-0" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-700 leading-relaxed space-y-2">
                          <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 block mb-1">
                            Model Architectural Response:
                          </span>
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: OBJECTIVE TRACKER & COMPLETION OUTCOMES */}
        {activeTab === "checklist" && (
          <div className="space-y-10">
            {/* Header Card */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-3">
                <ListChecks size={14} />
                <span>9.24 Competency Verification &bull; 26 Core Curriculum Objectives</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                Module 9 Competency Tracker &amp; Industry Completion Outcomes
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
                Track your mastery of the 26 core architectural competencies required to engineer decentralized applications. Your progress is saved automatically across browser sessions.
              </p>

              {/* Progress Bar */}
              <div className="mt-6 p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-stone-800 mb-2">
                  <span>Architecture Competency Progress</span>
                  <span className="font-mono text-orange-600">
                    {completedCount} of {CHECKLIST_ITEMS.length} Objectives Completed ({progressPercent}%)
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-stone-200 overflow-hidden">
                  <div
                    className="h-full bg-orange-600 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 26-Objective Interactive Checklist */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Formal Syllabus Verification
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-4">
                26 Architectural Competency Checkpoints
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {CHECKLIST_ITEMS.map((item, idx) => {
                  const isChecked = !!completedItems[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleChecklistItem(idx)}
                      className={`p-3.5 rounded-2xl border text-left text-xs transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? "bg-emerald-50/60 border-emerald-300 text-emerald-950 font-medium"
                          : "bg-stone-50/50 border-stone-200 text-stone-700 hover:bg-white hover:border-orange-200"
                      }`}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border mt-0.5 transition ${
                          isChecked
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "bg-white border-stone-300 text-transparent"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={isChecked ? "line-through text-stone-500" : ""}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Official References & Resources */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                9.24 Authoritative References
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-4">
                Official Standards &amp; Industry Documentation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://docs.soliditylang.org/en/latest/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/20 transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Official Solidity Documentation</h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">Language reference, smart contract patterns, and EVM opcodes.</p>
                  </div>
                  <Share2 size={16} className="text-stone-400 shrink-0" />
                </a>

                <a
                  href="https://docs.openzeppelin.com/contracts/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/20 transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">OpenZeppelin Contracts Library</h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">Security libraries, ReentrancyGuard, and upgradeable proxy patterns.</p>
                  </div>
                  <Share2 size={16} className="text-stone-400 shrink-0" />
                </a>

                <a
                  href="https://hardhat.org/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/20 transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Hardhat Framework Documentation</h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">Automated testing, gas reporting, deployment, and verification workflows.</p>
                  </div>
                  <Share2 size={16} className="text-stone-400 shrink-0" />
                </a>

                <a
                  href="https://eips.ethereum.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/20 transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Ethereum Improvement Proposals (EIPs)</h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">ERC-20, ERC-721, ERC-1167, ERC-1967, and ERC-7201 standards.</p>
                  </div>
                  <Share2 size={16} className="text-stone-400 shrink-0" />
                </a>
              </div>
            </div>

            {/* Completion Outcomes Card */}
            <div className="bg-gradient-to-br from-stone-900 via-stone-950 to-orange-950 rounded-3xl p-6 sm:p-8 text-white shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400 block mb-1">
                Career Track Milestone
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                Module Completion Outcomes &amp; Portfolio Deliverable
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
                After completing Module 9, you possess the capability to architect entire decentralized systems rather than merely authoring isolated contracts. You are equipped to formulate requirements, decompose monolithic logic into modular multi-contract networks, implement state-machine-guarded escrows with pull withdrawals, and build event-driven indexers.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => navigate("/learning/blockchain/advanced-solidity")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-stone-700 bg-stone-900/80 text-xs font-bold text-stone-200 hover:border-orange-400 hover:text-white transition cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: 8. Advanced Solidity &amp; Design</span>
                </button>

                <button
                  onClick={() => navigate("/learning/blockchain/testing")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer shadow-sm shadow-orange-500/25 active:scale-95"
                >
                  <span>Next: 10. Smart Contract Testing with Foundry &amp; Hardhat</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
