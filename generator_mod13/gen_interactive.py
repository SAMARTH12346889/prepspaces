# projectx/generator_mod13/gen_interactive.py

def get_interactive_code():
    return r'''
          {/* TAB 2: INTERACTIVE SIMULATORS */}
          {activeTab === "interactive" && (
            <div className="space-y-10">
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                      Web3 Engineering Playground
                    </span>
                    <h2 className="text-2xl font-bold text-[#18181b]">
                      Web3 Libraries &amp; RPC Live Simulators
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Inspect function selectors, compare Ethers.js and Viem syntax, simulate EIP-1193 MetaMask events, and calculate EIP-1559 gas fees.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSimulatorTab("selector")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "selector"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      1. ABI &amp; Selectors
                    </button>
                    <button
                      onClick={() => setSimulatorTab("playground")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "playground"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      2. Ethers vs Viem
                    </button>
                    <button
                      onClick={() => setSimulatorTab("wallet")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "wallet"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      3. MetaMask EIP-1193
                    </button>
                    <button
                      onClick={() => setSimulatorTab("gas")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "gas"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      4. EIP-1559 Gas Calculator
                    </button>
                  </div>
                </div>

                {/* SIMULATOR 1: ABI & FUNCTION SELECTOR EXPLORER */}
                {simulatorTab === "selector" && (
                  <div className="mt-6 space-y-6">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                      <strong className="block text-stone-900 font-bold mb-1">
                        EVM Calldata Construction &amp; Dispatcher Mechanics
                      </strong>
                      <p className="text-stone-600 leading-relaxed">
                        The Ethereum Virtual Machine reads the first 4 bytes of calldata to match against compiled function jump tables. The remaining bytes contain 32-byte zero-padded parameters.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                          Function Signature Configuration
                        </h3>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">Common Presets:</label>
                          <select
                            value={selectedPreset}
                            onChange={(e) => handlePresetChange(e.target.value)}
                            className="w-full rounded-xl bg-stone-50 border border-stone-300 p-2.5 text-xs font-mono"
                          >
                            <option value="transfer(address,uint256)">transfer(address,uint256) — ERC-20 Transfer</option>
                            <option value="balanceOf(address)">balanceOf(address) — ERC-20 / ERC-721 Balance</option>
                            <option value="approve(address,uint256)">approve(address,uint256) — ERC-20 Allowance</option>
                            <option value="totalSupply()">totalSupply() — Total Token Supply</option>
                            <option value="ownerOf(uint256)">ownerOf(uint256) — ERC-721 NFT Owner</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">Canonical Signature:</label>
                          <input
                            type="text"
                            value={customSignature}
                            onChange={(e) => setCustomSignature(e.target.value)}
                            className="w-full rounded-xl bg-stone-50 border border-stone-300 p-2.5 text-xs font-mono"
                            placeholder="e.g. transfer(address,uint256)"
                          />
                          <span className="text-[10px] text-stone-400 mt-1 block">
                            * Note: Do not include spaces between parameter types (e.g., uint256, not uint256 )
                          </span>
                        </div>

                        {customSignature.includes("address") && (
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 mb-1">Recipient Address (Param 1):</label>
                            <input
                              type="text"
                              value={calldataParamAddress}
                              onChange={(e) => setCalldataParamAddress(e.target.value)}
                              className="w-full rounded-xl bg-stone-50 border border-stone-300 p-2 text-xs font-mono"
                            />
                          </div>
                        )}

                        {customSignature.includes("uint256") && (
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 mb-1">Token Amount / ID (Param 2):</label>
                            <input
                              type="text"
                              value={calldataParamAmount}
                              onChange={(e) => setCalldataParamAmount(e.target.value)}
                              className="w-full rounded-xl bg-stone-50 border border-stone-300 p-2 text-xs font-mono"
                            />
                          </div>
                        )}
                      </div>

                      {/* Calldata & JSON-RPC Output */}
                      <div className="rounded-2xl border border-stone-800 bg-stone-950 p-5 text-stone-200 font-mono text-xs space-y-4">
                        <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                          <span className="text-amber-400 font-bold">// Computed 4-Byte Function Selector</span>
                          <span className="text-stone-400 text-[10px]">bytes4(keccak256(sig))</span>
                        </div>

                        <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                          <span className="text-stone-400 block text-[11px] mb-1">Selector Hash:</span>
                          <span className="text-lg font-bold text-orange-400">{calculatedSelector}</span>
                        </div>

                        <div>
                          <span className="text-stone-400 block text-[11px] mb-1">Assembled Calldata Payload:</span>
                          <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] break-all leading-relaxed">
                            <span className="text-orange-400 font-bold">{calculatedSelector}</span>
                            <span className="text-purple-400">{paddedAddress}</span>
                            <span className="text-blue-400">{paddedAmount}</span>
                          </div>
                          <div className="flex gap-4 text-[10px] text-stone-400 mt-1">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400" /> Selector (4B)</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400" /> Address (32B)</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400" /> Amount (32B)</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-stone-800">
                          <span className="text-stone-400 block text-[11px] mb-1">Generated eth_call JSON-RPC Message:</span>
                          <pre className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[10px] text-stone-300 overflow-x-auto">
{JSON.stringify({
  jsonrpc: "2.0",
  method: "eth_call",
  params: [
    {
      to: "0x1122334455667788990011223344556677889900",
      data: `${calculatedSelector}${paddedAddress}${paddedAmount}`
    },
    "latest"
  ],
  id: 1
}, null, 2)}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SIMULATOR 2: ETHERS.JS VS VIEM PLAYGROUND */}
                {simulatorTab === "playground" && (
                  <div className="mt-6 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-800">Select Operation:</span>
                        <select
                          value={playgroundAction}
                          onChange={(e) => setPlaygroundAction(e.target.value)}
                          className="rounded-xl bg-white border border-stone-300 p-2 text-xs font-mono"
                        >
                          <option value="blockNumber">1. Query Latest Block Number (eth_blockNumber)</option>
                          <option value="balance">2. Query ETH Balance (eth_getBalance)</option>
                          <option value="readContract">3. Read Contract Token Supply (eth_call)</option>
                          <option value="estimateGas">4. Estimate Gas for Transfer (eth_estimateGas)</option>
                        </select>
                      </div>

                      <button
                        onClick={executePlaygroundQuery}
                        className="px-4 py-2 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition cursor-pointer shadow-xs flex items-center gap-1.5"
                      >
                        <span>Execute Simulated Query</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Ethers.js v6 Box */}
                      <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                          <span className="text-xs font-mono font-bold text-[#ea580c]">Ethers.js v6 Implementation</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">Class &amp; Provider Pattern</span>
                        </div>

                        <pre className="p-3 rounded-xl bg-stone-900 text-stone-200 font-mono text-[11px] overflow-x-auto leading-relaxed">
{playgroundAction === "blockNumber" && `import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");
const blockNumber = await provider.getBlockNumber();
console.log(blockNumber); // returns number`}
{playgroundAction === "balance" && `import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");
const balance = await provider.getBalance("0xd8dA6...6045");
console.log(ethers.formatEther(balance)); // returns string "142.84"`}
{playgroundAction === "readContract" && `import { ethers } from "ethers";

const contract = new ethers.Contract(tokenAddress, abi, provider);
const supply = await contract.totalSupply();
console.log(ethers.formatUnits(supply, 18)); // returns BigInt format`}
{playgroundAction === "estimateGas" && `import { ethers } from "ethers";

const gasLimit = await contract.transfer.estimateGas(to, amount);
console.log(gasLimit.toString()); // returns BigInt 52400n`}
                        </pre>
                      </div>

                      {/* Viem Box */}
                      <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                          <span className="text-xs font-mono font-bold text-blue-600">Viem Implementation</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">TypeScript-First Client Action</span>
                        </div>

                        <pre className="p-3 rounded-xl bg-stone-900 text-stone-200 font-mono text-[11px] overflow-x-auto leading-relaxed">
{playgroundAction === "blockNumber" && `import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const publicClient = createPublicClient({ chain: mainnet, transport: http() });
const blockNumber = await publicClient.getBlockNumber();
console.log(blockNumber); // returns bigint 21154820n`}
{playgroundAction === "balance" && `import { formatEther } from "viem";

const balance = await publicClient.getBalance({ address: "0xd8dA6...6045" });
console.log(formatEther(balance)); // returns string "142.84"`}
{playgroundAction === "readContract" && `const supply = await publicClient.readContract({
  address: tokenAddress,
  abi, // typed with "as const"
  functionName: "totalSupply"
}); // auto-inferred return type: bigint`}
{playgroundAction === "estimateGas" && `const gas = await publicClient.estimateContractGas({
  address: tokenAddress,
  abi,
  functionName: "transfer",
  args: [recipient, parseEther("10")],
  account
}); // returns bigint 52400n`}
                        </pre>
                      </div>
                    </div>

                    {/* Simulated Response Box */}
                    {playgroundResult && (
                      <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2 border border-stone-800">
                        <div className="flex items-center justify-between text-amber-400">
                          <span className="font-bold">// RPC Response Payload Received ({playgroundLatency}ms)</span>
                          <span className="text-[10px] text-stone-400">Status: 200 OK</span>
                        </div>
                        <div className="p-3 rounded-xl bg-stone-950 text-emerald-400 text-xs">
                          {playgroundResult}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* SIMULATOR 3: METAMASK EIP-1193 SIMULATOR */}
                {simulatorTab === "wallet" && (
                  <div className="mt-6 space-y-6">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
                            EIP-1193 Browser Wallet Interface (window.ethereum)
                          </h3>
                          <p className="text-xs text-stone-600 mt-0.5">
                            Simulate account authorization, network switching, and standard error handling in real time.
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                          EIP-1193 Compliant
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left: Wallet State Simulator */}
                      <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
                        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                          <span className="text-xs font-bold text-stone-800">Wallet State:</span>
                          <button
                            onClick={handleWalletConnectToggle}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                              isWalletConnected
                                ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
                                : "bg-[#ea580c] text-white hover:bg-[#c2410c]"
                            }`}
                          >
                            {isWalletConnected ? "Disconnect Wallet" : "Connect MetaMask (eth_requestAccounts)"}
                          </button>
                        </div>

                        {isWalletConnected && (
                          <div className="space-y-3 text-xs">
                            <div>
                              <label className="block text-stone-500 font-mono text-[11px] mb-1">
                                Connected Account (accountsChanged event):
                              </label>
                              <select
                                value={connectedWalletAccount}
                                onChange={(e) => handleAccountSwitch(e.target.value)}
                                className="w-full rounded-xl bg-stone-50 border border-stone-300 p-2 font-mono text-xs"
                              >
                                <option value="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045">Vitalik (0xd8dA6...6045)</option>
                                <option value="0x70997970C51812dc3A010C7d01b50e0d17dc79C8">Alice (0x7099...79C8)</option>
                                <option value="0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC">Bob (0x3C44...9BC9)</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-stone-500 font-mono text-[11px] mb-1">
                                Connected Chain (chainChanged event):
                              </label>
                              <select
                                value={connectedChainId}
                                onChange={(e) => handleChainSwitch(e.target.value)}
                                className="w-full rounded-xl bg-stone-50 border border-stone-300 p-2 font-mono text-xs"
                              >
                                <option value="11155111">Ethereum Sepolia (Chain ID: 11155111 / 0xaa36a7)</option>
                                <option value="1">Ethereum Mainnet (Chain ID: 1 / 0x1)</option>
                                <option value="42161">Arbitrum One (Chain ID: 42161 / 0xa4b1)</option>
                                <option value="137">Polygon PoS (Chain ID: 137 / 0x89)</option>
                              </select>
                            </div>

                            <div className="p-3 rounded-xl bg-orange-50 border border-orange-200">
                              <span className="text-[10px] font-mono text-orange-800 uppercase block font-bold">ETH Balance:</span>
                              <span className="text-base font-bold font-mono text-[#ea580c]">142.845 ETH</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right: Error Simulation Box */}
                      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3">
                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                          EIP-1193 Error Simulation Triggers
                        </h3>
                        <p className="text-xs text-stone-600">
                          Click below to test how your frontend handles standard RPC rejection exceptions:
                        </p>

                        <div className="space-y-2">
                          <button
                            onClick={() => triggerWalletError(4001, "User rejected the request in MetaMask modal.")}
                            className="w-full text-left p-3 rounded-xl border border-amber-300 bg-amber-50/70 hover:bg-amber-100/70 text-amber-900 text-xs font-mono transition cursor-pointer"
                          >
                            <strong>Simulate Error 4001:</strong> User Rejected Request
                          </button>

                          <button
                            onClick={() => triggerWalletError(4901, "Provider disconnected from the requested chain.")}
                            className="w-full text-left p-3 rounded-xl border border-red-300 bg-red-50/70 hover:bg-red-100/70 text-red-900 text-xs font-mono transition cursor-pointer"
                          >
                            <strong>Simulate Error 4901:</strong> Chain Disconnected
                          </button>

                          <button
                            onClick={() => triggerWalletError("INSUFFICIENT_FUNDS", "Account lacks sufficient funds to cover gas fees.")}
                            className="w-full text-left p-3 rounded-xl border border-stone-300 bg-white hover:bg-stone-100 text-stone-800 text-xs font-mono transition cursor-pointer"
                          >
                            <strong>Simulate Error:</strong> Insufficient Gas Balance
                          </button>
                        </div>

                        {simulatedWalletError && (
                          <div className="mt-3 p-3 rounded-xl bg-stone-900 border border-red-500 text-red-300 font-mono text-[11px] leading-relaxed">
                            <span className="text-amber-400 font-bold block mb-1">
                              [EIP-1193 Exception Captured]:
                            </span>
                            Code: {simulatedWalletError.code}
                            <br />
                            Message: {simulatedWalletError.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* SIMULATOR 4: EIP-1559 GAS CALCULATOR */}
                {simulatorTab === "gas" && (
                  <div className="mt-6 space-y-6">
                    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 space-y-6">
                      <div className="border-b border-stone-200 pb-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                          EIP-1559 Fee Dynamics
                        </span>
                        <h3 className="text-lg font-bold text-stone-900 mt-1">
                          Interactive EIP-1559 Gas Estimator &amp; Fee Calculator
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1">
                          Adjust Base Fee, Priority Tip, and Gas Limits to calculate exact transaction execution expenses in Gwei, ETH, and USD.
                        </p>
                      </div>

                      {/* Sliders Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="font-bold text-stone-700">Gas Limit (Units):</span>
                            <span className="text-[#ea580c] font-bold">{gasLimitVal.toLocaleString()}</span>
                          </div>
                          <input
                            type="range"
                            min="21000"
                            max="300000"
                            step="1000"
                            value={gasLimitVal}
                            onChange={(e) => setGasLimitVal(Number(e.target.value))}
                            className="w-full h-2 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-[#ea580c]"
                          />
                          <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                            <span>21k (ETH)</span>
                            <span>65k (ERC-20)</span>
                            <span>150k+ (DEX)</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="font-bold text-stone-700">Base Fee:</span>
                            <span className="text-[#ea580c] font-bold">{baseFeeGwei} Gwei</span>
                          </div>
                          <input
                            type="range"
                            min="5"
                            max="150"
                            value={baseFeeGwei}
                            onChange={(e) => setBaseFeeGwei(Number(e.target.value))}
                            className="w-full h-2 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-[#ea580c]"
                          />
                          <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                            <span>5 (Calm)</span>
                            <span>40 (Normal)</span>
                            <span>150 (Spike)</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="font-bold text-stone-700">Priority Fee (Tip):</span>
                            <span className="text-[#ea580c] font-bold">{priorityFeeGwei} Gwei</span>
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="30"
                            value={priorityFeeGwei}
                            onChange={(e) => setPriorityFeeGwei(Number(e.target.value))}
                            className="w-full h-2 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-[#ea580c]"
                          />
                          <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                            <span>1 Gwei</span>
                            <span>5 Gwei</span>
                            <span>30 Gwei (Urgent)</span>
                          </div>
                        </div>
                      </div>

                      {/* Calculations Output */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-center">
                          <span className="text-xs font-mono text-stone-500 uppercase block">Effective Gas Price</span>
                          <span className="text-xl font-bold font-mono text-stone-900 mt-1 block">
                            {effectiveGasPrice} Gwei
                          </span>
                          <span className="text-[11px] text-stone-400 font-mono">
                            Base ({baseFeeGwei}) + Tip ({priorityFeeGwei})
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-center">
                          <span className="text-xs font-mono text-stone-500 uppercase block">Total Fee (ETH)</span>
                          <span className="text-xl font-bold font-mono text-emerald-600 mt-1 block">
                            {totalFeeEth} ETH
                          </span>
                          <span className="text-[11px] text-stone-400 font-mono">
                            {gasLimitVal.toLocaleString()} &times; {effectiveGasPrice} Gwei
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-center">
                          <span className="text-xs font-mono text-stone-500 uppercase block">Fiat Equivalent</span>
                          <span className="text-xl font-bold font-mono text-[#ea580c] mt-1 block">
                            ${totalFeeUsd} USD
                          </span>
                          <span className="text-[11px] text-stone-400 font-mono">
                            Assumes ETH @ $2,800
                          </span>
                        </div>
                      </div>

                      {/* Simulated Receipt Preview */}
                      <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                        <div className="flex items-center justify-between text-amber-400">
                          <span className="font-bold">// Simulated Transaction Receipt (eth_getTransactionReceipt)</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px]">
                            Status: 1 (SUCCESS)
                          </span>
                        </div>
                        <pre className="text-stone-300 text-[10px] leading-relaxed overflow-x-auto">
{`{
  "transactionHash": "0x4a9b...c821",
  "blockNumber": 21154832,
  "gasUsed": "${Math.floor(gasLimitVal * 0.92).toLocaleString()}",
  "effectiveGasPrice": "${effectiveGasPrice}000000000 Wei (${effectiveGasPrice} Gwei)",
  "status": "0x1",
  "from": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
  "to": "0xYourDeployedTokenAddress"
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
'''
