import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Cpu,
  Terminal,
  BookOpen,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  ListChecks,
  Boxes,
  Play,
  FileCheck,
  Share2
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// 26 Checklist items for Module 10 (Smart Contract Testing & QA)
const CHECKLIST_ITEMS = [
  "10.1 Understand the unique constraints of smart contract testing (immutability, adversarial execution, financial risk)",
  "10.2 Formulate a multi-layered testing pyramid (Unit, Integration, Fuzz, Invariant, Fork, Security Audit)",
  "10.3 Differentiate Foundry (Solidity-native, fast, Rust) and Hardhat (JS/TS ecosystem, plugins) architectures",
  "10.4 Initialize a production Foundry project, manage dependencies, and configure foundry.toml settings",
  "10.5 Implement Solidity unit tests with Forge Test base contract, setUp() fixtures, and forge-std assertions",
  "10.6 Implement Hardhat JavaScript/TypeScript test suites with Mocha, Chai matchers, and ethers.js contract factories",
  "10.7 Architect reusable test fixtures using makeAddr(), vm.deal(), and Hardhat loadFixture() snapshots",
  "10.8 Measure test execution coverage (Statement, Branch, Function, Line) and analyze why 100% coverage != security",
  "10.9 Implement property-based fuzz testing with randomized inputs, vm.assume() filtering, and edge-case discovery",
  "10.10 Define formal mathematical properties (e.g. Token Conservation: Sum of balances equals initial total supply)",
  "10.11 Implement stateful invariant testing with randomized transaction handlers and sequence minimization",
  "10.12 Execute mainnet fork testing with Anvil --fork-url and vm.createSelectFork() to test against live DeFi protocols",
  "10.13 Construct robust mock contracts (MockToken, MockOracle) to simulate external dependency failure modes",
  "10.14 Manipulate blockchain time and block numbers using Foundry cheatcodes (vm.warp, vm.roll, vm.skip)",
  "10.15 Validate error states with exact revert reasons and custom error selectors (vm.expectRevert)",
  "10.16 Benchmark computational gas consumption with forge test --gas-report and compare diffs via forge snapshot",
  "10.17 Debug failed transactions using deep execution traces (forge test -vvvv) and cast run transaction replays",
  "10.18 Architect automated Continuous Integration (CI/CD) pipelines with GitHub Actions (.github/workflows/foundry.yml)",
  "10.19 Practical Lab A: Implement and test PrepToken.sol (ERC-20) with unit, edge-case, and fuzzing suites",
  "10.19 Practical Lab B: Implement and test Voting.sol with duplicate-vote prevention, deadlines, and fuzzing",
  "10.19 Practical Lab C: Implement adversarial Escrow testing with MaliciousReceiver reentrancy attacks and pull payments",
  "10.19 Practical Lab D: Execute an advanced 1,000+ run fuzzing and stateful invariant testing campaign",
  "10.20 Complete Assignment 1: Comprehensive ERC-20 testing suite with event verification and allowance bounds",
  "10.20 Complete Assignment 2: Decentralized voting security testing and invariant specification",
  "10.20 Complete Assignment 3: Escrow adversarial audit and reentrancy attack simulation report",
  "10.21 Master 20 Senior Web3 QA Architect interview preparation questions with exhaustive technical explanations"
];

// 10 Comprehensive Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Why is 100% line coverage insufficient to guarantee smart contract security?",
    options: [
      "Because Solidity compiler optimizations delete covered lines from EVM bytecode at runtime",
      "Because line coverage only verifies that code was executed, not that it correctly handles adversarial inputs, unauthorized permissions, economic exploits, or unexpected external reentrancy",
      "Because Hardhat and Foundry do not support coverage analysis for internal library functions",
      "Because line coverage cannot measure statements inside constructor bodies"
    ],
    correct: 1,
    explanation: "Line coverage merely records whether an execution path traversed a statement. It does not evaluate whether edge-case inputs cause logic flaws, whether role permissions can be bypassed, whether price oracles can be manipulated, or whether unexpected external calls trigger reentrancy."
  },
  {
    id: 2,
    question: "What is the primary difference between stateless fuzz testing and stateful invariant testing?",
    options: [
      "Stateless fuzz testing tests one function with random arguments in isolation; stateful invariant testing executes randomized sequences of multiple transactions across actors while asserting invariant rules",
      "Stateless fuzzing only runs on local testnets; invariant testing requires an active mainnet fork",
      "Stateless fuzzing is exclusive to Hardhat; invariant testing can only be run in Python",
      "Stateless fuzzing tests private functions; invariant testing only tests public view functions"
    ],
    correct: 0,
    explanation: "Stateless fuzz testing generates random arguments for a single function call (e.g. testing `transfer(address, uint256)`). Stateful invariant testing initializes a handler contract and invokes randomized sequences of diverse calls (deposit, transfer, withdraw, dispute) across multiple blocks to discover bugs that only manifest after specific historical states."
  },
  {
    id: 3,
    question: "What does the Foundry cheatcode `vm.assume(bool condition)` do during a fuzz test run?",
    options: [
      "It forces the EVM to skip compiler optimization passes for that transaction",
      "It discards the current fuzz input if the condition is false and prompts Forge to generate a new input, filtering out invalid test inputs",
      "It permanently sets a storage slot to a constant boolean value in the contract",
      "It halts the entire test suite and reports a critical security vulnerability"
    ],
    correct: 1,
    explanation: "`vm.assume(condition)` acts as a precondition filter. If a fuzz-generated input violates the assumption (e.g. `vm.assume(recipient != address(0))`), Forge immediately rejects that input without failing the test and generates a fresh input within the valid domain."
  },
  {
    id: 4,
    question: "How does the Foundry cheatcode `vm.prank(address caller)` affect transaction execution?",
    options: [
      "It temporarily assigns the specified address infinite ETH in the local test network",
      "It changes `msg.sender` for the very next external call to the specified address, allowing developers to test role-restricted permissions",
      "It permanently overwrites the contract's owner variable with the prank address",
      "It mocks all return values originating from the prank address"
    ],
    correct: 1,
    explanation: "`vm.prank(address)` sets `msg.sender` for the next call only (or `vm.startPrank` for multiple consecutive calls). This enables unit tests to impersonate buyers, sellers, attackers, or governance admins to verify access controls."
  },
  {
    id: 5,
    question: "When testing custom errors in Solidity 0.8.4+ with Foundry, what is the best practice for asserting a revert?",
    options: [
      "Assert that the transaction gas consumed exceeds 30,000,000 gas",
      "Use `vm.expectRevert(CustomError.selector)` to verify both that the transaction reverted and that it reverted with the exact intended error signature",
      "Catch the revert inside a try/catch block and check that error string equals 'REVERT'",
      "Inspect the transaction receipt logs using Cast CLI"
    ],
    correct: 1,
    explanation: "Testing merely that a transaction reverted (`vm.expectRevert()`) is dangerous because the transaction might have failed due to an unrelated bug (e.g. out of gas or null pointer). Passing `CustomError.selector` ensures the contract reverted specifically due to the intended error condition."
  },
  {
    id: 6,
    question: "What is the primary benefit of mainnet fork testing (`vm.createSelectFork`) in DeFi protocol development?",
    options: [
      "It automatically deploys contracts directly to Ethereum mainnet without gas fees",
      "It creates a local sandbox pre-populated with real mainnet state (Uniswap pools, Chainlink oracles, Aave lending pools, real token balances) at a pinned block number",
      "It eliminates the need to compile Solidity contracts locally",
      "It encrypts transaction data so third-party searchers cannot frontrun local tests"
    ],
    correct: 1,
    explanation: "Fork testing loads the actual bytecode, storage, and balances of live mainnet contracts into a local Anvil or Hardhat EVM at a specific block number. This allows developers to test realistic interactions with complex DeFi protocols without relying on fragile or incomplete mocks."
  },
  {
    id: 7,
    question: "In property-based testing of an ERC-20 token, what is the 'Token Conservation' property?",
    options: [
      "The token price in USD must not drop by more than 10% during a test run",
      "For any standard transfer between accounts (without minting or burning), the sum of all account balances plus contract holdings must strictly equal the initial total supply",
      "The contract must burn 1% of every transaction to reduce circulating supply",
      "Only the deployer address is allowed to hold more than 50% of the token supply"
    ],
    correct: 1,
    explanation: "The token conservation property states that internal transfers are zero-sum: `balanceOf[sender] + balanceOf[recipient] == initialSender + initialRecipient`. Total supply must remain invariant unless mint or burn functions are explicitly invoked."
  },
  {
    id: 8,
    question: "What is the role of `vm.warp(uint256 newTimestamp)` in testing time-dependent contracts (e.g. Vesting, Auctions, Voting)?",
    options: [
      "It speeds up CPU clock cycles so unit tests execute in fewer milliseconds",
      "It sets the block timestamp (`block.timestamp`) in the EVM environment, allowing developers to fast-forward past voting deadlines or vesting periods",
      "It synchronizes the local EVM clock with UTC atomic time servers",
      "It forces the contract to use real-world off-chain time via an oracle"
    ],
    correct: 1,
    explanation: "`vm.warp()` directly overwrites `block.timestamp`. This allows instant simulation of weeks or years passing, enabling thorough verification of time-locked vesting schedules, auction expiries, and deadline enforcement without waiting in real time."
  },
  {
    id: 9,
    question: "How does `forge snapshot --diff` help prevent gas regressions in smart contract development?",
    options: [
      "It automatically rewrites Solidity functions in Yul assembly to reduce bytecode size",
      "It compares gas usage of all test cases against a recorded `.gas-snapshot` baseline file, alerting developers if code refactors introduce unexpected gas overhead",
      "It submits a gas refund claim directly to the Ethereum Foundation",
      "It measures the network bandwidth required to broadcast transactions across P2P nodes"
    ],
    correct: 1,
    explanation: "`forge snapshot` outputs a `.gas-snapshot` record of exact gas consumed by each test function. Running `forge snapshot --diff` highlights exact gas deltas (increases or decreases) introduced by code changes, catching expensive regressions before deployment."
  },
  {
    id: 10,
    question: "In a Continuous Integration (CI) pipeline for smart contracts, why should toolchain dependencies and action versions be pinned to exact commit hashes?",
    options: [
      "Because unpinned dependencies cause Ethereum nodes to reject compiled bytecode",
      "To ensure deterministic, reproducible builds and protect against supply-chain attacks where third-party GitHub Actions or npm packages are silently compromised",
      "Because GitHub Actions does not allow semantic versioning tags in workflow YAML files",
      "To reduce the storage space consumed by git repository clones"
    ],
    correct: 1,
    explanation: "Smart contracts secure irreversible financial assets. Pinning exact compiler versions (e.g. `solc 0.8.28`), Foundry toolchain versions, and GitHub Action commit SHAs ensures that build and test execution is 100% reproducible and immune to upstream dependency tampering."
  }
];

// 20 Senior Smart Contract Testing & Security Interview Questions
const INTERVIEW_QUESTIONS = [
  {
    id: 1,
    question: "Why is smart contract testing fundamentally different from testing traditional web or enterprise software?",
    answer: "In traditional software, bugs can be patched via hotfixes, databases can be rolled back, and API access can be firewalled. In smart contracts: (1) Code is immutable post-deployment (unless upgradeability proxies are used, which introduce their own attack vectors). (2) Transactions directly control irreversible financial custody (millions of dollars). (3) The execution environment is adversarial and permissionless: anyone globally can invoke contract functions, inspect memory, or craft reentrant bytecode. (4) Miner/validator front-running and MEV can reorder calls. Therefore, testing must be exhaustive, property-based, and focused on adversarial edge cases rather than merely verifying the 'happy path'."
  },
  {
    id: 2,
    question: "Explain the testing pyramid as applied to Ethereum smart contracts.",
    answer: "The smart contract testing pyramid consists of: (1) Base Layer — Unit Tests: Fast, isolated tests for individual functions and access modifiers (using Foundry Forge or Hardhat). (2) Middle Layer — Integration & Scenario Tests: Multi-contract interactions (e.g. Token -> Router -> Vault -> Staking). (3) Upper-Middle Layer — Stateless Fuzz Testing: Random input generation verifying function parameter boundaries and mathematical edge cases. (4) Advanced Layer — Stateful Invariant Testing: Randomized multi-call action sequences across multiple actors testing perpetual protocol invariants. (5) Top Layer — Fork Testing & Security Audits: Testing against real mainnet liquidity state and executing manual human audits, formal verification, and automated static analysis (Slither, Mythril)."
  },
  {
    id: 3,
    question: "Walk through the architecture of Foundry and explain the purpose of Forge, Cast, Anvil, and Chisel.",
    answer: "Foundry is a modular toolkit written in Rust: (1) Forge: The build and testing framework that compiles contracts, executes unit/fuzz/invariant tests in parallel, runs gas snapshots, and manages dependencies. (2) Cast: A command-line Swiss army knife for performing Ethereum RPC calls, encoding/decoding calldata, hashing keccak256, and sending signed transactions. (3) Anvil: A fast local Ethereum node implementation (analogous to Ganache or Hardhat Network) supporting instant mining and state forking. (4) Chisel: An interactive Solidity REPL for quickly experimenting with opcodes, encoding, and expressions in real time."
  },
  {
    id: 4,
    question: "Compare Foundry vs. Hardhat. Under what circumstances would you choose one over the other, or use both?",
    answer: "Foundry excels in: Speed (Rust-based parallel execution is 5x–20x faster), Solidity-native testing (no context switching between JS and Solidity; tests can directly access internal functions and storage), native stateful fuzzing, and invariant testing. Hardhat excels in: Rich JavaScript/TypeScript ecosystem, seamless integration with web frontends (Ethers.js/Viem), extensive plugin ecosystem, and complex deployment scripting. Production architecture recommendation: Use Foundry for 90% of core protocol testing (unit, fuzz, invariant, gas snapshots), and use Hardhat/TypeScript for frontend integration testing and deployment scripts."
  },
  {
    id: 5,
    question: "What are test fixtures, and why are they critical for test isolation and execution speed?",
    answer: "A test fixture is a predefined, reusable baseline state (contracts deployed, roles configured, initial balances funded) from which individual tests execute. In Foundry, the `setUp()` function deploys a fresh state before each test method, ensuring complete isolation (no state leakage between tests). In Hardhat, `loadFixture()` uses EVM snapshots (`evm_snapshot` and `evm_revert`) to reset state to the fixture point instantly in memory without redeploying contracts, drastically improving test suite runtime."
  },
  {
    id: 6,
    question: "What is the difference between Statement coverage, Branch coverage, and Function coverage? Which is most important for security?",
    answer: "Statement coverage measures whether a line of code was executed. Function coverage measures whether a function was called. Branch coverage measures whether every branch in decision logic (e.g. both `true` and `false` paths of `if/else`, `require`, and ternary statements) was evaluated. Branch coverage is far more critical for security because bugs often hide in unexercised false conditions (e.g., an unreached revert branch or an unhandled edge case in modifier checks)."
  },
  {
    id: 7,
    question: "How does Foundry execute fuzz testing under the hood, and how do you prevent fuzz tests from wasting runs on invalid inputs?",
    answer: "When a test function in Forge accepts arguments (e.g. `testFuzz_transfer(address to, uint256 amount)`), Forge detects this signature and executes the test hundreds or thousands of times with randomly generated values across the type spectrum (0, 1, `type(uint256).max`, random bytes). To prevent wasting iterations on invalid inputs, developers use: (1) `vm.assume(condition)`: Discards the generated input and picks a new one if condition fails. (2) Bound helpers: `bound(amount, min, max)` which clamps values into a realistic range using modulo arithmetic without discarding iterations."
  },
  {
    id: 8,
    question: "What is property-based testing, and how does it differ from traditional example-based unit testing?",
    answer: "Example-based unit testing tests specific known inputs: 'When Alice deposits 5 ETH, her balance should be 5 ETH.' Property-based testing defines universal mathematical invariants that must hold true for ALL valid inputs: 'For any deposit amount X in [1 wei, 1000 ETH], the vault's total asset balance must increase by exactly X, and Alice's share ratio must equal X / totalAssets.' Properties test relationships, symmetries (deposit followed by immediate full withdrawal yields net zero), and conservation laws."
  },
  {
    id: 9,
    question: "How do you design a stateful invariant testing handler contract in Foundry?",
    answer: "An invariant testing campaign uses a Handler contract that mediates interactions with the target contract. The handler defines action functions (e.g. `deposit(uint256 amount)`, `withdraw(uint256 amount)`, `transfer(address to, uint256 amount)`). Forge randomly calls these handler functions in sequences of 64–128 steps, tracking actors (`ghost variables`) and bounded parameters. After every step in the sequence, Forge asserts the protocol invariant (e.g. `assertEq(token.totalSupply(), ghost_sumBalances)`). If an invariant fails, Forge shrinks the sequence to find the minimal steps needed to reproduce the bug."
  },
  {
    id: 10,
    question: "How does mainnet fork testing work, and what are the primary security and reproducibility pitfalls?",
    answer: "Fork testing instructs the local EVM node (Anvil/Hardhat) to intercept RPC requests for state it does not hold and fetch the storage slots, code, and account nonces from a live archive node at a specified block number (`--fork-url`, `--fork-block-number`). Pitfalls: (1) Unpinned block numbers: If tests fork from `latest`, live state changes will cause tests to intermittently fail. Always pin to an exact block. (2) RPC rate limits: Intensive tests can exceed provider quotas; caching should be enabled. (3) Secret exposure: Never commit private RPC URLs containing API keys."
  },
  {
    id: 11,
    question: "When should you use Mock Contracts versus Fork Testing when testing external protocol integrations?",
    answer: "Use Mocks when: (1) Testing isolated failure modes of dependencies (e.g. simulating a Chainlink aggregator returning negative or stale prices, or an ERC-20 token returning `false` on transfer). (2) Fast CI/CD execution without network latency. Use Fork Testing when: (1) Testing complex DeFi interactions where mocking the entire protocol (e.g. Uniswap v3 ticks, swap math, or Aave flash loan callbacks) is too complex or prone to divergence from production behavior. Best practice uses mocks for unit tests and forked tests for end-to-end integration."
  },
  {
    id: 12,
    question: "Explain the cheatcodes `vm.warp`, `vm.roll`, `vm.skip`, and `vm.deal`. Give real-world testing scenarios for each.",
    answer: "(1) `vm.warp(t)`: Sets `block.timestamp` to `t`. Used to test vesting cliffs, auction expirations, and unstaking delays. (2) `vm.roll(b)`: Sets `block.number` to `b`. Used to test block-based governance voting periods or checkpointing. (3) `vm.skip(d)`: Advances `block.timestamp` by delta `d` (shortcut for `vm.warp(block.timestamp + d)`). (4) `vm.deal(addr, eth)`: Directly alters the Ether balance of `addr`. Used to fund test actors with native currency without running complex faucet transfers."
  },
  {
    id: 13,
    question: "How do you test that an operation reverts with a custom error versus a traditional string revert?",
    answer: "For string reverts: `vm.expectRevert(bytes('Ownable: caller is not the owner'));`. For custom errors in Solidity 0.8.4+: `vm.expectRevert(abi.encodeWithSelector(Unauthorized.selector, attackerAddress));` or `vm.expectRevert(Unauthorized.selector);`. In Hardhat with Chai: `await expect(contract.action()).to.be.revertedWithCustomError(contract, 'Unauthorized').withArgs(attackerAddress);`. Custom error assertions verify exact error selectors and parameter payloads."
  },
  {
    id: 14,
    question: "How do you identify and benchmark gas regressions using Foundry and Hardhat?",
    answer: "In Foundry: Run `forge test --gas-report` to generate a summary of min, avg, median, and max gas consumed per function. Run `forge snapshot` to generate a `.gas-snapshot` file, commit it to git, and run `forge snapshot --diff` on pull requests to detect gas increases. In Hardhat: Integrate `hardhat-gas-reporter` to output transaction and deployment costs in gas and USD estimates via CoinMarketCap API integrations."
  },
  {
    id: 15,
    question: "How do you debug a transaction that reverts with 'EvmError: Revert' with no error message in Foundry?",
    answer: "Debugging workflow: (1) Re-run the test with maximum verbosity flags: `forge test -vvvv` (shows entire call stack, parameters, internal calls, and gas used per frame). (2) Inspect execution traces: Red lines indicate the exact contract and opcode where the revert originated. (3) If caused by an external call, inspect whether it was an out-of-gas error, invalid opcode, or empty target address. (4) Use Foundry debugger: `forge test --debug <testName>` to step through EVM opcodes and source code line by line, inspecting stack and memory."
  },
  {
    id: 16,
    question: "How would you design a test suite to detect reentrancy vulnerabilities in an Escrow or Vault contract?",
    answer: "To test for reentrancy: (1) Implement a `MaliciousReceiver.sol` contract with a `receive()` or `fallback()` function. (2) When the escrow releases funds or the vault executes a withdrawal, the malicious receiver intercepts execution and re-calls the target contract's `withdraw()` or `release()` function. (3) The test asserts that the reentrant call reverts with a custom error (e.g. `ReentrancyGuardReentrantCall()`), or that the contract uses Checks-Effects-Interactions such that the second call sees zero balance and fails gracefully."
  },
  {
    id: 17,
    question: "What is regression testing in smart contracts, and how is it integrated into continuous development?",
    answer: "Regression testing ensures that newly added features, gas optimizations, or bug fixes do not break existing functionality or reintroduce past vulnerabilities. Whenever a bug is discovered (during an internal review, audit, or bug bounty), developers first write a reproducing test case that fails against the current code. After implementing the fix, the test passes and is permanently committed to the regression test suite, which runs automatically on every pull request."
  },
  {
    id: 18,
    question: "How do you test contracts that rely on Chainlink Price Feeds to ensure they handle flash crashes, stale data, and sequencer downtime?",
    answer: "Construct a test suite using `MockV3Aggregator` or custom mocks that simulates: (1) Normal price updates. (2) Stale prices: `updatedAt` timestamp is older than the staleness threshold (e.g. `block.timestamp - 3 hours`), asserting that the consumer reverts. (3) Extreme price spikes/crashes (0 or negative prices): asserting bounds validation. (4) L2 Sequencer downtime: For Layer 2 rollups, test that the Sequencer Uptime Feed correctly reverts transactions when the sequencer is down or in grace period."
  },
  {
    id: 19,
    question: "Explain how automated continuous integration (CI) should be structured for a production smart contract repository.",
    answer: "A production GitHub Actions workflow must enforce: (1) Static analysis: Run Slither and Solhint on all PRs. (2) Strict formatting and compilation: `forge fmt --check` and `forge build --sizes` (verifying 24KB EIP-170 limit). (3) Comprehensive test suite: `forge test -vvv` with unit and integration tests. (4) Intensive fuzzing: Run 1,000–10,000 fuzz runs. (5) Invariant testing: Verify stateful invariants. (6) Gas snapshot diff: Flag significant gas increases. (7) Coverage gates: Enforce minimum branch coverage thresholds."
  },
  {
    id: 20,
    question: "What are 'Ghost Variables' in formal verification and invariant testing, and how do you use them in Foundry?",
    answer: "Ghost variables are auxiliary variables maintained purely inside testing handlers to track the intended or ideal state of a system without altering the production contract bytecode. For example, in an invariant test for a token vault, the handler maintains `uint256 public ghost_totalSumDeposited`. Whenever any test actor calls `deposit(x)`, the handler updates `ghost_totalSumDeposited += x`. The invariant assertion checks `assertEq(vault.totalAssets(), ghost_totalSumDeposited)`. Ghost variables allow testing complex global conservation properties that the contract itself does not explicitly track."
  }
];

export default function BlockchainTesting() {
  const navigate = useNavigate();
  useSafeBack("/learning/blockchain");

  // Navigation tab state: 'theory' | 'interactive' | 'labs' | 'quiz' | 'checklist'
  const [activeTab, setActiveTab] = useState("theory");

  // LocalStorage Persistence for 26-objective Completion Checklist
  const STORAGE_KEY = "prepspaces_blockchain_m10_progress";
  const [completedItems, setCompletedItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = (idx) => {
    setCompletedItems((prev) => {
      const next = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        console.error("Failed to save progress", _err);
      }
      return next;
    });
  };

  const completedCount = useMemo(() => {
    return Object.values(completedItems).filter(Boolean).length;
  }, [completedItems]);

  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

  // Copy code helper
  const [copiedKey, setCopiedKey] = useState(null);
  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Accordion state for 20 interview questions
  const [expandedInterviews, setExpandedInterviews] = useState({});
  const toggleInterview = (id) => {
    setExpandedInterviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedAnswers]);

  // Simulator 1: Foundry Fuzzing & Property Verification Explorer
  const [fuzzRunsTarget, setFuzzRunsTarget] = useState(256);
  const [fuzzStatus, setFuzzStatus] = useState("idle"); // 'idle' | 'running' | 'passed' | 'violation'
  const [fuzzCompletedRuns, setFuzzCompletedRuns] = useState(0);
  const [fuzzLogs, setFuzzLogs] = useState([]);
  const [enableFlaw, setEnableFlaw] = useState(false); // Simulates bug in transfer: allowing recipient == address(0)

  const runFuzzCampaign = () => {
    setFuzzStatus("running");
    setFuzzCompletedRuns(0);
    setFuzzLogs([]);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(fuzzRunsTarget / 8);
      if (current >= fuzzRunsTarget) {
        current = fuzzRunsTarget;
        clearInterval(interval);
        setFuzzCompletedRuns(current);

        if (enableFlaw) {
          setFuzzStatus("violation");
          setFuzzLogs([
            `[FAIL. Reason: InvariantViolation] testFuzz_transfer(to, amount)`,
            `[Counterexample Found at Run #${Math.floor(fuzzRunsTarget * 0.72)}]:`,
            `  to: 0x0000000000000000000000000000000000000000 (Zero Address)`,
            `  amount: 48,291,012 PST`,
            `[Result]: Invariant Broken! Burned tokens without event emission.`
          ]);
        } else {
          setFuzzStatus("passed");
          setFuzzLogs([
            `[PASS] testFuzz_transfer(address to, uint256 amount) (runs: ${fuzzRunsTarget})`,
            `  All ${fuzzRunsTarget} randomized inputs satisfied balance invariants.`,
            `  Precondition vm.assume(to != address(0)) held for 100% of runs.`,
            `  Gas (min: 24,180 | avg: 26,412 | max: 28,904)`
          ]);
        }
      } else {
        setFuzzCompletedRuns(current);
      }
    }, 120);
  };

  // Simulator 2: Stateful Invariant Testing Engine
  const [invariantSeqLength] = useState(64);
  const [invariantStatus, setInvariantStatus] = useState("idle");
  const [ghostVaultBalance] = useState(100.0);
  const [ghostTotalLiabilities] = useState(100.0);
  const [invariantLogs, setInvariantLogs] = useState([]);

  const runInvariantTest = () => {
    setInvariantStatus("running");
    setTimeout(() => {
      setInvariantStatus("passed");
      setInvariantLogs([
        `[INVARIANT PASS] invariant_VaultSolvency() (runs: 128, calls: ${invariantSeqLength * 128})`,
        `  Rule: vault.balance >= totalLiabilities held across all ${invariantSeqLength} call steps.`,
        `  Actions executed: [deposit: 42%, withdraw: 38%, transfer: 20%]`,
        `  Ghost accounting strictly matches on-chain state storage.`
      ]);
    }, 1000);
  };

  // Simulator 3: Cheatcode Time & State Manipulator
  const [simBlockTimestamp, setSimBlockTimestamp] = useState(1700000000);
  const [simDeadline] = useState(1700086400); // +1 day
  const [simVoterAddress] = useState("0xAlice...1111");
  const [, setSimVoteStatus] = useState("open"); // 'open' | 'voted' | 'reverted'
  const [simCheatcodeLog, setSimCheatcodeLog] = useState("Environment initialized. block.timestamp = 1,700,000,000");

  const handleWarpTime = (seconds) => {
    const nextTime = simBlockTimestamp + seconds;
    setSimBlockTimestamp(nextTime);
    setSimCheatcodeLog(`Executed vm.warp(${nextTime}). Current block.timestamp is now ${nextTime}.`);
  };

  const handleVoteAction = () => {
    if (simBlockTimestamp >= simDeadline) {
      setSimVoteStatus("reverted");
      setSimCheatcodeLog(`[REVERT: 'Voting ended'] vm.expectRevert matched! Call failed because block.timestamp (${simBlockTimestamp}) >= deadline (${simDeadline}).`);
    } else {
      setSimVoteStatus("voted");
      setSimCheatcodeLog(`[SUCCESS] Vote recorded for ${simVoterAddress}. Transaction confirmed within deadline.`);
    }
  };

  // Simulator 4: Gas Benchmarking & Snapshot Comparator
  const [benchMode, setBenchMode] = useState("checked"); // 'checked' | 'unchecked'

  const gasStats = useMemo(() => {
    if (benchMode === "checked") {
      return {
        deployment: "142,510 gas",
        execution: "28,450 gas",
        sstore: "20,000 gas",
        delta: "+0% (Baseline)",
        desc: "Solidity 0.8+ automatic checked arithmetic prevents overflow with modest runtime opcode overhead."
      };
    } else {
      return {
        deployment: "128,190 gas",
        execution: "22,890 gas",
        sstore: "20,000 gas",
        delta: "-19.5% gas savings",
        desc: "Unchecked arithmetic bypasses overflow checks. Safe ONLY when math bounds are mathematically proven."
      };
    }
  }, [benchMode]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-28 sm:pb-36">
      {/* Top Track Navigation */}
      <ModuleNav track="blockchain" currentModuleId="testing" />

      {/* Hero Header Card */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-2">
              <Shield size={14} />
              <span>Blockchain Engineering Track &bull; Module 10</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#18181b] tracking-tight">
              Smart Contract Testing with Foundry &amp; Hardhat
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
              Foundry (Forge, Cast, Anvil, Chisel), Hardhat, Stateless Fuzzing, Stateful Invariants, Mainnet Forking, Time Cheatcodes, Gas Benchmarking &amp; Enterprise CI/CD.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Progress</span>
              <span className="text-sm font-bold text-orange-600 font-mono">{progressPercent}%</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-center">
              <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">Sections</span>
              <span className="text-sm font-bold text-stone-900 font-mono">22 / 22</span>
            </div>
          </div>
        </div>

        {/* 5-Tab Navigation Controls */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs">
          {[
            { id: "theory", label: "1. QA & Testing Theory (10.1–10.18)", icon: BookOpen },
            { id: "interactive", label: "2. Interactive Simulators (4 Tools)", icon: Cpu },
            { id: "labs", label: "3. QA & Security Lab (10.19)", icon: Terminal },
            { id: "quiz", label: "4. Assignments & Interviews (10.20–10.21)", icon: Shield },
            { id: "checklist", label: "5. Objective Tracker (26 Goals)", icon: ListChecks },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

        {/* TAB 1: CURRICULUM THEORY (SECTIONS 10.1 - 10.18) */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            {/* Hero Overview Card */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs relative overflow-hidden">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-4">
                <Shield size={14} />
                <span>Smart Contract Quality Assurance Track &bull; University Curriculum</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#18181b] tracking-tight">
                Module 10: Smart Contract Testing with Foundry &amp; Hardhat
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed max-w-4xl">
                Smart contract testing is one of the most critical disciplines in blockchain engineering. Unlike traditional software applications where patches and bugfixes can be deployed dynamically on cloud servers, deployed smart contracts are immutable and govern direct economic value. A single logic defect, unchecked external call, or arithmetic boundary error can lead to irreversible capital loss. This comprehensive module covers enterprise-grade testing methodologies using Foundry (Forge, Cast, Anvil, Chisel) and Hardhat.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-200/60">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Curriculum Level</span>
                  <span className="text-sm font-bold text-stone-900 mt-0.5 block">Advanced Core</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Primary Tooling</span>
                  <span className="text-sm font-bold text-stone-900 mt-0.5 block">Foundry &amp; Hardhat</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Testing Modalities</span>
                  <span className="text-sm font-bold text-stone-900 mt-0.5 block">Fuzz, Invariant &amp; CI</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Estimated Study Time</span>
                  <span className="text-sm font-bold text-stone-900 mt-0.5 block font-mono">12–15 Hours</span>
                </div>
              </div>
            </div>

            {/* SECTION 10.1: IMPORTANCE OF TESTING */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.1</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Importance of Smart Contract Testing</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Foundational Discipline</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">10.1.1 Why Testing Is Different in Blockchain</h4>
                <p>
                  Traditional applications can often be patched after deployment through live server updates and database migrations. In sharp contrast, smart contracts deployed on decentralized ledgers are immutable, and every execution permanently alters shared global state. Testing must therefore validate not only whether a function behaves properly under expected operational parameters, but also whether it remains resilient under adversarial, malformed, and out-of-order execution conditions.
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <p className="font-bold text-stone-900 mb-2">Case Study: Unvalidated Balance Decrement</p>
                  <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`function transfer(address recipient, uint256 amount) external returns (bool) {
    balanceOf[msg.sender] -= amount;
    balanceOf[recipient] += amount;
    return true;
}`}</pre>
                  <p className="mt-3 text-xs text-stone-600">
                    While Solidity 0.8+ checked arithmetic automatically reverts on underflow (if <code>balanceOf[msg.sender] &lt; amount</code>), critical system questions remain unaddressed: Does the recipient receive the correct amount? Does the contract emit the required <code>Transfer</code> event? Can the transaction be replayed across forks? Does the implementation behave safely during self-transfers (<code>msg.sender == recipient</code>)? Are unauthorized callers prevented from transferring other users&apos; tokens? Testing must systematically verify all of these dimensions.
                  </p>
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-3">10.1.2 Testing Objectives</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Objective</th>
                        <th className="px-4 py-3">Description</th>
                        <th className="px-4 py-3">Verification Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Correctness</td><td className="px-4 py-3">Verify expected business logic and state transitions</td><td className="px-4 py-3 font-mono">Unit &amp; Property Tests</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Security</td><td className="px-4 py-3">Identify vulnerabilities, reentrancy vectors, access control gaps</td><td className="px-4 py-3 font-mono">Fuzzing, Invariants, Static Analysis</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Reliability</td><td className="px-4 py-3">Validate deterministic, consistent behavior across varying states</td><td className="px-4 py-3 font-mono">Fork &amp; Mock Tests</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Compatibility</td><td className="px-4 py-3">Ensure ERC compliance, token standards, composability with DEXs</td><td className="px-4 py-3 font-mono">Integration &amp; Standard Tests</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Performance</td><td className="px-4 py-3">Measure execution cost, gas usage, and optimize storage layout</td><td className="px-4 py-3 font-mono">forge snapshot --diff</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Regression Prevention</td><td className="px-4 py-3">Ensure patched vulnerabilities and past bugs cannot be reintroduced</td><td className="px-4 py-3 font-mono">Automated CI Suites</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-3">10.1.3 The Smart Contract Testing Pyramid</h4>
                <p>
                  Unit tests form the broad foundation of the verification lifecycle, providing rapid, deterministic validation of isolated code units. Higher layers test broader system behavior, state space invariants, and external live protocol interactions.
                </p>

                {/* Testing Pyramid Visual */}
                <div className="space-y-2 pt-2">
                  <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-center max-w-sm mx-auto">
                    <span className="text-xs font-bold text-orange-900 uppercase tracking-wide">Apex: Security Audits &amp; Formal Verification</span>
                    <p className="text-[11px] text-orange-700">Independent audits, Certora / Halmos mathematical proofs</p>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center max-w-md mx-auto">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">Tier 5: Fork Testing</span>
                    <p className="text-[11px] text-amber-700">Simulation against live mainnet state, Uniswap, Chainlink feeds</p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center max-w-lg mx-auto">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">Tier 4: Invariant &amp; Stateful Fuzzing</span>
                    <p className="text-[11px] text-blue-700">Multi-call action sequences verifying vault solvency and conservation laws</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center max-w-xl mx-auto">
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide">Tier 3: Stateless Fuzz Testing</span>
                    <p className="text-[11px] text-emerald-700">Randomized pseudo-fuzz inputs discovering extreme boundary anomalies</p>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center max-w-2xl mx-auto">
                    <span className="text-xs font-bold text-purple-900 uppercase tracking-wide">Tier 2: Integration Testing</span>
                    <p className="text-[11px] text-purple-700">Cross-contract interactions: Token &rarr; Staking &rarr; Escrow &rarr; Settlement</p>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-100 border border-stone-300 text-center max-w-3xl mx-auto">
                    <span className="text-xs font-bold text-stone-900 uppercase tracking-wide">Base: Unit Testing (Largest Volume)</span>
                    <p className="text-[11px] text-stone-600">Fast, isolated checks of every function, branch, and modifier</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10.2: TESTING STRATEGIES */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.2</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Smart Contract Testing Strategies</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Methodological Taxonomy</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-stone-700">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <h4>10.2.1 Unit Testing</h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Unit testing isolates and exercises individual functions, getters, and state transitions in absolute isolation. Examples include verifying that <code>deposit()</code> increments the caller&apos;s mapped balance, <code>transfer()</code> updates balances and emits events, and <code>transferOwnership()</code> updates the contract owner.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <h4>10.2.2 Integration Testing</h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Integration testing validates interactions between multiple interconnected contracts. For instance, testing how an ERC-20 token interacts with a Marketplace contract, which in turn holds funds inside an Escrow contract, which triggers payment settlement via an Arbitrator. It verifies permissions, gas handoffs, and shared assumptions.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <h4>10.2.3 Regression Testing</h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Regression tests ensure that bugs identified during past testing campaigns, audits, or mainnet incidents cannot be reintroduced during subsequent refactoring. Whenever a defect is reported, engineers first write a failing test reproducing the exact issue before writing the fix.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-stone-900">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <h4>10.2.4 Negative Testing</h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Negative testing explicitly validates that invalid actions, unauthorized callers, zero-address transfers, out-of-bounds parameters, and reentrant attacks revert with the exact expected error selectors. It guarantees security boundary integrity.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10.3: SOLIDITY TESTING FRAMEWORKS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.3</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Solidity Testing Frameworks</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Foundry vs Hardhat Architecture</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-700">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <h4 className="font-bold text-stone-900 flex items-center gap-2">
                    <Terminal size={16} className="text-orange-600" />
                    10.3.1 Foundry Architecture
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Foundry is a blazing-fast, portable, and modular toolkit for Ethereum application development written in Rust. Tests are written directly in Solidity, removing the context switching and serialization overhead between Solidity and JavaScript.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-600 list-disc pl-4">
                    <li><strong>Forge:</strong> High-performance Ethereum testing framework that executes tests directly inside a local revm instance.</li>
                    <li><strong>Cast:</strong> Swiss army knife CLI for interacting with EVM smart contracts, sending transactions, and querying chain data.</li>
                    <li><strong>Anvil:</strong> Fast local Ethereum node designed for fork testing, simulating local development networks.</li>
                    <li><strong>Chisel:</strong> Fast, flexible, and verbose Solidity REPL for instant expression prototyping and opcode exploration.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
                  <h4 className="font-bold text-stone-900 flex items-center gap-2">
                    <Cpu size={16} className="text-blue-600" />
                    10.3.2 Hardhat Architecture
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Hardhat is an extensible JavaScript/TypeScript development environment for Ethereum software. Tests are written using standard JavaScript testing libraries such as Mocha and Chai, backed by <code>ethers.js</code> or <code>viem</code>.
                  </p>
                  <ul className="text-xs space-y-1.5 text-stone-600 list-disc pl-4">
                    <li><strong>Hardhat Network:</strong> Local Ethereum node running inside Node.js that supports stack traces and <code>console.log</code>.</li>
                    <li><strong>Mocha/Chai:</strong> Familiar assertion syntax for Web2 full-stack engineers and front-end integration testing.</li>
                    <li><strong>Extensive Ecosystem:</strong> Rich plugin architecture including <code>hardhat-gas-reporter</code>, <code>solidity-coverage</code>, and TypeChain.</li>
                  </ul>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                  <thead className="bg-stone-50 font-bold text-stone-700">
                    <tr>
                      <th className="px-4 py-3">Dimension</th>
                      <th className="px-4 py-3">Foundry</th>
                      <th className="px-4 py-3">Hardhat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">Test Language</td><td className="px-4 py-3 font-mono text-emerald-700 font-semibold">Solidity</td><td className="px-4 py-3 font-mono">JavaScript / TypeScript</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">Execution Speed</td><td className="px-4 py-3 text-emerald-700 font-semibold">Extremely Fast (Rust EVM / revm)</td><td className="px-4 py-3 text-stone-600">Moderate (Node.js serialization)</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">Cheatcodes</td><td className="px-4 py-3 font-mono">vm.warp, vm.prank, vm.deal, vm.roll</td><td className="px-4 py-3 font-mono">network.provider.send() helpers</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">Fuzz &amp; Invariant Testing</td><td className="px-4 py-3 font-semibold text-emerald-700">Native stateless &amp; stateful invariants</td><td className="px-4 py-3">Requires external plugins or Echidna</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">Trace Debugger</td><td className="px-4 py-3 font-mono">forge test -vvvv &amp; Chisel REPL</td><td className="px-4 py-3 font-mono">console.log &amp; Hardhat stack traces</td></tr>
                    <tr><td className="px-4 py-3 font-semibold text-stone-900">Mainnet Forking</td><td className="px-4 py-3 font-mono">vm.createSelectFork()</td><td className="px-4 py-3 font-mono">hardhat: &#123; forking: &#123; url &#125; &#125;</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10.4: FOUNDRY INSTALLATION AND SETUP */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.4</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Foundry Installation and Project Setup</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Toolchain Configuration</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">10.4.1 Installing Foundry</h4>
                <p>
                  Foundry is installed via <code>foundryup</code>, the official toolchain installer:
                </p>
                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`# 1. Download and run the installer script
curl -L https://foundry.paradigm.xyz | bash

# 2. Update toolchain binaries (forge, cast, anvil, chisel)
foundryup

# 3. Initialize a new Foundry workspace
forge init my-project --no-commit
cd my-project`}</pre>

                <h4 className="text-base font-bold text-stone-900 pt-2">10.4.2 Project Configuration: <code>foundry.toml</code></h4>
                <p>
                  Foundry projects are configured via <code>foundry.toml</code> in the project root:
                </p>
                <pre className="font-mono text-xs bg-[#18181b] text-stone-300 p-4 rounded-xl overflow-x-auto">{`[profile.default]
src = "src"
out = "out"
libs = ["lib"]
test = "test"
solc_version = "0.8.28"
optimizer = true
optimizer_runs = 200

[fuzz]
runs = 1000
max_test_rejects = 65536

[invariant]
runs = 256
depth = 64
fail_on_revert = false`}</pre>
                <p className="text-xs text-stone-600">
                  The configuration pins the Solidity compiler version, sets standard optimization passes, and specifies default execution budgets for stateless fuzzing (1,000 runs) and stateful invariant testing (256 runs with call depth 64).
                </p>
              </div>
            </section>

            {/* SECTION 10.5: UNIT TESTING WITH FOUNDRY FORGE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.5</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Unit Testing with Foundry Forge</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Solidity Test Suites</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">10.5.1 Test Contract Structure &amp; Conventions</h4>
                <p>
                  Foundry test contracts inherit from <code>Test</code> provided by <code>forge-std</code>. The standard conventions are:
                </p>
                <ul className="text-xs space-y-1 list-disc pl-4 text-stone-600">
                  <li>File naming: <code>ContractName.t.sol</code> located in the <code>test/</code> directory.</li>
                  <li><code>setUp()</code>: Executed before every individual test function, resetting clean state.</li>
                  <li><code>test*()</code>: Functions prefixed with <code>test</code> are recognized as standard tests that must pass.</li>
                  <li><code>testFail*()</code>: Legacy convention for tests expected to revert (modern best practice uses <code>vm.expectRevert()</code>).</li>
                </ul>

                <h4 className="text-base font-bold text-stone-900 pt-2">10.5.2 Forge Standard Assertions</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Assertion</th>
                        <th className="px-4 py-3">Usage &amp; Signature</th>
                        <th className="px-4 py-3">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600 font-mono">
                      <tr><td className="px-4 py-3 text-stone-900 font-bold">assertEq</td><td className="px-4 py-3">assertEq(a, b, [err])</td><td className="px-4 py-3 font-sans">Verifies a == b (supports uint, int, address, bool, string, bytes)</td></tr>
                      <tr><td className="px-4 py-3 text-stone-900 font-bold">assertTrue</td><td className="px-4 py-3">assertTrue(condition, [err])</td><td className="px-4 py-3 font-sans">Verifies condition evaluates to true</td></tr>
                      <tr><td className="px-4 py-3 text-stone-900 font-bold">assertFalse</td><td className="px-4 py-3">assertFalse(condition, [err])</td><td className="px-4 py-3 font-sans">Verifies condition evaluates to false</td></tr>
                      <tr><td className="px-4 py-3 text-stone-900 font-bold">assertLt / assertGt</td><td className="px-4 py-3">assertLt(a, b) / assertGt(a, b)</td><td className="px-4 py-3 font-sans">Verifies strict inequalities (a &lt; b or a &gt; b)</td></tr>
                      <tr><td className="px-4 py-3 text-stone-900 font-bold">assertApproxEqAbs</td><td className="px-4 py-3">assertApproxEqAbs(a, b, maxDelta)</td><td className="px-4 py-3 font-sans">Verifies |a - b| &le; maxDelta (vital for rounding in AMMs &amp; vaults)</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-2">10.5.3 Complete Counter Contract &amp; Test Suite</h4>
                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`// test/Counter.t.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "forge-std/Test.sol";

contract Counter {
    uint256 public number;
    function setNumber(uint256 newNumber) public { number = newNumber; }
    function increment() public { number++; }
}

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter();
        counter.setNumber(0);
    }

    function test_InitialValueIsZero() public view {
        assertEq(counter.number(), 0, "Initial number must be 0");
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.number(), 1);
    }

    function test_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }
}`}</pre>
              </div>
            </section>

            {/* SECTION 10.6: TESTING WITH HARDHAT */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.6</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Testing with Hardhat</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">JavaScript &amp; TypeScript Ecosystem</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">10.6.1 Installation &amp; Environment Setup</h4>
                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox ethers chai`}</pre>

                <h4 className="text-base font-bold text-stone-900 pt-2">10.6.2 Mocha/Chai Test Suite Implementation</h4>
                <p>
                  Hardhat uses Mocha&apos;s <code>describe</code> / <code>it</code> hierarchy and Chai matchers extended with <code>@nomicfoundation/hardhat-chai-matchers</code>:
                </p>
                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`// test/Counter.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter Contract", function () {
    let counter;
    let owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const Counter = await ethers.getContractFactory("Counter");
        counter = await Counter.deploy();
        await counter.waitForDeployment();
    });

    it("Should initialize counter to 0", async function () {
        expect(await counter.number()).to.equal(0);
    });

    it("Should increment counter value correctly", async function () {
        await counter.increment();
        expect(await counter.number()).to.equal(1);
    });

    it("Should emit NumberUpdated event", async function () {
        await expect(counter.setNumber(42))
            .to.emit(counter, "NumberUpdated")
            .withArgs(42);
    });

    it("Should revert on unauthorized call", async function () {
        await expect(counter.connect(addr1).adminReset())
            .to.be.revertedWith("Ownable: caller is not the owner");
    });
});`}</pre>
              </div>
            </section>

            {/* SECTION 10.7: TEST FIXTURES */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.7</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Test Fixtures</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Deterministic State Initialization</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">10.7.1 What Is a Test Fixture?</h4>
                <p>
                  A fixture establishes a known, reusable baseline state for executing tests. In complex multi-contract architectures (e.g., an escrow or lending protocol), repeating contract deployments and account funding inside every test case slows down execution and violates DRY principles.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <span className="font-bold text-stone-900 text-xs block mb-2">Foundry Fixture (setUp &amp; makeAddr)</span>
                    <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-3 rounded-xl overflow-x-auto">{`function setUp() public {
    buyer = makeAddr("buyer");
    seller = makeAddr("seller");
    arbitrator = makeAddr("arbitrator");
    vm.deal(buyer, 100 ether);
    vm.deal(seller, 10 ether);
    escrow = new Escrow(seller, arbitrator);
}`}</pre>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <span className="font-bold text-stone-900 text-xs block mb-2">Hardhat Snapshot Fixture (loadFixture)</span>
                    <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-3 rounded-xl overflow-x-auto">{`const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

async function deployEscrowFixture() {
    const [buyer, seller, arb] = await ethers.getSigners();
    const Escrow = await ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy(seller.address, arb.address);
    return { escrow, buyer, seller, arb };
}

it("deposits successfully", async function () {
    const { escrow, buyer } = await loadFixture(deployEscrowFixture);
    // Runs against instantaneous chain snapshot
});`}</pre>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 10.8: TEST COVERAGE */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.8</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Test Coverage &amp; The 100% Security Myth</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Coverage Metrics Analysis</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  Test coverage measures the proportion of source code executed while running the test suite:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-stone-700 block">Statement</span>
                    <span className="text-xs text-stone-500">% of executable statements evaluated</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-stone-700 block">Branch</span>
                    <span className="text-xs text-stone-500">% of if/else logic paths traversed</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-stone-700 block">Function</span>
                    <span className="text-xs text-stone-500">% of defined functions called</span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-xs font-bold text-stone-700 block">Line</span>
                    <span className="text-xs text-stone-500">% of raw source lines executed</span>
                  </div>
                </div>

                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`# Run Foundry coverage analysis
forge coverage

# Export detailed LCOV report for SonarQube or Coveralls
forge coverage --report lcov`}</pre>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs leading-relaxed">
                  <strong>Vital Security Principle: 100% Coverage &ne; 100% Secure.</strong> A test suite can achieve 100% line and branch coverage while completely failing to test unauthorized access modifiers, flash-loan price manipulation, precision-loss division ordering, or front-running sandwich attacks. Coverage is a metric of what code has been touched, not whether invariant properties hold under adversarial stress.
                </div>
              </div>
            </section>

            {/* SECTION 10.9: FUZZ TESTING */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.9</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Stateless Fuzz Testing</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Automated Input Generation</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  Fuzz testing provides pseudo-random inputs to a test function across hundreds or thousands of iterations. In Foundry, any test function that accepts parameters automatically becomes a fuzz test:
                </p>

                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`function testFuzz_SafeTransfer(address to, uint256 amount) public {
    // vm.assume filters out invalid inputs from the fuzzer corpus
    vm.assume(to != address(0));
    vm.assume(to != address(token));
    vm.assume(amount <= 1_000_000 ether);

    token.mint(address(this), amount);
    token.transfer(to, amount);

    assertEq(token.balanceOf(to), amount);
}`}</pre>

                <p className="text-xs text-stone-600">
                  When Foundry discovers an input that triggers an unexpected revert or assertion failure, it isolates the failing input and performs <em>shrinking</em>, reducing the failing parameter to the minimal counterexample that reproduces the failure.
                </p>
              </div>
            </section>

            {/* SECTION 10.10: PROPERTY-BASED TESTING */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.10</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Property-Based Testing</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Mathematical Invariants</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  Property-based testing validates general rules that must hold universally for all valid inputs. Rather than testing specific instances (e.g., <code>transfer(Alice, 5)</code>), it asserts mathematical conservation laws:
                </p>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 font-mono text-xs text-stone-900 text-center">
                  B_sender + B_recipient = B_sender_initial + B_recipient_initial
                </div>

                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Smart Contract Type</th>
                        <th className="px-4 py-3">Fundamental Universal Property</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">ERC-20 Token</td><td className="px-4 py-3 font-mono">Sum of all user balances == totalSupply (without mint/burn)</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Governance / Voting</td><td className="px-4 py-3 font-mono">Total votes cast &le; total eligible voting power</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Escrow System</td><td className="px-4 py-3 font-mono">Settled funds cannot be released, refunded, or doubled</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Collateralized Vault</td><td className="px-4 py-3 font-mono">Contract underlying balance &ge; total deposited user shares</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-stone-900">Access Registry</td><td className="px-4 py-3 font-mono">Non-admin accounts cannot mutate configuration keys</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* SECTION 10.11: INVARIANT TESTING */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.11</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Stateful Invariant Testing &amp; Handler Architecture</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">State Space Minimization</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  While stateless fuzzing tests a single function call with random inputs, <strong>invariant testing</strong> executes sequences of dozens of randomized function calls across multiple accounts, checking after <em>every single step</em> that global invariants remain unviolated.
                </p>

                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`// test/VaultInvariant.t.sol
import "forge-std/Test.sol";
import "../src/SimpleVault.sol";

contract VaultInvariantTest is Test {
    SimpleVault vault;

    function setUp() public {
        vault = new SimpleVault();
        targetContract(address(vault));
    }

    // Invariant: The vault's actual Ether balance must ALWAYS match total logged deposits
    function invariant_Solvency() public view {
        assertGe(address(vault).balance, vault.totalDeposits(), "Vault insolvent!");
    }
}`}</pre>

                <h4 className="text-base font-bold text-stone-900 pt-2">Sequence Minimization Workflow</h4>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-700 flex-wrap">
                    <span className="px-2 py-1 bg-stone-200 rounded">Random Call Chain (Depth 64)</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 bg-rose-100 text-rose-800 font-bold rounded">Invariant Broken</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded">Forge Sequence Shrinker</span>
                    <span>&rarr;</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 font-bold rounded">Minimal Exploit: Deposit(10) &rarr; FlashLoan &rarr; Withdraw</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-2">
                    Foundry automatically strips redundant calls from the sequence, presenting engineers with the smallest exact trace that reproduces the violation.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10.12: FORK TESTING */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.12</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Mainnet Fork Testing</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Realistic Ecosystem Simulation</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  Fork testing creates a local simulation pinned to an exact historical or live mainnet block. This allows contracts to interact with real deployed protocols (Uniswap, Aave, Chainlink, DAI) without incurring mainnet gas fees or deploying mock ecosystems.
                </p>

                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`# 1. Start Anvil fork node via CLI
anvil --fork-url https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY --fork-block-number 19500000

# 2. Or programmatically within Foundry tests
function setUp() public {
    uint256 mainnetFork = vm.createFork(vm.envString("ETH_RPC_URL"), 19_500_000);
    vm.selectFork(mainnetFork);
    
    // Now address(0x6B175474E89094C44Da98b954EedeAC495271d0F) is the real DAI contract!
    IERC20 dai = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
    assertGt(dai.totalSupply(), 0);
}`}</pre>
              </div>
            </section>

            {/* SECTION 10.13: MOCK CONTRACTS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.13</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Mock Contracts</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Simulated External Dependencies</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  A mock contract simulates the interface and behavior of an external system under controlled conditions, enabling testing of edge cases (e.g., failed transfers, stale oracle prices, malicious reentrancy hooks) that are difficult to trigger on live networks:
                </p>

                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`// test/mocks/MockToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MockToken {
    mapping(address => uint256) public balanceOf;
    bool public shouldFailTransfer;

    function setFailTransfer(bool fail) external { shouldFailTransfer = fail; }
    function mint(address to, uint256 amt) external { balanceOf[to] += amt; }

    function transfer(address to, uint256 amt) external returns (bool) {
        if (shouldFailTransfer) return false;
        require(balanceOf[msg.sender] >= amt, "Insufficient balance");
        balanceOf[msg.sender] -= amt;
        balanceOf[to] += amt;
        return true;
    }
}`}</pre>
              </div>
            </section>

            {/* SECTION 10.14: TIME MANIPULATION */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.14</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Time Manipulation &amp; Cheatcodes</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Foundry VM Primitives</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  Time-locked logic (e.g., voting periods, token vesting schedules, escrow expiration) relies on <code>block.timestamp</code>. Foundry provides VM cheatcodes to manipulate block context:
                </p>

                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200 font-mono">
                    <thead className="bg-stone-50 font-bold text-stone-700 font-sans">
                      <tr>
                        <th className="px-4 py-3">Cheatcode</th>
                        <th className="px-4 py-3">Parameters</th>
                        <th className="px-4 py-3 font-sans">Operational Effect</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-bold text-stone-900">vm.warp(t)</td><td className="px-4 py-3">uint256 newTimestamp</td><td className="px-4 py-3 font-sans">Sets block.timestamp to exactly t seconds</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">vm.roll(b)</td><td className="px-4 py-3">uint256 newBlockNumber</td><td className="px-4 py-3 font-sans">Advances or sets block.number to b</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">vm.skip(d)</td><td className="px-4 py-3">uint256 durationInSeconds</td><td className="px-4 py-3 font-sans">Adds d seconds to current block.timestamp</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">vm.deal(a, b)</td><td className="px-4 py-3">address who, uint256 newBalance</td><td className="px-4 py-3 font-sans">Directly sets native Ether balance of account a</td></tr>
                      <tr><td className="px-4 py-3 font-bold text-stone-900">vm.prank(a)</td><td className="px-4 py-3">address caller</td><td className="px-4 py-3 font-sans">Sets msg.sender for the next immediate external call</td></tr>
                    </tbody>
                  </table>
                </div>

                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`function test_VoteFailsAfterDeadline() public {
    // Fast-forward 8 days past the 7-day voting deadline
    vm.warp(block.timestamp + 8 days);

    vm.expectRevert("Voting period concluded");
    voting.vote(proposalId, 1);
}`}</pre>
              </div>
            </section>

            {/* SECTION 10.15: REVERT TESTING */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.15</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Revert Testing &amp; Custom Error Selectors</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Negative Execution Validation</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  Modern Solidity practices replace costly string reverts with custom errors (saving &ge; 40 gas per revert and contract bytecode). Foundry tests must verify the exact custom error 4-byte selector:
                </p>

                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`// In contract:
error InsufficientBalance(uint256 available, uint256 required);

// In test:
function test_RevertInsufficientBalance() public {
    vm.prank(unfundedUser);
    
    // Expect revert with exact custom error selector and parameter data
    vm.expectRevert(
        abi.encodeWithSelector(InsufficientBalance.selector, 0, 100 ether)
    );
    vault.withdraw(100 ether);
}`}</pre>
              </div>
            </section>

            {/* SECTION 10.16: GAS BENCHMARKING */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.16</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Gas Benchmarking &amp; Snapshot Diffs</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Gas Optimization Tracking</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  Foundry includes native gas metering that captures exact gas costs per transaction and compares diffs against historical commits:
                </p>

                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`# 1. Output tabular gas consumption across all functions
forge test --gas-report

# 2. Save snapshot baseline to .gas-snapshot
forge snapshot

# 3. Check diff after refactoring
forge snapshot --diff`}</pre>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-xs font-bold text-stone-900 block mb-1">Checked vs. Unchecked Gas Benchmark Example</span>
                  <p className="text-xs text-stone-600">
                    In tight loops where the index cannot overflow the array length, wrapping increments in <code>unchecked &#123; ++i; &#125;</code> eliminates unnecessary SafeMath overflow assertion opcodes, saving 30–80 gas per iteration.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 10.17: DEBUGGING FAILED TRANSACTIONS */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.17</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Debugging Failed Transactions &amp; Tracing</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Failure Analysis Matrix</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <h4 className="text-base font-bold text-stone-900">10.17.1 Common Failure Causes</h4>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="min-w-full text-xs text-left divide-y divide-stone-200">
                    <thead className="bg-stone-50 font-bold text-stone-700">
                      <tr>
                        <th className="px-4 py-3">Failure Symptom</th>
                        <th className="px-4 py-3">Root Cause Analysis</th>
                        <th className="px-4 py-3">Remediation Tactic</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600">
                      <tr><td className="px-4 py-3 font-semibold text-rose-700">Transaction Reverted</td><td className="px-4 py-3">require() or revert statement triggered</td><td className="px-4 py-3">Inspect custom error selector or revert string</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-rose-700">Out-of-Gas</td><td className="px-4 py-3">Gas limit exceeded by unbounded loops or cold storage SSTORE</td><td className="px-4 py-3">Profile gas report; introduce pagination</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-rose-700">Invalid Opcode / Panic(0x01)</td><td className="px-4 py-3">assert(false) or compiler panic code</td><td className="px-4 py-3">Check internal invariant logic</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-rose-700">Arithmetic Panic(0x11)</td><td className="px-4 py-3">Checked addition overflow or subtraction underflow</td><td className="px-4 py-3">Validate input boundaries or bounds check</td></tr>
                      <tr><td className="px-4 py-3 font-semibold text-rose-700">External Call Failure</td><td className="px-4 py-3">Called address returned 0 or reverted without message</td><td className="px-4 py-3">Verify target contract bytecode deployed on fork</td></tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-base font-bold text-stone-900 pt-2">10.17.2 The 8-Step Debugging Workflow</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200"><span className="font-bold block text-stone-900">1. Reproduce</span>Isolate failing test with minimal inputs</div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200"><span className="font-bold block text-stone-900">2. Trace (-vvvv)</span>Run <code>forge test -vvvv</code> to read EVM stack</div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200"><span className="font-bold block text-stone-900">3. Identify Opcode</span>Find the exact instruction where execution halted</div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200"><span className="font-bold block text-stone-900">4. Inspect Storage</span>Examine contract storage slots before &amp; after</div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200"><span className="font-bold block text-stone-900">5. Inspect Inputs</span>Check function arguments and caller address</div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200"><span className="font-bold block text-stone-900">6. Check Dependencies</span>Validate mock contracts and external oracles</div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200"><span className="font-bold block text-stone-900">7. Patch Logic</span>Correct the logic defect or state order</div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200"><span className="font-bold block text-stone-900">8. Regression Test</span>Ensure entire test suite and invariants pass</div>
                </div>
              </div>
            </section>

            {/* SECTION 10.18: CONTINUOUS INTEGRATION */}
            <section className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-200/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-100 font-mono text-xs font-bold text-stone-700">10.18</span>
                  <h3 className="text-xl font-bold text-[#18181b]">Continuous Integration for Smart Contracts</h3>
                </div>
                <span className="text-xs text-stone-500 font-mono">Automated GitHub Actions CI/CD</span>
              </div>

              <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>
                  Continuous Integration (CI) enforces test execution, linting, fuzzing campaigns, and static security checks on every pull request before code can be merged into production branches.
                </p>

                <pre className="font-mono text-xs bg-[#18181b] text-emerald-400 p-4 rounded-xl overflow-x-auto">{`# .github/workflows/foundry.yml
name: Smart Contract CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    name: Foundry Test Suite
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Install Foundry
        uses: foundry-rs/foundry-toolchain@v1
        with:
          version: nightly

      - name: Compile Contracts
        run: forge build --sizes

      - name: Execute Tests with Verbosity
        run: forge test -vvv

      - name: Check Gas Snapshot
        run: forge snapshot --check

      - name: Generate Code Coverage
        run: forge coverage --report summary`}</pre>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs text-stone-600">
                  <strong>Production Hardening:</strong> In mission-critical repositories, pin all GitHub Actions to exact full-length commit SHAs (e.g., <code>actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11</code>) to prevent supply chain compromise, store RPC credentials in encrypted GitHub Secrets, and run extended fuzzing campaigns (100,000+ runs) on scheduled nightly runs.
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: INTERACTIVE SIMULATORS */}
        {activeTab === "interactive" && (
          <div className="space-y-10">
            {/* Header */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-3">
                <Cpu size={14} />
                <span>Quality Assurance Labs &bull; Real-Time Testing Simulators</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                Interactive Smart Contract Testing &amp; Verification Suite
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
                Test and inspect production smart contract verification workflows in live sandboxes. Execute randomized fuzzing campaigns, formulate stateful protocol invariants with ghost accounting, manipulate blockchain time with Foundry cheatcodes, and benchmark gas deltas with Forge snapshots.
              </p>
            </div>

            {/* SIMULATOR 1: FOUNDRY FUZZ TESTING ENGINE */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                    Simulator 1 &bull; Property-Based Fuzzing
                  </span>
                  <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                    Forge Stateless Fuzz Testing &amp; Counterexample Discovery
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-stone-700">Fuzz Runs:</span>
                  <select
                    value={fuzzRunsTarget}
                    onChange={(e) => setFuzzRunsTarget(Number(e.target.value))}
                    disabled={fuzzStatus === "running"}
                    className="px-3 py-1.5 rounded-xl border border-stone-200 bg-stone-50 font-mono text-xs text-stone-800 focus:outline-none focus:border-orange-500 cursor-pointer"
                  >
                    <option value={64}>64 runs (Quick check)</option>
                    <option value={256}>256 runs (Standard Forge)</option>
                    <option value={1000}>1,000 runs (Deep fuzz)</option>
                  </select>
                </div>
              </div>

              {/* Fuzz Config & Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block mb-1">Target Function</span>
                  <div className="font-mono text-xs font-bold text-stone-900">transfer(address to, uint256 amt)</div>
                  <span className="text-[10px] text-stone-500 mt-0.5 block">ERC-20 Token Balance Transfer</span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block mb-1">Adversarial Simulation</span>
                  <label className="flex items-center gap-2 cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      checked={enableFlaw}
                      onChange={(e) => setEnableFlaw(e.target.checked)}
                      disabled={fuzzStatus === "running"}
                      className="rounded text-orange-600 focus:ring-orange-500 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-rose-700">Inject Zero-Address Bug</span>
                  </label>
                  <span className="text-[10px] text-stone-500 block mt-0.5">Omits <code>require(to != address(0))</code> check</span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block">Status</span>
                    <span className={`text-xs font-bold font-mono ${fuzzStatus === "passed" ? "text-emerald-600" : fuzzStatus === "violation" ? "text-rose-600" : "text-stone-700"}`}>
                      {fuzzStatus === "running" ? `Running (${fuzzCompletedRuns}/${fuzzRunsTarget})` : fuzzStatus === "passed" ? "PASSED (0 Invariant Violations)" : fuzzStatus === "violation" ? "FAILED (Counterexample Found)" : "Idle"}
                    </span>
                  </div>
                  <button
                    onClick={runFuzzCampaign}
                    disabled={fuzzStatus === "running"}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition cursor-pointer shadow-xs active:scale-95 disabled:opacity-40"
                  >
                    <Play size={13} />
                    <span>Run Fuzz</span>
                  </button>
                </div>
              </div>

              {/* Terminal Logs */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Forge Fuzz Test Terminal Output
                </span>
                <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs space-y-1.5 max-h-48 overflow-y-auto border border-neutral-800">
                  {fuzzLogs.length === 0 ? (
                    <div className="text-neutral-500 italic">Click &quot;Run Fuzz&quot; to execute randomized Forge test runner...</div>
                  ) : (
                    fuzzLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={
                          log.includes("[FAIL")
                            ? "text-rose-400 font-bold"
                            : log.includes("[Counterexample")
                            ? "text-amber-400"
                            : log.includes("[PASS]")
                            ? "text-emerald-400 font-bold"
                            : "text-neutral-300"
                        }
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: STATEFUL INVARIANT TESTING ENGINE */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-4 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Simulator 2 &bull; Stateful Invariants
                </span>
                <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                  Handler-Based Invariant Verification &amp; Ghost Accounting
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Unlike stateless tests, invariant testing executes randomized sequences of multiple transactions across diverse actors, verifying that global conservation laws remain unbroken.
                </p>
              </div>

              {/* Invariant Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block">Tested Invariant Rule</span>
                  <div className="font-mono text-xs font-bold text-stone-900 mt-1">
                    vault.balance &gt;= totalLiabilities
                  </div>
                  <span className="text-[10px] text-stone-500">Solvency Guarantee (No Under-Collateralization)</span>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block">Ghost Accounting</span>
                  <div className="font-mono text-xs font-bold text-orange-600 mt-1">
                    Vault ETH: {ghostVaultBalance.toFixed(1)} | Liabilities: {ghostTotalLiabilities.toFixed(1)}
                  </div>
                  <span className="text-[10px] text-stone-500">Tracked independently by testing handler</span>
                </div>

                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block">Sequence Depth</span>
                    <span className="font-mono text-xs font-bold text-stone-800">{invariantSeqLength} calls / run</span>
                  </div>
                  <button
                    onClick={runInvariantTest}
                    disabled={invariantStatus === "running"}
                    className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition cursor-pointer shadow-xs active:scale-95 disabled:opacity-40"
                  >
                    Execute Campaign
                  </button>
                </div>
              </div>

              {/* Invariant Logs */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  Invariant Campaign Trace
                </span>
                <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs max-h-48 overflow-y-auto border border-neutral-800 text-emerald-400">
                  {invariantLogs.length === 0 ? (
                    <div className="text-neutral-500 italic">Click &quot;Execute Campaign&quot; to run stateful invariant handler checks...</div>
                  ) : (
                    invariantLogs.map((l, i) => <div key={i}>{l}</div>)
                  )}
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: FOUNDRY CHEATCODE TIME & STATE MANIPULATOR */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-4 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Simulator 3 &bull; EVM Cheatcode Sandbox
                </span>
                <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                  Time &amp; State Manipulation with vm.warp, vm.prank, and vm.expectRevert
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Test time-locked smart contracts by manipulating <code>block.timestamp</code> and <code>msg.sender</code> in a simulated EVM environment.
                </p>
              </div>

              {/* Status Header */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block">Current block.timestamp</span>
                  <div className="font-mono text-xs font-bold text-stone-900 mt-0.5">{simBlockTimestamp}</div>
                  <span className="text-[10px] text-stone-500">Manipulated via vm.warp()</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block">Voting Deadline</span>
                  <div className="font-mono text-xs font-bold text-orange-600 mt-0.5">{simDeadline} (+1 Day)</div>
                  <span className="text-[10px] text-stone-500">Strict contract cutoff</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-stone-500 block">Active Caller (vm.prank)</span>
                  <div className="font-mono text-xs font-bold text-stone-900 mt-0.5">{simVoterAddress}</div>
                  <span className="text-[10px] text-stone-500">Eligible registered voter</span>
                </div>
              </div>

              {/* Cheatcode Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <button
                  onClick={() => handleWarpTime(3600)}
                  className="px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 font-mono text-xs font-bold text-stone-700 transition cursor-pointer shadow-2xs"
                >
                  vm.warp(+1 Hour)
                </button>
                <button
                  onClick={() => handleWarpTime(43200)}
                  className="px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 font-mono text-xs font-bold text-stone-700 transition cursor-pointer shadow-2xs"
                >
                  vm.warp(+12 Hours)
                </button>
                <button
                  onClick={() => handleWarpTime(86400)}
                  className="px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 font-mono text-xs font-bold text-stone-700 transition cursor-pointer shadow-2xs"
                >
                  vm.warp(+24 Hours - Past Deadline)
                </button>
                <button
                  onClick={() => {
                    setSimBlockTimestamp(1700000000);
                    setSimVoteStatus("open");
                    setSimCheatcodeLog("Reset time to initial block.timestamp = 1,700,000,000");
                  }}
                  className="px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-600 text-xs font-bold transition cursor-pointer"
                >
                  Reset Time
                </button>
                <button
                  onClick={handleVoteAction}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition cursor-pointer shadow-xs active:scale-95 ml-auto"
                >
                  Execute vote() Transaction
                </button>
              </div>

              {/* Execution Log */}
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 font-mono text-xs text-neutral-300">
                <span className="text-[10px] font-mono font-bold uppercase text-orange-400 block mb-1">Cheatcode Audit Log:</span>
                <div>{simCheatcodeLog}</div>
              </div>
            </div>

            {/* SIMULATOR 4: GAS BENCHMARKING & SNAPSHOT COMPARATOR */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="border-b border-[#e7e3da] pb-4 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Simulator 4 &bull; Gas Profiling
                </span>
                <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                  Forge Gas Snapshot &amp; Diff Comparison Engine
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Inspect computational execution cost deltas when refactoring algorithms or modifying compiler optimizer flags.
                </p>
              </div>

              {/* Toggle Implementation */}
              <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-stone-100 border border-stone-200 max-w-md mb-6">
                <button
                  onClick={() => setBenchMode("checked")}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${benchMode === "checked" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-500 hover:text-stone-900"}`}
                >
                  Standard Checked Math
                </button>
                <button
                  onClick={() => setBenchMode("unchecked")}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${benchMode === "unchecked" ? "bg-white text-stone-900 shadow-2xs" : "text-stone-500 hover:text-stone-900"}`}
                >
                  Optimized Unchecked Loop
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6 font-mono">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-sans uppercase font-bold text-stone-500 block">Deployment Cost</span>
                  <div className="text-sm font-bold text-stone-900 mt-1">{gasStats.deployment}</div>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-sans uppercase font-bold text-stone-500 block">Execution (100 Iters)</span>
                  <div className="text-sm font-bold text-stone-900 mt-1">{gasStats.execution}</div>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-sans uppercase font-bold text-stone-500 block">Storage Write (SSTORE)</span>
                  <div className="text-sm font-bold text-stone-900 mt-1">{gasStats.sstore}</div>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] font-sans uppercase font-bold text-stone-500 block">Snapshot Diff</span>
                  <div className={`text-sm font-bold mt-1 ${benchMode === "unchecked" ? "text-emerald-600" : "text-stone-700"}`}>
                    {gasStats.delta}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                <strong>Architectural Tradeoff:</strong> {gasStats.desc}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRACTICAL LAB - SMART CONTRACT TESTING LABORATORY */}
        {activeTab === "labs" && (
          <div className="space-y-10">
            {/* Header Card */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-3">
                <Boxes size={14} />
                <span>10.19 Hands-On Engineering Project &bull; Production QA Lab</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                Practical Lab: Smart Contract Testing Laboratory
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
                Build a comprehensive automated testing suite for three foundational Web3 components: an ERC-20 token (<code>PrepToken.sol</code>), a decentralized voting contract (<code>Voting.sol</code>), and a conditional escrow system (<code>Escrow.sol</code>). Validate contracts under normal, invalid, randomized, and adversarial reentrancy conditions using Foundry Forge.
              </p>
            </div>

            {/* Project Architecture */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                10.19.1 Repository Structure
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-4">
                SmartContractTestingLab Layout
              </h3>
              <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto">
                <pre>{`SmartContractTestingLab/
├── src/
│   ├── PrepToken.sol          # OpenZeppelin-based ERC-20 token
│   ├── Voting.sol             # Proposal voting with duplicate prevention & deadlines
│   └── Escrow.sol             # Conditional custody with pull withdrawals
├── test/
│   ├── PrepToken.t.sol        # Unit & stateless fuzz tests for token transfers
│   ├── Voting.t.sol           # Time-warp and duplicate-vote prevention tests
│   ├── Escrow.t.sol           # Multi-role permission and settlement tests
│   ├── TokenInvariant.t.sol   # Stateful invariant campaign for token supply
│   ├── EscrowInvariant.t.sol  # Stateful invariant handler for solvency
│   └── mocks/
│       ├── MockToken.sol      # Test ERC-20 with mint/burn control
│       └── MaliciousReceiver.sol # Reentrancy attack probe
├── scripts/
│   └── Deploy.s.sol           # Forge deployment script
├── .github/
│   └── workflows/
│       └── foundry.yml        # Automated CI/CD pipeline
└── foundry.toml               # Fuzz runs (1000) & invariant depth (64)`}</pre>
              </div>
            </div>

            {/* Lab A: ERC-20 Token Testing */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Lab A &bull; Component 1</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mt-1">
                  10.19.2 ERC-20 Token Testing Suite (PrepToken.sol &amp; PrepToken.t.sol)
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Validates supply allocation, balance deductions, allowance thresholds, event emissions, and zero-address transfer guards.
                </p>
              </div>

              {/* PrepToken.sol */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-stone-800 font-mono">src/PrepToken.sol</span>
                  <button
                    onClick={() => handleCopy(`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PrepToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("PrepSpaces Token", "PST") {
        _mint(msg.sender, initialSupply);
    }
}`, "preptoken")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-[11px] font-bold cursor-pointer"
                  >
                    {copiedKey === "preptoken" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    <span>{copiedKey === "preptoken" ? "Copied" : "Copy Token.sol"}</span>
                  </button>
                </div>
                <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PrepToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("PrepSpaces Token", "PST") {
        _mint(msg.sender, initialSupply);
    }
}`}</pre>
                </div>
              </div>

              {/* PrepToken.t.sol */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-stone-800 font-mono">test/PrepToken.t.sol (Foundry Suite)</span>
                  <button
                    onClick={() => handleCopy(`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "forge-std/Test.sol";
import "../src/PrepToken.sol";

contract PrepTokenTest is Test {
    PrepToken token;
    address owner = address(1);
    address alice = address(2);
    address bob = address(3);
    uint256 initialSupply = 1_000_000 ether;

    function setUp() public {
        vm.prank(owner);
        token = new PrepToken(initialSupply);
    }

    function testInitialSupply() public view {
        assertEq(token.totalSupply(), initialSupply);
        assertEq(token.balanceOf(owner), initialSupply);
    }

    function testTransfer() public {
        vm.prank(owner);
        token.transfer(alice, 100 ether);
        assertEq(token.balanceOf(alice), 100 ether);
        assertEq(token.balanceOf(owner), initialSupply - 100 ether);
    }

    function testTransferInsufficientBalance() public {
        vm.prank(alice);
        vm.expectRevert();
        token.transfer(bob, 100 ether);
    }

    function testApprovalAndAllowance() public {
        vm.prank(owner);
        token.approve(alice, 500 ether);
        assertEq(token.allowance(owner, alice), 500 ether);
    }

    function testTransferFrom() public {
        vm.prank(owner);
        token.approve(alice, 100 ether);

        vm.prank(alice);
        token.transferFrom(owner, bob, 100 ether);
        assertEq(token.balanceOf(bob), 100 ether);
        assertEq(token.allowance(owner, alice), 0);
    }

    // Fuzz test verifying mathematical token conservation
    function testFuzz_Transfer(uint256 amount) public {
        vm.assume(amount <= initialSupply);
        vm.prank(owner);
        token.transfer(alice, amount);
        assertEq(token.balanceOf(alice), amount);
        assertEq(token.balanceOf(owner) + token.balanceOf(alice), initialSupply);
    }
}`, "preptokentest")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-[11px] font-bold cursor-pointer"
                  >
                    {copiedKey === "preptokentest" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    <span>{copiedKey === "preptokentest" ? "Copied" : "Copy Token.t.sol"}</span>
                  </button>
                </div>
                <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto max-h-72">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "forge-std/Test.sol";
import "../src/PrepToken.sol";

contract PrepTokenTest is Test {
    PrepToken token;
    address owner = address(1);
    address alice = address(2);
    address bob = address(3);
    uint256 initialSupply = 1_000_000 ether;

    function setUp() public {
        vm.prank(owner);
        token = new PrepToken(initialSupply);
    }

    function testInitialSupply() public view {
        assertEq(token.totalSupply(), initialSupply);
        assertEq(token.balanceOf(owner), initialSupply);
    }

    function testTransfer() public {
        vm.prank(owner);
        token.transfer(alice, 100 ether);
        assertEq(token.balanceOf(alice), 100 ether);
        assertEq(token.balanceOf(owner), initialSupply - 100 ether);
    }

    function testTransferInsufficientBalance() public {
        vm.prank(alice);
        vm.expectRevert();
        token.transfer(bob, 100 ether);
    }

    function testApprovalAndAllowance() public {
        vm.prank(owner);
        token.approve(alice, 500 ether);
        assertEq(token.allowance(owner, alice), 500 ether);
    }

    function testTransferFrom() public {
        vm.prank(owner);
        token.approve(alice, 100 ether);

        vm.prank(alice);
        token.transferFrom(owner, bob, 100 ether);
        assertEq(token.balanceOf(bob), 100 ether);
        assertEq(token.allowance(owner, alice), 0);
    }

    // Fuzz test verifying mathematical token conservation
    function testFuzz_Transfer(uint256 amount) public {
        vm.assume(amount <= initialSupply);
        vm.prank(owner);
        token.transfer(alice, amount);
        assertEq(token.balanceOf(alice), amount);
        assertEq(token.balanceOf(owner) + token.balanceOf(alice), initialSupply);
    }
}`}</pre>
                </div>
              </div>
            </div>

            {/* Lab B: Decentralized Voting Testing */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Lab B &bull; Component 2</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mt-1">
                  10.19.3 Decentralized Voting Contract Testing Suite
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Verifies proposal creation, duplicate vote prevention, deadline enforcement using <code>vm.warp</code>, and monotonicity invariants.
                </p>
              </div>

              {/* Voting.sol */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-stone-800 font-mono">src/Voting.sol</span>
                  <button
                    onClick={() => handleCopy(`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Voting {
    struct Proposal {
        string description;
        uint256 votes;
        uint256 deadline;
        bool exists;
    }

    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;
    uint256 public proposalCount;

    error ProposalExpired();
    error AlreadyVoted();
    error InvalidProposal();

    function createProposal(string calldata description, uint256 duration) external returns (uint256) {
        proposalCount++;
        proposals[proposalCount] = Proposal({
            description: description,
            votes: 0,
            deadline: block.timestamp + duration,
            exists: true
        });
        return proposalCount;
    }

    function vote(uint256 proposalId) external {
        Proposal storage p = proposals[proposalId];
        if (!p.exists) revert InvalidProposal();
        if (block.timestamp >= p.deadline) revert ProposalExpired();
        if (hasVoted[proposalId][msg.sender]) revert AlreadyVoted();

        hasVoted[proposalId][msg.sender] = true;
        p.votes++;
    }
}`, "votingsol")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-[11px] font-bold cursor-pointer"
                  >
                    {copiedKey === "votingsol" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    <span>{copiedKey === "votingsol" ? "Copied" : "Copy Voting.sol"}</span>
                  </button>
                </div>
                <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Voting {
    struct Proposal {
        string description;
        uint256 votes;
        uint256 deadline;
        bool exists;
    }

    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;
    uint256 public proposalCount;

    error ProposalExpired();
    error AlreadyVoted();
    error InvalidProposal();

    function createProposal(string calldata description, uint256 duration) external returns (uint256) {
        proposalCount++;
        proposals[proposalCount] = Proposal({
            description: description,
            votes: 0,
            deadline: block.timestamp + duration,
            exists: true
        });
        return proposalCount;
    }

    function vote(uint256 proposalId) external {
        Proposal storage p = proposals[proposalId];
        if (!p.exists) revert InvalidProposal();
        if (block.timestamp >= p.deadline) revert ProposalExpired();
        if (hasVoted[proposalId][msg.sender]) revert AlreadyVoted();

        hasVoted[proposalId][msg.sender] = true;
        p.votes++;
    }
}`}</pre>
                </div>
              </div>

              {/* Voting.t.sol */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-stone-800 font-mono">test/Voting.t.sol (Time Manipulation &amp; Errors)</span>
                  <button
                    onClick={() => handleCopy(`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "forge-std/Test.sol";
import "../src/Voting.sol";

contract VotingTest is Test {
    Voting voting;
    address voterA = address(0xAA);
    address voterB = address(0xBB);

    function setUp() public {
        voting = new Voting();
    }

    function testDuplicateVotingReverts() public {
        uint256 id = voting.createProposal("Protocol Upgrade 1", 1 days);
        vm.prank(voterA);
        voting.vote(id);

        vm.prank(voterA);
        vm.expectRevert(Voting.AlreadyVoted.selector);
        voting.vote(id);
    }

    function testVotingAfterDeadlineReverts() public {
        uint256 id = voting.createProposal("Protocol Upgrade 1", 1 days);
        vm.warp(block.timestamp + 1 days + 1);

        vm.prank(voterB);
        vm.expectRevert(Voting.ProposalExpired.selector);
        voting.vote(id);
    }
}`, "votingtest")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-[11px] font-bold cursor-pointer"
                  >
                    {copiedKey === "votingtest" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    <span>{copiedKey === "votingtest" ? "Copied" : "Copy Voting.t.sol"}</span>
                  </button>
                </div>
                <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "forge-std/Test.sol";
import "../src/Voting.sol";

contract VotingTest is Test {
    Voting voting;
    address voterA = address(0xAA);
    address voterB = address(0xBB);

    function setUp() public {
        voting = new Voting();
    }

    function testDuplicateVotingReverts() public {
        uint256 id = voting.createProposal("Protocol Upgrade 1", 1 days);
        vm.prank(voterA);
        voting.vote(id);

        vm.prank(voterA);
        vm.expectRevert(Voting.AlreadyVoted.selector);
        voting.vote(id);
    }

    function testVotingAfterDeadlineReverts() public {
        uint256 id = voting.createProposal("Protocol Upgrade 1", 1 days);
        vm.warp(block.timestamp + 1 days + 1);

        vm.prank(voterB);
        vm.expectRevert(Voting.ProposalExpired.selector);
        voting.vote(id);
    }
}`}</pre>
                </div>
              </div>
            </div>

            {/* Lab C: Escrow Adversarial Testing & Reentrancy Probe */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Lab C &bull; Component 3</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mt-1">
                  10.19.4 Adversarial Escrow Testing &amp; MaliciousReceiver Probe
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Attacks the escrow contract using a custom <code>MaliciousReceiver</code> contract to simulate fallback reentrancy.
                </p>
              </div>

              {/* MaliciousReceiver.sol */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-stone-800 font-mono">test/mocks/MaliciousReceiver.sol</span>
                  <button
                    onClick={() => handleCopy(`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface ITargetEscrow {
    function withdraw() external;
}

contract MaliciousReceiver {
    ITargetEscrow public target;
    uint256 public attackCount;

    constructor(address _target) {
        target = ITargetEscrow(_target);
    }

    receive() external payable {
        if (attackCount < 3) {
            attackCount++;
            target.withdraw(); // Attempt reentrancy
        }
    }
}`, "maliciousreceiver")}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-[11px] font-bold cursor-pointer"
                  >
                    {copiedKey === "maliciousreceiver" ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                    <span>{copiedKey === "maliciousreceiver" ? "Copied" : "Copy Mock"}</span>
                  </button>
                </div>
                <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto">
                  <pre>{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

interface ITargetEscrow {
    function withdraw() external;
}

contract MaliciousReceiver {
    ITargetEscrow public target;
    uint256 public attackCount;

    constructor(address _target) {
        target = ITargetEscrow(_target);
    }

    receive() external payable {
        if (attackCount < 3) {
            attackCount++;
            target.withdraw(); // Attempt reentrancy
        }
    }
}`}</pre>
                </div>
              </div>
            </div>

            {/* Lab D: GitHub Actions CI Workflow */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-[#e7e3da] pb-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-orange-600">
                  <span>Lab D &bull; Automation</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mt-1">
                  10.18 Continuous Integration Workflow (.github/workflows/foundry.yml)
                </h3>
              </div>

              <div className="bg-neutral-950 rounded-2xl p-4 font-mono text-xs text-neutral-300 border border-neutral-800 overflow-x-auto">
                <pre>{`name: Foundry Smart Contract Testing CI
on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Install Foundry
        uses: foundry-rs/foundry-toolchain@v1
        with:
          version: nightly

      - name: Compile Contracts
        run: forge build --sizes

      - name: Execute Unit and Fuzz Tests
        run: forge test -vvv --fuzz-runs 1000

      - name: Verify Gas Snapshots
        run: forge snapshot --check

      - name: Generate Code Coverage Report
        run: forge coverage --report lcov`}</pre>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ASSIGNMENTS & ASSESSMENT */}
        {activeTab === "quiz" && (
          <div className="space-y-10">
            {/* Header Card */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-3">
                <FileCheck size={14} />
                <span>10.20 &amp; 10.21 Quality Assurance &amp; Formal Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                Assignments, Graded Assessment &amp; Senior QA Architect Interview Scenarios
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
                Demonstrate proficiency across smart contract quality engineering through four practical assignments, an interactive 10-question evaluation quiz, and 20 senior-level technical interview preparation scenarios.
              </p>
            </div>

            {/* Assessment Structure Table */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Formal Grading Policy
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-4">
                10.21 Assessment Weighting Breakdown
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-stone-200">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                    <tr>
                      <th className="p-3">Component</th>
                      <th className="p-3">Weight</th>
                      <th className="p-3">Core Learning Outcome Evaluated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-[11px]">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Testing Concepts &amp; Architecture Quiz</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3 text-stone-600">Cheatcodes, test pyramids, fuzzing preconditions, invariant definitions</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Foundry Coding Exercises</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3 text-stone-600">Writing unit tests, time manipulation, custom error selectors</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Comprehensive Testing Lab (PrepToken &amp; Escrow)</td>
                      <td className="p-3 font-mono font-bold text-orange-600">30%</td>
                      <td className="p-3 text-stone-600">Full test suites, 100% branch coverage, property assertions</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Security Testing &amp; Invariant Report</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3 text-stone-600">Stateful invariant campaigns, reentrancy attacks, counterexample analysis</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Final CI/CD Testing Project</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3 text-stone-600">Automated GitHub Actions workflow with gas tracking and coverage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Assignments 1, 2, 3, 4 */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs space-y-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                10.20 Practical Assignments
              </span>
              <h3 className="text-lg font-bold text-[#18181b]">Module 10 Engineering Deliverables</h3>

              {/* Assignment 1 */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-stone-900">
                    Assignment 1: Comprehensive ERC-20 Testing Suite
                  </h4>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold">
                    Unit &amp; Fuzzing
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Develop an automated test suite for an ERC-20 token contract verifying all functions, transfer events, insufficient balance reverts, and token supply conservation invariants across 1,000 fuzz iterations.
                </p>
                <div className="text-[11px] font-mono text-stone-700 bg-white p-3 rounded-xl border border-stone-200">
                  Deliverables: <code>contracts/PrepToken.sol</code>, <code>test/PrepToken.t.sol</code>, and lcov coverage report.
                </div>
              </div>

              {/* Assignment 2 */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-stone-900">
                    Assignment 2: Voting System Security &amp; Time-Warp Testing
                  </h4>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    Stateful QA
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Design a testing framework for <code>Voting.sol</code> asserting duplicate-vote prevention, deadline expiration via <code>vm.warp</code>, custom error selector reverts, and invariant property: <code>Votes Cast &lt;= Eligible Voters</code>.
                </p>
                <div className="text-[11px] font-mono text-stone-700 bg-white p-3 rounded-xl border border-stone-200">
                  Deliverables: <code>test/Voting.t.sol</code>, invariant handler contract, and test execution traces.
                </div>
              </div>

              {/* Assignment 3 */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-stone-900">
                    Assignment 3: Escrow Adversarial Audit &amp; Reentrancy Attack Probe
                  </h4>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold">
                    Security Testing
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Deploy a <code>MaliciousReceiver</code> contract to probe an escrow contract's withdrawal function for reentrancy vulnerabilities. Assert that Checks-Effects-Interactions (CEI) prevents multiple fund drains.
                </p>
                <div className="text-[11px] font-mono text-stone-700 bg-white p-3 rounded-xl border border-stone-200">
                  Deliverables: <code>test/mocks/MaliciousReceiver.sol</code>, audit report, and reproduction tests.
                </div>
              </div>

              {/* Assignment 4 */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-stone-900">
                    Assignment 4: Automated GitHub Actions CI/CD Pipeline
                  </h4>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold">
                    DevOps &amp; CI
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  Construct a production GitHub Actions workflow that compiles contracts, enforces 24KB bytecode size limits, executes 1,000 fuzz runs, validates gas snapshots, and blocks PR merges on failure.
                </p>
                <div className="text-[11px] font-mono text-stone-700 bg-white p-3 rounded-xl border border-stone-200">
                  Deliverables: <code>.github/workflows/foundry.yml</code> and verified pull request status badge.
                </div>
              </div>
            </div>

            {/* Interactive 10 MCQs Quiz */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                    Formal Evaluation &bull; 10 Questions
                  </span>
                  <h3 className="text-lg font-bold text-[#18181b] mt-0.5">
                    Smart Contract Testing &amp; QA Assessment Quiz
                  </h3>
                </div>
                {quizSubmitted && (
                  <div className="px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 text-xs font-bold text-orange-800 font-mono">
                    Score: {quizScore} / {QUIZ_QUESTIONS.length} ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const selected = selectedAnswers[q.id];
                  const isCorrect = selected === q.correct;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? isCorrect
                            ? "bg-emerald-50/50 border-emerald-200"
                            : "bg-rose-50/50 border-rose-200"
                          : "bg-stone-50/40 border-stone-200/80"
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-800 font-mono text-xs font-bold">
                          {idx + 1}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                          {q.question}
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-2 ml-9">
                        {q.options.map((opt, optIdx) => {
                          let optStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-50";
                          if (quizSubmitted) {
                            if (optIdx === q.correct) {
                              optStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold";
                            } else if (selected === optIdx) {
                              optStyle = "bg-rose-100 border-rose-500 text-rose-950 font-bold";
                            } else {
                              optStyle = "bg-white/50 border-stone-200 text-stone-400 opacity-60";
                            }
                          } else if (selected === optIdx) {
                            optStyle = "bg-orange-50 border-orange-500 text-orange-950 font-bold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              disabled={quizSubmitted}
                              className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex items-center gap-3 ${optStyle}`}
                            >
                              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current font-mono text-[10px]">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="leading-relaxed">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-3 ml-9 p-3 rounded-xl bg-white border border-stone-200 text-xs leading-relaxed text-stone-700">
                          <strong className={isCorrect ? "text-emerald-700 font-bold" : "text-rose-700 font-bold"}>
                            {isCorrect ? "Correct: " : "Incorrect: "}
                          </strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-200">
                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(selectedAnswers).length < QUIZ_QUESTIONS.length}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Submit &amp; Grade Assessment ({Object.keys(selectedAnswers).length}/{QUIZ_QUESTIONS.length} Answered)
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setSelectedAnswers({});
                    }}
                    className="px-6 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs transition cursor-pointer shadow-xs"
                  >
                    Retake Quiz
                  </button>
                )}
              </div>
            </div>

            {/* 20 Senior QA Architect Interview Questions */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Senior Security &amp; QA Career Track
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-2">
                20 Senior Smart Contract Testing &amp; Verification Interview Questions
              </h3>
              <p className="text-xs text-stone-600 mb-6">
                Master the technical questions asked by leading security audit firms and Tier-1 protocol teams (Paradigm, Trail of Bits, OpenZeppelin, Consensys Diligence) regarding cheatcode mechanics, stateful invariant testing, ghost accounting, and gas profiling.
              </p>

              <div className="space-y-3">
                {INTERVIEW_QUESTIONS.map((item) => {
                  const isOpen = !!expandedInterviews[item.id];
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-stone-200 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleInterview(item.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 bg-stone-50/70 hover:bg-stone-100/80 transition cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-800 font-mono text-xs font-bold">
                            #{item.id}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                            {item.question}
                          </span>
                        </div>
                        {isOpen ? <ChevronUp size={16} className="text-stone-500 shrink-0" /> : <ChevronDown size={16} className="text-stone-500 shrink-0" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-700 leading-relaxed space-y-2">
                          <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 block mb-1">
                            Model Technical Response:
                          </span>
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: OBJECTIVE TRACKER & COMPLETION OUTCOMES */}
        {activeTab === "checklist" && (
          <div className="space-y-10">
            {/* Header Card */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <div className="inline-flex items-center gap-2 rounded-xl bg-orange-50 border border-orange-200/80 px-3 py-1 text-xs font-bold text-[#ea580c] mb-3">
                <ListChecks size={14} />
                <span>10.22 Competency Verification &bull; 26 Core Curriculum Objectives</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] tracking-tight">
                Module 10 Competency Tracker &amp; Industry Completion Outcomes
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-4xl">
                Verify and track your mastery across the 26 core testing and quality assurance objectives required for professional smart contract verification. Your progress is saved automatically across sessions.
              </p>

              {/* Progress Bar */}
              <div className="mt-6 p-5 rounded-2xl bg-stone-50 border border-stone-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-stone-800 mb-2">
                  <span>Smart Contract QA Competency Progress</span>
                  <span className="font-mono text-orange-600">
                    {completedCount} of {CHECKLIST_ITEMS.length} Objectives Completed ({progressPercent}%)
                  </span>
                </div>
                <div className="w-full h-3 rounded-full bg-stone-200 overflow-hidden">
                  <div
                    className="h-full bg-orange-600 transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 26-Objective Interactive Checklist */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Formal Syllabus Verification
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-4">
                26 Testing &amp; Verification Checkpoints
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {CHECKLIST_ITEMS.map((item, idx) => {
                  const isChecked = !!completedItems[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleChecklistItem(idx)}
                      className={`p-3.5 rounded-2xl border text-left text-xs transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? "bg-emerald-50/60 border-emerald-300 text-emerald-950 font-medium"
                          : "bg-stone-50/50 border-stone-200 text-stone-700 hover:bg-white hover:border-orange-200"
                      }`}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border mt-0.5 transition ${
                          isChecked
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "bg-white border-stone-300 text-transparent"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={isChecked ? "line-through text-stone-500" : ""}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Official References & Resources */}
            <div className="bg-white rounded-3xl border border-[#e7e3da] p-6 sm:p-8 shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block mb-1">
                10.22 Authoritative References
              </span>
              <h3 className="text-lg font-bold text-[#18181b] mb-4">
                Official Standards &amp; Industry QA Documentation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://book.getfoundry.sh/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/20 transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">The Foundry Book (Official Docs)</h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">Forge testing, cheatcodes, fuzzing, invariant testing, and gas snapshots.</p>
                  </div>
                  <Share2 size={16} className="text-stone-400 shrink-0" />
                </a>

                <a
                  href="https://hardhat.org/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/20 transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Hardhat Framework Documentation</h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">Mocha, Chai matchers, Hardhat Network, and deployment scripts.</p>
                  </div>
                  <Share2 size={16} className="text-stone-400 shrink-0" />
                </a>

                <a
                  href="https://github.com/crytic/slither"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/20 transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Slither Static Analysis Framework</h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">Automated vulnerability detection, AST traversal, and taint analysis.</p>
                  </div>
                  <Share2 size={16} className="text-stone-400 shrink-0" />
                </a>

                <a
                  href="https://docs.openzeppelin.com/contracts/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/20 transition flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">OpenZeppelin Contracts Library</h4>
                    <p className="text-[11px] text-stone-600 mt-0.5">Secure token standards (ERC-20, ERC-721) and ReentrancyGuard.</p>
                  </div>
                  <Share2 size={16} className="text-stone-400 shrink-0" />
                </a>
              </div>
            </div>

            {/* Completion Outcomes Card */}
            <div className="bg-gradient-to-br from-stone-900 via-stone-950 to-orange-950 rounded-3xl p-6 sm:p-8 text-white shadow-xs">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400 block mb-1">
                Career Track Milestone
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                Module Completion Outcomes &amp; Portfolio Deliverable
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
                After completing Module 10, you are equipped to establish an enterprise smart contract testing workflow covering unit testing, property-based fuzzing, stateful invariants, mainnet forking, gas benchmarking, and automated continuous integration.
              </p>

              <div className="mt-6 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => navigate("/learning/blockchain/architecture")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-stone-700 bg-stone-900/80 text-xs font-bold text-stone-200 hover:border-orange-400 hover:text-white transition cursor-pointer"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: 9. DApp Architecture &amp; Escrow</span>
                </button>

                <button
                  onClick={() => navigate("/learning/blockchain/wallets-keys")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer shadow-sm shadow-orange-500/25 active:scale-95"
                >
                  <span>Next: 11. Wallets, Keys &amp; Transaction Signing</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
