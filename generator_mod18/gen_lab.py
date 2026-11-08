# -*- coding: utf-8 -*-
"""
Module 18 Practical Lab, Audit Report Template, Advanced Challenges, and Assignments.
Zero information loss - complete contract code, testing scripts, and rubrics.
"""

def generate_lab_and_challenges():
    return '''
      {/* ============================================================== */}
      {/* PART 22: AUDIT REPORT PREPARATION & SEVERITY CLASSIFICATION   */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 22
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Audit Report Preparation & Severity Classification
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Standards for documenting security findings, assessing likelihood and impact, and structuring professional audit deliverables.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr>
                  <th className="p-3">Severity Rating</th>
                  <th className="p-3">Impact & Exploitability Definition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-rose-700">Critical</td>
                  <td className="p-3 text-neutral-600">Direct, unconstrained compromise of protocol assets, total treasury draining, or irreversible permanent lockup of user funds with zero preconditions.</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-rose-600">High</td>
                  <td className="p-3 text-neutral-600">Significant exploit with substantial financial or operational loss, requiring limited or plausible attacker capital/timing.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-amber-700">Medium</td>
                  <td className="p-3 text-neutral-600">Meaningful security defect where impact is constrained to a subset of users, requires rare preconditions, or causes temporary denial of service.</td>
                </tr>
                <tr className="bg-[#f6f4ee]/50">
                  <td className="p-3 font-bold text-blue-700">Low</td>
                  <td className="p-3 text-neutral-600">Minor issue, theoretical attack vector, edge-case rounding error with negligible financial damage, or missing event emission.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-neutral-600">Informational</td>
                  <td className="p-3 text-neutral-600">Code quality recommendation, gas optimization, dead code removal, or NatSpec documentation improvement.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 24: PRACTICAL LAB - AUDIT VULNERABLE SMART CONTRACTS      */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 24
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Practical Lab — Audit Vulnerable Smart Contracts with Foundry
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Hands-on local audit environment: inspect deliberately vulnerable contracts, write Foundry reproduction tests, apply CEI/reentrancy fixes, and verify regressions.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <h3 className="text-base font-bold text-neutral-900">24.1 Lab Environment Setup</h3>
          <pre className="p-3 bg-[#f6f4ee] rounded-xl border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`forge init blockchain-security-lab && cd blockchain-security-lab
forge install OpenZeppelin/openzeppelin-contracts --no-commit
# Configure foundry.toml with solc_version = "0.8.24" and optimizer = true`}
          </pre>

          {/* Vulnerable Contract A */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">24.2 Vulnerable Contract A — Access Control (src/VulnerableVault.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VulnerableVault {
    address public owner;
    uint256 public totalDeposits;
    mapping(address => uint256) public balances;

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        require(msg.value > 0, "Zero deposit");
        balances[msg.sender] += msg.value;
        totalDeposits += msg.value;
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        totalDeposits -= amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
    }

    // AUDIT VULNERABILITY AUD-001: Missing access control!
    function changeOwner(address newOwner) external {
        owner = newOwner;
    }
}`}
          </pre>

          {/* Vulnerable Contract B */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">24.3 Vulnerable Contract B — Reentrancy (src/VulnerableReentrancyVault.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VulnerableReentrancyVault {
    mapping(address => uint256) public balances;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() external {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "No balance");

        // AUDIT VULNERABILITY AUD-002: Interaction occurs before Effects!
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");

        balances[msg.sender] = 0;
    }
}`}
          </pre>

          {/* Vulnerable Contract C */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">24.4 Vulnerable Contract C — Lending Accounting (src/VulnerableLending.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VulnerableLending {
    mapping(address => uint256) public collateral;
    mapping(address => uint256) public debt;
    uint256 public constant COLLATERAL_FACTOR = 75; // 75%

    function depositCollateral() external payable {
        collateral[msg.sender] += msg.value;
    }

    function borrow(uint256 amount) external {
        uint256 capacity = (collateral[msg.sender] * COLLATERAL_FACTOR) / 100;
        require(amount <= capacity, "Exceeds borrowing capacity");
        debt[msg.sender] += amount;
    }

    // AUDIT VULNERABILITY AUD-003: Collateral withdrawn without validating remaining debt!
    function withdrawCollateral(uint256 amount) external {
        require(collateral[msg.sender] >= amount, "Insufficient collateral");
        collateral[msg.sender] -= amount;
    }
}`}
          </pre>

          {/* Foundry Reproduction Test */}
          <h3 className="text-base font-bold text-neutral-900 mt-6">24.5 Foundry Reproduction Test (test/VulnerableVault.t.sol)</h3>
          <pre className="p-4 rounded-xl bg-[#f6f4ee] border border-[#e7e3da] text-xs font-mono text-neutral-800 overflow-x-auto">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/VulnerableVault.sol";

contract VulnerableVaultTest is Test {
    VulnerableVault vault;
    address owner = address(1);
    address attacker = address(2);

    function setUp() public {
        vm.prank(owner);
        vault = new VulnerableVault();
    }

    function testUnauthorizedOwnershipChange() public {
        vm.prank(attacker);
        vault.changeOwner(attacker);
        assertEq(vault.owner(), attacker);
    }

    function testDepositAccounting() public {
        vm.deal(owner, 10 ether);
        vm.prank(owner);
        vault.deposit{value: 5 ether}();
        assertEq(vault.balances(owner), 5 ether);
        assertEq(vault.totalDeposits(), 5 ether);
    }
}`}
          </pre>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 25: COMPLETE AUDIT REPORT TEMPLATE                        */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 25
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Official Security Audit Report Deliverable
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            Structured Markdown audit report detailing findings AUD-001 through AUD-003 with root causes, impacts, and remediations.
          </p>
        </div>

        <div className="space-y-4">
          {auditFindings.map((finding) => (
            <div key={finding.id} className="bg-white rounded-xl border border-[#e7e3da] p-5 shadow-sm space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-300">
                    {finding.id}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900">{finding.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-rose-700 font-mono uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    Severity: {finding.severity}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {finding.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono bg-[#f6f4ee] p-3 rounded-lg border border-[#e7e3da]">
                <div><span className="text-neutral-500">Contract:</span> <span className="font-bold text-neutral-900">{finding.contract}</span></div>
                <div><span className="text-neutral-500">Function:</span> <span className="font-bold text-neutral-900">{finding.function}</span></div>
              </div>

              <div className="space-y-2 text-xs leading-relaxed text-neutral-700">
                <p><strong>Description:</strong> {finding.description}</p>
                <p><strong>Root Cause:</strong> {finding.root_cause}</p>
                <p><strong>Impact:</strong> <span className="text-rose-800 font-medium">{finding.impact}</span></p>
                <div className="p-2.5 bg-neutral-900 text-emerald-400 font-mono rounded-lg text-[11px] overflow-x-auto">
                  Proof of Concept: {finding.poc}
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-950">
                  <strong>Remediation:</strong> {finding.recommendation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 26: ADVANCED AUDIT CHALLENGES                             */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 26
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Advanced Security Audit Challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white rounded-xl border border-[#e7e3da] space-y-2">
            <span className="font-bold text-amber-800 uppercase">Challenge 1 — Cross-Function Reentrancy</span>
            <p className="text-neutral-600 leading-relaxed">
              Create a vault with separate <code>withdraw()</code> and <code>borrow()</code> functions. Investigate whether an external call in <code>withdraw()</code> can reenter into <code>borrow()</code> to bypass collateralization limits.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#e7e3da] space-y-2">
            <span className="font-bold text-amber-800 uppercase">Challenge 2 — Flash Loan Oracle Manipulation</span>
            <p className="text-neutral-600 leading-relaxed">
              Build a mock lending market relying on an AMM spot price. Simulate an atomic flash loan swap that doubles the apparent collateral valuation and drains pool liquidity.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#e7e3da] space-y-2">
            <span className="font-bold text-amber-800 uppercase">Challenge 3 — Upgradeability Storage Collision</span>
            <p className="text-neutral-600 leading-relaxed">
              Deploy an unaligned proxy and implementation contract. Demonstrate how setting a variable in the logic contract corrupts the proxy's administrative address.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#e7e3da] space-y-2">
            <span className="font-bold text-amber-800 uppercase">Challenge 4 — Fuzzing Protocol Invariants</span>
            <p className="text-neutral-600 leading-relaxed">
              Formulate 5 mathematical invariants for a lending protocol and run a 50,000-run Foundry invariant campaign to identify subtle edge-case reverts.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* PART 27: PRACTICAL ASSIGNMENT & GRADING RUBRIC                 */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Part 27
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Practical Assignment & Official Grading Rubric
          </h2>
        </div>

        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <p>
            Students deliver a full 2-week individual or team smart contract security audit submission including a local Foundry repository, reproduction tests, Slither scans, and a professional audit report.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#e7e3da] rounded-xl overflow-hidden">
              <thead className="bg-[#f6f4ee] font-bold text-neutral-700 border-b border-[#e7e3da]">
                <tr><th className="p-2.5">Grading Component</th><th className="p-2.5">Weight</th><th className="p-2.5">Evaluation Focus</th></tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white"><td className="p-2.5 font-bold">Threat Modeling</td><td className="p-2.5 font-bold text-amber-800">10%</td><td className="p-2.5">Asset identification, STRIDE analysis, and trust boundary mapping.</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Manual Code Review</td><td className="p-2.5 font-bold text-amber-800">20%</td><td className="p-2.5">Line-by-line inspection of access controls, CEI, and precision arithmetic.</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Vulnerability Reproduction</td><td className="p-2.5 font-bold text-amber-800">20%</td><td className="p-2.5">Working Foundry tests reproducing each confirmed exploit locally.</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Secure Remediation</td><td className="p-2.5 font-bold text-amber-800">20%</td><td className="p-2.5">Robust, regression-tested patches eliminating root vulnerability causes.</td></tr>
                <tr className="bg-white"><td className="p-2.5 font-bold">Static & Fuzz Testing</td><td className="p-2.5 font-bold text-amber-800">15%</td><td className="p-2.5">Configuring Slither and executing Foundry property-based invariant test suites.</td></tr>
                <tr className="bg-[#f6f4ee]/50"><td className="p-2.5 font-bold">Audit Report Quality</td><td className="p-2.5 font-bold text-amber-800">15%</td><td className="p-2.5">Structured Markdown report with severity classifications and disclosures.</td></tr>
                <tr className="bg-amber-50 font-bold"><td className="p-2.5 text-amber-950">Total Final Grade</td><td className="p-2.5 text-amber-900 font-extrabold">100%</td><td className="p-2.5 text-amber-950">Comprehensive evaluation across professional audit lifecycle.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    '''
