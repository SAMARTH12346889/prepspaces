# projectx/generator_mod13/gen_data.py

CHECKLIST_ITEMS = [
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
]

QUIZ_QUESTIONS = [
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
]

INTERVIEW_QUESTIONS = [
    {
        "id": 1,
        "question": "How would you architect a Web3 frontend application designed to support 100,000 daily active users without incurring massive RPC provider bills or hitting rate limits?",
        "answer": r"""Architectural Strategy for High-Scale Web3 Applications:
1. Multi-Tier Caching & Indexing:
   - Never query raw Ethereum RPC nodes for complex queries (e.g. user transaction history, NFT galleries, leaderboard calculations).
   - Use dedicated indexing subgraphs (The Graph, Goldsky, or custom Envio/Ponder indexers) with PostgreSQL and CDN edge caching (Cloudflare, Fastly).
   - Cache static and slowly changing contract state (token metadata, decimals, names) on the edge with high TTLs.
2. Read/Write Decoupling:
   - Direct all read operations (`balanceOf`, `allowance`, `tokenURI`) to read-only replica RPC pools or public fallback transports.
   - Restrict paid RPC endpoints (Alchemy, Infura, QuickNode) exclusively to transaction simulation and write broadcasting.
3. Multicall3 Batching:
   - Combine dozens of distinct contract calls into a single RPC call using the canonical `Multicall3` contract (`0xca11bde05977b3631167028862be2a173976ca11`). Both Viem and Ethers natively support Multicall batching (`batch: { multicall: true }`).
4. RPC Load Balancing & Failover:
   - Implement client-side round-robin or latency-based fallback transports across multiple independent RPC providers."""
    },
    {
        "id": 2,
        "question": "How would you reduce redundant RPC requests and prevent UI re-render storms in a React dApp?",
        "answer": r"""RPC Optimization Patterns in React:
1. Use Wagmi / TanStack Query (React Query):
   - Leverage stale-while-revalidate caching. Configure `staleTime: 30_000` (30 seconds) and `cacheTime: 300_000` for token balances and account state.
   - Disable aggressive refetching on window focus (`refetchOnWindowFocus: false`) to prevent spamming RPC nodes when users toggle browser tabs.
2. Multicall Batch Aggregation:
   - In Viem:
     ```typescript
     const client = createPublicClient({
       chain: mainnet,
       transport: http(),
       batch: {
         multicall: {
           batchSize: 1024,
           wait: 16 // debounces calls within a single event loop tick
         }
       }
     });
     ```
3. Block-Triggered Invalidation:
   - Instead of polling every 2 seconds, subscribe to new block headers (`watchBlockNumber`) and invalidate queries only when a new block is mined.
4. Selective Event-Based Invalidation:
   - Invalidate user balance queries only when a `Transfer` event involving `msg.sender` is observed, rather than after every generic render."""
    },
    {
        "id": 3,
        "question": "How do you handle multiple simultaneous transactions submitted by a user without triggering nonce collisions or race conditions?",
        "answer": r"""Nonce Management in High-Frequency Web3 Environments:
The Problem:
Every Ethereum account maintains a sequential integer `nonce` tracking transaction count. If two transactions are submitted with the identical nonce, the second will either fail or replace the first. If submitted out of order (e.g. Nonce 5 before Nonce 4), Nonce 5 will remain pending until Nonce 4 is mined.

Production Solutions:
1. Frontend Queue / Mutex Locking:
   - For user-facing dApps, enforce a sequential transaction queue in UI state. Disable the second action button until the first transaction hash is received or confirmed.
2. Deterministic Nonce Assignment:
   - In automated backend relayers or bots, maintain an in-memory Redis nonce counter synchronized with `eth_getTransactionCount(address, 'pending')`.
   - Increment the local counter atomically for each transaction:
     ```typescript
     const nonce = await redis.incr(`nonce:${walletAddress}`);
     ```
3. Transaction Speed-Up & Cancellation:
   - If a transaction is stuck due to a gas spike, submit a replacement transaction with the EXACT same nonce but a >=10% higher priority fee (EIP-1559 replacement rule)."""
    },
    {
        "id": 4,
        "question": "What happens when a transaction is submitted to the network but the RPC request times out before returning a hash or receipt? How do you recover gracefully?",
        "answer": r"""RPC Timeout Recovery Protocol:
1. The Core Hazard:
   - A network timeout on `eth_sendRawTransaction` DOES NOT mean the transaction failed! The node may have received the transaction and broadcast it to the mempool before the HTTP connection dropped.
   - Blindly resubmitting the transaction with a new nonce can double-spend or execute unintended duplicate actions.
2. Verification Step 1 — Local Hash Derivation:
   - Because the signed transaction is deterministic, the transaction hash is known BEFORE sending:
     ```typescript
     const txHash = keccak256(signedSerializedTransaction);
     ```
3. Verification Step 2 — Query Alternative RPC:
   - Immediately query multiple fallback RPC providers for the derived hash:
     ```typescript
     const tx = await fallbackProvider.getTransaction(txHash);
     ```
   - If the transaction is found in mempool, transition UI to 'Pending Inclusion' and await receipt.
4. Verification Step 3 — Nonce Inspection:
   - If the transaction is not found, check the account's current mined and pending nonces. If the target nonce has incremented, inspect recent block receipts."""
    },
    {
        "id": 5,
        "question": "How would you architect a resilient WebSocket subscription system that automatically recovers from disconnections without losing event logs?",
        "answer": r"""Resilient WebSocket Reconnection & Log Backfill Engine:
1. Heartbeat & Ping-Pong Monitoring:
   - WebSocket connections frequently encounter silent drops due to proxy idle timeouts.
   - Send periodic `ping` frames every 15–30 seconds. If a `pong` is not received within 5 seconds, forcefully terminate and restart the socket.
2. Exponential Backoff with Jitter:
   - Reconnect using randomized exponential backoff: $T = \min(T_{\max}, T_{\text{base}} \times 2^n) \pm \text{jitter}$ to avoid thundering herd spikes on the RPC cluster.
3. State Tracking (Last Processed Block):
   - Record the `lastProcessedBlock` for every processed event log in local/persistent storage.
4. Historical Backfill on Reconnection:
   - Upon reconnecting, DO NOT simply attach a new listener (which only captures future events).
   - First, query historical logs from `lastProcessedBlock + 1` to `currentBlock` using `getLogs({ fromBlock, toBlock })`.
   - Deduplicate logs using `transactionHash + logIndex` before updating application state.
   - Finally, re-enable the live WebSocket subscription."""
    },
    {
        "id": 6,
        "question": "How would you implement automatic, client-side RPC failover across multiple providers (Alchemy, Infura, QuickNode, Public RPC)?",
        "answer": r"""Automatic RPC Failover Architecture:
1. Viem Fallback Transport:
   - Viem provides native fallback transports with automated rank-ordering:
     ```typescript
     import { createPublicClient, fallback, http } from 'viem';
     import { mainnet } from 'viem/chains';

     const client = createPublicClient({
       chain: mainnet,
       transport: fallback([
         http('https://eth-mainnet.g.alchemy.com/v2/KEY_A'),
         http('https://mainnet.infura.io/v3/KEY_B'),
         http('https://rpc.ankr.com/eth'),
         http('https://cloudflare-eth.com')
       ], {
         rank: true, // dynamically benchmarks and prioritizes lowest-latency endpoints
         retryCount: 3,
         retryDelay: 1000
       })
     });
     ```
2. Circuit Breaker Pattern:
   - Track HTTP 429 (Rate Limited) and 5xx errors per endpoint.
   - If an endpoint fails 3 consecutive times, trip the circuit breaker and put that RPC on a 60-second cooldown."""
    },
    {
        "id": 7,
        "question": "What is the precise technical distinction between a transaction hash, a transaction response, and a transaction receipt?",
        "answer": r"""Technical Hierarchy of Transaction States:
1. Transaction Hash (`txHash` - 32 bytes):
   - The Keccak-256 hash of the RLP-encoded signed transaction payload.
   - Exists before network broadcast and identifies the transaction in the mempool.
2. Transaction Response (In-Flight Object):
   - The data returned by an RPC node when querying a pending or mined transaction (`eth_getTransactionByHash`).
   - Contains input fields: `nonce`, `gasPrice`/`maxFeePerGas`, `gasLimit`, `to`, `value`, `data`, and cryptographic signature components (`r, s, v/yParity`).
3. Transaction Receipt (Mined Execution Record):
   - The historical cryptographic receipt generated strictly AFTER a validator includes the transaction in a block (`eth_getTransactionReceipt`).
   - Contains execution results: `status` (1 = success, 0 = revert), `gasUsed`, `effectiveGasPrice`, `blockNumber`, `blockHash`, and the array of emitted `logs`."""
    },
    {
        "id": 8,
        "question": "When a smart contract execution reverts, how do you extract, decode, and present custom Solidity error messages in a JavaScript application?",
        "answer": r"""Solidity Custom Error Decoding Pipeline:
1. Solidity Revert Data Representation:
   - When a contract reverts via `revert CustomError(arg1, arg2)`, the node returns raw hex `data` in the RPC error object.
   - The first 4 bytes represent the Custom Error selector: `bytes4(keccak256('CustomError(uint256,address)'))`.
2. Decoding with Ethers.js v6:
   ```typescript
   try {
     const tx = await contract.withdraw(amount);
     await tx.wait();
   } catch (error: any) {
     if (error.data) {
       const decodedError = contract.interface.parseError(error.data);
       console.log("Reverted with custom error:", decodedError.name, decodedError.args);
     }
   }
   ```
3. Decoding with Viem:
   ```typescript
   import { decodeErrorResult } from 'viem';

   try {
     await publicClient.simulateContract({ ... });
   } catch (err: any) {
     const error = decodeErrorResult({
       abi: contractAbi,
       data: err.data || err.cause?.data
     });
     console.log("Decoded error:", error.errorName, error.args);
   }
   ```"""
    },
    {
        "id": 9,
        "question": "How would you design a production-grade, fault-tolerant blockchain event indexing pipeline?",
        "answer": r"""Production Blockchain Event Indexer Architecture:
1. Block Ingestion Engine:
   - Ingest blocks sequentially using a reliable sliding window (e.g. 100 blocks per batch).
   - Query logs via `eth_getLogs({ fromBlock, toBlock, address, topics })`.
2. Safe Confirmation Depth:
   - Never consider events final at the tip of the chain (`block.number`).
   - Wait for a reorg-safe confirmation depth (e.g., 64 blocks on Ethereum PoS, or listen for the `finalized` block tag).
3. Reorganization Handling:
   - Store the `blockHash` alongside every indexed record.
   - Before appending new events, verify that the parent hash of the incoming block matches the latest stored block.
   - If a reorg occurs, rollback all database entries above the fork block and re-sync along the canonical chain.
4. Idempotency & Database Constraints:
   - Enforce a composite primary key: `(transaction_hash, log_index)`.
   - Use `INSERT ... ON CONFLICT DO NOTHING` to ensure that duplicate log deliveries never result in duplicate database records."""
    },
    {
        "id": 10,
        "question": "What frontend engineering safeguards prevent users from accidentally submitting duplicate transactions (e.g. clicking 'Submit' multiple times)?",
        "answer": r"""Duplicate Submission Prevention Strategies:
1. Immediate UI State Locking:
   - Set an `isSubmitting: true` boolean state synchronously at the start of the handler, immediately disabling the button and showing a spinner.
2. Idempotency Keys in UI Logic:
   - Generate a UUID for the intended action and store it in a React ref or state. Discard subsequent click events matching that UUID until complete.
3. EIP-1193 Debouncing:
   - MetaMask itself queues requests from the same origin, but debouncing click handlers prevents opening multiple confirmation prompts.
4. Local Storage Tx Tracking:
   - Save active pending transaction hashes in `localStorage`. If the user refreshes the page, the UI restores the pending transaction state rather than prompting them to resubmit."""
    },
    {
        "id": 11,
        "question": "Why is ABI type inference in Viem ('as const') considered a major evolutionary leap over earlier Web3 libraries?",
        "answer": r"""Viem 'as const' Type Inference Revolution:
1. The Flaw in Legacy Libraries:
   - In Web3.js and Ethers v5, contract methods returned `any` or generic types. A typo in function name (`contract.tranfer(...)`) or mismatched argument count was only detected at RUNTIME when the EVM reverted.
2. Viem Compile-Time Verification:
   - By declaring `const abi = [...] as const`, TypeScript treats the ABI as an immutable literal type tuple rather than a generic array.
   - Viem's type system extracts function names, argument types, and return values automatically:
     ```typescript
     // TypeScript will red-underline invalid arguments before code ever runs!
     await client.readContract({
       abi,
       functionName: 'balanceOf', // Auto-completed!
       args: ['0x123...'] // Type-checked to be an address (`0x${string}`)
     });
     ```
3. Zero Code Generation:
   - Unlike TypeChain (which requires running separate compilation scripts to generate TypeScript classes), Viem achieves instant type safety natively inside VS Code without build steps."""
    },
    {
        "id": 12,
        "question": "How would you optimize initial page load performance and data fetching in a decentralized Web3 React application?",
        "answer": r"""Web3 React Performance Optimization:
1. Defer Wallet Connection:
   - Do NOT attempt to auto-connect MetaMask on initial page load (which triggers slow RPC handshakes). Render the page in read-only mode using a public RPC.
2. Code Splitting & Dynamic Imports:
   - Lazy load heavy Web3 libraries (Ethers, Viem, QR modal bundles) using `React.lazy()` and dynamic `import()` so initial bundle size remains small.
3. Batch State Retrieval via Multicall:
   - Instead of 15 separate `useEffect` calls fetching user balance, token allowances, staking yields, and block numbers, aggregate them into 1 multicall query.
4. Server-Side Rendering (SSR) / Static Site Generation (SSG) with Edge Hydration:
   - Pre-render catalog pages, static documentation, and protocol stats on the server, hydrating wallet-specific state only on client mount."""
    },
    {
        "id": 13,
        "question": "Deep dive: Contrast Viem's Public Client with its Wallet Client in terms of transport layer, cryptography, and execution privileges.",
        "answer": r"""Viem Public Client vs Wallet Client Deep Dive:

| Dimension | Public Client | Wallet Client |
| :--- | :--- | :--- |
| **Primary Scope** | Reading blockchain state & simulating execution | Signing data, authorizing transfers & mutating state |
| **Cryptographic Keys** | Does NOT hold or require private keys | Interfaces with an Account (`privateKeyToAccount`) or EIP-1193 Provider (`window.ethereum`) |
| **Typical Transport** | HTTP or WebSocket to remote node (`alchemy`, `infura`) | Custom transport (`custom(window.ethereum)`) or local RPC |
| **RPC Methods** | `eth_blockNumber`, `eth_getBalance`, `eth_call`, `eth_getLogs` | `eth_sendTransaction`, `personal_sign`, `eth_signTypedData_v4` |
| **Gas Costs** | Free (no user gas fees) | Consumes network gas fees |
| **Execution Risk** | Read-only; cannot alter state | High; can drain user funds if parameters are malicious |"""
    },
    {
        "id": 14,
        "question": "How should a decentralized frontend application handle chain reorganizations (reorgs)?",
        "answer": r"""Chain Reorganization Frontend Mitigation:
1. What is a Reorg?
   - A blockchain reorganizes when a temporary fork occurs and nodes switch to a new canonical chain. Transactions in the discarded branch may either be mined in a different block, revert, or disappear into the mempool.
2. Finality Tiers:
   - In modern Ethereum PoS (post-Merge), blocks achieve 'Justified' status after 1 epoch (32 slots ~ 6.4 minutes) and 'Finalized' status after 2 epochs (~12.8 minutes). A finalized block CANNOT be reorganized without 33% of validator stake being slashed.
3. Frontend State Design:
   - Display three distinct transaction stages in the UI:
     1. 'Submitted' (in mempool)
     2. 'Confirmed' (mined in block $N$, 1 confirmation)
     3. 'Finalized' (2 epochs passed, irreversible)
4. Re-fetching on Depth Thresholds:
   - For high-value transactions, delay UI completion banners until the transaction has reached a threshold of confirmations (e.g. 12 on Polygon, finalized on Ethereum)."""
    },
    {
        "id": 15,
        "question": "How would you architect a multichain frontend supporting Ethereum Mainnet, Polygon, and Arbitrum simultaneously?",
        "answer": r"""Multichain Web3 Frontend Architecture:
1. Centralized Chain Registry:
   - Define a strongly typed chain configuration dictionary mapping `chainId` to dedicated RPC endpoints, block explorers, native currency metadata, and deployed contract addresses:
     ```typescript
     export const SUPPORTED_CHAINS = {
       [mainnet.id]: { contracts: { prepToken: '0x...' }, rpc: '...' },
       [arbitrum.id]: { contracts: { prepToken: '0x...' }, rpc: '...' },
       [polygon.id]: { contracts: { prepToken: '0x...' }, rpc: '...' }
     } as const;
     ```
2. Dynamic Client Instantiation:
   - Maintain a pool of Public Clients indexed by `chainId`. When querying state on Arbitrum, route the query to the Arbitrum client regardless of which chain the user's wallet is currently connected to!
3. EIP-3326 & EIP-3085 Network Switching:
   - When a user initiates an on-chain action on a specific chain, check `walletClient.getChainId()`. If mismatched, call `wallet_switchEthereumChain` with fallback to `wallet_addEthereumChain` to prompt MetaMask to switch networks seamlessly.
4. Chain-Isolated State Caching:
   - Key all cached queries by `[chainId, contractAddress, userAddress]` so switching networks never displays stale balances from the wrong blockchain."""
    }
]

if __name__ == "__main__":
    print(f"Checklist items: {len(CHECKLIST_ITEMS)}")
    print(f"Quiz questions: {len(QUIZ_QUESTIONS)}")
    print(f"Interview questions: {len(INTERVIEW_QUESTIONS)}")
