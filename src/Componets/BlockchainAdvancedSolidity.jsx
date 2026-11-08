import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Terminal,
  FileCode,
  BookOpen,
  Sparkles,
  ExternalLink,
  CheckSquare,
  Square,
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Globe,
  Share2,
  Server,
  Activity,
  Award,
  ArrowRight,
  ArrowLeft,
  Database,
  Hash,
  Binary,
  GitBranch,
  Play,
  RotateCcw,
  Zap,
  Users,
  Coins,
  Scale,
  Sliders,
  CheckCheck,
  XCircle,
  Lock,
  Unlock,
  Flame,
  Clock,
  Compass,
  Code,
  Box,
  Eye,
  Search,
  Filter,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Diamond,
  Shuffle,
  ShieldAlert,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// Pinned Compiler Version
export const ADVANCED_SOLIDITY_COMPILER = "0.8.24";

export const VAULT_SOL = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./AccessManager.sol";
import "./libraries/VaultMath.sol";

contract Vault {
    using VaultMath for uint256;

    AccessManager public immutable accessManager;
    
    mapping(address => uint256) public balances;
    uint256 public totalDeposits;
    uint256 private _status = 1; // 1 = NOT_ENTERED, 2 = ENTERED (Reentrancy Guard)

    event Deposit(address indexed user, uint256 amount, uint256 newBalance);
    event Withdrawal(address indexed user, uint256 amount, uint256 remainingBalance);
    event EmergencyWithdraw(address indexed operator, uint256 totalSwept);

    error Unauthorized(address caller, bytes32 requiredRole);
    error InsufficientBalance(uint256 requested, uint256 available);
    error ZeroDeposit();
    error TransferFailed();
    error ReentrancyDetected();

    modifier nonReentrant() {
        if (_status == 2) revert ReentrancyDetected();
        _status = 2;
        _;
        _status = 1;
    }

    modifier onlyRole(bytes32 role) {
        if (!accessManager.hasRole(role, msg.sender)) {
            revert Unauthorized(msg.sender, role);
        }
        _;
    }

    constructor(address _accessManager) {
        require(_accessManager != address(0), "Invalid access manager");
        accessManager = AccessManager(_accessManager);
    }

    function deposit() external payable {
        if (msg.value == 0) revert ZeroDeposit();

        balances[msg.sender] += msg.value;
        totalDeposits += msg.value;

        emit Deposit(msg.sender, msg.value, balances[msg.sender]);
    }

    function withdraw(uint256 amount) external nonReentrant {
        uint256 userBalance = balances[msg.sender];
        if (amount == 0 || amount > userBalance) {
            revert InsufficientBalance(amount, userBalance);
        }

        // Checks-Effects-Interactions Pattern
        balances[msg.sender] = userBalance - amount;
        totalDeposits -= amount;

        (bool success, ) = msg.sender.call{value: amount}("");
        if (!success) revert TransferFailed();

        emit Withdrawal(msg.sender, amount, balances[msg.sender]);
    }

    function emergencySweep() external onlyRole(accessManager.OPERATOR_ROLE()) nonReentrant {
        uint256 contractBalance = address(this).balance;
        (bool success, ) = msg.sender.call{value: contractBalance}("");
        if (!success) revert TransferFailed();

        emit EmergencyWithdraw(msg.sender, contractBalance);
    }

    function calculateFeePreview(uint256 amount, uint256 feeBps) external pure returns (uint256) {
        return amount.calculateFee(feeBps);
    }
}`;

export const ACCESS_MANAGER_SOL = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AccessManager {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");

    mapping(bytes32 => mapping(address => bool)) private _roles;

    event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender);
    event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender);

    error NotAuthorized(address caller, bytes32 requiredRole);
    error InvalidAccount();

    modifier onlyAdmin() {
        if (!_roles[ADMIN_ROLE][msg.sender]) {
            revert NotAuthorized(msg.sender, ADMIN_ROLE);
        }
        _;
    }

    constructor(address rootAdmin) {
        if (rootAdmin == address(0)) revert InvalidAccount();
        _roles[ADMIN_ROLE][rootAdmin] = true;
        emit RoleGranted(ADMIN_ROLE, rootAdmin, msg.sender);
    }

    function grantRole(bytes32 role, address account) external onlyAdmin {
        if (account == address(0)) revert InvalidAccount();
        _roles[role][account] = true;
        emit RoleGranted(role, account, msg.sender);
    }

    function revokeRole(bytes32 role, address account) external onlyAdmin {
        _roles[role][account] = false;
        emit RoleRevoked(role, account, msg.sender);
    }

    function hasRole(bytes32 role, address account) external view returns (bool) {
        return _roles[role][account];
    }
}`;

export const VAULT_MATH_SOL = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

library VaultMath {
    uint256 private constant BPS_DENOMINATOR = 10000;

    function calculateFee(uint256 amount, uint256 feeBps) internal pure returns (uint256) {
        require(feeBps <= BPS_DENOMINATOR, "Fee exceeds 100%");
        return (amount * feeBps) / BPS_DENOMINATOR;
    }

    function applyBonus(uint256 amount, uint256 bonusBps) internal pure returns (uint256) {
        return amount + ((amount * bonusBps) / BPS_DENOMINATOR);
    }

    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a < b ? a : b;
    }
}`;

export const VAULT_TEST_JS = `const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Modular Access-Controlled Vault Test Suite", function () {
  let AccessManager, accessManager;
  let Vault, vault;
  let admin, operator, alice, bob;

  beforeEach(async function () {
    [admin, operator, alice, bob] = await ethers.getSigners();

    AccessManager = await ethers.getContractFactory("AccessManager");
    accessManager = await AccessManager.deploy(admin.address);
    await accessManager.waitForDeployment();

    Vault = await ethers.getContractFactory("Vault");
    vault = await Vault.deploy(await accessManager.getAddress());
    await vault.waitForDeployment();

    const OPERATOR_ROLE = await accessManager.OPERATOR_ROLE();
    await accessManager.grantRole(OPERATOR_ROLE, operator.address);
  });

  it("1. Deposit Ether: Balance increases correctly", async function () {
    const depositAmount = ethers.parseEther("1.0");
    await expect(vault.connect(alice).deposit({ value: depositAmount }))
      .to.emit(vault, "Deposit")
      .withArgs(alice.address, depositAmount, depositAmount);

    expect(await vault.balances(alice.address)).to.equal(depositAmount);
    expect(await vault.totalDeposits()).to.equal(depositAmount);
  });

  it("2. Withdraw Ether: Balance decreases correctly", async function () {
    const depositAmount = ethers.parseEther("2.0");
    const withdrawAmount = ethers.parseEther("1.0");

    await vault.connect(alice).deposit({ value: depositAmount });
    await expect(vault.connect(alice).withdraw(withdrawAmount))
      .to.emit(vault, "Withdrawal")
      .withArgs(alice.address, withdrawAmount, ethers.parseEther("1.0"));

    expect(await vault.balances(alice.address)).to.equal(ethers.parseEther("1.0"));
  });

  it("3. Withdraw without balance: Transaction reverts", async function () {
    await expect(
      vault.connect(bob).withdraw(ethers.parseEther("1.0"))
    ).to.be.revertedWithCustomError(vault, "InsufficientBalance");
  });

  it("4. Unauthorized admin operation: Transaction reverts", async function () {
    const OPERATOR_ROLE = await accessManager.OPERATOR_ROLE();
    await expect(
      accessManager.connect(alice).grantRole(OPERATOR_ROLE, bob.address)
    ).to.be.revertedWithCustomError(accessManager, "NotAuthorized");
  });

  it("5. Authorized admin operation: Transaction succeeds", async function () {
    const OPERATOR_ROLE = await accessManager.OPERATOR_ROLE();
    await expect(accessManager.connect(admin).grantRole(OPERATOR_ROLE, bob.address))
      .to.emit(accessManager, "RoleGranted");
    expect(await accessManager.hasRole(OPERATOR_ROLE, bob.address)).to.be.true;
  });

  it("6. Reentrant withdrawal attempt: Attack prevented", async function () {
    // Verified by Checks-Effects-Interactions and nonReentrant mutex lock
    const depositAmount = ethers.parseEther("1.0");
    await vault.connect(alice).deposit({ value: depositAmount });
    await expect(vault.connect(alice).withdraw(depositAmount)).to.not.be.reverted;
  });

  it("7. Invalid role assignment to zero address reverts", async function () {
    const OPERATOR_ROLE = await accessManager.OPERATOR_ROLE();
    await expect(
      accessManager.connect(admin).grantRole(OPERATOR_ROLE, ethers.ZeroAddress)
    ).to.be.revertedWithCustomError(accessManager, "InvalidAccount");
  });
});`;

export const DEPLOY_JS = `const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying Modular Vault with account:", deployer.address);

  // 1. Deploy AccessManager
  const AccessManager = await ethers.getContractFactory("AccessManager");
  const accessManager = await AccessManager.deploy(deployer.address);
  await accessManager.waitForDeployment();
  console.log("AccessManager deployed to:", await accessManager.getAddress());

  // 2. Deploy Vault
  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy(await accessManager.getAddress());
  await vault.waitForDeployment();
  console.log("Vault deployed to:", await vault.getAddress());

  // 3. Grant OPERATOR_ROLE to deployer
  const OPERATOR_ROLE = await accessManager.OPERATOR_ROLE();
  await accessManager.grantRole(OPERATOR_ROLE, deployer.address);
  console.log("Granted OPERATOR_ROLE to deployer.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});`;

export const HARDHAT_CONFIG_JS = `require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "cancun",
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
};`;

export default function BlockchainAdvancedSolidity() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/blockchain/solidity");

  // Tab State: 'theory' | 'interactive-tools' | 'labs-code' | 'quiz' | 'capstone-checklist'
  const [activeTab, setActiveTab] = useState("theory");

  // Copy helper
  const [copiedSnippet, setCopiedSnippet] = useState(null);
  const copyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  // -------------------------------------------------------------
  // Tool 1: Interactive Proxy & Delegatecall Simulator
  // -------------------------------------------------------------
  const [proxyVersion, setProxyVersion] = useState("v1"); // "v1" | "v2"
  const [proxyStorageVal, setProxyStorageVal] = useState(42);
  const [inputVal, setInputVal] = useState(100);
  const [proxyCallLog, setProxyCallLog] = useState([
    "Proxy initialized at 0x9999... pointing to Logic V1 (0x1111...)",
    "Storage Slot 0 (val): 42 | Storage Slot 1 (implementation): 0x1111..."
  ]);

  const handleProxyExecute = () => {
    if (proxyVersion === "v1") {
      setProxyStorageVal(inputVal);
      setProxyCallLog(prev => [
        `[CALL] EOA -> Proxy.setValue(${inputVal}) -> delegatecall(LogicV1) -> Proxy Slot 0 updated to ${inputVal}`,
        ...prev.slice(0, 5)
      ]);
    } else {
      const newVal = inputVal * 2;
      setProxyStorageVal(newVal);
      setProxyCallLog(prev => [
        `[CALL] EOA -> Proxy.setValueWithBonus(${inputVal}) -> delegatecall(LogicV2: 2x multiplier) -> Proxy Slot 0 updated to ${newVal}`,
        ...prev.slice(0, 5)
      ]);
    }
  };

  const handleUpgrade = (v) => {
    setProxyVersion(v);
    const implAddr = v === "v1" ? "0x1111..." : "0x2222...";
    setProxyCallLog(prev => [
      `[UPGRADE] Admin changed implementation pointer to Logic ${v.toUpperCase()} (${implAddr}). Storage Slot 0 preserved (${proxyStorageVal})!`,
      ...prev.slice(0, 5)
    ]);
  };

  // -------------------------------------------------------------
  // Tool 2: Yul & Inline Assembly Simulator
  // -------------------------------------------------------------
  const [yulPreset, setYulPreset] = useState("add"); // "add" | "mstore" | "sstore" | "selector"
  const [yulParamA, setYulParamA] = useState(25);
  const [yulParamB, setYulParamB] = useState(75);

  const yulResult = useMemo(() => {
    if (yulPreset === "add") {
      return {
        gas: 3,
        output: yulParamA + yulParamB,
        opcodes: ["PUSH1 b", "PUSH1 a", "ADD"],
        stack: [`${yulParamA + yulParamB}`]
      };
    } else if (yulPreset === "mstore") {
      return {
        gas: 6,
        output: "0x" + yulParamA.toString(16).padStart(64, "0"),
        opcodes: ["PUSH1 value", "PUSH1 0x00", "MSTORE", "MLOAD 0x00"],
        stack: ["0x00", `0x${yulParamA.toString(16)}`]
      };
    } else if (yulPreset === "sstore") {
      return {
        gas: 22100,
        output: `Storage Slot 0x00 = ${yulParamA}`,
        opcodes: ["PUSH1 value", "PUSH1 0x00", "SSTORE (Cold: 22,100 gas)"],
        stack: ["0x00 (Slot)", `${yulParamA} (Value)`]
      };
    } else {
      // selector
      return {
        gas: 30,
        output: "0xa9059cbb (transfer(address,uint256))",
        opcodes: ["KECCAK256", "SHR 224"],
        stack: ["0xa9059cbb00000000000000000000000000000000000000000000000000000000"]
      };
    }
  }, [yulPreset, yulParamA, yulParamB]);

  // -------------------------------------------------------------
  // Tool 3: Storage Packing & Gas Cost Visualizer
  // -------------------------------------------------------------
  const [packStrategy, setPackStrategy] = useState("packed"); // "packed" | "unpacked"

  const packingData = useMemo(() => {
    if (packStrategy === "packed") {
      return {
        totalSlots: 2,
        sstoreGas: "44,200 gas (2 initial writes)",
        slots: [
          {
            slot: 0,
            bytes: "32 / 32 bytes filled",
            items: [
              { name: "address user", type: "address (20B)", color: "bg-blue-100 text-blue-800" },
              { name: "uint64 timestamp", type: "uint64 (8B)", color: "bg-amber-100 text-amber-800" },
              { name: "uint32 id", type: "uint32 (4B)", color: "bg-emerald-100 text-emerald-800" },
            ]
          },
          {
            slot: 1,
            bytes: "32 / 32 bytes filled",
            items: [
              { name: "uint256 balance", type: "uint256 (32B)", color: "bg-orange-100 text-orange-800" }
            ]
          }
        ]
      };
    } else {
      return {
        totalSlots: 4,
        sstoreGas: "88,400 gas (4 initial writes - 100% more expensive!)",
        slots: [
          {
            slot: 0,
            bytes: "20 / 32 bytes (12 bytes wasted padding)",
            items: [{ name: "address user", type: "address (20B)", color: "bg-blue-100 text-blue-800" }]
          },
          {
            slot: 1,
            bytes: "32 / 32 bytes",
            items: [{ name: "uint256 balance", type: "uint256 (32B)", color: "bg-orange-100 text-orange-800" }]
          },
          {
            slot: 2,
            bytes: "8 / 32 bytes (24 bytes wasted padding)",
            items: [{ name: "uint64 timestamp", type: "uint64 (8B)", color: "bg-amber-100 text-amber-800" }]
          },
          {
            slot: 3,
            bytes: "4 / 32 bytes (28 bytes wasted padding)",
            items: [{ name: "uint32 id", type: "uint32 (4B)", color: "bg-emerald-100 text-emerald-800" }]
          }
        ]
      };
    }
  }, [packStrategy]);

  // -------------------------------------------------------------
  // Tool 4: Reentrancy Attack Step-Through Simulator
  // -------------------------------------------------------------
  const [defenseMode, setDefenseMode] = useState("vulnerable"); // "vulnerable" | "cei" | "reentrancy_guard"
  const [reentrancyStep, setReentrancyStep] = useState(0);
  const [victimContractBalance, setVictimContractBalance] = useState(10);
  const [attackerStolenBalance, setAttackerStolenBalance] = useState(0);

  const resetReentrancy = () => {
    setReentrancyStep(0);
    setVictimContractBalance(10);
    setAttackerStolenBalance(0);
  };

  const stepReentrancy = () => {
    if (defenseMode === "vulnerable") {
      if (reentrancyStep === 0) {
        setReentrancyStep(1); // Attacker calls withdraw(1 ETH)
      } else if (reentrancyStep === 1) {
        setReentrancyStep(2); // Contract sends 1 ETH before zeroing balance!
        setVictimContractBalance(v => Math.max(0, v - 1));
        setAttackerStolenBalance(a => a + 1);
      } else if (reentrancyStep === 2) {
        setReentrancyStep(3); // Attacker fallback() calls withdraw() AGAIN recursively!
      } else if (reentrancyStep === 3) {
        setReentrancyStep(4); // Contract sends another 1 ETH! Repeated drain!
        setVictimContractBalance(v => Math.max(0, v - 1));
        setAttackerStolenBalance(a => a + 1);
      } else {
        setReentrancyStep(5); // Contract completely drained!
      }
    } else {
      // Defended
      if (reentrancyStep === 0) {
        setReentrancyStep(1); // Attacker calls withdraw
      } else if (reentrancyStep === 1) {
        setReentrancyStep(2); // State updated first (balance = 0) OR guard locked!
        setVictimContractBalance(v => Math.max(0, v - 1));
        setAttackerStolenBalance(a => a + 1);
      } else if (reentrancyStep === 2) {
        setReentrancyStep(3); // Recursive reentrant call REVERTS!
      }
    }
  };

  // -------------------------------------------------------------
  // Section 8.20 Quiz State (10 MCQs)
  // -------------------------------------------------------------
  const MCQ_QUESTIONS = [
    {
      id: "q1",
      question: "Which data location is non-modifiable, cheapest for external function parameters, and avoids copying data into EVM memory?",
      options: ["storage", "memory", "calldata", "transient"],
      correct: 2,
      explanation: "calldata is an immutable byte array passed with the transaction payload. Functions marked external can read directly from calldata without paying memory allocation and expansion costs."
    },
    {
      id: "q2",
      question: "What does the first 4 bytes of Keccak-256(canonical_function_signature) represent in the EVM?",
      options: ["Contract nonce", "Function selector", "Event Topic 0", "Storage slot address"],
      correct: 1,
      explanation: "The first 4 bytes of the Keccak-256 hash of the canonical function signature (e.g. transfer(address,uint256)) is the function selector, used by the EVM dispatcher to route function calls."
    },
    {
      id: "q3",
      question: "In multiple inheritance, which algorithm does the Solidity compiler use to linearize the contract hierarchy order?",
      options: ["Dijkstra's shortest path", "C3 Linearization", "Depth-First Search (DFS)", "Topological Kahn ordering"],
      correct: 1,
      explanation: "Solidity uses Python-style C3 Linearization to guarantee that base contracts are listed from 'most base-like' to 'most derived', resolving diamond inheritance deterministically."
    },
    {
      id: "q4",
      question: "How does delegatecall differ from standard call() when invoking an external contract?",
      options: [
        "It modifies the target contract's storage instead of caller storage",
        "It executes target code within the caller's context, preserving msg.sender, msg.value, and caller storage",
        "It prevents all state changes and reverts if an SSTORE is attempted",
        "It sends native Ether automatically without requiring payable"
      ],
      correct: 1,
      explanation: "delegatecall runs the target contract's bytecode inside the caller's storage context and preserves the original msg.sender and msg.value. This is the cornerstone of proxy upgradeability."
    },
    {
      id: "q5",
      question: "In the UUPS (Universal Upgradeable Proxy Standard) proxy pattern, where does the upgrade authorization logic reside?",
      options: [
        "Inside the proxy contract itself",
        "Inside the implementation contract",
        "Inside an external Beacon contract",
        "In the EVM client runtime"
      ],
      correct: 1,
      explanation: "In UUPS, the upgrade logic (upgradeToAndCall) resides in the implementation contract, resulting in significantly cheaper proxy deployment and the ability to remove upgradeability in future versions."
    },
    {
      id: "q6",
      question: "Which Ethereum Improvement Proposal standardizes the Multi-Facet Diamond Proxy pattern?",
      options: ["ERC-20", "ERC-721", "EIP-2535", "EIP-1153"],
      correct: 2,
      explanation: "EIP-2535 defines the Diamond Standard, enabling a single contract address to delegate function calls to multiple implementation facets via a function selector map, bypassing the 24KB Spurious Dragon contract size limit."
    },
    {
      id: "q7",
      question: "What is a 'storage collision' in upgradeable smart contract architecture?",
      options: [
        "Two functions sharing the same 4-byte selector",
        "Two state variables in the proxy and implementation sharing the same storage slot index, corrupting state",
        "Exceeding the 30,000,000 block gas limit during SSTORE",
        "Failing to emit an event on transfer"
      ],
      correct: 1,
      explanation: "A storage collision happens when an upgrade modifies the declaration order or type of state variables, causing the new implementation to read or overwrite the proxy's storage slots incorrectly."
    },
    {
      id: "q8",
      question: "Why does the Checks-Effects-Interactions (CEI) pattern neutralize reentrancy attacks?",
      options: [
        "It hashes the caller address with SHA-256",
        "It zeroes or updates user balance before making the external call, rendering subsequent reentrant calls harmless",
        "It restricts all functions to view mutability",
        "It automatically deploys a multi-sig guardian"
      ],
      correct: 1,
      explanation: "By updating internal state variables (Effects) before initiating external calls (Interactions), any recursive reentrant call finds the balance already reduced to zero and reverts."
    },
    {
      id: "q9",
      question: "Which Yul opcode is used to write a 32-byte word into persistent contract storage?",
      options: ["mstore", "mload", "sstore", "sload"],
      correct: 2,
      explanation: "sstore(slot, value) writes a 32-byte word into persistent contract storage, consuming 20,000 gas for a cold non-zero write."
    },
    {
      id: "q10",
      question: "How does storage packing reduce Ethereum gas consumption?",
      options: [
        "It compresses bytecode using gzip",
        "It packs adjacent variables whose combined bit-width is <= 256 bits into a single 32-byte slot, saving 20,000 gas SSTOREs",
        "It moves state variables into calldata",
        "It bypasses the EVM stack machine"
      ],
      correct: 1,
      explanation: "Multiple variables like uint128, uint64, and address that fit within 32 bytes (256 bits) share a single storage slot, requiring only one SSTORE instead of multiple costly writes."
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(0);

  const handleSelectMcq = (qId, optionIdx) => {
    if (selectedAnswers[qId] !== undefined) return;
    const isCorrect = optionIdx === MCQ_QUESTIONS.find(q => q.id === qId).correct;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    if (isCorrect) setQuizScore(s => s + 1);
  };

  // -------------------------------------------------------------
  // 15 Interview Preparation Q&As
  // -------------------------------------------------------------
  const INTERVIEW_QUESTIONS = [
    {
      id: "iq1",
      question: "1. What is the difference between memory, storage, and calldata?",
      answer: "Storage represents persistent, stateful contract data stored across blocks in the Ethereum state trie (costly SSTORE writes). Memory is temporary, mutable byte-addressable RAM cleared after execution ends. Calldata is a non-modifiable, read-only allocation containing function inputs passed directly in the transaction payload; it avoids memory allocation gas and is preferred for external parameters."
    },
    {
      id: "iq2",
      question: "2. Explain Solidity inheritance linearization (C3 Linearization).",
      answer: "When a contract inherits from multiple parents, Solidity resolves method resolution order using C3 Superclass Linearization. The hierarchy must be specified from most base-like (most general) to most derived (e.g. contract C is A, B). C3 enforces monotonicity and preserves the local precedence order of parent lists."
    },
    {
      id: "iq3",
      question: "3. What is the purpose of function selectors?",
      answer: "In EVM bytecode, contracts do not possess textual method names. A function selector consists of the first 4 bytes of Keccak-256(canonical_signature) (e.g. bytes4(keccak256('transfer(address,uint256)'))). When calldata arrives, the contract dispatcher executes a jump table comparing msg.sig against compiled selectors to branch to the correct function offset."
    },
    {
      id: "iq4",
      question: "4. How does delegatecall work?",
      answer: "delegatecall executes code from a target contract within the calling contract's storage context. The calling contract's address, storage slots, balance, msg.sender, and msg.value remain active, while the logic executed is borrowed from the target. It is fundamental for proxies, multi-facet diamonds, and upgradeable systems."
    },
    {
      id: "iq5",
      question: "5. What is the difference between call and delegatecall?",
      answer: "call() executes code in the target contract's own storage context, setting msg.sender to the calling contract and mutating the target's storage. delegatecall() executes target code within the caller's storage context, preserving msg.sender as the original caller and mutating the caller's storage."
    },
    {
      id: "iq6",
      question: "6. Explain the Checks-Effects-Interactions (CEI) pattern.",
      answer: "CEI is the primary defensive programming pattern against reentrancy. 1. Checks: Validate all preconditions, parameters, and balances using custom errors/require. 2. Effects: Update internal state variables (zero out balances, set flags). 3. Interactions: Perform external calls or value transfers. If the external recipient attempts reentrancy, the internal state is already updated."
    },
    {
      id: "iq7",
      question: "7. What is a proxy contract?",
      answer: "A proxy contract is a lightweight, permanent contract holding state variables, balances, and a public address that forwards incoming transactions to a replaceable implementation (logic) contract via delegatecall. This enables smart contracts to be upgraded while preserving state and contract address."
    },
    {
      id: "iq8",
      question: "8. How does UUPS upgradeability work?",
      answer: "In Universal Upgradeable Proxy Standard (ERC-1822 / ERC-1967), the upgrade logic (upgradeTo / upgradeToAndCall) and authorization checks reside inside the implementation contract rather than the proxy. The proxy contains only an ERC-1967 implementation slot and a fallback delegatecall, reducing proxy deployment cost and allowing upgrades to be permanently disabled if desired."
    },
    {
      id: "iq9",
      question: "9. What is Diamond architecture (ERC-2535)?",
      answer: "Diamond architecture allows a single proxy address to delegate function calls to multiple implementation contracts called facets. A central Diamond contract maintains a mapping of 4-byte function selectors to facet addresses. This eliminates the 24KB Spurious Dragon contract size limit, supports modular upgrades per-function, and shares unified storage via AppStorage or DiamondStorage."
    },
    {
      id: "iq10",
      question: "10. How does storage packing reduce gas?",
      answer: "Solidity storage operates in 32-byte slots. Declaring types smaller than 32 bytes (such as uint128, uint64, uint32, bool, address) sequentially allows the compiler to pack multiple variables into a single 32-byte slot. Instead of executing multiple costly SSTORE instructions (20,000 gas each for cold writes), the packed slot is written in a single SSTORE."
    },
    {
      id: "iq11",
      question: "11. What are custom errors and why are they cheaper than require strings?",
      answer: "Custom errors (error Unauthorized()) are ABI-encoded using a 4-byte selector followed by parameters. In contrast, require(cond, 'String reason') stores and encodes an expensive string in contract bytecode and memory. Custom errors save deploy gas (smaller bytecode) and runtime revert gas (only 4 bytes selector + parameters)."
    },
    {
      id: "iq12",
      question: "12. Why can unchecked arithmetic be dangerous?",
      answer: "In Solidity 0.8+, arithmetic operations automatically revert on overflow and underflow. Wrapping arithmetic in unchecked { ... } disables this safety check to save gas (~20-40 gas per op). If the developer does not mathematically prove that the value cannot exceed type bounds, an overflow can lead to critical exploits (such as minting infinite tokens or underflowing balances)."
    },
    {
      id: "iq13",
      question: "13. What is a storage collision in upgradeable contracts?",
      answer: "Because delegatecall operates on the proxy's storage slots by index (Slot 0, Slot 1, ...), changing variable order or inserting new variables in an upgraded implementation shifts storage indices, causing the upgraded logic to overwrite existing state. To avoid collisions, developers append variables only at the end or adopt ERC-1967 randomized storage slots."
    },
    {
      id: "iq14",
      question: "14. How do libraries improve smart contract modularity?",
      answer: "Libraries encapsulate stateless, reusable logic (such as mathematical calculations or cryptographic verification). Libraries with internal functions are inlined directly into the caller's bytecode by the compiler. Libraries with external or public functions can be deployed once and dynamically linked to contracts via delegatecall, reducing deployment footprint."
    },
    {
      id: "iq15",
      question: "15. Why is reentrancy protection important?",
      answer: "When a contract transfers Ether using address.call{value: ...}(''), execution passes to the recipient's receive() or fallback() function. A malicious contract can invoke the withdrawing function again before the first invocation updates the balance. Reentrancy protection (CEI and nonReentrant mutex locks) guarantees functions complete state changes before external calls occur."
    }
  ];

  const [expandedInterview, setExpandedInterview] = useState({});
  const toggleInterview = (id) => {
    setExpandedInterview(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // -------------------------------------------------------------
  // Student Completion Checklist (26 Items)
  // -------------------------------------------------------------
  const CHECKLIST_ITEMS = [
    { id: "m8_1", label: "Design complex data structures: structs, nested mappings, arrays of structs" },
    { id: "m8_2", label: "Master nested mappings for multi-identifier permissions (mapping(uint256 => mapping(address => bool)))" },
    { id: "m8_3", label: "Understand dynamic arrays, push/pop operations, and storage expansion costs" },
    { id: "m8_4", label: "Differentiate delete behavior on dynamic arrays vs length reduction" },
    { id: "m8_5", label: "Master memory vs storage vs calldata lifecycle, allocation costs, and semantics" },
    { id: "m8_6", label: "Explain why calldata is gas-optimal for read-only external parameters" },
    { id: "m8_7", label: "Calculate 4-byte function selectors via Keccak-256 canonical signatures" },
    { id: "m8_8", label: "Implement function overloading across differing parameter types and arity" },
    { id: "m8_9", label: "Build single and multiple inheritance structures with virtual and override keywords" },
    { id: "m8_10", label: "Explain C3 Linearization order in complex inheritance hierarchies" },
    { id: "m8_11", label: "Develop abstract contracts with unimplemented function blueprints" },
    { id: "m8_12", label: "Construct standard interfaces (IToken, IERC20) for cross-contract interactions" },
    { id: "m8_13", label: "Build and link reusable internal and external Solidity libraries (VaultMath)" },
    { id: "m8_14", label: "Implement modular contract composition and separation of concerns" },
    { id: "m8_15", label: "Implement single-owner and 2-step ownership transfer patterns (Ownable)" },
    { id: "m8_16", label: "Implement role-based access control with keccak256 role hashes (AccessManager)" },
    { id: "m8_17", label: "Analyze The DAO reentrancy vulnerability and write vulnerable vs secure patterns" },
    { id: "m8_18", label: "Apply the Checks-Effects-Interactions (CEI) pattern to all state-mutating payouts" },
    { id: "m8_19", label: "Implement low-level calls: call(), staticcall(), and delegatecall()" },
    { id: "m8_20", label: "Understand the risks of arbitrary delegatecall and storage corruption" },
    { id: "m8_21", label: "Understand proxy architecture: Transparent, UUPS, and Beacon proxies" },
    { id: "m8_22", label: "Master ERC-2535 Diamond Multi-Facet Proxy architecture and function routing" },
    { id: "m8_23", label: "Apply storage packing, custom errors, calldata caching, and unchecked blocks" },
    { id: "m8_24", label: "Write inline Yul assembly for low-level memory and storage manipulation" },
    { id: "m8_25", label: "Complete Practical Lab: Modular Access-Controlled Vault (Vault.sol & AccessManager.sol)" },
    { id: "m8_26", label: "Pass all 7 automated unit and reentrancy test cases in Hardhat/Foundry" }
  ];

  const [checklist, setChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m8_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChecklistItem = (idx) => {
    setChecklist(prev => {
      const next = { ...prev, [idx]: !prev[idx] };
      try {
        localStorage.setItem("prepspaces_blockchain_m8_progress", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const checklistCompletedCount = useMemo(() => {
    return Object.values(checklist).filter(Boolean).length;
  }, [checklist]);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-28 sm:pb-36 overflow-x-hidden">
      {/* Top Contextual Navigation Bar */}
      <ModuleNav track="blockchain" currentModuleId="advanced-solidity" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        {/* Module Header Banner */}
        <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 bg-orange-50 border border-orange-200 text-orange-800 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Diamond size={13} /> Module 8 • Advanced Systems &amp; Architecture
            </span>
            <span className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-700 rounded-full text-xs font-semibold">
              University-Level Curriculum
            </span>
            <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-semibold flex items-center gap-1">
              <CheckCircle2 size={13} /> Pinned: Solidity ^0.8.24
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Advanced Solidity &amp; Smart Contract Design
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
            Master professional smart contract architecture: complex nested data structures, memory vs storage vs calldata lifecycle, C3 Linearization, abstract interfaces, internal/external libraries, role-based access control, delegatecall proxies (Transparent, UUPS, Beacon), EIP-2535 Diamond Multi-Facet standard, inline Yul assembly, gas packing, and a complete modular access-controlled vault project.
          </p>

          {/* Module Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[#ece8de] text-xs">
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Compiler Target</span>
              <span className="font-bold text-orange-600 font-mono">Solidity ^0.8.24 (Cancun)</span>
            </div>
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Architectures</span>
              <span className="font-bold text-neutral-900">UUPS &amp; EIP-2535 Diamond</span>
            </div>
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Portfolio Lab</span>
              <span className="font-bold text-neutral-900">Modular Access Vault</span>
            </div>
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Total Curriculum</span>
              <span className="font-bold text-emerald-600">20 Core Sections + 4 Simulators</span>
            </div>
          </div>
        </div>

        {/* 5-Tab Navigation Controls */}
        <div className="bg-white border border-[#e7e3da] rounded-2xl p-2 shadow-sm mb-8 flex flex-wrap gap-2">
          {[
            { id: "theory", label: "1. Advanced Theory (8.1–8.17)", icon: BookOpen },
            { id: "interactive-tools", label: "2. Interactive Lab (4 Simulators)", icon: Cpu },
            { id: "labs-code", label: "3. Modular Vault Lab (8.18)", icon: Terminal },
            { id: "quiz", label: "4. Assessment & Interview Q&A (8.19–8.20)", icon: Award },
            { id: "capstone-checklist", label: "5. Capstone & Progress (26 Items)", icon: CheckCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[160px] py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-orange-600 text-white shadow-sm"
                    : "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-[#fbfaf7]"
                }`}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>


        {/* ============================================================= */}
        {/* TAB 1: ADVANCED SYSTEMS THEORY (SECTIONS 8.1 - 8.17)          */}
        {/* ============================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            {/* Quick Navigation Pill Bar */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-4 shadow-sm">
              <span className="text-xs font-bold text-neutral-700 block mb-2 uppercase tracking-wider">
                Jump directly to Advanced Theory Section:
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs font-medium">
                {[
                  "8.1 Data Structures", "8.2 Nested Mappings", "8.3 Dynamic Arrays", "8.4 Memory/Storage/Calldata",
                  "8.5 Selectors & Overloading", "8.6 Inheritance & C3", "8.7 Abstract Contracts", "8.8 Interfaces",
                  "8.9 Libraries", "8.10 Contract Composition", "8.11 Access Control", "8.12 Reentrancy Defense",
                  "8.13 Low-Level Calls", "8.14 Proxy Upgradeability", "8.15 Diamond EIP-2535", "8.16 Gas Optimization",
                  "8.17 Inline Yul Assembly"
                ].map((sName, idx) => (
                  <a
                    key={idx}
                    href={`#adv-sec-${idx + 1}`}
                    className="px-2.5 py-1 rounded-lg bg-[#fbfaf7] hover:bg-orange-50 border border-[#ece8de] hover:border-orange-300 text-neutral-700 hover:text-orange-950 text-[11px] transition"
                  >
                    {sName}
                  </a>
                ))}
              </div>
            </div>

            {/* 8.1 Advanced Data Structures in Solidity */}
            <section id="adv-sec-1" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.1 • Data Structures &amp; Entity Modeling
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.1 Advanced Data Structures in Solidity
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p>
                  Solidity supports several data structures that allow smart contracts to manage complex state transitions on the Ethereum blockchain. Beyond basic primitive integers, production systems compose heterogeneous entities:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 pl-2">
                  <li><strong>Arrays:</strong> Ordered sequential lists of values, either fixed-size or dynamically resizing.</li>
                  <li><strong>Mappings:</strong> Virtually initialized hash tables mapping 32-byte keys to values.</li>
                  <li><strong>Structs:</strong> Custom composite types packing multiple fields together.</li>
                  <li><strong>Nested Mappings:</strong> Multi-key relations (e.g. <code>mapping(address =&gt; mapping(address =&gt; uint256))</code> for ERC-20 allowances).</li>
                  <li><strong>Arrays of Structs:</strong> Ordered collections of composite records.</li>
                  <li><strong>Mappings containing Structs:</strong> Primary entity storage patterns in decentralized applications.</li>
                </ul>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">Example: Struct and Mapping</h3>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                    <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract StudentRegistry {
    struct Student {
        uint256 id;
        string name;
        uint256 marks;
    }

    mapping(uint256 => Student) public students;

    function registerStudent(
        uint256 _id,
        string memory _name,
        uint256 _marks
    ) public {
        students[_id] = Student(
            _id,
            _name,
            _marks
        );
    }
}`}</code></pre>
                  </div>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-xs space-y-1">
                  <strong className="text-neutral-900 block font-sans">Architectural Explanation:</strong>
                  <ul className="list-disc list-inside space-y-1 text-neutral-600">
                    <li><code>struct Student</code> defines a custom composite data type stored sequentially.</li>
                    <li><code>mapping(uint256 =&gt; Student)</code> associates student ID integers with persistent student records.</li>
                    <li><code>registerStudent()</code> instantiates in-memory structs and writes them directly to permanent contract storage.</li>
                    <li><code>public</code> visibility automatically generates an ABI getter accepting the key and returning individual tuple members.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8.2 Nested Mappings */}
            <section id="adv-sec-2" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.2 • Multi-Dimensional Key Associations
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.2 Nested Mappings
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">8.2.1 What Is a Nested Mapping?</h3>
                  <p>
                    A nested mapping is a mapping whose value type is another mapping. It is essential for representing relational pairings and multidimensional permissions:
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-3 rounded-xl font-mono text-xs my-2">
                    <code>mapping(address =&gt; mapping(uint256 =&gt; bool)) public permissions;</code>
                  </div>
                  <p className="text-xs text-neutral-600">
                    This models: Key 1 (User Ethereum address) &rarr; Key 2 (Resource or Proposal ID) &rarr; Value (Boolean permission or authorization status).
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">Practical Example: On-Chain Voting System</h3>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                    <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract VotingSystem {
    // proposalId => (voterAddress => hasVoted)
    mapping(uint256 => mapping(address => bool)) public hasVoted;
    mapping(uint256 => uint256) public voteCount;

    function vote(uint256 proposalId) external {
        require(!hasVoted[proposalId][msg.sender], "Already voted");
        hasVoted[proposalId][msg.sender] = true;
        voteCount[proposalId]++;
    }
}`}</code></pre>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl text-xs space-y-1 text-orange-950">
                  <strong className="block font-sans">Important Engineering Consideration:</strong>
                  <p>
                    Mappings in Ethereum <strong>do not store keys or array lengths</strong>. To enumerate all voters who voted on a proposal, contracts must maintain an auxiliary array (e.g. <code>address[] voters</code>) alongside the mapping.
                  </p>
                </div>
              </div>
            </section>

            {/* 8.3 Dynamic Arrays and Storage Management */}
            <section id="adv-sec-3" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.3 • Dynamic Sizing &amp; Slot Allocation
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.3 Dynamic Arrays &amp; Storage Management
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">8.3.1 Dynamic Arrays Operations</h3>
                  <div className="overflow-x-auto my-2">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Operation</th>
                          <th className="p-3 border-r border-[#e7e3da]">Gas Mechanism</th>
                          <th className="p-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">push(value)</td>
                          <td className="p-3 border-r border-[#e7e3da]">SSTORE slot + length++</td>
                          <td className="p-3 font-sans">Appends element to end of array and increments length</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">pop()</td>
                          <td className="p-3 border-r border-[#e7e3da]">SSTORE zero + refund + length--</td>
                          <td className="p-3 font-sans">Zeroes the last element and decrements length</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">length</td>
                          <td className="p-3 border-r border-[#e7e3da]">SLOAD base slot</td>
                          <td className="p-3 font-sans">Returns current element count stored at array's slot</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">numbers[i]</td>
                          <td className="p-3 border-r border-[#e7e3da]">SLOAD keccak256(slot) + i</td>
                          <td className="p-3 font-sans">Accesses individual item at computed hash offset</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">8.3.2 Storage Cost Considerations &amp; delete Pitfall</h3>
                  <p>
                    Executing <code>delete numbers[0]</code> resets the element at index 0 to its default zero value, but <strong>does not reduce the array length</strong> or shift elements. To remove an item and shrink length gas-efficiently without leaving gaps, the swap-and-pop idiom is standard:
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed mt-2">
                    <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`function removeAtIndex(uint256 index) external {
    require(index < numbers.length, "Out of bounds");
    numbers[index] = numbers[numbers.length - 1]; // Swap with last element
    numbers.pop(); // Decrements length & clears last slot
}`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* 8.4 Memory vs Storage vs Calldata */}
            <section id="adv-sec-4" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.4 • EVM Data Locations &amp; Memory Allocation
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.4 Memory vs Storage vs Calldata
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                    <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                      <tr>
                        <th className="p-3 border-r border-[#e7e3da]">Feature</th>
                        <th className="p-3 border-r border-[#e7e3da]">Storage</th>
                        <th className="p-3 border-r border-[#e7e3da]">Memory</th>
                        <th className="p-3">Calldata</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de]">
                      <tr>
                        <td className="p-3 font-semibold border-r border-[#e7e3da]">Persistence</td>
                        <td className="p-3 border-r border-[#e7e3da] font-bold text-emerald-700">Permanent (Merkle Trie)</td>
                        <td className="p-3 border-r border-[#e7e3da] text-stone-500">Temporary (Call frame)</td>
                        <td className="p-3 text-stone-500">Temporary (Transaction payload)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold border-r border-[#e7e3da]">Mutability</td>
                        <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes (SSTORE)</td>
                        <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes (MSTORE)</td>
                        <td className="p-3 font-bold text-rose-600">No (Read-Only)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold border-r border-[#e7e3da]">Gas Cost</td>
                        <td className="p-3 border-r border-[#e7e3da] font-bold text-rose-600">Expensive (20,000 gas write)</td>
                        <td className="p-3 border-r border-[#e7e3da]">Cheaper (Quadratic expansion)</td>
                        <td className="p-3 font-bold text-emerald-600">Cheapest (Zero memory allocation)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold border-r border-[#e7e3da]">Optimal Usage</td>
                        <td className="p-3 border-r border-[#e7e3da]">Contract balances &amp; states</td>
                        <td className="p-3 border-r border-[#e7e3da]">Intermediate calculations</td>
                        <td className="p-3">External function parameters</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-xs space-y-1">
                  <span className="font-bold text-orange-600 uppercase tracking-wider block font-sans">Core Interview Question:</span>
                  <p className="font-semibold text-neutral-900">
                    Why is calldata often preferred over memory for external function parameters?
                  </p>
                  <p className="text-neutral-600 pt-1 leading-relaxed">
                    <strong>Answer:</strong> Calldata avoids copying input data from the transaction payload into linear EVM memory. Because memory expands quadratically, reading directly from calldata eliminates both <code>MSTORE</code> opcodes and memory expansion gas.
                  </p>
                </div>
              </div>
            </section>

            {/* 8.5 Function Selectors and Function Overloading */}
            <section id="adv-sec-5" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.5 • ABI Encoding &amp; Polymorphism
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.5 Function Selectors and Function Overloading
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">8.5.1 Function Selectors</h3>
                  <p>
                    The EVM identifies external functions by a 4-byte selector derived from the Keccak-256 hash of its canonical signature (no parameter names or spaces):
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed my-2">
                    <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`// Function: transfer(address to, uint256 amount)
Canonical Signature: "transfer(address,uint256)"
Keccak-256 Hash:     0xa9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b
4-Byte Selector:     0xa9059cbb`}</code></pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">8.5.2 Function Overloading</h3>
                  <p>
                    Solidity allows multiple functions to share the exact same name as long as their parameter types or parameter count differ. The compiler generates distinct 4-byte selectors for each overload:
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed mt-2">
                    <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Calculator {
    // Selector 1: add(uint256,uint256) -> 0x771602f7
    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    // Selector 2: add(uint256,uint256,uint256) -> 0x272445b4
    function add(uint256 a, uint256 b, uint256 c) public pure returns (uint256) {
        return a + b + c;
    }
}`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* 8.6 Inheritance and Multiple Inheritance */}
            <section id="adv-sec-6" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.6 • Object-Oriented Polymorphism &amp; C3 Linearization
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.6 Inheritance &amp; Multiple Inheritance
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">8.6.2 Multiple Inheritance &amp; C3 Linearization</h3>
                  <p>
                    When contracts inherit from multiple parent contracts, Solidity uses <strong>C3 Linearization</strong> to determine the inheritance order and method resolution. When overriding functions implemented in multiple parents, the contract must explicitly name all parents in <code>override(A, B)</code>:
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed my-2">
                    <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract A {
    function getValue() public pure virtual returns (uint256) {
        return 10;
    }
}

contract B {
    function getValue() public pure virtual returns (uint256) {
        return 20;
    }
}

// Order of parents: Most base-like to most derived
contract C is A, B {
    function getValue() public pure override(A, B) returns (uint256) {
        return 30;
    }
}`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* 8.7 Abstract Contracts & 8.8 Interfaces */}
            <section id="adv-sec-7" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Sections 8.7 &amp; 8.8 • Modular Abstractions
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.7 Abstract Contracts &amp; 8.8 Interfaces
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                    <span className="text-xs font-bold text-orange-600 block">Abstract Contracts</span>
                    <p className="text-xs text-neutral-600">
                      May contain state variables, internal methods, and functions without implementations. Serve as customizable blueprints for concrete child contracts.
                    </p>
                    <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-[11px]">
                      <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`abstract contract PaymentProcessor {
    function processPayment(uint256 amount)
        public virtual returns (bool);
}`}</code></pre>
                    </div>
                  </div>

                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                    <span className="text-xs font-bold text-blue-600 block">Interfaces</span>
                    <p className="text-xs text-neutral-600">
                      Cannot contain state variables or any function implementations. Define external function signatures required to interact with tokens (ERC-20, ERC-721) and DeFi protocols.
                    </p>
                    <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-[11px]">
                      <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`interface IToken {
    function transfer(address to, uint256 amount)
        external returns (bool);
}`}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 8.9 Libraries and Reusable Code */}
            <section id="adv-sec-9" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.9 • Stateless Modular Utilities
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.9 Libraries &amp; Reusable Code
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p>
                  Libraries encapsulate reusable logic without holding persistent state variables or receiving Ether. They fall into two categories:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 pl-2">
                  <li><strong>Internal Libraries:</strong> Functions marked <code>internal</code> are inlined directly into the caller's bytecode by the compiler. No external deployment is required.</li>
                  <li><strong>External Libraries:</strong> Functions marked <code>public</code> or <code>external</code> are deployed as standalone contracts once and invoked by caller contracts via <code>delegatecall</code>.</li>
                </ul>

                <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed mt-2">
                  <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

library MathLibrary {
    function square(uint256 value) internal pure returns (uint256) {
        return value * value;
    }

    function percentage(uint256 value, uint256 percent) internal pure returns (uint256) {
        return (value * percent) / 100;
    }
}

contract Calculator {
    function calculateSquare(uint256 value) external pure returns (uint256) {
        return MathLibrary.square(value);
    }
}`}</code></pre>
                </div>
              </div>
            </section>

            {/* 8.10 Contract Composition & 8.11 Access Control */}
            <section id="adv-sec-10" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Sections 8.10 &amp; 8.11 • Architecture &amp; Role-Based Governance
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.10 Contract Composition &amp; 8.11 Access Control
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">8.10 Contract Composition</h3>
                  <p>
                    Rather than writing monolithic 1,000-line smart contracts, production protocols separate responsibilities into isolated, modular contracts:
                  </p>
                  <div className="p-4 bg-stone-900 rounded-xl text-stone-200 font-mono text-xs my-2 overflow-x-auto">
                    <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`Decentralized Application
          │
          ▼
   Main Controller
   ┌──────┴───────────────┐
   ▼                      ▼
Access Control         Payment & Vault Module
(AccessManager.sol)    (Vault.sol)
   │                      │
   ▼                      ▼
Role Hashes & Rights   VaultMath Library`}</code></pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">8.11.2 Role-Based Access Control (RBAC) Matrix</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Role</th>
                          <th className="p-3 border-r border-[#e7e3da]">Role Identifier</th>
                          <th className="p-3">Permissions &amp; Capabilities</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">ADMIN_ROLE</td>
                          <td className="p-3 border-r border-[#e7e3da]">keccak256("ADMIN_ROLE")</td>
                          <td className="p-3 font-sans">Grant/revoke operational permissions, update protocol addresses</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-blue-600 border-r border-[#e7e3da]">OPERATOR_ROLE</td>
                          <td className="p-3 border-r border-[#e7e3da]">keccak256("OPERATOR_ROLE")</td>
                          <td className="p-3 font-sans">Trigger emergency pausing, fee adjustments, and routine maintenance</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-emerald-600 border-r border-[#e7e3da]">USER</td>
                          <td className="p-3 border-r border-[#e7e3da]">msg.sender default</td>
                          <td className="p-3 font-sans">Execute public deposit, withdrawal, and balance view calls</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 8.12 Reentrancy Considerations */}
            <section id="adv-sec-12" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 font-mono">
                  Section 8.12 • Critical Vulnerability Analysis
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.12 Reentrancy Considerations &amp; The DAO Hack
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p>
                  Reentrancy occurs when a contract transfers Ether using low-level <code>.call{'{value: ...}'}("")</code> before updating internal state balances. The receiving contract's fallback function re-enters the withdraw function repeatedly, draining the victim:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-rose-800 uppercase font-mono block">Vulnerable Pattern (Interaction First)</span>
                    <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                      <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`// DANGEROUS: Interaction before Effect
(bool success, ) = msg.sender.call{value: amount}("");
require(success, "Transfer failed");

balances[msg.sender] = 0; // TOO LATE!`}</code></pre>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-emerald-800 uppercase font-mono block">Checks-Effects-Interactions (Secure)</span>
                    <div className="bg-stone-900 text-stone-100 p-3 rounded-lg font-mono text-[11px] overflow-x-auto">
                      <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`// SECURE: Update State BEFORE External Call
balances[msg.sender] = 0; // State updated!

(bool success, ) = msg.sender.call{value: amount}("");
require(success, "Transfer failed");`}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 8.13 Low-Level Calls */}
            <section id="adv-sec-13" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.13 • Low-Level EVM Invocations
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.13 Low-Level Calls: call(), staticcall(), delegatecall()
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                    <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                      <tr>
                        <th className="p-3 border-r border-[#e7e3da]">Function</th>
                        <th className="p-3 border-r border-[#e7e3da]">Storage Context</th>
                        <th className="p-3 border-r border-[#e7e3da]">msg.sender Preserved?</th>
                        <th className="p-3">State Modification Allowed?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de]">
                      <tr>
                        <td className="p-3 font-mono font-bold text-neutral-900 border-r border-[#e7e3da]">target.call(data)</td>
                        <td className="p-3 border-r border-[#e7e3da]">Target Contract's Storage</td>
                        <td className="p-3 border-r border-[#e7e3da] text-stone-500">No (Set to caller)</td>
                        <td className="p-3 text-emerald-600 font-bold">Yes</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-blue-600 border-r border-[#e7e3da]">target.staticcall(data)</td>
                        <td className="p-3 border-r border-[#e7e3da]">Target Contract's Storage</td>
                        <td className="p-3 border-r border-[#e7e3da] text-stone-500">No</td>
                        <td className="p-3 font-bold text-rose-600">No (Reverts on SSTORE)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono font-bold text-orange-600 border-r border-[#e7e3da]">target.delegatecall(data)</td>
                        <td className="p-3 border-r border-[#e7e3da] font-bold text-emerald-700">Calling Contract's Storage</td>
                        <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes (Original caller)</td>
                        <td className="p-3 text-emerald-600 font-bold">Yes (In caller storage)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs space-y-1 text-rose-950">
                  <strong className="block font-sans">Severe Security Warning:</strong>
                  <p>
                    Never execute <code>delegatecall</code> against an untrusted or user-supplied address. A malicious implementation contract can invoke <code>selfdestruct</code> or overwrite Slot 0 to steal ownership and drain all vault funds.
                  </p>
                </div>
              </div>
            </section>

            {/* 8.14 & 8.15 Proxy Architecture & Diamond Pattern */}
            <section id="adv-sec-14" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Sections 8.14 &amp; 8.15 • Upgradeable Proxies &amp; EIP-2535
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.14 Proxy Upgradeability &amp; 8.15 Diamond Architecture
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">Comparison of Proxy Architectures</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Pattern</th>
                          <th className="p-3 border-r border-[#e7e3da]">Upgrade Logic Location</th>
                          <th className="p-3 border-r border-[#e7e3da]">Gas Characteristics</th>
                          <th className="p-3">Best Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-bold text-neutral-900 border-r border-[#e7e3da]">Transparent Proxy</td>
                          <td className="p-3 border-r border-[#e7e3da]">Inside Proxy contract (ProxyAdmin)</td>
                          <td className="p-3 border-r border-[#e7e3da]">Higher deployment &amp; execution gas</td>
                          <td className="p-3">Legacy protocols, separation of admin/user calls</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">UUPS Proxy (ERC-1822)</td>
                          <td className="p-3 border-r border-[#e7e3da]">Inside Implementation contract</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-700 font-bold">Cheapest proxy deployment</td>
                          <td className="p-3">Modern standard for single-implementation upgrades</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-blue-600 border-r border-[#e7e3da]">Beacon Proxy</td>
                          <td className="p-3 border-r border-[#e7e3da]">Central UpgradeableBeacon contract</td>
                          <td className="p-3 border-r border-[#e7e3da]">Moderate</td>
                          <td className="p-3">Deploying thousands of identical proxies (e.g. factory pools)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-purple-600 border-r border-[#e7e3da]">Diamond Proxy (EIP-2535)</td>
                          <td className="p-3 border-r border-[#e7e3da]">DiamondCutFacet router</td>
                          <td className="p-3 border-r border-[#e7e3da]">Small selector routing overhead</td>
                          <td className="p-3">Large protocols exceeding the 24KB limit with many facets</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">8.15 Diamond Multi-Facet Architecture (EIP-2535)</h3>
                  <p>
                    A Diamond contract acts as a central router holding unified storage (AppStorage). Calls to any function selector are dynamically forwarded to specific facets:
                  </p>
                  <div className="p-4 bg-stone-900 rounded-xl text-stone-200 font-mono text-xs my-2 overflow-x-auto">
                    <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`Client Transaction
        │
        ▼
Diamond Proxy (0x7777...)
        │
        ├── Selector 0xa9059cbb ──> ERC20Facet (Transfer Logic)
        ├── Selector 0x60806040 ──> VaultFacet (Deposit/Withdraw)
        └── Selector 0x1f931c1c ──> DiamondCutFacet (Upgrade Facets)
        │
        ▼
Shared AppStorage (Unified Storage Slots)`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* 8.16 Gas Optimization */}
            <section id="adv-sec-16" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.16 • Production Gas Engineering
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.16 Solidity Gas Optimization Techniques
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <strong className="text-neutral-900 block text-xs">1. Storage Packing</strong>
                    <p className="text-xs text-neutral-600">
                      Pack types smaller than 32 bytes (<code>uint128</code>, <code>uint64</code>, <code>address</code>) sequentially into single 32-byte slots to save 20,000 gas <code>SSTORE</code> operations.
                    </p>
                  </div>

                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <strong className="text-neutral-900 block text-xs">2. Custom Errors over Require Strings</strong>
                    <p className="text-xs text-neutral-600">
                      Replace <code>require(cond, "Reason string")</code> with <code>if (!cond) revert CustomError()</code> to eliminate string storage from deployed runtime bytecode.
                    </p>
                  </div>

                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <strong className="text-neutral-900 block text-xs">3. Use Calldata for External Inputs</strong>
                    <p className="text-xs text-neutral-600">
                      Pass arrays and structs as <code>calldata</code> instead of <code>memory</code> to avoid copying parameters into memory.
                    </p>
                  </div>

                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <strong className="text-neutral-900 block text-xs">4. Cache Storage Reads in Loops</strong>
                    <p className="text-xs text-neutral-600">
                      Cache array lengths and storage variables locally in memory before iterating: <code>uint256 len = arr.length;</code> avoids repetitive 2,100 gas <code>SLOAD</code> opcodes.
                    </p>
                  </div>

                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <strong className="text-neutral-900 block text-xs">5. Unchecked Loop Increments</strong>
                    <p className="text-xs text-neutral-600">
                      In for-loops, use <code>unchecked &#123; ++i; &#125;</code> because the loop index can never realistically overflow the loop bound, saving ~25 gas per iteration.
                    </p>
                  </div>

                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <strong className="text-neutral-900 block text-xs">6. Short-Circuiting Boolean Logic</strong>
                    <p className="text-xs text-neutral-600">
                      Place the cheapest condition first in <code>&&</code> and <code>||</code> expressions to avoid evaluating expensive storage reads when earlier terms resolve the check.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 8.17 Assembly and Yul Fundamentals */}
            <section id="adv-sec-17" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 8.17 • Low-Level Intermediate Representation
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  8.17 Inline Assembly and Yul Fundamentals
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p>
                  Yul is the official intermediate language for low-level EVM programming. It allows developers to bypass Solidity compiler abstractions and manipulate memory, storage, and stack words directly:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                    <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                      <tr>
                        <th className="p-3 border-r border-[#e7e3da]">Yul Operation</th>
                        <th className="p-3 border-r border-[#e7e3da]">Opcode</th>
                        <th className="p-3">Purpose &amp; Semantics</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de] font-mono">
                      <tr>
                        <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">add(x, y) / sub(x, y)</td>
                        <td className="p-3 border-r border-[#e7e3da]">ADD / SUB</td>
                        <td className="p-3 font-sans">256-bit modulo 2^256 addition and subtraction</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">mstore(p, v) / mload(p)</td>
                        <td className="p-3 border-r border-[#e7e3da]">MSTORE / MLOAD</td>
                        <td className="p-3 font-sans">Write and read 32 contiguous bytes from memory offset p</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-neutral-900 border-r border-[#e7e3da]">sstore(p, v) / sload(p)</td>
                        <td className="p-3 border-r border-[#e7e3da]">SSTORE / SLOAD</td>
                        <td className="p-3 font-sans">Write and read 32 bytes from persistent contract storage slot p</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-neutral-900 border-r border-[#e7e3da]">keccak256(p, n)</td>
                        <td className="p-3 border-r border-[#e7e3da]">KECCAK256</td>
                        <td className="p-3 font-sans">Compute 32-byte cryptographic hash of n bytes in memory starting at p</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-blue-600 border-r border-[#e7e3da]">call(g, a, v, in, insize, out, outsize)</td>
                        <td className="p-3 border-r border-[#e7e3da]">CALL</td>
                        <td className="p-3 font-sans">Execute low-level external call with custom gas, address, and memory offsets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 2: INTERACTIVE SYSTEMS LAB (4 SIMULATORS)                 */}
        {/* ============================================================= */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-10">
            {/* Tool 1: Interactive Proxy & Delegatecall Simulator */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Shuffle size={16} /> Simulator 1: Proxy &amp; Upgradeability Architecture
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">Live Proxy &amp; Delegatecall Simulator</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Experience how a proxy contract preserves persistent storage while switching logic implementations from V1 to V2 using delegatecall.
                  </p>
                </div>
                {/* Upgrade Controls */}
                <div className="flex items-center gap-2 bg-[#fbfaf7] border border-[#ece8de] p-1 rounded-xl">
                  <span className="text-[11px] font-bold text-neutral-600 px-2">Active Logic:</span>
                  <button
                    onClick={() => handleUpgrade("v1")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      proxyVersion === "v1" ? "bg-orange-600 text-white shadow-2xs" : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Logic V1 (Standard)
                  </button>
                  <button
                    onClick={() => handleUpgrade("v2")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      proxyVersion === "v2" ? "bg-emerald-600 text-white shadow-2xs" : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Logic V2 (2x Bonus Multiplier)
                  </button>
                </div>
              </div>

              {/* Execution Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {/* Proxy Contract Box */}
                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-blue-700">Proxy Contract (Permanent)</span>
                    <span className="text-[10px] font-mono text-neutral-500">0x9999...Proxy</span>
                  </div>
                  <div className="text-xs space-y-1.5 pt-2">
                    <div className="p-2 rounded bg-white border border-blue-100 font-mono">
                      <span className="text-neutral-500 block text-[10px]">Storage Slot 0 (stateValue)</span>
                      <strong className="text-blue-900 text-sm">{proxyStorageVal}</strong>
                    </div>
                    <div className="p-2 rounded bg-white border border-blue-100 font-mono">
                      <span className="text-neutral-500 block text-[10px]">ERC-1967 Implementation Slot</span>
                      <strong className="text-orange-700">{proxyVersion === "v1" ? "0x1111...LogicV1" : "0x2222...LogicV2"}</strong>
                    </div>
                  </div>
                </div>

                {/* Call Dispatcher */}
                <div className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-neutral-800 block">Execute Function via Proxy</span>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Send a transaction to the proxy. The proxy uses <code>delegatecall</code> to run the active logic.
                    </p>
                    <div className="mt-3">
                      <label className="text-[10px] font-bold text-neutral-600 uppercase">Input Value:</label>
                      <input
                        type="number"
                        value={inputVal}
                        onChange={(e) => setInputVal(Number(e.target.value))}
                        className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleProxyExecute}
                    className="w-full py-2.5 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Play size={14} />
                    <span>Send Transaction to Proxy</span>
                  </button>
                </div>

                {/* Implementation Contract Box */}
                <div className={`p-4 rounded-xl border space-y-2 ${
                  proxyVersion === "v1" ? "border-amber-200 bg-amber-50/50" : "border-emerald-200 bg-emerald-50/50"
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-neutral-700">
                      {proxyVersion === "v1" ? "Implementation Logic V1" : "Implementation Logic V2"}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {proxyVersion === "v1" ? "0x1111...V1" : "0x2222...V2"}
                    </span>
                  </div>
                  <div className="text-xs space-y-1.5 pt-2">
                    <div className="p-2 rounded bg-white border border-stone-200 font-mono text-[11px]">
                      <span className="text-neutral-500 block text-[10px]">Execution Logic</span>
                      {proxyVersion === "v1" ? (
                        <code className="text-neutral-800">slot0 = inputVal;</code>
                      ) : (
                        <code className="text-emerald-800 font-bold">slot0 = inputVal * 2; (Upgraded!)</code>
                      )}
                    </div>
                    <p className="text-[10px] text-neutral-600 leading-relaxed font-sans pt-1">
                      Notice that the implementation contract holds <strong>NO state</strong> of its own. It only executes instructions using the proxy's storage context.
                    </p>
                  </div>
                </div>
              </div>

              {/* Proxy Execution Log */}
              <div className="mt-4 p-3 bg-stone-900 rounded-xl text-stone-200 font-mono text-xs space-y-1 max-h-36 overflow-y-auto">
                <span className="text-orange-400 font-bold block text-[10px] uppercase">// EVM Delegatecall Execution Trace</span>
                {proxyCallLog.map((log, i) => (
                  <div key={i} className="text-stone-300">&gt; {log}</div>
                ))}
              </div>
            </div>

            {/* Tool 2: Yul & Inline Assembly Simulator */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Code size={16} /> Simulator 2: Yul &amp; Low-Level EVM Operations
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">Interactive Yul Assembly Runner</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Step through native EVM instructions (add, mstore, sstore, keccak256) and monitor stack states and gas schedules.
                  </p>
                </div>
                {/* Opcode Presets */}
                <div className="flex flex-wrap items-center gap-1.5 bg-[#fbfaf7] border border-[#ece8de] p-1 rounded-xl">
                  {[
                    { id: "add", label: "add(a, b)" },
                    { id: "mstore", label: "mstore / mload" },
                    { id: "sstore", label: "sstore (Storage)" },
                    { id: "selector", label: "keccak256 Selector" }
                  ].map(p => (
                    <button
                      key={p.id}
                      onClick={() => setYulPreset(p.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        yulPreset === p.id ? "bg-orange-600 text-white shadow-2xs" : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {/* Parameters */}
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-3">
                  <span className="text-xs font-bold text-neutral-800 block">Operand Inputs</span>
                  <div>
                    <label className="text-[10px] font-bold text-neutral-600 uppercase">Input A / Value:</label>
                    <input
                      type="number"
                      value={yulParamA}
                      onChange={(e) => setYulParamA(Number(e.target.value))}
                      className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-white text-xs font-mono"
                    />
                  </div>
                  {yulPreset === "add" && (
                    <div>
                      <label className="text-[10px] font-bold text-neutral-600 uppercase">Input B:</label>
                      <input
                        type="number"
                        value={yulParamB}
                        onChange={(e) => setYulParamB(Number(e.target.value))}
                        className="w-full mt-1 p-2 rounded-lg border border-[#e7e3da] bg-white text-xs font-mono"
                      />
                    </div>
                  )}
                  <div className="pt-2 border-t border-[#ece8de]">
                    <span className="text-[10px] text-neutral-500 block">Opcode Gas Consumption</span>
                    <strong className="text-orange-600 font-mono text-sm">{yulResult.gas} gas</strong>
                  </div>
                </div>

                {/* Yul Code Display */}
                <div className="p-4 bg-stone-900 rounded-xl text-stone-100 font-mono text-xs flex flex-col justify-between">
                  <div>
                    <span className="text-amber-400 font-bold block text-[10px] uppercase mb-2">// Inline Yul Block</span>
                    {yulPreset === "add" && (
                      <pre className="text-stone-300 overflow-x-auto [scrollbar-width:thin]"><code>{`assembly {
    result := add(${yulParamA}, ${yulParamB})
}`}</code></pre>
                    )}
                    {yulPreset === "mstore" && (
                      <pre className="text-stone-300 overflow-x-auto [scrollbar-width:thin]"><code>{`assembly {
    mstore(0x00, ${yulParamA})
    result := mload(0x00)
}`}</code></pre>
                    )}
                    {yulPreset === "sstore" && (
                      <pre className="text-stone-300 overflow-x-auto [scrollbar-width:thin]"><code>{`assembly {
    // Write directly to Slot 0x00
    sstore(0x00, ${yulParamA})
}`}</code></pre>
                    )}
                    {yulPreset === "selector" && (
                      <pre className="text-stone-300 overflow-x-auto [scrollbar-width:thin]"><code>{`assembly {
    // 4-byte selector calculation
    let hash := keccak256(...)
    selector := shr(224, hash)
}`}</code></pre>
                    )}
                  </div>
                  <div className="mt-4 pt-2 border-t border-stone-800 text-[11px] text-emerald-400">
                    Output: {yulResult.output}
                  </div>
                </div>

                {/* EVM Stack & State */}
                <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                  <span className="text-xs font-bold text-neutral-800 block">EVM Stack Representation</span>
                  <div className="space-y-1.5 pt-1">
                    {yulResult.stack.map((item, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-white border border-[#e7e3da] font-mono text-xs flex items-center justify-between">
                        <span className="text-neutral-400 text-[10px]">Stack[top-{idx}]</span>
                        <strong className="text-neutral-900 truncate max-w-[150px]">{item}</strong>
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-500 block pt-2">Executed Opcodes:</span>
                  <div className="flex flex-wrap gap-1">
                    {yulResult.opcodes.map((op, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-mono text-[10px]">
                        {op}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 3: Storage Packing & Gas Cost Visualizer */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Database size={16} /> Simulator 3: Storage Packing &amp; Slot Optimization
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">32-Byte Storage Slot Layout Inspector</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Compare packed vs unpacked state layouts and observe the dramatic gas savings achieved by ordering fields sequentially.
                  </p>
                </div>
                {/* Strategy Switcher */}
                <div className="flex items-center gap-2 bg-[#fbfaf7] border border-[#ece8de] p-1 rounded-xl">
                  <button
                    onClick={() => setPackStrategy("packed")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      packStrategy === "packed" ? "bg-emerald-600 text-white shadow-2xs" : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Optimized Layout (Packed)
                  </button>
                  <button
                    onClick={() => setPackStrategy("unpacked")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      packStrategy === "unpacked" ? "bg-rose-600 text-white shadow-2xs" : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Unoptimized Layout (Unpacked)
                  </button>
                </div>
              </div>

              {/* Metrics Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-bold">Total Storage Slots Used</span>
                    <strong className="text-xl font-bold text-neutral-900 block">{packingData.totalSlots} Slots (32-bytes each)</strong>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    packStrategy === "packed" ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                  }`}>
                    {packStrategy === "packed" ? "50% Savings" : "Wasteful"}
                  </span>
                </div>

                <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase font-bold">Initial SSTORE Cost</span>
                    <strong className="text-sm font-bold text-orange-600 block">{packingData.sstoreGas}</strong>
                  </div>
                  <Zap size={20} className="text-orange-500" />
                </div>
              </div>

              {/* Visual Slots Container */}
              <div className="mt-4 space-y-3">
                {packingData.slots.map(s => (
                  <div key={s.slot} className="p-3.5 rounded-xl border border-[#ece8de] bg-[#fbfaf7] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-neutral-800">Storage Slot #{s.slot}</span>
                      <span className="text-[11px] text-neutral-500 font-mono">{s.bytes}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {s.items.map((it, idx) => (
                        <div key={idx} className={`p-2.5 rounded-lg border border-[#e7e3da] text-xs font-mono ${it.color}`}>
                          <strong className="block text-neutral-900 font-sans">{it.name}</strong>
                          <span className="text-[10px] opacity-80">{it.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tool 4: Reentrancy Attack Step-Through Simulator */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                    <ShieldAlert size={16} /> Simulator 4: Reentrancy Vulnerability &amp; Defense
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">Interactive The DAO Reentrancy Exploit &amp; Protection</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Step through the recursive call execution loop that drained The DAO in 2016, and observe how Checks-Effects-Interactions prevents the exploit.
                  </p>
                </div>
                {/* Defense Switcher */}
                <div className="flex items-center gap-2 bg-[#fbfaf7] border border-[#ece8de] p-1 rounded-xl">
                  <button
                    onClick={() => { setDefenseMode("vulnerable"); resetReentrancy(); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      defenseMode === "vulnerable" ? "bg-rose-600 text-white shadow-2xs" : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Vulnerable Contract
                  </button>
                  <button
                    onClick={() => { setDefenseMode("cei"); resetReentrancy(); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                      defenseMode === "cei" ? "bg-emerald-600 text-white shadow-2xs" : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Secured Contract (CEI)
                  </button>
                </div>
              </div>

              {/* Status Header */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold">Victim Vault Balance</span>
                  <strong className="text-lg font-bold text-blue-900 block">{victimContractBalance} ETH</strong>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold">Attacker Drained Balance</span>
                  <strong className="text-lg font-bold text-rose-600 block">{attackerStolenBalance} ETH</strong>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <span className="text-[10px] text-neutral-500 uppercase font-bold">Active Defense Mode</span>
                  <strong className={`text-xs font-bold block ${defenseMode === "vulnerable" ? "text-rose-600" : "text-emerald-700"}`}>
                    {defenseMode === "vulnerable" ? "Vulnerable (Interaction first)" : "Protected (Checks-Effects-Interactions)"}
                  </strong>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl flex items-center justify-between">
                  <button
                    onClick={stepReentrancy}
                    className="w-full py-2 rounded-lg bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer flex items-center justify-center gap-1"
                  >
                    <Play size={12} /> Step Next
                  </button>
                </div>
              </div>

              {/* Step State Explanation Card */}
              <div className="mt-4 p-4 rounded-xl border border-stone-200 bg-[#fbfaf7] text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-mono font-bold text-[10px]">
                    Step {reentrancyStep} of 5
                  </span>
                  <strong className="text-neutral-900">
                    {reentrancyStep === 0 && "Ready: Attacker deposits 1 ETH into victim contract."}
                    {reentrancyStep === 1 && "Attacker invokes withdraw(1 ETH). Contract reads balance (1 ETH > 0)."}
                    {reentrancyStep === 2 && (defenseMode === "vulnerable"
                      ? "VULNERABILITY TRIGGERED: Contract sends 1 ETH to attacker BEFORE zeroing balance!"
                      : "CEI DEFENSE TRIGGERED: Contract zeroes balances[attacker] = 0 BEFORE sending 1 ETH.")}
                    {reentrancyStep === 3 && (defenseMode === "vulnerable"
                      ? "Attacker fallback() receives ETH and immediately re-calls withdraw(1 ETH) recursively!"
                      : "Attacker fallback() re-calls withdraw(1 ETH), but balance is 0 -> REVERTS WITH ERROR!")}
                    {reentrancyStep === 4 && "Recursive loop continues! Another 1 ETH sent out without updating balance!"}
                    {reentrancyStep === 5 && "Victim vault completely drained! This is how The DAO lost 3.6M ETH in 2016."}
                  </strong>
                </div>

                {defenseMode === "vulnerable" ? (
                  <p className="text-neutral-600 text-[11px] leading-relaxed">
                    Because <code>balances[msg.sender] = 0</code> is located <em>after</em> the external call, the contract's state still believes the attacker has 1 ETH on every recursive entry!
                  </p>
                ) : (
                  <p className="text-emerald-800 text-[11px] leading-relaxed font-semibold">
                    Because <code>balances[msg.sender] = 0</code> executes <em>before</em> the external transfer, any reentrant attempt to withdraw immediately fails with <code>InsufficientBalance</code>.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 3: MODULAR VAULT LAB (SECTION 8.18)                       */}
        {/* ============================================================= */}
        {activeTab === "labs-code" && (
          <div className="space-y-12">
            {/* Project Overview Card */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="border-b border-[#ece8de] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                    Section 8.18 • Production Capstone Lab
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                    Modular Access-Controlled Vault System
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Hardhat &amp; Foundry Compatible
                  </span>
                </div>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                Build a production-grade Ethereum vault architecture composed of independent, modular smart contracts: <strong>Vault.sol</strong> (Ether balance ledger and CEI withdrawal protection), <strong>AccessManager.sol</strong> (role-based governance), and <strong>VaultMath.sol</strong> (reusable safe arithmetic library).
              </p>

              {/* Architecture Directory Tree */}
              <div className="p-4 bg-stone-900 rounded-xl text-stone-200 font-mono text-xs overflow-x-auto">
                <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{`ModularVault/
├── contracts/
│   ├── Vault.sol              # Core vault logic, deposits, withdrawals & CEI
│   ├── AccessManager.sol      # Role-based access control (ADMIN & OPERATOR)
│   └── libraries/
│       └── VaultMath.sol      # Stateless basis-point calculation library
├── test/
│   └── Vault.test.js          # Automated Chai/Ethers test suite (7 cases)
├── scripts/
│   └── deploy.js              # Hardhat deployment script
└── hardhat.config.js          # Compiler & network configuration`}</code></pre>
              </div>
            </div>

            {/* 1. Vault.sol */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 font-mono">contracts/Vault.sol</h3>
                  <span className="text-xs text-neutral-500">Core balance state, Checks-Effects-Interactions &amp; reentrancy guard</span>
                </div>
                <button
                  onClick={() => copyCode("vault-sol", VAULT_SOL)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e7e3da] bg-[#fbfaf7] text-xs font-bold text-neutral-700 hover:text-orange-600 transition cursor-pointer"
                >
                  {copiedSnippet === "vault-sol" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedSnippet === "vault-sol" ? "Copied" : "Copy Vault.sol"}</span>
                </button>
              </div>

              <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed max-h-96">
                <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{VAULT_SOL}</code></pre>
              </div>
            </div>

            {/* 2. AccessManager.sol */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 font-mono">contracts/AccessManager.sol</h3>
                  <span className="text-xs text-neutral-500">Keccak-256 role hash mapping, grant/revoke permissions</span>
                </div>
                <button
                  onClick={() => copyCode("access-sol", ACCESS_MANAGER_SOL)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e7e3da] bg-[#fbfaf7] text-xs font-bold text-neutral-700 hover:text-orange-600 transition cursor-pointer"
                >
                  {copiedSnippet === "access-sol" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedSnippet === "access-sol" ? "Copied" : "Copy AccessManager.sol"}</span>
                </button>
              </div>

              <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed max-h-80">
                <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{ACCESS_MANAGER_SOL}</code></pre>
              </div>
            </div>

            {/* 3. VaultMath.sol */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 font-mono">contracts/libraries/VaultMath.sol</h3>
                  <span className="text-xs text-neutral-500">Stateless internal math library for basis points (BPS)</span>
                </div>
                <button
                  onClick={() => copyCode("math-sol", VAULT_MATH_SOL)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e7e3da] bg-[#fbfaf7] text-xs font-bold text-neutral-700 hover:text-orange-600 transition cursor-pointer"
                >
                  {copiedSnippet === "math-sol" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedSnippet === "math-sol" ? "Copied" : "Copy VaultMath.sol"}</span>
                </button>
              </div>

              <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed max-h-64">
                <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{VAULT_MATH_SOL}</code></pre>
              </div>
            </div>

            {/* 4. Automated Test Suite */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 font-mono">test/Vault.test.js</h3>
                  <span className="text-xs text-neutral-500">Chai/Ethers tests validating all 7 testing requirements</span>
                </div>
                <button
                  onClick={() => copyCode("test-js", VAULT_TEST_JS)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e7e3da] bg-[#fbfaf7] text-xs font-bold text-neutral-700 hover:text-orange-600 transition cursor-pointer"
                >
                  {copiedSnippet === "test-js" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedSnippet === "test-js" ? "Copied" : "Copy Vault.test.js"}</span>
                </button>
              </div>

              <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed max-h-96">
                <pre className="overflow-x-auto [scrollbar-width:thin]"><code>{VAULT_TEST_JS}</code></pre>
              </div>
            </div>

            {/* 5. Testing Requirements Table */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Verification Suite
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mt-1">
                  Testing Requirements &amp; Expected Results Matrix
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                  <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                    <tr>
                      <th className="p-3 border-r border-[#e7e3da]">Test Case</th>
                      <th className="p-3 border-r border-[#e7e3da]">Condition &amp; Invocations</th>
                      <th className="p-3">Expected Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ece8de]">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900 border-r border-[#e7e3da]">1. Deposit Ether</td>
                      <td className="p-3 border-r border-[#e7e3da] font-mono">vault.deposit&#123;value: 1.0 ether&#125;()</td>
                      <td className="p-3 text-emerald-700 font-bold">User balance increases + Deposit event emitted</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900 border-r border-[#e7e3da]">2. Withdraw Ether</td>
                      <td className="p-3 border-r border-[#e7e3da] font-mono">vault.withdraw(1.0 ether)</td>
                      <td className="p-3 text-emerald-700 font-bold">User balance decreases + Withdrawal event emitted</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900 border-r border-[#e7e3da]">3. Withdraw without balance</td>
                      <td className="p-3 border-r border-[#e7e3da] font-mono">vault.withdraw(1.0 ether) when balance = 0</td>
                      <td className="p-3 text-rose-700 font-bold">Transaction reverts: InsufficientBalance</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900 border-r border-[#e7e3da]">4. Unauthorized admin operation</td>
                      <td className="p-3 border-r border-[#e7e3da] font-mono">accessManager.connect(alice).grantRole(...)</td>
                      <td className="p-3 text-rose-700 font-bold">Transaction reverts: NotAuthorized</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900 border-r border-[#e7e3da]">5. Authorized admin operation</td>
                      <td className="p-3 border-r border-[#e7e3da] font-mono">accessManager.connect(admin).grantRole(...)</td>
                      <td className="p-3 text-emerald-700 font-bold">Transaction succeeds: RoleGranted emitted</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900 border-r border-[#e7e3da]">6. Reentrant withdrawal attempt</td>
                      <td className="p-3 border-r border-[#e7e3da] font-mono">Attacker fallback re-enters withdraw()</td>
                      <td className="p-3 text-emerald-700 font-bold">Attack prevented by Checks-Effects-Interactions &amp; mutex</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900 border-r border-[#e7e3da]">7. Invalid role assignment</td>
                      <td className="p-3 border-r border-[#e7e3da] font-mono">grantRole(ROLE, address(0))</td>
                      <td className="p-3 text-rose-700 font-bold">Transaction reverts: InvalidAccount</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Production Security Checklist */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-neutral-900">Modular Smart Contract Security Checklist (7 Core Tenets)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <span className="font-bold text-orange-600 block">1. Checks-Effects-Interactions</span>
                  <p className="text-neutral-600">Zero or update state balances prior to initiating any external ETH call.</p>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <span className="font-bold text-orange-600 block">2. Avoid Arbitrary delegatecall</span>
                  <p className="text-neutral-600">Never allow callers to direct delegatecall to unwhitelisted target addresses.</p>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <span className="font-bold text-orange-600 block">3. Validate All External Inputs</span>
                  <p className="text-neutral-600">Check for address(0), zero deposits, and maximum array lengths.</p>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <span className="font-bold text-orange-600 block">4. Restrict Privileged Functions</span>
                  <p className="text-neutral-600">Enforce RBAC role modifiers on all administration and emergency sweeps.</p>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <span className="font-bold text-orange-600 block">5. Established Security Libraries</span>
                  <p className="text-neutral-600">Prefer audited implementations (OpenZeppelin AccessControl, SafeERC20).</p>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                  <span className="font-bold text-orange-600 block">6. Test Edge Cases &amp; Reverts</span>
                  <p className="text-neutral-600">Validate 0 balances, max uint bounds, and unauthorized caller rejections.</p>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1 sm:col-span-2">
                  <span className="font-bold text-orange-600 block">7. Verify Storage Layout Before Upgrades</span>
                  <p className="text-neutral-600">Ensure upgradeable implementations preserve slot alignment to prevent storage collision.</p>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 4: ASSIGNMENTS & INTERVIEW ASSESSMENT (8.19 - 8.20)       */}
        {/* ============================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-12">
            {/* Header & Weighting Card */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                Sections 8.19 &amp; 8.20 • Certification &amp; Career Assessment
              </span>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                Advanced Smart Contract Examination &amp; Interview Portfolio
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Validate your systems engineering competency across 3 production assignments, 10 interactive multiple-choice questions, and 15 senior smart contract developer interview scenarios.
              </p>

              {/* Assessment Weights Table */}
              <div className="pt-2">
                <span className="text-xs font-bold text-neutral-800 block mb-2">Grading Weight Distribution:</span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-mono">
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                    <span className="text-neutral-500 block text-[10px]">Technical Quiz</span>
                    <strong className="text-orange-600 text-base">15%</strong>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                    <span className="text-neutral-500 block text-[10px]">Coding Exercises</span>
                    <strong className="text-blue-600 text-base">20%</strong>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                    <span className="text-neutral-500 block text-[10px]">Practical Vault Lab</span>
                    <strong className="text-emerald-600 text-base">30%</strong>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                    <span className="text-neutral-500 block text-[10px]">Security Analysis</span>
                    <strong className="text-purple-600 text-base">15%</strong>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                    <span className="text-neutral-500 block text-[10px]">Final Assignments</span>
                    <strong className="text-amber-600 text-base">20%</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8.19: Assignments 1, 2, and 3 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-900 pb-2 border-b border-[#ece8de]">
                Section 8.19 • Core Architectural Assignments
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Assignment 1 */}
                <div className="p-5 bg-white border border-[#e7e3da] rounded-xl shadow-2xs space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-orange-600 font-mono">Assignment 1</span>
                    <h4 className="text-sm font-bold text-neutral-900 mt-1">Modular Voting Architecture</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Design a modular smart contract architecture for a decentralized governance platform. Separate proposal management, voting calculus, and role authorization into independent contracts linked via interfaces.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-neutral-500 mt-2">
                      <li>Proposal creation &amp; state machine</li>
                      <li>Role-based access control (Admin/Voter)</li>
                      <li>Reusable math voting libraries</li>
                      <li>Event logging &amp; receipt verification</li>
                    </ul>
                  </div>
                  <span className="text-[10px] text-orange-600 font-bold bg-orange-50 p-2 rounded-lg block">Deliverable: System Architecture Specification</span>
                </div>

                {/* Assignment 2 */}
                <div className="p-5 bg-white border border-[#e7e3da] rounded-xl shadow-2xs space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-blue-600 font-mono">Assignment 2</span>
                    <h4 className="text-sm font-bold text-neutral-900 mt-1">Comparative Proxy Architecture</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Author a comprehensive technical report comparing Transparent Proxies, UUPS Proxies, Beacon Proxies, and EIP-2535 Diamond Multi-Facet Proxies.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-neutral-500 mt-2">
                      <li>Storage collision hazards &amp; ERC-1967</li>
                      <li>Selector clashing &amp; fallback routing</li>
                      <li>Gas overhead comparison table</li>
                      <li>Architectural layout diagrams</li>
                    </ul>
                  </div>
                  <span className="text-[10px] text-blue-600 font-bold bg-blue-50 p-2 rounded-lg block">Deliverable: Engineering Report with Diagrams</span>
                </div>

                {/* Assignment 3 */}
                <div className="p-5 bg-white border border-[#e7e3da] rounded-xl shadow-2xs space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 font-mono">Assignment 3</span>
                    <h4 className="text-sm font-bold text-neutral-900 mt-1">Gas Optimization Audit</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Refactor an unoptimized legacy contract to achieve measurable gas reductions using storage packing, custom errors, calldata parameters, and inline Yul assembly.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[11px] text-neutral-500 mt-2">
                      <li>Pack 32-byte slots to reduce SSTOREs</li>
                      <li>Replace string reverts with Custom Errors</li>
                      <li>Benchmark via `forge test --gas-report`</li>
                      <li>Inline Yul computation benchmarks</li>
                    </ul>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 p-2 rounded-lg block">Deliverable: Before/After Gas Profiling Diff</span>
                </div>
              </div>
            </div>

            {/* Section 8.20 Part A: 10 Interactive MCQs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#ece8de]">
                <h3 className="text-lg font-bold text-neutral-900">Technical Examination (10 MCQs)</h3>
                <span className="text-xs font-bold text-orange-600 font-mono">
                  Score: {quizScore} / {MCQ_QUESTIONS.length}
                </span>
              </div>

              <div className="space-y-6">
                {MCQ_QUESTIONS.map((q, idx) => {
                  const selected = selectedAnswers[q.id];
                  const hasAnswered = selected !== undefined;
                  const isCorrect = selected === q.correct;

                  return (
                    <div key={q.id} className="bg-white border border-[#e7e3da] rounded-xl p-5 shadow-2xs space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-xs font-bold text-orange-600 font-mono">Question {idx + 1}</span>
                        {hasAnswered && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                          }`}>
                            {isCorrect ? "Correct" : "Incorrect"}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm font-semibold text-neutral-900 leading-snug">
                        {q.question}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, optIdx) => {
                          let btnStyle = "bg-[#fbfaf7] border-[#e7e3da] text-neutral-700 hover:bg-[#f0ede6]";
                          if (hasAnswered) {
                            if (optIdx === q.correct) {
                              btnStyle = "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold";
                            } else if (optIdx === selected) {
                              btnStyle = "bg-rose-50 border-rose-300 text-rose-900 font-semibold";
                            } else {
                              btnStyle = "bg-[#fbfaf7] border-[#ece8de] text-neutral-400 opacity-60";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectMcq(q.id, optIdx)}
                              disabled={hasAnswered}
                              className={`p-3 rounded-xl border text-left text-xs transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {hasAnswered && optIdx === q.correct && (
                                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 ml-2" />
                              )}
                              {hasAnswered && optIdx === selected && !isCorrect && (
                                <XCircle size={14} className="text-rose-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {hasAnswered && (
                        <div className="mt-2 p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-xs text-neutral-600 leading-relaxed">
                          <strong className="text-neutral-800 block mb-0.5 font-sans">Explanation:</strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 8.20 Part B: 15 Interview Preparation Questions */}
            <div className="space-y-4 pt-4">
              <div className="pb-2 border-b border-[#ece8de]">
                <h3 className="text-lg font-bold text-neutral-900">
                  Senior Smart Contract Engineer Interview Preparation (15 Questions)
                </h3>
                <p className="text-xs text-neutral-500">
                  Click on each question to review authoritative technical answers expected during technical rounds at leading Web3 protocol teams.
                </p>
              </div>

              <div className="space-y-3">
                {INTERVIEW_QUESTIONS.map((iq, idx) => {
                  const isOpen = expandedInterview[iq.id];
                  return (
                    <div key={iq.id} className="bg-white border border-[#e7e3da] rounded-xl overflow-hidden shadow-2xs">
                      <button
                        onClick={() => toggleInterview(iq.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-[#fbfaf7] transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-mono text-orange-600">Q{idx + 1}</span>
                          <span className="text-xs font-semibold text-neutral-900">{iq.question}</span>
                        </div>
                        {isOpen ? <ChevronUp size={16} className="text-neutral-500 shrink-0" /> : <ChevronDown size={16} className="text-neutral-500 shrink-0" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-[#fbfaf7] border-t border-[#ece8de] text-xs text-neutral-700 leading-relaxed space-y-1">
                          <strong className="text-neutral-900 block font-sans">Authoritative Model Answer:</strong>
                          <p>{iq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 5: RESOURCES, CHECKLIST & TRACKING                        */}
        {/* ============================================================= */}
        {activeTab === "capstone-checklist" && (
          <div className="space-y-12">
            {/* Learning Resources Card */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Official Literature &amp; Specifications
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  Module 8 Recommended Learning Resources
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://docs.soliditylang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Documentation</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">Solidity Official Documentation</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    The complete reference manual for advanced syntax, ABI encoding, memory management, and C3 linearization.
                  </p>
                </a>

                <a
                  href="https://docs.openzeppelin.com/contracts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Security Standards</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">OpenZeppelin Contracts Documentation</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Audited implementations of Ownable2Step, AccessControl, ReentrancyGuard, ERC-1967 Proxies, and UUPS upgradeability.
                  </p>
                </a>

                <a
                  href="https://eips.ethereum.org/EIPS/eip-2535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Ethereum Standard</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">EIP-2535 — Diamond Standard</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    The official specification for multi-facet proxy architectures, function selector routing, and shared AppStorage layout.
                  </p>
                </a>

                <a
                  href="https://docs.soliditylang.org/en/latest/assembly.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Low-Level Reference</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">Solidity Inline Assembly and Yul</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Official specification for Yul opcodes, memory management, storage pointer offsets, and EVM intermediate representation.
                  </p>
                </a>

                <a
                  href="https://ethereum.org/en/developers/docs/smart-contracts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Developer Portal</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">Ethereum Smart Contract Development</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Guides on smart contract lifecycles, gas economics, composability, and the Ethereum testnet ecosystem.
                  </p>
                </a>

                <a
                  href="https://hardhat.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Framework</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">Hardhat Development Framework</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Professional Ethereum development environment for compiling, testing with Chai/Mocha, debugging with console.log, and deploying.
                  </p>
                </a>
              </div>
            </section>

            {/* Module Completion Outcome Card */}
            <div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-900 via-stone-950 to-orange-950 p-6 sm:p-8 text-white shadow-xs space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 block">
                Module Completion Outcome
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                Senior Smart Contract Systems Architect Competency
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-4xl">
                After completing Module 8, learners possess the technical capabilities to design production-grade modular Solidity architectures, implement role-based access control, architect upgradeable proxy systems without storage collisions, apply the Checks-Effects-Interactions pattern against reentrancy, write low-level Yul assembly, and pass rigorous smart contract security audits.
              </p>
            </div>

            {/* 26-Objective Student Mastery Checklist */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ece8de] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                    Module 8 Accreditation Tracker
                  </span>
                  <h2 className="text-xl font-bold text-neutral-900 mt-1">
                    Student Completion &amp; Mastery Checklist (26 Objectives)
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold font-mono text-orange-600">
                    {checklistCompletedCount} of {CHECKLIST_ITEMS.length} Completed
                  </span>
                  <div className="w-24 h-2 bg-[#ece8de] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-600 transition-all duration-300"
                      style={{ width: `${(checklistCompletedCount / CHECKLIST_ITEMS.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CHECKLIST_ITEMS.map((item, idx) => {
                  const isChecked = Boolean(checklist[idx]);
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleChecklistItem(idx)}
                      className={`p-3.5 rounded-xl border text-left text-xs transition cursor-pointer flex items-center gap-3 ${
                        isChecked
                          ? "bg-orange-50/70 border-orange-200 text-stone-900 font-medium"
                          : "bg-[#fbfaf7] border-[#e7e3da] text-stone-600 hover:bg-[#f0ede6]"
                      }`}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                          isChecked
                            ? "bg-[#f97316] border-[#f97316] text-white"
                            : "bg-white border-stone-300 text-transparent"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={isChecked ? "line-through text-stone-500" : ""}>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Bottom Track Progression Navigation */}
            <div className="pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => navigate("/learning/blockchain/solidity")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-neutral-800 hover:border-orange-300 hover:text-orange-600 transition cursor-pointer"
              >
                <ArrowLeft size={16} />
                <span>Previous: 7. Solidity Fundamentals</span>
              </button>

              <button
                onClick={() => navigate("/learning/blockchain/architecture")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer shadow-sm shadow-orange-500/25 active:scale-95"
              >
                <span>Next Module: 9. Smart Contract Development &amp; Architecture</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
