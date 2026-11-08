# projectx/generator_mod13/gen_theory.py
"""
Generates Parts 1 through 16 for Module 13: Web3.js, Ethers.js & Viem
Clean React JSX with zero information loss, structured cards, comparison tables, code tabs, and diagrams.
"""

def get_theory_code():
    return '''
<section className="space-y-12">
  {/* THEORY SECTION: PARTS 1 - 16 */}

  {/* PART 1: BLOCKCHAIN INTERACTION FROM JAVASCRIPT */}
  <div id="part-1" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 1</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Blockchain Interaction from JavaScript</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">1.1 Why JavaScript Is Used in Blockchain Development</h3>
        <p>
          JavaScript is the lingua franca of decentralized applications (dApps) because the vast majority of end-user Web3 interactions take place through web browsers. Modern web frontends connect decentralized cryptographic backend networks with intuitive graphical user interfaces.
        </p>
        <p className="mt-3">
          A typical decentralized application stack comprises six interconnected tiers:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs uppercase mb-1">Tier 1: Frontend UI</span>
            <span className="text-sm font-medium">React, Next.js, Vue, or Svelte component hierarchy</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs uppercase mb-1">Tier 2: Logic Layer</span>
            <span className="text-sm font-medium">JavaScript or TypeScript application state &amp; async hooks</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs uppercase mb-1">Tier 3: User Wallet</span>
            <span className="text-sm font-medium">MetaMask, Rainbow, Coinbase Wallet (EIP-1193 signer)</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs uppercase mb-1">Tier 4: Smart Contracts</span>
            <span className="text-sm font-medium">Solidity / Vyper contracts deployed to EVM addresses</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs uppercase mb-1">Tier 5: Ethereum RPC Node</span>
            <span className="text-sm font-medium">Alchemy, Infura, QuickNode, or local Anvil/Geth node</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs uppercase mb-1">Tier 6: Canonical Network</span>
            <span className="text-sm font-medium">Ethereum Mainnet, Sepolia testnet, Arbitrum, Optimism</span>
          </div>
        </div>
      </div>

      {/* Comparison: Traditional Web2 vs Web3 */}
      <div className="mt-6">
        <h4 className="font-bold text-[#18181b] mb-3">Traditional Web Application vs Web3 Application Architecture</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-3 border border-[#e7e3da] font-bold">Dimension</th>
                <th className="p-3 border border-[#e7e3da] font-bold text-blue-700">Traditional Web2 Architecture</th>
                <th className="p-3 border border-[#e7e3da] font-bold text-[#ea580c]">Decentralized Web3 Architecture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#e7e3da] font-semibold">Data &amp; State Flow</td>
                <td className="p-3 border border-[#e7e3da]">Frontend &rarr; REST / GraphQL API &rarr; Centralized DB (PostgreSQL, Mongo)</td>
                <td className="p-3 border border-[#e7e3da]">Frontend &rarr; Wallet / RPC Node &rarr; Smart Contract &rarr; Blockchain State</td>
              </tr>
              <tr className="bg-[#fbfaf8]">
                <td className="p-3 border border-[#e7e3da] font-semibold">User Authentication</td>
                <td className="p-3 border border-[#e7e3da]">Username / Password, OAuth2 (Google/GitHub), JWT Session Cookies</td>
                <td className="p-3 border border-[#e7e3da]">Public-Key Cryptography (ECDSA secp256k1 signature via EIP-1193 / EIP-4361 SIWE)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#e7e3da] font-semibold">State Mutation Authorization</td>
                <td className="p-3 border border-[#e7e3da]">Centralized backend server verifies session, mutates SQL database rows directly</td>
                <td className="p-3 border border-[#e7e3da]">User signs cryptographic transaction with private key; consensus network verifies validity</td>
              </tr>
              <tr className="bg-[#fbfaf8]">
                <td className="p-3 border border-[#e7e3da] font-semibold">Trust &amp; Verification Model</td>
                <td className="p-3 border border-[#e7e3da]">Users must trust the service operator with data integrity and custody</td>
                <td className="p-3 border border-[#e7e3da]">Trustless execution: smart contract code is deterministic, audited, and immutable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
        <h5 className="font-bold text-amber-900 text-sm flex items-center gap-2">
          <span>&#9888;</span> Fundamental Web3 Architecture Rule
        </h5>
        <p className="text-amber-800 text-xs sm:text-sm mt-1">
          A blockchain frontend <strong>never has direct authority</strong> to modify blockchain state. It cannot write to the database like a Web2 server. Any state-changing operation requires a transaction explicitly signed by an authorized private key (usually via MetaMask/wallet), submitted to an RPC node, validated by the EVM, and confirmed by consensus validators.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">1.2 Web3 Application Architecture Breakdown</h3>
        <p>
          Every JavaScript library (Web3.js, Ethers.js, Viem) acts as an <em>orchestrator</em> between the user, the wallet signer, and the blockchain RPC node:
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2 text-sm">
          <li><strong>Frontend Application:</strong> Collects user input (e.g. transfer recipient and amount) and renders real-time state.</li>
          <li><strong>JavaScript Blockchain Library:</strong> Encodes function calls into EVM bytecode, formats JSON-RPC requests, parses receipts, and decodes returned values.</li>
          <li><strong>Wallet Provider (Signer):</strong> Securely stores the user&apos;s private key in a browser extension or hardware device. Prompts user for explicit signature approval.</li>
          <li><strong>JSON-RPC Node:</strong> Relays signed transactions to the mempool and serves read-only contract state via <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">eth_call</code>.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* PART 2: JSON-RPC FUNDAMENTALS */}
  <div id="part-2" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 2</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">JSON-RPC Fundamentals</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">2.1 What Is JSON-RPC?</h3>
        <p>
          JSON-RPC 2.0 is a stateless, lightweight remote procedure call protocol defined in specification RFC 4627. Ethereum execution clients (Geth, Nethermind, Besu, Reth) expose their internal APIs over HTTP and WebSocket protocols using JSON-RPC.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs">
          <div className="text-emerald-400 font-bold mb-2">// JSON-RPC Request Example (eth_blockNumber)</div>
          <pre className="whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}`}</pre>
        </div>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs">
          <div className="text-cyan-400 font-bold mb-2">// JSON-RPC Response Example (Hexadecimal)</div>
          <pre className="whitespace-pre-wrap">{`{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x123456"
}
// JavaScript Conversion:
const blockNum = parseInt("0x123456", 16);
console.log(blockNum); // 1193046`}</pre>
        </div>
      </div>

      {/* JSON-RPC Fields Table */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2">JSON-RPC 2.0 Message Structure</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Field</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Type</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-semibold">jsonrpc</td><td className="p-2 border border-[#e7e3da]">string</td><td className="p-2 border border-[#e7e3da]">Must be exactly <code className="text-xs font-mono">&quot;2.0&quot;</code>.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-semibold">method</td><td className="p-2 border border-[#e7e3da]">string</td><td className="p-2 border border-[#e7e3da]">Name of the Ethereum RPC method (e.g. <code className="text-xs font-mono">&quot;eth_getBalance&quot;</code>).</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-semibold">params</td><td className="p-2 border border-[#e7e3da]">array / object</td><td className="p-2 border border-[#e7e3da]">Arguments passed to the RPC method. Hex strings must start with <code className="text-xs font-mono">0x</code>.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-semibold">id</td><td className="p-2 border border-[#e7e3da]">number / string</td><td className="p-2 border border-[#e7e3da]">Unique identifier used to match async responses to their originating requests.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-semibold">result</td><td className="p-2 border border-[#e7e3da]">any</td><td className="p-2 border border-[#e7e3da]">Returned on success. Hex-encoded numbers, hashes, or arrays of log objects.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-semibold">error</td><td className="p-2 border border-[#e7e3da]">object</td><td className="p-2 border border-[#e7e3da]">Returned on failure containing an integer <code className="text-xs font-mono">code</code> and descriptive <code className="text-xs font-mono">message</code>.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 13 Core RPC Methods */}
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">2.2 Core Ethereum JSON-RPC Methods</h3>
        <p className="text-sm mb-3">All high-level libraries (Web3.js, Ethers, Viem) compile down to these canonical RPC calls under the hood:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">RPC Method</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Category</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Standard Parameters</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e7e3da]">
              <tr><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_chainId</td><td>Chain</td><td className="font-mono text-xs">[]</td><td>Returns the chain ID as a hex string (e.g. 0x1 = Mainnet, 0xaa36a7 = Sepolia).</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_blockNumber</td><td>Chain</td><td className="font-mono text-xs">[]</td><td>Returns current head block number of the chain.</td></tr>
              <tr><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_getBalance</td><td>Account</td><td className="font-mono text-xs">[address, &quot;latest&quot;]</td><td>Returns the balance of the given address in Wei.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_getCode</td><td>Contract</td><td className="font-mono text-xs">[address, &quot;latest&quot;]</td><td>Returns runtime bytecode at the address (0x if an EOA).</td></tr>
              <tr><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_getTransactionCount</td><td>Account</td><td className="font-mono text-xs">[address, &quot;latest&quot;]</td><td>Returns account nonce (total outbound transactions).</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_call</td><td>Execution</td><td className="font-mono text-xs">[txObject, &quot;latest&quot;]</td><td>Executes a read-only message call in the EVM without creating a transaction on-chain.</td></tr>
              <tr><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_estimateGas</td><td>Gas</td><td className="font-mono text-xs">[txObject]</td><td>Simulates transaction execution and returns estimated gas units needed.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_sendTransaction</td><td>Signing</td><td className="font-mono text-xs">[txObject]</td><td>Requests an injected node/wallet to sign and broadcast a transaction.</td></tr>
              <tr><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_sendRawTransaction</td><td>Broadcast</td><td className="font-mono text-xs">[signedTxHex]</td><td>Submits a pre-signed, RLP-encoded transaction to the network mempool.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_getTransactionByHash</td><td>Tx</td><td className="font-mono text-xs">[txHash]</td><td>Returns transaction details for the given 32-byte transaction hash.</td></tr>
              <tr><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_getTransactionReceipt</td><td>Receipt</td><td className="font-mono text-xs">[txHash]</td><td>Returns the execution receipt once the transaction has been included in a block.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_getLogs</td><td>Logs</td><td className="font-mono text-xs">[filterObject]</td><td>Returns an array of all event logs matching a specified filter address and topics.</td></tr>
              <tr><td className="p-2 font-mono font-semibold text-[#ea580c]">eth_getBlockByNumber</td><td>Block</td><td className="font-mono text-xs">[blockTag, includeTxs]</td><td>Returns information about a block by number (or &quot;latest&quot;, &quot;finalized&quot;).</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Raw Fetch Code Sample */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2">Example: Raw JSON-RPC Fetch Call from Vanilla JavaScript</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`// Directly calling Ethereum RPC via standard fetch without external dependencies:
async function getEthBalance(address) {
  const response = await fetch("https://eth.llamarpc.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "eth_getBalance",
      params: [address, "latest"]
    })
  });

  const data = await response.json();
  if (data.error) throw new Error(data.error.message);

  // Convert hex Wei to decimal ETH using BigInt:
  const balanceWei = BigInt(data.result);
  const balanceEth = Number(balanceWei) / 1e18;
  return balanceEth;
}

getEthBalance("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045").then(console.log);`}</pre>
        </div>
      </div>
    </div>
  </div>

  {/* PART 3: WEB3.JS ARCHITECTURE */}
  <div id="part-3" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 3</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Web3.js Architecture &amp; Migration</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">3.1 What Is Web3.js?</h3>
        <p>
          Originally developed by the Ethereum Foundation in 2014, <strong>Web3.js</strong> is the historic foundation of JavaScript Ethereum development. It pioneered the concept of providing object-oriented JavaScript interfaces for Ethereum accounts, smart contracts, ABI encoding, transactions, and event subscriptions.
        </p>
      </div>

      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
        <h5 className="font-bold text-red-900 text-sm flex items-center gap-2">
          <span>&#9888;</span> Important Industry Notice: Web3.js Sunset on March 4, 2025
        </h5>
        <p className="text-red-800 text-xs sm:text-sm mt-1">
          Web3.js was officially sunset on <strong>March 4, 2025</strong>. While existing projects running Web3.js v1 or v4 will continue operating and its documentation remains preserved for reference, <strong>it is no longer maintained for active new project development</strong>. Understanding Web3.js remains vital for code review, legacy dApp maintenance, and migrating codebases to modern libraries (Viem and Ethers.js v6).
        </p>
      </div>

      {/* Web3.js Packages Table */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2">Web3.js Modular Packages (v4.x)</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Package Name</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Responsibility</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Typical Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-semibold">web3</td><td className="p-2 border border-[#e7e3da]">Umbrella package</td><td className="p-2 border border-[#e7e3da]">Bundles all sub-packages into a single import.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-semibold">web3-eth</td><td className="p-2 border border-[#e7e3da]">Core Ethereum interaction</td><td className="p-2 border border-[#e7e3da]">Block queries, gas estimation, balance lookups, and tx broadcast.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-semibold">web3-eth-accounts</td><td className="p-2 border border-[#e7e3da]">Local keystores &amp; signing</td><td className="p-2 border border-[#e7e3da]">Generating private keys, signing messages, decrypting V3 keystores.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-semibold">web3-eth-contract</td><td className="p-2 border border-[#e7e3da]">Contract abstractions</td><td className="p-2 border border-[#e7e3da]">Calling ABI methods and listening to contract events.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-semibold">web3-eth-abi</td><td className="p-2 border border-[#e7e3da]">ABI encoding/decoding</td><td className="p-2 border border-[#e7e3da]">Encoding function signatures and decoding return hex strings.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-semibold">web3-utils</td><td className="p-2 border border-[#e7e3da]">Data conversion utilities</td><td className="p-2 border border-[#e7e3da]"><code className="text-xs font-mono">fromWei</code>, <code className="text-xs font-mono">toWei</code>, <code className="text-xs font-mono">keccak256</code>, hex formatting.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Web3.js Code Samples */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2">Web3.js Code Patterns (Reference &amp; Migration)</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`import { Web3 } from "web3";

// 1. Initialize client:
const web3 = new Web3("https://eth.llamarpc.com");

// 2. Query block and balance:
const blockNumber = await web3.eth.getBlockNumber();
const balanceWei = await web3.eth.getBalance("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
console.log("Balance in ETH:", web3.utils.fromWei(balanceWei, "ether"));

// 3. Instantiate Contract:
const abi = [{ "inputs": [], "name": "totalSupply", "outputs": [{ "type": "uint256" }], "stateMutability": "view", "type": "function" }];
const contract = new web3.eth.Contract(abi, "0xYourTokenContractAddress");

// Notice the legacy .methods.fnName().call() syntax:
const supply = await contract.methods.totalSupply().call();
console.log("Total Supply:", supply);`}</pre>
        </div>
      </div>
    </div>
  </div>

  {/* PART 4: ETHERS.JS ARCHITECTURE */}
  <div id="part-4" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 4</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Ethers.js Architecture</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">4.1 What Is Ethers.js?</h3>
        <p>
          <strong>Ethers.js</strong> is a compact, complete, and battle-tested JavaScript/TypeScript library designed by Richard Moore. In <strong>v6</strong>, Ethers replaced its custom <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">BigNumber</code> class with native JavaScript <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">BigInt</code> and introduced a clean, modular class hierarchy.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-[#18181b] mb-2">4.2 The Six Pillars of Ethers.js</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs">1. Provider</span>
            <span className="text-xs text-[#52525b]">Read-only connection to an Ethereum node. Fetches state, blocks, and receipts.</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs">2. Signer</span>
            <span className="text-xs text-[#52525b]">Cryptographic account interface. Signs transactions and EIP-712 messages.</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs">3. Contract</span>
            <span className="text-xs text-[#52525b]">Object abstraction wrapping an address, ABI, and Provider/Signer runner.</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs">4. Interface</span>
            <span className="text-xs text-[#52525b]">Low-level ABI encoding, decoding, selector calculation, and error parsing.</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs">5. TransactionResponse</span>
            <span className="text-xs text-[#52525b]">Submitted transaction in flight. Provides <code className="font-mono">tx.hash</code> and <code className="font-mono">tx.wait()</code>.</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block text-xs">6. TransactionReceipt</span>
            <span className="text-xs text-[#52525b]">Execution record after block inclusion: gas used, logs, and status (1 or 0).</span>
          </div>
        </div>
      </div>

      {/* Provider vs Signer Table */}
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">4.3 Provider vs. Signer Deep Dive</h3>
        <p className="text-sm mb-3">Understanding the strict architectural boundary between a Provider and a Signer is essential in Web3:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Property</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold text-blue-700">Provider (Read-Only)</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold text-[#ea580c]">Signer (Write &amp; Authorize)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-[#e7e3da] font-semibold">Primary Purpose</td>
                <td className="p-2 border border-[#e7e3da]">Read canonical state from blockchain nodes</td>
                <td className="p-2 border border-[#e7e3da]">Authorize transactions &amp; sign cryptographic payloads</td>
              </tr>
              <tr className="bg-[#fbfaf8]">
                <td className="p-2 border border-[#e7e3da] font-semibold">Private Key Access</td>
                <td className="p-2 border border-[#e7e3da]">No access to any private key</td>
                <td className="p-2 border border-[#e7e3da]">Holds private key or delegates to wallet (MetaMask)</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#e7e3da] font-semibold">Gas Cost to User</td>
                <td className="p-2 border border-[#e7e3da]">Zero gas (executed locally via <code className="font-mono text-xs">eth_call</code>)</td>
                <td className="p-2 border border-[#e7e3da]">Consumes gas (mined into blocks)</td>
              </tr>
              <tr className="bg-[#fbfaf8]">
                <td className="p-2 border border-[#e7e3da] font-semibold">Key Methods</td>
                <td className="p-2 border border-[#e7e3da] font-mono text-xs">getBlockNumber(), getBalance(), call()</td>
                <td className="p-2 border border-[#e7e3da] font-mono text-xs">sendTransaction(), signMessage(), getAddress()</td>
              </tr>
              <tr>
                <td className="p-2 border border-[#e7e3da] font-semibold">Initialization</td>
                <td className="p-2 border border-[#e7e3da] font-mono text-xs">new ethers.JsonRpcProvider(rpcUrl)</td>
                <td className="p-2 border border-[#e7e3da] font-mono text-xs">await browserProvider.getSigner()</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Sample */}
      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <pre className="whitespace-pre-wrap">{`import { ethers } from "ethers";

// 1. Read-only Provider (JSON-RPC):
const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");
const block = await provider.getBlockNumber();

// 2. Browser Signer via MetaMask (BrowserProvider):
if (window.ethereum) {
  const browserProvider = new ethers.BrowserProvider(window.ethereum);
  const signer = await browserProvider.getSigner();
  const userAddress = await signer.getAddress();
  console.log("Connected Signer:", userAddress);
}`}</pre>
      </div>
    </div>
  </div>

  {/* PART 5: ABI ENCODING AND DECODING */}
  <div id="part-5" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 5</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">ABI Encoding &amp; Decoding</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">5.1 What Is an ABI?</h3>
        <p>
          The <strong>Application Binary Interface (ABI)</strong> is the standardized specification defining how binary data is passed to and from EVM smart contracts. Because the EVM only understands raw bytecode, JavaScript libraries use the ABI to serialize structured arguments into hexadecimal <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">calldata</code> and deserialize raw return bytes into high-level types.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">5.2 Function Selectors and Calldata Structure</h3>
        <p>
          When calling a contract method, the first 4 bytes of calldata is the <strong>Function Selector</strong>, calculated as:
        </p>
        <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] font-mono text-xs sm:text-sm my-2">
          Function Selector = keccak256(&quot;transfer(address,uint256)&quot;).slice(0, 10) &rarr; <span className="text-[#ea580c] font-bold">0xa9059cbb</span>
        </div>
        <p className="text-xs text-[#52525b] mt-1">
          <strong>Crucial Rule:</strong> Notice there are <em>no spaces</em> between argument types in the canonical signature string! <code className="text-red-500 font-mono">&quot;transfer(address, uint256)&quot;</code> produces a completely wrong selector hash.
        </p>
      </div>

      {/* Calldata Visual Breakdown */}
      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-2">
        <div className="text-amber-400 font-bold">// Anatomy of an ERC-20 transfer(0xDead..., 100 * 1e18) Calldata:</div>
        <div>
          <span className="text-[#ea580c] font-bold">0xa9059cbb</span>
          <span className="text-gray-400"> // [Bytes 0..3] 4-Byte Function Selector for transfer(address,uint256)</span>
        </div>
        <div>
          <span className="text-cyan-400">000000000000000000000000000000000000000000000000000000000000dead</span>
          <span className="text-gray-400"> // [Bytes 4..35] Recipient address left-padded to 32 bytes</span>
        </div>
        <div>
          <span className="text-emerald-400">0000000000000000000000000000000000000000000000056bc75e2d63100000</span>
          <span className="text-gray-400"> // [Bytes 36..67] Amount (100 * 10^18) encoded as uint256</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">5.3 Ethers.js Interface Encoding &amp; Decoding</h3>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`import { ethers } from "ethers";

const iface = new ethers.Interface([
  "function transfer(address recipient, uint256 amount) returns (bool)"
]);

// 1. Encoding Function Data:
const recipient = "0x000000000000000000000000000000000000dEaD";
const amount = ethers.parseUnits("100", 18);
const calldata = iface.encodeFunctionData("transfer", [recipient, amount]);
console.log("Encoded Calldata:", calldata);

// 2. Decoding Function Data:
const decoded = iface.decodeFunctionData("transfer", calldata);
console.log("Decoded Recipient:", decoded[0]);
console.log("Decoded Amount:", ethers.formatUnits(decoded[1], 18));`}</pre>
        </div>
      </div>

      <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl text-xs sm:text-sm text-blue-900">
        <strong>Important Distinction:</strong> ABI encoding is <em>serialization</em>, <strong>not encryption</strong>. Anyone inspecting the mempool or a block explorer can read all parameters, addresses, and transferred values in plaintext.
      </div>
    </div>
  </div>

  {/* PART 6: CONTRACT INSTANCES */}
  <div id="part-6" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 6</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Contract Instances</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">6.1 What Is a Contract Instance?</h3>
        <p>
          A contract instance is a JavaScript abstraction that maps Solidity function signatures to callable JavaScript methods. Every contract instance is built upon a fundamental triad:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-center">
            <span className="font-bold text-[#ea580c] block text-sm mb-1">1. Contract Address</span>
            <span className="text-xs text-[#52525b]">20-byte target on-chain address (<code className="font-mono">0x...</code>)</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-center">
            <span className="font-bold text-[#ea580c] block text-sm mb-1">2. Contract ABI</span>
            <span className="text-xs text-[#52525b]">Human-readable or JSON definition of all functions &amp; events</span>
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-center">
            <span className="font-bold text-[#ea580c] block text-sm mb-1">3. Runner</span>
            <span className="text-xs text-[#52525b]">Provider for read-only calls OR Signer for state writes</span>
          </div>
        </div>
      </div>

      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <pre className="whitespace-pre-wrap">{`import { ethers } from "ethers";

// Human-Readable ABI format in Ethers.js:
const abi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)"
];

const contractAddress = "0xYourTokenContractAddress";
const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");

// Connect with Provider (Read Only):
const tokenReadOnly = new ethers.Contract(contractAddress, abi, provider);

// Connect with Signer (Read + Write):
const signer = await new ethers.BrowserProvider(window.ethereum).getSigner();
const tokenReadWrite = new ethers.Contract(contractAddress, abi, signer);`}</pre>
      </div>
    </div>
  </div>

  {/* PART 7: READING SMART CONTRACT STATE */}
  <div id="part-7" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 7</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Reading Smart Contract State</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">7.1 What Is a Read Operation?</h3>
        <p>
          A read operation executes smart contract logic locally against a node&apos;s current state trie using the <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">eth_call</code> RPC method. It incurs <strong>zero gas cost</strong> to the caller, creates no on-chain transaction hash, and does not require wallet signature popups.
        </p>
      </div>

      {/* Read vs Write Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
          <thead>
            <tr className="bg-[#f6f4ee] text-[#18181b]">
              <th className="p-2.5 border border-[#e7e3da] font-bold">Dimension</th>
              <th className="p-2.5 border border-[#e7e3da] font-bold text-emerald-700">Read Operation (eth_call)</th>
              <th className="p-2.5 border border-[#e7e3da] font-bold text-amber-700">Write Transaction (eth_sendRawTransaction)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 border border-[#e7e3da] font-semibold">State Mutation</td><td className="p-2 border border-[#e7e3da]">Purely read-only; no state changes persisted</td><td className="p-2 border border-[#e7e3da]">Mutates persistent storage slots in Ethereum state</td></tr>
            <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Gas Cost</td><td className="p-2 border border-[#e7e3da]">Free (costs zero ETH to user)</td><td className="p-2 border border-[#e7e3da]">Requires ETH to pay Base Fee + Priority Fee</td></tr>
            <tr><td className="p-2 border border-[#e7e3da] font-semibold">Wallet Approval</td><td className="p-2 border border-[#e7e3da]">None; executed silently by RPC node</td><td className="p-2 border border-[#e7e3da]">User must confirm transaction in wallet modal</td></tr>
            <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Latency</td><td className="p-2 border border-[#e7e3da]">Instant (~100-300ms network round-trip)</td><td className="p-2 border border-[#e7e3da]">Block inclusion time (approx. 12 seconds on L1)</td></tr>
            <tr><td className="p-2 border border-[#e7e3da] font-semibold">Solidity Modifiers</td><td className="p-2 border border-[#e7e3da] font-mono text-xs">view, pure</td><td className="p-2 border border-[#e7e3da] font-mono text-xs">nonpayable, payable</td></tr>
          </tbody>
        </table>
      </div>

      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <pre className="whitespace-pre-wrap">{`// Read Operations in Ethers.js:
const supply = await token.totalSupply();
console.log("Total Supply:", ethers.formatUnits(supply, 18));

const balance = await token.balanceOf("0xUserAddress");
console.log("User Balance:", ethers.formatUnits(balance, 18));

// NFT owner lookup:
const nft = new ethers.Contract(nftAddress, ["function ownerOf(uint256) view returns (address)"], provider);
const owner = await nft.ownerOf(42);
console.log("Token #42 Owner:", owner);`}</pre>
      </div>
    </div>
  </div>

  {/* PART 8: WRITING SMART CONTRACT TRANSACTIONS */}
  <div id="part-8" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 8</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Writing Smart Contract Transactions</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">8.1 What Is a Write Operation?</h3>
        <p>
          A write operation invokes state-modifying smart contract logic (e.g. transfers, approvals, minting, or DAO voting). Write calls require an active Signer to construct, sign, and broadcast an Ethereum transaction to the mempool.
        </p>
      </div>

      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <pre className="whitespace-pre-wrap">{`// Write Transaction Lifecycle with Ethers.js v6:
const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

const token = new ethers.Contract(
  tokenAddress,
  ["function transfer(address to, uint256 amount) returns (bool)"],
  signer
);

// 1. Submit transaction (prompts MetaMask for signature):
const tx = await token.transfer("0xRecipient...", ethers.parseUnits("25.5", 18));
console.log("Broadcasted Tx Hash:", tx.hash);

// 2. Wait for block inclusion (mined receipt):
const receipt = await tx.wait();
console.log("Mined in Block:", receipt.blockNumber);
console.log("Status:", receipt.status === 1 ? "SUCCESS" : "REVERTED");`}</pre>
      </div>

      <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
        <h5 className="font-bold text-amber-900 text-sm flex items-center gap-2">
          <span>&#9888;</span> Critical Web3 Rule: Transaction Hash != Success
        </h5>
        <p className="text-amber-800 text-xs sm:text-sm mt-1">
          Obtaining a transaction hash only proves that the transaction was successfully broadcast to the RPC node. The transaction may still revert due to <code className="font-mono">require()</code> assertions, run out of gas, or remain pending in the mempool indefinitely. <strong>Always inspect the Transaction Receipt (<code className="font-mono">receipt.status === 1</code>)</strong> before confirming operations in application UI!
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">8.2 EIP-1559 Transaction Anatomy</h3>
        <p className="text-sm">Modern Ethereum transactions contain nine fundamental fields:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 font-mono text-xs">
          <div className="p-2 bg-[#f6f4ee] rounded border border-[#e7e3da]"><span className="font-bold text-[#ea580c]">from:</span> Sender address</div>
          <div className="p-2 bg-[#f6f4ee] rounded border border-[#e7e3da]"><span className="font-bold text-[#ea580c]">to:</span> Contract address</div>
          <div className="p-2 bg-[#f6f4ee] rounded border border-[#e7e3da]"><span className="font-bold text-[#ea580c]">value:</span> ETH sent in Wei</div>
          <div className="p-2 bg-[#f6f4ee] rounded border border-[#e7e3da]"><span className="font-bold text-[#ea580c]">nonce:</span> Outbound tx count</div>
          <div className="p-2 bg-[#f6f4ee] rounded border border-[#e7e3da]"><span className="font-bold text-[#ea580c]">gasLimit:</span> Max gas units allowed</div>
          <div className="p-2 bg-[#f6f4ee] rounded border border-[#e7e3da]"><span className="font-bold text-[#ea580c]">maxFeePerGas:</span> Max fee cap (Wei)</div>
          <div className="p-2 bg-[#f6f4ee] rounded border border-[#e7e3da]"><span className="font-bold text-[#ea580c]">maxPriorityFee:</span> Tip for validator</div>
          <div className="p-2 bg-[#f6f4ee] rounded border border-[#e7e3da]"><span className="font-bold text-[#ea580c]">chainId:</span> EIP-155 replay guard</div>
          <div className="p-2 bg-[#f6f4ee] rounded border border-[#e7e3da]"><span className="font-bold text-[#ea580c]">data:</span> Encoded ABI calldata</div>
        </div>
      </div>
    </div>
  </div>

  {/* PART 9: EVENT SUBSCRIPTIONS & LISTENING */}
  <div id="part-9" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 9</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Event Subscriptions &amp; Blockchain Logs</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">9.1 What Is a Smart Contract Event?</h3>
        <p>
          Events in Solidity write data into the EVM&apos;s transaction logs. Smart contracts cannot read logs (they have no EVM opcode for inspecting historical logs), but external frontends, indexers (The Graph), and RPC clients read them via <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">eth_getLogs</code>.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-[#18181b] mb-2">9.2 Event Topics vs. Data</h4>
        <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] font-mono text-xs mb-3">
          event Transfer(address indexed from, address indexed to, uint256 value);
        </div>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li><strong>Topic 0:</strong> Keccak-256 hash of the event signature: <code className="font-mono">keccak256(&quot;Transfer(address,address,uint256)&quot;)</code>.</li>
          <li><strong>Topic 1 &amp; Topic 2:</strong> Up to 3 parameters marked <code className="font-mono text-[#ea580c]">indexed</code> are stored directly in topics, allowing instant hash-based indexing and filtering.</li>
          <li><strong>Data Field:</strong> Non-indexed parameters (e.g. <code className="font-mono">uint256 value</code>) are concatenated and stored in the log data section.</li>
        </ul>
      </div>

      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <pre className="whitespace-pre-wrap">{`// Listening to Events with Ethers.js in React:
useEffect(() => {
  const token = new ethers.Contract(tokenAddress, [
    "event Transfer(address indexed from, address indexed to, uint256 value)"
  ], provider);

  const handleTransfer = (from, to, value, event) => {
    console.log("Transfer detected:", {
      from,
      to,
      amount: ethers.formatUnits(value, 18),
      txHash: event.log.transactionHash
    });
  };

  // Subscribe:
  token.on("Transfer", handleTransfer);

  // CRITICAL: Cleanup listener when React unmounts to prevent memory leaks!
  return () => {
    token.removeAllListeners("Transfer");
  };
}, [tokenAddress]);`}</pre>
      </div>

      {/* HTTP vs WebSocket RPC Table */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2">Transport Comparison: HTTP vs. WebSocket RPC</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Feature</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">HTTP RPC</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold text-[#ea580c]">WebSocket RPC (WSS)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Connection Lifecycle</td><td className="p-2 border border-[#e7e3da]">Stateless, per-request TCP handshakes</td><td className="p-2 border border-[#e7e3da]">Persistent, bi-directional socket</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Event Streaming</td><td className="p-2 border border-[#e7e3da]">Requires frequent polling via <code className="font-mono text-xs">eth_getLogs</code></td><td className="p-2 border border-[#e7e3da]">Instant push notifications via <code className="font-mono text-xs">eth_subscribe</code></td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Reconnection Handling</td><td className="p-2 border border-[#e7e3da]">Simple standard HTTP retries</td><td className="p-2 border border-[#e7e3da]">Requires socket heartbeats and historical backfills</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Infrastructure Cost</td><td className="p-2 border border-[#e7e3da]">Easily cached by CDNs and load balancers</td><td className="p-2 border border-[#e7e3da]">Stateful; higher provider costs and socket quotas</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  {/* PART 10: VIEM ARCHITECTURE */}
  <div id="part-10" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 10</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Viem Architecture &amp; TypeScript Integration</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">10.1 What Is Viem?</h3>
        <p>
          <strong>Viem</strong> is a next-generation TypeScript interface for Ethereum developed by Awmoo (wevm team, creators of Wagmi). It delivers unmatched developer experience through modular functional clients, lightweight tree-shakeable bundles, and compile-time ABI type inference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
          <h4 className="font-bold text-[#18181b] text-sm mb-2">Viem Clients</h4>
          <ul className="text-xs space-y-2">
            <li><strong>Public Client:</strong> Exposes read-only JSON-RPC actions (<code className="font-mono">getBlockNumber</code>, <code className="font-mono">readContract</code>, <code className="font-mono">getLogs</code>).</li>
            <li><strong>Wallet Client:</strong> Wraps accounts to sign data and broadcast transactions (<code className="font-mono">sendTransaction</code>, <code className="font-mono">writeContract</code>).</li>
            <li><strong>Test Client:</strong> Controls local testnets (Anvil/Hardhat) with mining control and state impersonation.</li>
          </ul>
        </div>
        <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
          <h4 className="font-bold text-[#18181b] text-sm mb-2">Viem Transports</h4>
          <ul className="text-xs space-y-2">
            <li><code className="font-mono font-bold text-[#ea580c]">http()</code>: Standard HTTP JSON-RPC endpoint.</li>
            <li><code className="font-mono font-bold text-[#ea580c]">webSocket()</code>: Persistent WebSocket connection for instant subscriptions.</li>
            <li><code className="font-mono font-bold text-[#ea580c]">custom(window.ethereum)</code>: EIP-1193 browser wallet bridge.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">10.4 The Power of &quot;as const&quot; ABI Type Inference</h3>
        <p>
          In Viem, appending <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono font-bold text-[#ea580c]">as const</code> to your ABI definition allows TypeScript to infer exact parameter types and return types:
        </p>
      </div>

      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <pre className="whitespace-pre-wrap">{`import { createPublicClient, createWalletClient, http, custom, parseEther } from "viem";
import { sepolia } from "viem/chains";

// 1. ABI with 'as const' enables full compile-time autocomplete:
const abi = [
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [{ name: "account", type: "address" }],
    outputs: [{ name: "", type: "uint256" }]
  },
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      { name: "recipient", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: [{ name: "", type: "bool" }]
  }
] as const;

// 2. Initialize Clients:
const publicClient = createPublicClient({ chain: sepolia, transport: http() });
const walletClient = createWalletClient({ chain: sepolia, transport: custom(window.ethereum) });

// 3. Type-Safe Read (Viem will error if functionName or args are mistyped):
const balance = await publicClient.readContract({
  address: "0xYourTokenAddress",
  abi,
  functionName: "balanceOf",
  args: ["0xYourWalletAddress"]
});

// 4. Type-Safe Write:
const [account] = await walletClient.getAddresses();
const txHash = await walletClient.writeContract({
  address: "0xYourTokenAddress",
  abi,
  functionName: "transfer",
  args: ["0xRecipientAddress", parseEther("10")],
  account
});`}</pre>
      </div>
    </div>
  </div>

  {/* PART 11: WEB3.JS VS ETHERS.JS VS VIEM */}
  <div id="part-11" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 11</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Comprehensive Library Comparison</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">11.1 Nine-Dimension Architecture Matrix</h3>
        <p className="text-sm mb-3">Compare the three major Ethereum JavaScript ecosystems across every production criterion:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Criterion</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold text-gray-500">Web3.js (Legacy)</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold text-blue-700">Ethers.js (v6)</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold text-[#ea580c]">Viem (Modern Standard)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Primary Paradigm</td><td className="p-2 border border-[#e7e3da]">Monolithic OOP with sub-packages</td><td className="p-2 border border-[#e7e3da]">Class hierarchy (Provider, Signer, Contract)</td><td className="p-2 border border-[#e7e3da]">Functional, composable clients &amp; actions</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">TypeScript Integration</td><td className="p-2 border border-[#e7e3da]">Added post-hoc in v4</td><td className="p-2 border border-[#e7e3da]">Built-in strong typing</td><td className="p-2 border border-[#e7e3da]">TypeScript-first; native <code className="font-mono text-xs">as const</code> ABI inference</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Bundle Size &amp; Tree Shaking</td><td className="p-2 border border-[#e7e3da] text-red-600">Heavy (&gt;300 KB gzipped)</td><td className="p-2 border border-[#e7e3da]">Moderate (~80-120 KB)</td><td className="p-2 border border-[#e7e3da] text-emerald-600 font-semibold">Ultra-lean (~35 KB modular tree-shaken)</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Big Integer Handling</td><td className="p-2 border border-[#e7e3da]">BN.js / BigInt in v4</td><td className="p-2 border border-[#e7e3da]">Native JavaScript <code className="font-mono text-xs">BigInt</code></td><td className="p-2 border border-[#e7e3da]">Native JavaScript <code className="font-mono text-xs">BigInt</code></td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">React Hook Ecosystem</td><td className="p-2 border border-[#e7e3da]">None official</td><td className="p-2 border border-[#e7e3da]">Community hooks (use-ethers)</td><td className="p-2 border border-[#e7e3da] text-[#ea580c] font-semibold">Official engine behind Wagmi &amp; RainbowKit</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Contract Execution Style</td><td className="p-2 border border-[#e7e3da] font-mono text-xs">contract.methods.foo().call()</td><td className="p-2 border border-[#e7e3da] font-mono text-xs">contract.foo()</td><td className="p-2 border border-[#e7e3da] font-mono text-xs">publicClient.readContract(...)</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Wallet Delegation</td><td className="p-2 border border-[#e7e3da]">Direct window.ethereum provider</td><td className="p-2 border border-[#e7e3da]">BrowserProvider / Signer abstraction</td><td className="p-2 border border-[#e7e3da]">custom(window.ethereum) transport</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Execution Speed</td><td className="p-2 border border-[#e7e3da]">Baseline</td><td className="p-2 border border-[#e7e3da]">Fast</td><td className="p-2 border border-[#e7e3da] text-emerald-600 font-semibold">Fastest (optimized micro-serializers)</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">2026 Production Recommendation</td><td className="p-2 border border-[#e7e3da] text-red-600 font-bold">Sunset (Migration only)</td><td className="p-2 border border-[#e7e3da] text-blue-700 font-bold">Production Mature</td><td className="p-2 border border-[#e7e3da] text-[#ea580c] font-bold">Recommended Standard</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">11.2 Architectural Decision Framework</h3>
        <p className="text-sm">When architecting new blockchain software, follow this concrete rule of thumb:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-2 text-sm">
          <li><strong>Choose Viem:</strong> For greenfield React / Next.js applications, TypeScript-first stacks, and when using Wagmi or RainbowKit.</li>
          <li><strong>Choose Ethers.js v6:</strong> For Node.js backend microservices, Hardhat deployment scripts, or when integrating with established Ethers-based libraries.</li>
          <li><strong>Study Web3.js:</strong> When maintaining legacy 2018-2023 codebases or planning migrations to Viem.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* PART 12: WALLET INTEGRATION */}
  <div id="part-12" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 12</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Wallet Integration &amp; EIP-1193</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">12.1 EIP-1193 Ethereum Provider Standard</h3>
        <p>
          Browser extensions like MetaMask inject a global JavaScript object at <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">window.ethereum</code> complying with the <strong>EIP-1193</strong> standard. It provides a single universal interface method: <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">ethereum.request({`{ method, params }`})</code>.
        </p>
      </div>

      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <pre className="whitespace-pre-wrap">{`// Robust MetaMask Connection with Event Listeners:
async function connectWallet() {
  if (!window.ethereum) {
    throw new Error("MetaMask not detected! Please install MetaMask.");
  }

  // 1. Request user permission to connect account:
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
  });
  const activeAccount = accounts[0];

  // 2. Query current Chain ID:
  const chainIdHex = await window.ethereum.request({ method: "eth_chainId" });
  const chainId = parseInt(chainIdHex, 16);
  console.log("Connected:", activeAccount, "on Chain:", chainId);

  return { activeAccount, chainId };
}

// React Lifecycle Event Listeners:
useEffect(() => {
  if (!window.ethereum) return;

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      console.log("User disconnected wallet");
    } else {
      console.log("Switched account to:", accounts[0]);
    }
  };

  const handleChainChanged = (chainIdHex) => {
    // Recommended by MetaMask docs: reload page or reset state on chain change:
    console.log("Switched network to:", parseInt(chainIdHex, 16));
    window.location.reload();
  };

  window.ethereum.on("accountsChanged", handleAccountsChanged);
  window.ethereum.on("chainChanged", handleChainChanged);

  // Clean up listeners on unmount:
  return () => {
    window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
    window.ethereum.removeListener("chainChanged", handleChainChanged);
  };
}, []);`}</pre>
      </div>
    </div>
  </div>

  {/* PART 13: GAS ESTIMATION */}
  <div id="part-13" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 13</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Gas Estimation &amp; EIP-1559 Economics</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">13.1 EIP-1559 Fee Calculation Formula</h3>
        <p>
          Since the London Hardfork (EIP-1559), transaction fees are calculated dynamically based on network congestion:
        </p>
        <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] font-mono text-xs sm:text-sm my-3 space-y-1">
          <div>Transaction Fee = Gas Used &times; Effective Gas Price</div>
          <div className="text-[#52525b]">Effective Gas Price = min(baseFee + priorityFee, maxFeePerGas)</div>
        </div>
        <p className="text-sm">
          <strong>Base Fee:</strong> Automatically set by protocol based on prior block target utilization. <em>Burned permanently</em>.<br />
          <strong>Priority Fee (Tip):</strong> Discretionary tip paid directly to the validator to incentivize rapid inclusion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs">
          <div className="text-blue-400 font-bold mb-2">// Ethers.js v6 Gas Estimation</div>
          <pre className="whitespace-pre-wrap">{`const estimatedGas = await contract
  .transfer
  .estimateGas(recipient, amount);

// Add 20% safety margin for fluctuating contract state:
const safeGasLimit = (estimatedGas * 120n) / 100n;`}</pre>
        </div>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs">
          <div className="text-[#ea580c] font-bold mb-2">// Viem Gas Estimation</div>
          <pre className="whitespace-pre-wrap">{`const estimatedGas = await publicClient
  .estimateContractGas({
    address: tokenAddress,
    abi,
    functionName: "transfer",
    args: [recipient, amount],
    account
  });`}</pre>
        </div>
      </div>

      <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900">
        <strong>Why Gas Estimation Is Not a Guarantee:</strong> Between estimating gas locally and the transaction being mined, blockchain state can change (e.g. Uniswap price moves, or another user takes an NFT). Always apply a 10%–20% safety buffer to prevent out-of-gas reverts.
      </div>
    </div>
  </div>

  {/* PART 14: TRANSACTION RECEIPT HANDLING */}
  <div id="part-14" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 14</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Transaction Receipt Handling</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">14.1 Anatomy of a Transaction Receipt</h3>
        <p>
          A transaction receipt is generated only after a transaction has been successfully included in an execution block. Receipts provide conclusive diagnostic data:
        </p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2 border border-[#e7e3da] font-bold">Field</th>
                <th className="p-2 border border-[#e7e3da] font-bold">Meaning</th>
                <th className="p-2 border border-[#e7e3da] font-bold">Significance</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-semibold">status</td><td className="p-2 border border-[#e7e3da]">1 (Success) or 0 (Reverted)</td><td className="p-2 border border-[#e7e3da] font-semibold text-emerald-700">1 = execution succeeded; 0 = state reverted</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-semibold">blockNumber</td><td className="p-2 border border-[#e7e3da]">Block index</td><td className="p-2 border border-[#e7e3da]">Used to calculate current confirmation count</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-semibold">gasUsed</td><td className="p-2 border border-[#e7e3da]">Actual gas units consumed</td><td className="p-2 border border-[#e7e3da]">Multiply by effectiveGasPrice to get total ETH paid</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-semibold">logs</td><td className="p-2 border border-[#e7e3da]">Array of emitted event logs</td><td className="p-2 border border-[#e7e3da]">Contains token transfers, mint IDs, and internal events</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-semibold">contractAddress</td><td className="p-2 border border-[#e7e3da]">Deployed contract address</td><td className="p-2 border border-[#e7e3da]">Present only if the transaction was a contract deployment</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs">
          <div className="text-blue-400 font-bold mb-2">// Ethers.js v6 Receipt Handling</div>
          <pre className="whitespace-pre-wrap">{`const tx = await contract.transfer(to, amt);
const receipt = await tx.wait(1); // wait for 1 confirmation
if (receipt.status === 1) {
  console.log("Success! Gas used:", receipt.gasUsed);
} else {
  console.error("Transaction reverted on-chain");
}`}</pre>
        </div>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs">
          <div className="text-[#ea580c] font-bold mb-2">// Viem Receipt Handling</div>
          <pre className="whitespace-pre-wrap">{`const hash = await walletClient.writeContract(...);
const receipt = await publicClient
  .waitForTransactionReceipt({ hash });
if (receipt.status === "success") {
  console.log("Confirmed in block:", receipt.blockNumber);
}`}</pre>
        </div>
      </div>
    </div>
  </div>

  {/* PART 15: RPC PROVIDER CONFIGURATION */}
  <div id="part-15" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 15</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">RPC Provider Configuration &amp; Security</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">15.1 Choosing an Infrastructure Provider</h3>
        <p>
          RPC providers run scalable, globally distributed clusters of Ethereum execution and consensus clients. Without an RPC provider, web browsers cannot query blockchain data.
        </p>
      </div>

      {/* Provider Matrix */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
          <thead>
            <tr className="bg-[#f6f4ee] text-[#18181b]">
              <th className="p-2.5 border border-[#e7e3da] font-bold">Provider Tier</th>
              <th className="p-2.5 border border-[#e7e3da] font-bold">Examples</th>
              <th className="p-2.5 border border-[#e7e3da] font-bold">Pros</th>
              <th className="p-2.5 border border-[#e7e3da] font-bold">Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-[#e7e3da] font-semibold">Public Community RPCs</td>
              <td className="p-2 border border-[#e7e3da]">LlamaNodes, Cloudflare, Ankr Public</td>
              <td className="p-2 border border-[#e7e3da]">Zero sign-up, free, ideal for quick testing</td>
              <td className="p-2 border border-[#e7e3da] text-red-600">Strict rate limits, frequent 429 errors, no SLA</td>
            </tr>
            <tr className="bg-[#fbfaf8]">
              <td className="p-2 border border-[#e7e3da] font-semibold">Commercial Hosted Nodes</td>
              <td className="p-2 border border-[#e7e3da]">Alchemy, Infura, QuickNode</td>
              <td className="p-2 border border-[#e7e3da]">High throughput, WebSocket streams, archive state</td>
              <td className="p-2 border border-[#e7e3da]">Usage-based fees, centralized infrastructure risk</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#e7e3da] font-semibold">Self-Hosted Dedicated Nodes</td>
              <td className="p-2 border border-[#e7e3da]">Geth + Lighthouse on AWS / Bare Metal</td>
              <td className="p-2 border border-[#e7e3da]">Complete sovereign privacy, zero rate limits</td>
              <td className="p-2 border border-[#e7e3da]">Requires 2TB+ NVMe SSD, DevOps maintenance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
        <h5 className="font-bold text-red-900 text-sm flex items-center gap-2">
          <span>&#9888;</span> Security Warning: Never Expose Private RPC Keys in Frontend Bundles
        </h5>
        <p className="text-red-800 text-xs sm:text-sm mt-1">
          Variables prefixed with <code className="font-mono">VITE_</code> in Vite or <code className="font-mono">NEXT_PUBLIC_</code> in Next.js are compiled directly into public client JavaScript. Anyone can inspect your bundle and steal your Alchemy/Infura API keys. For production apps:
        </p>
        <ul className="list-disc pl-5 mt-2 text-xs text-red-800 space-y-1">
          <li>Configure allowlisted HTTP origins and contract address restrictions in your Alchemy dashboard.</li>
          <li>Route requests through a backend Next.js API route / proxy that keeps private credentials server-side.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* PART 16: ERROR HANDLING */}
  <div id="part-16" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 16</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Error Handling in Production</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">16.1 Canonical EIP-1193 &amp; EVM Error Codes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Error Code</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Category</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Meaning</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Recommended UX Remediation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-bold text-red-600">4001</td><td>User Rejection</td><td>User clicked &quot;Reject&quot; in MetaMask popup</td><td>Show friendly banner: &quot;Transaction canceled by user.&quot;</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-bold text-red-600">4900</td><td>Provider</td><td>Wallet is disconnected from all blockchain networks</td><td>Prompt user to unlock and reconnect MetaMask.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-bold text-red-600">4901</td><td>Chain Disconnect</td><td>Wallet is disconnected from the requested chain</td><td>Trigger <code className="font-mono text-xs">wallet_switchEthereumChain</code> modal.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-bold text-amber-600">INSUFFICIENT_FUNDS</td><td>Balance</td><td>Account lacks enough ETH for amount + gas fee</td><td>Display current ETH deficit and testnet faucet link.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-mono font-bold text-amber-600">CALL_EXCEPTION</td><td>Contract Revert</td><td>Solidity <code className="font-mono text-xs">require()</code> or custom error reverted</td><td>Decode revert string from error data and show reason.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-mono font-bold text-gray-600">NONCE_EXPIRED</td><td>Mempool</td><td>A transaction with the same nonce was already mined</td><td>Refetch latest nonce via <code className="font-mono text-xs">getTransactionCount</code>.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <pre className="whitespace-pre-wrap">{`// Defensive Production Transaction Handler:
async function handleSafeTransaction(contractAction) {
  try {
    const tx = await contractAction();
    return await tx.wait();
  } catch (err) {
    if (err.code === 4001) {
      alert("You rejected the transaction in your wallet.");
    } else if (err.code === "INSUFFICIENT_FUNDS") {
      alert("Insufficient ETH to cover gas fees. Please fund your wallet.");
    } else if (err.data) {
      // Decode custom Solidity error:
      alert("Contract reverted: " + (err.reason || err.message));
    } else {
      console.error("Unhandled RPC failure:", err);
      alert("An unexpected network error occurred. Please try again.");
    }
    return null;
  }
}`}</pre>
      </div>
    </div>
  </div>

</section>
'''
