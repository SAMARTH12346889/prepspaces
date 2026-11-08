# -*- coding: utf-8 -*-
"""
Module 18 Data Definitions: Checklist Items, Quiz Questions, Interview Questions, and Audit Findings.
Zero information loss - complete university-level curriculum.
"""

CHECKLIST_ITEMS = [
    {"id": "m18-obj-1", "label": "Analyze the 7 layers of blockchain security (Consensus, Network, Wallet, Contract, App, Oracle, Governance)."},
    {"id": "m18-obj-2", "label": "Distinguish smart contract security constraints (irreversibility, immutability, automated exploits) from traditional software."},
    {"id": "m18-obj-3", "label": "Define core security properties: Confidentiality (transparent public storage), Integrity, Availability, and Invariants."},
    {"id": "m18-obj-4", "label": "Perform threat modeling using STRIDE and asset-based attack surface analysis for DeFi applications."},
    {"id": "m18-obj-5", "label": "Execute the 7-step professional audit workflow from scoping to remediation and retesting."},
    {"id": "m18-obj-6", "label": "Identify and exploit missing access control vulnerabilities in administrative functions (AUD-001)."},
    {"id": "m18-obj-7", "label": "Implement role-based access control (RBAC) using OpenZeppelin AccessControl and custom errors."},
    {"id": "m18-obj-8", "label": "Dissect classic single-function, cross-function, cross-contract, and read-only reentrancy attack vectors."},
    {"id": "m18-obj-9", "label": "Apply the Checks-Effects-Interactions (CEI) design pattern and OpenZeppelin ReentrancyGuard (AUD-002)."},
    {"id": "m18-obj-10", "label": "Evaluate integer arithmetic in Solidity 0.8+, unchecked blocks, precision scaling, and rounding pitfalls."},
    {"id": "m18-obj-11", "label": "Analyze Denial of Service (DoS) vectors: gas exhaustion, unbounded loops, and pull-over-push payment patterns."},
    {"id": "m18-obj-12", "label": "Model front-running and Maximal Extractable Value (MEV): 3-step sandwich attacks and slippage protection bounds."},
    {"id": "m18-obj-13", "label": "Evaluate oracle manipulation risks using instantaneous AMM spot prices versus Chainlink AggregatorV3Interface feeds."},
    {"id": "m18-obj-14", "label": "Analyze flash loan manipulation vectors: temporary capital distortion, liquidation triggers, and governance exploits."},
    {"id": "m18-obj-15", "label": "Prevent signature replay attacks using incremental account nonces and EIP-712 structured domain separators."},
    {"id": "m18-obj-16", "label": "Avoid tx.origin authentication vulnerabilities by enforcing msg.sender for immediate caller identity."},
    {"id": "m18-obj-17", "label": "Handle unchecked external call return values and integrate OpenZeppelin SafeERC20 for non-standard tokens."},
    {"id": "m18-obj-18", "label": "Analyze delegatecall storage context, caller preservation, and proxy storage collision hazards."},
    {"id": "m18-obj-19", "label": "Secure upgradeable contracts: EIP-1967 storage slots, reentrancy in initializers, and timelocked governance."},
    {"id": "m18-obj-20", "label": "Assess block.timestamp dependence and miner manipulation bounds in time-sensitive contract logic."},
    {"id": "m18-obj-21", "label": "Analyze EVM pseudo-randomness pitfalls and implement Chainlink VRF or commit-reveal randomness schemes."},
    {"id": "m18-obj-22", "label": "Implement secure coding standards: zero-address validation, positive amount assertions, and minimal complexity."},
    {"id": "m18-obj-23", "label": "Configure and execute static analysis using Slither to detect dangerous patterns and triage false positives."},
    {"id": "m18-obj-24", "label": "Write Foundry fuzz tests (testFuzz) with bound constraints to explore arbitrary input spaces."},
    {"id": "m18-obj-25", "label": "Understand formal verification principles: Hoare logic {P} C {Q}, preconditions, postconditions, and mathematical invariants."},
    {"id": "m18-obj-26", "label": "Develop reproduction test suites in Foundry (VulnerableVault.t.sol) to confirm exploits locally."},
    {"id": "m18-obj-27", "label": "Draft a professional Markdown security audit report with severity ratings (Critical to Informational) and remediation advice."},
    {"id": "m18-obj-28", "label": "Adhere to ethical vulnerability disclosure guidelines, bug bounty rules, and safe-harbor terms."}
]

QUIZ_QUESTIONS = [
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
        "explanation": "A Critical finding represents a flaw that directly leads to catastrophic protocol compromise—such as unrestricted fund draining, uncollateralized minting, or total loss of administrative ownership—requiring immediate remediation before any deployment."
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
]

INTERVIEW_QUESTIONS = [
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
        "answer": "A signature replay attack occurs when a cryptographic signature validly generated by an account is intercepted and reused in an unauthorized context—either repeated multiple times on the same contract, or executed on a different contract or different blockchain network.\n\nDefenses:\n1. Account Nonces: Associate each user with a mapping(address => uint256) nonces. Enforce require(providedNonce == nonces[signer]++) to ensure each signature can only be consumed exactly once.\n2. Expiration Deadlines: Include require(block.timestamp <= deadline) in the signed payload.\n3. EIP-712 Structured Domain Separator: Hashes a standard domain struct containing the application name, version, verifyingContract address, and chainId. This cryptographically binds the signature to a specific deployed contract on a specific EVM network, preventing cross-contract and cross-chain replay.",
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
        "answer": "When distributing funds or processing refunds, never loop through an array of addresses making external transfers (push payments). If a single recipient is a smart contract that lacks a receive() function or intentionally reverts, the entire transaction reverts, blocking all other users indefinitely.\n\nDefense — Pull over Push:\nInstead of pushing funds to users, record their claimable amounts in a storage mapping: rewards[user] += amount. Provide an isolated claimReward() or withdraw() function that allows each user to claim their own funds in a standalone transaction. If an individual recipient's transfer fails, it impacts only themselves and cannot hold the protocol hostage.",
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
]

AUDIT_FINDINGS = [
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
]
