# projectx/generator_mod13/gen_tracker.py
"""
Generates Part 20: Module Summary, 26-Objective Completion Tracker, and Official Resources.
Persists completed objectives in localStorage under 'prepspaces_blockchain_m13_progress'.
"""

def get_tracker_code():
    return '''
<section id="part-20" className="space-y-12">
  {/* PART 20: MODULE SUMMARY, 26-OBJECTIVE TRACKER & OFFICIAL RESOURCES */}

  {/* PART 20: KEY CONCEPTS SUMMARY */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Part 20</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Module Summary &amp; Key Architectural Takeaways</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm">
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">JSON-RPC</span>
        The universal remote procedure call protocol connecting dApp frontends to Ethereum client execution nodes.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Web3.js (Sunset)</span>
        The historic 2014-era Ethereum library; officially sunset on March 4, 2025. Maintained solely for legacy migration.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Ethers.js v6</span>
        Compact, battle-tested library featuring native BigInt, modular classes, and clean Provider/Signer separation.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Viem (Modern Standard)</span>
        Ultra-fast, modular TypeScript interface providing compile-time ABI type inference with <code className="font-mono text-xs">as const</code>.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Provider vs Signer</span>
        Providers read blockchain state via free <code className="font-mono text-xs">eth_call</code>; Signers authorize state writes via cryptographic wallets.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">ABI &amp; Function Selector</span>
        4-byte keccak256 hash prefix + 32-byte padded arguments serialize JavaScript calls into raw EVM calldata.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Tx Hash != Success</span>
        Broadcasted hashes only prove mempool acceptance. Always verify the Transaction Receipt (<code className="font-mono text-xs">status === 1</code>).
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">Event Logs &amp; Topics</span>
        Events store logs off smart contract state. Indexed parameters become searchable topics; non-indexed remain in data.
      </div>
      <div className="p-4 bg-[#f6f4ee] rounded-xl border border-[#e7e3da]">
        <span className="font-bold text-[#ea580c] block text-sm mb-1">EIP-1193 &amp; Error 4001</span>
        Universal wallet standard (<code className="font-mono text-xs">window.ethereum</code>); gracefully handle 4001 user rejections without crashes.
      </div>
    </div>
  </div>

  {/* 26-OBJECTIVE COMPLETION TRACKER */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">Module 13 Mastery Checklist (26 Core Objectives)</h3>
        <p className="text-xs sm:text-sm text-[#52525b] mt-1">
          Track your personal progress through every concept. Check off completed items to persist progress locally.
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
      Continue your studies with official references, documentation, and protocol specifications:
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
        <p className="text-xs text-[#52525b] mt-1">Official guide to TypeScript clients, actions, and ABI inference.</p>
      </a>

      <a
        href="https://docs.ethers.org/v6/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Ethers.js v6 Documentation
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Comprehensive reference for Providers, Signers, Contracts, and Interfaces.</p>
      </a>

      <a
        href="https://ethereum.org/developers/docs/apis/json-rpc/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Ethereum JSON-RPC Specification
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Official reference for all Ethereum execution client RPC methods.</p>
      </a>

      <a
        href="https://eips.ethereum.org/EIPS/eip-1193"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          EIP-1193 Provider Standard
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">The universal Ethereum provider JavaScript interface specification.</p>
      </a>

      <a
        href="https://docs.metamask.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          MetaMask Developer Docs
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Injected provider guides, wallet connection, and signing best practices.</p>
      </a>

      <a
        href="https://docs.alchemy.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf8] hover:border-[#ea580c] transition-all group"
      >
        <span className="font-bold text-sm text-[#18181b] group-hover:text-[#ea580c] flex items-center justify-between">
          Alchemy &amp; Infura Docs
          <span className="text-xs">&#8599;</span>
        </span>
        <p className="text-xs text-[#52525b] mt-1">Enterprise node infrastructure, enhanced APIs, and rate limit optimization.</p>
      </a>
    </div>
  </div>

</section>
'''
