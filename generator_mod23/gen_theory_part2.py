# -*- coding: utf-8 -*-
"""
Theory Sections Generator — Part 2 (Sections 10 to 14)
Module 23 — Solana Development with Rust
Covers:
10. Introduction to Rust Programming
11. Ownership and Borrowing
12. Structs, Enums and Traits
13. Rust Error Handling & Checked Arithmetic
14. Cargo and Rust Toolchain
"""

def generate_theory_part2():
    return r'''
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
'''
