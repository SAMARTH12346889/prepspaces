// projectx/src/Componets/BlockchainLayer2Scaling.jsx
import React, { useState, useMemo, useCallback } from "react";
import ModuleNav from "./ModuleNav";
import { Link } from "react-router-dom";
import {
  Activity,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  Cpu
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = [
  {
    "id": "c1",
    "label": "Understand the Blockchain Scalability Trilemma (Security, Decentralization, Scalability)",
    "category": "theory"
  },
  {
    "id": "c2",
    "label": "Derive the mathematical limits of Ethereum L1 throughput (15 TPS bottleneck)",
    "category": "theory"
  },
  {
    "id": "c3",
    "label": "Analyze L1 block space, gas limits (30M gas/block), and state bloat mechanics",
    "category": "theory"
  },
  {
    "id": "c4",
    "label": "Differentiate L1 base layer vs L2 execution scaling responsibilities across 9 dimensions",
    "category": "theory"
  },
  {
    "id": "c5",
    "label": "Contrast On-Chain scaling (Sharding, Danksharding) vs Off-Chain scaling (Rollups, Channels)",
    "category": "theory"
  },
  {
    "id": "c6",
    "label": "Examine State Channels: funding, multi-sig escrow, off-chain nonces, and dispute games",
    "category": "theory"
  },
  {
    "id": "c7",
    "label": "Evaluate Sidechain architecture (Polygon PoS) and independent validator security risks",
    "category": "theory"
  },
  {
    "id": "c8",
    "label": "Master Rollup Core Architecture: Sequencer, Calldata/Blobs, State Trires, and L1 Contracts",
    "category": "theory"
  },
  {
    "id": "c9",
    "label": "Formalize the Rollup State Transition Function: S_{n+1} = F(S_n, T_n)",
    "category": "theory"
  },
  {
    "id": "c10",
    "label": "Analyze Calldata compression techniques: RLP stripping, address indexing, and signature aggregation",
    "category": "theory"
  },
  {
    "id": "c11",
    "label": "Dissect Optimistic Rollup execution models and the 7-day challenge withdrawal window",
    "category": "theory"
  },
  {
    "id": "c12",
    "label": "Trace Interactive Dispute Games & binary search bisection down to single-step EVM execution",
    "category": "theory"
  },
  {
    "id": "c13",
    "label": "Dissect Zero-Knowledge Rollups: SNARK/STARK validity proofs and instant mathematical finality",
    "category": "theory"
  },
  {
    "id": "c14",
    "label": "Compare Fraud Proofs vs Validity Proofs across cost, latency, gas, and verifier complexity",
    "category": "theory"
  },
  {
    "id": "c15",
    "label": "Understand Data Availability (DA), data withholding attacks, and DA vs Storage distinctions",
    "category": "theory"
  },
  {
    "id": "c16",
    "label": "Master EIP-4844 Proto-Danksharding: Blobs, KZG commitments, and blob gas economics",
    "category": "theory"
  },
  {
    "id": "c17",
    "label": "Study Data Availability Sampling (DAS) and 2D Reed-Solomon erasure coding",
    "category": "theory"
  },
  {
    "id": "c18",
    "label": "Examine Sequencer roles, centralization vectors, MEV extraction, and censorship risks",
    "category": "theory"
  },
  {
    "id": "c19",
    "label": "Analyze L1 Forced Inclusion mechanisms (enqueueTransaction) to combat censorship",
    "category": "theory"
  },
  {
    "id": "c20",
    "label": "Map the 9-step Rollup Transaction Lifecycle from wallet signature to L1 settlement",
    "category": "theory"
  },
  {
    "id": "c21",
    "label": "Compare Ethereum L2 ecosystems: Arbitrum Nitro/Nova, Optimism OP Stack, Polygon CDK, zkSync",
    "category": "theory"
  },
  {
    "id": "c22",
    "label": "Analyze Cross-Chain Messaging, asynchronous bridges, and retryable tickets",
    "category": "theory"
  },
  {
    "id": "c23",
    "label": "Enforce Bridge Security Invariants (Bridged Supply <= Locked Assets) & audit 9 bridge vectors",
    "category": "theory"
  },
  {
    "id": "c24",
    "label": "Understand L2 EVM differences: block.number, block.timestamp, and gas metering models",
    "category": "lab"
  },
  {
    "id": "c25",
    "label": "Configure Foundry and deploy the L2Message.sol smart contract to Arbitrum Sepolia",
    "category": "lab"
  },
  {
    "id": "c26",
    "label": "Inspect Arbitrum Sepolia transactions on Arbiscan and verify L1 calldata vs L2 execution fees",
    "category": "lab"
  },
  {
    "id": "c27",
    "label": "Design and simulate the Mini Rollup Simulation Capstone across 6 engineering phases",
    "category": "lab"
  },
  {
    "id": "c28",
    "label": "Complete all 20 assessment questions and 5 numerical derivation problems with 100% accuracy",
    "category": "assessment"
  }
];
const QUIZ_QUESTIONS = [
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
];
const INTERVIEW_QUESTIONS = [
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
    "takeaway": "L2 fees are dual-tier: L2 Execution Fee + (L1 Blob Gas Price \u00d7 Scaled Compressed Bytes)."
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
];
const NUMERICAL_PROBLEMS = [
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
    "finalAnswer": "2,184.53 TPS (compared to ~15 TPS on base Ethereum L1 \u2014 a 145x throughput expansion)"
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
];

export default function BlockchainLayer2Scaling() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Rollup Fee & Economics
  const [l1BaseFee, setL1BaseFee] = useState(30);
  const [batchTxCount, setBatchTxCount] = useState(1000);
  const [txCompressedBytes, setTxCompressedBytes] = useState(25);
  const [postingMode, setPostingMode] = useState("blobs"); // "blobs" | "calldata"
  const ethPrice = 3200;

  const totalRawBytes = batchTxCount * txCompressedBytes;
  const totalBatchGas = postingMode === "blobs"
    ? totalRawBytes * 1 + 50000
    : totalRawBytes * 16 + 50000;

  const totalBatchCostEth = postingMode === "blobs"
    ? (totalRawBytes * 1 * 1e-9) + (50000 * l1BaseFee * 1e-9)
    : totalBatchGas * l1BaseFee * 1e-9;

  const costPerTxEth = totalBatchCostEth / batchTxCount;
  const costPerTxUsd = costPerTxEth * ethPrice;
  const theoreticalTps = Math.min(3500, Math.floor(((3 * 131072) / txCompressedBytes) / 12));
  const calldataCostEth = (totalRawBytes * 16 + 50000) * l1BaseFee * 1e-9;
  const blobSavingsPercent = Math.max(0, ((calldataCostEth - totalBatchCostEth) / calldataCostEth) * 100);

  // Simulator 2 State: Interactive Bisection Dispute Game
  const [bisectionRound, setBisectionRound] = useState(0);
  const [bisectionRange, setBisectionRange] = useState([0, 64]);
  const [disputeFinished, setDisputeFinished] = useState(false);

  const stepBisection = useCallback(() => {
    if (disputeFinished) return;
    const [low, high] = bisectionRange;
    if (high - low <= 1) return;

    const mid = Math.floor((low + high) / 2);
    // Fault is at Step 42
    if (mid >= 42) {
      setBisectionRange([low, mid]);
    } else {
      setBisectionRange([mid, high]);
    }
    setBisectionRound((prev) => prev + 1);
  }, [bisectionRange, disputeFinished]);

  const executeOneStepProof = useCallback(() => {
    setDisputeFinished(true);
  }, []);

  const resetDisputeGame = useCallback(() => {
    setBisectionRound(0);
    setBisectionRange([0, 64]);
    setDisputeFinished(false);
  }, []);

  // Simulator 4 State: Cross-Chain Bridge Invariant Engine
  const [bridgeL1Vault, setBridgeL1Vault] = useState(100);
  const [bridgeL2Minted, setBridgeL2Minted] = useState(100);
  const [bridgeExploitTriggered, setBridgeExploitTriggered] = useState(false);

  const handleBridgeDeposit = useCallback((amt) => {
    setBridgeL1Vault((prev) => prev + amt);
    setBridgeL2Minted((prev) => prev + amt);
  }, []);

  const handleBridgeWithdraw = useCallback((amt) => {
    if (bridgeL2Minted < amt) return;
    setBridgeL1Vault((prev) => prev - amt);
    setBridgeL2Minted((prev) => prev - amt);
  }, [bridgeL2Minted]);

  const handleBridgeAttack = useCallback(() => {
    // Attacker tries to unbacked mint 50 WETH without locking on L1
    // Invariant check L2_Minted + 50 <= L1_Vault fails (150 <= 100)
    setBridgeExploitTriggered(true);
  }, []);

  const resetBridge = useCallback(() => {
    setBridgeL1Vault(100);
    setBridgeL2Minted(100);
    setBridgeExploitTriggered(false);
  }, []);

  // Numerical Problems Accordion
  const [openProblemIndex, setOpenProblemIndex] = useState(0);

  // Senior Interview Questions State
  const [interviewFilter, setInterviewFilter] = useState("all");
  const [expandedInterviewId, setExpandedInterviewId] = useState(null);

  const filteredInterviews = useMemo(() => {
    if (interviewFilter === "all") return INTERVIEW_QUESTIONS;
    return INTERVIEW_QUESTIONS.filter((q) => q.context === interviewFilter);
  }, [interviewFilter]);

  // Quiz State
  const [userQuizAnswers, setUserQuizAnswers] = useState({});

  const handleQuizOptionSelect = useCallback((qIndex, optIndex) => {
    setUserQuizAnswers((prev) => {
      if (prev[qIndex] !== undefined) return prev;
      return { ...prev, [qIndex]: optIndex };
    });
  }, []);

  const resetQuiz = useCallback(() => {
    setUserQuizAnswers({});
  }, []);

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (userQuizAnswers[idx] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  }, [userQuizAnswers]);

  // Checklist State (Persisted in localStorage)
  const [completedChecklist, setCompletedChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m19_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = useCallback((id) => {
    setCompletedChecklist((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m19_progress", JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setCompletedChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m19_progress");
    } catch {
      // ignore storage errors
    }
  }, []);

  const completedChecklistCount = useMemo(() => {
    return Object.values(completedChecklist).filter(Boolean).length;
  }, [completedChecklist]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-amber-200 overflow-x-hidden">
      <ModuleNav track="blockchain" currentModuleId="layer-2-scaling" />
      {/* Module Mode & Tabs Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 mt-1 sm:mt-2">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 border border-[#e7e3da] rounded-2xl p-2.5 sm:p-3 shadow-2xs backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 pl-1 hidden sm:inline">View Mode:</span>
            <div className="flex items-center gap-1 bg-[#f6f4ee] p-1 rounded-xl border border-[#e7e3da] text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab("theory")}
                className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === "theory"
                    ? "bg-white text-neutral-900 shadow-xs border border-neutral-200/70"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Curriculum & Labs
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("simulators")}
                className={`px-3.5 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === "simulators"
                    ? "bg-white text-neutral-900 shadow-xs border border-neutral-200/70"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Simulators
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-500 pr-1">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>Module 19 · Layer 2 & Scaling</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 space-y-8 sm:space-y-10">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Cpu className="w-3.5 h-3.5" />
            <span>ADVANCED BLOCKCHAIN ENGINEERING • ETHEREUM SCALING & L2 TRACK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 19 — Layer 2 & Blockchain Scaling
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-grade study of Layer 2 architecture, rollup execution models, fraud vs. validity proofs, EIP-4844 blobs, sequencer economics, and cross-chain bridge invariants. Deploy production contracts on Arbitrum Nitro and build a complete mini rollup simulation.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            
        {/* Interactive Simulators Section */}
        <section id="simulators" className="space-y-12">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>HANDS-ON PROTOCOL LABS & SIMULATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive Layer 2 Protocol Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Experiment with dynamic fee economics, interactive bisection dispute games, ZK proof finality timelines, and cross-chain bridge collateral invariants.
            </p>
          </div>

          {/* Simulator 1: Rollup Fee & Throughput Economics Calculator */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Rollup Fee & Throughput Economics Calculator</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Model the impact of EIP-4844 Blob data vs legacy L1 Calldata on per-tx cost and throughput.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPostingMode(postingMode === "blobs" ? "calldata" : "blobs")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    postingMode === "blobs"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-neutral-800 text-neutral-100"
                  }`}
                >
                  Mode: {postingMode === "blobs" ? "EIP-4844 Blobs (Post-Dencun)" : "Legacy Calldata (Pre-Dencun)"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sliders */}
              <div className="space-y-4 md:col-span-1 border-r border-neutral-200/60 pr-0 md:pr-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>L1 Base Fee</span>
                    <span className="text-amber-600">{l1BaseFee} Gwei</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="120"
                    step="5"
                    value={l1BaseFee}
                    onChange={(e) => setL1BaseFee(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>5 Gwei</span>
                    <span>120 Gwei</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Transactions Per Batch</span>
                    <span className="text-amber-600">{batchTxCount.toLocaleString()} txs</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="4000"
                    step="100"
                    value={batchTxCount}
                    onChange={(e) => setBatchTxCount(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>100</span>
                    <span>4,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Compressed Size per Tx</span>
                    <span className="text-amber-600">{txCompressedBytes} bytes</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="150"
                    step="2"
                    value={txCompressedBytes}
                    onChange={(e) => setTxCompressedBytes(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>12B (ZK diff)</span>
                    <span>150B (Standard)</span>
                  </div>
                </div>
              </div>

              {/* Economic Metrics */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Total Batch Size</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    {((batchTxCount * txCompressedBytes) / 1024).toFixed(1)} KB
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {(batchTxCount * txCompressedBytes).toLocaleString()} raw payload bytes
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Total L1 Gas Cost</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    {totalBatchGas.toLocaleString()} gas
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {postingMode === "blobs" ? "1 blob gas/byte + overhead" : "16 gas/byte + overhead"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Total Batch Cost (L1)</div>
                  <div className="text-lg font-mono font-bold text-amber-700 mt-1">
                    {totalBatchCostEth.toFixed(5)} ETH
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    ${(totalBatchCostEth * ethPrice).toFixed(2)} USD (@ ${ethPrice})
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-[11px] font-mono text-emerald-800 uppercase font-semibold">Cost Per Transaction</div>
                  <div className="text-xl font-mono font-black text-emerald-900 mt-1">
                    ${costPerTxUsd.toFixed(4)}
                  </div>
                  <div className="text-[10px] text-emerald-700 mt-0.5">
                    {costPerTxEth.toFixed(8)} ETH / tx
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="text-[11px] font-mono text-blue-800 uppercase font-semibold">Throughput Capacity</div>
                  <div className="text-xl font-mono font-black text-blue-900 mt-1">
                    ~{Math.round(theoreticalTps)} TPS
                  </div>
                  <div className="text-[10px] text-blue-700 mt-0.5">
                    vs ~15 TPS on base Ethereum L1
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="text-[11px] font-mono text-amber-800 uppercase font-semibold">Blob Cost Savings</div>
                  <div className="text-xl font-mono font-black text-amber-900 mt-1">
                    {blobSavingsPercent.toFixed(1)}%
                  </div>
                  <div className="text-[10px] text-amber-700 mt-0.5">
                    Fee reduction over legacy calldata
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Key Engineering Insight:</span> Under EIP-4844, blobs are decoupled from L1 EVM execution gas. Posting as blobs eliminates the 16 gas/byte calldata tax, allowing rollups to scale throughput to thousands of transactions per second while pushing per-transaction data fees under <strong>$0.01</strong>.
            </div>
          </div>

          {/* Simulator 2: Optimistic Fault Dispute Game (Interactive Bisection) */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
                <h3 className="text-xl font-bold text-neutral-900">Optimistic Fault Dispute Game: Interactive Bisection</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Step through a binary search dispute between a dishonest sequencer and an honest challenger.</p>
              </div>
              <button
                type="button"
                onClick={resetDisputeGame}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Game
              </button>
            </div>

            {/* Bisection Progress Visualizer */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between text-xs font-mono font-semibold text-neutral-700 pb-2 border-b border-neutral-100">
                <span>Dispute Range: [Step {bisectionRange[0]} &rarr; Step {bisectionRange[1]}]</span>
                <span>Current Midpoint: Step {Math.floor((bisectionRange[0] + bisectionRange[1]) / 2)}</span>
                <span className="text-amber-700 font-bold">Round {bisectionRound} of 6</span>
              </div>

              {/* Graphical Step Bar */}
              <div className="relative w-full h-8 bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200">
                <div
                  className="absolute top-0 bottom-0 bg-amber-200 border-x-2 border-amber-500 transition-all duration-300"
                  style={{
                    left: `${(bisectionRange[0] / 64) * 100}%`,
                    width: `${((bisectionRange[1] - bisectionRange[0]) / 64) * 100}%`
                  }}
                />
                <div
                  className="absolute top-0 bottom-0 w-1 bg-red-600 z-10"
                  style={{ left: `${(42 / 64) * 100}%` }}
                  title="Actual Fault Location: Step 42"
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                <span>Step 0 (Valid Start)</span>
                <span className="text-red-600 font-bold">Target Bug: Step 42 (ADD vs SUB)</span>
                <span>Step 64 (Contested State Root)</span>
              </div>

              {/* Actors State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border ${disputeFinished ? "bg-red-50/50 border-red-200" : "bg-neutral-50 border-neutral-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-800">Proposer (Alice - Malicious)</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold">Bond: 10 ETH</span>
                  </div>
                  <div className="mt-2 text-xs text-neutral-600 space-y-1 font-mono">
                    <div>Claimed Step 64 Root: <span className="text-red-700">0xBAD1...77F</span></div>
                    <div>Stance: "All 64 execution steps are completely valid."</div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${disputeFinished ? "bg-emerald-50/50 border-emerald-200" : "bg-neutral-50 border-neutral-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-800">Challenger (Bob - Honest)</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Bond: 10 ETH</span>
                  </div>
                  <div className="mt-2 text-xs text-neutral-600 space-y-1 font-mono">
                    <div>Claimed Step 64 Root: <span className="text-emerald-700">0xGOOD...42A</span></div>
                    <div>Stance: "Execution diverged at Step 42 during opcode arithmetic."</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                {!disputeFinished ? (
                  <div className="flex flex-wrap gap-3">
                    {bisectionRange[1] - bisectionRange[0] > 1 ? (
                      <button
                        type="button"
                        onClick={stepBisection}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm"
                      >
                        Perform Bisection Round ({bisectionRange[1] - bisectionRange[0]} steps &rarr; {Math.ceil((bisectionRange[1] - bisectionRange[0]) / 2)} steps)
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={executeOneStepProof}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm animate-pulse"
                      >
                        Execute One-Step Proof on L1 EVM (Single Opcode at Step 42)
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-100/70 border border-emerald-300 text-emerald-950 space-y-2">
                    <div className="font-bold font-mono text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>One-Step Proof Execution Result: Proposer Slashed!</span>
                    </div>
                    <div className="text-xs font-mono leading-relaxed">
                      L1 Contract evaluated opcode at Step 42: Expected ADD (0x10 + 0x05 = 0x15), Proposer claimed SUB (0x0B).
                      <br />
                      <strong>Result:</strong> Alice's 10 ETH bond slashed. Bob receives 5 ETH bounty, 5 ETH burned. State reverted to honest root.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Simulator 3: ZK Validity Proof vs Optimistic Rollup Finality Timeline */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
              <h3 className="text-xl font-bold text-neutral-900">ZK Validity Proof vs Optimistic Rollup Finality Lifecycle</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Compare end-to-end transaction latency, gas verification, and withdrawal finality guarantees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Optimistic Rollup Card */}
              <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-neutral-900 text-sm font-mono flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    Optimistic Rollup (e.g., Arbitrum, Optimism)
                  </h4>
                  <span className="text-xs font-mono font-bold text-amber-800">Fraud Proof Model</span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <div className="text-neutral-500 text-[10px]">1. Soft Finality (Sequencer)</div>
                    <div className="text-neutral-900 font-bold">~250 milliseconds</div>
                    <div className="text-[10px] text-neutral-500">Sequencer issues signed receipt in mempool</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <div className="text-neutral-500 text-[10px]">2. L1 Batch Commit (Blob / Calldata)</div>
                    <div className="text-neutral-900 font-bold">~1 to 3 minutes</div>
                    <div className="text-[10px] text-neutral-500">Batch posted to Ethereum L1 blocks</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-100/60 border border-amber-300">
                    <div className="text-amber-900 font-bold text-[10px]">3. Dispute Challenge Window</div>
                    <div className="text-amber-950 font-black text-sm">7 Days (168 Hours)</div>
                    <div className="text-[10px] text-amber-800">Must wait 7 days for canonical L1 bridge withdrawal</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <div className="text-neutral-500 text-[10px]">4. L1 Verification Cost</div>
                    <div className="text-neutral-900 font-bold">0 gas (dispute-free happy path)</div>
                    <div className="text-[10px] text-neutral-500">Only incurs gas if an honest node challenges</div>
                  </div>
                </div>
              </div>

              {/* ZK Rollup Card */}
              <div className="p-5 rounded-xl bg-purple-50/40 border border-purple-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-neutral-900 text-sm font-mono flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                    Zero-Knowledge Rollup (e.g., zkSync, Starknet)
                  </h4>
                  <span className="text-xs font-mono font-bold text-purple-800">Validity Proof Model</span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white border border-purple-200">
                    <div className="text-neutral-500 text-[10px]">1. Soft Finality (Sequencer)</div>
                    <div className="text-neutral-900 font-bold">~250 milliseconds</div>
                    <div className="text-[10px] text-neutral-500">Instant sub-second user responsiveness</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-purple-200">
                    <div className="text-neutral-500 text-[10px]">2. Proof Generation (GPU/FPGA Cluster)</div>
                    <div className="text-neutral-900 font-bold">~10 to 45 minutes</div>
                    <div className="text-[10px] text-neutral-500">Prover compiles polynomial arithmetic circuit</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-100/60 border border-purple-300">
                    <div className="text-purple-900 font-bold text-[10px]">3. Canonical L1 Hard Finality</div>
                    <div className="text-purple-950 font-black text-sm">Instant Upon L1 Verification (~1 Hour)</div>
                    <div className="text-[10px] text-purple-800">Zero waiting period; verified mathematically</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-purple-200">
                    <div className="text-neutral-500 text-[10px]">4. L1 Verification Cost</div>
                    <div className="text-neutral-900 font-bold">~250,000 - 450,000 gas</div>
                    <div className="text-[10px] text-neutral-500">Fixed pairing check gas cost per batch proof</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 4: Cross-Chain Bridge Lock-and-Mint Invariant Engine */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">Cross-Chain Bridge Lock-and-Mint Invariant Engine</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Test bridge collateral solvency and simulate real-time exploit detection.</p>
              </div>
              <button
                type="button"
                onClick={resetBridge}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Bridge State
              </button>
            </div>

            {/* Invariant Health Banner */}
            <div className={`p-4 rounded-xl border font-mono text-xs flex items-center justify-between ${
              bridgeExploitTriggered
                ? "bg-red-100 border-red-300 text-red-950"
                : "bg-emerald-50 border-emerald-200 text-emerald-950"
            }`}>
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${bridgeExploitTriggered ? "bg-red-600 animate-ping" : "bg-emerald-600"}`}></span>
                <span className="font-bold">
                  {bridgeExploitTriggered ? "CRITICAL ALERT: INVARIANT VIOLATION DETECTED! BRIDGE PAUSED." : "BRIDGE STATUS: 100% FULLY COLLATERALIZED"}
                </span>
              </div>
              <div className="font-bold">
                Invariant: [L2 Supply {bridgeL2Minted} WETH] &le; [L1 Locked {bridgeL1Vault} ETH]
              </div>
            </div>

            {/* Vault Balance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-xs font-mono text-neutral-500 uppercase">Layer 1 Custody Vault Contract</div>
                <div className="text-2xl font-mono font-bold text-neutral-900">{bridgeL1Vault} ETH</div>
                <div className="text-[11px] text-neutral-500">Real ETH deposited on Ethereum Mainnet escrow</div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-xs font-mono text-neutral-500 uppercase">Layer 2 Wrapped Token Supply</div>
                <div className="text-2xl font-mono font-bold text-neutral-900">{bridgeL2Minted} WETH</div>
                <div className="text-[11px] text-neutral-500">Synthetic bridged tokens circulating on L2</div>
              </div>
            </div>

            {/* Interaction Controls */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-neutral-700 uppercase">Bridge Operations:</div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={bridgeExploitTriggered}
                  onClick={() => handleBridgeDeposit(20)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all"
                >
                  Deposit & Lock 20 ETH (L1 &rarr; L2)
                </button>

                <button
                  type="button"
                  disabled={bridgeExploitTriggered || bridgeL2Minted < 15}
                  onClick={() => handleBridgeWithdraw(15)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all"
                >
                  Burn & Unlock 15 WETH (L2 &rarr; L1)
                </button>

                <button
                  type="button"
                  disabled={bridgeExploitTriggered}
                  onClick={handleBridgeAttack}
                  className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all"
                >
                  Simulate Exploit: Unbacked Mint of 50 WETH
                </button>
              </div>
            </div>

            {/* Exploit Log if triggered */}
            {bridgeExploitTriggered && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-red-950">
                  <span>Exploit Stopped by Circuit Breaker:</span>
                </div>
                <div>
                  Attacker attempted to call L2 <code>mint(attacker, 50 ether)</code> without corresponding L1 deposit event.
                </div>
                <div>
                  <strong>Invariant Check:</strong> Projected L2 Supply ({bridgeL2Minted + 50} WETH) exceeds L1 Vault ({bridgeL1Vault} ETH).
                  Transaction reverted on-chain with <code>error BridgeInsolvent()</code>.
                </div>
              </div>
            )}
          </div>
        </section>

          </div>
        ) : (
          <div className="space-y-16">
            
        {/* Theory Section Container */}
        <section id="theory" className="space-y-16">
          {/* Part 1: The Blockchain Scalability Problem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 1</span>
              <span>•</span>
              <span>FOUNDATIONAL BOTTLENECKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              1. The Blockchain Scalability Problem
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Decentralized public blockchains are designed with redundant, distributed verification at their core: every full node in the network must independently execute, validate, and store every state transition. While this guarantees unprecedented Byzantine fault tolerance, censorship resistance, and trust-minimized security, it creates a fundamental physical throughput bottleneck.
            </p>

            {/* 1.1 Mathematical Derivation */}
            <div className="p-6 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs sm:text-sm space-y-4">
              <div className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                1.1 Mathematical Proof: The 115.74 TPS Adoption Threshold
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Consider a modest global adoption scenario where 1,000,000 active users execute an average of 10 transactions per day:
              </p>
              <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/80 space-y-2 text-xs">
                <div>Total Daily Volume = 1,000,000 users &times; 10 tx/day = 10,000,000 tx/day</div>
                <div>Seconds in a Day = 24 &times; 60 &times; 60 = 86,400 seconds</div>
                <div className="text-amber-400 font-bold">
                  Required Minimum Throughput = 10,000,000 / 86,400 &asymp; 115.74 TPS
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Ethereum Layer 1 processes an average of <strong>12 to 15 TPS</strong> (peaking at ~30 TPS for simple ETH transfers). Consequently, Ethereum L1 cannot service even 1 million mainstream users on-chain without prohibitive congestion and runaway gas auctions.
              </p>
            </div>

            {/* 1.2 Gas Limits & Block Space */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">1.2 Gas Limits, Block Space, and the 16.67 TPS Ceiling</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Ethereum blocks are constrained by a target gas limit of <strong>15 million gas</strong> and a hard cap of <strong>30 million gas</strong> (EIP-1559 elasticity), targeted every 12-second block slot. Because every smart contract operation consumes gas reflecting CPU, memory, and disk I/O, complex DeFi transactions rapidly consume the available block space.
              </p>

              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Transaction Type</th>
                      <th className="p-3">Average Gas Consumed</th>
                      <th className="p-3">Max Txs per 30M Block</th>
                      <th className="p-3">Effective Max Throughput (12s slot)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Native ETH Transfer</td>
                      <td className="p-3">21,000 gas</td>
                      <td className="p-3">1,428 txs</td>
                      <td className="p-3 font-bold text-emerald-700">~119.0 TPS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">ERC-20 Token Transfer</td>
                      <td className="p-3">~65,000 gas</td>
                      <td className="p-3">461 txs</td>
                      <td className="p-3 font-bold text-neutral-800">~38.4 TPS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Uniswap V3 Swap</td>
                      <td className="p-3">~150,000 gas</td>
                      <td className="p-3">200 txs</td>
                      <td className="p-3 font-bold text-amber-700">~16.67 TPS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Complex DeFi Yield Deposit / Vault</td>
                      <td className="p-3">~300,000+ gas</td>
                      <td className="p-3">100 txs</td>
                      <td className="p-3 font-bold text-red-700">~8.33 TPS</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1.3 Scalability Trilemma */}
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-3">
              <h3 className="text-lg font-bold text-neutral-900">1.3 The Scalability Trilemma (Vitalik Buterin)</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                The Scalability Trilemma states that a decentralized ledger can achieve at most two of three vital properties: <strong>Decentralization</strong>, <strong>Security</strong>, and <strong>Scalability</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-amber-200 space-y-1">
                  <div className="font-bold text-amber-900">1. Decentralization</div>
                  <div className="text-neutral-600">Consumer hardware can run full nodes worldwide without relying on corporate cloud data centers.</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200 space-y-1">
                  <div className="font-bold text-amber-900">2. Security</div>
                  <div className="text-neutral-600">The economic and cryptographic cost to forge state transitions or reorganize the ledger approaches infinity.</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200 space-y-1">
                  <div className="font-bold text-amber-900">3. Scalability</div>
                  <div className="text-neutral-600">The network handles thousands of concurrent transactions without latency spikes or exorbitant fees.</div>
                </div>
              </div>
              <p className="text-xs text-neutral-600 italic">
                Naive scaling (raising block gas limits to 300M or reducing block intervals to 500ms) leads to rapid state bloat and prohibitive bandwidth requirements, pricing out everyday node operators and centralizing the chain into a vulnerable oligopoly.
              </p>
            </div>
          </div>

          {/* Part 2: Layer 1 vs Layer 2 */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 2</span>
              <span>•</span>
              <span>ARCHITECTURE DIVISION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              2. Layer 1 vs Layer 2: Division of Responsibilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Layer 2 scaling decouples <em>execution</em> from <em>consensus, settlement, and data availability</em>. Layer 1 acts as an immutable supreme court and data availability bulletin board, while Layer 2 acts as a high-speed execution engine.
            </p>

            {/* 9-Dimension Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Architectural Dimension</th>
                    <th className="p-3">Layer 1 (Ethereum Mainnet)</th>
                    <th className="p-3">Layer 2 (Rollup: Arbitrum, Optimism, zkSync)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. Primary Responsibility</td>
                    <td className="p-3">Consensus, Final Settlement, Data Availability, Dispute Adjudication</td>
                    <td className="p-3">High-speed Transaction Execution, State Compression, Ordering</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. Throughput (TPS)</td>
                    <td className="p-3">12 - 30 TPS</td>
                    <td className="p-3 font-bold text-emerald-700">1,500 - 4,000+ TPS (scalable horizontally)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. Finality Time</td>
                    <td className="p-3">~12.8 minutes (2 Ethereum epochs for Casper FFG finality)</td>
                    <td className="p-3">Soft: ~250ms; Hard: Upon L1 block inclusion & dispute expiry</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. Gas Fee per Swap</td>
                    <td className="p-3">$5.00 - $50.00+ (variable with L1 congestion)</td>
                    <td className="p-3 font-bold text-emerald-700">$0.005 - $0.05 (post-EIP-4844 blobs)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. Consensus Mechanism</td>
                    <td className="p-3">Proof of Stake (1M+ decentralized validators)</td>
                    <td className="p-3">Sequencer (Centralized, Shared, or Proof of Stake)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. Security Source</td>
                    <td className="p-3">Direct economic stake (~32M+ ETH staked)</td>
                    <td className="p-3 font-bold text-neutral-900">Inherited directly from Ethereum L1</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">7. State Storage Location</td>
                    <td className="p-3">Global State Trie stored by all Ethereum full nodes</td>
                    <td className="p-3">L2 Nodes store full state; L1 stores only compressed batches & roots</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">8. Worst-Case Failure Mode</td>
                    <td className="p-3">Network split or 51% PoS finality attack</td>
                    <td className="p-3">Sequencer offline; users exit unilaterally via L1 bridge contracts</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">9. Trust Model</td>
                    <td className="p-3">Trustless (honest supermajority &gt; 2/3 of validators)</td>
                    <td className="p-3 font-bold text-neutral-900">Trustless (1-of-N honest watcher assumption or Math/ZK)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-neutral-100 border border-neutral-300 text-xs font-mono text-neutral-800">
              <strong className="text-amber-800">Crucial Distinction: Rollups vs. Sidechains:</strong> A true Layer 2 derives its validity and security directly from Layer 1. If every rollup operator shuts down, users can reconstruct the state from L1 calldata/blobs and force-withdraw funds. In contrast, a sidechain (e.g. Polygon PoS) has its own independent validator set; if sidechain validators collude, they can forge state and drain bridge vaults without L1 intervention.
            </div>
          </div>

          {/* Part 3: On-Chain vs Off-Chain Scaling */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 3</span>
              <span>•</span>
              <span>SCALING PARADIGMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              3. On-Chain vs. Off-Chain Scaling Paradigms
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Blockchain scaling approaches bifurcate into two distinct philosophies: modifying the base consensus protocol directly (On-Chain) versus shifting transaction execution to secondary layers while anchoring security to L1 (Off-Chain).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">3.1 On-Chain Scaling Techniques</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Execution Sharding:</strong> Partitioning the base chain into independent shards that execute smart contracts in parallel (largely abandoned by Ethereum due to cross-shard composability fragmentation).</li>
                  <li><strong>Danksharding:</strong> Upgrading L1 to serve purely as a high-capacity Data Availability layer rather than an execution engine.</li>
                  <li><strong>Block Gas Limit Adjustments:</strong> Incrementally raising gas limits as consumer hardware and network bandwidth improve.</li>
                  <li><strong>State Expiry & History Pruning (EIP-4444):</strong> Allowing nodes to prune transaction history older than 1 year, bounding disk bloat.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">3.2 Off-Chain Scaling Techniques</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>State Channels:</strong> Peer-to-peer off-chain balance exchanges with on-chain opening and closing settlement.</li>
                  <li><strong>Sidechains:</strong> Sovereign blockchains connected via two-way bridges with independent consensus rules.</li>
                  <li><strong>Optimistic Rollups:</strong> Off-chain execution with on-chain data availability and interactive fraud dispute games.</li>
                  <li><strong>Zero-Knowledge Rollups:</strong> Off-chain execution with cryptographic validity proofs verified on L1.</li>
                  <li><strong>Validiums:</strong> Off-chain execution with ZK validity proofs and off-chain data availability committees.</li>
                </ul>
              </div>
            </div>

            {/* 6-Dimension Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Comparison Metric</th>
                    <th className="p-3">On-Chain Scaling (L1 Hard Forks)</th>
                    <th className="p-3">Off-Chain Scaling (Rollups & Channels)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">L1 Protocol Modification</td>
                    <td className="p-3">Requires contentious, complex hard forks of client implementations</td>
                    <td className="p-3 font-bold text-emerald-700">Runs permissionlessly on top of L1 smart contracts</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Impact on Node Requirements</td>
                    <td className="p-3">Increases node CPU, RAM, and bandwidth requirements, threatening decentralization</td>
                    <td className="p-3 font-bold text-emerald-700">Keeps L1 node hardware requirements low and accessible</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Implementation Complexity</td>
                    <td className="p-3">Multi-year coordination across consensus and client development teams</td>
                    <td className="p-3">Rapid iteration, modular upgrades, and competitive market experimentation</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Security Inheritance</td>
                    <td className="p-3">Direct base protocol consensus</td>
                    <td className="p-3">Fully inherited (Rollups) or cryptoeconomically bounded (Channels)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Throughput Potential</td>
                    <td className="p-3">Modest gains (2x - 5x) before node centralization</td>
                    <td className="p-3 font-bold text-emerald-700">Orders of magnitude (100x - 1,000x+) via horizontal rollups</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Composability</td>
                    <td className="p-3">Atomic synchronous composability within L1</td>
                    <td className="p-3">Asynchronous cross-L2 messaging; atomic within single rollup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Part 4: State Channels */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 4</span>
              <span>•</span>
              <span>PEER-TO-PEER CHANNELS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              4. State Channels: Architecture, Mechanics & Limitations
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              State Channels represent an early off-chain scaling primitive where participants lock collateral on Layer 1 and exchange signed state transitions off-chain at zero cost, returning to L1 only to open, close, or dispute the state.
            </p>

            {/* 5-Step Lifecycle */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 1</span>
                <div className="font-bold text-neutral-900">Escrow Deposit</div>
                <div className="text-neutral-600 text-[11px]">Alice & Bob fund an on-chain 2-of-2 multisig contract with collateral.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 2</span>
                <div className="font-bold text-neutral-900">Off-Chain Signing</div>
                <div className="text-neutral-600 text-[11px]">Parties exchange signed state updates with incrementing nonces peer-to-peer.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 3</span>
                <div className="font-bold text-neutral-900">Closure Request</div>
                <div className="text-neutral-600 text-[11px]">Either party submits the latest signed state to the on-chain settlement contract.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 4</span>
                <div className="font-bold text-neutral-900">Dispute Window</div>
                <div className="text-neutral-600 text-[11px]">A dispute window allows the counterparty to present a higher-nonce signed state.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                <span className="text-[10px] text-amber-600 font-bold">STEP 5</span>
                <div className="font-bold text-neutral-900">Final Settlement</div>
                <div className="text-neutral-600 text-[11px]">Contract disburses exact finalized balances to Alice and Bob on L1.</div>
              </div>
            </div>

            {/* Worked Example */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                4.2 Worked Example: Alice & Bob Settlement
              </div>
              <p className="text-neutral-300">
                Alice and Bob deposit 5 ETH each (total 10 ETH locked in contract). They execute 3 off-chain transactions:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 space-y-1 text-neutral-200">
                <div>State 0 (Initial): Alice = 5 ETH, Bob = 5 ETH | Nonce = 0</div>
                <div>State 1: Alice pays Bob 1 ETH &rarr; Alice = 4 ETH, Bob = 6 ETH | Nonce = 1</div>
                <div>State 2: Bob pays Alice 2 ETH &rarr; Alice = 6 ETH, Bob = 4 ETH | Nonce = 2</div>
                <div>State 3: Alice pays Bob 3 ETH &rarr; Alice = 3 ETH, Bob = 7 ETH | Nonce = 3</div>
              </div>
              <p className="text-neutral-300">
                If Alice dishonestly attempts to submit <strong>State 2</strong> (where she had 6 ETH instead of 3 ETH), Bob submits <strong>State 3</strong> with Nonce = 3 during the dispute period. Because <code>Nonce 3 &gt; Nonce 2</code>, the contract enforces State 3 and can confiscate Alice's deposit as penalty.
              </p>
            </div>

            {/* State Channels vs Rollups */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Feature</th>
                    <th className="p-3">State Channels</th>
                    <th className="p-3">Rollups (Optimistic & ZK)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Participant Set</td>
                    <td className="p-3">Fixed, static 1-to-1 or N-party channels</td>
                    <td className="p-3 font-bold text-emerald-700">Open, global, multi-user shared state</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Capital Efficiency</td>
                    <td className="p-3">Poor (100% collateral locked per channel)</td>
                    <td className="p-3 font-bold text-emerald-700">High (shared liquidity pools, unified state)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Liveness Requirement</td>
                    <td className="p-3">High (users or watchtowers must stay online)</td>
                    <td className="p-3 font-bold text-neutral-900">Zero (offline users are fully protected by L1)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Smart Contract Capability</td>
                    <td className="p-3">Extremely limited (cannot run global AMMs like Uniswap)</td>
                    <td className="p-3 font-bold text-emerald-700">Full EVM Turing-complete smart contracts</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Ideal Use Case</td>
                    <td className="p-3">High-frequency micropayments, 2-player gaming</td>
                    <td className="p-3 font-bold text-emerald-700">General-purpose DeFi, NFTs, and Web3 infrastructure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Part 5: Sidechains */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 5</span>
              <span>•</span>
              <span>INDEPENDENT LEDGERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              5. Sidechains: Architecture, Checkpointing & Security Vulnerabilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              A sidechain is an independent blockchain running parallel to Ethereum, running its own consensus mechanism (typically Proof of Stake) and connected to Ethereum via a two-way custody bridge. The most famous example is <strong>Polygon PoS</strong>.
            </p>

            <div className="p-6 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-4">
              <div className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                5.2 Sidechain Architecture & Checkpoint Flow
              </div>
              <pre className="text-neutral-300 overflow-x-auto leading-relaxed">
{`+------------------------+          +-------------------------+
| Ethereum Layer 1       |          | Sidechain (e.g. Polygon)|
| - Mainnet Bridge Vault |<========>| - Bor Execution Layer   |
| - RootChainManager.sol |  2-Way   | - Heimdall PoS Consensus|
| - StateSender Contract |  Bridge  | - Independent 100 Nodes |
+------------------------+          +-------------------------+
            ^                                    |
            |========= Periodic Checkpoints =====|
                       (Signed Merkle Roots)      `}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">5.3 Advantages of Sidechains</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Instant Throughput:</strong> Produces blocks every 2 seconds with high gas limits (~7,000 TPS theoretical).</li>
                  <li><strong>Negligible Gas Costs:</strong> Fees are fractions of a cent paid in native tokens (e.g. POL/MATIC).</li>
                  <li><strong>Full EVM Compatibility:</strong> Standard Solidity contracts and Web3 tooling (MetaMask, Ethers, Viem) work unmodified.</li>
                  <li><strong>Mature Ecosystem:</strong> High liquidity, established developer tooling, and major dapp deployments.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-red-900 font-mono">5.4 Critical Security Risks</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Sovereign Security Budget:</strong> Security is bounded by the market cap of the sidechain token, NOT Ethereum's $400B economic security.</li>
                  <li><strong>51% Validator Collusion:</strong> If &gt;2/3 of Heimdall validators collude, they can forge checkpoints, sign fake withdrawal proofs, and drain the L1 bridge custody contract.</li>
                  <li><strong>Bridge Vulnerabilities:</strong> Complex cross-chain custody contracts present massive attack surfaces (over $2.5B stolen across bridge hacks).</li>
                  <li><strong>No L1 Recourse:</strong> Ethereum cannot detect or revert fraudulent transactions executed inside the sidechain.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Part 6: Rollup Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 6</span>
              <span>•</span>
              <span>ROLLUP CORE DESIGN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              6. Rollup Architecture: Execution, Compression & State Transitions
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Rollups execute transactions off-chain in a high-speed execution environment, compress the transaction inputs or state diffs, and publish the compressed batch along with state root commitments directly to Layer 1.
            </p>

            {/* 10 Components Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Rollup Component</th>
                    <th className="p-3">Location</th>
                    <th className="p-3">Role & Functionality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. L2 Sequencer</td>
                    <td className="p-3">Off-Chain</td>
                    <td className="p-3">Ingests user transactions, orders them, emits sub-second soft receipts, and batches data.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. L2 Mempool</td>
                    <td className="p-3">Off-Chain</td>
                    <td className="p-3">Private or shared pending transaction queue awaiting sequencer ordering.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. L2 Execution Environment</td>
                    <td className="p-3">Off-Chain</td>
                    <td className="p-3">High-performance VM (e.g. Nitro Geth, REVM) executing EVM opcodes and computing state diffs.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. Prover / Disputer Node</td>
                    <td className="p-3">Off-Chain</td>
                    <td className="p-3">Generates ZK validity proofs (ZK rollups) or monitors state roots to launch bisection games (Optimistic).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. L1 Inbox / Calldata Contract</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Receives sequencer transaction batches and enforces sequential ordering.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. L1 Delayed Inbox</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Allows users to force transaction inclusion if the sequencer attempts censorship.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">7. L1 Bridge Custody Vault</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Locks native ETH and ERC-20 tokens deposited by users for minting on L2.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">8. L1 State Commitment Chain (SCC)</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Records a cryptographic log of proposed L2 state roots over time.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">9. L1 Outbox Contract</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Validates Merkle proofs of L2 withdrawals after the challenge window expires.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">10. One-Step Prover / Verifier</td>
                    <td className="p-3">Ethereum L1</td>
                    <td className="p-3">Executes single disputed EVM opcodes (Optimistic) or verifies Groth16/Plonk proofs (ZK).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* State Transition Formula */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                6.3 The Rollup State Transition Function
              </div>
              <p className="text-neutral-300">
                A rollup mathematically models state transitions as a deterministic state machine:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 text-amber-300 font-bold text-sm">
                S_{"{n+1}"} = F(S_n, T_n)
              </div>
              <p className="text-neutral-400 text-xs">
                Where <code>S_n</code> is the current Merkle state root, <code>T_n</code> is the batch of transactions, <code>F</code> is the state transition function (the EVM execution engine), and <code>S_{"{n+1}"}</code> is the resulting post-state root committed to Layer 1.
              </p>
            </div>

            {/* Batch Compression */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-neutral-900">6.4 Batch Compression Techniques</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Standard Ethereum transactions require ~110 bytes of raw data. Rollup batchers compress transactions down to <strong>12 to 15 bytes</strong> using four primary optimizations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">1. Address Indexing (20B &rarr; 4B)</div>
                  <div className="text-neutral-600">Replaces 20-byte account addresses with 4-byte indexes referencing an on-chain account registry.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">2. Signature Aggregation (65B &rarr; 0B amortized)</div>
                  <div className="text-neutral-600">Replaces individual 65-byte ECDSA signatures with a single BLS aggregate signature or ZK proof for the entire batch.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">3. Nonce Elimination (32B &rarr; 0B)</div>
                  <div className="text-neutral-600">Omits nonces from published data because transaction ordering in the batch implicitly defines sequential nonces.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">4. Variable-Length Encoding (LEB128)</div>
                  <div className="text-neutral-600">Encodes value amounts and gas limits into dynamic 1-4 byte payloads instead of static 32-byte words.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 7: Optimistic Rollups */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 7</span>
              <span>•</span>
              <span>OPTIMISTIC ROLLUPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              7. Optimistic Rollups: Execution, Fraud Proofs & The 7-Day Window
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Optimistic Rollups (Arbitrum, Optimism OP Mainnet, Base) operate on an optimistic paradigm: state roots published by sequencers are assumed valid by default. If a proposer submits an invalid state root, any honest validator can challenge it during a 7-day challenge window.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Components */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">7.2 Core Components of an Optimistic Rollup</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Sequencer:</strong> Accepts, executes, and batches user transactions with instant soft receipts.</li>
                  <li><strong>Proposer:</strong> Stakes an economic bond (e.g. 10-50 ETH) and publishes proposed state roots to L1.</li>
                  <li><strong>Challenger / Watcher:</strong> Re-executes transactions from L1 data; stakes a bond to dispute fraudulent proposals.</li>
                  <li><strong>Rollup Core Contract:</strong> Tracks the timeline of proposed roots and freezes withdrawals during active disputes.</li>
                  <li><strong>One-Step Prover:</strong> An on-chain EVM interpreter contract capable of re-executing a single disputed opcode instruction.</li>
                </ul>
              </div>

              {/* Dispute Mechanics */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">7.3 Interactive Bisection Algorithm</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Rather than re-executing an entire transaction on L1 (which could exceed the 30M gas block limit), Arbitrum Nitro uses an interactive bisection binary search:
                </p>
                <div className="p-3 rounded-lg bg-neutral-100 font-mono text-[11px] text-neutral-800 space-y-1">
                  <div>1. Proposer claims state after N steps is S_N.</div>
                  <div>2. Challenger agrees on Step 0, but disputes Step N.</div>
                  <div>3. Parties bisect: Proposer posts state at Step N/2.</div>
                  <div>4. Binary search repeats until range is narrowed to 1 opcode instruction.</div>
                  <div>5. L1 One-Step Prover executes that 1 opcode to slash the loser.</div>
                </div>
              </div>
            </div>

            {/* 7-Day Challenge Window */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <h3 className="text-base font-bold text-neutral-900 font-mono">7.4 Why the 7-Day Challenge Period is Mandatory</h3>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                The 7-day challenge period is an intentional cryptoeconomic security barrier against <strong>Censorship and L1 Congestion Attacks</strong>. If a malicious proposer submits an invalid state root stealing user funds, the attacker could attempt to censor honest challengers by spamming Ethereum L1 with maximum-gas transactions, stuffing blocks, or bribing miners/validators to ignore challenger fraud proofs. A 7-day window ensures that honest validators have ample time to break through congestion and publish their dispute transaction before the withdrawal is finalized.
              </p>
              <div className="text-xs font-mono text-amber-900 bg-white p-3 rounded-xl border border-amber-200">
                <strong>Fast Bridges (Hop, Across):</strong> Users who cannot wait 7 days use third-party liquidity providers who pay out instantly on L1 in exchange for a small fee (~0.1%), taking on the 7-day rollup withdrawal wait themselves.
              </div>
            </div>
          </div>

          {/* Part 8: Zero-Knowledge Rollups */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 8</span>
              <span>•</span>
              <span>ZK ROLLUPS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              8. Zero-Knowledge Rollups: Validity Proofs & Cryptographic Finality
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Zero-Knowledge Rollups (zkSync Era, Starknet, Scroll, Linea) replace optimistic cryptoeconomic dispute games with pure mathematical cryptography. Every batch posted to Layer 1 is accompanied by a cryptographic <strong>Validity Proof</strong> (SNARK or STARK).
            </p>

            {/* Validity Proof Math */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                8.2 Cryptographic Validity Verification Math
              </div>
              <p className="text-neutral-300">
                The off-chain Prover runs an arithmetic circuit over the transactions to produce a proof:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 text-purple-300 font-bold text-sm">
                &pi; = Prove(Circuit, S_n, S_{"{n+1}"}, T_n)
              </div>
              <p className="text-neutral-300">
                The Ethereum Layer 1 verifier contract evaluates the pairing check:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 text-emerald-400 font-bold text-sm">
                Verify(VerifyingKey, &pi;, PublicInputs(S_n, S_{"{n+1}"}, Hash(T_n))) == true
              </div>
              <p className="text-neutral-400 text-xs">
                If the proof is mathematically valid, the state root is updated immediately. An invalid state transition cannot generate a valid proof under the hardness assumptions of discrete logarithms and elliptic curve pairings.
              </p>
            </div>

            {/* ZK Rollup Components Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">ZK Component</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Operational Mechanics</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Sequencer</td>
                    <td className="p-3">Mempool & Ordering</td>
                    <td className="p-3">Orders transactions and produces immediate soft execution receipts.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Prover Cluster</td>
                    <td className="p-3">Proof Generation</td>
                    <td className="p-3">GPU/FPGA server clusters compiling execution traces into arithmetic polynomial circuits.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Circuit Compiler</td>
                    <td className="p-3">VM Transpilation</td>
                    <td className="p-3">Converts Solidity opcodes into R1CS (Rank-1 Constraint Systems) or AIR (Algebraic Intermediate Representation).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">L1 Verifier Contract</td>
                    <td className="p-3">On-Chain Settlement</td>
                    <td className="p-3">Solidity smart contract verifying elliptic curve pairings in ~250k-400k gas.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">L1 Rollup Manager</td>
                    <td className="p-3">State Storage</td>
                    <td className="p-3">Updates the finalized state root once the Verifier returns <code>true</code>.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">L1 Bridge Contract</td>
                    <td className="p-3">Asset Custody</td>
                    <td className="p-3">Releases withdrawn funds immediately upon proof verification with zero delay.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Part 9: Fraud Proofs vs Validity Proofs */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono font-bold tracking-wide">
              <span>PART 9</span>
              <span>•</span>
              <span>PROOF SYSTEMS COMPARED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              9. Fraud Proofs vs. Validity Proofs: Detailed Architectural Trade-Offs
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Choosing between Optimistic Rollups and ZK Rollups represents one of the most critical engineering trade-offs in blockchain systems architecture.
            </p>

            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Dimension</th>
                    <th className="p-3">Fraud Proofs (Optimistic Rollups)</th>
                    <th className="p-3">Validity Proofs (ZK Rollups)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. Security Guarantee</td>
                    <td className="p-3">Cryptoeconomic (relies on at least 1 honest validator being online and un-censored)</td>
                    <td className="p-3 font-bold text-purple-700">Mathematical (cryptographically impossible to forge invalid state)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. Withdrawal Finality Delay</td>
                    <td className="p-3">7 Days (mandatory dispute challenge window)</td>
                    <td className="p-3 font-bold text-emerald-700">~15 to 60 Minutes (as soon as prover generates proof and L1 verifies)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. Off-Chain Compute Cost</td>
                    <td className="p-3 font-bold text-emerald-700">Extremely Low (standard commodity CPU node runs Geth/Nitro)</td>
                    <td className="p-3">Very High (massive GPU/FPGA clusters running intensive polynomial arithmetic)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. L1 Verification Gas Cost</td>
                    <td className="p-3 font-bold text-emerald-700">0 gas in normal operation (only incurs gas during active dispute)</td>
                    <td className="p-3">Fixed ~250k - 450k gas per batch proof verification transaction</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. On-Chain Data Requirement</td>
                    <td className="p-3">Must publish full transaction inputs or state diffs to enable dispute replay</td>
                    <td className="p-3 font-bold text-purple-700">Only needs to publish minimal state diffs (signatures can be omitted)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. EVM Equivalence Maturity</td>
                    <td className="p-3 font-bold text-emerald-700">High (100% bytecode EVM equivalence via Nitro / OP Bedrock)</td>
                    <td className="p-3">Moderate-to-High (zkEVM Type 1-4 tradeoffs; circuit complexities)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Part 10: Data Availability & EIP-4844 */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 10</span>
              <span>•</span>
              <span>DATA AVAILABILITY & BLOBS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              10. Data Availability, Calldata Economics & EIP-4844 Blobs
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Data Availability (DA) guarantees that the transaction data necessary to reconstruct the current blockchain state is publicly available to all network participants.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">10.1 The Data Withholding Attack</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  If an operator posts a new state root to L1 but refuses to publish the transaction data (withholding it), honest nodes cannot verify the state transitions, calculate new user balances, or create withdrawal proofs. Even in ZK rollups, data withholding prevents users from determining their account balances to withdraw.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">10.3 Calldata Bottleneck (Pre-Dencun)</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Before Ethereum's Dencun hard fork, rollups posted data to L1 as <code>calldata</code>. Every non-zero byte cost <strong>16 gas</strong>, competing directly with L1 DeFi transactions. Calldata costs accounted for over <strong>85% to 95%</strong> of the total fees paid by rollup users.
                </p>
              </div>
            </div>

            {/* EIP-4844 Blob Table */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">10.4 EIP-4844 (Proto-Danksharding) Blob Architecture</h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                EIP-4844 introduced <strong>Blob-Carrying Transactions</strong>. Each block can carry up to 6 blobs (128 KB each = 768 KB per block). Blobs are ephemeral: they are stored by Ethereum consensus nodes for approximately <strong>18 days</strong> (enough time for challengers to inspect and download data) and then automatically pruned from disk.
              </p>

              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">Legacy L1 Calldata</th>
                      <th className="p-3">EIP-4844 Blob Data</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">EVM Accessibility</td>
                      <td className="p-3">Accessible to smart contracts (<code>CALLDATACOPY</code>)</td>
                      <td className="p-3 font-bold text-amber-700">Inaccessible to EVM execution (only KZG commitment hash accessible via <code>BLOBHASH</code>)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Gas Market</td>
                      <td className="p-3">Shared L1 execution gas market (EIP-1559 base fee)</td>
                      <td className="p-3 font-bold text-emerald-700">Independent Blob Gas market (decoupled from DeFi congestion)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Data Retention Period</td>
                      <td className="p-3">Permanent (stored forever in Ethereum historical state)</td>
                      <td className="p-3 font-bold text-emerald-700">Ephemeral (~18 days / 4096 epochs), preventing node disk bloat</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Cost per Byte</td>
                      <td className="p-3">16 gas / non-zero byte (~$0.05 - $0.20 per tx)</td>
                      <td className="p-3 font-bold text-emerald-700">~1 blob gas / byte (&lt;$0.001 per tx)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* DAS */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                10.5 Data Availability Sampling (DAS) & 2D Erasure Coding
              </div>
              <p className="text-neutral-300 leading-relaxed">
                In Full Danksharding (PeerDAS), consumer nodes verify data availability without downloading entire 16-32 MB blocks. The block is extended into a 2D matrix using <strong>Reed-Solomon Erasure Coding</strong>: any 50% of the data can mathematically reconstruct 100% of the block. Light clients query ~30 random chunks. If an attacker withholds even 1% of the original data, they must withhold over 50% of the extended matrix, giving light clients a &gt;99.999999% probability of detecting the fraud instantly.
              </p>
            </div>
          </div>

          {/* Part 11: Sequencers */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-mono font-bold tracking-wide">
              <span>PART 11</span>
              <span>•</span>
              <span>SEQUENCER ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              11. Sequencer Roles, Centralization Vectors & Forced Inclusion
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              The Sequencer is the operational engine of a rollup. It acts as the gateway for user transactions, providing instant responsiveness while batching data for L1 submission.
            </p>

            {/* 7 Responsibilities */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900">11.1 The 7 Core Responsibilities of a Sequencer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">1. Mempool Ingestion:</strong> Collects transactions from user wallets via JSON-RPC.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">2. Deterministic Ordering:</strong> Orders transactions (e.g. FCFS or priority auction).
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">3. Soft Execution:</strong> Executes transactions in memory and returns sub-second soft receipts.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">4. Batch Compression:</strong> Compresses transaction calldata using Brotli/zlib.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">5. L1 Posting:</strong> Submits blob/calldata batches to the L1 Inbox contract.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                  <strong className="text-neutral-900">6. State Root Commitment:</strong> Proposes updated state roots to the L1 SCC contract.
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 sm:col-span-2 md:col-span-1">
                  <strong className="text-neutral-900">7. Bridge Relay:</strong> Coordinates cross-chain message execution between L1 and L2.
                </div>
              </div>
            </div>

            {/* Centralization Risks & Forced Inclusion */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-red-900 font-mono">11.3 Centralization Risks of Single Sequencers</h3>
                <ul className="text-xs space-y-2 text-neutral-600 list-disc list-inside">
                  <li><strong>Single Point of Failure:</strong> If the sequencer server crashes or experiences DDoS, L2 transaction execution halts temporarily.</li>
                  <li><strong>MEV Exploitation:</strong> The sequencer can frontrun, sandwich, or censor arbitrage trades with zero competition.</li>
                  <li><strong>Targeted Censorship:</strong> A centralized sequencer can refuse to include transactions from specific user addresses.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-emerald-900 font-mono">11.5 Censorship Defense: L1 Forced Inclusion</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  To preserve censorship resistance, production rollups implement an L1 <strong>Delayed Inbox</strong> or <code>forceInclusion</code> mechanism.
                </p>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-mono text-[11px] space-y-1">
                  <div>1. User calls <code>DelayedInbox.sendL1ToL2Message()</code> directly on Ethereum L1.</div>
                  <div>2. Sequencer is legally mandated to include it within a grace period (e.g. 24 hours).</div>
                  <div>3. If sequencer refuses, user calls <code>forceInclusion()</code> on L1, which automatically appends the transaction to the canonical rollup chain, bypassing the sequencer completely!</div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 12: Rollup Transaction Lifecycle */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 12</span>
              <span>•</span>
              <span>END-TO-END FLOW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              12. Complete 9-Step Rollup Transaction Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Trace the complete journey of a transaction from the moment a user signs it in their wallet until it achieves immutable Layer 1 cryptographic settlement.
            </p>

            <div className="space-y-3">
              {[
                { step: "1", title: "User Signature & RPC Dispatch", desc: "User signs transaction with private key; wallet dispatches it to the L2 Sequencer JSON-RPC endpoint." },
                { step: "2", title: "Sequencer Ingestion & Validation", desc: "Sequencer verifies ECDSA signature, checks account balance and nonce, and assigns a strict execution sequence number." },
                { step: "3", title: "Soft Execution & Immediate Receipt", desc: "Sequencer executes the transaction in memory, updates local state trie, and emits a sub-second soft receipt (~250ms)." },
                { step: "4", title: "Batch Compression & Aggregation", desc: "Sequencer aggregates hundreds or thousands of transactions, compresses data using Brotli/address indexing, and prepares an L1 blob." },
                { step: "5", title: "Posting to Layer 1 (Data Availability)", desc: "Sequencer publishes the compressed batch to Ethereum L1 via an EIP-4844 blob-carrying transaction to the L1 Inbox contract." },
                { step: "6", title: "State Root Commitment", desc: "Proposer computes the resulting post-state root S_{n+1} and submits it with a staked bond to the L1 State Commitment Chain (SCC)." },
                { step: "7", title: "Dispute / Verification Phase", desc: "Optimistic: 7-day challenge window begins; watchers re-execute to detect fraud. ZK: Prover compiles validity proof & submits to L1 Verifier." },
                { step: "8", title: "Hard Consensus Finality", desc: "Ethereum L1 finalizes the block containing the batch via Casper FFG (2 epochs / ~12.8 mins). Rollup state becomes immutable." },
                { step: "9", title: "L1 Withdrawal Execution (Outbox)", desc: "If the transaction was an L1 withdrawal, user submits a Merkle inclusion proof to the L1 Outbox contract to release locked funds." }
              ].map((item) => (
                <div key={item.step} className="p-3.5 rounded-xl bg-white border border-neutral-200 flex items-start gap-4 text-xs font-mono">
                  <div className="w-7 h-7 rounded-lg bg-amber-600 text-white font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <strong className="text-neutral-900 text-sm">{item.title}</strong>
                    <p className="text-neutral-600 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part 13: Ethereum L2 Ecosystem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 13</span>
              <span>•</span>
              <span>ECOSYSTEM LANDSCAPE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              13. The Ethereum Layer 2 Ecosystem: Arbitrum, Optimism, Polygon & zkSync
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Explore the four dominant Layer 2 protocol frameworks shaping Ethereum scaling today.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Arbitrum */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">13.1 Arbitrum (Offchain Labs)</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Built on the <strong>Nitro</strong> tech stack (compiling Geth inside WebAssembly). Nitro executes EVM natively and compiles to WASM for interactive bisection fraud proofs.
                </p>
                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono space-y-1">
                  <div><strong>Arbitrum One:</strong> Full Rollup posting all data to L1 blobs (maximum security for DeFi).</div>
                  <div><strong>Arbitrum Nova:</strong> AnyTrust chain posting data to an off-chain Data Availability Committee (DAC) for ultra-low fees (gaming, social).</div>
                  <div><strong>Arbitrum Stylus:</strong> Allows writing smart contracts in Rust, C, and C++ alongside Solidity in the same VM.</div>
                </div>
              </div>

              {/* Optimism */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">13.2 Optimism & The Superchain</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Built on the modular <strong>OP Stack</strong> (Bedrock architecture) separating Consensus (op-node) from Execution (op-geth).
                </p>
                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono space-y-1">
                  <div><strong>Superchain:</strong> A standardized, horizontally scalable network of OP Stack chains (OP Mainnet, Base, Zora, Mode, Frax) sharing unified security, bridges, and cross-chain message formats.</div>
                  <div><strong>Cannon:</strong> Fault dispute engine running MIPS inside an on-chain EVM interpreter.</div>
                </div>
              </div>

              {/* Polygon */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">13.3 Polygon 2.0 & Polygon CDK</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Transitioning from sovereign sidechain architecture into an interconnected ZK-powered rollup ecosystem.
                </p>
                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono space-y-1">
                  <div><strong>Polygon PoS:</strong> Flagship sidechain with 100+ validators and Heimdall checkpoints.</div>
                  <div><strong>Polygon CDK (Chain Development Kit):</strong> Framework to deploy modular ZK-rollups.</div>
                  <div><strong>AggLayer (Aggregation Layer):</strong> Unifies cross-chain liquidity across CDK chains via aggregated ZK proofs.</div>
                </div>
              </div>

              {/* zkSync */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-3">
                <h3 className="text-base font-bold text-neutral-900 font-mono">13.4 zkSync Era & The ZK Stack</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  A Type-4 zkEVM built natively with Account Abstraction and hyper-scalable recursive ZK proofs.
                </p>
                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-mono space-y-1">
                  <div><strong>Native Account Abstraction:</strong> Every account is a smart contract with built-in paymasters, session keys, and multi-call batching.</div>
                  <div><strong>ZK Stack:</strong> Framework for deploying interconnected sovereign "Hyperchains" settled via recursive proofs.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 14: Cross-Chain Interoperability */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 14</span>
              <span>•</span>
              <span>INTEROPERABILITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              14. Cross-Chain Interoperability & Asynchronous Message Passing
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Because distinct Layer 2 chains maintain separate state databases and virtual machines, communication between L1 and L2 is inherently <strong>asynchronous</strong>. Synchronous atomic execution across chains is impossible without shared sequencers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">L1-to-L2 Message Passing (Deposits)</div>
                <p className="text-neutral-600 leading-relaxed">
                  User invokes L1 contract &rarr; L1 Bridge records deposit and emits event &rarr; Sequencer reads L1 event &rarr; Sequencer creates a corresponding transaction on L2 (e.g. Arbitrum Retryable Ticket) &rarr; Assets minted on L2.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">L2-to-L1 Message Passing (Withdrawals)</div>
                <p className="text-neutral-600 leading-relaxed">
                  User calls L2 Bridge `burn()` &rarr; L2 appends message to Merkle tree &rarr; Batch committed to L1 &rarr; Dispute period passes (Optimistic) or proof verified (ZK) &rarr; User submits Merkle proof to L1 Outbox to unlock assets.
                </p>
              </div>
            </div>
          </div>

          {/* Part 15: Bridge Architecture & Security */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 15</span>
              <span>•</span>
              <span>BRIDGE SECURITY & INVARIANTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              15. Bridge Architecture, Security Invariants & Audit Vectors
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Cross-chain bridges are the single highest-value targets for exploits in Web3 history. Over <strong>$2.8 billion</strong> has been drained from bridges due to signature forgery, verification bypasses, and state invariant violations.
            </p>

            {/* Invariant Equation */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                15.4 The Fundamental Bridge Security Invariant
              </div>
              <p className="text-neutral-300">
                A bridge is solvent if and only if the synthetic bridged token supply never exceeds the underlying locked collateral:
              </p>
              <div className="p-3 rounded-lg bg-neutral-800 text-amber-300 font-bold text-sm">
                &sum; L2_Bridged_Token_Supply &le; &sum; L1_Locked_Custody_Assets
              </div>
              <p className="text-neutral-400 text-xs">
                Any mint event that violates this invariant causes immediate protocol bankruptcy when users attempt to bridge back to Layer 1.
              </p>
            </div>

            {/* 9 Bridge Vulnerabilities Table */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Vulnerability Vector</th>
                    <th className="p-3">Historical Example</th>
                    <th className="p-3">Root Cause & Architectural Mitigation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. Validator Key Compromise</td>
                    <td className="p-3">Ronin Bridge ($624M)</td>
                    <td className="p-3">5/9 multi-sig keys phished. Mitigation: Use canonical rollup proofs, not off-chain multi-sig.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. Signature Verification Bypass</td>
                    <td className="p-3">Wormhole Bridge ($326M)</td>
                    <td className="p-3">Deprecated `load_instruction_at` allowed forged signatures. Mitigation: Strict verification precompiles.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. Cross-Chain Replay Attack</td>
                    <td className="p-3">Nomad Bridge ($190M)</td>
                    <td className="p-3">Default root set to 0x00, validating all messages. Mitigation: Strict nonce tracking and domain separators.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. Invariant Breach (Fake Mint)</td>
                    <td className="p-3">BNB Chain Bridge ($586M)</td>
                    <td className="p-3">IAVL Merkle leaf forgery allowed unbacked mints. Mitigation: Enforce real-time supply invariants.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. Arbitrary Call Execution</td>
                    <td className="p-3">Poly Network ($611M)</td>
                    <td className="p-3">Relayer contract executed unverified arbitrary calldata. Mitigation: Whitelist trusted calls only.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. Unchecked Fee-on-Transfer</td>
                    <td className="p-3">Defi Bridge Drain</td>
                    <td className="p-3">Bridge recorded gross deposit instead of net received balance. Mitigation: Balance-delta checks.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">7. Delayed Challenge Tampering</td>
                    <td className="p-3">Optimistic Bridge Edge Case</td>
                    <td className="p-3">Relayers executed withdrawals before dispute window passed. Mitigation: Enforce timestamp validation.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">8. Custody Contract Upgrade Exploit</td>
                    <td className="p-3">Various Multi-Sig Hacks</td>
                    <td className="p-3">Malicious logic proxy implementation deployed. Mitigation: 7-day timelocks on proxy upgrades.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">9. Re-entrancy on Token Release</td>
                    <td className="p-3">ERC-777 Token Hook Drain</td>
                    <td className="p-3">Tokens with fallback hooks re-entered bridge withdrawal. Mitigation: OpenZeppelin `ReentrancyGuard`.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Replay Protection Struct */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="text-amber-400 font-bold text-xs uppercase">
                Secure Cross-Chain Message Header Struct
              </div>
              <pre className="text-neutral-300 overflow-x-auto leading-relaxed">
{`struct BridgeMessage {
    uint256 sourceChainId;      // Domain separation: prevents replay across other L2s
    uint256 targetChainId;      // Enforces intended destination execution
    address bridgeContract;     // Target custody contract address
    uint256 nonce;              // Strictly incrementing counter per user
    address sender;             // Original caller on source chain
    address recipient;          // Intended beneficiary on destination chain
    uint256 amount;             // Asset quantity transferred
    bytes32 dataHash;           // Keccak256 hash of arbitrary execution payload
}`}
              </pre>
            </div>
          </div>

          {/* Part 16: L2 Deployment & Testing */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 16</span>
              <span>•</span>
              <span>L2 EVM DIFFERENCES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              16. Smart Contract Engineering for Layer 2: EVM Incompatibilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              While production rollups offer near-total EVM equivalence, subtle opcode behavior differences can cause catastrophic smart contract bugs if not properly accounted for.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">block.number vs ArbSys.arbBlockNumber()</div>
                <p className="text-neutral-600 leading-relaxed">
                  On Arbitrum, <code>block.number</code> returns the underlying Ethereum L1 block number (updating every ~12s). However, Arbitrum generates L2 blocks every 250ms! A contract measuring duration by block counts will run 48x slower than expected. To read actual L2 blocks, query <code>ArbSys(100).arbBlockNumber()</code>.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">Dual-Tier Gas Metering Model</div>
                <p className="text-neutral-600 leading-relaxed">
                  L2 transactions charge two separate gas fees: 1) L2 Execution Gas (CPU and memory consumption on the sequencer), and 2) L1 Calldata/Blob Gas (the cost to publish the transaction data to Ethereum). Contracts must never assume gas prices are static.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">block.coinbase & Mining Opcodes</div>
                <p className="text-neutral-600 leading-relaxed">
                  <code>block.coinbase</code> returns the fee collector address configured by the sequencer, NOT an Ethereum proof-of-work/stake validator. <code>DIFFICULTY</code> (or <code>PREVRANDAO</code>) returns a constant or L1-derived value, not an unbiasable source of randomness.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900">PUSH0 Opcode Support</div>
                <p className="text-neutral-600 leading-relaxed">
                  Solidity 0.8.20 introduced the <code>PUSH0</code> opcode (Shanghai hard fork). While Arbitrum and Optimism support <code>PUSH0</code>, older L2 chains and certain sidechains reverted on this opcode until upgraded. Always verify target chain compiler compatibility in <code>foundry.toml</code>.
                </p>
              </div>
            </div>
          </div>
        </section>

            
        {/* Interactive Simulators Section */}
        <section id="simulators" className="space-y-12">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>HANDS-ON PROTOCOL LABS & SIMULATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive Layer 2 Protocol Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Experiment with dynamic fee economics, interactive bisection dispute games, ZK proof finality timelines, and cross-chain bridge collateral invariants.
            </p>
          </div>

          {/* Simulator 1: Rollup Fee & Throughput Economics Calculator */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Rollup Fee & Throughput Economics Calculator</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Model the impact of EIP-4844 Blob data vs legacy L1 Calldata on per-tx cost and throughput.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPostingMode(postingMode === "blobs" ? "calldata" : "blobs")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    postingMode === "blobs"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-neutral-800 text-neutral-100"
                  }`}
                >
                  Mode: {postingMode === "blobs" ? "EIP-4844 Blobs (Post-Dencun)" : "Legacy Calldata (Pre-Dencun)"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sliders */}
              <div className="space-y-4 md:col-span-1 border-r border-neutral-200/60 pr-0 md:pr-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>L1 Base Fee</span>
                    <span className="text-amber-600">{l1BaseFee} Gwei</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="120"
                    step="5"
                    value={l1BaseFee}
                    onChange={(e) => setL1BaseFee(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>5 Gwei</span>
                    <span>120 Gwei</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Transactions Per Batch</span>
                    <span className="text-amber-600">{batchTxCount.toLocaleString()} txs</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="4000"
                    step="100"
                    value={batchTxCount}
                    onChange={(e) => setBatchTxCount(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>100</span>
                    <span>4,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Compressed Size per Tx</span>
                    <span className="text-amber-600">{txCompressedBytes} bytes</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="150"
                    step="2"
                    value={txCompressedBytes}
                    onChange={(e) => setTxCompressedBytes(Number(e.target.value))}
                    className="w-full accent-amber-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-0.5">
                    <span>12B (ZK diff)</span>
                    <span>150B (Standard)</span>
                  </div>
                </div>
              </div>

              {/* Economic Metrics */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Total Batch Size</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    {((batchTxCount * txCompressedBytes) / 1024).toFixed(1)} KB
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {(batchTxCount * txCompressedBytes).toLocaleString()} raw payload bytes
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Total L1 Gas Cost</div>
                  <div className="text-lg font-mono font-bold text-neutral-900 mt-1">
                    {totalBatchGas.toLocaleString()} gas
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    {postingMode === "blobs" ? "1 blob gas/byte + overhead" : "16 gas/byte + overhead"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 uppercase">Total Batch Cost (L1)</div>
                  <div className="text-lg font-mono font-bold text-amber-700 mt-1">
                    {totalBatchCostEth.toFixed(5)} ETH
                  </div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">
                    ${(totalBatchCostEth * ethPrice).toFixed(2)} USD (@ ${ethPrice})
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-[11px] font-mono text-emerald-800 uppercase font-semibold">Cost Per Transaction</div>
                  <div className="text-xl font-mono font-black text-emerald-900 mt-1">
                    ${costPerTxUsd.toFixed(4)}
                  </div>
                  <div className="text-[10px] text-emerald-700 mt-0.5">
                    {costPerTxEth.toFixed(8)} ETH / tx
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="text-[11px] font-mono text-blue-800 uppercase font-semibold">Throughput Capacity</div>
                  <div className="text-xl font-mono font-black text-blue-900 mt-1">
                    ~{Math.round(theoreticalTps)} TPS
                  </div>
                  <div className="text-[10px] text-blue-700 mt-0.5">
                    vs ~15 TPS on base Ethereum L1
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="text-[11px] font-mono text-amber-800 uppercase font-semibold">Blob Cost Savings</div>
                  <div className="text-xl font-mono font-black text-amber-900 mt-1">
                    {blobSavingsPercent.toFixed(1)}%
                  </div>
                  <div className="text-[10px] text-amber-700 mt-0.5">
                    Fee reduction over legacy calldata
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold">Key Engineering Insight:</span> Under EIP-4844, blobs are decoupled from L1 EVM execution gas. Posting as blobs eliminates the 16 gas/byte calldata tax, allowing rollups to scale throughput to thousands of transactions per second while pushing per-transaction data fees under <strong>$0.01</strong>.
            </div>
          </div>

          {/* Simulator 2: Optimistic Fault Dispute Game (Interactive Bisection) */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
                <h3 className="text-xl font-bold text-neutral-900">Optimistic Fault Dispute Game: Interactive Bisection</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Step through a binary search dispute between a dishonest sequencer and an honest challenger.</p>
              </div>
              <button
                type="button"
                onClick={resetDisputeGame}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Game
              </button>
            </div>

            {/* Bisection Progress Visualizer */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between text-xs font-mono font-semibold text-neutral-700 pb-2 border-b border-neutral-100">
                <span>Dispute Range: [Step {bisectionRange[0]} &rarr; Step {bisectionRange[1]}]</span>
                <span>Current Midpoint: Step {Math.floor((bisectionRange[0] + bisectionRange[1]) / 2)}</span>
                <span className="text-amber-700 font-bold">Round {bisectionRound} of 6</span>
              </div>

              {/* Graphical Step Bar */}
              <div className="relative w-full h-8 bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200">
                <div
                  className="absolute top-0 bottom-0 bg-amber-200 border-x-2 border-amber-500 transition-all duration-300"
                  style={{
                    left: `${(bisectionRange[0] / 64) * 100}%`,
                    width: `${((bisectionRange[1] - bisectionRange[0]) / 64) * 100}%`
                  }}
                />
                <div
                  className="absolute top-0 bottom-0 w-1 bg-red-600 z-10"
                  style={{ left: `${(42 / 64) * 100}%` }}
                  title="Actual Fault Location: Step 42"
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                <span>Step 0 (Valid Start)</span>
                <span className="text-red-600 font-bold">Target Bug: Step 42 (ADD vs SUB)</span>
                <span>Step 64 (Contested State Root)</span>
              </div>

              {/* Actors State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border ${disputeFinished ? "bg-red-50/50 border-red-200" : "bg-neutral-50 border-neutral-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-800">Proposer (Alice - Malicious)</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold">Bond: 10 ETH</span>
                  </div>
                  <div className="mt-2 text-xs text-neutral-600 space-y-1 font-mono">
                    <div>Claimed Step 64 Root: <span className="text-red-700">0xBAD1...77F</span></div>
                    <div>Stance: "All 64 execution steps are completely valid."</div>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${disputeFinished ? "bg-emerald-50/50 border-emerald-200" : "bg-neutral-50 border-neutral-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-neutral-800">Challenger (Bob - Honest)</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Bond: 10 ETH</span>
                  </div>
                  <div className="mt-2 text-xs text-neutral-600 space-y-1 font-mono">
                    <div>Claimed Step 64 Root: <span className="text-emerald-700">0xGOOD...42A</span></div>
                    <div>Stance: "Execution diverged at Step 42 during opcode arithmetic."</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                {!disputeFinished ? (
                  <div className="flex flex-wrap gap-3">
                    {bisectionRange[1] - bisectionRange[0] > 1 ? (
                      <button
                        type="button"
                        onClick={stepBisection}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm"
                      >
                        Perform Bisection Round ({bisectionRange[1] - bisectionRange[0]} steps &rarr; {Math.ceil((bisectionRange[1] - bisectionRange[0]) / 2)} steps)
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={executeOneStepProof}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm animate-pulse"
                      >
                        Execute One-Step Proof on L1 EVM (Single Opcode at Step 42)
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-100/70 border border-emerald-300 text-emerald-950 space-y-2">
                    <div className="font-bold font-mono text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>One-Step Proof Execution Result: Proposer Slashed!</span>
                    </div>
                    <div className="text-xs font-mono leading-relaxed">
                      L1 Contract evaluated opcode at Step 42: Expected ADD (0x10 + 0x05 = 0x15), Proposer claimed SUB (0x0B).
                      <br />
                      <strong>Result:</strong> Alice's 10 ETH bond slashed. Bob receives 5 ETH bounty, 5 ETH burned. State reverted to honest root.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Simulator 3: ZK Validity Proof vs Optimistic Rollup Finality Timeline */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
              <h3 className="text-xl font-bold text-neutral-900">ZK Validity Proof vs Optimistic Rollup Finality Lifecycle</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Compare end-to-end transaction latency, gas verification, and withdrawal finality guarantees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Optimistic Rollup Card */}
              <div className="p-5 rounded-xl bg-amber-50/40 border border-amber-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-neutral-900 text-sm font-mono flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    Optimistic Rollup (e.g., Arbitrum, Optimism)
                  </h4>
                  <span className="text-xs font-mono font-bold text-amber-800">Fraud Proof Model</span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <div className="text-neutral-500 text-[10px]">1. Soft Finality (Sequencer)</div>
                    <div className="text-neutral-900 font-bold">~250 milliseconds</div>
                    <div className="text-[10px] text-neutral-500">Sequencer issues signed receipt in mempool</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <div className="text-neutral-500 text-[10px]">2. L1 Batch Commit (Blob / Calldata)</div>
                    <div className="text-neutral-900 font-bold">~1 to 3 minutes</div>
                    <div className="text-[10px] text-neutral-500">Batch posted to Ethereum L1 blocks</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-100/60 border border-amber-300">
                    <div className="text-amber-900 font-bold text-[10px]">3. Dispute Challenge Window</div>
                    <div className="text-amber-950 font-black text-sm">7 Days (168 Hours)</div>
                    <div className="text-[10px] text-amber-800">Must wait 7 days for canonical L1 bridge withdrawal</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <div className="text-neutral-500 text-[10px]">4. L1 Verification Cost</div>
                    <div className="text-neutral-900 font-bold">0 gas (dispute-free happy path)</div>
                    <div className="text-[10px] text-neutral-500">Only incurs gas if an honest node challenges</div>
                  </div>
                </div>
              </div>

              {/* ZK Rollup Card */}
              <div className="p-5 rounded-xl bg-purple-50/40 border border-purple-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-neutral-900 text-sm font-mono flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                    Zero-Knowledge Rollup (e.g., zkSync, Starknet)
                  </h4>
                  <span className="text-xs font-mono font-bold text-purple-800">Validity Proof Model</span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-white border border-purple-200">
                    <div className="text-neutral-500 text-[10px]">1. Soft Finality (Sequencer)</div>
                    <div className="text-neutral-900 font-bold">~250 milliseconds</div>
                    <div className="text-[10px] text-neutral-500">Instant sub-second user responsiveness</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-purple-200">
                    <div className="text-neutral-500 text-[10px]">2. Proof Generation (GPU/FPGA Cluster)</div>
                    <div className="text-neutral-900 font-bold">~10 to 45 minutes</div>
                    <div className="text-[10px] text-neutral-500">Prover compiles polynomial arithmetic circuit</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-purple-100/60 border border-purple-300">
                    <div className="text-purple-900 font-bold text-[10px]">3. Canonical L1 Hard Finality</div>
                    <div className="text-purple-950 font-black text-sm">Instant Upon L1 Verification (~1 Hour)</div>
                    <div className="text-[10px] text-purple-800">Zero waiting period; verified mathematically</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-purple-200">
                    <div className="text-neutral-500 text-[10px]">4. L1 Verification Cost</div>
                    <div className="text-neutral-900 font-bold">~250,000 - 450,000 gas</div>
                    <div className="text-[10px] text-neutral-500">Fixed pairing check gas cost per batch proof</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 4: Cross-Chain Bridge Lock-and-Mint Invariant Engine */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">Cross-Chain Bridge Lock-and-Mint Invariant Engine</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Test bridge collateral solvency and simulate real-time exploit detection.</p>
              </div>
              <button
                type="button"
                onClick={resetBridge}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Bridge State
              </button>
            </div>

            {/* Invariant Health Banner */}
            <div className={`p-4 rounded-xl border font-mono text-xs flex items-center justify-between ${
              bridgeExploitTriggered
                ? "bg-red-100 border-red-300 text-red-950"
                : "bg-emerald-50 border-emerald-200 text-emerald-950"
            }`}>
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${bridgeExploitTriggered ? "bg-red-600 animate-ping" : "bg-emerald-600"}`}></span>
                <span className="font-bold">
                  {bridgeExploitTriggered ? "CRITICAL ALERT: INVARIANT VIOLATION DETECTED! BRIDGE PAUSED." : "BRIDGE STATUS: 100% FULLY COLLATERALIZED"}
                </span>
              </div>
              <div className="font-bold">
                Invariant: [L2 Supply {bridgeL2Minted} WETH] &le; [L1 Locked {bridgeL1Vault} ETH]
              </div>
            </div>

            {/* Vault Balance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-xs font-mono text-neutral-500 uppercase">Layer 1 Custody Vault Contract</div>
                <div className="text-2xl font-mono font-bold text-neutral-900">{bridgeL1Vault} ETH</div>
                <div className="text-[11px] text-neutral-500">Real ETH deposited on Ethereum Mainnet escrow</div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="text-xs font-mono text-neutral-500 uppercase">Layer 2 Wrapped Token Supply</div>
                <div className="text-2xl font-mono font-bold text-neutral-900">{bridgeL2Minted} WETH</div>
                <div className="text-[11px] text-neutral-500">Synthetic bridged tokens circulating on L2</div>
              </div>
            </div>

            {/* Interaction Controls */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-neutral-700 uppercase">Bridge Operations:</div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={bridgeExploitTriggered}
                  onClick={() => handleBridgeDeposit(20)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all"
                >
                  Deposit & Lock 20 ETH (L1 &rarr; L2)
                </button>

                <button
                  type="button"
                  disabled={bridgeExploitTriggered || bridgeL2Minted < 15}
                  onClick={() => handleBridgeWithdraw(15)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all"
                >
                  Burn & Unlock 15 WETH (L2 &rarr; L1)
                </button>

                <button
                  type="button"
                  disabled={bridgeExploitTriggered}
                  onClick={handleBridgeAttack}
                  className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all"
                >
                  Simulate Exploit: Unbacked Mint of 50 WETH
                </button>
              </div>
            </div>

            {/* Exploit Log if triggered */}
            {bridgeExploitTriggered && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-red-950">
                  <span>Exploit Stopped by Circuit Breaker:</span>
                </div>
                <div>
                  Attacker attempted to call L2 <code>mint(attacker, 50 ether)</code> without corresponding L1 deposit event.
                </div>
                <div>
                  <strong>Invariant Check:</strong> Projected L2 Supply ({bridgeL2Minted + 50} WETH) exceeds L1 Vault ({bridgeL1Vault} ETH).
                  Transaction reverted on-chain with <code>error BridgeInsolvent()</code>.
                </div>
              </div>
            )}
          </div>
        </section>

            
        {/* Hands-On Engineering Labs & Capstone */}
        <section id="lab" className="space-y-16">
          {/* Part 17: Practical Lab */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 17</span>
              <span>•</span>
              <span>PRACTICAL LAB</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              17. Practical Lab: Deploying Smart Contracts on Arbitrum Sepolia
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Step through a complete, production-grade deployment of an L2-optimized smart contract on the Arbitrum Sepolia testnet using Foundry. Learn how to configure network parameters, inspect L1-versus-L2 gas fees, and query native Arbitrum precompiles.
            </p>

            {/* Network Configuration Table */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.2 Arbitrum Sepolia Network Parameters</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Parameter</th>
                      <th className="p-3">Value</th>
                      <th className="p-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Network Name</td>
                      <td className="p-3 text-neutral-800">Arbitrum Sepolia Testnet</td>
                      <td className="p-3">Primary testnet for Arbitrum One</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Chain ID</td>
                      <td className="p-3 text-amber-700 font-bold">421614</td>
                      <td className="p-3">Required for EIP-155 replay protection</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">RPC URL</td>
                      <td className="p-3 text-neutral-800"><code>https://sepolia-rollup.arbitrum.io/rpc</code></td>
                      <td className="p-3">Public JSON-RPC endpoint hosted by Offchain Labs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Block Explorer</td>
                      <td className="p-3 text-neutral-800"><code>https://sepolia.arbiscan.io/</code></td>
                      <td className="p-3">Etherscan-powered explorer with L1 gas analytics</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Currency Symbol</td>
                      <td className="p-3 text-neutral-800">ETH</td>
                      <td className="p-3">Native gas token (18 decimals)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Smart Contract Code: L2Message.sol */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-neutral-900 font-mono">17.4 Contract Implementation: src/L2Message.sol</h3>
                <span className="text-xs font-mono text-neutral-500">Solidity ^0.8.20</span>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ArbSys Interface
 * @notice Precompile at address(100) on Arbitrum providing native L2 chain state
 */
interface ArbSys {
    function arbBlockNumber() external view returns (uint256);
}

/**
 * @title L2Message
 * @dev Demonstrates L2 state persistence, dual block number queries, and gas profiling
 */
contract L2Message {
    address public immutable owner;
    string public currentMessage;
    uint256 public totalUpdates;
    
    // Arbitrum native precompile address
    ArbSys constant ARB_SYS = ArbSys(address(100));

    event MessageUpdated(
        address indexed sender,
        string oldMessage,
        string newMessage,
        uint256 l1BlockNumber,
        uint256 l2BlockNumber,
        uint256 timestamp
    );

    error Unauthorized(address caller);
    error EmptyMessage();

    constructor(string memory initialMessage) {
        owner = msg.sender;
        currentMessage = initialMessage;
    }

    /**
     * @notice Updates the stored message and records both L1 and L2 block numbers
     * @param newMessage The new message string
     */
    function setMessage(string calldata newMessage) external {
        if (bytes(newMessage).length == 0) revert EmptyMessage();
        
        string memory oldMsg = currentMessage;
        currentMessage = newMessage;
        totalUpdates++;

        // Query both L1 block (block.number) and Arbitrum native L2 block (ArbSys)
        uint256 l1Block = block.number;
        uint256 l2Block = getL2BlockNumber();

        emit MessageUpdated(msg.sender, oldMsg, newMessage, l1Block, l2Block, block.timestamp);
    }

    /**
     * @notice Returns actual Arbitrum L2 block number via ArbSys precompile
     * Falls back to block.number if running in a standard local EVM test environment
     */
    function getL2BlockNumber() public view returns (uint256) {
        try ARB_SYS.arbBlockNumber() returns (uint256 l2Block) {
            return l2Block;
        } catch {
            return block.number;
        }
    }
}`}
                </pre>
              </div>
            </div>

            {/* Configuration Files */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-neutral-900 font-mono">17.6.A foundry.toml</h4>
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                  <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">
{`[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc_version = "0.8.20"
optimizer = true
optimizer_runs = 200

[rpc_endpoints]
arbitrum_sepolia = "\${ARBITRUM_SEPOLIA_RPC}"`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-neutral-900 font-mono">17.6.B .env Configuration</h4>
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto">
                  <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">
{`ARBITRUM_SEPOLIA_RPC="https://sepolia-rollup.arbitrum.io/rpc"
PRIVATE_KEY="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
ARBISCAN_API_KEY="YOUR_ARBISCAN_API_KEY"`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Deployment Script */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.7 Deployment Script: script/DeployL2Message.s.sol</h3>
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/L2Message.sol";

contract DeployL2Message is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        L2Message l2Msg = new L2Message("Hello Arbitrum Nitro Layer 2!");
        console.log("L2Message deployed to:", address(l2Msg));
        console.log("Current L2 Block:", l2Msg.getL2BlockNumber());

        vm.stopBroadcast();
    }
}`}
                </pre>
              </div>
            </div>

            {/* CLI Commands */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.8 Foundry Deployment & Interaction Commands</h3>
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-4">
                <div>
                  <div className="text-neutral-400 mb-1"># 1. Compile Smart Contracts</div>
                  <code className="text-amber-400">forge build</code>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1"># 2. Deploy to Arbitrum Sepolia</div>
                  <code className="text-amber-400">
                    forge script script/DeployL2Message.s.sol:DeployL2Message --rpc-url arbitrum_sepolia --broadcast --verify
                  </code>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1"># 3. Read Stored Message using Cast</div>
                  <code className="text-emerald-400">
                    cast call 0xContractAddress "currentMessage()(string)" --rpc-url arbitrum_sepolia
                  </code>
                </div>
                <div>
                  <div className="text-neutral-400 mb-1"># 4. Update Message using Cast</div>
                  <code className="text-emerald-400">
                    cast send 0xContractAddress "setMessage(string)" "Scaling Ethereum with Layer 2!" --rpc-url arbitrum_sepolia --private-key $PRIVATE_KEY
                  </code>
                </div>
              </div>
            </div>

            {/* Arbiscan Observations */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <h3 className="text-base font-bold text-neutral-900 font-mono">17.9 Six Critical Observations on Arbiscan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>1. L2 Gas Fee:</strong> Execution gas consumed on Arbitrum is priced at ~0.1 Gwei.
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>2. L1 Calldata Fee:</strong> Arbiscan displays the exact L1 calldata fee paid for posting bytes.
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>3. Block Numbers:</strong> Note the difference between "L2 Block Number" and "L1 Block Number".
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>4. Sub-Second Confirmation:</strong> Transaction status shows "Confirmed" in ~250ms.
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>5. Batch Inclusion:</strong> After ~2-5 minutes, Arbiscan links to the exact L1 Batch ID.
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200">
                  <strong>6. Verified Source:</strong> Contract source code displays decoded events and ArbSys queries.
                </div>
              </div>
            </div>
          </div>

          {/* Part 18: Advanced L2 Engineering Capstone */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 18</span>
              <span>•</span>
              <span>CAPSTONE PROJECT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              18. Advanced Capstone: Building a Mini Rollup Simulation
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Design and implement a complete modular rollup prototype. Build an off-chain sequencer, a batch compression aggregator, a state trie transition engine, and an on-chain Solidity settlement contract with an interactive dispute game.
            </p>

            {/* Architecture Directory Structure */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">18.1 Capstone Architecture & Directory Layout</h3>
              <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                <pre className="leading-relaxed overflow-x-auto [scrollbar-width:thin]">
{`mini-rollup-simulation/
├── contracts/
│   ├── RollupSettlement.sol       # L1 Inbox, State Commitment Chain & Vault
│   ├── DisputeGame.sol            # Interactive bisection one-step prover
│   └── interfaces/
│       └── IRollupSettlement.sol
├── sequencer/
│   ├── mempool.js                 # Transaction queuing & nonce validation
│   ├── executor.js                # State transition execution engine
│   └── batcher.js                 # Compression & L1 calldata/blob dispatcher
├── merkle/
│   ├── stateTrie.js               # Sparse Merkle Tree account balance engine
│   └── proofGenerator.js          # Merkle inclusion proof generator for exits
├── test/
│   ├── RollupSettlement.t.sol     # Foundry contract tests & dispute verification
│   └── endToEndRollup.test.js     # Full L2-to-L1 withdrawal cycle simulation
└── package.json`}
                </pre>
              </div>
            </div>

            {/* 6 Phases of Implementation */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">18.2 Six Implementation Phases</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 1: State Trie Engine</div>
                  <div className="text-neutral-600">Implement a 256-bit Sparse Merkle Tree storing account balances and compute the root hash deterministic state: <code>root = Hash(L || R)</code>.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 2: Mempool & Sequencer</div>
                  <div className="text-neutral-600">Build an off-chain Node.js sequencer accepting signed transactions, validating nonces, and returning instant soft confirmations.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 3: Batch Aggregator</div>
                  <div className="text-neutral-600">Compress batches of 50-100 transactions using address indexing and encode payloads for L1 calldata submission.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 4: L1 Settlement Contract</div>
                  <div className="text-neutral-600">Write <code>RollupSettlement.sol</code> in Solidity to accept batch commits, log state roots, and enforce bonded proposers.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 5: Interactive Dispute Engine</div>
                  <div className="text-neutral-600">Implement binary search bisection between proposer and challenger, executing the final step inside the L1 contract.</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="text-amber-600 font-bold">Phase 6: Merkle Withdrawal Outbox</div>
                  <div className="text-neutral-600">Enable users to unilaterally exit funds from L1 by submitting Merkle inclusion proofs against finalized state roots.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 19.B: 5 Numerical Problems */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.B</span>
              <span>•</span>
              <span>MATHEMATICAL DERIVATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.B Five Numerical Scaling & Protocol Economics Problems
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Step-by-step mathematical problem solving for Layer 2 protocol architects. Expand each accordion to inspect full algebraic proofs, variables, and step-by-step derivations.
            </p>

            <div className="space-y-4">
              {NUMERICAL_PROBLEMS.map((problem, idx) => {
                const isOpen = openProblemIndex === idx;
                return (
                  <div key={problem.id} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenProblemIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50 transition-all"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                          Problem {idx + 1}
                        </span>
                        <h4 className="text-base font-bold text-neutral-900 mt-0.5">{problem.title}</h4>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="p-5 border-t border-neutral-100 bg-neutral-50/50 space-y-4 text-xs font-mono">
                        <div className="p-4 rounded-xl bg-white border border-neutral-200">
                          <strong className="text-neutral-900 block mb-1">Problem Statement:</strong>
                          <p className="text-neutral-700 leading-relaxed">{problem.question}</p>
                        </div>

                        <div className="space-y-1">
                          <strong className="text-neutral-900 block">Given Variables:</strong>
                          <ul className="list-disc list-inside space-y-0.5 text-neutral-600">
                            {problem.variables.map((v, i) => (
                              <li key={i}>{v}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <strong className="text-neutral-900 block">Step-by-Step Derivation:</strong>
                          <div className="space-y-1.5 p-3.5 rounded-xl bg-neutral-900 text-neutral-200">
                            {problem.steps.map((st, i) => (
                              <div key={i}>{st}</div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold">
                          Final Result: {problem.finalAnswer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Official Answer Key Summary Table */}
            <div className="space-y-3 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">Official Numerical Answer Key</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Problem</th>
                      <th className="p-3">Target Metric</th>
                      <th className="p-3">Exact Derived Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 1</td>
                      <td className="p-3">Rollup Batch Cost per Tx</td>
                      <td className="p-3 font-bold text-emerald-700">0.00000704 ETH (~$0.021/tx)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 2</td>
                      <td className="p-3">Rollup Max Throughput</td>
                      <td className="p-3 font-bold text-emerald-700">2,184.53 TPS (145x L1 expansion)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 3</td>
                      <td className="p-3">State Channel Net Balances</td>
                      <td className="p-3 font-bold text-emerald-700">Alice: 6 ETH, Bob: 14 ETH (&gt;94% gas saved)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 4</td>
                      <td className="p-3">Blob vs Calldata Savings</td>
                      <td className="p-3 font-bold text-emerald-700">99.79% fee reduction ($768/hr down to $1.60/hr)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Problem 5</td>
                      <td className="p-3">Bridge Invariant Assertion</td>
                      <td className="p-3 font-bold text-red-700">Transaction Reverts (Max excess release: 80 ETH)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

            
        {/* Assessment Section */}
        <section id="assessment" className="space-y-16">
          {/* Part 19.A: Senior L2 Architect Interview Questions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.A</span>
              <span>•</span>
              <span>SENIOR ARCHITECT INTERVIEWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.A 25 Senior Layer 2 & Rollup Protocol Architect Interview Questions
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Exhaustive technical scenarios and design questions asked in senior protocol engineering interviews at Offchain Labs, Optimism, Matter Labs, Polygon, and major Web3 venture funds.
            </p>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                type="button"
                onClick={() => setInterviewFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  interviewFilter === "all"
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                All 25 Questions
              </button>
              {Array.from(new Set(INTERVIEW_QUESTIONS.map(q => q.context))).map((ctx) => (
                <button
                  key={ctx}
                  type="button"
                  onClick={() => setInterviewFilter(ctx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    interviewFilter === ctx
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {ctx}
                </button>
              ))}
            </div>

            {/* Interview Question Cards */}
            <div className="space-y-4">
              {filteredInterviews.map((item) => {
                const isExpanded = expandedInterviewId === item.id;
                return (
                  <div key={item.id} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => setExpandedInterviewId(isExpanded ? null : item.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-neutral-50 transition-all"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
                            {item.id.toUpperCase()}
                          </span>
                          <span className="text-neutral-300">•</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                            {item.context}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900">{item.question}</h4>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 mt-1 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {isExpanded && (
                      <div className="p-5 border-t border-neutral-100 bg-neutral-50/50 space-y-4 text-xs font-mono">
                        <div>
                          <strong className="text-neutral-900 block mb-1">Architectural Model Answer:</strong>
                          <p className="text-neutral-700 leading-relaxed bg-white p-4 rounded-xl border border-neutral-200">
                            {item.answer}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-bold">
                          Key Architectural Takeaway: {item.takeaway}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Part 19.C: 20 Multiple-Choice Examination Questions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.C</span>
              <span>•</span>
              <span>CONCEPTUAL CERTIFICATION EXAM</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  Module 19 Examination: Layer 2 & Rollup Scaling
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  20 rigorously constructed multiple-choice questions assessing your mastery of rollup mechanics, data availability, and bridge security.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-neutral-700">
                  Score: {quizScore} / {QUIZ_QUESTIONS.length}
                </span>
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset Exam
                </button>
              </div>
            </div>

            {/* Quiz Questions List */}
            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, qIndex) => {
                const selectedOption = userQuizAnswers[qIndex];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === q.correctAnswer;

                return (
                  <div key={q.id} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
                          Question {qIndex + 1} of {QUIZ_QUESTIONS.length}
                        </span>
                        <h4 className="text-base font-bold text-neutral-900">{q.question}</h4>
                      </div>
                      {isAnswered && (
                        <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full shrink-0 ${
                          isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                        }`}>
                          {isCorrect ? "CORRECT" : "INCORRECT"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIndex) => {
                        let btnStyle = "bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-800";
                        if (isAnswered) {
                          if (optIndex === q.correctAnswer) {
                            btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
                          } else if (optIndex === selectedOption) {
                            btnStyle = "bg-red-50 border-red-500 text-red-950 line-through";
                          } else {
                            btnStyle = "bg-neutral-50 border-neutral-200 text-neutral-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={optIndex}
                            type="button"
                            disabled={isAnswered}
                            onClick={() => handleQuizOptionSelect(qIndex, optIndex)}
                            className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-mono transition-all flex items-start gap-3 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold">
                              {String.fromCharCode(65 + optIndex)}
                            </span>
                            <span className="leading-relaxed">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-700 space-y-1">
                        <strong className="text-neutral-900 block font-sans">Explanation:</strong>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

            
        {/* Tracker & Reference Resources Section */}
        <section id="tracker" className="space-y-16">
          {/* Part 20: Recommended Official Resources */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 20</span>
              <span>•</span>
              <span>PRIMARY LITERATURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              20. Recommended Official Literature & Engineering Documentation
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Continue your mastery of Ethereum scaling and Layer 2 systems architecture by studying the primary engineering specifications and research papers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Ethereum.org Layer 2 Scaling Architecture",
                  desc: "The canonical overview of optimistic rollups, ZK-rollups, state channels, and sidechains.",
                  link: "https://ethereum.org/en/developers/docs/scaling/"
                },
                {
                  title: "Arbitrum Nitro Technical Whitepaper",
                  desc: "Comprehensive specification of Nitro Geth, WASM execution, and interactive bisection fraud proofs.",
                  link: "https://github.com/OffchainLabs/nitro"
                },
                {
                  title: "Optimism OP Stack Specs & Bedrock Architecture",
                  desc: "The modular blueprint for building interconnected Superchain Layer 2 rollups.",
                  link: "https://specs.optimism.io/"
                },
                {
                  title: "zkSync Era Documentation & Type-4 zkEVM",
                  desc: "Deep-dive into native Account Abstraction, boojum prover architecture, and hyperchains.",
                  link: "https://docs.zksync.io/"
                },
                {
                  title: "Polygon Knowledge Hub & AggLayer Architecture",
                  desc: "Specifications for Polygon CDK, zero-knowledge proofs, and cross-chain unified liquidity.",
                  link: "https://docs.polygon.technology/"
                },
                {
                  title: "Ethereum Bridges & Cross-Chain Security Guide",
                  desc: "Vitalik Buterin's security analysis on cross-chain bridges and multi-chain limitations.",
                  link: "https://ethereum.org/en/developers/docs/bridges/"
                }
              ].map((res, i) => (
                <a
                  key={i}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between group space-y-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-neutral-400 group-hover:text-amber-600 transition-colors">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider">Resource {i + 1}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                      {res.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans">{res.desc}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 group-hover:underline inline-flex items-center gap-1">
                    Read Documentation &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Module 19 Summary & Central Engineering Takeaway */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-neutral-100 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold tracking-wide">
              <span>EXECUTIVE SUMMARY</span>
              <span>•</span>
              <span>MODULE 19 COMPLETE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              The Central Engineering Takeaway of Layer 2
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Layer 2 scaling is not an incremental optimization—it is a fundamental architectural paradigm shift that solves the Blockchain Scalability Trilemma. By decoupling high-speed transaction execution from consensus and data availability, rollups scale Ethereum horizontally while inheriting 100% of its cryptographic security and censorship resistance.
            </p>
            <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 text-xs font-mono text-neutral-200 space-y-2">
              <div className="text-amber-400 font-bold uppercase text-[11px]">Key Architectural Maxims:</div>
              <div>&bull; <strong>Rollups &ne; Sidechains:</strong> Rollups inherit L1 security; sidechains depend strictly on their own independent validator set.</div>
              <div>&bull; <strong>Blobs Decouple Costs:</strong> EIP-4844 frees rollups from competing against L1 DeFi for calldata block space.</div>
              <div>&bull; <strong>Interactive Bisection Minimizes L1 Gas:</strong> Narrows disputes to 1 single opcode instruction evaluated on L1.</div>
              <div>&bull; <strong>Bridge Invariants are Sacred:</strong> Bridged supply on L2 must never exceed locked collateral on L1.</div>
            </div>
          </div>

          {/* Interactive Checklist Persistent Progress Tracker */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Progress Tracker</span>
                <h3 className="text-xl font-bold text-neutral-900">Module 19 Mastery Checklist</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Track your progress across all 28 core objectives. Persisted locally.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-base font-mono font-bold text-neutral-900">
                    {completedChecklistCount} / {CHECKLIST_ITEMS.length}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">
                    {Math.round((completedChecklistCount / CHECKLIST_ITEMS.length) * 100)}% Complete
                  </div>
                </div>
                <button
                  type="button"
                  onClick={resetChecklist}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset Checklist
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
              <div
                className="h-full bg-amber-600 transition-all duration-300"
                style={{ width: `${(completedChecklistCount / CHECKLIST_ITEMS.length) * 100}%` }}
              />
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {CHECKLIST_ITEMS.map((item) => {
                const isChecked = !!completedChecklist[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      isChecked
                        ? "bg-amber-50/60 border-amber-300 text-amber-950 font-medium"
                        : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                      isChecked ? "bg-amber-600 border-amber-600 text-white" : "border-neutral-300 bg-white"
                    }`}>
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span className="leading-relaxed">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Module Navigation Footer */}
          <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 pb-12">
            <Link
              to="/learning/blockchain/security-vulnerabilities"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100 font-mono text-xs font-bold transition-all text-center"
            >
              &larr; Previous: Module 18 (Security & Auditing)
            </Link>
            <Link
              to="/learning/blockchain/oracles-chainlink"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-600 text-white hover:bg-amber-700 font-mono text-xs font-bold transition-all text-center shadow-sm"
            >
              Next: Module 20 (Oracles & Chainlink) &rarr;
            </Link>
          </div>
        </section>

          </div>
        )}
      </main>
    </div>
  );
}
