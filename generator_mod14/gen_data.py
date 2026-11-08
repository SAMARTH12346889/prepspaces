# projectx/generator_mod14/gen_data.py
"""
Data definitions for Module 14: Full-Stack DApp Development
- 26 Checklist Mastery Items
- 20 Multiple Choice Questions with Explanations
- 14 Comprehensive Senior Web3 Architect Interview Scenarios
"""

CHECKLIST_ITEMS = [
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
]

QUIZ_QUESTIONS = [
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
]

INTERVIEW_QUESTIONS = [
    {
        "id": "int-1",
        "q": "What is a decentralized application (DApp) and how does its trust model differ from a traditional Web2 application?",
        "scenario": "A hiring manager at a DeFi protocol asks you to explain the fundamental architectural shift from Web2 to Web3 to a junior engineer.",
        "answer": """A decentralized application (DApp) is software that coordinates user interactions through a web interface while utilizing decentralized cryptographic protocols and smart contracts on a blockchain to enforce business rules and maintain canonical state.

Key Trust Model Differences:
1. State Ownership & Custody: In Web2, state resides in centralized databases (PostgreSQL, MongoDB) governed by server administrators. In Web3, critical state (balances, ownership, votes) resides on an immutable, globally distributed blockchain consensus network.
2. Authentication: Web2 uses passwords, OAuth, and server-issued session tokens. Web3 authenticates via public-key cryptography (secp256k1 signatures) where the user retains exclusive custody of their private keys.
3. Execution Verification: Web2 business logic runs inside closed proprietary server containers. Web3 business logic executes deterministically on the EVM, where anyone can verify contract bytecode and inspect historical transaction logs.
4. Infrastructure Pragmatism: Real-world DApps are rarely 100% decentralized. They combine decentralized on-chain contracts with centralized or federated frontends (Vercel, Cloudflare Pages), caching indexers (The Graph), and API microservices for optimal user experience.""",
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
        "answer": """An on-chain account and a crypto wallet represent two distinct layers in the Web3 stack:

1. On-Chain Account: An Ethereum account is a state entity residing in the blockchain's global state trie. It has an address (20-byte hash), a nonce, a balance in Wei, and either runtime bytecode (Contract Account) or no code (Externally Owned Account / EOA). Accounts exist on-chain permanently regardless of whether the user is online.

2. Crypto Wallet: A wallet (e.g. MetaMask, Rabby, Ledger) is software or hardware that manages cryptographic key pairs (private key, public key). The wallet generates addresses from the public key, securely stores the private key, exposes the EIP-1193 window.ethereum interface to browser applications, and signs transactions and messages upon user confirmation.

Crucial Architectural Rule:
Wallets do NOT store tokens or cryptocurrency. Tokens reside strictly inside smart contract storage on the blockchain. Wallets only hold the private keys necessary to authorize transfers from associated on-chain accounts.""",
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
        "answer": """The Application Binary Interface (ABI) is the standardized specification defining how high-level data types (strings, addresses, structs, arrays) are serialized into raw binary calldata for the Ethereum Virtual Machine, and how return bytes are deserialized back into high-level types.

Why the EVM cannot execute raw JavaScript:
1. Low-Level Bytecode Execution: The EVM is a stack-based virtual machine operating solely on raw bytes, 32-byte words, and opcodes (e.g., CALLDATALOAD, MSTORE). It has no concept of function names, JSON parameters, or JavaScript prototypes.
2. Function Selectors: To determine which function to run, the EVM checks the first 4 bytes of calldata (the Function Selector, derived as bytes4(keccak256("functionName(type1,type2)"))).
3. Parameter Encoding: Arguments must be packed according to strict EVM ABI encoding rules (e.g. left-padding 20-byte addresses to 32 bytes, right-padding dynamic strings).

The ABI JSON schema provides the JavaScript library (Viem or Ethers.js) with the function names, argument types, and return types required to construct valid calldata and decode returned hex bytes.""",
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
        "answer": """A transaction hash (txHash) is the 32-byte Keccak-256 digest of a signed, RLP-encoded Ethereum transaction.

Why displaying immediate success is a critical anti-pattern:
1. Mempool Acceptance != Block Execution: Receiving a hash only proves that the connected RPC node received and broadcast the transaction to the network's transaction pool (mempool).
2. Risk of Revert: The transaction has not yet been executed by the EVM. It may revert due to a require() check (e.g. 'Already voted', 'Insufficient allowance'), running out of gas, or failing custom assertions.
3. Mempool Drops & Replacements: During gas price spikes, transactions with low priority fees can sit in the mempool indefinitely, get dropped, or be replaced by speedup/cancel transactions with higher gas fees.
4. Chain Reorganizations: Even once mined, shallow block reorgs can invalidate unconfirmed blocks.

Correct Architecture:
Upon receiving the hash, transition UI to 'confirming' / 'pending'. Display the hash with a link to Etherscan. Await waitForTransactionReceipt({ hash }). Only transition to 'success' when receipt.status === 'success' (status 1).""",
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
        "answer": """SIWE (EIP-4361) standardizes wallet-based authentication using off-chain ECDSA message signatures.

End-to-End Authentication Lifecycle:
1. Challenge Generation: The frontend requests a cryptographic nonce from the backend. The backend generates a cryptographically random, single-use string (min 8 alphanumeric characters), binds it to the user's session state with a short TTL (e.g. 5 minutes), and returns it.
2. Message Construction: The frontend creates an EIP-4361 formatted string containing domain, user address, statement, URI, version, chainId, nonce, and issuedAt timestamp.
3. Wallet Signing: The user reviews and signs the human-readable plaintext message in MetaMask via personal_sign. No gas fee is charged.
4. Signature Verification: The frontend posts the message and signature to the backend. The backend cryptographically recovers the signer address using ecrecover / Viem's verifySiweMessage.
5. Strict Validation Checks: The backend verifies: (a) recovered address matches claimed address, (b) nonce matches session and has not been used, (c) domain matches origin, (d) message has not expired.
6. Replay Prevention: The backend immediately burns/consumes the nonce in Redis/database so the same signature can NEVER be reused.
7. Session Issuance: The backend establishes a secure session via an HttpOnly, Secure, SameSite=Strict cookie.""",
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
        "answer": """A production event indexing pipeline separates real-time RPC data ingestion from client-facing query serving:

Architectural Pipeline:
1. Ingestion Layer: A dedicated indexing service (The Graph node, Envio, or custom Go/Node worker) connects to multiple dedicated archive WebSocket RPC endpoints (Alchemy, QuickNode) with automatic failover.
2. Log Scraping & Block Reorg Handling: The indexer tracks block numbers and block hashes. To handle reorgs, the indexer maintains a confirmation depth (e.g., 64 blocks on Ethereum L1, or waits for finalized blocks). If a fork is detected, the indexer rolls back database mutations to the common ancestor block.
3. Normalization & Persistence: Events (e.g. VoteCast(voter, candidateId)) are decoded and written idempotently into an ACID-compliant PostgreSQL database with appropriate B-tree indices on addresses, timestamps, and candidate IDs.
4. Query Layer (GraphQL / REST): A cached GraphQL API (Hasura, Apollo, or Subgraph query node) serves complex queries, pagination, aggregations, and filtering in sub-50ms latency.
5. Edge Caching & WebSockets: Frequently queried leaderboards are cached at the edge via Redis / Cloudflare CDN. Live updates are pushed to frontends via WebSocket subscriptions (GraphQL Subscriptions or Pusher).""",
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
        "answer": """Preventing duplicate voting requires addressing two distinct vectors: single-wallet replay and multi-wallet Sybil attacks.

1. On-Chain Wallet-Level Protection (Contract State):
In Solidity, maintain mapping(address => bool) public hasVoted.
Inside vote(candidateId):
require(!hasVoted[msg.sender], "Already voted");
hasVoted[msg.sender] = true;
candidates[candidateId - 1].voteCount++;
emit VoteCast(msg.sender, candidateId);
This guarantees that a single Ethereum private key can never cast more than one vote on-chain.

2. Sybil Attack Prevention (Identity Verification):
Because generating Ethereum addresses is free, a single malicious user can spin up 1,000 wallets. To prevent this:
- Merkle Allowlist: The organizer pre-computes a Merkle tree of eligible voter public keys (or hashes of university email / student IDs). Voters submit a Merkle proof with their vote.
- Zero-Knowledge Semaphore / MACI (Minimum Anti-Collusion Infrastructure): Voters register once and cast votes using ZK-SNARK proofs, decoupling their legal identity from the cast vote while mathematically ensuring 1-person-1-vote and preventing vote-buying.
- Decentralized Identity (DID / Soulbound Tokens): Require the voter to hold a non-transferable Soulbound Token (SBT) or verified WorldID proof.""",
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
        "answer": """Synchronizing on-chain state with off-chain databases without race conditions requires an event-driven, idempotent ingestion pattern:

Core Synchronization Principles:
1. Transaction Hash & Log Index Primary Keys: Off-chain event records must use a compound primary key of (transaction_hash, log_index). This guarantees that reprocessing the same block or event never produces duplicate rows (UPSERT / ON CONFLICT DO NOTHING).
2. Block Number Sequencing: Each indexed entity stores last_updated_block. If an event arrives with a blockNumber <= last_updated_block, verify logIndex before mutating to prevent out-of-order state overwrites.
3. Optimistic UI with Server Reconciliation: When a user votes or bids:
   - Frontend triggers optimistic UI state.
   - Transaction is submitted to the blockchain.
   - Indexer ingests the mined event log, verifies receipt status, updates Postgres, and emits a WebSocket notification.
   - Frontend refetches canonical state from the API, reconciling optimistic assumptions.
4. Handling Chain Reorgs: Maintain an event history log with block hashes. If a block is orphaned, execute a compensation transaction rolling back entities updated in that block.""",
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
        "answer": """Supporting multi-network dApps requires decoupling chain configuration, contract addresses, and RPC providers from component presentation:

Multi-Chain Architecture Strategy:
1. Centralized Chain Registry: Create a centralized configuration mapping chain IDs to contract addresses, block explorer URLs, and dedicated RPC endpoints.
2. Injected Wallet Network Switching: If the user connects to Polygon while viewing an Arbitrum contract, trigger wallet_switchEthereumChain via EIP-1193. If the chain is unrecognized, catch error 4902 and trigger wallet_addEthereumChain.
3. Multi-Client Architecture: Maintain separate Viem Public Clients for each supported chain. This allows the frontend to read balances and contract state from Arbitrum and Ethereum simultaneously even if the user's MetaMask is currently set to Polygon.
4. Chain-Aware Routing & URL State: Store the active chain in the URL (e.g. /app/arbitrum/vote or /app/sepolia/vote). This ensures bookmarks and shared links load the correct network parameters automatically.""",
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
        "answer": """A robust Web3 dApp separates state into four distinct lifecycles:

1. Local UI State:
   - Scope: Ephemeral, component-specific (e.g. modal open/closed, active tab, selected candidate in a form).
   - Tool: React useState, useReducer.

2. Injected Wallet State:
   - Scope: External provider state (connected account address, active chain ID, connection status, pending signature modals).
   - Tool: Wagmi / custom useWallet hook wrapping window.ethereum with accountsChanged/chainChanged listeners.

3. Canonical On-Chain State:
   - Scope: Verifiable data from smart contract storage (candidate vote counts, token balances, allowances).
   - Latency: Mined block intervals (~12 seconds on L1). Zero gas to read via eth_call.
   - Tool: TanStack Query (React Query) with Viem publicClient.readContract, configured with staleTime and automatic refetch on new blocks.

4. Server & Indexer State:
   - Scope: Off-chain user profiles, historical event logs, aggregated statistics, search indexes.
   - Tool: TanStack Query fetching from REST / GraphQL endpoints with cache invalidation on transaction confirmations.""",
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
        "answer": """Storing large unstructured files directly inside Ethereum storage slots (SSTORE) costs approximately 20,000 gas per 32 bytes (~625,000 gas per kilobyte), making storing a 1MB PDF cost thousands of dollars in transaction fees.

Hybrid Storage Matrix:
1. On-Chain (EVM Storage):
   - What: Token balances, voting tally, transfer allowances, state transition flags.
   - Characteristics: Immutable, globally verifiable, highly expensive, minimal storage.
2. Decentralized Off-Chain (IPFS / Arweave):
   - What: NFT metadata JSON, governance proposal markdown/PDFs, candidate avatar photos.
   - Characteristics: Content-addressed (immutable hash), permanent or pinned, zero gas for storage, public retrieval.
3. Centralized Off-Chain (PostgreSQL / Redis):
   - What: User email, notification settings, cached leaderboards, search indexes, audit logs.
   - Characteristics: Sub-millisecond reads/writes, mutable, relational indexing, private.

Governance DApp Example:
- Proposal text & PDFs are uploaded to IPFS (ipfs://Qm...).
- Proposal creation smart contract only stores bytes32 ipfsHash, voting deadline, and vote counts.
- Search and comments are stored in PostgreSQL.""",
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
        "answer": """In Ethereum, accounts have a sequential nonce. If transaction nonce N is stuck in the mempool due to a low gas fee, all subsequent transactions (N+1, N+2) from that account are blocked from executing.

Engineering Remediation Strategies:
1. Speed Up Transaction (Gas Replacement):
   - Prompt the user to replace the pending transaction with a new transaction having the EXACT SAME NONCE, but with a minimum 10%–20% higher maxPriorityFeePerGas and maxFeePerGas.
   - The higher gas fee incentivizes validators to pick the new transaction, automatically superseding and canceling the original transaction.
2. Cancel Transaction:
   - Send a 0 ETH transfer to self (msg.sender) using the EXACT SAME NONCE, with significantly higher priority gas. This consumes minimal gas (21,000) and unblocks the account nonce immediately.
3. Frontend Nonce Management:
   - When preparing transactions, check pending transaction count via publicClient.getTransactionCount({ address, blockTag: 'pending' }) vs 'latest'.
   - Track active pending hashes in localStorage and show an interactive 'Speed Up / Cancel' button in the dApp UI.""",
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
        "answer": """Securing a Web3 frontend requires defensive engineering across DNS, client execution, and provider communications:

1. Injected Provider Sandboxing:
   - Malicious browser extensions can monkey-patch window.ethereum.
   - Use EIP-6963 (Multi Injected Provider Discovery) to discover verified providers via standard window events (eip6963:announceProvider) rather than blindly trusting the global window.ethereum object.
2. Content Security Policy (CSP) & Subresource Integrity (SRI):
   - Enforce strict CSP headers restricting script-src and connect-src strictly to allowlisted RPC endpoints (Alchemy, Infura) and trusted IPFS gateways.
   - Use SRI hashes on all external CDN scripts to prevent supply-chain injection.
3. RPC Response Validation & Dual-Node Consensus:
   - Public RPC nodes can return fake or stale block data.
   - For critical financial operations, query two independent RPC providers concurrently and compare returned state hashes or block roots.
4. Calldata Human-Readability & Simulation:
   - Integrate transaction simulation APIs (Tenderly, Blowfish, Pocket Universe) to show users the exact balance and state changes before they sign in MetaMask.""",
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
        "answer": """A production Web3 release workflow encompasses three interconnected pipelines:

1. Smart Contract Pipeline (Foundry / Hardhat):
   - Author smart contracts in Solidity with comprehensive unit, fuzz, and invariant test suites.
   - Deploy to local Anvil node for integration testing.
   - Deploy to Sepolia testnet using deterministic CREATE2 proxies.
   - Verify contract source code on Etherscan using automated Forge verify-contract scripts.
   - Execute third-party security audits prior to mainnet deployment.

2. Indexer & Backend Pipeline (The Graph & Cloudflare/Node):
   - Update Subgraph manifest (subgraph.yaml) with deployed contract addresses and start block.
   - Generate TypeScript types from ABI via graph codegen.
   - Deploy Subgraph to The Graph Studio / Goldsky and wait for 100% block synchronization.
   - Deploy backend API microservices (SIWE auth, caching) with environment variables locked in Doppler or AWS Secrets Manager.

3. Frontend Pipeline (React / Vite / Cloudflare Pages / IPFS):
   - Run linter, TypeScript check (tsc --noEmit), and Vitest component test suites.
   - Build static production assets via vite build.
   - Deploy frontend to decentralized or edge hosting: Cloudflare Pages / Vercel with custom domain and HTTPS.
   - Optionally publish static build to IPFS via Pinata or Fleek and link to an ENS domain (e.g. dapp.eth) for maximum censorship resistance.""",
        "keyTakeaways": [
            "Smart contracts must be thoroughly tested, verified on block explorers, and deployed deterministically",
            "Subgraphs and backend services must achieve 100% synchronization before routing frontend traffic",
            "Frontends should be deployed to global edge CDNs (Cloudflare Pages) or pinned to IPFS and linked via ENS"
        ]
    }
]
