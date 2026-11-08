# projectx/generator_mod15/gen_interactive.py
"""
Interactive Simulators for Module 15: IPFS & Decentralized Storage
- Simulator 1: CIDv1 Multiformats Inspector & Cryptographic Avalanche Playground
- Simulator 2: IPFS Node, Bitswap & DHT Provider Routing Visualizer
- Simulator 3: ERC-721 NFT Metadata Generator & IPFS Pinner
- Simulator 4: Client-Side AES-GCM 256-bit Encryption Playground
"""

def generate_interactive():
    return r'''
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
'''
