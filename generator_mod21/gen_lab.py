# -*- coding: utf-8 -*-
"""
Module 21 Lab & Practical Assignments:
- Practical Lab: Build a Complete DAO Governance System with Proposals, Voting, Timelock and Treasury (Steps A-H)
- 11-Stage Testing Scenarios & Verification Matrix
- 8 Architecture & Security Questions with Detailed Explanations
- 5 Advanced Practical Engineering Assignments
- 5 Numerical Problems with Mathematical Derivations & Official Answer Key Table
"""

def generate_lab_and_challenges():
    return '''
        {/* Hands-On Engineering Labs & Capstone */}
        <section id="lab" className="space-y-16">
          {/* Practical Lab */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>HANDS-ON SOLIDITY LAB</span>
              <span>•</span>
              <span>DEPLOYMENT & TIMELOCK TESTING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Practical Lab: Build &amp; Deploy a DAO Governance System with Proposals, Voting, and a Timelock
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Design, compile, and deploy a complete production-grade DAO governance architecture on Ethereum Sepolia using OpenZeppelin 5.x contracts. You will create an <code>ERC20Votes</code> checkpointed token, configure an OpenZeppelin <code>TimelockController</code>, deploy a custom <code>Governor</code> contract, link a secure <code>DAOTreasury</code> vault, execute role handovers, craft an on-chain proposal, cast votes, queue through the timelock delay, and verify autonomous fund execution.
            </p>

            {/* Tools Table */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-neutral-900 font-mono">A. Required Tools &amp; Infrastructure</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Tool</th>
                      <th className="p-3">Version / Environment</th>
                      <th className="p-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Remix Online IDE</td>
                      <td className="p-3">Latest Web Browser</td>
                      <td className="p-3">Smart contract authoring, compiling, and direct deployment.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">OpenZeppelin Contracts</td>
                      <td className="p-3">v5.0.0+</td>
                      <td className="p-3">Industry-standard audited Governor, Timelock, and ERC20Votes modules.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">MetaMask</td>
                      <td className="p-3">Browser Extension</td>
                      <td className="p-3">Signing deployment transactions and casting cryptographic votes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Ethereum Sepolia</td>
                      <td className="p-3">Chain ID: 11155111</td>
                      <td className="p-3">Live testnet environment with public block explorer verification.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">Ethers.js</td>
                      <td className="p-3">v6.x</td>
                      <td className="p-3">Encoding function calldata for proposals and calculating description hashes.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contract 1: GovernanceToken.sol */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-neutral-900 font-mono">B. Contract 1: GovernanceToken.sol (ERC20Votes)</h3>
                <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-xs font-mono">Solidity ^0.8.24</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

/**
 * @title PrepSpacesGovernanceToken (PSG)
 * @notice ERC20Votes token tracking historical checkpoints for DAO voting power.
 */
contract GovernanceToken is ERC20, ERC20Permit, ERC20Votes {
    constructor(address initialHolder)
        ERC20("PrepSpaces Governance", "PSG")
        ERC20Permit("PrepSpaces Governance")
    {
        // Mint 1,000,000 PSG to the initialHolder (18 decimals)
        _mint(initialHolder, 1_000_000 * 10 ** decimals());
    }

    // Required overrides for Solidity inheritance
    function _update(address from, address to, uint256 value)
        internal
        override(ERC20, ERC20Votes)
    {
        super._update(from, to, value);
    }

    function nonces(address owner)
        public
        view
        override(ERC20Permit, Nonces)
        returns (uint256)
    {
        return super.nonces(owner);
    }
}`}</pre>
              </div>
            </div>

            {/* Contract 2: MyGovernor.sol */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-neutral-900 font-mono">C. Contract 2: MyGovernor.sol (OpenZeppelin 5.x)</h3>
                <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-xs font-mono">Solidity ^0.8.24</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorTimelockControl.sol";

contract MyGovernor is
    Governor,
    GovernorCountingSimple,
    GovernorVotes,
    GovernorVotesQuorumFraction,
    GovernorTimelockControl
{
    constructor(IVotes _token, TimelockController _timelock)
        Governor("PrepSpacesDAO")
        GovernorVotes(_token)
        GovernorVotesQuorumFraction(4) // 4% quorum requirement
        GovernorTimelockControl(_timelock)
    {}

    // Voting delay: 1 block (allows snapshot to settle)
    function votingDelay() public pure override returns (uint256) {
        return 1; // 1 block (~12 seconds)
    }

    // Voting period: active for 50 blocks (~10 minutes for testnet; 50,400 for 1 week mainnet)
    function votingPeriod() public pure override returns (uint256) {
        return 50; 
    }

    // Proposal threshold: 0 PSG for testnet (or 10,000 * 1e18 for mainnet)
    function proposalThreshold() public pure override returns (uint256) {
        return 0;
    }

    // Overrides required by Solidity and Timelock integration
    function state(uint256 proposalId)
        public
        view
        override(Governor, GovernorTimelockControl)
        returns (ProposalState)
    {
        return super.state(proposalId);
    }

    function proposalNeedsQueuing(uint256 proposalId)
        public
        view
        override(Governor, GovernorTimelockControl)
        returns (bool)
    {
        return super.proposalNeedsQueuing(proposalId);
    }

    function _queueOperations(
        uint256 proposalId,
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal override(Governor, GovernorTimelockControl) returns (uint48) {
        return super._queueOperations(proposalId, targets, values, calldatas, descriptionHash);
    }

    function _executeOperations(
        uint256 proposalId,
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal override(Governor, GovernorTimelockControl) {
        super._executeOperations(proposalId, targets, values, calldatas, descriptionHash);
    }

    function _cancel(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        bytes32 descriptionHash
    ) internal override(Governor, GovernorTimelockControl) returns (uint256) {
        return super._cancel(targets, values, calldatas, descriptionHash);
    }

    function _executor()
        internal
        view
        override(Governor, GovernorTimelockControl)
        returns (address)
    {
        return super._executor();
    }
}`}</pre>
              </div>
            </div>

            {/* Contract 3: DAOTreasury.sol */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-neutral-900 font-mono">D. Contract 3: DAOTreasury.sol (Vault)</h3>
                <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-xs font-mono">Solidity ^0.8.24</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <pre>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title DAOTreasury
 * @notice Holds DAO funds; ownership is transferred strictly to the TimelockController.
 */
contract DAOTreasury is Ownable {
    using SafeERC20 for IERC20;

    event FundsReleased(address indexed token, address indexed recipient, uint256 amount);

    // Initial owner MUST be the TimelockController contract address!
    constructor(address timelockAddress) Ownable(timelockAddress) {}

    /**
     * @notice Releases ERC-20 tokens to a recipient. Only callable by the TimelockController.
     */
    function release(address token, address recipient, uint256 amount) external onlyOwner {
        require(recipient != address(0), "Invalid recipient");
        require(amount > 0, "Invalid amount");
        IERC20(token).safeTransfer(recipient, amount);
        emit FundsReleased(token, recipient, amount);
    }

    // Allow treasury to receive native ETH
    receive() external payable {}
}`}</pre>
              </div>
            </div>

            {/* Deployment & Execution Workflow */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">E. Comprehensive Step-by-Step Deployment &amp; Execution Guide</h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step 1: Deploy GovernanceToken.sol</strong>
                  <p className="text-neutral-600">Deploy with <code>initialHolder = yourWalletAddress</code>. 1,000,000 PSG will be minted to your wallet.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step 2: Self-Delegate Voting Power (MANDATORY!)</strong>
                  <p className="text-neutral-600">Call <code>GovernanceToken.delegate(yourWalletAddress)</code>. Voting power remains 0 until this transaction is confirmed!</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step 3: Deploy TimelockController</strong>
                  <p className="text-neutral-600">
                    Deploy standard OpenZeppelin <code>TimelockController(minDelay, proposers, executors, admin)</code>:<br />
                    <code>minDelay: 60</code> (60 seconds for quick testing)<br />
                    <code>proposers: []</code> (empty array)<br />
                    <code>executors: []</code> (empty array)<br />
                    <code>admin: yourWalletAddress</code> (deployer temporarily retains admin to configure roles)
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step 4: Deploy MyGovernor.sol</strong>
                  <p className="text-neutral-600">Pass the <code>GovernanceToken</code> address and <code>TimelockController</code> address into the constructor.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <strong className="text-neutral-900 text-sm">Step 5: Configure Timelock Roles &amp; Renounce Admin (Crucial Security Handover)</strong>
                  <p className="text-neutral-600">On the deployed TimelockController, execute these four transactions:</p>
                  <ul className="list-disc pl-4 space-y-1 text-neutral-700">
                    <li>1. <code>grantRole(PROPOSER_ROLE, MyGovernorAddress)</code></li>
                    <li>2. <code>grantRole(EXECUTOR_ROLE, address(0))</code> (Allows anyone to execute once timelock finishes)</li>
                    <li>3. <code>revokeRole(PROPOSER_ROLE, yourWalletAddress)</code></li>
                    <li>4. <code>renounceRole(DEFAULT_ADMIN_ROLE, yourWalletAddress)</code> &rarr; <strong>Now, ONLY the Timelock can manage itself!</strong></li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <strong className="text-neutral-900 text-sm">Step 6: Deploy DAOTreasury.sol &amp; Fund with 100,000 PSG</strong>
                  <p className="text-neutral-600">Deploy with <code>timelockAddress = TimelockControllerAddress</code>. Then call <code>GovernanceToken.transfer(DAOTreasuryAddress, 100000 * 1e18)</code>.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <strong className="text-neutral-900 text-sm">Step 7: Propose, Vote, Queue &amp; Execute</strong>
                  <div className="p-3 bg-neutral-900 text-neutral-200 rounded-lg space-y-1 overflow-x-auto">
                    <div>1. Encode Calldata: <code>treasuryInterface.encodeFunctionData(&quot;release&quot;, [PSG_TOKEN, recipient, 100 * 1e18])</code></div>
                    <div>2. Propose: <code>MyGovernor.propose([DAOTreasury], [0], [calldata], &quot;Proposal #1: Educational Grant 100 PSG&quot;)</code></div>
                    <div>3. Wait 1 block delay, then Vote: <code>MyGovernor.castVote(proposalId, 1)</code> (1 = For)</div>
                    <div>4. Wait 50 blocks, then Queue: <code>MyGovernor.queue([DAOTreasury], [0], [calldata], descriptionHash)</code></div>
                    <div>5. Wait 60 seconds (minDelay), then Execute: <code>MyGovernor.execute([DAOTreasury], [0], [calldata], descriptionHash)</code></div>
                    <div className="text-emerald-400 font-bold">&gt;&gt; Treasury balance reduces from 100,000 to 99,900 PSG. Recipient receives 100 PSG!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Testing Scenarios */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">F. Advanced Testing Scenarios (11 Positive &amp; Negative Test Cases)</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-2.5">#</th>
                      <th className="p-2.5">Test Scenario</th>
                      <th className="p-2.5">Type</th>
                      <th className="p-2.5">Action &amp; Parameters</th>
                      <th className="p-2.5">Expected Behavior / Revert Reason</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-2.5 font-bold">1</td>
                      <td className="p-2.5 font-bold">Proposal Creation</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Positive</td>
                      <td className="p-2.5">Account with &ge; proposalThreshold calls <code>propose()</code></td>
                      <td className="p-2.5">Emits <code>ProposalCreated</code> event with unique <code>proposalId</code></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">2</td>
                      <td className="p-2.5 font-bold">Below Threshold Creation</td>
                      <td className="p-2.5 text-red-600 font-bold">Negative</td>
                      <td className="p-2.5">Account with 0 votes calls <code>propose()</code> (when threshold &gt; 0)</td>
                      <td className="p-2.5">Reverts: <code>GovernorInsufficientProposerVotes</code></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">3</td>
                      <td className="p-2.5 font-bold">Premature Voting</td>
                      <td className="p-2.5 text-red-600 font-bold">Negative</td>
                      <td className="p-2.5">Calling <code>castVote()</code> before <code>votingDelay</code> has elapsed</td>
                      <td className="p-2.5">Reverts: <code>GovernorUnexpectedProposalState(Pending)</code></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">4</td>
                      <td className="p-2.5 font-bold">Valid Vote Casting</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Positive</td>
                      <td className="p-2.5">Calling <code>castVote(proposalId, 1)</code> during active window</td>
                      <td className="p-2.5">Emits <code>VoteCast</code>, updates <code>forVotes</code> tally</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">5</td>
                      <td className="p-2.5 font-bold">Double-Voting Attempt</td>
                      <td className="p-2.5 text-red-600 font-bold">Negative</td>
                      <td className="p-2.5">Same address calls <code>castVote()</code> a second time</td>
                      <td className="p-2.5">Reverts: <code>GovernorAlreadyCastVote</code></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">6</td>
                      <td className="p-2.5 font-bold">Late Vote Submission</td>
                      <td className="p-2.5 text-red-600 font-bold">Negative</td>
                      <td className="p-2.5">Calling <code>castVote()</code> after <code>votingPeriod</code> expires</td>
                      <td className="p-2.5">Reverts: <code>GovernorUnexpectedProposalState</code></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">7</td>
                      <td className="p-2.5 font-bold">Queueing Defeated Proposal</td>
                      <td className="p-2.5 text-red-600 font-bold">Negative</td>
                      <td className="p-2.5">Calling <code>queue()</code> when quorum is not met</td>
                      <td className="p-2.5">Reverts: <code>GovernorUnexpectedProposalState(Defeated)</code></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">8</td>
                      <td className="p-2.5 font-bold">Valid Queue into Timelock</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Positive</td>
                      <td className="p-2.5">Calling <code>queue()</code> when For &gt; Against and Quorum met</td>
                      <td className="p-2.5">Emits <code>ProposalQueued</code>, starts timelock countdown</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">9</td>
                      <td className="p-2.5 font-bold">Premature Execution</td>
                      <td className="p-2.5 text-red-600 font-bold">Negative</td>
                      <td className="p-2.5">Calling <code>execute()</code> before <code>minDelay</code> (60s) has passed</td>
                      <td className="p-2.5">Reverts: <code>TimelockUnexpectedOperationState</code></td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">10</td>
                      <td className="p-2.5 font-bold">Autonomous Execution</td>
                      <td className="p-2.5 text-emerald-700 font-bold">Positive</td>
                      <td className="p-2.5">Calling <code>execute()</code> after <code>minDelay</code></td>
                      <td className="p-2.5">Emits <code>ProposalExecuted</code>; DAOTreasury releases 100 PSG</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">11</td>
                      <td className="p-2.5 font-bold">Direct Treasury Access Bypass</td>
                      <td className="p-2.5 text-red-600 font-bold">Negative</td>
                      <td className="p-2.5">External wallet calls <code>DAOTreasury.release()</code> directly</td>
                      <td className="p-2.5">Reverts: <code>OwnableUnauthorizedAccount</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8 Security & Architecture Questions */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">G. Eight Architectural &amp; Security Verification Questions</h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Q1: Why must the deployer renounce the DEFAULT_ADMIN_ROLE in TimelockController?</div>
                  <p className="text-neutral-600">If the deployer retains DEFAULT_ADMIN_ROLE, they can unilaterally assign themselves PROPOSER_ROLE and bypass the DAO entirely, or reduce minDelay to 0 seconds, rendering the DAO centralized and vulnerable to rug pulls.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Q2: Why must token holders explicitly call `delegate(self)` before they can vote?</div>
                  <p className="text-neutral-600">In ERC20Votes, regular token balance tracking is decoupled from checkpointed voting power to optimize gas. Balance transfers update balances, but only delegated balances write checkpoints into the binary-searchable historical ledger.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Q3: How does `votingDelay &gt;= 1 block` stop flash-loan governance manipulation?</div>
                  <p className="text-neutral-600">When a proposal is created at block N, its snapshot block is fixed at block N + votingDelay. If an attacker takes a flash loan at block N + 1, their historical voting power at block N is zero!</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Q4: Why does GovernorCountingSimple exclude &quot;Against&quot; votes from the quorum calculation?</div>
                  <p className="text-neutral-600">If &quot;Against&quot; votes counted toward quorum, voters who despise a proposal would help validate its turnout requirement by showing up to vote &quot;Against&quot;. Abstaining from a proposal that lacks quorum allows it to fail cleanly.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Q5: What is the exact purpose of the `descriptionHash` parameter during queue and execute?</div>
                  <p className="text-neutral-600">The description hash (keccak256 of the markdown proposal text) binds the proposal&apos;s human-readable promises to its on-chain execution bytecode, ensuring the exact same calldata is verified at each stage.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Q6: What is the role of `address(0)` in TimelockController executors?</div>
                  <p className="text-neutral-600">Granting EXECUTOR_ROLE to address(0) makes execution completely open and permissionless once the delay has passed, preventing any single entity from censoring the execution of an approved proposal.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Q7: How does a timelock protect liquidity providers from malicious governance takeovers?</div>
                  <p className="text-neutral-600">The 48-hour timelock guarantees a grace window for liquidity providers to &quot;rage-quit&quot; (withdraw their assets from the protocol) before the malicious proposal bytecode becomes executable.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-1">
                  <div className="font-bold text-neutral-900">Q8: Why does DAOTreasury use OpenZeppelin SafeERC20 instead of raw IERC20 `transfer`?</div>
                  <p className="text-neutral-600">Some legacy tokens (like USDT) do not return a boolean on transfer. SafeERC20 wraps calls to handle non-reverting and boolean-less tokens safely without silently freezing funds.</p>
                </div>
              </div>
            </div>

            {/* Five Practical Assignments */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-neutral-900 font-mono">H. Five Advanced Practical Engineering Assignments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 1: Multi-Delegate Governance Dashboard</div>
                  <p className="text-neutral-600">Build a front-end portal using Ethers.js v6 that lists top 10 delegates, displays past voting attendance, and enables one-click `delegateBySig` gasless delegation.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 2: Multi-Asset Treasury Vault with Staged Tranches</div>
                  <p className="text-neutral-600">Extend `DAOTreasury.sol` to disburse funds in milestone-based tranches over 6 months with automated milestone cancellation if deliverables are unmet.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 3: Gasless Snapshot + SafeSnap Optimistic Bridge</div>
                  <p className="text-neutral-600">Configure a Snapshot Space tied to an ENS test domain, record gasless off-chain votes, and connect Zodiac Reality oracle to execute decisions on Sepolia.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">Assignment 4: Safe 3-of-5 Multisig Emergency Security Council</div>
                  <p className="text-neutral-600">Deploy a 3-of-5 Safe multisig, assign it CANCELLER_ROLE in TimelockController, and write an automated bot that flags suspicious calldata for council veto.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 19.B: 5 Numerical Problems */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.B</span>
              <span>•</span>
              <span>MATHEMATICAL DERIVATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.B Five Numerical DAO Governance &amp; Quorum Economics Problems
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Step-by-step mathematical problem solving for Web3 governance architects and tokenomics designers. Expand each card to inspect given variables, formal equations, derivations, and exact solutions.
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
    '''
