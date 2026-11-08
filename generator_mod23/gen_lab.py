# -*- coding: utf-8 -*-
"""
Lab & Challenges Generator for Module 23 — Solana Development with Rust
Covers:
21. Solana Program Testing (LiteSVM, Mollusk, 12 Test Cases)
22. Solana Program Deployment (Devnet, BPF Upgrades, Buffer Accounts)
23. Practical Lab: PrepToken Anchor Rust Smart Contract & React DApp
    - Complete lib.rs with 6 instructions: Initialize, CreateAta, MintTokens, TransferTokens, BurnTokens, TogglePause
    - React Frontend Architecture & 5 Screens
    - 14 Development Milestones & 11 Project Acceptance Criteria
24. Advanced Topics & 5 Numerical Problems with Step-by-Step Mathematical Derivations & Answer Key Table
"""

def generate_lab_and_challenges():
    return r'''
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
'''
