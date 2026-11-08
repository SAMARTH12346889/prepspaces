# -*- coding: utf-8 -*-
"""
Theory Sections Generator — Part 2 (Sections 9 to 16)
Module 24 — Final Blockchain Capstone Project
Covers:
9. Frontend Implementation with React & Wagmi
10. Wallet Integration & SIWE Authentication
11. Contract Deployment & Etherscan Verification
12. Automated Testing & Invariant Validation
13. Security Audit & OWASP SCSVS
14. Gas Optimization Techniques & Benchmarking
15. IPFS Decentralized Content Addressing
16. CI/CD Pipeline via GitHub Actions
"""

def generate_theory_part2():
    return r'''
      {/* SECTION 9: Frontend Implementation with React */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-neutral-500">Frontend Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          9. Frontend Implementation with React, Wagmi & Viem
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            React powers the client interface, while Wagmi and Viem provide typed, reactive hooks for wallet connection and contract interactions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">1. Home Screen</span>
              <p className="text-neutral-600 mt-1">Platform overview, wallet connection, and election summary cards.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">2. Dashboard</span>
              <p className="text-neutral-600 mt-1">Active, upcoming, and completed elections with live countdowns.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">3. Voting Page</span>
              <p className="text-neutral-600 mt-1">Candidate manifesto review, eligibility check, and ballot confirmation.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">4. Results View</span>
              <p className="text-neutral-600 mt-1">Real-time candidate vote tallies, turnout percentages, and winner declaration.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">5. Admin Portal</span>
              <p className="text-neutral-600 mt-1">Election creation, candidate registration freeze, and allowlist controls.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";

export function CastBallotButton({ electionId, candidateId }) {
  const { writeContract, data: hash, isPending: isSigning } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const handleVote = () => {
    writeContract({
      address: "0xVoteChainContractAddress",
      abi: voteChainAbi,
      functionName: "vote",
      args: [BigInt(electionId), BigInt(candidateId)]
    });
  };

  return (
    <button onClick={handleVote} disabled={isSigning || isConfirming} className="btn-primary">
      {isSigning ? "Signing in Wallet..." : isConfirming ? "Confirming on Chain..." : isSuccess ? "Ballot Confirmed!" : "Cast Ballot"}
    </button>
  );
}`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 10: Wallet Integration */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-neutral-500">Authentication</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          10. Wallet Integration & Sign-In with Ethereum (SIWE)
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Connecting a wallet only reveals a public address. True authentication requires Sign-In with Ethereum (EIP-4361):
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono space-y-1">
            <div>1. Client connects wallet and requests login challenge from server.</div>
            <div>2. Server generates unique session nonce and issues an EIP-4361 standard message.</div>
            <div>3. User signs message with their wallet private key (gasless).</div>
            <div>4. Server recovers signer address via `ecrecover` and validates against the issued nonce.</div>
            <div>5. Server issues an HTTP-only JWT session cookie.</div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Contract Deployment */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-neutral-500">Deployment & DevOps</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          11. Contract Deployment & Bytecode Verification
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Deployments are managed through Hardhat Ignition modules, guaranteeing deterministic deployment parameters and automated verification on Sepolia Explorer:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-1.5">
            <div><span className="text-neutral-500"># Compile contracts and generate bytecode</span></div>
            <div>npx hardhat compile</div>
            <div className="pt-2"><span className="text-neutral-500"># Deploy module to Sepolia testnet</span></div>
            <div>npx hardhat ignition deploy ignition/modules/VoteChain.ts --network sepolia --verify</div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Automated Testing */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-neutral-500">Verification & QA</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          12. Automated Testing: Five Testing Tiers & Invariants
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Unit & Integration Tests</span>
              <p className="text-neutral-600 mt-1">Tests happy paths: election creation, candidate registration, allowlisting, and voting.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Negative Security Tests</span>
              <p className="text-neutral-600 mt-1">Asserts expected reverts on duplicate votes, unauthorized calls, and expired deadlines.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Fuzz & Invariant Tests</span>
              <p className="text-neutral-600 mt-1">Randomized calls validating mathematical ballot conservation across 10,000 runs.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <div className="text-orange-400 font-bold uppercase text-[10px] tracking-wider mb-1">
              Core Ballot Conservation Invariant:
            </div>
            <pre>{`// Invariant: Total Recorded Votes must exactly equal the sum of votes across all candidates
assert(election.totalVotes == sum(candidateVotes[1..n]));

// Invariant: No voter address may cast more than 1 vote per election
assert(voterBallotsCast(voterAddress, electionId) <= 1);`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 13: Security Audit */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-neutral-500">Security & Auditing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          13. Smart Contract Security Audit & OWASP SCSVS
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Our security review aligns with the OWASP Smart Contract Security Verification Standard (SCSVS), evaluating ten vulnerability vectors:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <span className="font-bold">1. Reentrancy Vulnerability</span>
              <p className="text-[11px] mt-0.5">Defeated via Checks-Effects-Interactions (CEI) and OpenZeppelin ReentrancyGuard.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <span className="font-bold">2. Privilege Escalation / Access Flaws</span>
              <p className="text-[11px] mt-0.5">Defeated via granular OpenZeppelin AccessControl RBAC roles.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <span className="font-bold">3. Integer Overflow / Underflow</span>
              <p className="text-[11px] mt-0.5">Defeated via Solidity 0.8+ built-in checked arithmetic.</p>
            </div>
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-950">
              <span className="font-bold">4. Timestamp Manipulation</span>
              <p className="text-[11px] mt-0.5">15-second block drift window mitigated by coarse multi-day election schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14: Gas Optimization */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-neutral-500">Performance Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          14. Gas Optimization Techniques & Benchmarking
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Seven production gas optimization techniques were implemented across the codebase:
          </p>
          <ol className="list-decimal pl-6 space-y-1.5 text-xs font-mono text-neutral-700">
            <li><strong>Storage Slot Packing:</strong> Tightly packed `uint64 startTime`, `uint64 endTime`, `uint32 candidateCount`, and `uint8 status` into a single 32-byte slot.</li>
            <li><strong>Memory Caching:</strong> Cached storage variables in local memory variables during execution to eliminate redundant SLOAD operations (saving 2,100 gas per read).</li>
            <li><strong>Calldata vs Memory:</strong> Replaced `memory` with `calldata` on external read-only array and string arguments.</li>
            <li><strong>Custom Errors:</strong> Replaced verbose `require(cond, "string")` with `revert CustomError()`, eliminating runtime string storage.</li>
            <li><strong>Event Offloading:</strong> Emitted historical logs instead of storing full voter history in contract arrays.</li>
            <li><strong>Loop Elimination:</strong> Replaced linear loops with O(1) mapping lookups.</li>
            <li><strong>Optimizer Tuning:</strong> Configured compiler `viaIR: true` with 10,000 optimization runs.</li>
          </ol>
        </div>
      </section>

      {/* SECTION 15: IPFS Integration */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-neutral-500">Decentralized Storage</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          15. IPFS Decentralized Storage & Pinning Architecture
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Storing rich media on-chain is cost-prohibitive ($190,000+ for 3.25 MB). Files are uploaded to IPFS and pinned via Pinata, with only the content-addressed CID stored on-chain:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
            <pre>{`{
  "name": "Sarah Connor - Presidential Candidate",
  "description": "Platform manifesto for the 2026 Governance Election",
  "image": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
  "manifesto_pdf": "ipfs://bafybeicx3mkn52q6zpt7h37y75g3e4r4p67yl2abf3oclgty55fbzdi",
  "attributes": [
    { "trait_type": "Department", "value": "Computer Science" },
    { "trait_type": "Graduation", "value": "2026" }
  ]
}`}</pre>
          </div>
        </div>
      </section>

      {/* SECTION 16: CI/CD Pipeline */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-neutral-500">DevOps & Automation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          16. CI/CD Pipeline via GitHub Actions
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Continuous Integration enforces strict automated testing before any pull request can be merged:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-1">
            <div className="text-orange-400 font-bold">.github/workflows/ci.yml:</div>
            <div>name: Blockchain CI</div>
            <div>on: [push, pull_request]</div>
            <div>jobs:</div>
            <div>&nbsp;&nbsp;build-and-test:</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;steps:</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/checkout@v4</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- uses: actions/setup-node@v4 with: &#123; node-version: 22 &#125;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: npm ci</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: npx hardhat compile</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: npx hardhat test</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: npm run build --prefix frontend</div>
          </div>
        </div>
      </section>
'''
