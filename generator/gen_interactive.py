# projectx/generator/gen_interactive.py

def get_interactive_code():
    return r'''
          {/* TAB 2: INTERACTIVE SIMULATORS */}
          {activeTab === "interactive" && (
            <div className="space-y-10">
              {/* Simulator Selector Header */}
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                      Hands-On Protocol Laboratory
                    </span>
                    <h2 className="text-2xl font-bold text-[#18181b]">
                      ERC Token Standards Live Simulators
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Execute live state transitions, test allowance mechanisms, mint NFTs with IPFS metadata, and compute linear vesting schedules.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSimulatorTab("erc20")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "erc20"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      1. ERC-20 Engine
                    </button>
                    <button
                      onClick={() => setSimulatorTab("erc721")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "erc721"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      2. ERC-721 & Metadata
                    </button>
                    <button
                      onClick={() => setSimulatorTab("erc1155")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "erc1155"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      3. ERC-1155 Inventory
                    </button>
                    <button
                      onClick={() => setSimulatorTab("vesting")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "vesting"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      4. Token Vesting
                    </button>
                  </div>
                </div>

                {/* SIMULATOR 1: ERC-20 ENGINE */}
                {simulatorTab === "erc20" && (
                  <div className="mt-6 space-y-6">
                    {/* Supply Overview Bar */}
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex flex-wrap items-center justify-between text-xs font-mono mb-2">
                        <span className="font-bold text-stone-800">
                          Total Circulating Supply: <span className="text-[#ea580c]">{erc20Supply.toLocaleString()} PREP</span>
                        </span>
                        <span className="text-stone-500">
                          Hard Cap: <span className="font-bold text-stone-700">{erc20Cap.toLocaleString()} PREP</span> (
                          {((erc20Supply / erc20Cap) * 100).toFixed(1)}% Minted)
                        </span>
                      </div>
                      <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (erc20Supply / erc20Cap) * 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Account Balances Table */}
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-2">
                        Internal Balance Mapping: mapping(address =&gt; uint256) _balances
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {Object.entries(erc20Balances).map(([acc, bal]) => (
                          <div
                            key={acc}
                            className={`p-3.5 rounded-xl border transition ${
                              erc20Caller === acc
                                ? "border-orange-500 bg-orange-50/60 ring-2 ring-orange-200"
                                : "border-stone-200 bg-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold capitalize text-stone-800">
                                {acc} {acc === "deployer" && "(Owner)"}
                              </span>
                              <button
                                onClick={() => setErc20Caller(acc)}
                                className="text-[10px] font-mono text-orange-600 hover:underline cursor-pointer"
                              >
                                {erc20Caller === acc ? "Selected Caller" : "Set Caller"}
                              </button>
                            </div>
                            <div className="mt-2 text-lg font-bold font-mono text-stone-900">
                              {bal.toLocaleString()} <span className="text-xs text-stone-500">PREP</span>
                            </div>
                            <div className="text-[10px] font-mono text-stone-400 truncate mt-1">
                              {erc20Addresses[acc]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Allowances Sub-section */}
                    <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-900 uppercase">
                          Active Allowances: _allowances[owner][spender]
                        </span>
                        <span className="text-[11px] text-amber-700">
                          Authorizes third parties to call transferFrom()
                        </span>
                      </div>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                        {Object.entries(erc20Allowances).map(([owner, spenders]) =>
                          Object.entries(spenders).map(([spender, amt]) => (
                            <div key={`${owner}-${spender}`} className="p-2.5 rounded-xl bg-white border border-amber-200/80 text-xs">
                              <span className="text-stone-500 font-mono text-[10px] block">
                                {owner} → {spender}
                              </span>
                              <span className="font-mono font-bold text-stone-800">
                                {amt === Infinity || amt > 1000000000 ? "type(uint256).max (Infinite)" : `${amt.toLocaleString()} PREP`}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Action Controls */}
                    <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-3">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-stone-400">Caller (msg.sender):</span>
                          <span className="font-mono font-bold text-orange-400 capitalize">{erc20Caller}</span>
                        </div>
                        <div className="flex gap-2">
                          {["transfer", "approve", "transferFrom", "mint", "burn"].map((op) => (
                            <button
                              key={op}
                              onClick={() => setErc20Operation(op)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                                erc20Operation === op
                                  ? "bg-orange-600 text-white"
                                  : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                              }`}
                            >
                              {op}()
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Operation Inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        {erc20Operation === "transferFrom" && (
                          <div>
                            <label className="block text-[11px] text-stone-400 mb-1">From (Owner with Allowance):</label>
                            <select
                              value={erc20FromAccount}
                              onChange={(e) => setErc20FromAccount(e.target.value)}
                              className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 text-white font-mono"
                            >
                              {Object.keys(erc20Balances).map((acc) => (
                                <option key={acc} value={acc}>
                                  {acc}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {(erc20Operation === "transfer" || erc20Operation === "transferFrom" || erc20Operation === "mint") && (
                          <div>
                            <label className="block text-[11px] text-stone-400 mb-1">To (Recipient Address):</label>
                            <select
                              value={erc20ToAccount}
                              onChange={(e) => setErc20ToAccount(e.target.value)}
                              className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 text-white font-mono"
                            >
                              {Object.keys(erc20Balances).map((acc) => (
                                <option key={acc} value={acc}>
                                  {acc}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {erc20Operation === "approve" && (
                          <div>
                            <label className="block text-[11px] text-stone-400 mb-1">Spender (Contract / Router):</label>
                            <select
                              value={erc20SpenderAccount}
                              onChange={(e) => setErc20SpenderAccount(e.target.value)}
                              className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 text-white font-mono"
                            >
                              {Object.keys(erc20Balances).map((acc) => (
                                <option key={acc} value={acc}>
                                  {acc}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">Amount (PREP):</label>
                          <input
                            type="number"
                            value={erc20Amount}
                            onChange={(e) => setErc20Amount(Number(e.target.value))}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 text-white font-mono"
                            placeholder="Amount..."
                            min="1"
                          />
                        </div>

                        <div className="flex items-end">
                          <button
                            onClick={handleErc20Execute}
                            className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold font-mono text-xs transition cursor-pointer shadow-md"
                          >
                            Execute {erc20Operation}()
                          </button>
                        </div>
                      </div>

                      {erc20Status && (
                        <div
                          className={`p-3 rounded-xl text-xs font-mono ${
                            erc20Status.type === "success"
                              ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800"
                              : "bg-red-950/80 text-red-300 border border-red-800"
                          }`}
                        >
                          {erc20Status.message}
                        </div>
                      )}
                    </div>

                    {/* Event Log Output */}
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-stone-700 uppercase">
                          EVM Event Logs: Transfer & Approval
                        </span>
                        <span className="text-[10px] font-mono text-stone-500">
                          {erc20Logs.length} events indexed
                        </span>
                      </div>
                      <div className="space-y-1.5 max-h-48 overflow-y-auto font-mono text-[11px]">
                        {erc20Logs.map((log, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-white border border-stone-200 flex items-center justify-between">
                            <span className="text-orange-600 font-bold">{log.event}</span>
                            <span className="text-stone-600 truncate max-w-xs">{log.details}</span>
                            <span className="text-stone-400 text-[10px]">{log.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* SIMULATOR 2: ERC-721 & METADATA */}
                {simulatorTab === "erc721" && (
                  <div className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Left: Mint Form */}
                      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-4">
                        <h3 className="text-sm font-bold text-stone-900 border-b border-stone-200 pb-2">
                          Mint PrepSpaces NFT: safeMint(address to, string uri)
                        </h3>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">Recipient Address:</label>
                          <select
                            value={nftMintRecipient}
                            onChange={(e) => setNftMintRecipient(e.target.value)}
                            className="w-full rounded-xl bg-white border border-stone-300 p-2 text-xs font-mono"
                          >
                            <option value="0x70997970C51812dc3A010C7d01b50e0d17dc79C8">Alice (0x7099...79C8)</option>
                            <option value="0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC">Bob (0x3C44...9BC9)</option>
                            <option value="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266">Deployer (0xf39F...2266)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">Asset Name:</label>
                          <input
                            type="text"
                            value={nftMintName}
                            onChange={(e) => setNftMintName(e.target.value)}
                            className="w-full rounded-xl bg-white border border-stone-300 p-2 text-xs"
                            placeholder="e.g. Genesis Auditor"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 mb-1">Rarity Tier:</label>
                            <select
                              value={nftMintRarity}
                              onChange={(e) => setNftMintRarity(e.target.value)}
                              className="w-full rounded-xl bg-white border border-stone-300 p-2 text-xs"
                            >
                              <option value="Common">Common</option>
                              <option value="Rare">Rare</option>
                              <option value="Epic">Epic</option>
                              <option value="Legendary">Legendary</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 mb-1">Specialization:</label>
                            <select
                              value={nftMintTrait}
                              onChange={(e) => setNftMintTrait(e.target.value)}
                              className="w-full rounded-xl bg-white border border-stone-300 p-2 text-xs"
                            >
                              <option value="Reentrancy Audit">Reentrancy Audit</option>
                              <option value="EVM Bytecode Analysis">EVM Bytecode</option>
                              <option value="ZK Prover Systems">ZK Prover</option>
                              <option value="DeFi Flash Loan Defense">Flash Loan Defense</option>
                            </select>
                          </div>
                        </div>

                        <button
                          onClick={handleNftMint}
                          className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition cursor-pointer shadow-md"
                        >
                          Mint NFT #{nftTokens.length + 1}
                        </button>
                      </div>

                      {/* Center: Minted NFT Gallery Card */}
                      <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
                        <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                          <span className="text-xs font-mono font-bold uppercase text-stone-500">
                            Token Gallery (Click to Inspect)
                          </span>
                          <span className="text-xs font-mono text-orange-600 font-bold">
                            Total: {nftTokens.length} NFTs
                          </span>
                        </div>

                        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                          {nftTokens.map((nft) => (
                            <div
                              key={nft.id}
                              onClick={() => setSelectedNft(nft)}
                              className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                                selectedNft.id === nft.id
                                  ? "border-orange-500 bg-orange-50/50 shadow-xs"
                                  : "border-stone-200 hover:border-stone-300 bg-stone-50/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold font-mono text-xs shadow-xs">
                                  #{nft.id}
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-stone-900">{nft.name}</div>
                                  <div className="text-[10px] text-stone-500 font-mono truncate max-w-[140px]">
                                    Owner: {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}
                                  </div>
                                </div>
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  nft.rarity === "Legendary"
                                    ? "bg-amber-100 text-amber-800 border border-amber-300"
                                    : nft.rarity === "Epic"
                                    ? "bg-purple-100 text-purple-800 border border-purple-300"
                                    : nft.rarity === "Rare"
                                    ? "bg-blue-100 text-blue-800 border border-blue-300"
                                    : "bg-stone-100 text-stone-700"
                                }`}
                              >
                                {nft.rarity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: IPFS Metadata JSON Inspector */}
                      <div className="rounded-2xl border border-stone-800 bg-stone-950 p-5 text-stone-200 font-mono text-xs space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                          <span className="text-amber-400 font-bold">// tokenURI({selectedNft.id}) Inspector</span>
                          <span className="text-[10px] text-stone-400">ERC-721 Metadata Standard</span>
                        </div>

                        <div className="text-[11px] text-stone-400 break-all">
                          <strong className="text-stone-300">URI:</strong> {selectedNft.tokenUri}
                        </div>

                        <pre className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[10px] text-stone-300 overflow-x-auto leading-relaxed">
{JSON.stringify(
  {
    name: selectedNft.name,
    description: "PrepSpaces University Web3 Engineering Genesis Credential NFT",
    image: `ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/${selectedNft.id}.png`,
    attributes: [
      { trait_type: "Course Track", value: "Blockchain Architecture" },
      { trait_type: "Rarity Tier", value: selectedNft.rarity },
      { trait_type: "Specialization", value: selectedNft.trait },
      { trait_type: "Audit Competency Score", value: selectedNft.score }
    ]
  },
  null,
  2
)}
                        </pre>

                        {/* Receiver Reentrancy / Safety Tester */}
                        <div className="pt-2 border-t border-stone-800">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-stone-300 font-bold">safeTransferFrom Test:</span>
                            <label className="flex items-center gap-1.5 text-stone-400 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={nftSimulateUnsafeReceiver}
                                onChange={(e) => setNftSimulateUnsafeReceiver(e.target.checked)}
                                className="rounded accent-orange-500"
                              />
                              Simulate Contract Missing onERC721Received
                            </label>
                          </div>
                          <button
                            onClick={handleNftSafeTransfer}
                            className="mt-2 w-full py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-mono text-xs transition cursor-pointer"
                          >
                            Execute safeTransferFrom()
                          </button>
                          {nftTransferStatus && (
                            <div
                              className={`mt-2 p-2 rounded-lg text-[10px] font-mono ${
                                nftTransferStatus.success
                                  ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                                  : "bg-red-950 text-red-300 border border-red-800"
                              }`}
                            >
                              {nftTransferStatus.msg}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SIMULATOR 3: ERC-1155 MULTI-TOKEN INVENTORY */}
                {simulatorTab === "erc1155" && (
                  <div className="mt-6 space-y-6">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
                            ERC-1155 Multi-Token Inventory Matrix
                          </h3>
                          <p className="text-xs text-stone-600 mt-0.5">
                            Both fungible currencies and non-fungible items reside inside a single smart contract.
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                          Batch Transfer Gas Optimization: ~65% Lower Gas
                        </span>
                      </div>
                    </div>

                    {/* Inventory Table */}
                    <div className="overflow-x-auto rounded-2xl border border-stone-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-stone-100/80 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                          <tr>
                            <th className="p-3">Token ID</th>
                            <th className="p-3">Item Name</th>
                            <th className="p-3">Asset Classification</th>
                            <th className="p-3">Alice Balance</th>
                            <th className="p-3">Bob Balance</th>
                            <th className="p-3">Treasury Reserve</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 font-mono">
                          {erc1155Items.map((item) => (
                            <tr key={item.id} className="hover:bg-stone-50">
                              <td className="p-3 font-bold text-orange-600">ID #{item.id}</td>
                              <td className="p-3 font-sans font-bold text-stone-900">{item.name}</td>
                              <td className="p-3">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                    item.type === "Fungible"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-amber-100 text-amber-800"
                                  }`}
                                >
                                  {item.type}
                                </span>
                              </td>
                              <td className="p-3 text-stone-800 font-bold">{erc1155Balances.alice[item.id] || 0}</td>
                              <td className="p-3 text-stone-800 font-bold">{erc1155Balances.bob[item.id] || 0}</td>
                              <td className="p-3 text-stone-600">{erc1155Balances.treasury[item.id] || 0}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Batch Transfer Simulator Box */}
                    <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-4">
                      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                        <span className="text-xs font-mono font-bold text-amber-400">
                          safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">Atomic Multi-Asset Settlement</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">From:</label>
                          <select
                            value={erc1155Sender}
                            onChange={(e) => setErc1155Sender(e.target.value)}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 font-mono"
                          >
                            <option value="alice">Alice</option>
                            <option value="bob">Bob</option>
                            <option value="treasury">Treasury</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">To:</label>
                          <select
                            value={erc1155Recipient}
                            onChange={(e) => setErc1155Recipient(e.target.value)}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 font-mono"
                          >
                            <option value="bob">Bob</option>
                            <option value="alice">Alice</option>
                            <option value="treasury">Treasury</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">Gold Coins (ID: 1):</label>
                          <input
                            type="number"
                            value={batchGoldAmt}
                            onChange={(e) => setBatchGoldAmt(Number(e.target.value))}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 font-mono"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">Mana Potions (ID: 2):</label>
                          <input
                            type="number"
                            value={batchPotionAmt}
                            onChange={(e) => setBatchPotionAmt(Number(e.target.value))}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 font-mono"
                            min="0"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <div className="text-xs text-stone-300 font-mono">
                          Gas Comparison: ERC-721 (2 calls): <span className="line-through text-red-400">142,000 gas</span> → ERC-1155 (1 batch): <span className="text-emerald-400 font-bold">51,800 gas</span> (63.5% saved)
                        </div>
                        <button
                          onClick={handleBatchTransfer}
                          className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-mono font-bold text-xs transition cursor-pointer shadow-md"
                        >
                          Execute safeBatchTransferFrom()
                        </button>
                      </div>

                      {batchStatus && (
                        <div
                          className={`p-3 rounded-xl text-xs font-mono ${
                            batchStatus.success
                              ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                              : "bg-red-950 text-red-300 border border-red-800"
                          }`}
                        >
                          {batchStatus.msg}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* SIMULATOR 4: TOKEN VESTING */}
                {simulatorTab === "vesting" && (
                  <div className="mt-6 space-y-6">
                    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 space-y-6">
                      <div className="border-b border-stone-200 pb-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                          Linear Vesting Formula with Cliff
                        </span>
                        <h3 className="text-lg font-bold text-stone-900 mt-1">
                          Vesting Schedule Simulator: 4-Year Linear with 12-Month Cliff
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1">
                          Slide elapsed months to observe the cliff unlock cliff threshold and continuous linear vesting rate.
                        </p>
                      </div>

                      {/* Slider Control */}
                      <div>
                        <div className="flex justify-between items-center text-xs font-mono mb-2">
                          <span className="font-bold text-stone-800">
                            Elapsed Timeline: <span className="text-orange-600 font-bold">{vestingElapsed} Months</span> (
                            {(vestingElapsed / 12).toFixed(1)} Years)
                          </span>
                          <span className="text-stone-500">Total Duration: 48 Months (4.0 Years)</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="48"
                          value={vestingElapsed}
                          onChange={(e) => setVestingElapsed(Number(e.target.value))}
                          className="w-full h-2 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-[#ea580c]"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                          <span>0m (TGE)</span>
                          <span className="text-amber-600 font-bold">12m (Cliff End)</span>
                          <span>24m (Year 2)</span>
                          <span>36m (Year 3)</span>
                          <span>48m (100% Vested)</span>
                        </div>
                      </div>

                      {/* Mathematical Output Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-center">
                          <span className="text-xs font-mono text-stone-500 uppercase block">Vested Tokens</span>
                          <span className="text-xl font-bold font-mono text-emerald-600 mt-1 block">
                            {vestedTokens.toLocaleString()} PREP
                          </span>
                          <span className="text-[11px] text-stone-400 font-mono">
                            {((vestedTokens / vestingTotal) * 100).toFixed(1)}% of total
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-center">
                          <span className="text-xs font-mono text-stone-500 uppercase block">Locked Tokens</span>
                          <span className="text-xl font-bold font-mono text-stone-700 mt-1 block">
                            {(vestingTotal - vestedTokens).toLocaleString()} PREP
                          </span>
                          <span className="text-[11px] text-stone-400 font-mono">
                            {(((vestingTotal - vestedTokens) / vestingTotal) * 100).toFixed(1)}% remaining
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-center">
                          <span className="text-xs font-mono text-stone-500 uppercase block">Cliff Status</span>
                          <span
                            className={`text-sm font-bold font-mono mt-1 block ${
                              vestingElapsed < 12 ? "text-amber-600" : "text-emerald-600"
                            }`}
                          >
                            {vestingElapsed < 12 ? "CLIFF ACTIVE (0% Unlocked)" : "CLIFF PASSED (Linear Stream)"}
                          </span>
                          <span className="text-[10px] text-stone-400 font-mono">
                            {vestingElapsed < 12 ? "Releases 250,000 PREP at month 12" : "+20,833.33 PREP / month"}
                          </span>
                        </div>
                      </div>

                      {/* Formula Card */}
                      <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                        <div className="text-amber-400 font-bold">// Mathematical Specification</div>
                        <div className="text-stone-300">
                          Total Allocation (A) = 1,000,000 PREP | Cliff (T_cliff) = 12 months | Total Duration (T) = 48 months
                        </div>
                        <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 text-[11px] text-orange-300">
                          {vestingElapsed < 12
                            ? "V(t) = 0 (t < T_cliff)"
                            : `V(${vestingElapsed}) = 1,000,000 * (${vestingElapsed} / 48) = ${vestedTokens.toLocaleString()} PREP`}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
'''
