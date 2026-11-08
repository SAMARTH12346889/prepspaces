// projectx/src/Componets/BlockchainStorageIPFS.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

// Data Constants
const CHECKLIST_ITEMS = [
  "15.1 Understand decentralized storage fundamentals and contrast with centralized cloud storage",
  "15.2 Master distributed storage architecture: data distribution, block chunking, and DAGs",
  "15.3 Understand data replication, redundancy, and fault tolerance across peer-to-peer networks",
  "15.4 Explain core IPFS architecture: nodes, blockstore, Bitswap, gateways, and pinning",
  "15.5 Contrast location addressing (URLs) with cryptographic content addressing (CIDs)",
  "15.6 Understand cryptographic hashing principles: determinism, collision resistance, and the avalanche effect",
  "15.7 Dissect the anatomy of a Content Identifier (CIDv1): Multibase, Version, Multicodec, and Multihash",
  "15.8 Understand Distributed Hash Tables (DHT) for discovering content provider records",
  "15.9 Differentiate between public, dedicated, local, and trustless IPFS gateways",
  "15.10 Master file uploading workflows, block creation, root CIDs, and Kubo CLI commands (ipfs add/cat)",
  "15.11 Understand IPFS pinning mechanisms, garbage collection (GC), and persistent node retention",
  "15.12 Configure remote pinning services (Pinata, Web3.Storage) with secure backend API authentication",
  "15.13 Compare IPFS and traditional cloud storage (AWS S3) across 9 production dimensions",
  "15.14 Structure standardized ERC-721 NFT metadata JSON and resolve tokenURI() on-chain",
  "15.15 Validate NFT metadata JSON and differentiate content immutability from contract reference mutability",
  "15.16 Verify file integrity using cryptographic CIDs and understand why CID_A != CID_B on mutation",
  "15.17 Understand why cryptographic integrity does not prove real-world authenticity, authorship, or validity",
  "15.18 Analyze Arweave architecture: Permaweb, endowment economics, and permanent archival storage",
  "15.19 Master Filecoin architecture: storage marketplace, client deals, and cryptographic proofs of storage",
  "15.20 Explain the complementary synergy between IPFS content addressing and Filecoin persistent deals",
  "15.21 Evaluate decentralized storage limitations: availability, latency, gateway dependence, and privacy",
  "15.22 Enforce mandatory client-side encryption for private documents prior to uploading to public IPFS",
  "15.23 Implement AES-GCM 256-bit encryption using the Web Crypto API with random initialization vectors (IVs)",
  "15.24 Model decentralized storage economics and cost trade-offs across IPFS, Filecoin, Arweave, and S3",
  "15.25 Implement Solidity smart contracts that register and query IPFS CIDs (IPFSRegistry.sol)",
  "15.26 Build, test, and deploy a complete decentralized file-sharing dApp on Sepolia testnet"
];
const QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "question": "What is the primary difference between location-based addressing (HTTP) and content-based addressing (IPFS)?",
    "options": [
      "A) Location addressing identifies files by their cryptographic hash, while content addressing uses IP addresses",
      "B) Location addressing identifies WHERE a resource is hosted on a specific server/URL, while content addressing identifies WHAT the file is based on its cryptographic digest",
      "C) Location addressing is faster because it does not use TCP/IP",
      "D) Content addressing can only be used for files smaller than 1 kilobyte"
    ],
    "answer": 1,
    "explanation": "Location addressing (e.g. https://example.com/file.png) points to a specific physical server and path. If the server goes down or changes the file, the URL breaks. Content addressing (ipfs://CID) points directly to the immutable cryptographic hash of the content itself, regardless of which node serves it."
  },
  {
    "id": "q2",
    "question": "Why is an IPFS Content Identifier (CIDv1) not simply a raw cryptographic hash?",
    "options": [
      "A) It is encrypted with a private key",
      "B) It is a self-describing structured identifier containing multibase prefix, CID version, multicodec (content format), and multihash (hashing algorithm + length + digest)",
      "C) It contains the uploader's Ethereum wallet address",
      "D) It includes the server's domain name and DNS zone"
    ],
    "answer": 1,
    "explanation": "CIDs are self-describing multiformats. CIDv1 includes a multibase prefix (e.g. 'b' for base32), CID version, multicodec (e.g. raw or dag-pb), and a multihash header indicating which hash function was used (e.g. sha2-256) and its length."
  },
  {
    "id": "q3",
    "question": "What happens if a single character inside a 10MB document uploaded to IPFS is modified?",
    "options": [
      "A) The CID remains identical because the file size is almost the same",
      "B) The entire file is deleted by the IPFS network",
      "C) Due to the avalanche effect of cryptographic hashing, the modified block produces a different hash, yielding a completely different root CID",
      "D) The smart contract automatically updates the old CID"
    ],
    "answer": 2,
    "explanation": "Cryptographic hash functions exhibit the avalanche effect: changing even a single byte or character dramatically alters the hash digest, creating a new block hash and a completely different root CID."
  },
  {
    "id": "q4",
    "question": "What is the primary function of a Distributed Hash Table (DHT) in the IPFS network?",
    "options": [
      "A) To store the entire contents of all files uploaded to IPFS",
      "B) To act as a distributed routing system that maps Content Identifiers (CIDs) to the peer IDs of nodes currently providing those content blocks",
      "C) To execute Solidity smart contracts off-chain",
      "D) To mine cryptocurrency blocks for Filecoin"
    ],
    "answer": 1,
    "explanation": "The DHT (based on Kademlia) does not store the files themselves; it stores routing 'provider records' that tell the network which peers currently advertise holding blocks for a specific CID."
  },
  {
    "id": "q5",
    "question": "Why is 'pinning' necessary to ensure that content remains available on an IPFS node?",
    "options": [
      "A) Unpinned content is automatically converted into Bitcoin",
      "B) IPFS nodes run garbage collection (GC) to reclaim storage; pinning explicitly protects cached content blocks from being deleted during GC",
      "C) Pinning is required to encrypt the file with AES-GCM",
      "D) Pinning submits an on-chain transaction to Ethereum"
    ],
    "answer": 1,
    "explanation": "IPFS is not automatically permanent. Nodes cache blocks temporarily. When disk limits are reached, the garbage collector purges unpinned blocks. Pinning locks blocks in the local blockstore or remote pinning service."
  },
  {
    "id": "q6",
    "question": "Does uploading a file to IPFS guarantee that the file will be stored permanently forever?",
    "options": [
      "A) Yes, every IPFS node in the world automatically replicates all uploaded files",
      "B) No; content persistence requires that at least one online node continues to pin and serve the blocks, or that storage deals exist (e.g. via Filecoin/Arweave)",
      "C) Yes, because IPFS is integrated directly into Ethereum consensus",
      "D) Only if the file is smaller than 256 kilobytes"
    ],
    "answer": 1,
    "explanation": "IPFS provides content addressing, not guaranteed permanent storage. If all nodes holding or pinning the file go offline or unpin the content, the file becomes irretrievable from the network."
  },
  {
    "id": "q7",
    "question": "What is the role of an IPFS Gateway (e.g. https://ipfs.io/ipfs/<CID>)?",
    "options": [
      "A) To bridge legacy HTTP/HTTPS web browsers with the peer-to-peer IPFS network by fetching blocks and streaming them over standard HTTP",
      "B) To mine Proof-of-Work blocks for Bitcoin",
      "C) To compile Solidity bytecode into ABI JSON",
      "D) To store private keys in the browser"
    ],
    "answer": 0,
    "explanation": "Standard web browsers do not natively speak the peer-to-peer IPFS protocol (libp2p/Bitswap). Gateways act as HTTP translation proxies that resolve CIDs across the IPFS network and return content over HTTP."
  },
  {
    "id": "q8",
    "question": "In ERC-721 NFT smart contracts, why is the tokenURI() typically pointed to an IPFS CID rather than stored on-chain or on a centralized AWS S3 URL?",
    "options": [
      "A) Ethereum does not allow string return types in Solidity",
      "B) Storing high-resolution artwork on-chain costs thousands of dollars in gas, while S3 URLs can be changed, deleted, or abandoned by the creator; IPFS provides tamper-proof content addressing at minimal cost",
      "C) IPFS automatically pays royalties to the artist",
      "D) AWS S3 blocks all Web3 traffic"
    ],
    "answer": 1,
    "explanation": "Storing megabytes of artwork on-chain is cost-prohibitive. Centralized URLs create 'rug-pull' risks where the server owner replaces the image. IPFS provides cryptographic immutability while storing the file off-chain."
  },
  {
    "id": "q9",
    "question": "If an NFT's tokenURI points to an immutable IPFS CID, is the NFT metadata guaranteed to be completely immutable?",
    "options": [
      "A) Yes, because IPFS makes everything immutable",
      "B) Not necessarily; if the underlying smart contract includes an admin function (e.g. setTokenURI or setBaseURI), the contract owner can change the referenced CID to a completely different one",
      "C) No, because CIDs expire after 30 days",
      "D) Yes, all ERC-721 contracts lock tokenURI permanently by default"
    ],
    "answer": 1,
    "explanation": "While the content associated with a given CID is immutable, the smart contract's state variable holding that CID may be mutable if the contract author implemented an owner-controlled setter function."
  },
  {
    "id": "q10",
    "question": "What is the fundamental architectural relationship between IPFS and Filecoin?",
    "options": [
      "A) Filecoin is a competitor that replaced IPFS entirely",
      "B) IPFS provides content addressing and peer-to-peer data transport, while Filecoin provides an incentive layer and decentralized marketplace for verifiable, long-term storage deals",
      "C) IPFS is for databases and Filecoin is for frontends",
      "D) Filecoin only stores text while IPFS stores audio"
    ],
    "answer": 1,
    "explanation": "IPFS and Filecoin are complementary sister protocols created by Protocol Labs. IPFS defines how data is addressed and moved; Filecoin provides the economic layer where clients pay storage providers who cryptographically prove ongoing storage."
  },
  {
    "id": "q11",
    "question": "How does Arweave's economic model differ from typical recurring monthly storage subscriptions?",
    "options": [
      "A) Arweave charges per-second CPU fees",
      "B) Users pay a one-time upfront fee backed by a storage endowment fund that generates interest and pays miners to store data for hundreds of years (the Permaweb)",
      "C) Arweave is completely free for all users forever without funding",
      "D) Users must buy and burn Bitcoin to store files"
    ],
    "answer": 1,
    "explanation": "Arweave uses an endowment model: users pay an upfront fee calculated based on conservative assumptions about falling storage costs. The fee goes into an endowment pool that continuously rewards storage miners over centuries."
  },
  {
    "id": "q12",
    "question": "Why should sensitive personal or financial documents NEVER be uploaded to IPFS in plaintext?",
    "options": [
      "A) Because IPFS nodes reject PDF files",
      "B) IPFS is a public peer-to-peer network where any node or gateway that knows or discovers the CID can download and read the unencrypted file bytes",
      "C) Because smart contracts automatically publish all IPFS files to Twitter",
      "D) Because IPFS files cannot be downloaded more than once"
    ],
    "answer": 1,
    "explanation": "IPFS provides content addressing, not access control. Anyone who obtains the CID or discovers it via DHT provider records can retrieve the raw file. Sensitive data must be encrypted client-side before uploading."
  },
  {
    "id": "q13",
    "question": "Which symmetric encryption algorithm and cipher mode is recommended for client-side Web3 file encryption using the Web Crypto API?",
    "options": [
      "A) DES-ECB",
      "B) AES-GCM (256-bit key) with a unique, cryptographically random 12-byte Initialization Vector (IV)",
      "C) ROT13",
      "D) MD5 with a password"
    ],
    "answer": 1,
    "explanation": "AES-GCM (Galois/Counter Mode) with a 256-bit key is the industry standard authenticated encryption cipher. It provides both confidentiality and cryptographic integrity verification, requiring a fresh 12-byte IV per encryption."
  },
  {
    "id": "q14",
    "question": "Does possessing a valid IPFS CID prove that the uploader was the authentic, original creator of that content?",
    "options": [
      "A) Yes, CIDs verify legal copyright ownership",
      "B) No; a CID only proves integrity (that the content matches the digest). It does not prove who authored the file, whether the content is truthful, or if the uploader had permission",
      "C) Yes, because IPFS requires KYC verification",
      "D) Only if the CID begins with 'bafy'"
    ],
    "answer": 1,
    "explanation": "Cryptographic integrity is distinct from provenance and authenticity. A CID proves that the bits have not changed since the CID was generated, but anyone can upload someone else's copyrighted file and generate a CID."
  },
  {
    "id": "q15",
    "question": "In the IPFSRegistry.sol smart contract, what does the contract actually store when registerDocument(string cid) is called?",
    "options": [
      "A) The entire binary file content in EVM bytecode",
      "B) A Document struct containing the uploader address, the CID string reference, and the block timestamp",
      "C) An encrypted copy of the user's private key",
      "D) The AWS S3 bucket credentials"
    ],
    "answer": 1,
    "explanation": "The smart contract stores a lightweight reference (struct Document { address uploader; string cid; uint256 timestamp; }). It stores zero binary file bytes on-chain, keeping gas costs minimal."
  },
  {
    "id": "q16",
    "question": "What is a major security risk of uploading files directly from a React frontend to an IPFS pinning service API like Pinata?",
    "options": [
      "A) React cannot send HTTP POST requests",
      "B) The developer's secret Pinata API JWT token would be exposed in the client-side JavaScript bundle where any user can steal it",
      "C) IPFS rejects requests from browser fetch",
      "D) Vite only supports Web3.Storage"
    ],
    "answer": 1,
    "explanation": "Embedding private API credentials in frontend code exposes them to the public. Production architectures route file uploads through a backend proxy (Node.js/Express) that keeps provider secrets secure."
  },
  {
    "id": "q17",
    "question": "What is Bitswap in the IPFS networking stack?",
    "options": [
      "A) A decentralized cryptocurrency exchange for trading Bitcoin",
      "B) The core peer-to-peer data trading protocol in IPFS where connected nodes exchange wanted content blocks with peers using wantlists and havelists",
      "C) A tool for compiling Solidity contracts",
      "D) An algorithm for calculating Ethereum gas fees"
    ],
    "answer": 1,
    "explanation": "Bitswap is the message-based peer-to-peer block exchange protocol in IPFS. When a node wants a CID, Bitswap broadcasts wantlists to peers and pulls the corresponding blocks concurrently."
  },
  {
    "id": "q18",
    "question": "Why might two identical files produce different root CIDs on IPFS?",
    "options": [
      "A) Because CIDs change based on the time of day",
      "B) If different chunking algorithms (e.g. 256KB vs 1MB), different DAG structures (UnixFSv1 vs UnixFSv2), or different CID versions (CIDv0 vs CIDv1) are used during import",
      "C) Because IPFS randomly salts every file",
      "D) Because Ethereum gas prices affect hashing"
    ],
    "answer": 1,
    "explanation": "A root CID represents the entire Merkle DAG of blocks. If the chunker splits the file at different boundaries, or if different CID formats or UnixFS versions are used, the resulting DAG structure and root CID will differ."
  },
  {
    "id": "q19",
    "question": "What is a 'Trustless Gateway' in the IPFS specification?",
    "options": [
      "A) A gateway that blocks all incoming requests",
      "B) A gateway that returns verifiable raw content blocks (.car format or raw blocks) along with cryptographic proofs, allowing the client to verify the root CID locally without trusting the gateway operator",
      "C) A gateway that does not require an internet connection",
      "D) A private gateway hosted by a central bank"
    ],
    "answer": 1,
    "explanation": "Standard gateways return parsed HTTP responses that a malicious gateway could tamper with. Trustless gateways return raw content blocks and DAG-CBOR/CAR archives that client software cryptographically verifies against the requested CID."
  },
  {
    "id": "q20",
    "question": "What is the recommended multi-provider strategy for production Web3 applications requiring high availability for critical documents?",
    "options": [
      "A) Rely entirely on a single public Cloudflare gateway",
      "B) Pin critical content across multiple independent pinning providers (e.g. Pinata + Web3.Storage + dedicated local node), monitor availability, and use fallback dedicated gateways",
      "C) Store duplicate copies in Ethereum smart contract storage slots",
      "D) Email the file to all users"
    ],
    "answer": 1,
    "explanation": "Relying on a single pinning service or gateway introduces a centralized point of failure. Multi-provider redundancy pins files across multiple independent networks, uses dedicated gateways with automated fallback, and monitors CID retrieval."
  }
];
const INTERVIEW_QUESTIONS = [
  {
    "id": "int-1",
    "q": "What is IPFS and how does content addressing fundamentally differ from the traditional web's location addressing?",
    "scenario": "A candidate is interviewing for a Senior Web3 Infrastructure Engineer position at an NFT marketplace.",
    "answer": "The traditional World Wide Web relies on Location Addressing (URLs):\n- Structure: protocol://host:port/path (e.g. https://storage.aws.com/assets/nft.png).\n- Problem: The identifier describes WHERE the file is hosted on a specific server managed by a specific organization. If the server shuts down, the domain expires, or the administrator alters the file, the URL breaks (HTTP 404) or serves mutated data (silent tampering).\n\nIPFS (InterPlanetary File System) relies on Content Addressing:\n- Structure: ipfs://<CID> (e.g. ipfs://bafybeigdyrzt...).\n- Paradigm: The identifier describes WHAT the file is. The Content Identifier (CID) is mathematically derived from the cryptographic hash of the file's binary contents.\n- Benefits:\n  1. Immutability: If a single byte in the file changes, the hash changes, producing a completely different CID.\n  2. Location Independence: The file can be downloaded from ANY node in the world that holds a replica.\n  3. Built-In Verification: The receiving client hashes the incoming blocks locally and verifies that the digest matches the requested CID before trusting it.",
    "keyTakeaways": [
      "Location addressing identifies WHERE data lives; content addressing identifies WHAT the data is",
      "CIDs are mathematically derived from cryptographic hashes of the file's binary blocks",
      "Content addressing guarantees immutability, tamper-detection, and location-agnostic retrieval"
    ]
  },
  {
    "id": "int-2",
    "q": "Explain the anatomy of an IPFS CIDv1 and explain why it is called a 'self-describing multiformat'.",
    "scenario": "During an EVM and storage architecture technical round, you are asked to dissect a CID string.",
    "answer": "A Content Identifier (CID) is not just a raw SHA-256 hash. It is a self-describing multiformat combining multiple metadata headers into a single compact binary or encoded string:\n\nCIDv1 Structure:\n1. Multibase Prefix: Specifies the encoding used to represent the binary CID as a string (e.g., 'b' for Base32 lowercase, 'z' for Base58BTC).\n2. CID Version: An integer (varint) defining the CID specification version (0 for legacy SHA-256 base58, 1 for modern multiformats).\n3. Multicodec: Identifies how the content data itself is structured and interpreted (e.g., 0x55 for 'raw' bytes, 0x70 for 'dag-pb' UnixFS, 0x71 for 'dag-cbor' structured IPLD).\n4. Multihash Header:\n   - Hash Algorithm Code: Identifies the cryptographic algorithm (e.g., 0x12 for sha2-256, 0x16 for sha3-256).\n   - Digest Length: Integer indicating hash byte length (e.g., 32 bytes for 256 bits).\n   - Digest Payload: The actual cryptographic hash bytes.\n\nWhy 'Self-Describing' Matters:\nIf a future breakthrough weakens SHA-256, the IPFS network does not break. New CIDs simply specify a different algorithm code (e.g., BLAKE3 or SHA3) in the multihash header without breaking legacy content.",
    "keyTakeaways": [
      "CIDv1 consists of Multibase + Version + Multicodec + Multihash (Algorithm, Length, Digest)",
      "Self-describing headers allow the network to evolve hash algorithms and codecs without breaking backwards compatibility",
      "Base32 lowercase is the modern web-safe standard for CIDv1, avoiding case-sensitivity issues in DNS"
    ]
  },
  {
    "id": "int-3",
    "q": "What is the role of the Distributed Hash Table (DHT) in IPFS, and what are its performance limitations?",
    "scenario": "An architect is troubleshooting 15-second latency spikes when retrieving unpinned files across a global IPFS cluster.",
    "answer": "In IPFS, the Distributed Hash Table (DHT)\u2014specifically based on Kademlia\u2014serves as the decentralized search and routing directory:\n\nHow the DHT Works:\n1. Content Advertising: When an IPFS node adds a file, it hashes the CID into the 256-bit keyspace and sends 'Provide' messages to the $k$ closest peer nodes in the DHT. Those nodes store a 'Provider Record' mapping (CID $\to$ PeerID, Multiaddress).\n2. Content Discovery: When a client node requests a CID that it does not have locally, it queries the DHT iteratively to find the peers holding provider records for that CID.\n3. Content Fetching: Once the client locates the provider's IP address, it opens a direct libp2p connection and requests blocks via Bitswap.\n\nPerformance Limitations:\n1. Discovery Latency: DHT lookups require multiple network hops across global residential and server nodes. If intermediate nodes are slow, NAT-traversed, or offline, lookups can take 5 to 30 seconds.\n2. Unreliable Providers: A provider record indicates a node CLAIMED to hold the file; if that node went offline or ran garbage collection, the retrieval fails.\n3. Mitigation: Production dApps use dedicated IPFS gateways with local blockstores and maintain direct peering with pinning services (Pinata, Filecoin) to bypass public DHT routing.",
    "keyTakeaways": [
      "The DHT maps CIDs to the peer IDs and network addresses of nodes advertising content",
      "DHT discovery involves multi-hop routing, causing significant latency for un-cached content",
      "Production systems use dedicated gateways, CDN caches, and direct peer connections to bypass DHT lookups"
    ]
  },
  {
    "id": "int-4",
    "q": "What is IPFS pinning and what happens to unpinned files during garbage collection (GC)?",
    "scenario": "A junior engineer reports that uploaded user files disappear after 48 hours on their self-hosted IPFS node.",
    "answer": "Garbage Collection (GC) in IPFS:\nBy default, whenever an IPFS node downloads or imports a file, it stores blocks in its local datastore (blockstore). To prevent the node's hard drive from filling up indefinitely, IPFS periodically runs Garbage Collection (or triggers it when a storage maximum quota is reached).\n- Unpinned Content: Any block that is not explicitly protected by a 'pin' or referenced by a pinned root DAG is treated as ephemeral cache and deleted from disk during GC.\n- Pinned Content: Pinning tells the local node: 'This content must NEVER be deleted during garbage collection.'\n\nTypes of Pinning:\n1. Direct Pin: Pins only the specific single block identified by the CID.\n2. Recursive Pin (Default): Pins the root CID and recursively walks and pins every child block, sub-directory, and file in the Merkle DAG.\n3. Indirect Pin: A child block that is protected because its parent root DAG is recursively pinned.\n\nProduction Requirement:\nTo ensure file persistence, dApps must either maintain a 24/7 dedicated node with automated recursive pinning or submit the CID to commercial remote pinning services (Pinata, Web3.Storage, Infura).",
    "keyTakeaways": [
      "Unpinned blocks act as temporary cache and are permanently deleted during garbage collection",
      "Pinning guarantees that specific CIDs and their child DAG blocks are protected from GC",
      "Recursive pinning protects the entire directory tree and all constituent blocks"
    ]
  },
  {
    "id": "int-5",
    "q": "How does Arweave achieve permanent decentralized storage and how does its endowment model work?",
    "scenario": "You are evaluating whether to store NFT high-resolution video assets on IPFS + Pinata vs. Arweave.",
    "answer": "Arweave is a decentralized storage network designed from the ground up for permanent, immutable data retention (the 'Permaweb'):\n\nCore Architectural Mechanisms:\n1. Blockweave & Proof of Access (PoA): Arweave's consensus mechanism requires miners to prove access to historical data blocks (recall blocks) in order to mine new blocks and earn mining rewards. If a miner does not store historical data, they cannot participate in consensus.\n2. The Storage Endowment Economic Model:\n   - Instead of a monthly recurring subscription (which fails if the creator stops paying), users pay a single upfront fee in AR tokens upon uploading.\n   - The fee covers the actual cost of storage for approximately 200 years based on a conservative model of storage technology economics: Kryder's Law (historical data storage costs decrease at ~30% per year).\n   - Only a small fraction of the fee goes to the current miner; the vast majority enters a decentralized Storage Endowment fund that releases interest over time to pay future miners.\n\nTrade-Off Comparison:\n- IPFS + Pinning: Extremely fast, flexible, but requires an active entity continuously paying monthly pinning invoices. If payments cease, data can disappear.\n- Arweave: Truly permanent with single upfront payment, ideal for immutable NFT artwork, public records, and legal archives, but has higher upfront upload fees and slower write confirmation times.",
    "keyTakeaways": [
      "Arweave miners must prove access to historical recall blocks to earn mining rewards (Proof of Access)",
      "The upfront payment funds an endowment that pays storage costs for centuries based on Kryder's Law",
      "Ideal for permanent archival data (NFT media, public archives) where recurring payments are unacceptable"
    ]
  },
  {
    "id": "int-6",
    "q": "How does Filecoin's marketplace and cryptographic proof system (PoRep and PoSt) work alongside IPFS?",
    "scenario": "A Web3 enterprise is looking to store 50 terabytes of clinical trial data verifiable on Ethereum.",
    "answer": "While IPFS addresses content, Filecoin provides the trustless economic marketplace and cryptographic proof systems ensuring storage providers actually hold the data over agreed durations:\n\nCore Cryptographic Proofs:\n1. Proof of Replication (PoRep): Executed once when a deal begins. The storage provider proves that they have created a unique, dedicated, encrypted physical copy of the client's data on their hardware (sealing the sector). This prevents providers from claiming to store multiple copies while actually deduplicating them into one.\n2. Proof of Spacetime (PoSt): Executed continuously over the entire deal lifetime. The network randomly challenges the provider to prove they still hold the intact sealed sectors. If the provider fails a challenge (WindowPoSt), their collateral is slashed.\n\nIPFS + Filecoin Synergy:\n- Ingest & Retrieval: IPFS provides the fast, content-addressed interface for uploading and hot caching.\n- Persistence: When files are archived, an automated client deal is negotiated on the Filecoin network. Storage providers post economic collateral (FIL tokens) and submit cryptographic proofs to the blockchain.\n- Verifiability: Smart contracts on Ethereum or Filecoin Virtual Machine (FVM) can verify storage deal state on-chain.",
    "keyTakeaways": [
      "Proof of Replication (PoRep) proves a unique physical replica was sealed on hardware",
      "Proof of Spacetime (PoSt) continuously audits that the provider still retains the data over time",
      "IPFS provides content addressing and hot caching; Filecoin provides the long-term economic storage market"
    ]
  },
  {
    "id": "int-7",
    "q": "Why are public IPFS gateways a single point of failure, and how do dedicated gateways and trustless gateways solve this?",
    "scenario": "Your frontend users report that NFT images hosted on 'ipfs.io/ipfs/' intermittently fail to load with HTTP 504 Gateway Timeouts.",
    "answer": "Public IPFS Gateways (e.g., ipfs.io, cloudflare-ipfs.com):\n- Severe Rate Limits: Public gateways receive billions of requests daily and throttle traffic aggressively.\n- Centralized Chokepoints: When a dApp hardcodes 'https://ipfs.io/ipfs/<CID>', it converts a decentralized architecture into a centralized dependency. If ipfs.io is blocked, throttled, or offline, the dApp appears completely broken.\n- Lack of Verification: The browser blindly trusts whatever HTTP response the gateway returns without verifying the cryptographic hash.\n\nProduction Solutions:\n1. Dedicated Gateways (Pinata, Infura, QuickNode):\n   - Provide custom subdomains (e.g. https://my-dapp.mypinata.cloud/ipfs/<CID>) backed by enterprise CDNs.\n   - Deliver sub-100ms response times, zero public throttling, and guaranteed access to pinned assets.\n2. Multi-Gateway Fallback Logic:\n   - The frontend implements client-side fallback: if the primary dedicated gateway fails or times out within 1.5 seconds, automatically retry the request across secondary and tertiary gateways.\n3. Trustless Gateways (IPIP-402):\n   - Rather than returning raw HTML/images, trustless gateways stream raw verifiable blocks (.car / dag-pb) with response headers (application/vnd.ipld.raw). The client hashes the blocks locally to verify the CID before rendering.",
    "keyTakeaways": [
      "Public gateways suffer from aggressive rate limits, timeouts, and represent centralized vulnerabilities",
      "Dedicated gateways provide enterprise SLAs, custom domains, and edge CDN acceleration",
      "Client frontends should implement automatic multi-gateway fallback and trustless verification"
    ]
  },
  {
    "id": "int-8",
    "q": "How would you design a secure, confidential decentralized file-sharing platform on top of public IPFS?",
    "scenario": "A medical tech startup wants patients to upload lab reports to IPFS so doctors can access them, without violating HIPAA/GDPR.",
    "answer": "Because public IPFS has zero access control and anyone with a CID can read the raw bytes, confidential file sharing requires client-side zero-knowledge encryption:\n\nEnd-to-End Encryption Architecture:\n1. Client-Side Key Generation:\n   - For each uploaded file, the client generates a unique 256-bit AES-GCM symmetric key using the Web Crypto API.\n2. File Encryption:\n   - The client generates a cryptographically random 12-byte Initialization Vector (IV).\n   - The file is encrypted in the browser: ciphertext = encrypt(AES-GCM, key, IV, plaintext).\n3. Public IPFS Upload:\n   - The encrypted ciphertext is uploaded to IPFS. The returned CID references only random-looking encrypted bytes. Anyone who downloads the CID sees unreadable ciphertext.\n4. Key Exchange & Access Control:\n   - The symmetric AES key is encrypted with the authorized doctor's public key (using asymmetric ECIES or RSA-OAEP).\n   - Alternatively, use Threshold Cryptography or Lit Protocol / Medusa to condition key decryption on an on-chain smart contract permission (e.g. patient granted access).\n5. Decryption:\n   - The doctor retrieves the encrypted file from IPFS via the CID.\n   - The doctor decrypts the symmetric key using their private key, then decrypts the ciphertext using the AES key and IV.",
    "keyTakeaways": [
      "Never upload plaintext confidential files to public IPFS; encrypt client-side prior to network broadcast",
      "Use AES-GCM with a fresh random 12-byte IV for high-speed authenticated symmetric file encryption",
      "Manage decryption keys off-chain or via threshold cryptography (Lit Protocol) tied to on-chain permissions"
    ]
  },
  {
    "id": "int-9",
    "q": "How does the IPFSRegistry.sol smart contract integrate with off-chain storage, and what are its security limitations?",
    "scenario": "Reviewing an on-chain document notary contract that stores IPFS CIDs.",
    "answer": "IPFSRegistry.sol Architecture:\n- Data Structure: Maintains struct Document { address uploader; string cid; uint256 timestamp; } in an array documents.\n- State Transition: When registerDocument(string calldata cid) is called, it verifies bytes(cid).length > 0, stores the record, and emits event DocumentRegistered(documentId, msg.sender, cid).\n- Benefit: Costs only ~45,000 gas because it stores only a 46-to-59 character string reference rather than the underlying megabyte-sized document.\n\nSecurity Limitations & Vulnerabilities:\n1. No Availability Guarantee: The contract records that address X claimed CID Y at timestamp T. The contract CANNOT verify whether the file actually exists on IPFS, whether it is pinned, or if it will be deleted tomorrow.\n2. No Authorship or Authenticity Proof: Anyone can register someone else's CID. If Alice uploads a document, Bob can take Alice's CID and register it under his own wallet address.\n3. Garbage In, Garbage Out: The contract accepts any arbitrary string. A caller could pass an invalid string or the CID of a malicious file.\n4. Production Fixes: Validate CID formatting (e.g. check Base32/Base58 regex), require an off-chain oracle or Chainlink function to verify that the CID is pinned and reachable before confirming registration, and sign the document with the author's cryptographic key.",
    "keyTakeaways": [
      "Smart contracts store string CIDs to minimize gas while establishing on-chain timestamped ownership records",
      "Contracts cannot verify whether off-chain files are actually pinned, reachable, or legally authentic",
      "Production document registries should validate CID formats and verify digital signatures of authors"
    ]
  },
  {
    "id": "int-10",
    "q": "What is the difference between UnixFSv1 and UnixFSv2 in the IPFS Merkle DAG?",
    "scenario": "A candidate is asked how IPFS structures large multi-gigabyte files and directories internally.",
    "answer": "In IPFS, raw files cannot be treated as a single flat string; they must be formatted into a structured Merkle DAG (Directed Acyclic Graph) called UnixFS:\n\nUnixFS Mechanics:\n1. Block Chunking: When a large file (e.g. 100MB) is added, the IPFS chunker splits the file into smaller blocks (default 256KB).\n2. Leaf Nodes: Each 256KB chunk is hashed into a leaf CID containing raw data.\n3. Intermediate Nodes & Merkle DAG: IPFS constructs a balanced tree (or trickle DAG) where internal nodes contain links (CIDs) and byte offsets to child nodes.\n4. Root CID: The root node of the tree represents the entire file.\n\nUnixFSv1 vs UnixFSv2:\n- UnixFSv1: Built on Protocol Buffers (protobuf / dag-pb). It represents files, directories, symlinks, and metadata. However, it had fixed chunking limitations, rigid metadata models, and lacked support for custom file attributes.\n- UnixFSv2 / IPLD Codecs: Modern IPLD (InterPlanetary Linked Data) uses DAG-CBOR and flexible data models. It supports dynamic content-defined chunking (e.g. Rabin chunking / Buzhash) where shifting a byte inside a file only changes the local chunk rather than invalidating every subsequent block in the entire file.",
    "keyTakeaways": [
      "UnixFS structures file chunks into a hierarchical Merkle DAG with a single root CID",
      "Large files are split into 256KB leaf blocks connected through intermediate index nodes",
      "Content-defined chunking (Rabin) ensures localized edits do not invalidate the entire Merkle tree"
    ]
  },
  {
    "id": "int-11",
    "q": "How would you design a multi-provider decentralized storage architecture with automated failover and health monitoring?",
    "scenario": "An enterprise client requires 99.99% uptime for their decentralized document repository.",
    "answer": "High-availability decentralized storage requires eliminating single-vendor dependencies across pinning, routing, and retrieval:\n\nMulti-Tier Architecture:\n1. Dual-Write Pinning Pipeline:\n   - When a file is uploaded via the backend service, the server computes the CID locally.\n   - The backend concurrently pins the file to three independent providers: (a) Pinata, (b) Web3.Storage (Filecoin backing), and (c) an in-house dedicated Kubo IPFS node on AWS/Hetzner.\n2. Pinning Status Verification:\n   - The backend queries each provider's Pinning Service API (IPFS PSA standard) to confirm status === 'pinned'.\n3. Multi-Gateway Edge Routing:\n   - The frontend client uses an edge proxy (Cloudflare Worker) with a gateway priority pool:\n     1. Primary: In-house dedicated gateway with Redis SSD caching.\n     2. Secondary: Pinata dedicated gateway.\n     3. Tertiary: Cloudflare / ipfs.io public gateways.\n4. Health Checks & Synthetic Monitoring:\n   - A cron worker periodically requests random sample CIDs through each gateway. If latency exceeds 800ms or returns 504, the worker updates the edge proxy routing table to route traffic to healthy gateways.",
    "keyTakeaways": [
      "Concurrently pin files across multiple independent pinning providers to eliminate single-vendor risk",
      "Use edge proxies (Cloudflare Workers) with automated multi-gateway fallback routing",
      "Execute synthetic health checks to monitor CID retrieval latency and gateway availability"
    ]
  },
  {
    "id": "int-12",
    "q": "Why is client-side backend proxying recommended instead of calling Pinata or Web3.Storage APIs directly from React?",
    "scenario": "A security auditor finds PINATA_JWT embedded inside a client-side .env file in a GitHub repository.",
    "answer": "Client-Side Direct Upload Vulnerabilities:\n1. Credential Theft: In Vite, any variable prefixed with VITE_ (or NEXT_PUBLIC_ in Next.js) is compiled directly into plaintext client JavaScript. Anyone opening DevTools can inspect the network tab or bundle, extract the Pinata JWT/API key, and gain full administrative access to delete, pin, or exhaust the account's paid storage quota.\n2. Abuse & Denial of Wallet: Unauthenticated users can write scripts targeting the upload endpoint, uploading terabytes of illegal or abusive media that charges the company's credit card.\n\nSecure Backend Proxy Architecture:\n1. Secure Environment: The Pinata JWT is stored strictly on the server (Node.js/Express) in an unexposed .env file or AWS Secrets Manager.\n2. Middleware Security: The backend endpoint (/api/upload):\n   - Authenticates the user (via SIWE session cookie or JWT).\n   - Validates file MIME types (e.g. only image/png, application/pdf).\n   - Enforces strict file size limits (e.g. max 10MB using multer.limits).\n   - Applies rate limiting (e.g. max 5 uploads per minute per IP via express-rate-limit).\n3. Server-to-Provider Streaming: The backend streams the file buffer directly to Pinata and returns only the safe CID string to the React client.",
    "keyTakeaways": [
      "Client bundles compile environment variables in plaintext, exposing provider credentials to attackers",
      "Backend proxies enforce user authentication, file size limits, rate limiting, and MIME validation",
      "Keep private pinning tokens strictly server-side and return only the public CID to the client"
    ]
  },
  {
    "id": "int-13",
    "q": "What are the legal and regulatory compliance challenges (GDPR 'Right to be Forgotten') associated with public decentralized storage?",
    "scenario": "A European enterprise wants to understand legal compliance before deploying customer data onto IPFS.",
    "answer": "Regulatory & Legal Friction in Decentralized Storage:\n1. GDPR 'Right to be Forgotten' (Article 17):\n   - Under GDPR, EU citizens have the legal right to request erasure of their personal data.\n   - Blockchain & IPFS Conflict: Once content is uploaded and replicated across peer-to-peer nodes, it is cryptographically immutable and distributed globally. The original uploader has NO technical ability to force independent third-party nodes to delete cached or pinned blocks.\n2. Copyright & DMCA Infringement:\n   - If an unauthorized party uploads copyrighted media to IPFS, sending a DMCA notice to a single gateway or pinning service only removes that specific gateway's index. The file remains accessible via its CID through any other node in the network.\n3. Illegal Content & Node Liability:\n   - Operators of public gateways and storage nodes face legal liability if their nodes unknowingly host or re-transmit prohibited material.\n\nArchitectural Mitigation:\n- Never store Personally Identifiable Information (PII) on IPFS in plaintext.\n- Store PII in off-chain relational databases (PostgreSQL) where records can be deleted upon request.\n- If private documents must be distributed via IPFS, encrypt them client-side. To comply with erasure requests, destroy the encryption key (Crypto-shredding), rendering the off-chain ciphertext permanently unrecoverable.",
    "keyTakeaways": [
      "Public decentralized storage cannot guarantee data erasure, creating conflict with GDPR Article 17",
      "Pinning services can unpin files, but cannot force independent peer nodes to delete cached blocks",
      "Use Crypto-shredding: destroy the encryption key to render off-chain ciphertext permanently inaccessible"
    ]
  },
  {
    "id": "int-14",
    "q": "Explain how NFT metadata validation prevents broken OpenSea listings and marketplace display failures.",
    "scenario": "An NFT project minted 10,000 tokens, but OpenSea shows placeholder question marks and missing traits for all tokens.",
    "answer": "Why NFT Metadata Fails:\nMarketplaces (OpenSea, Blur) periodically crawl the smart contract's tokenURI(tokenId) function, fetch the JSON payload, parse it, and render the artwork and traits. If any link in the chain is malformed, the asset fails to display.\n\nCommon Failure Vectors:\n1. Invalid JSON Syntax: Unescaped newlines or trailing commas break JSON.parse().\n2. Gateway Timeouts: Using a slow public gateway (e.g. ipfs.io) causes the marketplace scraper to time out (HTTP 504) and fail to index the metadata.\n3. Non-Standard Property Names: Marketplaces adhere strictly to the ERC-721 Metadata JSON schema:\n   - 'name': string\n   - 'description': string\n   - 'image': string (must be ipfs://CID or a reliable gateway URL)\n   - 'attributes': array of objects ({ trait_type: string, value: string | number })\n   If an engineer writes 'traits' instead of 'attributes' or 'photo' instead of 'image', the attributes do not display.\n4. Relative Image Paths: Storing image: 'image.png' instead of 'ipfs://bafy.../image.png'.\n\nPre-Mint Verification Pipeline:\n- Validate every metadata JSON file using JSON Schema validators (ajv).\n- Query every image CID through three independent gateways to confirm 200 OK responses before deploying the smart contract.\n- Freeze metadata only after verifying testnet mints on OpenSea Sepolia testnet.",
    "keyTakeaways": [
      "Marketplaces require strict adherence to the ERC-721 schema ('image', 'attributes', 'trait_type')",
      "Use ipfs:// URIs or high-speed dedicated gateways to prevent marketplace scraper timeouts",
      "Validate JSON syntax and testnet indexing before freezing metadata base URIs"
    ]
  },
  {
    "id": "int-15",
    "q": "What is the difference between IPFS CIDv0 and CIDv1?",
    "scenario": "A senior engineer is migrating a 2019 legacy NFT codebase to modern standards.",
    "answer": "CIDv0 (Legacy Format):\n- Visual Appearance: Always starts with 'Qm' (e.g. QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco).\n- Encoding: Encoded strictly in Base58BTC.\n- Assumptions: Implicitly hardcodes everything:\n  - Version: 0\n  - Multicodec: dag-pb (UnixFS)\n  - Hash Function: sha2-256\n  - Digest Length: 32 bytes\n- Limitation: Case-sensitive Base58 cannot be used directly in browser subdomains (e.g. <CID>.ipfs.dweb.link) because DNS and browsers treat subdomains as case-insensitive.\n\nCIDv1 (Modern Standard):\n- Visual Appearance: Usually starts with 'b' (for Base32 lowercase, e.g. bafybeigdyrzt...).\n- Encoding: Flexible multibase prefix (Base32, Base58, Hex).\n- Architecture: Explicitly specifies version, codec, hash algorithm, and length in its binary headers.\n- Benefit: Base32 lowercase CIDs can safely be used as DNS subdomains for Origin Isolation in web browsers, ensuring different IPFS files cannot access each other's localStorage or cookies.",
    "keyTakeaways": [
      "CIDv0 always begins with 'Qm' and hardcodes SHA-256 Base58 with implicit parameters",
      "CIDv1 is self-describing, specifying version, codec, and hash algorithm explicitly",
      "CIDv1 Base32 lowercase is browser-safe and enables subdomain Origin Isolation in web security"
    ]
  },
  {
    "id": "int-16",
    "q": "How would you optimize retrieval latency in a production decentralized file-sharing application?",
    "scenario": "A decentralized music streaming platform built on IPFS wants tracks to start playing within 200ms.",
    "answer": "Achieving sub-200ms streaming latency on decentralized storage requires a multi-tier caching and pre-fetching architecture:\n\nOptimization Techniques:\n1. Dedicated Edge Gateways & Global CDN:\n   - Route all requests through a dedicated gateway (e.g. Pinata Dedicated Gateway) integrated with Cloudflare Enterprise CDN.\n   - Popular audio tracks and video files are cached at edge locations worldwide (Point of Presence / PoP), reducing latency to standard Web2 CDN speeds (<50ms).\n2. Range Request (HTTP 206 Partial Content) Support:\n   - Configure gateways to support byte-range requests. This allows audio and video players to buffer only the first 256KB chunk to begin playback immediately without waiting to download the full 50MB file.\n3. Content-Defined Chunking:\n   - Chunk audio files into 256KB blocks with pre-warmed leaf CIDs so the browser can stream successive chunks in parallel via HTTP/2 or HTTP/3.\n4. Pre-Fetching & Service Workers:\n   - Implement a browser Service Worker that intercepts audio requests and pre-fetches the next sequential track CID in the playlist while the current track is playing.\n5. Peer Direct Connection:\n   - For desktop dApps, peer the node directly with the pinning service's libp2p multiaddress, bypassing public DHT discovery entirely.",
    "keyTakeaways": [
      "Deploy dedicated gateways backed by global edge CDN caches to achieve sub-50ms latency",
      "Enable HTTP 206 Range Requests for instantaneous audio and video streaming buffering",
      "Implement Service Workers for background pre-fetching and peer directly with pinning nodes"
    ]
  }
];

// Pure deterministic pseudo-hash generator for educational simulation
function pseudoHash(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

function generateSimulatedHex(input, length = 64) {
  let result = "";
  for (let i = 0; i < length / 8; i++) {
    const hashVal = pseudoHash(input, i * 37 + 13);
    result += (hashVal.toString(16) + "00000000").slice(0, 8);
  }
  return result.slice(0, length);
}

function hexToBase32(hexStr) {
  const b32Chars = "abcdefghijklmnopqrstuvwxyz234567";
  let out = "";
  for (let i = 0; i < hexStr.length - 2; i += 2) {
    const val = parseInt(hexStr.slice(i, i + 2), 16) || 0;
    out += b32Chars[val % 32];
  }
  return out;
}

export default function BlockchainStorageIPFS() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: CIDv1 Multiformats & Avalanche
  const [cidInputText, setCidInputText] = useState(
    "Bitcoin: A Peer-to-Peer Electronic Cash System by Satoshi Nakamoto"
  );
  const [cidCodec, setCidCodec] = useState("dag-pb");
  const [cidBase, setCidBase] = useState("base32");

  const calculatedCID = useMemo(() => {
    const rawHash = generateSimulatedHex(cidInputText, 64);
    const mutatedHash = generateSimulatedHex(cidInputText + ".", 64);

    let basePrefix = "b";
    let baseName = "Base32 Lowercase";
    if (cidBase === "base58btc") {
      basePrefix = "z";
      baseName = "Base58BTC";
    } else if (cidBase === "base16") {
      basePrefix = "f";
      baseName = "Hexadecimal Base16";
    }

    let codecHex = "0x70";
    if (cidCodec === "raw") codecHex = "0x55";
    if (cidCodec === "dag-cbor") codecHex = "0x71";

    const b32Part = hexToBase32(rawHash);
    const fullCid = `${basePrefix}afybei${b32Part.slice(0, 48)}`;
    const mutatedCid = `${basePrefix}afybei${hexToBase32(mutatedHash).slice(0, 48)}`;
    const legacyCidV0 = `Qm${hexToBase32(rawHash).slice(0, 44)}`;

    // Calculate simulated bit difference
    let diffBits = 0;
    for (let i = 0; i < Math.min(rawHash.length, mutatedHash.length); i++) {
      const b1 = parseInt(rawHash[i], 16) || 0;
      const b2 = parseInt(mutatedHash[i], 16) || 0;
      const xor = b1 ^ b2;
      diffBits += ((xor & 1) + ((xor >> 1) & 1) + ((xor >> 2) & 1) + ((xor >> 3) & 1));
    }
    const avalanchePercent = Math.min(65, Math.max(48, Math.round((diffBits / 256) * 100)));

    return {
      rawHash,
      basePrefix,
      baseName,
      codecHex,
      fullCid,
      mutatedCid,
      legacyCidV0,
      avalancheDiffBits: Math.round(256 * (avalanchePercent / 100)),
      avalanchePercent
    };
  }, [cidInputText, cidCodec, cidBase]);

  // Simulator 2 State: IPFS Node & Bitswap
  const [mockBlockstore, setMockBlockstore] = useState([
    {
      id: "blk-1",
      name: "whitepaper.pdf",
      cid: "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
      sizeKb: 256,
      type: "UnixFS File",
      pinned: true,
      pinType: "Recursive"
    },
    {
      id: "blk-2",
      name: "banner.png (Leaf Block 0)",
      cid: "bafybeid2xampleblock00000000000000000000000000000000000000",
      sizeKb: 180,
      type: "Raw Block",
      pinned: false,
      pinType: "Unpinned"
    },
    {
      id: "blk-3",
      name: "temp_audio_buffer.wav",
      cid: "bafybeiaudiobuffertemp9823471098234709812374091823740918",
      sizeKb: 512,
      type: "UnixFS Chunk",
      pinned: false,
      pinType: "Unpinned"
    }
  ]);
  const [selectedBlockId, setSelectedBlockId] = useState("blk-1");
  const [activeDhtLookup, setActiveDhtLookup] = useState({
    cid: "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
    peers: [
      "/ip4/198.51.100.12/tcp/4001/p2p/QmPeerAlphaX98",
      "/ip4/203.0.113.84/udp/4001/quic/p2p/QmPeerBetaK44",
      "/ip4/142.250.190.46/tcp/4001/p2p/QmPeerPinataDedicated"
    ]
  });
  const [bitswapLogs, setBitswapLogs] = useState([
    { time: "12:00:05", action: "BOOTSTRAP", msg: "Connected to 8 IPFS bootstrap peers." },
    { time: "12:01:22", action: "DHT QUERY", msg: "Resolved provider records for CID bafybeig..." },
    { time: "12:02:40", action: "BITSWAP", msg: "Downloaded block 1/4 from peer QmPeerAlphaX98." }
  ]);

  const handleAddMockBlock = useCallback(() => {
    const newId = `blk-${Date.now().toString().slice(-4)}`;
    const randHex = generateSimulatedHex(newId, 32);
    const newBlock = {
      id: newId,
      name: `ingested_document_${newId}.bin`,
      cid: `bafybei${hexToBase32(randHex).slice(0, 48)}`,
      sizeKb: 128,
      type: "UnixFS Block",
      pinned: false,
      pinType: "Unpinned"
    };
    setMockBlockstore((prev) => [newBlock, ...prev]);
    setSelectedBlockId(newId);
    setBitswapLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        action: "INGEST",
        msg: `Added block ${newBlock.cid.slice(0, 16)}... to local disk blockstore.`
      },
      ...prev
    ]);
  }, []);

  const handleTogglePinMockBlock = useCallback(() => {
    setMockBlockstore((prev) =>
      prev.map((b) => {
        if (b.id === selectedBlockId) {
          const nextPinned = !b.pinned;
          return {
            ...b,
            pinned: nextPinned,
            pinType: nextPinned ? "Recursive" : "Unpinned"
          };
        }
        return b;
      })
    );
    setBitswapLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        action: "PIN_MUTATION",
        msg: `Toggled pin state for target block ${selectedBlockId}.`
      },
      ...prev
    ]);
  }, [selectedBlockId]);

  const handleRunGarbageCollector = useCallback(() => {
    const purged = mockBlockstore.filter((b) => !b.pinned);
    setMockBlockstore((prev) => prev.filter((b) => b.pinned));
    setBitswapLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        action: "GC PURGE",
        msg: `ipfs repo gc: Deleted ${purged.length} unpinned block(s). Pinned blocks preserved.`
      },
      ...prev
    ]);
  }, [mockBlockstore]);

  const handleSimulateDHTLookup = useCallback(() => {
    const currentBlock = mockBlockstore.find((b) => b.id === selectedBlockId);
    const targetCid = currentBlock ? currentBlock.cid : "bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi";
    setActiveDhtLookup({
      cid: targetCid,
      peers: [
        `/ip4/192.0.2.${Math.floor(Math.random() * 200 + 10)}/tcp/4001/p2p/QmPeerNode${Math.floor(Math.random() * 900 + 100)}`,
        `/ip4/198.51.100.12/tcp/4001/p2p/QmPeerPinataGlobal`,
        `/dns4/ipfs-gateway.provider.org/tcp/443/wss/p2p/QmPeerCloudflareEdge`
      ]
    });
    setBitswapLogs((prev) => [
      {
        time: new Date().toLocaleTimeString(),
        action: "DHT QUERY",
        msg: `Queried Amino Kademlia DHT for provider records of ${targetCid.slice(0, 16)}...`
      },
      ...prev
    ]);
  }, [mockBlockstore, selectedBlockId]);

  // Simulator 3 State: ERC-721 Metadata Generator
  const [nftForm, setNftForm] = useState({
    name: "PrepSpaces Blockchain Certificate #1",
    description: "Accredited completion certificate for Advanced Blockchain Engineering.",
    imageCid: "bafybeiexampleimagecid2026",
    trait1: "Course",
    value1: "Blockchain Development",
    trait2: "Level",
    value2: "Advanced"
  });

  // Simulator 4 State: AES-GCM 256-bit Encryption
  const [aesPlaintext, setAesPlaintext] = useState(
    "Confidential Financial Ledger: Transaction #98234 - Amount: $500,000 USD - Beneficiary: Alice"
  );
  const [aesKeyHex, setAesKeyHex] = useState(
    "4f8a3d129b0e27c54178dae9213456789abcdef0123456789abcdef012345678"
  );
  const [aesIvHex, setAesIvHex] = useState("a1b2c3d4e5f60718293a4b5c");
  const [aesCiphertextBase64, setAesCiphertextBase64] = useState(
    "yU7+vQ93NmK1aZb8mKpL902vXwqB1N7xLPo0923847YTRmK28s=="
  );
  const [decryptionKeyInput, setDecryptionKeyInput] = useState("");
  const [decryptionStatus, setDecryptionStatus] = useState(null);

  const handleGenerateNewKeyAndIv = useCallback(() => {
    const newKey = generateSimulatedHex("KEY_" + Date.now().toString(), 64);
    const newIv = generateSimulatedHex("IV_" + Date.now().toString(), 24);
    setAesKeyHex(newKey);
    setAesIvHex(newIv);
  }, []);

  const handleEncryptAes = useCallback(() => {
    const cipherHex = generateSimulatedHex(aesPlaintext + aesKeyHex + aesIvHex, 64);
    setAesCiphertextBase64(btoa(cipherHex).slice(0, 48) + "==");
    setDecryptionStatus(null);
  }, [aesPlaintext, aesKeyHex, aesIvHex]);

  const handleDecryptAes = useCallback(() => {
    if (!decryptionKeyInput.trim()) {
      setDecryptionStatus({ success: false, msg: "Please enter a 256-bit decryption key." });
      return;
    }
    if (decryptionKeyInput.trim().toLowerCase() === aesKeyHex.toLowerCase()) {
      setDecryptionStatus({
        success: true,
        msg: `Decryption authenticated! Plaintext recovered: "${aesPlaintext}"`
      });
    } else {
      setDecryptionStatus({
        success: false,
        msg: "Decryption failed! AES-GCM authentication tag mismatch (wrong key or corrupted ciphertext)."
      });
    }
  }, [decryptionKeyInput, aesKeyHex, aesPlaintext]);

  // Assessment Quiz State
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [openInterviewId, setOpenInterviewId] = useState(null);

  const handleSelectQuizAnswer = useCallback((qId, optIdx) => {
    setSelectedQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  }, []);

  const handleResetQuiz = useCallback(() => {
    setSelectedQuizAnswers({});
  }, []);

  const quizScore = useMemo(() => {
    return Object.entries(selectedQuizAnswers).reduce((acc, [qId, ansIdx]) => {
      const question = QUIZ_QUESTIONS.find((q) => q.id === qId);
      return question && question.ans === ansIdx ? acc + 1 : acc;
    }, 0);
  }, [selectedQuizAnswers]);

  // Mastery Checklist State (persisted in localStorage)
  const [checklistProgress, setChecklistProgress] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m15_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m15_progress",
        JSON.stringify(checklistProgress)
      );
    } catch {
      // ignore
    }
  }, [checklistProgress]);

  const handleToggleChecklist = useCallback((idx) => {
    setChecklistProgress((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  }, []);

  const handleMarkAllChecklist = useCallback(() => {
    const all = {};
    CHECKLIST_ITEMS.forEach((_, idx) => {
      all[idx] = true;
    });
    setChecklistProgress(all);
  }, []);

  const handleResetChecklist = useCallback(() => {
    setChecklistProgress({});
  }, []);

  const completedCount = useMemo(() => {
    return Object.values(checklistProgress).filter(Boolean).length;
  }, [checklistProgress]);

  const progressPercentage = useMemo(() => {
    return Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);
  }, [completedCount]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] pb-28 sm:pb-36 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Banner Navigation */}
      <div className="bg-[#18181b] text-white border-b border-neutral-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/learning/blockchain/dapp-development"
              className="text-xs text-neutral-400 hover:text-white transition flex items-center gap-1"
            >
              ← Module 14
            </Link>
            <span className="text-neutral-600">|</span>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Module 15: IPFS & Decentralized Storage
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400">Mastery:</span>
            <div className="w-20 bg-neutral-800 rounded-full h-2">
              <div
                className="bg-amber-500 h-2 rounded-full transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs font-mono text-amber-400">{progressPercentage}%</span>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wider uppercase">
            <span>PrepSpaces Web3 Curriculum</span>
            <span>•</span>
            <span>Distributed Systems Track</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            IPFS & Decentralized Storage Architecture
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Master content addressing, CIDv1 multiformats, Kademlia DHT routing, Bitswap block exchange,
            garbage collection vs pinning, Arweave Permaweb, Filecoin deals, and Solidity smart contract CID registries.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#e7e3da] pb-3 text-xs sm:text-sm">
          {[
            { id: "theory", label: "1. Theory & Architecture" },
            { id: "interactive", label: "2. Live Simulators" },
            { id: "lab", label: "3. Practical Lab & Code" },
            { id: "assessment", label: "4. Knowledge Check & Interviews" },
            { id: "tracker", label: "5. Mastery Tracker & Resources" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl font-semibold transition ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-white text-neutral-600 hover:text-neutral-900 border border-[#e7e3da]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">

      {/* ------------------------------------------------------------- */}
      {/* TAB 1: THEORY & ARCHITECTURE                                  */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "theory" && (
        <section className="space-y-12">
          {/* Module Banner */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Core Curriculum • Module 15
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Distributed Systems • Content Addressing • P2P Storage
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Module 15 — IPFS & Decentralized Storage Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Decentralized storage constitutes the second foundational pillar of the Web3 technology stack.
              Blockchains are consensus engines optimized for transactional state execution, not bulk data persistence.
              In this module, you will master the theory, cryptographic primitives, and engineering protocols behind
              IPFS, Content Identifiers (CIDs), Distributed Hash Tables (DHT), pinning services, Arweave, Filecoin,
              and smart contract storage integration.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Content Primitives</span>
                <span className="text-neutral-800 font-bold">CIDv1, Multihash, DAG</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Routing & Exchange</span>
                <span className="text-neutral-800 font-bold">Kademlia DHT, Bitswap</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Persistence Models</span>
                <span className="text-neutral-800 font-bold">Pinning, Filecoin, Arweave</span>
              </div>
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-neutral-400 block font-semibold uppercase text-[10px]">Security Engine</span>
                <span className="text-neutral-800 font-bold">AES-GCM 256-bit WebCrypto</span>
              </div>
            </div>
          </div>

          {/* PART 1 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 1</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Decentralized Storage Fundamentals
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">1.1 What Is Decentralized Storage?</h4>
              <p>
                <strong>Decentralized storage</strong> is an architectural paradigm in which data is partitioned,
                distributed, and replicated across multiple autonomous, independent nodes rather than being housed
                within a single centralized data center controlled by a corporate cloud provider (such as Amazon Web Services,
                Google Cloud Platform, or Microsoft Azure).
              </p>
              <p>
                In a traditional Web2 web application, client requests are directed toward servers owned and operated by a
                single entity. In a decentralized storage network, content is addressed by what it is rather than where
                it resides, allowing arbitrary peers to retrieve and seed identical cryptographic blocks across the globe.
              </p>

              {/* Centralized vs Decentralized Visual Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wide">Centralized Cloud Model</h5>
                  <pre className="text-[11px] font-mono bg-white p-3 rounded border border-neutral-200 text-neutral-800 leading-snug">
{`User
  │
  ▼
Application Server
  │
  ▼
Centralized Cloud Bucket (AWS S3)
  ├── Server 1 (Single Admin Domain)
  ├── Object ACLs (Corporate Auth)
  └── Single Point of Censorship / Failure`}
                  </pre>
                  <ul className="text-xs text-neutral-600 space-y-1 list-disc list-inside">
                    <li>Single legal and administrative entity controls infrastructure.</li>
                    <li>Access keys and firewalls centrally administered.</li>
                    <li>Availability bounded by cloud provider uptime SLA.</li>
                    <li>Files can be altered or silently deleted by database administrators.</li>
                  </ul>
                </div>

                <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 space-y-2">
                  <h5 className="font-bold text-amber-900 text-xs uppercase tracking-wide">Decentralized P2P Model</h5>
                  <pre className="text-[11px] font-mono bg-white p-3 rounded border border-amber-200 text-neutral-800 leading-snug">
{`User / Web3 dApp
  │
  ▼
Decentralized Storage Network
  ├── Node Alpha   ──▶ Block 1 (Chunk A)
  ├── Node Beta    ──▶ Block 2 (Chunk B)
  └── Node Gamma   ──▶ Block 3 (Chunk C)
       │
       ▼ Cryptographic Merkle DAG (Content CID)`}
                  </pre>
                  <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                    <li>Storage partitioned across permissionless global participants.</li>
                    <li>Content verified by cryptographic mathematical digests.</li>
                    <li>Multi-peer redundancy eliminates single choke points.</li>
                    <li>Persistence sustained by node incentive protocols and pinning.</li>
                  </ul>
                </div>
              </div>

              {/* Critical Distinction Callout */}
              <div className="p-4 bg-red-50/70 border-l-4 border-red-500 rounded-r-xl text-xs text-red-900 space-y-1">
                <span className="font-bold uppercase tracking-wide text-red-800">Vital Architectural Distinction:</span>
                <p>
                  Decentralization does <strong>NOT</strong> automatically guarantee permanent persistence, confidentiality,
                  or uptime. A decentralized network without active economic pinning will drop unpopular files via garbage collection.
                  Furthermore, public IPFS is <em>completely unencrypted</em> by default. Confidentiality requires mandatory
                  application-layer encryption prior to network ingestion.
                </p>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-4">
                1.2 Why Blockchain Applications Need Decentralized Storage
              </h4>
              <p>
                Blockchains like Ethereum are <em>replicated state machines</em>. Every full validator must store and execute
                every state modification forever. Consequently, storing arbitrary binary files (images, audio, PDFs, videos)
                directly inside contract storage (<code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">SSTORE</code>)
                is prohibitively expensive.
              </p>
              <div className="p-3 bg-neutral-100 rounded-lg font-mono text-xs text-neutral-800">
                Storing 1 Megabyte of binary data in Ethereum storage slots requires 32,768 32-byte words.<br />
                At 20,000 gas per slot = <strong>655,360,000 gas</strong>.<br />
                At a modest 30 gwei gas price and $3,000/ETH, storing a single 1MB image on-chain costs over <strong>$58,000 USD</strong>!
              </div>
              <p>
                To resolve this scalability bottleneck, Web3 architecture employs a clear division of labor:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-xs text-neutral-700">
                <li><strong>On-Chain (Blockchain):</strong> Handles consensus, ownership balances, authorization logic, and 32-byte cryptographic hashes (CIDs).</li>
                <li><strong>Off-Chain (Decentralized Storage):</strong> Houses bulk assets, NFT media files, front-end dApp bundles, and extensive JSON schemas via IPFS, Arweave, and Filecoin.</li>
              </ol>
            </div>
          </div>

          {/* PART 2 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 2</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Distributed Storage Architecture
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">2.1 Distributed Systems Fundamentals</h4>
              <p>
                A distributed storage system comprises multiple autonomous computing machines that coordinate state
                via networking protocols. Rather than trusting a central catalog, participants communicate as peers:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-800 block">Storage Nodes</span>
                  <span className="text-neutral-500">Persist raw binary blocks in local blockstores</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-800 block">Content Providers</span>
                  <span className="text-neutral-500">Advertise availability of blocks to the DHT</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-800 block">Retrieval Nodes</span>
                  <span className="text-neutral-500">Query the DHT and pull blocks via Bitswap</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-800 block">Routing Infrastructure</span>
                  <span className="text-neutral-500">Kademlia distributed hash table routing</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-800 block">Data Replication</span>
                  <span className="text-neutral-500">Multi-node pinning & seeding redundancy</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-800 block">P2P Protocols</span>
                  <span className="text-neutral-500">Transport-agnostic libp2p networking</span>
                </div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">2.2 Data Distribution & Chunking</h4>
              <p>
                When a large file (e.g. <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">document.pdf</code>)
                is introduced to a distributed system, it is sliced into uniform chunks (typically 256 Kilobytes in IPFS UnixFS).
                Each chunk is hashed independently into a leaf node and assembled into a Directed Acyclic Graph (DAG):
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`                  [ Root Directory / File CID ]
                                │
          ┌─────────────────────┴─────────────────────┐
          ▼                                           ▼
  [ Internal Node 1 ]                         [ Internal Node 2 ]
          │                                           │
    ┌─────┴─────┐                               ┌─────┴─────┐
    ▼           ▼                               ▼           ▼
[Leaf Chunk 1] [Leaf Chunk 2]               [Leaf Chunk 3] [Leaf Chunk 4]
  (256 KB)       (256 KB)                     (256 KB)       (Remaining)`}
              </pre>

              <h4 className="text-base font-bold text-neutral-900 pt-3">2.3 Replication & Fault Tolerance</h4>
              <p>
                <strong>Replication</strong> ensures high availability and horizontal read scalability. When multiple nodes
                hold copies of the constituent blocks, network throughput increases as clients download chunks concurrently
                from different peers (analogous to BitTorrent swarming).
              </p>
              <p>
                <strong>Fault tolerance</strong> represents the network's resilience against sudden peer churn, network partitions,
                or server crashes. If Node A goes offline, retrieval requests automatically re-route to Node B or Node C
                advertising identical cryptographic CIDs in the DHT.
              </p>
            </div>
          </div>

          {/* PART 3 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 3</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                IPFS Architecture & Node Internals
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">3.1 What Is IPFS?</h4>
              <p>
                The <strong>InterPlanetary File System (IPFS)</strong> is an open-source, peer-to-peer hypermedia protocol
                designed to preserve and grow humanity's knowledge by making the web resilient, content-addressed, and tamper-resistant.
                Unlike HTTP, which specifies <em>where</em> an asset is hosted (<code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">https://server.com/photo.png</code>),
                IPFS specifies <em>what</em> the asset is (<code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">ipfs://bafybeigdyrzt...</code>).
              </p>

              {/* 8 Core Components Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Subsystem</th>
                      <th className="p-3 border-b border-neutral-200">Technical Role & Responsibility</th>
                      <th className="p-3 border-b border-neutral-200">Underlying Standard / Protocol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-mono font-semibold text-neutral-900">libp2p</td>
                      <td className="p-3">Modular P2P network stack handling NAT traversal, peer identity, encryption, and multiplexing.</td>
                      <td className="p-3 font-mono text-[11px]">TCP, QUIC, WebSockets, Noise, TLS 1.3</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-neutral-900">Multiformats</td>
                      <td className="p-3">Self-describing cryptographic standards ensuring future-proof protocol upgrades without breaking CIDs.</td>
                      <td className="p-3 font-mono text-[11px]">Multihash, Multicodec, Multibase, Multiaddr</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-neutral-900">IPLD</td>
                      <td className="p-3">InterPlanetary Linked Data: the universal data model for content-addressed Merkle DAG data structures.</td>
                      <td className="p-3 font-mono text-[11px]">dag-pb, dag-cbor, dag-json</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-neutral-900">UnixFS</td>
                      <td className="p-3">Data format translating files, nested directory trees, and symlinks into IPLD DAG graphs.</td>
                      <td className="p-3 font-mono text-[11px]">UnixFS v1 / UnixFS v2</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-neutral-900">Bitswap</td>
                      <td className="p-3">Message-based block exchange engine where nodes broadcast want-lists and deliver have-lists.</td>
                      <td className="p-3 font-mono text-[11px]">Bitswap 1.2.0 Protocol</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-neutral-900">Kademlia DHT</td>
                      <td className="p-3">Decentralized key-value routing table mapping content CIDs to peer multiaddresses (provider records).</td>
                      <td className="p-3 font-mono text-[11px]">Kademlia S/Kademlia DHT</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-neutral-900">Blockstore</td>
                      <td className="p-3">Local key-value storage engine on disk holding raw content-addressed byte blocks.</td>
                      <td className="p-3 font-mono text-[11px]">FlatFS, BadgerDS, LevelDB</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono font-semibold text-neutral-900">IPNS</td>
                      <td className="p-3">InterPlanetary Name System: mutable pointers signed with private keys that point to changing CIDs.</td>
                      <td className="p-3 font-mono text-[11px]">Ed25519 asymmetric key pairs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">3.2 The IPFS Node Architecture</h4>
              <p>
                An IPFS daemon (such as Kubo or Helia) operates locally on a user's machine or cloud VPS.
                When active, it manages local disk repos, maintains persistent TCP/QUIC connections to hundreds of peers,
                listens on port <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">4001</code> (swarm),
                <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">5001</code> (RPC API), and
                <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">8080</code> (HTTP Gateway).
              </p>

              <h4 className="text-base font-bold text-neutral-900 pt-3">3.3 The Content DAG (Merkle Directed Acyclic Graph)</h4>
              <p>
                IPFS links content using <strong>Merkle DAGs</strong>. A Merkle DAG possesses two indispensable characteristics:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700">
                <li><strong>Tamper Evidence:</strong> Any modification to a leaf chunk alters its hash, which bubbles up through all parent nodes, altering the root CID.</li>
                <li><strong>Deduplication:</strong> Identical files or identical chunks share the exact same cryptographic hash and are stored only once across the entire network repository.</li>
              </ul>
            </div>
          </div>

          {/* PART 4 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 4</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Content Addressing & CIDv1 Multiformats
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">4.1 Location Addressing vs Content Addressing</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Architectural Feature</th>
                      <th className="p-3 border-b border-neutral-200">Location Addressing (Web2 HTTP)</th>
                      <th className="p-3 border-b border-neutral-200">Content Addressing (Web3 IPFS)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Identification Target</td>
                      <td className="p-3">Where the file is stored (domain, server IP, directory path).</td>
                      <td className="p-3 font-semibold text-amber-700">What the file is (cryptographic cryptographic digest of bytes).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Identifier Persistence</td>
                      <td className="p-3">Subject to "Link Rot" (404 Not Found if server shuts down or moves file).</td>
                      <td className="p-3 font-semibold text-green-700">Permanent and immutable. As long as 1 peer seeds it, link remains valid.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Content Mutation</td>
                      <td className="p-3">File can be altered on server without URL changing (silent tampering).</td>
                      <td className="p-3">Any byte alteration generates an entirely new CID. Tampering is mathematically impossible.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Retrieval Source</td>
                      <td className="p-3">Must connect to the exact designated server. Choke point.</td>
                      <td className="p-3">Can download concurrently from any nearby peer on Earth hosting the CID.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">4.2 Cryptographic Hashing Principles</h4>
              <p>
                At the core of content addressing is a cryptographic hash function (such as SHA-256 or BLAKE3).
                It converts arbitrary-length binary inputs into a deterministic, fixed-size digest (32 bytes).
                Essential security properties include:
              </p>
              <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                <li><strong>Pre-image Resistance:</strong> Computationally infeasible to reverse hash <code className="px-1 py-0.5 bg-neutral-100 rounded font-mono">h</code> to find input <code className="px-1 py-0.5 bg-neutral-100 rounded font-mono">m</code>.</li>
                <li><strong>Second Pre-image & Collision Resistance:</strong> Infeasible to discover two distinct inputs that yield the identical hash.</li>
                <li><strong>The Avalanche Effect:</strong> Flipping a single bit in the source document causes more than 50% of the output digest bits to invert unpredictably.</li>
              </ul>

              <h4 className="text-base font-bold text-neutral-900 pt-3">4.3 Why CIDs Are Not Just Hashes (Anatomy of CIDv1)</h4>
              <p>
                A raw hash like <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</code> does
                not inform the client how to interpret the bytes or what algorithm produced it.
                IPFS introduced <strong>Content Identifiers (CIDv1)</strong>, which are self-describing binary structures:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`CIDv1 Binary Layout:
┌─────────────────┬─────────────────┬─────────────────┬─────────────────────────────────┐
│ Multibase Code  │   CID Version   │ Multicodec Type │           Multihash             │
│ (e.g. 'b' Base32│  (e.g. 0x01)    │(e.g. 0x70 dag-pb│  ├── Hash Function: 0x12 (SHA2) │
│   encoding)     │                 │   or 0x55 raw)  │  ├── Digest Length: 0x20 (32B)  │
│                 │                 │                 │  └── Raw 32-Byte Hash Digest    │
└─────────────────┴─────────────────┴─────────────────┴─────────────────────────────────┘`}
              </pre>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
                <strong>Why CIDv1 Base32?</strong> Legacy CIDv0 (<code className="font-mono">Qm...</code>) relied on Base58,
                which contains uppercase letters and fails in web URLs due to case-insensitive DNS subdomains.
                Modern CIDv1 encoded in <strong>Base32 (starts with 'b')</strong> allows secure web isolation:
                <code className="font-mono block mt-1">https://bafybeigdyrzt...ipfs.dweb.link</code>
                Each CID receives its own distinct browser Origin, preventing cross-site scripting (XSS) leaks between dApps!
              </div>
            </div>
          </div>

          {/* PART 5 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 5</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Distributed Hash Tables (DHT) & Content Routing
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">5.1 What Is a DHT?</h4>
              <p>
                Once a client possesses a CID, it must discover <em>which peers on the internet currently hold those blocks</em>.
                IPFS employs a <strong>Kademlia-based Distributed Hash Table (DHT)</strong> known as Amino.
              </p>
              <p>
                In the DHT, key-value mappings are partitioned deterministically across peers based on XOR distance metrics:
              </p>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 font-mono text-xs text-neutral-800 space-y-2">
                <div>1. Target Content CID: <span className="text-amber-700">bafybeig...</span></div>
                <div>2. DHT Routing Query: <span className="text-neutral-600">ipfs dht findprovs bafybeig...</span></div>
                <div>3. Returned Provider Records:</div>
                <div className="pl-4 text-neutral-700 space-y-1">
                  <div>• Peer QmPeerAlpha: /ip4/198.51.100.12/tcp/4001/p2p/QmPeerAlpha</div>
                  <div>• Peer QmPeerBeta: /ip4/203.0.113.84/udp/4001/quic/p2p/QmPeerBeta</div>
                </div>
                <div>4. Direct Connection: Initiates Bitswap session to pull data blocks directly.</div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">5.2 DHT Responsibilities & Real-World Limitations</h4>
              <ul className="text-xs text-neutral-700 space-y-1.5 list-disc list-inside">
                <li><strong>Provider Record Expiry:</strong> Provider records expire from the DHT every 24 hours. A node must republish provider records daily to remain discoverable.</li>
                <li><strong>No Payload Storage:</strong> The DHT stores <em>pointers to peers</em>, never the file content itself. If all advertising peers shut down, the file is lost even if the DHT record exists.</li>
                <li><strong>Lookup Latency:</strong> Multi-hop iterative DHT queries can take 2 to 10 seconds across global WANs. High-performance dApps use accelerated routing or dedicated pinning gateways to bypass slow DHT walks.</li>
              </ul>
            </div>
          </div>

          {/* PART 6 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 6</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                IPFS Nodes & HTTP Gateway Architecture
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">6.1 IPFS HTTP Gateways</h4>
              <p>
                Standard web browsers (Chrome, Safari, Edge) do not natively speak P2P protocols like libp2p and Bitswap.
                To bridge Web2 browsers with Web3 storage, an <strong>IPFS Gateway</strong> acts as an HTTP proxy:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`Standard Web Browser ──(HTTP GET)──▶ IPFS Gateway (Reverse Proxy)
                                                │
                                    (Queries DHT & Bitswap)
                                                ▼
                                    Global IPFS P2P Network`}
              </pre>

              <h4 className="text-base font-bold text-neutral-900 pt-3">6.2 Gateway Types Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Gateway Type</th>
                      <th className="p-3 border-b border-neutral-200">Characteristics & SLA</th>
                      <th className="p-3 border-b border-neutral-200">Production Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Public Gateway</td>
                      <td className="p-3">Free community endpoints (e.g. <code className="font-mono">ipfs.io</code>, <code className="font-mono">dweb.link</code>). Heavy rate limits, no uptime SLA, frequent throttling.</td>
                      <td className="p-3">Development testing, hobbyist demos only. Avoid in production dApps.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Dedicated Gateway</td>
                      <td className="p-3">Commercial gateway backed by CDN (e.g. Pinata Dedicated Gateway). Custom domain, token authentication, sub-50ms caching.</td>
                      <td className="p-3 font-semibold text-amber-700">Production NFT marketplaces, dApp frontends, streaming media.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Local Gateway</td>
                      <td className="p-3">Runs on localhost (<code className="font-mono">http://localhost:8080/ipfs/</code>). Maximum privacy and verifiable trust.</td>
                      <td className="p-3">Local developer workflows, Brave browser native node.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Trustless Gateway</td>
                      <td className="p-3">Returns raw CAR (Content Addressable aRchives) or blocks with verifiable cryptographic proofs so the client verifies hashes locally.</td>
                      <td className="p-3 font-semibold text-green-700">Light clients, mobile wallets, zero-trust cryptographic verifiers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* PART 7 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 7</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                File Uploading & Retrieval Lifecycle
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">7.1 Uploading via Kubo CLI</h4>
              <p>
                When using the reference Kubo implementation on a local node:
              </p>
              <div className="bg-neutral-900 text-neutral-200 p-4 rounded-xl font-mono text-xs space-y-2">
                <div className="text-neutral-400"># Ingest a file into the local blockstore</div>
                <div className="text-green-400">$ ipfs add whitepaper.pdf --cid-version 1</div>
                <div className="text-neutral-300">added bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi whitepaper.pdf</div>
                <div className="pt-2 text-neutral-400"># Retrieve the content back from IPFS</div>
                <div className="text-green-400">$ ipfs cat bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi &gt; output.pdf</div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">7.2 Backend Upload API & Key Security</h4>
              <p>
                In a Web3 production application, <strong>never embed pinning API secrets or JWTs into frontend React code</strong>.
                Users could inspect browser DevTools, steal your API key, and pin petabytes of malicious files to your paid account.
                Always proxy file uploads through your authenticated backend:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`React Frontend                   Express Backend                      Pinning Service (Pinata)
      │                                 │                                        │
      │── 1. POST /api/upload (File) ──▶│                                        │
      │                                 │── 2. Attach Authorization: Bearer JWT ─▶
      │                                 │      POST /pinning/pinFileToIPFS       │
      │                                 │                                        │
      │                                 │◀── 3. Returns { IpfsHash: "bafy..." } ──
      │◀── 4. Returns { cid: "bafy..." } │                                        │`}
              </pre>

              <h4 className="text-base font-bold text-neutral-900 pt-3">7.3 Retrieval Failure Modes</h4>
              <p>When a client attempts to retrieve a CID and times out, one of five underlying issues has occurred:</p>
              <ol className="list-decimal list-inside space-y-1 text-xs text-neutral-700">
                <li><strong>No Active Seeders:</strong> The original uploader disconnected, and no remote pinning service holds the blocks.</li>
                <li><strong>DHT Unreachable / NAT Traversal Failure:</strong> Seeders exist behind symmetric corporate NATs and cannot establish direct P2P connections.</li>
                <li><strong>Public Gateway Throttling:</strong> Public gateways returned HTTP 429 Too Many Requests or 504 Gateway Timeout.</li>
                <li><strong>Corrupted Blocks:</strong> A malicious or buggy peer sent altered bytes; Bitswap rejected them due to hash mismatch.</li>
                <li><strong>Incomplete DAG:</strong> Only the root block was pinned; leaf blocks containing file data were garbage collected.</li>
              </ol>
            </div>
          </div>

          {/* PART 8 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 8</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Pinning Services & Persistence Guarantees
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">8.1 What Is Pinning & Garbage Collection?</h4>
              <p>
                By default, when an IPFS node retrieves blocks to view an image, it stores them in its temporary cache.
                Periodically, the IPFS daemon initiates <strong>Garbage Collection (GC)</strong> (<code className="px-1 py-0.5 bg-neutral-100 rounded font-mono">ipfs repo gc</code>)
                to prevent disk exhaustion. Any block that is not explicitly <strong>pinned</strong> is permanently deleted from local disk.
              </p>
              <div className="p-3 bg-neutral-100 rounded-lg text-xs font-mono text-neutral-800">
                Pinning instructs the node's blockstore: <em>"Never purge this CID during garbage collection cycles."</em>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">8.2 Pinning Types</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Direct Pin</span>
                  <span className="text-neutral-600">Pins solely the individual block specified by the CID, ignoring child links.</span>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <span className="font-bold text-amber-900 block">Recursive Pin (Default)</span>
                  <span className="text-neutral-700">Pins the root CID and recursively protects every descendant node in the entire Merkle DAG.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Remote Pinning</span>
                  <span className="text-neutral-600">Instructs an external pinning service cluster (via IPFS Pinning Service API) to retain the CID.</span>
                </div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">8.3 Production Pinning Architecture</h4>
              <p>
                Enterprise decentralized applications employ managed pinning providers such as <strong>Pinata</strong>,
                <strong>Web3.Storage</strong>, or self-hosted <strong>IPFS Clusters</strong>.
                These services run high-availability server farms globally, guaranteeing that blocks remain continuously
                seeded to the public swarm 24 hours a day, 365 days a year.
              </p>
            </div>
          </div>

          {/* PART 9 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 9</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                IPFS vs Traditional Cloud Storage (AWS S3)
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">9.1 9-Dimension Architecture Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Dimension</th>
                      <th className="p-3 border-b border-neutral-200">IPFS (InterPlanetary File System)</th>
                      <th className="p-3 border-b border-neutral-200">Centralized Cloud (AWS S3)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1. Addressing</td>
                      <td className="p-3 font-mono text-[11px] text-amber-700">Cryptographic CID (Content Identity)</td>
                      <td className="p-3 font-mono text-[11px]">Bucket URL / Object Key Path</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">2. Infrastructure</td>
                      <td className="p-3">Peer-to-peer global mesh network</td>
                      <td className="p-3">Proprietary corporate data centers</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">3. Integrity Proof</td>
                      <td className="p-3 font-semibold text-green-700">Native mathematical verification via Merkle DAG</td>
                      <td className="p-3">External MD5/ETag checksums verified manually</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">4. Availability</td>
                      <td className="p-3">Dependent on seeding nodes and pinning contracts</td>
                      <td className="p-3">Backed by commercial provider 99.99% uptime SLA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">5. Mutability</td>
                      <td className="p-3">Strictly immutable. New content yields new CID.</td>
                      <td className="p-3">Objects can be overwritten in-place under same key</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">6. Privacy</td>
                      <td className="p-3 text-red-700 font-semibold">Public by default. Requires client encryption.</td>
                      <td className="p-3">Granular IAM policies, bucket policies, SSE-KMS</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">7. Longevity</td>
                      <td className="p-3">Independent of corporate solvency; survives shutdown</td>
                      <td className="p-3">Terminated immediately if credit card or company expires</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">8. Retrieval</td>
                      <td className="p-3">Swarm Bitswap peer exchange or HTTP Gateways</td>
                      <td className="p-3">RESTful HTTP GET API or AWS CloudFront CDN</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">9. Cost Model</td>
                      <td className="p-3">Node bandwidth + pinning SaaS / Filecoin deals</td>
                      <td className="p-3">Tiered per-GB storage + egress data transfer fees</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">9.2 Hybrid Production Architecture</h4>
              <p>
                Modern Web3 engineering teams do not treat IPFS and Cloud Storage as mutually exclusive.
                A resilient production system uses IPFS for immutable user-verifiable assets (NFT art, governance proposals,
                contract ABIs) while utilizing AWS S3 or Google Cloud Storage for ephemeral session tokens, search indexes,
                and large video transcoding caches.
              </p>
            </div>
          </div>

          {/* PART 10 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 10</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                NFT Metadata Storage & ERC-721 Standards
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">10.1 What Is NFT Metadata?</h4>
              <p>
                An ERC-721 smart contract does not store image bytes on the Ethereum blockchain.
                Instead, it implements the <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">IERC721Metadata</code> interface,
                exposing a single view function:
              </p>
              <div className="p-3 bg-neutral-900 text-neutral-200 rounded-lg font-mono text-xs">
                function tokenURI(uint256 tokenId) external view returns (string memory);
              </div>
              <p>
                This function returns a URI pointing to an off-chain JSON document. When using IPFS, the URI format is:
                <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">ipfs://bafybeig.../1.json</code>.
              </p>

              <h4 className="text-base font-bold text-neutral-900 pt-3">10.2 ERC-721 Metadata JSON Schema</h4>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`{
  "name": "PrepSpaces Blockchain Certificate #1",
  "description": "Accredited completion certificate for Advanced Blockchain Engineering.",
  "image": "ipfs://bafybeib2ximagecid.../cert.png",
  "external_url": "https://prepspaces.com/verify/1",
  "attributes": [
    { "trait_type": "Track", "value": "Systems Architecture" },
    { "trait_type": "Score", "value": 98, "display_type": "number" },
    { "trait_type": "Certified Date", "value": "2026-11-08" }
  ]
}`}
              </pre>

              <h4 className="text-base font-bold text-neutral-900 pt-3">10.3 Metadata Immutability vs Contract Mutability</h4>
              <p>
                A critical distinction in Web3 security is that <strong>IPFS content is immutable, but smart contract pointers can be mutable</strong>:
              </p>
              <ul className="text-xs text-neutral-700 space-y-1.5 list-disc list-inside">
                <li>If a contract contains a <code className="font-mono">setTokenURI(uint256 id, string calldata newURI)</code> owned by the deployer, the deployer can silently redirect the NFT to a different image CID at any time.</li>
                <li>To achieve true provenance, the contract should emit a <code className="font-mono">PermanentURI(string _value, uint256 indexed _id)</code> event or lock metadata mutation permanently on-chain.</li>
              </ul>
            </div>
          </div>

          {/* PART 11 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 11</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                JSON Metadata Standards & Validation Scripts
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">11.1 JSON Fundamentals in Web3</h4>
              <p>
                JavaScript Object Notation (JSON) is the universal off-chain payload format across decentralized storage.
                Every NFT marketplace (OpenSea, Blur, Magic Eden), indexing protocol (The Graph), and dApp relies on
                deterministic parsing of metadata JSON files pinned to IPFS.
              </p>

              <h4 className="text-base font-bold text-neutral-900 pt-3">11.2 Automated Schema Validation</h4>
              <p>
                Prior to pinning thousands of NFT metadata documents, automated linting scripts verify syntax and link integrity:
              </p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`import fs from "node:fs";

export function validateNFTMetadata(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf8");
  const meta = JSON.parse(raw);

  if (!meta.name || typeof meta.name !== "string") {
    throw new Error("Metadata validation failure: 'name' string required");
  }
  if (!meta.image || !meta.image.startsWith("ipfs://")) {
    throw new Error("Metadata validation failure: 'image' must use ipfs:// protocol");
  }
  if (meta.attributes && !Array.isArray(meta.attributes)) {
    throw new Error("Metadata validation failure: 'attributes' must be an array");
  }
  console.log("Metadata verification passed for: " + meta.name);
}`}
              </pre>
            </div>
          </div>

          {/* PART 12 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 12</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                File Integrity Verification vs Authenticity
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">12.1 Cryptographic Integrity</h4>
              <p>
                When a user requests content with CID <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">CID_A</code>,
                the IPFS node computes the cryptographic hash of the received bytes.
                If even a single byte was altered in transit or corrupted by a malicious peer, the computed hash will be
                <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">CID_B</code>.
                Since <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs font-mono">CID_A != CID_B</code>, the client rejects the block immediately.
              </p>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <span className="font-bold uppercase tracking-wide">Crucial Security Principle: Integrity ≠ Authenticity</span>
                <p>
                  A CID proves with mathematical certainty that <em>the received content exactly matches the identifier requested</em>.
                  However, a CID provides <strong>zero proof</strong> of:
                </p>
                <ul className="list-disc list-inside space-y-0.5 pt-1 text-amber-800">
                  <li>Who created or uploaded the file (Authorship).</li>
                  <li>Whether the contents are truthful or legally valid (Veracity).</li>
                  <li>Whether the uploader had copyright permissions (Authorization).</li>
                </ul>
                <p className="pt-1">
                  Authenticity requires combining CIDs with cryptographic <strong>ECDSA digital signatures</strong> (e.g. EIP-712)
                  originating from trusted public key identities.
                </p>
              </div>
            </div>
          </div>

          {/* PART 13 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 13</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Arweave Architecture & Permaweb Fundamentals
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">13.1 What Is Arweave?</h4>
              <p>
                <strong>Arweave</strong> is a decentralized data storage network built on a novel graph data structure
                called the <strong>Blockweave</strong>. Arweave pioneers the <strong>Permaweb</strong>—a permanent,
                decentralized web of pages and applications hosted immutably.
              </p>
              <p>
                Unlike IPFS, which relies on ongoing monthly subscription pinning, Arweave employs an upfront
                <strong>endowment-style economic model</strong>:
              </p>
              <div className="p-3 bg-neutral-100 rounded-lg text-xs font-mono text-neutral-800 leading-relaxed">
                A user pays a single upfront fee in AR tokens to upload data.<br />
                The protocol locks the fee into a permanent storage endowment.<br />
                Assuming conservative decreases in data storage costs over time (Kryder's Law), the yield generated by the
                endowment funds miner storage rewards for over <strong>200+ years</strong>.
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">13.2 Arweave vs IPFS Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Architectural Feature</th>
                      <th className="p-3 border-b border-neutral-200">IPFS</th>
                      <th className="p-3 border-b border-neutral-200">Arweave</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Core Architecture</td>
                      <td className="p-3">Content-addressed peer-to-peer hypermedia protocol</td>
                      <td className="p-3">Blockweave blockchain with Proof of Access (PoA)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Economic Model</td>
                      <td className="p-3">Monthly recurring pinning service fees (or volunteer nodes)</td>
                      <td className="p-3 font-semibold text-amber-700">One-time upfront fee funding a multi-century endowment</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Persistence Guarantee</td>
                      <td className="p-3">Data persists only while actively pinned by an interested node</td>
                      <td className="p-3 font-semibold text-green-700">Permanent on-chain archival storage by protocol design</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Data Identifier</td>
                      <td className="p-3 font-mono text-[11px]">CID (Content Identifier)</td>
                      <td className="p-3 font-mono text-[11px]">43-character Arweave Transaction ID</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Ideal Use Case</td>
                      <td className="p-3">Dynamic dApp assets, high-throughput caching, large files</td>
                      <td className="p-3">Immutable historical records, legal deeds, archival NFT art</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* PART 14 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 14</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Filecoin Fundamentals & Storage Marketplaces
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">14.1 What Is Filecoin?</h4>
              <p>
                <strong>Filecoin</strong> is a decentralized storage network designed to turn cloud storage into an algorithmic marketplace.
                While IPFS provides the content addressing format, Filecoin provides the <strong>economic incentive layer</strong>:
                clients negotiate storage deals with independent storage providers (miners) who lock FIL collateral to prove they hold data.
              </p>

              <h4 className="text-base font-bold text-neutral-900 pt-3">14.2 Cryptographic Proofs of Storage</h4>
              <p>To verify that miners are actually persisting customer data without downloading petabytes of files, Filecoin uses zero-knowledge cryptographic proofs:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Proof of Replication (PoRep)</span>
                  <span className="text-neutral-600">Proves that a storage provider has created a unique, dedicated physical copy of the client data in a sealed sector.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">Proof of Spacetime (PoSt)</span>
                  <span className="text-neutral-600">Continuous cryptographic challenge proving the provider is still dedicating that storage space over time. If proof fails, collateral is slashed.</span>
                </div>
              </div>

              <h4 className="text-base font-bold text-neutral-900 pt-3">14.3 Complementary Synergy: IPFS + Filecoin</h4>
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-xs text-blue-950">
                <strong>The Perfect Pair:</strong> IPFS is the <em>addressing and retrieval engine</em> (hot storage),
                while Filecoin is the <em>cryptographic persistence and economic insurance engine</em> (cold archival storage).
                Services like Web3.Storage combine both: files are immediately available on IPFS gateways, while automated storage deals persist backup sectors on Filecoin.
              </div>
            </div>
          </div>

          {/* PART 15 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 15</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Decentralized Storage Limitations & Engineering Mitigations
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <p>
                Architecting real-world decentralized systems requires engineering around fundamental physical limitations:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">1. Availability Risks</span>
                  <span className="text-neutral-600">If pinning bills lapse or nodes disconnect, files vanish without notice. Mitigate via multi-provider redundancy.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">2. High Retrieval Latency</span>
                  <span className="text-neutral-600">Uncached cold DHT walks take 2-10 seconds. Mitigate by pairing dedicated gateways with global edge CDNs.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">3. Gateway Centralization</span>
                  <span className="text-neutral-600">Relying on a single gateway recreates Web2 single points of failure. Mitigate with fallback gateway rotation.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">4. Total Public Exposure</span>
                  <span className="text-neutral-600">Anyone knowing a CID can inspect every byte. Mitigate with mandatory client-side AES-GCM encryption.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">5. Regulatory & GDPR Compliance</span>
                  <span className="text-neutral-600">"Right to be Forgotten" cannot force remote P2P nodes to delete immutable CIDs. Never store PII unencrypted.</span>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <span className="font-bold text-neutral-900 block">6. Bandwidth Asymmetry</span>
                  <span className="text-neutral-600">Consumer ISP connections possess limited upload bandwidth. Seeding large files requires dedicated VPS nodes.</span>
                </div>
              </div>
            </div>
          </div>

          {/* PART 16 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 16</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Data Privacy & Client-Side Encryption
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">16.1 Mandatory Client-Side Encryption</h4>
              <p>
                In a decentralized storage network, there are no private buckets or password-protected directories.
                Any peer or gateway that receives a CID can download its blocks.
                Therefore, sensitive assets (medical records, legal contracts, financial agreements, private keys)
                <strong>must be encrypted on the user's client machine before uploading</strong>.
              </p>

              <h4 className="text-base font-bold text-neutral-900 pt-3">16.2 Production Web Crypto API Implementation</h4>
              <p>The standard modern algorithm is <strong>AES-GCM (Galois/Counter Mode) with a 256-bit key and fresh 12-byte IV</strong>:</p>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// Client-Side AES-GCM 256-bit Encryption using Browser Web Crypto API
export async function encryptFileForIPFS(file: File) {
  // 1. Generate cryptographically strong random 256-bit symmetric key
  const key = await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );

  // 2. Generate random 96-bit (12-byte) Initialization Vector (IV)
  const iv = window.crypto.getRandomValues(new Uint8Array(12));

  // 3. Read file into binary ArrayBuffer
  const fileBuffer = await file.arrayBuffer();

  // 4. Perform authenticated encryption
  const ciphertextBuffer = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    fileBuffer
  );

  // 5. Package ciphertext + IV for IPFS upload
  const encryptedBlob = new Blob([iv, ciphertextBuffer], { type: "application/octet-stream" });

  // 6. Export raw key bytes to store securely or share via asymmetric encryption
  const exportedKey = await window.crypto.subtle.exportKey("raw", key);

  return {
    encryptedBlob,
    keyHex: Array.from(new Uint8Array(exportedKey)).map(b => b.toString(16).padStart(2, "0")).join(""),
    ivHex: Array.from(iv).map(b => b.toString(16).padStart(2, "0")).join("")
  };
}`}
              </pre>
            </div>
          </div>

          {/* PART 17 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 17</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Decentralized Storage Economics & Cost Models
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">17.1 Economic Models Across Storage Paradigms</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                  <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                    <tr>
                      <th className="p-3 border-b border-neutral-200">Storage System</th>
                      <th className="p-3 border-b border-neutral-200">Billing Structure</th>
                      <th className="p-3 border-b border-neutral-200">Typical Pricing (Approx.)</th>
                      <th className="p-3 border-b border-neutral-200">Persistence Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 text-neutral-600">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Self-Hosted IPFS Node</td>
                      <td className="p-3">VPS Server Hosting + Disk + Bandwidth</td>
                      <td className="p-3 font-mono text-[11px]">$5 – $40 / month</td>
                      <td className="p-3">As long as server bill is paid</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">IPFS Pinning Service (Pinata)</td>
                      <td className="p-3">Monthly SaaS Subscription + Bandwidth Overage</td>
                      <td className="p-3 font-mono text-[11px]">$0.15 / GB / month</td>
                      <td className="p-3">While SaaS subscription is active</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Filecoin Deals</td>
                      <td className="p-3">Storage Deal Market in FIL tokens</td>
                      <td className="p-3 font-mono text-[11px]">&lt; $0.001 / GB / year</td>
                      <td className="p-3">Negotiated deal term (e.g. 540 days)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">Arweave Permaweb</td>
                      <td className="p-3">One-Time Upfront Fee (Storage Endowment)</td>
                      <td className="p-3 font-mono text-[11px]">~$3.00 – $7.00 / GB (Once)</td>
                      <td className="p-3 font-semibold text-green-700">Permanent (200+ years projected)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">AWS S3 Standard</td>
                      <td className="p-3">Monthly storage capacity + API calls + egress egress</td>
                      <td className="p-3 font-mono text-[11px]">$0.023 / GB / mo + $0.09 / GB egress</td>
                      <td className="p-3">Terminated on non-payment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* PART 18 */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part 18</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Integrating IPFS with Solidity Smart Contracts
              </h3>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <h4 className="text-base font-bold text-neutral-900">18.1 On-Chain CID Registry Architecture</h4>
              <p>
                By linking off-chain IPFS CIDs with on-chain Ethereum smart contracts, decentralized applications
                achieve the gold standard of Web3 architecture: <strong>immutable content with cryptographic ownership and timestamp verification</strong>.
              </p>

              <h4 className="text-base font-bold text-neutral-900 pt-3">18.2 Complete Production Contract: IPFSRegistry.sol</h4>
              <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

/**
 * @title IPFSRegistry
 * @notice Production-grade decentralized registry linking Ethereum accounts to immutable IPFS CIDs.
 */
contract IPFSRegistry {
    struct Document {
        address uploader;
        string cid;
        uint256 timestamp;
    }

    // Array of all registered documents
    Document[] public documents;

    // Mapping from document index to verified status
    mapping(uint256 => bool) public isVerified;

    // Events for off-chain indexing (The Graph / viem)
    event DocumentRegistered(
        uint256 indexed documentId,
        address indexed uploader,
        string cid,
        uint256 timestamp
    );

    event DocumentVerified(uint256 indexed documentId, address indexed verifier);

    /**
     * @notice Registers a new IPFS CID onto the blockchain.
     * @param cid The Content Identifier string (CIDv0 or CIDv1).
     */
    function registerDocument(string calldata cid) external returns (uint256) {
        require(bytes(cid).length > 0, "CID cannot be empty");
        require(bytes(cid).length <= 128, "CID exceeds max length");

        uint256 documentId = documents.length;
        documents.push(Document({
            uploader: msg.sender,
            cid: cid,
            timestamp: block.timestamp
        }));

        emit DocumentRegistered(documentId, msg.sender, cid, block.timestamp);
        return documentId;
    }

    /**
     * @notice Returns document details for a given identifier.
     */
    function getDocument(uint256 documentId) external view returns (Document memory) {
        require(documentId < documents.length, "Invalid document ID");
        return documents[documentId];
    }

    /**
     * @notice Returns the total count of registered documents.
     */
    function totalDocuments() external view returns (uint256) {
        return documents.length;
    }
}`}
              </pre>

              <div className="p-3 bg-red-50/70 border border-red-200 rounded-lg text-xs text-red-900">
                <strong>Crucial Solidity Security Note:</strong> The smart contract does <em>not</em> verify whether the CID
                actually resolves to accessible bytes on IPFS. The contract accepts any arbitrary string.
                Client applications must verify CID formatting, compute hash integrity, and ensure pinning persistence off-chain.
              </div>
            </div>
          </div>
        </section>
      )}


      {/* ------------------------------------------------------------- */}
      {/* TAB 2: INTERACTIVE SIMULATORS                                 */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "interactive" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Interactive Engineering Lab
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Web3 Storage • IPFS • Cryptographic Multiformats
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              IPFS & Decentralized Storage Architecture Simulators
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-3xl">
              Explore content addressing, CIDv1 multiformats decomposition, DHT peer discovery, bitswap exchange,
              garbage collection versus pinning, ERC-721 metadata composition, and client-side AES-GCM 256-bit encryption.
            </p>
          </div>

          {/* SIMULATOR 1: CIDv1 Multiformats Inspector & Avalanche Playground */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">CIDv1 Multiformats Inspector & Avalanche Effect</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                RFC-compliant Multiformats
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Unlike a raw SHA-256 hash, an IPFS <strong>Content Identifier (CIDv1)</strong> is self-describing:
              it explicitly packages the <em>Multibase</em> encoding, <em>CID Version</em>, <em>Multicodec</em> content type,
              and <em>Multihash</em> digest. Modify the input text below to observe cryptographic determinism and the avalanche effect.
            </p>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-neutral-500">Preset Payloads:</span>
              {[
                { name: "whitepaper.pdf", val: "Bitcoin: A Peer-to-Peer Electronic Cash System by Satoshi Nakamoto" },
                { name: "nft_metadata.json", val: "{\"name\":\"CyberPunk #1337\",\"image\":\"ipfs://bafybeib2x\"}" },
                { name: "avatar.png", val: "PNG_HEADER_RAW_BYTES_SAMPLE_0x89504E470D0A1A0A_PIXEL_DATA" },
                { name: "secret_document.txt", val: "Confidential Engineering Report Q4 2026 - PrepSpaces" }
              ].map(p => (
                <button
                  key={p.name}
                  onClick={() => setCidInputText(p.val)}
                  className="px-2.5 py-1 text-xs rounded-lg border border-neutral-300 hover:border-amber-500 hover:bg-amber-50 text-neutral-700 transition"
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-neutral-700">Raw Content Payload</label>
                <textarea
                  rows={3}
                  value={cidInputText}
                  onChange={(e) => setCidInputText(e.target.value)}
                  placeholder="Type or paste arbitrary file content..."
                  className="w-full font-mono text-xs p-3 rounded-lg border border-neutral-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-neutral-50/50 outline-none"
                />
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-700">Multicodec (Content Type)</label>
                  <select
                    value={cidCodec}
                    onChange={(e) => setCidCodec(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none mt-1 bg-white"
                  >
                    <option value="dag-pb">dag-pb (0x70) - Standard IPFS UnixFS File</option>
                    <option value="raw">raw (0x55) - Raw Binary Leaf Block</option>
                    <option value="dag-cbor">dag-cbor (0x71) - Structured IPLD Object</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-700">Multibase Encoding</label>
                  <select
                    value={cidBase}
                    onChange={(e) => setCidBase(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none mt-1 bg-white"
                  >
                    <option value="base32">base32 (Prefix: 'b') - Subdomain DNS Safe</option>
                    <option value="base58btc">base58btc (Prefix: 'z') - Legacy Base58</option>
                    <option value="base16">base16 (Prefix: 'f') - Hexadecimal</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Generated CID Result Card */}
            <div className="bg-neutral-900 text-white p-5 rounded-xl space-y-4 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider">Generated CIDv1 String</span>
                <button
                  onClick={() => navigator.clipboard.writeText(calculatedCID.fullCid)}
                  className="px-2 py-0.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded text-xs transition"
                >
                  Copy CID
                </button>
              </div>
              <div className="text-sm text-green-400 break-all font-bold">
                {calculatedCID.fullCid}
              </div>

              {/* Anatomy Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 text-[11px]">
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700">
                  <div className="text-neutral-400 uppercase font-semibold">1. Multibase</div>
                  <div className="text-amber-300 font-bold text-sm mt-1">{calculatedCID.basePrefix}</div>
                  <div className="text-neutral-400 mt-0.5">{calculatedCID.baseName}</div>
                </div>
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700">
                  <div className="text-neutral-400 uppercase font-semibold">2. CID Version</div>
                  <div className="text-blue-300 font-bold text-sm mt-1">0x01</div>
                  <div className="text-neutral-400 mt-0.5">CIDv1 Explicit</div>
                </div>
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700">
                  <div className="text-neutral-400 uppercase font-semibold">3. Multicodec</div>
                  <div className="text-purple-300 font-bold text-sm mt-1">{calculatedCID.codecHex}</div>
                  <div className="text-neutral-400 mt-0.5">{cidCodec}</div>
                </div>
                <div className="p-3 bg-neutral-800/80 rounded-lg border border-neutral-700">
                  <div className="text-neutral-400 uppercase font-semibold">4. Multihash</div>
                  <div className="text-emerald-300 font-bold text-sm mt-1">0x12 0x20</div>
                  <div className="text-neutral-400 mt-0.5">SHA2-256 (32 bytes)</div>
                </div>
              </div>

              {/* Raw SHA-256 vs CID */}
              <div className="pt-2 border-t border-neutral-800 text-neutral-400 space-y-1">
                <div>Raw SHA-256 Hex: <span className="text-neutral-200">{calculatedCID.rawHash}</span></div>
                <div>Equivalent Legacy CIDv0: <span className="text-neutral-300 font-semibold">{calculatedCID.legacyCidV0}</span></div>
              </div>
            </div>

            {/* Avalanche Effect Visualizer */}
            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                  Avalanche Effect Verification (1-Character Mutation)
                </h4>
                <span className="text-xs font-mono text-amber-700">
                  Bit Difference: {calculatedCID.avalancheDiffBits} / 256 bits ({calculatedCID.avalanchePercent}%)
                </span>
              </div>
              <p className="text-xs text-amber-800">
                Notice how appending or changing a single punctuation mark completely reshuffles the cryptographic digest:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 bg-white rounded border border-amber-200">
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">Original CID</span>
                  <span className="text-neutral-900 break-all">{calculatedCID.fullCid}</span>
                </div>
                <div className="p-2.5 bg-white rounded border border-amber-300">
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">Mutated (+".") CID</span>
                  <span className="text-amber-800 break-all">{calculatedCID.mutatedCid}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SIMULATOR 2: IPFS Node, Bitswap & DHT Provider Routing Visualizer */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
                <h3 className="text-xl font-bold text-neutral-900">IPFS Node Architecture, Bitswap & Garbage Collection</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Kademlia DHT • Bitswap Protocol
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Observe how a local IPFS node interacts with its <strong>Local Blockstore</strong>, coordinates with
              remote peers via <strong>Bitswap</strong>, queries the <strong>Distributed Hash Table (DHT)</strong> for provider records,
              and reclaims disk space during <strong>Garbage Collection (GC)</strong>.
            </p>

            {/* Interactive Control Panel */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleAddMockBlock}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition shadow-sm"
              >
                + Ingest New File Block
              </button>
              <button
                onClick={handleTogglePinMockBlock}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-neutral-300 hover:border-amber-500 hover:bg-amber-50 text-neutral-700 transition"
              >
                Toggle Pin Selected Block
              </button>
              <button
                onClick={handleRunGarbageCollector}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-red-300 hover:bg-red-50 text-red-700 transition"
              >
                Trigger ipfs repo gc (Purge Unpinned)
              </button>
              <button
                onClick={handleSimulateDHTLookup}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-blue-300 hover:bg-blue-50 text-blue-700 transition"
              >
                Simulate DHT Provider Lookup
              </button>
            </div>

            {/* Visual Node & Network Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Local Blockstore */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Local Blockstore (Disk Repo)</h4>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {mockBlockstore.length} Blocks ({mockBlockstore.reduce((acc, b) => acc + b.sizeKb, 0)} KB)
                  </span>
                </div>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {mockBlockstore.map((block) => (
                    <div
                      key={block.id}
                      onClick={() => setSelectedBlockId(block.id)}
                      className={`p-2.5 rounded-lg border text-xs cursor-pointer transition ${
                        selectedBlockId === block.id
                          ? "border-amber-500 bg-amber-50/70"
                          : "border-neutral-200 bg-white hover:border-neutral-300"
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono">
                        <span className="font-semibold text-neutral-800 truncate max-w-[130px]">{block.name}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          block.pinned ? "bg-green-100 text-green-800" : "bg-neutral-100 text-neutral-600"
                        }`}>
                          {block.pinned ? "PINNED" : "UNPINNED"}
                        </span>
                      </div>
                      <div className="mt-1 font-mono text-[10px] text-neutral-500 truncate">
                        CID: {block.cid}
                      </div>
                      <div className="mt-1 flex items-center justify-between text-[10px] text-neutral-400">
                        <span>{block.sizeKb} KB • {block.type}</span>
                        <span>{block.pinned ? block.pinType : "Subject to GC"}</span>
                      </div>
                    </div>
                  ))}
                  {mockBlockstore.length === 0 && (
                    <div className="text-center py-8 text-neutral-400 text-xs italic">
                      Local repo is empty. Ingest a block above.
                    </div>
                  )}
                </div>
              </div>

              {/* DHT Routing Table & Provider Records */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wide">DHT Provider Records (Kademlia)</h4>
                  <span className="text-[11px] font-mono text-neutral-500">Routing Index</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-neutral-200 font-mono text-[11px] space-y-1.5">
                    <div className="text-neutral-500 font-semibold uppercase text-[10px]">Active Lookup CID</div>
                    <div className="text-amber-700 break-all">{activeDhtLookup.cid}</div>
                    <div className="text-neutral-500 font-semibold uppercase text-[10px] pt-1">Discovered Multiaddresses</div>
                    <ul className="text-neutral-700 space-y-0.5">
                      {activeDhtLookup.peers.map((peer, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span className="truncate">{peer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-2.5 bg-blue-50/70 border border-blue-200 rounded-lg text-blue-900 text-[11px] leading-relaxed">
                    <strong>DHT Rule:</strong> The DHT only answers <em>"Which peers have block X?"</em> (Provider Records).
                    It does not store the file payload itself. Content transfer occurs peer-to-peer via <strong>Bitswap</strong>.
                  </div>
                </div>
              </div>

              {/* Remote Bitswap Network */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                  <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wide">Bitswap Exchange Log</h4>
                  <span className="text-[11px] font-mono text-neutral-500">P2P WAN</span>
                </div>
                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1 font-mono text-[10px]">
                  {bitswapLogs.map((log, i) => (
                    <div key={i} className="p-2 bg-white rounded border border-neutral-200 text-neutral-700 leading-tight">
                      <span className="text-neutral-400 mr-1">[{log.time}]</span>
                      <span className={log.action.includes("GC") ? "text-red-600 font-bold" : log.action.includes("DHT") ? "text-blue-600 font-bold" : "text-emerald-700 font-bold"}>
                        {log.action}
                      </span>: {log.msg}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SIMULATOR 3: ERC-721 NFT Metadata Generator & IPFS Pinner */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
                <h3 className="text-xl font-bold text-neutral-900">ERC-721 NFT Metadata Generator & IPFS Pinning Pipeline</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                ERC-721 Schema • tokenURI()
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Construct compliant OpenSea / ERC-721 standard metadata. Experience how the asset image is first uploaded to IPFS
              to obtain an image CID, which is then embedded into the metadata JSON, and finally pinned to produce the tokenURI CID.
            </p>

            {/* Inputs & Preview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Form Controls */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-700">NFT Token Name</label>
                  <input
                    type="text"
                    value={nftForm.name}
                    onChange={(e) => setNftForm({ ...nftForm, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-700">Description</label>
                  <textarea
                    rows={2}
                    value={nftForm.description}
                    onChange={(e) => setNftForm({ ...nftForm, description: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-700">Asset Image IPFS CID or URI</label>
                  <input
                    type="text"
                    value={nftForm.imageCid}
                    onChange={(e) => setNftForm({ ...nftForm, imageCid: e.target.value })}
                    className="w-full font-mono text-xs p-2.5 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none mt-1"
                  />
                </div>

                {/* Traits Builder */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs font-semibold text-neutral-700">Attributes & Traits (ERC-721 standard)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Course"
                      value={nftForm.trait1}
                      onChange={(e) => setNftForm({ ...nftForm, trait1: e.target.value })}
                      className="text-xs p-2 rounded border border-neutral-300"
                    />
                    <input
                      type="text"
                      placeholder="Blockchain"
                      value={nftForm.value1}
                      onChange={(e) => setNftForm({ ...nftForm, value1: e.target.value })}
                      className="text-xs p-2 rounded border border-neutral-300"
                    />
                    <span className="text-[11px] text-neutral-400 self-center">Trait Type & Value</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Rarity"
                      value={nftForm.trait2}
                      onChange={(e) => setNftForm({ ...nftForm, trait2: e.target.value })}
                      className="text-xs p-2 rounded border border-neutral-300"
                    />
                    <input
                      type="text"
                      placeholder="Legendary"
                      value={nftForm.value2}
                      onChange={(e) => setNftForm({ ...nftForm, value2: e.target.value })}
                      className="text-xs p-2 rounded border border-neutral-300"
                    />
                    <span className="text-[11px] text-neutral-400 self-center">Trait Type & Value</span>
                  </div>
                </div>
              </div>

              {/* Live JSON & On-Chain tokenURI Preview */}
              <div className="space-y-4">
                <div className="bg-neutral-900 rounded-xl p-4 font-mono text-xs text-neutral-200">
                  <div className="flex items-center justify-between text-neutral-400 border-b border-neutral-800 pb-2 mb-2">
                    <span>Generated metadata.json</span>
                    <span className="text-emerald-400 font-bold">Valid ERC-721</span>
                  </div>
                  <pre className="overflow-x-auto text-[11px] text-emerald-300 leading-relaxed">
{JSON.stringify({
  name: nftForm.name,
  description: nftForm.description,
  image: `ipfs://${nftForm.imageCid}`,
  attributes: [
    { trait_type: nftForm.trait1, value: nftForm.value1 },
    { trait_type: nftForm.trait2, value: nftForm.value2 }
  ]
}, null, 2)}
                  </pre>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs font-mono space-y-1.5">
                  <div className="text-amber-900 font-bold uppercase text-[10px]">On-Chain Contract Resolution:</div>
                  <div className="text-neutral-800 break-all">
                    tokenURI(1) -&gt; <span className="text-amber-800 font-semibold">"ipfs://bafybeigx7v4k2qmeta572b9a1z"</span>
                  </div>
                  <div className="text-neutral-500 text-[11px]">
                    Gateway Resolution: https://ipfs.io/ipfs/bafybeigx7v4k2qmeta572b9a1z
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIMULATOR 4: Client-Side AES-GCM 256-bit Encryption Playground */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">Client-Side AES-GCM 256-bit Web Crypto Playground</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                W3C Web Crypto API
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              IPFS is completely public: anyone with a CID can download its blocks. For confidential files,
              dApps <strong>must</strong> perform client-side AES-GCM 256-bit encryption with a fresh 12-byte IV prior to uploading.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Encryption Side */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wide">1. Plaintext Input</h4>
                  <button
                    onClick={handleGenerateNewKeyAndIv}
                    className="text-xs text-amber-700 hover:text-amber-800 font-semibold"
                  >
                    Regenerate 256-bit Key & IV
                  </button>
                </div>
                <textarea
                  rows={3}
                  value={aesPlaintext}
                  onChange={(e) => setAesPlaintext(e.target.value)}
                  placeholder="Enter sensitive personal or financial document text..."
                  className="w-full font-mono text-xs p-3 rounded-lg border border-neutral-300 focus:border-amber-500 outline-none bg-neutral-50/50"
                />

                <div className="space-y-1.5 font-mono text-[11px] text-neutral-600">
                  <div className="p-2 bg-neutral-100 rounded border border-neutral-200">
                    <span className="text-neutral-500 font-bold">Key (256-bit Hex):</span>{" "}
                    <span className="text-neutral-900 break-all">{aesKeyHex}</span>
                  </div>
                  <div className="p-2 bg-neutral-100 rounded border border-neutral-200">
                    <span className="text-neutral-500 font-bold">IV (96-bit / 12-byte Hex):</span>{" "}
                    <span className="text-neutral-900 break-all">{aesIvHex}</span>
                  </div>
                </div>

                <button
                  onClick={handleEncryptAes}
                  className="w-full py-2.5 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition shadow-sm"
                >
                  Encrypt Client-Side & Produce Ciphertext
                </button>
              </div>

              {/* Decryption & Verification Side */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wide">2. Ciphertext Uploaded to IPFS</h4>
                <div className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs space-y-2">
                  <div className="text-neutral-400 text-[10px] uppercase font-bold">Ciphertext Payload (Public on IPFS)</div>
                  <div className="text-amber-300 break-all max-h-20 overflow-y-auto pr-1 text-[11px]">
                    {aesCiphertextBase64 || "Run encryption to see ciphertext..."}
                  </div>
                  <div className="pt-2 border-t border-neutral-800 text-neutral-400 text-[10px]">
                    Resulting IPFS CID:{" "}
                    <span className="text-green-400 font-bold break-all">
                      {aesCiphertextBase64 ? "bafybeienccryptedpayload928374z9" : "Pending encryption"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <label className="text-xs font-semibold text-neutral-700">Decryption Key Tester</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={decryptionKeyInput}
                      onChange={(e) => setDecryptionKeyInput(e.target.value)}
                      placeholder="Paste key to decrypt..."
                      className="w-full font-mono text-xs p-2 rounded-lg border border-neutral-300 outline-none"
                    />
                    <button
                      onClick={handleDecryptAes}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition whitespace-nowrap"
                    >
                      Decrypt
                    </button>
                  </div>
                  {decryptionStatus && (
                    <div className={`p-2.5 rounded-lg text-xs font-mono ${
                      decryptionStatus.success
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}>
                      {decryptionStatus.msg}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* ------------------------------------------------------------- */}
      {/* TAB 3: PRACTICAL LAB & ADVANCED ASSIGNMENTS                   */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "lab" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Capstone Engineering Lab
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                React • TypeScript • Node.js • IPFS Pinata • Viem • Solidity
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Practical Lab — Build a Decentralized File-Sharing Application Using IPFS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              In this hands-on engineering lab, you will build and deploy a production-ready decentralized file-sharing platform.
              Users can upload arbitrary documents, stream them to an IPFS pinning provider via a secure backend proxy,
              inspect the generated CIDv1 hashes, verify file integrity, and permanently anchor document ownership onto the
              Ethereum Sepolia testnet using an on-chain Solidity registry contract and Viem.
            </p>

            {/* Tech Stack Table */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                  <tr>
                    <th className="p-3 border-b border-neutral-200">Architecture Layer</th>
                    <th className="p-3 border-b border-neutral-200">Selected Technology</th>
                    <th className="p-3 border-b border-neutral-200">Role & Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Frontend Client</td>
                    <td className="p-3 font-mono text-neutral-800">React + TypeScript (Vite)</td>
                    <td className="p-3">Component-based UI with drag-and-drop file ingestion</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Styling System</td>
                    <td className="p-3 font-mono text-neutral-800">Tailwind CSS</td>
                    <td className="p-3">Responsive, accessible utility-first component styling</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Backend API Gateway</td>
                    <td className="p-3 font-mono text-neutral-800">Node.js + Express + Multer</td>
                    <td className="p-3">Memory buffering, rate limiting, and private credential isolation</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Decentralized Storage</td>
                    <td className="p-3 font-mono text-amber-700">IPFS Pinning Provider (Pinata)</td>
                    <td className="p-3">High-availability global swarm seeding and persistent block retention</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Blockchain Network</td>
                    <td className="p-3 font-mono text-neutral-800">Ethereum Sepolia Testnet</td>
                    <td className="p-3">Decentralized consensus layer for immutable document anchoring</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Blockchain Client</td>
                    <td className="p-3 font-mono text-neutral-800">Viem 2.x</td>
                    <td className="p-3">Type-safe Ethereum JSON-RPC client and wallet contract writes</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Smart Contract</td>
                    <td className="p-3 font-mono text-neutral-800">Solidity 0.8.24 (Hardhat)</td>
                    <td className="p-3"><code className="font-mono text-xs">IPFSRegistry.sol</code> registering CIDs with timestamps</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Architecture ASCII Flow */}
            <div className="mt-6 p-4 bg-neutral-900 rounded-xl text-neutral-200 font-mono text-xs space-y-2">
              <div className="text-amber-400 font-bold uppercase tracking-wider">End-to-End Lab Architecture Flow</div>
              <pre className="overflow-x-auto text-[11px] leading-relaxed text-neutral-300">
{`React Frontend                Node.js Backend                Pinata IPFS                Ethereum Sepolia
     │                               │                            │                            │
     │── 1. Select File (Upload) ───▶│                            │                            │
     │                               │── 2. Stream to IPFS ──────▶│                            │
     │                               │◀─ 3. Return Root CIDv1 ────│                            │
     │◀─ 4. Deliver CID + Metadata ──│                            │                            │
     │                                                                                         │
     │── 5. User signs MetaMask tx: registerDocument(CID) ────────────────────────────────────▶│
     │◀─ 6. Transaction Confirmed (Block mined with CID indexed on-chain) ─────────────────────│`}
              </pre>
            </div>
          </div>

          {/* STEP 1: Project Setup */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 1</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Create Vite Project & Directory Layout</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">Vite + React TS</span>
            </div>
            <p className="text-sm text-neutral-600">
              Scaffold the React TypeScript frontend and install dependencies including Viem:
            </p>
            <div className="bg-neutral-900 text-neutral-200 p-4 rounded-xl font-mono text-xs space-y-2">
              <div className="text-neutral-400"># Scaffold the frontend</div>
              <div className="text-green-400">npm create vite@latest ipfs-file-sharing -- --template react-ts</div>
              <div className="text-neutral-400"># Navigate and install dependencies</div>
              <div className="text-green-400">cd ipfs-file-sharing</div>
              <div className="text-green-400">npm install viem lucide-react</div>
              <div className="text-green-400">npm run dev</div>
            </div>
            <p className="text-xs text-neutral-500 font-semibold pt-1">Recommended Directory Structure:</p>
            <pre className="text-xs font-mono bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-neutral-800 leading-relaxed overflow-x-auto">
{`ipfs-file-sharing/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FileUploader.tsx
│   │   │   ├── FileList.tsx
│   │   │   └── FileDetails.tsx
│   │   ├── services/
│   │   │   ├── ipfsService.ts
│   │   │   └── blockchainService.ts
│   │   ├── contracts/
│   │   │   └── IPFSRegistryABI.ts
│   │   ├── App.tsx
│   │   └── main.tsx
├── backend/
│   ├── server.js
│   ├── routes/upload.js
│   ├── .env
│   └── package.json
└── contracts/
    └── IPFSRegistry.sol`}
            </pre>
          </div>

          {/* STEP 2: Configure Backend */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 2</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Configure Node.js Backend & Environment Isolation</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">Express + Multer</span>
            </div>
            <p className="text-sm text-neutral-600">
              Initialize the backend folder and install the required middleware:
            </p>
            <div className="bg-neutral-900 text-neutral-200 p-4 rounded-xl font-mono text-xs space-y-1">
              <div className="text-green-400">mkdir backend && cd backend</div>
              <div className="text-green-400">npm init -y</div>
              <div className="text-green-400">npm install express cors dotenv multer</div>
            </div>
            <p className="text-sm text-neutral-600 pt-2">
              Create the backend <code className="font-mono text-xs px-1.5 py-0.5 bg-neutral-100 rounded">.env</code> configuration:
            </p>
            <div className="bg-neutral-900 text-neutral-200 p-4 rounded-xl font-mono text-xs space-y-1">
              <div className="text-neutral-400"># backend/.env</div>
              <div>PORT=5000</div>
              <div>PINATA_JWT=your_pinata_jwt_token_here</div>
              <div>PINATA_GATEWAY=https://gateway.pinata.cloud</div>
            </div>
            <div className="p-3 bg-red-50/70 border border-red-200 rounded-lg text-xs text-red-900">
              <strong>Security Rule:</strong> Add <code className="font-mono">.env</code> and <code className="font-mono">node_modules/</code>
              to your <code className="font-mono">.gitignore</code> immediately. Never commit API keys to version control.
            </div>
          </div>

          {/* STEP 3: Backend Upload API */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 3</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Implement File Upload Proxy (backend/server.js)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">Pinata REST API</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// In-memory buffer upload with a strict 10 Megabyte ceiling
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }
});

app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Prepare multipart form data for Pinata API
    const formData = new FormData();
    const fileBlob = new Blob([req.file.buffer], { type: req.file.mimetype });
    formData.append("file", fileBlob, req.file.originalname);

    // Forward binary payload to Pinata's pinning gateway
    const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: \`Bearer \${process.env.PINATA_JWT}\`
      },
      body: formData
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Pinata error:", errBody);
      throw new Error("IPFS provider upload failed");
    }

    const result = await response.json();

    // Return standardized metadata to the React client
    res.json({
      cid: result.IpfsHash,
      name: req.file.originalname,
      size: req.file.size,
      mimeType: req.file.mimetype,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error("Upload proxy error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`IPFS Backend Proxy running on port \${PORT}\`);
});`}
            </pre>
            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-neutral-700 space-y-1">
              <span className="font-bold text-neutral-900">Backend Hardening Checklist:</span>
              <ul className="list-disc list-inside space-y-0.5 text-neutral-600">
                <li>Enforce upload quotas and rate limiting (e.g. <code className="font-mono">express-rate-limit</code>).</li>
                <li>Validate MIME types against a strict whitelist (PDF, PNG, JPEG, SVG, JSON).</li>
                <li>Verify CORS origins for production frontend domains.</li>
              </ul>
            </div>
          </div>

          {/* STEP 4: IPFS Upload Service */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 4</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Frontend IPFS Service (src/services/ipfsService.ts)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">TypeScript Service</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/services/ipfsService.ts
export interface UploadedFile {
  cid: string;
  name: string;
  size: number;
  mimeType: string;
  timestamp?: number;
  txHash?: string;
  isRegistered?: boolean;
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
const GATEWAY_URL = import.meta.env.VITE_IPFS_GATEWAY || "https://gateway.pinata.cloud/ipfs";

export async function uploadFile(file: File): Promise<UploadedFile> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(\`\${BACKEND_URL}/api/upload\`, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    throw new Error("Upload request failed with status " + response.status);
  }

  return response.json();
}

export function getIPFSUrl(cid: string): string {
  return \`\${GATEWAY_URL}/\${cid}\`;
}`}
            </pre>
          </div>

          {/* STEP 5: File Uploader Component */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 5</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">File Uploader Component (src/components/FileUploader.tsx)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">React Component</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/components/FileUploader.tsx
import { useState } from "react";
import { uploadFile, type UploadedFile } from "../services/ipfsService";

interface FileUploaderProps {
  onUploaded: (file: UploadedFile) => void;
}

export default function FileUploader({ onUploaded }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleUpload() {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    try {
      setLoading(true);
      setMessage("Chunking, hashing, and pinning to IPFS...");
      const result = await uploadFile(file);
      onUploaded(result);
      setMessage("Upload successful! Content pinned to IPFS network.");
      setFile(null);
    } catch (error) {
      setMessage("Upload failed. Verify backend and API credentials.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="p-6 bg-white rounded-xl border border-neutral-200 space-y-4">
      <h2 className="text-lg font-bold text-neutral-900">Upload Document to IPFS</h2>
      <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center hover:border-amber-500 transition">
        <input
          type="file"
          id="file-input"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <label htmlFor="file-input" className="cursor-pointer space-y-2 block">
          <div className="text-xs text-neutral-600">
            {file ? <strong className="text-amber-700">{file.name}</strong> : "Click to select a document from disk"}
          </div>
          {file && <div className="text-[11px] text-neutral-400">{(file.size / 1024).toFixed(1)} KB</div>}
        </label>
      </div>

      <button
        disabled={loading || !file}
        onClick={handleUpload}
        className="w-full py-2.5 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 disabled:opacity-40 text-white transition shadow-sm"
      >
        {loading ? "Streaming to IPFS Swarm..." : "Pin Document to IPFS"}
      </button>

      {message && <p className="text-xs text-center font-mono text-neutral-700">{message}</p>}
    </section>
  );
}`}
            </pre>
          </div>

          {/* STEP 6: File List Component */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 6</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">File List Component (src/components/FileList.tsx)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">React Component</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/components/FileList.tsx
import type { UploadedFile } from "../services/ipfsService";
import { getIPFSUrl } from "../services/ipfsService";

interface FileListProps {
  files: UploadedFile[];
  onRegisterOnChain: (file: UploadedFile) => void;
}

export default function FileList({ files, onRegisterOnChain }: FileListProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-bold text-neutral-900">Decentralized File Directory</h2>
      {files.length === 0 ? (
        <p className="text-xs text-neutral-500 italic">No files uploaded in current session.</p>
      ) : (
        <div className="grid grid-cols-1 gap-3">
          {files.map((file) => (
            <article key={file.cid} className="p-4 bg-white rounded-xl border border-neutral-200 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-sm text-neutral-900">{file.name}</h3>
                <span className="text-[11px] font-mono text-neutral-500">{(file.size / 1024).toFixed(1)} KB</span>
              </div>
              <div className="text-xs font-mono text-neutral-600 break-all bg-neutral-50 p-2 rounded">
                CID: {file.cid}
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href={getIPFSUrl(file.cid)}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition"
                >
                  Open via Gateway ↗
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(\`ipfs://\${file.cid}\`)}
                  className="px-3 py-1.5 text-xs font-semibold rounded border border-neutral-300 hover:bg-neutral-50 text-neutral-700 transition"
                >
                  Copy ipfs:// URI
                </button>
                <button
                  onClick={() => onRegisterOnChain(file)}
                  className="px-3 py-1.5 text-xs font-semibold rounded bg-amber-600 hover:bg-amber-700 text-white transition"
                >
                  {file.isRegistered ? "Registered On-Chain ✓" : "Anchor to Sepolia"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}`}
            </pre>
          </div>

          {/* STEP 7: Main App Assembly */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 7</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Main Application State (src/App.tsx)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">React TypeScript</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/App.tsx
import { useState } from "react";
import FileUploader from "./components/FileUploader";
import FileList from "./components/FileList";
import type { UploadedFile } from "./services/ipfsService";
import { registerCIDOnSepolia } from "./services/blockchainService";

export default function App() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [statusMsg, setStatusMsg] = useState("");

  function handleUploaded(file: UploadedFile) {
    setFiles((prev) => [file, ...prev.filter((f) => f.cid !== file.cid)]);
  }

  async function handleRegisterOnChain(file: UploadedFile) {
    try {
      setStatusMsg(\`Registering \${file.cid.slice(0, 12)}... on Sepolia testnet...\`);
      const txHash = await registerCIDOnSepolia(file.cid);
      setFiles((prev) =>
        prev.map((f) => (f.cid === file.cid ? { ...f, isRegistered: true, txHash } : f))
      );
      setStatusMsg(\`Registration confirmed! Tx: \${txHash}\`);
    } catch (err: any) {
      console.error(err);
      setStatusMsg("Blockchain registration failed: " + err.message);
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-6 sm:p-10 space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">Decentralized File Sharing</h1>
        <p className="text-sm text-neutral-600">
          Peer-to-peer storage powered by IPFS and Ethereum Sepolia smart contract anchoring.
        </p>
      </header>

      {statusMsg && (
        <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono rounded-lg">
          {statusMsg}
        </div>
      )}

      <FileUploader onUploaded={handleUploaded} />
      <FileList files={files} onRegisterOnChain={handleRegisterOnChain} />
    </main>
  );
}`}
            </pre>
          </div>

          {/* STEP 8: Solidity Smart Contract Integration */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 8</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Viem Blockchain Service (src/services/blockchainService.ts)</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">Viem + MetaMask</span>
            </div>
            <pre className="text-xs font-mono bg-neutral-900 text-neutral-200 p-4 rounded-xl overflow-x-auto leading-relaxed">
{`// src/services/blockchainService.ts
import { createWalletClient, createPublicClient, custom, http, type Address } from "viem";
import { sepolia } from "viem/chains";

const REGISTRY_ADDRESS: Address = "0x71C8009d73d6b1d4400c920f54B812d45b59714E"; // Sepolia address

const REGISTRY_ABI = [
  {
    type: "function",
    name: "registerDocument",
    inputs: [{ name: "cid", type: "string" }],
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "nonpayable"
  }
] as const;

export async function registerCIDOnSepolia(cid: string): Promise<string> {
  if (!window.ethereum) {
    throw new Error("MetaMask or Web3 wallet not detected");
  }

  const walletClient = createWalletClient({
    chain: sepolia,
    transport: custom(window.ethereum)
  });

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http()
  });

  const [account] = await walletClient.requestAddresses();

  // Submit write transaction to the smart contract
  const hash = await walletClient.writeContract({
    address: REGISTRY_ADDRESS,
    abi: REGISTRY_ABI,
    functionName: "registerDocument",
    args: [cid],
    account
  });

  // Await on-chain inclusion receipt
  await publicClient.waitForTransactionReceipt({ hash });

  return hash;
}`}
            </pre>
          </div>

          {/* STEP 9: Testing & Validation Matrix */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Lab Step 9</span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">Comprehensive Testing & Validation Matrix</h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">11 Test Scenarios</span>
            </div>
            <p className="text-sm text-neutral-600">
              Students must systematically execute all 11 test cases and verify actual vs expected results:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                  <tr>
                    <th className="p-3 border-b border-neutral-200">#</th>
                    <th className="p-3 border-b border-neutral-200">Test Scenario</th>
                    <th className="p-3 border-b border-neutral-200">Expected Result</th>
                    <th className="p-3 border-b border-neutral-200">Verification Mechanism</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="p-3 font-bold">1</td>
                    <td className="p-3 font-semibold text-neutral-900">Upload standard PDF document</td>
                    <td className="p-3">Deterministic CID returned, file pinned to provider</td>
                    <td className="p-3 font-mono text-[11px]">Pinata dashboard + React status</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">2</td>
                    <td className="p-3 font-semibold text-neutral-900">Upload high-res PNG image</td>
                    <td className="p-3">Valid CID returned and image renders in browser preview</td>
                    <td className="p-3 font-mono text-[11px]">IPFS gateway HTTP 200 OK</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">3</td>
                    <td className="p-3 font-semibold text-neutral-900">Upload file exceeding limit (&gt;10MB)</td>
                    <td className="p-3">Multer rejects with HTTP 413 Payload Too Large</td>
                    <td className="p-3 font-mono text-[11px]">Express error handling response</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">4</td>
                    <td className="p-3 font-semibold text-neutral-900">Retrieve file via gateway</td>
                    <td className="p-3">File contents stream cleanly within 500ms</td>
                    <td className="p-3 font-mono text-[11px]">Dedicated gateway URL query</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">5</td>
                    <td className="p-3 font-semibold text-neutral-900">Copy ipfs:// URI link</td>
                    <td className="p-3">Standard URI copied to clipboard (<code className="font-mono">ipfs://bafy...</code>)</td>
                    <td className="p-3 font-mono text-[11px]">Clipboard API inspection</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">6</td>
                    <td className="p-3 font-semibold text-neutral-900">Modify 1 byte of file content</td>
                    <td className="p-3">Radically different CID generated (Avalanche effect)</td>
                    <td className="p-3 font-mono text-[11px]">Compare CID_A vs CID_B</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">7</td>
                    <td className="p-3 font-semibold text-neutral-900">Anchor CID to Sepolia testnet</td>
                    <td className="p-3">MetaMask prompts signature, tx submitted to network</td>
                    <td className="p-3 font-mono text-[11px]">Etherscan transaction link</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">8</td>
                    <td className="p-3 font-semibold text-neutral-900">Await transaction receipt</td>
                    <td className="p-3">State toggles to "Registered On-Chain ✓"</td>
                    <td className="p-3 font-mono text-[11px]">Viem waitForTransactionReceipt</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">9</td>
                    <td className="p-3 font-semibold text-neutral-900">Attempt to register empty CID ("")</td>
                    <td className="p-3">Contract transaction reverts: "CID cannot be empty"</td>
                    <td className="p-3 font-mono text-[11px]">EVM require() assertion failure</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">10</td>
                    <td className="p-3 font-semibold text-neutral-900">Browser refresh state test</td>
                    <td className="p-3">Uploaded file list clears unless persisted to DB/localStorage</td>
                    <td className="p-3 font-mono text-[11px]">React component unmount/remount</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">11</td>
                    <td className="p-3 font-semibold text-neutral-900">Gateway timeout simulation</td>
                    <td className="p-3">Frontend gracefully surfaces error and offers fallback gateway</td>
                    <td className="p-3 font-mono text-[11px]">Simulated HTTP 504 Gateway Timeout</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Deliverables Checklist */}
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-2">
              <span className="font-bold text-neutral-900 uppercase">Lab Deliverables (10 Required Submissions):</span>
              <ol className="list-decimal list-inside space-y-1 text-neutral-700">
                <li><code className="font-mono">IPFSRegistry.sol</code> Solidity smart contract source code.</li>
                <li>Vite + React + TypeScript frontend codebase.</li>
                <li>Node.js + Express + Multer backend proxy codebase.</li>
                <li>Verified deployed contract address on Sepolia testnet.</li>
                <li>Transaction hash link for a successful on-chain CID registration.</li>
                <li>Screenshot showing file uploaded, CID returned, and opened on IPFS gateway.</li>
                <li>Full 11-point testing report documenting passes and edge cases.</li>
                <li>System architecture diagram illustrating the off-chain/on-chain division.</li>
                <li>README.md with local setup, environment variables, and reproduction commands.</li>
                <li>Live deployed web URL on Cloudflare Pages or Vercel.</li>
              </ol>
            </div>
          </div>

          {/* ADVANCED ASSIGNMENTS */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Advanced Tracks</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Advanced Capstone Assignments (Tracks 1 to 4)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Assignment 1 */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-[11px] font-bold rounded">
                  Assignment 1
                </span>
                <h4 className="text-base font-bold text-neutral-900">Decentralized NFT Metadata Storage Engine</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Engineer an automated pipeline that ingests NFT artwork, computes the image CID, constructs standardized
                  ERC-721 JSON metadata, pins the metadata to IPFS, and mints an NFT passing the resulting metadata URI into
                  an OpenZeppelin ERC-721 contract.
                </p>
                <div className="text-[11px] text-neutral-500 font-mono">
                  Stack: Solidity ERC721URIStorage, Pinata SDK, React, Viem
                </div>
              </div>

              {/* Assignment 2 */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-[11px] font-bold rounded">
                  Assignment 2
                </span>
                <h4 className="text-base font-bold text-neutral-900">Client-Side AES-GCM Encrypted File Sharing</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Implement zero-knowledge encrypted sharing: files are encrypted client-side using AES-GCM 256-bit with fresh
                  12-byte IVs. The encrypted ciphertext is pinned to IPFS, while the symmetric key is encrypted using the recipient's
                  Ethereum public key (ECDH / secp256k1) and shared securely.
                </p>
                <div className="text-[11px] text-neutral-500 font-mono">
                  Stack: Web Crypto API, Metamask eth_getEncryptionPublicKey
                </div>
              </div>

              {/* Assignment 3 */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded">
                  Assignment 3
                </span>
                <h4 className="text-base font-bold text-neutral-900">Multi-Provider Storage Redundancy & Health Monitor</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Build a high-availability orchestrator that simultaneously pins CIDs across Pinata, Web3.Storage, and a local Kubo node.
                  Implement a background health probe that tests HTTP gateway availability every 5 minutes and triggers automated
                  cross-provider re-pinning if provider redundancy drops below 2 copies.
                </p>
                <div className="text-[11px] text-neutral-500 font-mono">
                  Stack: IPFS Pinning Service API, Cron, Node.js Worker Threads
                </div>
              </div>

              {/* Assignment 4 */}
              <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded">
                  Assignment 4
                </span>
                <h4 className="text-base font-bold text-neutral-900">Decentralized Document Registry with QR Verification</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Create a public university diploma verification portal: academic institutions sign certificate CIDs with their
                  institutional keys. The dApp generates a cryptographic QR code embedding the contract address and token ID.
                  Scanning the QR code routes to a verification page that checks cryptographic validity and reveals the original PDF.
                </p>
                <div className="text-[11px] text-neutral-500 font-mono">
                  Stack: EIP-712 Typed Data Signatures, qrcode.react, IPFS Gateways
                </div>
              </div>
            </div>
          </div>

          {/* MODULE ASSESSMENT & 100-MARK RUBRIC */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Grading Rubric</span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Module Assessment & 100-Mark Academic Evaluation Rubric
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-neutral-200 rounded-lg">
                <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                  <tr>
                    <th className="p-3 border-b border-neutral-200">Evaluation Category</th>
                    <th className="p-3 border-b border-neutral-200">Grading Criteria & Demonstration</th>
                    <th className="p-3 border-b border-neutral-200 text-right">Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-600">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">1. IPFS Architecture Understanding</td>
                    <td className="p-3">Accurate technical differentiation of location vs content addressing, DAGs, DHT routing, and Bitswap.</td>
                    <td className="p-3 text-right font-bold font-mono">15</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">2. File Upload & Retrieval Engine</td>
                    <td className="p-3">Robust streaming of files to IPFS via Node.js backend proxy with credential isolation and gateway resolution.</td>
                    <td className="p-3 text-right font-bold font-mono">20</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">3. CID & Integrity Implementation</td>
                    <td className="p-3">CIDv1 multiformats compliance, cryptographic hash verification, and correct handling of avalanche effect.</td>
                    <td className="p-3 text-right font-bold font-mono">15</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">4. Solidity Registry Smart Contract</td>
                    <td className="p-3">Gas-optimized, secure Solidity contract anchoring CIDs, storing timestamps, and emitting indexing events.</td>
                    <td className="p-3 text-right font-bold font-mono">15</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">5. React + TypeScript Frontend</td>
                    <td className="p-3">Type-safe components, Viem wallet integration, real-time transaction tracking, and clean state handling.</td>
                    <td className="p-3 text-right font-bold font-mono">15</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">6. Security & Privacy Hardening</td>
                    <td className="p-3">Backend API key protection, Multer upload payload limits, and client-side AES-GCM encryption for private data.</td>
                    <td className="p-3 text-right font-bold font-mono">10</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">7. UI/UX & Responsive Usability</td>
                    <td className="p-3">Polished Tailwind CSS design, responsive layout, clear error notifications, and one-click clipboard copying.</td>
                    <td className="p-3 text-right font-bold font-mono">5</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">8. Documentation & Deployment</td>
                    <td className="p-3">Comprehensive README, verified test matrix, architectural diagrams, and live production deployment link.</td>
                    <td className="p-3 text-right font-bold font-mono">5</td>
                  </tr>
                  <tr className="bg-neutral-50 font-bold text-neutral-900">
                    <td className="p-3 text-sm" colSpan={2}>Total Academic Marks</td>
                    <td className="p-3 text-right text-sm font-mono text-amber-700">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}


      {/* ------------------------------------------------------------- */}
      {/* TAB 4: KNOWLEDGE CHECK & INTERVIEW PREPARATION                */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "assessment" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Knowledge & Career Readiness
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                20 Multiple Choice Questions • 16 Senior Architect Interviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Decentralized Storage Mastery Assessment & Interview Prep
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Validate your deep architectural understanding of content addressing, CIDv1 multiformats,
              Kademlia DHTs, Bitswap, pinning services, Arweave, Filecoin, and Solidity CID registries.
              Test yourself against 20 rigorous conceptual MCQs and prepare for technical interviews with 16
              senior Web3 storage architect scenarios.
            </p>
          </div>

          {/* SECTION 1: 20 MULTIPLE CHOICE QUESTIONS */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Decentralized Storage Conceptual Quiz</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-full font-bold">
                  Score: {quizScore} / {QUIZ_QUESTIONS.length} ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                </span>
                <button
                  onClick={handleResetQuiz}
                  className="px-3 py-1 text-xs border border-neutral-300 hover:bg-neutral-50 rounded-lg text-neutral-700 transition"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userAns = selectedQuizAnswers[q.id];
                const isAnswered = userAns !== undefined;
                const isCorrect = userAns === q.ans;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition ${
                      isAnswered
                        ? isCorrect
                          ? "border-green-300 bg-green-50/20"
                          : "border-red-300 bg-red-50/20"
                        : "border-neutral-200 bg-neutral-50/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                        <span className="text-amber-600 mr-1.5">{idx + 1}.</span> {q.question}
                      </h4>
                      {isAnswered && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded font-mono ${
                          isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {isCorrect ? "Correct ✓" : "Incorrect ✗"}
                        </span>
                      )}
                    </div>

                    <div className="mt-3 space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700";

                        if (isAnswered) {
                          if (optIdx === q.ans) {
                            btnStyle = "border-green-500 bg-green-50 text-green-900 font-semibold";
                          } else if (optIdx === userAns) {
                            btnStyle = "border-red-500 bg-red-50 text-red-900";
                          } else {
                            btnStyle = "border-neutral-200 bg-white opacity-60 text-neutral-500";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                            className={`w-full text-left p-3 text-xs rounded-lg border transition flex items-center gap-3 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono text-[10px] shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-neutral-200 text-xs text-neutral-600 leading-relaxed">
                        <strong className="text-neutral-900 block mb-0.5 font-mono text-[11px] uppercase tracking-wide">
                          Architect Explanation:
                        </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: 16 SENIOR ARCHITECT INTERVIEW SCENARIOS */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 2</span>
                <h3 className="text-xl font-bold text-neutral-900">
                  Senior Web3 Storage Architect Interview Scenarios (16 Questions)
                </h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Staff / Lead Web3 Roles
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Study these in-depth interview questions curated from technical screens at leading Web3 infrastructure
              companies, NFT platforms, and decentralized protocols. Toggle each accordion to analyze the model answer
              and key takeaways.
            </p>

            <div className="space-y-4">
              {INTERVIEW_QUESTIONS.map((item, idx) => {
                const isOpen = openInterviewId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border border-neutral-200 rounded-xl overflow-hidden transition bg-white"
                  >
                    <button
                      onClick={() => setOpenInterviewId(isOpen ? null : item.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-neutral-50/60 transition"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                          Question {idx + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900">{item.q}</h4>
                        <div className="text-xs text-neutral-500 font-mono">
                          Scenario: {item.scenario}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 shrink-0 font-bold px-2 py-1 rounded bg-neutral-100">
                        {isOpen ? "Hide ▲" : "Answer ▼"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="p-4 sm:p-6 border-t border-neutral-200 bg-neutral-50/50 space-y-4">
                        <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-line font-sans">
                          {item.answer}
                        </div>

                        {item.keyTakeaways && (
                          <div className="pt-3 border-t border-neutral-200">
                            <span className="text-[10px] uppercase font-bold text-neutral-500 font-mono tracking-wider block mb-2">
                              Key Architectural Takeaways:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.keyTakeaways.map((takeaway, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-xs px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 font-medium"
                                >
                                  ✓ {takeaway}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}


      {/* ------------------------------------------------------------- */}
      {/* TAB 5: MASTERY TRACKER & LEARNING RESOURCES                   */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "tracker" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Competency Matrix
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                26 Verified Objectives • LocalStorage Persistence
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Module 15 Competency Tracker & Curated Resources
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Track your mastery across all 26 core architectural competencies of Module 15.
              Your progress is saved locally in your browser. Complete every objective to graduate to
              Module 16 (Decentralized Finance & DeFi Protocol Architecture).
            </p>

            {/* Progress Bar & Actions */}
            <div className="mt-6 p-4 sm:p-6 bg-neutral-50 rounded-xl border border-neutral-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Overall Completion Progress
                </span>
                <span className="text-xs font-mono font-bold text-amber-700">
                  {completedCount} / {CHECKLIST_ITEMS.length} Objectives Completed ({progressPercentage}%)
                </span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-amber-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2 pt-2">
                <button
                  onClick={handleMarkAllChecklist}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition"
                >
                  Mark All Complete
                </button>
                <button
                  onClick={handleResetChecklist}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-white text-neutral-700 transition"
                >
                  Reset Progress
                </button>
              </div>
            </div>
          </div>

          {/* 26-OBJECTIVE CHECKLIST GRID */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 border-b border-[#e7e3da] pb-3">
              Core Competencies Checklist (26 Items)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {CHECKLIST_ITEMS.map((item, idx) => {
                const isChecked = !!checklistProgress[idx];
                return (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition cursor-pointer text-xs leading-relaxed ${
                      isChecked
                        ? "border-green-300 bg-green-50/30 text-green-950 font-medium"
                        : "border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 text-neutral-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleChecklist(idx)}
                      className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 border-neutral-300"
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* MODULE SUMMARY & LOOKING AHEAD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Module Recap</span>
              <h3 className="text-xl font-bold text-neutral-900">Module 15 Architectural Summary</h3>
              <div className="text-xs sm:text-sm text-neutral-700 space-y-3 leading-relaxed">
                <p>
                  Decentralized storage frees blockchain protocols from the prohibitive gas expense of storing bulk
                  binary payloads on-chain. By decoupling transactional execution from content persistence,
                  Web3 architectures achieve both trustless security and infinite media scalability.
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-neutral-600">
                  <li><strong>Content Addressing:</strong> Files are referenced by immutable CIDv1 cryptographic digests rather than mutable server domain paths.</li>
                  <li><strong>Merkle DAGs & IPLD:</strong> Files are chunked into uniform blocks and structured into tamper-evident directed acyclic graphs.</li>
                  <li><strong>Routing & Exchange:</strong> Kademlia DHT maps CIDs to multiaddresses, while Bitswap orchestrates P2P chunk swarms.</li>
                  <li><strong>Persistence:</strong> Pinning services (Pinata, Web3.Storage), Arweave Blockweaves, and Filecoin storage deals ensure permanent retention.</li>
                  <li><strong>Confidentiality:</strong> Public storage mandates client-side AES-GCM 256-bit encryption before uploading.</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50/40 rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Looking Ahead</span>
              <h3 className="text-xl font-bold text-amber-950">Next: Module 16 — Decentralized Finance (DeFi)</h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                Now that you have mastered smart contract development, full-stack dApp engineering, and decentralized
                storage architecture, you are ready to enter the most economically intensive domain of Web3:
                <strong>Decentralized Finance (DeFi)</strong>.
              </p>
              <div className="space-y-2 text-xs text-amber-800">
                <div className="font-semibold text-amber-900">Module 16 Curriculum Covers:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Automated Market Makers (AMMs) & Constant Product Formula (<code className="font-mono">x * y = k</code>)</li>
                  <li>Liquidity pools, impermanent loss calculation, and LP token dynamics</li>
                  <li>Decentralized lending protocols (overcollateralization, liquidation mechanics)</li>
                  <li>Flash loans: uncollateralized single-transaction borrowing and arbitrage</li>
                  <li>Decentralized Oracle Networks (Chainlink price feeds and TWAP oracles)</li>
                  <li>DeFi attack vectors: reentrancy, oracle manipulation, and sandwich front-running</li>
                </ul>
              </div>
            </div>
          </div>

          {/* OFFICIAL LEARNING RESOURCES */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-[#e7e3da] pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Curated Technical Links</span>
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Recommended Learning Resources</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "IPFS Official Documentation", url: "https://docs.ipfs.tech/", desc: "Comprehensive guides to Kubo, Helia, and P2P protocols." },
                { title: "IPFS Content Addressing", url: "https://docs.ipfs.tech/concepts/content-addressing/", desc: "Deep technical breakdown of Multihash, Multicodec, and CIDv1." },
                { title: "IPFS Persistence & Pinning", url: "https://docs.ipfs.tech/concepts/persistence/", desc: "Garbage collection mechanics and cluster pinning strategies." },
                { title: "IPFS Distributed Hash Tables", url: "https://docs.ipfs.tech/concepts/dht/", desc: "Kademlia S/Kademlia DHT routing and provider record life cycles." },
                { title: "Pinata Developer Documentation", url: "https://docs.pinata.cloud/", desc: "Pinning REST APIs, dedicated gateways, and token scoping." },
                { title: "Web3.Storage Technical Reference", url: "https://docs.web3.storage/", desc: "UCAN-based decentralized storage deals backed by Filecoin." },
                { title: "Filecoin Official Specs", url: "https://docs.filecoin.io/", desc: "Storage marketplace deals, PoRep, and PoSt zero-knowledge proofs." },
                { title: "Arweave Permaweb Guide", url: "https://docs.arweave.org/", desc: "Blockweave architecture and the Kryder storage endowment model." },
                { title: "Solidity 0.8.x Documentation", url: "https://docs.soliditylang.org/", desc: "Official language reference for smart contract development." },
                { title: "OpenZeppelin Contracts", url: "https://docs.openzeppelin.com/", desc: "Standard audited ERC-721 and storage registry implementations." }
              ].map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl border border-neutral-200 hover:border-amber-500 hover:bg-amber-50/30 transition group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-neutral-900 group-hover:text-amber-800 transition">
                      {res.title} ↗
                    </h4>
                    <p className="text-[11px] text-neutral-500 leading-snug">{res.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 mt-3 block truncate">
                    {res.url.replace("https://", "")}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}


        {/* Bottom Pagination & Module Navigation */}
        <div className="pt-8 border-t border-[#e7e3da] flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/learning/blockchain/dapp-development"
            className="p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-start"
          >
            <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
              ← Previous Module
            </span>
            <span className="text-sm font-bold text-neutral-900 mt-1">
              Module 14: Full-Stack DApp Development
            </span>
          </Link>

          <Link
            to="/learning/blockchain/defi-protocols"
            className="p-4 rounded-xl border border-[#e7e3da] bg-white hover:border-amber-500 hover:bg-amber-50/20 transition group flex flex-col items-end text-right"
          >
            <span className="text-[11px] uppercase font-bold text-neutral-400 group-hover:text-amber-700">
              Next Module →
            </span>
            <span className="text-sm font-bold text-neutral-900 mt-1">
              Module 16: Decentralized Finance (DeFi) Protocols
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
