import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Wallet,
  Shield,
  Cpu,
  Terminal,
  BookOpen,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  ListChecks,
  FileCheck,
  Share2,
  RefreshCw,
  Lock,
  Unlock,
  Flame,
  Snowflake
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// 26 Checklist items for Module 11 (Wallets, Keys & Transaction Signing)
const CHECKLIST_ITEMS = [
  "11.1 Understand the architecture and operation of blockchain wallets as cryptographic identity management systems",
  "11.2 Differentiate traditional centralized banking accounts from non-custodial cryptographic blockchain accounts",
  "11.3 Master the 9-stage wallet execution lifecycle from secure entropy to blockchain state commitment",
  "11.4 Clearly distinguish the definitions of Wallet, Account, Address, Private Key, Public Key, Mnemonic, and Seed",
  "11.5 Analyze custodial wallet architectures, institutional custody providers, and centralized exchange trust models",
  "11.6 Analyze non-custodial wallet architectures, user key sovereignty, and private key recovery responsibility",
  "11.7 Differentiate hot wallets (browser, mobile) from cold wallets (hardware, air-gapped devices) and trade-offs",
  "11.8 Diagram internal wallet architecture: KMS, Account Manager, Transaction Builder, Signing Engine, RPC Client",
  "11.9 Compare client-side signer security with server-side custodial HSM key management infrastructures",
  "11.10 Master private key mathematics on secp256k1 (256-bit scalar, valid range 1 <= d < n, 64-char hex format)",
  "11.11 Calculate public key point multiplication Q = dG and analyze the 65-byte uncompressed public key structure",
  "11.12 Generate Ethereum addresses via Keccak-256 hashing and the last20bytes(Keccak256(Q)) algorithm",
  "11.13 Understand the critical mathematical difference between Keccak-256 and standardized NIST SHA3-256",
  "11.14 Explain BIP-39 mnemonic generation: entropy sizes, SHA-256 checksums, and 11-bit wordlist mapping",
  "11.15 Derive 512-bit cryptographic seeds using PBKDF2-HMAC-SHA512 with 2048 iterations and optional passphrases",
  "11.16 Implement BIP-32 Hierarchical Deterministic (HD) tree derivations, master chain codes, and child key formulas",
  "11.17 Contrast non-hardened derivations (indexes 0 to 2^31-1, xpub leak risks) with hardened derivations (indexes 2^31 to 2^32-1)",
  "11.18 Parse standard BIP-44 multi-account derivation paths: m / purpose' / coin_type' / account' / change / address_index",
  "11.19 Contrast Externally Owned Accounts (EOAs, private key controlled) with Contract Accounts (bytecode controlled)",
  "11.20 Compute and validate EIP-55 mixed-capitalization checksummed Ethereum addresses to prevent typo errors",
  "11.21 Deconstruct Ethereum EIP-1559 Type 2 transaction payloads and the ECDSA signature components (r, s, v/yParity)",
  "11.22 Distinguish off-chain message signing (personal_sign, SIWE) from state-mutating transaction signing (eth_sendTransaction)",
  "11.23 Diagram MetaMask internal extension architecture: injected provider, permission manager, keyring, approval UI",
  "11.24 Master the EIP-1193 provider standard: provider.request(), eth_requestAccounts, accountsChanged, chainChanged",
  "11.25 Analyze transaction nonces, sequencing, mempool queueing, replacement transactions (speed-up/cancel), and nonce gaps",
  "11.26 Practical Lab: Build a React + ethers.js v6 dApp to connect MetaMask, sign messages, and broadcast a Sepolia test transaction"
];

// 20 Conceptual Assessment Questions
const CONCEPTUAL_QUESTIONS = [
  {
    id: 1,
    question: "Why does a blockchain wallet not literally store or contain cryptocurrency?",
    options: [
      "Because cryptocurrency is stored inside browser cache cookies and erased upon closing the application",
      "Because account balances exist purely as state records on the distributed blockchain ledger; a wallet only manages the private keys that cryptographically authorize state transitions",
      "Because Ethereum nodes store all private keys in a centralized validator registry",
      "Because smart contracts hold custody of all native Ether, while wallets only store ERC-20 token balances"
    ],
    correct: 1,
    explanation: "Cryptocurrency is never held within a wallet file or device. All balances are global state recorded across blockchain nodes. A wallet stores the cryptographic private keys required to generate digital signatures that authorize spending or calling contracts from that account."
  },
  {
    id: 2,
    question: "What is the mathematical definition and valid range of an Ethereum private key on the secp256k1 curve?",
    options: [
      "Any arbitrary 128-bit integer between 0 and 2^128 - 1",
      "A 256-bit integer d uniformly selected within the range 1 <= d < n, where n is the order of the secp256k1 curve",
      "The Keccak-256 hash of the user's password with no range restrictions",
      "A 20-byte hexadecimal value formatted with an 0x prefix"
    ],
    correct: 1,
    explanation: "An Ethereum private key is a positive 256-bit scalar integer d satisfying 1 <= d < n, where n is the order of the secp256k1 group (approximately 1.15792 x 10^77). Selecting a key outside this range or using insecure RNG creates invalid or vulnerable keys."
  },
  {
    id: 3,
    question: "How is an Ethereum public address derived from an uncompressed secp256k1 public key point Q?",
    options: [
      "Address = SHA256(Q) truncated to the first 32 bytes",
      "Address = last20bytes(Keccak256(Q_x || Q_y)), taking the last 20 bytes of the Keccak-256 hash of the 64-byte uncompressed coordinates",
      "Address = RIPEMD160(SHA256(Q)) with an 0x04 prefix",
      "Address = PBKDF2(Q, salt, 2048, 20)"
    ],
    correct: 1,
    explanation: "An uncompressed public key consists of 0x04 || X (32 bytes) || Y (32 bytes). The 0x04 prefix is removed, leaving 64 bytes of coordinate data. Computing Keccak-256 over these 64 bytes and taking the final 20 bytes yields the 40-character hexadecimal Ethereum address."
  },
  {
    id: 4,
    question: "Why does Ethereum use Keccak-256 rather than standardized NIST SHA3-256 for address generation and hashing?",
    options: [
      "Ethereum uses Keccak-256 because it was adopted in 2014 before NIST finalized the SHA-3 standard in 2015 with modified padding parameters",
      "Keccak-256 produces 512-bit hashes while NIST SHA3-256 only produces 160-bit outputs",
      "NIST SHA3-256 cannot be computed inside EVM bytecode",
      "Keccak-256 is an asymmetric encryption cipher whereas SHA-3 is symmetric"
    ],
    correct: 0,
    explanation: "Ethereum adopted Keccak-256 during its inception in 2014-2015 based on the original submission to the SHA-3 competition. When NIST standardized SHA-3 (FIPS 202) in August 2015, they altered the internal domain separation padding. Ethereum preserved the original Keccak padding for backward compatibility."
  },
  {
    id: 5,
    question: "In the BIP-39 standard, how many checksum bits are appended to a 128-bit initial entropy value to produce a 12-word mnemonic phrase?",
    options: [
      "8 bits (CS = ENT / 16)",
      "4 bits (CS = ENT / 32, resulting in 128 + 4 = 132 bits, divided into twelve 11-bit word indices)",
      "12 bits (one bit per word)",
      "16 bits (two bytes of SHA-256)"
    ],
    correct: 1,
    explanation: "Under BIP-39, the checksum length is ENT / 32. For 128 bits of entropy: 128 / 32 = 4 checksum bits from the first nibble of SHA-256(entropy). 128 + 4 = 132 bits total. 132 / 11 bits per word = exactly 12 words."
  },
  {
    id: 6,
    question: "What cryptographic algorithm transforms a BIP-39 mnemonic phrase and optional salt into a 512-bit master seed?",
    options: [
      "AES-256-GCM with 10,000 rounds",
      "PBKDF2 using HMAC-SHA512, 2048 iterations, with password = mnemonic and salt = 'mnemonic' + optional passphrase",
      "Scrypt with N=16384, r=8, p=1",
      "Bcrypt with work factor 14"
    ],
    correct: 1,
    explanation: "BIP-39 specifies PBKDF2-HMAC-SHA512 with 2,048 iterations. The password is the normalized UTF-8 mnemonic phrase, and the salt is the string literal 'mnemonic' concatenated with the user's optional 13th/25th passphrase."
  },
  {
    id: 7,
    question: "What is the crucial security benefit of hardened child key derivation in BIP-32 HD wallets?",
    options: [
      "Hardened keys use quantum-resistant lattice encryption rather than elliptic curves",
      "Hardened derivation prevents an attacker who discovers an extended public key (xpub) and one child private key from mathematically deriving the parent master private key",
      "Hardened keys can be used across multiple blockchains simultaneously without changing coin_type",
      "Hardened derivation compresses 65-byte public keys into 32-byte hash digests"
    ],
    correct: 1,
    explanation: "In non-hardened derivation, if an attacker obtains the parent extended public key (xpub) and any child private key, the chain code allows the attacker to calculate the parent private key, compromising the entire wallet. Hardened derivation (indexes >= 2^31) uses parent private keys directly in the HMAC, breaking this vulnerability."
  },
  {
    id: 8,
    question: "What do the components of the standard Ethereum BIP-44 derivation path 'm/44'/60'/0'/0/0' represent?",
    options: [
      "Master / BIP-44 purpose / Ethereum coin type / Account 0 / External receiving chain / Address index 0",
      "Master / Gas limit / Block number / Transaction nonce / Contract address / Signature",
      "Master / Mainnet chain ID / Gas price / Nonce / EOA identifier / Shard index",
      "Master / EIP-1559 / ETH currency / Stake validator / Sub-account / Token ID"
    ],
    correct: 0,
    explanation: "In BIP-44: m = master key; 44' = standard purpose; 60' = registered SLIP-0044 coin type for Ethereum; 0' = account index (hardened); 0 = external chain (receiving addresses); 0 = first generated address index."
  },
  {
    id: 9,
    question: "How does an Externally Owned Account (EOA) differ fundamentally from an Ethereum Contract Account?",
    options: [
      "EOAs cannot hold native ETH, whereas Contract Accounts can hold both ETH and ERC-20 tokens",
      "EOAs are controlled by a private key and initiate transactions; Contract Accounts have code, storage, no private key, and execute only when called",
      "Contract Accounts pay zero gas fees when executing functions",
      "EOAs have deterministic addresses based on CREATE2, while Contract Accounts use secp256k1 public keys"
    ],
    correct: 1,
    explanation: "EOAs are controlled by cryptographic private keys, possess a balance and nonce, and can initiate transactions by broadcasting signed payloads. Contract accounts have associated EVM bytecode and storage slots, no private key, and only execute state changes when called by an EOA or another contract."
  },
  {
    id: 10,
    question: "What is the purpose of EIP-55 mixed-capitalization checksum encoding on Ethereum addresses?",
    options: [
      "It encrypts the recipient address so only the sender can read it on-chain",
      "It provides error detection by capitalising characters based on the Keccak-256 hash of the lowercase address string, preventing funds from being sent to mistyped addresses",
      "It enables smart contract addresses to bypass gas refund caps",
      "It binds the Ethereum address to a specific ENS name registry"
    ],
    correct: 1,
    explanation: "EIP-55 converts an address to lowercase, computes its Keccak-256 hash, and capitalizes hex letters (a-f) if the corresponding nibble in the hash is >= 8. Any single mistyped character will invalidate the checksum with 99.986% probability."
  },
  {
    id: 11,
    question: "What are the three core digital signature components (r, s, v) generated by ECDSA on secp256k1?",
    options: [
      "r = ephemeral curve point x-coordinate, s = signature proof scalar, v = recovery identifier (y-parity)",
      "r = random gas price, s = sender balance, v = verified transaction hash",
      "r = recipient address, s = smart contract bytecode, v = version identifier",
      "r = RLP encoding length, s = salt, v = validator signature"
    ],
    correct: 0,
    explanation: "In ECDSA: r is the x-coordinate of the ephemeral elliptic curve point R = kG (modulo n); s is the signature proof scalar s = k^-1 * (z + r*d) mod n; v (or yParity) is the recovery identifier (0 or 1, or 27/28) that allows ecrecover to disambiguate which of the curve points corresponds to the public key."
  },
  {
    id: 12,
    question: "What is the primary difference between signing a message (personal_sign) and signing a transaction (eth_sendTransaction)?",
    options: [
      "Message signing costs 21,000 gas, whereas transaction signing is free",
      "Message signing proves cryptographic identity or intent off-chain without spending gas or mutating ledger state; transaction signing authorizes an EVM execution that consumes gas and changes blockchain state",
      "Transaction signing only works on testnets, while message signing works on mainnet",
      "Message signing requires a hardware wallet, while transaction signing can only be done in software"
    ],
    correct: 1,
    explanation: "Off-chain message signing (personal_sign, EIP-712, SIWE) produces a signature over an arbitrary text or structured typed digest; it never touches the mempool and incurs zero gas. Transaction signing constructs and authorizes a payload intended for network broadcast and state mutation, requiring gas fees."
  },
  {
    id: 13,
    question: "How does an injected browser wallet (such as MetaMask) provide Ethereum capabilities to a web application under EIP-1193?",
    options: [
      "It uploads the user's private key directly into the website's localStorage",
      "It injects an Ethereum Provider object into window.ethereum that exposes an asynchronous request({ method, params }) API",
      "It creates an SSH tunnel directly from the user's computer to the validator node",
      "It recompiles the website's JavaScript bundle with Solidity compiler tools"
    ],
    correct: 1,
    explanation: "EIP-1193 standardizes the wallet provider interface injected into browser contexts (window.ethereum). DApps interact with the wallet through provider.request({ method, params }). The wallet never exposes private keys to the web page."
  },
  {
    id: 14,
    question: "What is the primary role of an Ethereum account transaction nonce?",
    options: [
      "It acts as a random salt to encrypt transaction calldata",
      "It enforces sequential transaction execution order from an EOA and prevents transaction replay attacks on the same network",
      "It counts how many tokens an account has minted",
      "It defines the maximum amount of gas an account can spend in a single block"
    ],
    correct: 1,
    explanation: "An account nonce is a strictly incrementing counter representing the number of transactions sent from that address. Nodes process transactions in strict sequential nonce order (0, 1, 2...). A transaction cannot be executed twice with the same nonce, preventing replay attacks."
  },
  {
    id: 15,
    question: "What occurs if an account submits a transaction with nonce 12 while its current on-chain nonce is 10?",
    options: [
      "The transaction immediately executes and increments the nonce to 13",
      "The transaction enters the node mempool and remains pending in a 'nonce gap' until transaction with nonce 10 and 11 are mined",
      "The transaction is permanently deleted and the account is slashed",
      "The blockchain automatically generates dummy transactions to fill nonces 10 and 11"
    ],
    correct: 1,
    explanation: "A missing nonce creates a 'nonce gap'. Nodes hold transactions with future nonces in their pending transaction pool (mempool), but validators cannot include them in a block until all preceding nonces (10 and 11) have executed."
  },
  {
    id: 16,
    question: "How can a user replace or cancel a pending transaction that is stuck in the mempool due to low gas fees?",
    options: [
      "Call the Ethereum foundation helpdesk to purge the transaction",
      "Submit a new transaction from the same address with the EXACT same nonce and at least a 10% higher maxPriorityFeePerGas / maxFeePerGas",
      "Delete the browser extension and reinstall it",
      "Send a transaction with nonce = nonce + 1"
    ],
    correct: 1,
    explanation: "Under Geth/EVM mempool rules, a node replaces a pending transaction if a new transaction arrives with the identical sender address and nonce, provided the replacement offers at least a 10% higher priority fee. To cancel, users send a 0 ETH transfer to themselves with the same nonce."
  },
  {
    id: 17,
    question: "What is the difference between transaction block inclusion and transaction finality in Ethereum Proof-of-Stake?",
    options: [
      "There is no difference; once a block is produced, it can never be changed",
      "Block inclusion means a transaction is in a proposed block that could theoretically be re-organized; finality occurs when Casper FFG reaches 2/3 validator attestations across two checkpoint epochs (~12.8 minutes)",
      "Block inclusion requires 10 confirmations, while finality requires 1,000 confirmations",
      "Finality only applies to Layer 2 rollups"
    ],
    correct: 1,
    explanation: "Under Ethereum's Gasper PoS consensus, a block is included immediately by a proposer. However, probabilistic reorgs are possible until Casper FFG justifies and finalizes the epoch. Finality requires two consecutive justified epochs (~12.8 minutes), making reversal economically unviable."
  },
  {
    id: 18,
    question: "How do hardware wallets (such as Ledger or Trezor) physically isolate and protect private keys from host computer malware?",
    options: [
      "They store private keys in the cloud and stream encrypted signatures over Bluetooth",
      "They store private keys inside a certified Secure Element / microcontroller, perform cryptographic signing entirely on-device, and never export private keys over USB or Bluetooth",
      "They change the user's private key every 60 seconds",
      "They require the host operating system to store the key in RAM during signing"
    ],
    correct: 1,
    explanation: "Hardware wallets isolate the private key in a dedicated tamper-resistant Secure Element. The host computer transmits unsigned transaction data to the device; the device displays details on its independent screen for physical button confirmation, signs internally, and returns only the signature."
  },
  {
    id: 19,
    question: "What is the critical security danger of granting 'unlimited token approval' (type(uint256).max) to a decentralized application contract?",
    options: [
      "It automatically drains the user's native ETH balance",
      "If the smart contract contains an exploit, backdoor, or admin key compromise, the attacker can transfer all approved tokens out of the user's wallet without further authorization",
      "It invalidates the user's BIP-39 recovery phrase",
      "It increases the gas fee of all future transactions by 10x"
    ],
    correct: 1,
    explanation: "An ERC-20 approval (allowance) grants a spender contract permission to call transferFrom(user, ...). If users approve type(uint256).max, any subsequent vulnerability or compromise in that contract allows attackers to drain the user's entire token balance at any point in the future."
  },
  {
    id: 20,
    question: "What is the 'Address Poisoning' phishing attack in blockchain wallets?",
    options: [
      "An attacker sends 0-value token transfers from a spoofed vanity address that shares the same prefix and suffix as the victim's frequent contacts, hoping the victim copies it from transaction history",
      "A virus that corrupts the memory of hardware wallet screens",
      "A malicious smart contract that permanently locks an address from receiving Ether",
      "An automated bot that floods Ethereum RPC nodes with invalid signatures"
    ],
    correct: 0,
    explanation: "In address poisoning, attackers generate vanity addresses that match the first and last 4-6 characters of addresses the victim transacts with, and send 0-value transactions to pollute their transaction history. If the victim carelessly copies the address from their wallet history, funds are sent to the attacker."
  }
];

// 12 Advanced Senior Web3 Architect Interview Questions
const INTERVIEW_QUESTIONS = [
  {
    id: 1,
    question: "How would you architect a high-security, high-throughput custody infrastructure for a tier-1 cryptocurrency exchange?",
    answer: "A production institutional custody system employs a multi-tiered architecture: (1) Hot Wallet Tier: Automated signer running in secure cloud VPC, connected to Hardware Security Modules (HSMs) or AWS KMS with strict rate limits, IP whitelisting, and automated anomaly detection, holding < 5% of total reserves. (2) Warm Wallet Tier: Multi-party computation (MPC) or multi-signature setups (e.g. 3-of-5 Gnosis Safe) requiring approvals from risk operations teams for daily rebalancing. (3) Cold Storage Tier: 100% air-gapped hardware signing ceremonies in geo-distributed vaults using M-of-N Shamir Secret Sharing or multisig, holding 95%+ of assets. (4) Segregated omnibus accounts and real-time Merkle-tree Proof of Reserves."
  },
  {
    id: 2,
    question: "How can a web3 dApp authenticate users securely without storing private keys or passwords on its backend?",
    answer: "Using Sign-In with Ethereum (EIP-4361 / SIWE): (1) User connects wallet via EIP-1193 provider. (2) Client requests a cryptographically random, server-generated CSRF nonce and timestamp from the backend API. (3) Client formats a standardized EIP-4361 text message containing domain, address, URI, version, chainId, nonce, and expiration. (4) User signs message via `personal_sign`. (5) Backend verifies signature using `ethers.verifyMessage(message, signature)` and asserts: signature is valid, recovered address matches expected account, nonce matches active session and has not expired, domain matches the server. (6) Backend issues a secure, httpOnly JWT session."
  },
  {
    id: 3,
    question: "Explain the mathematical difference between Keccak-256 and NIST SHA3-256, and why mixing them produces critical vulnerabilities in Ethereum systems.",
    answer: "Both Keccak-256 and SHA3-256 share the underlying Keccak sponge construction with permutation width 1600 (rate r=1088, capacity c=512). However, NIST introduced domain separation padding into FIPS 202: SHA3-256 appends the bit string '01' to the message before multi-rate padding (yielding pad 0x06), whereas Keccak-256 appends byte 0x01 directly. Consequently, Keccak256(x) != SHA3-256(x). In Ethereum: All EVM opcodes (KECCAK256 / 0x20), address generation, storage slot mappings, and ECDSA transaction digests use Keccak-256. If off-chain code mistakenly uses a standard SHA3-256 library, derived addresses and hash preimages will completely mismatch on-chain state."
  },
  {
    id: 4,
    question: "What is an extended private key (xprv) vs. extended public key (xpub) in BIP-32, and why must xpub never be leaked alongside a non-hardened child private key?",
    answer: "An extended key appends a 32-byte chain code to a 32-byte key: xprv = (k, c), xpub = (K, c). With xpub, anyone can derive all non-hardened child public keys without having the private key. However, in non-hardened derivation: Child private key k_i = parent_private_key + HMAC-SHA512(xpub, i)_L mod n. If an attacker learns xpub (which contains the chain code) AND compromises any single non-hardened child private key k_i, they can compute: parent_private_key = k_i - HMAC(xpub, i)_L mod n. This immediately compromises the root parent private key and all other accounts derived from it. Hardened derivation prevents this by using private keys in the HMAC."
  },
  {
    id: 5,
    question: "Walk through the exact mathematical steps of generating an Ethereum address from an initial 128-bit random seed.",
    answer: "Step 1: 128-bit entropy + 4-bit SHA256 checksum -> 132 bits -> split into 12 chunks of 11 bits -> 12 BIP-39 words. Step 2: PBKDF2-HMAC-SHA512(words, 'mnemonic' + passphrase, 2048 rounds) -> 512-bit seed. Step 3: HMAC-SHA512('Bitcoin seed', seed) -> 32-byte master private key + 32-byte chain code. Step 4: BIP-44 hardened child derivation m/44'/60'/0'/0/0 -> derived 256-bit scalar private key d. Step 5: Elliptic curve point multiplication Q = d * G on secp256k1 -> uncompressed public key Q = (0x04 || X[32] || Y[32]). Step 6: Strip 0x04 prefix -> hash remaining 64 bytes with Keccak-256. Step 7: Take the last 20 bytes of hash digest. Step 8: Apply EIP-55 checksum capitalization."
  },
  {
    id: 6,
    question: "What are the structural fields of an EIP-1559 Type 2 transaction, and how is the transaction hash computed prior to signing?",
    answer: "An EIP-1559 transaction is defined by type prefix 0x02. Its unsigned payload is an RLP-encoded sequence: `0x02 || RLP([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList])`. The signing digest is `Keccak256(0x02 || RLP([...]))`. The signer computes ECDSA over this digest using secp256k1, generating (yParity, r, s). The finalized signed transaction is serialized as: `0x02 || RLP([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, yParity, r, s])`. The transaction hash broadcast to the network is `Keccak256(signed_raw_transaction)`."
  },
  {
    id: 7,
    question: "How do you handle race conditions and out-of-order execution when submitting multiple concurrent transactions from the same account in an automated backend?",
    answer: "Submitting multiple transactions from a single EOA requires strict off-chain nonce synchronization: (1) Local In-Memory Nonce Mutex: Maintain an atomic nonce counter in Redis or a relational database with `SELECT ... FOR UPDATE` locks. Do not query `eth_getTransactionCount` on every call, as pending mempool transactions introduce latency and inconsistencies across load-balanced RPC nodes. (2) Nonce Gap Remediation: If a transaction fails or is rejected, subsequent nonces stall. Implement an automated watcher that detects stuck nonces (> 60 seconds) and automatically broadcasts a replacement transaction (speed-up with 15% higher gas or 0 ETH self-transfer cancel) to unblock the pipeline. (3) Multi-EOA Pooling: For enterprise throughput, distribute transactions across a pool of rotating worker accounts."
  },
  {
    id: 8,
    question: "What is Account Abstraction (ERC-4337), and how does it fundamentally change wallet key management and transaction validation?",
    answer: "ERC-4337 eliminates the dependency on externally owned accounts (EOAs) and ECDSA hardcoded protocol rules without requiring consensus-layer hard forks. Key shifts: (1) Smart Contract Accounts: Every wallet is a smart contract implementing `IAccount`. (2) UserOperations: Instead of transactions, users sign `UserOperation` structs sent to an alternative peer-to-peer mempool. (3) Bundlers: Specialized actors bundle UserOps and submit them to a singleton `EntryPoint.sol` contract. (4) Custom Validation: Contracts can validate signatures using arbitrary cryptography (WebAuthn / Passkeys, secp256r1, BLS, multisig, session keys). (5) Paymasters: Sponsoring gas fees (gasless transactions or paying with ERC-20 stablecoins)."
  },
  {
    id: 9,
    question: "How does WalletConnect v2 establish an end-to-end encrypted session between a desktop dApp and a mobile wallet?",
    answer: "WalletConnect v2 uses symmetric encryption over a decentralized relay network: (1) Pairing URI: DApp generates an ephemeral X25519 keypair and creates a pairing URI containing a topic ID, handshake topic, and public key, displayed as a QR code. (2) Handshake: Mobile wallet scans QR code, generates its own X25519 keypair, and transmits its public key to the relay server under the handshake topic. (3) Diffie-Hellman Key Exchange: Both client and wallet compute a shared symmetric encryption key via ECDH (X25519) and derive encryption keys with HKDF. (4) JSON-RPC Relay: All subsequent communication (session proposals, transaction requests, approvals) is encrypted using ChaCha20-Poly1305. The Waku/Relay server acts purely as a dumb message router and cannot decrypt payloads."
  },
  {
    id: 10,
    question: "How would you design a robust wallet connection manager in React that handles multiple wallet providers (EIP-6963), chain switching, and disconnections gracefully?",
    answer: "Implementation architecture: (1) EIP-6963 Multi-Injected Provider Discovery: Listen for `eip6963:announceProvider` events to discover all installed browser wallets (MetaMask, Coinbase, Rabby, Brave) simultaneously, avoiding `window.ethereum` conflict collisions. (2) Standardized Provider Interface: Wrap providers in a unified adapter (or use Wagmi / Viem). (3) Active State Listeners: Bind listeners for `accountsChanged` (if empty, trigger disconnect; else update active signer) and `chainChanged` (parse hex chainId, if mismatch with supported chains, trigger `wallet_switchEthereumChain` modal, reload state). (4) Persistence: Store only the last connected provider UUID in localStorage, never store private keys or addresses as truth."
  },
  {
    id: 11,
    question: "What is 'Blind Signing' in hardware wallets, and what architectural solutions have been introduced to mitigate it?",
    answer: "Blind signing occurs when a hardware wallet displays only raw, unparsed hexadecimal bytecode (calldata) and contract addresses, requiring the user to approve a transaction without understanding what function is being executed, which assets are being transferred, or who the ultimate recipient is. Mitigations: (1) Clear Signing / ABI Decoding: Modern hardware wallets (e.g. Ledger OS, Trezor Firmware) incorporate on-device ABI parsers that decode ERC-20 transfers, Uniswap swaps, and OpenSea orders, displaying human-readable values. (2) EIP-712 Typed Data: Structured signing digests where parameter types, domains, and values are validated and visually displayed. (3) Smart Contract Metadata Registries: Verified contract source registries that allow hardware devices to verify target contract identities."
  },
  {
    id: 12,
    question: "How does a BIP-39 passphrase (the '25th word') work mathematically, and what are its trade-offs in recovery architectures?",
    answer: "In BIP-39, the passphrase is not an encryption key for the mnemonic; it is appended to the salt during PBKDF2 seed derivation: `Salt = 'mnemonic' + user_passphrase`. Mathematical consequence: Any passphrase—even an accidental typo or blank space—produces a mathematically valid, completely different 512-bit seed and an entirely different hierarchy of derived accounts. Benefits: (1) Plausible deniability: Users can keep a small decoy balance on the unpassphrased wallet and main funds on the passphrased wallet. (2) Physical theft protection: If a thief finds the written 24-word recovery sheet, they cannot access funds without the unwritten passphrase. Trade-off: If the user forgets or mistypes even one character of the passphrase, the funds are permanently unrecoverable, as no tool can verify whether a passphrase was 'correct'."
  }
];

export default function BlockchainWallets() {
  const navigate = useNavigate();
  useSafeBack();

  // Tab State: 'theory' | 'interactive' | 'labs' | 'quiz' | 'checklist'
  const [activeTab, setActiveTab] = useState("theory");

  // Checklist State with LocalStorage Persistence
  const [completedItems, setCompletedItems] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m11_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = (idx) => {
    setCompletedItems((prev) => {
      const next = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem("prepspaces_blockchain_m11_progress", JSON.stringify(next));
      } catch {
        // storage fallback
      }
      return next;
    });
  };

  const completedCount = useMemo(() => {
    return Object.values(completedItems).filter(Boolean).length;
  }, [completedItems]);

  const progressPercent = useMemo(() => {
    return Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);
  }, [completedCount]);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId, optionIdx) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    CONCEPTUAL_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedAnswers]);

  // Accordion for Interview Questions
  const [expandedInterview, setExpandedInterview] = useState({});
  const toggleInterview = (id) => {
    setExpandedInterview((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Copy helper
  const [copiedSnippet, setCopiedSnippet] = useState(null);
  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  // ==========================================
  // SIMULATOR 1: BIP-39 Mnemonic Generator
  // ==========================================
  const [mnemonicLength, setMnemonicLength] = useState(12); // 12 or 24 words
  const [passphrase, setPassphrase] = useState("");
  const [simSeedPhrase, setSimSeedPhrase] = useState(
    "abandon amount liar amount expire adjust cage candy arch gather drum buyer"
  );
  const [simMasterSeed, setSimMasterSeed] = useState(
    "0x5b56c41722f6d89f35f9d24c30e7b6ee9a0d98b1733e47bc5fc452b3004ecd742e3f31737f527a08f800787345592594"
  );

  const generateNewMnemonic = (len) => {
    const words12 = [
      "gravity", "matrix", "beacon", "crypto", "quantum", "solidity",
      "cipher", "verify", "entropy", "network", "genesis", "protocol"
    ];
    const words24 = [
      "gravity", "matrix", "beacon", "crypto", "quantum", "solidity",
      "cipher", "verify", "entropy", "network", "genesis", "protocol",
      "orbital", "ledger", "plasma", "rollup", "shard", "beacon",
      "merkle", "keccak", "signature", "validator", "oracle", "witness"
    ];
    const phrase = len === 12 ? words12.join(" ") : words24.join(" ");
    setMnemonicLength(len);
    setSimSeedPhrase(phrase);
    setSimMasterSeed(
      len === 12
        ? "0x7c9a4189d2e1fa07823b49cd810ef87a192837bc5fc452b3004ecd742e3f317389a0b12c"
        : "0x89e210bc89f17a992834b672837482379bcedf723849bc52837123910928374928172384"
    );
  };

  // ==========================================
  // SIMULATOR 2: HD Wallet Tree & Derivation Explorer
  // ==========================================
  const [hdAccountIndex, setHdAccountIndex] = useState(0);
  const [hdAddressIndex, setHdAddressIndex] = useState(0);

  const derivedAccounts = useMemo(() => {
    const list = [
      {
        path: `m/44'/60'/${hdAccountIndex}'/0/${hdAddressIndex}`,
        privateKey: `0x7a89f2${hdAccountIndex}${hdAddressIndex}c1928340d8928374bc928172384910293847561029384756102938`,
        publicKeyUncompressed: "0x04e128b9...7c89f2 (65 bytes)",
        address: hdAccountIndex === 0 && hdAddressIndex === 0 
          ? "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"
          : `0x${(hdAccountIndex + 1) * 2222}${(hdAddressIndex + 1) * 3333}E0F7030069857D2E4169EE7`.slice(0, 42),
        balance: `${(10.5 - hdAccountIndex * 2.1 - hdAddressIndex * 0.4).toFixed(4)} ETH`
      }
    ];
    return list;
  }, [hdAccountIndex, hdAddressIndex]);

  // ==========================================
  // SIMULATOR 3: EIP-1559 Transaction & Signature Visualizer
  // ==========================================
  const [txRecipient, setTxRecipient] = useState("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  const [txValue, setTxValue] = useState("0.5");
  const [txNonce, setTxNonce] = useState(14);
  const [txMaxPriorityFee, setTxMaxPriorityFee] = useState("1.5");
  const [txMaxFee, setTxMaxFee] = useState("28.0");

  const simulatedSignature = useMemo(() => {
    return {
      type: "0x02 (EIP-1559)",
      chainId: "11155111 (Sepolia)",
      signingDigest: "0x4e892cfa718293bd81928374bc89102938475610293847561029384756102938",
      r: "0x1928374bcf98234a9018273645bbcd8291028374656102938475610293847561",
      s: "0x78901234abcd5678ef0123456789abcdef0123456789abcdef0123456789abcdef",
      yParity: 0,
      recoveredSender: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"
    };
  }, []);

  // ==========================================
  // SIMULATOR 4: EIP-1193 & Nonce Transaction Lifecycle
  // ==========================================
  const [simConnectedAccount, setSimConnectedAccount] = useState("0xAb58...eC9B");
  const [simChainId, setSimChainId] = useState("11155111"); // Sepolia
  const [accountNonceCounter, setAccountNonceCounter] = useState(0);
  const [mempoolQueue, setMempoolQueue] = useState([
    { nonce: 0, desc: "Send 0.05 ETH to 0xBob...2222", status: "confirmed", gas: "21,000", fee: "2.0 gwei" }
  ]);

  const handleSimulateSubmitTx = () => {
    const nextNonce = accountNonceCounter + 1;
    setAccountNonceCounter(nextNonce);
    setMempoolQueue((prev) => [
      ...prev,
      {
        nonce: nextNonce,
        desc: `Call deposit() on 0xVault...9999 (${nextNonce})`,
        status: "pending",
        gas: "48,250",
        fee: "1.5 gwei"
      }
    ]);
  };

  const handleSpeedUpTx = (nonce) => {
    setMempoolQueue((prev) =>
      prev.map((tx) =>
        tx.nonce === nonce ? { ...tx, fee: "3.5 gwei (Replaced with +130% fee)", status: "confirmed" } : tx
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-28 sm:pb-36">
      {/* Top Track Navigation */}
      <ModuleNav track="blockchain" currentModuleId="wallets-keys" />

      {/* Hero Header Card */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-2">
              <Wallet size={14} />
              <span>Blockchain Engineering Track &bull; Module 11</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#18181b] tracking-tight">
              Wallets, Keys &amp; Transaction Signing
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              Cryptographic Keys, secp256k1 Math, BIP-39 Mnemonics, BIP-32/BIP-44 HD Trees, ECDSA Signatures, EIP-1193 Providers &amp; Nonce Mechanics.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Progress</span>
              <span className="text-sm font-bold text-orange-600 font-mono">{progressPercent}%</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Parts</span>
              <span className="text-sm font-bold text-stone-900 font-mono">20 / 20</span>
            </div>
          </div>
        </div>

        {/* 5-Tab Navigation Controls */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs">
          {[
            { id: "theory", label: "1. Wallet & Cryptography Theory (Parts 1–16)", icon: BookOpen },
            { id: "interactive", label: "2. Interactive Simulators (4 Tools)", icon: Cpu },
            { id: "labs", label: "3. Wallet & Transaction Lab (Part 17)", icon: Terminal },
            { id: "quiz", label: "4. Dashboard Assignment & Interviews (Parts 18–19)", icon: Shield },
            { id: "checklist", label: "5. Objective Tracker (26 Goals)", icon: ListChecks },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* TAB 1: CURRICULUM THEORY (PARTS 1 - 16) */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            {/* Hero Overview Card */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-4">
                <Wallet size={14} />
                <span>Advanced Core Module &bull; Cryptographic Identity &amp; Key Management</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18181b] tracking-tight">
                Module 11: Wallets, Keys &amp; Transaction Signing
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed max-w-4xl">
                Blockchain wallets are the fundamental identity and authorization layer of decentralized networks. Unlike conventional banking applications that store fiat currency inside centralized databases, blockchain wallets do not store cryptocurrency. Instead, they store, manage, and isolate cryptographic keys that exercise sovereign authority over blockchain accounts. This module covers the end-to-end cryptographic lifecycle: secp256k1 private keys, public key derivation, Keccak-256 address hashing, BIP-39 mnemonic phrases, BIP-32/BIP-44 hierarchical deterministic derivation, ECDSA digital signatures, EIP-1193 providers, MetaMask, WalletConnect, and transaction nonce mechanics.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-200/60">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Curriculum Level</span>
                  <span className="text-sm font-bold text-stone-900 mt-0.5 block">Advanced Core</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Cryptography Standards</span>
                  <span className="text-sm font-bold text-stone-900 mt-0.5 block">BIP-32 / 39 / 44 &bull; secp256k1</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Provider Standards</span>
                  <span className="text-sm font-bold text-stone-900 mt-0.5 block">EIP-1193 &bull; EIP-1559 &bull; EIP-55</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Estimated Study Time</span>
                  <span className="text-sm font-bold text-stone-900 mt-0.5 block font-mono">12–15 Hours</span>
                </div>
              </div>
            </div>

            {/* PART 1: BLOCKCHAIN WALLET FUNDAMENTALS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 1</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Blockchain Wallet Fundamentals</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">1.1 &ndash; 1.3 Architecture</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">1.1 What Is a Blockchain Wallet?</h4>
                <p>
                  A blockchain wallet is a software application or specialized hardware device that manages cryptographic keys and enables users to interact with decentralized networks. A wallet allows a user to create accounts, generate and isolate private keys, derive public keys and addresses, receive cryptocurrency and tokens, sign transactions, interact with smart contracts, view account balances, connect to dApps, and restore access using a recovery phrase.
                </p>
                <p className="font-semibold text-stone-900">
                  A blockchain wallet is fundamentally a cryptographic identity-management system.
                </p>

                {/* Banking vs Wallet Table */}
                <h5 className="font-bold text-stone-900 pt-2">Traditional Banking vs. Blockchain Wallet</h5>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Traditional Banking</th>
                        <th className="px-4 py-3">Blockchain Wallet</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-medium text-stone-900">Bank manages account infrastructure</td><td className="px-4 py-3">Blockchain network manages account state</td></tr>
                      <tr><td className="px-4 py-3 font-medium text-stone-900">Bank verifies account access</td><td className="px-4 py-3">Cryptographic digital signatures verify authorization</td></tr>
                      <tr><td className="px-4 py-3 font-medium text-stone-900">Bank can reset passwords and restore access</td><td className="px-4 py-3">Private-key recovery requires sovereign recovery mechanisms</td></tr>
                      <tr><td className="px-4 py-3 font-medium text-stone-900">Bank can reverse or freeze certain transactions</td><td className="px-4 py-3">Confirmed blockchain transactions are irreversible</td></tr>
                      <tr><td className="px-4 py-3 font-medium text-stone-900">Bank stores account balances in its private database</td><td className="px-4 py-3">Blockchain records balances and transaction state on a public ledger</td></tr>
                      <tr><td className="px-4 py-3 font-medium text-stone-900">Account access is controlled by the institution</td><td className="px-4 py-3">Non-custodial account control depends entirely on the private key</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 text-xs leading-relaxed">
                  <strong>Vital Concept: A wallet does not literally contain ETH.</strong> The ETH balance exists as ledger state recorded across Ethereum consensus nodes. The wallet merely stores or accesses the cryptographic credentials required to authorize state mutations involving that account address. If a user loses their private key without a valid recovery phrase, their assets become permanently and irreversibly inaccessible.
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-3">1.2 How a Blockchain Wallet Works: 9-Stage Lifecycle</h4>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 flex-wrap text-stone-800">
                    <span className="px-2.5 py-1 rounded-md bg-stone-200 font-bold">1. Entropy</span>
                    <span>&rarr;</span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-200 font-bold">2. Mnemonic</span>
                    <span>&rarr;</span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-200 font-bold">3. Seed</span>
                    <span>&rarr;</span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-200 font-bold">4. Master Key</span>
                    <span>&rarr;</span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-200 font-bold">5. Private Key</span>
                    <span>&rarr;</span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-200 font-bold">6. Public Key</span>
                    <span>&rarr;</span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-200 font-bold">7. Address</span>
                    <span>&rarr;</span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-200 font-bold">8. Sign Tx</span>
                    <span>&rarr;</span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold">9. On-Chain State</span>
                  </div>
                  <ol className="list-decimal pl-5 space-y-1 font-sans text-xs text-stone-600 pt-2">
                    <li><strong>Generate Entropy:</strong> The wallet generates 128 to 256 bits of cryptographically secure random data.</li>
                    <li><strong>Generate Mnemonic:</strong> The random data is converted into a human-readable recovery phrase per BIP-39.</li>
                    <li><strong>Generate Seed:</strong> The mnemonic is transformed into a 512-bit binary seed via PBKDF2-HMAC-SHA512.</li>
                    <li><strong>Derive Keys:</strong> The master seed derives extended keys and child keys using BIP-32 and BIP-44 paths.</li>
                    <li><strong>Generate Address:</strong> The public key coordinates are hashed with Keccak-256 to produce a 20-byte address.</li>
                    <li><strong>Sign Transaction:</strong> The wallet produces an ECDSA digital signature over the transaction signing digest.</li>
                    <li><strong>Broadcast:</strong> The signed raw transaction payload is submitted to an Ethereum node via JSON-RPC.</li>
                    <li><strong>Validate:</strong> Consensus validators verify the signature, nonce sequence, and gas parameters.</li>
                    <li><strong>Execute:</strong> The EVM executes the transaction, permanently updating the state trie.</li>
                  </ol>
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-3">1.3 Differences Between Wallet, Account, Address, and Key</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Concept</th>
                        <th className="px-4 py-3">Precise Technical Meaning</th>
                        <th className="px-4 py-3">Example Representation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Wallet</td><td className="px-4 py-3">The software application or hardware device managing keys and interactions</td><td className="px-4 py-3 font-mono">MetaMask, Ledger Nano X, Rabby</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Account</td><td className="px-4 py-3">Blockchain identity that holds balance, nonce, code, and storage</td><td className="px-4 py-3 font-mono">EOA or Smart Contract Account</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Address</td><td className="px-4 py-3">Public 20-byte identifier used to locate and receive funds</td><td className="px-4 py-3 font-mono">0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Private Key</td><td className="px-4 py-3">Secret 256-bit scalar integer used to authorize transactions</td><td className="px-4 py-3 font-mono">0x4c0883a69102937d6231471b5dbb6204... (64 hex chars)</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Public Key</td><td className="px-4 py-3">Point on secp256k1 elliptic curve (Q = dG) mathematically tied to private key</td><td className="px-4 py-3 font-mono">0x04 || X(32B) || Y(32B) (65 bytes)</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Seed Phrase</td><td className="px-4 py-3">Human-readable sequence of 12 or 24 BIP-39 words encoding entropy</td><td className="px-4 py-3 font-mono">abandon amount liar amount expire adjust cage candy...</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Seed</td><td className="px-4 py-3">512-bit binary output used as root input for HD key derivation</td><td className="px-4 py-3 font-mono">512-bit hex digest</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* PART 2: CUSTODIAL VS NON-CUSTODIAL */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 2</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Custodial vs. Non-Custodial Wallets</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Key Ownership Models</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-700">
                {/* Custodial */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <div className="flex items-center gap-2">
                    <Lock size={16} className="text-amber-600" />
                    <h4 className="font-bold text-stone-900">2.1 Custodial Wallets</h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    A custodial wallet is a service in which a third-party institutional organization (e.g. Binance, Coinbase, Kraken) holds and manages the private keys on behalf of the user. Users authenticate via standard Web2 credentials (email, password, 2FA/SMS).
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-mono text-stone-700">
                    User &rarr; Exchange App &rarr; Exchange Backend &rarr; Custody HSM &rarr; Private Key &rarr; Blockchain
                  </div>
                  <ul className="text-xs space-y-1 text-stone-600 list-disc pl-4">
                    <li><strong>Advantages:</strong> Simplified user onboarding, password reset capabilities, insurance policies, zero private key handling responsibility for users.</li>
                    <li><strong>Disadvantages:</strong> Counterparty insolvency risk (&ldquo;Not your keys, not your crypto&rdquo;), regulatory asset freezes, withdrawal halts, vulnerability to exchange hacks.</li>
                  </ul>
                </div>

                {/* Non-Custodial */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <div className="flex items-center gap-2">
                    <Unlock size={16} className="text-emerald-600" />
                    <h4 className="font-bold text-stone-900">2.2 Non-Custodial Wallets</h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    A non-custodial (self-custodial) wallet grants the user absolute, exclusive control over the private keys. The wallet client stores keys locally on the device (or within an isolated hardware enclave). No central party can authorize transactions.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-mono text-stone-700">
                    User &rarr; Non-Custodial Wallet &rarr; Local Key Management &rarr; Sign Tx &rarr; Broadcast &rarr; Blockchain
                  </div>
                  <ul className="text-xs space-y-1 text-stone-600 list-disc pl-4">
                    <li><strong>Advantages:</strong> Absolute asset sovereignty, permissionless access to all DeFi protocols, immunity to custodian insolvency, complete censorship resistance.</li>
                    <li><strong>Disadvantages:</strong> Total user responsibility; loss of the recovery phrase causes permanent loss of capital; zero customer support or account resets.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                <strong>University Curriculum Insight:</strong> Non-custodial does not automatically mean more secure. A multi-billion-dollar enterprise custody system with air-gapped HSMs, M-of-N multi-sig signers, and physical security ceremonies is objectively more secure against physical and cyber theft than a personal laptop infected with malware storing an unencrypted seed phrase. Security depends on operational key hygiene.
              </div>
            </section>

            {/* PART 3: HOT WALLETS VS COLD WALLETS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 3</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Hot Wallets and Cold Wallets</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Network Isolation Models</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-700">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <h4 className="font-bold text-stone-900 flex items-center gap-2">
                    <Flame size={16} className="text-orange-600" />
                    3.1 Hot Wallets (Online Key Storage)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    A hot wallet stores signing keys on an internet-connected host environment. Examples include browser extensions (MetaMask, Rabby), mobile apps (Rainbow, Trust Wallet), and exchange automated withdrawal hot wallets.
                  </p>
                  <ul className="text-xs space-y-1 text-stone-600 list-disc pl-4">
                    <li><strong>Characteristics:</strong> Instant transaction signing, high convenience for DeFi/NFT interactions, continuous internet connectivity.</li>
                    <li><strong>Threat Vectors:</strong> Malware, browser extension zero-days, clipboard hijacking, clipboard address replacement, phishing approvals.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <h4 className="font-bold text-stone-900 flex items-center gap-2">
                    <Snowflake size={16} className="text-blue-600" />
                    3.2 Cold Wallets (Air-Gapped Key Storage)
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    A cold wallet isolates private keys from internet-connected computing environments at all times. Examples include dedicated hardware wallets (Ledger, Trezor, BitBox02) and air-gapped signing computers communicating via QR codes or SD cards.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-mono text-stone-700">
                    Online dApp &rarr; Unsigned Tx &rarr; USB/QR &rarr; Cold Hardware &rarr; User Physical Approval &rarr; Signed Tx &rarr; Broadcast
                  </div>
                  <ul className="text-xs space-y-1 text-stone-600 list-disc pl-4">
                    <li><strong>Characteristics:</strong> Cryptographic keys never leave the secure element; physical button confirmation is required for every signature.</li>
                    <li><strong>Threat Vectors:</strong> Physical theft, supply-chain interdiction, recovery phrase exposure, blind signing of malicious calldata.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* PART 4: INTERNAL WALLET ARCHITECTURE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 4</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Wallet Architecture</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Modular Subsystems &bull; Client vs. Server</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">4.1 Modular Subsystems of an Ethereum Wallet</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Component</th>
                        <th className="px-4 py-3">Architectural Responsibility</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Key Management System (KMS)</td><td className="px-4 py-3">Encrypts, stores, and protects private keys using AES-256-GCM / PBKDF2 vaults</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Account Manager</td><td className="px-4 py-3">Manages BIP-44 account derivation trees, addresses, and multi-account switching</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Transaction Builder</td><td className="px-4 py-3">Queries current account nonce, estimates gas limits, formats EIP-1559 envelopes</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Signing Engine</td><td className="px-4 py-3">Executes secp256k1 ECDSA algorithms locally to generate (r, s, v) signatures</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">RPC Client</td><td className="px-4 py-3">Transmits JSON-RPC calls (`eth_sendRawTransaction`, `eth_call`) to Ethereum nodes</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Network Manager</td><td className="px-4 py-3">Tracks chain IDs, RPC URLs, native currencies, and block explorer endpoints</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">dApp Connector</td><td className="px-4 py-3">Exposes EIP-1193 standard `window.ethereum` API and handles permission handshakes</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">User Interface</td><td className="px-4 py-3">Presents account balances, decoded transaction simulation, and confirmation prompts</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-3">4.2 Client-Side vs. Server-Side Wallet Architecture</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <span className="font-bold text-stone-900 text-xs block mb-1">Client-Side Wallet (MetaMask, Rabby)</span>
                    <p className="text-xs text-stone-600">
                      Private keys reside entirely inside client memory/storage. The application backend NEVER receives private keys. Signing is executed strictly on the client device before raw signed transactions are broadcast.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <span className="font-bold text-stone-900 text-xs block mb-1">Server-Side Signer (Custody, Relayers)</span>
                    <p className="text-xs text-stone-600">
                      Keys are held in cloud backend infrastructure (AWS KMS, Fireblocks, HashiCorp Vault). Used for relayer networks, exchanges, and gas sponsorship. Requires strict role-based access controls, rate limits, and multi-party quorum.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PART 5: PRIVATE KEY MANAGEMENT & MATH */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 5</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Private Key Management &amp; Cryptography</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">secp256k1 &bull; Keccak-256</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">5.1 What Is an Ethereum Private Key?</h4>
                <p>
                  Ethereum uses the Koblitz elliptic curve <strong>secp256k1</strong> for its externally owned account cryptography. A private key is a secret 256-bit scalar integer selected uniformly at random within the valid range:
                </p>
                <div className="p-3 rounded-xl bg-stone-100 border border-stone-200 text-center font-mono text-xs text-stone-900">
                  1 &le; d &lt; n &nbsp; (where n &asymp; 1.15792 &times; 10&#8311;&#8311;)
                </div>
                <p className="text-xs text-stone-600">
                  A private key is commonly represented as a 64-character hexadecimal string prefixed with <code>0x</code> (e.g. <code>0x4c0883a69102937d6231471b5dbb6204...</code>). Anyone possessing the private key can sign valid transactions from that account. The signature is the sole authorization mechanism.
                </p>

                <h4 className="text-base font-bold text-stone-900 pt-3">5.2 Public Key Cryptography: Elliptic Curve Multiplication</h4>
                <p>
                  The public key is an elliptic curve point \(Q = (X, Y)\) derived by multiplying the generator base point \(G\) by the scalar private key \(d\):
                </p>
                <div className="p-3 rounded-xl bg-stone-100 border border-stone-200 text-center font-mono text-xs text-stone-900">
                  Q = d &times; G
                </div>
                <p className="text-xs text-stone-600">
                  An uncompressed secp256k1 public key consists of 65 bytes: a 1-byte prefix <code>0x04</code> + 32-byte X coordinate + 32-byte Y coordinate. Computing \(Q\) from \(d\) is trivial; calculating \(d\) from \(Q\) is the Elliptic Curve Discrete Logarithm Problem (ECDLP), which is computationally infeasible.
                </p>

                <h4 className="text-base font-bold text-stone-900 pt-3">5.3 Ethereum Address Generation Algorithm</h4>
                <p>
                  Ethereum addresses are computed from the public key coordinates using Keccak-256:
                </p>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 font-mono text-xs text-stone-800 space-y-2">
                  <p>1. Uncompressed Public Key: 0x04 || X_coord (32B) || Y_coord (32B) &nbsp; [65 bytes]</p>
                  <p>2. Strip 0x04 prefix: X_coord || Y_coord &nbsp; [64 bytes]</p>
                  <p>3. Compute Hash: H = Keccak256(X_coord || Y_coord) &nbsp; [32 bytes]</p>
                  <p>4. Truncate: Address = last20bytes(H) &nbsp; [20 bytes / 40 hex characters]</p>
                  <p>5. Prefix: &quot;0x&quot; + Address &nbsp; (e.g. 0x1234567890abcdef1234567890abcdef12345678)</p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-950 text-xs">
                  <strong>Critical Cryptographic Trap: Keccak-256 &ne; NIST SHA3-256.</strong> Ethereum uses original Keccak-256. When NIST standardized SHA-3 in FIPS 202, they altered domain padding bytes. Hashing public key coordinates with standard SHA3-256 instead of Keccak-256 produces invalid addresses that do not match on-chain accounts.
                </div>
              </div>
            </section>

            {/* PART 6: BIP-39 SEED PHRASES */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 6</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Seed Phrases &amp; BIP-39 Generation</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Entropy to Mnemonic Standard</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  BIP-39 defines the industry standard for converting raw cryptographically secure entropy into human-readable mnemonic words and deriving a 512-bit binary seed via PBKDF2:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><span className="font-bold block">128 bits</span>12 words (CS: 4 bits)</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><span className="font-bold block">160 bits</span>15 words (CS: 5 bits)</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><span className="font-bold block">192 bits</span>18 words (CS: 6 bits)</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><span className="font-bold block">224 bits</span>21 words (CS: 7 bits)</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><span className="font-bold block">256 bits</span>24 words (CS: 8 bits)</div>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs">
                  <span className="font-bold text-stone-900 block">BIP-39 4-Stage Derivation Mathematics:</span>
                  <p>1. <strong>Entropy (ENT):</strong> Generated using a CSPRNG (e.g. 128 bits).</p>
                  <p>2. <strong>Checksum (CS):</strong> First <code>ENT / 32</code> bits of <code>SHA256(ENT)</code> (4 bits for 128 bits entropy). Appended to entropy: <code>128 + 4 = 132 bits</code>.</p>
                  <p>3. <strong>Word Mapping:</strong> The 132 bits are sliced into twelve 11-bit segments. Each 11-bit integer (\(0 \le i &lt; 2048\)) indexes one word from the standardized 2,048-word BIP-39 dictionary.</p>
                  <p>4. <strong>Seed Derivation:</strong> The mnemonic string is expanded via PBKDF2-HMAC-SHA512 using 2,048 iterations:
                    <br />
                    <code className="font-mono bg-stone-200 px-1 py-0.5 rounded text-[11px] mt-1 inline-block">Seed = PBKDF2_HMAC-SHA512(Password = Mnemonic, Salt = &quot;mnemonic&quot; + Passphrase, 2048, 512)</code>
                  </p>
                </div>
              </div>
            </section>

            {/* PART 7: HIERARCHICAL DETERMINISTIC (HD) WALLETS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 7</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Hierarchical Deterministic (HD) Wallets</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">BIP-32 &amp; BIP-44 Tree Derivations</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">7.1 BIP-32 Master Key &amp; Chain Code Derivation</h4>
                <p>
                  BIP-32 allows generating a tree of child keypairs from a single 512-bit seed. A master HMAC-SHA512 calculation produces the master private key and master chain code:
                </p>
                <div className="p-3 rounded-xl bg-stone-100 border border-stone-200 text-center font-mono text-xs text-stone-900">
                  I = HMAC-SHA512(Key = &quot;Bitcoin seed&quot;, Data = Seed) &rarr; I_L (Master Private Key) || I_R (Master Chain Code)
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <span className="font-bold text-stone-900 text-xs block mb-1">Non-Hardened Derivation (Index 0 to 2&#179;&#185; - 1)</span>
                    <p className="text-xs text-stone-600">
                      Child public keys can be derived directly from the parent extended public key (xpub). <em>Danger:</em> Leaking xpub and any single child private key allows mathematical calculation of the parent private key!
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <span className="font-bold text-stone-900 text-xs block mb-1">Hardened Derivation (Index 2&#179;&#185; to 2&#179;&#178; - 1, marked &apos;)</span>
                    <p className="text-xs text-stone-600">
                      Requires parent private key material during child derivation. An xpub cannot derive child public keys, completely protecting parent keys from compromise.
                    </p>
                  </div>
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-3">7.2 BIP-44 Derivation Path Structure</h4>
                <p>
                  BIP-44 standardizes the hierarchical tree paths for multi-currency wallets:
                </p>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 font-mono text-xs text-stone-800 text-center">
                  m / purpose&apos; / coin_type&apos; / account&apos; / change / address_index
                </div>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200 font-mono">
                    <thead className="bg-stone-50 font-bold text-stone-700 font-sans">
                      <tr>
                        <th className="px-4 py-3">Path Element</th>
                        <th className="px-4 py-3">Value for Ethereum</th>
                        <th className="px-4 py-3 font-sans">Architectural Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-bold text-stone-900">m</td><td className="px-4 py-3">Master</td><td className="px-4 py-3 font-sans">Root key derived from BIP-39 seed</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">purpose&apos;</td><td className="px-4 py-3">44&apos;</td><td className="px-4 py-3 font-sans">Hardened BIP-44 multi-account standard specification</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">coin_type&apos;</td><td className="px-4 py-3">60&apos;</td><td className="px-4 py-3 font-sans">SLIP-0044 registered coin type for Ethereum</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">account&apos;</td><td className="px-4 py-3">0&apos;, 1&apos;, 2&apos;</td><td className="px-4 py-3 font-sans">Hardened sub-account index</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">change</td><td className="px-4 py-3">0</td><td className="px-4 py-3 font-sans">0 = external receiving address; 1 = internal change address</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">address_index</td><td className="px-4 py-3">0, 1, 2...</td><td className="px-4 py-3 font-sans">Sequential address generator for that account</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-stone-600">
                  Standard Ethereum account paths: <code>m/44&apos;/60&apos;/0&apos;/0/0</code> (Account 1), <code>m/44&apos;/60&apos;/0&apos;/0/1</code> (Account 2), <code>m/44&apos;/60&apos;/0&apos;/0/2</code> (Account 3).
                </p>
              </div>
            </section>

            {/* PART 8: ETHEREUM ACCOUNT TYPES & EIP-55 */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 8</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Ethereum Account Types &amp; EIP-55 Checksums</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">EOA vs. Smart Contracts</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-700">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <h4 className="font-bold text-stone-900">8.1 Externally Owned Accounts (EOA)</h4>
                  <ul className="text-xs space-y-1 text-stone-600 list-disc pl-4">
                    <li>Controlled by an elliptic curve private key.</li>
                    <li>Can initiate transactions by signing raw payloads.</li>
                    <li>Maintains native ETH balance and transaction nonce.</li>
                    <li>Has zero contract bytecode and zero storage trie.</li>
                  </ul>
                </div>
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <h4 className="font-bold text-stone-900">8.2 Smart Contract Accounts</h4>
                  <ul className="text-xs space-y-1 text-stone-600 list-disc pl-4">
                    <li>Controlled by immutable EVM bytecode.</li>
                    <li>Cannot initiate transactions independently; executes only when called by an EOA or another contract.</li>
                    <li>Has associated code hash and dedicated key-value storage trie.</li>
                    <li>Enables multi-sig wallets, social recovery, and ERC-4337 Account Abstraction.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs">
                <span className="font-bold text-stone-900 block">EIP-55 Mixed-Capitalization Checksum Mechanics</span>
                <p className="text-stone-600">
                  To prevent catastrophic loss of funds from mistyped hex characters, EIP-55 hashes the lowercase 40-character address with Keccak-256. For the \(i\)-th character in the address, if the \(i\)-th nibble of the hash is \(\ge 8\), the letter is capitalized; otherwise, it remains lowercase.
                  <br />
                  <code className="font-mono bg-stone-200 px-1 py-0.5 rounded text-[11px] mt-1 inline-block">0x52908400098527886E0F7030069857D2E4169EE7</code>
                </p>
              </div>
            </section>

            {/* PART 9: TRANSACTION SIGNING & ECDSA */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 9</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Transaction Signing &amp; ECDSA Components</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">EIP-1559 Envelope &bull; r, s, v</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">9.1 EIP-1559 Type 2 Transaction Structure</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200 font-mono">
                    <thead className="bg-stone-50 font-bold text-stone-700 font-sans">
                      <tr>
                        <th className="px-4 py-3">Field</th>
                        <th className="px-4 py-3">Type</th>
                        <th className="px-4 py-3 font-sans">Operational Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-bold text-stone-900">chainId</td><td className="px-4 py-3">uint256</td><td className="px-4 py-3 font-sans">EIP-155 replay protection (1 = Mainnet, 11155111 = Sepolia)</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">nonce</td><td className="px-4 py-3">uint256</td><td className="px-4 py-3 font-sans">Sequential transaction counter of the sender EOA</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">maxPriorityFeePerGas</td><td className="px-4 py-3">uint256</td><td className="px-4 py-3 font-sans">Direct tip paid to block validator/miner</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">maxFeePerGas</td><td className="px-4 py-3">uint256</td><td className="px-4 py-3 font-sans">Absolute cap on baseFee + priorityFee willing to be paid</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">gasLimit</td><td className="px-4 py-3">uint256</td><td className="px-4 py-3 font-sans">Maximum units of gas the transaction may consume (min 21,000)</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">to</td><td className="px-4 py-3">address</td><td className="px-4 py-3 font-sans">Recipient EOA address or target contract address</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">value</td><td className="px-4 py-3">uint256</td><td className="px-4 py-3 font-sans">Native Ether transferred in wei (1 ETH = 10^18 wei)</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">data</td><td className="px-4 py-3">bytes</td><td className="px-4 py-3 font-sans">ABI-encoded calldata for contract calls, or empty for transfers</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">accessList</td><td className="px-4 py-3">list</td><td className="px-4 py-3 font-sans">Pre-declared storage slots for EIP-2930 gas discounts</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">yParity, r, s</td><td className="px-4 py-3">signature</td><td className="px-4 py-3 font-sans">Cryptographic ECDSA proof authorizing the transaction</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-3">9.2 Signing a Message vs. Signing a Transaction</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Property</th>
                        <th className="px-4 py-3">Message Signing (personal_sign / EIP-712)</th>
                        <th className="px-4 py-3">Transaction Signing (eth_sendTransaction)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Execution Purpose</td><td className="px-4 py-3">Proves identity, auth sessions, off-chain permit approvals</td><td className="px-4 py-3">Authorizes EVM state changes and token transfers</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Ledger State Change</td><td className="px-4 py-3 font-bold text-emerald-700">None (Purely off-chain)</td><td className="px-4 py-3 font-bold text-orange-700">Mutates global state trie</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Gas Cost</td><td className="px-4 py-3 font-mono font-bold text-emerald-700">0 Gas (Free)</td><td className="px-4 py-3 font-mono font-bold text-orange-700">&ge; 21,000 Gas</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Primary Standard</td><td className="px-4 py-3 font-mono">EIP-4361 (Sign-In with Ethereum - SIWE)</td><td className="px-4 py-3 font-mono">EIP-1559 Type 2 Envelope</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* PART 10: METAMASK ARCHITECTURE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 10</span>
                  <h3 className="text-xl font-bold text-[#18181b]">MetaMask Extension Architecture</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Browser Sandboxing &amp; Keyrings</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  MetaMask operates inside browser isolation sandboxes, communicating across content scripts, background service workers, and UI popups:
                </p>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 font-mono text-xs text-stone-800 space-y-2">
                  <p>1. Injected Provider: Injects window.ethereum into the DOM via content scripts.</p>
                  <p>2. Permission Controller: Prompts user to authorize domain access to accounts.</p>
                  <p>3. Keyring Controller: Encrypted vault storing mnemonic seeds and private keys in IndexedDB.</p>
                  <p>4. Approval Controller: Displays gas estimation, contract parameters, and confirmation buttons.</p>
                  <p>5. Signing Engine: Computes ECDSA signatures internally without exposing private keys to web pages.</p>
                  <p>6. RPC Network Controller: Dispatches signed payloads to Infura, Alchemy, or custom nodes.</p>
                </div>
              </div>
            </section>

            {/* PART 11: EIP-1193 PROVIDER STANDARD */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 11</span>
                  <h3 className="text-xl font-bold text-[#18181b]">EIP-1193 Provider Standard</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">window.ethereum &bull; Event Listeners</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  EIP-1193 defines the universal JavaScript API exposed by all Ethereum browser wallets:
                </p>
                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`// Standard EIP-1193 Request Interface
interface RequestArguments {
  readonly method: string;
  readonly params?: readonly unknown[] | object;
}

provider.request(args: RequestArguments): Promise<unknown>;`}</pre>

                <h4 className="text-base font-bold text-stone-900 pt-2">Essential EIP-1193 RPC Methods</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200 font-mono">
                    <thead className="bg-stone-50 font-bold text-stone-700 font-sans">
                      <tr>
                        <th className="px-4 py-3">RPC Method</th>
                        <th className="px-4 py-3 font-sans">Parameters &amp; Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-bold text-stone-900">eth_requestAccounts</td><td className="px-4 py-3 font-sans">Requests user permission to connect and returns array of hex addresses</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">eth_accounts</td><td className="px-4 py-3 font-sans">Returns currently authorized accounts without prompting UI popups</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">eth_chainId</td><td className="px-4 py-3 font-sans">Returns current active network chain ID as hexadecimal string</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">personal_sign</td><td className="px-4 py-3 font-sans">Prompts user to sign an arbitrary human-readable text message</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">eth_sendTransaction</td><td className="px-4 py-3 font-sans">Prompts user to sign and immediately broadcast a transaction to the network</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">wallet_switchEthereumChain</td><td className="px-4 py-3 font-sans">Requests user to switch active network to a specific chainId</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">wallet_addEthereumChain</td><td className="px-4 py-3 font-sans">Prompts user to add a custom RPC network (e.g. Arbitrum, Polygon)</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-2">Lifecycle Event Listeners</h4>
                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`// 1. Handle Account Switching & Disconnection
window.ethereum.on("accountsChanged", (accounts) => {
  if (accounts.length === 0) {
    console.log("User disconnected wallet");
  } else {
    console.log("Active account changed to:", accounts[0]);
  }
});

// 2. Handle Network Switching (Recommended: Reload page or update provider)
window.ethereum.on("chainChanged", (chainIdHex) => {
  console.log("Network switched to:", parseInt(chainIdHex, 16));
  window.location.reload();
});`}</pre>
              </div>
            </section>

            {/* PART 12: WALLETCONNECT */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 12</span>
                  <h3 className="text-xl font-bold text-[#18181b]">WalletConnect Protocol Architecture</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Cross-Device Encrypted Relay</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  WalletConnect provides an open protocol connecting desktop dApps to mobile wallets across devices without requiring browser extension injections. Communication is established via QR code pairing and end-to-end encrypted relay servers:
                </p>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 font-mono text-xs text-stone-800 space-y-2">
                  <p>Desktop dApp &rarr; Pairing URI &rarr; QR Code &rarr; Mobile Wallet Scans &rarr; Diffie-Hellman Key Exchange (X25519) &rarr; Encrypted JSON-RPC Session via Relay</p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Feature</th>
                        <th className="px-4 py-3">Injected Provider (MetaMask)</th>
                        <th className="px-4 py-3">WalletConnect v2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Connection Medium</td><td className="px-4 py-3">Browser extension injected object (`window.ethereum`)</td><td className="px-4 py-3">Cross-device QR code or mobile deep-linking</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Supported Devices</td><td className="px-4 py-3">Desktop browsers, in-app mobile webviews</td><td className="px-4 py-3">Universal (iOS, Android, desktop, TV, hardware)</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Encryption</td><td className="px-4 py-3">Local browser IPC messaging</td><td className="px-4 py-3">End-to-end symmetric encryption (ChaCha20-Poly1305)</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Private Key Custody</td><td className="px-4 py-3 font-bold text-stone-900">Local client keyring</td><td className="px-4 py-3 font-bold text-stone-900">Mobile device secure element</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* PART 13: NONCE MANAGEMENT */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 13</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Transaction Nonce Management</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Sequencing &bull; Replacements &bull; Gaps</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  An account nonce is a strictly incrementing integer representing the number of transactions sent from that EOA. Nonces prevent double-spending and replay attacks on the same blockchain network:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold block text-stone-900 text-xs mb-1">Strict Ordering</span>
                    <p className="text-xs text-stone-600">A node will never execute transaction N+1 before transaction N has been validated and mined.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold block text-stone-900 text-xs mb-1">Nonce Gaps</span>
                    <p className="text-xs text-stone-600">If nonce 5 is missing, transactions with nonce 6 and 7 remain stuck in mempool indefinitely.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="font-bold block text-stone-900 text-xs mb-1">Speed-Up &amp; Cancel</span>
                    <p className="text-xs text-stone-600">Broadcasting a new tx with the SAME nonce and &ge;10% higher priority fee replaces the stuck transaction.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* PART 14: ETHEREUM TRANSACTION LIFECYCLE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 14</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Ethereum Transaction Lifecycle</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Mempool to Casper FFG Finality</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Lifecycle Status</th>
                        <th className="px-4 py-3">State &amp; Technical Milestone</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">1. Created</td><td className="px-4 py-3">DApp or wallet prepares unsigned EIP-1559 payload with gas estimations</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">2. Signed</td><td className="px-4 py-3">Private key computes ECDSA signature (r, s, yParity) over Keccak-256 digest</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">3. Broadcast / Pending</td><td className="px-4 py-3">Dispatched via JSON-RPC `eth_sendRawTransaction` and held in node mempool</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">4. Included</td><td className="px-4 py-3">PoS block proposer builds block containing transaction; block broadcast to peers</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">5. Executed</td><td className="px-4 py-3">EVM processes state transitions, balances update, transaction receipt generated</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">6. Confirmed</td><td className="px-4 py-3">Subsequent blocks built on top of inclusion block, reducing reorg probability</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-emerald-700 font-bold">7. Finalized</td><td className="px-4 py-3">Casper FFG justifies 2 consecutive epochs (~12.8 minutes); irreversible state</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* PART 15: HARDWARE WALLETS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 15</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Hardware Wallets &amp; Secure Elements</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Isolated Cryptographic Enclaves</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  A hardware wallet is a dedicated physical device with an embedded Secure Element (e.g. Common Criteria EAL5+ or EAL6+) that isolates private keys from host malware.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
                    <span className="font-bold text-stone-900 text-xs block">Hardware Protection Guarantees</span>
                    <ul className="text-xs text-stone-600 list-disc pl-4 space-y-1">
                      <li>Private keys never leave the secure microcontroller.</li>
                      <li>PIN authentication with exponential tamper delay.</li>
                      <li>Physical hardware screen verification prevents address poisoning.</li>
                      <li>Physical tactile button press required for cryptographic signature export.</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-1">
                    <span className="font-bold text-stone-900 text-xs block">Hardware Attack Vectors</span>
                    <ul className="text-xs text-stone-600 list-disc pl-4 space-y-1">
                      <li><strong>Blind Signing:</strong> Approving unparsed contract calldata blindly.</li>
                      <li><strong>Supply Chain Interdiction:</strong> Counterfeit firmware preloaded by malicious resellers.</li>
                      <li><strong>Physical Theft:</strong> Physical extraction of written 24-word backup recovery sheets.</li>
                      <li><strong>User Approval Errors:</strong> Failing to verify the exact displayed recipient on-screen.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* PART 16: WALLET SECURITY BEST PRACTICES */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">Part 16</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Wallet Security &amp; Phishing Defense</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">10 Enterprise Security Rules</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">1. CSPRNG Entropy:</strong> Never use weak pseudo-random seeds or custom dice rolls.</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">2. No Code Storage:</strong> Never commit private keys or mnemonics to git or .env files.</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">3. Hardware for Treasury:</strong> Store production capital exclusively on hardware or multisig.</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">4. Address Poisoning Defense:</strong> Never copy addresses from transaction history; verify full 40 chars.</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">5. Approval Limits:</strong> Avoid unlimited approvals (2^256-1); grant only exact transaction allowances.</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">6. Physical Backups:</strong> Punch recovery phrases into stainless steel plates; avoid cloud photos.</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">7. Separate Test Accounts:</strong> Never use accounts holding real assets for local or testnet dev.</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">8. Disable Blind Signing:</strong> Use Clear Signing wallets that decode contract calldata on screen.</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">9. SIWE Nonce Checks:</strong> Server must validate cryptographic nonces to prevent signature replays.</div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200"><strong className="block text-stone-900">10. Periodic Revocation:</strong> Regularly audit and revoke stale contract allowances via Revoke.cash.</div>
                </div>
              </div>
            </section>
          </div>
        )}
        {/* TAB 2: INTERACTIVE SIMULATORS (4 TOOLS) */}
        {activeTab === "interactive" && (
          <div className="space-y-12">
            {/* Header */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-2">
                <Cpu size={14} />
                <span>Hands-on Cryptographic Engineering Laboratories</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18181b] tracking-tight">
                Interactive Wallet &amp; Cryptography Simulators
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
                Explore the mathematical and practical operation of blockchain wallets: BIP-39 mnemonic entropy mapping, BIP-32/BIP-44 HD tree derivations, EIP-1559 ECDSA signature verification, and EIP-1193 nonce transaction queueing.
              </p>
            </div>

            {/* SIMULATOR 1: BIP-39 MNEMONIC & SEED GENERATOR */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Simulator 1</span>
                  <h3 className="text-xl font-bold text-[#18181b]">BIP-39 Mnemonic &amp; Seed Generator</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => generateNewMnemonic(12)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition ${
                      mnemonicLength === 12
                        ? "bg-orange-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    12 Words (128-bit)
                  </button>
                  <button
                    onClick={() => generateNewMnemonic(24)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition ${
                      mnemonicLength === 24
                        ? "bg-orange-600 text-white shadow-xs"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    24 Words (256-bit)
                  </button>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-stone-900">Generated BIP-39 Recovery Phrase ({mnemonicLength} words):</span>
                    <button
                      onClick={() => handleCopy(simSeedPhrase, "mnemonic")}
                      className="inline-flex items-center gap-1 text-[11px] text-orange-600 font-bold hover:underline cursor-pointer"
                    >
                      {copiedSnippet === "mnemonic" ? <Check size={12} /> : <Copy size={12} />}
                      <span>{copiedSnippet === "mnemonic" ? "Copied" : "Copy Phrase"}</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-4 bg-stone-50 rounded-2xl border border-stone-200 font-mono">
                    {simSeedPhrase.split(" ").map((w, idx) => (
                      <div key={idx} className="p-2 bg-white rounded-xl border border-stone-200/80 shadow-2xs">
                        <span className="text-[10px] text-stone-400 font-bold block">{idx + 1}.</span>
                        <span className="font-bold text-stone-900">{w}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                    <span className="font-bold text-stone-900 block">Optional Passphrase (&ldquo;25th Word&rdquo;):</span>
                    <input
                      type="text"
                      placeholder="Enter optional extra passphrase..."
                      value={passphrase}
                      onChange={(e) => setPassphrase(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl text-xs font-mono outline-hidden focus:border-orange-500"
                    />
                    <p className="text-[11px] text-stone-500 leading-relaxed">
                      PBKDF2 Salt: <code>&quot;mnemonic&quot; + &quot;{passphrase}&quot;</code>. Any different passphrase generates an entirely different wallet tree!
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2 font-mono">
                    <span className="font-bold text-stone-900 block font-sans">Derived 512-bit Binary Seed:</span>
                    <div className="p-2.5 bg-[#18181b] text-emerald-400 rounded-xl text-[11px] break-all">
                      {simMasterSeed}
                    </div>
                    <span className="text-[10px] text-stone-500 font-sans block">
                      PBKDF2-HMAC-SHA512 (2,048 iterations) &bull; Root input for BIP-32 HD derivations.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* SIMULATOR 2: HD WALLET ACCOUNT DERIVATION TREE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Simulator 2</span>
                  <h3 className="text-xl font-bold text-[#18181b]">HD Wallet Account Tree &amp; Derivation Explorer</h3>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="text-stone-500 font-sans font-medium">Account:</span>
                    <select
                      value={hdAccountIndex}
                      onChange={(e) => setHdAccountIndex(Number(e.target.value))}
                      className="px-2 py-1 bg-stone-100 border border-stone-300 rounded-lg text-xs font-mono"
                    >
                      <option value={0}>0&apos; (Account 1)</option>
                      <option value={1}>1&apos; (Account 2)</option>
                      <option value={2}>2&apos; (Account 3)</option>
                      <option value={3}>3&apos; (Account 4)</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-stone-500 font-sans font-medium">Index:</span>
                    <select
                      value={hdAddressIndex}
                      onChange={(e) => setHdAddressIndex(Number(e.target.value))}
                      className="px-2 py-1 bg-stone-100 border border-stone-300 rounded-lg text-xs font-mono"
                    >
                      <option value={0}>0 (Primary)</option>
                      <option value={1}>1 (Secondary)</option>
                      <option value={2}>2 (Tertiary)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {derivedAccounts.map((acc, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-stone-200 font-sans">
                      <span className="px-2.5 py-1 rounded-md bg-orange-100 text-orange-900 font-bold text-xs font-mono">
                        Path: {acc.path}
                      </span>
                      <span className="font-bold text-emerald-700 font-mono text-xs">{acc.balance}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider font-sans block">Derived secp256k1 Private Key (256-bit scalar):</span>
                      <div className="p-2.5 bg-[#18181b] text-emerald-400 rounded-xl text-xs break-all">
                        {acc.privateKey}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider font-sans block">Uncompressed Public Key Q = dG (65 bytes):</span>
                      <div className="p-2 bg-stone-200/80 text-stone-800 rounded-lg text-[11px] break-all">
                        {acc.publicKeyUncompressed}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider font-sans block">EIP-55 Checksummed Ethereum Address (last 20 bytes of Keccak-256):</span>
                      <div className="p-3 bg-white border border-stone-300 text-orange-700 font-bold rounded-xl text-sm break-all shadow-2xs">
                        {acc.address}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SIMULATOR 3: EIP-1559 TRANSACTION BUILDER & ECDSA SIGNATURE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Simulator 3</span>
                  <h3 className="text-xl font-bold text-[#18181b]">EIP-1559 Transaction Builder &amp; Signature Visualizer</h3>
                </div>
                <span className="px-3 py-1 bg-stone-100 rounded-full font-mono text-xs font-bold text-stone-700">Type 2 Envelope</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
                {/* Form Inputs */}
                <div className="space-y-3 p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="font-bold text-stone-900 block text-sm">Transaction Fields</span>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">Recipient Address (to):</label>
                    <input
                      type="text"
                      value={txRecipient}
                      onChange={(e) => setTxRecipient(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl font-mono text-xs outline-hidden focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600 block mb-1">Value (ETH):</label>
                      <input
                        type="text"
                        value={txValue}
                        onChange={(e) => setTxValue(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl font-mono text-xs outline-hidden focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600 block mb-1">Nonce:</label>
                      <input
                        type="number"
                        value={txNonce}
                        onChange={(e) => setTxNonce(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl font-mono text-xs outline-hidden focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600 block mb-1">Max Priority Fee (gwei):</label>
                      <input
                        type="text"
                        value={txMaxPriorityFee}
                        onChange={(e) => setTxMaxPriorityFee(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl font-mono text-xs outline-hidden focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600 block mb-1">Max Fee Per Gas (gwei):</label>
                      <input
                        type="text"
                        value={txMaxFee}
                        onChange={(e) => setTxMaxFee(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-xl font-mono text-xs outline-hidden focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* ECDSA Output */}
                <div className="space-y-3 p-5 rounded-2xl bg-stone-50 border border-stone-200/80 font-mono">
                  <span className="font-bold text-stone-900 block text-sm font-sans">Cryptographic Signature Proof</span>
                  <div className="space-y-1">
                    <span className="text-[10px] text-stone-500 font-sans block">Signing Digest (Keccak256(0x02 || RLP)):</span>
                    <div className="p-2 bg-[#18181b] text-stone-300 rounded-lg text-[10px] break-all">
                      {simulatedSignature.signingDigest}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <span className="text-[10px] text-stone-500 font-sans block">Signature r (32 bytes):</span>
                      <div className="p-2 bg-white border border-stone-300 rounded-lg text-[10px] break-all text-stone-800">
                        {simulatedSignature.r.slice(0, 20)}...
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-stone-500 font-sans block">Signature s (32 bytes):</span>
                      <div className="p-2 bg-white border border-stone-300 rounded-lg text-[10px] break-all text-stone-800">
                        {simulatedSignature.s.slice(0, 20)}...
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] text-stone-500 font-sans block">Recovered Signer Address (ecrecover):</span>
                    <div className="p-2.5 bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold rounded-xl text-xs break-all">
                      {simulatedSignature.recoveredSender}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SIMULATOR 4: EIP-1193 & NONCE TRANSACTION LIFECYCLE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Simulator 4</span>
                  <h3 className="text-xl font-bold text-[#18181b]">EIP-1193 Provider &amp; Nonce Mempool Lifecycle</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSimChainId(simChainId === "11155111" ? "1" : "11155111")}
                    className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold font-mono text-stone-800 transition cursor-pointer"
                  >
                    Chain: {simChainId === "11155111" ? "Sepolia (11155111)" : "Mainnet (1)"}
                  </button>
                  <button
                    onClick={() => setSimConnectedAccount(simConnectedAccount === "0xAb58...eC9B" ? "0x7890...1111" : "0xAb58...eC9B")}
                    className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-bold font-mono text-stone-800 transition cursor-pointer"
                  >
                    Account: {simConnectedAccount}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="text-xs">
                    <span className="font-bold text-stone-900 block">Account On-Chain Nonce: {accountNonceCounter}</span>
                    <span className="text-stone-500 text-[11px]">Next transaction must use Nonce {accountNonceCounter + 1}</span>
                  </div>
                  <button
                    onClick={handleSimulateSubmitTx}
                    className="px-4 py-2 bg-orange-600 text-white rounded-xl text-xs font-bold hover:bg-orange-700 transition cursor-pointer shadow-xs"
                  >
                    + Submit Transaction (Nonce {accountNonceCounter + 1})
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-stone-900 block">Mempool &amp; Transaction Queue</span>
                  <div className="overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="min-w-full text-xs text-left divide-y divide-stone-200 font-mono">
                      <thead className="bg-stone-50 font-bold text-stone-700 font-sans">
                        <tr>
                          <th className="px-4 py-3">Nonce</th>
                          <th className="px-4 py-3">Description</th>
                          <th className="px-4 py-3">Gas Used</th>
                          <th className="px-4 py-3">Fee</th>
                          <th className="px-4 py-3 font-sans">Status</th>
                          <th className="px-4 py-3 font-sans text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 text-stone-600">
                        {mempoolQueue.map((tx) => (
                          <tr key={tx.nonce} className={tx.status === "pending" ? "bg-amber-50/50" : ""}>
                            <td className="px-4 py-3 font-bold text-stone-900">#{tx.nonce}</td>
                            <td className="px-4 py-3">{tx.desc}</td>
                            <td className="px-4 py-3">{tx.gas}</td>
                            <td className="px-4 py-3 text-stone-700">{tx.fee}</td>
                            <td className="px-4 py-3 font-sans">
                              {tx.status === "confirmed" ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                                  <Check size={10} /> Confirmed
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                                  <RefreshCw size={10} className="animate-spin" /> Pending in Mempool
                                </span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right font-sans">
                              {tx.status === "pending" && (
                                <button
                                  onClick={() => handleSpeedUpTx(tx.nonce)}
                                  className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-bold text-[11px] hover:bg-orange-700 transition cursor-pointer"
                                >
                                  Speed Up (+10% Fee)
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        {/* TAB 3: PRACTICAL ENGINEERING LAB (PART 17) */}
        {activeTab === "labs" && (
          <div className="space-y-12">
            {/* Header */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-2">
                <Terminal size={14} />
                <span>Part 17 &bull; Practical Hands-on Laboratory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18181b] tracking-tight">
                Create a Wallet &amp; Sign an Ethereum Test Transaction
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
                Connect MetaMask to a custom React + Vite frontend using ethers.js v6, read account balances, sign an off-chain authentication message, broadcast an on-chain transaction to the Sepolia testnet, and verify the transaction receipt on Etherscan.
              </p>
            </div>

            {/* Environment Overview */}
            <div className="p-6 rounded-3xl bg-white border border-[#e7e3da] shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-[#18181b]">Lab Environment &amp; Tooling</h3>
              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                  <thead className="bg-stone-50 font-bold text-stone-700">
                    <tr>
                      <th className="px-4 py-3">Tool</th>
                      <th className="px-4 py-3">Role &amp; Purpose</th>
                      <th className="px-4 py-3">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">MetaMask</td><td className="px-4 py-3">Client-side wallet &amp; transaction signer</td><td className="px-4 py-3 font-mono">Browser Extension</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">Ethereum Sepolia</td><td className="px-4 py-3">Target testnet blockchain network</td><td className="px-4 py-3 font-mono">Chain ID: 11155111</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">React + Vite</td><td className="px-4 py-3">Frontend dApp user interface</td><td className="px-4 py-3 font-mono">Vite React SPA</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">ethers.js v6</td><td className="px-4 py-3">Ethereum client library for provider &amp; signer abstractions</td><td className="px-4 py-3 font-mono">^6.13.0</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">Sepolia Etherscan</td><td className="px-4 py-3">Block explorer for receipt verification</td><td className="px-4 py-3 font-mono">sepolia.etherscan.io</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* STEP 1 & 2: SETUP */}
            <div className="p-6 rounded-3xl bg-white border border-[#e7e3da] shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-[#18181b]">Step 1 &amp; 2: Wallet Setup &amp; Project Initialization</h3>
              <div className="space-y-3 text-xs text-stone-700">
                <p>1. Install MetaMask, initialize a clean testing account, and enable the <strong>Sepolia Testnet</strong> in advanced network settings.</p>
                <p>2. Obtain Sepolia test ETH from a faucet (e.g. Google Cloud Web3 Faucet or Sepolia PoW Faucet).</p>
                <p>3. Create a new React application with Vite and install ethers v6:</p>
                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`# Initialize project workspace
npm create vite@latest wallet-lab -- --template react
cd wallet-lab

# Install dependencies
npm install
npm install ethers

# Start local development server
npm run dev`}</pre>
              </div>
            </div>

            {/* STEP 3, 4, 5: COMPLETE FRONTEND IMPLEMENTATION */}
            <div className="p-6 rounded-3xl bg-white border border-[#e7e3da] shadow-xs space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-[#18181b]">Step 3 &ndash; 5: Complete React dApp (src/App.jsx)</h3>
                <button
                  onClick={() => handleCopy(`import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");
  const [balance, setBalance] = useState("");
  const [status, setStatus] = useState("");

  // Step 3: Connect MetaMask
  async function connectWallet() {
    try {
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed. Please install the extension.");
      }
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      const userBalance = await provider.getBalance(accounts[0]);

      setAccount(accounts[0]);
      setChainId(network.chainId.toString());
      setBalance(ethers.formatEther(userBalance));
      setStatus("Wallet connected successfully");
    } catch (error) {
      setStatus(error.message);
    }
  }

  // Step 4: Sign an Off-Chain Message
  async function signMessage() {
    try {
      if (!window.ethereum || !account) {
        throw new Error("Connect wallet first");
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const message = "I am learning Ethereum wallet signing with PrepSpaces.";
      const signature = await signer.signMessage(message);
      const recoveredAddress = ethers.verifyMessage(message, signature);

      console.log("Generated Signature:", signature);
      console.log("Recovered Address:", recoveredAddress);

      setStatus(
        recoveredAddress.toLowerCase() === account.toLowerCase()
          ? "Signature verified successfully! Matches active account."
          : "Signature verification failed"
      );
    } catch (error) {
      setStatus(error.message);
    }
  }

  // Step 5: Send a Sepolia Test Transaction
  async function sendTestTransaction() {
    try {
      if (!window.ethereum || !account) {
        throw new Error("Connect wallet first");
      }
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      if (network.chainId !== 11155111n) {
        throw new Error("Please switch network to Sepolia (Chain ID 11155111)");
      }

      const signer = await provider.getSigner();
      const recipient = "0x000000000000000000000000000000000000dEaD"; // Standard burn address
      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.parseEther("0.001"),
      });

      setStatus(\`Transaction broadcast: \${tx.hash} (Waiting for inclusion...)\`);
      const receipt = await tx.wait();
      setStatus(\`Transaction mined in block \${receipt.blockNumber}! Gas used: \${receipt.gasUsed}\`);
    } catch (error) {
      setStatus(error.message);
    }
  }

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Ethereum Wallet Integration Lab</h2>
      <button onClick={connectWallet} style={{ padding: "10px 16px", cursor: "pointer", marginRight: "8px" }}>
        Connect MetaMask
      </button>
      <button onClick={signMessage} disabled={!account} style={{ padding: "10px 16px", cursor: "pointer", marginRight: "8px" }}>
        Sign Message
      </button>
      <button onClick={sendTestTransaction} disabled={!account} style={{ padding: "10px 16px", cursor: "pointer" }}>
        Send 0.001 Sepolia ETH
      </button>

      <div style={{ marginTop: "20px", background: "#f5f5f5", padding: "16px", borderRadius: "8px" }}>
        <p><strong>Account:</strong> {account || "Not connected"}</p>
        <p><strong>Chain ID:</strong> {chainId || "Unknown"}</p>
        <p><strong>Balance:</strong> {balance ? \`\${balance} ETH\` : "0 ETH"}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>
    </div>
  );
}

export default App;`, "labcode")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition cursor-pointer"
                >
                  {copiedSnippet === "labcode" ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedSnippet === "labcode" ? "Copied Full Source" : "Copy src/App.jsx"}</span>
                </button>
              </div>

              <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto leading-relaxed">{`// src/App.jsx
import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");
  const [balance, setBalance] = useState("");
  const [status, setStatus] = useState("");

  // Step 3: Connect MetaMask
  async function connectWallet() {
    try {
      if (!window.ethereum) throw new Error("MetaMask is not installed");
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      const userBalance = await provider.getBalance(accounts[0]);

      setAccount(accounts[0]);
      setChainId(network.chainId.toString());
      setBalance(ethers.formatEther(userBalance));
      setStatus("Wallet connected successfully");
    } catch (error) {
      setStatus(error.message);
    }
  }

  // Step 4: Sign an Off-Chain Message (personal_sign)
  async function signMessage() {
    try {
      if (!window.ethereum || !account) throw new Error("Connect wallet first");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const message = "I am learning Ethereum wallet signing with PrepSpaces.";
      const signature = await signer.signMessage(message);
      const recoveredAddress = ethers.verifyMessage(message, signature);

      setStatus(
        recoveredAddress.toLowerCase() === account.toLowerCase()
          ? "Signature verified successfully! Matches active account."
          : "Signature verification failed"
      );
    } catch (error) {
      setStatus(error.message);
    }
  }

  // Step 5: Send a Sepolia Test Transaction
  async function sendTestTransaction() {
    try {
      if (!window.ethereum || !account) throw new Error("Connect wallet first");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      if (network.chainId !== 11155111n) throw new Error("Please switch network to Sepolia (Chain ID 11155111)");

      const signer = await provider.getSigner();
      const recipient = "0x000000000000000000000000000000000000dEaD"; // Burn address
      const tx = await signer.sendTransaction({
        to: recipient,
        value: ethers.parseEther("0.001"),
      });

      setStatus(\`Transaction broadcast: \${tx.hash} (Waiting for inclusion...)\`);
      const receipt = await tx.wait();
      setStatus(\`Transaction mined in block \${receipt.blockNumber}!\`);
    } catch (error) {
      setStatus(error.message);
    }
  }
}`}</pre>
            </div>

            {/* STEP 6 & DELIVERABLES */}
            <div className="p-6 rounded-3xl bg-white border border-[#e7e3da] shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-[#18181b]">Step 6: On-Chain Explorer Verification &amp; Deliverables</h3>
              <div className="space-y-3 text-xs text-stone-700">
                <p>After your transaction is mined on Sepolia, inspect the transaction hash on <strong>Sepolia Etherscan</strong> (<a href="https://sepolia.etherscan.io" target="_blank" rel="noreferrer" className="text-orange-600 font-bold hover:underline">sepolia.etherscan.io</a>) and verify:</p>
                <ul className="list-disc pl-5 space-y-1 text-stone-600">
                  <li><strong>Status:</strong> Success (confirmed).</li>
                  <li><strong>Block:</strong> The exact block number in which the transaction was included.</li>
                  <li><strong>From:</strong> Your connected MetaMask account address.</li>
                  <li><strong>To:</strong> <code>0x000000000000000000000000000000000000dEaD</code>.</li>
                  <li><strong>Value:</strong> 0.001 Sepolia ETH.</li>
                  <li><strong>Transaction Fee:</strong> Gas used &times; effective gas price.</li>
                </ul>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 mt-4 space-y-2">
                  <span className="font-bold text-stone-900 block">Required Lab Submission Deliverables:</span>
                  <ol className="list-decimal pl-5 space-y-1 text-stone-600">
                    <li>Screenshot of the running React dApp showing connected account and balance.</li>
                    <li>Connected Ethereum public address (EIP-55 formatted).</li>
                    <li>Verified off-chain message signature string.</li>
                    <li>Sepolia transaction hash and Etherscan confirmation link.</li>
                    <li>Short 2-paragraph technical explanation detailing how the transaction was serialized, signed via ECDSA, and verified by Sepolia validators.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* TAB 4: ASSIGNMENTS & INTERVIEWS (PARTS 18 - 19) */}
        {activeTab === "quiz" && (
          <div className="space-y-12">
            {/* Header */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-2">
                <FileCheck size={14} />
                <span>Parts 18 &amp; 19 &bull; Assessment &amp; Evaluation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18181b] tracking-tight">
                Practical Assignment &amp; Architectural Interviews
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
                Validate your expertise in blockchain wallet engineering, cryptographic key derivation, EIP-1193 lifecycle management, and enterprise custody architecture.
              </p>
            </div>

            {/* PART 18: WALLET DASHBOARD ASSIGNMENT */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Part 18 Practical Project</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Build an Ethereum Wallet Dashboard</h3>
                </div>
                <span className="px-3 py-1 bg-stone-100 rounded-full font-mono text-xs font-bold text-stone-700">100 Marks</span>
              </div>

              <div className="space-y-4 text-xs text-stone-700 leading-relaxed">
                <p>
                  Architect and deploy a complete production-ready React / Next.js Ethereum Wallet Dashboard that communicates with MetaMask or WalletConnect:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="font-bold text-stone-900 block text-xs">Core Requirements</span>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600">
                      <li>One-click MetaMask / injected provider connection with error handling.</li>
                      <li>Display active account, formatted ETH balance, and active network chain ID.</li>
                      <li>Off-chain message signing with client-side verification via <code>ethers.verifyMessage</code>.</li>
                      <li>On-chain ETH transfer interface with dynamic fee estimation.</li>
                      <li>Real-time event listeners for <code>accountsChanged</code> and <code>chainChanged</code>.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="font-bold text-stone-900 block text-xs">Advanced Architecture Extensions</span>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600">
                      <li>ENS reverse resolution (resolve <code>vitalik.eth</code> to hex address).</li>
                      <li>ERC-20 token balance scanner via multicall.</li>
                      <li>WalletConnect v2 QR code pairing integration.</li>
                      <li>Dynamic transaction replacement (&ldquo;Speed Up&rdquo; / &ldquo;Cancel&rdquo; with +10% gas).</li>
                      <li>Transaction receipt monitoring with status toast alerts.</li>
                    </ul>
                  </div>
                </div>

                {/* Rubric Table */}
                <h4 className="font-bold text-stone-900 pt-2 text-sm">Grading Rubric (100 Marks)</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Evaluation Criteria</th>
                        <th className="px-4 py-3">Assessment Dimension</th>
                        <th className="px-4 py-3 text-right">Marks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Wallet Connection</td><td className="px-4 py-3">EIP-1193 provider detection, requestAccounts, rejection handling</td><td className="px-4 py-3 text-right font-bold">10</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Account &amp; Balance Retrieval</td><td className="px-4 py-3">Accurate balance formatting, wei to ETH, chainId parsing</td><td className="px-4 py-3 text-right font-bold">10</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Message Signing &amp; Verification</td><td className="px-4 py-3">Sign-in with Ethereum / personal_sign and ecrecover verification</td><td className="px-4 py-3 text-right font-bold">15</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Transaction Construction</td><td className="px-4 py-3">EIP-1559 envelope parameters, gas limit calculation, maxFeePerGas</td><td className="px-4 py-3 text-right font-bold">15</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Signing &amp; Broadcasting</td><td className="px-4 py-3">Transaction submission, receipt awaiting, block confirmation</td><td className="px-4 py-3 text-right font-bold">20</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Error Handling</td><td className="px-4 py-3">RPC timeouts, user cancellations, insufficient funds, wrong network</td><td className="px-4 py-3 text-right font-bold">10</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Security Implementation</td><td className="px-4 py-3">EIP-55 checksum validation, CSPRNG nonces, zero private key leakage</td><td className="px-4 py-3 text-right font-bold">10</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">UI &amp; Documentation</td><td className="px-4 py-3">Clean responsive interface, code modularity, README deployment guide</td><td className="px-4 py-3 text-right font-bold">10</td></tr>
                      <tr className="bg-stone-50 font-bold text-stone-900"><td className="px-4 py-3" colSpan={2}>Total Score</td><td className="px-4 py-3 text-right font-mono text-orange-600">100</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* PART 19.1: 20 CONCEPTUAL ASSESSMENT QUESTIONS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Part 19.1 Knowledge Assessment</span>
                  <h3 className="text-xl font-bold text-[#18181b]">20 Conceptual Questions (Interactive)</h3>
                </div>
                <div className="flex items-center gap-2">
                  {showResults ? (
                    <div className="px-4 py-1.5 rounded-xl bg-orange-100 text-orange-900 text-xs font-bold font-mono">
                      Score: {quizScore} / {CONCEPTUAL_QUESTIONS.length} ({Math.round((quizScore / CONCEPTUAL_QUESTIONS.length) * 100)}%)
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowResults(true)}
                      className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition cursor-pointer shadow-xs"
                    >
                      Check All Answers
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                {CONCEPTUAL_QUESTIONS.map((q, idx) => {
                  const selectedOpt = selectedAnswers[q.id];
                                    const isCorrect = selectedOpt === q.correct;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3 text-xs">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-bold text-stone-900 leading-snug">
                          {idx + 1}. {q.question}
                        </span>
                        {showResults && (
                          <span
                            className={`px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 ${
                              isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {isCorrect ? "Correct" : "Incorrect"}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5 pt-1">
                        {q.options.map((opt, oIdx) => {
                          let optStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                          if (selectedOpt === oIdx) {
                            optStyle = "bg-orange-50 border-orange-400 text-orange-950 font-medium";
                          }
                          if (showResults) {
                            if (oIdx === q.correct) {
                              optStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold";
                            } else if (selectedOpt === oIdx) {
                              optStyle = "bg-rose-50 border-rose-400 text-rose-950";
                            }
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => handleSelectOption(q.id, oIdx)}
                              className={`w-full text-left p-3 rounded-xl border transition cursor-pointer flex items-center justify-between text-xs leading-relaxed ${optStyle}`}
                            >
                              <span>{opt}</span>
                              {showResults && oIdx === q.correct && (
                                <Check size={14} className="text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showResults && (
                        <div className="p-3 rounded-xl bg-stone-100 border border-stone-200 text-stone-600 text-[11px] leading-relaxed">
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* PART 19.2: 12 SENIOR ARCHITECT INTERVIEWS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">Part 19.2 Senior Staff Preparation</span>
                  <h3 className="text-xl font-bold text-[#18181b]">12 Senior Web3 Architect Interview Questions</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Exhaustive Model Answers</span>
              </div>

              <div className="space-y-4">
                {INTERVIEW_QUESTIONS.map((item) => {
                  const isExpanded = expandedInterview[item.id];
                  return (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 transition"
                    >
                      <button
                        onClick={() => toggleInterview(item.id)}
                        className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                      >
                        <span className="font-bold text-stone-900 text-sm leading-snug">
                          {item.id}. {item.question}
                        </span>
                        {isExpanded ? (
                          <ChevronUp size={18} className="text-stone-500 shrink-0" />
                        ) : (
                          <ChevronDown size={18} className="text-stone-500 shrink-0" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-4 pt-3 border-t border-stone-200 text-xs text-stone-700 leading-relaxed space-y-2">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}
        {/* TAB 5: OBJECTIVE TRACKER & CAPSTONE (PART 20) */}
        {activeTab === "checklist" && (
          <div className="space-y-12">
            {/* Header */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-2">
                <ListChecks size={14} />
                <span>Part 20 &bull; Mastery Verification</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18181b] tracking-tight">
                26-Objective Curriculum Mastery Tracker
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
                Track your comprehension across all 20 parts of Module 11. Progress is automatically persisted in local browser storage.
              </p>

              {/* Progress Bar */}
              <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-stone-900 mb-2">
                  <span>Curriculum Completion</span>
                  <span className="font-mono text-orange-600">{completedCount} / {CHECKLIST_ITEMS.length} ({progressPercent}%)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-stone-200 overflow-hidden">
                  <div
                    className="h-full bg-orange-600 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Checklist Items */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-[#18181b] mb-4">Core Competency Checklist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {CHECKLIST_ITEMS.map((item, idx) => {
                  const isChecked = !!completedItems[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleChecklistItem(idx)}
                      className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition cursor-pointer text-xs ${
                        isChecked
                          ? "bg-orange-50/50 border-orange-300 text-stone-900"
                          : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition ${
                          isChecked
                            ? "bg-orange-600 border-orange-600 text-white"
                            : "border-stone-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* PART 20: SUMMARY & RECOMMENDED RESOURCES */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-[#18181b]">Key Concepts &amp; Official Specifications</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                  <strong className="text-stone-900 block font-sans">Wallets:</strong>
                  Manage cryptographic sovereign identities, never holding coins directly.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                  <strong className="text-stone-900 block font-sans">Private Keys:</strong>
                  256-bit scalar integers on secp256k1 authorizing state changes.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                  <strong className="text-stone-900 block font-sans">BIP-39:</strong>
                  Mnemonic phrase encoding of entropy and PBKDF2 seed derivation.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                  <strong className="text-stone-900 block font-sans">BIP-32 / BIP-44:</strong>
                  Hierarchical deterministic tree paths (m/44&apos;/60&apos;/0&apos;/0/0).
                </div>
                <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                  <strong className="text-stone-900 block font-sans">EIP-1193:</strong>
                  Standard JavaScript `window.ethereum` request and event API.
                </div>
                <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 space-y-1">
                  <strong className="text-stone-900 block font-sans">Transaction Nonce:</strong>
                  Strictly sequential counter preventing replay and ordering execution.
                </div>
              </div>

              {/* Official Documentation Links */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-bold text-stone-900 block">Authoritative Industry Standards:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <a
                    href="https://ethereum.org/en/developers/docs/accounts/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-orange-400 hover:text-orange-600 transition flex items-center justify-between"
                  >
                    <span>Ethereum Accounts Docs</span>
                    <Share2 size={12} className="text-stone-400" />
                  </a>
                  <a
                    href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-orange-400 hover:text-orange-600 transition flex items-center justify-between"
                  >
                    <span>BIP-39 Specification</span>
                    <Share2 size={12} className="text-stone-400" />
                  </a>
                  <a
                    href="https://eips.ethereum.org/EIPS/eip-1193"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-orange-400 hover:text-orange-600 transition flex items-center justify-between"
                  >
                    <span>EIP-1193 Provider API</span>
                    <Share2 size={12} className="text-stone-400" />
                  </a>
                  <a
                    href="https://docs.ethers.org/v6/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-orange-400 hover:text-orange-600 transition flex items-center justify-between"
                  >
                    <span>ethers.js v6 Docs</span>
                    <Share2 size={12} className="text-stone-400" />
                  </a>
                </div>
              </div>

              {/* Module Bottom Navigation Buttons */}
              <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => navigate("/learning/blockchain/testing")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-100 text-stone-700 text-xs font-bold hover:bg-stone-200 transition cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: 10. Smart Contract Testing (Foundry &amp; Hardhat)</span>
                </button>

                <button
                  onClick={() => navigate("/learning/blockchain/tokens")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer shadow-sm shadow-orange-500/25 active:scale-95"
                >
                  <span>Next: 12. ERC Token Standards (ERC-20, 721, 1155)</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </section>
          </div>
        )}

      </main>
    </div>
  );
}
