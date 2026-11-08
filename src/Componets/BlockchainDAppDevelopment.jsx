import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cpu,
  Code,
  Terminal,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  ListChecks,
  Award
} from "lucide-react";
import ModuleNav from "./ModuleNav";

// 26 Persistent Checklist Items
const CHECKLIST_ITEMS = [
  "14.1 Understand decentralized application (DApp) architecture and compare Web2 vs Web3 paradigms",
  "14.2 Define frontend vs backend separation of concerns and the 'Backend is not the authority' security rule",
  "14.3 Structure a modular React + TypeScript Web3 project directory (components, hooks, contracts, services)",
  "14.4 Differentiate between local UI state, optimistic updates, and canonical blockchain state",
  "14.5 Implement strict TypeScript types for Ethereum addresses, transaction unions, and contract structs",
  "14.6 Master native BigInt for EVM values and apply formatting utilities to prevent precision loss",
  "14.7 Understand the 7-step EIP-1193 browser wallet connection lifecycle",
  "14.8 Initialize Viem Wallet Client with custom(window.ethereum) transport on Sepolia",
  "14.9 Register and clean up accountsChanged and chainChanged event listeners in React effects",
  "14.10 Execute read-only contract calls using Viem Public Client and readContract without gas",
  "14.11 Submit state-changing contract transactions using writeContract with account authorization",
  "14.12 Map the 9-stage transaction lifecycle from wallet prompt to final receipt verification",
  "14.13 Build resilient transaction UI with status notifications and live Etherscan block explorer links",
  "14.14 Master Sign-In with Ethereum (SIWE / EIP-4361) cryptographic challenge-response authentication",
  "14.15 Enforce SIWE security: unique single-use nonces, domain/URI checks, and HTTP-only session cookies",
  "14.16 Understand smart contract event indexing and the difference between logs and storage",
  "14.17 Architect end-to-end event pipelines: Contract -> RPC Logs -> Indexer -> Database -> GraphQL API",
  "14.18 Implement chain reorganization (reorg) resilience and idempotent log processing",
  "14.19 Architect backend Web3 services for off-chain profiles, caching, notifications, and search",
  "14.20 Understand The Graph Protocol: Subgraph manifests, GraphQL schemas, and AssemblyScript mappings",
  "14.21 Analyze trade-offs between on-chain storage (expensive, immutable) and off-chain storage (cheap, mutable)",
  "14.22 Design hybrid storage architectures combining EVM contracts, IPFS/Arweave, and PostgreSQL",
  "14.23 Manage 4 distinct DApp state categories: Local UI, Injected Wallet, On-Chain State, and Server Cache",
  "14.24 Implement robust error classification for user rejections (4001), chain disconnects (4901), and contract reverts",
  "14.25 Plan a production DApp deployment pipeline across Cloudflare Pages/Vercel, RPC clusters, and EVM networks",
  "14.26 Implement, test, and deploy the complete decentralized voting application on Sepolia testnet"
];

// 20 Multiple Choice Questions
const QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "question": "What is the primary architectural difference between a traditional Web2 application and a Web3 DApp?",
    "options": [
      "A) Web2 applications use HTML while DApps use WebAssembly bytecode exclusively",
      "B) In a DApp, core business logic and state are enforced trustlessly by smart contracts on a blockchain rather than a centralized server and database",
      "C) Web2 applications use mobile apps whereas DApps can only run inside desktop Chrome extensions",
      "D) DApps cannot have backend APIs or databases under any circumstances"
    ],
    "answer": 1,
    "explanation": "DApps use smart contracts on a distributed consensus network to enforce business logic and maintain canonical state trustlessly, whereas traditional Web2 applications rely on centralized servers and proprietary database administrators."
  },
  {
    "id": "q2",
    "question": "Why must a Web3 backend service NEVER be treated as the ultimate authority for blockchain state?",
    "options": [
      "A) Because backend servers run slower than Ethereum nodes",
      "B) Because off-chain databases can become out of sync, hacked, or manipulated; the blockchain consensus state is the single source of truth",
      "C) Because SQL databases do not support hexadecimal strings",
      "D) Because smart contracts cannot read JSON data"
    ],
    "answer": 1,
    "explanation": "Off-chain databases are centralized and susceptible to state drift, caching delays, or manipulation. Financial or authorization decisions must always be verified directly against on-chain smart contract storage or cryptographically verified RPC logs."
  },
  {
    "id": "q3",
    "question": "Why is JavaScript's native 'BigInt' mandatory when handling Ethereum Wei and token values in TypeScript frontends?",
    "options": [
      "A) Standard JavaScript Numbers are 64-bit floats that lose precision above Number.MAX_SAFE_INTEGER (9,007,199,254,740,991), while Wei values require 256-bit integer precision",
      "B) BigInt values automatically submit transactions without gas",
      "C) BigInt compiles directly to Solidity opcode MLOAD",
      "D) Web browsers do not support standard integers in TypeScript"
    ],
    "answer": 0,
    "explanation": "Ethereum uses 256-bit unsigned integers (uint256). JavaScript's standard Number type is an IEEE 754 float with only 53 bits of precision (~9e15), causing catastrophic precision loss for typical 18-decimal token balances (1e18 Wei)."
  },
  {
    "id": "q4",
    "question": "Which Viem function is used to execute a read-only smart contract call without requiring wallet approval or gas fees?",
    "options": [
      "A) walletClient.writeContract()",
      "B) publicClient.readContract()",
      "C) publicClient.sendTransaction()",
      "D) walletClient.signMessage()"
    ],
    "answer": 1,
    "explanation": "publicClient.readContract() simulates a call against the node's local state trie via eth_call without creating a transaction, incurring zero gas and requiring no wallet signature."
  },
  {
    "id": "q5",
    "question": "When a user executes a state-changing transaction via walletClient.writeContract(), what does the immediately returned hash represent?",
    "options": [
      "A) Conclusive proof that the transaction was successfully executed and state was updated",
      "B) An identifier proving the transaction was broadcast to the mempool, but NOT that it was mined or succeeded",
      "C) The block hash where the transaction is permanently finalized",
      "D) The deployed smart contract address"
    ],
    "answer": 1,
    "explanation": "The transaction hash is merely a broadcast identifier. The transaction can remain pending in the mempool, get dropped, replaced, or revert on-chain. Success is only confirmed when waitForTransactionReceipt returns status === 'success'."
  },
  {
    "id": "q6",
    "question": "In Sign-In with Ethereum (SIWE / EIP-4361), why does the backend generate a unique, unpredictable nonce for every login request?",
    "options": [
      "A) To calculate the gas fee for the cryptographic signature",
      "B) To prevent replay attacks where an attacker intercepts a valid signature and reuses it to impersonate the user",
      "C) To encrypt the user's private key before sending it to the database",
      "D) To convert the user's address from base58 to hexadecimal"
    ],
    "answer": 1,
    "explanation": "A cryptographic signature of a static message would allow anyone who intercepts it to replay that signature forever. A single-use, cryptographically random nonce tied to the user's session guarantees freshness and prevents replay attacks."
  },
  {
    "id": "q7",
    "question": "Which EIP-1193 error code is returned when a user manually clicks 'Reject' or cancels a transaction prompt in MetaMask?",
    "options": [
      "A) 4900 (Provider Disconnected)",
      "B) 4001 (User Rejected Request)",
      "C) 4901 (Chain Disconnected)",
      "D) -32603 (Internal JSON-RPC Error)"
    ],
    "answer": 1,
    "explanation": "EIP-1193 standardizes error code 4001 as 'User Rejected Request'. Production dApps should catch code 4001 and display an informative cancellation message rather than a generic crash alert."
  },
  {
    "id": "q8",
    "question": "Why is querying historical event logs from block 0 (fromBlock: 0n) discouraged in production dApps?",
    "options": [
      "A) Solidity contracts delete logs after 256 blocks",
      "B) RPC providers enforce query range limits (e.g. max 2,000 to 10,000 blocks) and will throw rate-limit or timeout errors",
      "C) Event logs can only be read inside Hardhat test runners",
      "D) The eth_getLogs method is deprecated in Ethereum post-Merge"
    ],
    "answer": 1,
    "explanation": "Querying millions of historical blocks places massive load on RPC nodes and violates provider range limits. Production dApps query specific block windows, rely on indexed subgraphs (The Graph), or maintain an off-chain indexer."
  },
  {
    "id": "q9",
    "question": "What is the primary role of The Graph Protocol in modern full-stack Web3 architectures?",
    "options": [
      "A) To compile Solidity smart contracts into WebAssembly",
      "B) To index on-chain event logs into a relational store and expose high-performance GraphQL query APIs",
      "C) To store decentralized user profile pictures and videos",
      "D) To sign transactions automatically on behalf of offline users"
    ],
    "answer": 1,
    "explanation": "The Graph is a decentralized indexing protocol that listens for smart contract events, executes mapping functions, stores normalized entity records, and exposes a flexible GraphQL endpoint for frontend dApps."
  },
  {
    "id": "q10",
    "question": "In a decentralized voting dApp, what is the best architectural strategy to store candidate profile pictures?",
    "options": [
      "A) Store base64-encoded image strings directly in Solidity state variables (string public photo)",
      "B) Upload images to IPFS/Arweave or cloud storage and store only the content hash / URI on-chain or in the backend",
      "C) Compile the image pixels into EVM bytecode opcodes",
      "D) Ask voters to upload the candidate photo with every vote transaction"
    ],
    "answer": 1,
    "explanation": "Storing megabytes of raw image data on Ethereum costs thousands of dollars in gas. Decentralized media architectures store media on IPFS/Arweave or object storage and reference only the immutable hash (e.g. ipfs://Qm...) in smart contracts or databases."
  },
  {
    "id": "q11",
    "question": "What is a 'blockchain reorganization' (reorg) and how does it affect event indexers?",
    "options": [
      "A) When an Ethereum node reboots and re-indexes its hard drive",
      "B) When a longer valid proof-of-stake chain replaces a previously accepted block, causing transactions in the orphaned block to be rolled back or re-mined",
      "C) When a smart contract upgrades its proxy implementation",
      "D) When the Ethereum Foundation changes the Solidity compiler version"
    ],
    "answer": 1,
    "explanation": "A reorg occurs when validators switch to a competing fork. If an indexer processed an event from an orphaned block without waiting for finality or tracking block hashes, its database contains invalid phantom data. Indexers must support block rollbacks."
  },
  {
    "id": "q12",
    "question": "In React Web3 development, why should window.ethereum event listeners ('accountsChanged', 'chainChanged') be removed during component cleanup?",
    "options": [
      "A) Because MetaMask disconnects if too many listeners are registered",
      "B) To prevent memory leaks, duplicate state dispatches, and stale closure bugs when components re-render or unmount",
      "C) Because EIP-1193 permits only one listener across the entire browser",
      "D) Because listeners consume gas on every block"
    ],
    "answer": 1,
    "explanation": "Failing to remove event listeners in the return cleanup function of useEffect causes memory leaks and duplicate handler invocations whenever the user switches accounts or networks."
  },
  {
    "id": "q13",
    "question": "What happens if a dApp updates its UI optimistically before waiting for the transaction receipt?",
    "options": [
      "A) The transaction fee is refunded to the user",
      "B) The UI displays an unverified assumption that will mislead the user if the transaction reverts on-chain or fails to mine",
      "C) The transaction is guaranteed to be accepted by validators",
      "D) The user's wallet automatically signs a second transaction"
    ],
    "answer": 1,
    "explanation": "Optimistic UI can improve perceived responsiveness, but in Web3, transactions frequently revert due to out-of-gas, slipped slippage, or state conflicts. Frontends must track pending states and reconcile with receipt.status."
  },
  {
    "id": "q14",
    "question": "In the Voting.sol contract, how does the contract prevent a single wallet address from voting multiple times?",
    "options": [
      "A) By verifying the user's government national ID number",
      "B) By tracking voter addresses in a mapping(address => bool) public hasVoted and requiring !hasVoted[msg.sender]",
      "C) By deleting the contract after the first vote",
      "D) By requiring the voter to send 100 ETH with their vote"
    ],
    "answer": 1,
    "explanation": "Voting.sol maintains a mapping(address => bool) public hasVoted. When a vote is cast, it asserts require(!hasVoted[msg.sender], 'Already voted') and immediately sets hasVoted[msg.sender] = true."
  },
  {
    "id": "q15",
    "question": "What is the primary limitation of preventing duplicate votes solely by wallet address (msg.sender) in smart contracts?",
    "options": [
      "A) Mappings can only hold up to 256 addresses",
      "B) A single human user can easily generate unlimited wallet addresses (Sybil attack), bypassing the restriction without Proof of Humanity or identity checks",
      "C) Addresses expire after 30 days",
      "D) Ethereum does not allow checking msg.sender in view functions"
    ],
    "answer": 1,
    "explanation": "Address-based restrictions are vulnerable to Sybil attacks because creating new cryptographic key pairs is virtually free. Real-world elections require zero-knowledge identity, WorldID, Soulbound tokens, or Merkle-allowlists."
  },
  {
    "id": "q16",
    "question": "Which HTTP header and cookie flag configuration should be used to protect a SIWE backend session token against XSS attacks?",
    "options": [
      "A) localStorage.setItem('token', jwt)",
      "B) Set-Cookie with HttpOnly; Secure; SameSite=Strict",
      "C) document.cookie = 'auth=' + token",
      "D) Access-Control-Allow-Origin: *"
    ],
    "answer": 1,
    "explanation": "Storing session tokens in HttpOnly cookies prevents client-side malicious scripts from accessing the authentication token via JavaScript, mitigating cross-site scripting (XSS) session hijacking."
  },
  {
    "id": "q17",
    "question": "What is the function of the Subgraph Manifest (subgraph.yaml) in The Graph?",
    "options": [
      "A) It compiles the React frontend into static HTML",
      "B) It defines target smart contract addresses, network (e.g. Sepolia), ABI, event signatures to listen for, and mapping handlers",
      "C) It encrypts the Postgres database password",
      "D) It hosts the MetaMask wallet extension"
    ],
    "answer": 1,
    "explanation": "subgraph.yaml is the configuration blueprint for a Subgraph. It specifies data sources, target networks, contract ABIs, events to trigger on, and which AssemblyScript mapping functions to invoke."
  },
  {
    "id": "q18",
    "question": "When connecting MetaMask on Sepolia, what decimal chain ID must the dApp validate against?",
    "options": [
      "A) 1 (Mainnet)",
      "B) 11155111 (Sepolia)",
      "C) 137 (Polygon)",
      "D) 42161 (Arbitrum)"
    ],
    "answer": 1,
    "explanation": "Sepolia testnet has hexadecimal chain ID 0xaa36a7, which equals decimal 11155111. Mainnet is 1, Polygon is 137, and Arbitrum One is 42161."
  },
  {
    "id": "q19",
    "question": "Why does a production DApp architecture separate state into Local UI, Wallet, Blockchain, and Server Cache?",
    "options": [
      "A) To satisfy React component naming conventions",
      "B) Because each state category has fundamentally different update latencies, lifecycles, authorities, and invalidation rules",
      "C) Because browsers only permit 4 useState hooks per file",
      "D) Because Solidity requires 4-tier state variables"
    ],
    "answer": 1,
    "explanation": "Local UI is instant and ephemeral; Wallet state depends on injected extensions and user permissions; Blockchain state is canonical but slow (~12s blocks); Server Cache is fast but potentially stale. Conflating them causes severe bugs."
  },
  {
    "id": "q20",
    "question": "What is the recommended approach for frontend environment variable security when integrating RPC endpoints in Vite?",
    "options": [
      "A) Embed private Alchemy admin keys directly inside client App.tsx",
      "B) Prefix public URLs with VITE_, restrict RPC keys by origin domain / contract address in the provider dashboard, and proxy sensitive calls via backend",
      "C) Encrypt the .env file with a Solidity smart contract",
      "D) Check the private keys into public GitHub repositories"
    ],
    "answer": 1,
    "explanation": "Any variable prefixed with VITE_ is bundled into client JavaScript in plaintext. Never put private master keys in client code; always apply domain/contract allowlists in your RPC provider dashboard or route requests through a secure server proxy."
  }
];

// 14 Senior Web3 Architect Interview Scenarios
const INTERVIEW_QUESTIONS = [
  {
    "id": "int-1",
    "q": "What is a decentralized application (DApp) and how does its trust model differ from a traditional Web2 application?",
    "scenario": "A hiring manager at a DeFi protocol asks you to explain the fundamental architectural shift from Web2 to Web3 to a junior engineer.",
    "answer": "A decentralized application (DApp) is software that coordinates user interactions through a web interface while utilizing decentralized cryptographic protocols and smart contracts on a blockchain to enforce business rules and maintain canonical state.\n\nKey Trust Model Differences:\n1. State Ownership & Custody: In Web2, state resides in centralized databases (PostgreSQL, MongoDB) governed by server administrators. In Web3, critical state (balances, ownership, votes) resides on an immutable, globally distributed blockchain consensus network.\n2. Authentication: Web2 uses passwords, OAuth, and server-issued session tokens. Web3 authenticates via public-key cryptography (secp256k1 signatures) where the user retains exclusive custody of their private keys.\n3. Execution Verification: Web2 business logic runs inside closed proprietary server containers. Web3 business logic executes deterministically on the EVM, where anyone can verify contract bytecode and inspect historical transaction logs.\n4. Infrastructure Pragmatism: Real-world DApps are rarely 100% decentralized. They combine decentralized on-chain contracts with centralized or federated frontends (Vercel, Cloudflare Pages), caching indexers (The Graph), and API microservices for optimal user experience.",
    "keyTakeaways": [
      "DApps enforce business logic trustlessly via smart contracts on distributed consensus networks",
      "Authentication relies on public-key signatures rather than centralized credentials",
      "Modern DApps use hybrid architectures combining on-chain contracts with performant off-chain services"
    ]
  },
  {
    "id": "int-2",
    "q": "What is the difference between a crypto wallet and an on-chain account?",
    "scenario": "During an interview for a frontend Web3 architect role, the interviewer asks you to clarify the terminology often confused by end users and junior developers.",
    "answer": "An on-chain account and a crypto wallet represent two distinct layers in the Web3 stack:\n\n1. On-Chain Account: An Ethereum account is a state entity residing in the blockchain's global state trie. It has an address (20-byte hash), a nonce, a balance in Wei, and either runtime bytecode (Contract Account) or no code (Externally Owned Account / EOA). Accounts exist on-chain permanently regardless of whether the user is online.\n\n2. Crypto Wallet: A wallet (e.g. MetaMask, Rabby, Ledger) is software or hardware that manages cryptographic key pairs (private key, public key). The wallet generates addresses from the public key, securely stores the private key, exposes the EIP-1193 window.ethereum interface to browser applications, and signs transactions and messages upon user confirmation.\n\nCrucial Architectural Rule:\nWallets do NOT store tokens or cryptocurrency. Tokens reside strictly inside smart contract storage on the blockchain. Wallets only hold the private keys necessary to authorize transfers from associated on-chain accounts.",
    "keyTakeaways": [
      "On-chain accounts are state entities in the Ethereum state trie (EOAs or Contracts)",
      "Wallets are key management software/hardware that sign transactions and expose EIP-1193 interfaces",
      "Tokens reside on the blockchain; wallets only store the cryptographic authorization keys"
    ]
  },
  {
    "id": "int-3",
    "q": "What is a smart contract ABI and why can the EVM not interpret raw JavaScript function calls directly?",
    "scenario": "You are asked to explain how frontend code connects to compiled Solidity bytecode during an EVM deep-dive interview.",
    "answer": "The Application Binary Interface (ABI) is the standardized specification defining how high-level data types (strings, addresses, structs, arrays) are serialized into raw binary calldata for the Ethereum Virtual Machine, and how return bytes are deserialized back into high-level types.\n\nWhy the EVM cannot execute raw JavaScript:\n1. Low-Level Bytecode Execution: The EVM is a stack-based virtual machine operating solely on raw bytes, 32-byte words, and opcodes (e.g., CALLDATALOAD, MSTORE). It has no concept of function names, JSON parameters, or JavaScript prototypes.\n2. Function Selectors: To determine which function to run, the EVM checks the first 4 bytes of calldata (the Function Selector, derived as bytes4(keccak256(\"functionName(type1,type2)\"))).\n3. Parameter Encoding: Arguments must be packed according to strict EVM ABI encoding rules (e.g. left-padding 20-byte addresses to 32 bytes, right-padding dynamic strings).\n\nThe ABI JSON schema provides the JavaScript library (Viem or Ethers.js) with the function names, argument types, and return types required to construct valid calldata and decode returned hex bytes.",
    "keyTakeaways": [
      "ABI defines the encoding/decoding standard between high-level languages and EVM bytecode",
      "The EVM operates on 4-byte function selectors and 32-byte ABI-encoded calldata",
      "Client libraries use ABI definitions to serialize JavaScript arguments into raw transaction bytes"
    ]
  },
  {
    "id": "int-4",
    "q": "What is a transaction hash, and why is displaying success immediately upon receiving the hash a critical UX anti-pattern?",
    "scenario": "A candidate dApp displays 'Vote Recorded Successfully!' right after the user clicks confirm in MetaMask. The interviewer asks you to critique this pattern.",
    "answer": "A transaction hash (txHash) is the 32-byte Keccak-256 digest of a signed, RLP-encoded Ethereum transaction.\n\nWhy displaying immediate success is a critical anti-pattern:\n1. Mempool Acceptance != Block Execution: Receiving a hash only proves that the connected RPC node received and broadcast the transaction to the network's transaction pool (mempool).\n2. Risk of Revert: The transaction has not yet been executed by the EVM. It may revert due to a require() check (e.g. 'Already voted', 'Insufficient allowance'), running out of gas, or failing custom assertions.\n3. Mempool Drops & Replacements: During gas price spikes, transactions with low priority fees can sit in the mempool indefinitely, get dropped, or be replaced by speedup/cancel transactions with higher gas fees.\n4. Chain Reorganizations: Even once mined, shallow block reorgs can invalidate unconfirmed blocks.\n\nCorrect Architecture:\nUpon receiving the hash, transition UI to 'confirming' / 'pending'. Display the hash with a link to Etherscan. Await waitForTransactionReceipt({ hash }). Only transition to 'success' when receipt.status === 'success' (status 1).",
    "keyTakeaways": [
      "A transaction hash only confirms mempool broadcast, not on-chain execution success",
      "Transactions can revert, stall, get dropped, or be replaced after broadcast",
      "Always poll or wait for the Transaction Receipt (status === 1) before updating UI to success"
    ]
  },
  {
    "id": "int-5",
    "q": "How does Sign-In with Ethereum (SIWE / EIP-4361) work and how does it prevent replay attacks?",
    "scenario": "You are designing the authentication architecture for a high-security DAO governance portal that requires Web3 wallet login without passwords.",
    "answer": "SIWE (EIP-4361) standardizes wallet-based authentication using off-chain ECDSA message signatures.\n\nEnd-to-End Authentication Lifecycle:\n1. Challenge Generation: The frontend requests a cryptographic nonce from the backend. The backend generates a cryptographically random, single-use string (min 8 alphanumeric characters), binds it to the user's session state with a short TTL (e.g. 5 minutes), and returns it.\n2. Message Construction: The frontend creates an EIP-4361 formatted string containing domain, user address, statement, URI, version, chainId, nonce, and issuedAt timestamp.\n3. Wallet Signing: The user reviews and signs the human-readable plaintext message in MetaMask via personal_sign. No gas fee is charged.\n4. Signature Verification: The frontend posts the message and signature to the backend. The backend cryptographically recovers the signer address using ecrecover / Viem's verifySiweMessage.\n5. Strict Validation Checks: The backend verifies: (a) recovered address matches claimed address, (b) nonce matches session and has not been used, (c) domain matches origin, (d) message has not expired.\n6. Replay Prevention: The backend immediately burns/consumes the nonce in Redis/database so the same signature can NEVER be reused.\n7. Session Issuance: The backend establishes a secure session via an HttpOnly, Secure, SameSite=Strict cookie.",
    "keyTakeaways": [
      "SIWE uses EIP-4361 structured plaintext messages signed off-chain without gas fees",
      "Replay attacks are prevented by single-use, server-generated nonces that expire quickly and burn upon verification",
      "Session tokens must be stored in secure HttpOnly cookies to prevent XSS hijacking"
    ]
  },
  {
    "id": "int-6",
    "q": "How would you design a reliable, scalable event indexing architecture for a dApp processing millions of transactions?",
    "scenario": "The hiring panel asks how you would replace slow, rate-limited RPC getLogs polling with an enterprise indexing pipeline.",
    "answer": "A production event indexing pipeline separates real-time RPC data ingestion from client-facing query serving:\n\nArchitectural Pipeline:\n1. Ingestion Layer: A dedicated indexing service (The Graph node, Envio, or custom Go/Node worker) connects to multiple dedicated archive WebSocket RPC endpoints (Alchemy, QuickNode) with automatic failover.\n2. Log Scraping & Block Reorg Handling: The indexer tracks block numbers and block hashes. To handle reorgs, the indexer maintains a confirmation depth (e.g., 64 blocks on Ethereum L1, or waits for finalized blocks). If a fork is detected, the indexer rolls back database mutations to the common ancestor block.\n3. Normalization & Persistence: Events (e.g. VoteCast(voter, candidateId)) are decoded and written idempotently into an ACID-compliant PostgreSQL database with appropriate B-tree indices on addresses, timestamps, and candidate IDs.\n4. Query Layer (GraphQL / REST): A cached GraphQL API (Hasura, Apollo, or Subgraph query node) serves complex queries, pagination, aggregations, and filtering in sub-50ms latency.\n5. Edge Caching & WebSockets: Frequently queried leaderboards are cached at the edge via Redis / Cloudflare CDN. Live updates are pushed to frontends via WebSocket subscriptions (GraphQL Subscriptions or Pusher).",
    "keyTakeaways": [
      "Decouple raw blockchain RPC log scraping from frontend read APIs",
      "Maintain confirmation depth and rollback mechanisms to handle chain reorganizations gracefully",
      "Persist normalized event entities in indexed relational stores (Postgres) and serve via cached GraphQL"
    ]
  },
  {
    "id": "int-7",
    "q": "How would you prevent duplicate voting in a decentralized voting application, both on-chain and against Sybil attacks?",
    "scenario": "You are asked to architect a secure national student council election using Ethereum smart contracts.",
    "answer": "Preventing duplicate voting requires addressing two distinct vectors: single-wallet replay and multi-wallet Sybil attacks.\n\n1. On-Chain Wallet-Level Protection (Contract State):\nIn Solidity, maintain mapping(address => bool) public hasVoted.\nInside vote(candidateId):\nrequire(!hasVoted[msg.sender], \"Already voted\");\nhasVoted[msg.sender] = true;\ncandidates[candidateId - 1].voteCount++;\nemit VoteCast(msg.sender, candidateId);\nThis guarantees that a single Ethereum private key can never cast more than one vote on-chain.\n\n2. Sybil Attack Prevention (Identity Verification):\nBecause generating Ethereum addresses is free, a single malicious user can spin up 1,000 wallets. To prevent this:\n- Merkle Allowlist: The organizer pre-computes a Merkle tree of eligible voter public keys (or hashes of university email / student IDs). Voters submit a Merkle proof with their vote.\n- Zero-Knowledge Semaphore / MACI (Minimum Anti-Collusion Infrastructure): Voters register once and cast votes using ZK-SNARK proofs, decoupling their legal identity from the cast vote while mathematically ensuring 1-person-1-vote and preventing vote-buying.\n- Decentralized Identity (DID / Soulbound Tokens): Require the voter to hold a non-transferable Soulbound Token (SBT) or verified WorldID proof.",
    "keyTakeaways": [
      "On-chain duplicate voting is prevented via mapping(address => bool) and require assertions",
      "Address restrictions do not prevent Sybil attacks where one person creates multiple wallets",
      "Real-world voting requires Merkle allowlists, Soulbound identity tokens, or Zero-Knowledge proofs (MACI/Semaphore)"
    ]
  },
  {
    "id": "int-8",
    "q": "How do you synchronize on-chain smart contract state with an off-chain database without race conditions?",
    "scenario": "A Web3 marketplace has a PostgreSQL database for fast search, but transactions happen on Ethereum. How do you keep them synchronized?",
    "answer": "Synchronizing on-chain state with off-chain databases without race conditions requires an event-driven, idempotent ingestion pattern:\n\nCore Synchronization Principles:\n1. Transaction Hash & Log Index Primary Keys: Off-chain event records must use a compound primary key of (transaction_hash, log_index). This guarantees that reprocessing the same block or event never produces duplicate rows (UPSERT / ON CONFLICT DO NOTHING).\n2. Block Number Sequencing: Each indexed entity stores last_updated_block. If an event arrives with a blockNumber <= last_updated_block, verify logIndex before mutating to prevent out-of-order state overwrites.\n3. Optimistic UI with Server Reconciliation: When a user votes or bids:\n   - Frontend triggers optimistic UI state.\n   - Transaction is submitted to the blockchain.\n   - Indexer ingests the mined event log, verifies receipt status, updates Postgres, and emits a WebSocket notification.\n   - Frontend refetches canonical state from the API, reconciling optimistic assumptions.\n4. Handling Chain Reorgs: Maintain an event history log with block hashes. If a block is orphaned, execute a compensation transaction rolling back entities updated in that block.",
    "keyTakeaways": [
      "Use compound primary keys (transactionHash, logIndex) to enforce database idempotency",
      "Sequence updates using blockNumber and logIndex to prevent out-of-order race conditions",
      "Reconcile optimistic frontend state against confirmed database events via WebSockets"
    ]
  },
  {
    "id": "int-9",
    "q": "How would you design a Web3 frontend architecture that gracefully supports multiple networks (Ethereum, Arbitrum, Polygon)?",
    "scenario": "A dApp is expanding from Ethereum L1 to Arbitrum and Optimism. What frontend architecture changes are needed?",
    "answer": "Supporting multi-network dApps requires decoupling chain configuration, contract addresses, and RPC providers from component presentation:\n\nMulti-Chain Architecture Strategy:\n1. Centralized Chain Registry: Create a centralized configuration mapping chain IDs to contract addresses, block explorer URLs, and dedicated RPC endpoints.\n2. Injected Wallet Network Switching: If the user connects to Polygon while viewing an Arbitrum contract, trigger wallet_switchEthereumChain via EIP-1193. If the chain is unrecognized, catch error 4902 and trigger wallet_addEthereumChain.\n3. Multi-Client Architecture: Maintain separate Viem Public Clients for each supported chain. This allows the frontend to read balances and contract state from Arbitrum and Ethereum simultaneously even if the user's MetaMask is currently set to Polygon.\n4. Chain-Aware Routing & URL State: Store the active chain in the URL (e.g. /app/arbitrum/vote or /app/sepolia/vote). This ensures bookmarks and shared links load the correct network parameters automatically.",
    "keyTakeaways": [
      "Decouple contract addresses and RPC transports into a chain-indexed configuration registry",
      "Use separate Public Clients to read multi-chain data independent of the user's active wallet chain",
      "Implement EIP-1193 wallet_switchEthereumChain with error 4902 wallet_addEthereumChain fallback"
    ]
  },
  {
    "id": "int-10",
    "q": "What are the four distinct categories of state in a Web3 application and how should they be managed?",
    "scenario": "An interviewer reviews your dApp code and asks how you structure application state across various React libraries.",
    "answer": "A robust Web3 dApp separates state into four distinct lifecycles:\n\n1. Local UI State:\n   - Scope: Ephemeral, component-specific (e.g. modal open/closed, active tab, selected candidate in a form).\n   - Tool: React useState, useReducer.\n\n2. Injected Wallet State:\n   - Scope: External provider state (connected account address, active chain ID, connection status, pending signature modals).\n   - Tool: Wagmi / custom useWallet hook wrapping window.ethereum with accountsChanged/chainChanged listeners.\n\n3. Canonical On-Chain State:\n   - Scope: Verifiable data from smart contract storage (candidate vote counts, token balances, allowances).\n   - Latency: Mined block intervals (~12 seconds on L1). Zero gas to read via eth_call.\n   - Tool: TanStack Query (React Query) with Viem publicClient.readContract, configured with staleTime and automatic refetch on new blocks.\n\n4. Server & Indexer State:\n   - Scope: Off-chain user profiles, historical event logs, aggregated statistics, search indexes.\n   - Tool: TanStack Query fetching from REST / GraphQL endpoints with cache invalidation on transaction confirmations.",
    "keyTakeaways": [
      "Local UI state is instant and component-scoped (useState)",
      "Wallet state tracks external EIP-1193 provider events (Wagmi/useWallet)",
      "Blockchain state is canonical on-chain storage managed via TanStack Query and Viem",
      "Server state caches aggregated off-chain metadata and historical indexed logs"
    ]
  },
  {
    "id": "int-11",
    "q": "What is the difference between on-chain and off-chain data storage, and how do you design a hybrid storage matrix?",
    "scenario": "A client asks whether they should store 500-page governance PDF proposals directly inside a Solidity contract.",
    "answer": "Storing large unstructured files directly inside Ethereum storage slots (SSTORE) costs approximately 20,000 gas per 32 bytes (~625,000 gas per kilobyte), making storing a 1MB PDF cost thousands of dollars in transaction fees.\n\nHybrid Storage Matrix:\n1. On-Chain (EVM Storage):\n   - What: Token balances, voting tally, transfer allowances, state transition flags.\n   - Characteristics: Immutable, globally verifiable, highly expensive, minimal storage.\n2. Decentralized Off-Chain (IPFS / Arweave):\n   - What: NFT metadata JSON, governance proposal markdown/PDFs, candidate avatar photos.\n   - Characteristics: Content-addressed (immutable hash), permanent or pinned, zero gas for storage, public retrieval.\n3. Centralized Off-Chain (PostgreSQL / Redis):\n   - What: User email, notification settings, cached leaderboards, search indexes, audit logs.\n   - Characteristics: Sub-millisecond reads/writes, mutable, relational indexing, private.\n\nGovernance DApp Example:\n- Proposal text & PDFs are uploaded to IPFS (ipfs://Qm...).\n- Proposal creation smart contract only stores bytes32 ipfsHash, voting deadline, and vote counts.\n- Search and comments are stored in PostgreSQL.",
    "keyTakeaways": [
      "EVM storage is meant strictly for critical, compact state due to high gas costs",
      "Decentralized storage (IPFS/Arweave) holds large immutable media and documents via content hashes",
      "Traditional databases handle high-speed search, indexing, caching, and user preferences"
    ]
  },
  {
    "id": "int-12",
    "q": "How would you handle a situation where a user submits a transaction with too low a gas price and it gets stuck pending in the mempool?",
    "scenario": "Your users complain that during NFT mints, their transactions stay pending for hours and block subsequent actions.",
    "answer": "In Ethereum, accounts have a sequential nonce. If transaction nonce N is stuck in the mempool due to a low gas fee, all subsequent transactions (N+1, N+2) from that account are blocked from executing.\n\nEngineering Remediation Strategies:\n1. Speed Up Transaction (Gas Replacement):\n   - Prompt the user to replace the pending transaction with a new transaction having the EXACT SAME NONCE, but with a minimum 10%\u201320% higher maxPriorityFeePerGas and maxFeePerGas.\n   - The higher gas fee incentivizes validators to pick the new transaction, automatically superseding and canceling the original transaction.\n2. Cancel Transaction:\n   - Send a 0 ETH transfer to self (msg.sender) using the EXACT SAME NONCE, with significantly higher priority gas. This consumes minimal gas (21,000) and unblocks the account nonce immediately.\n3. Frontend Nonce Management:\n   - When preparing transactions, check pending transaction count via publicClient.getTransactionCount({ address, blockTag: 'pending' }) vs 'latest'.\n   - Track active pending hashes in localStorage and show an interactive 'Speed Up / Cancel' button in the dApp UI.",
    "keyTakeaways": [
      "Transactions execute in strict nonce order; a stuck nonce blocks all subsequent account activity",
      "Speed up transactions by broadcasting with the identical nonce and >=10% higher priority fee",
      "Cancel a stuck transaction by sending a 0 ETH transfer to self with the same nonce and higher gas"
    ]
  },
  {
    "id": "int-13",
    "q": "How do you secure a Web3 decentralized application against common frontend security vulnerabilities (DNS spoofing, injected provider manipulation, and malicious RPC tampering)?",
    "scenario": "You are leading a security audit of a Tier-1 decentralized exchange frontend before mainnet launch.",
    "answer": "Securing a Web3 frontend requires defensive engineering across DNS, client execution, and provider communications:\n\n1. Injected Provider Sandboxing:\n   - Malicious browser extensions can monkey-patch window.ethereum.\n   - Use EIP-6963 (Multi Injected Provider Discovery) to discover verified providers via standard window events (eip6963:announceProvider) rather than blindly trusting the global window.ethereum object.\n2. Content Security Policy (CSP) & Subresource Integrity (SRI):\n   - Enforce strict CSP headers restricting script-src and connect-src strictly to allowlisted RPC endpoints (Alchemy, Infura) and trusted IPFS gateways.\n   - Use SRI hashes on all external CDN scripts to prevent supply-chain injection.\n3. RPC Response Validation & Dual-Node Consensus:\n   - Public RPC nodes can return fake or stale block data.\n   - For critical financial operations, query two independent RPC providers concurrently and compare returned state hashes or block roots.\n4. Calldata Human-Readability & Simulation:\n   - Integrate transaction simulation APIs (Tenderly, Blowfish, Pocket Universe) to show users the exact balance and state changes before they sign in MetaMask.",
    "keyTakeaways": [
      "Adopt EIP-6963 to discover verified wallet providers without window.ethereum hijacking risks",
      "Enforce strict Content Security Policy (CSP) headers limiting script and RPC origins",
      "Simulate transactions prior to signing and cross-verify RPC data across independent providers"
    ]
  },
  {
    "id": "int-14",
    "q": "Explain the end-to-end deployment workflow of a full-stack DApp from local Solidity development to production hosting.",
    "scenario": "Walk the panel through the complete engineering release pipeline of a production-grade DApp.",
    "answer": "A production Web3 release workflow encompasses three interconnected pipelines:\n\n1. Smart Contract Pipeline (Foundry / Hardhat):\n   - Author smart contracts in Solidity with comprehensive unit, fuzz, and invariant test suites.\n   - Deploy to local Anvil node for integration testing.\n   - Deploy to Sepolia testnet using deterministic CREATE2 proxies.\n   - Verify contract source code on Etherscan using automated Forge verify-contract scripts.\n   - Execute third-party security audits prior to mainnet deployment.\n\n2. Indexer & Backend Pipeline (The Graph & Cloudflare/Node):\n   - Update Subgraph manifest (subgraph.yaml) with deployed contract addresses and start block.\n   - Generate TypeScript types from ABI via graph codegen.\n   - Deploy Subgraph to The Graph Studio / Goldsky and wait for 100% block synchronization.\n   - Deploy backend API microservices (SIWE auth, caching) with environment variables locked in Doppler or AWS Secrets Manager.\n\n3. Frontend Pipeline (React / Vite / Cloudflare Pages / IPFS):\n   - Run linter, TypeScript check (tsc --noEmit), and Vitest component test suites.\n   - Build static production assets via vite build.\n   - Deploy frontend to decentralized or edge hosting: Cloudflare Pages / Vercel with custom domain and HTTPS.\n   - Optionally publish static build to IPFS via Pinata or Fleek and link to an ENS domain (e.g. dapp.eth) for maximum censorship resistance.",
    "keyTakeaways": [
      "Smart contracts must be thoroughly tested, verified on block explorers, and deployed deterministically",
      "Subgraphs and backend services must achieve 100% synchronization before routing frontend traffic",
      "Frontends should be deployed to global edge CDNs (Cloudflare Pages) or pinned to IPFS and linked via ENS"
    ]
  }
];

// Storage Matrix Static Data
const STORAGE_ENTITIES = [
  {
    key: "votes",
    title: "1. Voting Tally",
    recommendedTier: "Smart Contract Storage (EVM State)",
    gasCost: "~45,000 gas per write (SSTORE)",
    queryLatency: "Instant via eth_call (0ms on-chain)",
    censorshipResistance: "Maximum (Consensus Enforced)",
    mutability: "Deterministic Smart Contract Logic Only",
    rationale: "Official voting counts and election results must be permanently tamper-proof, globally verifiable, and settled by blockchain consensus."
  },
  {
    key: "avatar",
    title: "2. Candidate Avatar",
    recommendedTier: "Decentralized IPFS / Arweave",
    gasCost: "0 gas (Content-Addressed Off-Chain)",
    queryLatency: "~200-400ms via IPFS Gateway",
    censorshipResistance: "High (Content Addressed Hash)",
    mutability: "Immutable (Hash pinned on IPFS)",
    rationale: "Storing high-resolution image files on Ethereum costs thousands of dollars in gas. Content-addressed storage preserves immutability for free."
  },
  {
    key: "eligibility",
    title: "3. Voter Eligibility",
    recommendedTier: "Smart Contract (Mapping / Merkle Root)",
    gasCost: "~22,000 gas per voter verification",
    queryLatency: "Instant on-chain lookup",
    censorshipResistance: "Maximum",
    mutability: "State Boolean (hasVoted[voter] = true)",
    rationale: "Double-voting prevention must be enforced at the EVM execution layer so unauthorized or duplicate ballots unconditionally revert."
  },
  {
    key: "comments",
    title: "4. Discussion Feed",
    recommendedTier: "Centralized PostgreSQL + Redis",
    gasCost: "0 gas (Off-Chain REST API)",
    queryLatency: "<20ms Query Execution",
    censorshipResistance: "Moderate (Governed by Moderator)",
    mutability: "Fully Mutable (CRUD Operations)",
    rationale: "Community discussion comments, likes, and reply threads require full-text search, rapid pagination, and spam filtering better suited for relational databases."
  },
  {
    key: "session",
    title: "5. Auth Session",
    recommendedTier: "Redis / HttpOnly Cookie (SIWE)",
    gasCost: "0 gas (Cryptographic Off-Chain)",
    queryLatency: "<2ms Memory Lookup",
    censorshipResistance: "Internal Application Scope",
    mutability: "Ephemeral (1-Hour Session TTL)",
    rationale: "Authentication tokens must expire quickly and should never be exposed on a public immutable blockchain where anyone can inspect them."
  }
];

export default function BlockchainDAppDevelopment() {
  const navigate = useNavigate();

  // Navigation tab state: interactive | theory | lab | assessment | tracker
  const [activeTab, setActiveTab] = useState("interactive");

  // Checklist State with LocalStorage Persistence
  const [checklistState, setChecklistState] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m14_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("prepspaces_blockchain_m14_progress", JSON.stringify(checklistState));
    } catch (e) {
      console.error("Failed to save checklist state to localStorage", e);
    }
  }, [checklistState]);

  const toggleChecklistItem = (idx) => {
    setChecklistState(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const selectAllChecklist = () => {
    const all = {};
    CHECKLIST_ITEMS.forEach((_, idx) => { all[idx] = true; });
    setChecklistState(all);
  };

  const resetChecklist = () => {
    setChecklistState({});
  };

  const completedCount = useMemo(() => {
    return Object.values(checklistState).filter(Boolean).length;
  }, [checklistState]);

  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const handleSelectAnswer = (qId, optionIdx) => {
    if (selectedAnswers[qId] !== undefined) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
  };

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) score++;
    });
    return score;
  }, [selectedAnswers]);

  // Interview Accordion State
  const [expandedInterview, setExpandedInterview] = useState(null);
  const toggleInterview = (id) => {
    setExpandedInterview(prev => prev === id ? null : id);
  };

  // ==========================================
  // Interactive Simulator 1: Voting DApp
  // ==========================================
  const [simulatorTab, setSimulatorTab] = useState("voting");
  const [votingActiveAccount, setVotingActiveAccount] = useState("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  const [selectedCandidateId, setSelectedCandidateId] = useState(1);
  const [hasVotedMapping, setHasVotedMapping] = useState({
    "0xab5801a7d398351b8be11c439e05c5b3259aec9b": true
  });
  const [votingCandidates, setVotingCandidates] = useState([
    { id: 1, name: "Alice", proposal: "ZK-Rollup Layer 2 Scaling Protocol", voteCount: 42 },
    { id: 2, name: "Bob", proposal: "Decentralized Zero-Knowledge Identity", voteCount: 37 },
    { id: 3, name: "Charlie", proposal: "Decentralized IPFS / Filecoin Storage", voteCount: 29 }
  ]);
  const [votingTxStage, setVotingTxStage] = useState("idle");
  const [votingTxHash, setVotingTxHash] = useState(null);
  const [votingTxMessage, setVotingTxMessage] = useState("");

  const handleVotingAccountSwitch = (newAcc) => {
    setVotingActiveAccount(newAcc);
    setVotingTxStage("idle");
    setVotingTxHash(null);
  };

  const handleCastVote = (candidateId) => {
    setSelectedCandidateId(candidateId);
    const lowerAcc = votingActiveAccount.toLowerCase();
    if (hasVotedMapping[lowerAcc]) {
      setVotingTxStage("failed");
      setVotingTxMessage("Execution Reverted: require(!hasVoted[msg.sender], 'Already voted')");
      return;
    }

    setVotingTxStage("signing");
    setVotingTxMessage("Awaiting signature confirmation in MetaMask popup...");
    setVotingTxHash(null);

    setTimeout(() => {
      // Deterministic pseudo-hash for demonstration:
      const pseudoHash = "0x" + Math.abs(candidateId * 987654321 + lowerAcc.charCodeAt(3)).toString(16).padEnd(64, "7");
      setVotingTxHash(pseudoHash);
      setVotingTxStage("confirming");
      setVotingTxMessage("Transaction broadcast! Pending block inclusion on Sepolia...");

      setTimeout(() => {
        setVotingTxStage("success");
        setVotingTxMessage("Vote successfully confirmed in Block #7,221,419! Status: 0x1 (Success)");
        setHasVotedMapping(prev => ({ ...prev, [lowerAcc]: true }));
        setVotingCandidates(prev => prev.map(c => c.id === candidateId ? { ...c, voteCount: c.voteCount + 1 } : c));
      }, 1200);
    }, 1000);
  };

  const handleResetVoting = () => {
    setHasVotedMapping({});
    setVotingCandidates([
      { id: 1, name: "Alice", proposal: "ZK-Rollup Layer 2 Scaling Protocol", voteCount: 42 },
      { id: 2, name: "Bob", proposal: "Decentralized Zero-Knowledge Identity", voteCount: 37 },
      { id: 3, name: "Charlie", proposal: "Decentralized IPFS / Filecoin Storage", voteCount: 29 }
    ]);
    setVotingTxStage("idle");
    setVotingTxHash(null);
    setVotingTxMessage("");
  };

  // ==========================================
  // Interactive Simulator 2: SIWE Flow
  // ==========================================
  const [siweStep, setSiweStep] = useState(0);
  const [siweNonce, setSiweNonce] = useState("");
  const [siweSignature, setSiweSignature] = useState("");
  const [siweSessionActive, setSiweSessionActive] = useState(false);

  const siweMessageText = useMemo(() => {
    return `prepspaces.com wants you to sign in with your Ethereum account:
${votingActiveAccount}

Sign in to PrepSpaces Full-Stack DApp.
URI: https://prepspaces.com/login
Version: 1
Chain ID: 11155111
Nonce: ${siweNonce || "a8d2c91f"}
Issued At: 2026-11-08T10:00:00.000Z
Expiration Time: 2026-11-08T10:10:00.000Z`;
  }, [votingActiveAccount, siweNonce]);

  const handleAdvanceSiwe = () => {
    if (siweStep === 0) {
      setSiweNonce("8f4b2a9e");
      setSiweStep(1);
    } else if (siweStep === 1) {
      setSiweStep(2);
    } else if (siweStep === 2) {
      setSiweSignature("0x3a9f7e8b2c1d4a6f5e8b9a0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f1b");
      setSiweStep(3);
    } else if (siweStep === 3) {
      setSiweStep(4);
    } else if (siweStep === 4) {
      setSiweSessionActive(true);
      setSiweStep(5);
    }
  };

  const handleResetSiwe = () => {
    setSiweStep(0);
    setSiweNonce("");
    setSiweSignature("");
    setSiweSessionActive(false);
  };

  // ==========================================
  // Interactive Simulator 3: The Graph
  // ==========================================
  const [graphPreset, setGraphPreset] = useState("candidates");
  const [graphLatency, setGraphLatency] = useState(74);

  const graphQueries = {
    candidates: `query GetCandidatesLeaderboard {
  candidates(orderBy: voteCount, orderDirection: desc) {
    id
    name
    voteCount
  }
}`,
    voteCasts: `query GetRecentVoteCasts {
  voteCasts(first: 3, orderBy: timestamp, orderDirection: desc) {
    id
    voter
    candidateId
    transactionHash
    blockNumber
  }
}`,
    voterLookup: `query GetVoterHistory {
  voter(id: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045") {
    id
    hasVoted
    candidateVotedFor
    timestamp
  }
}`
  };

  const graphResponses = {
    candidates: JSON.stringify({
      data: {
        candidates: [
          { id: "1", name: "Alice", voteCount: "43" },
          { id: "2", name: "Bob", voteCount: "37" },
          { id: "3", name: "Charlie", voteCount: "29" }
        ]
      }
    }, null, 2),
    voteCasts: JSON.stringify({
      data: {
        voteCasts: [
          {
            id: "0x4f8a...-1",
            voter: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            candidateId: "1",
            transactionHash: "0x4f8a9e2c1b7d5a...",
            blockNumber: "7221419"
          },
          {
            id: "0x7b2c...-0",
            voter: "0xab5801a7d398351b8be11c439e05c5b3259aec9b",
            candidateId: "2",
            transactionHash: "0x7b2c8a1e3f9d4b...",
            blockNumber: "7221412"
          }
        ]
      }
    }, null, 2),
    voterLookup: JSON.stringify({
      data: {
        voter: {
          id: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
          hasVoted: true,
          candidateVotedFor: "1",
          timestamp: "1731057600"
        }
      }
    }, null, 2)
  };

  const graphQueryText = graphQueries[graphPreset];
  const [graphResponseText, setGraphResponseText] = useState(graphResponses.candidates);

  const handleGraphPresetChange = (preset) => {
    setGraphPreset(preset);
    setGraphResponseText(graphResponses[preset]);
  };

  const handleExecuteGraphQuery = () => {
    setGraphLatency(Math.floor(55 + Math.random() * 40));
    setGraphResponseText(graphResponses[graphPreset]);
  };

  // ==========================================
  // Interactive Simulator 4: Storage Matrix
  // ==========================================
  const [selectedStorageKey, setSelectedStorageKey] = useState("votes");
  const storageEntities = STORAGE_ENTITIES;
  const activeStorageDetail = useMemo(() => {
    return storageEntities.find(s => s.key === selectedStorageKey);
  }, [selectedStorageKey, storageEntities]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] pb-28 sm:pb-36">
      {/* TOP HEADER */}
      <div className="bg-white border-b border-[#e7e3da] sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ea580c] mb-1">
                <Code className="w-4 h-4" />
                <span>BLOCKCHAIN TECHNOLOGY • UNIVERSITY-LEVEL CURRICULUM</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#18181b]">
                Module 14: Full-Stack DApp Development
              </h1>
              <p className="text-xs sm:text-sm text-[#52525b] mt-0.5">
                React • Solidity • Viem • SIWE Authentication • The Graph • Production Web3 Architecture
              </p>
            </div>

            {/* TAB BUTTONS */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
              <button
                onClick={() => setActiveTab("interactive")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "interactive"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Simulators</span>
              </button>
              <button
                onClick={() => setActiveTab("theory")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "theory"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Theory (Parts 1-15)</span>
              </button>
              <button
                onClick={() => setActiveTab("lab")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "lab"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Voting DApp Lab</span>
              </button>
              <button
                onClick={() => setActiveTab("assessment")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "assessment"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Quiz &amp; Interviews</span>
              </button>
              <button
                onClick={() => setActiveTab("tracker")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === "tracker"
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "text-[#27272a] hover:text-[#ea580c] hover:bg-white/60"
                }`}
              >
                <ListChecks className="w-3.5 h-3.5" />
                <span>Tracker ({progressPercent}%)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODULE NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <ModuleNav currentModuleId="dapp-development" />
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
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


        {activeTab === "theory" && (
          
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

        )}

        {activeTab === "lab" && (
          
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

        )}

        {activeTab === "assessment" && (
          
<section id="assessment-section" className="space-y-12">
  {/* SECTION HEADER */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Assessment</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Knowledge Assessment &amp; Senior Architect Scenarios</h2>
    </div>
    <p className="text-[#27272a] text-sm sm:text-base leading-relaxed">
      Test your mastery across full-stack DApp development, React Web3 state synchronization, Viem contract calls, SIWE challenge-response authentication, The Graph indexing, and error handling. Complete the 20 conceptual questions and analyze the 14 real-world architect interview scenarios.
    </p>
  </div>

  {/* 20 MULTIPLE CHOICE QUESTIONS */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">Part 1: Conceptual Knowledge Quiz (20 Questions)</h3>
        <p className="text-xs sm:text-sm text-[#52525b] mt-1">
          Select the correct option for each question. Instant feedback and explanations will appear immediately.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <span className="text-xs text-[#52525b] block font-medium">Your Score</span>
          <span className="text-lg font-bold text-[#ea580c]">{quizScore} / {QUIZ_QUESTIONS.length}</span>
        </div>
        <button
          onClick={resetQuiz}
          className="px-3 py-1.5 text-xs font-medium text-[#27272a] bg-[#f6f4ee] hover:bg-[#e7e3da] rounded-lg border border-[#e7e3da] transition-colors"
        >
          Reset Quiz
        </button>
      </div>
    </div>

    {/* Quiz Questions List */}
    <div className="space-y-6">
      {QUIZ_QUESTIONS.map((q, idx) => {
        const isSelected = selectedAnswers[q.id] !== undefined;
        const userAnswer = selectedAnswers[q.id];
        const isCorrect = userAnswer === q.answer;

        return (
          <div key={q.id} className="p-4 sm:p-5 rounded-xl border border-[#e7e3da] bg-[#fbfaf8]">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                Question {idx + 1} of {QUIZ_QUESTIONS.length}
              </span>
              {isSelected && (
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                  {isCorrect ? "Correct" : "Incorrect"}
                </span>
              )}
            </div>

            <p className="font-semibold text-sm sm:text-base text-[#18181b] mb-4">
              {q.question}
            </p>

            <div className="space-y-2">
              {q.options.map((opt, optIdx) => {
                let btnStyle = "border-[#e7e3da] bg-white hover:bg-[#f6f4ee] text-[#27272a]";
                if (isSelected) {
                  if (optIdx === q.answer) {
                    btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-medium";
                  } else if (optIdx === userAnswer && !isCorrect) {
                    btnStyle = "border-red-500 bg-red-50 text-red-900";
                  } else {
                    btnStyle = "border-[#e7e3da] bg-white opacity-50 text-gray-500";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectAnswer(q.id, optIdx)}
                    disabled={isSelected}
                    className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isSelected && optIdx === q.answer && (
                      <span className="text-emerald-600 font-bold ml-2">&#10003;</span>
                    )}
                    {isSelected && optIdx === userAnswer && !isCorrect && (
                      <span className="text-red-600 font-bold ml-2">&#10007;</span>
                    )}
                  </button>
                );
              })}
            </div>

            {isSelected && (
              <div className="mt-4 p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500 text-xs sm:text-sm text-blue-900">
                <span className="font-bold block mb-1">Architect Explanation:</span>
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>

  {/* 14 SENIOR WEB3 ARCHITECT INTERVIEW SCENARIOS */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="mb-6 pb-6 border-b border-[#e7e3da]">
      <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">
        Part 2: Senior Web3 Full-Stack Architect Interview Scenarios (14 Real-World Case Studies)
      </h3>
      <p className="text-xs sm:text-sm text-[#52525b] mt-1">
        Categorized across Beginner, Intermediate, and Advanced full-stack DApp architecture interviews. Click each question to expand the complete technical resolution.
      </p>
    </div>

    <div className="space-y-4">
      {INTERVIEW_QUESTIONS.map((item, idx) => {
        const isOpen = expandedInterview === item.id;
        return (
          <div key={item.id} className="border border-[#e7e3da] rounded-xl overflow-hidden transition-all">
            <button
              onClick={() => toggleInterview(item.id)}
              className="w-full text-left p-4 sm:p-5 bg-[#fbfaf8] hover:bg-[#f6f4ee] flex items-center justify-between gap-4 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="font-bold text-sm sm:text-base text-[#18181b]">
                  {item.q}
                </span>
              </div>
              <span className="text-[#ea580c] font-bold text-sm">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="p-4 sm:p-6 bg-white border-t border-[#e7e3da] space-y-4 text-xs sm:text-sm text-[#27272a] leading-relaxed">
                <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500 text-amber-900">
                  <span className="font-bold block text-xs uppercase mb-1">Production Interview Scenario</span>
                  {item.scenario}
                </div>

                <div>
                  <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Architectural Resolution &amp; Implementation Strategy</h4>
                  <div className="whitespace-pre-line text-[#27272a]">{item.answer}</div>
                </div>

                <div>
                  <h5 className="font-bold text-[#18181b] mb-2 text-xs uppercase tracking-wider text-[#ea580c]">Key Architectural Takeaways:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    {item.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx}><strong>{takeaway}</strong></li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>

</section>

        )}

        {activeTab === "tracker" && (
          
<section id="tracker-section" className="space-y-12">
  {/* MODULE SUMMARY */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Summary</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Module Summary &amp; Key Architectural Principles</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">DApp Architecture</span>
        Coordinates React UI, EIP-1193 wallets, Solidity smart contracts, and off-chain indexing services into a resilient, cohesive system.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Backend Trust Principle</span>
        Backends provide search and caching, but must NEVER be treated as the ultimate authority for on-chain state or settlements.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">TypeScript &amp; BigInt</span>
        Prevents fatal precision loss by handling all 256-bit Ethereum Wei and token amounts via native JavaScript <code className="font-mono text-xs">BigInt</code>.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Viem Integration</span>
        Lightweight, type-safe RPC client using <code className="font-mono text-xs">readContract</code> for zero-gas queries and <code className="font-mono text-xs">writeContract</code> for transactions.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">SIWE (EIP-4361)</span>
        Replaces passwords with cryptographic challenge-response wallet signatures, single-use nonces, and HttpOnly session cookies.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">The Graph &amp; Indexing</span>
        Decouples heavy historical log queries from fragile RPC nodes into normalized, highly performant GraphQL Subgraph APIs.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Hybrid Storage Matrix</span>
        Saves gas by storing critical state on-chain, immutable rich media on IPFS/Arweave, and fast relational search in PostgreSQL.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Tx Hash != Success</span>
        Always wait for <code className="font-mono text-xs">waitForTransactionReceipt</code> (<code className="font-mono text-xs">status === 1</code>) before confirming operations in the user interface.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Error Resilience</span>
        Defensively catches code 4001 user rejections, 4901 chain switches, and custom Solidity reverts without crashing the application.
      </div>
    </div>
  </div>

  {/* 26-OBJECTIVE COMPLETION TRACKER */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">Module 14 Mastery Checklist (26 Core Objectives)</h3>
        <p className="text-xs sm:text-sm text-[#52525b] mt-1">
          Track your progress through every architectural concept. Check off completed items to persist progress locally.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <span className="text-xs text-[#52525b] block font-medium">Completion</span>
          <span className="text-lg font-bold text-[#ea580c]">{completedCount} / {CHECKLIST_ITEMS.length} ({progressPercent}%)</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={selectAllChecklist}
            className="px-2.5 py-1 text-xs font-medium text-[#27272a] bg-[#f6f4ee] hover:bg-[#e7e3da] rounded-lg border border-[#e7e3da] transition-colors"
          >
            Check All
          </button>
          <button
            onClick={resetChecklist}
            className="px-2.5 py-1 text-xs font-medium text-[#27272a] bg-[#f6f4ee] hover:bg-[#e7e3da] rounded-lg border border-[#e7e3da] transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>

    {/* Progress Bar */}
    <div className="w-full bg-[#f6f4ee] rounded-full h-3 mb-6 overflow-hidden border border-[#e7e3da]">
      <div
        className="bg-[#ea580c] h-full transition-all duration-300 rounded-full"
        style={{ width: `${progressPercent}%` }}
      />
    </div>

    {/* Checklist Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {CHECKLIST_ITEMS.map((item, idx) => {
        const isChecked = checklistState[idx] || false;
        return (
          <label
            key={idx}
            className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
              isChecked
                ? "bg-emerald-50/60 border-emerald-300 text-emerald-950"
                : "bg-[#fbfaf8] border-[#e7e3da] text-[#27272a] hover:bg-[#f6f4ee]"
            }`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => toggleChecklistItem(idx)}
              className="mt-1 rounded border-[#e7e3da] text-[#ea580c] focus:ring-[#ea580c] h-4 w-4"
            />
            <span className="text-xs sm:text-sm font-medium leading-relaxed">
              {item}
            </span>
          </label>
        );
      })}
    </div>
  </div>

  {/* OFFICIAL DOCUMENTATION & LEARNING RESOURCES */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <h3 className="text-lg sm:text-xl font-bold text-[#18181b] mb-4">Official Documentation &amp; Learning Resources</h3>
    <p className="text-xs sm:text-sm text-[#52525b] mb-6">
      Deepen your mastery with official specifications, frameworks, and developer guides:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <a
        href="https://viem.sh"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Viem Documentation
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Lightweight, type-safe TypeScript interfaces for Ethereum.</p>
      </a>

      <a
        href="https://wagmi.sh"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Wagmi React Hooks
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">React hooks for wallet connection, contract calls, and ENS.</p>
      </a>

      <a
        href="https://eips.ethereum.org/EIPS/eip-4361"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          EIP-4361: SIWE Specification
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Official Sign-In with Ethereum challenge-response standard.</p>
      </a>

      <a
        href="https://thegraph.com/docs/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          The Graph Protocol Docs
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Decentralized indexing protocol, subgraphs, and GraphQL query APIs.</p>
      </a>

      <a
        href="https://docs.soliditylang.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Solidity Documentation
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Official language reference for Ethereum smart contracts.</p>
      </a>

      <a
        href="https://ethereum.org/en/developers/docs/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Ethereum Developer Portal
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Comprehensive guides to EVM, JSON-RPC, gas economics, and DApps.</p>
      </a>
    </div>
  </div>

</section>

        )}
      </main>

      {/* BOTTOM PREV / NEXT NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#e7e3da]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/blockchain/web3-libraries")}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#e7e3da] bg-white hover:bg-[#f6f4ee] font-bold text-sm text-[#27272a] flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#ea580c]" />
            <span>Previous: Module 13 — Web3.js, Ethers.js &amp; Viem</span>
          </button>

          <button
            onClick={() => navigate("/learning/blockchain/security-vulnerabilities")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] font-bold text-sm text-white flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span>Next: Module 15 — Smart Contract Security</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
