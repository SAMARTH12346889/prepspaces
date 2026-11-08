# -*- coding: utf-8 -*-
"""
Module 21 Theory Section: Parts 11 through 20
Comprehensive, university-grade, zero information loss.
"""

def get_theory_part2():
    return '''
          {/* Part 11: Delegated Voting */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 11</span>
              <span>•</span>
              <span>LIQUID DEMOCRACY & DELEGATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              11. Delegated Voting
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">11.1 Understanding Delegation</h3>
              <p>
                <strong>Delegation</strong> (often called liquid democracy) allows a token holder to assign their voting weight to another address (a delegate) without giving up custody or ownership of their underlying tokens.
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Alice: 100,000 PSG Tokens]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (Calls `token.delegate(Bob)`)<br />
                  [Bob: Delegate Representative]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Exercises 100,000 votes in DAO proposals<br />
                  &nbsp;&nbsp;&nbsp;&bull; Alice retains 100% custody of PSG tokens and can transfer or undelegate at any time!
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">11.2 Delegation Mechanics in Solidity</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  // Assign all voting weight to a chosen delegate:<br />
                  function delegate(address delegatee) public virtual;<br /><br />
                  // Gasless delegation via EIP-712 cryptographic signature:<br />
                  function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public virtual;<br /><br />
                  // View current delegate of an account:<br />
                  function delegates(address account) public view virtual returns (address);
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">11.3 Advantages and Strategic Risks of Delegation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                  <div className="font-bold">Advantages</div>
                  <p>&bull; Solves voter apathy: token holders delegate to subject-matter experts.<br />&bull; Quorum is reached consistently on complex technical proposals.<br />&bull; Retains full token liquidity: tokens never leave the holder&apos;s wallet.</p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-1">
                  <div className="font-bold">Risks & Centralization</div>
                  <p>&bull; Delegate capture: A small cartel of 5-10 professional delegates control the protocol.<br />&bull; Passive delegator apathy: Holders forget who they delegated to years ago.<br />&bull; Vote bribing: Delegates may be bribed by external interests.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 12: Quorum Requirements */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 12</span>
              <span>•</span>
              <span>QUORUM MECHANICS & MATHEMATICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              12. Quorum Requirements
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">12.1 What is Quorum?</h3>
              <p>
                <strong>Quorum</strong> is the minimum amount of voting power that must participate in a proposal for the election result to be legally valid and enforceable by the Governor contract.
              </p>
              <div className="p-4 rounded-xl bg-neutral-100 font-mono text-xs text-neutral-800 space-y-1">
                <div>Formula: Quorum = (Total Supply &times; Quorum Fraction) / 100</div>
                <div>Example: 1,000,000 total tokens with 4% quorum requirement = 40,000 votes required.</div>
              </div>

              {/* Critical OpenZeppelin Counting Simple Quorum Nuance */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 text-neutral-900 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold font-mono text-xs uppercase tracking-wider">
                  <span>Crucial Smart Contract Nuance: OpenZeppelin GovernorCountingSimple Quorum Formula</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  In OpenZeppelin&apos;s standard <code>GovernorCountingSimple</code> implementation:
                </p>
                <div className="p-3 bg-white rounded-xl border border-amber-300 font-mono text-xs text-neutral-900 space-y-1">
                  <div><strong>Quorum Reached Condition:</strong> <code>(votesFor + votesAbstain) &gt;= quorum(snapshotTimepoint)</code></div>
                  <div className="text-red-700 font-bold">NOTE: <code>votesAgainst</code> DO NOT COUNT toward reaching quorum!</div>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  <strong>Why was this designed?</strong> If &quot;Against&quot; votes counted toward quorum, opposing a proposal would help the proposal reach its validity threshold. Token holders wishing to defeat a proposal with low turnout might inadvertently validate it by voting &quot;Against&quot;. Hence, only &quot;For&quot; and &quot;Abstain&quot; votes establish the quorum baseline.
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">12.2 Scenario Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-2">
                  <div className="font-bold text-sm">Scenario A: Quorum Fails (Defeated)</div>
                  <p>Quorum Required: 100,000 votes<br />
                  For: 75,000 | Against: 15,000 | Abstain: 10,000<br />
                  Quorum Votes (For + Abstain) = 75k + 10k = 85,000.<br />
                  Result: 85,000 &lt; 100,000 &rarr; <strong>Defeated due to Lack of Quorum!</strong></p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
                  <div className="font-bold text-sm">Scenario B: Quorum Satisfied (Succeeded)</div>
                  <p>Quorum Required: 100,000 votes<br />
                  For: 90,000 | Against: 5,000 | Abstain: 10,000<br />
                  Quorum Votes (For + Abstain) = 90k + 10k = 100,000.<br />
                  For (90k) &gt; Against (5k) &rarr; <strong>Succeeded &amp; Ready to Queue!</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 13: Proposal Thresholds */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 13</span>
              <span>•</span>
              <span>PROPOSAL THRESHOLDS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              13. Proposal Thresholds
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">13.1 Anti-Spam Gatekeeping</h3>
              <p>
                The <strong>proposal threshold</strong> is the minimum voting weight an account must hold (directly or through delegation) at the time of calling <code>propose()</code>.
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Governance Parameter</th>
                      <th className="p-3">Proposal Threshold</th>
                      <th className="p-3">Quorum Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Purpose</td>
                      <td className="p-3">Prevents proposal spam & griefing attacks</td>
                      <td className="p-3">Ensures broad community legitimacy for decisions</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Evaluated At</td>
                      <td className="p-3">The exact block <code>propose()</code> is executed</td>
                      <td className="p-3">The conclusion of the active voting period</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Typical Production Range</td>
                      <td className="p-3">0.1% to 1.0% of total voting supply</td>
                      <td className="p-3">4.0% to 10.0% of total voting supply</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 14: Timelock Contracts */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 14</span>
              <span>•</span>
              <span>TIMELOCK CONTROLLER & SAFETY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              14. Timelock Contracts
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">14.1 What is a Timelock?</h3>
              <p>
                A <strong>timelock contract</strong> introduces an enforced delay (e.g., 24 to 72 hours) between the moment a governance proposal successfully passes and the moment its low-level bytecode can be executed on-chain.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">14.2 The Four Critical Roles of OpenZeppelin TimelockController</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Role Identifier</th>
                      <th className="p-3">Designated Entity</th>
                      <th className="p-3">Capability & Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">PROPOSER_ROLE</td>
                      <td className="p-3 text-amber-900 font-bold">MyGovernor Contract</td>
                      <td className="p-3">Can schedule and queue approved proposals into the timelock.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">EXECUTOR_ROLE</td>
                      <td className="p-3 text-emerald-800 font-bold">address(0) [Public Open]</td>
                      <td className="p-3">Allows anyone in the world to execute a proposal once minDelay elapses.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">CANCELLER_ROLE</td>
                      <td className="p-3 text-red-800 font-bold">Governor + Security Council</td>
                      <td className="p-3">Can cancel queued malicious proposals before execution.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">DEFAULT_ADMIN_ROLE</td>
                      <td className="p-3 text-neutral-900 font-bold">TimelockController itself</td>
                      <td className="p-3">Deployer MUST renounce; only the timelock itself can grant/revoke roles!</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">14.3 Why Timelocks Save Protocols (Rage-Quit Protection)</h3>
              <p>
                If an attacker somehow acquires enough voting power to pass a malicious proposal (such as draining the treasury), the 48-hour timelock provides an indispensable buffer:
              </p>
              <ul className="list-disc pl-5 text-xs font-mono space-y-1 text-neutral-700">
                <li><strong>Exit Window:</strong> Protocol users and liquidity providers can withdraw their funds from lending pools and AMMs before the malicious code executes.</li>
                <li><strong>Emergency Veto:</strong> The Security Council or multisig canceller can review the bytecode and call <code>cancel()</code> to neutralize the attack.</li>
              </ul>
            </div>
          </div>

          {/* Part 15: Treasury Management */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 15</span>
              <span>•</span>
              <span>PROGRAMMABLE TREASURY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              15. Treasury Management
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">15.1 What is a DAO Treasury?</h3>
              <p>
                A <strong>DAO treasury</strong> is a dedicated vault smart contract that holds digital assets (native ETH, ERC-20 stablecoins, governance tokens, and LP tokens). Its spending functions are strictly restricted so that only the Timelock contract can unlock funds.
              </p>
              <p className="text-xs font-mono">
                Eight common uses for DAO treasury funds:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">1. Core developer grants</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">2. Smart contract security audits</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">3. Bug bounty rewards</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">4. Protocol-owned liquidity</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">5. Operational contributor compensation</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">6. Marketing & education</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">7. RPC & indexing infrastructure</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">8. Token buybacks & burns</div>
              </div>
            </div>
          </div>

          {/* Part 16: Multisignature Wallets */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 16</span>
              <span>•</span>
              <span>MULTISIGNATURE SECURITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              16. Multisignature Wallets
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">16.1 M-of-N Cryptographic Security</h3>
              <p>
                A <strong>multisignature wallet</strong> (such as Safe, formerly Gnosis Safe) requires <code>M</code> valid signatures from <code>N</code> authorized signer addresses before executing any transaction.
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [3-of-5 Multisig Configuration]:<br />
                  Signers: Alice, Bob, Charlie, David, Eve (N = 5)<br />
                  Threshold: 3 valid signatures required (M = 3)<br />
                  Transaction: Send 10,000 USDC to security audit firm<br />
                  Flow: Alice creates tx &rarr; Bob confirms &rarr; Charlie confirms &rarr; 3 signatures reached &rarr; Safe executes transaction!
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">16.2 Comparison: Multisig vs. DAO On-Chain Voting</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Attribute</th>
                      <th className="p-3">Multisignature Wallet (Safe)</th>
                      <th className="p-3">DAO On-Chain Voting (Governor)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Execution Speed</td>
                      <td className="p-3 text-emerald-700 font-bold">Fast (Minutes to hours)</td>
                      <td className="p-3">Slow (5-14 days including delay and timelock)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Gas Cost</td>
                      <td className="p-3 text-emerald-700 font-bold">Low (M on-chain signature executions)</td>
                      <td className="p-3">High (Hundreds of individual voter transactions)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Decentralization</td>
                      <td className="p-3 text-red-600 font-bold">Low (Concentrated among M signers)</td>
                      <td className="p-3 text-emerald-700 font-bold">High (Open to all token holders)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Ideal Use Case</td>
                      <td className="p-3">Operational expenses, emergency response</td>
                      <td className="p-3">Protocol upgrades, huge grants, monetary policy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 17: DAO Treasury Security */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 17</span>
              <span>•</span>
              <span>TREASURY DEFENSE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              17. DAO Treasury Security
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.1 Nine Treasury Security Controls</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Security Control</th>
                      <th className="p-3">Defensive Purpose</th>
                      <th className="p-3">Implementation Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr><td className="p-3 font-bold">1. Mandatory Timelocks</td><td className="p-3">Stops instant malicious treasury drainage</td><td className="p-3">MinDelay = 48-72 hours</td></tr>
                    <tr><td className="p-3 font-bold">2. Spending Limits & Caps</td><td className="p-3">Restricts max fund outflow per epoch</td><td className="p-3">Periodic rolling quota contracts</td></tr>
                    <tr><td className="p-3 font-bold">3. Multi-Tier Treasury</td><td className="p-3">Separates operational petty cash from main vault</td><td className="p-3">SubDAO multisigs funded in tranches</td></tr>
                    <tr><td className="p-3 font-bold">4. Calldata Decoders</td><td className="p-3">Prevents disguised malicious contract execution</td><td className="p-3">Interface simulation & verification bots</td></tr>
                    <tr><td className="p-3 font-bold">5. Security Council Veto</td><td className="p-3">Rapid cancel capability for malicious proposals</td><td className="p-3">CANCELLER_ROLE assigned to 4-of-8 multisig</td></tr>
                    <tr><td className="p-3 font-bold">6. Smart Contract Audits</td><td className="p-3">Catches reentrancy and logic vulnerabilities</td><td className="p-3">Independent audits + formal verification</td></tr>
                    <tr><td className="p-3 font-bold">7. Dynamic Quorum</td><td className="p-3">Requires higher quorum for larger fund requests</td><td className="p-3">Sliding scale based on spending size</td></tr>
                    <tr><td className="p-3 font-bold">8. SafeERC20 Protection</td><td className="p-3">Prevents reverts on non-standard ERC-20 tokens</td><td className="p-3">OpenZeppelin SafeERC20 library wrapper</td></tr>
                    <tr><td className="p-3 font-bold">9. Automated Circuit Breakers</td><td className="p-3">Pauses treasury on sudden balance outflows</td><td className="p-3">Chainlink automation monitoring net outflows</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 18: Governance Attacks */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 18</span>
              <span>•</span>
              <span>EXPLOIT VECTORS & ATTACK TAXONOMY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              18. Governance Attacks
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                Decentralized governance systems introduce a vast attack surface where economic capital, smart contract logic, and social engineering intersect:
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-2">18.1 Flash-Loan Governance Attacks</h3>
              <p>
                An attacker borrows millions of dollars in governance tokens via an uncollateralized flash loan, votes on a proposal or creates one, passes a malicious execution to drain the treasury, and repays the loan in the very same block.
              </p>
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-mono">
                <strong>Defense:</strong> Checkpointed voting power via <code>ERC20Votes</code> and a mandatory <code>votingDelay &gt;= 1 block</code>. By recording voting power at a historical block, tokens acquired in the current block have zero voting power!
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">18.2 Governance Takeover & Economic Exploit (The Beanstalk Model)</h3>
              <p>
                If a DAO treasury holds $50 million in USDC, but the total market cap of the governance token required to reach quorum is only $15 million, an attacker can purchase enough tokens on secondary DEXs to pass a malicious proposal that extracts the treasury.
              </p>
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-mono">
                <strong>Defense:</strong> Timelocks with 48h review windows, rage-quit mechanisms, and security councils equipped with cancel-only powers.
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">18.3 Trojan Horse Calldata Attacks</h3>
              <p>
                A proposal description claims to &quot;Update protocol staking parameters&quot;, but the encoded <code>calldatas</code> secretly invoke <code>transferOwnership()</code> to transfer protocol control to an attacker contract.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">18.4 Governance Attack Comparison Matrix</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Attack Vector</th>
                      <th className="p-3">Vulnerability Exploited</th>
                      <th className="p-3">Real-World Precedent</th>
                      <th className="p-3">Defensive Countermeasure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-red-700">Flash-Loan Attack</td>
                      <td className="p-3">Instantaneous token balance voting</td>
                      <td className="p-3">Beanstalk Farms ($182M exploit)</td>
                      <td className="p-3">ERC20Votes historical checkpoints + voting delay</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-red-700">Governance Takeover</td>
                      <td className="p-3">Treasury value &gt; Quorum token market cap</td>
                      <td className="p-3">Build Finance DAO takeover</td>
                      <td className="p-3">Timelock rage-quit window + Emergency Veto</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-red-700">Trojan Calldata</td>
                      <td className="p-3">Opaque hex calldata in proposal</td>
                      <td className="p-3">Tornado Cash governance takeover</td>
                      <td className="p-3">Calldata simulation & human-readable decoders</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-red-700">Low-Turnout Takeover</td>
                      <td className="p-3">Low participation during holidays</td>
                      <td className="p-3">Multiple DeFi lending forks</td>
                      <td className="p-3">Dynamic quorum & minimum review timeframes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-red-700">Timelock Bypass</td>
                      <td className="p-3">Flawed permission checks on target</td>
                      <td className="p-3">Compound Proposal 082 bug</td>
                      <td className="p-3">Formal verification of access control modifiers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 19: Governance Manipulation & Defensive Mechanisms */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19</span>
              <span>•</span>
              <span>DEFENSIVE ARCHITECTURE & SECURITY COUNCILS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19. Governance Manipulation & Defensive Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">19.1 The Role of Security Councils (ENS 4-of-8 Precedent)</h3>
              <p>
                To prevent governance capture while avoiding centralized control, leading protocols deploy a <strong>Security Council</strong>:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [DAO Community] &rarr; Elects 8 Reputable Security Experts<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Security Council assigned: CANCELLER_ROLE in TimelockController<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Multisig Threshold: 4-of-8 signatures required<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Restrictive Power: The Council CANNOT create proposals or execute transfers; they can ONLY VETO (cancel) queued malicious proposals during the timelock review window!
                </code>
              </div>
            </div>
          </div>

          {/* Part 20: DAO Legal and Organizational Considerations */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 20</span>
              <span>•</span>
              <span>LEGAL WRAPPERS & TAX LIABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              20. DAO Legal and Organizational Considerations
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">20.1 Are DAOs Legally Recognized Organizations?</h3>
              <p>
                By default, under general corporate law in most jurisdictions (including the United States and the United Kingdom), an unincorporated group of people cooperating for profit is deemed a <strong>General Partnership</strong>.
              </p>
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-950 space-y-2">
                <div className="font-bold uppercase tracking-wider">The Catastrophic General Partnership Risk:</div>
                <p>
                  In a general partnership, <strong>all partners bear joint and several personal liability</strong>. If a DAO is sued or suffers a exploit resulting in damages, every individual token holder who voted could theoretically have their personal personal bank accounts and assets seized to satisfy the legal judgment (as demonstrated in the CFTC v. Ooki DAO ruling).
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">20.2 Legal Wrapper Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">1. DAO LLC (Wyoming, Marshall Islands, Tennessee)</div>
                  <p className="text-neutral-600">Shields individual members with limited liability; recognizes smart contracts in articles of organization.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">2. Foundation Company (Cayman Islands, Panama, Switzerland)</div>
                  <p className="text-neutral-600">Orphan foundation with no shareholders; exists exclusively to serve the purpose of stewarding protocol development.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">3. UNA (Unincorporated Nonprofit Association)</div>
                  <p className="text-neutral-600">Offers limited liability in several US states without complex corporate registration for non-profit governance.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">4. Cooperative (LCA / Swiss Verein)</div>
                  <p className="text-neutral-600">Aligns perfectly with democratic one-member-one-vote structures and member revenue sharing.</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">20.3 Eight Core Governance Policies</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Policy Framework</th>
                      <th className="p-3">Core Protective Objective</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr><td className="p-3 font-bold">1. Code of Conduct</td><td className="p-3">Community behavior standards and conflict resolution</td></tr>
                    <tr><td className="p-3 font-bold">2. Conflict of Interest Policy</td><td className="p-3">Mandates disclosure when voting on proposals funding related parties</td></tr>
                    <tr><td className="p-3 font-bold">3. Contributor Agreement</td><td className="p-3">Assigns IP created by grant recipients to the open-source commons</td></tr>
                    <tr><td className="p-3 font-bold">4. Security Council Charter</td><td className="p-3">Codifies strictly when and how emergency vetoes may be deployed</td></tr>
                    <tr><td className="p-3 font-bold">5. Treasury Management Policy</td><td className="p-3">Defines stablecoin diversification rules and low-risk yields</td></tr>
                    <tr><td className="p-3 font-bold">6. Emergency Response Plan</td><td className="p-3">Outlines communication channels and pause powers during live exploits</td></tr>
                    <tr><td className="p-3 font-bold">7. Contributor Compensation Policy</td><td className="p-3">Standardizes hourly/monthly rates for bounty hunters and core dev teams</td></tr>
                    <tr><td className="p-3 font-bold">8. Privacy & Data Handling Policy</td><td className="p-3">Complies with GDPR and data regulations for off-chain voting telemetry</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">20.4 Legal Landscape for Blockchain Projects in India</h3>
              <p>
                For developers and Web3 founders in India, DAO operations interface with specific statutory provisions:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-white p-4 rounded-xl border border-neutral-200">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>VDA Tax Regime:</strong> 30% flat tax on virtual digital asset gains under Section 115BBH; no deduction allowed except cost of acquisition.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>TDS Mandate:</strong> 1% TDS under Section 194S on all token transfers and DEX trades above prescribed thresholds.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Lack of Formal DAO Wrapper:</strong> Indian Companies Act 2013 has no native DAO recognition; founders establish offshore foundation wrappers (e.g., Dubai DIFC, Cayman) while operating Indian development devco entities.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>FIU-IND Compliance:</strong> Web3 entities serving Indian users must adhere to PMLA (Prevention of Money Laundering Act) and FIU reporting guidelines.</li>
              </ul>
            </div>
          </div>
'''
