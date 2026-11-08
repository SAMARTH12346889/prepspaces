# projectx/generator_mod15/gen_data.py
"""
Data definitions for Module 15: IPFS & Decentralized Storage
- 26 Checklist Mastery Items
- 20 Multiple Choice Questions with Explanations
- 16 Comprehensive Senior Web3 Storage Architect Interview Scenarios
"""

CHECKLIST_ITEMS = [
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
]

QUIZ_QUESTIONS = [
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
]

INTERVIEW_QUESTIONS = [
    {
        "id": "int-1",
        "q": "What is IPFS and how does content addressing fundamentally differ from the traditional web's location addressing?",
        "scenario": "A candidate is interviewing for a Senior Web3 Infrastructure Engineer position at an NFT marketplace.",
        "answer": """The traditional World Wide Web relies on Location Addressing (URLs):
- Structure: protocol://host:port/path (e.g. https://storage.aws.com/assets/nft.png).
- Problem: The identifier describes WHERE the file is hosted on a specific server managed by a specific organization. If the server shuts down, the domain expires, or the administrator alters the file, the URL breaks (HTTP 404) or serves mutated data (silent tampering).

IPFS (InterPlanetary File System) relies on Content Addressing:
- Structure: ipfs://<CID> (e.g. ipfs://bafybeigdyrzt...).
- Paradigm: The identifier describes WHAT the file is. The Content Identifier (CID) is mathematically derived from the cryptographic hash of the file's binary contents.
- Benefits:
  1. Immutability: If a single byte in the file changes, the hash changes, producing a completely different CID.
  2. Location Independence: The file can be downloaded from ANY node in the world that holds a replica.
  3. Built-In Verification: The receiving client hashes the incoming blocks locally and verifies that the digest matches the requested CID before trusting it.""",
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
        "answer": """A Content Identifier (CID) is not just a raw SHA-256 hash. It is a self-describing multiformat combining multiple metadata headers into a single compact binary or encoded string:

CIDv1 Structure:
1. Multibase Prefix: Specifies the encoding used to represent the binary CID as a string (e.g., 'b' for Base32 lowercase, 'z' for Base58BTC).
2. CID Version: An integer (varint) defining the CID specification version (0 for legacy SHA-256 base58, 1 for modern multiformats).
3. Multicodec: Identifies how the content data itself is structured and interpreted (e.g., 0x55 for 'raw' bytes, 0x70 for 'dag-pb' UnixFS, 0x71 for 'dag-cbor' structured IPLD).
4. Multihash Header:
   - Hash Algorithm Code: Identifies the cryptographic algorithm (e.g., 0x12 for sha2-256, 0x16 for sha3-256).
   - Digest Length: Integer indicating hash byte length (e.g., 32 bytes for 256 bits).
   - Digest Payload: The actual cryptographic hash bytes.

Why 'Self-Describing' Matters:
If a future breakthrough weakens SHA-256, the IPFS network does not break. New CIDs simply specify a different algorithm code (e.g., BLAKE3 or SHA3) in the multihash header without breaking legacy content.""",
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
        "answer": """In IPFS, the Distributed Hash Table (DHT)—specifically based on Kademlia—serves as the decentralized search and routing directory:

How the DHT Works:
1. Content Advertising: When an IPFS node adds a file, it hashes the CID into the 256-bit keyspace and sends 'Provide' messages to the $k$ closest peer nodes in the DHT. Those nodes store a 'Provider Record' mapping (CID $\to$ PeerID, Multiaddress).
2. Content Discovery: When a client node requests a CID that it does not have locally, it queries the DHT iteratively to find the peers holding provider records for that CID.
3. Content Fetching: Once the client locates the provider's IP address, it opens a direct libp2p connection and requests blocks via Bitswap.

Performance Limitations:
1. Discovery Latency: DHT lookups require multiple network hops across global residential and server nodes. If intermediate nodes are slow, NAT-traversed, or offline, lookups can take 5 to 30 seconds.
2. Unreliable Providers: A provider record indicates a node CLAIMED to hold the file; if that node went offline or ran garbage collection, the retrieval fails.
3. Mitigation: Production dApps use dedicated IPFS gateways with local blockstores and maintain direct peering with pinning services (Pinata, Filecoin) to bypass public DHT routing.""",
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
        "answer": """Garbage Collection (GC) in IPFS:
By default, whenever an IPFS node downloads or imports a file, it stores blocks in its local datastore (blockstore). To prevent the node's hard drive from filling up indefinitely, IPFS periodically runs Garbage Collection (or triggers it when a storage maximum quota is reached).
- Unpinned Content: Any block that is not explicitly protected by a 'pin' or referenced by a pinned root DAG is treated as ephemeral cache and deleted from disk during GC.
- Pinned Content: Pinning tells the local node: 'This content must NEVER be deleted during garbage collection.'

Types of Pinning:
1. Direct Pin: Pins only the specific single block identified by the CID.
2. Recursive Pin (Default): Pins the root CID and recursively walks and pins every child block, sub-directory, and file in the Merkle DAG.
3. Indirect Pin: A child block that is protected because its parent root DAG is recursively pinned.

Production Requirement:
To ensure file persistence, dApps must either maintain a 24/7 dedicated node with automated recursive pinning or submit the CID to commercial remote pinning services (Pinata, Web3.Storage, Infura).""",
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
        "answer": """Arweave is a decentralized storage network designed from the ground up for permanent, immutable data retention (the 'Permaweb'):

Core Architectural Mechanisms:
1. Blockweave & Proof of Access (PoA): Arweave's consensus mechanism requires miners to prove access to historical data blocks (recall blocks) in order to mine new blocks and earn mining rewards. If a miner does not store historical data, they cannot participate in consensus.
2. The Storage Endowment Economic Model:
   - Instead of a monthly recurring subscription (which fails if the creator stops paying), users pay a single upfront fee in AR tokens upon uploading.
   - The fee covers the actual cost of storage for approximately 200 years based on a conservative model of storage technology economics: Kryder's Law (historical data storage costs decrease at ~30% per year).
   - Only a small fraction of the fee goes to the current miner; the vast majority enters a decentralized Storage Endowment fund that releases interest over time to pay future miners.

Trade-Off Comparison:
- IPFS + Pinning: Extremely fast, flexible, but requires an active entity continuously paying monthly pinning invoices. If payments cease, data can disappear.
- Arweave: Truly permanent with single upfront payment, ideal for immutable NFT artwork, public records, and legal archives, but has higher upfront upload fees and slower write confirmation times.""",
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
        "answer": """While IPFS addresses content, Filecoin provides the trustless economic marketplace and cryptographic proof systems ensuring storage providers actually hold the data over agreed durations:

Core Cryptographic Proofs:
1. Proof of Replication (PoRep): Executed once when a deal begins. The storage provider proves that they have created a unique, dedicated, encrypted physical copy of the client's data on their hardware (sealing the sector). This prevents providers from claiming to store multiple copies while actually deduplicating them into one.
2. Proof of Spacetime (PoSt): Executed continuously over the entire deal lifetime. The network randomly challenges the provider to prove they still hold the intact sealed sectors. If the provider fails a challenge (WindowPoSt), their collateral is slashed.

IPFS + Filecoin Synergy:
- Ingest & Retrieval: IPFS provides the fast, content-addressed interface for uploading and hot caching.
- Persistence: When files are archived, an automated client deal is negotiated on the Filecoin network. Storage providers post economic collateral (FIL tokens) and submit cryptographic proofs to the blockchain.
- Verifiability: Smart contracts on Ethereum or Filecoin Virtual Machine (FVM) can verify storage deal state on-chain.""",
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
        "answer": """Public IPFS Gateways (e.g., ipfs.io, cloudflare-ipfs.com):
- Severe Rate Limits: Public gateways receive billions of requests daily and throttle traffic aggressively.
- Centralized Chokepoints: When a dApp hardcodes 'https://ipfs.io/ipfs/<CID>', it converts a decentralized architecture into a centralized dependency. If ipfs.io is blocked, throttled, or offline, the dApp appears completely broken.
- Lack of Verification: The browser blindly trusts whatever HTTP response the gateway returns without verifying the cryptographic hash.

Production Solutions:
1. Dedicated Gateways (Pinata, Infura, QuickNode):
   - Provide custom subdomains (e.g. https://my-dapp.mypinata.cloud/ipfs/<CID>) backed by enterprise CDNs.
   - Deliver sub-100ms response times, zero public throttling, and guaranteed access to pinned assets.
2. Multi-Gateway Fallback Logic:
   - The frontend implements client-side fallback: if the primary dedicated gateway fails or times out within 1.5 seconds, automatically retry the request across secondary and tertiary gateways.
3. Trustless Gateways (IPIP-402):
   - Rather than returning raw HTML/images, trustless gateways stream raw verifiable blocks (.car / dag-pb) with response headers (application/vnd.ipld.raw). The client hashes the blocks locally to verify the CID before rendering.""",
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
        "answer": """Because public IPFS has zero access control and anyone with a CID can read the raw bytes, confidential file sharing requires client-side zero-knowledge encryption:

End-to-End Encryption Architecture:
1. Client-Side Key Generation:
   - For each uploaded file, the client generates a unique 256-bit AES-GCM symmetric key using the Web Crypto API.
2. File Encryption:
   - The client generates a cryptographically random 12-byte Initialization Vector (IV).
   - The file is encrypted in the browser: ciphertext = encrypt(AES-GCM, key, IV, plaintext).
3. Public IPFS Upload:
   - The encrypted ciphertext is uploaded to IPFS. The returned CID references only random-looking encrypted bytes. Anyone who downloads the CID sees unreadable ciphertext.
4. Key Exchange & Access Control:
   - The symmetric AES key is encrypted with the authorized doctor's public key (using asymmetric ECIES or RSA-OAEP).
   - Alternatively, use Threshold Cryptography or Lit Protocol / Medusa to condition key decryption on an on-chain smart contract permission (e.g. patient granted access).
5. Decryption:
   - The doctor retrieves the encrypted file from IPFS via the CID.
   - The doctor decrypts the symmetric key using their private key, then decrypts the ciphertext using the AES key and IV.""",
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
        "answer": """IPFSRegistry.sol Architecture:
- Data Structure: Maintains struct Document { address uploader; string cid; uint256 timestamp; } in an array documents.
- State Transition: When registerDocument(string calldata cid) is called, it verifies bytes(cid).length > 0, stores the record, and emits event DocumentRegistered(documentId, msg.sender, cid).
- Benefit: Costs only ~45,000 gas because it stores only a 46-to-59 character string reference rather than the underlying megabyte-sized document.

Security Limitations & Vulnerabilities:
1. No Availability Guarantee: The contract records that address X claimed CID Y at timestamp T. The contract CANNOT verify whether the file actually exists on IPFS, whether it is pinned, or if it will be deleted tomorrow.
2. No Authorship or Authenticity Proof: Anyone can register someone else's CID. If Alice uploads a document, Bob can take Alice's CID and register it under his own wallet address.
3. Garbage In, Garbage Out: The contract accepts any arbitrary string. A caller could pass an invalid string or the CID of a malicious file.
4. Production Fixes: Validate CID formatting (e.g. check Base32/Base58 regex), require an off-chain oracle or Chainlink function to verify that the CID is pinned and reachable before confirming registration, and sign the document with the author's cryptographic key.""",
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
        "answer": """In IPFS, raw files cannot be treated as a single flat string; they must be formatted into a structured Merkle DAG (Directed Acyclic Graph) called UnixFS:

UnixFS Mechanics:
1. Block Chunking: When a large file (e.g. 100MB) is added, the IPFS chunker splits the file into smaller blocks (default 256KB).
2. Leaf Nodes: Each 256KB chunk is hashed into a leaf CID containing raw data.
3. Intermediate Nodes & Merkle DAG: IPFS constructs a balanced tree (or trickle DAG) where internal nodes contain links (CIDs) and byte offsets to child nodes.
4. Root CID: The root node of the tree represents the entire file.

UnixFSv1 vs UnixFSv2:
- UnixFSv1: Built on Protocol Buffers (protobuf / dag-pb). It represents files, directories, symlinks, and metadata. However, it had fixed chunking limitations, rigid metadata models, and lacked support for custom file attributes.
- UnixFSv2 / IPLD Codecs: Modern IPLD (InterPlanetary Linked Data) uses DAG-CBOR and flexible data models. It supports dynamic content-defined chunking (e.g. Rabin chunking / Buzhash) where shifting a byte inside a file only changes the local chunk rather than invalidating every subsequent block in the entire file.""",
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
        "answer": """High-availability decentralized storage requires eliminating single-vendor dependencies across pinning, routing, and retrieval:

Multi-Tier Architecture:
1. Dual-Write Pinning Pipeline:
   - When a file is uploaded via the backend service, the server computes the CID locally.
   - The backend concurrently pins the file to three independent providers: (a) Pinata, (b) Web3.Storage (Filecoin backing), and (c) an in-house dedicated Kubo IPFS node on AWS/Hetzner.
2. Pinning Status Verification:
   - The backend queries each provider's Pinning Service API (IPFS PSA standard) to confirm status === 'pinned'.
3. Multi-Gateway Edge Routing:
   - The frontend client uses an edge proxy (Cloudflare Worker) with a gateway priority pool:
     1. Primary: In-house dedicated gateway with Redis SSD caching.
     2. Secondary: Pinata dedicated gateway.
     3. Tertiary: Cloudflare / ipfs.io public gateways.
4. Health Checks & Synthetic Monitoring:
   - A cron worker periodically requests random sample CIDs through each gateway. If latency exceeds 800ms or returns 504, the worker updates the edge proxy routing table to route traffic to healthy gateways.""",
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
        "answer": """Client-Side Direct Upload Vulnerabilities:
1. Credential Theft: In Vite, any variable prefixed with VITE_ (or NEXT_PUBLIC_ in Next.js) is compiled directly into plaintext client JavaScript. Anyone opening DevTools can inspect the network tab or bundle, extract the Pinata JWT/API key, and gain full administrative access to delete, pin, or exhaust the account's paid storage quota.
2. Abuse & Denial of Wallet: Unauthenticated users can write scripts targeting the upload endpoint, uploading terabytes of illegal or abusive media that charges the company's credit card.

Secure Backend Proxy Architecture:
1. Secure Environment: The Pinata JWT is stored strictly on the server (Node.js/Express) in an unexposed .env file or AWS Secrets Manager.
2. Middleware Security: The backend endpoint (/api/upload):
   - Authenticates the user (via SIWE session cookie or JWT).
   - Validates file MIME types (e.g. only image/png, application/pdf).
   - Enforces strict file size limits (e.g. max 10MB using multer.limits).
   - Applies rate limiting (e.g. max 5 uploads per minute per IP via express-rate-limit).
3. Server-to-Provider Streaming: The backend streams the file buffer directly to Pinata and returns only the safe CID string to the React client.""",
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
        "answer": """Regulatory & Legal Friction in Decentralized Storage:
1. GDPR 'Right to be Forgotten' (Article 17):
   - Under GDPR, EU citizens have the legal right to request erasure of their personal data.
   - Blockchain & IPFS Conflict: Once content is uploaded and replicated across peer-to-peer nodes, it is cryptographically immutable and distributed globally. The original uploader has NO technical ability to force independent third-party nodes to delete cached or pinned blocks.
2. Copyright & DMCA Infringement:
   - If an unauthorized party uploads copyrighted media to IPFS, sending a DMCA notice to a single gateway or pinning service only removes that specific gateway's index. The file remains accessible via its CID through any other node in the network.
3. Illegal Content & Node Liability:
   - Operators of public gateways and storage nodes face legal liability if their nodes unknowingly host or re-transmit prohibited material.

Architectural Mitigation:
- Never store Personally Identifiable Information (PII) on IPFS in plaintext.
- Store PII in off-chain relational databases (PostgreSQL) where records can be deleted upon request.
- If private documents must be distributed via IPFS, encrypt them client-side. To comply with erasure requests, destroy the encryption key (Crypto-shredding), rendering the off-chain ciphertext permanently unrecoverable.""",
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
        "answer": """Why NFT Metadata Fails:
Marketplaces (OpenSea, Blur) periodically crawl the smart contract's tokenURI(tokenId) function, fetch the JSON payload, parse it, and render the artwork and traits. If any link in the chain is malformed, the asset fails to display.

Common Failure Vectors:
1. Invalid JSON Syntax: Unescaped newlines or trailing commas break JSON.parse().
2. Gateway Timeouts: Using a slow public gateway (e.g. ipfs.io) causes the marketplace scraper to time out (HTTP 504) and fail to index the metadata.
3. Non-Standard Property Names: Marketplaces adhere strictly to the ERC-721 Metadata JSON schema:
   - 'name': string
   - 'description': string
   - 'image': string (must be ipfs://CID or a reliable gateway URL)
   - 'attributes': array of objects ({ trait_type: string, value: string | number })
   If an engineer writes 'traits' instead of 'attributes' or 'photo' instead of 'image', the attributes do not display.
4. Relative Image Paths: Storing image: 'image.png' instead of 'ipfs://bafy.../image.png'.

Pre-Mint Verification Pipeline:
- Validate every metadata JSON file using JSON Schema validators (ajv).
- Query every image CID through three independent gateways to confirm 200 OK responses before deploying the smart contract.
- Freeze metadata only after verifying testnet mints on OpenSea Sepolia testnet.""",
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
        "answer": """CIDv0 (Legacy Format):
- Visual Appearance: Always starts with 'Qm' (e.g. QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco).
- Encoding: Encoded strictly in Base58BTC.
- Assumptions: Implicitly hardcodes everything:
  - Version: 0
  - Multicodec: dag-pb (UnixFS)
  - Hash Function: sha2-256
  - Digest Length: 32 bytes
- Limitation: Case-sensitive Base58 cannot be used directly in browser subdomains (e.g. <CID>.ipfs.dweb.link) because DNS and browsers treat subdomains as case-insensitive.

CIDv1 (Modern Standard):
- Visual Appearance: Usually starts with 'b' (for Base32 lowercase, e.g. bafybeigdyrzt...).
- Encoding: Flexible multibase prefix (Base32, Base58, Hex).
- Architecture: Explicitly specifies version, codec, hash algorithm, and length in its binary headers.
- Benefit: Base32 lowercase CIDs can safely be used as DNS subdomains for Origin Isolation in web browsers, ensuring different IPFS files cannot access each other's localStorage or cookies.""",
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
        "answer": """Achieving sub-200ms streaming latency on decentralized storage requires a multi-tier caching and pre-fetching architecture:

Optimization Techniques:
1. Dedicated Edge Gateways & Global CDN:
   - Route all requests through a dedicated gateway (e.g. Pinata Dedicated Gateway) integrated with Cloudflare Enterprise CDN.
   - Popular audio tracks and video files are cached at edge locations worldwide (Point of Presence / PoP), reducing latency to standard Web2 CDN speeds (<50ms).
2. Range Request (HTTP 206 Partial Content) Support:
   - Configure gateways to support byte-range requests. This allows audio and video players to buffer only the first 256KB chunk to begin playback immediately without waiting to download the full 50MB file.
3. Content-Defined Chunking:
   - Chunk audio files into 256KB blocks with pre-warmed leaf CIDs so the browser can stream successive chunks in parallel via HTTP/2 or HTTP/3.
4. Pre-Fetching & Service Workers:
   - Implement a browser Service Worker that intercepts audio requests and pre-fetches the next sequential track CID in the playlist while the current track is playing.
5. Peer Direct Connection:
   - For desktop dApps, peer the node directly with the pinning service's libp2p multiaddress, bypassing public DHT discovery entirely.""",
        "keyTakeaways": [
            "Deploy dedicated gateways backed by global edge CDN caches to achieve sub-50ms latency",
            "Enable HTTP 206 Range Requests for instantaneous audio and video streaming buffering",
            "Implement Service Workers for background pre-fetching and peer directly with pinning nodes"
        ]
    }
]
