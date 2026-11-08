# -*- coding: utf-8 -*-
"""
Theory Sections Generator — Part 3 (Sections 17 to 23)
Module 24 — Final Blockchain Capstone Project
Covers:
17. Testnet Deployment Procedure & Verification Checklist
18. Application Monitoring & Incident Response Playbook
19. Technical Documentation & README Standards
20. Technical Presentation & 12-Slide Defense Roadmap
21. Blueprint B — NFT Marketplace Architecture & ERC-2981 Royalties
22. Blueprint C — Blockchain Supply Chain State Machine & QR Custody
23. Blueprint D — DeFi Lending Protocol, Health Factor Math & Oracles
"""

def generate_theory_part3():
    return r'''
      {/* SECTION 17: Testnet Deployment */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-neutral-500">Release Management</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          17. Testnet Deployment Procedure & Verification Checklist
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Release management follows a disciplined four-stage pipeline:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Stage 1: Local EVM</span>
              <p className="text-neutral-600 mt-1">Anvil / Hardhat local node for fast iteration and initial unit test execution.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Stage 2: Public Testnet</span>
              <p className="text-neutral-600 mt-1">Deploy to Ethereum Sepolia with real development wallets and live P2P latency.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Stage 3: Integration</span>
              <p className="text-neutral-600 mt-1">Connect React frontend, backend event indexer, PostgreSQL, and IPFS gateway.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">Stage 4: UAT</span>
              <p className="text-neutral-600 mt-1">Independent user testing evaluating wallet UX, network switching, and edge cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18: Application Monitoring */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-neutral-500">Production Operations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          18. Application Monitoring & Incident Response Playbook
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Operating a production DApp requires continuous telemetry across three decoupled layers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">1. On-Chain Monitoring</span>
              <p className="text-neutral-600 mt-1">Tracks transaction failure rates, gas spikes, abnormal ballot volumes, and administrative events.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">2. Backend Telemetry</span>
              <p className="text-neutral-600 mt-1">Monitors API latency, event indexer sync lag, PostgreSQL connection pools, and RPC rate limits.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#f6f4ee] border border-[#e7e3da]">
              <span className="font-bold text-neutral-900">3. Frontend Sentry Logs</span>
              <p className="text-neutral-600 mt-1">Captures unhandled JavaScript exceptions, wallet rejection rates, and RPC provider timeouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 19: Technical Documentation */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-neutral-500">Engineering Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          19. Technical Documentation & README Standards
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Every enterprise-grade blockchain submission must include a 19-section `README.md` covering prerequisites, local setup, test execution, contract architecture, security findings, gas reports, and deployed testnet addresses with verified Etherscan links.
          </p>
        </div>
      </section>

      {/* SECTION 20: Technical Presentation */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-neutral-500">Oral Defense</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          20. Technical Presentation & 12-Slide Defense Roadmap
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Prepare a structured 12-slide executive deck accompanied by a live on-chain demonstration:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs my-4">
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">1. Title & Team</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">2. Problem Statement</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">3. Proposed Solution</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">4. Requirements (FR/NFR)</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">5. Blockchain Selection</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">6. System Architecture</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">7. Contract Architecture</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">8. Full-Stack DApp</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">9. Security & Testing</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">10. Live Demo & Explorer</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">11. Limitations & Future</div>
            <div className="p-2 rounded bg-[#f6f4ee] border border-[#e7e3da]">12. Q&A Defense</div>
          </div>
        </div>
      </section>

      {/* SECTION 21: Blueprint B — NFT Marketplace */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-neutral-500">Alternative Blueprint B</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          21. Blueprint B — NFT Marketplace Architecture & ERC-2981 Royalties
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Blueprint B implements an open marketplace for ERC-721 and ERC-1155 tokens with on-chain escrow and automated ERC-2981 royalty enforcement:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto space-y-2">
            <div><span className="text-orange-400 font-bold">ERC-2981 Royalty Interface:</span></div>
            <div>function royaltyInfo(uint256 tokenId, uint256 salePrice) external view returns (address receiver, uint256 royaltyAmount);</div>
            <div className="pt-2 text-neutral-400">
              When a buyer calls `buyItem(nftAddress, tokenId)`, the marketplace queries `royaltyInfo()`, deducts the calculated fee, and transfers it directly to the creator before releasing net proceeds to the seller and transferring the NFT from escrow to the buyer.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 22: Blueprint C — Blockchain Supply Chain */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-neutral-500">Alternative Blueprint C</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          22. Blueprint C — Blockchain Supply Chain State Machine & QR Custody
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Blueprint C tracks physical product batches across six distinct lifecycle stages:
          </p>
          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono">
            <code>enum ProductStatus &#123; Created, Manufactured, InTransit, Stored, Delivered, Recalled &#125;</code>
          </div>
          <p className="text-xs text-neutral-600">
            Each state transition is strictly restricted by role (e.g. only addresses possessing `DISTRIBUTOR_ROLE` can transition from `Manufactured` to `InTransit`). Inspection certificates and quality reports are pinned to IPFS, and physical packages carry QR codes encoding the product batch ID.
          </p>
        </div>
      </section>

      {/* SECTION 23: Blueprint D — DeFi Lending Platform */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-neutral-500">Alternative Blueprint D</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          23. Blueprint D — DeFi Lending Protocol, Health Factor Math & Oracles
        </h2>

        <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Blueprint D is the most mathematically demanding capstone, implementing collateralized borrowing, dynamic interest rates, and liquidation mechanics:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200">
              <span className="text-orange-400 font-bold">Loan-to-Value (LTV) Formula:</span>
              <div className="mt-2 text-sm text-white">LTV = (Borrowed Debt / Collateral Value) &times; 100</div>
              <p className="text-[11px] text-neutral-400 mt-2">Maximum initial borrowing capacity (typically 75%).</p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200">
              <span className="text-emerald-400 font-bold">Health Factor (HF) Formula:</span>
              <div className="mt-2 text-sm text-white">HF = (Collateral Value &times; Liquidation Threshold) / Borrowed Debt</div>
              <p className="text-[11px] text-neutral-400 mt-2">Position is eligible for liquidation when HF &lt; 1.0.</p>
            </div>
          </div>
          <p className="text-xs text-neutral-600">
            <strong>Chainlink Oracle Integration:</strong> The risk engine evaluates collateral valuation in real time using Chainlink AggregatorV3Interface feeds with heartbeat and round completeness checks.
          </p>
        </div>
      </section>
'''
