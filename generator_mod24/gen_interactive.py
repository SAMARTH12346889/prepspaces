# -*- coding: utf-8 -*-
"""
Interactive Simulators Generator for Module 24 — Final Blockchain Capstone Project
Generates JSX for 4 interactive workbenches:
1. VoteChain Full-Lifecycle Simulator (Blueprint A)
2. DeFi Lending Risk & Health Factor Calculator (Blueprint D)
3. NFT Marketplace Escrow & Royalty Settlement Simulator (Blueprint B)
4. Supply Chain Provenance State Machine & QR Tracker (Blueprint C)
"""

def generate_interactive_simulators():
    return r'''
      <div className="space-y-12">
        {/* Header / Intro */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4">
            Interactive Capstone Engineering Workbenches
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-3">
            Production DApp Execution & State Machines
          </h2>
          <p className="text-neutral-600 leading-relaxed max-w-3xl">
            Test and simulate the complete decentralized state machines of all four capstone blueprints: VoteChain ballot conservation and election lifecycle, DeFi collateralization and Chainlink health factor risk modeling, NFT marketplace royalty settlement escrow, and multi-party supply chain provenance tracking.
          </p>
        </div>

        {/* WORKBENCH 1: VoteChain Full-Lifecycle Simulator */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Workbench 1 of 4 · Blueprint A</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">VoteChain Ballot Conservation & Lifecycle Simulator</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Step through election initialization, candidate registration, eligible ballot casting, duplicate vote prevention, and mathematical invariant verification.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={resetVoteChainSim}
                className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
              >
                Reset Election
              </button>
            </div>
          </div>

          {/* Election Status Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Election State</div>
              <div className="text-base font-bold text-orange-600 font-mono mt-1 uppercase">
                {voteElectionState}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Enforced by state machine</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Total Ballots Cast</div>
              <div className="text-base font-bold text-neutral-900 font-mono mt-1">
                {voteTotalBallots} / {voteRegisteredVoters.length}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">1-address-1-vote mapping</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Ballot Conservation Invariant</div>
              <div className="text-base font-bold text-emerald-600 font-mono mt-1">
                {voteInvariantVerified ? "VERIFIED (∑ Votes = Total)" : "UNVERIFIED"}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Mathematical proof check</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Active Voter Wallet</div>
              <div className="text-xs font-bold text-neutral-800 font-mono mt-1 truncate">
                {activeVoterAddress}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                {hasActiveVoted ? "Status: Already Voted" : "Status: Eligible to Vote"}
              </div>
            </div>
          </div>

          {/* Election Controls & Voting Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Candidate List */}
            <div className="md:col-span-2 space-y-3">
              <div className="text-xs font-bold text-neutral-900 uppercase font-mono tracking-wider">
                Official Candidates & Live Tallies
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {voteCandidates.map((cand) => (
                  <div
                    key={cand.id}
                    className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-orange-300 transition flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-neutral-900">{cand.name}</div>
                      <div className="text-[11px] text-neutral-500 font-mono">CID: {cand.cid}</div>
                      <div className="text-lg font-extrabold text-orange-600 font-mono mt-1">
                        {cand.votes} votes
                      </div>
                    </div>
                    <button
                      onClick={() => castBallot(cand.id)}
                      disabled={voteElectionState !== "ACTIVE" || hasActiveVoted}
                      className="px-3 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-200 disabled:text-neutral-400 text-white rounded-lg text-xs font-bold transition whitespace-nowrap shadow-sm"
                    >
                      Cast Ballot
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin Controls */}
            <div className="p-4 rounded-xl border border-neutral-200 bg-[#f6f4ee] space-y-3">
              <div className="text-xs font-bold text-neutral-900 uppercase font-mono tracking-wider">
                Election Administration
              </div>
              <div className="space-y-2 text-xs">
                {voteElectionState === "DRAFT" && (
                  <button
                    onClick={startElection}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition"
                  >
                    Open Election (DRAFT &rarr; ACTIVE)
                  </button>
                )}
                {voteElectionState === "ACTIVE" && (
                  <button
                    onClick={closeElection}
                    className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition"
                  >
                    Close Election (ACTIVE &rarr; CLOSED)
                  </button>
                )}
                {voteElectionState === "CLOSED" && (
                  <button
                    onClick={finalizeElection}
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition"
                  >
                    Publish Verified Results (FINALIZED)
                  </button>
                )}

                <div className="pt-2 border-t border-neutral-300">
                  <label className="block text-[11px] font-bold text-neutral-700 mb-1">
                    Switch Active Test Voter Address:
                  </label>
                  <select
                    value={activeVoterAddress}
                    onChange={(e) => setActiveVoterAddress(e.target.value)}
                    className="w-full px-2 py-1.5 border border-neutral-300 rounded text-xs font-mono bg-white"
                  >
                    {voteRegisteredVoters.map((addr, i) => (
                      <option key={addr} value={addr}>
                        Voter #{i + 1} ({addr.slice(0, 8)}...{addr.slice(-4)})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Event Log Output */}
          <div className="bg-neutral-900 text-neutral-300 rounded-xl p-4 font-mono text-xs">
            <div className="text-neutral-500 uppercase text-[10px] tracking-wider mb-2 flex items-center justify-between">
              <span>VoteChain Smart Contract Event Logs (`emit VoteCast`, `emit StateChanged`)</span>
              <button onClick={() => setVoteLogs([])} className="text-neutral-500 hover:text-neutral-300 text-[10px]">
                Clear
              </button>
            </div>
            <div className="space-y-1.5 max-h-32 overflow-y-auto">
              {voteLogs.length === 0 ? (
                <div className="text-neutral-600 italic">No events emitted yet. Execute an operation above.</div>
              ) : (
                voteLogs.map((log, idx) => (
                  <div key={idx} className="text-[11px] flex items-start gap-2">
                    <span className="text-neutral-500">{log.time}</span>
                    <span className={log.type === "error" ? "text-rose-400" : log.type === "warn" ? "text-amber-400" : "text-emerald-400"}>
                      {log.msg}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* WORKBENCH 2: DeFi Lending Risk & Health Factor Calculator */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Workbench 2 of 4 · Blueprint D</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">DeFi Lending Risk & Chainlink Health Factor Engine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Simulate real-time collateralization ratios, Chainlink oracle price fluctuations, and health factor liquidation triggers.
              </p>
            </div>
            <button
              onClick={() => {
                setDefiEthPrice(3200);
                setDefiCollateralEth(5.0);
                setDefiBorrowedUsdc(10000);
              }}
              className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
            >
              Reset Baseline
            </button>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Chainlink ETH Feed</div>
              <div className="text-lg font-bold text-neutral-900 font-mono mt-1">
                ${defiEthPrice.toLocaleString()} USD
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">Aggregated price feed</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Collateral Value</div>
              <div className="text-lg font-bold text-neutral-900 font-mono mt-1">
                ${(defiCollateralEth * defiEthPrice).toLocaleString()}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">{defiCollateralEth.toFixed(2)} ETH deposited</div>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
              <div className="text-[10px] font-mono uppercase text-neutral-500">Borrowed Debt</div>
              <div className="text-lg font-bold text-neutral-900 font-mono mt-1">
                ${defiBorrowedUsdc.toLocaleString()} USDC
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">LTV Limit: 75% max</div>
            </div>
            <div className={`p-4 rounded-xl border transition ${
              defiHealthFactor >= 1.2
                ? "border-emerald-300 bg-emerald-50/50"
                : defiHealthFactor >= 1.0
                ? "border-amber-300 bg-amber-50/50"
                : "border-rose-400 bg-rose-50 ring-2 ring-rose-400"
            }`}>
              <div className="text-[10px] font-mono uppercase text-neutral-500">Health Factor (HF)</div>
              <div className={`text-xl font-extrabold font-mono mt-1 ${
                defiHealthFactor >= 1.2 ? "text-emerald-700" : defiHealthFactor >= 1.0 ? "text-amber-700" : "text-rose-700"
              }`}>
                {defiHealthFactor.toFixed(2)}
              </div>
              <div className="text-[11px] font-bold mt-1">
                {defiHealthFactor >= 1.2
                  ? "POSITION HEALTHY"
                  : defiHealthFactor >= 1.0
                  ? "AT-RISK / NEAR LIQUIDATION"
                  : "ELIGIBLE FOR LIQUIDATION!"}
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] mb-6">
            <div>
              <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1">
                <span>Chainlink ETH Price Ticker</span>
                <span className="font-mono text-orange-600">${defiEthPrice}</span>
              </div>
              <input
                type="range"
                min="1200"
                max="5000"
                step="50"
                value={defiEthPrice}
                onChange={(e) => setDefiEthPrice(parseFloat(e.target.value))}
                className="w-full accent-orange-600"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>$1,200 (Crash)</span>
                <span>$3,200</span>
                <span>$5,000 (Bull)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1">
                <span>Collateral Deposited</span>
                <span className="font-mono text-orange-600">{defiCollateralEth.toFixed(1)} ETH</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="15.0"
                step="0.5"
                value={defiCollateralEth}
                onChange={(e) => setDefiCollateralEth(parseFloat(e.target.value))}
                className="w-full accent-orange-600"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>1.0 ETH</span>
                <span>7.5 ETH</span>
                <span>15.0 ETH</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-neutral-800 mb-1">
                <span>Borrowed USDC Debt</span>
                <span className="font-mono text-orange-600">${defiBorrowedUsdc.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="30000"
                step="500"
                value={defiBorrowedUsdc}
                onChange={(e) => setDefiBorrowedUsdc(parseFloat(e.target.value))}
                className="w-full accent-orange-600"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>$1,000</span>
                <span>$15,000</span>
                <span>$30,000</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#e7e3da] text-xs font-mono text-neutral-700 leading-relaxed">
            <span className="font-bold text-neutral-900">Health Factor Formula: </span>
            <code>HF = (Collateral Value &times; Liquidation Threshold) / Borrowed Value</code>
            <br />
            <code>HF = (${(defiCollateralEth * defiEthPrice).toLocaleString()} &times; 0.80) / ${defiBorrowedUsdc.toLocaleString()} = {defiHealthFactor.toFixed(3)}</code>
          </div>
        </div>

        {/* WORKBENCH 3: NFT Marketplace Escrow & Royalty Settlement */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Workbench 3 of 4 · Blueprint B</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">NFT Marketplace Escrow & ERC-2981 Royalty Engine</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Simulate listing, purchasing, and automatic 3-way payment distribution: creator royalties, platform fees, and net seller payout.
              </p>
            </div>
            <button
              onClick={() => {
                setNftPriceEth(4.0);
                setNftRoyaltyBps(750);
                setNftMarketFeeBps(250);
                setNftSold(false);
              }}
              className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
            >
              Reset Listing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* NFT Card Preview */}
            <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-orange-600 font-bold mb-1">ERC-721 #0421</div>
                <div className="text-base font-bold text-neutral-900">CyberNebula Genesis #42</div>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">IPFS: bafybeig...artwork</div>
                <div className="mt-4 p-3 rounded-lg bg-neutral-900 text-neutral-200 text-xs font-mono">
                  <div>List Price: <span className="text-orange-400 font-bold">{nftPriceEth.toFixed(2)} ETH</span></div>
                  <div>Royalty: <span className="text-emerald-400">{(nftRoyaltyBps / 100).toFixed(1)}% (ERC-2981)</span></div>
                  <div>Market Fee: <span className="text-indigo-400">{(nftMarketFeeBps / 100).toFixed(1)}%</span></div>
                </div>
              </div>

              <button
                onClick={() => setNftSold(true)}
                disabled={nftSold}
                className="mt-4 w-full py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-300 text-white font-bold rounded-xl text-xs transition shadow-sm"
              >
                {nftSold ? "NFT Sold (Escrow Released)" : `Execute Buy (${nftPriceEth.toFixed(2)} ETH)`}
              </button>
            </div>

            {/* Settlement Breakdown */}
            <div className="md:col-span-2 p-5 rounded-xl border border-neutral-200 bg-white space-y-4">
              <div className="text-xs font-bold text-neutral-900 uppercase font-mono tracking-wider">
                Automated Settlement Distribution (Atomic Smart Contract Split)
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-emerald-900">1. Original Creator Royalty (ERC-2981)</span>
                    <div className="text-[11px] text-emerald-700">Sent directly to artist wallet ({nftRoyaltyBps / 100}%)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-900">{((nftPriceEth * nftRoyaltyBps) / 10000).toFixed(3)} ETH</span>
                    <div className="text-[10px] text-emerald-600">${(((nftPriceEth * nftRoyaltyBps) / 10000) * 3200).toFixed(2)}</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-indigo-900">2. Marketplace Protocol Treasury Fee</span>
                    <div className="text-[11px] text-indigo-700">Retained by marketplace smart contract ({nftMarketFeeBps / 100}%)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-indigo-900">{((nftPriceEth * nftMarketFeeBps) / 10000).toFixed(3)} ETH</span>
                    <div className="text-[10px] text-indigo-600">${(((nftPriceEth * nftMarketFeeBps) / 10000) * 3200).toFixed(2)}</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-neutral-100 border border-neutral-300 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-neutral-900">3. Net Seller Proceeds</span>
                    <div className="text-[11px] text-neutral-600">Credited to seller wallet ({100 - (nftRoyaltyBps + nftMarketFeeBps) / 100}%)</div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-neutral-900">{(nftPriceEth - (nftPriceEth * (nftRoyaltyBps + nftMarketFeeBps)) / 10000).toFixed(3)} ETH</span>
                    <div className="text-[10px] text-neutral-600">${((nftPriceEth - (nftPriceEth * (nftRoyaltyBps + nftMarketFeeBps)) / 10000) * 3200).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WORKBENCH 4: Supply Chain Provenance State Machine */}
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-600 tracking-wider">Workbench 4 of 4 · Blueprint C</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Supply Chain State Machine & Custody Tracker</h3>
              <p className="text-sm text-neutral-500 mt-1">
                Follow an organic product batch through 6 custody stages with role-based cryptographic transition verification.
              </p>
            </div>
            <button
              onClick={() => setSupplyStage(0)}
              className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold transition"
            >
              Reset Batch
            </button>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-6">
            {[
              "1. Created",
              "2. Manufactured",
              "3. In-Transit",
              "4. Stored",
              "5. Delivered",
              "6. Verified"
            ].map((stepName, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-center transition ${
                  supplyStage === idx
                    ? "border-orange-500 bg-orange-50 font-bold text-orange-900 ring-2 ring-orange-300"
                    : supplyStage > idx
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : "border-neutral-200 bg-neutral-50 text-neutral-400"
                }`}
              >
                <div className="text-[10px] font-mono mb-1">State {idx}</div>
                <div className="text-xs">{stepName}</div>
              </div>
            ))}
          </div>

          {/* Active Custody Frame */}
          <div className="bg-neutral-900 text-neutral-200 rounded-xl p-5 mb-6 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3">
              <div>
                <span className="text-orange-400 font-bold uppercase text-[10px] tracking-wider">
                  Active Custodian Role:
                </span>
                <span className="text-white font-bold ml-2">{supplySteps[supplyStage].role}</span>
              </div>
              <div className="text-neutral-400 text-[11px]">
                IPFS Hash: <span className="text-emerald-400">{supplySteps[supplyStage].cid}</span>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-4">
              {supplySteps[supplyStage].desc}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setSupplyStage((prev) => Math.min(5, prev + 1))}
                disabled={supplyStage === 5}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
              >
                {supplyStage === 5 ? "Lifecycle Complete (Customer Verified)" : `Transition to ${supplySteps[Math.min(5, supplyStage + 1)].state}`}
              </button>
            </div>
          </div>
        </div>
      </div>
'''
