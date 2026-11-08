# -*- coding: utf-8 -*-
"""
Theory Sections Generator — Part 3 (Sections 15 to 20)
Module 23 — Solana Development with Rust
Covers:
15. Solana Development Environment
16. Anchor Framework Architecture & Macros
17. Program Derived Addresses (PDAs)
18. Cross-Program Invocation (CPI)
19. Solana Token Program
20. SPL Token Fundamentals & Token-2022 Extensions
"""

def generate_theory_part3():
    return r'''
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
'''
