# projectx/generator_mod16/gen_theory.py
"""
Theory generator for Module 16: Decentralized Finance (DeFi) Architecture
Covers Sections 1 to 19 in complete academic detail with zero omissions.
"""

def generate_theory():
    return r'''
      {/* ------------------------------------------------------------- */}
      {/* TAB 1: THEORY & SYSTEM ARCHITECTURE                           */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "theory" && (
        <section className="space-y-12">
          {/* Module Banner */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Core Curriculum • Module 16
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Decentralized Finance • AMMs • Money Legos • Security
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Module 16 — Decentralized Finance (DeFi) Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Decentralized Finance (DeFi) represents the programmable reorganization of global financial services.
              By replacing opaque centralized intermediaries with deterministic, auditable smart contracts,
              DeFi enables peer-to-peer exchange, pooled lending markets, synthetic derivatives, and autonomous yield strategies.
              In this module, you will master the economic equations, protocol architectures, and security engineering
              governing modern Web3 financial infrastructure.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Exchange Invariant</span>
                <span className="text-neutral-800 font-bold">x * y = k (CPMM)</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Lending Engine</span>
                <span className="text-neutral-800 font-bold">Overcollateralized / HF &lt; 1</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Capital Primitives</span>
                <span className="text-neutral-800 font-bold">Flash Loans, LP Tokens, Yield</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Security Invariants</span>
                <span className="text-neutral-800 font-bold">CEI, TWAP, MEV Shielding</span>
              </div>
            </div>
          </div>

          {/* SECTION 1: Introduction to DeFi */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 1</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Introduction to Decentralized Finance
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">1.1 What Is Decentralized Finance?</h4>
              <p>
                <strong>Decentralized Finance (DeFi)</strong> is an open financial ecosystem built using public blockchain networks,
                Turing-complete smart contracts, and decentralized client applications. It enables users to trade, borrow, lend,
                stake, and manage risk without relying on centralized custodian banks, brokerages, or clearing houses.
              </p>

              {/* Traditional vs DEX Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wide">
                    Traditional Exchange (CEX) Workflow
                  </h5>
                  <ol className="text-xs text-neutral-600 space-y-1 list-decimal list-inside font-mono">
                    <li>User submits identity verification (KYC/AML).</li>
                    <li>Exchange deposits assets into private corporate custody.</li>
                    <li>User submits limit order to centralized matching engine.</li>
                    <li>Exchange executes order against proprietary order book.</li>
                    <li>Internal database SQL balances are credited/debited.</li>
                    <li>User requests withdrawal subject to approval and banking limits.</li>
                  </ol>
                </div>

                <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 space-y-2">
                  <h5 className="font-bold text-amber-900 text-xs uppercase tracking-wide">
                    Decentralized Exchange (DEX) Workflow
                  </h5>
                  <ol className="text-xs text-neutral-800 space-y-1 list-decimal list-inside font-mono">
                    <li>User connects non-custodial Web3 wallet (MetaMask).</li>
                    <li>User selects token pair (e.g. ETH → USDC).</li>
                    <li>DApp reads liquidity pool reserves from the blockchain.</li>
                    <li>Smart contract algorithmically calculates output and slippage.</li>
                    <li>User signs transaction authorizing token transfer.</li>
                    <li>EVM atomically swaps tokens and updates on-chain reserves.</li>
                  </ol>
                </div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">1.2 Core Characteristics of DeFi</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">A. Permissionless Access</span>
                  <p className="text-neutral-600">Anyone with an internet connection, a blockchain address, and sufficient native gas tokens can interact with protocols without gatekeepers.</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">B. Absolute Transparency</span>
                  <p className="text-neutral-600">Smart contract bytecode, historical transactions, reserve balances, and governance votes are permanently verifiable on public ledgers.</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">C. Programmability</span>
                  <p className="text-neutral-600">Financial agreements are codified in immutable smart contract logic, executing automated calculations, margin checks, and liquidations.</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">D. Non-Custodial Architecture</span>
                  <p className="text-neutral-600">Users retain sole custody of their private keys. Smart contracts manage assets strictly according to algorithmic rules rather than corporate discretion.</p>
                </div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">1.3 Major Categories of DeFi Protocols</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Category</th>
                      <th className="p-3 border-b border-neutral-200">Primary Financial Function</th>
                      <th className="p-3 border-b border-neutral-200">Canonical Protocol Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Decentralized Exchanges (DEX)</td>
                      <td className="p-3">Peer-to-peer token swapping via liquidity pools & AMMs</td>
                      <td className="p-3 font-mono text-amber-700 font-semibold">Uniswap, Curve, Balancer</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Pooled Lending</td>
                      <td className="p-3">Supply capital to earn variable algorithmic interest</td>
                      <td className="p-3 font-mono text-neutral-800">Aave, Compound</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Overcollateralized Borrowing</td>
                      <td className="p-3">Borrow debt assets against locked cryptocurrency collateral</td>
                      <td className="p-3 font-mono text-neutral-800">MakerDAO (Sky), Morpho</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Decentralized Stablecoins</td>
                      <td className="p-3">Maintain soft currency pegs via algorithmic collateral ratios</td>
                      <td className="p-3 font-mono text-neutral-800">DAI / USDS, LUSD</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Liquid Staking (LSD)</td>
                      <td className="p-3">Stake native assets and receive liquid yield-bearing claims</td>
                      <td className="p-3 font-mono text-neutral-800">Lido (stETH), Rocket Pool (rETH)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Yield Aggregators</td>
                      <td className="p-3">Automate yield compounding across multiple lending vaults</td>
                      <td className="p-3 font-mono text-neutral-800">Yearn Finance, Beefy</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Perpetuals & Derivatives</td>
                      <td className="p-3">Trade leveraged synthetic positions without expiry dates</td>
                      <td className="p-3 font-mono text-neutral-800">GMX, dYdX, Synthetix</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Decentralized Insurance</td>
                      <td className="p-3">Underwrite smart contract and depeg risk via mutual capital pools</td>
                      <td className="p-3 font-mono text-neutral-800">Nexus Mutual</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900 space-y-1">
                <span className="font-bold uppercase tracking-wide">Key Engineering Takeaway:</span>
                <p>
                  DeFi restructures financial plumbing using programmable blockchain systems, but it does <strong>not</strong> eliminate financial,
                  mathematical, or operational risk. Developers must treat economic models with the same rigorous scrutiny as low-level EVM bytecode.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 2: Traditional Finance vs DeFi */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 2</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Traditional Finance vs DeFi Architecture
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                In traditional finance, trust is concentrated in legal corporate entities that administer proprietary ledgers.
                In DeFi, trust is minimized into cryptographic execution proofs verified by decentralized consensus nodes:
              </p>

              {/* 10-Dimension Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Architectural Dimension</th>
                      <th className="p-3 border-b border-neutral-200">Traditional Finance (CeFi / TradFi)</th>
                      <th className="p-3 border-b border-neutral-200">Decentralized Finance (DeFi)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1. Administrative Control</td>
                      <td className="p-3">Centralized corporate entities & executives</td>
                      <td className="p-3 font-semibold text-amber-700">Autonomous smart contracts & DAO token voting</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">2. Account Onboarding</td>
                      <td className="p-3">Identity verification (KYC/AML), geographic approval</td>
                      <td className="p-3 font-semibold text-green-700">Permissionless wallet connection (secp256k1 keypairs)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">3. Settlement Layer</td>
                      <td className="p-3">SWIFT, Fedwire, ACH (T+1 to T+3 business days)</td>
                      <td className="p-3">Blockchain block confirmation (12s Ethereum / sub-second L2s)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">4. Ledger Records</td>
                      <td className="p-3">Private relational databases (Oracle, PostgreSQL)</td>
                      <td className="p-3">Public immutable blockchain state trie</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">5. Operating Hours</td>
                      <td className="p-3">Mon-Fri 9:00 AM – 4:30 PM (Closed holidays)</td>
                      <td className="p-3 font-semibold text-green-700">Continuous 24/7/365 uninterrupted availability</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">6. Data Transparency</td>
                      <td className="p-3">Opaque balance sheets; quarterly retrospective reports</td>
                      <td className="p-3">Real-time provable on-chain reserves and flow of funds</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">7. Transaction Reversal</td>
                      <td className="p-3">Chargebacks and administrative clawbacks possible</td>
                      <td className="p-3 font-semibold text-red-700">Strictly final and irreversible upon consensus</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">8. Interoperability</td>
                      <td className="p-3">Siloed closed APIs requiring commercial contracts</td>
                      <td className="p-3 font-semibold text-amber-700">Permissionless composability ("Money Legos")</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">9. Custody Model</td>
                      <td className="p-3">Custodial (bank holds deposits as unsecured debt)</td>
                      <td className="p-3 font-semibold text-green-700">Self-custodial (user holds private keys)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">10. Primary Risks</td>
                      <td className="p-3">Institutional insolvency, bank runs, censorship</td>
                      <td className="p-3 font-semibold text-red-700">Smart contract exploits, oracle attacks, private key loss</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 3: 5-Layer Ecosystem Architecture */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 3</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DeFi 5-Layer Ecosystem Architecture
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                A decentralized financial ecosystem is structured into five interdependent operational layers:
              </p>

              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────────────┐
│ Layer 5: Aggregation & Financial User Applications                      │
│ (DEX Aggregators [1inch], Yield Optimizers [Yearn], Portfolio Dashboards)│
├─────────────────────────────────────────────────────────────────────────┤
│ Layer 4: Wallet & Client Interface Layer                                │
│ (MetaMask, Rainbow, EIP-1193 Providers, Viem / Ethers.js Frontends)     │
├─────────────────────────────────────────────────────────────────────────┤
│ Layer 3: Oracle & External Data Infrastructure                          │
│ (Chainlink Decentralized Price Feeds, TWAPs, Pyth High-Frequency Oracles)│
├─────────────────────────────────────────────────────────────────────────┤
│ Layer 2: Smart Contract Protocol Layer                                  │
│ (Uniswap Pools, Aave Lending Vaults, MakerDAO CDPs, Governance Timelocks)│
├─────────────────────────────────────────────────────────────────────────┤
│ Layer 1: Blockchain Execution & Settlement Layer                        │
│ (Ethereum Mainnet, Arbitrum, Optimism, Base, EVM State Machines)       │
└─────────────────────────────────────────────────────────────────────────┘`}
              </pre>

              <h4 className="text-base font-bold text-neutral-900 pt-3">Key Subsystems & Responsibilities</h4>
              <ul className="text-xs text-neutral-700 space-y-2 list-disc list-inside">
                <li><strong>Settlement Layer (L1/L2):</strong> Responsible for transaction sequencing, gas charging, cryptographic ECDSA validation, and persistent EVM state storage.</li>
                <li><strong>Protocol Layer (L2):</strong> Codifies core mathematical financial rules—reserve accounting, swap invariant enforcement, and interest rate models.</li>
                <li><strong>Oracle Layer (L3):</strong> Bridges off-chain real-world price data into smart contracts. Oracles are required because blockchains cannot initiate outbound HTTP calls.</li>
                <li><strong>Client Layer (L4):</strong> Translates user interactions into ABI-encoded calldata and prompts wallet signatures via EIP-1193.</li>
                <li><strong>Application Layer (L5):</strong> Combines underlying protocols into unified user-facing financial products (e.g., auto-routing swaps across 5 different DEXs).</li>
              </ul>
            </div>
          </div>

          {/* SECTION 4: Smart Contract Financial Logic */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 4</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Smart Contract Financial Primitives & Atomicity
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">4.1 Financial State Representation</h4>
              <p>
                In a DeFi smart contract, financial balances are represented as unsigned integers within storage mappings:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract SimpleVault {
    // Internal ledger mapping account addresses to deposited wei
    mapping(address => uint256) public balances;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    function deposit() external payable {
        require(msg.value > 0, "Deposit must be positive");
        balances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");

        // CHECKS-EFFECTS-INTERACTIONS PATTERN (CEI)
        // 1. Update internal state BEFORE making external calls to block reentrancy
        balances[msg.sender] -= amount;

        // 2. Perform external value transfer
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "ETH transfer failed");

        emit Withdrawn(msg.sender, amount);
    }
}`}
              </pre>

              <h4 className="text-base font-bold text-neutral-900 pt-3">4.2 Transactional Atomicity</h4>
              <p>
                In the EVM, transactions are <strong>atomic</strong>: either all state modifications succeed and commit to the blockchain,
                or if any sub-call reverts (via <code className="font-mono text-xs px-1.5 py-0.5 bg-neutral-100 rounded">require()</code> or <code className="font-mono text-xs px-1.5 py-0.5 bg-neutral-100 rounded">revert()</code>),
                the entire transaction execution tree is rolled back as though it never occurred.
                This guarantee is the bedrock of multi-hop swaps and flash loan borrowing.
              </p>
            </div>
          </div>

          {/* SECTION 5: Protocols & Principles */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 5</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DeFi Protocol Architecture & Core Design Principles
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                A DeFi protocol is a coordinated system of modular smart contracts implementing financial rules.
                A production-grade protocol must satisfy six fundamental engineering criteria:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">1. Mathematical Correctness</span>
                  <span className="text-neutral-600">Invariants must hold across all execution bounds without precision loss or integer overflow.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">2. Invariant Solvency</span>
                  <span className="text-neutral-600">Total protocol assets under management must always exceed or equal outstanding liabilities.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">3. Reentrancy Immunity</span>
                  <span className="text-neutral-600">All external calls must be guarded using CEI and non-reentrant mutex locks.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">4. Trust Minimization</span>
                  <span className="text-neutral-600">Admin privileges must be constrained by multi-signature governance and multi-day timelocks.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">5. Gas Efficiency</span>
                  <span className="text-neutral-600">Minimize storage writes (SSTORE) and pack struct variables into contiguous 32-byte slots.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">6. Bounded Risk Parameters</span>
                  <span className="text-neutral-600">Enforce supply caps, borrow caps, debt ceilings, and conservative liquidation buffers.</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 6: Liquidity Pools */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 6</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Liquidity Pools vs Order Books
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">6.1 What Is a Liquidity Pool?</h4>
              <p>
                A <strong>liquidity pool</strong> is a smart contract holding locked reserves of two or more ERC-20 tokens.
                Instead of requiring a counterparty to place an offsetting limit order at an exact matching price,
                traders execute swaps directly against the pool's deposited reserves.
              </p>

              {/* Pool vs Order Book Comparison */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Feature</th>
                      <th className="p-3 border-b border-neutral-200">Centralized Limit Order Book (CLOB)</th>
                      <th className="p-3 border-b border-neutral-200">Automated Liquidity Pool (AMM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Pricing Engine</td>
                      <td className="p-3">Discrete bid/ask orders placed by market participants</td>
                      <td className="p-3 font-semibold text-amber-700">Deterministic algorithmic mathematical formula</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Capital Requirement</td>
                      <td className="p-3">Continuous order cancellations & placements (high gas)</td>
                      <td className="p-3 font-semibold text-green-700">Passive pooled liquidity (LPs deposit once and earn fees)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Trade Matching</td>
                      <td className="p-3">High-frequency off-chain matching engine</td>
                      <td className="p-3 font-semibold text-green-700">Instant on-chain execution directly against pool reserves</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Liquidity Source</td>
                      <td className="p-3">Professional market makers (Citadel, Jane Street)</td>
                      <td className="p-3 font-semibold text-amber-700">Decentralized community of global liquidity providers (LPs)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 7: Automated Market Makers (AMMs) */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 7</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Automated Market Makers (AMMs) & Constant Product Math
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">7.1 The Constant Product Formula: x * y = k</h4>
              <p>
                In a Constant Product Market Maker (CPMM) such as Uniswap v2, the pool maintains reserves of Token A (<code className="font-mono">x</code>)
                and Token B (<code className="font-mono">y</code>). The product must remain constant throughout any swap:
              </p>
              <div className="p-4 bg-neutral-900 text-white rounded-xl font-mono text-center text-base sm:text-lg">
                x * y = k
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">7.2 Step-by-Step Swap Calculation</h4>
              <p>Suppose an ETH/USDC liquidity pool contains:</p>
              <ul className="text-xs font-mono space-y-1 list-disc list-inside">
                <li>x = 10 ETH</li>
                <li>y = 20,000 USDC</li>
                <li>k = 10 * 20,000 = 200,000</li>
                <li>Initial Spot Price: P = y / x = 20,000 / 10 = $2,000 USDC per ETH</li>
              </ul>

              <p className="pt-1">A trader deposits 1 ETH into the pool:</p>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 font-mono text-xs space-y-2 text-neutral-800">
                <div>1. New ETH reserve: x' = x + Δx = 10 + 1 = 11 ETH</div>
                <div>2. Enforce invariant: 11 * y' = 200,000</div>
                <div>3. Solve for new USDC reserve: y' = 200,000 / 11 ≈ 18,181.8182 USDC</div>
                <div>4. Compute output: Δy = y - y' = 20,000 - 18,181.8182 = 1,818.1818 USDC</div>
                <div>5. Effective Price: P_eff = 1,818.1818 / 1 = $1,818.18 USDC / ETH</div>
                <div>6. Price Impact: ((2,000 - 1,818.18) / 2,000) * 100 = 9.09%</div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">7.3 Fee-Adjusted Swap Formula</h4>
              <p>
                Real-world pools charge a liquidity provider fee (typically <code className="font-mono text-xs">0.3%</code> or <code className="font-mono text-xs">f = 0.003</code>).
                The output formula taking fees into account is:
              </p>
              <div className="p-3 bg-neutral-100 rounded-lg font-mono text-xs text-neutral-800 text-center">
                Δy = (y * Δx * (1 - f)) / (x + Δx * (1 - f))
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">7.4 AMM Variations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Constant Product (Uniswap v2)</span>
                  <span className="text-neutral-600">x * y = k. General purpose for volatile token pairs. Uniform liquidity across (0, ∞).</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Stable-Swap (Curve)</span>
                  <span className="text-neutral-600">Hybrid sum/product curve. Extreme depth and minimal slippage near 1.0 parity (USDC/USDT).</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Concentrated Liquidity (Uniswap v3)</span>
                  <span className="text-neutral-600">LPs allocate capital to custom price ranges [p_a, p_b], yielding up to 4000x capital efficiency.</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 8: Decentralized Exchanges */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 8</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Decentralized Exchange (DEX) Architecture & Routing
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">8.1 Modular DEX Architecture</h4>
              <p>A production DEX is architected across four core smart contracts:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Factory Contract</span>
                  <span className="text-neutral-600">Registry deployed once that creates and catalogs deterministic Pair contracts using CREATE2.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Pair Contract</span>
                  <span className="text-neutral-600">Holds token balances, enforces x * y = k, mints/burns LP tokens, and executes atomic swaps.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Router Contract</span>
                  <span className="text-neutral-600">Performs safety checks (deadline, slippage), handles multi-hop paths, and interfaces with wallets.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">ERC-20 Token Contracts</span>
                  <span className="text-neutral-600">Underlying fungible token standards with allowance mechanisms (approve / transferFrom).</span>
                </div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">8.2 Multi-Hop Routing</h4>
              <p>
                When a direct pair pool has shallow liquidity, the Router routes the swap across intermediate liquidity hubs:
              </p>
              <div className="p-3 bg-neutral-900 text-neutral-200 rounded-lg font-mono text-xs">
                ETH ──▶ [WETH / DAI Pool] ──▶ DAI ──▶ [DAI / USDC Pool] ──▶ USDC
              </div>
            </div>
          </div>

          {/* SECTION 9: Lending & Borrowing */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 9</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Lending, Borrowing & Overcollateralization
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">9.1 Overcollateralized Debt Markets</h4>
              <p>
                Because blockchains operate anonymously without legal debtor enforcement, loans must be <strong>overcollateralized</strong>:
                borrowers must lock collateral worth significantly more than the borrowed debt assets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Loan-to-Value (LTV)</span>
                  <span className="text-neutral-600 block mt-1">Maximum borrowing limit:</span>
                  <code className="text-amber-700 font-bold font-mono">MaxDebt = Collateral * LTV</code>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Collateralization Ratio (CR)</span>
                  <span className="text-neutral-600 block mt-1">Safety buffer metric:</span>
                  <code className="text-amber-700 font-bold font-mono">CR = (Collateral / Debt) * 100</code>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Receipt Tokens (aTokens)</span>
                  <span className="text-neutral-600 block mt-1">Yield-accruing tokens representing deposited principal + interest index.</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 10: Collateralization & Liquidation */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 10</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Collateralization & Liquidation Mechanics
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">10.1 The Health Factor (HF) Formula</h4>
              <p>
                The health factor indicates the solvency of a debt position. When market volatility causes collateral value to fall,
                the Health Factor drops toward 1.0:
              </p>
              <div className="p-4 bg-neutral-900 text-white rounded-xl font-mono text-center text-sm sm:text-base">
                HF = (Total Collateral in USD * Liquidation Threshold) / Total Debt in USD
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200 text-xs">
                  <strong className="text-green-900 block">HF &gt; 1.0: Solvent & Safe</strong>
                  <span className="text-green-800">The position possesses sufficient collateral to guarantee protocol solvency. No liquidation permitted.</span>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-xs">
                  <strong className="text-red-900 block">HF &lt; 1.0: Eligible for Liquidation</strong>
                  <span className="text-red-800">External liquidators can repay up to 50% of the borrower's debt and seize collateral at a 5–10% bonus.</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 11: Interest Rate Models */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 11</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Utilization-Based & Kinked Interest Rate Models
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">11.1 Pool Utilization</h4>
              <p>Interest rates are governed by capital scarcity: <code className="font-mono text-xs font-bold">U = TotalBorrowed / TotalSupplied</code>.</p>

              <h4 className="text-base font-bold text-neutral-900 pt-2">11.2 The Two-Slope Kinked Curve</h4>
              <p>
                To prevent bank runs (where 100% of supplied funds are borrowed, leaving depositors unable to withdraw),
                protocols employ a <strong>kinked interest rate curve</strong>:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`Borrow APY
    ▲
100%│                                              / (Slope 2: Extreme Rate Spike)
    │                                             /
    │                                            /
 10%│                              • (Kink Point @ 80% Utilization)
    │                             /
  2%│____________________________/ (Slope 1: Moderate Growth)
    └────────────────────────────┴─────────────────▶
    0%                          80%               100% Utilization (U)`}
              </pre>
            </div>
          </div>

          {/* SECTION 12: Yield Farming */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 12</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Yield Farming, Liquidity Mining & APY vs APR
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">12.1 Yield Aggregation Lifecycle</h4>
              <p>
                Yield farming incentivizes early liquidity by distributing governance tokens to liquidity providers who stake their LP tokens:
              </p>
              <div className="p-3 bg-neutral-100 rounded-lg font-mono text-xs text-neutral-800">
                Deposit Token A + Token B ──▶ Receive LP Token ──▶ Stake in MasterChef Farm ──▶ Harvest Governance Tokens
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">12.2 APR vs Compounded APY</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">APR (Annual Percentage Rate)</span>
                  <span className="text-neutral-600">Simple linear non-compounded annual yield:</span>
                  <code className="text-amber-700 font-mono block mt-1">APR = (Annual Rewards / Deposit) * 100</code>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">APY (Annual Percentage Yield)</span>
                  <span className="text-neutral-600">Compounded return accounting for reinvested harvests:</span>
                  <code className="text-green-700 font-mono block mt-1">APY = (1 + r/n)^n - 1</code>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 13: Liquidity Provision */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 13</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Liquidity Provision & LP Share Accounting
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                When an LP deposits assets into a constant product pool, they receive newly minted LP tokens
                representing their fractional ownership of the pool's total reserves:
              </p>
              <div className="p-3 bg-neutral-900 text-neutral-200 rounded-lg font-mono text-xs">
                Initial LP Mint: lpTokens = sqrt(amountA * amountB)<br />
                Subsequent Mints: lpTokens = min((amountA * totalLP) / reserveA, (amountB * totalLP) / reserveB)
              </div>
            </div>
          </div>

          {/* SECTION 14: Impermanent Loss */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 14</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Impermanent Loss Mathematical Derivation
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">14.1 Closed-Form Impermanent Loss Formula</h4>
              <p>
                For a 50/50 Constant Product Pool, let <code className="font-mono text-xs font-bold">r = P_new / P_initial</code> be the price divergence ratio:
              </p>
              <div className="p-4 bg-neutral-900 text-white rounded-xl font-mono text-center text-sm sm:text-base">
                IL = (2 * sqrt(r)) / (1 + r) - 1
              </div>

              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Price Change Multiple (r)</th>
                      <th className="p-3 border-b border-neutral-200">Impermanent Loss Percentage</th>
                      <th className="p-3 border-b border-neutral-200">Required Fee Yield to Break Even</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600 font-mono">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1.25x (+25%)</td>
                      <td className="p-3 text-amber-700">-0.60%</td>
                      <td className="p-3">+0.60%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1.50x (+50%)</td>
                      <td className="p-3 text-amber-700">-2.02%</td>
                      <td className="p-3">+2.06%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">2.00x (+100%)</td>
                      <td className="p-3 text-red-700 font-bold">-5.72%</td>
                      <td className="p-3">+6.07%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">3.00x (+200%)</td>
                      <td className="p-3 text-red-700 font-bold">-13.40%</td>
                      <td className="p-3">+15.47%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">5.00x (+400%)</td>
                      <td className="p-3 text-red-700 font-bold">-25.46%</td>
                      <td className="p-3">+34.16%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 15: Flash Loans */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 15</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Flash Loans & Atomic Execution
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">15.1 Zero-Collateral Borrowing</h4>
              <p>
                A <strong>flash loan</strong> is an uncollateralized loan that must be borrowed and fully repaid with fees
                (e.g., 0.05% on Aave or 0% on Balancer) within the exact same atomic blockchain transaction:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`Borrow 100,000 USDC ──▶ Execute Swaps / Liquidations ──▶ Repay 100,050 USDC
        │                                                          │
        └────── IF REPAYMENT FAILS ──▶ TRANSACTION REVERTS ────────┘`}
              </pre>
            </div>
          </div>

          {/* SECTION 16: Composability */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 16</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Composability & "Money Legos"
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                <strong>Composability</strong> allows developers to combine existing open-source protocols as building blocks.
                However, composability creates <em>systemic risk cascades</em>: if Protocol C has a bug or oracle failure,
                it can trigger liquidation cascades in Protocol B and solvency failure in Protocol A.
              </p>
            </div>
          </div>

          {/* SECTION 17: Risk Management */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 17</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DeFi Risk Management Framework
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Risk Vector</th>
                      <th className="p-3 border-b border-neutral-200">Failure Mechanism</th>
                      <th className="p-3 border-b border-neutral-200">Engineering Mitigation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Smart Contract Risk</td>
                      <td className="p-3">Logical bugs, reentrancy, integer errors</td>
                      <td className="p-3">Multiple audits, formal verification, fuzz testing</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Oracle Risk</td>
                      <td className="p-3">Spot price manipulation via flash loans</td>
                      <td className="p-3">Decentralized oracles (Chainlink) + geometric TWAPs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Liquidity Risk</td>
                      <td className="p-3">100% utilization prevents user withdrawals</td>
                      <td className="p-3">Kinked interest rate curves with steep slopes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Governance Risk</td>
                      <td className="p-3">Hostile takeover of treasury or parameters</td>
                      <td className="p-3">Timelocks, voting quorums, guardian veto multisig</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Bridge Risk</td>
                      <td className="p-3">Cross-chain relayer compromise</td>
                      <td className="p-3">Avoid wrapping assets across centralized multisig bridges</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* SECTION 18: DAO Governance */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 18</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DAO Governance Architectures & Timelocks
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                Decentralized Autonomous Organizations (DAOs) control protocol parameters, risk thresholds, and smart contract upgrades:
              </p>
              <div className="p-3 bg-neutral-900 text-neutral-200 rounded-lg font-mono text-xs">
                Proposal Created ──▶ Historical Block Snapshot ──▶ Voting Period (7 Days) ──▶ Timelock Delay (48 Hours) ──▶ On-Chain Execution
              </div>
              <p className="text-xs text-neutral-600">
                <strong>Why Historical Snapshots Matter:</strong> Using token balance checkpoints from the proposal creation block
                prevents attackers from borrowing voting tokens via flash loans to pass malicious proposals.
              </p>
            </div>
          </div>

          {/* SECTION 19: Security Considerations */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 19</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                DeFi Security Considerations & Audit Standards
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Reentrancy Protection</span>
                  <p className="text-neutral-600">Always apply the Checks-Effects-Interactions (CEI) pattern and inherit OpenZeppelin's <code className="font-mono">ReentrancyGuard</code> (<code className="font-mono">nonReentrant</code>).</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Integer Normalization</span>
                  <p className="text-neutral-600">Solidity has no floats. Handle decimal discrepancies explicitly (e.g. USDC with 6 decimals vs ETH with 18 decimals) and multiply before dividing.</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">MEV Sandwich Mitigation</span>
                  <p className="text-neutral-600">Enforce tight slippage limits (<code className="font-mono">minAmountOut</code>) and block deadlines, and recommend private mempool relays (Flashbots Protect).</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 block">Static & Fuzz Testing</span>
                  <p className="text-neutral-600">Utilize static analysis tools (Slither, Mythril) and invariant fuzz testing engines (Foundry, Echidna) to verify property conservation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
'''
