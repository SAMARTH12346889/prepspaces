// projectx/src/Componets/BlockchainSecurityAuditing.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import ModuleNav from "./ModuleNav";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRightLeft,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Cpu
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = [
  {
    "id": "m18-obj-1",
    "label": "Analyze the 7 layers of blockchain security (Consensus, Network, Wallet, Contract, App, Oracle, Governance)."
  },
  {
    "id": "m18-obj-2",
    "label": "Distinguish smart contract security constraints (irreversibility, immutability, automated exploits) from traditional software."
  },
  {
    "id": "m18-obj-3",
    "label": "Define core security properties: Confidentiality (transparent public storage), Integrity, Availability, and Invariants."
  },
  {
    "id": "m18-obj-4",
    "label": "Perform threat modeling using STRIDE and asset-based attack surface analysis for DeFi applications."
  },
  {
    "id": "m18-obj-5",
    "label": "Execute the 7-step professional audit workflow from scoping to remediation and retesting."
  },
  {
    "id": "m18-obj-6",
    "label": "Identify and exploit missing access control vulnerabilities in administrative functions (AUD-001)."
  },
  {
    "id": "m18-obj-7",
    "label": "Implement role-based access control (RBAC) using OpenZeppelin AccessControl and custom errors."
  },
  {
    "id": "m18-obj-8",
    "label": "Dissect classic single-function, cross-function, cross-contract, and read-only reentrancy attack vectors."
  },
  {
    "id": "m18-obj-9",
    "label": "Apply the Checks-Effects-Interactions (CEI) design pattern and OpenZeppelin ReentrancyGuard (AUD-002)."
  },
  {
    "id": "m18-obj-10",
    "label": "Evaluate integer arithmetic in Solidity 0.8+, unchecked blocks, precision scaling, and rounding pitfalls."
  },
  {
    "id": "m18-obj-11",
    "label": "Analyze Denial of Service (DoS) vectors: gas exhaustion, unbounded loops, and pull-over-push payment patterns."
  },
  {
    "id": "m18-obj-12",
    "label": "Model front-running and Maximal Extractable Value (MEV): 3-step sandwich attacks and slippage protection bounds."
  },
  {
    "id": "m18-obj-13",
    "label": "Evaluate oracle manipulation risks using instantaneous AMM spot prices versus Chainlink AggregatorV3Interface feeds."
  },
  {
    "id": "m18-obj-14",
    "label": "Analyze flash loan manipulation vectors: temporary capital distortion, liquidation triggers, and governance exploits."
  },
  {
    "id": "m18-obj-15",
    "label": "Prevent signature replay attacks using incremental account nonces and EIP-712 structured domain separators."
  },
  {
    "id": "m18-obj-16",
    "label": "Avoid tx.origin authentication vulnerabilities by enforcing msg.sender for immediate caller identity."
  },
  {
    "id": "m18-obj-17",
    "label": "Handle unchecked external call return values and integrate OpenZeppelin SafeERC20 for non-standard tokens."
  },
  {
    "id": "m18-obj-18",
    "label": "Analyze delegatecall storage context, caller preservation, and proxy storage collision hazards."
  },
  {
    "id": "m18-obj-19",
    "label": "Secure upgradeable contracts: EIP-1967 storage slots, reentrancy in initializers, and timelocked governance."
  },
  {
    "id": "m18-obj-20",
    "label": "Assess block.timestamp dependence and miner manipulation bounds in time-sensitive contract logic."
  },
  {
    "id": "m18-obj-21",
    "label": "Analyze EVM pseudo-randomness pitfalls and implement Chainlink VRF or commit-reveal randomness schemes."
  },
  {
    "id": "m18-obj-22",
    "label": "Implement secure coding standards: zero-address validation, positive amount assertions, and minimal complexity."
  },
  {
    "id": "m18-obj-23",
    "label": "Configure and execute static analysis using Slither to detect dangerous patterns and triage false positives."
  },
  {
    "id": "m18-obj-24",
    "label": "Write Foundry fuzz tests (testFuzz) with bound constraints to explore arbitrary input spaces."
  },
  {
    "id": "m18-obj-25",
    "label": "Understand formal verification principles: Hoare logic {P} C {Q}, preconditions, postconditions, and mathematical invariants."
  },
  {
    "id": "m18-obj-26",
    "label": "Develop reproduction test suites in Foundry (VulnerableVault.t.sol) to confirm exploits locally."
  },
  {
    "id": "m18-obj-27",
    "label": "Draft a professional Markdown security audit report with severity ratings (Critical to Informational) and remediation advice."
  },
  {
    "id": "m18-obj-28",
    "label": "Adhere to ethical vulnerability disclosure guidelines, bug bounty rules, and safe-harbor terms."
  }
];
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "question": "Why is declaring a state variable 'private' in a Solidity smart contract insufficient for keeping sensitive data confidential?",
    "options": [
      "Private variables are automatically made public after 256 blocks",
      "Public blockchain state is completely transparent, allowing anyone to inspect raw contract storage slots off-chain",
      "The compiler converts private variables into public getters during ABI generation",
      "Private variables can be decrypted using the contract owner's public address"
    ],
    "answer": 1,
    "explanation": "In Ethereum and EVM-compatible chains, all blockchain data is publicly visible to all nodes. The 'private' keyword in Solidity only restricts other smart contracts from reading the variable on-chain; anyone running a node or using web3.eth.getStorageAt() can inspect the raw 32-byte storage slot."
  },
  {
    "id": 2,
    "question": "What is the primary root cause of a classic reentrancy vulnerability during a token or ETH withdrawal?",
    "options": [
      "Using uint256 instead of int256 for tracking balances",
      "Calling an external contract or recipient address before updating internal account balances in storage",
      "Failing to compile with optimization enabled in foundry.toml",
      "Deploying on an EVM chain that does not support the PUSH0 opcode"
    ],
    "answer": 1,
    "explanation": "When an external interaction (such as sending ETH via .call{value: amount}(\"\")) is executed before the user's internal balance is decremented, the recipient's fallback/receive function can recursively call back into withdraw() and repeatedly claim funds against stale storage state."
  },
  {
    "id": 3,
    "question": "How does the Checks-Effects-Interactions (CEI) pattern eliminate single-function reentrancy vulnerabilities?",
    "options": [
      "It forces all external calls to execute inside a delegatecall proxy",
      "It guarantees that internal storage modifications (Effects) occur before any external contract interactions (Interactions) take place",
      "It encrypts the msg.sender address before transferring tokens",
      "It cancels transactions if the recipient contract consumes more than 2,300 gas"
    ],
    "answer": 1,
    "explanation": "Under the CEI pattern, the contract first checks prerequisites (e.g. require(balance >= amount)), immediately updates internal state (balances[msg.sender] -= amount), and only then performs external transfers. Any recursive reentrant call finds a balance of zero."
  },
  {
    "id": 4,
    "question": "Why is using tx.origin for caller authentication (e.g. require(tx.origin == owner)) a severe security flaw?",
    "options": [
      "tx.origin is deprecated and causes an immediate EVM revert in Solidity 0.8+",
      "An attacker can trick the owner into interacting with a malicious contract that calls the target contract, passing the tx.origin check",
      "tx.origin changes every 12 seconds with new Ethereum blocks",
      "tx.origin returns the miner's coinbase address rather than a user address"
    ],
    "answer": 1,
    "explanation": "tx.origin returns the original external account (EOA) that initiated the transaction chain. If the owner interacts with an attacker's phishing contract, that malicious contract can call into the vulnerable contract. Since the transaction originated from the owner, tx.origin == owner evaluates to true."
  },
  {
    "id": 5,
    "question": "In Solidity 0.8.0 and later, what is the default behavior when an arithmetic operation overflows or underflows?",
    "options": [
      "The calculation wraps around silently (e.g., 255 + 1 becomes 0 for uint8)",
      "The EVM transaction automatically reverts with a panic code (0x11)",
      "The contract is paused and owner privileges are revoked",
      "The variable is converted to a dynamic uint256 array"
    ],
    "answer": 1,
    "explanation": "Solidity 0.8.0 introduced native overflow and underflow checks into the compiler. Any arithmetic operation that exceeds the type boundary reverts automatically with Panic(0x11), eliminating the need for SafeMath unless explicitly wrapped in an unchecked block."
  },
  {
    "id": 6,
    "question": "Why can an unbounded for-loop (such as iterating over a dynamic array of all token depositors) result in a Denial of Service (DoS)?",
    "options": [
      "Arrays larger than 100 elements are automatically deleted by the EVM garbage collector",
      "As the array grows, the gas required to iterate through every element exceeds the block gas limit, making the function unexecutable",
      "Solidity loops cannot read storage variables declared outside the function",
      "The compiler enforces a strict 50-iteration limit on all on-chain loops"
    ],
    "answer": 1,
    "explanation": "Every storage read and loop increment consumes gas. If an array grows large enough, the gas cost of executing the loop exceeds the maximum gas limit of an Ethereum block (typically 30M gas). The transaction becomes impossible to mine, permanently freezing the contract function."
  },
  {
    "id": 7,
    "question": "What is the key mechanism behind an MEV sandwich attack on a decentralized exchange?",
    "options": [
      "The attacker steals the victim's private key from the mempool",
      "The attacker front-runs a victim's buy order to inflate the price, allows the victim to buy at the peak, and back-runs by selling for profit",
      "The attacker submits invalid block headers to pause the DEX router",
      "The attacker drains liquidity by calling CREATE2 with identical bytecode"
    ],
    "answer": 1,
    "explanation": "A sandwich attack wraps the victim's pending transaction between two attacker transactions: a front-run buy that pushes the price up to the victim's maximum slippage bound, followed by the victim's execution at the worse price, followed by a back-run sell where the attacker pockets the price difference."
  },
  {
    "id": 8,
    "question": "Why is relying on an instantaneous DEX AMM spot price (e.g., reservesUSDC / reservesETH) as an oracle for lending dangerous?",
    "options": [
      "AMM spot prices update only once every 24 hours",
      "An attacker can temporarily distort AMM pool reserves within a single transaction using a flash loan, manipulating collateral valuation",
      "DEX pairs cannot return prices to contracts with different licenses",
      "AMM spot prices ignore ERC-20 decimal scaling"
    ],
    "answer": 1,
    "explanation": "Because AMM spot prices reflect the immediate ratio of reserves, an attacker can borrow millions in an uncollateralized flash loan, execute a massive swap to drastically manipulate the spot price, exploit the lending contract's inflated collateral valuation, and repay the flash loan in the same atomic block."
  },
  {
    "id": 9,
    "question": "What is the primary role of the domain separator in EIP-712 structured data signing?",
    "options": [
      "It stores the user's ENS domain name on IPFS",
      "It binds the signature to a specific contract address and chain ID, preventing cross-contract and cross-chain replay attacks",
      "It calculates the gas fee required to execute the transaction",
      "It replaces the secp256k1 elliptic curve with RSA-2048"
    ],
    "answer": 1,
    "explanation": "The EIP-712 domain separator incorporates the contract name, version, verifyingContract address, and chainId into the hash. This ensures that a signature signed for a specific protocol on Ethereum cannot be replayed on a fork or on a different contract on Arbitrum."
  },
  {
    "id": 10,
    "question": "What happens when contract A executes a delegatecall to contract B?",
    "options": [
      "Contract B runs in its own storage context and msg.sender is set to contract A",
      "Contract B's code executes in contract A's storage context, with contract A's address(this), and preserving the original msg.sender",
      "Contract A transfers all its ETH reserves to contract B automatically",
      "The EVM pauses all state transitions until contract B emits an event"
    ],
    "answer": 1,
    "explanation": "delegatecall executes the code of target contract B inside the context (storage, balance, address(this)) of calling contract A. Crucially, msg.sender and msg.value remain unchanged from the caller of contract A. If contract B writes to slot 0, it modifies slot 0 of contract A."
  },
  {
    "id": 11,
    "question": "What is a 'storage collision' in upgradeable proxy architectures?",
    "options": [
      "Two validators submitting blocks with the same block number",
      "A proxy and implementation contract assigning different state variables to the same physical storage slot, corrupting state",
      "A hard drive hardware failure on an Ethereum archive node",
      "Deploying two ERC-20 tokens with identical ticker symbols"
    ],
    "answer": 1,
    "explanation": "Because proxy contracts use delegatecall, state variables in the proxy and the implementation must align perfectly in storage slots. If the implementation declares uint256 public fee in slot 0 while the proxy stores address public admin in slot 0, updating fee will overwrite and corrupt the admin address."
  },
  {
    "id": 12,
    "question": "Why should block.timestamp never be used as a source of high-value randomness in on-chain lotteries or games?",
    "options": [
      "Timestamps on Ethereum are frozen at Unix epoch 0",
      "Block proposers (validators) can manipulate block timestamps within acceptable bounds (typically up to ~15 seconds) to favor themselves",
      "Timestamps require off-chain Chainlink automation to be read",
      "Solidity contracts cannot cast uint256 timestamps into pseudorandom numbers"
    ],
    "answer": 1,
    "explanation": "Validators have discretionary control over the exact block.timestamp within consensus limits (a timestamp must be greater than the parent block and within plausible drift). If substantial financial gain is at stake, a validator can selectively adjust the timestamp or withhold blocks to win the lottery."
  },
  {
    "id": 13,
    "question": "What is the primary operational difference between static analysis (e.g. Slither) and fuzz testing (e.g. Foundry)?",
    "options": [
      "Static analysis requires deploying to mainnet; fuzz testing runs locally",
      "Static analysis examines AST code structure without execution; fuzz testing dynamically executes code with thousands of randomized inputs",
      "Static analysis only checks gas usage; fuzz testing only checks access control",
      "Static analysis requires Rust; fuzz testing requires Python"
    ],
    "answer": 1,
    "explanation": "Static analysis tools like Slither parse Solidity Abstract Syntax Trees (AST) and control flow graphs without executing the code, identifying known anti-patterns. Fuzz testing dynamically compiles and executes functions with thousands of pseudo-random edge-case inputs to uncover invariant violations."
  },
  {
    "id": 14,
    "question": "What does a formal verification tool prove about a smart contract?",
    "options": [
      "That the contract has zero gas cost across all functions",
      "Mathematically proves that defined formal specifications and invariants hold across all possible execution states under assumed constraints",
      "Guarantees that the market price of the token will never decrease",
      "Ensures that no reentrancy guard can ever be bypassed by miners"
    ],
    "answer": 1,
    "explanation": "Formal verification translates smart contract logic and user-defined specifications (invariants, pre/postconditions) into mathematical formulas (SMT/First-Order Logic) and uses automated solvers to mathematically prove that the code satisfies the specification in all reachable states."
  },
  {
    "id": 15,
    "question": "In Hoare logic notation {P} C {Q}, what does P represent?",
    "options": [
      "The Protocol fee percentage",
      "The Precondition: a predicate that must hold true before the program command C executes",
      "The Proxy contract implementation address",
      "The Proof-of-Work hash target"
    ],
    "answer": 1,
    "explanation": "In Hoare triples {P} C {Q}, P represents the Precondition (state requirement prior to execution), C is the Command or program operation, and Q represents the Postcondition that is guaranteed to hold true upon successful termination."
  },
  {
    "id": 16,
    "question": "Why is using OpenZeppelin's SafeERC20 library recommended when calling transfer() or transferFrom() on arbitrary ERC-20 tokens?",
    "options": [
      "It speeds up transaction mining by 50%",
      "Some tokens (like USDT) do not return a boolean on transfer, while others return false on failure instead of reverting",
      "It prevents flash loan attacks on the ERC-20 contract",
      "It automatically mints replacement tokens if balances run low"
    ],
    "answer": 1,
    "explanation": "The original ERC-20 specification requires transfer to return a bool. However, several widely used tokens (such as USDT) omit the return value, while others return false rather than reverting on failure. SafeERC20 inspects return data size and decodes the result, reverting if the transfer failed."
  },
  {
    "id": 17,
    "question": "In a security audit report, how is a 'Critical' severity finding defined?",
    "options": [
      "A minor code styling violation that fails linter formatting",
      "A vulnerability that allows direct, unauthorized theft of user funds, protocol insolvency, or permanent loss of contract control with zero prerequisites",
      "A typo in a NatSpec comment",
      "An optimization suggestion that saves 50 gas on deployment"
    ],
    "answer": 1,
    "explanation": "A Critical finding represents a flaw that directly leads to catastrophic protocol compromise\u2014such as unrestricted fund draining, uncollateralized minting, or total loss of administrative ownership\u2014requiring immediate remediation before any deployment."
  },
  {
    "id": 18,
    "question": "What is 'read-only reentrancy' and why is it particularly insidious in DeFi protocols?",
    "options": [
      "An attacker reads private variables using an archive node",
      "A callback reenters during a state-modifying function, reading temporarily inconsistent balances from a view function to exploit a dependent protocol",
      "A reentrancy attack that occurs only when calling pure functions",
      "A bug that disables compiler optimizations for view functions"
    ],
    "answer": 1,
    "explanation": "In read-only reentrancy, the vulnerable contract's view function (e.g. getVirtualPrice()) is called during a transient state before pool reserves are balanced. While the contract itself may not be drained directly, third-party lending protocols relying on that view function get manipulated prices and are exploited."
  },
  {
    "id": 19,
    "question": "What is the primary ethical requirement of responsible vulnerability disclosure in Web3?",
    "options": [
      "Publicly tweet the exploit code immediately to warn all users",
      "Privately notify the project's security team through authorized channels, reproduce in a local fork without exploiting live funds, and allow time for remediation",
      "Drain 10% of protocol funds as an advance on the bug bounty",
      "Sell the exploit to the highest bidder on darknet forums"
    ],
    "answer": 1,
    "explanation": "Responsible disclosure mandates that researchers coordinate privately with the protocol's designated security contacts, test exploits strictly in local or simulated environments without harming live user assets, and refrain from public disclosure until an effective patch has been deployed."
  },
  {
    "id": 20,
    "question": "Why does a clean security audit report not guarantee that a smart contract is 100% bug-free or unhackable?",
    "options": [
      "Auditors do not read Solidity source code",
      "Audits review code against known vulnerabilities at a point in time; novel attack vectors, complex economic conditions, and external dependencies can still emerge",
      "Security audit firms are legally barred from finding critical bugs",
      "Compiler bugs automatically invalidate all human audits"
    ],
    "answer": 1,
    "explanation": "An audit is a time-constrained security assessment evaluating code against established threat models and known attack vectors. It cannot foresee novel 0-day compiler defects, unexpected composability side effects with future protocols, or irrational off-chain market dynamics."
  }
];
const INTERVIEW_QUESTIONS = [
  {
    "id": 1,
    "question": "What is smart contract threat modeling, and what steps should an auditor take before reading a single line of Solidity code?",
    "answer": "Smart contract threat modeling is the systematic identification of protocol assets, trust boundaries, threat actors, and failure modes before code review begins. An auditor should:\n1. Deconstruct Business Logic & Intended Invariants: Read whitepapers and architectural specs to understand what financial properties must never be broken (e.g., total borrows <= collateral power, k never decreases).\n2. Map Assets at Risk: Catalog all stored tokens, user deposits, reward reserves, and administrative privileges.\n3. Identify Threat Actors: Model malicious users, predatory borrowers, compromised admins, malicious ERC-20 tokens, and MEV arbitrageurs.\n4. Map Attack Surfaces & Trust Boundaries: Identify every external/public function, external call, oracle dependency, and privileged role.\n5. Categorize using Frameworks like STRIDE: Evaluate Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.",
    "takeaway": "Threat modeling defines what the protocol must protect and what must never happen before diving into line-by-line syntax."
  },
  {
    "id": 2,
    "question": "Explain the Checks-Effects-Interactions (CEI) design pattern. Why is it fundamental to Solidity security?",
    "answer": "The Checks-Effects-Interactions (CEI) pattern dictates the strict ordering of execution within any state-modifying function:\n1. Checks: Validate all inputs, authorization modifiers, and prerequisites upfront (e.g., require(amount > 0), require(balance[user] >= amount)).\n2. Effects: Update internal storage states immediately (e.g., balance[user] -= amount; totalDeposits -= amount;).\n3. Interactions: Perform calls to external contracts or native asset transfers (e.g., msg.sender.call{value: amount}(\"\")).\nBy mutating storage before interacting with external entities, any malicious contract receiving execution control via a callback sees an already-updated balance (e.g. zero), rendering recursive reentrancy attacks completely ineffective.",
    "takeaway": "Always update internal accounting (Effects) before relinquishing execution control to external untrusted addresses (Interactions)."
  },
  {
    "id": 3,
    "question": "Why is tx.origin dangerous for authorization, and what are legitimate use cases for it?",
    "answer": "tx.origin identifies the original external account (EOA) that signed and initiated the transaction. If contract A validates require(tx.origin == owner), an attacker can deploy contract B with an appealing phishing hook. When the owner calls contract B, contract B immediately invokes vulnerable contract A. Because the transaction originated with the owner, tx.origin == owner evaluates to true, granting the attacker unauthorized control.\n\nLegitimate Use Cases: tx.origin should almost never be used for authorization. Its rare legitimate use is detecting whether the immediate caller is an EOA or a contract: require(msg.sender == tx.origin) ensures the caller is not a contract, though even this pattern breaks account abstraction (ERC-4337) and smart contract wallets (Safe).",
    "takeaway": "Never use tx.origin for access control; always enforce authorization with msg.sender."
  },
  {
    "id": 4,
    "question": "What is the difference between front-running and an MEV sandwich attack?",
    "answer": "Front-running is the act of observing a pending transaction in the public mempool and submitting a competing transaction with a higher priority gas fee (gas price or miner tip) to ensure inclusion ahead of the target transaction (e.g., claiming a liquidated loan or sniping an arbitrage opportunity).\n\nA Sandwich Attack is a specific three-transaction MEV strategy targeting a victim's slippage tolerance:\n1. Front-run: The attacker buys the asset before the victim, driving the price upward to the victim's maximum slippage bound.\n2. Victim Swap: The victim's order executes at the inflated, unfavorable price, pushing the price even higher.\n3. Back-run: The attacker sells their tokens immediately within the same block, locking in a guaranteed profit extracted from the victim.",
    "takeaway": "Front-running executes ahead of a target; a sandwich attack wraps the target between a front-run buy and a back-run sell."
  },
  {
    "id": 5,
    "question": "Why is an AMM spot price unsafe as an oracle for a lending protocol, and how should oracles be architected?",
    "answer": "An AMM spot price (e.g. Uniswap V2 reserve ratio y / x) represents the price of an asset at an instantaneous moment. Because flash loans allow borrowing tens of millions of dollars with zero upfront collateral within an atomic transaction, an attacker can execute a massive swap, drastically skew the AMM reserves, inflate their collateral valuation in a dependent lending protocol, borrow liquid assets, and reverse the swap in the same transaction, leaving the protocol with unbacked bad debt.\n\nSecure Oracle Architecture:\n1. Decentralized Off-Chain Aggregators: Use Chainlink price feeds aggregating volume-weighted median prices across dozens of institutional exchanges.\n2. Time-Weighted Average Prices (TWAP): If using AMM pricing, calculate TWAP over multi-hour observation windows to make price distortion prohibitively expensive.\n3. Freshness & Staleness Checks: Enforce require(block.timestamp - updatedAt <= HEARTBEAT) and require(price > 0).",
    "takeaway": "Instantaneous AMM spot prices are easily distorted in atomic flash loans; robust lending protocols require decentralized aggregators or multi-hour TWAPs."
  },
  {
    "id": 6,
    "question": "Explain signature replay attacks and describe the defense mechanisms provided by EIP-712.",
    "answer": "A signature replay attack occurs when a cryptographic signature validly generated by an account is intercepted and reused in an unauthorized context\u2014either repeated multiple times on the same contract, or executed on a different contract or different blockchain network.\n\nDefenses:\n1. Account Nonces: Associate each user with a mapping(address => uint256) nonces. Enforce require(providedNonce == nonces[signer]++) to ensure each signature can only be consumed exactly once.\n2. Expiration Deadlines: Include require(block.timestamp <= deadline) in the signed payload.\n3. EIP-712 Structured Domain Separator: Hashes a standard domain struct containing the application name, version, verifyingContract address, and chainId. This cryptographically binds the signature to a specific deployed contract on a specific EVM network, preventing cross-contract and cross-chain replay.",
    "takeaway": "Defend against signature replays using incremental user nonces, strict deadlines, and EIP-712 domain separators."
  },
  {
    "id": 7,
    "question": "What is a storage collision in an upgradeable proxy pattern, and how does EIP-1967 resolve it?",
    "answer": "In upgradeable proxies, the proxy contract delegates all execution to an implementation contract via delegatecall. Because delegatecall operates entirely within the storage of the proxy, both contracts share the same storage slot layout. If the proxy declares address private admin at slot 0 and the implementation declares uint256 public balance at slot 0, updating balance in the implementation overwrites and corrupts the admin address in the proxy.\n\nEIP-1967 Resolution:\nEIP-1967 eliminates storage collisions by defining standard storage slots located at predictable, pseudorandom 32-byte hashes far outside normal variable allocations (e.g., bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1)). The proxy stores implementation, admin, and beacon addresses in these isolated slots, keeping sequential slots (0, 1, 2...) completely free for the implementation contract.",
    "takeaway": "Storage collisions occur when proxy and implementation variables share identical slots; EIP-1967 resolves this using deterministic high-entropy storage slots."
  },
  {
    "id": 8,
    "question": "Compare Static Analysis, Fuzz Testing, and Formal Verification in terms of trade-offs, guarantees, and false positives.",
    "answer": "1. Static Analysis (e.g. Slither):\n- Mechanism: Parses ASTs and Control Flow Graphs without executing code.\n- Strengths: Blazing fast, catches common coding mistakes, missing modifiers, reentrancy patterns.\n- Weaknesses: High rate of false positives; blind to complex economic logic and external market conditions.\n\n2. Fuzz Testing (e.g. Foundry testFuzz / Echidna):\n- Mechanism: Dynamically executes compiled bytecode with thousands of randomized, edge-case inputs.\n- Strengths: Discovers unexpected edge cases, arithmetic boundaries, and concrete invariant violations with zero false positives (any failure is reproducible).\n- Weaknesses: Cannot test all possible inputs (incomplete coverage); requires writing robust property tests.\n\n3. Formal Verification (e.g. Certora / SMTChecker):\n- Mechanism: Mathematically proves that code satisfies formal specifications across all possible states.\n- Strengths: Absolute mathematical certainty under stated assumptions.\n- Weaknesses: Extremely high engineering effort to write specifications; only proves what is explicitly specified.",
    "takeaway": "Static analysis gives fast shallow checks; fuzz testing finds concrete dynamic edge cases; formal verification provides mathematical proofs of specifications."
  },
  {
    "id": 9,
    "question": "What is a protocol invariant, and why is invariant testing superior to standard unit testing?",
    "answer": "A protocol invariant is a core mathematical or structural condition that must unconditionally hold true across every possible sequence of valid transactions and state transitions (e.g., 'total assets deposited must equal sum of user balances', 'a healthy loan cannot be liquidated', 'reserve product x * y >= k').\n\nSuperiority of Invariant Testing:\nStandard unit tests evaluate linear, deterministic execution (e.g., Alice deposits 10, Alice withdraws 10). They test only what the developer anticipated. In contrast, invariant testing (fuzzing) executes hundreds of randomly ordered, parameterized transactions across multiple simulated actors (e.g., Actor A deposits, Actor B borrows, Actor C donates, Actor A partially withdraws) and verifies after every single call that the invariant remains unviolated. This exposes complex race conditions and state desynchronizations.",
    "takeaway": "Invariants define non-negotiable truths; invariant testing checks those truths across chaotic, randomized multi-actor transaction sequences."
  },
  {
    "id": 10,
    "question": "Why does a successful security audit not guarantee that a smart contract system is 100% secure?",
    "answer": "A smart contract audit is a professional, time-constrained assessment by security researchers evaluating code against known vulnerabilities, established attack patterns, and documented specifications. It is not an insurance policy or a mathematical proof of absolute security because:\n1. Point-in-Time Review: The audit only covers the exact commit hash reviewed; subsequent updates or deployment script misconfigurations can introduce flaws.\n2. Composability & External Shifts: The surrounding DeFi ecosystem evolves; a token that behaved normally may upgrade to fee-on-transfer or pause functionality, breaking assumptions.\n3. Novel Attack Vectors: Attack techniques advance continuously (e.g., flash loans and read-only reentrancy were once unknown).\n4. Economic & Incentive Exploits: Code may execute flawlessly according to specification while failing under rational, predatory economic manipulation.",
    "takeaway": "Audits assess known risks at a specific moment; continuous defense-in-depth, monitoring, bug bounties, and emergency pause mechanisms remain essential."
  },
  {
    "id": 11,
    "question": "Explain read-only reentrancy and provide an example scenario where it causes protocol insolvency.",
    "answer": "Read-only reentrancy occurs when a contract's view function (which modifies no state and therefore lacks a nonReentrant modifier) is queried during an intermediate, transient state when another state-changing function in the same protocol is partially executed.\n\nScenario (Curve LP Pool & Dependent Lending Protocol):\n1. An attacker calls remove_liquidity_one_coin() on a Curve pool.\n2. The Curve pool burns the attacker's LP tokens and sends ETH to the attacker via an external transfer.\n3. The attacker's fallback function receives execution control before Curve synchronizes its internal pool balances.\n4. During the fallback, the attacker calls into an external Lending Protocol that queries Curve's get_virtual_price() view function to value collateral.\n5. Because the Curve reserves have decreased while accounting is in mid-transition, get_virtual_price() reports an artificially inflated value.\n6. The attacker borrows massive capital against the inflated valuation and finishes the transaction. Both Curve and the lending market suffer severe bad debt.",
    "takeaway": "Read-only reentrancy exploits view functions reporting transient, inconsistent state to third-party dependent protocols during external transfers."
  },
  {
    "id": 12,
    "question": "What is the difference between single-function, cross-function, and cross-contract reentrancy?",
    "answer": "1. Single-Function Reentrancy: The caller reenters the exact same function that triggered the external interaction before state is updated (e.g. calling withdraw() recursively).\n2. Cross-Function Reentrancy: The contract protects withdraw() with a lock, but contains another function (e.g. transfer() or depositCollateral()) that reads the stale balance variable. The attacker reenters through the unprotected function to transfer or borrow against the balance before withdraw() zeroes it.\n3. Cross-Contract Reentrancy: State is shared or synchronized between two separate smart contracts (e.g. a Vault and an Accounting Registry). Contract A updates state and calls external code; the callback invokes Contract B which reads inconsistent state from Contract A before Contract A finalizes its update.",
    "takeaway": "Reentrancy is not limited to calling the same function; it can manipulate state across sibling functions or cooperating contracts."
  },
  {
    "id": 13,
    "question": "How do you defend against Denial of Service (DoS) attacks caused by external call failures?",
    "answer": "When distributing funds or processing refunds, never loop through an array of addresses making external transfers (push payments). If a single recipient is a smart contract that lacks a receive() function or intentionally reverts, the entire transaction reverts, blocking all other users indefinitely.\n\nDefense \u2014 Pull over Push:\nInstead of pushing funds to users, record their claimable amounts in a storage mapping: rewards[user] += amount. Provide an isolated claimReward() or withdraw() function that allows each user to claim their own funds in a standalone transaction. If an individual recipient's transfer fails, it impacts only themselves and cannot hold the protocol hostage.",
    "takeaway": "Adopt pull-over-push accounting so that one recipient's revert cannot paralyze distribution to other participants."
  },
  {
    "id": 14,
    "question": "Why is precision loss dangerous in Solidity financial contracts, and what is the rule of thumb for multiplication and division?",
    "answer": "Solidity does not support floating-point numbers; all division truncates towards zero (e.g., 3 / 2 = 1, and 999 / 1000 = 0). If division is executed before multiplication, significant value is rounded down to zero.\n\nRule of Thumb: Always multiply before dividing!\n- Dangerous: uint256 fee = (amount / 1000) * feeRate; (if amount < 1000, amount / 1000 evaluates to 0, resulting in zero fee charged).\n- Secure: uint256 fee = (amount * feeRate) / 1000;\n\nIn share-based vaults (ERC-4626), precision truncation can allow the first depositor to perform a share inflation exploit by depositing 1 wei and donating large reserves. Defense: Mint dead shares (e.g., 1000 wei) to address(0) during initialization.",
    "takeaway": "Always multiply before dividing to minimize truncation error; protect share calculations with virtual offsets or burned initial liquidity."
  },
  {
    "id": 15,
    "question": "What are the security implications of using OpenZeppelin's Initializable pattern in upgradeable contracts?",
    "answer": "Upgradeable proxy patterns cannot use Solidity constructors for state initialization because constructors execute only once during implementation deployment and write to implementation storage, not proxy storage. Proxies use regular functions marked initializer.\n\nSecurity Implications:\n1. Uninitialized Implementations: If the logic/implementation contract itself is deployed but its initializer is left uncalled, an attacker can call initialize() on the logic contract directly, becoming its owner and potentially calling selfdestruct (in older EVM versions) or manipulating unshielded state. Defense: Call _disableInitializers() inside the implementation constructor.\n2. Re-initialization Attacks: Failing to guard the initializer with the initializer modifier allows attackers to re-initialize the proxy and claim ownership.\n3. Storage Layout Changes: Modifying the order or types of inherited initializers across upgrades can shift storage slot offsets.",
    "takeaway": "Protect upgradeable contracts by disabling initializers on implementation contracts and locking proxy initialization functions."
  },
  {
    "id": 16,
    "question": "How does Chainlink VRF guarantee verifiable randomness on Ethereum?",
    "answer": "Chainlink VRF (Verifiable Random Function) uses public-key cryptography to generate unpredictable randomness that is verifiably tamper-proof on-chain:\n1. Request Phase: The consumer contract calls requestRandomWords(), emitting an event with a unique request ID and paying LINK fees.\n2. Off-Chain Generation: An off-chain Chainlink oracle node detects the request, takes the block hash, key hash, and contract nonce as seed inputs, and generates a random number alongside a cryptographic proof using its private key.\n3. Callback & Verification: The oracle submits a transaction back to the VRFCoordinator calling fulfillRandomWords(requestId, randomWords). The coordinator contract verifies the cryptographic proof on-chain against the oracle's public key before delivering the random words to the consumer contract. If the proof is invalid or manipulated, the transaction reverts.",
    "takeaway": "Chainlink VRF generates off-chain randomness accompanied by an on-chain verifiable cryptographic proof, preventing validator manipulation."
  },
  {
    "id": 17,
    "question": "What is an unchecked block in Solidity 0.8+, and when is it safe to use?",
    "answer": "The unchecked block disables automatic compiler overflow and underflow checks for all arithmetic expressions enclosed within it. When an operation inside unchecked overflows or underflows, it wraps silently instead of reverting.\n\nGas vs Safety Trade-Off: Each arithmetic check in Solidity 0.8+ costs approximately 20-40 gas. Using unchecked saves gas in tight loops.\n\nWhen is it safe?\nIt is safe ONLY when the developer has mathematically proven that an overflow or underflow is physically impossible under all circumstances. Common valid example: for-loop increments:\nfor (uint256 i = 0; i < length; ) {\n  // loop logic\n  unchecked { ++i; }\n}\nBecause i cannot exceed length (which is bounded by memory/calldata size), ++i cannot overflow. Using unchecked for financial transfers or balance subtractions without prior validation is a severe security vulnerability.",
    "takeaway": "Use unchecked exclusively when mathematical impossibility of overflow/underflow is rigorously proven, such as loop counter increments."
  },
  {
    "id": 18,
    "question": "What is the difference between a private bug bounty program and public contest auditing (e.g. Code4rena, Sherlock)?",
    "answer": "1. Public Contest Auditing (Code4rena, Sherlock, Cantina):\n- Timing: Pre-deployment.\n- Structure: Time-boxed (typically 7-14 days) open competition where hundreds of independent auditors review the codebase simultaneously.\n- Payout: Reward pool is distributed among researchers based on severity and uniqueness of verified findings. Highly effective for surfacing diverse attack perspectives.\n\n2. Private Bug Bounty Program (Immunefi, HackerOne):\n- Timing: Post-deployment on live mainnet.\n- Structure: Continuous standing program with predefined maximum rewards (often up to $1M - $10M for Critical vulnerabilities threatening live TVL).\n- Payout: Paid per individual responsible disclosure according to actual impact on deployed contracts.",
    "takeaway": "Contests provide intensive pre-deployment crowd auditing; bug bounties offer continuous post-deployment incentives for responsible disclosure on live mainnets."
  },
  {
    "id": 19,
    "question": "Explain how fee-on-transfer tokens and rebasing tokens break standard DeFi accounting assumptions.",
    "answer": "Standard DeFi protocols assume that when transferFrom(sender, recipient, 100) is executed, the recipient's balance increases by exactly 100.\n\n1. Fee-on-Transfer Tokens: Certain tokens deduct a tax (e.g. 2%) upon transfer. If a vault records balance[user] += 100 based on the input parameter, but actually receives only 98 tokens, the vault becomes insolvent over time. Defense: Measure balance delta directly: uint256 before = token.balanceOf(address(this)); token.safeTransferFrom(...); uint256 received = token.balanceOf(address(this)) - before; balance[user] += received;\n\n2. Rebasing Tokens: Tokens like stETH or AMPL adjust user balances dynamically without transactions. If a pool caches deposited amounts in a static variable, the recorded deposit diverges from true holdings as rebases occur.",
    "takeaway": "Never trust input amount parameters for accounting; measure actual balance deltas to support fee-on-transfer and non-standard tokens."
  },
  {
    "id": 20,
    "question": "What is the role of an emergency pause mechanism in DeFi protocols, and how should it be governed?",
    "answer": "An emergency pause mechanism (e.g., OpenZeppelin Pausable) allows authorized roles to halt sensitive protocol operations (deposits, borrows, swaps, liquidations) in the event of an active exploit, critical vulnerability discovery, or abnormal oracle failure.\n\nGovernance & Security Best Practices:\n1. Granular Pausing: Avoid a monolithic 'pause-everything' switch. Allow pausing specific risky markets or functions while leaving withdrawals or repayments operational where safe.\n2. Role Segregation: Grant pausing rights to an emergency security council multisig or automated monitoring bots for rapid response (minutes), but require a decentralized governance timelock to unpause.\n3. Anti-Censorship Safeguards: Ensure that emergency pause privileges cannot be used by malicious administrators to permanently seize or confiscate user deposits.",
    "takeaway": "Emergency pauses allow rapid response during active exploits; govern them with security multisigs for pausing and timelocked governance for unpausing."
  },
  {
    "id": 21,
    "question": "How do you systematically triage Slither static analysis findings to eliminate false positives?",
    "answer": "Slither scans code using automated heuristic detectors, producing findings from High to Informational. To triage:\n1. Check Reachability: Determine whether the flagged function is externally callable (public/external) or dead internal code.\n2. Trace Data Flow & State Constraints: For reentrancy alerts (reentrancy-eth), check whether state is modified after the call and whether that state can be exploited or if it is protected by nonReentrant or mutexes.\n3. Verify Asset Custody: If an access control detector flags an unprotected function, check whether the function handles financial transfers or modifies critical parameters.\n4. Confirm with Reproduction Test: If an issue appears genuine, write a minimal Foundry test to confirm whether an attacker can trigger the condition.\n5. Document False Positives: Mark benign findings with slither-disable-next-line comments and provide architectural justification.",
    "takeaway": "Triage Slither findings by verifying external reachability, state impact, and asset risk, confirming valid issues with Foundry reproduction tests."
  },
  {
    "id": 22,
    "question": "Explain the difference between call, delegatecall, and staticcall at the EVM opcode level.",
    "answer": "1. call (0xF1): Switches execution to the target contract code in the target contract's storage context. Transfers gas and optional native ETH value. Sets address(this) to the target and msg.sender to the caller.\n2. delegatecall (0xF4): Executes the target contract's code inside the CALLER'S storage context, with caller's address(this), caller's balance, and preserving the original msg.sender and msg.value. Cannot transfer native ETH.\n3. staticcall (0xFA): Identical to call, but strictly enforces that no state modifications (SSTORE, CREATE, LOG, selfdestruct) can occur during the execution sub-context. If the target attempts to alter storage, the EVM immediately reverts.",
    "takeaway": "call runs target code in target storage; delegatecall runs target code in caller storage; staticcall executes target code with read-only state enforcement."
  },
  {
    "id": 23,
    "question": "What is an ERC-4626 inflation attack, and how is it mitigated?",
    "answer": "In ERC-4626 tokenized vaults, shares are minted based on the ratio of assets to total shares: shares = (assets * totalShares) / totalAssets.\n\nAttack Flow (First Depositor Inflation):\n1. An attacker deposits 1 wei of assets to receive 1 wei of shares (totalShares = 1, totalAssets = 1).\n2. The attacker directly transfers (donates) 1,000,000 USDC to the vault contract without minting shares.\n3. Now totalAssets = 1,000,001 USDC and totalShares = 1. Each 1 share is worth ~1,000,001 USDC.\n4. A victim deposits 1,500,000 USDC. Due to integer division: shares = (1,500,000 * 1) / 1,000,001 = 1 share.\n5. The remaining 499,999 USDC is rounded down and lost to the victim, diluted into the attacker's 1 share.\n\nMitigation: Enforce virtual offsets (OpenZeppelin ERC4626 uses 10^decimals virtual shares/assets) or permanently burn the first 1,000 wei of shares to address(0).",
    "takeaway": "First-depositor inflation exploits integer division truncation via asset donations; mitigate with virtual shares/assets or burning initial shares."
  },
  {
    "id": 24,
    "question": "How do you test and verify smart contract upgradeability using Foundry and Slither?",
    "answer": "1. Storage Layout Verification: Run slither-check-upgradeability to compare the storage layouts of Version 1 and Version 2 implementation contracts, verifying that variable order, types, and slot assignments remain 100% identical and that new variables are appended strictly at the end.\n2. Foundry Fork Testing: In a Foundry test, deploy the V1 proxy, populate it with realistic user deposits and state, execute the upgradeTo(v2Address) call from the authorized governance multisig, and assert that all user balances, debt mappings, and contract permissions remain preserved.\n3. Re-initialization & Access Tests: Test that re-calling initialize() on the upgraded proxy reverts, and verify that unauthorized callers cannot trigger upgradeTo.",
    "takeaway": "Verify storage layouts with Slither's check-upgradeability and execute end-to-end upgrade simulation tests in Foundry preserving existing state."
  },
  {
    "id": 25,
    "question": "What should be included in a professional vulnerability finding description in an audit report?",
    "answer": "A production-grade audit finding must provide clear, actionable technical evidence across eleven structured fields:\n1. Finding Identifier (e.g. AUD-001, SEC-HIGH-01).\n2. Descriptive Title (e.g., 'Unprotected Ownership Transfer in changeOwner()').\n3. Severity Rating (Critical, High, Medium, Low, or Informational) justified by Likelihood and Impact.\n4. Affected Files & Functions (e.g., VulnerableVault.sol :: changeOwner()).\n5. Vulnerability Description: Detailed narrative explaining the defect.\n6. Root Cause: Exact architectural or syntax cause (e.g., missing onlyOwner modifier).\n7. Impact: Concrete financial or operational consequence (e.g., complete loss of protocol administration).\n8. Proof of Concept (PoC): Reproducible Foundry test code demonstrating the exploit.\n9. Recommended Remediation: Code diff or precise engineering guidance.\n10. Developer Response / Fix Commit.\n11. Auditor Retest Status (Resolved, Partially Resolved, Acknowledged).",
    "takeaway": "An audit finding must clearly state severity, root cause, concrete impact, a reproducible PoC test, and specific remediation code diffs."
  }
];
const AUDIT_FINDINGS = [
  {
    "id": "AUD-001",
    "title": "Missing Access Control in Ownership Transfer",
    "severity": "High",
    "contract": "VulnerableVault.sol",
    "function": "changeOwner(address newOwner)",
    "description": "The changeOwner() function lacks any authorization check or caller validation. Any external account can invoke this function and overwrite the contract owner address with their own address.",
    "root_cause": "Missing onlyOwner modifier and absence of zero-address validation.",
    "impact": "An unauthorized attacker can take complete administrative control of the vault, allowing them to execute any privileged functions.",
    "poc": "vm.prank(attacker); vault.changeOwner(attacker); assertEq(vault.owner(), attacker);",
    "recommendation": "Add an onlyOwner modifier to restrict execution to the current owner, validate that newOwner != address(0), and consider implementing a two-step ownership transfer pattern (Ownable2Step).",
    "status": "Fixed & Retested"
  },
  {
    "id": "AUD-002",
    "title": "Reentrancy in Withdrawal Function",
    "severity": "High",
    "contract": "VulnerableReentrancyVault.sol",
    "function": "withdraw()",
    "description": "The withdraw() function transfers native ETH to the caller via an external call before updating the caller's recorded balance in storage. A malicious recipient contract can reenter withdraw() from its receive() or fallback() function, repeatedly draining funds against stale balance state.",
    "root_cause": "Violation of the Checks-Effects-Interactions (CEI) pattern by performing external interactions before state mutations.",
    "impact": "An attacker with a small initial deposit can recursively drain the entire ETH liquidity held by the vault.",
    "poc": "Attacker contract calls withdraw(); receive() callback triggers vault.withdraw() recursively until vault balance is exhausted.",
    "recommendation": "Update internal state before making the external call (balances[msg.sender] = 0;) and apply OpenZeppelin's nonReentrant modifier as defense-in-depth.",
    "status": "Fixed & Retested"
  },
  {
    "id": "AUD-003",
    "title": "Collateral Withdrawal Without Debt Validation",
    "severity": "High",
    "contract": "VulnerableLending.sol",
    "function": "withdrawCollateral(uint256 amount)",
    "description": "The withdrawCollateral() function decrements a user's collateral balance without checking their outstanding debt or evaluating the post-withdrawal Health Factor. A user can deposit collateral, borrow maximum funds, and immediately withdraw all collateral.",
    "root_cause": "Missing solvency and debt validation checks prior to collateral release.",
    "impact": "Borrowers can walk away with borrowed assets while reclaiming their collateral, leaving the lending pool with 100% unbacked bad debt and protocol insolvency.",
    "poc": "User deposits 10 ETH, borrows 7.5 ETH worth of tokens, calls withdrawCollateral(10 ether), leaving debt = 7.5 with collateral = 0.",
    "recommendation": "Calculate the user's remaining borrowing capacity based on post-withdrawal collateral and require that outstanding debt does not exceed the new capacity (or Health Factor >= 1.0).",
    "status": "Fixed & Retested"
  }
];

export default function BlockchainSecurityAuditing() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Reentrancy & CEI Call Stack Sandbox
  const [reentrancyMode, setReentrancyMode] = useState("vulnerable");
  const [reentrancyStep, setReentrancyStep] = useState(0);
  const [simVaultBalance, setSimVaultBalance] = useState(10.0);
  const [simAttackerBalance, setSimAttackerBalance] = useState(1.0);
  const [simAttackerRecordedBalance, setSimAttackerRecordedBalance] = useState(1.0);
  const [reentrancyStack, setReentrancyStack] = useState([]);
  const [reentrancyFinished, setReentrancyFinished] = useState(false);

  const handleResetReentrancy = useCallback(() => {
    setReentrancyStep(0);
    setSimVaultBalance(10.0);
    setSimAttackerBalance(1.0);
    setSimAttackerRecordedBalance(1.0);
    setReentrancyStack([]);
    setReentrancyFinished(false);
  }, []);

  const handleStepReentrancy = useCallback(() => {
    if (reentrancyFinished) return;

    if (reentrancyMode === "secure") {
      // Secure mode: CEI sets balance to 0 first, reentrancy fails immediately
      if (reentrancyStep === 0) {
        setSimAttackerRecordedBalance(0);
        setReentrancyStack([
          {
            type: "normal",
            action: "withdraw() invoked by Attacker",
            caller: "Attacker",
            target: "Vault",
            detail: "Checks passed (balance == 1.0 ETH). Effect: balances[attacker] set to 0."
          },
          {
            type: "normal",
            action: "External transfer: 1.0 ETH to Attacker",
            caller: "Vault",
            target: "Attacker.receive()",
            detail: "Interaction executed after storage update."
          }
        ]);
        setSimVaultBalance(9.0);
        setSimAttackerBalance(2.0);
        setReentrancyStep(1);
      } else if (reentrancyStep === 1) {
        // Attacker callback tries to reenter
        setReentrancyStack((prev) => [
          ...prev,
          {
            type: "revert",
            action: "Attacker.receive() attempts recursive withdraw()",
            caller: "Attacker",
            target: "Vault",
            detail: "REVERT: require(balances[msg.sender] > 0) failed! (Balance is 0). ReentrancyGuard also active."
          }
        ]);
        setReentrancyFinished(true);
      }
    } else {
      // Vulnerable mode: transfers ETH before updating balance
      const nextStep = reentrancyStep + 1;
      setReentrancyStep(nextStep);

      if (simVaultBalance > 0) {
        setSimVaultBalance((prev) => Math.max(0, prev - 1.0));
        setSimAttackerBalance((prev) => prev + 1.0);
        setReentrancyStack((prev) => [
          ...prev,
          {
            type: "exploit",
            action: `Frame #${nextStep}: Recursive withdraw() loop`,
            caller: "Attacker.fallback()",
            target: "Vault.withdraw()",
            detail: `Vault sent 1.0 ETH. Stored balance still shows ${simAttackerRecordedBalance} ETH because balance update line is deferred!`
          }
        ]);

        if (simVaultBalance <= 1.0) {
          setReentrancyFinished(true);
        }
      }
    }
  }, [reentrancyFinished, reentrancyMode, reentrancyStep, simVaultBalance, simAttackerRecordedBalance]);

  // Simulator 2 State: Flash Loan Price Manipulation
  const [flashLoanAmount, setFlashLoanAmount] = useState(10000000); // 10M
  const [ammDepth, setAmmDepth] = useState(2000000); // 2M
  const [oracleType, setOracleType] = useState("spot");

  const calculatedFlashAttack = useMemo(() => {
    const loanFee = flashLoanAmount * 0.0005; // 0.05%
    // Price spike is a function of trade size relative to pool depth
    const priceRatio = 1 + (flashLoanAmount / ammDepth) * 0.5;
    const basePrice = 10.0;
    
    let reportedPrice = basePrice;
    let priceSpikePct = 0;

    if (oracleType === "spot") {
      reportedPrice = basePrice * priceRatio;
      priceSpikePct = (priceRatio - 1) * 100;
    } else {
      // 1-Hour Chainlink TWAP dampens instantaneous spike to ~1.5%
      reportedPrice = basePrice * 1.015;
      priceSpikePct = 1.5;
    }

    // Attacker deposits 100,000 units of asset as collateral
    const collateralUnits = 100000;
    const collateralValuation = collateralUnits * reportedPrice;
    // 75% LTV borrowing
    const debtExtracted = collateralValuation * 0.75;
    
    // Net profit = debtExtracted - originalCollateralCost - flashLoanFee
    const collateralCost = collateralUnits * basePrice;
    let netProfit = 0;
    if (oracleType === "spot") {
      netProfit = Math.max(0, debtExtracted - collateralCost - loanFee);
    } else {
      netProfit = debtExtracted - collateralCost - loanFee; // Negative profit
    }

    return {
      priceSpikePct,
      reportedPrice,
      debtExtracted,
      netProfit
    };
  }, [flashLoanAmount, ammDepth, oracleType]);

  // Simulator 3 State: Proxy Storage Collision
  const [proxyStorageMode, setProxyStorageMode] = useState("unstructured");
  const [simLogicVariable, setSimLogicVariable] = useState(5);

  // Simulator 4 State: Slither & Invariant Terminal
  const [auditTargetContract, setAuditTargetContract] = useState("VulnerableVault.sol");
  const [auditScanExecuted, setAuditScanExecuted] = useState(false);
  const [auditRemediationApplied, setAuditRemediationApplied] = useState(false);

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

  // Audit Findings
  const auditFindings = AUDIT_FINDINGS;

  // Checklist State
  const checklistItems = CHECKLIST_ITEMS;
  const [completedObjectives, setCompletedObjectives] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m18_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m18_progress",
        JSON.stringify(completedObjectives)
      );
    } catch {
      // Ignore write errors
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
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-amber-200 overflow-x-hidden">
      <ModuleNav track="blockchain" currentModuleId="security-auditing" />
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
            <span>Module 18 · Smart Contract Security</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 space-y-8 sm:space-y-10">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Cpu className="w-3.5 h-3.5" />
            <span>ADVANCED BLOCKCHAIN ENGINEERING • SOLIDITY SECURITY & AUDITING TRACK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 18 — Blockchain Security & Smart Contract Auditing
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-grade study of smart contract auditing, vulnerability exploitation, threat modeling, and formal verification. Dissect classic and novel attack vectors—reentrancy, flash loan oracle manipulation, delegatecall storage collisions, and arithmetic precision errors—and produce professional security audit reports.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            
      {/* ============================================================== */}
      {/* 4 LIVE INTERACTIVE SECURITY SIMULATORS                         */}
      {/* ============================================================== */}
      <section className="mt-14 space-y-12">
        <div className="border-b border-[#e7e3da] pb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Activity className="w-4 h-4" />
            <span>Interactive Security Laboratory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
            Smart Contract Exploit & Defense Sandboxes
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Simulate real EVM attack vectors in an isolated sandbox: step through recursive reentrancy call stacks, model flash loan price distortion, inspect proxy storage collisions, and execute automated static analysis and invariant fuzzing runs.
          </p>
        </div>

        {/* SIMULATOR 1: REENTRANCY CALL STACK SANDBOX */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Simulator 01
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">
                Reentrancy Exploit & Checks-Effects-Interactions (CEI) Sandbox
              </h3>
              <p className="text-xs text-neutral-500">
                Visualize recursive EVM execution frames and compare vulnerable execution against CEI and ReentrancyGuard defenses.
              </p>
            </div>
            <div className="flex items-center bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                onClick={() => { setReentrancyMode("vulnerable"); setReentrancyStep(0); }}
                className={`px-3 py-1.5 rounded-lg transition ${
                  reentrancyMode === "vulnerable"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Vulnerable Pattern
              </button>
              <button
                onClick={() => { setReentrancyMode("secure"); setReentrancyStep(0); }}
                className={`px-3 py-1.5 rounded-lg transition ${
                  reentrancyMode === "secure"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Secure (CEI + Guard)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls & Balances */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                  <span className="text-xs text-neutral-500 font-medium">Vault ETH Balance</span>
                  <div className="mt-1 text-lg font-mono font-bold text-neutral-900">
                    {simVaultBalance.toFixed(1)} ETH
                  </div>
                  <span className="text-[10px] text-neutral-400">Victim Contract</span>
                </div>
                <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                  <span className="text-xs text-neutral-500 font-medium">Attacker Wallet</span>
                  <div className="mt-1 text-lg font-mono font-bold text-rose-700">
                    {simAttackerBalance.toFixed(1)} ETH
                  </div>
                  <span className="text-[10px] text-neutral-400">Exploit Contract</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-neutral-900">Recorded Attacker Balance:</span>
                  <span className="font-mono font-bold text-neutral-800">{simAttackerRecordedBalance.toFixed(1)} ETH</span>
                </div>
                <div className="text-[11px] text-neutral-600">
                  {reentrancyMode === "vulnerable" ? (
                    <span className="text-rose-800">
                      <strong>Flaw:</strong> Vault transfers ETH <em>before</em> setting recorded balance to 0!
                    </span>
                  ) : (
                    <span className="text-emerald-800">
                      <strong>Protected:</strong> Vault sets balance to 0 <em>before</em> external interaction.
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleStepReentrancy}
                  disabled={reentrancyFinished}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-sm ${
                    reentrancyFinished
                      ? "bg-neutral-400 cursor-not-allowed"
                      : reentrancyMode === "vulnerable"
                      ? "bg-rose-600 hover:bg-rose-700"
                      : "bg-emerald-600 hover:bg-emerald-700"
                  }`}
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  {reentrancyFinished ? "Exploit Sequence Complete" : `Step Execution Frame (${reentrancyStep + 1})`}
                </button>
                <button
                  onClick={handleResetReentrancy}
                  className="py-2.5 px-3 rounded-xl border border-[#e7e3da] bg-white hover:bg-[#f6f4ee] text-xs font-bold text-neutral-700"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Right Execution Frames Trace */}
            <div className="lg:col-span-7 bg-[#f6f4ee] p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
                  <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">
                    EVM Recursive Call Stack Trace
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-500">
                    Depth: {reentrancyStack.length}
                  </span>
                </div>

                <div className="mt-4 space-y-2 font-mono text-xs max-h-56 overflow-y-auto">
                  {reentrancyStack.length === 0 ? (
                    <div className="text-neutral-500 text-center py-6 italic font-sans text-xs">
                      Click "Step Execution Frame" to trigger the withdrawal sequence and observe call stack recursion.
                    </div>
                  ) : (
                    reentrancyStack.map((frame, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg border text-[11px] leading-relaxed ${
                          frame.type === "revert"
                            ? "bg-emerald-100/70 border-emerald-300 text-emerald-950 font-bold"
                            : frame.type === "exploit"
                            ? "bg-rose-100/70 border-rose-300 text-rose-950"
                            : "bg-white border-[#e7e3da] text-neutral-800"
                        }`}
                      >
                        <div className="flex justify-between items-center font-bold">
                          <span>Frame #{idx}: {frame.action}</span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/70">
                            {frame.caller} &rarr; {frame.target}
                          </span>
                        </div>
                        <div className="mt-1 text-[10px] text-neutral-600 font-sans">
                          {frame.detail}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-4 p-2.5 bg-white rounded-lg border border-[#e7e3da] text-[11px] text-neutral-600">
                <strong>EVM Principle:</strong> In the vulnerable pattern, external call returns control to attacker fallback function while <code>balances[attacker]</code> is still positive, enabling recursive drain.
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATOR 2: FLASH LOAN PRICE MANIPULATION */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="border-b border-[#e7e3da] pb-4 mb-6">
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Simulator 02
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Flash Loan Oracle Manipulation & Bad Debt Simulation
            </h3>
            <p className="text-xs text-neutral-500">
              Simulate uncollateralized flash loan capital distorting low-liquidity AMM spot prices to exploit lending protocol collateral valuations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-neutral-700">Flash Loan Borrow Amount:</span>
                  <span className="font-mono font-bold text-amber-900">
                    ${(flashLoanAmount / 1e6).toFixed(1)}M USDC
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="1000000"
                  value={flashLoanAmount}
                  onChange={(e) => setFlashLoanAmount(parseFloat(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-neutral-700">Target AMM Pool Depth</label>
                  <select
                    value={ammDepth}
                    onChange={(e) => setAmmDepth(parseFloat(e.target.value))}
                    className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                  >
                    <option value="2000000">Shallow ($2M Reserves)</option>
                    <option value="10000000">Medium ($10M Reserves)</option>
                    <option value="100000000">Deep Institutional ($100M)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-700">Lending Oracle Feed</label>
                  <select
                    value={oracleType}
                    onChange={(e) => setOracleType(e.target.value)}
                    className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                  >
                    <option value="spot">Vulnerable: Spot AMM Price</option>
                    <option value="twap">Secure: 1-Hour Chainlink TWAP</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Flash Loan Protocol Fee (0.05%):</span>
                  <span className="font-mono font-bold text-neutral-800">${(flashLoanAmount * 0.0005).toLocaleString()} USDC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Oracle Price Distortion:</span>
                  <span className={`font-mono font-bold ${calculatedFlashAttack.priceSpikePct > 20 ? "text-rose-700" : "text-emerald-700"}`}>
                    +{calculatedFlashAttack.priceSpikePct.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-6 bg-[#f6f4ee] p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">
                  Economic Exploit Breakdown
                </span>
                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">True Market Asset Price:</span>
                    <span className="text-neutral-900 font-bold">$10.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Reported Oracle Price:</span>
                    <span className={`font-bold ${oracleType === "spot" ? "text-rose-700" : "text-emerald-700"}`}>
                      ${calculatedFlashAttack.reportedPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Unbacked Debt Extracted:</span>
                    <span className="text-neutral-900 font-bold">
                      ${calculatedFlashAttack.debtExtracted.toLocaleString(undefined, {maximumFractionDigits: 0})} USDC
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#e7e3da]">
                    <span className="text-neutral-700 font-bold">Net Attacker Profit:</span>
                    <span className={`text-base font-extrabold ${calculatedFlashAttack.netProfit > 0 ? "text-rose-700" : "text-emerald-700"}`}>
                      ${calculatedFlashAttack.netProfit.toLocaleString(undefined, {maximumFractionDigits: 0})} USDC
                    </span>
                  </div>
                </div>
              </div>

              <div className={`mt-4 p-3 rounded-lg border text-[11px] ${
                calculatedFlashAttack.netProfit > 0
                  ? "bg-rose-50 border-rose-200 text-rose-900 font-medium"
                  : "bg-emerald-50 border-emerald-200 text-emerald-900 font-medium"
              }`}>
                {calculatedFlashAttack.netProfit > 0 ? (
                  <span>CRITICAL EXPLOIT: Flash loan distorted spot price by {calculatedFlashAttack.priceSpikePct.toFixed(0)}%, creating protocol insolvency.</span>
                ) : (
                  <span>PROTECTED: Chainlink TWAP dampened instantaneous price shock; attack resulted in net loss for attacker after fees.</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATOR 3: PROXY STORAGE COLLISION VISUALIZER */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Simulator 03
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">
                Proxy Storage Collision Visualizer (EIP-1967 vs Unstructured)
              </h3>
              <p className="text-xs text-neutral-500">
                Observe how unaligned storage layouts cause delegatecall to overwrite critical administrative proxy state.
              </p>
            </div>
            <div className="flex items-center bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                onClick={() => setProxyStorageMode("unstructured")}
                className={`px-3 py-1.5 rounded-lg transition ${
                  proxyStorageMode === "unstructured" ? "bg-rose-600 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Vulnerable (Slot 0 Overwrite)
              </button>
              <button
                onClick={() => setProxyStorageMode("eip1967")}
                className={`px-3 py-1.5 rounded-lg transition ${
                  proxyStorageMode === "eip1967" ? "bg-emerald-600 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Secure (EIP-1967 Hash Slots)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-700">Set Implementation Variable (Slot 0):</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={simLogicVariable}
                    onChange={(e) => setSimLogicVariable(parseInt(e.target.value) || 0)}
                    className="p-2 rounded-lg border border-[#e7e3da] font-mono text-xs w-full"
                    placeholder="uint256 feePercentage"
                  />
                  <span className="text-xs font-mono self-center text-neutral-500">uint256</span>
                </div>
              </div>

              <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs space-y-2">
                <div className="font-bold text-neutral-900">Storage Collision Mechanics:</div>
                <p className="text-neutral-600 leading-relaxed text-[11px]">
                  When a proxy uses <code>delegatecall</code>, the implementation code writes to the storage of the <strong>Proxy contract</strong>.
                  {proxyStorageMode === "unstructured" ? (
                    <span className="text-rose-700 font-bold block mt-1">
                      Writing to implementation Slot 0 directly mutates Proxy Slot 0 (admin address), hijacking administrative control!
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-bold block mt-1">
                      EIP-1967 stores the implementation address at bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1), preventing any collision with logic variables.
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Storage Layout Grid */}
            <div className="md:col-span-6 bg-[#f6f4ee] p-4 rounded-xl border border-[#e7e3da] space-y-3 font-mono text-xs">
              <div className="font-bold text-neutral-700 uppercase tracking-wide">Proxy Physical Storage Slots</div>

              {proxyStorageMode === "unstructured" ? (
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg border bg-rose-50 border-rose-300 text-rose-900">
                    <div className="flex justify-between font-bold">
                      <span>Slot 0x00 (COLLIDED)</span>
                      <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-rose-200">Corrupted</span>
                    </div>
                    <div className="mt-1 text-[11px]">
                      Proxy Admin / Implementation:{" "}
                      <span className="font-extrabold text-rose-800">
                        {simLogicVariable === 0 ? "0x1111...1111" : `0x0000...00${simLogicVariable.toString(16).padStart(2, "0")}`}
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg border bg-white border-[#e7e3da]">
                    <div className="font-bold text-neutral-800">Slot 0x01</div>
                    <div className="text-[11px] text-neutral-600">userBalances mapping root</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg border bg-white border-[#e7e3da]">
                    <div className="font-bold text-neutral-800">Slot 0x00 (Logic Variable)</div>
                    <div className="text-[11px] text-neutral-600">
                      feePercentage: <span className="font-bold text-emerald-700">{simLogicVariable}</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg border bg-emerald-50 border-emerald-300 text-emerald-900">
                    <div className="flex justify-between font-bold">
                      <span>Slot eip1967.proxy.implementation</span>
                      <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-emerald-200">Isolated</span>
                    </div>
                    <div className="mt-1 text-[11px] text-emerald-800">
                      0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SIMULATOR 4: SLITHER STATIC ANALYSIS & INVARIANT TERMINAL */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="border-b border-[#e7e3da] pb-4 mb-6">
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Simulator 04
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Static Analysis (Slither) & Invariant Fuzzing Terminal
            </h3>
            <p className="text-xs text-neutral-500">
              Select lab smart contracts, run simulated Slither AST analyzers, execute 10,000-run Foundry invariant fuzzing campaigns, and review automated patch diffs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-700">Target Contract</label>
                <select
                  value={auditTargetContract}
                  onChange={(e) => {
                    setAuditTargetContract(e.target.value);
                    setAuditScanExecuted(false);
                    setAuditRemediationApplied(false);
                  }}
                  className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                >
                  <option value="VulnerableVault.sol">VulnerableVault.sol (Access Control)</option>
                  <option value="VulnerableReentrancyVault.sol">VulnerableReentrancyVault.sol (Reentrancy)</option>
                  <option value="VulnerableLending.sol">VulnerableLending.sol (Collateral / Solvency)</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setAuditScanExecuted(true)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  Run Slither & Fuzz Tests
                </button>
                <button
                  onClick={() => setAuditRemediationApplied(!auditRemediationApplied)}
                  disabled={!auditScanExecuted}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition ${
                    !auditScanExecuted
                      ? "opacity-50 cursor-not-allowed bg-neutral-100"
                      : auditRemediationApplied
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-neutral-900 border-[#e7e3da] hover:bg-[#f6f4ee]"
                  }`}
                >
                  {auditRemediationApplied ? "Fix Applied ✓" : "Apply Patch Diff"}
                </button>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="lg:col-span-7 bg-[#1e1e24] text-neutral-200 p-4 rounded-xl font-mono text-xs overflow-x-auto shadow-inner min-h-[220px] flex flex-col justify-between">
              {!auditScanExecuted ? (
                <div className="text-neutral-500 italic py-8 text-center text-xs">
                  $ slither . && forge test --fuzz-runs 10000<br/>
                  (Click "Run Slither & Fuzz Tests" to start security analysis)
                </div>
              ) : auditRemediationApplied ? (
                <div className="space-y-2">
                  <div className="text-emerald-400 font-bold">
                    $ forge test --fuzz-runs 10000
                  </div>
                  <div className="text-emerald-300">
                    [PASS] testFuzzInvariants(uint256) (runs: 10000, μ: 28412, ~: 28412)<br/>
                    [PASS] testReentrancyGuardRevert()<br/>
                    Suite result: ok. 10000 passed; 0 failed; 0 skipped.
                  </div>
                  <div className="text-neutral-400 text-[11px] pt-2 border-t border-neutral-700">
                    $ slither .<br/>
                    <span className="text-emerald-400">0 vulnerabilities found. Clean static analysis!</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-amber-400">
                    $ slither src/{auditTargetContract}
                  </div>
                  <div className="text-rose-400">
                    {auditTargetContract === "VulnerableVault.sol" && (
                      <div>
                        [HIGH] unprotected-upgrade / missing-access-control:<br/>
                        VulnerableVault.changeOwner(address) (src/VulnerableVault.sol#22)<br/>
                        &nbsp;&nbsp;&gt; Variable 'owner' is written without caller verification.
                      </div>
                    )}
                    {auditTargetContract === "VulnerableReentrancyVault.sol" && (
                      <div>
                        [HIGH] reentrancy-eth:<br/>
                        VulnerableReentrancyVault.withdraw() (src/VulnerableReentrancyVault.sol#14)<br/>
                        &nbsp;&nbsp;&gt; External call to msg.sender before balances update.
                      </div>
                    )}
                    {auditTargetContract === "VulnerableLending.sol" && (
                      <div>
                        [HIGH] invariant-violation / bad-debt:<br/>
                        VulnerableLending.withdrawCollateral() (src/VulnerableLending.sol#18)<br/>
                        &nbsp;&nbsp;&gt; Collateral decremented without verifying remaining debt.
                      </div>
                    )}
                  </div>
                  <div className="text-amber-300 pt-2 border-t border-neutral-700 text-[11px]">
                    Foundry Fuzzer: Counterexample found after 42 runs! Invariant broken: totalDebt &gt; totalCollateral.
                  </div>
                </div>
              )}

              <div className="text-[10px] text-neutral-500 pt-2 border-t border-neutral-800 flex justify-between">
                <span>Slither v0.10.2</span>
                <span>Foundry Forge Invariant Engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    
          </div>
        ) : (
          <div className="space-y-16">
            
      {/* ============================================================== */}
      {/* PART 1: BLOCKCHAIN SECURITY FUNDAMENTALS                       */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Blockchain Security Fundamentals
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Layered architecture of Web3 security, EVM execution constraints, and core security properties.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">1.1 What Is Blockchain Security?</h3>
          <p>
            Blockchain security is the rigorous engineering discipline of protecting decentralized networks, cryptographic transactions, smart contracts, client wallets, and off-chain protocols against unauthorized access, exploitation, and systemic economic failure.
          </p>

          {/* 7-Layer Security Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Security Layer</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Example Risk / Exploit Vector</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Consensus Layer</td>
                  <td className="p-3 text-neutral-600">Protects decentralized state agreement among blockchain validator nodes.</td>
                  <td className="p-3 text-rose-700 font-mono">51% attack, selfish mining, long-range reorganization</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Network Layer</td>
                  <td className="p-3 text-neutral-600">Protects peer-to-peer (P2P) gossip communication and mempool propagation.</td>
                  <td className="p-3 text-rose-700 font-mono">Eclipse attack, Sybil attack, DDoS of validator RPCs</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Wallet Layer</td>
                  <td className="p-3 text-neutral-600">Protects private keys, hardware signing environments, and seed phrases.</td>
                  <td className="p-3 text-rose-700 font-mono">Private key theft, blind signing, malicious approval phishing</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Smart Contract Layer</td>
                  <td className="p-3 text-neutral-600">Protects byte-level EVM program execution, financial state, and assets.</td>
                  <td className="p-3 text-rose-700 font-mono">Reentrancy, access control bypass, integer truncation</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Application Layer</td>
                  <td className="p-3 text-neutral-600">Protects user-facing client frontends, SDKs, and DNS infrastructures.</td>
                  <td className="p-3 text-rose-700 font-mono">DNS hijacking, supply-chain npm package compromise, XSS</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Oracle Layer</td>
                  <td className="p-3 text-neutral-600">Protects external real-world market data feeds feeding smart contracts.</td>
                  <td className="p-3 text-rose-700 font-mono">Flash loan price manipulation, stale rounds, sequencer outage</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Governance Layer</td>
                  <td className="p-3 text-neutral-600">Protects decentralized protocol voting and administrative timelocks.</td>
                  <td className="p-3 text-rose-700 font-mono">Flash-loan voting power hijacking, malicious parameter proposals</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
            <span className="font-bold uppercase tracking-wide text-amber-900">
              Why Smart Contract Security Is Fundamentally Different From Traditional Web2
            </span>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Transactions Are Irreversible:</strong> There is no customer support, rollback mechanism, or database restore. Exploited funds are permanently transferred.</li>
              <li><strong>Immutable Bytecode:</strong> Deployed contracts cannot be hot-patched on the fly unless complex, risky proxy patterns were architected beforehand.</li>
              <li><strong>Public Attack Surface:</strong> All bytecode, storage slots, and transactions are transparently readable by automated MEV bots scanning the mempool 24/7.</li>
              <li><strong>Speed of Exploitation:</strong> Complex attacks utilizing uncollateralized flash loans execute within a single atomic Ethereum block (~12 seconds).</li>
            </ul>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">1.2 Core Security Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900 uppercase">Confidentiality (Transparency Caveat)</span>
              <p className="text-neutral-600">
                Public blockchain state is transparent. Solidity variables declared <code>private</code> are not cryptographically private; any external observer can read raw 32-byte storage slots via JSON-RPC.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900 uppercase">Integrity</span>
              <p className="text-neutral-600">
                State must only transition according to authorized mathematical and protocol rules. Internal balances must accurately reflect deposited liabilities.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900 uppercase">Availability</span>
              <p className="text-neutral-600">
                Critical protocol operations (especially withdrawals and repayments) must never become permanently bricked or locked by gas limits or failed external calls.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900 uppercase">Financial Correctness & Invariants</span>
              <p className="text-neutral-600">
                Core mathematical formulas must hold universally: AMM constant product <code>x · y = k</code>, and lending solvency <code>Total Debt ≤ Borrowing Capacity</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 2: SMART CONTRACT THREAT MODELING                         */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Smart Contract Threat Modeling
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Systematic identification of assets, threat actors, attack surfaces, and STRIDE categorization.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <p>
            Threat modeling is the structured analysis performed <em>before</em> line-by-line auditing. An auditor must first understand what the protocol is intended to accomplish, what assets it holds, and what conditions must never occur.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-4">2.2 Asset Catalog (Decentralized Lending Protocol)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">Protocol Asset</th><th className="p-2.5">Security & Financial Concern</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">User Collateral</td><td className="p-2.5 text-neutral-600">Unauthorized withdrawal, reentrancy drain, unfair liquidation</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Borrowed Tokens</td><td className="p-2.5 text-neutral-600">Uncollateralized borrowing, pool liquidity exhaustion</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Protocol Reserves</td><td className="p-2.5 text-neutral-600">Accounting manipulation, fee skimming, reserve drain</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Admin Privileges</td><td className="p-2.5 text-neutral-600">Compromised private keys, malicious parameter updates, backdoor upgrades</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Oracle Price Data</td><td className="p-2.5 text-neutral-600">Flash loan price manipulation, stale rounds, zero-price exploit</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">User Signatures</td><td className="p-2.5 text-neutral-600">Signature replay across contracts or chains, front-running meta-transactions</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Contract Implementation</td><td className="p-2.5 text-neutral-600">Malicious upgrade execution, storage layout collision</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">2.3 Threat Actors & Attack Surfaces</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`External Functions (Entry Points)            External Dependencies (Trust Boundaries)
├── deposit() / withdraw()                   ├── Underlying ERC-20 Tokens (USDC, USDT, WETH)
├── borrow() / repay()                       ├── Price Oracles (Chainlink Aggregators)
├── liquidate() / swap()                     ├── Flash Loan Providers (Aave, Uniswap)
├── claimRewards()                           └── Governance & Multisig Timelocks
└── upgradeTo() / setParam()`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">STRIDE Threat Modeling Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">STRIDE Threat</th><th className="p-2.5">Meaning</th><th className="p-2.5">Smart Contract Attack Scenario</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Spoofing</td><td className="p-2.5">Pretending to be another identity</td><td className="p-2.5 text-neutral-600">Exploiting tx.origin or forged EIP-712 signatures</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Tampering</td><td className="p-2.5">Unauthorized data modification</td><td className="p-2.5 text-neutral-600">Manipulating unvalidated storage slots via delegatecall</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Repudiation</td><td className="p-2.5">Denying an action occurred</td><td className="p-2.5 text-neutral-600">Absence of emitted events for critical financial state changes</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Information Disclosure</td><td className="p-2.5">Exposing sensitive information</td><td className="p-2.5 text-neutral-600">Relying on 'private' state variables for lottery seeds</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Denial of Service</td><td className="p-2.5">Preventing legitimate use</td><td className="p-2.5 text-neutral-600">Unbounded array iteration exceeding 30M block gas limit</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Elevation of Privilege</td><td className="p-2.5">Obtaining unauthorized permissions</td><td className="p-2.5 text-neutral-600">Missing onlyOwner modifier on changeOwner() or initialize()</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 3: SECURITY AUDIT METHODOLOGY                             */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Professional Security Audit Methodology
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            The 7-step professional audit lifecycle: scoping, manual inspection, static analysis, fuzzing, PoC validation, and remediation.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <p>
            An audit is a comprehensive, adversarial security review. It provides rigorous evidence that discovered risks have been remediated according to industry best practices.
          </p>

          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-3 font-mono text-xs">
            <span className="font-bold text-neutral-900 uppercase">Professional 7-Step Audit Workflow</span>
            <div className="space-y-2 text-neutral-800">
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 1 — Define Scope:</strong> Pin exact git commit hash; specify in-scope smart contracts and exclude out-of-scope layers (e.g. frontend, consensus).
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 2 — Understand Architecture:</strong> Review whitepapers, deployment scripts, oracle feeds, and trust models.
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 3 — Identify Core Invariants:</strong> Define properties that must never be broken (e.g. user cannot withdraw more than deposited).
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 4 — Manual Line-by-Line Review:</strong> Inspect critical functions (deposit, withdraw, borrow, repay, liquidate, swap, mint, burn, upgrade).
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 5 — Automated Analysis:</strong> Run Slither static analyzers, Mythril symbolic executors, and Foundry fuzz testing suites.
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 6 — Validate Findings with PoCs:</strong> Write reproducible Foundry reproduction tests for every confirmed security issue.
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 7 — Remediation & Retesting:</strong> Developers deploy code patches; auditors verify fixes and certify absence of regressions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PARTS 4 - 8: ACCESS CONTROL, REENTRANCY, ARITHMETIC, DOS & MEV */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Parts 04 – 08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Access Control, Reentrancy, Arithmetic, DoS & MEV
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          {/* Access Control */}
          <h3 className="text-base font-bold text-neutral-900">4. Access Control & Authorization Pitfalls</h3>
          <p className="text-xs text-neutral-600">
            Missing or faulty access control is one of the most frequent causes of catastrophic protocol hacks. If a sensitive function lacks an explicit caller check, anyone can take ownership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
              <span className="text-xs font-bold text-rose-900 uppercase">Vulnerable: Missing Access Control</span>
              <pre className="p-2 bg-white rounded text-[11px] font-mono text-neutral-800 overflow-x-auto">
{`function changeOwner(address newOwner) external {
    // Anyone can call this and take over the vault!
    owner = newOwner; 
}`}
              </pre>
            </div>
            <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
              <span className="text-xs font-bold text-emerald-900 uppercase">Secure: Custom Error & Modifier</span>
              <pre className="p-2 bg-white rounded text-[11px] font-mono text-neutral-800 overflow-x-auto">
{`modifier onlyOwner() {
    if (msg.sender != owner) revert Unauthorized();
    _;
}
function changeOwner(address newOwner) external onlyOwner {
    if (newOwner == address(0)) revert InvalidAddress();
    owner = newOwner;
}`}
              </pre>
            </div>
          </div>

          {/* Reentrancy */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">5. Reentrancy Attacks & The CEI Defense</h3>
          <p className="text-xs text-neutral-600">
            Reentrancy occurs when a contract makes an external call (e.g. sending ETH via <code>.call&#123;value: amount&#125;("")</code>) before updating its internal storage. The recipient's fallback function intercepts execution and calls back into the vulnerable function, repeatedly withdrawing against stale balances.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
              <span className="text-xs font-bold text-rose-900 uppercase">Vulnerable: External Call Before State Update</span>
              <pre className="p-2 bg-white rounded text-[11px] font-mono text-neutral-800 overflow-x-auto">
{`function withdraw() external {
    uint256 amount = balances[msg.sender];
    require(amount > 0, "No balance");
    // INTERACTION BEFORE EFFECT!
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
    balances[msg.sender] = 0; // Too late!
}`}
              </pre>
            </div>
            <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
              <span className="text-xs font-bold text-emerald-900 uppercase">Secure: Checks-Effects-Interactions (CEI)</span>
              <pre className="p-2 bg-white rounded text-[11px] font-mono text-neutral-800 overflow-x-auto">
{`function withdraw() external nonReentrant {
    uint256 amount = balances[msg.sender];
    require(amount > 0, "No balance");
    // 1. EFFECT: Update internal state first
    balances[msg.sender] = 0;
    // 2. INTERACTION: External transfer last
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
}`}
              </pre>
            </div>
          </div>

          {/* Arithmetic in 0.8+ */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">6. Integer Arithmetic in Solidity 0.8+ & Precision Scaling</h3>
          <p className="text-xs text-neutral-600">
            Solidity 0.8+ automatically reverts on arithmetic overflow and underflow. However, severe arithmetic vulnerabilities still occur:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs">
            <li><strong>Division Before Multiplication:</strong> Integer division truncates decimals toward zero. <code>(amount / 1000) * feeRate</code> evaluates to 0 if amount &lt; 1000.</li>
            <li><strong>Decimal Mismatches:</strong> Confusing 18-decimal WETH with 6-decimal USDC, undervaluing assets by a factor of 10¹².</li>
            <li><strong>Unchecked Block Misuse:</strong> Wrapping arithmetic inside <code>unchecked &#123; ... &#125;</code> without formal proof of bounds.</li>
          </ul>

          {/* DoS & MEV */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">7. Denial of Service (DoS) & Pull-Over-Push Payments</h3>
          <p className="text-xs text-neutral-600">
            Never loop over an unbounded array of user addresses to distribute rewards. If a single recipient is a contract that reverts on ETH receipt, the entire distribution transaction reverts for all users. Always use the <strong>Pull-Payment Pattern</strong> where users claim their own rewards individually.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">8. Front-Running & MEV Sandwich Attacks</h3>
          <p className="text-xs text-neutral-600">
            MEV searchers exploit public transaction mempools by wrapping victim swaps between an automated front-run buy order (driving price up to slippage limit) and a back-run sell order (reaping the profit). Protocols mitigate this using strict <code>amountOutMin</code> bounds, private mempools (Flashbots), and commit-reveal batch auctions.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PARTS 9 - 15: ORACLES, FLASH LOANS, UPGRADEABILITY & PROXIES  */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Parts 09 – 15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Oracles, Flash Loans, Delegatecall & Upgradeability
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">9. Oracle Manipulation & Chainlink Validation</h3>
          <p className="text-xs text-neutral-600">
            Using an instantaneous AMM spot price as a lending oracle allows attackers to borrow millions in a flash loan, skew pool reserves, inflate collateral value, borrow liquid funds, and repay the loan in one atomic block.
          </p>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`function getLatestPrice() external view returns (int256) {
    (
        uint80 roundId,
        int256 price,
        ,
        uint256 updatedAt,
        uint80 answeredInRound
    ) = priceFeed.latestRoundData();

    require(price > 0, "Invalid price");
    require(answeredInRound >= roundId, "Stale round data");
    require(block.timestamp - updatedAt <= HEARTBEAT, "Stale timestamp");
    return price;
}`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">14. Delegatecall & Proxy Storage Collisions</h3>
          <p className="text-xs text-neutral-600">
            <code>delegatecall</code> executes code from another contract while preserving the caller's storage context. If the proxy and implementation contracts do not align their storage layouts identically, writing to an implementation variable overwrites critical proxy state (such as the admin or implementation address).
          </p>
          <div className="p-3 bg-white rounded-lg border border-[#e7e3da] text-xs text-neutral-600">
            <strong>EIP-1967 Standard Slots:</strong> EIP-1967 stores implementation addresses in pseudorandom slots: <code>bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1)</code>, ensuring logic variables in Slot 0 never collide with proxy administrative pointers.
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PARTS 19 - 21: STATIC ANALYSIS, FUZZING & FORMAL METHODS       */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Parts 19 – 21
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Static Analysis (Slither), Fuzz Testing & Formal Verification
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">19. Static Analysis with Slither</h3>
          <p className="text-xs text-neutral-600">
            Slither parses Solidity Abstract Syntax Trees (ASTs) and Control Flow Graphs without executing code, identifying reentrancy, unprotected initializers, and unchecked external calls.
          </p>
          <pre className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`pip install slither-analyzer
slither . --json slither-report.json`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">20. Foundry Fuzz & Property-Based Testing</h3>
          <p className="text-xs text-neutral-600">
            Fuzz testing automatically injects thousands of pseudo-random inputs into contract functions to discover edge-case reverts and broken invariants.
          </p>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`contract SimpleVaultTest is Test {
    SimpleVault vault;

    function setUp() public {
        vault = new SimpleVault();
    }

    function testFuzzDeposit(uint256 amount) public {
        amount = bound(amount, 0, 10 ether);
        vm.deal(address(this), amount);
        vault.deposit{value: amount}();
        assertEq(vault.balances(address(this)), amount);
    }
}`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">21. Formal Verification & Hoare Logic</h3>
          <p className="text-xs text-neutral-600">
            Formal verification uses automated theorem provers (SMT solvers) to mathematically prove that a contract satisfies formal specifications across all possible reachable states. Represented in Hoare logic triples:
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono text-center font-bold text-neutral-900">
            &#123; balance ≥ amount &#125; &nbsp; withdraw(amount) &nbsp; &#123; balance' = balance - amount &#125;
          </div>
        </div>
      </section>
    
            
      {/* ============================================================== */}
      {/* 4 LIVE INTERACTIVE SECURITY SIMULATORS                         */}
      {/* ============================================================== */}
      <section className="mt-14 space-y-12">
        <div className="border-b border-[#e7e3da] pb-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Activity className="w-4 h-4" />
            <span>Interactive Security Laboratory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
            Smart Contract Exploit & Defense Sandboxes
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Simulate real EVM attack vectors in an isolated sandbox: step through recursive reentrancy call stacks, model flash loan price distortion, inspect proxy storage collisions, and execute automated static analysis and invariant fuzzing runs.
          </p>
        </div>

        {/* SIMULATOR 1: REENTRANCY CALL STACK SANDBOX */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Simulator 01
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">
                Reentrancy Exploit & Checks-Effects-Interactions (CEI) Sandbox
              </h3>
              <p className="text-xs text-neutral-500">
                Visualize recursive EVM execution frames and compare vulnerable execution against CEI and ReentrancyGuard defenses.
              </p>
            </div>
            <div className="flex items-center bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                onClick={() => { setReentrancyMode("vulnerable"); setReentrancyStep(0); }}
                className={`px-3 py-1.5 rounded-lg transition ${
                  reentrancyMode === "vulnerable"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Vulnerable Pattern
              </button>
              <button
                onClick={() => { setReentrancyMode("secure"); setReentrancyStep(0); }}
                className={`px-3 py-1.5 rounded-lg transition ${
                  reentrancyMode === "secure"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Secure (CEI + Guard)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Controls & Balances */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                  <span className="text-xs text-neutral-500 font-medium">Vault ETH Balance</span>
                  <div className="mt-1 text-lg font-mono font-bold text-neutral-900">
                    {simVaultBalance.toFixed(1)} ETH
                  </div>
                  <span className="text-[10px] text-neutral-400">Victim Contract</span>
                </div>
                <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                  <span className="text-xs text-neutral-500 font-medium">Attacker Wallet</span>
                  <div className="mt-1 text-lg font-mono font-bold text-rose-700">
                    {simAttackerBalance.toFixed(1)} ETH
                  </div>
                  <span className="text-[10px] text-neutral-400">Exploit Contract</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-neutral-900">Recorded Attacker Balance:</span>
                  <span className="font-mono font-bold text-neutral-800">{simAttackerRecordedBalance.toFixed(1)} ETH</span>
                </div>
                <div className="text-[11px] text-neutral-600">
                  {reentrancyMode === "vulnerable" ? (
                    <span className="text-rose-800">
                      <strong>Flaw:</strong> Vault transfers ETH <em>before</em> setting recorded balance to 0!
                    </span>
                  ) : (
                    <span className="text-emerald-800">
                      <strong>Protected:</strong> Vault sets balance to 0 <em>before</em> external interaction.
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleStepReentrancy}
                  disabled={reentrancyFinished}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-sm ${
                    reentrancyFinished
                      ? "bg-neutral-400 cursor-not-allowed"
                      : reentrancyMode === "vulnerable"
                      ? "bg-rose-600 hover:bg-rose-700"
                      : "bg-emerald-600 hover:bg-emerald-700"
                  }`}
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  {reentrancyFinished ? "Exploit Sequence Complete" : `Step Execution Frame (${reentrancyStep + 1})`}
                </button>
                <button
                  onClick={handleResetReentrancy}
                  className="py-2.5 px-3 rounded-xl border border-[#e7e3da] bg-white hover:bg-[#f6f4ee] text-xs font-bold text-neutral-700"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Right Execution Frames Trace */}
            <div className="lg:col-span-7 bg-[#f6f4ee] p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
                  <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">
                    EVM Recursive Call Stack Trace
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-500">
                    Depth: {reentrancyStack.length}
                  </span>
                </div>

                <div className="mt-4 space-y-2 font-mono text-xs max-h-56 overflow-y-auto">
                  {reentrancyStack.length === 0 ? (
                    <div className="text-neutral-500 text-center py-6 italic font-sans text-xs">
                      Click "Step Execution Frame" to trigger the withdrawal sequence and observe call stack recursion.
                    </div>
                  ) : (
                    reentrancyStack.map((frame, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg border text-[11px] leading-relaxed ${
                          frame.type === "revert"
                            ? "bg-emerald-100/70 border-emerald-300 text-emerald-950 font-bold"
                            : frame.type === "exploit"
                            ? "bg-rose-100/70 border-rose-300 text-rose-950"
                            : "bg-white border-[#e7e3da] text-neutral-800"
                        }`}
                      >
                        <div className="flex justify-between items-center font-bold">
                          <span>Frame #{idx}: {frame.action}</span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/70">
                            {frame.caller} &rarr; {frame.target}
                          </span>
                        </div>
                        <div className="mt-1 text-[10px] text-neutral-600 font-sans">
                          {frame.detail}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-4 p-2.5 bg-white rounded-lg border border-[#e7e3da] text-[11px] text-neutral-600">
                <strong>EVM Principle:</strong> In the vulnerable pattern, external call returns control to attacker fallback function while <code>balances[attacker]</code> is still positive, enabling recursive drain.
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATOR 2: FLASH LOAN PRICE MANIPULATION */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="border-b border-[#e7e3da] pb-4 mb-6">
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Simulator 02
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Flash Loan Oracle Manipulation & Bad Debt Simulation
            </h3>
            <p className="text-xs text-neutral-500">
              Simulate uncollateralized flash loan capital distorting low-liquidity AMM spot prices to exploit lending protocol collateral valuations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-neutral-700">Flash Loan Borrow Amount:</span>
                  <span className="font-mono font-bold text-amber-900">
                    ${(flashLoanAmount / 1e6).toFixed(1)}M USDC
                  </span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="1000000"
                  value={flashLoanAmount}
                  onChange={(e) => setFlashLoanAmount(parseFloat(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-neutral-700">Target AMM Pool Depth</label>
                  <select
                    value={ammDepth}
                    onChange={(e) => setAmmDepth(parseFloat(e.target.value))}
                    className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                  >
                    <option value="2000000">Shallow ($2M Reserves)</option>
                    <option value="10000000">Medium ($10M Reserves)</option>
                    <option value="100000000">Deep Institutional ($100M)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-700">Lending Oracle Feed</label>
                  <select
                    value={oracleType}
                    onChange={(e) => setOracleType(e.target.value)}
                    className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                  >
                    <option value="spot">Vulnerable: Spot AMM Price</option>
                    <option value="twap">Secure: 1-Hour Chainlink TWAP</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Flash Loan Protocol Fee (0.05%):</span>
                  <span className="font-mono font-bold text-neutral-800">${(flashLoanAmount * 0.0005).toLocaleString()} USDC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Oracle Price Distortion:</span>
                  <span className={`font-mono font-bold ${calculatedFlashAttack.priceSpikePct > 20 ? "text-rose-700" : "text-emerald-700"}`}>
                    +{calculatedFlashAttack.priceSpikePct.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-6 bg-[#f6f4ee] p-5 rounded-xl border border-[#e7e3da] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-700 uppercase tracking-wide">
                  Economic Exploit Breakdown
                </span>
                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">True Market Asset Price:</span>
                    <span className="text-neutral-900 font-bold">$10.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Reported Oracle Price:</span>
                    <span className={`font-bold ${oracleType === "spot" ? "text-rose-700" : "text-emerald-700"}`}>
                      ${calculatedFlashAttack.reportedPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Unbacked Debt Extracted:</span>
                    <span className="text-neutral-900 font-bold">
                      ${calculatedFlashAttack.debtExtracted.toLocaleString(undefined, {maximumFractionDigits: 0})} USDC
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-[#e7e3da]">
                    <span className="text-neutral-700 font-bold">Net Attacker Profit:</span>
                    <span className={`text-base font-extrabold ${calculatedFlashAttack.netProfit > 0 ? "text-rose-700" : "text-emerald-700"}`}>
                      ${calculatedFlashAttack.netProfit.toLocaleString(undefined, {maximumFractionDigits: 0})} USDC
                    </span>
                  </div>
                </div>
              </div>

              <div className={`mt-4 p-3 rounded-lg border text-[11px] ${
                calculatedFlashAttack.netProfit > 0
                  ? "bg-rose-50 border-rose-200 text-rose-900 font-medium"
                  : "bg-emerald-50 border-emerald-200 text-emerald-900 font-medium"
              }`}>
                {calculatedFlashAttack.netProfit > 0 ? (
                  <span>CRITICAL EXPLOIT: Flash loan distorted spot price by {calculatedFlashAttack.priceSpikePct.toFixed(0)}%, creating protocol insolvency.</span>
                ) : (
                  <span>PROTECTED: Chainlink TWAP dampened instantaneous price shock; attack resulted in net loss for attacker after fees.</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATOR 3: PROXY STORAGE COLLISION VISUALIZER */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                Simulator 03
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mt-1">
                Proxy Storage Collision Visualizer (EIP-1967 vs Unstructured)
              </h3>
              <p className="text-xs text-neutral-500">
                Observe how unaligned storage layouts cause delegatecall to overwrite critical administrative proxy state.
              </p>
            </div>
            <div className="flex items-center bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                onClick={() => setProxyStorageMode("unstructured")}
                className={`px-3 py-1.5 rounded-lg transition ${
                  proxyStorageMode === "unstructured" ? "bg-rose-600 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Vulnerable (Slot 0 Overwrite)
              </button>
              <button
                onClick={() => setProxyStorageMode("eip1967")}
                className={`px-3 py-1.5 rounded-lg transition ${
                  proxyStorageMode === "eip1967" ? "bg-emerald-600 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Secure (EIP-1967 Hash Slots)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-700">Set Implementation Variable (Slot 0):</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={simLogicVariable}
                    onChange={(e) => setSimLogicVariable(parseInt(e.target.value) || 0)}
                    className="p-2 rounded-lg border border-[#e7e3da] font-mono text-xs w-full"
                    placeholder="uint256 feePercentage"
                  />
                  <span className="text-xs font-mono self-center text-neutral-500">uint256</span>
                </div>
              </div>

              <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs space-y-2">
                <div className="font-bold text-neutral-900">Storage Collision Mechanics:</div>
                <p className="text-neutral-600 leading-relaxed text-[11px]">
                  When a proxy uses <code>delegatecall</code>, the implementation code writes to the storage of the <strong>Proxy contract</strong>.
                  {proxyStorageMode === "unstructured" ? (
                    <span className="text-rose-700 font-bold block mt-1">
                      Writing to implementation Slot 0 directly mutates Proxy Slot 0 (admin address), hijacking administrative control!
                    </span>
                  ) : (
                    <span className="text-emerald-700 font-bold block mt-1">
                      EIP-1967 stores the implementation address at bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1), preventing any collision with logic variables.
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Storage Layout Grid */}
            <div className="md:col-span-6 bg-[#f6f4ee] p-4 rounded-xl border border-[#e7e3da] space-y-3 font-mono text-xs">
              <div className="font-bold text-neutral-700 uppercase tracking-wide">Proxy Physical Storage Slots</div>

              {proxyStorageMode === "unstructured" ? (
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg border bg-rose-50 border-rose-300 text-rose-900">
                    <div className="flex justify-between font-bold">
                      <span>Slot 0x00 (COLLIDED)</span>
                      <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-rose-200">Corrupted</span>
                    </div>
                    <div className="mt-1 text-[11px]">
                      Proxy Admin / Implementation:{" "}
                      <span className="font-extrabold text-rose-800">
                        {simLogicVariable === 0 ? "0x1111...1111" : `0x0000...00${simLogicVariable.toString(16).padStart(2, "0")}`}
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg border bg-white border-[#e7e3da]">
                    <div className="font-bold text-neutral-800">Slot 0x01</div>
                    <div className="text-[11px] text-neutral-600">userBalances mapping root</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg border bg-white border-[#e7e3da]">
                    <div className="font-bold text-neutral-800">Slot 0x00 (Logic Variable)</div>
                    <div className="text-[11px] text-neutral-600">
                      feePercentage: <span className="font-bold text-emerald-700">{simLogicVariable}</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg border bg-emerald-50 border-emerald-300 text-emerald-900">
                    <div className="flex justify-between font-bold">
                      <span>Slot eip1967.proxy.implementation</span>
                      <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-emerald-200">Isolated</span>
                    </div>
                    <div className="mt-1 text-[11px] text-emerald-800">
                      0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SIMULATOR 4: SLITHER STATIC ANALYSIS & INVARIANT TERMINAL */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 shadow-sm">
          <div className="border-b border-[#e7e3da] pb-4 mb-6">
            <span className="text-xs font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900">
              Simulator 04
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-1">
              Static Analysis (Slither) & Invariant Fuzzing Terminal
            </h3>
            <p className="text-xs text-neutral-500">
              Select lab smart contracts, run simulated Slither AST analyzers, execute 10,000-run Foundry invariant fuzzing campaigns, and review automated patch diffs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-700">Target Contract</label>
                <select
                  value={auditTargetContract}
                  onChange={(e) => {
                    setAuditTargetContract(e.target.value);
                    setAuditScanExecuted(false);
                    setAuditRemediationApplied(false);
                  }}
                  className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-[#f6f4ee] text-xs font-semibold font-mono"
                >
                  <option value="VulnerableVault.sol">VulnerableVault.sol (Access Control)</option>
                  <option value="VulnerableReentrancyVault.sol">VulnerableReentrancyVault.sol (Reentrancy)</option>
                  <option value="VulnerableLending.sol">VulnerableLending.sol (Collateral / Solvency)</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setAuditScanExecuted(true)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  Run Slither & Fuzz Tests
                </button>
                <button
                  onClick={() => setAuditRemediationApplied(!auditRemediationApplied)}
                  disabled={!auditScanExecuted}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition ${
                    !auditScanExecuted
                      ? "opacity-50 cursor-not-allowed bg-neutral-100"
                      : auditRemediationApplied
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-neutral-900 border-[#e7e3da] hover:bg-[#f6f4ee]"
                  }`}
                >
                  {auditRemediationApplied ? "Fix Applied ✓" : "Apply Patch Diff"}
                </button>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="lg:col-span-7 bg-[#1e1e24] text-neutral-200 p-4 rounded-xl font-mono text-xs overflow-x-auto shadow-inner min-h-[220px] flex flex-col justify-between">
              {!auditScanExecuted ? (
                <div className="text-neutral-500 italic py-8 text-center text-xs">
                  $ slither . && forge test --fuzz-runs 10000<br/>
                  (Click "Run Slither & Fuzz Tests" to start security analysis)
                </div>
              ) : auditRemediationApplied ? (
                <div className="space-y-2">
                  <div className="text-emerald-400 font-bold">
                    $ forge test --fuzz-runs 10000
                  </div>
                  <div className="text-emerald-300">
                    [PASS] testFuzzInvariants(uint256) (runs: 10000, μ: 28412, ~: 28412)<br/>
                    [PASS] testReentrancyGuardRevert()<br/>
                    Suite result: ok. 10000 passed; 0 failed; 0 skipped.
                  </div>
                  <div className="text-neutral-400 text-[11px] pt-2 border-t border-neutral-700">
                    $ slither .<br/>
                    <span className="text-emerald-400">0 vulnerabilities found. Clean static analysis!</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-amber-400">
                    $ slither src/{auditTargetContract}
                  </div>
                  <div className="text-rose-400">
                    {auditTargetContract === "VulnerableVault.sol" && (
                      <div>
                        [HIGH] unprotected-upgrade / missing-access-control:<br/>
                        VulnerableVault.changeOwner(address) (src/VulnerableVault.sol#22)<br/>
                        &nbsp;&nbsp;&gt; Variable 'owner' is written without caller verification.
                      </div>
                    )}
                    {auditTargetContract === "VulnerableReentrancyVault.sol" && (
                      <div>
                        [HIGH] reentrancy-eth:<br/>
                        VulnerableReentrancyVault.withdraw() (src/VulnerableReentrancyVault.sol#14)<br/>
                        &nbsp;&nbsp;&gt; External call to msg.sender before balances update.
                      </div>
                    )}
                    {auditTargetContract === "VulnerableLending.sol" && (
                      <div>
                        [HIGH] invariant-violation / bad-debt:<br/>
                        VulnerableLending.withdrawCollateral() (src/VulnerableLending.sol#18)<br/>
                        &nbsp;&nbsp;&gt; Collateral decremented without verifying remaining debt.
                      </div>
                    )}
                  </div>
                  <div className="text-amber-300 pt-2 border-t border-neutral-700 text-[11px]">
                    Foundry Fuzzer: Counterexample found after 42 runs! Invariant broken: totalDebt &gt; totalCollateral.
                  </div>
                </div>
              )}

              <div className="text-[10px] text-neutral-500 pt-2 border-t border-neutral-800 flex justify-between">
                <span>Slither v0.10.2</span>
                <span>Foundry Forge Invariant Engine</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    
            
      {/* ============================================================== */}
      {/* PART 22: AUDIT REPORT PREPARATION & SEVERITY CLASSIFICATION   */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 22
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Audit Report Preparation & Severity Classification
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Standards for documenting security findings, assessing likelihood and impact, and structuring professional audit deliverables.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Severity Rating</th>
                  <th className="p-3">Impact & Exploitability Definition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-rose-700">Critical</td>
                  <td className="p-3 text-neutral-600">Direct, unconstrained compromise of protocol assets, total treasury draining, or irreversible permanent lockup of user funds with zero preconditions.</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-rose-600">High</td>
                  <td className="p-3 text-neutral-600">Significant exploit with substantial financial or operational loss, requiring limited or plausible attacker capital/timing.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-amber-700">Medium</td>
                  <td className="p-3 text-neutral-600">Meaningful security defect where impact is constrained to a subset of users, requires rare preconditions, or causes temporary denial of service.</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-blue-700">Low</td>
                  <td className="p-3 text-neutral-600">Minor issue, theoretical attack vector, edge-case rounding error with negligible financial damage, or missing event emission.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-600">Informational</td>
                  <td className="p-3 text-neutral-600">Code quality recommendation, gas optimization, dead code removal, or NatSpec documentation improvement.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 24: PRACTICAL LAB - AUDIT VULNERABLE SMART CONTRACTS      */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 24
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Practical Lab — Audit Vulnerable Smart Contracts with Foundry
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Hands-on local audit environment: inspect deliberately vulnerable contracts, write Foundry reproduction tests, apply CEI/reentrancy fixes, and verify regressions.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">24.1 Lab Environment Setup</h3>
          <pre className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`forge init blockchain-security-lab && cd blockchain-security-lab
forge install OpenZeppelin/openzeppelin-contracts --no-commit
# Configure foundry.toml with solc_version = "0.8.24" and optimizer = true`}
          </pre>

          {/* Vulnerable Contract A */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">24.2 Vulnerable Contract A — Access Control (src/VulnerableVault.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VulnerableVault {
    address public owner;
    uint256 public totalDeposits;
    mapping(address => uint256) public balances;

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        require(msg.value > 0, "Zero deposit");
        balances[msg.sender] += msg.value;
        totalDeposits += msg.value;
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        totalDeposits -= amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
    }

    // AUDIT VULNERABILITY AUD-001: Missing access control!
    function changeOwner(address newOwner) external {
        owner = newOwner;
    }
}`}
          </pre>

          {/* Vulnerable Contract B */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">24.3 Vulnerable Contract B — Reentrancy (src/VulnerableReentrancyVault.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VulnerableReentrancyVault {
    mapping(address => uint256) public balances;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() external {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "No balance");

        // AUDIT VULNERABILITY AUD-002: Interaction occurs before Effects!
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");

        balances[msg.sender] = 0;
    }
}`}
          </pre>

          {/* Vulnerable Contract C */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">24.4 Vulnerable Contract C — Lending Accounting (src/VulnerableLending.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VulnerableLending {
    mapping(address => uint256) public collateral;
    mapping(address => uint256) public debt;
    uint256 public constant COLLATERAL_FACTOR = 75; // 75%

    function depositCollateral() external payable {
        collateral[msg.sender] += msg.value;
    }

    function borrow(uint256 amount) external {
        uint256 capacity = (collateral[msg.sender] * COLLATERAL_FACTOR) / 100;
        require(amount <= capacity, "Exceeds borrowing capacity");
        debt[msg.sender] += amount;
    }

    // AUDIT VULNERABILITY AUD-003: Collateral withdrawn without validating remaining debt!
    function withdrawCollateral(uint256 amount) external {
        require(collateral[msg.sender] >= amount, "Insufficient collateral");
        collateral[msg.sender] -= amount;
    }
}`}
          </pre>

          {/* Foundry Reproduction Test */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">24.5 Foundry Reproduction Test (test/VulnerableVault.t.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/VulnerableVault.sol";

contract VulnerableVaultTest is Test {
    VulnerableVault vault;
    address owner = address(1);
    address attacker = address(2);

    function setUp() public {
        vm.prank(owner);
        vault = new VulnerableVault();
    }

    function testUnauthorizedOwnershipChange() public {
        vm.prank(attacker);
        vault.changeOwner(attacker);
        assertEq(vault.owner(), attacker);
    }

    function testDepositAccounting() public {
        vm.deal(owner, 10 ether);
        vm.prank(owner);
        vault.deposit{value: 5 ether}();
        assertEq(vault.balances(owner), 5 ether);
        assertEq(vault.totalDeposits(), 5 ether);
    }
}`}
          </pre>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 25: COMPLETE AUDIT REPORT TEMPLATE                        */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 25
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Official Security Audit Report Deliverable
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Structured Markdown audit report detailing findings AUD-001 through AUD-003 with root causes, impacts, and remediations.
          </p>
        </div>

        <div className="space-y-4">
          {auditFindings.map((finding) => (
            <div key={finding.id} className="bg-white rounded-xl border border-[#e7e3da] p-5 shadow-sm space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-300">
                    {finding.id}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900">{finding.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-rose-700 font-mono uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Severity: {finding.severity}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {finding.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-[#f6f4ee] p-3 rounded-lg border border-[#e7e3da]">
                <div><span className="text-neutral-500">Contract:</span> <span className="font-bold text-neutral-900">{finding.contract}</span></div>
                <div><span className="text-neutral-500">Function:</span> <span className="font-bold text-neutral-900">{finding.function}</span></div>
              </div>

              <div className="space-y-2 text-xs leading-relaxed text-neutral-700">
                <p><strong>Description:</strong> {finding.description}</p>
                <p><strong>Root Cause:</strong> {finding.root_cause}</p>
                <p><strong>Impact:</strong> <span className="text-rose-800 font-medium">{finding.impact}</span></p>
                <div className="p-2.5 bg-neutral-900 text-emerald-400 font-mono rounded-lg text-[11px] overflow-x-auto">
                  Proof of Concept: {finding.poc}
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-950">
                  <strong>Remediation:</strong> {finding.recommendation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 26: ADVANCED AUDIT CHALLENGES                             */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 26
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Advanced Security Audit Challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white rounded-xl border border-[#e7e3da] space-y-2">
            <span className="font-bold text-amber-800 uppercase">Challenge 1 — Cross-Function Reentrancy</span>
            <p className="text-neutral-600 leading-relaxed">
              Create a vault with separate <code>withdraw()</code> and <code>borrow()</code> functions. Investigate whether an external call in <code>withdraw()</code> can reenter into <code>borrow()</code> to bypass collateralization limits.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#e7e3da] space-y-2">
            <span className="font-bold text-amber-800 uppercase">Challenge 2 — Flash Loan Oracle Manipulation</span>
            <p className="text-neutral-600 leading-relaxed">
              Build a mock lending market relying on an AMM spot price. Simulate an atomic flash loan swap that doubles the apparent collateral valuation and drains pool liquidity.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#e7e3da] space-y-2">
            <span className="font-bold text-amber-800 uppercase">Challenge 3 — Upgradeability Storage Collision</span>
            <p className="text-neutral-600 leading-relaxed">
              Deploy an unaligned proxy and implementation contract. Demonstrate how setting a variable in the logic contract corrupts the proxy's administrative address.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#e7e3da] space-y-2">
            <span className="font-bold text-amber-800 uppercase">Challenge 4 — Fuzzing Protocol Invariants</span>
            <p className="text-neutral-600 leading-relaxed">
              Formulate 5 mathematical invariants for a lending protocol and run a 50,000-run Foundry invariant campaign to identify subtle edge-case reverts.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 27: PRACTICAL ASSIGNMENT & GRADING RUBRIC                 */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 27
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Practical Assignment & Official Grading Rubric
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <p>
            Students deliver a full 2-week individual or team smart contract security audit submission including a local Foundry repository, reproduction tests, Slither scans, and a professional audit report.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">Grading Component</th><th className="p-2.5">Weight</th><th className="p-2.5">Evaluation Focus</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Threat Modeling</td><td className="p-2.5 font-bold text-amber-800">10%</td><td className="p-2.5">Asset identification, STRIDE analysis, and trust boundary mapping.</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Manual Code Review</td><td className="p-2.5 font-bold text-amber-800">20%</td><td className="p-2.5">Line-by-line inspection of access controls, CEI, and precision arithmetic.</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Vulnerability Reproduction</td><td className="p-2.5 font-bold text-amber-800">20%</td><td className="p-2.5">Working Foundry tests reproducing each confirmed exploit locally.</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Secure Remediation</td><td className="p-2.5 font-bold text-amber-800">20%</td><td className="p-2.5">Robust, regression-tested patches eliminating root vulnerability causes.</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Static & Fuzz Testing</td><td className="p-2.5 font-bold text-amber-800">15%</td><td className="p-2.5">Configuring Slither and executing Foundry property-based invariant test suites.</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Audit Report Quality</td><td className="p-2.5 font-bold text-amber-800">15%</td><td className="p-2.5">Structured Markdown report with severity classifications and disclosures.</td></tr>
                <tr className="bg-amber-50 font-bold"><td className="p-2.5 text-amber-950">Total Final Grade</td><td className="p-2.5 text-amber-900 font-extrabold">100%</td><td className="p-2.5 text-amber-950">Comprehensive evaluation across professional audit lifecycle.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    
            
      {/* ============================================================== */}
      {/* SECTION 27.A: 25 SENIOR SECURITY AUDITOR INTERVIEWS            */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Technical Assessment
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Senior Smart Contract Security Auditor Interview Questions
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            25 architectural interview scenarios covering reentrancy, oracle security, flash loan vectors, storage collisions, formal verification, and audit methodology.
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
                      <strong>Auditor Takeaway:</strong> {iq.takeaway}
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
              Module 18 Security & Auditing Examination
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              20 scenario-based questions evaluating Solidity vulnerabilities, static analysis, and testing methodology.
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
      {/* PART 28: RECOMMENDED LEARNING RESOURCES                       */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 28
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Recommended Official Learning Resources
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Industry standards, static analysis engines, vulnerability registries, and security CTFs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "OpenZeppelin Contracts Documentation",
              category: "Security Standards",
              desc: "Battle-tested libraries for AccessControl, ReentrancyGuard, SafeERC20, and Initializable proxies.",
              link: "https://docs.openzeppelin.com/contracts/"
            },
            {
              title: "Slither Static Analyzer",
              category: "Static Analysis",
              desc: "Trail of Bits static analysis framework with 80+ Solidity AST detectors and printer plugins.",
              link: "https://github.com/crytic/slither"
            },
            {
              title: "The Foundry Book",
              category: "Testing & Fuzzing",
              desc: "Official documentation for property-based fuzzing, invariant testing, and differential EVM testing.",
              link: "https://book.getfoundry.sh/"
            },
            {
              title: "SWC Registry (Smart Contract Weakness)",
              category: "Vulnerability Taxonomy",
              desc: "Standardized taxonomy and code samples of smart contract weaknesses (SWC-101 to SWC-136).",
              link: "https://swcregistry.io/"
            },
            {
              title: "OpenZeppelin Ethernaut",
              category: "Interactive CTF",
              desc: "Hands-on Web3 wargame covering reentrancy, delegatecall, storage collisions, and access control hacks.",
              link: "https://ethernaut.openzeppelin.com/"
            },
            {
              title: "Damn Vulnerable DeFi",
              category: "Advanced DeFi CTF",
              desc: "Complex security challenges focusing on flash loans, oracle manipulation, governance, and ERC-4626.",
              link: "https://www.damnvulnerabledefi.xyz/"
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
                Explore Resource &rarr;
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
          <span>Module 18 Final Summary & Core Security Principle</span>
        </h3>
        <p className="text-xs text-neutral-700 leading-relaxed">
          In this module, you explored smart contract systems from an adversarial perspective. You conducted systematic threat modeling, dissected classic and novel vulnerabilities (reentrancy, flash loan oracle manipulation, delegatecall storage collisions, and arithmetic precision errors), executed static analysis with Slither, and practiced invariant fuzzing with Foundry.
        </p>
        <div className="p-4 bg-white rounded-xl border border-amber-300 shadow-sm text-xs text-amber-950 font-medium space-y-1">
          <div className="text-[11px] font-mono uppercase font-bold text-amber-800">
            Central Security Engineering Principle
          </div>
          <p className="leading-relaxed">
            "In Web3, smart contracts manage bearer financial assets on an immutable, public execution layer where transactions are irreversible and automated adversaries operate 24/7. True security cannot be patched after deployment; it requires continuous threat modeling, strict adherence to the Checks-Effects-Interactions pattern, defense-in-depth access controls, invariant fuzz testing, and adversarial audits before a single dollar of user funds is accepted."
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
              Module 18 Security & Auditing Competency Checklist
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
          to="/learning/blockchain/dex-lending"
          className="w-full sm:w-auto p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col text-left"
        >
          <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
            &larr; Previous Module
          </span>
          <span className="text-sm font-bold text-neutral-900 mt-1">
            Module 17: Decentralized Exchanges & Lending Protocols
          </span>
        </Link>

        <Link
          to="/learning/blockchain/layer-2-scaling"
          className="w-full sm:w-auto p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-end text-right"
        >
          <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
            Next Module &rarr;
          </span>
          <span className="text-sm font-bold text-neutral-900 mt-1">
            Module 19: Layer 2 Scaling & Rollup Architecture
          </span>
        </Link>
      </div>
    
          </div>
        )}
      </main>
    </div>
  );
}
