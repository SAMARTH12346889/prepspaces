# projectx/generator_mod14/gen_interactive.py
"""
Generates 4 Interactive Simulators for Module 14:
1. Full-Stack Decentralized Voting Simulator with live contract execution and duplicate voting prevention
2. SIWE (Sign-In with Ethereum / EIP-4361) Step-by-Step Cryptographic Flow Visualizer
3. The Graph Protocol GraphQL Subgraph Query Playground
4. On-Chain vs Off-Chain Storage Architecture Decision Matrix
"""

def get_interactive_code():
    return '''
      {/* TAB 1: INTERACTIVE SIMULATORS */}
      {activeTab === "interactive" && (
        <div className="space-y-10">
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                  Web3 Engineering &amp; Architecture Lab
                </span>
                <h2 className="text-2xl font-bold text-[#18181b]">
                  Full-Stack DApp Live Simulators
                </h2>
                <p className="text-sm text-[#52525b] mt-1">
                  Interact with real-world Web3 architectures: Smart contract voting execution, SIWE challenge-response authentication, The Graph GraphQL queries, and storage optimization.
                </p>
              </div>

              {/* Sub-simulator Tabs */}
              <div className="flex flex-wrap gap-1 p-1 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-semibold">
                <button
                  onClick={() => setSimulatorTab("voting")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    simulatorTab === "voting"
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "text-[#27272a] hover:text-[#ea580c]"
                  }`}
                >
                  1. Voting DApp
                </button>
                <button
                  onClick={() => setSimulatorTab("siwe")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    simulatorTab === "siwe"
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "text-[#27272a] hover:text-[#ea580c]"
                  }`}
                >
                  2. SIWE Flow
                </button>
                <button
                  onClick={() => setSimulatorTab("thegraph")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    simulatorTab === "thegraph"
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "text-[#27272a] hover:text-[#ea580c]"
                  }`}
                >
                  3. The Graph
                </button>
                <button
                  onClick={() => setSimulatorTab("storage")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    simulatorTab === "storage"
                      ? "bg-[#ea580c] text-white shadow-xs"
                      : "text-[#27272a] hover:text-[#ea580c]"
                  }`}
                >
                  4. Storage Matrix
                </button>
              </div>
            </div>

            {/* SIMULATOR 1: FULL-STACK VOTING DAPP */}
            {simulatorTab === "voting" && (
              <div className="mt-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#fbfaf8] border border-[#e7e3da]">
                  <div>
                    <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block">Wallet Connection &amp; Network</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="font-mono text-xs font-bold text-[#18181b]">
                        Connected: {votingActiveAccount.slice(0, 6)}...{votingActiveAccount.slice(-4)}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                        Sepolia (11155111)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-xs text-[#52525b] font-medium">Switch Wallet:</label>
                    <select
                      value={votingActiveAccount}
                      onChange={(e) => handleVotingAccountSwitch(e.target.value)}
                      className="px-2.5 py-1 text-xs rounded-lg border border-[#e7e3da] bg-white font-mono"
                    >
                      <option value="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045">0xd8dA...96045 (Voter 1)</option>
                      <option value="0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B">0xAb58...aC9B (Voter 2)</option>
                      <option value="0x1Db3439a222C519ab44bb1144fC23CC7749067FB">0x1Db3...67FB (Voter 3)</option>
                    </select>
                    <button
                      onClick={handleResetVoting}
                      className="px-2.5 py-1 text-xs rounded-lg border border-[#e7e3da] bg-white hover:bg-[#f6f4ee] font-medium text-[#27272a]"
                    >
                      Reset Votes
                    </button>
                  </div>
                </div>

                {/* Candidate Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {votingCandidates.map((c) => {
                    const hasUserVoted = hasVotedMapping[votingActiveAccount.toLowerCase()];
                    return (
                      <div
                        key={c.id}
                        className={`p-5 rounded-2xl border transition-all ${
                          selectedCandidateId === c.id
                            ? "border-[#ea580c] bg-[#ea580c]/5 shadow-xs"
                            : "border-[#e7e3da] bg-white hover:border-stone-300"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <span className="w-7 h-7 rounded-full bg-[#f6f4ee] border border-[#e7e3da] text-xs font-bold flex items-center justify-center text-[#18181b]">
                            #{c.id}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#ea580c]/10 text-[#ea580c]">
                            {c.voteCount} Votes
                          </span>
                        </div>
                        <h4 className="font-bold text-base text-[#18181b]">{c.name}</h4>
                        <p className="text-xs text-[#52525b] mt-1">{c.proposal}</p>

                        <div className="mt-4 pt-4 border-t border-[#e7e3da] flex items-center justify-between">
                          <button
                            onClick={() => handleCastVote(c.id)}
                            disabled={hasUserVoted || votingTxStage === "signing" || votingTxStage === "confirming"}
                            className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                              hasUserVoted
                                ? "bg-stone-200 text-stone-500 cursor-not-allowed"
                                : selectedCandidateId === c.id
                                ? "bg-[#ea580c] text-white hover:bg-[#c2410c]"
                                : "bg-[#f6f4ee] hover:bg-[#e7e3da] text-[#18181b]"
                            }`}
                          >
                            {hasUserVoted ? "Already Voted" : `Vote for Candidate #${c.id}`}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Status & Lifecycle Banner */}
                {votingTxStage !== "idle" && (
                  <div className="p-4 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#ea580c]">
                        Transaction Lifecycle State:
                      </span>
                      <span className="font-mono font-bold text-stone-700">
                        Stage: {votingTxStage.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-stone-800 font-medium">
                      {votingTxMessage}
                    </p>

                    {votingTxHash && (
                      <div className="flex items-center gap-2 pt-2 border-t border-[#e7e3da] font-mono text-[11px] text-[#52525b]">
                        <span>Tx Hash:</span>
                        <span className="text-[#ea580c] font-bold">{votingTxHash}</span>
                        <span className="text-emerald-700 ml-auto">&#10003; Verified on Sepolia Etherscan</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* SIMULATOR 2: SIWE CRYPTOGRAPHIC FLOW */}
            {simulatorTab === "siwe" && (
              <div className="mt-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#fbfaf8] border border-[#e7e3da]">
                  <div>
                    <h3 className="font-bold text-sm text-[#18181b]">Sign-In with Ethereum (EIP-4361) Step-by-Step Visualizer</h3>
                    <p className="text-xs text-[#52525b]">
                      Observe how cryptographic challenge-response replaces passwords without risking replay attacks.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#ea580c]">Current Step: {siweStep} / 5</span>
                    <button
                      onClick={handleResetSiwe}
                      className="px-2.5 py-1 text-xs rounded-lg border border-[#e7e3da] bg-white hover:bg-[#f6f4ee] font-medium"
                    >
                      Reset Flow
                    </button>
                  </div>
                </div>

                {/* Steps Visual Progress */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                  <div className={`p-3 rounded-xl border text-center ${siweStep >= 1 ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold" : "bg-[#f6f4ee] border-[#e7e3da] text-stone-500"}`}>
                    1. Request Nonce
                  </div>
                  <div className={`p-3 rounded-xl border text-center ${siweStep >= 2 ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold" : "bg-[#f6f4ee] border-[#e7e3da] text-stone-500"}`}>
                    2. Construct Msg
                  </div>
                  <div className={`p-3 rounded-xl border text-center ${siweStep >= 3 ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold" : "bg-[#f6f4ee] border-[#e7e3da] text-stone-500"}`}>
                    3. Sign in Wallet
                  </div>
                  <div className={`p-3 rounded-xl border text-center ${siweStep >= 4 ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold" : "bg-[#f6f4ee] border-[#e7e3da] text-stone-500"}`}>
                    4. Verify Signature
                  </div>
                  <div className={`p-3 rounded-xl border text-center ${siweStep >= 5 ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold" : "bg-[#f6f4ee] border-[#e7e3da] text-stone-500"}`}>
                    5. Issue Session
                  </div>
                </div>

                {/* Step Content Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-2">
                    <div className="text-[#ea580c] font-bold">// EIP-4361 Standardized Plaintext Message:</div>
                    <pre className="whitespace-pre-wrap">{siweMessageText}</pre>
                  </div>

                  <div className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] space-y-3 text-xs">
                    <div className="font-bold text-sm text-[#18181b]">Cryptographic State Inspector</div>
                    <div>
                      <span className="text-[#52525b] block font-semibold">Active Nonce (Single-Use):</span>
                      <code className="text-[#ea580c] font-mono font-bold">{siweNonce || "None (Click Request Nonce)"}</code>
                    </div>
                    <div>
                      <span className="text-[#52525b] block font-semibold">ECDSA Signature (secp256k1):</span>
                      <code className="text-stone-700 font-mono break-all">{siweSignature || "Awaiting wallet signature..."}</code>
                    </div>
                    <div>
                      <span className="text-[#52525b] block font-semibold">Session Status:</span>
                      <span className={`inline-block px-2 py-0.5 rounded font-bold ${siweSessionActive ? "bg-emerald-100 text-emerald-800" : "bg-stone-200 text-stone-600"}`}>
                        {siweSessionActive ? "Authenticated (HttpOnly JWT Cookie Issued)" : "Unauthenticated"}
                      </span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleAdvanceSiwe}
                        disabled={siweStep >= 5}
                        className={`w-full py-2 px-4 rounded-xl font-bold text-xs transition-all ${
                          siweStep >= 5
                            ? "bg-stone-200 text-stone-500 cursor-not-allowed"
                            : "bg-[#ea580c] text-white hover:bg-[#c2410c]"
                        }`}
                      >
                        {siweStep === 0 && "Step 1: Request Nonce from Server"}
                        {siweStep === 1 && "Step 2: Construct SIWE Message"}
                        {siweStep === 2 && "Step 3: Sign with MetaMask (personal_sign)"}
                        {siweStep === 3 && "Step 4: Verify Signature on Backend"}
                        {siweStep === 4 && "Step 5: Issue Secure Session Cookie"}
                        {siweStep >= 5 && "Authentication Complete!"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SIMULATOR 3: THE GRAPH GRAPHQL PLAYGROUND */}
            {simulatorTab === "thegraph" && (
              <div className="mt-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#fbfaf8] border border-[#e7e3da]">
                  <div>
                    <h3 className="font-bold text-sm text-[#18181b]">The Graph Protocol Subgraph Query Playground</h3>
                    <p className="text-xs text-[#52525b]">
                      Query indexed Voting.sol blockchain events and aggregated entities via GraphQL.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-xs text-[#52525b] font-medium">Preset Query:</label>
                    <select
                      value={graphPreset}
                      onChange={(e) => handleGraphPresetChange(e.target.value)}
                      className="px-2.5 py-1 text-xs rounded-lg border border-[#e7e3da] bg-white font-mono"
                    >
                      <option value="candidates">Fetch Candidates &amp; Vote Counts</option>
                      <option value="voteCasts">Fetch Recent VoteCast Events</option>
                      <option value="voterLookup">Fetch Voter Activity History</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">GraphQL Query Editor</span>
                      <button
                        onClick={handleExecuteGraphQuery}
                        className="px-3 py-1 bg-[#ea580c] text-white rounded-lg font-bold text-xs hover:bg-[#c2410c] transition-colors"
                      >
                        Run Query
                      </button>
                    </div>
                    <div className="bg-[#18181b] text-cyan-400 p-4 rounded-xl font-mono text-xs overflow-x-auto min-h-[220px]">
                      <pre className="whitespace-pre-wrap">{graphQueryText}</pre>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">GraphQL JSON Response</span>
                      <span className="text-[11px] text-emerald-700 font-bold font-mono">
                        Latency: {graphLatency}ms | Indexer: 100% Synced
                      </span>
                    </div>
                    <div className="bg-[#18181b] text-emerald-400 p-4 rounded-xl font-mono text-xs overflow-x-auto min-h-[220px]">
                      <pre className="whitespace-pre-wrap">{graphResponseText}</pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SIMULATOR 4: STORAGE ARCHITECTURE MATRIX */}
            {simulatorTab === "storage" && (
              <div className="mt-8 space-y-6">
                <div className="p-4 rounded-2xl bg-[#fbfaf8] border border-[#e7e3da]">
                  <h3 className="font-bold text-sm text-[#18181b]">On-Chain vs Off-Chain Storage Architecture Decision Matrix</h3>
                  <p className="text-xs text-[#52525b] mt-1">
                    Select a Web3 data entity to inspect its optimal storage tier, gas cost implications, query latency, and censorship-resistance trade-offs.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {storageEntities.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setSelectedStorageKey(item.key)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                        selectedStorageKey === item.key
                          ? "border-[#ea580c] bg-[#ea580c]/10 text-[#ea580c]"
                          : "border-[#e7e3da] bg-white text-[#27272a] hover:bg-[#f6f4ee]"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>

                {activeStorageDetail && (
                  <div className="p-6 rounded-2xl border border-[#e7e3da] bg-white shadow-xs space-y-4 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e7e3da] pb-4">
                      <div>
                        <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block">Target Tier Recommendation</span>
                        <h4 className="text-lg font-bold text-[#18181b]">{activeStorageDetail.recommendedTier}</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f6f4ee] border border-[#e7e3da] text-stone-700">
                        Entity: {activeStorageDetail.title}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                        <span className="text-[#52525b] font-medium block text-xs">Estimated Gas Cost:</span>
                        <span className="font-bold text-[#18181b] text-sm">{activeStorageDetail.gasCost}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                        <span className="text-[#52525b] font-medium block text-xs">Query Latency:</span>
                        <span className="font-bold text-[#18181b] text-sm">{activeStorageDetail.queryLatency}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                        <span className="text-[#52525b] font-medium block text-xs">Censorship Resistance:</span>
                        <span className="font-bold text-emerald-700 text-sm">{activeStorageDetail.censorshipResistance}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#f6f4ee] border border-[#e7e3da]">
                        <span className="text-[#52525b] font-medium block text-xs">Mutability:</span>
                        <span className="font-bold text-stone-800 text-sm">{activeStorageDetail.mutability}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500 text-blue-900 text-xs sm:text-sm leading-relaxed">
                      <span className="font-bold block mb-1">Architectural Rationale:</span>
                      {activeStorageDetail.rationale}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
'''
