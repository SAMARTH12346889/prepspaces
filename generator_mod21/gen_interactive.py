# -*- coding: utf-8 -*-
"""
Interactive Simulators for Module 21:
1. Interactive Governor Proposal & Voting Lifecycle Simulator
2. Quadratic Voting vs. Token-Weighted Voting Engine
3. TimelockController Role Handover & Security Auditor
4. DAO Governance Attack & Defense Sandbox
"""

def generate_interactive_simulators():
    return '''
        {/* Interactive Simulators Section */}
        <section id="simulators" className="space-y-12">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>HANDS-ON PROTOCOL LABS & SIMULATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive DAO Governance & Voting Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Experiment with end-to-end proposal lifecycles, quadratic vs token-weighted voting, timelock sovereign role handovers, and flash-loan governance defense.
            </p>
          </div>

          {/* Simulator 1: Governor Proposal & Voting Lifecycle */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Governor Lifecycle & Quorum Simulator</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Walk through proposal creation, voting, quorum evaluation, timelock queue, and execution.</p>
              </div>
              <button
                type="button"
                onClick={resetGovernorSim}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Simulation
              </button>
            </div>

            {/* Stepper Status Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono">
              {[
                { step: "Created", label: "1. Proposed" },
                { step: "Voting", label: "2. Active Voting" },
                { step: "Succeeded", label: "3. Succeeded" },
                { step: "Queued", label: "4. Timelock Queue" },
                { step: "Executed", label: "5. Executed" }
              ].map((s, idx) => {
                const isActive = govSimState === s.step;
                const isPassed =
                  (s.step === "Created" && govSimState !== "Created") ||
                  (s.step === "Voting" && (govSimState === "Succeeded" || govSimState === "Queued" || govSimState === "Executed")) ||
                  (s.step === "Succeeded" && (govSimState === "Queued" || govSimState === "Executed")) ||
                  (s.step === "Queued" && govSimState === "Executed") ||
                  govSimState === "Executed";

                return (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isActive
                        ? "bg-amber-600 text-white border-amber-600 font-bold shadow-sm"
                        : isPassed
                        ? "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold"
                        : "bg-neutral-50 text-neutral-400 border-neutral-200"
                    }`}
                  >
                    {s.label}
                  </div>
                );
              })}
            </div>

            {/* Voting Controls for 4 Key Members */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-neutral-700">
                <span>Cast Member Votes (Total Supply = 1,000,000 PSG):</span>
                <span className="text-amber-700">Quorum Target: 40,000 (4%)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: "Alice", weight: 400000, key: "alice" },
                  { name: "Bob", weight: 250000, key: "bob" },
                  { name: "Charlie", weight: 200000, key: "charlie" },
                  { name: "David", weight: 100000, key: "david" }
                ].map((m) => (
                  <div key={m.key} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs font-mono">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-neutral-900">{m.name}</span>
                      <span className="text-[10px] text-neutral-500">{m.weight.toLocaleString()} PSG</span>
                    </div>
                    <div className="flex gap-1">
                      {[
                        { label: "For", val: 1, color: "bg-emerald-600 text-white" },
                        { label: "Against", val: 0, color: "bg-red-600 text-white" },
                        { label: "Abstain", val: 2, color: "bg-neutral-600 text-white" }
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          disabled={govSimState !== "Created" && govSimState !== "Voting"}
                          onClick={() => handleCastMemberVote(m.key, opt.val)}
                          className={`flex-1 py-1 rounded text-[11px] font-bold transition-all ${
                            memberVotes[m.key] === opt.val
                              ? opt.color
                              : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Tally & Quorum Analysis */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono">
                <div className="text-emerald-800 font-bold uppercase text-[10px]">For Votes (1)</div>
                <div className="text-lg font-bold text-emerald-950 mt-1">{tallyFor.toLocaleString()} PSG</div>
              </div>
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-mono">
                <div className="text-red-800 font-bold uppercase text-[10px]">Against Votes (0)</div>
                <div className="text-lg font-bold text-red-950 mt-1">{tallyAgainst.toLocaleString()} PSG</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono">
                <div className="text-neutral-600 font-bold uppercase text-[10px]">Abstain Votes (2)</div>
                <div className="text-lg font-bold text-neutral-900 mt-1">{tallyAbstain.toLocaleString()} PSG</div>
              </div>
              <div className={`p-3 rounded-xl border text-xs font-mono ${
                isQuorumReached ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-amber-50 border-amber-300 text-amber-950"
              }`}>
                <div className="font-bold uppercase text-[10px]">Quorum (For + Abstain)</div>
                <div className="text-lg font-bold mt-1">
                  {countedQuorumVotes.toLocaleString()} / 40,000
                </div>
                <div className="text-[10px] mt-0.5">
                  {isQuorumReached ? "QUORUM REACHED" : "Quorum Pending"}
                </div>
              </div>
            </div>

            {/* Lifecycle Execution Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {govSimState === "Voting" && (
                <button
                  type="button"
                  onClick={handleFinishVoting}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-mono font-bold transition-all"
                >
                  Close Voting Period (10 Blocks Elapsed)
                </button>
              )}

              {govSimState === "Succeeded" && (
                <button
                  type="button"
                  onClick={handleQueueProposal}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm"
                >
                  Queue in TimelockController (60s Delay)
                </button>
              )}

              {govSimState === "Queued" && (
                <button
                  type="button"
                  onClick={handleExecuteProposal}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm animate-pulse"
                >
                  Execute Proposal (Release 100 PSG from Treasury)
                </button>
              )}
            </div>

            {/* Treasury Balance Banner */}
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                Treasury Balance: <strong className="text-amber-400">{simTreasuryBalance.toLocaleString()} PSG</strong> (Initially 100,000 PSG)
              </div>
              <div>
                Recipient Balance: <strong className="text-emerald-400">{simRecipientBalance.toLocaleString()} PSG</strong>
              </div>
              <div className="text-neutral-400 text-[11px]">
                Owner: <code>TimelockController</code>
              </div>
            </div>
          </div>

          {/* Simulator 2: Quadratic Voting vs. Token-Weighted Voting Engine */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
              <h3 className="text-xl font-bold text-neutral-900">Quadratic Voting vs. Token-Weighted Voting Engine</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Model how Quadratic Voting (Cost = Votes^2) eliminates whale plutocracy and empowers community consensus.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Whale Token Credits (Votes Against)</span>
                    <span className="text-red-600">{whaleCredits.toLocaleString()} Credits</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="40000"
                    step="1000"
                    value={whaleCredits}
                    onChange={(e) => setWhaleCredits(Number(e.target.value))}
                    className="w-full accent-red-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Number of Community Contributors</span>
                    <span className="text-emerald-600">{communityCount} Members</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="10"
                    value={communityCount}
                    onChange={(e) => setCommunityCount(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Credits per Community Member (Votes For)</span>
                    <span className="text-emerald-600">{communityCreditsEach} Credits each</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="400"
                    step="10"
                    value={communityCreditsEach}
                    onChange={(e) => setCommunityCreditsEach(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Graphical Comparison Cards */}
              <div className="space-y-4">
                {/* Token-Weighted Result */}
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 font-mono text-xs">
                  <div className="flex justify-between font-bold text-neutral-900">
                    <span>1. Token-Weighted Voting (1 Credit = 1 Vote)</span>
                    <span className={twCommunityShare >= 50 ? "text-emerald-700" : "text-red-700"}>
                      {twCommunityShare >= 50 ? "Community Passes" : "Whale Vetoes"}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-emerald-600" style={{ width: `${twCommunityShare}%` }} />
                    <div className="h-full bg-red-600" style={{ width: `${100 - twCommunityShare}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500">
                    <span>Community: {twCommunityVotes.toLocaleString()} votes ({twCommunityShare.toFixed(1)}%)</span>
                    <span>Whale: {whaleCredits.toLocaleString()} votes ({(100 - twCommunityShare).toFixed(1)}%)</span>
                  </div>
                </div>

                {/* Quadratic Voting Result */}
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 space-y-2 font-mono text-xs">
                  <div className="flex justify-between font-bold text-purple-950">
                    <span>2. Quadratic Voting (Votes = &radic;Credits)</span>
                    <span className="text-emerald-700 font-bold">Community Dominates</span>
                  </div>
                  <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-emerald-600" style={{ width: `${quadCommunityShare}%` }} />
                    <div className="h-full bg-red-600" style={{ width: `${100 - quadCommunityShare}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-purple-900">
                    <span>Community: {Math.round(quadCommunityVotes).toLocaleString()} votes ({quadCommunityShare.toFixed(1)}%)</span>
                    <span>Whale: {Math.round(quadWhaleVotes).toLocaleString()} votes ({(100 - quadWhaleShare).toFixed(1)}%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 3: TimelockController Role Handover & Security Auditor */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
              <h3 className="text-xl font-bold text-neutral-900">TimelockController Role Handover & Security Auditor</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Step through the critical 4-stage role handover that removes deployer backdoors from governance.</p>
            </div>

            {/* Handover Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
              {[
                { stage: 0, title: "Stage 0: Post-Deploy", desc: "Deployer has all roles; Governor has none.", risk: "CRITICAL RISK" },
                { stage: 1, title: "Stage 1: Grant Roles", desc: "Governor granted PROPOSER & CANCELLER.", risk: "INCOMPLETE" },
                { stage: 2, title: "Stage 2: Revoke Roles", desc: "Deployer PROPOSER & CANCELLER revoked.", risk: "INCOMPLETE" },
                { stage: 3, title: "Stage 3: Renounce Admin", desc: "Deployer renounces DEFAULT_ADMIN.", risk: "SOVEREIGN & SECURE" }
              ].map((st) => (
                <button
                  key={st.stage}
                  type="button"
                  onClick={() => setHandoverStage(st.stage)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    handoverStage === st.stage
                      ? "bg-neutral-900 text-white border-neutral-900 font-bold shadow-sm"
                      : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-wider opacity-70">{st.title}</div>
                  <div className="mt-1 text-[11px] leading-tight">{st.desc}</div>
                  <div className={`mt-2 text-[10px] font-bold ${
                    st.stage === 3 ? "text-emerald-400" : "text-amber-400"
                  }`}>
                    {st.risk}
                  </div>
                </button>
              ))}
            </div>

            {/* Live Role Table for Active Stage */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Entity Address</th>
                    <th className="p-3">PROPOSER_ROLE</th>
                    <th className="p-3">CANCELLER_ROLE</th>
                    <th className="p-3">DEFAULT_ADMIN_ROLE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Deployer EOA</td>
                    <td className="p-3">
                      {handoverStage < 2 ? (
                        <span className="text-red-700 font-bold">YES (Backdoor!)</span>
                      ) : (
                        <span className="text-emerald-700 font-bold">REVOKED</span>
                      )}
                    </td>
                    <td className="p-3">
                      {handoverStage < 2 ? (
                        <span className="text-red-700 font-bold">YES (Backdoor!)</span>
                      ) : (
                        <span className="text-emerald-700 font-bold">REVOKED</span>
                      )}
                    </td>
                    <td className="p-3">
                      {handoverStage < 3 ? (
                        <span className="text-red-700 font-bold">YES (Admin Backdoor!)</span>
                      ) : (
                        <span className="text-emerald-700 font-bold">RENOUNCED (0x0)</span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">MyGovernor Contract</td>
                    <td className="p-3">
                      {handoverStage >= 1 ? (
                        <span className="text-emerald-700 font-bold">GRANTED</span>
                      ) : (
                        <span className="text-neutral-400">Not granted</span>
                      )}
                    </td>
                    <td className="p-3">
                      {handoverStage >= 1 ? (
                        <span className="text-emerald-700 font-bold">GRANTED</span>
                      ) : (
                        <span className="text-neutral-400">Not granted</span>
                      )}
                    </td>
                    <td className="p-3 font-mono text-neutral-400">None (Separation of concerns)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Simulator 4: DAO Governance Attack & Defense Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">DAO Governance Attack & Defense Sandbox</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Simulate flash loan voting manipulation, trojan horse calldata payloads, and low turnout attacks.</p>
              </div>
              <div className="flex items-center gap-2">
                {["flashloan", "trojan", "turnout"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setGovAttackMode(mode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      govAttackMode === mode
                        ? "bg-neutral-900 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {mode === "flashloan" ? "Flash Loan Attack" : mode === "trojan" ? "Trojan Calldata" : "Low Turnout Takeover"}
                  </button>
                ))}
              </div>
            </div>

            {govAttackMode === "flashloan" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950 leading-relaxed">
                  <strong>Attack Scenario:</strong> Attacker borrows 5,000,000 governance tokens via an uncollateralized flash loan from Aave, creates a proposal to drain the treasury, votes with 5M tokens, and repays the loan within the same block.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-red-950 flex items-center justify-between">
                      <span>Vulnerable: token.balanceOf(voter)</span>
                      <span className="px-2 py-0.5 rounded bg-red-200 text-red-900 font-bold">DRAINED ($182M)</span>
                    </div>
                    <div className="text-neutral-700">Contract reads current block balance.</div>
                    <div className="text-red-700 font-bold">Attacker Voting Power: 5,000,000 Votes</div>
                    <div className="text-[11px] text-red-800">The flash loan passes the proposal instantly. Attacker drains treasury and repays flash loan in same tx! (Beanstalk exploit pattern).</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-emerald-950 flex items-center justify-between">
                      <span>Secure: ERC20Votes Historical Checkpoints</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold">PROTECTED</span>
                    </div>
                    <div className="text-neutral-700">Contract queries <code>getPastVotes(voter, proposalSnapshot)</code>.</div>
                    <div className="text-emerald-700 font-bold">Attacker Voting Power: 0 Votes</div>
                    <div className="text-[11px] text-emerald-800">At the proposal's snapshot block, attacker had 0 tokens. The flash loan grants 0 historical voting weight. Attack completely neutralized!</div>
                  </div>
                </div>
              </div>
            )}

            {govAttackMode === "trojan" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs font-mono text-purple-950 leading-relaxed">
                  <strong>Trojan Horse Payload:</strong> Attacker submits proposal titled "Community Grant: Fund Developer Documentation". However, the encoded calldata target is <code>DAOTreasury</code> with an unauthorized transfer of 100,000 PSG.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                    <div className="font-bold text-red-950">Naive UI: Display Markdown Only</div>
                    <div className="text-neutral-700">Voters see: "Grant to fund docs ($1,000)".</div>
                    <div className="text-red-700 font-bold">Community Votes: FOR (Deceived)</div>
                    <div className="text-[11px] text-red-800">Approved proposal executes raw calldata, transferring 100,000 PSG to attacker instead of 1,000 PSG!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="font-bold text-emerald-950">Secure UI: Decoded Calldata Inspector</div>
                    <div className="text-neutral-700">Decodes <code>calldatas[0]</code> against ABI:</div>
                    <code className="text-red-700 font-bold block bg-white p-2 rounded border border-emerald-300">
                      release(0xAttacker..., 100000 ether)
                    </code>
                    <div className="text-[11px] text-emerald-800">Voters spot payload mismatch! Proposal overwhelmingly rejected with 100% AGAINST votes.</div>
                  </div>
                </div>
              </div>
            )}

            {govAttackMode === "turnout" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-950 leading-relaxed">
                  <strong>Low-Turnout Minority Takeover:</strong> During a holiday period, normal voter turnout drops to only 15,000 votes. An attacker controlling 35,000 votes (3.5% of total supply) submits a malicious proposal.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                    <div className="font-bold text-red-950">Vulnerable: Static Low Quorum (2% = 20,000)</div>
                    <div className="text-neutral-700">Attacker votes 35,000 FOR.</div>
                    <div className="text-red-700 font-bold">Outcome: Quorum Reached (35k &gt; 20k)</div>
                    <div className="text-[11px] text-red-800">With 0 community members active, proposal passes 35,000 to 0 and takes over the DAO!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="font-bold text-emerald-950">Secure: 48-Hour Timelock + Security Council</div>
                    <div className="text-neutral-700">Proposal is scheduled in TimelockController.</div>
                    <div className="text-emerald-700 font-bold">Outcome: Emergency Veto (Cancelled)</div>
                    <div className="text-[11px] text-emerald-800">The 4-of-8 Security Council detects the low-turnout anomaly during the 48-hour delay and invokes <code>timelock.cancel()</code>!</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
'''
