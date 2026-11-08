// projectx/src/Componets/BlockchainDAOsGovernance.jsx
import React, { useState, useMemo, useCallback } from "react";
import ModuleNav from "./ModuleNav";
import { Link } from "react-router-dom";
import {
  Activity,
  ChevronDown,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Vote
} from "lucide-react";

// Data Constants
const CHECKLIST_ITEMS = [
  {
    "id": "c1",
    "label": "Understand DAO fundamentals: decentralized coordination, programmable rules, and treasury controls",
    "category": "theory"
  },
  {
    "id": "c2",
    "label": "Analyze historical DAO origins, centralized vs decentralized management, and empirical power concentration",
    "category": "theory"
  },
  {
    "id": "c3",
    "label": "Examine real-world production DAOs: Uniswap DAO, Sky (MakerDAO), ENS DAO, and Aave Governance",
    "category": "theory"
  },
  {
    "id": "c4",
    "label": "Master Core DAO Architecture: Token, Proposal, Governor, TimelockController, Treasury, and Safe Multisig",
    "category": "theory"
  },
  {
    "id": "c5",
    "label": "Differentiate On-Chain binding governance (Governor) vs Off-Chain gasless signaling (Snapshot)",
    "category": "theory"
  },
  {
    "id": "c6",
    "label": "Trace the 8-stage Governance Lifecycle from discussion to timelock and execution",
    "category": "theory"
  },
  {
    "id": "c7",
    "label": "Compare Governance Token Models: fixed supply vs inflationary, governance-only vs hybrid utility",
    "category": "theory"
  },
  {
    "id": "c8",
    "label": "Master ERC20Votes: delegation, historical block checkpoints, and double-voting prevention",
    "category": "theory"
  },
  {
    "id": "c9",
    "label": "Structure Governance Proposals: targets, values, calldatas, and description hashes",
    "category": "theory"
  },
  {
    "id": "c10",
    "label": "Calculate Proposal Thresholds (e.g. 1% of total voting supply) to block proposal spam",
    "category": "theory"
  },
  {
    "id": "c11",
    "label": "Analyze 5 Voting Mechanisms: Token-weighted, One-member-one-vote, Quadratic, Conviction, and Delegated",
    "category": "theory"
  },
  {
    "id": "c12",
    "label": "Master Quadratic Voting mechanics and cost formulas: Cost = Votes^2 to protect community minorities",
    "category": "theory"
  },
  {
    "id": "c13",
    "label": "Inspect OpenZeppelin castVote(proposalId, support) and support values (0=Against, 1=For, 2=Abstain)",
    "category": "theory"
  },
  {
    "id": "c14",
    "label": "Understand Snapshot Architecture: spaces, proposal strategies, signed messages, and execution adapters",
    "category": "theory"
  },
  {
    "id": "c15",
    "label": "Calculate Historical Voting Power and distinguish token balances from active delegated weight",
    "category": "theory"
  },
  {
    "id": "c16",
    "label": "Master Quorum Requirements: understand why GovernorCountingSimple counts For and Abstain, NOT Against",
    "category": "theory"
  },
  {
    "id": "c17",
    "label": "Implement TimelockController: mandatory delays, review windows, and emergency cancellation",
    "category": "theory"
  },
  {
    "id": "c18",
    "label": "Execute Secure Timelock Role Handover: grant Governor roles, revoke deployer, and renounce admin",
    "category": "theory"
  },
  {
    "id": "c19",
    "label": "Architect DAO Treasury Management: Ownable(timelockAddress), SafeERC20, and multi-tier spending",
    "category": "theory"
  },
  {
    "id": "c20",
    "label": "Integrate Safe Multisig (M-of-N) wallets for operational agility and emergency security councils",
    "category": "theory"
  },
  {
    "id": "c21",
    "label": "Audit 7 Governance Attack Vectors: flash loans, hostile takeovers, Sybil voting, and timelock bypass",
    "category": "theory"
  },
  {
    "id": "c22",
    "label": "Mitigate Governance Manipulation: voting concentration, delegation capture, and governance fatigue",
    "category": "theory"
  },
  {
    "id": "c23",
    "label": "Examine DAO Legal Considerations: legal wrappers (LLC, UNA, Foundation), tax liabilities, and global regulations",
    "category": "theory"
  },
  {
    "id": "c24",
    "label": "Deploy GovernanceToken.sol with ERC20Votes & 1M initial supply on Ethereum Sepolia",
    "category": "lab"
  },
  {
    "id": "c25",
    "label": "Deploy MyGovernor.sol & TimelockController with verified role handover and zero deployer privileges",
    "category": "lab"
  },
  {
    "id": "c26",
    "label": "Deploy DAOTreasury.sol, fund with 100k PSG, propose, vote, queue, and execute 100 PSG transfer",
    "category": "lab"
  },
  {
    "id": "c27",
    "label": "Execute all 11 testing scenarios & answer 8 governance security failure questions",
    "category": "lab"
  },
  {
    "id": "c28",
    "label": "Achieve 100% on the 20 Knowledge Assessment questions and 5 Numerical Derivation problems",
    "category": "assessment"
  }
];
const QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "question": "What does DAO stand for in blockchain engineering?",
    "options": [
      "Distributed Application Operation",
      "Decentralized Autonomous Organization",
      "Digital Asset Ownership",
      "Decentralized Application Oracle"
    ],
    "correctAnswer": 1,
    "explanation": "A DAO is an organization coordinated through smart contracts and decentralized community governance, enabling transparent, rules-based decision making without centralized executive hierarchies."
  },
  {
    "id": "q2",
    "question": "Which OpenZeppelin contract extension tracks historical token voting power and prevents double-voting?",
    "options": [
      "ERC20Permit",
      "ERC20Votes",
      "ERC721URIStorage",
      "ERC20Burnable"
    ],
    "correctAnswer": 1,
    "explanation": "ERC20Votes records historical checkpoints of voting power per block or timestamp. When a proposal is created, voting power is snapshot at that historical point, preventing users from voting, transferring tokens to another wallet, and voting again."
  },
  {
    "id": "q3",
    "question": "What does a Proposal Threshold determine in a Governor smart contract?",
    "options": [
      "The minimum voter turnout required for a vote to pass",
      "The minimum voting power an account must hold or have delegated to create a new governance proposal",
      "The duration of the timelock execution delay",
      "The total maximum token supply"
    ],
    "correctAnswer": 1,
    "explanation": "The proposal threshold restricts proposal creation to accounts holding a minimum amount of voting tokens (e.g. 100 PSG or 1% of total supply), preventing proposal spam on the network."
  },
  {
    "id": "q4",
    "question": "What is Quorum in a DAO voting system?",
    "options": [
      "The minimum total voting participation required for a proposal to be valid",
      "A token transfer fee paid to miners",
      "A multisig owner private key",
      "A smart contract compiler version"
    ],
    "correctAnswer": 0,
    "explanation": "Quorum is the minimum number of votes (or percentage of voting supply) that must participate in a vote. If quorum is not reached, the proposal fails even if 100% of the cast votes were in favor."
  },
  {
    "id": "q5",
    "question": "What is the primary architectural purpose of a Timelock contract (e.g. TimelockController)?",
    "options": [
      "To automatically mint new governance tokens every hour",
      "To introduce a mandatory waiting delay between proposal approval and execution, giving the community a review window",
      "To increase user voting power proportionally over time",
      "To create non-fungible tokens"
    ],
    "correctAnswer": 1,
    "explanation": "A timelock delays the execution of approved proposals (e.g. by 24-48 hours). This gives community members and security councils time to review scheduled transactions, detect malicious proposals, and exit or cancel the action before funds move."
  },
  {
    "id": "q6",
    "question": "Which platform is widely used by Web3 communities for gasless, off-chain signature-based voting?",
    "options": [
      "Remix IDE",
      "MetaMask JSON-RPC",
      "Snapshot",
      "Sepolia Etherscan"
    ],
    "correctAnswer": 2,
    "explanation": "Snapshot allows token holders to sign off-chain cryptographic messages using their wallets at zero gas cost. Votes are aggregated off-chain according to custom token-balance strategies."
  },
  {
    "id": "q7",
    "question": "What does a '3-of-5' Multisignature Wallet (e.g. Safe) configuration mean?",
    "options": [
      "Five transactions must be executed across three blocks",
      "At least 3 authorized signers out of 5 total designated signers must confirm a transaction before it executes",
      "Three wallets share ownership of five governance tokens",
      "Five proposals require three voting rounds"
    ],
    "correctAnswer": 1,
    "explanation": "M-of-N multisig requires a threshold of M unique cryptographic signatures out of N registered owners. In a 3-of-5 setup, any 3 of the 5 keyholders must sign to execute a transaction."
  },
  {
    "id": "q8",
    "question": "Which attack vector attempts to hijack governance by borrowing tokens uncollateralized within a single block?",
    "options": [
      "Sybil attack",
      "Flash-loan governance attack",
      "Phishing attack",
      "Replay attack"
    ],
    "correctAnswer": 1,
    "explanation": "In a flash-loan governance attack, an attacker borrows millions in governance tokens via a flash loan, votes on or creates a proposal in the same transaction, and returns the loan. Checkpointed historical voting power (ERC20Votes) prevents this."
  },
  {
    "id": "q9",
    "question": "Which voting options are supported by OpenZeppelin's standard GovernorCountingSimple module?",
    "options": [
      "Yes and No only",
      "For (1), Against (0), and Abstain (2)",
      "Buy and Sell",
      "Approve and Transfer"
    ],
    "correctAnswer": 1,
    "explanation": "GovernorCountingSimple supports 3 choices: 0 = Against, 1 = For, and 2 = Abstain. Crucially, For and Abstain votes count toward meeting the quorum requirement, while Against votes do not."
  },
  {
    "id": "q10",
    "question": "Who should ideally be the owner and sole authorized caller of a DAO's treasury contract?",
    "options": [
      "Any random wallet on the network",
      "The original deployer's private key permanently",
      "The governance-controlled TimelockController contract",
      "An unverified external REST API"
    ],
    "correctAnswer": 2,
    "explanation": "To ensure true decentralization, the treasury contract should be owned exclusively by the TimelockController. Transfers can only be executed after an on-chain proposal passes community voting and the timelock delay expires."
  },
  {
    "id": "q11",
    "question": "In OpenZeppelin GovernorCountingSimple, how is quorum calculated regarding the three vote types?",
    "options": [
      "All votes (For + Against + Abstain) count toward quorum.",
      "Only For votes count toward quorum.",
      "For and Abstain votes count toward quorum; Against votes do NOT count toward quorum.",
      "Quorum is calculated using only token transfers."
    ],
    "correctAnswer": 2,
    "explanation": "Under GovernorCountingSimple, `_quorumReached()` checks `quorum <= forVotes + abstainVotes`. Against votes do not contribute to reaching quorum, meaning a controversial vote with 90k Against and 10k For fails quorum if 40k is required."
  },
  {
    "id": "q12",
    "question": "How does Quadratic Voting prevent wealthy token whales from completely dominating governance decisions?",
    "options": [
      "By banning whales from holding more than 100 tokens.",
      "By making the credit cost of votes quadratic (Cost = Votes^2), meaning 10 votes cost 100 credits, allowing broad community majorities to outvote concentrated capital.",
      "By using proof-of-work mining for every vote.",
      "By randomizing voting results using Chainlink VRF."
    ],
    "correctAnswer": 1,
    "explanation": "In quadratic voting, each additional vote becomes quadratically more expensive ($V^2$). A whale with 10,000 credits gets only 100 votes ($\\sqrt{10,000}$), whereas 100 community members with 100 credits each get 10 votes each (1,000 total votes), giving the community $10\\times$ the voting power of the single whale."
  },
  {
    "id": "q13",
    "question": "Why must an account call 'delegate()' before its token balance can be counted as active voting power in ERC20Votes?",
    "options": [
      "Because tokens are burned when voting.",
      "Because ERC20Votes separates token ownership accounting from checkpointed voting weight to support delegation without transferring asset custody.",
      "Because delegation converts tokens into NFTs.",
      "Because the EVM cannot read ERC-20 balances directly."
    ],
    "correctAnswer": 1,
    "explanation": "ERC20Votes maintains independent checkpoint trees for voting weight. Holding tokens does not automatically allocate voting weight; a user must explicitly delegate to themselves (`delegate(msg.sender)`) or another address to write the checkpoint."
  },
  {
    "id": "q14",
    "question": "During the deployment and role setup of TimelockController, what critical step must be executed to eliminate centralized backdoors?",
    "options": [
      "Transfer all tokens to a burn address.",
      "Grant PROPOSER_ROLE to the Governor, revoke PROPOSER_ROLE from the deployer, and renounce DEFAULT_ADMIN_ROLE so the deployer retains zero administrative privileges.",
      "Increase the minDelay to 10 years.",
      "Delete the smart contract bytecode."
    ],
    "correctAnswer": 1,
    "explanation": "During initial deployment, the deployer holds temporary admin rights to configure the Governor. Once the Governor is granted PROPOSER_ROLE and CANCELLER_ROLE, the deployer MUST revoke their own proposer role and renounce DEFAULT_ADMIN_ROLE, leaving TimelockController as its own sole administrator."
  },
  {
    "id": "q15",
    "question": "What is 'Governance Fatigue' and how does it endanger decentralized protocols?",
    "options": [
      "Hardware servers overheating due to high gas usage.",
      "Voter apathy resulting from too many frequent, complex proposals, leading to low turnout where small colluding factions can pass malicious takeovers.",
      "A smart contract compilation error.",
      "The expiration of an SSL certificate on a DAO website."
    ],
    "correctAnswer": 1,
    "explanation": "Governance fatigue occurs when community members stop voting due to cognitive overload. In low-turnout environments, an attacker with only 3-5% of the total token supply can easily satisfy low quorum thresholds and pass treasury-draining proposals."
  },
  {
    "id": "q16",
    "question": "What is a 'Legal Wrapper' in DAO organizational structuring?",
    "options": [
      "A cryptographic encryption envelope for smart contracts.",
      "A recognized legal entity (such as an LLC, Foundation, or Unincorporated Nonprofit Association) that interfaces the DAO with real-world law, contracts, and taxation.",
      "A software wrapper around Ethers.js.",
      "A patent protecting blockchain algorithms."
    ],
    "correctAnswer": 1,
    "explanation": "Without a legal wrapper, courts may treat DAO token holders as general partners in an unincorporated partnership, making members personally liable for the DAO's debts. Wrappers (e.g. Swiss Foundations, Marshall Islands DAOs, or Wyoming UNA/LLCs) provide limited liability."
  },
  {
    "id": "q17",
    "question": "What security role does an Emergency Security Council play in advanced DAOs like ENS and Aave?",
    "options": [
      "They manually trade tokens on decentralized exchanges.",
      "They possess restricted, multi-sig powers (such as a 4-of-8 threshold) to cancel malicious proposals in the timelock queue or pause protocols during active exploits.",
      "They hold all user private keys in cold storage.",
      "They approve every single forum post."
    ],
    "correctAnswer": 1,
    "explanation": "Security Councils act as a defense-in-depth circuit breaker. If an attacker exploits a governance flaw or executes a flash-loan takeover, the council can invoke `timelock.cancel()` during the waiting period to halt malicious execution before funds are drained."
  },
  {
    "id": "q18",
    "question": "In OpenZeppelin Governor, what is the 'descriptionHash' parameter used for in queue() and execute()?",
    "options": [
      "It is a random number generated by Chainlink VRF.",
      "It is the keccak256 hash of the proposal description string, binding the exact human-readable text to the executable targets and calldatas.",
      "It stores the user's IP address.",
      "It is the compiler optimization flag."
    ],
    "correctAnswer": 1,
    "explanation": "The Governor binds proposals via `keccak256(bytes(description))`. When calling `queue()` or `execute()`, the caller must supply the matching `descriptionHash`, guaranteeing that the exact parameters voted on by the community match the executed payload."
  },
  {
    "id": "q19",
    "question": "Why is an on-chain proposal with targets, values, and calldatas safer than an off-chain vote that promises manual execution?",
    "options": [
      "Because on-chain proposals are free of gas costs.",
      "Because approved on-chain proposals are executed trustlessly and atomically by smart contracts without relying on human administrators to follow through.",
      "Because off-chain proposals can never be stored on computers.",
      "Because on-chain proposals do not require quorum."
    ],
    "correctAnswer": 1,
    "explanation": "On-chain governance with Governor and Timelock executes transactions programmatically through smart contracts. Off-chain votes (like basic Snapshot) are non-binding social signals that require a trusted multi-sig signer group to manually execute the transfer, reintroducing centralization."
  },
  {
    "id": "q20",
    "question": "How can an attacker exploit a proposal using a 'Trojan Horse' or malicious calldata payload?",
    "options": [
      "By writing a computer virus in Solidity.",
      "By giving the proposal a benign description (e.g. 'Fund Developer Grants') while encoding a malicious function call (e.g. `treasury.release(attacker, allFunds)`) in the raw calldata.",
      "By sending zero ether to the contract.",
      "By changing the chain ID."
    ],
    "correctAnswer": 1,
    "explanation": "Attackers disguise dangerous function calls behind attractive titles. Governance UIs must decode the raw `calldatas` against contract ABIs so voters inspect the actual recipient address and transfer amounts rather than relying on human-written titles."
  }
];
const INTERVIEW_QUESTIONS = [
  {
    "id": "iq1",
    "question": "Explain the architectural flow of OpenZeppelin Governor. How do the Governor, ERC20Votes, TimelockController, and DAOTreasury contracts interact from proposal to execution?",
    "context": "System Architecture & Protocol Design",
    "answer": "1) ERC20Votes provides checkpointed historical voting power: token holders call `delegate()` to record voting checkpoints. 2) A user with voting power >= `proposalThreshold()` calls `Governor.propose()`, passing target contract addresses, values, calldatas, and description. 3) After `votingDelay()` blocks, the proposal enters active status. Eligible users call `Governor.castVote()` (0=Against, 1=For, 2=Abstain). 4) When `votingPeriod()` expires, the Governor evaluates `_quorumReached()` and `_voteSucceeded()`. 5) If successful, anyone calls `Governor.queue()`, which calls `TimelockController.scheduleBatch()` to initiate the mandatory `minDelay` waiting period. 6) Once the timelock expires, anyone calls `Governor.execute()`, which calls `TimelockController.executeBatch()`. 7) The TimelockController, as the owner of `DAOTreasury`, executes `treasury.release()` to transfer funds.",
    "takeaway": "OpenZeppelin Governor decouples voting logic from delayed execution (Timelock) and asset custody (Treasury)."
  },
  {
    "id": "iq2",
    "question": "How does OpenZeppelin's ERC20Votes prevent flash-loan governance attacks? Walk through the internal checkpointing mechanics.",
    "context": "Governance Security & Checkpoints",
    "answer": "ERC20Votes implements historical checkpointing via `Checkpoints.Trace208`. Every balance transfer or delegation change records a new checkpoint `(timepoint, votes)` in an array. When a proposal is submitted, the Governor snapshots the proposal's timepoint at the current block/timestamp (`snapshot = proposalSnapshot(proposalId)`). When an account casts a vote, `GovernorVotes.getVotes()` queries `token.getPastVotes(account, snapshot)` using binary search over the checkpoints array. If an attacker borrows 10M tokens via a flash loan after the proposal is created, their past votes at the proposal's snapshot block are strictly zero. The flash loan grants them zero voting power.",
    "takeaway": "Historical checkpointing at proposal creation makes flash-loan voting power borrowing physically impossible."
  },
  {
    "id": "iq3",
    "question": "What is the critical nuance in OpenZeppelin GovernorCountingSimple regarding how Quorum is calculated? What are the game-theoretic consequences?",
    "context": "Quorum Mechanics & Game Theory",
    "answer": "In GovernorCountingSimple, quorum is defined as `quorum <= forVotes + abstainVotes`. Crucially, Against votes do NOT count toward quorum. This creates a severe game-theoretic asymmetry: if a controversial proposal has 10,000 For votes and requires 40,000 quorum, opponents who vote Against (e.g. 35,000 Against) do not help reach quorum (quorum remains at 10,000 < 40,000, and the proposal fails). However, if an opponent mistakenly votes Abstain, their vote counts toward quorum, potentially pushing an otherwise invalid proposal over the threshold. Conversely, in protocols where all votes count toward quorum, opponents are incentivized to abstain or not vote at all to prevent quorum.",
    "takeaway": "In GovernorCountingSimple, Against votes do not count toward quorum; understand the counting module before participating."
  },
  {
    "id": "iq4",
    "question": "Explain the difference between On-Chain Binding Governance (Compound Governor Bravo / OpenZeppelin Governor) and Off-Chain Signaling (Snapshot + Safe). When should a DAO use which?",
    "context": "On-Chain vs Off-Chain Governance",
    "answer": "On-Chain Governance: Votes are submitted via blockchain transactions; execution is trustless, atomic, and enforced by smart contracts (TimelockController). It is mandatory for binding protocol upgrades, parameter changes, and high-value treasury expenditures, but incurs gas costs for every vote. Off-Chain Governance: Votes are signed EIP-712 messages recorded on IPFS/centralized databases via Snapshot at zero gas. It is ideal for high-frequency sentiment signaling, community polls, and grant ideation. To make Snapshot binding, DAOs use execution bridges like SafeSnap / Zodiac Reality (using UMA or Kleros oracle dispute mechanisms), or rely on a trusted multi-sig to execute the passed decision.",
    "takeaway": "Use on-chain Governor for core protocol invariants; use Snapshot for zero-gas community signaling."
  },
  {
    "id": "iq5",
    "question": "Describe the mathematical formulation of Quadratic Voting. What are its benefits and what is its primary systemic vulnerability?",
    "context": "Mechanism Design & Quadratic Voting",
    "answer": "In Quadratic Voting, voting credits are allocated to participants, and the credit cost to cast $V$ votes on an issue is $C = V^2$ (or conversely, voting power $V = \\sqrt{C}$). Benefits: It measures preference intensity rather than raw wealth. A whale with 10,000 credits gets $\\sqrt{10,000} = 100$ votes, while 100 individuals with 100 credits each cast $100 \\times \\sqrt{100} = 1,000$ votes, allowing broad community consensus to override plutocratic minorities. Primary Vulnerability: Sybil attacks. If a whale splits their 10,000 credits across 100 Sybil wallets (100 credits each), they can cast $100 \\times 10 = 1,000$ votes instead of 100 votes. Therefore, Quadratic Voting mathematically requires proof-of-personhood (e.g. Gitcoin Passport, Worldcoin, or KYC).",
    "takeaway": "Quadratic voting neutralizes plutocracy but fails catastrophically without Sybil-resistant unique identity verification."
  },
  {
    "id": "iq6",
    "question": "What is the security hazard of leaving the deployer account as an administrator on TimelockController? How do you perform a safe role handover?",
    "context": "Smart Contract Security & Role Architecture",
    "answer": "TimelockController enforces delayed execution. If the deployer's EOA retains `TIMELOCK_ADMIN_ROLE` or `PROPOSER_ROLE`, the deployer can bypass community governance entirely, schedule arbitrary malicious transactions directly to the timelock, or cancel legitimate community proposals. To execute a safe handover: 1) Deployer calls `timelock.grantRole(PROPOSER_ROLE, governorAddress)`; 2) Deployer calls `timelock.grantRole(CANCELLER_ROLE, governorAddress)`; 3) Deployer calls `timelock.revokeRole(PROPOSER_ROLE, deployerAddress)`; 4) Deployer calls `timelock.revokeRole(CANCELLER_ROLE, deployerAddress)`; 5) Deployer calls `timelock.renounceRole(DEFAULT_ADMIN_ROLE, deployerAddress)`. TimelockController retains its own admin role, becoming fully sovereign.",
    "takeaway": "Deployers must renounce all timelock roles after configuring the Governor; any retained role is an existential centralization backdoor."
  },
  {
    "id": "iq7",
    "question": "How did the Beanstalk Farms governance exploit ($182M) occur in April 2022? How could it have been prevented?",
    "context": "Post-Mortems & Governance Exploits",
    "answer": "Beanstalk utilized an emergency governance mechanism allowing a proposal to execute with a 1-day voting window if it achieved a 2/3 supermajority of voting power. The attacker took a massive $1B flash loan of DAI, USDC, and USDT from Aave, swapped into Beanstalk's Curve pool to obtain 79% of the governance token (Stalk) voting power, submitted malicious proposals (BIP-18) transferring all treasury assets to their wallet, voted for the proposal with their 79% majority, immediately triggered the emergency execution function, drained $182M, and repaid the flash loan in the same transaction. Prevention: 1) Enforce strict historical checkpoints prior to proposal submission; 2) Prohibit immediate execution; 3) Mandatory minimum timelock delays that cannot be bypassed by flash majorities.",
    "takeaway": "Emergency execution shortcuts that can be satisfied within a single block turn flash loans into instant protocol drainers."
  },
  {
    "id": "iq8",
    "question": "What is the difference between a Proposal Threshold and a Quorum Requirement in Governor design? Why must both be carefully tuned?",
    "context": "Governance Parameter Tuning",
    "answer": "Proposal Threshold controls entry: the minimum voting tokens an account must control to submit a proposal (e.g. 1% of total supply). If set too low, spammers flood the governance queue with trivial or malicious proposals; if set too high, smaller community members are completely disenfranchised from submitting ideas. Quorum controls exit: the minimum voting participation required for a proposal to be valid (e.g. 4% of total supply). If set too high, legitimate proposals fail repeatedly due to voter apathy; if set too low, a tiny colluding cartel can quietly pass dangerous proposals during low-activity holidays.",
    "takeaway": "Proposal threshold filters spam; Quorum enforces legitimate community participation."
  },
  {
    "id": "iq9",
    "question": "How does Conviction Voting work, and why is it particularly popular for DAO grant allocation systems?",
    "context": "Continuous Governance & Conviction Voting",
    "answer": "Unlike discrete voting periods where votes are cast within a strict window, Conviction Voting is a continuous governance model. Community members stake their voting tokens on open proposals. The longer tokens remain staked behind a proposal, the more 'conviction' (mathematical weight) accumulates according to a decay half-life formula: $C_t = C_{t-1} \\times \\alpha + V_t$. When accumulated conviction surpasses a dynamic threshold (which scales with the requested funding amount), the proposal passes automatically. This eliminates governance deadlines, reduces voter fatigue, and naturally prioritizes long-term community consensus over flash hype.",
    "takeaway": "Conviction voting replaces rigid voting deadlines with continuous, time-weighted preference accumulation."
  },
  {
    "id": "iq10",
    "question": "What is a 'Trojan Horse' governance attack, and how should a governance dashboard decode raw transaction calldata to protect voters?",
    "context": "UI Security & Calldata Inspection",
    "answer": "A Trojan Horse attack occurs when an attacker crafts a proposal with a deceitful title and description (e.g. 'Partnership with Leading Web3 Accelerator \u2014 1,000 PSG Grant'), but encodes a malicious transaction in the `calldatas` array (e.g. calling `token.approve(attacker, type(uint256).max)` or `treasury.release(attacker, 100,000 PSG)`). Voters who only read the English markdown description vote For. To defend against this, governance dashboards (like Tally) must: 1) Decode raw calldatas against verified contract ABIs; 2) Display exact recipient addresses, transfer amounts, and method signatures; 3) Highlight unrecognized contract addresses or suspicious privileged functions.",
    "takeaway": "Never trust markdown proposal descriptions; always verify decoded calldata targets, function selectors, and parameters."
  },
  {
    "id": "iq11",
    "question": "What is the role of an Emergency Security Council in governance architecture, and what trust assumptions does it introduce?",
    "context": "Security Councils & Governance Circuit Breakers",
    "answer": "A Security Council is an elected committee of security experts and reputable community signers holding multi-sig keys (e.g. a 4-of-8 Safe). In the TimelockController, the council is granted the `CANCELLER_ROLE`. During the timelock delay, if a malicious proposal passes due to a smart contract bug, flash loan, or governance attack, the Security Council can call `timelock.cancel()` to abort execution. Trust Assumption: The council introduces a centralized trust vector: if a majority of the council colludes or is compromised, they can censor legitimate community proposals. Therefore, councils should have narrowly scoped powers, public transparency, and term limits.",
    "takeaway": "Security Councils provide vital emergency vetoes during attacks, trading pure decentralization for protocol survivability."
  },
  {
    "id": "iq12",
    "question": "Explain the concept of 'Delegation Capture' in token-weighted DAOs. How can protocols encourage decentralized delegate behavior?",
    "context": "Delegation Dynamics & Plutocracy",
    "answer": "Delegation Capture occurs when a handful of high-profile entities (venture capital funds, influential influencers, or protocol founders) accumulate massive delegated voting power from inactive retail token holders. Even if token ownership is widely distributed, 3 or 4 delegates may control >50% of the active voting power, effectively privatizing decision-making. Protocols combat this by: 1) Publishing transparent delegate voting scorecards (tracking attendance and reasoning); 2) Introducing delegate compensation tied to participation; 3) Splitting voting power across specialized sub-DAOs; 4) Supporting decay delegation or partial delegation.",
    "takeaway": "Concentrated delegation subverts token distribution; active transparency and delegation caps preserve community voice."
  },
  {
    "id": "iq13",
    "question": "Why is Ownable(timelockAddress) superior to multi-sig ownership for a production DAO treasury contract?",
    "context": "Treasury Architecture & Custody",
    "answer": "If a treasury is owned by a multi-sig (e.g. a 3-of-5 Safe), the multi-sig signers hold direct custodial authority over the funds. Even if the community votes against an expense, the multi-sig signers could theoretically sign a transaction and transfer funds. When the treasury contract inherits `Ownable(timelockAddress)`, the ONLY entity capable of calling `onlyOwner` functions (like `release()`) is the TimelockController contract itself. Transfers can execute ONLY if an on-chain proposal passes community voting and survives the mandatory timelock delay, eliminating custodial trust in human signers.",
    "takeaway": "Setting the TimelockController as treasury owner ensures funds move purely through programmatic community consensus."
  },
  {
    "id": "iq14",
    "question": "What legal liability do DAO token holders face if the DAO operates without a recognized legal wrapper entity?",
    "context": "DAO Law & Regulatory Compliance",
    "answer": "Under Anglo-American common law and continental civil law, an unincorporated group of individuals engaging in business activities for profit is classified by default as a **General Partnership**. In a general partnership, all partners face **joint and several personal liability** for any legal claims, debts, smart contract exploits, or copyright violations committed by the partnership. In the landmark *CFTC v. Ooki DAO* ruling (2023), the court affirmed that token holders who voted on governance proposals were personally liable as general partners. A legal wrapper (like an LLC or UNA) provides limited liability protection to insulate members.",
    "takeaway": "Without a legal wrapper, DAO voters risk unlimited personal joint-and-several liability for protocol actions."
  },
  {
    "id": "iq15",
    "question": "What is a 'Low-Turnout Attack' in DAO governance, and what mathematical mechanisms prevent it?",
    "context": "Voter Turnout & Governance Attack Vectors",
    "answer": "A Low-Turnout Attack occurs when a protocol has a large total token supply (e.g. 10M tokens) with a fixed, low quorum (e.g. 2% = 200k tokens), but normal community turnout is very low (e.g. 150k votes). An attacker accumulates 250k tokens (just 2.5% of total supply) and submits a malicious proposal during a holiday. Because regular members are inactive, the attacker easily reaches quorum and passes the proposal with 100% of the cast votes. Mitigations: 1) Dynamic Quorum: scaling required quorum with proposal impact or recent voting turnout; 2) Extended voting periods; 3) Automated notifications via Discord/Telegram bots; 4) Mandatory timelocks.",
    "takeaway": "Fixed low quorums leave protocols defenseless against minority token accumulations during voter lulls."
  },
  {
    "id": "iq16",
    "question": "Compare OpenZeppelin GovernorVotesQuorumFraction with custom Dynamic Quorum implementations.",
    "context": "Governor Modules & Quorum Design",
    "answer": "GovernorVotesQuorumFraction calculates quorum as a static fraction of the total voting supply at the snapshot block (e.g. `quorum = totalSupply * fraction / 100`). It is simple, gas-efficient, and deterministic. However, if token supply grows or turnout drops, the static fraction may become unachievable or dangerously low. Dynamic Quorum modules adjust required quorum dynamically based on: 1) Market volatility; 2) Value of treasury funds requested; 3) Direction of votes (requiring higher quorum if Against votes are significant); or 4) Historical participation averages. Dynamic quorums prevent low-turnout takeovers for high-value proposals.",
    "takeaway": "Static quorum fractions suit standard operations; high-value treasury proposals benefit from dynamic quorum scaling."
  },
  {
    "id": "iq17",
    "question": "How do you defend a DAO against Vote Buying and Bribing markets (e.g. Votium, Bribe.crv)?",
    "context": "Bribe Markets & Game Theory",
    "answer": "Vote buying occurs when third parties pay token holders (in secondary tokens or yield) to vote for their proposals (e.g. adding liquidity gauge incentives in Curve wars). While economically rational, it can lead to misallocated protocol resources. Defenses include: 1) Vote Escrow (ve-tokenomics): requiring long lockups (up to 4 years) so bribed voters share long-term protocol risk; 2) Secret / Shielded Voting: using MACI (Minimum Anti-Collusion Infrastructure) with zero-knowledge proofs where votes are encrypted and un-provable to bribers; 3) Constitutional prohibitions and conflict-of-interest disclosures.",
    "takeaway": "MACI encryption eliminates vote buying by making it cryptographically impossible for voters to prove how they voted to a briber."
  },
  {
    "id": "iq18",
    "question": "What are the advantages and disadvantages of using a Soulbound Token (SBT) for DAO membership governance?",
    "context": "Decentralized Identity & Soulbound Tokens",
    "answer": "Soulbound Tokens (ERC-5192) are non-transferable NFTs bound permanently to an individual wallet. Advantages: 1) Perfectly prevents token financialization: voting power cannot be bought, sold, or flash-loaned on secondary markets; 2) Facilitates one-person-one-vote and contribution-based meritocratic governance; 3) Natural resistance against plutocratic takeovers. Disadvantages: 1) If an individual's private key is compromised, their identity and voting rights are lost unless social recovery is built; 2) Sybil vulnerability: creating multiple wallets still requires off-chain identity verification.",
    "takeaway": "Soulbound governance decouples voting power from capital, enabling pure merit-based community decision-making."
  },
  {
    "id": "iq19",
    "question": "Explain the concept of 'Sub-DAOs' or Working Groups and why monolithic DAOs transition toward decentralized modular governance.",
    "context": "Organizational Scaling & Sub-DAOs",
    "answer": "Monolithic DAOs (where all 50,000 token holders vote on every tiny expense from marketing logos to smart contract audits) suffer from severe governance fatigue and decision paralysis. Sub-DAOs (or Working Groups) solve this by partitioning authority: 1) A Grants Sub-DAO receives a fixed quarterly budget and autonomously evaluates developer applications; 2) A Risk Sub-DAO adjusts collateral parameters; 3) A Technical Sub-DAO manages contract deployments. Token holders vote once every quarter on global budgets and committee elections, delegating domain-specific execution to specialized teams.",
    "takeaway": "Sub-DAOs scale governance by replacing monolithic micro-voting with quarterly budgets and autonomous specialized working groups."
  },
  {
    "id": "iq20",
    "question": "What is the difference between TimelockController minDelay and Governor votingDelay / votingPeriod?",
    "context": "Governor Timing Parameters",
    "answer": "`votingDelay()` is the time (in blocks or seconds) between proposal submission and the start of voting, giving community members time to read the proposal and acquire voting power. `votingPeriod()` is the duration during which eligible accounts can cast votes. `minDelay` is the mandatory time an approved proposal must sit in the TimelockController queue AFTER voting concludes successfully before it can be executed on-chain. Together, they create three sequential defensive windows: Review Window -> Voting Window -> Execution Waiting Window.",
    "takeaway": "Voting delay prepares the vote; voting period collects the vote; timelock delay protects execution."
  },
  {
    "id": "iq21",
    "question": "How does a DAO handle Emergency Protocol Pausing when a critical smart contract vulnerability is discovered?",
    "context": "Incident Response & Emergency Governance",
    "answer": "On-chain governance votes take 5 to 7 days, which is far too slow to stop an active reentrancy or bridge drain occurring in seconds. Modern protocols implement a two-tier access architecture: 1) The Protocol contract inherits `Pausable` and OpenZeppelin `AccessControl`; 2) An Emergency Security Council multi-sig holds `PAUSER_ROLE`, allowing them to pause contracts immediately upon detecting an exploit; 3) Unpausing or upgrading the contract requires a full on-chain community proposal passing through Governor and TimelockController. The multi-sig can only halt the bleeding; the community retains exclusive authority to fix and resume.",
    "takeaway": "Separating emergency pausing (fast multi-sig) from unpausing and upgrades (slow DAO vote) balances agility with decentralization."
  },
  {
    "id": "iq22",
    "question": "Explain how Zodiac Reality (SafeSnap) bridges off-chain Snapshot votes to on-chain Safe multisig execution.",
    "context": "Off-Chain to On-Chain Execution Bridges",
    "answer": "Zodiac Reality connects Snapshot to an on-chain Safe: 1) A proposal passes on Snapshot; 2) An automated relayer posts the proposed transactions to an on-chain Reality oracle module on the Safe, staking a bond; 3) A challenge period (e.g. 24-48 hours) begins during which anyone can dispute the proposal by doubling the bond if the transaction does not match the Snapshot result; 4) If undisputed (or confirmed by an arbitration layer like Kleros or UMA), the Safe executes the transaction without requiring multi-sig signer approvals.",
    "takeaway": "SafeSnap uses optimistic bonded oracle bridges to translate gasless Snapshot votes into trustless on-chain execution."
  },
  {
    "id": "iq23",
    "question": "What is 've-Tokenomics' (Vote-Escrowed Tokens, pioneered by Curve Finance), and how does it align governance incentives?",
    "context": "ve-Tokenomics & Long-Term Alignment",
    "answer": "In ve-tokenomics, users lock their liquid tokens (CRV) into a non-transferable escrow contract for a chosen duration (from 1 week up to 4 years). In exchange, they receive `veCRV` (Vote-Escrowed CRV). Voting power and protocol fee shares scale linearly with lock duration: locking 1 token for 4 years yields 1 veCRV, while locking for 1 year yields 0.25 veCRV. Over time, veCRV voting power decays linearly toward zero unless re-locked. This eliminates short-term mercenary capital and speculative governance attacks, aligning voting power strictly with long-term protocol believers.",
    "takeaway": "ve-Tokenomics scales voting power by commitment time, forcing governors to share long-term downside risk."
  },
  {
    "id": "iq24",
    "question": "What are the common smart contract auditing pitfalls when reviewing custom Governor implementations?",
    "context": "Smart Contract Auditing & Governance Vulnerabilities",
    "answer": "1) Checkpoint Off-by-One: using `block.number` instead of `block.number - 1` for snapshots, allowing same-block token transfers to double-vote; 2) Missing Reentrancy Protection on `execute()`: malicious external target contracts re-entering the Governor; 3) Unvalidated Calldata Arrays: mismatched lengths between `targets`, `values`, and `calldatas`; 4) Unchecked Return Values on low-level `call()`: allowing failed execution steps to silently succeed; 5) Role Hijacking: failing to revoke deployer permissions on the timelock; 6) Zero-quorum bypass: edge cases where total voting supply drops to zero.",
    "takeaway": "Always use battle-tested OpenZeppelin Governor modules rather than writing custom governance dispatchers from scratch."
  },
  {
    "id": "iq25",
    "question": "Explain the concept of 'Forkability' as the ultimate check on malicious DAO governance.",
    "context": "Forking & Ultimate Exit Rights",
    "answer": "In Web3, open-source code and permissionless state ledgers guarantee the ultimate check against corrupt or captured governance: **The Hard Fork**. If a 51% majority cartel hijacks a DAO, drains funds, or imposes predatory fees, the minority community (including core developers and users) can fork the smart contracts and state database, deploying a clean version of the protocol with the malicious cartel's tokens slashed or excluded. This concept of 'Ragequit' (pioneered by MolochDAO) ensures that governors rule only with the continuous consent of the governed.",
    "takeaway": "Forkability is the ultimate decentralized guarantee: if governance becomes corrupt, the community can fork and rebuild."
  }
];
const NUMERICAL_PROBLEMS = [
  {
    "id": "np1",
    "title": "Problem 1: Quorum & Majority Calculation in GovernorCountingSimple",
    "question": "A DAO has an active voting supply of 1,000,000 PSG tokens. The Governor contract is configured with a 4% Quorum requirement (GovernorVotesQuorumFraction(4)) and uses GovernorCountingSimple. On Proposal #042, the final vote tally is: For = 32,000 votes, Against = 45,000 votes, Abstain = 12,000 votes. 1) Calculate the required Quorum in votes. 2) Determine the total votes counted toward Quorum under GovernorCountingSimple rules. 3) State whether Quorum was reached and whether the proposal Passed or Failed.",
    "variables": [
      "Total Voting Supply = 1,000,000 PSG",
      "Quorum Percentage = 4% = 0.04",
      "For Votes = 32,000",
      "Against Votes = 45,000",
      "Abstain Votes = 12,000"
    ],
    "steps": [
      "Step 1: Calculate Required Quorum: 1,000,000 * 0.04 = 40,000 votes.",
      "Step 2: Calculate Votes Counted Toward Quorum in GovernorCountingSimple: Only For and Abstain votes count toward quorum! QuorumVotes = For + Abstain = 32,000 + 12,000 = 44,000 votes. (Against votes of 45,000 are EXCLUDED from quorum).",
      "Step 3: Evaluate Quorum: 44,000 >= 40,000 -> Quorum is REACHED.",
      "Step 4: Evaluate Majority Condition: A proposal passes if and only if For > Against. Here: For (32,000) < Against (45,000).",
      "Step 5: Final Determination: While Quorum was reached, the proposal FAILED the majority vote (32,000 For vs 45,000 Against)."
    ],
    "finalAnswer": "Required Quorum: 40,000 | Counted Quorum: 44,000 (Quorum Reached) | Outcome: FAILED (Against > For)"
  },
  {
    "id": "np2",
    "title": "Problem 2: Quadratic Voting vs Token-Weighted Voting Power Comparison",
    "question": "A DAO is deciding whether to allocate a $100,000 grant. The community consists of 1 Whale holding 10,000 credits, and 100 Small Contributors holding 100 credits each (10,000 credits total across the 100 members). The Whale votes AGAINST the grant; all 100 Small Contributors vote FOR the grant. Calculate: 1) The voting outcome under standard Token-Weighted voting (Votes = Credits). 2) The voting outcome under Quadratic Voting (Votes = sqrt(Credits)). 3) The percentage voting share of the community under both models.",
    "variables": [
      "Whale Credits = 10,000 (Votes Against)",
      "Small Contributors = 100 members, 100 credits each (Votes For)",
      "Total Community Credits = 100 * 100 = 10,000 credits"
    ],
    "steps": [
      "Step 1: Token-Weighted Voting: Whale Votes = 10,000 Against. Community Votes = 100 * 100 = 10,000 For. Total Votes = 20,000. Result: 10,000 For vs 10,000 Against (50% vs 50% deadlock).",
      "Step 2: Quadratic Voting: Whale Votes = sqrt(10,000) = 100 Against votes.",
      "Step 3: Quadratic Community Votes: Each small contributor gets sqrt(100) = 10 votes. Total Community Votes = 100 members * 10 votes = 1,000 For votes.",
      "Step 4: Total Quadratic Votes = 1,000 For + 100 Against = 1,100 votes.",
      "Step 5: Community Voting Share: Under Token-Weighted: 10,000 / 20,000 = 50.0%. Under Quadratic: 1,000 / 1,100 = 90.91%."
    ],
    "finalAnswer": "Token-Weighted: 50% For vs 50% Against (Tie) | Quadratic: 90.91% For (1,000 votes) vs 9.09% Against (100 votes) \u2014 Grant APPROVED by overwhelming majority"
  },
  {
    "id": "np3",
    "title": "Problem 3: Proposal Threshold & Treasury Spending Authorization",
    "question": "A DAO has a total supply of 2,500,000 PSG tokens. The Governor sets a Proposal Threshold of 0.75% of total supply. An active developer holds 8,000 PSG tokens and receives delegated voting power from two colleagues holding 5,500 PSG and 6,000 PSG respectively. Calculate: 1) The minimum voting power required to create a proposal. 2) The developer's total effective voting power. 3) Determine whether the developer is authorized to create a proposal on-chain.",
    "variables": [
      "Total Token Supply = 2,500,000 PSG",
      "Proposal Threshold Percentage = 0.75% = 0.0075",
      "Developer Own Tokens = 8,000 PSG",
      "Delegation 1 = 5,500 PSG",
      "Delegation 2 = 6,000 PSG"
    ],
    "steps": [
      "Step 1: Calculate Minimum Proposal Threshold: 2,500,000 * 0.0075 = 18,750 PSG.",
      "Step 2: Calculate Developer's Total Effective Voting Power: Own Tokens + Received Delegations = 8,000 + 5,500 + 6,000 = 19,500 PSG.",
      "Step 3: Compare Effective Power against Threshold: 19,500 >= 18,750.",
      "Step 4: Result: The developer has 750 PSG above the threshold and is fully authorized to call `Governor.propose()`."
    ],
    "finalAnswer": "Required Threshold: 18,750 PSG | Effective Voting Power: 19,500 PSG | Status: AUTHORIZED to create proposals"
  },
  {
    "id": "np4",
    "title": "Problem 4: Timelock Waiting Window & Execution Deadline Mathematics",
    "question": "A DAO TimelockController enforces a `minDelay` of 48 hours (172,800 seconds) and an operation grace period of 14 days (1,209,600 seconds) before operations expire (becoming stale). Proposal #101 succeeds on-chain and is queued on Monday at timestamp 1,700,000,000 (12:00:00 UTC). Calculate: 1) The exact earliest timestamp when the proposal can be executed. 2) The exact expiration timestamp after which the proposal becomes stale and cannot be executed.",
    "variables": [
      "Queued Timestamp = 1,700,000,000",
      "minDelay = 48 hours = 172,800 seconds",
      "Grace Period = 14 days = 1,209,600 seconds"
    ],
    "steps": [
      "Step 1: Calculate Earliest Execution Timestamp (ETA): Queued Timestamp + minDelay = 1,700,000,000 + 172,800 = 1,700,172,800 (Wednesday 12:00:00 UTC).",
      "Step 2: Calculate Expiration Deadline: ETA + Grace Period = 1,700,172,800 + 1,209,600 = 1,701,382,400.",
      "Step 3: Total Execution Window: Between timestamp 1,700,172,800 and 1,701,382,400 (exactly 14 days)."
    ],
    "finalAnswer": "Earliest Execution (ETA): 1,700,172,800 (Wednesday 12:00 UTC) | Expiration Deadline: 1,701,382,400 (14 days later)"
  },
  {
    "id": "np5",
    "title": "Problem 5: Voting Power Concentration & Gini Coefficient Calculation",
    "question": "A DAO has 1,000,000 tokens distributed among 5 members: Member A = 400,000 (40%), Member B = 250,000 (25%), Member C = 200,000 (20%), Member D = 100,000 (10%), Member E = 50,000 (5%). For a simple majority proposal requiring >50% of voting tokens, calculate: 1) The minimum number of members needed to form a winning coalition. 2) Whether Member A and Member D together can pass a proposal without other members. 3) What coalition can block any proposal from passing.",
    "variables": [
      "Total Supply = 1,000,000 PSG",
      "Simple Majority Threshold = > 500,000 PSG (>50%)",
      "Holdings: A=400k, B=250k, C=200k, D=100k, E=50k"
    ],
    "steps": [
      "Step 1: Minimum winning coalition: Pair A (400k) + B (250k) = 650,000 tokens (65% > 50%). Pair A (400k) + C (200k) = 600,000 tokens (60% > 50%). Minimum members needed to win = 2 members.",
      "Step 2: Check Coalition A + D: 400k + 100k = 500,000 tokens. Exactly 50.0% is NOT a simple majority (requires > 500,000). A + D alone cannot pass a proposal.",
      "Step 3: Minimum blocking coalition: Any coalition controlling >= 500,000 tokens can block a proposal. Member A (400k) + any other member (e.g. E with 50k = 450k is not enough, but A + D = 500k) can block any proposal."
    ],
    "finalAnswer": "Minimum Winning Coalition: 2 members (A + B or A + C) | Coalition A + D: 50.0% (CANNOT pass alone) | Minimum Blocking: A + D (500k) or B + C + D (550k)"
  }
];

export default function BlockchainDAOsGovernance() {
  // Navigation Tabs
  const [activeTab, setActiveTab] = useState("theory");

  // Simulator 1 State: Governor Proposal & Voting Lifecycle Simulator
  const [govSimState, setGovSimState] = useState("Voting");
  const [memberVotes, setMemberVotes] = useState({
    alice: 1,
    bob: 0,
    charlie: 2,
    david: 1
  });
  const [simTreasuryBalance, setSimTreasuryBalance] = useState(100000);
  const [simRecipientBalance, setSimRecipientBalance] = useState(0);

  const weights = useMemo(() => ({
    alice: 400000,
    bob: 250000,
    charlie: 200000,
    david: 100000
  }), []);

  const tallyFor = useMemo(() => {
    return Object.keys(memberVotes).reduce((acc, k) => {
      return memberVotes[k] === 1 ? acc + weights[k] : acc;
    }, 0);
  }, [memberVotes, weights]);

  const tallyAgainst = useMemo(() => {
    return Object.keys(memberVotes).reduce((acc, k) => {
      return memberVotes[k] === 0 ? acc + weights[k] : acc;
    }, 0);
  }, [memberVotes, weights]);

  const tallyAbstain = useMemo(() => {
    return Object.keys(memberVotes).reduce((acc, k) => {
      return memberVotes[k] === 2 ? acc + weights[k] : acc;
    }, 0);
  }, [memberVotes, weights]);

  // OpenZeppelin GovernorCountingSimple Quorum rule: For + Abstain count; Against does NOT count!
  const countedQuorumVotes = tallyFor + tallyAbstain;
  const isQuorumReached = countedQuorumVotes >= 40000;

  const handleCastMemberVote = useCallback((key, val) => {
    setMemberVotes((prev) => ({ ...prev, [key]: val }));
  }, []);

  const handleFinishVoting = useCallback(() => {
    if (isQuorumReached && tallyFor > tallyAgainst) {
      setGovSimState("Succeeded");
    } else {
      setGovSimState("Defeated");
    }
  }, [isQuorumReached, tallyFor, tallyAgainst]);

  const handleQueueProposal = useCallback(() => {
    setGovSimState("Queued");
  }, []);

  const handleExecuteProposal = useCallback(() => {
    setGovSimState("Executed");
    setSimTreasuryBalance(99900);
    setSimRecipientBalance(100);
  }, []);

  const resetGovernorSim = useCallback(() => {
    setGovSimState("Voting");
    setMemberVotes({ alice: 1, bob: 0, charlie: 2, david: 1 });
    setSimTreasuryBalance(100000);
    setSimRecipientBalance(0);
  }, []);

  // Simulator 2 State: Quadratic Voting vs Token-Weighted
  const [whaleCredits, setWhaleCredits] = useState(10000);
  const [communityCount, setCommunityCount] = useState(100);
  const [communityCreditsEach, setCommunityCreditsEach] = useState(100);

  // Token-Weighted calculations
  const twWhaleVotes = whaleCredits;
  const twCommunityVotes = communityCount * communityCreditsEach;
  const twTotalVotes = twWhaleVotes + twCommunityVotes;
  const _twWhaleShare = twTotalVotes > 0 ? (twWhaleVotes / twTotalVotes) * 100 : 0;
  const twCommunityShare = twTotalVotes > 0 ? (twCommunityVotes / twTotalVotes) * 100 : 0;

  // Quadratic calculations
  const quadWhaleVotes = Math.floor(Math.sqrt(whaleCredits));
  const quadCommunityVotes = communityCount * Math.floor(Math.sqrt(communityCreditsEach));
  const quadTotalVotes = quadWhaleVotes + quadCommunityVotes;
  const quadWhaleShare = quadTotalVotes > 0 ? (quadWhaleVotes / quadTotalVotes) * 100 : 0;
  const quadCommunityShare = quadTotalVotes > 0 ? (quadCommunityVotes / quadTotalVotes) * 100 : 0;

  // Simulator 3 State: Timelock Handover
  const [handoverStage, setHandoverStage] = useState(0);

  // Simulator 4 State: Attack and Defense Sandbox
  const [govAttackMode, setGovAttackMode] = useState("flashloan");

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
      const saved = localStorage.getItem("prepspaces_blockchain_m21_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = useCallback((id) => {
    setChecklist((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m21_progress", JSON.stringify(next));
      } catch {
        // ignore localstorage errors
      }
      return next;
    });
  }, []);

  const resetChecklist = useCallback(() => {
    setChecklist({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m21_progress");
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
      <ModuleNav track="blockchain" currentModuleId="daos-governance" />
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
            <span>Module 21 · DAOs & Governance</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 space-y-8 sm:space-y-10">
        {/* Module Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
            <Vote className="w-3.5 h-3.5" />
            <span>BLOCKCHAIN DEVELOPMENT • ADVANCED LEVEL • WEB3 GOVERNANCE &amp; DECENTRALIZED ORGANIZATIONS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Module 21 — DAOs &amp; Blockchain Governance
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
            A comprehensive, university-grade study of Decentralized Autonomous Organizations, ERC20Votes historical checkpointing, OpenZeppelin Governor architectures, TimelockController security delegation, quadratic and conviction voting mathematics, treasury safety protocols, governance exploits, and international legal wrappers. Build and audit an end-to-end DAO governance system on Ethereum Sepolia.
          </p>
        </div>

        {activeTab === "simulators" ? (
          <div>
            
        {/* Interactive Simulators Section */}
        <section id="simulators" className="space-y-12">
          <div className="border-b border-neutral-200 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide mb-2">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>HANDS-ON PROTOCOL LABS & SIMULATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Interactive DAO Governance & Voting Simulators
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">
              Experiment with end-to-end proposal lifecycles, quadratic vs token-weighted voting, timelock sovereign role handovers, and flash-loan governance defense.
            </p>
          </div>

          {/* Simulator 1: Governor Proposal & Voting Lifecycle */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Governor Lifecycle & Quorum Simulator</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Walk through proposal creation, voting, quorum evaluation, timelock queue, and execution.</p>
              </div>
              <button
                type="button"
                onClick={resetGovernorSim}
                className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
              >
                Reset Simulation
              </button>
            </div>

            {/* Stepper Status Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono">
              {[
                { step: "Created", label: "1. Proposed" },
                { step: "Voting", label: "2. Active Voting" },
                { step: "Succeeded", label: "3. Succeeded" },
                { step: "Queued", label: "4. Timelock Queue" },
                { step: "Executed", label: "5. Executed" }
              ].map((s, idx) => {
                const isActive = govSimState === s.step;
                const isPassed =
                  (s.step === "Created" && govSimState !== "Created") ||
                  (s.step === "Voting" && (govSimState === "Succeeded" || govSimState === "Queued" || govSimState === "Executed")) ||
                  (s.step === "Succeeded" && (govSimState === "Queued" || govSimState === "Executed")) ||
                  (s.step === "Queued" && govSimState === "Executed") ||
                  govSimState === "Executed";

                return (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isActive
                        ? "bg-amber-600 text-white border-amber-600 font-bold shadow-sm"
                        : isPassed
                        ? "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold"
                        : "bg-neutral-50 text-neutral-400 border-neutral-200"
                    }`}
                  >
                    {s.label}
                  </div>
                );
              })}
            </div>

            {/* Voting Controls for 4 Key Members */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono font-bold text-neutral-700">
                <span>Cast Member Votes (Total Supply = 1,000,000 PSG):</span>
                <span className="text-amber-700">Quorum Target: 40,000 (4%)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: "Alice", weight: 400000, key: "alice" },
                  { name: "Bob", weight: 250000, key: "bob" },
                  { name: "Charlie", weight: 200000, key: "charlie" },
                  { name: "David", weight: 100000, key: "david" }
                ].map((m) => (
                  <div key={m.key} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs font-mono">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-neutral-900">{m.name}</span>
                      <span className="text-[10px] text-neutral-500">{m.weight.toLocaleString()} PSG</span>
                    </div>
                    <div className="flex gap-1">
                      {[
                        { label: "For", val: 1, color: "bg-emerald-600 text-white" },
                        { label: "Against", val: 0, color: "bg-red-600 text-white" },
                        { label: "Abstain", val: 2, color: "bg-neutral-600 text-white" }
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          disabled={govSimState !== "Created" && govSimState !== "Voting"}
                          onClick={() => handleCastMemberVote(m.key, opt.val)}
                          className={`flex-1 py-1 rounded text-[11px] font-bold transition-all ${
                            memberVotes[m.key] === opt.val
                              ? opt.color
                              : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Tally & Quorum Analysis */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono">
                <div className="text-emerald-800 font-bold uppercase text-[10px]">For Votes (1)</div>
                <div className="text-lg font-bold text-emerald-950 mt-1">{tallyFor.toLocaleString()} PSG</div>
              </div>
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-mono">
                <div className="text-red-800 font-bold uppercase text-[10px]">Against Votes (0)</div>
                <div className="text-lg font-bold text-red-950 mt-1">{tallyAgainst.toLocaleString()} PSG</div>
              </div>
              <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono">
                <div className="text-neutral-600 font-bold uppercase text-[10px]">Abstain Votes (2)</div>
                <div className="text-lg font-bold text-neutral-900 mt-1">{tallyAbstain.toLocaleString()} PSG</div>
              </div>
              <div className={`p-3 rounded-xl border text-xs font-mono ${
                isQuorumReached ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-amber-50 border-amber-300 text-amber-950"
              }`}>
                <div className="font-bold uppercase text-[10px]">Quorum (For + Abstain)</div>
                <div className="text-lg font-bold mt-1">
                  {countedQuorumVotes.toLocaleString()} / 40,000
                </div>
                <div className="text-[10px] mt-0.5">
                  {isQuorumReached ? "QUORUM REACHED" : "Quorum Pending"}
                </div>
              </div>
            </div>

            {/* Lifecycle Execution Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {govSimState === "Voting" && (
                <button
                  type="button"
                  onClick={handleFinishVoting}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-mono font-bold transition-all"
                >
                  Close Voting Period (10 Blocks Elapsed)
                </button>
              )}

              {govSimState === "Succeeded" && (
                <button
                  type="button"
                  onClick={handleQueueProposal}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm"
                >
                  Queue in TimelockController (60s Delay)
                </button>
              )}

              {govSimState === "Queued" && (
                <button
                  type="button"
                  onClick={handleExecuteProposal}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm animate-pulse"
                >
                  Execute Proposal (Release 100 PSG from Treasury)
                </button>
              )}
            </div>

            {/* Treasury Balance Banner */}
            <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                Treasury Balance: <strong className="text-amber-400">{simTreasuryBalance.toLocaleString()} PSG</strong> (Initially 100,000 PSG)
              </div>
              <div>
                Recipient Balance: <strong className="text-emerald-400">{simRecipientBalance.toLocaleString()} PSG</strong>
              </div>
              <div className="text-neutral-400 text-[11px]">
                Owner: <code>TimelockController</code>
              </div>
            </div>
          </div>

          {/* Simulator 2: Quadratic Voting vs. Token-Weighted Voting Engine */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 2</span>
              <h3 className="text-xl font-bold text-neutral-900">Quadratic Voting vs. Token-Weighted Voting Engine</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Model how Quadratic Voting (Cost = Votes^2) eliminates whale plutocracy and empowers community consensus.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Whale Token Credits (Votes Against)</span>
                    <span className="text-red-600">{whaleCredits.toLocaleString()} Credits</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="40000"
                    step="1000"
                    value={whaleCredits}
                    onChange={(e) => setWhaleCredits(Number(e.target.value))}
                    className="w-full accent-red-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Number of Community Contributors</span>
                    <span className="text-emerald-600">{communityCount} Members</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="10"
                    value={communityCount}
                    onChange={(e) => setCommunityCount(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold text-neutral-700 mb-1">
                    <span>Credits per Community Member (Votes For)</span>
                    <span className="text-emerald-600">{communityCreditsEach} Credits each</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="400"
                    step="10"
                    value={communityCreditsEach}
                    onChange={(e) => setCommunityCreditsEach(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Graphical Comparison Cards */}
              <div className="space-y-4">
                {/* Token-Weighted Result */}
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 font-mono text-xs">
                  <div className="flex justify-between font-bold text-neutral-900">
                    <span>1. Token-Weighted Voting (1 Credit = 1 Vote)</span>
                    <span className={twCommunityShare >= 50 ? "text-emerald-700" : "text-red-700"}>
                      {twCommunityShare >= 50 ? "Community Passes" : "Whale Vetoes"}
                    </span>
                  </div>
                  <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-emerald-600" style={{ width: `${twCommunityShare}%` }} />
                    <div className="h-full bg-red-600" style={{ width: `${100 - twCommunityShare}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500">
                    <span>Community: {twCommunityVotes.toLocaleString()} votes ({twCommunityShare.toFixed(1)}%)</span>
                    <span>Whale: {whaleCredits.toLocaleString()} votes ({(100 - twCommunityShare).toFixed(1)}%)</span>
                  </div>
                </div>

                {/* Quadratic Voting Result */}
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 space-y-2 font-mono text-xs">
                  <div className="flex justify-between font-bold text-purple-950">
                    <span>2. Quadratic Voting (Votes = &radic;Credits)</span>
                    <span className="text-emerald-700 font-bold">Community Dominates</span>
                  </div>
                  <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden flex">
                    <div className="h-full bg-emerald-600" style={{ width: `${quadCommunityShare}%` }} />
                    <div className="h-full bg-red-600" style={{ width: `${100 - quadCommunityShare}%` }} />
                  </div>
                  <div className="flex justify-between text-[11px] text-purple-900">
                    <span>Community: {Math.round(quadCommunityVotes).toLocaleString()} votes ({quadCommunityShare.toFixed(1)}%)</span>
                    <span>Whale: {Math.round(quadWhaleVotes).toLocaleString()} votes ({(100 - quadWhaleShare).toFixed(1)}%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simulator 3: TimelockController Role Handover & Security Auditor */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 3</span>
              <h3 className="text-xl font-bold text-neutral-900">TimelockController Role Handover & Security Auditor</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Step through the critical 4-stage role handover that removes deployer backdoors from governance.</p>
            </div>

            {/* Handover Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
              {[
                { stage: 0, title: "Stage 0: Post-Deploy", desc: "Deployer has all roles; Governor has none.", risk: "CRITICAL RISK" },
                { stage: 1, title: "Stage 1: Grant Roles", desc: "Governor granted PROPOSER & CANCELLER.", risk: "INCOMPLETE" },
                { stage: 2, title: "Stage 2: Revoke Roles", desc: "Deployer PROPOSER & CANCELLER revoked.", risk: "INCOMPLETE" },
                { stage: 3, title: "Stage 3: Renounce Admin", desc: "Deployer renounces DEFAULT_ADMIN.", risk: "SOVEREIGN & SECURE" }
              ].map((st) => (
                <button
                  key={st.stage}
                  type="button"
                  onClick={() => setHandoverStage(st.stage)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    handoverStage === st.stage
                      ? "bg-neutral-900 text-white border-neutral-900 font-bold shadow-sm"
                      : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-wider opacity-70">{st.title}</div>
                  <div className="mt-1 text-[11px] leading-tight">{st.desc}</div>
                  <div className={`mt-2 text-[10px] font-bold ${
                    st.stage === 3 ? "text-emerald-400" : "text-amber-400"
                  }`}>
                    {st.risk}
                  </div>
                </button>
              ))}
            </div>

            {/* Live Role Table for Active Stage */}
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                  <tr>
                    <th className="p-3">Entity Address</th>
                    <th className="p-3">PROPOSER_ROLE</th>
                    <th className="p-3">CANCELLER_ROLE</th>
                    <th className="p-3">DEFAULT_ADMIN_ROLE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700 bg-white">
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">Deployer EOA</td>
                    <td className="p-3">
                      {handoverStage < 2 ? (
                        <span className="text-red-700 font-bold">YES (Backdoor!)</span>
                      ) : (
                        <span className="text-emerald-700 font-bold">REVOKED</span>
                      )}
                    </td>
                    <td className="p-3">
                      {handoverStage < 2 ? (
                        <span className="text-red-700 font-bold">YES (Backdoor!)</span>
                      ) : (
                        <span className="text-emerald-700 font-bold">REVOKED</span>
                      )}
                    </td>
                    <td className="p-3">
                      {handoverStage < 3 ? (
                        <span className="text-red-700 font-bold">YES (Admin Backdoor!)</span>
                      ) : (
                        <span className="text-emerald-700 font-bold">RENOUNCED (0x0)</span>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-neutral-900">MyGovernor Contract</td>
                    <td className="p-3">
                      {handoverStage >= 1 ? (
                        <span className="text-emerald-700 font-bold">GRANTED</span>
                      ) : (
                        <span className="text-neutral-400">Not granted</span>
                      )}
                    </td>
                    <td className="p-3">
                      {handoverStage >= 1 ? (
                        <span className="text-emerald-700 font-bold">GRANTED</span>
                      ) : (
                        <span className="text-neutral-400">Not granted</span>
                      )}
                    </td>
                    <td className="p-3 font-mono text-neutral-400">None (Separation of concerns)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Simulator 4: DAO Governance Attack & Defense Sandbox */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">Simulator 4</span>
                <h3 className="text-xl font-bold text-neutral-900">DAO Governance Attack & Defense Sandbox</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Simulate flash loan voting manipulation, trojan horse calldata payloads, and low turnout attacks.</p>
              </div>
              <div className="flex items-center gap-2">
                {["flashloan", "trojan", "turnout"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setGovAttackMode(mode)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      govAttackMode === mode
                        ? "bg-neutral-900 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {mode === "flashloan" ? "Flash Loan Attack" : mode === "trojan" ? "Trojan Calldata" : "Low Turnout Takeover"}
                  </button>
                ))}
              </div>
            </div>

            {govAttackMode === "flashloan" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950 leading-relaxed">
                  <strong>Attack Scenario:</strong> Attacker borrows 5,000,000 governance tokens via an uncollateralized flash loan from Aave, creates a proposal to drain the treasury, votes with 5M tokens, and repays the loan within the same block.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-red-950 flex items-center justify-between">
                      <span>Vulnerable: token.balanceOf(voter)</span>
                      <span className="px-2 py-0.5 rounded bg-red-200 text-red-900 font-bold">DRAINED ($182M)</span>
                    </div>
                    <div className="text-neutral-700">Contract reads current block balance.</div>
                    <div className="text-red-700 font-bold">Attacker Voting Power: 5,000,000 Votes</div>
                    <div className="text-[11px] text-red-800">The flash loan passes the proposal instantly. Attacker drains treasury and repays flash loan in same tx! (Beanstalk exploit pattern).</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2 font-mono text-xs">
                    <div className="font-bold text-emerald-950 flex items-center justify-between">
                      <span>Secure: ERC20Votes Historical Checkpoints</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold">PROTECTED</span>
                    </div>
                    <div className="text-neutral-700">Contract queries <code>getPastVotes(voter, proposalSnapshot)</code>.</div>
                    <div className="text-emerald-700 font-bold">Attacker Voting Power: 0 Votes</div>
                    <div className="text-[11px] text-emerald-800">At the proposal's snapshot block, attacker had 0 tokens. The flash loan grants 0 historical voting weight. Attack completely neutralized!</div>
                  </div>
                </div>
              </div>
            )}

            {govAttackMode === "trojan" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs font-mono text-purple-950 leading-relaxed">
                  <strong>Trojan Horse Payload:</strong> Attacker submits proposal titled "Community Grant: Fund Developer Documentation". However, the encoded calldata target is <code>DAOTreasury</code> with an unauthorized transfer of 100,000 PSG.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                    <div className="font-bold text-red-950">Naive UI: Display Markdown Only</div>
                    <div className="text-neutral-700">Voters see: "Grant to fund docs ($1,000)".</div>
                    <div className="text-red-700 font-bold">Community Votes: FOR (Deceived)</div>
                    <div className="text-[11px] text-red-800">Approved proposal executes raw calldata, transferring 100,000 PSG to attacker instead of 1,000 PSG!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="font-bold text-emerald-950">Secure UI: Decoded Calldata Inspector</div>
                    <div className="text-neutral-700">Decodes <code>calldatas[0]</code> against ABI:</div>
                    <code className="text-red-700 font-bold block bg-white p-2 rounded border border-emerald-300">
                      release(0xAttacker..., 100000 ether)
                    </code>
                    <div className="text-[11px] text-emerald-800">Voters spot payload mismatch! Proposal overwhelmingly rejected with 100% AGAINST votes.</div>
                  </div>
                </div>
              </div>
            )}

            {govAttackMode === "turnout" && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono text-blue-950 leading-relaxed">
                  <strong>Low-Turnout Minority Takeover:</strong> During a holiday period, normal voter turnout drops to only 15,000 votes. An attacker controlling 35,000 votes (3.5% of total supply) submits a malicious proposal.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                    <div className="font-bold text-red-950">Vulnerable: Static Low Quorum (2% = 20,000)</div>
                    <div className="text-neutral-700">Attacker votes 35,000 FOR.</div>
                    <div className="text-red-700 font-bold">Outcome: Quorum Reached (35k &gt; 20k)</div>
                    <div className="text-[11px] text-red-800">With 0 community members active, proposal passes 35,000 to 0 and takes over the DAO!</div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="font-bold text-emerald-950">Secure: 48-Hour Timelock + Security Council</div>
                    <div className="text-neutral-700">Proposal is scheduled in TimelockController.</div>
                    <div className="text-emerald-700 font-bold">Outcome: Emergency Veto (Cancelled)</div>
                    <div className="text-[11px] text-emerald-800">The 4-of-8 Security Council detects the low-turnout anomaly during the 48-hour delay and invokes <code>timelock.cancel()</code>!</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

          </div>
        ) : (
          <div className="space-y-16">
            
        {/* Theory Section Container */}
        <section id="theory" className="space-y-16">
{/* Part 1: Introduction to DAOs */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 1</span>
              <span>•</span>
              <span>DECENTRALIZED ORGANIZATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              1. Introduction to Decentralized Autonomous Organizations
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">1.1 What is a DAO?</h3>
              <p>
                A <strong>Decentralized Autonomous Organization (DAO)</strong> is an organization that coordinates people, resources, and decisions using blockchain technology, tokenomics, and smart contracts rather than centralized executive hierarchies.
              </p>
              <p>
                In traditional organizations, critical decisions—such as corporate budgeting, resource allocation, structural reorganizations, and product roadmaps—are determined exclusively by founders, executive management, and boards of directors. In a DAO, these responsibilities can be distributed among community members through blockchain-based governance mechanisms, smart contracts, voting systems, and programmatic treasury controls.
              </p>

              {/* Concrete Scenario Callout */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold font-mono text-xs uppercase tracking-wider">
                  <span>Concrete Architectural Scenario: Treasury Allocation</span>
                </div>
                <p className="text-sm text-neutral-800 leading-relaxed">
                  Imagine a Web3 development organization with <strong>10,000 members</strong>. The organization maintains an on-chain treasury holding <strong>$1,000,000 worth of digital assets</strong>. Members want to decide whether <strong>$100,000</strong> should be allocated to developing a new blockchain product.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white border border-amber-200">
                    <div className="font-bold text-neutral-900 mb-1 text-red-700">Traditional Corporate Flow</div>
                    <p className="text-neutral-600">Executive board and CEO approve behind closed doors &rarr; Corporate wire transfer issued &rarr; No shareholder transparency &rarr; Opaque internal audit.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-amber-200">
                    <div className="font-bold text-neutral-900 mb-1 text-emerald-700">Decentralized DAO Flow</div>
                    <p className="text-neutral-600">1. Member crafts proposal &rarr; 2. Community debate &rarr; 3. Token-weighted voting &rarr; 4. Quorum validation &rarr; 5. Timelock delay &rarr; 6. Smart contract releases $100k.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm italic text-neutral-600">
                The core principle: Organizational decisions can be made transparently through predefined governance rules encoded directly into immutable smart contracts.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.2 Why Were DAOs Created?</h3>
              <p>
                Traditional corporations feature top-down, centralized decision-making:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Traditional Corporate Model]:<br />
                  CEO & Board &rarr; Management Team &rarr; Department Heads &rarr; Employees &rarr; Passive Shareholders<br /><br />
                  [Decentralized Autonomous Organization Model]:<br />
                  DAO Community &rarr; Governance Members &rarr; Proposals &rarr; Voting &rarr; Governance Contract &rarr; Timelock &rarr; Autonomous Treasury Execution
                </code>
              </div>
              <p>
                DAOs emerged as an alternative organizational paradigm enabled by blockchain technology. Their core objectives include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-white p-4 rounded-xl border border-neutral-200">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Transparent Decisions:</strong> Every vote and contract interaction is logged permanently on-chain.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Community Participation:</strong> Direct member influence without corporate intermediaries.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Distributed Ownership:</strong> Protocol ownership and value accrual shared with users.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Publicly Verifiable Governance:</strong> Logic is open-source and auditable on block explorers.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Programmable Treasury:</strong> Direct smart contract asset custody prevents unilateral theft.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Reduced Administrator Dependence:</strong> Protocols can operate autonomously for decades.</li>
              </ul>

              {/* Research Reality Check Callout */}
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 space-y-1">
                <span className="font-bold font-mono uppercase tracking-wide">Empirical Governance Research (Decentralization in Practice):</span>
                <p>
                  However, a DAO is not automatically decentralized merely because it uses a smart contract. A small group of large token holders (whales) can still control outcomes if voting power is heavily concentrated. Research examining <strong>10,639 proposals across 151 DAOs</strong> found that a small number of entities often exercise substantial influence over proposal outcomes. Real decentralization requires intentional token distribution, delegation ecosystems, and defensive governance architecture.
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.3 Six Characteristics of a DAO</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">1. Decentralized Governance</div>
                  <p className="text-neutral-600">Decision-making power is distributed across members rather than concentrated in a corporate board.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">2. Radical Transparency</div>
                  <p className="text-neutral-600">Proposals, votes, treasury balances, and contract upgrades are recorded publicly on-chain.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">3. Smart Contract Execution</div>
                  <p className="text-neutral-600">Decisions are enforced and executed through deterministic code without trusting third parties.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">4. Community Participation</div>
                  <p className="text-neutral-600">Stakeholders can submit proposals, debate governance strategies, and participate in voting.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">5. Treasury Management</div>
                  <p className="text-neutral-600">Smart contracts control collective digital assets that can only be unlocked via approved proposals.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-amber-900">6. Programmable Rules</div>
                  <p className="text-neutral-600">Voting thresholds, quorums, timelock delays, and execution rules are defined mathematically in code.</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">1.4 Real-World Production DAO Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Uniswap Governance</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">UNI</span>
                  </div>
                  <p className="text-neutral-600">
                    Governs protocol fee switches, multi-hundred-million dollar grant treasuries, and authorized protocol deployments across Layer 2 networks.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">MakerDAO / Sky</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">MKR / SKY</span>
                  </div>
                  <p className="text-neutral-600">
                    Manages stability fees, collateral onboarding parameters, real-world asset allocations, and global monetary policy for DAI / USDS.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">ENS DAO</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">ENS</span>
                  </div>
                  <p className="text-neutral-600">
                    Controls the Ethereum Name Service `.eth` registrar pricing, public goods endowment distributions, and emergency security council elections.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-neutral-900 text-sm">Aave Governance</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900">AAVE</span>
                  </div>
                  <p className="text-neutral-600">
                    Governs risk parameters (LTV, liquidation thresholds, borrow caps), interest rate models, and cross-chain execution bridges across 12+ blockchains.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2: DAO Architecture */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 2</span>
              <span>•</span>
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              2. DAO Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">2.1 Core Components of a DAO</h3>
              <p>
                A production-ready DAO is not a single smart contract; it is a coordinated ecosystem of modular, specialized smart contracts and interface layers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">1. Governance Token:</strong> Represents voting power (e.g., ERC20Votes with historical checkpoints).
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">2. Proposal System:</strong> Mechanism to introduce actionable upgrades, parameter shifts, and fund requests.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">3. Voting System:</strong> Method used to calculate voter participation and tally votes (For/Against/Abstain).
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">4. Governance Smart Contract:</strong> Central coordinator managing proposals, voting windows, and status checks.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">5. Timelock Contract:</strong> Imposes a mandatory delay before executing approved decisions to safeguard users.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">6. Treasury:</strong> Smart contract vault storing digital assets, unlockable only via timelock-approved calls.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">7. Multisignature Wallet:</strong> Multi-owner safe used for operational spending and emergency oversight.
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <strong className="text-neutral-900">8. Governance Interface:</strong> User front-end (e.g., Tally, Snapshot, custom DApp) for easy interaction.
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">2.2 Technical Architecture Diagram</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Token Holder]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (Connect Wallet / View Dashboard)<br />
                  [Governance Interface (DApp / Tally / Snapshot)]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (Submit Proposal / Cast Vote)<br />
                  [Governor Smart Contract]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Checks token balance via [ERC20Votes Token Checkpoints]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Validates Proposal Threshold & Voting Period<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Tallies votes and evaluates Quorum<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (If Succeeded: Queue in Timelock)<br />
                  [TimelockController Contract]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Mandatory Delay (e.g., 48 Hours for Community Review)<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Emergency cancellation power held by Security Council<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (After Delay: Execute calldata)<br />
                  [DAO Treasury / Protocol Target Contracts]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Transfers grant funds or executes protocol parameter upgrades!
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">2.3 Responsibilities of Each Component</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Component</th>
                      <th className="p-3">Primary Responsibility</th>
                      <th className="p-3">Key Smart Contract Functions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">ERC20Votes Token</td>
                      <td className="p-3 text-neutral-600">Maintains historic snapshot of voting weight; manages delegation.</td>
                      <td className="p-3 text-neutral-800"><code>getPastVotes()</code>, <code>delegate()</code>, <code>checkpoints()</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Governor Contract</td>
                      <td className="p-3 text-neutral-600">Proposal lifecycle coordinator, vote receipt, quorum check.</td>
                      <td className="p-3 text-neutral-800"><code>propose()</code>, <code>castVote()</code>, <code>queue()</code>, <code>execute()</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">TimelockController</td>
                      <td className="p-3 text-neutral-600">Enforces execution delay; acts as the final caller of protocol upgrades.</td>
                      <td className="p-3 text-neutral-800"><code>schedule()</code>, <code>execute()</code>, <code>cancel()</code></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Treasury Vault</td>
                      <td className="p-3 text-neutral-600">Holds protocol assets; restricted strictly to Timelock calls.</td>
                      <td className="p-3 text-neutral-800"><code>releaseFunds()</code>, <code>transferERC20()</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">2.4 On-Chain and Off-Chain Governance Architecture</h3>
              <p>
                Modern Web3 protocols generally adopt a dual-architecture design:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <span className="font-bold text-amber-900 text-sm">On-Chain Governance (Governor / Timelock)</span>
                  <p className="text-neutral-600 leading-relaxed">
                    Used for binding high-stakes actions: smart contract parameter changes, treasury expenditures, and protocol upgrades. Requires gas fees for proposals and votes, ensuring absolute cryptographic certainty and trustless on-chain execution.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <span className="font-bold text-amber-900 text-sm">Off-Chain Governance (Snapshot + SafeSnap)</span>
                  <p className="text-neutral-600 leading-relaxed">
                    Used for temperature checks, community signaling, advisory polls, and low-cost everyday decision-making. Votes are gasless cryptographic signatures stored on IPFS, later validated optimistically or enforced by multisig signers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 3: Decentralized Governance */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 3</span>
              <span>•</span>
              <span>GOVERNANCE LIFECYCLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              3. Decentralized Governance
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">3.1 What Decisions Does a DAO Govern?</h3>
              <p>
                Decentralized governance is the structured process by which stakeholders collectively steer a protocol. Key protocol decisions governed include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">1. Smart contract upgrades</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">2. Treasury fund disbursement</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">3. Protocol fee adjustments</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">4. Risk & collateral limits</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">5. Liquidity mining incentives</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">6. Partnership agreements</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">7. Security council elections</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">8. Governance rule changes</div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">3.2 The 8-Stage Governance Lifecycle</h3>
              <p>
                A rigorous proposal must navigate an eight-stage lifecycle to prevent rushed decisions, malicious takeovers, and unintended bugs:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  Stage 1: Idea Formation &rarr; Informal discussion in Discourse / Discord forums.<br />
                  Stage 2: Request for Comments (RFC) &rarr; Formal draft with technical specs and budget.<br />
                  Stage 3: Off-Chain Temperature Check &rarr; Gasless Snapshot poll to gauge community support.<br />
                  Stage 4: Formal On-Chain Submission &rarr; Proposer calls `propose()` meeting proposal threshold.<br />
                  Stage 5: Voting Delay &rarr; Mandatory window (e.g., 2 days) allowing token holders to acquire or delegate voting power.<br />
                  Stage 6: Voting Period &rarr; Active window (e.g., 5 days) where members call `castVote()`.<br />
                  Stage 7: Quorum & Tally Evaluation &rarr; Verification that quorum is met and For &gt; Against.<br />
                  Stage 8: Timelock Queue & Execution &rarr; Proposal queued in Timelock; after delay, `execute()` triggers bytecode!
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">3.3 Governance Participation Models</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="font-bold text-amber-900 mb-1">Direct Voting</div>
                  <p className="text-neutral-600">Every token holder votes directly on every individual proposal. Leads to voter fatigue in active protocols.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="font-bold text-amber-900 mb-1">Delegated Voting</div>
                  <p className="text-neutral-600">Token holders delegate voting power to elected representatives without transferring token custody.</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="font-bold text-amber-900 mb-1">Committee / SubDAO</div>
                  <p className="text-neutral-600">Specialized working groups handle micro-decisions (e.g., grants, risk modeling) under DAO oversight.</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">3.4 Decentralization vs. Participation Trade-Off</h3>
              <p>
                A central challenge in decentralized governance is the tension between decentralization and voter participation. When governance demands constant attention on complex technical parameters, voter apathy sets in, dropping turnout below 5%. This empowers small, motivated whale cartels. Balancing simple delegation mechanisms with transparent security oversight is the primary task of modern governance engineering.
              </p>
            </div>
          </div>

          {/* Part 4: Governance Token Models */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 4</span>
              <span>•</span>
              <span>TOKENOMICS & CHECKPOINTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              4. Governance Token Models
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">4.1 What is a Governance Token?</h3>
              <p>
                A <strong>governance token</strong> grants its holder the cryptographic right to influence protocol decisions. Voting power is typically proportional to token holdings or delegated voting weight.
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Member</th>
                      <th className="p-3">Tokens Held</th>
                      <th className="p-3">Share of Total Supply</th>
                      <th className="p-3">Voting Influence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Alice (Early Contributor)</td>
                      <td className="p-3">400,000</td>
                      <td className="p-3">40%</td>
                      <td className="p-3 text-amber-900 font-bold">Can single-handedly meet 4% quorum</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Bob (Institutional Backer)</td>
                      <td className="p-3">250,000</td>
                      <td className="p-3">25%</td>
                      <td className="p-3">Substantial swing voting weight</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Charlie (Core Developer)</td>
                      <td className="p-3">200,000</td>
                      <td className="p-3">20%</td>
                      <td className="p-3">Substantial technical steering weight</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">David (Active Community Member)</td>
                      <td className="p-3">100,000</td>
                      <td className="p-3">10%</td>
                      <td className="p-3">Can submit proposals (&gt; 1% threshold)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Community Retail Pool</td>
                      <td className="p-3">50,000</td>
                      <td className="p-3">5%</td>
                      <td className="p-3">Requires collective delegation to impact outcomes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">4.2 ERC-20 vs. ERC20Votes: The Double-Voting Vulnerability</h3>
              <p>
                A standard ERC-20 token is <strong>unsuitable for on-chain governance</strong> due to double-voting and flash-loan attacks.
              </p>
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-950 space-y-2">
                <div className="font-bold uppercase tracking-wider">The Standard ERC-20 Double-Voting Exploit:</div>
                <p>
                  1. Attacker holds 100,000 standard ERC-20 tokens in Wallet A.<br />
                  2. Attacker votes FOR Proposal #1 using Wallet A.<br />
                  3. In the same block or subsequent block, Attacker transfers 100,000 tokens to Wallet B.<br />
                  4. Attacker votes FOR Proposal #1 again using Wallet B!<br />
                  5. Total voting power exercised: 200,000 votes from only 100,000 tokens.
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">4.3 ERC20Votes Architecture: Historical Checkpoints</h3>
              <p>
                To eliminate double-voting and flash-loan manipulation, OpenZeppelin&apos;s <code>ERC20Votes</code> extension implements an internal historical ledger using binary-searchable <strong>Checkpoints</strong>:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  struct Checkpoint &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;uint48 _key; // Block number or timestamp<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;uint208 _value; // Voting power recorded at that key<br />
                  &#125;<br /><br />
                  // Query historical voting weight pinned at proposal snapshot block:<br />
                  function getPastVotes(address account, uint256 timepoint) external view returns (uint256);
                </code>
              </div>
              <p>
                When a proposal is submitted, its <strong>snapshot timepoint</strong> is permanently fixed. Any tokens transferred or borrowed after that timepoint have zero effect on the proposal&apos;s outcome!
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">4.4 Token Models & Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Model</th>
                      <th className="p-3">Primary Use</th>
                      <th className="p-3">Pros</th>
                      <th className="p-3">Cons / Risks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Fixed Supply</td>
                      <td className="p-3">Pure governance rights, no inflation.</td>
                      <td className="p-3">Predictable dilution; protects early holders.</td>
                      <td className="p-3">Cannot easily incentivize new future contributors.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Inflationary Supply</td>
                      <td className="p-3">Ongoing liquidity & contributor grants.</td>
                      <td className="p-3">Sustained funding for ecosystem expansion.</td>
                      <td className="p-3">Dilutes passive holders; risk of runaway inflation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">veToken (Vote-Escrowed)</td>
                      <td className="p-3">Long-term lockups (e.g., Curve veCRV).</td>
                      <td className="p-3">Aligns long-term incentives; eliminates mercenary votes.</td>
                      <td className="p-3">Capital inefficiency; illiquidity for participants.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 5: Proposal Creation */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 5</span>
              <span>•</span>
              <span>PROPOSAL LIFECYCLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              5. Proposal Creation
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">5.1 What is a Governance Proposal?</h3>
              <p>
                A <strong>governance proposal</strong> is a formal on-chain request to alter the state of a blockchain protocol. If passed and executed, the proposal causes the Timelock or Governor contract to issue low-level calls (with encoded calldata) to target contracts.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">5.2 Anatomy of an On-Chain Proposal (11 Core Fields)</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Field</th>
                      <th className="p-3">Solidity Type</th>
                      <th className="p-3">Description & Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">1. Proposal ID</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Unique hash derived from keccak256(targets, values, calldatas, descriptionHash).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">2. Proposer</td>
                      <td className="p-3 text-amber-800">address</td>
                      <td className="p-3">Address initiating the proposal (must satisfy proposal threshold).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">3. Target Addresses</td>
                      <td className="p-3 text-amber-800">address[]</td>
                      <td className="p-3">Contracts that will be invoked upon execution (e.g., DAOTreasury).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">4. ETH Values</td>
                      <td className="p-3 text-amber-800">uint256[]</td>
                      <td className="p-3">Ether / native currency transmitted with each call (usually 0 for token transfers).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">5. Calldatas</td>
                      <td className="p-3 text-amber-800">bytes[]</td>
                      <td className="p-3">ABI-encoded function selector and arguments (e.g., `release(recipient, amount)`).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">6. Start Timepoint</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Block number or timestamp when active voting commences.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">7. End Timepoint</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Block number or timestamp when voting concludes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">8. Proposal Threshold</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Minimum voting power required to call `propose()`.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">9. Quorum Required</td>
                      <td className="p-3 text-amber-800">uint256</td>
                      <td className="p-3">Minimum non-against votes required for proposal validity.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">10. Description Hash</td>
                      <td className="p-3 text-amber-800">bytes32</td>
                      <td className="p-3">Keccak256 hash of markdown proposal title and IPFS link.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">11. State</td>
                      <td className="p-3 text-amber-800">enum ProposalState</td>
                      <td className="p-3">Pending, Active, Canceled, Defeated, Succeeded, Queued, Expired, Executed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">5.3 Concrete Production Proposal Example: DAO Proposal #024</h3>
              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-neutral-900 text-sm">DAO Proposal #024: Fund Web3 Developer Education ($50,000 USDC)</div>
                <p className="text-neutral-600"><strong>Target:</strong> 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 (USDC Token Contract)</p>
                <p className="text-neutral-600"><strong>Function Call:</strong> <code>transfer(address recipient, uint256 amount)</code></p>
                <p className="text-neutral-600"><strong>Recipient:</strong> 0x71C...B29 (PrepSpaces Education Guild)</p>
                <p className="text-neutral-600"><strong>Calldata:</strong> <code>0xa9059cbb00000000000000000000000071c...0000000000000000000000000000000000000000000000000000000ba43b7400</code> ($50,000 * 10^6)</p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">5.4 Proposal Creation in Solidity</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  function propose(<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;address[] memory targets,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;uint256[] memory values,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;bytes[] memory calldatas,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;string memory description<br />
                  ) public returns (uint256 proposalId);
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">5.5 Proposal Threshold</h3>
              <p>
                The <strong>proposal threshold</strong> is the minimum amount of voting tokens an address must hold or represent via delegation to submit a proposal.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950">
                Example: If total voting supply = 1,000,000 tokens, and proposal threshold = 1%, an account must control at least <strong>10,000 votes</strong> at the time of proposal creation. This stops griefing attacks and proposal spam that would otherwise exhaust voter attention.
              </div>
            </div>
          </div>

          {/* Part 6: Voting Mechanisms */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 6</span>
              <span>•</span>
              <span>VOTING MECHANISMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              6. Voting Mechanisms
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                DAOs employ various voting mechanisms to balance democratic fairness, capital commitment, and resistance to plutocracy:
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-2">6.1 Token-Weighted Voting (1 Token = 1 Vote)</h3>
              <p>
                The default mechanism in most DeFi protocols. If you hold 10,000 tokens, you cast 10,000 votes.
              </p>
              <div className="p-3 rounded-lg bg-neutral-100 text-xs font-mono">
                Formula: V_i = B_i (Voting power equals token balance)
              </div>
              <p className="text-xs text-neutral-600">
                <strong>Advantage:</strong> Aligns capital risk with protocol stewardship.<br />
                <strong>Disadvantage:</strong> Vulnerable to plutocratic capture where whales dictate all decisions.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.2 One-Member-One-Vote</h3>
              <p>
                Every verified identity receives exactly one vote regardless of capital holdings.
              </p>
              <p className="text-xs text-neutral-600">
                <strong>Advantage:</strong> Completely egalitarian; immune to whale dominance.<br />
                <strong>Disadvantage:</strong> Strictly requires Sybil resistance (e.g., Proof of Humanity, WorldID, or soulbound KYC tokens); capital providers may avoid participating without proportional risk representation.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.3 Quadratic Voting (Cost = Votes&sup2;)</h3>
              <p>
                In <strong>quadratic voting</strong>, the marginal cost of casting additional votes increases quadratically:
              </p>
              <div className="p-3 rounded-lg bg-neutral-100 text-xs font-mono">
                Formula: Cost = V^2 &hArr; Voting Power = &radic;Tokens
              </div>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-2">Desired Votes</th>
                      <th className="p-2">Token Cost Required (V&sup2;)</th>
                      <th className="p-2">Marginal Cost for Next Vote</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr><td className="p-2">1 vote</td><td className="p-2">1 token</td><td className="p-2">3 tokens</td></tr>
                    <tr><td className="p-2">2 votes</td><td className="p-2">4 tokens</td><td className="p-2">5 tokens</td></tr>
                    <tr><td className="p-2">3 votes</td><td className="p-2">9 tokens</td><td className="p-2">7 tokens</td></tr>
                    <tr><td className="p-2">4 votes</td><td className="p-2">16 tokens</td><td className="p-2">9 tokens</td></tr>
                    <tr><td className="p-2">5 votes</td><td className="p-2">25 tokens</td><td className="p-2">11 tokens</td></tr>
                    <tr><td className="p-2">10 votes</td><td className="p-2">100 tokens</td><td className="p-2">21 tokens</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-neutral-600">
                Quadratic voting allows members to express the <em>intensity</em> of their preference while drastically curtailing whale dominance. However, it strictly requires Sybil resistance, as an attacker with 100 tokens could split them into 100 wallets with 1 token each to gain 100 votes instead of 10 votes.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.4 Conviction Voting</h3>
              <p>
                A continuous voting mechanism where voting weight accumulates over time as long as a member leaves their tokens staked behind a proposal. Eliminates discrete proposal deadlines and prevents last-minute flash-loan attacks.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">6.5 Comparison of Voting Systems</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Mechanism</th>
                      <th className="p-3">Whale Resistance</th>
                      <th className="p-3">Sybil Resistance Req.</th>
                      <th className="p-3">Implementation Complexity</th>
                      <th className="p-3">Primary Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Token-Weighted</td>
                      <td className="p-3 text-red-600 font-bold">Low</td>
                      <td className="p-3 text-emerald-700">None (Capital bound)</td>
                      <td className="p-3">Low (OpenZeppelin standard)</td>
                      <td className="p-3">DeFi protocol parameter governance</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">One-Member-One-Vote</td>
                      <td className="p-3 text-emerald-700 font-bold">High</td>
                      <td className="p-3 text-red-600 font-bold">Mandatory</td>
                      <td className="p-3">High (Identity oracles)</td>
                      <td className="p-3">Social DAOs, co-ops, municipal voting</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Quadratic Voting</td>
                      <td className="p-3 text-emerald-700 font-bold">High</td>
                      <td className="p-3 text-red-600 font-bold">Mandatory</td>
                      <td className="p-3">Medium-High</td>
                      <td className="p-3">Gitcoin public goods grant allocations</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-amber-900">Conviction Voting</td>
                      <td className="p-3 text-emerald-700 font-bold">Medium</td>
                      <td className="p-3 text-emerald-700">None</td>
                      <td className="p-3">High (Continuous math)</td>
                      <td className="p-3">Commons Stack community budgeting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 7: On-Chain Voting */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 7</span>
              <span>•</span>
              <span>ON-CHAIN EXECUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              7. On-Chain Voting
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">7.1 What is On-Chain Voting?</h3>
              <p>
                In <strong>on-chain voting</strong>, every ballot is cast by sending an Ethereum transaction directly to the Governor smart contract. The vote is mined into a block, verifiable by any node, and stored immutably on the ledger.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">7.2 Architecture & Voting Methods</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  // Standard on-chain vote:<br />
                  function castVote(uint256 proposalId, uint8 support) external returns (uint256 balance);<br /><br />
                  // Vote with public textual justification:<br />
                  function castVoteWithReason(uint256 proposalId, uint8 support, string calldata reason) external returns (uint256 balance);<br /><br />
                  // Gasless off-chain meta-transaction submitted by a relayer:<br />
                  function castVoteBySig(uint256 proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s) external returns (uint256 balance);
                </code>
              </div>
              <p className="text-xs font-mono">
                Support options in OpenZeppelin <code>GovernorCountingSimple</code>:<br />
                <code>0 = Against</code> | <code>1 = For</code> | <code>2 = Abstain</code>
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">7.3 Trade-Offs of On-Chain Voting</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                  <div className="font-bold">Advantages</div>
                  <p>&bull; 100% Trustless and censorship-resistant.<br />&bull; Automatic binding execution through smart contract bytecode.<br />&bull; Zero reliance on external relayer infrastructure or multisig signers.</p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-1">
                  <div className="font-bold">Disadvantages</div>
                  <p>&bull; Gas fees must be paid for every vote (can cost $10-$50 on Ethereum mainnet during congestion).<br />&bull; Dampens retail participation, driving turnout down.<br />&bull; Public vote tallies can create herd bias during active voting.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 8: Off-Chain Voting */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 8</span>
              <span>•</span>
              <span>GASLESS SIGNATURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              8. Off-Chain Voting
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">8.1 What is Off-Chain Voting?</h3>
              <p>
                In <strong>off-chain voting</strong>, token holders do not send on-chain transactions. Instead, they sign an <strong>EIP-712 structured message</strong> with their private key using their Web3 wallet. These signatures are indexed by decentralized storage networks like IPFS and tallied off-chain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                  <div className="font-bold">Advantages</div>
                  <p>&bull; <strong>Zero Gas Fees:</strong> Voting is 100% free for all participants.<br />&bull; <strong>High Participation:</strong> Dramatically boosts community turnout.<br />&bull; <strong>Flexible Voting Strategies:</strong> Supports quadratic, weighted, or whitelist algorithms computed dynamically off-chain.</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1">
                  <div className="font-bold">Disadvantages</div>
                  <p>&bull; <strong>Non-Binding by Default:</strong> Signatures do not directly trigger smart contract bytecode.<br />&bull; Requires a trusted multisig (e.g. Safe) or an optimistic execution bridge (SafeSnap / Zodiac Reality) to enact outcomes on-chain.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 9: Snapshot Fundamentals */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 9</span>
              <span>•</span>
              <span>SNAPSHOT INTEGRATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              9. Snapshot Fundamentals
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">9.1 What is Snapshot?</h3>
              <p>
                <strong>Snapshot</strong> is the industry-standard off-chain decentralized governance platform. It allows DAOs to configure spaces linked to ENS domains, define custom voting strategies, and conduct gasless cryptographic polls.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="font-bold text-amber-900">Snapshot Spaces:</span> Tied to an ENS domain (e.g., <code>prepspaces.eth</code>). Stores admins, strategies, and proposal thresholds.
                </div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="font-bold text-amber-900">Voting Strategies:</span> JavaScript modules that read blockchain state at a specific snapshot block (e.g., <code>erc20-balance-of</code>, <code>erc20-votes</code>, <code>multichain</code>).
                </div>
                <div className="p-3 bg-white rounded-xl border border-neutral-200">
                  <span className="font-bold text-amber-900">IPFS Pinning:</span> All proposals and vote signatures are permanently published to decentralized storage for public auditability.
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">9.2 Comparison: Snapshot vs. On-Chain Governor</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Feature</th>
                      <th className="p-3">Snapshot (Off-Chain)</th>
                      <th className="p-3">OpenZeppelin Governor (On-Chain)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Gas Cost to Vote</td>
                      <td className="p-3 text-emerald-700 font-bold">$0 (Free EIP-712 Signature)</td>
                      <td className="p-3 text-red-600 font-bold">Standard gas fees per transaction</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Execution Mechanism</td>
                      <td className="p-3">Optimistic oracle (SafeSnap) or Multisig Safe</td>
                      <td className="p-3 text-emerald-700 font-bold">Direct autonomous Timelock execution</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Security Model</td>
                      <td className="p-3">Signatures + IPFS integrity + oracle verification</td>
                      <td className="p-3 text-emerald-700 font-bold">Ethereum consensus & EVM state transition</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Turnout Profile</td>
                      <td className="p-3 text-emerald-700 font-bold">High (accessible to small retail holders)</td>
                      <td className="p-3">Moderate to Low (dominated by delegates & whales)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 10: Voting Power Calculation */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 10</span>
              <span>•</span>
              <span>VOTING POWER CALCULATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              10. Voting Power Calculation
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">10.1 Mathematical Formulas & Delegation</h3>
              <p>
                In an ERC20Votes token system, a user&apos;s active voting weight is determined by their <strong>delegated votes checkpointed at the proposal snapshot block</strong>:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  // Effective voting power at proposal snapshot:<br />
                  VP(account, timepoint) = token.getPastVotes(account, timepoint)<br /><br />
                  // If Bob holds 10,000 tokens and Alice delegates 40,000 tokens to Bob:<br />
                  VP(Bob) = 10,000 + 40,000 = 50,000 votes<br />
                  VP(Alice) = 0 votes (Delegated to Bob)
                </code>
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-950">
                <strong>Critical Rule:</strong> Simply owning an ERC20Votes token does <em>not</em> grant voting power until the token holder calls <code>delegate(account)</code>. To vote with your own tokens, you must <strong>self-delegate</strong>: <code>token.delegate(msg.sender)</code>!
              </div>
            </div>
          </div>
{/* Part 11: Delegated Voting */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 11</span>
              <span>•</span>
              <span>LIQUID DEMOCRACY & DELEGATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              11. Delegated Voting
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">11.1 Understanding Delegation</h3>
              <p>
                <strong>Delegation</strong> (often called liquid democracy) allows a token holder to assign their voting weight to another address (a delegate) without giving up custody or ownership of their underlying tokens.
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [Alice: 100,000 PSG Tokens]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&darr; (Calls `token.delegate(Bob)`)<br />
                  [Bob: Delegate Representative]<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Exercises 100,000 votes in DAO proposals<br />
                  &nbsp;&nbsp;&nbsp;&bull; Alice retains 100% custody of PSG tokens and can transfer or undelegate at any time!
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">11.2 Delegation Mechanics in Solidity</h3>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  // Assign all voting weight to a chosen delegate:<br />
                  function delegate(address delegatee) public virtual;<br /><br />
                  // Gasless delegation via EIP-712 cryptographic signature:<br />
                  function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) public virtual;<br /><br />
                  // View current delegate of an account:<br />
                  function delegates(address account) public view virtual returns (address);
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">11.3 Advantages and Strategic Risks of Delegation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                  <div className="font-bold">Advantages</div>
                  <p>&bull; Solves voter apathy: token holders delegate to subject-matter experts.<br />&bull; Quorum is reached consistently on complex technical proposals.<br />&bull; Retains full token liquidity: tokens never leave the holder&apos;s wallet.</p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-1">
                  <div className="font-bold">Risks & Centralization</div>
                  <p>&bull; Delegate capture: A small cartel of 5-10 professional delegates control the protocol.<br />&bull; Passive delegator apathy: Holders forget who they delegated to years ago.<br />&bull; Vote bribing: Delegates may be bribed by external interests.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 12: Quorum Requirements */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 12</span>
              <span>•</span>
              <span>QUORUM MECHANICS & MATHEMATICS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              12. Quorum Requirements
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">12.1 What is Quorum?</h3>
              <p>
                <strong>Quorum</strong> is the minimum amount of voting power that must participate in a proposal for the election result to be legally valid and enforceable by the Governor contract.
              </p>
              <div className="p-4 rounded-xl bg-neutral-100 font-mono text-xs text-neutral-800 space-y-1">
                <div>Formula: Quorum = (Total Supply &times; Quorum Fraction) / 100</div>
                <div>Example: 1,000,000 total tokens with 4% quorum requirement = 40,000 votes required.</div>
              </div>

              {/* Critical OpenZeppelin Counting Simple Quorum Nuance */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 text-neutral-900 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold font-mono text-xs uppercase tracking-wider">
                  <span>Crucial Smart Contract Nuance: OpenZeppelin GovernorCountingSimple Quorum Formula</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  In OpenZeppelin&apos;s standard <code>GovernorCountingSimple</code> implementation:
                </p>
                <div className="p-3 bg-white rounded-xl border border-amber-300 font-mono text-xs text-neutral-900 space-y-1">
                  <div><strong>Quorum Reached Condition:</strong> <code>(votesFor + votesAbstain) &gt;= quorum(snapshotTimepoint)</code></div>
                  <div className="text-red-700 font-bold">NOTE: <code>votesAgainst</code> DO NOT COUNT toward reaching quorum!</div>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  <strong>Why was this designed?</strong> If &quot;Against&quot; votes counted toward quorum, opposing a proposal would help the proposal reach its validity threshold. Token holders wishing to defeat a proposal with low turnout might inadvertently validate it by voting &quot;Against&quot;. Hence, only &quot;For&quot; and &quot;Abstain&quot; votes establish the quorum baseline.
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">12.2 Scenario Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-2">
                  <div className="font-bold text-sm">Scenario A: Quorum Fails (Defeated)</div>
                  <p>Quorum Required: 100,000 votes<br />
                  For: 75,000 | Against: 15,000 | Abstain: 10,000<br />
                  Quorum Votes (For + Abstain) = 75k + 10k = 85,000.<br />
                  Result: 85,000 &lt; 100,000 &rarr; <strong>Defeated due to Lack of Quorum!</strong></p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
                  <div className="font-bold text-sm">Scenario B: Quorum Satisfied (Succeeded)</div>
                  <p>Quorum Required: 100,000 votes<br />
                  For: 90,000 | Against: 5,000 | Abstain: 10,000<br />
                  Quorum Votes (For + Abstain) = 90k + 10k = 100,000.<br />
                  For (90k) &gt; Against (5k) &rarr; <strong>Succeeded &amp; Ready to Queue!</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Part 13: Proposal Thresholds */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 13</span>
              <span>•</span>
              <span>PROPOSAL THRESHOLDS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              13. Proposal Thresholds
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">13.1 Anti-Spam Gatekeeping</h3>
              <p>
                The <strong>proposal threshold</strong> is the minimum voting weight an account must hold (directly or through delegation) at the time of calling <code>propose()</code>.
              </p>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Governance Parameter</th>
                      <th className="p-3">Proposal Threshold</th>
                      <th className="p-3">Quorum Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Purpose</td>
                      <td className="p-3">Prevents proposal spam & griefing attacks</td>
                      <td className="p-3">Ensures broad community legitimacy for decisions</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Evaluated At</td>
                      <td className="p-3">The exact block <code>propose()</code> is executed</td>
                      <td className="p-3">The conclusion of the active voting period</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Typical Production Range</td>
                      <td className="p-3">0.1% to 1.0% of total voting supply</td>
                      <td className="p-3">4.0% to 10.0% of total voting supply</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 14: Timelock Contracts */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 14</span>
              <span>•</span>
              <span>TIMELOCK CONTROLLER & SAFETY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              14. Timelock Contracts
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">14.1 What is a Timelock?</h3>
              <p>
                A <strong>timelock contract</strong> introduces an enforced delay (e.g., 24 to 72 hours) between the moment a governance proposal successfully passes and the moment its low-level bytecode can be executed on-chain.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">14.2 The Four Critical Roles of OpenZeppelin TimelockController</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Role Identifier</th>
                      <th className="p-3">Designated Entity</th>
                      <th className="p-3">Capability & Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">PROPOSER_ROLE</td>
                      <td className="p-3 text-amber-900 font-bold">MyGovernor Contract</td>
                      <td className="p-3">Can schedule and queue approved proposals into the timelock.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">EXECUTOR_ROLE</td>
                      <td className="p-3 text-emerald-800 font-bold">address(0) [Public Open]</td>
                      <td className="p-3">Allows anyone in the world to execute a proposal once minDelay elapses.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">CANCELLER_ROLE</td>
                      <td className="p-3 text-red-800 font-bold">Governor + Security Council</td>
                      <td className="p-3">Can cancel queued malicious proposals before execution.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-neutral-900">DEFAULT_ADMIN_ROLE</td>
                      <td className="p-3 text-neutral-900 font-bold">TimelockController itself</td>
                      <td className="p-3">Deployer MUST renounce; only the timelock itself can grant/revoke roles!</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">14.3 Why Timelocks Save Protocols (Rage-Quit Protection)</h3>
              <p>
                If an attacker somehow acquires enough voting power to pass a malicious proposal (such as draining the treasury), the 48-hour timelock provides an indispensable buffer:
              </p>
              <ul className="list-disc pl-5 text-xs font-mono space-y-1 text-neutral-700">
                <li><strong>Exit Window:</strong> Protocol users and liquidity providers can withdraw their funds from lending pools and AMMs before the malicious code executes.</li>
                <li><strong>Emergency Veto:</strong> The Security Council or multisig canceller can review the bytecode and call <code>cancel()</code> to neutralize the attack.</li>
              </ul>
            </div>
          </div>

          {/* Part 15: Treasury Management */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 15</span>
              <span>•</span>
              <span>PROGRAMMABLE TREASURY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              15. Treasury Management
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">15.1 What is a DAO Treasury?</h3>
              <p>
                A <strong>DAO treasury</strong> is a dedicated vault smart contract that holds digital assets (native ETH, ERC-20 stablecoins, governance tokens, and LP tokens). Its spending functions are strictly restricted so that only the Timelock contract can unlock funds.
              </p>
              <p className="text-xs font-mono">
                Eight common uses for DAO treasury funds:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">1. Core developer grants</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">2. Smart contract security audits</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">3. Bug bounty rewards</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">4. Protocol-owned liquidity</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">5. Operational contributor compensation</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">6. Marketing & education</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">7. RPC & indexing infrastructure</div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">8. Token buybacks & burns</div>
              </div>
            </div>
          </div>

          {/* Part 16: Multisignature Wallets */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 16</span>
              <span>•</span>
              <span>MULTISIGNATURE SECURITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              16. Multisignature Wallets
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">16.1 M-of-N Cryptographic Security</h3>
              <p>
                A <strong>multisignature wallet</strong> (such as Safe, formerly Gnosis Safe) requires <code>M</code> valid signatures from <code>N</code> authorized signer addresses before executing any transaction.
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [3-of-5 Multisig Configuration]:<br />
                  Signers: Alice, Bob, Charlie, David, Eve (N = 5)<br />
                  Threshold: 3 valid signatures required (M = 3)<br />
                  Transaction: Send 10,000 USDC to security audit firm<br />
                  Flow: Alice creates tx &rarr; Bob confirms &rarr; Charlie confirms &rarr; 3 signatures reached &rarr; Safe executes transaction!
                </code>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">16.2 Comparison: Multisig vs. DAO On-Chain Voting</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Attribute</th>
                      <th className="p-3">Multisignature Wallet (Safe)</th>
                      <th className="p-3">DAO On-Chain Voting (Governor)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold">Execution Speed</td>
                      <td className="p-3 text-emerald-700 font-bold">Fast (Minutes to hours)</td>
                      <td className="p-3">Slow (5-14 days including delay and timelock)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Gas Cost</td>
                      <td className="p-3 text-emerald-700 font-bold">Low (M on-chain signature executions)</td>
                      <td className="p-3">High (Hundreds of individual voter transactions)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Decentralization</td>
                      <td className="p-3 text-red-600 font-bold">Low (Concentrated among M signers)</td>
                      <td className="p-3 text-emerald-700 font-bold">High (Open to all token holders)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Ideal Use Case</td>
                      <td className="p-3">Operational expenses, emergency response</td>
                      <td className="p-3">Protocol upgrades, huge grants, monetary policy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 17: DAO Treasury Security */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 17</span>
              <span>•</span>
              <span>TREASURY DEFENSE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              17. DAO Treasury Security
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">17.1 Nine Treasury Security Controls</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Security Control</th>
                      <th className="p-3">Defensive Purpose</th>
                      <th className="p-3">Implementation Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr><td className="p-3 font-bold">1. Mandatory Timelocks</td><td className="p-3">Stops instant malicious treasury drainage</td><td className="p-3">MinDelay = 48-72 hours</td></tr>
                    <tr><td className="p-3 font-bold">2. Spending Limits & Caps</td><td className="p-3">Restricts max fund outflow per epoch</td><td className="p-3">Periodic rolling quota contracts</td></tr>
                    <tr><td className="p-3 font-bold">3. Multi-Tier Treasury</td><td className="p-3">Separates operational petty cash from main vault</td><td className="p-3">SubDAO multisigs funded in tranches</td></tr>
                    <tr><td className="p-3 font-bold">4. Calldata Decoders</td><td className="p-3">Prevents disguised malicious contract execution</td><td className="p-3">Interface simulation & verification bots</td></tr>
                    <tr><td className="p-3 font-bold">5. Security Council Veto</td><td className="p-3">Rapid cancel capability for malicious proposals</td><td className="p-3">CANCELLER_ROLE assigned to 4-of-8 multisig</td></tr>
                    <tr><td className="p-3 font-bold">6. Smart Contract Audits</td><td className="p-3">Catches reentrancy and logic vulnerabilities</td><td className="p-3">Independent audits + formal verification</td></tr>
                    <tr><td className="p-3 font-bold">7. Dynamic Quorum</td><td className="p-3">Requires higher quorum for larger fund requests</td><td className="p-3">Sliding scale based on spending size</td></tr>
                    <tr><td className="p-3 font-bold">8. SafeERC20 Protection</td><td className="p-3">Prevents reverts on non-standard ERC-20 tokens</td><td className="p-3">OpenZeppelin SafeERC20 library wrapper</td></tr>
                    <tr><td className="p-3 font-bold">9. Automated Circuit Breakers</td><td className="p-3">Pauses treasury on sudden balance outflows</td><td className="p-3">Chainlink automation monitoring net outflows</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 18: Governance Attacks */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 18</span>
              <span>•</span>
              <span>EXPLOIT VECTORS & ATTACK TAXONOMY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              18. Governance Attacks
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <p>
                Decentralized governance systems introduce a vast attack surface where economic capital, smart contract logic, and social engineering intersect:
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-2">18.1 Flash-Loan Governance Attacks</h3>
              <p>
                An attacker borrows millions of dollars in governance tokens via an uncollateralized flash loan, votes on a proposal or creates one, passes a malicious execution to drain the treasury, and repays the loan in the very same block.
              </p>
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-mono">
                <strong>Defense:</strong> Checkpointed voting power via <code>ERC20Votes</code> and a mandatory <code>votingDelay &gt;= 1 block</code>. By recording voting power at a historical block, tokens acquired in the current block have zero voting power!
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">18.2 Governance Takeover & Economic Exploit (The Beanstalk Model)</h3>
              <p>
                If a DAO treasury holds $50 million in USDC, but the total market cap of the governance token required to reach quorum is only $15 million, an attacker can purchase enough tokens on secondary DEXs to pass a malicious proposal that extracts the treasury.
              </p>
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-mono">
                <strong>Defense:</strong> Timelocks with 48h review windows, rage-quit mechanisms, and security councils equipped with cancel-only powers.
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">18.3 Trojan Horse Calldata Attacks</h3>
              <p>
                A proposal description claims to &quot;Update protocol staking parameters&quot;, but the encoded <code>calldatas</code> secretly invoke <code>transferOwnership()</code> to transfer protocol control to an attacker contract.
              </p>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">18.4 Governance Attack Comparison Matrix</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Attack Vector</th>
                      <th className="p-3">Vulnerability Exploited</th>
                      <th className="p-3">Real-World Precedent</th>
                      <th className="p-3">Defensive Countermeasure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-red-700">Flash-Loan Attack</td>
                      <td className="p-3">Instantaneous token balance voting</td>
                      <td className="p-3">Beanstalk Farms ($182M exploit)</td>
                      <td className="p-3">ERC20Votes historical checkpoints + voting delay</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-red-700">Governance Takeover</td>
                      <td className="p-3">Treasury value &gt; Quorum token market cap</td>
                      <td className="p-3">Build Finance DAO takeover</td>
                      <td className="p-3">Timelock rage-quit window + Emergency Veto</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-red-700">Trojan Calldata</td>
                      <td className="p-3">Opaque hex calldata in proposal</td>
                      <td className="p-3">Tornado Cash governance takeover</td>
                      <td className="p-3">Calldata simulation & human-readable decoders</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-red-700">Low-Turnout Takeover</td>
                      <td className="p-3">Low participation during holidays</td>
                      <td className="p-3">Multiple DeFi lending forks</td>
                      <td className="p-3">Dynamic quorum & minimum review timeframes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-red-700">Timelock Bypass</td>
                      <td className="p-3">Flawed permission checks on target</td>
                      <td className="p-3">Compound Proposal 082 bug</td>
                      <td className="p-3">Formal verification of access control modifiers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Part 19: Governance Manipulation & Defensive Mechanisms */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19</span>
              <span>•</span>
              <span>DEFENSIVE ARCHITECTURE & SECURITY COUNCILS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19. Governance Manipulation & Defensive Architecture
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">19.1 The Role of Security Councils (ENS 4-of-8 Precedent)</h3>
              <p>
                To prevent governance capture while avoiding centralized control, leading protocols deploy a <strong>Security Council</strong>:
              </p>
              <div className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  [DAO Community] &rarr; Elects 8 Reputable Security Experts<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Security Council assigned: CANCELLER_ROLE in TimelockController<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Multisig Threshold: 4-of-8 signatures required<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&bull; Restrictive Power: The Council CANNOT create proposals or execute transfers; they can ONLY VETO (cancel) queued malicious proposals during the timelock review window!
                </code>
              </div>
            </div>
          </div>

          {/* Part 20: DAO Legal and Organizational Considerations */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 20</span>
              <span>•</span>
              <span>LEGAL WRAPPERS & TAX LIABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              20. DAO Legal and Organizational Considerations
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
              <h3 className="text-lg font-bold text-neutral-900 font-mono">20.1 Are DAOs Legally Recognized Organizations?</h3>
              <p>
                By default, under general corporate law in most jurisdictions (including the United States and the United Kingdom), an unincorporated group of people cooperating for profit is deemed a <strong>General Partnership</strong>.
              </p>
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-950 space-y-2">
                <div className="font-bold uppercase tracking-wider">The Catastrophic General Partnership Risk:</div>
                <p>
                  In a general partnership, <strong>all partners bear joint and several personal liability</strong>. If a DAO is sued or suffers a exploit resulting in damages, every individual token holder who voted could theoretically have their personal personal bank accounts and assets seized to satisfy the legal judgment (as demonstrated in the CFTC v. Ooki DAO ruling).
                </p>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">20.2 Legal Wrapper Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">1. DAO LLC (Wyoming, Marshall Islands, Tennessee)</div>
                  <p className="text-neutral-600">Shields individual members with limited liability; recognizes smart contracts in articles of organization.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">2. Foundation Company (Cayman Islands, Panama, Switzerland)</div>
                  <p className="text-neutral-600">Orphan foundation with no shareholders; exists exclusively to serve the purpose of stewarding protocol development.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">3. UNA (Unincorporated Nonprofit Association)</div>
                  <p className="text-neutral-600">Offers limited liability in several US states without complex corporate registration for non-profit governance.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                  <div className="font-bold text-neutral-900">4. Cooperative (LCA / Swiss Verein)</div>
                  <p className="text-neutral-600">Aligns perfectly with democratic one-member-one-vote structures and member revenue sharing.</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">20.3 Eight Core Governance Policies</h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-800">
                    <tr>
                      <th className="p-3">Policy Framework</th>
                      <th className="p-3">Core Protective Objective</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 bg-white">
                    <tr><td className="p-3 font-bold">1. Code of Conduct</td><td className="p-3">Community behavior standards and conflict resolution</td></tr>
                    <tr><td className="p-3 font-bold">2. Conflict of Interest Policy</td><td className="p-3">Mandates disclosure when voting on proposals funding related parties</td></tr>
                    <tr><td className="p-3 font-bold">3. Contributor Agreement</td><td className="p-3">Assigns IP created by grant recipients to the open-source commons</td></tr>
                    <tr><td className="p-3 font-bold">4. Security Council Charter</td><td className="p-3">Codifies strictly when and how emergency vetoes may be deployed</td></tr>
                    <tr><td className="p-3 font-bold">5. Treasury Management Policy</td><td className="p-3">Defines stablecoin diversification rules and low-risk yields</td></tr>
                    <tr><td className="p-3 font-bold">6. Emergency Response Plan</td><td className="p-3">Outlines communication channels and pause powers during live exploits</td></tr>
                    <tr><td className="p-3 font-bold">7. Contributor Compensation Policy</td><td className="p-3">Standardizes hourly/monthly rates for bounty hunters and core dev teams</td></tr>
                    <tr><td className="p-3 font-bold">8. Privacy & Data Handling Policy</td><td className="p-3">Complies with GDPR and data regulations for off-chain voting telemetry</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 font-mono pt-4">20.4 Legal Landscape for Blockchain Projects in India</h3>
              <p>
                For developers and Web3 founders in India, DAO operations interface with specific statutory provisions:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-white p-4 rounded-xl border border-neutral-200">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>VDA Tax Regime:</strong> 30% flat tax on virtual digital asset gains under Section 115BBH; no deduction allowed except cost of acquisition.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>TDS Mandate:</strong> 1% TDS under Section 194S on all token transfers and DEX trades above prescribed thresholds.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>Lack of Formal DAO Wrapper:</strong> Indian Companies Act 2013 has no native DAO recognition; founders establish offshore foundation wrappers (e.g., Dubai DIFC, Cayman) while operating Indian development devco entities.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span><strong>FIU-IND Compliance:</strong> Web3 entities serving Indian users must adhere to PMLA (Prevention of Money Laundering Act) and FIU reporting guidelines.</li>
              </ul>
            </div>
          </div>
        </section>
    
            
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
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`// SPDX-License-Identifier: MIT
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
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`// SPDX-License-Identifier: MIT
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
                <pre className="overflow-x-auto [scrollbar-width:thin]">{`// SPDX-License-Identifier: MIT
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
    
            
        {/* Assessment Section */}
        <section id="assessment" className="space-y-16">
          {/* Part 19.A: Senior DAO Architect Interview Questions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.A</span>
              <span>•</span>
              <span>SENIOR ARCHITECT INTERVIEWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.A 25 Senior DAO &amp; Web3 Governance Architect Interview Scenarios
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Exhaustive technical scenarios and architectural questions asked in senior protocol engineering interviews at Uniswap Labs, ENS Foundation, MakerDAO / Sky, Aave Governance, and top Web3 security auditing firms.
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
                  Module 21 Examination: DAOs &amp; Blockchain Governance
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  20 questions assessing your mastery of ERC20Votes checkpoints, OpenZeppelin GovernorCountingSimple quorum math, timelock role permissions, and defense against flash loan takeovers.
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
              <span>OFFICIAL GOVERNANCE RESOURCES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Recommended Official Learning Resources
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Essential documentation and specifications for continuing your mastery of decentralized autonomous organizations, timelock mechanics, and smart contract governance:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  title: "OpenZeppelin Governance Contracts",
                  desc: "Complete documentation and implementation guides for Governor, TimelockController, and ERC20Votes.",
                  link: "https://docs.openzeppelin.com/contracts/5.x/governance"
                },
                {
                  title: "Snapshot Off-Chain Voting Docs",
                  desc: "Guides for configuring Snapshot spaces, voting strategies, IPFS pinning, and SafeSnap execution.",
                  link: "https://docs.snapshot.org"
                },
                {
                  title: "Safe Developer Documentation",
                  desc: "Architecture reference for multi-signature smart contracts, transaction guards, and Safe modules.",
                  link: "https://docs.safe.global"
                },
                {
                  title: "Uniswap Governance Portal",
                  desc: "Production governance architecture, autonomous proposal workflows, and governance delegation.",
                  link: "https://gov.uniswap.org"
                },
                {
                  title: "MakerDAO / Sky Governance Forum",
                  desc: "Case studies in stability fee voting, collateral parameterization, and executive spells.",
                  link: "https://forum.makerdao.com"
                },
                {
                  title: "ENS DAO Governance Docs",
                  desc: "Documentation for ENS Constitution, 4-of-8 security council charters, and endowment management.",
                  link: "https://docs.ens.domains"
                },
                {
                  title: "Aave Governance v3 Specs",
                  desc: "Decentralized cross-chain governance system spanning Ethereum, Polygon, Arbitrum, and Avalanche.",
                  link: "https://governance.aave.com"
                },
                {
                  title: "Compound Governance Documentation",
                  desc: "The foundational GovernorAlpha and GovernorBravo smart contract specifications that inspired Web3.",
                  link: "https://docs.compound.finance"
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

          {/* Module 21 Final Learning Outcomes */}
          <div className="p-8 rounded-3xl bg-neutral-900 text-neutral-100 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold tracking-wide">
              <span>EXECUTIVE SUMMARY</span>
              <span>•</span>
              <span>MODULE 21 LEARNING OUTCOMES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Module 21 Mastery Outcomes &amp; Architectural Takeaway
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              By completing this module, you have mastered the complete architectural lifecycle of Web3 decentralized autonomous organizations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-neutral-300">
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Define what a DAO is and why decentralized organizational structures emerged.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Map the 8 core components of production DAO architecture.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Differentiate between on-chain execution and off-chain signaling governance.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Explain why standard ERC-20 tokens are vulnerable to double voting and flash loan attacks.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Implement OpenZeppelin ERC20Votes with historical binary-search checkpoints.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Formulate on-chain proposals with encoded calldata, targets, values, and description hashes.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Contrast 5 voting mechanisms: token-weighted, 1-member-1-vote, quadratic, conviction, and delegated.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Master OpenZeppelin Governor castVote methods and GovernorCountingSimple quorum evaluation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Configure gasless off-chain voting on Snapshot with IPFS and EIP-712 signatures.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Implement delegated liquid democracy and gasless delegation via delegateBySig.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Calculate quorum requirements and explain why Against votes do not count toward quorum in GovernorCountingSimple.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Deploy and secure OpenZeppelin TimelockController with correct role segregation.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Protect DAO treasuries using SafeERC20, timelocks, and multi-tier spending limits.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Configure Safe (Gnosis Safe) multisignature wallets with M-of-N threshold security.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Analyze and defend against 7 major governance exploits: flash-loans, takeovers, and trojan calldata.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Deploy Security Councils with 4-of-8 emergency cancel-only veto powers.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">&bull;</span>
                <span>Evaluate legal wrappers (DAO LLC, Foundations, UNAs) and tax compliance across US and Indian jurisdictions.</span>
              </div>
            </div>

            {/* Final Project Prompt */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 mt-4">
              <span className="text-amber-400 font-bold font-mono text-xs uppercase tracking-wider block">
                Final Capstone Project &bull; PrepSpaces DAO Platform
              </span>
              <p className="text-sm text-neutral-200 leading-relaxed font-sans">
                Build a production-grade Web3 application combining <code>GovernanceToken.sol</code>, <code>MyGovernor.sol</code>, <code>TimelockController.sol</code>, and <code>DAOTreasury.sol</code> with a React front-end. Demonstrate creating a proposal requesting 100 PSG from the treasury, voting &quot;For&quot; using checkpointed tokens, queueing the proposal into a 60-second timelock, executing the payout, and verifying the autonomous transfer on Sepolia Etherscan!
              </p>
            </div>
          </div>

          {/* Module 21 Progress Checklist */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
                  <span>PROGRESS TRACKER</span>
                  <span>•</span>
                  <span>MODULE 21 MASTERY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mt-1">
                  DAO Architecture &amp; Governance Checklist
                </h3>
                <p className="text-sm text-neutral-600">
                  Track your mastery across all 28 foundational competencies. Automatically saved in local browser storage.
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
              to="/learning/blockchain/oracles-chainlink"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-500 group-hover:-translate-x-1 transition-transform" />
              <span>Previous: Module 20 (Oracles &amp; Chainlink)</span>
            </Link>
            <Link
              to="/learning/blockchain/hyperledger-fabric"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Next: Module 22 (Hyperledger Fabric & Enterprise Blockchain)</span>
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
