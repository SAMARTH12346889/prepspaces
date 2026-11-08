# -*- coding: utf-8 -*-
"""
Data module for Module 23 — Solana Development with Rust
Contains:
- 28 Checklist Items
- 20 Multiple-Choice Quiz Questions (incorporating all 10 canonical prompt questions)
- 25 Senior Solana & Rust Architect Interview Scenarios
- 5 Numerical Solana Economics & Compute Budget Problems
"""

CHECKLIST_ITEMS = [
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
]

QUIZ_QUESTIONS = [
    # 10 Canonical Questions from Section 25
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
    # 10 Additional Comprehensive Questions
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
]

INTERVIEW_QUESTIONS = [
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
]

NUMERICAL_PROBLEMS = [
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
            "Speedup = 1 / 0.203125 ≈ 4.9228x"
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
]
