# -*- coding: utf-8 -*-
"""
Module 21 Theory Section: Parts 1 through 10
Comprehensive, university-grade, zero information loss.
"""

def get_theory_part1():
    return '''
          {/* Part 1: Introduction to DAOs */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 1</span>
              <span>•</span>
              <span>DECENTRALIZED ORGANIZATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              1. Introduction to Decentralized Autonomous Organizations
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">1.1 What is a DAO?</h3>
              <p>
                A <strong>Decentralized Autonomous Organization (DAO)</strong> is an organization that coordinates people, resources, and decisions using blockchain technology, tokenomics, and smart contracts rather than centralized executive hierarchies.
              </p>
              <p>
                In traditional organizations, critical decisions—such as corporate budgeting, resource allocation, structural reorganizations, and product roadmaps—are determined exclusively by founders, executive management, and boards of directors. In a DAO, these responsibilities can be distributed among community members through blockchain-based governance mechanisms, smart contracts, voting systems, and programmatic treasury controls.
              </p>

              {/* Concrete Scenario Callout */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold font-mono text-xs uppercase tracking-wider">
                  <span>Concrete Architectural Scenario: Treasury Allocation</span>
                </div>
                <p className="text-sm text-neutral-800 leading-relaxed">
                  Imagine a Web3 development organization with <strong>10,000 members</strong>. The organization maintains an on-chain treasury holding <strong>$1,000,000 worth of digital assets</strong>. Members want to decide whether <strong>$100,000</strong> should be allocated to developing a new blockchain product.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white border border-amber-200">
                    <div className="font-bold text-neutral-900 mb-1 text-red-700">Traditional Corporate Flow</div>
                    <p className="text-neutral-600">Executive board and CEO approve behind closed doors &rarr; Corporate wire transfer issued &rarr; No shareholder transparency &rarr; Opaque internal audit.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-amber-200">
                    <div className="font-bold text-neutral-900 mb-1 text-emerald-700">Decentralized DAO Flow</div>
                    <p className="text-neutral-600">1. Member crafts proposal &rarr; 2. Community debate &rarr; 3. Token-weighted voting &rarr; 4. Quorum validation &rarr; 5. Timelock delay &rarr; 6. Smart contract releases $100k.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm italic text-neutral-600">
                The core principle: Organizational decisions can be made transparently through predefined governance rules encoded directly into immutable smart contracts.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.2 Why Were DAOs Created?</h3>
              <p>
                Traditional corporations feature top-down, centralized decision-making:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Traditional Corporate Model]:<br />
                  CEO & Board &rarr; Management Team &rarr; Department Heads &rarr; Employees &rarr; Passive Shareholders<br /><br />
                  [Decentralized Autonomous Organization Model]:<br />
                  DAO Community &rarr; Governance Members &rarr; Proposals &rarr; Voting &rarr; Governance Contract &rarr; Timelock &rarr; Autonomous Treasury Execution
                </code>
              </div>
              <p>
                DAOs emerged as an alternative organizational paradigm enabled by blockchain technology. Their core objectives include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-white p-4 rounded-xl border border-neutral-200">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Transparent Decisions:</strong> Every vote and contract interaction is logged permanently on-chain.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Community Participation:</strong> Direct member influence without corporate intermediaries.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Distributed Ownership:</strong> Protocol ownership and value accrual shared with users.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Publicly Verifiable Governance:</strong> Logic is open-source and auditable on block explorers.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Programmable Treasury:</strong> Direct smart contract asset custody prevents unilateral theft.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Reduced Administrator Dependence:</strong> Protocols can operate autonomously for decades.</li>
              </ul>

              {/* Research Reality Check Callout */}
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 space-y-1">
                <span className="font-bold font-mono uppercase tracking-wide">Empirical Governance Research (Decentralization in Practice):</span>
                <p>
                  However, a DAO is not automatically decentralized merely because it uses a smart contract. A small group of large token holders (whales) can still control outcomes if voting power is heavily concentrated. Research examining <strong>10,639 proposals across 151 DAOs</strong> found that a small number of entities often exercise substantial influence over proposal outcomes. Real decentralization requires intentional token distribution, delegation ecosystems, and defensive governance architecture.
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.3 Six Characteristics of a DAO</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">1. Decentralized Governance</div>
                  <p className="text-neutral-600">Decision-making power is distributed across members rather than concentrated in a corporate board.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">2. Radical Transparency</div>
                  <p className="text-neutral-600">Proposals, votes, treasury balances, and contract upgrades are recorded publicly on-chain.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">3. Smart Contract Execution</div>
                  <p className="text-neutral-600">Decisions are enforced and executed through deterministic code without trusting third parties.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">4. Community Participation</div>
                  <p className="text-neutral-600">Stakeholders can submit proposals, debate governance strategies, and participate in voting.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">5. Treasury Management</div>
                  <p className="text-neutral-600">Smart contracts control collective digital assets that can only be unlocked via approved proposals.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">6. Programmable Rules</div>
                  <p className="text-neutral-600">Voting thresholds, quorums, timelock delays, and execution rules are defined mathematically in code.</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.4 Real-World Production DAO Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Uniswap Governance</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">UNI</span>
                  </div>
                  <p className="text-neutral-600">
                    Governs protocol fee switches, multi-hundred-million dollar grant treasuries, and authorized protocol deployments across Layer 2 networks.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">MakerDAO / Sky</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">MKR / SKY</span>
                  </div>
                  <p className="text-neutral-600">
                    Manages stability fees, collateral onboarding parameters, real-world asset allocations, and global monetary policy for DAI / USDS.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">ENS DAO</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">ENS</span>
                  </div>
                  <p className="text-neutral-600">
                    Controls the Ethereum Name Service `.eth` registrar pricing, public goods endowment distributions, and emergency security council elections.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Aave Governance</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">AAVE</span>
                  </div>
                  <p className="text-neutral-600">
                    Governs risk parameters (LTV, liquidation thresholds, borrow caps), interest rate models, and cross-chain execution bridges across 12+ blockchains.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2: DAO Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 2</span>
              <span>•</span>
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              2. DAO Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">2.1 Core Components of a DAO</h3>
              <p>
                A production-ready DAO is not a single smart contract; it is a coordinated ecosystem of modular, specialized smart contracts and interface layers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">1. Governance Token:</strong> Represents voting power (e.g., ERC20Votes with historical checkpoints).
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">2. Proposal System:</strong> Mechanism to introduce actionable upgrades, parameter shifts, and fund requests.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">3. Voting System:</strong> Method used to calculate voter participation and tally votes (For/Against/Abstain).
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">4. Governance Smart Contract:</strong> Central coordinator managing proposals, voting windows, and status checks.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">5. Timelock Contract:</strong> Imposes a mandatory delay before executing approved decisions to safeguard users.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">6. Treasury:</strong> Smart contract vault storing digital assets, unlockable only via timelock-approved calls.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">7. Multisignature Wallet:</strong> Multi-owner safe used for operational spending and emergency oversight.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">8. Governance Interface:</strong> User front-end (e.g., Tally, Snapshot, custom DApp) for easy interaction.
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">2.2 Technical Architecture Diagram</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Token Holder]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (Connect Wallet / View Dashboard)<br />
                  [Governance Interface (DApp / Tally / Snapshot)]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (Submit Proposal / Cast Vote)<br />
                  [Governor Smart Contract]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Checks token balance via [ERC20Votes Token Checkpoints]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Validates Proposal Threshold & Voting Period<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Tallies votes and evaluates Quorum<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (If Succeeded: Queue in Timelock)<br />
                  [TimelockController Contract]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Mandatory Delay (e.g., 48 Hours for Community Review)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Emergency cancellation power held by Security Council<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (After Delay: Execute calldata)<br />
                  [DAO Treasury / Protocol Target Contracts]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Transfers grant funds or executes protocol parameter upgrades!
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">2.3 Responsibilities of Each Component</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Component</th>
                      <th className="p-3">Primary Responsibility</th>
                      <th className="p-3">Key Smart Contract Functions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">ERC20Votes Token</td>
                      <td className="p-3 text-neutral-600">Maintains historic snapshot of voting weight; manages delegation.</td>
                      <td className="p-3 text-neutral-800"><code>getPastVotes()</code>, <code>delegate()</code>, <code>checkpoints()</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Governor Contract</td>
                      <td className="p-3 text-neutral-600">Proposal lifecycle coordinator, vote receipt, quorum check.</td>
                      <td className="p-3 text-neutral-800"><code>propose()</code>, <code>castVote()</code>, <code>queue()</code>, <code>execute()</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">TimelockController</td>
                      <td className="p-3 text-neutral-600">Enforces execution delay; acts as the final caller of protocol upgrades.</td>
                      <td className="p-3 text-neutral-800"><code>schedule()</code>, <code>execute()</code>, <code>cancel()</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Treasury Vault</td>
                      <td className="p-3 text-neutral-600">Holds protocol assets; restricted strictly to Timelock calls.</td>
                      <td className="p-3 text-neutral-800"><code>releaseFunds()</code>, <code>transferERC20()</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">2.4 On-Chain and Off-Chain Governance Architecture</h3>
              <p>
                Modern Web3 protocols generally adopt a dual-architecture design:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <span className="font-bold text-amber-900 text-sm">On-Chain Governance (Governor / Timelock)</span>
                  <p className="text-neutral-600 leading-relaxed">
                    Used for binding high-stakes actions: smart contract parameter changes, treasury expenditures, and protocol upgrades. Requires gas fees for proposals and votes, ensuring absolute cryptographic certainty and trustless on-chain execution.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <span className="font-bold text-amber-900 text-sm">Off-Chain Governance (Snapshot + SafeSnap)</span>
                  <p className="text-neutral-600 leading-relaxed">
                    Used for temperature checks, community signaling, advisory polls, and low-cost everyday decision-making. Votes are gasless cryptographic signatures stored on IPFS, later validated optimistically or enforced by multisig signers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3: Decentralized Governance */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 3</span>
              <span>•</span>
              <span>GOVERNANCE LIFECYCLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              3. Decentralized Governance
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">3.1 What Decisions Does a DAO Govern?</h3>
              <p>
                Decentralized governance is the structured process by which stakeholders collectively steer a protocol. Key protocol decisions governed include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">1. Smart contract upgrades</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">2. Treasury fund disbursement</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">3. Protocol fee adjustments</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">4. Risk & collateral limits</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">5. Liquidity mining incentives</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">6. Partnership agreements</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">7. Security council elections</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">8. Governance rule changes</div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">3.2 The 8-Stage Governance Lifecycle</h3>
              <p>
                A rigorous proposal must navigate an eight-stage lifecycle to prevent rushed decisions, malicious takeovers, and unintended bugs:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  Stage 1: Idea Formation &rarr; Informal discussion in Discourse / Discord forums.<br />
                  Stage 2: Request for Comments (RFC) &rarr; Formal draft with technical specs and budget.<br />
                  Stage 3: Off-Chain Temperature Check &rarr; Gasless Snapshot poll to gauge community support.<br />
                  Stage 4: Formal On-Chain Submission &rarr; Proposer calls `propose()` meeting proposal threshold.<br />
                  Stage 5: Voting Delay &rarr; Mandatory window (e.g., 2 days) allowing token holders to acquire or delegate voting power.<br />
                  Stage 6: Voting Period &rarr; Active window (e.g., 5 days) where members call `castVote()`.<br />
                  Stage 7: Quorum & Tally Evaluation &rarr; Verification that quorum is met and For &gt; Against.<br />
                  Stage 8: Timelock Queue & Execution &rarr; Proposal queued in Timelock; after delay, `execute()` triggers bytecode!
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">3.3 Governance Participation Models</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="font-bold text-amber-900 mb-1">Direct Voting</div>
                  <p className="text-neutral-600">Every token holder votes directly on every individual proposal. Leads to voter fatigue in active protocols.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="font-bold text-amber-900 mb-1">Delegated Voting</div>
                  <p className="text-neutral-600">Token holders delegate voting power to elected representatives without transferring token custody.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="font-bold text-amber-900 mb-1">Committee / SubDAO</div>
                  <p className="text-neutral-600">Specialized working groups handle micro-decisions (e.g., grants, risk modeling) under DAO oversight.</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">3.4 Decentralization vs. Participation Trade-Off</h3>
              <p>
                A central challenge in decentralized governance is the tension between decentralization and voter participation. When governance demands constant attention on complex technical parameters, voter apathy sets in, dropping turnout below 5%. This empowers small, motivated whale cartels. Balancing simple delegation mechanisms with transparent security oversight is the primary task of modern governance engineering.
              </p>
            </div>
          </div>

          {/* Part 4: Governance Token Models */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 4</span>
              <span>•</span>
              <span>TOKENOMICS & CHECKPOINTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              4. Governance Token Models
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">4.1 What is a Governance Token?</h3>
              <p>
                A <strong>governance token</strong> grants its holder the cryptographic right to influence protocol decisions. Voting power is typically proportional to token holdings or delegated voting weight.
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Member</th>
                      <th className="p-3">Tokens Held</th>
                      <th className="p-3">Share of Total Supply</th>
                      <th className="p-3">Voting Influence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Alice (Early Contributor)</td>
                      <td className="p-3">400,000</td>
                      <td className="p-3">40%</td>
                      <td className="p-3 text-amber-900 font-bold">Can single-handedly meet 4% quorum</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Bob (Institutional Backer)</td>
                      <td className="p-3">250,000</td>
                      <td className="p-3">25%</td>
                      <td className="p-3">Substantial swing voting weight</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Charlie (Core Developer)</td>
                      <td className="p-3">200,000</td>
                      <td className="p-3">20%</td>
                      <td className="p-3">Substantial technical steering weight</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">David (Active Community Member)</td>
                      <td className="p-3">100,000</td>
                      <td className="p-3">10%</td>
                      <td className="p-3">Can submit proposals (&gt; 1% threshold)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Community Retail Pool</td>
                      <td className="p-3">50,000</td>
                      <td className="p-3">5%</td>
                      <td className="p-3">Requires collective delegation to impact outcomes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">4.2 ERC-20 vs. ERC20Votes: The Double-Voting Vulnerability</h3>
              <p>
                A standard ERC-20 token is <strong>unsuitable for on-chain governance</strong> due to double-voting and flash-loan attacks.
              </p>
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-950 space-y-2">
                <div className="font-bold uppercase tracking-wider">The Standard ERC-20 Double-Voting Exploit:</div>
                <p>
                  1. Attacker holds 100,000 standard ERC-20 tokens in Wallet A.<br />
                  2. Attacker votes FOR Proposal #1 using Wallet A.<br />
                  3. In the same block or subsequent block, Attacker transfers 100,000 tokens to Wallet B.<br />
                  4. Attacker votes FOR Proposal #1 again using Wallet B!<br />
                  5. Total voting power exercised: 200,000 votes from only 100,000 tokens.
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">4.3 ERC20Votes Architecture: Historical Checkpoints</h3>
              <p>
                To eliminate double-voting and flash-loan manipulation, OpenZeppelin&apos;s <code>ERC20Votes</code> extension implements an internal historical ledger using binary-searchable <strong>Checkpoints</strong>:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  struct Checkpoint &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;uint48 _key; // Block number or timestamp<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;uint208 _value; // Voting power recorded at that key<br />
                  &#125;<br /><br />
                  // Query historical voting weight pinned at proposal snapshot block:<br />
                  function getPastVotes(address account, uint256 timepoint) external view returns (uint256);
                </code>
              </div>
              <p>
                When a proposal is submitted, its <strong>snapshot timepoint</strong> is permanently fixed. Any tokens transferred or borrowed after that timepoint have zero effect on the proposal&apos;s outcome!
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">4.4 Token Models & Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Model</th>
                      <th className="p-3">Primary Use</th>
                      <th className="p-3">Pros</th>
                      <th className="p-3">Cons / Risks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Fixed Supply</td>
                      <td className="p-3">Pure governance rights, no inflation.</td>
                      <td className="p-3">Predictable dilution; protects early holders.</td>
                      <td className="p-3">Cannot easily incentivize new future contributors.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Inflationary Supply</td>
                      <td className="p-3">Ongoing liquidity & contributor grants.</td>
                      <td className="p-3">Sustained funding for ecosystem expansion.</td>
                      <td className="p-3">Dilutes passive holders; risk of runaway inflation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">veToken (Vote-Escrowed)</td>
                      <td className="p-3">Long-term lockups (e.g., Curve veCRV).</td>
                      <td className="p-3">Aligns long-term incentives; eliminates mercenary votes.</td>
                      <td className="p-3">Capital inefficiency; illiquidity for participants.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 5: Proposal Creation */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 5</span>
              <span>•</span>
              <span>PROPOSAL LIFECYCLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              5. Proposal Creation
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">5.1 What is a Governance Proposal?</h3>
              <p>
                A <strong>governance proposal</strong> is a formal on-chain request to alter the state of a blockchain protocol. If passed and executed, the proposal causes the Timelock or Governor contract to issue low-level calls (with encoded calldata) to target contracts.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">5.2 Anatomy of an On-Chain Proposal (11 Core Fields)</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Field</th>
                      <th className="p-3">Solidity Type</th>
                      <th className="p-3">Description & Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">1. Proposal ID</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Unique hash derived from keccak256(targets, values, calldatas, descriptionHash).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">2. Proposer</td>
                      <td className="p-3 text-amber-800">address</td>
                      <td className="p-3">Address initiating the proposal (must satisfy proposal threshold).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">3. Target Addresses</td>
                      <td className="p-3 text-amber-800">address[]</td>
                      <td className="p-3">Contracts that will be invoked upon execution (e.g., DAOTreasury).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">4. ETH Values</td>
                      <td className="p-3 text-amber-800">uint256[]</td>
                      <td className="p-3">Ether / native currency transmitted with each call (usually 0 for token transfers).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">5. Calldatas</td>
                      <td className="p-3 text-amber-800">bytes[]</td>
                      <td className="p-3">ABI-encoded function selector and arguments (e.g., `release(recipient, amount)`).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">6. Start Timepoint</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Block number or timestamp when active voting commences.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">7. End Timepoint</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Block number or timestamp when voting concludes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">8. Proposal Threshold</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Minimum voting power required to call `propose()`.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">9. Quorum Required</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Minimum non-against votes required for proposal validity.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">10. Description Hash</td>
                      <td className="p-3 text-amber-800">bytes32</td>
                      <td className="p-3">Keccak256 hash of markdown proposal title and IPFS link.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">11. State</td>
                      <td className="p-3 text-amber-800">enum ProposalState</td>
                      <td className="p-3">Pending, Active, Canceled, Defeated, Succeeded, Queued, Expired, Executed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">5.3 Concrete Production Proposal Example: DAO Proposal #024</h3>
              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">DAO Proposal #024: Fund Web3 Developer Education ($50,000 USDC)</div>
                <p className="text-neutral-600"><strong>Target:</strong> 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 (USDC Token Contract)</p>
                <p className="text-neutral-600"><strong>Function Call:</strong> <code>transfer(address recipient, uint256 amount)</code></p>
                <p className="text-neutral-600"><strong>Recipient:</strong> 0x71C...B29 (PrepSpaces Education Guild)</p>
                <p className="text-neutral-600"><strong>Calldata:</strong> <code>0xa9059cbb00000000000000000000000071c...0000000000000000000000000000000000000000000000000000000ba43b7400</code> ($50,000 * 10^6)</p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">5.4 Proposal Creation in Solidity</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  function propose(<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;address[] memory targets,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;uint256[] memory values,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;bytes[] memory calldatas,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;string memory description<br />
                  ) public returns (uint256 proposalId);
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">5.5 Proposal Threshold</h3>
              <p>
                The <strong>proposal threshold</strong> is the minimum amount of voting tokens an address must hold or represent via delegation to submit a proposal.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950">
                Example: If total voting supply = 1,000,000 tokens, and proposal threshold = 1%, an account must control at least <strong>10,000 votes</strong> at the time of proposal creation. This stops griefing attacks and proposal spam that would otherwise exhaust voter attention.
              </div>
            </div>
          </div>

          {/* Part 6: Voting Mechanisms */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 6</span>
              <span>•</span>
              <span>VOTING MECHANISMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              6. Voting Mechanisms
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                DAOs employ various voting mechanisms to balance democratic fairness, capital commitment, and resistance to plutocracy:
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-2">6.1 Token-Weighted Voting (1 Token = 1 Vote)</h3>
              <p>
                The default mechanism in most DeFi protocols. If you hold 10,000 tokens, you cast 10,000 votes.
              </p>
              <div className="p-3 rounded-lg bg-neutral-100 text-xs font-mono">
                Formula: V_i = B_i (Voting power equals token balance)
              </div>
              <p className="text-xs text-neutral-600">
                <strong>Advantage:</strong> Aligns capital risk with protocol stewardship.<br />
                <strong>Disadvantage:</strong> Vulnerable to plutocratic capture where whales dictate all decisions.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.2 One-Member-One-Vote</h3>
              <p>
                Every verified identity receives exactly one vote regardless of capital holdings.
              </p>
              <p className="text-xs text-neutral-600">
                <strong>Advantage:</strong> Completely egalitarian; immune to whale dominance.<br />
                <strong>Disadvantage:</strong> Strictly requires Sybil resistance (e.g., Proof of Humanity, WorldID, or soulbound KYC tokens); capital providers may avoid participating without proportional risk representation.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.3 Quadratic Voting (Cost = Votes&sup2;)</h3>
              <p>
                In <strong>quadratic voting</strong>, the marginal cost of casting additional votes increases quadratically:
              </p>
              <div className="p-3 rounded-lg bg-neutral-100 text-xs font-mono">
                Formula: Cost = V^2 &hArr; Voting Power = &radic;Tokens
              </div>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-2">Desired Votes</th>
                      <th className="p-2">Token Cost Required (V&sup2;)</th>
                      <th className="p-2">Marginal Cost for Next Vote</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr><td className="p-2">1 vote</td><td className="p-2">1 token</td><td className="p-2">3 tokens</td></tr>
                    <tr><td className="p-2">2 votes</td><td className="p-2">4 tokens</td><td className="p-2">5 tokens</td></tr>
                    <tr><td className="p-2">3 votes</td><td className="p-2">9 tokens</td><td className="p-2">7 tokens</td></tr>
                    <tr><td className="p-2">4 votes</td><td className="p-2">16 tokens</td><td className="p-2">9 tokens</td></tr>
                    <tr><td className="p-2">5 votes</td><td className="p-2">25 tokens</td><td className="p-2">11 tokens</td></tr>
                    <tr><td className="p-2">10 votes</td><td className="p-2">100 tokens</td><td className="p-2">21 tokens</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-neutral-600">
                Quadratic voting allows members to express the <em>intensity</em> of their preference while drastically curtailing whale dominance. However, it strictly requires Sybil resistance, as an attacker with 100 tokens could split them into 100 wallets with 1 token each to gain 100 votes instead of 10 votes.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.4 Conviction Voting</h3>
              <p>
                A continuous voting mechanism where voting weight accumulates over time as long as a member leaves their tokens staked behind a proposal. Eliminates discrete proposal deadlines and prevents last-minute flash-loan attacks.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.5 Comparison of Voting Systems</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Mechanism</th>
                      <th className="p-3">Whale Resistance</th>
                      <th className="p-3">Sybil Resistance Req.</th>
                      <th className="p-3">Implementation Complexity</th>
                      <th className="p-3">Primary Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Token-Weighted</td>
                      <td className="p-3 text-red-600 font-bold">Low</td>
                      <td className="p-3 text-emerald-700">None (Capital bound)</td>
                      <td className="p-3">Low (OpenZeppelin standard)</td>
                      <td className="p-3">DeFi protocol parameter governance</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">One-Member-One-Vote</td>
                      <td className="p-3 text-emerald-700 font-bold">High</td>
                      <td className="p-3 text-red-600 font-bold">Mandatory</td>
                      <td className="p-3">High (Identity oracles)</td>
                      <td className="p-3">Social DAOs, co-ops, municipal voting</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Quadratic Voting</td>
                      <td className="p-3 text-emerald-700 font-bold">High</td>
                      <td className="p-3 text-red-600 font-bold">Mandatory</td>
                      <td className="p-3">Medium-High</td>
                      <td className="p-3">Gitcoin public goods grant allocations</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Conviction Voting</td>
                      <td className="p-3 text-emerald-700 font-bold">Medium</td>
                      <td className="p-3 text-emerald-700">None</td>
                      <td className="p-3">High (Continuous math)</td>
                      <td className="p-3">Commons Stack community budgeting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 7: On-Chain Voting */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 7</span>
              <span>•</span>
              <span>ON-CHAIN EXECUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              7. On-Chain Voting
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">7.1 What is On-Chain Voting?</h3>
              <p>
                In <strong>on-chain voting</strong>, every ballot is cast by sending an Ethereum transaction directly to the Governor smart contract. The vote is mined into a block, verifiable by any node, and stored immutably on the ledger.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">7.2 Architecture & Voting Methods</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  // Standard on-chain vote:<br />
                  function castVote(uint256 proposalId, uint8 support) external returns (uint256 balance);<br /><br />
                  // Vote with public textual justification:<br />
                  function castVoteWithReason(uint256 proposalId, uint8 support, string calldata reason) external returns (uint256 balance);<br /><br />
                  // Gasless off-chain meta-transaction submitted by a relayer:<br />
                  function castVoteBySig(uint256 proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s) external returns (uint256 balance);
                </code>
              </div>
              <p className="text-xs font-mono">
                Support options in OpenZeppelin <code>GovernorCountingSimple</code>:<br />
                <code>0 = Against</code> | <code>1 = For</code> | <code>2 = Abstain</code>
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">7.3 Trade-Offs of On-Chain Voting</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                  <div className="font-bold">Advantages</div>
                  <p>&bull; 100% Trustless and censorship-resistant.<br />&bull; Automatic binding execution through smart contract bytecode.<br />&bull; Zero reliance on external relayer infrastructure or multisig signers.</p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-1">
                  <div className="font-bold">Disadvantages</div>
                  <p>&bull; Gas fees must be paid for every vote (can cost $10-$50 on Ethereum mainnet during congestion).<br />&bull; Dampens retail participation, driving turnout down.<br />&bull; Public vote tallies can create herd bias during active voting.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 8: Off-Chain Voting */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 8</span>
              <span>•</span>
              <span>GASLESS SIGNATURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              8. Off-Chain Voting
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">8.1 What is Off-Chain Voting?</h3>
              <p>
                In <strong>off-chain voting</strong>, token holders do not send on-chain transactions. Instead, they sign an <strong>EIP-712 structured message</strong> with their private key using their Web3 wallet. These signatures are indexed by decentralized storage networks like IPFS and tallied off-chain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                  <div className="font-bold">Advantages</div>
                  <p>&bull; <strong>Zero Gas Fees:</strong> Voting is 100% free for all participants.<br />&bull; <strong>High Participation:</strong> Dramatically boosts community turnout.<br />&bull; <strong>Flexible Voting Strategies:</strong> Supports quadratic, weighted, or whitelist algorithms computed dynamically off-chain.</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1">
                  <div className="font-bold">Disadvantages</div>
                  <p>&bull; <strong>Non-Binding by Default:</strong> Signatures do not directly trigger smart contract bytecode.<br />&bull; Requires a trusted multisig (e.g. Safe) or an optimistic execution bridge (SafeSnap / Zodiac Reality) to enact outcomes on-chain.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 9: Snapshot Fundamentals */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 9</span>
              <span>•</span>
              <span>SNAPSHOT INTEGRATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              9. Snapshot Fundamentals
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">9.1 What is Snapshot?</h3>
              <p>
                <strong>Snapshot</strong> is the industry-standard off-chain decentralized governance platform. It allows DAOs to configure spaces linked to ENS domains, define custom voting strategies, and conduct gasless cryptographic polls.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="font-bold text-amber-900">Snapshot Spaces:</span> Tied to an ENS domain (e.g., <code>prepspaces.eth</code>). Stores admins, strategies, and proposal thresholds.
                </div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="font-bold text-amber-900">Voting Strategies:</span> JavaScript modules that read blockchain state at a specific snapshot block (e.g., <code>erc20-balance-of</code>, <code>erc20-votes</code>, <code>multichain</code>).
                </div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="font-bold text-amber-900">IPFS Pinning:</span> All proposals and vote signatures are permanently published to decentralized storage for public auditability.
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">9.2 Comparison: Snapshot vs. On-Chain Governor</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">Snapshot (Off-Chain)</th>
                      <th className="p-3">OpenZeppelin Governor (On-Chain)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Gas Cost to Vote</td>
                      <td className="p-3 text-emerald-700 font-bold">$0 (Free EIP-712 Signature)</td>
                      <td className="p-3 text-red-600 font-bold">Standard gas fees per transaction</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Execution Mechanism</td>
                      <td className="p-3">Optimistic oracle (SafeSnap) or Multisig Safe</td>
                      <td className="p-3 text-emerald-700 font-bold">Direct autonomous Timelock execution</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Security Model</td>
                      <td className="p-3">Signatures + IPFS integrity + oracle verification</td>
                      <td className="p-3 text-emerald-700 font-bold">Ethereum consensus & EVM state transition</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Turnout Profile</td>
                      <td className="p-3 text-emerald-700 font-bold">High (accessible to small retail holders)</td>
                      <td className="p-3">Moderate to Low (dominated by delegates & whales)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 10: Voting Power Calculation */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 10</span>
              <span>•</span>
              <span>VOTING POWER CALCULATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              10. Voting Power Calculation
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">10.1 Mathematical Formulas & Delegation</h3>
              <p>
                In an ERC20Votes token system, a user&apos;s active voting weight is determined by their <strong>delegated votes checkpointed at the proposal snapshot block</strong>:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  // Effective voting power at proposal snapshot:<br />
                  VP(account, timepoint) = token.getPastVotes(account, timepoint)<br /><br />
                  // If Bob holds 10,000 tokens and Alice delegates 40,000 tokens to Bob:<br />
                  VP(Bob) = 10,000 + 40,000 = 50,000 votes<br />
                  VP(Alice) = 0 votes (Delegated to Bob)
                </code>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950">
                <strong>Critical Rule:</strong> Simply owning an ERC20Votes token does <em>not</em> grant voting power until the token holder calls <code>delegate(account)</code>. To vote with your own tokens, you must <strong>self-delegate</strong>: <code>token.delegate(msg.sender)</code>!
              </div>
            </div>
          </div>
'''
