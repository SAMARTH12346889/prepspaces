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
  "13.1 Understand why JavaScript/TypeScript is the primary language for Web3 client-side dApp development",
  "13.2 Contrast traditional Web2 client-server architectures with decentralized Web3 client-RPC-contract flows",
  "13.3 Explain Ethereum JSON-RPC 2.0 communication, transport mechanisms, and request/response specifications",
  "13.4 Master the 13 core Ethereum JSON-RPC methods (eth_blockNumber, eth_getBalance, eth_call, eth_estimateGas, etc.)",
  "13.5 Trace the historical evolution of Web3.js, its modular package architecture, and its sunset status as of March 4, 2025",
  "13.6 Analyze Ethers.js v6 architecture: Provider, Signer, Contract, and Interface abstractions",
  "13.7 Clearly differentiate Provider (read-only blockchain access) from Signer (cryptographic transaction authorization)",
  "13.8 Master the Application Binary Interface (ABI) specification, function signatures, and canonical types",
  "13.9 Compute 4-byte function selectors via Keccak-256 hashing: bytes4(keccak256('transfer(address,uint256)'))",
  "13.10 Construct and decode 32-byte padded ABI calldata using Ethers.js Interface and understand encoding vs encryption",
  "13.11 Assemble smart contract instances by binding deployed address, ABI interface, and Provider/Signer",
  "13.12 Execute read-only contract calls via eth_call without state mutations or user gas expenditure",
  "13.13 Execute state-changing contract write operations via eth_sendTransaction with user wallet authorization",
  "13.14 Distinguish between a submitted transaction hash and a confirmed on-chain transaction receipt",
  "13.15 Parse smart contract events from EVM transaction logs, differentiating indexed topics from unindexed log data",
  "13.16 Implement event subscriptions with Ethers.js (contract.on) and ensure proper listener cleanup in React",
  "13.17 Compare HTTP polling with persistent WebSocket RPC subscriptions, addressing reconnection and reorg risks",
  "13.18 Master Viem architecture: TypeScript-first design, Public Client, Wallet Client, Test Client, and Transports",
  "13.19 Leverage Viem 'as const' ABI assertion for compile-time TypeScript type inference of arguments and return types",
  "13.20 Compare Web3.js, Ethers.js, and Viem across 9 architectural dimensions and formulate library selection criteria",
  "13.21 Integrate MetaMask and browser wallets using EIP-1193 standard (eth_requestAccounts, accountsChanged, chainChanged)",
  "13.22 Calculate EIP-1559 gas fees: Fee = Gas Used * (Base Fee + Priority Fee) and understand gas estimation limits",
  "13.23 Inspect transaction receipts, verifying status (1 = Success, 0 = Revert), block confirmation, and gas consumed",
  "13.24 Configure hosted RPC providers (Alchemy, Infura) vs public endpoints, securing API keys and handling rate limits",
  "13.25 Handle common Web3 error codes: 4001 (User rejected), 4900/4901 (Disconnected), and custom contract reverts",
  "13.26 Build, test, and deploy a responsive React + TypeScript + Viem Web3 dApp interacting with deployed Sepolia contracts"
];

// 20 Multiple Choice Questions
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "question": "What is the primary role of JSON-RPC in Ethereum client-server communication?",
    "options": [
      "It is a database query language designed specifically to replace SQL in decentralized networks.",
      "It is a stateless, lightweight remote procedure call specification that allows frontend applications to invoke methods on an Ethereum node over HTTP or WebSocket.",
      "It is a consensus algorithm that replaces Proof of Stake for browser clients.",
      "It is a Solidity compiler plugin that compiles smart contracts into WebAssembly."
    ],
    "answer": 1,
    "explanation": "JSON-RPC 2.0 is the standard protocol exposed by Ethereum execution clients (Geth, Nethermind, Besu). Frontend applications send structured JSON requests (e.g. eth_blockNumber, eth_call) to query blockchain state and broadcast transactions."
  },
  {
    "id": 2,
    "question": "How does a Web3 application architecture fundamentally differ from a traditional Web2 web application?",
    "options": [
      "Web3 applications do not use HTML, CSS, or JavaScript in the user interface.",
      "In Web2, clients interact with centralized backend APIs that mutate a private database; in Web3, the frontend connects to an RPC node/wallet to interact directly with immutable smart contracts on a decentralized blockchain.",
      "Web3 applications can only run inside mobile apps and cannot run in web browsers.",
      "Web3 applications eliminate the need for computer networks."
    ],
    "answer": 1,
    "explanation": "In traditional Web2 architectures, user requests pass through centralized servers that authenticate and write to private databases. In Web3, the application interface connects via JSON-RPC to decentralized blockchain nodes, and transactions are cryptographically authorized by user wallets rather than backend servers."
  },
  {
    "id": 3,
    "question": "What is the current official status of the Web3.js library in modern blockchain engineering?",
    "options": [
      "It is the only officially supported Ethereum library for new projects started in 2026.",
      "Web3.js was sunset on March 4, 2025; while version 4 remains documented for maintaining legacy systems, new projects predominantly use Viem or Ethers.js.",
      "It was renamed to Solidity.js and merged into the EVM core protocol.",
      "It has been deprecated by the W3C and is illegal to use in commercial projects."
    ],
    "answer": 1,
    "explanation": "Web3.js was officially sunset on March 4, 2025. While understanding its architecture is critical for legacy maintenance and migration tasks, modern greenfield Web3 applications primarily select Viem (for TypeScript-first applications) or Ethers.js v6."
  },
  {
    "id": 4,
    "question": "In Ethers.js v6, what is the core architectural difference between a Provider and a Signer?",
    "options": [
      "A Provider can sign transactions, while a Signer can only read data.",
      "A Provider is an abstraction for a connection to the Ethereum network (read-only operations like getBalance, getBlockNumber), while a Signer has access to a private key or wallet to sign transactions and messages.",
      "A Provider is used for Bitcoin, while a Signer is used for Ethereum.",
      "There is no difference; they are aliases for the same class."
    ],
    "answer": 1,
    "explanation": "In Ethers.js, a Provider provides read-only connectivity to an RPC node (querying state, fetching receipts). A Signer represents an authorized account capable of producing cryptographic signatures for state-changing transactions."
  },
  {
    "id": 5,
    "question": "What is a smart contract Application Binary Interface (ABI)?",
    "options": [
      "The encrypted binary executable deployed to Ethereum mining nodes.",
      "A standardized JSON schema defining a smart contract's functions, parameters, return types, events, and custom errors, allowing client libraries to encode and decode EVM calldata.",
      "The legal contract signed by the protocol founders and auditors.",
      "The physical hardware interface between an Ethereum validator and the network card."
    ],
    "answer": 1,
    "explanation": "The ABI (Application Binary Interface) serves as the contract's interface specification. It defines function names, argument types, and return values so client libraries can serialize high-level JavaScript calls into raw EVM bytecode calldata."
  },
  {
    "id": 6,
    "question": "What is an EVM function selector and how is it mathematically calculated?",
    "options": [
      "It is the first 4 bytes of the Keccak-256 hash of the canonical function signature (e.g. 'transfer(address,uint256)' yields '0xa9059cbb').",
      "It is the SHA-256 hash of the smart contract's deployed Ethereum address.",
      "It is a random 32-bit integer chosen by the compiler during contract deployment.",
      "It is the gas cost required to call the function."
    ],
    "answer": 0,
    "explanation": "The EVM uses the first 4 bytes (8 hexadecimal characters) of `keccak256('functionName(type1,type2)')` to identify which function to dispatch when calldata is received by a contract."
  },
  {
    "id": 7,
    "question": "Is ABI encoding equivalent to data encryption?",
    "options": [
      "Yes, ABI encoding securely encrypts function arguments using AES-256.",
      "No, ABI encoding is merely a serialization format; encoded calldata is completely public and can be decoded by anyone with the function signature.",
      "Yes, only the recipient smart contract holds the private key to decrypt ABI calldata.",
      "Only when calling functions marked with the 'private' keyword."
    ],
    "answer": 1,
    "explanation": "ABI encoding is strictly serialization (formatting addresses, uints, and bytes into 32-byte chunks for the EVM), NOT cryptographic encryption. Any transaction broadcast to the blockchain can be inspected and decoded by anyone."
  },
  {
    "id": 8,
    "question": "What are the three essential components required to instantiate an Ethers.js or Web3 contract instance?",
    "options": [
      "IPFS CID, validator private key, and seed phrase.",
      "Contract deployment address, contract ABI JSON array, and a Provider or Signer.",
      "Token name, total supply, and decimal count.",
      "GitHub repository URL, npm package name, and node ID."
    ],
    "answer": 1,
    "explanation": "To create a contract instance (e.g. `new ethers.Contract(address, abi, runner)`), JavaScript requires the target contract address, the ABI describing its functions, and a Provider (for read calls) or Signer (for write calls)."
  },
  {
    "id": 9,
    "question": "What is the key execution difference between eth_call and eth_sendTransaction?",
    "options": [
      "eth_call executes locally on the connected node without creating a mined transaction or consuming user gas, whereas eth_sendTransaction broadcasts a state-changing transaction requiring signatures and gas.",
      "eth_call costs 10x more gas than eth_sendTransaction.",
      "eth_call is used only for deploying new contracts.",
      "eth_sendTransaction can only be used by validator nodes."
    ],
    "answer": 0,
    "explanation": "`eth_call` simulates execution against the node's local state without publishing a transaction or consuming gas (used for view/pure functions). `eth_sendTransaction` submits a signed state change to the mempool for block inclusion."
  },
  {
    "id": 10,
    "question": "Why does receiving a transaction hash NOT guarantee that the transaction succeeded?",
    "options": [
      "Because transaction hashes are only generated after 100 block confirmations.",
      "A transaction hash only proves the transaction was broadcast to the network; it may still revert during execution, run out of gas, or remain pending indefinitely in the mempool.",
      "Transaction hashes are generated by the browser and have no relation to the blockchain.",
      "All transactions with hashes are guaranteed to succeed by the EVM."
    ],
    "answer": 1,
    "explanation": "A transaction hash is an identifier generated immediately upon signing and broadcast. It does not indicate execution status. The transaction could revert (e.g. require statement failed) or be dropped; the application must inspect the mined transaction receipt (`receipt.status === 1`)."
  },
  {
    "id": 11,
    "question": "Where are smart contract events stored in the Ethereum blockchain structure?",
    "options": [
      "Inside the contract's persistent storage trie slots (SSTORE).",
      "Inside the transaction receipt's logs array, indexed in the block's receipts bloom filter.",
      "In off-chain AWS S3 buckets managed by the Ethereum Foundation.",
      "Inside the compiler bytecode table."
    ],
    "answer": 1,
    "explanation": "Events emitted via the EVM LOG opcodes are stored in transaction execution logs on-chain. Smart contracts cannot read past logs, but external nodes and indexers query them via bloom filters and `eth_getLogs`."
  },
  {
    "id": 12,
    "question": "What distinguishes an 'indexed' parameter from a non-indexed parameter in Solidity events?",
    "options": [
      "Indexed parameters are converted to floating-point numbers.",
      "Indexed parameters are stored as searchable 32-byte topics (up to 3 per event), allowing client applications to filter logs by specific addresses or values, while non-indexed parameters are packed into log data.",
      "Indexed parameters can only be read by the contract owner.",
      "Non-indexed parameters are automatically deleted after 24 hours."
    ],
    "answer": 1,
    "explanation": "An event can have up to 3 `indexed` parameters, which become 'topics' in the log structure. Bloom filters allow nodes to quickly search for logs matching specific indexed topics without parsing the raw data payload."
  },
  {
    "id": 13,
    "question": "What is the primary architectural advantage of Viem over older Ethereum JavaScript libraries?",
    "options": [
      "It runs on the Bitcoin network without EVM compatibility.",
      "It features a modular, tree-shakeable client/action architecture with end-to-end TypeScript type inference derived directly from ABIs using 'as const'.",
      "It completely eliminates the need for gas fees on Ethereum.",
      "It replaces MetaMask with an AI assistant."
    ],
    "answer": 1,
    "explanation": "Viem was built from the ground up for modern TypeScript. When an ABI is defined with `as const`, TypeScript automatically infers the exact function names, argument types, and return values, catching errors at compile time."
  },
  {
    "id": 14,
    "question": "In Viem, what is the role of a 'Public Client' versus a 'Wallet Client'?",
    "options": [
      "A Public Client is accessible to anyone on the web for read actions, while a Wallet Client is bound to an account/transport to perform signing and state-mutating write actions.",
      "A Public Client is only used on testnets, while a Wallet Client is used on mainnet.",
      "A Public Client requires a hardware security module (HSM).",
      "There is no difference; they are interchangeable."
    ],
    "answer": 0,
    "explanation": "Viem separates responsibilities: `createPublicClient` provides read-only RPC actions (`getBalance`, `readContract`), while `createWalletClient` interfaces with an account (or browser provider `window.ethereum`) to execute signing and write actions."
  },
  {
    "id": 15,
    "question": "Under the EIP-1193 standard, which RPC method must a dApp invoke to request wallet connection in MetaMask?",
    "options": [
      "eth_connectUserAccount",
      "eth_requestAccounts",
      "wallet_authorizeDapp",
      "personal_openSession"
    ],
    "answer": 1,
    "explanation": "EIP-1193 specifies `window.ethereum.request({ method: 'eth_requestAccounts' })` to trigger the wallet connection modal and return the user's authorized Ethereum addresses."
  },
  {
    "id": 16,
    "question": "Under the EIP-1559 gas fee model, how is the total transaction fee calculated?",
    "options": [
      "Transaction Fee = Gas Used * (Base Fee + Priority Fee / Tip)",
      "Transaction Fee = Gas Limit * Gas Price * 2",
      "Transaction Fee = Block Number * 21,000",
      "Transaction Fee = Total Token Supply / 100"
    ],
    "answer": 0,
    "explanation": "Under EIP-1559, the effective gas price is `Base Fee + Priority Fee` (capped by `Max Fee Per Gas`). The total transaction fee deducted from the user's account is `Gas Used * Effective Gas Price`."
  },
  {
    "id": 17,
    "question": "What does a transaction receipt status of 1 indicate in Ethereum?",
    "options": [
      "The transaction is still pending in the mempool.",
      "The transaction was successfully executed and committed to blockchain state without reverting.",
      "The transaction reverted due to a failed require statement.",
      "The transaction was cancelled by the miner."
    ],
    "answer": 1,
    "explanation": "A receipt status of `1` (or hex `'0x1'`) indicates EVM execution success. A status of `0` (or hex `'0x0'`) indicates the transaction reverted during execution."
  },
  {
    "id": 18,
    "question": "Why is storing an RPC API key (such as Alchemy or Infura) directly in frontend client code a security consideration?",
    "options": [
      "Because frontend code cannot make HTTP requests.",
      "Because any code running in the user's browser is publicly readable; malicious actors can extract the API key and exhaust your rate limits or quotas unless domain/origin restrictions or backend proxies are configured.",
      "Because Ethereum nodes will reject requests that include API keys.",
      "Because API keys can be used to steal the user's private key."
    ],
    "answer": 1,
    "explanation": "Frontend environment variables (`VITE_...`) are bundled into client-side JavaScript. Anyone inspecting network requests or bundle files can view the API key. Developers must set up domain allowlists, request throttling, or route through a backend proxy."
  },
  {
    "id": 19,
    "question": "What standard EIP-1193 error code is thrown when a user rejects a transaction in MetaMask?",
    "options": [
      "Error code 500 (Internal Server Error)",
      "Error code 4001 (User Rejected Request)",
      "Error code 404 (Not Found)",
      "Error code 1337 (Hacker Revert)"
    ],
    "answer": 1,
    "explanation": "EIP-1193 explicitly defines error code `4001` as 'User Rejected Request' (the user clicked 'Reject' on the wallet confirmation prompt)."
  },
  {
    "id": 20,
    "question": "Why must React applications remove event listeners during component unmounting?",
    "options": [
      "Because React will crash if more than one listener is active.",
      "To prevent memory leaks, duplicate state updates, and unnecessary background network/WebSocket polling after the user navigates away.",
      "Because Ethereum nodes charge gas for active event listeners.",
      "Because MetaMask can only support 1 event listener across all browser tabs."
    ],
    "answer": 1,
    "explanation": "Failing to remove listeners (`token.removeAllListeners()` or `window.ethereum.removeListener()`) causes memory leaks and duplicate handler invocations whenever the component re-mounts."
  }
];

// 15 Senior Web3 Architect Interview Scenarios
const INTERVIEW_QUESTIONS = [
  {
    "id": 1,
    "question": "How would you architect a Web3 frontend application designed to support 100,000 daily active users without incurring massive RPC provider bills or hitting rate limits?",
    "answer": "Architectural Strategy for High-Scale Web3 Applications:\n1. Multi-Tier Caching & Indexing:\n   - Never query raw Ethereum RPC nodes for complex queries (e.g. user transaction history, NFT galleries, leaderboard calculations).\n   - Use dedicated indexing subgraphs (The Graph, Goldsky, or custom Envio/Ponder indexers) with PostgreSQL and CDN edge caching (Cloudflare, Fastly).\n   - Cache static and slowly changing contract state (token metadata, decimals, names) on the edge with high TTLs.\n2. Read/Write Decoupling:\n   - Direct all read operations (`balanceOf`, `allowance`, `tokenURI`) to read-only replica RPC pools or public fallback transports.\n   - Restrict paid RPC endpoints (Alchemy, Infura, QuickNode) exclusively to transaction simulation and write broadcasting.\n3. Multicall3 Batching:\n   - Combine dozens of distinct contract calls into a single RPC call using the canonical `Multicall3` contract (`0xca11bde05977b3631167028862be2a173976ca11`). Both Viem and Ethers natively support Multicall batching (`batch: { multicall: true }`).\n4. RPC Load Balancing & Failover:\n   - Implement client-side round-robin or latency-based fallback transports across multiple independent RPC providers."
  },
  {
    "id": 2,
    "question": "How would you reduce redundant RPC requests and prevent UI re-render storms in a React dApp?",
    "answer": "RPC Optimization Patterns in React:\n1. Use Wagmi / TanStack Query (React Query):\n   - Leverage stale-while-revalidate caching. Configure `staleTime: 30_000` (30 seconds) and `cacheTime: 300_000` for token balances and account state.\n   - Disable aggressive refetching on window focus (`refetchOnWindowFocus: false`) to prevent spamming RPC nodes when users toggle browser tabs.\n2. Multicall Batch Aggregation:\n   - In Viem:\n     ```typescript\n     const client = createPublicClient({\n       chain: mainnet,\n       transport: http(),\n       batch: {\n         multicall: {\n           batchSize: 1024,\n           wait: 16 // debounces calls within a single event loop tick\n         }\n       }\n     });\n     ```\n3. Block-Triggered Invalidation:\n   - Instead of polling every 2 seconds, subscribe to new block headers (`watchBlockNumber`) and invalidate queries only when a new block is mined.\n4. Selective Event-Based Invalidation:\n   - Invalidate user balance queries only when a `Transfer` event involving `msg.sender` is observed, rather than after every generic render."
  },
  {
    "id": 3,
    "question": "How do you handle multiple simultaneous transactions submitted by a user without triggering nonce collisions or race conditions?",
    "answer": "Nonce Management in High-Frequency Web3 Environments:\nThe Problem:\nEvery Ethereum account maintains a sequential integer `nonce` tracking transaction count. If two transactions are submitted with the identical nonce, the second will either fail or replace the first. If submitted out of order (e.g. Nonce 5 before Nonce 4), Nonce 5 will remain pending until Nonce 4 is mined.\n\nProduction Solutions:\n1. Frontend Queue / Mutex Locking:\n   - For user-facing dApps, enforce a sequential transaction queue in UI state. Disable the second action button until the first transaction hash is received or confirmed.\n2. Deterministic Nonce Assignment:\n   - In automated backend relayers or bots, maintain an in-memory Redis nonce counter synchronized with `eth_getTransactionCount(address, 'pending')`.\n   - Increment the local counter atomically for each transaction:\n     ```typescript\n     const nonce = await redis.incr(`nonce:${walletAddress}`);\n     ```\n3. Transaction Speed-Up & Cancellation:\n   - If a transaction is stuck due to a gas spike, submit a replacement transaction with the EXACT same nonce but a >=10% higher priority fee (EIP-1559 replacement rule)."
  },
  {
    "id": 4,
    "question": "What happens when a transaction is submitted to the network but the RPC request times out before returning a hash or receipt? How do you recover gracefully?",
    "answer": "RPC Timeout Recovery Protocol:\n1. The Core Hazard:\n   - A network timeout on `eth_sendRawTransaction` DOES NOT mean the transaction failed! The node may have received the transaction and broadcast it to the mempool before the HTTP connection dropped.\n   - Blindly resubmitting the transaction with a new nonce can double-spend or execute unintended duplicate actions.\n2. Verification Step 1 \u2014 Local Hash Derivation:\n   - Because the signed transaction is deterministic, the transaction hash is known BEFORE sending:\n     ```typescript\n     const txHash = keccak256(signedSerializedTransaction);\n     ```\n3. Verification Step 2 \u2014 Query Alternative RPC:\n   - Immediately query multiple fallback RPC providers for the derived hash:\n     ```typescript\n     const tx = await fallbackProvider.getTransaction(txHash);\n     ```\n   - If the transaction is found in mempool, transition UI to 'Pending Inclusion' and await receipt.\n4. Verification Step 3 \u2014 Nonce Inspection:\n   - If the transaction is not found, check the account's current mined and pending nonces. If the target nonce has incremented, inspect recent block receipts."
  },
  {
    "id": 5,
    "question": "How would you architect a resilient WebSocket subscription system that automatically recovers from disconnections without losing event logs?",
    "answer": "Resilient WebSocket Reconnection & Log Backfill Engine:\n1. Heartbeat & Ping-Pong Monitoring:\n   - WebSocket connections frequently encounter silent drops due to proxy idle timeouts.\n   - Send periodic `ping` frames every 15\u201330 seconds. If a `pong` is not received within 5 seconds, forcefully terminate and restart the socket.\n2. Exponential Backoff with Jitter:\n   - Reconnect using randomized exponential backoff: $T = \\min(T_{\\max}, T_{\\text{base}} \\times 2^n) \\pm \\text{jitter}$ to avoid thundering herd spikes on the RPC cluster.\n3. State Tracking (Last Processed Block):\n   - Record the `lastProcessedBlock` for every processed event log in local/persistent storage.\n4. Historical Backfill on Reconnection:\n   - Upon reconnecting, DO NOT simply attach a new listener (which only captures future events).\n   - First, query historical logs from `lastProcessedBlock + 1` to `currentBlock` using `getLogs({ fromBlock, toBlock })`.\n   - Deduplicate logs using `transactionHash + logIndex` before updating application state.\n   - Finally, re-enable the live WebSocket subscription."
  },
  {
    "id": 6,
    "question": "How would you implement automatic, client-side RPC failover across multiple providers (Alchemy, Infura, QuickNode, Public RPC)?",
    "answer": "Automatic RPC Failover Architecture:\n1. Viem Fallback Transport:\n   - Viem provides native fallback transports with automated rank-ordering:\n     ```typescript\n     import { createPublicClient, fallback, http } from 'viem';\n     import { mainnet } from 'viem/chains';\n\n     const client = createPublicClient({\n       chain: mainnet,\n       transport: fallback([\n         http('https://eth-mainnet.g.alchemy.com/v2/KEY_A'),\n         http('https://mainnet.infura.io/v3/KEY_B'),\n         http('https://rpc.ankr.com/eth'),\n         http('https://cloudflare-eth.com')\n       ], {\n         rank: true, // dynamically benchmarks and prioritizes lowest-latency endpoints\n         retryCount: 3,\n         retryDelay: 1000\n       })\n     });\n     ```\n2. Circuit Breaker Pattern:\n   - Track HTTP 429 (Rate Limited) and 5xx errors per endpoint.\n   - If an endpoint fails 3 consecutive times, trip the circuit breaker and put that RPC on a 60-second cooldown."
  },
  {
    "id": 7,
    "question": "What is the precise technical distinction between a transaction hash, a transaction response, and a transaction receipt?",
    "answer": "Technical Hierarchy of Transaction States:\n1. Transaction Hash (`txHash` - 32 bytes):\n   - The Keccak-256 hash of the RLP-encoded signed transaction payload.\n   - Exists before network broadcast and identifies the transaction in the mempool.\n2. Transaction Response (In-Flight Object):\n   - The data returned by an RPC node when querying a pending or mined transaction (`eth_getTransactionByHash`).\n   - Contains input fields: `nonce`, `gasPrice`/`maxFeePerGas`, `gasLimit`, `to`, `value`, `data`, and cryptographic signature components (`r, s, v/yParity`).\n3. Transaction Receipt (Mined Execution Record):\n   - The historical cryptographic receipt generated strictly AFTER a validator includes the transaction in a block (`eth_getTransactionReceipt`).\n   - Contains execution results: `status` (1 = success, 0 = revert), `gasUsed`, `effectiveGasPrice`, `blockNumber`, `blockHash`, and the array of emitted `logs`."
  },
  {
    "id": 8,
    "question": "When a smart contract execution reverts, how do you extract, decode, and present custom Solidity error messages in a JavaScript application?",
    "answer": "Solidity Custom Error Decoding Pipeline:\n1. Solidity Revert Data Representation:\n   - When a contract reverts via `revert CustomError(arg1, arg2)`, the node returns raw hex `data` in the RPC error object.\n   - The first 4 bytes represent the Custom Error selector: `bytes4(keccak256('CustomError(uint256,address)'))`.\n2. Decoding with Ethers.js v6:\n   ```typescript\n   try {\n     const tx = await contract.withdraw(amount);\n     await tx.wait();\n   } catch (error: any) {\n     if (error.data) {\n       const decodedError = contract.interface.parseError(error.data);\n       console.log(\"Reverted with custom error:\", decodedError.name, decodedError.args);\n     }\n   }\n   ```\n3. Decoding with Viem:\n   ```typescript\n   import { decodeErrorResult } from 'viem';\n\n   try {\n     await publicClient.simulateContract({ ... });\n   } catch (err: any) {\n     const error = decodeErrorResult({\n       abi: contractAbi,\n       data: err.data || err.cause?.data\n     });\n     console.log(\"Decoded error:\", error.errorName, error.args);\n   }\n   ```"
  },
  {
    "id": 9,
    "question": "How would you design a production-grade, fault-tolerant blockchain event indexing pipeline?",
    "answer": "Production Blockchain Event Indexer Architecture:\n1. Block Ingestion Engine:\n   - Ingest blocks sequentially using a reliable sliding window (e.g. 100 blocks per batch).\n   - Query logs via `eth_getLogs({ fromBlock, toBlock, address, topics })`.\n2. Safe Confirmation Depth:\n   - Never consider events final at the tip of the chain (`block.number`).\n   - Wait for a reorg-safe confirmation depth (e.g., 64 blocks on Ethereum PoS, or listen for the `finalized` block tag).\n3. Reorganization Handling:\n   - Store the `blockHash` alongside every indexed record.\n   - Before appending new events, verify that the parent hash of the incoming block matches the latest stored block.\n   - If a reorg occurs, rollback all database entries above the fork block and re-sync along the canonical chain.\n4. Idempotency & Database Constraints:\n   - Enforce a composite primary key: `(transaction_hash, log_index)`.\n   - Use `INSERT ... ON CONFLICT DO NOTHING` to ensure that duplicate log deliveries never result in duplicate database records."
  },
  {
    "id": 10,
    "question": "What frontend engineering safeguards prevent users from accidentally submitting duplicate transactions (e.g. clicking 'Submit' multiple times)?",
    "answer": "Duplicate Submission Prevention Strategies:\n1. Immediate UI State Locking:\n   - Set an `isSubmitting: true` boolean state synchronously at the start of the handler, immediately disabling the button and showing a spinner.\n2. Idempotency Keys in UI Logic:\n   - Generate a UUID for the intended action and store it in a React ref or state. Discard subsequent click events matching that UUID until complete.\n3. EIP-1193 Debouncing:\n   - MetaMask itself queues requests from the same origin, but debouncing click handlers prevents opening multiple confirmation prompts.\n4. Local Storage Tx Tracking:\n   - Save active pending transaction hashes in `localStorage`. If the user refreshes the page, the UI restores the pending transaction state rather than prompting them to resubmit."
  },
  {
    "id": 11,
    "question": "Why is ABI type inference in Viem ('as const') considered a major evolutionary leap over earlier Web3 libraries?",
    "answer": "Viem 'as const' Type Inference Revolution:\n1. The Flaw in Legacy Libraries:\n   - In Web3.js and Ethers v5, contract methods returned `any` or generic types. A typo in function name (`contract.tranfer(...)`) or mismatched argument count was only detected at RUNTIME when the EVM reverted.\n2. Viem Compile-Time Verification:\n   - By declaring `const abi = [...] as const`, TypeScript treats the ABI as an immutable literal type tuple rather than a generic array.\n   - Viem's type system extracts function names, argument types, and return values automatically:\n     ```typescript\n     // TypeScript will red-underline invalid arguments before code ever runs!\n     await client.readContract({\n       abi,\n       functionName: 'balanceOf', // Auto-completed!\n       args: ['0x123...'] // Type-checked to be an address (`0x${string}`)\n     });\n     ```\n3. Zero Code Generation:\n   - Unlike TypeChain (which requires running separate compilation scripts to generate TypeScript classes), Viem achieves instant type safety natively inside VS Code without build steps."
  },
  {
    "id": 12,
    "question": "How would you optimize initial page load performance and data fetching in a decentralized Web3 React application?",
    "answer": "Web3 React Performance Optimization:\n1. Defer Wallet Connection:\n   - Do NOT attempt to auto-connect MetaMask on initial page load (which triggers slow RPC handshakes). Render the page in read-only mode using a public RPC.\n2. Code Splitting & Dynamic Imports:\n   - Lazy load heavy Web3 libraries (Ethers, Viem, QR modal bundles) using `React.lazy()` and dynamic `import()` so initial bundle size remains small.\n3. Batch State Retrieval via Multicall:\n   - Instead of 15 separate `useEffect` calls fetching user balance, token allowances, staking yields, and block numbers, aggregate them into 1 multicall query.\n4. Server-Side Rendering (SSR) / Static Site Generation (SSG) with Edge Hydration:\n   - Pre-render catalog pages, static documentation, and protocol stats on the server, hydrating wallet-specific state only on client mount."
  },
  {
    "id": 13,
    "question": "Deep dive: Contrast Viem's Public Client with its Wallet Client in terms of transport layer, cryptography, and execution privileges.",
    "answer": "Viem Public Client vs Wallet Client Deep Dive:\n\n| Dimension | Public Client | Wallet Client |\n| :--- | :--- | :--- |\n| **Primary Scope** | Reading blockchain state & simulating execution | Signing data, authorizing transfers & mutating state |\n| **Cryptographic Keys** | Does NOT hold or require private keys | Interfaces with an Account (`privateKeyToAccount`) or EIP-1193 Provider (`window.ethereum`) |\n| **Typical Transport** | HTTP or WebSocket to remote node (`alchemy`, `infura`) | Custom transport (`custom(window.ethereum)`) or local RPC |\n| **RPC Methods** | `eth_blockNumber`, `eth_getBalance`, `eth_call`, `eth_getLogs` | `eth_sendTransaction`, `personal_sign`, `eth_signTypedData_v4` |\n| **Gas Costs** | Free (no user gas fees) | Consumes network gas fees |\n| **Execution Risk** | Read-only; cannot alter state | High; can drain user funds if parameters are malicious |"
  },
  {
    "id": 14,
    "question": "How should a decentralized frontend application handle chain reorganizations (reorgs)?",
    "answer": "Chain Reorganization Frontend Mitigation:\n1. What is a Reorg?\n   - A blockchain reorganizes when a temporary fork occurs and nodes switch to a new canonical chain. Transactions in the discarded branch may either be mined in a different block, revert, or disappear into the mempool.\n2. Finality Tiers:\n   - In modern Ethereum PoS (post-Merge), blocks achieve 'Justified' status after 1 epoch (32 slots ~ 6.4 minutes) and 'Finalized' status after 2 epochs (~12.8 minutes). A finalized block CANNOT be reorganized without 33% of validator stake being slashed.\n3. Frontend State Design:\n   - Display three distinct transaction stages in the UI:\n     1. 'Submitted' (in mempool)\n     2. 'Confirmed' (mined in block $N$, 1 confirmation)\n     3. 'Finalized' (2 epochs passed, irreversible)\n4. Re-fetching on Depth Thresholds:\n   - For high-value transactions, delay UI completion banners until the transaction has reached a threshold of confirmations (e.g. 12 on Polygon, finalized on Ethereum)."
  },
  {
    "id": 15,
    "question": "How would you architect a multichain frontend supporting Ethereum Mainnet, Polygon, and Arbitrum simultaneously?",
    "answer": "Multichain Web3 Frontend Architecture:\n1. Centralized Chain Registry:\n   - Define a strongly typed chain configuration dictionary mapping `chainId` to dedicated RPC endpoints, block explorers, native currency metadata, and deployed contract addresses:\n     ```typescript\n     export const SUPPORTED_CHAINS = {\n       [mainnet.id]: { contracts: { prepToken: '0x...' }, rpc: '...' },\n       [arbitrum.id]: { contracts: { prepToken: '0x...' }, rpc: '...' },\n       [polygon.id]: { contracts: { prepToken: '0x...' }, rpc: '...' }\n     } as const;\n     ```\n2. Dynamic Client Instantiation:\n   - Maintain a pool of Public Clients indexed by `chainId`. When querying state on Arbitrum, route the query to the Arbitrum client regardless of which chain the user's wallet is currently connected to!\n3. EIP-3326 & EIP-3085 Network Switching:\n   - When a user initiates an on-chain action on a specific chain, check `walletClient.getChainId()`. If mismatched, call `wallet_switchEthereumChain` with fallback to `wallet_addEthereumChain` to prompt MetaMask to switch networks seamlessly.\n4. Chain-Isolated State Caching:\n   - Key all cached queries by `[chainId, contractAddress, userAddress]` so switching networks never displays stale balances from the wrong blockchain."
  }
];

const PRESET_SELECTORS = {
  "transfer(address,uint256)": "0xa9059cbb",
  "approve(address,uint256)": "0x095ea7b3",
  "balanceOf(address)": "0x70a08231",
  "totalSupply()": "0x18160ddd",
  "transferFrom(address,address,uint256)": "0x23b872dd",
  "ownerOf(uint256)": "0x6352211e"
};

export default function BlockchainWeb3Libraries() {
  const navigate = useNavigate();

  // Navigation tab state: interactive | theory | lab | assessment | tracker
  const [activeTab, setActiveTab] = useState("interactive");

  // Checklist State with LocalStorage Persistence
  const [checklistState, setChecklistState] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m13_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("prepspaces_blockchain_m13_progress", JSON.stringify(checklistState));
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
  // Interactive Simulators State & Handlers
  // ==========================================
  const [simulatorTab, setSimulatorTab] = useState("selector");

  // Simulator 1: Selector & Calldata
  const [selectedPreset, setSelectedPreset] = useState("transfer");
  const [customSignature, setCustomSignature] = useState("transfer(address,uint256)");
  const [calldataParamAddress, setCalldataParamAddress] = useState("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  const [calldataParamAmount, setCalldataParamAmount] = useState("100");

  const handlePresetChange = (presetSig) => {
    setSelectedPreset(presetSig);
    setCustomSignature(presetSig);
  };

  const calculatedSelector = useMemo(() => {
    if (PRESET_SELECTORS[customSignature]) return PRESET_SELECTORS[customSignature];
    // Deterministic pseudo-selector calculation:
    let hash = 0;
    for (let i = 0; i < customSignature.length; i++) {
      hash = ((hash << 5) - hash) + customSignature.charCodeAt(i);
      hash |= 0;
    }
    return "0x" + Math.abs(hash).toString(16).padStart(8, "0").slice(0, 8);
  }, [customSignature]);

  const paddedAddress = useMemo(() => {
    const clean = calldataParamAddress.replace(/^0x/, "").toLowerCase();
    return clean.padStart(64, "0");
  }, [calldataParamAddress]);

  const paddedAmount = useMemo(() => {
    const num = parseFloat(calldataParamAmount) || 0;
    const rawWei = BigInt(Math.floor(num * 1e6)) * BigInt(1e12);
    return rawWei.toString(16).padStart(64, "0");
  }, [calldataParamAmount]);

  // Simulator 2: Code Comparison & Playground
  const [playgroundAction, setPlaygroundAction] = useState("balance");
  const [playgroundResult, setPlaygroundResult] = useState(null);
  const [playgroundLatency, setPlaygroundLatency] = useState(140);

  const executePlaygroundQuery = () => {
    setPlaygroundLatency(Math.floor(90 + Math.random() * 80));
    if (playgroundAction === "balance") {
      setPlaygroundResult(JSON.stringify({
        method: "eth_getBalance",
        address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
        rawHex: "0x1b4f738096120000",
        formattedEth: "1.968 ETH",
        status: "200 OK",
        provider: "Alchemy Sepolia Node"
      }, null, 2));
    } else if (playgroundAction === "blockNumber") {
      setPlaygroundResult(JSON.stringify({
        method: "eth_blockNumber",
        headBlockHex: "0x6e2f41",
        headBlockDec: 7221057,
        finality: "Safe Head (64 Epoch confirmations)",
        timestamp: new Date().toISOString()
      }, null, 2));
    } else {
      setPlaygroundResult(JSON.stringify({
        method: "eth_call (totalSupply)",
        contract: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
        rawResult: "0x000000000000000000000000000000000000000000000034f08b1f22e8400000",
        formattedTotalSupply: "1,000,000,000.0 LINK",
        gasConsumedSimulated: 2420
      }, null, 2));
    }
  };

  // Simulator 3: MetaMask Wallet State Machine
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [connectedWalletAccount, setConnectedWalletAccount] = useState("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  const [connectedChainId, setConnectedChainId] = useState("11155111");
  const [simulatedWalletError, setSimulatedWalletError] = useState(null);

  const handleWalletConnectToggle = () => {
    setIsWalletConnected(prev => !prev);
    setSimulatedWalletError(null);
  };

  const handleAccountSwitch = (newAcc) => {
    setConnectedWalletAccount(newAcc);
  };

  const handleChainSwitch = (newChain) => {
    setConnectedChainId(newChain);
  };

  const triggerWalletError = (code, message) => {
    setSimulatedWalletError({ code, message });
  };

  // Simulator 4: EIP-1559 Dynamic Gas Calculator
  const [gasLimitVal, setGasLimitVal] = useState(65000);
  const [baseFeeGwei, setBaseFeeGwei] = useState(25);
  const [priorityFeeGwei, setPriorityFeeGwei] = useState(2);
  const ethPriceUsd = 2800;

  const effectiveGasPrice = baseFeeGwei + priorityFeeGwei;
  const totalFeeEth = useMemo(() => {
    const feeWei = BigInt(gasLimitVal) * BigInt(effectiveGasPrice) * BigInt(1e9);
    return (Number(feeWei) / 1e18).toFixed(6);
  }, [gasLimitVal, effectiveGasPrice]);

  const totalFeeUsd = useMemo(() => {
    return (parseFloat(totalFeeEth) * ethPriceUsd).toFixed(2);
  }, [totalFeeEth, ethPriceUsd]);

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
                Module 13: Web3.js, Ethers.js &amp; Viem
              </h1>
              <p className="text-xs sm:text-sm text-[#52525b] mt-0.5">
                Client Architecture, JSON-RPC Opcodes, ABI Encoding, EIP-1193 Wallets, and Type-Safe dApp Engineering
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
                <span>Theory (Parts 1-16)</span>
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
                <span>React Lab &amp; Project</span>
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
        <ModuleNav currentModuleId="web3-libraries" />
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
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


        {activeTab === "theory" && (
          
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

        )}

        {activeTab === "lab" && (
          
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

        )}

        {activeTab === "assessment" && (
          
<section id="part-19" className="space-y-12">
  {/* PART 19: KNOWLEDGE ASSESSMENT & INTERVIEW SCENARIOS */}

  {/* SECTION HEADER */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 19</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Knowledge Assessment &amp; Senior Architect Scenarios</h2>
    </div>
    <p className="text-[#27272a] text-sm sm:text-base leading-relaxed">
      Test your mastery across Ethereum JSON-RPC communication, Web3.js migration, Ethers.js v6, Viem type inference, transaction lifecycles, and wallet security. Complete the 20 conceptual questions and analyze the 15 senior-level architectural scenarios.
    </p>
  </div>

  {/* 20 MULTIPLE CHOICE QUESTIONS */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">Part 19.1: Conceptual Knowledge Quiz (20 Questions)</h3>
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

  {/* 15 SENIOR WEB3 ARCHITECT INTERVIEW SCENARIOS */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="mb-6 pb-6 border-b border-[#e7e3da]">
      <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">
        Part 19.2: Senior Web3 Architect Interview Scenarios (15 Real-World Case Studies)
      </h3>
      <p className="text-xs sm:text-sm text-[#52525b] mt-1">
        These scenarios are taken directly from L5/L6 Web3 Architect interviews at major protocols (Uniswap, OpenSea, Chainlink). Click each question to expand the complete technical resolution.
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
          
<section id="part-20" className="space-y-12">
  {/* PART 20: MODULE SUMMARY, 26-OBJECTIVE TRACKER & OFFICIAL RESOURCES */}

  {/* PART 20: KEY CONCEPTS SUMMARY */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 20</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Module Summary &amp; Key Architectural Takeaways</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">JSON-RPC</span>
        The universal remote procedure call protocol connecting dApp frontends to Ethereum client execution nodes.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Web3.js (Sunset)</span>
        The historic 2014-era Ethereum library; officially sunset on March 4, 2025. Maintained solely for legacy migration.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Ethers.js v6</span>
        Compact, battle-tested library featuring native BigInt, modular classes, and clean Provider/Signer separation.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Viem (Modern Standard)</span>
        Ultra-fast, modular TypeScript interface providing compile-time ABI type inference with <code className="font-mono text-xs">as const</code>.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Provider vs Signer</span>
        Providers read blockchain state via free <code className="font-mono text-xs">eth_call</code>; Signers authorize state writes via cryptographic wallets.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">ABI &amp; Function Selector</span>
        4-byte keccak256 hash prefix + 32-byte padded arguments serialize JavaScript calls into raw EVM calldata.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Tx Hash != Success</span>
        Broadcasted hashes only prove mempool acceptance. Always verify the Transaction Receipt (<code className="font-mono text-xs">status === 1</code>).
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Event Logs &amp; Topics</span>
        Events store logs off smart contract state. Indexed parameters become searchable topics; non-indexed remain in data.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">EIP-1193 &amp; Error 4001</span>
        Universal wallet standard (<code className="font-mono text-xs">window.ethereum</code>); gracefully handle 4001 user rejections without crashes.
      </div>
    </div>
  </div>

  {/* 26-OBJECTIVE COMPLETION TRACKER */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">Module 13 Mastery Checklist (26 Core Objectives)</h3>
        <p className="text-xs sm:text-sm text-[#52525b] mt-1">
          Track your personal progress through every concept. Check off completed items to persist progress locally.
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
      Continue your studies with official references, documentation, and protocol specifications:
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
        <p className="text-xs text-[#52525b] mt-1">Official guide to TypeScript clients, actions, and ABI inference.</p>
      </a>

      <a
        href="https://docs.ethers.org/v6/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Ethers.js v6 Documentation
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Comprehensive reference for Providers, Signers, Contracts, and Interfaces.</p>
      </a>

      <a
        href="https://ethereum.org/developers/docs/apis/json-rpc/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Ethereum JSON-RPC Specification
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Official reference for all Ethereum execution client RPC methods.</p>
      </a>

      <a
        href="https://eips.ethereum.org/EIPS/eip-1193"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          EIP-1193 Provider Standard
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">The universal Ethereum provider JavaScript interface specification.</p>
      </a>

      <a
        href="https://docs.metamask.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          MetaMask Developer Docs
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Injected provider guides, wallet connection, and signing best practices.</p>
      </a>

      <a
        href="https://docs.alchemy.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Alchemy &amp; Infura Docs
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Enterprise node infrastructure, enhanced APIs, and rate limit optimization.</p>
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
            onClick={() => navigate("/learning/blockchain/tokens")}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#e7e3da] bg-white hover:bg-[#f6f4ee] font-bold text-sm text-[#27272a] flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#ea580c]" />
            <span>Previous: Module 12 — ERC Token Standards</span>
          </button>

          <button
            onClick={() => navigate("/learning/blockchain/dapp-development")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] font-bold text-sm text-white flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span>Next: Module 14 — Full-Stack DApp Development</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
