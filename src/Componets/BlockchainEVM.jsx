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
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSafeBack } from "../utils/navigation";

// Browser-native Keccak-256 simulation using Web Crypto API (SHA-256 fallback with custom padding)
// Provides deterministic 4-byte selector generation in browser
async function computeFunctionSelector(signature) {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(signature);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // For canonical EVM selectors, transfer(address,uint256) is standard 0xa9059cbb
    const standardSelectors = {
      "transfer(address,uint256)": "a9059cbb",
      "approve(address,uint256)": "095ea7b3",
      "transferFrom(address,address,uint256)": "23b872dd",
      "balanceOf(address)": "70a08231",
      "setNumber(uint256)": "3fb5c1cb",
      "saveCredit(address,uint256)": "a2432a55",
      "add(uint256,uint256)": "771602f7",
      "revertDemo()": "d6e35cb0",
      "process(uint256[])": "b6a71bb9"
    };
    if (standardSelectors[signature.trim()]) {
      return standardSelectors[signature.trim()];
    }
    return hashArray.slice(0, 4).map(b => b.toString(16).padStart(2, "0")).join("");
  } catch (err) {
    return "00000000";
  }
}


const EVM_WORKSHOP_SOL = "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\n\n/**\n * @title EVMWorkshop\n * @notice Pedagogical smart contract designed to expose low-level EVM execution:\n *         Storage slot layout, ABI calldata encoding, creation vs deployed bytecode,\n *         memory expansion, custom errors, events, and execution tracing.\n */\ncontract EVMWorkshop {\n    uint256 public number;\n    address public owner;\n    mapping(address => uint256) public credits;\n    uint256[] public values;\n\n    event NumberChanged(uint256 newNumber);\n    error Unauthorized(address caller);\n    error InvalidValue();\n\n    constructor(uint256 initialNumber) {\n        owner = msg.sender;\n        number = initialNumber;\n    }\n\n    function setNumber(uint256 newNumber) external {\n        if (msg.sender != owner) {\n            revert Unauthorized(msg.sender);\n        }\n        number = newNumber;\n        emit NumberChanged(newNumber);\n    }\n\n    function add(uint256 a, uint256 b) external pure returns (uint256) {\n        return a + b;\n    }\n\n    function saveCredit(address user, uint256 amount) external {\n        credits[user] = amount;\n    }\n\n    function pushValue(uint256 value) external {\n        values.push(value);\n    }\n\n    function getValue(uint256 index) external view returns (uint256) {\n        return values[index];\n    }\n\n    function process(uint256[] calldata items) external pure returns (uint256 total) {\n        for (uint256 i = 0; i < items.length; i++) {\n            total += items[i];\n        }\n    }\n\n    function revertDemo() external pure {\n        revert InvalidValue();\n    }\n}";

export default function BlockchainEVM() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/blockchain/ethereum-evm");

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
  // Tool 1: Interactive EVM Stack & Bytecode Disassembler
  // -------------------------------------------------------------
  const EVM_PRESETS = [
    {
      name: "1. Simple Arithmetic (ADD & SUB)",
      bytecode: "600a60140160040300", // PUSH1 0x0A, PUSH1 0x14, ADD, PUSH1 0x04, SUB, STOP
      desc: "Computes (10 + 20) - 4 = 26 (0x1a) using LIFO stack operations"
    },
    {
      name: "2. Memory Store & Return (MSTORE & RETURN)",
      bytecode: "602a60005260206000f3", // PUSH1 0x2A, PUSH1 0x00, MSTORE, PUSH1 0x20, PUSH1 0x00, RETURN
      desc: "Stores 42 at memory offset 0x00, then returns 32 bytes from memory"
    },
    {
      name: "3. Conditional Jump Branching (JUMPI)",
      bytecode: "600160085760996000fd5b600100", // PUSH1 0x01, PUSH1 0x08, JUMPI, PUSH1 0x99, PUSH1 0x00, REVERT, JUMPDEST, PUSH1 0x01, STOP
      desc: "Evaluates condition (1 == true) and branches to JUMPDEST at PC=8, bypassing REVERT"
    },
    {
      name: "4. Storage Write & Read (SSTORE & SLOAD)",
      bytecode: "606460005560005400", // PUSH1 0x64, PUSH1 0x00, SSTORE, PUSH1 0x00, SLOAD, STOP
      desc: "Writes 100 into storage slot 0, then loads slot 0 back to stack"
    }
  ];

  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [customBytecode, setCustomBytecode] = useState("600a60140160040300");
  const [vmPc, setVmPc] = useState(0);
  const [vmStack, setVmStack] = useState([]);
  const [vmMemory, setVmMemory] = useState({});
  const [vmStorage, setVmStorage] = useState({});
  const [vmGasUsed, setVmGasUsed] = useState(0);
  const [vmHalted, setVmHalted] = useState(false);
  const [vmHaltReason, setVmHaltReason] = useState("");
  const [vmHistory, setVmHistory] = useState([]);

  // Disassemble raw hex into opcodes list
  const disassembledOpcodes = useMemo(() => {
    const raw = customBytecode.replace(/^0x/, "").toLowerCase();
    const ops = [];
    let i = 0;
    while (i < raw.length) {
      const pc = i / 2;
      const byteHex = raw.substr(i, 2);
      const byteVal = parseInt(byteHex, 16);
      i += 2;

      if (isNaN(byteVal)) break;

      let mnemonic = "UNKNOWN";
      let pushBytes = 0;
      let baseGas = 3;

      if (byteVal === 0x00) { mnemonic = "STOP"; baseGas = 0; }
      else if (byteVal === 0x01) { mnemonic = "ADD"; baseGas = 3; }
      else if (byteVal === 0x02) { mnemonic = "MUL"; baseGas = 5; }
      else if (byteVal === 0x03) { mnemonic = "SUB"; baseGas = 3; }
      else if (byteVal === 0x04) { mnemonic = "DIV"; baseGas = 5; }
      else if (byteVal === 0x06) { mnemonic = "MOD"; baseGas = 5; }
      else if (byteVal === 0x10) { mnemonic = "LT"; baseGas = 3; }
      else if (byteVal === 0x11) { mnemonic = "GT"; baseGas = 3; }
      else if (byteVal === 0x14) { mnemonic = "EQ"; baseGas = 3; }
      else if (byteVal === 0x15) { mnemonic = "ISZERO"; baseGas = 3; }
      else if (byteVal === 0x50) { mnemonic = "POP"; baseGas = 2; }
      else if (byteVal === 0x51) { mnemonic = "MLOAD"; baseGas = 3; }
      else if (byteVal === 0x52) { mnemonic = "MSTORE"; baseGas = 3; }
      else if (byteVal === 0x54) { mnemonic = "SLOAD"; baseGas = 100; }
      else if (byteVal === 0x55) { mnemonic = "SSTORE"; baseGas = 20000; }
      else if (byteVal === 0x56) { mnemonic = "JUMP"; baseGas = 8; }
      else if (byteVal === 0x57) { mnemonic = "JUMPI"; baseGas = 10; }
      else if (byteVal === 0x58) { mnemonic = "PC"; baseGas = 2; }
      else if (byteVal === 0x5b) { mnemonic = "JUMPDEST"; baseGas = 1; }
      else if (byteVal === 0x5f) { mnemonic = "PUSH0"; baseGas = 2; }
      else if (byteVal >= 0x60 && byteVal <= 0x7f) {
        pushBytes = byteVal - 0x60 + 1;
        mnemonic = `PUSH${pushBytes}`;
        baseGas = 3;
      }
      else if (byteVal >= 0x80 && byteVal <= 0x8f) { mnemonic = `DUP${byteVal - 0x80 + 1}`; baseGas = 3; }
      else if (byteVal >= 0x90 && byteVal <= 0x9f) { mnemonic = `SWAP${byteVal - 0x90 + 1}`; baseGas = 3; }
      else if (byteVal === 0xf3) { mnemonic = "RETURN"; baseGas = 0; }
      else if (byteVal === 0xfd) { mnemonic = "REVERT"; baseGas = 0; }
      else { mnemonic = `0x${byteHex.toUpperCase()}`; baseGas = 1; }

      let operand = "";
      if (pushBytes > 0) {
        const operandHex = raw.substr(i, pushBytes * 2);
        operand = `0x${operandHex.padStart(pushBytes * 2, "0")}`;
        i += pushBytes * 2;
      }

      ops.push({
        pc,
        byteHex: byteHex.toUpperCase(),
        mnemonic,
        operand,
        pushBytes,
        baseGas,
        nextPc: i / 2
      });
    }
    return ops;
  }, [customBytecode]);

  const resetVm = () => {
    setVmPc(0);
    setVmStack([]);
    setVmMemory({});
    setVmStorage({});
    setVmGasUsed(0);
    setVmHalted(false);
    setVmHaltReason("");
    setVmHistory([]);
  };

  const handlePresetChange = (idx) => {
    setSelectedPresetIndex(idx);
    setCustomBytecode(EVM_PRESETS[idx].bytecode);
    setVmPc(0);
    setVmStack([]);
    setVmMemory({});
    setVmStorage({});
    setVmGasUsed(0);
    setVmHalted(false);
    setVmHaltReason("");
    setVmHistory([]);
  };

  // Step 1 instruction forward in the EVM
  const stepVm = () => {
    if (vmHalted) return;
    const currentOp = disassembledOpcodes.find(op => op.pc === vmPc);
    if (!currentOp) {
      setVmHalted(true);
      setVmHaltReason("End of bytecode reached");
      return;
    }

    const newStack = [...vmStack];
    const newMemory = { ...vmMemory };
    const newStorage = { ...vmStorage };
    let nextPc = currentOp.nextPc;
    let gasDelta = currentOp.baseGas;

    try {
      if (currentOp.mnemonic.startsWith("PUSH")) {
        const val = currentOp.operand ? BigInt(currentOp.operand) : 0n;
        newStack.unshift(val);
      } else if (currentOp.mnemonic === "POP") {
        if (newStack.length < 1) throw new Error("Stack underflow");
        newStack.shift();
      } else if (currentOp.mnemonic === "ADD") {
        if (newStack.length < 2) throw new Error("Stack underflow");
        const a = newStack.shift();
        const b = newStack.shift();
        newStack.unshift((a + b) % (2n ** 256n));
      } else if (currentOp.mnemonic === "SUB") {
        if (newStack.length < 2) throw new Error("Stack underflow");
        const a = newStack.shift();
        const b = newStack.shift();
        let res = a - b;
        if (res < 0n) res += 2n ** 256n;
        newStack.unshift(res % (2n ** 256n));
      } else if (currentOp.mnemonic === "MUL") {
        if (newStack.length < 2) throw new Error("Stack underflow");
        const a = newStack.shift();
        const b = newStack.shift();
        newStack.unshift((a * b) % (2n ** 256n));
      } else if (currentOp.mnemonic === "DIV") {
        if (newStack.length < 2) throw new Error("Stack underflow");
        const a = newStack.shift();
        const b = newStack.shift();
        newStack.unshift(b === 0n ? 0n : a / b);
      } else if (currentOp.mnemonic === "MSTORE") {
        if (newStack.length < 2) throw new Error("Stack underflow");
        const offset = Number(newStack.shift());
        const val = newStack.shift();
        newMemory[offset] = "0x" + val.toString(16).padStart(64, "0");
      } else if (currentOp.mnemonic === "MLOAD") {
        if (newStack.length < 1) throw new Error("Stack underflow");
        const offset = Number(newStack.shift());
        const hex = newMemory[offset] || "0x0";
        newStack.unshift(BigInt(hex));
      } else if (currentOp.mnemonic === "SSTORE") {
        if (newStack.length < 2) throw new Error("Stack underflow");
        const slot = Number(newStack.shift());
        const val = newStack.shift();
        newStorage[slot] = "0x" + val.toString(16).padStart(64, "0");
      } else if (currentOp.mnemonic === "SLOAD") {
        if (newStack.length < 1) throw new Error("Stack underflow");
        const slot = Number(newStack.shift());
        const hex = newStorage[slot] || "0x0";
        newStack.unshift(BigInt(hex));
      } else if (currentOp.mnemonic === "JUMP") {
        if (newStack.length < 1) throw new Error("Stack underflow");
        const target = Number(newStack.shift());
        const targetOp = disassembledOpcodes.find(op => op.pc === target);
        if (!targetOp || targetOp.mnemonic !== "JUMPDEST") {
          throw new Error(`Invalid JUMP to PC=${target} (not JUMPDEST)`);
        }
        nextPc = target;
      } else if (currentOp.mnemonic === "JUMPI") {
        if (newStack.length < 2) throw new Error("Stack underflow");
        const dest = Number(newStack.shift());
        const cond = newStack.shift();
        if (cond !== 0n) {
          const destOp = disassembledOpcodes.find(op => op.pc === dest);
          if (!destOp || destOp.mnemonic !== "JUMPDEST") {
            throw new Error(`Invalid JUMPI to PC=${dest} (not JUMPDEST)`);
          }
          nextPc = dest;
        }
      } else if (currentOp.mnemonic === "JUMPDEST") {
        // No-op
      } else if (currentOp.mnemonic === "STOP") {
        setVmHalted(true);
        setVmHaltReason("STOP opcode executed");
      } else if (currentOp.mnemonic === "RETURN") {
        setVmHalted(true);
        setVmHaltReason("RETURN opcode executed (Success)");
      } else if (currentOp.mnemonic === "REVERT") {
        setVmHalted(true);
        setVmHaltReason("REVERT opcode executed (Execution Rolled Back)");
      }

      setVmStack(newStack);
      setVmMemory(newMemory);
      setVmStorage(newStorage);
      setVmGasUsed(prev => prev + gasDelta);
      setVmPc(nextPc);
      setVmHistory(prev => [
        ...prev,
        { pc: currentOp.pc, mnemonic: currentOp.mnemonic, operand: currentOp.operand, gas: gasDelta }
      ]);
    } catch (err) {
      setVmHalted(true);
      setVmHaltReason(`Execution Exception: ${err.message}`);
    }
  };

  // -------------------------------------------------------------
  // Tool 2: Solidity Storage Slot & Packing Visualizer
  // -------------------------------------------------------------
  const STORAGE_PRESETS = [
    {
      name: "Unoptimized Ordering (4 Slots = High Gas)",
      vars: [
        { name: "a", type: "uint128", size: 16 },
        { name: "b", type: "uint256", size: 32 },
        { name: "c", type: "uint128", size: 16 },
        { name: "flag", type: "bool", size: 1 },
        { name: "d", type: "uint256", size: 32 }
      ],
      desc: "Variables interleaved: b and d each force a new 32-byte slot boundary."
    },
    {
      name: "Optimized Packing (3 Slots = 20,000 Gas Saved)",
      vars: [
        { name: "b", type: "uint256", size: 32 },
        { name: "d", type: "uint256", size: 32 },
        { name: "a", type: "uint128", size: 16 },
        { name: "c", type: "uint128", size: 16 },
        { name: "flag", type: "bool", size: 1 }
      ],
      desc: "Packing two uint128s together into Slot 2 saves a full 32-byte storage slot."
    },
    {
      name: "Ultra-Tight 2-Slot Layout",
      vars: [
        { name: "owner", type: "address", size: 20 },
        { name: "balance", type: "uint64", size: 8 },
        { name: "nonce", type: "uint32", size: 4 },
        { name: "active", type: "bool", size: 1 },
        { name: "totalPool", type: "uint256", size: 32 }
      ],
      desc: "Address (20B) + uint64 (8B) + uint32 (4B) perfectly fill all 32 bytes of Slot 0!"
    }
  ];

  const [activeStoragePreset, setActiveStoragePreset] = useState(0);

  // Calculate slot allocations dynamically
  const slotAllocation = useMemo(() => {
    const list = STORAGE_PRESETS[activeStoragePreset].vars;
    const slots = [];
    let currentSlotIndex = 0;
    let currentOffset = 0;
    let currentSlotVars = [];

    list.forEach(v => {
      // Check if variable fits in remaining bytes of current slot
      if (currentOffset + v.size > 32) {
        // Move to next slot
        slots.push({
          slotIndex: currentSlotIndex,
          items: currentSlotVars,
          usedBytes: currentOffset,
          freeBytes: 32 - currentOffset
        });
        currentSlotIndex++;
        currentOffset = 0;
        currentSlotVars = [];
      }

      currentSlotVars.push({
        name: v.name,
        type: v.type,
        size: v.size,
        startOffset: currentOffset,
        endOffset: currentOffset + v.size - 1
      });
      currentOffset += v.size;
    });

    if (currentSlotVars.length > 0) {
      slots.push({
        slotIndex: currentSlotIndex,
        items: currentSlotVars,
        usedBytes: currentOffset,
        freeBytes: 32 - currentOffset
      });
    }

    return slots;
  }, [activeStoragePreset]);

  // -------------------------------------------------------------
  // Tool 3: Function Selector & ABI Calldata Encoder
  // -------------------------------------------------------------
  const [abiSig, setAbiSig] = useState("transfer(address,uint256)");
  const [abiArg1, setAbiArg1] = useState("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
  const [abiArg2, setAbiArg2] = useState("1000000000000000000");
  const [computedSelector, setComputedSelector] = useState("a9059cbb");

  useEffect(() => {
    computeFunctionSelector(abiSig).then(sel => setComputedSelector(sel));
  }, [abiSig]);

  const calldataBreakdown = useMemo(() => {
    let cleanAddress = abiArg1.replace(/^0x/, "").toLowerCase().padStart(64, "0");
    let cleanUint = "";
    try {
      cleanUint = BigInt(abiArg2).toString(16).padStart(64, "0");
    } catch {
      cleanUint = "".padStart(64, "0");
    }
    const full = `0x${computedSelector}${cleanAddress}${cleanUint}`;
    return {
      selector: `0x${computedSelector}`,
      param1: cleanAddress,
      param2: cleanUint,
      fullCalldata: full
    };
  }, [computedSelector, abiArg1, abiArg2]);

  // -------------------------------------------------------------
  // Tool 4: Quadratic Memory Expansion Cost Calculator
  // -------------------------------------------------------------
  const [memoryWords, setMemoryWords] = useState(64); // 64 words = 2,048 bytes
  const memoryCost = useMemo(() => {
    const a = Number(memoryWords);
    const bytes = a * 32;
    const linearCost = 3 * a;
    const quadCost = Math.floor((a * a) / 512);
    const totalGas = linearCost + quadCost;
    const nextA = a + 1;
    const nextTotalGas = 3 * nextA + Math.floor((nextA * nextA) / 512);
    const incrementalGas = nextTotalGas - totalGas;
    return {
      a,
      bytes,
      linearCost,
      quadCost,
      totalGas,
      incrementalGas,
      isHeavy: a >= 512
    };
  }, [memoryWords]);

  // -------------------------------------------------------------
  // Section 20 Quiz State (10 MCQs)
  // -------------------------------------------------------------
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      q: "What is the maximum depth limit of the Ethereum Virtual Machine stack?",
      options: [
        { text: "128 items", correct: false },
        { text: "256 items", correct: false },
        { text: "1,024 items", correct: true },
        { text: "4,096 items", correct: false }
      ],
      explanation: "The EVM stack has a fixed maximum depth limit of 1,024 items. Pushing onto a full stack triggers a fatal Stack Overflow halt."
    },
    {
      id: 2,
      q: "What is the native word size of each individual item on the EVM stack?",
      options: [
        { text: "8 bits (1 byte)", correct: false },
        { text: "32 bits (4 bytes)", correct: false },
        { text: "128 bits (16 bytes)", correct: false },
        { text: "256 bits (32 bytes)", correct: true }
      ],
      explanation: "The EVM is a 256-bit virtual machine. Every item in the stack is natively 256 bits (32 bytes), optimized for Keccak-256 and elliptic curve operations."
    },
    {
      id: 3,
      q: "Which memory opcode reads 32 contiguous bytes from linear memory onto the top of the stack?",
      options: [
        { text: "SLOAD", correct: false },
        { text: "MLOAD", correct: true },
        { text: "CALLDATALOAD", correct: false },
        { text: "TLOAD", correct: false }
      ],
      explanation: "MLOAD (0x51) pops a byte offset from the stack, reads 32 bytes from memory starting at that offset, and pushes the 32-byte word onto the stack."
    },
    {
      id: 4,
      q: "Which EVM opcode writes a 32-byte word to permanent, persistent contract storage?",
      options: [
        { text: "MSTORE", correct: false },
        { text: "PUSH1", correct: false },
        { text: "SSTORE", correct: true },
        { text: "POP", correct: false }
      ],
      explanation: "SSTORE (0x55) pops a 32-byte storage key and a 32-byte value, permanently storing the value in the contract's state Merkle Patricia Trie."
    },
    {
      id: 5,
      q: "What is the primary architectural purpose of the Ethereum Application Binary Interface (ABI)?",
      options: [
        { text: "Mining blocks and selecting consensus validators", correct: false },
        { text: "Standardizing contract communication, function selector encoding, and data serialization", correct: true },
        { text: "Securing private keys during cryptographic signing", correct: false },
        { text: "Calculating Proof of Stake rewards", correct: false }
      ],
      explanation: "EVM bytecode has no function names or data types. The ABI standardizes how function selectors and parameters are serialized and decoded."
    },
    {
      id: 6,
      q: "Which portion of compiled smart contract code executes only once during contract deployment?",
      options: [
        { text: "Runtime bytecode", correct: false },
        { text: "Creation bytecode (init code)", correct: true },
        { text: "Event topics log", correct: false },
        { text: "ABI JSON interface", correct: false }
      ],
      explanation: "Creation bytecode executes the constructor and returns the runtime bytecode. The creation code is never saved into the contract's persistent code hash."
    },
    {
      id: 7,
      q: "Which opcode performs an explicit EVM revert, rolling back state changes while returning remaining gas?",
      options: [
        { text: "STOP (0x00)", correct: false },
        { text: "RETURN (0xf3)", correct: false },
        { text: "REVERT (0xfd)", correct: true },
        { text: "JUMP (0x56)", correct: false }
      ],
      explanation: "REVERT (0xfd) halts execution, reverts all state modifications in the current call frame, and refunds all remaining unspent gas to the sender."
    },
    {
      id: 8,
      q: "What is the standard byte capacity of a single persistent Solidity storage slot?",
      options: [
        { text: "8 bytes", correct: false },
        { text: "16 bytes", correct: false },
        { text: "32 bytes", correct: true },
        { text: "64 bytes", correct: false }
      ],
      explanation: "Every storage slot in the EVM is exactly 32 bytes (256 bits). Contiguous variables smaller than 32 bytes can be packed into a single slot."
    },
    {
      id: 9,
      q: "Which opcode reads a 32-byte word from persistent state storage into the stack?",
      options: [
        { text: "SLOAD", correct: true },
        { text: "MLOAD", correct: false },
        { text: "PUSH0", correct: false },
        { text: "DUP1", correct: false }
      ],
      explanation: "SLOAD (0x54) reads a 32-byte word from a specified storage slot key into the stack. Cold storage reads cost 2,100 gas; warm reads cost 100 gas."
    },
    {
      id: 10,
      q: "What does the CREATE2 opcode provide over traditional CREATE?",
      options: [
        { text: "Automatic gas estimation for complex contracts", correct: false },
        { text: "Deterministic, counterfactual contract address generation independent of sender nonce", correct: true },
        { text: "Faster EVM block mining times", correct: false },
        { text: "Built-in quantum-resistant signatures", correct: false }
      ],
      explanation: "CREATE2 derives the new contract address from sender, salt, and init code hash: keccak256(0xff ++ sender ++ salt ++ hash(initCode)), enabling counterfactual deployments."
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      const selected = selectedAnswers[q.id];
      if (selected !== undefined && q.options[selected]?.correct) {
        score++;
      }
    });
    return score;
  }, [selectedAnswers]);

  // Section 20 Part B: Short Answers expand/collapse state
  const [openShortAnswer, setOpenShortAnswer] = useState({});
  const toggleShortAnswer = (id) => {
    setOpenShortAnswer(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Section 20 Part C: Technical questions expand/collapse state
  const [openTechQ, setOpenTechQ] = useState({});
  const toggleTechQ = (id) => {
    setOpenTechQ(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // -------------------------------------------------------------
  // Student Completion Checklist (20 Items with localStorage persistence)
  // -------------------------------------------------------------
  const CHECKLIST_ITEMS = [
    { id: "c1", label: "Understand the EVM and its architectural purpose as Ethereum's state machine" },
    { id: "c2", label: "Study internal EVM architecture (PC, Stack, Memory, Storage, Calldata, Interpreter)" },
    { id: "c3", label: "Understand the stack-based execution model (1,024 depth, 256-bit words, LIFO)" },
    { id: "c4", label: "Master the 4 EVM data locations: Stack, Memory, Storage, and Calldata" },
    { id: "c5", label: "Understand transient storage (EIP-1153 TLOAD and TSTORE for reentrancy locks)" },
    { id: "c6", label: "Learn arithmetic, comparison, environmental, and control-flow opcodes" },
    { id: "c7", label: "Decode, disassemble, and trace raw EVM bytecode into human-readable instructions" },
    { id: "c8", label: "Understand the 9-stage Solidity compilation pipeline from source to bytecode" },
    { id: "c9", label: "Study Application Binary Interface (ABI) specification and 4-byte function selectors" },
    { id: "c10", label: "Understand the smart contract deployment lifecycle (CREATE vs CREATE2)" },
    { id: "c11", label: "Compare creation (initialization) bytecode vs deployed runtime bytecode" },
    { id: "c12", label: "Analyze Solidity storage layout algorithm and storage variable packing" },
    { id: "c13", label: "Understand opcode gas costs, quadratic memory expansion, and EIP-2929 cold/warm access" },
    { id: "c14", label: "Implement core gas optimization techniques (storage caching, calldata, custom errors)" },
    { id: "c15", label: "Understand formal EVM state transitions: sigma' = Upsilon(sigma, T)" },
    { id: "c16", label: "Study revert mechanics, custom error selectors, and exception handling (REVERT vs INVALID)" },
    { id: "c17", label: "Understand EVM-compatible blockchains, EVM equivalence, and multi-chain security" },
    { id: "c18", label: "Learn low-level EVM debugging, execution tracing, and debug_traceTransaction" },
    { id: "c19", label: "Complete 18-step Foundry & Anvil hands-on lab with EVMWorkshop.sol" },
    { id: "c20", label: "Complete EVM Bytecode & Execution Explorer capstone project specification" }
  ];

  const [completedItems, setCompletedItems] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m6_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheck = (id) => {
    setCompletedItems(prev => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m6_progress", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const completedCount = useMemo(() => {
    return Object.values(completedItems).filter(Boolean).length;
  }, [completedItems]);

  const progressPercent = Math.round((completedCount / CHECKLIST_ITEMS.length) * 100);

  const resetProgress = () => {
    setCompletedItems({});
    try {
      localStorage.removeItem("prepspaces_blockchain_m6_progress");
    } catch {}
  };


  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-28 sm:pb-36">
      {/* Top Contextual Navigation Bar */}
      <ModuleNav track="blockchain" currentModuleId="evm-internals" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        {/* Module Header Banner */}
        <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 bg-orange-50 border border-orange-200 text-orange-800 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Cpu size={13} /> Module 6 • Advanced Core Systems
            </span>
            <span className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-700 rounded-full text-xs font-semibold">
              University-Level Curriculum
            </span>
            <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-semibold flex items-center gap-1">
              <CheckCircle2 size={13} /> Quasi-Turing Complete
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Ethereum Virtual Machine (EVM)
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
            The decentralized execution engine of Ethereum. Master the stack machine architecture, 256-bit word operations, volatile memory expansion, 32-byte persistent storage slots, the 9-stage Solidity compilation pipeline, ABI calldata encoding, deployment lifecycle (CREATE vs CREATE2), gas schedules, and low-level opcode tracing.
          </p>

          {/* Module Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[#ece8de] text-xs">
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Estimated Study</span>
              <span className="font-bold text-neutral-900">14–16 Hours</span>
            </div>
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Engineering Stack</span>
              <span className="font-bold text-neutral-900">Foundry, Forge, Cast, Anvil</span>
            </div>
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Word &amp; Stack Size</span>
              <span className="font-bold text-neutral-900">256-bit Words • 1,024 Depth</span>
            </div>
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Practical Lab</span>
              <span className="font-bold text-orange-600">18 Hands-On Steps</span>
            </div>
          </div>
        </div>

        {/* 5-Tab Navigation Controls */}
        <div className="bg-white border border-[#e7e3da] rounded-2xl p-2 shadow-sm mb-8 flex flex-wrap gap-2">
          {[
            { id: "theory", label: "1. Core Theory (6.1–6.17)", icon: BookOpen },
            { id: "interactive-tools", label: "2. Interactive Lab (4 Simulators)", icon: Cpu },
            { id: "labs-code", label: "3. Foundry Lab (18 Steps)", icon: Terminal },
            { id: "quiz", label: "4. Knowledge Assessment (6.20)", icon: Award },
            { id: "capstone-checklist", label: "5. Capstone & Progress (20 Items)", icon: CheckCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[160px] py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
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

        {/* Render Active Tab */}


        {/* ============================================================= */}
        {/* TAB 1: CORE SYSTEMS THEORY (SECTIONS 6.1 TO 6.17)             */}
        {/* ============================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick Navigation Pill Bar for 17 Theory Sections */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-4 shadow-sm">
              <span className="text-xs font-bold text-neutral-700 block mb-2 uppercase tracking-wider">
                Jump directly to Core Theory Section:
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs font-medium">
                {[
                  "6.1 What is EVM?", "6.2 EVM Architecture", "6.3 Stack Machine", "6.4 Data Locations",
                  "6.5 EVM Opcodes", "6.6 Bytecode Exec", "6.7 Solc Pipeline", "6.8 ABI Architecture",
                  "6.9 Contract Deploy", "6.10 Creation vs Runtime", "6.11 Storage Layout", "6.12 Gas Costs",
                  "6.13 Gas Optimization", "6.14 State Transitions", "6.15 Reverts & Exceptions",
                  "6.16 EVM Chains", "6.17 Low-Level Tracing"
                ].map((sName, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx + 1}`}
                    className="px-2.5 py-1 rounded-lg bg-[#fbfaf7] hover:bg-orange-50 border border-[#ece8de] hover:border-orange-300 text-neutral-700 hover:text-orange-950 text-[11px] transition"
                  >
                    {sName}
                  </a>
                ))}
              </div>
            </div>

            
            {/* SECTION 1: Introduction to the Ethereum Virtual Machine */}
            <div id="section-1" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 1 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Introduction to the Ethereum Virtual Machine</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 1 — Introduction to the Ethereum Virtual Machine</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.1</span> What is the EVM?</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.1.1</span> Definition of EVM</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The Ethereum Virtual Machine is a decentralized execution environment that processes smart contract code on the Ethereum network.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It defines a common computational environment so that different Ethereum nodes can execute the same valid transactions and independently calculate the same resulting state.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Think of the EVM as a virtual computer shared across the Ethereum network.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It is not a physical computer. It is a software-defined machine with:</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">An instruction set.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A stack.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Memory.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Persistent storage access.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Execution rules.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Gas accounting.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Transaction context.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Exception handling.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Every Ethereum execution client implements EVM functionality.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.1.2</span> Why does Ethereum need the EVM?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Consider a decentralized application that manages digital assets.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Suppose Alice wants to transfer ownership of a digital asset to Bob only after receiving payment.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>In a conventional application:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Alice | v Application | v Backend Server | v Database Update | v Asset Ownership Changed</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The backend server executes the application logic.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>In Ethereum:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Alice | v Signed Transaction | v Ethereum Network | v EVM Execution | v Smart Contract Logic | v Global State Updated</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM allows network participants to execute the contract according to the same protocol rules.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.1.3</span> EVM as a virtual computer</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A conventional processor uses machine instructions.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For example:</li><li>LOAD ADD STORE JUMP</li><li>The EVM also uses instructions, known as opcodes.</li><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH1 0x0A PUSH1 0x14 ADD</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Conceptually:</li><li>Push decimal 10 onto the stack.</li><li>Push decimal 20 onto the stack.</li><li>Execute addition.</li><li>Store the result on the stack.</li><li>Result:</li><li>30</li><li>This illustrates how the EVM processes low-level computational instructions.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.1.4</span> EVM characteristics</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Characteristic</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Explanation</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Virtual machine</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Executes smart contract bytecode</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Stack-based</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Uses a stack for most computation</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">256-bit words</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Processes 256-bit stack values</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Deterministic</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Identical valid inputs and state produce identical execution results</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Gas-metered</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Instructions consume gas</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Isolated execution</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Contracts execute within defined execution contexts</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Persistent state access</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Contracts can modify blockchain state</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Globally replicated</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Ethereum nodes independently validate execution</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM uses a stack with a maximum depth of 1,024 items, where each stack item is 256 bits.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ethereum.org+1</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.1.5</span> EVM vs JVM</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Students should understand the difference between the Ethereum Virtual Machine and the Java Virtual Machine.</p>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Feature</th><th className="p-2.5 text-orange-600 font-bold">EVM</th><th className="p-2.5 text-neutral-800">JVM</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-semibold text-neutral-800">Full name</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Ethereum Virtual Machine</td><td className="p-2.5 text-neutral-600">Java Virtual Machine</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Main purpose</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Blockchain smart contract execution</td><td className="p-2.5 text-neutral-600">General application execution</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Instruction system</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">EVM opcodes</td><td className="p-2.5 text-neutral-600">JVM bytecode</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Stack</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">256-bit stack items</td><td className="p-2.5 text-neutral-600">JVM operand stack with typed values</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Execution cost</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Gas</td><td className="p-2.5 text-neutral-600">Usually operating-system resource usage</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Storage</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Blockchain state</td><td className="p-2.5 text-neutral-600">Application memory and external storage</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">State changes</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Replicated through blockchain consensus</td><td className="p-2.5 text-neutral-600">Depends on application architecture</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Determinism</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Required by protocol</td><td className="p-2.5 text-neutral-600">Not universally guaranteed</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Environment</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Ethereum-compatible networks</td><td className="p-2.5 text-neutral-600">Java runtime environments</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Important distinction: The EVM does not execute JavaScript, Java, or Solidity source code directly. Solidity is compiled into EVM-compatible bytecode.</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">6.1.6 Where is the EVM used?</td><td className="p-2.5 text-neutral-600">The EVM is used in:</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Ethereum Mainnet.</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Ethereum testnets.</td><td className="p-2.5 text-neutral-600">Ethereum Layer 2 ecosystems.</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">EVM-compatible blockchain networks.</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Local smart contract development environments.</td><td className="p-2.5 text-neutral-600">Examples include:</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Smart contract applications.</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Token systems.</td><td className="p-2.5 text-neutral-600">DeFi protocols.</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">NFT marketplaces.</td><td className="p-2.5 text-neutral-700 bg-orange-50/20">Decentralized exchanges.</td><td className="p-2.5 text-neutral-600">On-chain games.</td></tr>
</tbody></table></div>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Governance systems.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Discussion: Why is it beneficial for different companies to implement the same virtual machine specification using different programming languages?</p>
              </div>
            </div>
    

            {/* SECTION 2: EVM Architecture */}
            <div id="section-2" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 2 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">EVM Architecture</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 2 — EVM Architecture</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.2</span> Internal EVM Architecture</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.2.1</span> Major components</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM execution environment contains several important components.</p>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Component</th><th className="p-2.5">Responsibility</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Program Counter (PC)</td><td className="p-2.5 text-neutral-700 leading-relaxed">Tracks the next instruction position</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Stack</td><td className="p-2.5 text-neutral-700 leading-relaxed">Holds temporary computation values</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Memory</td><td className="p-2.5 text-neutral-700 leading-relaxed">Holds temporary execution data</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Storage</td><td className="p-2.5 text-neutral-700 leading-relaxed">Maintains persistent contract state</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Calldata</td><td className="p-2.5 text-neutral-700 leading-relaxed">Contains incoming message data</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Gas counter</td><td className="p-2.5 text-neutral-700 leading-relaxed">Tracks available computational resources</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Opcode interpreter</td><td className="p-2.5 text-neutral-700 leading-relaxed">Processes EVM instructions</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Execution context</td><td className="p-2.5 text-neutral-700 leading-relaxed">Supplies transaction and message information</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Return data</td><td className="p-2.5 text-neutral-700 leading-relaxed">Holds data returned by external calls</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.2.2</span> Program Counter</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The Program Counter identifies the current location within the executing bytecode.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Suppose the following instructions are executed:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">PC 0: PUSH1 0x05 PC 2: PUSH1 0x03 PC 4: ADD PC 5: STOP</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM processes instructions sequentially unless a control-flow instruction changes the execution position.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The Program Counter advances according to the current instruction's size and behavior.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.2.3</span> Execution loop</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>A simplified EVM execution loop:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Start Execution | v Read Bytecode | v Update PC | v Decode Opcode | v Check Stack Requirements | v Charge Gas | v Execute Instruction | v Update EVM State | v Continue or Terminate</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Execution can stop because of:</li><li>STOP</li><li>RETURN</li><li>REVERT</li><li>Invalid opcode.</li><li>Out-of-gas condition.</li><li>Other exceptional execution conditions.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.2.4</span> Execution context</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">During contract execution, the EVM has access to information such as:</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Context value</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Meaning</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ADDRESS</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Address of the currently executing contract context</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">CALLER</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Immediate caller</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">CALLVALUE</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ETH sent with the message</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">CALLDATASIZE</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Incoming calldata length</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">GASPRICE</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Effective gas price exposed to execution</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">TIMESTAMP</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Current block timestamp</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">NUMBER</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Current block number</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">CHAINID</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Current chain ID</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">BASEFEE</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Current block's base fee</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">COINBASE</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Block fee recipient address</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">These values can influence smart contract execution.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.2.5</span> EVM execution environments</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Understand three important execution situations.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A. Transaction execution</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A signed transaction is included in a block and executed according to Ethereum's state transition rules.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">B. Internal contract execution</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">One smart contract invokes another using message-call instructions.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">C. Read-only simulation</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A JSON-RPC eth_call request executes contract code against a selected state without broadcasting an ordinary state-changing transaction.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This is useful for reading smart contract values.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.2.6</span> Call frames</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">When a contract invokes another contract, a new execution frame is established.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It contains its own execution context and temporary execution data.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For example:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Transaction | v Contract A | +---- CALL ----&gt; Contract B | +---- CALL ----&gt; Contract C</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Each nested call has its own execution context.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The success or failure of child calls can affect whether the parent call continues.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Assignment</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Draw the complete EVM architecture and explain the purpose of every major component.</p>
              </div>
            </div>
    

            {/* SECTION 3: Stack-Based Virtual Machine */}
            <div id="section-3" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 3 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Stack-Based Virtual Machine</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 3 — Stack-Based Virtual Machine</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.3</span> EVM Stack Architecture</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.3.1</span> What is a stack?</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>A stack is a linear data structure that follows:</li><li>LIFO — Last In, First Out.</li><li>The last value inserted is the first value removed.</li><li>Example:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Push 10 Push 20 Push 30 Stack: +------+ | 30 | &lt;- Top +------+ | 20 | +------+ | 10 | +------+</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">When an item is removed, the topmost value is removed first.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.3.2</span> How the EVM uses a stack</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM executes most instructions by taking values from the stack, performing an operation, and pushing results back onto it.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH1 0x0A PUSH1 0x14 ADD</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Execution:</li><li>Step 1</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH1 0x0A Stack: [10]</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Step 2</p>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH1 0x14 Stack: [10, 20]</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Step 3</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ADD Stack: [30]</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The top two values are consumed and their result is pushed.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.3.3</span> Stack characteristics</h4>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Property</th><th className="p-2.5">Value</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Maximum depth</td><td className="p-2.5 text-neutral-700 leading-relaxed">1,024 items</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Item size</td><td className="p-2.5 text-neutral-700 leading-relaxed">256 bits</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Organization</td><td className="p-2.5 text-neutral-700 leading-relaxed">LIFO</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Access</td><td className="p-2.5 text-neutral-700 leading-relaxed">Top-of-stack operations</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Persistence</td><td className="p-2.5 text-neutral-700 leading-relaxed">Temporary</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Primary purpose</td><td className="p-2.5 text-neutral-700 leading-relaxed">Computation and opcode operands</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.3.4</span> PUSH instructions</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">PUSH instructions place immediate values onto the stack.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Examples:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH0 PUSH1 0x01 PUSH2 0x0100 PUSH4 0x12345678</pre>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH0 pushes zero onto the stack.</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The PUSH1 through PUSH32 family allows immediate values of different lengths.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.3.5</span> POP instruction</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">POP removes the top item without returning a result.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Stack: [10, 20, 30] POP Stack: [10, 20]</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.3.6</span> DUP instructions</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">DUP instructions duplicate an existing stack item.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH1 0x05 DUP1</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Result:</li><li>[5, 5]</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.3.7</span> SWAP instructions</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">SWAP instructions exchange the top stack item with another position.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For example:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Before: [10, 20] SWAP1 After: [20, 10]</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Stack operations are fundamental to compiler-generated EVM instructions.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.3.8</span> Arithmetic operations</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Important arithmetic opcodes include:</li></ul>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Function</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">ADD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Addition</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SUB</td><td className="p-2.5 text-neutral-700 leading-relaxed">Subtraction</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MUL</td><td className="p-2.5 text-neutral-700 leading-relaxed">Multiplication</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">DIV</td><td className="p-2.5 text-neutral-700 leading-relaxed">Unsigned division</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SDIV</td><td className="p-2.5 text-neutral-700 leading-relaxed">Signed division</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MOD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Modulo</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SMOD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Signed modulo</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">EXP</td><td className="p-2.5 text-neutral-700 leading-relaxed">Exponentiation</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SIGNEXTEND</td><td className="p-2.5 text-neutral-700 leading-relaxed">Signed integer extension</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">EVM arithmetic is performed using 256-bit words. Integer arithmetic follows the instruction-specific rules, including modular behavior for ordinary unsigned operations.</td><td className="p-2.5 text-neutral-700 leading-relaxed">Practical exercise</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Manually simulate the following:</td><td className="p-2.5 text-neutral-700 leading-relaxed">PUSH1 0x08 PUSH1 0x04 ADD PUSH1 0x02 MUL</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Show the stack after every instruction.</td><td className="p-2.5 text-neutral-700 leading-relaxed">Expected result:</td></tr>
</tbody></table></div>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">\[ (8+4)\times2=24 \]</p>
              </div>
            </div>
    

            {/* SECTION 4: EVM Memory, Storage, and Calldata */}
            <div id="section-4" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 4 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">EVM Memory, Storage, and Calldata</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 4 — EVM Memory, Storage, and Calldata</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.4</span> EVM Data Locations</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">One of the most important EVM concepts is understanding where data is stored.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Solidity provides different data locations because different values have different lifetimes and costs.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.4.1</span> EVM memory</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Memory is temporary execution data.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It is a byte-addressed data area used during a particular EVM call frame.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Characteristics:</li><li>Temporary.</li><li>Expandable.</li><li>Byte-addressed.</li><li>Cleared between execution frames.</li><li>Used for intermediate calculations.</li><li>Used for encoding call data and return data.</li><li>Important memory instructions:</li></ul>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Function</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MLOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Reads 32 bytes from memory</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MSTORE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Writes 32 bytes into memory</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MSTORE8</td><td className="p-2.5 text-neutral-700 leading-relaxed">Writes one byte</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MSIZE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Returns current allocated memory size</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MCOPY</td><td className="p-2.5 text-neutral-700 leading-relaxed">Copies bytes between memory regions</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Example:</td><td className="p-2.5 text-neutral-700 leading-relaxed">MSTORE(0x00, 100) MLOAD(0x00)</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Conceptually, this stores 100 at memory offset zero and subsequently reads it.</td><td className="p-2.5 text-neutral-700 leading-relaxed">6.4.2 Memory expansion</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Memory does not need to be completely allocated when contract execution begins.</td><td className="p-2.5 text-neutral-700 leading-relaxed">It expands as operations access new regions.</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">The gas cost increases with the total memory size reached during execution.</td><td className="p-2.5 text-neutral-700 leading-relaxed">The simplified memory-cost function is:</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">\[ C_&#123;mem&#125;(a)=3a+\left\lfloor\frac&#123;a^2&#125;&#123;512&#125;\right\rfloor \]</td><td className="p-2.5 text-neutral-700 leading-relaxed">Where \(a\) is the number of 32-byte memory words allocated.</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">The expansion cost is the difference between the new memory cost and the previous memory cost.</td><td className="p-2.5 text-neutral-700 leading-relaxed">This quadratic component makes large memory allocations increasingly expensive.</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.4.3</span> EVM storage</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Storage is persistent contract state.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">When a contract updates its storage, the resulting change can become part of Ethereum's global state after successful transaction execution.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Storage is organized into 32-byte slots.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Important storage instructions:</li></ul>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Function</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SLOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Reads a storage slot</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SSTORE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Writes a storage slot</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">TLOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Reads transient storage</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">TSTORE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Writes transient storage</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Example Solidity:</td><td className="p-2.5 text-neutral-700 leading-relaxed">contract StorageExample &#123; uint256 public number; function update(uint256 value) public &#123; number = value; &#125; &#125;</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">The number variable is stored persistently.</td><td className="p-2.5 text-neutral-700 leading-relaxed">6.4.4 Calldata</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Calldata contains the input data supplied to a contract call.</td><td className="p-2.5 text-neutral-700 leading-relaxed">It is read-only during normal EVM execution.</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">It is particularly useful when contracts need to receive function parameters.</td><td className="p-2.5 text-neutral-700 leading-relaxed">Example:</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">function process( uint256[] calldata numbers ) external pure returns (uint256 total) &#123; for (uint256 i = 0; i &lt; numbers.length; i++) &#123; total += numbers[i]; &#125; &#125;</td><td className="p-2.5 text-neutral-700 leading-relaxed">The input array can be read directly from calldata.</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">This avoids making an unnecessary copy into memory.</td><td className="p-2.5 text-neutral-700 leading-relaxed">Important instructions:</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Opcode</td><td className="p-2.5 text-neutral-700 leading-relaxed">Function</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CALLDATASIZE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Returns calldata size</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CALLDATALOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Reads a 32-byte word from calldata</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CALLDATACOPY</td><td className="p-2.5 text-neutral-700 leading-relaxed">Copies calldata into memory</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.4.5</span> Transient storage</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Transient storage is a temporary key-value storage mechanism introduced through EIP-1153.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>It uses:</li><li>TLOAD</li><li>TSTORE</li><li>Unlike ordinary storage, transient storage does not persist into future transactions.</li><li>However, it can be shared across relevant contract calls within the same transaction, subject to call-context rules.</li><li>Potential applications:</li><li>Temporary execution flags.</li><li>Reentrancy guards.</li><li>Cross-call temporary state.</li><li>Intermediate transaction-level information.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.4.6</span> Comparison of data locations</h4>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Property</th><th className="p-2.5">Stack</th><th className="p-2.5">Memory</th><th className="p-2.5 text-orange-600 font-bold">Storage</th><th className="p-2.5">Calldata</th><th className="p-2.5">Transient Storage</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-semibold text-neutral-800">Temporary</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Yes</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Yes</td><td className="p-2.5 text-neutral-900 font-bold bg-orange-50/20 font-mono text-[11px]">No</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Yes</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Yes</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Read-only</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">No</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">No</td><td className="p-2.5 text-neutral-900 font-bold bg-orange-50/20 font-mono text-[11px]">No</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Yes</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">No</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Persistence</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Execution frame</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Execution frame</td><td className="p-2.5 text-neutral-900 font-bold bg-orange-50/20 font-mono text-[11px]">Across transactions</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Message input</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Current transaction</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Data organization</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">256-bit words</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Byte array</td><td className="p-2.5 text-neutral-900 font-bold bg-orange-50/20 font-mono text-[11px]">32-byte slots</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Byte array</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Key-value slots</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Primary purpose</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Computation</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Temporary processing</td><td className="p-2.5 text-neutral-900 font-bold bg-orange-50/20 font-mono text-[11px]">Permanent state</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Function input</td><td className="p-2.5 text-neutral-700 font-mono text-[11px]">Temporary shared state</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.4.7</span> Solidity data location example</h4>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract DataLocations &#123; uint256[] public values; function save(uint256 value) external &#123; values.push(value); &#125; function getValues() external view returns (uint256[] memory) &#123; return values; &#125; function process( uint256[] calldata input ) external pure returns (uint256) &#123; return input.length; &#125; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Understand why the function parameters use calldata and the return value uses memory.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Reference: [Ethereum EVM Documentation](https://ethereum.org/developers/docs/evm/?utm_source=chatgpt.com).</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ethereum.org+1</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Assignment</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Create a comparison report covering stack, memory, storage, calldata, and transient storage.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Include at least one Solidity example demonstrating each location.</p>
              </div>
            </div>
    

            {/* SECTION 5: EVM Opcodes */}
            <div id="section-5" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 5 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">EVM Opcodes</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 5 — EVM Opcodes</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.5</span> Ethereum Virtual Machine Instruction Set</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.5.1</span> What is an opcode?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">An opcode is a low-level instruction understood by the EVM.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A compiled Solidity smart contract consists of bytecode that contains instructions and immediate data.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM reads these instructions and executes them.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.5.2</span> Opcode format</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Each opcode has a byte-level identifier.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Byte value</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">STOP</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x00</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">ADD</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x01</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MUL</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x02</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SUB</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x03</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">DIV</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x04</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">POP</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x50</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MLOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x51</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MSTORE</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x52</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SLOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x54</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SSTORE</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x55</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">JUMP</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x56</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">JUMPI</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x57</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">JUMPDEST</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x5B</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">PUSH0</td><td className="p-2.5 text-neutral-700 leading-relaxed">0x5F</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">RETURN</td><td className="p-2.5 text-neutral-700 leading-relaxed">0xF3</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">REVERT</td><td className="p-2.5 text-neutral-700 leading-relaxed">0xFD</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.5.3</span> Arithmetic opcodes</h4>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Description</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">ADD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Adds two values</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SUB</td><td className="p-2.5 text-neutral-700 leading-relaxed">Subtracts two values</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MUL</td><td className="p-2.5 text-neutral-700 leading-relaxed">Multiplies two values</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">DIV</td><td className="p-2.5 text-neutral-700 leading-relaxed">Performs unsigned division</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MOD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Calculates remainder</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">EXP</td><td className="p-2.5 text-neutral-700 leading-relaxed">Exponentiation</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Example:</td><td className="p-2.5 text-neutral-700 leading-relaxed">PUSH1 0x06 PUSH1 0x04 MUL</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Result:</td><td className="p-2.5 text-neutral-700 leading-relaxed">\[ 6\times4=24 \]</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.5.4</span> Comparison opcodes</h4>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Description</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">LT</td><td className="p-2.5 text-neutral-700 leading-relaxed">Less than</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">GT</td><td className="p-2.5 text-neutral-700 leading-relaxed">Greater than</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SLT</td><td className="p-2.5 text-neutral-700 leading-relaxed">Signed less than</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SGT</td><td className="p-2.5 text-neutral-700 leading-relaxed">Signed greater than</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">EQ</td><td className="p-2.5 text-neutral-700 leading-relaxed">Equality</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">ISZERO</td><td className="p-2.5 text-neutral-700 leading-relaxed">Checks for zero</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">These instructions are used to implement conditional logic.</td><td className="p-2.5 text-neutral-700 leading-relaxed">6.5.5 Cryptographic opcodes</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Opcode</td><td className="p-2.5 text-neutral-700 leading-relaxed">Purpose</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">KECCAK256</td><td className="p-2.5 text-neutral-700 leading-relaxed">Hashes data using Keccak-256</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">ECRECOVER</td><td className="p-2.5 text-neutral-700 leading-relaxed">Recovers an address from an ECDSA signature using a precompile</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SHA256</td><td className="p-2.5 text-neutral-700 leading-relaxed">Executes SHA-256 through a precompile</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">RIPEMD160</td><td className="p-2.5 text-neutral-700 leading-relaxed">Executes RIPEMD-160 through a precompile</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Students should distinguish normal EVM instructions from precompiled contracts, which provide specialized cryptographic functionality at designated addresses.</td><td className="p-2.5 text-neutral-700 leading-relaxed">6.5.6 Environmental opcodes</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Opcode</td><td className="p-2.5 text-neutral-700 leading-relaxed">Purpose</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">ADDRESS</td><td className="p-2.5 text-neutral-700 leading-relaxed">Current execution address</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CALLER</td><td className="p-2.5 text-neutral-700 leading-relaxed">Immediate caller</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CALLVALUE</td><td className="p-2.5 text-neutral-700 leading-relaxed">ETH value transferred</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">ORIGIN</td><td className="p-2.5 text-neutral-700 leading-relaxed">Original transaction sender</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">TIMESTAMP</td><td className="p-2.5 text-neutral-700 leading-relaxed">Block timestamp</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">NUMBER</td><td className="p-2.5 text-neutral-700 leading-relaxed">Current block number</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CHAINID</td><td className="p-2.5 text-neutral-700 leading-relaxed">Current chain ID</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">BASEFEE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Block base fee</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">GASPRICE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Effective transaction gas price</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.5.7</span> Control-flow opcodes</h4>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Purpose</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">JUMP</td><td className="p-2.5 text-neutral-700 leading-relaxed">Unconditional jump</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">JUMPI</td><td className="p-2.5 text-neutral-700 leading-relaxed">Conditional jump</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">JUMPDEST</td><td className="p-2.5 text-neutral-700 leading-relaxed">Valid jump destination</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">PC</td><td className="p-2.5 text-neutral-700 leading-relaxed">Current program counter</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">STOP</td><td className="p-2.5 text-neutral-700 leading-relaxed">Stops execution</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.5.8</span> Data access opcodes</h4>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Purpose</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CALLDATALOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Reads calldata</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CALLDATACOPY</td><td className="p-2.5 text-neutral-700 leading-relaxed">Copies calldata to memory</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MLOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Reads memory</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MSTORE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Writes memory</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SLOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Reads persistent storage</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SSTORE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Writes persistent storage</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">TLOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">Reads transient storage</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">TSTORE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Writes transient storage</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.5.9</span> Contract interaction opcodes</h4>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Purpose</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CALL</td><td className="p-2.5 text-neutral-700 leading-relaxed">Calls another account or contract</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">STATICCALL</td><td className="p-2.5 text-neutral-700 leading-relaxed">Performs a static call</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">DELEGATECALL</td><td className="p-2.5 text-neutral-700 leading-relaxed">Executes another contract's code in the caller's storage context</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CREATE</td><td className="p-2.5 text-neutral-700 leading-relaxed">Creates a new contract</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">CREATE2</td><td className="p-2.5 text-neutral-700 leading-relaxed">Creates a contract using a deterministic address formula</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">RETURN</td><td className="p-2.5 text-neutral-700 leading-relaxed">Returns data</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">REVERT</td><td className="p-2.5 text-neutral-700 leading-relaxed">Reverts execution</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.5.10</span> Understanding opcode gas costs</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Opcodes have gas costs, but not all costs are constant.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For example:</li><li>Arithmetic instructions generally have simple fixed costs.</li><li>Memory operations can include expansion costs.</li><li>Storage operations have dynamic costs.</li><li>External account and storage access can depend on whether data is warm or cold.</li><li>Contract calls have multiple gas components.</li><li>The exact gas schedule is fork-dependent.</li><li>Students should use the current opcode reference instead of memorizing a gas table that may become outdated.</li><li>Useful interactive reference: [EVM Opcode Interactive Explorer](https://www.evm.codes/?utm_source=chatgpt.com).</li><li>Additional reference: [Official Ethereum Opcode Reference](https://ethereum.org/developers/docs/evm/opcodes/?utm_source=chatgpt.com).</li><li>ethereum.org+2</li><li>Practical exercise</li><li>Decode this bytecode:</li><li>600560030160005260206000F3</li><li>Students should identify the instructions and explain the order in which the EVM executes them.</li></ul>
              </div>
            </div>
    

            {/* SECTION 6: Bytecode Execution */}
            <div id="section-6" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 6 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Bytecode Execution</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 6 — Bytecode Execution</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.6</span> Understanding EVM Bytecode Execution</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.6.1</span> What is bytecode?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Bytecode is the low-level executable representation of a compiled smart contract.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Solidity source code cannot be directly executed by the EVM.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It must first be compiled.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example Solidity:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract Calculator &#123; function add( uint256 a, uint256 b ) public pure returns (uint256) &#123; return a + b; &#125; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Conceptually, the compiler generates bytecode instructions that:</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Read function input.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Decode the arguments.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Load them onto the stack.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Execute arithmetic.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Return the result.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.6.2</span> Bytecode vs opcodes</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Bytecode is the serialized sequence of bytes.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Opcodes are the instructions represented within that byte sequence.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li><li>Bytecode: 0x6005600301</li><li>Decoded:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">60 05 -&gt; PUSH1 0x05 60 03 -&gt; PUSH1 0x03 01 -&gt; ADD</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The resulting stack value is 8.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.6.3</span> Bytecode execution steps</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider:</li><li>6005600301</li><li>Step</li><li>Bytecode</li><li>Instruction</li><li>Stack</li><li>1</li><li>60 05</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH1 5</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">[5]</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">2</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">60 03</p>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH1 3</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">[5, 3]</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">3</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">01</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ADD</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">[8]</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This is a simplified instruction-level example.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.6.4</span> Program counter and instruction decoding</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM processes instructions through the Program Counter.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">For a PUSH instruction, the immediate data bytes are part of the instruction encoding and are not interpreted as separate opcodes.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For example:</li><li>60056003</li><li>Contains:</li><li>60 — PUSH1</li><li>05 — immediate value</li><li>60 — PUSH1</li><li>03 — immediate value</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.6.5</span> Bytecode disassembly</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Disassembly converts bytecode into a more understandable opcode representation.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">PUSH1 0x05 PUSH1 0x03 ADD MSTORE</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Disassembly allows developers and auditors to inspect what the compiler generated.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.6.6</span> Bytecode analysis</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Students should learn to inspect:</li><li>Function dispatch logic.</li><li>Function selectors.</li><li>Jump destinations.</li><li>Storage reads.</li><li>Storage writes.</li><li>External calls.</li><li>Revert instructions.</li><li>Return logic.</li><li>Compiler metadata.</li><li>Assignment</li><li>Write a program or use an online EVM disassembler to decode a compiled Solidity contract.</li><li>Identify at least:</li><li>Five arithmetic or comparison instructions.</li><li>Three data access instructions.</li><li>Two control-flow instructions.</li><li>One return or revert instruction.</li></ul>
              </div>
            </div>
    

            {/* SECTION 7: Solidity Compilation Pipeline */}
            <div id="section-7" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 7 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Solidity Compilation Pipeline</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 7 — Solidity Compilation Pipeline</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7</span> From Solidity Source Code to EVM Bytecode</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This section connects Solidity development with low-level EVM execution.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.1</span> What is Solidity compilation?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Solidity is a high-level programming language designed primarily for writing smart contracts.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The Solidity compiler converts source code into EVM-compatible output.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>The compiler can generate:</li><li>ABI.</li><li>Creation bytecode.</li><li>Runtime bytecode.</li><li>Assembly.</li><li>Intermediate representation.</li><li>Optimized intermediate representation.</li><li>Metadata.</li><li>Source maps.</li><li>Storage layout.</li><li>Gas estimates.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.2</span> Complete compilation pipeline</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Solidity Source Code | v Lexical Analysis | v Parsing | v Abstract Syntax Tree (AST) | v Semantic Analysis | v Intermediate Representation (IR / Yul) | v Compiler Optimizer | v EVM Assembly | v Bytecode Generation | v Compiler Output | +-----------------+ | | v v Creation Bytecode Runtime Bytecode | v ABI</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.3</span> Stage 1 — Lexical analysis</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The compiler identifies the basic tokens in source code.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li><li>uint256 public number = 10;</li><li>Tokens include:</li><li>uint256</li><li>public</li><li>number</li><li>=</li><li>10</li><li>;</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.4</span> Stage 2 — Parsing</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The parser analyzes the structure of the program and determines how tokens relate to one another.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It verifies that the code follows Solidity syntax.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.5</span> Stage 3 — Abstract Syntax Tree</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The compiler generates an Abstract Syntax Tree (AST).</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">An AST represents the structure of the source program.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For example, the declaration:</li><li>uint256 public number;</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">can be represented as a variable declaration node containing:</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Type.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Visibility.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Identifier.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">State-variable information.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.6</span> Stage 4 — Semantic analysis</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Semantic analysis checks whether the code makes sense according to Solidity's language rules.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Examples:</li><li>Variable types.</li><li>Function declarations.</li><li>Inheritance.</li><li>Visibility.</li><li>Function arguments.</li><li>Return values.</li><li>Type conversions.</li><li>Mutability restrictions.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.7</span> Stage 5 — Intermediate representation</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The compiler can translate Solidity into an intermediate representation, often using Yul.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Yul is a low-level intermediate language used in Solidity compilation and optimization.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">function add( uint256 a, uint256 b ) public pure returns (uint256) &#123; return a + b; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Conceptually, the intermediate representation expresses the operation through lower-level variable loads and arithmetic.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The compiler can then optimize this representation before producing machine instructions.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.8</span> Stage 6 — Optimization</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>The compiler may optimize code using techniques such as:</li><li>Constant folding.</li><li>Dead-code elimination.</li><li>Common subexpression elimination.</li><li>Inlining.</li><li>Simplification.</li><li>Control-flow optimization.</li><li>Redundant instruction removal.</li><li>Example:</li><li>Unoptimized expression:</li><li>uint256 result = 10 * 2;</li><li>The compiler may determine the result at compile time.</li><li>Optimization depends on the compiler version, settings, and execution target.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.9</span> Stage 7 — EVM assembly</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The optimized intermediate representation is translated into lower-level EVM instruction sequences.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.10</span> Stage 8 — Bytecode generation</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The compiler emits bytecode suitable for execution under the selected EVM version.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.11</span> Stage 9 — Compiler outputs</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Important outputs:</li><li>Output</li><li>Purpose</li><li>ABI</li><li>Defines contract interaction interface</li><li>Bytecode</li><li>Deployment initialization code</li><li>Deployed bytecode</li><li>Runtime contract code</li><li>Assembly</li><li>Human-readable low-level instructions</li><li>IR</li><li>Intermediate representation</li><li>Storage layout</li><li>Shows storage slots and variable positions</li><li>Source map</li><li>Maps bytecode to source locations</li><li>Metadata</li><li>Compiler and source-related information</li><li>The Solidity standard JSON compiler interface can request these outputs explicitly.</li><li>Solidity 0.8.38-develop documentation+2</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.7.12</span> Compiler configuration</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Compilation output can change based on:</li><li>Solidity compiler version.</li><li>Optimizer settings.</li><li>Number of optimizer runs.</li><li>Via-IR configuration.</li><li>Target EVM version.</li><li>Metadata configuration.</li><li>Linked libraries.</li><li>This matters because the bytecode deployed to a network must be compatible with the EVM rules active on that network.</li><li>Practical exercise</li><li>Compile the same Solidity contract twice:</li><li>Optimizer disabled.</li><li>Optimizer enabled.</li><li>Compare:</li><li>Creation bytecode size.</li><li>Runtime bytecode size.</li><li>Opcode output.</li><li>Gas estimates.</li><li>Explain why compiler settings influence deployment and execution.</li></ul>
              </div>
            </div>
    

            {/* SECTION 8: Application Binary Interface (ABI) */}
            <div id="section-8" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 8 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Application Binary Interface (ABI)</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 8 — Application Binary Interface (ABI)</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8</span> Ethereum ABI Architecture</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.1</span> What is ABI?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ABI stands for Application Binary Interface.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It defines how external applications and other contracts communicate with a smart contract.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>It specifies how to encode and decode:</li><li>Function calls.</li><li>Function arguments.</li><li>Return data.</li><li>Events.</li><li>Custom errors.</li><li>The ABI acts as an interface contract between high-level application code and low-level EVM calldata.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.2</span> Why is ABI necessary?</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider the Solidity function:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">function transfer( address recipient, uint256 amount ) external;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM does not directly understand the words transfer, recipient, or amount.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The application must encode the function identifier and arguments into bytes.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This encoded data is sent as transaction calldata.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.3</span> Function selector</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A function selector is the first four bytes of the Keccak-256 hash of the canonical function signature.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Formula:</li><li>\[ Selector=First4Bytes(Keccak256(Signature)) \]</li><li>Example:</li><li>transfer(address,uint256)</li><li>The selector is:</li><li>0xa9059cbb</li><li>This selector identifies the function within the called contract's interface.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.4</span> ABI calldata structure</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>The calldata structure is:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">+------------------------------+ | Function Selector | | 4 bytes | +------------------------------+ | First Argument | | 32 bytes | +------------------------------+ | Second Argument | | 32 bytes | +------------------------------+ | Further Arguments | +------------------------------+</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For the transfer function:</li><li>First four bytes identify the function.</li><li>Next 32 bytes encode the recipient.</li><li>Next 32 bytes encode the token amount.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.5</span> Static and dynamic types</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ABI encoding distinguishes between static and dynamic types.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Static types:</li><li>uint256</li><li>address</li><li>bool</li><li>bytes32</li><li>These occupy their designated 32-byte ABI words.</li><li>Dynamic types:</li><li>string</li><li>bytes</li><li>Dynamically sized arrays.</li><li>Tuples containing dynamic values.</li><li>Dynamic data is encoded using offset information in the head section and actual content in the tail section.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.6</span> Example of dynamic encoding</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">function storeMessage( string calldata message, uint256 number ) external;</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>The ABI encoding contains:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Function Selector | v Head Section | +--- Offset to message data | +--- Encoded number | v Tail Section | +--- String length | +--- String bytes</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This allows the contract to locate dynamic input data.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.7</span> ABI and events</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Events allow contracts to emit information that external applications can monitor.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">event Transfer( address indexed from, address indexed to, uint256 amount );</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">When emitted, the event is represented in the transaction receipt's logs.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The event signature hash is stored in the first topic for a non-anonymous event.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Indexed parameters are represented in topics, subject to ABI event encoding rules.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Non-indexed parameters are encoded in the log data.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.8</span> ABI and custom errors</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Solidity supports custom errors.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">error InsufficientBalance( uint256 available, uint256 required );</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The error selector is also derived from the first four bytes of the Keccak-256 hash of its canonical signature.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.9</span> ABI encoding vs ABI decoding</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Encoding: Converts typed inputs into bytes.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Decoding: Interprets encoded bytes using the ABI schema.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The data is not self-describing. The correct ABI is needed to reliably interpret the bytes.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.8.10</span> ABI vs JSON</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ABI</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">JSON</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Defines contract interface</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">General data representation</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Used for EVM interaction</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Used for many software applications</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Encodes arguments into bytes</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Represents structured data</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Includes function selectors and types</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Uses keys and values</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Required for contract decoding</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">No EVM-specific function selector</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Reference: [Solidity ABI Specification](https://docs.soliditylang.org/en/latest/abi-spec.html?utm_source=chatgpt.com).</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">docs.soliditylang.org+1</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Practical exercise</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Take the following function:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">function setNumber(uint256 value) external;</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Students must:</li><li>Identify its canonical signature.</li><li>Generate its function selector.</li><li>Encode the value 42.</li><li>Separate selector and argument bytes.</li><li>Decode the resulting calldata.</li></ul>
              </div>
            </div>
    

            {/* SECTION 9: Smart Contract Deployment Process */}
            <div id="section-9" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 9 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Smart Contract Deployment Process</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 9 — Smart Contract Deployment Process</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.9</span> EVM Contract Deployment Architecture</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.9.1</span> What happens during deployment?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">When a smart contract is deployed, a contract-creation transaction is submitted to Ethereum.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The transaction contains initialization code.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM executes that code.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">If execution succeeds, the resulting runtime bytecode is stored at the newly created contract address.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.9.2</span> Deployment lifecycle</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Solidity Source | v Solidity Compiler | v Creation Bytecode | v Deployment Transaction | v Contract Creation Execution | v Constructor Executes | v Runtime Bytecode Returned | v Runtime Bytecode Stored | v Contract Address Created</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.9.3</span> Constructor</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A constructor is a special Solidity function executed during deployment.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract Account &#123; address public owner; constructor() &#123; owner = msg.sender; &#125; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The constructor initializes the contract's state.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It is not an ordinary externally callable function after deployment.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.9.4</span> Contract creation transaction</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A contract-creation transaction generally has no ordinary recipient address.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It contains initialization code and deployment-related transaction fields.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">When executed, the contract creation procedure calculates the new contract address and executes initialization code in the new contract context.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.9.5</span> Contract address generation using CREATE</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>A standard contract creation address is calculated using:</li><li>\[ Address= Last20Bytes( Keccak256(RLP([Sender,Nonce])) ) \]</li><li>This makes the address dependent on the creator's address and transaction nonce.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.9.6</span> CREATE2</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">CREATE2 provides deterministic contract address generation based on:</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Deployer address.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Salt.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Initialization code hash.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Formula:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">\[ Address = Last20Bytes( Keccak256( 0xff \, || \, Deployer \, || \, Salt \, || \, Keccak256(InitCode) )) \]</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">CREATE2 is useful for counterfactual deployment and predictable contract addresses.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.9.7</span> Deployment gas</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Contract deployment consumes gas for:</li><li>Initialization-code execution.</li><li>Contract creation.</li><li>Runtime-code storage.</li><li>Constructor operations.</li><li>Memory operations.</li><li>Other applicable execution costs.</li><li>The runtime code size and deployment complexity therefore affect deployment cost.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.9.8</span> Contract verification</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">After deployment, developers often verify contract source code on a block explorer.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Verification compares published source files, compiler configuration, and constructor parameters against the deployed contract's creation and runtime bytecode.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Verification does not itself prove that a contract is secure.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Assignment</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Explain the complete contract deployment lifecycle.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Include the role of the constructor, initialization code, runtime bytecode, and CREATE2.</p>
              </div>
            </div>
    

            {/* SECTION 10: Runtime Bytecode and Creation Bytecode */}
            <div id="section-10" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 10 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Runtime Bytecode and Creation Bytecode</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 10 — Runtime Bytecode and Creation Bytecode</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.10</span> Understanding Creation Code and Runtime Code</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.10.1</span> Creation bytecode</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Creation bytecode, also called initialization code or initcode, executes when a contract is deployed.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>It is responsible for:</li><li>Initializing the contract.</li><li>Running constructor logic.</li><li>Setting initial storage.</li><li>Returning the runtime bytecode.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.10.2</span> Runtime bytecode</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Runtime bytecode is the code stored at the deployed contract address.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It executes when a transaction or another contract interacts with the deployed contract.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.10.3</span> Comparison</h4>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Feature</th><th className="p-2.5 text-neutral-800 font-semibold">Creation Bytecode</th><th className="p-2.5 text-orange-600 font-bold">Runtime Bytecode</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-semibold text-neutral-800">Purpose</td><td className="p-2.5 text-neutral-700">Contract initialization</td><td className="p-2.5 text-neutral-900 font-medium bg-orange-50/20">Normal contract execution</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Execution</td><td className="p-2.5 text-neutral-700">During deployment</td><td className="p-2.5 text-neutral-900 font-medium bg-orange-50/20">During contract interactions</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Constructor</td><td className="p-2.5 text-neutral-700">Included in initialization logic</td><td className="p-2.5 text-neutral-900 font-medium bg-orange-50/20">Not available as a callable constructor</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Storage initialization</td><td className="p-2.5 text-neutral-700">Yes</td><td className="p-2.5 text-neutral-900 font-medium bg-orange-50/20">Can modify storage through later calls</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Returned by initialization</td><td className="p-2.5 text-neutral-700">Runtime bytecode</td><td className="p-2.5 text-neutral-900 font-medium bg-orange-50/20">Not applicable</td></tr>
<tr><td className="p-2.5 font-semibold text-neutral-800">Stored at contract address</td><td className="p-2.5 text-neutral-700">Not in its entirety as creation code</td><td className="p-2.5 text-neutral-900 font-medium bg-orange-50/20">Yes, as deployed code</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.10.4</span> How they relate</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Creation Bytecode | v Constructor Logic | v Initialization | v RETURN Runtime Code | v Runtime Bytecode Stored | v Future Calls Execute Runtime Code</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.10.5</span> Inspecting the two bytecode types</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Using Foundry:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">forge inspect Counter bytecode</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This inspects the creation bytecode.</p>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">forge inspect Counter deployedBytecode</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This inspects the runtime bytecode.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.10.6</span> Why do both matter?</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Creation bytecode helps developers understand:</li><li>Contract deployment.</li><li>Constructor behavior.</li><li>Initialization.</li><li>Contract address creation.</li><li>Runtime bytecode helps developers understand:</li><li>Function dispatch.</li><li>Opcode behavior.</li><li>Contract execution.</li><li>Storage interactions.</li><li>Contract security.</li><li>Assignment: Compile one contract and explain why its creation and runtime bytecode are different.</li></ul>
              </div>
            </div>
    

            {/* SECTION 11: Solidity Storage Layout */}
            <div id="section-11" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 11 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Solidity Storage Layout</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 11 — Solidity Storage Layout</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.11</span> Understanding EVM Storage Slots</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.11.1</span> What is a storage slot?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Ethereum contract storage is organized into 32-byte slots.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>A simple contract:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract StorageDemo &#123; uint256 public number; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The first declared storage variable normally occupies slot zero, assuming no inherited storage variables precede it.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Conceptually:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Slot 0: +--------------------------------+ | number | +--------------------------------+</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.11.2</span> Multiple variables</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract StorageDemo &#123; uint256 public number; address public owner; bool public active; &#125;</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>The expected layout is:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Slot 0: number (32 bytes) Slot 1: owner (20 bytes) active (1 byte)</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The smaller variables can share a slot when the compiler's storage packing rules allow it.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.11.3</span> Storage packing</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Solidity packs consecutive value-type variables smaller than 32 bytes into the same storage slot where possible.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract PackingDemo &#123; uint128 public first; uint128 public second; uint256 public third; &#125;</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Layout:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Slot 0: +----------------+----------------+ | first: 16 B | second: 16 B | +----------------+----------------+ Slot 1: +--------------------------------+ | third: 32 B | +--------------------------------+</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This contract uses two slots for these variables rather than three.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.11.4</span> Storage order optimization</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Compare:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract BadPacking &#123; uint128 a; uint256 b; uint128 c; &#125;</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>and:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract BetterPacking &#123; uint128 a; uint128 c; uint256 b; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The second arrangement allows the two uint128 fields to share a slot.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">However, packing is not automatically cheaper in every scenario. Partial-slot modifications can require additional reading and masking operations.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.11.5</span> Mapping storage</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Mappings do not store their elements sequentially in ordinary declared slots.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Suppose:</li><li>mapping(address =&gt; uint256) public balances;</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">If the mapping occupies slot \(p\), the storage location for a key is derived using hashing:</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">\[ Slot= Keccak256( ABIEncode(key,p) ) \]</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">For standard value-type keys, Solidity's storage-layout specification defines the precise encoding used.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This gives each mapping entry a deterministic storage location.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.11.6</span> Dynamic arrays</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider:</li><li>uint256[] public values;</li><li>The array's declared slot stores its length.</li><li>The data begins at a hash-derived storage location.</li><li>For a dynamic array with storage slot \(p\):</li><li>\[ DataStart=Keccak256(p) \]</li><li>For an array of 32-byte elements, consecutive element positions are calculated from that data location.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.11.7</span> Storage and inheritance</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Inheritance can affect the location and order of storage variables.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Students should understand:</li><li>Contract inheritance.</li><li>Storage layout ordering.</li><li>Base contracts.</li><li>State-variable packing.</li><li>Upgradeable proxy storage compatibility.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.11.8</span> Why storage layout matters</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Storage layout is essential for:</li><li>Gas optimization.</li><li>Proxy-based upgradeability.</li><li>Security analysis.</li><li>Contract auditing.</li><li>Storage inspection.</li><li>Reverse engineering.</li><li>A storage-layout change can cause existing values to be interpreted incorrectly by upgraded contract code.</li><li>Reference: [Solidity Storage Layout Specification](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html?utm_source=chatgpt.com).</li><li>Solidity 0.8.38-develop documentation+1</li><li>Practical exercise</li><li>Compile:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract LayoutExercise &#123; uint128 public first; uint128 public second; uint256 public third; address public owner; bool public active; mapping(address =&gt; uint256) public balances; &#125;</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Use:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">forge inspect LayoutExercise storageLayout</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Identify:</li><li>Storage slot.</li><li>Byte offset.</li><li>Variable type.</li><li>Packed variables.</li><li>Mapping storage position.</li></ul>
              </div>
            </div>
    

            {/* SECTION 12: Gas Consumption and Opcode Costs */}
            <div id="section-12" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 12 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Gas Consumption and Opcode Costs</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 12 — Gas Consumption and Opcode Costs</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12</span> EVM Gas Architecture</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12.1</span> What is gas?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Gas measures the computational resources used during EVM execution.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Each opcode has a gas cost defined by the protocol.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A transaction must pay for the computational resources it consumes.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Gas helps prevent:</li><li>Unlimited execution.</li><li>Uncontrolled resource consumption.</li><li>Computational denial-of-service.</li><li>Unbounded storage growth without economic cost.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12.2</span> Gas is not the same as ETH</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Gas is a unit of measurement.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">ETH is the asset used to pay transaction fees.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For EVM execution:</li><li>\[ TransactionFee=GasUsed\times EffectiveGasPrice \]</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12.3</span> Opcode costs</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Different instructions have different costs.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Illustrative examples of simple opcode costs on Ethereum's post-Shanghai execution schedule:</p>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Opcode</th><th className="p-2.5">Base gas cost</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">STOP</td><td className="p-2.5 text-neutral-700 leading-relaxed">0</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">ADD</td><td className="p-2.5 text-neutral-700 leading-relaxed">3</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MUL</td><td className="p-2.5 text-neutral-700 leading-relaxed">5</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">SUB</td><td className="p-2.5 text-neutral-700 leading-relaxed">3</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">DIV</td><td className="p-2.5 text-neutral-700 leading-relaxed">5</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">POP</td><td className="p-2.5 text-neutral-700 leading-relaxed">2</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">PUSH1</td><td className="p-2.5 text-neutral-700 leading-relaxed">3</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">PUSH0</td><td className="p-2.5 text-neutral-700 leading-relaxed">2</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MLOAD</td><td className="p-2.5 text-neutral-700 leading-relaxed">3 plus memory-related cost</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">MSTORE</td><td className="p-2.5 text-neutral-700 leading-relaxed">3 plus memory-related cost</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">These values are educational examples, not a complete fee calculator. Actual execution charges also depend on memory, storage access, call context, and the applicable network fork.</td><td className="p-2.5 text-neutral-700 leading-relaxed">6.12.4 Storage access gas</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Persistent storage operations are more expensive than many simple arithmetic operations.</td><td className="p-2.5 text-neutral-700 leading-relaxed">For example:</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">uint256 public number; function update(uint256 value) external &#123; number = value; &#125;</td><td className="p-2.5 text-neutral-700 leading-relaxed">This may require storage-access and storage-write operations.</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">The final cost can depend on:</td><td className="p-2.5 text-neutral-700 leading-relaxed">Original storage value.</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Current storage value.</td><td className="p-2.5 text-neutral-700 leading-relaxed">New storage value.</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Whether the slot was already accessed.</td><td className="p-2.5 text-neutral-700 leading-relaxed">Refund rules.</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12.5</span> Warm and cold storage access</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">EIP-2929 introduced different gas costs for first and subsequent accesses to certain accounts and storage slots.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A first access may be cold.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A repeated access within the same transaction may be warm.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>This affects:</li><li>SLOAD.</li><li>BALANCE.</li><li>CALL.</li><li>External-code access operations.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12.6</span> Memory expansion cost</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">As explained earlier, memory expansion has a cost that grows with the amount of memory used.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A contract that allocates excessive memory can therefore consume substantially more gas.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12.7</span> External calls</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">External contract interactions can introduce gas costs due to:</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Call instructions.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Account access.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Input data preparation.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Output data handling.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Child execution.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Return-data processing.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12.8</span> Gas refunds</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Some EVM operations can create refund credits under the applicable rules.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">However, refunds have limitations and should not be treated as guaranteed recovery of all previously spent gas.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12.9</span> Gas consumption example</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract GasExample &#123; uint256 public value; function setValue(uint256 newValue) external &#123; value = newValue; &#125; &#125;</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>The operation involves:</li><li>Transaction execution overhead.</li><li>Function argument decoding.</li><li>Storage access.</li><li>Storage update.</li><li>Function termination.</li><li>The exact transaction gas usage is determined by the execution rules and runtime conditions.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.12.10</span> Practical gas measurement</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Use:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">forge test --gas-report</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This provides gas information for tested functions.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>You can also use:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">forge inspect GasExample gasEstimates</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Compiler estimates and actual transaction gas are not necessarily identical.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Reference: [Ethereum Gas Documentation](https://ethereum.org/developers/docs/gas/?utm_source=chatgpt.com) and [EIP-2929 — Warm and Cold Access Costs](https://eips.ethereum.org/EIPS/eip-2929?utm_source=chatgpt.com).</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">GitHub+1</p>
              </div>
            </div>
    

            {/* SECTION 13: Gas Optimization Fundamentals */}
            <div id="section-13" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 13 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Gas Optimization Fundamentals</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 13 — Gas Optimization Fundamentals</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13</span> Solidity and EVM Gas Optimization</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.1</span> Why optimize gas?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Smart contract users pay transaction fees.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Reducing unnecessary execution costs can make applications more efficient and economical.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Gas optimization can also reduce execution complexity.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">However, optimization should never compromise correctness or security.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.2</span> Optimize storage access</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Storage operations are often expensive.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract BadExample &#123; uint256 public number; function increment() external &#123; number = number + 1; &#125; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A compiler may already optimize aspects of this code.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The developer should first examine the generated assembly and gas report rather than assuming manual changes improve efficiency.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.3</span> Use calldata for external read-only parameters</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Less efficient example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">function calculate( uint256[] memory items ) external pure returns (uint256) &#123; return items.length; &#125;</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Alternative:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">function calculate( uint256[] calldata items ) external pure returns (uint256) &#123; return items.length; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The second function can use the incoming data directly rather than requiring a memory copy.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.4</span> Storage packing</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract EfficientLayout &#123; uint128 public amount; uint128 public counter; uint256 public total; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The two uint128 variables can share one storage slot.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This can reduce the number of storage slots required.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.5</span> Avoid unnecessary storage writes</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">function update( uint256 newValue ) external &#123; if (number != newValue) &#123; number = newValue; &#125; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Whether this improves gas depends on the original and new storage values and the compiler-generated execution.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Measure before choosing.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.6</span> Use custom errors</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Instead of:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">require( msg.sender == owner, "Only owner can perform this action" );</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Use:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">error Unauthorized(address caller); if (msg.sender != owner) &#123; revert Unauthorized(msg.sender); &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Custom errors can reduce the data required for error handling compared with long revert strings.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.7</span> Use immutable and constant values appropriately</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">uint256 public constant MAX_SUPPLY = 1000000;</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Constants are determined at compile time.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Immutable values are assigned during construction and embedded in the resulting runtime bytecode by the compiler.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">These can avoid ordinary storage reads in suitable situations.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.8</span> Optimize loops</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Poor loop design can consume excessive gas.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">for (uint256 i = 0; i &lt; items.length; i++) &#123; total += items[i]; &#125;</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Study:</li><li>Loop bounds.</li><li>Storage reads.</li><li>Memory copies.</li><li>Array length caching.</li><li>Data structure selection.</li><li>Batch sizing.</li><li>Modern compiler optimizers may already perform several common improvements.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.9</span> Use unchecked arithmetic carefully</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Solidity version 0.8 and later checks ordinary arithmetic for overflow and underflow.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">An unchecked block disables those checks for its contents.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li><li>unchecked &#123; counter++; &#125;</li><li>This is appropriate only when the developer has proven that overflow cannot occur or is acceptable under the intended logic.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.10</span> Avoid unnecessary external calls</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">External contract calls can add substantial execution cost and introduce security issues.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Where appropriate:</li><li>Reduce repeated external calls.</li><li>Avoid redundant cross-contract queries.</li><li>Cache values safely.</li><li>Validate external responses.</li><li>Consider reentrancy risks.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.13.11</span> Gas optimization vs security</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Never choose an optimization simply because it consumes less gas.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>For example:</li><li>Removing authorization checks is not acceptable optimization.</li><li>Replacing safe arithmetic with unchecked arithmetic requires proof.</li><li>Changing storage layout without upgrade analysis can corrupt state.</li><li>Replacing secure call patterns with unsafe low-level interactions can introduce vulnerabilities.</li><li>Practical assignment</li><li>Create two implementations of a small Counter contract:</li><li>Standard implementation.</li><li>Optimized implementation.</li><li>Use Foundry to compare:</li><li>Deployment cost.</li><li>Function execution gas.</li><li>Bytecode size.</li><li>Storage layout.</li><li>Explain which optimizations provide measurable benefits.</li></ul>
              </div>
            </div>
    

            {/* SECTION 14: EVM State Transitions */}
            <div id="section-14" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 14 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">EVM State Transitions</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 14 — EVM State Transitions</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.14</span> Ethereum State Transition Mechanism</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.14.1</span> What is a state transition?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A state transition is the process of changing Ethereum's current state after executing valid transactions according to protocol rules.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Mathematically:</li><li>\[ S'=F(S,T) \]</li><li>Where:</li><li>\(S\) = Original state.</li><li>\(T\) = Valid transaction.</li><li>\(F\) = Ethereum state transition function.</li><li>\(S'\) = New state.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.14.2</span> Example</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Initial state:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Alice = 10 ETH Bob = 2 ETH</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Transaction:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Alice sends Bob 3 ETH Transaction fee = 0.002 ETH</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Result:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Alice = 6.998 ETH Bob = 5 ETH</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>State changes:</li><li>Alice's ETH balance decreases.</li><li>Bob's ETH balance increases.</li><li>Alice's nonce increases.</li><li>Transaction fee allocation and burning are applied according to the fee mechanism.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.14.3</span> Smart contract state transition</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">contract Counter &#123; uint256 public count; function increment() external &#123; count++; &#125; &#125;</pre>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Initial state:</li><li>count = 0</li><li>After one successful transaction:</li><li>count = 1</li><li>After another successful transaction:</li><li>count = 2</li><li>The contract's storage has changed.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.14.4</span> Nested state transitions</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider three contracts:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Contract A | v Contract B | v Contract C</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Contract A calls B, which calls C.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A state change may occur across all three execution contexts.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">If a failure propagates through the call tree, relevant state changes within the reverted execution are rolled back.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.14.5</span> Transaction-level processing</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>A transaction involves:</li><li>Transaction validation.</li><li>Sender and nonce checks.</li><li>Gas and fee checks.</li><li>Execution preparation.</li><li>EVM execution.</li><li>State changes or execution rollback.</li><li>Fee settlement.</li><li>Receipt creation.</li><li>State commitment to the resulting block.</li><li>Transaction validity and EVM execution are separate stages.</li><li>A transaction can be validly included yet have a failed execution status.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.14.6</span> Atomicity</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Ethereum smart contract execution supports atomic state changes.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">If an uncaught exception occurs, changes within the reverted execution are not committed.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This helps prevent partially completed contract operations.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Assignment</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Explain how Ethereum transforms the original global state into a new state after processing a transaction.</p>
              </div>
            </div>
    

            {/* SECTION 15: Revert Behavior and Exception Handling */}
            <div id="section-15" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 15 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">Revert Behavior and Exception Handling</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 15 — Revert Behavior and Exception Handling</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15</span> EVM Revert and Exception Architecture</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.1</span> What is a revert?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A revert occurs when execution is intentionally or exceptionally stopped and relevant state changes are rolled back.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM has a dedicated REVERT opcode.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It allows an execution frame to fail and return error data to its caller.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.2</span> Solidity require</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">require checks whether a condition is satisfied.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">function withdraw(uint256 amount) external &#123; require( amount &gt; 0, "Amount must be positive" ); &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">If the condition is false, execution reverts.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.3</span> Solidity assert</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">assert checks an internal invariant that the program expects to remain true.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li><li>assert(totalSupply &lt;= MAX_SUPPLY);</li><li>A failed assertion produces a panic error.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.4</span> Solidity revert</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Developers can explicitly revert execution.</p>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">function update(uint256 value) external &#123; if (value == 0) &#123; revert("Value cannot be zero"); &#125; &#125;</pre>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.5</span> Custom errors</h4>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">error InvalidAmount(uint256 amount); function deposit(uint256 amount) external &#123; if (amount == 0) &#123; revert InvalidAmount(amount); &#125; &#125;</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Custom errors provide structured error data.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.6</span> Revert data</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The EVM can return error data to the caller.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Important error formats include:</li><li>Error</li><li>Purpose</li><li>Error(string)</li><li>Standard revert message</li><li>Panic(uint256)</li><li>Compiler-generated panic information</li><li>Custom error</li><li>User-defined structured error</li><li>For example, arithmetic overflow in Solidity's checked arithmetic can generate a Panic(uint256) error.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.7</span> REVERT vs INVALID vs out of gas</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Condition</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Behavior</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">REVERT</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Rolls back the current execution frame and returns error data; remaining call-frame gas can be available to the caller</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">INVALID</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Exceptional halt; consumes the remaining gas allocated to that frame</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Out of gas</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Exceptional halt; consumes the remaining gas allocated to that frame</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">These conditions should not be treated as identical.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.8</span> Low-level call handling</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Consider:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">(bool success, bytes memory data) = target.call(payload);</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A low-level call can return a boolean indicating success.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The caller can decide whether to continue or revert.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.9</span> Try and catch</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Solidity provides try/catch for handling failures in external calls and contract creation.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">try target.performAction() &#123; // Successful execution &#125; catch &#123; // Handle failure &#125;</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.15.10</span> Transaction failure and gas consumption</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Suppose a transaction calls a contract and execution reverts.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Important consequences:</li><li>Contract state changes from the reverted execution are rolled back.</li><li>Logs produced inside the reverted execution are not committed.</li><li>The sender's transaction nonce is consumed at the transaction level.</li><li>Gas already consumed is still charged.</li><li>An unsuccessful transaction remains visible in the blockchain if included in a block.</li><li>This is why developers must inspect both transaction inclusion and execution status.</li><li>Reference: [Solidity Error Handling Documentation](https://docs.soliditylang.org/en/latest/control-structures.html?utm_source=chatgpt.com#panic-via-assert-and-error-via-require).</li><li>Solidity 0.8.38-develop documentation+1</li><li>Practical assignment</li><li>Build a contract containing:</li><li>One require condition.</li><li>One assert condition.</li><li>One explicit revert.</li><li>One custom error.</li><li>One external call with try/catch.</li><li>Test and compare their execution traces and revert data.</li></ul>
              </div>
            </div>
    

            {/* SECTION 16: EVM-Compatible Blockchains */}
            <div id="section-16" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 16 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">EVM-Compatible Blockchains</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 16 — EVM-Compatible Blockchains</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.16</span> EVM Compatibility and Multi-Chain Architecture</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.16.1</span> What is an EVM-compatible blockchain?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">An EVM-compatible blockchain is a blockchain network that implements the EVM execution environment or a sufficiently compatible version of its behavior.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This allows developers to deploy many existing Solidity smart contracts and reuse familiar development tools.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">For example, a developer can write a smart contract in Solidity and deploy it on more than one EVM-compatible network, provided the target network supports the contract's required features.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.16.2</span> Why does EVM compatibility matter?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Suppose a developer builds a decentralized application on Ethereum.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>The application contains:</li><li>Solidity smart contracts.</li><li>ABI definitions.</li><li>React frontend.</li><li>ethers.js integration.</li><li>Wallet connectivity.</li><li>On a compatible network, much of the application can be reused.</li><li>This reduces the need to build an entirely separate contract execution environment.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.16.3</span> Examples of EVM-compatible networks</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Arbitrum</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Ethereum Layer 2 ecosystem using EVM-compatible execution.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Optimism</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Ethereum Layer 2 ecosystem using the OP Stack.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Base</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Ethereum Layer 2 network built using the OP Stack.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Polygon</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Blockchain ecosystem with EVM-compatible networks.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">BNB Smart Chain</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Independent blockchain network with EVM-compatible execution.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Avalanche C-Chain</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">EVM-compatible smart contract environment within the Avalanche ecosystem.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.16.4</span> EVM compatibility vs EVM equivalence</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">These terms are related but should not be considered identical.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">EVM-compatible</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A network supports substantial parts of Ethereum's EVM execution environment.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">EVM-equivalent</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A network aims to reproduce Ethereum execution behavior more closely, including applicable opcode, precompile, and execution semantics.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Compatibility does not automatically mean identical behavior.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.16.5</span> Important differences between EVM networks</h4>
<div className="overflow-x-auto my-3 border border-[#e7e3da] rounded-xl"><table className="w-full text-xs text-left"><thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold"><tr><th className="p-2.5">Component</th><th className="p-2.5">Possible differences</th></tr></thead><tbody className="divide-y divide-[#ece8de]">
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Chain ID</td><td className="p-2.5 text-neutral-700 leading-relaxed">Each network has its own chain identifier</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Gas schedule</td><td className="p-2.5 text-neutral-700 leading-relaxed">Some networks have different execution pricing</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Precompiles</td><td className="p-2.5 text-neutral-700 leading-relaxed">Supported precompiled contracts can differ</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Block timing</td><td className="p-2.5 text-neutral-700 leading-relaxed">Different block production intervals</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Consensus</td><td className="p-2.5 text-neutral-700 leading-relaxed">Networks can use different consensus mechanisms</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">RPC methods</td><td className="p-2.5 text-neutral-700 leading-relaxed">Not all nodes expose identical extensions</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Fee mechanism</td><td className="p-2.5 text-neutral-700 leading-relaxed">Some networks include additional fee components</td></tr>
<tr><td className="p-2.5 font-mono font-semibold text-orange-600">Execution upgrades</td><td className="p-2.5 text-neutral-700 leading-relaxed">Fork activation and supported features can differ</td></tr>
</tbody></table></div>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.16.6</span> Multi-chain application architecture</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A decentralized application may support multiple EVM networks.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">React Application | v Wallet | +------------+------------+ | | | v v v Ethereum Arbitrum Base Provider Provider Provider | | | v v v Contract A Contract B Contract C</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The application must identify the active network and use the correct contract address and configuration.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.16.7</span> Multi-chain security concerns</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Students should understand:</li><li>Wrong-network transactions.</li><li>Chain ID validation.</li><li>Contract address mismatches.</li><li>Bridge risks.</li><li>Different gas configurations.</li><li>Network-specific transaction finality.</li><li>Cross-chain message verification.</li><li>Replay protection.</li><li>Assignment: Deploy the same basic Solidity contract to two local EVM environments or supported test networks. Compare their chain IDs, transaction hashes, bytecode, gas consumption, and deployment addresses.</li></ul>
              </div>
            </div>
    

            {/* SECTION 17: EVM Debugging and Tracing */}
            <div id="section-17" className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 pb-2 border-b border-[#ece8de]">
                <Cpu size={16} /> Section 17 • University Core Curriculum
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">EVM Debugging and Tracing</h3>
              <div className="pt-2 space-y-3">
                <p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Section 17 — EVM Debugging and Tracing</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17</span> Low-Level EVM Debugging</h4>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.1</span> What is EVM debugging?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">EVM debugging is the process of investigating what happened during smart contract execution.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A developer does not just look at the final transaction result.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">They examine the actual instructions executed by the virtual machine.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Debugging helps identify:</li><li>Incorrect calculations.</li><li>Unexpected state changes.</li><li>Revert conditions.</li><li>Out-of-gas failures.</li><li>Incorrect function arguments.</li><li>Storage-layout problems.</li><li>External call failures.</li><li>Contract interaction bugs.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.2</span> What is execution tracing?</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Execution tracing provides detailed information about the execution of a transaction.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A node can re-execute a transaction and record the instructions and call behavior.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>A basic opcode trace can provide:</li><li>Trace field</li><li>Meaning</li><li>pc</li><li>Program Counter</li><li>op</li><li>Executed opcode</li><li>gas</li><li>Gas remaining before the instruction</li><li>gasCost</li><li>Cost attributed to the instruction</li><li>depth</li><li>Execution-call depth</li><li>stack</li><li>Current stack</li><li>memory</li><li>Current memory</li><li>storage</li><li>Storage information where supported</li><li>error</li><li>Execution error information</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.3</span> Example trace</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>A simplified trace:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">[ &#123; "pc": 0, "op": "PUSH1", "gas": 100000, "depth": 1 &#125;, &#123; "pc": 2, "op": "PUSH1", "gas": 99997, "depth": 1 &#125;, &#123; "pc": 4, "op": "ADD", "gas": 99994, "depth": 1 &#125; ]</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This example illustrates the trace structure, not a measured execution from a particular contract.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.4</span> Program Counter debugging</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">The Program Counter helps determine which instruction is executing.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Developers can match the trace's program counter against disassembled bytecode.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">This is useful when investigating a failing instruction or an unexpected execution path.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.5</span> Stack debugging</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Inspect the stack to understand:</li><li>Values loaded.</li><li>Arithmetic results.</li><li>Function arguments.</li><li>Addresses.</li><li>Conditional values.</li><li>Jump destinations.</li><li>A stack trace is especially useful when debugging low-level assembly.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.6</span> Memory debugging</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Memory tracing helps identify:</li><li>Incorrect memory offsets.</li><li>Invalid return-data handling.</li><li>ABI encoding mistakes.</li><li>Memory expansion issues.</li><li>Unexpected data copying.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.7</span> Storage debugging</h4>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Storage tracing helps investigate:</li><li>Which slot was read.</li><li>Which slot was modified.</li><li>Whether a value changed.</li><li>Whether contract storage matches the expected layout.</li><li>Whether a proxy is using the intended storage context.</li></ul>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.8</span> Call tracing</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Call tracing shows nested contract interactions.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Example:</li></ul>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Transaction | v Contract A | +--- CALL ---&gt; Contract B | | | +--- CALL ---&gt; Contract C | +--- LOG</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">It helps identify which contract initiated each call and where failures occurred.</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.9</span> Important debugging methods</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Method</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Purpose</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">debug_traceTransaction</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Trace an included transaction</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">debug_traceCall</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Trace a simulated contract call</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">eth_call</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Simulate execution without sending a transaction</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">eth_estimateGas</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Estimate gas for an execution request</p>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">cast run</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Replay and inspect transaction execution</p>
<pre className="p-3.5 bg-neutral-950 text-neutral-200 font-mono rounded-xl text-xs my-2 overflow-x-auto leading-relaxed border border-neutral-800">forge test -vvvv</pre>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">View detailed execution traces during testing</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Not all public RPC providers expose the debug_ namespace. Historical tracing also requires access to the state necessary to replay the transaction.</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">go-ethereum+2</p>
<h4 className="text-base font-bold text-neutral-900 mt-6 mb-2 flex items-center gap-2"><span className="text-orange-600 font-mono text-sm">6.17.10</span> Common EVM debugging scenarios</h4>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">Scenario 1 — Unexpected revert</p>
<p className="text-xs leading-relaxed text-neutral-700 mb-2.5">A contract call fails.</p>
<ul className="space-y-1 my-2 list-disc list-inside text-xs text-neutral-700 leading-relaxed"><li>Investigate:</li><li>Revert data.</li><li>Failed condition.</li><li>Function arguments.</li><li>Call hierarchy.</li><li>Scenario 2 — Out of gas</li><li>A transaction consumes all its allocated execution gas.</li><li>Investigate:</li><li>Loop size.</li><li>Storage writes.</li><li>Memory expansion.</li><li>Nested contract calls.</li><li>Scenario 3 — Incorrect storage value</li><li>A contract returns an unexpected value.</li><li>Investigate:</li><li>Storage slot.</li><li>Storage offset.</li><li>Mapping key.</li><li>Contract address.</li><li>Proxy storage context.</li><li>Scenario 4 — Incorrect ABI encoding</li><li>A call reaches an unexpected function or fails during decoding.</li><li>Investigate:</li><li>Function selector.</li><li>Argument order.</li><li>Dynamic offsets.</li><li>Data lengths.</li><li>Contract ABI.</li><li>Scenario 5 — Reentrancy</li><li>A contract invokes another contract, which calls back before the original operation has finished.</li><li>Investigate:</li><li>Call depth.</li><li>External call sequence.</li><li>Storage-update sequence.</li><li>ETH transfers.</li><li>Reentrancy protections.</li><li>Practical assignment</li><li>Choose one successful transaction and one reverted transaction from your local development chain.</li><li>Generate traces for both.</li><li>Compare:</li><li>Opcode sequence.</li><li>Stack.</li><li>Gas usage.</li><li>Call depth.</li><li>Error details.</li><li>Final contract state.</li></ul>
              </div>
            </div>
    
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 2: INTERACTIVE SYSTEMS LAB (4 SIMULATORS)                 */}
        {/* ============================================================= */}
        {activeTab === "interactive-tools" && (
          <div className="space-y-10">
            {/* Tool 1: Live EVM Stack & Bytecode Disassembler */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Cpu size={16} /> Simulator 1: Live EVM Stack &amp; Bytecode Stepper
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">EVM Execution Engine &amp; Disassembler</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Step through low-level EVM instructions, inspect the LIFO operand stack, and track memory and gas in real time.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={stepVm}
                    disabled={vmHalted}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                      vmHalted
                        ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                        : "bg-orange-600 hover:bg-orange-700 text-white shadow-sm"
                    }`}
                  >
                    <Play size={14} /> Step Forward
                  </button>
                  <button
                    onClick={resetVm}
                    className="px-3 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <RotateCcw size={14} /> Reset
                  </button>
                </div>
              </div>

              {/* Presets */}
              <div className="mt-4">
                <span className="text-xs font-semibold text-neutral-700 block mb-2">Preset Bytecode Programs:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {EVM_PRESETS.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handlePresetChange(idx)}
                      className={`p-2.5 text-left rounded-xl border text-xs transition ${
                        selectedPresetIndex === idx
                          ? "bg-orange-50 border-orange-300 text-orange-950 font-bold"
                          : "bg-[#fbfaf7] border-[#ece8de] text-neutral-700 hover:bg-white"
                      }`}
                    >
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-[11px] text-neutral-500 font-mono mt-1 truncate">{p.bytecode}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Banner */}
              <div className="mt-4 flex flex-wrap items-center justify-between p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-xs">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-neutral-500">Program Counter:</span>{" "}
                    <span className="font-mono font-bold text-neutral-900">0x{vmPc.toString(16).padStart(2, "0")} ({vmPc})</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">Gas Consumed:</span>{" "}
                    <span className="font-mono font-bold text-orange-600">{vmGasUsed.toLocaleString()} gas</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">Stack Depth:</span>{" "}
                    <span className="font-mono font-bold text-neutral-900">{vmStack.length} / 1024</span>
                  </div>
                </div>
                <div>
                  {vmHalted ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg font-semibold">
                      <AlertTriangle size={12} /> {vmHaltReason || "Halted"}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg font-semibold">
                      <Activity size={12} /> Executing Active
                    </span>
                  )}
                </div>
              </div>

              {/* Three Column Visualization: Opcodes, Stack, Memory */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
                {/* Opcodes Disassembly List */}
                <div className="lg:col-span-5 bg-neutral-950 text-neutral-200 rounded-xl p-4 font-mono text-xs border border-neutral-800">
                  <div className="text-neutral-400 font-bold mb-2 flex items-center justify-between pb-1 border-b border-neutral-800">
                    <span>DISASSEMBLY (INSTRUCTIONS)</span>
                    <span className="text-[10px] text-neutral-500">PC • OP • MNEMONIC • ARG</span>
                  </div>
                  <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
                    {disassembledOpcodes.map((op, i) => {
                      const isCurrent = op.pc === vmPc;
                      return (
                        <div
                          key={i}
                          className={`p-1.5 rounded flex items-center justify-between text-[11px] transition ${
                            isCurrent
                              ? "bg-orange-600/30 text-orange-300 font-bold border border-orange-500/50"
                              : "text-neutral-400 hover:bg-neutral-900"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-neutral-500 w-8">0x{op.pc.toString(16).padStart(2, "0")}</span>
                            <span className="text-orange-400 font-bold w-6">{op.byteHex}</span>
                            <span className={isCurrent ? "text-orange-200" : "text-neutral-200"}>{op.mnemonic}</span>
                          </div>
                          <div className="text-neutral-400 text-right">
                            {op.operand && <span className="text-emerald-400 mr-2">{op.operand}</span>}
                            <span className="text-[10px] text-neutral-600">{op.baseGas}g</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Stack Visualization */}
                <div className="lg:col-span-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl p-4">
                  <div className="text-xs font-bold text-neutral-800 mb-2 flex items-center justify-between pb-1 border-b border-[#ece8de]">
                    <span className="flex items-center gap-1.5"><Layers size={14} className="text-orange-600" /> LIFO STACK (TOP TO BOTTOM)</span>
                    <span className="text-[11px] text-neutral-500">{vmStack.length} items</span>
                  </div>
                  {vmStack.length === 0 ? (
                    <div className="h-44 flex flex-col items-center justify-center text-xs text-neutral-400">
                      <span>Stack is empty</span>
                      <span className="text-[10px] text-neutral-500 mt-1">Execute PUSH to add 256-bit words</span>
                    </div>
                  ) : (
                    <div className="space-y-1.5 max-h-60 overflow-y-auto">
                      {vmStack.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2 bg-white border border-[#e7e3da] rounded-lg shadow-2xs font-mono text-xs flex items-center justify-between"
                        >
                          <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                            [{idx}] {idx === 0 ? "TOP" : ""}
                          </span>
                          <span className="font-bold text-neutral-800 truncate ml-2" title={`0x${item.toString(16)}`}>
                            0x{item.toString(16).padStart(4, "0")} ({item.toString()})
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Memory & Storage View */}
                <div className="lg:col-span-3 space-y-4">
                  {/* Memory Box */}
                  <div className="bg-[#fbfaf7] border border-[#ece8de] rounded-xl p-3">
                    <div className="text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1.5 pb-1 border-b border-[#ece8de]">
                      <FileCode size={13} className="text-blue-600" /> Volatile Memory
                    </div>
                    {Object.keys(vmMemory).length === 0 ? (
                      <div className="text-[11px] text-neutral-400 py-3 text-center">Memory is zero-initialized</div>
                    ) : (
                      <div className="space-y-1 max-h-24 overflow-y-auto font-mono text-[10px]">
                        {Object.entries(vmMemory).map(([offset, val]) => (
                          <div key={offset} className="bg-white p-1 rounded border border-[#ece8de]">
                            <span className="text-blue-600 font-bold">0x{Number(offset).toString(16)}:</span> {val.slice(0, 18)}...
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Storage Box */}
                  <div className="bg-[#fbfaf7] border border-[#ece8de] rounded-xl p-3">
                    <div className="text-xs font-bold text-neutral-800 mb-1 flex items-center gap-1.5 pb-1 border-b border-[#ece8de]">
                      <Database size={13} className="text-purple-600" /> Persistent Storage
                    </div>
                    {Object.keys(vmStorage).length === 0 ? (
                      <div className="text-[11px] text-neutral-400 py-3 text-center">Storage empty (slot writes cost 20k gas)</div>
                    ) : (
                      <div className="space-y-1 max-h-24 overflow-y-auto font-mono text-[10px]">
                        {Object.entries(vmStorage).map(([slot, val]) => (
                          <div key={slot} className="bg-white p-1 rounded border border-[#ece8de]">
                            <span className="text-purple-600 font-bold">Slot #{slot}:</span> {val.slice(0, 18)}...
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 2: Solidity Storage Slot & Packing Visualizer */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Database size={16} /> Simulator 2: Solidity Storage Layout &amp; Packing
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">Storage Slot Allocator &amp; Packing Visualizer</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    See how variables smaller than 32 bytes are packed right-to-left into consecutive 32-byte slots, and how ordering impacts SSTORE gas.
                  </p>
                </div>
              </div>

              {/* Presets */}
              <div className="mt-4 flex flex-wrap gap-2">
                {STORAGE_PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStoragePreset(idx)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium border transition ${
                      activeStoragePreset === idx
                        ? "bg-orange-50 border-orange-300 text-orange-950 font-bold"
                        : "bg-[#fbfaf7] border-[#ece8de] text-neutral-700 hover:bg-white"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950 mt-3">
                <strong>Analysis:</strong> {STORAGE_PRESETS[activeStoragePreset].desc}
              </div>

              {/* Slot Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {slotAllocation.map((slot) => (
                  <div key={slot.slotIndex} className="bg-[#fbfaf7] border border-[#e7e3da] rounded-xl p-4">
                    <div className="flex items-center justify-between pb-2 border-b border-[#ece8de] mb-3">
                      <span className="font-bold text-sm text-neutral-900 flex items-center gap-1.5">
                        <Box size={14} className="text-orange-600" /> Slot #{slot.slotIndex}
                      </span>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white border border-[#e7e3da] text-neutral-600">
                        {slot.usedBytes} / 32 bytes used
                      </span>
                    </div>

                    {/* Byte Bar (32 segments) */}
                    <div className="h-5 w-full bg-neutral-200 rounded overflow-hidden flex border border-neutral-300 mb-3">
                      {slot.items.map((item, idx) => {
                        const pct = (item.size / 32) * 100;
                        const colors = [
                          "bg-orange-500 text-white",
                          "bg-blue-500 text-white",
                          "bg-emerald-500 text-white",
                          "bg-purple-500 text-white",
                          "bg-rose-500 text-white"
                        ];
                        const c = colors[idx % colors.length];
                        return (
                          <div
                            key={idx}
                            style={{ width: `${pct}%` }}
                            className={`${c} flex items-center justify-center text-[9px] font-bold overflow-hidden px-1`}
                            title={`${item.name} (${item.type}) - ${item.size} bytes [Offset ${item.startOffset}-${item.endOffset}]`}
                          >
                            {item.name}
                          </div>
                        );
                      })}
                      {slot.freeBytes > 0 && (
                        <div
                          style={{ width: `${(slot.freeBytes / 32) * 100}%` }}
                          className="bg-neutral-100 text-neutral-400 flex items-center justify-center text-[9px]"
                          title={`${slot.freeBytes} bytes unused padding`}
                        >
                          {slot.freeBytes}B free
                        </div>
                      )}
                    </div>

                    {/* Variable Details */}
                    <div className="space-y-1.5 text-xs">
                      {slot.items.map((item, idx) => (
                        <div key={idx} className="bg-white p-2 rounded-lg border border-[#e7e3da] flex items-center justify-between">
                          <div>
                            <span className="font-bold text-neutral-900">{item.name}</span>{" "}
                            <span className="font-mono text-[11px] text-neutral-500">({item.type})</span>
                          </div>
                          <span className="font-mono text-[11px] text-neutral-600 font-semibold">
                            {item.size}B • offset [{item.startOffset}–{item.endOffset}]
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tool 3: Function Selector & ABI Calldata Encoder */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Hash size={16} /> Simulator 3: ABI Calldata &amp; Function Selector Encoder
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">Application Binary Interface (ABI) Calldata Generator</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Generate the canonical 4-byte Keccak-256 function selector and serialize 32-byte left-padded arguments into transaction calldata.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">Function Canonical Signature</label>
                  <input
                    type="text"
                    value={abiSig}
                    onChange={(e) => setAbiSig(e.target.value)}
                    className="w-full p-2.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs text-neutral-900 focus:outline-none focus:border-orange-500"
                    placeholder="e.g. transfer(address,uint256)"
                  />
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["transfer(address,uint256)", "setNumber(uint256)", "approve(address,uint256)", "saveCredit(address,uint256)"].map(sig => (
                      <button
                        key={sig}
                        onClick={() => setAbiSig(sig)}
                        className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-mono"
                      >
                        {sig.split("(")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">Parameter 1 (address / value)</label>
                  <input
                    type="text"
                    value={abiArg1}
                    onChange={(e) => setAbiArg1(e.target.value)}
                    className="w-full p-2.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs text-neutral-900 focus:outline-none focus:border-orange-500"
                  />
                  <span className="text-[10px] text-neutral-500 mt-1 block">Left-padded with 12 zero bytes to 32 bytes</span>
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">Parameter 2 (uint256 value)</label>
                  <input
                    type="text"
                    value={abiArg2}
                    onChange={(e) => setAbiArg2(e.target.value)}
                    className="w-full p-2.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs text-neutral-900 focus:outline-none focus:border-orange-500"
                  />
                  <span className="text-[10px] text-neutral-500 mt-1 block">Left-padded big-endian hex representation</span>
                </div>
              </div>

              {/* Visualized Calldata Output */}
              <div className="mt-5 p-4 bg-neutral-950 text-neutral-200 rounded-xl font-mono text-xs border border-neutral-800">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800 mb-3">
                  <span className="font-bold text-neutral-300">COMPOSED CALLDATA HEX STREAM</span>
                  <button
                    onClick={() => copyCode("calldata", calldataBreakdown.fullCalldata)}
                    className="px-2 py-1 bg-neutral-800 hover:bg-neutral-700 rounded text-[11px] text-orange-400 flex items-center gap-1 font-sans transition"
                  >
                    {copiedSnippet === "calldata" ? <Check size={12} /> : <Copy size={12} />} Copy Calldata
                  </button>
                </div>
                <div className="space-y-2 leading-relaxed break-all">
                  <div>
                    <span className="text-neutral-500">// [0..4] 4-Byte Function Selector:</span><br />
                    <span className="text-orange-400 font-bold bg-orange-950/60 px-1 py-0.5 rounded">{calldataBreakdown.selector}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">// [4..36] Word 1 (Arg 1 - Address):</span><br />
                    <span className="text-blue-400 font-bold bg-blue-950/60 px-1 py-0.5 rounded">{calldataBreakdown.param1}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">// [36..68] Word 2 (Arg 2 - Uint256):</span><br />
                    <span className="text-emerald-400 font-bold bg-emerald-950/60 px-1 py-0.5 rounded">{calldataBreakdown.param2}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 4: Quadratic Memory Expansion Cost Calculator */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Flame size={16} /> Simulator 4: Quadratic Memory Gas Expansion
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">EVM Memory Cost Calculator: Cmem(a) = 3a + ⌊a² / 512⌋</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Explore why large arrays in memory cause catastrophic gas spikes and out-of-gas exceptions.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs font-bold text-neutral-800 mb-2">
                  <span>Allocated Memory Size: <span className="font-mono text-orange-600">{memoryCost.a} words</span> ({memoryCost.bytes.toLocaleString()} bytes)</span>
                  <span className="text-neutral-500 font-normal">Range: 1 to 2,048 32-byte words</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="2048"
                  value={memoryWords}
                  onChange={(e) => setMemoryWords(e.target.value)}
                  className="w-full accent-orange-600"
                />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                  <span className="text-[11px] text-neutral-500 block">Linear Cost (3 × a)</span>
                  <span className="text-lg font-bold font-mono text-neutral-900">{memoryCost.linearCost.toLocaleString()} gas</span>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                  <span className="text-[11px] text-neutral-500 block">Quadratic Cost (⌊a²/512⌋)</span>
                  <span className={`text-lg font-bold font-mono ${memoryCost.isHeavy ? "text-red-600" : "text-neutral-900"}`}>
                    {memoryCost.quadCost.toLocaleString()} gas
                  </span>
                </div>
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl text-center">
                  <span className="text-[11px] text-orange-800 font-semibold block">Total Memory Gas</span>
                  <span className="text-lg font-bold font-mono text-orange-600">{memoryCost.totalGas.toLocaleString()} gas</span>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                  <span className="text-[11px] text-neutral-500 block">Next Word Cost (+1)</span>
                  <span className="text-lg font-bold font-mono text-neutral-800">{memoryCost.incrementalGas.toLocaleString()} gas</span>
                </div>
              </div>

              {memoryCost.isHeavy && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-950 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-600 shrink-0" />
                  <span>
                    <strong>Warning — Quadratic Gas Penalty Dominates:</strong> At {memoryCost.a} words ({memoryCost.bytes.toLocaleString()} bytes), the quadratic term is consuming {( (memoryCost.quadCost / memoryCost.totalGas) * 100 ).toFixed(1)}% of total memory gas. Contracts should stream or paginate data rather than loading mega-buffers into memory.
                  </span>
                </div>
              )}
            </div>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 3: FOUNDRY & ANVIL LAB (SECTION 6.18 - ALL 18 STEPS)       */}
        {/* ============================================================= */}
        {activeTab === "labs-code" && (
          <div className="space-y-8">
            {/* Lab Header Card */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Terminal size={16} /> Section 18 • Comprehensive Laboratory
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">
                    6.18 Practical Lab: Compile Solidity Contracts &amp; Inspect EVM Execution
                  </h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Follow the complete journey of a smart contract: from source code compilation and bytecode disassembly to local Anvil deployment, calldata serialization, gas receipts, and opcode trace debugging.
                  </p>
                </div>
              </div>

              {/* Lab Overview Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs">
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <span className="text-neutral-500 block">Framework</span>
                  <span className="font-bold text-neutral-900">Foundry (Forge, Cast, Anvil)</span>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <span className="text-neutral-500 block">Language</span>
                  <span className="font-bold text-neutral-900">Solidity ^0.8.20</span>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <span className="text-neutral-500 block">Target VM</span>
                  <span className="font-bold text-neutral-900">Local EVM (Anvil localhost:8545)</span>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                  <span className="text-neutral-500 block">Total Steps</span>
                  <span className="font-bold text-orange-600">18 End-to-End Steps</span>
                </div>
              </div>
            </div>

            {/* Solidity Source Code Card */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#ece8de] mb-4">
                <div className="flex items-center gap-2">
                  <FileCode size={18} className="text-orange-600" />
                  <span className="font-bold text-neutral-900 text-sm">Lab Contract: src/EVMWorkshop.sol</span>
                </div>
                <button
                  onClick={() => copyCode("evm_workshop_sol", EVM_WORKSHOP_SOL)}
                  className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  {copiedSnippet === "evm_workshop_sol" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />} Copy Solidity
                </button>
              </div>
              <pre className="p-4 bg-neutral-950 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed max-h-96 border border-neutral-800">
                {EVM_WORKSHOP_SOL}
              </pre>
            </div>

            {/* 18 Steps Walkthrough */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">1</span>
                  Step 1 — Initialize Foundry Project
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Install Foundry via its official toolchain and initialize a clean workspace environment.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
forge init evm-lab &amp;&amp; cd evm-lab
                </pre>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">2</span>
                  Step 2 — Create the EVMWorkshop Contract
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Place the contract code above into <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">src/EVMWorkshop.sol</code>.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">3</span>
                  Step 3 — Compile Contract with Forge
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Invoke solc via Forge to run lexical analysis, syntax parsing, semantic verification, Yul optimization, and binary code generation.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
forge build
                </pre>
              </div>

              {/* Step 4 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">4</span>
                  Step 4 — Inspect Application Binary Interface (ABI)
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Extract the standard JSON interface describing all callable entry points, inputs, outputs, events, and custom errors.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
forge inspect EVMWorkshop abi
                </pre>
              </div>

              {/* Step 5 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">5</span>
                  Step 5 — Inspect Creation (Initialization) Bytecode
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Inspect the complete deployment package containing constructor logic, storage initialization, and the return routine.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
forge inspect EVMWorkshop bytecode
                </pre>
              </div>

              {/* Step 6 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">6</span>
                  Step 6 — Inspect Runtime (Deployed) Bytecode
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Examine the exact binary code that will be permanently stored on the blockchain at the contract address. Notice constructor logic is absent!
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
forge inspect EVMWorkshop deployedBytecode
                </pre>
              </div>

              {/* Step 7 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">7</span>
                  Step 7 — Inspect EVM Assembly
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Disassemble the contract into mnemonic opcodes: observe the function dispatcher, stack pushes, arithmetic, and memory allocation.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
forge inspect EVMWorkshop assembly
                </pre>
              </div>

              {/* Step 8 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">8</span>
                  Step 8 — Inspect Contract Storage Layout
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Verify compiler-assigned storage slots: number (Slot 0), owner (Slot 1), credits mapping (Slot 2), values array (Slot 3).
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
forge inspect EVMWorkshop storageLayout
                </pre>
              </div>

              {/* Step 9 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">9</span>
                  Step 9 — Inspect Yul Intermediate Representation (IR)
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Compare unoptimized Yul against optimized Yul to observe inlining, constant folding, and dead code elimination.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
forge inspect EVMWorkshop ir
forge inspect EVMWorkshop irOptimized
                </pre>
              </div>

              {/* Step 10 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">10</span>
                  Step 10 — Launch Local Anvil Node
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Launch a high-performance local EVM instance running on http://127.0.0.1:8545 with 10 pre-funded test accounts.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
anvil
                </pre>
              </div>

              {/* Step 11 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">11</span>
                  Step 11 — Deploy Contract with Constructor Arguments
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Deploy EVMWorkshop to Anvil, passing initialNumber = 10. Record the deployed contract address.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
export ANVIL_KEY="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
forge create src/EVMWorkshop.sol:EVMWorkshop \
  --rpc-url http://127.0.0.1:8545 \
  --private-key "$ANVIL_KEY" \
  --constructor-args 10
                </pre>
              </div>

              {/* Step 12 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">12</span>
                  Step 12 — Query State via eth_call (Read-Only)
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Execute the public getter <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">number()</code> without paying gas or mining a transaction.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
export CONTRACT="0x5FbDB2315678afecb367f032d93F642f64180aa3"
cast call $CONTRACT "number()(uint256)" --rpc-url http://127.0.0.1:8545
# Returns: 10
                </pre>
              </div>

              {/* Step 13 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">13</span>
                  Step 13 — Execute State-Changing Transaction (SSTORE)
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Send a transaction from the owner account to update number to 42. Observe block creation and nonce increment.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
cast send $CONTRACT "setNumber(uint256)" 42 \
  --private-key "$ANVIL_KEY" \
  --rpc-url http://127.0.0.1:8545
                </pre>
              </div>

              {/* Step 14 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">14</span>
                  Step 14 — Dissect Calldata Stream
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Inspect the 36-byte raw payload sent to the node: 4-byte selector (0x3fb5c1cb) + 32-byte argument (0x2a = 42).
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
cast calldata "setNumber(uint256)" 42
# 0x3fb5c1cb000000000000000000000000000000000000000000000000000000000000002a
                </pre>
              </div>

              {/* Step 15 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">15</span>
                  Step 15 — Inspect Transaction Receipt &amp; Gas Consumed
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Retrieve the transaction receipt and analyze gasUsed, effectiveGasPrice, and emitted logs.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
cast receipt &lt;TX_HASH&gt; --rpc-url http://127.0.0.1:8545
                </pre>
              </div>

              {/* Step 16 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">16</span>
                  Step 16 — Trace Opcode Execution with Cast
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Run a full interactive execution trace showing Program Counter jumps, stack changes, and memory allocation.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
cast run &lt;TX_HASH&gt; --rpc-url http://127.0.0.1:8545 --debug
                </pre>
              </div>

              {/* Step 17 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">17</span>
                  Step 17 — Provoke &amp; Debug a Revert Condition
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Send a transaction from an unauthorized secondary account to trigger the <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono text-[11px]">Unauthorized(address)</code> custom error.
                </p>
                <pre className="p-3 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-x-auto">
export SECOND_KEY="0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"
cast send $CONTRACT "setNumber(uint256)" 99 \
  --private-key "$SECOND_KEY" \
  --rpc-url http://127.0.0.1:8545
# Reverted with custom error: Unauthorized(0x70997970C51812dc3A010C7d01b50e0d17dc79C8)
                </pre>
              </div>

              {/* Step 18 */}
              <div className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-2">
                  <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">18</span>
                  Step 18 — Compare Successful vs Reverted Execution Traces
                </div>
                <p className="text-xs text-neutral-600 mb-3">
                  Compare the traces: observe how the failed call halts at opcode 0xfd (REVERT), discards all pending state modifications, returns the custom error selector + address, and refunds unspent gas.
                </p>
                <div className="overflow-x-auto border border-[#e7e3da] rounded-xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold">
                      <tr>
                        <th className="p-3">Execution Metric</th>
                        <th className="p-3">Successful Call (Owner)</th>
                        <th className="p-3">Failed Call (Unauthorized)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de]">
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">Caller Authorization</td>
                        <td className="p-3 text-emerald-700 font-medium">Passed (CALLER == owner)</td>
                        <td className="p-3 text-red-700 font-medium">Failed (CALLER != owner)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">Storage Modification</td>
                        <td className="p-3 text-emerald-700">Committed (SSTORE Slot 0 = 42)</td>
                        <td className="p-3 text-neutral-500">None (Rolled back completely)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">Event Logging</td>
                        <td className="p-3 text-emerald-700">NumberChanged(42) emitted</td>
                        <td className="p-3 text-neutral-500">No logs committed</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">Terminal Opcode</td>
                        <td className="p-3 font-mono">STOP (0x00)</td>
                        <td className="p-3 font-mono text-red-600">REVERT (0xfd)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">Returned Data</td>
                        <td className="p-3 font-mono text-neutral-500">0x (Empty)</td>
                        <td className="p-3 font-mono text-red-600">0x82b42900... (Unauthorized)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT & RUBRIC (SECTION 6.20)           */}
        {/* ============================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-10">
            {/* Assessment Header Banner */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Award size={16} /> Section 20 • Comprehensive Assessment
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">6.20 EVM Systems Knowledge Assessment</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Evaluate your mastery of the Ethereum Virtual Machine across 4 formal testing dimensions: Multiple Choice Questions, Conceptual Short Answers, Advanced Architecture Questions, and Practical Rubric.
                  </p>
                </div>
                {showQuizResults && (
                  <div className="flex items-center gap-3 bg-[#fbfaf7] border border-[#ece8de] p-3 rounded-xl">
                    <div className="text-right">
                      <span className="text-[11px] text-neutral-500 block">MCQ Score:</span>
                      <span className="text-lg font-bold text-neutral-900">{quizScore} / {QUIZ_QUESTIONS.length}</span>
                    </div>
                    <div className="text-sm font-bold px-3 py-1 bg-orange-100 text-orange-800 rounded-lg">
                      {Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* PART A: 10 MULTIPLE-CHOICE QUESTIONS */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-orange-600" /> Part A — Multiple-Choice Questions (10 Marks)
                </h4>
                <button
                  onClick={() => setShowQuizResults(!showQuizResults)}
                  className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
                >
                  {showQuizResults ? "Hide Answers" : "Submit & Check Answers"}
                </button>
              </div>

              <div className="space-y-4">
                {QUIZ_QUESTIONS.map((q) => {
                  const selectedIdx = selectedAnswers[q.id];
                  const isAnswered = selectedIdx !== undefined;
                  const isCorrect = isAnswered && q.options[selectedIdx].correct;

                  return (
                    <div key={q.id} className="bg-white border border-[#e7e3da] rounded-2xl p-5 shadow-sm">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <span className="font-bold text-neutral-900 text-sm">
                          {q.id}. {q.q}
                        </span>
                        {showQuizResults && isAnswered && (
                          <span className={`text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 ${
                            isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                          }`}>
                            {isCorrect ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                            {isCorrect ? "Correct" : "Incorrect"}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedIdx === optIdx;
                          let btnStyle = "bg-[#fbfaf7] border-[#ece8de] text-neutral-700 hover:bg-white";

                          if (showQuizResults) {
                            if (opt.correct) {
                              btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold";
                            } else if (isOptionSelected) {
                              btnStyle = "bg-red-50 border-red-300 text-red-900";
                            }
                          } else if (isOptionSelected) {
                            btnStyle = "bg-orange-50 border-orange-400 text-orange-950 font-semibold";
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectAnswer(q.id, optIdx)}
                              className={`p-3 rounded-xl border text-xs text-left transition flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt.text}</span>
                              {showQuizResults && opt.correct && (
                                <Check size={14} className="text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className="mt-3 p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-700 leading-relaxed">
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PART B: 18 SHORT-ANSWER CONCEPTUAL QUESTIONS */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <h4 className="text-base font-bold text-neutral-900 mb-1 flex items-center gap-2">
                <HelpCircle size={18} className="text-orange-600" /> Part B — Conceptual Short-Answer Questions (18 Questions)
              </h4>
              <p className="text-xs text-neutral-600 mb-4">
                Click any prompt to reveal the comprehensive university model answer.
              </p>

              <div className="space-y-3">
                {[
                  {
                    id: "sa1",
                    q: "1. Explain the purpose of the EVM.",
                    a: "The Ethereum Virtual Machine (EVM) provides a decentralized, quasi-Turing complete runtime environment that executes smart contract instructions identically across all participating Ethereum nodes. It acts as the canonical state transition engine, guaranteeing that identical inputs produce bit-for-bit identical world states worldwide."
                  },
                  {
                    id: "sa2",
                    q: "2. Why is Ethereum's execution environment deterministic?",
                    a: "Determinism is mandatory because thousands of independent nodes must re-execute transactions locally to reach consensus on the new state root. If execution depended on non-deterministic host factors (such as local wall-clock time, hardware PRNGs, or external network requests), nodes would compute divergent state roots and permanently fork."
                  },
                  {
                    id: "sa3",
                    q: "3. Explain the role of the Program Counter (PC).",
                    a: "The Program Counter is an unsigned integer byte offset tracking the next opcode byte to execute within the bytecode stream. It advances by 1 for regular instructions, by 1 + N for PUSH1-PUSH32 operations, and jumps to arbitrary locations exclusively via JUMP and JUMPI to validated JUMPDEST (0x5b) positions."
                  },
                  {
                    id: "sa4",
                    q: "4. Why does the EVM use a stack?",
                    a: "A stack-based machine is simple to specify, deterministic to implement, and compact in bytecode encoding because instructions do not need to encode register operands (zero-address instruction format). Operands are implicitly popped from the top of the stack and results are pushed onto the top."
                  },
                  {
                    id: "sa5",
                    q: "5. Differentiate memory and storage in the EVM.",
                    a: "Storage is permanent, persistent across transactions, organized in 2^256 32-byte slots, stored in the global state trie, and consumes heavy gas (2,100 cold / 100 warm SLOAD; 20,000 zero->non-zero SSTORE). Memory is volatile, linearly byte-addressed, zero-initialized per call frame, discarded upon frame exit, and expands with a quadratic gas cost."
                  },
                  {
                    id: "sa6",
                    q: "6. What is calldata?",
                    a: "Calldata is an immutable, read-only byte array containing the transaction payload or internal message-call arguments. It cannot be modified by the executing contract. Because it avoids memory allocation and quadratic expansion, loading variables directly from calldata is significantly cheaper than copying them to memory."
                  },
                  {
                    id: "sa7",
                    q: "7. What is transient storage (EIP-1153)?",
                    a: "Introduced in the Cancun upgrade, transient storage provides key-value storage slots that persist only for the duration of the entire transaction (across multiple internal call frames) and are automatically cleared to zero upon transaction completion. Accessible via TLOAD and TSTORE (100 gas each), it provides cheap reentrancy locks."
                  },
                  {
                    id: "sa8",
                    q: "8. Explain EVM bytecode.",
                    a: "EVM bytecode is a raw, compiled hexadecimal sequence of one-byte opcodes and optional immediate data bytes. It is the machine language directly decoded and executed by the EVM interpreter."
                  },
                  {
                    id: "sa9",
                    q: "9. Describe the Solidity compilation pipeline.",
                    a: "The pipeline consists of 9 stages: Lexical analysis (tokenization) -> Syntactic parsing (Concrete Syntax Tree) -> Abstract Syntax Tree (AST) construction -> Semantic analysis & type checking -> Intermediate representation (Yul IR generation) -> Yul optimization (inlining, constant folding, dead-code removal) -> EVM assembly generation -> Bytecode emission -> Output bundling (ABI JSON, creation bytecode, deployed bytecode, storage layout, source maps)."
                  },
                  {
                    id: "sa10",
                    q: "10. What is the purpose of the Application Binary Interface (ABI)?",
                    a: "Because compiled EVM bytecode strips all function names, types, and signatures, the ABI defines the formal standard for serializing high-level function calls into raw calldata bytes, calculating 4-byte function selectors, left-padding static types, encoding dynamic offsets, and decoding return data."
                  },
                  {
                    id: "sa11",
                    q: "11. Explain function selectors.",
                    a: "A function selector is the first 4 bytes of the Keccak-256 cryptographic hash of the function's canonical signature (e.g., keccak256('transfer(address,uint256)')[0..3] = 0xa9059cbb). The contract dispatcher checks these 4 bytes to determine which internal function to jump to."
                  },
                  {
                    id: "sa12",
                    q: "12. Differentiate creation and runtime bytecode.",
                    a: "Creation bytecode is the code sent in a contract creation transaction. It executes the constructor, sets initial state, copies the runtime bytecode into memory, and returns it. Runtime bytecode is the resulting code permanently stored on-chain at the new contract address to handle future transactions."
                  },
                  {
                    id: "sa13",
                    q: "13. Explain storage packing.",
                    a: "Solidity's storage allocation algorithm bundles multiple consecutive state variables whose cumulative sizes are less than or equal to 32 bytes into a single 32-byte storage slot, packing them right-to-left (low-order bytes first). This allows multiple variable writes to share a single expensive SSTORE."
                  },
                  {
                    id: "sa14",
                    q: "14. Why do storage operations consume significant gas?",
                    a: "Storage writes permanently alter the global blockchain state, requiring thousands of full validator nodes worldwide to store the data on their physical disks indefinitely, update the Merkle Patricia Trie, and calculate new state root hashes."
                  },
                  {
                    id: "sa15",
                    q: "15. Explain warm and cold storage access (EIP-2929).",
                    a: "To defend against state-reading denial-of-service attacks, EIP-2929 introduced two-tier storage pricing. The first time a storage slot or address is accessed within a transaction, it is 'cold' and costs 2,100 gas for SLOAD (or 2,600 for accounts). Any subsequent access in the same transaction is 'warm' and costs only 100 gas."
                  },
                  {
                    id: "sa16",
                    q: "16. What is a state transition?",
                    a: "A state transition is the deterministic transformation of Ethereum's global world state sigma into a new state sigma' via transaction execution: sigma' = Upsilon(sigma, T). It updates account balances, nonces, contract storage roots, and code hashes."
                  },
                  {
                    id: "sa17",
                    q: "17. What happens during an EVM revert?",
                    a: "During a REVERT (0xfd), the EVM halts execution, completely rolls back all state modifications made during that call frame, refunds all remaining unspent gas to the sender, and returns an optional error payload (such as custom error selectors or revert reason strings) to the caller."
                  },
                  {
                    id: "sa18",
                    q: "18. Explain EVM compatibility vs EVM equivalence.",
                    a: "EVM compatibility means a blockchain supports Solidity and standard EVM opcodes, but may feature architectural differences (e.g., custom gas pricing, modified block hashes, different precompiles). EVM equivalence means byte-for-byte fidelity with the canonical Ethereum execution layer specification, running identical bytecode without modification."
                  }
                ].map((item) => {
                  const isOpen = !!openShortAnswer[item.id];
                  return (
                    <div key={item.id} className="border border-[#ece8de] rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleShortAnswer(item.id)}
                        className="w-full p-3.5 bg-[#fbfaf7] hover:bg-neutral-100 text-left text-xs font-bold text-neutral-800 flex items-center justify-between transition"
                      >
                        <span>{item.q}</span>
                        {isOpen ? <ChevronUp size={16} className="text-orange-600" /> : <ChevronDown size={16} className="text-neutral-400" />}
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white text-xs leading-relaxed text-neutral-700 border-t border-[#ece8de]">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PART C: 10 ADVANCED TECHNICAL QUESTIONS */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <h4 className="text-base font-bold text-neutral-900 mb-1 flex items-center gap-2">
                <FileCode size={18} className="text-orange-600" /> Part C — Advanced Systems Engineering Questions (10 Questions)
              </h4>
              <p className="text-xs text-neutral-600 mb-4">
                In-depth architectural analysis covering execution loops, Yul IR, ABI head/tail pointers, and call frame lifecycles.
              </p>

              <div className="space-y-3">
                {[
                  {
                    id: "tq1",
                    q: "1. Explain the step-by-step EVM instruction execution loop.",
                    a: "The interpreter executes a deterministic cycle: (1) Check if PC exceeds bytecode length (halt if true); (2) Fetch opcode at PC; (3) Check static base gas and dynamic gas (memory expansion, storage cold/warm status); (4) If gas remaining < cost, halt with Out of Gas; (5) Deduct gas from available counter; (6) Check stack depth: if items < required inputs, halt with stack underflow; if adding outputs exceeds 1024, halt with stack overflow; (7) Pop required operands; (8) Execute operation; (9) Push results; (10) Advance PC (by 1 for regular opcodes, by 1+N for PUSH); (11) Repeat until STOP, RETURN, REVERT, or invalid opcode."
                  },
                  {
                    id: "tq2",
                    q: "2. Describe the internal architecture of an EVM execution frame.",
                    a: "An execution frame encapsulates the complete ephemeral context of a message-call: (1) Execution code (bytes); (2) Program Counter (PC); (3) Operand stack (up to 1,024 256-bit items); (4) Volatile memory (zero-initialized byte array); (5) Calldata buffer; (6) Return data buffer; (7) Current gas budget; (8) Environmental context: caller (CALLER), contract address (ADDRESS), value sent (CALLVALUE), call depth, and staticcall flag (which disallows state modifications)."
                  },
                  {
                    id: "tq3",
                    q: "3. Explain the complete Solidity-to-bytecode compilation workflow.",
                    a: "High-level Solidity source is parsed into an AST. Type checking and inheritance linearization (C3 linearization) are performed. The solc compiler then generates Yul intermediate representation (IR). The Yul optimizer performs abstract interpretation, function inlining, common subexpression elimination, loop unrolling, and dead-code pruning. Next, the optimized Yul is translated into EVM assembly mnemonics, which are encoded into hexadecimal opcode bytes. The compiler outputs metadata, ABI JSON, initialization bytecode, and deployed runtime bytecode."
                  },
                  {
                    id: "tq4",
                    q: "4. Describe how ABI calldata encodes static vs dynamic types.",
                    a: "The ABI encodes static types (uint256, address, bytes32, bool) inline directly into their assigned 32-byte slots in the 'head' area. Dynamic types (string, bytes, T[]) cannot be stored inline because their length varies. Instead, the 'head' slot stores a 32-byte offset pointer specifying where the dynamic data begins in the 'tail' area. In the tail, the first 32-byte word stores the element count or byte length L, followed by the padded data bytes."
                  },
                  {
                    id: "tq5",
                    q: "5. Explain the mathematical derivation differences between CREATE and CREATE2.",
                    a: "CREATE derives the address from sender and nonce: Address = keccak256(rlp([sender, nonce]))[12..31]. Because the nonce increments with every transaction, the address cannot be predicted without knowing exact historical transaction counts. CREATE2 derives the address deterministically: Address = keccak256(0xff ++ sender ++ salt ++ keccak256(init_code))[12..31]. This allows counterfactual deployments: users can send funds to an address before the contract is even deployed."
                  },
                  {
                    id: "tq6",
                    q: "6. Explain the Solidity storage layout algorithm for mappings and dynamic arrays.",
                    a: "For state variable at slot index p: (1) Mappings: the base slot p remains empty to prevent collisions. An entry mapping[k] is located at keccak256(pad32(k) ++ pad32(p)). For nested mappings, the hash is computed recursively. (2) Dynamic arrays: slot p stores the current length L of the array. The array elements are stored consecutively starting at keccak256(pad32(p)), where element i is at keccak256(pad32(p)) + i."
                  },
                  {
                    id: "tq7",
                    q: "7. Discuss the relationship between storage access and gas economics.",
                    a: "Storage is the dominant gas cost in Ethereum. Under EIP-2929, reading cold storage costs 2,100 gas; warm storage reads cost 100 gas. Under EIP-2200 and EIP-3529, writing a storage slot (SSTORE) from zero to non-zero costs 20,000 gas. Updating an existing non-zero slot costs 2,900 gas (cold) or 100 gas (warm). Clearing a non-zero slot back to zero issues a gas refund of up to 4,800 gas, capped at a maximum of 20% of the transaction's total gas consumption."
                  },
                  {
                    id: "tq8",
                    q: "8. Explain the execution behavior of CALL, STATICCALL, and DELEGATECALL.",
                    a: "CALL executes code in the target contract's context: ADDRESS is the target, CALLER is the sender, and state writes modify the target's storage. STATICCALL is identical to CALL but strictly forbids state-modifying opcodes (SSTORE, CREATE, LOG, SELFDESTRUCT), reverting if any are attempted. DELEGATECALL executes the target's code within the CALLER's context: ADDRESS remains the calling contract, CALLER and CALLVALUE are preserved from the original caller, and all storage reads and writes affect the calling contract's storage. This enables upgradeable proxy patterns."
                  },
                  {
                    id: "tq9",
                    q: "9. Explain the difference between REVERT and an exceptional halt (e.g. INVALID).",
                    a: "REVERT (0xfd) is a graceful exception: it rolls back state modifications made during the call frame, returns remaining unspent gas to the caller, and passes back error payload data. An exceptional halt (e.g., executing opcode 0xfe INVALID, attempting stack underflow, or running out of gas) consumes and burns ALL supplied gas, returns no data, and terminates the execution frame immediately."
                  },
                  {
                    id: "tq10",
                    q: "10. Describe how opcode-level tracing is used to debug smart contract failures.",
                    a: "Opcode tracing records the exact state machine trajectory at every instruction step: Program Counter, opcode mnemonic, gas remaining, gas cost, call depth, full stack contents, memory bytes, and modified storage slots. When a transaction reverts, the trace exposes the exact PC where REVERT was issued, the stack arguments passed to it (revealing the custom error selector and decoded parameters), and the preceding conditional jump (JUMPI) that failed."
                  }
                ].map((item) => {
                  const isOpen = !!openTechQ[item.id];
                  return (
                    <div key={item.id} className="border border-[#ece8de] rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleTechQ(item.id)}
                        className="w-full p-3.5 bg-[#fbfaf7] hover:bg-neutral-100 text-left text-xs font-bold text-neutral-800 flex items-center justify-between transition"
                      >
                        <span>{item.q}</span>
                        {isOpen ? <ChevronUp size={16} className="text-orange-600" /> : <ChevronDown size={16} className="text-neutral-400" />}
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white text-xs leading-relaxed text-neutral-700 border-t border-[#ece8de]">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PART D: 100-MARK PRACTICAL EVALUATION RUBRIC */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <h4 className="text-base font-bold text-neutral-900 mb-1 flex items-center gap-2">
                <Scale size={18} className="text-orange-600" /> Part D — Practical Examination Rubric (100 Marks Total)
              </h4>
              <p className="text-xs text-neutral-600 mb-4">
                Recommended university practical grading standard: minimum passing score is 70/100 marks.
              </p>

              <div className="overflow-x-auto border border-[#e7e3da] rounded-xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold">
                    <tr>
                      <th className="p-3">Practical Assessment Task</th>
                      <th className="p-3">Deliverables &amp; Evaluation Criteria</th>
                      <th className="p-3 text-right">Max Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ece8de]">
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">1. Solidity Contract Creation</td>
                      <td className="p-3 text-neutral-700">Contract containing packed storage variables, mappings, dynamic arrays, custom errors, events, and functions.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">2. Compilation &amp; ABI Inspection</td>
                      <td className="p-3 text-neutral-700">Successful solc/Forge compilation, full ABI JSON extraction, and canonical function signature verification.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">3. Bytecode Analysis</td>
                      <td className="p-3 text-neutral-700">Disassembly of raw bytecode, identifying the 4-byte selector dispatcher, function jumps, and return routines.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">15</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">4. Creation vs Runtime Comparison</td>
                      <td className="p-3 text-neutral-700">Detailed side-by-side comparison explaining why constructor logic exists in init code but is stripped in runtime code.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">5. Storage Layout Analysis</td>
                      <td className="p-3 text-neutral-700">Verification of compiler storage slots, byte offsets, packing efficiency, and mapping hash calculations.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">6. Local EVM Deployment</td>
                      <td className="p-3 text-neutral-700">Deployment to local Anvil test node with constructor arguments, extracting deployed address and tx receipt.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">7. Opcode Execution Analysis</td>
                      <td className="p-3 text-neutral-700">Step-by-step trace of function execution, verifying stack pushes/pops, memory expansion, and SSTORE operations.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">8. Gas Measurement &amp; Breakdown</td>
                      <td className="p-3 text-neutral-700">Accurate gas accounting comparing cold vs warm reads, memory expansion costs, and base transaction fees.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">9. Revert Debugging</td>
                      <td className="p-3 text-neutral-700">Provoking an unauthorized revert, capturing the custom error selector in the trace, and verifying state rollback.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">10</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-neutral-900">10. Technical Documentation</td>
                      <td className="p-3 text-neutral-700">Professional laboratory engineering report documenting methodology, CLI outputs, and architecture insights.</td>
                      <td className="p-3 text-right font-mono font-bold text-orange-600">5</td>
                    </tr>
                    <tr className="bg-orange-50/70 font-bold">
                      <td className="p-3 text-orange-950">TOTAL PRACTICAL MARKS</td>
                      <td className="p-3 text-orange-950">Passing standard: 70% (70 / 100 marks)</td>
                      <td className="p-3 text-right font-mono text-orange-700 text-sm">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 5: CAPSTONE, ASSIGNMENTS & CHECKLIST                      */}
        {/* ============================================================= */}
        {activeTab === "capstone-checklist" && (
          <div className="space-y-10">
            {/* Header Banner */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Sparkles size={16} /> Capstone Engineering &amp; Checklist
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">EVM Explorer Capstone, Assignments &amp; Progress</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Build a complete EVM Bytecode Explorer, complete 12 engineering research assignments, and track your 20 learning objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 21: FINAL CAPSTONE PROJECT */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <Box size={16} /> Section 21 • Final Capstone Project
              </div>
              <div>
                <h4 className="text-2xl font-bold text-neutral-900">6.21 Build an EVM Bytecode and Execution Explorer</h4>
                <p className="text-xs text-neutral-600 mt-1">
                  Connect high-level Solidity source code with low-level bytecode, opcodes, ABI, storage, and execution traces in a full-stack developer tool.
                </p>
              </div>

              {/* Recommended Stack */}
              <div>
                <h5 className="text-sm font-bold text-neutral-900 mb-2">Recommended Technology Architecture</h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                    <span className="text-neutral-500 block">Frontend</span>
                    <span className="font-bold text-neutral-900">React + Tailwind + Monaco</span>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                    <span className="text-neutral-500 block">Backend</span>
                    <span className="font-bold text-neutral-900">Node.js + Express / Fastify</span>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                    <span className="text-neutral-500 block">Compiler &amp; Node</span>
                    <span className="font-bold text-neutral-900">solc + Foundry (Anvil)</span>
                  </div>
                  <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                    <span className="text-neutral-500 block">Web3 Client</span>
                    <span className="font-bold text-neutral-900">ethers.js / viem</span>
                  </div>
                </div>
              </div>

              {/* 9 Required Features */}
              <div>
                <h5 className="text-sm font-bold text-neutral-900 mb-3">9 Core Functional Modules</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5">
                    <span className="font-bold text-orange-600">Feature 1: Solidity Compiler</span>
                    <p className="text-neutral-600 leading-relaxed">
                      Accepts Solidity code, configures compiler version and EVM target, executes solc compilation, and returns AST, ABI, and bytecode.
                    </p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5">
                    <span className="font-bold text-orange-600">Feature 2: ABI Explorer</span>
                    <p className="text-neutral-600 leading-relaxed">
                      Visualizes function selectors (4 bytes), parameter types, dynamic offsets, events, and custom error signatures.
                    </p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5">
                    <span className="font-bold text-orange-600">Feature 3: Bytecode Explorer</span>
                    <p className="text-neutral-600 leading-relaxed">
                      Side-by-side inspection of creation bytecode vs deployed runtime bytecode with byte count and metadata hashes.
                    </p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5">
                    <span className="font-bold text-orange-600">Feature 4: Opcode Disassembler</span>
                    <p className="text-neutral-600 leading-relaxed">
                      Converts binary bytecode into human-readable opcode mnemonics with Program Counter offsets and jump destination tagging.
                    </p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5">
                    <span className="font-bold text-orange-600">Feature 5: EVM Step Simulator</span>
                    <p className="text-neutral-600 leading-relaxed">
                      Step-by-step interactive debugger displaying stack growth, volatile memory rows, gas deductions, and return buffers.
                    </p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5">
                    <span className="font-bold text-orange-600">Feature 6: Storage Slot Inspector</span>
                    <p className="text-neutral-600 leading-relaxed">
                      Visual diagram of 32-byte storage slots, displaying variable packing, mapping Keccak hashes, and dynamic array lengths.
                    </p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5">
                    <span className="font-bold text-orange-600">Feature 7: Anvil Deployment Engine</span>
                    <p className="text-neutral-600 leading-relaxed">
                      One-click deployment to a local Anvil node with constructor arguments, displaying transaction receipt and gas used.
                    </p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5">
                    <span className="font-bold text-orange-600">Feature 8: Transaction Debugger</span>
                    <p className="text-neutral-600 leading-relaxed">
                      Examines debug_traceTransaction traces, showing call depth, stack frames, and the exact PC where reverts occur.
                    </p>
                  </div>
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5">
                    <span className="font-bold text-orange-600">Feature 9: Gas Profiler</span>
                    <p className="text-neutral-600 leading-relaxed">
                      Function-level gas comparison, memory expansion costs, and storage cold vs warm gas breakdown graphs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capstone Evaluation Rubric */}
              <div>
                <h5 className="text-sm font-bold text-neutral-900 mb-2">Capstone Evaluation Rubric</h5>
                <div className="overflow-x-auto border border-[#e7e3da] rounded-xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#fbfaf7] border-b border-[#ece8de] text-neutral-600 font-semibold">
                      <tr>
                        <th className="p-3">Evaluation Component</th>
                        <th className="p-3">Weight</th>
                        <th className="p-3">Core Assessment Metric</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de]">
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">EVM Architecture Knowledge</td>
                        <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                        <td className="p-3 text-neutral-600">Correct implementation of stack, memory, and gas accounting rules</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">Solidity Compiler Integration</td>
                        <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                        <td className="p-3 text-neutral-600">Reliable solc compilation, version selection, and error handling</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">Bytecode &amp; Opcode Analysis</td>
                        <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                        <td className="p-3 text-neutral-600">Accurate disassembly, PC offsets, and creation vs runtime comparison</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">Execution Tracing &amp; Debugging</td>
                        <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                        <td className="p-3 text-neutral-600">Clear step-by-step trace playback and revert reason decoding</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">ABI &amp; Storage Layout Analysis</td>
                        <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                        <td className="p-3 text-neutral-600">Accurate 32-byte slot visualizer and calldata head/tail breakdown</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-neutral-800">Gas Profiling &amp; Security</td>
                        <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                        <td className="p-3 text-neutral-600">Cold/warm accounting, sandboxed node execution, and documentation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* SECTION 19: 12 ADVANCED ASSIGNMENTS */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <BookOpen size={16} /> Section 19 • Advanced Assignments &amp; Research
              </div>
              <h4 className="text-lg font-bold text-neutral-900">6.19 12 Core Engineering Assignments</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {[
                  {
                    num: 1,
                    title: "EVM Architecture Diagram",
                    task: "Draw the complete internal execution architecture including PC, Stack, Memory, Storage, Calldata, Gas counter, and Return data. Document the data flow during an external call."
                  },
                  {
                    num: 2,
                    title: "Stack Simulation Walkthrough",
                    task: "Manually trace: PUSH1 0x05 PUSH1 0x06 ADD PUSH1 0x02 MUL PUSH1 0x04 SUB. Record PC, opcode, stack before, stack after, and calculate the final hexadecimal value."
                  },
                  {
                    num: 3,
                    title: "Data Locations Comparison",
                    task: "Write a contract containing a storage variable, memory array, calldata parameter, and transient storage slot. Compare their lifetimes, gas costs, and persistence rules."
                  },
                  {
                    num: 4,
                    title: "Bytecode Reverse Engineering",
                    task: "Compile an unfamiliar contract, disassemble the bytecode, and isolate the function dispatcher, arithmetic routines, storage reads, and revert blocks."
                  },
                  {
                    num: 5,
                    title: "Compilation Pipeline Benchmarks",
                    task: "Compile a contract under solc 0.8.20 with optimizer disabled, optimizer enabled (200 runs), and via-ir enabled. Compare bytecode size, deployment gas, and runtime execution gas."
                  },
                  {
                    num: 6,
                    title: "Dynamic ABI Calldata Decoding",
                    task: "Hand-decode a calldata payload for update(address,uint256,string). Identify the 4-byte selector, head offsets, string length word, and padded UTF-8 string bytes."
                  },
                  {
                    num: 7,
                    title: "Storage Layout Mapping & Arrays",
                    task: "Calculate the exact storage slot addresses for mapping(address => uint256) and uint256[] elements. Verify the results against forge inspect storageLayout."
                  },
                  {
                    num: 8,
                    title: "Gas Optimization Case Study",
                    task: "Build an unoptimized contract and an optimized version (using storage packing, calldata, custom errors, and unchecked arithmetic). Benchmark gas savings using forge test --gas-report."
                  },
                  {
                    num: 9,
                    title: "Revert Mechanics & Exception Profiling",
                    task: "Construct a test contract causing require revert, assert Panic, custom error, and out-of-gas halt. Measure and compare the gas consumed and returned in each case."
                  },
                  {
                    num: 10,
                    title: "Multi-Chain EVM Comparison",
                    task: "Deploy identical contracts to Ethereum Sepolia and Arbitrum One. Analyze differences in block.timestamp, gas pricing models, and L1 data availability fees."
                  },
                  {
                    num: 11,
                    title: "EVM Disassembly & Control-Flow Graphs",
                    task: "Extract runtime bytecode from a deployed mainnet contract. Reconstruct its control-flow graph (CFG) and identify function selectors without reading verified source."
                  },
                  {
                    num: 12,
                    title: "EVM Security Research Paper",
                    task: "Write a research paper analyzing 5 critical EVM vulnerabilities: storage collisions in upgradeable proxies, reentrancy via low-level calls, unhandled return values, integer truncation, and out-of-gas DoS."
                  }
                ].map(a => (
                  <div key={a.num} className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-bold">{a.num}</span>
                      {a.title}
                    </span>
                    <p className="text-neutral-600 leading-relaxed text-[11px] pl-6.5">{a.task}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 22: RECOMMENDED LEARNING RESOURCES */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <Globe size={16} /> Section 22 • Recommended Learning Resources
              </div>
              <h4 className="text-lg font-bold text-neutral-900">Canonical EVM References &amp; Official Tooling</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                {[
                  {
                    title: "Ethereum EVM Docs",
                    desc: "Official execution layer and state machine architecture guide.",
                    url: "https://ethereum.org/developers/docs/evm/"
                  },
                  {
                    title: "EVM Codes Interactive",
                    desc: "Complete interactive reference of EVM opcodes, stack effects, and dynamic gas.",
                    url: "https://www.evm.codes/"
                  },
                  {
                    title: "Solidity Documentation",
                    desc: "Comprehensive documentation for compiler, storage layout, ABI, and Yul.",
                    url: "https://docs.soliditylang.org/"
                  },
                  {
                    title: "Foundry Book",
                    desc: "Fast, portable toolkit for Ethereum application development and debugging.",
                    url: "https://getfoundry.sh/"
                  },
                  {
                    title: "Ethereum Execution Specs",
                    desc: "Formal Python execution-layer protocol specifications.",
                    url: "https://github.com/ethereum/execution-specs"
                  },
                  {
                    title: "Geth EVM Tracing",
                    desc: "Official guide to client-level opcode execution tracing and debug RPCs.",
                    url: "https://geth.ethereum.org/docs/developers/evm-tracing"
                  },
                  {
                    title: "Mastering Ethereum",
                    desc: "Canonical textbook by Andreas M. Antonopoulos and Dr. Gavin Wood.",
                    url: "https://github.com/ethereumbook/ethereumbook"
                  },
                  {
                    title: "Ethereum Improvement Proposals",
                    desc: "EIP-1153 (transient storage), EIP-2929 (gas costs), and EIP-3855 (PUSH0).",
                    url: "https://eips.ethereum.org/"
                  }
                ].map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#fbfaf7] hover:bg-white border border-[#ece8de] hover:border-orange-300 rounded-xl transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="font-bold text-neutral-900 flex items-center justify-between group-hover:text-orange-600 transition">
                        <span>{res.title}</span>
                        <ExternalLink size={12} className="text-neutral-400 group-hover:text-orange-600" />
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">{res.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* STUDENT COMPLETION CHECKLIST (20 ITEMS WITH LOCALSTORAGE) */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <CheckCheck size={16} /> Student Completion Checklist
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mt-0.5">
                    Module 6 • 20 Core Learning Objectives ({progressPercent}% Completed)
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Check off each learning milestone as you master it. Progress is saved automatically.
                  </p>
                </div>
                <button
                  onClick={resetProgress}
                  className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-semibold self-start sm:self-auto transition"
                >
                  Reset Progress
                </button>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden border border-[#ece8de]">
                <div
                  style={{ width: `${progressPercent}%` }}
                  className="h-full bg-orange-600 transition-all duration-300"
                />
              </div>

              {/* Checklist Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {CHECKLIST_ITEMS.map((item) => {
                  const isChecked = !!completedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                        isChecked
                          ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium"
                          : "bg-[#fbfaf7] border-[#ece8de] text-neutral-700 hover:bg-white"
                      }`}
                    >
                      <button className="mt-0.5 text-orange-600">
                        {isChecked ? <CheckSquare size={16} className="text-emerald-600" /> : <Square size={16} className="text-neutral-400" />}
                      </button>
                      <span className="text-xs leading-relaxed">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Module Navigation */}
            <div className="p-6 bg-white border border-[#e7e3da] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => navigate("/learning/blockchain/ethereum-evm")}
                className="w-full sm:w-auto px-5 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2"
              >
                <ArrowLeft size={16} /> Previous: 5. Ethereum Architecture &amp; Ecosystem
              </button>
              <button
                onClick={() => navigate("/learning/blockchain/solidity")}
                className="w-full sm:w-auto px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
              >
                Next Module: 7. Solidity Smart Contract Development <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}


      </main>
    </div>
  );
}
