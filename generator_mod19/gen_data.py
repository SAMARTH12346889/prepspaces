# -*- coding: utf-8 -*-
"""
Module 19 Data: Layer 2 & Blockchain Scaling
- CHECKLIST_ITEMS: 28 items
- QUIZ_QUESTIONS: 20 questions
- INTERVIEW_QUESTIONS: 25 questions
- NUMERICAL_PROBLEMS: 5 problems
"""

CHECKLIST_ITEMS = [
  {"id": "c1", "label": "Understand the Blockchain Scalability Trilemma (Security, Decentralization, Scalability)", "category": "theory"},
  {"id": "c2", "label": "Derive the mathematical limits of Ethereum L1 throughput (15 TPS bottleneck)", "category": "theory"},
  {"id": "c3", "label": "Analyze L1 block space, gas limits (30M gas/block), and state bloat mechanics", "category": "theory"},
  {"id": "c4", "label": "Differentiate L1 base layer vs L2 execution scaling responsibilities across 9 dimensions", "category": "theory"},
  {"id": "c5", "label": "Contrast On-Chain scaling (Sharding, Danksharding) vs Off-Chain scaling (Rollups, Channels)", "category": "theory"},
  {"id": "c6", "label": "Examine State Channels: funding, multi-sig escrow, off-chain nonces, and dispute games", "category": "theory"},
  {"id": "c7", "label": "Evaluate Sidechain architecture (Polygon PoS) and independent validator security risks", "category": "theory"},
  {"id": "c8", "label": "Master Rollup Core Architecture: Sequencer, Calldata/Blobs, State Trires, and L1 Contracts", "category": "theory"},
  {"id": "c9", "label": "Formalize the Rollup State Transition Function: S_{n+1} = F(S_n, T_n)", "category": "theory"},
  {"id": "c10", "label": "Analyze Calldata compression techniques: RLP stripping, address indexing, and signature aggregation", "category": "theory"},
  {"id": "c11", "label": "Dissect Optimistic Rollup execution models and the 7-day challenge withdrawal window", "category": "theory"},
  {"id": "c12", "label": "Trace Interactive Dispute Games & binary search bisection down to single-step EVM execution", "category": "theory"},
  {"id": "c13", "label": "Dissect Zero-Knowledge Rollups: SNARK/STARK validity proofs and instant mathematical finality", "category": "theory"},
  {"id": "c14", "label": "Compare Fraud Proofs vs Validity Proofs across cost, latency, gas, and verifier complexity", "category": "theory"},
  {"id": "c15", "label": "Understand Data Availability (DA), data withholding attacks, and DA vs Storage distinctions", "category": "theory"},
  {"id": "c16", "label": "Master EIP-4844 Proto-Danksharding: Blobs, KZG commitments, and blob gas economics", "category": "theory"},
  {"id": "c17", "label": "Study Data Availability Sampling (DAS) and 2D Reed-Solomon erasure coding", "category": "theory"},
  {"id": "c18", "label": "Examine Sequencer roles, centralization vectors, MEV extraction, and censorship risks", "category": "theory"},
  {"id": "c19", "label": "Analyze L1 Forced Inclusion mechanisms (enqueueTransaction) to combat censorship", "category": "theory"},
  {"id": "c20", "label": "Map the 9-step Rollup Transaction Lifecycle from wallet signature to L1 settlement", "category": "theory"},
  {"id": "c21", "label": "Compare Ethereum L2 ecosystems: Arbitrum Nitro/Nova, Optimism OP Stack, Polygon CDK, zkSync", "category": "theory"},
  {"id": "c22", "label": "Analyze Cross-Chain Messaging, asynchronous bridges, and retryable tickets", "category": "theory"},
  {"id": "c23", "label": "Enforce Bridge Security Invariants (Bridged Supply <= Locked Assets) & audit 9 bridge vectors", "category": "theory"},
  {"id": "c24", "label": "Understand L2 EVM differences: block.number, block.timestamp, and gas metering models", "category": "lab"},
  {"id": "c25", "label": "Configure Foundry and deploy the L2Message.sol smart contract to Arbitrum Sepolia", "category": "lab"},
  {"id": "c26", "label": "Inspect Arbitrum Sepolia transactions on Arbiscan and verify L1 calldata vs L2 execution fees", "category": "lab"},
  {"id": "c27", "label": "Design and simulate the Mini Rollup Simulation Capstone across 6 engineering phases", "category": "lab"},
  {"id": "c28", "label": "Complete all 20 assessment questions and 5 numerical derivation problems with 100% accuracy", "category": "assessment"}
]

QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "question": "What is the primary factor limiting Ethereum Layer 1 throughput to approximately 15-30 transactions per second?",
    "options": [
      "The cryptographic complexity of Keccak-256 hashing.",
      "The block gas limit (30M gas) combined with the requirement that every full node worldwide must independently execute and verify every transaction.",
      "The physical speed of fiber-optic cables connecting international mining pools.",
      "The maximum memory size allowed in Solidity EVM contracts."
    ],
    "correctAnswer": 1,
    "explanation": "Ethereum L1 prioritizes decentralization and consumer-grade node operation. With a target block gas limit of 30M gas every 12 seconds, throughput is mathematically bounded by the gas consumed per transaction and the necessity for thousands of geographically distributed commodity hardware nodes to re-execute every opcode."
  },
  {
    "id": "q2",
    "question": "In Vitalik Buterin's Scalability Trilemma, which three properties cannot be simultaneously maximized at Layer 1 without architectural trade-offs?",
    "options": [
      "Throughput, Latency, and Cost.",
      "Decentralization, Security, and Scalability.",
      "EVM Equivalence, Zero Knowledge, and Portability.",
      "Privacy, Interoperability, and Finality."
    ],
    "correctAnswer": 1,
    "explanation": "The Scalability Trilemma asserts that a public blockchain can achieve at most two of the three properties: Decentralization, Security, and Scalability. Monolithic chains that scale L1 directly do so by elevating node hardware requirements, severely hurting decentralization."
  },
  {
    "id": "q3",
    "question": "What is the fundamental difference between a true Layer 2 Rollup and an independent Sidechain (like Polygon PoS)?",
    "options": [
      "Rollups use Proof of Work, whereas sidechains always use Proof of Stake.",
      "Rollups derive their core security and state validity from Layer 1 Ethereum; if rollup operators vanish, users can unilaterally recover funds using L1 data. Sidechains rely on their own independent validator set.",
      "Sidechains are EVM-compatible, whereas rollups can never support the Ethereum Virtual Machine.",
      "Rollups do not require bridge smart contracts on Ethereum."
    ],
    "correctAnswer": 1,
    "explanation": "A rollup posts transaction data or state diffs directly to Ethereum L1, inheriting Ethereum's censorship resistance and security. If sidechain validators collude, they can forge state and drain bridge custody contracts without L1 having any mathematical recourse."
  },
  {
    "id": "q4",
    "question": "How do State Channels (e.g., Bitcoin Lightning or Ethereum state channels) achieve near-infinite throughput between two parties?",
    "options": [
      "By eliminating cryptographic signatures for fast transactions.",
      "By executing only two transactions on-chain (opening escrow and closing settlement), while intermediate state transitions are cryptographically exchanged peer-to-peer off-chain with incrementing nonces.",
      "By offloading transaction execution to centralized AWS cloud instances.",
      "By storing transaction history permanently in Ethereum Calldata."
    ],
    "correctAnswer": 1,
    "explanation": "State channels lock assets in an on-chain multisig escrow contract. Parties exchange arbitrary numbers of signed off-chain balance updates. Only when a party wants to settle or disputes arise is the final highest-nonce state submitted to L1."
  },
  {
    "id": "q5",
    "question": "In an Optimistic Rollup, why is there a mandatory 7-day challenge period before withdrawals can be finalized on Ethereum L1?",
    "options": [
      "Because Ethereum block confirmations require 7 days to reach finality.",
      "To allow the ZK prover sufficient time to compute complex zero-knowledge polynomial proofs.",
      "To provide an ample window for honest watchers/validators to detect fraudulent state roots submitted by sequencers and submit a fraud proof, even under severe L1 network congestion or censorship.",
      "To comply with international banking settlement regulations."
    ],
    "correctAnswer": 2,
    "explanation": "Optimistic rollups assume submitted state roots are valid unless challenged. The 7-day window ensures that even if an attacker attempts to censor challenger transactions on L1 by gas-bidding or block stuffing, honest watchers have plenty of time to get their fraud proof included."
  },
  {
    "id": "q6",
    "question": "How does an interactive bisection dispute game (used in Arbitrum Nitro) reduce L1 verification gas costs compared to single-round fraud proofs?",
    "options": [
      "By requiring validators to submit zero-knowledge proofs.",
      "By engaging proposer and challenger in an off-chain binary search that bisects execution steps until pinpointing a single disputed EVM instruction, which L1 then executes.",
      "By ignoring smart contract code and letting L1 miners vote on balances.",
      "By compressing calldata into gzip format."
    ],
    "correctAnswer": 1,
    "explanation": "In single-round fraud proofs, an entire block or transaction execution must be re-run on L1, which can easily exceed L1 block gas limits. Interactive bisection recursively cuts the disputed range in half until a single EVM instruction (opcode) is isolated and evaluated on L1 via a One-Step Prover."
  },
  {
    "id": "q7",
    "question": "Why do Zero-Knowledge Rollups (e.g., zkSync, Starknet, Scroll) NOT require a 7-day dispute challenge window?",
    "options": [
      "Because they only process non-financial data.",
      "Because every batch is accompanied by a cryptographic validity proof (SNARK or STARK) that is verified mathematically by an L1 smart contract before the state root is updated.",
      "Because sequencers on ZK rollups are legally bonded by government entities.",
      "Because state is never posted to Ethereum L1."
    ],
    "correctAnswer": 1,
    "explanation": "ZK rollups rely on validity proofs rather than fraud proofs. An invalid state transition cannot mathematically produce a valid SNARK/STARK proof. The L1 verifier contract will revert immediately if the proof is invalid, granting instant cryptographic finality upon proof verification."
  },
  {
    "id": "q8",
    "question": "What is the primary trade-off of Zero-Knowledge Rollups compared to Optimistic Rollups?",
    "options": [
      "ZK rollups have weaker security than Optimistic rollups.",
      "Generating cryptographic validity proofs requires immense computational resources (GPUs/FPGAs) and complex prover circuits, leading to higher off-chain hardware overhead.",
      "ZK rollups cannot process ERC-20 token transfers.",
      "ZK rollups require higher L1 calldata storage than optimistic rollups for every transaction."
    ],
    "correctAnswer": 1,
    "explanation": "While verification on L1 is fast and cheap, the off-chain prover generation requires evaluating massive polynomial arithmetic circuits over large cryptographic fields, necessitating expensive server clusters and hardware accelerators."
  },
  {
    "id": "q9",
    "question": "What is the 'Data Availability Problem' in rollup architectures?",
    "options": [
      "The difficulty of retrieving user profile pictures on IPFS.",
      "The risk that a rollup sequencer updates the state root on L1 but withholds the underlying transaction data, preventing other nodes from reconstructing state or generating fraud/validity proofs.",
      "The inability of hard drives to store more than 1 TB of blockchain history.",
      "The latency involved in querying RPC providers like Infura."
    ],
    "correctAnswer": 1,
    "explanation": "Data Availability means ensuring that all transaction inputs and state diffs are published where anyone can download and verify them. If a sequencer posts a state root without publishing the tx data (data withholding), honest nodes cannot verify whether the root is correct, effectively freezing user funds."
  },
  {
    "id": "q10",
    "question": "What architectural innovation did EIP-4844 (Proto-Danksharding) introduce to dramatically reduce rollup transaction fees?",
    "options": [
      "It increased the Ethereum block gas limit to 300 million gas.",
      "It introduced ephemeral 'Blob-carrying transactions' with an independent EIP-1559 blob gas market, storing data for ~18 days rather than permanently in EVM calldata.",
      "It allowed smart contracts to run on the Bitcoin blockchain.",
      "It replaced Solidity with WebAssembly natively on Ethereum L1."
    ],
    "correctAnswer": 1,
    "explanation": "EIP-4844 introduced 'blobs' (up to 6 blobs of 128 KB each per L1 block). Blobs are not accessible to EVM execution (only their KZG commitment is accessible), and they are purged by consensus nodes after ~18 days. This separated rollup data pricing from L1 execution gas, slashing rollup fees by 90-99%."
  },
  {
    "id": "q11",
    "question": "What is the primary role of a centralized Sequencer in current production rollups (e.g., Arbitrum, Optimism)?",
    "options": [
      "To mine proof-of-work hashes.",
      "To collect transactions from users, order them, provide instant sub-second soft confirmations, and compress transactions into batches for L1 publication.",
      "To hold all user private keys in an escrow vault.",
      "To manually approve KYC for all smart contract deployments."
    ],
    "correctAnswer": 1,
    "explanation": "Sequencers provide immediate user responsiveness with sub-second soft receipts, aggregate transactions into batches, and post them to L1. While fast, centralized sequencers introduce censorship and MEV risks."
  },
  {
    "id": "q12",
    "question": "What is the difference between 'Soft Finality' and 'Hard Finality' on an Ethereum Layer 2?",
    "options": [
      "Soft finality is encrypted; hard finality is unencrypted.",
      "Soft finality is a promise from the sequencer that a tx is ordered (sub-second); hard finality occurs once the batch is posted and finalized on Ethereum L1 (and challenge period expires or ZK proof verified).",
      "Soft finality applies to ERC-20 tokens; hard finality applies to ETH only.",
      "Soft finality is recorded in memory; hard finality is written to paper."
    ],
    "correctAnswer": 1,
    "explanation": "When a sequencer receives your transaction, it gives a soft receipt (soft finality) in ~200ms. However, if the sequencer crashes or is malicious, that receipt could theoretically be reordered until the batch is committed to L1 blocks and reaches consensus finality (hard finality)."
  },
  {
    "id": "q13",
    "question": "If a rollup sequencer goes offline or attempts to censor a user's transaction, how does a user exit or force their transaction through?",
    "options": [
      "They cannot; their funds are lost forever.",
      "By submitting their transaction directly to the L1 Rollup Inbox contract (Force Inclusion / enqueueTransaction), which the rollup state must process within a mandatory timeout.",
      "By contacting the sequencer support team on Discord.",
      "By deploying a new hard fork of the Ethereum network."
    ],
    "correctAnswer": 1,
    "explanation": "Canonical rollups include an L1 'Inbox' or 'Delayed Inbox'. If a sequencer ignores a user transaction, the user invokes `forceInclusion` on L1. If the sequencer does not include it within a defined grace period (e.g. 24 hours), the L1 contract halts sequencer batching or permits anyone to submit the state transition."
  },
  {
    "id": "q14",
    "question": "In a canonical Lock-and-Mint cross-chain bridge, what invariant must always hold to prevent protocol insolvency?",
    "options": [
      "Bridged Token Supply on L2 must always be strictly greater than Locked Reserve on L1.",
      "Bridged Token Supply on L2 must always be less than or equal to the Locked Reserve on L1 Custody Contract (Bridged Supply <= Locked Assets).",
      "The bridge contract must be owned by the Ethereum Foundation.",
      "Gas fees on L2 must match gas fees on L1 exactly."
    ],
    "correctAnswer": 1,
    "explanation": "If bridged tokens on L2 exceed locked assets on L1, the bridge is backed by unbacked debt. Any exploit (such as double-minting or forged proofs) that creates synthetic L2 tokens without locking equal collateral on L1 causes insolvency when users attempt to bridge back."
  },
  {
    "id": "q15",
    "question": "What is the purpose of Data Availability Sampling (DAS)?",
    "options": [
      "To compress images before uploading to IPFS.",
      "To allow light nodes to verify with high statistical certainty that 100% of block data is available by randomly downloading a small number of small chunks, without downloading the entire block.",
      "To test whether RPC nodes respond within 50 milliseconds.",
      "To sample random private keys for auditing."
    ],
    "correctAnswer": 1,
    "explanation": "Using 2D Reed-Solomon erasure coding and KZG commitments, DAS allows consumer devices (light clients) to query random data chunks. If an attacker withholds even 1% of the original data, erasure coding requires them to hide >50% of the coded block, which light clients detect with near-100% probability after just ~30 random samples."
  },
  {
    "id": "q16",
    "question": "On Arbitrum Nitro, what is the key difference between Arbitrum One and Arbitrum Nova?",
    "options": [
      "Arbitrum One uses Proof of Work; Arbitrum Nova uses Proof of Stake.",
      "Arbitrum One is a full Rollup (posts all data to Ethereum calldata/blobs); Arbitrum Nova is an AnyTrust chain (posts data to an off-chain Data Availability Committee, drastically lowering fees for gaming/social).",
      "Arbitrum One only supports Solidity; Arbitrum Nova only supports Rust.",
      "Arbitrum One has a 1-day challenge window; Arbitrum Nova has a 30-day challenge window."
    ],
    "correctAnswer": 1,
    "explanation": "Arbitrum One is a Rollup adhering to strict L1 data availability. Arbitrum Nova implements the AnyTrust protocol, which uses an off-chain Data Availability Committee (DAC) to certify data availability. If the committee fails, it falls back to full rollup mode. This makes Nova ideal for high-volume, low-value use cases like gaming."
  },
  {
    "id": "q17",
    "question": "In Solidity development on Arbitrum, what does accessing 'block.number' return by default?",
    "options": [
      "The current timestamp in milliseconds.",
      "The approximate Layer 1 Ethereum block number (for L2 block number, developers query ArbSys.arbBlockNumber()).",
      "The total number of transactions executed in the contract.",
      "Zero, because block numbers do not exist on Layer 2."
    ],
    "correctAnswer": 1,
    "explanation": "To maintain compatibility with contracts relying on L1 block times for vesting or staking schedules, Arbitrum Nitro maps `block.number` to the underlying L1 block number. To read the fast L2 block count, developers must invoke the native precompile `ArbSys(100).arbBlockNumber()`."
  },
  {
    "id": "q18",
    "question": "What is the primary risk of relying on third-party 'fast liquidity bridges' (e.g., Hop, Across) rather than canonical rollup bridges?",
    "options": [
      "Fast bridges do not support Ethereum.",
      "Fast bridge liquidity pools can become depleted, and users take on liquidity provider / relayer counterparty and contract risks instead of pure L1 consensus security.",
      "Fast bridges always take 7 days to settle transactions.",
      "Fast bridges require running a full Ethereum archive node."
    ],
    "correctAnswer": 1,
    "explanation": "Fast bridges use off-chain liquidity providers (market makers) who front funds on L1 in exchange for a fee, taking on the 7-day rollup withdrawal wait themselves. If a fast bridge contract is hacked or pools run dry, users cannot perform instant cross-chain exits."
  },
  {
    "id": "q19",
    "question": "How does Calldata Compression reduce L1 publication costs for rollup batches?",
    "options": [
      "By deleting transaction nonces and signatures, and using address lookup tables (converting 20-byte addresses to 4-byte indexes).",
      "By encrypting the entire payload with AES-256.",
      "By removing gas fees from transactions.",
      "By executing smart contracts off-chain without state trees."
    ],
    "correctAnswer": 0,
    "explanation": "Standard Ethereum transactions are ~110 bytes (mostly 20-byte addresses, 32-byte values, 65-byte signatures). Rollup batch compressors replace 20-byte addresses with 4-byte state index identifiers, aggregate signatures (in ZK or BLS), and pack integers using variable-length encoding, reducing tx size to ~12-15 bytes."
  },
  {
    "id": "q20",
    "question": "What is the Optimism Superchain concept?",
    "options": [
      "A single supercomputer hosted by Optimism PBC to run all smart contracts.",
      "A horizontally scalable network of independent OP Stack Layer 2 chains sharing open-source code, standardized security, shared bridges, and atomic interoperability.",
      "A hard fork of Bitcoin that adds EVM compatibility.",
      "A database software developed by Oracle for enterprise banking."
    ],
    "correctAnswer": 1,
    "explanation": "The Superchain is Optimism's vision of an interconnected network of L2s (Base, OP Mainnet, Zora, Mode, etc.) built on the modular OP Stack. By standardizing execution, data availability, and cross-chain message passing, it aims to unify fragmented liquidity into a seamless web of chains."
  }
]

INTERVIEW_QUESTIONS = [
  {
    "id": "iq1",
    "question": "Explain the architectural differences between an Optimistic Rollup (e.g., Arbitrum, Optimism) and a ZK Rollup (e.g., zkSync Era, Starknet). Which would you recommend for an institutional trading desk requiring sub-minute finality?",
    "context": "System Architecture & Protocol Design",
    "answer": "Optimistic Rollups use a fraud-proof cryptoeconomic game: transactions are assumed valid, posted with state roots to L1, and finalized after a 7-day dispute window during which honest watchers can submit bisection fraud proofs. ZK Rollups use validity proofs: an off-chain prover generates a cryptographic proof (SNARK or STARK) demonstrating that the batch satisfied state transition rules; L1 verifies the proof mathematically in ~300k gas. For an institutional trading desk requiring sub-minute finality to move capital between L1 custody and L2 collateral, a ZK Rollup (or a third-party fast-liquidity bridge) is mandatory, as canonical optimistic rollup withdrawals take 7 days.",
    "takeaway": "Optimistic rollups trade withdrawal latency for cheap off-chain computation; ZK rollups trade off-chain prover compute for instant cryptographic finality."
  },
  {
    "id": "iq2",
    "question": "How did EIP-4844 change rollup fee structures, and why does an L2 transaction still incur an 'L1 Data Fee'?",
    "context": "EVM Economics & Gas Modeling",
    "answer": "Prior to EIP-4844, rollups posted transaction data as L1 calldata, costing 16 gas per non-zero byte, competing directly with L1 DeFi swaps for block space. EIP-4844 introduced 'Blobs' (128 KB each) with a separate EIP-1559 blob gas market. Rollup transactions now incur two distinct fee components: 1) L2 Execution Gas (CPU, memory, storage on the L2 sequencer), and 2) L1 Data Fee (the proportional cost to write that transaction's compressed bytes into an L1 blob). Because blobs still consume L1 consensus bandwidth and require blob gas, rollups charge users an L1 fee overhead based on current `blob_base_fee` and batch compression ratios.",
    "takeaway": "L2 fees are dual-tier: L2 Execution Fee + (L1 Blob Gas Price × Scaled Compressed Bytes)."
  },
  {
    "id": "iq3",
    "question": "Walk me through the Interactive Bisection Fraud Proof game in Arbitrum Nitro. Why is it superior to Ethereum 1.0 single-round fraud proofs?",
    "context": "Dispute Games & Verification",
    "answer": "In single-round fraud proofs, the entire contested transaction must be executed inside an L1 contract, which risks exceeding the L1 block gas limit. In Arbitrum Nitro's interactive bisection, Alice (proposer) and Bob (challenger) divide a batch of N execution steps into two halves. Challenger identifies which half contains the error. They repeatedly halve the range (N -> N/2 -> N/4 ...) over successive L1 rounds until narrowing the disagreement to a single assembly/WASM instruction. The L1 'One-Step Prover' contract executes that exact opcode in EVM memory, slashes the dishonest party's bond, and awards a bounty to the honest party.",
    "takeaway": "Interactive bisection achieves O(log N) on-chain communication complexity, allowing rollups to support arbitrary transaction block sizes regardless of L1 gas limits."
  },
  {
    "id": "iq4",
    "question": "What is a 'Data Withholding Attack', and why can't a validity proof alone prevent it in a Validium?",
    "context": "Data Availability & Validium Vulnerabilities",
    "answer": "A Data Withholding Attack occurs when an operator produces a valid state transition and a valid ZK proof on L1, but refuses to publish the new state balances or transactions off-chain. While the L1 verifier verifies that the state root transition was mathematically valid, external users do not know their new account balances or Merkle inclusion paths. In a Validium (a ZK system that stores data off-chain with a DAC rather than on L1), if the DAC colludes with the operator to withhold data, users cannot generate withdrawal proofs to exit, freezing all assets indefinitely.",
    "takeaway": "ZK proofs prove validity of execution, NOT data availability. Data must be guaranteed on L1 (or a decentralized DA layer) to preserve user exit rights."
  },
  {
    "id": "iq5",
    "question": "Describe the security invariant of a canonical Lock-and-Mint cross-chain bridge. How do you audit a bridge contract against infinite mint exploits?",
    "context": "Cross-Chain Security & Smart Contract Auditing",
    "answer": "The core invariant is: sum(L2_Bridged_Supply) <= sum(L1_Locked_Collateral) for every asset. To audit against infinite mint exploits: 1) Verify that L2 `mint()` can ONLY be invoked by the designated bridge inbox contract or authenticated cross-chain relayer; 2) Audit replay protection: ensure every cross-chain message includes unique domain separators, `sourceChainId`, `targetChainId`, `nonce`, and hash of payload; 3) Verify the bridge verifies complete cryptographic inclusion proofs (Merkle or ZK) and checks for unspent nonces; 4) Implement rate limits, circuit breakers, and pause mechanisms if outgoing withdrawal volume exceeds safe thresholds.",
    "takeaway": "Never permit arbitrary calldata execution in bridge relayers without strict whitelist verification and stateful replay tracking."
  },
  {
    "id": "iq6",
    "question": "What is MEV (Maximal Extractable Value) in the context of a centralized Layer 2 Sequencer? How can sequencers exploit or mitigate it?",
    "context": "Sequencer Architecture & MEV",
    "answer": "Because a centralized sequencer has exclusive authority over transaction ordering in the L2 mempool, it can frontrun, backrun, or sandwich user transactions without competing in an open gas auction. It can also extract 'toxic MEV' (reordering DEX swaps for risk-free arbitrage at user expense). Mitigation strategies include: 1) First-Come, First-Served (FCFS) ordering enforced by trusted hardware (TEEs); 2) Decentralized shared sequencers (e.g., Espresso, Radius) using Byzantine Fault Tolerant consensus; 3) Time-boosted ordering auctions; 4) Encrypted mempools (threshold cryptography where transactions are ordered before their contents are revealed).",
    "takeaway": "Centralized sequencers concentrate MEV power; decentralizing sequencing and encrypting mempools are the frontiers of L2 fairness."
  },
  {
    "id": "iq7",
    "question": "How does the 'Forced Inclusion' mechanism work in rollups, and why is it essential for censorship resistance?",
    "context": "Censorship Resistance & Exit Mechanics",
    "answer": "If a centralized sequencer censors a user's address or transaction, the user invokes the canonical Rollup contract directly on Layer 1 via `enqueueTransaction` or `forceInclusion()`. This places the transaction into an on-chain L1 queue. The sequencer is contractually mandated to process items from the L1 queue within a time window (e.g., 24-48 hours). If the sequencer fails to include the queued transaction, the L1 rollup contract freezes sequencer batching, allowing any community node to propose batches directly on L1, thereby bypassing the sequencer entirely.",
    "takeaway": "Forced inclusion guarantees that L2 inherits Ethereum's ultimate censorship resistance, preventing sequencers from acting as custodial gatekeepers."
  },
  {
    "id": "iq8",
    "question": "Why is 'block.number' in Solidity different on Arbitrum compared to Ethereum Mainnet, and how should a smart contract developer handle time-based logic?",
    "context": "L2 EVM Differences & Developer Tooling",
    "answer": "On Arbitrum Nitro, `block.number` returns the underlying Ethereum L1 block number, not the L2 block count, to ensure compatibility with contracts expecting ~12-second block intervals. However, Arbitrum produces L2 blocks every 250 milliseconds. A contract that assumes `block.number` increments with every L2 transaction will see identical block numbers across hundreds of L2 blocks. For precise L2 timing, developers should either: 1) Use `block.timestamp` (which is synchronized with real time), or 2) Import `ArbSys.sol` and call `ArbSys(100).arbBlockNumber()`.",
    "takeaway": "Never rely on `block.number` for sub-minute L2 transaction ordering; use `block.timestamp` or L2 precompiles."
  },
  {
    "id": "iq9",
    "question": "Compare Type-1, Type-2, Type-3, and Type-4 zkEVMs according to Vitalik Buterin's classification taxonomy.",
    "context": "zkEVM Taxonomy & Cryptographic Engineering",
    "answer": "Type-1: Fully Ethereum-equivalent (exact consensus, state trees, gas rules; e.g. Taiko). Slow prover times due to Keccak and Patricia Merkle trees. Type-2: Fully EVM-equivalent (same EVM opcodes, but modifies state tree structure and gas costs to be ZK-friendly; e.g. Scroll, Polygon zkEVM). Type-3: Almost EVM-equivalent (removes complex opcodes like `SELFDESTRUCT` and modifies precompiles for faster prover generation). Type-4: High-level language equivalent (compiles Solidity/Vyper into a distinct ZK-optimized bytecode like zkSync Era or Starknet Cairo). Offers fastest prover generation but minor syntax incompatibilities with native EVM bytecode.",
    "takeaway": "Type-1 achieves 100% Ethereum equivalence at high prover cost; Type-4 re-architects the VM for blistering ZK performance with minor opcode differences."
  },
  {
    "id": "iq10",
    "question": "Explain how Data Availability Sampling (DAS) combined with 2D Reed-Solomon Erasure Coding enables light clients to verify block availability.",
    "context": "Advanced Consensus & Peer-to-Peer Networks",
    "answer": "A block of data (represented as an N x N matrix of chunks) is extended using 2D Reed-Solomon erasure coding into a 2N x 2N matrix. In this scheme, any N rows or N columns can reconstruct the entire matrix. Therefore, to hide even 1 single byte of data, a malicious block producer must withhold more than (N+1) rows or columns (over 50% of the entire 2D matrix). A light client performs K independent random queries across the matrix. The probability that an attacker hides 50% of the data without the light client hitting an unavailable chunk drops exponentially: P(undetected) = (0.5)^K. For K=30, P < 0.000000001.",
    "takeaway": "DAS allows consumer cell phones to mathematically verify data availability without downloading more than a few kilobytes."
  },
  {
    "id": "iq11",
    "question": "What is the difference between a State Channel and a Payment Channel, and why did Ethereum state channels fall out of favor compared to Rollups?",
    "context": "Historical Scaling & Channel Protocols",
    "answer": "A Payment Channel (e.g. Bitcoin Lightning) only updates token balances between two parties. A State Channel supports arbitrary smart contract state transitions (e.g. chess games, auction bids). State channels declined in popularity because: 1) High capital lockup: funds are frozen in 1-to-1 channels, resulting in terrible liquidity fragmentation; 2) Inability to support open multi-party DeFi (you cannot easily have an AMM like Uniswap where millions of anonymous users trade against a single liquidity pool); 3) Counterparty liveness requirement: if a user goes offline, a malicious counterparty can submit an old state unless watchtowers are paid.",
    "takeaway": "Channels excel at high-frequency 2-party interactions (gaming, micropayments) but cannot scale global shared-state DeFi."
  },
  {
    "id": "iq12",
    "question": "How does Calldata Compression convert a standard 110-byte Ethereum transaction into a 12-byte rollup payload?",
    "context": "Rollup Compression & Serialization",
    "answer": "Standard Ethereum transactions contain: 20-byte `to` address, 20-byte `from` address, 32-byte `value`, 32-byte `nonce`, 65-byte ECDSA signature, plus gas fields. Rollups compress this by: 1) Address Indexing: replacing 20-byte addresses with 4-byte indexes referencing an on-chain account registry; 2) Signature Aggregation: stripping individual 65-byte signatures and verifying the entire batch via a single BLS aggregate signature or ZK proof; 3) Variable-length encoding: encoding numbers using LEB128 so small balances consume 1-2 bytes instead of 32 bytes; 4) Eliminating nonces from the payload since ordering is strictly sequential.",
    "takeaway": "Byte-level compression is the primary determinant of rollup margins when posting to L1."
  },
  {
    "id": "iq13",
    "question": "What are 'Retryable Tickets' in Arbitrum, and how do they ensure reliable cross-chain L1-to-L2 message delivery?",
    "context": "Cross-Chain Message Passing",
    "answer": "A Retryable Ticket is Arbitrum's mechanism for executing L1-to-L2 transactions. When an L1 contract calls the Inbox, a ticket is created with an L2 gas limit, max submission fee, and call value. If the L2 execution runs out of gas or the sequencer is congested, the ticket does not revert permanently; instead, it is stored in the L2 RetryBuffer for up to 7 days. Anyone can re-execute the ticket on L2 by paying the required execution gas before expiration, guaranteeing that funds sent across the bridge are never lost due to transient L2 gas spikes.",
    "takeaway": "Retryable tickets decouple L1 bridge deposit finality from L2 execution execution, preventing funds loss during L2 congestion."
  },
  {
    "id": "iq14",
    "question": "What is the security risk of using an externally owned account (EOA) multi-sig as the validator set for a cross-chain bridge (e.g. Ronin Bridge hack)?",
    "context": "Bridge Hacks & Key Management",
    "answer": "The Ronin Bridge lost $624M because 5 out of 9 validator private keys were compromised through social engineering and internal network breaches. Relying on an off-chain multi-sig of EOAs creates a single point of failure that bypasses L1 consensus security entirely. If attackers obtain threshold signatures (e.g. 5/9), they can craft an authenticated withdrawal message and drain the entire L1 bridge custody contract. A canonical rollup bridge avoids this because withdrawals are validated directly by L1 smart contracts evaluating cryptographic fraud or validity proofs.",
    "takeaway": "An off-chain multi-sig bridge possesses the security of its weakest key-custody system, not Ethereum's $400B economic security."
  },
  {
    "id": "iq15",
    "question": "Explain Account Abstraction (ERC-4337) and how its native implementation on L2s (like zkSync Era and Starknet) differs from Ethereum L1.",
    "context": "Account Abstraction & User Experience",
    "answer": "On Ethereum L1, ERC-4337 is an overlay standard requiring an alternative mempool, UserOperations, and Bundlers because Ethereum's protocol hardcodes EOAs (`secp256k1`) as the only transaction origin (`tx.origin`). On zkSync Era and Starknet, Account Abstraction is implemented natively at the core protocol level: every account is a smart contract. The VM natively calls `validateTransaction()` and `executeTransaction()`. This enables session keys, arbitrary signature schemes (WebAuthn, FaceID, Passkeys), gas sponsorship (paymasters), and multi-call batching out of the box without external bundler infrastructure.",
    "takeaway": "Native L2 account abstraction removes the architectural friction of ERC-4337, making smart contract wallets first-class citizens."
  },
  {
    "id": "iq16",
    "question": "What are 'Based Rollups' (L1-sequenced rollups), and what problem do they solve?",
    "context": "Next-Gen Rollup Architectures",
    "answer": "A Based Rollup (proposed by Justin Drake) outsources transaction sequencing directly to Ethereum Layer 1 block builders and proposers (MEV-Boost / PBS). Instead of maintaining a separate L2 sequencer cluster, L1 proposers include L2 batches directly into L1 blocks. Benefits: 1) Inherits 100% of Ethereum's liveness and censorship resistance; 2) Total decentralization with zero centralized sequencer risk; 3) Native atomic composability between multiple based rollups and L1. The primary trade-off is losing sub-second soft confirmations, as tx finality is bound to L1 block intervals (~12 seconds) unless pre-confirmations are used.",
    "takeaway": "Based rollups trade sub-second sequencer speed for absolute Ethereum-grade decentralization and liveness."
  },
  {
    "id": "iq17",
    "question": "How does an Outbox Merkle Tree proof enable secure withdrawals on an Optimistic Rollup once the 7-day challenge period passes?",
    "context": "Withdrawal Mechanics & Merkle Proofs",
    "answer": "When a user initiates a withdrawal on L2, the L2 bridge emits a message and appends the withdrawal leaf to an L2 Merkle tree. Once the sequencer posts the batch and the 7-day challenge window elapses without dispute, the state root containing this tree becomes finalized on the L1 Rollup contract. The user (or relayer) calls the L1 `Outbox.executeTransaction()` method, passing the Merkle path proving their withdrawal was included in that finalized state root. The L1 Outbox verifies the cryptographic path against the state root, records the withdrawal as spent to prevent double-spending, and releases the ETH.",
    "takeaway": "L1 Outbox contracts use Merkle inclusion proofs to atomically verify L2 state without executing L2 transaction histories."
  },
  {
    "id": "iq18",
    "question": "What is KZG Polynomial Commitment, and how is it utilized in EIP-4844 blobs?",
    "context": "Cryptographic Commitments & Blob Verification",
    "answer": "Kate-Zaverucha-Goldberg (KZG) is a cryptographic polynomial commitment scheme. The data in a 128 KB blob is represented as evaluations of a polynomial of degree up to 4095. A KZG commitment is a single elliptic curve point (48 bytes) that cryptographically binds to the entire blob. In EIP-4844, L1 smart contracts do not load the 128 KB blob into EVM memory; instead, the EVM opcode `BLOBHASH` checks the 32-byte versioned hash of the KZG commitment. Anyone can generate a 48-byte KZG opening proof to prove to an L1 contract that a specific byte was inside the blob, achieving O(1) verification without state bloat.",
    "takeaway": "KZG commitments compress 128 KB blobs into 48-byte cryptographic anchors that can be verified in constant time."
  },
  {
    "id": "iq19",
    "question": "Explain the concept of 'Shared Sequencer Networks' (e.g., Espresso, Astria) and what advantages they offer to the rollup ecosystem.",
    "context": "Modular Infrastructure & Interoperability",
    "answer": "A Shared Sequencer Network is a decentralized middleware layer that sequences transactions for multiple distinct rollups simultaneously. Instead of Rollup A and Rollup B each running their own centralized sequencer, both submit transactions to the shared sequencer. Key advantages: 1) Mitigates single sequencer censorship and downtime; 2) Eliminates sovereign MEV exploitation; 3) Enables cross-rollup atomic composability (transactions across both rollups can be ordered and executed conditionally together in the same batch, preventing bridge frontrunning and failed cross-chain hops).",
    "takeaway": "Shared sequencers convert fragmented, isolated rollups into an interoperable, atomically connected cluster."
  },
  {
    "id": "iq20",
    "question": "What is the difference between an Optimistic Rollup's 'Validator', 'Watcher', and 'Proposer'?",
    "context": "Rollup Node Roles",
    "answer": "A Proposer is a bonded node that periodically publishes state root commitments to the L1 Rollup contract. A Validator runs a full L2 node, re-executes all transactions from L1 calldata/blobs, and tracks the true state root. If a Proposer posts an invalid state root, a Validator steps up as a Challenger/Watcher, posting a bond and initiating the interactive bisection dispute game. A Watcher is a read-only passive node (often run by exchanges, dapps, or users) that monitors for invalid proposals and alerts validators or pauses client withdrawals.",
    "takeaway": "Proposers stake bonds to commit roots; Challengers protect the system by executing bisections against dishonest proposers."
  },
  {
    "id": "iq21",
    "question": "What are 'Pre-Confirmations' in L2 architectures, and how do they balance instant user experience with decentralized sequencing?",
    "context": "Sequencer Latency & Cryptoeconomic Promises",
    "answer": "Pre-confirmations are cryptoeconomically backed promises issued by sequencers or L1 block proposers guaranteeing that a user's transaction will be included in an upcoming block at a specific order. To make this promise credible without a centralized operator, the pre-confirmer stakes capital in an L1 slashing contract. If the pre-confirmer fails to include the transaction in the promised block or reorders it, the user submits cryptographic evidence to L1, and the pre-confirmer's bond is slashed. This provides 100ms UX while preserving decentralized trustlessness.",
    "takeaway": "Pre-confirmations replace blind centralized sequencer trust with cryptoeconomically bonded inclusion commitments."
  },
  {
    "id": "iq22",
    "question": "How do zk-STARKs differ from zk-SNARKs in the context of Layer 2 validity proofs?",
    "context": "Zero-Knowledge Cryptography",
    "answer": "zk-SNARKs (Succinct Non-Interactive Arguments of Knowledge) use elliptic curve pairings, require a trusted setup ceremony (e.g. Powers of Tau), have small proof sizes (~200-500 bytes), and require ~250k gas to verify on L1. zk-STARKs (Scalable Transparent Arguments of Knowledge) rely exclusively on symmetric cryptography (hashes like SHA-256 / Rescue) and polynomial FRI protocols, require NO trusted setup (transparent), are quantum-resistant, and have fast prover generation. However, STARK proofs are significantly larger (~50-100 KB), requiring more L1 calldata/gas to verify unless wrapped in a SNARK outer envelope.",
    "takeaway": "SNARKs offer tiny proofs and cheap L1 verification; STARKs offer transparent quantum-proof security with larger proof payloads."
  },
  {
    "id": "iq23",
    "question": "What is the 'AnyTrust' protocol in Arbitrum Nova, and under what conditions does it revert to full Rollup mode?",
    "context": "Data Availability Committees & Hybrid Scaling",
    "answer": "AnyTrust is an Arbitrum variant designed for ultra-low fees. Instead of posting all transaction data to L1 blobs, the sequencer sends data to a Data Availability Committee (DAC) of K members. If at least 2 members are honest, the data is guaranteed available. The DAC signs a Data Availability Certificate (DACert), and only this certificate is posted to L1. If the DAC refuses to sign or nodes go offline (fewer than 2 honest signatures), the sequencer automatically reverts to standard Arbitrum One Rollup mode, posting full data to L1 at standard rollup gas prices.",
    "takeaway": "AnyTrust introduces a 1-of-N honest DAC assumption to reduce fees by 95%, with automatic failover to L1 rollup security."
  },
  {
    "id": "iq24",
    "question": "How do you defend a cross-chain smart contract application against Replay Attacks between an L1 network and an L2 rollup?",
    "context": "Cross-Chain Security & Architecture",
    "answer": "A Replay Attack occurs when a signed transaction or bridge message intended for L1 is replayed on L2 (or another L2 fork) to execute an unauthorized transfer. Defenses include: 1) Enforce EIP-155: all transaction signatures must incorporate the unique `chainId` (e.g. 1 for Ethereum, 42161 for Arbitrum One, 10 for Optimism); 2) For smart contract cross-chain messages, construct a typed message hash incorporating `abi.encode(block.chainid, address(this), nonce, sender, recipient, amount, payload)`; 3) Record executed message nonces in a persistent mapping `mapping(bytes32 => bool) public executedMessages;` and require `!executedMessages[msgHash]` before execution.",
    "takeaway": "Every cross-chain message must be strictly bound to chain ID, contract address, and a monotonically incrementing nonce."
  },
  {
    "id": "iq25",
    "question": "Explain the concept of 'Horizontal Scaling' in modular blockchains. Why are Rollups considered the true execution engine of Ethereum's endgame?",
    "context": "Modular Blockchain Architecture & Ethereum Roadmap",
    "answer": "Monolithic blockchains attempt vertical scaling: increasing node CPU, RAM, and bandwidth requirements, which inevitably centralizes node validation into cloud server farms. Ethereum's modular roadmap splits the blockchain stack into 4 independent layers: Execution (Rollups), Settlement (Ethereum L1), Consensus (Ethereum Beacon Chain), and Data Availability (EIP-4844 / PeerDAS). Rollups scale horizontally because thousands of independent rollups can execute in parallel without congesting each other, while Ethereum L1 functions as a universal, highly secure, decentralized settlement and DA court.",
    "takeaway": "Rollups decouple execution from consensus, allowing global throughput to scale linearly with rollup instances while anchoring security in Ethereum."
  }
]

NUMERICAL_PROBLEMS = [
  {
    "id": "np1",
    "title": "Problem 1: Rollup Batch Cost per Transaction Derivation",
    "question": "An Optimistic Rollup sequencer aggregates 1,200 transactions into a compressed batch. The batch consumes 18,000 bytes of data posted to Ethereum L1. If the L1 calldata cost is 16 gas per non-zero byte, the L1 base fee is 25 Gwei, and the fixed L1 batch submission execution overhead is 50,000 gas, calculate the average L1 publication cost per transaction in ETH.",
    "variables": [
      "Transactions per batch (N) = 1,200",
      "Batch data size = 18,000 bytes",
      "Gas per byte = 16 gas",
      "Fixed submission overhead = 50,000 gas",
      "L1 Base Fee = 25 Gwei = 25 * 10^-9 ETH"
    ],
    "steps": [
      "Step 1: Calculate total calldata gas: 18,000 bytes * 16 gas/byte = 288,000 gas.",
      "Step 2: Add fixed L1 transaction submission overhead: 288,000 gas + 50,000 gas = 338,000 total gas for the batch.",
      "Step 3: Calculate total batch L1 cost in Gwei: 338,000 gas * 25 Gwei/gas = 8,450,000 Gwei = 0.00845 ETH.",
      "Step 4: Calculate L1 cost per transaction: 0.00845 ETH / 1,200 transactions = 0.0000070416 ETH (~0.00000704 ETH/tx)."
    ],
    "finalAnswer": "0.00000704 ETH (~$0.021 at $3,000/ETH)"
  },
  {
    "id": "np2",
    "title": "Problem 2: Rollup Throughput Capacity Calculation",
    "question": "Ethereum L1 has a 12-second block time and an EIP-4844 blob target of 3 blobs per block (each blob is 128 KB = 131,072 bytes). An advanced ZK Rollup compresses user transactions to an average of 15 bytes per transaction (storing state diffs and index pointers in blobs). Assuming the rollup consumes all 3 target blobs in every L1 block, what is the maximum sustainable throughput (in TPS) that this rollup can achieve?",
    "variables": [
      "Block time = 12 seconds",
      "Target blobs per block = 3 blobs",
      "Blob capacity = 131,072 bytes per blob",
      "Average compressed tx size = 15 bytes"
    ],
    "steps": [
      "Step 1: Calculate total blob data capacity per L1 block: 3 blobs * 131,072 bytes = 393,216 bytes per block.",
      "Step 2: Calculate total transactions accommodated per L1 block: 393,216 bytes / 15 bytes/tx = 26,214.4 transactions per block.",
      "Step 3: Divide by block time (12 seconds) to find transactions per second (TPS): 26,214.4 tx / 12 s = 2,184.53 TPS."
    ],
    "finalAnswer": "2,184.53 TPS (compared to ~15 TPS on base Ethereum L1 — a 145x throughput expansion)"
  },
  {
    "id": "np3",
    "title": "Problem 3: State Channel Off-Chain Nonce Netting Settlement",
    "question": "Alice and Bob open a bidirectional payment state channel on Ethereum L1 by depositing 10 ETH each (20 ETH total locked in multisig). Over 1 week, they perform 4 off-chain signed transactions: 1) Alice pays Bob 3 ETH; 2) Bob pays Alice 1 ETH; 3) Alice pays Bob 4 ETH; 4) Bob pays Alice 2 ETH. In the closing state submitted to L1, what are the final payout balances for Alice and Bob, and what percentage of on-chain gas was saved compared to executing all 4 transactions directly on L1?",
    "variables": [
      "Initial Escrow: Alice = 10 ETH, Bob = 10 ETH (Total = 20 ETH)",
      "Tx 1 (nonce 1): Alice -> Bob 3 ETH (Alice: 7, Bob: 13)",
      "Tx 2 (nonce 2): Bob -> Alice 1 ETH (Alice: 8, Bob: 12)",
      "Tx 3 (nonce 3): Alice -> Bob 4 ETH (Alice: 4, Bob: 16)",
      "Tx 4 (nonce 4): Bob -> Alice 2 ETH (Alice: 6, Bob: 14)"
    ],
    "steps": [
      "Step 1: Net off-chain transfers: Total Alice -> Bob = 3 + 4 = 7 ETH. Total Bob -> Alice = 1 + 2 = 3 ETH. Net transfer: Alice pays Bob 4 ETH.",
      "Step 2: Final balances at Nonce 4: Alice = 10 - 4 = 6 ETH; Bob = 10 + 4 = 14 ETH. (6 + 14 = 20 ETH total conserved).",
      "Step 3: On-chain gas comparison: On L1, 4 independent transfers would consume 4 * 21,000 = 84,000 gas. State channel required 1 Open channel tx (~65,000 gas) and 1 Close settlement tx (~45,000 gas) = 110,000 gas. For N = 4 transactions, channel gas is higher, but for N = 100 transactions (2,100,000 gas on L1 vs 110,000 gas on channel), gas savings exceed 94.7%."
    ],
    "finalAnswer": "Alice: 6 ETH, Bob: 14 ETH. (Gas savings scale asymptotically to >99% for high-frequency transfers)"
  },
  {
    "id": "np4",
    "title": "Problem 4: EIP-4844 Blob vs Calldata Cost Savings Analysis",
    "question": "A rollup posts 500,000 bytes of data per hour to Ethereum L1. Under pre-4844 calldata pricing, calldata costs 16 gas/byte and L1 base fee is 30 Gwei. Under post-4844 blob pricing, blob gas base fee is 1 Gwei, and blob data costs 1 blob gas per byte. Calculate the hourly cost in USD under both methods assuming ETH = $3,200, and compute the percentage cost reduction.",
    "variables": [
      "Hourly data volume = 500,000 bytes",
      "Calldata: 16 gas/byte, Base fee = 30 Gwei = 0.000000030 ETH",
      "Blob: 1 blob gas/byte, Blob base fee = 1 Gwei = 0.000000001 ETH",
      "ETH Price = $3,200"
    ],
    "steps": [
      "Step 1: Calldata Cost: 500,000 bytes * 16 gas/byte = 8,000,000 gas. Cost in Gwei: 8,000,000 * 30 Gwei = 240,000,000 Gwei = 0.24 ETH. In USD: 0.24 ETH * $3,200 = $768.00/hour.",
      "Step 2: Blob Cost: 500,000 bytes * 1 blob gas/byte = 500,000 blob gas. Cost in Gwei: 500,000 * 1 Gwei = 500,000 Gwei = 0.0005 ETH. In USD: 0.0005 ETH * $3,200 = $1.60/hour.",
      "Step 3: Cost Reduction: ($768.00 - $1.60) / $768.00 = 766.40 / 768.00 = 99.79% cost reduction."
    ],
    "finalAnswer": "Calldata Cost: $768.00/hr | Blob Cost: $1.60/hr | Savings: 99.79% reduction"
  },
  {
    "id": "np5",
    "title": "Problem 5: Cross-Chain Bridge Invariant & Collateral Solvency Check",
    "question": "An L1 bridge custody contract holds 8,500 ETH in collateral. On L2, the total supply of bridged WETH is currently 8,420 WETH. A malicious actor exploits an unverified signature in a relayer and submits a fake withdrawal transaction to L1 demanding 150 ETH. If the bridge implements an automated real-time invariant assertion `require(totalBridgedSupply <= totalLockedCollateral)`, describe whether the transaction succeeds or reverts, and calculate the maximum ETH that can be legitimately withdrawn.",
    "variables": [
      "L1 Locked Collateral = 8,500 ETH",
      "L2 Bridged Supply = 8,420 WETH",
      "Excess Collateral / Unlocked Margin = 8,500 - 8,420 = 80 ETH",
      "Requested Malicious Withdrawal = 150 ETH"
    ],
    "steps": [
      "Step 1: Evaluate post-withdrawal state if 150 ETH is unlocked: L1 Locked Collateral becomes 8,500 - 150 = 8,350 ETH.",
      "Step 2: Check bridge invariant: L2 Bridged Supply (8,420 WETH) > Post-Withdrawal Collateral (8,350 ETH).",
      "Step 3: The invariant condition `totalBridgedSupply <= totalLockedCollateral` fails (8,420 <= 8,350 is FALSE).",
      "Step 4: The contract reverts execution, fires an `InvariantBreachAlert` event, and triggers emergency circuit breaker pause. The maximum legitimate withdrawal without burning matching L2 tokens is exactly 80 ETH."
    ],
    "finalAnswer": "Reverts due to Invariant Breach (8,420 > 8,350). Max legitimate excess release = 80 ETH."
  }
]
