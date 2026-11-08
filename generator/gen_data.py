# projectx/generator/gen_data.py
import json

CHECKLIST_ITEMS = [
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
]

QUIZ_QUESTIONS = [
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
        "explanation": "ERC-1155 is the Multi-Token standard. A single contract instance can manage thousands of different asset types—both fungible (e.g. gold coins, potions) and non-fungible (e.g. unique legendary swords) with efficient batch operations."
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
]

INTERVIEW_QUESTIONS = [
    {
        "id": 1,
        "question": "How would you implement a capped ERC-20 token in production Solidity?",
        "answer": """To implement a capped ERC-20 token, extend OpenZeppelin's ERC20 and ERC20Capped (or enforce the cap in the mint function):

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";

contract PrepTokenCapped is ERC20, Ownable2Step {
    uint256 public immutable maxSupply;

    error CapExceeded(uint256 attempted, uint256 maxSupply);

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 cap_,
        uint256 initialMint_
    ) ERC20(name_, symbol_) Ownable2Step(msg.sender) {
        require(cap_ > 0, "Cap must be > 0");
        require(initialMint_ <= cap_, "Initial mint exceeds cap");
        maxSupply = cap_;
        if (initialMint_ > 0) {
            _mint(msg.sender, initialMint_);
        }
    }

    function mint(address to, uint256 amount) external onlyOwner {
        if (totalSupply() + amount > maxSupply) {
            revert CapExceeded(totalSupply() + amount, maxSupply);
        }
        _mint(to, amount);
    }
}
```

Key Architectural Safeguards:
1. Use `immutable` for `maxSupply` to save gas (reads cost 0 storage gas via bytecode inlining).
2. Use custom errors (`CapExceeded`) instead of `require` string literals to conserve deployment and execution gas.
3. Use `Ownable2Step` instead of standard `Ownable` to prevent accidental transfer of ownership to a dead or incorrect address.
4. Verify invariant: `totalSupply() <= maxSupply` holds true for every state transition."""
    },
    {
        "id": 2,
        "question": "How does transferFrom() use the allowance mapping, and how does OpenZeppelin optimize infinite approvals?",
        "answer": """In ERC-20, `transferFrom(address from, address to, uint256 amount)` operates as follows:

```solidity
function transferFrom(address from, address to, uint256 amount) public virtual returns (bool) {
    address spender = msg.sender;
    _spendAllowance(from, spender, amount);
    _transfer(from, to, amount);
    return true;
}
```

Internal allowance deduction logic:
```solidity
function _spendAllowance(address owner, address spender, uint256 amount) internal virtual {
    uint256 currentAllowance = allowance(owner, spender);
    if (currentAllowance != type(uint256).max) {
        require(currentAllowance >= amount, "ERC20: insufficient allowance");
        unchecked {
            _approve(owner, spender, currentAllowance - amount, false);
        }
    }
}
```

Gas Optimization with Infinite Approval (`type(uint256).max`):
1. When a user approves `type(uint256).max` (2^256 - 1), the contract treats it as unlimited authorization.
2. In `_spendAllowance`, if `currentAllowance == type(uint256).max`, the contract skips updating storage (`_approve`).
3. Skipping an `SSTORE` operation saves 5,000 to 20,000 gas on every single DEX trade or lending deposit!"""
    },
    {
        "id": 3,
        "question": "Explain the ERC-20 approval race condition and how modern protocols mitigate it.",
        "answer": """The Approval Race Condition (Front-Running Attack):
Suppose Alice approves Bob for 100 tokens: `allowance[Alice][Bob] = 100`.
Later, Alice decides to reduce Bob's allowance to 50 tokens and sends `approve(Bob, 50)`.

Attack Sequence:
1. Bob monitors the mempool and observes Alice's pending `approve(Bob, 50)` transaction.
2. Bob submits a `transferFrom(Alice, Bob, 100)` transaction with higher gas price (priority fee).
3. Miners/validators order Bob's transaction BEFORE Alice's transaction. Bob drains 100 tokens.
4. Alice's transaction executes next, resetting Bob's allowance to 50 tokens.
5. Bob immediately submits another `transferFrom(Alice, Bob, 50)`.
6. Result: Bob stole 150 tokens instead of the intended 50!

Production Mitigations:
1. Two-Step Zero Reset: Alice must first call `approve(Bob, 0)`, wait for block confirmation, and only then call `approve(Bob, 50)`.
2. Safe Increase / Decrease Pattern: Use `increaseAllowance(spender, addedValue)` and `decreaseAllowance(spender, subtractedValue)` instead of raw `approve`.
3. EIP-2612 Permit: Use cryptographic signatures with monotonic nonces and deadlines, preventing mempool replay and race tampering."""
    },
    {
        "id": 4,
        "question": "How would you prevent unauthorized token minting in a multi-role protocol?",
        "answer": """Never rely on simple boolean flags or a single private key for high-value minting. Implement Role-Based Access Control (RBAC) with OpenZeppelin `AccessControl`:

```solidity
bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
    if (totalSupply() + amount > maxSupply) revert CapExceeded();
    _mint(to, amount);
}
```

Comprehensive Production Defense Strategy:
1. Multi-Sig Governance: Grant `ADMIN_ROLE` strictly to a multi-signature wallet (e.g. Safe 3-of-5) or on-chain TimelockController.
2. Timelock Delays: Enforce a mandatory 48-hour timelock between proposing a new minter contract and activating the role.
3. Rate Limiting (Epoch Caps): Cap the maximum number of tokens that can be minted per 24 hours (e.g., maximum 5% of circulating supply per day).
4. Circuit Breakers: Implement an emergency pause (`Pausable`) operable by an automated monitoring sentinel (e.g. OpenZeppelin Defender or Forta bot) upon anomaly detection."""
    },
    {
        "id": 5,
        "question": "What happens when an ERC-721 token is transferred to a contract that does not implement IERC721Receiver?",
        "answer": """The Danger of `transferFrom` vs `safeTransferFrom`:
If a user calls standard `transferFrom(from, recipientContract, tokenId)` to send an NFT to a smart contract that does not have logic to handle or withdraw ERC-721 tokens, the NFT becomes PERMANENTLY TRAPPED forever. No one can ever retrieve it.

How `safeTransferFrom` Solves This:
`safeTransferFrom` checks if the recipient is a contract address (`to.code.length > 0`). If it is, it executes an external call to `IERC721Receiver(to).onERC721Received(...)`:

```solidity
function _checkOnERC721Received(
    address from,
    address to,
    uint256 tokenId,
    bytes memory data
) private returns (bool) {
    if (to.code.length > 0) {
        try IERC721Receiver(to).onERC721Received(msg.sender, from, tokenId, data) returns (bytes4 retval) {
            return retval == IERC721Receiver.onERC721Received.selector;
        } catch (bytes memory reason) {
            if (reason.length == 0) {
                revert("ERC721: transfer to non ERC721Receiver implementer");
            } else {
                assembly {
                    revert(add(32, reason), mload(reason))
                }
            }
        }
    }
    return true;
}
```

If the recipient contract reverts, returns an invalid selector, or does not implement the function, the entire transaction reverts and the NFT remains safely with the original owner!"""
    },
    {
        "id": 6,
        "question": "How does an NFT marketplace or frontend retrieve and display token metadata efficiently?",
        "answer": """NFT Metadata Retrieval Pipeline:
1. On-Chain Query: The marketplace frontend or indexing backend queries `tokenURI(tokenId)` on the ERC-721 contract (or `uri(tokenId)` on ERC-1155).
2. URI Scheme Resolution:
   - If `ipfs://Qm.../1.json`: The indexer maps the URI to a dedicated high-speed IPFS gateway (e.g., `https://nftstorage.link/ipfs/Qm...` or Pinata/Cloudflare IPFS cache).
   - If `https://api.project.com/metadata/1`: It queries the centralized REST endpoint via HTTPS GET.
   - If `data:application/json;base64,...`: The indexer decodes the base64 string directly without external network requests (fully on-chain).
3. Schema Parsing: The JSON response is validated against the OpenSea/EIP metadata standard:
   - `name`: string
   - `description`: string
   - `image`: URI pointing to media asset
   - `attributes`: array of `{ "trait_type": "...", "value": "..." }`
4. Indexer Ingestion & Caching: Specialized indexers (The Graph, Reservoir, Alchemy NFT API) store metadata, calculate trait rarity scores, and cache optimized thumbnails in a CDN for sub-second UI rendering."""
    },
    {
        "id": 7,
        "question": "Deep dive: Compare ERC-721 and ERC-1155 across state architecture, gas consumption, and batch capabilities.",
        "answer": """Architectural Comparison Matrix:

| Dimension | ERC-721 | ERC-1155 |
| :--- | :--- | :--- |
| **Asset Identity** | Single unique NFT per tokenId | Multi-Token: both Fungible & Non-Fungible in 1 contract |
| **Ownership Storage** | `mapping(uint256 => address) _owners` | `mapping(uint256 => mapping(address => uint256)) _balances` |
| **Balance Tracking** | `mapping(address => uint256) _balances` (count of NFTs) | `_balances[tokenId][account]` (exact balance per token ID) |
| **Batch Transfers** | No native batching; requires loop of individual transfer calls | Native `safeBatchTransferFrom(from, to, ids[], amounts[], data)` |
| **Approvals** | Token-level (`approve`) & Operator-level (`setApprovalForAll`) | Operator-level only (`setApprovalForAll`) |
| **Metadata URI** | `tokenURI(uint256 tokenId)` string per token | Parameterized `uri(uint256 id)` returning `{id}.json` pattern |
| **Gas Cost for 10 Items** | ~500,000 gas (10 distinct storage writes) | ~85,000 gas (single transaction batch loop) |

Conclusion: For games, metaverse platforms, and multi-asset ecosystems, ERC-1155 achieves 60%–80% gas savings over deploying multiple ERC-20 and ERC-721 contracts."""
    },
    {
        "id": 8,
        "question": "How would you implement a secure NFT minting mechanism with a Merkle allowlist and maximum wallet cap?",
        "answer": """Production Merkle Minting Contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract SecureGenesisNFT is ERC721, Ownable, ReentrancyGuard {
    bytes32 public merkleRoot;
    uint256 public constant MINT_PRICE = 0.05 ether;
    uint256 public constant MAX_SUPPLY = 5000;
    uint256 public constant MAX_PER_WALLET = 3;

    uint256 public totalMinted;
    mapping(address => uint256) public walletMintCount;

    error ExceedsMaxSupply();
    error ExceedsWalletLimit();
    error IncorrectPayment();
    error InvalidMerkleProof();

    constructor(bytes32 _merkleRoot) ERC721("PrepGenesis", "PREPGEN") Ownable(msg.sender) {
        merkleRoot = _merkleRoot;
    }

    function allowlistMint(bytes32[] calldata proof, uint256 quantity)
        external
        payable
        nonReentrant
    {
        if (totalMinted + quantity > MAX_SUPPLY) revert ExceedsMaxSupply();
        if (walletMintCount[msg.sender] + quantity > MAX_PER_WALLET) revert ExceedsWalletLimit();
        if (msg.value != MINT_PRICE * quantity) revert IncorrectPayment();

        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(msg.sender))));
        if (!MerkleProof.verify(proof, merkleRoot, leaf)) revert InvalidMerkleProof();

        walletMintCount[msg.sender] += quantity;
        for (uint256 i = 0; i < quantity; i++) {
            totalMinted++;
            _safeMint(msg.sender, totalMinted);
        }
    }

    function withdraw() external onlyOwner {
        (bool success, ) = payable(owner()).call{value: address(this).balance}("");
        require(success, "Withdraw failed");
    }
}
```

Security Best Practices:
1. Merkle Tree Allowlist: Verifying an off-chain root saves massive deployment gas compared to storing 10,000 addresses on-chain.
2. Checks-Effects-Interactions & `nonReentrant` protect against malicious receiver callbacks.
3. Strict payment equality check (`msg.value == price * qty`) prevents underpayment or stuck dust."""
    },
    {
        "id": 9,
        "question": "How would you implement token vesting with a cliff and linear release in Solidity?",
        "answer": r"""Mathematical Vesting Formula:
Let $A$ = total allocation, $T$ = total duration, $T_{\text{cliff}}$ = cliff duration, $t$ = elapsed time since start.
- If $t < T_{\text{cliff}}$: Vested Amount $V(t) = 0$
- If $t \ge T$: Vested Amount $V(t) = A$
- If $T_{\text{cliff}} \le t < T$: Vested Amount $V(t) = A \times \frac{t}{T}$
- Claimable Amount = $V(t) - \text{alreadyReleased}$

Production Implementation:
```solidity
function vestedAmount(uint64 timestamp) public view returns (uint256) {
    if (timestamp < start + cliffDuration) {
        return 0;
    } else if (timestamp >= start + totalDuration) {
        return totalAllocation;
    } else {
        return (totalAllocation * (timestamp - start)) / totalDuration;
    }
}

function release() external nonReentrant {
    uint256 releasable = vestedAmount(uint64(block.timestamp)) - released;
    require(releasable > 0, "No tokens due for release");
    released += releasable;
    token.safeTransfer(beneficiary, releasable);
    emit TokensReleased(beneficiary, releasable);
}
```

Key Implementation Points:
1. Always compute products before divisions: `(totalAllocation * elapsed) / totalDuration` to avoid precision loss.
2. Use SafeERC20 (`token.safeTransfer`) to handle non-compliant ERC-20 tokens that return void.
3. Mark state before external call (`released += releasable`) to maintain checks-effects-interactions integrity."""
    },
    {
        "id": 10,
        "question": "What security risks exist in ERC-20 token approval mechanisms, and how can they be mitigated?",
        "answer": """Approval Security Risks:
1. Unlimited / Infinite Approvals (`type(uint256).max`):
   - Users habitually grant maximum allowance to save gas on future trades.
   - If the approved protocol (e.g. SushiSwap router, Multichain bridge) suffers a smart contract exploit, the attacker can execute `transferFrom` on every user who approved the contract, draining their wallet even months after their last interaction!
2. Front-Running Race Condition:
   - Modifying allowances from $N$ to $M$ allows an adversary to drain $N + M$ tokens via mempool sandwiching.
3. Phishing Permit Signatures (EIP-712):
   - Malicious websites trick users into signing an off-chain `Permit` signature that authorizes draining of their tokens without an on-chain transaction.

Production Mitigations:
1. Revoke Allowances: Use tools like revoke.cash or enforce exact-amount approvals (`approve(spender, exactAmount)`).
2. ERC-2612 Deadlines & Nonces: Ensure permit signatures contain short expiry deadlines (e.g. 15 minutes) and invalidate used nonces.
3. SafeERC20 `forceApprove`: OpenZeppelin's `forceApprove` resets allowance to 0 before setting a new value if non-zero."""
    },
    {
        "id": 11,
        "question": "How would you design a decentralized NFT marketplace smart contract?",
        "answer": """Core Marketplace Architecture:

```solidity
struct Listing {
    address seller;
    address nftAddress;
    uint256 tokenId;
    uint256 price;
    bool isActive;
}

// listingId => Listing
mapping(uint256 => Listing) public listings;
```

Key Architectural Workflows:
1. Non-Custodial Listing:
   - The seller does NOT transfer the NFT to the marketplace on listing.
   - The seller calls `nft.setApprovalForAll(marketplaceAddress, true)` and signs an off-chain order (or on-chain listing).
   - This allows the seller to retain custody and display the NFT in their wallet until the moment of sale!
2. Atomic Purchase Execution:
   - Buyer sends `msg.value == listing.price`.
   - Calculate royalty fee via ERC-2981 (`royaltyInfo(tokenId, price)`).
   - Calculate marketplace protocol fee (e.g., 2.5%).
   - Transfer royalty to creator, protocol fee to treasury, and remaining proceeds to seller.
   - Execute `IERC721(nftAddress).safeTransferFrom(seller, buyer, tokenId)`.
   - Mark listing inactive and emit `ItemSold` event.
3. Reentrancy Protection:
   - Apply `nonReentrant` modifier to `buyItem` and `cancelListing`.
   - Re-entrancy guard ensures malicious receiver fallback contracts cannot re-enter `buyItem` during ETH payouts."""
    },
    {
        "id": 12,
        "question": "How can governance token voting power become centralized, and what mechanisms protect against governance capture?",
        "answer": """Governance Centralization & Attack Vectors:
1. Flash-Loan Governance Attacks:
   - An attacker borrows 100M tokens from an Aave flash loan in block $N$, votes on a malicious proposal that drains the treasury, and repays the flash loan in the same transaction!
2. Low Voter Participation / Plutocracy:
   - Often <5% of token holders vote. A single whale or consortium holding 6% can pass arbitrary proposals.
3. Sybil Delegation:
   - Whales split holdings across dummy addresses to bypass per-wallet caps while retaining monolithic control.

Protective Mechanisms:
1. Historical Checkpointing (ERC20Votes):
   - Use OpenZeppelin `ERC20Votes` with historical checkpoints (`getPastVotes(account, proposalSnapshotBlock)`).
   - Voting power is measured at the block BEFORE the proposal was created, making flash loans completely ineffective!
2. Timelock Controller:
   - All passed proposals must sit in a Timelock contract for 48–72 hours before execution, allowing the community to exit or rage-quit if a malicious vote passes.
3. Quadratic Voting:
   - Voting cost scales quadratically ($Votes = \\sqrt{Tokens}$), giving broader influence to decentralized communities over individual whales."""
    },
    {
        "id": 13,
        "question": "What are the limitations of the ERC-2981 NFT Royalty standard?",
        "answer": """Critical Limitations of ERC-2981:
1. Informational Only (No On-Chain Enforcement):
   - ERC-2981 strictly returns data: `royaltyInfo(tokenId, salePrice) -> (receiver, royaltyAmount)`.
   - It DOES NOT and CANNOT force a marketplace contract to execute the payment! Marketplaces (like Blur, OpenSea 0% royalty modes) can choose to ignore the standard and pay zero royalties to creators.
2. Direct Wallet-to-Wallet Transfers:
   - When a user transfers an NFT via peer-to-peer `safeTransferFrom`, no sale price exists and zero royalty is triggered.
3. Off-Chain Order Books:
   - Marketplaces matching bids and asks off-chain can calculate fees arbitrarily without reading contract state.

Creator Workarounds & Modern Solutions:
- Operator Filter Registry: Contracts blacklist specific marketplace operator addresses that do not honor royalties (though this harms composability and decentralization).
- Creator Token Standards (ERC-721C): Require cryptographic proofs from compliant marketplace execution venues before permitting transfer."""
    },
    {
        "id": 14,
        "question": "How would you formulate and test token transfer conservation invariants?",
        "answer": """Token Invariant Formulation:
In financial smart contract engineering, mathematical invariants must hold across every valid execution path:

Invariant 1: Total Supply Conservation
$$\\sum_{a \\in \\text{Accounts}} \\text{balanceOf}(a) = \\text{totalSupply}()$$

Invariant 2: Transfer Conservation
For any transfer of amount $X$ from $A$ to $B$ (where $A \\neq B$ and no burn/fee applies):
$$\\text{balanceOf}(A)_{\\text{new}} + \\text{balanceOf}(B)_{\\text{new}} = \\text{balanceOf}(A)_{\\text{old}} + \\text{balanceOf}(B)_{\\text{old}}$$

Testing Methodology with Foundry Invariant Fuzzing:
```solidity
contract TokenInvariantTest is StdInvariant, Test {
    PrepToken public token;
    TokenHandler public handler;

    function setUp() public {
        token = new PrepToken();
        handler = new TokenHandler(token);
        targetContract(address(handler));
    }

    function invariant_totalSupplyEqualsSumOfBalances() public view {
        uint256 sumOfBalances = handler.ghost_totalBalances();
        assertEq(token.totalSupply(), sumOfBalances, "Invariant Violated: Sum of balances != totalSupply");
    }

    function invariant_totalSupplyNeverExceedsMaxCap() public view {
        assertLe(token.totalSupply(), token.MAX_SUPPLY(), "Invariant Violated: Total supply exceeded max cap");
    }
}
```

Foundry will generate thousands of randomized transaction sequences (random accounts, transfers, approvals, burns) to mathematically prove the invariant cannot be broken."""
    }
]

if __name__ == "__main__":
    print(f"Checklist items: {len(CHECKLIST_ITEMS)}")
    print(f"Quiz questions: {len(QUIZ_QUESTIONS)}")
    print(f"Interview questions: {len(INTERVIEW_QUESTIONS)}")
