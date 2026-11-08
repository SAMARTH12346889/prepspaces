// projectx/src/Componets/BlockchainSolanaRust.jsx
import React, { useState, useMemo, useCallback } from "react";
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
    "title": "1. Introduction to Solana Blockchain",
    "category": "Core Architecture",
    "summary": "High-throughput, low-latency L1 architecture, historical motivation, web-scale performance, and core design philosophy."
  },
  {
    "id": "s2",
    "title": "2. Solana Architecture & Lifecycle",
    "category": "Core Architecture",
    "summary": "Seven core subsystems: Clients, Validators, Programs, Accounts, Runtime, Ledger, and PoH/TowerBFT consensus."
  },
  {
    "id": "s3",
    "title": "3. Solana vs Ethereum Paradigm",
    "category": "Core Architecture",
    "summary": "Stateful contracts vs stateless programs + data accounts, serialized vs parallel scheduling, fee structures."
  },
  {
    "id": "s4",
    "title": "4. Solana Accounts Model",
    "category": "Account Model",
    "summary": "Account data structure, owner field, lamports, rent exemption, executable flag, System vs Program vs PDA accounts."
  },
  {
    "id": "s5",
    "title": "5. Programs and Instructions",
    "category": "Execution Model",
    "summary": "Stateless executable code, instruction lifecycle, AccountMeta read/write/signer flags, multi-instruction transactions."
  },
  {
    "id": "s6",
    "title": "6. Solana Runtime & Compute Budget",
    "category": "Execution Model",
    "summary": "eBPF/sBF execution environment, 200,000 CU default, SetComputeUnitLimit, SetComputeUnitPrice, heap/stack boundaries."
  },
  {
    "id": "s7",
    "title": "7. Sealevel Parallel Execution Engine",
    "category": "Execution Model",
    "summary": "Multi-threaded instruction scheduling across CPU cores via static read/write account declarations."
  },
  {
    "id": "s8",
    "title": "8. Proof of History (PoH) Fundamentals",
    "category": "Consensus",
    "summary": "Sequential SHA-256 verifiable delay function, decentralized clock before consensus, continuous block propagation."
  },
  {
    "id": "s9",
    "title": "9. Solana Validators & Consensus",
    "category": "Consensus",
    "summary": "Leader schedule, Turbine block shredding, Gulf Stream mempool-less forwarding, Tower BFT, voting accounts."
  },
  {
    "id": "s10",
    "title": "10. Introduction to Rust for Solana",
    "category": "Rust Fundamentals",
    "summary": "Systems-level memory safety without garbage collector, zero-cost abstractions, compiled native performance."
  },
  {
    "id": "s11",
    "title": "11. Rust Ownership and Borrowing",
    "category": "Rust Fundamentals",
    "summary": "Affinity/move semantics, strict borrowing rules (& vs &mut), lifetimes ('info), prevention of data races."
  },
  {
    "id": "s12",
    "title": "12. Structs, Enums and Traits",
    "category": "Rust Fundamentals",
    "summary": "Data layout modeling, Option<T>, Result<T, E>, algebraic enums, trait implementations (BorshSerialize, AnchorSerialize)."
  },
  {
    "id": "s13",
    "title": "13. Rust Error Handling & Safety",
    "category": "Rust Fundamentals",
    "summary": "match, ?, custom ProgramError, Anchor error_code, checked arithmetic (checked_add, checked_sub) preventing overflow."
  },
  {
    "id": "s14",
    "title": "14. Cargo and the Solana Toolchain",
    "category": "Rust Fundamentals",
    "summary": "Cargo.toml dependencies, solana-program crate, sbf compilation target, cargo test harness, rustfmt, clippy."
  },
  {
    "id": "s15",
    "title": "15. Solana Development Environment",
    "category": "Developer Tooling",
    "summary": "Rustup, Solana CLI (solana-test-validator), Node.js, Yarn, Anchor CLI (avm), keypair generation, Devnet airdrops."
  },
  {
    "id": "s16",
    "title": "16. Anchor Framework Architecture",
    "category": "Anchor Development",
    "summary": "#[program], #[derive(Accounts)], #[account(...)], Context<T>, IDL generation, automatic discriminator injection."
  },
  {
    "id": "s17",
    "title": "17. Program Derived Addresses (PDAs)",
    "category": "Anchor Development",
    "summary": "Ed25519 off-curve derivation, find_program_address, canonical bump validation, deterministic key-value state indexing."
  },
  {
    "id": "s18",
    "title": "18. Cross-Program Invocation (CPI)",
    "category": "Anchor Development",
    "summary": "Composability, CpiContext, invoke vs invoke_signed, passing PDA signer seeds, invoking the System and Token programs."
  },
  {
    "id": "s19",
    "title": "19. Solana Token Program Architecture",
    "category": "Token Engineering",
    "summary": "Decoupled token mechanics, Token Mint account, Token Account, Associated Token Account (ATA) derivation standard."
  },
  {
    "id": "s20",
    "title": "20. SPL Token vs Token-2022 Extensions",
    "category": "Token Engineering",
    "summary": "Standard SPL Token (9 decimals, fixed layout) vs Token Extensions: transfer fees, default state, confidential transfers."
  },
  {
    "id": "s21",
    "title": "21. Solana Program Testing",
    "category": "Testing & QA",
    "summary": "Unit testing in Rust, integration testing via LiteSVM & Mollusk, bankrun in TypeScript, negative & invariant testing."
  },
  {
    "id": "s22",
    "title": "22. Solana Program Deployment",
    "category": "Deployment & Ops",
    "summary": "solana program deploy, buffer accounts, Upgradeable BPF Loader, authority keypairs, program size expansion, closing."
  },
  {
    "id": "s23",
    "title": "23. PrepToken Rust/Anchor Capstone Lab",
    "category": "Capstone Lab",
    "summary": "Complete lib.rs smart contract (Initialize, CreateAta, Mint, Transfer, Burn, TogglePause) and React DApp frontend."
  },
  {
    "id": "s24",
    "title": "24. Advanced Topics & Math Challenges",
    "category": "Advanced Systems",
    "summary": "Zero-copy accounts, account realloc, lookup tables (LUTs), priority fee markets, and 5 numerical derivations."
  },
  {
    "id": "s25",
    "title": "25. Comprehensive Assessment",
    "category": "Evaluation",
    "summary": "25 Senior Solana Architect Scenarios and 20 Multiple-Choice Examination Questions with scoring and feedback."
  },
  {
    "id": "s26",
    "title": "26. Practical Assignment",
    "category": "Evaluation",
    "summary": "End-to-end implementation brief: PrepToken program, PDA state, SPL CPI, React UI, Devnet deployment, test suite."
  },
  {
    "id": "s27",
    "title": "27. Official Learning Resources",
    "category": "Resources",
    "summary": "Curated reference links: Solana Docs, The Rust Book, Anchor Lang Docs, SPL Token Docs, and LiteSVM."
  },
  {
    "id": "s28",
    "title": "28. Mastery Matrix & Next Steps",
    "category": "Resources",
    "summary": "11 core competency benchmarks, synthesis of architectural paradigms, and gateway to Module 24 (Modular Blockchains)."
  }
];
const QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "question": "What is the primary purpose of a Solana account?",
    "options": [
      "To store application and blockchain state",
      "To execute JavaScript",
      "To create private keys",
      "To mine Bitcoin"
    ],
    "answer": 0,
    "explanation": "In Solana's decoupled architecture, programs are stateless executable code. All persistent application, balance, and protocol state is stored inside separate data accounts owned by programs."
  },
  {
    "id": "q2",
    "question": "What makes Sealevel parallel execution possible?",
    "options": [
      "Every transaction executes on a separate blockchain",
      "Transactions declare their account dependencies and permissions upfront",
      "Transactions do not require accounts",
      "All transactions are executed by one wallet"
    ],
    "answer": 1,
    "explanation": "Solana transactions must explicitly declare all accounts they will read from or write to. This allows the Sealevel runtime to construct a dependency graph and execute non-overlapping transactions concurrently across CPU threads."
  },
  {
    "id": "q3",
    "question": "What is Rust ownership designed to manage?",
    "options": [
      "Token prices",
      "Blockchain consensus",
      "Memory safety and resource lifetime",
      "Wallet connectivity"
    ],
    "answer": 2,
    "explanation": "Rust's ownership and borrowing system enforces strict compile-time checks on memory allocation, deallocation, and mutable references, preventing memory leaks, use-after-free, and data races without needing a garbage collector."
  },
  {
    "id": "q4",
    "question": "What is the main purpose of Anchor?",
    "options": [
      "Replacing the Solana blockchain",
      "Simplifying Solana program development and account validation",
      "Creating cryptocurrency prices",
      "Running validators"
    ],
    "answer": 1,
    "explanation": "Anchor is an opinionated framework for Solana that provides macros (#[program], #[derive(Accounts)]), automatic account discriminator serialization/deserialization, security constraint verification, and IDL client generation."
  },
  {
    "id": "q5",
    "question": "What is a PDA (Program Derived Address)?",
    "options": [
      "A wallet with a publicly known private key",
      "A randomly generated token",
      "A deterministic off-curve address derived using seeds and a program ID",
      "A Solana validator"
    ],
    "answer": 2,
    "explanation": "A PDA is derived deterministically from arbitrary seed bytes and a program ID, intentionally pushed off the Ed25519 elliptic curve so that no private key exists. Only the owning program can sign for it via invoke_signed."
  },
  {
    "id": "q6",
    "question": "Which CPI operation is used when a program must sign for its PDA?",
    "options": [
      "invoke_signed",
      "println!",
      "cargo build",
      "transfer_checked"
    ],
    "answer": 0,
    "explanation": "The invoke_signed instruction allows a Solana program to perform a Cross-Program Invocation on behalf of a PDA by providing the seed bytes and canonical bump, which the runtime verifies against the PDA address."
  },
  {
    "id": "q7",
    "question": "What does a mint account represent?",
    "options": [
      "A user's browser session",
      "An entire validator",
      "A transaction history table",
      "A specific token and its global supply information"
    ],
    "answer": 3,
    "explanation": "In the SPL Token standard, a Mint account defines the token itself: it records the total supply, decimals, mint authority, and optional freeze authority. Individual token holdings are stored in separate token accounts."
  },
  {
    "id": "q8",
    "question": "What does an ATA (Associated Token Account) represent?",
    "options": [
      "A validator identity",
      "The standard associated token account for a wallet and mint",
      "A smart-contract compiler",
      "A Solana block"
    ],
    "answer": 1,
    "explanation": "An Associated Token Account (ATA) is a PDA deterministically derived from a user's wallet address, the SPL Token Program ID, and the Token Mint address, ensuring each wallet has exactly one canonical token account per mint."
  },
  {
    "id": "q9",
    "question": "Which operation destroys token units?",
    "options": [
      "Mint",
      "Transfer",
      "Burn",
      "Create ATA"
    ],
    "answer": 2,
    "explanation": "The Burn instruction permanently removes token units from a token account and decrements the global total supply in the Token Mint account."
  },
  {
    "id": "q10",
    "question": "Why should a program validate account ownership and authority?",
    "options": [
      "To prevent unauthorized or invalid state modifications",
      "To increase the token's market price",
      "To avoid compiling Rust",
      "To remove transaction signatures"
    ],
    "answer": 0,
    "explanation": "Because Solana callers pass arbitrary accounts to instructions, a program must verify that accounts are owned by the expected program and that sensitive instructions are signed by authorized signers to prevent unauthorized drain attacks."
  },
  {
    "id": "q11",
    "question": "What is the 8-byte discriminator that Anchor prepends to every account data buffer?",
    "options": [
      "A random nonce generated at runtime",
      "First 8 bytes of the SHA-256 hash of 'account:<AccountStructName>'",
      "The program ID's public key prefix",
      "The account owner's Unix timestamp"
    ],
    "answer": 1,
    "explanation": "Anchor enforces type safety by writing the first 8 bytes of SHA-256('account:' + StructName) to the start of account data. When deserializing, Anchor checks this discriminator to ensure the account is of the expected type."
  },
  {
    "id": "q12",
    "question": "What is the default Compute Unit (CU) limit for a single Solana transaction?",
    "options": [
      "200,000 CUs",
      "1,400,000 CUs",
      "10,000 CUs",
      "50,000,000 CUs"
    ],
    "answer": 0,
    "explanation": "The default execution budget is 200,000 Compute Units per transaction. A transaction can request up to 1,400,000 CUs by including a ComputeBudgetProgram::set_compute_unit_limit instruction."
  },
  {
    "id": "q13",
    "question": "What happens if an account's lamport balance drops below the minimum rent-exempt threshold?",
    "options": [
      "The account is frozen until more lamports are deposited",
      "The transaction succeeds but validator fees double",
      "The transaction fails or the account is purged by the runtime",
      "The account data is converted into an NFT"
    ],
    "answer": 2,
    "explanation": "Solana enforces that any account created or modified must hold at least 2 years' worth of rent in lamports (rent-exempt minimum). Transactions that leave an account with data but below this threshold fail."
  },
  {
    "id": "q14",
    "question": "What is the role of Proof of History (PoH) in Solana's consensus?",
    "options": [
      "It is a Proof-of-Work mining algorithm",
      "It is an encoded cryptographic clock (VDF) providing an unforgeable passage of time",
      "It stores the entire transaction history off-chain",
      "It validates user identity via zero-knowledge proofs"
    ],
    "answer": 1,
    "explanation": "Proof of History uses sequential SHA-256 hashing as a Verifiable Delay Function. It proves that event A occurred before event B in real time, eliminating the need for validators to chat back and forth to agree on timestamps."
  },
  {
    "id": "q15",
    "question": "Why is checked arithmetic (e.g. checked_add, checked_sub) mandatory in Solana programs?",
    "options": [
      "Rust forbids normal + and - operators entirely",
      "In release mode, integer overflow wraps around silently, leading to catastrophic token exploits",
      "Solana validators only support floating point numbers",
      "The Anchor compiler fails without checked_add"
    ],
    "answer": 1,
    "explanation": "In Rust release builds (`--release`), integer overflow wraps around without panicking by default. If an attacker triggers an underflow or overflow in uninspected code, tokens could be created from thin air."
  },
  {
    "id": "q16",
    "question": "What is the difference between invoke and invoke_signed in Solana CPIs?",
    "options": [
      "invoke uses less gas than invoke_signed",
      "invoke only works with the System Program",
      "invoke passes existing transaction signatures; invoke_signed injects program PDA signatures using seeds",
      "invoke_signed can only be called from TypeScript"
    ],
    "answer": 2,
    "explanation": "When calling another program, `invoke` forwards existing transaction signatures. `invoke_signed` is used when the invoking program needs to sign on behalf of one of its own PDAs by providing seed bytes and bump."
  },
  {
    "id": "q17",
    "question": "What is Gulf Stream in the Solana validator architecture?",
    "options": [
      "A mempool-less transaction forwarding protocol that sends transactions to upcoming leaders in advance",
      "A decentralized oracle network for price feeds",
      "A hardware acceleration unit for GPUs",
      "A secondary cold storage protocol for Solana ledgers"
    ],
    "answer": 0,
    "explanation": "Solana does not use a traditional validator mempool. Gulf Stream allows clients and validators to push transactions directly to the scheduled leader for upcoming slots ahead of time, reducing confirmation latency."
  },
  {
    "id": "q18",
    "question": "In Anchor, what constraint verifies that an account was signed by the caller?",
    "options": [
      "#[account(mut)]",
      "Signer<'info>",
      "UncheckedAccount<'info>",
      "#[account(zero)]"
    ],
    "answer": 1,
    "explanation": "Using `pub authority: Signer<'info>` (or `#[account(signer)]`) ensures that Anchor automatically verifies `authority.is_signer == true` before executing the instruction body, rejecting unauthorized invocations."
  },
  {
    "id": "q19",
    "question": "What major enhancement does SPL Token-2022 provide over the classic SPL Token standard?",
    "options": [
      "It runs on the Ethereum Virtual Machine",
      "Modular extensions including native transfer fees, interest-bearing tokens, and confidential transfers",
      "It completely eliminates the need for Associated Token Accounts",
      "It increases block time to 12 seconds"
    ],
    "answer": 1,
    "explanation": "Token-2022 (Token Extensions) introduces modular type-length-value (TLV) extensions directly into the mint and account data, enabling transfer fees, non-transferable (soulbound) tokens, metadata pointers, and zero-knowledge confidential transfers."
  },
  {
    "id": "q20",
    "question": "Which tool provides ultra-fast in-process Solana program testing in Rust without spinning up a full test validator?",
    "options": [
      "Hardhat",
      "LiteSVM (or Mollusk)",
      "Ganache",
      "Anvil"
    ],
    "answer": 1,
    "explanation": "LiteSVM and Mollusk are lightweight, in-process Solana Virtual Machine execution harnesses that run Solana program unit tests in pure Rust in sub-milliseconds without network overhead or solana-test-validator startup lag."
  }
];
const INTERVIEW_QUESTIONS = [
  {
    "id": "int1",
    "question": "Explain the architectural difference between Ethereum's stateful contract model and Solana's account model.",
    "category": "Architecture",
    "answer": "In Ethereum, a smart contract encapsulates both the executable bytecode and its private internal storage (the contract's trie). All state mutations occur inside that unified contract boundary.\n\nIn Solana, code and state are strictly decoupled. Programs are purely stateless executables marked `executable: true`. All application state, balances, configuration, and data live in separate data accounts owned by the program. When an instruction executes, the caller must explicitly pass every data account the program needs to read or mutate. The runtime enforces that only the program designated in `account.owner` can modify that account's data buffer."
  },
  {
    "id": "int2",
    "question": "How does Sealevel achieve massive parallel instruction execution, and what causes an account write lock contention?",
    "category": "Architecture",
    "answer": "Every Solana transaction includes an array of `AccountMeta` structs with boolean flags: `is_signer` and `is_writable`. Before execution, the Sealevel scheduler inspects these account lists to construct an execution dependency graph.\n\nTransactions that only read accounts, or that write to mutually disjoint sets of accounts, are scheduled concurrently across available CPU cores without locking. Contention occurs when multiple transactions simultaneously attempt to write to the exact same account (e.g., a hot AMM pool or popular NFT drop mint). In this case, Sealevel must serialize those transactions sequentially, forming a queue."
  },
  {
    "id": "int3",
    "question": "What is a Program Derived Address (PDA), why does it not have a private key, and how is it derived mathematically?",
    "category": "PDAs & Cryptography",
    "answer": "A PDA is a 32-byte public key derived using `Pubkey::find_program_address(&[seeds], &program_id)`.\n\nThe algorithm hashes the seed bytes, a 1-byte nonce ('bump' starting at 255 and decrementing), and the program ID using SHA-256. It verifies whether the resulting 32-byte point lies on the Ed25519 elliptic curve. If it does, the bump is decremented and retried until a point *off* the curve is found. Because points off the curve have no valid discrete logarithm (private key), no outside actor can sign for this address. The runtime permits only the owning program to sign on its behalf via `invoke_signed`."
  },
  {
    "id": "int4",
    "question": "What is the difference between `invoke` and `invoke_signed` during a Cross-Program Invocation (CPI)?",
    "category": "CPI",
    "answer": "`invoke` executes another program's instruction forwarding the original caller's transaction signatures. It cannot forge new signatures.\n\n`invoke_signed` allows a program to sign for its own PDAs. The calling program passes the exact seed slices and bump byte used to derive the PDA. The Solana runtime recreates the PDA hash; if it matches an account in the instruction marked as a signer, the runtime elevates that account's `is_signer` flag to `true` inside the callee's execution context."
  },
  {
    "id": "int5",
    "question": "Explain Rust's ownership, borrowing, and lifetime rules and why they are ideal for high-performance blockchain runtimes.",
    "category": "Rust Systems",
    "answer": "Rust enforces three fundamental rules at compile time:\n1. Each value has exactly one owner.\n2. When the owner goes out of scope, the memory is immediately freed.\n3. At any point, code may have either any number of immutable references (`&T`) OR exactly one mutable reference (`&mut T`), but never both, and references must always be valid (lifetimes).\n\nThis completely eliminates use-after-free, double-free, null pointer dereferences, and multi-threaded data races without requiring a garbage collector runtime pause, making execution deterministic, fast, and secure."
  },
  {
    "id": "int6",
    "question": "What is the 8-byte Anchor account discriminator and how does it prevent Account Type Confusion attacks?",
    "category": "Anchor & Security",
    "answer": "When Anchor initializes an account using `#[account(init)]`, it calculates `Sha256('account:' + StructName)[..8]` and writes these 8 bytes as a prefix to the account data buffer. On every subsequent deserialization, Anchor reads the first 8 bytes and asserts equality.\n\nWithout this discriminator (or in raw Solana programs without enum tagging), an attacker could pass an account of Struct B (e.g., `UserStats`) into an instruction expecting Struct A (e.g., `AdminConfig`), causing the runtime to deserialize arbitrary user-controlled fields into privileged parameters."
  },
  {
    "id": "int7",
    "question": "How is rent exemption calculated on Solana, and what occurs when closing an account?",
    "category": "Solana Economics",
    "answer": "Rent exemption requires an account to hold a minimum balance in lamports equal to 2 years of static rent storage costs: `Rent = (account_size + 128_bytes_overhead) * lamports_per_byte_year * 2`. For an 82-byte account, this is approximately 0.00146 SOL.\n\nWhen closing an account in Anchor (`#[account(close = destination)]`), the program transfers all remaining lamports to the destination account and zeroes out the account's data buffer. The runtime automatically purges the zero-lamport account at transaction completion."
  },
  {
    "id": "int8",
    "question": "Explain the difference between a Token Mint, a Token Account, and an Associated Token Account (ATA).",
    "category": "SPL Token",
    "answer": "- **Token Mint**: An account that defines the token asset. It stores total circulating supply, decimal precision (typically 6 or 9), mint authority, and optional freeze authority.\n- **Token Account**: An account that holds a balance of a specific mint for an arbitrary owner.\n- **Associated Token Account (ATA)**: A standardized, deterministic PDA whose address is derived from `[wallet_pubkey, token_program_id, mint_pubkey]`. This eliminates balance fragmentation by guaranteeing a wallet has one canonical address per token."
  },
  {
    "id": "int9",
    "question": "What is a 'Missing Signer Check' vulnerability in Solana programs and how does Anchor defend against it?",
    "category": "Security",
    "answer": "In raw Solana, if an instruction modifies sensitive state based on an `authority: AccountInfo` parameter but forgets to check `if !authority.is_signer { return Err(ProgramError::MissingRequiredSignature); }`, any caller could pass someone else's public key and impersonate them.\n\nIn Anchor, using the type `pub authority: Signer<'info>` automatically injects this check at deserialization time, aborting with `ErrorCode::AccountNotSigner` if the account did not sign the transaction."
  },
  {
    "id": "int10",
    "question": "What is an 'Account Owner Check' vulnerability, and what happens if you use `UncheckedAccount`?",
    "category": "Security",
    "answer": "If a program reads state from an account assuming it is valid data without verifying `account.owner == &expected_program_id`, an attacker can create a counterfeit account with identical fields owned by a malicious program.\n\nAnchor's `Account<'info, T>` type automatically verifies that `account.to_account_info().owner == T::owner()`. Marking an account as `UncheckedAccount<'info>` disables this verification, requiring explicit manual validation or a `/// CHECK:` doc comment justifying safety."
  },
  {
    "id": "int11",
    "question": "Explain Proof of History (PoH) and how it differs from a consensus mechanism like Proof of Stake (PoS).",
    "category": "Consensus",
    "answer": "PoH is NOT a consensus mechanism; it is a cryptographic clock. It uses a sequential SHA-256 loop where each output becomes the input to the next iteration: $H_n = \\text{SHA-256}(H_{n-1})$. Data can be stamped into the sequence by hashing it along with the current state.\n\nBecause hashing cannot be parallelized, the number of steps proves the exact passage of real time. Consensus in Solana is handled by Tower BFT (a PBFT variant leveraging PoH time slots). Validators do not have to exchange messages to agree on block timestamps, drastically reducing latency."
  },
  {
    "id": "int12",
    "question": "What is Turbine and how does it solve block propagation bottlenecks in Solana validators?",
    "category": "Architecture",
    "answer": "Turbine is Solana's block propagation protocol inspired by BitTorrent. Instead of the block producer (leader) sending a multi-megabyte block to thousands of validators over unicast, the leader breaks the block into small packets ('shreds'), adds Reed-Solomon erasure codes, and distributes them in a multi-layer tree structure.\n\nEach validator retransmits packets to a small subset of downstream peers. Even with significant packet drops, validators can reconstruct the entire block from a fraction of shreds."
  },
  {
    "id": "int13",
    "question": "What is Gulf Stream and why does Solana not have a traditional mempool?",
    "category": "Architecture",
    "answer": "In Ethereum or Bitcoin, pending transactions sit in validator mempools awaiting selection. In Solana, because the validator leader schedule is known epochs in advance, clients and RPC nodes push transactions directly to the upcoming leader (and subsequent leaders in the schedule) via Gulf Stream.\n\nValidators execute transactions as they arrive rather than waiting for block boundaries, reducing memory overhead on nodes and achieving 400ms confirmation times."
  },
  {
    "id": "int14",
    "question": "Why is integer arithmetic overflow dangerous in Rust release mode, and how do you prevent it?",
    "category": "Rust Systems",
    "answer": "In Rust debug builds, integer overflow triggers a panic. However, in `--release` builds (which Solana programs require for BPF size and performance), arithmetic overflow wraps modulo $2^N$ without panicking.\n\nIf an arithmetic check like `balance - amount` wraps around, an attacker with 5 tokens deducting 10 tokens ends up with $2^{64} - 5$ tokens. Developers must always use `checked_add`, `checked_sub`, `checked_mul`, or Anchor's `require_gte!` macros."
  },
  {
    "id": "int15",
    "question": "Explain the structure and purpose of Solana's Compute Budget, and how Priority Fees operate.",
    "category": "Economics & Ops",
    "answer": "Every instruction in an eBPF program consumes Compute Units (CUs), with a default cap of 200,000 CUs per transaction (maximum 1,400,000 CUs). Complex tasks like cryptography or large loops consume significant CUs.\n\nTransactions can include compute budget instructions to adjust the limit (`set_compute_unit_limit`) and specify a priority fee in micro-lamports per CU (`set_compute_unit_price`). Priority fees incentivize the leader validator to prioritize scheduling the transaction, especially during local account write contention."
  },
  {
    "id": "int16",
    "question": "What are Address Lookup Tables (LUTs) in Versioned Transactions (v0) and why were they introduced?",
    "category": "Transactions",
    "answer": "Legacy Solana transactions are constrained to standard IPv6 MTU size (1,232 bytes), accommodating at most ~35 account public keys (32 bytes each). Complex DeFi composability (multi-hop swaps, flash loans) routinely exceeded this limit.\n\nVersioned Transactions (v0) introduce Address Lookup Tables (LUTs). An on-chain table stores up to 256 account public keys. The transaction references them using 1-byte u8 indices instead of full 32-byte addresses, allowing transactions to include up to 64 accounts."
  },
  {
    "id": "int17",
    "question": "Explain the difference between `msg!` logging, Anchor events, and their impact on transaction Compute Units.",
    "category": "Performance",
    "answer": "`msg!` emits human-readable strings to the program log via the `sol_log` syscall. Formatting dynamic strings using `format!` incurs heap allocation and significant CU costs (hundreds to thousands of CUs).\n\nAnchor `emit!(EventName { ... })` serializes a typed struct with base64 encoding to program data logs, which is far more efficient to parse off-chain by indexers and consumes fewer CUs than multi-line formatted strings."
  },
  {
    "id": "int18",
    "question": "What is the 'Reentrancy' risk on Solana compared to Ethereum?",
    "category": "Security",
    "answer": "In Ethereum, fallback functions allow an external contract to hijack execution flow and call back into the original contract before state variables are updated (e.g., The DAO hack).\n\nIn Solana, cross-program invocations (CPI) are synchronous, but Solana runtime prevents an instruction from directly calling back into the currently executing instruction if it violates borrow rules. However, 'cross-program state reentrancy' can still occur if Program A calls Program B, Program B calls Program C, and Program C invokes an instruction on Program A that reads stale, uncommitted account state."
  },
  {
    "id": "int19",
    "question": "How do Token-2022 Transfer Fees work under the hood?",
    "category": "SPL Token-2022",
    "answer": "Token-2022 mint accounts can include the `TransferFeeConfig` extension using a Type-Length-Value (TLV) data buffer appended to the standard 82-byte mint layout. The extension specifies basis points (bps, where 100 bps = 1%) and a maximum fee in absolute token units.\n\nDuring a `transfer_checked` instruction, the Token-2022 program automatically deducts the calculated fee from the recipient's credited amount and leaves it as withheld tokens in the recipient's ATA or transfers it directly to a harvest authority."
  },
  {
    "id": "int20",
    "question": "What is `AccountInfo::realloc` and how does it allow dynamically resizing account data?",
    "category": "Anchor Development",
    "answer": "Historically, account size was immutable upon creation. With `realloc`, a program can dynamically resize an account up to +10,240 bytes per transaction (or up to 10MB across multiple transactions).\n\nIn Anchor, the `#[account(realloc = new_len, realloc::payer = payer, realloc::zero = false)]` constraint automatically adjusts the account buffer, deducts or refunds lamports to maintain rent exemption, and reallocates memory."
  },
  {
    "id": "int21",
    "question": "Why is testing with LiteSVM or Mollusk superior to running tests on local validator (`solana-test-validator`) in CI/CD?",
    "category": "Testing & QA",
    "answer": "Starting `solana-test-validator` spawns a heavyweight background process, binds RPC ports, creates ledger directories, and takes 5-15 seconds to boot. Tests executed via `@coral-xyz/anchor` over HTTP/WebSocket suffer network latency.\n\nLiteSVM and Mollusk run the Solana BPF VM directly inside the Rust test process as an in-memory library. Tests execute in under 1 millisecond, support deterministic clock and slot manipulation, and run thousands of test cases without port collisions or file I/O bottlenecks in CI/CD."
  },
  {
    "id": "int22",
    "question": "Explain the Upgradeable BPF Loader and what happens when an upgrade authority is revoked.",
    "category": "Deployment",
    "answer": "Programs on Solana are deployed via the `BPFLoaderUpgradeab1e11111111111111111111111`. The deployment creates a Program Account (storing the program data address) and an executable ProgramData Account (storing the raw ELF bytecode and the `upgrade_authority` pubkey).\n\nThe upgrade authority can write new bytecode to a buffer account and atomically swap it into the ProgramData account. If the upgrade authority is set to `None`, the program becomes permanently immutable."
  },
  {
    "id": "int23",
    "question": "What is Zero-Copy deserialization in Anchor (`#[account(zero_copy)]`) and when is it required?",
    "category": "Performance",
    "answer": "Standard Anchor accounts use Borsh serialization, which allocates heap memory to deserialize the entire account into Rust structs on every instruction. For large accounts (>10KB up to 10MB), Borsh deserialization exceeds the 32KB stack and 32KB heap limits and consumes hundreds of thousands of CUs.\n\n`zero_copy` uses `bytemuck` to cast the raw memory buffer directly into a pointer to a struct without memory allocation or copying, enabling instant access to massive on-chain data tables (e.g., order books)."
  },
  {
    "id": "int24",
    "question": "How does Solana prevent replay attacks without a traditional account nonce?",
    "category": "Transactions",
    "answer": "Every Solana transaction must include a `recent_blockhash`. Validators maintain a cache of recent blockhashes for the last 150 slots (~60-90 seconds) and track processed transaction signatures within that window.\n\nIf a transaction's blockhash is older than 150 slots, it is rejected as expired. If it was already processed within the window, it is rejected as a duplicate. For offline transactions requiring long validity, Solana provides 'Durable Nonces' using a dedicated nonce account."
  },
  {
    "id": "int25",
    "question": "Walk through the security invariants required when building an on-chain token vault or staking pool.",
    "category": "Security & Architecture",
    "answer": "A production token vault requires:\n1. **Authority & Signer Validation**: Admin functions must assert `Signer` on the config authority.\n2. **PDA Signer Derivation**: Vault token accounts must be owned by a PDA with strictly validated seeds and canonical bump to prevent arbitrary account substitution.\n3. **Checked Mathematical Operations**: All reward calculations, share-to-token conversions, and staking durations must use `checked_*` with math rounding in favor of the protocol.\n4. **Correct Mint Verification**: The vault ATA must verify that `vault_ata.mint == expected_mint`.\n5. **Emergency Pause**: A state flag allowing authorized admins to freeze deposits and withdrawals during detected anomalies."
  }
];
const NUMERICAL_PROBLEMS = [
  {
    "id": "num1",
    "title": "Problem 1: Minimum Rent-Exempt Lamport Reserve Calculation",
    "scenario": "A Solana developer is deploying a new state account for a user profile in an Anchor smart contract. The account contains an 8-byte Anchor discriminator, a 32-byte Pubkey for the user, a 32-byte Pubkey for the token mint, an 8-byte u64 counter, a 1-byte boolean status flag, and a 1-byte bump seed.",
    "question": "Calculate the total account size in bytes, and the minimum rent-exempt balance in lamports and SOL, assuming the network rate is 6,960 lamports per byte per 2-year epoch, with a standard 128-byte account metadata overhead.",
    "given": [
      "Discriminator: 8 bytes",
      "User Pubkey: 32 bytes",
      "Mint Pubkey: 32 bytes",
      "Counter (u64): 8 bytes",
      "Status flag (bool): 1 byte",
      "Bump (u8): 1 byte",
      "Metadata overhead: 128 bytes",
      "Rent rate: 6,960 lamports / byte (2-year exempt)"
    ],
    "steps": [
      "Data Size = 8 + 32 + 32 + 8 + 1 + 1 = 82 bytes",
      "Total Storage Size = Data Size + 128 bytes overhead = 82 + 128 = 210 bytes",
      "Rent-Exempt Lamports = 210 bytes * 6,960 lamports/byte = 1,461,600 lamports",
      "In SOL: 1,461,600 / 10^9 = 0.0014616 SOL"
    ],
    "answer": "Total Data Size: 82 bytes; Total Account Size with overhead: 210 bytes; Rent-Exempt Balance: 1,461,600 lamports (0.0014616 SOL)."
  },
  {
    "id": "num2",
    "title": "Problem 2: Anchor Dynamic String Account Space Sizing",
    "scenario": "An Anchor developer defines an on-chain DAO proposal account with: 8-byte discriminator, 32-byte creator Pubkey, 4-byte string prefix + 32-byte UTF-8 title string, 4-byte string prefix + 128-byte description string, 8-byte u64 vote count, and 1-byte bump.",
    "question": "Compute the exact byte space allocation required in the `space = ...` attribute of `#[account(init)]`.",
    "given": [
      "Anchor Discriminator: 8 bytes",
      "Creator Pubkey: 32 bytes",
      "Title String: 4 bytes (Borsh length prefix) + 32 bytes (data) = 36 bytes",
      "Description String: 4 bytes (Borsh length prefix) + 128 bytes (data) = 132 bytes",
      "Vote Count (u64): 8 bytes",
      "Bump (u8): 1 byte"
    ],
    "steps": [
      "Sum individual components:",
      "Space = 8 (disc) + 32 (pubkey) + (4 + 32) (title) + (4 + 128) (desc) + 8 (u64) + 1 (bump)",
      "Space = 8 + 32 + 36 + 132 + 8 + 1 = 217 bytes"
    ],
    "answer": "Exact Space Allocation: 217 bytes."
  },
  {
    "id": "num3",
    "title": "Problem 3: Compute Unit Optimization & Priority Fee Economics",
    "scenario": "A DeFi bot submits an arbitrage transaction that consumes 16,500 Compute Units (CUs). By default, Solana allocates 200,000 CUs. The bot optimizes the transaction by calling `set_compute_unit_limit(18,000)` and sets a priority fee price of 50,000 micro-lamports per CU.",
    "question": "Calculate the priority fee paid in lamports and SOL, and compare the block execution efficiency (unused CU waste) before and after optimization.",
    "given": [
      "Actual consumed CUs: 16,500 CUs",
      "Default CU limit: 200,000 CUs",
      "Optimized CU limit: 18,000 CUs",
      "Priority price: 50,000 micro-lamports / CU"
    ],
    "steps": [
      "Priority fee calculation formula: Fee (lamports) = (Requested CU Limit * Micro-lamports per CU) / 1,000,000",
      "Fee = (18,000 * 50,000) / 1,000,000 = 900,000,000 / 1,000,000 = 900 lamports (0.0000009 SOL)",
      "Before optimization waste: 200,000 - 16,500 = 183,500 unused CUs locked (91.75% wasted block space)",
      "After optimization waste: 18,000 - 16,500 = 1,500 unused CUs locked (8.33% buffer)"
    ],
    "answer": "Priority Fee: 900 lamports (0.0000009 SOL); Unused CU waste reduced from 183,500 CUs (91.75%) down to 1,500 CUs (8.33%)."
  },
  {
    "id": "num4",
    "title": "Problem 4: Sealevel Multi-Core Concurrency Speedup (Amdahl's Law)",
    "scenario": "A high-performance Solana validator node runs on a 16-core CPU server. During peak market activity, 85% of incoming transactions access mutually disjoint account sets and can be executed in parallel by Sealevel. The remaining 15% of transactions modify a single hot liquidity pool account and must be executed strictly serially.",
    "question": "Calculate the theoretical maximum speedup factor achieved by the validator using Amdahl's Law.",
    "given": [
      "Parallel fraction p = 0.85",
      "Serial fraction (1 - p) = 0.15",
      "Number of processor cores N = 16"
    ],
    "steps": [
      "Amdahl's Law formula: Speedup = 1 / ((1 - p) + (p / N))",
      "Substitute values: Speedup = 1 / (0.15 + (0.85 / 16))",
      "0.85 / 16 = 0.053125",
      "Denominator = 0.15 + 0.053125 = 0.203125",
      "Speedup = 1 / 0.203125 \u2248 4.9228x"
    ],
    "answer": "Theoretical Speedup: 4.92x over single-threaded sequential execution."
  },
  {
    "id": "num5",
    "title": "Problem 5: Token-2022 Transfer Fee Extension Math",
    "scenario": "A community token is created using SPL Token-2022 with the Transfer Fee extension. The mint config specifies a transfer fee of 75 basis points (0.75%) and a maximum fee cap of 25,000 tokens. Alice initiates a transfer of 4,000,000 tokens to Bob.",
    "question": "Calculate the transfer fee withheld, the net tokens received by Bob, and determine whether the maximum fee cap was triggered.",
    "given": [
      "Transfer Amount = 4,000,000 tokens",
      "Fee Basis Points = 75 bps (0.75% = 75 / 10,000)",
      "Maximum Fee Cap = 25,000 tokens"
    ],
    "steps": [
      "Raw calculated fee = floor(Transfer Amount * Fee Bps / 10,000)",
      "Raw fee = (4,000,000 * 75) / 10,000 = 300,000,000 / 10,000 = 30,000 tokens",
      "Apply fee cap: min(30,000, 25,000) = 25,000 tokens",
      "Fee cap is triggered (30,000 > 25,000)",
      "Net tokens credited to Bob = 4,000,000 - 25,000 = 3,975,000 tokens",
      "Tokens withheld in Bob's ATA for fee authority: 25,000 tokens"
    ],
    "answer": "Withheld Transfer Fee: 25,000 tokens (Cap triggered); Net Tokens to Bob: 3,975,000 tokens."
  }
];

export default function BlockchainSolanaRust() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Sealevel Concurrency
  const [sealevelRunning, setSealevelRunning] = useState(false);
  const [activeTxIds, setActiveTxIds] = useState([]);
  const [queuedTxIds, setQueuedTxIds] = useState([]);
  const [completedTxIds, setCompletedTxIds] = useState([]);
  const [sealevelCoreAssignments, setSealevelCoreAssignments] = useState({ 1: null, 2: null, 3: null });
  const [sealevelConflictNote, setSealevelConflictNote] = useState("");
  const [sealevelTotalCus, setSealevelTotalCus] = useState(0);

  const sealevelTxs = useMemo(() => [
    { id: "Tx1", label: "SOL Transfer (Alice -> Bob)", reads: ["SysvarRent"], writes: ["AliceWallet", "BobWallet"], cus: 15000 },
    { id: "Tx2", label: "Create ATA (Charlie)", reads: ["CharlieWallet", "PrepMint"], writes: ["CharlieATA"], cus: 32000 },
    { id: "Tx3", label: "Swap SOL for PREP (Pool X)", reads: ["UserWallet"], writes: ["RaydiumPoolX", "UserTokenATA"], cus: 85000 },
    { id: "Tx4", label: "Arbitrage Swap (Pool X)", reads: ["BotWallet"], writes: ["RaydiumPoolX", "BotTokenATA"], cus: 92000 }
  ], []);

  const runSealevelBatch = useCallback(() => {
    setSealevelRunning(true);
    setCompletedTxIds([]);
    setSealevelTotalCus(0);

    // Stage 1: Tx1, Tx2, Tx3 execute concurrently on Cores 1, 2, 3
    // Tx4 has write conflict on RaydiumPoolX with Tx3, queued!
    setActiveTxIds(["Tx1", "Tx2", "Tx3"]);
    setQueuedTxIds(["Tx4"]);
    setSealevelCoreAssignments({ 1: "Tx1", 2: "Tx2", 3: "Tx3" });
    setSealevelConflictNote("Tx4 write-locked on 'RaydiumPoolX' (Held exclusively by Core 3 for Tx3)");
    setSealevelTotalCus(15000 + 32000 + 85000);

    setTimeout(() => {
      // Stage 2: Tx1, Tx2, Tx3 complete. Core 3 finishes; now Core 1 takes Tx4
      setCompletedTxIds(["Tx1", "Tx2", "Tx3"]);
      setActiveTxIds(["Tx4"]);
      setQueuedTxIds([]);
      setSealevelCoreAssignments({ 1: "Tx4", 2: null, 3: null });
      setSealevelConflictNote("Lock released! Core 1 is now executing Tx4");
      setSealevelTotalCus((prev) => prev + 92000);

      setTimeout(() => {
        setCompletedTxIds(["Tx1", "Tx2", "Tx3", "Tx4"]);
        setActiveTxIds([]);
        setSealevelCoreAssignments({ 1: null, 2: null, 3: null });
        setSealevelConflictNote("All 4 transactions finalized across 2 parallel phases!");
        setSealevelRunning(false);
      }, 1200);
    }, 1400);
  }, []);

  const resetSealevel = useCallback(() => {
    setSealevelRunning(false);
    setActiveTxIds([]);
    setQueuedTxIds([]);
    setCompletedTxIds([]);
    setSealevelCoreAssignments({ 1: null, 2: null, 3: null });
    setSealevelConflictNote("");
    setSealevelTotalCus(0);
  }, []);

  // Simulator 2 State: PDA Derivation
  const [pdaSeed1, setPdaSeed1] = useState("preptoken_config");
  const [pdaSeed2, setPdaSeed2] = useState("9vMhNDg8y5v2gJ3n4m8K3L1p9q5r");
  const [pdaProgramId, setPdaProgramId] = useState("PrepTok11111111111111111111111111111111111");
  const [pdaBump, setPdaBump] = useState(254);
  const [derivedPdaAddress, setDerivedPdaAddress] = useState("6gHk9qY1v3z4w5e6r7t8y9u0i1o2p3a4s5d6f7g8h9j");

  const computePda = useCallback(() => {
    // Generate deterministic mock PDA hash representation
    const fakeChars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    let hashStr = "";
    const seed = pdaSeed1.length + pdaSeed2.length + pdaProgramId.length;
    for (let i = 0; i < 44; i++) {
      hashStr += fakeChars[(seed * 7 + i * 13) % fakeChars.length];
    }
    const computedBump = 255 - ((seed % 4) + 1);
    setPdaBump(computedBump);
    setDerivedPdaAddress(hashStr);
  }, [pdaSeed1, pdaSeed2, pdaProgramId]);

  // Simulator 3 State: CPI Signer Elevation
  const [cpiStep, setCpiStep] = useState(0);

  const cpiStepDescriptions = useMemo(() => [
    {
      title: "1. User Signs Outer Transaction",
      desc: "User submits instruction `mint_tokens(50_000)` with `authority` as a verified transaction Signer.",
      code: "let tx = await program.methods.mintTokens(new BN(50000)).accounts({...}).rpc();"
    },
    {
      title: "2. Anchor Constraint Checks",
      desc: "Anchor deserializes accounts, verifies `authority.is_signer == true` and validates `seeds = [b\"config\"]` with stored bump.",
      code: "#[account(seeds = [b\"config\"], bump = config.bump, has_one = authority)]"
    },
    {
      title: "3. Signer Seeds Preparation",
      desc: "Program builds seed byte slices with the stored canonical bump `&[&[b\"config\", &[config.bump]]]`. No private key is used.",
      code: "let seeds = &[b\"config\".as_ref(), &[config.bump]];\nlet signer_seeds = &[&seeds[..]];"
    },
    {
      title: "4. Runtime Signer Elevation",
      desc: "Program executes `invoke_signed`. Solana runtime re-hashes seeds with caller program ID, verifies match with `config.key()`, and temporarily marks `config.is_signer = true`.",
      code: "CpiContext::new_with_signer(token_program, mint_to_accounts, signer_seeds)"
    },
    {
      title: "5. SPL Token State Mutation",
      desc: "SPL Token Program verifies that `config` is the valid `mint_authority` on the Mint account, increments total circulating supply, and credits the user's ATA.",
      code: "token::mint_to(cpi_ctx, amount)? // Mint.supply += 50,000; ATA.amount += 50,000"
    }
  ], []);

  const stepCpiFlow = useCallback(() => {
    setCpiStep((prev) => (prev + 1) % 5);
  }, []);

  // Simulator 4 State: PrepToken Protocol State Machine
  const [preptokenMaxSupply] = useState(1000000);
  const [preptokenTotalMinted, setPreptokenTotalMinted] = useState(150000);
  const [preptokenAliceBalance, setPreptokenAliceBalance] = useState(150000);
  const [preptokenBobBalance, setPreptokenBobBalance] = useState(0);
  const [preptokenPaused, setPreptokenPaused] = useState(false);
  const [mintAmount, setMintAmount] = useState(50000);
  const [transferAmount, setTransferAmount] = useState(10000);
  const [burnAmount, setBurnAmount] = useState(5000);
  const [preptokenLogs, setPreptokenLogs] = useState([
    { time: "00:00:01", type: "info", msg: "Initialize: Config PDA initialized (Max Supply: 1,000,000 PREP, Authority: Admin)" },
    { time: "00:00:02", type: "info", msg: "TokensMinted: Minted 150,000 PREP to Alice ATA" }
  ]);

  const addLog = useCallback((msg, type = "info") => {
    const timeStr = new Date().toTimeString().split(" ")[0];
    setPreptokenLogs((prev) => [{ time: timeStr, msg, type }, ...prev].slice(0, 8));
  }, []);

  const executeMint = useCallback(() => {
    if (preptokenPaused) {
      addLog("Transaction reverted: TokenError::ProtocolPaused", "error");
      return;
    }
    if (mintAmount <= 0) return;
    if (preptokenTotalMinted + mintAmount > preptokenMaxSupply) {
      addLog(`Transaction reverted: TokenError::MaximumSupplyExceeded (${preptokenTotalMinted + mintAmount} > ${preptokenMaxSupply})`, "error");
      return;
    }
    setPreptokenTotalMinted((prev) => prev + mintAmount);
    setPreptokenAliceBalance((prev) => prev + mintAmount);
    addLog(`TokensMinted: Minted ${mintAmount.toLocaleString()} PREP to Alice ATA via CPI`, "success");
  }, [preptokenPaused, mintAmount, preptokenTotalMinted, preptokenMaxSupply, addLog]);

  const executeTransfer = useCallback(() => {
    if (preptokenPaused) {
      addLog("Transaction reverted: TokenError::ProtocolPaused", "error");
      return;
    }
    if (transferAmount <= 0) return;
    if (preptokenAliceBalance < transferAmount) {
      addLog(`Transaction reverted: TokenError::InsufficientFunds (${preptokenAliceBalance} < ${transferAmount})`, "error");
      return;
    }
    setPreptokenAliceBalance((prev) => prev - transferAmount);
    setPreptokenBobBalance((prev) => prev + transferAmount);
    addLog(`TokensTransferred: Alice transferred ${transferAmount.toLocaleString()} PREP to Bob ATA`, "success");
  }, [preptokenPaused, transferAmount, preptokenAliceBalance, addLog]);

  const executeBurn = useCallback(() => {
    if (preptokenPaused) {
      addLog("Transaction reverted: TokenError::ProtocolPaused", "error");
      return;
    }
    if (burnAmount <= 0) return;
    if (preptokenAliceBalance < burnAmount) {
      addLog(`Transaction reverted: TokenError::InsufficientFunds (${preptokenAliceBalance} < ${burnAmount})`, "error");
      return;
    }
    setPreptokenAliceBalance((prev) => prev - burnAmount);
    addLog(`TokensBurned: Alice burned ${burnAmount.toLocaleString()} PREP (Supply decreased)`, "warn");
  }, [preptokenPaused, burnAmount, preptokenAliceBalance, addLog]);

  const togglePause = useCallback(() => {
    setPreptokenPaused((prev) => {
      const next = !prev;
      addLog(`PauseToggled: Protocol pause set to ${next ? "TRUE" : "FALSE"}`, next ? "warn" : "info");
      return next;
    });
  }, [addLog]);

  const resetPrepToken = useCallback(() => {
    setPreptokenTotalMinted(150000);
    setPreptokenAliceBalance(150000);
    setPreptokenBobBalance(0);
    setPreptokenPaused(false);
    setPreptokenLogs([
      { time: "00:00:01", type: "info", msg: "Protocol state reset to initial parameters" }
    ]);
  }, []);

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
      const saved = localStorage.getItem("prepspaces_blockchain_m23_progress");
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
        localStorage.setItem("prepspaces_blockchain_m23_progress", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m23_progress");
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
          <span className="text-xs font-bold text-orange-600 font-mono">Module 23</span>
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
            Curriculum & Lab
          </button>
          <button
            onClick={() => setActiveTab("simulators")}
            className={`px-3 py-1.5 rounded-lg transition ${
              activeTab === "simulators"
                ? "bg-white text-neutral-900 shadow-sm"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Interactive Simulators (4)
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 space-y-12">
        {/* Hero Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Advanced Blockchain Engineering · University-Level Course
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Module 23 — Solana Development with Rust
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Master the high-throughput architecture of Solana: decoupled accounts, Sealevel multi-core parallel execution, the Proof of History cryptographic clock, Anchor smart contract development in Rust, Program Derived Addresses (PDAs), Cross-Program Invocations (CPI), and build a complete decentralized token-management protocol.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            
      <div className="space-y-12">
        {/* Header / Intro */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4">
            Interactive Runtimes & Simulators
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-3">
            Solana Execution & State Machine Simulators
          </h2>
          <p className="text-neutral-600 leading-relaxed max-w-3xl">
            Explore the four cornerstones of high-performance Solana engineering: Sealevel multi-threaded transaction scheduling, deterministic PDA derivation off the Ed25519 curve, Cross-Program Invocations (CPI) with program signer seeds, and live state operations of the PrepToken token management protocol.
          </p>
        </div>

        {/* SIMULATOR 1: Sealevel Parallel Execution Engine */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Simulator 1 of 4</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Sealevel Parallel Execution & Account Conflict Engine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Visualize how static read/write account declarations enable multi-threaded core scheduling and detect write-lock serialization bottlenecks.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={runSealevelBatch}
                disabled={sealevelRunning}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-sm"
              >
                {sealevelRunning ? "Executing Batch..." : "Execute 4 Transactions"}
              </button>
              <button
                onClick={resetSealevel}
                className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Transaction Queue */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {sealevelTxs.map((tx) => {
              const isExecuting = sealevelRunning && activeTxIds.includes(tx.id);
              const isWaiting = sealevelRunning && queuedTxIds.includes(tx.id);
              const isFinished = completedTxIds.includes(tx.id);

              return (
                <div
                  key={tx.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isExecuting
                      ? "border-orange-500 bg-orange-50/60 ring-2 ring-orange-400"
                      : isWaiting
                      ? "border-amber-400 bg-amber-50/50"
                      : isFinished
                      ? "border-emerald-400 bg-emerald-50/40"
                      : "border-neutral-200 bg-neutral-50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-neutral-800">{tx.id}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isExecuting
                          ? "bg-orange-200 text-orange-900 animate-pulse"
                          : isWaiting
                          ? "bg-amber-200 text-amber-900"
                          : isFinished
                          ? "bg-emerald-200 text-emerald-900"
                          : "bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      {isExecuting ? "Executing" : isWaiting ? "Lock Contention" : isFinished ? "Finalized" : "Pending"}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-neutral-900 mb-2">{tx.label}</div>
                  <div className="space-y-1.5 text-[11px] font-mono">
                    <div className="text-neutral-500">
                      <span className="text-neutral-400">Read: </span>
                      {tx.reads.join(", ") || "None"}
                    </div>
                    <div className="text-neutral-500">
                      <span className="text-neutral-400">Write: </span>
                      <span className="text-orange-700 font-bold">{tx.writes.join(", ")}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cores and Execution Visualization */}
          <div className="bg-neutral-900 text-neutral-100 rounded-xl p-5 mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center justify-between">
              <span>Validator CPU Execution Cores (Sealevel Scheduler)</span>
              <span>Total CUs: {sealevelTotalCus.toLocaleString()} / 1,400,000 CU</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((coreNum) => {
                const activeTx = sealevelCoreAssignments[coreNum];
                return (
                  <div key={coreNum} className="bg-neutral-800/80 rounded-lg p-3 border border-neutral-700">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-orange-400">CPU Core {coreNum}</span>
                      <span className="text-[10px] text-neutral-400">
                        {activeTx ? "Busy (Lock Held)" : "Idle"}
                      </span>
                    </div>
                    <div className="h-10 flex items-center justify-center rounded bg-neutral-900 border border-neutral-700/60 font-mono text-xs">
                      {activeTx ? (
                        <span className="text-emerald-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          Processing {activeTx}
                        </span>
                      ) : (
                        <span className="text-neutral-500">Awaiting Batch</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {sealevelConflictNote && (
              <div className="mt-4 p-3 rounded-lg bg-amber-950/60 border border-amber-800/80 text-amber-200 text-xs flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider text-[10px] bg-amber-800 px-2 py-0.5 rounded">Lock Contention</span>
                <span>{sealevelConflictNote}</span>
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs text-neutral-700 leading-relaxed">
            <span className="font-bold text-neutral-900">Sealevel Insight:</span> Notice that Tx1 (Alice &rarr; Bob), Tx2 (Charlie ATA), and Tx3 (Swap Pool X) run simultaneously across 3 CPU threads without blocking because their writable account sets are mutually disjoint. Tx4 (Arbitrage Pool X) is forced to wait because Pool X is already locked with exclusive write permissions by Core 3.
          </div>
        </div>

        {/* SIMULATOR 2: Program Derived Address (PDA) & Bump Finder */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Simulator 2 of 4</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">PDA & Canonical Bump Search Engine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Explore how seeds and program IDs are hashed iteratively from bump 255 downward until finding a 32-byte point off the Ed25519 curve.
              </p>
            </div>
            <button
              onClick={computePda}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
            >
              Derive PDA
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1">
                Seed 1 (String Prefix)
              </label>
              <input
                type="text"
                value={pdaSeed1}
                onChange={(e) => setPdaSeed1(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1">
                Seed 2 (Wallet / Mint Pubkey)
              </label>
              <input
                type="text"
                value={pdaSeed2}
                onChange={(e) => setPdaSeed2(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1">
                Program ID (Base58)
              </label>
              <input
                type="text"
                value={pdaProgramId}
                onChange={(e) => setPdaProgramId(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Derivation Steps Log */}
          <div className="bg-neutral-900 text-neutral-200 rounded-xl p-5 mb-6 font-mono text-xs space-y-3">
            <div className="text-neutral-400 uppercase text-[10px] tracking-wider border-b border-neutral-800 pb-2">
              Ed25519 Curve Iteration Log
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="text-neutral-400">
                1. Testing bump = 255: SHA256(&#91;b"{pdaSeed1}", {pdaSeed2.slice(0, 6)}..., 255, ProgramID&#93;) &rarr; <span className="text-amber-400">Valid point on curve (private key would exist, rejected)</span>
              </div>
              <div className="text-neutral-400">
                2. Testing bump = {pdaBump}: SHA256(&#91;b"{pdaSeed1}", {pdaSeed2.slice(0, 6)}..., {pdaBump}, ProgramID&#93;) &rarr; <span className="text-emerald-400 font-bold">Point OFF curve verified! (Deterministic PDA established)</span>
              </div>
            </div>
            <div className="pt-2 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-neutral-400">Derived Address: </span>
                <span className="text-orange-400 font-bold break-all">{derivedPdaAddress}</span>
              </div>
              <div className="text-emerald-400 font-bold">Canonical Bump: {pdaBump}</div>
            </div>
          </div>

          {/* Anchor Code Snippet Preview */}
          <div className="bg-[#f6f4ee] rounded-xl border border-[#e7e3da] p-4 text-xs">
            <div className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider mb-2">
              Generated Anchor Rust Account Validation Macro
            </div>
            <pre className="font-mono text-neutral-800 text-[11px] overflow-x-auto whitespace-pre">
{`#[account(
    init_if_needed,
    payer = authority,
    space = 8 + TokenConfig::INIT_SPACE,
    seeds = [b"${pdaSeed1}", authority.key().as_ref()],
    bump
)]
pub token_config: Account<'info, TokenConfig>,`}
            </pre>
          </div>
        </div>

        {/* SIMULATOR 3: Cross-Program Invocation (CPI) & PDA Signer Seeds */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Simulator 3 of 4</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Cross-Program Invocation (CPI) Signer Elevation</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Step through how your Anchor program executes `token::mint_to` using `invoke_signed` by proving PDA ownership with seed slices.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={stepCpiFlow}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                {cpiStep === 4 ? "Restart CPI Walkthrough" : `Advance Step (${cpiStep + 1}/5)`}
              </button>
            </div>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-6">
            {[
              "1. User Signs Tx",
              "2. Anchor Checks",
              "3. Seed Preparation",
              "4. Runtime Elevation",
              "5. Token Program State"
            ].map((stepName, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-center transition ${
                  cpiStep === idx
                    ? "border-orange-500 bg-orange-50 font-bold text-orange-900 ring-2 ring-orange-300"
                    : cpiStep > idx
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : "border-neutral-200 bg-neutral-50 text-neutral-500"
                }`}
              >
                <div className="text-[10px] font-mono mb-1">Step {idx + 1}</div>
                <div className="text-xs">{stepName}</div>
              </div>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-neutral-900 text-neutral-200 rounded-xl p-5 mb-6 font-mono text-xs">
            <div className="text-orange-400 font-bold uppercase text-[10px] tracking-wider mb-2">
              Execution Frame: {cpiStepDescriptions[cpiStep].title}
            </div>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {cpiStepDescriptions[cpiStep].desc}
            </p>
            <div className="p-3 rounded bg-neutral-950 border border-neutral-800 text-[11px] overflow-x-auto text-emerald-400">
              <pre>{cpiStepDescriptions[cpiStep].code}</pre>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Why not `invoke`?</span>
              <p className="text-neutral-600 mt-1">
                Standard `invoke` forwards signatures from the outer transaction. Since the mint authority is a PDA, no private key exists to sign the outer transaction. `invoke_signed` allows the program to vouch for its own PDA.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Runtime Verification:</span>
              <p className="text-neutral-600 mt-1">
                The Solana runtime recomputes `hash(seeds, bump, caller_program_id)`. If the hash equals the signer account address, the runtime flips `is_signer = true` for that callee CPI context only.
              </p>
            </div>
          </div>
        </div>

        {/* SIMULATOR 4: PrepToken Life-Cycle Simulator */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Simulator 4 of 4</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">PrepToken Capstone DApp State Machine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Interact with the full token management lifecycle: initialize config PDA, mint under max supply cap, transfer between ATAs, burn units, and toggle pause.
              </p>
            </div>
            <button
              onClick={resetPrepToken}
              className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
            >
              Reset Protocol State
            </button>
          </div>

          {/* Protocol State Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Max Supply Cap</div>
              <div className="text-lg font-bold text-neutral-900 font-mono mt-1">
                {preptokenMaxSupply.toLocaleString()} PREP
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Hardcoded safety limit</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Total Minted</div>
              <div className="text-lg font-bold text-orange-600 font-mono mt-1">
                {preptokenTotalMinted.toLocaleString()} PREP
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                {Math.round((preptokenTotalMinted / preptokenMaxSupply) * 100)}% of cap
              </div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Alice ATA Balance</div>
              <div className="text-lg font-bold text-emerald-600 font-mono mt-1">
                {preptokenAliceBalance.toLocaleString()} PREP
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Associated Token Account</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Bob ATA Balance</div>
              <div className="text-lg font-bold text-indigo-600 font-mono mt-1">
                {preptokenBobBalance.toLocaleString()} PREP
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Recipient Token Account</div>
            </div>
          </div>

          {/* Protocol Status Banner */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] mb-6">
            <div className="flex items-center gap-3">
              <span
                className={`w-3 h-3 rounded-full ${
                  preptokenPaused ? "bg-rose-500 animate-pulse" : "bg-emerald-500"
                }`}
              ></span>
              <span className="text-xs font-bold text-neutral-800">
                Protocol Status: {preptokenPaused ? "PAUSED (Transfers & Mints Blocked)" : "ACTIVE (All operations permitted)"}
              </span>
            </div>
            <button
              onClick={togglePause}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                preptokenPaused
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-rose-600 hover:bg-rose-700 text-white"
              }`}
            >
              {preptokenPaused ? "Unpause Protocol" : "Pause Protocol (Admin)"}
            </button>
          </div>

          {/* Action Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Mint Form */}
            <div className="p-4 rounded-xl border border-neutral-200 bg-white">
              <div className="text-xs font-bold text-neutral-900 mb-2">Mint Tokens to Alice</div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  value={mintAmount}
                  onChange={(e) => setMintAmount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 border border-neutral-300 rounded-lg text-xs font-mono"
                  placeholder="Amount"
                />
                <button
                  onClick={executeMint}
                  disabled={preptokenPaused}
                  className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-300 text-white rounded-lg text-xs font-bold transition whitespace-nowrap"
                >
                  Mint PREP
                </button>
              </div>
              <div className="text-[10px] text-neutral-500">Requires `authority` signature + Max supply guard</div>
            </div>

            {/* Transfer Form */}
            <div className="p-4 rounded-xl border border-neutral-200 bg-white">
              <div className="text-xs font-bold text-neutral-900 mb-2">Transfer Alice &rarr; Bob</div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 border border-neutral-300 rounded-lg text-xs font-mono"
                  placeholder="Amount"
                />
                <button
                  onClick={executeTransfer}
                  disabled={preptokenPaused}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-neutral-300 text-white rounded-lg text-xs font-bold transition whitespace-nowrap"
                >
                  Transfer
                </button>
              </div>
              <div className="text-[10px] text-neutral-500">Invokes SPL Token `transfer` via CPI</div>
            </div>

            {/* Burn Form */}
            <div className="p-4 rounded-xl border border-neutral-200 bg-white">
              <div className="text-xs font-bold text-neutral-900 mb-2">Burn Alice's Tokens</div>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  value={burnAmount}
                  onChange={(e) => setBurnAmount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 border border-neutral-300 rounded-lg text-xs font-mono"
                  placeholder="Amount"
                />
                <button
                  onClick={executeBurn}
                  disabled={preptokenPaused}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 disabled:bg-neutral-300 text-white rounded-lg text-xs font-bold transition whitespace-nowrap"
                >
                  Burn PREP
                </button>
              </div>
              <div className="text-[10px] text-neutral-500">Decrements total minted & destroys supply</div>
            </div>
          </div>

          {/* Event Log Output */}
          <div className="bg-neutral-900 text-neutral-300 rounded-xl p-4 font-mono text-xs">
            <div className="text-neutral-500 uppercase text-[10px] tracking-wider mb-2 flex items-center justify-between">
              <span>Anchor Program Event Logs (`emit!`)</span>
              <button onClick={() => setPreptokenLogs([])} className="text-neutral-500 hover:text-neutral-300 text-[10px]">
                Clear
              </button>
            </div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto">
              {preptokenLogs.length === 0 ? (
                <div className="text-neutral-600 italic">No events emitted yet. Execute an operation above.</div>
              ) : (
                preptokenLogs.map((log, idx) => (
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
      </div>

          </div>
        ) : (
          <div className="space-y-12">
            
      {/* SECTION 1: Introduction to Solana Blockchain */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-neutral-500">Architecture Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          1. Introduction to Solana Blockchain
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">1.1 What is Solana?</h3>
          <p>
            Solana is a high-performance Layer 1 public blockchain engineered specifically for high throughput, sub-second transaction finality, and ultra-low transaction costs. Unlike traditional blockchains that process transactions sequentially in single-threaded virtual machines, Solana was designed from inception as a "software system built to scale with Moore's Law," utilizing multi-threaded parallel instruction execution across commodity multi-core hardware.
          </p>
          <p>
            Operating natively on the Proof of History (PoH) cryptographic clock synchronized with Tower BFT (a PBFT-derived consensus mechanism), Solana achieves theoretical throughput of 50,000+ transactions per second (TPS) with 400-millisecond block times, without requiring Layer 2 rollups or sharding architectures.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">1.2 Why was Solana Introduced?</h3>
          <p>
            Early public smart contract blockchains like Ethereum encountered fundamental scalability bottlenecks rooted in their core architecture:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>
              <strong>Single-Threaded EVM Execution:</strong> In the Ethereum Virtual Machine, every node must process every smart contract transaction sequentially. If one contract experiences massive traffic (e.g., an NFT mint), the global mempool becomes congested, driving gas prices up for every user on the network.
            </li>
            <li>
              <strong>Unsynchronized Node Clocks:</strong> Distributed consensus traditionally requires validators to communicate back and forth over high-latency peer-to-peer networks simply to agree on the time and order of transactions before constructing a block.
            </li>
            <li>
              <strong>Coupled State and Execution:</strong> Stateful contracts keep bytecode, variables, and internal balances within one monolithic storage trie, creating disk I/O bottlenecks.
            </li>
          </ul>
          <p>
            Solana solved these structural barriers by introducing hardware-native parallelism, a cryptographic passage-of-time clock, and a complete architectural separation between stateless executable program code and stateful data accounts.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">1.3 Important Solana Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <h4 className="font-bold text-neutral-900 mb-1">Decentralized Finance (DeFi) & Central Limit Order Books</h4>
              <p className="text-xs text-neutral-600">
                Protocols like Phoenix and OpenBook run fully on-chain central limit order books (CLOBs) with sub-second order placement, matching, and cancellation at micro-cent fee levels—capabilities impossible on sequential chains.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <h4 className="font-bold text-neutral-900 mb-1">Decentralized Physical Infrastructure (DePIN)</h4>
              <p className="text-xs text-neutral-600">
                Networks like Helium and Hivemapper migrate millions of real-time telemetry, location, and bandwidth micropayments onto Solana due to its ability to handle continuous, micro-fee state writes at massive scale.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <h4 className="font-bold text-neutral-900 mb-1">Global Payments & Settlement</h4>
              <p className="text-xs text-neutral-600">
                Visa and Stripe integrate Solana for stablecoin settlement (USDC), utilizing the SPL Token standard and sub-second confirmation times to rival traditional card network rails.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <h4 className="font-bold text-neutral-900 mb-1">Web3 Gaming & Consumer Social</h4>
              <p className="text-xs text-neutral-600">
                Real-time game loops and social feeds where players submit micro-actions without friction or high gas fees interrupting the user experience.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">1.4 Solana's Fundamental Design Philosophy</h3>
          <p>
            Solana's architecture rests on four unwavering principles:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-neutral-700">
            <li><strong>Hardware Scaling (Moore's Law):</strong> As CPU core counts increase, SSD bandwidth expands, and GPU acceleration becomes ubiquitous, the blockchain's throughput expands proportionally without altering consensus rules.</li>
            <li><strong>Mempool-less Transaction Forwarding:</strong> Transactions stream directly to the scheduled leader validator before block production begins, eliminating the memory and gossip overhead of a global mempool.</li>
            <li><strong>Stateless Logic & Stateful Accounts:</strong> Programs do not store internal variables; all state is externalized into dedicated accounts passed as parameters.</li>
            <li><strong>Explicit Dependency Declarations:</strong> Every transaction explicitly enumerates every account it will read from or write to, enabling the runtime to schedule non-overlapping transactions in parallel.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 2: Solana Architecture */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-neutral-500">System Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          2. Solana Architecture & Lifecycle
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">2.1 High-Level Architecture: The Seven Subsystems</h3>
          <p>
            Solana operates through seven tightly integrated architectural components:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800 space-y-1">
              <span className="text-orange-400 font-bold text-sm">1. Clients</span>
              <p className="text-neutral-400">Applications, browser wallets (Phantom, Solflare), and SDKs (@solana/web3.js) that construct, serialize, sign, and submit transactions to network RPC endpoints.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800 space-y-1">
              <span className="text-orange-400 font-bold text-sm">2. Validators</span>
              <p className="text-neutral-400">Hardware nodes running the Solana validator client (Agave / Firedancer). They participate in PoH time generation, execute instructions, produce blocks, and vote on ledger state.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800 space-y-1">
              <span className="text-orange-400 font-bold text-sm">3. Programs</span>
              <p className="text-neutral-400">Stateless compiled ELF shared objects (using Solana Bytecode Format / eBPF) stored on-chain. Programs contain business logic but hold no internal state.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800 space-y-1">
              <span className="text-orange-400 font-bold text-sm">4. Accounts</span>
              <p className="text-neutral-400">Persistent memory containers that store balances (lamports), data buffers, program bytecode, or ownership metadata. All Solana state resides in accounts.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800 space-y-1">
              <span className="text-orange-400 font-bold text-sm">5. Runtime (SVM)</span>
              <p className="text-neutral-400">The Solana Virtual Machine and Sealevel execution engine that validates signatures, verifies account ownership, enforces compute budgets, and executes instructions in parallel.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800 space-y-1">
              <span className="text-orange-400 font-bold text-sm">6. Ledger</span>
              <p className="text-neutral-400">The append-only historical log of transactions, PoH hashes, and finalized state transitions committed by validator consensus.</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800 space-y-1 md:col-span-2">
              <span className="text-orange-400 font-bold text-sm">7. Consensus Engine (Tower BFT + PoH)</span>
              <p className="text-neutral-400">Tower BFT utilizes the Proof of History tick sequence as an objective decentralized clock, allowing validators to cast locked stake-weighted votes without quadratic gossip messaging overhead.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">2.2 Transaction Execution Architecture</h3>
          <p>
            The lifecycle of a Solana transaction unfolds across four distinct pipeline stages:
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">1</span>
              <span><strong>Client Construction:</strong> The client bundles instructions, specifies account dependencies (with `is_signer` and `is_writable` flags), sets recent blockhash, and signs.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">2</span>
              <span><strong>Gulf Stream Forwarding:</strong> RPC nodes forward the transaction directly to the leader validator scheduled for the upcoming slot (via TPU - Transaction Processing Unit).</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">3</span>
              <span><strong>Sealevel Parallel Scheduling:</strong> The leader verifies Ed25519 signatures in hardware (GPU/SIMD), locks writable accounts, and schedules non-conflicting instructions across available CPU cores.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">4</span>
              <span><strong>Turbine Shredding & PoH Stamping:</strong> Successful state changes are recorded in the PoH ledger, shredded into erasure-coded packets via Turbine, and streamed to the validator network.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Solana vs Ethereum */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-neutral-500">Comparative Analysis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          3. Solana vs Ethereum: Architectural Paradigm Shift
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Understanding Solana requires unlearning core assumptions established by Ethereum and the EVM. While Ethereum prioritizes a unified state machine with sequential execution, Solana prioritizes decoupled hardware scalability and explicit state declaration.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Dimension</th>
                  <th className="p-3">Ethereum (EVM)</th>
                  <th className="p-3">Solana (SVM / Sealevel)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Smart Contract Model</td>
                  <td className="p-3 text-neutral-600">Stateful contracts (Bytecode + Storage merged inside contract address)</td>
                  <td className="p-3 text-orange-700 font-bold">Stateless programs (Executables hold zero state; all state in separate accounts)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Execution Paradigm</td>
                  <td className="p-3 text-neutral-600">Single-threaded sequential EVM execution</td>
                  <td className="p-3 text-emerald-700 font-bold">Multi-threaded parallel execution across CPU cores (Sealevel)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Account Access</td>
                  <td className="p-3 text-neutral-600">Dynamic: Contract calls external state at runtime without prior declaration</td>
                  <td className="p-3 text-orange-700 font-bold">Static: Transaction must declare all read/write accounts upfront</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">State Storage Economics</td>
                  <td className="p-3 text-neutral-600">Pay once, store forever (State bloat crisis)</td>
                  <td className="p-3 text-neutral-800 font-semibold">Rent Exemption: Accounts must hold a refundable lamport balance</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Mempool Architecture</td>
                  <td className="p-3 text-neutral-600">Public p2p mempool (Vulnerable to toxic sandwich MEV)</td>
                  <td className="p-3 text-emerald-700 font-bold">Mempool-less (Gulf Stream pushes directly to upcoming leader)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Block Time & Finality</td>
                  <td className="p-3 text-neutral-600">12 seconds / ~13 minutes (2 epochs for Casper FFG)</td>
                  <td className="p-3 text-emerald-700 font-bold">400 ms slot time / ~400–800 ms optimistic, 12s finalized</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Primary Programming Language</td>
                  <td className="p-3 text-neutral-600">Solidity, Vyper (High-level DSLs)</td>
                  <td className="p-3 text-neutral-800 font-semibold">Rust, C, C++ (Systems languages compiling to eBPF)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">3.3 When Should Developers Choose Each Blockchain?</h3>
          <p>
            <strong>Choose Solana when:</strong> Your application demands real-time user responsiveness (sub-second UI updates), high transaction frequency, high data throughput, predictable micro-cent gas fees, or complex financial primitives like central limit order books.
          </p>
          <p>
            <strong>Choose Ethereum when:</strong> Your project requires deep institutional liquidity, maximum historical immutability, EVM tooling compatibility, or relies heavily on existing EVM infrastructure and rollup ecosystems.
          </p>
        </div>
      </section>

      {/* SECTION 4: Solana Accounts Model */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-neutral-500">State Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          4. Solana Accounts Model
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">4.1 What is an Account?</h3>
          <p>
            In Solana, <strong>everything is an account</strong>. An account is a fixed-size storage buffer identified by a unique 32-byte Ed25519 public key. Under the hood, every account in the Solana ledger contains the following fields:
          </p>

          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`pub struct AccountInfo<'a> {
    pub key: &'a Pubkey,            // 32-byte public key identifying this account
    pub lamports: Rc<RefCell<&'a mut u64>>, // Account balance in lamports (1 SOL = 10^9 lamports)
    pub data: Rc<RefCell<&'a mut [u8]>>,   // Raw byte array storing custom serialized state
    pub owner: &'a Pubkey,          // Program ID that owns this account and can write data
    pub executable: bool,           // True if account holds compiled eBPF program bytecode
    pub rent_epoch: Epoch,          // Rent epoch counter (historical)
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">4.2 Understanding the Owner Field</h3>
          <p>
            The <code>owner</code> field is the cornerstone of Solana security. <strong>Only the program specified in an account's <code>owner</code> field is permitted by the Solana runtime to mutate the account's data buffer or deduct its lamports.</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li>A user's wallet account is owned by the <strong>System Program</strong> (<code>11111111111111111111111111111111</code>). Only the System Program can deduct SOL from it, and it only does so if the transaction was signed by the user's private key.</li>
            <li>A custom state account initialized by your smart contract is owned by <strong>your Program ID</strong>. Outside programs and wallets cannot modify its internal variables.</li>
            <li>Any program can read the data and balance of any account on the network. State is globally readable, but write permissions are strictly gated by ownership.</li>
          </ul>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">4.3 Types of Accounts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">1. System Accounts</span>
              <p className="text-neutral-600 mt-1">Standard user wallets holding native SOL. Owned by the System Program, with empty data buffers (`data.len() == 0`).</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">2. Program Accounts</span>
              <p className="text-neutral-600 mt-1">Accounts marked with `executable: true`, containing compiled eBPF bytecode. Owned by the BPF Loader.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">3. Data Accounts</span>
              <p className="text-neutral-600 mt-1">Accounts created to hold custom application variables (e.g. user profiles, liquidity pool state). Owned by custom programs.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">4. Token Accounts & Mints</span>
              <p className="text-neutral-600 mt-1">Accounts owned by the SPL Token Program storing token supply configuration (Mint) or user balances (Token Account / ATA).</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">4.4 Example: Designing an On-Chain Student Account</h3>
          <p>
            In Rust, custom data accounts are defined as structs with Borsh serialization attributes:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Debug, PartialEq)]
pub struct StudentAccount {
    pub authority: Pubkey,   // 32 bytes: Wallet of the student
    pub course_id: u32,       // 4 bytes: Identifier of the course
    pub completion_grade: u8, // 1 byte: Grade percentage (0-100)
    pub is_certified: bool,   // 1 byte: Certification status flag
    pub bump: u8,             // 1 byte: Canonical bump seed for PDA validation
}

// Space calculation: 32 + 4 + 1 + 1 + 1 = 39 bytes (+ 8 bytes Anchor discriminator = 47 bytes)`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 5: Programs and Instructions */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-neutral-500">Execution Primitives</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          5. Programs and Instructions
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">5.1 What is a Solana Program?</h3>
          <p>
            A Solana program is an executable on-chain binary compiled from Rust or C to eBPF/sBF (Solana Bytecode Format). Programs do not persist local state across transactions; they are pure functions that accept instructions, deserialize input data, inspect and mutate account state passed in by the caller, and return a <code>ProgramResult</code>.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">5.2 What is an Instruction?</h3>
          <p>
            An <strong>instruction</strong> is the atomic unit of execution in Solana. Every instruction consists of three items:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`pub struct Instruction {
    pub program_id: Pubkey,         // The on-chain program to invoke
    pub accounts: Vec<AccountMeta>, // List of all accounts this instruction will read or write
    pub data: Vec<u8>,              // Serialized instruction arguments (method tag + parameters)
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">5.4 Account Metadata: Permissions Flags</h3>
          <p>
            For every account passed to an instruction, the caller must supply an <code>AccountMeta</code> structure defining two critical security flags:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">is_signer: bool</span>
              <p className="text-neutral-600 mt-1">If true, the transaction signature must include a valid cryptographic signature from this account's private key. Essential for verifying identity and authority.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">is_writable: bool</span>
              <p className="text-neutral-600 mt-1">If true, the program intends to modify this account's data buffer or lamport balance. Tells Sealevel to place a write lock on the account.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">5.5 Multiple Instructions in One Atomic Transaction</h3>
          <p>
            Unlike Ethereum where executing multiple actions typically requires deploying a separate batching smart contract, a single Solana transaction can bundle multiple heterogeneous instructions executed sequentially and atomically:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`Transaction
  |-- Instruction 1: SystemProgram::create_account (Allocates ATA data space)
  |-- Instruction 2: TokenProgram::initialize_account (Initializes token balance)
  |-- Instruction 3: CustomProgram::deposit_tokens (Transfers tokens into vault)
  |-- Instruction 4: CustomProgram::record_stake (Mutates user staking state)`}</pre>
          </div>
          <p className="text-xs text-neutral-600">
            If any instruction in the transaction fails or runs out of Compute Units, all state mutations across all instructions revert atomically.
          </p>
        </div>
      </section>

      {/* SECTION 6: Solana Runtime & Compute Units */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-neutral-500">Virtual Machine Mechanics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          6. Solana Runtime & Compute Budget
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">6.1 How the Runtime Works</h3>
          <p>
            The Solana Virtual Machine (SVM) executes compiled eBPF instructions. To prevent infinite loops and denial-of-service attacks, every transaction is assigned a <strong>Compute Budget</strong> measured in Compute Units (CUs), analogous to Ethereum gas but with fixed instruction costs and deterministic limits.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">6.2 Compute Unit Limits</h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><strong>Default Transaction Limit:</strong> 200,000 CUs.</li>
            <li><strong>Maximum Transaction Limit:</strong> 1,400,000 CUs (requested via <code>ComputeBudgetProgram::set_compute_unit_limit</code>).</li>
            <li><strong>Stack Frame Limit:</strong> 4KB fixed stack per frame (maximum call depth of 64).</li>
            <li><strong>Heap Space:</strong> 32KB dynamic memory heap.</li>
          </ul>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">6.3 Priority Fees & Local Fee Markets</h3>
          <p>
            Unlike Ethereum's global gas auction where a hot NFT drop inflates transaction fees across the entire network, Solana implements <strong>Local Fee Markets</strong>. Transactions that write to hot accounts can bid higher priority fees (specified in micro-lamports per CU via <code>ComputeBudgetProgram::set_compute_unit_price</code>).
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono">
            <code>Priority Fee (lamports) = (Requested CU Limit &times; Micro-Lamports Per CU) / 1,000,000</code>
          </div>
          <p className="text-xs text-neutral-600">
            This isolates fee spikes to only the contested account (e.g. an overloaded DEX pool), leaving unrelated peer-to-peer transfers and mints operating at standard base fee levels (~0.000005 SOL).
          </p>
        </div>
      </section>

      {/* SECTION 7: Sealevel Parallel Execution */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-neutral-500">Concurrency Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          7. Sealevel Parallel Execution Engine
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Sealevel is Solana's parallel smart contracts runtime. While EVM, MoveVM, and early UTXO engines run sequentially on a single CPU core, Sealevel can schedule dozens of non-overlapping transactions across all available CPU threads and SIMD vector lanes simultaneously.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">7.2 Read and Write Lock Mechanics</h3>
          <p>
            Before executing a batch of transactions, Sealevel inspects the declared account lists and applies standard read-write concurrency rules:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <span className="font-bold text-emerald-900">Concurrent Reads (Shared Locks)</span>
              <p className="text-emerald-800 mt-1">Multiple transactions that only READ an account (e.g., querying an oracle price feed) can execute concurrently across different CPU threads without waiting.</p>
            </div>
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
              <span className="font-bold text-rose-900">Exclusive Writes (Write Locks)</span>
              <p className="text-rose-800 mt-1">If a transaction WRITES to an account, it acquires an exclusive lock. Any subsequent transaction attempting to read or write to that same account must wait in queue until the first completes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Proof of History Fundamentals */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-neutral-500">Cryptographic Clock</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          8. Proof of History (PoH) Fundamentals
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">8.1 What is Proof of History?</h3>
          <p>
            Proof of History is not a consensus algorithm. It is a <strong>high-frequency Verifiable Delay Function (VDF)</strong> that provides an unforgeable, cryptographic passage of time before consensus.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">8.2 How It Works: The Sequential SHA-256 Loop</h3>
          <p>
            A leader validator continuously runs a sequential SHA-256 loop where the output of iteration $N$ serves as the input to iteration $N+1$:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`H_0 = Initial_Seed
H_1 = SHA-256(H_0)
H_2 = SHA-256(H_1)
...
H_n = SHA-256(H_{n-1})`}</pre>
          </div>
          <p>
            Because SHA-256 is pre-image resistant and cannot be parallelized, generating $N$ hashes requires a deterministic number of real-world microseconds on a physical CPU core. However, <strong>verifying</strong> the sequence can be divided across thousands of GPU cores in parallel.
          </p>
          <p>
            When transactions arrive, their hashes are appended directly into the sequence:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`H_{100} = SHA-256(H_{99})
H_{101} = SHA-256(H_{100} + Hash(Transaction_A))
H_{102} = SHA-256(H_{101})`}</pre>
          </div>
          <p>
            This cryptographically proves that Transaction A occurred strictly after $H_{100}$ and strictly before $H_{102}$. Validators do not need to gossip back and forth to agree on timestamps, enabling continuous block streaming.
          </p>
        </div>
      </section>

      {/* SECTION 9: Solana Validators */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-neutral-500">Network Consensus</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          9. Solana Validators & Consensus Lifecycle
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Solana validators secure the network by producing blocks, executing instructions, and voting on fork validity. The validator workflow operates through a scheduled leader rotation:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">1. Leader Schedule</span>
              <p className="text-neutral-600 mt-1">Computed deterministically at the start of every epoch (approx. 2-3 days). Each slot (400ms) has a designated leader proportional to active delegated stake.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">2. Block Production</span>
              <p className="text-neutral-600 mt-1">The scheduled leader receives transactions via TPU/Gulf Stream, packages entries into PoH, and distributes erasure shreds via Turbine.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">3. Tower BFT Voting</span>
              <p className="text-neutral-600 mt-1">Non-leader validators verify the block shreds, re-execute state transitions, and cast stake-weighted on-chain vote transactions.</p>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 10: Introduction to Rust Programming */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-neutral-500">Rust Systems Programming</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          10. Introduction to Rust Programming
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">10.1 What is Rust?</h3>
          <p>
            Rust is a modern systems programming language that guarantees memory safety and thread concurrency safety without requiring a runtime garbage collector. Developed originally by Mozilla, Rust achieves high performance comparable to C and C++ while statically eliminating entire classes of bugs (such as null pointer exceptions, buffer overflows, and data races) at compile time.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">10.2 Why Rust Instead of Solidity?</h3>
          <p>
            While Solidity is a high-level interpreted domain-specific language that compiles to EVM bytecode with dynamic gas metering, Rust is a general-purpose systems language compiling directly to LLVM and eBPF/sBF machine instructions.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><strong>Zero-Cost Abstractions:</strong> Rust code compiles down to tight native loops without hidden runtime layers or garbage collection pauses.</li>
            <li><strong>Predictable Execution:</strong> Memory layouts are explicitly defined down to the exact byte, essential for Solana account serialization.</li>
            <li><strong>Compile-Time Correctness:</strong> The Rust compiler rejects unsafe memory access, uninitialized variables, and data races before any byte is deployed to the blockchain.</li>
          </ul>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">10.3 First Rust Program</h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`fn main() {
    println!("Welcome to Solana Development!");
    let blockchain = "Solana";
    let speed = 65000;
    println!("{} can process up to {} TPS.", blockchain, speed);
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">10.4 Variables and Mutability</h3>
          <p>
            In Rust, <strong>all variables are immutable by default</strong>. This functional design pattern eliminates unexpected state side effects. If a variable must change its value, it must be explicitly declared with the <code>mut</code> keyword:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900">
              <span className="font-bold">Immutable (Default - Compile Error if reassigned):</span>
              <pre className="mt-2 text-neutral-800">{`let balance = 500;
// balance = 750; 
// ^ ERROR: cannot assign twice to immutable variable`}</pre>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
              <span className="font-bold">Explicitly Mutable:</span>
              <pre className="mt-2 text-neutral-800">{`let mut balance = 500;
balance = 750; // OK!
println!("Updated Balance: {}", balance);`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Ownership and Borrowing */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-neutral-500">Core Memory Model</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          11. Ownership, Borrowing, and Lifetimes
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">11.1 The Ownership Invariants</h3>
          <p>
            Rust manages memory through a strict compile-time system governed by three foundational rules:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-neutral-700">
            <li>Each value in Rust has an owner variable.</li>
            <li>There can only be one owner at any given moment.</li>
            <li>When the owner goes out of scope, the memory is dropped immediately.</li>
          </ol>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">11.2 Move Semantics vs Copy Types</h3>
          <p>
            When assigning a heap-allocated type (like <code>String</code> or <code>Vec&lt;u8&gt;</code>) to another variable, ownership is <strong>moved</strong>. The original variable becomes invalid:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`fn main() {
    let account1 = String::from("Alice");
    let account2 = account1; // account1's pointer is MOVED to account2

    // println!("{}", account1); 
    // ^ COMPILE ERROR: borrow of moved value: 'account1'

    println!("Current owner: {}", account2); // Works!
}`}</pre>
          </div>
          <p className="text-xs text-neutral-600">
            Conversely, primitive types that implement the <code>Copy</code> trait (such as <code>u64</code>, <code>u8</code>, <code>bool</code>, <code>Pubkey</code>) are automatically duplicated on the stack via bitwise copy rather than moving.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">11.4 Borrowing: References vs Mutable References</h3>
          <p>
            To inspect or modify data without taking ownership, functions borrow data via references:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Immutable Borrow (&T):</span>
              <pre className="mt-2 text-neutral-800">{`fn display_balance(balance: &u64) {
    println!("Balance: {}", balance);
}
// Any number of readers permitted simultaneously`}</pre>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">Mutable Borrow (&mut T):</span>
              <pre className="mt-2 text-neutral-800">{`fn update_balance(balance: &mut u64) {
    *balance += 100; // Dereference and mutate
}
// ONLY ONE writer permitted; no simultaneous readers`}</pre>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">11.5 Ownership in Solana & Anchor Lifetimes</h3>
          <p>
            In Solana programs, instructions receive accounts borrowed from the runtime environment. In Anchor, the generic lifetime <code>'info</code> is used throughout account contexts:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`pub fn increase_balance(ctx: Context<UpdateBalance>, amount: u64) -> Result<()> {
    let user_account = &mut ctx.accounts.user_account;
    user_account.balance = user_account.balance.checked_add(amount)
        .ok_or(ErrorCode::MathOverflow)?;
    Ok(())
}`}</pre>
          </div>
          <p className="text-xs text-neutral-600">
            The lifetime <code>'info</code> signifies that the borrowed reference to the account's data buffer lives exactly as long as the instruction's execution frame.
          </p>
        </div>
      </section>

      {/* SECTION 12: Structs, Enums and Traits */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-neutral-500">Type System</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          12. Structs, Enums and Traits
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">12.1 Defining Custom Structures</h3>
          <p>
            Structs group related fields into named data layouts. In Solana, structs represent both on-chain account data and instruction parameters:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`#[account]
pub struct TokenConfig {
    pub authority: Pubkey,  // 32 bytes
    pub mint: Pubkey,       // 32 bytes
    pub total_minted: u64,  // 8 bytes
    pub max_supply: u64,    // 8 bytes
    pub is_paused: bool,    // 1 byte
    pub bump: u8,           // 1 byte
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">12.3 Enums and Pattern Matching</h3>
          <p>
            Rust enums are algebraic data types that represent mutually exclusive variants. Combined with the <code>match</code> expression, they guarantee exhaustive case coverage:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum TokenStatus {
    Active,
    Paused,
    Disabled,
}

fn check_status(status: TokenStatus) -> Result<()> {
    match status {
        TokenStatus::Active => Ok(()),
        TokenStatus::Paused => Err(error!(TokenError::ProtocolPaused)),
        TokenStatus::Disabled => Err(error!(TokenError::ProtocolTerminated)),
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">12.4 Traits: Shared Behaviors</h3>
          <p>
            Traits define shared interfaces similar to interfaces in other languages. In Solana, critical traits include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><code>BorshSerialize</code> and <code>BorshDeserialize</code>: High-efficiency binary serialization format used across the Solana ecosystem.</li>
            <li><code>AnchorSerialize</code> and <code>AnchorDeserialize</code>: Anchor wrappers handling 8-byte account discriminators and IDL metadata generation.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 13: Rust Error Handling */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-neutral-500">Robustness & Safety</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          13. Rust Error Handling & Checked Arithmetic
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Rust rejects unchecked exceptions. Errors are first-class data values represented by the <code>Result&lt;T, E&gt;</code> enum:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`pub enum Result<T, E> {
    Ok(T),  // Contains the successful return value
    Err(E), // Contains the error description
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">13.2 The Question Mark Operator (`?`)</h3>
          <p>
            The <code>?</code> operator unwraps an <code>Ok</code> value or immediately returns the <code>Err</code> up the call stack, dramatically simplifying instruction logic:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`let new_balance = balance.checked_sub(amount)
    .ok_or(error!(TokenError::InsufficientFunds))?;`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">13.4 Checked Arithmetic: Preventing Catastrophic Overflows</h3>
          <p>
            In Solana programs compiled with <code>--release</code>, regular arithmetic operators (<code>+</code>, <code>-</code>, <code>*</code>) wrap around on overflow without panicking. A user with 10 tokens spending 20 tokens would wrap around to $2^{64} - 10$ tokens!
          </p>
          <p>
            <strong>Mandatory Rule:</strong> Never use naked <code>+</code>, <code>-</code>, or <code>*</code> in token balances. Always use checked methods:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">checked_add(b)</span>
              <p className="text-neutral-600 mt-1">Returns None if sum exceeds u64::MAX.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">checked_sub(b)</span>
              <p className="text-neutral-600 mt-1">Returns None if difference drops below 0.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">checked_mul(b)</span>
              <p className="text-neutral-600 mt-1">Returns None if product exceeds limit.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">13.5 Custom Errors in Anchor (`#[error_code]`)</h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`#[error_code]
pub enum TokenError {
    #[msg("Insufficient token balance for transfer")]
    InsufficientFunds,
    #[msg("Minting exceeds maximum allowable token supply cap")]
    MaxSupplyExceeded,
    #[msg("The token protocol is currently paused by admin")]
    ProtocolPaused,
    #[msg("Caller lacks authorized administrative permissions")]
    UnauthorizedAuthority,
}`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 14: Cargo and Rust Toolchain */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-neutral-500">Build Tooling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          14. Cargo and the Solana Toolchain
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Cargo is Rust's official package manager, build harness, and test runner. In Solana development, Cargo manages dependencies via <code>Cargo.toml</code> and targets the <code>sbf</code> (Solana Bytecode Format) compilation architecture.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">14.3 Sample Solana Program Cargo.toml</h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`[package]
name = "preptoken-program"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib", "lib"]
name = "preptoken_program"

[dependencies]
anchor-lang = "0.30.1"
anchor-spl = "0.30.1"
solana-program = "~1.18.26"`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">14.4 Essential Toolchain Commands</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <code>cargo check</code>
              <p className="text-neutral-600 mt-1">Rapidly verifies type correctness without generating bytecode artifacts.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <code>cargo test</code>
              <p className="text-neutral-600 mt-1">Executes Rust unit and integration tests locally.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <code>cargo clippy</code>
              <p className="text-neutral-600 mt-1">Runs advanced Rust linter checking for anti-patterns and performance traps.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <code>cargo fmt</code>
              <p className="text-neutral-600 mt-1">Auto-formats code conforming to official Rust community standards.</p>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 15: Solana Development Environment */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-neutral-500">Developer Tooling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          15. Solana Development Environment Setup
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Building production Solana programs requires configuring five core developer tools:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">1. Rust & Cargo</span>
              <p className="text-neutral-600 mt-1">Installed via <code>curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code>. Provides compiler and standard library.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">2. Solana CLI Suite</span>
              <p className="text-neutral-600 mt-1">Includes <code>solana</code>, <code>solana-keygen</code>, and <code>solana-test-validator</code> for running a local cluster.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">3. Anchor CLI (avm)</span>
              <p className="text-neutral-600 mt-1">Anchor Version Manager (<code>cargo install --git https://github.com/coral-xyz/anchor avm --locked</code>) to build and deploy Anchor programs.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">4. Node.js & Yarn</span>
              <p className="text-neutral-600 mt-1">Runs TypeScript test suites via Mocha/Chai and powers the React frontend application.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">15.3 CLI Configuration & Devnet Airdrop</h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-2">
            <div><span className="text-neutral-500"># Set RPC URL to Solana Devnet</span></div>
            <div>solana config set --url https://api.devnet.solana.com</div>
            <div className="pt-2"><span className="text-neutral-500"># Generate a local development keypair</span></div>
            <div>solana-keygen new --outfile ~/.config/solana/id.json</div>
            <div className="pt-2"><span className="text-neutral-500"># Request test SOL on Devnet</span></div>
            <div>solana airdrop 2</div>
            <div className="pt-2"><span className="text-neutral-500"># Verify wallet balance</span></div>
            <div>solana balance</div>
          </div>
        </div>
      </section>

      {/* SECTION 16: Anchor Framework */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-neutral-500">Framework Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          16. Anchor Framework Architecture & Macros
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Anchor is the standard development framework for Solana, created by Coral. In raw Solana programming, developers must write dozens of lines of repetitive boilerplate for every instruction: deserializing byte slices, manually checking <code>is_signer</code> flags, asserting account ownership, and computing rent. Anchor automates all security validations and serialization through declarative Rust macros.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">16.3 Anatomy of an Anchor Program</h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`use anchor_lang::prelude::*;

declare_id!("TokenProg111111111111111111111111111111111");

#[program]
pub mod token_management {
    use super::*;

    pub fn initialize(ctx: Context<InitializeConfig>, max_supply: u64) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.authority = ctx.accounts.authority.key();
        config.max_supply = max_supply;
        config.total_minted = 0;
        config.is_paused = false;
        config.bump = ctx.bumps.config;
        Ok(())
    }
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">16.5 Core Anchor Macros You Must Master</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">#[program]</span>
              <p className="text-neutral-600 mt-1">Denotes the entrypoint module containing all business logic instructions. Anchor generates instruction routing and dispatch automatically.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">#[derive(Accounts)]</span>
              <p className="text-neutral-600 mt-1">Derives the account validation struct. Enforces security constraints before any instruction code begins execution.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">#[account]</span>
              <p className="text-neutral-600 mt-1">Marks a struct as an on-chain data account. Anchor automatically prepends an 8-byte SHA-256 discriminator to prevent type confusion.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">#[error_code]</span>
              <p className="text-neutral-600 mt-1">Defines custom error enums with human-readable error messages for client logging and debugging.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">16.6 Important Anchor Account Constraints</h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-3">
            <div>
              <span className="text-orange-400">#[account(mut)]</span>: Marks an account as writable. Causes Sealevel to place an exclusive write lock.
            </div>
            <div>
              <span className="text-orange-400">pub authority: Signer&lt;'info&gt;</span>: Asserts <code>authority.is_signer == true</code>. Rejects unauthorized calls.
            </div>
            <div>
              <span className="text-orange-400">#[account(init, payer = authority, space = 8 + Config::INIT_SPACE)]</span>: Invokes the System Program via CPI to allocate data space, transfer rent-exempt lamports from payer, and assign program ownership.
            </div>
            <div>
              <span className="text-orange-400">#[account(seeds = [b"config"], bump)]</span>: Asserts the account address matches the deterministic PDA derived from the given seeds.
            </div>
            <div>
              <span className="text-orange-400">#[account(has_one = authority)]</span>: Asserts that <code>config.authority == authority.key()</code>.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 17: Program Derived Addresses (PDAs) */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-neutral-500">Address Derivation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          17. Program Derived Addresses (PDAs)
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">17.1 What is a PDA?</h3>
          <p>
            A Program Derived Address (PDA) is a public key that <strong>does not possess a corresponding private key</strong>. Instead, it is derived deterministically from an arbitrary array of seed bytes, a 1-byte bump nonce, and a Program ID.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">17.2 Why Do We Need PDAs?</h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><strong>Autonomous Program Control:</strong> A program can control funds, hold tokens in an escrow vault, or own data accounts without any human or server holding a private key.</li>
            <li><strong>Deterministic Key-Value Indexing:</strong> Enables hash-map style lookup on-chain. To find Alice's user profile or token account, the client derives the address off-chain using <code>[b"user-profile", alice_pubkey]</code> without querying an indexer.</li>
          </ul>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">17.3 Mathematical Derivation Off the Ed25519 Curve</h3>
          <p>
            The derivation algorithm is implemented in the Solana SDK via <code>Pubkey::find_program_address</code>:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`// In Rust:
let (pda_address, canonical_bump) = Pubkey::find_program_address(
    &[b"preptoken_config", authority.as_ref()],
    &program_id
);`}</pre>
          </div>
          <p className="text-xs text-neutral-600">
            The function initializes bump at 255 and hashes <code>SHA-256(seeds + bump + program_id)</code>. If the resulting 256-bit value forms a valid point on the Ed25519 elliptic curve (meaning a private key mathematically exists), it decrements the bump by 1 (254, 253...) and repeats until it finds a point <strong>off the curve</strong>. The highest non-curve bump is the <strong>canonical bump</strong>.
          </p>
        </div>
      </section>

      {/* SECTION 18: Cross-Program Invocation (CPI) */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-neutral-500">Composability Engine</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          18. Cross-Program Invocation (CPI)
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Cross-Program Invocation (CPI) is Solana's mechanism for composability, enabling one on-chain program to invoke instructions on another program (such as calling the System Program to transfer SOL, or calling the SPL Token Program to mint or transfer tokens).
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">18.3 invoke vs invoke_signed</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">solana_program::program::invoke</span>
              <p className="text-neutral-600 mt-1">Forwards transaction signatures from the original transaction. Cannot sign on behalf of PDAs.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-orange-700">solana_program::program::invoke_signed</span>
              <p className="text-neutral-600 mt-1">Accepts seed slices and canonical bumps. The Solana runtime verifies the seeds against the calling program and elevates the PDA's `is_signer` flag to true.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">18.4 Anchor CPI with CpiContext</h3>
          <p>
            Anchor simplifies CPI calls using <code>CpiContext</code>. Here is how our PrepToken program signs for its config PDA to mint tokens via the SPL Token Program:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`let seeds = &[
    b"config".as_ref(),
    &[ctx.accounts.config.bump]
];
let signer_seeds = &[&seeds[..]];

let cpi_accounts = MintTo {
    mint: ctx.accounts.mint.to_account_info(),
    to: ctx.accounts.destination.to_account_info(),
    authority: ctx.accounts.config.to_account_info(), // The PDA is the mint authority!
};
let cpi_ctx = CpiContext::new_with_signer(
    ctx.accounts.token_program.to_account_info(),
    cpi_accounts,
    signer_seeds
);

token::mint_to(cpi_ctx, amount)?;`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 19: Solana Token Program */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-neutral-500">Asset Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          19. Solana Token Program Architecture
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            In Ethereum, an ERC-20 token is a single smart contract containing a <code>mapping(address =&gt; uint256)</code> table. If two users transfer tokens, they write to the same contract storage, creating a bottleneck.
          </p>
          <p>
            In Solana, tokens operate under a <strong>decoupled architecture</strong> governed by a single network-wide program: the <strong>SPL Token Program</strong> (<code>TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA</code>).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">Token Mint Account</span>
              <p className="text-neutral-600 mt-1">Defines the token asset. Holds total supply, decimals, mint authority, and optional freeze authority. Does not hold user balances.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">Token Account (ATA)</span>
              <p className="text-neutral-600 mt-1">Holds an individual user's balance for a specific Mint. Owned by the Token Program, with an `owner` field pointing to the user's wallet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 20: SPL Token vs Token-2022 */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-neutral-500">Next-Gen Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          20. SPL Token Fundamentals vs Token-2022 Extensions
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Solana launched <strong>Token-2022 (Token Extensions)</strong> to provide modular, protocol-level features directly in the token runtime without requiring wrapper smart contracts:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Feature</th>
                  <th className="p-3">Classic SPL Token</th>
                  <th className="p-3">Token-2022 (Token Extensions)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Program ID</td>
                  <td className="p-3 font-mono text-xs">TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA</td>
                  <td className="p-3 font-mono text-xs text-orange-700 font-bold">TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Native Transfer Fees</td>
                  <td className="p-3 text-neutral-500">Not supported (Requires custom contract)</td>
                  <td className="p-3 text-emerald-700 font-bold">Built-in configurable basis point fee & max cap</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Transfer Hooks</td>
                  <td className="p-3 text-neutral-500">Not supported</td>
                  <td className="p-3 text-emerald-700 font-bold">CPI callback to external program on every transfer</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Confidential Transfers</td>
                  <td className="p-3 text-neutral-500">Not supported (Public balances)</td>
                  <td className="p-3 text-emerald-700 font-bold">Zero-knowledge proofs (ElGamal + Twisted Edwards)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Non-Transferable (Soulbound)</td>
                  <td className="p-3 text-neutral-500">Not supported natively</td>
                  <td className="p-3 text-emerald-700 font-bold">Native immutable non-transferable token accounts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            
      {/* SECTION 21: Solana Program Testing */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-neutral-500">Quality Assurance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          21. Solana Program Testing: Unit, Integration, and Security
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Testing smart contracts on Solana is critical because runtime bugs, integer overflows, or missing signer checks directly lead to irreversible fund drains. Modern Solana testing utilizes three distinct tiers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">1. LiteSVM / Mollusk</span>
              <p className="text-neutral-600 mt-1">Ultra-fast in-process Rust VM execution without starting a background validator. Executes tests in sub-milliseconds.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">2. Solana-Bankrun</span>
              <p className="text-neutral-600 mt-1">Fast TypeScript testing environment running the Solana runtime via dynamic C-bindings, avoiding HTTP RPC latency.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">3. Anchor Test (Localnet)</span>
              <p className="text-neutral-600 mt-1">End-to-end integration tests using Mocha/Chai against a live ephemeral <code>solana-test-validator</code> cluster.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">21.5 Twelve Essential Test Cases for PrepToken</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
              <span className="font-bold">Test 1: Initialize Mint & Config PDA</span>
              <p className="text-[11px] mt-0.5">Asserts supply = 0, max_supply = 1,000,000, bump stored correctly.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
              <span className="font-bold">Test 2: Create User Associated Token Account</span>
              <p className="text-[11px] mt-0.5">Derives ATA address and verifies zero initial token balance.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
              <span className="font-bold">Test 3: Authorized Mint Within Cap</span>
              <p className="text-[11px] mt-0.5">Admin mints 50,000 PREP to Alice; asserts ATA balance and total_minted increment.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
              <span className="font-bold">Test 4 (Security): Unauthorized Minting</span>
              <p className="text-[11px] mt-0.5">Non-admin caller attempts mint; transaction must fail with ConstraintSigner/Unauthorized.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
              <span className="font-bold">Test 5 (Safety): Max Supply Exceeded</span>
              <p className="text-[11px] mt-0.5">Attempting to mint 1,000,001 tokens must abort with MaximumSupplyExceeded.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
              <span className="font-bold">Test 6: User-to-User Transfer</span>
              <p className="text-[11px] mt-0.5">Alice transfers 10,000 PREP to Bob; asserts Alice ATA drops and Bob ATA increases.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
              <span className="font-bold">Test 7 (Security): Transfer Without Signature</span>
              <p className="text-[11px] mt-0.5">Third party attempts to transfer Alice's tokens without her private key; must fail.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
              <span className="font-bold">Test 8: Token Burning</span>
              <p className="text-[11px] mt-0.5">Alice burns 5,000 PREP; verifies her ATA balance drops and circulating supply drops.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
              <span className="font-bold">Test 9: Admin Toggles Pause</span>
              <p className="text-[11px] mt-0.5">Admin invokes toggle_pause; config.is_paused flips to true.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
              <span className="font-bold">Test 10 (Protocol): Block Transfers While Paused</span>
              <p className="text-[11px] mt-0.5">Transfer instruction while paused must revert with ProtocolPaused error.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-900">
              <span className="font-bold">Test 11 (Security): Non-Admin Cannot Pause</span>
              <p className="text-[11px] mt-0.5">Random wallet attempting toggle_pause is rejected with UnauthorizedAuthority.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
              <span className="font-bold">Test 12: Invariant Balance Reconciliation</span>
              <p className="text-[11px] mt-0.5">Asserts that Sum(User Balances) exactly equals Mint.supply at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 22: Solana Program Deployment */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-neutral-500">Deployment & DevOps</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          22. Solana Program Deployment & Upgrade Mechanics
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Programs on Solana are deployed using the <strong>Upgradeable BPF Loader</strong> (<code>BPFLoaderUpgradeab1e11111111111111111111111</code>). The deployment process involves buffer accounts and immutable/upgradeable authority flags:
          </p>

          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-2">
            <div><span className="text-neutral-500"># 1. Compile Anchor program into sBF shared object (.so)</span></div>
            <div>anchor build</div>
            <div className="pt-2"><span className="text-neutral-500"># 2. Synchronize Program ID in lib.rs and Anchor.toml</span></div>
            <div>anchor keys sync</div>
            <div className="pt-2"><span className="text-neutral-500"># 3. Deploy to Solana Devnet</span></div>
            <div>anchor deploy --provider.cluster devnet</div>
            <div className="pt-2"><span className="text-neutral-500"># 4. Inspect program account details and upgrade authority</span></div>
            <div>solana program show &lt;PROGRAM_ID&gt;</div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">22.6 Program Upgrades vs Immutability</h3>
          <p>
            To upgrade a program, the developer writes new bytecode into an intermediate buffer account and invokes <code>solana program upgrade &lt;BUFFER_PUBKEY&gt; &lt;PROGRAM_ID&gt;</code>. If the upgrade authority is revoked (<code>solana program set-upgrade-authority &lt;PROGRAM_ID&gt; --final</code>), the bytecode becomes permanently immutable, eliminating developer control.
          </p>
        </div>
      </section>

      {/* SECTION 23: Complete PrepToken Rust/Anchor Capstone Lab */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-neutral-500">Capstone Engineering Lab</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          23. Practical Lab: Build PrepToken DApp with Rust, Anchor & React
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
            <span className="font-bold text-neutral-900">Lab Brief:</span> Build and deploy <strong>PrepToken</strong>, a decentralized token management protocol on Solana. The smart contract controls a custom token mint (PREP), enforces a 1,000,000 token maximum supply ceiling, manages user Associated Token Accounts, enables authorized minting, transfers, burns, and incorporates an administrative emergency pause switch.
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">23.5 Complete Anchor Rust Smart Contract (`src/lib.rs`)</h3>
          <p className="text-xs text-neutral-600">
            Below is the full, production-ready Anchor smart contract incorporating all six instruction endpoints, PDA signer seeds, CPI calls to SPL Token Program, and comprehensive safety constraints:
          </p>

          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto max-h-[550px] overflow-y-auto">
            <pre>{`use anchor_lang::prelude::*;
use anchor_spl::token::{self, Burn, Mint, MintTo, Token, TokenAccount, Transfer};
use anchor_spl::associated_token::AssociatedToken;

declare_id!("PrepTok11111111111111111111111111111111111");

#[program]
pub mod preptoken_protocol {
    use super::*;

    // 1. Initialize Token Mint and Protocol Configuration PDA
    pub fn initialize(ctx: Context<Initialize>, max_supply: u64, decimals: u8) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.authority = ctx.accounts.authority.key();
        config.mint = ctx.accounts.mint.key();
        config.total_minted = 0;
        config.max_supply = max_supply;
        config.decimals = decimals;
        config.is_paused = false;
        config.bump = ctx.bumps.config;

        emit!(ConfigInitialized {
            authority: config.authority,
            mint: config.mint,
            max_supply,
        });
        Ok(())
    }

    // 2. Create Associated Token Account for a User
    pub fn create_user_ata(_ctx: Context<CreateUserAta>) -> Result<()> {
        // AssociatedToken constraint automatically initializes the ATA
        Ok(())
    }

    // 3. Mint Tokens Under Authorization & Max Supply Ceiling
    pub fn mint_tokens(ctx: Context<MintTokens>, amount: u64) -> Result<()> {
        require!(!ctx.accounts.config.is_paused, TokenError::ProtocolPaused);

        let config = &mut ctx.accounts.config;
        let new_total = config
            .total_minted
            .checked_add(amount)
            .ok_or(TokenError::MathOverflow)?;

        require!(new_total <= config.max_supply, TokenError::MaximumSupplyExceeded);
        config.total_minted = new_total;

        // Perform CPI to SPL Token Program using PDA signer seeds
        let seeds = &[b"config".as_ref(), &[config.bump]];
        let signer_seeds = &[&seeds[..]];

        let cpi_accounts = MintTo {
            mint: ctx.accounts.mint.to_account_info(),
            to: ctx.accounts.recipient_ata.to_account_info(),
            authority: ctx.accounts.config.to_account_info(),
        };
        let cpi_ctx = CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            cpi_accounts,
            signer_seeds,
        );

        token::mint_to(cpi_ctx, amount)?;

        emit!(TokensMinted {
            recipient: ctx.accounts.recipient.key(),
            amount,
            total_minted: config.total_minted,
        });
        Ok(())
    }

    // 4. Transfer Tokens Between User ATAs
    pub fn transfer_tokens(ctx: Context<TransferTokens>, amount: u64) -> Result<()> {
        require!(!ctx.accounts.config.is_paused, TokenError::ProtocolPaused);

        let cpi_accounts = Transfer {
            from: ctx.accounts.sender_ata.to_account_info(),
            to: ctx.accounts.recipient_ata.to_account_info(),
            authority: ctx.accounts.sender.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(
            ctx.accounts.token_program.to_account_info(),
            cpi_accounts,
        );

        token::transfer(cpi_ctx, amount)?;

        emit!(TokensTransferred {
            sender: ctx.accounts.sender.key(),
            recipient: ctx.accounts.recipient.key(),
            amount,
        });
        Ok(())
    }

    // 5. Burn Tokens Permanently from User ATA
    pub fn burn_tokens(ctx: Context<BurnTokens>, amount: u64) -> Result<()> {
        require!(!ctx.accounts.config.is_paused, TokenError::ProtocolPaused);

        let cpi_accounts = Burn {
            mint: ctx.accounts.mint.to_account_info(),
            from: ctx.accounts.user_ata.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(
            ctx.accounts.token_program.to_account_info(),
            cpi_accounts,
        );

        token::burn(cpi_ctx, amount)?;

        emit!(TokensBurned {
            user: ctx.accounts.user.key(),
            amount,
        });
        Ok(())
    }

    // 6. Administrative Emergency Pause Switch
    pub fn toggle_pause(ctx: Context<TogglePause>) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.is_paused = !config.is_paused;

        emit!(PauseToggled {
            is_paused: config.is_paused,
        });
        Ok(())
    }
}

// ----------------- ACCOUNT VALIDATION STRUCTS -----------------

#[derive(Accounts)]
#[instruction(max_supply: u64, decimals: u8)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = authority,
        space = 8 + TokenConfig::INIT_SPACE,
        seeds = [b"config"],
        bump
    )]
    pub config: Account<'info, TokenConfig>,

    #[account(
        init,
        payer = authority,
        mint::decimals = decimals,
        mint::authority = config,
    )]
    pub mint: Account<'info, Mint>,

    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct CreateUserAta<'info> {
    #[account(
        init_if_needed,
        payer = payer,
        associated_token::mint = mint,
        associated_token::authority = user,
    )]
    pub user_ata: Account<'info, TokenAccount>,
    pub mint: Account<'info, Mint>,
    /// CHECK: User wallet address for ATA derivation
    pub user: AccountInfo<'info>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct MintTokens<'info> {
    #[account(
        mut,
        seeds = [b"config"],
        bump = config.bump,
        has_one = authority @ TokenError::UnauthorizedAuthority,
        has_one = mint,
    )]
    pub config: Account<'info, TokenConfig>,

    #[account(mut)]
    pub mint: Account<'info, Mint>,

    #[account(
        mut,
        associated_token::mint = mint,
        associated_token::authority = recipient,
    )]
    pub recipient_ata: Account<'info, TokenAccount>,

    /// CHECK: Recipient wallet
    pub recipient: AccountInfo<'info>,
    pub authority: Signer<'info>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct TransferTokens<'info> {
    #[account(seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, TokenConfig>,

    #[account(
        mut,
        associated_token::mint = config.mint,
        associated_token::authority = sender,
    )]
    pub sender_ata: Account<'info, TokenAccount>,

    #[account(
        mut,
        associated_token::mint = config.mint,
        associated_token::authority = recipient,
    )]
    pub recipient_ata: Account<'info, TokenAccount>,

    pub sender: Signer<'info>,
    /// CHECK: Recipient wallet
    pub recipient: AccountInfo<'info>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct BurnTokens<'info> {
    #[account(seeds = [b"config"], bump = config.bump)]
    pub config: Account<'info, TokenConfig>,

    #[account(mut, address = config.mint)]
    pub mint: Account<'info, Mint>,

    #[account(
        mut,
        associated_token::mint = mint,
        associated_token::authority = user,
    )]
    pub user_ata: Account<'info, TokenAccount>,

    pub user: Signer<'info>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct TogglePause<'info> {
    #[account(
        mut,
        seeds = [b"config"],
        bump = config.bump,
        has_one = authority @ TokenError::UnauthorizedAuthority,
    )]
    pub config: Account<'info, TokenConfig>,
    pub authority: Signer<'info>,
}

// ----------------- STATE & ERROR DEFINITIONS -----------------

#[account]
#[derive(InitSpace)]
pub struct TokenConfig {
    pub authority: Pubkey,   // 32
    pub mint: Pubkey,        // 32
    pub total_minted: u64,   // 8
    pub max_supply: u64,     // 8
    pub decimals: u8,        // 1
    pub is_paused: bool,     // 1
    pub bump: u8,            // 1
}

#[error_code]
pub enum TokenError {
    #[msg("Protocol is currently paused by administrator.")]
    ProtocolPaused,
    #[msg("Minting exceeds maximum permitted token supply cap.")]
    MaximumSupplyExceeded,
    #[msg("Caller lacks required administrative authority.")]
    UnauthorizedAuthority,
    #[msg("Arithmetic operation resulted in an integer overflow.")]
    MathOverflow,
}

#[event]
pub struct ConfigInitialized {
    pub authority: Pubkey,
    pub mint: Pubkey,
    pub max_supply: u64,
}

#[event]
pub struct TokensMinted {
    pub recipient: Pubkey,
    pub amount: u64,
    pub total_minted: u64,
}

#[event]
pub struct TokensTransferred {
    pub sender: Pubkey,
    pub recipient: Pubkey,
    pub amount: u64,
}

#[event]
pub struct TokensBurned {
    pub user: Pubkey,
    pub amount: u64,
}

#[event]
pub struct PauseToggled {
    pub is_paused: bool,
}`}</pre>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">23.8 Frontend Architecture: 5 Screens</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Screen 1: Wallet Connection</span>
              <p className="text-neutral-600 mt-1">Multi-wallet adapter (Phantom, Solflare) with network cluster selector (Devnet / Mainnet).</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Screen 2: Protocol Dashboard</span>
              <p className="text-neutral-600 mt-1">Live metrics: Total Minted vs Max Cap progress bar, Mint Pubkey, User ATA balance.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Screen 3: Admin Minting Console</span>
              <p className="text-neutral-600 mt-1">Gated admin form with recipient Pubkey and PREP unit amount, triggering Anchor CPI.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Screen 4: Transfer & Burn Hub</span>
              <p className="text-neutral-600 mt-1">Interactive tab allowing peer-to-peer transfers or deflationary burning with real-time balance validation.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] md:col-span-2 lg:col-span-2">
              <span className="font-bold text-neutral-900">Screen 5: Explorer Transaction Ledger</span>
              <p className="text-neutral-600 mt-1">Live feed of confirmed Solana transactions with direct links to SolanaFM or Solana Explorer.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">23.9 Fourteen Development Milestones</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-2 sm:p-3">#</th>
                  <th className="p-2 sm:p-3">Milestone Task</th>
                  <th className="p-2 sm:p-3">Verification Artifact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 font-mono">
                <tr><td className="p-2">1</td><td>Install Rust, Solana CLI & Anchor</td><td><code>anchor --version</code> returns valid build</td></tr>
                <tr><td className="p-2">2</td><td>Initialize Anchor Project</td><td><code>Anchor.toml</code> and <code>programs/</code> created</td></tr>
                <tr><td className="p-2">3</td><td>Design PDA Config Account</td><td>83-byte layout with canonical bump</td></tr>
                <tr><td className="p-2">4</td><td>Build Initialize Instruction</td><td>Mint account created with PDA authority</td></tr>
                <tr><td className="p-2">5</td><td>Implement Create User ATA</td><td>Associated Token Program integration verified</td></tr>
                <tr><td className="p-2">6</td><td>Implement Minting with CPI</td><td><code>token::mint_to</code> signed with PDA seeds</td></tr>
                <tr><td className="p-2">7</td><td>Implement Token Transfers</td><td><code>token::transfer</code> between user ATAs</td></tr>
                <tr><td className="p-2">8</td><td>Implement Token Burning</td><td><code>token::burn</code> decrements circulating supply</td></tr>
                <tr><td className="p-2">9</td><td>Implement Admin Pause Switch</td><td>Protected operations blocked while paused</td></tr>
                <tr><td className="p-2">10</td><td>Build React Frontend Skeleton</td><td>Vite + Tailwind CSS UI dashboard</td></tr>
                <tr><td className="p-2">11</td><td>Integrate Solana Wallet Adapter</td><td>Phantom & Solflare signature integration</td></tr>
                <tr><td className="p-2">12</td><td>Run Full Integration Test Suite</td><td>All 12 test cases pass cleanly</td></tr>
                <tr><td className="p-2">13</td><td>Deploy to Solana Devnet</td><td>Program ID verified on Solana Explorer</td></tr>
                <tr><td className="p-2">14</td><td>End-to-End Devnet Verification</td><td>Mint, transfer, and burn executed live on cluster</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 24: Advanced Topics & 5 Numerical Problems */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-neutral-500">Quantitative Systems & Economics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          24. Advanced Topics & Five Numerical Calculations
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Mastery of production Solana engineering requires quantitative rigor in byte allocation, compute budget optimization, parallel speedup modeling, and token economics. Below are five university-grade problems with complete step-by-step mathematical solutions.
          </p>

          <div className="space-y-6 my-6">
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
          </div>

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
                  <td className="p-3 font-bold text-neutral-900">Rent Exemption Balance</td>
                  <td className="p-3">Rent = (Data_Bytes + 128) &times; 6,960 lamports</td>
                  <td className="p-3 text-emerald-700 font-bold">1,461,600 lamports (0.0014616 SOL)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Anchor Account Space</td>
                  <td className="p-3">Space = 8 + 32 + (4 + len1) + (4 + len2) + 8 + 1</td>
                  <td className="p-3 text-emerald-700 font-bold">217 bytes</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Priority Fee & CU Waste</td>
                  <td className="p-3">Fee = (CU_Limit &times; Price_uLamports) / 10^6</td>
                  <td className="p-3 text-emerald-700 font-bold">900 lamports; Waste cut from 91.8% to 8.3%</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Amdahl's Law Speedup</td>
                  <td className="p-3">Speedup = 1 / ((1 - p) + (p / N))</td>
                  <td className="p-3 text-emerald-700 font-bold">4.92x Speedup (16 Cores, p = 0.85)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Token-2022 Transfer Fee</td>
                  <td className="p-3">Fee = min(floor(Amount &times; Bps / 10,000), Max_Cap)</td>
                  <td className="p-3 text-emerald-700 font-bold">25,000 PREP Fee (Cap hit); 3,975,000 Net</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            
      {/* SECTION 25: Module Assessment */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-8">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-neutral-500">Evaluation & Mastery</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          25. Comprehensive Assessment & Technical Scenarios
        </h2>

        {/* 25 Senior Architect Scenarios */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-200">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Senior Solana & Rust Architect Scenarios (25 Scenarios)
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Real-world protocol engineering, runtime concurrency, PDA mechanics, and security invariants.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search interview scenarios..."
                value={interviewSearch}
                onChange={(e) => setInterviewSearch(e.target.value)}
                className="px-3 py-1.5 border border-neutral-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-64"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredInterviews.length === 0 ? (
              <div className="p-6 text-center text-neutral-500 text-xs italic">
                No interview scenarios match your query.
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
                Module 23 Examination (20 Assessment Questions)
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Answer all questions to test your architectural and smart contract mastery.
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
                  Assessment Results
                </div>
                <div className="text-xl sm:text-2xl font-bold mt-1">
                  Score: {quizScore} / {QUIZ_QUESTIONS.length} ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  {quizScore >= 16
                    ? "Exceptional mastery! You demonstrate deep Solana runtime and Anchor architectural understanding."
                    : "Review the theory sections and attempt the exam again to achieve 80%+ mastery."}
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

            
      {/* SECTION 26: Practical Assignment */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-neutral-500">Autonomous Deliverables</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          26. Practical Capstone Assignment Brief
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Build the complete <strong>PrepToken</strong> protocol application independently, without copying prebuilt templates. Your final portfolio submission must contain:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700">
            <li><strong>Rust and Anchor Smart Contract:</strong> Complete <code>lib.rs</code> containing all 6 instruction endpoints with zero-cost checked arithmetic.</li>
            <li><strong>PDA-Based Token Configuration:</strong> Validated seeds, canonical bump caching, and automatic rent-exemption allocation.</li>
            <li><strong>SPL Token Integration:</strong> Decoupled Mint and Associated Token Accounts with CPI invocations via <code>invoke_signed</code>.</li>
            <li><strong>Security Controls:</strong> Strict Signer and Account ownership constraints protecting against type confusion and impersonation.</li>
            <li><strong>React Frontend:</strong> Responsive web interface connecting Phantom / Solflare wallets with live on-chain balance feeds.</li>
            <li><strong>Solana Devnet Deployment:</strong> Deployed program ID with on-chain transactions verifiable via Solana Explorer or SolanaFM.</li>
            <li><strong>Automated Test Suite:</strong> Comprehensive unit and integration test suite passing all 12 canonical test scenarios.</li>
          </ul>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 font-mono">
            <strong>Bonus Final Challenge:</strong> Extend the application to support Token-2022 Transfer Fees. Configure a 50 bps fee with a maximum cap and write an integration test validating that the withheld fee is harvested to the protocol treasury PDA.
          </div>
        </div>
      </section>

      {/* SECTION 27: Recommended Learning Resources */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-neutral-500">Official Documentation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          27. Recommended Learning Resources
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            These are the official authoritative documentation portals to use alongside this course module:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4 font-mono text-xs">
            <a
              href="https://solana.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Solana Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Core runtime architecture, account models, transactions, and PDAs.</p>
            </a>

            <a
              href="https://doc.rust-lang.org/book/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>The Rust Programming Language</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Ownership, borrowing, lifetimes, traits, error handling, and Cargo.</p>
            </a>

            <a
              href="https://www.anchor-lang.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>Anchor Framework Docs</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Account macros, security constraints, CPI contexts, and client IDLs.</p>
            </a>

            <a
              href="https://solana.com/docs/tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>SPL Token Documentation</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">Token mints, ATAs, transfer mechanics, and Token-2022 extensions.</p>
            </a>

            <a
              href="https://solana.com/docs/tools/litesvm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#f6f4ee] hover:bg-[#eae5d8] border border-[#e7e3da] transition block space-y-1"
            >
              <div className="flex items-center justify-between text-neutral-900 font-bold">
                <span>LiteSVM Testing Guide</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <p className="text-neutral-600 text-[11px]">In-process Rust virtual machine testing with sub-millisecond execution.</p>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 28: What You Should Know (Mastery Matrix) */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 28
          </span>
          <span className="text-xs font-mono text-neutral-500">Learning Outcomes</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          28. What You Should Know After Completing Module 23
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            By the end of this module, you should have achieved comprehensive engineering fluency across eleven core competencies:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Knowledge Area</th>
                  <th className="p-3">Expected Senior Engineering Ability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Solana Architecture</td>
                  <td className="p-3 text-neutral-600">Explain the decoupled execution and account models, PoH, and Sealevel concurrency.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Rust Systems Programming</td>
                  <td className="p-3 text-neutral-600">Write structured, memory-safe programs utilizing Rust's strict compile-time invariants.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Ownership & Borrowing</td>
                  <td className="p-3 text-neutral-600">Manage references, mutable borrows, and <code>'info</code> lifetimes without data races.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Anchor Framework</td>
                  <td className="p-3 text-neutral-600">Build, compile, and validate Solana smart contracts using declarative account macros.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Accounts Model</td>
                  <td className="p-3 text-neutral-600">Design rent-exempt on-chain state layouts with explicit byte allocations and discriminators.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Program Derived Addresses</td>
                  <td className="p-3 text-neutral-600">Derive, validate, and verify deterministic off-curve addresses using canonical bumps.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Cross-Program Invocation</td>
                  <td className="p-3 text-neutral-600">Invoke external Solana programs using <code>invoke</code> and <code>invoke_signed</code> with PDA seeds.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">SPL Token Engineering</td>
                  <td className="p-3 text-neutral-600">Create and manage Mints, ATAs, transfers, burns, and evaluate Token-2022 extensions.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Smart Contract Security</td>
                  <td className="p-3 text-neutral-600">Validate caller authority, account ownership, and eliminate integer overflow vectors.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Testing & Verification</td>
                  <td className="p-3 text-neutral-600">Write unit tests via LiteSVM and integration/negative security tests via Anchor Bankrun.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Devnet Deployment</td>
                  <td className="p-3 text-neutral-600">Publish programs on Solana Devnet, manage buffer accounts, and audit on-chain state.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs text-neutral-800 leading-relaxed">
            <strong>Ultimate Course Benchmark:</strong> You should now be capable of designing and writing a production-grade Anchor smart contract in Rust, managing state via PDAs, executing Cross-Program Invocations to the SPL Token Program, deploying to Solana Devnet, and connecting a full-stack React DApp with Phantom wallet integration.
          </div>
        </div>
      </section>

      {/* CHECKLIST & PROGRESS TRACKER */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
              Syllabus Completion Tracker
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              Module 23: Complete 28-Section Checklist
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Track your progress across all 28 syllabus sections. Persisted automatically to your browser local storage.
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
          to="/learning/blockchain/hyperledger-fabric"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition"
        >
          <ArrowLeft className="w-4 h-4 text-orange-600" />
          <span>Previous: Module 22 — Hyperledger Fabric</span>
        </Link>
        <Link
          to="/learning/blockchain/modular-blockchains"
          className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition"
        >
          <span>Next: Module 24 — Modular Blockchains & Rollups</span>
          <ArrowRight className="w-4 h-4 text-orange-600" />
        </Link>
      </footer>

          </div>
        )}
      </main>
    </div>
  );
}
