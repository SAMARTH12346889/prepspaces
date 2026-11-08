# -*- coding: utf-8 -*-
"""
Module 21 Data: DAOs & Blockchain Governance
- CHECKLIST_ITEMS: 28 items
- QUIZ_QUESTIONS: 20 questions (featuring all 10 canonical module questions)
- INTERVIEW_QUESTIONS: 25 questions
- NUMERICAL_PROBLEMS: 5 problems
"""

CHECKLIST_ITEMS = [
  {"id": "c1", "label": "Understand DAO fundamentals: decentralized coordination, programmable rules, and treasury controls", "category": "theory"},
  {"id": "c2", "label": "Analyze historical DAO origins, centralized vs decentralized management, and empirical power concentration", "category": "theory"},
  {"id": "c3", "label": "Examine real-world production DAOs: Uniswap DAO, Sky (MakerDAO), ENS DAO, and Aave Governance", "category": "theory"},
  {"id": "c4", "label": "Master Core DAO Architecture: Token, Proposal, Governor, TimelockController, Treasury, and Safe Multisig", "category": "theory"},
  {"id": "c5", "label": "Differentiate On-Chain binding governance (Governor) vs Off-Chain gasless signaling (Snapshot)", "category": "theory"},
  {"id": "c6", "label": "Trace the 8-stage Governance Lifecycle from discussion to timelock and execution", "category": "theory"},
  {"id": "c7", "label": "Compare Governance Token Models: fixed supply vs inflationary, governance-only vs hybrid utility", "category": "theory"},
  {"id": "c8", "label": "Master ERC20Votes: delegation, historical block checkpoints, and double-voting prevention", "category": "theory"},
  {"id": "c9", "label": "Structure Governance Proposals: targets, values, calldatas, and description hashes", "category": "theory"},
  {"id": "c10", "label": "Calculate Proposal Thresholds (e.g. 1% of total voting supply) to block proposal spam", "category": "theory"},
  {"id": "c11", "label": "Analyze 5 Voting Mechanisms: Token-weighted, One-member-one-vote, Quadratic, Conviction, and Delegated", "category": "theory"},
  {"id": "c12", "label": "Master Quadratic Voting mechanics and cost formulas: Cost = Votes^2 to protect community minorities", "category": "theory"},
  {"id": "c13", "label": "Inspect OpenZeppelin castVote(proposalId, support) and support values (0=Against, 1=For, 2=Abstain)", "category": "theory"},
  {"id": "c14", "label": "Understand Snapshot Architecture: spaces, proposal strategies, signed messages, and execution adapters", "category": "theory"},
  {"id": "c15", "label": "Calculate Historical Voting Power and distinguish token balances from active delegated weight", "category": "theory"},
  {"id": "c16", "label": "Master Quorum Requirements: understand why GovernorCountingSimple counts For and Abstain, NOT Against", "category": "theory"},
  {"id": "c17", "label": "Implement TimelockController: mandatory delays, review windows, and emergency cancellation", "category": "theory"},
  {"id": "c18", "label": "Execute Secure Timelock Role Handover: grant Governor roles, revoke deployer, and renounce admin", "category": "theory"},
  {"id": "c19", "label": "Architect DAO Treasury Management: Ownable(timelockAddress), SafeERC20, and multi-tier spending", "category": "theory"},
  {"id": "c20", "label": "Integrate Safe Multisig (M-of-N) wallets for operational agility and emergency security councils", "category": "theory"},
  {"id": "c21", "label": "Audit 7 Governance Attack Vectors: flash loans, hostile takeovers, Sybil voting, and timelock bypass", "category": "theory"},
  {"id": "c22", "label": "Mitigate Governance Manipulation: voting concentration, delegation capture, and governance fatigue", "category": "theory"},
  {"id": "c23", "label": "Examine DAO Legal Considerations: legal wrappers (LLC, UNA, Foundation), tax liabilities, and global regulations", "category": "theory"},
  {"id": "c24", "label": "Deploy GovernanceToken.sol with ERC20Votes & 1M initial supply on Ethereum Sepolia", "category": "lab"},
  {"id": "c25", "label": "Deploy MyGovernor.sol & TimelockController with verified role handover and zero deployer privileges", "category": "lab"},
  {"id": "c26", "label": "Deploy DAOTreasury.sol, fund with 100k PSG, propose, vote, queue, and execute 100 PSG transfer", "category": "lab"},
  {"id": "c27", "label": "Execute all 11 testing scenarios & answer 8 governance security failure questions", "category": "lab"},
  {"id": "c28", "label": "Achieve 100% on the 20 Knowledge Assessment questions and 5 Numerical Derivation problems", "category": "assessment"}
]

QUIZ_QUESTIONS = [
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
]

INTERVIEW_QUESTIONS = [
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
    "answer": "A Trojan Horse attack occurs when an attacker crafts a proposal with a deceitful title and description (e.g. 'Partnership with Leading Web3 Accelerator — 1,000 PSG Grant'), but encodes a malicious transaction in the `calldatas` array (e.g. calling `token.approve(attacker, type(uint256).max)` or `treasury.release(attacker, 100,000 PSG)`). Voters who only read the English markdown description vote For. To defend against this, governance dashboards (like Tally) must: 1) Decode raw calldatas against verified contract ABIs; 2) Display exact recipient addresses, transfer amounts, and method signatures; 3) Highlight unrecognized contract addresses or suspicious privileged functions.",
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
]

NUMERICAL_PROBLEMS = [
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
    "finalAnswer": "Token-Weighted: 50% For vs 50% Against (Tie) | Quadratic: 90.91% For (1,000 votes) vs 9.09% Against (100 votes) — Grant APPROVED by overwhelming majority"
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
]
