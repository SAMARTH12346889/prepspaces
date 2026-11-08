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

// Pinned Compiler Version (As verified November 8, 2026)
export const SOLIDITY_COMPILER_VERSION = "0.8.38";

export const STUDENT_REGISTRY_SOL = "// SPDX-License-Identifier: MIT pragma solidity 0.8.38; contract StudentRegistry { address public immutable administrator; enum Status { None, Pending, Approved, Rejected } struct Student { bytes32 referenceId; string displayLabel; uint64 registeredAt; Status status; } mapping(address => Student) private students; mapping(bytes32 => address) public referenceOwner; uint256 public totalRegistrations; error Unauthorized(address caller); error AlreadyRegistered(address student); error InvalidReference(); error ReferenceAlreadyUsed(); error InvalidDisplayLabel(); error StudentNotFound(); error InvalidStudentStatus(); event StudentRegistered( address indexed student, bytes32 indexed referenceId, uint256 registeredAt ); event StudentApproved( address indexed student ); event StudentRejected( address indexed student ); event DisplayLabelUpdated( address indexed student, string newLabel ); constructor() { administrator = msg.sender; } modifier onlyAdministrator() { if (msg.sender != administrator) { revert Unauthorized(msg.sender); } _; } function registerStudent( bytes32 referenceId, string calldata displayLabel ) external { if (referenceId == bytes32(0)) { revert InvalidReference(); } if ( bytes(displayLabel).length == 0 || bytes(displayLabel).length > 64 ) { revert InvalidDisplayLabel(); } if ( students[msg.sender].status != Status.None ) { revert AlreadyRegistered(msg.sender); } if ( referenceOwner[referenceId] != address(0) ) { revert ReferenceAlreadyUsed(); } students[msg.sender] = Student({ referenceId: referenceId, displayLabel: displayLabel, registeredAt: uint64(block.timestamp), status: Status.Pending }); referenceOwner[referenceId] = msg.sender; totalRegistrations++; emit StudentRegistered( msg.sender, referenceId, block.timestamp ); } function approveStudent( address studentAddress ) external onlyAdministrator { Student storage student = students[studentAddress]; if (student.status == Status.None) { revert StudentNotFound(); } if (student.status != Status.Pending) { revert InvalidStudentStatus(); } student.status = Status.Approved; emit StudentApproved(studentAddress); } function rejectStudent( address studentAddress ) external onlyAdministrator { Student storage student = students[studentAddress]; if (student.status == Status.None) { revert StudentNotFound(); } if (student.status != Status.Pending) { revert InvalidStudentStatus(); } student.status = Status.Rejected; emit StudentRejected(studentAddress); } function updateDisplayLabel( string calldata newLabel ) external { if (students[msg.sender].status == Status.None) { revert StudentNotFound(); } if ( bytes(newLabel).length == 0 || bytes(newLabel).length > 64 ) { revert InvalidDisplayLabel(); } students[msg.sender].displayLabel = newLabel; emit DisplayLabelUpdated( msg.sender, newLabel ); } function getStudent( address studentAddress ) external view returns (Student memory) { return students[studentAddress]; } function getMyStatus() external view returns (Status) { return students[msg.sender].status; } }";
export const VOTING_SOL = "// SPDX-License-Identifier: MIT pragma solidity 0.8.38; contract Voting { address public immutable administrator; enum Phase { NotStarted, Active, Ended } struct Candidate { uint256 id; string name; uint256 voteCount; bool exists; } mapping(uint256 => Candidate) public candidates; mapping(address => bool) public eligibleVoters; mapping(address => bool) public hasVoted; uint256 public candidateCount; uint256 public startTime; uint256 public endTime; bool public votingStarted; bool public votingEnded; error Unauthorized(address caller); error InvalidCandidate(); error InvalidVoter(); error ElectionAlreadyStarted(); error ElectionNotStarted(); error ElectionNotActive(); error ElectionNotEnded(); error AlreadyVoted(); error InvalidDuration(); error NoCandidates(); error NoVotes(); event CandidateAdded( uint256 indexed candidateId, string name ); event VoterAuthorized( address indexed voter ); event VotingStarted( uint256 startTime, uint256 endTime ); event VoteCast( address indexed voter, uint256 indexed candidateId ); event VotingEnded(); constructor() { administrator = msg.sender; } modifier onlyAdministrator() { if (msg.sender != administrator) { revert Unauthorized(msg.sender); } _; } function addCandidate( string calldata candidateName ) external onlyAdministrator { if (votingStarted) { revert ElectionAlreadyStarted(); } if ( bytes(candidateName).length == 0 || bytes(candidateName).length > 64 ) { revert InvalidCandidate(); } candidateCount++; candidates[candidateCount] = Candidate({ id: candidateCount, name: candidateName, voteCount: 0, exists: true }); emit CandidateAdded( candidateCount, candidateName ); } function authorizeVoter( address voter ) external onlyAdministrator { if (votingStarted) { revert ElectionAlreadyStarted(); } if (voter == address(0)) { revert InvalidVoter(); } if (eligibleVoters[voter]) { revert InvalidVoter(); } eligibleVoters[voter] = true; emit VoterAuthorized(voter); } function startVoting( uint256 durationSeconds ) external onlyAdministrator { if (votingStarted) { revert ElectionAlreadyStarted(); } if (candidateCount == 0) { revert NoCandidates(); } if ( durationSeconds == 0 || durationSeconds > 30 days ) { revert InvalidDuration(); } votingStarted = true; startTime = block.timestamp; endTime = block.timestamp + durationSeconds; emit VotingStarted( startTime, endTime ); } function vote( uint256 candidateId ) external { if (!votingStarted) { revert ElectionNotStarted(); } if ( votingEnded || block.timestamp >= endTime ) { revert ElectionNotActive(); } if ( block.timestamp < startTime ) { revert ElectionNotActive(); } if (!eligibleVoters[msg.sender]) { revert InvalidVoter(); } if (hasVoted[msg.sender]) { revert AlreadyVoted(); } if (!candidates[candidateId].exists) { revert InvalidCandidate(); } hasVoted[msg.sender] = true; candidates[candidateId].voteCount++; emit VoteCast( msg.sender, candidateId ); } function endVoting() external onlyAdministrator { if (!votingStarted) { revert ElectionNotStarted(); } if ( votingEnded || block.timestamp < endTime ) { revert ElectionNotActive(); } votingEnded = true; emit VotingEnded(); } function currentPhase() external view returns (Phase) { if (!votingStarted) { return Phase.NotStarted; } if ( votingEnded || block.timestamp >= endTime ) { return Phase.Ended; } return Phase.Active; } function getCandidate( uint256 candidateId ) external view returns (Candidate memory) { if (!candidates[candidateId].exists) { revert InvalidCandidate(); } return candidates[candidateId]; } function getWinner() external view returns ( uint256 winnerId, string memory winnerName, uint256 winningVotes, bool isTie ) { if (!votingStarted) { revert ElectionNotStarted(); } if (block.timestamp < endTime) { revert ElectionNotEnded(); } uint256 highestVotes; for ( uint256 i = 1; i <= candidateCount; i++ ) { uint256 currentVotes = candidates[i].voteCount; if (currentVotes > highestVotes) { highestVotes = currentVotes; winnerId = i; isTie = false; } else if ( currentVotes == highestVotes && currentVotes > 0 ) { isTie = true; } } if (highestVotes == 0) { revert NoVotes(); } winnerName = candidates[winnerId].name; winningVotes = highestVotes; } }";
export const STUDENT_REGISTRY_TEST_SOL = "// SPDX-License-Identifier: MIT pragma solidity 0.8.38; import {Test} from \"forge-std/Test.sol\"; import {StudentRegistry} from \"../src/StudentRegistry.sol\"; contract StudentRegistryTest is Test { StudentRegistry registry; address alice = address(0x1); address bob = address(0x2); function setUp() public { registry = new StudentRegistry(); } function testRegisterStudent() public { vm.prank(alice); registry.registerStudent( bytes32(\"STUDENT-001\"), \"Student A\" ); ( bytes32 referenceId, string memory label, , StudentRegistry.Status status ) = registry.getStudent(alice); assertEq(referenceId, bytes32(\"STUDENT-001\")); assertEq(label, \"Student A\"); assertEq( uint256(status), uint256(StudentRegistry.Status.Pending) ); } function testDuplicateRegistrationFails() public { vm.startPrank(alice); registry.registerStudent( bytes32(\"STUDENT-001\"), \"Student A\" ); vm.expectRevert( abi.encodeWithSelector( StudentRegistry.AlreadyRegistered.selector, alice ) ); registry.registerStudent( bytes32(\"STUDENT-002\"), \"Student A\" ); vm.stopPrank(); } function testOnlyAdminCanApprove() public { vm.prank(alice); registry.registerStudent( bytes32(\"STUDENT-003\"), \"Student B\" ); vm.expectRevert( abi.encodeWithSelector( StudentRegistry.Unauthorized.selector, bob ) ); vm.prank(bob); registry.approveStudent(alice); } function testAdminCanApprove() public { vm.prank(alice); registry.registerStudent( bytes32(\"STUDENT-004\"), \"Student C\" ); registry.approveStudent(alice); assertEq( uint256(registry.getMyStatus()), uint256(StudentRegistry.Status.None) ); assertEq( uint256( registry.getStudent(alice).status ), uint256(StudentRegistry.Status.Approved) ); } }";
export const VOTING_TEST_SOL = "// SPDX-License-Identifier: MIT pragma solidity 0.8.38; import {Test} from \"forge-std/Test.sol\"; import {Voting} from \"../src/Voting.sol\"; contract VotingTest is Test { Voting voting; address alice = address(0x1); address bob = address(0x2); function setUp() public { voting = new Voting(); voting.addCandidate(\"Candidate A\"); voting.addCandidate(\"Candidate B\"); voting.authorizeVoter(alice); voting.authorizeVoter(bob); voting.startVoting(1 days); } function testVoting() public { vm.prank(alice); voting.vote(1); ( uint256 id, string memory name, uint256 votes, bool exists ) = voting.candidates(1); assertEq(id, 1); assertEq(name, \"Candidate A\"); assertEq(votes, 1); assertTrue(exists); } function testDoubleVotingFails() public { vm.startPrank(alice); voting.vote(1); vm.expectRevert(Voting.AlreadyVoted.selector); voting.vote(2); vm.stopPrank(); } function testUnauthorizedVoterFails() public { vm.expectRevert( Voting.InvalidVoter.selector ); vm.prank(address(0x99)); voting.vote(1); } function testElectionWinner() public { vm.prank(alice); voting.vote(1); vm.prank(bob); voting.vote(1); vm.warp(block.timestamp + 1 days); voting.endVoting(); ( uint256 winnerId, string memory winnerName, uint256 votes, bool tie ) = voting.getWinner(); assertEq(winnerId, 1); assertEq(winnerName, \"Candidate A\"); assertEq(votes, 2); assertFalse(tie); } function testTieDetection() public { vm.prank(alice); voting.vote(1); vm.prank(bob); voting.vote(2); vm.warp(block.timestamp + 1 days); voting.endVoting(); ( , , , bool tie ) = voting.getWinner(); assertTrue(tie); } }";

export default function BlockchainSolidity() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/learning/blockchain/evm-internals");

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
  // Tool 1: Interactive Solidity Contract Simulator & Dispatcher
  // -------------------------------------------------------------
  const [simContract, setSimContract] = useState("StudentRegistry"); // "StudentRegistry" | "Voting"
  const [simCaller, setSimCaller] = useState("admin"); // "admin" (0xf39F...), "alice" (0x7099...), "bob" (0x3C44...)
  
  const CALLER_ADDRESSES = {
    admin: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    alice: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    bob: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
  };

  // Simulated contract state
  const [registryState, setRegistryState] = useState({
    totalRegistrations: 1,
    students: {
      "0x70997970C51812dc3A010C7d01b50e0d17dc79C8": {
        referenceId: "0x53545544454e5430303100000000000000000000000000000000000000000000",
        displayLabel: "Alice Smith",
        registeredAt: 1731050000,
        status: 1 // 0=None, 1=Pending, 2=Approved, 3=Rejected
      }
    },
    references: {
      "0x53545544454e5430303100000000000000000000000000000000000000000000": "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
    }
  });

  const [votingState, setVotingState] = useState({
    candidateCount: 2,
    votingStarted: true,
    votingEnded: false,
    startTime: 1731050000,
    endTime: 1731053600,
    candidates: {
      1: { id: 1, name: "Candidate A (Alice)", voteCount: 1 },
      2: { id: 2, name: "Candidate B (Bob)", voteCount: 0 }
    },
    eligibleVoters: {
      "0x70997970C51812dc3A010C7d01b50e0d17dc79C8": true,
      "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC": true
    },
    hasVoted: {
      "0x70997970C51812dc3A010C7d01b50e0d17dc79C8": true
    }
  });

  const [simLogs, setSimLogs] = useState([
    "Contract deployed by Admin (0xf39F...2266)",
    "Alice registered with ref 'STUDENT001' (Status: Pending)",
    "Voting started: Candidate A vs Candidate B",
    "Alice cast 1 vote for Candidate A"
  ]);
  const [simResult, setSimResult] = useState(null);

  // Dispatch function for StudentRegistry
  const handleRegisterStudent = (refText, label) => {
    const callerAddr = CALLER_ADDRESSES[simCaller];
    if (registryState.students[callerAddr]) {
      setSimResult({ success: false, msg: "revert AlreadyRegistered(" + callerAddr.slice(0, 10) + "...)" });
      return;
    }
    const refHash = "0x" + Array.from(new TextEncoder().encode(refText.padEnd(32, "\0"))).map(b => b.toString(16).padStart(2, "0")).join("").slice(0, 64);
    if (registryState.references[refHash]) {
      setSimResult({ success: false, msg: "revert ReferenceAlreadyUsed()" });
      return;
    }
    setRegistryState(prev => ({
      ...prev,
      totalRegistrations: prev.totalRegistrations + 1,
      students: {
        ...prev.students,
        [callerAddr]: {
          referenceId: refHash,
          displayLabel: label,
          registeredAt: Math.floor(Date.now() / 1000),
          status: 1
        }
      },
      references: { ...prev.references, [refHash]: callerAddr }
    }));
    setSimLogs(prev => ["emit StudentRegistered(" + callerAddr.slice(0, 8) + "..., " + refText + ", now)", ...prev]);
    setSimResult({ success: true, msg: "Success: Registered " + label + " with status Pending" });
  };

  const handleApproveStudent = (targetAddr) => {
    if (simCaller !== "admin") {
      setSimResult({ success: false, msg: "revert Unauthorized(" + CALLER_ADDRESSES[simCaller].slice(0, 10) + "...) - only administrator allowed" });
      return;
    }
    if (!registryState.students[targetAddr]) {
      setSimResult({ success: false, msg: "revert StudentNotFound()" });
      return;
    }
    setRegistryState(prev => ({
      ...prev,
      students: {
        ...prev.students,
        [targetAddr]: { ...prev.students[targetAddr], status: 2 }
      }
    }));
    setSimLogs(prev => ["emit StudentApproved(" + targetAddr.slice(0, 8) + "...)", ...prev]);
    setSimResult({ success: true, msg: "Success: Approved " + targetAddr.slice(0, 10) + "... (Status: Approved)" });
  };

  const handleCastVote = (candidateId) => {
    const callerAddr = CALLER_ADDRESSES[simCaller];
    if (!votingState.votingStarted || votingState.votingEnded) {
      setSimResult({ success: false, msg: "revert ElectionNotActive()" });
      return;
    }
    if (!votingState.eligibleVoters[callerAddr]) {
      setSimResult({ success: false, msg: "revert InvalidVoter(" + callerAddr.slice(0, 10) + "...) - not authorized" });
      return;
    }
    if (votingState.hasVoted[callerAddr]) {
      setSimResult({ success: false, msg: "revert AlreadyVoted() - 1 vote per wallet limit" });
      return;
    }
    if (!votingState.candidates[candidateId]) {
      setSimResult({ success: false, msg: "revert InvalidCandidate()" });
      return;
    }

    setVotingState(prev => ({
      ...prev,
      candidates: {
        ...prev.candidates,
        [candidateId]: { ...prev.candidates[candidateId], voteCount: prev.candidates[candidateId].voteCount + 1 }
      },
      hasVoted: { ...prev.hasVoted, [callerAddr]: true }
    }));
    setSimLogs(prev => ["emit VoteCast(" + callerAddr.slice(0, 8) + "..., Candidate #" + candidateId + ")", ...prev]);
    setSimResult({ success: true, msg: "Success: Vote recorded for " + votingState.candidates[candidateId].name + "!" });
  };

  // -------------------------------------------------------------
  // Tool 2: Data Type & Storage Packing Inspector
  // -------------------------------------------------------------
  const [selectedType, setSelectedType] = useState("uint256");
  const SOLIDITY_TYPES = {
    uint8: { sizeBits: 8, sizeBytes: 1, min: "0", max: "255", defaultVal: "0", packingNote: "Can pack up to 32 uint8 values in a single 32-byte slot" },
    uint16: { sizeBits: 16, sizeBytes: 2, min: "0", max: "65,535", defaultVal: "0", packingNote: "Packs 16 values per 32-byte slot" },
    uint32: { sizeBits: 32, sizeBytes: 4, min: "0", max: "4,294,967,295", defaultVal: "0", packingNote: "Packs 8 values per 32-byte slot; common for timestamps" },
    uint64: { sizeBits: 64, sizeBytes: 8, min: "0", max: "18,446,744,073,709,551,615", defaultVal: "0", packingNote: "Packs 4 values per 32-byte slot" },
    uint128: { sizeBits: 128, sizeBytes: 16, min: "0", max: "3.402 × 10^38", defaultVal: "0", packingNote: "Packs 2 values per 32-byte slot" },
    uint256: { sizeBits: 256, sizeBytes: 32, min: "0", max: "1.157 × 10^77 (2^256 - 1)", defaultVal: "0", packingNote: "Occupies an entire 32-byte slot alone" },
    address: { sizeBits: 160, sizeBytes: 20, min: "0x000...000", max: "0xFFF...FFF", defaultVal: "address(0)", packingNote: "20 bytes; can pack with a uint96 (12 bytes) or bool in the same slot" },
    bool: { sizeBits: 8, sizeBytes: 1, min: "false (0x00)", max: "true (0x01)", defaultVal: "false", packingNote: "1 byte; easily packed with addresses or small uints" },
    bytes32: { sizeBits: 256, sizeBytes: 32, min: "0x00...00", max: "0xFF...FF", defaultVal: "bytes32(0)", packingNote: "Occupies full 32-byte slot; cheaper than string for short identifiers" }
  };

  // -------------------------------------------------------------
  // Tool 3: ETH Denomination & Gas Converter
  // -------------------------------------------------------------
  const [ethAmount, setEthAmount] = useState("1.5");
  const [calcGasUnits, setCalcGasUnits] = useState(65000); // Standard contract interaction
  const [calcGasPriceGwei, setCalcGasPriceGwei] = useState(25);

  const ethConversions = useMemo(() => {
    let ethNum = parseFloat(ethAmount) || 0;
    let weiBig = 0n;
    try {
      weiBig = BigInt(Math.floor(ethNum * 1e18));
    } catch {
      weiBig = 0n;
    }
    const gweiNum = ethNum * 1e9;
    const gasFeeEth = (calcGasUnits * calcGasPriceGwei) / 1e9;
    const gasFeeUsd = gasFeeEth * 3000; // estimated at $3,000/ETH
    return {
      eth: ethNum,
      gwei: gweiNum.toLocaleString(),
      wei: weiBig.toString(),
      gasFeeEth: gasFeeEth.toFixed(6),
      gasFeeUsd: gasFeeUsd.toFixed(2)
    };
  }, [ethAmount, calcGasUnits, calcGasPriceGwei]);

  // -------------------------------------------------------------
  // Tool 4: Event Log & Topic Inspector
  // -------------------------------------------------------------
  const EVENT_PRESETS = [
    {
      sig: "StudentRegistered(address,bytes32,uint256)",
      topic0: "0x3f6280800a74136e4f16b2cf7f7a77e5d2dc3b74ec31f6d34e628fb682669ab5",
      indexed: ["student (address)", "referenceId (bytes32)"],
      unindexed: ["registeredAt (uint256)"],
      desc: "Emitted on registration: Topic 1 = student address, Topic 2 = referenceId, Data = registeredAt timestamp"
    },
    {
      sig: "VoteCast(address,uint256)",
      topic0: "0xa6fb410a768f5667e5ff4f932fb2ceec5b6ff8d752f9b897b7cb347ec8151ea2",
      indexed: ["voter (address)", "candidateId (uint256)"],
      unindexed: [],
      desc: "Emitted when a vote is recorded: Topic 1 = voter address, Topic 2 = candidateId"
    },
    {
      sig: "StudentApproved(address)",
      topic0: "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
      indexed: ["student (address)"],
      unindexed: [],
      desc: "Emitted when administrator approves a registration: Topic 1 = student address"
    }
  ];
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  // -------------------------------------------------------------
  // Section 25: Quiz State (10 MCQs)
  // -------------------------------------------------------------
  const QUIZ_QUESTIONS = [
    {
      id: 1,
      q: "What is Solidity primarily designed and used for?",
      options: [
        { text: "Relational database administration", correct: false },
        { text: "Smart contract development on EVM-compatible blockchains", correct: true },
        { text: "Operating system kernel development", correct: false },
        { text: "Image processing and computer vision", correct: false }
      ],
      explanation: "Solidity is a high-level, statically typed language specifically built to develop smart contracts executing on the Ethereum Virtual Machine (EVM)."
    },
    {
      id: 2,
      q: "Which official compiler converts Solidity source code into EVM bytecode and ABI?",
      options: [
        { text: "javac", correct: false },
        { text: "solc", correct: true },
        { text: "gcc", correct: false },
        { text: "tsc", correct: false }
      ],
      explanation: "solc is the official Solidity compiler, converting source code into ABI, creation bytecode, deployed runtime bytecode, and Yul IR."
    },
    {
      id: 3,
      q: "Which built-in Solidity data type represents a 20-byte Ethereum account or contract identifier?",
      options: [
        { text: "uint256", correct: false },
        { text: "address", correct: true },
        { text: "bytes32", correct: false },
        { text: "string", correct: false }
      ],
      explanation: "The address type represents a 20-byte (160-bit) Ethereum address. Use address payable when the contract needs to transfer ETH to it."
    },
    {
      id: 4,
      q: "Which Solidity data location represents permanent, persistent contract state stored on the blockchain?",
      options: [
        { text: "Memory", correct: false },
        { text: "Calldata", correct: false },
        { text: "Storage", correct: true },
        { text: "Stack", correct: false }
      ],
      explanation: "Storage holds persistent state variables in the contract's 32-byte slot layout across transactions. Memory and calldata are volatile/temporary."
    },
    {
      id: 5,
      q: "Which function visibility modifier allows calls from external accounts, transactions, and internal contract code?",
      options: [
        { text: "private", correct: false },
        { text: "internal", correct: false },
        { text: "public", correct: true },
        { text: "external", correct: false }
      ],
      explanation: "public functions can be invoked both externally (via transactions or message-calls) and internally from within the contract and derived contracts."
    },
    {
      id: 6,
      q: "Which modifier must be declared on a function or constructor to allow it to receive native ETH?",
      options: [
        { text: "view", correct: false },
        { text: "pure", correct: false },
        { text: "payable", correct: true },
        { text: "private", correct: false }
      ],
      explanation: "Without the payable modifier, functions automatically reject transactions that carry non-zero msg.value."
    },
    {
      id: 7,
      q: "What is the primary role of a constructor in a Solidity contract?",
      options: [
        { text: "Read historical event logs from storage", correct: false },
        { text: "Initialize contract state once during contract creation", correct: true },
        { text: "Mine new blocks on the network", correct: false },
        { text: "Delete blockchain transaction history", correct: false }
      ],
      explanation: "A constructor executes exactly once during contract deployment as part of creation bytecode, setting initial state and returning runtime bytecode."
    },
    {
      id: 8,
      q: "Which Solidity data structure stores key-value associations without built-in iteration or length?",
      options: [
        { text: "Array", correct: false },
        { text: "Mapping", correct: true },
        { text: "Enum", correct: false },
        { text: "Modifier", correct: false }
      ],
      explanation: "A mapping(KeyType => ValueType) is a hash table where keys are hashed with slot indices to derive storage locations; keys are not iterable."
    },
    {
      id: 9,
      q: "Which mechanism records structured, searchable information in EVM transaction receipt logs?",
      options: [
        { text: "Events", correct: true },
        { text: "Constructors", correct: false },
        { text: "Local variables", correct: false },
        { text: "While loops", correct: false }
      ],
      explanation: "Events emit logs into transaction receipts (accessible off-chain via eth_getLogs), allowing up to 3 indexed topic parameters."
    },
    {
      id: 10,
      q: "What is the specialized purpose of the receive() external payable function?",
      options: [
        { text: "Handle all external function calls regardless of selector", correct: false },
        { text: "Handle plain ETH transfers sent with empty calldata", correct: true },
        { text: "Iterate mapping keys", correct: false },
        { text: "Deploy child contracts dynamically", correct: false }
      ],
      explanation: "receive() external payable is triggered specifically when a transaction sends ETH with completely empty calldata (e.g. plain wallet transfers)."
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

  // Section 25 Part B: Short Answers expand/collapse state
  const [openShortAnswer, setOpenShortAnswer] = useState({});
  const toggleShortAnswer = (id) => {
    setOpenShortAnswer(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Section 25 Part C: Technical questions expand/collapse state
  const [openTechQ, setOpenTechQ] = useState({});
  const toggleTechQ = (id) => {
    setOpenTechQ(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // -------------------------------------------------------------
  // Student Completion Checklist (26 Items with localStorage)
  // -------------------------------------------------------------
  const CHECKLIST_ITEMS = [
    { id: "m7_1", label: "Understand Solidity purpose and smart contract programming model" },
    { id: "m7_2", label: "Install and configure Solidity compiler 0.8.38 and pinned pragma" },
    { id: "m7_3", label: "Set up VS Code, Foundry, Forge, Cast, and Anvil toolchains" },
    { id: "m7_4", label: "Master contract structure: SPDX, pragma, state variables, functions, modifiers" },
    { id: "m7_5", label: "Learn value types: uint8-uint256, int, bool, address, and bytes32" },
    { id: "m7_6", label: "Understand value vs reference types and storage/memory/calldata locations" },
    { id: "m7_7", label: "Master state, local, and global variables (msg.sender, msg.value, timestamp)" },
    { id: "m7_8", label: "Understand constants (compile-time) and immutable variables (deployment-time)" },
    { id: "m7_9", label: "Implement functions and 4 visibility modifiers (public, external, internal, private)" },
    { id: "m7_10", label: "Master function mutability: view, pure, nonpayable, and payable" },
    { id: "m7_11", label: "Implement contract constructors and base inheritance initialization" },
    { id: "m7_12", label: "Implement function modifiers for access control (onlyOwner, whenActive)" },
    { id: "m7_13", label: "Practice conditionals and loops, and avoid unbounded loop gas DoS" },
    { id: "m7_14", label: "Work with fixed/dynamic arrays, push/pop, delete behavior, and strings" },
    { id: "m7_15", label: "Implement custom user-defined types: enums and structs" },
    { id: "m7_16", label: "Use mappings, nested mappings, and mapping security patterns" },
    { id: "m7_17", label: "Emit and inspect events, indexed topics (up to 3), and receipt logs" },
    { id: "m7_18", label: "Implement error handling using require, revert, assert, and custom errors" },
    { id: "m7_19", label: "Master custom error gas savings over long string revert reasons" },
    { id: "m7_20", label: "Build payable deposit and withdraw functions with checks-effects-interactions" },
    { id: "m7_21", label: "Implement receive() and fallback() functions for empty/unknown calls" },
    { id: "m7_22", label: "Compile and deploy contracts locally to Anvil using forge create" },
    { id: "m7_23", label: "Complete Practical Lab 1: Student Registration System (StudentRegistry.sol)" },
    { id: "m7_24", label: "Complete Practical Lab 2: Decentralized Voting System (Voting.sol)" },
    { id: "m7_25", label: "Write and pass unit and negative tests with Foundry (forge test -vv)" },
    { id: "m7_26", label: "Complete smart contract security assessment and 10-point checklist" }
  ];

  const [completedItems, setCompletedItems] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m7_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheck = (id) => {
    setCompletedItems(prev => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem("prepspaces_blockchain_m7_progress", JSON.stringify(next));
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
      localStorage.removeItem("prepspaces_blockchain_m7_progress");
    } catch {}
  };


  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-28 sm:pb-36">
      {/* Top Contextual Navigation Bar */}
      <ModuleNav track="blockchain" currentModuleId="solidity" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        {/* Module Header Banner */}
        <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 bg-orange-50 border border-orange-200 text-orange-800 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <FileCode size={13} /> Module 7 • Smart Contract Development
            </span>
            <span className="px-2.5 py-1 bg-neutral-100 border border-neutral-200 text-neutral-700 rounded-full text-xs font-semibold">
              University-Level Curriculum
            </span>
            <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-semibold flex items-center gap-1">
              <CheckCircle2 size={13} /> Pinned: Solidity 0.8.38
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Solidity Programming Fundamentals
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
            The foundation of smart contract development for Ethereum and EVM-compatible ecosystems. Master data types, storage slots, value vs reference semantics, function visibilities, state mutabilities, modifiers, custom errors, events, and Foundry test suites through two complete production projects: Student Registration and Decentralized Voting.
          </p>

          {/* Module Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[#ece8de] text-xs">
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Compiler Version</span>
              <span className="font-bold text-orange-600 font-mono">Solidity 0.8.38</span>
            </div>
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Frameworks</span>
              <span className="font-bold text-neutral-900">Foundry (Forge, Cast, Anvil)</span>
            </div>
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Practical Projects</span>
              <span className="font-bold text-neutral-900">StudentRegistry &amp; Voting</span>
            </div>
            <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
              <span className="text-neutral-500 block">Total Curriculum</span>
              <span className="font-bold text-emerald-600">26 Core Sections</span>
            </div>
          </div>
        </div>

        {/* 5-Tab Navigation Controls */}
        <div className="bg-white border border-[#e7e3da] rounded-2xl p-2 shadow-sm mb-8 flex flex-wrap gap-2">
          {[
            { id: "theory", label: "1. Core Theory (7.1–7.21)", icon: BookOpen },
            { id: "interactive-tools", label: "2. Interactive Lab (4 Simulators)", icon: Cpu },
            { id: "labs-code", label: "3. Practical Labs & Tests (7.22–7.24)", icon: Terminal },
            { id: "quiz", label: "4. Knowledge Assessment (7.25)", icon: Award },
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
        {/* TAB 1: CURRICULUM THEORY & CONCEPTS (SECTIONS 7.1 - 7.21)    */}
        {/* ============================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-12">
            {/* 7.1 What is Solidity? */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.1 • Fundamentals &amp; Execution Environment
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.1 What is Solidity?
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.1.1 Definition</h3>
                  <p>
                    Solidity is a statically typed, contract-oriented high-level programming language designed specifically for implementing smart contracts on the Ethereum Virtual Machine (EVM). Influenced by C++, Python, and JavaScript, it enables developers to write verifiable applications that execute deterministically on decentralized state machines.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.1.2 Why Solidity is Important</h3>
                  <p>
                    Solidity serves as the lingua franca of decentralized finance (DeFi), non-fungible tokens (NFTs), tokenization, and decentralized autonomous organizations (DAOs). Contracts written in Solidity govern billions of dollars in digital assets, enforcing immutable rules without trusting centralized intermediaries or escrow agents.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.1.3 Solidity vs Conventional Programming Languages</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Feature</th>
                          <th className="p-3 border-r border-[#e7e3da] text-orange-600">Solidity</th>
                          <th className="p-3 border-r border-[#e7e3da]">JavaScript</th>
                          <th className="p-3">Java</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Primary purpose</td>
                          <td className="p-3 border-r border-[#e7e3da]">Smart contracts &amp; value exchange</td>
                          <td className="p-3 border-r border-[#e7e3da]">Web and client-side applications</td>
                          <td className="p-3">Enterprise &amp; general backend apps</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Execution Runtime</td>
                          <td className="p-3 border-r border-[#e7e3da] font-mono text-orange-700">EVM (256-bit stack)</td>
                          <td className="p-3 border-r border-[#e7e3da]">V8 / Node.js runtime</td>
                          <td className="p-3">JVM (Java Virtual Machine)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Typing Discipline</td>
                          <td className="p-3 border-r border-[#e7e3da]">Static, nominal, strictly enforced</td>
                          <td className="p-3 border-r border-[#e7e3da]">Dynamic, duck typing</td>
                          <td className="p-3">Static, object-oriented</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">State Management</td>
                          <td className="p-3 border-r border-[#e7e3da]">Global, immutable Merkle Patricia Trie</td>
                          <td className="p-3 border-r border-[#e7e3da]">Heap memory &amp; external DB</td>
                          <td className="p-3">Heap memory &amp; external DB</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Execution Cost</td>
                          <td className="p-3 border-r border-[#e7e3da] font-bold text-rose-600">Gas paid in native ETH</td>
                          <td className="p-3 border-r border-[#e7e3da]">Server hardware / CPU cycles</td>
                          <td className="p-3">Server hardware / CPU cycles</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Deployment Target</td>
                          <td className="p-3 border-r border-[#e7e3da]">Decentralized peer-to-peer ledger</td>
                          <td className="p-3 border-r border-[#e7e3da]">Web browsers, cloud VMs, edge</td>
                          <td className="p-3">Cloud containers, physical hosts</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Storage Persistence</td>
                          <td className="p-3 border-r border-[#e7e3da]">Persistent contract storage slots</td>
                          <td className="p-3 border-r border-[#e7e3da]">Ephemeral process life, DB writes</td>
                          <td className="p-3">Ephemeral process life, DB writes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.1.4 Smart Contract Programming Model</h3>
                  <p>
                    Unlike traditional web apps with a frontend talking to a backend server and relational database (<code>React -&gt; Node.js -&gt; PostgreSQL</code>), decentralized dApps use a trust-minimized architecture (<code>React -&gt; Web3 Provider/Wallet -&gt; Solidity Contract -&gt; Ethereum Ledger</code>). Code execution is deterministic and verified by every validating node across the global consensus network.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.1.5 Characteristics of Solidity</h3>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 pl-2">
                    <li><strong>Contract-Oriented:</strong> The contract is the fundamental organizational unit, containing state variables, functions, modifiers, and events.</li>
                    <li><strong>Statically Typed:</strong> Types must be explicitly declared at compile time, eliminating a large class of runtime type errors.</li>
                    <li><strong>Inheritance &amp; Polymorphism:</strong> Supports multiple inheritance using C3 linearization, abstract contracts, and interfaces.</li>
                    <li><strong>Native Cryptographic Primitives:</strong> Built-in support for <code>keccak256</code>, <code>sha256</code>, <code>ripemd160</code>, and <code>ecrecover</code>.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.1.6 First Solidity Program</h3>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                    <pre><code>{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.38;

contract HelloWorld {
    string public message = "Hello, Ethereum!";

    function setMessage(string calldata newMessage) external {
        message = newMessage;
    }
}`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.2 Solidity Compiler Architecture */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.2 • solc &amp; Bytecode Compilation
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.2 Solidity Compiler Architecture
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.2.1 What is solc?</h3>
                  <p>
                    <code>solc</code> is the official command-line compiler for the Solidity language. It translates high-level human-readable Solidity source code into EVM bytecode (creation and runtime bytecode) and generates the Contract Application Binary Interface (ABI) required for frontend integration.
                  </p>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
                  <h3 className="text-base font-bold text-orange-950 mb-1">7.2.2 Pinned Compiler Version: 0.8.38</h3>
                  <p className="text-xs text-orange-900">
                    For this curriculum, use <strong>Solidity 0.8.38</strong>, verified as the active reference release. Pin the exact compiler version using <code>pragma solidity 0.8.38;</code> and configure <code>solc_version = "0.8.38"</code> in <code>foundry.toml</code> to ensure 100% reproducible builds and deterministic bytecode.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.2.3 Why Compiler Version Matters</h3>
                  <p>
                    Solidity adheres to semantic versioning. Major breaking changes occur across minor releases (e.g., 0.8.0 introduced automatic checked arithmetic for overflow/underflow, removing the need for OpenZeppelin SafeMath). Floating pragmas (<code>^0.8.0</code>) can result in unexpected compilation behavior or differences between development and production bytecode.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.2.4 Compile a Solidity Contract</h3>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                    <pre><code>{`# Direct solc CLI compilation
solc --bin --abi --optimize --optimize-runs 200 src/HelloWorld.sol -o out/

# Foundry Forge compilation
forge build`}</code></pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.2.5 Compiler Optimization &amp; Yul Pipeline</h3>
                  <p>
                    The optimizer simplifies complex expressions, inline small functions, removes dead code, and packs adjacent constants. Configuring <code>runs = 200</code> balances deployment gas cost against execution cost. For contracts called thousands of times (e.g., AMM pool routers), higher runs (e.g. <code>runs = 10000</code>) optimize runtime gas at the expense of slightly larger bytecode.
                  </p>
                </div>
              </div>
            </section>

            {/* 7.3 Setting Up Solidity Development Tools */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.3 • Modern Tooling &amp; Environment Setup
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.3 Setting Up Solidity Development Tools
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.3.1 Required Tooling Ecosystem</h3>
                  <p>
                    Modern smart contract engineering relies on fast, deterministic Rust-based tools. We standardize on <strong>Foundry</strong>, the industry-standard modular toolkit consisting of:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 mt-2 pl-2">
                    <li><strong>Forge:</strong> Ultra-fast Ethereum testing framework (tests written directly in Solidity).</li>
                    <li><strong>Cast:</strong> Swiss army knife for interacting with EVM RPCs, encoding calldata, and querying contracts.</li>
                    <li><strong>Anvil:</strong> Local testnet node with instant transaction mining and programmable state manipulation.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.3.3 Installing Foundry &amp; Initializing Project</h3>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                    <pre><code>{`# 1. Install Foundryup (Linux/macOS/WSL)
curl -L https://foundry.paradigm.xyz | bash
foundryup

# 2. Initialize a new Foundry workspace
forge init solidity_course_lab
cd solidity_course_lab

# 3. Configure foundry.toml (Pinned to Solidity 0.8.38)
cat << 'EOF' > foundry.toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc_version = "0.8.38"
evm_version = "cancun"
optimizer = true
optimizer_runs = 200
EOF`}</code></pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.3.8 Starting Anvil Local Node &amp; Deploying</h3>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                    <pre><code>{`# Terminal 1: Spin up local node
anvil

# Terminal 2: Deploy contract with Forge
forge create src/StudentRegistry.sol:StudentRegistry \
  --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \
  --rpc-url http://127.0.0.1:8545`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.4 Solidity Contract Structure */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.4 • Contract Anatomy
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.4 Solidity Contract Structure
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.4.1 Anatomy of a Smart Contract</h3>
                  <p>
                    A standard Solidity source file is structured into well-defined components ordered according to official style guidelines:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-xs text-neutral-700 mt-2 pl-2">
                    <li><strong>SPDX License Identifier:</strong> Machine-readable open-source licensing declaration (e.g. <code>// SPDX-License-Identifier: MIT</code>).</li>
                    <li><strong>Pragma Statement:</strong> Directs the compiler version requirements (e.g. <code>pragma solidity 0.8.38;</code>).</li>
                    <li><strong>Contract Declaration:</strong> Identifies the contract name and inherited parent contracts (<code>contract StudentRegistry is AccessControl</code>).</li>
                    <li><strong>Type Declarations:</strong> Enums and custom structs.</li>
                    <li><strong>State Variables:</strong> Persistent variables stored in contract storage slots.</li>
                    <li><strong>Events &amp; Custom Errors:</strong> Signatures for logging and gas-efficient failure reverts.</li>
                    <li><strong>Modifiers:</strong> Declarative function prerequisites and access gates.</li>
                    <li><strong>Functions:</strong> Constructor, receive, fallback, external, public, internal, and private methods.</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* 7.5 Variables and Data Type Fundamentals */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.5 • Primitive &amp; Reference Types
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.5 Variables and Data Type Fundamentals
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.5.2 &amp; 7.5.3 Integer Data Types and Ranges</h3>
                  <p>
                    Solidity provides signed (<code>int8</code> to <code>int256</code>) and unsigned (<code>uint8</code> to <code>uint256</code>) integers in increments of 8 bits. Unsigned integers range from \(0\) to \(2^N - 1\). Signed integers range from \(-2^{N-1}\) to \(2^{N-1} - 1\).
                  </p>
                  
                  <div className="overflow-x-auto mt-3">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Type</th>
                          <th className="p-3 border-r border-[#e7e3da]">Bit Width</th>
                          <th className="p-3 border-r border-[#e7e3da]">Minimum Value</th>
                          <th className="p-3">Maximum Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">uint8</td>
                          <td className="p-3 border-r border-[#e7e3da]">8 bits (1 byte)</td>
                          <td className="p-3 border-r border-[#e7e3da]">0</td>
                          <td className="p-3">255</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">uint16</td>
                          <td className="p-3 border-r border-[#e7e3da]">16 bits (2 bytes)</td>
                          <td className="p-3 border-r border-[#e7e3da]">0</td>
                          <td className="p-3">65,535</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">uint32</td>
                          <td className="p-3 border-r border-[#e7e3da]">32 bits (4 bytes)</td>
                          <td className="p-3 border-r border-[#e7e3da]">0</td>
                          <td className="p-3">4,294,967,295</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">uint64</td>
                          <td className="p-3 border-r border-[#e7e3da]">64 bits (8 bytes)</td>
                          <td className="p-3 border-r border-[#e7e3da]">0</td>
                          <td className="p-3">18,446,744,073,709,551,615 (2^64 - 1)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">uint256</td>
                          <td className="p-3 border-r border-[#e7e3da]">256 bits (32 bytes)</td>
                          <td className="p-3 border-r border-[#e7e3da]">0</td>
                          <td className="p-3">~1.1579 × 10^77 (2^256 - 1)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">int8</td>
                          <td className="p-3 border-r border-[#e7e3da]">8 bits (1 byte)</td>
                          <td className="p-3 border-r border-[#e7e3da]">-128</td>
                          <td className="p-3">127</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">int256</td>
                          <td className="p-3 border-r border-[#e7e3da]">256 bits (32 bytes)</td>
                          <td className="p-3 border-r border-[#e7e3da]">-2^255</td>
                          <td className="p-3">2^255 - 1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.5.5 Address and Address Payable</h3>
                  <p>
                    An <code>address</code> holds a 20-byte value (160 bits), corresponding to an Ethereum account or contract address. <code>address payable</code> includes additional methods: <code>transfer(uint256)</code> and <code>send(uint256)</code>. Since Solidity 0.8, conversion from <code>address</code> to <code>address payable</code> requires explicit casting via <code>payable(addr)</code>.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.5.10 Default Values in Solidity</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Data Type</th>
                          <th className="p-3">Default Value (Uninitialized State)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] font-mono">
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">uint256 / int256</td>
                          <td className="p-3">0</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">bool</td>
                          <td className="p-3">false</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">address</td>
                          <td className="p-3">address(0) (0x0000000000000000000000000000000000000000)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">string</td>
                          <td className="p-3">"" (Empty string, length 0)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">bytes32</td>
                          <td className="p-3">bytes32(0) (32 null bytes)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">enum</td>
                          <td className="p-3">First declared enum member (index 0)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">mapping</td>
                          <td className="p-3">All keys map to the default value of the value type</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">dynamic array</td>
                          <td className="p-3">[] (Empty array, length 0)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.6 Understanding Value and Reference Semantics */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.6 • Data Locations &amp; Memory Semantics
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.6 Understanding Value and Reference Semantics
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.6.3 Understanding Data Locations: storage, memory, calldata</h3>
                  <p>
                    Every complex type (arrays, structs, strings) requires an explicit data location:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 mt-2 pl-2">
                    <li><strong>storage:</strong> Persistent on-chain state stored in 32-byte slots. Modifying a storage pointer mutates contract state directly on the blockchain.</li>
                    <li><strong>memory:</strong> Temporary, mutable byte array allocated in RAM during EVM execution. Destroyed when the function call finishes.</li>
                    <li><strong>calldata:</strong> Non-modifiable, non-allocated byte array containing function call arguments. Cheapest location for external function parameters because it avoids copying data to memory.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.6.6 Value Types vs Reference Types Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Property</th>
                          <th className="p-3 border-r border-[#e7e3da]">Value Types</th>
                          <th className="p-3">Reference Types</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Assignment behavior</td>
                          <td className="p-3 border-r border-[#e7e3da]">Value is completely copied</td>
                          <td className="p-3">Depends on data location (pointer vs copy)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Data Types</td>
                          <td className="p-3 border-r border-[#e7e3da] font-mono">uint, int, bool, address, bytes32</td>
                          <td className="p-3 font-mono">arrays, structs, mapping, string, bytes</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Location Keyword Required</td>
                          <td className="p-3 border-r border-[#e7e3da]">No (Stored on stack / in-place)</td>
                          <td className="p-3 font-bold text-orange-600">Yes (storage, memory, calldata)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Typical Pitfall</td>
                          <td className="p-3 border-r border-[#e7e3da]">Arithmetic truncation on downcast</td>
                          <td className="p-3 text-rose-600 font-semibold">Accidental in-place mutation of storage via pointers</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.7 Variable Scope and Lifetime */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.7 • Scope &amp; EVM Global Variables
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.7 Variable Scope and Lifetime
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.7.3 EVM Global Variables &amp; Execution Context</h3>
                  <div className="overflow-x-auto mt-2">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Global Variable</th>
                          <th className="p-3 border-r border-[#e7e3da]">Type</th>
                          <th className="p-3">Description &amp; Security Considerations</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de] font-mono">
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">msg.sender</td>
                          <td className="p-3 border-r border-[#e7e3da]">address</td>
                          <td className="p-3 font-sans">Immediate sender of the current call (contract or EOA). Standard for access control.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">msg.value</td>
                          <td className="p-3 border-r border-[#e7e3da]">uint256</td>
                          <td className="p-3 font-sans">Amount of Wei sent with the call. Requires the function to be marked <code>payable</code>.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-rose-600 border-r border-[#e7e3da]">tx.origin</td>
                          <td className="p-3 border-r border-[#e7e3da]">address</td>
                          <td className="p-3 font-sans"><strong className="text-rose-600">Caution:</strong> The EOA that originated the transaction. Never use for authorization (susceptible to phishing attacks).</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">block.timestamp</td>
                          <td className="p-3 border-r border-[#e7e3da]">uint256</td>
                          <td className="p-3 font-sans">Current block timestamp (seconds since Unix epoch). Can be manipulated by validators within ~15s bounds.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">block.number</td>
                          <td className="p-3 border-r border-[#e7e3da]">uint256</td>
                          <td className="p-3 font-sans">Current block height in the blockchain ledger.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">gasleft()</td>
                          <td className="p-3 border-r border-[#e7e3da]">returns (uint256)</td>
                          <td className="p-3 font-sans">Remaining gas available for the current execution frame.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.8 Constants and Immutable Storage */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.8 • Gas Optimization Patterns
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.8 Constants and Immutable Storage
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.8.1 &amp; 7.8.2 Constant vs Immutable</h3>
                  <p>
                    Standard state variables occupy 32-byte storage slots (read cost 2,100 gas via <code>SLOAD</code>). <strong>constant</strong> and <strong>immutable</strong> variables completely bypass storage slots, saving substantial gas.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                    <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                      <tr>
                        <th className="p-3 border-r border-[#e7e3da]">Feature</th>
                        <th className="p-3 border-r border-[#e7e3da]">constant</th>
                        <th className="p-3">immutable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de]">
                      <tr>
                        <td className="p-3 font-semibold border-r border-[#e7e3da]">Initialization Point</td>
                        <td className="p-3 border-r border-[#e7e3da]">Inline at declaration (compile time)</td>
                        <td className="p-3">Inside constructor at deployment time</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold border-r border-[#e7e3da]">Modifiable Later?</td>
                        <td className="p-3 border-r border-[#e7e3da]">Never</td>
                        <td className="p-3">Never after constructor finishes</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold border-r border-[#e7e3da]">Storage Slot Allocated?</td>
                        <td className="p-3 border-r border-[#e7e3da] font-bold text-emerald-600">No (Replaced inline by compiler)</td>
                        <td className="p-3 font-bold text-emerald-600">No (Injected directly into runtime bytecode)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold border-r border-[#e7e3da]">Typical Use Case</td>
                        <td className="p-3 border-r border-[#e7e3da]">Mathematical constants, max supply, decimals</td>
                        <td className="p-3">Administrator address, oracle address, duration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 7.9 Solidity Functions */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.9 • Function Architecture &amp; Visibility
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.9 Solidity Functions &amp; Visibility Matrix
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.9.6 Function Visibility Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Visibility</th>
                          <th className="p-3 border-r border-[#e7e3da]">Inside Contract</th>
                          <th className="p-3 border-r border-[#e7e3da]">Derived Contracts</th>
                          <th className="p-3 border-r border-[#e7e3da]">External Callers</th>
                          <th className="p-3">Calldata Handling</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">public</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                          <td className="p-3">Parameters copied to memory for internal calls</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">external</td>
                          <td className="p-3 border-r border-[#e7e3da] text-stone-500">Only via this.f()</td>
                          <td className="p-3 border-r border-[#e7e3da] text-stone-500">Only via this.f()</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                          <td className="p-3 font-semibold text-emerald-700">Cheapest: reads directly from calldata</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">internal</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                          <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">No</td>
                          <td className="p-3">JUMP label within bytecode; zero ABI overhead</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">private</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                          <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">No</td>
                          <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">No</td>
                          <td className="p-3">Restricted strictly to the declaring contract</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.10 Function Mutability */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.10 • State Mutability
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.10 Function Mutability: view, pure, nonpayable, payable
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                    <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                      <tr>
                        <th className="p-3 border-r border-[#e7e3da]">Mutability</th>
                        <th className="p-3 border-r border-[#e7e3da]">Reads Blockchain State?</th>
                        <th className="p-3 border-r border-[#e7e3da]">Modifies Blockchain State?</th>
                        <th className="p-3 border-r border-[#e7e3da]">Accepts Ether (msg.value)?</th>
                        <th className="p-3">Invocation Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ece8de]">
                      <tr>
                        <td className="p-3 font-bold text-blue-600 border-r border-[#e7e3da]">view</td>
                        <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes (SLOAD)</td>
                        <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">No (STATICCALL)</td>
                        <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">No</td>
                        <td className="p-3 font-mono">eth_call (Free, off-chain)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-emerald-600 border-r border-[#e7e3da]">pure</td>
                        <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">No</td>
                        <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">No</td>
                        <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">No</td>
                        <td className="p-3 font-mono">eth_call (Free, off-chain)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">default (nonpayable)</td>
                        <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                        <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes (SSTORE)</td>
                        <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">No (Reverts if msg.value &gt; 0)</td>
                        <td className="p-3 font-mono">eth_sendRawTransaction</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">payable</td>
                        <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                        <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                        <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes (Deposits ETH)</td>
                        <td className="p-3 font-mono">eth_sendRawTransaction</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 7.11 & 7.12 Constructors and Modifiers */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Sections 7.11 &amp; 7.12 • Lifecycle &amp; Modifiers
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.11 Constructors &amp; 7.12 Modifiers for Access Control
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.11 Constructors</h3>
                  <p>
                    A constructor runs exactly once when a contract is deployed (during the <code>CREATE</code> or <code>CREATE2</code> opcode). Its code executes initialization logic, sets immutable variables, and is discarded from the deployed runtime bytecode.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.12 Function Modifiers &amp; The Merge Point (_;)</h3>
                  <p>
                    Modifiers wrap function execution to enforce prerequisites declaratively. The merge symbol (<code>_;</code>) specifies where the modified function body is inserted:
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed mt-2">
                    <pre><code>{`modifier onlyAdministrator() {
    if (msg.sender != administrator) {
        revert Unauthorized(msg.sender);
    }
    _; // Modified function body executes here
}`}</code></pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.12.7 Reentrancy Guard Pattern</h3>
                  <p>
                    To defend against reentrancy attacks where a malicious recipient re-calls the withdrawing function before state balances update, use the Checks-Effects-Interactions pattern or a reentrancy mutex modifier:
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed mt-2">
                    <pre><code>{`uint256 private _status = 1; // 1 = NOT_ENTERED, 2 = ENTERED

modifier nonReentrant() {
    require(_status == 1, "ReentrancyGuard: reentrant call");
    _status = 2;
    _;
    _status = 1;
}`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.13, 7.14, 7.15 Control Structures, Arrays, Enums & Structs */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Sections 7.13 – 7.15 • Collections &amp; Compound Types
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.13 Control Structures, 7.14 Arrays/Strings, 7.15 Enums &amp; Structs
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.13.7 Gas Considerations with Loops</h3>
                  <p className="text-rose-600 font-semibold">
                    Warning: Never iterate over an unbounded dynamic array in Solidity. As array length grows, transaction execution gas can exceed the block gas limit (30,000,000 gas), permanently locking the contract function in a Denial of Service (DoS) condition.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.14.9 Strings vs Bytes Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Property</th>
                          <th className="p-3 border-r border-[#e7e3da]">bytes32</th>
                          <th className="p-3 border-r border-[#e7e3da]">bytes (Dynamic)</th>
                          <th className="p-3">string</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Storage Size</td>
                          <td className="p-3 border-r border-[#e7e3da] font-bold text-emerald-600">Exactly 1 slot (32 bytes)</td>
                          <td className="p-3 border-r border-[#e7e3da]">Slot holds length + data in keccak slot</td>
                          <td className="p-3">Slot holds length + UTF-8 bytes</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Gas Efficiency</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Highest</td>
                          <td className="p-3 border-r border-[#e7e3da]">Moderate</td>
                          <td className="p-3 text-stone-500">Lower (No direct slice/index)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Index Access</td>
                          <td className="p-3 border-r border-[#e7e3da]">b[i] supported</td>
                          <td className="p-3 border-r border-[#e7e3da]">b[i] supported</td>
                          <td className="p-3 text-rose-600 font-semibold">Requires bytes(s)[i] casting</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.15.8 Enum vs Struct Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Property</th>
                          <th className="p-3 border-r border-[#e7e3da]">enum</th>
                          <th className="p-3">struct</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Representation</td>
                          <td className="p-3 border-r border-[#e7e3da]">Underlying integer (uint8)</td>
                          <td className="p-3">Collection of heterogeneous fields</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Purpose</td>
                          <td className="p-3 border-r border-[#e7e3da]">Finite state machine tracking</td>
                          <td className="p-3">Complex domain object modeling</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Storage Size</td>
                          <td className="p-3 border-r border-[#e7e3da]">1 byte (packs with adjacent fields)</td>
                          <td className="p-3">Depends on field layout &amp; packing rules</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.16 Solidity Mapping Architecture */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.16 • Storage Layout &amp; Hash Slots
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.16 Solidity Mapping Architecture
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.16.2 How Mappings Work Internally</h3>
                  <p>
                    A mapping does not store keys or keep track of length. Instead, any key's storage location is calculated mathematically using Keccak-256 hashing:
                  </p>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed my-2">
                    <pre><code>{`slot_address = keccak256(abi.encode(key, mapping_declaration_slot))`}</code></pre>
                  </div>
                  <p>
                    Because keys are not enumerated and length is undefined, mappings cannot be iterated over directly without maintaining an auxiliary tracking array.
                  </p>
                </div>
              </div>
            </section>

            {/* 7.17 Solidity Events and Blockchain Logs */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.17 • Event Logging &amp; Off-Chain Indexing
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.17 Solidity Events and Blockchain Logs
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.17.4 Indexed Parameters and Topics</h3>
                  <p>
                    Up to three parameters in an event can be marked <code>indexed</code>. The EVM generates <code>LOG0</code> to <code>LOG4</code> opcodes:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 mt-1 pl-2">
                    <li><strong>Topic 0:</strong> Keccak-256 hash of the event signature (e.g., <code>keccak256("StudentRegistered(address,bytes32,uint256)")</code>).</li>
                    <li><strong>Topics 1–3:</strong> 32-byte values of the indexed parameters, stored in the Bloom filter for rapid RPC queries.</li>
                    <li><strong>Data Field:</strong> ABI-encoded bytes of non-indexed parameters.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.17.7 Events vs Storage Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Feature</th>
                          <th className="p-3 border-r border-[#e7e3da]">Event Logs</th>
                          <th className="p-3">Contract Storage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Gas Cost</td>
                          <td className="p-3 border-r border-[#e7e3da] font-bold text-emerald-600">~375 gas base + 8 gas/byte</td>
                          <td className="p-3 font-bold text-rose-600">20,000 gas initial write (SSTORE)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Read Access from Solidity</td>
                          <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-semibold">No (Invisible to smart contracts)</td>
                          <td className="p-3 text-emerald-600 font-bold">Yes (Any contract function can read)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Off-Chain Indexing</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Optimal for Subgraphs &amp; frontends</td>
                          <td className="p-3">Requires explicit getter calls</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.18 require, revert, assert and Custom Errors */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.18 • Error Handling &amp; Gas Optimization
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.18 require, revert, assert and Custom Errors
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.18.6 Error Mechanisms Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Mechanism</th>
                          <th className="p-3 border-r border-[#e7e3da]">EVM Opcode</th>
                          <th className="p-3 border-r border-[#e7e3da]">Gas Refunded?</th>
                          <th className="p-3">Recommended Use Case</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-bold text-orange-600 border-r border-[#e7e3da]">Custom Error (revert Error())</td>
                          <td className="p-3 border-r border-[#e7e3da] font-mono">REVERT (0xFD)</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes (All unused gas)</td>
                          <td className="p-3 font-semibold text-emerald-700">Best Practice: Minimal bytecode + dynamic error params</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-neutral-800 border-r border-[#e7e3da]">require(cond, "string")</td>
                          <td className="p-3 border-r border-[#e7e3da] font-mono">REVERT (0xFD)</td>
                          <td className="p-3 border-r border-[#e7e3da] text-emerald-600 font-bold">Yes</td>
                          <td className="p-3 text-stone-500">Legacy: String message stores costly bytes in runtime code</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-rose-600 border-r border-[#e7e3da]">assert(cond)</td>
                          <td className="p-3 border-r border-[#e7e3da] font-mono">INVALID / Panic(0x01)</td>
                          <td className="p-3 border-r border-[#e7e3da] text-rose-600 font-bold">Consumes all gas (historically)</td>
                          <td className="p-3 text-stone-700">Internal invariant testing; should never trigger in production</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.19 & 7.20 ETH Payments and Fallback Architecture */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Sections 7.19 &amp; 7.20 • Ether Transfers &amp; Fallback
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.19 ETH Payments &amp; 7.20 receive() vs fallback()
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.19.3 Ether Denomination Units</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono my-2">
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <span className="text-orange-600 font-bold block">1 wei</span>
                      <span>1 (Smallest unit)</span>
                    </div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <span className="text-orange-600 font-bold block">1 gwei</span>
                      <span>10^9 wei (1,000,000,000)</span>
                    </div>
                    <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl">
                      <span className="text-orange-600 font-bold block">1 ether</span>
                      <span>10^18 wei</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.20.5 receive() vs fallback() Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Condition</th>
                          <th className="p-3 border-r border-[#e7e3da]">Executed Function</th>
                          <th className="p-3">Calldata &amp; Payment Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">msg.data is empty &amp; ETH sent</td>
                          <td className="p-3 border-r border-[#e7e3da] font-mono text-orange-600 font-bold">receive() external payable</td>
                          <td className="p-3">Must exist; if missing, falls back to fallback()</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">msg.data is not empty &amp; selector unmatched</td>
                          <td className="p-3 border-r border-[#e7e3da] font-mono text-blue-600 font-bold">fallback() external [payable]</td>
                          <td className="p-3">Executed on proxy delegatecalls or unknown function calls</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">Neither function defined &amp; ETH sent</td>
                          <td className="p-3 border-r border-[#e7e3da] font-bold text-rose-600">Transaction Reverts</td>
                          <td className="p-3">Contract rejects plain Ether transfers</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.21 Compiling, Testing and Deploying Solidity Contracts */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.21 • Deployment &amp; RPC Interaction
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.21 Compiling, Testing and Deploying Solidity Contracts
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <p>
                  Deploying smart contracts requires compile-time artifact generation followed by an on-chain transaction. Using Foundry's CLI suite:
                </p>
                <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                  <pre><code>{`# 1. Compile all contracts in project
forge build

# 2. Deploy to local Anvil node
forge create src/StudentRegistry.sol:StudentRegistry \
  --rpc-url http://127.0.0.1:8545 \
  --private-key $PRIVATE_KEY

# 3. Read totalRegistrations (eth_call)
cast call <CONTRACT_ADDRESS> "totalRegistrations()(uint256)" --rpc-url http://127.0.0.1:8545

# 4. Send transaction to register student (eth_sendRawTransaction)
cast send <CONTRACT_ADDRESS> "registerStudent(bytes32,string)" \
  "0x53545544454e5430303100000000000000000000000000000000000000000000" \
  "Alice Smith" \
  --private-key $PRIVATE_KEY \
  --rpc-url http://127.0.0.1:8545`}</code></pre>
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
            {/* Tool 1: Interactive Solidity Contract Simulator */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Play size={16} /> Simulator 1: Solidity State Machine &amp; Dispatcher
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">Live Smart Contract Dispatcher &amp; Event Logger</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Simulate function execution, modifier access control (onlyAdministrator), custom errors, and event emissions for the two lab contracts.
                  </p>
                </div>
                {/* Contract Switcher */}
                <div className="flex items-center gap-2 bg-[#fbfaf7] border border-[#ece8de] p-1 rounded-xl">
                  {["StudentRegistry", "Voting"].map(cName => (
                    <button
                      key={cName}
                      onClick={() => { setSimContract(cName); setSimResult(null); }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        simContract === cName ? "bg-orange-600 text-white shadow-2xs" : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      {cName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Caller Identity Selector */}
              <div className="mt-4 p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-700">Active Caller (msg.sender):</span>
                  <div className="flex gap-1.5">
                    {[
                      { id: "admin", label: "Admin (Deployer)" },
                      { id: "alice", label: "Alice (Student)" },
                      { id: "bob", label: "Bob (Voter)" }
                    ].map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSimCaller(c.id)}
                        className={`px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition ${
                          simCaller === c.id
                            ? "bg-orange-50 border-orange-300 text-orange-950 font-bold"
                            : "bg-white border-[#ece8de] text-neutral-600 hover:bg-neutral-50"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="font-mono text-[11px] text-neutral-500">
                  {CALLER_ADDRESSES[simCaller]}
                </div>
              </div>

              {/* Contract Functions Interface */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-5">
                {/* Left: Action Buttons & Forms */}
                <div className="lg:col-span-7 space-y-4">
                  {simContract === "StudentRegistry" ? (
                    <div className="space-y-4">
                      {/* Register Student Form */}
                      <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-3">
                        <span className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                          <Code size={14} className="text-orange-600" /> registerStudent(bytes32 referenceId, string displayLabel)
                        </span>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <input
                            type="text"
                            id="reg_ref"
                            defaultValue="STUDENT-002"
                            placeholder="Reference ID"
                            className="flex-1 p-2 bg-white border border-[#ece8de] rounded-lg text-xs font-mono"
                          />
                          <input
                            type="text"
                            id="reg_label"
                            defaultValue="Bob Jenkins"
                            placeholder="Display Label"
                            className="flex-1 p-2 bg-white border border-[#ece8de] rounded-lg text-xs font-mono"
                          />
                          <button
                            onClick={() => {
                              const ref = document.getElementById("reg_ref")?.value || "STUDENT-002";
                              const lbl = document.getElementById("reg_label")?.value || "Bob Jenkins";
                              handleRegisterStudent(ref, lbl);
                            }}
                            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold transition shadow-2xs"
                          >
                            Execute
                          </button>
                        </div>
                        <span className="text-[10px] text-neutral-500 block">
                          Creates a student record with status Pending. Fails if caller is already registered or reference is reused.
                        </span>
                      </div>

                      {/* Admin Approve / Reject */}
                      <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-2">
                        <span className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-orange-600" /> approveStudent(address studentAddress) [onlyAdministrator]
                        </span>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => handleApproveStudent(CALLER_ADDRESSES.alice)}
                            className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition"
                          >
                            Approve Alice ({CALLER_ADDRESSES.alice.slice(0, 8)}...)
                          </button>
                          <button
                            onClick={() => handleApproveStudent(CALLER_ADDRESSES.bob)}
                            className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition"
                          >
                            Approve Bob ({CALLER_ADDRESSES.bob.slice(0, 8)}...)
                          </button>
                        </div>
                        <span className="text-[10px] text-neutral-500 block">
                          Only executable when caller is Administrator. Reverts with Unauthorized if called by Alice or Bob.
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Voting Actions */}
                      <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-3">
                        <span className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="text-orange-600" /> vote(uint256 candidateId) [1 Vote per Wallet]
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.values(votingState.candidates).map((cand) => (
                            <div key={cand.id} className="p-3 bg-white border border-[#ece8de] rounded-lg flex flex-col justify-between gap-2">
                              <div>
                                <span className="font-bold text-xs text-neutral-900">#{cand.id}: {cand.name}</span>
                                <span className="text-[11px] font-mono text-orange-600 block mt-0.5">{cand.voteCount} votes</span>
                              </div>
                              <button
                                onClick={() => handleCastVote(cand.id)}
                                className="w-full py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded text-xs font-bold transition shadow-2xs"
                              >
                                Cast Vote
                              </button>
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] text-neutral-500 block">
                          Requires active election and authorized voter. Enforces hasVoted[msg.sender] check.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Call Output Banner */}
                  {simResult && (
                    <div className={`p-3 rounded-xl border text-xs flex items-center gap-2 ${
                      simResult.success
                        ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-medium"
                        : "bg-red-50 border-red-300 text-red-950 font-medium"
                    }`}>
                      {simResult.success ? <CheckCircle2 size={16} className="text-emerald-600 shrink-0" /> : <AlertTriangle size={16} className="text-red-600 shrink-0" />}
                      <span className="font-mono">{simResult.msg}</span>
                    </div>
                  )}
                </div>

                {/* Right: Contract State & Event Stream */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Current State Summary */}
                  <div className="p-4 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-xs space-y-2">
                    <span className="font-bold text-neutral-800 flex items-center justify-between pb-1 border-b border-[#ece8de]">
                      <span>CURRENT STORAGE STATE</span>
                      <span className="text-orange-600 font-mono text-[10px]">{simContract}</span>
                    </span>
                    {simContract === "StudentRegistry" ? (
                      <div className="space-y-1 font-mono text-[11px] text-neutral-700">
                        <div>totalRegistrations: <span className="font-bold text-neutral-900">{registryState.totalRegistrations}</span></div>
                        <div>Alice Status: <span className="font-bold text-emerald-700">{registryState.students[CALLER_ADDRESSES.alice]?.status === 2 ? "Approved" : "Pending"}</span></div>
                        <div>Bob Registered: <span className="font-bold">{registryState.students[CALLER_ADDRESSES.bob] ? "Yes" : "No"}</span></div>
                      </div>
                    ) : (
                      <div className="space-y-1 font-mono text-[11px] text-neutral-700">
                        <div>Phase: <span className="font-bold text-emerald-700">Active (1 hr duration)</span></div>
                        <div>Candidate 1 Votes: <span className="font-bold text-neutral-900">{votingState.candidates[1].voteCount}</span></div>
                        <div>Candidate 2 Votes: <span className="font-bold text-neutral-900">{votingState.candidates[2].voteCount}</span></div>
                        <div>Alice Has Voted: <span className="font-bold">{votingState.hasVoted[CALLER_ADDRESSES.alice] ? "Yes" : "No"}</span></div>
                        <div>Bob Has Voted: <span className="font-bold">{votingState.hasVoted[CALLER_ADDRESSES.bob] ? "Yes" : "No"}</span></div>
                      </div>
                    )}
                  </div>

                  {/* Emitted Events Terminal */}
                  <div className="p-4 bg-neutral-950 text-neutral-200 rounded-xl font-mono text-[11px] border border-neutral-800">
                    <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800 mb-2">
                      <span className="text-neutral-400 font-bold flex items-center gap-1.5">
                        <Terminal size={12} className="text-orange-400" /> EMITTED TRANSACTION LOGS
                      </span>
                      <span className="text-[10px] text-neutral-500">Live RPC Event Stream</span>
                    </div>
                    <div className="space-y-1 max-h-36 overflow-y-auto">
                      {simLogs.map((log, idx) => (
                        <div key={idx} className="text-neutral-300">
                          <span className="text-orange-400">&gt;</span> {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tool 2: Solidity Data Type & Storage Packing Inspector */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Database size={16} /> Simulator 2: Solidity Data Types &amp; Packing Inspector
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">Value Type Specifications &amp; Byte Boundaries</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Inspect bit-width, signed and unsigned min/max ranges, zero default values, and how Solidity packs variables into 32-byte slots.
                  </p>
                </div>
              </div>

              {/* Type Selection Pills */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {Object.keys(SOLIDITY_TYPES).map(tName => (
                  <button
                    key={tName}
                    onClick={() => setSelectedType(tName)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition ${
                      selectedType === tName
                        ? "bg-orange-50 border-orange-300 text-orange-950 font-bold"
                        : "bg-[#fbfaf7] border-[#ece8de] text-neutral-700 hover:bg-white"
                    }`}
                  >
                    {tName}
                  </button>
                ))}
              </div>

              {/* Selected Type Specs Card */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-4 text-xs">
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                  <span className="text-[11px] text-neutral-500 block">Bit Width / Byte Size</span>
                  <span className="text-base font-bold font-mono text-neutral-900">
                    {SOLIDITY_TYPES[selectedType].sizeBits} bits ({SOLIDITY_TYPES[selectedType].sizeBytes} {SOLIDITY_TYPES[selectedType].sizeBytes === 1 ? "byte" : "bytes"})
                  </span>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center">
                  <span className="text-[11px] text-neutral-500 block">Default Zero Value</span>
                  <span className="text-base font-bold font-mono text-neutral-900">
                    {SOLIDITY_TYPES[selectedType].defaultVal}
                  </span>
                </div>
                <div className="p-3 bg-[#fbfaf7] border border-[#ece8de] rounded-xl text-center md:col-span-2">
                  <span className="text-[11px] text-neutral-500 block">Value Range [Min .. Max]</span>
                  <span className="text-xs font-bold font-mono text-neutral-900 break-all">
                    [{SOLIDITY_TYPES[selectedType].min} .. {SOLIDITY_TYPES[selectedType].max}]
                  </span>
                </div>
              </div>

              <div className="mt-3 p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-950">
                <strong>Storage Slot Packing Rule:</strong> {SOLIDITY_TYPES[selectedType].packingNote}. In Solidity, consecutive state variables are packed into 32-byte slots from right to left (low-order bytes first).
              </div>
            </div>

            {/* Tool 3: ETH Denomination & Gas Converter */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Coins size={16} /> Simulator 3: Currency Denominations &amp; Payable Gas Fee Calculator
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">Wei, Gwei &amp; Ether Conversion Engine</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Smart contracts calculate value strictly in Wei (10^18 Wei = 1 Ether). Calculate transaction gas costs and attached msg.value.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">Ether Amount (ETH)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={ethAmount}
                    onChange={(e) => setEthAmount(e.target.value)}
                    className="w-full p-2.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs text-neutral-900 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">Gas Units Used</label>
                  <input
                    type="number"
                    value={calcGasUnits}
                    onChange={(e) => setCalcGasUnits(Number(e.target.value))}
                    className="w-full p-2.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs text-neutral-900 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">Gas Price (Gwei)</label>
                  <input
                    type="number"
                    value={calcGasPriceGwei}
                    onChange={(e) => setCalcGasPriceGwei(Number(e.target.value))}
                    className="w-full p-2.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl font-mono text-xs text-neutral-900 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Conversion Output Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs font-mono">
                <div className="p-3 bg-neutral-950 text-neutral-200 rounded-xl border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">IN WEI (10^18)</span>
                  <span className="text-emerald-400 font-bold break-all">{ethConversions.wei} wei</span>
                </div>
                <div className="p-3 bg-neutral-950 text-neutral-200 rounded-xl border border-neutral-800">
                  <span className="text-neutral-500 block text-[10px]">IN GWEI (10^9)</span>
                  <span className="text-blue-400 font-bold">{ethConversions.gwei} gwei</span>
                </div>
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl text-orange-950">
                  <span className="text-orange-700 block text-[10px] font-sans font-semibold">TOTAL TRANSACTION GAS COST</span>
                  <span className="text-orange-600 font-bold text-base">{ethConversions.gasFeeEth} ETH (~${ethConversions.gasFeeUsd})</span>
                </div>
              </div>
            </div>

            {/* Tool 4: Event Log & Topic Inspector */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#ece8de] gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                    <Hash size={16} /> Simulator 4: Event Signature, Topics &amp; Log Structure
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">EVM Event Logging &amp; Topic Decomposition</h3>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Explore how events are stored in transaction receipts: Topic 0 (Keccak-256 signature hash), up to 3 indexed topics, and ABI data bytes.
                  </p>
                </div>
              </div>

              {/* Event Presets */}
              <div className="flex flex-wrap gap-2 mt-4">
                {EVENT_PRESETS.map((ev, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedEventIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition ${
                      selectedEventIndex === idx
                        ? "bg-orange-50 border-orange-300 text-orange-950 font-bold"
                        : "bg-[#fbfaf7] border-[#ece8de] text-neutral-700 hover:bg-white"
                    }`}
                  >
                    {ev.sig.split("(")[0]}
                  </button>
                ))}
              </div>

              {/* Event Breakdown Card */}
              <div className="mt-4 p-4 bg-neutral-950 text-neutral-200 rounded-xl font-mono text-xs border border-neutral-800 space-y-2.5">
                <div>
                  <span className="text-neutral-500">// Canonical Event Signature:</span>
                  <div className="text-orange-400 font-bold">{EVENT_PRESETS[selectedEventIndex].sig}</div>
                </div>
                <div>
                  <span className="text-neutral-500">// Topic 0 (keccak256 hash of signature):</span>
                  <div className="text-neutral-200 break-all">{EVENT_PRESETS[selectedEventIndex].topic0}</div>
                </div>
                <div>
                  <span className="text-neutral-500">// Indexed Topics (Topics 1..3 - Searchable):</span>
                  {EVENT_PRESETS[selectedEventIndex].indexed.length === 0 ? (
                    <div className="text-neutral-500 italic">None</div>
                  ) : (
                    <div className="space-y-1">
                      {EVENT_PRESETS[selectedEventIndex].indexed.map((p, i) => (
                        <div key={i} className="text-blue-400">Topic {i + 1}: {p}</div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-neutral-500">// Data Field (Non-indexed parameters - ABI encoded):</span>
                  <div className="text-emerald-400">
                    {EVENT_PRESETS[selectedEventIndex].unindexed.length > 0
                      ? EVENT_PRESETS[selectedEventIndex].unindexed.join(", ")
                      : "0x (Empty)"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 3: PRACTICAL LABS & TESTING (SECTIONS 7.22 - 7.24)        */}
        {/* ============================================================= */}
        {activeTab === "labs-code" && (
          <div className="space-y-12">
            {/* 7.22 Project 1: Student Registration Smart Contract */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                    Section 7.22 • Practical Project 1
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                    Student Registration Smart Contract (StudentRegistry.sol)
                  </h2>
                </div>
                <button
                  onClick={() => copyCode("student-reg-sol", STUDENT_REGISTRY_SOL)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e7e3da] bg-[#fbfaf7] text-xs font-bold text-neutral-700 hover:text-orange-600 transition cursor-pointer self-start sm:self-auto"
                >
                  {copiedSnippet === "student-reg-sol" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedSnippet === "student-reg-sol" ? "Copied Contract" : "Copy StudentRegistry.sol"}</span>
                </button>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                This production-grade smart contract implements a decentralized university student registry. It enforces strict administrator access control, custom error reversions, bytes32 indexed reference validation, and state transition event emissions.
              </p>

              {/* Contract Code Block */}
              <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed max-h-96">
                <pre><code>{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.38;

contract StudentRegistry {
    address public immutable administrator;

    enum Status { None, Pending, Approved, Rejected }

    struct Student {
        bytes32 referenceId;
        string displayLabel;
        uint64 registeredAt;
        Status status;
    }

    mapping(address => Student) private students;
    mapping(bytes32 => address) public referenceOwner;
    uint256 public totalRegistrations;

    error Unauthorized(address caller);
    error AlreadyRegistered(address student);
    error InvalidReference();
    error ReferenceAlreadyUsed();
    error InvalidDisplayLabel();
    error StudentNotFound();
    error InvalidStudentStatus();

    event StudentRegistered(address indexed student, bytes32 indexed referenceId, uint256 registeredAt);
    event StudentApproved(address indexed student);
    event StudentRejected(address indexed student);
    event DisplayLabelUpdated(address indexed student, string newLabel);

    constructor() {
        administrator = msg.sender;
    }

    modifier onlyAdministrator() {
        if (msg.sender != administrator) {
            revert Unauthorized(msg.sender);
        }
        _;
    }

    function registerStudent(bytes32 referenceId, string calldata displayLabel) external {
        if (referenceId == bytes32(0)) revert InvalidReference();
        if (bytes(displayLabel).length == 0 || bytes(displayLabel).length > 64) revert InvalidDisplayLabel();
        if (students[msg.sender].status != Status.None) revert AlreadyRegistered(msg.sender);
        if (referenceOwner[referenceId] != address(0)) revert ReferenceAlreadyUsed();

        students[msg.sender] = Student({
            referenceId: referenceId,
            displayLabel: displayLabel,
            registeredAt: uint64(block.timestamp),
            status: Status.Pending
        });

        referenceOwner[referenceId] = msg.sender;
        totalRegistrations++;

        emit StudentRegistered(msg.sender, referenceId, block.timestamp);
    }

    function approveStudent(address studentAddress) external onlyAdministrator {
        Student storage student = students[studentAddress];
        if (student.status == Status.None) revert StudentNotFound();
        if (student.status != Status.Pending) revert InvalidStudentStatus();

        student.status = Status.Approved;
        emit StudentApproved(studentAddress);
    }

    function rejectStudent(address studentAddress) external onlyAdministrator {
        Student storage student = students[studentAddress];
        if (student.status == Status.None) revert StudentNotFound();
        if (student.status != Status.Pending) revert InvalidStudentStatus();

        student.status = Status.Rejected;
        emit StudentRejected(studentAddress);
    }

    function updateDisplayLabel(string calldata newLabel) external {
        if (students[msg.sender].status == Status.None) revert StudentNotFound();
        if (bytes(newLabel).length == 0 || bytes(newLabel).length > 64) revert InvalidDisplayLabel();

        students[msg.sender].displayLabel = newLabel;
        emit DisplayLabelUpdated(msg.sender, newLabel);
    }

    function getStudent(address studentAddress) external view returns (Student memory) {
        return students[studentAddress];
    }

    function getMyStatus() external view returns (Status) {
        return students[msg.sender].status;
    }
}`}</code></pre>
              </div>

              {/* Step-by-Step 9-Step Verification Workflow */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-neutral-900">Step-by-Step Local Deployment &amp; RPC Verification Workflow (9 Steps)</h3>
                
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5 font-mono">
                    <span className="font-bold text-orange-600 block font-sans">Step 1: Launch Local Anvil Blockchain Node</span>
                    <p className="font-sans text-neutral-600">Spin up an instant local EVM state machine on port 8545 with 10 pre-funded test accounts.</p>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">anvil</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5 font-mono">
                    <span className="font-bold text-orange-600 block font-sans">Step 2: Configure Environment Variables</span>
                    <p className="font-sans text-neutral-600">Export private keys for Admin (Account 0) and Alice (Account 1).</p>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">export ADMIN_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
export ALICE_KEY=0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
export RPC=http://127.0.0.1:8545</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5 font-mono">
                    <span className="font-bold text-orange-600 block font-sans">Step 3: Deploy StudentRegistry with Forge</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">forge create src/StudentRegistry.sol:StudentRegistry --private-key $ADMIN_KEY --rpc-url $RPC
# Export deployed address
export REGISTRY_ADDR=&lt;DEPLOYED_CONTRACT_ADDRESS&gt;</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5 font-mono">
                    <span className="font-bold text-orange-600 block font-sans">Step 4: Query Initial Registrations Count</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast call $REGISTRY_ADDR "totalRegistrations()(uint256)" --rpc-url $RPC
# Output: 0</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5 font-mono">
                    <span className="font-bold text-orange-600 block font-sans">Step 5: Alice Registers As a Student</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $REGISTRY_ADDR "registerStudent(bytes32,string)" \
  "0x53545544454e5430303100000000000000000000000000000000000000000000" "Alice Smith" \
  --private-key $ALICE_KEY --rpc-url $RPC</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5 font-mono">
                    <span className="font-bold text-orange-600 block font-sans">Step 6: Query Alice's Student Record</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast call $REGISTRY_ADDR "getStudent(address)((bytes32,string,uint64,uint8))" 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 --rpc-url $RPC
# Output: (0x5354..., "Alice Smith", 1731..., 1 [Pending])</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5 font-mono">
                    <span className="font-bold text-orange-600 block font-sans">Step 7: Admin Approves Alice's Enrollment</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $REGISTRY_ADDR "approveStudent(address)" 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 \
  --private-key $ADMIN_KEY --rpc-url $RPC</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5 font-mono">
                    <span className="font-bold text-rose-600 block font-sans">Step 8: Verify Unauthorized Caller Rejection</span>
                    <p className="font-sans text-neutral-600">Attempt to call approveStudent from Alice's key. The EVM reverts with custom error Unauthorized(0x7099...).</p>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $REGISTRY_ADDR "approveStudent(address)" 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 \
  --private-key $ALICE_KEY --rpc-url $RPC
# Transaction Reverted: Custom Error Unauthorized(0x7099...)</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1.5 font-mono">
                    <span className="font-bold text-orange-600 block font-sans">Step 9: Inspect Emitted Event Logs in Receipt</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast receipt &lt;TX_HASH&gt; --rpc-url $RPC</code>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.23 Project 2: Decentralized Voting System */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                    Section 7.23 • Practical Project 2
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                    Decentralized Voting System (Voting.sol)
                  </h2>
                </div>
                <button
                  onClick={() => copyCode("voting-sol", VOTING_SOL)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e7e3da] bg-[#fbfaf7] text-xs font-bold text-neutral-700 hover:text-orange-600 transition cursor-pointer self-start sm:self-auto"
                >
                  {copiedSnippet === "voting-sol" ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copiedSnippet === "voting-sol" ? "Copied Contract" : "Copy Voting.sol"}</span>
                </button>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                This contract implements an audited on-chain election system. It features administrator registration of candidates, voter authorization, an active voting window with timestamp bounds, one-vote-per-voter enforcement, and automatic tie detection.
              </p>

              {/* Voting Contract Code Block */}
              <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed max-h-96">
                <pre><code>{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.38;

contract Voting {
    address public immutable administrator;

    enum Phase { NotStarted, Active, Ended }

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
        bool exists;
    }

    mapping(uint256 => Candidate) public candidates;
    mapping(address => bool) public eligibleVoters;
    mapping(address => bool) public hasVoted;

    uint256 public candidateCount;
    uint256 public startTime;
    uint256 public endTime;
    bool public votingStarted;
    bool public votingEnded;

    error Unauthorized(address caller);
    error InvalidCandidate();
    error InvalidVoter();
    error ElectionAlreadyStarted();
    error ElectionNotStarted();
    error ElectionNotActive();
    error ElectionNotEnded();
    error AlreadyVoted();
    error InvalidDuration();
    error NoCandidates();
    error NoVotes();

    event CandidateAdded(uint256 indexed candidateId, string name);
    event VoterAuthorized(address indexed voter);
    event VotingStarted(uint256 startTime, uint256 endTime);
    event VoteCast(address indexed voter, uint256 indexed candidateId);
    event VotingEnded();

    constructor() {
        administrator = msg.sender;
    }

    modifier onlyAdministrator() {
        if (msg.sender != administrator) {
            revert Unauthorized(msg.sender);
        }
        _;
    }

    function addCandidate(string calldata candidateName) external onlyAdministrator {
        if (votingStarted) revert ElectionAlreadyStarted();
        if (bytes(candidateName).length == 0 || bytes(candidateName).length > 64) revert InvalidCandidate();

        candidateCount++;
        candidates[candidateCount] = Candidate({
            id: candidateCount,
            name: candidateName,
            voteCount: 0,
            exists: true
        });

        emit CandidateAdded(candidateCount, candidateName);
    }

    function authorizeVoter(address voter) external onlyAdministrator {
        if (votingStarted) revert ElectionAlreadyStarted();
        if (voter == address(0) || eligibleVoters[voter]) revert InvalidVoter();

        eligibleVoters[voter] = true;
        emit VoterAuthorized(voter);
    }

    function startVoting(uint256 durationSeconds) external onlyAdministrator {
        if (votingStarted) revert ElectionAlreadyStarted();
        if (candidateCount == 0) revert NoCandidates();
        if (durationSeconds == 0 || durationSeconds > 30 days) revert InvalidDuration();

        votingStarted = true;
        startTime = block.timestamp;
        endTime = block.timestamp + durationSeconds;

        emit VotingStarted(startTime, endTime);
    }

    function vote(uint256 candidateId) external {
        if (!votingStarted) revert ElectionNotStarted();
        if (votingEnded || block.timestamp >= endTime || block.timestamp < startTime) revert ElectionNotActive();
        if (!eligibleVoters[msg.sender]) revert InvalidVoter();
        if (hasVoted[msg.sender]) revert AlreadyVoted();
        if (!candidates[candidateId].exists) revert InvalidCandidate();

        hasVoted[msg.sender] = true;
        candidates[candidateId].voteCount++;

        emit VoteCast(msg.sender, candidateId);
    }

    function endVoting() external onlyAdministrator {
        if (!votingStarted) revert ElectionNotStarted();
        if (votingEnded || block.timestamp < endTime) revert ElectionNotActive();

        votingEnded = true;
        emit VotingEnded();
    }

    function currentPhase() external view returns (Phase) {
        if (!votingStarted) return Phase.NotStarted;
        if (votingEnded || block.timestamp >= endTime) return Phase.Ended;
        return Phase.Active;
    }

    function getCandidate(uint256 candidateId) external view returns (Candidate memory) {
        if (!candidates[candidateId].exists) revert InvalidCandidate();
        return candidates[candidateId];
    }

    function getWinner() external view returns (
        uint256 winnerId,
        string memory winnerName,
        uint256 winningVotes,
        bool isTie
    ) {
        if (!votingStarted) revert ElectionNotStarted();
        if (block.timestamp < endTime) revert ElectionNotEnded();

        uint256 highestVotes;
        for (uint256 i = 1; i <= candidateCount; i++) {
            uint256 currentVotes = candidates[i].voteCount;
            if (currentVotes > highestVotes) {
                highestVotes = currentVotes;
                winnerId = i;
                isTie = false;
            } else if (currentVotes == highestVotes && currentVotes > 0) {
                isTie = true;
            }
        }

        if (highestVotes == 0) revert NoVotes();

        winnerName = candidates[winnerId].name;
        winningVotes = highestVotes;
    }
}`}</code></pre>
              </div>

              {/* 11-Step Local Testing Workflow for Voting */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-neutral-900">Step-by-Step Election Lifecycle Workflow (11 Steps)</h3>
                
                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-orange-600 block font-sans">1. Deploy Contract</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">forge create src/Voting.sol:Voting --private-key $ADMIN_KEY --rpc-url $RPC
export VOTING_ADDR=&lt;DEPLOYED_ADDRESS&gt;</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-orange-600 block font-sans">2. Register Candidates</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $VOTING_ADDR "addCandidate(string)" "Alice" --private-key $ADMIN_KEY --rpc-url $RPC
cast send $VOTING_ADDR "addCandidate(string)" "Bob" --private-key $ADMIN_KEY --rpc-url $RPC</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-orange-600 block font-sans">3. Authorize Eligible Voters</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $VOTING_ADDR "authorizeVoter(address)" 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 --private-key $ADMIN_KEY --rpc-url $RPC
cast send $VOTING_ADDR "authorizeVoter(address)" 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC --private-key $ADMIN_KEY --rpc-url $RPC</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-orange-600 block font-sans">4. Start 1-Day Election Window</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $VOTING_ADDR "startVoting(uint256)" 86400 --private-key $ADMIN_KEY --rpc-url $RPC</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-orange-600 block font-sans">5. Voter Alice Casts Ballot for Candidate 1</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $VOTING_ADDR "vote(uint256)" 1 --private-key $ALICE_KEY --rpc-url $RPC</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-rose-600 block font-sans">6. Verify Double-Voting Prevention</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $VOTING_ADDR "vote(uint256)" 2 --private-key $ALICE_KEY --rpc-url $RPC
# Reverted with Custom Error AlreadyVoted()</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-orange-600 block font-sans">7. Voter Bob Casts Ballot for Candidate 1</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $VOTING_ADDR "vote(uint256)" 1 --private-key $BOB_KEY --rpc-url $RPC</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-orange-600 block font-sans">8. Warp EVM Timestamp Forward 24 Hours</span>
                    <p className="font-sans text-neutral-600">Simulate time passing on the Anvil local chain using RPC calls.</p>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast rpc evm_increaseTime 86400 --rpc-url $RPC
cast rpc evm_mine --rpc-url $RPC</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-orange-600 block font-sans">9. Finalize Election</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast send $VOTING_ADDR "endVoting()" --private-key $ADMIN_KEY --rpc-url $RPC</code>
                  </div>

                  <div className="p-3.5 bg-[#fbfaf7] border border-[#ece8de] rounded-xl space-y-1">
                    <span className="font-bold text-emerald-600 block font-sans">10. Query Winning Candidate &amp; Tallies</span>
                    <code className="bg-stone-900 text-stone-100 p-2 rounded block">cast call $VOTING_ADDR "getWinner()(uint256,string,uint256,bool)" --rpc-url $RPC
# Output: (1, "Alice", 2, false)</code>
                  </div>
                </div>
              </div>
            </section>

            {/* 7.24 Solidity Testing and Secure Development */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.24 • Automated Testing &amp; Security Auditing
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  7.24 Solidity Testing &amp; Security Verification
                </h2>
              </div>

              <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1">7.24.2 &amp; 7.24.3 Automated Foundry Test Suites</h3>
                  <p>
                    Foundry tests are written natively in Solidity, using Forge standard library assertions (<code>assertEq</code>, <code>assertTrue</code>, <code>assertFalse</code>) and VM cheatcodes (<code>vm.prank</code>, <code>vm.expectRevert</code>, <code>vm.warp</code>).
                  </p>
                </div>

                {/* StudentRegistry Test Suite */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold font-mono text-xs text-neutral-800">test/StudentRegistry.t.sol</span>
                    <button
                      onClick={() => copyCode("reg-test-sol", STUDENT_REGISTRY_TEST_SOL)}
                      className="text-xs text-orange-600 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy size={12} /> Copy Test
                    </button>
                  </div>
                  <div className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed max-h-64">
                    <pre><code>{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.38;

import {Test} from "forge-std/Test.sol";
import {StudentRegistry} from "../src/StudentRegistry.sol";

contract StudentRegistryTest is Test {
    StudentRegistry registry;
    address alice = address(0x1);
    address bob = address(0x2);

    function setUp() public {
        registry = new StudentRegistry();
    }

    function testRegisterStudent() public {
        vm.prank(alice);
        registry.registerStudent(bytes32("STUDENT-001"), "Student A");
        (bytes32 referenceId, string memory label, , StudentRegistry.Status status) = registry.getStudent(alice);
        assertEq(referenceId, bytes32("STUDENT-001"));
        assertEq(label, "Student A");
        assertEq(uint256(status), uint256(StudentRegistry.Status.Pending));
    }

    function testDuplicateRegistrationFails() public {
        vm.startPrank(alice);
        registry.registerStudent(bytes32("STUDENT-001"), "Student A");
        vm.expectRevert(abi.encodeWithSelector(StudentRegistry.AlreadyRegistered.selector, alice));
        registry.registerStudent(bytes32("STUDENT-002"), "Student A");
        vm.stopPrank();
    }

    function testOnlyAdminCanApprove() public {
        vm.prank(alice);
        registry.registerStudent(bytes32("STUDENT-003"), "Student B");
        vm.expectRevert(abi.encodeWithSelector(StudentRegistry.Unauthorized.selector, bob));
        vm.prank(bob);
        registry.approveStudent(alice);
    }

    function testAdminCanApprove() public {
        vm.prank(alice);
        registry.registerStudent(bytes32("STUDENT-004"), "Student C");
        registry.approveStudent(alice);
        assertEq(uint256(registry.getStudent(alice).status), uint256(StudentRegistry.Status.Approved));
    }
}`}</code></pre>
                  </div>
                </div>

                {/* 8 Important Test Categories */}
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.24.5 Important Test Categories</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                      <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                        <tr>
                          <th className="p-3 border-r border-[#e7e3da]">Category</th>
                          <th className="p-3 border-r border-[#e7e3da]">Purpose</th>
                          <th className="p-3">Foundry Cheatcode / Assertion Pattern</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ece8de]">
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">1. Unit Tests</td>
                          <td className="p-3 border-r border-[#e7e3da]">Verify state updates and happy paths</td>
                          <td className="p-3 font-mono">assertEq(actual, expected)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">2. Edge Cases</td>
                          <td className="p-3 border-r border-[#e7e3da]">Test 0 values, max bounds, ties</td>
                          <td className="p-3 font-mono">type(uint256).max, address(0)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">3. Revert Validation</td>
                          <td className="p-3 border-r border-[#e7e3da]">Confirm unauthorized actions revert</td>
                          <td className="p-3 font-mono">vm.expectRevert(CustomError.selector)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">4. Access Control</td>
                          <td className="p-3 border-r border-[#e7e3da]">Impersonate unauthorized callers</td>
                          <td className="p-3 font-mono">vm.prank(unauthorizedUser)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">5. Event Verification</td>
                          <td className="p-3 border-r border-[#e7e3da]">Validate emitted log topics and data</td>
                          <td className="p-3 font-mono">vm.expectEmit(true, true, false, true)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">6. Time Warping</td>
                          <td className="p-3 border-r border-[#e7e3da]">Advance block timestamp past deadlines</td>
                          <td className="p-3 font-mono">vm.warp(block.timestamp + 1 days)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">7. Gas Benchmarking</td>
                          <td className="p-3 border-r border-[#e7e3da]">Track deployment and invocation costs</td>
                          <td className="p-3 font-mono">forge test --gas-report</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold border-r border-[#e7e3da]">8. Fuzz Testing</td>
                          <td className="p-3 border-r border-[#e7e3da]">Execute with random inputs generated by Forge</td>
                          <td className="p-3 font-mono">function testFuzz(uint256 x) public</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 10-Point Security Checklist */}
                <div className="pt-2">
                  <h3 className="text-base font-bold text-neutral-900 mb-2">7.24.6 Smart Contract Security Checklist (10 Tenets)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">1. Access Control</span>
                      <p className="text-orange-900">Enforce modifiers or role checks on every state-mutating function.</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">2. Reentrancy Protection</span>
                      <p className="text-orange-900">Apply Checks-Effects-Interactions and nonReentrant mutex modifiers before external calls.</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">3. Arithmetic Safety</span>
                      <p className="text-orange-900">Rely on Solidity 0.8+ default checked math; use <code>{"unchecked { ... }"}</code> only when provably safe.</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">4. Input Validation</span>
                      <p className="text-orange-900">Verify all string lengths, non-zero addresses, and valid enum ranges immediately.</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">5. Timestamp Assumptions</span>
                      <p className="text-orange-900">Assume block.timestamp can drift ±15 seconds; never rely on it for fine-grained randomness.</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">6. Denial of Service (DoS)</span>
                      <p className="text-orange-900">Avoid unbounded array iterations; implement pull-over-push withdrawal patterns.</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">7. Privacy on Public Ledgers</span>
                      <p className="text-orange-900">Private state variables are readable by anyone via RPC eth_getStorageAt; never store secrets.</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">8. External Call Failures</span>
                      <p className="text-orange-900">Always check the boolean return of low-level <code>{'address.call{value: ...}("")'}</code>.</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">9. Event Completeness</span>
                      <p className="text-orange-900">Emit events for all key state mutations to enable reliable off-chain monitoring.</p>
                    </div>
                    <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl space-y-1">
                      <span className="font-bold text-orange-950 block">10. Pinned Compiler Version</span>
                      <p className="text-orange-900">Pin solc version (0.8.38) across pragma and foundry.toml to guarantee deterministic bytecode.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT & RUBRIC (SECTION 7.25)          */}
        {/* ============================================================= */}
        {activeTab === "quiz" && (
          <div className="space-y-12">
            {/* Header */}
            <div className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                Section 7.25 • Comprehensive Examination
              </span>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                Solidity Smart Contract Certification Exam
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Validate your theoretical comprehension, architectural decision-making, and secure coding practices across 10 MCQs, 16 short answer challenges, and 10 deep technical scenarios.
              </p>
            </div>

            {/* PART A: 10 Multiple-Choice Questions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#ece8de]">
                <h3 className="text-lg font-bold text-neutral-900">Part A: Multiple-Choice Questions (10 Questions)</h3>
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

            {/* PART B: 16 Short-Answer Conceptual Questions */}
            <div className="space-y-4 pt-4">
              <div className="pb-2 border-b border-[#ece8de]">
                <h3 className="text-lg font-bold text-neutral-900">Part B: Short-Answer Conceptual Questions (16 Questions)</h3>
                <p className="text-xs text-neutral-500">Test your mastery of core Solidity mechanics and expand each card to reveal authoritative model answers.</p>
              </div>

              <div className="space-y-3">
                {SHORT_QUESTIONS.map((sq, idx) => {
                  const isOpen = expandedShort[sq.id];
                  return (
                    <div key={sq.id} className="bg-white border border-[#e7e3da] rounded-xl overflow-hidden shadow-2xs">
                      <button
                        onClick={() => toggleShortAnswer(sq.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-[#fbfaf7] transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-mono text-orange-600">Q{idx + 1}</span>
                          <span className="text-xs font-semibold text-neutral-900">{sq.question}</span>
                        </div>
                        {isOpen ? <ChevronUp size={16} className="text-neutral-500 shrink-0" /> : <ChevronDown size={16} className="text-neutral-500 shrink-0" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-[#fbfaf7] border-t border-[#ece8de] text-xs text-neutral-700 leading-relaxed space-y-1">
                          <strong className="text-neutral-900 block font-sans">Model Answer:</strong>
                          <p>{sq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PART C: 10 Technical Architecture Questions */}
            <div className="space-y-4 pt-4">
              <div className="pb-2 border-b border-[#ece8de]">
                <h3 className="text-lg font-bold text-neutral-900">Part C: Technical Architecture &amp; System Design (10 Questions)</h3>
                <p className="text-xs text-neutral-500">Deep technical analysis of gas optimization, EVM memory layout, proxy mechanics, and edge cases.</p>
              </div>

              <div className="space-y-3">
                {TECHNICAL_QUESTIONS.map((tq, idx) => {
                  const isOpen = expandedTech[tq.id];
                  return (
                    <div key={tq.id} className="bg-white border border-[#e7e3da] rounded-xl overflow-hidden shadow-2xs">
                      <button
                        onClick={() => toggleTechAnswer(tq.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-[#fbfaf7] transition cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-mono text-blue-600">Arch Q{idx + 1}</span>
                          <span className="text-xs font-semibold text-neutral-900">{tq.question}</span>
                        </div>
                        {isOpen ? <ChevronUp size={16} className="text-neutral-500 shrink-0" /> : <ChevronDown size={16} className="text-neutral-500 shrink-0" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-[#fbfaf7] border-t border-[#ece8de] text-xs text-neutral-700 leading-relaxed space-y-1">
                          <strong className="text-neutral-900 block font-sans">Technical Analysis:</strong>
                          <p>{tq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PART D: 100-Mark University Grading Rubric */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Part D • Examination Rubric
                </span>
                <h2 className="text-xl font-bold text-neutral-900 mt-1">
                  University 100-Mark Practical Examination Grading Rubric
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-[#e7e3da]">
                  <thead className="bg-[#fbfaf7] text-neutral-800 font-bold border-b border-[#e7e3da]">
                    <tr>
                      <th className="p-3 border-r border-[#e7e3da]">Assessment Criteria</th>
                      <th className="p-3 border-r border-[#e7e3da]">Weight</th>
                      <th className="p-3 border-r border-[#e7e3da]">Target Competencies &amp; Verification Methods</th>
                      <th className="p-3">Grading Scale (Points)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ece8de]">
                    {RUBRIC_ROWS.map((row, idx) => (
                      <tr key={idx}>
                        <td className="p-3 font-bold text-neutral-900 border-r border-[#e7e3da]">{row.criteria}</td>
                        <td className="p-3 font-mono font-bold text-orange-600 border-r border-[#e7e3da]">{row.marks}</td>
                        <td className="p-3 text-neutral-600 border-r border-[#e7e3da]">{row.description}</td>
                        <td className="p-3 font-semibold text-neutral-800">{row.gradingScale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}


        {/* ============================================================= */}
        {/* TAB 5: RESOURCES & 26-OBJECTIVE CHECKLIST (SECTION 7.26)       */}
        {/* ============================================================= */}
        {activeTab === "capstone-checklist" && (
          <div className="space-y-12">
            {/* Recommended Learning Resources */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-[#ece8de] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                  Section 7.26 • Authoritative Literature &amp; Tooling
                </span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                  Recommended Solidity Learning Resources
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
                    The authoritative language reference manual detailing type rules, assembly syntax, and the Yul intermediate representation.
                  </p>
                </a>

                <a
                  href="https://github.com/ethereum/solidity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Compiler Repository</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">Solidity Compiler (solc)</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Official release artifacts, release notes, bug tracker, and technical specifications for compiler releases including Solidity 0.8.38.
                  </p>
                </a>

                <a
                  href="https://book.getfoundry.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Framework</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">Foundry Book</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Comprehensive documentation covering Forge, Cast, and Anvil, cheatcodes, gas snapshots, invariant testing, and multi-chain deployment scripts.
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
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">OpenZeppelin Contracts</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    The industry-standard library for secure modular smart contract development, including ERC-20, ERC-721, ReentrancyGuard, and AccessControl.
                  </p>
                </a>

                <a
                  href="https://remix.ethereum.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">In-Browser IDE</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">Remix IDE</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Web-based development environment for rapid contract prototyping, transaction debugging, and browser-native compiler inspection.
                  </p>
                </a>

                <a
                  href="https://github.com/ethereumbook/ethereumbook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Reference Textbook</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">Mastering Ethereum (Antonopoulos &amp; Wood)</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Foundational textbook detailing the EVM architecture, smart contract security, gas mechanics, and transaction cryptography.
                  </p>
                </a>

                <a
                  href="https://consensys.github.io/smart-contract-best-practices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-[#e7e3da] bg-[#fbfaf7] hover:border-orange-300 hover:shadow-xs transition group block md:col-span-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 font-mono">Security Guidelines</span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-orange-600" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mt-1">ConsenSys Smart Contract Best Practices</h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Authoritative security recommendations, known attack vectors, formal verification patterns, and defensive programming guidelines.
                  </p>
                </a>
              </div>
            </section>

            {/* 26-Objective Student Mastery Checklist */}
            <section className="bg-white border border-[#e7e3da] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#ece8de] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-mono">
                    Module 7 Accreditation Tracker
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
                      <span className={isChecked ? "line-through text-stone-500" : ""}>{item}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Bottom Track Progression Navigation */}
            <div className="pt-6 border-t border-[#e7e3da] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => navigate("/learning/blockchain/evm-internals")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#e7e3da] bg-white text-xs font-bold text-neutral-800 hover:border-orange-300 hover:text-orange-600 transition cursor-pointer"
              >
                <ArrowLeft size={16} />
                <span>Previous: 6. Ethereum Virtual Machine (EVM)</span>
              </button>

              <button
                onClick={() => navigate("/learning/blockchain/dapps-web3")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition cursor-pointer shadow-sm shadow-orange-500/25 active:scale-95"
              >
                <span>Next Module: 8. Web3 &amp; dApp Development</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
