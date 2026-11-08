# projectx/generator_mod14/gen_lab.py
"""
Generates Practical Lab (Complete Decentralized Voting DApp),
Advanced Assignments 1-4, and the 100-Mark Evaluation Rubric for Module 14.
Zero information loss, full code implementations, and structured tables.
"""

def get_lab_code():
    return r'''
<section className="space-y-12">
  {/* PRACTICAL LAB: DECENTRALIZED VOTING APPLICATION */}
  <div id="practical-lab" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Practical Lab</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Build a Complete Decentralized Voting Application</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">Hands-on Full-Stack Web3 Engineering</h3>
        <p>
          In this comprehensive practical lab, you will design, write, connect, and deploy a complete decentralized voting application. Users connect their Ethereum browser wallets (MetaMask), view on-chain candidates, cast state-changing votes via a Solidity smart contract deployed on the Sepolia testnet, and track real-time results.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-3 text-xs font-semibold">
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-center">&#10003; Wallet Connection</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-center">&#10003; Candidate Listing</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-center">&#10003; Vote Submission</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-center">&#10003; Prevent Duplicate Votes</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-center">&#10003; Live Results Dashboard</div>
        </div>
      </div>

      {/* Lab Architecture */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Lab Architecture Flow</h4>
        <div className="p-4 bg-[#fbfaf8] rounded-xl border border-[#e7e3da] font-mono text-xs text-[#27272a]">
          React + TypeScript Frontend &rarr; Injected MetaMask Wallet &rarr; Viem Contract Integration &rarr; Voting.sol Smart Contract &rarr; Sepolia Ethereum Testnet &rarr; Transaction Receipt &amp; Event Logs &rarr; Real-Time UI Updates
        </div>
      </div>

      {/* Step 1: Solidity Smart Contract */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 1 — Create the Solidity Smart Contract (<code className="font-mono text-xs">Voting.sol</code>)</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto max-h-[500px]">
          <pre className="whitespace-pre-wrap">{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Voting {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    Candidate[] public candidates;
    mapping(address => bool) public hasVoted;
    address public owner;
    bool public votingActive;

    event VoteCast(address indexed voter, uint256 indexed candidateId);
    event VotingStatusChanged(bool active);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor(string[] memory candidateNames) {
        require(candidateNames.length >= 2, "At least two candidates required");
        owner = msg.sender;
        votingActive = true;

        for (uint256 i = 0; i < candidateNames.length; i++) {
            candidates.push(
                Candidate({
                    id: i + 1,
                    name: candidateNames[i],
                    voteCount: 0
                })
            );
        }
    }

    function vote(uint256 candidateId) external {
        require(votingActive, "Voting is inactive");
        require(!hasVoted[msg.sender], "Already voted");
        require(
            candidateId > 0 && candidateId <= candidates.length,
            "Invalid candidate"
        );

        hasVoted[msg.sender] = true;
        candidates[candidateId - 1].voteCount++;

        emit VoteCast(msg.sender, candidateId);
    }

    function getCandidates() external view returns (Candidate[] memory) {
        return candidates;
    }

    function setVotingActive(bool active) external onlyOwner {
        votingActive = active;
        emit VotingStatusChanged(active);
    }
}`}</pre>
        </div>
        <div className="mt-3 p-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900 leading-relaxed">
          <strong>Security Analysis:</strong> <code className="font-mono font-bold">Voting.sol</code> prevents double-voting by wallet address (<code className="font-mono">mapping(address =&gt; bool) public hasVoted</code>). However, because an individual user can create multiple Ethereum key pairs, address-based restriction alone does not prevent Sybil attacks in real-world legal elections. For production elections, integrate zero-knowledge identity (MACI/WorldID) or Merkle allowlists.
        </div>
      </div>

      {/* Step 2: React Project Setup */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 2 — Initialize React + TypeScript Project</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`npm create vite@latest voting-dapp -- --template react-ts
cd voting-dapp
npm install
npm install viem
npm run dev`}</pre>
        </div>
      </div>

      {/* Step 3: Contract Configuration */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 3 — Configure Contract ABI &amp; Address (<code className="font-mono text-xs">src/contracts/config.ts</code>)</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`export const votingContractAddress = "0xYourDeployedVotingContractAddress";

export const votingABI = [
  {
    type: "function",
    name: "getCandidates",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        components: [
          { name: "id", type: "uint256" },
          { name: "name", type: "string" },
          { name: "voteCount", type: "uint256" }
        ]
      }
    ]
  },
  {
    type: "function",
    name: "vote",
    stateMutability: "nonpayable",
    inputs: [{ name: "candidateId", type: "uint256" }],
    outputs: []
  },
  {
    type: "function",
    name: "hasVoted",
    stateMutability: "view",
    inputs: [{ name: "voter", type: "address" }],
    outputs: [{ name: "", type: "bool" }]
  }
] as const;`}</pre>
        </div>
      </div>

      {/* Step 4: Custom Wallet Hook */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 4 — Implement Custom Wallet Hook (<code className="font-mono text-xs">src/hooks/useWallet.ts</code>)</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`import { useState } from "react";
import { createWalletClient, custom, type Address } from "viem";
import { sepolia } from "viem/chains";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useWallet() {
  const [address, setAddress] = useState<Address | null>(null);

  async function connect() {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed! Please install MetaMask.");
    }
    const client = createWalletClient({
      chain: sepolia,
      transport: custom(window.ethereum)
    });
    const accounts = await client.requestAddresses();
    setAddress(accounts[0]);
    return { client, address: accounts[0] };
  }

  return { address, connect };
}`}</pre>
        </div>
      </div>

      {/* Step 5: Full Application Component */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 5 — Complete React Application (<code className="font-mono text-xs">src/App.tsx</code>)</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto max-h-[550px]">
          <pre className="whitespace-pre-wrap">{`import React, { useState, useEffect } from "react";
import { createPublicClient, createWalletClient, custom, http, type Address } from "viem";
import { sepolia } from "viem/chains";
import { votingABI, votingContractAddress } from "./contracts/config";

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(import.meta.env.VITE_SEPOLIA_RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com")
});

export default function App() {
  const [address, setAddress] = useState<Address | null>(null);
  const [candidates, setCandidates] = useState<any[]>([]);
  const [status, setStatus] = useState("Connect wallet to begin");
  const [txHash, setTxHash] = useState<string | null>(null);

  async function connectWallet() {
    if (!window.ethereum) {
      setStatus("Please install MetaMask");
      return;
    }
    try {
      const walletClient = createWalletClient({
        chain: sepolia,
        transport: custom(window.ethereum)
      });
      const accounts = await walletClient.requestAddresses();
      setAddress(accounts[0]);
      setStatus("Wallet connected");
      await loadCandidates();
    } catch (err: any) {
      setStatus("Connection rejected: " + err.message);
    }
  }

  async function loadCandidates() {
    try {
      const data = await publicClient.readContract({
        address: votingContractAddress,
        abi: votingABI,
        functionName: "getCandidates"
      });
      setCandidates(data as any[]);
    } catch (err: any) {
      console.error("Failed to load candidates:", err);
    }
  }

  async function castVote(candidateId: bigint) {
    if (!window.ethereum || !address) {
      setStatus("Connect wallet first");
      return;
    }

    try {
      setStatus("Waiting for wallet signature approval in MetaMask...");
      const walletClient = createWalletClient({
        chain: sepolia,
        transport: custom(window.ethereum)
      });

      const hash = await walletClient.writeContract({
        address: votingContractAddress,
        abi: votingABI,
        functionName: "vote",
        args: [candidateId],
        account: address
      });

      setTxHash(hash);
      setStatus("Transaction broadcast! Awaiting block confirmation...");

      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      if (receipt.status === "success") {
        setStatus("Vote successfully recorded on Sepolia!");
        await loadCandidates();
      } else {
        setStatus("Transaction reverted on-chain!");
      }
    } catch (error: any) {
      if (error?.code === 4001) {
        setStatus("You rejected the transaction in MetaMask.");
      } else {
        setStatus("Vote failed: " + (error?.message || "Execution error"));
      }
    }
  }

  return (
    <main style={{ maxWidth: 650, margin: "40px auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1>Decentralized Voting DApp</h1>
      
      {!address ? (
        <button onClick={connectWallet} style={{ padding: "10px 20px", cursor: "pointer", fontWeight: "bold" }}>
          Connect Wallet
        </button>
      ) : (
        <div style={{ background: "#f4f4f5", padding: 16, borderRadius: 8 }}>
          <p><strong>Connected Account:</strong> {address}</p>
          <button onClick={loadCandidates} style={{ padding: "6px 12px", cursor: "pointer" }}>
            Refresh Results
          </button>
        </div>
      )}

      <p style={{ margin: "16px 0", color: "#ea580c", fontWeight: "bold" }}>{status}</p>

      {txHash && (
        <p style={{ fontSize: 12 }}>
          Tx Hash: <a href={\`https://sepolia.etherscan.io/tx/\${txHash}\`} target="_blank" rel="noreferrer">{txHash}</a>
        </p>
      )}

      <div style={{ marginTop: 24 }}>
        <h3>Official Candidates</h3>
        {candidates.map((c) => (
          <div key={c.id.toString()} style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, marginBottom: 12 }}>
            <h4>Candidate #{c.id.toString()}: {c.name}</h4>
            <p>Total Votes: <strong>{c.voteCount.toString()}</strong></p>
            <button
              onClick={() => castVote(c.id)}
              disabled={!address}
              style={{ padding: "8px 16px", cursor: "pointer" }}
            >
              Vote for {c.name}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}`}</pre>
        </div>
      </div>

      {/* Step 6: Testing */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 6 — Comprehensive Test Plan (8 Test Cases)</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Test Case</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Action Taken</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Expected System Response</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">1. Connect Wallet</td><td className="p-2 border border-[#e7e3da]">Click Connect button &amp; approve</td><td className="p-2 border border-[#e7e3da]">Full address displayed in UI; state updates</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">2. Read Candidates</td><td className="p-2 border border-[#e7e3da]">Trigger loadCandidates()</td><td className="p-2 border border-[#e7e3da]">Candidate list rendered with accurate names and counts</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">3. Cast Vote</td><td className="p-2 border border-[#e7e3da]">Click Vote and sign transaction</td><td className="p-2 border border-[#e7e3da]">Tx hash broadcast &amp; displayed with Etherscan link</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">4. Receipt Confirmation</td><td className="p-2 border border-[#e7e3da]">Wait for block inclusion</td><td className="p-2 border border-[#e7e3da]">Vote count increments; status updates to success</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">5. Duplicate Vote Rejection</td><td className="p-2 border border-[#e7e3da]">Attempt to vote twice with same wallet</td><td className="p-2 border border-[#e7e3da]">Transaction reverts with require(&quot;Already voted&quot;)</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">6. Invalid Candidate ID</td><td className="p-2 border border-[#e7e3da]">Pass ID 0 or out-of-bounds</td><td className="p-2 border border-[#e7e3da]">Transaction reverts with require(&quot;Invalid candidate&quot;)</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">7. Inactive Voting</td><td className="p-2 border border-[#e7e3da]">Owner calls setVotingActive(false)</td><td className="p-2 border border-[#e7e3da]">Subsequent vote calls revert with require(&quot;Voting is inactive&quot;)</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">8. User Rejection</td><td className="p-2 border border-[#e7e3da]">User clicks Reject in MetaMask</td><td className="p-2 border border-[#e7e3da]">Catches code 4001, resets UI gracefully without crash</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Step 7: Deployment */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Step 7 — 10-Step Testnet &amp; Frontend Deployment Workflow</h4>
        <ol className="list-decimal pl-5 space-y-1 text-xs sm:text-sm">
          <li>Compile the Solidity contract with Foundry (<code className="font-mono">forge build</code>) or Hardhat.</li>
          <li>Deploy to Sepolia testnet using a funded deployer private key.</li>
          <li>Verify contract source code on Sepolia Etherscan.</li>
          <li>Copy verified contract address into frontend <code className="font-mono">src/contracts/config.ts</code>.</li>
          <li>Connect MetaMask to Sepolia testnet.</li>
          <li>Acquire testnet ETH from a reliable Sepolia faucet.</li>
          <li>Run and test the React frontend locally with multi-wallet voter switching.</li>
          <li>Execute all 8 test cases in the test plan.</li>
          <li>Build static production assets (<code className="font-mono">npm run build</code>).</li>
          <li>Deploy frontend to Cloudflare Pages or Vercel and verify on mobile browsers.</li>
        </ol>
      </div>
    </div>
  </div>

  {/* ADVANCED ASSIGNMENTS */}
  <div id="advanced-assignments" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Extensions</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Advanced Engineering Assignments</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <h4 className="font-bold text-sm text-[#ea580c] mb-1">Assignment 1 — Implement SIWE Authentication</h4>
        <p className="text-[#52525b]">
          Build a complete wallet-based login module featuring server-side nonce generation, EIP-4361 message formatting, signature recovery, and session issuance in HttpOnly cookies.
        </p>
      </div>

      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <h4 className="font-bold text-sm text-[#ea580c] mb-1">Assignment 2 — Deploy The Graph Subgraph</h4>
        <p className="text-[#52525b]">
          Write a Subgraph manifest and AssemblyScript mapping for <code className="font-mono text-xs">VoteCast</code> events. Deploy to The Graph Studio and query historical voting velocity via GraphQL.
        </p>
      </div>

      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <h4 className="font-bold text-sm text-[#ea580c] mb-1">Assignment 3 — Build a Real-Time Analytics Dashboard</h4>
        <p className="text-[#52525b]">
          Display total votes cast, candidate rankings, a voting activity timeline, unique voter counts, and live transaction history with direct Etherscan links.
        </p>
      </div>

      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <h4 className="font-bold text-sm text-[#ea580c] mb-1">Assignment 4 — Full Production Web3 Architecture</h4>
        <p className="text-[#52525b]">
          Unify the React frontend, Solidity smart contracts, Node.js backend, PostgreSQL store, SIWE authentication, and an event indexer into a production CI/CD deployment pipeline.
        </p>
      </div>
    </div>
  </div>

  {/* 100-MARK EVALUATION RUBRIC */}
  <div id="evaluation-rubric" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Grading</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Practical Assessment Evaluation Rubric (100 Marks Total)</h2>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
        <thead>
          <tr className="bg-[#f6f4ee] text-[#18181b]">
            <th className="p-2.5 border border-[#e7e3da] font-bold">Assessment Category</th>
            <th className="p-2.5 border border-[#e7e3da] font-bold">Marks</th>
            <th className="p-2.5 border border-[#e7e3da] font-bold">Demonstrated Engineering Competency</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border border-[#e7e3da] font-semibold">1. Solidity Contract Implementation</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">20</td><td className="p-2 border border-[#e7e3da]">Candidate struct, hasVoted mapping, modifier onlyOwner, vote validation, and events.</td></tr>
          <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">2. React &amp; TypeScript Frontend</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">20</td><td className="p-2 border border-[#e7e3da]">Clean component hierarchy, strict TypeScript types, BigInt handling, and modular structure.</td></tr>
          <tr><td className="p-2 border border-[#e7e3da] font-semibold">3. Wallet Integration</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">15</td><td className="p-2 border border-[#e7e3da]">EIP-1193 connect sequence, chain ID validation (11155111), and listener cleanup.</td></tr>
          <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">4. Transaction Handling &amp; Receipts</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">15</td><td className="p-2 border border-[#e7e3da]">Mempool broadcast tracking, receipt polling, and status validation (status 1 vs 0).</td></tr>
          <tr><td className="p-2 border border-[#e7e3da] font-semibold">5. Security &amp; Validation</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">On-chain duplicate vote prevention, input sanitization, and no leaked private keys.</td></tr>
          <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">6. Blockchain Data Integration</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">10</td><td className="p-2 border border-[#e7e3da]">Efficient readContract queries, event log tracking, and real-time UI synchronization.</td></tr>
          <tr><td className="p-2 border border-[#e7e3da] font-semibold">7. UI/UX Design &amp; Error Handling</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">5</td><td className="p-2 border border-[#e7e3da]">Graceful handling of error 4001, responsive candidate cards, and Etherscan links.</td></tr>
          <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">8. Deployment &amp; Documentation</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">5</td><td className="p-2 border border-[#e7e3da]">Verified contract on Sepolia, hosted frontend on Cloudflare/Vercel, and clear README.</td></tr>
          <tr className="bg-[#f6f4ee] font-bold"><td className="p-2.5 border border-[#e7e3da]">Total Marks</td><td className="p-2.5 border border-[#e7e3da] text-[#ea580c]">100</td><td className="p-2.5 border border-[#e7e3da]">Minimum Passing Score: 75 Marks</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</section>
'''
