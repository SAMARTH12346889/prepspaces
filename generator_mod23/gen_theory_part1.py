# -*- coding: utf-8 -*-
"""
Theory Sections Generator — Part 1 (Sections 1 to 9)
Module 23 — Solana Development with Rust
Covers:
1. Introduction to Solana Blockchain
2. Solana Architecture & Lifecycle
3. Solana vs Ethereum Paradigm
4. Solana Accounts Model
5. Programs and Instructions
6. Solana Runtime & Compute Units
7. Sealevel Parallel Execution
8. Proof of History (PoH) Fundamentals
9. Solana Validators & Consensus
"""

def generate_theory_part1():
    return r'''
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
'''
