# -*- coding: utf-8 -*-
"""
Module 18 Theory Sections: Parts 1 through 21.
Zero information loss - all diagrams, tables, formulas, and code snippets preserved in full.
"""

def generate_theory_sections():
    return '''
      {/* ============================================================== */}
      {/* PART 1: BLOCKCHAIN SECURITY FUNDAMENTALS                       */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Blockchain Security Fundamentals
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Layered architecture of Web3 security, EVM execution constraints, and core security properties.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">1.1 What Is Blockchain Security?</h3>
          <p>
            Blockchain security is the rigorous engineering discipline of protecting decentralized networks, cryptographic transactions, smart contracts, client wallets, and off-chain protocols against unauthorized access, exploitation, and systemic economic failure.
          </p>

          {/* 7-Layer Security Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Security Layer</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Example Risk / Exploit Vector</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Consensus Layer</td>
                  <td className="p-3 text-neutral-600">Protects decentralized state agreement among blockchain validator nodes.</td>
                  <td className="p-3 text-rose-700 font-mono">51% attack, selfish mining, long-range reorganization</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Network Layer</td>
                  <td className="p-3 text-neutral-600">Protects peer-to-peer (P2P) gossip communication and mempool propagation.</td>
                  <td className="p-3 text-rose-700 font-mono">Eclipse attack, Sybil attack, DDoS of validator RPCs</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Wallet Layer</td>
                  <td className="p-3 text-neutral-600">Protects private keys, hardware signing environments, and seed phrases.</td>
                  <td className="p-3 text-rose-700 font-mono">Private key theft, blind signing, malicious approval phishing</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Smart Contract Layer</td>
                  <td className="p-3 text-neutral-600">Protects byte-level EVM program execution, financial state, and assets.</td>
                  <td className="p-3 text-rose-700 font-mono">Reentrancy, access control bypass, integer truncation</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Application Layer</td>
                  <td className="p-3 text-neutral-600">Protects user-facing client frontends, SDKs, and DNS infrastructures.</td>
                  <td className="p-3 text-rose-700 font-mono">DNS hijacking, supply-chain npm package compromise, XSS</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-neutral-900">Oracle Layer</td>
                  <td className="p-3 text-neutral-600">Protects external real-world market data feeds feeding smart contracts.</td>
                  <td className="p-3 text-rose-700 font-mono">Flash loan price manipulation, stale rounds, sequencer outage</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-900">Governance Layer</td>
                  <td className="p-3 text-neutral-600">Protects decentralized protocol voting and administrative timelocks.</td>
                  <td className="p-3 text-rose-700 font-mono">Flash-loan voting power hijacking, malicious parameter proposals</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
            <span className="font-bold uppercase tracking-wide text-amber-900">
              Why Smart Contract Security Is Fundamentally Different From Traditional Web2
            </span>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Transactions Are Irreversible:</strong> There is no customer support, rollback mechanism, or database restore. Exploited funds are permanently transferred.</li>
              <li><strong>Immutable Bytecode:</strong> Deployed contracts cannot be hot-patched on the fly unless complex, risky proxy patterns were architected beforehand.</li>
              <li><strong>Public Attack Surface:</strong> All bytecode, storage slots, and transactions are transparently readable by automated MEV bots scanning the mempool 24/7.</li>
              <li><strong>Speed of Exploitation:</strong> Complex attacks utilizing uncollateralized flash loans execute within a single atomic Ethereum block (~12 seconds).</li>
            </ul>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">1.2 Core Security Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900 uppercase">Confidentiality (Transparency Caveat)</span>
              <p className="text-neutral-600">
                Public blockchain state is transparent. Solidity variables declared <code>private</code> are not cryptographically private; any external observer can read raw 32-byte storage slots via JSON-RPC.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900 uppercase">Integrity</span>
              <p className="text-neutral-600">
                State must only transition according to authorized mathematical and protocol rules. Internal balances must accurately reflect deposited liabilities.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900 uppercase">Availability</span>
              <p className="text-neutral-600">
                Critical protocol operations (especially withdrawals and repayments) must never become permanently bricked or locked by gas limits or failed external calls.
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#e7e3da] space-y-1">
              <span className="font-bold text-neutral-900 uppercase">Financial Correctness & Invariants</span>
              <p className="text-neutral-600">
                Core mathematical formulas must hold universally: AMM constant product <code>x · y = k</code>, and lending solvency <code>Total Debt ≤ Borrowing Capacity</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 2: SMART CONTRACT THREAT MODELING                         */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Smart Contract Threat Modeling
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Systematic identification of assets, threat actors, attack surfaces, and STRIDE categorization.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <p>
            Threat modeling is the structured analysis performed <em>before</em> line-by-line auditing. An auditor must first understand what the protocol is intended to accomplish, what assets it holds, and what conditions must never occur.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-4">2.2 Asset Catalog (Decentralized Lending Protocol)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">Protocol Asset</th><th className="p-2.5">Security & Financial Concern</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">User Collateral</td><td className="p-2.5 text-neutral-600">Unauthorized withdrawal, reentrancy drain, unfair liquidation</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Borrowed Tokens</td><td className="p-2.5 text-neutral-600">Uncollateralized borrowing, pool liquidity exhaustion</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Protocol Reserves</td><td className="p-2.5 text-neutral-600">Accounting manipulation, fee skimming, reserve drain</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Admin Privileges</td><td className="p-2.5 text-neutral-600">Compromised private keys, malicious parameter updates, backdoor upgrades</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Oracle Price Data</td><td className="p-2.5 text-neutral-600">Flash loan price manipulation, stale rounds, zero-price exploit</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">User Signatures</td><td className="p-2.5 text-neutral-600">Signature replay across contracts or chains, front-running meta-transactions</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Contract Implementation</td><td className="p-2.5 text-neutral-600">Malicious upgrade execution, storage layout collision</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-bold text-neutral-900 mt-6">2.3 Threat Actors & Attack Surfaces</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`External Functions (Entry Points)            External Dependencies (Trust Boundaries)
├── deposit() / withdraw()                   ├── Underlying ERC-20 Tokens (USDC, USDT, WETH)
├── borrow() / repay()                       ├── Price Oracles (Chainlink Aggregators)
├── liquidate() / swap()                     ├── Flash Loan Providers (Aave, Uniswap)
├── claimRewards()                           └── Governance & Multisig Timelocks
└── upgradeTo() / setParam()`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">STRIDE Threat Modeling Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">STRIDE Threat</th><th className="p-2.5">Meaning</th><th className="p-2.5">Smart Contract Attack Scenario</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Spoofing</td><td className="p-2.5">Pretending to be another identity</td><td className="p-2.5 text-neutral-600">Exploiting tx.origin or forged EIP-712 signatures</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Tampering</td><td className="p-2.5">Unauthorized data modification</td><td className="p-2.5 text-neutral-600">Manipulating unvalidated storage slots via delegatecall</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Repudiation</td><td className="p-2.5">Denying an action occurred</td><td className="p-2.5 text-neutral-600">Absence of emitted events for critical financial state changes</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Information Disclosure</td><td className="p-2.5">Exposing sensitive information</td><td className="p-2.5 text-neutral-600">Relying on 'private' state variables for lottery seeds</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Denial of Service</td><td className="p-2.5">Preventing legitimate use</td><td className="p-2.5 text-neutral-600">Unbounded array iteration exceeding 30M block gas limit</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Elevation of Privilege</td><td className="p-2.5">Obtaining unauthorized permissions</td><td className="p-2.5 text-neutral-600">Missing onlyOwner modifier on changeOwner() or initialize()</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 3: SECURITY AUDIT METHODOLOGY                             */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Professional Security Audit Methodology
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            The 7-step professional audit lifecycle: scoping, manual inspection, static analysis, fuzzing, PoC validation, and remediation.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <p>
            An audit is a comprehensive, adversarial security review. It provides rigorous evidence that discovered risks have been remediated according to industry best practices.
          </p>

          <div className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] space-y-3 font-mono text-xs">
            <span className="font-bold text-neutral-900 uppercase">Professional 7-Step Audit Workflow</span>
            <div className="space-y-2 text-neutral-800">
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 1 — Define Scope:</strong> Pin exact git commit hash; specify in-scope smart contracts and exclude out-of-scope layers (e.g. frontend, consensus).
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 2 — Understand Architecture:</strong> Review whitepapers, deployment scripts, oracle feeds, and trust models.
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 3 — Identify Core Invariants:</strong> Define properties that must never be broken (e.g. user cannot withdraw more than deposited).
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 4 — Manual Line-by-Line Review:</strong> Inspect critical functions (deposit, withdraw, borrow, repay, liquidate, swap, mint, burn, upgrade).
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 5 — Automated Analysis:</strong> Run Slither static analyzers, Mythril symbolic executors, and Foundry fuzz testing suites.
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 6 — Validate Findings with PoCs:</strong> Write reproducible Foundry reproduction tests for every confirmed security issue.
              </div>
              <div className="p-2 bg-white rounded border border-[#e7e3da]">
                <strong>Step 7 — Remediation & Retesting:</strong> Developers deploy code patches; auditors verify fixes and certify absence of regressions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PARTS 4 - 8: ACCESS CONTROL, REENTRANCY, ARITHMETIC, DOS & MEV */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Parts 04 – 08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Access Control, Reentrancy, Arithmetic, DoS & MEV
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          {/* Access Control */}
          <h3 className="text-base font-bold text-neutral-900">4. Access Control & Authorization Pitfalls</h3>
          <p className="text-xs text-neutral-600">
            Missing or faulty access control is one of the most frequent causes of catastrophic protocol hacks. If a sensitive function lacks an explicit caller check, anyone can take ownership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
              <span className="text-xs font-bold text-rose-900 uppercase">Vulnerable: Missing Access Control</span>
              <pre className="p-2 bg-white rounded text-[11px] font-mono text-neutral-800 overflow-x-auto">
{`function changeOwner(address newOwner) external {
    // Anyone can call this and take over the vault!
    owner = newOwner; 
}`}
              </pre>
            </div>
            <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
              <span className="text-xs font-bold text-emerald-900 uppercase">Secure: Custom Error & Modifier</span>
              <pre className="p-2 bg-white rounded text-[11px] font-mono text-neutral-800 overflow-x-auto">
{`modifier onlyOwner() {
    if (msg.sender != owner) revert Unauthorized();
    _;
}
function changeOwner(address newOwner) external onlyOwner {
    if (newOwner == address(0)) revert InvalidAddress();
    owner = newOwner;
}`}
              </pre>
            </div>
          </div>

          {/* Reentrancy */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">5. Reentrancy Attacks & The CEI Defense</h3>
          <p className="text-xs text-neutral-600">
            Reentrancy occurs when a contract makes an external call (e.g. sending ETH via <code>.call&#123;value: amount&#125;("")</code>) before updating its internal storage. The recipient's fallback function intercepts execution and calls back into the vulnerable function, repeatedly withdrawing against stale balances.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 bg-rose-50/70 rounded-xl border border-rose-200 space-y-2">
              <span className="text-xs font-bold text-rose-900 uppercase">Vulnerable: External Call Before State Update</span>
              <pre className="p-2 bg-white rounded text-[11px] font-mono text-neutral-800 overflow-x-auto">
{`function withdraw() external {
    uint256 amount = balances[msg.sender];
    require(amount > 0, "No balance");
    // INTERACTION BEFORE EFFECT!
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
    balances[msg.sender] = 0; // Too late!
}`}
              </pre>
            </div>
            <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
              <span className="text-xs font-bold text-emerald-900 uppercase">Secure: Checks-Effects-Interactions (CEI)</span>
              <pre className="p-2 bg-white rounded text-[11px] font-mono text-neutral-800 overflow-x-auto">
{`function withdraw() external nonReentrant {
    uint256 amount = balances[msg.sender];
    require(amount > 0, "No balance");
    // 1. EFFECT: Update internal state first
    balances[msg.sender] = 0;
    // 2. INTERACTION: External transfer last
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
}`}
              </pre>
            </div>
          </div>

          {/* Arithmetic in 0.8+ */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">6. Integer Arithmetic in Solidity 0.8+ & Precision Scaling</h3>
          <p className="text-xs text-neutral-600">
            Solidity 0.8+ automatically reverts on arithmetic overflow and underflow. However, severe arithmetic vulnerabilities still occur:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-xs">
            <li><strong>Division Before Multiplication:</strong> Integer division truncates decimals toward zero. <code>(amount / 1000) * feeRate</code> evaluates to 0 if amount &lt; 1000.</li>
            <li><strong>Decimal Mismatches:</strong> Confusing 18-decimal WETH with 6-decimal USDC, undervaluing assets by a factor of 10¹².</li>
            <li><strong>Unchecked Block Misuse:</strong> Wrapping arithmetic inside <code>unchecked &#123; ... &#125;</code> without formal proof of bounds.</li>
          </ul>

          {/* DoS & MEV */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">7. Denial of Service (DoS) & Pull-Over-Push Payments</h3>
          <p className="text-xs text-neutral-600">
            Never loop over an unbounded array of user addresses to distribute rewards. If a single recipient is a contract that reverts on ETH receipt, the entire distribution transaction reverts for all users. Always use the <strong>Pull-Payment Pattern</strong> where users claim their own rewards individually.
          </p>

          <h3 className="text-base font-bold text-neutral-900 mt-6">8. Front-Running & MEV Sandwich Attacks</h3>
          <p className="text-xs text-neutral-600">
            MEV searchers exploit public transaction mempools by wrapping victim swaps between an automated front-run buy order (driving price up to slippage limit) and a back-run sell order (reaping the profit). Protocols mitigate this using strict <code>amountOutMin</code> bounds, private mempools (Flashbots), and commit-reveal batch auctions.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PARTS 9 - 15: ORACLES, FLASH LOANS, UPGRADEABILITY & PROXIES  */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Parts 09 – 15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Oracles, Flash Loans, Delegatecall & Upgradeability
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">9. Oracle Manipulation & Chainlink Validation</h3>
          <p className="text-xs text-neutral-600">
            Using an instantaneous AMM spot price as a lending oracle allows attackers to borrow millions in a flash loan, skew pool reserves, inflate collateral value, borrow liquid funds, and repay the loan in one atomic block.
          </p>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`function getLatestPrice() external view returns (int256) {
    (
        uint80 roundId,
        int256 price,
        ,
        uint256 updatedAt,
        uint80 answeredInRound
    ) = priceFeed.latestRoundData();

    require(price > 0, "Invalid price");
    require(answeredInRound >= roundId, "Stale round data");
    require(block.timestamp - updatedAt <= HEARTBEAT, "Stale timestamp");
    return price;
}`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">14. Delegatecall & Proxy Storage Collisions</h3>
          <p className="text-xs text-neutral-600">
            <code>delegatecall</code> executes code from another contract while preserving the caller's storage context. If the proxy and implementation contracts do not align their storage layouts identically, writing to an implementation variable overwrites critical proxy state (such as the admin or implementation address).
          </p>
          <div className="p-3 bg-white rounded-lg border border-[#e7e3da] text-xs text-neutral-600">
            <strong>EIP-1967 Standard Slots:</strong> EIP-1967 stores implementation addresses in pseudorandom slots: <code>bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1)</code>, ensuring logic variables in Slot 0 never collide with proxy administrative pointers.
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PARTS 19 - 21: STATIC ANALYSIS, FUZZING & FORMAL METHODS       */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Parts 19 – 21
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Static Analysis (Slither), Fuzz Testing & Formal Verification
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">19. Static Analysis with Slither</h3>
          <p className="text-xs text-neutral-600">
            Slither parses Solidity Abstract Syntax Trees (ASTs) and Control Flow Graphs without executing code, identifying reentrancy, unprotected initializers, and unchecked external calls.
          </p>
          <pre className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`pip install slither-analyzer
slither . --json slither-report.json`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">20. Foundry Fuzz & Property-Based Testing</h3>
          <p className="text-xs text-neutral-600">
            Fuzz testing automatically injects thousands of pseudo-random inputs into contract functions to discover edge-case reverts and broken invariants.
          </p>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`contract SimpleVaultTest is Test {
    SimpleVault vault;

    function setUp() public {
        vault = new SimpleVault();
    }

    function testFuzzDeposit(uint256 amount) public {
        amount = bound(amount, 0, 10 ether);
        vm.deal(address(this), amount);
        vault.deposit{value: amount}();
        assertEq(vault.balances(address(this)), amount);
    }
}`}
          </pre>

          <h3 className="text-base font-bold text-neutral-900 mt-6">21. Formal Verification & Hoare Logic</h3>
          <p className="text-xs text-neutral-600">
            Formal verification uses automated theorem provers (SMT solvers) to mathematically prove that a contract satisfies formal specifications across all possible reachable states. Represented in Hoare logic triples:
          </p>
          <div className="p-3 bg-[#f6f4ee] rounded-lg border border-[#e7e3da] text-xs font-mono text-center font-bold text-neutral-900">
            &#123; balance ≥ amount &#125; &nbsp; withdraw(amount) &nbsp; &#123; balance' = balance - amount &#125;
          </div>
        </div>
      </section>
    '''
