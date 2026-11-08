# projectx/generator_mod15/gen_theory.py
"""
Theory generator for Module 15: IPFS & Decentralized Storage
Covers Parts 1 to 18 in complete university-level detail with zero omissions.
"""

def generate_theory():
    return r'''
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
'''
