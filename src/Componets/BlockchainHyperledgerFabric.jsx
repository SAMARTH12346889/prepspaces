// projectx/src/Componets/BlockchainHyperledgerFabric.jsx
import React, { useState, useMemo, useCallback } from "react";
import ModuleNav from "./ModuleNav";
import { Link } from "react-router-dom";
import {
  Activity,
  ChevronDown,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Server
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = [
  {
    "id": "c1",
    "label": "Understand permissioned enterprise blockchain fundamentals vs public ledgers",
    "category": "fundamentals"
  },
  {
    "id": "c2",
    "label": "Analyze the Linux Foundation Hyperledger ecosystem (Fabric, Besu, Indy, Aries, Cacti)",
    "category": "fundamentals"
  },
  {
    "id": "c3",
    "label": "Master Fabric modular architecture: separation of execution, ordering, and validation",
    "category": "architecture"
  },
  {
    "id": "c4",
    "label": "Differentiate peer responsibilities: endorsing, committing, anchor, and gateway peers",
    "category": "architecture"
  },
  {
    "id": "c5",
    "label": "Understand the ordering service consensus models: Crash Fault Tolerant Raft vs BFT",
    "category": "architecture"
  },
  {
    "id": "c6",
    "label": "Configure Membership Service Providers (MSPs) and X.509 cryptographic trust domains",
    "category": "identity"
  },
  {
    "id": "c7",
    "label": "Distinguish between identity registration and enrollment with Fabric CA",
    "category": "identity"
  },
  {
    "id": "c8",
    "label": "Implement Attribute-Based Access Control (ABAC) in chaincode using GetClientIdentity",
    "category": "identity"
  },
  {
    "id": "c9",
    "label": "Design multi-organization channels for complete ledger isolation and data privacy",
    "category": "privacy"
  },
  {
    "id": "c10",
    "label": "Configure Private Data Collections (PDC) for bilateral confidential terms within a shared channel",
    "category": "privacy"
  },
  {
    "id": "c11",
    "label": "Verify that PDCs store SHA-256 hashes on the shared block ledger while keeping plaintext on authorized peers",
    "category": "privacy"
  },
  {
    "id": "c12",
    "label": "Develop Go-based smart contracts using fabric-contract-api-go/contractapi",
    "category": "chaincode"
  },
  {
    "id": "c13",
    "label": "Ensure chaincode execution determinism by utilizing transaction timestamps instead of system clocks",
    "category": "chaincode"
  },
  {
    "id": "c14",
    "label": "Implement two-step custody transfer (TransferCustody + AcceptCustodyTransfer)",
    "category": "chaincode"
  },
  {
    "id": "c15",
    "label": "Define endorsement policies using boolean syntax: AND, OR, and OutOf",
    "category": "consensus"
  },
  {
    "id": "c16",
    "label": "Trace the 11-step Execute-Order-Validate transaction lifecycle",
    "category": "consensus"
  },
  {
    "id": "c17",
    "label": "Explain Multiversion Concurrency Control (MVCC) and read/write set validation",
    "category": "consensus"
  },
  {
    "id": "c18",
    "label": "Distinguish between append-only blockchain transaction history and world state database",
    "category": "ledger"
  },
  {
    "id": "c19",
    "label": "Deploy CouchDB as state database for rich JSON queries and pagination",
    "category": "database"
  },
  {
    "id": "c20",
    "label": "Create and package CouchDB declarative index definitions in META-INF/statedb/couchdb/indexes",
    "category": "database"
  },
  {
    "id": "c21",
    "label": "Deploy Docker-based Fabric test network with Certificate Authorities and CouchDB",
    "category": "deployment"
  },
  {
    "id": "c22",
    "label": "Execute peer lifecycle chaincode packaging, approval, and channel commitment",
    "category": "deployment"
  },
  {
    "id": "c23",
    "label": "Verify product registration, status transitions, and history queries via peer CLI",
    "category": "lab"
  },
  {
    "id": "c24",
    "label": "Test negative security scenarios: unauthorized creation, invalid state jumps, and self-acceptance",
    "category": "lab"
  },
  {
    "id": "c25",
    "label": "Complete all 6 Advanced Practical Assignments (multi-org, pharma, PDC pricing, admin, event monitoring, security audit)",
    "category": "lab"
  },
  {
    "id": "c26",
    "label": "Solve all 5 numerical problems: Raft quorum tolerance, CouchDB B-tree lookups, batch timeouts, and PDC hash expansion",
    "category": "assessment"
  },
  {
    "id": "c27",
    "label": "Master 25 Senior Enterprise Blockchain Architect interview scenarios",
    "category": "assessment"
  },
  {
    "id": "c28",
    "label": "Score 100% on the 20 Knowledge Assessment examination questions",
    "category": "assessment"
  }
];
const QUIZ_QUESTIONS = [
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
];
const INTERVIEW_QUESTIONS = [
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
];
const NUMERICAL_PROBLEMS = [
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
];

export default function BlockchainHyperledgerFabric() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Execute-Order-Validate Visualizer
  const [lifecycleStage, setLifecycleStage] = useState(0);
  const [simulateMvccConflict, setSimulateMvccConflict] = useState(false);

  const resetLifecycleSim = useCallback(() => {
    setLifecycleStage(0);
    setSimulateMvccConflict(false);
  }, []);

  // Simulator 2 State: Endorsement Policy & Multi-Org Validator
  const [selectedPolicy, setSelectedPolicy] = useState("and12");
  const [peerEndorsements, setPeerEndorsements] = useState({
    org1: true,
    org2: true,
    org3: false
  });

  const togglePeerEndorsement = useCallback((peerId) => {
    setPeerEndorsements((prev) => ({
      ...prev,
      [peerId]: !prev[peerId]
    }));
  }, []);

  const activeEndorsementCount = useMemo(() => {
    return Object.values(peerEndorsements).filter(Boolean).length;
  }, [peerEndorsements]);

  const isPolicySatisfied = useMemo(() => {
    if (selectedPolicy === "and12") {
      return !!(peerEndorsements.org1 && peerEndorsements.org2);
    }
    if (selectedPolicy === "or12") {
      return !!(peerEndorsements.org1 || peerEndorsements.org2);
    }
    if (selectedPolicy === "outof23") {
      return activeEndorsementCount >= 2;
    }
    return false;
  }, [selectedPolicy, peerEndorsements, activeEndorsementCount]);

  // Simulator 4 State: Custody Transfer & CouchDB Queries
  const [custodyState, setCustodyState] = useState({
    productId: "P-1001",
    productName: "Laptop",
    batchNumber: "BATCH-2026-01",
    status: "CREATED",
    origin: "Pune, India",
    location: "Pune Factory",
    ownerMSP: "Org1MSP",
    pendingOwnerMSP: ""
  });

  const [activeQuery, setActiveQuery] = useState("shipped");

  const handleUpdateStatus = useCallback((newStatus, newLocation) => {
    setCustodyState((prev) => ({
      ...prev,
      status: newStatus,
      location: newLocation
    }));
  }, []);

  const handleInitiateTransfer = useCallback(() => {
    setCustodyState((prev) => ({
      ...prev,
      pendingOwnerMSP: "Org2MSP"
    }));
  }, []);

  const handleAcceptTransfer = useCallback(() => {
    setCustodyState((prev) => ({
      ...prev,
      ownerMSP: "Org2MSP",
      pendingOwnerMSP: ""
    }));
  }, []);

  const resetCustodyState = useCallback(() => {
    setCustodyState({
      productId: "P-1001",
      productName: "Laptop",
      batchNumber: "BATCH-2026-01",
      status: "CREATED",
      origin: "Pune, India",
      location: "Pune Factory",
      ownerMSP: "Org1MSP",
      pendingOwnerMSP: ""
    });
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
  const [checklist, setChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m22_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = useCallback((id) => {
    setChecklist((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m22_progress", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m22_progress");
    } catch {
      // ignore
    }
  }, []);

  const completedChecklistCount = useMemo(() => {
    return Object.values(checklist).filter(Boolean).length;
  }, [checklist]);

  const checklistProgress = useMemo(() => {
    if (CHECKLIST_ITEMS.length === 0) return 0;
    return Math.round((completedChecklistCount / CHECKLIST_ITEMS.length) * 100);
  }, [completedChecklistCount]);

  const checklistCategories = useMemo(() => {
    return Array.from(new Set(CHECKLIST_ITEMS.map((item) => item.category)));
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-neutral-900 pb-28 sm:pb-36 selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <ModuleNav track="blockchain" currentModuleId="hyperledger-fabric" />
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
            <span>Module 22 · Enterprise Blockchain</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 space-y-8 sm:space-y-10">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Server className="w-3.5 h-3.5" />
            <span>BLOCKCHAIN DEVELOPMENT • ADVANCED LEVEL • ENTERPRISE DISTRIBUTED LEDGER TECHNOLOGY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 22 — Hyperledger Fabric &amp; Enterprise Blockchain
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-grade study of permissioned enterprise distributed ledgers, Hyperledger Fabric 3.1.x, execute–order–validate consensus, Membership Service Providers (MSPs), X.509 PKI identity management, isolated channels, Private Data Collections (PDC), Go chaincode development, CouchDB Mango indexing, and Docker infrastructure. Deploy a multi-organization supply chain tracking platform.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            
        {/* Interactive Simulators Section */}
        <section id="simulators" className="space-y-12">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>HANDS-ON ENTERPRISE LABS & PROTOCOL SIMULATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive Hyperledger Fabric Architecture Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Explore transaction simulation, multi-organization endorsement policies, Private Data Collections (PDC), MVCC concurrency conflicts, and CouchDB Mango queries.
            </p>
          </div>

          {/* Simulator 1: Execute-Order-Validate Lifecycle Visualizer */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Execute–Order–Validate Lifecycle Visualizer</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Step through Fabric&apos;s decoupled transaction pipeline and inspect simulated read/write sets and MVCC validation.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={resetLifecycleSim}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset Pipeline
                </button>
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              {[
                { stage: 0, label: "1. Client Proposal" },
                { stage: 1, label: "2. Peer Simulation" },
                { stage: 2, label: "3. Ordering Service" },
                { stage: 3, label: "4. MVCC & Commit" }
              ].map((st) => (
                <button
                  key={st.stage}
                  type="button"
                  onClick={() => setLifecycleStage(st.stage)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    lifecycleStage === st.stage
                      ? "bg-amber-600 text-white border-amber-600 font-bold shadow-sm"
                      : lifecycleStage > st.stage
                      ? "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold"
                      : "bg-neutral-50 text-neutral-400 border-neutral-200"
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            {/* Stage Details Panel */}
            <div className="p-5 rounded-2xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-amber-400 font-bold uppercase tracking-wider">
                  Stage {lifecycleStage + 1}: {
                    lifecycleStage === 0 ? "Client Application Proposal Construction" :
                    lifecycleStage === 1 ? "Endorsing Peers Chaincode Simulation & Signing" :
                    lifecycleStage === 2 ? "Ordering Service Batching & Block Packaging" :
                    "Committing Peers Validation & MVCC Commit"
                  }
                </span>
                <span className="text-neutral-400 text-[11px]">Channel: supplychannel</span>
              </div>

              {lifecycleStage === 0 && (
                <div className="space-y-3 leading-relaxed">
                  <p className="text-neutral-300">
                    Client application (Org1 Manufacturer) uses Fabric Gateway to construct an invocation proposal for <code>TransferCustody(&quot;P-1001&quot;, &quot;Org2MSP&quot;)</code>. The proposal is cryptographically signed using the client&apos;s X.509 private key.
                  </p>
                  <div className="p-3 bg-neutral-800 rounded-xl space-y-1 text-emerald-400">
                    <div>ProposalCreator: User1@org1.example.com (MSP: Org1MSP)</div>
                    <div>Target Chaincode: supplychain:1.0</div>
                    <div>Function: TransferCustody | Args: [&quot;P-1001&quot;, &quot;Org2MSP&quot;]</div>
                    <div>Proposal Hash: 0x9e4b7c2a1f0d8e6c...</div>
                  </div>
                </div>
              )}

              {lifecycleStage === 1 && (
                <div className="space-y-3 leading-relaxed">
                  <p className="text-neutral-300">
                    Endorsing peers (<code>peer0.org1</code> and <code>peer0.org2</code>) execute the chaincode in a temporary sandboxed runtime. They read world state without locking keys, produce a Read Set (version v1_0) and Write Set (PendingOwnerMSP = Org2MSP), and sign the proposal response.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-200">
                    <div className="p-3 bg-neutral-800 rounded-xl border border-neutral-700">
                      <div className="text-amber-400 font-bold">peer0.org1.example.com Endorsement</div>
                      <div>ReadSet: PRODUCT_P1001 (Ver: Block 12, Tx 0)</div>
                      <div>WriteSet: PRODUCT_P1001 (Status: SHIPPED, Pending: Org2MSP)</div>
                      <div className="text-emerald-400">Signature: VALID (Org1MSP)</div>
                    </div>
                    <div className="p-3 bg-neutral-800 rounded-xl border border-neutral-700">
                      <div className="text-amber-400 font-bold">peer0.org2.example.com Endorsement</div>
                      <div>ReadSet: PRODUCT_P1001 (Ver: Block 12, Tx 0)</div>
                      <div>WriteSet: PRODUCT_P1001 (Status: SHIPPED, Pending: Org2MSP)</div>
                      <div className="text-emerald-400">Signature: VALID (Org2MSP)</div>
                    </div>
                  </div>
                </div>
              )}

              {lifecycleStage === 2 && (
                <div className="space-y-3 leading-relaxed">
                  <p className="text-neutral-300">
                    Client aggregates endorsements and delivers the transaction envelope to the Raft Ordering Service. The orderer sequences transactions deterministically, batches them into Block #13 (MaxMessageCount: 200, Timeout: 1.5s), and distributes the block to all committing peers on <code>supplychannel</code>.
                  </p>
                  <div className="p-3 bg-neutral-800 rounded-xl space-y-1 text-amber-300">
                    <div>Ordering Leader: orderer.example.com (Raft Consensus Active)</div>
                    <div>Block Number: 13 | Channel: supplychannel</div>
                    <div>Previous Block Hash: 0x3d82a1f... | Block Data Hash: 0xfa61bc9...</div>
                    <div>Transactions in Block: 42 transactions</div>
                  </div>
                </div>
              )}

              {lifecycleStage === 3 && (
                <div className="space-y-3 leading-relaxed">
                  <p className="text-neutral-300">
                    Committing peers inspect Block #13. Each peer validates: 1) Endorsement policy satisfaction; 2) Signature validity; 3) <strong>MVCC Conflict Check</strong> (compares ReadSet version with current World State version).
                  </p>
                  <div className={`p-4 rounded-xl border ${
                    simulateMvccConflict
                      ? "bg-red-950/80 border-red-500 text-red-200"
                      : "bg-emerald-950/80 border-emerald-500 text-emerald-200"
                  }`}>
                    {simulateMvccConflict ? (
                      <div className="space-y-1">
                        <div className="font-bold text-red-400">TRANSACTION INVALIDATED: MVCC_READ_CONFLICT</div>
                        <div>Expected Key Version: Block 12, Tx 0 | Actual World State: Block 12, Tx 4 (Key was updated by concurrent transaction!)</div>
                        <div>Result: Block is committed, but transaction status flag set to INVALID. World state NOT updated!</div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="font-bold text-emerald-400">TRANSACTION COMMITTED VALID: STATUS 200 OK</div>
                        <div>MVCC Check: ReadSet (Block 12, Tx 0) matches current World State version.</div>
                        <div>World State Updated: Key PRODUCT_P1001 set to PendingOwnerMSP = &quot;Org2MSP&quot;.</div>
                        <div>Event Emitted: CustodyTransferRequested</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Simulation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={lifecycleStage === 0}
                  onClick={() => setLifecycleStage((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-neutral-300 text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 text-xs font-mono font-bold transition-all"
                >
                  &larr; Previous Stage
                </button>
                <button
                  type="button"
                  disabled={lifecycleStage === 3}
                  onClick={() => setLifecycleStage((prev) => Math.min(3, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-40 text-xs font-mono font-bold transition-all shadow-sm"
                >
                  Next Stage &rarr;
                </button>
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-mono text-neutral-700 select-none">
                <input
                  type="checkbox"
                  checked={simulateMvccConflict}
                  onChange={(e) => setSimulateMvccConflict(e.target.checked)}
                  className="w-4 h-4 rounded border-neutral-300 text-amber-600 focus:ring-amber-500"
                />
                <span className="font-bold text-red-700">Simulate Concurrent MVCC Read Conflict</span>
              </label>
            </div>
          </div>

          {/* Simulator 2: Endorsement Policy & Multi-Org Validator */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
              <h3 className="text-xl font-bold text-neutral-900">Endorsement Policy &amp; Multi-Org Validator</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Configure boolean endorsement expressions and test peer endorsement scenarios against channel validation rules.</p>
            </div>

            {/* Policy Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-neutral-700 block">Select Active Chaincode Endorsement Policy:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs font-mono">
                {[
                  { id: "and12", label: "AND('Org1MSP.peer', 'Org2MSP.peer')", desc: "Manufacturer + Distributor both required" },
                  { id: "or12", label: "OR('Org1MSP.peer', 'Org2MSP.peer')", desc: "Either Manufacturer or Distributor" },
                  { id: "outof23", label: "OutOf(2, 'Org1.peer', 'Org2.peer', 'Org3.peer')", desc: "Any 2 of 3 Consortium Organizations" }
                ].map((pol) => (
                  <button
                    key={pol.id}
                    type="button"
                    onClick={() => setSelectedPolicy(pol.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedPolicy === pol.id
                        ? "bg-amber-600 text-white border-amber-600 font-bold shadow-sm"
                        : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                    }`}
                  >
                    <div className="font-bold">{pol.label}</div>
                    <div className={`text-[10px] mt-1 ${selectedPolicy === pol.id ? "text-amber-100" : "text-neutral-500"}`}>{pol.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Peer Endorsement Toggles */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-neutral-700 block">Simulate Peer Simulation &amp; Endorsement Signatures:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                {[
                  { id: "org1", name: "peer0.org1.example.com", org: "Org1 (Manufacturer)" },
                  { id: "org2", name: "peer0.org2.example.com", org: "Org2 (Distributor)" },
                  { id: "org3", name: "peer0.org3.example.com", org: "Org3 (Logistics Provider)" }
                ].map((p) => {
                  const isEndorsed = peerEndorsements[p.id];
                  return (
                    <div
                      key={p.id}
                      onClick={() => togglePeerEndorsement(p.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all space-y-2 ${
                        isEndorsed
                          ? "bg-emerald-50 border-emerald-400 text-emerald-950"
                          : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-neutral-900">{p.org}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isEndorsed ? "bg-emerald-600 text-white" : "bg-neutral-300 text-neutral-700"
                        }`}>
                          {isEndorsed ? "SIGNED" : "NO SIGNATURE"}
                        </span>
                      </div>
                      <div className="text-[11px] text-neutral-500 font-mono truncate">{p.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Validation Outcome Banner */}
            <div className={`p-5 rounded-2xl border font-mono text-xs space-y-2 ${
              isPolicySatisfied
                ? "bg-emerald-50 border-emerald-400 text-emerald-950"
                : "bg-red-50 border-red-400 text-red-950"
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm uppercase">
                  Endorsement Verification: {isPolicySatisfied ? "POLICY SATISFIED (VALID)" : "POLICY FAILED (REJECTED)"}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white/80 font-bold">
                  {isPolicySatisfied ? "COMMIT TO LEDGER" : "DISCARD WRITES"}
                </span>
              </div>
              <p className="leading-relaxed text-[11px]">
                {selectedPolicy === "and12" && (
                  isPolicySatisfied
                    ? "Both Org1 (Manufacturer) and Org2 (Distributor) endorsements are present. Committing peers accept the read/write set."
                    : "Policy requires BOTH Org1 and Org2 endorsements. Transaction cannot be committed."
                )}
                {selectedPolicy === "or12" && (
                  isPolicySatisfied
                    ? "At least one required endorsement (Org1 or Org2) is present. Transaction accepted."
                    : "Neither Org1 nor Org2 endorsed the proposal. Transaction rejected."
                )}
                {selectedPolicy === "outof23" && (
                  isPolicySatisfied
                    ? "At least 2 out of 3 consortium organizations signed the proposal. Quorum threshold met."
                    : `Currently only ${activeEndorsementCount} of 3 peers signed. Minimum of 2 required.`
                )}
              </p>
            </div>
          </div>

          {/* Simulator 3: Channel vs. Private Data Collection (PDC) Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
              <h3 className="text-xl font-bold text-neutral-900">Channel vs. Private Data Collection (PDC) Sandbox</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Inspect how confidential pricing data is restricted to authorized collection peers while an immutable hash is recorded on the public ledger.</p>
            </div>

            {/* Data Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2">
                <span className="font-bold text-neutral-900 block uppercase tracking-wider text-[11px]">
                  Shared Channel Payload (Public to All Channel Orgs)
                </span>
                <div className="space-y-1 text-neutral-700 bg-white p-3 rounded-lg border border-neutral-200">
                  <div>productId: &quot;MED-1001&quot;</div>
                  <div>productName: &quot;Insulin Glargine 100U/ml&quot;</div>
                  <div>batchNumber: &quot;BATCH-2026-X9&quot;</div>
                  <div>status: &quot;SHIPPED&quot; | origin: &quot;Pune, India&quot;</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
                <span className="font-bold text-amber-900 block uppercase tracking-wider text-[11px]">
                  Private Commercial Terms (collectionManufacturerDistributor)
                </span>
                <div className="space-y-1 text-amber-950 bg-white p-3 rounded-lg border border-amber-200">
                  <div>wholesaleUnitPrice: $1,450.00 USD</div>
                  <div>volumeDiscount: 14.5%</div>
                  <div>contractReference: &quot;CONTR-PHARMA-2026-B2B&quot;</div>
                  <div>settlementTerms: &quot;Net 30 Days via RTGS&quot;</div>
                </div>
              </div>
            </div>

            {/* Multi-Org Visibility Matrix */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-neutral-700 block">
                Peer Ledger Visibility Across Organizations:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                {/* Org1 */}
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
                    <span className="font-bold text-neutral-900">Org1 (Manufacturer)</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">MEMBER</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-neutral-500">Public Channel State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT</div>
                    <div className="text-neutral-500 pt-1">Private Collection State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT (SideDB)</div>
                    <div className="text-[10px] text-neutral-400 pt-1">Can read/write wholesale price $1,450 &amp; terms.</div>
                  </div>
                </div>

                {/* Org2 */}
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
                    <span className="font-bold text-neutral-900">Org2 (Distributor)</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">MEMBER</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-neutral-500">Public Channel State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT</div>
                    <div className="text-neutral-500 pt-1">Private Collection State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT (SideDB)</div>
                    <div className="text-[10px] text-neutral-400 pt-1">Authorized recipient; receives private data via Gossip.</div>
                  </div>
                </div>

                {/* Org3 */}
                <div className="p-4 rounded-xl bg-white border border-red-200 space-y-2 bg-red-50/30">
                  <div className="flex items-center justify-between pb-1 border-b border-neutral-100">
                    <span className="font-bold text-neutral-900">Org3 (Hospital / Retailer)</span>
                    <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">NON-MEMBER</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="text-neutral-500">Public Channel State:</div>
                    <div className="text-emerald-700 font-bold">FULL PLAINTEXT</div>
                    <div className="text-neutral-500 pt-1">Private Collection State:</div>
                    <div className="text-red-700 font-bold">SHA-256 HASH ONLY</div>
                    <div className="text-[10px] text-neutral-600 font-mono pt-1 truncate">
                      Hash: 0x98f6bcd4621d373cade4e832627b4f6...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 4: Supply Chain Custody Transfer & CouchDB Rich Query */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
              <h3 className="text-xl font-bold text-neutral-900">2-Step Custody Transfer &amp; CouchDB Rich Query Sandbox</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Execute bilateral custody transitions and test declarative CouchDB Mango selector queries.</p>
            </div>

            {/* 2-Step Custody State Machine */}
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-neutral-800 pb-2">
                <span className="font-bold text-amber-400">Asset: PRODUCT_P1001 (Laptop Batch #2026-01)</span>
                <span className="text-neutral-400 text-[11px]">Lifecycle State: {custodyState.status}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                <div>Owner MSP: <strong className="text-emerald-400">{custodyState.ownerMSP}</strong></div>
                <div>Pending Owner: <strong className="text-amber-400">{custodyState.pendingOwnerMSP || "None"}</strong></div>
                <div>Location: <strong className="text-neutral-200">{custodyState.location}</strong></div>
                <div>Status: <strong className="text-emerald-400">{custodyState.status}</strong></div>
              </div>
            </div>

            {/* Custody Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                disabled={custodyState.status !== "CREATED"}
                onClick={() => handleUpdateStatus("PACKED", "Pune Warehouse")}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-mono font-bold hover:bg-neutral-100 disabled:opacity-40 transition-all"
              >
                1. Pack Product (Org1)
              </button>
              <button
                type="button"
                disabled={custodyState.status !== "PACKED"}
                onClick={() => handleUpdateStatus("SHIPPED", "Mumbai Distribution Hub")}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-xs font-mono font-bold hover:bg-neutral-100 disabled:opacity-40 transition-all"
              >
                2. Ship Product (Org1)
              </button>
              <button
                type="button"
                disabled={custodyState.status !== "SHIPPED" || custodyState.pendingOwnerMSP !== ""}
                onClick={handleInitiateTransfer}
                className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-mono font-bold disabled:opacity-40 transition-all"
              >
                3. Propose Custody to Org2MSP
              </button>
              <button
                type="button"
                disabled={custodyState.pendingOwnerMSP !== "Org2MSP"}
                onClick={handleAcceptTransfer}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold disabled:opacity-40 transition-all animate-pulse"
              >
                4. Accept Custody as Org2MSP
              </button>
              <button
                type="button"
                disabled={custodyState.ownerMSP !== "Org2MSP" || custodyState.status === "DELIVERED"}
                onClick={() => handleUpdateStatus("DELIVERED", "Mumbai Retail Store")}
                className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-bold disabled:opacity-40 transition-all"
              >
                5. Confirm Delivery (Org2)
              </button>
              <button
                type="button"
                onClick={resetCustodyState}
                className="px-3 py-1.5 rounded-lg border border-neutral-200 text-neutral-600 hover:bg-neutral-50 text-xs font-mono transition-all ml-auto"
              >
                Reset Asset
              </button>
            </div>

            {/* CouchDB Rich Query Selector */}
            <div className="space-y-3 pt-2 border-t border-neutral-200">
              <span className="text-xs font-mono font-bold text-neutral-700 block">
                Test CouchDB Rich JSON Query Execution:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {[
                  { id: "shipped", label: "status == 'SHIPPED'", query: '{"selector":{"docType":"product","status":"SHIPPED"}}' },
                  { id: "delivered", label: "status == 'DELIVERED'", query: '{"selector":{"docType":"product","status":"DELIVERED"}}' },
                  { id: "org1", label: "ownerMSP == 'Org1MSP'", query: '{"selector":{"docType":"product","ownerMSP":"Org1MSP"}}' }
                ].map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setActiveQuery(q.id)}
                    className={`px-3 py-1.5 rounded-lg border transition-all ${
                      activeQuery === q.id
                        ? "bg-neutral-900 text-white border-neutral-900 font-bold"
                        : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs space-y-2">
                <div className="text-amber-400 font-bold">Query: GetQueryResult(queryString)</div>
                <div className="text-neutral-400 text-[11px]">
                  Index Utilized: <code>productStatusIndex</code> (B-Tree traversal on fields: <code>[&quot;docType&quot;, &quot;status&quot;]</code>)
                </div>
                <div className="p-3 bg-neutral-800 rounded-lg text-emerald-400 text-[11px] overflow-x-auto">
                  {activeQuery === "shipped" && `[ { "productId": "P-1001", "name": "Laptop", "status": "${custodyState.status === "SHIPPED" ? "SHIPPED" : "None Found in State"}" } ]`}
                  {activeQuery === "delivered" && `[ { "productId": "P-1001", "name": "Laptop", "status": "${custodyState.status === "DELIVERED" ? "DELIVERED" : "None Found in State"}" } ]`}
                  {activeQuery === "org1" && `[ { "productId": "P-1001", "name": "Laptop", "owner": "${custodyState.ownerMSP}" } ]`}
                </div>
              </div>
            </div>
          </div>
        </section>
    
          </div>
        ) : (
          <div className="space-y-16">
            
        {/* Theory Section Container */}
        <section id="theory" className="space-y-16">
{/* Part 1: Enterprise Blockchain Fundamentals */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 1</span>
              <span>•</span>
              <span>ENTERPRISE DISTRIBUTED LEDGER TECHNOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              1. Enterprise Blockchain Fundamentals
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">1.1 What is Enterprise Blockchain?</h3>
              <p>
                <strong>Enterprise blockchain</strong> is a distributed ledger technology architected specifically to support collaboration, business workflows, and automated transactions between authenticated organizations.
              </p>
              <p>
                Unlike public permissionless blockchains (such as Bitcoin or Ethereum), where anonymous participants can execute transactions without prior vetting, enterprise blockchain networks enforce strict organizational identities and predefined access permissions.
              </p>

              {/* Real-World Concrete Supply Chain Scenario Box */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold font-mono text-xs uppercase tracking-wider">
                  <span>Concrete Enterprise Scenario: Pharmaceutical Supply Chain</span>
                </div>
                <p className="text-sm text-neutral-800 leading-relaxed">
                  Consider a pharmaceutical supply chain comprising four independent enterprise entities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <strong className="text-neutral-900 block mb-1">1. Manufacturer</strong>
                    <p className="text-neutral-600">Records batch synthesis, serialization, and lab testing data.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <strong className="text-neutral-900 block mb-1">2. Distributor</strong>
                    <p className="text-neutral-600">Confirms wholesale receipt and cold-chain integrity verification.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <strong className="text-neutral-900 block mb-1">3. Logistics Provider</strong>
                    <p className="text-neutral-600">Transmits real-time IoT GPS and temperature telemetry.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200">
                    <strong className="text-neutral-900 block mb-1">4. Hospital / Clinic</strong>
                    <p className="text-neutral-600">Scans barcode on receipt and dispenses verified medicine.</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed pt-1">
                  Each organization maintains its own private ERP and database systems. Without a shared distributed ledger, verifying custody transfers requires slow, manual reconciliation across disparate databases. An enterprise blockchain provides a single, immutable, cryptographic source of truth where all four organizations maintain matching ledger replicas according to their permissions.
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.2 Why Do Enterprises Need Blockchain?</h3>
              <p>
                Traditional enterprise systems rely on centralized, fragmented internal databases:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Traditional Fragmented Silos]:<br />
                  Manufacturer DB &rarr; (Manual EDI/Email/API) &rarr; Distributor DB &rarr; (Manual Phone/Spreadsheet) &rarr; Logistics DB &rarr; Hospital DB<br /><br />
                  [Permissioned Enterprise Blockchain Shared Ledger]:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[FABRIC NETWORK]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-------------------+-------------------+<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;[Org 1: Mfr]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Org 2: Dist]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Org 3: Hosp]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;[Peer 0]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Peer 0]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Peer 0]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;====== [SHARED IMMUTABLE CHANNEL LEDGER] ======
                </code>
              </div>
              <p>
                Potential failure points in traditional centralized architectures that blockchain resolves:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-white p-4 rounded-xl border border-neutral-200">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Conflicting Versions:</strong> Different companies hold conflicting records for the same batch.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Manual Reconciliation:</strong> Costly audit teams spend weeks balancing paper manifests and spreadsheets.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Delayed Settlement:</strong> Trade financing is stalled due to lack of verified delivery proofs.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Single-Party Vulnerability:</strong> A centralized database operator can alter or backdate transaction records.</li>
              </ul>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-mono">
                <strong>Architectural Principle:</strong> Blockchain is not a replacement for internal transactional databases. It is required when multiple sovereign organizations need a shared, verifiable, and tamper-resistant transaction history without ceding total control to an external central monopoly.
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.3 Seven Characteristics of Enterprise Blockchain</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">1. Permissioned Membership</div>
                  <p className="text-neutral-600">Every peer, client, and admin possesses an authenticated X.509 cryptographic identity.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">2. Distributed Ledger</div>
                  <p className="text-neutral-600">Independent peer nodes in each organization hold synchronized copies of the ledger.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">3. Granular Access Control</div>
                  <p className="text-neutral-600">Organizational policies determine exactly who can invoke, query, or endorse transactions.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">4. Channel &amp; PDC Privacy</div>
                  <p className="text-neutral-600">Bilateral confidential data is segmented using isolated channels and private data collections.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">5. Strict Auditability</div>
                  <p className="text-neutral-600">All historical asset mutations are preserved permanently in an append-only cryptographic chain.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-amber-900">6. Smart Contracts (Chaincode)</div>
                  <p className="text-neutral-600">Business logic written in Go, Java, or TypeScript executes deterministically across nodes.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 space-y-1 sm:col-span-3">
                  <div className="font-bold text-amber-900">7. Formal Consortium Governance</div>
                  <p className="text-neutral-600">Network rules, channel memberships, and endorsement criteria are updated through cryptographic multi-sig approval policies.</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.4 Enterprise Blockchain Use Cases Matrix</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Industry Vertical</th>
                      <th className="p-3">Production Application</th>
                      <th className="p-3">Primary Architectural Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Banking &amp; Finance</td>
                      <td className="p-3 text-neutral-700">Interbank clearing &amp; bilateral trade finance reconciliation</td>
                      <td className="p-3 text-neutral-600">Eliminates nostro/vostro account delays and manual SWIFT confirmation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Healthcare</td>
                      <td className="p-3 text-neutral-700">Cross-hospital electronic medical record (EMR) exchange</td>
                      <td className="p-3 text-neutral-600">Patient consent verification while preserving HIPAA privacy via PDCs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Pharmaceuticals</td>
                      <td className="p-3 text-neutral-700">Anti-counterfeit drug serialization &amp; DSCSA compliance</td>
                      <td className="p-3 text-neutral-600">End-to-end chain of custody from chemical synthesis to retail pharmacy</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Global Logistics</td>
                      <td className="p-3 text-neutral-700">Multi-modal container shipment tracking &amp; customs e-bills</td>
                      <td className="p-3 text-neutral-600">Automated port release upon multi-party customs endorsement</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Manufacturing</td>
                      <td className="p-3 text-neutral-700">Aerospace &amp; automotive component provenance tracking</td>
                      <td className="p-3 text-neutral-600">Immediate root-cause recall isolation for defective aircraft parts</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Agriculture &amp; Food</td>
                      <td className="p-3 text-neutral-700">Farm-to-fork organic origin and cold-chain monitoring</td>
                      <td className="p-3 text-neutral-600">Instant tracking of contaminated batches during food-borne outbreaks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 2: Public vs Private Blockchain */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 2</span>
              <span>•</span>
              <span>NETWORK TAXONOMY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              2. Public vs. Private vs. Permissioned Blockchain
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">2.1 Detailed Architectural Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Architectural Feature</th>
                      <th className="p-3">Public Blockchain (e.g., Ethereum)</th>
                      <th className="p-3">Permissioned Blockchain (Hyperledger Fabric)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Network Membership</td>
                      <td className="p-3 text-neutral-600">Open to anyone; pseudonymous</td>
                      <td className="p-3 text-amber-900 font-bold">Controlled; authenticated X.509 PKI identities</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Transaction Privacy</td>
                      <td className="p-3 text-neutral-600">Transparent to all nodes by default</td>
                      <td className="p-3 text-emerald-700 font-bold">Granular; partitioned via Channels &amp; Private Collections</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Consensus Architecture</td>
                      <td className="p-3 text-neutral-600">Order-Execute (PoS, PoW); all nodes execute all txs</td>
                      <td className="p-3 text-emerald-700 font-bold">Execute-Order-Validate; decoupled ordering service</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Economic Gas Model</td>
                      <td className="p-3 text-neutral-600">Mandatory cryptocurrency fees per op</td>
                      <td className="p-3 text-emerald-700 font-bold">Zero gas token; enterprise operational SLA model</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Smart Contract Languages</td>
                      <td className="p-3 text-neutral-600">Domain-specific: Solidity, Vyper</td>
                      <td className="p-3 text-neutral-900 font-bold">Standard general-purpose: Go, Java, TypeScript</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Throughput Capacity</td>
                      <td className="p-3 text-neutral-600">15–100 TPS (L1)</td>
                      <td className="p-3 text-emerald-700 font-bold">2,000–20,000+ TPS depending on endorsement policy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">2.2 Private vs. Permissioned: The Critical Distinction</h3>
              <p>
                &quot;Private&quot; and &quot;Permissioned&quot; are often confused, but signify different architectural traits:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 text-sm">Private Blockchain</span>
                  <p className="text-neutral-600">Restricts read/write access and network participation to a single enterprise or bounded legal boundary. Usually single-operator.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <span className="font-bold text-neutral-900 text-sm">Permissioned Consortium Blockchain</span>
                  <p className="text-neutral-600">Multiple independent, competing organizations participate in a shared infrastructure where every node and actor has authenticated cryptographic roles governed by shared policies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3: Permissioned Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 3</span>
              <span>•</span>
              <span>CONSORTIUM TRUST ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              3. Permissioned Blockchain Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">3.1 The Ten Core Architectural Components</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 text-xs font-mono">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">1. Organizations (MSPs)</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">2. Peer Nodes</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">3. Ordering Nodes</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">4. Certificate Authorities</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">5. Channels</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">6. Chaincode Packages</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">7. Blockchain Blocks</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">8. World State DB</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">9. Fabric Gateway</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">10. Client Applications</div>
              </div>
            </div>
          </div>

          {/* Part 4: Hyperledger Ecosystem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 4</span>
              <span>•</span>
              <span>THE LINUX FOUNDATION HYPERLEDGER ECOSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              4. Hyperledger Ecosystem
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                <strong>Hyperledger</strong> is an open-source collaborative effort hosted by the Linux Foundation to advance cross-industry enterprise blockchain technologies:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Hyperledger Fabric</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">DLT Framework</span>
                  </div>
                  <p className="text-neutral-600">The flagship permissioned modular ledger engine featuring decoupled execution, channels, and private data collections.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Hyperledger Besu</span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900">EVM Client</span>
                  </div>
                  <p className="text-neutral-600">Enterprise Ethereum client written in Java supporting public Ethereum mainnet and private permissioned networks (QBFT, IBFT 2.0).</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Hyperledger Indy &amp; Aries</span>
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900">Digital Identity</span>
                  </div>
                  <p className="text-neutral-600">Self-Sovereign Identity (SSI), verifiable credentials (VCs), and decentralized identifier (DID) communication protocols.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Hyperledger Cacti</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">Interoperability</span>
                  </div>
                  <p className="text-neutral-600">Interoperability framework enabling atomic cross-ledger asset exchanges between Fabric, Besu, Corda, and Ethereum.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 5: Hyperledger Fabric Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 5</span>
              <span>•</span>
              <span>MODULAR FABRIC ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              5. Hyperledger Fabric Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">5.1 Decoupled Modular Design</h3>
              <p>
                Fabric separates transaction execution into three independent phases:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [PHASE 1: EXECUTION] &rarr; Endorsing peers simulate proposal in sandboxes &rarr; Produce Read/Write Sets<br />
                  [PHASE 2: ORDERING]&nbsp;&nbsp;&rarr; Ordering service sequences transactions into blocks &rarr; Does NOT execute chaincode<br />
                  [PHASE 3: VALIDATION]&rarr; Committing peers verify endorsements and MVCC versions &rarr; Commit to local ledger!
                </code>
              </div>
            </div>
          </div>

          {/* Part 6: Peers and Ordering Nodes */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 6</span>
              <span>•</span>
              <span>PEERS &amp; ORDERING SERVICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              6. Fabric Peers and Ordering Nodes
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">6.1 Peer Node Functional Roles</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Peer Role</th>
                      <th className="p-3">Core Operational Responsibilities</th>
                      <th className="p-3">Hardware Resource Profile</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Endorsing Peer</td>
                      <td className="p-3 text-neutral-700">Simulates chaincode proposals, validates business rules, signs read/write sets.</td>
                      <td className="p-3 text-neutral-600">High CPU &amp; Memory (runs Go/Node execution runtimes).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Committing Peer</td>
                      <td className="p-3 text-neutral-700">Validates block signatures, verifies MVCC read versions, writes to world state.</td>
                      <td className="p-3 text-neutral-600">Standard compute, high disk I/O throughput.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Anchor Peer</td>
                      <td className="p-3 text-neutral-700">Enables cross-organization peer discovery and Gossip data dissemination.</td>
                      <td className="p-3 text-neutral-600">Must be addressable across organizational firewalls.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Gateway Peer</td>
                      <td className="p-3 text-neutral-700">Receives client transactions, discovers endorsers, aggregates signatures (v2.4+).</td>
                      <td className="p-3 text-neutral-600">High network bandwidth and connection pooling.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.2 Ordering Consensus: Raft CFT vs. SmartBFT</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Raft Consensus (Crash Fault Tolerant)</div>
                  <p className="text-neutral-600">Leader-follower protocol. Requires strict majority quorum Q = floor(N/2) + 1. Tolerates f = floor((N-1)/2) crashed nodes. Assumes honest nodes.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">BFT Consensus (Fabric v3.0 Native SmartBFT)</div>
                  <p className="text-neutral-600">Byzantine Fault Tolerant. Requires N &gt;= 3f + 1 nodes. Tolerates up to f malicious, colluding, or compromised ordering nodes. Designed for adversarial cross-border consortia.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 7: Membership Service Provider (MSP) */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 7</span>
              <span>•</span>
              <span>MEMBERSHIP SERVICE PROVIDER (MSP)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              7. Membership Service Provider (MSP)
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">7.1 What is an MSP?</h3>
              <p>
                An <strong>MSP</strong> is the core identity management component in Hyperledger Fabric. It translates abstract digital identities into verified organizational memberships.
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Client X.509 Certificate] &rarr; [Organization MSP: Org1MSP]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Validates Root CA signature chain<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Checks Certificate Revocation List (CRL)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Extracts Organizational Unit (OU): client vs peer vs admin<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr;<br />
                  [Decision: Authenticated Org1MSP Member] &rarr; Evaluated against Channel Policy!
                </code>
              </div>
            </div>
          </div>

          {/* Part 8: Certificate Authorities */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 8</span>
              <span>•</span>
              <span>CERTIFICATE AUTHORITIES &amp; PKI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              8. Certificate Authorities (Fabric CA)
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">8.1 Registration vs. Enrollment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Registration</div>
                  <p className="text-neutral-600">Administrative process where an admin registers a new user with Fabric CA, assigning username, one-time enrollment secret, and role attributes.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Enrollment</div>
                  <p className="text-neutral-600">Client-side process where the user provides their secret to the CA. The client generates a private key locally and receives an X.509 certificate signed by the CA.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 9: Identity Management */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 9</span>
              <span>•</span>
              <span>IDENTITY &amp; ATTRIBUTE ACCESS CONTROL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              9. Identity Management &amp; Attribute-Based Access Control (ABAC)
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">9.1 Enforcing ABAC in Go Chaincode</h3>
              <p>
                Chaincode can inspect X.509 certificate attributes dynamically using the Fabric Client Identity library:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  role, found, err := ctx.GetClientIdentity().GetAttributeValue(&quot;role&quot;)<br />
                  if err != nil || !found || role != &quot;manufacturer&quot; &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return fmt.Errorf(&quot;unauthorized: client lacks manufacturer clearance&quot;)<br />
                  &#125;
                </code>
              </div>
            </div>
          </div>

          {/* Part 10: Channels and Private Data Collections */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 10</span>
              <span>•</span>
              <span>CHANNELS &amp; PRIVATE DATA COLLECTIONS (PDC)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              10. Channels and Private Data Collections
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">10.1 Channel vs. Private Data Collection Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Privacy Dimension</th>
                      <th className="p-3">Channel Isolation</th>
                      <th className="p-3">Private Data Collection (PDC)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Ledger Architecture</td>
                      <td className="p-3 text-neutral-700">Completely separate blockchain ledger</td>
                      <td className="p-3 text-neutral-700">Shared channel ledger holds hash; private state holds plaintext</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Membership Scope</td>
                      <td className="p-3 text-neutral-700">Dedicated channel member orgs</td>
                      <td className="p-3 text-neutral-700">Subset of organizations on an existing shared channel</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Transaction Existence</td>
                      <td className="p-3 text-neutral-700">Completely invisible to non-channel orgs</td>
                      <td className="p-3 text-neutral-700">All channel peers see the transaction occurred and verify its hash</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Ideal Enterprise Use</td>
                      <td className="p-3 text-neutral-700">Distinct multi-party business relationships</td>
                      <td className="p-3 text-neutral-700">Bilateral pricing and proprietary terms within a consortium workflow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
{/* Part 11: Chaincode Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 11</span>
              <span>•</span>
              <span>CHAINCODE ARCHITECTURE &amp; SMART CONTRACTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              11. Chaincode Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">11.1 What is Chaincode?</h3>
              <p>
                <strong>Chaincode</strong> is the software package hosted on peer nodes that contains the smart contract business logic defining how assets are created, queried, modified, and transferred on the distributed ledger.
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Function</th>
                      <th className="p-3">Transaction Purpose</th>
                      <th className="p-3">State Modification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">CreateProduct</td>
                      <td className="p-3 text-neutral-600">Registers a new batch; restricted to Org1MSP (Manufacturer)</td>
                      <td className="p-3 text-emerald-700 font-bold">PutState(PRODUCT_ID, JSON)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">ReadProduct</td>
                      <td className="p-3 text-neutral-600">Retrieves latest asset state; open to channel members</td>
                      <td className="p-3 text-neutral-800">GetState(PRODUCT_ID) [Read-Only]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">UpdateStatus</td>
                      <td className="p-3 text-neutral-600">Updates location &amp; state (CREATED &rarr; PACKED &rarr; SHIPPED &rarr; DELIVERED)</td>
                      <td className="p-3 text-amber-800">PutState(PRODUCT_ID, JSON)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">TransferCustody</td>
                      <td className="p-3 text-neutral-600">Owner nominates PendingOwnerMSP (Two-Step Custody Handshake)</td>
                      <td className="p-3 text-amber-800">PutState(PRODUCT_ID, JSON)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">AcceptCustodyTransfer</td>
                      <td className="p-3 text-neutral-600">Receiving org confirms physical receipt and assumes ownership</td>
                      <td className="p-3 text-emerald-700 font-bold">PutState(PRODUCT_ID, JSON)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">GetProductsByStatus</td>
                      <td className="p-3 text-neutral-600">Executes declarative CouchDB Mango query across assets</td>
                      <td className="p-3 text-neutral-800">GetQueryResult(queryString)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">GetHistory</td>
                      <td className="p-3 text-neutral-600">Reconstructs sequential audit trail of key modifications</td>
                      <td className="p-3 text-neutral-800">GetHistoryForKey(PRODUCT_ID)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 12: Chaincode Development */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 12</span>
              <span>•</span>
              <span>CHAINCODE DEVELOPMENT IN GO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              12. Chaincode Development in Go
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">12.1 The Cardinal Rule of Deterministic Execution</h3>
              <p>
                Because multiple independent peer nodes execute transaction proposals in parallel, the business logic <strong>must be strictly deterministic</strong>. Any non-determinism causes endorsing peers to compute conflicting read/write sets, failing the endorsement policy and rejecting the transaction.
              </p>
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-950 space-y-2">
                <div className="font-bold uppercase tracking-wider">Forbidden Non-Deterministic Patterns:</div>
                <p>
                  &bull; <strong>NEVER call <code>time.Now()</code>:</strong> Host system clocks differ by milliseconds across containers. Use <code>ctx.GetStub().GetTxTimestamp()</code>.<br />
                  &bull; <strong>NEVER call external HTTP APIs:</strong> External web services can time out or return changing payloads.<br />
                  &bull; <strong>NEVER use random number generators:</strong> <code>rand.Int()</code> yields different seeds per peer.<br />
                  &bull; <strong>NEVER iterate raw Go maps directly:</strong> Go randomizes map iteration order. Sort keys before marshaling.
                </p>
              </div>
            </div>
          </div>

          {/* Part 13: Endorsement Policies */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 13</span>
              <span>•</span>
              <span>ENDORSEMENT POLICIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              13. Endorsement Policies
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">13.1 Boolean Policy Syntax</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Policy Expression</th>
                      <th className="p-3">Logical Requirement</th>
                      <th className="p-3">Typical Enterprise Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">AND(&apos;Org1MSP.peer&apos;, &apos;Org2MSP.peer&apos;)</td>
                      <td className="p-3">Both Org1 AND Org2 peer signatures required</td>
                      <td className="p-3 text-neutral-600">Bilateral custody handoffs and settlement confirmation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">OR(&apos;Org1MSP.peer&apos;, &apos;Org2MSP.peer&apos;)</td>
                      <td className="p-3">Either Org1 OR Org2 peer signature required</td>
                      <td className="p-3 text-neutral-600">Standard status queries and unilateral telemetry updates</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">OutOf(2, &apos;Org1.peer&apos;, &apos;Org2.peer&apos;, &apos;Org3.peer&apos;)</td>
                      <td className="p-3">Any 2 of the 3 consortium peers required</td>
                      <td className="p-3 text-neutral-600">Consortium majority approvals and multi-party governance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 14: Transaction Execution Flow */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 14</span>
              <span>•</span>
              <span>TRANSACTION LIFECYCLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              14. Transaction Execution Flow &amp; MVCC Validation
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">14.1 The Complete 11-Stage Pipeline</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  1. Client Application &rarr; Creates signed proposal via Fabric Gateway<br />
                  2. Gateway Node &rarr; Inspects endorsement policy and routes proposal to target endorsing peers<br />
                  3. Endorsing Peers &rarr; Simulate chaincode proposal, read current world state, produce ReadSet &amp; WriteSet<br />
                  4. Proposal Signatures &rarr; Endorsers cryptographically sign simulation results &rarr; Return to Gateway<br />
                  5. Gateway Aggregation &rarr; Verifies policy satisfied and read/write sets are consistent<br />
                  6. Ordering Service &rarr; Receives assembled transaction &rarr; Orders deterministically into block<br />
                  7. Block Packaging &rarr; Cuts block when MaxMessageCount, AbsoluteMaxBytes, or BatchTimeout triggers<br />
                  8. Block Distribution &rarr; Orderer distributes block to all committing peers on channel via Gossip<br />
                  9. Peer Validation &rarr; Committing peers verify endorsement signatures &amp; execute MVCC Conflict Checks<br />
                  10. Ledger Commitment &rarr; Block appended to local blockchain; valid write sets committed to World State<br />
                  11. Event Delivery &rarr; Commit status notification emitted to client application!
                </code>
              </div>
            </div>
          </div>

          {/* Part 15: Ledger and World State */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 15</span>
              <span>•</span>
              <span>LEDGER STORAGE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              15. Ledger and World State
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">15.1 Blockchain vs. World State</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Ledger Component</th>
                      <th className="p-3">Data Structure</th>
                      <th className="p-3">Storage Engine</th>
                      <th className="p-3">Primary Query Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Blockchain (History)</td>
                      <td className="p-3 text-neutral-700">Cryptographically linked sequential blocks</td>
                      <td className="p-3 text-neutral-600">Append-only flat files on peer filesystem</td>
                      <td className="p-3 text-neutral-600">Complete immutable audit trail of every past modification</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">World State (Current)</td>
                      <td className="p-3 text-neutral-700">Latest key-value pairs representing current reality</td>
                      <td className="p-3 text-neutral-600">LevelDB (embedded) or CouchDB (external)</td>
                      <td className="p-3 text-neutral-600">Fast O(1) key lookups and rich JSON field-level queries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 16: CouchDB Integration */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 16</span>
              <span>•</span>
              <span>COUCHDB INTEGRATION &amp; MANGO INDEXES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              16. CouchDB Integration &amp; Declarative Indexes
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">16.1 LevelDB vs. CouchDB</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Database Feature</th>
                      <th className="p-3">Embedded LevelDB (Default)</th>
                      <th className="p-3">Apache CouchDB (Enterprise)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Data Model</td>
                      <td className="p-3 text-neutral-600">Byte arrays (Key-Value only)</td>
                      <td className="p-3 text-amber-900 font-bold">Structured JSON Documents</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Query Capabilities</td>
                      <td className="p-3 text-neutral-600">Key, Key Range, and Composite Keys only</td>
                      <td className="p-3 text-emerald-700 font-bold">Rich JSON queries (Mango selector syntax)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Secondary Indexes</td>
                      <td className="p-3 text-neutral-600">No secondary indexing</td>
                      <td className="p-3 text-emerald-700 font-bold">Declarative JSON B-tree indexes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Deployment Footprint</td>
                      <td className="p-3 text-neutral-600">Embedded in peer process</td>
                      <td className="p-3 text-neutral-600">Dedicated Docker container per peer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 17: Network Deployment */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 17</span>
              <span>•</span>
              <span>NETWORK TOPOLOGY &amp; DEPLOYMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              17. Fabric Network Deployment
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.1 Development vs. Production Infrastructure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Test Network (Educational)</div>
                  <p className="text-neutral-600">Local Docker network on single workstation, single-node Raft orderer, cryptogen or basic CA credentials, ephemeral test ledger volumes.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Production Enterprise Consortium</div>
                  <p className="text-neutral-600">Kubernetes multi-cloud deployment, 5-node distributed Raft or BFT ordering cluster, HSM-backed CA roots, TLS mutual authentication, persistent SAN volumes, centralized Prometheus/Grafana telemetry.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 18: Docker Infrastructure */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 18</span>
              <span>•</span>
              <span>DOCKER-BASED INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              18. Docker-Based Blockchain Infrastructure
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">18.1 Containerized Node Topology</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Docker Host Network: fabric_test]<br />
                  &nbsp;&nbsp;&bull; orderer.example.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:7050 (Raft Ordering Node)<br />
                  &nbsp;&nbsp;&bull; peer0.org1.example.com&nbsp;&nbsp;&nbsp;:7051 (Org1 Peer, CouchDB:5984)<br />
                  &nbsp;&nbsp;&bull; peer0.org2.example.com&nbsp;&nbsp;&nbsp;:9051 (Org2 Peer, CouchDB:7984)<br />
                  &nbsp;&nbsp;&bull; ca_org1 / ca_org2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:7054 / :8054 (Fabric CAs)<br />
                  &nbsp;&nbsp;&bull; chaincode container&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Isolated Docker bridge (CCAAS or Docker-in-Docker)
                </code>
              </div>
            </div>
          </div>

          {/* Part 19: Enterprise Supply Chain */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19</span>
              <span>•</span>
              <span>SUPPLY CHAIN TRACEABILITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19. Enterprise Supply Chain Applications
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">19.1 The Physical-to-Digital Trust Problem</h3>
              <p>
                A blockchain proves that a transaction was cryptographically authorized and endorsed by specific participants. <strong>It cannot inherently guarantee that physical reality matches the digital record.</strong>
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950">
                To close the Physical-to-Digital Trust Gap in production supply chains, enterprise blockchain must be coupled with: 1) Hardware-rooted cryptographic IoT sensor telemetry; 2) Tamper-evident serialization (cryptographic 2D DataMatrix / NFC); 3) Multi-party endorsements (e.g., both Manufacturer AND Independent QA Auditor must sign release); 4) Physical regulatory spot-audits.
              </div>
            </div>
          </div>

          {/* Part 20: Enterprise Security */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 20</span>
              <span>•</span>
              <span>ENTERPRISE BLOCKCHAIN SECURITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              20. Enterprise Blockchain Security
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">20.1 Twelve Core Enterprise Security Controls</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Security Control</th>
                      <th className="p-3">Target Threat Vector</th>
                      <th className="p-3">Defensive Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr><td className="p-3 font-bold">1. MSP Validation</td><td className="p-3">Impersonation of unauthorized entities</td><td className="p-3">Strict X.509 cryptographic certificate verification</td></tr>
                    <tr><td className="p-3 font-bold">2. Certificate Revocation</td><td className="p-3">Compromised employee or peer private keys</td><td className="p-3">Active CRL distribution and channel MSP revocation lists</td></tr>
                    <tr><td className="p-3 font-bold">3. Mutual TLS (mTLS)</td><td className="p-3">Man-in-the-Middle (MitM) &amp; eavesdropping</td><td className="p-3">Enforced TLS on all inter-peer and orderer gRPC links</td></tr>
                    <tr><td className="p-3 font-bold">4. Endorsement Policies</td><td className="p-3">Rogue peer committing fabricated state</td><td className="p-3">Multi-organization counter-signature requirement</td></tr>
                    <tr><td className="p-3 font-bold">5. ABAC Authorization</td><td className="p-3">Internal privilege escalation</td><td className="p-3">Fine-grained certificate attribute verification in chaincode</td></tr>
                    <tr><td className="p-3 font-bold">6. Private Data Collections</td><td className="p-3">Commercial espionage across consortium</td><td className="p-3">SideDB storage with on-chain SHA-256 hash proofs</td></tr>
                    <tr><td className="p-3 font-bold">7. Docker Hardening</td><td className="p-3">Container breakout &amp; host access</td><td className="p-3">Non-root container execution, read-only rootfilesystems</td></tr>
                    <tr><td className="p-3 font-bold">8. HSM Key Custody</td><td className="p-3">Private key exfiltration</td><td className="p-3">Hardware Security Modules (PKCS#11) for peer signing keys</td></tr>
                    <tr><td className="p-3 font-bold">9. Deterministic Logic</td><td className="p-3">Consensus stalling and endorsement failure</td><td className="p-3">TxTimestamp utilization; zero external API dependencies</td></tr>
                    <tr><td className="p-3 font-bold">10. CouchDB Sanitization</td><td className="p-3">CouchDB injection &amp; phantom reads</td><td className="p-3">Strict input validation and read-only query segregation</td></tr>
                    <tr><td className="p-3 font-bold">11. Channel Lifecycle</td><td className="p-3">Unauthorized chaincode policy downgrades</td><td className="p-3">Majority consortium approval required to modify definitions</td></tr>
                    <tr><td className="p-3 font-bold">12. Operational Telemetry</td><td className="p-3">Undetected network disruption or latency</td><td className="p-3">Prometheus metrics monitoring peer block commit latency</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
    
            
        {/* Hands-On Engineering Labs & Capstone */}
        <section id="lab" className="space-y-16">
          {/* Practical Lab Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>HANDS-ON ENTERPRISE LAB</span>
              <span>•</span>
              <span>HYPERLEDGER FABRIC &amp; GO CHAINCODE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Practical Lab: Build a Multi-Organization Supply Chain Application Using Hyperledger Fabric
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Design, develop, and deploy an enterprise-grade multi-organization supply chain tracking platform using Hyperledger Fabric 3.1.x, Go chaincode, CouchDB state databases, and Docker container infrastructure. You will implement deterministic business logic, two-step custody transfers, CouchDB declarative indexes, multi-party endorsement policies, and private commercial data collections.
            </p>

            {/* Tools Table */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-neutral-900 font-mono">1. Required Technology Stack</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Technology</th>
                      <th className="p-3">Version / Environment</th>
                      <th className="p-3">Purpose in Architecture</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Hyperledger Fabric</td>
                      <td className="p-3">v3.1.5 (or v2.5.x LTS)</td>
                      <td className="p-3">Permissioned enterprise distributed ledger engine and channel infrastructure.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Go (Golang)</td>
                      <td className="p-3">v1.20+</td>
                      <td className="p-3">Deterministic smart contract (chaincode) authoring using Fabric Contract API.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Fabric CA</td>
                      <td className="p-3">v1.5.x</td>
                      <td className="p-3">Identity registration, enrollment, and X.509 certificate issuance for Org1 &amp; Org2.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Docker &amp; Compose</td>
                      <td className="p-3">v24.x+</td>
                      <td className="p-3">Containerized execution of peers, orderers, CAs, and CouchDB instances.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Apache CouchDB</td>
                      <td className="p-3">v3.4.x</td>
                      <td className="p-3">Peer world-state database supporting rich JSON Mango queries and secondary indexes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Fabric Gateway SDK</td>
                      <td className="p-3">Node.js / Go</td>
                      <td className="p-3">High-level client connectivity, endorsement gathering, and commit monitoring.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Folder Structure */}
            <div className="space-y-3 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">2. Enterprise Project Folder Hierarchy</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`fabric-supply-chain/
├── chaincode/
│   └── supplychain/
│       ├── main.go
│       ├── supplychain.go
│       ├── go.mod
│       ├── collections_config.json
│       └── META-INF/
│           └── statedb/
│               └── couchdb/
│                   └── indexes/
│                       └── productStatus.json
├── backend/
│   ├── server.js
│   ├── routes/products.js
│   ├── services/fabricService.js
│   └── config/fabricConfig.js
└── frontend/
    └── src/
        ├── pages/
        │   ├── Dashboard.jsx
        │   ├── Products.jsx
        │   └── ShipmentTracking.jsx
        └── components/
            ├── ProductCard.jsx
            └── StatusTracker.jsx`}</pre>
              </div>
            </div>

            {/* Go Chaincode: supplychain.go */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-neutral-900 font-mono">3. Complete Go Chaincode: supplychain.go</h3>
                <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-xs font-mono">Go 1.20+ • Fabric Contract API</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed max-h-[600px] overflow-y-auto">
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`package main

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

type SupplyChainContract struct {
	contractapi.Contract
}

type Product struct {
	DocType         string \`json:"docType"\`
	ProductID       string \`json:"productId"\`
	ProductName     string \`json:"productName"\`
	BatchNumber     string \`json:"batchNumber"\`
	Manufacturer    string \`json:"manufacturer"\`
	Origin          string \`json:"origin"\`
	Location        string \`json:"location"\`
	Status          string \`json:"status"\`
	OwnerMSP        string \`json:"ownerMSP"\`
	PendingOwnerMSP string \`json:"pendingOwnerMSP,omitempty"\`
	CreatedBy       string \`json:"createdBy"\`
	CreatedAt       string \`json:"createdAt"\`
	UpdatedAt       string \`json:"updatedAt"\`
}

func productKey(id string) string {
	return "PRODUCT_" + id
}

func getCallerMSP(ctx contractapi.TransactionContextInterface) (string, error) {
	return ctx.GetClientIdentity().GetMSPID()
}

// Deterministic timestamp: read from transaction envelope, NEVER host clock!
func getTxTime(ctx contractapi.TransactionContextInterface) (string, error) {
	ts, err := ctx.GetStub().GetTxTimestamp()
	if err != nil {
		return "", err
	}
	return time.Unix(ts.Seconds, int64(ts.Nanos)).UTC().Format(time.RFC3339Nano), nil
}

func readProduct(ctx contractapi.TransactionContextInterface, productID string) (*Product, error) {
	data, err := ctx.GetStub().GetState(productKey(productID))
	if err != nil {
		return nil, err
	}
	if data == nil {
		return nil, fmt.Errorf("product %s does not exist", productID)
	}
	var product Product
	if err := json.Unmarshal(data, &product); err != nil {
		return nil, err
	}
	return &product, nil
}

func saveProduct(ctx contractapi.TransactionContextInterface, product *Product) error {
	data, err := json.Marshal(product)
	if err != nil {
		return err
	}
	return ctx.GetStub().PutState(productKey(product.ProductID), data)
}

func validTransition(current, next string) bool {
	switch current {
	case "CREATED":
		return next == "PACKED"
	case "PACKED":
		return next == "SHIPPED"
	case "SHIPPED":
		return next == "DELIVERED"
	}
	return false
}

func emitProductEvent(ctx contractapi.TransactionContextInterface, eventName string, product *Product) error {
	payload, err := json.Marshal(product)
	if err != nil {
		return err
	}
	return ctx.GetStub().SetEvent(eventName, payload)
}

// CreateProduct: Only Org1MSP (Manufacturer) can register products
func (s *SupplyChainContract) CreateProduct(
	ctx contractapi.TransactionContextInterface,
	productID string,
	productName string,
	batchNumber string,
	origin string,
) error {
	if productID == "" || productName == "" || batchNumber == "" || origin == "" {
		return fmt.Errorf("all product fields are required")
	}

	mspID, err := getCallerMSP(ctx)
	if err != nil {
		return err
	}
	if mspID != "Org1MSP" {
		return fmt.Errorf("only the manufacturer (Org1MSP) can create products")
	}

	existing, err := ctx.GetStub().GetState(productKey(productID))
	if err != nil {
		return err
	}
	if existing != nil {
		return fmt.Errorf("product %s already exists", productID)
	}

	userID, err := ctx.GetClientIdentity().GetID()
	if err != nil {
		return err
	}

	timestamp, err := getTxTime(ctx)
	if err != nil {
		return err
	}

	product := Product{
		DocType:         "product",
		ProductID:       productID,
		ProductName:     productName,
		BatchNumber:     batchNumber,
		Manufacturer:    mspID,
		Origin:          origin,
		Location:        origin,
		Status:          "CREATED",
		OwnerMSP:        mspID,
		PendingOwnerMSP: "",
		CreatedBy:       userID,
		CreatedAt:       timestamp,
		UpdatedAt:       timestamp,
	}

	if err := saveProduct(ctx, &product); err != nil {
		return err
	}

	return emitProductEvent(ctx, "ProductCreated", &product)
}

func (s *SupplyChainContract) ReadProduct(ctx contractapi.TransactionContextInterface, productID string) (*Product, error) {
	return readProduct(ctx, productID)
}

// UpdateStatus: Current owner updates location/status; Manufacturer can initiate RECALLED
func (s *SupplyChainContract) UpdateStatus(
	ctx contractapi.TransactionContextInterface,
	productID string,
	newStatus string,
	newLocation string,
) error {
	product, err := readProduct(ctx, productID)
	if err != nil {
		return err
	}

	mspID, err := getCallerMSP(ctx)
	if err != nil {
		return err
	}

	if newStatus == "RECALLED" {
		if mspID != "Org1MSP" {
			return fmt.Errorf("only the manufacturer can recall products")
		}
	} else {
		if mspID != product.OwnerMSP {
			return fmt.Errorf("only current holding organization can update status")
		}
		if !validTransition(product.Status, newStatus) {
			return fmt.Errorf("invalid product status transition from %s to %s", product.Status, newStatus)
		}
	}

	if newLocation == "" {
		return fmt.Errorf("location is required")
	}

	timestamp, err := getTxTime(ctx)
	if err != nil {
		return err
	}

	product.Status = newStatus
	product.Location = newLocation
	product.UpdatedAt = timestamp

	if err := saveProduct(ctx, product); err != nil {
		return err
	}

	return emitProductEvent(ctx, "ProductStatusChanged", product)
}

// TransferCustody: Step 1 of Two-Step Custody Handshake
func (s *SupplyChainContract) TransferCustody(
	ctx contractapi.TransactionContextInterface,
	productID string,
	newOwnerMSP string,
) error {
	product, err := readProduct(ctx, productID)
	if err != nil {
		return err
	}

	mspID, err := getCallerMSP(ctx)
	if err != nil {
		return err
	}
	if mspID != product.OwnerMSP {
		return fmt.Errorf("only current owner can transfer custody")
	}
	if product.Status != "SHIPPED" {
		return fmt.Errorf("product must be in SHIPPED status before custody transfer")
	}
	if product.PendingOwnerMSP != "" {
		return fmt.Errorf("custody transfer already pending to %s", product.PendingOwnerMSP)
	}
	if newOwnerMSP != "Org1MSP" && newOwnerMSP != "Org2MSP" {
		return fmt.Errorf("unsupported receiving organization MSP: %s", newOwnerMSP)
	}
	if newOwnerMSP == product.OwnerMSP {
		return fmt.Errorf("new owner MSP must be different from current owner")
	}

	product.PendingOwnerMSP = newOwnerMSP
	timestamp, err := getTxTime(ctx)
	if err != nil {
		return err
	}
	product.UpdatedAt = timestamp

	if err := saveProduct(ctx, product); err != nil {
		return err
	}

	return emitProductEvent(ctx, "CustodyTransferRequested", product)
}

// AcceptCustodyTransfer: Step 2 of Two-Step Custody Handshake
func (s *SupplyChainContract) AcceptCustodyTransfer(
	ctx contractapi.TransactionContextInterface,
	productID string,
) error {
	product, err := readProduct(ctx, productID)
	if err != nil {
		return err
	}

	mspID, err := getCallerMSP(ctx)
	if err != nil {
		return err
	}

	if product.PendingOwnerMSP == "" {
		return fmt.Errorf("no pending custody transfer for product %s", productID)
	}
	if mspID != product.PendingOwnerMSP {
		return fmt.Errorf("only the designated receiving organization (%s) can accept custody", product.PendingOwnerMSP)
	}

	product.OwnerMSP = mspID
	product.PendingOwnerMSP = ""
	timestamp, err := getTxTime(ctx)
	if err != nil {
		return err
	}
	product.UpdatedAt = timestamp

	if err := saveProduct(ctx, product); err != nil {
		return err
	}

	return emitProductEvent(ctx, "CustodyTransferred", product)
}

// GetAllProducts: Range query over world state
func (s *SupplyChainContract) GetAllProducts(ctx contractapi.TransactionContextInterface) ([]*Product, error) {
	iterator, err := ctx.GetStub().GetStateByRange("", "")
	if err != nil {
		return nil, err
	}
	defer iterator.Close()

	var products []*Product
	for iterator.HasNext() {
		entry, err := iterator.Next()
		if err != nil {
			return nil, err
		}
		var product Product
		if err := json.Unmarshal(entry.Value, &product); err != nil {
			return nil, err
		}
		if product.DocType == "product" {
			products = append(products, &product)
		}
	}
	return products, nil
}

// GetProductsByStatus: Rich CouchDB Mango Query
func (s *SupplyChainContract) GetProductsByStatus(
	ctx contractapi.TransactionContextInterface,
	status string,
) ([]*Product, error) {
	queryString := fmt.Sprintf(\`{"selector":{"docType":"product","status":%q}}\`, status)
	iterator, err := ctx.GetStub().GetQueryResult(queryString)
	if err != nil {
		return nil, err
	}
	defer iterator.Close()

	var products []*Product
	for iterator.HasNext() {
		entry, err := iterator.Next()
		if err != nil {
			return nil, err
		}
		var product Product
		if err := json.Unmarshal(entry.Value, &product); err != nil {
			return nil, err
		}
		products = append(products, &product)
	}
	return products, nil
}

type HistoryRecord struct {
	TxID      string          \`json:"txId"\`
	Timestamp string          \`json:"timestamp"\`
	IsDelete  bool            \`json:"isDelete"\`
	Value     json.RawMessage \`json:"value,omitempty"\`
}

// GetHistory: Retrieve complete immutable block history of an asset
func (s *SupplyChainContract) GetHistory(
	ctx contractapi.TransactionContextInterface,
	productID string,
) ([]HistoryRecord, error) {
	iterator, err := ctx.GetStub().GetHistoryForKey(productKey(productID))
	if err != nil {
		return nil, err
	}
	defer iterator.Close()

	var records []HistoryRecord
	for iterator.HasNext() {
		item, err := iterator.Next()
		if err != nil {
			return nil, err
		}
		timestamp := ""
		if item.Timestamp != nil {
			timestamp = time.Unix(item.Timestamp.Seconds, int64(item.Timestamp.Nanos)).UTC().Format(time.RFC3339Nano)
		}
		record := HistoryRecord{
			TxID:      item.TxId,
			Timestamp: timestamp,
			IsDelete:  item.IsDelete,
		}
		if !item.IsDelete {
			record.Value = json.RawMessage(item.Value)
		}
		records = append(records, record)
	}
	return records, nil
}`}</pre>
              </div>
            </div>

            {/* main.go & Declarative Index */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <span className="font-bold text-neutral-900 font-mono text-xs block">4. Entrypoint: main.go</span>
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                  <pre className="overflow-x-auto [scrollbar-width:thin]">{`package main

import (
	"log"
	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

func main() {
	chaincode, err := contractapi.NewChaincode(new(SupplyChainContract))
	if err != nil {
		log.Panicf("Error creating supplychain chaincode: %v", err)
	}
	if err := chaincode.Start(); err != nil {
		log.Panicf("Error starting chaincode: %v", err)
	}
}`}</pre>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-neutral-900 font-mono text-xs block">5. CouchDB Index: productStatus.json</span>
                <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto">
                  <pre className="overflow-x-auto [scrollbar-width:thin]">{`{
  "index": {
    "fields": [
      "docType",
      "status"
    ]
  },
  "ddoc": "productStatusIndex",
  "name": "productStatusIndex",
  "type": "json"
}`}</pre>
                </div>
              </div>
            </div>

            {/* Network Deployment & CLI Verification Guide */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">6. Step-by-Step Test-Network CLI Commands</h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step A: Start Fabric Test Network with CAs &amp; CouchDB</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>./network.sh up createChannel -ca -c supplychannel -s couchdb</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step B: Deploy Go Chaincode with AND Endorsement Policy</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>./network.sh deployCC -ccn supplychain -ccp ../chaincode/supplychain -ccl go -c supplychannel -ccv 1.0 -ccs 1 -ccep &quot;AND(&apos;Org1MSP.peer&apos;,&apos;Org2MSP.peer&apos;)&quot;</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step C: Load CLI Environment Variables</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>export PATH=$&#123;PWD&#125;/../bin:$PATH &amp;&amp; export FABRIC_CFG_PATH=$&#123;PWD&#125;/../config/ &amp;&amp; . ./scripts/envVar.sh &amp;&amp; setGlobals 1</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step D: Register Product P-1001 as Org1 (Manufacturer)</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile &quot;$&#123;PWD&#125;/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem&quot; -C supplychannel -n supplychain --peerAddresses localhost:7051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt&quot; --peerAddresses localhost:9051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt&quot; -c &apos;&#123;&quot;function&quot;:&quot;CreateProduct&quot;,&quot;Args&quot;:[&quot;P-1001&quot;,&quot;Laptop&quot;,&quot;BATCH-2026-01&quot;,&quot;Pune, India&quot;]&#125;&apos;</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step E: Propose Custody Transfer to Org2MSP</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile &quot;$&#123;PWD&#125;/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem&quot; -C supplychannel -n supplychain --peerAddresses localhost:7051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt&quot; --peerAddresses localhost:9051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt&quot; -c &apos;&#123;&quot;function&quot;:&quot;TransferCustody&quot;,&quot;Args&quot;:[&quot;P-1001&quot;,&quot;Org2MSP&quot;]&#125;&apos;</code>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step F: Accept Custody Transfer as Org2 (Distributor)</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-100 rounded-lg overflow-x-auto">
                    <code>setGlobals 2 &amp;&amp; peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile &quot;$&#123;PWD&#125;/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem&quot; -C supplychannel -n supplychain --peerAddresses localhost:7051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt&quot; --peerAddresses localhost:9051 --tlsRootCertFiles &quot;$&#123;PWD&#125;/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt&quot; -c &apos;&#123;&quot;function&quot;:&quot;AcceptCustodyTransfer&quot;,&quot;Args&quot;:[&quot;P-1001&quot;]&#125;&apos;</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Validation Matrix */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">7. Comprehensive Testing &amp; Security Validation Matrix (12 Scenarios)</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-2.5">#</th>
                      <th className="p-2.5">Test Scenario</th>
                      <th className="p-2.5">Acting Entity</th>
                      <th className="p-2.5">Invoked Function</th>
                      <th className="p-2.5">Expected Verification Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-2.5 font-bold">1</td>
                      <td className="p-2.5">Valid Registration</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Manufacturer)</td>
                      <td className="p-2.5 text-amber-800">CreateProduct(&quot;P-1001&quot;)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Success (Status: CREATED, Owner: Org1MSP)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">2</td>
                      <td className="p-2.5">Unauthorized Registration</td>
                      <td className="p-2.5 text-neutral-800">Org2MSP (Distributor)</td>
                      <td className="p-2.5 text-amber-800">CreateProduct(&quot;P-1002&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;only the manufacturer can create products&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">3</td>
                      <td className="p-2.5">Duplicate Registration</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Manufacturer)</td>
                      <td className="p-2.5 text-amber-800">CreateProduct(&quot;P-1001&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;product already exists&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">4</td>
                      <td className="p-2.5">Valid Lifecycle Transition</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Owner)</td>
                      <td className="p-2.5 text-amber-800">UpdateStatus(&quot;PACKED&quot;)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Success (Status updated to PACKED)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">5</td>
                      <td className="p-2.5">Illegal Lifecycle Jump</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Owner)</td>
                      <td className="p-2.5 text-amber-800">UpdateStatus(&quot;DELIVERED&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;invalid product status transition&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">6</td>
                      <td className="p-2.5">Unauthorized Status Update</td>
                      <td className="p-2.5 text-neutral-800">Org2MSP (Non-Owner)</td>
                      <td className="p-2.5 text-amber-800">UpdateStatus(&quot;SHIPPED&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;only current holding organization can update&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">7</td>
                      <td className="p-2.5">Valid Custody Handshake 1</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Owner)</td>
                      <td className="p-2.5 text-amber-800">TransferCustody(&quot;Org2MSP&quot;)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Success (PendingOwnerMSP set to Org2MSP)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">8</td>
                      <td className="p-2.5">Self-Acceptance Bypass</td>
                      <td className="p-2.5 text-neutral-800">Org1MSP (Proposer)</td>
                      <td className="p-2.5 text-amber-800">AcceptCustodyTransfer()</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;only designated receiving org can accept&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">9</td>
                      <td className="p-2.5">Valid Custody Handshake 2</td>
                      <td className="p-2.5 text-neutral-800">Org2MSP (Designee)</td>
                      <td className="p-2.5 text-amber-800">AcceptCustodyTransfer()</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Success (OwnerMSP transferred to Org2MSP)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">10</td>
                      <td className="p-2.5">Unauthorized Recall</td>
                      <td className="p-2.5 text-neutral-800">Org2MSP (Distributor)</td>
                      <td className="p-2.5 text-amber-800">UpdateStatus(&quot;RECALLED&quot;)</td>
                      <td className="p-2.5 text-red-600 font-bold">Rejected (&quot;only the manufacturer can recall products&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">11</td>
                      <td className="p-2.5">Missing Endorsement</td>
                      <td className="p-2.5 text-neutral-800">Org1 Peer Only</td>
                      <td className="p-2.5 text-amber-800">Single peer invoke</td>
                      <td className="p-2.5 text-red-600 font-bold">Commit Revert (&quot;ENDORSEMENT_POLICY_FAILURE&quot;)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">12</td>
                      <td className="p-2.5">CouchDB Rich Query</td>
                      <td className="p-2.5 text-neutral-800">Any Channel Peer</td>
                      <td className="p-2.5 text-amber-800">GetProductsByStatus(&quot;SHIPPED&quot;)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Returns JSON array filtered by indexed status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6 Advanced Assignments */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">8. Six Advanced Practical Engineering Assignments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 1: Multi-Organization Logistics Consortium</div>
                  <p className="text-neutral-600">Onboard Org3 (Logistics Provider) into the channel. Deploy an endorsement policy requiring OutOf(2, Org1, Org2, Org3) for transit status updates.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 2: Pharmaceutical DSCSA Verification</div>
                  <p className="text-neutral-600">Extend `Product` struct to store manufacturing lot numbers, expiration timestamps, cold-chain temperature thresholds, and automated batch recall flags.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 3: Private Commercial Collections</div>
                  <p className="text-neutral-600">Implement `collections_config.json` defining `collectionManufacturerDistributor`. Verify that Org3 cannot read wholesale pricing plaintext while confirming ledger hash.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 4: High-Availability Fabric Administration</div>
                  <p className="text-neutral-600">Configure a 3-node Raft ordering cluster. Simulate stopping the leader node and verify that followers elect a new leader without transaction loss.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 5: Real-Time Telemetry &amp; PostgreSQL Pipeline</div>
                  <p className="text-neutral-600">Build a Node.js Fabric Gateway listener subscribing to `ProductStatusChanged` events and syncing historical state changes into an external PostgreSQL dashboard.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 6: Comprehensive Security &amp; MVCC Audit</div>
                  <p className="text-neutral-600">Conduct penetration testing against concurrent updates to trigger MVCC conflicts. Audit chaincode against Go map iteration and unauthorized attribute escalation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 19.B: 5 Numerical Problems */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.B</span>
              <span>•</span>
              <span>MATHEMATICAL DERIVATIONS &amp; SIZING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.B Five Numerical Enterprise Systems &amp; Consensus Sizing Problems
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Step-by-step mathematical problem solving for enterprise blockchain architects. Expand each accordion to inspect variables, formulas, derivations, and solutions.
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
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    {NUMERICAL_PROBLEMS.map((prob) => (
                      <tr key={prob.id}>
                        <td className="p-3 font-bold text-neutral-900">{prob.title}</td>
                        <td className="p-3 text-neutral-600">{prob.variables[0]}</td>
                        <td className="p-3 font-bold text-amber-900">{prob.finalAnswer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
    
            
        {/* Assessment Section */}
        <section id="assessment" className="space-y-16">
          {/* Part 19.A: Senior Enterprise Blockchain Architect Interview Questions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.A</span>
              <span>•</span>
              <span>SENIOR ARCHITECT INTERVIEWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.A 25 Senior Enterprise Blockchain Architect Interview Scenarios
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Exhaustive technical scenarios and architectural questions asked in senior enterprise blockchain engineering interviews at IBM Blockchain, Oracle Enterprise DLT, Consensys, Kaleido, and global supply chain consortia.
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
              <span>KNOWLEDGE ASSESSMENT</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  Module 22 Examination: Hyperledger Fabric &amp; Enterprise Blockchain
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  20 questions assessing your mastery of permissioned DLT, MSP identity models, execute-order-validate consensus, Go chaincode, CouchDB rich queries, and Private Data Collections.
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
          {/* Official Resources Table */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold tracking-wide">
              <span>PRIMARY LITERATURE</span>
              <span>•</span>
              <span>OFFICIAL HYPERLEDGER DOCUMENTATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Recommended Official Learning Resources
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Essential documentation and specifications for continuing your mastery of Hyperledger Fabric, enterprise smart contracts, and consortium infrastructure:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "What is Hyperledger Fabric?",
                  desc: "Core concepts, architecture, and enterprise features overview.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/whatis.html"
                },
                {
                  title: "Network Architecture",
                  desc: "Comprehensive breakdown of peers, orderers, and consortium channels.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/network/network.html"
                },
                {
                  title: "Peers & Roles",
                  desc: "Detailed responsibilities of endorsing, committing, and anchor peers.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/peers/peers.html"
                },
                {
                  title: "Membership Service Provider",
                  desc: "Configuring MSPs, cryptographic trust roots, and organizational units.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/msp.html"
                },
                {
                  title: "Channels Architecture",
                  desc: "Creating, joining, and configuring isolated multi-org communication channels.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/channels.html"
                },
                {
                  title: "Private Data Collections",
                  desc: "Configuring collection policies, blockToLive, and bilateral sideDBs.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/private-data/private-data.html"
                },
                {
                  title: "Writing Chaincode in Go",
                  desc: "Official guide to fabric-contract-api-go, stub methods, and deterministic logic.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/chaincode4ade.html"
                },
                {
                  title: "Endorsement Policies",
                  desc: "Boolean syntax (AND, OR, OutOf) and channel lifecycle governance rules.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/endorsement-policies.html"
                },
                {
                  title: "Transaction Flow Architecture",
                  desc: "The complete 11-stage Execute-Order-Validate lifecycle.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/txflow.html"
                },
                {
                  title: "CouchDB Integration",
                  desc: "Configuring CouchDB, rich JSON queries, and declarative B-tree indexes.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/couchdb_as_state_database.html"
                },
                {
                  title: "Fabric Gateway Client",
                  desc: "Application connectivity via the embedded gateway service in peers.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/gateway.html"
                },
                {
                  title: "Deploying Chaincode",
                  desc: "Step-by-step v2.x/v3.x decentralized chaincode lifecycle.",
                  link: "https://hyperledger-fabric.readthedocs.io/en/latest/deploy_chaincode.html"
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

          {/* Module 22 Final Learning Outcomes */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-neutral-100 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold tracking-wide">
              <span>EXECUTIVE SUMMARY</span>
              <span>•</span>
              <span>MODULE 22 LEARNING OUTCOMES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Module 22 Mastery Outcomes &amp; Architectural Takeaways
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              By completing this module, you have mastered the complete architectural lifecycle of enterprise distributed ledger technology:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-neutral-300">
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain enterprise blockchain fundamentals and organizational trust models.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Compare public, private, and consortium permissioned blockchain networks.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Design multi-party permissioned blockchain architectures with defined governance.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Navigate the Linux Foundation Hyperledger ecosystem (Fabric, Besu, Indy, Aries, Cacti).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain Hyperledger Fabric modular architecture and component decoupling.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Differentiate endorsing, committing, anchor, and gateway peer responsibilities.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Configure MSPs and X.509 certificate-based cryptographic identity domains.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Execute Fabric CA registration and enrollment workflows for users and nodes.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Design isolated channels and granular Private Data Collections (PDC).</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Develop Go-based chaincode using the modern Fabric Contract API.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Configure multi-organization endorsement policies using boolean logic.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Trace Fabric&apos;s Execute-Order-Validate transaction lifecycle and MVCC validation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Differentiate append-only blockchain transaction history from World State database.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Integrate CouchDB for declarative JSON secondary indexing and rich queries.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Deploy Fabric blockchain networks using Docker and Docker Compose.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Build end-to-end enterprise supply chain traceability applications.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Apply enterprise blockchain security controls across identity, containers, and data.</span>
              </div>
            </div>

            {/* Final Project Prompt */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 mt-4">
              <span className="text-amber-400 font-bold font-mono text-xs uppercase tracking-wider block">
                Final Capstone Project &bull; PrepSpaces Enterprise Supply Chain Network
              </span>
              <p className="text-sm text-neutral-200 leading-relaxed font-sans">
                Build a production-grade multi-organization supply chain tracking platform combining Go chaincode (<code>supplychain.go</code>), CouchDB state databases, Fabric Gateway, and a React dashboard. Demonstrate a manufacturer registering a batch of laptops, updating status to PACKED and SHIPPED, initiating custody transfer, having the distributor confirm receipt on-chain, and querying the complete immutable transaction history via CouchDB rich queries!
              </p>
            </div>
          </div>

          {/* Module 22 Progress Checklist */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
                  <span>PROGRESS TRACKER</span>
                  <span>•</span>
                  <span>MODULE 22 MASTERY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
                  Hyperledger Fabric Competency Checklist
                </h3>
                <p className="text-sm text-neutral-600">
                  Track your mastery across all 28 foundational enterprise competencies. Automatically saved in local browser storage.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs font-mono text-neutral-500 block">Completion</span>
                  <span className="text-lg font-mono font-bold text-neutral-900">
                    {checklistProgress}% ({completedChecklistCount}/{CHECKLIST_ITEMS.length})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={resetChecklist}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-neutral-200 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${checklistProgress}%` }}
              />
            </div>

            {/* Checklist Items Grouped by Category */}
            <div className="space-y-6">
              {checklistCategories.map((category) => {
                const categoryItems = CHECKLIST_ITEMS.filter((item) => item.category === category);
                return (
                  <div key={category} className="space-y-3">
                    <h4 className="text-sm font-bold font-mono text-neutral-800 uppercase tracking-wider">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {categoryItems.map((item) => {
                        const isChecked = !!checklist[item.id];
                        return (
                          <label
                            key={item.id}
                            className={`p-4 rounded-xl border flex items-start gap-3.5 cursor-pointer transition-all ${
                              isChecked
                                ? "bg-amber-50/60 border-amber-300 text-neutral-900"
                                : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleChecklistItem(item.id)}
                              className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-amber-600 focus:ring-amber-500 shrink-0 cursor-pointer"
                            />
                            <span className="text-xs font-mono leading-relaxed select-none">
                              {item.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Module Bottom Navigation Footer */}
          <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/learning/blockchain/daos-governance"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-500 group-hover:-translate-x-1 transition-transform" />
              <span>Previous: Module 21 (DAOs &amp; Governance)</span>
            </Link>
            <Link
              to="/learning/blockchain/solana-rust"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Next: Module 23 (Solana Development with Rust)</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
    
          </div>
        )}
      </main>
    </div>
  );
}
