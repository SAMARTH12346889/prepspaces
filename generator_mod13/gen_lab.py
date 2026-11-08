# projectx/generator_mod13/gen_lab.py
"""
Generates Part 17 (Practical Lab) and Part 18 (Advanced Project Assignment) for Module 13.
Zero information loss, full code implementation, and 100-mark evaluation rubric.
"""

def get_lab_code():
    return r'''
<section className="space-y-12">
  {/* PRACTICAL LAB & PROJECT ASSIGNMENT: PARTS 17 - 18 */}

  {/* PART 17: PRACTICAL LAB */}
  <div id="part-17" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 17</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Practical Lab: Build a React + TypeScript + Viem dApp</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">Hands-on Web3 Engineering: Sepolia Token Dashboard</h3>
        <p>
          In this end-to-end laboratory, you will build a production-grade React application using <strong>TypeScript</strong> and <strong>Viem</strong> that communicates with an ERC-20 token contract deployed on the Sepolia Ethereum testnet.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3 text-xs font-semibold">
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-center">&#10003; MetaMask EIP-1193 Connect</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-center">&#10003; Read Token Supply &amp; Balance</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-center">&#10003; Write Token Transfers</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-center">&#10003; Query Event Logs (getLogs)</div>
        </div>
      </div>

      {/* Step 1: Project Setup */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 1 — Project Initialization &amp; Dependency Installation</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`# Initialize React + TypeScript application with Vite:
npm create vite@latest web3-token-dashboard -- --template react-ts
cd web3-token-dashboard

# Install Viem (zero other dependencies required):
npm install viem`}</pre>
        </div>
      </div>

      {/* Step 2: Contract ABI Definition */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 2 — Define Typed Contract ABI (<code className="font-mono text-xs">src/abi.ts</code>)</h4>
        <p className="text-xs text-[#52525b] mb-2">
          Notice the <code className="font-mono font-bold text-[#ea580c]">as const</code> assertion at the end of the array. This enables compile-time type inference for function names, parameter lists, and return types in Viem:
        </p>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`// src/abi.ts
export const TOKEN_ABI = [
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "string" }]
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "string" }]
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint8" }]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "uint256" }]
  },
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
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false }
    ]
  }
] as const;`}</pre>
        </div>
      </div>

      {/* Step 3: Viem Clients */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 3 — Viem Client Setup (<code className="font-mono text-xs">src/client.ts</code>)</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`// src/client.ts
import { createPublicClient, createWalletClient, http, custom } from "viem";
import { sepolia } from "viem/chains";

// Public Client for read-only RPC operations:
export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http("https://ethereum-sepolia-rpc.publicnode.com")
});

// Wallet Client for injected MetaMask EIP-1193 signer:
export const walletClient = typeof window !== "undefined" && window.ethereum
  ? createWalletClient({
      chain: sepolia,
      transport: custom(window.ethereum)
    })
  : null;`}</pre>
        </div>
      </div>

      {/* Step 4: React App Implementation */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 4 — Complete React Application (<code className="font-mono text-xs">src/App.tsx</code>)</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto max-h-[550px]">
          <pre className="whitespace-pre-wrap">{`// src/App.tsx
import React, { useState } from "react";
import { parseUnits, formatUnits } from "viem";
import { TOKEN_ABI } from "./abi";
import { publicClient, walletClient } from "./client";

// Sepolia test token contract address:
const TOKEN_ADDRESS = "0x779877A7B0D9E8603169DdbD7836e478b4624789"; // Sepolia LINK

export default function App() {
  const [account, setAccount] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");
  const [supply, setSupply] = useState<string>("0");
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [status, setStatus] = useState<string>("Idle");
  const [loading, setLoading] = useState<boolean>(false);

  // 1. Connect MetaMask Wallet:
  async function connectWallet() {
    if (!walletClient) {
      alert("Please install MetaMask!");
      return;
    }
    try {
      const [address] = await walletClient.requestAddresses();
      setAccount(address);
      setStatus(\`Connected: \${address.slice(0, 6)}...\${address.slice(-4)}\`);
      await loadTokenData(address);
    } catch (err: any) {
      setStatus(\`Connection error: \${err.message}\`);
    }
  }

  // 2. Read Smart Contract State:
  async function loadTokenData(userAddress?: string) {
    const target = userAddress || account;
    try {
      setLoading(true);
      // Fetch Total Supply:
      const rawSupply = await publicClient.readContract({
        address: TOKEN_ADDRESS,
        abi: TOKEN_ABI,
        functionName: "totalSupply"
      });
      setSupply(formatUnits(rawSupply, 18));

      // Fetch User Balance if connected:
      if (target) {
        const rawBalance = await publicClient.readContract({
          address: TOKEN_ADDRESS,
          abi: TOKEN_ABI,
          functionName: "balanceOf",
          args: [target as \`0x\${string}\`]
        });
        setBalance(formatUnits(rawBalance, 18));
      }
      setStatus("Token data updated");
    } catch (err: any) {
      setStatus(\`Read error: \${err.message}\`);
    } finally {
      setLoading(false);
    }
  }

  // 3. Write Contract Transaction (Transfer):
  async function sendTokens() {
    if (!walletClient || !account) {
      alert("Connect wallet first!");
      return;
    }
    if (!recipient || !amount) {
      alert("Please provide valid recipient and amount");
      return;
    }

    try {
      setStatus("Awaiting signature in MetaMask...");
      const parsedAmount = parseUnits(amount, 18);

      const hash = await walletClient.writeContract({
        address: TOKEN_ADDRESS,
        abi: TOKEN_ABI,
        functionName: "transfer",
        args: [recipient as \`0x\${string}\`, parsedAmount],
        account: account as \`0x\${string}\`
      });

      setStatus(\`Broadcasting transaction: \${hash.slice(0, 10)}...\`);

      // 4. Wait for mined receipt:
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      if (receipt.status === "success") {
        setStatus(\`Transaction Confirmed in Block #\${receipt.blockNumber}!\`);
        await loadTokenData(account);
        setAmount("");
      } else {
        setStatus("Transaction Reverted on-chain!");
      }
    } catch (err: any) {
      if (err.code === 4001) {
        setStatus("Transaction was rejected by user in MetaMask.");
      } else {
        setStatus(\`Transfer failed: \${err.message}\`);
      }
    }
  }

  return (
    <div style={{ maxWidth: 640, margin: "40px auto", padding: 24, fontFamily: "sans-serif" }}>
      <h2>PrepSpaces Web3 Token Dashboard</h2>
      
      {!account ? (
        <button onClick={connectWallet} style={{ padding: "10px 20px", cursor: "pointer" }}>
          Connect MetaMask
        </button>
      ) : (
        <div style={{ background: "#f4f4f5", padding: 16, borderRadius: 8 }}>
          <p><strong>Account:</strong> {account}</p>
          <p><strong>Balance:</strong> {balance} TOKENS</p>
          <p><strong>Total Supply:</strong> {supply} TOKENS</p>
          <button onClick={() => loadTokenData()} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh State"}
          </button>
        </div>
      )}

      <div style={{ marginTop: 24, borderTop: "1px solid #ddd", paddingTop: 16 }}>
        <h3>Transfer Tokens</h3>
        <input
          placeholder="0xRecipientAddress..."
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <input
          placeholder="Amount (e.g. 5.0)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 8 }}
        />
        <button onClick={sendTokens} style={{ padding: "10px 20px", cursor: "pointer" }}>
          Send Tokens
        </button>
      </div>

      <div style={{ marginTop: 16, padding: 12, background: "#e0f2fe", borderRadius: 6 }}>
        <strong>Status:</strong> {status}
      </div>
    </div>
  );
}`}</pre>
        </div>
      </div>

      {/* Step 5 & 6: Verification & Event Logs */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 6 — Query Historical Event Logs (<code className="font-mono text-xs">getLogs</code>)</h4>
        <p className="text-xs text-[#52525b] mb-2">Extend the dashboard to index and display incoming and outgoing transfers:</p>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`// Querying Transfer events with Viem:
const logs = await publicClient.getLogs({
  address: TOKEN_ADDRESS,
  event: {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "value", type: "uint256", indexed: false }
    ]
  },
  args: {
    to: account as \`0x\${string}\` // filter transfers received by active user
  },
  fromBlock: 5000000n, // query from safe recent block
  toBlock: "latest"
});

console.log("Received Transfer Events:", logs.length);`}</pre>
        </div>
      </div>
    </div>
  </div>

  {/* PART 18: ADVANCED PROJECT ASSIGNMENT */}
  <div id="part-18" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 18</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Advanced Project Assignment: Complete Web3 Token Dashboard</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">Project Specification &amp; Deliverables</h3>
        <p>
          Students will build, deploy, and document a complete, professional-grade <strong>Decentralized Token &amp; NFT Management Dashboard</strong> connected to Ethereum Sepolia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
          <h4 className="font-bold text-[#18181b] text-sm mb-2 text-[#ea580c]">Mandatory Core Features (12)</h4>
          <ul className="text-xs space-y-1.5 list-disc pl-4 text-[#52525b]">
            <li>EIP-1193 MetaMask integration with graceful error fallback</li>
            <li>Chain ID validation (must enforce Sepolia 11155111)</li>
            <li>Real-time <code className="font-mono">accountsChanged</code> and <code className="font-mono">chainChanged</code> listeners</li>
            <li>ETH balance &amp; ERC-20 token balance real-time display</li>
            <li>Contract total supply and token metadata retrieval</li>
            <li>ERC-20 token transfer form with input sanitization</li>
            <li>Pre-flight transaction gas estimation before prompting wallet</li>
            <li>Mempool broadcast tracking with live Etherscan links</li>
            <li>Transaction receipt polling and status verification</li>
            <li>Transfer event log history table with block numbers</li>
            <li>Graceful error handling for codes 4001, 4900, 4901, and reverts</li>
            <li>Responsive React / Tailwind CSS user interface</li>
          </ul>
        </div>

        <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
          <h4 className="font-bold text-[#18181b] text-sm mb-2 text-blue-700">Advanced Extension Features (11)</h4>
          <ul className="text-xs space-y-1.5 list-disc pl-4 text-[#52525b]">
            <li>ERC-721 NFT gallery with IPFS metadata resolution</li>
            <li>Multi-token portfolio tracking (LINK, USDC, DAI)</li>
            <li>WalletConnect v2 QR-code modal integration</li>
            <li>Multi-provider failover (fallback from Infura to Alchemy)</li>
            <li>Persistent WebSocket live transfer streaming</li>
            <li>Toast notification system for pending, mined, or failed txs</li>
            <li>Custom Solidity revert error decoding via contract interface</li>
            <li>Transaction replacement / speedup detection (nonce tracking)</li>
            <li>Gas fee tracker displaying current Base Fee &amp; Priority Fee</li>
            <li>Dark mode / light mode toggle with state persistence</li>
            <li>Comprehensive Jest / Vitest test suite mocking EIP-1193</li>
          </ul>
        </div>
      </div>

      {/* 100-Mark Rubric */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-3">Project Evaluation Rubric (100 Marks Total)</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Grading Criteria</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Marks</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Expected Demonstration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">1. Wallet Connection &amp; EIP-1193</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">Connect modal, chain ID check, accountsChanged/chainChanged lifecycle cleanup.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">2. RPC Integration &amp; Security</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">Correct transport setup, environment variables, no leaked private credentials.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">3. Contract Read Operations</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">15</td><td className="p-2 border border-[#e7e3da]">Accurate multicall or batch read of balance, name, symbol, decimals, and supply.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">4. Contract Write Operations</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">15</td><td className="p-2 border border-[#e7e3da]">State-modifying transfer calls with proper parseUnits and account authorization.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">5. ABI Interaction &amp; Type Safety</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">Flawless function selector usage, valid type assertions, clean error interfaces.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">6. Transaction Handling &amp; Receipts</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">Hash display, receipt polling, and status validation (1 vs 0).</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">7. Event Integration (Subscriptions/Logs)</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">Querying historical Transfer logs and live event listening with unmount cleanup.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">8. Gas Estimation &amp; Economics</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">Accurate pre-flight estimateGas calls with safety margins and fee displays.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">9. Defensive Error Handling</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">Comprehensive catch blocks for 4001 user rejections, funds deficits, and reverts.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">10. Code Architecture &amp; UI Polish</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">Modular component architecture, clean README setup instructions, and mobile responsiveness.</td></tr>
              <tr className="bg-[#f6f4ee] font-bold"><td className="p-2.5 border border-[#e7e3da]">Total Marks</td><td className="p-2.5 border border-[#e7e3da] text-[#ea580c]">100</td><td className="p-2.5 border border-[#e7e3da]">Passing Grade: 75% or higher</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</section>
'''
