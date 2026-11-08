# projectx/generator_mod14/gen_tracker.py
"""
Generates Module 14 Summary, 26-Objective Completion Tracker,
and Official Learning Resources.
Persists progress in localStorage under 'prepspaces_blockchain_m14_progress'.
"""

def get_tracker_code():
    return '''
<section id="tracker-section" className="space-y-12">
  {/* MODULE SUMMARY */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Summary</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Module Summary &amp; Key Architectural Principles</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">DApp Architecture</span>
        Coordinates React UI, EIP-1193 wallets, Solidity smart contracts, and off-chain indexing services into a resilient, cohesive system.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Backend Trust Principle</span>
        Backends provide search and caching, but must NEVER be treated as the ultimate authority for on-chain state or settlements.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">TypeScript &amp; BigInt</span>
        Prevents fatal precision loss by handling all 256-bit Ethereum Wei and token amounts via native JavaScript <code className="font-mono text-xs">BigInt</code>.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Viem Integration</span>
        Lightweight, type-safe RPC client using <code className="font-mono text-xs">readContract</code> for zero-gas queries and <code className="font-mono text-xs">writeContract</code> for transactions.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">SIWE (EIP-4361)</span>
        Replaces passwords with cryptographic challenge-response wallet signatures, single-use nonces, and HttpOnly session cookies.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">The Graph &amp; Indexing</span>
        Decouples heavy historical log queries from fragile RPC nodes into normalized, highly performant GraphQL Subgraph APIs.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Hybrid Storage Matrix</span>
        Saves gas by storing critical state on-chain, immutable rich media on IPFS/Arweave, and fast relational search in PostgreSQL.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Tx Hash != Success</span>
        Always wait for <code className="font-mono text-xs">waitForTransactionReceipt</code> (<code className="font-mono text-xs">status === 1</code>) before confirming operations in the user interface.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Error Resilience</span>
        Defensively catches code 4001 user rejections, 4901 chain switches, and custom Solidity reverts without crashing the application.
      </div>
    </div>
  </div>

  {/* 26-OBJECTIVE COMPLETION TRACKER */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">Module 14 Mastery Checklist (26 Core Objectives)</h3>
        <p className="text-xs sm:text-sm text-[#52525b] mt-1">
          Track your progress through every architectural concept. Check off completed items to persist progress locally.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <span className="text-xs text-[#52525b] block font-medium">Completion</span>
          <span className="text-lg font-bold text-[#ea580c]">{completedCount} / {CHECKLIST_ITEMS.length} ({progressPercent}%)</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={selectAllChecklist}
            className="px-2.5 py-1 text-xs font-medium text-[#27272a] bg-[#f6f4ee] hover:bg-[#e7e3da] rounded-lg border border-[#e7e3da] transition-colors"
          >
            Check All
          </button>
          <button
            onClick={resetChecklist}
            className="px-2.5 py-1 text-xs font-medium text-[#27272a] bg-[#f6f4ee] hover:bg-[#e7e3da] rounded-lg border border-[#e7e3da] transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>

    {/* Progress Bar */}
    <div className="w-full bg-[#f6f4ee] rounded-full h-3 mb-6 overflow-hidden border border-[#e7e3da]">
      <div
        className="bg-[#ea580c] h-full transition-all duration-300 rounded-full"
        style={{ width: `${progressPercent}%` }}
      />
    </div>

    {/* Checklist Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {CHECKLIST_ITEMS.map((item, idx) => {
        const isChecked = checklistState[idx] || false;
        return (
          <label
            key={idx}
            className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
              isChecked
                ? "bg-emerald-50/60 border-emerald-300 text-emerald-950"
                : "bg-[#fbfaf8] border-[#e7e3da] text-[#27272a] hover:bg-[#f6f4ee]"
            }`}
          >
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => toggleChecklistItem(idx)}
              className="mt-1 rounded border-[#e7e3da] text-[#ea580c] focus:ring-[#ea580c] h-4 w-4"
            />
            <span className="text-xs sm:text-sm font-medium leading-relaxed">
              {item}
            </span>
          </label>
        );
      })}
    </div>
  </div>

  {/* OFFICIAL DOCUMENTATION & LEARNING RESOURCES */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <h3 className="text-lg sm:text-xl font-bold text-[#18181b] mb-4">Official Documentation &amp; Learning Resources</h3>
    <p className="text-xs sm:text-sm text-[#52525b] mb-6">
      Deepen your mastery with official specifications, frameworks, and developer guides:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <a
        href="https://viem.sh"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Viem Documentation
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Lightweight, type-safe TypeScript interfaces for Ethereum.</p>
      </a>

      <a
        href="https://wagmi.sh"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Wagmi React Hooks
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">React hooks for wallet connection, contract calls, and ENS.</p>
      </a>

      <a
        href="https://eips.ethereum.org/EIPS/eip-4361"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          EIP-4361: SIWE Specification
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Official Sign-In with Ethereum challenge-response standard.</p>
      </a>

      <a
        href="https://thegraph.com/docs/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          The Graph Protocol Docs
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Decentralized indexing protocol, subgraphs, and GraphQL query APIs.</p>
      </a>

      <a
        href="https://docs.soliditylang.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Solidity Documentation
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Official language reference for Ethereum smart contracts.</p>
      </a>

      <a
        href="https://ethereum.org/en/developers/docs/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Ethereum Developer Portal
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Comprehensive guides to EVM, JSON-RPC, gas economics, and DApps.</p>
      </a>
    </div>
  </div>

</section>
'''
