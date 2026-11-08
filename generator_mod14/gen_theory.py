# projectx/generator_mod14/gen_theory.py
"""
Generates Parts 1 through 15 for Module 14: Full-Stack DApp Development.
Covers DApp architecture, React + TS engineering, Viem integration, SIWE authentication,
The Graph, On-Chain vs Off-Chain storage, state synchronization, and deployment pipelines.
Zero information loss, full structured tables, diagrams, and code snippets.
"""

def get_theory_code():
    return r'''
<section className="space-y-12">
  {/* THEORY SECTION: PARTS 1 - 15 */}

  {/* PART 1: DECENTRALIZED APPLICATION ARCHITECTURE */}
  <div id="part-1" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 1</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Decentralized Application Architecture</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">1.1 What Is a Decentralized Application?</h3>
        <p>
          A <strong>decentralized application (DApp)</strong> is a software application that leverages blockchain infrastructure and smart contracts to execute, coordinate, or cryptographically verify some or all of its operations.
        </p>
        <p className="mt-2">
          Unlike traditional software that relies exclusively on centralized cloud servers and proprietary database administrators, DApps deploy immutable smart contracts onto distributed peer-to-peer networks. Prominent categories of decentralized applications include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4 text-xs sm:text-sm">
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block mb-1">Decentralized Exchanges (DEXs)</span>
            Automated market makers (Uniswap, Curve) enabling non-custodial token swaps.
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block mb-1">NFT Marketplaces</span>
            OpenSea, Blur, and Magic Eden for decentralized digital asset provenance and trading.
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block mb-1">Decentralized Voting &amp; DAOs</span>
            Governor Bravo, Snapshot, and Aragon for trustless democratic governance and treasury management.
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block mb-1">DeFi Lending Protocols</span>
            Aave, Compound, and MakerDAO for collateralized borrowing without financial intermediaries.
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block mb-1">Blockchain Identity Systems</span>
            ENS (.eth domains), WorldID, and Soulbound credentials for self-sovereign identity.
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block mb-1">Decentralized Social &amp; Games</span>
            Farcaster, Lens Protocol, and on-chain gaming with verifiable digital items.
          </div>
        </div>
        <p className="text-xs text-[#52525b]">
          <em>Pragmatic Web3 Reality:</em> A DApp does not need every single line of code to be decentralized. In production, most real-world applications employ decentralized smart contracts for value settlement while leveraging centralized frontend hosting (Cloudflare/Vercel), event indexing services (The Graph), and API caching layers for sub-second user responsiveness.
        </p>
      </div>

      {/* Comparison: Traditional vs DApp */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-3">1.2 Traditional Application vs. Decentralized Application</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-3 border border-[#e7e3da] font-bold">Component</th>
                <th className="p-3 border border-[#e7e3da] font-bold text-blue-700">Traditional Web2 Application</th>
                <th className="p-3 border border-[#e7e3da] font-bold text-[#ea580c]">Decentralized Web3 DApp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#e7e3da] font-semibold">Frontend</td>
                <td className="p-3 border border-[#e7e3da]">React, Angular, Vue, Next.js</td>
                <td className="p-3 border border-[#e7e3da]">React, Next.js, Vue (integrated with Viem/Wagmi)</td>
              </tr>
              <tr className="bg-[#fbfaf8]">
                <td className="p-3 border border-[#e7e3da] font-semibold">Authentication</td>
                <td className="p-3 border border-[#e7e3da]">Email/password, OAuth2, JWT session cookies</td>
                <td className="p-3 border border-[#e7e3da]">Public-key wallet signatures, SIWE (EIP-4361)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#e7e3da] font-semibold">Backend</td>
                <td className="p-3 border border-[#e7e3da]">Mandatory centralized server cluster (Node, Java, Go)</td>
                <td className="p-3 border border-[#e7e3da]">Optional serverless backend microservices &amp; indexers</td>
              </tr>
              <tr className="bg-[#fbfaf8]">
                <td className="p-3 border border-[#e7e3da] font-semibold">Database</td>
                <td className="p-3 border border-[#e7e3da]">PostgreSQL, MySQL, MongoDB</td>
                <td className="p-3 border border-[#e7e3da]">Canonical Blockchain state + off-chain database (Postgres/IPFS)</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#e7e3da] font-semibold">Business Logic</td>
                <td className="p-3 border border-[#e7e3da]">Private backend proprietary code</td>
                <td className="p-3 border border-[#e7e3da]">Audited, immutable, deterministic Solidity smart contracts</td>
              </tr>
              <tr className="bg-[#fbfaf8]">
                <td className="p-3 border border-[#e7e3da] font-semibold">Transactions</td>
                <td className="p-3 border border-[#e7e3da]">ACID SQL database commit operations</td>
                <td className="p-3 border border-[#e7e3da]">Cryptographic mempool transactions mined into blocks</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#e7e3da] font-semibold">Trust Model</td>
                <td className="p-3 border border-[#e7e3da]">Full trust in server administrator &amp; cloud operator</td>
                <td className="p-3 border border-[#e7e3da]">Trustless execution via smart contracts &amp; consensus validators</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
        <h5 className="font-bold text-amber-900 text-sm flex items-center gap-2">
          <span>&#9888;</span> Important Architectural Concept
        </h5>
        <p className="text-amber-800 text-xs sm:text-sm mt-1">
          A DApp is <strong>not simply a traditional website with a &quot;Connect Wallet&quot; button</strong>. A professional DApp orchestrates a synchronized symphony between frontend user interactions, wallet authentication, smart contract execution, asynchronous mempool status polling, off-chain indexing services, and defensive error handling.
        </p>
      </div>
    </div>
  </div>

  {/* PART 2: FRONTEND VS BACKEND RESPONSIBILITIES */}
  <div id="part-2" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 2</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Frontend vs. Backend Responsibilities</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend Responsibilities */}
        <div className="p-5 bg-[#fbfaf8] rounded-2xl border border-[#e7e3da]">
          <h3 className="font-bold text-base text-[#18181b] mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c]"></span>
            2.1 Frontend Responsibilities (Client Tier)
          </h3>
          <p className="text-xs sm:text-sm text-[#52525b] mb-3">
            The frontend is responsible for the direct end-user experience, rendering real-time blockchain telemetry and coordinating wallet signatures:
          </p>
          <ul className="text-xs sm:text-sm space-y-1.5 list-disc pl-5 text-[#27272a]">
            <li>Connecting EIP-1193 browser wallets (MetaMask, Rainbow, Rabby)</li>
            <li>Displaying current on-chain state (balances, candidate vote tallies)</li>
            <li>Requesting cryptographic user approvals for state-changing calls</li>
            <li>Rendering real-time transaction progress (Mempool &rarr; Mined &rarr; Confirmed)</li>
            <li>Listening to smart contract events for live UI notifications</li>
            <li>Managing local optimistic UI state and input validation</li>
            <li>Displaying human-readable error messages for wallet rejections</li>
          </ul>
          <div className="mt-4 pt-3 border-t border-[#e7e3da] text-xs font-mono text-[#52525b]">
            <strong>Core Technologies:</strong> React, TypeScript, Viem, Wagmi, TanStack Query, Tailwind CSS.
          </div>
        </div>

        {/* Backend Responsibilities */}
        <div className="p-5 bg-[#fbfaf8] rounded-2xl border border-[#e7e3da]">
          <h3 className="font-bold text-base text-[#18181b] mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            2.2 Backend Responsibilities (Service Tier)
          </h3>
          <p className="text-xs sm:text-sm text-[#52525b] mb-3">
            A Web3 backend augments decentralized networks with high-performance off-chain data services, search, and notification infrastructure:
          </p>
          <ul className="text-xs sm:text-sm space-y-1.5 list-disc pl-5 text-[#27272a]">
            <li>Serving REST and GraphQL APIs for complex aggregated data queries</li>
            <li>Historical event log indexing and block reorg reconciliation</li>
            <li>Off-chain relational database management (PostgreSQL, Supabase)</li>
            <li>User profile management, bios, avatars, and notification preferences</li>
            <li>Push notifications (email, Discord, webhooks) for governance events</li>
            <li>Caching expensive multi-contract computations via Redis</li>
            <li>SIWE challenge nonce generation and JWT session validation</li>
          </ul>
          <div className="mt-4 pt-3 border-t border-[#e7e3da] text-xs font-mono text-[#52525b]">
            <strong>Core Technologies:</strong> Node.js, Express, PostgreSQL, Redis, The Graph, Apollo GraphQL.
          </div>
        </div>
      </div>

      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
        <h5 className="font-bold text-red-900 text-sm flex items-center gap-2">
          <span>&#9888;</span> Fundamental Security Principle
        </h5>
        <p className="text-red-800 text-xs sm:text-sm mt-1">
          <strong>The backend must never be treated as the source of truth for blockchain state.</strong> If an API reports that an account has voted or holds 1,000 tokens, the frontend and smart contracts must independently verify that balance against the blockchain consensus state. Financial settlements and access control must always be verified on-chain.
        </p>
      </div>
    </div>
  </div>

  {/* PART 3: REACT FUNDAMENTALS FOR WEB3 */}
  <div id="part-3" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 3</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">React Fundamentals for Web3 Engineering</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">3.1 Production Web3 Folder Architecture</h3>
        <p>
          A modular, production-ready React DApp cleanly separates user interface components, custom Web3 hooks, contract configurations, and blockchain services:
        </p>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs my-3 overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`src/
├── components/          // Reusable UI components
│   ├── WalletButton.tsx      // Connect/Disconnect EIP-1193 button
│   ├── CandidateCard.tsx     // Candidate presentation & voting action
│   ├── VotingStatus.tsx      // Live vote tally and active voting badge
│   └── TransactionStatus.tsx // Broadcast, pending, and confirmed explorer links
├── pages/               // Top-level routed views
│   ├── Home.tsx              // DApp landing & overview
│   ├── Vote.tsx              // Ballot casting interface
│   └── Results.tsx           // Analytics & historical results
├── hooks/               // Custom Web3 lifecycle hooks
│   ├── useWallet.ts          // Accounts, chainId, and listener management
│   └── useVoting.ts          // Contract read/write functions and status
├── contracts/           // ABIs, addresses, and typed configurations
│   ├── VotingABI.ts          // Typed ABI with 'as const'
│   └── config.ts             // Sepolia addresses and RPC endpoints
├── services/            // Off-chain API & client instances
│   ├── blockchain.ts         // Viem publicClient and walletClient
│   └── api.ts                // The Graph / REST backend requests
└── App.tsx              // Root component & state orchestration`}</pre>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">3.2 React State in Web3: Optimistic vs. Canonical State</h3>
        <p>
          In traditional applications, updating local state (<code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono font-bold">useState</code>) updates the database almost instantly. In Web3, <strong>UI state is not equivalent to blockchain state</strong>.
        </p>
        <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs sm:text-sm my-2">
          <strong>Optimistic Updates:</strong> The frontend can immediately display that a vote was cast to give the user instant visual feedback, but it must visibly mark the action as &quot;Pending Confirmation&quot; until the transaction receipt arrives with <code className="font-mono">status === &quot;success&quot;</code>. If the transaction reverts on-chain, the frontend must roll back the optimistic UI state and display the revert reason.
        </div>
      </div>
    </div>
  </div>

  {/* PART 4: TYPESCRIPT FOR DAPP DEVELOPMENT */}
  <div id="part-4" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 4</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">TypeScript for Web3 Development</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">4.1 Essential Web3 Type Definitions</h3>
        <p>
          Static typing prevents subtle runtime bugs such as passing an invalid address or mistyping transaction states:
        </p>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-4 my-3">
          <div>
            <span className="text-[#ea580c] font-bold">// 1. Hexadecimal Ethereum Address Type:</span>
            <pre className="whitespace-pre-wrap">{`type EthereumAddress = \`0x\${string}\`;
const voter: EthereumAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";`}</pre>
          </div>
          <div>
            <span className="text-[#ea580c] font-bold">// 2. Finite Transaction Status Union:</span>
            <pre className="whitespace-pre-wrap">{`type TransactionStatus = "idle" | "pending" | "confirming" | "success" | "failed";`}</pre>
          </div>
          <div>
            <span className="text-[#ea580c] font-bold">// 3. Candidate Contract Struct Interface:</span>
            <pre className="whitespace-pre-wrap">{`interface Candidate {
  id: number;
  name: string;
  voteCount: bigint;
}`}</pre>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">4.2 Why BigInt Is Mandatory</h3>
        <p>
          JavaScript&apos;s standard <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">Number</code> type is an IEEE 754 double-precision float. It loses precision above <code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono">Number.MAX_SAFE_INTEGER</code> (9,007,199,254,740,991). Because 1 ETH equals 1,000,000,000,000,000,000 Wei ($10^{18}$), standard numbers will silently corrupt arithmetic!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="p-3 bg-red-50 border border-red-300 rounded-xl font-mono text-xs text-red-900">
            <span className="font-bold block mb-1 text-red-700">&#10007; NEVER USE NUMBER:</span>
            const balance = Number(&quot;1000000000000000000&quot;);<br />
            // Loses precision during division &amp; addition!
          </div>
          <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl font-mono text-xs text-emerald-900">
            <span className="font-bold block mb-1 text-emerald-700">&#10003; ALWAYS USE BIGINT:</span>
            const balance = 1000000000000000000n;<br />
            const formatted = (balance / 10n ** 18n).toString();
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* PART 5: WALLET CONNECTION */}
  <div id="part-5" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 5</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Wallet Connection &amp; EIP-1193 Lifecycle</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">5.1 The 7-Step Connection Sequence</h3>
        <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
          <li><strong>User Action:</strong> User clicks the &quot;Connect Wallet&quot; button in the frontend.</li>
          <li><strong>Provider Detection:</strong> DApp inspects <code className="font-mono text-xs">window.ethereum</code> for an injected EIP-1193 provider.</li>
          <li><strong>Permission Request:</strong> DApp calls <code className="font-mono text-xs">walletClient.requestAddresses()</code> (RPC method: <code className="font-mono text-xs">eth_requestAccounts</code>).</li>
          <li><strong>Approval Prompt:</strong> MetaMask opens an extension modal prompting user approval.</li>
          <li><strong>Address Retrieval:</strong> Wallet returns the authorized account address array (<code className="font-mono text-xs">0x...</code>).</li>
          <li><strong>Network Validation:</strong> DApp reads <code className="font-mono text-xs">eth_chainId</code> to ensure the user is on the intended chain (Sepolia 11155111).</li>
          <li><strong>State Persistence:</strong> React updates wallet state and registers real-time event listeners.</li>
        </ol>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">5.2 Viem Wallet Client Setup &amp; Event Cleanup</h3>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`import { createWalletClient, custom, type Address } from "viem";
import { sepolia } from "viem/chains";

// 1. Establish Wallet Client:
export async function connectWallet() {
  if (!window.ethereum) throw new Error("MetaMask not found!");

  const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom(window.ethereum)
  });

  const [address] = await walletClient.requestAddresses();
  return { walletClient, address };
}

// 2. Event Listeners in React useEffect:
useEffect(() => {
  if (!window.ethereum) return;

  const handleAccounts = (accounts: string[]) => {
    if (accounts.length === 0) setAddress(null);
    else setAddress(accounts[0] as Address);
  };

  const handleChain = (chainIdHex: string) => {
    console.log("Switched network to:", parseInt(chainIdHex, 16));
    window.location.reload(); // Recommended to reset state on network change
  };

  window.ethereum.on("accountsChanged", handleAccounts);
  window.ethereum.on("chainChanged", handleChain);

  // CRITICAL CLEANUP:
  return () => {
    window.ethereum.removeListener("accountsChanged", handleAccounts);
    window.ethereum.removeListener("chainChanged", handleChain);
  };
}, []);`}</pre>
        </div>
      </div>
    </div>
  </div>

  {/* PART 6: SMART CONTRACT INTEGRATION */}
  <div id="part-6" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 6</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Smart Contract Integration with Viem</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">6.1 Reading Contract State (eth_call)</h3>
        <p>
          Reading on-chain variables (<code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono font-bold">getCandidates()</code>) costs zero gas and does not trigger wallet signature popups:
        </p>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-2">
          <pre className="whitespace-pre-wrap">{`import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { votingABI, votingContractAddress } from "./contracts/config";

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http("https://ethereum-sepolia-rpc.publicnode.com")
});

// Read call without gas:
const candidates = await publicClient.readContract({
  address: votingContractAddress,
  abi: votingABI,
  functionName: "getCandidates"
});`}</pre>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">6.2 Writing Contract State (eth_sendRawTransaction)</h3>
        <p>
          Writing state changes (<code className="bg-[#f6f4ee] px-1 py-0.5 rounded text-xs font-mono font-bold">vote(candidateId)</code>) requires an account signature, consumes gas, and emits an event log:
        </p>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-2">
          <pre className="whitespace-pre-wrap">{`// Write transaction requiring MetaMask approval:
const hash = await walletClient.writeContract({
  address: votingContractAddress,
  abi: votingABI,
  functionName: "vote",
  args: [1n],
  account: userAddress
});

console.log("Broadcasted Tx Hash:", hash);`}</pre>
        </div>
      </div>
    </div>
  </div>

  {/* PART 7: TRANSACTION UI DESIGN */}
  <div id="part-7" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 7</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Transaction UI Design &amp; UX Best Practices</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">7.1 The 9 Stages of a Web3 Transaction</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs my-3">
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da]">1. Form Prepared</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da]">2. Wallet Prompted</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da]">3. Signature Signed</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da]">4. Broadcast to Mempool</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da]">5. Pending in TxPool</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da]">6. Included in Block</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da]">7. EVM Executed</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da]">8. Receipt Verified (Status 1)</div>
          <div className="p-2 bg-[#f6f4ee] rounded-lg border border-[#e7e3da]">9. UI Reconciled</div>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#18181b] mb-2">7.2 TransactionStatusView Component Implementation</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`interface TransactionStatusProps {
  status: "idle" | "pending" | "confirming" | "success" | "failed";
  hash?: string;
}

export function TransactionStatusView({ status, hash }: TransactionStatusProps) {
  const messages = {
    idle: "Ready to cast vote",
    pending: "Awaiting approval in MetaMask popup...",
    confirming: "Transaction broadcast! Waiting for block inclusion...",
    success: "Vote successfully confirmed on-chain!",
    failed: "Transaction failed or was rejected by user"
  };

  return (
    <div className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8]">
      <p className="font-bold text-xs uppercase tracking-wider text-[#ea580c]">{messages[status]}</p>
      {hash && (
        <a
          href={\`https://sepolia.etherscan.io/tx/\${hash}\`}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-blue-600 underline mt-1 block font-mono"
        >
          View on Sepolia Etherscan &rarr;
        </a>
      )}
    </div>
  );
}`}</pre>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#18181b] mb-2">7.3 Seven Golden Rules of Web3 UX</h4>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li>Always tell the user to look at their wallet modal when awaiting signatures.</li>
          <li>Display the 32-byte transaction hash immediately upon broadcast.</li>
          <li>Always provide a direct block explorer hyperlink (Etherscan/Sepolia).</li>
          <li>Clearly distinguish between &quot;Transaction Broadcast&quot; and &quot;Transaction Confirmed&quot;.</li>
          <li>Never display success prior to inspecting <code className="font-mono">receipt.status === &quot;success&quot;</code>.</li>
          <li>Gracefully handle code 4001 user rejections without showing scary error popups.</li>
          <li>Provide a clean retry button if a network or gas error occurs.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* PART 8: WALLET AUTHENTICATION WITH SIWE */}
  <div id="part-8" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 8</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Wallet Authentication with SIWE (EIP-4361)</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">8.1 What Is Sign-In with Ethereum?</h3>
        <p>
          <strong>Sign-In with Ethereum (SIWE)</strong> is the standardized wallet authentication protocol defined in <strong>EIP-4361</strong>. Instead of maintaining usernames and passwords, users sign a standardized, human-readable challenge message using their private key. The signature cryptographically proves ownership of the Ethereum account without charging gas fees.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-[#18181b] mb-2">8.2 The 10-Step Authentication Flow</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Step</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Actor</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-bold">1</td><td>User</td><td>Clicks &quot;Sign in with Ethereum&quot; in the frontend.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-bold">2</td><td>Frontend</td><td>Requests a fresh cryptographic challenge nonce from backend (<code className="font-mono text-xs">GET /api/nonce</code>).</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-bold">3</td><td>Backend</td><td>Generates unpredictable 8+ character nonce, binds to session state, and returns it.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-bold">4</td><td>Frontend</td><td>Formats EIP-4361 message with domain, address, nonce, chainId, and issuedAt.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-bold">5</td><td>Wallet</td><td>Prompts user to sign plaintext message via <code className="font-mono text-xs">personal_sign</code> (free, 0 gas).</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-bold">6</td><td>Frontend</td><td>Posts original message string + signature hex to <code className="font-mono text-xs">POST /api/verify</code>.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-bold">7</td><td>Backend</td><td>Cryptographically recovers signer address using <code className="font-mono text-xs">ecrecover</code>.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-bold">8</td><td>Backend</td><td>Verifies recovered address == claimed address, valid domain, URI, and expiration.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-bold">9</td><td>Backend</td><td>Immediately burns/consumes the nonce so it can never be replayed.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-bold">10</td><td>Backend</td><td>Issues an authenticated JWT session stored in a secure <code className="font-mono text-xs">HttpOnly; Secure</code> cookie.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#18181b] mb-2">8.3 Seven Non-Negotiable SIWE Security Requirements</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block">1. Single-Use Nonces</span>
            Nonces must be burned immediately upon verification. Reusing a nonce enables replay attacks.
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block">2. Domain &amp; URI Verification</span>
            Backend must verify that the message domain matches the server origin to prevent phishing.
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block">3. Strict Expiration Timestamps</span>
            Messages must include an <code className="font-mono">issuedAt</code> and <code className="font-mono">expirationTime</code> (max 5-10 minutes).
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block">4. HttpOnly Cookies</span>
            Never store session tokens in <code className="font-mono">localStorage</code> where XSS attacks can read them.
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* PART 9: BLOCKCHAIN EVENT INDEXING */}
  <div id="part-9" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 9</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Blockchain Event Indexing</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">9.1 Why Smart Contract Events Matter</h3>
        <p>
          Smart contracts emit events to store logs in the receipt bloom filter. In our voting application:
        </p>
        <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] font-mono text-xs my-2">
          event VoteCast(address indexed voter, uint256 indexed candidateId);
        </div>
        <p className="text-sm">
          Smart contracts cannot read historical logs inside EVM execution. External indexers capture these logs to power live voting dashboards, candidate leaderboards, and audit trails.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-[#18181b] mb-2">9.2 Event Indexing Architecture Pipeline</h4>
        <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">{`[Smart Contract: Voting.sol]
      │ emits event VoteCast(voter, candidateId)
      ▼
[Blockchain Node / RPC WebSocket Logs]
      │ eth_getLogs / eth_subscribe("logs")
      ▼
[Indexer Service: The Graph / Custom Node.js Indexer]
      │ Decodes ABI, verifies confirmation depth (handles block reorgs)
      ▼
[Relational Database: PostgreSQL]
      │ Normalizes into candidates & votes tables with indices
      ▼
[API Layer: GraphQL / REST Endpoints]
      │ Serves cached queries in <50ms
      ▼
[React Frontend Client]`}</pre>
        </div>
      </div>
    </div>
  </div>

  {/* PART 10: BACKEND SERVICES FOR WEB3 */}
  <div id="part-10" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 10</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Backend Services for Web3</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">10.1 Why Full-Stack DApps Use Backends</h3>
        <p>
          While smart contracts handle money and immutable rules, backends solve fundamental limitations of blockchains:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
          <li><strong>Search &amp; Filtering:</strong> Blockchains do not support full-text search, regex, or sorting by popularity.</li>
          <li><strong>Push Notifications:</strong> Wallets cannot natively send emails, SMS, or Discord alerts when someone outbids a vote.</li>
          <li><strong>Metadata Aggregation:</strong> Joining user bios, avatar images, and social links with on-chain wallet addresses.</li>
          <li><strong>API Rate Limit Shields:</strong> Caching RPC calls so 10,000 simultaneous users do not exhaust your Alchemy/Infura quotas.</li>
        </ul>
      </div>

      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <pre className="whitespace-pre-wrap">{`// Fetching candidate descriptions from backend REST API:
async function fetchCandidates() {
  const response = await fetch("https://api.prepspaces.com/api/candidates");
  if (!response.ok) throw new Error("Failed to load candidate metadata");
  return response.json();
}`}</pre>
      </div>
    </div>
  </div>

  {/* PART 11: THE GRAPH PROTOCOL FUNDAMENTALS */}
  <div id="part-11" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 11</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">The Graph Protocol Fundamentals</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">11.1 Subgraph Components</h3>
        <p>
          <strong>The Graph</strong> is a decentralized indexing protocol that organizes blockchain data into queryable Subgraphs:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs sm:text-sm">
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block font-mono">1. subgraph.yaml</span>
            Manifest defining contract addresses, network (Sepolia), target events, and handler functions.
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block font-mono">2. schema.graphql</span>
            GraphQL schema defining indexed entities (Candidate, VoteCast, Voter).
          </div>
          <div className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
            <span className="font-bold text-[#ea580c] block font-mono">3. mapping.ts</span>
            AssemblyScript code compiling to WASM that maps raw event params into saved entities.
          </div>
        </div>
      </div>

      <div className="bg-[#18181b] text-gray-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
        <div className="text-cyan-400 font-bold mb-2">// Querying a Subgraph from React:</div>
        <pre className="whitespace-pre-wrap">{`query GetCandidateLeaderboard {
  candidates(orderBy: voteCount, orderDirection: desc) {
    id
    name
    voteCount
  }
}`}</pre>
      </div>
    </div>
  </div>

  {/* PART 12: ON-CHAIN AND OFF-CHAIN DATA */}
  <div id="part-12" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 12</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">On-Chain vs. Off-Chain Storage Architecture</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">12.1 The Economics of Blockchain Storage</h3>
        <p>
          Storing 1 megabyte on Ethereum L1 can cost upwards of $20,000 at current gas prices. Efficient Web3 architectures partition application state into appropriate storage layers:
        </p>
      </div>

      {/* Complete Architecture Matrix */}
      <div>
        <h4 className="font-bold text-[#18181b] mb-2">Hybrid Data Architecture Matrix</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Data Entity</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Recommended Storage</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Rationale</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Voting Tally &amp; Results</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">Smart Contract (On-Chain)</td><td className="p-2 border border-[#e7e3da]">Must be trustless, tamper-resistant, and globally verifiable.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Voter Address Eligibility</td><td className="p-2 border border-[#e7e3da] font-bold text-[#ea580c]">Smart Contract (Mapping)</td><td className="p-2 border border-[#e7e3da]">Prevents on-chain double-voting via strict require() assertions.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Candidate Avatar Photos</td><td className="p-2 border border-[#e7e3da] font-bold text-blue-700">IPFS / Arweave</td><td className="p-2 border border-[#e7e3da]">Content-addressed media; too large and expensive for EVM storage.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Candidate Manifestos (PDFs)</td><td className="p-2 border border-[#e7e3da] font-bold text-blue-700">IPFS / Cloud Storage</td><td className="p-2 border border-[#e7e3da]">Hash stored on-chain or off-chain; raw document served via CDN.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Historical VoteCast Logs</td><td className="p-2 border border-[#e7e3da] font-bold text-emerald-700">The Graph / PostgreSQL</td><td className="p-2 border border-[#e7e3da]">Enables fast relational filtering and analytical dashboards.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">User Authentication Session</td><td className="p-2 border border-[#e7e3da] font-bold text-purple-700">Redis / HttpOnly Cookie</td><td className="p-2 border border-[#e7e3da]">Ephemeral session state with 1-hour expiration; never placed on-chain.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  {/* PART 13: APPLICATION STATE MANAGEMENT */}
  <div id="part-13" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 13</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Application State Management in Web3</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">13.1 Four Tiers of DApp State</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">State Category</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Typical Example</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Recommended Management Tool</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Local UI State</td><td className="p-2 border border-[#e7e3da]">Modal open/close, selected candidate ID</td><td className="p-2 border border-[#e7e3da] font-mono text-xs">React useState, useReducer</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Injected Wallet State</td><td className="p-2 border border-[#e7e3da]">Connected account, active chain ID</td><td className="p-2 border border-[#e7e3da] font-mono text-xs">Wagmi / custom useWallet hook</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Canonical Blockchain State</td><td className="p-2 border border-[#e7e3da]">Current vote count, hasVoted boolean</td><td className="p-2 border border-[#e7e3da] font-mono text-xs">TanStack Query + Viem readContract</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Server / Indexer Cache</td><td className="p-2 border border-[#e7e3da]">Candidate biographies, historical graphs</td><td className="p-2 border border-[#e7e3da] font-mono text-xs">TanStack Query + GraphQL/REST fetch</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">13.2 State Synchronization Lifecycle</h3>
        <p className="text-xs sm:text-sm">
          When casting a vote: Submit transaction &rarr; display pending status &rarr; await mined receipt &rarr; verify receipt status &rarr; refetch candidate counts &rarr; update user voting eligibility &rarr; display confirmation banner.
        </p>
      </div>
    </div>
  </div>

  {/* PART 14: ERROR HANDLING AND UX */}
  <div id="part-14" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 14</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Error Handling and User Experience</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">14.1 Common DApp Errors &amp; Remediations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">Error Type</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Root Cause</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Recommended UX Response</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold text-red-600">User Rejected (4001)</td><td className="p-2 border border-[#e7e3da]">User clicked &quot;Reject&quot; in MetaMask modal</td><td className="p-2 border border-[#e7e3da]">Reset UI to idle: &quot;You canceled the transaction.&quot;</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold text-amber-600">Wrong Network (4901)</td><td className="p-2 border border-[#e7e3da]">Wallet connected to unsupported chain</td><td className="p-2 border border-[#e7e3da]">Prompt automatic network switch via wallet_switchEthereumChain.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold text-amber-600">Insufficient Funds</td><td className="p-2 border border-[#e7e3da]">Account lacks enough ETH for gas fees</td><td className="p-2 border border-[#e7e3da]">Display Sepolia testnet faucet link with instructions.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold text-red-600">Execution Reverted</td><td className="p-2 border border-[#e7e3da]">require(&quot;Already voted&quot;) failed on-chain</td><td className="p-2 border border-[#e7e3da]">Display friendly message: &quot;This wallet has already cast a vote.&quot;</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">RPC Unavailable</td><td className="p-2 border border-[#e7e3da]">Public RPC endpoint rate-limited or down</td><td className="p-2 border border-[#e7e3da]">Automatically retry with secondary fallback provider.</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Nonce Error</td><td className="p-2 border border-[#e7e3da]">Transaction nonce conflict in mempool</td><td className="p-2 border border-[#e7e3da]">Prompt user to reset account nonce in MetaMask settings.</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Contract Not Deployed</td><td className="p-2 border border-[#e7e3da]">Wrong address configured for active chain</td><td className="p-2 border border-[#e7e3da]">Display developer configuration error alert banner.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  {/* PART 15: DAPP DEPLOYMENT */}
  <div id="part-15" className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 15</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Production DApp Deployment Architecture</h2>
    </div>

    <div className="space-y-6 text-[#27272a] text-sm sm:text-base leading-relaxed">
      <div>
        <h3 className="text-lg font-bold text-[#18181b] mb-2">15.1 Multi-Tier Cloud Deployment Stack</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-[#e7e3da]">
            <thead>
              <tr className="bg-[#f6f4ee] text-[#18181b]">
                <th className="p-2.5 border border-[#e7e3da] font-bold">DApp Tier</th>
                <th className="p-2.5 border border-[#e7e3da] font-bold">Production Hosting Option</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">React Frontend</td><td className="p-2 border border-[#e7e3da]">Cloudflare Pages, Vercel, or decentralized IPFS / ENS</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Backend Microservices</td><td className="p-2 border border-[#e7e3da]">Cloudflare Workers, AWS Lambda, or Docker VPS</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">Database</td><td className="p-2 border border-[#e7e3da]">PostgreSQL on Supabase, Neon, or AWS RDS</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Smart Contracts</td><td className="p-2 border border-[#e7e3da]">Ethereum Sepolia testnet or Mainnet (verified on Etherscan)</td></tr>
              <tr><td className="p-2 border border-[#e7e3da] font-semibold">RPC Infrastructure</td><td className="p-2 border border-[#e7e3da]">Alchemy, Infura, or QuickNode with failover clusters</td></tr>
              <tr className="bg-[#fbfaf8]"><td className="p-2 border border-[#e7e3da] font-semibold">Event Indexer</td><td className="p-2 border border-[#e7e3da]">The Graph Studio, Goldsky, or custom self-hosted worker</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#18181b] mb-2">15.2 The 11-Point Production Deployment Checklist</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 1. Verify contracts on Sepolia Etherscan with exact compiler version</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 2. Enforce strict chain ID checks in frontend (11155111)</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 3. Store contract addresses in environment configuration</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 4. Lock backend database and SIWE secret keys in secret managers</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 5. Restrict RPC API keys by domain origin and contract address</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 6. Comprehensive manual test of wallet connection and network switches</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 7. Test write transaction flows with positive and revert test cases</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 8. Ensure client-side VITE_ variables contain no private secrets</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 9. Configure custom domain with strict HTTPS/SSL certificates</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 10. Audit UX on mobile browsers (MetaMask Mobile, Rainbow)</div>
          <div className="p-2.5 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">&#10003; 11. Monitor backend and Subgraph indexing synchronization health</div>
        </div>
      </div>
    </div>
  </div>

</section>
'''
