# -*- coding: utf-8 -*-
"""
Module 22 Data Structures:
- 28-Objective Checklist Items
- 20 Multiple-Choice Examination Questions (featuring all 12 canonical questions)
- 25 Senior Enterprise Blockchain Architect Interview Questions
- 5 Numerical Enterprise Systems & Ledger Performance Problems
"""

CHECKLIST_ITEMS = [
  {"id": "c1", "label": "Understand permissioned enterprise blockchain fundamentals vs public ledgers", "category": "fundamentals"},
  {"id": "c2", "label": "Analyze the Linux Foundation Hyperledger ecosystem (Fabric, Besu, Indy, Aries, Cacti)", "category": "fundamentals"},
  {"id": "c3", "label": "Master Fabric modular architecture: separation of execution, ordering, and validation", "category": "architecture"},
  {"id": "c4", "label": "Differentiate peer responsibilities: endorsing, committing, anchor, and gateway peers", "category": "architecture"},
  {"id": "c5", "label": "Understand the ordering service consensus models: Crash Fault Tolerant Raft vs BFT", "category": "architecture"},
  {"id": "c6", "label": "Configure Membership Service Providers (MSPs) and X.509 cryptographic trust domains", "category": "identity"},
  {"id": "c7", "label": "Distinguish between identity registration and enrollment with Fabric CA", "category": "identity"},
  {"id": "c8", "label": "Implement Attribute-Based Access Control (ABAC) in chaincode using GetClientIdentity", "category": "identity"},
  {"id": "c9", "label": "Design multi-organization channels for complete ledger isolation and data privacy", "category": "privacy"},
  {"id": "c10", "label": "Configure Private Data Collections (PDC) for bilateral confidential terms within a shared channel", "category": "privacy"},
  {"id": "c11", "label": "Verify that PDCs store SHA-256 hashes on the shared block ledger while keeping plaintext on authorized peers", "category": "privacy"},
  {"id": "c12", "label": "Develop Go-based smart contracts using fabric-contract-api-go/contractapi", "category": "chaincode"},
  {"id": "c13", "label": "Ensure chaincode execution determinism by utilizing transaction timestamps instead of system clocks", "category": "chaincode"},
  {"id": "c14", "label": "Implement two-step custody transfer (TransferCustody + AcceptCustodyTransfer)", "category": "chaincode"},
  {"id": "c15", "label": "Define endorsement policies using boolean syntax: AND, OR, and OutOf", "category": "consensus"},
  {"id": "c16", "label": "Trace the 11-step Execute-Order-Validate transaction lifecycle", "category": "consensus"},
  {"id": "c17", "label": "Explain Multiversion Concurrency Control (MVCC) and read/write set validation", "category": "consensus"},
  {"id": "c18", "label": "Distinguish between append-only blockchain transaction history and world state database", "category": "ledger"},
  {"id": "c19", "label": "Deploy CouchDB as state database for rich JSON queries and pagination", "category": "database"},
  {"id": "c20", "label": "Create and package CouchDB declarative index definitions in META-INF/statedb/couchdb/indexes", "category": "database"},
  {"id": "c21", "label": "Deploy Docker-based Fabric test network with Certificate Authorities and CouchDB", "category": "deployment"},
  {"id": "c22", "label": "Execute peer lifecycle chaincode packaging, approval, and channel commitment", "category": "deployment"},
  {"id": "c23", "label": "Verify product registration, status transitions, and history queries via peer CLI", "category": "lab"},
  {"id": "c24", "label": "Test negative security scenarios: unauthorized creation, invalid state jumps, and self-acceptance", "category": "lab"},
  {"id": "c25", "label": "Complete all 6 Advanced Practical Assignments (multi-org, pharma, PDC pricing, admin, event monitoring, security audit)", "category": "lab"},
  {"id": "c26", "label": "Solve all 5 numerical problems: Raft quorum tolerance, CouchDB B-tree lookups, batch timeouts, and PDC hash expansion", "category": "assessment"},
  {"id": "c27", "label": "Master 25 Senior Enterprise Blockchain Architect interview scenarios", "category": "assessment"},
  {"id": "c28", "label": "Score 100% on the 20 Knowledge Assessment examination questions", "category": "assessment"}
]

QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "question": "What is Hyperledger Fabric?",
    "options": [
      "A public cryptocurrency",
      "A permissioned enterprise blockchain framework",
      "A wallet application",
      "A cloud database"
    ],
    "correctAnswer": 1,
    "explanation": "Hyperledger Fabric is an open-source, permissioned enterprise distributed ledger technology framework hosted by the Linux Foundation, designed for consortium networks with identity control and modular consensus."
  },
  {
    "id": "q2",
    "question": "What is the responsibility of a Fabric peer?",
    "options": [
      "Only mining blocks",
      "Hosting ledger and chaincode, and participating in endorsement and validation",
      "Issuing all certificates",
      "Only producing tokens"
    ],
    "correctAnswer": 1,
    "explanation": "Peers maintain the channel ledger (blockchain and world state), execute chaincode during proposal simulation to generate read/write sets, sign endorsements, and validate transactions prior to committing blocks."
  },
  {
    "id": "q3",
    "question": "What is the responsibility of an ordering node?",
    "options": [
      "Executing all chaincode",
      "Registering users",
      "Ordering transactions into blocks",
      "Creating product records"
    ],
    "correctAnswer": 2,
    "explanation": "Ordering nodes receive endorsed transactions from clients, establish an agreed-upon deterministic sequence across the channel, package transactions into cryptographic blocks, and distribute them to committing peers."
  },
  {
    "id": "q4",
    "question": "What does MSP stand for?",
    "options": [
      "Membership Service Provider",
      "Main Security Protocol",
      "Multi-Signature Permission",
      "Managed Storage Process"
    ],
    "correctAnswer": 0,
    "explanation": "MSP stands for Membership Service Provider. It defines the trusted root certificate authorities, intermediate CAs, and administrative roles that validate whether an identity belongs to an authorized organization."
  },
  {
    "id": "q5",
    "question": "What is the primary function of a Certificate Authority (CA)?",
    "options": [
      "Create blocks",
      "Issue and manage identity certificates",
      "Execute smart contracts",
      "Manage CouchDB indexes"
    ],
    "correctAnswer": 1,
    "explanation": "A Certificate Authority creates, registers, enrolls, signs, and manages X.509 digital certificates and private key credentials for network participants, peers, and ordering nodes."
  },
  {
    "id": "q6",
    "question": "What is a Fabric channel?",
    "options": [
      "An Ethereum wallet",
      "A private communication and transaction environment with its own ledger",
      "A Docker image",
      "A mining pool"
    ],
    "correctAnswer": 1,
    "explanation": "A channel provides complete transaction isolation and confidentiality by maintaining a dedicated, independent blockchain ledger accessible strictly to the organizations joined to that channel."
  },
  {
    "id": "q7",
    "question": "What is a private data collection (PDC)?",
    "options": [
      "A public database",
      "A method of sharing private data among selected channel members",
      "An ordering algorithm",
      "A certificate revocation list"
    ],
    "correctAnswer": 1,
    "explanation": "A private data collection enables a subset of organizations on a shared channel to exchange confidential data peer-to-peer; only a cryptographic hash of the private data is recorded on the public channel block ledger."
  },
  {
    "id": "q8",
    "question": "What does a chaincode endorsement policy specify?",
    "options": [
      "Which peers or organizations must endorse a transaction",
      "How many tokens to mint",
      "Which Docker image to execute",
      "How to generate user passwords"
    ],
    "correctAnswer": 0,
    "explanation": "An endorsement policy defines the exact combination of organization peers that must simulate and cryptographically sign a transaction proposal (e.g., AND('Org1MSP.peer', 'Org2MSP.peer')) for it to be valid."
  },
  {
    "id": "q9",
    "question": "Which database provides rich JSON queries in Fabric?",
    "options": [
      "Redis",
      "CouchDB",
      "SQLite",
      "MySQL"
    ],
    "correctAnswer": 1,
    "explanation": "Apache CouchDB serves as an alternative world-state database to embedded LevelDB, supporting complex Mango JSON queries, index definitions, and field-level searches against ledger assets."
  },
  {
    "id": "q10",
    "question": "What are the two major parts of the Fabric ledger?",
    "options": [
      "Peer and orderer",
      "Blockchain and world state",
      "Wallet and token",
      "MSP and CA"
    ],
    "correctAnswer": 1,
    "explanation": "The Fabric ledger consists of the sequential, immutable, append-only block history (Blockchain) and the current snapshot of latest key values (World State database)."
  },
  {
    "id": "q11",
    "question": "What does Fabric Gateway simplify?",
    "options": [
      "Token mining",
      "Endorsement collection, transaction submission and commit-status handling",
      "Certificate authority installation",
      "Docker image creation"
    ],
    "correctAnswer": 1,
    "explanation": "Fabric Gateway (embedded in peers since v2.4) abstracts client complexity by dynamically discovering endorsers, collecting endorsement signatures, submitting to orderers, and notifying clients upon block commit."
  },
  {
    "id": "q12",
    "question": "What is the main purpose of chaincode?",
    "options": [
      "Provide business logic for ledger transactions",
      "Replace all databases",
      "Issue identity certificates",
      "Manage browser sessions"
    ],
    "correctAnswer": 0,
    "explanation": "Chaincode packages the executable business logic and smart contracts that inspect, validate, and alter the state of distributed ledger assets."
  },
  {
    "id": "q13",
    "question": "Why does Hyperledger Fabric use an Execute-Order-Validate architecture instead of Order-Execute?",
    "options": [
      "To require mining rewards for every node",
      "To eliminate non-deterministic execution and enable high-concurrency simulation before ordering",
      "To force all transactions to use public gas",
      "To restrict network size to 3 peers"
    ],
    "correctAnswer": 1,
    "explanation": "By executing transactions speculatively across endorsing peers before ordering, non-deterministic results can be filtered out, transactions run in parallel, and expensive computations do not stall the ordering service."
  },
  {
    "id": "q14",
    "question": "In Fabric transaction validation, what causes an MVCC (Multiversion Concurrency Control) conflict?",
    "options": [
      "The client pays insufficient gas",
      "A key read during simulation was modified by another committed block before validation",
      "The Docker container runs out of disk space",
      "The chaincode is written in Go instead of JavaScript"
    ],
    "correctAnswer": 1,
    "explanation": "An MVCC conflict occurs when the version of a key in the transaction's read set does not match the current version in world state at validation time, indicating concurrent modifications."
  },
  {
    "id": "q15",
    "question": "How many faulty nodes can a Raft ordering cluster of N nodes tolerate?",
    "options": [
      "f = (N - 1) / 2 crash faults",
      "f = (N - 1) / 3 Byzantine faults",
      "Any number of nodes",
      "Zero nodes"
    ],
    "correctAnswer": 0,
    "explanation": "Raft is a Crash Fault Tolerant (CFT) consensus protocol requiring a strict majority quorum ((N/2) + 1). For N nodes, it can tolerate f = (N - 1) / 2 crash failures (e.g., 2 failures in a 5-node cluster)."
  },
  {
    "id": "q16",
    "question": "Why should chaincode NEVER use time.Now() from the host operating system clock?",
    "options": [
      "Because Go does not support time.Now()",
      "Because each peer's host clock differs, causing non-deterministic read/write sets and endorsement mismatch reverts",
      "Because Fabric requires timestamps in UNIX seconds only",
      "Because Docker blocks system clock access"
    ],
    "correctAnswer": 1,
    "explanation": "Endorsing peers simulate proposals independently. If chaincode reads host time, each peer generates different timestamps and hashes, failing endorsement policy checks. Developers must use ctx.GetStub().GetTxTimestamp()."
  },
  {
    "id": "q17",
    "question": "What is the difference between an identity's registration and enrollment in Fabric CA?",
    "options": [
      "Registration issues the certificate; enrollment creates the username",
      "Registration records the identity and role with the CA; enrollment exchanges the secret for private keys and X.509 certificates",
      "They are identical operations",
      "Enrollment is only for ordering nodes"
    ],
    "correctAnswer": 1,
    "explanation": "An administrator registers an identity to assign its username, secret, and organizational attributes. The user then enrolls using that secret to generate their private key and receive their signed X.509 certificate."
  },
  {
    "id": "q18",
    "question": "In a 2-step custody transfer (TransferCustody followed by AcceptCustodyTransfer), why is PendingOwnerMSP utilized?",
    "options": [
      "To bypass endorsement policies",
      "To prevent unilateral asset dumping by requiring the receiving organization to explicitly sign and accept responsibility",
      "To avoid paying transaction gas fees",
      "To delete the product from the world state"
    ],
    "correctAnswer": 1,
    "explanation": "A 2-step transfer ensures formal enterprise bilateral accountability. The current owner nominates the recipient via PendingOwnerMSP; custody does not change until the receiving organization confirms receipt."
  },
  {
    "id": "q19",
    "question": "Where must declarative CouchDB index files be placed inside a Go chaincode package?",
    "options": [
      "/etc/couchdb/indexes/",
      "META-INF/statedb/couchdb/indexes/",
      "/var/hyperledger/production/",
      "src/indexes/"
    ],
    "correctAnswer": 1,
    "explanation": "Fabric peer lifecycle automatically discovers and builds CouchDB indexes located under META-INF/statedb/couchdb/indexes/ within the chaincode package during installation and commitment."
  },
  {
    "id": "q20",
    "question": "What is the primary trade-off of using CouchDB over LevelDB as the Fabric peer state database?",
    "options": [
      "LevelDB supports rich JSON queries while CouchDB only supports key lookups",
      "CouchDB supports rich JSON queries and indexes but requires an external container service and exhibits lower raw key-value throughput than embedded LevelDB",
      "CouchDB cannot be used with Go chaincode",
      "LevelDB requires an external Docker network"
    ],
    "correctAnswer": 1,
    "explanation": "LevelDB is an ultra-fast, embedded C++ key-value database ideal for simple key lookups. CouchDB runs as a separate container service, supporting complex JSON Mango queries and secondary indexes at the cost of network overhead."
  }
]

INTERVIEW_QUESTIONS = [
  {
    "id": "arch-1",
    "context": "Architecture",
    "question": "Explain Fabric's Execute-Order-Validate transaction lifecycle in depth. Why does it decouple execution from ordering?",
    "answer": "In traditional public blockchains (Order-Execute like Ethereum), the network first reaches consensus on block order, and every validator executes every transaction sequentially. In Hyperledger Fabric (Execute-Order-Validate), transactions are first simulated speculatively in parallel by designated Endorsing Peers defined by an endorsement policy. The endorsers generate read/write sets and sign the proposal response without committing to the ledger. The client gathers endorsements and submits the payload to the Ordering Service, which strictly sequences transactions into blocks without executing chaincode. Finally, Committing Peers validate endorsement signatures, policy satisfaction, and check for Multiversion Concurrency Control (MVCC) conflicts. Decoupling execution from ordering prevents non-deterministic chaincode from stalling consensus, allows parallel simulation across multi-core nodes, and preserves confidentiality by keeping transactions off non-endorsing peers until block distribution.",
    "takeaway": "Execute-Order-Validate enables parallel simulation, eliminates non-deterministic consensus stalls, and decouples compute from consensus."
  },
  {
    "id": "arch-2",
    "context": "Architecture",
    "question": "What is an MVCC (Multiversion Concurrency Control) conflict in Fabric, and how do you design chaincode to avoid it under high transaction load?",
    "answer": "During transaction simulation on an endorsing peer, the chaincode reads the current version of an asset key (recorded in the transaction's Read Set). If another transaction modifies that exact same key and commits to the ledger while the first transaction is in flight through the ordering service, the first transaction's Read Set version becomes stale. When the committing peer validates the block, it detects an MVCC read conflict and marks the transaction as INVALID in the block (world state is not updated). To prevent MVCC hotspots under high throughput: 1) Avoid updating a single global counter or accumulator key; 2) Adopt an append-only transaction pattern using composite keys (e.g., key = 'TX_' + UUID) where records are only written, not updated; 3) Use chaincode batching or off-chain transaction aggregation before submission; 4) Use CouchDB rich queries for historical reads while writing distinct records.",
    "takeaway": "MVCC conflicts occur when read versions mutate before block commit; resolve by avoiding shared accumulator keys and using composite append-only patterns."
  },
  {
    "id": "privacy-1",
    "context": "Privacy & Data",
    "question": "When should an enterprise architect choose a separate Channel versus a Private Data Collection (PDC)?",
    "answer": "Choose a separate Channel when: 1) Multiple organizations require complete, comprehensive data and transaction isolation (separate blockchain ledger, ordering context, and membership); 2) Network traffic and throughput must be partitioned; 3) Two organizations have an entirely separate business relationship with zero overlap with other consortium members. Choose a Private Data Collection (PDC) when: 1) Organizations share a common business workflow (such as a shared supply chain channel) where all members need to verify that a transaction occurred and verify asset existence, but specific commercial terms (e.g., pricing, discounts, proprietary bills of lading) must be restricted to a bilateral subset of organizations; 2) Managing dozens of bilateral channel combinations would create operational channel sprawl; 3) The consortium requires an on-chain SHA-256 hash proof of the private data on the shared channel ledger for multi-party dispute resolution.",
    "takeaway": "Channels provide full ledger and communication isolation; PDCs allow selective bilateral confidentiality on a shared channel with on-chain hash verification."
  },
  {
    "id": "privacy-2",
    "context": "Privacy & Data",
    "question": "How does Fabric ensure that unauthorized channel peers cannot access plaintext in a Private Data Collection?",
    "answer": "When private data is passed in a transaction proposal, it is transmitted in the transient field of the proposal rather than in the transaction payload. Endorsing peers authorized by the collection's policy store the plaintext in a separate private state database (sideDB) and distribute it peer-to-peer strictly to authorized organizations using the Gossip protocol. The endorsing peer then calculates a cryptographic SHA-256 hash of the private write set and writes only the hash into the public read/write set of the transaction. When the ordering service packages the block and committing peers process it, the block contains only the hash. Unauthorized peers commit the block hash to their ledger, allowing them to verify data integrity without ever receiving the plaintext.",
    "takeaway": "Private data is sent via transient fields, gossiped strictly to collection peers, and only its SHA-256 hash enters the public block ledger."
  },
  {
    "id": "consensus-1",
    "context": "Consensus",
    "question": "Compare Fabric's Raft ordering service with the Byzantine Fault Tolerant (BFT) ordering service introduced in Fabric v3.0.",
    "answer": "Raft is a Crash Fault Tolerant (CFT) consensus protocol based on a leader-follower architecture. It operates under the assumption that nodes are honest but may crash or experience network partitions. A Raft cluster of N nodes requires a strict majority quorum ((N/2) + 1) and can tolerate up to f = (N - 1) / 2 failed nodes. However, Raft cannot tolerate Byzantine (malicious, compromised, or colluding) nodes that lie or transmit conflicting blocks. In contrast, Fabric v3.0 introduced native BFT ordering (based on SmartBFT). BFT ordering assumes nodes may be adversarial or compromised. A BFT cluster of N nodes requires N >= 3f + 1 nodes and can withstand up to f maliciously Byzantine nodes while guaranteeing consistency and liveness. Enterprises use Raft within a single trusted IT domain or trusted consortium, and BFT when ordering nodes are operated by competing, untrusted institutions across geopolitical boundaries.",
    "takeaway": "Raft tolerates f = (N-1)/2 crash faults for trusted consortia; BFT tolerates f = (N-1)/3 malicious Byzantine faults for adversarial multi-party networks."
  },
  {
    "id": "identity-1",
    "context": "Identity & Security",
    "question": "Explain the role of an MSP (Membership Service Provider) and how it validates transactions using X.509 certificates.",
    "answer": "An MSP is a software abstraction that operationalizes PKI (Public Key Infrastructure) rules for a Fabric organization. It does not issue certificates itself (that is the job of the CA); rather, it specifies which Root and Intermediate CAs are trusted by that organization, what Organizational Units (OUs) define client vs peer vs admin identities, and which Certificate Revocation Lists (CRLs) invalidate credentials. When a peer receives a proposal or an orderer receives a transaction, it extracts the creator's identity certificate and digital signature. The MSP verifies that: 1) The certificate chains cryptographically to a trusted root CA in the MSP configuration; 2) The certificate has not expired or been revoked; 3) The identity fulfills the required role (e.g., Admin for channel config updates); 4) The signature over the proposal bytes is cryptographically authentic.",
    "takeaway": "MSPs define organizational trust rules, verifying that X.509 certificates originate from authorized CAs and match defined role policies."
  },
  {
    "id": "identity-2",
    "context": "Identity & Security",
    "question": "How do you implement Attribute-Based Access Control (ABAC) in Fabric Go chaincode?",
    "answer": "Fabric CA allows administrators to assign custom attributes to user certificates during registration (e.g., role=auditor, clearance=tier3). Inside the Go chaincode, the developer imports `github.com/hyperledger/fabric-chaincode-go/pkg/cid` or uses `ctx.GetClientIdentity()`. The chaincode inspects these attributes dynamically: `val, ok, err := ctx.GetClientIdentity().GetAttributeValue(\"role\")`. If `!ok` or `val != \"auditor\"`, the function returns a formatted authorization error: `fmt.Errorf(\"unauthorized: client lacks auditor clearance\")`. This decouples business logic permissions from raw organization names or wallet addresses, allowing fine-grained role-based governance within a single organization.",
    "takeaway": "ABAC evaluates custom X.509 certificate attributes registered via Fabric CA to enforce fine-grained role permissions in chaincode."
  },
  {
    "id": "chaincode-1",
    "context": "Chaincode",
    "question": "Why is determinism mandatory in chaincode, and what programming patterns must be strictly avoided?",
    "answer": "Fabric requires that all endorsing peers simulating a transaction proposal produce bit-for-bit identical read/write sets. If simulation results diverge, the proposal signatures will be over different hashes, failing the endorsement policy. Patterns to avoid: 1) Reading local system clocks (`time.Now()`); use `ctx.GetStub().GetTxTimestamp()` instead, which returns the deterministically agreed proposal timestamp; 2) Generating pseudo-random numbers (`rand.Int()`); 3) Making outbound HTTP or network API calls, which may return different payloads or fail due to network partitions; 4) Reading local filesystem files; 5) Iterating over Go maps directly without sorting keys, as Go map iteration order is randomized by runtime design.",
    "takeaway": "Determinism guarantees identical simulation results across endorsers; avoid system clocks, random generators, external APIs, and un-sorted map iterations."
  },
  {
    "id": "database-1",
    "context": "Database",
    "question": "Explain how CouchDB declarative indexes work in Fabric. Why should you avoid rich queries in transactions that modify ledger state?",
    "answer": "CouchDB declarative indexes are JSON documents defined in `META-INF/statedb/couchdb/indexes/` (specifying fields to index, design doc name, and type). When chaincode is deployed, the peer automatically pushes these indexes to CouchDB, transforming full collection table scans into rapid B-tree lookups. However, rich JSON queries (`GetQueryResult()`) should be used strictly for read-only operations. In Fabric, CouchDB query results generate Phantom Reads: the Read Set captures only the individual keys returned by the query, NOT the predicate query condition itself. If another transaction inserts a new record that matches the query predicate before the block commits, Fabric's MVCC validator cannot detect this discrepancy, leading to subtle ledger state corruption.",
    "takeaway": "CouchDB indexes accelerate queries, but rich queries in write transactions risk phantom reads that bypass MVCC validation."
  },
  {
    "id": "endorse-1",
    "context": "Consensus",
    "question": "How does a chaincode endorsement policy differ from an access control check, and how are they combined?",
    "answer": "An access control check (enforced inside the chaincode logic via `GetClientIdentity().GetMSPID()`) evaluates who is initiating the proposal (e.g., 'Only Org1MSP can call CreateProduct'). An endorsement policy (enforced at the channel level by committing peers during block validation) defines which peer organizations must execute and cryptographically endorse the proposal before it can be committed to the ledger (e.g., `AND('Org1MSP.peer', 'Org2MSP.peer')`). Both are mandatory in enterprise security: access control stops unauthorized clients at the gate, while endorsement policies guarantee that competing organizations co-simulate and sign the execution, preventing rogue peers from committing fabricated ledger updates.",
    "takeaway": "Access control governs proposal callers; endorsement policies govern which organizational peers must simulate and sign off on updates."
  },
  {
    "id": "chaincode-2",
    "context": "Chaincode",
    "question": "Explain the v2.x/v3.x Chaincode Lifecycle. What are the four core operational steps?",
    "answer": "The decentralized chaincode lifecycle consists of: 1) Package: The chaincode is compiled and tarballed into a `.tar.gz` package with a metadata file, yielding a unique `package_id`; 2) Install: Each organization installs the package on its endorsing peers; 3) Approve: Each organization approves a chaincode definition for its channel (specifying name, version, sequence, endorsement policy, and collection configs) according to the channel's lifecycle endorsement policy (usually a majority of channel orgs); 4) Commit: Once the required majority of organizations have approved, an admin commits the definition to the channel, making the chaincode active for client transactions.",
    "takeaway": "Fabric chaincode lifecycle: Package -> Install on peers -> Approve by channel orgs -> Commit to channel."
  },
  {
    "id": "supply-1",
    "context": "Supply Chain",
    "question": "How does the two-step custody transfer pattern solve the 'unilateral asset dumping' problem in enterprise logistics?",
    "answer": "In a naive one-step transfer (`Transfer(assetID, newOwner)`), a sender could immediately assign custody of a defective, missing, or compromised asset to a receiving organization without their consent. The receiving organization would immediately become legally and contractually liable on the immutable ledger. A two-step pattern splits this into `TransferCustody` (setting `PendingOwnerMSP = Org2MSP` while keeping `OwnerMSP = Org1MSP`) and `AcceptCustodyTransfer` (which requires `GetCallerMSP() == PendingOwnerMSP`). This forces the distributor or hospital to physically inspect the shipment, verify RFID/barcodes, and sign an explicit on-chain acceptance transaction before legal custody and liability transition.",
    "takeaway": "Two-step transfers prevent liability dumping by requiring explicit cryptographic confirmation from the receiving organization."
  },
  {
    "id": "supply-2",
    "context": "Supply Chain",
    "question": "What is the 'Physical-to-Digital Trust Gap' in blockchain supply chains, and how is it mitigated?",
    "answer": "The physical-to-digital trust gap refers to the limitation that while a blockchain guarantees that an endorsed transaction record has not been tampered with since commitment, it cannot inherently prove that the physical world matches the digital assertion (e.g., a fraudulent supplier could record that 10,000 vials of genuine vaccine were manufactured when empty vials were actually produced). Mitigations require defense-in-depth: 1) Hardware-rooted cryptographic identity (IoT sensors with embedded secure elements signing temperature/GPS logs directly); 2) Tamper-evident packaging with serialized cryptographic QR/RFID chips; 3) Multi-party endorsements (manufacturer + independent QA inspector must both sign the batch creation); 4) Physical audit trails and regulatory spot-checks.",
    "takeaway": "Blockchain guarantees ledger data integrity, not physical truth; bridge the gap with IoT secure elements, tamper-evident chips, and multi-party inspections."
  },
  {
    "id": "security-1",
    "context": "Security",
    "question": "How would you defend a Fabric network against an identity compromise of a peer node's signing certificate?",
    "answer": "1) Immediate Certificate Revocation: Publish a Certificate Revocation List (CRL) signed by the organization's CA or update the organization's MSP configuration to revoke the compromised certificate; 2) Channel Configuration Update: Update channel config blocks to distribute the updated CRL across all channel peers and orderers, ensuring the compromised certificate is rejected during TLS handshakes and endorsement signature verification; 3) Key Rotation: Re-enroll the peer node with a new private key generated inside a Hardware Security Module (HSM); 4) Endorsement Policy Resilience: If the network uses multi-peer policies (e.g., `AND('Org1MSP.peer', 'Org2MSP.peer')`), a compromised single peer cannot forge valid transactions alone.",
    "takeaway": "Defend peer identity compromises with CRL publication, MSP channel configuration updates, HSM key re-enrollment, and multi-org endorsement policies."
  },
  {
    "id": "infra-1",
    "context": "Infrastructure",
    "question": "What are Anchor Peers and Gateway Peers in Fabric network topology?",
    "answer": "An Anchor Peer is a designated peer within an organization that is discoverable by other organizations on the channel. Anchor peers enable cross-organizational Gossip communication, allowing peers to share channel membership and ledger block dissemination across firewalls without opening every peer to external traffic. A Gateway Peer (introduced in Fabric v2.4+) runs the embedded Fabric Gateway service. Instead of client applications maintaining direct gRPC connections to dozens of orderers and peers across all organizations, the client connects to a single Gateway peer. The Gateway peer dynamically inspects the chaincode endorsement policy, evaluates network health, dispatches proposals to required endorsers, aggregates signatures, submits to the ordering service, and monitors block commitment on behalf of the client.",
    "takeaway": "Anchor peers enable cross-org Gossip discovery; Gateway peers handle endorsement orchestration and commit monitoring for lightweight clients."
  },
  {
    "id": "infra-2",
    "context": "Infrastructure",
    "question": "How does Docker Compose structure a minimal two-org Fabric network with CouchDB?",
    "answer": "A minimal two-org network requires 6 primary containers: 1) `orderer.example.com` (Raft ordering service on port 7050); 2) `peer0.org1.example.com` (Org1 peer on port 7051); 3) `couchdb0` (CouchDB state database for Org1 peer on port 5984); 4) `peer0.org2.example.com` (Org2 peer on port 9051); 5) `couchdb1` (CouchDB state database for Org2 peer on port 7984); 6) `ca_org1` and `ca_org2` (Fabric CA servers). The peer containers configure `CORE_LEDGER_STATE_STATEDATABASE=CouchDB` and `CORE_LEDGER_STATE_COUCHDBCONFIG_COUCHDBADDRESS=couchdb0:5984` and share a dedicated Docker bridge network (`fabric_test`).",
    "takeaway": "Each peer links to its own isolated CouchDB container over internal Docker bridge networks with dedicated gRPC and HTTP ports."
  },
  {
    "id": "security-2",
    "context": "Security",
    "question": "What security risks arise if private data collection transient fields are accidentally logged or stored in environment variables?",
    "answer": "Transient data is designed to pass in-memory across the gRPC wire during proposal simulation to prevent confidential parameters from entering the permanent block ledger. If a developer accidentally logs transient data (`log.Printf(\"Transient: %s\", transientMap)`) or persists it to standard peer log files, the plaintext is written to the host filesystem, Docker container logs, or centralized monitoring clusters (e.g., Datadog, ELK stack). This violates GDPR, HIPAA, and trade secret protections. Developers must sanitize all logging, disable verbose gRPC payload logging in production, and ensure transient buffers are cleared from memory.",
    "takeaway": "Transient data must never be logged or echoed; leaking transient payloads to log sinks compromises confidential commercial data."
  },
  {
    "id": "database-2",
    "context": "Database",
    "question": "How do you implement pagination in Hyperledger Fabric chaincode using CouchDB?",
    "answer": "When querying large datasets (e.g., thousands of shipment records), scanning the entire state causes memory exhaustion and excessive latency. Using `ctx.GetStub().GetQueryResultWithPagination(queryString, pageSize, bookmark)`, the chaincode passes: 1) `queryString` (the Mango selector); 2) `pageSize` (integer count of records, e.g., 50); 3) `bookmark` (an opaque string pointer returned by the previous query). The function returns an iterator over the page and a `QueryResponseMetadata` struct containing the `bookmark` for the next page. The client can fetch sequential pages on demand.",
    "takeaway": "Use GetQueryResultWithPagination with pageSize and bookmark to prevent memory exhaustion on large asset queries."
  },
  {
    "id": "chaincode-3",
    "context": "Chaincode",
    "question": "How do chaincode events work in Fabric, and how should a Node.js gateway client subscribe to them?",
    "answer": "Inside chaincode, an event is emitted using `ctx.GetStub().SetEvent(eventName, payloadBytes)`. Crucially, chaincode events are NOT emitted during proposal simulation; they are emitted only when the transaction is successfully committed to the ledger block by committing peers. In the Node.js application using `@hyperledger/fabric-gateway`, the client creates an event listener: `const events = await network.getChaincodeEvents(chaincodeName)`. The client iterates over the asynchronous stream (`for await (const event of events)`), decodes the payload, and updates external caches or triggers push notifications.",
    "takeaway": "Chaincode events are recorded in blocks and emitted to clients only after successful block commit, guaranteeing verified state changes."
  },
  {
    "id": "security-3",
    "context": "Security",
    "question": "What is an Endorsement Policy manipulation attack, and how do you protect against it?",
    "answer": "An endorsement policy manipulation attack occurs when an attacker modifies a channel chaincode definition to downgrade the required endorsement threshold (e.g., altering `AND('Org1MSP.peer', 'Org2MSP.peer')` to `OR('Org1MSP.peer', 'Org2MSP.peer')`). If this succeeded, Org1 could generate and commit fraudulent transactions without Org2's counter-signature. Fabric defends against this through Channel Lifecycle Policies (`/Channel/Application/LifecycleEndorsement`), which mandate that any change to a chaincode definition sequence must be approved by a strict majority of channel member organizations before it can be committed.",
    "takeaway": "Channel lifecycle endorsement policies require a majority of consortium organizations to approve any chaincode policy modification."
  },
  {
    "id": "supply-3",
    "context": "Supply Chain",
    "question": "How does product recall functionality work in the supply chain chaincode, and why is it restricted to the original manufacturer?",
    "answer": "In our `UpdateStatus` chaincode function, normal state transitions follow `CREATED -> PACKED -> SHIPPED -> DELIVERED` and can only be updated by the current holding organization (`OwnerMSP`). However, when a defect, contamination, or safety hazard is discovered, the product must be recalled immediately regardless of who currently holds custody. The chaincode enforces: `if newStatus == \"RECALLED\" { if mspID != product.Manufacturer { return fmt.Errorf(\"only the manufacturer can recall products\") } }`. This allows the manufacturer to flag the asset globally, warning distributors, retailers, and hospitals not to dispense the batch.",
    "takeaway": "Recalls bypass the current custodian to allow the authoritative manufacturer to halt distribution across the entire supply chain."
  },
  {
    "id": "arch-3",
    "context": "Architecture",
    "question": "What is the difference between a Committing Peer and an Endorsing Peer in terms of hardware resource requirements?",
    "answer": "An Endorsing Peer requires substantial CPU and memory because it hosts chaincode execution runtimes (Go/Node/Java containers), runs complex business logic, executes CouchDB queries, and performs cryptographic signing of simulation proposal responses. A Committing Peer (which does not endorse) does not need to run chaincode execution containers; it strictly verifies digital signatures, checks read/write set version validity against local state, and appends blocks to the ledger. In large enterprise deployments, organizations run a few high-spec endorsing peers for compute, and numerous lightweight committing peers for distributed ledger replication and read scalability.",
    "takeaway": "Endorsers require high CPU/RAM to execute chaincode runtimes; committing peers only validate signatures and append blocks."
  },
  {
    "id": "consensus-2",
    "context": "Consensus",
    "question": "What parameters determine block generation in a Fabric ordering service?",
    "answer": "Block creation in the ordering service is governed by three primary batch parameters in `configtx.yaml`: 1) `BatchTimeout`: The maximum duration to wait after receiving the first transaction before cutting a block (e.g., 2 seconds); 2) `MaxMessageCount`: The maximum number of transactions allowed in a single block (e.g., 100 transactions); 3) `AbsoluteMaxBytes`: The maximum allowable byte size of a block (e.g., 99 MB). A block is cut as soon as `MaxMessageCount` is reached OR `AbsoluteMaxBytes` is reached OR the `BatchTimeout` timer expires.",
    "takeaway": "Blocks are cut when MaxMessageCount is hit, AbsoluteMaxBytes is exceeded, or BatchTimeout expires."
  },
  {
    "id": "identity-3",
    "context": "Identity & Security",
    "question": "Why must private signing keys never be bundled inside a React frontend, and how should a production Web3 architecture be structured?",
    "answer": "Bundling X.509 private keys or enrollment secrets in a client-side React bundle exposes them to extraction via browser dev tools, XSS attacks, or network interception. Once compromised, an attacker can sign unauthorized transactions as that organization. A production architecture isolates keys strictly within a secure backend API or Key Management Service (AWS KMS, HashiCorp Vault, or HSM). The React frontend authenticates users via OAuth2/OIDC, and the backend service invokes the Fabric Gateway SDK using protected server-side credentials corresponding to the user's authorized organizational role.",
    "takeaway": "Frontend clients authenticate with standard OAuth; private signing keys remain securely guarded on backend servers or HSMs."
  },
  {
    "id": "governance-1",
    "context": "Architecture",
    "question": "How are channel configuration updates executed in Hyperledger Fabric?",
    "answer": "Channel configuration is stored in a special genesis/config block as a protobuf structure. Updating a channel config (e.g., adding an organization or changing endorsement policies) requires: 1) Fetching the latest config block (`peer channel fetch config`); 2) Decoding protobuf to JSON (`configtxlator`); 3) Modifying JSON to create an updated config; 4) Computing the protobuf delta/diff between original and modified configs; 5) Gathering cryptographic admin signatures from participating organizations matching the channel's modification policy (`MAJORITY Admins`); 6) Submitting the signed config update transaction to the ordering service, which cuts a new config block.",
    "takeaway": "Channel config updates require fetching the current config, calculating the diff via configtxlator, collecting admin signatures, and submitting a config block."
  }
]

NUMERICAL_PROBLEMS = [
  {
    "id": "num-1",
    "title": "Raft Consensus Quorum & Fault Tolerance Calculation",
    "question": "An enterprise banking consortium operates a Hyperledger Fabric ordering service with 7 Raft ordering nodes. Calculate: 1) The minimum quorum of nodes required to elect a leader and accept transaction batches; 2) The maximum number of crash failures (f) the cluster can tolerate without halting; 3) If 3 nodes suffer simultaneous network partitions, determine whether the network can continue producing blocks.",
    "variables": [
      "Total Raft Nodes (N): 7",
      "Quorum Formula: Q = floor(N / 2) + 1",
      "Crash Fault Tolerance Formula: f = floor((N - 1) / 2)",
      "Partitioned Nodes: 3"
    ],
    "steps": [
      "Step 1: Calculate the Quorum required for Raft leader election and consensus: Q = floor(7 / 2) + 1 = 3 + 1 = 4 nodes.",
      "Step 2: Calculate the maximum crash fault tolerance (f): f = floor((7 - 1) / 2) = floor(6 / 2) = 3 nodes.",
      "Step 3: Evaluate network behavior when 3 nodes fail: Active nodes remaining = 7 - 3 = 4 nodes.",
      "Step 4: Check if remaining active nodes meet quorum: 4 >= 4 (Quorum satisfied).",
      "Step 5: Conclusion: The cluster remains fully operational and continues producing blocks. If a 4th node fails, the cluster will halt to prevent split-brain state."
    ],
    "finalAnswer": "Quorum = 4 nodes; Max Tolerated Failures (f) = 3 nodes; Cluster continues operational with 4 active nodes."
  },
  {
    "id": "num-2",
    "title": "Ordering Service Block Latency & Batch Throughput Sizing",
    "question": "A supply chain consortium configures its Fabric ordering service with BatchTimeout = 1.5 seconds, MaxMessageCount = 200 transactions, and AbsoluteMaxBytes = 2 MB. The average serialized transaction size is 4 KB. During normal business hours, the transaction arrival rate is 80 transactions per second (tps). Calculate: 1) The time required to trigger a block cut based on message count; 2) Whether the block is cut by MaxMessageCount, AbsoluteMaxBytes, or BatchTimeout; 3) The resulting average block creation latency and total transactions per block.",
    "variables": [
      "BatchTimeout: 1.5 seconds",
      "MaxMessageCount: 200 transactions",
      "AbsoluteMaxBytes: 2 MB = 2,048 KB",
      "Transaction Size: 4 KB per transaction",
      "Transaction Arrival Rate: 80 tps"
    ],
    "steps": [
      "Step 1: Calculate time to reach MaxMessageCount: Time = MaxMessageCount / Arrival Rate = 200 tx / 80 tps = 2.5 seconds.",
      "Step 2: Calculate block size at 200 transactions: Size = 200 tx * 4 KB = 800 KB (800 KB < 2,048 KB AbsoluteMaxBytes).",
      "Step 3: Compare message count trigger time (2.5 s) with BatchTimeout (1.5 s).",
      "Step 4: Because BatchTimeout (1.5 s) < Message count trigger (2.5 s), the timer expires first and cuts the block!",
      "Step 5: Calculate transactions included in the block upon timer expiration: Transactions = Arrival Rate * BatchTimeout = 80 tps * 1.5 s = 120 transactions.",
      "Step 6: Total block size = 120 tx * 4 KB = 480 KB."
    ],
    "finalAnswer": "Cut Trigger: BatchTimeout (1.5 s); Block Latency = 1.5 seconds; Transactions per Block = 120 tx (480 KB)."
  },
  {
    "id": "num-3",
    "title": "Endorsement Network Overhead & Bandwidth Consumption",
    "question": "An enterprise logistics network has 4 organizations. The chaincode endorsement policy is AND('Org1MSP.peer', 'Org2MSP.peer', 'Org3MSP.peer', 'Org4MSP.peer'). Each proposal payload is 2.5 KB. The simulation response (including read/write set and cryptographic signature) is 8.0 KB. The final assembled transaction envelope submitted to the orderer is 35.0 KB. Calculate the total inbound and outbound network data transferred across the network to complete 500 endorsed transactions.",
    "variables": [
      "Number of Endorsing Peers: 4",
      "Proposal Size: 2.5 KB per peer",
      "Endorsement Response Size: 8.0 KB per peer",
      "Orderer Transaction Envelope Size: 35.0 KB",
      "Transaction Count: 500 transactions"
    ],
    "steps": [
      "Step 1: Calculate proposal broadcast traffic per transaction: 4 peers * 2.5 KB = 10.0 KB outbound from client.",
      "Step 2: Calculate endorsement response traffic per transaction: 4 peers * 8.0 KB = 32.0 KB inbound to client.",
      "Step 3: Calculate orderer submission traffic per transaction: 1 * 35.0 KB = 35.0 KB outbound to orderer.",
      "Step 4: Total network traffic per endorsed transaction = 10.0 KB + 32.0 KB + 35.0 KB = 77.0 KB.",
      "Step 5: Calculate total network traffic for 500 transactions: Total = 500 * 77.0 KB = 38,500 KB = 38.50 MB."
    ],
    "finalAnswer": "Total Network Traffic = 38.50 MB for 500 transactions (77.0 KB per endorsed transaction)."
  },
  {
    "id": "num-4",
    "title": "CouchDB Index B-Tree Lookup Complexity vs Full Scan",
    "question": "A pharmaceutical supply chain ledger stores 1,000,000 product records in CouchDB. A query filters products by status: {'selector': {'status': 'SHIPPED'}}, matching 25,000 records. With a declarative JSON index on 'status', CouchDB uses a B-tree index where each node has a branching factor of b = 100. Without an index, CouchDB performs a full document table scan. Calculate: 1) The theoretical number of disk I/O operations required to locate the first matching index entry vs full scan; 2) The relative scan efficiency factor.",
    "variables": [
      "Total Records (N): 1,000,000",
      "Branching Factor (b): 100",
      "Matching Records: 25,000",
      "Indexed B-Tree Height Formula: h = ceil(log_b(N))"
    ],
    "steps": [
      "Step 1: Calculate B-tree index height: h = ceil(log_100(1,000,000)) = ceil(log10(1,000,000) / log10(100)) = ceil(6 / 2) = 3 disk I/O reads to find the first matching key.",
      "Step 2: Sequential read of 25,000 matching index entries in contiguous leaf pages (approx. 250 leaf page reads).",
      "Step 3: Total indexed I/O operations approx = 3 + 250 = 253 page reads.",
      "Step 4: Full table scan without index: reads all 1,000,000 records across approx 10,000 database pages.",
      "Step 5: Efficiency improvement ratio = 10,000 pages / 253 pages = ~39.5x speedup in I/O operations."
    ],
    "finalAnswer": "Indexed B-Tree Root-to-Leaf I/O = 3 reads; Total Indexed Reads = ~253 pages vs 10,000 pages full scan (~39.5x I/O reduction)."
  },
  {
    "id": "num-5",
    "title": "Private Data Collection (PDC) Hash Ledger Storage Efficiency",
    "question": "A consortium executes 100,000 private commercial contract transactions. Each plaintext private data document is 12 KB. In Fabric, the plaintext is stored strictly on 2 authorized peers in their private sideDB, while only a SHA-256 hash (32 bytes) plus metadata (total 128 bytes) is committed to the shared channel ledger replicated across all 10 consortium peers. Calculate: 1) The total ledger storage saved across the 8 non-authorized peers; 2) The storage overhead reduction on the shared blockchain.",
    "variables": [
      "Transactions: 100,000",
      "Plaintext Document Size: 12 KB = 12,288 bytes",
      "On-Chain Hash + Metadata Size: 128 bytes",
      "Total Consortium Peers: 10",
      "Authorized Peers: 2",
      "Non-Authorized Peers: 8"
    ],
    "steps": [
      "Step 1: If plaintext were stored on shared ledger: Storage per peer = 100,000 * 12 KB = 1,200,000 KB = 1.20 GB.",
      "Step 2: Total multi-peer storage without PDC = 10 peers * 1.20 GB = 12.0 GB.",
      "Step 3: With PDC, on-chain hash storage per peer = 100,000 * 128 bytes = 12,800,000 bytes = 12.8 MB.",
      "Step 4: Shared blockchain ledger overhead reduction: (1,200 MB - 12.8 MB) / 1,200 MB = 98.93% reduction in on-chain block size!",
      "Step 5: Storage saved on the 8 non-authorized peers = 8 * (1.20 GB - 0.0128 GB) = 9.4976 GB saved."
    ],
    "finalAnswer": "Shared Ledger Size Reduction = 98.93% (12.8 MB vs 1.20 GB); Total Storage Saved across Non-Authorized Peers = ~9.50 GB."
  }
]

