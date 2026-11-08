import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Coins,
  Shield,
  Cpu,
  Terminal,
  BookOpen,
  Check,
  ArrowRight,
  ArrowLeft,
  ListChecks,
  ExternalLink,
  Award
} from "lucide-react";
import ModuleNav from "./ModuleNav";

// 26 Persistent Checklist Items
const CHECKLIST_ITEMS = [
  "12.1 Define what a blockchain token represents and compare native base-layer ETH with smart contract ERC tokens",
  "12.2 Differentiate fungible (ERC-20), non-fungible (ERC-721), and semi-fungible (ERC-1155) digital asset models",
  "12.3 Understand the Ethereum Request for Comments (ERC) standards process and why ecosystem interoperability matters",
  "12.4 Master ERC-20 internal state mapping: balances[account] and allowances[owner][spender]",
  "12.5 Analyze the 6 mandatory ERC-20 interface functions: totalSupply, balanceOf, transfer, approve, allowance, transferFrom",
  "12.6 Examine the 2 mandatory ERC-20 events (Transfer, Approval) and off-chain indexer state reconstruction",
  "12.7 Implement token minting mechanics, onlyOwner access control, and mathematical supply expansion (S_new = S_old + M)",
  "12.8 Implement token burning mechanics, zero address transfer conventions, and deflationary economics (S_new = S_old - B)",
  "12.9 Analyze the two-step ERC-20 approval and allowance pattern (approve followed by transferFrom)",
  "12.10 Understand the ERC-20 approval front-running race condition and implement mitigations (reset to 0 or increase/decrease)",
  "12.11 Understand ERC-2612 Permit extension for gasless off-chain approvals using EIP-712 typed data signatures",
  "12.12 Audit common ERC-20 vulnerabilities (unrestricted minting, integer overflow/underflow, missing return values, fee-on-transfer)",
  "12.13 Formalize token transfer conservation invariants: sum(balances) == totalSupply across all state mutations",
  "12.14 Master ERC-721 NFT architecture, discrete tokenId tracking, and mapping(uint256 => address) owners",
  "12.15 Implement ERC-721 core functions: ownerOf, safeTransferFrom, approve, setApprovalForAll, getApproved, isApprovedForAll",
  "12.16 Understand safe NFT transfers and the IERC721Receiver.onERC721Received callback check to prevent permanently trapped assets",
  "12.17 Structure NFT metadata JSON schemas according to the OpenSea standard and configure tokenURI(tokenId) pointing to IPFS",
  "12.18 Compare on-chain SVG metadata vs decentralized IPFS storage and evaluate pinning persistence tradeoffs",
  "12.19 Master ERC-1155 Multi-Token architecture: combining fungible and non-fungible tokens in a single smart contract",
  "12.20 Analyze ERC-1155 batch operations (balanceOfBatch, safeBatchTransferFrom) and calculate gas efficiency advantages",
  "12.21 Master NFT minting economics, public sale phases, Merkle tree allowlists, and primary vs secondary sale royalties",
  "12.22 Dissect NFT marketplace architecture (escrow, atomic swap, Dutch auctions, and off-chain order books)",
  "12.23 Deploy production-grade, audited OpenZeppelin ERC-20 and ERC-721 contracts with Ownable and supply caps",
  "12.24 Formulate tokenomics fundamentals: total vs circulating vs max supply, fixed vs inflationary schedules, and allocations",
  "12.25 Implement token vesting schedules with cliff periods and linear unlock mathematical formulas: V(t) = A * (t / T)",
  "12.26 Analyze governance token voting power formulas, snapshot delegation, flash-loan attack vectors, and DAO proposals"
];

// 20 Multiple Choice Questions
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "question": "What is the primary difference between native ETH and an ERC-20 token on the Ethereum blockchain?",
    "options": [
      "ETH is handled at the EVM protocol level with native balance state, whereas ERC-20 tokens are balances tracked in a smart contract mapping.",
      "ETH is non-fungible while ERC-20 tokens are strictly fungible.",
      "ERC-20 tokens do not require gas for transfers, whereas ETH always does.",
      "ETH can only be transferred using the approve() and transferFrom() two-step pattern."
    ],
    "answer": 0,
    "explanation": "ETH is the native currency of Ethereum, tracked directly in the state trie at the protocol level and transferred via EVM opcodes (like CALL with value). In contrast, ERC-20 tokens are virtual balances stored in an internal 'mapping(address => uint256)' inside a user-deployed smart contract."
  },
  {
    "id": 2,
    "question": "Which property defines a fungible asset such as an ERC-20 token?",
    "options": [
      "Every individual unit possesses unique cryptographic attributes and serial numbers.",
      "Each unit is identical, interchangeable, and equal in value to any other unit of the same type.",
      "The token cannot be transferred without multi-signature approval.",
      "The total supply must remain permanently fixed at contract deployment."
    ],
    "answer": 1,
    "explanation": "Fungibility means every individual token unit is identical in specification and value to any other unit (e.g., 1 PREP token is completely interchangeable with another 1 PREP token, identical to traditional fiat currency)."
  },
  {
    "id": 3,
    "question": "What is the formal role of an Ethereum Request for Comments (ERC)?",
    "options": [
      "It is a legally binding regulatory document enforced by the United Nations.",
      "It is an application-level standard and protocol specification (EIP) defining interface signatures and behaviors for smart contracts.",
      "It is a private proprietary standard developed exclusively by OpenZeppelin.",
      "It is the consensus algorithm used by Ethereum proof-of-stake validators."
    ],
    "answer": 1,
    "explanation": "An ERC (Ethereum Request for Comments) is a formalized application-level standard within the Ethereum Improvement Proposal (EIP) process that specifies standard API interfaces, behaviors, and events for contracts to ensure ecosystem-wide interoperability."
  },
  {
    "id": 4,
    "question": "What internal Solidity data structure is universally used to store ERC-20 account balances?",
    "options": [
      "address[] private accounts;",
      "mapping(address => uint256) private _balances;",
      "mapping(uint256 => address) private _owners;",
      "bytes32[] private _merkleLeaves;"
    ],
    "answer": 1,
    "explanation": "ERC-20 contracts store token balances in a hash table mapping 'mapping(address => uint256) private _balances;', allowing O(1) constant-time lookup and storage writes for any account address."
  },
  {
    "id": 5,
    "question": "When should an application use transferFrom() instead of direct transfer()?",
    "options": [
      "When the caller wants to transfer native Ether.",
      "When an authorized third party or smart contract (e.g., DEX router, lending pool) needs to move tokens on behalf of the token owner.",
      "When transferring tokens to the zero address (0x0).",
      "When the sender wants to bypass gas fees."
    ],
    "answer": 1,
    "explanation": "'transfer(to, amount)' is called directly by the token owner (msg.sender). 'transferFrom(from, to, amount)' is invoked by a third-party spender (such as Uniswap or Aave) after the owner has granted an allowance via 'approve()'."
  },
  {
    "id": 6,
    "question": "How does the ERC-20 allowance mapping work internally?",
    "options": [
      "mapping(address => uint256) allowance;",
      "mapping(address => mapping(address => uint256)) private _allowances; where _allowances[owner][spender] stores the remaining spending limit.",
      "mapping(uint256 => address) allowanceIndex;",
      "mapping(bytes32 => bool) allowanceSignatures;"
    ],
    "answer": 1,
    "explanation": "The allowance is a nested mapping: '_allowances[owner][spender] = amount'. It records how many tokens 'spender' is authorized to withdraw from 'owner' using transferFrom()."
  },
  {
    "id": 7,
    "question": "What occurs mathematically and in contract state during a token minting operation?",
    "options": [
      "Tokens are transferred from an off-chain central bank.",
      "Total supply increases (S_new = S_old + amount) and recipient balance increases (_balances[to] += amount), emitting Transfer(address(0), to, amount).",
      "The contract deletes previous token holders from storage.",
      "Ether is burned from the contract's balance."
    ],
    "answer": 1,
    "explanation": "Minting creates new tokens out of nothing: '_totalSupply += amount', '_balances[to] += amount', and a 'Transfer' event is emitted with 'from = address(0)' to signify new token creation according to ERC-20 conventions."
  },
  {
    "id": 8,
    "question": "What is the standard event signature emitted when tokens are permanently burned in ERC-20?",
    "options": [
      "event Burn(address indexed burner, uint256 value);",
      "event Transfer(address indexed from, address(0), uint256 value);",
      "event Approval(address indexed from, address(0), uint256 value);",
      "event Destroy(uint256 amount);"
    ],
    "answer": 1,
    "explanation": "ERC-20 specifies that burning tokens emits 'Transfer(account, address(0), value)', where the recipient is the zero address. This allows all indexers (Etherscan, The Graph) to register supply reductions automatically."
  },
  {
    "id": 9,
    "question": "What is the primary purpose of the ERC-721 standard?",
    "options": [
      "To provide a standard interface for completely identical and interchangeable tokens.",
      "To establish a standard interface for non-fungible tokens (NFTs), where each asset is identified by a unique uint256 tokenId.",
      "To manage validator staking rewards in Proof of Stake.",
      "To aggregate multiple gas payments into a single transaction."
    ],
    "answer": 1,
    "explanation": "ERC-721 defines non-fungible tokens (NFTs). Unlike ERC-20 where units are indistinguishable, each ERC-721 token has an immutable uint256 identifier (tokenId) mapped to a specific owner: 'mapping(uint256 => address) private _owners;'."
  },
  {
    "id": 10,
    "question": "How does ERC-721 track token ownership internally?",
    "options": [
      "mapping(address => uint256[]) private _balances;",
      "mapping(uint256 => address) private _owners; mapping discrete tokenId to owner address.",
      "mapping(address => uint256) private _owners;",
      "uint256[] private _allTokens;"
    ],
    "answer": 1,
    "explanation": "ERC-721 tracks discrete asset ownership using 'mapping(uint256 => address) private _owners;', which records the current owner address for each individual tokenId."
  },
  {
    "id": 11,
    "question": "What does the ERC-721 tokenURI(uint256 tokenId) function return?",
    "options": [
      "The owner's Ethereum public address.",
      "A URI string (typically HTTPS or IPFS) resolving to a JSON metadata file describing the NFT's attributes, name, and media.",
      "The bytecode hash of the smart contract.",
      "The current market sale price in Wei."
    ],
    "answer": 1,
    "explanation": "'tokenURI(tokenId)' returns a URI string (such as 'ipfs://Qm.../1.json') that points to the metadata document containing the asset's name, description, image URI, and trait attributes."
  },
  {
    "id": 12,
    "question": "What is the critical trade-off between on-chain and off-chain NFT metadata?",
    "options": [
      "On-chain metadata is cheaper in gas fees but cannot store SVG images.",
      "On-chain metadata is immutable and permanent but extremely expensive in storage gas, whereas off-chain (IPFS) is cost-effective but relies on persistent pinning.",
      "Off-chain metadata can be verified by EVM opcodes directly.",
      "There is no difference between on-chain and off-chain metadata."
    ],
    "answer": 1,
    "explanation": "Storing metadata and graphics on-chain (e.g., base64 encoded SVG) guarantees 100% permanence with no external dependencies, but costs significant gas (20,000 gas per 32-byte storage slot). Off-chain storage (IPFS/Arweave) is lightweight on-chain but requires decentralized pinning."
  },
  {
    "id": 13,
    "question": "What distinctive capability does ERC-1155 provide over ERC-20 and ERC-721?",
    "options": [
      "It only supports native Ether transfers.",
      "It is a Multi-Token standard that manages any combination of fungible, semi-fungible, and non-fungible tokens in a single deployed contract.",
      "It eliminates the need for private keys during transaction signing.",
      "It runs smart contracts on Bitcoin's Script engine."
    ],
    "answer": 1,
    "explanation": "ERC-1155 is the Multi-Token standard. A single contract instance can manage thousands of different asset types\u2014both fungible (e.g. gold coins, potions) and non-fungible (e.g. unique legendary swords) with efficient batch operations."
  },
  {
    "id": 14,
    "question": "Why is ERC-1155 particularly advantageous for blockchain gaming and metaverse applications?",
    "options": [
      "It requires deploying a separate contract for every in-game sword and potion.",
      "It supports batch transfers (safeBatchTransferFrom) and batch balance queries (balanceOfBatch), drastically reducing gas costs for multi-item inventory operations.",
      "It completely eliminates Ethereum network gas fees.",
      "It automatically executes graphics rendering on GPU nodes."
    ],
    "answer": 1,
    "explanation": "In games where players trade multiple items simultaneously (e.g., 500 gold + 3 potions + 1 shield), ERC-1155 executes this in a single 'safeBatchTransferFrom' transaction, saving massive amounts of gas compared to multiple individual ERC-20 and ERC-721 transfer calls."
  },
  {
    "id": 15,
    "question": "Why is the OpenZeppelin Contracts library considered the gold standard for token development?",
    "options": [
      "It is the only compiler accepted by the Ethereum Virtual Machine.",
      "It provides rigorously audited, battle-tested, modular, and gas-optimized implementations of ERC standards and security primitives.",
      "It allows contract creators to revoke transactions after execution.",
      "It replaces the need for Solidity code review."
    ],
    "answer": 1,
    "explanation": "OpenZeppelin Contracts provides community-vetted, audited, and standard-compliant implementations of ERC-20, ERC-721, ERC-1155, access control (Ownable, AccessControl), and security guards (ReentrancyGuard, Pausable), securing hundreds of billions in value."
  },
  {
    "id": 16,
    "question": "What characterizes a fixed supply token compared to an inflationary token model?",
    "options": [
      "A fixed supply token has a mathematically enforced ceiling (e.g. MAX_SUPPLY = 1,000,000) that can never be exceeded, whereas an inflationary token can mint new tokens perpetually.",
      "A fixed supply token burns 10% of tokens on every transaction.",
      "Inflationary tokens have zero initial circulating supply.",
      "Fixed supply tokens cannot be held in MetaMask."
    ],
    "answer": 0,
    "explanation": "Fixed supply tokens have a hard cap defined in contract code that minting functions cannot violate ('totalSupply() + amount <= MAX_SUPPLY'). Inflationary tokens lack an absolute cap or feature programmatic emission schedules (e.g., staking yields)."
  },
  {
    "id": 17,
    "question": "What is the primary function of token vesting in Web3 project architecture?",
    "options": [
      "To instantly distribute 100% of tokens to founders on day 1 so they can cash out on exchanges.",
      "To programmatically lock and release token allocations over a predetermined time horizon, aligning long-term incentives and preventing sudden market dumps.",
      "To convert ERC-20 tokens into ERC-721 NFTs automatically.",
      "To bypass smart contract auditing requirements."
    ],
    "answer": 1,
    "explanation": "Token vesting locks tokens in a smart contract that releases them gradually over time (e.g. 4-year linear vesting). This aligns team, advisor, and investor incentives with the long-term health of the protocol."
  },
  {
    "id": 18,
    "question": "In token vesting contracts, what does a 'cliff period' enforce?",
    "options": [
      "A period where tokens vest at 5x the normal speed.",
      "A preliminary duration (e.g. 12 months) during which zero tokens are unlocked; if the beneficiary departs before the cliff, they receive nothing.",
      "The exact block height where all smart contracts self-destruct.",
      "The deadline for claiming airdrop gas refunds."
    ],
    "answer": 1,
    "explanation": "A cliff period is a delay before any tokens are distributed. For instance, with a 1-year cliff on a 4-year schedule, 0 tokens vest during months 0-11. At month 12, 25% unlock simultaneously, followed by continuous linear vesting."
  },
  {
    "id": 19,
    "question": "How do governance tokens function within Decentralized Autonomous Organizations (DAOs)?",
    "options": [
      "They give the contract owner legal power to freeze user bank accounts.",
      "They represent voting power proportional to token holdings, allowing token holders to create, sponsor, and vote on on-chain protocol upgrade proposals.",
      "They automatically guarantee 100% annual staking returns.",
      "They eliminate the need for decentralized consensus."
    ],
    "answer": 1,
    "explanation": "Governance tokens (e.g., UNI, COMP, AAVE) grant holders voting rights proportional to their balance or delegated stake, empowering community members to vote on parameter adjustments, treasury distributions, and contract upgrades."
  },
  {
    "id": 20,
    "question": "What is the specific purpose of the ERC-2981 standard?",
    "options": [
      "To replace ERC-20 tokens with algorithmic stablecoins.",
      "To provide a universal, standardized on-chain interface (royaltyInfo) signaling royalty payment recipient and amount for NFT sales across secondary marketplaces.",
      "To force miners to accept lower transaction fees.",
      "To encrypt NFT images so only the owner can view them."
    ],
    "answer": 1,
    "explanation": "ERC-2981 standardizes the 'royaltyInfo(uint256 tokenId, uint256 salePrice)' function, returning '(address receiver, uint256 royaltyAmount)'. This provides a unified standard across all NFT marketplaces for calculating creator royalties."
  }
];

// 14 Senior Architect Interview Questions
const INTERVIEW_QUESTIONS = [
  {
    "id": 1,
    "question": "How would you implement a capped ERC-20 token in production Solidity?",
    "answer": "To implement a capped ERC-20 token, extend OpenZeppelin's ERC20 and ERC20Capped (or enforce the cap in the mint function):\n\n```solidity\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"@openzeppelin/contracts/access/Ownable2Step.sol\";\n\ncontract PrepTokenCapped is ERC20, Ownable2Step {\n    uint256 public immutable maxSupply;\n\n    error CapExceeded(uint256 attempted, uint256 maxSupply);\n\n    constructor(\n        string memory name_,\n        string memory symbol_,\n        uint256 cap_,\n        uint256 initialMint_\n    ) ERC20(name_, symbol_) Ownable2Step(msg.sender) {\n        require(cap_ > 0, \"Cap must be > 0\");\n        require(initialMint_ <= cap_, \"Initial mint exceeds cap\");\n        maxSupply = cap_;\n        if (initialMint_ > 0) {\n            _mint(msg.sender, initialMint_);\n        }\n    }\n\n    function mint(address to, uint256 amount) external onlyOwner {\n        if (totalSupply() + amount > maxSupply) {\n            revert CapExceeded(totalSupply() + amount, maxSupply);\n        }\n        _mint(to, amount);\n    }\n}\n```\n\nKey Architectural Safeguards:\n1. Use `immutable` for `maxSupply` to save gas (reads cost 0 storage gas via bytecode inlining).\n2. Use custom errors (`CapExceeded`) instead of `require` string literals to conserve deployment and execution gas.\n3. Use `Ownable2Step` instead of standard `Ownable` to prevent accidental transfer of ownership to a dead or incorrect address.\n4. Verify invariant: `totalSupply() <= maxSupply` holds true for every state transition."
  },
  {
    "id": 2,
    "question": "How does transferFrom() use the allowance mapping, and how does OpenZeppelin optimize infinite approvals?",
    "answer": "In ERC-20, `transferFrom(address from, address to, uint256 amount)` operates as follows:\n\n```solidity\nfunction transferFrom(address from, address to, uint256 amount) public virtual returns (bool) {\n    address spender = msg.sender;\n    _spendAllowance(from, spender, amount);\n    _transfer(from, to, amount);\n    return true;\n}\n```\n\nInternal allowance deduction logic:\n```solidity\nfunction _spendAllowance(address owner, address spender, uint256 amount) internal virtual {\n    uint256 currentAllowance = allowance(owner, spender);\n    if (currentAllowance != type(uint256).max) {\n        require(currentAllowance >= amount, \"ERC20: insufficient allowance\");\n        unchecked {\n            _approve(owner, spender, currentAllowance - amount, false);\n        }\n    }\n}\n```\n\nGas Optimization with Infinite Approval (`type(uint256).max`):\n1. When a user approves `type(uint256).max` (2^256 - 1), the contract treats it as unlimited authorization.\n2. In `_spendAllowance`, if `currentAllowance == type(uint256).max`, the contract skips updating storage (`_approve`).\n3. Skipping an `SSTORE` operation saves 5,000 to 20,000 gas on every single DEX trade or lending deposit!"
  },
  {
    "id": 3,
    "question": "Explain the ERC-20 approval race condition and how modern protocols mitigate it.",
    "answer": "The Approval Race Condition (Front-Running Attack):\nSuppose Alice approves Bob for 100 tokens: `allowance[Alice][Bob] = 100`.\nLater, Alice decides to reduce Bob's allowance to 50 tokens and sends `approve(Bob, 50)`.\n\nAttack Sequence:\n1. Bob monitors the mempool and observes Alice's pending `approve(Bob, 50)` transaction.\n2. Bob submits a `transferFrom(Alice, Bob, 100)` transaction with higher gas price (priority fee).\n3. Miners/validators order Bob's transaction BEFORE Alice's transaction. Bob drains 100 tokens.\n4. Alice's transaction executes next, resetting Bob's allowance to 50 tokens.\n5. Bob immediately submits another `transferFrom(Alice, Bob, 50)`.\n6. Result: Bob stole 150 tokens instead of the intended 50!\n\nProduction Mitigations:\n1. Two-Step Zero Reset: Alice must first call `approve(Bob, 0)`, wait for block confirmation, and only then call `approve(Bob, 50)`.\n2. Safe Increase / Decrease Pattern: Use `increaseAllowance(spender, addedValue)` and `decreaseAllowance(spender, subtractedValue)` instead of raw `approve`.\n3. EIP-2612 Permit: Use cryptographic signatures with monotonic nonces and deadlines, preventing mempool replay and race tampering."
  },
  {
    "id": 4,
    "question": "How would you prevent unauthorized token minting in a multi-role protocol?",
    "answer": "Never rely on simple boolean flags or a single private key for high-value minting. Implement Role-Based Access Control (RBAC) with OpenZeppelin `AccessControl`:\n\n```solidity\nbytes32 public constant MINTER_ROLE = keccak256(\"MINTER_ROLE\");\nbytes32 public constant ADMIN_ROLE = keccak256(\"ADMIN_ROLE\");\n\nfunction mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {\n    if (totalSupply() + amount > maxSupply) revert CapExceeded();\n    _mint(to, amount);\n}\n```\n\nComprehensive Production Defense Strategy:\n1. Multi-Sig Governance: Grant `ADMIN_ROLE` strictly to a multi-signature wallet (e.g. Safe 3-of-5) or on-chain TimelockController.\n2. Timelock Delays: Enforce a mandatory 48-hour timelock between proposing a new minter contract and activating the role.\n3. Rate Limiting (Epoch Caps): Cap the maximum number of tokens that can be minted per 24 hours (e.g., maximum 5% of circulating supply per day).\n4. Circuit Breakers: Implement an emergency pause (`Pausable`) operable by an automated monitoring sentinel (e.g. OpenZeppelin Defender or Forta bot) upon anomaly detection."
  },
  {
    "id": 5,
    "question": "What happens when an ERC-721 token is transferred to a contract that does not implement IERC721Receiver?",
    "answer": "The Danger of `transferFrom` vs `safeTransferFrom`:\nIf a user calls standard `transferFrom(from, recipientContract, tokenId)` to send an NFT to a smart contract that does not have logic to handle or withdraw ERC-721 tokens, the NFT becomes PERMANENTLY TRAPPED forever. No one can ever retrieve it.\n\nHow `safeTransferFrom` Solves This:\n`safeTransferFrom` checks if the recipient is a contract address (`to.code.length > 0`). If it is, it executes an external call to `IERC721Receiver(to).onERC721Received(...)`:\n\n```solidity\nfunction _checkOnERC721Received(\n    address from,\n    address to,\n    uint256 tokenId,\n    bytes memory data\n) private returns (bool) {\n    if (to.code.length > 0) {\n        try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, data) returns (bytes4 retval) {\n            return retval == IERC721Receiver.onERC721Received.selector;\n        } catch (bytes memory reason) {\n            if (reason.length == 0) {\n                revert(\"ERC721: transfer to non ERC721Receiver implementer\");\n            } else {\n                assembly {\n                    revert(add(32, reason), mload(reason))\n                }\n            }\n        }\n    }\n    return true;\n}\n```\n\nIf the recipient contract reverts, returns an invalid selector, or does not implement the function, the entire transaction reverts and the NFT remains safely with the original owner!"
  },
  {
    "id": 6,
    "question": "How does an NFT marketplace or frontend retrieve and display token metadata efficiently?",
    "answer": "NFT Metadata Retrieval Pipeline:\n1. On-Chain Query: The marketplace frontend or indexing backend queries `tokenURI(tokenId)` on the ERC-721 contract (or `uri(tokenId)` on ERC-1155).\n2. URI Scheme Resolution:\n   - If `ipfs://Qm.../1.json`: The indexer maps the URI to a dedicated high-speed IPFS gateway (e.g., `https://nftstorage.link/ipfs/Qm...` or Pinata/Cloudflare IPFS cache).\n   - If `https://api.project.com/metadata/1`: It queries the centralized REST endpoint via HTTPS GET.\n   - If `data:application/json;base64,...`: The indexer decodes the base64 string directly without external network requests (fully on-chain).\n3. Schema Parsing: The JSON response is validated against the OpenSea/EIP metadata standard:\n   - `name`: string\n   - `description`: string\n   - `image`: URI pointing to media asset\n   - `attributes`: array of `{ \"trait_type\": \"...\", \"value\": \"...\" }`\n4. Indexer Ingestion & Caching: Specialized indexers (The Graph, Reservoir, Alchemy NFT API) store metadata, calculate trait rarity scores, and cache optimized thumbnails in a CDN for sub-second UI rendering."
  },
  {
    "id": 7,
    "question": "Deep dive: Compare ERC-721 and ERC-1155 across state architecture, gas consumption, and batch capabilities.",
    "answer": "Architectural Comparison Matrix:\n\n| Dimension | ERC-721 | ERC-1155 |\n| :--- | :--- | :--- |\n| **Asset Identity** | Single unique NFT per tokenId | Multi-Token: both Fungible & Non-Fungible in 1 contract |\n| **Ownership Storage** | `mapping(uint256 => address) _owners` | `mapping(uint256 => mapping(address => uint256)) _balances` |\n| **Balance Tracking** | `mapping(address => uint256) _balances` (count of NFTs) | `_balances[tokenId][account]` (exact balance per token ID) |\n| **Batch Transfers** | No native batching; requires loop of individual transfer calls | Native `safeBatchTransferFrom(from, to, ids[], amounts[], data)` |\n| **Approvals** | Token-level (`approve`) & Operator-level (`setApprovalForAll`) | Operator-level only (`setApprovalForAll`) |\n| **Metadata URI** | `tokenURI(uint256 tokenId)` string per token | Parameterized `uri(uint256 id)` returning `{id}.json` pattern |\n| **Gas Cost for 10 Items** | ~500,000 gas (10 distinct storage writes) | ~85,000 gas (single transaction batch loop) |\n\nConclusion: For games, metaverse platforms, and multi-asset ecosystems, ERC-1155 achieves 60%\u201380% gas savings over deploying multiple ERC-20 and ERC-721 contracts."
  },
  {
    "id": 8,
    "question": "How would you implement a secure NFT minting mechanism with a Merkle allowlist and maximum wallet cap?",
    "answer": "Production Merkle Minting Contract:\n\n```solidity\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.24;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/cryptography/MerkleProof.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/utils/ReentrancyGuard.sol\";\n\ncontract SecureGenesisNFT is ERC721, Ownable, ReentrancyGuard {\n    bytes32 public merkleRoot;\n    uint256 public constant MINT_PRICE = 0.05 ether;\n    uint256 public constant MAX_SUPPLY = 5000;\n    uint256 public constant MAX_PER_WALLET = 3;\n\n    uint256 public totalMinted;\n    mapping(address => uint256) public walletMintCount;\n\n    error ExceedsMaxSupply();\n    error ExceedsWalletLimit();\n    error IncorrectPayment();\n    error InvalidMerkleProof();\n\n    constructor(bytes32 _merkleRoot) ERC721(\"PrepGenesis\", \"PREPGEN\") Ownable(msg.sender) {\n        merkleRoot = _merkleRoot;\n    }\n\n    function allowlistMint(bytes32[] calldata proof, uint256 quantity)\n        external\n        payable\n        nonReentrant\n    {\n        if (totalMinted + quantity > MAX_SUPPLY) revert ExceedsMaxSupply();\n        if (walletMintCount[msg.sender] + quantity > MAX_PER_WALLET) revert ExceedsWalletLimit();\n        if (msg.value != MINT_PRICE * quantity) revert IncorrectPayment();\n\n        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(msg.sender))));\n        if (!MerkleProof.verify(proof, merkleRoot, leaf)) revert InvalidMerkleProof();\n\n        walletMintCount[msg.sender] += quantity;\n        for (uint256 i = 0; i < quantity; i++) {\n            totalMinted++;\n            _safeMint(msg.sender, totalMinted);\n        }\n    }\n\n    function withdraw() external onlyOwner {\n        (bool success, ) = payable(owner()).call{value: address(this).balance}(\"\");\n        require(success, \"Withdraw failed\");\n    }\n}\n```\n\nSecurity Best Practices:\n1. Merkle Tree Allowlist: Verifying an off-chain root saves massive deployment gas compared to storing 10,000 addresses on-chain.\n2. Checks-Effects-Interactions & `nonReentrant` protect against malicious receiver callbacks.\n3. Strict payment equality check (`msg.value == price * qty`) prevents underpayment or stuck dust."
  },
  {
    "id": 9,
    "question": "How would you implement token vesting with a cliff and linear release in Solidity?",
    "answer": "Mathematical Vesting Formula:\nLet $A$ = total allocation, $T$ = total duration, $T_{\\text{cliff}}$ = cliff duration, $t$ = elapsed time since start.\n- If $t < T_{\\text{cliff}}$: Vested Amount $V(t) = 0$\n- If $t \\ge T$: Vested Amount $V(t) = A$\n- If $T_{\\text{cliff}} \\le t < T$: Vested Amount $V(t) = A \\times \\frac{t}{T}$\n- Claimable Amount = $V(t) - \\text{alreadyReleased}$\n\nProduction Implementation:\n```solidity\nfunction vestedAmount(uint64 timestamp) public view returns (uint256) {\n    if (timestamp < start + cliffDuration) {\n        return 0;\n    } else if (timestamp >= start + totalDuration) {\n        return totalAllocation;\n    } else {\n        return (totalAllocation * (timestamp - start)) / totalDuration;\n    }\n}\n\nfunction release() external nonReentrant {\n    uint256 releasable = vestedAmount(uint64(block.timestamp)) - released;\n    require(releasable > 0, \"No tokens due for release\");\n    released += releasable;\n    token.safeTransfer(beneficiary, releasable);\n    emit TokensReleased(beneficiary, releasable);\n}\n```\n\nKey Implementation Points:\n1. Always compute products before divisions: `(totalAllocation * elapsed) / totalDuration` to avoid precision loss.\n2. Use SafeERC20 (`token.safeTransfer`) to handle non-compliant ERC-20 tokens that return void.\n3. Mark state before external call (`released += releasable`) to maintain checks-effects-interactions integrity."
  },
  {
    "id": 10,
    "question": "What security risks exist in ERC-20 token approval mechanisms, and how can they be mitigated?",
    "answer": "Approval Security Risks:\n1. Unlimited / Infinite Approvals (`type(uint256).max`):\n   - Users habitually grant maximum allowance to save gas on future trades.\n   - If the approved protocol (e.g. SushiSwap router, Multichain bridge) suffers a smart contract exploit, the attacker can execute `transferFrom` on every user who approved the contract, draining their wallet even months after their last interaction!\n2. Front-Running Race Condition:\n   - Modifying allowances from $N$ to $M$ allows an adversary to drain $N + M$ tokens via mempool sandwiching.\n3. Phishing Permit Signatures (EIP-712):\n   - Malicious websites trick users into signing an off-chain `Permit` signature that authorizes draining of their tokens without an on-chain transaction.\n\nProduction Mitigations:\n1. Revoke Allowances: Use tools like revoke.cash or enforce exact-amount approvals (`approve(spender, exactAmount)`).\n2. ERC-2612 Deadlines & Nonces: Ensure permit signatures contain short expiry deadlines (e.g. 15 minutes) and invalidate used nonces.\n3. SafeERC20 `forceApprove`: OpenZeppelin's `forceApprove` resets allowance to 0 before setting a new value if non-zero."
  },
  {
    "id": 11,
    "question": "How would you design a decentralized NFT marketplace smart contract?",
    "answer": "Core Marketplace Architecture:\n\n```solidity\nstruct Listing {\n    address seller;\n    address nftAddress;\n    uint256 tokenId;\n    uint256 price;\n    bool isActive;\n}\n\n// listingId => Listing\nmapping(uint256 => Listing) public listings;\n```\n\nKey Architectural Workflows:\n1. Non-Custodial Listing:\n   - The seller does NOT transfer the NFT to the marketplace on listing.\n   - The seller calls `nft.setApprovalForAll(marketplaceAddress, true)` and signs an off-chain order (or on-chain listing).\n   - This allows the seller to retain custody and display the NFT in their wallet until the moment of sale!\n2. Atomic Purchase Execution:\n   - Buyer sends `msg.value == listing.price`.\n   - Calculate royalty fee via ERC-2981 (`royaltyInfo(tokenId, price)`).\n   - Calculate marketplace protocol fee (e.g., 2.5%).\n   - Transfer royalty to creator, protocol fee to treasury, and remaining proceeds to seller.\n   - Execute `IERC721(nftAddress).safeTransferFrom(seller, buyer, tokenId)`.\n   - Mark listing inactive and emit `ItemSold` event.\n3. Reentrancy Protection:\n   - Apply `nonReentrant` modifier to `buyItem` and `cancelListing`.\n   - Re-entrancy guard ensures malicious receiver fallback contracts cannot re-enter `buyItem` during ETH payouts."
  },
  {
    "id": 12,
    "question": "How can governance token voting power become centralized, and what mechanisms protect against governance capture?",
    "answer": "Governance Centralization & Attack Vectors:\n1. Flash-Loan Governance Attacks:\n   - An attacker borrows 100M tokens from an Aave flash loan in block $N$, votes on a malicious proposal that drains the treasury, and repays the flash loan in the same transaction!\n2. Low Voter Participation / Plutocracy:\n   - Often <5% of token holders vote. A single whale or consortium holding 6% can pass arbitrary proposals.\n3. Sybil Delegation:\n   - Whales split holdings across dummy addresses to bypass per-wallet caps while retaining monolithic control.\n\nProtective Mechanisms:\n1. Historical Checkpointing (ERC20Votes):\n   - Use OpenZeppelin `ERC20Votes` with historical checkpoints (`getPastVotes(account, proposalSnapshotBlock)`).\n   - Voting power is measured at the block BEFORE the proposal was created, making flash loans completely ineffective!\n2. Timelock Controller:\n   - All passed proposals must sit in a Timelock contract for 48\u201372 hours before execution, allowing the community to exit or rage-quit if a malicious vote passes.\n3. Quadratic Voting:\n   - Voting cost scales quadratically ($Votes = \\sqrt{Tokens}$), giving broader influence to decentralized communities over individual whales."
  },
  {
    "id": 13,
    "question": "What are the limitations of the ERC-2981 NFT Royalty standard?",
    "answer": "Critical Limitations of ERC-2981:\n1. Informational Only (No On-Chain Enforcement):\n   - ERC-2981 strictly returns data: `royaltyInfo(tokenId, salePrice) -> (receiver, royaltyAmount)`.\n   - It DOES NOT and CANNOT force a marketplace contract to execute the payment! Marketplaces (like Blur, OpenSea 0% royalty modes) can choose to ignore the standard and pay zero royalties to creators.\n2. Direct Wallet-to-Wallet Transfers:\n   - When a user transfers an NFT via peer-to-peer `safeTransferFrom`, no sale price exists and zero royalty is triggered.\n3. Off-Chain Order Books:\n   - Marketplaces matching bids and asks off-chain can calculate fees arbitrarily without reading contract state.\n\nCreator Workarounds & Modern Solutions:\n- Operator Filter Registry: Contracts blacklist specific marketplace operator addresses that do not honor royalties (though this harms composability and decentralization).\n- Creator Token Standards (ERC-721C): Require cryptographic proofs from compliant marketplace execution venues before permitting transfer."
  },
  {
    "id": 14,
    "question": "How would you formulate and test token transfer conservation invariants?",
    "answer": "Token Invariant Formulation:\nIn financial smart contract engineering, mathematical invariants must hold across every valid execution path:\n\nInvariant 1: Total Supply Conservation\n$$\\sum_{a \\in \\text{Accounts}} \\text{balanceOf}(a) = \\text{totalSupply}()$$\n\nInvariant 2: Transfer Conservation\nFor any transfer of amount $X$ from $A$ to $B$ (where $A \\neq B$ and no burn/fee applies):\n$$\\text{balanceOf}(A)_{\\text{new}} + \\text{balanceOf}(B)_{\\text{new}} = \\text{balanceOf}(A)_{\\text{old}} + \\text{balanceOf}(B)_{\\text{old}}$$\n\nTesting Methodology with Foundry Invariant Fuzzing:\n```solidity\ncontract TokenInvariantTest is StdInvariant, Test {\n    PrepToken public token;\n    TokenHandler public handler;\n\n    function setUp() public {\n        token = new PrepToken();\n        handler = new TokenHandler(token);\n        targetContract(address(handler));\n    }\n\n    function invariant_totalSupplyEqualsSumOfBalances() public view {\n        uint256 sumOfBalances = handler.ghost_totalBalances();\n        assertEq(token.totalSupply(), sumOfBalances, \"Invariant Violated: Sum of balances != totalSupply\");\n    }\n\n    function invariant_totalSupplyNeverExceedsMaxCap() public view {\n        assertLe(token.totalSupply(), token.MAX_SUPPLY(), \"Invariant Violated: Total supply exceeded max cap\");\n    }\n}\n```\n\nFoundry will generate thousands of randomized transaction sequences (random accounts, transfers, approvals, burns) to mathematically prove the invariant cannot be broken."
  }
];

const ERC20_ADDRESSES = {
  deployer: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  alice: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  bob: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  uniswap: "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
};

export default function BlockchainTokens() {
  const navigate = useNavigate();

  // Tab State
  const [activeTab, setActiveTab] = useState("theory");
  const [simulatorTab, setSimulatorTab] = useState("erc20");

  // Checklist Persistence
  const [completedChecklist, setCompletedChecklist] = useState(() => {
    try {
      const saved = localStorage.getItem("prepspaces_blockchain_m12_progress");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        "prepspaces_blockchain_m12_progress",
        JSON.stringify(completedChecklist)
      );
    } catch {
      // Ignore write errors
    }
  }, [completedChecklist]);

  const toggleChecklistItem = (idx) => {
    setCompletedChecklist((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const completedCount = useMemo(() => {
    return Object.values(completedChecklist).filter(Boolean).length;
  }, [completedChecklist]);

  const completionPercentage = Math.round(
    (completedCount / CHECKLIST_ITEMS.length) * 100
  );

  // SIMULATOR 1: ERC-20 State
  const [erc20Balances, setErc20Balances] = useState({
    deployer: 500000,
    alice: 25000,
    bob: 5000,
    uniswap: 0
  });
  const [erc20Allowances, setErc20Allowances] = useState({
    alice: { uniswap: 10000 },
    bob: { uniswap: 0 },
    deployer: { uniswap: 0 }
  });
  const erc20Cap = 1000000;
  const erc20Supply = useMemo(() => {
    return Object.values(erc20Balances).reduce((a, b) => a + b, 0);
  }, [erc20Balances]);

  const [erc20Caller, setErc20Caller] = useState("alice");
  const [erc20Operation, setErc20Operation] = useState("transfer");
  const [erc20ToAccount, setErc20ToAccount] = useState("bob");
  const [erc20FromAccount, setErc20FromAccount] = useState("alice");
  const [erc20SpenderAccount, setErc20SpenderAccount] = useState("uniswap");
  const [erc20Amount, setErc20Amount] = useState(1000);
  const [erc20Status, setErc20Status] = useState(null);
  const [erc20Logs, setErc20Logs] = useState([
    {
      event: "Transfer",
      details: "from: 0x0 → to: deployer | amount: 500,000 PREP",
      time: "Initial Deployment"
    },
    {
      event: "Transfer",
      details: "from: deployer → to: alice | amount: 25,000 PREP",
      time: "Grant Distribution"
    },
    {
      event: "Approval",
      details: "owner: alice → spender: uniswap | amount: 10,000 PREP",
      time: "DEX Allowance Setup"
    }
  ]);

  const handleErc20Execute = () => {
    const amt = Number(erc20Amount);
    if (!amt || amt <= 0) {
      setErc20Status({ type: "error", message: "Error: Amount must be greater than zero." });
      return;
    }

    if (erc20Operation === "transfer") {
      if ((erc20Balances[erc20Caller] || 0) < amt) {
        setErc20Status({ type: "error", message: `Revert: Caller ${erc20Caller} has insufficient balance.` });
        return;
      }
      setErc20Balances((prev) => ({
        ...prev,
        [erc20Caller]: prev[erc20Caller] - amt,
        [erc20ToAccount]: (prev[erc20ToAccount] || 0) + amt
      }));
      setErc20Logs((prev) => [
        {
          event: "Transfer",
          details: `from: ${erc20Caller} → to: ${erc20ToAccount} | amount: ${amt.toLocaleString()} PREP`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: Transferred ${amt.toLocaleString()} PREP from ${erc20Caller} to ${erc20ToAccount}.` });
    } else if (erc20Operation === "approve") {
      setErc20Allowances((prev) => ({
        ...prev,
        [erc20Caller]: {
          ...(prev[erc20Caller] || {}),
          [erc20SpenderAccount]: amt
        }
      }));
      setErc20Logs((prev) => [
        {
          event: "Approval",
          details: `owner: ${erc20Caller} → spender: ${erc20SpenderAccount} | allowance: ${amt.toLocaleString()} PREP`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: Approved ${erc20SpenderAccount} to spend ${amt.toLocaleString()} PREP on behalf of ${erc20Caller}.` });
    } else if (erc20Operation === "transferFrom") {
      const currentAllowance = erc20Allowances[erc20FromAccount]?.[erc20Caller] || 0;
      if (currentAllowance < amt) {
        setErc20Status({ type: "error", message: `Revert: Insufficient allowance (${currentAllowance.toLocaleString()} < ${amt.toLocaleString()}).` });
        return;
      }
      if ((erc20Balances[erc20FromAccount] || 0) < amt) {
        setErc20Status({ type: "error", message: `Revert: Account ${erc20FromAccount} has insufficient balance (${erc20Balances[erc20FromAccount]} PREP).` });
        return;
      }
      setErc20Balances((prev) => ({
        ...prev,
        [erc20FromAccount]: prev[erc20FromAccount] - amt,
        [erc20ToAccount]: (prev[erc20ToAccount] || 0) + amt
      }));
      setErc20Allowances((prev) => ({
        ...prev,
        [erc20FromAccount]: {
          ...prev[erc20FromAccount],
          [erc20Caller]: currentAllowance - amt
        }
      }));
      setErc20Logs((prev) => [
        {
          event: "Transfer",
          details: `via transferFrom by ${erc20Caller} | from: ${erc20FromAccount} → to: ${erc20ToAccount} | amt: ${amt.toLocaleString()}`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: transferFrom executed. Remaining allowance: ${(currentAllowance - amt).toLocaleString()} PREP.` });
    } else if (erc20Operation === "mint") {
      if (erc20Caller !== "deployer") {
        setErc20Status({ type: "error", message: "Revert: OwnableUnauthorizedAccount(msg.sender) — Only deployer can mint." });
        return;
      }
      if (erc20Supply + amt > erc20Cap) {
        setErc20Status({ type: "error", message: `Revert: CapExceeded — Minting ${amt.toLocaleString()} would exceed MAX_SUPPLY (${erc20Cap.toLocaleString()} PREP).` });
        return;
      }
      setErc20Balances((prev) => ({
        ...prev,
        [erc20ToAccount]: (prev[erc20ToAccount] || 0) + amt
      }));
      setErc20Logs((prev) => [
        {
          event: "Transfer",
          details: `from: 0x0 (Mint) → to: ${erc20ToAccount} | amount: ${amt.toLocaleString()} PREP`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: Minted ${amt.toLocaleString()} PREP to ${erc20ToAccount}. New supply: ${(erc20Supply + amt).toLocaleString()} PREP.` });
    } else if (erc20Operation === "burn") {
      if ((erc20Balances[erc20Caller] || 0) < amt) {
        setErc20Status({ type: "error", message: `Revert: Burn exceeds balance (${erc20Balances[erc20Caller] || 0} PREP).` });
        return;
      }
      setErc20Balances((prev) => ({
        ...prev,
        [erc20Caller]: prev[erc20Caller] - amt
      }));
      setErc20Logs((prev) => [
        {
          event: "Transfer",
          details: `from: ${erc20Caller} → to: 0x0 (Burn) | amount: ${amt.toLocaleString()} PREP`,
          time: new Date().toLocaleTimeString()
        },
        ...prev
      ]);
      setErc20Status({ type: "success", message: `Success: Burned ${amt.toLocaleString()} PREP from ${erc20Caller}. Total supply reduced to ${(erc20Supply - amt).toLocaleString()} PREP.` });
    }
  };

  // SIMULATOR 2: ERC-721 NFT State
  const [nftTokens, setNftTokens] = useState([
    {
      id: 1,
      name: "Genesis Auditor #1",
      owner: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
      rarity: "Legendary",
      trait: "Formal Verification",
      score: 98,
      tokenUri: "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.json"
    },
    {
      id: 2,
      name: "EVM Internals Master #2",
      owner: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
      rarity: "Epic",
      trait: "Gas Golfing & Assembly",
      score: 91,
      tokenUri: "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/2.json"
    }
  ]);
  const [selectedNft, setSelectedNft] = useState(nftTokens[0]);
  const [nftMintRecipient, setNftMintRecipient] = useState("0x70997970C51812dc3A010C7d01b50e0d17dc79C8");
  const [nftMintName, setNftMintName] = useState("DeFi Security Specialist");
  const [nftMintRarity, setNftMintRarity] = useState("Epic");
  const [nftMintTrait, setNftMintTrait] = useState("Reentrancy Audit");
  const [nftSimulateUnsafeReceiver, setNftSimulateUnsafeReceiver] = useState(false);
  const [nftTransferStatus, setNftTransferStatus] = useState(null);

  const handleNftMint = () => {
    const newId = nftTokens.length + 1;
    const newNft = {
      id: newId,
      name: `${nftMintName} #${newId}`,
      owner: nftMintRecipient,
      rarity: nftMintRarity,
      trait: nftMintTrait,
      score: Math.floor(Math.random() * 15) + 85,
      tokenUri: `ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/${newId}}.json`
    };
    setNftTokens((prev) => [...prev, newNft]);
    setSelectedNft(newNft);
  };

  const handleNftSafeTransfer = () => {
    if (nftSimulateUnsafeReceiver) {
      setNftTransferStatus({
        success: false,
        msg: "REVERTED: ERC721: transfer to non ERC721Receiver implementer! Target contract did not return magic bytes4 0x150b7a02."
      });
    } else {
      setNftTransferStatus({
        success: true,
        msg: `SUCCESS: safeTransferFrom completed. onERC721Received returned 0x150b7a02. Token #${selectedNft.id} transferred.`
      });
    }
  };

  // SIMULATOR 3: ERC-1155 State
  const erc1155Items = [
    { id: 1, name: "Prep Gold Coins", type: "Fungible", supply: 100000 },
    { id: 2, name: "Mana Elixir", type: "Fungible", supply: 500 },
    { id: 1001, name: "Auditor God-Blade", type: "Non-Fungible", supply: 1 },
    { id: 1002, name: "Reentrancy Shield", type: "Non-Fungible", supply: 1 }
  ];
  const [erc1155Balances, setErc1155Balances] = useState({
    alice: { 1: 5000, 2: 10, 1001: 1, 1002: 0 },
    bob: { 1: 1200, 2: 2, 1001: 0, 1002: 1 },
    treasury: { 1: 93800, 2: 488, 1001: 0, 1002: 0 }
  });
  const [erc1155Sender, setErc1155Sender] = useState("alice");
  const [erc1155Recipient, setErc1155Recipient] = useState("bob");
  const [batchGoldAmt, setBatchGoldAmt] = useState(250);
  const [batchPotionAmt, setBatchPotionAmt] = useState(2);
  const [batchStatus, setBatchStatus] = useState(null);

  const handleBatchTransfer = () => {
    const s = erc1155Sender;
    const r = erc1155Recipient;
    if (s === r) {
      setBatchStatus({ success: false, msg: "Sender and recipient must be distinct accounts." });
      return;
    }
    const goldBal = erc1155Balances[s]?.[1] || 0;
    const potionBal = erc1155Balances[s]?.[2] || 0;
    if (goldBal < batchGoldAmt || potionBal < batchPotionAmt) {
      setBatchStatus({ success: false, msg: `Revert: Insufficient balance for batch items (Gold: ${goldBal}, Potions: ${potionBal}).` });
      return;
    }

    setErc1155Balances((prev) => ({
      ...prev,
      [s]: {
        ...prev[s],
        1: prev[s][1] - batchGoldAmt,
        2: prev[s][2] - batchPotionAmt
      },
      [r]: {
        ...prev[r],
        1: (prev[r][1] || 0) + batchGoldAmt,
        2: (prev[r][2] || 0) + batchPotionAmt
      }
    }));
    setBatchStatus({
      success: true,
      msg: `Success: safeBatchTransferFrom executed! Moved ${batchGoldAmt} Gold + ${batchPotionAmt} Potions in 1 single atomic transaction (51,800 gas).`
    });
  };

  // SIMULATOR 4: Vesting State
  const vestingTotal = 1000000;
  const vestingDuration = 48;
  const vestingCliff = 12;
  const [vestingElapsed, setVestingElapsed] = useState(18);

  const vestedTokens = useMemo(() => {
    if (vestingElapsed < vestingCliff) return 0;
    if (vestingElapsed >= vestingDuration) return vestingTotal;
    return Math.floor(vestingTotal * (vestingElapsed / vestingDuration));
  }, [vestingElapsed]);

  // Quiz State
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(0);

  const handleSelectAnswer = (qId, optionIdx) => {
    if (selectedAnswers[qId] !== undefined) return;
    const isCorrect = optionIdx === QUIZ_QUESTIONS.find((q) => q.id === qId)?.answer;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizScore(0);
  };

  // Interview Accordion State
  const [expandedInterview, setExpandedInterview] = useState(null);

  const checklistItems = CHECKLIST_ITEMS;
  const quizQuestions = QUIZ_QUESTIONS;
  const interviewQuestions = INTERVIEW_QUESTIONS;
  const erc20Addresses = ERC20_ADDRESSES;

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white pb-28 sm:pb-36">
      {/* Top Contextual Navigation Bar */}
      <ModuleNav track="blockchain" currentModuleId="tokens" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
        <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-[#ea580c] border border-orange-500/20 font-mono">
                <Coins size={13} className="text-[#ea580c]" />
                <span>MODULE 12 • ADVANCED CORE CURRICULUM</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600 border border-stone-200">
                <Shield size={12} className="text-stone-500" />
                <span>ERC-20 • ERC-721 • ERC-1155 • Tokenomics</span>
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18181b]">
                ERC Token Standards &amp; Architecture
              </h1>
              <p className="text-xs sm:text-base text-stone-600 max-w-4xl leading-relaxed">
                Master the architectural specifications, internal mapping state, allowance mechanisms, NFT metadata standards, multi-token batch operations, OpenZeppelin implementations, and economic vesting schedules governing the EVM token ecosystem.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase">Curriculum Scope</span>
                <span className="font-bold text-stone-900 text-sm">19 Exhaustive Parts</span>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase">Interactive Tools</span>
                <span className="font-bold text-stone-900 text-sm">4 Live Simulators</span>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase">Knowledge Check</span>
                <span className="font-bold text-stone-900 text-sm">20 MCQs + 14 Scenarios</span>
              </div>
              <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-stone-500 block text-[10px] uppercase">Mastery Tracker</span>
                <span className="font-bold text-orange-600 text-sm">
                  {completedCount} / {CHECKLIST_ITEMS.length} Outcomes ({completionPercentage}%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-[#e7e3da] pb-3">
          {[
            { id: "theory", label: "Academic Curriculum (Parts 1-15)", icon: BookOpen },
            { id: "interactive", label: "Interactive Simulators (4 Engines)", icon: Cpu },
            { id: "lab", label: "Practical Lab & Project (Parts 16-17)", icon: Terminal },
            { id: "quiz", label: "Assessment & Interviews (Part 18)", icon: Award },
            { id: "tracker", label: "Competency Tracker & Summary (Part 19)", icon: ListChecks }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isActive
                    ? "bg-[#ea580c] text-white shadow-xs"
                    : "bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-50 border border-[#e7e3da]"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Tab Content Display */}
        <div className="mt-8">

          {/* TAB 1: ACADEMIC CURRICULUM (PARTS 1 - 15) */}
          {activeTab === "theory" && (
            <div className="space-y-10">
              {/* PART 1: Token Fundamentals */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Token Fundamentals
                  </h2>
                </div>

                {/* 1.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">1.1 What Is a Blockchain Token?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    A blockchain token is a programmable digital asset issued and managed by a smart contract deployed on a blockchain network. Unlike native cryptocurrencies (such as BTC on Bitcoin or ETH on Ethereum), which exist at the base protocol level to compensate validators and meter computational resources, tokens are built on top of an existing smart contract platform using standardized contract interfaces.
                  </p>

                  <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Property</th>
                          <th className="p-3">Native Coin (e.g., ETH)</th>
                          <th className="p-3">Smart Contract Token (e.g., PrepToken / ERC-20)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Creation Level</td>
                          <td className="p-3">Protocol / Base Consensus Layer</td>
                          <td className="p-3">Application Layer (Solidity Smart Contract)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Storage Representation</td>
                          <td className="p-3">Native account state in Ethereum world state trie</td>
                          <td className="p-3">Internal state mapping in contract storage (<code className="font-mono text-stone-800">mapping(address =&gt; uint256)</code>)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Transfer Execution</td>
                          <td className="p-3">Native EVM transaction or opcode (<code className="font-mono text-stone-800">CALL</code> with value)</td>
                          <td className="p-3">Contract execution: <code className="font-mono text-stone-800">transfer(to, amount)</code> call mutating storage</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Gas Payment Utility</td>
                          <td className="p-3">Directly used to pay base network gas fees</td>
                          <td className="p-3">Requires ETH to pay for transaction gas (unless meta-tx/ERC-4337 used)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Conceptual Architecture: PrepToken Example</strong>
                    <p className="leading-relaxed">
                      If the PrepSpaces platform issues <strong>PrepToken (PREP)</strong>, the tokens do not exist as independent files or network packets. Instead, a smart contract deployed at address <code className="font-mono font-bold text-stone-800">0xPrep...</code> maintains a hash table. When Alice sends 100 PREP to Bob, the Ethereum Virtual Machine executes the contract's <code className="font-mono text-stone-800">transfer</code> code, decrementing Alice's entry by 100 and incrementing Bob's entry by 100.
                    </p>
                  </div>
                </div>

                {/* 1.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">1.2 Fungible vs Non-Fungible Tokens</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Digital assets are classified fundamentally by their degree of interchangeability:
                  </p>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-stone-900 font-bold">Fungible Tokens (e.g., ERC-20)</strong>
                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">Interchangeable</span>
                      </div>
                      <p className="text-stone-600 leading-relaxed">
                        Every individual token unit is identical in specification, utility, and market value. One unit of PREP held by Alice is mathematically indistinguishable from one unit of PREP held by Bob. Ideal for currencies, voting rights, and liquidity tokens.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-stone-900 font-bold">Non-Fungible Tokens (e.g., ERC-721)</strong>
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">Unique Asset</span>
                      </div>
                      <p className="text-stone-600 leading-relaxed">
                        Every token possesses a distinct, globally unique identifier (<code className="font-mono text-stone-800">tokenId</code>) and immutable metadata. No two NFTs are identical. Used for verifiable credentials, real-world assets, digital artwork, and property deeds.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900">
                    <strong className="block font-bold mb-1">Semi-Fungible Tokens (ERC-1155)</strong>
                    <p className="leading-relaxed">
                      Semi-fungible tokens behave as fungible assets initially, but can transform into non-fungible assets under specific state transitions. For example, a general admission concert ticket is fungible with any other ticket before the event, but becomes a unique, non-fungible historic souvenir after the ticket is scanned.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 2: ERC Standards */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC Standards &amp; Interoperability
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">2.1 What Is an ERC?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    An <strong>ERC (Ethereum Request for Comments)</strong> is an application-level standard within the Ethereum Improvement Proposal (EIP) ecosystem. While core EIPs define low-level consensus rules and EVM opcodes, ERCs define standard smart contract API interfaces, event definitions, and execution conventions.
                  </p>

                  <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Standard</th>
                          <th className="p-3">Primary Category</th>
                          <th className="p-3">Core Purpose &amp; Innovation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-20</td>
                          <td className="p-3 font-bold text-stone-800">Fungible Tokens</td>
                          <td className="p-3">Universal API for balances, transfers, and allowances across wallets and decentralized exchanges.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-721</td>
                          <td className="p-3 font-bold text-stone-800">Non-Fungible Tokens</td>
                          <td className="p-3">Discrete asset tracking via unique <code className="font-mono">tokenId</code>, safe transfer callbacks, and metadata URIs.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-1155</td>
                          <td className="p-3 font-bold text-stone-800">Multi-Token Standard</td>
                          <td className="p-3">Manages thousands of fungible and non-fungible items in a single contract with batch operations.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-165</td>
                          <td className="p-3 font-bold text-stone-800">Interface Detection</td>
                          <td className="p-3">Allows contracts to query whether a target contract implements a specific interface (<code className="font-mono">supportsInterface</code>).</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-2612</td>
                          <td className="p-3 font-bold text-stone-800">Permit Extension</td>
                          <td className="p-3">Gasless token approvals using off-chain EIP-712 typed cryptographic signatures.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-2981</td>
                          <td className="p-3 font-bold text-stone-800">NFT Royalties</td>
                          <td className="p-3">Standardized royalty information retrieval (<code className="font-mono">royaltyInfo</code>) for secondary marketplace sales.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono font-bold text-orange-600">ERC-4626</td>
                          <td className="p-3 font-bold text-stone-800">Tokenized Vaults</td>
                          <td className="p-3">Yield-bearing vault standard unifying lending markets, aggregators, and interest-bearing tokens.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Why Standards Matter</strong>
                    <p className="leading-relaxed">
                      Without standards, every developer would create custom function names (e.g., <code className="font-mono text-stone-800">sendCoin</code> vs <code className="font-mono text-stone-800">moveToken</code>). Wallets like MetaMask and DEXs like Uniswap would need custom integrations for every single token. ERC standards ensure that any wallet, DEX, block explorer, or lending protocol can interact seamlessly with any compliant token on day one.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 3: ERC-20 Architecture */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-20 Token Architecture
                  </h2>
                </div>

                {/* 3.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">3.1 Introduction to ERC-20</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Proposed by Fabian Vogelsteller and Vitalik Buterin in November 2015, ERC-20 has become the foundational building block of decentralized finance (DeFi). Internally, an ERC-20 token contract is a lightweight accounting ledger powered by two primary mappings:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-amber-400 font-bold">// Core ERC-20 Storage State</div>
                    <div>mapping(address =&gt; uint256) private _balances;</div>
                    <div>mapping(address =&gt; mapping(address =&gt; uint256)) private _allowances;</div>
                    <div>uint256 private _totalSupply;</div>
                  </div>
                </div>

                {/* 3.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">3.2 ERC-20 Standard Functions</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The ERC-20 standard defines exactly 6 mandatory functions:
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">1. totalSupply() external view returns (uint256)</div>
                      <p className="mt-1 text-stone-600">Returns the total number of circulating tokens in existence across all accounts.</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">2. balanceOf(address account) external view returns (uint256)</div>
                      <p className="mt-1 text-stone-600">Returns the individual token balance owned by the queried address (<code className="font-mono">_balances[account]</code>).</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">3. transfer(address to, uint256 amount) external returns (bool)</div>
                      <p className="mt-1 text-stone-600">Transfers <code className="font-mono">amount</code> tokens directly from the caller (<code className="font-mono">msg.sender</code>) to recipient <code className="font-mono">to</code>. Must emit a <code className="font-mono">Transfer</code> event.</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">4. approve(address spender, uint256 amount) external returns (bool)</div>
                      <p className="mt-1 text-stone-600">Authorizes third-party <code className="font-mono">spender</code> to withdraw up to <code className="font-mono">amount</code> tokens from the caller's account via <code className="font-mono">transferFrom</code>. Emits an <code className="font-mono">Approval</code> event.</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">5. allowance(address owner, address spender) external view returns (uint256)</div>
                      <p className="mt-1 text-stone-600">Returns the remaining spending allowance granted by <code className="font-mono">owner</code> to <code className="font-mono">spender</code> (<code className="font-mono">_allowances[owner][spender]</code>).</p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                      <div className="font-mono font-bold text-orange-600">6. transferFrom(address from, address to, uint256 amount) external returns (bool)</div>
                      <p className="mt-1 text-stone-600">Allows an authorized spender to move <code className="font-mono">amount</code> tokens from <code className="font-mono">from</code> to <code className="font-mono">to</code>, reducing the caller's allowance by <code className="font-mono">amount</code>.</p>
                    </div>
                  </div>
                </div>

                {/* 3.3 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">3.3 ERC-20 Events</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    EVM smart contracts cannot read past events, but off-chain applications (block explorers, wallets, indexers) rely on events to track state:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-emerald-400 font-bold">// Mandatory ERC-20 Events</div>
                    <div>event Transfer(address indexed from, address indexed to, uint256 value);</div>
                    <div>event Approval(address indexed owner, address indexed spender, uint256 value);</div>
                  </div>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Event Indexing Mechanics</strong>
                    <p className="leading-relaxed">
                      The <code className="font-mono text-stone-800">indexed</code> parameters allow bloom filters in Ethereum block headers to rapidly locate all transfers involving a specific address without downloading or scanning every transaction in the block.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 4: Minting and Burning */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-20 Token Minting and Burning
                  </h2>
                </div>

                {/* 4.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">4.1 Token Minting</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Minting is the creation of new tokens, increasing the total circulating supply. The mathematical state update is:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// Minting Mathematical Conservation</div>
                    <div className="text-stone-300">S_new = S_old + M</div>
                    <div className="text-stone-300">balances[recipient]_new = balances[recipient]_old + M</div>
                    <div className="mt-2 text-stone-400">// Emitted Event Convention:</div>
                    <div className="text-emerald-400">emit Transfer(address(0), recipient, M);</div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    By convention, the <code className="font-mono text-stone-800">from</code> address is <code className="font-mono text-stone-800">address(0)</code> (0x0000...0000). This indicates to indexers that new tokens were generated out of the protocol, rather than transferred from an existing holder.
                  </p>
                </div>

                {/* 4.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">4.2 Token Burning</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Burning permanently removes tokens from circulation, decreasing total supply. Used in buy-and-burn tokenomics, deflationary mechanisms, or redemption protocols:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// Burning Mathematical Conservation</div>
                    <div className="text-stone-300">S_new = S_old - B</div>
                    <div className="text-stone-300">balances[burner]_new = balances[burner]_old - B</div>
                    <div className="mt-2 text-stone-400">// Emitted Event Convention:</div>
                    <div className="text-emerald-400">emit Transfer(burner, address(0), B);</div>
                  </div>
                </div>
              </section>

              {/* PART 5: Allowance & Approval Mechanisms */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-20 Allowance &amp; Approval Mechanisms
                  </h2>
                </div>

                {/* 5.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">5.1 What Is an Allowance?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Direct transfers (<code className="font-mono text-stone-800">transfer</code>) only work when an Externally Owned Account (EOA) initiates a send. But smart contracts cannot withdraw tokens from user wallets without prior permission. The two-step approval pattern solves this:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                    <strong className="text-stone-900 block font-bold">The Two-Step DEX Swap Workflow:</strong>
                    <ol className="list-decimal pl-4 space-y-1 text-stone-700 leading-relaxed">
                      <li><strong>Step 1 (Approve):</strong> Alice calls <code className="font-mono text-stone-800">approve(UniswapRouter, 500 PREP)</code>. Her wallet sets <code className="font-mono text-stone-800">_allowances[Alice][UniswapRouter] = 500</code>.</li>
                      <li><strong>Step 2 (Swap &amp; TransferFrom):</strong> Alice calls <code className="font-mono text-stone-800">swapExactTokensForETH(...)</code> on Uniswap. Uniswap invokes <code className="font-mono text-stone-800">prepToken.transferFrom(Alice, poolAddress, 500)</code>.</li>
                      <li><strong>State Mutation:</strong> The token contract verifies Alice has &ge; 500 PREP and Uniswap's allowance is &ge; 500. It deducts 500 from the allowance and transfers 500 PREP to the pool.</li>
                    </ol>
                  </div>
                </div>

                {/* 5.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">5.2 The Approval Security Problem</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The classic ERC-20 approval design contains two major security risks:
                  </p>

                  <div className="mt-4 space-y-4">
                    <div className="p-4 rounded-2xl border border-red-200 bg-red-50/50 text-xs">
                      <strong className="text-red-900 font-bold block mb-1">1. Unlimited Approvals Risk (type(uint256).max)</strong>
                      <p className="text-red-800 leading-relaxed">
                        To save users from signing an approval transaction before every trade, DApps routinely request approval for <code className="font-mono font-bold">2^256 - 1</code> tokens. If that DEX router or bridge is later hacked or possesses an exploit, the attacker can drain all tokens from every wallet that ever granted unlimited approval!
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/50 text-xs">
                      <strong className="text-amber-900 font-bold block mb-1">2. Approval Front-Running Race Condition</strong>
                      <p className="text-amber-800 leading-relaxed">
                        If Alice has approved Bob for 100 tokens and decides to reduce it to 50 via <code className="font-mono text-stone-800">approve(Bob, 50)</code>, Bob can monitor the mempool, front-run Alice's transaction with <code className="font-mono text-stone-800">transferFrom(Alice, 100)</code>, drain 100 tokens, and then drain an additional 50 tokens once Alice's transaction confirms!
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Modern Mitigations:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-stone-600">
                      <li><strong>Reset to Zero First:</strong> Call <code className="font-mono text-stone-800">approve(spender, 0)</code> before updating to a new non-zero value.</li>
                      <li><strong>increaseAllowance / decreaseAllowance:</strong> Atomically modify allowance based on previous expected value.</li>
                      <li><strong>ERC-2612 Permit:</strong> Replaces on-chain approvals with off-chain cryptographic signatures verified via EIP-712.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PART 6: Transfer Security & Invariants */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-20 Token Transfer Security &amp; Invariants
                  </h2>
                </div>

                {/* 6.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">6.1 Common ERC-20 Vulnerabilities</h3>
                  <div className="mt-3 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Vulnerability</th>
                          <th className="p-3">Root Cause</th>
                          <th className="p-3">Auditing &amp; Mitigation Strategy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-red-600">Unrestricted Minting</td>
                          <td className="p-3">Missing <code className="font-mono">onlyOwner</code> or access control modifier on mint function.</td>
                          <td className="p-3">Use OpenZeppelin <code className="font-mono">AccessControl</code> or <code className="font-mono">Ownable2Step</code>.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-red-600">Missing Return Value</td>
                          <td className="p-3">Tokens like USDT return <code className="font-mono">void</code> instead of <code className="font-mono">bool</code> on transfer.</td>
                          <td className="p-3">Use OpenZeppelin <code className="font-mono">SafeERC20.safeTransfer</code> wrapper.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-red-600">Fee-on-Transfer Mismatch</td>
                          <td className="p-3">Token deducts a tax on transfer, so recipient receives less than <code className="font-mono">amount</code>.</td>
                          <td className="p-3">Measure actual balance change (<code className="font-mono">balanceAfter - balanceBefore</code>) in vaults.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-red-600">Reentrancy in ERC-777</td>
                          <td className="p-3">Hooks like <code className="font-mono">tokensToSend</code> hand control back to sender during transfer.</td>
                          <td className="p-3">Enforce CEI pattern (Checks-Effects-Interactions) and <code className="font-mono">ReentrancyGuard</code>.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 6.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">6.2 Token Transfer Conservation Invariants</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Formal verification and property-based fuzzing rely on mathematical invariants that must never be violated under any execution sequence:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-amber-400 font-bold">// Invariant 1: Total Supply Conservation</div>
                    <div>sum(balances[account] for all account) == totalSupply</div>
                    <div className="mt-2 text-amber-400 font-bold">// Invariant 2: Transfer Conservation (Non-Mint/Burn)</div>
                    <div>balanceOf(A)_new + balanceOf(B)_new == balanceOf(A)_old + balanceOf(B)_old</div>
                  </div>
                </div>
              </section>

              {/* PART 7: ERC-721 NFT Standard */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-721 Non-Fungible Token Standard
                  </h2>
                </div>

                {/* 7.1 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">7.1 Introduction to ERC-721</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Authored by William Entriken, Dieter Shirley, Jacob Evans, and Nastassia Sachs in January 2018, ERC-721 standardizes non-fungible assets. Instead of tracking aggregate balances per account, an ERC-721 contract tracks discrete asset ownership using a unique integer:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// Core ERC-721 Storage State</div>
                    <div>mapping(uint256 =&gt; address) private _owners;</div>
                    <div>mapping(address =&gt; uint256) private _balances; // Count of NFTs held by owner</div>
                    <div>mapping(uint256 =&gt; address) private _tokenApprovals;</div>
                    <div>mapping(address =&gt; mapping(address =&gt; bool)) private _operatorApprovals;</div>
                  </div>
                </div>

                {/* 7.2 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">7.2 ERC-721 Core Functions</h3>
                  <div className="mt-3 space-y-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono">
                      <span className="font-bold text-orange-600">ownerOf(uint256 tokenId) view returns (address)</span>
                      <p className="font-sans text-stone-600 mt-0.5">Returns the owner address of the specified discrete token ID.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono">
                      <span className="font-bold text-orange-600">safeTransferFrom(address from, address to, uint256 tokenId)</span>
                      <p className="font-sans text-stone-600 mt-0.5">Transfers token and verifies whether recipient contract implements <code className="font-mono">onERC721Received</code> callback.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono">
                      <span className="font-bold text-orange-600">setApprovalForAll(address operator, bool approved)</span>
                      <p className="font-sans text-stone-600 mt-0.5">Grants operator (e.g. OpenSea, Blur) permission to manage all NFTs owned by caller.</p>
                    </div>
                  </div>
                </div>

                {/* 7.3 */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">7.3 Safe Transfers &amp; onERC721Received Callback</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    If an NFT is transferred to a smart contract address that does not implement receiver handling logic, the NFT becomes permanently locked. To prevent this, <code className="font-mono text-stone-800">safeTransferFrom</code> checks if the recipient has contract bytecode. If true, it calls:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div>IERC721Receiver(to).onERC721Received(operator, from, tokenId, data)</div>
                    <div className="text-stone-400 mt-1">// Must return magic bytes4 selector:</div>
                    <div className="text-emerald-400">0x150b7a02 == IERC721Receiver.onERC721Received.selector</div>
                  </div>
                </div>
              </section>

              {/* PART 8: NFT Metadata and Token URI */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    NFT Metadata and Token URI Architecture
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">8.1 What Is NFT Metadata?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    The ERC-721 contract itself only stores ownership numbers (<code className="font-mono text-stone-800">tokenId =&gt; owner</code>). Rich information—such as the item's name, description, media link, and rarity traits—is externalized via <code className="font-mono text-stone-800">tokenURI(tokenId)</code> returning a pointer to a JSON metadata schema:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// OpenSea &amp; EIP-721 Standard Metadata JSON Schema</div>
                    <pre className="text-stone-300 mt-2 text-[11px] leading-relaxed">
{`{
  "name": "PrepSpaces Genesis Certificate #1",
  "description": "Verifiable University Blockchain Engineering Credential",
  "image": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.png",
  "external_url": "https://prepspaces.com/credentials/1",
  "attributes": [
    { "trait_type": "Specialization", "value": "Smart Contract Auditing" },
    { "trait_type": "Audit Score", "value": 98 },
    { "trait_type": "Course Batch", "value": "2026-Q1" },
    { "trait_type": "Rarity Tier", "value": "Legendary" }
  ]
}`}
                    </pre>
                  </div>

                  <div className="mt-4 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Storage Architecture</th>
                          <th className="p-3">Permanence &amp; Trust</th>
                          <th className="p-3">Gas Cost &amp; Trade-offs</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Decentralized (IPFS / Arweave)</td>
                          <td className="p-3">Content-addressed via cryptographic hash. Immutable once pinned.</td>
                          <td className="p-3">Low gas cost on-chain (only stores CID string). Requires persistent pinning services.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Fully On-Chain (Base64 SVG)</td>
                          <td className="p-3">100% decentralized and permanent. Lives as long as Ethereum runs.</td>
                          <td className="p-3">Extremely high gas to deploy bytecode. Restricted to lightweight SVGs.</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Centralized Web Server (HTTPS)</td>
                          <td className="p-3">Fragile: Server can go offline, rug pull metadata, or be seized.</td>
                          <td className="p-3">Lowest gas, but introduces single point of failure and centralized trust.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* PART 9: ERC-1155 Multi-Token Standard */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    ERC-1155 Multi-Token Standard
                  </h2>
                </div>

                {/* 9.1 & 9.2 */}
                <div>
                  <h3 className="text-base font-bold text-[#18181b]">9.1 &amp; 9.2 Multi-Token Architecture &amp; Batch Operations</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Developed by Enjin in 2018, ERC-1155 consolidates multiple token types (fungible and non-fungible) into a single smart contract. In a gaming economy, an ERC-20 contract for Gold, an ERC-20 contract for Silver, and an ERC-721 contract for Weapons would require 3 separate contract deployments. With ERC-1155, all assets coexist in one mapping:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// ERC-1155 Storage Layout</div>
                    <div>// mapping(tokenId =&gt; mapping(account =&gt; balance))</div>
                    <div>mapping(uint256 =&gt; mapping(address =&gt; uint256)) private _balances;</div>
                    <div className="mt-2 text-stone-400">// Native Batch Transfer:</div>
                    <div className="text-emerald-400">safeBatchTransferFrom(from, to, ids[], amounts[], data);</div>
                  </div>
                </div>

                {/* 9.3 Comparison */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-[#18181b]">9.3 Comparison: ERC-20 vs ERC-721 vs ERC-1155</h3>
                  <div className="mt-3 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Feature</th>
                          <th className="p-3">ERC-20</th>
                          <th className="p-3">ERC-721</th>
                          <th className="p-3">ERC-1155</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Asset Type</td>
                          <td className="p-3">Fungible only</td>
                          <td className="p-3">Non-Fungible only</td>
                          <td className="p-3">Fungible, Non-Fungible, &amp; Semi-Fungible</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Contract Count</td>
                          <td className="p-3">1 contract per token type</td>
                          <td className="p-3">1 contract per NFT collection</td>
                          <td className="p-3">1 contract for thousands of asset types</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Batch Transfers</td>
                          <td className="p-3">No (Requires multicall loop)</td>
                          <td className="p-3">No (Multiple transactions)</td>
                          <td className="p-3 font-bold text-emerald-600">Yes (Native safeBatchTransferFrom)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Gas Efficiency</td>
                          <td className="p-3">Standard</td>
                          <td className="p-3">High gas for bulk transfers</td>
                          <td className="p-3 font-bold text-emerald-600">60%–80% lower gas for multi-asset actions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* PART 10: NFT Minting Economics */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    NFT Minting Architecture &amp; Economics
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">10.1 &amp; 10.2 Minting Pipeline &amp; Economic Controls</h3>
                  <div className="mt-3 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-2">5-Stage NFT Creation Pipeline:</strong>
                    <ol className="list-decimal pl-4 space-y-1.5 leading-relaxed text-stone-600">
                      <li><strong>Media Generation &amp; Hashing:</strong> High-resolution digital artwork is generated and cryptographically hashed (SHA-256).</li>
                      <li><strong>Decentralized Pinning:</strong> Media assets and JSON metadata schemas are uploaded and pinned to IPFS nodes (IPFS CID generation).</li>
                      <li><strong>Smart Contract Deployment:</strong> ERC-721 contract is deployed with hard supply caps (<code className="font-mono">MAX_SUPPLY</code>) and base URI.</li>
                      <li><strong>Allowlist Phase (Merkle Tree):</strong> Privileged community members mint using cryptographic Merkle proofs, avoiding expensive on-chain whitelist storage.</li>
                      <li><strong>Public Mint Phase:</strong> Open public minting with per-wallet transaction limits (<code className="font-mono">MAX_PER_WALLET</code>) and payment verification (<code className="font-mono">msg.value == price * quantity</code>).</li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* PART 11: NFT Marketplaces & ERC-2981 */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    NFT Marketplaces &amp; Royalties (ERC-2981)
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">11.1 Marketplace Architecture</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Decentralized NFT marketplaces (such as OpenSea, LooksRare, or Seaport) operate non-custodially. The seller lists their token by granting operator approval (<code className="font-mono text-stone-800">setApprovalForAll</code>) and signing an off-chain cryptographic order (EIP-712).
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-amber-400 font-bold">// ERC-2981 Royalty Standard Interface</div>
                    <div>function royaltyInfo(uint256 tokenId, uint256 salePrice)</div>
                    <div>&nbsp;&nbsp;external view returns (address receiver, uint256 royaltyAmount);</div>
                  </div>

                  <div className="mt-3 p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900">
                    <strong className="block font-bold mb-1">Architectural Limitation of ERC-2981:</strong>
                    <p className="leading-relaxed">
                      ERC-2981 is an informational standard. It signals to marketplaces what royalty should be paid, but does not enforce payment on-chain during raw <code className="font-mono text-amber-800">safeTransferFrom</code> calls. Zero-royalty platforms can bypass creator fees unless the NFT contract integrates an operator filter registry.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 12: OpenZeppelin Implementations */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 12
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    OpenZeppelin Token Implementations
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">12.1 Why OpenZeppelin?</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Writing token standards from scratch is dangerous. Subtle bugs in allowance checking, overflow vulnerabilities, or reentrancy flaws have cost Web3 projects hundreds of millions of dollars. OpenZeppelin provides battle-tested, modular, and formally verified contract implementations:
                  </p>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";

contract PrepToken is ERC20, Ownable2Step {
    uint256 public constant MAX_SUPPLY = 1_000_000 * 10 ** 18;

    error CapExceeded(uint256 attempted, uint256 maxSupply);

    constructor() ERC20("PrepToken", "PREP") Ownable2Step(msg.sender) {
        _mint(msg.sender, 500_000 * 10 ** 18);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        if (totalSupply() + amount > MAX_SUPPLY) {
            revert CapExceeded(totalSupply() + amount, MAX_SUPPLY);
        }
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* PART 13: Tokenomics Fundamentals */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 13
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Token Economics Fundamentals (Tokenomics)
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">13.1 &amp; 13.2 Supply Dynamics &amp; Distribution Allocation</h3>
                  <div className="mt-3 overflow-x-auto rounded-2xl border border-stone-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                        <tr>
                          <th className="p-3">Stakeholder Group</th>
                          <th className="p-3">Allocation %</th>
                          <th className="p-3">Target Supply (PREP)</th>
                          <th className="p-3">Vesting &amp; Lockup Schedule</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-600">
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Community Ecosystem &amp; Grants</td>
                          <td className="p-3 font-mono font-bold text-emerald-600">40.0%</td>
                          <td className="p-3 font-mono">400,000 PREP</td>
                          <td className="p-3">10% at TGE, 48-month linear emission</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Core Engineering &amp; Development</td>
                          <td className="p-3 font-mono font-bold text-stone-800">20.0%</td>
                          <td className="p-3 font-mono">200,000 PREP</td>
                          <td className="p-3">12-month cliff, 36-month linear vest</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">DAO Treasury Reserve</td>
                          <td className="p-3 font-mono font-bold text-stone-800">15.0%</td>
                          <td className="p-3 font-mono">150,000 PREP</td>
                          <td className="p-3">Locked in timelock governance contract</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Early Strategic Investors</td>
                          <td className="p-3 font-mono font-bold text-stone-800">15.0%</td>
                          <td className="p-3 font-mono">150,000 PREP</td>
                          <td className="p-3">12-month cliff, 24-month linear vest</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-stone-900">Founders &amp; Key Advisors</td>
                          <td className="p-3 font-mono font-bold text-stone-800">10.0%</td>
                          <td className="p-3 font-mono">100,000 PREP</td>
                          <td className="p-3">12-month cliff, 48-month linear vest</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* PART 14: Token Vesting */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 14
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Token Vesting &amp; Cliff Architecture
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">14.1 Linear Vesting Mathematics</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Token vesting ensures stakeholders cannot liquidate their allocations immediately upon launch, protecting community holders from sudden sell-offs. The linear vesting formula with cliff period is:
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                    <div className="text-amber-400 font-bold">// Linear Vesting Formula with Cliff</div>
                    <div>If t &lt; T_cliff: Vested(t) = 0</div>
                    <div>If T_cliff &le; t &lt; T_total: Vested(t) = TotalAllocation * (t / T_total)</div>
                    <div>If t &ge; T_total: Vested(t) = TotalAllocation</div>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700">
                    <strong className="text-stone-900 block font-bold mb-1">Example Calculation:</strong>
                    <p className="leading-relaxed">
                      For a 100,000 PREP grant with a 12-month cliff on a 48-month schedule:
                      <br />• At Month 6: 0 PREP vested (cliff active).
                      <br />• At Month 12: Exactly 25,000 PREP unlocks simultaneously (100,000 &times; 12/48).
                      <br />• At Month 24: Exactly 50,000 PREP has vested.
                      <br />• At Month 48: 100,000 PREP fully vested.
                    </p>
                  </div>
                </div>
              </section>

              {/* PART 15: Governance Tokens */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 15
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Governance Tokens &amp; On-Chain DAOs
                  </h2>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#18181b]">15.1 Governance Tokens</h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Governance tokens represent decentralized voting power in on-chain DAOs. To defend against flash-loan attacks (where an attacker borrows millions in tokens to manipulate a vote within a single block), modern governance contracts use historical block checkpoints (<code className="font-mono text-stone-800">ERC20Votes</code>):
                  </p>

                  <div className="mt-3 p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs">
                    <div className="text-amber-400 font-bold">// OpenZeppelin ERC20Votes Checkpointing</div>
                    <div>getPastVotes(account, proposalSnapshotBlock)</div>
                    <div className="text-stone-400 mt-1">// Voting power is locked to the block PRIOR to proposal launch!</div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* TAB 2: INTERACTIVE SIMULATORS */}
          {activeTab === "interactive" && (
            <div className="space-y-10">
              {/* Simulator Selector Header */}
              <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                      Hands-On Protocol Laboratory
                    </span>
                    <h2 className="text-2xl font-bold text-[#18181b]">
                      ERC Token Standards Live Simulators
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Execute live state transitions, test allowance mechanisms, mint NFTs with IPFS metadata, and compute linear vesting schedules.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSimulatorTab("erc20")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "erc20"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      1. ERC-20 Engine
                    </button>
                    <button
                      onClick={() => setSimulatorTab("erc721")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "erc721"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      2. ERC-721 & Metadata
                    </button>
                    <button
                      onClick={() => setSimulatorTab("erc1155")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "erc1155"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      3. ERC-1155 Inventory
                    </button>
                    <button
                      onClick={() => setSimulatorTab("vesting")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                        simulatorTab === "vesting"
                          ? "bg-[#ea580c] text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      4. Token Vesting
                    </button>
                  </div>
                </div>

                {/* SIMULATOR 1: ERC-20 ENGINE */}
                {simulatorTab === "erc20" && (
                  <div className="mt-6 space-y-6">
                    {/* Supply Overview Bar */}
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex flex-wrap items-center justify-between text-xs font-mono mb-2">
                        <span className="font-bold text-stone-800">
                          Total Circulating Supply: <span className="text-[#ea580c]">{erc20Supply.toLocaleString()} PREP</span>
                        </span>
                        <span className="text-stone-500">
                          Hard Cap: <span className="font-bold text-stone-700">{erc20Cap.toLocaleString()} PREP</span> (
                          {((erc20Supply / erc20Cap) * 100).toFixed(1)}% Minted)
                        </span>
                      </div>
                      <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (erc20Supply / erc20Cap) * 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Account Balances Table */}
                    <div>
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-2">
                        Internal Balance Mapping: mapping(address =&gt; uint256) _balances
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {Object.entries(erc20Balances).map(([acc, bal]) => (
                          <div
                            key={acc}
                            className={`p-3.5 rounded-xl border transition ${
                              erc20Caller === acc
                                ? "border-orange-500 bg-orange-50/60 ring-2 ring-orange-200"
                                : "border-stone-200 bg-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold capitalize text-stone-800">
                                {acc} {acc === "deployer" && "(Owner)"}
                              </span>
                              <button
                                onClick={() => setErc20Caller(acc)}
                                className="text-[10px] font-mono text-orange-600 hover:underline cursor-pointer"
                              >
                                {erc20Caller === acc ? "Selected Caller" : "Set Caller"}
                              </button>
                            </div>
                            <div className="mt-2 text-lg font-bold font-mono text-stone-900">
                              {bal.toLocaleString()} <span className="text-xs text-stone-500">PREP</span>
                            </div>
                            <div className="text-[10px] font-mono text-stone-400 truncate mt-1">
                              {erc20Addresses[acc]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Allowances Sub-section */}
                    <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-900 uppercase">
                          Active Allowances: _allowances[owner][spender]
                        </span>
                        <span className="text-[11px] text-amber-700">
                          Authorizes third parties to call transferFrom()
                        </span>
                      </div>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                        {Object.entries(erc20Allowances).map(([owner, spenders]) =>
                          Object.entries(spenders).map(([spender, amt]) => (
                            <div key={`${owner}-${spender}`} className="p-2.5 rounded-xl bg-white border border-amber-200/80 text-xs">
                              <span className="text-stone-500 font-mono text-[10px] block">
                                {owner} → {spender}
                              </span>
                              <span className="font-mono font-bold text-stone-800">
                                {amt === Infinity || amt > 1000000000 ? "type(uint256).max (Infinite)" : `${amt.toLocaleString()} PREP`}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Action Controls */}
                    <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-3">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-stone-400">Caller (msg.sender):</span>
                          <span className="font-mono font-bold text-orange-400 capitalize">{erc20Caller}</span>
                        </div>
                        <div className="flex gap-2">
                          {["transfer", "approve", "transferFrom", "mint", "burn"].map((op) => (
                            <button
                              key={op}
                              onClick={() => setErc20Operation(op)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                                erc20Operation === op
                                  ? "bg-orange-600 text-white"
                                  : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                              }`}
                            >
                              {op}()
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Operation Inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        {erc20Operation === "transferFrom" && (
                          <div>
                            <label className="block text-[11px] text-stone-400 mb-1">From (Owner with Allowance):</label>
                            <select
                              value={erc20FromAccount}
                              onChange={(e) => setErc20FromAccount(e.target.value)}
                              className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 text-white font-mono"
                            >
                              {Object.keys(erc20Balances).map((acc) => (
                                <option key={acc} value={acc}>
                                  {acc}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {(erc20Operation === "transfer" || erc20Operation === "transferFrom" || erc20Operation === "mint") && (
                          <div>
                            <label className="block text-[11px] text-stone-400 mb-1">To (Recipient Address):</label>
                            <select
                              value={erc20ToAccount}
                              onChange={(e) => setErc20ToAccount(e.target.value)}
                              className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 text-white font-mono"
                            >
                              {Object.keys(erc20Balances).map((acc) => (
                                <option key={acc} value={acc}>
                                  {acc}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {erc20Operation === "approve" && (
                          <div>
                            <label className="block text-[11px] text-stone-400 mb-1">Spender (Contract / Router):</label>
                            <select
                              value={erc20SpenderAccount}
                              onChange={(e) => setErc20SpenderAccount(e.target.value)}
                              className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 text-white font-mono"
                            >
                              {Object.keys(erc20Balances).map((acc) => (
                                <option key={acc} value={acc}>
                                  {acc}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">Amount (PREP):</label>
                          <input
                            type="number"
                            value={erc20Amount}
                            onChange={(e) => setErc20Amount(Number(e.target.value))}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 text-white font-mono"
                            placeholder="Amount..."
                            min="1"
                          />
                        </div>

                        <div className="flex items-end">
                          <button
                            onClick={handleErc20Execute}
                            className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold font-mono text-xs transition cursor-pointer shadow-md"
                          >
                            Execute {erc20Operation}()
                          </button>
                        </div>
                      </div>

                      {erc20Status && (
                        <div
                          className={`p-3 rounded-xl text-xs font-mono ${
                            erc20Status.type === "success"
                              ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800"
                              : "bg-red-950/80 text-red-300 border border-red-800"
                          }`}
                        >
                          {erc20Status.message}
                        </div>
                      )}
                    </div>

                    {/* Event Log Output */}
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-stone-700 uppercase">
                          EVM Event Logs: Transfer & Approval
                        </span>
                        <span className="text-[10px] font-mono text-stone-500">
                          {erc20Logs.length} events indexed
                        </span>
                      </div>
                      <div className="space-y-1.5 max-h-48 overflow-y-auto font-mono text-[11px]">
                        {erc20Logs.map((log, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-white border border-stone-200 flex items-center justify-between">
                            <span className="text-orange-600 font-bold">{log.event}</span>
                            <span className="text-stone-600 truncate max-w-xs">{log.details}</span>
                            <span className="text-stone-400 text-[10px]">{log.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* SIMULATOR 2: ERC-721 & METADATA */}
                {simulatorTab === "erc721" && (
                  <div className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Left: Mint Form */}
                      <div className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-4">
                        <h3 className="text-sm font-bold text-stone-900 border-b border-stone-200 pb-2">
                          Mint PrepSpaces NFT: safeMint(address to, string uri)
                        </h3>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">Recipient Address:</label>
                          <select
                            value={nftMintRecipient}
                            onChange={(e) => setNftMintRecipient(e.target.value)}
                            className="w-full rounded-xl bg-white border border-stone-300 p-2 text-xs font-mono"
                          >
                            <option value="0x70997970C51812dc3A010C7d01b50e0d17dc79C8">Alice (0x7099...79C8)</option>
                            <option value="0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC">Bob (0x3C44...9BC9)</option>
                            <option value="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266">Deployer (0xf39F...2266)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-stone-700 mb-1">Asset Name:</label>
                          <input
                            type="text"
                            value={nftMintName}
                            onChange={(e) => setNftMintName(e.target.value)}
                            className="w-full rounded-xl bg-white border border-stone-300 p-2 text-xs"
                            placeholder="e.g. Genesis Auditor"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 mb-1">Rarity Tier:</label>
                            <select
                              value={nftMintRarity}
                              onChange={(e) => setNftMintRarity(e.target.value)}
                              className="w-full rounded-xl bg-white border border-stone-300 p-2 text-xs"
                            >
                              <option value="Common">Common</option>
                              <option value="Rare">Rare</option>
                              <option value="Epic">Epic</option>
                              <option value="Legendary">Legendary</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-stone-700 mb-1">Specialization:</label>
                            <select
                              value={nftMintTrait}
                              onChange={(e) => setNftMintTrait(e.target.value)}
                              className="w-full rounded-xl bg-white border border-stone-300 p-2 text-xs"
                            >
                              <option value="Reentrancy Audit">Reentrancy Audit</option>
                              <option value="EVM Bytecode Analysis">EVM Bytecode</option>
                              <option value="ZK Prover Systems">ZK Prover</option>
                              <option value="DeFi Flash Loan Defense">Flash Loan Defense</option>
                            </select>
                          </div>
                        </div>

                        <button
                          onClick={handleNftMint}
                          className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs transition cursor-pointer shadow-md"
                        >
                          Mint NFT #{nftTokens.length + 1}
                        </button>
                      </div>

                      {/* Center: Minted NFT Gallery Card */}
                      <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-4">
                        <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                          <span className="text-xs font-mono font-bold uppercase text-stone-500">
                            Token Gallery (Click to Inspect)
                          </span>
                          <span className="text-xs font-mono text-orange-600 font-bold">
                            Total: {nftTokens.length} NFTs
                          </span>
                        </div>

                        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                          {nftTokens.map((nft) => (
                            <div
                              key={nft.id}
                              onClick={() => setSelectedNft(nft)}
                              className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                                selectedNft.id === nft.id
                                  ? "border-orange-500 bg-orange-50/50 shadow-xs"
                                  : "border-stone-200 hover:border-stone-300 bg-stone-50/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold font-mono text-xs shadow-xs">
                                  #{nft.id}
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-stone-900">{nft.name}</div>
                                  <div className="text-[10px] text-stone-500 font-mono truncate max-w-[140px]">
                                    Owner: {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}
                                  </div>
                                </div>
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  nft.rarity === "Legendary"
                                    ? "bg-amber-100 text-amber-800 border border-amber-300"
                                    : nft.rarity === "Epic"
                                    ? "bg-purple-100 text-purple-800 border border-purple-300"
                                    : nft.rarity === "Rare"
                                    ? "bg-blue-100 text-blue-800 border border-blue-300"
                                    : "bg-stone-100 text-stone-700"
                                }`}
                              >
                                {nft.rarity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: IPFS Metadata JSON Inspector */}
                      <div className="rounded-2xl border border-stone-800 bg-stone-950 p-5 text-stone-200 font-mono text-xs space-y-3">
                        <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                          <span className="text-amber-400 font-bold">// tokenURI({selectedNft.id}) Inspector</span>
                          <span className="text-[10px] text-stone-400">ERC-721 Metadata Standard</span>
                        </div>

                        <div className="text-[11px] text-stone-400 break-all">
                          <strong className="text-stone-300">URI:</strong> {selectedNft.tokenUri}
                        </div>

                        <pre className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[10px] text-stone-300 overflow-x-auto leading-relaxed">
{JSON.stringify(
  {
    name: selectedNft.name,
    description: "PrepSpaces University Web3 Engineering Genesis Credential NFT",
    image: `ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/${selectedNft.id}.png`,
    attributes: [
      { trait_type: "Course Track", value: "Blockchain Architecture" },
      { trait_type: "Rarity Tier", value: selectedNft.rarity },
      { trait_type: "Specialization", value: selectedNft.trait },
      { trait_type: "Audit Competency Score", value: selectedNft.score }
    ]
  },
  null,
  2
)}
                        </pre>

                        {/* Receiver Reentrancy / Safety Tester */}
                        <div className="pt-2 border-t border-stone-800">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-stone-300 font-bold">safeTransferFrom Test:</span>
                            <label className="flex items-center gap-1.5 text-stone-400 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={nftSimulateUnsafeReceiver}
                                onChange={(e) => setNftSimulateUnsafeReceiver(e.target.checked)}
                                className="rounded accent-orange-500"
                              />
                              Simulate Contract Missing onERC721Received
                            </label>
                          </div>
                          <button
                            onClick={handleNftSafeTransfer}
                            className="mt-2 w-full py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-mono text-xs transition cursor-pointer"
                          >
                            Execute safeTransferFrom()
                          </button>
                          {nftTransferStatus && (
                            <div
                              className={`mt-2 p-2 rounded-lg text-[10px] font-mono ${
                                nftTransferStatus.success
                                  ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                                  : "bg-red-950 text-red-300 border border-red-800"
                              }`}
                            >
                              {nftTransferStatus.msg}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SIMULATOR 3: ERC-1155 MULTI-TOKEN INVENTORY */}
                {simulatorTab === "erc1155" && (
                  <div className="mt-6 space-y-6">
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-800">
                            ERC-1155 Multi-Token Inventory Matrix
                          </h3>
                          <p className="text-xs text-stone-600 mt-0.5">
                            Both fungible currencies and non-fungible items reside inside a single smart contract.
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                          Batch Transfer Gas Optimization: ~65% Lower Gas
                        </span>
                      </div>
                    </div>

                    {/* Inventory Table */}
                    <div className="overflow-x-auto rounded-2xl border border-stone-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-stone-100/80 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                          <tr>
                            <th className="p-3">Token ID</th>
                            <th className="p-3">Item Name</th>
                            <th className="p-3">Asset Classification</th>
                            <th className="p-3">Alice Balance</th>
                            <th className="p-3">Bob Balance</th>
                            <th className="p-3">Treasury Reserve</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100 font-mono">
                          {erc1155Items.map((item) => (
                            <tr key={item.id} className="hover:bg-stone-50">
                              <td className="p-3 font-bold text-orange-600">ID #{item.id}</td>
                              <td className="p-3 font-sans font-bold text-stone-900">{item.name}</td>
                              <td className="p-3">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                    item.type === "Fungible"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-amber-100 text-amber-800"
                                  }`}
                                >
                                  {item.type}
                                </span>
                              </td>
                              <td className="p-3 text-stone-800 font-bold">{erc1155Balances.alice[item.id] || 0}</td>
                              <td className="p-3 text-stone-800 font-bold">{erc1155Balances.bob[item.id] || 0}</td>
                              <td className="p-3 text-stone-600">{erc1155Balances.treasury[item.id] || 0}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Batch Transfer Simulator Box */}
                    <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-4">
                      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                        <span className="text-xs font-mono font-bold text-amber-400">
                          safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">Atomic Multi-Asset Settlement</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">From:</label>
                          <select
                            value={erc1155Sender}
                            onChange={(e) => setErc1155Sender(e.target.value)}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 font-mono"
                          >
                            <option value="alice">Alice</option>
                            <option value="bob">Bob</option>
                            <option value="treasury">Treasury</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">To:</label>
                          <select
                            value={erc1155Recipient}
                            onChange={(e) => setErc1155Recipient(e.target.value)}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 font-mono"
                          >
                            <option value="bob">Bob</option>
                            <option value="alice">Alice</option>
                            <option value="treasury">Treasury</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">Gold Coins (ID: 1):</label>
                          <input
                            type="number"
                            value={batchGoldAmt}
                            onChange={(e) => setBatchGoldAmt(Number(e.target.value))}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 font-mono"
                            min="0"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-stone-400 mb-1">Mana Potions (ID: 2):</label>
                          <input
                            type="number"
                            value={batchPotionAmt}
                            onChange={(e) => setBatchPotionAmt(Number(e.target.value))}
                            className="w-full rounded-xl bg-stone-800 border border-stone-700 p-2 font-mono"
                            min="0"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <div className="text-xs text-stone-300 font-mono">
                          Gas Comparison: ERC-721 (2 calls): <span className="line-through text-red-400">142,000 gas</span> → ERC-1155 (1 batch): <span className="text-emerald-400 font-bold">51,800 gas</span> (63.5% saved)
                        </div>
                        <button
                          onClick={handleBatchTransfer}
                          className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-mono font-bold text-xs transition cursor-pointer shadow-md"
                        >
                          Execute safeBatchTransferFrom()
                        </button>
                      </div>

                      {batchStatus && (
                        <div
                          className={`p-3 rounded-xl text-xs font-mono ${
                            batchStatus.success
                              ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                              : "bg-red-950 text-red-300 border border-red-800"
                          }`}
                        >
                          {batchStatus.msg}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* SIMULATOR 4: TOKEN VESTING */}
                {simulatorTab === "vesting" && (
                  <div className="mt-6 space-y-6">
                    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 space-y-6">
                      <div className="border-b border-stone-200 pb-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                          Linear Vesting Formula with Cliff
                        </span>
                        <h3 className="text-lg font-bold text-stone-900 mt-1">
                          Vesting Schedule Simulator: 4-Year Linear with 12-Month Cliff
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1">
                          Slide elapsed months to observe the cliff unlock cliff threshold and continuous linear vesting rate.
                        </p>
                      </div>

                      {/* Slider Control */}
                      <div>
                        <div className="flex justify-between items-center text-xs font-mono mb-2">
                          <span className="font-bold text-stone-800">
                            Elapsed Timeline: <span className="text-orange-600 font-bold">{vestingElapsed} Months</span> (
                            {(vestingElapsed / 12).toFixed(1)} Years)
                          </span>
                          <span className="text-stone-500">Total Duration: 48 Months (4.0 Years)</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="48"
                          value={vestingElapsed}
                          onChange={(e) => setVestingElapsed(Number(e.target.value))}
                          className="w-full h-2 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-[#ea580c]"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-stone-400 mt-1">
                          <span>0m (TGE)</span>
                          <span className="text-amber-600 font-bold">12m (Cliff End)</span>
                          <span>24m (Year 2)</span>
                          <span>36m (Year 3)</span>
                          <span>48m (100% Vested)</span>
                        </div>
                      </div>

                      {/* Mathematical Output Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-center">
                          <span className="text-xs font-mono text-stone-500 uppercase block">Vested Tokens</span>
                          <span className="text-xl font-bold font-mono text-emerald-600 mt-1 block">
                            {vestedTokens.toLocaleString()} PREP
                          </span>
                          <span className="text-[11px] text-stone-400 font-mono">
                            {((vestedTokens / vestingTotal) * 100).toFixed(1)}% of total
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-center">
                          <span className="text-xs font-mono text-stone-500 uppercase block">Locked Tokens</span>
                          <span className="text-xl font-bold font-mono text-stone-700 mt-1 block">
                            {(vestingTotal - vestedTokens).toLocaleString()} PREP
                          </span>
                          <span className="text-[11px] text-stone-400 font-mono">
                            {(((vestingTotal - vestedTokens) / vestingTotal) * 100).toFixed(1)}% remaining
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-stone-200 text-center">
                          <span className="text-xs font-mono text-stone-500 uppercase block">Cliff Status</span>
                          <span
                            className={`text-sm font-bold font-mono mt-1 block ${
                              vestingElapsed < 12 ? "text-amber-600" : "text-emerald-600"
                            }`}
                          >
                            {vestingElapsed < 12 ? "CLIFF ACTIVE (0% Unlocked)" : "CLIFF PASSED (Linear Stream)"}
                          </span>
                          <span className="text-[10px] text-stone-400 font-mono">
                            {vestingElapsed < 12 ? "Releases 250,000 PREP at month 12" : "+20,833.33 PREP / month"}
                          </span>
                        </div>
                      </div>

                      {/* Formula Card */}
                      <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
                        <div className="text-amber-400 font-bold">// Mathematical Specification</div>
                        <div className="text-stone-300">
                          Total Allocation (A) = 1,000,000 PREP | Cliff (T_cliff) = 12 months | Total Duration (T) = 48 months
                        </div>
                        <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 text-[11px] text-orange-300">
                          {vestingElapsed < 12
                            ? "V(t) = 0 (t < T_cliff)"
                            : `V(${vestingElapsed}) = 1,000,000 * (${vestingElapsed} / 48) = ${vestedTokens.toLocaleString()} PREP`}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: PRACTICAL LAB & PROJECT ASSIGNMENT (PARTS 16 & 17) */}
          {activeTab === "lab" && (
            <div className="space-y-10">
              {/* PART 16: Practical Lab */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 16 • Hands-On Engineering Laboratory
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Create an ERC-20 Token &amp; NFT Collection
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Build, test, deploy, and verify production-grade OpenZeppelin smart contracts on the Ethereum Sepolia testnet.
                  </p>
                </div>

                {/* Lab Environment Table */}
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                      <tr>
                        <th className="p-3">Tool / Framework</th>
                        <th className="p-3">Version / Environment</th>
                        <th className="p-3">Purpose in Architecture</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-bold text-stone-900">Solidity</td>
                        <td className="p-3 font-mono text-orange-600">^0.8.24</td>
                        <td className="p-3">Smart contract implementation with built-in arithmetic overflow protection.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">Hardhat</td>
                        <td className="p-3 font-mono text-stone-800">Latest Node.js</td>
                        <td className="p-3">Local blockchain simulation, compilation, scripting, and automated testing framework.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">@openzeppelin/contracts</td>
                        <td className="p-3 font-mono text-stone-800">^5.0.0</td>
                        <td className="p-3">Audited ERC-20, ERC-721URIStorage, and Ownable security primitives.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">Sepolia Testnet</td>
                        <td className="p-3 font-mono text-stone-800">Chain ID: 11155111</td>
                        <td className="p-3">Ethereum PoS public testnet for live testing and explorer verification.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Step 1 */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 1 — Initialize Hardhat Workspace &amp; Directory Tree
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <div className="text-amber-400 font-bold mb-1">// Terminal Setup Commands</div>
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`mkdir erc-token-lab
cd erc-token-lab
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts`}
                    </pre>
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono text-stone-700">
                    <strong className="block text-stone-900 font-bold mb-1 font-sans">Required Project Directory Structure:</strong>
                    erc-token-lab/<br />
                    ├── contracts/<br />
                    │&nbsp;&nbsp;&nbsp;├── PrepToken.sol<br />
                    │&nbsp;&nbsp;&nbsp;└── PrepSpacesNFT.sol<br />
                    ├── metadata/<br />
                    │&nbsp;&nbsp;&nbsp;└── 1.json<br />
                    ├── scripts/<br />
                    │&nbsp;&nbsp;&nbsp;└── deploy.js<br />
                    ├── test/<br />
                    │&nbsp;&nbsp;&nbsp;├── PrepToken.test.js<br />
                    │&nbsp;&nbsp;&nbsp;└── PrepSpacesNFT.test.js<br />
                    └── hardhat.config.js
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 2 — Implement Capped ERC-20 Token: contracts/PrepToken.sol
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PrepToken is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 1_000_000 * 10 ** 18;

    constructor() ERC20("PrepToken", "PREP") Ownable(msg.sender) {
        _mint(msg.sender, 500_000 * 10 ** 18);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(
            totalSupply() + amount <= MAX_SUPPLY,
            "Maximum supply exceeded"
        );
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}`}
                    </pre>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 3 — Implement ERC-721 NFT Collection: contracts/PrepSpacesNFT.sol
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PrepSpacesNFT is ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    constructor() ERC721("PrepSpaces Genesis", "PREPNFT") Ownable(msg.sender) {}

    function safeMint(address to, string memory uri) public onlyOwner returns (uint256) {
        _nextTokenId++;
        uint256 tokenId = _nextTokenId;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }
}`}
                    </pre>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 4 — Create OpenSea Compatible Metadata: metadata/1.json
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`{
  "name": "PrepSpaces Genesis Certificate #1",
  "description": "Certified University Blockchain Engineering Graduate",
  "image": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.png",
  "attributes": [
    { "trait_type": "Track", "value": "Blockchain & Smart Contracts" },
    { "trait_type": "Auditing Grade", "value": "A+" },
    { "trait_type": "Specialization", "value": "EVM Internals & DeFi" },
    { "trait_type": "Issue Year", "value": 2026 }
  ]
}`}
                    </pre>
                  </div>
                </div>

                {/* Step 5 & 6 Tests */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 5 &amp; 6 — Automated Unit Test Suites (Mocha &amp; Chai)
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <div className="text-amber-400 font-bold mb-1">// test/PrepToken.test.js</div>
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PrepToken ERC-20 Test Suite", function () {
  let token, owner, alice, bob;

  beforeEach(async function () {
    [owner, alice, bob] = await ethers.getSigners();
    const Factory = await ethers.getContractFactory("PrepToken");
    token = await Factory.deploy();
  });

  it("Should assign initial supply of 500,000 PREP to owner", async function () {
    const expected = ethers.parseEther("500000");
    expect(await token.balanceOf(owner.address)).to.equal(expected);
    expect(await token.totalSupply()).to.equal(expected);
  });

  it("Should allow owner to mint additional tokens up to MAX_SUPPLY", async function () {
    const mintAmount = ethers.parseEther("100000");
    await token.mint(alice.address, mintAmount);
    expect(await token.balanceOf(alice.address)).to.equal(mintAmount);
  });

  it("Should revert when minting exceeds 1,000,000 MAX_SUPPLY", async function () {
    const excess = ethers.parseEther("500001");
    await expect(token.mint(alice.address, excess)).to.be.revertedWith(
      "Maximum supply exceeded"
    );
  });

  it("Should allow token burning and decrement total supply", async function () {
    const burnAmt = ethers.parseEther("50000");
    await token.burn(burnAmt);
    expect(await token.totalSupply()).to.equal(ethers.parseEther("450000"));
  });
});`}
                    </pre>
                  </div>
                </div>

                {/* Step 7 Deployment */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Step 7 — Sepolia Deployment &amp; Etherscan Verification
                  </h3>
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200 font-mono text-xs overflow-x-auto">
                    <pre className="text-stone-300 leading-relaxed text-[11px]">
{`// Run deployment to Sepolia:
npx hardhat run scripts/deploy.js --network sepolia

// Verify source code on Etherscan:
npx hardhat verify --network sepolia <DEPLOYED_TOKEN_ADDRESS>`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* PART 17: Advanced Project Assignment */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 17 • Capstone Project Assignment
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Build a Complete PrepSpaces Token Ecosystem
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Design and deploy a unified Web3 ecosystem combining a capped ERC-20 utility token, a soulbound ERC-721 certification pass, and a linear token vesting vault with cliff protection.
                  </p>
                </div>

                {/* Rubric Table */}
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50 border-b border-stone-200 font-mono text-[11px] text-stone-700">
                      <tr>
                        <th className="p-3">Evaluation Milestone</th>
                        <th className="p-3">Weight</th>
                        <th className="p-3">Technical Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-600">
                      <tr>
                        <td className="p-3 font-bold text-stone-900">1. Capped ERC-20 Utility Token</td>
                        <td className="p-3 font-mono font-bold text-orange-600">25 Marks</td>
                        <td className="p-3">Implements hard supply ceiling, burning mechanics, access control, and zero-address transfer guards.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">2. ERC-721 NFT Certification Pass</td>
                        <td className="p-3 font-mono font-bold text-orange-600">25 Marks</td>
                        <td className="p-3">OpenZeppelin ERC721URIStorage, IPFS JSON metadata schema, safeTransferFrom safety callbacks.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">3. Automated Unit Testing Suite</td>
                        <td className="p-3 font-mono font-bold text-orange-600">20 Marks</td>
                        <td className="p-3">&gt;95% line coverage in Hardhat or Foundry, asserting supply cap invariants, revert errors, and allowances.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">4. Linear Vesting Contract with Cliff</td>
                        <td className="p-3 font-mono font-bold text-orange-600">15 Marks</td>
                        <td className="p-3">Mathematical implementation of 12-month cliff with 48-month linear release formula, nonReentrant guards.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-stone-900">5. Sepolia Deployment &amp; Explorer Verification</td>
                        <td className="p-3 font-mono font-bold text-orange-600">15 Marks</td>
                        <td className="p-3">Live verified contracts on Sepolia Etherscan with documented README and reproduction scripts.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          )}

          {/* TAB 4: KNOWLEDGE ASSESSMENT & INTERVIEW (PART 18) */}
          {activeTab === "quiz" && (
            <div className="space-y-10">
              {/* SECTION 1: 20 MULTIPLE CHOICE CONCEPTUAL QUESTIONS */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                      Part 18 • Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                      Conceptual Assessment (20 Examination Questions)
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Validate your comprehension of token architectures, allowance mechanics, safe NFT callbacks, and economic supply invariants.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-[#ea580c]">
                      Score: {quizScore} / {quizQuestions.length} ({quizQuestions.length > 0 ? Math.round((quizScore / quizQuestions.length) * 100) : 0}%)
                    </div>
                    <button
                      onClick={handleResetQuiz}
                      className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition cursor-pointer"
                    >
                      Reset Quiz
                    </button>
                  </div>
                </div>

                {/* Question List */}
                <div className="space-y-6">
                  {quizQuestions.map((q, idx) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.answer;

                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-2xl border transition ${
                          isAnswered
                            ? isCorrect
                              ? "border-emerald-200 bg-emerald-50/20"
                              : "border-red-200 bg-red-50/20"
                            : "border-stone-200 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-bold text-stone-900 leading-snug">
                            <span className="font-mono text-orange-600 mr-1.5">Q{idx + 1}.</span>
                            {q.question}
                          </h3>
                        </div>

                        <div className="mt-3 space-y-2">
                          {q.options.map((opt, optIdx) => {
                            let btnStyle = "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100";
                            if (isAnswered) {
                              if (optIdx === q.answer) {
                                btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-300";
                              } else if (optIdx === selected) {
                                btnStyle = "border-red-500 bg-red-50 text-red-900 font-bold ring-1 ring-red-300";
                              } else {
                                btnStyle = "border-stone-200 bg-white text-stone-400 opacity-60";
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isAnswered}
                                onClick={() => handleSelectAnswer(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center gap-2.5 ${btnStyle}`}
                              >
                                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-mono shrink-0">
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {isAnswered && (
                          <div
                            className={`mt-3 p-3 rounded-xl text-xs leading-relaxed ${
                              isCorrect ? "bg-emerald-100/70 text-emerald-900" : "bg-red-100/70 text-red-900"
                            }`}
                          >
                            <span className="font-bold block mb-0.5 font-mono">
                              {isCorrect ? "✓ Correct Answer:" : "✗ Incorrect (Review Below):"}
                            </span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* SECTION 2: 14 SENIOR WEB3 ARCHITECT INTERVIEW QUESTIONS */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 18 • Elite Career Preparation
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Advanced Senior Web3 Architect Interview Questions (14 In-Depth Scenarios)
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Defend token architectures, evaluate front-running vulnerabilities, formulate property invariants, and architect production NFT marketplaces.
                  </p>
                </div>

                <div className="space-y-3">
                  {interviewQuestions.map((iq) => {
                    const isOpen = expandedInterview === iq.id;
                    return (
                      <div key={iq.id} className="rounded-2xl border border-stone-200 bg-stone-50/50 overflow-hidden">
                        <button
                          onClick={() => setExpandedInterview(isOpen ? null : iq.id)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-stone-100/60 transition cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                              {iq.id}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-stone-900">
                              {iq.question}
                            </span>
                          </div>
                          <span className="text-stone-400 shrink-0 font-mono text-xs">
                            {isOpen ? "Hide ▲" : "Answer ▼"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="p-4 sm:p-6 bg-white border-t border-stone-200 text-xs text-stone-700 space-y-3 leading-relaxed">
                            <div className="whitespace-pre-line font-sans">
                              {iq.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}

          {/* TAB 5: COMPLETION TRACKER & SUMMARY (PART 19) */}
          {activeTab === "tracker" && (
            <div className="space-y-10">
              {/* Checklist Section */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                      Academic Competency Tracker
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                      Module 12 Mastery Checklist (26 Learning Outcomes)
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Your progress automatically persists in localStorage across browser sessions.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-stone-700">
                      {completedCount} of {checklistItems.length} Complete ({completionPercentage}%)
                    </span>
                    <div className="w-24 h-2 bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#ea580c] rounded-full transition-all duration-300"
                        style={{ width: `${completionPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {checklistItems.map((item, idx) => {
                    const isDone = completedChecklist[idx];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleChecklistItem(idx)}
                        className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start gap-3 ${
                          isDone
                            ? "border-emerald-300 bg-emerald-50/40 text-emerald-950"
                            : "border-stone-200 bg-white hover:border-stone-300 text-stone-700"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition ${
                            isDone ? "bg-emerald-600 border-emerald-600 text-white" : "border-stone-300 bg-stone-50"
                          }`}
                        >
                          {isDone && <Check size={13} strokeWidth={3} />}
                        </div>
                        <span className="text-xs leading-relaxed font-sans">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* PART 19: Module Summary */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 19 • Module Summary
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Key Concepts to Remember
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">ERC-20 (Fungible)</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Uniform tokens where each unit is interchangeable. Uses balance and allowance mappings.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">ERC-721 (Non-Fungible)</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Unique digital assets identified by discrete uint256 tokenIds with metadata URIs.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">ERC-1155 (Multi-Token)</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Hybrid standard bundling fungible and non-fungible items into one contract with batching.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">Minting &amp; Burning</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Supply expansion (from 0x0) and contraction (to 0x0) maintaining conservation laws.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">Allowances &amp; Approvals</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Two-step authorization pattern enabling smart contracts to execute transfers on behalf of EOAs.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <strong className="text-stone-900 font-bold block mb-1">Token Vesting &amp; Governance</strong>
                    <p className="text-stone-600 leading-relaxed">
                      Cliff thresholds, linear unlock formulas, and checkpointed voting power defending against flash loans.
                    </p>
                  </div>
                </div>

                {/* Recommended Resources */}
                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-sm font-bold text-[#18181b] mb-3">
                    Recommended Official Documentation &amp; Standards
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
                    {[
                      { name: "Ethereum — Token Standards", url: "https://ethereum.org/developers/docs/standards/tokens/" },
                      { name: "ERC-20 Specification (EIP-20)", url: "https://eips.ethereum.org/EIPS/eip-20" },
                      { name: "ERC-721 Specification (EIP-721)", url: "https://eips.ethereum.org/EIPS/eip-721" },
                      { name: "ERC-1155 Specification (EIP-1155)", url: "https://eips.ethereum.org/EIPS/eip-1155" },
                      { name: "ERC-2981 Royalty Standard", url: "https://eips.ethereum.org/EIPS/eip-2981" },
                      { name: "ERC-2612 Permit Extension", url: "https://eips.ethereum.org/EIPS/eip-2612" },
                      { name: "OpenZeppelin Contracts Docs", url: "https://docs.openzeppelin.com/contracts" },
                      { name: "OpenZeppelin Contracts Wizard", url: "https://wizard.openzeppelin.com/" },
                      { name: "Official Solidity Docs", url: "https://docs.soliditylang.org/" }
                    ].map((res, i) => (
                      <a
                        key={i}
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl border border-stone-200 hover:border-orange-300 hover:bg-orange-50/30 transition flex items-center justify-between text-stone-700"
                      >
                        <span className="font-semibold truncate">{res.name}</span>
                        <ExternalLink size={12} className="text-stone-400 shrink-0 ml-1.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}

        </div>

        {/* Bottom Progression & Navigation Bar */}
        <div className="mt-12 rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/blockchain/wallets-keys")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-stone-200 hover:border-stone-300 bg-stone-50 text-stone-700 text-xs font-bold transition cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Previous: 11. Wallets, Keys &amp; Transaction Signing</span>
          </button>

          <button
            onClick={() => navigate("/learning/blockchain/security-vulnerabilities")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer shadow-md"
          >
            <span>Next: 13. Smart Contract Security &amp; Common Vulnerabilities</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
