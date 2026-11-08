# -*- coding: utf-8 -*-
"""
Lab & Challenges Generator for Module 24 — Final Blockchain Capstone Project
Covers:
24. Integrating the Entire Course (Module 1 to 23 Synthesis Matrix)
25. Recommended Final Repository Structure (Enterprise Monorepo Tree)
26. Capstone Development Roadmap (12-Week SDLC Schedule)
27. Required Capstone Deliverables (Deliverables 1 to 8)
28. Final Project Evaluation (100-Point Rubric & Performance Tiers)
24b. Five Numerical Calculations with Step-by-Step Mathematical Derivations & Answer Key Table
"""

def generate_lab_and_challenges():
    return r'''
      {/* SECTION 24: Integrating the Entire Course */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-neutral-500">Curriculum Synthesis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          24. Integrating the Entire Blockchain Course: Synthesis Matrix
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            The capstone proves your ability to connect the theoretical foundations and hands-on skills acquired across all 24 modules:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Course Phase</th>
                  <th className="p-3">Modules Covered</th>
                  <th className="p-3">Concrete Integration into Final Capstone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="p-3 font-bold text-neutral-900">1. Foundations & Cryptography</td>
                  <td className="p-3">Modules 1–4</td>
                  <td className="p-3 text-neutral-600">Digital signatures, SHA-256 hashing, UTXO vs Account models, and network consensus.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">2. Ethereum & Smart Contracts</td>
                  <td className="p-3">Modules 5–8</td>
                  <td className="p-3 text-neutral-600">Solidity business logic, EVM memory/storage layout, event logging, and Hardhat/Foundry testing.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">3. Tokens, NFTs & Storage</td>
                  <td className="p-3">Modules 9–11</td>
                  <td className="p-3 text-neutral-600">ERC-20 governance tokens, ERC-721/1155 assets, ERC-2981 royalties, and IPFS content pinning.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">4. Web3, Wallets & Full-Stack</td>
                  <td className="p-3">Modules 12–15</td>
                  <td className="p-3 text-neutral-600">Wagmi + Viem React integration, EIP-4361 SIWE authentication, and PostgreSQL event indexers.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">5. DeFi, DEXs & Oracles</td>
                  <td className="p-3">Modules 16–20</td>
                  <td className="p-3 text-neutral-600">Chainlink price oracles, collateralization risk modeling, AMM math, and reentrancy defenses.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">6. Governance & Enterprise</td>
                  <td className="p-3">Modules 21–22</td>
                  <td className="p-3 text-neutral-600">DAO timelocks, multisig admin controls, and enterprise consortium custody workflows.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">7. Solana Development</td>
                  <td className="p-3">Module 23</td>
                  <td className="p-3 text-neutral-600">Comparative high-performance Rust/Anchor analysis and parallel account modeling.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 25: Recommended Final Repository Structure */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-neutral-500">Monorepo Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          25. Recommended Final Monorepo Architecture
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto max-h-[380px] overflow-y-auto">
            <pre>{`votechain/
├── contracts/                     # Solidity Smart Contracts
│   ├── ElectionManager.sol        # Lifecycle & schedule management
│   ├── VotingEngine.sol           # Ballot casting & ballot conservation
│   └── interfaces/                # Clean interface definitions
├── frontend/                      # React 18 + Vite + Tailwind CSS
│   ├── src/components/            # UI components (Wallet, ElectionCard, Results)
│   ├── src/pages/                 # Application views (Home, Dashboard, Admin)
│   └── src/hooks/                 # Wagmi custom hooks (useElection, useVoting)
├── backend/                       # Node.js Event Indexer & Database
│   ├── src/indexer/               # WebSocket log listener & reorg recovery
│   └── src/database/              # PostgreSQL schema migrations
├── test/                          # Comprehensive 5-Tier Test Suite
│   ├── unit/                      # Hardhat unit tests
│   ├── integration/               # End-to-end multi-contract flows
│   ├── security/                  # Negative security exploit tests
│   └── invariant/                 # Foundry property-based invariant fuzzing
├── scripts/                       # Deployment & Verification
│   ├── deploy.ts                  # Hardhat Ignition deployment script
│   └── verify.ts                  # Block explorer verification script
├── docs/                          # Engineering Documentation
│   ├── requirements.md            # FR-01 to FR-10 and NFR specifications
│   ├── architecture.md            # 3-layer system design diagrams
│   └── security-audit.md          # Vulnerability findings & mitigations
├── .github/workflows/ci.yml       # GitHub Actions automated test & build
└── README.md                      # Comprehensive 19-section project portfolio guide`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 26: Capstone Development Roadmap */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-neutral-500">Project Management</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          26. Twelve-Week Production Development Roadmap
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-2 sm:p-3">Week</th>
                  <th className="p-2 sm:p-3">Development Phase</th>
                  <th className="p-2 sm:p-3">Milestone Deliverables</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr><td className="p-2">W1</td><td>Requirements & Scope</td><td>Problem statement, user stories, FR-01–FR-10, and MVP boundary</td></tr>
                <tr><td className="p-2">W2</td><td>System Architecture</td><td>3-tier diagrams, network selection report, and PostgreSQL schema</td></tr>
                <tr><td className="p-2">W3</td><td>Smart Contract Core</td><td>Contract interfaces, state machine enums, and storage structs</td></tr>
                <tr><td className="p-2">W4</td><td>Access Control & Logic</td><td>OpenZeppelin RBAC roles, vote validation, and event emission</td></tr>
                <tr><td className="p-2">W5</td><td>Automated Testing</td><td>Unit tests, integration scenarios, and mock environments</td></tr>
                <tr><td className="p-2">W6</td><td>Security & Invariants</td><td>Static analysis (Slither), Foundry invariant fuzzing, and CEI pattern</td></tr>
                <tr><td className="p-2">W7</td><td>React Frontend Skeleton</td><td>Component hierarchy, Tailwind UI, and election listings</td></tr>
                <tr><td className="p-2">W8</td><td>Wallet Integration</td><td>Wagmi connectors, SIWE nonce authentication, and transaction modals</td></tr>
                <tr><td className="p-2">W9</td><td>Backend & IPFS</td><td>Event indexer, PostgreSQL syncing, reorg handling, and Pinata pinning</td></tr>
                <tr><td className="p-2">W10</td><td>Testnet Deployment</td><td>Sepolia deployment via Hardhat Ignition and Etherscan source verification</td></tr>
                <tr><td className="p-2">W11</td><td>Integration & Monitoring</td><td>Full-stack UAT, Sentry telemetry, and gas benchmarking reports</td></tr>
                <tr><td className="p-2">W12</td><td>Final Defense</td><td>12-slide executive presentation, live demo script, and final repo submission</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 27: Required Capstone Deliverables */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-neutral-500">Submission Requirements</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          27. Eight Mandatory Capstone Deliverables
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">1. GitHub Monorepo</span>
              <p className="text-neutral-600 mt-1">Complete source code, CI/CD pipeline, and 19-section README.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">2. Smart Contracts</span>
              <p className="text-neutral-600 mt-1">Modular Solidity contracts, interfaces, and verified addresses.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">3. System Diagrams</span>
              <p className="text-neutral-600 mt-1">Architecture, state machine, ER diagrams, and sequence flows.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">4. Test Suite Report</span>
              <p className="text-neutral-600 mt-1">Unit, negative, fuzz, and invariant coverage reports.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">5. Security Audit</span>
              <p className="text-neutral-600 mt-1">Threat model, OWASP SCSVS review, findings, and mitigations.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">6. Deployment Docs</span>
              <p className="text-neutral-600 mt-1">Chain IDs, contract addresses, tx hashes, and verified explorer links.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">7. Live Working DApp</span>
              <p className="text-neutral-600 mt-1">Accessible frontend URL connected to public testnet.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">8. Technical Defense</span>
              <p className="text-neutral-600 mt-1">12-slide presentation and live on-chain demonstration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 28: Final Project Evaluation Rubric */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 28
          </span>
          <span className="text-xs font-mono text-neutral-500">Academic Grading</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          28. Capstone Evaluation: 100-Point Marking Rubric
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-mono">
              <thead>
                <tr className="bg-neutral-100 border-b border-neutral-300 font-bold text-neutral-800">
                  <th className="p-3">Evaluation Dimension</th>
                  <th className="p-3">Weight</th>
                  <th className="p-3">Assessment Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr><td className="p-3 font-bold text-neutral-900">Problem Definition & Requirements</td><td className="p-3">10 pts</td><td className="p-3 text-neutral-600">Clear problem statement, stakeholder analysis, FR-01–FR-10, and bounded scope.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Blockchain & System Architecture</td><td className="p-3">10 pts</td><td className="p-3 text-neutral-600">Decoupled 3-layer architecture, network selection rationale, and on/off-chain partitioning.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Smart Contract Implementation</td><td className="p-3 font-bold text-orange-600">20 pts</td><td className="p-3 text-neutral-600">Modular design, RBAC access control, state machine guards, and gas optimization.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Frontend & Wallet Integration</td><td className="p-3">10 pts</td><td className="p-3 text-neutral-600">React + Wagmi/Viem UI, responsive dashboards, and SIWE cryptographic login.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Backend, Database & IPFS</td><td className="p-3">10 pts</td><td className="p-3 text-neutral-600">PostgreSQL indexing, WebSocket log listener, reorg handling, and IPFS pinning.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Automated Testing Suite</td><td className="p-3 font-bold text-orange-600">15 pts</td><td className="p-3 text-neutral-600">Unit, integration, negative, and property-based invariant tests with high coverage.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Security Assessment & Audit</td><td className="p-3 font-bold text-orange-600">15 pts</td><td className="p-3 text-neutral-600">Threat modeling, OWASP SCSVS review, static analysis (Slither), and CEI patterns.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Deployment & Documentation</td><td className="p-3">5 pts</td><td className="p-3 text-neutral-600">Public testnet deployment, verified explorer links, and 19-section README.</td></tr>
                <tr><td className="p-3 font-bold text-neutral-900">Technical Defense & Live Demo</td><td className="p-3">5 pts</td><td className="p-3 text-neutral-600">12-slide technical presentation and functioning live on-chain demonstration.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 24b: Five Numerical Calculations */}
      <section id="section-24b" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Quantitative Engineering
          </span>
          <span className="text-xs font-mono text-neutral-500">Economic & Computational Modeling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          Five Quantitative Engineering & Economic Problems
        </h2>

        <div className="space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
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
                  <td className="p-3 font-bold text-neutral-900">DeFi Health Factor & Risk</td>
                  <td className="p-3">HF = (Collateral &times; LT) / Borrowed_Debt</td>
                  <td className="p-3 text-emerald-700 font-bold">Initial HF: 1.20; Liquidation at $2,666.67/ETH (16.67% drop)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Gas Optimization Savings</td>
                  <td className="p-3">Savings = Voters &times; &Delta;Gas &times; GasPrice &times; ETH_USD</td>
                  <td className="p-3 text-emerald-700 font-bold">202.5M Gas Saved = 5.67 ETH = $17,010.00 Saved</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">NFT Escrow & ERC-2981</td>
                  <td className="p-3">Split: Royalty(7.5%) + Platform(2.5%) + Seller(90%)</td>
                  <td className="p-3 text-emerald-700 font-bold">Seller: 5.76 ETH; Creator: 0.48 ETH; Platform: 0.16 ETH</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">On-Chain vs IPFS Storage</td>
                  <td className="p-3">Cost = (Bytes / 32) &times; 20,000 gas &times; Price</td>
                  <td className="p-3 text-emerald-700 font-bold">On-Chain: $191,692.80 vs IPFS: $1.80 (99.999% savings)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-neutral-900">Ballot Conservation Invariant</td>
                  <td className="p-3">Total Votes = &sum; Candidate_Votes_i</td>
                  <td className="p-3 text-emerald-700 font-bold">Total: 1,190 votes (95.2% turnout); 60 uncast (Verified)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
'''
