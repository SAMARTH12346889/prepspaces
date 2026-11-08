# -*- coding: utf-8 -*-
"""
Theory Sections Generator — Part 1 (Sections 1 to 8)
Module 24 — Final Blockchain Capstone Project
Covers:
1. Introduction to the Final Blockchain Capstone
2. Capstone Project Selection & Evaluation Matrix
3. Project Requirements & Specification (VoteChain Blueprint)
4. System Architecture Design (3-Layer Reference Model)
5. Blockchain Selection Framework
6. Smart Contract Architecture & State Machine
7. Database & Off-Chain Storage Design (PostgreSQL Schemas)
8. Solidity Implementation & Framework Tooling
"""

def generate_theory_part1():
    return r'''
      {/* SECTION 1: Introduction to the Final Blockchain Capstone */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-neutral-500">Capstone Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          1. Introduction to the Final Blockchain Capstone
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">1.1 What is a Blockchain Capstone Project?</h3>
          <p>
            A blockchain capstone project is a complete, production-grade software engineering endeavor that unifies the technologies, cryptography, programming paradigms, security principles, and development methodologies mastered across all previous 23 modules of this curriculum.
          </p>
          <p>
            Having mastered blockchain foundations, digital signatures, Bitcoin UTXO economics, the Ethereum Virtual Machine, Solidity smart contracts, DeFi liquidity protocols, Chainlink oracles, NFT token standards, IPFS distributed storage, Web3 wallets, security auditing, and Solana development with Rust, you must now synthesize these disparate concepts into an integrated, production-style decentralized application (DApp).
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono">
            <strong>Core Engineering Mandate:</strong> The capstone is not merely a deployed smart contract or an attractive frontend mockup. You must demonstrate that you can: identify a real-world problem, engineer a decoupled blockchain architecture, choose an appropriate network, write secure smart contracts, design resilient database and IPFS storage tiers, build a responsive React frontend, connect Web3 wallets, test across 5 tiers (unit, integration, negative, fuzz, invariant), execute gas benchmarking, deploy to a public testnet, and defend your engineering decisions in an oral technical review.
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">1.2 From Individual Concepts to a Complete System</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Previous Course Concept</th>
                  <th className="p-3">Concrete Capstone Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Blockchain Fundamentals & Consensus</td>
                  <td className="p-3 text-neutral-600">Network selection, block finality models, and trust assumptions</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Cryptography & Public Key Infrastructure</td>
                  <td className="p-3 text-neutral-600">Digital signatures, transaction authorization, and EIP-4361 authentication</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Ethereum Virtual Machine & Solidity</td>
                  <td className="p-3 text-neutral-600">Core business logic, state machines, and access-controlled contract execution</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Smart Contract Testing & Security</td>
                  <td className="p-3 text-neutral-600">Automated unit, fuzz, invariant testing, and static analysis (Slither/Aderyn)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">DeFi & Oracles</td>
                  <td className="p-3 text-neutral-600">Collateral valuation, dynamic risk engines, and Chainlink Data Feeds</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">NFTs & IPFS Storage</td>
                  <td className="p-3 text-neutral-600">ERC-721/1155/2981 ownership standards and content-addressed metadata pinning</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Solana & Rust Alternative</td>
                  <td className="p-3 text-neutral-600">High-throughput comparative implementation and decoupled account modeling</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Production Operations & CI/CD</td>
                  <td className="p-3 text-neutral-600">GitHub Actions pipelines, testnet deployment, verification, and monitoring</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">1.3 What Does Production-Style Development Mean?</h3>
          <p>
            A classroom demonstration merely connects a browser wallet to a standalone smart contract. In contrast, a <strong>production-style Web3 application</strong> integrates a decoupled multi-tier architecture:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed">
            <pre>{`USER (Web Browser / Mobile Wallet)
  |
  v
REACT FRONTEND (Wagmi + Viem + Tailwind CSS)
  |-------------------------------------+
  |                                     |
  v (JSON-RPC)                          v (HTTP / REST / GraphQL)
BLOCKCHAIN RPC (Infura / Alchemy)     BACKEND API (Node.js / Express)
  |                                     |
  v                                     v
SMART CONTRACTS (EVM / Solidity)      POSTGRESQL DATABASE (Fast Search / Indexing)
  |                                     ^
  +---> IPFS PINNING (Metadata / Media) |
  |                                     |
  +---> BLOCKCHAIN EVENT LOGS ---------> EVENT INDEXER (WebSocket Log Listener)`}</pre>
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Key Architectural Rule:</strong> The blockchain handles authoritative state transitions, asset transfers, and access control. The backend database provides fast search, caching, aggregations, and analytics. The backend must never be treated as an authoritative bypass for on-chain permissions.
          </p>
        </div>
      </section>

      {/* SECTION 2: Capstone Project Selection */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-neutral-500">Project Selection</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          2. Capstone Project Selection: Four Major Blueprints
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            You have four distinct project options. Each blueprint solves a real-world problem and highlights different blockchain engineering domains:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600">Blueprint A (Recommended Reference)</span>
              <h4 className="font-bold text-neutral-900 text-base">Decentralized Voting System (VoteChain)</h4>
              <p className="text-xs text-neutral-600">
                A transparent election system where administrators initialize elections, register eligible voters, and participants submit ballots with duplicate-vote prevention and verifiable on-chain tallies.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">Focus: Governance, AccessControl, State Machines, Invariant Verification.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600">Blueprint B</span>
              <h4 className="font-bold text-neutral-900 text-base">NFT Marketplace (NebulaMarket)</h4>
              <p className="text-xs text-neutral-600">
                A decentralized marketplace enabling creators to mint ERC-721/1155 assets, upload metadata to IPFS, list items for sale, enforce ERC-2981 royalties, and execute escrow settlements.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">Focus: Token Standards, Escrow Contracts, Royalty Distribution, IPFS Pinning.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600">Blueprint C</span>
              <h4 className="font-bold text-neutral-900 text-base">Blockchain Supply Chain DApp (TraceChain)</h4>
              <p className="text-xs text-neutral-600">
                An enterprise provenance tracker following batches through Farm &rarr; Manufacturer &rarr; Distributor &rarr; Warehouse &rarr; Retailer &rarr; Consumer with role-based transitions and QR verification.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">Focus: Multi-party RBAC, Custody Transfers, Audit Logs, IPFS Certificates.</div>
            </div>

            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600">Blueprint D</span>
              <h4 className="font-bold text-neutral-900 text-base">DeFi Lending Protocol (LendSpace)</h4>
              <p className="text-xs text-neutral-600">
                An advanced financial platform where users supply collateral, borrow synthetic stablecoins, monitor real-time Health Factors via Chainlink oracles, and execute liquidations.
              </p>
              <div className="text-[11px] font-mono text-neutral-500">Focus: Financial Engineering, Price Oracles, Reentrancy, Liquidation Risk.</div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">2.1 Comprehensive Blueprint Comparison Matrix</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-mono">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Evaluation Factor</th>
                  <th className="p-3">Project A: Voting</th>
                  <th className="p-3">Project B: NFT Market</th>
                  <th className="p-3">Project C: Supply Chain</th>
                  <th className="p-3">Project D: DeFi Lending</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Contract Complexity</td>
                  <td className="p-3 text-neutral-700">Medium</td>
                  <td className="p-3 text-neutral-700">Medium–High</td>
                  <td className="p-3 text-neutral-700">Medium</td>
                  <td className="p-3 text-rose-700 font-bold">Very High</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Solidity Expressiveness</td>
                  <td className="p-3 text-neutral-700">High</td>
                  <td className="p-3 text-neutral-700">High</td>
                  <td className="p-3 text-neutral-700">High</td>
                  <td className="p-3 text-rose-700 font-bold">Very High</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">IPFS Integration</td>
                  <td className="p-3 text-neutral-500">Optional</td>
                  <td className="p-3 text-emerald-700 font-bold">Mandatory</td>
                  <td className="p-3 text-emerald-700 font-bold">Mandatory</td>
                  <td className="p-3 text-neutral-500">Optional</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Oracle Integration</td>
                  <td className="p-3 text-neutral-500">Not required</td>
                  <td className="p-3 text-neutral-500">Optional</td>
                  <td className="p-3 text-neutral-500">Optional</td>
                  <td className="p-3 text-emerald-700 font-bold">Mandatory (Chainlink)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Financial Risk</td>
                  <td className="p-3 text-emerald-700 font-bold">Low</td>
                  <td className="p-3 text-amber-700">Medium</td>
                  <td className="p-3 text-emerald-700 font-bold">Low</td>
                  <td className="p-3 text-rose-700 font-bold">Extreme</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Testing Complexity</td>
                  <td className="p-3 text-neutral-700">Medium</td>
                  <td className="p-3 text-neutral-700">High</td>
                  <td className="p-3 text-neutral-700">Medium–High</td>
                  <td className="p-3 text-rose-700 font-bold">Extreme</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: Project Requirements and Specification */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-neutral-500">Requirements Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          3. Project Requirements & Specification (VoteChain Blueprint)
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">3.2 Problem Statement & Proposed Solution</h3>
          <p>
            <strong>Problem:</strong> Centralized digital voting platforms rely entirely on internal database tables and single-party server administrators. This creates vulnerability to undetectable database alterations, opaque ballot deletion, and lack of independent mathematical auditability.
          </p>
          <p>
            <strong>Proposed Solution:</strong> Develop <strong>VoteChain</strong>, an open decentralized election platform where elections are initialized on-chain, voter eligibility is enforced via cryptographic address allowlists, ballots produce immutable blockchain transactions, duplicate votes are rejected by the EVM runtime, and vote tallies are verified through transparent smart contract queries.
          </p>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">3.3 Stakeholder Analysis</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Administrator</span>
              <p className="text-neutral-600 mt-1">Deploys contracts, assigns roles, and manages multisig timelocks.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Election Organizer</span>
              <p className="text-neutral-600 mt-1">Configures candidates, sets start/end times, and freezes registration.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Voter</span>
              <p className="text-neutral-600 mt-1">Connects wallet, verifies eligibility, and casts an immutable ballot.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Auditor & Observer</span>
              <p className="text-neutral-600 mt-1">Independently inspects smart contract events and validates totals.</p>
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">3.4 Ten Core Functional Requirements (FR-01 to FR-10)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-01 (Wallet Connection):</strong> Connect Web3 wallets (MetaMask, Rainbow) via Wagmi.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-02 (Election Creation):</strong> Authorized organizers initialize elections with metadata and timestamps.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-03 (Candidate Management):</strong> Register candidates before the election starts; enforce freeze.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-04 (Voter Allowlisting):</strong> Authorized registrar allowlists eligible voter addresses.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-05 (Vote Submission):</strong> Eligible voters submit signed transaction casting their ballot.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-06 (Double-Vote Prevention):</strong> Assert `!hasVoted[electionId][msg.sender]` on every ballot.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-07 (Election Closure):</strong> Reject any vote transactions submitted after `endTime`.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-08 (Result Calculation):</strong> Authoritative candidate totals calculated from on-chain state.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-09 (Explorer Verification):</strong> Direct links to verified transactions on Sepolia Explorer.
            </div>
            <div className="p-3 rounded-lg bg-white border border-[#e7e3da]">
              <strong>FR-10 (Audit History):</strong> Queryable log of all contract events (`VoteCast`, `ElectionClosed`).
            </div>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 mt-6">3.6 Project Scope: Clearly Bounded MVP</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
              <span className="font-bold text-emerald-900 uppercase">Included in MVP</span>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Multi-wallet connection & SIWE authentication</li>
                <li>Election creation, candidate freeze, & allowlisting</li>
                <li>1-vote-per-registered-address enforcement</li>
                <li>Live results dashboard & verified transaction ledger</li>
                <li>Contract deployment & verification on Sepolia testnet</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-300 text-neutral-700">
              <span className="font-bold text-neutral-900 uppercase">Out of MVP (Future Research)</span>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>National biometric identity verification</li>
                <li>Legally certified governmental voting infrastructure</li>
                <li>Fully anonymous zero-knowledge proof ballots</li>
                <li>Complex multi-chain bridge vote aggregation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: System Architecture Design */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-neutral-500">System Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          4. System Architecture Design: Three-Tier Reference Model
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Our architecture follows a clean 3-layer separation of concerns:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">Layer 1: Presentation</span>
              <p className="text-neutral-600 mt-1">React, TypeScript, Tailwind CSS, Wagmi React Hooks, and Viem for JSON-RPC encoding.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">Layer 2: Off-Chain Indexing</span>
              <p className="text-neutral-600 mt-1">Node.js service, PostgreSQL database, WebSocket blockchain event listeners, and IPFS gateways.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900 text-sm">Layer 3: Blockchain</span>
              <p className="text-neutral-600 mt-1">EVM, Solidity smart contracts, OpenZeppelin AccessControl, and immutable on-chain state.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Blockchain Selection */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-neutral-500">Infrastructure Decision</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          5. Blockchain Selection Framework: EVM vs Solana
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Requirement</th>
                  <th className="p-3">EVM Network (Ethereum / Arbitrum)</th>
                  <th className="p-3">Solana</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Language</td>
                  <td className="p-3 text-neutral-700">Solidity / Yul</td>
                  <td className="p-3 text-neutral-700">Rust / C</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Execution Engine</td>
                  <td className="p-3 text-neutral-700">EVM (Single-threaded state machine)</td>
                  <td className="p-3 text-neutral-700">Sealevel (Multi-threaded parallel runtime)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Testing Framework</td>
                  <td className="p-3 text-neutral-700">Hardhat 3 / Foundry</td>
                  <td className="p-3 text-neutral-700">Anchor / LiteSVM</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Token Standards</td>
                  <td className="p-3 text-neutral-700">ERC-20, ERC-721, ERC-1155</td>
                  <td className="p-3 text-neutral-700">SPL Token, Token-2022</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Governance Ecosystem</td>
                  <td className="p-3 text-emerald-700 font-bold">Standardized OpenZeppelin Governor / Safe</td>
                  <td className="p-3 text-neutral-700">SPL Governance / Realms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Decision Rationale:</strong> We select Ethereum Sepolia Testnet for VoteChain due to the rich availability of OpenZeppelin security contracts, extensive testing suites in Hardhat and Foundry, and native integration with standard Web3 wallets.
          </p>
        </div>
      </section>

      {/* SECTION 6: Smart Contract Architecture */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-neutral-500">Contract Design</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          6. Smart Contract Architecture & State Machine
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">6.3 Election State Machine Transitions</h3>
          <p>
            To prevent administrative abuse and ensure deterministic execution, VoteChain enforces a strict 4-stage state machine:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-neutral-100 border border-neutral-300">
              <span className="font-bold text-neutral-800">1. DRAFT</span>
              <p className="text-neutral-600 mt-1">Election initialized, candidates added, registration open. No votes accepted.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300">
              <span className="font-bold text-emerald-900">2. ACTIVE</span>
              <p className="text-emerald-700 mt-1">Candidate registration frozen. Eligible allowlisted voters submit ballots.</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-300">
              <span className="font-bold text-amber-900">3. CLOSED</span>
              <p className="text-amber-700 mt-1">Deadline passed. No further votes accepted. State sealed awaiting finalization.</p>
            </div>
            <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-300">
              <span className="font-bold text-indigo-900">4. FINALIZED</span>
              <p className="text-indigo-700 mt-1">Winner declared, results published, permanent on-chain state sealed.</p>
            </div>
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Security Invariant:</strong> Invalid transitions are rejected by the contract. For example, a `Finalized` election can never re-enter `Active`, and candidates can never be appended once an election becomes `Active`.
          </p>
        </div>
      </section>

      {/* SECTION 7: Database and Off-Chain Storage Design */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-neutral-500">Off-Chain Data Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          7. Database & Off-Chain Storage Design (PostgreSQL Schemas)
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            The off-chain PostgreSQL database indexes historical contract events to serve rapid frontend queries without overloading blockchain RPC endpoints:
          </p>

          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-3">
            <div>
              <span className="text-orange-400 font-bold">TABLE users</span> (id UUID PRIMARY KEY, wallet_address VARCHAR(42) UNIQUE NOT NULL, created_at TIMESTAMP DEFAULT NOW());
            </div>
            <div>
              <span className="text-orange-400 font-bold">TABLE elections</span> (id UUID PRIMARY KEY, chain_id BIGINT NOT NULL, contract_address VARCHAR(42) NOT NULL, election_id BIGINT NOT NULL, status VARCHAR(20) NOT NULL, start_time TIMESTAMP NOT NULL, end_time TIMESTAMP NOT NULL, UNIQUE(chain_id, contract_address, election_id));
            </div>
            <div>
              <span className="text-orange-400 font-bold">TABLE candidates</span> (id UUID PRIMARY KEY, election_id UUID REFERENCES elections(id), candidate_id BIGINT NOT NULL, name VARCHAR(100) NOT NULL, metadata_cid VARCHAR(100));
            </div>
            <div>
              <span className="text-orange-400 font-bold">TABLE transactions</span> (id UUID PRIMARY KEY, transaction_hash VARCHAR(66) NOT NULL, log_index BIGINT NOT NULL, wallet_address VARCHAR(42) NOT NULL, event_type VARCHAR(50) NOT NULL, block_number BIGINT NOT NULL, UNIQUE(transaction_hash, log_index));
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Solidity Implementation */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-neutral-500">Smart Contract Implementation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          8. Solidity Implementation & Framework Tooling
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg font-bold text-neutral-900">8.4 Core Vote Validation Logic</h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`// In VoteChain.sol:
function vote(uint256 electionId, uint256 candidateId) external nonReentrant {
    Election storage election = elections[electionId];
    
    // Checks
    if (election.status != ElectionStatus.Active) revert ElectionNotActive();
    if (block.timestamp < election.startTime || block.timestamp > election.endTime) revert OutsideVotingPeriod();
    if (!isEligibleVoter[electionId][msg.sender]) revert IneligibleVoter();
    if (hasVoted[electionId][msg.sender]) revert AlreadyVoted();
    if (candidateId == 0 || candidateId > election.candidateCount) revert InvalidCandidate();

    // Effects
    hasVoted[electionId][msg.sender] = true;
    candidateVotes[electionId][candidateId] += 1;
    election.totalVotes += 1;

    // Events (Historical offloading)
    emit VoteCast(electionId, msg.sender, candidateId, block.timestamp);
}`}</pre>
          </div>
        </div>
      </section>
'''
